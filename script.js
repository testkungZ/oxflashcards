// @ts-check

/**
 * @typedef {'A1'|'A2'|'B1'|'B2'} CefrLevel
 * @typedef {Object} VocabWord
 * @property {string} word
 * @property {string} partOfSpeech
 * @property {string} translation
 * @property {string} [definition]
 * @property {string} [example]
 * @property {string} [exampleTranslation]
 * @property {string} [phonetic]
 * @property {string} [phoneticUK]
 * @property {string} [syllables]
 * @property {string} [cefr]
 * @property {string} [topic]
 * @property {string} [register]
 * @property {string} [grammarPattern]
 * @property {string} [rootBreakdown]
 * @property {string[]} [collocations]
 * @property {string[]} [synonyms]
 * @property {string[]} [antonyms]
 * @property {string[]} [wordFamily]
 * @property {string[]} [forms]
 * @property {string[]} [phrases]
 * @property {string} [extraExample]
 * @property {string} [extraExampleTranslation]
 * @property {string} [usageTip]
 *
 * @typedef {Object} WordMastery
 * @property {number} streak
 * @property {number} reviewCount
 * @property {string|number} lastStudied
 * @property {number} nextReviewAt
 * @property {number} intervalDays
 *
 * @typedef {Object} SyncConfig
 * @property {string} url
 * @property {string} anonKey
 * @property {string} syncId
 * @property {number} [lastSyncedAt]
 */

document.addEventListener('DOMContentLoaded', () => {
  /* =========================================================
     * Constants & storage helpers
     * ========================================================= */
  /**
     * Built-in Firebase Web App config for zero-setup Google Sign-In across all devices/users.
     * Custom configs pasted in the Sync modal override this locally.
     * @type {{apiKey: string, authDomain: string, projectId: string, storageBucket?: string, messagingSenderId?: string, appId?: string, measurementId?: string}|null}
     */
  const FIREBASE_DEFAULT_CONFIG = {
    apiKey: "AIzaSyAe95HLQAt1C4z0plmQmSz755tzb73kDm8",
    authDomain: "oxflashcard.firebaseapp.com",
    projectId: "oxflashcard",
    storageBucket: "oxflashcard.firebasestorage.app",
    messagingSenderId: "441794795147",
    appId: "1:441794795147:web:872eeee84189165e62e68e",
    measurementId: "G-36GSY6NCFC"
  };

  const STORAGE = {
    status: 'ox3k_wordStatus_v1',     // { "word|pos": "known" | "review" }
    sessions: 'ox3k_sessions_v1',     // [ session records ]
    active: 'ox3k_activeSession_v1',  // in-progress session (for resume)
    prefs: 'ox3k_prefs_v1',           // { size: 20, sizeUpdatedAt, accentUpdatedAt }
    dailyGoal: 'ox3k_daily_goal_v1',  // { target: 20, targetUpdatedAt, date: 'YYYY-MM-DD', count: 0 }
    mastery: 'ox3k_word_mastery_v1',  // { [key]: { streak, reviewCount, lastStudied, nextReviewAt, intervalDays } }
    bookmarks: 'ox3k_bookmarks_v1',   // [ "word|pos", ... ]
    ActivityLog: 'ox3k_activity_v1',  // { "YYYY-MM-DD": count }
    usageTime: 'ox3k_usage_time_v1',  // { "YYYY-MM-DD": seconds }
    hourlyUsage: 'ox3k_hourly_usage_v1', // { "YYYY-MM-DD|HH": seconds }
    theme: 'ox3k_theme_mode',         // 'light' | 'dark'
    accent: 'ox3k_accent_v1',         // 'US' | 'UK'
    sbConfig: 'ox3k_sb_config_v1',    // { url, anonKey, syncId, lastSyncedAt }
    fbConfig: 'ox3k_fb_config_v1'     // { config, autoSync, lastSyncedAt, lastEmail, lastUid }
  };

  /**
   * Forward custom learning milestones to Google Analytics 4 when loaded.
   * @param {string} eventName
   * @param {Record<string, any>} [params]
   */
  function trackGAEvent(eventName, params = {}) {
    try {
      const gtagFn = /** @type {any} */ (window).gtag;
      if (typeof gtagFn === 'function') {
        gtagFn('event', eventName, params);
      }
    } catch (_) { }
  }

  /** @type {(() => void)|null} */
  let scheduleGoogleAutoSync = null;
  /** @type {(() => boolean)|null} */
  let isGoogleSignedIn = null;
  /** @type {(() => Promise<boolean>)|null} */
  let clearGoogleCloudData = null;
  /** @type {(() => void)|null} */
  let clearGoogleOwnership = null;

  const ICON_SVG = {
    moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    volOn: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
    volOff: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>',
    star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    zap: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    target: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    award: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    compass: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    layers: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    trophy: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    sparkles: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
    alert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    refresh: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',
    search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    book: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    sprout: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z"/></svg>',
    flame: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>'
  };

  // In-app "Reduce motion" (Profile) is applied on <html> before first paint-critical work
  try {
    if (localStorage.getItem('ox3k_reduce_motion') === 'true') document.documentElement.classList.add('ox-reduce-motion');
  } catch (_) { }
  const prefersReducedMotion = () =>
    document.documentElement.classList.contains('ox-reduce-motion') ||
    (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------------------------------------------------------
     * Pillar 1: Native WAAPI Spring Physics (OxMotion)
     * --------------------------------------------------------- */
  const OxMotion = {
    /** @param {HTMLElement|null} el */
    cancel(el) {
      if (!el) return;
      const anyEl = /** @type {any} */ (el);
      if (anyEl._oxAnim && typeof anyEl._oxAnim.cancel === 'function') {
        try { anyEl._oxAnim.cancel(); } catch (_) { }
        anyEl._oxAnim = null;
      }
    },
    /** @param {HTMLElement|null} el */
    springSnap(el) {
      if (!el) return;
      this.cancel(el);
      const fromTf = el.style.transform;
      const isFlipped = el.classList.contains('is-flipped') || el.classList.contains('flipped');
      el.style.transform = '';
      if (!fromTf || fromTf === 'none' || typeof el.animate !== 'function' || prefersReducedMotion()) return;
      const targetTf = isFlipped ? 'rotateY(180deg)' : 'translate3d(0px, 0px, 0px) rotate(0deg)';
      try {
        const anim = el.animate(
          [{ transform: fromTf }, { transform: targetTf }],
          { duration: 360, easing: 'cubic-bezier(0.22, 1.38, 0.36, 1)', fill: 'none' }
        );
        /** @type {any} */ (el)._oxAnim = anim;
        anim.onfinish = () => { /** @type {any} */ (el)._oxAnim = null; };
      } catch (_) { }
    },
    /** @param {HTMLElement|null} el */
    springPop(el) {
      if (!el || typeof el.animate !== 'function' || prefersReducedMotion()) return;
      try {
        el.animate(
          [
            { transform: 'scale(1)' },
            { transform: 'scale(1.16)' },
            { transform: 'scale(1)' }
          ],
          { duration: 300, easing: 'cubic-bezier(0.22, 1.4, 0.36, 1)', fill: 'none' }
        );
      } catch (_) { }
    },
    /** @param {HTMLElement|null} el */
    springEnter(el) {
      if (!el || typeof el.animate !== 'function' || prefersReducedMotion()) return;
      try {
        el.animate(
          [
            { opacity: 0.45, transform: 'translate3d(0, 8px, 0) scale(0.97)' },
            { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
          ],
          { duration: 280, easing: 'cubic-bezier(0.22, 1.32, 0.36, 1)', fill: 'none' }
        );
      } catch (_) { }
    }
  };

  /* ---------------------------------------------------------
     * Pillar 2: Celebration Confetti Engine (OxConfetti)
     * --------------------------------------------------------- */
  const OxConfetti = (() => {
    let rafId = 0;
    const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#0ea5e9', '#8b5cf6'];
    /** @param {'good'|'goal'|'perfect'} [intensity] */
    function launch(intensity = 'good') {
      if (prefersReducedMotion()) return;
      const canvas = /** @type {HTMLCanvasElement|null} */ (document.getElementById('celebration-canvas'));
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      if (rafId) cancelAnimationFrame(rafId);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = intensity === 'perfect' ? 85 : (intensity === 'goal' ? 68 : 44);
      const particles = [];
      for (let i = 0; i < count; i++) {
        const fromLeft = i % 3 === 0;
        const fromRight = i % 3 === 1;
        const originX = fromLeft ? w * 0.22 : (fromRight ? w * 0.78 : w * 0.5);
        const angle = (fromLeft ? -0.9 : fromRight ? -2.2 : -Math.PI / 2) + (Math.random() - 0.5) * 1.1;
        const speed = 5 + Math.random() * 8.5;
        particles.push({
          x: originX + (Math.random() - 0.5) * 40,
          y: intensity === 'goal' ? h * 0.18 : h * 0.32,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          size: 5 + Math.random() * 5,
          color: COLORS[i % COLORS.length],
          rot: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.24,
          shape: i % 4 === 0 ? 'circle' : 'rect',
          alpha: 1
        });
      }

      const start = performance.now();
      const tick = (now) => {
        const elapsed = now - start;
        ctx.clearRect(0, 0, w, h);
        let alive = 0;
        for (const p of particles) {
          p.vy += 0.24;
          p.vx *= 0.99;
          p.x += p.vx;
          p.y += p.vy;
          p.rot += p.vRot;
          if (elapsed > 1400) p.alpha = Math.max(0, p.alpha - 0.025);
          if (p.alpha > 0.02 && p.y < h + 30) {
            alive++;
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.color;
            if (p.shape === 'circle') {
              ctx.beginPath();
              ctx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.fillRect(-p.size / 2, -p.size * 0.3, p.size, p.size * 0.6);
            }
            ctx.restore();
          }
        }
        if (alive > 0 && elapsed < 2600) {
          rafId = requestAnimationFrame(tick);
        } else {
          ctx.clearRect(0, 0, w, h);
          rafId = 0;
        }
      };
      rafId = requestAnimationFrame(tick);
    }
    return { launch };
  })();

  /* ---------------------------------------------------------
     * Pillar 3: Typo-Tolerant Fuzzy Search Engine (OxFuzzy)
     * --------------------------------------------------------- */
  const OxFuzzy = {
    /** @param {string} a @param {string} b @param {number} [maxDist] */
    levenshtein(a, b, maxDist = 2) {
      const m = a.length;
      const n = b.length;
      if (Math.abs(m - n) > maxDist) return maxDist + 1;
      const prev = new Array(n + 1);
      const curr = new Array(n + 1);
      for (let j = 0; j <= n; j++) prev[j] = j;
      for (let i = 1; i <= m; i++) {
        curr[0] = i;
        let rowMin = curr[0];
        const ca = a.charCodeAt(i - 1);
        for (let j = 1; j <= n; j++) {
          const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
          const val = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
          curr[j] = val;
          if (val < rowMin) rowMin = val;
        }
        if (rowMin > maxDist) return maxDist + 1;
        for (let j = 0; j <= n; j++) prev[j] = curr[j];
      }
      return prev[n];
    },
    /** @param {VocabWord} w @param {string} rawQ */
    scoreWord(w, rawQ) {
      const q = String(rawQ || '').trim().toLowerCase();
      if (!q) return 1;
      const word = (w.word || '').toLowerCase();
      const trans = (w.translation || '').toLowerCase();
      if (word === q) return 1000;
      if (word.startsWith(q)) return 860 - Math.min(40, word.length);
      const subIdx = word.indexOf(q);
      if (subIdx !== -1) return 680 - subIdx;
      if (trans.includes(q)) return 620;
      if ((w.partOfSpeech || '').toLowerCase().includes(q)) return 540;
      if (Array.isArray(w.synonyms) && w.synonyms.some(s => s.toLowerCase().includes(q))) return 510;
      if (Array.isArray(w.collocations) && w.collocations.some(c => c.toLowerCase().includes(q))) return 490;
      if (Array.isArray(w.antonyms) && w.antonyms.some(a => a.toLowerCase().includes(q))) return 480;
      if (Array.isArray(w.wordFamily) && w.wordFamily.some(f => f.toLowerCase().includes(q))) return 470;
      if (Array.isArray(w.forms) && w.forms.some(fm => fm.toLowerCase().includes(q))) return 460;
      if ((w.definition || '').toLowerCase().includes(q) || (w.example || '').toLowerCase().includes(q) || (w.extraExample || '').toLowerCase().includes(q)) return 410;
      if ((w.usageTip || '').toLowerCase().includes(q)) return 390;
      if ((w.grammarPattern || '').toLowerCase().includes(q) || (w.rootBreakdown || '').toLowerCase().includes(q) || (Array.isArray(w.phrases) && w.phrases.some(p => p.toLowerCase().includes(q)))) return 380;

      if (/^[a-z\-']+$/.test(q) && q.length >= 3) {
        let qi = 0;
        let firstHit = -1;
        let lastHit = 0;
        for (let wi = 0; wi < word.length && qi < q.length; wi++) {
          if (word[wi] === q[qi]) {
            if (firstHit === -1) firstHit = wi;
            lastHit = wi;
            qi++;
          }
        }
        if (qi === q.length) {
          const spanPenalty = (lastHit - firstHit) - q.length;
          if (spanPenalty <= 4) return 360 - spanPenalty * 20;
        }
        const maxD = q.length >= 5 ? 2 : 1;
        const dist = this.levenshtein(word, q, maxD);
        if (dist <= maxD) return 300 - dist * 75 - Math.abs(word.length - q.length);
      }
      return 0;
    },
    /** @param {string} rawText @param {string} query */
    highlightMatch(rawText, query) {
      const text = String(rawText || '');
      const q = String(query || '').trim();
      if (!q) return escapeHtml(text);
      const idx = text.toLowerCase().indexOf(q.toLowerCase());
      if (idx === -1) return escapeHtml(text);
      const before = text.slice(0, idx);
      const match = text.slice(idx, idx + q.length);
      const after = text.slice(idx + q.length);
      return `${escapeHtml(before)}<mark class="qs-mark">${escapeHtml(match)}</mark>${escapeHtml(after)}`;
    }
  };

  /* ---------------------------------------------------------
     * Pillar 5: CEFR Level Helper (OxCefr)
     * --------------------------------------------------------- */
  const OxCefr = {
    /** @param {string|undefined} cefr */
    getClass(cefr) {
      const c = String(cefr || 'A1').toLowerCase();
      return ['cefr-a1', 'cefr-a2', 'cefr-b1', 'cefr-b2'].includes('cefr-' + c) ? ('cefr-' + c) : 'cefr-a1';
    },
    /** @param {HTMLElement|null} el @param {string|undefined} cefr */
    applyBadge(el, cefr) {
      if (!el) return;
      const lvl = (cefr && ['A1', 'A2', 'B1', 'B2'].includes(cefr)) ? cefr : 'A1';
      el.textContent = lvl;
      el.classList.remove('cefr-a1', 'cefr-a2', 'cefr-b1', 'cefr-b2');
      el.classList.add('cefr-' + lvl.toLowerCase());
    }
  };
  const SESSION_SIZES = [20, 30, 40, 50];
  const MAX_SESSIONS = 100;
  const VALID_STATUS = ['known', 'review'];

  let isSoundMuted = false;
  // Sound Engine 2.0 device-local preferences (volume 0..1 & per-category switches)
  let soundVolume = 1;
  let soundCats = { ui: true, feedback: true, reward: true };
  const SOUND_MAX_VOICES = 28;
  const SoundFX = {
    /** @type {AudioContext|null} */
    audioCtx: null,
    _lastTick: 0,
    _lastType: 0,
    /** @type {AudioBuffer|null} */
    _noiseBuf: null,
    /** @type {GainNode|null} */
    _master: null,
    /** @type {DynamicsCompressorNode|null} */
    _comp: null,
    /** @type {number[]} */
    _voiceEnds: [],
    _cat: 'ui',
    init() {
      if (isSoundMuted) return;
      if (!this.audioCtx) {
        const AudioCtx = window.AudioContext || /** @type {{ webkitAudioContext?: typeof AudioContext }} */ (window).webkitAudioContext;
        if (AudioCtx) {
          try { this.audioCtx = new AudioCtx(); } catch (_) { this.audioCtx = null; }
        }
        if (this.audioCtx) this._buildBus();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume()?.catch?.(() => { });
      }
    },
    // Master bus: every voice -> masterGain -> DynamicsCompressor -> destination (prevents clipping)
    _buildBus() {
      const ctx = this.audioCtx;
      try {
        const comp = ctx.createDynamicsCompressor();
        comp.threshold.value = -14;
        comp.knee.value = 10;
        comp.ratio.value = 6;
        comp.attack.value = 0.003;
        comp.release.value = 0.18;
        const master = ctx.createGain();
        master.gain.value = this._gainForVolume(soundVolume);
        master.connect(comp);
        comp.connect(ctx.destination);
        this._master = master;
        this._comp = comp;
      } catch (_) {
        this._master = null;
        this._comp = null;
      }
    },
    _gainForVolume(v) {
      const x = Math.min(1, Math.max(0, Number(v) || 0));
      return x * x; // perceptual (quadratic) loudness curve
    },
    _out() {
      return this._master || this.audioCtx.destination;
    },
    _pruneVoices() {
      const nowMs = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      this._voiceEnds = this._voiceEnds.filter(t => t > nowMs);
      if (this._voiceEnds.length > 64) this._voiceEnds.length = 64;
      return this._voiceEnds.length;
    },
    _canVoice() {
      if (isSoundMuted || !this.audioCtx || soundVolume <= 0) return false;
      const active = this._pruneVoices();
      if (active >= SOUND_MAX_VOICES && this._cat === 'ui') return false;
      return active < SOUND_MAX_VOICES * 2;
    },
    _track(node, extra, durMs = 450) {
      const nowMs = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      const span = Math.min(1800, Math.max(60, Number(durMs) || 450));
      this._voiceEnds.push(nowMs + span);
      node.onended = () => {
        try { node.disconnect(); } catch (_) { }
        (extra || []).forEach(n => { try { n.disconnect(); } catch (_) { } });
      };
    },
    setVolume(v) {
      soundVolume = Math.min(1, Math.max(0, Number(v) || 0));
      if (this._master && this.audioCtx) {
        try {
          this._master.gain.setTargetAtTime(this._gainForVolume(soundVolume), this.audioCtx.currentTime, 0.02);
        } catch (_) {
          this._master.gain.value = this._gainForVolume(soundVolume);
        }
      }
    },
    getActiveVoices() {
      return this._pruneVoices();
    },
    /**
     * @param {number} frequency
     * @param {OscillatorType} type
     * @param {number} attack
     * @param {number} decay
     * @param {number} [vol]
     * @param {number|null} [slideToFreq]
     * @param {number} [startTimeOffset]
     */
    playTone(frequency, type, attack, decay, vol = 0.25, slideToFreq = null, startTimeOffset = 0) {
      if (!this._canVoice()) return;
      try {
        const now = this.audioCtx.currentTime + startTimeOffset;
        const safeAttack = Math.max(0.004, attack);
        const safeDecay = Math.max(0.02, decay);
        const end = now + safeAttack + safeDecay;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(Math.max(40, frequency), now);
        if (slideToFreq) {
          osc.frequency.exponentialRampToValueAtTime(Math.max(40, slideToFreq), end);
        }

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(Math.min(0.45, Math.max(0.005, vol)), now + safeAttack);
        gain.gain.exponentialRampToValueAtTime(0.0008, end);

        osc.connect(gain);
        gain.connect(this._out());
        this._track(osc, [gain], (startTimeOffset + safeAttack + safeDecay + 0.05) * 1000);
        osc.start(now);
        osc.stop(end + 0.015);
      } catch (e) { }
    },
    playWhoosh(startFreq = 450, endFreq = 1200, dur = 0.09, vol = 0.08) {
      if (!this._canVoice()) return;
      try {
        const ctx = this.audioCtx;
        if (!this._noiseBuf) {
          const len = Math.floor(ctx.sampleRate * 0.14);
          const buf = ctx.createBuffer(1, len, ctx.sampleRate);
          const ch = buf.getChannelData(0);
          for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
          this._noiseBuf = buf;
        }
        const now = ctx.currentTime;
        const src = ctx.createBufferSource();
        src.buffer = this._noiseBuf;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.Q.setValueAtTime(1.6, now);
        filter.frequency.setValueAtTime(Math.max(120, startFreq), now);
        filter.frequency.exponentialRampToValueAtTime(Math.max(120, endFreq), now + dur);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.016);
        gain.gain.exponentialRampToValueAtTime(0.0008, now + dur);

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this._out());
        this._track(src, [filter, gain]);
        src.start(now);
        src.stop(now + dur + 0.015);
      } catch (e) { }
    },
    known(combo = 1) {
      this.init();
      // Bright Duolingo-style two-note chime that ascends cleanly on answer combos
      const ladder = [
        [987.77, 1318.51],  // B5 -> E6
        [1108.73, 1479.98], // C#6 -> F#6
        [1244.51, 1661.22], // D#6 -> G#6
        [1318.51, 1975.53], // E6 -> B6
        [1479.98, 2217.46]  // F#6 -> C#7
      ];
      const idx = Math.min(ladder.length - 1, Math.max(0, (Number(combo) || 1) - 1));
      const [f1, f2] = ladder[idx];
      this.playTone(f1, 'sine', 0.012, 0.11, 0.14, null, 0);
      this.playTone(f2, 'sine', 0.014, 0.34, 0.18, null, 0.095);
      if (combo >= 3) {
        this.playTone(f2 * 1.25, 'sine', 0.008, 0.18, 0.07, null, 0.18);
      }
    },
    review() {
      this.init();
      // Gentle empathetic muted descend (never abrasive)
      this.playTone(349.23, 'triangle', 0.018, 0.14, 0.15, 311.13, 0);
      this.playTone(277.18, 'triangle', 0.02, 0.24, 0.14, 246.94, 0.11);
    },
    skip() {
      this.init();
      // Soft neutral double-tap
      this.playTone(440, 'sine', 0.01, 0.06, 0.08, 360, 0);
      this.playTone(340, 'sine', 0.01, 0.08, 0.06, 290, 0.07);
    },
    tick() {
      this.init();
      const now = performance.now();
      if (this._lastTick && now - this._lastTick < 35) return;
      this._lastTick = now;
      // Clean soft marimba bubble tap
      this.playTone(680, 'sine', 0.004, 0.032, 0.08, 460);
    },
    tilePick() {
      this.init();
      // Word Bank token lifting upward into tray
      this.playTone(523.25, 'sine', 0.006, 0.055, 0.11, 740);
    },
    tileDrop() {
      this.init();
      // Word Bank token dropping smoothly back to bank
      this.playTone(587.33, 'sine', 0.006, 0.055, 0.09, 370);
    },
    flip(toBack = true) {
      this.init();
      // Tactile Flashcard 3D paper whoosh + soft pitch shift
      this.playWhoosh(toBack ? 480 : 1100, toBack ? 1350 : 480, 0.095, 0.075);
      this.playTone(toBack ? 350 : 520, 'triangle', 0.008, 0.065, 0.06, toBack ? 540 : 330);
    },
    next() {
      this.init();
      // Crisp bubble slide advance
      this.playTone(680, 'sine', 0.008, 0.055, 0.09, 280);
    },
    popOpen() {
      this.init();
      // Floating popover / modal appear
      this.playTone(440, 'sine', 0.008, 0.065, 0.09, 660, 0);
      this.playTone(880, 'sine', 0.008, 0.08, 0.05, null, 0.03);
    },
    popClose() {
      this.init();
      // Floating popover / modal dismiss
      this.playTone(540, 'sine', 0.006, 0.055, 0.07, 340);
    },
    nav() {
      this.init();
      // Subtle warm wooden navigation step
      this.playTone(340, 'sine', 0.008, 0.045, 0.065, 450);
    },
    hint() {
      this.init();
      // Curious bright lightbulb ding for dotted hints
      this.playTone(1046.5, 'sine', 0.008, 0.13, 0.11, null, 0);
      this.playTone(1567.98, 'sine', 0.008, 0.16, 0.06, null, 0.05);
    },
    bookmark(added = true) {
      this.init();
      if (added) {
        this.playTone(987.77, 'sine', 0.008, 0.09, 0.1, null, 0);
        this.playTone(1318.51, 'sine', 0.01, 0.16, 0.12, null, 0.06);
      } else {
        this.playTone(659.25, 'sine', 0.008, 0.07, 0.08, 493.88, 0);
      }
    },
    drawer(open = true) {
      this.init();
      // Subtle accordion expand / collapse slide
      this.playTone(open ? 370 : 490, 'sine', 0.006, 0.048, 0.055, open ? 520 : 350);
    },
    mascot() {
      this.init();
      // Playful OxOwl joyful chirp-hoo
      this.playTone(587.33, 'sine', 0.01, 0.07, 0.12, 783.99, 0);
      this.playTone(987.77, 'sine', 0.01, 0.12, 0.13, 1174.66, 0.085);
      this.playTone(1567.98, 'sine', 0.008, 0.14, 0.07, null, 0.17);
    },
    theme(isDark = false) {
      this.init();
      if (isDark) {
        this.playTone(466.16, 'triangle', 0.012, 0.14, 0.09, 311.13, 0);
      } else {
        this.playTone(440, 'sine', 0.012, 0.14, 0.09, 622.25, 0);
      }
    },
    chest() {
      this.init();
      // Treasure chest click + sparkling gold arpeggio cascade
      this.playTone(210, 'triangle', 0.005, 0.04, 0.14, 110, 0);
      const notes = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51];
      notes.forEach((f, i) => {
        this.playTone(f, 'sine', 0.01, 0.24, 0.11 + (i === notes.length - 1 ? 0.06 : 0), null, 0.07 + i * 0.065);
      });
    },
    quest() {
      this.init();
      // Crisp XP quest reward collect
      [659.25, 880, 1108.73, 1318.51].forEach((f, i) => {
        this.playTone(f, 'sine', 0.01, 0.2, 0.12, null, i * 0.06);
      });
    },
    legendary() {
      this.init();
      // Noble golden crown victory fanfare + shimmering crown overtones
      const hero = [
        [392.00, 0.11, 0.16, 0],
        [523.25, 0.11, 0.16, 0.095],
        [659.25, 0.11, 0.18, 0.19],
        [783.99, 0.24, 0.20, 0.29],
        [1046.50, 0.72, 0.22, 0.43]
      ];
      hero.forEach(([f, dur, vol, off]) => {
        this.playTone(f, 'triangle', 0.014, dur, vol, null, off);
        this.playTone(f * 2, 'sine', 0.012, dur * 0.8, vol * 0.4, null, off);
      });
      [1318.51, 1567.98, 2093.0, 2637.02].forEach((f, i) => {
        this.playTone(f, 'sine', 0.008, 0.22, 0.07, null, 0.48 + i * 0.075);
      });
    },
    victory() {
      this.init();
      const schedule = (freq, type, duration, vol, delay) => {
        this.playTone(freq, type, 0.015, duration, vol, null, delay / 1000);
      };
      schedule(392.00, 'sine', 0.1, 0.18, 0);
      schedule(523.25, 'sine', 0.1, 0.18, 100);
      schedule(659.25, 'sine', 0.1, 0.18, 200);
      schedule(523.25, 'triangle', 0.65, 0.16, 300);
      schedule(659.25, 'triangle', 0.65, 0.16, 300);
      schedule(783.99, 'sine', 0.65, 0.22, 300);
      for (let i = 0; i < 6; i++) {
        this.playTone(1046.50 + i * 165, 'sine', 0.008, 0.12, 0.055, null, (320 + i * 65) / 1000);
      }
    },
    toggle(on = true) {
      this.init();
      // Tactile switch flick (up = on, down = off)
      if (on) {
        this.playTone(620, 'sine', 0.005, 0.05, 0.08, 880, 0);
        this.playTone(1240, 'sine', 0.004, 0.05, 0.035, null, 0.035);
      } else {
        this.playTone(560, 'sine', 0.005, 0.06, 0.07, 380, 0);
      }
    },
    typing() {
      this.init();
      const now = performance.now();
      if (this._lastType && now - this._lastType < 45) return;
      this._lastType = now;
      // Very soft key click for spelling inputs
      this.playTone(1180 + Math.random() * 120, 'sine', 0.002, 0.022, 0.035, 900);
    },
    error() {
      this.init();
      // Gentle low "nope" for invalid actions (never harsh)
      this.playTone(233.08, 'triangle', 0.01, 0.1, 0.12, 207.65, 0);
      this.playTone(196.0, 'triangle', 0.01, 0.16, 0.1, 174.61, 0.09);
    },
    success() {
      this.init();
      // Soft confirmation for success toasts / saved actions
      this.playTone(783.99, 'sine', 0.008, 0.08, 0.08, null, 0);
      this.playTone(1174.66, 'sine', 0.008, 0.14, 0.07, null, 0.06);
    },
    streak() {
      this.init();
      // Flame ignite whoosh + rising triad
      this.playWhoosh(300, 1600, 0.16, 0.06);
      [587.33, 739.99, 880, 1174.66].forEach((f, i) => {
        this.playTone(f, 'sine', 0.01, 0.16, 0.1, null, 0.08 + i * 0.07);
      });
    },
    levelUp() {
      this.init();
      // Unit complete: bright arpeggio climb + sustained top note + sparkles
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        this.playTone(f, 'triangle', 0.012, 0.16, 0.13, null, i * 0.085);
        this.playTone(f * 2, 'sine', 0.01, 0.12, 0.04, null, i * 0.085);
      });
      this.playTone(1318.51, 'sine', 0.014, 0.55, 0.15, null, 0.36);
      [1567.98, 2093.0, 2637.02].forEach((f, i) => {
        this.playTone(f, 'sine', 0.006, 0.14, 0.05, null, 0.44 + i * 0.06);
      });
    }
  };

  // Category routing + haptics (wraps every public sound so prefs apply uniformly)
  const SOUND_CATEGORY = {
    tick: 'ui', tilePick: 'ui', tileDrop: 'ui', flip: 'ui', next: 'ui', popOpen: 'ui', popClose: 'ui',
    nav: 'ui', hint: 'ui', bookmark: 'ui', drawer: 'ui', theme: 'ui', toggle: 'ui', typing: 'ui',
    known: 'feedback', review: 'feedback', skip: 'feedback', error: 'feedback', success: 'feedback',
    mascot: 'reward', chest: 'reward', quest: 'reward', legendary: 'reward', victory: 'reward',
    streak: 'reward', levelUp: 'reward'
  };
  const HAPTIC_FOR_SOUND = {
    known: 12, review: [30, 40, 30], error: [24, 30, 24], chest: [16, 40, 16, 40, 30],
    quest: [14, 30, 20], legendary: [20, 40, 20, 40, 60], victory: [18, 40, 18, 40, 40],
    streak: [14, 30, 28], levelUp: [16, 30, 16, 30, 50], tilePick: 6, toggle: 8
  };
  let hapticsEnabled = false;
  const OxHaptics = {
    supported() {
      return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function' &&
        typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
    },
    fire(pattern) {
      if (!hapticsEnabled || isSoundMuted || !this.supported()) return false;
      try { return navigator.vibrate(pattern); } catch (_) { return false; }
    }
  };
  Object.keys(SOUND_CATEGORY).forEach((name) => {
    const orig = SoundFX[name];
    if (typeof orig !== 'function') return;
    SoundFX[name] = function (...args) {
      const cat = SOUND_CATEGORY[name];
      if (HAPTIC_FOR_SOUND[name] !== undefined) OxHaptics.fire(HAPTIC_FOR_SOUND[name]);
      if (soundCats[cat] === false) return;
      const prevCat = this._cat;
      this._cat = cat;
      try { return orig.apply(this, args); } finally { this._cat = prevCat; }
    };
  });

  const storage = {
    _cache: new Map(),
    _pending: new Map(),
    /** @type {ReturnType<typeof setTimeout>|null} */
    _timer: null,
    get(key, fallback) {
      if (this._pending.has(key)) return this._pending.get(key).val;
      try {
        const raw = localStorage.getItem(key);
        if (raw === null) return fallback;
        this._cache.set(key, raw);
        const value = JSON.parse(raw);
        return value === null || value === undefined ? fallback : value;
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      if (this._pending.has(key)) this._pending.delete(key);
      try {
        const json = JSON.stringify(value);
        if (this._cache.get(key) === json) return;
        localStorage.setItem(key, json);
        this._cache.set(key, json);
      } catch (e) {
        console.warn('Unable to save to localStorage', e);
      }
    },
    // Debounced batch write for frequent non-critical telemetry (flushed on 250ms, pagehide, hidden)
    setBatched(key, value) {
      this._pending.set(key, { val: value });
      if (this._timer) return;
      this._timer = setTimeout(() => this.flush(), 250);
    },
    flush() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
      if (!this._pending.size) return;
      const entries = Array.from(this._pending.entries());
      this._pending.clear();
      entries.forEach(([key, entry]) => this.set(key, entry.val));
    },
    remove(key) {
      this._pending.delete(key);
      this._cache.delete(key);
      try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
    }
  };

  window.addEventListener('pagehide', () => storage.flush());

  // Phase E: Global Error Guard & Double-Tap Lock
  const OxErrorGuard = (() => {
    const KEY = 'ox3k_error_log_v1';
    let lastToastAt = 0;
    function read() {
      try { return JSON.parse(localStorage.getItem(KEY) || '[]') || []; } catch (_) { return []; }
    }
    function record(source, message) {
      try {
        const list = read();
        list.unshift({ t: Date.now(), src: String(source || 'runtime'), msg: String(message || '').slice(0, 220) });
        localStorage.setItem(KEY, JSON.stringify(list.slice(0, 20)));
      } catch (_) { /* ignore storage quota */ }
      const now = Date.now();
      if (now - lastToastAt > 4000 && typeof showToast === 'function') {
        lastToastAt = now;
        try { showToast('เกิดข้อขัดข้องชั่วคราว ระบบกำลังบันทึกข้อมูลให้อัตโนมัติ', 'error'); } catch (_) { }
      }
    }
    window.addEventListener('error', (ev) => {
      if (ev && ev.message) record('error', ev.message);
    });
    window.addEventListener('unhandledrejection', (ev) => {
      const r = ev && ev.reason;
      record('promise', r && r.message ? r.message : String(r || 'Unhandled rejection'));
    });
    return { getLog: read, record };
  })();

  const OxGuard = {
    _locks: new Map(),
    lock(key, ms = 320) {
      const now = performance.now();
      const until = this._locks.get(key) || 0;
      if (now < until) return false;
      this._locks.set(key, now + ms);
      return true;
    }
  };

  isSoundMuted = storage.get('ox3k_sound_muted', false);
  (() => {
    const v = Number(storage.get('ox3k_sound_volume', 1));
    soundVolume = Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : 1;
    const cats = storage.get('ox3k_sound_cats', null);
    if (cats && typeof cats === 'object') {
      ['ui', 'feedback', 'reward'].forEach(k => { if (typeof cats[k] === 'boolean') soundCats[k] = cats[k]; });
    }
    hapticsEnabled = storage.get('ox3k_haptics', false) === true;
  })();
  let mascotEncourageEnabled = storage.get('ox3k_mascot_encourage', true) !== false;
  let listeningEnabled = storage.get('ox3k_listening_enabled', true) !== false;
  let userProfile = (() => {
    const d = storage.get('ox3k_profile_v1', null);
    const joinedAt = (d && Number.isFinite(Number(d.joinedAt))) ? Number(d.joinedAt) : Date.now();
    const res = {
      name: (d && typeof d.name === 'string') ? d.name : '',
      handle: (d && typeof d.handle === 'string') ? d.handle : '',
      banner: (d && typeof d.banner === 'string') ? d.banner : 'slate',
      avatarIdx: (d && Number.isFinite(Number(d.avatarIdx))) ? Number(d.avatarIdx) : -1,
      joinedAt
    };
    if (!d) storage.set('ox3k_profile_v1', res);
    return res;
  })();

  /* =========================================================
     * Word helpers
     * ========================================================= */
  const totalWords = wordsData.length;
  const keyOf = (w) => `${w.word}|${w.partOfSpeech || ''}`;
  const keyToIndex = new Map();
  const wordTextToIndex = new Map();
  wordsData.forEach((w, i) => {
    const k = keyOf(w);
    if (!keyToIndex.has(k)) keyToIndex.set(k, i);
    const low = (w.word || '').trim().toLowerCase();
    if (low && !wordTextToIndex.has(low)) wordTextToIndex.set(low, i);
  });

  function findWordKeyByText(rawWord) {
    const clean = String(rawWord || '').replace(/\s*\([^()]*\)\s*$/, '').trim().toLowerCase();
    if (!clean) return null;
    const idx = wordTextToIndex.get(clean);
    return idx !== undefined ? keyOf(wordsData[idx]) : null;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(pool, n) {
    const a = pool.slice();
    const count = Math.min(n, a.length);
    for (let i = 0; i < count; i++) {
      const j = i + Math.floor(Math.random() * (a.length - i));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, count);
  }

  function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  /* =========================================================
     * Categories (Part of Speech) & A–Z groups for the dashboard
     * ========================================================= */
  const CATEGORY_META = {
    noun: { th: 'คำนาม', en: 'Noun', icon: 'N', c1: '#4f46e5', c2: '#3b82f6' },
    verb: { th: 'คำกริยา', en: 'Verb', icon: 'V', c1: '#7c3aed', c2: '#6366f1' },
    adjective: { th: 'คำคุณศัพท์', en: 'Adjective', icon: 'Adj', c1: '#d97706', c2: '#f59e0b' },
    adverb: { th: 'คำกริยาวิเศษณ์', en: 'Adverb', icon: 'Adv', c1: '#059669', c2: '#10b981' },
    preposition: { th: 'คำบุพบท', en: 'Preposition', icon: 'Prep', c1: '#0284c7', c2: '#38bdf8' },
    pronoun: { th: 'คำสรรพนาม', en: 'Pronoun', icon: 'Pron', c1: '#6366f1', c2: '#818cf8' },
    conjunction: { th: 'คำสันธาน', en: 'Conjunction', icon: 'Conj', c1: '#ea580c', c2: '#f97316' },
    other: { th: 'อื่น ๆ', en: 'Other', icon: 'Etc', c1: '#475569', c2: '#64748b' }
  };
  const catOf = (w) => {
    const p = String(w.partOfSpeech || '').toLowerCase().trim();
    return p !== 'other' && CATEGORY_META[p] ? p : 'other';
  };
  const categoryIndices = {};
  const letterIndices = {};
  const AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  wordsData.forEach((w, i) => {
    if (keyToIndex.get(keyOf(w)) !== i) return; // skip duplicates
    (categoryIndices[catOf(w)] ||= []).push(i);
    const L = String(w.word || '').charAt(0).toUpperCase();
    (letterIndices[AZ.includes(L) ? L : '#'] ||= []).push(i);
  });
  const CATEGORY_IDS = Object.keys(CATEGORY_META).filter((id) => categoryIndices[id] && categoryIndices[id].length);

  function fmtPct(ratio) {
    const p = ratio * 100;
    if (p > 0 && p < 10) return p.toFixed(1) + '%';
    return Math.round(p) + '%';
  }

  function strengthOf(stat) {
    if (!stat.studied) return { cls: 'none', label: 'ยังไม่เริ่ม' };
    if (stat.accuracy < 0.5) return { cls: 'bad', label: 'ต้องเสริมด่วน' };
    if (stat.accuracy < 0.75) return { cls: 'mid', label: 'ปานกลาง' };
    return { cls: 'good', label: 'แข็งแรง' };
  }

  /* =========================================================
     * Persistent state
     * ========================================================= */
  function loadWordStatus() {
    const raw = storage.get(STORAGE.status, {});
    const clean = {};
    if (raw && typeof raw === 'object') {
      Object.keys(raw).forEach((k) => {
        if (keyToIndex.has(k) && VALID_STATUS.includes(raw[k])) clean[k] = raw[k];
      });
    }
    return clean;
  }

  function loadSessions() {
    const raw = storage.get(STORAGE.sessions, []);
    if (!Array.isArray(raw)) return [];
    return raw.filter((s) => s && Array.isArray(s.known) && Array.isArray(s.review));
  }

  function loadActiveSession() {
    const s = storage.get(STORAGE.active, null);
    if (!s || !Array.isArray(s.indices) || !Array.isArray(s.answers)) return null;
    if (s.indices.length === 0 || s.indices.length !== s.answers.length) return null;
    const indicesOk = s.indices.every((i) => Number.isInteger(i) && i >= 0 && i < totalWords);
    const answersOk = s.answers.every((a) => a === null || VALID_STATUS.includes(a));
    if (!indicesOk || !answersOk) return null;
    if (!Number.isInteger(s.currentIndex) || s.currentIndex < 0 || s.currentIndex >= s.indices.length) {
      s.currentIndex = 0;
    }
    return s;
  }

  /** @param {Date} [dateObj] */
  function getTodayDateString(dateObj = new Date()) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function loadDailyGoal() {
    const raw = storage.get(STORAGE.dailyGoal, {});
    const today = getTodayDateString();
    const target = typeof raw.target === 'number' && raw.target > 0 ? raw.target : 20;
    const targetUpdatedAt = typeof raw.targetUpdatedAt === 'number' && raw.targetUpdatedAt > 0 ? raw.targetUpdatedAt : 0;
    if (raw.date !== today) {
      return { target, targetUpdatedAt, date: today, count: 0 };
    }
    return { target, targetUpdatedAt, date: today, count: typeof raw.count === 'number' ? raw.count : 0 };
  }

  function saveDailyGoal(goal) {
    storage.set(STORAGE.dailyGoal, goal);
  }

  function loadWordMastery() {
    const raw = storage.get(STORAGE.mastery, {});
    return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
  }

  function saveWordMastery(m) {
    storage.set(STORAGE.mastery, m);
  }

  const SRS_INTERVALS = [0, 1, 3, 7, 14, 30, 60];

  function loadBookmarks() {
    const raw = storage.get(STORAGE.bookmarks, []);
    if (!Array.isArray(raw)) return new Set();
    return new Set(raw.filter((k) => keyToIndex.has(k)));
  }

  function saveBookmarks() {
    storage.set(STORAGE.bookmarks, Array.from(bookmarkedWords));
  }

  function loadActivityLog() {
    const raw = storage.get(STORAGE.ActivityLog, {});
    return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
  }

  function saveActivityLog(log) {
    storage.set(STORAGE.ActivityLog, log);
  }

  /** @returns {Record<string, number>} */
  function loadUsageTimeLog() {
    const raw = storage.get(STORAGE.usageTime, {});
    return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
  }

  /** @param {Record<string, number>} log */
  function saveUsageTimeLog(log) {
    storage.set(STORAGE.usageTime, log);
  }

  /** @returns {Record<string, number>} */
  function loadHourlyUsageLog() {
    const raw = storage.get(STORAGE.hourlyUsage, {});
    return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
  }

  /** @param {Record<string, number>} log */
  function saveHourlyUsageLog(log) {
    storage.set(STORAGE.hourlyUsage, log);
  }

  let wordStatus = loadWordStatus();
  let sessions = loadSessions();
  let dailyGoal = loadDailyGoal();
  let wordMastery = loadWordMastery();
  let bookmarkedWords = loadBookmarks();
  let activityLog = loadActivityLog();
  let usageTimeLog = loadUsageTimeLog();
  let hourlyUsageLog = loadHourlyUsageLog();

  // Foreground active study/usage time tracker (counts only while tab is visible and recently active)
  (() => {
    let lastInteractionAt = Date.now();
    let lastTickAt = Date.now();
    let unsyncedSeconds = 0;

    const markActive = () => {
      lastInteractionAt = Date.now();
    };
    ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((evt) => {
      window.addEventListener(evt, markActive, { passive: true });
    });

    const flushActiveSeconds = (triggerSync) => {
      const now = Date.now();
      if (document.visibilityState === 'visible') {
        const elapsedSec = Math.floor((now - lastTickAt) / 1000);
        const recentlyInteracted = (now - lastInteractionAt) <= 120000;
        if (elapsedSec > 0 && elapsedSec <= 60 && recentlyInteracted) {
          const today = getTodayDateString();
          const hh = String(new Date(now).getHours()).padStart(2, '0');
          const hourKey = `${today}|${hh}`;

          usageTimeLog[today] = Math.max(0, Number(usageTimeLog[today] || 0)) + elapsedSec;
          hourlyUsageLog[hourKey] = Math.min(3600, Math.max(0, Number(hourlyUsageLog[hourKey] || 0)) + elapsedSec);

          // Prune daily entries older than 120 days and hourly entries older than 14 days
          const keys = Object.keys(usageTimeLog).sort();
          if (keys.length > 120) {
            keys.slice(0, keys.length - 120).forEach((k) => { delete usageTimeLog[k]; });
          }
          const cutoffStr = getTodayDateString(new Date(now - 14 * 86400000));
          Object.keys(hourlyUsageLog).forEach((hk) => {
            if (hk.slice(0, 10) < cutoffStr) delete hourlyUsageLog[hk];
          });

          saveUsageTimeLog(usageTimeLog);
          saveHourlyUsageLog(hourlyUsageLog);
          unsyncedSeconds += elapsedSec;
        }
      }
      lastTickAt = now;
      if (triggerSync && unsyncedSeconds >= 60 && scheduleGoogleAutoSync) {
        unsyncedSeconds = 0;
        scheduleGoogleAutoSync();
      }
    };

    setInterval(() => flushActiveSeconds(true), 15000);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        flushActiveSeconds(true);
      } else {
        lastTickAt = Date.now();
        lastInteractionAt = Date.now();
      }
    });
    window.addEventListener('pagehide', () => flushActiveSeconds(false));
  })();
  const prefs = storage.get(STORAGE.prefs, {});
  let selectedSize = typeof prefs.size === 'number' && prefs.size >= 1 && prefs.size <= 50 ? Math.round(prefs.size) : 20;
  let prefsMeta = {
    sizeUpdatedAt: typeof prefs.sizeUpdatedAt === 'number' && prefs.sizeUpdatedAt > 0 ? prefs.sizeUpdatedAt : 0,
    accentUpdatedAt: typeof prefs.accentUpdatedAt === 'number' && prefs.accentUpdatedAt > 0 ? prefs.accentUpdatedAt : 0
  };
  let selectedCefr = 'all';
  let historyCefrFilter = 'all';
  let qsCefrFilter = 'all';
  let qsFocusIndex = -1;
  let preferredAccent = localStorage.getItem(STORAGE.accent) === 'UK' ? 'UK' : 'US';

  /** @param {{ touchSize?: boolean, touchAccent?: boolean }} [opts] */
  function savePrefsState(opts = {}) {
    const now = Date.now();
    if (opts.touchSize) prefsMeta.sizeUpdatedAt = now;
    if (opts.touchAccent) prefsMeta.accentUpdatedAt = now;
    storage.set(STORAGE.prefs, {
      size: selectedSize,
      sizeUpdatedAt: prefsMeta.sizeUpdatedAt || 0,
      accentUpdatedAt: prefsMeta.accentUpdatedAt || 0
    });
    try { localStorage.setItem(STORAGE.accent, preferredAccent); } catch (_) { }
  }
  /** @type {Map<string, string|null>} */
  const audioUrlCache = new Map();
  /** @type {HTMLAudioElement|null} */
  let activeAudioEl = null;
  let speakResetTimer = null;

  function isBookmarked(key) {
    return bookmarkedWords.has(key);
  }

  function toggleBookmark(key) {
    if (!keyToIndex.has(key)) return false;
    if (bookmarkedWords.has(key)) {
      bookmarkedWords.delete(key);
      showToast('นำออกจากคำศัพท์ที่ปักหมุดแล้ว');
    } else {
      bookmarkedWords.add(key);
      showToast('ปักหมุดคำศัพท์สำคัญแล้ว ★');
    }
    saveBookmarks();
    SoundFX.bookmark(bookmarkedWords.has(key));
    updateStarUIEverywhere(key);
    if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
    return bookmarkedWords.has(key);
  }

  function getWordMasteryLevel(key) {
    const st = wordStatus[key];
    if (!st) return 'unseen';
    if (st === 'review') return 'review';
    const m = wordMastery[key];
    if (m && m.streak >= 2) return 'mastered';
    return 'learning';
  }

  function isWordDueSRS(key) {
    const st = wordStatus[key];
    if (!st) return false;
    if (st === 'review') return true;
    const m = wordMastery[key];
    if (m && m.nextReviewAt && m.nextReviewAt <= Date.now()) return true;
    return false;
  }

  function getDueWordIndices() {
    const due = [];
    keyToIndex.forEach((idx, key) => {
      if (isWordDueSRS(key)) due.push(idx);
    });
    return due;
  }

  function getSRSStatusText(key) {
    const st = wordStatus[key];
    if (!st) return { text: 'คำใหม่', cls: '' };
    if (st === 'review') return { text: 'ต้องทบทวนซ้ำ', cls: 'srs-review' };
    const m = wordMastery[key];
    const days = m && m.intervalDays ? m.intervalDays : 1;
    if (m && m.nextReviewAt && m.nextReviewAt <= Date.now()) {
      return { text: 'ครบกำหนดทบทวนวันนี้', cls: 'srs-review' };
    }
    if (m && m.streak >= 2) {
      return { text: `ความจำระยะยาว · รอบ ${days} วัน`, cls: 'srs-mastered' };
    }
    return { text: `กำลังจำ · รอบ ${days} วัน`, cls: 'srs-learning' };
  }

  function recordWordMastery(key, status) {
    const currM = wordMastery[key] || { streak: 0, reviewCount: 0 };
    if (status === 'known') {
      currM.streak = (currM.streak || 0) + 1;
      const days = SRS_INTERVALS[Math.min(currM.streak, SRS_INTERVALS.length - 1)];
      currM.intervalDays = days;
      currM.nextReviewAt = Date.now() + (days * 86400000);
    } else if (status === 'review') {
      currM.streak = 0;
      currM.reviewCount = (currM.reviewCount || 0) + 1;
      currM.intervalDays = 0;
      currM.nextReviewAt = Date.now();
    }
    currM.lastStudied = new Date().toISOString();
    wordMastery[key] = currM;
    saveWordMastery(wordMastery);
  }

  function recordDailyGoalProgress(amount = 1) {
    const today = getTodayDateString();
    if (dailyGoal.date !== today) {
      dailyGoal = {
        target: dailyGoal.target || 20,
        targetUpdatedAt: dailyGoal.targetUpdatedAt || 0,
        date: today,
        count: 0
      };
    }
    const prevCount = dailyGoal.count;
    dailyGoal.count += amount;
    saveDailyGoal(dailyGoal);
    activityLog[today] = Math.max(activityLog[today] || 0, dailyGoal.count);
    saveActivityLog(activityLog);
    updateDailyGoalUI();
    if (prevCount < dailyGoal.target && dailyGoal.count >= dailyGoal.target) {
      OxConfetti.launch('goal');
      showToast('ยินดีด้วย! คุณพิชิตเป้าหมายการเรียนประจำวันแล้ว');
      SoundFX.victory();
    }
    if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
  }

  function updateDailyGoalUI() {
    const today = getTodayDateString();
    if (dailyGoal.date !== today) {
      dailyGoal = {
        target: dailyGoal.target || 20,
        targetUpdatedAt: dailyGoal.targetUpdatedAt || 0,
        date: today,
        count: 0
      };
      saveDailyGoal(dailyGoal);
    }
    const streak = computeStreak();
    const pct = Math.min(100, Math.round((dailyGoal.count / dailyGoal.target) * 100));

    // 1. Welcome screen widget
    const wStreak = $('welcome-goal-streak');
    const wBar = $('welcome-goal-bar');
    const wText = $('welcome-goal-text');
    if (wStreak) wStreak.innerHTML = `${ICON_SVG.flame} <span>${streak} วัน</span>`;
    if (wBar) wBar.style.width = `${pct}%`;
    if (wText) wText.textContent = `${dailyGoal.count}/${dailyGoal.target}`;

    // 2. Dashboard screen widget
    const dCurrent = $('dgw-current');
    const dTarget = $('dgw-target');
    const dBar = $('dgw-bar-fill');
    const dStreak = $('dgw-streak-count');
    const dBadge = $('dgw-status-badge');
    if (dCurrent) dCurrent.textContent = dailyGoal.count;
    if (dTarget) dTarget.textContent = dailyGoal.target;
    if (dBar) dBar.style.width = `${pct}%`;
    if (dStreak) dStreak.textContent = `${streak} วันติดต่อกัน`;
    if (dBadge) {
      if (dailyGoal.count >= dailyGoal.target) {
        dBadge.className = 'dgw-badge completed';
        dBadge.textContent = 'สำเร็จเป้าหมายแล้ว';
      } else {
        dBadge.className = 'dgw-badge';
        dBadge.textContent = `เหลืออีก ${dailyGoal.target - dailyGoal.count} คำ`;
      }
    }

    // Target chips in dashboard
    const chips = document.querySelectorAll('#dgw-target-chips .chip-sm');
    chips.forEach((c) => {
      if (!(c instanceof HTMLElement)) return;
      c.classList.toggle('active', Number(c.dataset.goal) === dailyGoal.target);
    });
  }

  function computeMasteryBreakdown() {
    let mastered = 0, learning = 0, review = 0, unseen = 0;
    keyToIndex.forEach((_, key) => {
      const lvl = getWordMasteryLevel(key);
      if (lvl === 'mastered') mastered++;
      else if (lvl === 'learning') learning++;
      else if (lvl === 'review') review++;
      else unseen++;
    });

    const elMastered = $('mastery-cnt-mastered');
    const elLearning = $('mastery-cnt-learning');
    const elReview = $('mastery-cnt-review');
    const elUnseen = $('mastery-cnt-unseen');
    if (elMastered) animateNumber(elMastered, mastered);
    if (elLearning) animateNumber(elLearning, learning);
    if (elReview) animateNumber(elReview, review);
    if (elUnseen) animateNumber(elUnseen, unseen);
  }

  let themePreference = 'light';
  const themeMediaQuery = (typeof window.matchMedia === 'function')
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  function initTheme() {
    const savedTheme = storage.get(STORAGE.theme, 'light');
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    const mode = (theme === 'dark' || theme === 'auto') ? theme : 'light';
    themePreference = mode;
    const isDark = mode === 'auto' ? Boolean(themeMediaQuery && themeMediaQuery.matches) : mode === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    storage.set(STORAGE.theme, mode);
    document.querySelectorAll('.theme-toggle-btn .theme-icon').forEach(el => {
      el.innerHTML = isDark ? ICON_SVG.sun : ICON_SVG.moon;
    });
    const sel = /** @type {HTMLSelectElement|null} */ ($('prof-theme-select'));
    if (sel) sel.value = mode;
  }

  if (themeMediaQuery && typeof themeMediaQuery.addEventListener === 'function') {
    themeMediaQuery.addEventListener('change', () => {
      if (themePreference === 'auto') applyTheme('auto');
    });
  }

  function toggleTheme() {
    const isCurrentDark = document.body.classList.contains('dark-theme');
    const nextIsDark = !isCurrentDark;
    applyTheme(nextIsDark ? 'dark' : 'light');
    SoundFX.theme(nextIsDark);
    if (currentScreen === 'history') {
      if (dashTab === 'dash-overview') renderOverview(computeCategoryStats());
      if (typeof renderQuizHistory === 'function') renderQuizHistory();
    }
  }

  /* =========================================================
     * Session state (in memory)
     * ========================================================= */
  let session = null;      // { id, mode, indices, answers, currentIndex, startedAt }
  let lastSummary = null;  // last finished session record
  /** @type {(() => void)|null} */
  let pendingAdvanceCallback = null;
  let isFlipped = false;
  let isAnimating = false;
  let summaryTab = 'review';
  let historyFilter = 'review';
  let historyReturnTo = 'welcome';

  /* =========================================================
     * DOM
     * ========================================================= */
  const $ = (id) => document.getElementById(id);

  const screens = {
    learn: $('learn-screen'),
    lesson: $('lesson-screen'),
    welcome: $('welcome-screen'),
    'quiz-hub': $('quiz-hub-screen'),
    dictionary: $('dictionary-screen'),
    profile: $('profile-screen'),
    more: $('more-screen'),
    app: $('app-screen'),
    summary: $('summary-screen'),
    history: $('history-screen'),
    quiz: $('quiz-screen'),
    'quiz-summary': $('quiz-summary-screen')
  };

  // Welcome
  const overallKnownEl = $('overall-known');
  const overallReviewEl = $('overall-review');
  const overallUnseenEl = $('overall-unseen');
  const segOptions = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll('.seg-option')));
  const segIndicator = $('seg-indicator');
  const countSlider = /** @type {HTMLInputElement|null} */ ($('count-slider'));
  const countDisplay = $('count-display');
  const btnStart = $('btn-start');
  const btnResume = $('btn-resume');
  const resumeInfo = $('resume-info');

  // App
  const flashcard = $('flashcard');
  const wordEl = $('word');
  const partOfSpeechEl = $('part-of-speech');
  const btnSpeak = $('btn-speak');
  const translationEl = $('translation');
  const definitionEl = $('definition');
  const exampleEl = $('example');
  const exampleTranslationEl = $('example-translation');
  const exampleBoxEl = $('example-box');
  const currentIndexEl = $('current-index');
  const totalCardsEl = $('total-cards');
  const sessionDotsEl = $('session-dots');
  const cardStatusEl = $('card-status');
  const sessionModeEl = $('session-mode');
  const statKnownEl = $('stat-known');
  const statReviewEl = $('stat-review');
  const statRemainingEl = $('stat-remaining');
  const btnPrev = /** @type {HTMLButtonElement|null} */ ($('btn-prev'));
  const btnNext = /** @type {HTMLButtonElement|null} */ ($('btn-next'));
  const btnKnown = $('btn-known');
  const btnUnknown = $('btn-unknown');
  const btnAdvance = $('btn-advance');
  const btnHome = $('btn-home');
  const btnFinish = $('btn-finish');

  // Summary
  const summaryEmojiEl = $('summary-emoji');
  const summaryTitleEl = $('summary-title');
  const summarySubtitleEl = $('summary-subtitle');
  const summaryPercentEl = $('summary-percent');
  const ringFg = $('ring-fg');
  const summaryKnownEl = $('summary-known');
  const summaryReviewEl = $('summary-review');
  const summarySkippedEl = $('summary-skipped');
  const summarySkippedBox = $('summary-skipped-box');
  const summaryTabs = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll('#summary-tabs .tab')));
  const summaryTabReviewCount = $('summary-tab-review-count');
  const summaryTabKnownCount = $('summary-tab-known-count');
  const summaryWordList = $('summary-word-list');
  const btnRetryReview = $('btn-retry-review');
  const retryCountEl = $('retry-count');
  const btnNewSession = $('btn-new-session');
  const btnSummaryHome = $('btn-summary-home');
  const btnSummaryHistory = $('btn-summary-history');

  // History
  const btnHistoryBack = $('btn-history-back');
  const btnClearHistory = $('btn-clear-history');
  const historyTabs = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll('#history-tabs .tab')));
  const historySessionsPanel = $('history-sessions');
  const historyWordsPanel = $('history-words');
  const historySessionsCount = $('history-sessions-count');
  const sessionListEl = $('session-list');
  const filterChips = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll('#status-filter .chip')));
  const filterReviewCount = $('filter-review-count');
  const filterKnownCount = $('filter-known-count');
  const wordSearch = /** @type {HTMLInputElement|null} */ ($('word-search'));
  const historyWordList = $('history-word-list');
  const btnPracticeReview = $('btn-practice-review');
  const practiceReviewLabel = $('practice-review-label');
  const dashListPanel = $('dash-list-panel');
  const dashTabIndicator = $('dash-tab-indicator');
  const catFilterEl = $('cat-filter');
  const dashRingFg = $('dash-ring-fg');

  // Modal & toast
  const modal = $('modal');
  const modalTitle = $('modal-title');
  const modalMessage = $('modal-message');
  const modalConfirm = $('modal-confirm');
  const modalCancel = $('modal-cancel');
  const toastEl = $('toast');

  // Quiz
  const btnQuizHome = $('btn-quiz-home');
  const quizWord = $('quiz-word');
  const btnQuizSpeak = $('btn-quiz-speak');
  const quizOptions = $('quiz-options');
  const quizCurrentIndex = $('quiz-current-index');
  const quizTotal = $('quiz-total');
  const quizScoreEl = $('quiz-score');
  const quizProgressFill = $('quiz-progress-fill');

  /* =========================================================
     * Screen management
     * ========================================================= */
  let currentScreen = 'learn';
  let onScreenShownHook = null;
  let onLearnDataChangedHook = null;
  let getLearnSyncPayloadHook = null;
  let mergeLearnSyncPayloadHook = null;
  let importLearnJsonHook = null;
  let onGoogleUiRefreshHook = null;
  let onGetLearnStreakDatesHook = null;
  let onRenderLearnDashboardHook = null;

  const NAV_ORDER = ['learn', 'practice', 'quiz', 'dictionary', 'dashboard', 'profile', 'more'];
  const FOCUS_SCREENS = new Set(['app', 'quiz', 'lesson']);
  const screenScrollMap = Object.create(null);

  function showScreen(name) {
    const prevScreen = currentScreen;
    if (prevScreen && prevScreen !== name && !FOCUS_SCREENS.has(prevScreen)) {
      screenScrollMap[prevScreen] = window.scrollY || 0;
    }
    const prevCat = typeof navCategoryForScreen === 'function' ? navCategoryForScreen(prevScreen) : 'learn';
    const nextCat = typeof navCategoryForScreen === 'function' ? navCategoryForScreen(name) : 'learn';
    const prevOrd = NAV_ORDER.indexOf(prevCat);
    const nextOrd = NAV_ORDER.indexOf(nextCat);
    const dir = (prevOrd !== -1 && nextOrd !== -1 && prevOrd !== nextOrd)
      ? (nextOrd > prevOrd ? 'forward' : 'backward')
      : '';

    Object.entries(screens).forEach(([key, el]) => {
      if (!el) return;
      const on = key === name;
      if (on && dir) el.setAttribute('data-nav-dir', dir);
      else if (on) el.removeAttribute('data-nav-dir');
      el.classList.toggle('active', on);
    });
    currentScreen = name;
    const isFocus = FOCUS_SCREENS.has(name);
    document.body.classList.toggle('in-focus-session', isFocus);

    if (isFocus || typeof screenScrollMap[name] !== 'number') {
      window.scrollTo(0, 0);
    } else {
      const savedY = screenScrollMap[name];
      window.scrollTo(0, savedY);
    }
    if (name === 'welcome') renderWelcome();
    if (typeof onScreenShownHook === 'function') onScreenShownHook(name);
  }

  /* =========================================================
     * Welcome screen
     * ========================================================= */
  function countStatuses() {
    let known = 0;
    let review = 0;
    Object.values(wordStatus).forEach((s) => {
      if (s === 'known') known++;
      else if (s === 'review') review++;
    });
    return { known, review, unseen: Math.max(0, totalWords - known - review) };
  }

  function renderWelcome() {
    const c = countStatuses();
    overallKnownEl.textContent = c.known.toLocaleString();
    overallReviewEl.textContent = c.review.toLocaleString();
    overallUnseenEl.textContent = c.unseen.toLocaleString();
    $('total-words-label').textContent = getEligibleIndices(selectedCefr).length.toLocaleString();

    const active = loadActiveSession();
    if (active) {
      const answered = active.answers.filter(Boolean).length;
      resumeInfo.textContent = `· ตอบแล้ว ${answered}/${active.indices.length}`;
      btnResume.hidden = false;
    } else {
      btnResume.hidden = true;
    }
    updateSegmented();
    updateWelcomeSmartStrip();
  }

  function updateWelcomeSmartStrip() {
    const dueIndices = getDueWordIndices();
    const srsDot = $('welcome-srs-dot');
    const srsText = $('welcome-srs-text');
    const srsBadge = $('welcome-srs-badge');
    if (srsText && srsBadge && srsDot) {
      if (dueIndices.length > 0) {
        srsDot.classList.add('has-due');
        srsText.textContent = `ครบกำหนดทบทวนวันนี้ ${dueIndices.length.toLocaleString()} คำ (SRS Due)`;
        srsBadge.textContent = `ทบทวน ${Math.min(selectedSize, dueIndices.length)} คำ →`;
      } else {
        srsDot.classList.remove('has-due');
        const studiedCount = Object.keys(wordStatus).length;
        srsText.textContent = studiedCount > 0
          ? 'ทบทวนครบตามรอบความจำแล้ว · ความจำระยะยาวคงที่'
          : 'ระบบ Spaced Repetition (SRS) คำนวณรอบทบทวนอัตโนมัติ';
        srsBadge.textContent = 'เรียนคำใหม่ →';
      }
    }
    const starredBtn = $('btn-welcome-starred');
    const starredCnt = $('welcome-starred-count');
    if (starredBtn && starredCnt) {
      const n = bookmarkedWords.size;
      starredCnt.textContent = `${n} คำปักหมุด`;
      starredBtn.hidden = n === 0;
    }
  }

  let sliderAnimFrame = null;

  function updateSegmented(skipSliderUpdate = false) {
    if (!skipSliderUpdate && sliderAnimFrame) {
      cancelAnimationFrame(sliderAnimFrame);
      sliderAnimFrame = null;
    }
    const idx = SESSION_SIZES.indexOf(selectedSize);
    segOptions.forEach((btn, i) => {
      const active = i === idx;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-checked', String(active));
    });

    if (idx >= 0) {
      segIndicator.style.display = 'block';
      segIndicator.style.transform = `translateX(${idx * 100}%)`;
    } else {
      segIndicator.style.display = 'none';
    }

    if (!skipSliderUpdate) {
      if (countSlider) countSlider.value = String(selectedSize);
    }

    if (countDisplay && countDisplay.textContent !== String(selectedSize)) {
      countDisplay.textContent = String(selectedSize);
      countDisplay.classList.remove('pop-anim');
      void countDisplay.offsetWidth; // force reflow
      countDisplay.classList.add('pop-anim');
    }
  }

  function animateSliderTo(targetValue) {
    if (!countSlider) return;
    if (sliderAnimFrame) cancelAnimationFrame(sliderAnimFrame);

    const startValue = Number(countSlider.value);
    const endValue = Number(targetValue);
    const duration = 400; // 400ms for smooth slide
    const startTime = performance.now();

    function step(currentTime) {
      if (selectedSize !== endValue) {
        sliderAnimFrame = null;
        return;
      }
      const elapsed = currentTime - startTime;
      let progress = elapsed / duration;
      if (progress > 1) progress = 1;

      const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease out
      const currentVal = startValue + (endValue - startValue) * easeOut;
      countSlider.value = String(currentVal);

      const displayVal = Math.round(currentVal);
      if (countDisplay && countDisplay.textContent !== String(displayVal)) {
        countDisplay.textContent = String(displayVal);
      }

      if (progress < 1) {
        sliderAnimFrame = requestAnimationFrame(step);
      } else {
        sliderAnimFrame = null;
        selectedSize = endValue;
        savePrefsState({ touchSize: true });
        updateSegmented(false); // final pop animation
        if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
      }
    }
    sliderAnimFrame = requestAnimationFrame(step);
  }

  segOptions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const size = Number(btn.dataset.count);
      if (!SESSION_SIZES.includes(size)) return;

      selectedSize = size;
      savePrefsState({ touchSize: true });
      updateSegmented(true); // update buttons immediately, skip jumping slider
      animateSliderTo(size);
    });
  });

  if (countSlider) {
    countSlider.addEventListener('input', () => {
      if (sliderAnimFrame) cancelAnimationFrame(sliderAnimFrame);
      const size = Math.round(Number(countSlider.value));

      if (selectedSize !== size) {
        SoundFX.tick(); // เล่นเสียง "ตึด" เบาๆ ตอนที่เลขเปลี่ยน
        selectedSize = size;
        savePrefsState({ touchSize: true });
        updateSegmented(true); // update display and buttons, but don't snap the thumb while dragging
        if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
      }
    });

    countSlider.addEventListener('change', () => {
      const size = Math.round(Number(countSlider.value));
      selectedSize = size;
      savePrefsState({ touchSize: true });
      updateSegmented(false); // snap thumb to integer on release
      if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
    });
  }

  btnStart.addEventListener('click', async () => {
    if (loadActiveSession()) {
      const ok = await confirmDialog({
        title: 'เริ่มรอบใหม่?',
        message: 'คุณมีรอบที่ยังเล่นไม่จบอยู่ ถ้าเริ่มรอบใหม่ รอบเดิมจะถูกยกเลิก (คำที่ตอบไปแล้วยังถูกบันทึกอยู่)',
        confirmText: 'เริ่มรอบใหม่'
      });
      if (!ok) return;
    }
    startRandomSession();
  });

  btnResume.addEventListener('click', () => {
    const active = loadActiveSession();
    if (!active) { renderWelcome(); return; }
    session = active;
    enterSession();
  });

  /* =========================================================
     * Session lifecycle
     * ========================================================= */
  function getEligibleIndices(cefr = selectedCefr) {
    const lvl = typeof cefr === 'string' ? cefr : 'all';
    const out = [];
    for (let i = 0; i < totalWords; i++) {
      if (lvl === 'all' || wordsData[i].cefr === lvl) out.push(i);
    }
    return out;
  }

  /** @param {string|null} [cefrOverride] */
  function startRandomSession(cefrOverride = null) {
    // Smart SRS-prioritized selection constrained by CEFR deck if chosen
    const lvl = (typeof cefrOverride === 'string' && cefrOverride) ? cefrOverride : (selectedCefr || 'all');
    const eligible = getEligibleIndices(lvl);
    const eligibleSet = new Set(eligible);
    const due = getDueWordIndices().filter(i => eligibleSet.has(i));
    const duePickCount = Math.min(due.length, Math.ceil(selectedSize * 0.4));
    const pickedDue = pickRandom(due, duePickCount);
    const pickedSet = new Set(pickedDue);
    const remainingPool = eligible.filter(i => !pickedSet.has(i));
    const pickedRest = pickRandom(remainingPool, Math.max(0, selectedSize - pickedDue.length));
    const picked = shuffle([...pickedDue, ...pickedRest]);
    if (!picked.length) {
      showToast('ไม่พบคำศัพท์ในระดับ CEFR ที่เลือก');
      return;
    }
    startSession(picked, 'random', lvl === 'all' ? '' : `ระดับ ${lvl}`);
  }

  function startSession(indices, mode, label = '') {
    if (!indices.length) {
      showToast('ไม่มีคำให้ฝึก');
      return;
    }
    session = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      mode,
      label,
      indices,
      answers: new Array(indices.length).fill(null),
      currentIndex: 0,
      startedAt: new Date().toISOString()
    };
    saveActiveSession();
    enterSession();
  }

  function enterSession() {
    resetCardVisual();
    sessionModeEl.textContent = modeLabel(session);
    sessionModeEl.classList.toggle('review', session.mode === 'review');
    sessionModeEl.classList.toggle('category', session.mode === 'category');
    totalCardsEl.textContent = session.indices.length;
    buildDots();
    renderCard();
    updateSessionStats();
    showScreen('app');
  }

  function modeLabel(s) {
    if (s.mode === 'review') return 'โหมดทบทวน';
    if (s.mode === 'category') return `หมวด${s.label || ''}`;
    return s.label ? `สุ่มคำ · ${s.label}` : 'สุ่มคำ';
  }

  function saveActiveSession() {
    if (session) storage.set(STORAGE.active, session);
  }

  function resetCardVisual() {
    isFlipped = false;
    isAnimating = false;
    flashcard.classList.remove('is-flipped');
    flashcard.style.transition = '';
    flashcard.style.transform = '';
    flashcard.style.opacity = '';
  }

  /**
     * Record an answer for the current card.
     * The session stats are always recomputed from the answers array,
     * so re-answering the same card never double counts and switching
     * known <-> review moves the count from one side to the other.
     */
  function answer(status) {
    if (!session || isAnimating || currentScreen !== 'app') return;

    if (status === 'known') SoundFX.known();
    else if (status === 'review') SoundFX.review();

    const i = session.currentIndex;
    const previous = session.answers[i];

    session.answers[i] = status;
    const wordKey = keyOf(wordsData[session.indices[i]]);
    wordStatus[wordKey] = status;
    storage.set(STORAGE.status, wordStatus);

    recordWordMastery(wordKey, status);
    if (previous === null) {
      recordDailyGoalProgress(1);
    }
    saveActiveSession();

    updateSessionStats(previous !== status ? status : null);
    updateAnswerUI();
    updateDots();

    const total = session.indices.length;
    const firstUnanswered = session.answers.indexOf(null);

    const moveToNext = () => {
      btnKnown.style.display = '';
      btnUnknown.style.display = '';
      btnAdvance.style.display = 'none';

      if (i < total - 1) {
        goTo(i + 1, false);
      } else if (firstUnanswered === -1) {
        // Last card answered and everything done -> summary
        isAnimating = true;
        setTimeout(() => {
          isAnimating = false;
          finishSession();
        }, 450);
      } else {
        const remaining = session.answers.filter((a) => a === null).length;
        showToast(`ยังเหลืออีก ${remaining} คำที่ยังไม่ได้ตอบ`);
        goTo(firstUnanswered, false);
      }
    };

    if (!isFlipped) {
      isFlipped = true;
      flashcard.classList.add('is-flipped');
      btnKnown.style.display = 'none';
      btnUnknown.style.display = 'none';
      btnAdvance.style.display = 'flex';
      pendingAdvanceCallback = moveToNext;
    } else {
      moveToNext();
    }
  }

  function getSessionCounts(s = session) {
    let known = 0;
    let review = 0;
    s.answers.forEach((a) => {
      if (a === 'known') known++;
      else if (a === 'review') review++;
    });
    return { known, review, remaining: s.answers.length - known - review };
  }

  function updateSessionStats(changed = null) {
    const c = getSessionCounts();
    statKnownEl.textContent = String(c.known);
    statReviewEl.textContent = String(c.review);
    statRemainingEl.textContent = String(c.remaining);
    if (changed === 'known') bump(statKnownEl);
    if (changed === 'review') bump(statReviewEl);
  }

  function setSummaryEmblem(el, pct) {
    if (!el) return;
    el.classList.remove('tier-gold', 'tier-good');
    if (pct >= 90) {
      el.classList.add('tier-gold');
      el.innerHTML = ICON_SVG.trophy;
    } else if (pct >= 70) {
      el.classList.add('tier-good');
      el.innerHTML = ICON_SVG.award;
    } else if (pct >= 40) {
      el.innerHTML = ICON_SVG.zap;
    } else {
      el.innerHTML = ICON_SVG.sprout;
    }
  }

  function bump(el) {
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
    OxMotion.springPop(el);
  }

  async function requestFinish() {
    if (!session) return;
    const c = getSessionCounts();
    if (c.known + c.review === 0) {
      const ok = await confirmDialog({
        title: 'ออกจากรอบนี้?',
        message: 'คุณยังไม่ได้ตอบคำใดเลย รอบนี้จะไม่ถูกบันทึกในประวัติ',
        confirmText: 'ออกจากรอบ',
        danger: true
      });
      if (!ok) return;
      storage.remove(STORAGE.active);
      session = null;
      showScreen('welcome');
      return;
    }
    if (c.remaining > 0) {
      const ok = await confirmDialog({
        title: 'จบรอบตอนนี้?',
        message: `ยังมีอีก ${c.remaining} คำที่ยังไม่ได้ตอบ คำเหล่านี้จะถูกนับเป็น "ข้าม"`,
        confirmText: 'จบรอบและดูสรุป'
      });
      if (!ok) return;
    }
    finishSession();
  }

  function finishSession() {
    if (!session) return;
    const known = [];
    const review = [];
    let skipped = 0;
    session.indices.forEach((wi, i) => {
      const k = keyOf(wordsData[wi]);
      if (session.answers[i] === 'known') known.push(k);
      else if (session.answers[i] === 'review') review.push(k);
      else skipped++;
    });

    const record = {
      id: session.id,
      date: new Date().toISOString(),
      startedAt: session.startedAt,
      mode: session.mode,
      label: session.label || '',
      size: session.indices.length,
      known,
      review,
      skipped
    };

    // Save to history (replace if same id already exists)
    sessions = sessions.filter((s) => s.id !== record.id);
    sessions.unshift(record);
    if (sessions.length > MAX_SESSIONS) sessions = sessions.slice(0, MAX_SESSIONS);
    storage.set(STORAGE.sessions, sessions);
    storage.remove(STORAGE.active);
    if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();

    session = null;
    resetCardVisual();
    lastSummary = record;
    renderSummary(record);

    // Play victory sound & launch confetti when accuracy >= 70%
    if (record.known.length > 0 || record.review.length > 0) {
      SoundFX.victory();
    }
    const donePct = record.size ? Math.round((record.known.length / record.size) * 100) : 0;
    const durationSec = record.startedAt ? Math.max(0, Math.round((Date.now() - record.startedAt) / 1000)) : 0;
    trackGAEvent('session_complete', {
      mode: record.mode,
      size: record.size,
      known_count: record.known.length,
      review_count: record.review.length,
      accuracy: donePct,
      duration_sec: durationSec
    });
    showScreen('summary');
    if (donePct >= 70) {
      OxConfetti.launch(donePct === 100 ? 'perfect' : 'good');
    }
  }

  /* =========================================================
     * Card rendering
     * ========================================================= */
  function renderCard() {
    const word = wordsData[session.indices[session.currentIndex]];
    wordEl.textContent = word.word;
    wordEl.classList.toggle('long', word.word.length > 11);
    partOfSpeechEl.textContent = word.partOfSpeech || 'word';
    partOfSpeechEl.className = 'part-of-speech pos-' + catOf(word);
    translationEl.textContent = word.translation;

    OxMotion.cancel(flashcard);
    const sylEl = $('card-syllables');
    if (sylEl) {
      sylEl.textContent = word.syllables || '';
      sylEl.hidden = !word.syllables;
    }
    const phoneticEl = $('phonetic');
    if (phoneticEl) {
      phoneticEl.textContent = word.phonetic || '';
    }
    const phoneticUkEl = $('phonetic-uk');
    if (phoneticUkEl) {
      phoneticUkEl.textContent = word.phoneticUK ? `UK ${word.phoneticUK}` : '';
      phoneticUkEl.hidden = !word.phoneticUK;
    }
    const regBadgeEl = $('card-register-badge');
    if (regBadgeEl) {
      regBadgeEl.textContent = word.register || '';
      regBadgeEl.hidden = !word.register;
    }
    OxCefr.applyBadge($('card-cefr-badge'), word.cefr);
    OxCefr.applyBadge($('card-cefr-badge-back'), word.cefr);

    const lexBox = $('card-lexical-box');
    const patternRow = $('card-pattern-row');
    const patternEl = $('card-grammar-pattern');
    const formsRow = $('card-forms-row');
    const formsContainer = $('card-forms');
    const colRow = $('card-collocations-row');
    const colContainer = $('card-collocations');
    const antRow = $('card-antonyms-row');
    const antContainer = $('card-antonyms');
    const famRow = $('card-family-row');
    const famContainer = $('card-word-family');
    const phrasesRow = $('card-phrases-row');
    const phrasesContainer = $('card-phrases');
    const rootRow = $('card-root-row');
    const rootEl = $('card-root-breakdown');
    const tipRow = $('card-usage-tip-row');
    const tipContainer = $('card-usage-tip');
    if (lexBox && colRow && colContainer && famRow && famContainer) {
      const patternText = word.grammarPattern ? String(word.grammarPattern).trim() : '';
      const forms = Array.isArray(word.forms) ? word.forms.slice(0, 3) : [];
      const cols = Array.isArray(word.collocations) ? word.collocations.slice(0, 4) : [];
      const ants = Array.isArray(word.antonyms) ? word.antonyms.slice(0, 4) : [];
      const fams = Array.isArray(word.wordFamily) ? word.wordFamily.slice(0, 4) : [];
      const phrases = Array.isArray(word.phrases) ? word.phrases.slice(0, 3) : [];
      const rootText = word.rootBreakdown ? String(word.rootBreakdown).trim() : '';
      const tipText = word.usageTip ? String(word.usageTip).trim() : '';

      if (patternRow && patternEl) {
        patternEl.textContent = patternText;
        patternRow.hidden = !patternText;
      }
      if (formsRow && formsContainer) {
        formsContainer.innerHTML = forms.map(fm => `<span class="lex-chip is-form">${escapeHtml(fm)}</span>`).join('');
        formsRow.hidden = forms.length === 0;
      }
      if (cols.length > 0) {
        colContainer.innerHTML = cols.map(c => `<span class="lex-chip">${escapeHtml(c)}</span>`).join('');
        colRow.hidden = false;
      } else {
        colContainer.innerHTML = '';
        colRow.hidden = true;
      }
      if (antRow && antContainer) {
        antContainer.innerHTML = ants.map(a => `<button type="button" class="lex-chip family-chip is-antonym" data-family-word="${escapeHtml(a)}" title="ดูคำตรงข้ามนี้">${escapeHtml(a)}</button>`).join('');
        antRow.hidden = ants.length === 0;
      }
      if (fams.length > 0) {
        famContainer.innerHTML = fams.map(f => {
          const lookup = f.replace(/\s*\([^()]*\)\s*$/, '').trim();
          return `<button type="button" class="lex-chip family-chip" data-family-word="${escapeHtml(lookup)}" title="เปิดดูคำนี้ในคลังคำศัพท์">${escapeHtml(f)}</button>`;
        }).join('');
        famRow.hidden = false;
      } else {
        famContainer.innerHTML = '';
        famRow.hidden = true;
      }
      if (phrasesRow && phrasesContainer) {
        phrasesContainer.innerHTML = phrases.map(ph => `<span class="lex-chip is-phrase">${escapeHtml(ph)}</span>`).join('');
        phrasesRow.hidden = phrases.length === 0;
      }
      if (rootRow && rootEl) {
        rootEl.textContent = rootText;
        rootRow.hidden = !rootText;
      }
      if (tipRow && tipContainer) {
        tipContainer.textContent = tipText;
        tipRow.hidden = !tipText;
      }
      lexBox.hidden = (!patternText && forms.length === 0 && cols.length === 0 && ants.length === 0 && fams.length === 0 && phrases.length === 0 && !rootText && !tipText);
    }

    if (word.definition) {
      definitionEl.style.display = 'block';
      definitionEl.textContent = word.definition;
    } else {
      definitionEl.style.display = 'none';
    }

    const extraExBox = $('card-extra-example-box');
    const extraExEl = $('extra-example');
    const extraExThEl = $('extra-example-translation');
    if (word.example) {
      exampleBoxEl.style.display = 'block';
      exampleEl.textContent = word.example;
      if (word.exampleTranslation) {
        exampleTranslationEl.style.display = 'block';
        exampleTranslationEl.textContent = word.exampleTranslation;
      } else {
        exampleTranslationEl.style.display = 'none';
      }
      if (extraExBox && extraExEl && extraExThEl) {
        if (word.extraExample) {
          extraExEl.textContent = word.extraExample;
          extraExThEl.textContent = word.extraExampleTranslation || '';
          extraExThEl.hidden = !word.extraExampleTranslation;
          extraExBox.hidden = false;
        } else {
          extraExBox.hidden = true;
        }
      }
    } else {
      exampleBoxEl.style.display = 'none';
      if (extraExBox) extraExBox.hidden = true;
    }

    currentIndexEl.textContent = session.currentIndex + 1;
    btnPrev.disabled = session.currentIndex === 0;
    btnNext.disabled = session.currentIndex === session.indices.length - 1;

    updateAnswerUI();
    updateDots();
    updateCardStarAndSRS();

    // เล่นเสียงอ่านอัตโนมัติเมื่อเปิดการ์ดใหม่
    if (typeof speakWordOverride === 'function') {
      speakWordOverride(word.word);
    }
  }

  function updateAnswerUI() {
    const i = session.currentIndex;
    const ans = session.answers[i];
    btnKnown.classList.toggle('selected', ans === 'known');
    btnUnknown.classList.toggle('selected', ans === 'review');

    const key = keyOf(wordsData[session.indices[i]]);
    const prev = wordStatus[key];
    cardStatusEl.className = 'card-status';
    if (ans === 'known') {
      cardStatusEl.classList.add('show', 'known');
      cardStatusEl.textContent = '✓ จำได้แล้ว';
    } else if (ans === 'review') {
      cardStatusEl.classList.add('show', 'review');
      cardStatusEl.textContent = '↻ ต้องทบทวน';
    } else if (prev) {
      cardStatusEl.classList.add('show', 'past');
      cardStatusEl.textContent = prev === 'known' ? 'ครั้งก่อน: จำได้แล้ว' : 'ครั้งก่อน: ต้องทบทวน';
    } else {
      cardStatusEl.classList.add('show', 'new');
      cardStatusEl.textContent = '✦ คำใหม่';
    }
  }

  function buildDots() {
    sessionDotsEl.innerHTML = '';
    session.indices.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot';
      dot.title = `คำที่ ${i + 1}`;
      dot.setAttribute('aria-label', `ไปคำที่ ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      sessionDotsEl.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = sessionDotsEl.children;
    for (let i = 0; i < dots.length; i++) {
      const a = session.answers[i];
      dots[i].className = 'dot' +
        (a === 'known' ? ' known' : a === 'review' ? ' review' : '') +
        (i === session.currentIndex ? ' current' : '');
    }
  }

  /* =========================================================
     * Navigation & animation
     * ========================================================= */
  function goTo(newIndex, skipFlipWait = false) {
    if (!session || isAnimating) return;
    if (newIndex < 0 || newIndex >= session.indices.length || newIndex === session.currentIndex) return;
    const direction = newIndex > session.currentIndex ? 1 : -1;
    isAnimating = true;

    btnKnown.style.display = '';
    btnUnknown.style.display = '';
    if (btnAdvance) btnAdvance.style.display = 'none';
    pendingAdvanceCallback = null;

    if (isFlipped) {
      if (!skipFlipWait) {
        // Smooth unflip first, then slide
        flashcard.classList.remove('is-flipped');
        isFlipped = false;
        setTimeout(() => slideTransition(direction, newIndex, false), 500); // 500ms to let flip finish smoothly
        return;
      } else {
        // Slide out while still flipped (prevents wild spinning)
        slideTransition(direction, newIndex, true);
        return;
      }
    }
    slideTransition(direction, newIndex, false);
  }

  function slideTransition(direction, newIndex, hideWhileFlipped) {
    flashcard.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease';
    flashcard.style.opacity = '0';

    if (hideWhileFlipped) {
      // X axis is inverted when rotateY(180deg). To slide left visually, we move right (+50px)
      flashcard.style.transform = `rotateY(180deg) translateX(${direction > 0 ? '50px' : '-50px'})`;
    } else {
      flashcard.style.transform = `translateX(${direction > 0 ? '-50px' : '50px'})`;
    }

    setTimeout(() => {
      if (!session) { resetCardVisual(); return; }

      if (hideWhileFlipped) {
        flashcard.classList.remove('is-flipped');
        isFlipped = false;
      }

      session.currentIndex = newIndex;
      saveActiveSession();
      renderCard();

      flashcard.style.transition = 'none';
      flashcard.style.transform = `translateX(${direction > 0 ? '50px' : '-50px'})`;
      void flashcard.offsetWidth; // force reflow

      flashcard.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease';
      flashcard.style.opacity = '1';
      flashcard.style.transform = 'translateX(0)';

      setTimeout(() => {
        flashcard.style.transition = '';
        flashcard.style.transform = '';
        flashcard.style.opacity = '';
        isAnimating = false;
      }, 500);
    }, 250);
  }

  function updateCardStarAndSRS() {
    if (!session) return;
    const w = wordsData[session.indices[session.currentIndex]];
    if (!w) return;
    const key = keyOf(w);
    const starred = isBookmarked(key);
    const starFront = $('btn-star-card');
    const starBack = $('btn-star-card-back');
    if (starFront) starFront.classList.toggle('is-starred', starred);
    if (starBack) starBack.classList.toggle('is-starred', starred);

    const srs = getSRSStatusText(key);
    const badgeFront = $('card-srs-badge');
    const badgeBack = $('card-srs-badge-back');
    if (badgeFront) {
      badgeFront.textContent = srs.text;
      badgeFront.className = 'card-srs-badge ' + srs.cls;
    }
    if (badgeBack) {
      badgeBack.textContent = srs.text;
      badgeBack.className = 'card-srs-badge ' + srs.cls;
    }
  }

  function updateStarUIEverywhere(key) {
    const starred = isBookmarked(key);
    document.querySelectorAll(`[data-star-key="${CSS.escape ? CSS.escape(key) : key.replace(/"/g, '\"')}"]`).forEach(btn => {
            btn.classList.toggle('is-starred', starred);
        });
        const fStarCount = $('filter-starred-count');
        if (fStarCount) fStarCount.textContent = String(bookmarkedWords.size);
        updateCardStarAndSRS();
        updateWelcomeSmartStrip();
    }

    function flipCard(e) {
        if (isAnimating || !session) return;
        // ป้องกันไม่ให้พลิกการ์ดเวลากดปุ่มฟังเสียง ปักหมุดดาว หรือชิปตระกูลคำศัพท์
        if (e && e.target && e.target.closest && (e.target.closest('.speak-btn') || e.target.closest('.card-star-btn') || e.target.closest('.family-chip'))) return;

        isFlipped = !isFlipped;
        flashcard.classList.toggle('is-flipped', isFlipped);
        SoundFX.flip(isFlipped);
    }

    // Preload voices
    let availableVoices = [];
    if (window.speechSynthesis) {
        availableVoices = window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
            availableVoices = window.speechSynthesis.getVoices();
        };
    }

    let enginesAwake = false;
    function wakeUpEngines() {
        if (enginesAwake) return;

        // 1. Wake up Speech Engine (speeds up initial TTS)
        if (window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance('');
            utterance.volume = 0;
            utterance.rate = 2.0;
            window.speechSynthesis.speak(utterance);
            window.speechSynthesis.cancel();
        }

        // 2. Wake up SoundFX Engine (prevents lag on the first sound effect)
        SoundFX.init();
        if (SoundFX.audioCtx && SoundFX.audioCtx.state === 'suspended') {
            SoundFX.audioCtx.resume();
        }

        enginesAwake = true;
    }

    // Wake up engines on the first user interaction
    document.addEventListener('click', wakeUpEngines, { once: true });
    document.addEventListener('touchstart', wakeUpEngines, { once: true });
    document.addEventListener('keydown', wakeUpEngines, { once: true });

    function speakWord(e) {
        if (e) e.stopPropagation(); // Prevent flipping the card
        if (!session) return;
        const word = wordsData[session.indices[session.currentIndex]].word;
        speakWordOverride(word, true);
    }

    if (btnSpeak) btnSpeak.addEventListener('click', speakWord);

    // =========================================================
    // Swipe Gestures (Tinder-like)
    // =========================================================
    let startX = 0, startY = 0;
    let isSwiping = false;
    let dragDeltaX = 0;
    let isDragAction = false;

    flashcard.style.touchAction = 'pan-y'; // Prevent browser back/forward swipe navigation

    flashcard.addEventListener('pointerdown', (e) => {
        // Only accept primary pointer (left click or touch)
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        if (e.target instanceof Element && (e.target.closest('.speak-btn') || e.target.closest('.card-star-btn'))) return;
        if (isAnimating || !session) return;

        isSwiping = true;
        isDragAction = false;
        startX = e.clientX;
        startY = e.clientY;
        dragDeltaX = 0;

        flashcard.setPointerCapture(e.pointerId);
        flashcard.style.transition = 'none'; // Remove transition for instant following
    });

    flashcard.addEventListener('pointermove', (e) => {
        if (!isSwiping) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
            isDragAction = true;
        }

        dragDeltaX = deltaX;

        const rotateY = isFlipped ? 180 : 0;
        const rotateZ = deltaX * 0.05; // Slight tilt
        flashcard.style.transform = `translateX(${deltaX}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;

        const targetCard = isFlipped ? flashcard.querySelector('.card-back') : flashcard.querySelector('.card-front');
        if (targetCard instanceof HTMLElement) {
            if (deltaX < -50) { // Swipe Left (จำได้แล้ว - เขียว)
                targetCard.style.borderColor = 'var(--success)';
                targetCard.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.4)';
            } else if (deltaX > 50) { // Swipe Right (ต้องทบทวน - แดง)
                targetCard.style.borderColor = 'var(--danger)';
                targetCard.style.boxShadow = '0 0 30px rgba(239, 68, 68, 0.4)';
            } else {
                targetCard.style.borderColor = '';
                targetCard.style.boxShadow = '';
            }
        }
    });

    function resetSwipeVisuals() {
        flashcard.style.transition = '';
        OxMotion.springSnap(flashcard);
        const cards = flashcard.querySelectorAll('.glass-card');
        cards.forEach(c => {
            if (!(c instanceof HTMLElement)) return;
            c.style.borderColor = '';
            c.style.boxShadow = '';
        });

        setTimeout(() => {
            if (!isSwiping && !isAnimating) {
                flashcard.style.transition = '';
            }
        }, 400);
    }

    function handlePointerEnd(e) {
        if (!isSwiping) return;
        isSwiping = false;
        flashcard.releasePointerCapture(e.pointerId);

        const threshold = 100; // pixels to trigger swipe action

        if (dragDeltaX < -threshold) { // Swipe Left (จำได้แล้ว!)
            resetSwipeVisuals();
            answer('known');
        } else if (dragDeltaX > threshold) { // Swipe Right (ต้องทบทวน)
            resetSwipeVisuals();
            answer('review');
        } else {
            resetSwipeVisuals();
        }
    }

    flashcard.addEventListener('pointerup', handlePointerEnd);
    flashcard.addEventListener('pointercancel', handlePointerEnd);

    flashcard.addEventListener('click', (e) => {
        if (isDragAction) {
            e.preventDefault();
            return;
        }
        flipCard(e);
    });

    btnNext.addEventListener('click', () => { SoundFX.next(); session && goTo(session.currentIndex + 1); });
    btnPrev.addEventListener('click', () => { SoundFX.next(); session && goTo(session.currentIndex - 1); });
    btnKnown.addEventListener('click', () => answer('known'));
    btnUnknown.addEventListener('click', () => answer('review'));
    btnAdvance.addEventListener('click', () => {
        SoundFX.next();
        if (pendingAdvanceCallback) pendingAdvanceCallback();
    });
    btnHome.addEventListener('click', () => {
        saveActiveSession();
        showScreen('welcome');
        showToast('บันทึกความคืบหน้าแล้ว กด "เล่นต่อรอบเดิม" เพื่อกลับมาเล่นต่อ');
    });
    btnFinish.addEventListener('click', requestFinish);

    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('open')) {
            if (e.key === 'Escape') closeModal(false);
            return;
        }
        if (e.target instanceof HTMLElement && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

        // Quiz Screen Shortcuts
        if (currentScreen === 'quiz' && quizSession) {
            const buttons = quizOptions.querySelectorAll('.quiz-btn');
            const key = e.key.toLowerCase();
            let optionIndex = -1;
            if (key === '1' || key === 'a') optionIndex = 0;
            else if (key === '2' || key === 'b') optionIndex = 1;
            else if (key === '3' || key === 'c') optionIndex = 2;
            else if (key === '4' || key === 'd') optionIndex = 3;
            else if (e.key === ' ' || key === 'r') {
                e.preventDefault();
                if (btnQuizSpeak) btnQuizSpeak.click();
                return;
            }

            const optBtn = optionIndex >= 0 ? buttons[optionIndex] : null;
            if (optBtn instanceof HTMLElement && !quizAnswered) {
                e.preventDefault();
                optBtn.click();
            }
            return;
        }

        // Flashcard App Screen Shortcuts
        if (currentScreen !== 'app' || !session) return;

        if (e.key === 'ArrowRight') { SoundFX.next(); goTo(session.currentIndex + 1); }
        else if (e.key === 'ArrowLeft') { SoundFX.next(); goTo(session.currentIndex - 1); }
        else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            flipCard();
        } else if (e.key === '1') answer('known');
        else if (e.key === '2') answer('review');
    });

    /* =========================================================
     * Summary screen
     * ========================================================= */
    const RING_CIRC = 2 * Math.PI * 52;
    ringFg.style.strokeDasharray = RING_CIRC.toFixed(2);
    ringFg.style.strokeDashoffset = RING_CIRC.toFixed(2);

    function renderSummary(record) {
        const knownN = record.known.length;
        const reviewN = record.review.length;
        const percent = record.size ? Math.round((knownN / record.size) * 100) : 0;

        let title;
        if (percent >= 90) { title = 'ยอดเยี่ยมมาก!'; }
        else if (percent >= 70) { title = 'เก่งมาก!'; }
        else if (percent >= 40) { title = 'ทำได้ดี สู้ต่อไป!'; }
        else { title = 'ค่อย ๆ เรียนรู้ไปนะ'; }

        setSummaryEmblem(summaryEmojiEl, percent);
        summaryTitleEl.textContent = title;
        summarySubtitleEl.textContent = `คุณจำได้ ${knownN} จาก ${record.size} คำในรอบนี้`;

        summarySkippedBox.hidden = record.skipped === 0;
        summaryTabReviewCount.textContent = reviewN;
        summaryTabKnownCount.textContent = knownN;
        retryCountEl.textContent = reviewN;
        btnRetryReview.hidden = reviewN === 0;

        // Animate numbers & ring
        animateNumber(summaryKnownEl, knownN);
        animateNumber(summaryReviewEl, reviewN);
        animateNumber(summarySkippedEl, record.skipped);
        animateNumber(summaryPercentEl, percent, '%');

        ringFg.style.transition = 'none';
        ringFg.style.strokeDashoffset = RING_CIRC.toFixed(2);
        void ringFg.getBoundingClientRect(); // force reflow so the transition restarts
        ringFg.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
        ringFg.style.strokeDashoffset = (RING_CIRC * (1 - percent / 100)).toFixed(2);

        summaryTab = reviewN > 0 ? 'review' : 'known';
        renderSummaryList();
    }

    function renderSummaryList() {
        if (!lastSummary) return;
        summaryTabs.forEach((t) => {
            const active = t.dataset.tab === summaryTab;
            t.classList.toggle('active', active);
            t.setAttribute('aria-selected', String(active));
        });
        const keys = summaryTab === 'known' ? lastSummary.known : lastSummary.review;
        summaryWordList.innerHTML = keys.length
            ? keys.map((k) => wordListItem(k, summaryTab)).join('')
            : `<li class="empty-state">${summaryTab === 'known' ? 'ยังไม่มีคำที่จำได้ในรอบนี้' : 'ไม่มีคำที่ต้องทบทวน เยี่ยมมาก!'}</li>`;
    }

    function renderLexChipsHtml(list, prefix, chipClass, clickable = false) {
        if (!Array.isArray(list) || !list.length) return '';
        return list.map(item => {
            const raw = String(item || '').trim();
            if (!raw) return '';
            const lookup = raw.replace(/\s*\([^()]*\)\s*$/, '').trim();
            const safeLabel = escapeHtml(`${prefix}${raw}`);
            if (clickable) {
                return `<button type="button" class="lex-chip family-chip ${chipClass}" data-jump-word="${escapeHtml(lookup)}" title="เปิดดูคำว่า ${escapeHtml(lookup)}">${safeLabel}</button>`;
            }
            return `<span class="lex-chip ${chipClass}">${safeLabel}</span>`;
        }).join('');
    }

    function wordListItem(key, status, highlightQ = '') {
        const idx = keyToIndex.get(key);
        if (idx === undefined) return '';
        const w = wordsData[idx];
        const curStatus = wordStatus[key] || status || 'unseen';
        const lvl = getWordMasteryLevel(key);
        const m = wordMastery[key];
        const days = m && m.intervalDays ? m.intervalDays : 0;
        const lvlBadge = lvl === 'mastered'
            ? `ชำนาญ${days ? ` · ${days}d` : ''}`
            : lvl === 'learning'
                ? `กำลังจำ${days ? ` · ${days}d` : ''}`
                : lvl === 'review' ? 'ต้องซ้ำ' : 'ใหม่';
        const cat = catOf(w);
        const starred = isBookmarked(key);

        const safeKey = escapeHtml(key);
        const safeWord = escapeHtml(w.word);
        const dispWord = highlightQ ? OxFuzzy.highlightMatch(w.word, highlightQ) : safeWord;
        const dispTrans = highlightQ ? OxFuzzy.highlightMatch(w.translation, highlightQ) : escapeHtml(w.translation);
        const cefrHtml = w.cefr ? `<span class="cefr-badge ${OxCefr.getClass(w.cefr)}">${escapeHtml(w.cefr)}</span>` : '';
        const regHtml = w.register ? `<span class="card-register-badge is-compact">${escapeHtml(w.register)}</span>` : '';
        const tipBadge = w.usageTip ? `<span class="wid-has-tip-badge" title="มีเคล็ดลับการใช้ที่คนไทยมักสับสน">💡 เคล็ดลับ</span>` : '';
        const safePhonetic = escapeHtml(w.phonetic || '');
        const safePhoneticUK = escapeHtml(w.phoneticUK || '');
        const safeSyllables = escapeHtml(w.syllables || '');
        const safePattern = escapeHtml(w.grammarPattern || '');
        const safeRoot = escapeHtml(w.rootBreakdown || '');
        const safePos = escapeHtml(w.partOfSpeech || 'word');
        const safeDef = escapeHtml(w.definition || '');
        const safeEx = escapeHtml(w.example || '');
        const safeExTh = escapeHtml(w.exampleTranslation || '');
        const safeEx2 = escapeHtml(w.extraExample || '');
        const safeEx2Th = escapeHtml(w.extraExampleTranslation || '');
        const safeTip = escapeHtml(w.usageTip || '');

        const extraForms = Array.isArray(w.forms) ? w.forms.slice(0, 3) : [];
        const extraCols = Array.isArray(w.collocations) ? w.collocations.slice(0, 3) : [];
        const extraSyns = Array.isArray(w.synonyms) ? w.synonyms.slice(0, 4) : [];
        const extraAnts = Array.isArray(w.antonyms) ? w.antonyms.slice(0, 4) : [];
        const extraFams = Array.isArray(w.wordFamily) ? w.wordFamily.slice(0, 4) : [];
        const extraPhrases = Array.isArray(w.phrases) ? w.phrases.slice(0, 3) : [];

        const metaRowsHtml = [
            safePattern ? `<div class="wid-meta-row"><span class="wid-meta-label">ไวยากรณ์:</span><span class="lex-chip is-pattern">${safePattern}</span></div>` : '',
            extraForms.length ? `<div class="wid-meta-row"><span class="wid-meta-label">รูปผันคำ:</span>${renderLexChipsHtml(extraForms, '', 'is-form', false)}</div>` : '',
            extraCols.length ? `<div class="wid-meta-row"><span class="wid-meta-label">ใช้คู่กัน:</span>${renderLexChipsHtml(extraCols, '', '', false)}</div>` : '',
            extraSyns.length ? `<div class="wid-meta-row"><span class="wid-meta-label">คล้ายกัน:</span>${renderLexChipsHtml(extraSyns, '≈ ', '', true)}</div>` : '',
            extraAnts.length ? `<div class="wid-meta-row"><span class="wid-meta-label">ตรงข้าม:</span>${renderLexChipsHtml(extraAnts, '≠ ', 'is-antonym', true)}</div>` : '',
            extraFams.length ? `<div class="wid-meta-row"><span class="wid-meta-label">ตระกูลคำ:</span>${renderLexChipsHtml(extraFams, '', '', true)}</div>` : '',
            extraPhrases.length ? `<div class="wid-meta-row"><span class="wid-meta-label">สำนวน/วลี:</span>${renderLexChipsHtml(extraPhrases, '', 'is-phrase', false)}</div>` : '',
            safeRoot ? `<div class="wid-meta-row"><span class="wid-meta-label">รากศัพท์:</span><span class="lex-root-badge">${safeRoot}</span></div>` : ''
        ].filter(Boolean).join('');

        return `<li class="word-item ${curStatus}" data-word-key="${safeKey}">
      <div class="word-item-row">
        <div class="word-item-left">
          <span class="status-dot dot-${lvl}"></span>
          <button type="button" class="word-item-speak-btn speak-btn" data-speak-word="${safeWord}" title="ฟังเสียงอ่าน" aria-label="ฟังเสียงอ่าน">
            <svg class="speak-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            <span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i></span>
          </button>
          <div class="word-item-main">
            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <span class="word-item-word">${dispWord}</span>
              ${cefrHtml}
              ${safePhonetic ? `<span class="word-item-phonetic">${safePhonetic}</span>` : ''}
              ${safePhoneticUK ? `<span class="word-item-phonetic is-uk">UK ${safePhoneticUK}</span>` : ''}
              <span class="pos-badge ${cat}">${safePos}</span>
              ${regHtml}
              <span class="pill-sm ${lvl}">${lvlBadge}</span>
              ${tipBadge}
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="word-item-trans">${dispTrans}</span>
          <button type="button" class="word-star-btn ${starred ? 'is-starred' : ''}" data-star-key="${safeKey}" title="ปักหมุดคำศัพท์สำคัญ" aria-label="ปักหมุดคำศัพท์สำคัญ">
            ${ICON_SVG.star}
          </button>
          <span class="word-item-expand-arrow" style="opacity: 0.5; font-size: 0.8rem;">▾</span>
        </div>
      </div>
      <div class="word-item-drawer">
        ${safeSyllables ? `<div class="wid-syllable-line"><span>แบ่งพยางค์:</span> <code>${safeSyllables}</code></div>` : ''}
        ${safeDef ? `<div class="wid-def"><b>ความหมาย:</b> ${safeDef}</div>` : ''}
        ${safeEx ? `
        <div class="wid-example">
            <span>"${safeEx}"</span>
            <button type="button" class="glass-btn-icon small word-item-speak-btn speak-btn" data-speak-example="${safeEx}" title="ฟังตัวอย่าง" aria-label="ฟังตัวอย่างประโยค" style="width: 26px; height: 26px;">
                <svg class="speak-svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i></span>
            </button>
        </div>
        ${safeExTh ? `<div class="wid-example-th">"${safeExTh}"</div>` : ''}
        ` : ''}
        ${safeEx2 ? `
        <div class="wid-example wid-example-extra">
            <span>"${safeEx2}"</span>
            <button type="button" class="glass-btn-icon small word-item-speak-btn speak-btn" data-speak-example="${safeEx2}" title="ฟังตัวอย่างเพิ่มเติม" aria-label="ฟังตัวอย่างเพิ่มเติม" style="width: 24px; height: 24px;">
                <svg class="speak-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i></span>
            </button>
        </div>
        ${safeEx2Th ? `<div class="wid-example-th">"${safeEx2Th}"</div>` : ''}
        ` : ''}
        ${metaRowsHtml ? `<div class="wid-meta-group">${metaRowsHtml}</div>` : ''}
        ${safeTip ? `<div class="wid-tip-box"><b>💡 เคล็ดลับจำง่าย:</b> ${safeTip}</div>` : ''}
        <div class="wid-actions">
            <button type="button" class="wid-action-btn ${curStatus === 'known' ? 'is-active-known' : ''}" data-set-status-key="${safeKey}" data-set-status="known">✓ จำได้แล้ว</button>
            <button type="button" class="wid-action-btn ${curStatus === 'review' ? 'is-active-review' : ''}" data-set-status-key="${safeKey}" data-set-status="review">↻ ต้องทบทวน</button>
            <button type="button" class="wid-action-btn speak-btn" data-speak-slow="${safeWord}">0.7x ฟังช้า</button>
            <button type="button" class="wid-action-btn" data-inspect-key="${safeKey}">🔍 การ์ดเต็ม</button>
        </div>
      </div>
    </li>`;
    }

    function animateNumber(el, target, suffix = '') {
        const duration = 900;
        const start = performance.now();
        const token = Symbol();
        el._animToken = token;
        function frame() {
            if (el._animToken !== token) return;
            const t = Math.min(1, (performance.now() - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (t < 1) requestAnimationFrame(frame);
        }
        el.textContent = '0' + suffix;
        requestAnimationFrame(frame);
        // Safety net: always land on the exact final value
        setTimeout(() => {
            if (el._animToken === token) el.textContent = target + suffix;
        }, duration + 50);
    }

    // Extended Motion Helpers attached safely onto OxMotion
    Object.assign(OxMotion, {
        pulseClass(el, cls = 'is-popping') {
            if (!el) return;
            el.classList.remove(cls);
            void el.offsetWidth;
            el.classList.add(cls);
        },
        countTo(el, fromVal, toVal, opts = {}) {
            if (!el) return;
            const startNum = Number(fromVal) || 0;
            const endNum = Number(toVal) || 0;
            const format = opts.format || ((n) => n.toLocaleString());
            if (prefersReducedMotion() || startNum === endNum) {
                el.textContent = format(endNum);
                return;
            }
            const duration = opts.duration || 650;
            const startTime = performance.now();
            const token = Symbol();
            el._oxCountToken = token;
            const step = () => {
                if (el._oxCountToken !== token) return;
                const p = Math.min(1, (performance.now() - startTime) / duration);
                const eased = 1 - Math.pow(1 - p, 3);
                const cur = Math.round(startNum + (endNum - startNum) * eased);
                el.textContent = format(cur);
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            setTimeout(() => {
                if (el._oxCountToken === token) el.textContent = format(endNum);
            }, duration + 60);
        },
        spawnFloatingXp(anchorEl, amount) {
            if (!amount || amount <= 0 || prefersReducedMotion()) return;
            const pill = document.createElement('div');
            pill.className = 'float-xp-pill';
            pill.textContent = `+${amount} XP`;
            let left = window.innerWidth * 0.5;
            let top = 76;
            if (anchorEl && typeof anchorEl.getBoundingClientRect === 'function') {
                const r = anchorEl.getBoundingClientRect();
                if (r.width > 0 || r.height > 0) {
                    left = r.left + r.width / 2;
                    top = Math.max(24, r.top - 6);
                }
            }
            pill.style.left = `${Math.round(left)}px`;
            pill.style.top = `${Math.round(top)}px`;
            document.body.appendChild(pill);
            const cleanup = () => { if (pill.parentNode) pill.remove(); };
            pill.addEventListener('animationend', cleanup, { once: true });
            setTimeout(cleanup, 1200);
        },
        snapshotRects(rootEl, selector, keyAttr) {
            const map = new Map();
            if (!rootEl || prefersReducedMotion()) return map;
            rootEl.querySelectorAll(selector).forEach(el => {
                const k = el.getAttribute(keyAttr);
                if (!k) return;
                const r = el.getBoundingClientRect();
                if (r.width > 0 && r.height > 0) map.set(k, r);
            });
            return map;
        },
        playFlip(rootEl, prevMap, selector, keyAttr) {
            if (!rootEl || !prevMap || prevMap.size === 0 || prefersReducedMotion()) return;
            rootEl.querySelectorAll(selector).forEach(el => {
                const k = el.getAttribute(keyAttr);
                const oldR = k ? prevMap.get(k) : null;
                if (!oldR) return;
                const newR = el.getBoundingClientRect();
                const dx = oldR.left - newR.left;
                const dy = oldR.top - newR.top;
                if (Math.abs(dx) < 2 && Math.abs(dy) < 2) return;
                if (typeof el.animate === 'function') {
                    el.getAnimations?.().forEach(a => a.cancel());
                    el.animate(
                        [
                            { transform: `translate(${dx}px, ${dy}px) scale(0.95)` },
                            { transform: 'translate(0, 0) scale(1)' }
                        ],
                        { duration: 220, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
                    );
                }
            });
        }
    });

    summaryTabs.forEach((t) => t.addEventListener('click', () => {
        summaryTab = t.dataset.tab;
        renderSummaryList();
    }));

    btnRetryReview.addEventListener('click', () => {
        if (!lastSummary) return;
        const indices = lastSummary.review.map((k) => keyToIndex.get(k)).filter((i) => i !== undefined);
        startSession(shuffle(indices), 'review');
    });
    btnNewSession.addEventListener('click', () => startRandomSession());
    btnSummaryHome.addEventListener('click', () => showScreen('welcome'));
    btnSummaryHistory.addEventListener('click', () => openHistory('summary'));

    /* =========================================================
     * Dashboard screen (formerly "History")
     * ========================================================= */
    let historyCatFilter = 'all';
    let dashTab = 'dash-overview';

    function openHistory(returnTo, tab = 'dash-overview') {
        historyReturnTo = returnTo;
        wordSearch.value = '';
        renderHistory();
        if (typeof renderQuizHistory === 'function') renderQuizHistory();
        showScreen('history');

        // Sync mode switcher buttons & tab visibility
        const targetMode = tab.startsWith('dash-learn')
            ? 'learn'
            : (tab.startsWith('dash-quiz') ? 'quiz' : 'flashcard');
        const modeBtns = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll('.dash-mode-switcher .mode-btn')));
        modeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === targetMode);
        });

        historyTabs.forEach(t => {
            t.style.display = (t.dataset.group === targetMode) ? '' : 'none';
        });

        setDashTab(tab);
    }

    let lastDashRenderSig = '';
    function buildDashRenderSig() {
        const wsKeys = Object.keys(wordStatus);
        let known = 0;
        for (let i = 0; i < wsKeys.length; i++) if (wordStatus[wsKeys[i]] === 'known') known++;
        let qhLen = 0;
        let qhTop = '';
        try {
            const rawQ = localStorage.getItem('oxford3000_quiz_history');
            if (rawQ) {
                const arr = JSON.parse(rawQ);
                qhLen = Array.isArray(arr) ? arr.length : 0;
                qhTop = arr && arr[0] ? String(arr[0].date || '') : '';
            }
        } catch (_) { }
        const firstSes = sessions[0] ? String(sessions[0].date || '') : '';
        return `${wsKeys.length}:${known}|s:${sessions.length}:${firstSes}|m:${Object.keys(wordMastery).length}|b:${bookmarkedWords.size}|dg:${dailyGoal.date}:${dailyGoal.count}:${dailyGoal.target}|qh:${qhLen}:${qhTop}`;
    }

    function renderHistory(force = false) {
        const sig = buildDashRenderSig();
        if (!force && sig === lastDashRenderSig) {
            if (typeof onRenderLearnDashboardHook === 'function') onRenderLearnDashboardHook();
            return false;
        }
        lastDashRenderSig = sig;
        historySessionsCount.textContent = String(sessions.length);
        const stats = computeCategoryStats();
        renderOverview(stats);
        renderCategories(stats);
        renderAnalysis(stats);
        renderSessionList();
        renderHistoryWords();
        if (typeof onRenderLearnDashboardHook === 'function') onRenderLearnDashboardHook();
        return true;
    }

    function setDashTab(panelId) {
        dashTab = panelId;
        historyTabs.forEach((t) => {
            const active = t.dataset.panel === panelId;
            t.classList.toggle('active', active);
            t.setAttribute('aria-selected', String(active));
            const panel = $(t.dataset.panel);
            if (panel) panel.hidden = !active;
        });
        dashListPanel.hidden = !(panelId === 'history-sessions' || panelId === 'history-words');
        requestAnimationFrame(() => moveDashIndicator(true));
        if (panelId === 'dash-overview') animateDashRing();
    }

    function moveDashIndicator(scrollTabContainer = false) {
        const active = historyTabs.find((t) => t.classList.contains('active') && t.style.display !== 'none');
        if (!active || !dashTabIndicator) return;
        dashTabIndicator.style.width = `${active.offsetWidth}px`;
        dashTabIndicator.style.transform = `translateX(${active.offsetLeft}px)`;

        // Scroll ONLY the tab bar container horizontally, NEVER scroll the window or page!
        if (scrollTabContainer) {
            const nav = active.closest('.dash-tabs');
            if (nav) {
                const navLeft = nav.getBoundingClientRect().left;
                const activeLeft = active.getBoundingClientRect().left;
                const offset = activeLeft - navLeft + nav.scrollLeft - (nav.clientWidth / 2) + (active.clientWidth / 2);
                nav.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
            }
        }
    }

    let lastWindowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        // Only recompute if window width changed (ignore mobile address bar height-only resize when scrolling!)
        if (window.innerWidth !== lastWindowWidth) {
            lastWindowWidth = window.innerWidth;
            if (currentScreen === 'history') {
                moveDashIndicator(false);
            }
        }
    });

    function computeCategoryStats() {
        return CATEGORY_IDS.map((id) => {
            const known = [];
            const review = [];
            categoryIndices[id].forEach((i) => {
                const k = keyOf(wordsData[i]);
                if (wordStatus[k] === 'known') known.push(k);
                else if (wordStatus[k] === 'review') review.push(k);
            });
            const total = categoryIndices[id].length;
            const studied = known.length + review.length;
            return {
                id, ...CATEGORY_META[id], total, known, review, studied,
                unseen: total - studied,
                accuracy: studied ? known.length / studied : null,
                coverage: total ? studied / total : 0,
                mastery: total ? known.length / total : 0
            };
        });
    }

    const catStyle = (c) => `--c1:${c.c1};--c2:${c.c2}`;
    const barWidth = (n, total) => (n > 0 ? Math.max((n / total) * 100, 1.5) : 0);

    function stackBar(known, review, total, big = false) {
        return `<div class="stack-bar${big ? ' big' : ''}">
      <span class="seg known" style="width:${barWidth(known, total)}%"></span>
      <span class="seg review" style="width:${barWidth(review, total)}%"></span>
    </div>`;
    }

    function computeStreak() {
        let quizHistory = [];
        try {
            const stored = localStorage.getItem('oxford3000_quiz_history');
            if (stored) quizHistory = JSON.parse(stored);
        } catch (e) { }

        const days = new Set();
        const addDate = (raw) => {
            if (!raw) return;
            const dt = raw instanceof Date ? raw : new Date(raw);
            if (!Number.isNaN(dt.getTime())) days.add(dt.toDateString());
        };
        const addYmdKey = (ymd) => {
            if (typeof ymd !== 'string') return;
            const m = ymd.match(/^(\d{4})-(\d{2})-(\d{2})$/);
            if (!m) return;
            addDate(new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
        };

        sessions.forEach((s) => addDate(s && s.date));
        quizHistory.forEach((q) => addDate(q && q.date));
        Object.entries(activityLog || {}).forEach(([k, val]) => {
            if (Number(val) > 0) addYmdKey(k);
        });
        if (typeof onGetLearnStreakDatesHook === 'function') {
            (onGetLearnStreakDatesHook() || []).forEach((ts) => addDate(ts));
        }

        const d = new Date();
        if (!days.has(d.toDateString())) d.setDate(d.getDate() - 1);
        let streak = 0;
        while (days.has(d.toDateString())) {
            streak++;
            d.setDate(d.getDate() - 1);
        }
        return streak;
    }

    /* ---------- Overview ---------- */
    let dashMastery = 0;

    function animateDashRing() {
        if (!dashRingFg) return;
        const shown = dashMastery > 0 ? Math.max(dashMastery, 0.015) : 0;
        dashRingFg.style.strokeDasharray = RING_CIRC.toFixed(2);
        dashRingFg.style.transition = 'none';
        dashRingFg.style.strokeDashoffset = RING_CIRC.toFixed(2);
        void dashRingFg.getBoundingClientRect();
        dashRingFg.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1)';
        dashRingFg.style.strokeDashoffset = (RING_CIRC * (1 - shown)).toFixed(2);
    }

    function renderOverview(stats) {
        const c = countStatuses();
        const studied = c.known + c.review;
        dashMastery = totalWords ? c.known / totalWords : 0;

        $('dash-mastery-percent').textContent = fmtPct(dashMastery);
        const level = 1 + Math.floor(c.known / 100);
        $('dash-level-pill').textContent = `Level ${level} · อีก ${100 - (c.known % 100)} คำเลเวลอัพ`;

        let title;
        if (studied === 0) title = 'เริ่มต้นการเดินทาง';
        else if (dashMastery < 0.1) title = 'กำลังไปได้สวย';
        else if (dashMastery < 0.35) title = 'ก้าวหน้าอย่างต่อเนื่อง';
        else if (dashMastery < 0.7) title = 'ใกล้เป็นเซียนแล้ว';
        else title = 'ระดับเซียนด้านคำศัพท์';
        $('dash-hero-title').textContent = title;
        $('dash-hero-sub').textContent =
            `จำได้แล้ว ${c.known.toLocaleString()} จาก ${totalWords.toLocaleString()} คำ · เหลืออีก ${(totalWords - c.known).toLocaleString()} คำ`;

        $('dash-bar-known').style.width = `${barWidth(c.known, totalWords)}%`;
        $('dash-bar-review').style.width = `${barWidth(c.review, totalWords)}%`;
        $('dash-lg-known').textContent = c.known.toLocaleString();
        $('dash-lg-review').textContent = c.review.toLocaleString();
        $('dash-lg-unseen').textContent = c.unseen.toLocaleString();

        animateNumber($('dash-stat-sessions'), sessions.length);
        animateNumber($('dash-stat-accuracy'), studied ? Math.round((c.known / studied) * 100) : 0, '%');
        animateNumber($('dash-stat-streak'), computeStreak());
        animateNumber($('dash-stat-studied'), studied);

        // Trend chart (oldest -> newest)
        const trendEl = $('dash-trend');
        const recent = sessions.slice(0, 10).reverse();
        trendEl.innerHTML = recent.length
            ? recent.map((s, i) => {
                const p = s.size ? Math.round((s.known.length / s.size) * 100) : 0;
                const d = new Date(s.date);
                const label = Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });
                return `<div class="trend-col" style="--h:${Math.max(p, 4)}%;--d:${i * 70}ms" title="${escapeHtml(formatDate(s.date))} · ${p}%">
          <span class="trend-val">${p}%</span>
          <div class="trend-track"><div class="trend-bar ${s.mode}"></div></div>
          <span class="trend-label">${escapeHtml(label)}</span>
        </div>`;
            }).join('')
            : `<div class="empty-state big"><span class="empty-icon">${ICON_SVG.layers}</span><p>ยังไม่มีข้อมูลรอบการเล่น</p><small>เล่นให้จบ 1 รอบ กราฟจะแสดงที่นี่</small></div>`;

        // Mini category bars
        $('dash-mini-cats').innerHTML = stats.map((s) => `
      <div class="mini-cat" style="${catStyle(s)}">
        <span class="cat-icon sm">${s.icon}</span>
        <div class="mini-cat-main">
          <div class="mini-cat-top"><b>${s.th}</b><span class="muted">${s.known.length}/${s.total.toLocaleString()} · ${fmtPct(s.mastery)}</span></div>
          ${stackBar(s.known.length, s.review.length, s.total)}
        </div>
      </div>`).join('');

        updateSmartRecommendation(stats, c);
        updateDailyGoalUI();
        computeMasteryBreakdown();
        renderCefrBreakdown();
        renderActivityHeatmap();
    }

    function renderActivityHeatmap() {
        const container = $('dash-activity-heatmap');
        const activeDaysEl = $('heatmap-active-days');
        const detailNote = $('heatmap-detail-note');
        if (!container) return;

        // Aggregate daily counts from activityLog, sessions, and quizHistory
        const countsByDate = { ...activityLog };
        const toDateKey = (iso) => {
            const d = new Date(iso);
            if (Number.isNaN(d.getTime())) return '';
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${y}-${m}-${day}`;
        };

        const sessionCounts = {};
        sessions.forEach(s => {
            const k = toDateKey(s.date);
            if (k) sessionCounts[k] = (sessionCounts[k] || 0) + (s.known.length + s.review.length);
        });
        try {
            const qh = JSON.parse(localStorage.getItem('oxford3000_quiz_history') || '[]');
            qh.forEach(q => {
                const k = toDateKey(q.date);
                if (k) sessionCounts[k] = (sessionCounts[k] || 0) + (q.total || 0);
            });
        } catch (e) { }

        Object.keys(sessionCounts).forEach(k => {
            countsByDate[k] = Math.max(countsByDate[k] || 0, sessionCounts[k]);
        });
        if (dailyGoal && dailyGoal.date) {
            countsByDate[dailyGoal.date] = Math.max(countsByDate[dailyGoal.date] || 0, dailyGoal.count || 0);
        }

        const cells = [];
        let activeDays = 0;
        const today = new Date();
        for (let offset = 27; offset >= 0; offset--) {
            const d = new Date(today);
            d.setDate(today.getDate() - offset);
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            const key = `${y}-${m}-${day}`;
            const count = countsByDate[key] || 0;
            if (count > 0) activeDays++;
            const lv = count === 0 ? 0 : count < 10 ? 1 : count < 20 ? 2 : count < 40 ? 3 : 4;
            const label = d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });
            cells.push(`<button type="button" class="hm-cell lv-${lv}" data-hm-date="${escapeHtml(label)}" data-hm-count="${count}" title="${escapeHtml(label)}: ${count} คำ">${d.getDate()}</button>`);
        }

        container.innerHTML = cells.join('');
        if (activeDaysEl) activeDaysEl.textContent = `เรียนแล้ว ${activeDays} / 28 วัน`;

        container.onclick = (e) => {
            if (!(e.target instanceof Element)) return;
            const cell = e.target.closest('.hm-cell');
            if (!(cell instanceof HTMLElement) || !detailNote) return;
            container.querySelectorAll('.hm-cell.selected').forEach(c => c.classList.remove('selected'));
            cell.classList.add('selected');
            const dt = cell.dataset.hmDate;
            const cnt = Number(cell.dataset.hmCount || 0);
            detailNote.innerHTML = cnt > 0
                ? `<b>${escapeHtml(dt)}</b> · เรียนและทบทวนไปทั้งหมด <b>${cnt} คำ</b>`
                : `<b>${escapeHtml(dt)}</b> · ยังไม่มีการบันทึกคำศัพท์ในวันนี้`;
        };
    }

    function updateSmartRecommendation(stats, counts) {
        const recCard = $('smart-rec-card');
        if (!recCard) return;
        const iconEl = $('smart-rec-icon');
        const titleEl = $('smart-rec-title');
        const descEl = $('smart-rec-desc');
        const btnEl = $('smart-rec-action-btn');

        // Priority 1: Words needing review
        if (counts.review > 0) {
            iconEl.innerHTML = ICON_SVG.zap;
            titleEl.textContent = `มีคำที่ต้องทบทวน ${counts.review.toLocaleString()} คำ`;
            descEl.textContent = 'ทบทวนคำเหล่านี้ซ้ำทันทีเพื่อย้ายคำเข้าสู่ความจำระยะยาวอย่างถาวร';
            const n = Math.min(selectedSize, counts.review);
            btnEl.textContent = `ทบทวนทันที (${n} คำ)`;
            btnEl.onclick = () => practiceReviewWords('all');
            return;
        }

        // Priority 2: Daily goal remaining
        if (dailyGoal.count < dailyGoal.target) {
            const rem = dailyGoal.target - dailyGoal.count;
            iconEl.innerHTML = ICON_SVG.target;
            titleEl.textContent = `เป้าหมายวันนี้ขาดอีก ${rem} คำ`;
            descEl.textContent = `อีกเพียงรอบเดียวก็พิชิตเป้าหมายประจำวัน ${dailyGoal.target} คำแล้ว!`;
            const n = Math.min(selectedSize, rem);
            btnEl.textContent = `เริ่มรอบด่วน (${n} คำ)`;
            btnEl.onclick = () => {
                const pool = Array.from({ length: totalWords }, (_, i) => i);
                startSession(pickRandom(pool, n), 'random');
            };
            return;
        }

        // Priority 3: Weakest category
        const studiedCats = stats.filter(s => s.studied && s.accuracy < 0.75);
        if (studiedCats.length > 0) {
            const weakest = studiedCats.slice().sort((a, b) => a.accuracy - b.accuracy)[0];
            iconEl.innerHTML = ICON_SVG.compass;
            titleEl.textContent = `เสริมความมั่นใจหมวด${weakest.th}`;
            descEl.textContent = `หมวดนี้มีความแม่นยำ ${fmtPct(weakest.accuracy)} แนะนำให้ฝึกเพิ่มเพื่อปิดจุดอ่อน`;
            btnEl.textContent = `ฝึกหมวด${weakest.th} ทันที`;
            btnEl.onclick = () => practiceCategory(weakest.id);
            return;
        }

        // Priority 4: All caught up / Ready for new words!
        iconEl.innerHTML = ICON_SVG.award;
        titleEl.textContent = 'ยอดเยี่ยมมาก! บรรลุเป้าหมายครบถ้วน';
        descEl.textContent = 'ทบทวนคำศัพท์ครบหมดแล้ว พร้อมที่จะก้าวหน้าและเรียนรู้คำศัพท์ใหม่ต่อไป';
        btnEl.textContent = `เรียนคำใหม่ (${selectedSize} คำ)`;
        btnEl.onclick = () => practiceUnseenWords();
    }

    async function practiceUnseenWords() {
        const pool = Array.from({ length: totalWords }, (_, i) => i)
            .filter((i) => !wordStatus[keyOf(wordsData[i])]);
        if (!pool.length) {
            showToast('คุณเรียนครบทั้งคลังคำศัพท์แล้ว!');
            return;
        }
        if (!(await confirmReplaceActive('เริ่มเรียนรู้คำใหม่?', 'เริ่มเรียน'))) return;
        startSession(pickRandom(pool, selectedSize), 'random', 'คำใหม่');
    }

    /* ---------- Categories ---------- */
    const CHIP_LIMIT = 60;

    function chipList(keys, status) {
        if (!keys.length) return '<span class="muted small">— ยังไม่มี —</span>';
        const sorted = keys.slice().sort((a, b) => a.localeCompare(b));
        const chips = sorted.slice(0, CHIP_LIMIT).map((k) => {
            const w = wordsData[keyToIndex.get(k)];
            return `<span class="word-chip ${status}" title="${escapeHtml(w.translation)}">${escapeHtml(w.word)}<small>${escapeHtml(w.translation)}</small></span>`;
        }).join('');
        const more = sorted.length > CHIP_LIMIT
            ? `<span class="word-chip more">+${sorted.length - CHIP_LIMIT} คำ</span>` : '';
        return chips + more;
    }

    function renderCategories(stats) {
        $('cat-grid').innerHTML = stats.map((s, i) => {
            const st = strengthOf(s);
            return `<article class="glass-panel cat-card liquid-card" style="${catStyle(s)};--d:${i * 80}ms">
        <div class="cat-glow" aria-hidden="true"></div>
        <div class="cat-head">
          <span class="cat-icon">${s.icon}</span>
          <div class="cat-title">
            <h4>${s.th}</h4>
            <small>${s.en} · ${s.total.toLocaleString()} คำ</small>
          </div>
          <div class="cat-pct">
            <b>${fmtPct(s.mastery)}</b>
            <span class="pill ${st.cls}">${st.label}</span>
          </div>
        </div>
        ${stackBar(s.known.length, s.review.length, s.total, true)}
        <div class="cat-counts">
          <span class="known">✓ จำได้ <b>${s.known.length}</b></span>
          <span class="review">↻ ทบทวน <b>${s.review.length}</b></span>
          <span class="unseen">○ ยังไม่เรียน <b>${s.unseen.toLocaleString()}</b></span>
        </div>
        <details class="cat-words review" ${s.review.length ? 'open' : ''}>
          <summary><span>↻ คำที่ต้องทบทวน</span><span class="tab-count">${s.review.length}</span></summary>
          <div class="chip-wrap">${chipList(s.review, 'review')}</div>
        </details>
        <details class="cat-words known">
          <summary><span>✓ คำที่จำได้แล้ว</span><span class="tab-count">${s.known.length}</span></summary>
          <div class="chip-wrap">${chipList(s.known, 'known')}</div>
        </details>
        <button type="button" class="cat-practice" data-practice-cat="${s.id}">
          ฝึกหมวด${s.th} <span aria-hidden="true">→</span>
        </button>
      </article>`;
        }).join('');
    }

    /* ---------- Analysis ---------- */
    /**
     * @param {{ tone: string, emoji: string, kicker: string, title: string, sub?: string, text: string, cat?: string, action?: string, actionLabel?: string }} opts
     */
    function insightCard({ tone, emoji, kicker, title, sub, text, cat, action, actionLabel }) {
        const btn = cat
            ? `<button type="button" class="insight-btn" data-practice-cat="${cat}">${actionLabel || 'ฝึกหมวดนี้'} →</button>`
            : action ? `<button type="button" class="insight-btn" data-dash-action="${action}">${actionLabel} →</button>` : '';
        return `<article class="glass-panel insight-card liquid-card tone-${tone}">
      <span class="insight-emoji">${emoji}</span>
      <span class="insight-kicker">${kicker}</span>
      <h4>${title}${sub ? ` <small>${sub}</small>` : ''}</h4>
      <p>${text}</p>
      ${btn}
    </article>`;
    }

    function renderAnalysis(stats) {
        const studiedCats = stats.filter((s) => s.studied > 0);
        const insightGrid = $('insight-grid');
        const totalReview = countStatuses().review;

        if (!studiedCats.length) {
            insightGrid.innerHTML = insightCard({
                tone: 'info', emoji: ICON_SVG.search, kicker: 'ยังไม่มีข้อมูลพอสำหรับวิเคราะห์',
                title: 'เริ่มเล่นรอบแรกกันเลย!',
                text: 'เมื่อคุณตอบการ์ดไปสักพัก ระบบจะวิเคราะห์ว่าหมวดไหนแข็งแรง และหมวดไหนที่คุณยังจำได้ไม่ดี',
                action: 'start', actionLabel: 'เริ่มเล่น'
            });
        } else {
            const cards = [];
            const weakest = studiedCats.filter((s) => s.review.length > 0)
                .sort((a, b) => a.accuracy - b.accuracy || b.review.length - a.review.length)[0];
            const strongest = studiedCats.slice()
                .sort((a, b) => b.accuracy - a.accuracy || b.known.length - a.known.length)[0];
            const leastExplored = stats.slice().sort((a, b) => a.coverage - b.coverage)[0];

            if (weakest) {
                cards.push(insightCard({
                    tone: 'bad', emoji: ICON_SVG.alert, kicker: 'หมวดที่ต้องเสริมมากที่สุด',
                    title: weakest.th, sub: weakest.en,
                    text: `ต้องทบทวน <b>${weakest.review.length}</b> คำ · ความแม่นยำ <b>${fmtPct(weakest.accuracy)}</b>`,
                    cat: weakest.id, actionLabel: 'เสริมหมวดนี้'
                }));
            }
            if (strongest && strongest !== weakest) {
                cards.push(insightCard({
                    tone: 'good', emoji: ICON_SVG.trophy, kicker: 'หมวดที่แข็งแรงที่สุด',
                    title: strongest.th, sub: strongest.en,
                    text: `จำได้ <b>${strongest.known.length}</b> คำ · ความแม่นยำ <b>${fmtPct(strongest.accuracy)}</b>`
                }));
            }
            if (leastExplored) {
                cards.push(insightCard({
                    tone: 'mid', emoji: ICON_SVG.compass, kicker: 'หมวดที่ยังเรียนน้อยที่สุด',
                    title: leastExplored.th, sub: leastExplored.en,
                    text: `เรียนไปแล้ว <b>${fmtPct(leastExplored.coverage)}</b> (${leastExplored.studied}/${leastExplored.total.toLocaleString()} คำ)`,
                    cat: leastExplored.id, actionLabel: 'สำรวจหมวดนี้'
                }));
            }
            if (totalReview > 0) {
                cards.push(insightCard({
                    tone: 'info', emoji: ICON_SVG.refresh, kicker: 'คำค้างทบทวนทั้งหมด',
                    title: `${totalReview.toLocaleString()} คำ`,
                    text: 'ทบทวนสม่ำเสมอช่วยย้ายคำเข้าสู่ความจำระยะยาว',
                    action: 'review-all', actionLabel: 'ทบทวนเลย'
                }));
            }
            insightGrid.innerHTML = cards.join('');
        }

        // Weakness ranking
        const ranked = stats.slice().sort((a, b) => {
            if (!a.studied && !b.studied) return b.total - a.total;
            if (!a.studied) return 1;
            if (!b.studied) return -1;
            return a.accuracy - b.accuracy || b.review.length - a.review.length;
        });
        $('weak-list').innerHTML = ranked.map((s, i) => {
            const st = strengthOf(s);
            const acc = s.studied ? s.accuracy : 0;
            return `<div class="weak-row" style="${catStyle(s)};--d:${i * 70}ms">
        <span class="weak-rank">${i + 1}</span>
        <span class="cat-icon sm">${s.icon}</span>
        <div class="weak-main">
          <div class="weak-top"><b>${s.th} <small class="muted">${s.en}</small></b><span class="pill ${st.cls}">${st.label}</span></div>
          <div class="meter ${st.cls}"><span style="width:${Math.round(acc * 100)}%"></span></div>
          <small class="muted">${s.studied
          ? `แม่นยำ ${fmtPct(acc)} · ทบทวน ${s.review.length} คำ · เรียนแล้ว ${fmtPct(s.coverage)} ของหมวด`
          : `ยังไม่ได้เรียนหมวดนี้ (${s.total.toLocaleString()} คำ)`}</small>
        </div>
        <button type="button" class="mini-btn" data-practice-cat="${s.id}">ฝึก</button>
      </div>`;
        }).join('');

        // A–Z heatmap
        const letters = AZ.filter((L) => letterIndices[L]);
        $('az-heatmap').innerHTML = letters.map((L, i) => {
            let known = 0;
            let review = 0;
            letterIndices[L].forEach((wi) => {
                const s = wordStatus[keyOf(wordsData[wi])];
                if (s === 'known') known++;
                else if (s === 'review') review++;
            });
            const total = letterIndices[L].length;
            const studied = known + review;
            const st = strengthOf({ studied, accuracy: studied ? known / studied : 0 });
            const coverage = total ? studied / total : 0;
            return `<button type="button" class="az-cell s-${st.cls}" style="--fill:${Math.max(coverage * 100, studied ? 6 : 0)}%;--d:${i * 18}ms"
        data-letter="${L}" data-total="${total}" data-known="${known}" data-review="${review}">
        <span class="az-letter">${L}</span>
        <span class="az-pct">${studied ? fmtPct(known / studied) : '–'}</span>
        <span class="az-fill" aria-hidden="true"></span>
      </button>`;
        }).join('');
        $('az-note').textContent = 'แตะตัวอักษรเพื่อดูรายละเอียด · แถบด้านล่าง = สัดส่วนคำที่เรียนแล้ว';
    }

    $('az-heatmap').addEventListener('click', (e) => {
        if (!(e.target instanceof Element)) return;
        const cell = e.target.closest('.az-cell');
        if (!(cell instanceof HTMLElement)) return;
        document.querySelectorAll('.az-cell.selected').forEach((c) => c.classList.remove('selected'));
        cell.classList.add('selected');
        const { letter, total, known, review } = cell.dataset;
        const knownN = Number(known || 0);
        const reviewN = Number(review || 0);
        const totalN = Number(total || 0);
        const studied = knownN + reviewN;
        $('az-note').innerHTML = `<b>ตัว ${letter}</b> · ทั้งหมด ${totalN.toLocaleString()} คำ · จำได้ <b class="txt-known">${knownN}</b> · ทบทวน <b class="txt-review">${reviewN}</b>` +
            (studied ? ` · แม่นยำ <b>${fmtPct(knownN / studied)}</b>` : ' · ยังไม่ได้เรียน');

        const actContainer = $('az-action-container');
        if (actContainer) {
            const n = Math.min(selectedSize, totalN);
            actContainer.innerHTML = `<button type="button" class="btn btn-primary glass-btn btn-sm" id="btn-practice-letter" data-letter="${letter}">
        เริ่มฝึกคำขึ้นต้นด้วยตัว ${letter} (${n} คำ)
      </button>`;
            actContainer.style.display = 'block';
        }
    });

    const azActContainer = $('az-action-container');
    if (azActContainer) {
        azActContainer.addEventListener('click', (e) => {
            if (!(e.target instanceof Element)) return;
            const btn = e.target.closest('#btn-practice-letter');
            if (btn instanceof HTMLElement && btn.dataset.letter) {
                practiceLetter(btn.dataset.letter);
            }
        });
    }

    async function practiceLetter(letter) {
        const idx = letterIndices[letter];
        if (!idx || !idx.length) {
            showToast('ไม่มีคำที่ขึ้นต้นด้วยตัว ' + letter);
            return;
        }
        const byStatus = (st) => idx.filter((i) => (wordStatus[keyOf(wordsData[i])] || null) === st);
        let picked = pickRandom(byStatus('review'), selectedSize);
        if (picked.length < selectedSize) picked = picked.concat(pickRandom(byStatus(null), selectedSize - picked.length));
        if (picked.length < selectedSize) picked = picked.concat(pickRandom(byStatus('known'), selectedSize - picked.length));
        if (!picked.length) return;
        if (!(await confirmReplaceActive(`เริ่มฝึกคำขึ้นต้นตัว ${letter}?`, 'เริ่มฝึก'))) return;
        startSession(shuffle(picked), 'category', `ตัวอักษร ${letter}`);
    }

    /* ---------- Practice helpers ---------- */
    async function confirmReplaceActive(title, confirmText) {
        if (!loadActiveSession()) return true;
        return confirmDialog({
            title,
            message: 'คุณมีรอบที่ยังเล่นไม่จบอยู่ ถ้าเริ่มรอบใหม่ รอบเดิมจะถูกยกเลิก',
            confirmText
        });
    }

    async function practiceCategory(catId) {
        const idx = categoryIndices[catId];
        if (!idx) return;
        const byStatus = (st) => idx.filter((i) => (wordStatus[keyOf(wordsData[i])] || null) === st);
        // Priority: words to review -> unseen words -> known words
        let picked = pickRandom(byStatus('review'), selectedSize);
        if (picked.length < selectedSize) picked = picked.concat(pickRandom(byStatus(null), selectedSize - picked.length));
        if (picked.length < selectedSize) picked = picked.concat(pickRandom(byStatus('known'), selectedSize - picked.length));
        if (!picked.length) { showToast('ไม่มีคำในหมวดนี้'); return; }
        const label = CATEGORY_META[catId].th;
        if (!(await confirmReplaceActive(`เริ่มฝึกหมวด${label}?`, 'เริ่มฝึก'))) return;
        startSession(shuffle(picked), 'category', label);
    }

    async function practiceReviewWords(catFilter = 'all') {
        const pool = Object.keys(wordStatus)
            .filter((k) => wordStatus[k] === 'review')
            .map((k) => keyToIndex.get(k))
            .filter((i) => i !== undefined && (catFilter === 'all' || catOf(wordsData[i]) === catFilter));
        if (!pool.length) return;
        if (!(await confirmReplaceActive('เริ่มรอบทบทวน?', 'เริ่มรอบทบทวน'))) return;
        startSession(pickRandom(pool, selectedSize), 'review');
    }

    // Delegated actions inside the dashboard
    screens.history.addEventListener('click', (e) => {
        if (!(e.target instanceof Element)) return;
        const catBtn = e.target.closest('[data-practice-cat]');
        if (catBtn instanceof HTMLElement) { practiceCategory(catBtn.dataset.practiceCat); return; }
        const actBtn = e.target.closest('[data-dash-action]');
        if (actBtn instanceof HTMLElement) {
            const act = actBtn.dataset.dashAction;
            if (act === 'start') startRandomSession();
            else if (act === 'review-all') practiceReviewWords('all');
        }
    });

    $('dash-goto-categories').addEventListener('click', () => setDashTab('dash-categories'));

    function formatDate(iso) {
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return '';
        return d.toLocaleString('th-TH', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    }

    function renderSessionList() {
        if (!sessions.length) {
            sessionListEl.innerHTML = `<div class="empty-state big">
        <span class="empty-icon">${ICON_SVG.book}</span>
        <p>ยังไม่มีประวัติการเรียน</p>
        <small>เล่นให้จบ 1 รอบ แล้วผลจะถูกบันทึกไว้ที่นี่</small>
      </div>`;
            return;
        }
        sessionListEl.innerHTML = sessions.map((s, idx) => {
            const knownN = s.known.length;
            const reviewN = s.review.length;
            const percent = s.size ? Math.round((knownN / s.size) * 100) : 0;
            const reviewPct = s.size ? (reviewN / s.size) * 100 : 0;
            const chips = (keys, status) => keys.length
                ? keys.map((k) => {
                    const i = keyToIndex.get(k);
                    if (i === undefined) return '';
                    const w = wordsData[i];
                    return `<span class="word-chip ${status}" title="${escapeHtml(w.translation)}">${escapeHtml(w.word)}<small>${escapeHtml(w.translation)}</small></span>`;
                }).join('')
                : '<span class="muted">—</span>';
            return `<details class="session-card" ${idx === 0 ? 'open' : ''}>
        <summary>
          <div class="session-top">
            <div class="session-meta">
              <span class="session-date">${escapeHtml(formatDate(s.date))}</span>
              <span class="session-tags">
                <span class="tag ${s.mode === 'review' ? 'review' : s.mode === 'category' ? 'category' : ''}">${escapeHtml(modeLabel(s))}</span>
                <span class="tag">${s.size} คำ</span>
              </span>
            </div>
            <div class="session-score">
              <span class="score-known">${knownN}</span>
              <span class="score-sep">/</span>
              <span class="score-review">${reviewN}</span>
              <span class="session-percent">${percent}%</span>
              <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          <div class="session-bar">
            <span class="bar-known" style="width:${percent}%"></span>
            <span class="bar-review" style="width:${reviewPct}%"></span>
          </div>
        </summary>
        <div class="session-body">
          <div class="session-group">
            <h4 class="known">✓ จำได้แล้ว (${knownN})</h4>
            <div class="chip-wrap">${chips(s.known, 'known')}</div>
          </div>
          <div class="session-group">
            <h4 class="review">↻ ต้องทบทวน (${reviewN})</h4>
            <div class="chip-wrap">${chips(s.review, 'review')}</div>
          </div>
          ${s.skipped ? `<p class="muted small">ข้าม ${s.skipped} คำ</p>` : ''}
        </div>
      </details>`;
        }).join('');
    }

    const inCat = (k) => historyCatFilter === 'all' || catOf(wordsData[keyToIndex.get(k)]) === historyCatFilter;

    function renderCatFilter() {
        const baseKeys = historyFilter === 'starred'
            ? Array.from(bookmarkedWords)
            : Object.keys(wordStatus).filter((k) => wordStatus[k] === historyFilter);
        const countFor = (id) => baseKeys.filter((k) =>
            keyToIndex.has(k) && (id === 'all' || catOf(wordsData[keyToIndex.get(k)]) === id)).length;
        const items = [{ id: 'all', th: 'ทุกหมวด', c1: '#3b82f6', c2: '#8b5cf6' }]
            .concat(CATEGORY_IDS.map((id) => ({ id, ...CATEGORY_META[id] })));
        catFilterEl.innerHTML = items.map((it) => `<button type="button" class="chip cat-chip ${historyCatFilter === it.id ? 'active' : ''}"
      data-cat="${it.id}" style="${catStyle(it)}">${it.th} <span>${countFor(it.id)}</span></button>`).join('');
    }

    catFilterEl.addEventListener('click', (e) => {
        if (!(e.target instanceof Element)) return;
        const chip = e.target.closest('.cat-chip');
        if (!(chip instanceof HTMLElement)) return;
        historyCatFilter = chip.dataset.cat;
        renderHistoryWords();
    });

    function renderCefrBreakdown() {
        const grid = $('dash-cefr-grid');
        if (!grid) return;
        const meta = [
            { lvl: 'A1', label: 'พื้นฐาน (A1)' },
            { lvl: 'A2', label: 'ระดับต้น (A2)' },
            { lvl: 'B1', label: 'ระดับกลาง (B1)' },
            { lvl: 'B2', label: 'กลาง-สูง (B2)' }
        ];
        grid.innerHTML = meta.map(m => {
            let total = 0;
            let known = 0;
            for (let i = 0; i < totalWords; i++) {
                const w = wordsData[i];
                if (w.cefr === m.lvl) {
                    total++;
                    if (wordStatus[keyOf(w)] === 'known') known++;
                }
            }
            const pct = total > 0 ? Math.round((known / total) * 100) : 0;
            return `<button type="button" class="cefr-prog-tile" data-dash-cefr="${m.lvl}">
        <div class="cefr-prog-top">
          <span class="cefr-prog-name"><span class="cefr-badge ${OxCefr.getClass(m.lvl)}">${m.lvl}</span> ${m.label}</span>
          <span class="cefr-prog-count tabular-nums">${known}/${total} (${pct}%)</span>
        </div>
        <div class="cefr-prog-track"><div class="cefr-prog-fill ${OxCefr.getClass(m.lvl)}" style="width:${pct}%"></div></div>
      </button>`;
        }).join('');
        grid.querySelectorAll('.cefr-prog-tile').forEach(btn => {
            btn.addEventListener('click', () => {
                const lvl = /** @type {HTMLElement} */ (btn).dataset.dashCefr || 'all';
                selectedCefr = lvl;
                syncWelcomeCefrUI();
                startRandomSession(lvl);
            });
        });
    }

    const inCefr = (k) => historyCefrFilter === 'all' || wordsData[keyToIndex.get(k)].cefr === historyCefrFilter;

    function renderHistoryWords() {
        const c = countStatuses();
        filterReviewCount.textContent = String(c.review);
        filterKnownCount.textContent = String(c.known);
        const fStarCount = $('filter-starred-count');
        if (fStarCount) fStarCount.textContent = String(bookmarkedWords.size);

        filterChips.forEach((chip) => chip.classList.toggle('active', chip.dataset.filter === historyFilter));

        const cefrFilterEl = $('cefr-filter');
        if (cefrFilterEl && !cefrFilterEl.dataset.built) {
            cefrFilterEl.dataset.built = '1';
            const cefrOpts = [
                { id: 'all', label: 'ทุกระดับ CEFR' },
                { id: 'A1', label: 'A1' },
                { id: 'A2', label: 'A2' },
                { id: 'B1', label: 'B1' },
                { id: 'B2', label: 'B2' }
            ];
            cefrFilterEl.innerHTML = cefrOpts.map(o =>
                `<button type="button" class="chip ${historyCefrFilter === o.id ? 'active' : ''}" data-cefr="${o.id}">${o.label}</button>`
            ).join('');
            cefrFilterEl.addEventListener('click', (e) => {
                const chip = e.target instanceof Element ? e.target.closest('[data-cefr]') : null;
                if (!chip) return;
                historyCefrFilter = /** @type {HTMLElement} */ (chip).dataset.cefr || 'all';
                cefrFilterEl.querySelectorAll('.chip').forEach(b => b.classList.toggle('active', b === chip));
                renderHistoryWords();
            });
        }

        renderCatFilter();

        const q = wordSearch.value.trim().toLowerCase();
        const sourceKeys = historyFilter === 'starred'
            ? Array.from(bookmarkedWords)
            : Object.keys(wordStatus).filter((k) => wordStatus[k] === historyFilter);

        const scoredKeys = [];
        for (const k of sourceKeys) {
            if (!keyToIndex.has(k) || !inCat(k) || !inCefr(k)) continue;
            const w = wordsData[keyToIndex.get(k)];
            const score = q ? OxFuzzy.scoreWord(w, q) : 1;
            if (score > 0) scoredKeys.push({ key: k, score });
        }
        if (q) {
            scoredKeys.sort((a, b) => (b.score - a.score) || a.key.localeCompare(b.key));
        } else {
            scoredKeys.sort((a, b) => a.key.localeCompare(b.key));
        }
        const keys = scoredKeys.map(x => x.key);

        historyWordList.innerHTML = keys.length
            ? keys.map((k) => wordListItem(k, wordStatus[k] || 'review', q)).join('')
            : `<li class="empty-state">${q ? 'ไม่พบคำที่ค้นหา' : historyFilter === 'starred' ? 'ยังไม่มีคำที่ปักหมุด ★ (กดรูปดาวบนการ์ดหรือรายการคำเพื่อปักหมุด)' : historyFilter === 'known' ? 'ยังไม่มีคำที่จำได้' : 'ไม่มีคำที่ต้องทบทวน'}</li>`;

        if (historyFilter === 'starred') {
            const starCount = keys.length;
            const n = Math.min(selectedSize, starCount);
            btnPracticeReview.hidden = starCount === 0;
            practiceReviewLabel.textContent = `ฝึกคำที่ปักหมุด ★ (${n} คำ)`;
        } else {
            const reviewCount = Object.keys(wordStatus).filter((k) => wordStatus[k] === 'review' && inCat(k)).length;
            const n = Math.min(selectedSize, reviewCount);
            const catName = historyCatFilter === 'all' ? '' : `หมวด${CATEGORY_META[historyCatFilter].th} `;
            btnPracticeReview.hidden = historyFilter !== 'review' || reviewCount === 0;
            practiceReviewLabel.textContent = `ฝึกคำที่ต้องทบทวน ${catName}(สุ่ม ${n} คำ)`;
        }
    }

    historyTabs.forEach((t) => t.addEventListener('click', () => setDashTab(t.dataset.panel)));

    const modeBtns = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll('.dash-mode-switcher .mode-btn')));
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state of buttons
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mode = btn.dataset.mode;
            let firstVisibleTab = null;

            // Toggle visibility of tabs based on group
            historyTabs.forEach(t => {
                if (t.dataset.group === mode) {
                    t.style.display = '';
                    if (!firstVisibleTab) firstVisibleTab = t.dataset.panel;
                } else {
                    t.style.display = 'none';
                }
            });

            // Automatically switch to the first tab in the new mode
            if (firstVisibleTab) {
                setDashTab(firstVisibleTab);
            }
            if (mode === 'learn' && typeof onRenderLearnDashboardHook === 'function') {
                onRenderLearnDashboardHook();
            }
        });
    });

    filterChips.forEach((chip) => chip.addEventListener('click', () => {
        historyFilter = chip.dataset.filter;
        renderHistoryWords();
    }));

    wordSearch.addEventListener('input', renderHistoryWords);

    btnPracticeReview.addEventListener('click', async () => {
        if (historyFilter === 'starred') {
            const pool = Array.from(bookmarkedWords)
                .map((k) => keyToIndex.get(k))
                .filter((i) => i !== undefined && (historyCatFilter === 'all' || catOf(wordsData[i]) === historyCatFilter));
            if (!pool.length) return;
            if (!(await confirmReplaceActive('เริ่มฝึกคำที่ปักหมุด?', 'เริ่มฝึก'))) return;
            startSession(pickRandom(pool, selectedSize), 'category', 'คำที่ปักหมุด ★');
            return;
        }
        practiceReviewWords(historyCatFilter);
    });

    btnHistoryBack.addEventListener('click', () => {
        showScreen(historyReturnTo === 'summary' && lastSummary ? 'summary' : historyReturnTo === 'welcome' ? 'welcome' : 'learn');
    });

    /** @param {{ keepGoalTarget?: boolean }} [opts] */
    function resetLocalStudyData(opts = {}) {
        const keepGoalTarget = !!opts.keepGoalTarget;
        sessions = [];
        wordStatus = {};
        wordMastery = {};
        dailyGoal = {
            target: keepGoalTarget ? (dailyGoal.target || 20) : 20,
            targetUpdatedAt: keepGoalTarget ? (dailyGoal.targetUpdatedAt || 0) : 0,
            date: getTodayDateString(),
            count: 0
        };
        lastSummary = null;
        storage.remove(STORAGE.sessions);
        storage.remove(STORAGE.status);
        storage.remove(STORAGE.active);
        bookmarkedWords = new Set();
        activityLog = {};
        usageTimeLog = {};
        hourlyUsageLog = {};
        storage.remove(STORAGE.mastery);
        storage.remove(STORAGE.dailyGoal);
        storage.remove(STORAGE.bookmarks);
        storage.remove(STORAGE.ActivityLog);
        storage.remove(STORAGE.usageTime);
        storage.remove(STORAGE.hourlyUsage);
        try { localStorage.removeItem('oxford3000_quiz_history'); } catch (e) { }
        if (typeof onLearnDataChangedHook === 'function') onLearnDataChangedHook('reset');
        if (clearGoogleOwnership) clearGoogleOwnership();
        renderWelcome();
        renderHistory();
        if (typeof renderQuizHistory === 'function') renderQuizHistory();
        updateDailyGoalUI();
    }

    btnClearHistory.addEventListener('click', async () => {
        const signedIn = !!(isGoogleSignedIn && isGoogleSignedIn());
        const ok = await confirmDialog({
            title: 'ล้างข้อมูลทั้งหมด?',
            message: signedIn
                ? 'ประวัติทุกรอบ สถานะคำศัพท์ทั้งหมด (รวมทั้งประวัติ Quiz) และข้อมูลซิงค์บนบัญชี Google นี้จะถูกลบถาวร'
                : 'ประวัติทุกรอบและสถานะคำศัพท์ทั้งหมด (รวมทั้งประวัติ Quiz) จะถูกลบถาวร',
            confirmText: 'ลบทั้งหมด',
            danger: true
        });
        if (!ok) return;
        resetLocalStudyData({ keepGoalTarget: false });
        if (signedIn && clearGoogleCloudData) {
            const cloudCleared = await clearGoogleCloudData();
            showToast(cloudCleared
                ? 'ล้างข้อมูลในเครื่องและบนบัญชี Google เรียบร้อยแล้ว'
                : 'ล้างข้อมูลในเครื่องแล้ว (ไม่สามารถลบข้อมูลบน Cloud ได้ชั่วคราว)');
        } else {
            showToast('ล้างข้อมูลเรียบร้อยแล้ว');
        }
    });

    /* =========================================================
     * Modal & toast
     * ========================================================= */
    let modalResolver = null;

    function confirmDialog({ title, message, confirmText = 'ตกลง', danger = false }) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modalConfirm.textContent = confirmText;
        modalConfirm.classList.toggle('btn-danger-solid', danger);
        modalConfirm.classList.toggle('btn-primary', !danger);
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        setTimeout(() => modalConfirm.focus(), 50);
        return new Promise((resolve) => { modalResolver = resolve; });
    }

    function closeModal(result) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        if (modalResolver) {
            const r = modalResolver;
            modalResolver = null;
            r(result);
        }
    }

    modalConfirm.addEventListener('click', () => closeModal(true));
    modalCancel.addEventListener('click', () => closeModal(false));
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(false); });

    // Custom Select Logic for Quiz Category
    const quizCatWrapper = document.getElementById('quiz-category-wrapper');
    const quizCatTrigger = document.getElementById('quiz-category-trigger');
    const quizCatOptions = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll('.custom-option')));
    const quizCatDisplay = document.getElementById('quiz-category-display');
    const quizCatInput = /** @type {HTMLInputElement|null} */ (document.getElementById('quiz-category-select'));

    if (quizCatWrapper) {
        quizCatTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            quizCatWrapper.classList.toggle('open');
        });

        quizCatOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                quizCatOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');

                quizCatDisplay.innerHTML = option.innerHTML;
                quizCatInput.value = option.dataset.value;
                quizCatWrapper.classList.remove('open');
            });
        });

        document.addEventListener('click', () => {
            quizCatWrapper.classList.remove('open');
        });
    }

    let toastTimer = null;
    const TOAST_ICONS = { success: '✅', warn: '⚠️', error: '❌', info: '💡' };
    function inferToastType(msg, explicit) {
        if (explicit && explicit !== 'auto' && TOAST_ICONS[explicit]) return explicit;
        const t = String(msg || '');
        if (/ไม่ถูกต้อง|ไม่สำเร็จ|ใช้ไม่ได้|ขัดข้อง|ไม่สามารถนำเข้า/.test(t)) return 'error';
        if (/สำเร็จ|เรียบร้อย|พิชิต|รับรางวัล|อนุญาต/.test(t)) return 'success';
        if (/ตรวจพบ|ขาดอีก|ปิดโหมดฟัง|รอยืนยัน|กรุณา|หมดเวลา|ยังเหลือ/.test(t)) return 'warn';
        return 'info';
    }
    function dismissToastItem(item) {
        if (!item || item.classList.contains('is-leaving')) return;
        item.classList.add('is-leaving');
        setTimeout(() => item.remove(), 220);
    }
    function showToast(msg, type = 'auto') {
        const kind = inferToastType(msg, type);
        // Mirror onto #toast for screen readers & legacy test selectors
        if (toastEl) {
            toastEl.textContent = msg;
            toastEl.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
        }
        const stack = $('toast-stack');
        if (!stack) return;
        const item = document.createElement('div');
        item.className = `toast-item is-${kind}`;
        item.setAttribute('role', 'status');
        item.innerHTML = `<span class="toast-item-icon" aria-hidden="true">${TOAST_ICONS[kind]}</span><span class="toast-item-msg">${escapeHtml(msg)}</span>`;
        let touchStartX = 0;
        item.addEventListener('touchstart', (e) => { if (e.touches[0]) touchStartX = e.touches[0].clientX; }, { passive: true });
        item.addEventListener('touchend', (e) => {
            const dx = e.changedTouches[0] ? Math.abs(e.changedTouches[0].clientX - touchStartX) : 0;
            if (dx > 45) dismissToastItem(item);
        }, { passive: true });
        item.addEventListener('click', () => dismissToastItem(item));

        stack.appendChild(item);
        const active = Array.from(stack.querySelectorAll('.toast-item:not(.is-leaving)'));
        while (active.length > 3) {
            dismissToastItem(active.shift());
        }
        setTimeout(() => dismissToastItem(item), 2700);
        if (kind === 'error') SoundFX.error();
    }

    function renderQuizHistory() {
        const listEl = document.getElementById('quiz-history-list');
        const avgEl = document.getElementById('quiz-avg-score');
        if (!listEl || !avgEl) return;

        let quizHistory = [];
        try {
            const stored = localStorage.getItem('oxford3000_quiz_history');
            if (stored) quizHistory = JSON.parse(stored);
        } catch (e) { }

        if (quizHistory.length === 0) {
            listEl.innerHTML = `<div class="empty-state big" style="grid-column: 1 / -1;">
        <span class="empty-icon">${ICON_SVG.trophy}</span>
        <p>คุณยังไม่เคยทำแบบทดสอบ</p>
        <span class="muted small">ลองกด "โหมดตอบคำถาม" จากหน้าแรกดูสิ!</span>
      </div>`;
            avgEl.textContent = '0%';
            return;
        }

        let totalPercent = 0;
        let totalTime = 0;
        let bestScore = 0;
        let totalQuestions = 0;
        let totalCorrect = 0;
        let totalWrong = 0;

        listEl.innerHTML = '';
        quizHistory.forEach(item => {
            totalPercent += item.percent;
            totalTime += (item.timeSpent || 0);
            if (item.percent > bestScore) bestScore = item.percent;

            totalQuestions += item.total;
            totalCorrect += item.score;
            totalWrong += (item.total - item.score);

            const dateStr = new Date(item.date).toLocaleString('th-TH', {
                day: 'numeric', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit'
            });

            const isPerfect = item.percent === 100;
            const accuracyColor = isPerfect ? '#10b981' : (item.percent >= 75 ? '#3b82f6' : (item.percent >= 50 ? '#f59e0b' : '#ef4444'));
            const catMeta = CATEGORY_META[item.category];
            const categoryLabel = catMeta ? catMeta.th : 'ทั้งหมด';

            let incorrectHtml = '';
            if (item.incorrectWords && item.incorrectWords.length > 0) {
                const words = item.incorrectWords.slice(0, 10).map(w => `<span style="display:inline-flex; align-items:center; padding:4px 10px; border-radius:12px; background:rgba(239,68,68,0.08); color:#ef4444; font-size:0.8rem; margin-right:6px; margin-top:8px; border:1px solid rgba(239,68,68,0.2); font-weight:500;">${escapeHtml(w.word)}</span>`).join('');
                const more = item.incorrectWords.length > 10 ? `<span style="font-size:0.8rem; color:var(--text-muted); margin-left:6px; font-weight:500;">+${item.incorrectWords.length - 10} คำ</span>` : '';
                incorrectHtml = `<div style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed rgba(0,0,0,0.1);">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 2px; font-weight: 600;">คำที่ตอบผิด:</div>
          <div style="display: flex; flex-wrap: wrap;">${words}${more}</div>
        </div>`;
            } else if (item.percent === 100) {
                incorrectHtml = `<div style="margin-top: 16px; padding-top: 12px; border-top: 1px dashed rgba(128,128,128,0.2); font-size: 0.85rem; color: #10b981; font-weight: 700; display: flex; align-items: center; gap: 6px;">
          ${ICON_SVG.sparkles} ทำคะแนนได้เต็มสมบูรณ์แบบ
        </div>`;
            }

            let timeSpentHtml = '';
            if (item.timeSpent) {
                const mins = Math.floor(item.timeSpent / 60);
                const secs = item.timeSpent % 60;
                const timeStr = mins > 0 ? `${mins} นาที ${secs} วินาที` : `${secs} วินาที`;
                timeSpentHtml = `
          <div class="qhc-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ใช้เวลา ${timeStr}
          </div>
        `;
            }

            const div = document.createElement('div');
            div.className = 'glass-panel liquid-card quiz-history-card';

            div.innerHTML = `
        <div class="qhc-main">
          <div class="qhc-ring" style="background: ${accuracyColor}15; color: ${accuracyColor}; box-shadow: inset 0 0 0 2px ${accuracyColor}30;">
            ${item.percent}%
          </div>
          <div class="qhc-info">
            <div class="qhc-title">
              ทดสอบ ${item.total} ข้อ
              <span class="qhc-tag">หมวด${categoryLabel}</span>
            </div>
            <div class="qhc-meta">
              <div class="qhc-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                ${dateStr}
              </div>
              ${timeSpentHtml}
            </div>
          </div>
          <div class="qhc-score" style="color: ${accuracyColor};">
            ${item.score}<span>/${item.total}</span>
          </div>
        </div>
        ${incorrectHtml}
      `;
            listEl.appendChild(div);
        });

        const avgScore = quizHistory.length > 0 ? Math.round(totalPercent / quizHistory.length) : 0;
        avgEl.textContent = avgScore + '%';

        // Update Quiz Hero Section
        const heroPercent = document.getElementById('quiz-hero-percent');
        const heroRingFg = document.getElementById('quiz-ring-fg');
        const heroTitle = document.getElementById('quiz-hero-title');
        const heroSub = document.getElementById('quiz-hero-sub');
        const heroPill = document.getElementById('quiz-hero-pill');
        const barCorrect = document.getElementById('quiz-bar-correct');
        const barWrong = document.getElementById('quiz-bar-wrong');
        const lgCorrect = document.getElementById('quiz-lg-correct');
        const lgWrong = document.getElementById('quiz-lg-wrong');

        if (heroPercent) {
            heroPercent.textContent = avgScore + '%';

            // Ring animation (52 radius -> 326.72 circumference)
            const c = 2 * Math.PI * 52;
            const offset = c - (avgScore / 100) * c;
            if (heroRingFg) {
                heroRingFg.style.strokeDasharray = String(c);
                heroRingFg.style.strokeDashoffset = String(c);
                setTimeout(() => { heroRingFg.style.strokeDashoffset = String(offset); }, 100);
            }

            let rank = 'ผู้เริ่มต้น';
            let title = 'เริ่มต้นการทดสอบ';
            if (quizHistory.length >= 20) {
                rank = 'มาสเตอร์'; title = 'ปรมาจารย์ด้านคำศัพท์!';
            } else if (quizHistory.length >= 10) {
                rank = 'นักสู้'; title = 'ทักษะของคุณกำลังพัฒนาอย่างรวดเร็ว!';
            } else if (quizHistory.length >= 5) {
                rank = 'หน้าใหม่ไฟแรง'; title = 'เริ่มต้นได้ดีมาก ลุยต่อไป!';
            }
            if (heroTitle) heroTitle.textContent = title;
            if (heroPill) heroPill.textContent = rank;
            if (heroSub) heroSub.textContent = `คุณทำแบบทดสอบไปแล้วทั้งหมด ${quizHistory.length} ครั้ง (รวม ${totalQuestions} คำถาม)`;

            if (barCorrect && barWrong && lgCorrect && lgWrong) {
                const correctPct = totalQuestions === 0 ? 0 : (totalCorrect / totalQuestions) * 100;
                const wrongPct = totalQuestions === 0 ? 0 : (totalWrong / totalQuestions) * 100;

                barCorrect.style.width = correctPct + '%';
                barWrong.style.width = wrongPct + '%';
                lgCorrect.textContent = String(totalCorrect);
                lgWrong.textContent = String(totalWrong);
            }
        }

        // Update Quiz Analysis Tab
        const analysisList = document.getElementById('quiz-analysis-list');
        if (analysisList) {
            analysisList.innerHTML = '';

            // Calculate stats by category
            const catStats = {};
            quizHistory.forEach(item => {
                const c = item.category === 'all' ? 'mixed' : item.category;
                if (!catStats[c]) catStats[c] = { total: 0, score: 0, played: 0 };
                catStats[c].total += item.total;
                catStats[c].score += item.score;
                catStats[c].played += 1;
            });

            if (Object.keys(catStats).length === 0) {
                analysisList.innerHTML = `<div class="empty-state big" style="grid-column: 1 / -1;">
          <span class="empty-icon">${ICON_SVG.target}</span>
          <p>ยังไม่มีข้อมูลวิเคราะห์</p>
          <span class="muted small">ทำแบบทดสอบให้มากขึ้น เพื่อดูความก้าวหน้าในแต่ละหมวดหมู่</span>
        </div>`;
            } else {
                // วิเคราะห์จุดอ่อน/จุดแข็ง
                const catArray = Object.keys(catStats).map(c => {
                    const stats = catStats[c];
                    return {
                        id: c,
                        meta: CATEGORY_META[c] || { th: 'รวม (Mixed)', color: '#8b5cf6', icon: '🌟' },
                        accuracy: stats.score / stats.total,
                        ...stats
                    };
                }).filter(c => c.total >= 5); // ต้องตอบอย่างน้อย 5 ข้อถึงจะวิเคราะห์ผล

                let insightsHtml = '';
                if (catArray.length > 0) {
                    catArray.sort((a, b) => a.accuracy - b.accuracy);
                    const weakest = catArray[0];
                    const strongest = catArray[catArray.length - 1];

                    const cards = [];

                    // จุดอ่อน
                    if (weakest.accuracy <= 0.75) {
                        cards.push(`
              <article class="glass-panel insight-card liquid-card tone-bad">
                <span class="insight-emoji">${ICON_SVG.alert}</span>
                <span class="insight-kicker">หมวดที่ต้องเสริมด่วน</span>
                <h4>${weakest.meta.th}</h4>
                <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.5; margin-top: 4px;">ความแม่นยำเพียง <b>${Math.round(weakest.accuracy * 100)}%</b> ลองกลับไปเล่น Flashcard หมวดนี้เพิ่มดูนะ</p>
                <button onclick="startTargetedPractice('${weakest.id}')" style="margin-top: 16px; font-size: 1rem; padding: 12px 24px; border-radius: 12px; border: none; background: linear-gradient(135deg, #ef4444, #dc2626); color: white; cursor: pointer; box-shadow: 0 4px 12px rgba(239,68,68,0.4); font-family: inherit; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 8px; align-self: flex-start;">ติวหมวดนี้ด่วน</button>
              </article>
            `);
                    }

                    // จุดแข็ง
                    if (strongest.accuracy >= 0.8 && strongest.id !== weakest.id) {
                        cards.push(`
              <article class="glass-panel insight-card liquid-card tone-good">
                <span class="insight-emoji">${ICON_SVG.trophy}</span>
                <span class="insight-kicker">หมวดที่แข็งแกร่งที่สุด</span>
                <h4>${strongest.meta.th}</h4>
                <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.5; margin-top: 4px;">ความแม่นยำสูงถึง <b>${Math.round(strongest.accuracy * 100)}%</b> คุณมาถูกทางแล้ว ยอดเยี่ยมมาก</p>
              </article>
            `);
                    }

                    if (cards.length > 0) {
                        insightsHtml = `<div class="insight-grid" style="grid-column: 1 / -1; margin-bottom: 12px;">${cards.join('')}</div>`;
                    }
                }

                let html = insightsHtml;

                Object.keys(catStats).forEach(c => {
                    const stats = catStats[c];
                    const pct = Math.round((stats.score / stats.total) * 100);
                    const meta = CATEGORY_META[c] || { th: 'รวม (Mixed)', color: '#8b5cf6', icon: '🌟' };

                    html += `
            <div class="quiz-analysis-card">
              <div class="qac-head">
                <div class="qac-icon-group">
                  <div class="qac-icon" style="background: ${meta.color}15; color: ${meta.color};">${meta.icon}</div>
                  <div class="qac-text">
                    <div class="qac-title">${meta.th}</div>
                    <div class="qac-subtitle">เล่นไป ${stats.played} ครั้ง (${stats.total} คำถาม)</div>
                  </div>
                </div>
                <div class="qac-percent" style="color: ${meta.color};">${pct}%</div>
              </div>
              <div class="qac-bar-bg">
                <div class="qac-bar-fill" style="width: ${pct}%; background: ${meta.color};"></div>
              </div>
            </div>
          `;
                });
                analysisList.innerHTML = html;

                // Render Radar Chart
                const canvasEl = /** @type {HTMLCanvasElement|null} */ (document.getElementById('quiz-radar-chart'));
                const anyWin = /** @type {any} */ (window);
                if (canvasEl && anyWin.Chart) {
                    const ctx = canvasEl.getContext('2d');
                    if (anyWin.quizRadar) anyWin.quizRadar.destroy();

                    // Create Liquid Glass Gradient for fill
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(168, 85, 247, 0.7)');  // Top bright purple
                    gradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)');  // Bottom transparent purple

                    // Apply CSS 3D Drop Shadow to canvas
                    canvasEl.style.filter = 'drop-shadow(0px 10px 15px rgba(139, 92, 246, 0.4))';

                    // Use predefined categories to always form a polygon
                    const targetCats = ['noun', 'verb', 'adjective', 'adverb', 'mixed'];
                    const labels = targetCats.map(k => {
                        const meta = CATEGORY_META[k] || { th: 'รวม (Mixed)' };
                        return meta.th.split(' ')[0];
                    });
                    const dataPoints = targetCats.map(k => {
                        const found = catArray.find(c => c.id === k);
                        return found ? Math.round(found.accuracy * 100) : 0;
                    });

                    anyWin.quizRadar = new anyWin.Chart(canvasEl, {
                        type: 'radar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'ความแม่นยำ (%)',
                                data: dataPoints,
                                fill: true, // MUST BE TRUE for radar background!
                                backgroundColor: gradient, // Liquid gradient
                                borderColor: '#8b5cf6', // Glowy purple border
                                pointBackgroundColor: '#fff', // White dots
                                pointBorderColor: '#a855f7',
                                pointHoverBackgroundColor: '#a855f7',
                                pointHoverBorderColor: '#fff',
                                pointRadius: 4,
                                pointHoverRadius: 6,
                                borderWidth: 3, // Thicker border
                            }]
                        },
                        options: {
                            maintainAspectRatio: false,
                            scales: {
                                r: {
                                    min: 0,
                                    max: 100,
                                    angleLines: {
                                        color: document.body.classList.contains('dark-theme') ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.1)',
                                        lineWidth: 1
                                    },
                                    grid: {
                                        color: document.body.classList.contains('dark-theme') ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.1)',
                                        lineWidth: 1
                                    },
                                    pointLabels: {
                                        font: { family: 'Prompt', size: 14, weight: '800' },
                                        color: document.body.classList.contains('dark-theme') ? '#cbd5e1' : '#334155'
                                    },
                                    ticks: {
                                        stepSize: 20,
                                        backdropColor: 'transparent',
                                        color: '#64748b',
                                        font: { size: 11, weight: '600' },
                                        z: 1 // Keep ticks on top
                                    }
                                }
                            },
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                                    titleFont: { family: 'Prompt', size: 14 },
                                    bodyFont: { family: 'Prompt', size: 14, weight: 'bold' },
                                    padding: 12,
                                    displayColors: false
                                }
                            }
                        }
                    });
                }
            }
        }

        // Update Quiz Mistakes Tab
        const mistakesList = document.getElementById('quiz-mistakes-list');
        const actionBox = document.getElementById('quiz-mistakes-action-box');
        const totalCountEl = document.getElementById('quiz-mistakes-total-count');
        const btnPractice = document.getElementById('btn-practice-quiz-mistakes');

        if (mistakesList) {
            mistakesList.innerHTML = '';

            const mistakeCounts = {};
            quizHistory.forEach(item => {
                if (item.incorrectWords) {
                    item.incorrectWords.forEach(w => {
                        if (!mistakeCounts[w.word]) mistakeCounts[w.word] = { ...w, count: 0 };
                        mistakeCounts[w.word].count++;
                    });
                }
            });

            const sortedMistakes = Object.values(mistakeCounts).sort((a, b) => b.count - a.count);

            if (sortedMistakes.length === 0) {
                if (actionBox) actionBox.style.display = 'none';
                mistakesList.innerHTML = `<div class="empty-state big" style="grid-column: 1 / -1;">
          <span class="empty-icon">✨</span>
          <p>ยอดเยี่ยม!</p>
          <span class="muted small">คุณยังไม่มีคำศัพท์ที่ตอบผิดเลย 🎉 คำที่คุณตอบผิดบ่อยๆ จะมารวมอยู่ที่นี่</span>
        </div>`;
            } else {
                if (actionBox) {
                    actionBox.style.display = 'block';
                    if (totalCountEl) totalCountEl.textContent = String(sortedMistakes.length);
                    if (btnPractice) {
                        btnPractice.onclick = () => {
                            const mistakeIndices = [];
                            sortedMistakes.forEach(m => {
                                const idx = wordsData.findIndex(item => item.word.toLowerCase() === m.word.toLowerCase());
                                if (idx !== -1 && !mistakeIndices.includes(idx)) mistakeIndices.push(idx);
                            });
                            if (mistakeIndices.length > 0) {
                                quizSession = {
                                    indices: mistakeIndices,
                                    currentIndex: 0,
                                    score: 0,
                                    incorrectWords: [],
                                    category: 'all',
                                    startTime: Date.now()
                                };
                                showScreen('quiz');
                                renderQuizQuestion();
                            } else {
                                showToast('ไม่พบคำศัพท์ในระบบ');
                            }
                        };
                    }
                }

                sortedMistakes.forEach(w => {
                    const matchedWord = wordsData.find(item => item.word.toLowerCase() === w.word.toLowerCase());
                    const pos = (matchedWord && matchedWord.partOfSpeech) || w.category || 'noun';
                    const meta = CATEGORY_META[pos] || CATEGORY_META['noun'];
                    const phonetic = (matchedWord && matchedWord.phonetic) || '';
                    const div = document.createElement('div');
                    div.className = 'word-card';
                    div.innerHTML = `
            <div class="word-card-head">
              <h4 class="word-en">${escapeHtml(w.word)}</h4>
              <div style="display:flex; align-items:center; gap:6px;">
                ${phonetic ? `<span class="phonetic" style="font-size:0.8rem; padding:2px 6px;">${escapeHtml(phonetic)}</span>` : ''}
                <div class="word-tag" style="color: ${meta.c1 || meta.color}; background: ${(meta.c1 || meta.color)}15;">${meta.icon} ${meta.th}</div>
              </div>
            </div>
            <p class="word-th">${escapeHtml(w.translation || w.meaning || '')}</p>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 12px;">
              <span style="font-size: 0.8rem; color: #ef4444; background: rgba(239,68,68,0.1); padding: 4px 10px; border-radius: 8px; font-weight: 600;">
                ตอบผิด ${w.count} ครั้ง
              </span>
              <button class="glass-btn-icon small speak-btn" onclick="speakWordOverride('${escapeHtml(w.word)}', true, this)" title="ฟังเสียง" aria-label="ฟังเสียงอ่าน" style="width:34px; height:34px;"><span class="speak-svg" style="display:inline-flex;">${ICON_SVG.volOn}</span><span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i></span></button>
            </div>
          `;
                    mistakesList.appendChild(div);
                });
            }
        }

        // Update Quiz Overview Tab Stats
        const statTotalPlayed = document.getElementById('quiz-stat-total-played');
        const statAvgScore = document.getElementById('quiz-stat-avg-score');
        const statTotalTime = document.getElementById('quiz-stat-total-time');
        const statBestScore = document.getElementById('quiz-stat-best-score');

        if (statTotalPlayed) statTotalPlayed.textContent = quizHistory.length;
        if (statAvgScore) statAvgScore.textContent = avgScore + '%';
        if (statBestScore) statBestScore.textContent = bestScore + '%';

        if (statTotalTime) {
            const mins = Math.floor(totalTime / 60);
            const secs = totalTime % 60;
            statTotalTime.innerHTML = mins > 0
                ? `${mins} <span style="font-size: 0.7em;">นาที</span> ${secs} <span style="font-size: 0.7em;">วิ</span>`
                : `${secs} <span style="font-size: 0.7em;">วิ</span>`;
        }

        // Render Trend Chart
        const chartEl = document.getElementById('quiz-trend-chart');
        if (chartEl) {
            if (quizHistory.length === 0) {
                chartEl.innerHTML = `<div class="empty-state big" style="grid-column: 1 / -1;">
          <span class="empty-icon">${ICON_SVG.layers}</span>
          <p>ไม่มีข้อมูลกราฟ</p>
          <span class="muted small">เริ่มทำแบบทดสอบครั้งแรก เพื่อสร้างกราฟสถิติของคุณ</span>
        </div>`;
            } else {
                const recent = quizHistory.slice(0, 10).reverse();
                chartEl.innerHTML = '';
                recent.forEach((item, i) => {
                    const d = new Date(item.date);
                    const label = Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });

                    const bar = document.createElement('div');
                    bar.className = 'trend-col';
                    const h = Math.max(5, item.percent);
                    bar.style.setProperty('--h', `${h}%`);
                    bar.style.setProperty('--d', `${i * 70}ms`);
                    bar.title = `${label} • ${item.percent}%`;

                    const color = item.percent >= 75 ? 'linear-gradient(to top, #3b82f6, #60a5fa)' :
                        (item.percent >= 50 ? 'linear-gradient(to top, #f59e0b, #fcd34d)' :
                            'linear-gradient(to top, #ef4444, #fca5a5)');

                    bar.innerHTML = `
            <span class="trend-val">${item.percent}%</span>
            <div class="trend-track">
              <div class="trend-bar" style="background: ${color}; box-shadow: 0 4px 10px ${color.split(',')[1].trim()}40;"></div>
            </div>
            <span class="trend-label">${escapeHtml(label)}</span>
          `;
                    chartEl.appendChild(bar);
                });
            }
        }
    }

    // Call it initially
    renderQuizHistory();

    /* =========================================================
     * Quiz Mode Logic
     * ========================================================= */
    let quizSession = null;
    let quizOptionsData = [];
    let quizAnswered = false;

    // Quiz Modal Elements
    const quizSetupModal = document.getElementById('quiz-setup-modal');
    const quizCountSlider = /** @type {HTMLInputElement|null} */ (document.getElementById('quiz-count-slider'));
    const quizCountDisplay = document.getElementById('quiz-count-display');
    const btnQuizCancel = document.getElementById('btn-quiz-cancel');
    const btnQuizConfirm = document.getElementById('btn-quiz-confirm');

    if (quizCountSlider && quizCountDisplay) {
        let lastQuizSize = parseInt(quizCountSlider.value, 10);
        quizCountSlider.addEventListener('input', () => {
            const val = parseInt(quizCountSlider.value, 10);
            if (val !== lastQuizSize) {
                SoundFX.tick();
                lastQuizSize = val;
            }
            quizCountDisplay.textContent = String(val);
            // Add a little liquid effect on slide
            const minV = Number(quizCountSlider.min || 0);
            const maxV = Number(quizCountSlider.max || 100);
            const ratio = (val - minV) / (maxV - minV);
            quizCountSlider.style.background = `linear-gradient(90deg, #a855f7 ${ratio * 100}%, rgba(0,0,0,0.1) ${ratio * 100}%)`;
        });

        // Init background
        const initMin = Number(quizCountSlider.min || 0);
        const initMax = Number(quizCountSlider.max || 100);
        const initRatio = (Number(quizCountSlider.value) - initMin) / (initMax - initMin);
        quizCountSlider.style.background = `linear-gradient(90deg, #a855f7 ${initRatio * 100}%, rgba(0,0,0,0.1) ${initRatio * 100}%)`;
    }

    if (btnQuizCancel && quizSetupModal) {
        btnQuizCancel.addEventListener('click', () => {
            quizSetupModal.classList.remove('open');
            quizSetupModal.setAttribute('aria-hidden', 'true');
        });
    }

    if (btnQuizConfirm && quizSetupModal) {
        btnQuizConfirm.addEventListener('click', () => {
            quizSetupModal.classList.remove('open');
            quizSetupModal.setAttribute('aria-hidden', 'true');

            const selectedSize = parseInt(quizCountSlider ? quizCountSlider.value : '10', 10);
            const catInput = /** @type {HTMLInputElement|null} */ (document.getElementById('quiz-category-select'));
            const selectedCat = catInput ? catInput.value : 'all';
            const cefrInput = /** @type {HTMLInputElement|null} */ (document.getElementById('quiz-cefr-input'));
            const selectedQuizCefr = cefrInput ? cefrInput.value : 'all';
            const modeInput = /** @type {HTMLInputElement|null} */ (document.getElementById('quiz-mode-input'));
            const selectedQuizMode = modeInput ? modeInput.value : 'choice';

            let pool = [];
            for (let i = 0; i < totalWords; i++) {
                const w = wordsData[i];
                if (selectedCat !== 'all' && w.partOfSpeech !== selectedCat) continue;
                if (selectedQuizCefr !== 'all' && w.cefr !== selectedQuizCefr) continue;
                pool.push(i);
            }

            if (pool.length === 0) {
                showToast('ไม่พบคำศัพท์ในหมวดหมู่นี้');
                return;
            }

            const actualSize = Math.min(selectedSize, pool.length);
            const indices = pickRandom(pool, actualSize);

            quizSession = {
                indices,
                currentIndex: 0,
                score: 0,
                incorrectWords: [],
                category: selectedCat,
                mode: selectedQuizMode,
                revealedChars: 1,
                startTime: Date.now()
            };
            showScreen('quiz');
            renderQuizQuestion();
        });
    }

    if (btnQuizHome) {
        btnQuizHome.addEventListener('click', async () => {
            if (quizSession && quizSession.currentIndex < quizSession.indices.length) {
                const ok = await confirmDialog({
                    title: 'ออกจากการทำแบบทดสอบ?',
                    message: 'คุณยังทำแบบทดสอบไม่เสร็จ ต้องการออกไปหน้าแรกหรือไม่?',
                    confirmText: 'ออก'
                });
                if (!ok) return;
            }
            quizSession = null;
            showScreen('welcome');
        });
    }

    if (btnQuizSpeak) {
        btnQuizSpeak.addEventListener('click', () => {
            if (!quizSession) return;
            const word = wordsData[quizSession.indices[quizSession.currentIndex]].word;
            speakWordOverride(word, true);
        });
    }

    let currentSpeakingBtn = null;

    function clearSpeakingState() {
        if (speakResetTimer) {
            clearTimeout(speakResetTimer);
            speakResetTimer = null;
        }
        if (currentSpeakingBtn) {
            currentSpeakingBtn.classList.remove('is-speaking');
            currentSpeakingBtn = null;
        }
        document.querySelectorAll('.is-speaking').forEach(b => b.classList.remove('is-speaking'));
    }

    function setSpeakingState(btn, timeoutMs = 2800) {
        clearSpeakingState();
        if (!btn) return;
        currentSpeakingBtn = btn;
        btn.classList.add('is-speaking');
        speakResetTimer = setTimeout(() => clearSpeakingState(), timeoutMs);
    }

    function speakViaWebSpeech(text, btn, rateOverride = null, langOverride = null) {
        if (!window.speechSynthesis) {
            clearSpeakingState();
            return;
        }
        const langTag = langOverride || (preferredAccent === 'UK' ? 'en-GB' : 'en-US');
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langTag;
        const voicesList = (typeof availableVoices !== 'undefined' && Array.isArray(availableVoices) && availableVoices.length)
            ? availableVoices
            : (window.speechSynthesis.getVoices() || []);
        const exact = voicesList.find(v =>
            v.lang && v.lang.replace('_', '-') === langTag &&
            (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Daniel') || v.name.includes('Samantha') || v.name.includes('Zira'))
        ) || voicesList.find(v => v.lang && v.lang.replace('_', '-').startsWith(langTag))
            || voicesList.find(v => v.lang && v.lang.startsWith('en'));
        if (exact) utterance.voice = exact;
        const baseRate = text.includes(' ') ? 0.92 : 0.86;
        utterance.rate = (typeof rateOverride === 'number' && rateOverride >= 0.4 && rateOverride <= 2.0) ? rateOverride : baseRate;

        if (btn) {
            utterance.onstart = () => setSpeakingState(btn, text.includes(' ') ? 4200 : 2800);
            utterance.onend = () => clearSpeakingState();
            utterance.onerror = () => clearSpeakingState();
        }
        setTimeout(() => {
            try {
                if (window.speechSynthesis) window.speechSynthesis.speak(utterance);
            } catch (_) {
                clearSpeakingState();
            }
        }, 40);
    }

    async function tryPlayDictionaryMp3(wordText, btn, rateOverride = null) {
        const clean = String(wordText || '').trim().toLowerCase();
        if (!clean || /\s/.test(clean) || clean.length > 26 || navigator.onLine === false) return false;
        const cacheKey = `${clean}|${preferredAccent}`;
        let audioUrl = audioUrlCache.get(cacheKey);
        if (audioUrl === undefined) {
            audioUrl = null;
            try {
                const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
                const tid = ctrl ? setTimeout(() => ctrl.abort(), 1100) : null;
                const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean)}`, ctrl ? { signal: ctrl.signal } : undefined);
        if (tid) clearTimeout(tid);
        if (res && res.ok) {
          const data = await res.json();
          const phs = Array.isArray(data?.[0]?.phonetics) ? data[0].phonetics : [];
          const urls = phs.map(p => p?.audio).filter(u => typeof u === 'string' && u.startsWith('http'));
          const wantUk = preferredAccent === 'UK';
          const matched = urls.find(u => wantUk ? /-uk[\.\-]/i.test(u) : /-us[\.\-]/i.test(u));
          if (matched) audioUrl = matched;
          else if (!wantUk && urls.length > 0) audioUrl = urls.find(u => !/-uk[\.\-]/i.test(u)) || null;
        }
      } catch (_) {
                audioUrl = null;
            }
            audioUrlCache.set(cacheKey, audioUrl || null);
        }
        if (!audioUrl) return false;
        try {
            if (activeAudioEl) {
                activeAudioEl.pause();
                activeAudioEl.currentTime = 0;
            }
            const audio = activeAudioEl || new Audio();
            activeAudioEl = audio;
            audio.src = audioUrl;
            audio.playbackRate = (typeof rateOverride === 'number' && rateOverride >= 0.4 && rateOverride <= 2.0) ? rateOverride : 1.0;
            audio.onended = () => clearSpeakingState();
            audio.onerror = () => clearSpeakingState();
            if (btn) setSpeakingState(btn, 2800);
            await audio.play();
            return true;
        } catch (_) {
            return false;
        }
    }

    /**
     * @param {string} text
     * @param {boolean} [isManual]
     * @param {EventTarget|null} [targetBtn]
     * @param {{ rate?: number }|null} [opts]
     */
    function speakWordOverride(text, isManual = false, targetBtn = null, opts = null) {
        if (!text) return;
        if (isSoundMuted && !isManual) return;
        const clean = String(text).trim();
        if (!clean) return;
        const rateOverride = opts && typeof opts.rate === 'number' ? opts.rate : null;
        const langOverride = opts && typeof opts.lang === 'string' ? opts.lang : null;
        try {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        } catch (_) { }

        const btn = targetBtn || (btnQuizSpeak && btnQuizSpeak.offsetParent !== null ? btnQuizSpeak : (btnSpeak && btnSpeak.offsetParent !== null ? btnSpeak : null));
        if (btn) setSpeakingState(btn, clean.includes(' ') ? 4200 : 2800);

        if (isManual && !clean.includes(' ') && !langOverride && navigator.onLine !== false) {
            tryPlayDictionaryMp3(clean, btn, rateOverride).then(played => {
                if (!played) speakViaWebSpeech(clean, btn, rateOverride, langOverride);
            }).catch(() => speakViaWebSpeech(clean, btn, rateOverride, langOverride));
        } else {
            speakViaWebSpeech(clean, btn, rateOverride, langOverride);
        }
    }
    /** @type {any} */ (window).speakWordOverride = speakWordOverride;

    function renderQuizQuestion() {
        if (!quizSession) return;
        if (quizSession.currentIndex >= quizSession.indices.length) {
            // End of quiz
            SoundFX.victory();
            const qPct = quizSession.indices.length ? Math.round((quizSession.score / quizSession.indices.length) * 100) : 0;
            if (qPct >= 70) {
                OxConfetti.launch(qPct === 100 ? 'perfect' : 'good');
            }
            showToast(`สุดยอด! คุณทำคะแนนได้ ${quizSession.score} / ${quizSession.indices.length}`);

            const timeSpentSec = Math.round((Date.now() - quizSession.startTime) / 1000);
            const finishedQuiz = {
                indices: quizSession.indices,
                score: quizSession.score,
                incorrectWords: [...quizSession.incorrectWords],
                category: quizSession.category || 'all',
                timeSpent: timeSpentSec,
                date: new Date().toISOString()
            };

            // Save Quiz History
            let quizHistory = [];
            try {
                const stored = localStorage.getItem('oxford3000_quiz_history');
                if (stored) quizHistory = JSON.parse(stored);
            } catch (e) { }

            quizHistory.unshift({
                date: finishedQuiz.date,
                score: finishedQuiz.score,
                total: finishedQuiz.indices.length,
                percent: Math.round((finishedQuiz.score / finishedQuiz.indices.length) * 100),
                incorrectWords: finishedQuiz.incorrectWords,
                category: finishedQuiz.category,
                timeSpent: finishedQuiz.timeSpent
            });

            if (quizHistory.length > 50) quizHistory.pop(); // Keep last 50
            localStorage.setItem('oxford3000_quiz_history', JSON.stringify(quizHistory));
            if (typeof learnState === 'object' && learnState) {
                ensureTodayQuests();
                const quizXp = 10 + Math.round((qPct / 100) * 15);
                learnState.xp += quizXp;
                learnState.dailyQuests.xpToday += quizXp;
                if (qPct >= 80) learnState.dailyQuests.perfectToday += 1;
                saveLearnState(false);
                if (typeof refreshShellTelemetry === 'function') refreshShellTelemetry();
            }
            if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
            trackGAEvent('quiz_complete', {
                category: finishedQuiz.category,
                score: finishedQuiz.score,
                total: finishedQuiz.indices.length,
                accuracy: qPct,
                duration_sec: timeSpentSec
            });

            // Refresh dashboard
            if (typeof renderHistory === 'function') renderHistory();
            if (typeof renderQuizHistory === 'function') renderQuizHistory();

            quizSession = null;
            renderQuizSummary(finishedQuiz);
            showScreen('quiz-summary');
            return;
        }

        quizAnswered = false;
        quizSession.revealedChars = 1;
        const index = quizSession.indices[quizSession.currentIndex];
        const correctWord = wordsData[index];
        const qMode = quizSession.mode || 'choice';

        const modeTag = $('quiz-active-mode-tag');
        const contextBox = $('quiz-context-box');
        const contextSent = $('quiz-context-sentence');
        const contextTrans = $('quiz-context-trans');
        const spellingBox = $('quiz-spelling-box');
        const spellHintEl = $('quiz-spell-hint');
        const spellInput = /** @type {HTMLInputElement|null} */ ($('quiz-spelling-input'));
        const spellFeedback = $('quiz-spell-feedback');

        const MODE_LABELS = {
            choice: 'Multiple Choice · ทายคำแปล 4 ตัวเลือก',
            cloze: 'Context Cloze · เติมคำศัพท์ในประโยค',
            listening: 'Listening Dictation · ฟังเสียงทายความหมาย',
            spelling: 'Spelling Challenge · พิมพ์สะกดคำศัพท์'
        };
        if (modeTag) modeTag.textContent = MODE_LABELS[qMode] || MODE_LABELS.choice;

        const qPos = document.getElementById('quiz-pos');
        if (qPos) {
            const meta = CATEGORY_META[correctWord.partOfSpeech] || { th: correctWord.partOfSpeech };
            qPos.textContent = meta.th;
            qPos.className = 'part-of-speech pos-' + catOf(correctWord);
        }
        OxCefr.applyBadge($('quiz-cefr-badge'), correctWord.cefr);
        OxMotion.springEnter(quizWord);
        const qPhonetic = document.getElementById('quiz-phonetic');

        quizCurrentIndex.textContent = quizSession.currentIndex + 1;
        quizTotal.textContent = quizSession.indices.length;
        quizScoreEl.textContent = quizSession.score;
        quizProgressFill.style.width = `${((quizSession.currentIndex) / quizSession.indices.length) * 100}%`;

        // Configure UI per mode
        if (qMode === 'cloze') {
            quizWord.textContent = correctWord.translation;
            if (qPhonetic) qPhonetic.textContent = '';
            if (contextBox && contextSent && contextTrans) {
                contextBox.hidden = false;
                const rawEx = correctWord.example || `Please remember the word "${correctWord.word}" in this context.`;
                const escapedW = correctWord.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const re = new RegExp(`\\b${escapedW}(?:s|es|ed|ing)?\\b`, 'gi');
                const masked = rawEx.replace(re, '<span class="cloze-blank">_____</span>');
                contextSent.innerHTML = masked.includes('cloze-blank')
                    ? masked
                    : `${escapeHtml(rawEx)} (<span class="cloze-blank">_____</span>)`;
                contextTrans.textContent = correctWord.exampleTranslation || correctWord.definition || '';
            }
        } else if (qMode === 'listening') {
            quizWord.textContent = 'ฟังเสียงแล้วเลือกความหมาย';
            if (qPhonetic) qPhonetic.textContent = 'กดปุ่มลำโพงเพื่อฟังซ้ำ';
            if (contextBox) contextBox.hidden = true;
        } else if (qMode === 'spelling') {
            quizWord.textContent = correctWord.translation;
            if (qPhonetic) qPhonetic.textContent = correctWord.phonetic || '';
            if (contextBox && contextSent && contextTrans) {
                if (correctWord.definition) {
                    contextBox.hidden = false;
                    contextSent.textContent = correctWord.definition;
                    contextTrans.textContent = '';
                } else {
                    contextBox.hidden = true;
                }
            }
        } else {
            quizWord.textContent = correctWord.word;
            if (qPhonetic) qPhonetic.textContent = correctWord.phonetic || '';
            if (contextBox) contextBox.hidden = true;
        }

        if (qMode === 'spelling') {
            quizOptions.hidden = true;
            if (spellingBox) {
                spellingBox.hidden = false;
                if (spellFeedback) spellFeedback.hidden = true;
                const btnNextSpell = /** @type {HTMLButtonElement|null} */ ($('btn-quiz-next-spell'));
                if (btnNextSpell) btnNextSpell.hidden = true;
                const btnSubSpell = /** @type {HTMLButtonElement|null} */ ($('btn-quiz-submit-spell'));
                if (btnSubSpell) btnSubSpell.disabled = false;
                if (spellInput) {
                    spellInput.value = '';
                    spellInput.disabled = false;
                    setTimeout(() => spellInput.focus(), 40);
                }
                updateSpellingHintDisplay(correctWord.word, 1);
            }
            speakWordOverride(correctWord.word, false);
            return;
        }

        quizOptions.hidden = false;
        if (spellingBox) spellingBox.hidden = true;

        // Build 4 options (English words for Cloze mode; Thai translations for Choice/Listening)
        const useEnglishOptions = qMode === 'cloze';
        const correctText = useEnglishOptions ? correctWord.word : correctWord.translation;
        const options = [{ text: correctText, isCorrect: true }];
        const usedSet = new Set([correctText]);

        const matchingPool = [];
        const otherPool = [];
        for (let i = 0; i < totalWords; i++) {
            if (i === index) continue;
            if (wordsData[i] && wordsData[i].partOfSpeech === correctWord.partOfSpeech) {
                matchingPool.push(i);
            } else {
                otherPool.push(i);
            }
        }

        const combinedPool = [...shuffle(matchingPool), ...shuffle(otherPool)];
        for (let i = 0; i < combinedPool.length && options.length < 4; i++) {
            const w = wordsData[combinedPool[i]];
            const candidate = useEnglishOptions ? w.word : w.translation;
            if (w && candidate && !usedSet.has(candidate)) {
                usedSet.add(candidate);
                options.push({ text: candidate, isCorrect: false });
            }
        }

        options.sort(() => Math.random() - 0.5);
        quizOptionsData = options;

        quizOptions.innerHTML = '';
        const prefixes = ['A', 'B', 'C', 'D'];
        options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-btn';
            btn.innerHTML = `<span style="display: flex; align-items: center; gap: 12px; width: 100%;"><span style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 12px; background: rgba(79, 70, 229, 0.1); color: var(--primary); font-weight: 800; font-size: 1.05rem;">${prefixes[idx]}</span><span style="flex: 1; text-align: left; padding-right: 12px;">${escapeHtml(opt.text)}</span></span>`;
            btn.onclick = () => handleQuizAnswer(idx, btn);
            quizOptions.appendChild(btn);
        });

        if (qMode !== 'cloze') {
            speakWordOverride(correctWord.word, false);
        }
    }

    function updateSpellingHintDisplay(word, revealCount) {
        const spellHintEl = $('quiz-spell-hint');
        if (!spellHintEl) return;
        const chars = word.split('');
        const masked = chars.map((ch, idx) => {
            if (ch === ' ' || ch === '-') return ch;
            return idx < revealCount ? ch : '_';
        }).join(' ');
        spellHintEl.textContent = `${masked}  (${word.length} ตัวอักษร)`;
    }

    function handleQuizAnswer(selectedIndex, btnElement) {
        if (quizAnswered || !quizSession) return;
        quizAnswered = true;

        const isCorrect = quizOptionsData[selectedIndex].isCorrect;
        const buttons = quizOptions.querySelectorAll('.quiz-btn');
        /** @type {Element|null} */
        let correctBtn = null;

        quizOptionsData.forEach((opt, idx) => {
            if (opt.isCorrect) correctBtn = buttons[idx];
        });

        const index = quizSession.indices[quizSession.currentIndex];
        const correctWordData = wordsData[index];

        if (quizSession.mode === 'listening') {
            quizWord.textContent = correctWordData.word;
            const qPhon = document.getElementById('quiz-phonetic');
            if (qPhon) qPhon.textContent = correctWordData.phonetic || '';
        } else if (quizSession.mode === 'cloze') {
            const blankEl = document.querySelector('#quiz-context-sentence .cloze-blank');
            if (blankEl) blankEl.textContent = correctWordData.word;
            speakWordOverride(correctWordData.word, false);
        }
        recordDailyGoalProgress(1);
        const wKey = keyOf(correctWordData);

        if (isCorrect) {
            SoundFX.known();
            btnElement.classList.add('correct');
            quizSession.score++;
            quizScoreEl.textContent = quizSession.score;
            recordWordMastery(wKey, 'known');
        } else {
            SoundFX.review();
            btnElement.classList.add('wrong');
            if (correctBtn) correctBtn.classList.add('correct');
            recordWordMastery(wKey, 'review');
            quizSession.incorrectWords.push({
                word: correctWordData.word,
                translation: correctWordData.translation,
                phonetic: correctWordData.phonetic || '',
                partOfSpeech: correctWordData.partOfSpeech || 'noun'
            });
        }

        // Wait a bit before next question
        setTimeout(() => {
            if (quizSession) {
                quizSession.currentIndex++;
                renderQuizQuestion();
            }
        }, 1200);
    }

    /* =========================================================
     * Quiz Summary Screen Logic
     * ========================================================= */
    function renderQuizSummary(record) {
        const percent = record.indices.length ? Math.round((record.score / record.indices.length) * 100) : 0;
        const total = record.indices.length;
        const wrong = total - record.score;

        let title = 'จบรอบทดสอบแล้ว!';
        if (percent === 100) { title = 'ยอดเยี่ยม สมบูรณ์แบบ 100%!'; }
        else if (percent >= 80) { title = 'ผ่านเกณฑ์ระดับยอดเยี่ยม!'; }
        else if (percent >= 50) { title = 'ทำได้ดี! พัฒนาขึ้นเรื่อยๆ'; }
        else { title = 'สู้ต่อไป! ทบทวนจุดที่ผิดอีกนิด'; }

        const emojiEl = document.getElementById('quiz-summary-emoji');
        const titleEl = document.getElementById('quiz-summary-title');
        const subtitleEl = document.getElementById('quiz-summary-subtitle');
        const percentEl = document.getElementById('quiz-summary-percent');
        const ringFg = document.getElementById('quiz-summary-ring-fg');
        const correctEl = document.getElementById('quiz-summary-correct');
        const wrongEl = document.getElementById('quiz-summary-wrong');
        const timeEl = document.getElementById('quiz-summary-time');

        setSummaryEmblem(emojiEl, percent);
        if (titleEl) titleEl.textContent = title;
        if (subtitleEl) {
            const catMeta = CATEGORY_META[record.category];
            const catLabel = catMeta ? catMeta.th : 'ทั้งหมด';
            subtitleEl.textContent = `หมวด${catLabel} · ทั้งหมด ${total} ข้อ`;
        }
        if (percentEl) percentEl.textContent = percent + '%';
        if (correctEl) correctEl.textContent = String(record.score);
        if (wrongEl) wrongEl.textContent = String(wrong);

        if (timeEl) {
            const m = Math.floor((record.timeSpent || 0) / 60);
            const s = (record.timeSpent || 0) % 60;
            timeEl.textContent = m > 0 ? `${m}m ${s}s` : `${s}s`;
        }

        if (ringFg) {
            const c = 2 * Math.PI * 52;
            const offset = c - (percent / 100) * c;
            ringFg.style.strokeDasharray = String(c);
            ringFg.style.strokeDashoffset = String(c);
            setTimeout(() => { ringFg.style.strokeDashoffset = String(offset); }, 100);
        }

        // Mistakes list
        const wrap = document.getElementById('quiz-summary-mistakes-wrap');
        const countEl = document.getElementById('quiz-summary-mistakes-count');
        const listEl = document.getElementById('quiz-summary-mistakes-list');
        const btnRetryMistakes = document.getElementById('btn-quiz-retry-mistakes');
        const retryCountEl = document.getElementById('quiz-retry-count');

        if (record.incorrectWords && record.incorrectWords.length > 0) {
            if (wrap) wrap.style.display = 'block';
            if (countEl) countEl.textContent = record.incorrectWords.length;
            if (btnRetryMistakes) {
                btnRetryMistakes.style.display = 'inline-flex';
                if (retryCountEl) retryCountEl.textContent = record.incorrectWords.length;
                btnRetryMistakes.onclick = () => {
                    const indices = [];
                    record.incorrectWords.forEach(w => {
                        const idx = wordsData.findIndex(item => item.word.toLowerCase() === w.word.toLowerCase());
                        if (idx !== -1 && !indices.includes(idx)) indices.push(idx);
                    });
                    if (indices.length > 0) {
                        quizSession = {
                            indices,
                            currentIndex: 0,
                            score: 0,
                            incorrectWords: [],
                            category: record.category || 'all',
                            startTime: Date.now()
                        };
                        showScreen('quiz');
                        renderQuizQuestion();
                    }
                };
            }

            if (listEl) {
                listEl.innerHTML = '';
                record.incorrectWords.forEach(w => {
                    const li = document.createElement('li');
                    li.className = 'quiz-mistake-item';
                    const posMeta = CATEGORY_META[w.partOfSpeech] || { th: w.partOfSpeech || '' };
                    li.innerHTML = `
            <div class="qmi-left">
              <span class="qmi-word">${escapeHtml(w.word)}</span>
              ${w.phonetic ? `<span class="phonetic" style="font-size:0.8rem; padding:2px 6px;">${escapeHtml(w.phonetic)}</span>` : ''}
              <span class="part-of-speech" style="font-size:0.75rem; padding: 2px 8px;">${escapeHtml(posMeta.th)}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="qmi-trans">${escapeHtml(w.translation)}</span>
              <button type="button" class="glass-btn-icon small speak-btn" data-speak-word="${escapeHtml(w.word)}" title="ฟังเสียง" aria-label="ฟังเสียงอ่าน" style="width:34px; height:34px;"><span class="speak-svg" style="display:inline-flex;">${ICON_SVG.volOn}</span><span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i></span></button>
            </div>
          `;
                    listEl.appendChild(li);
                });
                listEl.onclick = (e) => {
                    if (!(e.target instanceof Element)) return;
                    const sBtn = e.target.closest('[data-speak-word]');
                    if (sBtn instanceof HTMLElement) {
                        speakWordOverride(sBtn.dataset.speakWord, true, sBtn);
                    }
                };
            }
        } else {
            if (wrap) wrap.style.display = 'none';
            if (btnRetryMistakes) btnRetryMistakes.style.display = 'none';
        }

        const btnRetryAll = document.getElementById('btn-quiz-retry-all');
        if (btnRetryAll) {
            btnRetryAll.onclick = () => {
                let pool = [];
                if (record.category === 'all') {
                    pool = Array.from({ length: totalWords }, (_, i) => i);
                } else {
                    pool = Array.from({ length: totalWords }, (_, i) => i).filter(i => wordsData[i].partOfSpeech === record.category);
                }
                const actualSize = Math.min(record.indices.length, pool.length);
                const indices = pickRandom(pool, actualSize);
                quizSession = {
                    indices,
                    currentIndex: 0,
                    score: 0,
                    incorrectWords: [],
                    category: record.category,
                    startTime: Date.now()
                };
                showScreen('quiz');
                renderQuizQuestion();
            };
        }

        const btnHome = document.getElementById('btn-quiz-summary-home');
        if (btnHome) btnHome.onclick = () => showScreen('welcome');

        const btnHistory = document.getElementById('btn-quiz-summary-history');
        if (btnHistory) btnHistory.onclick = () => openHistory('welcome', 'dash-quiz-overview');
    }

    /* =========================================================
     * Sound Toggle System
     * ========================================================= */
    function updateSoundUI() {
        const buttons = document.querySelectorAll('.sound-toggle-btn');
        buttons.forEach(btn => {
            btn.classList.toggle('muted', isSoundMuted);
            const icon = btn.querySelector('.sound-icon');
            if (icon) icon.innerHTML = isSoundMuted ? ICON_SVG.volOff : ICON_SVG.volOn;
            if (btn.id === 'prof-sound-btn') {
                btn.classList.toggle('is-on', !isSoundMuted);
                btn.setAttribute('aria-checked', String(!isSoundMuted));
            }
            const label = isSoundMuted ? 'เปิดเสียง (Muted)' : 'ปิดเสียง (Sound On)';
            if (btn instanceof HTMLElement) btn.title = label;
            btn.setAttribute('aria-label', label);
        });
    }

    function toggleSoundMute() {
        isSoundMuted = !isSoundMuted;
        storage.set('ox3k_sound_muted', isSoundMuted);
        updateSoundUI();
        showToast(isSoundMuted ? 'ปิดเสียงอัตโนมัติแล้ว (กดปุ่มลำโพงฟังได้)' : 'เปิดเสียงอ่านอัตโนมัติแล้ว');
        if (!isSoundMuted) SoundFX.next();
    }

    document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSoundMute();
        });
    });
    updateSoundUI();

    /* =========================================================
     * Theme & UI Wiring
     * ========================================================= */
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleTheme();
        });
    });
    initTheme();

    /* =========================================================
     * Example Sentence TTS
     * ========================================================= */
    const btnSpeakExample = $('btn-speak-example');
    if (btnSpeakExample) {
        btnSpeakExample.addEventListener('click', (e) => {
            if (e) e.stopPropagation();
            if (!session) return;
            const word = wordsData[session.indices[session.currentIndex]];
            if (word && word.example) {
                speakWordOverride(word.example, true, btnSpeakExample);
            }
        });
    }
    const btnSpeakExtraExample = $('btn-speak-extra-example');
    if (btnSpeakExtraExample) {
        btnSpeakExtraExample.addEventListener('click', (e) => {
            if (e) e.stopPropagation();
            if (!session) return;
            const word = wordsData[session.indices[session.currentIndex]];
            if (word && word.extraExample) {
                speakWordOverride(word.extraExample, true, btnSpeakExtraExample);
            }
        });
    }

    /* =========================================================
     * Word List Interactive Actions (Audio + Expand Drawer)
     * ========================================================= */
    function setWordQuickStatus(key, status) {
        if (!keyToIndex.has(key)) return;
        if (status !== 'known' && status !== 'review') return;
        wordStatus[key] = status;
        storage.set(STORAGE.status, wordStatus);
        recordWordMastery(key, status);
        if (status === 'known') SoundFX.known();
        else SoundFX.review();

        const lvl = getWordMasteryLevel(key);
        const m = wordMastery[key];
        const days = m && m.intervalDays ? m.intervalDays : 0;
        const lvlBadge = lvl === 'mastered'
            ? `ชำนาญ${days ? ` · ${days}d` : ''}`
            : lvl === 'learning'
                ? `กำลังจำ${days ? ` · ${days}d` : ''}`
                : 'ต้องซ้ำ';
        const escKey = CSS.escape ? CSS.escape(key) : key.replace(/"/g, '\\"');
        document.querySelectorAll(`.word-item[data-word-key="${escKey}"]`).forEach(li => {
            li.classList.remove('known', 'review', 'unseen');
            li.classList.add(status);
            const dot = li.querySelector('.status-dot');
            if (dot) dot.className = `status-dot dot-${lvl}`;
            const pill = li.querySelector('.pill-sm');
            if (pill) {
                pill.className = `pill-sm ${lvl}`;
                pill.textContent = lvlBadge;
            }
            li.querySelectorAll('[data-set-status-key]').forEach(btn => {
                const targetSt = btn.getAttribute('data-set-status');
                btn.classList.toggle('is-active-known', targetSt === 'known' && status === 'known');
                btn.classList.toggle('is-active-review', targetSt === 'review' && status === 'review');
            });
        });

        updateDictionaryMasteryUI();
        updateWelcomeSmartStrip();
        if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
        showToast(status === 'known' ? 'บันทึกเป็น "จำได้แล้ว" ✓' : 'เพิ่มเข้า "ต้องทบทวน" แล้ว ↻');
    }

    function wireWordListEvents(listEl) {
        if (!listEl) return;
        listEl.addEventListener('click', (e) => {
            if (!(e.target instanceof Element)) return;
            const starBtn = e.target.closest('[data-star-key]');
            if (starBtn instanceof HTMLElement) {
                e.stopPropagation();
                toggleBookmark(starBtn.dataset.starKey || '');
                if (currentScreen === 'history' && historyFilter === 'starred') {
                    renderHistoryWords();
                } else if (currentScreen === 'dictionary' && dictFilterState.status === 'starred') {
                    renderDictionary(false);
                }
                return;
            }
            const speakBtn = e.target.closest('[data-speak-word]');
            if (speakBtn instanceof HTMLElement) {
                e.stopPropagation();
                speakWordOverride(speakBtn.dataset.speakWord || '', true, speakBtn);
                return;
            }
            const speakSlowBtn = e.target.closest('[data-speak-slow]');
            if (speakSlowBtn instanceof HTMLElement) {
                e.stopPropagation();
                speakWordOverride(speakSlowBtn.dataset.speakSlow || '', true, speakSlowBtn, { rate: 0.7 });
                return;
            }
            const speakExBtn = e.target.closest('[data-speak-example]');
            if (speakExBtn instanceof HTMLElement) {
                e.stopPropagation();
                speakWordOverride(speakExBtn.dataset.speakExample || '', true, speakExBtn);
                return;
            }
            const jumpBtn = e.target.closest('[data-jump-word]');
            if (jumpBtn instanceof HTMLElement) {
                e.stopPropagation();
                const targetWord = jumpBtn.dataset.jumpWord || '';
                const foundKey = findWordKeyByText(targetWord);
                if (foundKey) {
                    openWordInspector(foundKey);
                } else if (targetWord) {
                    speakWordOverride(targetWord, true, jumpBtn);
                    showToast(`คำว่า "${targetWord}" อยู่นอกคลัง ${wordsData.length.toLocaleString()} คำ — ออกเสียงให้ฟังแล้ว`);
                }
                return;
            }
            const inspectBtn = e.target.closest('[data-inspect-key]');
            if (inspectBtn instanceof HTMLElement) {
                e.stopPropagation();
                if (inspectBtn.dataset.inspectKey) openWordInspector(inspectBtn.dataset.inspectKey);
                return;
            }
            const statusBtn = e.target.closest('[data-set-status-key]');
            if (statusBtn instanceof HTMLElement) {
                e.stopPropagation();
                const sk = statusBtn.dataset.setStatusKey || '';
                const st = statusBtn.dataset.setStatus || '';
                if (sk && st) setWordQuickStatus(sk, st);
                return;
            }
            const row = e.target.closest('.word-item');
            if (row) {
                row.classList.toggle('is-expanded');
                const expanded = row.classList.contains('is-expanded');
                SoundFX.drawer(expanded);
                const arrow = row.querySelector('.word-item-expand-arrow');
                if (arrow) arrow.textContent = expanded ? '▴' : '▾';
            }
        });
    }
    wireWordListEvents(historyWordList);
    wireWordListEvents(summaryWordList);

    /* =========================================================
     * Target Chips for Daily Goal
     * ========================================================= */
    const targetChipsContainer = $('dgw-target-chips');
    if (targetChipsContainer) {
        targetChipsContainer.addEventListener('click', (e) => {
            const btn = e.target instanceof Element ? e.target.closest('[data-goal]') : null;
            if (!btn) return;
            const newTarget = Number(/** @type {HTMLElement} */(btn).dataset.goal);
            if (Number.isFinite(newTarget) && newTarget > 0) {
                dailyGoal.target = newTarget;
                dailyGoal.targetUpdatedAt = Date.now();
                saveDailyGoal(dailyGoal);
                updateDailyGoalUI();
                SoundFX.tick();
                if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
            }
        });
    }

    /* =========================================================
     * Export & Import Learning Data
     * ========================================================= */
    const btnExport = $('btn-export-data');
    if (btnExport) {
        btnExport.addEventListener('click', () => {
            const data = {
                wordStatus,
                sessions,
                quizHistory: storage.get('oxford3000_quiz_history', []),
                dailyGoal,
                wordMastery,
                bookmarks: Array.from(bookmarkedWords),
                activityLog,
                prefs: {
                    size: selectedSize,
                    sizeUpdatedAt: prefsMeta.sizeUpdatedAt || 0,
                    accent: preferredAccent,
                    accentUpdatedAt: prefsMeta.accentUpdatedAt || 0
                },
                learningPath: typeof getLearnSyncPayloadHook === 'function' ? getLearnSyncPayloadHook() : undefined,
                exportedAt: new Date().toISOString(),
                version: 'ox3k_v2'
            };
            const jsonStr = JSON.stringify(data, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `oxflashcards_backup_${getTodayDateString()}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('สำรองข้อมูลเรียบร้อยแล้ว');
        });
    }

    const importInput = /** @type {HTMLInputElement|null} */ ($('import-data-file'));
    if (importInput) {
        importInput.addEventListener('change', (e) => {
            const target = /** @type {HTMLInputElement|null} */ (e.target);
            const file = target && target.files && target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (evt) => {
                try {
                    const rawText = evt && evt.target ? String(evt.target.result || '') : '';
                    const parsed = JSON.parse(rawText);
                    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
                        throw new Error('Invalid JSON');
                    }

                    const hasRecognizedKey = ['wordStatus', 'sessions', 'quizHistory', 'dailyGoal', 'wordMastery', 'bookmarks', 'activityLog', 'prefs', 'learningPath']
                        .some((key) => Object.prototype.hasOwnProperty.call(parsed, key));
                    if (!hasRecognizedKey) throw new Error('Unrecognized backup format');

                    if (parsed.wordStatus && typeof parsed.wordStatus === 'object' && !Array.isArray(parsed.wordStatus)) {
                        const cleanStatus = {};
                        for (const [k, v] of Object.entries(parsed.wordStatus)) {
                            if (keyToIndex.has(k) && VALID_STATUS.includes(v)) {
                                cleanStatus[k] = v;
                            }
                        }
                        wordStatus = cleanStatus;
                        storage.set(STORAGE.status, wordStatus);
                    }
                    if (Array.isArray(parsed.sessions)) {
                        sessions = parsed.sessions
                            .filter((s) => s && typeof s === 'object' && Array.isArray(s.known))
                            .slice(0, MAX_SESSIONS);
                        storage.set(STORAGE.sessions, sessions);
                    }
                    if (Array.isArray(parsed.quizHistory)) {
                        const cleanQh = parsed.quizHistory
                            .filter((q) => q && typeof q === 'object' && q.date && typeof q.total === 'number')
                            .slice(0, 50);
                        storage.set('oxford3000_quiz_history', cleanQh);
                    }
                    if (parsed.dailyGoal && typeof parsed.dailyGoal === 'object' && !Array.isArray(parsed.dailyGoal)) {
                        const today = getTodayDateString();
                        const importedTarget = Number(parsed.dailyGoal.target);
                        const validTarget = Number.isFinite(importedTarget) && importedTarget > 0 ? importedTarget : (dailyGoal.target || 20);
                        const importedCount = parsed.dailyGoal.date === today && Number.isFinite(Number(parsed.dailyGoal.count))
                            ? Math.max(0, Number(parsed.dailyGoal.count))
                            : 0;
                        dailyGoal = {
                            target: validTarget,
                            targetUpdatedAt: Number(parsed.dailyGoal.targetUpdatedAt) || Date.now(),
                            date: today,
                            count: importedCount
                        };
                        saveDailyGoal(dailyGoal);
                    }
                    if (parsed.wordMastery && typeof parsed.wordMastery === 'object' && !Array.isArray(parsed.wordMastery)) {
                        const cleanMastery = {};
                        for (const [k, m] of Object.entries(parsed.wordMastery)) {
                            if (keyToIndex.has(k) && m && typeof m === 'object') {
                                cleanMastery[k] = m;
                            }
                        }
                        wordMastery = cleanMastery;
                        storage.set(STORAGE.mastery, wordMastery);
                    }
                    if (Array.isArray(parsed.bookmarks)) {
                        bookmarkedWords = new Set(parsed.bookmarks.filter((k) => typeof k === 'string' && keyToIndex.has(k)));
                        saveBookmarks();
                    }
                    if (parsed.activityLog && typeof parsed.activityLog === 'object' && !Array.isArray(parsed.activityLog)) {
                        const cleanLog = {};
                        for (const [day, cnt] of Object.entries(parsed.activityLog)) {
                            const n = Number(cnt);
                            if (/^\d{4}-\d{2}-\d{2}$/.test(day) && Number.isFinite(n) && n >= 0) {
                                cleanLog[day] = n;
                            }
                        }
                        activityLog = cleanLog;
                        saveActivityLog(activityLog);
                    }
                    if (parsed.prefs && typeof parsed.prefs === 'object' && !Array.isArray(parsed.prefs)) {
                        const pSize = Number(parsed.prefs.size);
                        let importedPrefs = false;
                        if (Number.isFinite(pSize) && pSize >= 1 && pSize <= 50) {
                            selectedSize = Math.round(pSize);
                            prefsMeta.sizeUpdatedAt = Number(parsed.prefs.sizeUpdatedAt) || Date.now();
                            importedPrefs = true;
                        }
                        if (parsed.prefs.accent === 'US' || parsed.prefs.accent === 'UK') {
                            preferredAccent = parsed.prefs.accent;
                            prefsMeta.accentUpdatedAt = Number(parsed.prefs.accentUpdatedAt) || Date.now();
                            importedPrefs = true;
                        }
                        if (importedPrefs) {
                            savePrefsState();
                            if (typeof syncAccentButtonsUI === 'function') syncAccentButtonsUI();
                        }
                    }

                    if (parsed.learningPath && typeof importLearnJsonHook === 'function') {
                        importLearnJsonHook(parsed.learningPath);
                    }
                    renderWelcome();
                    renderHistory();
                    if (typeof renderQuizHistory === 'function') renderQuizHistory();
                    updateDailyGoalUI();
                    if (typeof renderSyncSummary === 'function' && $('sync-modal')?.classList.contains('open')) {
                        renderSyncSummary();
                    }
                    if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
                    const willAutoSync = !!(isGoogleSignedIn && isGoogleSignedIn() && typeof OxGoogleSync !== 'undefined' && OxGoogleSync.getAutoSync() && !OxGoogleSync.hasAccountConflict());
                    showToast(willAutoSync ? 'นำเข้าข้อมูลสำเร็จ กำลังซิงก์ขึ้น Google...' : 'นำเข้าข้อมูลสำเร็จแล้ว');
                } catch (err) {
                    showToast('ไฟล์ข้อมูลไม่ถูกต้อง ไม่สามารถนำเข้าได้');
                }
                importInput.value = '';
            };
            reader.readAsText(file);
        });
    }

    /* =========================================================
     * Pro Upgrade Wiring: SRS, Bookmarks, Spelling Mode, Quick Search (Ctrl+K / /)
     * ========================================================= */
    // 1. Card Star / Bookmark Buttons & Keyboard 'S'
    const btnStarFront = $('btn-star-card');
    const btnStarBack = $('btn-star-card-back');
    const handleCardStarClick = (e) => {
        if (e) e.stopPropagation();
        if (!session) return;
        const w = wordsData[session.indices[session.currentIndex]];
        if (w) toggleBookmark(keyOf(w));
    };
    if (btnStarFront) btnStarFront.addEventListener('click', handleCardStarClick);
    if (btnStarBack) btnStarBack.addEventListener('click', handleCardStarClick);

    // 2. Welcome SRS Due & Starred Practice Buttons
    const btnWelcomeSRS = $('btn-welcome-srs');
    if (btnWelcomeSRS) {
        btnWelcomeSRS.addEventListener('click', async () => {
            const due = getDueWordIndices();
            if (due.length > 0) {
                if (!(await confirmReplaceActive('เริ่มทบทวนตามรอบความจำ (SRS)?', 'เริ่มทบทวน'))) return;
                startSession(pickRandom(due, selectedSize), 'review', 'SRS Due');
            } else {
                practiceUnseenWords();
            }
        });
    }
    const btnWelcomeStarred = $('btn-welcome-starred');
    if (btnWelcomeStarred) {
        btnWelcomeStarred.addEventListener('click', async () => {
            const pool = Array.from(bookmarkedWords).map(k => keyToIndex.get(k)).filter(i => i !== undefined);
            if (!pool.length) return;
            if (!(await confirmReplaceActive('เริ่มฝึกคำศัพท์ที่ปักหมุด?', 'เริ่มฝึก'))) return;
            startSession(pickRandom(pool, selectedSize), 'category', 'คำที่ปักหมุด ★');
        });
    }

    // 3. Quiz Mode Selector (4 Modes) & Spelling Mode Handlers
    const quizModeSelector = $('quiz-mode-selector');
    const quizModeInput = /** @type {HTMLInputElement|null} */ ($('quiz-mode-input'));
    if (quizModeSelector && quizModeInput) {
        quizModeSelector.addEventListener('click', (e) => {
            if (!(e.target instanceof Element)) return;
            const card = e.target.closest('[data-quiz-mode]');
            if (!(card instanceof HTMLElement)) return;
            SoundFX.tick();
            quizModeSelector.querySelectorAll('.quiz-mode-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            quizModeInput.value = card.dataset.quizMode;
        });
    }

    const btnQuizHint = $('btn-quiz-hint');
    const btnQuizSubmitSpell = /** @type {HTMLButtonElement|null} */ ($('btn-quiz-submit-spell'));
    const btnQuizNextSpell = /** @type {HTMLButtonElement|null} */ ($('btn-quiz-next-spell'));
    const quizSpellingInput = /** @type {HTMLInputElement|null} */ ($('quiz-spelling-input'));
    let quizSpellAnsweredAt = 0;
    if (quizSpellingInput) {
        quizSpellingInput.addEventListener('input', () => SoundFX.typing());
    }

    if (btnQuizHint) {
        btnQuizHint.addEventListener('click', () => {
            if (!quizSession || quizAnswered) return;
            const w = wordsData[quizSession.indices[quizSession.currentIndex]];
            if (!w) return;
            quizSession.revealedChars = Math.min(w.word.length, (quizSession.revealedChars || 1) + 1);
            updateSpellingHintDisplay(w.word, quizSession.revealedChars);
            SoundFX.hint();
            if (quizSpellingInput) quizSpellingInput.focus();
        });
    }

    function advanceQuizSpelling() {
        if (!quizSession || !quizAnswered || quizSession.mode !== 'spelling') return;
        SoundFX.next();
        quizSession.currentIndex++;
        renderQuizQuestion();
    }

    function submitQuizSpelling() {
        if (!quizSession || quizAnswered || quizSession.mode !== 'spelling') return;
        const index = quizSession.indices[quizSession.currentIndex];
        const correctWordData = wordsData[index];
        const typed = (quizSpellingInput ? quizSpellingInput.value : '').trim().toLowerCase();
        if (!typed) {
            showToast('กรุณาพิมพ์คำศัพท์ก่อนส่งคำตอบ');
            return;
        }
        quizAnswered = true;
        quizSpellAnsweredAt = performance.now();
        if (quizSpellingInput) {
            quizSpellingInput.disabled = true;
            quizSpellingInput.blur();
        }
        if (btnQuizSubmitSpell) btnQuizSubmitSpell.disabled = true;

        const target = correctWordData.word.trim().toLowerCase();
        const isCorrect = typed === target;
        const feedbackEl = $('quiz-spell-feedback');
        const contextTrans = $('quiz-context-trans');
        const wKey = keyOf(correctWordData);

        recordDailyGoalProgress(1);
        updateSpellingHintDisplay(correctWordData.word, correctWordData.word.length);
        speakWordOverride(correctWordData.word, false);

        if (contextTrans && correctWordData.example) {
            contextTrans.textContent = `${correctWordData.example}${correctWordData.exampleTranslation ? ` (${correctWordData.exampleTranslation})` : ''}`;
        }

        const meaningNote = `${correctWordData.phonetic ? `${correctWordData.phonetic} · ` : ''}${correctWordData.translation}`;
        if (isCorrect) {
            SoundFX.known();
            quizSession.score++;
            quizScoreEl.textContent = quizSession.score;
            recordWordMastery(wKey, 'known');
            if (feedbackEl) {
                feedbackEl.hidden = false;
                feedbackEl.className = 'quiz-spell-feedback correct';
                feedbackEl.textContent = `✓ ถูกต้อง! "${correctWordData.word}" (${meaningNote})`;
            }
        } else {
            SoundFX.review();
            recordWordMastery(wKey, 'review');
            quizSession.incorrectWords.push({
                word: correctWordData.word,
                translation: correctWordData.translation,
                phonetic: correctWordData.phonetic || '',
                partOfSpeech: correctWordData.partOfSpeech || 'noun'
            });
            if (feedbackEl) {
                feedbackEl.hidden = false;
                feedbackEl.className = 'quiz-spell-feedback wrong';
                feedbackEl.textContent = `✗ คำที่ถูกคือ "${correctWordData.word}" (${meaningNote}) · คุณพิมพ์: "${typed}"`;
            }
        }

        if (btnQuizNextSpell) {
            btnQuizNextSpell.hidden = false;
            setTimeout(() => btnQuizNextSpell.focus({ preventScroll: true }), 40);
        } else {
            setTimeout(advanceQuizSpelling, 1800);
        }
    }

    if (btnQuizSubmitSpell) {
        btnQuizSubmitSpell.addEventListener('click', submitQuizSpelling);
    }
    if (btnQuizNextSpell) {
        btnQuizNextSpell.addEventListener('click', advanceQuizSpelling);
    }
    if (quizSpellingInput) {
        quizSpellingInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.isComposing) {
                e.preventDefault();
                e.stopPropagation();
                submitQuizSpelling();
            }
        });
    }
    document.addEventListener('keydown', (e) => {
        if (currentScreen !== 'quiz' || !quizSession || quizSession.mode !== 'spelling' || !quizAnswered) return;
        if (e.key === 'Enter' && !e.repeat && !e.isComposing && (performance.now() - quizSpellAnsweredAt >= 260)) {
            e.preventDefault();
            advanceQuizSpelling();
        }
    });

    // 4. Quick Dictionary Search Command Palette (#quick-search-modal)
    const quickSearchModal = $('quick-search-modal');
    const quickSearchInput = /** @type {HTMLInputElement|null} */ ($('quick-search-input'));
    const quickSearchClose = $('quick-search-close');
    const quickSearchFilters = $('quick-search-filters');
    const quickSearchResults = $('quick-search-results');
    const quickSearchCount = $('quick-search-count');
    let qsActiveFilter = 'all';

    function openQuickSearch() {
        if (!quickSearchModal) return;
        quickSearchModal.classList.add('open');
        quickSearchModal.setAttribute('aria-hidden', 'false');
        SoundFX.popOpen();
        renderQuickSearchResults();
        setTimeout(() => quickSearchInput && quickSearchInput.focus(), 40);
    }

    function closeQuickSearch() {
        if (!quickSearchModal) return;
        const wasOpen = quickSearchModal.classList.contains('open');
        quickSearchModal.classList.remove('open');
        quickSearchModal.setAttribute('aria-hidden', 'true');
        if (wasOpen) SoundFX.popClose();
    }

    function renderQuickSearchResults() {
        if (!quickSearchResults) return;
        const q = (quickSearchInput ? quickSearchInput.value : '').trim().toLowerCase();
        const scored = [];

        keyToIndex.forEach((idx, key) => {
            if (qsActiveFilter === 'starred' && !bookmarkedWords.has(key)) return;
            if (qsActiveFilter === 'due' && !isWordDueSRS(key)) return;
            if (qsActiveFilter === 'review' && wordStatus[key] !== 'review') return;

            const w = wordsData[idx];
            if (qsCefrFilter !== 'all' && w.cefr !== qsCefrFilter) return;

            const score = q ? OxFuzzy.scoreWord(w, q) : 1;
            if (score > 0) scored.push({ key, word: w.word, score });
        });

        if (q) {
            scored.sort((a, b) => (b.score - a.score) || a.word.localeCompare(b.word));
        }

        if (quickSearchCount) {
            quickSearchCount.textContent = `${scored.length.toLocaleString()} คำ`;
        }

        const topItems = scored.slice(0, 40);
        if (!topItems.length) {
            qsFocusIndex = -1;
            quickSearchResults.innerHTML = `<li class="empty-state">ไม่พบคำศัพท์ที่ตรงกับเงื่อนไข</li>`;
            return;
        }
        qsFocusIndex = q ? 0 : -1;
        quickSearchResults.innerHTML = topItems.map((it, i) => {
            let html = wordListItem(it.key, wordStatus[it.key] || 'unseen', q);
            if (i === qsFocusIndex) {
                html = html.replace('class="word-item ', 'class="word-item qs-focused ');
            }
            return html;
        }).join('');
    }

    function updateQsFocus(newIdx) {
        if (!quickSearchResults) return;
        const items = Array.from(quickSearchResults.querySelectorAll('.word-item'));
        if (!items.length) { qsFocusIndex = -1; return; }
        qsFocusIndex = ((newIdx % items.length) + items.length) % items.length;
        items.forEach((li, i) => li.classList.toggle('qs-focused', i === qsFocusIndex));
        items[qsFocusIndex].scrollIntoView({ block: 'nearest' });
    }

    wireWordListEvents(quickSearchResults);

    if ($('btn-welcome-search')) $('btn-welcome-search').addEventListener('click', openQuickSearch);
    if ($('btn-app-search')) $('btn-app-search').addEventListener('click', openQuickSearch);
    if (quickSearchClose) quickSearchClose.addEventListener('click', closeQuickSearch);
    if (quickSearchModal) {
        quickSearchModal.addEventListener('click', (e) => {
            if (e.target === quickSearchModal) closeQuickSearch();
        });
    }
    if (quickSearchInput) {
        quickSearchInput.addEventListener('input', renderQuickSearchResults);
        quickSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                updateQsFocus(qsFocusIndex + 1);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                updateQsFocus(qsFocusIndex <= 0 ? 0 : qsFocusIndex - 1);
            } else if (e.key === 'Enter') {
                const items = quickSearchResults ? Array.from(quickSearchResults.querySelectorAll('.word-item')) : [];
                const targetLi = items[qsFocusIndex >= 0 ? qsFocusIndex : 0];
                if (targetLi) {
                    e.preventDefault();
                    targetLi.classList.toggle('is-expanded');
                    const spkBtn = targetLi.querySelector('.word-item-speak-btn');
                    const spkWord = spkBtn ? spkBtn.getAttribute('data-speak-word') : '';
                    if (spkWord) speakWordOverride(spkWord, true, spkBtn);
                }
            }
        });
    }
    if (quickSearchFilters) {
        quickSearchFilters.addEventListener('click', (e) => {
            const chip = e.target instanceof Element ? e.target.closest('[data-qs-filter]') : null;
            if (!chip) return;
            qsActiveFilter = /** @type {HTMLElement} */ (chip).dataset.qsFilter || 'all';
            quickSearchFilters.querySelectorAll('.qs-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderQuickSearchResults();
        });
    }
    const qsCefrBar = $('quick-search-cefr-filters');
    if (qsCefrBar) {
        qsCefrBar.addEventListener('click', (e) => {
            const chip = e.target instanceof Element ? e.target.closest('[data-qs-cefr]') : null;
            if (!chip) return;
            qsCefrFilter = /** @type {HTMLElement} */ (chip).dataset.qsCefr || 'all';
            qsCefrBar.querySelectorAll('.qs-cefr-chip').forEach(c => c.classList.toggle('active', c === chip));
            renderQuickSearchResults();
        });
    }

    // Welcome CEFR Deck Selector & UI Sync
    function syncWelcomeCefrUI() {
        document.querySelectorAll('#welcome-cefr-pills .cefr-pill').forEach(btn => {
            btn.classList.toggle('active', (/** @type {HTMLElement} */ (btn).dataset.cefr || 'all') === selectedCefr);
        });
        const lbl = $('total-words-label');
        if (lbl) lbl.textContent = getEligibleIndices(selectedCefr).length.toLocaleString();
    }
    const welcomeCefrBar = $('welcome-cefr-pills');
    if (welcomeCefrBar) {
        welcomeCefrBar.addEventListener('click', (e) => {
            const btn = e.target instanceof Element ? e.target.closest('[data-cefr]') : null;
            if (!btn) return;
            selectedCefr = /** @type {HTMLElement} */ (btn).dataset.cefr || 'all';
            syncWelcomeCefrUI();
            SoundFX.tick();
        });
    }
    syncWelcomeCefrUI();

    // Quiz Setup CEFR Level Selector
    const quizCefrSelector = $('quiz-cefr-selector');
    if (quizCefrSelector) {
        quizCefrSelector.addEventListener('click', (e) => {
            const btn = e.target instanceof Element ? e.target.closest('[data-quiz-cefr]') : null;
            if (!btn) return;
            const val = /** @type {HTMLElement} */ (btn).dataset.quizCefr || 'all';
            const input = /** @type {HTMLInputElement|null} */ ($('quiz-cefr-input'));
            if (input) input.value = val;
            quizCefrSelector.querySelectorAll('.cefr-pill').forEach(b => b.classList.toggle('active', b === btn));
            SoundFX.tick();
        });
    }

    // Clickable Word Family & Antonym chips on Flashcard Back -> Open Word Inspector or Quick Search
    const cardLexBoxEl = $('card-lexical-box');
    if (cardLexBoxEl) {
        cardLexBoxEl.addEventListener('click', (e) => {
            if (!(e.target instanceof Element)) return;
            const btn = e.target.closest('.family-chip');
            if (!btn) return;
            e.stopPropagation();
            const targetWord = btn.getAttribute('data-family-word') || '';
            if (!targetWord) return;
            const foundKey = findWordKeyByText(targetWord);
            if (foundKey) {
                openWordInspector(foundKey);
                speakWordOverride(targetWord, true);
                return;
            }
            openQuickSearch();
            if (quickSearchInput) {
                quickSearchInput.value = targetWord;
                renderQuickSearchResults();
            }
            speakWordOverride(targetWord, true);
        });
    }

    // US / UK Accent Switcher Buttons
    function syncAccentButtonsUI() {
        document.querySelectorAll('.accent-toggle-btn').forEach(btn => {
            btn.textContent = preferredAccent;
            btn.classList.toggle('is-uk', preferredAccent === 'UK');
        });
    }
    document.querySelectorAll('.accent-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            preferredAccent = preferredAccent === 'US' ? 'UK' : 'US';
            savePrefsState({ touchAccent: true });
            syncAccentButtonsUI();
            SoundFX.tick();
            if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
            showToast(`เปลี่ยนสำเนียงเสียงอ่านเป็น ${preferredAccent === 'UK' ? 'อังกฤษ (UK)' : 'อเมริกัน (US)'}`);
        });
    });
    syncAccentButtonsUI();

    /* =========================================================
     * Pillar 7: Cross-Device Smart Merge Engine (OxSync & OxGoogleSync)
     * ========================================================= */
    const OxSync = {
        hasLocalStudyData() {
            if (Object.keys(wordStatus).length > 0) return true;
            if (Object.keys(wordMastery).length > 0) return true;
            if (bookmarkedWords.size > 0) return true;
            if (sessions.length > 0) return true;
            if (Object.keys(activityLog).length > 0) return true;
            if (Object.keys(usageTimeLog).length > 0) return true;
            if (dailyGoal && Number(dailyGoal.count || 0) > 0) return true;
            try {
                const rawQh = localStorage.getItem('oxford3000_quiz_history');
                const parsedQh = rawQh ? JSON.parse(rawQh) : [];
                if (Array.isArray(parsedQh) && parsedQh.length > 0) return true;
            } catch (_) { }
            if (typeof getLearnSyncPayloadHook === 'function') {
                const lp = getLearnSyncPayloadHook();
                if (lp && (lp.xp > 0 || Object.keys(lp.completedStages || {}).length > 0 || (lp.claimedChests || []).length > 0)) return true;
            }
            return false;
        },
        buildPayload() {
            let quizHistory = [];
            try {
                const rawQh = localStorage.getItem('oxford3000_quiz_history');
                const parsedQh = rawQh ? JSON.parse(rawQh) : [];
                if (Array.isArray(parsedQh)) quizHistory = parsedQh.slice(0, 50);
            } catch (_) { }
            return {
                v: 1,
                exportedAt: Date.now(),
                status: { ...wordStatus },
                mastery: { ...wordMastery },
                bookmarks: Array.from(bookmarkedWords),
                sessions: sessions.slice(0, 60),
                quizHistory,
                activityLog: { ...activityLog },
                usageTimeLog: { ...usageTimeLog },
                hourlyUsageLog: { ...hourlyUsageLog },
                dailyGoal: { ...dailyGoal, targetUpdatedAt: dailyGoal.targetUpdatedAt || 0 },
                learningPath: typeof getLearnSyncPayloadHook === 'function' ? getLearnSyncPayloadHook() : undefined,
                prefs: {
                    size: selectedSize,
                    sizeUpdatedAt: prefsMeta.sizeUpdatedAt || 0,
                    accent: preferredAccent,
                    accentUpdatedAt: prefsMeta.accentUpdatedAt || 0,
                    updatedAt: Math.max(prefsMeta.sizeUpdatedAt || 0, prefsMeta.accentUpdatedAt || 0)
                }
            };
        },
        /** @param {any} remote */
        mergePayload(remote) {
            if (!remote || typeof remote !== 'object') {
                throw new Error('ข้อมูลซิงก์ไม่ถูกต้อง');
            }
            const toMs = (v) => {
                if (typeof v === 'number') return v;
                if (typeof v === 'string') return new Date(v).getTime() || 0;
                return 0;
            };
            const remoteMastery = (remote.mastery && typeof remote.mastery === 'object') ? remote.mastery : {};
            const mergedMastery = { ...wordMastery };
            for (const [k, rm] of Object.entries(remoteMastery)) {
                if (!rm || typeof rm !== 'object' || !keyToIndex.has(k)) continue;
                const lm = mergedMastery[k];
                const rTs = toMs(rm.lastStudied);
                const lTs = lm ? toMs(lm.lastStudied) : 0;
                if (!lm || rTs > lTs || (rTs === lTs && (rm.reviewCount || 0) > (lm.reviewCount || 0))) {
                    mergedMastery[k] = rm;
                }
            }
            wordMastery = mergedMastery;
            saveWordMastery(wordMastery);

            const remoteStatus = (remote.status && typeof remote.status === 'object') ? remote.status : {};
            let wordsAdded = 0;
            for (const [k, rVal] of Object.entries(remoteStatus)) {
                if (!keyToIndex.has(k) || !VALID_STATUS.includes(rVal)) continue;
                if (!wordStatus[k]) {
                    wordStatus[k] = rVal;
                    wordsAdded++;
                } else if (wordStatus[k] !== rVal) {
                    const rTs = toMs(remoteMastery[k]?.lastStudied);
                    const lTs = toMs(wordMastery[k]?.lastStudied);
                    if (rTs > lTs) wordStatus[k] = rVal;
                }
            }
            storage.set(STORAGE.status, wordStatus);

            if (Array.isArray(remote.bookmarks)) {
                remote.bookmarks.forEach(k => {
                    if (typeof k === 'string' && keyToIndex.has(k)) bookmarkedWords.add(k);
                });
                saveBookmarks();
            }

            const seenSig = new Set(sessions.map(s => `${s.date || s.id || ''}|${s.mode || ''}|${s.size || 0}`));
            let sessionsAdded = 0;
            if (Array.isArray(remote.sessions)) {
                for (const rs of remote.sessions) {
                    if (!rs || typeof rs !== 'object' || !Array.isArray(rs.known)) continue;
                    const sig = `${rs.date || rs.id || ''}|${rs.mode || ''}|${rs.size || 0}`;
                    if (!seenSig.has(sig)) {
                        seenSig.add(sig);
                        sessions.push(rs);
                        sessionsAdded++;
                    }
                }
                sessions.sort((a, b) => toMs(b.date) - toMs(a.date));
                sessions = sessions.slice(0, MAX_SESSIONS);
                storage.set(STORAGE.sessions, sessions);
            }

            let quizzesAdded = 0;
            if (Array.isArray(remote.quizHistory)) {
                let localQh = [];
                try {
                    const rawQh = localStorage.getItem('oxford3000_quiz_history');
                    const parsedQh = rawQh ? JSON.parse(rawQh) : [];
                    if (Array.isArray(parsedQh)) localQh = parsedQh;
                } catch (_) { }
                const seenQh = new Set(localQh.map(q => `${q.date || ''}|${q.score || 0}|${q.total || 0}|${q.category || ''}`));
                for (const rq of remote.quizHistory) {
                    if (!rq || typeof rq !== 'object' || !rq.date || typeof rq.total !== 'number') continue;
                    const qSig = `${rq.date || ''}|${rq.score || 0}|${rq.total || 0}|${rq.category || ''}`;
                    if (!seenQh.has(qSig)) {
                        seenQh.add(qSig);
                        localQh.push(rq);
                        quizzesAdded++;
                    }
                }
                localQh.sort((a, b) => toMs(b.date) - toMs(a.date));
                localQh = localQh.slice(0, 50);
                try {
                    localStorage.setItem('oxford3000_quiz_history', JSON.stringify(localQh));
                } catch (_) { }
            }

            if (remote.activityLog && typeof remote.activityLog === 'object') {
                for (const [day, cnt] of Object.entries(remote.activityLog)) {
                    activityLog[day] = Math.max(Number(activityLog[day] || 0), Number(cnt || 0));
                }
                saveActivityLog(activityLog);
            }

            if (remote.usageTimeLog && typeof remote.usageTimeLog === 'object') {
                for (const [day, sec] of Object.entries(remote.usageTimeLog)) {
                    usageTimeLog[day] = Math.max(Number(usageTimeLog[day] || 0), Number(sec || 0));
                }
                saveUsageTimeLog(usageTimeLog);
            }

            if (remote.hourlyUsageLog && typeof remote.hourlyUsageLog === 'object') {
                for (const [hk, sec] of Object.entries(remote.hourlyUsageLog)) {
                    hourlyUsageLog[hk] = Math.min(3600, Math.max(Number(hourlyUsageLog[hk] || 0), Number(sec || 0)));
                }
                saveHourlyUsageLog(hourlyUsageLog);
            }

            const today = getTodayDateString();
            if (remote.dailyGoal && typeof remote.dailyGoal === 'object') {
                const remoteTarget = Number(remote.dailyGoal.target);
                const validRemoteTarget = Number.isFinite(remoteTarget) && remoteTarget > 0 ? remoteTarget : 0;
                const localTargetTs = Number(dailyGoal.targetUpdatedAt || 0);
                const remoteTargetTs = Number(remote.dailyGoal.targetUpdatedAt || 0);

                if (dailyGoal.date !== today) {
                    dailyGoal = {
                        target: dailyGoal.target || 20,
                        targetUpdatedAt: localTargetTs,
                        date: today,
                        count: 0
                    };
                }

                if (validRemoteTarget > 0) {
                    if (remoteTargetTs > localTargetTs) {
                        dailyGoal.target = validRemoteTarget;
                        dailyGoal.targetUpdatedAt = remoteTargetTs;
                    } else if (remoteTargetTs === localTargetTs && remoteTargetTs === 0) {
                        dailyGoal.target = Math.max(Number(dailyGoal.target || 20), validRemoteTarget);
                    }
                }

                if (remote.dailyGoal.date === today) {
                    dailyGoal.count = Math.max(Number(dailyGoal.count || 0), Number(remote.dailyGoal.count || 0));
                }
                saveDailyGoal(dailyGoal);
            }

            if (remote.prefs && typeof remote.prefs === 'object') {
                let prefsChanged = false;
                const rSize = Number(remote.prefs.size);
                const rSizeTs = Number(remote.prefs.sizeUpdatedAt || remote.prefs.updatedAt || 0);
                const lSizeTs = Number(prefsMeta.sizeUpdatedAt || 0);
                if (Number.isFinite(rSize) && rSize >= 1 && rSize <= 50) {
                    const isLegacyNoTs = lSizeTs === 0 && remote.prefs.sizeUpdatedAt === undefined && Math.round(rSize) !== selectedSize;
                    if (rSizeTs > lSizeTs || isLegacyNoTs) {
                        selectedSize = Math.round(rSize);
                        if (rSizeTs > 0) prefsMeta.sizeUpdatedAt = rSizeTs;
                        prefsChanged = true;
                    }
                }

                const rAcc = remote.prefs.accent;
                const rAccTs = Number(remote.prefs.accentUpdatedAt || remote.prefs.updatedAt || 0);
                const lAccTs = Number(prefsMeta.accentUpdatedAt || 0);
                if (rAcc === 'US' || rAcc === 'UK') {
                    const isLegacyAccNoTs = lAccTs === 0 && remote.prefs.accentUpdatedAt === undefined && rAcc !== preferredAccent;
                    if (rAccTs > lAccTs || isLegacyAccNoTs) {
                        preferredAccent = rAcc;
                        if (rAccTs > 0) prefsMeta.accentUpdatedAt = rAccTs;
                        prefsChanged = true;
                    }
                }

                if (prefsChanged) {
                    savePrefsState();
                    syncAccentButtonsUI();
                }
            }

            if (remote.learningPath && typeof mergeLearnSyncPayloadHook === 'function') {
                mergeLearnSyncPayloadHook(remote.learningPath);
            }

            renderWelcome();
            updateDailyGoalUI();
            if (typeof renderQuizHistory === 'function' && (quizzesAdded > 0 || currentScreen === 'history')) {
                renderQuizHistory();
            }
            if (currentScreen === 'history') {
                renderHistory();
            }
            return {
                wordsAdded,
                totalTracked: Object.keys(wordStatus).length,
                sessionsAdded,
                quizzesAdded,
                bookmarksTotal: bookmarkedWords.size
            };
        },
        encodeCode(payload) {
            const json = JSON.stringify(payload);
            const bytes = new TextEncoder().encode(json);
            let bin = '';
            for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
            const b64 = btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
            return `OX3K1:${b64}`;
        },
        /** @param {string} raw */
        decodeCode(raw) {
            const trimmed = String(raw || '').trim();
            if (!trimmed.startsWith('OX3K1:')) {
                throw new Error('รูปแบบรหัสไม่ถูกต้อง (ต้องขึ้นต้นด้วย OX3K1:)');
            }
            let b64 = trimmed.slice(6).replace(/-/g, '+').replace(/_/g, '/');
            while (b64.length % 4) b64 += '=';
            const bin = atob(b64);
            const bytes = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
            const json = new TextDecoder().decode(bytes);
            return JSON.parse(json);
        }
    };

    const FIREBASE_SDK_BASE = 'https://www.gstatic.com/firebasejs/10.14.1';

    /**
     * Two-way Google Sign-In & Cloud Firestore Sync engine (Firebase JS v10 Modular ESM).
     * Lazy-loads SDK only when configured, online, and served over http/https.
     */
    const OxGoogleSync = {
        _state: {
            /** @type {{ uid: string, displayName: string, email: string, photoURL: string }|null} */
            user: null,
            syncing: false,
            lastError: '',
            /** @type {{ prevUid: string, prevEmail: string, newUid: string, newEmail: string }|null} */
            accountConflict: null,
            /** @type {Promise<any>|null} */
            sdkPromise: null,
            /** @type {{ appMod: any, authMod: any, fsMod: any, app: any, auth: any, db: any }|null} */
            modules: null,
            /** @type {(() => void)|null} */
            unsubAuth: null,
            /** @type {ReturnType<typeof setTimeout>|null} */
            debounceTimer: null,
            lastAutoPullAt: 0,
            initializedConfigKey: '',
            listenerReadyKey: ''
        },

        isFileProtocol() {
            return typeof window !== 'undefined' && !!window.location && window.location.protocol === 'file:';
        },

        /**
         * Parses JSON or a raw JS snippet (`const firebaseConfig = { ... };`) safely without eval.
         * @param {string} raw
         */
        parseConfig(raw) {
            if (!raw || typeof raw !== 'string') return null;
            const trimmed = raw.trim();
            if (!trimmed) return null;
            const allowed = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId', 'measurementId'];
            /** @type {Record<string, string>} */
            const extracted = {};
            try {
                const parsed = JSON.parse(trimmed);
                if (parsed && typeof parsed === 'object') {
                    allowed.forEach((key) => {
                        if (typeof parsed[key] === 'string' && parsed[key].trim()) {
                            extracted[key] = parsed[key].trim();
                        }
                    });
                }
            } catch (_) {
                const withoutLineComments = trimmed.replace(/^\s*\/\/.*$/gm, '');
                allowed.forEach((key) => {
                    const re = new RegExp('["\']?' + key + '["\']?\\s*:\\s*["\']([^"\']+)["\']');
                    const match = withoutLineComments.match(re);
                    if (match && match[1] && match[1].trim()) {
                        extracted[key] = match[1].trim();
                    }
                });
            }
            if (!extracted.apiKey || !extracted.authDomain || !extracted.projectId) {
                return null;
            }
            return /** @type {{apiKey: string, authDomain: string, projectId: string, storageBucket?: string, messagingSenderId?: string, appId?: string, measurementId?: string}} */ (extracted);
        },

        /** @returns {{ config?: any, autoSync?: boolean, lastSyncedAt?: number, lastEmail?: string, lastUid?: string }} */
        readStore() {
            try {
                const raw = localStorage.getItem(STORAGE.fbConfig);
                return raw ? (JSON.parse(raw) || {}) : {};
            } catch (_) {
                return {};
            }
        },

        /** @param {{ config?: any, autoSync?: boolean, lastSyncedAt?: number, lastEmail?: string, lastUid?: string }} patch */
        saveStore(patch) {
            try {
                const next = { ...this.readStore(), ...patch };
                localStorage.setItem(STORAGE.fbConfig, JSON.stringify(next));
                return next;
            } catch (_) {
                return {};
            }
        },

        clearOwnership() {
            this.saveStore({ lastUid: '', lastEmail: '', lastSyncedAt: 0 });
            this._state.accountConflict = null;
        },

        hasAccountConflict() {
            return !!this._state.accountConflict;
        },

        /** @param {any} err @param {string} [fallback] */
        formatAuthError(err, fallback = 'ไม่สามารถเข้าสู่ระบบ Google ได้') {
            const code = err && err.code ? String(err.code) : '';
            if (code === 'auth/unauthorized-domain') {
                return 'โดเมนนี้ยังไม่ได้เพิ่มใน Authorized domains ของ Firebase Authentication';
            }
            if (code === 'auth/account-exists-with-different-credential') {
                return 'อีเมลนี้ถูกผูกกับวิธีเข้าสู่ระบบอื่นไว้แล้ว';
            }
            if (code === 'auth/network-request-failed') {
                return 'เชื่อมต่อเครือข่าย Google ไม่สำเร็จ กรุณาลองใหม่';
            }
            return (err && err.message) ? String(err.message) : fallback;
        },

        getConfig() {
            const stored = this.readStore();
            if (stored && stored.config && stored.config.apiKey && stored.config.authDomain && stored.config.projectId) {
                return stored.config;
            }
            return FIREBASE_DEFAULT_CONFIG || null;
        },

        getCustomConfig() {
            const stored = this.readStore();
            return (stored && stored.config) ? stored.config : null;
        },

        /** @param {{apiKey: string, authDomain: string, projectId: string, storageBucket?: string, messagingSenderId?: string, appId?: string, measurementId?: string}} cfg */
        saveConfig(cfg) {
            const prevKey = JSON.stringify(this.getConfig() || null);
            const nextKey = JSON.stringify(cfg);
            this.saveStore({ config: cfg });
            if (prevKey !== nextKey) {
                this.resetSdkState();
            }
        },

        resetSdkState() {
            if (typeof this._state.unsubAuth === 'function') {
                try { this._state.unsubAuth(); } catch (_) { }
            }
            this._state.unsubAuth = null;
            this._state.sdkPromise = null;
            this._state.modules = null;
            this._state.initializedConfigKey = '';
            this._state.listenerReadyKey = '';
            this._state.user = null;
            this._state.lastError = '';
        },

        clearConfig() {
            if (this._state.debounceTimer) {
                clearTimeout(this._state.debounceTimer);
                this._state.debounceTimer = null;
            }
            try { localStorage.removeItem(STORAGE.fbConfig); } catch (_) { }
            this.resetSdkState();
        },

        getAutoSync() {
            const stored = this.readStore();
            return stored.autoSync !== false;
        },

        /** @param {boolean} flag */
        setAutoSync(flag) {
            this.saveStore({ autoSync: !!flag });
        },

        async ensureSdk() {
            const cfg = this.getConfig();
            if (!cfg) {
                throw new Error('กรุณาวาง Firebase Config ก่อนเข้าสู่ระบบ');
            }
            if (this.isFileProtocol()) {
                throw new Error('Google Login ใช้ไม่ได้เมื่อเปิดแบบ file:// กรุณาเปิดผ่าน http:// หรือ https://');
            }
            if (typeof navigator !== 'undefined' && navigator.onLine === false) {
                throw new Error('ขณะนี้เครื่องออฟไลน์อยู่ ไม่สามารถเชื่อมต่อ Google ได้');
            }
            const cfgKey = JSON.stringify(cfg);
            if (this._state.modules && this._state.initializedConfigKey === cfgKey) {
                return this._state.modules;
            }
            if (!this._state.sdkPromise || this._state.initializedConfigKey !== cfgKey) {
                this._state.initializedConfigKey = cfgKey;
                this._state.sdkPromise = (async () => {
                    const [appMod, authMod, fsMod] = await Promise.all([
                        // @ts-ignore - runtime ESM CDN import
                        import(`${FIREBASE_SDK_BASE}/firebase-app.js`),
                        // @ts-ignore - runtime ESM CDN import
                        import(`${FIREBASE_SDK_BASE}/firebase-auth.js`),
                        // @ts-ignore - runtime ESM CDN import
                        import(`${FIREBASE_SDK_BASE}/firebase-firestore.js`)
                    ]);
                    const appName = 'oxflashcards';
                    const existing = appMod.getApps().find((a) => a && a.name === appName);
                    if (existing && typeof appMod.deleteApp === 'function') {
                        try { await appMod.deleteApp(existing); } catch (_) { }
                    }
                    const app = appMod.initializeApp(cfg, appName);
                    const auth = authMod.getAuth(app);
                    const db = fsMod.getFirestore(app);
                    try {
                        await authMod.getRedirectResult(auth);
                    } catch (redirErr) {
                        const redirMsg = this.formatAuthError(redirErr, 'เข้าสู่ระบบ Google แบบเปลี่ยนหน้าไม่สำเร็จ');
                        this._state.lastError = redirMsg;
                        showToast(redirMsg);
                    }
                    const mods = { appMod, authMod, fsMod, app, auth, db };
                    this._state.modules = mods;
                    return mods;
                })();
            }
            try {
                return await this._state.sdkPromise;
            } catch (err) {
                this._state.sdkPromise = null;
                this._state.modules = null;
                throw err;
            }
        },

        /** @param {{ uid: string, email: string }} user */
        detectAccountConflict(user) {
            const store = this.readStore();
            const prevUid = store.lastUid || '';
            const prevEmail = store.lastEmail || '';
            const newUid = user.uid || '';
            const newEmail = user.email || '';
            const isDifferentAccount = prevUid
                ? (!!newUid && prevUid !== newUid)
                : (!!prevEmail && !!newEmail && prevEmail.toLowerCase() !== newEmail.toLowerCase());
            if (isDifferentAccount && OxSync.hasLocalStudyData()) {
                return { prevUid, prevEmail, newUid, newEmail };
            }
            return null;
        },

        /** @param {any} fbUser @param {{ skipAutoSync?: boolean }} [opts] */
        handleAuthUser(fbUser, opts = {}) {
            if (fbUser) {
                this._state.user = {
                    uid: fbUser.uid || '',
                    displayName: fbUser.displayName || '',
                    email: fbUser.email || '',
                    photoURL: fbUser.photoURL || ''
                };
                this._state.lastError = '';
                const conflict = this.detectAccountConflict(this._state.user);
                if (conflict) {
                    this._state.accountConflict = conflict;
                    this.refreshUI();
                    showToast('ตรวจพบการเปลี่ยนบัญชี Google กรุณาเลือกวิธีจัดการข้อมูลเดิมในเครื่อง');
                    if (typeof renderSyncSummary === 'function' && syncModal && syncModal.classList.contains('open')) {
                        renderSyncSummary();
                    }
                    return;
                }
                this._state.accountConflict = null;
                this.saveStore({ lastUid: this._state.user.uid, lastEmail: this._state.user.email });
                this.refreshUI();
                if (!opts.skipAutoSync && this.getAutoSync()) {
                    this.syncWithFirestore({ silent: true });
                }
            } else {
                this._state.user = null;
                this._state.accountConflict = null;
                this.refreshUI();
            }
        },

        async initAuthListener() {
            const cfg = this.getConfig();
            if (!cfg || this.isFileProtocol()) return null;
            if (typeof navigator !== 'undefined' && navigator.onLine === false) return null;
            const cfgKey = JSON.stringify(cfg);
            if (this._state.listenerReadyKey === cfgKey && this._state.unsubAuth) {
                return this._state.modules;
            }
            try {
                const mods = await this.ensureSdk();
                if (typeof this._state.unsubAuth === 'function') {
                    try { this._state.unsubAuth(); } catch (_) { }
                }
                this._state.listenerReadyKey = cfgKey;
                this._state.unsubAuth = mods.authMod.onAuthStateChanged(mods.auth, (fbUser) => {
                    this.handleAuthUser(fbUser);
                });
                if (this._state.lastError) this.refreshUI();
                return mods;
            } catch (_) {
                return null;
            }
        },

        async signInWithGoogle() {
            if (this.isFileProtocol()) {
                this.refreshUI();
                showToast('Google Login ใช้ไม่ได้บน file:// กรุณาเปิดผ่าน http://localhost หรือเว็บ https://');
                return;
            }
            if (!this.getConfig()) {
                showToast('ยังไม่ได้ตั้งค่า Firebase Config สำหรับ Google Sign-In');
                return;
            }
            const btn = /** @type {HTMLButtonElement|null} */ ($('btn-google-signin'));
            if (btn) btn.disabled = true;
            try {
                const mods = await this.initAuthListener();
                if (!mods) throw new Error('เริ่มต้นระบบ Google Sign-In ไม่สำเร็จ');
                const provider = new mods.authMod.GoogleAuthProvider();
                provider.setCustomParameters({ prompt: 'select_account' });
                try {
                    await mods.authMod.signInWithPopup(mods.auth, provider);
                    trackGAEvent('google_signin', { method: 'google_popup' });
                    showToast('เข้าสู่ระบบ Google สำเร็จ กำลังซิงค์ข้อมูล...');
                } catch (err) {
                    const code = err && err.code ? String(err.code) : '';
                    if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
                        showToast('เบราว์เซอร์บล็อกป๊อปอัป กำลังเปลี่ยนหน้าไปล็อกอิน Google...');
                        await mods.authMod.signInWithRedirect(mods.auth, provider);
                    } else if (code === 'auth/popup-closed-by-user') {
                        showToast('ยกเลิกการเข้าสู่ระบบ');
                    } else if (code === 'auth/unauthorized-domain') {
                        throw new Error('โดเมนนี้ยังไม่ได้เพิ่มใน Authorized domains ของ Firebase Authentication');
                    } else {
                        throw err;
                    }
                }
            } catch (err) {
                const msg = this.formatAuthError(err);
                this._state.lastError = msg;
                showToast(msg);
            } finally {
                if (btn) btn.disabled = false;
                this.refreshUI();
            }
        },

        async signOut() {
            if (this._state.debounceTimer) {
                clearTimeout(this._state.debounceTimer);
                this._state.debounceTimer = null;
            }
            try {
                if (this._state.modules && this._state.modules.authMod && this._state.modules.auth) {
                    await this._state.modules.authMod.signOut(this._state.modules.auth);
                }
            } catch (_) { }
            this._state.user = null;
            this._state.accountConflict = null;
            this._state.lastError = '';
            this.refreshUI();
            showToast('ออกจากระบบ Google แล้ว');
        },

        /** @param {'use-cloud'|'merge-local'} mode */
        async resolveAccountConflict(mode) {
            const user = this._state.user;
            if (!user || !this._state.accountConflict) {
                return { ok: false, reason: 'no_conflict' };
            }
            if (mode === 'use-cloud') {
                resetLocalStudyData({ keepGoalTarget: false });
                this.saveStore({ lastUid: user.uid, lastEmail: user.email || '', lastSyncedAt: 0 });
                this._state.accountConflict = null;
                this._state.lastError = '';
                this.refreshUI();
                const res = await this.syncWithFirestore({ silent: true });
                if (res && res.ok) {
                    showToast('ล้างข้อมูลบัญชีเดิมและซิงค์ข้อมูลบัญชีใหม่แล้ว');
                } else {
                    showToast('ล้างข้อมูลบัญชีเดิมแล้ว พร้อมใช้งานสำหรับบัญชีใหม่');
                }
                return res;
            }
            if (mode === 'merge-local') {
                this.saveStore({ lastUid: user.uid, lastEmail: user.email || '' });
                this._state.accountConflict = null;
                this._state.lastError = '';
                this.refreshUI();
                const res = await this.syncWithFirestore({ silent: true });
                if (res && res.ok) {
                    showToast('รวมข้อมูลในเครื่องเข้ากับบัญชีใหม่เรียบร้อยแล้ว');
                } else {
                    showToast('อนุญาตใช้ข้อมูลเดิมร่วมกับบัญชีใหม่แล้ว');
                }
                return res;
            }
            return { ok: false, reason: 'invalid_mode' };
        },

        /** @param {{ silent?: boolean }} [opts] */
        async syncWithFirestore(opts = { silent: false }) {
            const silent = !!(opts && opts.silent);
            if (!this._state.user || this._state.syncing || this.isFileProtocol()) {
                return { ok: false, reason: 'unavailable' };
            }
            if (this._state.accountConflict) {
                if (!silent) {
                    showToast('กรุณาเลือกวิธีจัดการข้อมูลเดิมในเครื่องก่อนเริ่มซิงค์');
                }
                return { ok: false, reason: 'account_conflict' };
            }
            if (typeof navigator !== 'undefined' && navigator.onLine === false) {
                return { ok: false, reason: 'offline' };
            }
            if (this._state.debounceTimer) {
                clearTimeout(this._state.debounceTimer);
                this._state.debounceTimer = null;
            }
            const activeUid = this._state.user.uid;
            const activeEmail = this._state.user.email || '';
            this._state.syncing = true;
            this.refreshUI();
            try {
                const { fsMod, db } = await this.ensureSdk();
                const userRef = fsMod.doc(db, 'oxford_users', activeUid);
                const snap = await fsMod.getDoc(userRef);
                if (!this._state.user || this._state.user.uid !== activeUid) {
                    return { ok: false, reason: 'signed_out' };
                }
                if (snap && snap.exists()) {
                    const remoteData = snap.data();
                    if (remoteData && remoteData.payload) {
                        OxSync.mergePayload(remoteData.payload);
                    }
                }
                const mergedPayload = OxSync.buildPayload();
                const now = Date.now();
                await fsMod.setDoc(userRef, {
                    uid: activeUid,
                    email: activeEmail,
                    updatedAt: now,
                    version: 1,
                    payload: mergedPayload
                }, { merge: true });
                this._state.lastAutoPullAt = now;
                this.saveStore({ lastSyncedAt: now, lastUid: activeUid, lastEmail: activeEmail });
                this._state.lastError = '';
                if (!silent) {
                    showToast('ซิงค์ข้อมูลกับบัญชี Google สำเร็จแล้ว');
                }
                return { ok: true };
            } catch (err) {
                const code = err && err.code ? String(err.code) : '';
                let msg = err && err.message ? err.message : 'เกิดข้อผิดพลาดระหว่างซิงค์';
                if (code === 'permission-denied') {
                    msg = 'ยังไม่ได้ตั้งค่า Firestore Rules ใน Firebase Console';
                } else if (code === 'unavailable') {
                    msg = 'เชื่อมต่อเซิร์ฟเวอร์ Google ไม่ได้ชั่วคราว';
                }
                this._state.lastError = msg;
                if (!silent) {
                    showToast('ซิงค์ไม่สำเร็จ: ' + msg);
                }
                return { ok: false, error: msg };
            } finally {
                this._state.syncing = false;
                if (typeof renderSyncSummary === 'function' && syncModal && syncModal.classList.contains('open')) {
                    renderSyncSummary();
                } else {
                    this.refreshUI();
                }
            }
        },

        /** @param {number} [minIntervalMs] */
        syncIfStale(minIntervalMs = 30000) {
            if (!this._state.user || !this.getAutoSync() || this._state.syncing || this._state.accountConflict || this.isFileProtocol()) return;
            if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
            if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
            if (Date.now() - this._state.lastAutoPullAt < minIntervalMs) return;
            this._state.lastAutoPullAt = Date.now();
            this.syncWithFirestore({ silent: true });
        },

        async clearCloudData() {
            if (this._state.debounceTimer) {
                clearTimeout(this._state.debounceTimer);
                this._state.debounceTimer = null;
            }
            if (!this._state.user || this.isFileProtocol()) return false;
            if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
            try {
                const { fsMod, db } = await this.ensureSdk();
                const userRef = fsMod.doc(db, 'oxford_users', this._state.user.uid);
                if (typeof fsMod.deleteDoc === 'function') {
                    await fsMod.deleteDoc(userRef);
                } else {
                    await fsMod.setDoc(userRef, {
                        uid: this._state.user.uid,
                        email: this._state.user.email || '',
                        updatedAt: Date.now(),
                        version: 1,
                        payload: OxSync.buildPayload()
                    });
                }
                this._state.lastAutoPullAt = Date.now();
                this.saveStore({ lastSyncedAt: 0 });
                this._state.lastError = '';
                this.refreshUI();
                return true;
            } catch (_) {
                return false;
            }
        },

        scheduleAutoSync() {
            if (!this._state.user || !this.getAutoSync() || this._state.accountConflict || this.isFileProtocol()) return;
            if (this._state.debounceTimer) {
                clearTimeout(this._state.debounceTimer);
            }
            this._state.debounceTimer = setTimeout(() => {
                this._state.debounceTimer = null;
                this.syncWithFirestore({ silent: true });
            }, 2500);
        },

        /** @param {HTMLImageElement|null} imgEl @param {Element|null} iconEl @param {string} photoURL */
        _applyButtonAvatar(imgEl, iconEl, photoURL) {
            const iconHtmlEl = /** @type {HTMLElement|null} */ (iconEl);
            if (!imgEl) return;
            if (photoURL) {
                imgEl.onerror = () => {
                    imgEl.hidden = true;
                    if (iconHtmlEl) iconHtmlEl.style.display = '';
                };
                imgEl.src = photoURL;
                imgEl.hidden = false;
                if (iconHtmlEl) iconHtmlEl.style.display = 'none';
            } else {
                imgEl.hidden = true;
                imgEl.removeAttribute('src');
                if (iconHtmlEl) iconHtmlEl.style.display = '';
            }
        },

        refreshUI() {
            const warn = $('fb-file-protocol-warn');
            if (warn) warn.hidden = !this.isFileProtocol();

            const autoToggle = /** @type {HTMLInputElement|null} */ ($('google-auto-sync-toggle'));
            if (autoToggle) autoToggle.checked = this.getAutoSync();

            const signedOutBox = $('google-signed-out-box');
            const signedInBox = $('google-signed-in-box');
            const conflictBox = $('sync-account-conflict-box');
            const conflictDesc = $('sync-conflict-desc');
            const syncNowBtn = /** @type {HTMLButtonElement|null} */ ($('btn-google-sync-now'));
            const profilePhoto = /** @type {HTMLImageElement|null} */ ($('google-profile-photo'));
            const profileFallback = $('google-profile-fallback');
            const profileName = $('google-profile-name');
            const profileEmail = $('google-profile-email');
            const syncBadge = $('google-sync-badge');
            const statusText = $('sync-status-text');
            const railAvatar = /** @type {HTMLImageElement|null} */ ($('rail-sync-avatar'));
            const railBtn = $('btn-rail-sync');
            const railLabel = $('rail-sync-label');
            const mobSyncBtn = $('mob-sync-btn');
            const user = this._state.user;
            const conflict = this._state.accountConflict;

            if (user) {
                if (signedOutBox) signedOutBox.hidden = true;
                if (signedInBox) signedInBox.hidden = false;
                if (profileName) profileName.textContent = user.displayName || user.email || 'บัญชี Google';
                if (profileEmail) profileEmail.textContent = user.email || '';

                if (conflictBox) {
                    conflictBox.hidden = !conflict;
                    const useCloudBtn = /** @type {HTMLButtonElement|null} */ ($('btn-conflict-use-cloud'));
                    const mergeLocalBtn = /** @type {HTMLButtonElement|null} */ ($('btn-conflict-merge-local'));
                    if (conflict) {
                        if (useCloudBtn) useCloudBtn.disabled = false;
                        if (mergeLocalBtn) mergeLocalBtn.disabled = false;
                    }
                    if (conflict && conflictDesc) {
                        const prevLabel = conflict.prevEmail ? ` (${conflict.prevEmail})` : '';
                        const nextLabel = conflict.newEmail ? ` (${conflict.newEmail})` : '';
                        conflictDesc.textContent = `ในเครื่องยังมีประวัติคำศัพท์จากบัญชีเดิม${prevLabel} อยู่ หากรวมทันทีข้อมูลอาจปนกับบัญชีใหม่${nextLabel} กรุณาเลือกวิธีจัดการ:`;
                    }
                }
                if (syncNowBtn) syncNowBtn.disabled = !!conflict;

                const shortName = (user.displayName || '').trim().split(/\s+/)[0] || '';
                const statusTitle = conflict
                    ? `รอยืนยันการสลับบัญชี: ${user.email || user.displayName || 'บัญชีใหม่'}`
                    : `บัญชี Google: ${user.email || user.displayName || 'เชื่อมต่อแล้ว'}`;
                if (railBtn) {
                    railBtn.classList.add('is-signed-in');
                    railBtn.title = statusTitle;
                }
                if (mobSyncBtn) {
                    mobSyncBtn.classList.add('is-signed-in');
                    mobSyncBtn.title = statusTitle;
                }
                if (railLabel) {
                    railLabel.textContent = conflict ? 'ยืนยันบัญชี' : (shortName ? shortName.slice(0, 10) : 'เชื่อมต่อแล้ว');
                }

                const initial = ((user.displayName || user.email || 'G').trim().charAt(0) || 'G').toUpperCase();
                if (profilePhoto && profileFallback) {
                    if (user.photoURL) {
                        profilePhoto.onerror = () => {
                            profilePhoto.hidden = true;
                            profileFallback.hidden = false;
                            profileFallback.textContent = initial;
                        };
                        profilePhoto.src = user.photoURL;
                        profilePhoto.hidden = false;
                        profileFallback.hidden = true;
                    } else {
                        profilePhoto.hidden = true;
                        profileFallback.hidden = false;
                        profileFallback.textContent = initial;
                    }
                }

                const store = this.readStore();
                if (syncBadge) {
                    if (conflict) {
                        syncBadge.textContent = 'รอยืนยันสลับบัญชี';
                        syncBadge.className = 'sync-badge warn';
                        syncBadge.title = 'กรุณาเลือกว่าจะล้างข้อมูลเดิมหรือรวมเข้าบัญชีใหม่';
                    } else if (this._state.syncing) {
                        syncBadge.textContent = 'กำลังซิงค์...';
                        syncBadge.className = 'sync-badge pending';
                    } else if (this._state.lastError) {
                        syncBadge.textContent = 'ซิงค์ติดขัด';
                        syncBadge.className = 'sync-badge warn';
                        syncBadge.title = this._state.lastError;
                    } else if (store.lastSyncedAt) {
                        const dt = new Date(store.lastSyncedAt);
                        const hh = String(dt.getHours()).padStart(2, '0');
                        const mm = String(dt.getMinutes()).padStart(2, '0');
                        syncBadge.textContent = `ซิงค์แล้ว ${hh}:${mm}`;
                        syncBadge.className = 'sync-badge ok';
                        syncBadge.title = '';
                    } else {
                        syncBadge.textContent = 'เชื่อมต่อแล้ว';
                        syncBadge.className = 'sync-badge ok';
                    }
                }

                if (statusText) {
                    if (conflict) {
                        statusText.textContent = 'ตรวจพบการเปลี่ยนบัญชี Google กรุณาเลือกวิธีจัดการข้อมูล';
                    } else if (this._state.syncing) {
                        statusText.textContent = 'กำลังซิงก์ข้อมูลกับ Google...';
                    } else if (this._state.lastError) {
                        statusText.textContent = this._state.lastError;
                    } else if (store.lastSyncedAt) {
                        const dt = new Date(store.lastSyncedAt);
                        const hh = String(dt.getHours()).padStart(2, '0');
                        const mm = String(dt.getMinutes()).padStart(2, '0');
                        statusText.textContent = `เชื่อมต่อแล้ว · อัปเดตล่าสุด ${hh}:${mm} น.`;
                    } else {
                        statusText.textContent = 'เชื่อมต่อบัญชี Google แล้ว';
                    }
                }

                this._applyButtonAvatar(railAvatar, null, user.photoURL || '');
            } else {
                if (signedOutBox) signedOutBox.hidden = false;
                if (signedInBox) signedInBox.hidden = true;
                if (conflictBox) conflictBox.hidden = true;
                if (syncNowBtn) syncNowBtn.disabled = false;
                if (railBtn) {
                    railBtn.classList.remove('is-signed-in');
                    railBtn.title = 'เข้าสู่ระบบด้วย Google';
                }
                if (mobSyncBtn) {
                    mobSyncBtn.classList.remove('is-signed-in');
                    mobSyncBtn.title = 'เข้าสู่ระบบด้วย Google';
                }
                if (railLabel) railLabel.textContent = 'ล็อกอิน';
                if (statusText) {
                    statusText.textContent = this._state.lastError || 'บันทึกความคืบหน้าข้ามอุปกรณ์';
                }
                this._applyButtonAvatar(railAvatar, null, '');
            }

            const dotState = !user
                ? ''
                : (conflict || this._state.lastError)
                    ? 'warn'
                    : this._state.syncing
                        ? 'pending'
                        : 'online';
            ['rail-sync-dot', 'mob-sync-dot'].forEach((id) => {
                const dot = $(id);
                if (!dot) return;
                dot.classList.remove('online', 'is-synced', 'pending', 'warn');
                if (dotState) dot.classList.add(dotState);
            });
            if (typeof onGoogleUiRefreshHook === 'function') {
                onGoogleUiRefreshHook(this._state);
            }
        }
    };

    scheduleGoogleAutoSync = () => OxGoogleSync.scheduleAutoSync();
    isGoogleSignedIn = () => !!OxGoogleSync._state.user;
    clearGoogleCloudData = () => OxGoogleSync.clearCloudData();
    clearGoogleOwnership = () => OxGoogleSync.clearOwnership();

    const syncModal = $('sync-modal');
    function renderSyncSummary() {
        OxGoogleSync.refreshUI();
    }

    function openSyncModal() {
        if (!syncModal) return;
        renderSyncSummary();
        syncModal.classList.add('open');
        syncModal.setAttribute('aria-hidden', 'false');
        OxGoogleSync.syncIfStale(15000);
    }
    function closeSyncModal() {
        if (!syncModal) return;
        syncModal.classList.remove('open');
        syncModal.setAttribute('aria-hidden', 'true');
    }

    document.querySelectorAll('.sync-open-btn').forEach(btn => btn.addEventListener('click', openSyncModal));
    const btnSyncClose = $('btn-sync-close');
    if (btnSyncClose) btnSyncClose.addEventListener('click', closeSyncModal);
    if (syncModal) syncModal.addEventListener('click', (e) => { if (e.target === syncModal) closeSyncModal(); });

    $('btn-google-signin')?.addEventListener('click', () => {
        OxGoogleSync.signInWithGoogle();
    });

    $('btn-google-sync-now')?.addEventListener('click', () => {
        OxGoogleSync.syncWithFirestore({ silent: false });
    });

    $('btn-google-signout')?.addEventListener('click', () => {
        OxGoogleSync.signOut();
    });

    async function handleConflictResolutionClick(mode) {
        const useCloudBtn = /** @type {HTMLButtonElement|null} */ ($('btn-conflict-use-cloud'));
        const mergeLocalBtn = /** @type {HTMLButtonElement|null} */ ($('btn-conflict-merge-local'));
        const activeConflict = OxGoogleSync._state.accountConflict;
        if (!activeConflict) return;
        if (useCloudBtn) useCloudBtn.disabled = true;
        if (mergeLocalBtn) mergeLocalBtn.disabled = true;
        try {
            await OxGoogleSync.resolveAccountConflict(mode);
        } finally {
            // Only re-enable if no new conflict superseded this one during async sync
            if (!OxGoogleSync._state.accountConflict || OxGoogleSync._state.accountConflict === activeConflict) {
                if (useCloudBtn) useCloudBtn.disabled = false;
                if (mergeLocalBtn) mergeLocalBtn.disabled = false;
            }
            if (typeof renderSyncSummary === 'function') renderSyncSummary();
        }
    }

    $('btn-conflict-use-cloud')?.addEventListener('click', () => handleConflictResolutionClick('use-cloud'));
    $('btn-conflict-merge-local')?.addEventListener('click', () => handleConflictResolutionClick('merge-local'));

    $('google-auto-sync-toggle')?.addEventListener('change', (e) => {
        const el = /** @type {HTMLInputElement|null} */ (e.target);
        if (!el) return;
        OxGoogleSync.setAutoSync(el.checked);
        if (el.checked && OxGoogleSync._state.user) {
            OxGoogleSync.syncWithFirestore({ silent: true });
        }
        showToast(el.checked ? 'เปิดซิงค์อัตโนมัติแล้ว' : 'ปิดซิงค์อัตโนมัติชั่วคราว');
    });

    document.addEventListener('visibilitychange', () => {
        const isHidden = document.visibilityState !== 'visible';
        document.body.classList.toggle('is-hidden-tab', isHidden);
        if (isHidden) {
            storage.flush();
        } else {
            if (SoundFX.audioCtx && SoundFX.audioCtx.state === 'suspended') {
                SoundFX.audioCtx.resume()?.catch?.(() => { });
            }
            OxGoogleSync.syncIfStale(30000);
        }
    });

    // Unlock Web Audio cleanly on first user pointer gesture (iOS / Safari / autoplay policy)
    document.addEventListener('pointerdown', () => {
        if (!isSoundMuted && soundVolume > 0) SoundFX.init();
    }, { once: true, passive: true });

    window.addEventListener('online', () => {
        OxGoogleSync.syncIfStale(5000);
    });

    OxGoogleSync.refreshUI();
    OxGoogleSync.initAuthListener();

    // Global Keyboard Shortcuts: '/' or Ctrl+K for Quick Search, 'S' for Star card, Esc to close
    document.addEventListener('keydown', (e) => {
        if (quickSearchModal && quickSearchModal.classList.contains('open')) {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeQuickSearch();
            }
            return;
        }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            openQuickSearch();
            return;
        }
        if (e.target instanceof HTMLElement && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === '/') {
            e.preventDefault();
            openQuickSearch();
            return;
        }
        if (e.key.toLowerCase() === 's' && currentScreen === 'app' && session) {
            e.preventDefault();
            handleCardStarClick();
        }
    });

    /* =========================================================
     * Duolingo-Style Learn Path, 6-Category Sidebar, Dictionary,
     * Quiz Hub, Profile & Daily Quests Engine (No Hearts)
     * ========================================================= */
    const LEARN_STORAGE_KEY = 'ox3k_learn_path_v1';

    const TOPIC_ORDER = [
        'basics', 'people', 'home', 'food', 'travel', 'body',
        'nature', 'feelings', 'education', 'work', 'society', 'actions'
    ];

    const TOPIC_META = {
        basics: { th: 'พื้นฐานและการสื่อสาร', en: 'Basics & Time', palette: 'emerald', tip: 'คำศัพท์พื้นฐานที่ใช้ระบุเวลา ตัวเลข สี และเชื่อมประโยคในชีวิตประจำวัน' },
        people: { th: 'ผู้คน ครอบครัว และชุมชน', en: 'People & Community', palette: 'sky', tip: 'คำเรียกบุคคล ครอบครัว ความสัมพันธ์ ลักษณะภายนอก และการเข้าสังคม' },
        home: { th: 'บ้าน สิ่งของ และชีวิตประจำวัน', en: 'Home & Daily Life', palette: 'teal', tip: 'ห้องและของใช้ในบ้าน เสื้อผ้า อุปกรณ์ และการจับจ่ายในชีวิตประจำวัน' },
        food: { th: 'อาหาร เครื่องดื่ม และโภชนาการ', en: 'Food & Dining', palette: 'amber', tip: 'ชื่ออาหาร ผักผลไม้ รสชาติ วิธีปรุง และคำศัพท์เวลาสั่งอาหาร' },
        travel: { th: 'การเดินทาง สถานที่ และเมือง', en: 'Travel & Places', palette: 'sky', tip: 'ยานพาหนะ การถามทาง เมือง สถานที่สำคัญ และการเดินทางท่องเที่ยว' },
        body: { th: 'ร่างกาย สุขภาพ และกีฬา', en: 'Body, Health & Sport', palette: 'rose', tip: 'อวัยวะร่างกาย อาการป่วย การรักษาพยาบาล การออกกำลังกาย และกีฬา' },
        nature: { th: 'ธรรมชาติ สัตว์ และสิ่งแวดล้อม', en: 'Nature & Environment', palette: 'emerald', tip: 'สภาพอากาศ ภูมิประเทศ สัตว์ พืช พลังงาน และสิ่งแวดล้อมรอบตัว' },
        feelings: { th: 'อารมณ์ ความคิด และบุคลิกภาพ', en: 'Feelings & Mind', palette: 'violet', tip: 'ความรู้สึก อารมณ์ ลักษณะนิสัย และคำกริยาเกี่ยวกับความคิดและจิตใจ' },
        education: { th: 'การศึกษา ภาษา และศิลปะ', en: 'Education & Culture', palette: 'violet', tip: 'การเรียนการสอน หนังสือ ภาษา วิทยาศาสตร์ ดนตรี และศิลปวัฒนธรรม' },
        work: { th: 'การงาน อาชีพ และธุรกิจ', en: 'Work & Business', palette: 'amber', tip: 'อาชีพ สำนักงาน การบริหารงาน การเงิน ธนาคาร การค้า และเศรษฐกิจ' },
        society: { th: 'สังคม กฎหมาย ข่าวสาร และเทคโนโลยี', en: 'Society & Tech', palette: 'teal', tip: 'ข่าวสาร กฎหมาย การเมือง สังคม และคำศัพท์เทคโนโลยีดิจิทัล' },
        actions: { th: 'กริยาและคำอธิบายสำคัญ', en: 'Core Actions & Qualities', palette: 'emerald', tip: 'คำกริยา คำคุณศัพท์ และคำกริยาวิเศษณ์สำคัญที่พบบ่อยในทุกบริบท' }
    };

    const QUEST_DEFS = [
        { id: 'q_xp', title: 'สะสมครบ 30 XP วันนี้', icon: '⚡', target: 30, reward: 15, metric: 'xpToday' },
        { id: 'q_stage', title: 'ผ่านด่านเรียนรู้ 1 ด่าน', icon: '🎯', target: 1, reward: 20, metric: 'stagesToday' },
        { id: 'q_acc', title: 'ทำคะแนน 80%+ ใน 1 รอบ', icon: '🌟', target: 1, reward: 25, metric: 'perfectToday' }
    ];

    const PATH_CURVE_OFFSETS = [0, -44, -66, -44, 0, 44, 66, 44];

    function defaultLearnState() {
        return {
            xp: 0,
            updatedAt: 0,
            activeSection: 'A1',
            /** @type {Record<string, { lessonsDone: number, stars: number, bestAcc: number, completedAt: number, legendary: boolean }>} */
            completedStages: {},
            /** @type {string[]} */
            claimedChests: [],
            /** @type {string[]} */
            unlockedUnits: [],
            /** @type {Record<string, number>} */
            stageReplays: {},
            dailyQuests: {
                date: getTodayDateString(),
                xpToday: 0,
                stagesToday: 0,
                perfectToday: 0,
                /** @type {string[]} */
                claimed: []
            }
        };
    }

    function normalizeLearnState(raw) {
        const base = defaultLearnState();
        if (!raw || typeof raw !== 'object') return base;
        base.xp = Math.max(0, Number(raw.xp) || 0);
        base.updatedAt = Math.max(0, Number(raw.updatedAt) || 0);
        if (['A1', 'A2', 'B1', 'B2'].includes(raw.activeSection)) {
            base.activeSection = raw.activeSection;
        }
        if (raw.completedStages && typeof raw.completedStages === 'object') {
            Object.entries(raw.completedStages).forEach(([sid, val]) => {
                if (val && typeof val === 'object') {
                    const rawDone = typeof val.lessonsDone === 'number' && Number.isFinite(val.lessonsDone)
                        ? Math.max(0, Math.min(6, Math.round(val.lessonsDone)))
                        : 6;
                    base.completedStages[sid] = {
                        lessonsDone: rawDone,
                        stars: Math.min(3, Math.max(1, Number(val.stars) || 1)),
                        bestAcc: Math.min(100, Math.max(0, Number(val.bestAcc) || 0)),
                        completedAt: Number(val.completedAt) || 0,
                        legendary: Boolean(val.legendary)
                    };
                }
            });
        }
        if (Array.isArray(raw.claimedChests)) {
            base.claimedChests = Array.from(new Set(raw.claimedChests.filter(x => typeof x === 'string')));
        }
        if (Array.isArray(raw.unlockedUnits)) {
            base.unlockedUnits = Array.from(new Set(raw.unlockedUnits.filter(x => typeof x === 'string')));
        }
        if (raw.stageReplays && typeof raw.stageReplays === 'object') {
            Object.entries(raw.stageReplays).forEach(([sid, cnt]) => {
                const n = Number(cnt);
                if (sid && Number.isFinite(n) && n > 0) base.stageReplays[sid] = Math.round(n);
            });
        }
        const today = getTodayDateString();
        if (raw.dailyQuests && typeof raw.dailyQuests === 'object' && raw.dailyQuests.date === today) {
            base.dailyQuests = {
                date: today,
                xpToday: Math.max(0, Number(raw.dailyQuests.xpToday) || 0),
                stagesToday: Math.max(0, Number(raw.dailyQuests.stagesToday) || 0),
                perfectToday: Math.max(0, Number(raw.dailyQuests.perfectToday) || 0),
                claimed: Array.isArray(raw.dailyQuests.claimed)
                    ? Array.from(new Set(raw.dailyQuests.claimed.filter(x => typeof x === 'string')))
                    : []
            };
        }
        return base;
    }

    let learnState = normalizeLearnState(storage.get(LEARN_STORAGE_KEY, null));

    /** Session anti-repeat counters & recently shown history per stageId */
    /** @type {Record<string, number>} */
    const sessionStageReplayCounter = {};
    /** @type {Record<string, string[]>} */
    const recentStageDialogueKeys = {};
    /** @type {Record<string, number>} */
    const stageInsightRotation = {};

    function ensureTodayQuests() {
        const today = getTodayDateString();
        if (!learnState.dailyQuests || learnState.dailyQuests.date !== today) {
            learnState.dailyQuests = {
                date: today,
                xpToday: 0,
                stagesToday: 0,
                perfectToday: 0,
                claimed: []
            };
        }
    }

    function saveLearnState(sync = true) {
        ensureTodayQuests();
        learnState.updatedAt = Date.now();
        if (sync) {
            storage.set(LEARN_STORAGE_KEY, learnState);
            if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
        } else {
            storage.setBatched(LEARN_STORAGE_KEY, learnState);
        }
    }

    /** Builds deterministic Section -> Topic Units -> S-Curve Stages from wordsData. */
    const OxCurriculum = (() => {
        const levels = ['A1', 'A2', 'B1', 'B2'];
        const sections = {};
        const unitById = new Map();
        const stageById = new Map();

        // Collect unique entries cleanly sorted alphabetically per (cefr, topic)
        const buckets = {};
        levels.forEach(lvl => {
            buckets[lvl] = {};
            TOPIC_ORDER.forEach(t => { buckets[lvl][t] = []; });
        });

        for (let i = 0; i < totalWords; i++) {
            const w = wordsData[i];
            if (keyToIndex.get(keyOf(w)) !== i) continue;
            const lvl = levels.includes(w.cefr) ? w.cefr : 'A1';
            const topic = TOPIC_META[w.topic] ? w.topic : 'actions';
            buckets[lvl][topic].push(i);
        }

        const palettes = ['emerald', 'sky', 'violet', 'amber', 'teal', 'rose'];

        levels.forEach((lvl) => {
            const units = [];
            let unitCounter = 0;

            TOPIC_ORDER.forEach((topicId) => {
                const indices = buckets[lvl][topicId];
                if (!indices || indices.length === 0) return;

                // Pedagogical readiness ordering: shorter sentences, simpler core words & varied POS first (100% deterministic)
                const readinessScore = (idx) => {
                    const item = wordsData[idx];
                    const exWords = item && item.example ? item.example.trim().split(/\s+/).length : 7;
                    const wLen = String(item?.word || '').trim().length;
                    const hasPhrase = String(item?.word || '').includes(' ') ? 3 : 0;
                    const hasFamily = Array.isArray(item?.wordFamily) && item.wordFamily.length ? 0 : 1;
                    return exWords * 4 + Math.min(14, wLen) + hasPhrase + hasFamily;
                };
                indices.sort((a, b) => {
                    const diff = readinessScore(a) - readinessScore(b);
                    if (diff !== 0) return diff;
                    return String(wordsData[a].word).localeCompare(String(wordsData[b].word));
                });

                // Lightly interleave parts of speech within every 12-word slice so lessons feel varied
                const groupedByPos = new Map();
                indices.forEach((idx) => {
                    const p = wordsData[idx]?.partOfSpeech || 'other';
                    if (!groupedByPos.has(p)) groupedByPos.set(p, []);
                    groupedByPos.get(p).push(idx);
                });
                const interleaved = [];
                const posKeys = Array.from(groupedByPos.keys());
                let remaining = indices.length;
                while (remaining > 0) {
                    let pushed = false;
                    posKeys.forEach((pk) => {
                        const arr = groupedByPos.get(pk);
                        if (arr && arr.length) {
                            interleaved.push(arr.shift());
                            remaining--;
                            pushed = true;
                        }
                    });
                    if (!pushed) break;
                }
                if (interleaved.length === indices.length) {
                    indices.splice(0, indices.length, ...interleaved);
                }

                const topicMeta = TOPIC_META[topicId];
                // Split large buckets cleanly into ~42-50 word sub-units so every Unit has 3-6 snappy stages
                const maxPerUnit = 52;
                const chunkCount = indices.length > 60 ? Math.ceil(indices.length / 44) : 1;
                const perChunk = Math.ceil(indices.length / chunkCount);

                for (let c = 0; c < chunkCount; c++) {
                    const unitWords = indices.slice(c * perChunk, (c + 1) * perChunk);
                    if (unitWords.length === 0) continue;

                    unitCounter++;
                    const unitId = `${lvl}_${topicId}_${c + 1}`;
                    const partSuffix = chunkCount > 1 ? ` (${c + 1}/${chunkCount})` : '';
                    const palette = c === 0 ? topicMeta.palette : palettes[(unitCounter - 1) % palettes.length];
                    const stages = [];

                    // Split unit into ~10-12 word lesson chunks
                    const stageTargetSize = unitWords.length <= 18 ? Math.ceil(unitWords.length / 2) : 11;
                    const lessonChunks = [];
                    for (let pos = 0; pos < unitWords.length; pos += stageTargetSize) {
                        lessonChunks.push(unitWords.slice(pos, pos + stageTargetSize));
                    }

                    // Build S-curve nodes cleanly with deterministic 3-6 rounds per stage
                    let stageSeq = 0;
                    const chestInsertAfter = lessonChunks.length >= 2 ? 1 : 0;
                    const calcRounds = (nType, wc, seq) => {
                        if (nType === 'audio') return wc >= 11 ? 4 : 3;
                        if (nType === 'review') return wc >= 30 ? 5 : 4;
                        if (nType === 'boss') return wc >= 32 ? 6 : (wc >= 22 ? 5 : 3);
                        if (seq === 1) return 3;
                        if (wc >= 11 && seq % 3 === 0) return 6;
                        return wc >= 11 ? 5 : 4;
                    };

                    lessonChunks.forEach((chunk, lIdx) => {
                        stageSeq++;
                        const isAudio = lIdx > 0 && lIdx % 2 === 1 && lessonChunks.length >= 3;
                        const nodeType = isAudio ? 'audio' : 'lesson';
                        const stId = `${unitId}_s${stageSeq}`;
                        const stageObj = {
                            id: stId,
                            unitId,
                            kind: 'stage',
                            nodeType,
                            lessonsTotal: calcRounds(nodeType, chunk.length, stageSeq),
                            label: isAudio ? `ฝึกฟัง · ด่าน ${stageSeq}` : `บทเรียน ${stageSeq}`,
                            wordIndices: chunk,
                            prevStageId: stages.filter(n => n.kind === 'stage').slice(-1)[0]?.id || null
                        };
                        stages.push(stageObj);
                        stageById.set(stId, stageObj);

                        if (lIdx === chestInsertAfter) {
                            const chestId = `${unitId}_chest`;
                            stages.push({
                                id: chestId,
                                unitId,
                                kind: 'chest',
                                nodeType: 'chest',
                                label: 'หีบสมบัติ +30 XP',
                                requiresStageId: stId
                            });
                        }
                    });

                    // Add Unit Review node if unit has >= 22 words
                    if (unitWords.length >= 22) {
                        stageSeq++;
                        const revId = `${unitId}_rev`;
                        const prevId = stages.filter(n => n.kind === 'stage').slice(-1)[0]?.id || null;
                        const revObj = {
                            id: revId,
                            unitId,
                            kind: 'stage',
                            nodeType: 'review',
                            lessonsTotal: calcRounds('review', unitWords.length, stageSeq),
                            label: 'ทบทวนคำศัพท์',
                            wordIndices: unitWords,
                            prevStageId: prevId
                        };
                        stages.push(revObj);
                        stageById.set(revId, revObj);
                    }

                    // Always finish each Unit with Boss Challenge
                    const bossId = `${unitId}_boss`;
                    const prevBeforeBoss = stages.filter(n => n.kind === 'stage').slice(-1)[0]?.id || null;
                    const bossObj = {
                        id: bossId,
                        unitId,
                        kind: 'stage',
                        nodeType: 'boss',
                        lessonsTotal: calcRounds('boss', unitWords.length, stageSeq + 1),
                        label: 'บททดสอบประจำหน่วย',
                        wordIndices: unitWords,
                        prevStageId: prevBeforeBoss,
                        isBoss: true
                    };
                    stages.push(bossObj);
                    stageById.set(bossId, bossObj);

                    const unitObj = {
                        id: unitId,
                        cefr: lvl,
                        unitNumber: unitCounter,
                        topicId,
                        title: `${topicMeta.th}${partSuffix}`,
                        subtitle: `${topicMeta.en} · ${unitWords.length} คำ`,
                        tip: topicMeta.tip,
                        palette,
                        wordIndices: unitWords,
                        nodes: stages,
                        bossStageId: bossId
                    };
                    units.push(unitObj);
                    unitById.set(unitId, unitObj);
                }
            });

            sections[lvl] = units;
        });

        return {
            levels,
            sections,
            unitById,
            stageById,
            getStats() {
                const counts = {};
                levels.forEach(l => {
                    counts[l] = {
                        units: sections[l].length,
                        words: sections[l].reduce((s, u) => s + u.wordIndices.length, 0),
                        stages: sections[l].reduce((s, u) => s + u.nodes.filter(n => n.kind === 'stage').length, 0)
                    };
                });
                return counts;
            }
        };
    })();

    function getStageTotalRounds(stageOrId) {
        const st = typeof stageOrId === 'string' ? OxCurriculum.stageById.get(stageOrId) : stageOrId;
        return st && st.lessonsTotal ? Math.min(6, Math.max(3, st.lessonsTotal)) : 4;
    }

    function getStageDoneRounds(stageId) {
        const info = learnState.completedStages[stageId];
        if (!info) return 0;
        const total = getStageTotalRounds(stageId);
        return typeof info.lessonsDone === 'number' ? Math.min(total, Math.max(0, info.lessonsDone)) : total;
    }

    function isStagePassedFull(stageId) {
        return !!stageId && getStageDoneRounds(stageId) >= getStageTotalRounds(stageId);
    }

    function isUnitUnlocked(unit) {
        if (!unit) return false;
        if (unit.unitNumber === 1) return true;
        if (learnState.unlockedUnits.includes(unit.id)) return true;
        const secUnits = OxCurriculum.sections[unit.cefr] || [];
        const prevUnit = secUnits[unit.unitNumber - 2];
        if (!prevUnit) return true;
        return isStagePassedFull(prevUnit.bossStageId);
    }

    function isNodeUnlocked(node, unit) {
        if (!isUnitUnlocked(unit)) return false;
        if (node.kind === 'chest') {
            return isStagePassedFull(node.requiresStageId);
        }
        if (!node.prevStageId) return true;
        return isStagePassedFull(node.prevStageId);
    }

    const NODE_ICONS = {
        lesson: `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        audio: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
        review: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>`,
        boss: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
        chest: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M3 11h18"/><path d="M10 11v3h4v-3"/><path d="M6 8c0-2.5 2.5-4 6-4s6 1.5 6 4"/></svg>`,
        done: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
    };

    const MASCOT_SVG = `<svg class="ox-mascot-svg" width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
    <ellipse cx="48" cy="86" rx="28" ry="5.5" fill="rgba(15,23,42,0.14)"/>
    <g class="ox-body-float">
      <g class="ox-wing-l">
        <path d="M24 48c-8 4-9 18-1 22 4 2 7-4 6-12Z" fill="#16a34a"/>
      </g>
      <g class="ox-wing-r">
        <path d="M72 48c8 4 9 18 1 22-4 2-7-4-6-12Z" fill="#16a34a"/>
      </g>
      <path d="M28 28l-6-8 10 4Z" fill="#15803d"/>
      <path d="M68 28l6-8-10 4Z" fill="#15803d"/>
      <rect x="24" y="27" width="48" height="51" rx="24" fill="#22c55e"/>
      <path d="M31 30c0-11 34-11 34 0" fill="#16a34a"/>
      <ellipse cx="48" cy="60" rx="14" ry="12" fill="#86efac" opacity="0.55"/>
      <g class="ox-eyes">
        <circle cx="38" cy="46" r="10.2" fill="#fff"/>
        <circle cx="58" cy="46" r="10.2" fill="#fff"/>
        <circle cx="39" cy="46" r="4.6" fill="#0f172a"/>
        <circle cx="57" cy="46" r="4.6" fill="#0f172a"/>
        <circle cx="40.6" cy="44.2" r="1.7" fill="#fff"/>
        <circle cx="58.6" cy="44.2" r="1.7" fill="#fff"/>
      </g>
      <circle cx="29" cy="54" r="3.4" fill="#fda4af" opacity="0.7"/>
      <circle cx="67" cy="54" r="3.4" fill="#fda4af" opacity="0.7"/>
      <path d="M43.5 53.5h9l-4.5 6.5-4.5-6.5Z" fill="#f59e0b"/>
      <g class="ox-book-pages">
        <rect x="27" y="65" width="42" height="14" rx="4.5" fill="#0284c7"/>
        <rect x="29" y="64" width="18" height="12" rx="2.5" fill="#f8fafc"/>
        <rect x="49" y="64" width="18" height="12" rx="2.5" fill="#e2e8f0"/>
        <path d="M48 64v15" stroke="#0369a1" stroke-width="2"/>
      </g>
    </g>
  </svg>`;

    /* =========================================================
     * Render Learn Path & Modals (Guidebook + Treasure Chest)
     * ========================================================= */
    const learnUnitsContainer = $('learn-units-container');
    const learnSectionTabs = $('learn-section-tabs');
    const learnOverallLabel = $('learn-overall-label');
    const learnActiveUnitPill = $('learn-active-unit-pill');
    const learnActiveUnitText = $('learn-active-unit-text');
    const guidebookModal = $('guidebook-modal');
    const chestModal = $('chest-modal');
    let pendingChestId = null;
    let lastRenderedPathSig = '';
    let pendingScrollToCurrentLearn = false;
    let learnActiveUnitId = null;

    function renderStageProgressRingSvg(doneCount, totalCount) {
        const total = Math.max(3, Math.min(6, totalCount || 4));
        const done = Math.max(0, Math.min(total, doneCount || 0));
        const cx = 48;
        const cy = 46;
        const r = 43;
        const stepDeg = 360 / total;
        const gapDeg = 14;
        const segs = [];
        for (let i = 0; i < total; i++) {
            const a1 = (-90 + i * stepDeg + gapDeg / 2) * (Math.PI / 180);
            const a2 = (-90 + (i + 1) * stepDeg - gapDeg / 2) * (Math.PI / 180);
            const x1 = (cx + r * Math.cos(a1)).toFixed(2);
            const y1 = (cy + r * Math.sin(a1)).toFixed(2);
            const x2 = (cx + r * Math.cos(a2)).toFixed(2);
            const y2 = (cy + r * Math.sin(a2)).toFixed(2);
            const cls = i < done ? 'ring-seg is-filled' : 'ring-seg';
            segs.push(`<path class="${cls}" d="M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}"/>`);
        }
        return `<svg class="path-node-ring" viewBox="0 0 96 96" aria-hidden="true">${segs.join('')}</svg>`;
    }

    function buildLearnPathSignature(sec, units, knownCnt, revCnt = 0) {
        const doneSummary = Object.entries(learnState.completedStages)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([k, v]) => `${k}:${getStageDoneRounds(k)}:${v.legendary ? 1 : 0}`)
            .join(',');
        return `${sec}|u:${units.length}|k:${knownCnt}|r:${revCnt}|c:${learnState.claimedChests.join(',')}|ul:${learnState.unlockedUnits.join(',')}|d:${doneSummary}`;
    }

    function calcAccuratePct(done, total) {
        if (!total || total <= 0 || !done || done <= 0) return 0;
        if (done >= total) return 100;
        const raw = (done / total) * 100;
        if (raw < 1) return Number(raw.toFixed(1));
        return Math.min(99, Math.round(raw));
    }

    function renderLearnPath(force = false) {
        if (!learnUnitsContainer) return;
        const sec = learnState.activeSection || 'A1';
        if (learnSectionTabs) {
            learnSectionTabs.querySelectorAll('.section-pill').forEach(btn => {
                btn.classList.toggle('is-active', btn instanceof HTMLElement && btn.dataset.section === sec);
            });
        }

        const units = OxCurriculum.sections[sec] || [];
        let secWordsTotal = 0;
        let secKnownCount = 0;
        let secReviewCount = 0;
        let secStagesDone = 0;
        let secStagesTotal = 0;
        let currentNodeFound = false;

        units.forEach(u => {
            secWordsTotal += u.wordIndices.length;
            u.wordIndices.forEach(idx => {
                const st = wordStatus[keyOf(wordsData[idx])];
                if (st === 'known') secKnownCount++;
                else if (st === 'review') secReviewCount++;
            });
            u.nodes.forEach(n => {
                if (n.kind === 'stage') {
                    secStagesTotal++;
                    if (isStagePassedFull(n.id)) secStagesDone++;
                }
            });
        });

        const totalReviewCount = Object.values(wordStatus).filter(v => v === 'review').length;
        const secPct = calcAccuratePct(secKnownCount, secWordsTotal);
        const secNumLabel = { A1: 1, A2: 2, B1: 3, B2: 4 }[sec] || 1;

        if (learnOverallLabel) {
            learnOverallLabel.textContent = `ผ่านครบ ${secStagesDone}/${secStagesTotal} ด่าน · ระดับ ${sec} · จำได้ ${secKnownCount.toLocaleString()}/${secWordsTotal.toLocaleString()} คำ (${secPct}%)`;
        }
        const mobSecLabel = $('learn-mob-sec-label');
        if (mobSecLabel) mobSecLabel.textContent = `ส่วนที่ ${secNumLabel} · ${sec}`;
        const mobPctEl = $('learn-mob-pct');
        if (mobPctEl) mobPctEl.textContent = `${secPct}%`;
        const mobWeakCntEl = $('learn-mob-weak-count');
        if (mobWeakCntEl) mobWeakCntEl.textContent = String(totalReviewCount);
        const mobWeakBtn = $('btn-learn-mob-weak');
        if (mobWeakBtn) mobWeakBtn.classList.toggle('has-items', totalReviewCount > 0);
        const secProgFill = $('learn-section-progress-fill');
        if (secProgFill) secProgFill.style.width = `${secPct}%`;
        const weakCntEl = $('learn-weak-count');
        if (weakCntEl) weakCntEl.textContent = String(totalReviewCount);
        const weakBtnEl = $('btn-learn-weak-drill');
        if (weakBtnEl) weakBtnEl.classList.toggle('has-items', totalReviewCount > 0);

        const jumpSelect = /** @type {HTMLSelectElement|null} */ ($('learn-unit-jump-select'));
        if (jumpSelect) {
            const optsHtml = ['<option value="">📍 ข้ามไปยังหน่วย (' + units.length + ' หน่วย)...</option>']
                .concat(units.map(u => {
                    const uk = u.wordIndices.filter(idx => wordStatus[keyOf(wordsData[idx])] === 'known').length;
                    const lockIcon = isUnitUnlocked(u) ? '' : '🔒 ';
                    return `<option value="${escapeHtml(u.id)}">${lockIcon}หน่วย ${u.unitNumber} · ${escapeHtml(u.title)} (${uk}/${u.wordIndices.length})</option>`;
                }));
            jumpSelect.innerHTML = optsHtml.join('');
        }

        const sig = buildLearnPathSignature(sec, units, secKnownCount, secReviewCount);
        if (!force && sig === lastRenderedPathSig && learnUnitsContainer.children.length > 0) {
            return false;
        }
        lastRenderedPathSig = sig;

        const secNum = { A1: 1, A2: 2, B1: 3, B2: 4 }[sec] || 1;
        const html = units.map((unit) => {
            const unlocked = isUnitUnlocked(unit);

            const nodesHtml = unit.nodes.map((node, nIdx) => {
                const offsetX = PATH_CURVE_OFFSETS[nIdx % PATH_CURVE_OFFSETS.length];
                const nodeUnlocked = isNodeUnlocked(node, unit);

                if (node.kind === 'chest') {
                    const claimed = learnState.claimedChests.includes(node.id);
                    const cls = claimed ? 'is-claimed' : (nodeUnlocked ? 'is-current' : 'is-locked');
                    const bubble = (nodeUnlocked && !claimed) ? `<div class="node-start-bubble">เปิดหีบ!</div>` : '';
                    return `
            <div class="path-node-wrap" style="--offset-x: ${offsetX};">
              ${bubble}
              <button type="button" class="path-node-btn node-chest ${cls}" data-chest-id="${escapeHtml(node.id)}" data-unlocked="${nodeUnlocked ? '1' : '0'}" title="${escapeHtml(node.label)}" aria-label="${escapeHtml(node.label)}">
                ${NODE_ICONS.chest}
              </button>
            </div>`;
                }

                const doneInfo = learnState.completedStages[node.id];
                const totalRounds = getStageTotalRounds(node);
                const doneRounds = getStageDoneRounds(node.id);
                const isDone = doneRounds >= totalRounds;
                const isLegendary = !!(isDone && doneInfo && doneInfo.legendary);
                const isCurrent = nodeUnlocked && !isDone && !currentNodeFound;
                if (isCurrent) currentNodeFound = true;

                const stateCls = isDone
                    ? (isLegendary ? 'is-done is-legendary' : 'is-done')
                    : (nodeUnlocked ? (isCurrent ? 'is-current' : (doneRounds > 0 ? 'is-in-progress' : '')) : 'is-locked');
                const iconSvg = isDone ? NODE_ICONS.done : (NODE_ICONS[node.nodeType] || NODE_ICONS.lesson);
                const crownHtml = isLegendary ? `<span class="path-node-crown" aria-hidden="true">👑</span>` : '';
                const bubbleHtml = isCurrent ? `<div class="node-start-bubble">${doneRounds > 0 ? 'ไปต่อเลย' : 'เริ่มเลย'}</div>` : '';
                const showRing = nodeUnlocked && !isDone && (isCurrent || doneRounds > 0);
                const ringHtml = showRing ? renderStageProgressRingSvg(doneRounds, totalRounds) : '';

                return `
          <div class="path-node-wrap" style="--offset-x: ${offsetX};">
            ${bubbleHtml}
            <div class="path-node-slot palette-${unit.palette}">
              ${ringHtml}
              <button type="button" class="path-node-btn palette-${unit.palette} ${stateCls}"
                data-stage-id="${escapeHtml(node.id)}"
                data-unlocked="${nodeUnlocked ? '1' : '0'}"
                data-rounds="${doneRounds}/${totalRounds}"
                aria-label="${escapeHtml(node.label)} (${doneRounds}/${totalRounds})">
                ${iconSvg}
                ${crownHtml}
              </button>
            </div>
          </div>`;
            }).join('');

            const jumpBtn = !unlocked
                ? `<button type="button" class="btn-unit-jump" data-jump-unit="${escapeHtml(unit.id)}">ข้ามหน่วย</button>`
                : '';
            const unitKnown = unit.wordIndices.filter(idx => wordStatus[keyOf(wordsData[idx])] === 'known').length;
            const unitPct = calcAccuratePct(unitKnown, unit.wordIndices.length);

            return `
        <article class="unit-block" data-unit-id="${escapeHtml(unit.id)}">
          <header class="unit-banner palette-${unit.palette} ${unlocked ? '' : 'is-locked'}">
            <div class="unit-banner-info">
              <span class="unit-banner-eyebrow">ส่วนที่ ${secNum}, หน่วยที่ ${unit.unitNumber}</span>
              <h3 class="unit-banner-title">${escapeHtml(unit.title)}</h3>
              <div class="unit-banner-progress" aria-label="ความคืบหน้าในหน่วยนี้">
                <span class="unit-banner-progress-track"><span class="unit-banner-progress-fill" style="width:${unitPct}%"></span></span>
                <span class="unit-banner-progress-label">จำได้ ${unitKnown}/${unit.wordIndices.length} คำ · ${unitPct}%</span>
              </div>
            </div>
            <div class="unit-banner-actions">
              ${jumpBtn}
              <button type="button" class="btn-unit-guidebook" data-guidebook-unit="${escapeHtml(unit.id)}">
                📖 คู่มือ
              </button>
            </div>
          </header>
          <div class="unit-path-track">
            <button type="button" class="unit-mascot" data-unit-mascot="${escapeHtml(unit.id)}" title="แตะ OxOwl เพื่อรับกำลังใจ" aria-label="แตะมาสคอต OxOwl เพื่อรับกำลังใจ">${MASCOT_SVG}</button>
            ${nodesHtml}
          </div>
        </article>`;
        }).join('');

        learnUnitsContainer.innerHTML = html;
        if (learnActiveUnitPill && units.length > 0) {
            learnActiveUnitId = units[0].id;
            if (learnActiveUnitText) learnActiveUnitText.textContent = `ส่วนที่ ${secNum} · หน่วยที่ ${units[0].unitNumber} · ${units[0].title}`;
            learnActiveUnitPill.hidden = true;
        }
        return true;
    }

    let activeGuidebookUnitId = null;

    function openUnitGuidebook(unitId) {
        const unit = OxCurriculum.unitById.get(unitId);
        if (!unit || !guidebookModal) return;
        activeGuidebookUnitId = unitId;
        const gbTitle = $('gb-title');
        const gbSub = $('gb-subtitle');
        const gbTip = $('gb-tip');
        const gbList = $('gb-word-list');
        const gbMasteryText = $('gb-mastery-text');
        const gbMasteryFill = $('gb-mastery-fill');
        const gbGrammarNotes = $('gb-grammar-notes');

        const knownCount = unit.wordIndices.filter(idx => wordStatus[keyOf(wordsData[idx])] === 'known').length;
        const pct = unit.wordIndices.length > 0 ? Math.min(100, Math.round((knownCount / unit.wordIndices.length) * 100)) : 0;

        if (gbSub) gbSub.textContent = `CEFR ${unit.cefr} · หน่วยที่ ${unit.unitNumber} · ${unit.wordIndices.length} คำ`;
        if (gbTitle) gbTitle.textContent = unit.title;
        if (gbMasteryText) gbMasteryText.textContent = `จำได้ ${knownCount}/${unit.wordIndices.length} คำในหน่วยนี้ (${pct}%)`;
        if (gbMasteryFill) gbMasteryFill.style.width = `${pct}%`;
        if (gbTip) gbTip.textContent = unit.tip;

        if (gbGrammarNotes) {
            const notes = [];
            for (const idx of unit.wordIndices) {
                if (notes.length >= 3) break;
                const w = wordsData[idx];
                if (!w) continue;
                const detail = w.usageTip || w.grammarPattern || w.rootBreakdown;
                if (detail) {
                    notes.push({
                        word: w.word,
                        pattern: w.grammarPattern || w.register || w.partOfSpeech || '',
                        detail
                    });
                }
            }
            if (notes.length > 0) {
                gbGrammarNotes.innerHTML = `<div class="gb-notes-heading">💡 รูปแบบไวยากรณ์ & เคล็ดลับเด่นในหน่วยนี้</div>` +
                    notes.map(n => `<div class="gb-note-item"><strong>${escapeHtml(n.word)}</strong>${n.pattern ? ` <span class="gb-note-badge">${escapeHtml(n.pattern)}</span>` : ''}<p>${escapeHtml(n.detail)}</p></div>`).join('');
                gbGrammarNotes.hidden = false;
            } else {
                gbGrammarNotes.innerHTML = '';
                gbGrammarNotes.hidden = true;
            }
        }

        if (gbList) {
            gbList.innerHTML = unit.wordIndices
                .map(idx => wordListItem(keyOf(wordsData[idx]), wordStatus[keyOf(wordsData[idx])] || 'unseen'))
                .join('');
        }
        guidebookModal.classList.add('open');
        guidebookModal.setAttribute('aria-hidden', 'false');
        SoundFX.popOpen();
    }

    function closeGuidebook() {
        if (!guidebookModal) return;
        const wasOpen = guidebookModal.classList.contains('open');
        guidebookModal.classList.remove('open');
        guidebookModal.setAttribute('aria-hidden', 'true');
        if (wasOpen) SoundFX.popClose();
    }

    function openChestReward(chestId) {
        if (!chestModal) return;
        pendingChestId = chestId;
        chestModal.classList.add('open');
        chestModal.setAttribute('aria-hidden', 'false');
        SoundFX.chest();
        OxConfetti.launch('good');
    }

    function claimChestReward() {
        if (!pendingChestId || !OxGuard.lock('claim-chest', 320)) return;
        if (!learnState.claimedChests.includes(pendingChestId)) {
            learnState.claimedChests.push(pendingChestId);
            ensureTodayQuests();
            learnState.xp += 30;
            learnState.dailyQuests.xpToday += 30;
            saveLearnState(true);
            SoundFX.quest();
            showToast('เปิดหีบสมบัติสำเร็จ +30 XP! ⚡');
        }
        pendingChestId = null;
        if (chestModal) {
            chestModal.classList.remove('open');
            chestModal.setAttribute('aria-hidden', 'true');
        }
        renderLearnPath();
        refreshShellTelemetry();
    }

    wireWordListEvents($('gb-word-list'));
    wireWordListEvents($('dict-word-list'));

    $('btn-gb-close')?.addEventListener('click', closeGuidebook);
    $('btn-gb-practice-unit')?.addEventListener('click', () => {
        const unit = activeGuidebookUnitId ? OxCurriculum.unitById.get(activeGuidebookUnitId) : null;
        closeGuidebook();
        if (unit && typeof startVirtualLearnPractice === 'function') {
            startVirtualLearnPractice({
                id: `__unit_practice_${unit.id}`,
                title: unit.title,
                label: `ฝึกทบทวนหน่วยที่ ${unit.unitNumber}`,
                wordIndices: unit.wordIndices,
                unit
            });
        }
    });
    guidebookModal?.addEventListener('click', (e) => { if (e.target === guidebookModal) closeGuidebook(); });
    $('btn-chest-claim')?.addEventListener('click', claimChestReward);
    chestModal?.addEventListener('click', (e) => { if (e.target === chestModal) claimChestReward(); });

    function setLearnMobileDrawer(expanded) {
        const hdr = $('learn-sticky-header');
        const btn = $('btn-learn-mob-drawer');
        if (!hdr) return;
        hdr.classList.toggle('is-expanded', Boolean(expanded));
        if (btn) btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }

    $('btn-learn-mob-drawer')?.addEventListener('click', () => {
        const hdr = $('learn-sticky-header');
        const next = !(hdr && hdr.classList.contains('is-expanded'));
        setLearnMobileDrawer(next);
        SoundFX.nav();
    });

    $('btn-learn-mob-weak')?.addEventListener('click', () => {
        $('btn-learn-weak-drill')?.click();
    });

    $('btn-learn-mob-jump')?.addEventListener('click', () => {
        setLearnMobileDrawer(false);
        $('btn-learn-jump-current')?.click();
    });

    $('learn-unit-jump-select')?.addEventListener('change', (e) => {
        const sel = e.currentTarget;
        if (!(sel instanceof HTMLSelectElement) || !sel.value) return;
        closeNodePopover();
        setLearnMobileDrawer(false);
        const targetId = sel.value;
        learnUnitsContainer?.querySelectorAll('.unit-block.ox-reveal-pending').forEach(u => {
            u.classList.remove('ox-reveal-pending');
            u.classList.add('ox-revealed');
        });
        const unitEl = learnUnitsContainer?.querySelector(`.unit-block[data-unit-id="${CSS.escape(targetId)}"]`);
        if (unitEl) {
            unitEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            SoundFX.nav();
        }
        sel.value = '';
    });

    $('btn-learn-weak-drill')?.addEventListener('click', () => {
        closeNodePopover();
        setLearnMobileDrawer(false);
        if (typeof startSmartLearnDrill === 'function') startSmartLearnDrill('weak');
    });

    $('btn-learn-quick-review')?.addEventListener('click', () => {
        closeNodePopover();
        setLearnMobileDrawer(false);
        if (typeof startSmartLearnDrill === 'function') startSmartLearnDrill('quick');
    });

    learnSectionTabs?.addEventListener('click', (e) => {
        if (!(e.target instanceof Element)) return;
        const btn = e.target.closest('[data-section]');
        if (!(btn instanceof HTMLElement)) return;
        closeNodePopover();
        setLearnMobileDrawer(false);
        SoundFX.nav();
        learnState.activeSection = btn.dataset.section;
        saveLearnState(false);
        renderLearnPath();
        initLearnUnitScrollReveal();
        refreshShellTelemetry();
    });

    $('btn-learn-jump-current')?.addEventListener('click', () => {
        closeNodePopover();
        learnUnitsContainer?.querySelectorAll('.unit-block.ox-reveal-pending').forEach(u => {
            u.classList.remove('ox-reveal-pending');
            u.classList.add('ox-revealed');
        });
        const cur = learnUnitsContainer?.querySelector('.node-start-bubble') || learnUnitsContainer?.querySelector('.path-node-btn.is-current');
        if (cur) cur.scrollIntoView({ behavior: 'smooth', block: 'center' });
        else showToast('คุณเรียนครบทุกด่านในระดับนี้แล้ว!');
    });

    learnActiveUnitPill?.addEventListener('click', () => {
        if (!learnActiveUnitId || !learnUnitsContainer) return;
        const unitEl = learnUnitsContainer.querySelector(`.unit-block[data-unit-id="${CSS.escape(learnActiveUnitId)}"]`);
        unitEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    learnUnitsContainer?.addEventListener('click', (e) => {
        if (!(e.target instanceof Element)) return;
        const gbBtn = e.target.closest('[data-guidebook-unit]');
        if (gbBtn instanceof HTMLElement) {
            openUnitGuidebook(gbBtn.dataset.guidebookUnit);
            return;
        }
        const jumpBtn = e.target.closest('[data-jump-unit]');
        if (jumpBtn instanceof HTMLElement) {
            const unit = OxCurriculum.unitById.get(jumpBtn.dataset.jumpUnit);
            if (unit) startLessonByStageId(unit.bossStageId, { isJumpTestForUnitId: unit.id });
            return;
        }
        const chestBtn = e.target.closest('[data-chest-id]');
        if (chestBtn instanceof HTMLElement) {
            const cid = chestBtn.dataset.chestId;
            if (learnState.claimedChests.includes(cid)) {
                showToast('รับรางวัลจากหีบนี้ไปแล้ว');
                return;
            }
            if (chestBtn.dataset.unlocked !== '1') {
                showToast('ผ่านด่านก่อนหน้าเพื่อปลดล็อกหีบสมบัตินี้');
                return;
            }
            openChestReward(cid);
            return;
        }
        const mascotBtn = e.target.closest('.unit-mascot');
        if (mascotBtn instanceof HTMLElement) {
            SoundFX.mascot();
            const quotes = [
                'สู้ๆ นะ! ฝึกวันละนิดก็เก่งขึ้นได้ทุกวัน',
                'เคล็ดลับ: แตะคำที่ขีดเส้นใต้เพื่อดูคำใบ้ได้นะ',
                'ผ่านด่านแล้วลองโหมดตำนาน +40 XP ดูสิ!',
                'เยี่ยมเลย! ไปต่อกันอีกสักด่านไหม?'
            ];
            mascotBtn.classList.remove('is-cheering');
            void mascotBtn.offsetWidth;
            mascotBtn.classList.add('is-cheering');
            let pop = mascotBtn.querySelector('.mascot-speech-pop');
            if (pop) pop.remove();
            pop = document.createElement('span');
            pop.className = 'mascot-speech-pop';
            const idx = Number(mascotBtn.dataset.quoteIdx || 0) % quotes.length;
            mascotBtn.dataset.quoteIdx = String(idx + 1);
            pop.textContent = quotes[idx];
            mascotBtn.appendChild(pop);
            const anyMascot = /** @type {any} */ (mascotBtn);
            clearTimeout(anyMascot._speechTimer);
            anyMascot._speechTimer = setTimeout(() => {
                mascotBtn.classList.remove('is-cheering');
                if (pop && pop.parentNode) pop.remove();
            }, 2600);
            return;
        }
        const stageBtn = e.target.closest('[data-stage-id]');
        if (stageBtn instanceof HTMLElement) {
            openNodePopover(stageBtn.dataset.stageId, stageBtn);
        }
    });

    // Floating Node Action Popover Controller (Duolingo-style Start / Practice / Legendary)
    const learnNodePopover = $('learn-node-popover');
    const btnNodePopClose = $('btn-node-pop-close');
    const nodePopBadge = $('node-pop-badge');
    const nodePopTitle = $('node-pop-title');
    const nodePopSub = $('node-pop-sub');
    const nodePopMeta = $('node-pop-meta');
    const btnNodePopStart = $('btn-node-pop-start');
    const btnNodePopLegendary = $('btn-node-pop-legendary');
    let activePopoverStageId = null;
    let activePopoverAnchor = null;

    let popoverCloseTimer = null;

    function closeNodePopover(withSound = false, immediate = false) {
        const wasOpen = learnNodePopover && !learnNodePopover.hidden && !learnNodePopover.classList.contains('is-closing');
        activePopoverStageId = null;
        activePopoverAnchor = null;
        if (!learnNodePopover || learnNodePopover.hidden) return;
        clearTimeout(popoverCloseTimer);
        if (immediate || prefersReducedMotion()) {
            learnNodePopover.classList.remove('is-closing');
            learnNodePopover.hidden = true;
        } else {
            learnNodePopover.classList.add('is-closing');
            popoverCloseTimer = setTimeout(() => {
                if (!activePopoverStageId && learnNodePopover) {
                    learnNodePopover.hidden = true;
                    learnNodePopover.classList.remove('is-closing');
                }
            }, 130);
        }
        if (withSound && wasOpen) SoundFX.popClose();
    }

    function positionNodePopover() {
        const scr = $('learn-screen');
        if (!learnNodePopover || learnNodePopover.hidden || !scr || !activePopoverAnchor || !activePopoverAnchor.isConnected) {
            return;
        }
        const scrRect = scr.getBoundingClientRect();
        const btnRect = activePopoverAnchor.getBoundingClientRect();
        const popW = learnNodePopover.offsetWidth || 296;
        const popH = learnNodePopover.offsetHeight || 190;

        const vpCenter = btnRect.left + btnRect.width / 2;
        const clampedVpLeft = Math.max(8, Math.min(window.innerWidth - popW - 8, vpCenter - popW / 2));
        const relLeft = clampedVpLeft - scrRect.left;
        const caretPx = Math.max(24, Math.min(popW - 24, vpCenter - clampedVpLeft));

        const hasRing = Boolean(activePopoverAnchor.closest('.path-node-slot')?.querySelector('.path-node-ring'));
        const belowOffset = hasRing ? 18 : 14;
        const bottomSafe = window.innerWidth <= 960 ? 84 : 18;
        const topSafe = window.innerWidth <= 960 ? 74 : 20;
        const spaceBelow = (window.innerHeight - bottomSafe) - (btnRect.bottom + belowOffset);
        const spaceAbove = (btnRect.top - 14) - topSafe;
        const placeAbove = spaceBelow < popH && spaceAbove > spaceBelow;
        const relTop = placeAbove
            ? (btnRect.top - scrRect.top) - popH - 14
            : (btnRect.bottom - scrRect.top) + belowOffset;

        learnNodePopover.classList.toggle('is-above', placeAbove);
        learnNodePopover.style.left = `${Math.round(relLeft)}px`;
        learnNodePopover.style.top = `${Math.round(Math.max(8, relTop))}px`;
        learnNodePopover.style.setProperty('--caret-x', `${Math.round(caretPx)}px`);
    }

    function openNodePopover(stageId, anchorBtn) {
        if (!learnNodePopover) {
            startLessonByStageId(stageId);
            return;
        }
        if (activePopoverStageId === stageId && !learnNodePopover.hidden) {
            closeNodePopover(true);
            return;
        }
        const stage = OxCurriculum.stageById.get(stageId);
        const unit = stage ? OxCurriculum.unitById.get(stage.unitId) : null;
        if (!stage || !unit) return;

        const unlocked = anchorBtn ? anchorBtn.dataset.unlocked === '1' : isNodeUnlocked(stage, unit);
        const unitUnlocked = isUnitUnlocked(unit);
        const doneInfo = learnState.completedStages[stageId];
        const totalRounds = getStageTotalRounds(stage);
        const doneRounds = getStageDoneRounds(stageId);
        const isStageDone = doneRounds >= totalRounds;

        learnNodePopover.className = `learn-node-popover palette-${unit.palette}${unlocked ? '' : ' is-locked-pop'}`;
        if (nodePopTitle) nodePopTitle.textContent = stage.label;
        if (nodePopMeta) {
            const previewPool = (stage.wordIndices && stage.wordIndices.length > 0 ? stage.wordIndices : unit.wordIndices) || [];
            const previewSlice = previewPool.slice(0, 4);
            const extraCnt = Math.max(0, previewPool.length - previewSlice.length);
            if (previewSlice.length > 0) {
                const chipsHtml = previewSlice.map(idx => {
                    const pw = wordsData[idx];
                    if (!pw) return '';
                    const shortTh = String(pw.translation || '').split(/[,;\/]/)[0].trim();
                    return `<button type="button" class="node-pop-chip" data-pop-speak="${escapeHtml(pw.word)}" title="แตะเพื่อฟังเสียง">${escapeHtml(pw.word)} · ${escapeHtml(shortTh)}</button>`;
                }).join('');
                nodePopMeta.innerHTML = chipsHtml + (extraCnt > 0 ? `<span class="node-pop-chip is-count">+${extraCnt} คำ</span>` : '');
                nodePopMeta.hidden = false;
            } else {
                nodePopMeta.innerHTML = '';
                nodePopMeta.hidden = true;
            }
        }

        if (!unlocked) {
            if (nodePopBadge) nodePopBadge.hidden = true;
            if (nodePopSub) {
                nodePopSub.textContent = unitUnlocked
                    ? 'ผ่านด่านก่อนหน้านี้ให้ครบก่อนเพื่อปลดล็อก'
                    : 'ผ่านด่านก่อนหน้า หรือข้ามหน่วยได้ที่แบนเนอร์';
            }
            if (btnNodePopStart) {
                btnNodePopStart.textContent = unitUnlocked ? 'กลับไปด่านที่เปิดอยู่' : 'ทดสอบข้ามหน่วย (+35 XP)';
                btnNodePopStart.onclick = () => {
                    closeNodePopover();
                    if (!unitUnlocked) {
                        const boss = unit.nodes.find(n => n.kind === 'stage' && n.isBoss) || unit.nodes.find(n => n.kind === 'stage');
                        if (boss) startLessonByStageId(boss.id, { isJumpTestForUnitId: unit.id });
                    } else {
                        const cur = learnUnitsContainer?.querySelector('.path-node-btn.is-current');
                        cur?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                };
            }
            if (btnNodePopLegendary) btnNodePopLegendary.hidden = true;
        } else if (isStageDone) {
            const isLeg = !!(doneInfo && doneInfo.legendary);
            if (nodePopBadge) {
                nodePopBadge.textContent = '👑 พิชิตระดับตำนานแล้ว';
                nodePopBadge.hidden = !isLeg;
            }
            if (nodePopSub) {
                nodePopSub.textContent = isLeg
                    ? `ผ่านครบ ${totalRounds}/${totalRounds} บท · ระดับตำนาน`
                    : `ผ่านครบ ${totalRounds}/${totalRounds} บทแล้ว`;
            }
            if (btnNodePopStart) {
                btnNodePopStart.textContent = 'ฝึก +5 XP';
                btnNodePopStart.onclick = () => {
                    closeNodePopover();
                    startLessonByStageId(stageId, { mode: 'practice' });
                };
            }
            if (btnNodePopLegendary) {
                btnNodePopLegendary.hidden = false;
                btnNodePopLegendary.textContent = isLeg ? 'ท้าทายตำนานอีกครั้ง +40 XP' : 'ตำนาน +40 XP';
                btnNodePopLegendary.onclick = () => {
                    closeNodePopover();
                    startLessonByStageId(stageId, { mode: 'legendary' });
                };
            }
        } else {
            const nextRound = Math.min(totalRounds, doneRounds + 1);
            const tierLabel = nextRound === totalRounds ? 'ระดับเข้มข้น' : (nextRound === 1 ? 'พื้นฐาน' : 'ระดับกลาง');
            if (nodePopBadge) nodePopBadge.hidden = true;
            if (nodePopSub) {
                nodePopSub.textContent = `บทที่ ${nextRound}/${totalRounds} · ${tierLabel}`;
            }
            if (btnNodePopStart) {
                btnNodePopStart.textContent = `เริ่มต้น +${stage.isBoss ? 35 : 20} XP`;
                btnNodePopStart.onclick = () => {
                    closeNodePopover();
                    startLessonByStageId(stageId, { mode: 'normal' });
                };
            }
            if (btnNodePopLegendary) btnNodePopLegendary.hidden = true;
        }

        clearTimeout(popoverCloseTimer);
        learnNodePopover.classList.remove('is-closing');
        activePopoverStageId = stageId;
        activePopoverAnchor = anchorBtn;
        learnNodePopover.hidden = false;
        SoundFX.popOpen();
        requestAnimationFrame(() => positionNodePopover());
    }

    btnNodePopClose?.addEventListener('click', () => closeNodePopover(true));
    nodePopMeta?.addEventListener('click', (e) => {
        if (!(e.target instanceof Element)) return;
        const chip = e.target.closest('[data-pop-speak]');
        if (chip instanceof HTMLElement && chip.dataset.popSpeak) {
            e.stopPropagation();
            speakWordOverride(chip.dataset.popSpeak, true, chip);
        }
    });
    document.addEventListener('click', (e) => {
        if (!learnNodePopover || learnNodePopover.hidden || !(e.target instanceof Element)) return;
        if (e.target.closest('#learn-node-popover') || e.target.closest('[data-stage-id]')) return;
        closeNodePopover();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && learnNodePopover && !learnNodePopover.hidden) {
            closeNodePopover(true);
        }
    });
    window.addEventListener('resize', () => {
        if (learnNodePopover && !learnNodePopover.hidden) positionNodePopover();
    });
    window.addEventListener('scroll', () => {
        if (learnNodePopover && !learnNodePopover.hidden) positionNodePopover();
    }, { passive: true });

    /* =========================================================
     * Duolingo-Grade Lesson Engine (OxLesson v2) - NO Hearts Lock!
     * ========================================================= */
    let activeLesson = null;
    let lessonListeningMutedUntil = 0;

    function escapeRegExpStr(s) {
        return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // 1. Cast SVG Characters (Full-Figure Expressive Vector Mascots x 3 Moods: calm | happy | retry)
    const OX_CAST_PALETTES = [
        { name: 'OxOwl', skin: '#22c55e', accent: '#16a34a', shirt: '#38bdf8', pants: '#0369a1', shoes: '#1e293b', isOwl: true },
        { name: 'Lin', skin: '#fde68a', accent: '#f59e0b', shirt: '#ff4b4b', pants: '#dc2626', shoes: '#f8fafc', headband: '#facc15', isOwl: false },
        { name: 'Teo', skin: '#fdba74', accent: '#ea580c', shirt: '#6366f1', pants: '#312e81', shoes: '#f1f5f9', glasses: true, collar: '#e0e7ff' },
        { name: 'Vikram', skin: '#f5c28b', accent: '#0ea5e9', shirt: '#ec4899', pants: '#0284c7', shoes: '#475569', turban: '#0ea5e9', beard: '#1e293b' },
        { name: 'Lucy', skin: '#fed7aa', accent: '#d97706', shirt: '#fbbf24', pants: '#d97706', shoes: '#78350f', buns: '#1e293b' }
    ];

    function renderCastAvatar(castIdx = 0, mood = 'calm', reactText = '') {
        const p = OX_CAST_PALETTES[Math.abs(castIdx) % OX_CAST_PALETTES.length];
        const isHappy = mood === 'happy';
        const isRetry = mood === 'retry';
        const badgeHtml = reactText
            ? `<span class="ox-cast-react-badge">${escapeHtml(reactText)}</span>`
            : '';
        const sparklesSvg = isHappy
            ? `<g class="ox-cast-sparkles">
        <path d="M12 20l2-5 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#facc15"/>
        <path d="M90 18l1.6-4 1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6Z" fill="#58cc02"/>
        <circle cx="94" cy="54" r="2.8" fill="#1cb0f6"/>
        <circle cx="10" cy="60" r="2.5" fill="#fb923c"/>
       </g>`
            : '';

        if (p.isOwl) {
            const eyesSvg = isHappy
                ? `<g>
          <circle cx="43" cy="48" r="10.5" fill="#fff"/>
          <circle cx="67" cy="48" r="10.5" fill="#fff"/>
          <path d="M37 49c3-5 9-5 12 0" stroke="#0f172a" stroke-width="3.2" stroke-linecap="round" fill="none"/>
          <path d="M61 49c3-5 9-5 12 0" stroke="#0f172a" stroke-width="3.2" stroke-linecap="round" fill="none"/>
         </g>`
                : `<g class="ox-eyes">
          <circle cx="43" cy="49" r="10.5" fill="#fff"/>
          <circle cx="67" cy="49" r="10.5" fill="#fff"/>
          <circle cx="44" cy="49" r="4.6" fill="#0f172a"/>
          <circle cx="66" cy="49" r="4.6" fill="#0f172a"/>
          <circle cx="45.8" cy="47.2" r="1.6" fill="#fff"/>
          <circle cx="67.8" cy="47.2" r="1.6" fill="#fff"/>
          ${isRetry ? '<path d="M35 39l13 3M75 39l-13 3" stroke="#15803d" stroke-width="2.5" stroke-linecap="round"/>' : ''}
         </g>`;
            const beakMouth = isHappy
                ? '<path d="M47 57c5 7 11 7 16 0Z" fill="#f59e0b" stroke="#d97706" stroke-width="1.8" stroke-linejoin="round"/>'
                : isRetry
                    ? '<path d="M49 62c4-2.5 8-2.5 12 0" stroke="#d97706" stroke-width="2.4" stroke-linecap="round" fill="none"/>'
                    : '<path d="M50 58h10l-5 6-5-6Z" fill="#f59e0b"/>';
            return `${badgeHtml}<svg class="ox-mascot-svg" width="94" height="108" viewBox="0 0 110 124" fill="none" aria-hidden="true">
        ${sparklesSvg}
        <ellipse cx="55" cy="115" rx="28" ry="6" fill="rgba(15,23,42,0.12)"/>
        <g class="ox-body-float">
          <rect x="40" y="96" width="10" height="15" rx="5" fill="#f59e0b"/>
          <rect x="60" y="96" width="10" height="15" rx="5" fill="#f59e0b"/>
          <g class="ox-wing-l"><path d="M26 55c-11 6-12 24-2 29 5 2.5 8-4 7-15Z" fill="${p.accent}"/></g>
          <g class="ox-wing-r"><path d="M84 55c11 6 12 24 2 29-5 2.5-8-4-7-15Z" fill="${p.accent}"/></g>
          <rect x="26" y="25" width="58" height="76" rx="29" fill="${p.skin}"/>
          <ellipse cx="55" cy="79" rx="18" ry="15" fill="rgba(255,255,255,0.22)"/>
          <path d="M33 27c0-12 44-12 44 0" fill="${p.accent}"/>
          ${eyesSvg}
          ${isHappy ? '<circle cx="33" cy="57" r="4" fill="#fda4af" opacity="0.88"/><circle cx="77" cy="57" r="4" fill="#fda4af" opacity="0.88"/>' : ''}
          ${beakMouth}
        </g>
      </svg>`;
        }

        const humanEyes = isHappy
            ? `<path d="M38 47c3-5 8-5 11 0" stroke="#0f172a" stroke-width="3" stroke-linecap="round" fill="none"/>
       <path d="M61 47c3-5 8-5 11 0" stroke="#0f172a" stroke-width="3" stroke-linecap="round" fill="none"/>`
            : `<g class="ox-eyes">
        <circle cx="44" cy="46" r="3.5" fill="#0f172a"/>
        <circle cx="66" cy="46" r="3.5" fill="#0f172a"/>
        <circle cx="45.2" cy="44.8" r="1.2" fill="#fff"/>
        <circle cx="67.2" cy="44.8" r="1.2" fill="#fff"/>
        ${isRetry ? '<path d="M38 39l10 2.5M72 39l-10 2.5" stroke="#7c2d12" stroke-width="2.2" stroke-linecap="round"/>' : ''}
       </g>`;
        const mouthSvg = isHappy
            ? '<path d="M44 58c6 8 16 8 22 0Z" fill="#e11d48" stroke="#9f1239" stroke-width="1.8" stroke-linejoin="round"/>'
            : isRetry
                ? '<path d="M47 63c4-3 12-3 16 0" stroke="#7c2d12" stroke-width="2.4" stroke-linecap="round" fill="none"/>'
                : '<path d="M48 60c5 3.5 9 3.5 14 0" stroke="#7c2d12" stroke-width="2.4" stroke-linecap="round" fill="none"/>';
        const headwear = p.turban
            ? `<ellipse cx="55" cy="24" rx="22" ry="13" fill="${p.turban}"/><circle cx="55" cy="18" r="4.5" fill="#38bdf8"/>`
            : p.headband
                ? `<path d="M34 33c0-13 9-19 21-19s21 6 21 19Z" fill="#facc15"/><rect x="33" y="29" width="44" height="7" rx="3.5" fill="${p.headband}"/>`
                : p.buns
                    ? `<circle cx="55" cy="15" r="9" fill="${p.buns}"/><path d="M34 38c0-13 9-20 21-20s21 7 21 20c-5-5-12-7-21-7s-16 2-21 7Z" fill="${p.buns}"/>`
                    : `<path d="M34 38c0-13 9-20 21-20s21 7 21 20c-5-5-12-7-21-7s-16 2-21 7Z" fill="${p.hair || '#1e293b'}"/>`;
        const beardSvg = p.beard
            ? `<path d="M35 53c0 17 9 27 20 27s20-10 20-27c-5 5-12 8-20 8s-15-3-20-8Z" fill="${p.beard}"/>`
            : '';
        const glassesSvg = p.glasses
            ? `<rect x="35" y="40" width="16" height="12" rx="4" stroke="#0f172a" stroke-width="2.3" fill="rgba(255,255,255,0.28)"/>
         <rect x="59" y="40" width="16" height="12" rx="4" stroke="#0f172a" stroke-width="2.3" fill="rgba(255,255,255,0.28)"/>
         <line x1="51" y1="45" x2="59" y2="45" stroke="#0f172a" stroke-width="2.3"/>`
            : '';
        const armsSvg = isHappy
            ? `<g class="ox-wing-l"><rect x="14" y="46" width="13" height="28" rx="6.5" transform="rotate(-28 20 60)" fill="${p.shirt}"/></g>
         <g class="ox-wing-r"><rect x="83" y="46" width="13" height="28" rx="6.5" transform="rotate(28 89 60)" fill="${p.shirt}"/></g>`
            : `<g class="ox-wing-l"><rect x="19" y="70" width="13" height="24" rx="6.5" fill="${p.shirt}"/></g>
         <g class="ox-wing-r"><rect x="78" y="70" width="13" height="24" rx="6.5" fill="${p.shirt}"/></g>`;

        return `${badgeHtml}<svg class="ox-mascot-svg" width="94" height="108" viewBox="0 0 110 124" fill="none" aria-hidden="true">
      ${sparklesSvg}
      <ellipse cx="55" cy="115" rx="28" ry="6" fill="rgba(15,23,42,0.12)"/>
      <g class="ox-body-float">
        <rect x="37" y="96" width="13" height="17" rx="5" fill="${p.pants || '#334155'}"/>
        <rect x="60" y="96" width="13" height="17" rx="5" fill="${p.pants || '#334155'}"/>
        <rect x="34" y="109" width="17" height="7" rx="3.5" fill="${p.shoes || '#1e293b'}"/>
        <rect x="59" y="109" width="17" height="7" rx="3.5" fill="${p.shoes || '#1e293b'}"/>
        ${armsSvg}
        <rect x="29" y="64" width="52" height="36" rx="18" fill="${p.shirt}"/>
        ${p.collar ? `<path d="M44 65l11 10 11-10" stroke="${p.collar}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
        <rect x="33" y="21" width="44" height="46" rx="21" fill="${p.skin}"/>
        ${headwear}
        ${humanEyes}
        ${glassesSvg}
        ${isHappy ? '<circle cx="38" cy="54" r="3.6" fill="#fda4af" opacity="0.88"/><circle cx="72" cy="54" r="3.6" fill="#fda4af" opacity="0.88"/>' : ''}
        ${beardSvg}
        ${mouthSvg}
      </g>
    </svg>`;
    }

    function renderClozeSceneSvg(wordObj) {
        const text = `${wordObj?.word || ''} ${wordObj?.example || ''}`.toLowerCase();
        const topic = wordObj?.topic || '';
        // Water / bottle / drink illustration inspired by Screenshot 6
        if (/\b(water|bottle|drink|juice|milk|coffee|tea|cup)\b/.test(text) || topic === 'food') {
            return `<svg class="ox-cloze-scene-svg" width="84" height="96" viewBox="0 0 96 108" fill="none" aria-hidden="true">
                <ellipse cx="48" cy="100" rx="28" ry="5" fill="rgba(15,23,42,0.1)"/>
                <rect x="37" y="10" width="22" height="9" rx="3" fill="#0284c7"/>
                <path d="M35 20h26l6 14v56a10 10 0 0 1-10 10H39a10 10 0 0 1-10-10V34l6-14Z" fill="#bae6fd"/>
                <path d="M29 48h38v40a10 10 0 0 1-10 10H39a10 10 0 0 1-10-10V48Z" fill="#38bdf8"/>
                <rect x="29" y="54" width="38" height="18" fill="#0ea5e9" opacity="0.82"/>
                <rect x="34" y="34" width="6" height="48" rx="3" fill="rgba(255,255,255,0.45)"/>
            </svg>`;
        }
        if (topic === 'travel' || /\b(car|bus|train|ticket|road|trip|plane|taxi|station)\b/.test(text)) {
            return `<svg class="ox-cloze-scene-svg" width="84" height="96" viewBox="0 0 96 108" fill="none" aria-hidden="true">
                <ellipse cx="48" cy="96" rx="32" ry="5" fill="rgba(15,23,42,0.1)"/>
                <rect x="16" y="42" width="64" height="36" rx="12" fill="#38bdf8"/>
                <rect x="22" y="28" width="52" height="22" rx="9" fill="#0ea5e9"/>
                <rect x="27" y="33" width="42" height="13" rx="5" fill="#e0f2fe"/>
                <circle cx="30" cy="80" r="9" fill="#1e293b"/><circle cx="30" cy="80" r="4" fill="#cbd5e1"/>
                <circle cx="66" cy="80" r="9" fill="#1e293b"/><circle cx="66" cy="80" r="4" fill="#cbd5e1"/>
                <rect x="22" y="58" width="12" height="7" rx="3.5" fill="#fef08a"/>
                <rect x="62" y="58" width="12" height="7" rx="3.5" fill="#fef08a"/>
            </svg>`;
        }
        if (topic === 'work' || topic === 'education' || /\b(book|study|read|school|office|work|learn|class|paper)\b/.test(text)) {
            return `<svg class="ox-cloze-scene-svg" width="84" height="96" viewBox="0 0 96 108" fill="none" aria-hidden="true">
                <ellipse cx="48" cy="96" rx="30" ry="5" fill="rgba(15,23,42,0.1)"/>
                <rect x="20" y="28" width="56" height="58" rx="9" fill="#6366f1"/>
                <rect x="26" y="33" width="44" height="48" rx="6" fill="#eef2ff"/>
                <line x1="34" y1="46" x2="62" y2="46" stroke="#818cf8" stroke-width="4" stroke-linecap="round"/>
                <line x1="34" y1="58" x2="58" y2="58" stroke="#a5b4fc" stroke-width="4" stroke-linecap="round"/>
                <line x1="34" y1="70" x2="50" y2="70" stroke="#c7d2fe" stroke-width="4" stroke-linecap="round"/>
            </svg>`;
        }
        return renderCastAvatar(Math.abs((wordObj?.word || '').charCodeAt(0) || 0), 'calm');
    }

    // 2. Dotted Word Hints Lookup (OxWordHint)
    const FUNCTION_WORD_HINTS = {
        i: 'ฉัน', me: 'ฉัน (กรรม)', my: 'ของฉัน', you: 'คุณ', your: 'ของคุณ',
        we: 'พวกเรา', us: 'พวกเรา', our: 'ของพวกเรา', they: 'พวกเขา', them: 'พวกเขา', their: 'ของพวกเขา',
        he: 'เขา', him: 'เขา', his: 'ของเขา', she: 'เธอ', her: 'ของเธอ', it: 'มัน', its: 'ของมัน',
        am: 'เป็น/อยู่/คือ', is: 'เป็น/อยู่/คือ', are: 'เป็น/อยู่/คือ', was: 'เคยเป็น/อยู่', were: 'เคยเป็น/อยู่',
        be: 'เป็น/อยู่/คือ', been: 'เป็น/เคย', being: 'กำลังเป็น', do: 'ทำ / ช่วยถาม', does: 'ทำ (เอกพจน์)', did: 'ได้ทำแล้ว',
        have: 'มี / ได้...แล้ว', has: 'มี (เอกพจน์)', had: 'เคยมี', will: 'จะ', would: 'จะ / อยากจะ',
        can: 'สามารถ', could: 'สามารถ (อดีต/สุภาพ)', should: 'ควรจะ', may: 'อาจจะ / ขออนุญาต', might: 'อาจจะ', must: 'ต้อง',
        a: 'หนึ่ง (คำนำหน้านาม)', an: 'หนึ่ง (คำนำหน้านาม)', the: 'นี้/นั้น (ชี้เฉพาะ)',
        this: 'นี้', that: 'นั้น / ที่ว่า', these: 'เหล่านี้', those: 'เหล่านั้น',
        and: 'และ', or: 'หรือ', but: 'แต่', so: 'ดังนั้น / มาก', because: 'เพราะว่า', if: 'ถ้าหาก',
        in: 'ใน', on: 'บน', at: 'ที่', to: 'ถึง / ไปยัง / ที่จะ', for: 'สำหรับ / เป็นเวลา', of: 'ของ',
        with: 'กับ / ด้วย', from: 'จาก', by: 'โดย / ข้างๆ', about: 'เกี่ยวกับ / ประมาณ', into: 'เข้าไปใน',
        out: 'ออกไป', up: 'ขึ้น', down: 'ลง', not: 'ไม่', no: 'ไม่ / ไม่มี', yes: 'ใช่ / ครับ / ค่ะ',
        what: 'อะไร', where: 'ที่ไหน', when: 'เมื่อไหร่', why: 'ทำไม', who: 'ใคร', which: 'อันไหน', how: 'อย่างไร',
        there: 'ที่นั่น / มี', here: 'ที่นี่', very: 'มาก', too: 'เกินไป / ด้วย', please: 'กรุณา / ได้โปรด',
        thank: 'ขอบคุณ', thanks: 'ขอบคุณ', hello: 'สวัสดี', hi: 'สวัสดี', coffee: 'กาแฟ', tea: 'ชา',
        fell: 'หกล้ม (อดีตของ fall)', went: 'ไป (อดีตของ go)', saw: 'เห็น (อดีตของ see)',
        bought: 'ซื้อ (อดีตของ buy)', took: 'เอา/พาไป (อดีตของ take)', made: 'ทำ/สร้าง (อดีตของ make)',
        "i'm": 'ฉันคือ / ฉันกำลัง', "it's": 'มันคือ', "don't": 'ไม่', "doesn't": 'ไม่', "didn't": 'ไม่ได้',
        "can't": 'ไม่สามารถ', "won't": 'จะไม่', "there's": 'มี (เอกพจน์)', "let's": 'พวกเรา...กันเถอะ'
    };

    let enWordHintMap = null;
    function getWordHintInfo(rawToken) {
        if (!enWordHintMap) {
            enWordHintMap = new Map();
            for (let i = 0; i < totalWords; i++) {
                const w = wordsData[i];
                const k = String(w.word || '').trim().toLowerCase();
                if (k && !enWordHintMap.has(k)) enWordHintMap.set(k, w);
            }
        }
        const cleaned = String(rawToken || '').toLowerCase().replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, '');
        if (!cleaned) return null;

        if (enWordHintMap.has(cleaned)) {
            const w = enWordHintMap.get(cleaned);
            return { word: rawToken, translation: w.translation, phonetic: w.phonetic || '', speakWord: w.word };
        }
        if (FUNCTION_WORD_HINTS[cleaned]) {
            return { word: rawToken, translation: FUNCTION_WORD_HINTS[cleaned], phonetic: '', speakWord: cleaned };
        }

        const baseNoApos = cleaned.replace(/'(s|re|ve|ll|d|m)$/i, '').replace(/n't$/, '');
        const stems = [baseNoApos];
        if (baseNoApos.endsWith('ies') && baseNoApos.length > 4) stems.push(baseNoApos.slice(0, -3) + 'y');
        if (baseNoApos.endsWith('ied') && baseNoApos.length > 4) stems.push(baseNoApos.slice(0, -3) + 'y');
        if (baseNoApos.endsWith('es') && baseNoApos.length > 3) stems.push(baseNoApos.slice(0, -2));
        if (baseNoApos.endsWith('s') && baseNoApos.length > 2) stems.push(baseNoApos.slice(0, -1));
        if (baseNoApos.endsWith('ed') && baseNoApos.length > 3) {
            stems.push(baseNoApos.slice(0, -2), baseNoApos.slice(0, -1));
        }
        if (baseNoApos.endsWith('ing') && baseNoApos.length > 4) {
            stems.push(baseNoApos.slice(0, -3), baseNoApos.slice(0, -3) + 'e');
        }
        if (baseNoApos.endsWith('ly') && baseNoApos.length > 4) stems.push(baseNoApos.slice(0, -2));

        for (const st of stems) {
            if (enWordHintMap.has(st)) {
                const w = enWordHintMap.get(st);
                return { word: rawToken, translation: w.translation, phonetic: w.phonetic || '', speakWord: cleaned };
            }
            if (FUNCTION_WORD_HINTS[st]) {
                return { word: rawToken, translation: FUNCTION_WORD_HINTS[st], phonetic: '', speakWord: cleaned };
            }
        }
        return null;
    }

    function renderHintableSentenceHtml(sentence, skipBlankPlaceholder = false) {
        const parts = String(sentence || '').split(/(\s+)/);
        return parts.map(part => {
            if (/^\s+$/.test(part)) return part;
            if (skipBlankPlaceholder && part.includes('______')) {
                return '<span class="cloze-inline-slot" data-cloze-slot>______</span>';
            }
            const m = part.match(/^([^A-Za-z0-9']*)([A-Za-z0-9']+)([^A-Za-z0-9']*)$/);
            if (!m) return escapeHtml(part);
            const [, lead, core, trail] = m;
            const hint = getWordHintInfo(core);
            if (!hint) return escapeHtml(part);
            return `${escapeHtml(lead)}<button type="button" class="hint-word-btn" data-hint-token="${escapeHtml(core)}" title="แตะดูคำแปล">${escapeHtml(core)}</button>${escapeHtml(trail)}`;
        }).join('');
    }

    function wireHintButtons(stageBody) {
        if (!stageBody) return;
        let popover = stageBody.querySelector('.lesson-word-hint-popover');
        if (!popover) {
            popover = document.createElement('div');
            popover.className = 'lesson-word-hint-popover';
            popover.hidden = true;
            stageBody.appendChild(popover);
        }

        const closePopover = () => {
            popover.hidden = true;
            stageBody.querySelectorAll('.hint-word-btn.is-active').forEach(b => b.classList.remove('is-active'));
        };

        stageBody.querySelectorAll('.hint-word-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const alreadyActive = btn.classList.contains('is-active');
                closePopover();
                if (alreadyActive) return;

                const token = btn.dataset.hintToken || '';
                const info = getWordHintInfo(token);
                if (!info) return;

                btn.classList.add('is-active');
                SoundFX.hint();
                popover.innerHTML = `
          <div class="lesson-word-hint-text">
            <strong>${escapeHtml(info.translation)}</strong>
            <span>${escapeHtml(token)}${info.phonetic ? ` · ${escapeHtml(info.phonetic)}` : ''}</span>
          </div>
          <button type="button" class="glass-btn-icon small hint-pop-speak" aria-label="ฟังเสียงคำนี้">🔊</button>
        `;
                popover.hidden = false;

                const bodyRect = stageBody.getBoundingClientRect();
                const btnRect = btn.getBoundingClientRect();
                const popW = Math.min(250, Math.max(170, popover.offsetWidth || 190));
                const rawLeft = btnRect.left - bodyRect.left + (btnRect.width / 2) - (popW / 2);
                const clampedLeft = Math.max(10, Math.min(rawLeft, Math.max(10, stageBody.clientWidth - popW - 10)));
                const popH = popover.offsetHeight || 56;
                const belowTop = btnRect.bottom - bodyRect.top + 8;
                const aboveTop = btnRect.top - bodyRect.top - popH - 8;
                // Prefer above the sentence so hint popover never blocks the Word Bank tray below
                const finalTop = aboveTop >= 8
                    ? aboveTop
                    : ((belowTop + popH <= stageBody.clientHeight - 8) ? belowTop : Math.max(8, stageBody.clientHeight - popH - 8));
                popover.style.left = `${Math.round(clampedLeft)}px`;
                popover.style.top = `${Math.round(finalTop)}px`;

                popover.querySelector('.hint-pop-speak')?.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    speakWordOverride(info.speakWord || token, true, ev.currentTarget);
                });
            });
        });

        stageBody.addEventListener('click', (e) => {
            if (!e.target.closest('.hint-word-btn') && !e.target.closest('.lesson-word-hint-popover')) {
                closePopover();
            }
        });
    }

    // 3. Curated Real-Life Dialogues across all 12 topics (Dialogue Completion Mode — 12x12 = 144 dialogues)
    const OX_DIALOGUES_BY_TOPIC = {
        basics: [
            { promptEn: 'Nice to meet you!', promptTh: 'ยินดีที่ได้รู้จักนะ!', answerEn: 'Nice to meet you too.', answerTh: 'ยินดีที่ได้รู้จักเช่นกัน', distractors: ['See you tomorrow morning.', 'It is on the table.', 'My bag is very heavy.', 'Please close the door.'] },
            { promptEn: 'What time is it now?', promptTh: 'ตอนนี้กี่โมงแล้ว?', answerEn: 'It is half past eight.', answerTh: 'ตอนนี้แปดโมงครึ่งแล้ว', distractors: ['I live near the school.', 'Yes, she is my sister.', 'The soup is quite hot.', 'We took the blue bus.'] },
            { promptEn: 'Can you help me please?', promptTh: 'ช่วยฉันหน่อยได้ไหม?', answerEn: 'Of course, no problem!', answerTh: 'ได้เลย ไม่มีปัญหา!', distractors: ['I had breakfast already.', 'The train arrived early.', 'Her coat is dark green.', 'We live on Fifth Street.'] },
            { promptEn: 'Are you ready to go?', promptTh: 'คุณพร้อมจะไปหรือยัง?', answerEn: 'Yes, let us start now.', answerTh: 'พร้อมแล้ว เริ่มกันเลย', distractors: ['No, it is too salty.', 'That coat is very warm.', 'My phone is out of battery.', 'He teaches basic math.'] },
            { promptEn: 'How are you doing today?', promptTh: 'วันนี้คุณเป็นอย่างไรบ้าง?', answerEn: 'Very well, thank you!', answerTh: 'สบายดีมาก ขอบคุณนะ!', distractors: ['It costs fifty baht.', 'Under the wooden chair.', 'Usually at seven thirty.', 'Yesterday was quite rainy.'] },
            { promptEn: 'Excuse me, what is your name?', promptTh: 'ขอโทษนะครับ คุณชื่ออะไร?', answerEn: 'My name is Anan.', answerTh: 'ฉันชื่ออนันต์ครับ', distractors: ['I came here by train.', 'Ten minutes ago, maybe.', 'This pen is black ink.', 'Yes, I like cold juice.'] },
            { promptEn: 'Do you speak English?', promptTh: 'คุณพูดภาษาอังกฤษได้ไหม?', answerEn: 'Yes, a little bit.', answerTh: 'ได้ครับ/ค่ะ นิดหน่อย', distractors: ['Tomorrow morning at nine.', 'Put it beside the lamp.', 'Two tickets for the show.', 'The store opens soon.'] },
            { promptEn: 'Where are you from?', promptTh: 'คุณมาจากที่ไหน?', answerEn: 'I am from Chiang Mai.', answerTh: 'ฉันมาจากเชียงใหม่', distractors: ['Because I woke up late.', 'Five apples in a bag.', 'She likes playing chess.', 'Turn right after the bridge.'] },
            { promptEn: 'Could you repeat that slowly?', promptTh: 'ช่วยพูดซ้ำช้าๆ อีกครั้งได้ไหม?', answerEn: 'Sure, listen carefully.', answerTh: 'ได้เลย ตั้งใจฟังนะ', distractors: ['Breakfast was delicious.', 'I bought it last Friday.', 'Her office is upstairs.', 'Wait by the main gate.'] },
            { promptEn: 'Thank you very much!', promptTh: 'ขอบคุณมากเลยนะ!', answerEn: 'You are most welcome.', answerTh: 'ด้วยความยินดีอย่างยิ่ง', distractors: ['That will be twelve dollars.', 'Yes, inside the drawer.', 'Wait until next Tuesday.', 'He walks every morning.'] },
            { promptEn: 'How old is your little cat?', promptTh: 'ลูกแมวของคุณอายุเท่าไหร่แล้ว?', answerEn: 'She is two years old.', answerTh: 'เธออายุสองขวบแล้ว', distractors: ['Yes, we studied English.', 'On top of the bookshelf.', 'Please wait a moment.', 'The weather looks clear.'] },
            { promptEn: 'Have a great weekend!', promptTh: 'ขอให้สนุกกับวันหยุดสุดสัปดาห์นะ!', answerEn: 'Thanks, same to you!', answerTh: 'ขอบคุณ เช่นกันนะ!', distractors: ['Open page twenty-four.', 'It weighs three kilos.', 'I drank iced coffee.', 'Call me at the station.'] }
        ],
        food: [
            { promptEn: 'Tea or coffee?', promptTh: 'รับชาหรือกาแฟดี?', answerEn: 'Tea, please.', answerTh: 'ขอชา ได้โปรด', distractors: ['Yes, I am tired.', 'Welcome to my home.', 'Turn off the light.', 'He works downtown.'] },
            { promptEn: 'How does the soup taste?', promptTh: 'ซุปรสชาติเป็นอย่างไรบ้าง?', answerEn: 'It is delicious and warm.', answerTh: 'อร่อยและอุ่นกำลังดี', distractors: ['I bought a new ticket.', 'Please open the window.', 'Her desk is very clean.', 'We met at the park.'] },
            { promptEn: 'Would you like more water?', promptTh: 'รับน้ำเพิ่มอีกไหม?', answerEn: 'No thanks, I am full.', answerTh: 'ไม่เป็นไร ขอบคุณ ฉันอิ่มแล้ว', distractors: ['He arrived at the office.', 'Turn left at the corner.', 'She wrote a short note.', 'The movie starts at eight.'] },
            { promptEn: 'What do you eat for breakfast?', promptTh: 'มื้อเช้าคุณกินอะไร?', answerEn: 'Usually bread and eggs.', answerTh: 'ปกติกินขนมปังกับไข่', distractors: ['It costs twenty dollars.', 'She speaks two languages.', 'I lost my umbrella.', 'Tomorrow will be cloudy.'] },
            { promptEn: 'Are you ready to order?', promptTh: 'คุณพร้อมสั่งอาหารหรือยัง?', answerEn: 'Yes, fried rice please.', answerTh: 'พร้อมแล้ว ขอข้าวผัดจานหนึ่ง', distractors: ['It takes thirty minutes.', 'Wait at platform four.', 'The library is closed.', 'My shoes are wet.'] },
            { promptEn: 'Is this dish spicy?', promptTh: 'อาหารจานนี้เผ็ดไหม?', answerEn: 'Only a little bit.', answerTh: 'เผ็ดแค่นิดเดียวเอง', distractors: ['He drives a white van.', 'Behind the blue building.', 'Three days every month.', 'Yes, I passed the test.'] },
            { promptEn: 'Can I have the bill please?', promptTh: 'ขอเก็บเงินหน่อยได้ไหมครับ?', answerEn: 'Sure, coming right up.', answerTh: 'ได้เลย สักครู่นะครับ', distractors: ['She plays the piano.', 'Put your coat over there.', 'Our train left early.', 'Winter feels very cold.'] },
            { promptEn: 'Do we have fresh milk left?', promptTh: 'เรายังเหลือนมสดอยู่ไหม?', answerEn: 'Yes, one bottle in the fridge.', answerTh: 'เหลืออยู่หนึ่งขวดในตู้เย็น', distractors: ['I finished my homework.', 'Walk straight two blocks.', 'They invited every neighbor.', 'Look at that tall tree.'] },
            { promptEn: 'What fruit is in season now?', promptTh: 'ตอนนี้มีผลไม้อะไรตามฤดูกาลบ้าง?', answerEn: 'Sweet mangoes are everywhere.', answerTh: 'มะม่วงหวานมีขายเต็มไปหมดเลย', distractors: ['The meeting ended early.', 'Wash your hands first.', 'He fixed the broken chair.', 'Keep the receipt safe.'] },
            { promptEn: 'Would you care for dessert?', promptTh: 'รับของหวานสักหน่อยไหม?', answerEn: 'A small scoop of ice cream.', answerTh: 'ขอไอศกรีมลูกเล็กๆ สักลูก', distractors: ['Turn down the radio.', 'Tomorrow is Monday.', 'She wears warm gloves.', 'Lock the back gate.'] },
            { promptEn: 'Where did you learn to cook?', promptTh: 'คุณเรียนทำอาหารมาจากไหน?', answerEn: 'My grandmother taught me.', answerTh: 'คุณยายเป็นคนสอนฉันเอง', distractors: ['Fifty baht per kilo.', 'On the top shelf.', 'Wait until five o’clock.', 'That street is quiet.'] },
            { promptEn: 'Does this cake contain nuts?', promptTh: 'เค้กชิ้นนี้มีถั่วผสมไหม?', answerEn: 'No, it is completely nut-free.', answerTh: 'ไม่มีเลย ไม่มีถั่วแน่นอน', distractors: ['He lives with two cousins.', 'Bring a jacket tonight.', 'The exam was pretty fair.', 'Please sign at the bottom.'] }
        ],
        body: [
            { promptEn: 'What is wrong today?', promptTh: 'วันนี้เป็นอะไรไปหรือเปล่า?', answerEn: 'I have a slight headache.', answerTh: 'ฉันปวดหัวนิดหน่อย', distractors: ['The museum closes at five.', 'This soup tastes sweet.', 'Put it inside the box.', 'Our flight is delayed.'] },
            { promptEn: 'Did you sleep well last night?', promptTh: 'เมื่อคืนหลับสบายไหม?', answerEn: 'Yes, I feel much better.', answerTh: 'ใช่ ฉันรู้สึกดีขึ้นมากแล้ว', distractors: ['We ordered some fruit.', 'The desk is next to the door.', 'Buy two stamps please.', 'Her scarf is purple.'] },
            { promptEn: 'Should we call a doctor?', promptTh: 'เราควรโทรหาหมอไหม?', answerEn: 'Yes, please call the clinic.', answerTh: 'ดีเลย ช่วยโทรหาคลินิกที', distractors: ['No, the bag is blue.', 'I read that book yesterday.', 'Dinner is on the stove.', 'They painted the fence.'] },
            { promptEn: 'How often do you exercise?', promptTh: 'คุณออกกำลังกายบ่อยแค่ไหน?', answerEn: 'Three times every week.', answerTh: 'สัปดาห์ละสามครั้ง', distractors: ['Because the weather is cold.', 'On the second floor.', 'Yes, chocolate flavor please.', 'Write with a dark pen.'] },
            { promptEn: 'Does your ankle still hurt?', promptTh: 'ข้อเท้าของคุณยังเจ็บอยู่ไหม?', answerEn: 'Only when I walk fast.', answerTh: 'เจ็บเฉพาะตอนเดินเร็วๆ น่ะ', distractors: ['At the corner bakery.', 'We watched a comedy film.', 'Her notebook is yellow.', 'Open the kitchen curtain.'] },
            { promptEn: 'Did you take your medicine?', promptTh: 'คุณกินยาแล้วหรือยัง?', answerEn: 'Yes, right after breakfast.', answerTh: 'กินแล้ว หลังอาหารเช้าพอดี', distractors: ['The park has green benches.', 'Four tickets for Saturday.', 'She knows three songs.', 'Clean water flows cleanly.'] },
            { promptEn: 'Why are you drinking warm tea?', promptTh: 'ทำไมคุณถึงดื่มชาร้อนล่ะ?', answerEn: 'It helps soothe my throat.', answerTh: 'มันช่วยให้ชุ่มคอน่ะ', distractors: ['Next to the post office.', 'Because the bus broke down.', 'Two pencils and a ruler.', 'My keys fell outside.'] },
            { promptEn: 'When is your dental checkup?', promptTh: 'นัดตรวจฟันของคุณเมื่อไหร่?', answerEn: 'Next Wednesday afternoon.', answerTh: 'บ่ายวันพุธหน้า', distractors: ['Behind the glass jar.', 'It tastes too sour.', 'Yes, ten kilograms total.', 'Close the front window.'] },
            { promptEn: 'Remember to stretch before running.', promptTh: 'อย่าลืมยืดเส้นยืดสายก่อนวิ่งนะ', answerEn: 'Good idea, I will warm up.', answerTh: 'ไอเดียดี เดี๋ยวฉันวอร์มร่างกายก่อน', distractors: ['Turn off the bedroom lamp.', 'These apples cost forty baht.', 'Our teacher checked the quiz.', 'The hotel lobby is quiet.'] },
            { promptEn: 'Do your eyes feel tired?', promptTh: 'รู้สึกตาล้าบ้างไหม?', answerEn: 'Yes, I stared at screens all day.', answerTh: 'ใช่ ฉันจ้องหน้าจอมาทั้งวันเลย', distractors: ['No, it rains in July.', 'Bake the bread for ten minutes.', 'My cousin lives nearby.', 'Take the elevator upstairs.'] },
            { promptEn: 'How much water should I drink?', promptTh: 'ฉันควรดื่มน้ำมากแค่ไหน?', answerEn: 'About eight glasses daily.', answerTh: 'ประมาณวันละแปดแก้ว', distractors: ['With my best friend.', 'Around the city square.', 'Because the shop closed.', 'That sweater fits nicely.'] },
            { promptEn: 'Have you rested enough today?', promptTh: 'วันนี้คุณพักผ่อนเพียงพอหรือยัง?', answerEn: 'Almost, I will sleep early tonight.', answerTh: 'เกือบพอแล้ว คืนนี้จะรีบนอน', distractors: ['The train reached London.', 'Put extra ice inside.', 'She drew a small bird.', 'This dictionary is thick.'] }
        ],
        home: [
            { promptEn: 'Where should I put my bag?', promptTh: 'ฉันควรวางกระเป๋าไว้ตรงไหนดี?', answerEn: 'Put it beside the sofa.', answerTh: 'วางไว้ข้างโซฟาได้เลย', distractors: ['We visited the zoo.', 'I am studying history.', 'Yes, add some pepper.', 'She runs every morning.'] },
            { promptEn: 'Is the front door locked?', promptTh: 'ล็อคประตูหน้าหรือยัง?', answerEn: 'Yes, I checked it twice.', answerTh: 'ล็อคแล้ว ฉันตรวจดูสองรอบแล้ว', distractors: ['She plays tennis well.', 'That apple is fresh.', 'Two miles down the road.', 'He speaks three languages.'] },
            { promptEn: 'Could you turn on the light?', promptTh: 'ช่วยเปิดไฟหน่อยได้ไหม?', answerEn: 'Sure, it was getting dark.', answerTh: 'ได้เลย กำลังมืดพอดี', distractors: ['I ate lunch with Tom.', 'Our flight leaves soon.', 'She bought a silver watch.', 'It snowed in December.'] },
            { promptEn: 'Whose keys are on the table?', promptTh: 'กุญแจบนโต๊ะของใครน่ะ?', answerEn: 'Oh, those are mine!', answerTh: 'อ๋อ ของฉันเอง!', distractors: ['Tomorrow will be sunny.', 'He wrote a long letter.', 'Five dollars each.', 'We went by subway.'] },
            { promptEn: 'Where do we keep clean towels?', promptTh: 'เราเก็บผ้าเช็ดตัวสะอาดไว้ที่ไหน?', answerEn: 'In the top bathroom drawer.', answerTh: 'ในลิ้นชักบนในห้องน้ำ', distractors: ['Because the exam started.', 'No, thank you anyway.', 'Warm bread smells wonderful.', 'He caught the morning bus.'] },
            { promptEn: 'Can someone water the balcony plants?', promptTh: 'มีใครช่วยรดน้ำต้นไม้ที่ระเบียงได้ไหม?', answerEn: 'I already watered them this morning.', answerTh: 'ฉันรดให้ไปแล้วเมื่อเช้านี้', distractors: ['The station is across the street.', 'Wear a helmet while cycling.', 'My laptop needs charging.', 'Order two cups of tea.'] },
            { promptEn: 'Did you hear the doorbell ring?', promptTh: 'ได้ยินเสียงกริ่งหน้าบ้านไหม?', answerEn: 'Yes, a delivery just arrived.', answerTh: 'ได้ยิน พัสดุเพิ่งมาส่งพอดี', distractors: ['Green vegetables are healthy.', 'Keep your voice down please.', 'This math rule helps.', 'Next Friday looks bright.'] },
            { promptEn: 'How bright is the living room?', promptTh: 'ห้องนั่งเล่นสว่างแค่ไหน?', answerEn: 'Lots of sunlight pours in.', answerTh: 'แสงแดดส่องเข้ามาเต็มที่เลย', distractors: ['Yes, I baked cookies.', 'Wait by platform two.', 'She hurt her left wrist.', 'Write your address clearly.'] },
            { promptEn: 'Which shelf holds the cookbooks?', promptTh: 'ชั้นไหนวางหนังสือทำอาหารไว้?', answerEn: 'The wooden one near the kitchen.', answerTh: 'ชั้นไม้ตรงใกล้ๆ ห้องครัว', distractors: ['Tomorrow at noon sharp.', 'I drank cold orange juice.', 'They cheered for the team.', 'Pay at the counter.'] },
            { promptEn: 'Should we open the bedroom window?', promptTh: 'เราเปิดหน้าต่างห้องนอนดีไหม?', answerEn: 'Yes, let some fresh air in.', answerTh: 'เปิดเลย ให้ลมเย็นๆ เข้ามาหน่อย', distractors: ['No, the test is Friday.', 'Mix eggs and flour together.', 'He bought a train pass.', 'Follow the nurse inside.'] },
            { promptEn: 'Who swept the floor so cleanly?', promptTh: 'ใครกวาดพื้นซะสะอาดเอี่ยมเลย?', answerEn: 'My sister cleaned it earlier.', answerTh: 'น้องสาวฉันทำความสะอาดไว้เมื่อกี้', distractors: ['Take the first left turn.', 'Ten percent discount today.', 'The river looks peaceful.', 'Bring a notebook to class.'] },
            { promptEn: 'Does this lamp need a new bulb?', promptTh: 'โคมไฟนี้ต้องเปลี่ยนหลอดไฟใหม่ไหม?', answerEn: 'Yes, it stopped shining yesterday.', answerTh: 'ต้องเปลี่ยน มันดับไปตั้งแต่เมื่อวาน', distractors: ['At the corner grocery store.', 'She passed the driving test.', 'Boil the water first.', 'Our neighbors are friendly.'] }
        ],
        people: [
            { promptEn: 'Who is that standing by the gate?', promptTh: 'คนที่ยืนตรงประตูรั้วนั่นใครน่ะ?', answerEn: 'That is our new neighbor.', answerTh: 'นั่นเพื่อนบ้านคนใหม่ของเรา', distractors: ['The kitchen is very clean.', 'We need two bottles of milk.', 'Open the window slightly.', 'I missed the early bus.'] },
            { promptEn: 'How many siblings do you have?', promptTh: 'คุณมีพี่น้องกี่คน?', answerEn: 'I have one younger brother.', answerTh: 'ฉันมีน้องชายหนึ่งคน', distractors: ['At seven in the evening.', 'It is very windy outside.', 'Bake for twenty minutes.', 'The blue pen works well.'] },
            { promptEn: 'Does your friend live nearby?', promptTh: 'เพื่อนของคุณอาศัยอยู่แถวนี้ไหม?', answerEn: 'Yes, just five minutes away.', answerTh: 'ใช่ ห่างออกไปแค่ห้านาทีเอง', distractors: ['I like sweet oranges.', 'The report is finished.', 'Wear warm boots outside.', 'Turn off the stove.'] },
            { promptEn: 'Can I introduce you to Lisa?', promptTh: 'ขอแนะนำให้รู้จักกับลิซ่าหน่อยนะ?', answerEn: 'Sure, happy to meet her!', answerTh: 'ได้เลย ยินดีที่จะได้รู้จัก!', distractors: ['Please bring your umbrella.', 'The meeting starts at noon.', 'Wash the apples first.', 'Two tickets to Bangkok.'] },
            { promptEn: 'What does your uncle do?', promptTh: 'คุณลุงของคุณทำงานอะไร?', answerEn: 'He builds wooden furniture.', answerTh: 'ท่านทำเฟอร์นิเจอร์ไม้น่ะ', distractors: ['Under the big oak tree.', 'Yes, without ice please.', 'Ten minutes by bicycle.', 'The exam starts tomorrow.'] },
            { promptEn: 'Do you resemble your mother?', promptTh: 'คุณหน้าเหมือนคุณแม่ไหม?', answerEn: 'Everyone says we share the same smile.', answerTh: 'ทุกคนบอกว่าเรายิ้มเหมือนกันเลย', distractors: ['Because the road was wet.', 'Put the cups in the sink.', 'Thirty baht a bowl.', 'Please sign this receipt.'] },
            { promptEn: 'Who invited everyone to dinner?', promptTh: 'ใครเป็นคนชวนทุกคนมาทานข้าวเย็น?', answerEn: 'Aunt May planned the whole party.', answerTh: 'ป้าเมย์เป็นคนวางแผนจัดงานทั้งหมดเลย', distractors: ['The sky turned bright orange.', 'Cross at the zebra crossing.', 'I forgot my library card.', 'Take this pill after meals.'] },
            { promptEn: 'Is Sarah still studying abroad?', promptTh: 'ซาร่ายังเรียนต่อที่ต่างประเทศอยู่ไหม?', answerEn: 'Yes, she comes home next summer.', answerTh: 'ใช่ เธอจะกลับบ้านช่วงหน้าร้อนหน้า', distractors: ['Add a pinch of salt.', 'The lamp is next to the bed.', 'Look at those dark clouds.', 'My phone slipped outside.'] },
            { promptEn: 'Did your parents enjoy the trip?', promptTh: 'คุณพ่อคุณแม่ชอบทริปนี้ไหม?', answerEn: 'They loved the peaceful beach.', answerTh: 'ท่านชอบชายหาดที่เงียบสงบมาก', distractors: ['Open page twelve now.', 'Wait until the light turns green.', 'Keep the milk refrigerated.', 'My ankle feels better.'] },
            { promptEn: 'How long have you known Ken?', promptTh: 'คุณรู้จักเคนมานานแค่ไหนแล้ว?', answerEn: 'Since we were in high school.', answerTh: 'ตั้งแต่สมัยเรียนมัธยมปลายแล้ว', distractors: ['At the hospital pharmacy.', 'Slice the bread thinly.', 'Yes, a round-trip ticket.', 'Turn the heater down.'] },
            { promptEn: 'Are the children already asleep?', promptTh: 'เด็กๆ นอนหลับกันหมดหรือยัง?', answerEn: 'Yes, right after their bedtime story.', answerTh: 'หลับแล้ว ทันทีที่ฟังนิทานก่อนนอนจบ', distractors: ['No, the market opens early.', 'Bring two extra chairs.', 'The project passed review.', 'Wear sunglasses outside.'] },
            { promptEn: 'Who can help carry these boxes?', promptTh: 'ใครช่วยยกกล่องพวกนี้ได้บ้าง?', answerEn: 'Tom and I will grab them.', answerTh: 'เดี๋ยวทอมกับฉันช่วยยกให้เอง', distractors: ['This curry is mild.', 'Winter begins in December.', 'Check your passport date.', 'Write the date on top.'] }
        ],
        travel: [
            { promptEn: 'Where is the emergency exit?', promptTh: 'ทางออกฉุกเฉินอยู่ที่ไหน?', answerEn: 'Down the hall on the left.', answerTh: 'เดินตรงไปแล้วเลี้ยวซ้าย', distractors: ['Yes, I enjoy music.', 'Coffee without sugar, please.', 'My cousin cooks dinner.', 'The essay needs editing.'] },
            { promptEn: 'Does this bus go downtown?', promptTh: 'รถบัสคันนี้ไปใจกลางเมืองไหม?', answerEn: 'Yes, get off at the third stop.', answerTh: 'ใช่ ลงที่ป้ายที่สามนะ', distractors: ['My brother works at home.', 'She is feeling very happy.', 'Boil the noodles gently.', 'Lock the garden gate.'] },
            { promptEn: 'How long is the train ride?', promptTh: 'นั่งรถไฟนานแค่ไหน?', answerEn: 'About forty minutes total.', answerTh: 'รวมทั้งหมดประมาณสี่สิบนาที', distractors: ['He wears a warm jacket.', 'They planted many flowers.', 'Yes, stir with a spoon.', 'My knee hurts slightly.'] },
            { promptEn: 'Do you have your passport ready?', promptTh: 'เตรียมพาสปอร์ตพร้อมหรือยัง?', answerEn: 'Yes, it is right in my hand.', answerTh: 'พร้อมแล้ว อยู่ในมือเลย', distractors: ['This room has two beds.', 'I failed the math quiz.', 'Clean the dining table.', 'Add ice to the glass.'] },
            { promptEn: 'Which gate does our flight leave from?', promptTh: 'เที่ยวบินของเราขึ้นเครื่องที่ประตูไหน?', answerEn: 'Gate twelve on the upper level.', answerTh: 'ประตูสิบสองที่ชั้นบนครับ', distractors: ['Yes, two fried eggs please.', 'She finished painting today.', 'Put socks in the drawer.', 'The doctor arrived early.'] },
            { promptEn: 'How far is the museum from here?', promptTh: 'พิพิธภัณฑ์อยู่ไกลจากที่นี่ไหม?', answerEn: 'Just a ten-minute walk.', answerTh: 'เดินไปแค่สิบนาทีเอง', distractors: ['Three spoons of sugar.', 'My aunt teaches art.', 'Open the textbook first.', 'Keep warm under a blanket.'] },
            { promptEn: 'Can I book a window seat?', promptTh: 'ขอจองที่นั่งริมหน้าต่างได้ไหม?', answerEn: 'Sure, seat 14A is still open.', answerTh: 'ได้เลย ที่นั่ง 14A ยังว่างอยู่', distractors: ['Wash your face with water.', 'He swept the living room.', 'Today feels very humid.', 'We passed the science test.'] },
            { promptEn: 'Where can I buy a subway card?', promptTh: 'ซื้อบัตรรถไฟใต้ดินได้ที่ไหน?', answerEn: 'At the ticket machine over there.', answerTh: 'ที่ตู้ขายตั๋วตรงนั้นเลย', distractors: ['No, the lemon tastes sour.', 'Her uncle grows roses.', 'Call the clinic tomorrow.', 'Send the file before noon.'] },
            { promptEn: 'Did the taxi arrive on time?', promptTh: 'แท็กซี่มาถึงตรงเวลาไหม?', answerEn: 'Yes, five minutes early.', answerTh: 'ตรงเวลา แถมมาก่อนห้านาทีด้วย', distractors: ['It weighs two kilograms.', 'Mix milk with cereal.', 'My sister plays violin.', 'The library stays quiet.'] },
            { promptEn: 'Is breakfast included at the hotel?', promptTh: 'ที่โรงแรมรวมอาหารเช้าด้วยไหม?', answerEn: 'Yes, served from six to ten.', answerTh: 'รวมครับ เสิร์ฟตั้งแต่หกโมงถึงสิบโมง', distractors: ['Turn off the bedroom fan.', 'Look at the bright moon.', 'She hurt her shoulder.', 'The manager checked the plan.'] },
            { promptEn: 'Should we carry cash or a card?', promptTh: 'เราควรพกเงินสดหรือบัตรดี?', answerEn: 'Bring both, just in case.', answerTh: 'พกไว้ทั้งสองอย่างเลย เผื่อไว้', distractors: ['Behind the science lab.', 'Yes, she is my cousin.', 'This blanket feels soft.', 'Water boils at one hundred.'] },
            { promptEn: 'Have you packed your suitcase yet?', promptTh: 'จัดกระเป๋าเดินทางเสร็จหรือยัง?', answerEn: 'Almost, just adding my charger.', answerTh: 'เกือบเสร็จแล้ว เหลือใส่สายชาร์จ', distractors: ['The river flows south.', 'Two slices of toasted bread.', 'Everyone cheered loudly.', 'Brush teeth twice daily.'] }
        ],
        nature: [
            { promptEn: 'Should I take an umbrella today?', promptTh: 'วันนี้ฉันควรพกร่มไปด้วยไหม?', answerEn: 'Yes, it might rain later.', answerTh: 'ควรนะ เดี๋ยวฝนอาจจะตก', distractors: ['The ticket costs ten dollars.', 'Turn off the computer first.', 'Bake the pie slowly.', 'He sits beside his friend.'] },
            { promptEn: 'How is the weather outside?', promptTh: 'ข้างนอกอากาศเป็นยังไงบ้าง?', answerEn: 'Cool and sunny with a light breeze.', answerTh: 'เย็นสบาย แดดออก และมีลมอ่อนๆ', distractors: ['She signed the contract.', 'I lost my house key.', 'Pass me the soy sauce.', 'My cousin graduated yesterday.'] },
            { promptEn: 'Did you enjoy the mountain hike?', promptTh: 'เดินป่าขึ้นเขาสนุกไหม?', answerEn: 'Yes, the view was amazing!', answerTh: 'สนุกมาก วิวสวยสุดๆ เลย!', distractors: ['We need to pay the bill.', 'The glass broke yesterday.', 'Write your name at the top.', 'The dentist checked my tooth.'] },
            { promptEn: 'Why are the plants growing fast?', promptTh: 'ทำไมต้นไม้โตเร็วจัง?', answerEn: 'Because they get plenty of sun.', answerTh: 'เพราะพวกมันได้รับแสงแดดเต็มที่', distractors: ['Please pass me the salt.', 'He arrived at the station.', 'Wear clean shoes indoors.', 'The office opens at nine.'] },
            { promptEn: 'Look! A rainbow appeared over the lake.', promptTh: 'ดูสิ! มีรุ้งกินน้ำขึ้นเหนือทะเลสาบด้วย', answerEn: 'Wow, the colors look so clear!', answerTh: 'ว้าว สีสันชัดมากเลย!', distractors: ['Take two pills with water.', 'Lock the kitchen door.', 'Our team finished the slide.', 'Turn left at the bank.'] },
            { promptEn: 'What season brings colorful leaves?', promptTh: 'ฤดูไหนที่ใบไม้เปลี่ยนสีสวยๆ?', answerEn: 'Autumn makes the forest golden.', answerTh: 'ฤดูใบไม้ร่วงทำให้ป่าเป็นสีทองเลย', distractors: ['Coffee with less ice please.', 'Yes, her brother is a chef.', 'Pack three pairs of socks.', 'Study unit four tonight.'] },
            { promptEn: 'Is the sea calm enough for swimming?', promptTh: 'วันนี้ทะเลสงบพอจะว่ายน้ำได้ไหม?', answerEn: 'Yes, the waves look very gentle.', answerTh: 'ได้นะ คลื่นดูเบาและสงบดี', distractors: ['No, the printer is busy.', 'Bring a fork and spoon.', 'She lives on the top floor.', 'The homework takes ten minutes.'] },
            { promptEn: 'Did frost cover the grass this morning?', promptTh: 'เมื่อเช้ามีน้ำค้างแข็งเกาะบนหญ้าไหม?', answerEn: 'Yes, everything sparkled white.', answerTh: 'มีสิ ทุกอย่างขาวระยิบระยับเลย', distractors: ['Send me a voice message.', 'Put the bowls on the counter.', 'That train stops at York.', 'He recovered after resting.'] },
            { promptEn: 'Why is the sky glowing red?', promptTh: 'ทำไมท้องฟ้าเป็นสีแดงเรื่อๆ ล่ะ?', answerEn: 'The sun is setting behind the hills.', answerTh: 'พระอาทิตย์กำลังจะตกหลังเนินเขาน่ะ', distractors: ['Buy tickets at window three.', 'Mix honey into warm milk.', 'She typed the report quickly.', 'Open the study guide now.'] },
            { promptEn: 'Can we camp beside that river?', promptTh: 'เราตั้งแคมป์ริมแม่น้ำตรงนั้นได้ไหม?', answerEn: 'Sure, the ground is flat and dry.', answerTh: 'ได้เลย พื้นเรียบและแห้งดี', distractors: ['Yes, I prefer math class.', 'Wash vegetables before cooking.', 'His uncle lives in Osaka.', 'Please fasten your seat belt.'] },
            { promptEn: 'Are strong winds expected tonight?', promptTh: 'คืนนี้คาดว่าจะมีลมแรงไหม?', answerEn: 'Yes, a storm is moving north.', answerTh: 'มีนะ พายุกำลังเคลื่อนไปทางเหนือ', distractors: ['Two bottles of sparkling water.', 'Her desk faces the door.', 'Wait ten minutes for boarding.', 'Everyone praised his speech.'] },
            { promptEn: 'When do cherry trees bloom here?', promptTh: 'ที่นี่ต้นซากุระบานช่วงไหน?', answerEn: 'Usually early every spring.', answerTh: 'ปกติช่วงต้นฤดูใบไม้ผลิของทุกปี', distractors: ['In the hall closet.', 'He ordered grilled salmon.', 'Review chapter five again.', 'Use this bandage carefully.'] }
        ],
        feelings: [
            { promptEn: 'You look excited today!', promptTh: 'วันนี้คุณดูตื่นเต้นจังเลย!', answerEn: 'I finally passed my exam!', answerTh: 'ในที่สุดฉันก็สอบผ่านแล้ว!', distractors: ['Put the dishes in the sink.', 'The airport is two miles away.', 'Boil rice for fifteen minutes.', 'Turn off the porch light.'] },
            { promptEn: 'Are you nervous about the speech?', promptTh: 'คุณกังวลเรื่องการพูดสุนทรพจน์ไหม?', answerEn: 'A little, but I practiced a lot.', answerTh: 'นิดหน่อย แต่ฉันซ้อมมาเยอะแล้ว', distractors: ['There are twenty chairs here.', 'We ate rice and fish.', 'Park near the side gate.', 'Keep milk in the fridge.'] },
            { promptEn: 'Why does Mark seem upset?', promptTh: 'ทำไมมาร์คดูอารมณ์ไม่ดีเลย?', answerEn: 'He missed the last train home.', answerTh: 'เขาตกรถไฟขบวนสุดท้ายกลับบ้าน', distractors: ['The library opens at nine.', 'It tastes very fresh.', 'Two blankets on the sofa.', 'Add garlic and onions.'] },
            { promptEn: 'Thank you for cheering me up!', promptTh: 'ขอบคุณที่ช่วยให้กำลังใจนะ!', answerEn: 'Anytime, I am glad you smiled.', answerTh: 'ยินดีเสมอ ดีใจที่เห็นคุณยิ้มได้', distractors: ['Wait at the yellow line.', 'Our street is very quiet.', 'She typed twelve pages.', 'Buy fresh bread outside.'] },
            { promptEn: 'How did you feel after winning?', promptTh: 'ตอนชนะการแข่งขันรู้สึกยังไงบ้าง?', answerEn: 'I felt proud and relieved.', answerTh: 'ฉันรู้สึกภูมิใจและโล่งใจมาก', distractors: ['Down the stairs on the right.', 'Yes, a medium iced latte.', 'Tomorrow is rainy weather.', 'Use a clean spoon first.'] },
            { promptEn: 'Why are you smiling at your phone?', promptTh: 'ยิ้มให้กับหน้าจอมือถือเรื่องอะไรน่ะ?', answerEn: 'My sister sent a funny video.', answerTh: 'น้องสาวส่งคลิปตลกมาให้น่ะ', distractors: ['The bank closes at four.', 'We need three fresh lemons.', 'Check your luggage weight.', 'Put pillows on the bed.'] },
            { promptEn: 'Are you worried about tomorrow’s interview?', promptTh: 'กังวลเรื่องสัมภาษณ์งานพรุ่งนี้ไหม?', answerEn: 'Surprisingly calm, actually.', answerTh: 'จริงๆ แล้วกลับรู้สึกนิ่งกว่าที่คิดนะ', distractors: ['In the second aisle.', 'Ten minutes by ferry.', 'Heat butter in a pan.', 'That maple leaf is red.'] },
            { promptEn: 'Did that surprise party shock you?', promptTh: 'ปาร์ตี้เซอร์ไพรส์ทำเอาตกใจเลยไหม?', answerEn: 'Completely! I had zero clue.', answerTh: 'ตกใจสุดๆ ไม่ระแคะระคายเลย', distractors: ['Walk past the post office.', 'She studies world history.', 'Drink plenty of fluids.', 'The curtain is light gray.'] },
            { promptEn: 'What helps you relax after work?', promptTh: 'หลังเลิกงานทำอะไรถึงช่วยให้ผ่อนคลาย?', answerEn: 'Listening to soft jazz music.', answerTh: 'ฟังเพลงแจ๊สเบาๆ น่ะ', distractors: ['Two stamps for a postcard.', 'Because it snowed heavily.', 'Pass the pepper shaker.', 'Vote at the town hall.'] },
            { promptEn: 'You sound very confident now.', promptTh: 'ตอนนี้เสียงคุณฟังดูมั่นใจมากเลยนะ', answerEn: 'Preparing well really helped.', answerTh: 'การเตรียมตัวมาดีช่วยได้มากเลย', distractors: ['Put your shoes by the mat.', 'Three kilometers ahead.', 'That mango is still green.', 'Take medicine twice daily.'] },
            { promptEn: 'Why did everyone go quiet suddenly?', promptTh: 'ทำไมจู่ๆ ทุกคนเงียบไปหมดเลย?', answerEn: 'They felt touched by the story.', answerTh: 'ทุกคนซาบซึ้งกับเรื่องเล่าน่ะ', distractors: ['Buy fruit at the corner.', 'Our train arrives at six.', 'Close the front blinds.', 'Send that email right now.'] },
            { promptEn: 'Are you disappointed the picnic moved indoors?', promptTh: 'ผิดหวังไหมที่ต้องย้ายปิกนิกมาจัดในร่ม?', answerEn: 'Not really, we still have fun.', answerTh: 'ไม่นะ เรายังสนุกกันเหมือนเดิม', distractors: ['Turn left after the bridge.', 'Read paragraph three carefully.', 'Wash your hands with soap.', 'The manager praised our work.'] }
        ],
        education: [
            { promptEn: 'Did you finish the homework?', promptTh: 'ทำการบ้านเสร็จหรือยัง?', answerEn: 'Almost done, just one page left.', answerTh: 'เกือบเสร็จแล้ว เหลืออีกแค่หน้าเดียว', distractors: ['The river flows to the sea.', 'Please slice the bread.', 'Lock the front door.', 'Her cough is gone.'] },
            { promptEn: 'Which subject do you enjoy most?', promptTh: 'คุณชอบเรียนวิชาไหนมากที่สุด?', answerEn: 'Science, because I love experiments.', answerTh: 'วิทยาศาสตร์ เพราะฉันชอบทำการทดลอง', distractors: ['The hotel room was cozy.', 'Wear your coat outside.', 'Slice two ripe tomatoes.', 'My uncle drives trucks.'] },
            { promptEn: 'Where can I borrow a dictionary?', promptTh: 'ฉันยืมพจนานุกรมได้ที่ไหน?', answerEn: 'Ask the librarian upstairs.', answerTh: 'ลองถามบรรณารักษ์ที่ชั้นบนดูสิ', distractors: ['Dinner will be ready at six.', 'He runs faster than me.', 'Warm rain fell lightly.', 'Check in at counter B.'] },
            { promptEn: 'When does the next semester start?', promptTh: 'เทอมหน้าเปิดเรียนเมื่อไหร่?', answerEn: 'On the first Monday of next month.', answerTh: 'วันจันทร์แรกของเดือนหน้า', distractors: ['We bought fresh vegetables.', 'Keep your voice low please.', 'Sweep under the sofa.', 'Yes, a green tea please.'] },
            { promptEn: 'How did you prepare for the quiz?', promptTh: 'คุณเตรียมตัวสอบย่อยยังไงบ้าง?', answerEn: 'I reviewed flashcards every evening.', answerTh: 'ฉันทบทวนแฟลชการ์ดทุกเย็นเลย', distractors: ['Across from the ferry pier.', 'Add a little olive oil.', 'The wind blew hard.', 'Take rest for two days.'] },
            { promptEn: 'Could you explain this grammar rule?', promptTh: 'ช่วยอธิบายหลักไวยากรณ์ข้อนี้ได้ไหม?', answerEn: 'Sure, let us check two examples.', answerTh: 'ได้เลย มาดูตัวอย่างสักสองข้อกัน', distractors: ['Boil eggs for eight minutes.', 'Turn off the hallway light.', 'Her sister works downtown.', 'Pack warm woolen socks.'] },
            { promptEn: 'Who leads the study group tonight?', promptTh: 'คืนนี้ใครเป็นคนนำกลุ่มติว?', answerEn: 'Nadia will guide our practice.', answerTh: 'นาเดียจะช่วยนำฝึกซ้อมวันนี้', distractors: ['At the fruit market.', 'Yes, I feel much calmer.', 'Fasten your seat belt.', 'My garden needs water.'] },
            { promptEn: 'Did our class visit the museum?', promptTh: 'ห้องเราไปทัศนศึกษาที่พิพิธภัณฑ์ไหม?', answerEn: 'Yes, we sketched ancient tools.', answerTh: 'ไปสิ เราได้สเก็ตช์ภาพเครื่องมือโบราณด้วย', distractors: ['Order two bowls of soup.', 'Put plates in the cupboard.', 'His shoulder hurts today.', 'The mayor opened the bridge.'] },
            { promptEn: 'What score do we need to pass?', promptTh: 'ต้องได้กี่คะแนนถึงจะสอบผ่าน?', answerEn: 'At least seventy percent overall.', answerTh: 'อย่างน้อยเจ็ดสิบเปอร์เซ็นต์ขึ้นไป', distractors: ['Near the bus terminal.', 'Because lightning struck close.', 'Bake until golden brown.', 'Keep keys on the hook.'] },
            { promptEn: 'Are laptops allowed during lectures?', promptTh: 'เอาโน้ตบุ๊กเข้าห้องเลกเชอร์ได้ไหม?', answerEn: 'Yes, for taking typed notes.', answerTh: 'ได้ครับ เอาไว้จดบันทึกบทเรียน', distractors: ['No, the beach is rocky.', 'Two spoonfuls of honey.', 'Call the clinic first.', 'He fixed the wooden chair.'] },
            { promptEn: 'Why are students clapping in the hall?', promptTh: 'ทำไมนักเรียนปรบมือกันในหอประชุมล่ะ?', answerEn: 'Our school won the debate cup!', answerTh: 'โรงเรียนเราชนะถ้วยโต้วาทีน่ะสิ!', distractors: ['Store bread in a cool spot.', 'Her ankle swelled slightly.', 'Board at platform six.', 'Wait until the rain stops.'] },
            { promptEn: 'Can I hand in the essay tomorrow?', promptTh: 'ฉันส่งเรียงความพรุ่งนี้ได้ไหม?', answerEn: 'Yes, before four in the afternoon.', answerTh: 'ได้ ก่อนสี่โมงเย็นพรุ่งนี้นะ', distractors: ['The tea tastes bitter.', 'Turn the bedroom fan off.', 'Walk straight past the park.', 'We planted mango trees.'] }
        ],
        work: [
            { promptEn: 'When is the project deadline?', promptTh: 'กำหนดส่งโปรเจกต์คือวันไหน?', answerEn: 'This Friday before five.', answerTh: 'วันศุกร์นี้ก่อนห้าโมงเย็น', distractors: ['I spilled coffee on my shirt.', 'The garden smells lovely.', 'Boil pasta ten minutes.', 'My knee feels sore.'] },
            { promptEn: 'Who will lead today’s meeting?', promptTh: 'ใครจะเป็นคนนำการประชุมวันนี้?', answerEn: 'Our new team manager.', answerTh: 'ผู้จัดการทีมคนใหม่ของเรา', distractors: ['Two cups of green tea.', 'It snowed heavily last week.', 'Pack an extra jacket.', 'Look at the bright stars.'] },
            { promptEn: 'Can you send me that file?', promptTh: 'ช่วยส่งไฟล์นั้นให้ฉันหน่อยได้ไหม?', answerEn: 'Sure, I will email it right away.', answerTh: 'ได้เลย ฉันจะส่งอีเมลให้ทันที', distractors: ['The movie starts in ten minutes.', 'My cousin moved to Tokyo.', 'Put cushions on the chair.', 'Slice the watermelon now.'] },
            { promptEn: 'Did the client approve our design?', promptTh: 'ลูกค้าอนุมัติแบบของเราหรือยัง?', answerEn: 'Yes, they loved the clean layout.', answerTh: 'อนุมัติแล้ว พวกเขาชอบเลย์เอาต์มาก', distractors: ['Turn off the bedroom lamp.', 'She prefers cold water.', 'Walk across the footbridge.', 'I forgot my dictionary.'] },
            { promptEn: 'Where is the conference room?', promptTh: 'ห้องประชุมอยู่ที่ไหนครับ?', answerEn: 'Third floor, right beside reception.', answerTh: 'ชั้นสาม อยู่ข้างๆ เคาน์เตอร์ต้อนรับ', distractors: ['Add pepper to the eggs.', 'He reads novels every night.', 'My throat feels dry.', 'The clouds look heavy.'] },
            { promptEn: 'Are you working overtime tonight?', promptTh: 'คืนนี้คุณทำโอทีหรือเปล่า?', answerEn: 'Only thirty minutes to finish slides.', answerTh: 'แค่สามสิบนาทีเพื่อทำสไลด์ให้จบ', distractors: ['Yes, sweet pineapples please.', 'Lock the balcony door.', 'We hiked up the hill.', 'Bring two erasers to class.'] },
            { promptEn: 'How did the job interview go?', promptTh: 'สัมภาษณ์งานเป็นยังไงบ้าง?', answerEn: 'Great! They invited me back Monday.', answerTh: 'ดีมาก! เขานัดฉันกลับไปวันจันทร์นี้', distractors: ['Keep soap beside the sink.', 'Two blocks past the hotel.', 'That lemon cake is moist.', 'She felt sleepy early.'] },
            { promptEn: 'Should we reschedule the call?', promptTh: 'เราควรเลื่อนเวลาโทรประชุมไหม?', answerEn: 'Yes, let us meet at two instead.', answerTh: 'เลื่อนเถอะ เจอกันตอนบ่ายสองแทน', distractors: ['No, the bus uses this lane.', 'Wash your hands thoroughly.', 'They planted green beans.', 'My homework sits upstairs.'] },
            { promptEn: 'Who checks the budget sheet?', promptTh: 'ใครเป็นคนตรวจเอกสารงบประมาณ?', answerEn: 'Dan reviews every number weekly.', answerTh: 'แดนตรวจตัวเลขทั้งหมดทุกสัปดาห์', distractors: ['Beside the bakery shop.', 'It rained for two hours.', 'Buy fresh fish tomorrow.', 'Put ice cubes inside.'] },
            { promptEn: 'Have you backed up the database?', promptTh: 'สำรองข้อมูลฐานข้อมูลแล้วหรือยัง?', answerEn: 'Yes, it saved safely this morning.', answerTh: 'ทำแล้ว บันทึกเรียบร้อยตั้งแต่เมื่อเช้า', distractors: ['She plays tennis daily.', 'My brother loves soup.', 'Walk carefully on ice.', 'Read unit seven tonight.'] },
            { promptEn: 'What does this startup specialize in?', promptTh: 'สตาร์ทอัพนี้เชี่ยวชาญด้านไหน?', answerEn: 'Smart tools for small shops.', answerTh: 'เครื่องมืออัจฉริยะสำหรับร้านค้าขนาดเล็ก', distractors: ['Three glasses of cold water.', 'Clean the kitchen sink.', 'Our flight boards soon.', 'I passed the physics quiz.'] },
            { promptEn: 'When can I take a lunch break?', promptTh: 'ฉันไปพักทานมื้อเที่ยงได้ตอนไหน?', answerEn: 'Right after this quick call ends.', answerTh: 'ทันทีที่สายด่วนนี้คุยจบเลย', distractors: ['Under the living room rug.', 'Summer mornings feel bright.', 'She wears a wool scarf.', 'Vote before five today.'] }
        ],
        society: [
            { promptEn: 'Where can citizens vote today?', promptTh: 'ประชาชนไปใช้สิทธิเลือกตั้งได้ที่ไหนวันนี้?', answerEn: 'At the local community center.', answerTh: 'ที่ศูนย์ชุมชนประจำท้องถิ่น', distractors: ['Add a little sugar to taste.', 'His cat sleeps under the chair.', 'Check in at counter five.', 'My elbow feels sore.'] },
            { promptEn: 'Why did the city pass that law?', promptTh: 'ทำไมเมืองถึงออกกฎหมายนั้นขึ้นมา?', answerEn: 'To protect public safety on roads.', answerTh: 'เพื่อคุ้มครองความปลอดภัยบนท้องถนน', distractors: ['I need a pencil and eraser.', 'We watched a comedy film.', 'Brew tea for three minutes.', 'Open the balcony door.'] },
            { promptEn: 'Have you read today’s news?', promptTh: 'ได้อ่านข่าววันนี้หรือยัง?', answerEn: 'Yes, fuel prices dropped slightly.', answerTh: 'อ่านแล้ว ราคาน้ำมันลดลงนิดหน่อย', distractors: ['Clean your room before noon.', 'My friend cooks well.', 'Wash rice twice first.', 'Pack your toothbrush too.'] },
            { promptEn: 'How does the club help locals?', promptTh: 'ชมรมนี้ช่วยเหลือคนในพื้นที่อย่างไร?', answerEn: 'We organize weekend food drives.', answerTh: 'เราจัดกิจกรรมบริจาคอาหารสุดสัปดาห์', distractors: ['Her suitcase is very heavy.', 'Do not forget your hat.', 'Write clearly on paper.', 'This blanket is soft.'] },
            { promptEn: 'Who collects the neighborhood recycling?', promptTh: 'ใครเป็นคนมาเก็บขยะรีไซเคิลในชุมชน?', answerEn: 'City trucks come every Tuesday.', answerTh: 'รถเทศบาลมาเก็บทุกวันอังคาร', distractors: ['Two slices of cheddar cheese.', 'She finished her biology test.', 'Walk along the pier.', 'Send the spreadsheet now.'] },
            { promptEn: 'Why is Main Street closed today?', promptTh: 'ทำไมถนนเมนวันนี้ถึงปิดจราจรล่ะ?', answerEn: 'There is a charity marathon event.', answerTh: 'มีงานวิ่งมาราธอนการกุศลน่ะ', distractors: ['Turn on the rice cooker.', 'I drank iced lemon tea.', 'My cousin studied law.', 'The pillow feels flat.'] },
            { promptEn: 'Did volunteers clean the beach?', promptTh: 'อาสาสมัครไปช่วยทำความสะอาดชายหาดกันไหม?', answerEn: 'Yes, fifty people joined together!', answerTh: 'ไปสิ มีตั้งห้าสิบคนมาร่วมด้วยช่วยกัน!', distractors: ['At the corner drugstore.', 'Heat olive oil gently.', 'Board the train carefully.', 'He typed the report fast.'] },
            { promptEn: 'Where should we report broken streetlamps?', promptTh: 'ไฟถนนเสียต้องแจ้งที่ไหน?', answerEn: 'Use the city hall hotline app.', answerTh: 'แจ้งผ่านแอปสายด่วนศาลาว่าการได้เลย', distractors: ['Yes, milk and two eggs.', 'Her skirt is navy blue.', 'Take cough syrup tonight.', 'Practice spelling five words.'] },
            { promptEn: 'Will the new clinic accept health cards?', promptTh: 'คลินิกใหม่จะรับบัตรประกันสุขภาพไหม?', answerEn: 'Yes, starting next Monday morning.', answerTh: 'รับครับ เริ่มตั้งแต่เช้าวันจันทร์หน้า', distractors: ['No, the soup needs salt.', 'Under the study desk.', 'Snow melted quickly.', 'We packed light luggage.'] },
            { promptEn: 'What does the museum festival celebrate?', promptTh: 'เทศกาลที่พิพิธภัณฑ์จัดฉลองเนื่องในโอกาสอะไร?', answerEn: 'Local music and traditional crafts.', answerTh: 'ดนตรีท้องถิ่นและงานหัตถกรรมพื้นบ้าน', distractors: ['Two kilometers south.', 'Put butter on warm toast.', 'Our client loved it.', 'Brush gently before bed.'] },
            { promptEn: 'How can residents save clean water?', promptTh: 'ชาวบ้านจะช่วยกันประหยัดน้ำสะอาดได้ยังไงบ้าง?', answerEn: 'Fix dripping taps right away.', answerTh: 'รีบซ่อมก๊อกน้ำที่หยดรั่วทันที', distractors: ['With my younger sister.', 'The quiz starts at eight.', 'Pack two clean shirts.', 'Check gate number nine.'] },
            { promptEn: 'Did the library add free weekend classes?', promptTh: 'ห้องสมุดเพิ่มคลาสเรียนฟรีวันหยุดหรือเปล่า?', answerEn: 'Yes, coding and reading clubs!', answerTh: 'เพิ่มสิ ทั้งชมรมเขียนโค้ดและชมรมอ่านหนังสือ!', distractors: ['The sauce tastes rich.', 'Wait behind the red car.', 'My fever dropped fast.', 'She closed the curtain.'] }
        ],
        actions: [
            { promptEn: 'Could you hold the door for me?', promptTh: 'ช่วยจับประตูค้างไว้ให้หน่อยได้ไหม?', answerEn: 'Sure, take your time walking in.', answerTh: 'ได้เลย ค่อยๆ เดินเข้ามานะ', distractors: ['Breakfast starts at seven.', 'Winter is my favorite season.', 'Her notebook is green.', 'Take two pills daily.'] },
            { promptEn: 'Wait! Did you drop your wallet?', promptTh: 'เดี๋ยว! คุณทำกระเป๋าสตางค์ตกหรือเปล่า?', answerEn: 'Oh thank you for picking it up!', answerTh: 'โอ้ ขอบคุณที่ช่วยเก็บให้นะ!', distractors: ['The chemistry test was easy.', 'Milk goes in the fridge.', 'Our meeting starts soon.', 'Fresh mangoes taste sweet.'] },
            { promptEn: 'Can we fix this broken chair?', promptTh: 'เราซ่อมเก้าอี้ที่พังตัวนี้ได้ไหม?', answerEn: 'Let us tighten the loose screws.', answerTh: 'มาช่วยกันขันน็อตที่หลวมดูเถอะ', distractors: ['She won the art prize.', 'Our flight landed safely.', 'Soup warms you quickly.', 'Check the city news.'] },
            { promptEn: 'Should we follow the sign ahead?', promptTh: 'เราควรเดินตามป้ายข้างหน้าไหม?', answerEn: 'Yes, it leads straight to the park.', answerTh: 'ใช่ มันตรงไปถึงสวนสาธารณะเลย', distractors: ['He writes short stories.', 'The lemon juice is sour.', 'Lock the side window.', 'My cousin feels proud.'] },
            { promptEn: 'Please stir the soup slowly.', promptTh: 'ช่วยคนซุปช้าๆ หน่อยนะ', answerEn: 'Got it, so it will not burn.', answerTh: 'ได้เลย จะได้ไม่ไหม้ก้นหม้อ', distractors: ['Three stations away.', 'Her brother teaches math.', 'Vote before five o’clock.', 'Pack a lighter coat.'] },
            { promptEn: 'Can you lift this heavy box with me?', promptTh: 'ช่วยฉันยกกล่องหนักใบนี้หน่อยได้ไหม?', answerEn: 'Sure, bend your knees and count three.', answerTh: 'ได้เลย งอเข่าแล้วนับสามพร้อมกันนะ', distractors: ['The rainbow faded slowly.', 'Two cups of black coffee.', 'Send the invoice Monday.', 'Brush twice every day.'] },
            { promptEn: 'Did you remember to water the garden?', promptTh: 'จำได้ไหมว่ารดน้ำสวนหรือยัง?', answerEn: 'Yes, I watered all the flowers.', answerTh: 'จำได้ รดดอกไม้ทุกต้นเรียบร้อยแล้ว', distractors: ['Gate six boards soon.', 'She typed twelve lines.', 'That medicine tastes sweet.', 'Put books on the desk.'] },
            { promptEn: 'Why are you folding all those shirts?', promptTh: 'ทำไมกำลังพับเสื้อเชิ้ตพวกนั้นอยู่ล่ะ?', answerEn: 'To organize the closet neatly.', answerTh: 'จะได้จัดตู้เสื้อผ้าให้เรียบร้อยไง', distractors: ['Because the bus ran late.', 'At the corner market.', 'Mix flour with water.', 'Read chapter six today.'] },
            { promptEn: 'Could you push that heavy cart?', promptTh: 'ช่วยเข็นรถเข็นหนักคันนั้นหน่อยได้ไหม?', answerEn: 'No problem, watch your feet!', answerTh: 'ไม่มีปัญหา ระวังเท้าด้วยนะ!', distractors: ['The library closed early.', 'Her smile looked warm.', 'Boil carrots ten minutes.', 'Check today’s weather.'] },
            { promptEn: 'Let us cross the street carefully.', promptTh: 'มาข้ามถนนกันอย่างระมัดระวังเถอะ', answerEn: 'Right, look both ways first.', answerTh: 'จริง มองซ้ายมองขวาก่อนเลย', distractors: ['Two slices of warm pie.', 'My laptop updated overnight.', 'Open the study notes.', 'His aunt lives downtown.'] },
            { promptEn: 'Will you tape these torn pages?', promptTh: 'ช่วยเอาเทปติดหน้าที่ขาดพวกนี้ให้หน่อยได้ไหม?', answerEn: 'Sure, pass me the clear tape.', answerTh: 'ได้เลย ส่งเทปใสมาให้หน่อยสิ', distractors: ['Snow fell until dawn.', 'Order iced green tea.', 'She felt calm today.', 'Start the meeting now.'] },
            { promptEn: 'Did someone lock the garden shed?', promptTh: 'มีคนล็อคห้องเก็บของในสวนหรือยัง?', answerEn: 'Yes, I clicked the padlock shut.', answerTh: 'ล็อคแล้ว ฉันกดแม่กุญแจปิดสนิทเลย', distractors: ['Five apples per basket.', 'He won the chess match.', 'Drink warm soup tonight.', 'Turn left near the bank.'] }
        ]
    };

    // 4. Smart Cloze Surface Matcher, Dual-Example & Collocation Rotation Helpers
    function findClozeMatch(wordObj, customExample = '') {
        if (!wordObj || !wordObj.word) return null;
        const ex = String(customExample || wordObj.example || '');
        if (!ex) return null;
        if (!customExample && wordObj.clozeTarget) {
            const rxExact = new RegExp(`\\b(${escapeRegExpStr(wordObj.clozeTarget)})\\b`, 'i');
            const m = ex.match(rxExact);
            if (m) return { surface: m[1], masked: ex.replace(rxExact, '______') };
        }
        const w = wordObj.word.trim();
        const rx = new RegExp(`\\b(${escapeRegExpStr(w)}\\w*)`, 'i');
        const m = ex.match(rx);
        if (m) return { surface: m[1], masked: ex.replace(rx, '______') };
        return null;
    }

    function pickWordSentenceVariant(wordObj, variantSalt = 0) {
        if (!wordObj) return { en: '', th: '', source: 'example', tag: '' };
        const variants = [];
        if (wordObj.example) {
            variants.push({
                en: String(wordObj.example),
                th: String(wordObj.exampleTranslation || wordObj.translation || ''),
                source: 'example',
                tag: ''
            });
        }
        if (wordObj.extraExample && wordObj.extraExampleTranslation) {
            variants.push({
                en: String(wordObj.extraExample),
                th: String(wordObj.extraExampleTranslation),
                source: 'extraExample',
                tag: 'ประโยคตัวอย่างเสริม'
            });
        }
        if (variants.length === 0) return { en: '', th: '', source: 'example', tag: '' };
        return variants[Math.abs(variantSalt) % variants.length];
    }

    function findBestClozeVariant(wordObj, variantSalt = 0) {
        if (!wordObj || !wordObj.word) return null;
        const candidates = [];
        const ex1 = findClozeMatch(wordObj, wordObj.example);
        if (ex1) {
            candidates.push({
                ...ex1,
                source: 'example',
                thText: String(wordObj.exampleTranslation || wordObj.translation || ''),
                tag: ''
            });
        }
        if (wordObj.extraExample) {
            const ex2 = findClozeMatch(wordObj, wordObj.extraExample);
            if (ex2) {
                candidates.push({
                    ...ex2,
                    source: 'extraExample',
                    thText: String(wordObj.extraExampleTranslation || wordObj.translation || ''),
                    tag: 'ประโยคตัวอย่างเสริม'
                });
            }
        }
        if (Array.isArray(wordObj.collocations)) {
            const wLow = wordObj.word.trim().toLowerCase();
            wordObj.collocations.forEach((rawCol) => {
                const col = String(rawCol || '').trim();
                const words = col.split(/\s+/).filter(Boolean);
                if (words.length < 2 || words.length > 5) return;
                const match = findClozeMatch(wordObj, col);
                if (match && match.surface.toLowerCase() === wLow) {
                    candidates.push({
                        ...match,
                        source: 'collocation',
                        thText: `วลีใช้คู่กันของ "${wordObj.translation}"${wordObj.grammarPattern ? ` · ${wordObj.grammarPattern}` : ''}`,
                        tag: 'เติมคำในวลีคู่กัน (Collocation)',
                        rawColloc: col
                    });
                }
            });
        }
        if (candidates.length === 0) return null;
        return candidates[Math.abs(variantSalt) % candidates.length];
    }

    function getCleanRelatedWords(rawList, baseWord) {
        const baseLow = String(baseWord || '').trim().toLowerCase();
        const bannedRe = /^(apr|mon|tue|wed|thu|fri|sat|sun|jan|feb|mar|aug|sep|oct|nov|dec|arsenic|etc)$/i;
        if (!Array.isArray(rawList)) return [];
        return rawList
            .map(x => String(x || '').trim())
            .filter(s => s.length >= 3 && s.length <= 24 && s.toLowerCase() !== baseLow && !bannedRe.test(s) && !s.includes('_'));
    }

    function pickChoiceBubbleVariant(w, salt = 0, difficultyTier = 1) {
        const thShort = String(w?.translation || '').split(/[,;/]/)[0].trim();
        /** @type {Array<{ quizAngle: string, direction: string, angleMeta?: string, angleMasked?: string, angleThClue?: string }>} */
        const angles = [
            { quizAngle: 'en_to_th', direction: 'en_to_th' },
            { quizAngle: 'th_to_en', direction: 'th_to_en' }
        ];
        if (w?.definition && String(w.definition).trim().length >= 10) {
            let defTxt = String(w.definition).trim();
            if (w.word && w.word.length >= 3) {
                defTxt = defTxt.replace(new RegExp(`\\b${escapeRegExpStr(w.word.trim())}\\w*`, 'gi'), '______');
            }
            if (defTxt.length > 135) defTxt = defTxt.slice(0, 132).trim() + '...';
            angles.push({ quizAngle: 'def_to_en', direction: 'th_to_en', angleMeta: defTxt, angleThClue: thShort });
        }
        const cleanSyns = getCleanRelatedWords(w?.synonyms, w?.word).slice(0, 2);
        if (cleanSyns.length > 0) {
            const synWord = cleanSyns[Math.abs(salt) % cleanSyns.length];
            angles.push({ quizAngle: 'syn_to_en', direction: 'th_to_en', angleMeta: synWord, angleThClue: thShort });
        }
        const cleanAnts = getCleanRelatedWords(w?.antonyms, w?.word).slice(0, 2);
        if (cleanAnts.length > 0) {
            const antWord = cleanAnts[Math.abs(salt) % cleanAnts.length];
            angles.push({ quizAngle: 'ant_to_en', direction: 'th_to_en', angleMeta: antWord, angleThClue: thShort });
        }
        if (Array.isArray(w?.collocations)) {
            const colVars = [];
            const wLow = String(w.word || '').trim().toLowerCase();
            w.collocations.forEach((rawCol) => {
                const col = String(rawCol || '').trim();
                const words = col.split(/\s+/).filter(Boolean);
                if (words.length < 2 || words.length > 5) return;
                const m = findClozeMatch(w, col);
                if (m && m.surface.toLowerCase() === wLow) {
                    colVars.push({ raw: col, masked: m.masked });
                }
            });
            if (colVars.length > 0) {
                const pickedCol = colVars[Math.abs(salt) % colVars.length];
                angles.push({ quizAngle: 'colloc_to_en', direction: 'th_to_en', angleMeta: pickedCol.raw, angleMasked: pickedCol.masked, angleThClue: thShort });
            }
        }
        // On fresh Tier 1 first question, alternate base recognition and definition/collocation; on higher tiers/replays, rotate all rich angles
        if (difficultyTier === 1 && salt < 18 && angles.length > 2) {
            const tier1Pool = angles.filter(a => a.quizAngle === 'en_to_th' || a.quizAngle === 'th_to_en' || a.quizAngle === 'def_to_en' || a.quizAngle === 'colloc_to_en');
            return tier1Pool[Math.abs(salt) % tier1Pool.length];
        }
        return angles[Math.abs(salt) % angles.length];
    }

    function buildClozeSentence(wordObj) {
        const res = findClozeMatch(wordObj);
        return res ? res.masked : null;
    }

    function tokenizeEnglishSentence(sentence) {
        return String(sentence || '')
            .replace(/[.,!?;:"“”()[\]{}]/g, ' ')
            .trim()
            .split(/\s+/)
            .filter(Boolean);
    }

    function getThaiSentenceTokens(wordObj, customThText = '') {
        const usePrimary = !customThText || customThText === wordObj?.exampleTranslation;
        if (usePrimary && wordObj && Array.isArray(wordObj.thTokens) && wordObj.thTokens.length >= 2) {
            return [...wordObj.thTokens];
        }
        const raw = String(customThText || wordObj?.exampleTranslation || '').replace(/[?!.,;:"“”()]/g, '').trim();
        if (!raw) return [];
        if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
            const seg = new Intl.Segmenter('th', { granularity: 'word' });
            const toks = Array.from(seg.segment(raw)).filter(s => s.isWordLike).map(s => s.segment.trim()).filter(Boolean);
            if (toks.length >= 2) return toks;
        }
        const splitToks = raw.split(/\s+/).filter(Boolean);
        return splitToks.length >= 2 ? splitToks : (Array.isArray(wordObj?.thTokens) ? [...wordObj.thTokens] : splitToks);
    }

    function pickDistractorIndices(targetIdx, candidatePool, count = 3, salt = 0) {
        const targetWord = wordsData[targetIdx];
        const chosen = [];
        const usedTrans = new Set([String(targetWord.translation || '').trim().toLowerCase()]);
        const samePos = candidatePool.filter(i => i !== targetIdx && wordsData[i].partOfSpeech === targetWord.partOfSpeech);
        const others = candidatePool.filter(i => i !== targetIdx && wordsData[i].partOfSpeech !== targetWord.partOfSpeech);

        const pushFrom = (arr) => {
            const step = Math.max(1, Math.floor(arr.length / 7));
            for (let k = 0; k < arr.length && chosen.length < count; k++) {
                const idx = arr[(k * step + targetIdx + salt) % arr.length];
                const tr = String(wordsData[idx].translation || '').trim().toLowerCase();
                if (!usedTrans.has(tr) && !chosen.includes(idx)) {
                    usedTrans.add(tr);
                    chosen.push(idx);
                }
            }
        };
        pushFrom(samePos);
        if (chosen.length < count) pushFrom(others);
        if (chosen.length < count) {
            for (let i = (targetIdx * 17) % totalWords; chosen.length < count; i = (i + 31) % totalWords) {
                if (i === targetIdx || chosen.includes(i)) continue;
                const tr = String(wordsData[i].translation || '').trim().toLowerCase();
                if (!usedTrans.has(tr)) {
                    usedTrans.add(tr);
                    chosen.push(i);
                }
            }
        }
        return chosen.slice(0, count);
    }

    function pickBankDistractorTokens(answerTokens, targetIdx, unitPool, isThai, count = 2, salt = 0) {
        const usedLower = new Set(answerTokens.map(t => t.toLowerCase()));
        const dist = [];
        const pool = unitPool && unitPool.length >= 4 ? unitPool : [targetIdx];

        for (let step = 0; step < pool.length * 2 && dist.length < count; step++) {
            const cIdx = pool[(targetIdx + salt + step * 3 + 1) % pool.length];
            if (cIdx === targetIdx) continue;
            const cw = wordsData[cIdx];
            const candidates = isThai
                ? (Array.isArray(cw.thTokens) && cw.thTokens.length ? cw.thTokens : [cw.translation])
                : [cw.word, ...tokenizeEnglishSentence(cw.example)];
            for (const cand of candidates) {
                const clean = String(cand || '').split(',')[0].trim();
                if (!clean || clean.includes(' ') || clean.length > 13 || clean.length < 2) continue;
                if (usedLower.has(clean.toLowerCase())) continue;
                usedLower.add(clean.toLowerCase());
                dist.push(clean);
                break;
            }
        }
        const fallbackPool = isThai ? ['และ', 'หรือ', 'ขอบใจ', 'ที่นั่น', 'วันพรุ่งนี้'] : ['and', 'with', 'yesterday', 'maybe', 'outside'];
        for (const fb of fallbackPool) {
            if (dist.length >= count) break;
            if (!usedLower.has(fb.toLowerCase())) {
                usedLower.add(fb.toLowerCase());
                dist.push(fb);
            }
        }
        return dist.slice(0, count);
    }

    // 5. Smart Response Grader (Normalization + Contractions + Typo Tolerance)
    /** @type {[RegExp, string][]} */
    const CONTRACTIONS_EXPAND = [
        [/\bi'm\b/g, 'i am'], [/\byou're\b/g, 'you are'], [/\bwe're\b/g, 'we are'],
        [/\bthey're\b/g, 'they are'], [/\bhe's\b/g, 'he is'], [/\bshe's\b/g, 'she is'],
        [/\bit's\b/g, 'it is'], [/\bthat's\b/g, 'that is'], [/\bthere's\b/g, 'there is'],
        [/\bdon't\b/g, 'do not'], [/\bdoesn't\b/g, 'does not'], [/\bdidn't\b/g, 'did not'],
        [/\bcan't\b/g, 'can not'], [/\bcannot\b/g, 'can not'], [/\bwon't\b/g, 'will not'],
        [/\bisn't\b/g, 'is not'], [/\baren't\b/g, 'are not'], [/\bwasn't\b/g, 'was not'],
        [/\bweren't\b/g, 'were not'], [/\bhaven't\b/g, 'have not'], [/\bhasn't\b/g, 'has not'],
        [/\bi've\b/g, 'i have'], [/\bwe've\b/g, 'we have'], [/\bi'll\b/g, 'i will'],
        [/\blet's\b/g, 'let us'], [/\bwhat's\b/g, 'what is'], [/\bwhere's\b/g, 'where is']
    ];

    function normalizeAnswerText(raw, isThai = false) {
        let s = String(raw || '').trim().toLowerCase()
            .replace(/[’‘`]/g, "'")
      .replace(/[“”"]/g, '')
      .replace(/[?!.,;:()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (isThai) return s.replace(/\s+/g, '');
    for (const [rx, rep] of CONTRACTIONS_EXPAND) s = s.replace(rx, rep);
    return s.replace(/\s+/g, ' ').trim();
  }

  function editDistance(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      }
    }
    return dp[m][n];
  }

  function gradeLessonTextAnswer(userText, expectedVariants, isThai = false, allowTypo = false) {
    const normUser = normalizeAnswerText(userText, isThai);
    if (!normUser) return { ok: false, nearMiss: false };
    for (const exp of expectedVariants) {
      const normExp = normalizeAnswerText(exp, isThai);
      if (normUser === normExp) return { ok: true, nearMiss: false, matched: exp };
    }
    if (allowTypo && !isThai) {
      for (const exp of expectedVariants) {
        const normExp = normalizeAnswerText(exp, false);
        if (normExp.length >= 5 && editDistance(normUser, normExp) === 1) {
          return { ok: true, nearMiss: true, matched: exp };
        }
      }
    }
    return { ok: false, nearMiss: false };
  }

  // 6. Step Builder with Pedagogical Scaffolding Progression
  function createWordBankData(answerTokens, targetIdx, unitPool, isThai, salt = 0) {
    const distTokens = pickBankDistractorTokens(answerTokens, targetIdx, unitPool, isThai, answerTokens.length <= 3 ? 2 : 3, salt);
    const rawList = [...answerTokens, ...distTokens].map((text, idx) => ({ id: idx, text }));
    return {
      answerTokens,
      bankItems: shuffle(rawList)
    };
  }

  function buildListeningStepData(wordIdx, distractorPool, salt = 0) {
    const w = wordsData[wordIdx];
    const phraseCandidates = [];
    if (Array.isArray(w.collocations)) {
      w.collocations.forEach(c => {
        const toks = tokenizeEnglishSentence(c).slice(0, 6);
        if (toks.length >= 2) phraseCandidates.push({ tokens: toks, note: `${w.translation} (วลีคู่กัน)` });
      });
    }
    if (w.example) {
      const exToks = tokenizeEnglishSentence(w.example).slice(0, 6);
      if (exToks.length >= 2) phraseCandidates.push({ tokens: exToks, note: w.exampleTranslation || w.translation });
    }
    if (w.extraExample) {
      const ex2Toks = tokenizeEnglishSentence(w.extraExample).slice(0, 6);
      if (ex2Toks.length >= 2) phraseCandidates.push({ tokens: ex2Toks, note: w.extraExampleTranslation || w.translation });
    }
    if (phraseCandidates.length === 0) {
      phraseCandidates.push({ tokens: [w.word], note: w.translation });
    }
    const chosenCand = phraseCandidates[Math.abs(salt) % phraseCandidates.length];
    const tokens = chosenCand.tokens;
    const wb = createWordBankData(tokens, wordIdx, distractorPool, false, salt);
    return {
      type: 'listening_word_bank',
      wordIdx,
      audioText: tokens.join(' '),
      translationNote: chosenCand.note || w.translation,
      answerTokens: wb.answerTokens,
      bankItems: wb.bankItems,
      expectedVariants: [tokens.join(' ')],
      chosenIds: [],
      keyboardVal: '',
      _useKeyboard: false,
      requeued: false
    };
  }

  function oxGcd(a, b) {
    let x = Math.abs(a), y = Math.abs(b);
    while (y) { const t = x % y; x = y; y = t; }
    return x || 1;
  }

  function selectStageWordPool(stage, unit, limit = 10, roundNum = 1, totalRounds = 4, replaySalt = 0) {
    const qLimit = Math.min(limit, Math.max(7, 6 + roundNum));
    if (!stage.isBoss && stage.nodeType !== 'review') {
      const src = stage.wordIndices || [];
      if (src.length <= 1) return [...src];
      const n = src.length;
      const coprimes = [1, 2, 3, 5, 7].filter(s => s < n && oxGcd(s, n) === 1);
      if (coprimes.length === 0) coprimes.push(1);
      const shift = Math.floor(((roundNum - 1) * n) / Math.max(1, totalRounds)) + replaySalt * 3;
      const stride = (replaySalt > 0 || roundNum % 2 === 0)
        ? coprimes[(roundNum + replaySalt) % coprimes.length]
        : 1;
      const targetLen = Math.min(qLimit, n);
      const picked = [];
      const seen = new Set();
      for (let i = 0; i < n && picked.length < targetLen; i++) {
        const idx = src[(shift + i * stride) % n];
        if (!seen.has(idx)) { seen.add(idx); picked.push(idx); }
      }
      for (let i = 0; i < n && picked.length < targetLen; i++) {
        const idx = src[(shift + i) % n];
        if (!seen.has(idx)) { seen.add(idx); picked.push(idx); }
      }

      // On replay (Practice / Legendary / Repeating rounds), mix in 1-2 rotating reinforcement words from the same unit
      const unitPool = Array.isArray(unit?.wordIndices) ? unit.wordIndices : [];
      if (replaySalt > 0 && unitPool.length > n) {
        const siblingPool = unitPool.filter(idx => !seen.has(idx));
        if (siblingPool.length > 0) {
          siblingPool.sort((a, b) => {
            const sa = wordStatus[keyOf(wordsData[a])] === 'review' ? 0 : 1;
            const sb = wordStatus[keyOf(wordsData[b])] === 'review' ? 0 : 1;
            return sa - sb;
          });
          const desiredCompanions = Math.min(2, siblingPool.length);
          const coreKeep = Math.min(picked.length, Math.max(6, qLimit - desiredCompanions));
          const mixed = picked.slice(0, coreKeep);
          for (let c = 0; c < siblingPool.length && mixed.length < qLimit && (mixed.length - coreKeep) < desiredCompanions; c++) {
            const candIdx = siblingPool[(replaySalt * 5 + roundNum * 2 + c * 3) % siblingPool.length];
            if (!mixed.includes(candIdx)) mixed.push(candIdx);
          }
          return mixed;
        }
      }
      return picked;
    }
    if (stage.isBoss) {
      // Stratified sampling rotated by roundNum + replaySalt so each round/replay challenges different words
      const chunkStages = (unit.nodes || []).filter(n => n.kind === 'stage' && !n.isBoss && n.nodeType !== 'review' && Array.isArray(n.wordIndices) && n.wordIndices.length > 0);
      if (chunkStages.length > 1) {
        const picked = [];
        const seen = new Set();
        const buckets = chunkStages.map(st => {
          const sorted = [...st.wordIndices].sort((a, b) => {
            const sa = wordStatus[keyOf(wordsData[a])] === 'review' ? 0 : 1;
            const sb = wordStatus[keyOf(wordsData[b])] === 'review' ? 0 : 1;
            return sa - sb;
          });
          return sorted;
        });
        let round = Math.max(0, roundNum - 1) + replaySalt;
        let guard = 0;
        while (picked.length < qLimit && guard++ < 40) {
          for (let b = 0; b < buckets.length && picked.length < qLimit; b++) {
            const bucket = buckets[(b + roundNum - 1 + replaySalt) % buckets.length];
            const idx = bucket[round % bucket.length];
            if (!seen.has(idx)) {
              seen.add(idx);
              picked.push(idx);
            }
          }
          round++;
        }
        if (picked.length > 0) return picked;
      }
    }
    // Review or single-chunk fallback: prioritize 'review' -> low mastery/wrong -> unseen -> evenly distributed & rotated by roundNum + replaySalt
    const total = unit.wordIndices.length;
    const ranked = unit.wordIndices.map((idx, pos) => {
      const k = keyOf(wordsData[idx]);
      const st = wordStatus[k];
      const m = wordMastery[k];
      let prio = 2;
      if (st === 'review') prio = 0;
      else if (m && (m.wrong || 0) > (m.right || 0)) prio = 1;
      else if (st === 'known') prio = 3;
      const spreadRank = ((pos * 7 + unit.unitNumber * 3 + (roundNum - 1) * 5 + replaySalt * 11) % Math.max(1, total));
      return { idx, prio, spreadRank };
    });
    ranked.sort((a, b) => (a.prio - b.prio) || (a.spreadRank - b.spreadRank));
    return ranked.slice(0, qLimit).map(x => x.idx);
  }

  /**
   * Pick a varied, non-repeating dialogue for a step using stage history, replaySalt, and optional concise vocab micro-dialogues.
   * @param {VocabWord} w
   * @param {any} unit
   * @param {number} pos
   * @param {number} stageOffset
   * @param {Set<string>} usedDialogues
   * @param {string} [stageId]
   * @param {number} [replaySalt]
   * @param {number[]} [pool]
   */
  function pickDialogueForStep(w, unit, pos, stageOffset, usedDialogues, stageId, replaySalt, pool) {
    const topicList = OX_DIALOGUES_BY_TOPIC[unit.topicId] || OX_DIALOGUES_BY_TOPIC.basics;
    const salt = replaySalt || 0;
    const recentList = stageId && Array.isArray(recentStageDialogueKeys[stageId]) ? recentStageDialogueKeys[stageId] : [];
    const recentSet = new Set(recentList);
    const isFreshCurated = (d) => d && !usedDialogues.has(d.promptEn) && !recentSet.has(d.promptEn);
    const isUnusedCurated = (d) => d && !usedDialogues.has(d.promptEn);
    const recordChoice = (dlg, matchesStepWord) => {
      if (stageId && dlg && dlg.promptEn) {
        const prev = recentStageDialogueKeys[stageId] || [];
        recentStageDialogueKeys[stageId] = [...prev.filter(k => k !== dlg.promptEn), dlg.promptEn].slice(-12);
      }
      return { dlg, matchesStepWord };
    };

    const buildMicroDialogue = () => {
      if (!w || !w.word) return null;
      const wordStr = String(w.word).trim();
      const targetRe = new RegExp(`\\b${escapeRegExpStr(wordStr)}\\b`, 'i');
      const useExtra = (salt % 2 === 1) && w.extraExample && w.extraExampleTranslation;
      const ansEn = String(useExtra ? w.extraExample : (w.example || '')).trim();
      const ansTh = String(useExtra ? w.extraExampleTranslation : (w.exampleTranslation || '')).trim();
      if (!ansEn || !ansTh || ansEn.length < 12 || ansEn.length > 62) return null;
      const promptEn = `Can you use "${wordStr}" in a natural sentence?`;
      if (usedDialogues.has(promptEn) || recentSet.has(promptEn)) return null;
      const shortMeaning = String(w.meaning || '').split(/[;,]/)[0].trim();
      const promptTh = shortMeaning
        ? `ลองใช้คำว่า "${wordStr}" (${shortMeaning}) แต่งประโยคดูสิ`
        : `ลองใช้คำว่า "${wordStr}" แต่งประโยคดูสิ`;

      const candPool = Array.isArray(pool) && pool.length > 3 ? pool : [];
      /** @type {string[]} */
      const sibDists = [];
      const nPool = candPool.length;
      const startOff = (pos + salt * 3) % (nPool || 1);
      for (let i = 0; i < nPool; i++) {
        const cIdx = candPool[(startOff + i) % nPool];
        const ow = typeof VOCAB !== 'undefined' ? VOCAB[cIdx] : null;
        if (!ow || !ow.word || String(ow.word).trim().toLowerCase() === wordStr.toLowerCase()) continue;
        const ex = String((salt % 3 === 1 && ow.extraExample) ? ow.extraExample : (ow.example || '')).trim();
        if (!ex || ex.length < 12 || ex.length > 62 || ex === ansEn || targetRe.test(ex) || sibDists.includes(ex)) continue;
        sibDists.push(ex);
        if (sibDists.length >= 5) break;
      }
      if (sibDists.length < 3) return null;
      return { promptEn, promptTh, answerEn: ansEn, answerTh: ansTh, distractors: sibDists };
    };

    const targetWord = String(w?.word || '').trim().toLowerCase();
    const targetRe = targetWord ? new RegExp(`\\b${escapeRegExpStr(targetWord)}\\b`, 'i') : null;
    const topicRotated = [];
    for (let k = 0; k < topicList.length; k++) {
      topicRotated.push(topicList[((unit.unitNumber || 1) + stageOffset + salt * 3 + pos + k) % topicList.length]);
    }

    // Step 1: Prefer an unseen + non-recent curated dialogue in this topic matching targetWord
    if (targetRe) {
      const freshTopicMatch = topicRotated.find(d => isFreshCurated(d) && targetRe.test(`${d.promptEn} ${d.answerEn}`));
      if (freshTopicMatch) return recordChoice(freshTopicMatch, true);

      // Step 2: Check across all topics for a fresh non-recent dialogue using targetWord
      const allLists = Object.values(OX_DIALOGUES_BY_TOPIC);
      for (let li = 0; li < allLists.length; li++) {
        const list = allLists[(li + salt) % allLists.length];
        for (let di = 0; di < list.length; di++) {
          const cand = list[(di + salt + pos) % list.length];
          if (isFreshCurated(cand) && targetRe.test(`${cand.promptEn} ${cand.answerEn}`)) {
            return recordChoice(cand, true);
          }
        }
      }
    }

    // Step 3: On replays, periodically surface a concise vocabulary micro-dialogue directly practicing targetWord
    if (salt > 0 && (salt + pos) % 2 === 1) {
      const micro = buildMicroDialogue();
      if (micro) return recordChoice(micro, true);
    }

    // Step 4: Prefer an unseen + non-recent curated topic dialogue rotated by replaySalt
    const freshTopic = topicRotated.find(isFreshCurated);
    if (freshTopic) return recordChoice(freshTopic, false);

    // Step 5: Try synthesized micro-dialogue if recent curated dialogues were already seen
    const microFallback = buildMicroDialogue();
    if (microFallback) return recordChoice(microFallback, true);

    // Step 6: Any unused curated dialogue in topic (wrapping history cleanly)
    const unused = topicRotated.find(isUnusedCurated) || topicRotated[0];
    return recordChoice(unused, false);
  }

  function buildLessonSteps(stage, unit, roundOpts = {}) {
    const totalRounds = getStageTotalRounds(stage);
    const roundNum = Math.min(totalRounds, Math.max(1, Number(roundOpts.roundNum) || 1));
    const replaySalt = Math.max(0, Number(roundOpts.replaySalt) || 0);
    const diffRatio = totalRounds <= 1 ? 1 : (roundNum - 1) / (totalRounds - 1);
    const difficultyTier = diffRatio >= 0.75 ? 3 : (diffRatio >= 0.3 ? 2 : 1);
    const pool = selectStageWordPool(stage, unit, 10, roundNum, totalRounds, replaySalt);

    const steps = [];
    // Show intro cards only on Round 1 of fresh normal lesson stages (not replays) so replays stay snappy
    const introCandidates = (stage.nodeType === 'lesson' && roundNum === 1 && replaySalt === 0)
      ? pool.filter(idx => !wordStatus[keyOf(wordsData[idx])]).slice(0, 2)
      : [];
    introCandidates.forEach(idx => {
      steps.push({ type: 'intro', wordIdx: idx, requeued: false, isIntro: true });
    });

    const distractorPool = unit.wordIndices.length >= 8 ? unit.wordIndices : pool;
    const listeningMutedNow = !listeningEnabled || Date.now() < lessonListeningMutedUntil;
    const topicDialogues = OX_DIALOGUES_BY_TOPIC[unit.topicId] || OX_DIALOGUES_BY_TOPIC.basics;
    const stageOffset = Math.max(0, (unit.nodes || []).indexOf(stage)) + (roundNum - 1) * 5 + replaySalt * 3;
    const usedDialogues = new Set();

    const CORE_8_MODES = ['choice_bubble_match', 'listening_word_bank', 'dialogue_complete', 'sentence_cloze_inline', 'order_en_to_th', 'order_th_to_en', 'spelling_context', 'pair_match'];
    const REPLAY_STRIDES = [1, 3, 5, 7];

    const TIER_SEQS = {
      lesson: [
        ['choice_bubble_match', 'listening_word_bank', 'dialogue_complete', 'sentence_cloze_inline', 'order_en_to_th', 'order_th_to_en', 'spelling_context', 'pair_match', 'sentence_cloze_inline', 'order_en_to_th'],
        ['dialogue_complete', 'listening_word_bank', 'sentence_cloze_inline', 'order_en_to_th', 'order_th_to_en', 'pair_match', 'sentence_cloze_inline', 'order_th_to_en', 'spelling_context', 'choice_bubble_match'],
        ['sentence_cloze_inline', 'order_th_to_en', 'listening_word_bank', 'dialogue_complete', 'spelling_context', 'order_th_to_en', 'pair_match', 'sentence_cloze_inline', 'order_en_to_th', 'spelling_context']
      ],
      review: [
        ['choice_bubble_match', 'listening_word_bank', 'dialogue_complete', 'sentence_cloze_inline', 'order_en_to_th', 'pair_match', 'spelling_context'],
        ['dialogue_complete', 'sentence_cloze_inline', 'order_en_to_th', 'order_th_to_en', 'pair_match', 'spelling_context'],
        ['sentence_cloze_inline', 'order_th_to_en', 'spelling_context', 'listening_word_bank', 'pair_match', 'spelling_context']
      ],
      boss: [
        ['choice_bubble_match', 'listening_word_bank', 'dialogue_complete', 'sentence_cloze_inline', 'order_en_to_th', 'order_th_to_en'],
        ['dialogue_complete', 'listening_word_bank', 'sentence_cloze_inline', 'order_en_to_th', 'order_th_to_en', 'spelling_context'],
        ['sentence_cloze_inline', 'order_th_to_en', 'spelling_context', 'listening_word_bank', 'dialogue_complete', 'spelling_context']
      ]
    };

    const totalQ = pool.length;
    /** @type {string[]} */
    const plannedModes = pool.map((idx, pos) => {
      const w = wordsData[idx];
      const tierIdx = difficultyTier - 1;
      let m = 'choice_bubble_match';
      if (stage.nodeType === 'audio') {
        if (listeningMutedNow) {
          m = difficultyTier >= 3 ? (pos % 2 === 0 ? 'spelling_context' : 'order_th_to_en') : (pos % 2 === 0 ? 'sentence_cloze_inline' : 'order_en_to_th');
        } else if (difficultyTier === 1) {
          m = pos % 4 === 3 ? 'choice_bubble_match' : 'listening_word_bank';
        } else if (difficultyTier === 2) {
          m = (pos + replaySalt) % 3 === 2 ? 'order_th_to_en' : 'listening_word_bank';
        } else {
          m = (pos + replaySalt) % 3 === 2 ? 'spelling_context' : ((pos + replaySalt) % 3 === 1 ? 'sentence_cloze_inline' : 'listening_word_bank');
        }
      } else if (stage.nodeType === 'lesson' && replaySalt > 0 && totalQ >= 8) {
        if (pos < 8) {
          const modeStride = REPLAY_STRIDES[replaySalt % REPLAY_STRIDES.length];
          m = CORE_8_MODES[(pos * modeStride + replaySalt + roundNum) % 8];
        } else {
          const extraSeq = TIER_SEQS.lesson[tierIdx] || TIER_SEQS.lesson[0];
          m = extraSeq[(pos + replaySalt + roundNum) % extraSeq.length];
        }
      } else {
        const seqTable = TIER_SEQS[stage.nodeType] || TIER_SEQS.lesson;
        const seq = seqTable[tierIdx] || seqTable[0];
        m = seq[(pos + (difficultyTier > 1 ? roundNum - 1 : 0) + replaySalt) % seq.length];
        if (difficultyTier === 1 && pos === totalQ - 1 && m !== 'pair_match' && !w.word.includes(' ') && w.word.length <= 10) {
          m = 'spelling_context';
        }
      }
      if (m === 'listening_word_bank' && listeningMutedNow) {
        m = difficultyTier >= 3 ? 'order_th_to_en' : 'sentence_cloze_inline';
      }
      return m;
    });

    // Repair any mode slot whose word isn't eligible (e.g., single-token Thai or hyphen/long spelling) by swapping with an eligible slot
    const isWordEligibleForMode = (w, modeName, salt) => {
      if (!w) return false;
      if (modeName === 'order_en_to_th') return getThaiSentenceTokens(w, pickWordSentenceVariant(w, salt).th).length >= 2;
      if (modeName === 'order_th_to_en') return tokenizeEnglishSentence(pickWordSentenceVariant(w, salt + 1).en).length >= 2;
      if (modeName === 'sentence_cloze_inline') return Boolean(findBestClozeVariant(w, salt));
      if (modeName === 'spelling_context') return !w.word.includes(' ') && w.word.length <= 13;
      return true;
    };
    for (let p = 0; p < plannedModes.length; p++) {
      const m = plannedModes[p];
      const distSaltP = roundNum * 17 + p + replaySalt * 13;
      if (!isWordEligibleForMode(wordsData[pool[p]], m, distSaltP)) {
        for (let q = 0; q < plannedModes.length; q++) {
          if (q === p) continue;
          const altMode = plannedModes[q];
          const distSaltQ = roundNum * 17 + q + replaySalt * 13;
          if (isWordEligibleForMode(wordsData[pool[q]], m, distSaltQ) && isWordEligibleForMode(wordsData[pool[p]], altMode, distSaltP)) {
            plannedModes[p] = altMode;
            plannedModes[q] = m;
            break;
          }
        }
      }
    }

    pool.forEach((idx, pos) => {
      const w = wordsData[idx];
      const distSalt = roundNum * 17 + pos + replaySalt * 13;
      let desired = plannedModes[pos] || 'choice_bubble_match';

      if (desired === 'spelling_context' && (w.word.includes(' ') || w.word.length > 13)) {
        desired = 'order_th_to_en';
      }

      if (desired === 'listening_word_bank') {
        steps.push({ ...buildListeningStepData(idx, distractorPool, distSalt), castIdx: pos });
        return;
      }

      if (desired === 'dialogue_complete' && topicDialogues.length > 0 && usedDialogues.size < topicDialogues.length) {
        const picked = pickDialogueForStep(w, unit, pos, stageOffset, usedDialogues, stage.id, replaySalt, pool);
        const dlg = picked.dlg;
        if (dlg && dlg.promptEn) usedDialogues.add(dlg.promptEn);
        const allDists = Array.isArray(dlg.distractors) ? dlg.distractors.filter(Boolean) : [];
        const distShift = allDists.length ? ((replaySalt * 2 + pos + stageOffset) % allDists.length) : 0;
        const rotatedDists = allDists.length ? allDists.slice(distShift).concat(allDists.slice(0, distShift)) : [];
        const rawOpts = [dlg.answerEn, ...shuffle(rotatedDists).slice(0, 2)];
        const order = shuffle(rawOpts.map((txt, oi) => ({ txt, isCorrect: oi === 0 })));
        const correctChoiceIdx = order.findIndex(o => o.isCorrect);
        steps.push({
          type: 'dialogue_complete',
          wordIdx: idx,
          dialogue: dlg,
          isTopicDialogue: !picked.matchesStepWord,
          choiceTexts: order.map(o => o.txt),
          correctChoiceIdx,
          selectedChoice: null,
          castIdx: pos,
          requeued: false
        });
        return;
      }

      if (desired === 'order_en_to_th') {
        const sentVar = pickWordSentenceVariant(w, distSalt);
        const thToks = getThaiSentenceTokens(w, sentVar.th);
        if (thToks.length >= 2 && sentVar.en) {
          const wb = createWordBankData(thToks, idx, distractorPool, true, distSalt);
          steps.push({
            type: 'order_en_to_th',
            wordIdx: idx,
            promptEn: sentVar.en,
            answerTh: sentVar.th,
            sentenceSource: sentVar.source,
            answerTokens: wb.answerTokens,
            bankItems: wb.bankItems,
            expectedVariants: [sentVar.th, thToks.join('')],
            chosenIds: [],
            keyboardVal: '',
            _useKeyboard: false,
            castIdx: pos,
            requeued: false
          });
          return;
        }
        desired = 'order_th_to_en';
      }

      if (desired === 'order_th_to_en') {
        const sentVar = pickWordSentenceVariant(w, distSalt + 1);
        const enToks = tokenizeEnglishSentence(sentVar.en);
        if (enToks.length >= 2 && sentVar.th) {
          const wb = createWordBankData(enToks, idx, distractorPool, false, distSalt);
          steps.push({
            type: 'order_th_to_en',
            wordIdx: idx,
            promptTh: sentVar.th,
            answerEn: sentVar.en,
            sentenceSource: sentVar.source,
            answerTokens: wb.answerTokens,
            bankItems: wb.bankItems,
            expectedVariants: [sentVar.en, enToks.join(' ')],
            chosenIds: [],
            keyboardVal: '',
            _useKeyboard: false,
            castIdx: pos,
            requeued: false
          });
          return;
        }
        desired = 'sentence_cloze_inline';
      }

      if (desired === 'sentence_cloze_inline') {
        const cloze = findBestClozeVariant(w, distSalt);
        if (cloze) {
          const isBaseForm = cloze.surface.toLowerCase() === w.word.toLowerCase();
          const forceTyped = difficultyTier >= 3 && (pos % 2 === 0 || !isBaseForm);
          if (isBaseForm && !forceTyped) {
            const dist = pickDistractorIndices(idx, distractorPool, difficultyTier === 1 ? 2 : 3, distSalt);
            steps.push({
              type: 'sentence_cloze_inline',
              wordIdx: idx,
              maskedSentence: cloze.masked,
              targetSurface: cloze.surface,
              subTranslation: cloze.thText,
              clozeContextTag: cloze.tag,
              clozeSource: cloze.source,
              options: shuffle([idx, ...dist]),
              selectedChoice: null,
              keyboardVal: '',
              _useKeyboard: false,
              castIdx: pos,
              requeued: false
            });
            return;
          }
          steps.push({
            type: 'sentence_cloze_inline',
            wordIdx: idx,
            maskedSentence: cloze.masked,
            targetSurface: cloze.surface,
            subTranslation: cloze.thText,
            clozeContextTag: cloze.tag,
            clozeSource: cloze.source,
            options: null,
            selectedChoice: null,
            keyboardVal: '',
            _useKeyboard: true,
            castIdx: pos,
            requeued: false
          });
          return;
        }
        desired = difficultyTier >= 3 ? 'spelling_context' : 'choice_bubble_match';
      }

      if (desired === 'spelling_context') {
        const cloze = findBestClozeVariant(w, distSalt + 1);
        steps.push({
          type: 'spelling_context',
          wordIdx: idx,
          maskedSentence: cloze ? cloze.masked : null,
          targetSurface: cloze ? cloze.surface : w.word,
          subTranslation: cloze ? cloze.thText : (w.exampleTranslation || ''),
          clozeContextTag: cloze ? cloze.tag : '',
          keyboardVal: '',
          castIdx: pos,
          requeued: false
        });
        return;
      }

      if (desired === 'pair_match') {
        const pairIndices = [idx];
        const usedEn = new Set([String(w.word || '').toLowerCase()]);
        const usedTh = new Set([String(w.translation || '').split(/[,;\/]/)[0].trim().toLowerCase()]);
        const candidates = shuffle([...pool, ...distractorPool]);
        for (const cIdx of candidates) {
          if (pairIndices.length >= 4) break;
          const cw = wordsData[cIdx];
          if (!cw) continue;
          const enLow = String(cw.word || '').toLowerCase();
          const thShort = String(cw.translation || '').split(/[,;\/]/)[0].trim();
          const thLow = thShort.toLowerCase();
          if (!enLow || !thLow || usedEn.has(enLow) || usedTh.has(thLow)) continue;
          usedEn.add(enLow);
          usedTh.add(thLow);
          pairIndices.push(cIdx);
        }
        if (pairIndices.length >= 3) {
          const pairVariantRoll = (roundNum + replaySalt + pos) % 3;
          let pairMode = 'word_th';
          if ((replaySalt > 0 || difficultyTier >= 2) && pairVariantRoll === 1) pairMode = 'colloc_match';
          else if ((replaySalt > 0 || difficultyTier >= 2) && pairVariantRoll === 2) pairMode = 'syn_match';

          const pairs = pairIndices.map((pIdx, pi) => {
            const pw = wordsData[pIdx];
            const thShort = String(pw.translation || '').split(/[,;\/]/)[0].trim() || pw.translation;
            let rightLabel = thShort;
            if (pairMode === 'colloc_match' && Array.isArray(pw.collocations) && pw.collocations.length > 0) {
              const rawCol = pw.collocations[(replaySalt + pi) % pw.collocations.length];
              const m = findClozeMatch(pw, rawCol);
              rightLabel = m ? `${m.masked} (${thShort})` : `${rawCol} · ${thShort}`;
            } else if (pairMode === 'syn_match') {
              const pSyns = getCleanRelatedWords(pw.synonyms, pw.word);
              if (pSyns.length > 0) rightLabel = `≈ ${pSyns[0]} · ${thShort}`;
            }
            return {
              id: `pm_${pos}_${pi}_${pIdx}`,
              wordIdx: pIdx,
              en: pw.word,
              th: rightLabel,
              posLabel: pw.partOfSpeech || '',
              phonetic: pw.phonetic || ''
            };
          });
          const pairModeTag = pairMode === 'colloc_match'
            ? 'จับคู่คำศัพท์ & วลีคู่กัน'
            : (pairMode === 'syn_match' ? 'จับคู่คำศัพท์ & คำใกล้เคียง' : 'จับคู่คำศัพท์ & ความหมาย');
          const pairModeHeading = pairMode === 'colloc_match'
            ? 'แตะจับคู่คำศัพท์กับวลีที่ใช้คู่กันให้ถูกต้อง'
            : (pairMode === 'syn_match' ? 'แตะจับคู่คำศัพท์กับคำใกล้เคียงและความหมาย' : 'แตะจับคู่คำศัพท์กับความหมายที่ตรงกัน');
          steps.push({
            type: 'pair_match',
            pairMode,
            pairModeTag,
            pairModeHeading,
            wordIdx: idx,
            pairs,
            leftIds: shuffle(pairs.map(p => p.id)),
            rightIds: shuffle(pairs.map(p => p.id)),
            matchedIds: [],
            selectedLeftId: null,
            selectedRightId: null,
            mistakesCount: 0,
            castIdx: pos,
            requeued: false
          });
          return;
        }
        desired = 'choice_bubble_match';
      }

      // Default / choice_bubble_match (6 rotating question angles: EN->TH, TH->EN, Definition, Synonym, Antonym, Collocation)
      const distCount = difficultyTier === 1 ? 2 : 3;
      const angleObj = pickChoiceBubbleVariant(w, distSalt + pos, difficultyTier);
      let dist = pickDistractorIndices(idx, distractorPool, distCount + 2, distSalt);
      if ((angleObj.quizAngle === 'syn_to_en' || angleObj.quizAngle === 'ant_to_en') && angleObj.angleMeta) {
        const metaLow = angleObj.angleMeta.toLowerCase();
        dist = dist.filter(dIdx => String(wordsData[dIdx]?.word || '').trim().toLowerCase() !== metaLow);
      }
      dist = dist.slice(0, distCount);
      steps.push({
        type: 'choice_bubble_match',
        direction: angleObj.direction,
        quizAngle: angleObj.quizAngle,
        angleMeta: angleObj.angleMeta || '',
        angleMasked: angleObj.angleMasked || '',
        angleThClue: angleObj.angleThClue || '',
        wordIdx: idx,
        options: shuffle([idx, ...dist]),
        selectedChoice: null,
        castIdx: pos,
        requeued: false
      });
    });

    return steps;
  }

  function recordLessonWordOutcome(wordIdx, isCorrect, opts = {}) {
    const w = wordsData[wordIdx];
    if (!w) return;
    const key = keyOf(w);
    const status = isCorrect ? 'known' : 'review';
    if (!opts.skipStatusUpdate) {
      recordWordMastery(key, status);
      const streakAfter = Number(wordMastery[key]?.streak || 0);
      if (isCorrect && (wordStatus[key] !== 'review' || streakAfter >= 2)) {
        wordStatus[key] = 'known';
      } else if (!isCorrect) {
        wordStatus[key] = 'review';
      }
      storage.set(STORAGE.status, wordStatus);
    }
    if (!opts.skipDailyGoal) {
      recordDailyGoalProgress(1);
    }
  }

  function startLessonByStageId(stageId, opts = {}) {
    const stage = opts.virtualStage || OxCurriculum.stageById.get(stageId);
    if (!stage) return;
    const unit = opts.virtualUnit || OxCurriculum.unitById.get(stage.unitId);
    if (!unit) return;
    const mode = opts.mode === 'legendary' ? 'legendary' : (opts.mode === 'practice' ? 'practice' : 'normal');
    const totalRounds = stage.isVirtual ? 1 : getStageTotalRounds(stage);
    const doneRounds = stage.isVirtual ? 0 : getStageDoneRounds(stageId);
    const roundNum = stage.isVirtual
      ? 1
      : (typeof opts.roundNum === 'number'
        ? Math.min(totalRounds, Math.max(1, opts.roundNum))
        : (mode === 'legendary' || mode === 'practice' || opts.isJumpTestForUnitId ? totalRounds : Math.min(totalRounds, doneRounds + 1)));

    const prevPlayCount = Number(sessionStageReplayCounter[stageId] || 0);
    sessionStageReplayCounter[stageId] = prevPlayCount + 1;
    if (!stage.isVirtual && learnState.stageReplays) {
      learnState.stageReplays[stageId] = (learnState.stageReplays[stageId] || 0) + 1;
      saveLearnState(false);
    }
    const modeSalt = mode === 'legendary' ? 5 : (mode === 'practice' ? 3 : 0);
    const replaySalt = prevPlayCount * 2 + modeSalt;

    const steps = buildLessonSteps(stage, unit, { roundNum, replaySalt });
    const uniqueQuestionCount = steps.filter(s => !s.isIntro).length || 1;
    const diffRatio = totalRounds <= 1 ? 1 : (roundNum - 1) / (totalRounds - 1);
    const difficultyTier = stage.isVirtual ? 2 : (diffRatio >= 0.75 ? 3 : (diffRatio >= 0.3 ? 2 : 1));

    activeLesson = {
      stage,
      unit,
      mode,
      roundNum,
      replaySalt,
      totalRounds,
      difficultyTier,
      isJumpTestForUnitId: opts.isJumpTestForUnitId || null,
      queue: steps,
      index: 0,
      initialTotal: Math.max(1, steps.length),
      clearedCount: 0,
      uniqueTotal: uniqueQuestionCount,
      answeredUnique: 0,
      firstTryCorrect: 0,
      wordOutcomes: {},
      combo: 0,
      maxCombo: 0,
      awaitingNext: false,
      _feedbackShownAt: 0,
      completed: false
    };

    const stagePill = $('lesson-stage-pill');
    if (stagePill) {
      const modeTag = stage.isVirtual
        ? ' · 🎯 ฝึกเฉพาะจุด'
        : (mode === 'legendary' ? ' · 👑 ตำนาน' : (mode === 'practice' ? ' · ทบทวน' : ` · บทที่ ${roundNum}/${totalRounds}`));
      stagePill.textContent = `${unit.title} · ${stage.label}${modeTag}`;
    }
    const fbBar = $('lesson-feedback-bar');
    const actBar = $('lesson-action-bar');
    if (fbBar) fbBar.hidden = true;
    if (actBar) actBar.hidden = true;
    if (typeof closeNodePopover === 'function') closeNodePopover(false, true);
    showScreen('lesson');
    renderCurrentLessonStep();
  }

  function startVirtualLearnPractice({ id, title, label, wordIndices, unit }) {
    const cleanIndices = Array.from(new Set(wordIndices || [])).filter(idx => Number.isInteger(idx) && wordsData[idx]).slice(0, 12);
    if (cleanIndices.length === 0) {
      showToast('ยังไม่มีคำศัพท์ในชุดฝึกนี้');
      return;
    }
    const baseUnit = unit || (OxCurriculum.sections[learnState.activeSection || 'A1'] || [])[0];
    const virtualUnit = {
      id: baseUnit ? baseUnit.id : '__virtual_unit',
      cefr: baseUnit ? baseUnit.cefr : (learnState.activeSection || 'A1'),
      topicId: baseUnit ? baseUnit.topicId : 'basics',
      unitNumber: baseUnit ? baseUnit.unitNumber : 1,
      title: title || (baseUnit ? baseUnit.title : 'ชุดฝึกพิเศษ'),
      palette: baseUnit ? baseUnit.palette : 'emerald',
      wordIndices: cleanIndices.length >= 4 ? cleanIndices : (baseUnit ? baseUnit.wordIndices : cleanIndices),
      nodes: []
    };
    const virtualStage = {
      id: id || `__virtual_${Date.now()}`,
      unitId: virtualUnit.id,
      label: label || 'ฝึกเฉพาะจุด',
      nodeType: 'lesson',
      isBoss: false,
      isVirtual: true,
      wordIndices: cleanIndices
    };
    startLessonByStageId(virtualStage.id, { mode: 'practice', virtualStage, virtualUnit });
  }

  function startSmartLearnDrill(kind = 'weak') {
    const sec = learnState.activeSection || 'A1';
    const secUnits = OxCurriculum.sections[sec] || [];
    const secPool = secUnits.flatMap(u => u.wordIndices);
    if (kind === 'weak') {
      const reviewIndices = [];
      for (let i = 0; i < totalWords; i++) {
        if (keyToIndex.get(keyOf(wordsData[i])) !== i) continue;
        if (wordStatus[keyOf(wordsData[i])] === 'review') reviewIndices.push(i);
      }
      if (reviewIndices.length > 0) {
        const prioritized = shuffle(reviewIndices).slice(0, 10);
        const anchorWord = wordsData[prioritized[0]];
        const topicMeta = (anchorWord && TOPIC_META[anchorWord.topic]) || TOPIC_META.basics;
        const unit = secUnits[0] || OxCurriculum.unitById.values().next().value;
        startVirtualLearnPractice({
          id: `__weak_drill_${Date.now()}`,
          title: `คลังคำที่ต้องทบทวน (${prioritized.length} คำ)`,
          label: `🎯 ฝึกคำอ่อน · ${topicMeta.label || sec}`,
          wordIndices: prioritized,
          unit
        });
        return;
      }
      showToast('เยี่ยม! ยังไม่มีคำติดทบทวน · เริ่มชุดฝึกด่วนระดับ ' + sec + ' ให้แทน');
    }
    const knownInSec = secPool.filter(idx => wordStatus[keyOf(wordsData[idx])] === 'known');
    const sourcePool = knownInSec.length >= 6 ? knownInSec : secPool;
    const picked = shuffle([...sourcePool]).slice(0, 10);
    const unit = secUnits[0];
    startVirtualLearnPractice({
      id: `__quick_review_${sec}_${Date.now()}`,
      title: `ทบทวนด่วน CEFR ${sec}`,
      label: `⚡ ทบทวน ${picked.length} คำ`,
      wordIndices: picked,
      unit
    });
  }

  function syncLessonCheckButton() {
    const checkBtn = /** @type {HTMLButtonElement|null} */ ($('btn-lesson-check'));
    if (!activeLesson || !checkBtn) return;
    const step = activeLesson.queue[activeLesson.index];
    if (!step || step.isIntro) return;

    let ready = false;
    if (step.type === 'choice_bubble_match' || step.type === 'dialogue_complete') {
      ready = step.selectedChoice !== null && step.selectedChoice !== undefined;
    } else if (step.type === 'pair_match') {
      ready = Array.isArray(step.matchedIds) && Array.isArray(step.pairs) && step.matchedIds.length >= step.pairs.length;
    } else if (step.type === 'sentence_cloze_inline') {
      ready = step._useKeyboard ? Boolean(String(step.keyboardVal || '').trim()) : (step.selectedChoice !== null && step.selectedChoice !== undefined);
    } else if (step.type === 'spelling_context') {
      ready = Boolean(String(step.keyboardVal || '').trim());
    } else if (step.type === 'order_en_to_th' || step.type === 'order_th_to_en' || step.type === 'listening_word_bank') {
      ready = step._useKeyboard ? Boolean(String(step.keyboardVal || '').trim()) : (Array.isArray(step.chosenIds) && step.chosenIds.length > 0);
    }
    checkBtn.disabled = !ready;
  }

  function setupFooterDockForStep(step) {
    const actBar = $('lesson-action-bar');
    const fbBar = $('lesson-feedback-bar');
    const fbInsight = $('lesson-feedback-insight');
    const rateChips = $('lesson-rate-chips');
    const skipBtn = $('btn-lesson-skip');
    const modeBtn = $('btn-lesson-mode-toggle');
    const modeLabel = $('lesson-mode-toggle-label');
    const fbSpkBtn = $('btn-lesson-feedback-speak');
    document.querySelector('#lesson-screen .lesson-shell')?.classList.remove('is-feedback-open');

    if (fbBar) fbBar.hidden = true;
    if (fbInsight) {
      fbInsight.hidden = true;
      fbInsight.textContent = '';
    }
    if (rateChips) {
      rateChips.hidden = true;
      rateChips.querySelectorAll('.lesson-rate-chip').forEach(c => c.classList.remove('is-chosen'));
    }
    if (fbSpkBtn) fbSpkBtn.hidden = true;

    if (!step || step.isIntro) {
      if (actBar) actBar.hidden = true;
      return;
    }

    if (actBar) actBar.hidden = false;
    if (skipBtn) {
      skipBtn.textContent = step.type === 'listening_word_bank' ? 'ตอนนี้ไม่สะดวกฟัง' : 'ข้าม';
    }

    const supportsToggle = step.type === 'order_th_to_en' || step.type === 'listening_word_bank'
      || (step.type === 'sentence_cloze_inline' && Array.isArray(step.options));
    if (modeBtn && modeLabel) {
      modeBtn.hidden = !supportsToggle;
      modeLabel.textContent = step._useKeyboard ? 'ใช้คลังคำ' : 'ใช้แป้นพิมพ์';
    }

    syncLessonCheckButton();
  }

  // Shared Ghost-Slot Word Bank Renderer & Controller
  let lastWbSpeakAt = 0;
  function mountWordBankWidget(container, step, w, isThaiTarget) {
    const inputEl = container.querySelector('.lesson-wb-textarea');
    if (step._useKeyboard) {
      if (inputEl) {
        inputEl.value = step.keyboardVal || '';
        inputEl.addEventListener('input', () => {
          step.keyboardVal = inputEl.value;
          syncLessonCheckButton();
        });
        inputEl.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter' && !ev.shiftKey && !ev.isComposing) {
            ev.preventDefault();
            ev.stopPropagation();
            const chk = /** @type {HTMLButtonElement|null} */ ($('btn-lesson-check'));
            if (chk && !chk.disabled && !activeLesson.awaitingNext) chk.click();
          }
        });
        setTimeout(() => inputEl.focus(), 40);
      }
      return;
    }

    const trayEl = container.querySelector('.lesson-wb-tray');
    const bankEl = container.querySelector('.lesson-wb-bank');
    if (!trayEl || !bankEl) return;

    const renderTokens = (animateFlip = false) => {
      const prevRects = animateFlip
        ? OxMotion.snapshotRects(container, '.wb-tile[data-tok-id]:not(.is-ghost)', 'data-tok-id')
        : null;

      if (step.chosenIds.length === 0) {
        trayEl.innerHTML = `<span class="lesson-wb-placeholder">${isThaiTarget ? 'แตะคำภาษาไทยด้านล่างเพื่อเรียงเป็นประโยค...' : 'แตะคำภาษาอังกฤษด้านล่างเพื่อเรียงตามลำดับ...'}</span>`;
      } else {
        const tilesHtml = step.chosenIds.map((id, orderPos) => {
          const item = step.bankItems.find(b => b.id === id);
          if (!item) return '';
          const popCls = orderPos === step.chosenIds.length - 1 ? ' is-in-tray' : '';
          return `<button type="button" class="wb-tile${popCls}" data-tray-pos="${orderPos}" data-tok-id="${id}" ${activeLesson?.awaitingNext ? 'disabled' : ''}>${escapeHtml(item.text)}</button>`;
        }).join('');
        const clearBtnHtml = (step.chosenIds.length >= 2 && !activeLesson?.awaitingNext)
          ? `<button type="button" class="lesson-wb-clear-btn" title="ล้างคำตอบทั้งหมดในถาด" aria-label="ล้างคำตอบ">↺ ล้าง</button>`
          : '';
        trayEl.innerHTML = tilesHtml + clearBtnHtml;
      }

      const chosenSet = new Set(step.chosenIds);
      bankEl.innerHTML = step.bankItems.map(item => {
        const isGhost = chosenSet.has(item.id);
        return `<button type="button" class="wb-tile${isGhost ? ' is-ghost' : ''}" data-bank-id="${item.id}" data-tok-id="${item.id}" ${isGhost || activeLesson?.awaitingNext ? 'disabled tabindex="-1"' : ''}>${escapeHtml(item.text)}</button>`;
      }).join('');

      if (animateFlip && prevRects) {
        OxMotion.playFlip(container, prevRects, '.wb-tile[data-tok-id]:not(.is-ghost)', 'data-tok-id');
      }

      trayEl.querySelector('.lesson-wb-clear-btn')?.addEventListener('click', () => {
        if (!activeLesson || activeLesson.awaitingNext) return;
        step.chosenIds = [];
        SoundFX.tileDrop();
        renderTokens(true);
        syncLessonCheckButton();
      });

      trayEl.querySelectorAll('.wb-tile[data-tray-pos]').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!activeLesson || activeLesson.awaitingNext) return;
          const pos = Number(btn.dataset.trayPos);
          step.chosenIds.splice(pos, 1);
          SoundFX.tileDrop();
          renderTokens(true);
          syncLessonCheckButton();
        });
      });

      bankEl.querySelectorAll('.wb-tile[data-bank-id]:not(.is-ghost)').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!activeLesson || activeLesson.awaitingNext) return;
          const id = Number(btn.dataset.bankId);
          if (!step.chosenIds.includes(id)) {
            step.chosenIds.push(id);
            SoundFX.tilePick();
            const nowMs = Date.now();
            if (!isThaiTarget && !isSoundMuted && step.type !== 'listening_word_bank' && nowMs - lastWbSpeakAt >= 320) {
              const tok = step.bankItems.find(b => b.id === id);
              if (tok) {
                lastWbSpeakAt = nowMs;
                speakWordOverride(tok.text, false, null, { rate: 1.0 });
              }
            }
            renderTokens(true);
            syncLessonCheckButton();
          }
        });
      });
    };

    step._rerenderBank = renderTokens;
    renderTokens(false);
  }

  function updateLessonAccuracyPill(accPill, acc) {
    if (!accPill || !activeLesson) return;
    const mode = activeLesson.mode || 'normal';
    const isBoss = Boolean(activeLesson.stage && activeLesson.stage.isBoss);
    accPill.classList.remove('is-legendary', 'is-warn-pace');
    if (mode === 'legendary') {
      accPill.textContent = `👑 ${acc}% · เป้า ≥85%`;
      accPill.classList.add(acc < 85 ? 'is-warn-pace' : 'is-legendary');
    } else if (isBoss) {
      accPill.textContent = `🎯 ${acc}% · เป้า ≥70%`;
      if (acc < 70) accPill.classList.add('is-warn-pace');
    } else {
      accPill.textContent = `🎯 ${acc}%`;
    }
  }

  function updateLessonProgressUI(animateAdvance = false) {
    if (!activeLesson) return;
    const fill = $('lesson-progress-fill');
    const track = fill?.closest('.lesson-progress-track');
    const metaPct = $('lesson-progress-meta');
    const total = Math.max(1, activeLesson.initialTotal || activeLesson.queue.length || 1);
    const done = Math.max(0, Math.min(total, activeLesson.clearedCount || 0));
    const pct = Math.min(100, Math.round((done / total) * 100));
    if (fill) {
      fill.style.width = `${pct}%`;
      if (animateAdvance && pct > 0) OxMotion.pulseClass(fill, 'is-advancing', 540);
    }
    if (track) track.setAttribute('aria-valuenow', String(pct));
    if (metaPct) metaPct.textContent = `${done}/${total} · ${pct}%`;
  }

  function renderCurrentLessonStep() {
    if (!activeLesson) return;
    const body = $('lesson-stage-body');
    const accPill = $('lesson-acc-pill');
    const comboPill = $('lesson-combo-pill');
    if (!body) return;

    if (activeLesson.index >= activeLesson.queue.length) {
      finishActiveLesson();
      return;
    }

    updateLessonProgressUI(false);
    const acc = activeLesson.answeredUnique > 0
      ? Math.round((activeLesson.firstTryCorrect / activeLesson.answeredUnique) * 100)
      : 100;
    updateLessonAccuracyPill(accPill, acc);
    if (comboPill) {
      comboPill.hidden = activeLesson.combo < 2;
      comboPill.textContent = `🔥 ${activeLesson.combo} ข้อรวด!`;
      if (activeLesson.combo >= 2) OxMotion.pulseClass(comboPill, 'is-combo-pop');
    }
    OxMotion.pulseClass(body, 'is-step-entering');
    activeLesson.awaitingNext = false;

    const step = activeLesson.queue[activeLesson.index];
    const w = wordsData[step.wordIdx];
    const retryTag = step.requeued ? ' · ทบทวนอีกครั้ง' : '';
    setupFooterDockForStep(step);

    // Shared non-penalty grammar / root / usage tip drawer inside question cards
    const buildCoachHelperHtml = (wordObj) => {
      if (!wordObj) return '';
      const bits = [];
      if (wordObj.grammarPattern) bits.push(`<span class="lesson-coach-chip">📐 ${escapeHtml(wordObj.grammarPattern)}</span>`);
      if (wordObj.register) bits.push(`<span class="lesson-coach-chip">🏷️ ${escapeHtml(wordObj.register)}</span>`);
      if (wordObj.rootBreakdown) bits.push(`<div><strong>รากศัพท์:</strong> ${escapeHtml(wordObj.rootBreakdown)}</div>`);
      if (wordObj.usageTip) bits.push(`<div><strong>เคล็ดลับ:</strong> ${escapeHtml(wordObj.usageTip)}</div>`);
      if (bits.length === 0) return '';
      return `
        <div class="lesson-coach-wrap">
          <button type="button" class="lesson-coach-toggle" aria-expanded="false">💡 ดูไวยากรณ์ & เคล็ดลับ</button>
          <div class="lesson-coach-drawer" hidden>${bits.join('')}</div>
        </div>`;
    };
    const wireCoachHelper = (rootEl) => {
      const btn = rootEl.querySelector('.lesson-coach-toggle');
      const drawer = rootEl.querySelector('.lesson-coach-drawer');
      if (btn && drawer instanceof HTMLElement) {
        btn.addEventListener('click', () => {
          const open = drawer.hidden;
          drawer.hidden = !open;
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          SoundFX.tick();
        });
      }
    };

    // --- INTRO CARD ---
    if (step.type === 'intro') {
      const metaBadges = [
        w.syllables ? `<span class="lesson-intro-pill is-syll">${escapeHtml(w.syllables)}</span>` : '',
        w.register ? `<span class="lesson-intro-pill">${escapeHtml(w.register)}</span>` : '',
        w.grammarPattern ? `<span class="lesson-intro-pill is-grammar">${escapeHtml(w.grammarPattern)}</span>` : ''
      ].filter(Boolean).join('');

      const insightRows = [
        w.rootBreakdown ? `<div class="lesson-insight-row"><span class="lesson-insight-k">🧩 รากศัพท์</span><span>${escapeHtml(w.rootBreakdown)}</span></div>` : '',
        w.usageTip ? `<div class="lesson-insight-row"><span class="lesson-insight-k">💡 วิธีใช้จริง</span><span>${escapeHtml(w.usageTip)}</span></div>` : '',
        (Array.isArray(w.collocations) && w.collocations.length > 0)
          ? `<div class="lesson-insight-row"><span class="lesson-insight-k">🔗 คำที่ใช้คู่กัน</span><span>${w.collocations.slice(0, 3).map(c => `<code>${escapeHtml(c)}</code>`).join(' · ')}</span></div>`
          : ''
      ].filter(Boolean).join('');

      const phoneticParts = [
        w.phonetic ? `US ${escapeHtml(w.phonetic)}` : '',
        w.phoneticUK ? `UK ${escapeHtml(w.phoneticUK)}` : '',
        w.partOfSpeech ? escapeHtml(w.partOfSpeech) : ''
      ].filter(Boolean).join(' · ');

      body.innerHTML = `
                <span class="lesson-prompt-tag">คำใหม่น่าจดจำ · ${escapeHtml(w.cefr || 'A1')}</span>
                <div class="lesson-intro-card">
                    <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:10px;">
                        <div>
                            <h2 class="lesson-question-word">${escapeHtml(w.word)}</h2>
                            <div style="color:var(--text-muted); font-size:0.9rem; margin-top:4px;">${phoneticParts}</div>
                            ${metaBadges ? `<div class="lesson-intro-badges">${metaBadges}</div>` : ''}
                        </div>
                        <div class="lesson-audio-tools">
                            <button type="button" class="glass-btn-icon small lesson-speak-uk-btn" title="ฟังสำเนียงอังกฤษ (UK)" aria-label="ฟังสำเนียง UK">UK</button>
                            <button type="button" class="glass-btn-icon small lesson-speak-slow-btn" title="ฟังช้า (0.62x)" aria-label="ฟังเสียงช้า">🐢</button>
                            <button type="button" class="glass-btn-icon speak-btn lesson-speak-btn" aria-label="ฟังเสียงอ่าน">
                                ${ICON_SVG.volume || '🔊'}
                            </button>
                        </div>
                    </div>
                    <h3 style="margin:4px 0 0; font-size:1.3rem; color:var(--primary);">${escapeHtml(w.translation)}</h3>
                    <p class="lesson-question-sub">${escapeHtml(w.definition || '')}</p>
                    ${w.example ? `<div class="example-box"><i>"${renderHintableSentenceHtml(w.example)}"</i>${w.exampleTranslation ? `<div style="margin-top:6px; font-size:0.86rem; color:var(--text-muted);">${escapeHtml(w.exampleTranslation)}</div>` : ''}</div>` : ''}
                    ${insightRows ? `<div class="lesson-intro-insights">${insightRows}</div>` : ''}
                </div>
                <button type="button" class="btn btn-primary glass-btn btn-full lesson-intro-next-btn">เข้าใจแล้ว · ลุยต่อ →</button>
            `;
      const introSpkBtn = body.querySelector('.lesson-speak-btn');
      introSpkBtn?.addEventListener('click', (e) => speakWordOverride(w.word, true, e.currentTarget));
      body.querySelector('.lesson-speak-uk-btn')?.addEventListener('click', (e) => speakWordOverride(w.word, true, e.currentTarget, { lang: 'en-GB' }));
      body.querySelector('.lesson-speak-slow-btn')?.addEventListener('click', (e) => speakWordOverride(w.example || w.word, true, e.currentTarget, { rate: 0.62 }));
      body.querySelector('.lesson-intro-next-btn')?.addEventListener('click', () => {
        SoundFX.tick();
        if (!step._countedProgress) {
          step._countedProgress = true;
          activeLesson.clearedCount = Math.min(activeLesson.initialTotal || activeLesson.queue.length, (activeLesson.clearedCount || 0) + 1);
        }
        activeLesson.index++;
        renderCurrentLessonStep();
      });
      wireHintButtons(body);
      speakWordOverride(w.word, false, introSpkBtn);
      return;
    }

    // --- INTERACTIVE PAIR MATCH ---
    if (step.type === 'pair_match') {
      const byId = new Map(step.pairs.map(p => [p.id, p]));
      const leftHtml = step.leftIds.map(id => {
        const p = byId.get(id);
        const isMatched = step.matchedIds.includes(id);
        const isSelected = step.selectedLeftId === id;
        return `<button type="button" class="lesson-pair-tile is-left${isMatched ? ' is-matched' : ''}${isSelected ? ' is-selected' : ''}" data-side="left" data-pair-id="${escapeHtml(id)}"${isMatched ? ' disabled' : ''}>
          <strong>${escapeHtml(p?.en || '')}</strong>
          ${p?.posLabel ? `<small>${escapeHtml(p.posLabel)}</small>` : ''}
        </button>`;
      }).join('');
      const rightHtml = step.rightIds.map(id => {
        const p = byId.get(id);
        const isMatched = step.matchedIds.includes(id);
        const isSelected = step.selectedRightId === id;
        return `<button type="button" class="lesson-pair-tile is-right${isMatched ? ' is-matched' : ''}${isSelected ? ' is-selected' : ''}" data-side="right" data-pair-id="${escapeHtml(id)}"${isMatched ? ' disabled' : ''}>
          <span>${escapeHtml(p?.th || '')}</span>
        </button>`;
      }).join('');

      const pmTagBase = step.pairModeTag || 'จับคู่คำศัพท์ & ความหมาย';
      const pmHead = step.pairModeHeading || 'แตะจับคู่คำศัพท์กับความหมายที่ตรงกัน';
      body.innerHTML = `
                <span class="lesson-prompt-tag">${escapeHtml(pmTagBase)} (${step.matchedIds.length}/${step.pairs.length})${retryTag}</span>
                <h2 class="lesson-prompt-heading">${escapeHtml(pmHead)}</h2>
                <div class="lesson-pair-grid" id="lesson-pair-grid">
                    <div class="lesson-pair-col">${leftHtml}</div>
                    <div class="lesson-pair-col">${rightHtml}</div>
                </div>
            `;

      const tryResolvePair = () => {
        if (!step.selectedLeftId || !step.selectedRightId) return;
        const leftId = step.selectedLeftId;
        const rightId = step.selectedRightId;
        const leftBtn = body.querySelector(`.lesson-pair-tile.is-left[data-pair-id="${CSS.escape(leftId)}"]`);
        const rightBtn = body.querySelector(`.lesson-pair-tile.is-right[data-pair-id="${CSS.escape(rightId)}"]`);

        if (leftId === rightId) {
          step.matchedIds.push(leftId);
          step.selectedLeftId = null;
          step.selectedRightId = null;
          SoundFX.known(Math.min(5, step.matchedIds.length));
          const matchedPair = byId.get(leftId);
          if (matchedPair) speakWordOverride(matchedPair.en, false);
          if (leftBtn) { leftBtn.classList.remove('is-selected'); leftBtn.classList.add('is-matched'); /** @type {HTMLButtonElement} */ (leftBtn).disabled = true; }
          if (rightBtn) { rightBtn.classList.remove('is-selected'); rightBtn.classList.add('is-matched'); /** @type {HTMLButtonElement} */ (rightBtn).disabled = true; }
          const tag = body.querySelector('.lesson-prompt-tag');
          if (tag) tag.textContent = `${pmTagBase} (${step.matchedIds.length}/${step.pairs.length})${retryTag}`;
          syncLessonCheckButton();
        } else {
          step.mistakesCount = (step.mistakesCount || 0) + 1;
          step.selectedLeftId = null;
          step.selectedRightId = null;
          SoundFX.review();
          [leftBtn, rightBtn].forEach(el => {
            if (!el) return;
            el.classList.remove('is-selected');
            el.classList.add('is-mismatch');
            setTimeout(() => el.classList.remove('is-mismatch'), 380);
          });
        }
      };

      body.querySelectorAll('.lesson-pair-tile').forEach(btn => {
        btn.addEventListener('click', () => {
          if (activeLesson.awaitingNext || !(btn instanceof HTMLElement)) return;
          const side = btn.dataset.side;
          const pid = btn.dataset.pairId;
          if (!pid || step.matchedIds.includes(pid)) return;
          if (side === 'left') {
            step.selectedLeftId = step.selectedLeftId === pid ? null : pid;
            const pair = byId.get(pid);
            if (step.selectedLeftId && pair) speakWordOverride(pair.en, false);
            body.querySelectorAll('.lesson-pair-tile.is-left').forEach(b => b.classList.toggle('is-selected', b instanceof HTMLElement && b.dataset.pairId === step.selectedLeftId));
          } else {
            step.selectedRightId = step.selectedRightId === pid ? null : pid;
            body.querySelectorAll('.lesson-pair-tile.is-right').forEach(b => b.classList.toggle('is-selected', b instanceof HTMLElement && b.dataset.pairId === step.selectedRightId));
          }
          SoundFX.tick();
          tryResolvePair();
        });
      });
      syncLessonCheckButton();
      return;
    }

    // --- SPELLING CONTEXT ---
    if (step.type === 'spelling_context') {
      const sentenceHtml = step.maskedSentence
        ? `<div class="lesson-cloze-sentence" style="font-size:1.08rem; margin-top:4px;">${renderHintableSentenceHtml(step.maskedSentence, true)}</div>`
        : '';
      body.innerHTML = `
                <span class="lesson-prompt-tag">พิมพ์คำภาษาอังกฤษให้ถูกต้อง${step.clozeContextTag ? ` · ${escapeHtml(step.clozeContextTag)}` : ''}${retryTag}</span>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                    <h2 class="lesson-prompt-heading" style="font-size:1.55rem;">${escapeHtml(w.translation)}</h2>
                    <button type="button" class="glass-btn-icon small speak-btn lesson-speak-btn" aria-label="ฟังคำใบ้เสียง">🔊</button>
                </div>
                ${sentenceHtml}
                <p class="lesson-question-sub">${escapeHtml(w.definition || '')} (${escapeHtml(w.partOfSpeech || '')})</p>
                <div class="lesson-spelling-row">
                    <input type="text" class="lesson-spelling-input" placeholder="พิมพ์คำศัพท์..." autocomplete="off" autocapitalize="none" spellcheck="false">
                </div>
                <div style="font-size:0.82rem; color:var(--text-muted);">คำใบ้: ขึ้นต้นด้วย "${escapeHtml(step.targetSurface.charAt(0).toUpperCase())}" · ยาว ${step.targetSurface.length} ตัวอักษร</div>
                ${buildCoachHelperHtml(w)}
            `;
      wireCoachHelper(body);
      const inp = /** @type {HTMLInputElement|null} */ (body.querySelector('.lesson-spelling-input'));
      const slotEl = body.querySelector('[data-cloze-slot]');
      if (inp) {
        inp.value = step.keyboardVal || '';
        if (slotEl && inp.value.trim()) {
          slotEl.textContent = inp.value.trim();
          slotEl.classList.add('is-filled');
        }
        inp.addEventListener('input', () => {
          step.keyboardVal = inp.value;
          SoundFX.typing();
          if (slotEl) {
            const v = inp.value.trim();
            slotEl.textContent = v || '______';
            slotEl.classList.toggle('is-filled', Boolean(v));
          }
          syncLessonCheckButton();
        });
        inp.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter' && !ev.isComposing) {
            ev.preventDefault();
            ev.stopPropagation();
            const chk = /** @type {HTMLButtonElement|null} */ ($('btn-lesson-check'));
            if (chk && !chk.disabled && !activeLesson.awaitingNext) chk.click();
          }
        });
        setTimeout(() => inp.focus(), 40);
      }
      const spk = body.querySelector('.lesson-speak-btn');
      spk?.addEventListener('click', () => speakWordOverride(step.targetSurface || w.word, true, spk));
      wireHintButtons(body);
      return;
    }

    // --- DIALOGUE COMPLETION (Screenshots 2 & 3) ---
    if (step.type === 'dialogue_complete') {
      const dlg = step.dialogue;
      const optsHtml = step.choiceTexts.map((txt, n) => `
                <button type="button" class="lesson-opt-btn${step.selectedChoice === n ? ' is-selected' : ''}" data-choice-idx="${n}" data-opt-pos="${n + 1}">
                    <span class="lesson-opt-num">${n + 1}</span>
                    <span>${escapeHtml(txt)}</span>
                </button>`).join('');
      const previewText = step.selectedChoice !== null ? step.choiceTexts[step.selectedChoice] : '______';
      body.innerHTML = `
                <span class="lesson-prompt-tag">บทสนทนาประจำวัน${retryTag}</span>
                <h2 class="lesson-prompt-heading">เติมบทสนทนาให้สมบูรณ์</h2>
                <div class="lesson-dialogue-scene">
                    <div class="lesson-cast-row">
                        <button type="button" class="lesson-cast-avatar" data-cast-idx="${Number(step.castIdx || 0)}" title="แตะเพื่อรับกำลังใจ">${renderCastAvatar(step.castIdx, 'calm')}</button>
                        <div class="lesson-speech-bubble">
                            <div class="lesson-audio-tools">
                                <button type="button" class="glass-btn-icon small speak-btn lesson-speak-btn" aria-label="ฟังประโยค">🔊</button>
                                <button type="button" class="glass-btn-icon small lesson-speak-slow-btn" title="ฟังช้า (0.62x)" aria-label="ฟังเสียงช้า">🐢</button>
                            </div>
                            <span>${renderHintableSentenceHtml(dlg.promptEn)}<small class="lesson-dialogue-th" hidden>${escapeHtml(dlg.promptTh)}</small></span>
                        </div>
                    </div>
                    <div class="lesson-cast-row is-right">
                        <button type="button" class="lesson-cast-avatar" data-cast-idx="${Number(step.castIdx || 0) + 1}" title="แตะเพื่อรับกำลังใจ">${renderCastAvatar((step.castIdx || 0) + 1, 'calm')}</button>
                        <div class="lesson-speech-bubble lesson-dialogue-reply-bubble${step.selectedChoice !== null ? ' is-filled' : ''}" data-reply-preview>
                            <span>${escapeHtml(previewText)}</span>
                        </div>
                    </div>
                </div>
                <div class="lesson-options-grid is-vertical" id="lesson-options-grid">${optsHtml}</div>
            `;
      const spkBtn = body.querySelector('.lesson-speak-btn');
      spkBtn?.addEventListener('click', () => speakWordOverride(dlg.promptEn, true, spkBtn));
      body.querySelector('.lesson-speak-slow-btn')?.addEventListener('click', (e) => speakWordOverride(dlg.promptEn, true, e.currentTarget, { rate: 0.62 }));
      speakWordOverride(dlg.promptEn, false, spkBtn);
      wireHintButtons(body);

      const replyBubble = body.querySelector('[data-reply-preview]');
      body.querySelectorAll('.lesson-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (activeLesson.awaitingNext || !(btn instanceof HTMLElement)) return;
          const chosen = Number(btn.dataset.choiceIdx);
          step.selectedChoice = chosen;
          body.querySelectorAll('.lesson-opt-btn').forEach(b => b.classList.toggle('is-selected', b instanceof HTMLElement && Number(b.dataset.choiceIdx) === chosen));
          if (replyBubble instanceof HTMLElement) {
            const spanEl = replyBubble.querySelector('span');
            if (spanEl) spanEl.textContent = step.choiceTexts[chosen];
            else replyBubble.textContent = step.choiceTexts[chosen];
            replyBubble.classList.add('is-filled');
            OxMotion.springPop(replyBubble);
          }
          OxMotion.springPop(btn);
          SoundFX.tick();
          syncLessonCheckButton();
        });
      });
      return;
    }

    // --- SENTENCE CLOZE INLINE (Screenshot 6 Visual Cloze Pill Strip) ---
    if (step.type === 'sentence_cloze_inline') {
      const optsHtml = Array.isArray(step.options) ? step.options.map((optIdx, n) => `
                <button type="button" class="lesson-opt-btn lesson-cloze-pill${step.selectedChoice === optIdx ? ' is-selected' : ''}" data-opt-idx="${optIdx}" data-opt-pos="${n + 1}">
                    <span>${escapeHtml(wordsData[optIdx].word)}</span>
                </button>`).join('') : '';

      const selectedWordText = !step._useKeyboard && step.selectedChoice !== null && wordsData[step.selectedChoice]
        ? wordsData[step.selectedChoice].word
        : (step._useKeyboard && step.keyboardVal.trim() ? step.keyboardVal.trim() : '');

      body.innerHTML = `
                ${step.clozeContextTag ? `<span class="lesson-prompt-tag">${escapeHtml(step.clozeContextTag)}${retryTag}</span>` : (retryTag ? `<span class="lesson-prompt-tag">ทบทวนอีกครั้ง</span>` : '')}
                <h2 class="lesson-prompt-heading">เติมในช่องว่าง</h2>
                <div class="lesson-cloze-scene">
                    <div class="lesson-cloze-illustration">${renderClozeSceneSvg(w)}</div>
                    <div class="lesson-cloze-text-wrap">
                        <div class="lesson-cloze-sentence">${renderHintableSentenceHtml(step.maskedSentence, true)}</div>
                        <p class="lesson-question-sub">${escapeHtml(step.subTranslation || w.exampleTranslation || w.translation)}</p>
                    </div>
                </div>
                ${step._useKeyboard ? `
                    <div class="lesson-spelling-row">
                        <input type="text" class="lesson-spelling-input" placeholder="พิมพ์คำที่หายไป (${escapeHtml(step.targetSurface.charAt(0).toUpperCase())}..., ${step.targetSurface.length} ตัวอักษร)..." autocomplete="off" autocapitalize="none" spellcheck="false">
                    </div>` : `<div class="lesson-options-grid is-cloze-pills" id="lesson-options-grid">${optsHtml}</div>`}
                ${buildCoachHelperHtml(w)}
            `;
      wireCoachHelper(body);
      const slotEl = body.querySelector('[data-cloze-slot]');
      if (slotEl && selectedWordText) {
        slotEl.textContent = selectedWordText;
        slotEl.classList.add('is-filled');
      }
      wireHintButtons(body);

      if (step._useKeyboard) {
        const inp = /** @type {HTMLInputElement|null} */ (body.querySelector('.lesson-spelling-input'));
        if (inp) {
          inp.value = step.keyboardVal || '';
          inp.addEventListener('input', () => {
            step.keyboardVal = inp.value;
            SoundFX.typing();
            if (slotEl) {
              const v = inp.value.trim();
              slotEl.textContent = v || '______';
              slotEl.classList.toggle('is-filled', Boolean(v));
            }
            syncLessonCheckButton();
          });
          inp.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter' && !ev.isComposing) {
              ev.preventDefault();
              ev.stopPropagation();
              const chk = /** @type {HTMLButtonElement|null} */ ($('btn-lesson-check'));
              if (chk && !chk.disabled && !activeLesson.awaitingNext) chk.click();
            }
          });
          setTimeout(() => inp.focus(), 40);
        }
      } else {
        body.querySelectorAll('.lesson-opt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (activeLesson.awaitingNext || !(btn instanceof HTMLElement)) return;
            const optIdx = Number(btn.dataset.optIdx);
            step.selectedChoice = optIdx;
            body.querySelectorAll('.lesson-opt-btn').forEach(b => b.classList.toggle('is-selected', b instanceof HTMLElement && Number(b.dataset.optIdx) === optIdx));
            if (slotEl instanceof HTMLElement && wordsData[optIdx]) {
              slotEl.textContent = wordsData[optIdx].word;
              slotEl.classList.add('is-filled');
              OxMotion.springPop(slotEl);
            }
            OxMotion.springPop(btn);
            SoundFX.tick();
            syncLessonCheckButton();
          });
        });
      }
      return;
    }

    // --- LISTENING WORD BANK (Screenshot 5: Normal + Turtle 0.62x + Toggle Keyboard) ---
    if (step.type === 'listening_word_bank') {
      body.innerHTML = `
                <span class="lesson-prompt-tag">ฝึกฟัง & เรียงวลี${retryTag}</span>
                <h2 class="lesson-prompt-heading">แตะคำที่คุณได้ยิน</h2>
                <div class="lesson-audio-duo">
                    <button type="button" class="lesson-spk-btn-3d lesson-spk-normal" aria-label="ฟังเสียงปกติ">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                    </button>
                    <button type="button" class="lesson-spk-btn-3d lesson-spk-turtle" title="ฟังช้าลง (0.62x)" aria-label="ฟังเสียงช้าๆ">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"/><path d="M4.82 7.9 8 10"/><path d="M15.18 7.9 12 10"/><path d="M16.93 10H20a2 2 0 0 1 0 4H2"/></svg>
                    </button>
                </div>
                ${step._useKeyboard ? `
                    <div class="lesson-wb-keyboard-box">
                        <textarea class="lesson-wb-textarea" placeholder="พิมพ์วลีภาษาอังกฤษที่ได้ยิน..." autocomplete="off" autocapitalize="none" spellcheck="false"></textarea>
                    </div>` : `
                    <div class="lesson-wb-tray"></div>
                    <div class="lesson-wb-bank"></div>`}
            `;
      const normBtn = body.querySelector('.lesson-spk-normal');
      const slowBtn = body.querySelector('.lesson-spk-turtle');
      normBtn?.addEventListener('click', () => speakWordOverride(step.audioText, true, normBtn, { rate: 0.92 }));
      slowBtn?.addEventListener('click', () => speakWordOverride(step.audioText, true, slowBtn, { rate: 0.62 }));
      speakWordOverride(step.audioText, false, normBtn, { rate: 0.92 });
      mountWordBankWidget(body, step, w, false);
      return;
    }

    // --- SENTENCE ORDERING WORD BANK (EN->TH Screenshot 4 & TH->EN) ---
    if (step.type === 'order_en_to_th' || step.type === 'order_th_to_en') {
      const isThaiTarget = step.type === 'order_en_to_th';
      const bubbleHtml = isThaiTarget
        ? `<div class="lesson-audio-tools"><button type="button" class="glass-btn-icon small speak-btn lesson-speak-btn" aria-label="ฟังเสียงประโยค">🔊</button><button type="button" class="glass-btn-icon small lesson-speak-slow-btn" title="ฟังช้า (0.62x)" aria-label="ฟังเสียงช้า">🐢</button></div><span>${renderHintableSentenceHtml(step.promptEn)}</span>`
        : `<span>${escapeHtml(step.promptTh)}</span>`;
      body.innerHTML = `
                ${retryTag ? `<span class="lesson-prompt-tag">ทบทวนอีกครั้ง</span>` : ''}
                <h2 class="lesson-prompt-heading">${isThaiTarget ? 'เขียนเป็นภาษาไทย' : 'เรียงเป็นประโยคภาษาอังกฤษ'}</h2>
                <div class="lesson-cast-row">
                    <button type="button" class="lesson-cast-avatar" data-cast-idx="${Number(step.castIdx || 0)}" title="แตะเพื่อรับกำลังใจ">${renderCastAvatar(step.castIdx, 'calm')}</button>
                    <div class="lesson-speech-bubble">${bubbleHtml}</div>
                </div>
                ${step._useKeyboard ? `
                    <div class="lesson-wb-keyboard-box">
                        <textarea class="lesson-wb-textarea" placeholder="พิมพ์คำแปลภาษาอังกฤษ..." autocomplete="off" autocapitalize="none" spellcheck="false"></textarea>
                    </div>` : `
                    <div class="lesson-wb-tray"></div>
                    <div class="lesson-wb-bank"></div>`}
            `;
      if (isThaiTarget) {
        const spk = body.querySelector('.lesson-speak-btn');
        spk?.addEventListener('click', () => speakWordOverride(step.promptEn, true, spk));
        body.querySelector('.lesson-speak-slow-btn')?.addEventListener('click', (e) => speakWordOverride(step.promptEn, true, e.currentTarget, { rate: 0.62 }));
        speakWordOverride(step.promptEn, false, spk);
        wireHintButtons(body);
      }
      mountWordBankWidget(body, step, w, isThaiTarget);
      return;
    }

    // --- BUBBLE VOCAB SELECTION (Multi-Angle: EN->TH, TH->EN, Definition, Synonym, Antonym, Collocation) ---
    const angle = step.quizAngle || step.direction || 'en_to_th';
    const isEnOptions = angle !== 'en_to_th';
    let promptTag = retryTag ? 'ทบทวนอีกครั้ง' : '';
    let promptHeading = isEnOptions ? 'เลือกคำศัพท์ภาษาอังกฤษที่ถูกต้อง' : 'เลือกความหมายที่ถูกต้อง';
    let bubbleClass = 'lesson-speech-bubble';
    let bubbleText = '';

    if (angle === 'def_to_en') {
      promptTag = `ทายคำจากคำนิยาม (Definition)${retryTag}`;
      promptHeading = 'เลือกคำศัพท์ที่ตรงกับคำนิยามนี้';
      bubbleClass += ' is-angle-card';
      const clueHtml = activeLesson.difficultyTier <= 1 && step.angleThClue
        ? `<span class="lesson-angle-clue">ใบ้ความหมาย: ${escapeHtml(step.angleThClue)}</span>`
        : '';
      bubbleText = `<div class="lesson-angle-meta"><span class="lesson-angle-pill">📖 ${escapeHtml(w.partOfSpeech || 'Definition')}</span>${clueHtml}</div><span class="lesson-angle-headline">"${escapeHtml(step.angleMeta || w.definition || '')}"</span>`;
    } else if (angle === 'syn_to_en') {
      promptTag = `คำที่มีความหมายใกล้เคียง (Synonym)${retryTag}`;
      promptHeading = 'เลือกคำศัพท์ที่มีความหมายใกล้เคียงกัน';
      bubbleClass += ' is-angle-card';
      bubbleText = `<div class="lesson-angle-meta"><span class="lesson-angle-pill is-syn">≈ Synonym</span>${step.angleThClue ? `<span class="lesson-angle-clue">${escapeHtml(w.partOfSpeech || '')} · แนวความหมาย "${escapeHtml(step.angleThClue)}"</span>` : ''}</div><span class="lesson-angle-headline">≈ ${escapeHtml(step.angleMeta || '')}</span>`;
    } else if (angle === 'ant_to_en') {
      promptTag = `คำที่มีความหมายตรงข้าม (Antonym)${retryTag}`;
      promptHeading = 'เลือกคำศัพท์ที่มีความหมายตรงข้าม';
      bubbleClass += ' is-angle-card';
      bubbleText = `<div class="lesson-angle-meta"><span class="lesson-angle-pill is-ant">↔ Antonym</span><span class="lesson-angle-clue">${escapeHtml(w.partOfSpeech || '')}</span></div><span class="lesson-angle-headline">ตรงข้ามกับ "${escapeHtml(step.angleMeta || '')}"</span>`;
    } else if (angle === 'colloc_to_en') {
      promptTag = `เติมวลีที่ใช้คู่กัน (Collocation)${retryTag}`;
      promptHeading = 'เลือกคำศัพท์ที่เติมในวลีนี้ได้ถูกต้อง';
      bubbleClass += ' is-angle-card';
      bubbleText = `<div class="lesson-angle-meta"><span class="lesson-angle-pill is-colloc">🔗 Collocation</span>${step.angleThClue ? `<span class="lesson-angle-clue">หมายถึง: ${escapeHtml(step.angleThClue)}</span>` : ''}</div><span class="lesson-angle-headline">"${escapeHtml(step.angleMasked || '______')}"</span>`;
    } else if (angle === 'th_to_en') {
      bubbleText = `<span>${escapeHtml(w.translation)}</span>`;
    } else {
      bubbleText = `<button type="button" class="glass-btn-icon small speak-btn lesson-speak-btn" aria-label="ฟังเสียงอ่าน">🔊</button><span>${escapeHtml(w.word)} <small style="color:var(--text-muted); font-weight:600;">${escapeHtml(w.phonetic || '')}</small></span>`;
    }

    const optsHtml = (step.options || []).map((optIdx, n) => {
      const ow = wordsData[optIdx];
      const label = isEnOptions ? ow.word : ow.translation;
      return `
                <button type="button" class="lesson-opt-btn${step.selectedChoice === optIdx ? ' is-selected' : ''}" data-opt-idx="${optIdx}" data-opt-pos="${n + 1}">
                    <span class="lesson-opt-num">${n + 1}</span>
                    <span>${escapeHtml(label)}</span>
                </button>`;
    }).join('');

    body.innerHTML = `
            ${promptTag ? `<span class="lesson-prompt-tag">${escapeHtml(promptTag)}</span>` : ''}
            <h2 class="lesson-prompt-heading">${promptHeading}</h2>
            <div class="lesson-cast-row">
                <button type="button" class="lesson-cast-avatar" data-cast-idx="${Number(step.castIdx || 0)}" title="แตะเพื่อรับกำลังใจ">${renderCastAvatar(step.castIdx, 'calm')}</button>
                <div class="${bubbleClass}">${bubbleText}</div>
            </div>
            <div class="lesson-options-grid is-vertical" id="lesson-options-grid">${optsHtml}</div>
            ${buildCoachHelperHtml(w)}
        `;
    wireCoachHelper(body);
    const spk = body.querySelector('.lesson-speak-btn');
    if (spk) {
      spk.addEventListener('click', () => speakWordOverride(w.word, true, spk));
      speakWordOverride(w.word, false, spk);
    }
    body.querySelectorAll('.lesson-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (activeLesson.awaitingNext || !(btn instanceof HTMLElement)) return;
        const chosenIdx = Number(btn.dataset.optIdx);
        step.selectedChoice = chosenIdx;
        body.querySelectorAll('.lesson-opt-btn').forEach(b => b.classList.toggle('is-selected', b instanceof HTMLElement && Number(b.dataset.optIdx) === chosenIdx));
        OxMotion.springPop(btn);
        SoundFX.tick();
        syncLessonCheckButton();
      });
    });
  }

  function evaluateCurrentStep(isSkip = false) {
    if (!activeLesson) return null;
    const step = activeLesson.queue[activeLesson.index];
    const w = wordsData[step.wordIdx];

    if (step.type === 'pair_match') {
      const ok = !isSkip && Array.isArray(step.matchedIds) && step.matchedIds.length >= step.pairs.length;
      const summaryLine = step.pairs.map(p => `${p.en} (${p.th})`).join(' · ');
      return {
        isCorrect: ok,
        nearMiss: ok && Number(step.mistakesCount || 0) > 2,
        correctDisplay: `${step.pairs.length}/${step.pairs.length} คู่`,
        feedbackDetail: summaryLine,
        speakText: w.word,
        wordObj: w
      };
    }

    if (step.type === 'dialogue_complete') {
      const dlg = step.dialogue;
      const ok = !isSkip && step.selectedChoice === step.correctChoiceIdx;
      return {
        isCorrect: ok,
        nearMiss: false,
        correctDisplay: dlg.answerEn,
        feedbackDetail: `ความหมาย: ${dlg.answerTh}`,
        speakText: dlg.answerEn,
        wordObj: w
      };
    }

    if (step.type === 'choice_bubble_match') {
      const ok = !isSkip && step.selectedChoice === step.wordIdx;
      const wrongOpt = !ok && !isSkip && step.selectedChoice !== null ? wordsData[step.selectedChoice] : null;
      const wrongNote = wrongOpt ? ` (ที่คุณเลือก: "${wrongOpt.word}" = ${wrongOpt.translation})` : '';
      const qAngle = step.quizAngle || step.direction || 'en_to_th';
      let baseDetail = w.example ? `${w.example} — ${w.exampleTranslation || ''}` : `${w.word} · ${w.translation}`;
      if (qAngle === 'syn_to_en' && step.angleMeta) {
        baseDetail = `${w.word} (${w.translation}) ≈ ความหมายใกล้เคียงกับ "${step.angleMeta}"`;
      } else if (qAngle === 'ant_to_en' && step.angleMeta) {
        baseDetail = `${w.word} (${w.translation}) ↔ ตรงข้ามกับ "${step.angleMeta}"`;
      } else if (qAngle === 'colloc_to_en' && step.angleMeta) {
        baseDetail = `วลีที่ใช้คู่กัน: "${step.angleMeta}" — ${w.word} (${w.translation})`;
      } else if (qAngle === 'def_to_en' && w.definition) {
        baseDetail = `${w.word} (${w.translation}) — นิยาม: ${w.definition}`;
      }
      return {
        isCorrect: ok,
        nearMiss: false,
        correctDisplay: `${w.word} (${w.translation})`,
        feedbackDetail: baseDetail + wrongNote,
        speakText: qAngle === 'colloc_to_en' && step.angleMeta ? step.angleMeta : (w.example || w.word),
        wordObj: w
      };
    }

    if (step.type === 'sentence_cloze_inline') {
      const grade = isSkip ? { ok: false, nearMiss: false } : (step._useKeyboard
        ? gradeLessonTextAnswer(step.keyboardVal, [step.targetSurface, w.word], false, true)
        : { ok: step.selectedChoice === step.wordIdx, nearMiss: false });
      const fullSentence = step.maskedSentence.replace('______', step.targetSurface);
      const wrongOpt = !grade.ok && !isSkip && !step._useKeyboard && step.selectedChoice !== null ? wordsData[step.selectedChoice] : null;
      const wrongNote = wrongOpt ? ` · "${wrongOpt.word}" แปลว่า "${wrongOpt.translation}"` : '';
      const sentNote = step.subTranslation || w.exampleTranslation || '';
      return {
        isCorrect: grade.ok,
        nearMiss: grade.nearMiss,
        correctDisplay: `${step.targetSurface} (${w.translation})`,
        feedbackDetail: `${fullSentence}${sentNote ? ` (${sentNote})` : ''}${wrongNote}`,
        speakText: fullSentence,
        wordObj: w
      };
    }

    if (step.type === 'spelling_context') {
      const res = isSkip ? { ok: false, nearMiss: false } : gradeLessonTextAnswer(step.keyboardVal, [step.targetSurface, w.word], false, true);
      const fullSentence = step.maskedSentence ? step.maskedSentence.replace('______', step.targetSurface) : w.word;
      const ctxNote = step.subTranslation || w.exampleTranslation || w.definition || '';
      return {
        isCorrect: res.ok,
        nearMiss: res.nearMiss,
        correctDisplay: `${step.targetSurface} (${w.translation})`,
        feedbackDetail: `${w.word} (${w.translation})${ctxNote ? ` · ${ctxNote}` : ''}`,
        speakText: fullSentence,
        wordObj: w
      };
    }

    if (step.type === 'listening_word_bank' || step.type === 'order_th_to_en' || step.type === 'order_en_to_th') {
      const isThai = step.type === 'order_en_to_th';
      const rawAnswer = step._useKeyboard
        ? step.keyboardVal
        : step.chosenIds.map(id => step.bankItems.find(b => b.id === id)?.text || '').join(isThai ? '' : ' ');
      const res = isSkip ? { ok: false, nearMiss: false } : gradeLessonTextAnswer(rawAnswer, step.expectedVariants, isThai, step._useKeyboard);
      const fullCorrect = step.expectedVariants[0];
      return {
        isCorrect: res.ok,
        nearMiss: res.nearMiss,
        correctDisplay: fullCorrect,
        feedbackDetail: isThai
          ? `${step.promptEn} = ${step.answerTh || w.exampleTranslation}`
          : `${fullCorrect} (${step.type === 'listening_word_bank' ? step.translationNote : (step.promptTh || w.exampleTranslation)})`,
        speakText: isThai ? step.promptEn : fullCorrect,
        wordObj: w
      };
    }

    return { isCorrect: false, nearMiss: false, correctDisplay: w.word, feedbackDetail: w.translation, speakText: w.word, wordObj: w };
  }

  function applyVisualFeedbackToStage(evalRes, isSkip) {
    const body = $('lesson-stage-body');
    if (!body || !activeLesson) return;
    const step = activeLesson.queue[activeLesson.index];

    const nextCombo = evalRes.isCorrect ? (activeLesson.combo + 1) : 0;
    const cheers = ['เก่งมาก! ✨', 'สุดยอด! 🎉', 'เป๊ะเลย! 💚', 'ยอดเยี่ยม! ⭐'];
    const reactLabel = !mascotEncourageEnabled
      ? ''
      : (evalRes.isCorrect
        ? (nextCombo >= 3 ? `คอมโบ x${nextCombo}! 🔥` : cheers[activeLesson.index % cheers.length])
        : (isSkip ? 'ข้ามข้อนี้' : 'ลองใหม่ได้!'));

    body.querySelectorAll('.lesson-cast-avatar').forEach((av, idx) => {
      if (!(av instanceof HTMLElement)) return;
      const cIdx = Number(av.dataset.castIdx ?? step.castIdx ?? idx);
      av.innerHTML = renderCastAvatar(cIdx, evalRes.isCorrect ? 'happy' : 'retry', idx === 0 ? reactLabel : '');
      av.classList.remove('mood-happy', 'mood-retry');
      av.classList.add(evalRes.isCorrect ? 'mood-happy' : 'mood-retry');
      OxMotion.springPop(av);
    });

    const comboPillEl = $('lesson-combo-pill');
    if (comboPillEl) {
      comboPillEl.hidden = nextCombo < 2;
      if (nextCombo >= 2) {
        comboPillEl.textContent = `🔥 ${nextCombo} ข้อรวด!`;
        OxMotion.pulseClass(comboPillEl, 'is-combo-pop');
      }
    }
    body.querySelectorAll('.lesson-opt-btn').forEach(btn => {
      if (btn instanceof HTMLButtonElement) btn.disabled = true;
      if (!(btn instanceof HTMLElement)) return;
      if (step.type === 'dialogue_complete') {
        const ci = Number(btn.dataset.choiceIdx);
        if (ci === step.correctChoiceIdx) btn.classList.add('is-correct');
        else if (ci === step.selectedChoice && !evalRes.isCorrect) btn.classList.add('is-wrong');
      } else {
        const oi = Number(btn.dataset.optIdx);
        if (oi === step.wordIdx) btn.classList.add('is-correct');
        else if (oi === step.selectedChoice && !evalRes.isCorrect) btn.classList.add('is-wrong');
      }
    });
    const nextAcc = activeLesson.answeredUnique + (!step.requeued ? 1 : 0) > 0
      ? Math.round(((activeLesson.firstTryCorrect + (!step.requeued && evalRes.isCorrect ? 1 : 0)) / Math.max(1, activeLesson.answeredUnique + (!step.requeued ? 1 : 0))) * 100)
      : 100;
    updateLessonAccuracyPill($('lesson-acc-pill'), nextAcc);

    body.querySelectorAll('.wb-tile, .lesson-spelling-input, .lesson-wb-textarea, .lesson-wb-clear-btn').forEach(el => {
      if ('disabled' in el) /** @type {HTMLInputElement} */ (el).disabled = true;
    });
    if (!evalRes.isCorrect && !isSkip && !step._useKeyboard && Array.isArray(step.chosenIds) && Array.isArray(step.answerTokens)) {
      body.querySelectorAll('.lesson-wb-tray .wb-tile[data-tray-pos]').forEach(tileEl => {
        if (!(tileEl instanceof HTMLElement)) return;
        const pos = Number(tileEl.dataset.trayPos);
        const tokText = String(tileEl.textContent || '').trim().toLowerCase();
        const expectedTok = String(step.answerTokens[pos] || '').trim().toLowerCase();
        tileEl.classList.add(tokText === expectedTok ? 'is-right-tok' : 'is-wrong-tok');
      });
    }
    const dialogueThEl = body.querySelector('.lesson-dialogue-th');
    if (dialogueThEl instanceof HTMLElement) dialogueThEl.hidden = false;
    const slot = body.querySelector('[data-cloze-slot]');
    if (slot && step.type === 'sentence_cloze_inline') {
      slot.textContent = step.targetSurface;
      slot.classList.add('is-filled', evalRes.isCorrect ? 'is-correct' : 'is-wrong');
    }
    const replyBubble = body.querySelector('[data-reply-preview]');
    if (replyBubble && step.type === 'dialogue_complete') {
      replyBubble.textContent = step.dialogue.answerEn;
      replyBubble.classList.add('is-filled', evalRes.isCorrect ? 'is-correct' : 'is-wrong');
    }
  }

  function handleLessonCheck(isSkip = false) {
    if (!activeLesson || activeLesson.awaitingNext) return;
    const step = activeLesson.queue[activeLesson.index];
    if (!step || step.isIntro) return;

    // "ตอนนี้ไม่สะดวกฟัง": swap listening exercise to reading exercise without penalty!
    if (isSkip && step.type === 'listening_word_bank') {
      lessonListeningMutedUntil = Date.now() + 15 * 60 * 1000;
      for (let q = activeLesson.index + 1; q < activeLesson.queue.length; q++) {
        const fut = activeLesson.queue[q];
        if (fut.type === 'listening_word_bank') {
          const fw = wordsData[fut.wordIdx];
          const dist = pickDistractorIndices(fut.wordIdx, activeLesson.unit.wordIndices, 3);
          activeLesson.queue[q] = {
            type: 'choice_bubble_match',
            direction: 'en_to_th',
            wordIdx: fut.wordIdx,
            options: shuffle([fut.wordIdx, ...dist]),
            selectedChoice: null,
            castIdx: fut.castIdx || q,
            requeued: fut.requeued
          };
          if (fw && fw.exampleTranslation && fw.example) {
            const enToks = tokenizeEnglishSentence(fw.example);
            if (enToks.length >= 2) {
              const wb = createWordBankData(enToks, fut.wordIdx, activeLesson.unit.wordIndices, false);
              activeLesson.queue[q] = {
                type: 'order_th_to_en',
                wordIdx: fut.wordIdx,
                promptTh: fw.exampleTranslation,
                answerEn: fw.example,
                answerTokens: wb.answerTokens,
                bankItems: wb.bankItems,
                expectedVariants: [fw.example, enToks.join(' ')],
                chosenIds: [],
                keyboardVal: '',
                _useKeyboard: false,
                castIdx: fut.castIdx || q,
                requeued: fut.requeued
              };
            }
          }
        }
      }
      const fw = wordsData[step.wordIdx];
      const dist = pickDistractorIndices(step.wordIdx, activeLesson.unit.wordIndices, 3);
      activeLesson.queue[activeLesson.index] = {
        type: 'choice_bubble_match',
        direction: 'en_to_th',
        wordIdx: step.wordIdx,
        options: shuffle([step.wordIdx, ...dist]),
        selectedChoice: null,
        castIdx: step.castIdx || 0,
        requeued: step.requeued
      };
      if (fw && fw.exampleTranslation && fw.example) {
        const cloze = findClozeMatch(fw);
        if (cloze && cloze.surface.toLowerCase() === fw.word.toLowerCase()) {
          activeLesson.queue[activeLesson.index] = {
            type: 'sentence_cloze_inline',
            wordIdx: step.wordIdx,
            maskedSentence: cloze.masked,
            targetSurface: cloze.surface,
            options: shuffle([step.wordIdx, ...dist]),
            selectedChoice: null,
            keyboardVal: '',
            _useKeyboard: false,
            castIdx: step.castIdx || 0,
            requeued: step.requeued
          };
        }
      }
      showToast('ปิดโหมดฟังชั่วคราว 15 นาที · เปลี่ยนเป็นโจทย์อ่านให้แล้ว');
      renderCurrentLessonStep();
      return;
    }

    const evalRes = evaluateCurrentStep(isSkip);
    if (!evalRes) return;
    activeLesson.awaitingNext = true;
    activeLesson._feedbackShownAt = performance.now();
    document.querySelector('#lesson-screen .lesson-shell')?.classList.add('is-feedback-open');
    const stageBodyEl = $('lesson-stage-body');
    if (document.activeElement instanceof HTMLElement && stageBodyEl?.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    applyVisualFeedbackToStage(evalRes, isSkip);

    if (!step.requeued) {
      activeLesson.answeredUnique++;
      if (evalRes.isCorrect) activeLesson.firstTryCorrect++;
      if (activeLesson.wordOutcomes && activeLesson.wordOutcomes[step.wordIdx] !== 'wrong') {
        activeLesson.wordOutcomes[step.wordIdx] = evalRes.isCorrect ? 'known' : 'wrong';
      }
    }

    const outcomeOpts = {
      skipDailyGoal: Boolean(step.requeued),
      skipStatusUpdate: Boolean(step.isTopicDialogue)
    };
    if (evalRes.isCorrect) {
      activeLesson.combo++;
      activeLesson.maxCombo = Math.max(activeLesson.maxCombo, activeLesson.combo);
      SoundFX.known(activeLesson.combo);
      recordLessonWordOutcome(step.wordIdx, true, outcomeOpts);
      if (!step._countedProgress) {
        step._countedProgress = true;
        activeLesson.clearedCount = Math.min(activeLesson.initialTotal || activeLesson.queue.length, (activeLesson.clearedCount || 0) + 1);
      }
      updateLessonProgressUI(true);
    } else {
      activeLesson.combo = 0;
      if (isSkip) SoundFX.skip();
      else SoundFX.review();
      recordLessonWordOutcome(step.wordIdx, false, outcomeOpts);
      if (step.requeued) {
        if (!step._countedProgress) {
          step._countedProgress = true;
          activeLesson.clearedCount = Math.min(activeLesson.initialTotal || activeLesson.queue.length, (activeLesson.clearedCount || 0) + 1);
        }
        updateLessonProgressUI(false);
      } else {
        // Zero-penalty Mistake Re-Queue (No Hearts!): push max 1 retry per step
        const retryStep = {
          ...step,
          chosenIds: [],
          selectedChoice: null,
          keyboardVal: '',
          matchedIds: step.type === 'pair_match' ? [] : undefined,
          selectedLeftId: null,
          selectedRightId: null,
          mistakesCount: 0,
          _useKeyboard: step.type === 'sentence_cloze_inline' && !Array.isArray(step.options),
          _rerenderBank: undefined,
          requeued: true
        };
        if (retryStep.type === 'choice_bubble_match' || retryStep.type === 'sentence_cloze_inline') {
          // keep valid options array; just reset selection
        } else if (retryStep.type === 'pair_match' && Array.isArray(step.pairs)) {
          retryStep.leftIds = shuffle(step.pairs.map(p => p.id));
          retryStep.rightIds = shuffle(step.pairs.map(p => p.id));
        } else if (retryStep.bankItems) {
          retryStep.bankItems = shuffle([...retryStep.bankItems]);
        }
        activeLesson.queue.push(retryStep);
      }
    }

    const actBar = $('lesson-action-bar');
    const fbBar = $('lesson-feedback-bar');
    const fbIcon = $('lesson-feedback-icon');
    const fbTitle = $('lesson-feedback-title');
    const fbDetail = $('lesson-feedback-detail');
    const fbInsight = $('lesson-feedback-insight');
    const rateChips = $('lesson-rate-chips');
    const fbSpkBtn = $('btn-lesson-feedback-speak');

    if (actBar) actBar.hidden = true;
    if (fbBar && fbIcon && fbTitle && fbDetail) {
      fbBar.classList.toggle('is-correct', evalRes.isCorrect);
      fbBar.classList.toggle('is-wrong', !evalRes.isCorrect);
      fbIcon.innerHTML = evalRes.isCorrect
        ? '<svg class="fb-svg-check" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path class="fb-check-path" d="M5 13l4 4L19 7"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>';
      const cheersHeadlines = ['เยี่ยม!', 'ดีมาก!', 'เป๊ะเลย!', 'สุดยอด!'];
      if (evalRes.isCorrect) {
        fbTitle.textContent = evalRes.nearMiss ? `ถูกต้อง! (ระวังตัวสะกด: ${evalRes.correctDisplay})` : cheersHeadlines[activeLesson.index % cheersHeadlines.length];
      } else {
        fbTitle.textContent = `${isSkip ? 'ข้ามข้อนี้ · ' : ''}คำตอบที่ถูก: ${evalRes.correctDisplay}`;
      }
      fbDetail.textContent = evalRes.isCorrect
        ? evalRes.feedbackDetail
        : `${evalRes.feedbackDetail} · จะวนกลับมาให้ทบทวนตอนท้ายด่าน`;
      if (fbInsight) {
        const wo = evalRes.wordObj;
        const insightCandidates = [];
        if (wo?.grammarPattern || wo?.usageTip) {
          const gParts = [];
          if (wo.grammarPattern) gParts.push(`[${wo.grammarPattern}]`);
          if (wo.usageTip) gParts.push(wo.usageTip);
          insightCandidates.push(gParts.join(' '));
        }
        if (Array.isArray(wo?.collocations) && wo.collocations.length > 0) {
          insightCandidates.push(`วลีที่ใช้คู่กัน: ${wo.collocations.slice(0, 3).join(' · ')}`);
        }
        const relSyns = getCleanRelatedWords(wo?.synonyms, wo?.word).slice(0, 3);
        const relAnts = getCleanRelatedWords(wo?.antonyms, wo?.word).slice(0, 2);
        if (relSyns.length > 0 || relAnts.length > 0) {
          const relBits = [];
          if (relSyns.length > 0) relBits.push(`คำใกล้เคียง: ${relSyns.join(', ')}`);
          if (relAnts.length > 0) relBits.push(`ตรงข้าม: ${relAnts.join(', ')}`);
          insightCandidates.push(relBits.join(' · '));
        }
        if (wo?.rootBreakdown) {
          insightCandidates.push(`รากศัพท์: ${wo.rootBreakdown}`);
        }
        if (wo?.extraExample) {
          insightCandidates.push(`ตัวอย่างเสริม: "${wo.extraExample}"${wo.extraExampleTranslation ? ` (${wo.extraExampleTranslation})` : ''}`);
        }
        const insightMsg = insightCandidates.length > 0
          ? insightCandidates[(activeLesson.index + (activeLesson.replaySalt || 0) + (activeLesson.roundNum || 1)) % insightCandidates.length]
          : '';
        if (insightMsg) {
          fbInsight.textContent = `💡 ${insightMsg}`;
          fbInsight.hidden = false;
        } else {
          fbInsight.textContent = '';
          fbInsight.hidden = true;
        }
      }
      if (rateChips) rateChips.hidden = false;
      fbBar.hidden = false;
    }
    if (fbSpkBtn) {
      const hasSpeak = Boolean(evalRes.speakText);
      fbSpkBtn.hidden = !hasSpeak;
      fbSpkBtn.onclick = hasSpeak ? () => speakWordOverride(evalRes.speakText, true, fbSpkBtn) : null;
      if (hasSpeak && evalRes.isCorrect && step.type !== 'choice_bubble_match' && !isSoundMuted) {
        speakWordOverride(evalRes.speakText, false, fbSpkBtn);
      }
    }
  }

  function handleLessonAnswer(isCorrect, wordObj) {
    if (!activeLesson || activeLesson.awaitingNext) return;
    activeLesson.awaitingNext = true;
    const step = activeLesson.queue[activeLesson.index];
    if (!step.requeued) {
      activeLesson.answeredUnique++;
      if (isCorrect) activeLesson.firstTryCorrect++;
    }
    if (isCorrect) {
      activeLesson.combo++;
      activeLesson.maxCombo = Math.max(activeLesson.maxCombo, activeLesson.combo);
      SoundFX.known();
      recordLessonWordOutcome(step.wordIdx, true);
    } else {
      activeLesson.combo = 0;
      SoundFX.review();
      recordLessonWordOutcome(step.wordIdx, false);
    }
  }

  function finishActiveLesson() {
    if (!activeLesson || activeLesson.completed) return;
    activeLesson.completed = true;
    const { stage, unit } = activeLesson;
    const lessonMode = activeLesson.mode || 'normal';
    const body = $('lesson-stage-body');
    const fill = $('lesson-progress-fill');
    const fbBar = $('lesson-feedback-bar');
    const actBar = $('lesson-action-bar');
    if (fbBar) fbBar.hidden = true;
    if (actBar) actBar.hidden = true;
    document.querySelector('#lesson-screen .lesson-shell')?.classList.remove('is-feedback-open');
    activeLesson.clearedCount = activeLesson.initialTotal || activeLesson.queue.length;
    updateLessonProgressUI(false);

    const isVirtual = Boolean(stage.isVirtual);
    const acc = Math.round((activeLesson.firstTryCorrect / Math.max(1, activeLesson.uniqueTotal)) * 100);
    const bossFailed = !!(!isVirtual && stage.isBoss && acc < 70);
    const legendaryFailed = !isVirtual && lessonMode === 'legendary' && acc < 85;
    const stagePassed = !bossFailed && !legendaryFailed;
    const stars = acc >= 90 ? 3 : acc >= 70 ? 2 : 1;

    let earnedXp;
    if (isVirtual) {
      earnedXp = stars >= 3 ? 12 : 8;
    } else if (lessonMode === 'legendary') {
      earnedXp = legendaryFailed ? 10 : 40 + (acc === 100 ? 5 : 0);
    } else if (lessonMode === 'practice') {
      earnedXp = stars >= 3 ? 8 : 5;
    } else {
      earnedXp = bossFailed ? 10 : (stage.isBoss ? 35 : 15) + stars * 5 + Math.min(10, activeLesson.maxCombo);
    }

    ensureTodayQuests();
    const prevStreakVal = typeof computeStreak === 'function' ? computeStreak() : 0;
    const unitStageIds = isVirtual ? [] : (unit.nodes || []).filter(n => n.kind === 'stage').map(n => n.id);
    const unitWasComplete = unitStageIds.length > 0 && unitStageIds.every(id => isStagePassedFull(id));
    const totalRounds = activeLesson.totalRounds || getStageTotalRounds(stage);
    const roundNum = activeLesson.roundNum || 1;
    const prevDone = isVirtual ? 0 : getStageDoneRounds(stage.id);
    let newDone = prevDone;
    learnState.xp += earnedXp;
    learnState.dailyQuests.xpToday += earnedXp;

    if (stagePassed && !isVirtual) {
      newDone = lessonMode === 'normal' ? Math.min(totalRounds, prevDone + 1) : Math.max(prevDone, totalRounds);
      if (newDone >= totalRounds) learnState.dailyQuests.stagesToday += 1;
      if (acc >= 80) learnState.dailyQuests.perfectToday += 1;
      const prev = learnState.completedStages[stage.id];
      learnState.completedStages[stage.id] = {
        lessonsDone: newDone,
        stars: Math.max(prev ? prev.stars : 0, stars),
        bestAcc: Math.max(prev ? prev.bestAcc : 0, acc),
        completedAt: Date.now(),
        legendary: Boolean((prev && prev.legendary) || lessonMode === 'legendary')
      };
      if (activeLesson.isJumpTestForUnitId && !learnState.unlockedUnits.includes(activeLesson.isJumpTestForUnitId)) {
        learnState.unlockedUnits.push(activeLesson.isJumpTestForUnitId);
      }
      const unitNowComplete = unitStageIds.length > 0 && unitStageIds.every(id => isStagePassedFull(id));
      const nextStreakVal = typeof computeStreak === 'function' ? computeStreak() : prevStreakVal;
      if (lessonMode === 'legendary') SoundFX.legendary();
      else if (!unitWasComplete && unitNowComplete) SoundFX.levelUp();
      else if (nextStreakVal > prevStreakVal) SoundFX.streak();
      else SoundFX.victory();
      OxConfetti.launch((acc >= 90 || lessonMode === 'legendary') ? 'perfect' : 'good');
    } else if (stagePassed && isVirtual) {
      if (acc >= 80) learnState.dailyQuests.perfectToday += 1;
      SoundFX.victory();
      OxConfetti.launch(acc >= 90 ? 'perfect' : 'good');
    } else {
      SoundFX.review();
    }

    saveLearnState(true);
    trackGAEvent('learn_lesson_complete', {
      unit_id: stage.unitId || '',
      stage_id: stage.id || '',
      mode: isVirtual ? 'virtual_drill' : lessonMode,
      passed: stagePassed,
      accuracy: acc,
      xp_earned: earnedXp
    });
    refreshShellTelemetry();
    if (stagePassed && !isVirtual) {
      pendingScrollToCurrentLearn = true;
    }
    renderLearnPath(true);

    if (body) {
      const hasNextRound = !isVirtual && stagePassed && lessonMode === 'normal' && newDone < totalRounds;
      let summaryTitle = hasNextRound ? `ผ่านบทที่ ${newDone}/${totalRounds} แล้ว!` : 'ผ่านด่านครบ 100%!';
      if (isVirtual) summaryTitle = 'ฝึกเฉพาะจุดสำเร็จ! ความจำแม่นขึ้นแล้ว';
      else if (bossFailed) summaryTitle = 'เกือบผ่านแล้ว! ลองอีกครั้งนะ';
      else if (legendaryFailed) summaryTitle = 'เกือบถึงระดับตำนาน! (ต้องแม่น ≥ 85%)';
      else if (lessonMode === 'legendary') summaryTitle = '👑 พิชิตระดับตำนานสำเร็จ!';
      else if (lessonMode === 'practice') summaryTitle = 'ทบทวนสำเร็จ! ความจำแม่นขึ้นแล้ว';
      else if (!hasNextRound && stage.isBoss) summaryTitle = 'ปลดล็อกหน่วยถัดไปสำเร็จ!';

      const starsRowHtml = stagePassed
        ? Array.from({ length: 3 }, (_, idx) => `<span class="lesson-star-pop">${idx < stars ? '⭐' : '☆'}</span>`).join('')
        : '<span class="lesson-star-pop">💪</span>';
      const mascotHtml = `<div class="lesson-complete-mascot lesson-cast-avatar ${stagePassed ? 'mood-happy' : 'mood-retry'}">${renderCastAvatar(0, stagePassed ? 'happy' : 'retry', stagePassed ? (lessonMode === 'legendary' ? 'ระดับตำนาน! 👑' : 'สุดยอดเลย! 🎉') : 'ลองใหม่ได้เสมอ!')}</div>`;
      const subText = isVirtual
        ? `${escapeHtml(unit.title)} · ${escapeHtml(stage.label)}`
        : (hasNextRound
          ? `${escapeHtml(unit.title)} · ${escapeHtml(stage.label)} (บทถัดไปท้าทายขึ้น)`
          : `${escapeHtml(unit.title)} · ${escapeHtml(stage.label)} · บทที่ ${roundNum}/${totalRounds}`);

      const outcomeEntries = Object.entries(activeLesson.wordOutcomes || {}).map(([wIdxStr, res]) => ({
        wordIdx: Number(wIdxStr),
        word: wordsData[Number(wIdxStr)],
        isCorrect: res === 'known'
      })).filter(o => o.word);
      const mistakeIndices = outcomeEntries.filter(o => !o.isCorrect).map(o => o.wordIdx);
      const wordsSummaryHtml = outcomeEntries.length > 0 ? `
                    <div class="lesson-complete-words">
                        <div class="lesson-complete-words-head">คำศัพท์ที่ฝึกในรอบนี้ (${outcomeEntries.length} คำ)</div>
                        <div class="lesson-complete-words-list">
                            ${outcomeEntries.slice(0, 8).map(o => `
                                <div class="lesson-complete-word-row ${o.isCorrect ? 'is-ok' : 'is-miss'}">
                                    <span class="lesson-cw-badge">${o.isCorrect ? '✓' : '↻'}</span>
                                    <div class="lesson-cw-main">
                                        <strong>${escapeHtml(o.word.word)}</strong>
                                        <span>${escapeHtml(String(o.word.translation || '').split(/[,;\/]/)[0].trim())}</span>
                                        ${!o.isCorrect && (o.word.usageTip || o.word.grammarPattern) ? `<small>💡 ${escapeHtml(o.word.usageTip || o.word.grammarPattern)}</small>` : ''}
                                    </div>
                                    <button type="button" class="glass-btn-icon small lesson-cw-speak" data-cw-speak="${escapeHtml(o.word.word)}" aria-label="ฟังเสียง ${escapeHtml(o.word.word)}">🔊</button>
                                </div>`).join('')}
                        </div>
                    </div>` : '';

      const nextRoundBtnHtml = hasNextRound
        ? `<button type="button" class="btn btn-primary glass-btn btn-full lesson-next-round-btn">เล่นบทที่ ${newDone + 1}/${totalRounds} ต่อ →</button>`
        : '';
      const retryMistakesBtnHtml = mistakeIndices.length > 0
        ? `<button type="button" class="btn glass-btn btn-full lesson-retry-mistakes-btn">🎯 ทบทวนเฉพาะคำที่พลาด (${mistakeIndices.length} คำ)</button>`
        : '';
      const doneBtnClass = hasNextRound ? 'btn glass-btn btn-full lesson-done-btn' : 'btn btn-primary glass-btn btn-full lesson-done-btn';

      body.innerHTML = `
                <div class="lesson-complete-card">
                    ${mascotHtml}
                    <div class="lesson-stars-row">${starsRowHtml}</div>
                    <h2>${summaryTitle}</h2>
                    <p class="lesson-question-sub">${subText}</p>
                    <div class="lesson-stats-strip">
                        <div class="lesson-stat-tile">
                            <strong>+${earnedXp}</strong>
                            <small>XP ที่ได้</small>
                        </div>
                        <div class="lesson-stat-tile">
                            <strong>${acc}%</strong>
                            <small>ความแม่นยำ</small>
                        </div>
                        <div class="lesson-stat-tile">
                            <strong>x${activeLesson.maxCombo}</strong>
                            <small>คอมโบสูงสุด</small>
                        </div>
                    </div>
                    ${wordsSummaryHtml}
                    <div class="lesson-complete-actions">
                        ${nextRoundBtnHtml}
                        ${retryMistakesBtnHtml}
                        <button type="button" class="${doneBtnClass}">กลับสู่เส้นทางเรียนรู้</button>
                    </div>
                </div>`;
      OxMotion.pulseClass(body, 'is-step-entering');
      body.querySelectorAll('[data-cw-speak]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const wTxt = btn instanceof HTMLElement ? btn.dataset.cwSpeak : '';
          if (wTxt) speakWordOverride(wTxt, true, e.currentTarget);
        });
      });
      body.querySelector('.lesson-retry-mistakes-btn')?.addEventListener('click', () => {
        startVirtualLearnPractice({
          id: `__retry_mistakes_${Date.now()}`,
          title: unit.title,
          label: `ทบทวนคำที่พลาด (${mistakeIndices.length} คำ)`,
          wordIndices: mistakeIndices,
          unit
        });
      });
      body.querySelector('.lesson-next-round-btn')?.addEventListener('click', () => {
        startLessonByStageId(stage.id, { mode: 'normal', roundNum: newDone + 1 });
      });
      body.querySelector('.lesson-done-btn')?.addEventListener('click', () => {
        activeLesson = null;
        showScreen('learn');
      });
    }
  }

  $('btn-lesson-check')?.addEventListener('click', () => handleLessonCheck(false));
  $('btn-lesson-skip')?.addEventListener('click', () => handleLessonCheck(true));
  $('btn-lesson-mode-toggle')?.addEventListener('click', () => {
    if (!activeLesson || activeLesson.awaitingNext) return;
    const step = activeLesson.queue[activeLesson.index];
    if (!step) return;
    step._useKeyboard = !step._useKeyboard;
    SoundFX.tick();
    renderCurrentLessonStep();
  });

  $('btn-lesson-continue')?.addEventListener('click', () => {
    if (!activeLesson || !activeLesson.awaitingNext) return;
    activeLesson.index++;
    if (activeLesson.index < activeLesson.queue.length) {
      SoundFX.next();
    }
    renderCurrentLessonStep();
  });

  // Tap-to-React Character mascot & cast encouragement quips inside stage
  const LESSON_CAST_QUIPS = ['สู้ๆ นะ! ✨', 'คุณทำได้! 💪', 'ลองออกเสียงดูสิ 🗣️', 'เก่งขึ้นทุกวัน! 🌟', 'ลุยต่อเลย! 🚀'];
  let lessonCastQuipPtr = 0;
  $('lesson-stage-body')?.addEventListener('click', (e) => {
    if (!activeLesson) return;
    const av = e.target instanceof Element ? e.target.closest('.lesson-cast-avatar') : null;
    if (!(av instanceof HTMLElement)) return;
    const cIdx = Number(av.dataset.castIdx || 0);
    const mood = av.classList.contains('mood-happy') ? 'happy' : (av.classList.contains('mood-retry') ? 'retry' : 'calm');
    const quip = LESSON_CAST_QUIPS[lessonCastQuipPtr++ % LESSON_CAST_QUIPS.length];
    av.innerHTML = renderCastAvatar(cIdx, mood, quip);
    SoundFX.mascot();
    OxMotion.springPop(av);
  });

  // Interactive self-rating chips in feedback dock (Easy / Hard / Review)
  $('lesson-rate-chips')?.addEventListener('click', (e) => {
    const chipsWrap = $('lesson-rate-chips');
    const chip = e.target instanceof Element ? e.target.closest('.lesson-rate-chip') : null;
    if (!(chip instanceof HTMLElement) || !chipsWrap || !activeLesson) return;
    const rate = chip.dataset.rate;
    if (!rate) return;

    chipsWrap.querySelectorAll('.lesson-rate-chip').forEach(btn => btn.classList.toggle('is-chosen', btn === chip));
    SoundFX.tick();
    OxMotion.springPop(chip);

    const step = activeLesson.queue[activeLesson.index];
    const w = step ? wordsData[step.wordIdx] : null;
    const key = w ? keyOf(w) : null;
    if (key) {
      const nextStatus = rate === 'easy' ? 'known' : 'review';
      wordStatus[key] = nextStatus;
      storage.set(STORAGE.status, wordStatus);
      recordWordMastery(key, nextStatus);
    }
    if (rate === 'hard') showToast('📌 ปักหมุดคำนี้เป็น "ยาก" เพื่อทบทวนบ่อยขึ้น');
    else if (rate === 'review') showToast('🔁 เพิ่มคำนี้ลงคลังเน้นทบทวนแล้ว');
    else if (rate === 'easy') showToast('⚡ บันทึกแล้วว่าคำนี้ง่ายสำหรับคุณ');
  });

  const lessonExitModal = $('lesson-exit-modal');
  function openLessonExitConfirm() {
    if (!lessonExitModal) {
      SoundFX.popClose();
      activeLesson = null;
      showScreen('learn');
      return;
    }
    lessonExitModal.classList.add('open');
    lessonExitModal.setAttribute('aria-hidden', 'false');
    SoundFX.popOpen();
  }
  function closeLessonExitConfirm() {
    if (!lessonExitModal) return;
    lessonExitModal.classList.remove('open');
    lessonExitModal.setAttribute('aria-hidden', 'true');
  }

  $('btn-lesson-exit-stay')?.addEventListener('click', () => {
    closeLessonExitConfirm();
    SoundFX.tick();
  });
  $('btn-lesson-exit-confirm')?.addEventListener('click', () => {
    closeLessonExitConfirm();
    SoundFX.popClose();
    activeLesson = null;
    showScreen('learn');
  });
  lessonExitModal?.addEventListener('click', (e) => {
    if (e.target === lessonExitModal) closeLessonExitConfirm();
  });

  $('btn-lesson-exit')?.addEventListener('click', () => {
    if (activeLesson && !activeLesson.completed && activeLesson.answeredUnique > 0) {
      openLessonExitConfirm();
      return;
    }
    SoundFX.popClose();
    activeLesson = null;
    showScreen('learn');
  });

  document.addEventListener('keydown', (e) => {
    if (currentScreen !== 'lesson' || !activeLesson) return;
    if (lessonExitModal && lessonExitModal.classList.contains('open')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLessonExitConfirm();
      }
      return;
    }
    const tag = document.activeElement?.tagName;
    const inTextField = tag === 'INPUT' || tag === 'TEXTAREA';

    if (activeLesson.awaitingNext) {
      if (e.key === 'Enter' && !e.repeat && !e.isComposing && (performance.now() - (activeLesson._feedbackShownAt || 0) >= 260)) {
        e.preventDefault();
        $('btn-lesson-continue')?.click();
      }
      return;
    }

    const step = activeLesson.queue[activeLesson.index];
    if (!step) return;

    if (!inTextField && (e.key === 'r' || e.key === 'R')) {
      const spk = document.querySelector('#lesson-stage-body .lesson-spk-normal')
        || document.querySelector('#lesson-stage-body .lesson-speak-btn');
      if (spk) {
        e.preventDefault();
        /** @type {HTMLElement} */ (spk).click();
        return;
      }
    }

    if (step.isIntro && (e.key === 'Enter' || e.key === ' ')) {
      const introNext = document.querySelector('#lesson-stage-body .lesson-intro-next-btn');
      if (introNext) {
        e.preventDefault();
        /** @type {HTMLElement} */ (introNext).click();
        return;
      }
    }

    if (!inTextField && ['1', '2', '3', '4'].includes(e.key)) {
      const btn = document.querySelector(`#lesson-options-grid [data-opt-pos="${e.key}"]`);
      if (btn) {
        e.preventDefault();
        /** @type {HTMLElement} */ (btn).click();
        return;
      }
    }

    if (!inTextField && !step._useKeyboard && Array.isArray(step.chosenIds)) {
      if (e.key === 'Backspace' && step.chosenIds.length > 0) {
        e.preventDefault();
        step.chosenIds.pop();
        SoundFX.tileDrop();
        if (typeof step._rerenderBank === 'function') step._rerenderBank();
        syncLessonCheckButton();
        return;
      }
      if (/^[a-zA-Z']$/.test(e.key) && step.type !== 'order_en_to_th') {
        const chosenSet = new Set(step.chosenIds);
        const avail = step.bankItems.filter(b => !chosenSet.has(b.id));
        const match = avail.find(b => b.text.toLowerCase().startsWith(e.key.toLowerCase()));
        if (match && avail.filter(b => b.text.toLowerCase().startsWith(e.key.toLowerCase())).length === 1) {
          e.preventDefault();
          step.chosenIds.push(match.id);
          SoundFX.tilePick();
          if (typeof step._rerenderBank === 'function') step._rerenderBank();
          syncLessonCheckButton();
          return;
        }
      }
    }

    if (e.key === 'Enter' && !inTextField) {
      const chk = /** @type {HTMLButtonElement|null} */ ($('btn-lesson-check'));
      if (chk && !chk.disabled) {
        e.preventDefault();
        chk.click();
      }
    }
  });

  /* =========================================================
     * Dictionary Screen (คลังคำศัพท์ 3,191 คำ) + Word Inspector
     * ========================================================= */
  const dictSearchInput = /** @type {HTMLInputElement|null} */ ($('dict-search-input'));
  const dictClearBtn = $('dict-clear-btn');
  const dictTopicSelect = /** @type {HTMLSelectElement|null} */ ($('dict-topic-select'));
  const dictPosSelect = /** @type {HTMLSelectElement|null} */ ($('dict-pos-select'));
  const dictSortSelect = /** @type {HTMLSelectElement|null} */ ($('dict-sort-select'));
  const dictAzBar = $('dict-az-bar');
  const dictWordList = $('dict-word-list');
  const dictCountLabel = $('dict-count-label');
  const btnDictLoadMore = $('btn-dict-load-more');
  const btnDictPracticeFiltered = /** @type {HTMLButtonElement|null} */ ($('btn-dict-practice-filtered'));
  let dictFilterState = { q: '', cefr: 'all', topic: 'all', pos: 'all', status: 'all', sort: 'smart', letter: 'all', limit: 50 };

  function populateTopicSelect(selectEl) {
    if (!selectEl) return;
    selectEl.innerHTML = `<option value="all">ทุกหัวข้อ (12 หมวดชีวิตจริง)</option>` +
      TOPIC_ORDER.map(tid => `<option value="${tid}">${escapeHtml(TOPIC_META[tid].th)}</option>`).join('');
  }
  populateTopicSelect(dictTopicSelect);
  populateTopicSelect($('qh-topic-select'));

  function populateAZBar() {
    if (!dictAzBar) return;
    const letters = ['all', ...'abcdefghijklmnopqrstuvwxyz'.split('')];
    dictAzBar.innerHTML = letters.map(ch => {
      const label = ch === 'all' ? 'ทั้งหมด' : ch.toUpperCase();
      return `<button type="button" class="dict-az-pill ${dictFilterState.letter === ch ? 'active' : ''}" data-dict-az="${ch}">${label}</button>`;
    }).join('');
  }
  populateAZBar();

  function updateDictionaryMasteryUI() {
    const cntMastered = $('dm-cnt-mastered');
    const cntLearning = $('dm-cnt-learning');
    const cntReview = $('dm-cnt-review');
    const cntUnseen = $('dm-cnt-unseen');
    const barM = $('dm-bar-mastered');
    const barL = $('dm-bar-learning');
    const barR = $('dm-bar-review');
    const pctEl = $('dict-mastery-pct');
    const sumEl = $('dict-mastery-summary');
    if (!cntMastered && !pctEl) return;

    let mastered = 0;
    let learning = 0;
    let review = 0;
    let unseen = 0;
    keyToIndex.forEach((_, k) => {
      const lvl = getWordMasteryLevel(k);
      if (lvl === 'mastered') mastered++;
      else if (lvl === 'learning') learning++;
      else if (lvl === 'review') review++;
      else unseen++;
    });
    const total = Math.max(1, mastered + learning + review + unseen);
    const knownCount = mastered + learning;
    const pct = Math.round((knownCount / total) * 100);
    if (cntMastered) cntMastered.textContent = mastered.toLocaleString();
    if (cntLearning) cntLearning.textContent = learning.toLocaleString();
    if (cntReview) cntReview.textContent = review.toLocaleString();
    if (cntUnseen) cntUnseen.textContent = unseen.toLocaleString();
    if (barM) barM.style.width = `${((mastered / total) * 100).toFixed(2)}%`;
    if (barL) barL.style.width = `${((learning / total) * 100).toFixed(2)}%`;
    if (barR) barR.style.width = `${((review / total) * 100).toFixed(2)}%`;
    if (pctEl) pctEl.textContent = `${pct}% (${knownCount.toLocaleString()}/${total.toLocaleString()})`;
    if (sumEl) sumEl.textContent = review > 0 ? `ความคืบหน้าคลังศัพท์ · มี ${review} คำรอทบทวน` : 'ความคืบหน้าคลังคำศัพท์ Oxford 3000';
  }

  let wotdKeyCache = null;
  function getDailySpotlightKey() {
    if (wotdKeyCache && keyToIndex.has(wotdKeyCache)) return wotdKeyCache;
    const richPool = [];
    const fallbackPool = [];
    keyToIndex.forEach((idx, k) => {
      const w = wordsData[idx];
      if (!w) return;
      if (w.usageTip && Array.isArray(w.collocations) && w.collocations.length) richPool.push(k);
      else if (Array.isArray(w.collocations) && w.collocations.length && w.definition && w.example) fallbackPool.push(k);
    });
    const pool = richPool.length ? richPool : fallbackPool;
    if (!pool.length) return null;
    const today = getTodayDateString();
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = ((hash * 31) + today.charCodeAt(i)) >>> 0;
    }
    wotdKeyCache = pool[hash % pool.length];
    return wotdKeyCache;
  }

  function renderWordOfTheDay() {
    const card = $('dict-wotd-card');
    if (!card) return;
    const k = getDailySpotlightKey();
    const idx = k ? keyToIndex.get(k) : undefined;
    if (idx === undefined) {
      card.hidden = true;
      return;
    }
    const w = wordsData[idx];
    const wEl = $('wotd-word');
    const phEl = $('wotd-phonetic');
    const trEl = $('wotd-trans');
    const posEl = $('wotd-pos');
    const cefrEl = $('wotd-cefr');
    const tipEl = $('wotd-tip');
    if (wEl) wEl.textContent = w.word;
    if (phEl) phEl.textContent = w.phonetic || '';
    if (trEl) trEl.textContent = w.translation || '';
    if (posEl) {
      posEl.textContent = w.partOfSpeech || 'word';
      posEl.className = `pos-badge ${catOf(w)}`;
    }
    if (cefrEl) OxCefr.applyBadge(cefrEl, w.cefr);
    if (tipEl) {
      tipEl.textContent = w.usageTip
        ? `💡 ${w.usageTip}`
        : w.example
          ? `ตัวอย่าง: "${w.example}"${w.exampleTranslation ? ` (${w.exampleTranslation})` : ''}`
          : (w.definition || '');
    }
    const spk = $('wotd-speak-btn');
    const slow = $('wotd-slow-btn');
    const insp = $('wotd-inspect-btn');
    if (spk) spk.onclick = () => speakWordOverride(w.word, true, spk);
    if (slow) slow.onclick = () => speakWordOverride(w.word, true, slow, { rate: 0.7 });
    if (insp && k) insp.onclick = () => openWordInspector(k);
    card.hidden = false;
  }

  function getFilteredDictMatches() {
    const q = dictFilterState.q.trim().toLowerCase();
    const matches = [];
    const cefrRank = { A1: 1, A2: 2, B1: 3, B2: 4 };
    const statusWeight = { review: 0, unseen: 1, known: 2 };

    for (let i = 0; i < totalWords; i++) {
      const w = wordsData[i];
      const k = keyOf(w);
      if (keyToIndex.get(k) !== i) continue;
      if (dictFilterState.cefr !== 'all' && w.cefr !== dictFilterState.cefr) continue;
      if (dictFilterState.topic !== 'all' && (w.topic || 'actions') !== dictFilterState.topic) continue;
      if (dictFilterState.pos !== 'all' && (w.partOfSpeech || '').toLowerCase() !== dictFilterState.pos) continue;
      if (dictFilterState.letter !== 'all' && !(w.word || '').toLowerCase().startsWith(dictFilterState.letter)) continue;

      const st = wordStatus[k] || 'unseen';
      if (dictFilterState.status === 'starred') {
        if (!bookmarkedWords.has(k)) continue;
      } else if (dictFilterState.status !== 'all' && st !== dictFilterState.status) {
        continue;
      }

      if (q) {
        const score = OxFuzzy.scoreWord(w, q);
        if (score <= 0) continue;
        matches.push({ idx: i, score });
      } else {
        matches.push({ idx: i, score: 1 });
      }
    }

    const sortMode = dictFilterState.sort;
    if (sortMode === 'az') {
      matches.sort((a, b) => wordsData[a.idx].word.localeCompare(wordsData[b.idx].word));
    } else if (sortMode === 'za') {
      matches.sort((a, b) => wordsData[b.idx].word.localeCompare(wordsData[a.idx].word));
    } else if (sortMode === 'cefr-asc') {
      matches.sort((a, b) => {
        const d = (cefrRank[wordsData[a.idx].cefr] || 9) - (cefrRank[wordsData[b.idx].cefr] || 9);
        return d !== 0 ? d : wordsData[a.idx].word.localeCompare(wordsData[b.idx].word);
      });
    } else if (sortMode === 'review-first') {
      matches.sort((a, b) => {
        const sa = wordStatus[keyOf(wordsData[a.idx])] || 'unseen';
        const sb = wordStatus[keyOf(wordsData[b.idx])] || 'unseen';
        const d = (statusWeight[sa] ?? 1) - (statusWeight[sb] ?? 1);
        return d !== 0 ? d : wordsData[a.idx].word.localeCompare(wordsData[b.idx].word);
      });
    } else if (sortMode === 'rich-first') {
      const richness = (w) => (w.usageTip ? 8 : 0) + (w.forms?.length ? 4 : 0) + (w.antonyms?.length ? 2 : 0) + (w.wordFamily?.length ? 1 : 0);
      matches.sort((a, b) => {
        const d = richness(wordsData[b.idx]) - richness(wordsData[a.idx]);
        return d !== 0 ? d : b.score - a.score;
      });
    } else if (q) {
      matches.sort((a, b) => b.score - a.score);
    }
    return matches;
  }

  function renderDictionary(resetLimit = true) {
    if (!dictWordList) return;
    if (resetLimit) dictFilterState.limit = 50;
    updateDictionaryMasteryUI();
    renderWordOfTheDay();

    const matches = getFilteredDictMatches();
    if (dictCountLabel) dictCountLabel.textContent = `${matches.length.toLocaleString()} คำ`;
    if (btnDictPracticeFiltered) {
      btnDictPracticeFiltered.disabled = matches.length === 0;
      const cap = Math.min(matches.length, Math.max(selectedSize || 20, 20));
      btnDictPracticeFiltered.textContent = matches.length ? `▶ ฝึกชุดนี้ (${cap})` : '▶ ไม่มีคำให้ฝึก';
    }

    const visible = matches.slice(0, dictFilterState.limit);
    dictWordList.innerHTML = visible.length
      ? visible.map(m => {
        const k = keyOf(wordsData[m.idx]);
        return wordListItem(k, wordStatus[k] || 'unseen', dictFilterState.q.trim());
      }).join('')
      : `<li class="empty-state">ไม่พบคำศัพท์ที่ตรงกับเงื่อนไข</li>`;

    if (btnDictLoadMore) {
      btnDictLoadMore.hidden = matches.length <= dictFilterState.limit;
    }
  }

  dictSearchInput?.addEventListener('input', () => {
    dictFilterState.q = dictSearchInput.value;
    if (dictClearBtn) dictClearBtn.hidden = !dictFilterState.q;
    renderDictionary(true);
  });
  dictClearBtn?.addEventListener('click', () => {
    if (dictSearchInput) dictSearchInput.value = '';
    dictFilterState.q = '';
    dictClearBtn.hidden = true;
    renderDictionary(true);
  });
  dictTopicSelect?.addEventListener('change', () => {
    dictFilterState.topic = dictTopicSelect.value || 'all';
    renderDictionary(true);
  });
  dictPosSelect?.addEventListener('change', () => {
    dictFilterState.pos = dictPosSelect.value || 'all';
    renderDictionary(true);
  });
  dictSortSelect?.addEventListener('change', () => {
    dictFilterState.sort = dictSortSelect.value || 'smart';
    renderDictionary(true);
  });
  dictAzBar?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const btn = e.target.closest('[data-dict-az]');
    if (!(btn instanceof HTMLElement)) return;
    dictFilterState.letter = btn.dataset.dictAz || 'all';
    dictAzBar.querySelectorAll('.dict-az-pill').forEach(p => p.classList.toggle('active', p === btn));
    renderDictionary(true);
  });
  $('dict-cefr-filters')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const pill = e.target.closest('[data-dict-cefr]');
    if (!(pill instanceof HTMLElement)) return;
    dictFilterState.cefr = pill.dataset.dictCefr;
    $('dict-cefr-filters').querySelectorAll('.cefr-pill').forEach(p => p.classList.toggle('active', p === pill));
    renderDictionary(true);
  });
  $('dict-status-filters')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const chip = e.target.closest('[data-dict-status]');
    if (!(chip instanceof HTMLElement)) return;
    dictFilterState.status = chip.dataset.dictStatus;
    $('dict-status-filters').querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
    renderDictionary(true);
  });
  btnDictLoadMore?.addEventListener('click', () => {
    dictFilterState.limit += 50;
    renderDictionary(false);
  });
  btnDictPracticeFiltered?.addEventListener('click', async () => {
    const matches = getFilteredDictMatches();
    if (!matches.length) {
      showToast('ไม่มีคำศัพท์ในตัวกรองปัจจุบัน');
      return;
    }
    if (session && !(await confirmReplaceActive('เริ่มฝึก Flashcard จากคำศัพท์ชุดที่กรองไว้?', 'เริ่มฝึก'))) {
      return;
    }
    const targetCount = Math.min(matches.length, Math.max(selectedSize || 20, 20));
    const pool = matches.map(m => m.idx);
    const chosen = matches.length <= targetCount ? pool : pickRandom(pool, targetCount);
    const labelParts = [];
    if (dictFilterState.cefr !== 'all') labelParts.push(dictFilterState.cefr);
    if (dictFilterState.topic !== 'all' && TOPIC_META[dictFilterState.topic]) labelParts.push(TOPIC_META[dictFilterState.topic].th);
    if (dictFilterState.letter !== 'all') labelParts.push(`หมวด ${dictFilterState.letter.toUpperCase()}`);
    if (dictFilterState.q.trim()) labelParts.push(`"${dictFilterState.q.trim()}"`);
    startSession(chosen, 'random', labelParts.length ? labelParts.join(' · ') : 'คลังคำศัพท์');
  });

  /* Word Inspector Modal */
  const wiModal = $('word-inspector-modal');
  let activeInspectorKey = null;

  function closeWordInspector() {
    if (!wiModal) return;
    wiModal.classList.remove('open');
    wiModal.setAttribute('aria-hidden', 'true');
    activeInspectorKey = null;
  }

  function refreshInspectorStatusUI(key) {
    const srsEl = $('wi-srs-badge');
    const curStatus = wordStatus[key] || 'unseen';
    if (srsEl) {
      const srs = getSRSStatusText(key);
      srsEl.textContent = srs.text;
      srsEl.className = `card-srs-badge ${srs.cls}`.trim();
    }
    const knownBtn = $('wi-btn-known');
    const reviewBtn = $('wi-btn-review');
    if (knownBtn) knownBtn.classList.toggle('is-active-known', curStatus === 'known');
    if (reviewBtn) reviewBtn.classList.toggle('is-active-review', curStatus === 'review');
  }

  function openWordInspector(key) {
    if (!wiModal) return;
    const idx = keyToIndex.get(key);
    if (idx === undefined) return;
    const w = wordsData[idx];
    activeInspectorKey = key;

    const wordEl = $('wi-word');
    const sylEl = $('wi-syllables');
    const phEl = $('wi-phonetic');
    const phUkEl = $('wi-phonetic-uk');
    const cefrEl = $('wi-cefr');
    const posEl = $('wi-pos');
    const topicEl = $('wi-topic');
    const regEl = $('wi-register');
    const transEl = $('wi-translation');
    const defEl = $('wi-definition');
    const exBox = $('wi-example-box');
    const exEl = $('wi-example');
    const exThEl = $('wi-example-th');
    const extraExBox = $('wi-extra-example-box');
    const extraExEl = $('wi-extra-example');
    const extraExThEl = $('wi-extra-example-th');
    const secEl = $('wi-sections');
    const starBtn = $('wi-star-btn');

    if (wordEl) wordEl.textContent = w.word;
    if (sylEl) {
      sylEl.textContent = w.syllables ? `· ${w.syllables}` : '';
      sylEl.hidden = !w.syllables;
    }
    if (phEl) {
      phEl.textContent = w.phonetic ? `US ${w.phonetic}` : '';
      phEl.hidden = !w.phonetic;
    }
    if (phUkEl) {
      phUkEl.textContent = w.phoneticUK ? `UK ${w.phoneticUK}` : '';
      phUkEl.hidden = !w.phoneticUK;
    }
    if (cefrEl) OxCefr.applyBadge(cefrEl, w.cefr);
    if (posEl) {
      posEl.textContent = w.partOfSpeech || 'word';
      posEl.className = `pos-badge ${catOf(w)}`;
    }
    if (topicEl) {
      const tMeta = TOPIC_META[w.topic || 'actions'];
      topicEl.textContent = tMeta ? tMeta.th : (w.topic || 'ทั่วไป');
    }
    if (regEl) {
      regEl.textContent = w.register || '';
      regEl.hidden = !w.register;
    }
    if (transEl) transEl.textContent = w.translation || '';
    if (defEl) {
      defEl.textContent = w.definition || '';
      defEl.hidden = !w.definition;
    }
    if (exBox && exEl && exThEl) {
      exEl.textContent = w.example ? `"${w.example}"` : '';
      exThEl.textContent = w.exampleTranslation || '';
      exThEl.hidden = !w.exampleTranslation;
      exBox.hidden = !w.example;
    }
    if (extraExBox && extraExEl && extraExThEl) {
      if (w.extraExample) {
        extraExEl.textContent = `"${w.extraExample}"`;
        extraExThEl.textContent = w.extraExampleTranslation || '';
        extraExThEl.hidden = !w.extraExampleTranslation;
        extraExBox.hidden = false;
      } else {
        extraExBox.hidden = true;
      }
    }

    if (starBtn) {
      starBtn.innerHTML = ICON_SVG.star;
      starBtn.dataset.starKey = key;
      starBtn.classList.toggle('is-starred', isBookmarked(key));
    }

    if (secEl) {
      const blocks = [];
      if (w.grammarPattern) {
        blocks.push(`<div class="wi-sec-block"><span class="wi-sec-title">โครงสร้างไวยากรณ์ (Grammar Pattern)</span><div class="lex-pills"><span class="lex-chip is-pattern">${escapeHtml(w.grammarPattern)}</span></div></div>`);
      }
      if (Array.isArray(w.forms) && w.forms.length) {
        blocks.push(`<div class="wi-sec-block"><span class="wi-sec-title">รูปผันคำ (Word Forms)</span><div class="lex-pills">${renderLexChipsHtml(w.forms, '', 'is-form', false)}</div></div>`);
      }
      if (Array.isArray(w.collocations) && w.collocations.length) {
        blocks.push(`<div class="wi-sec-block"><span class="wi-sec-title">คำที่ใช้คู่กัน (Collocations)</span><div class="lex-pills">${renderLexChipsHtml(w.collocations, '', '', false)}</div></div>`);
      }
      if (Array.isArray(w.synonyms) && w.synonyms.length) {
        blocks.push(`<div class="wi-sec-block"><span class="wi-sec-title">คำคล้ายความหมาย (Synonyms)</span><div class="lex-pills">${renderLexChipsHtml(w.synonyms, '≈ ', '', true)}</div></div>`);
      }
      if (Array.isArray(w.antonyms) && w.antonyms.length) {
        blocks.push(`<div class="wi-sec-block"><span class="wi-sec-title">คำตรงข้าม (Antonyms)</span><div class="lex-pills">${renderLexChipsHtml(w.antonyms, '≠ ', 'is-antonym', true)}</div></div>`);
      }
      if (Array.isArray(w.wordFamily) && w.wordFamily.length) {
        blocks.push(`<div class="wi-sec-block"><span class="wi-sec-title">คำตระกูลเดียวกัน (Word Family)</span><div class="lex-pills">${renderLexChipsHtml(w.wordFamily, '', '', true)}</div></div>`);
      }
      if (Array.isArray(w.phrases) && w.phrases.length) {
        blocks.push(`<div class="wi-sec-block"><span class="wi-sec-title">สำนวนและวลีที่พบบ่อย (Idioms & Phrases)</span><div class="lex-pills">${renderLexChipsHtml(w.phrases, '', 'is-phrase', false)}</div></div>`);
      }
      if (w.rootBreakdown) {
        blocks.push(`<div class="wi-sec-block"><span class="wi-sec-title">โครงสร้างและรากศัพท์ (Etymology)</span><div class="lex-pills"><span class="lex-root-badge">${escapeHtml(w.rootBreakdown)}</span></div></div>`);
      }
      if (w.usageTip) {
        blocks.push(`<div class="wid-tip-box"><b>💡 เคล็ดลับการใช้ที่คนไทยมักใช้ผิด:</b><br>${escapeHtml(w.usageTip)}</div>`);
      }
      secEl.innerHTML = blocks.join('');
    }

    refreshInspectorStatusUI(key);
    wiModal.classList.add('open');
    wiModal.setAttribute('aria-hidden', 'false');
  }

  $('wi-close-btn')?.addEventListener('click', closeWordInspector);
  wiModal?.addEventListener('click', (e) => {
    if (e.target === wiModal) closeWordInspector();
    if (!(e.target instanceof Element)) return;
    const jumpBtn = e.target.closest('[data-jump-word]');
    if (jumpBtn instanceof HTMLElement) {
      const targetWord = jumpBtn.dataset.jumpWord || '';
      const foundKey = findWordKeyByText(targetWord);
      if (foundKey) {
        openWordInspector(foundKey);
        speakWordOverride(targetWord, true);
      } else if (targetWord) {
        speakWordOverride(targetWord, true, jumpBtn);
        showToast(`คำว่า "${targetWord}" อยู่นอกคลัง ${wordsData.length.toLocaleString()} คำ — ออกเสียงให้ฟังแล้ว`);
      }
    }
  });
  $('wi-speak-btn')?.addEventListener('click', () => {
    const idx = activeInspectorKey ? keyToIndex.get(activeInspectorKey) : undefined;
    if (idx !== undefined) speakWordOverride(wordsData[idx].word, true, $('wi-speak-btn'));
  });
  $('wi-speak-slow-btn')?.addEventListener('click', () => {
    const idx = activeInspectorKey ? keyToIndex.get(activeInspectorKey) : undefined;
    if (idx !== undefined) speakWordOverride(wordsData[idx].word, true, $('wi-speak-slow-btn'), { rate: 0.7 });
  });
  $('wi-example-speak-btn')?.addEventListener('click', () => {
    const idx = activeInspectorKey ? keyToIndex.get(activeInspectorKey) : undefined;
    if (idx !== undefined && wordsData[idx].example) speakWordOverride(wordsData[idx].example, true, $('wi-example-speak-btn'));
  });
  $('wi-extra-example-speak-btn')?.addEventListener('click', () => {
    const idx = activeInspectorKey ? keyToIndex.get(activeInspectorKey) : undefined;
    if (idx !== undefined && wordsData[idx].extraExample) speakWordOverride(wordsData[idx].extraExample, true, $('wi-extra-example-speak-btn'));
  });
  $('wi-star-btn')?.addEventListener('click', () => {
    if (activeInspectorKey) toggleBookmark(activeInspectorKey);
  });
  $('wi-btn-known')?.addEventListener('click', () => {
    if (!activeInspectorKey) return;
    setWordQuickStatus(activeInspectorKey, 'known');
    refreshInspectorStatusUI(activeInspectorKey);
  });
  $('wi-btn-review')?.addEventListener('click', () => {
    if (!activeInspectorKey) return;
    setWordQuickStatus(activeInspectorKey, 'review');
    refreshInspectorStatusUI(activeInspectorKey);
  });
  $('wi-btn-practice')?.addEventListener('click', async () => {
    if (!activeInspectorKey) return;
    const baseIdx = keyToIndex.get(activeInspectorKey);
    if (baseIdx === undefined) return;
    const w = wordsData[baseIdx];
    if (session && !(await confirmReplaceActive(`เริ่มฝึกคำว่า "${w.word}" และคำที่เกี่ยวข้อง?`, 'เริ่มฝึก'))) {
      return;
    }
    const deckIndices = [baseIdx];
    const used = new Set([baseIdx]);
    const relatedTerms = [...(w.wordFamily || []), ...(w.synonyms || []), ...(w.antonyms || [])];
    relatedTerms.forEach(term => {
      const k = findWordKeyByText(term);
      const rIdx = k ? keyToIndex.get(k) : undefined;
      if (rIdx !== undefined && !used.has(rIdx) && deckIndices.length < 10) {
        used.add(rIdx);
        deckIndices.push(rIdx);
      }
    });
    closeWordInspector();
    startSession(deckIndices, 'random', `เจาะลึก: ${w.word}`);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wiModal?.classList.contains('open')) closeWordInspector();
  });

  /* =========================================================
     * Quiz Hub Screen (แบบทดสอบ)
     * ========================================================= */
  let qhState = { mode: 'choice', cefr: 'all' };
  $('qh-mode-selector')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const card = e.target.closest('[data-qh-mode]');
    if (!(card instanceof HTMLElement)) return;
    qhState.mode = card.dataset.qhMode;
    $('qh-mode-selector').querySelectorAll('.quiz-mode-card').forEach(c => c.classList.toggle('active', c === card));
  });
  $('qh-cefr-selector')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const pill = e.target.closest('[data-qh-cefr]');
    if (!(pill instanceof HTMLElement)) return;
    qhState.cefr = pill.dataset.qhCefr;
    $('qh-cefr-selector').querySelectorAll('.cefr-pill').forEach(p => p.classList.toggle('active', p === pill));
  });
  const qhSlider = /** @type {HTMLInputElement|null} */ ($('qh-count-slider'));
  qhSlider?.addEventListener('input', () => {
    const disp = $('qh-count-display');
    if (disp) disp.textContent = qhSlider.value;
  });
  $('btn-qh-start')?.addEventListener('click', () => {
    const topic = (/** @type {HTMLSelectElement|null} */ ($('qh-topic-select')))?.value || 'all';
    const qCount = parseInt(qhSlider ? qhSlider.value : '10', 10) || 10;
    const pool = [];
    for (let i = 0; i < totalWords; i++) {
      const w = wordsData[i];
      if (qhState.cefr !== 'all' && w.cefr !== qhState.cefr) continue;
      if (topic !== 'all' && (w.topic || 'actions') !== topic) continue;
      pool.push(i);
    }
    if (pool.length === 0) {
      showToast('ไม่พบคำศัพท์ในเงื่อนไขที่เลือก');
      return;
    }
    quizSession = {
      indices: pickRandom(pool, Math.min(qCount, pool.length)),
      currentIndex: 0,
      score: 0,
      incorrectWords: [],
      category: topic !== 'all' ? topic : 'all',
      mode: qhState.mode,
      revealedChars: 1,
      startTime: Date.now()
    };
    showScreen('quiz');
    renderQuizQuestion();
  });

  /* =========================================================
     * Profile Screen, Quests, Right Rail & 6-Category Navigation
     * ========================================================= */
  function renderProfile() {
    const c = countStatuses();
    const stagesDone = Object.keys(learnState.completedStages || {}).filter(sid => isStagePassedFull(sid)).length;
    const streak = typeof computeStreak === 'function' ? computeStreak() : 0;
    const setTxt = (id, v) => { const el = $(id); if (el) el.textContent = String(v); };
    setTxt('prof-xp-val', learnState.xp.toLocaleString());
    setTxt('prof-stages-val', stagesDone.toLocaleString());
    setTxt('prof-streak-val', streak.toLocaleString());
    setTxt('prof-known-val', c.known.toLocaleString());

    const activeSec = learnState.activeSection || 'A1';
    setTxt('prof-cefr-tag', `ระดับ ${activeSec}`);
    setTxt('prof-cefr-pill', `CEFR ${activeSec}`);
    setTxt('prof-accent-pill', preferredAccent || 'US');

    const banner = $('prof-banner');
    if (banner) banner.setAttribute('data-banner', userProfile.banner || 'slate');

    const joinedEl = $('prof-joined');
    if (joinedEl) {
      const dt = new Date(userProfile.joinedAt || Date.now());
      const monthsTh = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
      const mStr = monthsTh[dt.getMonth()] || 'มกราคม';
      joinedEl.textContent = `เข้าร่วมเมื่อ ${mStr} ${dt.getFullYear()}`;
    }

    const gUser = OxGoogleSync._state && OxGoogleSync._state.user;
    const displayName = (userProfile.name && userProfile.name.trim())
      || (gUser && (gUser.displayName || gUser.email))
      || 'ผู้เรียน Oxford 3000';
    const rawHandle = (userProfile.handle && userProfile.handle.trim())
      || (gUser && gUser.email ? gUser.email.split('@')[0] : 'oxford_learner');
    const cleanHandle = '@' + rawHandle.replace(/^@+/, '').replace(/\s+/g, '_');
    setTxt('prof-name', displayName);
    setTxt('prof-handle', cleanHandle);

    const pAva = $('prof-avatar');
    if (pAva) {
      if (userProfile.avatarIdx >= 0) {
        pAva.innerHTML = renderCastAvatar(userProfile.avatarIdx, 'calm', '');
      } else if (gUser && gUser.photoURL) {
        pAva.innerHTML = `<img src="${escapeHtml(gUser.photoURL)}" alt="Avatar">`;
      } else {
        pAva.innerHTML = renderCastAvatar(0, 'happy', '');
      }
    }

    renderProfileAchievements(c.known, stagesDone, streak);

    const profGoalChips = $('prof-goal-chips');
    if (profGoalChips) {
      profGoalChips.querySelectorAll('[data-goal]').forEach(ch => {
        ch.classList.toggle('active', ch instanceof HTMLElement && Number(ch.dataset.goal) === Number(dailyGoal.target || 20));
      });
    }
    const setSwitch = (id, on) => {
      const el = $(id);
      if (!el) return;
      el.classList.toggle('is-on', Boolean(on));
      el.setAttribute('aria-checked', String(Boolean(on)));
    };
    setSwitch('prof-sound-btn', !isSoundMuted);
    setSwitch('prof-haptics-btn', hapticsEnabled);
    setSwitch('prof-motion-btn', !document.documentElement.classList.contains('ox-reduce-motion'));
    setSwitch('more-mascot-btn', mascotEncourageEnabled);
    setSwitch('more-listening-btn', listeningEnabled);

    const themeSel = /** @type {HTMLSelectElement|null} */ ($('prof-theme-select'));
    if (themeSel) themeSel.value = themePreference || 'light';

    const volSlider = /** @type {HTMLInputElement|null} */ ($('prof-sound-volume'));
    const volLabel = $('prof-sound-vol-label');
    const volPct = Math.round(soundVolume * 100);
    if (volSlider) volSlider.value = String(volPct);
    if (volLabel) volLabel.textContent = `${volPct}%`;

    const catBox = $('prof-sound-cats');
    if (catBox) {
      catBox.querySelectorAll('[data-sound-cat]').forEach(btn => {
        if (!(btn instanceof HTMLElement)) return;
        const k = btn.dataset.soundCat;
        const on = soundCats[k] !== false;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', String(on));
      });
    }
  }

  function renderProfileAchievements(knownCount, stagesDone, streak) {
    const box = $('prof-achievements-list');
    if (!box) return;
    const legendaryCount = Object.values(learnState.completedStages || {}).filter(s => s && s.legendary).length;
    let quizBestPct = 0;
    try {
      const qh = JSON.parse(localStorage.getItem('oxford3000_quiz_history') || '[]') || [];
      qh.forEach(item => {
        if (item && item.total > 0) {
          const pct = Math.round((Number(item.score || 0) / Number(item.total)) * 100);
          if (pct > quizBestPct) quizBestPct = pct;
        }
      });
    } catch (_) { }

    const defs = [
      { icon: '📚', title: 'นักสะสมคำศัพท์', desc: 'จำคำศัพท์ Oxford 3000 ได้ครบเป้า', cur: knownCount, tiers: [50, 250, 1000] },
      { icon: '🧭', title: 'ผู้พิชิตเส้นทาง', desc: 'ผ่านบทเรียนในโหมดเรียนรู้', cur: stagesDone, tiers: [5, 25, 100] },
      { icon: '🔥', title: 'ไฟแรงต่อเนื่อง', desc: 'เรียนต่อเนื่องไม่ขาดช่วง', cur: streak, tiers: [3, 7, 30] },
      { icon: '👑', title: 'จ้าวแห่งตำนาน', desc: 'พิชิตด่านระดับ Legendary', cur: legendaryCount, tiers: [1, 10, 30] },
      { icon: '🎯', title: 'นักแม่นแบบทดสอบ', desc: 'ทำคะแนน Quiz สูงสุดถึงเป้า', cur: quizBestPct, tiers: [70, 85, 100] }
    ];
    let earnedTotal = 0;
    box.innerHTML = defs.map(d => {
      let lv = 0;
      d.tiers.forEach(t => { if (d.cur >= t) lv++; });
      if (lv > 0) earnedTotal++;
      const nextTarget = d.tiers[Math.min(lv, d.tiers.length - 1)];
      const pct = Math.min(100, Math.round((Math.min(d.cur, nextTarget) / nextTarget) * 100));
      return `
        <div class="prof-ach-card">
          <div class="prof-ach-badge ${lv > 0 ? 'is-earned' : ''}">
            <span aria-hidden="true">${d.icon}</span>
            <small>LV ${lv}</small>
          </div>
          <div class="prof-ach-info">
            <div class="prof-ach-top">
              <strong>${d.title}</strong>
              <span class="tabular-nums">${Math.min(d.cur, nextTarget).toLocaleString()} / ${nextTarget.toLocaleString()}</span>
            </div>
            <div class="prof-ach-desc">${d.desc}</div>
            <div class="prof-ach-bar"><div class="prof-ach-bar-fill" style="width:${pct}%"></div></div>
          </div>
        </div>
      `;
    }).join('');
    const sumEl = $('prof-ach-summary');
    if (sumEl) sumEl.textContent = `${earnedTotal} / ${defs.length} เหรียญ`;
  }

  function openProfileEditor() {
    const box = $('prof-edit-box');
    if (!box) return;
    box.hidden = false;
    const nameInput = /** @type {HTMLInputElement|null} */ ($('prof-edit-name'));
    const handleInput = /** @type {HTMLInputElement|null} */ ($('prof-edit-handle'));
    const gUser = OxGoogleSync._state && OxGoogleSync._state.user;
    if (nameInput) nameInput.value = userProfile.name || (gUser && gUser.displayName) || '';
    if (handleInput) handleInput.value = userProfile.handle || '';

    const avaHost = $('prof-edit-avatars');
    if (avaHost) {
      avaHost.innerHTML = [-1, 0, 1, 2, 3].map(idx => {
        const active = Number(userProfile.avatarIdx) === idx ? ' active' : '';
        const body = idx < 0 ? '<b>G/OX</b>' : renderCastAvatar(idx, 'calm', '');
        return `<button type="button" class="prof-avatar-opt${active}" data-avatar-idx="${idx}" aria-label="เลือกตัวละคร ${idx < 0 ? 'อัตโนมัติ' : idx + 1}">${body}</button>`;
      }).join('');
    }
    const colHost = $('prof-edit-colors');
    if (colHost) {
      const curCol = userProfile.banner || 'slate';
      colHost.querySelectorAll('.prof-swatch').forEach(sw => {
        sw.classList.toggle('active', sw instanceof HTMLElement && sw.dataset.color === curCol);
      });
    }
  }

  $('btn-prof-edit')?.addEventListener('click', () => {
    const box = $('prof-edit-box');
    if (!box) return;
    SoundFX.tick();
    if (box.hidden) openProfileEditor();
    else box.hidden = true;
  });
  $('btn-prof-cancel')?.addEventListener('click', () => {
    const box = $('prof-edit-box');
    if (box) box.hidden = true;
  });
  $('prof-edit-avatars')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const btn = e.target.closest('[data-avatar-idx]');
    if (!btn) return;
    $('prof-edit-avatars')?.querySelectorAll('.prof-avatar-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    SoundFX.tick();
  });
  $('prof-edit-colors')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const sw = e.target.closest('.prof-swatch');
    if (!(sw instanceof HTMLElement)) return;
    $('prof-edit-colors')?.querySelectorAll('.prof-swatch').forEach(b => b.classList.remove('active'));
    sw.classList.add('active');
    const banner = $('prof-banner');
    if (banner && sw.dataset.color) banner.setAttribute('data-banner', sw.dataset.color);
    SoundFX.tick();
  });
  $('btn-prof-save')?.addEventListener('click', () => {
    const nameInput = /** @type {HTMLInputElement|null} */ ($('prof-edit-name'));
    const handleInput = /** @type {HTMLInputElement|null} */ ($('prof-edit-handle'));
    const selAva = $('prof-edit-avatars')?.querySelector('.prof-avatar-opt.active');
    const selCol = $('prof-edit-colors')?.querySelector('.prof-swatch.active');
    userProfile.name = (nameInput ? nameInput.value : '').trim().slice(0, 32);
    userProfile.handle = (handleInput ? handleInput.value : '').trim().replace(/^@+/, '').slice(0, 24);
    if (selAva instanceof HTMLElement) userProfile.avatarIdx = Number(selAva.dataset.avatarIdx);
    if (selCol instanceof HTMLElement && selCol.dataset.color) userProfile.banner = selCol.dataset.color;
    storage.set('ox3k_profile_v1', userProfile);
    const box = $('prof-edit-box');
    if (box) box.hidden = true;
    renderProfile();
    SoundFX.toggle(true);
    showToast('บันทึกข้อมูลโปรไฟล์แล้ว', 'success');
  });

  $('prof-goal-chips')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const btn = e.target.closest('[data-goal]');
    if (!(btn instanceof HTMLElement)) return;
    const val = Number(btn.dataset.goal);
    if (Number.isFinite(val) && val > 0) {
      SoundFX.toggle(true);
      dailyGoal.target = val;
      dailyGoal.targetUpdatedAt = Date.now();
      saveDailyGoal(dailyGoal);
      updateDailyGoalUI();
      renderProfile();
      refreshShellTelemetry();
      if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
      showToast(`ตั้งเป้าหมายวันละ ${val} คำแล้ว`);
    }
  });

  $('prof-sound-volume')?.addEventListener('input', (e) => {
    const el = /** @type {HTMLInputElement} */ (e.target);
    const pct = Math.min(100, Math.max(0, Number(el.value) || 0));
    SoundFX.setVolume(pct / 100);
    storage.setBatched('ox3k_sound_volume', pct / 100);
    const lbl = $('prof-sound-vol-label');
    if (lbl) lbl.textContent = `${pct}%`;
  });
  $('prof-sound-volume')?.addEventListener('change', () => {
    storage.flush();
    if (!isSoundMuted && soundVolume > 0) SoundFX.tick();
  });
  $('prof-sound-cats')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const btn = e.target.closest('[data-sound-cat]');
    if (!(btn instanceof HTMLElement)) return;
    const k = btn.dataset.soundCat;
    if (!k || !(k in soundCats)) return;
    soundCats[k] = !(soundCats[k] !== false);
    storage.set('ox3k_sound_cats', soundCats);
    SoundFX.toggle(soundCats[k]);
    renderProfile();
  });
  $('prof-haptics-btn')?.addEventListener('click', () => {
    hapticsEnabled = !hapticsEnabled;
    storage.set('ox3k_haptics', hapticsEnabled);
    SoundFX.toggle(hapticsEnabled);
    renderProfile();
    showToast(hapticsEnabled ? 'เปิดแรงสั่นบนมือถือแล้ว' : 'ปิดแรงสั่นแล้ว');
  });
  $('prof-motion-btn')?.addEventListener('click', () => {
    const next = !document.documentElement.classList.contains('ox-reduce-motion');
    document.documentElement.classList.toggle('ox-reduce-motion', next);
    storage.set('ox3k_reduce_motion', next);
    SoundFX.toggle(!next);
    renderProfile();
    showToast(next ? 'เปิดโหมดลดการเคลื่อนไหวแล้ว' : 'กลับมาใช้ลูกเล่นเคลื่อนไหวปกติแล้ว');
  });
  $('more-mascot-btn')?.addEventListener('click', () => {
    mascotEncourageEnabled = !mascotEncourageEnabled;
    storage.set('ox3k_mascot_encourage', mascotEncourageEnabled);
    SoundFX.toggle(mascotEncourageEnabled);
    renderProfile();
    showToast(mascotEncourageEnabled ? 'เปิดข้อความให้กำลังใจแล้ว' : 'ปิดข้อความให้กำลังใจแล้ว');
  });
  $('more-listening-btn')?.addEventListener('click', () => {
    listeningEnabled = !listeningEnabled;
    storage.set('ox3k_listening_enabled', listeningEnabled);
    SoundFX.toggle(listeningEnabled);
    renderProfile();
    showToast(listeningEnabled ? 'เปิดแบบฝึกหัดการฟังแล้ว' : 'ปิดแบบฝึกหัดการฟังแล้ว');
  });
  $('prof-theme-select')?.addEventListener('change', (e) => {
    const val = /** @type {HTMLSelectElement} */ (e.target).value;
    applyTheme(val);
    SoundFX.theme(document.body.classList.contains('dark-theme'));
    if (currentScreen === 'history' && dashTab === 'dash-overview') renderOverview(computeCategoryStats());
  });
  $('more-subnav-list')?.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const btn = e.target.closest('[data-more-target]');
    if (!(btn instanceof HTMLElement)) return;
    $('more-subnav-list')?.querySelectorAll('.more-subnav-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const sec = $(btn.dataset.moreTarget);
    if (sec) {
      sec.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
      OxMotion.pulseClass(sec, 'is-highlighted', 600);
    }
    SoundFX.tick();
  });

  $('btn-prof-sync')?.addEventListener('click', openSyncModal);
  $('btn-prof-settings')?.addEventListener('click', () => { SoundFX.nav(); navigateByCategory('more'); });
  $('btn-more-view-profile')?.addEventListener('click', () => { SoundFX.nav(); navigateByCategory('profile'); });
  $('btn-more-edit-prof')?.addEventListener('click', () => {
    SoundFX.nav();
    navigateByCategory('profile');
    setTimeout(() => openProfileEditor(), 80);
  });
  $('btn-more-clear-cache')?.addEventListener('click', async () => {
    try {
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
      showToast('ล้างแคชแอปเรียบร้อยแล้ว รีเฟรชเพื่อรับอัปเดตล่าสุด', 'success');
    } catch (_) {
      showToast('ไม่สามารถล้างแคชได้ในโหมดนี้', 'warn');
    }
  });
  $('btn-prof-export')?.addEventListener('click', () => $('btn-export-data')?.click());
  $('btn-prof-import')?.addEventListener('click', () => $('import-data-file')?.click());
  $('btn-prof-reset')?.addEventListener('click', () => $('btn-clear-history')?.click());
  $('mob-search-btn')?.addEventListener('click', openQuickSearch);

  function renderQuestsMarkup() {
    ensureTodayQuests();
    return QUEST_DEFS.map(q => {
      const cur = Math.min(q.target, Number(learnState.dailyQuests[q.metric] || 0));
      const pct = Math.min(100, Math.round((cur / q.target) * 100));
      const claimed = learnState.dailyQuests.claimed.includes(q.id);
      const ready = !claimed && cur >= q.target;
      const btnLabel = claimed ? 'รับแล้ว' : (ready ? `+${q.reward} XP` : `${cur}/${q.target}`);
      const btnCls = claimed ? 'is-claimed' : (ready ? 'is-ready' : '');
      return `
                <div class="quest-row">
                    <span class="quest-icon">${q.icon}</span>
                    <div class="quest-info">
                        <div class="quest-title">
                            <span>${escapeHtml(q.title)}</span>
                        </div>
                        <div class="quest-bar"><div class="quest-bar-fill" style="width:${pct}%"></div></div>
                    </div>
                    <button type="button" class="quest-claim-btn ${btnCls}" data-claim-quest="${q.id}" ${ready ? '' : 'disabled'}>${btnLabel}</button>
                </div>`;
    }).join('');
  }

  function refreshQuestsUI() {
    const html = renderQuestsMarkup();
    const railBox = $('rail-quests-list');
    if (railBox) railBox.innerHTML = html;
    const dashBox = $('learn-dash-quests');
    if (dashBox) dashBox.innerHTML = html;
  }

  function handleQuestClaimClick(e) {
    const btn = e.target.closest('[data-claim-quest]');
    if (!btn) return;
    const qid = btn.dataset.claimQuest;
    if (!OxGuard.lock('claim-quest-' + qid, 320)) return;
    const q = QUEST_DEFS.find(x => x.id === qid);
    if (!q || learnState.dailyQuests.claimed.includes(qid)) return;
    if ((learnState.dailyQuests[q.metric] || 0) < q.target) return;

    learnState.dailyQuests.claimed.push(qid);
    learnState.xp += q.reward;
    saveLearnState(true);
    SoundFX.quest();
    OxConfetti.launch('good');
    showToast(`รับรางวัลภารกิจ +${q.reward} XP!`);
    refreshShellTelemetry();
  }

  $('rail-quests-list')?.addEventListener('click', handleQuestClaimClick);
  $('learn-dash-quests')?.addEventListener('click', handleQuestClaimClick);
  $('btn-rail-quests-all')?.addEventListener('click', () => {
    SoundFX.nav();
    openHistory('learn', 'dash-learn-overview');
  });

  function renderLearnDashboard() {
    const xpEl = $('learn-dash-xp');
    const stEl = $('learn-dash-stages');
    const legEl = $('learn-dash-legendary');
    const chEl = $('learn-dash-chests');
    const secBox = $('learn-dash-sections');
    if (!xpEl && !secBox) return;

    const stats = OxCurriculum.getStats();
    let totalStages = 0;
    let doneStages = 0;
    let legendaryCount = 0;
    OxCurriculum.levels.forEach(lvl => {
      totalStages += stats[lvl].stages;
      (OxCurriculum.sections[lvl] || []).forEach(u => {
        (u.nodes || []).forEach(n => {
          if (n.kind === 'stage' && isStagePassedFull(n.id)) {
            doneStages++;
            if (learnState.completedStages[n.id]?.legendary) legendaryCount++;
          }
        });
      });
    });

    if (xpEl) xpEl.textContent = Number(learnState.xp || 0).toLocaleString();
    if (stEl) stEl.textContent = `${doneStages}/${totalStages}`;
    if (legEl) legEl.textContent = legendaryCount.toLocaleString();
    if (chEl) chEl.textContent = (learnState.claimedChests || []).length.toLocaleString();

    if (secBox) {
      const secNames = { A1: 'ส่วนที่ 1 · A1 (พื้นฐาน)', A2: 'ส่วนที่ 2 · A2 (ชีวิตประจำวัน)', B1: 'ส่วนที่ 3 · B1 (การทำงาน/สังคม)', B2: 'ส่วนที่ 4 · B2 (ระดับสูง)' };
      secBox.innerHTML = OxCurriculum.levels.map(lvl => {
        const units = OxCurriculum.sections[lvl] || [];
        const stTotal = stats[lvl].stages;
        let stDone = 0;
        let knownW = 0;
        units.forEach(u => {
          u.wordIndices.forEach(idx => {
            if (wordStatus[keyOf(wordsData[idx])] === 'known') knownW++;
          });
          u.nodes.forEach(n => {
            if (n.kind === 'stage' && isStagePassedFull(n.id)) stDone++;
          });
        });
        const pct = stTotal > 0 ? Math.min(100, Math.round((stDone / stTotal) * 100)) : 0;
        return `
                    <div class="learn-sec-bar-row">
                        <div class="learn-sec-bar-head">
                            <span>${secNames[lvl] || lvl}</span>
                            <span>ผ่าน ${stDone}/${stTotal} ด่าน · จำได้ ${knownW.toLocaleString()}/${stats[lvl].words.toLocaleString()} คำ (${pct}%)</span>
                        </div>
                        <div class="learn-sec-bar-track">
                            <div class="learn-sec-bar-fill" style="width:${pct}%"></div>
                        </div>
                    </div>`;
      }).join('');
    }
    refreshQuestsUI();
  }

  $('btn-rail-srs')?.addEventListener('click', () => {
    const due = getDueWordIndices();
    if (due.length > 0) {
      startSession(pickRandom(due, Math.min(selectedSize, due.length)), 'srs', 'ทบทวนตามรอบความจำ (SRS)');
      return;
    }
    const unseen = [];
    for (let i = 0; i < totalWords; i++) {
      if (!wordStatus[keyOf(wordsData[i])]) unseen.push(i);
    }
    const pool = unseen.length ? unseen : Array.from({ length: totalWords }, (_, i) => i);
    startSession(pickRandom(pool, Math.min(selectedSize, pool.length)), 'random', 'ฝึกคำศัพท์ด่วน');
  });

  let lastShellXpValue = null;

  function refreshShellTelemetry() {
    const streak = typeof computeStreak === 'function' ? computeStreak() : 0;
    const setTxt = (id, v) => { const el = $(id); if (el) el.textContent = String(v); };
    setTxt('rail-streak-val', streak);
    setTxt('mob-streak-val', streak);

    const railXpEl = $('rail-xp-val');
    const mobXpEl = $('mob-xp-val');
    const nextXp = Number(learnState.xp || 0);
    if (lastShellXpValue !== null && nextXp > lastShellXpValue) {
      const delta = nextXp - lastShellXpValue;
      if (railXpEl) OxMotion.countTo(railXpEl, lastShellXpValue, nextXp);
      if (mobXpEl) OxMotion.countTo(mobXpEl, lastShellXpValue, nextXp);
      const anchor = (railXpEl && railXpEl.offsetParent) ? railXpEl : mobXpEl;
      if (anchor) OxMotion.spawnFloatingXp(anchor, delta);
    } else {
      if (railXpEl) railXpEl.textContent = nextXp.toLocaleString();
      if (mobXpEl) mobXpEl.textContent = nextXp.toLocaleString();
    }
    lastShellXpValue = nextXp;

    setTxt('rail-cefr-label', learnState.activeSection || 'A1');
    setTxt('mob-cefr-badge', learnState.activeSection || 'A1');

    const due = getDueWordIndices();
    const srsDesc = $('rail-srs-desc');
    if (srsDesc) {
      srsDesc.textContent = due.length > 0
        ? `มีคำครบกำหนดทบทวน ${due.length.toLocaleString()} คำ (SRS Due)`
        : 'ทบทวนครบแล้ว! กดเริ่มเพื่อฝึกคำใหม่เพิ่มเติมได้เลย';
    }
    const dgFill = $('rail-dg-fill');
    const dgText = $('rail-dg-text');
    const target = Math.max(1, Number(dailyGoal.target || 20));
    const count = Number(dailyGoal.count || 0);
    if (dgFill) dgFill.style.width = `${Math.min(100, Math.round((count / target) * 100))}%`;
    if (dgText) dgText.textContent = `${count} / ${target}`;

    ensureTodayQuests();
    refreshQuestsUI();
  }

  function syncSidebarNavIndicator() {
    const ind = $('sidebar-nav-indicator');
    const activeBtn = document.querySelector('#app-sidebar .nav-item.is-active');
    if (!ind || !activeBtn) return;
    const top = /** @type {HTMLElement} */ (activeBtn).offsetTop;
    const h = /** @type {HTMLElement} */ (activeBtn).offsetHeight;
    if (h <= 0) return;
    ind.style.height = `${h}px`;
    ind.style.transform = `translateY(${top}px)`;
    ind.classList.add('is-ready');
  }

  function navCategoryForScreen(screenName) {
    if (screenName === 'learn' || screenName === 'lesson') return 'learn';
    if (screenName === 'welcome' || screenName === 'app' || screenName === 'summary') return 'practice';
    if (screenName === 'quiz-hub' || screenName === 'quiz' || screenName === 'quiz-summary') return 'quiz';
    if (screenName === 'dictionary') return 'dictionary';
    if (screenName === 'history') return 'dashboard';
    if (screenName === 'profile') return 'profile';
    if (screenName === 'more') return 'more';
    return 'learn';
  }

  function navigateByCategory(cat) {
    if (cat === 'learn') {
      showScreen('learn');
    } else if (cat === 'practice') {
      showScreen('welcome');
    } else if (cat === 'quiz') {
      showScreen('quiz-hub');
    } else if (cat === 'dictionary') {
      showScreen('dictionary');
    } else if (cat === 'dashboard') {
      historyReturnTo = 'learn';
      showScreen('history');
      renderHistory();
    } else if (cat === 'profile') {
      showScreen('profile');
    } else if (cat === 'more') {
      showScreen('more');
    }
  }

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!(btn instanceof HTMLElement)) return;
      SoundFX.nav();
      navigateByCategory(btn.dataset.nav);
    });
  });

  // Register lifecycle & sync hooks cleanly
  function initLearnUnitScrollReveal() {
    if (!learnUnitsContainer || typeof IntersectionObserver !== 'function') return;
    const units = learnUnitsContainer.querySelectorAll('.unit-block');
    if (!units.length) return;
    const learnHost = /** @type {any} */ (learnUnitsContainer);
    if (learnHost._unitObserver) {
      learnHost._unitObserver.disconnect();
    }
    if (learnHost._stickyUnitObserver) {
      learnHost._stickyUnitObserver.disconnect();
    }
    if (learnHost._offscreenObserver) {
      learnHost._offscreenObserver.disconnect();
    }

    const offObs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        en.target.classList.toggle('is-offscreen', !en.isIntersecting);
      });
    }, { rootMargin: '260px 0px', threshold: 0 });
    units.forEach(u => offObs.observe(u));
    learnHost._offscreenObserver = offObs;

    const stickyObs = new IntersectionObserver((entries) => {
      if (!learnActiveUnitPill || !learnActiveUnitText) return;
      const visible = entries.filter(en => en.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) {
        const uId = visible[0].target.getAttribute('data-unit-id');
        const unitObj = OxCurriculum.unitById.get(uId);
        if (unitObj) {
          const secNum = { A1: 1, A2: 2, B1: 3, B2: 4 }[unitObj.cefr] || 1;
          learnActiveUnitId = unitObj.id;
          learnActiveUnitText.textContent = `ส่วนที่ ${secNum} · หน่วยที่ ${unitObj.unitNumber} · ${unitObj.title}`;
          learnActiveUnitPill.hidden = window.scrollY < 140;
        }
      } else if (window.scrollY < 140) {
        learnActiveUnitPill.hidden = true;
      }
    }, { rootMargin: '-95px 0px -65% 0px', threshold: 0 });
    units.forEach(u => stickyObs.observe(u));
    learnHost._stickyUnitObserver = stickyObs;

    if (!prefersReducedMotion()) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('ox-reveal-pending');
            entry.target.classList.add('ox-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '180px 0px', threshold: 0.01 });
      learnHost._unitObserver = obs;

      const foldY = window.innerHeight + 120;
      units.forEach(u => {
        const rect = u.getBoundingClientRect();
        if (rect.top > foldY) {
          u.classList.add('ox-reveal-pending');
          obs.observe(u);
        } else {
          u.classList.add('ox-revealed');
        }
      });
    }
  }

  onGetLearnStreakDatesHook = () => Object.values(learnState.completedStages || {})
    .filter(st => st && Number(st.completedAt) > 0)
    .map(st => Number(st.completedAt));

  onRenderLearnDashboardHook = renderLearnDashboard;

  onScreenShownHook = (name) => {
    if (name !== 'learn' && typeof closeNodePopover === 'function') closeNodePopover(false, true);
    if (name !== 'lesson') closeLessonExitConfirm();
    const activeNav = navCategoryForScreen(name);
    document.querySelectorAll('.nav-item[data-nav], .mob-nav-item[data-nav]').forEach(btn => {
      const on = btn instanceof HTMLElement && btn.dataset.nav === activeNav;
      btn.classList.toggle('is-active', on);
      if (on) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    });
    requestAnimationFrame(syncSidebarNavIndicator);
    if (name === 'learn') {
      const rebuilt = renderLearnPath(false);
      if (rebuilt !== false) initLearnUnitScrollReveal();
      if (pendingScrollToCurrentLearn) {
        pendingScrollToCurrentLearn = false;
        requestAnimationFrame(() => {
          learnUnitsContainer?.querySelectorAll('.unit-block.ox-reveal-pending').forEach(u => {
            u.classList.remove('ox-reveal-pending');
            u.classList.add('ox-revealed');
          });
          const curBtn = learnUnitsContainer?.querySelector('.path-node-btn.is-current');
          if (curBtn) {
            curBtn.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
            OxMotion.pulseClass(curBtn, 'is-just-unlocked', 700);
          }
        });
      }
    }
    if (name === 'dictionary') renderDictionary(false);
    if (name === 'profile' || name === 'more') renderProfile();
    refreshShellTelemetry();
  };

  onLearnDataChangedHook = (kind) => {
    if (kind === 'reset') {
      learnState = defaultLearnState();
      storage.remove(LEARN_STORAGE_KEY);
    }
    renderLearnPath(true);
    renderProfile();
    renderLearnDashboard();
    refreshShellTelemetry();
  };

  getLearnSyncPayloadHook = () => JSON.parse(JSON.stringify(learnState));

  mergeLearnSyncPayloadHook = (remoteLp) => {
    const cleanRemote = normalizeLearnState(remoteLp);
    learnState.xp = Math.max(learnState.xp, cleanRemote.xp);
    Object.entries(cleanRemote.completedStages).forEach(([sid, rVal]) => {
      const lVal = learnState.completedStages[sid];
      const lDone = lVal ? getStageDoneRounds(sid) : 0;
      const rDone = typeof rVal.lessonsDone === 'number' ? Math.min(getStageTotalRounds(sid), rVal.lessonsDone) : getStageTotalRounds(sid);
      learnState.completedStages[sid] = {
        lessonsDone: Math.max(lDone, rDone),
        stars: Math.max(lVal ? lVal.stars : 0, rVal.stars),
        bestAcc: Math.max(lVal ? lVal.bestAcc : 0, rVal.bestAcc),
        completedAt: Math.max(lVal ? lVal.completedAt : 0, rVal.completedAt),
        legendary: Boolean((lVal && lVal.legendary) || rVal.legendary)
      };
    });
    learnState.claimedChests = Array.from(new Set([...learnState.claimedChests, ...cleanRemote.claimedChests]));
    learnState.unlockedUnits = Array.from(new Set([...learnState.unlockedUnits, ...cleanRemote.unlockedUnits]));
    ensureTodayQuests();
    if (cleanRemote.dailyQuests && cleanRemote.dailyQuests.date === learnState.dailyQuests.date) {
      learnState.dailyQuests.xpToday = Math.max(learnState.dailyQuests.xpToday, cleanRemote.dailyQuests.xpToday);
      learnState.dailyQuests.stagesToday = Math.max(learnState.dailyQuests.stagesToday, cleanRemote.dailyQuests.stagesToday);
      learnState.dailyQuests.perfectToday = Math.max(learnState.dailyQuests.perfectToday, cleanRemote.dailyQuests.perfectToday);
      learnState.dailyQuests.claimed = Array.from(new Set([...learnState.dailyQuests.claimed, ...cleanRemote.dailyQuests.claimed]));
    }
    storage.set(LEARN_STORAGE_KEY, learnState);
    renderLearnPath(true);
    renderLearnDashboard();
    refreshShellTelemetry();
  };

  importLearnJsonHook = (rawLp) => {
    learnState = normalizeLearnState(rawLp);
    storage.set(LEARN_STORAGE_KEY, learnState);
    renderLearnPath(true);
    renderProfile();
    renderLearnDashboard();
    refreshShellTelemetry();
  };

  onGoogleUiRefreshHook = (gState) => {
    const user = gState && gState.user;
    const conflict = gState && gState.accountConflict;
    const profSyncBtn = $('btn-prof-sync');
    if (profSyncBtn) {
      profSyncBtn.textContent = user ? (conflict ? 'ยืนยันบัญชี Google' : 'บัญชี Google') : 'ล็อกอิน Google';
    }

    const pSub = $('prof-sub');
    const subTxt = user ? (user.email || 'เชื่อมต่อบัญชี Google แล้ว') : 'ยังไม่ได้เชื่อมต่อบัญชี Google · เก็บข้อมูลในเครื่องนี้';
    if (pSub) pSub.textContent = subTxt;
    renderProfile();
  };

  /* =========================================================
     * Init
     * ========================================================= */
  renderWelcome();
  updateDailyGoalUI();
  renderLearnPath();
  initLearnUnitScrollReveal();
  refreshShellTelemetry();
  requestAnimationFrame(syncSidebarNavIndicator);
  window.addEventListener('resize', () => requestAnimationFrame(syncSidebarNavIndicator), { passive: true });
  if (typeof onGoogleUiRefreshHook === 'function') onGoogleUiRefreshHook(OxGoogleSync._state);

  // Expose a tiny API for automated testing / debugging
  /** @type {any} */ (window).__flashcardApp = {
    getSession: () => session && JSON.parse(JSON.stringify(session)),
    getQuizSession: () => quizSession && JSON.parse(JSON.stringify(quizSession)),
    getCounts: () => session && getSessionCounts(),
    getWordStatus: () => ({ ...wordStatus }),
    getSessions: () => JSON.parse(JSON.stringify(sessions)),
    getAccent: () => preferredAccent,
    setAccent: (acc) => {
      preferredAccent = acc === 'UK' ? 'UK' : 'US';
      savePrefsState({ touchAccent: true });
      syncAccentButtonsUI();
      if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();
    },
    getPrefs: () => ({ size: selectedSize, accent: preferredAccent, ...prefsMeta }),
    getDailyGoal: () => ({ ...dailyGoal }),
    getCefrFilter: () => selectedCefr,
    setCefrFilter: (lvl) => { selectedCefr = lvl || 'all'; syncWelcomeCefrUI(); },
    buildSyncCode: () => OxSync.encodeCode(OxSync.buildPayload()),
    applySyncCode: (code) => OxSync.mergePayload(OxSync.decodeCode(code)),
    parseFirebaseConfig: (raw) => OxGoogleSync.parseConfig(raw),
    getAccountConflict: () => OxGoogleSync._state.accountConflict ? { ...OxGoogleSync._state.accountConflict } : null,
    resolveAccountConflict: (mode) => OxGoogleSync.resolveAccountConflict(mode),
    applyAuthUserForTest: (fbUser, opts) => OxGoogleSync.handleAuthUser(fbUser, opts),
    getGoogleSyncState: () => {
      const cfg = OxGoogleSync.getConfig();
      const store = OxGoogleSync.readStore();
      return {
        hasConfig: !!cfg,
        hasCustomConfig: !!OxGoogleSync.getCustomConfig(),
        hasBuiltInConfig: !!FIREBASE_DEFAULT_CONFIG,
        projectId: cfg && cfg.projectId ? cfg.projectId : '',
        autoSync: OxGoogleSync.getAutoSync(),
        signedIn: !!OxGoogleSync._state.user,
        syncing: OxGoogleSync._state.syncing,
        email: OxGoogleSync._state.user ? OxGoogleSync._state.user.email : '',
        lastUid: store.lastUid || '',
        hasConflict: !!OxGoogleSync._state.accountConflict,
        isFileProtocol: OxGoogleSync.isFileProtocol(),
        lastError: OxGoogleSync._state.lastError
      };
    },
    setFirebaseConfig: (rawOrObj) => {
      const raw = typeof rawOrObj === 'string' ? rawOrObj : JSON.stringify(rawOrObj || {});
      const cfg = OxGoogleSync.parseConfig(raw);
      if (!cfg) return false;
      OxGoogleSync.saveConfig(cfg);
      OxGoogleSync.refreshUI();
      return true;
    },
    fuzzyMatch: (q) => wordsData.map((w) => ({ word: w.word, cefr: w.cefr, score: OxFuzzy.scoreWord(w, q) }))
      .filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 10),
    navigateTo: (cat) => navigateByCategory(cat),
    getCurriculumStats: () => OxCurriculum.getStats(),
    getCurriculumSections: () => OxCurriculum.sections,
    getLearnState: () => JSON.parse(JSON.stringify(learnState)),
    startLessonStage: (stageId, opts) => startLessonByStageId(stageId, opts),
    getDialoguePoolStats: () => Object.fromEntries(Object.entries(OX_DIALOGUES_BY_TOPIC).map(([k, v]) => [k, v.length])),
    getActiveLesson: () => activeLesson ? { ...activeLesson, queueLen: activeLesson.queue.length } : null,
    isAnimating: () => isAnimating,
    currentScreen: () => currentScreen,
    renderHistoryNow: (force = false) => renderHistory(force),
    getAudioStats: () => ({
      muted: isSoundMuted,
      volume: soundVolume,
      cats: { ...soundCats },
      haptics: hapticsEnabled,
      hasMasterBus: !!SoundFX._master,
      activeVoices: SoundFX.getActiveVoices()
    }),
    setSoundVolume: (pct) => {
      const v = Math.min(1, Math.max(0, (Number(pct) || 0) / 100));
      SoundFX.setVolume(v);
      storage.set('ox3k_sound_volume', v);
      renderProfile();
    },
    showToast: (msg, type = 'auto') => showToast(msg, type),
    getToastCount: () => document.querySelectorAll('#toast-stack .toast-item:not(.is-leaving)').length,
    getErrorLog: () => OxErrorGuard.getLog(),
    flushStorage: () => storage.flush()
  };

  // Expose Targeted Practice
  /** @type {any} */ (window).startTargetedPractice = function (category) {
    if (category === 'mixed') category = 'all';
    let pool = Array.from({ length: totalWords }, (_, i) => i);
    if (category !== 'all') {
      pool = pool.filter(i => wordsData[i].partOfSpeech === category);
    }

    if (pool.length === 0) {
      showToast('ไม่พบคำศัพท์ในหมวดหมู่นี้');
      return;
    }

    const size = Math.min(20, pool.length);
    const indices = pickRandom(pool, size);

    startSession(indices, 'category', CATEGORY_META[category] ? CATEGORY_META[category].th : 'ติวเข้มด่วน');
  };
});
