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
 * @property {CefrLevel} [cefr]
 * @property {string[]} [collocations]
 * @property {string[]} [synonyms]
 * @property {string[]} [wordFamily]
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
        prefs: 'ox3k_prefs_v1',           // { size: 20 }
        dailyGoal: 'ox3k_daily_goal_v1',  // { target: 20, date: 'YYYY-MM-DD', count: 0 }
        mastery: 'ox3k_word_mastery_v1',  // { [key]: { streak, reviewCount, lastStudied, nextReviewAt, intervalDays } }
        bookmarks: 'ox3k_bookmarks_v1',   // [ "word|pos", ... ]
        ActivityLog: 'ox3k_activity_v1',  // { "YYYY-MM-DD": count }
        theme: 'ox3k_theme_mode',         // 'light' | 'dark'
        accent: 'ox3k_accent_v1',         // 'US' | 'UK'
        sbConfig: 'ox3k_sb_config_v1',    // { url, anonKey, syncId, lastSyncedAt }
        fbConfig: 'ox3k_fb_config_v1'     // { config, autoSync, lastSyncedAt, lastEmail }
    };

    /** @type {(() => void)|null} */
    let scheduleGoogleAutoSync = null;

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

    const prefersReducedMotion = () =>
        typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------------------------------------------------
     * Pillar 1: Native WAAPI Spring Physics (OxMotion)
     * --------------------------------------------------------- */
    const OxMotion = {
        /** @param {HTMLElement|null} el */
        cancel(el) {
            if (!el) return;
            const anyEl = /** @type {any} */ (el);
            if (anyEl._oxAnim && typeof anyEl._oxAnim.cancel === 'function') {
                try { anyEl._oxAnim.cancel(); } catch (_) {}
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
            } catch (_) {}
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
            } catch (_) {}
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
            } catch (_) {}
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
            if (Array.isArray(w.wordFamily) && w.wordFamily.some(f => f.toLowerCase().includes(q))) return 470;
            if ((w.definition || '').toLowerCase().includes(q) || (w.example || '').toLowerCase().includes(q)) return 410;

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
    const SoundFX = {
        audioCtx: null,
        init() {
            if (isSoundMuted) return;
            if (!this.audioCtx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) this.audioCtx = new AudioContext();
            }
            if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
        },
        playTone(frequency, type, attack, decay, vol = 0.3, slideToFreq = null, startTimeOffset = 0) {
            if (isSoundMuted || !this.audioCtx) return;
            try {
                const now = this.audioCtx.currentTime + startTimeOffset;
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(frequency, now);
                if (slideToFreq) {
                    osc.frequency.exponentialRampToValueAtTime(slideToFreq, now + attack + decay);
                }

                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(vol, now + attack);
                gain.gain.exponentialRampToValueAtTime(0.01, now + attack + decay);

                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now);
                osc.stop(now + attack + decay);
            } catch (e) { }
        },
        known() {
            this.init();
            // เสียงแบบ Duolingo "Correct" (ตริ๊ง-ติ๊ง) 
            // ใช้ความถี่แบบคอร์ดสว่าง เช่น B5 -> E6
            this.playTone(987.77, 'sine', 0.02, 0.1, 0.15, null, 0);
            this.playTone(1318.51, 'sine', 0.02, 0.4, 0.2, null, 0.12);
        },
        review() {
            this.init();
            // เสียงแบบ Duolingo "Incorrect" (ตึ-ดึง แบบทุ้ม)
            // ใช้คลื่น triangle ให้มีเนื้อเสียงทุ้ม และลดระดับเสียงลง
            this.playTone(349.23, 'triangle', 0.03, 0.15, 0.2, null, 0);
            this.playTone(277.18, 'triangle', 0.03, 0.25, 0.2, null, 0.13);
        },
        tick() {
            this.init();

            // Rate limit (Throttle) ป้องกันเสียงรัวเกินไปเวลาลากเร็วๆ (จำกัดให้ดังห่างกันอย่างน้อย 40ms)
            const now = performance.now();
            if (this._lastTick && now - this._lastTick < 40) return;
            this._lastTick = now;

            // เสียง "Mechanical Click" เวอร์ชั่นใหม่ ที่มีความคล้ายสวิตช์แป้นพิมพ์
            // ใช้ sawtooth wave ที่ดรอปความถี่อย่างเร็วจัด (800 -> 50) จะให้ความรู้สึกเหมือนพลาสติกกระทบกัน
            // ปรับระดับเสียงลงมาที่ 0.10
            this.playTone(800, 'sawtooth', 0.002, 0.015, 0.10, 50);
        },
        next() {
            this.init();
            // เสียงแบบ Duolingo "Click/Pop" (ป๊อก)
            // ใช้ความถี่สูงตกลงมาต่ำอย่างรวดเร็วมาก
            this.playTone(800, 'sine', 0.01, 0.05, 0.1, 100);
        },
        victory() {
            this.init();

            // เสียง Victory แบบเกม 8-bit ที่ฟังดูชนะแบบสดใส (Level Up!)
            const schedule = (freq, type, duration, vol, delay) => {
                this.playTone(freq, type, 0.02, duration, vol, null, delay / 1000);
            };

            // โน้ตเพลง "ทะ-ดา-ด๊าาา!" แบบพุ่งขึ้น (G4 -> C5 -> E5 -> คอร์ด C Major)
            schedule(392.00, 'sine', 0.1, 0.2, 0);     // G4 (ทะ)
            schedule(523.25, 'sine', 0.1, 0.2, 100);   // C5 (ดา)
            schedule(659.25, 'sine', 0.1, 0.2, 200);   // E5 (ดี)

            // คอร์ดจบแบบสดใสและลากยาว (C Major)
            schedule(523.25, 'triangle', 0.8, 0.2, 300); // C5
            schedule(659.25, 'triangle', 0.8, 0.2, 300); // E5
            schedule(783.99, 'sine', 0.8, 0.3, 300);     // G5 (ด๊าาา!)

            // เสียงวิ้งๆ ระยิบระยับ (Sparkles) เหมือนได้รับรางวัล
            for (let i = 0; i < 7; i++) {
                this.playTone(1046.50 + Math.random() * 800, 'sine', 0.01, 0.1, 0.05, null, (300 + (i * 60) + Math.random() * 30) / 1000);
            }
        }
    };

    const storage = {
        get(key, fallback) {
            try {
                const raw = localStorage.getItem(key);
                if (raw === null) return fallback;
                const value = JSON.parse(raw);
                return value === null || value === undefined ? fallback : value;
            } catch (e) {
                return fallback;
            }
        },
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.warn('Unable to save to localStorage', e);
            }
        },
        remove(key) {
            try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
        }
    };

    isSoundMuted = storage.get('ox3k_sound_muted', false);

    /* =========================================================
     * Word helpers
     * ========================================================= */
    const totalWords = wordsData.length;
    const keyOf = (w) => `${w.word}|${w.partOfSpeech || ''}`;
    const keyToIndex = new Map();
    wordsData.forEach((w, i) => {
        const k = keyOf(w);
        if (!keyToIndex.has(k)) keyToIndex.set(k, i);
    });

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

    function getTodayDateString() {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    function loadDailyGoal() {
        const raw = storage.get(STORAGE.dailyGoal, {});
        const today = getTodayDateString();
        const target = typeof raw.target === 'number' && raw.target > 0 ? raw.target : 20;
        if (raw.date !== today) {
            return { target, date: today, count: 0 };
        }
        return { target, date: today, count: typeof raw.count === 'number' ? raw.count : 0 };
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

    let wordStatus = loadWordStatus();
    let sessions = loadSessions();
    let dailyGoal = loadDailyGoal();
    let wordMastery = loadWordMastery();
    let bookmarkedWords = loadBookmarks();
    let activityLog = loadActivityLog();
    const prefs = storage.get(STORAGE.prefs, {});
    let selectedSize = typeof prefs.size === 'number' && prefs.size >= 1 && prefs.size <= 50 ? prefs.size : 20;
    let selectedCefr = 'all';
    let historyCefrFilter = 'all';
    let qsCefrFilter = 'all';
    let qsFocusIndex = -1;
    let preferredAccent = localStorage.getItem(STORAGE.accent) === 'UK' ? 'UK' : 'US';
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
        SoundFX.tick();
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
            dailyGoal = { target: dailyGoal.target || 20, date: today, count: 0 };
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
            dailyGoal = { target: dailyGoal.target || 20, date: today, count: 0 };
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

    function initTheme() {
        const savedTheme = storage.get(STORAGE.theme, 'light');
        applyTheme(savedTheme);
    }

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        document.body.classList.toggle('dark-theme', isDark);
        storage.set(STORAGE.theme, isDark ? 'dark' : 'light');
        document.querySelectorAll('.theme-toggle-btn .theme-icon').forEach(el => {
            el.innerHTML = isDark ? ICON_SVG.sun : ICON_SVG.moon;
        });
    }

    function toggleTheme() {
        const isCurrentDark = document.body.classList.contains('dark-theme');
        applyTheme(isCurrentDark ? 'light' : 'dark');
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
        welcome: $('welcome-screen'),
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
    const segOptions = Array.from(document.querySelectorAll('.seg-option'));
    const segIndicator = $('seg-indicator');
    const countSlider = $('count-slider');
    const countDisplay = $('count-display');
    const btnStart = $('btn-start');
    const btnResume = $('btn-resume');
    const resumeInfo = $('resume-info');
    const btnHistory = $('btn-history');

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
    const btnPrev = $('btn-prev');
    const btnNext = $('btn-next');
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
    const summaryTabs = Array.from(document.querySelectorAll('#summary-tabs .tab'));
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
    const historyTabs = Array.from(document.querySelectorAll('#history-tabs .tab'));
    const historySessionsPanel = $('history-sessions');
    const historyWordsPanel = $('history-words');
    const historySessionsCount = $('history-sessions-count');
    const sessionListEl = $('session-list');
    const filterChips = Array.from(document.querySelectorAll('#status-filter .chip'));
    const filterReviewCount = $('filter-review-count');
    const filterKnownCount = $('filter-known-count');
    const wordSearch = $('word-search');
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
    const btnQuizStart = $('btn-quiz-start');
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
    let currentScreen = 'welcome';

    function showScreen(name) {
        Object.entries(screens).forEach(([key, el]) => {
            el.classList.toggle('active', key === name);
        });
        currentScreen = name;
        window.scrollTo(0, 0);
        if (name === 'welcome') renderWelcome();
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

    function updateSegmented(skipSliderUpdate = false) {
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
            if (countSlider) countSlider.value = selectedSize;
        }

        if (countDisplay && countDisplay.textContent != selectedSize) {
            countDisplay.textContent = selectedSize;
            countDisplay.classList.remove('pop-anim');
            void countDisplay.offsetWidth; // force reflow
            countDisplay.classList.add('pop-anim');
        }
    }

    let sliderAnimFrame = null;
    function animateSliderTo(targetValue) {
        if (!countSlider) return;
        if (sliderAnimFrame) cancelAnimationFrame(sliderAnimFrame);

        const startValue = Number(countSlider.value);
        const endValue = Number(targetValue);
        const duration = 400; // 400ms for smooth slide
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            let progress = elapsed / duration;
            if (progress > 1) progress = 1;

            const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease out
            const currentVal = startValue + (endValue - startValue) * easeOut;
            countSlider.value = currentVal;

            const displayVal = Math.round(currentVal);
            if (countDisplay && countDisplay.textContent != displayVal) {
                countDisplay.textContent = displayVal;
            }

            if (progress < 1) {
                sliderAnimFrame = requestAnimationFrame(step);
            } else {
                selectedSize = endValue;
                storage.set(STORAGE.prefs, { size: endValue });
                updateSegmented(false); // final pop animation
            }
        }
        sliderAnimFrame = requestAnimationFrame(step);
    }

    segOptions.forEach((btn) => {
        btn.addEventListener('click', () => {
            const size = Number(btn.dataset.count);
            if (!SESSION_SIZES.includes(size)) return;

            selectedSize = size;
            updateSegmented(true); // update buttons immediately, skip jumping slider
            animateSliderTo(size);
        });
    });

    if (countSlider) {
        countSlider.addEventListener('input', (e) => {
            if (sliderAnimFrame) cancelAnimationFrame(sliderAnimFrame);
            const size = Math.round(Number(e.target.value));

            if (selectedSize !== size) {
                SoundFX.tick(); // เล่นเสียง "ตึด" เบาๆ ตอนที่เลขเปลี่ยน
                selectedSize = size;
                storage.set(STORAGE.prefs, { size });
                updateSegmented(true); // update display and buttons, but don't snap the thumb while dragging
            }
        });

        countSlider.addEventListener('change', (e) => {
            const size = Math.round(Number(e.target.value));
            selectedSize = size;
            updateSegmented(false); // snap thumb to integer on release
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

    btnHistory.addEventListener('click', () => {
        openHistory('welcome');
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
            window.pendingAdvanceCallback = moveToNext;
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
        statKnownEl.textContent = c.known;
        statReviewEl.textContent = c.review;
        statRemainingEl.textContent = c.remaining;
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
        const phoneticEl = $('phonetic');
        if (phoneticEl) {
            phoneticEl.textContent = word.phonetic || '';
        }
        OxCefr.applyBadge($('card-cefr-badge'), word.cefr);
        OxCefr.applyBadge($('card-cefr-badge-back'), word.cefr);

        const lexBox = $('card-lexical-box');
        const colRow = $('card-collocations-row');
        const colContainer = $('card-collocations');
        const famRow = $('card-family-row');
        const famContainer = $('card-word-family');
        if (lexBox && colRow && colContainer && famRow && famContainer) {
            const cols = Array.isArray(word.collocations) ? word.collocations.slice(0, 4) : [];
            const fams = Array.isArray(word.wordFamily) ? word.wordFamily.slice(0, 4) : [];
            if (cols.length > 0) {
                colContainer.innerHTML = cols.map(c => `<span class="lex-chip">${escapeHtml(c)}</span>`).join('');
                colRow.hidden = false;
            } else {
                colContainer.innerHTML = '';
                colRow.hidden = true;
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
            lexBox.hidden = (cols.length === 0 && fams.length === 0);
        }

        if (word.definition) {
            definitionEl.style.display = 'block';
            definitionEl.textContent = word.definition;
        } else {
            definitionEl.style.display = 'none';
        }

        if (word.example) {
            exampleBoxEl.style.display = 'block';
            exampleEl.textContent = word.example;
            if (word.exampleTranslation) {
                exampleTranslationEl.style.display = 'block';
                exampleTranslationEl.textContent = word.exampleTranslation;
            } else {
                exampleTranslationEl.style.display = 'none';
            }
        } else {
            exampleBoxEl.style.display = 'none';
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
        window.pendingAdvanceCallback = null;

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
        if (fStarCount) fStarCount.textContent = bookmarkedWords.size;
        updateCardStarAndSRS();
        updateWelcomeSmartStrip();
    }

    function flipCard(e) {
        if (isAnimating || !session) return;
        // ป้องกันไม่ให้พลิกการ์ดเวลากดปุ่มฟังเสียงหรือปุ่มปักหมุดดาว
        if (e && e.target && e.target.closest && (e.target.closest('.speak-btn') || e.target.closest('.card-star-btn'))) return;

        isFlipped = !isFlipped;
        flashcard.classList.toggle('is-flipped', isFlipped);
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
        if (e.target.closest('.speak-btn') || e.target.closest('.card-star-btn')) return;
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
    });

    function resetSwipeVisuals() {
        flashcard.style.transition = '';
        OxMotion.springSnap(flashcard);
        const cards = flashcard.querySelectorAll('.glass-card');
        cards.forEach(c => {
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
        if (window.pendingAdvanceCallback) window.pendingAdvanceCallback();
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
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

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

            if (optionIndex >= 0 && buttons[optionIndex] && !quizAnswered) {
                e.preventDefault();
                buttons[optionIndex].click();
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

    function wordListItem(key, status, highlightQ = '') {
        const idx = keyToIndex.get(key);
        if (idx === undefined) return '';
        const w = wordsData[idx];
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

        const safeWord = escapeHtml(w.word);
        const dispWord = highlightQ ? OxFuzzy.highlightMatch(w.word, highlightQ) : safeWord;
        const dispTrans = highlightQ ? OxFuzzy.highlightMatch(w.translation, highlightQ) : escapeHtml(w.translation);
        const cefrHtml = w.cefr ? `<span class="cefr-badge ${OxCefr.getClass(w.cefr)}">${escapeHtml(w.cefr)}</span>` : '';
        const safePhonetic = escapeHtml(w.phonetic || '');
        const safePos = escapeHtml(w.partOfSpeech || 'word');
        const safeDef = escapeHtml(w.definition || '');
        const safeEx = escapeHtml(w.example || '');
        const safeExTh = escapeHtml(w.exampleTranslation || '');
        const extraCols = Array.isArray(w.collocations) ? w.collocations.slice(0, 3) : [];
        const extraSyns = Array.isArray(w.synonyms) ? w.synonyms.slice(0, 3) : [];
        const extraHtml = (extraCols.length || extraSyns.length)
            ? `<div class="wid-extra-chips">${extraCols.map(c => `<span class="lex-chip">${escapeHtml(c)}</span>`).join('')}${extraSyns.map(s => `<span class="lex-chip">≈ ${escapeHtml(s)}</span>`).join('')}</div>`
            : '';

        return `<li class="word-item ${status || 'unseen'}" data-word-key="${escapeHtml(key)}">
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
                            <span class="pos-badge ${cat}">${safePos}</span>
                            <span class="pill-sm ${lvl}">${lvlBadge}</span>
                        </div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span class="word-item-trans">${dispTrans}</span>
                    <button type="button" class="word-star-btn ${starred ? 'is-starred' : ''}" data-star-key="${escapeHtml(key)}" title="ปักหมุดคำศัพท์สำคัญ" aria-label="ปักหมุดคำศัพท์สำคัญ">
                        ${ICON_SVG.star}
                    </button>
                    <span class="word-item-expand-arrow" style="opacity: 0.5; font-size: 0.8rem;">▾</span>
                </div>
            </div>
            ${(safeDef || safeEx || extraHtml) ? `
            <div class="word-item-drawer">
                ${safeDef ? `<div class="wid-def"><b>ความหมาย:</b> ${safeDef}</div>` : ''}
                ${safeEx ? `
                <div class="wid-example">
                    <span>"${safeEx}"</span>
                    <button type="button" class="glass-btn-icon small word-item-speak-btn speak-btn" data-speak-example="${safeEx}" title="ฟังตัวอย่าง" style="width: 26px; height: 26px;">
                        <svg class="speak-svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>
                        <span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i></span>
                    </button>
                </div>
                ${safeExTh ? `<div class="wid-example-th">"${safeExTh}"</div>` : ''}
                ` : ''}
                ${extraHtml}
            </div>` : ''}
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

    summaryTabs.forEach((t) => t.addEventListener('click', () => {
        summaryTab = t.dataset.tab;
        renderSummaryList();
    }));

    btnRetryReview.addEventListener('click', () => {
        if (!lastSummary) return;
        const indices = lastSummary.review.map((k) => keyToIndex.get(k)).filter((i) => i !== undefined);
        startSession(shuffle(indices), 'review');
    });
    btnNewSession.addEventListener('click', startRandomSession);
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
        const isQuizTab = tab.startsWith('dash-quiz');
        const targetMode = isQuizTab ? 'quiz' : 'flashcard';
        const modeBtns = document.querySelectorAll('.dash-mode-switcher .mode-btn');
        modeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === targetMode);
        });

        historyTabs.forEach(t => {
            t.style.display = (t.dataset.group === targetMode) ? '' : 'none';
        });

        setDashTab(tab);
    }

    function renderHistory() {
        historySessionsCount.textContent = sessions.length;
        const stats = computeCategoryStats();
        renderOverview(stats);
        renderCategories(stats);
        renderAnalysis(stats);
        renderSessionList();
        renderHistoryWords();
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

        const allDates = [
            ...sessions.map((s) => s.date),
            ...quizHistory.map((q) => q.date)
        ];
        const days = new Set(allDates.filter(Boolean).map((d) => new Date(d).toDateString()));
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
                const label = isNaN(d) ? '' : d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });
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
            if (isNaN(d)) return '';
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
            const cell = e.target.closest('.hm-cell');
            if (!cell || !detailNote) return;
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
        const cell = e.target.closest('.az-cell');
        if (!cell) return;
        document.querySelectorAll('.az-cell.selected').forEach((c) => c.classList.remove('selected'));
        cell.classList.add('selected');
        const { letter, total, known, review } = cell.dataset;
        const studied = Number(known) + Number(review);
        $('az-note').innerHTML = `<b>ตัว ${letter}</b> · ทั้งหมด ${Number(total).toLocaleString()} คำ · จำได้ <b class="txt-known">${known}</b> · ทบทวน <b class="txt-review">${review}</b>` +
            (studied ? ` · แม่นยำ <b>${fmtPct(known / studied)}</b>` : ' · ยังไม่ได้เรียน');

        const actContainer = $('az-action-container');
        if (actContainer) {
            const n = Math.min(selectedSize, Number(total));
            actContainer.innerHTML = `<button type="button" class="btn btn-primary glass-btn btn-sm" id="btn-practice-letter" data-letter="${letter}">
                เริ่มฝึกคำขึ้นต้นด้วยตัว ${letter} (${n} คำ)
            </button>`;
            actContainer.style.display = 'block';
        }
    });

    const azActContainer = $('az-action-container');
    if (azActContainer) {
        azActContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('#btn-practice-letter');
            if (btn && btn.dataset.letter) {
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
        const catBtn = e.target.closest('[data-practice-cat]');
        if (catBtn) { practiceCategory(catBtn.dataset.practiceCat); return; }
        const actBtn = e.target.closest('[data-dash-action]');
        if (actBtn) {
            const act = actBtn.dataset.dashAction;
            if (act === 'start') startRandomSession();
            else if (act === 'review-all') practiceReviewWords('all');
        }
    });

    $('dash-goto-categories').addEventListener('click', () => setDashTab('dash-categories'));

    function formatDate(iso) {
        const d = new Date(iso);
        if (isNaN(d)) return '';
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
        const chip = e.target.closest('.cat-chip');
        if (!chip) return;
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
        filterReviewCount.textContent = c.review;
        filterKnownCount.textContent = c.known;
        const fStarCount = $('filter-starred-count');
        if (fStarCount) fStarCount.textContent = bookmarkedWords.size;

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

    const modeBtns = document.querySelectorAll('.dash-mode-switcher .mode-btn');
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
        showScreen(historyReturnTo === 'summary' && lastSummary ? 'summary' : 'welcome');
    });

    btnClearHistory.addEventListener('click', async () => {
        const ok = await confirmDialog({
            title: 'ล้างข้อมูลทั้งหมด?',
            message: 'ประวัติทุกรอบและสถานะคำศัพท์ทั้งหมด (รวมทั้งประวัติ Quiz) จะถูกลบถาวร',
            confirmText: 'ลบทั้งหมด',
            danger: true
        });
        if (!ok) return;
        sessions = [];
        wordStatus = {};
        wordMastery = {};
        dailyGoal = { target: dailyGoal.target || 20, date: getTodayDateString(), count: 0 };
        lastSummary = null;
        storage.remove(STORAGE.sessions);
        storage.remove(STORAGE.status);
        storage.remove(STORAGE.active);
        bookmarkedWords = new Set();
        activityLog = {};
        storage.remove(STORAGE.mastery);
        storage.remove(STORAGE.dailyGoal);
        storage.remove(STORAGE.bookmarks);
        storage.remove(STORAGE.ActivityLog);
        try { localStorage.removeItem('oxford3000_quiz_history'); } catch (e) { }
        renderWelcome();
        renderHistory();
        if (typeof renderQuizHistory === 'function') renderQuizHistory();
        updateDailyGoalUI();
        showToast('ล้างข้อมูลเรียบร้อยแล้ว');
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
    const quizCatOptions = document.querySelectorAll('.custom-option');
    const quizCatDisplay = document.getElementById('quiz-category-display');
    const quizCatInput = document.getElementById('quiz-category-select');

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
    function showToast(msg) {
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
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
                heroRingFg.style.strokeDasharray = c;
                heroRingFg.style.strokeDashoffset = c;
                setTimeout(() => { heroRingFg.style.strokeDashoffset = offset; }, 100);
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
                lgCorrect.textContent = totalCorrect;
                lgWrong.textContent = totalWrong;
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
                const canvasEl = document.getElementById('quiz-radar-chart');
                if (canvasEl && window.Chart) {
                    const ctx = canvasEl.getContext('2d');
                    if (window.quizRadar) window.quizRadar.destroy();
                    
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

                    window.quizRadar = new Chart(canvasEl, {
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
                    if (totalCountEl) totalCountEl.textContent = sortedMistakes.length;
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
                            <button class="glass-btn-icon small speak-btn" onclick="speakWordOverride('${escapeHtml(w.word)}', true, this)" title="ฟังเสียง" style="width:34px; height:34px;"><span class="speak-svg" style="display:inline-flex;">${ICON_SVG.volOn}</span><span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i></span></button>
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
                    const label = isNaN(d) ? '' : d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });

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
    const quizCountSlider = document.getElementById('quiz-count-slider');
    const quizCountDisplay = document.getElementById('quiz-count-display');
    const btnQuizCancel = document.getElementById('btn-quiz-cancel');
    const btnQuizConfirm = document.getElementById('btn-quiz-confirm');

    if (quizCountSlider && quizCountDisplay) {
        let lastQuizSize = parseInt(quizCountSlider.value, 10);
        quizCountSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value, 10);
            if (val !== lastQuizSize) {
                SoundFX.tick();
                lastQuizSize = val;
            }
            quizCountDisplay.textContent = val;
            // Add a little liquid effect on slide
            const ratio = (val - e.target.min) / (e.target.max - e.target.min);
            e.target.style.background = `linear-gradient(90deg, #a855f7 ${ratio * 100}%, rgba(0,0,0,0.1) ${ratio * 100}%)`;
        });

        // Init background
        const initRatio = (quizCountSlider.value - quizCountSlider.min) / (quizCountSlider.max - quizCountSlider.min);
        quizCountSlider.style.background = `linear-gradient(90deg, #a855f7 ${initRatio * 100}%, rgba(0,0,0,0.1) ${initRatio * 100}%)`;
    }

    if (btnQuizStart && quizSetupModal) {
        btnQuizStart.addEventListener('click', () => {
            quizSetupModal.classList.add('open');
            quizSetupModal.setAttribute('aria-hidden', 'false');
        });
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

            const selectedSize = parseInt(quizCountSlider.value, 10);
            const selectedCat = document.getElementById('quiz-category-select').value;
            const cefrInput = document.getElementById('quiz-cefr-input');
            const selectedQuizCefr = cefrInput ? cefrInput.value : 'all';
            const modeInput = document.getElementById('quiz-mode-input');
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

    function speakViaWebSpeech(text, btn) {
        if (!window.speechSynthesis) {
            clearSpeakingState();
            return;
        }
        const langTag = preferredAccent === 'UK' ? 'en-GB' : 'en-US';
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
        utterance.rate = text.includes(' ') ? 0.92 : 0.86;

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

    async function tryPlayDictionaryMp3(wordText, btn) {
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
            audioUrlCache.set(cacheKey, audioUrl);
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
            audio.onended = () => clearSpeakingState();
            audio.onerror = () => clearSpeakingState();
            if (btn) setSpeakingState(btn, 2800);
            await audio.play();
            return true;
        } catch (_) {
            return false;
        }
    }

    function speakWordOverride(text, isManual = false, targetBtn = null) {
        if (!text) return;
        if (isSoundMuted && !isManual) return;
        const clean = String(text).trim();
        if (!clean) return;
        try {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        } catch (_) {}

        const btn = targetBtn || (btnQuizSpeak && btnQuizSpeak.offsetParent !== null ? btnQuizSpeak : (btnSpeak && btnSpeak.offsetParent !== null ? btnSpeak : null));
        if (btn) setSpeakingState(btn, clean.includes(' ') ? 4200 : 2800);

        if (isManual && !clean.includes(' ') && navigator.onLine !== false) {
            tryPlayDictionaryMp3(clean, btn).then(played => {
                if (!played) speakViaWebSpeech(clean, btn);
            }).catch(() => speakViaWebSpeech(clean, btn));
        } else {
            speakViaWebSpeech(clean, btn);
        }
    }
    window.speakWordOverride = speakWordOverride;

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
            if (scheduleGoogleAutoSync) scheduleGoogleAutoSync();

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
        const spellInput = $('quiz-spelling-input');
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
        if (correctEl) correctEl.textContent = record.score;
        if (wrongEl) wrongEl.textContent = wrong;

        if (timeEl) {
            const m = Math.floor((record.timeSpent || 0) / 60);
            const s = (record.timeSpent || 0) % 60;
            timeEl.textContent = m > 0 ? `${m}m ${s}s` : `${s}s`;
        }

        if (ringFg) {
            const c = 2 * Math.PI * 52;
            const offset = c - (percent / 100) * c;
            ringFg.style.strokeDasharray = c;
            ringFg.style.strokeDashoffset = c;
            setTimeout(() => { ringFg.style.strokeDashoffset = offset; }, 100);
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
                            <button type="button" class="glass-btn-icon small speak-btn" data-speak-word="${escapeHtml(w.word)}" title="ฟังเสียง" style="width:34px; height:34px;"><span class="speak-svg" style="display:inline-flex;">${ICON_SVG.volOn}</span><span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i></span></button>
                        </div>
                    `;
                    listEl.appendChild(li);
                });
                listEl.onclick = (e) => {
                    const sBtn = e.target.closest('[data-speak-word]');
                    if (sBtn) {
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
            btn.title = isSoundMuted ? 'เปิดเสียง (Muted)' : 'ปิดเสียง (Sound On)';
            btn.setAttribute('aria-label', btn.title);
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

    /* =========================================================
     * Word List Interactive Actions (Audio + Expand Drawer)
     * ========================================================= */
    function wireWordListEvents(listEl) {
        if (!listEl) return;
        listEl.addEventListener('click', (e) => {
            const starBtn = e.target.closest('[data-star-key]');
            if (starBtn) {
                e.stopPropagation();
                toggleBookmark(starBtn.dataset.starKey);
                if (currentScreen === 'history' && historyFilter === 'starred') {
                    renderHistoryWords();
                }
                return;
            }
            const speakBtn = e.target.closest('[data-speak-word]');
            if (speakBtn) {
                e.stopPropagation();
                speakWordOverride(speakBtn.dataset.speakWord, true, speakBtn);
                return;
            }
            const speakExBtn = e.target.closest('[data-speak-example]');
            if (speakExBtn) {
                e.stopPropagation();
                speakWordOverride(speakExBtn.dataset.speakExample, true, speakExBtn);
                return;
            }
            const row = e.target.closest('.word-item');
            if (row) {
                row.classList.toggle('is-expanded');
                const arrow = row.querySelector('.word-item-expand-arrow');
                if (arrow) arrow.textContent = row.classList.contains('is-expanded') ? '▴' : '▾';
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
            const btn = e.target.closest('[data-goal]');
            if (!btn) return;
            const newTarget = Number(btn.dataset.goal);
            if (newTarget > 0) {
                dailyGoal.target = newTarget;
                saveDailyGoal(dailyGoal);
                updateDailyGoalUI();
                SoundFX.tick();
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

    const importInput = $('import-data-file');
    if (importInput) {
        importInput.addEventListener('change', (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (evt) => {
                try {
                    const parsed = JSON.parse(evt.target.result);
                    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON');
                    if (parsed.wordStatus) {
                        wordStatus = parsed.wordStatus;
                        storage.set(STORAGE.status, wordStatus);
                    }
                    if (Array.isArray(parsed.sessions)) {
                        sessions = parsed.sessions;
                        storage.set(STORAGE.sessions, sessions);
                    }
                    if (Array.isArray(parsed.quizHistory)) {
                        storage.set('oxford3000_quiz_history', parsed.quizHistory);
                    }
                    if (parsed.dailyGoal) {
                        dailyGoal = parsed.dailyGoal;
                        storage.set(STORAGE.dailyGoal, dailyGoal);
                    }
                    if (parsed.wordMastery) {
                        wordMastery = parsed.wordMastery;
                        storage.set(STORAGE.mastery, wordMastery);
                    }
                    if (Array.isArray(parsed.bookmarks)) {
                        bookmarkedWords = new Set(parsed.bookmarks.filter(k => keyToIndex.has(k)));
                        saveBookmarks();
                    }
                    if (parsed.activityLog && typeof parsed.activityLog === 'object') {
                        activityLog = parsed.activityLog;
                        saveActivityLog(activityLog);
                    }
                    renderWelcome();
                    renderHistory();
                    if (typeof renderQuizHistory === 'function') renderQuizHistory();
                    updateDailyGoalUI();
                    showToast('นำเข้าข้อมูลสำเร็จแล้ว');
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
    const quizModeInput = $('quiz-mode-input');
    if (quizModeSelector && quizModeInput) {
        quizModeSelector.addEventListener('click', (e) => {
            const card = e.target.closest('[data-quiz-mode]');
            if (!card) return;
            SoundFX.tick();
            quizModeSelector.querySelectorAll('.quiz-mode-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            quizModeInput.value = card.dataset.quizMode;
        });
    }

    const btnQuizHint = $('btn-quiz-hint');
    const btnQuizSubmitSpell = $('btn-quiz-submit-spell');
    const quizSpellingInput = $('quiz-spelling-input');

    if (btnQuizHint) {
        btnQuizHint.addEventListener('click', () => {
            if (!quizSession || quizAnswered) return;
            const w = wordsData[quizSession.indices[quizSession.currentIndex]];
            if (!w) return;
            quizSession.revealedChars = Math.min(w.word.length, (quizSession.revealedChars || 1) + 1);
            updateSpellingHintDisplay(w.word, quizSession.revealedChars);
            SoundFX.tick();
            if (quizSpellingInput) quizSpellingInput.focus();
        });
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
        if (quizSpellingInput) quizSpellingInput.disabled = true;

        const target = correctWordData.word.trim().toLowerCase();
        const isCorrect = typed === target;
        const feedbackEl = $('quiz-spell-feedback');
        const wKey = keyOf(correctWordData);

        recordDailyGoalProgress(1);
        updateSpellingHintDisplay(correctWordData.word, correctWordData.word.length);
        speakWordOverride(correctWordData.word, false);

        if (isCorrect) {
            SoundFX.known();
            quizSession.score++;
            quizScoreEl.textContent = quizSession.score;
            recordWordMastery(wKey, 'known');
            if (feedbackEl) {
                feedbackEl.hidden = false;
                feedbackEl.className = 'quiz-spell-feedback correct';
                feedbackEl.textContent = `✓ ถูกต้อง! "${correctWordData.word}" (${correctWordData.translation})`;
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
                feedbackEl.textContent = `✗ คำที่ถูกคือ "${correctWordData.word}" (คุณพิมพ์: "${typed}")`;
            }
        }

        setTimeout(() => {
            if (quizSession) {
                quizSession.currentIndex++;
                renderQuizQuestion();
            }
        }, 1400);
    }

    if (btnQuizSubmitSpell) {
        btnQuizSubmitSpell.addEventListener('click', submitQuizSpelling);
    }
    if (quizSpellingInput) {
        quizSpellingInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitQuizSpelling();
            }
        });
    }

    // 4. Quick Dictionary Search Command Palette (#quick-search-modal)
    const quickSearchModal = $('quick-search-modal');
    const quickSearchInput = $('quick-search-input');
    const quickSearchClose = $('quick-search-close');
    const quickSearchFilters = $('quick-search-filters');
    const quickSearchResults = $('quick-search-results');
    const quickSearchCount = $('quick-search-count');
    let qsActiveFilter = 'all';

    function openQuickSearch() {
        if (!quickSearchModal) return;
        quickSearchModal.classList.add('open');
        quickSearchModal.setAttribute('aria-hidden', 'false');
        renderQuickSearchResults();
        setTimeout(() => quickSearchInput && quickSearchInput.focus(), 40);
    }

    function closeQuickSearch() {
        if (!quickSearchModal) return;
        quickSearchModal.classList.remove('open');
        quickSearchModal.setAttribute('aria-hidden', 'true');
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

    // Clickable Word Family chips on Flashcard Back -> Open Quick Search directly on related word
    const cardWordFamilyEl = $('card-word-family');
    if (cardWordFamilyEl) {
        cardWordFamilyEl.addEventListener('click', (e) => {
            e.stopPropagation();
            const btn = e.target instanceof Element ? e.target.closest('.family-chip') : null;
            if (!btn) return;
            const targetWord = btn.getAttribute('data-family-word') || '';
            if (!targetWord) return;
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
            try { localStorage.setItem(STORAGE.accent, preferredAccent); } catch (_) {}
            syncAccentButtonsUI();
            SoundFX.tick();
            showToast(`เปลี่ยนสำเนียงเสียงอ่านเป็น ${preferredAccent === 'UK' ? 'อังกฤษ (UK)' : 'อเมริกัน (US)'}`);
        });
    });
    syncAccentButtonsUI();

    /* =========================================================
     * Pillar 7: Cloud Sync & Cross-Device Smart Merge Engine (OxSync)
     * ========================================================= */
    const SUPABASE_SCHEMA_SQL = `-- Run once in Supabase Dashboard -> SQL Editor
create table if not exists public.oxford_user_sync (
  sync_id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.oxford_user_sync enable row level security;
create policy "Allow anon read/write by room id"
  on public.oxford_user_sync
  for all
  to anon
  using (true)
  with check (true);`;

    const OxSync = {
        getConfig() {
            const raw = storage.get(STORAGE.sbConfig, null);
            return (raw && typeof raw === 'object') ? raw : { url: '', anonKey: '', syncId: '', lastSyncedAt: 0 };
        },
        /** @param {SyncConfig} cfg */
        saveConfig(cfg) {
            storage.set(STORAGE.sbConfig, cfg);
            this.refreshStatusUI();
        },
        buildPayload() {
            return {
                v: 1,
                exportedAt: Date.now(),
                status: { ...wordStatus },
                mastery: { ...wordMastery },
                bookmarks: Array.from(bookmarkedWords),
                sessions: sessions.slice(0, 60),
                activityLog: { ...activityLog },
                dailyGoal: { ...dailyGoal },
                prefs: { size: selectedSize, accent: preferredAccent }
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

            if (remote.activityLog && typeof remote.activityLog === 'object') {
                for (const [day, cnt] of Object.entries(remote.activityLog)) {
                    activityLog[day] = Math.max(Number(activityLog[day] || 0), Number(cnt || 0));
                }
                saveActivityLog(activityLog);
            }

            const today = getTodayDateString();
            if (remote.dailyGoal && remote.dailyGoal.date === today) {
                if (dailyGoal.date !== today) {
                    dailyGoal = { target: Number(remote.dailyGoal.target || 20), date: today, count: Number(remote.dailyGoal.count || 0) };
                } else {
                    dailyGoal.count = Math.max(Number(dailyGoal.count || 0), Number(remote.dailyGoal.count || 0));
                    dailyGoal.target = Math.max(Number(dailyGoal.target || 20), Number(remote.dailyGoal.target || 20));
                }
                saveDailyGoal(dailyGoal);
            }

            renderWelcome();
            updateDailyGoalUI();
            if (currentScreen === 'history') {
                renderHistory();
            }
            return {
                wordsAdded,
                totalTracked: Object.keys(wordStatus).length,
                sessionsAdded,
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
        },
        async pushToCloud() {
            const cfg = this.getConfig();
            if (!cfg.url || !cfg.anonKey || !cfg.syncId) {
                throw new Error('กรุณากรอก URL, Anon Key และ Sync Room ID ให้ครบ');
            }
            const cleanUrl = cfg.url.replace(/\/+$/, '');
            const endpoint = `${cleanUrl}/rest/v1/oxford_user_sync?on_conflict=sync_id`;
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': cfg.anonKey,
                    'Authorization': `Bearer ${cfg.anonKey}`,
                    'Prefer': 'resolution=merge-duplicates'
                },
                body: JSON.stringify({
                    sync_id: cfg.syncId,
                    payload: this.buildPayload(),
                    updated_at: new Date().toISOString()
                })
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            cfg.lastSyncedAt = Date.now();
            this.saveConfig(cfg);
            return true;
        },
        async pullFromCloud() {
            const cfg = this.getConfig();
            if (!cfg.url || !cfg.anonKey || !cfg.syncId) {
                throw new Error('กรุณากรอก URL, Anon Key และ Sync Room ID ให้ครบ');
            }
            const cleanUrl = cfg.url.replace(/\/+$/, '');
            const endpoint = `${cleanUrl}/rest/v1/oxford_user_sync?sync_id=eq.${encodeURIComponent(cfg.syncId)}&select=payload,updated_at`;
            const res = await fetch(endpoint, {
                headers: {
                    'apikey': cfg.anonKey,
                    'Authorization': `Bearer ${cfg.anonKey}`
                }
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const rows = await res.json();
            if (!Array.isArray(rows) || rows.length === 0 || !rows[0]?.payload) {
                throw new Error('ยังไม่มีข้อมูลสำหรับ Room ID นี้บน Cloud');
            }
            const merged = this.mergePayload(rows[0].payload);
            cfg.lastSyncedAt = Date.now();
            this.saveConfig(cfg);
            return merged;
        },
        refreshStatusUI() {
            const cfg = this.getConfig();
            const dot = $('sync-status-dot');
            const sub = $('sb-status-text');
            const hasCloud = !!(cfg.url && cfg.anonKey && cfg.syncId);
            if (dot) dot.classList.toggle('is-synced', hasCloud && !!cfg.lastSyncedAt);
            if (sub) {
                if (hasCloud && cfg.lastSyncedAt) {
                    sub.textContent = `ซิงก์ Cloud ล่าสุด ${new Date(cfg.lastSyncedAt).toLocaleTimeString('th-TH')}`;
                } else if (hasCloud) {
                    sub.textContent = 'ตั้งค่า Cloud แล้ว · พร้อมกด Push / Pull';
                } else {
                    sub.textContent = 'บันทึกในเครื่อง (Local-First) · พร้อม Smart Merge';
                }
            }
        }
    };

    const FIREBASE_SDK_BASE = 'https://www.gstatic.com/firebasejs/10.14.1';
    const FIRESTORE_RULES_SNIPPET = [
        'rules_version = \'2\';',
        'service cloud.firestore {',
        '  match /databases/{database}/documents {',
        '    match /oxford_users/{userId} {',
        '      allow read, write: if request.auth != null && request.auth.uid == userId;',
        '    }',
        '  }',
        '}'
    ].join('\n');

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
            /** @type {Promise<any>|null} */
            sdkPromise: null,
            /** @type {{ appMod: any, authMod: any, fsMod: any, app: any, auth: any, db: any }|null} */
            modules: null,
            /** @type {(() => void)|null} */
            unsubAuth: null,
            /** @type {ReturnType<typeof setTimeout>|null} */
            debounceTimer: null,
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

        /** @returns {{ config?: any, autoSync?: boolean, lastSyncedAt?: number, lastEmail?: string }} */
        readStore() {
            try {
                const raw = localStorage.getItem(STORAGE.fbConfig);
                return raw ? (JSON.parse(raw) || {}) : {};
            } catch (_) {
                return {};
            }
        },

        /** @param {{ config?: any, autoSync?: boolean, lastSyncedAt?: number, lastEmail?: string }} patch */
        saveStore(patch) {
            try {
                const next = { ...this.readStore(), ...patch };
                localStorage.setItem(STORAGE.fbConfig, JSON.stringify(next));
                return next;
            } catch (_) {
                return {};
            }
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
                try { this._state.unsubAuth(); } catch (_) {}
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
            try { localStorage.removeItem(STORAGE.fbConfig); } catch (_) {}
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
                        try { await appMod.deleteApp(existing); } catch (_) {}
                    }
                    const app = appMod.initializeApp(cfg, appName);
                    const auth = authMod.getAuth(app);
                    const db = fsMod.getFirestore(app);
                    try { await authMod.getRedirectResult(auth); } catch (_) {}
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
                    try { this._state.unsubAuth(); } catch (_) {}
                }
                this._state.listenerReadyKey = cfgKey;
                this._state.unsubAuth = mods.authMod.onAuthStateChanged(mods.auth, (fbUser) => {
                    if (fbUser) {
                        this._state.user = {
                            uid: fbUser.uid || '',
                            displayName: fbUser.displayName || '',
                            email: fbUser.email || '',
                            photoURL: fbUser.photoURL || ''
                        };
                        this._state.lastError = '';
                        this.saveStore({ lastEmail: this._state.user.email });
                        this.refreshUI();
                        if (this.getAutoSync()) {
                            this.syncWithFirestore({ silent: true });
                        }
                    } else {
                        this._state.user = null;
                        this.refreshUI();
                    }
                });
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
                const details = /** @type {HTMLDetailsElement|null} */ ($('fb-setup-details'));
                if (details) details.open = true;
                const input = $('fb-config-input');
                if (input) input.focus();
                showToast('กรุณาวาง Firebase Config ด้านล่างก่อนเข้าสู่ระบบ Google');
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
                const msg = err && err.message ? err.message : 'ไม่สามารถเข้าสู่ระบบ Google ได้';
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
            } catch (_) {}
            this._state.user = null;
            this._state.lastError = '';
            this.refreshUI();
            showToast('ออกจากระบบ Google แล้ว');
        },

        /** @param {{ silent?: boolean }} [opts] */
        async syncWithFirestore(opts = { silent: false }) {
            const silent = !!(opts && opts.silent);
            if (!this._state.user || this._state.syncing || this.isFileProtocol()) {
                return { ok: false, reason: 'unavailable' };
            }
            if (typeof navigator !== 'undefined' && navigator.onLine === false) {
                return { ok: false, reason: 'offline' };
            }
            this._state.syncing = true;
            this.refreshUI();
            try {
                const { fsMod, db } = await this.ensureSdk();
                const userRef = fsMod.doc(db, 'oxford_users', this._state.user.uid);
                const snap = await fsMod.getDoc(userRef);
                if (snap && snap.exists()) {
                    const remoteData = snap.data();
                    if (remoteData && remoteData.payload) {
                        OxSync.mergePayload(remoteData.payload);
                    }
                }
                const mergedPayload = OxSync.buildPayload();
                const now = Date.now();
                await fsMod.setDoc(userRef, {
                    uid: this._state.user.uid,
                    email: this._state.user.email || '',
                    updatedAt: now,
                    version: 1,
                    payload: mergedPayload
                }, { merge: true });
                this.saveStore({ lastSyncedAt: now, lastEmail: this._state.user.email || '' });
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
                this.refreshUI();
            }
        },

        scheduleAutoSync() {
            if (!this._state.user || !this.getAutoSync() || this.isFileProtocol()) return;
            if (this._state.debounceTimer) {
                clearTimeout(this._state.debounceTimer);
            }
            this._state.debounceTimer = setTimeout(() => {
                this._state.debounceTimer = null;
                this.syncWithFirestore({ silent: true });
            }, 2500);
        },

        refreshUI() {
            const warn = $('fb-file-protocol-warn');
            if (warn) warn.hidden = !this.isFileProtocol();

            const cfgInput = /** @type {HTMLTextAreaElement|null} */ ($('fb-config-input'));
            const customCfg = this.getCustomConfig();
            if (cfgInput && document.activeElement !== cfgInput) {
                cfgInput.value = customCfg ? JSON.stringify(customCfg, null, 2) : '';
            }

            const autoToggle = /** @type {HTMLInputElement|null} */ ($('google-auto-sync-toggle'));
            if (autoToggle) autoToggle.checked = this.getAutoSync();

            const signedOutBox = $('google-signed-out-box');
            const signedInBox = $('google-signed-in-box');
            const profilePhoto = /** @type {HTMLImageElement|null} */ ($('google-profile-photo'));
            const profileFallback = $('google-profile-fallback');
            const profileName = $('google-profile-name');
            const profileEmail = $('google-profile-email');
            const syncBadge = $('google-sync-badge');
            const headerAvatar = /** @type {HTMLImageElement|null} */ ($('sync-user-avatar'));
            const syncBtn = $('btn-welcome-sync');
            const cloudSvg = syncBtn ? /** @type {HTMLElement|null} */ (syncBtn.querySelector('.sync-cloud-svg')) : null;
            const user = this._state.user;

            if (user) {
                if (signedOutBox) signedOutBox.hidden = true;
                if (signedInBox) signedInBox.hidden = false;
                if (profileName) profileName.textContent = user.displayName || user.email || 'บัญชี Google';
                if (profileEmail) profileEmail.textContent = user.email || '';

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

                if (syncBadge) {
                    const store = this.readStore();
                    if (this._state.syncing) {
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

                if (headerAvatar) {
                    if (user.photoURL) {
                        headerAvatar.onerror = () => {
                            headerAvatar.hidden = true;
                            if (cloudSvg) cloudSvg.style.display = '';
                        };
                        headerAvatar.src = user.photoURL;
                        headerAvatar.hidden = false;
                        if (cloudSvg) cloudSvg.style.display = 'none';
                    } else {
                        headerAvatar.hidden = true;
                        if (cloudSvg) cloudSvg.style.display = '';
                    }
                }
            } else {
                if (signedOutBox) signedOutBox.hidden = false;
                if (signedInBox) signedInBox.hidden = true;
                if (headerAvatar) {
                    headerAvatar.hidden = true;
                    headerAvatar.removeAttribute('src');
                }
                if (cloudSvg) cloudSvg.style.display = '';
            }

            const dot = $('sync-status-dot');
            if (dot) {
                const sbCfg = OxSync.getConfig();
                const sbActive = !!(sbCfg.url && sbCfg.anonKey && sbCfg.syncId);
                dot.classList.toggle('online', !!(user || sbActive));
            }
        }
    };

    scheduleGoogleAutoSync = () => OxGoogleSync.scheduleAutoSync();

    const syncModal = $('sync-modal');
    function renderSyncSummary() {
        const box = $('sync-local-summary');
        if (box) {
            const c = countStatuses();
            box.innerHTML = `
                <div class="sync-stat-mini"><b class="tabular-nums">${c.known}</b><span>จำได้แล้ว</span></div>
                <div class="sync-stat-mini"><b class="tabular-nums">${bookmarkedWords.size}</b><span>คำปักหมุด</span></div>
                <div class="sync-stat-mini"><b class="tabular-nums">${sessions.length}</b><span>รอบที่ฝึก</span></div>`;
        }
        const cfg = OxSync.getConfig();
        const u = /** @type {HTMLInputElement|null} */ ($('sb-url'));
        const k = /** @type {HTMLInputElement|null} */ ($('sb-anon-key'));
        const sid = /** @type {HTMLInputElement|null} */ ($('sb-sync-id'));
        if (u && !u.value) u.value = cfg.url || '';
        if (k && !k.value) k.value = cfg.anonKey || '';
        if (sid && !sid.value) sid.value = cfg.syncId || '';
        OxSync.refreshStatusUI();
        OxGoogleSync.refreshUI();
    }

    function openSyncModal() {
        if (!syncModal) return;
        renderSyncSummary();
        syncModal.classList.add('open');
        syncModal.setAttribute('aria-hidden', 'false');
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

    document.querySelectorAll('.sync-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const paneId = /** @type {HTMLElement} */ (btn).dataset.syncPane;
            document.querySelectorAll('.sync-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
            document.querySelectorAll('.sync-pane').forEach(p => { /** @type {HTMLElement} */ (p).hidden = (p.id !== paneId); });
        });
    });

    const btnGenSyncCode = $('btn-gen-sync-code');
    if (btnGenSyncCode) {
        btnGenSyncCode.addEventListener('click', () => {
            const code = OxSync.encodeCode(OxSync.buildPayload());
            const out = /** @type {HTMLInputElement|null} */ ($('sync-code-output'));
            if (out) { out.value = code; out.select(); }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(code).catch(() => {});
            }
            showToast('สร้างและคัดลอกรหัสซิงก์แล้ว');
        });
    }

    const btnApplySyncCode = $('btn-apply-sync-code');
    if (btnApplySyncCode) {
        btnApplySyncCode.addEventListener('click', () => {
            const inp = /** @type {HTMLTextAreaElement|null} */ ($('sync-code-input'));
            const code = inp ? inp.value : '';
            if (!code.trim()) {
                showToast('กรุณาวางรหัส OX3K1:... ก่อนรวมข้อมูล');
                return;
            }
            try {
                const payload = OxSync.decodeCode(code);
                const res = OxSync.mergePayload(payload);
                if (inp) inp.value = '';
                renderSyncSummary();
                showToast(`Smart Merge สำเร็จ: เพิ่มคำใหม่ ${res.wordsAdded} คำ`);
            } catch (err) {
                showToast(err instanceof Error ? err.message : 'รหัสซิงก์ไม่ถูกต้อง');
            }
        });
    }

    const btnSbSave = $('btn-sb-save');
    if (btnSbSave) {
        btnSbSave.addEventListener('click', () => {
            const url = (/** @type {HTMLInputElement|null} */ ($('sb-url'))?.value || '').trim();
            const anonKey = (/** @type {HTMLInputElement|null} */ ($('sb-anon-key'))?.value || '').trim();
            const syncId = (/** @type {HTMLInputElement|null} */ ($('sb-sync-id'))?.value || '').trim();
            OxSync.saveConfig({ url, anonKey, syncId, lastSyncedAt: 0 });
            showToast('บันทึกการตั้งค่า Supabase แล้ว');
        });
    }

    const btnCopySbSql = $('btn-copy-sb-sql');
    if (btnCopySbSql) {
        btnCopySbSql.addEventListener('click', () => {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(SUPABASE_SCHEMA_SQL).catch(() => {});
            }
            showToast('คัดลอกคำสั่ง SQL สร้างตาราง Supabase แล้ว');
        });
    }

    const btnSbPush = /** @type {HTMLButtonElement|null} */ ($('btn-sb-push'));
    if (btnSbPush) {
        btnSbPush.addEventListener('click', async () => {
            btnSbPush.disabled = true;
            try {
                await OxSync.pushToCloud();
                renderSyncSummary();
                showToast('อัปโหลดข้อมูลขึ้น Cloud สำเร็จ');
            } catch (err) {
                showToast(`Push ไม่สำเร็จ: ${err instanceof Error ? err.message : 'Network error'}`);
            } finally {
                btnSbPush.disabled = false;
            }
        });
    }

    const btnSbPull = /** @type {HTMLButtonElement|null} */ ($('btn-sb-pull'));
    if (btnSbPull) {
        btnSbPull.addEventListener('click', async () => {
            btnSbPull.disabled = true;
            try {
                const res = await OxSync.pullFromCloud();
                renderSyncSummary();
                showToast(`ดึงและ Smart Merge สำเร็จ (+${res.wordsAdded} คำใหม่)`);
            } catch (err) {
                showToast(`Pull ไม่สำเร็จ: ${err instanceof Error ? err.message : 'Network error'}`);
            } finally {
                btnSbPull.disabled = false;
            }
        });
    }

    OxSync.refreshStatusUI();

    /** @param {'google'|'code'|'cloud'} tabName */
    function setActiveSyncTab(tabName) {
        const tabs = [
            { name: 'google', tab: $('sync-tab-google'), pane: $('sync-pane-google') },
            { name: 'code', tab: $('sync-tab-code'), pane: $('sync-pane-code') },
            { name: 'cloud', tab: $('sync-tab-cloud'), pane: $('sync-pane-cloud') }
        ];
        tabs.forEach((item) => {
            const active = item.name === tabName;
            if (item.tab) {
                item.tab.classList.toggle('active', active);
                item.tab.setAttribute('aria-selected', active ? 'true' : 'false');
            }
            if (item.pane) {
                item.pane.hidden = !active;
            }
        });
    }

    $('sync-tab-google')?.addEventListener('click', () => setActiveSyncTab('google'));
    $('sync-tab-code')?.addEventListener('click', () => setActiveSyncTab('code'));
    $('sync-tab-cloud')?.addEventListener('click', () => setActiveSyncTab('cloud'));
    $('btn-sb-save')?.addEventListener('click', () => setTimeout(() => OxGoogleSync.refreshUI(), 50));
    $('btn-sb-push')?.addEventListener('click', () => setTimeout(() => OxGoogleSync.refreshUI(), 150));
    $('btn-sb-pull')?.addEventListener('click', () => setTimeout(() => OxGoogleSync.refreshUI(), 150));

    $('btn-google-signin')?.addEventListener('click', () => {
        OxGoogleSync.signInWithGoogle();
    });

    $('btn-google-sync-now')?.addEventListener('click', () => {
        OxGoogleSync.syncWithFirestore({ silent: false });
    });

    $('btn-google-signout')?.addEventListener('click', () => {
        OxGoogleSync.signOut();
    });

    $('google-auto-sync-toggle')?.addEventListener('change', (e) => {
        const el = /** @type {HTMLInputElement|null} */ (e.target);
        if (!el) return;
        OxGoogleSync.setAutoSync(el.checked);
        if (el.checked && OxGoogleSync._state.user) {
            OxGoogleSync.syncWithFirestore({ silent: true });
        }
        showToast(el.checked ? 'เปิดซิงค์อัตโนมัติแล้ว' : 'ปิดซิงค์อัตโนมัติชั่วคราว');
    });

    $('btn-fb-save-config')?.addEventListener('click', () => {
        const input = /** @type {HTMLTextAreaElement|null} */ ($('fb-config-input'));
        const parsed = OxGoogleSync.parseConfig(input ? input.value : '');
        if (!parsed) {
            showToast('รูปแบบ Firebase Config ไม่ถูกต้อง กรุณาวางทั้งบล็อก firebaseConfig');
            return;
        }
        OxGoogleSync.saveConfig(parsed);
        if (input) input.value = JSON.stringify(parsed, null, 2);
        OxGoogleSync.refreshUI();
        OxGoogleSync.initAuthListener();
        showToast('บันทึก Firebase Config แล้ว กดเข้าสู่ระบบ Google ได้เลย');
    });

    $('btn-copy-fb-rules')?.addEventListener('click', async () => {
        let copied = false;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(FIRESTORE_RULES_SNIPPET);
                copied = true;
            }
        } catch (_) {}
        if (!copied) {
            const ta = document.createElement('textarea');
            ta.value = FIRESTORE_RULES_SNIPPET;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            try { copied = document.execCommand('copy'); } catch (_) {}
            ta.remove();
        }
        showToast(copied ? 'คัดลอก Firestore Rules แล้ว' : 'ไม่สามารถคัดลอกอัตโนมัติได้');
    });

    $('btn-fb-clear-config')?.addEventListener('click', () => {
        OxGoogleSync.clearConfig();
        const input = /** @type {HTMLTextAreaElement|null} */ ($('fb-config-input'));
        if (input) input.value = '';
        OxGoogleSync.refreshUI();
        showToast('ล้าง Firebase Config แล้ว');
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
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
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
     * Init
     * ========================================================= */
    renderWelcome();
    updateDailyGoalUI();

    // Expose a tiny API for automated testing / debugging
    window.__flashcardApp = {
        getSession: () => session && JSON.parse(JSON.stringify(session)),
        getQuizSession: () => quizSession && JSON.parse(JSON.stringify(quizSession)),
        getCounts: () => session && getSessionCounts(),
        getWordStatus: () => ({ ...wordStatus }),
        getSessions: () => JSON.parse(JSON.stringify(sessions)),
        getAccent: () => preferredAccent,
        setAccent: (acc) => {
            preferredAccent = acc === 'UK' ? 'UK' : 'US';
            try { localStorage.setItem(STORAGE.accent, preferredAccent); } catch (_) {}
            syncAccentButtonsUI();
        },
        getCefrFilter: () => selectedCefr,
        setCefrFilter: (lvl) => { selectedCefr = lvl || 'all'; syncWelcomeCefrUI(); },
        buildSyncCode: () => OxSync.encodeCode(OxSync.buildPayload()),
        applySyncCode: (code) => OxSync.mergePayload(OxSync.decodeCode(code)),
        parseFirebaseConfig: (raw) => OxGoogleSync.parseConfig(raw),
        getGoogleSyncState: () => {
            const cfg = OxGoogleSync.getConfig();
            return {
                hasConfig: !!cfg,
                hasCustomConfig: !!OxGoogleSync.getCustomConfig(),
                hasBuiltInConfig: !!FIREBASE_DEFAULT_CONFIG,
                projectId: cfg && cfg.projectId ? cfg.projectId : '',
                autoSync: OxGoogleSync.getAutoSync(),
                signedIn: !!OxGoogleSync._state.user,
                syncing: OxGoogleSync._state.syncing,
                email: OxGoogleSync._state.user ? OxGoogleSync._state.user.email : '',
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
        isAnimating: () => isAnimating,
        currentScreen: () => currentScreen
    };

    // Expose Targeted Practice
    window.startTargetedPractice = function (category) {
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
