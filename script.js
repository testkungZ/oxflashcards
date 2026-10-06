document.addEventListener('DOMContentLoaded', () => {
    /* =========================================================
     * Constants & storage helpers
     * ========================================================= */
    const STORAGE = {
        status: 'ox3k_wordStatus_v1',     // { "word|pos": "known" | "review" }
        sessions: 'ox3k_sessions_v1',     // [ session records ]
        active: 'ox3k_activeSession_v1',  // in-progress session (for resume)
        prefs: 'ox3k_prefs_v1'            // { size: 20 }
    };
    const SESSION_SIZES = [20, 30, 40, 50];
    const MAX_SESSIONS = 100;
    const VALID_STATUS = ['known', 'review'];

    const SoundFX = {
        audioCtx: null,
        init() {
            if (!this.audioCtx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) this.audioCtx = new AudioContext();
            }
            if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
        },
        playTone(frequency, type, attack, decay, vol = 0.3, slideToFreq = null) {
            if (!this.audioCtx) return;
            try {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
                if (slideToFreq) {
                    osc.frequency.exponentialRampToValueAtTime(slideToFreq, this.audioCtx.currentTime + attack + decay);
                }

                gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
                gain.gain.linearRampToValueAtTime(vol, this.audioCtx.currentTime + attack);
                gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + attack + decay);

                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(this.audioCtx.currentTime);
                osc.stop(this.audioCtx.currentTime + attack + decay);
            } catch (e) { }
        },
        known() {
            this.init();
            // เสียงแบบ Duolingo "Correct" (ตริ๊ง-ติ๊ง) 
            // ใช้ความถี่แบบคอร์ดสว่าง เช่น B5 -> E6
            this.playTone(987.77, 'sine', 0.02, 0.1, 0.15);
            setTimeout(() => this.playTone(1318.51, 'sine', 0.02, 0.4, 0.2), 120);
        },
        review() {
            this.init();
            // เสียงแบบ Duolingo "Incorrect" (ตึ-ดึง แบบทุ้ม)
            // ใช้คลื่น triangle ให้มีเนื้อเสียงทุ้ม และลดระดับเสียงลง
            this.playTone(349.23, 'triangle', 0.03, 0.15, 0.2);
            setTimeout(() => this.playTone(277.18, 'triangle', 0.03, 0.25, 0.2), 130);
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
                setTimeout(() => {
                    this.playTone(freq, type, 0.02, duration, vol);
                }, delay);
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
                setTimeout(() => {
                    this.playTone(1046.50 + Math.random() * 800, 'sine', 0.01, 0.1, 0.05);
                }, 300 + (i * 60) + Math.random() * 30);
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
        noun: { th: 'คำนาม', en: 'Noun', icon: 'N', c1: '#3b82f6', c2: '#06b6d4' },
        verb: { th: 'คำกริยา', en: 'Verb', icon: 'V', c1: '#8b5cf6', c2: '#ec4899' },
        adjective: { th: 'คำคุณศัพท์', en: 'Adjective', icon: 'Adj', c1: '#f59e0b', c2: '#f97316' },
        adverb: { th: 'คำกริยาวิเศษณ์', en: 'Adverb', icon: 'Adv', c1: '#10b981', c2: '#14b8a6' },
        other: { th: 'อื่น ๆ', en: 'Other', icon: '•', c1: '#64748b', c2: '#94a3b8' }
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

    let wordStatus = loadWordStatus();
    let sessions = loadSessions();
    const prefs = storage.get(STORAGE.prefs, {});
    let selectedSize = typeof prefs.size === 'number' && prefs.size >= 1 && prefs.size <= 50 ? prefs.size : 20;

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
        quiz: $('quiz-screen')
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
        $('total-words-label').textContent = totalWords.toLocaleString();

        const active = loadActiveSession();
        if (active) {
            const answered = active.answers.filter(Boolean).length;
            resumeInfo.textContent = `· ตอบแล้ว ${answered}/${active.indices.length}`;
            btnResume.hidden = false;
        } else {
            btnResume.hidden = true;
        }
        updateSegmented();
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

    btnHistory.addEventListener('click', () => openHistory('welcome'));

    /* =========================================================
     * Session lifecycle
     * ========================================================= */
    function startRandomSession() {
        const pool = Array.from({ length: totalWords }, (_, i) => i);
        startSession(pickRandom(pool, selectedSize), 'random');
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
        return 'สุ่มคำ';
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
        wordStatus[keyOf(wordsData[session.indices[i]])] = status;
        storage.set(STORAGE.status, wordStatus);
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

    function bump(el) {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
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

        session = null;
        resetCardVisual();
        lastSummary = record;
        renderSummary(record);

        // Play victory sound if at least some words were answered
        if (record.known.length > 0 || record.review.length > 0) {
            SoundFX.victory();
        }

        showScreen('summary');
    }

    /* =========================================================
     * Card rendering
     * ========================================================= */
    function renderCard() {
        const word = wordsData[session.indices[session.currentIndex]];
        wordEl.textContent = word.word;
        wordEl.classList.toggle('long', word.word.length > 11);
        partOfSpeechEl.textContent = word.partOfSpeech || 'word';
        translationEl.textContent = word.translation;

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

    function flipCard(e) {
        if (isAnimating || !session) return;
        // ป้องกันไม่ให้พลิกการ์ดเวลากดปุ่มฟังเสียง
        if (e && e.target && e.target.closest && e.target.closest('.speak-btn')) return;

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

        // Cancel any ongoing speech to reset the engine (helps prevent clipping at the start)
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';

        // Try to find a clear human-like female voice
        const preferredVoice = availableVoices.find(v =>
            v.name.includes('Google US English') ||
            v.name.includes('Zira') ||
            v.name.includes('Samantha') ||
            v.name.includes('Karen') ||
            (v.lang === 'en-US' && v.name.includes('Female'))
        );

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        } else {
            // Fallback: just try to get any EN-US voice
            const enVoice = availableVoices.find(v => v.lang.startsWith('en-'));
            if (enVoice) utterance.voice = enVoice;
        }

        utterance.rate = 0.85; // Slightly slower for clearer pronunciation

        // A tiny delay before speaking helps the engine catch up and prevents the first letter from being cut off
        setTimeout(() => {
            window.speechSynthesis.speak(utterance);
        }, 50);
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
        if (e.target.closest('.speak-btn')) return;
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
        if (deltaX < -50) { // Swipe Left (จำได้แล้ว)
            targetCard.style.borderColor = 'var(--success)';
            targetCard.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.4)';
        } else if (deltaX > 50) { // Swipe Right (ต้องทบทวน)
            targetCard.style.borderColor = 'var(--danger)';
            targetCard.style.boxShadow = '0 0 30px rgba(239, 68, 68, 0.4)';
        } else {
            targetCard.style.borderColor = '';
            targetCard.style.boxShadow = '';
        }
    });

    function resetSwipeVisuals() {
        flashcard.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        flashcard.style.transform = '';
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

        if (dragDeltaX < -threshold) { // Swipe Left
            resetSwipeVisuals();
            answer('known');
        } else if (dragDeltaX > threshold) { // Swipe Right
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
        if (currentScreen !== 'app' || !session) return;
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

        if (e.key === 'ArrowRight') { SoundFX.next(); goTo(session.currentIndex + 1); }
        else if (e.key === 'ArrowLeft') { SoundFX.next(); goTo(session.currentIndex - 1); }
        else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            flipCard();
        } else if (e.key === '1') answer('review');
        else if (e.key === '2') answer('known');
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

        let emoji, title;
        if (percent >= 90) { emoji = '🏆'; title = 'ยอดเยี่ยมมาก!'; }
        else if (percent >= 70) { emoji = '🎉'; title = 'เก่งมาก!'; }
        else if (percent >= 40) { emoji = '💪'; title = 'ทำได้ดี สู้ต่อไป!'; }
        else { emoji = '🌱'; title = 'ค่อย ๆ เรียนรู้ไปนะ'; }

        summaryEmojiEl.textContent = emoji;
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
            : `<li class="empty-state">${summaryTab === 'known' ? 'ยังไม่มีคำที่จำได้ในรอบนี้' : 'ไม่มีคำที่ต้องทบทวน เยี่ยมมาก! 🎉'}</li>`;
    }

    function wordListItem(key, status) {
        const idx = keyToIndex.get(key);
        if (idx === undefined) return '';
        const w = wordsData[idx];
        return `<li class="word-item ${status}">
            <span class="word-item-dot"></span>
            <div class="word-item-main">
                <span class="word-item-word">${escapeHtml(w.word)}</span>
                <span class="word-item-pos">${escapeHtml(w.partOfSpeech || 'word')}</span>
            </div>
            <span class="word-item-trans">${escapeHtml(w.translation)}</span>
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
        showScreen('history');
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
        requestAnimationFrame(moveDashIndicator);
        if (panelId === 'dash-overview') animateDashRing();
    }

    function moveDashIndicator() {
        const active = historyTabs.find((t) => t.classList.contains('active'));
        if (!active || !dashTabIndicator) return;
        dashTabIndicator.style.width = `${active.offsetWidth}px`;
        dashTabIndicator.style.transform = `translateX(${active.offsetLeft}px)`;
        active.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
    }
    window.addEventListener('resize', () => { if (currentScreen === 'history') moveDashIndicator(); });

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
        const days = new Set(sessions.map((s) => new Date(s.date).toDateString()));
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
        if (studied === 0) title = 'เริ่มต้นการเดินทาง 🌱';
        else if (dashMastery < 0.1) title = 'กำลังไปได้สวย 🚀';
        else if (dashMastery < 0.35) title = 'ก้าวหน้าอย่างต่อเนื่อง 💪';
        else if (dashMastery < 0.7) title = 'ใกล้เป็นเซียนแล้ว 🔥';
        else title = 'ระดับเซียน 🏆';
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
            : `<div class="empty-state big"><span class="empty-icon">📊</span><p>ยังไม่มีข้อมูลรอบการเล่น</p><small>เล่นให้จบ 1 รอบ กราฟจะแสดงที่นี่</small></div>`;

        // Mini category bars
        $('dash-mini-cats').innerHTML = stats.map((s) => `
            <div class="mini-cat" style="${catStyle(s)}">
                <span class="cat-icon sm">${s.icon}</span>
                <div class="mini-cat-main">
                    <div class="mini-cat-top"><b>${s.th}</b><span class="muted">${s.known.length}/${s.total.toLocaleString()} · ${fmtPct(s.mastery)}</span></div>
                    ${stackBar(s.known.length, s.review.length, s.total)}
                </div>
            </div>`).join('');
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
                tone: 'info', emoji: '🔍', kicker: 'ยังไม่มีข้อมูลพอสำหรับวิเคราะห์',
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
                    tone: 'bad', emoji: '⚠️', kicker: 'หมวดที่ต้องเสริมมากที่สุด',
                    title: weakest.th, sub: weakest.en,
                    text: `ต้องทบทวน <b>${weakest.review.length}</b> คำ · ความแม่นยำ <b>${fmtPct(weakest.accuracy)}</b>`,
                    cat: weakest.id, actionLabel: 'เสริมหมวดนี้'
                }));
            }
            if (strongest && strongest !== weakest) {
                cards.push(insightCard({
                    tone: 'good', emoji: '🏆', kicker: 'หมวดที่แข็งแรงที่สุด',
                    title: strongest.th, sub: strongest.en,
                    text: `จำได้ <b>${strongest.known.length}</b> คำ · ความแม่นยำ <b>${fmtPct(strongest.accuracy)}</b>`
                }));
            }
            if (leastExplored) {
                cards.push(insightCard({
                    tone: 'mid', emoji: '🧭', kicker: 'หมวดที่ยังเรียนน้อยที่สุด',
                    title: leastExplored.th, sub: leastExplored.en,
                    text: `เรียนไปแล้ว <b>${fmtPct(leastExplored.coverage)}</b> (${leastExplored.studied}/${leastExplored.total.toLocaleString()} คำ)`,
                    cat: leastExplored.id, actionLabel: 'สำรวจหมวดนี้'
                }));
            }
            if (totalReview > 0) {
                cards.push(insightCard({
                    tone: 'info', emoji: '🔁', kicker: 'คำค้างทบทวนทั้งหมด',
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
    });

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
                <span class="empty-icon">📚</span>
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
        const countFor = (id) => Object.keys(wordStatus).filter((k) =>
            wordStatus[k] === historyFilter && (id === 'all' || catOf(wordsData[keyToIndex.get(k)]) === id)).length;
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

    function renderHistoryWords() {
        const c = countStatuses();
        filterReviewCount.textContent = c.review;
        filterKnownCount.textContent = c.known;
        filterChips.forEach((chip) => chip.classList.toggle('active', chip.dataset.filter === historyFilter));
        renderCatFilter();

        const q = wordSearch.value.trim().toLowerCase();
        const keys = Object.keys(wordStatus)
            .filter((k) => wordStatus[k] === historyFilter)
            .filter(inCat)
            .filter((k) => {
                if (!q) return true;
                const w = wordsData[keyToIndex.get(k)];
                return w.word.toLowerCase().includes(q) || String(w.translation).toLowerCase().includes(q);
            })
            .sort((a, b) => a.localeCompare(b));

        historyWordList.innerHTML = keys.length
            ? keys.map((k) => wordListItem(k, historyFilter)).join('')
            : `<li class="empty-state">${q ? 'ไม่พบคำที่ค้นหา' : historyFilter === 'known' ? 'ยังไม่มีคำที่จำได้' : 'ไม่มีคำที่ต้องทบทวน 🎉'}</li>`;

        const reviewCount = Object.keys(wordStatus).filter((k) => wordStatus[k] === 'review' && inCat(k)).length;
        const n = Math.min(selectedSize, reviewCount);
        const catName = historyCatFilter === 'all' ? '' : `หมวด${CATEGORY_META[historyCatFilter].th} `;
        btnPracticeReview.hidden = historyFilter !== 'review' || reviewCount === 0;
        practiceReviewLabel.textContent = `ฝึกคำที่ต้องทบทวน ${catName}(สุ่ม ${n} คำ)`;
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

    btnPracticeReview.addEventListener('click', () => practiceReviewWords(historyCatFilter));

    btnHistoryBack.addEventListener('click', () => {
        showScreen(historyReturnTo === 'summary' && lastSummary ? 'summary' : 'welcome');
    });

    btnClearHistory.addEventListener('click', async () => {
        const ok = await confirmDialog({
            title: 'ล้างข้อมูลทั้งหมด?',
            message: 'ประวัติทุกรอบและสถานะคำศัพท์ทั้งหมด (จำได้/ต้องทบทวน) จะถูกลบถาวร',
            confirmText: 'ลบทั้งหมด',
            danger: true
        });
        if (!ok) return;
        sessions = [];
        wordStatus = {};
        lastSummary = null;
        storage.remove(STORAGE.sessions);
        storage.remove(STORAGE.status);
        storage.remove(STORAGE.active);
        renderHistory();
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
            listEl.innerHTML = `<div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 0.95rem;">คุณยังไม่เคยทำแบบทดสอบ<br>ลองกด "โหมดตอบคำถาม" จากหน้าแรกดูสิ!</div>`;
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
                incorrectHtml = `<div style="margin-top: 16px; padding-top: 12px; border-top: 1px dashed rgba(0,0,0,0.1); font-size: 0.85rem; color: #10b981; font-weight: 700; display: flex; align-items: center; gap: 6px;">
                    <span>✨</span> ทำคะแนนได้เต็มสมบูรณ์แบบ!
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
                analysisList.innerHTML = '<div class="muted" style="text-align:center; padding:20px;">ยังไม่มีข้อมูลมากพอ</div>';
            } else {
                Object.keys(catStats).forEach(c => {
                    const stats = catStats[c];
                    const pct = Math.round((stats.score / stats.total) * 100);
                    const meta = CATEGORY_META[c] || { th: 'รวม (Mixed)', color: '#8b5cf6', icon: '🌟' };

                    const div = document.createElement('div');
                    div.className = 'quiz-analysis-card';
                    div.innerHTML = `
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
                    `;
                    analysisList.appendChild(div);
                });
            }
        }

        // Update Quiz Mistakes Tab
        const mistakesList = document.getElementById('quiz-mistakes-list');
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
                mistakesList.innerHTML = '<div class="muted" style="text-align:center; padding:20px; grid-column: 1/-1;">ยอดเยี่ยม! คุณยังไม่มีคำศัพท์ที่ตอบผิดเลย 🎉</div>';
            } else {
                sortedMistakes.forEach(w => {
                    const meta = CATEGORY_META[w.category] || CATEGORY_META['noun'];
                    const div = document.createElement('div');
                    div.className = 'word-card';
                    div.innerHTML = `
                        <div class="word-card-head">
                            <h4 class="word-en">${w.word}</h4>
                            <div class="word-tag" style="color: ${meta.color}; background: ${meta.color}15;">${meta.icon} ${meta.th}</div>
                        </div>
                        <p class="word-th">${w.meaning}</p>
                        <div style="margin-top: 12px; font-size: 0.8rem; color: #ef4444; background: rgba(239,68,68,0.1); padding: 4px 10px; border-radius: 8px; display: inline-block; font-weight: 600;">
                            ตอบผิด ${w.count} ครั้ง
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
            statTotalTime.textContent = mins > 0 ? `${mins}น ${secs}ว` : `${secs}ว`;
        }

        // Render Trend Chart
        const chartEl = document.getElementById('quiz-trend-chart');
        if (chartEl) {
            if (quizHistory.length === 0) {
                chartEl.innerHTML = '<div class="muted" style="text-align:center; padding:20px;">ยังไม่มีข้อมูลมากพอ</div>';
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

            let pool = [];
            if (selectedCat === 'all') {
                pool = Array.from({ length: totalWords }, (_, i) => i);
            } else {
                pool = Array.from({ length: totalWords }, (_, i) => i).filter(i => wordsData[i].partOfSpeech === selectedCat);
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
            // Use existing speak engine
            speakWordOverride(word);
        });
    }

    function speakWordOverride(text) {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const preferredVoice = availableVoices.find(v =>
            v.name.includes('Google US English') ||
            v.name.includes('Zira') ||
            v.name.includes('Samantha') ||
            v.name.includes('Karen') ||
            (v.lang === 'en-US' && v.name.includes('Female'))
        );
        if (preferredVoice) utterance.voice = preferredVoice;
        else {
            const enVoice = availableVoices.find(v => v.lang.startsWith('en-'));
            if (enVoice) utterance.voice = enVoice;
        }
        utterance.rate = 0.85;
        setTimeout(() => window.speechSynthesis.speak(utterance), 50);
    }

    function renderQuizQuestion() {
        if (!quizSession) return;
        if (quizSession.currentIndex >= quizSession.indices.length) {
            // End of quiz
            SoundFX.victory();
            showToast(`สุดยอด! คุณทำคะแนนได้ ${quizSession.score} / ${quizSession.indices.length} 🎉`);

            // Save Quiz History
            let quizHistory = [];
            try {
                const stored = localStorage.getItem('oxford3000_quiz_history');
                if (stored) quizHistory = JSON.parse(stored);
            } catch (e) { }

            const timeSpentSec = Math.round((Date.now() - quizSession.startTime) / 1000);

            quizHistory.unshift({
                date: new Date().toISOString(),
                score: quizSession.score,
                total: quizSession.indices.length,
                percent: Math.round((quizSession.score / quizSession.indices.length) * 100),
                incorrectWords: quizSession.incorrectWords,
                category: quizSession.category || 'all',
                timeSpent: timeSpentSec
            });

            if (quizHistory.length > 50) quizHistory.pop(); // Keep last 50
            localStorage.setItem('oxford3000_quiz_history', JSON.stringify(quizHistory));

            // Refresh dashboard
            if (typeof renderHistory === 'function') renderHistory();
            if (typeof renderQuizHistory === 'function') renderQuizHistory();

            quizSession = null;
            showScreen('welcome');
            return;
        }

        quizAnswered = false;
        const index = quizSession.indices[quizSession.currentIndex];
        const correctWord = wordsData[index];

        quizWord.textContent = correctWord.word;
        document.getElementById('quiz-pos').textContent = correctWord.partOfSpeech;
        quizCurrentIndex.textContent = quizSession.currentIndex + 1;
        quizTotal.textContent = quizSession.indices.length;
        quizScoreEl.textContent = quizSession.score;
        quizProgressFill.style.width = `${((quizSession.currentIndex) / quizSession.indices.length) * 100}%`;

        // Generate 3 wrong options, ensuring translations are unique and not the same as the correct word's translation
        const options = [{ text: correctWord.translation, isCorrect: true }];
        const usedTranslations = new Set([correctWord.translation]);

        let pool = Array.from({ length: totalWords }, (_, i) => i).filter(i => i !== index);
        // Shuffle pool once
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        for (let i = 0; i < pool.length && options.length < 4; i++) {
            const w = wordsData[pool[i]];
            if (w && w.translation && !usedTranslations.has(w.translation)) {
                usedTranslations.add(w.translation);
                options.push({ text: w.translation, isCorrect: false });
            }
        }

        // Shuffle options
        options.sort(() => Math.random() - 0.5);
        quizOptionsData = options;

        quizOptions.innerHTML = '';
        const prefixes = ['A', 'B', 'C', 'D'];
        options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-btn';
            btn.innerHTML = `<span style="display: flex; align-items: center; gap: 12px; width: 100%;"><span style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 12px; background: rgba(255, 255, 255, 0.6); color: var(--primary); font-weight: 800; font-size: 1.1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">${prefixes[idx]}</span><span style="flex: 1; text-align: left; padding-right: 12px;">${opt.text}</span></span>`;
            btn.onclick = () => handleQuizAnswer(idx, btn);
            quizOptions.appendChild(btn);
        });

        // Autoplay sound
        speakWordOverride(correctWord.word);
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

        if (isCorrect) {
            SoundFX.known();
            btnElement.classList.add('correct');
            quizSession.score++;
            quizScoreEl.textContent = quizSession.score;
        } else {
            SoundFX.review();
            btnElement.classList.add('wrong');
            if (correctBtn) correctBtn.classList.add('correct');
            quizSession.incorrectWords.push({
                word: correctWordData.word,
                translation: correctWordData.translation
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
     * Init
     * ========================================================= */
    renderWelcome();

    // Expose a tiny API for automated testing / debugging
    window.__flashcardApp = {
        getSession: () => session && JSON.parse(JSON.stringify(session)),
        getCounts: () => session && getSessionCounts(),
        getWordStatus: () => ({ ...wordStatus }),
        getSessions: () => JSON.parse(JSON.stringify(sessions)),
        isAnimating: () => isAnimating,
        currentScreen: () => currentScreen
    };
});
