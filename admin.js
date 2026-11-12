// @ts-check

(() => {
    'use strict';

    const FIREBASE_CONFIG = {
        apiKey: "AIzaSyAe95HLQAt1C4z0plmQmSz755tzb73kDm8",
        authDomain: "oxflashcard.firebaseapp.com",
        projectId: "oxflashcard",
        storageBucket: "oxflashcard.firebasestorage.app",
        messagingSenderId: "441794795147",
        appId: "1:441794795147:web:872eeee84189165e62e68e",
        measurementId: "G-36GSY6NCFC"
    };
    const FIREBASE_SDK_BASE = 'https://www.gstatic.com/firebasejs/10.14.1';
    const LOOKER_STORAGE_KEY = 'ox3k_admin_looker_url_v1';
    const THEME_STORAGE_KEY = 'ox3k_admin_theme_v1';

    const TOPIC_LABELS = {
        basics: 'พื้นฐาน & การสื่อสาร',
        people: 'ผู้คน & ครอบครัว',
        home: 'บ้าน & ชีวิตประจำวัน',
        food: 'อาหาร & เครื่องดื่ม',
        travel: 'การเดินทาง & เมือง',
        body: 'ร่างกาย & สุขภาพ',
        nature: 'ธรรมชาติ & สัตว์',
        feelings: 'อารมณ์ & ความคิด',
        education: 'การศึกษา & ศิลปะ',
        work: 'การงาน & ธุรกิจ',
        society: 'สังคม & เทคโนโลยี',
        actions: 'กริยา & คำอธิบาย'
    };
    const TOPIC_ORDER = Object.keys(TOPIC_LABELS);
    const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2'];

    /** @type {Map<string, any>} */
    const wordLookup = new Map();
    /** @type {Map<string, any>} */
    const wordOnlyLookup = new Map();
    const rawWords = Array.isArray(/** @type {any} */ (window).wordsData)
        ? /** @type {any[]} */ (/** @type {any} */ (window).wordsData)
        : [];
    const posSet = new Set();

    rawWords.forEach((w) => {
        if (!w || !w.word) return;
        const pos = String(w.partOfSpeech || 'noun').trim();
        const key = `${String(w.word).trim().toLowerCase()}|${pos.toLowerCase()}`;
        wordLookup.set(key, w);
        if (!wordOnlyLookup.has(String(w.word).trim().toLowerCase())) {
            wordOnlyLookup.set(String(w.word).trim().toLowerCase(), w);
        }
        if (pos) posSet.add(pos);
    });

    const state = {
        /** @type {any} */
        modules: null,
        /** @type {any} */
        user: null,
        isDemo: false,
        rangeDays: 14,
        /** @type {any[]} */
        rawUsers: [],
        /** @type {any|null} */
        analytics: null,
        /** @type {Record<string, any>} */
        charts: {}
    };

    /** @param {string} id */
    const $ = (id) => document.getElementById(id);

    /** @param {string} str */
    function escapeHtml(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    /** @param {string} msg */
    function showToast(msg) {
        const el = $('toast');
        if (!el) return;
        el.textContent = msg;
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2800);
    }

    /** @param {Date} d */
    function toLocalDateStr(d) {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }

    /** @param {number} ts */
    function formatDateTime(ts) {
        if (!ts || !Number.isFinite(ts)) return '-';
        try {
            return new Date(ts).toLocaleString('th-TH', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (_) {
            return '-';
        }
    }

    /** @param {number} totalSec */
    function formatDuration(totalSec) {
        const sec = Math.max(0, Math.round(Number(totalSec) || 0));
        if (sec < 60) return `${sec} วินาที`;
        const mins = Math.floor(sec / 60);
        if (mins < 60) return `${mins} นาที`;
        const hrs = Math.floor(mins / 60);
        const remMin = mins % 60;
        return remMin > 0 ? `${hrs} ชม. ${remMin} นาที` : `${hrs} ชม.`;
    }

    /** @param {string} key */
    function resolveWordInfo(key) {
        const raw = String(key || '').trim();
        const lower = raw.toLowerCase();
        if (wordLookup.has(lower)) return wordLookup.get(lower);
        const wordPart = lower.split('|')[0];
        if (wordOnlyLookup.has(wordPart)) return wordOnlyLookup.get(wordPart);
        const parts = raw.split('|');
        return {
            word: parts[0] || raw,
            partOfSpeech: parts[1] || '-',
            translation: '-',
            cefr: '-'
        };
    }

    /** @param {any} user */
    function buildFirestoreRulesSnippet(user) {
        const email = user && user.email ? user.email : 'your-admin-email@gmail.com';
        const uid = user && user.uid ? user.uid : 'YOUR_ADMIN_UID';
        return `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null && (
        request.auth.uid == "${uid}" ||
        (request.auth.token.email == "${email}" && request.auth.token.email_verified == true)
      );
    }

    match /oxford_users/{userId} {
      // ผู้ใช้ทั่วไปอ่าน/เขียนได้เฉพาะข้อมูลตัวเอง, แอดมินอ่านข้อมูลทุกผู้ใช้เพื่อแสดง Dashboard
      allow read: if (request.auth != null && request.auth.uid == userId) || isAdmin();
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}`;
    }

    function refreshRulesSnippets() {
        const snippet = buildFirestoreRulesSnippet(state.user);
        const gatePre = $('gate-rules-pre');
        const modalPre = $('modal-rules-pre');
        if (gatePre) gatePre.textContent = snippet;
        if (modalPre) modalPre.textContent = snippet;
    }

    function applyTheme(theme) {
        const resolved = theme === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', resolved);
        localStorage.setItem(THEME_STORAGE_KEY, resolved);
        const btn = $('btn-theme-toggle');
        if (btn) btn.textContent = resolved === 'dark' ? 'โหมดสว่าง' : 'โหมดมืด';
        if (state.analytics) renderAllCharts();
    }

    function isFileProtocol() {
        return typeof window !== 'undefined' && window.location && window.location.protocol === 'file:';
    }

    async function ensureFirebase() {
        if (isFileProtocol()) {
            throw new Error('ไม่สามารถเข้าสู่ระบบ Google ผ่าน file:// ได้ กรุณาเปิดผ่าน https:// (GitHub Pages) หรือ http://localhost');
        }
        if (state.modules) return state.modules;
        const [appMod, authMod, fsMod] = await Promise.all([
            // @ts-ignore - runtime ESM CDN import
            import(`${FIREBASE_SDK_BASE}/firebase-app.js`),
            // @ts-ignore - runtime ESM CDN import
            import(`${FIREBASE_SDK_BASE}/firebase-auth.js`),
            // @ts-ignore - runtime ESM CDN import
            import(`${FIREBASE_SDK_BASE}/firebase-firestore.js`)
        ]);
        const appName = 'oxflashcards-admin';
        const existing = appMod.getApps().find((a) => a && a.name === appName);
        const app = existing || appMod.initializeApp(FIREBASE_CONFIG, appName);
        const auth = authMod.getAuth(app);
        const db = fsMod.getFirestore(app);
        try {
            await authMod.getRedirectResult(auth);
        } catch (_) { }
        state.modules = { appMod, authMod, fsMod, app, auth, db };
        return state.modules;
    }

    function generateDemoUsers() {
        const sampleKeys = rawWords.slice(0, 120).map((w) => `${w.word}|${w.partOfSpeech || 'noun'}`);
        const fallbackKeys = [
            'abandon|verb', 'accurate|adjective', 'acknowledge|verb', 'acquire|verb',
            'adequate|adjective', 'ambition|noun', 'analyze|verb', 'anxious|adjective',
            'appreciate|verb', 'approach|noun', 'appropriate|adjective', 'assume|verb',
            'atmosphere|noun', 'attribute|verb', 'available|adjective', 'benefit|noun'
        ];
        const pool = sampleKeys.length >= 20 ? sampleKeys : fallbackKeys;
        const now = Date.now();
        const names = [
            'somchai.dev@gmail.com', 'nattapong.k@gmail.com', 'ploy.study@gmail.com',
            'arisa.en@gmail.com', 'tonkla.ox@gmail.com', 'kanokwan.th@gmail.com',
            'prawit.learn@gmail.com', 'mintra.vocab@gmail.com', 'kittipong.s@gmail.com',
            'jiraporn.bkk@gmail.com', 'thanawat.tu@gmail.com', 'waranya.cu@gmail.com'
        ];

        return names.map((email, uIdx) => {
            const daysAgoActive = uIdx < 4 ? 0 : (uIdx < 8 ? (uIdx % 5) + 1 : (uIdx % 14) + 6);
            const updatedAt = now - daysAgoActive * 86400000 - (uIdx * 3600000);

            /** @type {Record<string, string>} */
            const status = {};
            /** @type {Record<string, any>} */
            const mastery = {};
            const wordQuota = 35 + (uIdx * 11) % 70;
            for (let i = 0; i < wordQuota; i++) {
                const k = pool[(i * 7 + uIdx * 3) % pool.length];
                const isStruggle = (i % 4 === 0) || (pool.indexOf(k) < 10 && i % 2 === 0);
                status[k] = isStruggle ? 'review' : 'known';
                mastery[k] = {
                    streak: isStruggle ? 0 : (i % 5) + 1,
                    reviewCount: isStruggle ? ((i % 4) + 1 + (pool.indexOf(k) < 6 ? 2 : 0)) : (i % 6 === 0 ? 1 : 0),
                    lastStudied: new Date(updatedAt - (i % 5) * 86400000).toISOString(),
                    intervalDays: isStruggle ? 0 : 7,
                    nextReviewAt: updatedAt + 86400000
                };
            }

            /** @type {Record<string, number>} */
            const activityLog = {};
            /** @type {Record<string, number>} */
            const usageTimeLog = {};
            for (let d = 0; d < 25; d++) {
                if ((d + uIdx) % 3 === 0 || (d < 5 && uIdx < 6)) {
                    const dt = new Date(now - d * 86400000);
                    const ds = toLocalDateStr(dt);
                    activityLog[ds] = 12 + ((uIdx * 5 + d * 3) % 34);
                    usageTimeLog[ds] = 240 + ((uIdx * 130 + d * 95) % 1320);
                }
            }

            const sessions = [];
            for (let s = 0; s < 5; s++) {
                const endMs = updatedAt - s * 86400000 - ((uIdx + s) % 12) * 3600000;
                const durSec = 110 + ((uIdx + s) * 43) % 420;
                sessions.push({
                    id: `demo_${uIdx}_${s}`,
                    startedAt: endMs - durSec * 1000,
                    date: new Date(endMs).toISOString(),
                    mode: s % 2 === 0 ? 'random' : 'cefr',
                    size: 20,
                    known: pool.slice(0, 14),
                    review: pool.slice(14, 19),
                    skipped: 1
                });
            }

            const quizHistory = [];
            for (let q = 0; q < 3; q++) {
                const qMs = updatedAt - q * 2 * 86400000;
                const score = 12 + ((uIdx + q) % 8);
                const wrongPool = pool.slice(0, 20 - score).map((k) => {
                    const info = resolveWordInfo(k);
                    return { word: info.word, translation: info.translation, partOfSpeech: info.partOfSpeech };
                });
                quizHistory.push({
                    date: new Date(qMs).toISOString(),
                    score,
                    total: 20,
                    percent: Math.round((score / 20) * 100),
                    incorrectWords: wrongPool,
                    category: 'all',
                    timeSpent: 95 + ((uIdx * 19 + q * 31) % 210)
                });
            }

            /** @type {Record<string, any>} */
            const completedStages = {};
            const unitReach = Math.max(1, 12 - uIdx);
            for (let ui = 0; ui < Math.min(TOPIC_ORDER.length, unitReach); ui++) {
                const topic = TOPIC_ORDER[ui];
                const stCount = ui < unitReach - 1 ? 4 : 2;
                for (let st = 1; st <= stCount; st++) {
                    completedStages[`A1_${topic}_1_s${st}`] = {
                        lessonsDone: 4,
                        stars: (uIdx + st) % 3 + 1,
                        bestAcc: Math.min(100, 72 + ((uIdx * 7 + st * 5) % 28)),
                        completedAt: updatedAt - ui * 86400000,
                        legendary: ui === 0 && st === 1 && uIdx % 3 === 0
                    };
                }
            }

            return {
                uid: `demo_uid_${uIdx + 1}`,
                email,
                updatedAt,
                payload: {
                    v: 1,
                    status,
                    mastery,
                    bookmarks: pool.slice(0, 5),
                    sessions,
                    quizHistory,
                    activityLog,
                    usageTimeLog,
                    dailyGoal: { target: uIdx % 3 === 0 ? 30 : 20, date: toLocalDateStr(new Date(now)), count: uIdx < 4 ? 22 : 8 },
                    prefs: { size: uIdx % 4 === 0 ? 30 : 20, accent: uIdx % 3 === 0 ? 'UK' : 'US' },
                    learningPath: {
                        xp: 180 + (12 - uIdx) * 145,
                        streak: uIdx < 5 ? (7 - uIdx) : (uIdx % 3),
                        completedStages
                    }
                }
            };
        });
    }

    /**
     * @param {any[]} docs
     * @param {number} rangeDays
     */
    function computeAnalytics(docs, rangeDays = 14) {
        const now = Date.now();
        const todayStr = toLocalDateStr(new Date(now));
        const dayDates = [];
        const dayActiveSets = new Map();
        const dayWordCount = new Map();
        const dayUsageSec = new Map();

        for (let i = rangeDays - 1; i >= 0; i--) {
            const ds = toLocalDateStr(new Date(now - i * 86400000));
            dayDates.push(ds);
            dayActiveSets.set(ds, new Set());
            dayWordCount.set(ds, 0);
            dayUsageSec.set(ds, 0);
        }

        const wauCutoff = now - 7 * 86400000;
        const mauCutoff = now - 30 * 86400000;
        const h24Cutoff = now - 86400000;

        /** @type {Set<string>} */
        const dauSet = new Set();
        /** @type {Set<string>} */
        const wauSet = new Set();
        /** @type {Set<string>} */
        const mauSet = new Set();
        let active24h = 0;

        /** @type {Map<string, any>} */
        const wordAgg = new Map();
        /** @param {string} key */
        const getWordEntry = (key) => {
            const cleanKey = String(key || '').trim();
            const info = resolveWordInfo(cleanKey);
            const canonicalKey = `${String(info.word || cleanKey).toLowerCase()}|${String(info.partOfSpeech || '').toLowerCase()}`;
            if (!wordAgg.has(canonicalKey)) {
                wordAgg.set(canonicalKey, {
                    key: canonicalKey,
                    word: info.word || cleanKey,
                    translation: info.translation || '-',
                    pos: info.partOfSpeech || '-',
                    cefr: CEFR_ORDER.includes(info.cefr) ? info.cefr : '-',
                    reviewCountSum: 0,
                    quizMisses: 0,
                    sessionReviews: 0,
                    learnersSet: new Set(),
                    score: 0
                });
            }
            return wordAgg.get(canonicalKey);
        };

        /** @type {Record<string, { known: number, review: number }>} */
        const cefrMastery = {
            A1: { known: 0, review: 0 },
            A2: { known: 0, review: 0 },
            B1: { known: 0, review: 0 },
            B2: { known: 0, review: 0 }
        };

        /** @type {Record<string, { learners: Set<string>, stages: number, legendary: number, accSum: number, accCount: number }>} */
        const unitStats = {};
        TOPIC_ORDER.forEach((t) => {
            unitStats[t] = { learners: new Set(), stages: 0, legendary: 0, accSum: 0, accCount: 0 };
        });

        const peakHours = new Array(24).fill(0);
        const prefsSummary = { US: 0, UK: 0, sizeSum: 0, sizeCount: 0, goalTargetSum: 0, goalCount: 0, goalHitToday: 0 };

        let totalFlashcardSec = 0;
        let flashcardDurCount = 0;
        let totalQuizSec = 0;
        let quizDurCount = 0;
        let totalTrackedDailySec = 0;
        let totalSessions = 0;
        let totalQuizzes = 0;
        let quizAccSum = 0;
        let totalKnown = 0;
        let totalReview = 0;
        let totalXp = 0;
        let totalLearnStages = 0;
        let learnAccSum = 0;
        let learnAccCount = 0;

        const learners = [];

        docs.forEach((doc) => {
            const uid = String(doc.uid || doc.id || '');
            const email = String(doc.email || uid || 'ไม่ระบุอีเมล');
            const payload = (doc.payload && typeof doc.payload === 'object') ? doc.payload : {};
            const updatedAt = Number(doc.updatedAt || payload.exportedAt || 0);

            if (updatedAt >= h24Cutoff) active24h++;
            if (updatedAt >= wauCutoff) wauSet.add(uid);
            if (updatedAt >= mauCutoff) mauSet.add(uid);
            if (updatedAt && toLocalDateStr(new Date(updatedAt)) === todayStr) dauSet.add(uid);

            // Activity log
            const actLog = (payload.activityLog && typeof payload.activityLog === 'object') ? payload.activityLog : {};
            let userLatestDateMs = updatedAt;
            for (const [ds, cntRaw] of Object.entries(actLog)) {
                const cnt = Number(cntRaw || 0);
                if (cnt <= 0) continue;
                const dMs = Date.parse(`${ds}T12:00:00`);
                if (!Number.isNaN(dMs)) {
                    if (dMs > userLatestDateMs) userLatestDateMs = dMs;
                    if (ds === todayStr) dauSet.add(uid);
                    if (dMs >= wauCutoff) wauSet.add(uid);
                    if (dMs >= mauCutoff) mauSet.add(uid);
                }
                if (dayActiveSets.has(ds)) {
                    dayActiveSets.get(ds).add(uid);
                    dayWordCount.set(ds, dayWordCount.get(ds) + cnt);
                }
            }
            if (updatedAt) {
                const uDs = toLocalDateStr(new Date(updatedAt));
                if (dayActiveSets.has(uDs)) dayActiveSets.get(uDs).add(uid);
            }

            // Usage time log
            const uTimeLog = (payload.usageTimeLog && typeof payload.usageTimeLog === 'object') ? payload.usageTimeLog : {};
            let userTrackedSec = 0;
            for (const [ds, secRaw] of Object.entries(uTimeLog)) {
                const sec = Math.max(0, Math.min(28800, Number(secRaw || 0)));
                userTrackedSec += sec;
                totalTrackedDailySec += sec;
                if (dayUsageSec.has(ds)) {
                    dayUsageSec.set(ds, dayUsageSec.get(ds) + sec);
                }
            }

            // Word status & mastery
            const wStatus = (payload.status && typeof payload.status === 'object') ? payload.status : {};
            const wMastery = (payload.mastery && typeof payload.mastery === 'object') ? payload.mastery : {};
            let userKnown = 0;
            let userReview = 0;
            const userStruggleWords = [];

            for (const [k, stVal] of Object.entries(wStatus)) {
                const info = resolveWordInfo(k);
                const cefr = CEFR_ORDER.includes(info.cefr) ? info.cefr : null;
                if (stVal === 'known') {
                    userKnown++;
                    totalKnown++;
                    if (cefr) cefrMastery[cefr].known++;
                } else if (stVal === 'review') {
                    userReview++;
                    totalReview++;
                    if (cefr) cefrMastery[cefr].review++;
                    const entry = getWordEntry(k);
                    entry.learnersSet.add(uid);
                }
            }

            for (const [k, mVal] of Object.entries(wMastery)) {
                if (!mVal || typeof mVal !== 'object') continue;
                const rc = Number(mVal.reviewCount || 0);
                if (rc > 0) {
                    const entry = getWordEntry(k);
                    entry.reviewCountSum += rc;
                    entry.learnersSet.add(uid);
                    userStruggleWords.push({ key: k, word: entry.word, translation: entry.translation, reviewCount: rc });
                }
            }

            // Sessions (duration + peak hour + review list)
            const sessArr = Array.isArray(payload.sessions) ? payload.sessions : [];
            let userSessionSec = 0;
            sessArr.forEach((s) => {
                if (!s || typeof s !== 'object') return;
                totalSessions++;
                const endMs = s.date ? Date.parse(s.date) : 0;
                const startMs = Number(s.startedAt || 0);
                if (endMs && !Number.isNaN(endMs)) {
                    const hr = new Date(endMs).getHours();
                    if (hr >= 0 && hr < 24) peakHours[hr]++;
                    if (startMs > 0 && endMs > startMs) {
                        const sec = Math.round((endMs - startMs) / 1000);
                        if (sec >= 5 && sec <= 7200) {
                            totalFlashcardSec += sec;
                            flashcardDurCount++;
                            userSessionSec += sec;
                            if (userTrackedSec === 0) {
                                const ds = toLocalDateStr(new Date(endMs));
                                if (dayUsageSec.has(ds)) dayUsageSec.set(ds, dayUsageSec.get(ds) + sec);
                            }
                        }
                    }
                }
                if (Array.isArray(s.review)) {
                    s.review.forEach((rk) => {
                        const entry = getWordEntry(rk);
                        entry.sessionReviews++;
                        entry.learnersSet.add(uid);
                    });
                }
            });

            // Quiz history
            const qhArr = Array.isArray(payload.quizHistory) ? payload.quizHistory : [];
            let userQuizSec = 0;
            qhArr.forEach((q) => {
                if (!q || typeof q !== 'object') return;
                totalQuizzes++;
                if (typeof q.percent === 'number') quizAccSum += q.percent;
                const qMs = q.date ? Date.parse(q.date) : 0;
                if (qMs && !Number.isNaN(qMs)) {
                    const hr = new Date(qMs).getHours();
                    if (hr >= 0 && hr < 24) peakHours[hr]++;
                }
                const ts = Number(q.timeSpent || 0);
                if (ts > 0 && ts <= 3600) {
                    totalQuizSec += ts;
                    quizDurCount++;
                    userQuizSec += ts;
                    if (userTrackedSec === 0 && qMs && !Number.isNaN(qMs)) {
                        const ds = toLocalDateStr(new Date(qMs));
                        if (dayUsageSec.has(ds)) dayUsageSec.set(ds, dayUsageSec.get(ds) + ts);
                    }
                }
                if (Array.isArray(q.incorrectWords)) {
                    q.incorrectWords.forEach((iw) => {
                        const wStr = typeof iw === 'string' ? iw : (iw && iw.word ? iw.word : '');
                        if (!wStr) return;
                        const posStr = iw && iw.partOfSpeech ? iw.partOfSpeech : '';
                        const entry = getWordEntry(posStr ? `${wStr}|${posStr}` : wStr);
                        entry.quizMisses++;
                        entry.learnersSet.add(uid);
                    });
                }
            });

            // Learn Path
            const lp = (payload.learningPath && typeof payload.learningPath === 'object') ? payload.learningPath : {};
            const xp = Number(lp.xp || 0);
            const streak = Number(lp.streak || 0);
            totalXp += xp;
            const completedStages = (lp.completedStages && typeof lp.completedStages === 'object') ? lp.completedStages : {};
            const stageKeys = Object.keys(completedStages);
            totalLearnStages += stageKeys.length;
            stageKeys.forEach((sid) => {
                const st = completedStages[sid];
                if (!st || typeof st !== 'object') return;
                if (typeof st.bestAcc === 'number') {
                    learnAccSum += st.bestAcc;
                    learnAccCount++;
                }
                const parts = sid.split('_');
                const topic = parts[1];
                if (topic && unitStats[topic]) {
                    unitStats[topic].learners.add(uid);
                    unitStats[topic].stages++;
                    if (st.legendary) unitStats[topic].legendary++;
                    if (typeof st.bestAcc === 'number') {
                        unitStats[topic].accSum += st.bestAcc;
                        unitStats[topic].accCount++;
                    }
                }
            });

            // Preferences & Daily Goal
            const p = (payload.prefs && typeof payload.prefs === 'object') ? payload.prefs : {};
            if (p.accent === 'UK') prefsSummary.UK++;
            else prefsSummary.US++;
            if (typeof p.size === 'number' && p.size > 0) {
                prefsSummary.sizeSum += p.size;
                prefsSummary.sizeCount++;
            }
            const dg = (payload.dailyGoal && typeof payload.dailyGoal === 'object') ? payload.dailyGoal : {};
            const target = Number(dg.target || 20);
            prefsSummary.goalTargetSum += target;
            prefsSummary.goalCount++;
            if (dg.date === todayStr && Number(dg.count || 0) >= target) {
                prefsSummary.goalHitToday++;
            }

            const userStudyTimeSec = userTrackedSec > 0 ? userTrackedSec : (userSessionSec + userQuizSec);
            userStruggleWords.sort((a, b) => b.reviewCount - a.reviewCount);

            learners.push({
                uid,
                email,
                updatedAt: userLatestDateMs,
                xp,
                streak,
                known: userKnown,
                review: userReview,
                learnStages: stageKeys.length,
                quizzes: qhArr.length,
                sessionsCount: sessArr.length,
                studyTimeSec: userStudyTimeSec,
                trackedSec: userTrackedSec,
                accent: p.accent === 'UK' ? 'UK' : 'US',
                dailyGoalTarget: target,
                recentSessions: sessArr.slice(0, 5),
                recentQuizzes: qhArr.slice(0, 5),
                topStruggles: userStruggleWords.slice(0, 10)
            });
        });

        const strugglingWords = Array.from(wordAgg.values())
            .map((item) => {
                const learnersCount = item.learnersSet.size;
                const score = item.reviewCountSum * 2 + item.quizMisses * 3 + item.sessionReviews + learnersCount * 2;
                return {
                    key: item.key,
                    word: item.word,
                    translation: item.translation,
                    pos: item.pos,
                    cefr: item.cefr,
                    reviewCountSum: item.reviewCountSum,
                    quizMisses: item.quizMisses,
                    sessionReviews: item.sessionReviews,
                    learnersCount,
                    score
                };
            })
            .filter((w) => w.score > 0)
            .sort((a, b) => b.score - a.score);

        const totalUsageSec = totalTrackedDailySec > 0
            ? totalTrackedDailySec
            : (totalFlashcardSec + totalQuizSec);

        const unitFunnel = TOPIC_ORDER.map((topic) => {
            const u = unitStats[topic];
            return {
                topic,
                label: TOPIC_LABELS[topic],
                learners: u.learners.size,
                stages: u.stages,
                legendary: u.legendary,
                avgAcc: u.accCount ? Math.round(u.accSum / u.accCount) : 0
            };
        });

        return {
            totalUsers: docs.length,
            dau: dauSet.size,
            wau: wauSet.size,
            mau: mauSet.size,
            active24h,
            totalUsageSec,
            avgUsageSecPerUser: docs.length ? Math.round(totalUsageSec / docs.length) : 0,
            avgFlashcardSec: flashcardDurCount ? Math.round(totalFlashcardSec / flashcardDurCount) : 0,
            avgQuizSec: quizDurCount ? Math.round(totalQuizSec / quizDurCount) : 0,
            totalSessions,
            totalQuizzes,
            avgQuizAcc: totalQuizzes ? Math.round(quizAccSum / totalQuizzes) : 0,
            totalKnown,
            totalReview,
            avgXp: docs.length ? Math.round(totalXp / docs.length) : 0,
            totalLearnStages,
            avgLearnAcc: learnAccCount ? Math.round(learnAccSum / learnAccCount) : 0,
            daySeries: dayDates.map((ds) => ({
                date: ds,
                label: ds.slice(5),
                activeUsers: dayActiveSets.get(ds).size,
                wordsStudied: dayWordCount.get(ds),
                usageMinutes: Math.round((dayUsageSec.get(ds) || 0) / 60)
            })),
            peakHours,
            strugglingWords,
            unitFunnel,
            cefrMastery,
            prefsSummary,
            learners
        };
    }

    /** @param {string} key @param {any} config */
    function renderChart(key, config) {
        const canvas = /** @type {HTMLCanvasElement|null} */ ($(key));
        if (!canvas || typeof /** @type {any} */ (window).Chart !== 'function') return;
        if (state.charts[key]) {
            state.charts[key].destroy();
        }
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#cbd5e1' : '#475569';
        const gridColor = isDark ? 'rgba(148,163,184,0.12)' : 'rgba(15,23,42,0.07)';

        config.options = config.options || {};
        config.options.responsive = true;
        config.options.maintainAspectRatio = false;
        config.options.plugins = config.options.plugins || {};
        config.options.plugins.legend = config.options.plugins.legend || { labels: { color: textColor } };
        if (config.options.plugins.legend.labels) {
            config.options.plugins.legend.labels.color = textColor;
        }
        if (config.options.scales) {
            Object.values(config.options.scales).forEach((sc) => {
                sc.ticks = sc.ticks || {};
                sc.ticks.color = textColor;
                sc.grid = sc.grid || {};
                sc.grid.color = gridColor;
            });
        }
        const ChartCtor = /** @type {any} */ (window).Chart;
        state.charts[key] = new ChartCtor(canvas.getContext('2d'), config);
    }

    function renderOverview() {
        const a = state.analytics;
        if (!a) return;

        const kpiEl = $('overview-kpis');
        if (kpiEl) {
            kpiEl.innerHTML = [
                {
                    label: 'ผู้เรียนที่ซิงค์ทั้งหมด',
                    value: a.totalUsers.toLocaleString(),
                    sub: `ใช้งานใน 24 ชม. ล่าสุด: ${a.active24h} คน`
                },
                {
                    label: 'Active (DAU / WAU / MAU)',
                    value: `${a.dau} / ${a.wau} / ${a.mau}`,
                    sub: 'วันนี้ / 7 วัน / 30 วันล่าสุด'
                },
                {
                    label: 'เวลาใช้งานรวมในระบบ',
                    value: formatDuration(a.totalUsageSec),
                    sub: `เฉลี่ย ${formatDuration(a.avgUsageSecPerUser)} ต่อผู้เรียน`
                },
                {
                    label: 'คำที่จำได้ vs ค้างทบทวน',
                    value: `${a.totalKnown.toLocaleString()} / ${a.totalReview.toLocaleString()}`,
                    sub: `คำติดขัดเด่น: ${a.strugglingWords.length.toLocaleString()} คำ`
                },
                {
                    label: 'ความแม่นยำเฉลี่ย (Learn / Quiz)',
                    value: `${a.avgLearnAcc}% / ${a.avgQuizAcc}%`,
                    sub: `ผ่านด่าน Learn ${a.totalLearnStages.toLocaleString()} ครั้ง · Quiz ${a.totalQuizzes.toLocaleString()} ครั้ง`
                },
                {
                    label: 'XP เฉลี่ยต่อผู้เรียน',
                    value: `${a.avgXp.toLocaleString()} XP`,
                    sub: `รวม ${a.totalSessions.toLocaleString()} รอบ Flashcard`
                }
            ].map((k) => `
                <div class="kpi-card">
                    <div class="kpi-label">${escapeHtml(k.label)}</div>
                    <div class="kpi-value">${escapeHtml(k.value)}</div>
                    <div class="kpi-sub">${escapeHtml(k.sub)}</div>
                </div>
            `).join('');
        }

        const durEl = $('duration-breakdown');
        if (durEl) {
            durEl.innerHTML = `
                <div class="kpi-grid" style="margin-bottom:0;">
                    <div class="kpi-card" style="box-shadow:none;">
                        <div class="kpi-label">เวลาเฉลี่ยต่อรอบ Flashcard</div>
                        <div class="kpi-value" style="font-size:1.35rem;">${escapeHtml(formatDuration(a.avgFlashcardSec))}</div>
                        <div class="kpi-sub">อ้างอิงจาก ${a.totalSessions.toLocaleString()} รอบที่บันทึกไว้</div>
                    </div>
                    <div class="kpi-card" style="box-shadow:none;">
                        <div class="kpi-label">เวลาเฉลี่ยต่อรอบ Quiz</div>
                        <div class="kpi-value" style="font-size:1.35rem;">${escapeHtml(formatDuration(a.avgQuizSec))}</div>
                        <div class="kpi-sub">ความแม่นยำเฉลี่ย ${a.avgQuizAcc}% จาก ${a.totalQuizzes.toLocaleString()} ครั้ง</div>
                    </div>
                    <div class="kpi-card" style="box-shadow:none;">
                        <div class="kpi-label">ช่วงเวลายอดนิยมที่สุด</div>
                        <div class="kpi-value" style="font-size:1.35rem;">${(() => {
                            const maxV = Math.max(...a.peakHours);
                            if (maxV <= 0) return '-';
                            const h = a.peakHours.indexOf(maxV);
                            return `${String(h).padStart(2, '0')}:00–${String((h + 1) % 24).padStart(2, '0')}:00`;
                        })()}</div>
                        <div class="kpi-sub">เวลาที่มีผู้เรียนจบรอบมากที่สุด</div>
                    </div>
                    <div class="kpi-card" style="box-shadow:none;">
                        <div class="kpi-label">อัตราการกลับมาใช้รายสัปดาห์ (WAU/MAU)</div>
                        <div class="kpi-value" style="font-size:1.35rem;">${a.mau ? Math.round((a.wau / a.mau) * 100) : 0}%</div>
                        <div class="kpi-sub">Stickiness ของผู้เรียนในรอบ 30 วัน</div>
                    </div>
                </div>
            `;
        }
    }

    function renderAllCharts() {
        const a = state.analytics;
        if (!a) return;

        renderChart('chart-daily-activity', {
            type: 'bar',
            data: {
                labels: a.daySeries.map((d) => d.label),
                datasets: [
                    {
                        label: 'Active Users (คน)',
                        data: a.daySeries.map((d) => d.activeUsers),
                        backgroundColor: 'rgba(16, 185, 129, 0.72)',
                        borderRadius: 6,
                        yAxisID: 'y'
                    },
                    {
                        type: 'line',
                        label: 'คำศัพท์ที่ฝึก (คำ)',
                        data: a.daySeries.map((d) => d.wordsStudied),
                        borderColor: '#0ea5e9',
                        backgroundColor: 'rgba(14, 165, 233, 0.16)',
                        tension: 0.35,
                        fill: true,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                scales: {
                    y: { beginAtZero: true, position: 'left', title: { display: true, text: 'คน' } },
                    y1: { beginAtZero: true, position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'คำ' } }
                }
            }
        });

        renderChart('chart-usage-time', {
            type: 'line',
            data: {
                labels: a.daySeries.map((d) => d.label),
                datasets: [{
                    label: 'เวลาใช้งานรวมต่อวัน (นาที)',
                    data: a.daySeries.map((d) => d.usageMinutes),
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.18)',
                    tension: 0.35,
                    fill: true
                }]
            },
            options: {
                scales: { y: { beginAtZero: true } }
            }
        });

        renderChart('chart-peak-hours', {
            type: 'bar',
            data: {
                labels: a.peakHours.map((_, h) => `${String(h).padStart(2, '0')}:00`),
                datasets: [{
                    label: 'จำนวนรอบที่เรียน',
                    data: a.peakHours,
                    backgroundColor: 'rgba(245, 158, 11, 0.75)',
                    borderRadius: 5
                }]
            },
            options: {
                scales: { y: { beginAtZero: true } }
            }
        });

        const top15 = a.strugglingWords.slice(0, 15);
        renderChart('chart-struggling-words', {
            type: 'bar',
            data: {
                labels: top15.map((w) => `${w.word} (${w.cefr})`),
                datasets: [
                    {
                        label: 'กดทบทวนซ้ำ (ครั้ง)',
                        data: top15.map((w) => w.reviewCountSum),
                        backgroundColor: 'rgba(244, 63, 94, 0.78)',
                        borderRadius: 5
                    },
                    {
                        label: 'ตอบผิดใน Quiz (ครั้ง)',
                        data: top15.map((w) => w.quizMisses),
                        backgroundColor: 'rgba(245, 158, 11, 0.78)',
                        borderRadius: 5
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                scales: { x: { beginAtZero: true, stacked: true }, y: { stacked: true } }
            }
        });

        renderChart('chart-unit-funnel', {
            type: 'bar',
            data: {
                labels: a.unitFunnel.map((u) => u.label),
                datasets: [
                    {
                        label: 'จำนวนผู้เรียนที่เล่นถึงหน่วยนี้',
                        data: a.unitFunnel.map((u) => u.learners),
                        backgroundColor: 'rgba(14, 165, 233, 0.76)',
                        borderRadius: 6
                    },
                    {
                        label: 'ความแม่นยำเฉลี่ย (%)',
                        data: a.unitFunnel.map((u) => u.avgAcc),
                        backgroundColor: 'rgba(16, 185, 129, 0.65)',
                        borderRadius: 6
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                scales: { x: { beginAtZero: true } }
            }
        });

        renderChart('chart-cefr-mastery', {
            type: 'bar',
            data: {
                labels: CEFR_ORDER,
                datasets: [
                    {
                        label: 'จำได้แล้ว (Known)',
                        data: CEFR_ORDER.map((lvl) => a.cefrMastery[lvl].known),
                        backgroundColor: 'rgba(16, 185, 129, 0.80)',
                        borderRadius: 6
                    },
                    {
                        label: 'ต้องทบทวน (Review)',
                        data: CEFR_ORDER.map((lvl) => a.cefrMastery[lvl].review),
                        backgroundColor: 'rgba(244, 63, 94, 0.75)',
                        borderRadius: 6
                    }
                ]
            },
            options: {
                scales: { y: { beginAtZero: true } }
            }
        });

        renderChart('chart-prefs', {
            type: 'doughnut',
            data: {
                labels: ['สำเนียง US', 'สำเนียง UK'],
                datasets: [{
                    data: [a.prefsSummary.US, a.prefsSummary.UK],
                    backgroundColor: ['#0ea5e9', '#8b5cf6'],
                    borderWidth: 0
                }]
            }
        });
    }

    function getFilteredStrugglingWords() {
        const a = state.analytics;
        if (!a) return [];
        const q = String(/** @type {HTMLInputElement|null} */ ($('word-search'))?.value || '').trim().toLowerCase();
        const cefr = String(/** @type {HTMLSelectElement|null} */ ($('word-cefr'))?.value || 'all');
        const pos = String(/** @type {HTMLSelectElement|null} */ ($('word-pos'))?.value || 'all');
        const sortBy = String(/** @type {HTMLSelectElement|null} */ ($('word-sort'))?.value || 'score');

        const filtered = a.strugglingWords.filter((w) => {
            if (cefr !== 'all' && w.cefr !== cefr) return false;
            if (pos !== 'all' && w.pos.toLowerCase() !== pos.toLowerCase()) return false;
            if (q && !w.word.toLowerCase().includes(q) && !w.translation.toLowerCase().includes(q)) return false;
            return true;
        });

        filtered.sort((x, y) => {
            if (sortBy === 'reviews') return y.reviewCountSum - x.reviewCountSum;
            if (sortBy === 'quiz') return y.quizMisses - x.quizMisses;
            if (sortBy === 'learners') return y.learnersCount - x.learnersCount;
            return y.score - x.score;
        });
        return filtered;
    }

    function renderWordsTable() {
        const rows = getFilteredStrugglingWords();
        const tbody = $('words-tbody');
        const note = $('words-count-note');
        if (!tbody) return;

        const slice = rows.slice(0, 150);
        if (slice.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" class="muted" style="text-align:center; padding:24px;">ยังไม่พบข้อมูลคำศัพท์ที่ตรงตามเงื่อนไข</td></tr>';
        } else {
            tbody.innerHTML = slice.map((w, idx) => {
                const cefrCls = CEFR_ORDER.includes(w.cefr) ? `badge-${w.cefr.toLowerCase()}` : 'badge-pos';
                return `
                    <tr>
                        <td>${idx + 1}</td>
                        <td><strong>${escapeHtml(w.word)}</strong></td>
                        <td>${escapeHtml(w.translation)}</td>
                        <td><span class="badge badge-pos">${escapeHtml(w.pos)}</span></td>
                        <td><span class="badge ${cefrCls}">${escapeHtml(w.cefr)}</span></td>
                        <td class="num">${w.learnersCount.toLocaleString()}</td>
                        <td class="num">${w.reviewCountSum.toLocaleString()}</td>
                        <td class="num">${w.quizMisses.toLocaleString()}</td>
                        <td class="num"><span class="badge badge-hot">${w.score.toLocaleString()}</span></td>
                    </tr>
                `;
            }).join('');
        }
        if (note) {
            note.textContent = `แสดง ${slice.length} จากทั้งหมด ${rows.length} คำศัพท์ที่ผู้เรียนเคยติดขัดหรือทบทวน`;
        }
    }

    function renderOtherInsights() {
        const a = state.analytics;
        const box = $('other-insights-box');
        if (!a || !box) return;
        const avgSize = a.prefsSummary.sizeCount ? Math.round(a.prefsSummary.sizeSum / a.prefsSummary.sizeCount) : 20;
        const avgGoal = a.prefsSummary.goalCount ? Math.round(a.prefsSummary.goalTargetSum / a.prefsSummary.goalCount) : 20;
        const totalLegendary = a.unitFunnel.reduce((acc, u) => {
            const matched = state.rawUsers.reduce((sum, doc) => {
                const cs = doc.payload?.learningPath?.completedStages || {};
                return sum + Object.entries(cs).filter(([sid, st]) => sid.includes(`_${u.topic}_`) && st && st.legendary).length;
            }, 0);
            return acc + matched;
        }, 0);

        box.innerHTML = `
            <div class="kpi-grid" style="margin-bottom:0;">
                <div class="kpi-card" style="box-shadow:none;">
                    <div class="kpi-label">ขนาดรอบ Flashcard เฉลี่ย</div>
                    <div class="kpi-value" style="font-size:1.4rem;">${avgSize} คำ/รอบ</div>
                    <div class="kpi-sub">จากการตั้งค่าของผู้เรียนทั้งหมด</div>
                </div>
                <div class="kpi-card" style="box-shadow:none;">
                    <div class="kpi-label">เป้าหมายรายวันเฉลี่ย</div>
                    <div class="kpi-value" style="font-size:1.4rem;">${avgGoal} คำ/วัน</div>
                    <div class="kpi-sub">พิชิตเป้าวันนี้แล้ว ${a.prefsSummary.goalHitToday} คน</div>
                </div>
                <div class="kpi-card" style="box-shadow:none;">
                    <div class="kpi-label">ด่านระดับตำนาน (Legendary)</div>
                    <div class="kpi-value" style="font-size:1.4rem;">${totalLegendary.toLocaleString()} ด่าน</div>
                    <div class="kpi-sub">จำนวนด่านที่ผู้เรียนพิชิตระดับตำนาน</div>
                </div>
                <div class="kpi-card" style="box-shadow:none;">
                    <div class="kpi-label">คำแนะนำสำหรับปรับปรุงคำศัพท์</div>
                    <div class="kpi-value" style="font-size:1.1rem;">${escapeHtml(a.strugglingWords[0]?.word || '-')}</div>
                    <div class="kpi-sub">เป็นคำอันดับ 1 ที่ผู้เรียนติดขัดบ่อยสุด (${a.strugglingWords[0]?.score || 0} คะแนน)</div>
                </div>
            </div>
        `;
    }

    function getFilteredLearners() {
        const a = state.analytics;
        if (!a) return [];
        const q = String(/** @type {HTMLInputElement|null} */ ($('learner-search'))?.value || '').trim().toLowerCase();
        const sortBy = String(/** @type {HTMLSelectElement|null} */ ($('learner-sort'))?.value || 'updatedAt');

        const filtered = a.learners.filter((l) => {
            if (!q) return true;
            return l.email.toLowerCase().includes(q) || l.uid.toLowerCase().includes(q);
        });

        filtered.sort((x, y) => {
            if (sortBy === 'xp') return y.xp - x.xp;
            if (sortBy === 'studyTime') return y.studyTimeSec - x.studyTimeSec;
            if (sortBy === 'known') return y.known - x.known;
            if (sortBy === 'review') return y.review - x.review;
            if (sortBy === 'streak') return y.streak - x.streak;
            return y.updatedAt - x.updatedAt;
        });
        return filtered;
    }

    function renderLearnersTable() {
        const rows = getFilteredLearners();
        const tbody = $('learners-tbody');
        const note = $('learners-count-note');
        if (!tbody) return;

        if (rows.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" class="muted" style="text-align:center; padding:24px;">ไม่พบผู้เรียนที่ตรงกับคำค้นหา</td></tr>';
        } else {
            tbody.innerHTML = rows.map((l) => `
                <tr class="clickable" data-uid="${escapeHtml(l.uid)}">
                    <td>
                        <div><strong>${escapeHtml(l.email)}</strong></div>
                        <div class="small muted">${escapeHtml(l.uid)}</div>
                    </td>
                    <td>${escapeHtml(formatDateTime(l.updatedAt))}</td>
                    <td class="num">${l.xp.toLocaleString()}</td>
                    <td class="num">${l.streak} วัน</td>
                    <td class="num">${l.known.toLocaleString()}</td>
                    <td class="num">${l.review.toLocaleString()}</td>
                    <td class="num">${l.learnStages}</td>
                    <td class="num">${l.quizzes}</td>
                    <td class="num">${escapeHtml(formatDuration(l.studyTimeSec))}</td>
                </tr>
            `).join('');

            tbody.querySelectorAll('tr[data-uid]').forEach((tr) => {
                tr.addEventListener('click', () => {
                    const uid = tr.getAttribute('data-uid');
                    const found = rows.find((item) => item.uid === uid);
                    if (found) openLearnerModal(found);
                });
            });
        }

        if (note) {
            note.textContent = `แสดงผู้เรียนทั้งหมด ${rows.length} คน (คลิกที่แถวเพื่อดูประวัติและคำที่ติดขัดรายบุคคล)`;
        }
    }

    /** @param {any} learner */
    function openLearnerModal(learner) {
        const modal = $('learner-modal');
        const title = $('learner-modal-title');
        const sub = $('learner-modal-sub');
        const body = $('learner-modal-body');
        if (!modal || !body) return;
        if (title) title.textContent = learner.email || learner.uid;
        if (sub) sub.textContent = `UID: ${learner.uid} · ใช้งานล่าสุด: ${formatDateTime(learner.updatedAt)}`;

        const struggleHtml = learner.topStruggles.length
            ? learner.topStruggles.map((w) => `<span class="badge badge-hot" style="margin:3px;">${escapeHtml(w.word)} (${escapeHtml(w.translation)}) ×${w.reviewCount}</span>`).join('')
            : '<span class="muted small">ยังไม่มีคำที่ต้องทบทวนซ้ำ</span>';

        const quizHtml = learner.recentQuizzes.length
            ? learner.recentQuizzes.map((q) => `<li>${escapeHtml(formatDateTime(Date.parse(q.date || '')))} — ได้ <strong>${q.score}/${q.total} (${q.percent}%)</strong> · ใช้เวลา ${escapeHtml(formatDuration(q.timeSpent || 0))}</li>`).join('')
            : '<li class="muted">ยังไม่มีประวัติการทำแบบทดสอบ</li>';

        body.innerHTML = `
            <div class="kpi-grid" style="margin-bottom:16px;">
                <div class="kpi-card" style="box-shadow:none;"><div class="kpi-label">XP / Streak</div><div class="kpi-value" style="font-size:1.3rem;">${learner.xp.toLocaleString()} XP · ${learner.streak} วัน</div></div>
                <div class="kpi-card" style="box-shadow:none;"><div class="kpi-label">จำได้ / ทบทวน</div><div class="kpi-value" style="font-size:1.3rem;">${learner.known} / ${learner.review} คำ</div></div>
                <div class="kpi-card" style="box-shadow:none;"><div class="kpi-label">เวลาใช้งานรวม</div><div class="kpi-value" style="font-size:1.3rem;">${escapeHtml(formatDuration(learner.studyTimeSec))}</div></div>
                <div class="kpi-card" style="box-shadow:none;"><div class="kpi-label">สำเนียง / เป้าหมาย</div><div class="kpi-value" style="font-size:1.3rem;">${learner.accent} · ${learner.dailyGoalTarget} คำ/วัน</div></div>
            </div>
            <h4 style="margin:12px 0 8px;">คำศัพท์ที่ผู้เรียนคนนี้ติดขัดบ่อย</h4>
            <div style="margin-bottom:16px;">${struggleHtml}</div>
            <h4 style="margin:12px 0 8px;">แบบทดสอบล่าสุด</h4>
            <ul class="small" style="padding-left:20px; margin:0;">${quizHtml}</ul>
        `;
        modal.classList.add('open');
    }

    /** @param {string} filename @param {string[][]} rows */
    function downloadCsv(filename, rows) {
        const csvText = rows.map((row) => row.map((cell) => {
            const s = String(cell == null ? '' : cell).replace(/"/g, '""');
            return `"${s}"`;
        }).join(',')).join('\r\n');
        const blob = new Blob(['\uFEFF' + csvText], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    function renderAllDashboard() {
        state.analytics = computeAnalytics(state.rawUsers, state.rangeDays);
        renderOverview();
        renderAllCharts();
        renderWordsTable();
        renderOtherInsights();
        renderLearnersTable();
    }

    function showDashboardView() {
        $('auth-gate')?.classList.add('hidden');
        $('dashboard-root')?.classList.remove('hidden');
        $('demo-banner')?.classList.toggle('hidden', !state.isDemo);
        renderAllDashboard();
    }

    function showGateError(htmlMsg, showRules) {
        $('dashboard-root')?.classList.add('hidden');
        $('auth-gate')?.classList.remove('hidden');
        const alertEl = $('gate-alert');
        if (alertEl) {
            alertEl.innerHTML = htmlMsg;
            alertEl.classList.remove('hidden');
        }
        refreshRulesSnippets();
        $('gate-rules-box')?.classList.toggle('hidden', !showRules);
    }

    async function loadFirestoreUsers() {
        const mods = await ensureFirebase();
        const colRef = mods.fsMod.collection(mods.db, 'oxford_users');
        const snap = await mods.fsMod.getDocs(colRef);
        const docs = [];
        snap.forEach((docSnap) => {
            const data = docSnap.data() || {};
            docs.push({
                uid: data.uid || docSnap.id,
                email: data.email || '',
                updatedAt: data.updatedAt || 0,
                payload: data.payload || {}
            });
        });
        state.isDemo = false;
        state.rawUsers = docs;
        const sub = $('topbar-subtitle');
        if (sub) sub.textContent = `ข้อมูลจริงจาก Firestore · โหลดล่าสุด ${new Date().toLocaleTimeString('th-TH')} (${docs.length} บัญชี)`;
        showDashboardView();
    }

    function enterDemoMode() {
        state.isDemo = true;
        state.rawUsers = generateDemoUsers();
        const sub = $('topbar-subtitle');
        if (sub) sub.textContent = 'โหมดตัวอย่าง (Demo Mode · ข้อมูลจำลอง 12 บัญชี)';
        showDashboardView();
        showToast('กำลังแสดงตัวอย่าง Dashboard ด้วยข้อมูลจำลอง');
    }

    function syncUserUI() {
        const pill = $('user-pill');
        const signoutBtn = $('btn-signout');
        if (state.user) {
            if (pill) pill.textContent = `แอดมิน: ${state.user.email || state.user.uid}`;
            signoutBtn?.classList.remove('hidden');
        } else {
            if (pill) pill.textContent = 'ยังไม่ได้เข้าสู่ระบบ';
            signoutBtn?.classList.add('hidden');
        }
        refreshRulesSnippets();
    }

    async function handleAuthUser(fbUser) {
        if (!fbUser) {
            state.user = null;
            syncUserUI();
            if (!state.isDemo) {
                $('dashboard-root')?.classList.add('hidden');
                $('auth-gate')?.classList.remove('hidden');
            }
            return;
        }
        state.user = {
            uid: fbUser.uid || '',
            email: fbUser.email || '',
            displayName: fbUser.displayName || ''
        };
        syncUserUI();
        try {
            await loadFirestoreUsers();
        } catch (err) {
            const code = err && err.code ? String(err.code) : '';
            if (code === 'permission-denied') {
                showGateError(
                    `<div><strong>ไม่มีสิทธิ์อ่านข้อมูลทั้งหมดใน Firestore (permission-denied)</strong><br>บัญชี <code>${escapeHtml(state.user.email || state.user.uid)}</code> ยังไม่ได้ถูกเพิ่มใน Firestore Rules หรือยังไม่ได้เปิดสิทธิ์ <code>isAdmin()</code></div>`,
                    true
                );
            } else {
                showGateError(`<div><strong>โหลดข้อมูล Firestore ไม่สำเร็จ:</strong> ${escapeHtml(err && err.message ? err.message : String(err))}</div>`, false);
            }
        }
    }

    function initLookerEmbed() {
        const input = /** @type {HTMLInputElement|null} */ ($('looker-url-input'));
        const container = $('looker-container');
        const iframe = /** @type {HTMLIFrameElement|null} */ ($('looker-iframe'));
        const saved = localStorage.getItem(LOOKER_STORAGE_KEY) || '';
        const applyUrl = (url) => {
            const clean = String(url || '').trim();
            if (!clean) {
                container?.classList.add('hidden');
                if (iframe) iframe.src = 'about:blank';
                return;
            }
            try {
                const parsed = new URL(clean);
                const allowedHost = parsed.hostname === 'lookerstudio.google.com' || parsed.hostname === 'datastudio.google.com';
                if (parsed.protocol !== 'https:' || !allowedHost) {
                    showToast('อนุญาตเฉพาะลิงก์ https://lookerstudio.google.com/... เท่านั้น');
                    return;
                }
                if (iframe) iframe.src = parsed.href;
                container?.classList.remove('hidden');
            } catch (_) {
                showToast('รูปแบบ URL ไม่ถูกต้อง');
            }
        };

        if (saved && input) {
            input.value = saved;
            applyUrl(saved);
        }

        $('btn-save-looker')?.addEventListener('click', () => {
            const val = String(input?.value || '').trim();
            if (!val) {
                showToast('กรุณาวางลิงก์ Embed URL จาก Looker Studio');
                return;
            }
            localStorage.setItem(LOOKER_STORAGE_KEY, val);
            applyUrl(val);
            showToast('บันทึกลิงก์ Looker Studio แล้ว');
        });

        $('btn-clear-looker')?.addEventListener('click', () => {
            localStorage.removeItem(LOOKER_STORAGE_KEY);
            if (input) input.value = '';
            applyUrl('');
            showToast('ล้างลิงก์ Looker Studio แล้ว');
        });
    }

    function populatePosDropdown() {
        const sel = /** @type {HTMLSelectElement|null} */ ($('word-pos'));
        if (!sel) return;
        Array.from(posSet).sort().forEach((pos) => {
            const opt = document.createElement('option');
            opt.value = pos;
            opt.textContent = `POS: ${pos}`;
            sel.appendChild(opt);
        });
    }

    function bindEvents() {
        // Tabs
        document.querySelectorAll('.tab-btn[data-tab]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                document.querySelectorAll('.tab-btn').forEach((b) => b.classList.toggle('active', b === btn));
                document.querySelectorAll('.tab-panel').forEach((p) => p.classList.toggle('active', p.id === `tab-${tab}`));
            });
        });

        // Date range pills
        document.querySelectorAll('#range-pills .pill-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const days = Number(btn.getAttribute('data-days') || 14);
                state.rangeDays = days;
                document.querySelectorAll('#range-pills .pill-btn').forEach((b) => b.classList.toggle('active', b === btn));
                if (state.rawUsers.length) renderAllDashboard();
            });
        });

        // Word filters
        ['word-search', 'word-cefr', 'word-pos', 'word-sort'].forEach((id) => {
            $(id)?.addEventListener('input', renderWordsTable);
            $(id)?.addEventListener('change', renderWordsTable);
        });

        // Learner filters
        ['learner-search', 'learner-sort'].forEach((id) => {
            $(id)?.addEventListener('input', renderLearnersTable);
            $(id)?.addEventListener('change', renderLearnersTable);
        });

        // Exports
        $('btn-export-words')?.addEventListener('click', () => {
            const rows = getFilteredStrugglingWords();
            const csv = [['Word', 'Translation', 'Part of Speech', 'CEFR', 'Struggling Learners', 'Review Count', 'Quiz Misses', 'Struggle Score']];
            rows.forEach((w) => {
                csv.push([w.word, w.translation, w.pos, w.cefr, String(w.learnersCount), String(w.reviewCountSum), String(w.quizMisses), String(w.score)]);
            });
            downloadCsv(`oxflashcards_struggling_words_${toLocalDateStr(new Date())}.csv`, csv);
            showToast('ส่งออกไฟล์ CSV คำศัพท์แล้ว');
        });

        $('btn-export-learners')?.addEventListener('click', () => {
            const rows = getFilteredLearners();
            const csv = [['Email', 'UID', 'Last Active', 'XP', 'Streak (Days)', 'Known Words', 'Review Words', 'Learn Stages', 'Quizzes', 'Usage Seconds']];
            rows.forEach((l) => {
                csv.push([l.email, l.uid, formatDateTime(l.updatedAt), String(l.xp), String(l.streak), String(l.known), String(l.review), String(l.learnStages), String(l.quizzes), String(l.studyTimeSec)]);
            });
            downloadCsv(`oxflashcards_learners_${toLocalDateStr(new Date())}.csv`, csv);
            showToast('ส่งออกไฟล์ CSV รายชื่อผู้เรียนแล้ว');
        });

        // Sign In / Sign Out / Refresh / Demo
        $('btn-admin-signin')?.addEventListener('click', async () => {
            try {
                const mods = await ensureFirebase();
                const provider = new mods.authMod.GoogleAuthProvider();
                provider.setCustomParameters({ prompt: 'select_account' });
                try {
                    await mods.authMod.signInWithPopup(mods.auth, provider);
                } catch (popErr) {
                    const code = popErr && popErr.code ? String(popErr.code) : '';
                    if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
                        await mods.authMod.signInWithRedirect(mods.auth, provider);
                    } else if (code !== 'auth/popup-closed-by-user') {
                        throw popErr;
                    }
                }
            } catch (err) {
                showGateError(`<div>${escapeHtml(err && err.message ? err.message : String(err))}</div>`, false);
            }
        });

        $('btn-signout')?.addEventListener('click', async () => {
            try {
                const mods = await ensureFirebase();
                await mods.authMod.signOut(mods.auth);
            } catch (_) { }
            state.user = null;
            state.isDemo = false;
            syncUserUI();
            $('dashboard-root')?.classList.add('hidden');
            $('auth-gate')?.classList.remove('hidden');
            showToast('ออกจากระบบแล้ว');
        });

        $('btn-demo-mode')?.addEventListener('click', enterDemoMode);
        $('btn-switch-real')?.addEventListener('click', async () => {
            state.isDemo = false;
            if (!state.user) {
                $('dashboard-root')?.classList.add('hidden');
                $('auth-gate')?.classList.remove('hidden');
                return;
            }
            await handleAuthUser(state.user);
        });

        $('btn-refresh')?.addEventListener('click', async () => {
            if (state.isDemo) {
                enterDemoMode();
                return;
            }
            if (!state.user) {
                showToast('กรุณาเข้าสู่ระบบก่อนรีเฟรช');
                return;
            }
            await handleAuthUser(state.user);
            showToast('อัปเดตข้อมูลล่าสุดแล้ว');
        });

        // Theme toggle
        $('btn-theme-toggle')?.addEventListener('click', () => {
            const curr = document.documentElement.getAttribute('data-theme');
            applyTheme(curr === 'dark' ? 'light' : 'dark');
        });

        // Rules & Modals
        const copyRules = () => {
            const txt = buildFirestoreRulesSnippet(state.user);
            navigator.clipboard?.writeText(txt).then(
                () => showToast('คัดลอก Firestore Rules แล้ว'),
                () => showToast('คัดลอกไม่สำเร็จ กรุณากด Ctrl+C จากกล่องโค้ด')
            );
        };
        $('btn-copy-gate-rules')?.addEventListener('click', copyRules);
        $('btn-copy-modal-rules')?.addEventListener('click', copyRules);

        $('btn-rules-help')?.addEventListener('click', () => {
            refreshRulesSnippets();
            $('rules-modal')?.classList.add('open');
        });
        $('btn-close-rules-modal')?.addEventListener('click', () => $('rules-modal')?.classList.remove('open'));
        $('btn-close-learner-modal')?.addEventListener('click', () => $('learner-modal')?.classList.remove('open'));

        document.querySelectorAll('.modal-backdrop').forEach((bd) => {
            bd.addEventListener('click', (e) => {
                if (e.target === bd) bd.classList.remove('open');
            });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-backdrop.open').forEach((m) => m.classList.remove('open'));
            }
        });
    }

    async function boot() {
        applyTheme(localStorage.getItem(THEME_STORAGE_KEY) || 'light');
        populatePosDropdown();
        refreshRulesSnippets();
        initLookerEmbed();
        bindEvents();

        if (isFileProtocol()) {
            const desc = $('gate-desc');
            if (desc) {
                desc.innerHTML = 'ขณะนี้เปิดผ่าน <code>file://</code> จึงใช้ Google Login ไม่ได้ (สามารถกด <strong>ดูตัวอย่างด้วยข้อมูลจำลอง</strong> เพื่อทดลองหน้า Admin ได้ทันที หรือเปิดผ่าน <code>https://</code> GitHub Pages เพื่อเชื่อมต่อ Firestore จริง)';
            }
            return;
        }

        try {
            const mods = await ensureFirebase();
            mods.authMod.onAuthStateChanged(mods.auth, (fbUser) => {
                handleAuthUser(fbUser);
            });
        } catch (err) {
            showGateError(`<div>เชื่อมต่อ Firebase ไม่สำเร็จ: ${escapeHtml(err && err.message ? err.message : String(err))}</div>`, false);
        }
    }

    document.addEventListener('DOMContentLoaded', boot);
})();

