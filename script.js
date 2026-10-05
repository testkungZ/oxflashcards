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
    let selectedSize = SESSION_SIZES.includes(prefs.size) ? prefs.size : 20;

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
        history: $('history-screen')
    };

    // Welcome
    const overallKnownEl = $('overall-known');
    const overallReviewEl = $('overall-review');
    const overallUnseenEl = $('overall-unseen');
    const segOptions = Array.from(document.querySelectorAll('.seg-option'));
    const segIndicator = $('seg-indicator');
    const btnStart = $('btn-start');
    const btnResume = $('btn-resume');
    const resumeInfo = $('resume-info');
    const btnHistory = $('btn-history');

    // App
    const flashcard = $('flashcard');
    const wordEl = $('word');
    const partOfSpeechEl = $('part-of-speech');
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
    const filterChips = Array.from(document.querySelectorAll('.filter-chips .chip'));
    const filterReviewCount = $('filter-review-count');
    const filterKnownCount = $('filter-known-count');
    const wordSearch = $('word-search');
    const historyWordList = $('history-word-list');
    const btnPracticeReview = $('btn-practice-review');
    const practiceReviewLabel = $('practice-review-label');

    // Modal & toast
    const modal = $('modal');
    const modalTitle = $('modal-title');
    const modalMessage = $('modal-message');
    const modalConfirm = $('modal-confirm');
    const modalCancel = $('modal-cancel');
    const toastEl = $('toast');

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

    function updateSegmented() {
        const idx = SESSION_SIZES.indexOf(selectedSize);
        segOptions.forEach((btn, i) => {
            const active = i === idx;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-checked', String(active));
        });
        segIndicator.style.transform = `translateX(${idx * 100}%)`;
    }

    segOptions.forEach((btn) => {
        btn.addEventListener('click', () => {
            const size = Number(btn.dataset.count);
            if (!SESSION_SIZES.includes(size)) return;
            selectedSize = size;
            storage.set(STORAGE.prefs, { size });
            updateSegmented();
        });
    });

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

    function startSession(indices, mode) {
        if (!indices.length) {
            showToast('ไม่มีคำให้ฝึก');
            return;
        }
        session = {
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
            mode,
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
        sessionModeEl.textContent = session.mode === 'review' ? 'โหมดทบทวน' : 'สุ่มคำ';
        sessionModeEl.classList.toggle('review', session.mode === 'review');
        totalCardsEl.textContent = session.indices.length;
        buildDots();
        renderCard();
        updateSessionStats();
        showScreen('app');
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
                goTo(i + 1, true);
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
                goTo(firstUnanswered, true);
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
            flashcard.classList.remove('is-flipped');
            isFlipped = false;
            if (!skipFlipWait) {
                setTimeout(() => slideTransition(direction, newIndex), 300);
                return;
            }
        }
        slideTransition(direction, newIndex);
    }

    function slideTransition(direction, newIndex) {
        flashcard.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
        flashcard.style.opacity = '0';
        flashcard.style.transform = `translateX(${direction > 0 ? '-50px' : '50px'})`;

        setTimeout(() => {
            if (!session) { resetCardVisual(); return; }
            session.currentIndex = newIndex;
            saveActiveSession();
            renderCard();

            flashcard.style.transition = 'none';
            flashcard.style.transform = `translateX(${direction > 0 ? '50px' : '-50px'})`;
            void flashcard.offsetWidth; // force reflow

            flashcard.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease';
            flashcard.style.opacity = '1';
            flashcard.style.transform = 'translateX(0)';

            setTimeout(() => {
                flashcard.style.transition = '';
                flashcard.style.transform = '';
                flashcard.style.opacity = '';
                isAnimating = false;
            }, 400);
        }, 200);
    }

    function flipCard() {
        if (isAnimating || !session) return;
        isFlipped = !isFlipped;
        flashcard.classList.toggle('is-flipped', isFlipped);
    }

    flashcard.addEventListener('click', flipCard);
    btnNext.addEventListener('click', () => session && goTo(session.currentIndex + 1));
    btnPrev.addEventListener('click', () => session && goTo(session.currentIndex - 1));
    btnKnown.addEventListener('click', () => answer('known'));
    btnUnknown.addEventListener('click', () => answer('review'));
    btnAdvance.addEventListener('click', () => {
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

        if (e.key === 'ArrowRight') goTo(session.currentIndex + 1);
        else if (e.key === 'ArrowLeft') goTo(session.currentIndex - 1);
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
     * History screen
     * ========================================================= */
    function openHistory(returnTo) {
        historyReturnTo = returnTo;
        wordSearch.value = '';
        renderHistory();
        showScreen('history');
    }

    function renderHistory() {
        historySessionsCount.textContent = sessions.length;
        renderSessionList();
        renderHistoryWords();
    }

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
                                <span class="tag ${s.mode === 'review' ? 'review' : ''}">${s.mode === 'review' ? 'ทบทวน' : 'สุ่มคำ'}</span>
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

    function renderHistoryWords() {
        const c = countStatuses();
        filterReviewCount.textContent = c.review;
        filterKnownCount.textContent = c.known;
        filterChips.forEach((chip) => chip.classList.toggle('active', chip.dataset.filter === historyFilter));

        const q = wordSearch.value.trim().toLowerCase();
        const keys = Object.keys(wordStatus)
            .filter((k) => wordStatus[k] === historyFilter)
            .filter((k) => {
                if (!q) return true;
                const w = wordsData[keyToIndex.get(k)];
                return w.word.toLowerCase().includes(q) || String(w.translation).toLowerCase().includes(q);
            })
            .sort((a, b) => a.localeCompare(b));

        historyWordList.innerHTML = keys.length
            ? keys.map((k) => wordListItem(k, historyFilter)).join('')
            : `<li class="empty-state">${q ? 'ไม่พบคำที่ค้นหา' : historyFilter === 'known' ? 'ยังไม่มีคำที่จำได้' : 'ไม่มีคำที่ต้องทบทวน 🎉'}</li>`;

        const reviewCount = c.review;
        const n = Math.min(selectedSize, reviewCount);
        btnPracticeReview.hidden = historyFilter !== 'review' || reviewCount === 0;
        practiceReviewLabel.textContent = `ฝึกคำที่ต้องทบทวน (สุ่ม ${n} คำ)`;
    }

    historyTabs.forEach((t) => t.addEventListener('click', () => {
        const tab = t.dataset.tab;
        historyTabs.forEach((x) => {
            x.classList.toggle('active', x === t);
            x.setAttribute('aria-selected', String(x === t));
        });
        historySessionsPanel.hidden = tab !== 'sessions';
        historyWordsPanel.hidden = tab !== 'words';
    }));

    filterChips.forEach((chip) => chip.addEventListener('click', () => {
        historyFilter = chip.dataset.filter;
        renderHistoryWords();
    }));

    wordSearch.addEventListener('input', renderHistoryWords);

    btnPracticeReview.addEventListener('click', async () => {
        const pool = Object.keys(wordStatus)
            .filter((k) => wordStatus[k] === 'review')
            .map((k) => keyToIndex.get(k));
        if (!pool.length) return;
        if (loadActiveSession()) {
            const ok = await confirmDialog({
                title: 'เริ่มรอบทบทวน?',
                message: 'คุณมีรอบที่ยังเล่นไม่จบอยู่ ถ้าเริ่มรอบใหม่ รอบเดิมจะถูกยกเลิก',
                confirmText: 'เริ่มรอบทบทวน'
            });
            if (!ok) return;
        }
        startSession(pickRandom(pool, selectedSize), 'review');
    });

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

    let toastTimer = null;
    function showToast(msg) {
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
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
