/* =========================================================
 * Oxflashcards Real Grammar Exam Bank (90 Authentic Questions)
 * Independent from lesson drills (grammar-data.js) — Zero rule hints
 * Coverage: All 30 lessons (g01–g30), 3 questions per lesson
 * 4 Standardized Parts: completion (40), error_id (24), passage (14), structure (12)
 * ========================================================= */

const GRAMMAR_EXAM_PRESETS = {
  all30: {
    id: 'all30',
    title: '📝 ข้อสอบใหญ่ Grammar (30 ข้อ)',
    count: 30,
    minutes: 25,
    desc: '30 ข้อ · 25 นาที · ครบทุกบท 1–30 (A0–C1)'
  },
  all15: {
    id: 'all15',
    title: '⚡ สอบวัดระดับด่วน (15 ข้อ)',
    count: 15,
    minutes: 12,
    desc: '15 ข้อ · 12 นาที · สุ่มคละทั้ง 3 เฟส ครบ 4 พาร์ต'
  },
  phase1: {
    id: 'phase1',
    title: '🌱 สอบจบ Phase 1 (A0–A2)',
    count: 20,
    minutes: 15,
    desc: '20 ข้อ · 15 นาที · บทที่ 1–10 (พื้นฐานคำ & ประโยค)'
  },
  phase2: {
    id: 'phase2',
    title: '⚡ สอบจบ Phase 2 (A1–B2)',
    count: 20,
    minutes: 18,
    desc: '20 ข้อ · 18 นาที · บทที่ 11–19 (12 Tenses & กริยา)'
  },
  phase3: {
    id: 'phase3',
    title: '🎓 สอบจบ Phase 3 (B1–C1)',
    count: 20,
    minutes: 20,
    desc: '20 ข้อ · 20 นาที · บทที่ 20–30 (โครงสร้างกลาง–สูง)'
  },
  error_id: {
    id: 'error_id',
    title: '🔍 สอบจับผิด A/B/C/D (Error ID)',
    count: 15,
    minutes: 12,
    desc: '15 ข้อ · 12 นาที · แนวข้อสอบ CU-TEP / A-Level'
  }
};

const GRAMMAR_EXAM_BANK = [
  /* ===================== PHASE 1 (g01–g10 · 30 Questions) ===================== */

  // --- g01: Parts of Speech ---
  {
    id: 'ex001',
    lessonId: 'g01',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The regional director made a ___ decision to expand into the Southeast Asian market.',
    options: ['strategy', 'strategic', 'strategically', 'strategize'],
    answerIndex: 1,
    spokenEn: 'The regional director made a strategic decision to expand into the Southeast Asian market.',
    explanationTh: 'หน้าคำนาม decision ต้องใช้ Adjective คือ strategic (เชิงกลยุทธ์) ส่วน strategy เป็น Noun, strategically เป็น Adverb และ strategize เป็น Verb'
  },
  {
    id: 'ex002',
    lessonId: 'g01',
    phase: 'phase1',
    cefr: 'A1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'All ' },
      { label: 'A', text: 'guests' },
      { text: ' must remain ' },
      { label: 'B', text: 'quietly' },
      { text: ' inside the theater ' },
      { label: 'C', text: 'during' },
      { text: ' the live ' },
      { label: 'D', text: 'performance' },
      { text: '.' }
    ],
    options: ['guests', 'quietly', 'during', 'performance'],
    answerIndex: 1,
    correctionText: 'quietly → quiet',
    spokenEn: 'All guests must remain quiet inside the theater during the live performance.',
    explanationTh: 'remain เป็น Linking Verb (กริยาเชื่อมบอกสภาพ) ต้องตามด้วย Adjective คือ quiet ไม่ใช่ Adverb (quietly)'
  },
  {
    id: 'ex003',
    lessonId: 'g01',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Ms. Tanaka responded ___ to every customer inquiry within two hours.',
    options: ['prompt', 'promptness', 'promptly', 'prompting'],
    answerIndex: 2,
    spokenEn: 'Ms. Tanaka responded promptly to every customer inquiry within two hours.',
    explanationTh: 'คำที่มาขยายกริยา responded ("ตอบกลับอย่างไร") ต้องเป็น Adverb คือ promptly (อย่างรวดเร็วทันท่วงที)'
  },

  // --- g02: Nouns, Pronouns & Possessives ---
  {
    id: 'ex004',
    lessonId: 'g02',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The new payroll system is much faster than ___ we used last year.',
    options: ['them', 'the one', 'whose', 'our'],
    answerIndex: 1,
    spokenEn: 'The new payroll system is much faster than the one we used last year.',
    explanationTh: 'ใช้ the one แทนคำนามนับได้เอกพจน์ (system) ที่กล่าวถึงมาก่อนเพื่อไม่ให้พูดซ้ำ และขยายด้วย we used last year'
  },
  {
    id: 'ex005',
    lessonId: 'g02',
    phase: 'phase1',
    cefr: 'A1',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Before ' },
      { label: 'A', text: 'signing the contract' },
      { text: ', the manager asked ' },
      { label: 'B', text: 'for' },
      { text: ' some legal ' },
      { label: 'C', text: 'advices' },
      { text: ' from ' },
      { label: 'D', text: 'her colleague' },
      { text: '.' }
    ],
    options: ['signing the contract', 'for', 'advices', 'her colleague'],
    answerIndex: 2,
    correctionText: 'advices → advice',
    spokenEn: 'Before signing the contract, the manager asked for some legal advice from her colleague.',
    explanationTh: 'advice (คำแนะนำ) เป็นคำนามนับไม่ได้ (Uncountable Noun) จึงห้ามเติม -s เด็ดขาด'
  },
  {
    id: 'ex006',
    lessonId: 'g02',
    phase: 'phase1',
    cefr: 'A2',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Staff Notice: Lost & Found',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'A silver laptop sleeve was left in Conference Room B after the morning briefing. If you think the item might be ___, please claim it at the reception desk before 5:00 p.m. today.',
    options: ['you', 'your', 'yours', 'yourself'],
    answerIndex: 2,
    spokenEn: 'If you think the item might be yours, please claim it at the reception desk before 5:00 p.m. today.',
    explanationTh: 'หลัง be ไม่มีคำนามตามมา จึงต้องใช้ Possessive Pronoun คือ yours (ของคุณ) แทนคำว่า your item'
  },

  // --- g03: Contractions, Capitalization & Punctuation ---
  {
    id: 'ex007',
    lessonId: 'g03',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The delivery drone lost ___ signal when flying behind the concrete warehouse.',
    options: ["it's", 'its', "its'", 'it'],
    answerIndex: 1,
    spokenEn: 'The delivery drone lost its signal when flying behind the concrete warehouse.',
    explanationTh: "its (ไม่มี apostrophe) แปลว่า 'ของมัน' วางหน้าคำนาม signal ส่วน it's ย่อมาจาก it is หรือ it has เท่านั้น"
  },
  {
    id: 'ex008',
    lessonId: 'g03',
    phase: 'phase1',
    cefr: 'A1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { label: 'A', text: 'Next monday' },
      { text: ', Dr. Patel will ' },
      { label: 'B', text: 'present' },
      { text: ' his research ' },
      { label: 'C', text: 'on' },
      { text: ' solar energy ' },
      { label: 'D', text: 'in Tokyo' },
      { text: '.' }
    ],
    options: ['Next monday', 'present', 'on', 'in Tokyo'],
    answerIndex: 0,
    correctionText: 'Next monday → Next Monday',
    spokenEn: 'Next Monday, Dr. Patel will present his research on solar energy in Tokyo.',
    explanationTh: 'ชื่อวันในสัปดาห์ (Monday–Sunday) ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ แม้ไม่ได้อยู่ต้นประโยค'
  },
  {
    id: 'ex009',
    lessonId: 'g03',
    phase: 'phase1',
    cefr: 'A2',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      "The employees' lounge is open, and it's coffee machine works.",
      "The employee's lounge is open, and its coffee machine work.",
      "The employees' lounge is open, and its coffee machine works.",
      "The employees lounge is open, and it's coffee machine works."
    ],
    answerIndex: 2,
    spokenEn: "The employees' lounge is open, and its coffee machine works.",
    explanationTh: "employees' เป็นคำนามพหูพจน์แสดงความเป็นเจ้าของ (เติม ’ หลัง s) และ its (ไม่มี ’) แปลว่าของมัน วางหน้า coffee machine พร้อมกริยาเอกพจน์ works"
  },

  // --- g04: Numbers, Dates, Time & Units ---
  {
    id: 'ex010',
    lessonId: 'g04',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Over ___ visitors attended the annual robotics exhibition at the convention hall.',
    options: ['five thousands', 'five thousand', 'five thousands of', 'fives thousand'],
    answerIndex: 1,
    spokenEn: 'Over five thousand visitors attended the annual robotics exhibition at the convention hall.',
    explanationTh: 'เมื่อมีตัวเลขนำหน้าหน่วยนับ (hundred, thousand, million) ห้ามเติม -s ที่หน่วยนับ จึงใช้ five thousand visitors'
  },
  {
    id: 'ex011',
    lessonId: 'g04',
    phase: 'phase1',
    cefr: 'A1',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Our design team is ' },
      { label: 'A', text: 'scheduled' },
      { text: ' to launch the updated app ' },
      { label: 'B', text: 'in' },
      { text: ' ' },
      { label: 'C', text: 'May 15' },
      { text: ' at ' },
      { label: 'D', text: '9:30 a.m.' },
      { text: '' }
    ],
    options: ['scheduled', 'in', 'May 15', '9:30 a.m.'],
    answerIndex: 1,
    correctionText: 'in → on',
    spokenEn: 'Our design team is scheduled to launch the updated app on May 15 at 9:30 a.m.',
    explanationTh: 'เมื่อระบุวันที่เจาะจง (May 15) ต้องใช้บุพบท on ไม่ใช่ in (in ใช้กับเดือนอย่างเดียว เช่น in May)'
  },
  {
    id: 'ex012',
    lessonId: 'g04',
    phase: 'phase1',
    cefr: 'A2',
    part: 'passage',
    examStyle: 'TGAT Text Completion',
    passageTitle: 'Hotel Check-In Policy',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Thank you for booking your stay at Riverside Suites. Standard check-in begins at 2:00 p.m., and guests staying on the ___ floor have complimentary access to the rooftop lounge.',
    options: ['twenty-one', 'twenty-first', 'twenty-ones', 'twenty-firstly'],
    answerIndex: 1,
    spokenEn: 'Guests staying on the twenty-first floor have complimentary access to the rooftop lounge.',
    explanationTh: 'บอกลำดับชั้นของอาคาร (ชั้นที่ 21) หลัง the ต้องใช้เลขลำดับ (Ordinal Number) คือ twenty-first'
  },

  // --- g05: Articles & Determiners ---
  {
    id: 'ex013',
    lessonId: 'g05',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The keynote speaker holds ___ MBA degree from a leading university in Singapore.',
    options: ['a', 'an', 'the', 'any'],
    answerIndex: 1,
    spokenEn: 'The keynote speaker holds an MBA degree from a leading university in Singapore.',
    explanationTh: 'ตัวย่อ MBA ออกเสียงขึ้นต้นว่า "เอ็ม-บี-เอ" (/em/) ซึ่งเป็นเสียงสระ จึงต้องใช้ an นำหน้า'
  },
  {
    id: 'ex014',
    lessonId: 'g05',
    phase: 'phase1',
    cefr: 'A2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Because we have ' },
      { label: 'A', text: 'very few' },
      { text: ' ' },
      { label: 'B', text: 'time left' },
      { text: ' before the train departs, we should head to ' },
      { label: 'C', text: 'Platform 4' },
      { text: ' ' },
      { label: 'D', text: 'immediately' },
      { text: '.' }
    ],
    options: ['very few', 'time left', 'Platform 4', 'immediately'],
    answerIndex: 0,
    correctionText: 'very few → very little',
    spokenEn: 'Because we have very little time left before the train departs, we should head to Platform 4 immediately.',
    explanationTh: 'time (เวลา) ในความหมายนี้เป็นคำนามนับไม่ได้ ต้องใช้ little ไม่ใช่ few (few ใช้กับนามนับได้พหูพจน์)'
  },
  {
    id: 'ex015',
    lessonId: 'g05',
    phase: 'phase1',
    cefr: 'A2',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Workshop Registration',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Due to high demand, ___ seats remain available for Friday’s data analytics seminar. Interested staff members should register with HR before noon.',
    options: ['a little', 'a few', 'much', 'every'],
    answerIndex: 1,
    spokenEn: 'Due to high demand, a few seats remain available for Friday’s data analytics seminar.',
    explanationTh: 'seats เป็นคำนามนับได้พหูพจน์ และบริบทหมายถึง "ยังมีเหลืออยู่บ้างเล็กน้อย" จึงใช้ a few (a little และ much ใช้กับนามนับไม่ได้ ส่วน every ตามด้วยนามเอกพจน์)'
  },

  // --- g06: Verb to Be, Do, Have & Auxiliaries ---
  {
    id: 'ex016',
    lessonId: 'g06',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '___ your branch manager approve the budget proposal yesterday?',
    options: ['Was', 'Does', 'Did', 'Has'],
    answerIndex: 2,
    spokenEn: 'Did your branch manager approve the budget proposal yesterday?',
    explanationTh: 'มีคำบอกเวลาอดีต yesterday และกริยาแท้รูปปกติ approve จึงต้องใช้กริยาช่วยอดีต Did ขึ้นต้นคำถาม'
  },
  {
    id: 'ex017',
    lessonId: 'g06',
    phase: 'phase1',
    cefr: 'A1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'My cousin ' },
      { label: 'A', text: 'does not' },
      { text: ' ' },
      { label: 'B', text: 'has' },
      { text: ' enough experience to lead ' },
      { label: 'C', text: 'the international' },
      { text: ' audit ' },
      { label: 'D', text: 'on his own' },
      { text: '.' }
    ],
    options: ['does not', 'has', 'the international', 'on his own'],
    answerIndex: 1,
    correctionText: 'has → have',
    spokenEn: 'My cousin does not have enough experience to lead the international audit on his own.',
    explanationTh: 'หลังกริยาช่วย does not กริยาแท้ต้องกลับเป็นรูปฐาน (V1/Base form) คือ have เสมอ ห้ามใช้ has'
  },
  {
    id: 'ex018',
    lessonId: 'g06',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Neither of the printers on the second floor ___ working properly this morning.',
    options: ['are', 'is', 'do', 'were'],
    answerIndex: 1,
    spokenEn: 'Neither of the printers on the second floor is working properly this morning.',
    explanationTh: 'มีคำบอกเวลาปัจจุบัน this morning + V-ing (working) จึงใช้ Verb to Be ปัจจุบัน และ Neither of + นามพหูพจน์ ใช้กริยาเอกพจน์คือ is'
  },

  // --- g07: Inflection Rules & Irregular Verbs ---
  {
    id: 'ex019',
    lessonId: 'g07',
    phase: 'phase1',
    cefr: 'A1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Yesterday afternoon, the courier ___ the fragile glassware carefully before loading it onto the van.',
    options: ['wraped', 'wrapped', 'wrapping', 'wraps'],
    answerIndex: 1,
    spokenEn: 'Yesterday afternoon, the courier wrapped the fragile glassware carefully before loading it onto the van.',
    explanationTh: 'มีคำบอกเวลาอดีต Yesterday afternoon และคำว่า wrap เป็นพยางค์เดียว สระสั้นเสียงเดียวสะกดตัวเดียว (CVC) เมื่อเติม -ed ต้องเบิ้ลตัว p เป็น wrapped'
  },
  {
    id: 'ex020',
    lessonId: 'g07',
    phase: 'phase1',
    cefr: 'A2',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'The technician ' },
      { label: 'A', text: 'has already chose' },
      { text: ' the fastest server ' },
      { label: 'B', text: 'for' },
      { text: ' the company ' },
      { label: 'C', text: 'database' },
      { text: ' ' },
      { label: 'D', text: 'migration' },
      { text: '.' }
    ],
    options: ['has already chose', 'for', 'database', 'migration'],
    answerIndex: 0,
    correctionText: 'has already chose → has already chosen',
    spokenEn: 'The technician has already chosen the fastest server for the company database migration.',
    explanationTh: 'หลัง has ใน Present Perfect ต้องใช้กริยาช่อง 3 (V3) คือ chosen ไม่ใช่ช่อง 2 (chose)'
  },
  {
    id: 'ex021',
    lessonId: 'g07',
    phase: 'phase1',
    cefr: 'A2',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Supply Room Update',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'We noticed that office stationery supplies have ___ rapidly over the past month. Please submit your team’s monthly requests early so procurement can restock in time.',
    options: ['shrink', 'shrank', 'shrunk', 'shrinked'],
    answerIndex: 2,
    spokenEn: 'We noticed that office stationery supplies have shrunk rapidly over the past month.',
    explanationTh: 'หลัง have ต้องใช้ V3 ของ shrink (shrink – shrank – shrunk) คือ shrunk ส่วน shrinked ไม่มีในภาษาอังกฤษ'
  },

  // --- g08: Sentence Structure, 3 Types & Question Tags ---
  {
    id: 'ex022',
    lessonId: 'g08',
    phase: 'phase1',
    cefr: 'A2',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Everyone enjoyed the company retreat in Chiang Mai, ___?',
    options: ["didn't he", "didn't they", "wasn't it", "haven't they"],
    answerIndex: 1,
    spokenEn: 'Everyone enjoyed the company retreat in Chiang Mai, didn’t they?',
    explanationTh: 'ประธานเป็น Everyone ใน Question Tag ต้องใช้สรรพนาม they และกริยาหลักเป็นอดีต (enjoyed) จึงใช้ tag ปฏิเสธว่า didn’t they?'
  },
  {
    id: 'ex023',
    lessonId: 'g08',
    phase: 'phase1',
    cefr: 'A2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { label: 'A', text: 'Let’s review' },
      { text: ' the updated ' },
      { label: 'B', text: 'budget slides' },
      { text: ' ' },
      { label: 'C', text: 'before' },
      { text: ' the board meeting, ' },
      { label: 'D', text: 'will we' },
      { text: '?' }
    ],
    options: ['Let’s review', 'budget slides', 'before', 'will we'],
    answerIndex: 3,
    correctionText: 'will we → shall we',
    spokenEn: 'Let’s review the updated budget slides before the board meeting, shall we?',
    explanationTh: 'ประโยคที่ขึ้นต้นด้วย Let’s... (ชักชวน) Question Tag มาตรฐานที่ถูกต้องคือ shall we? ไม่ใช่ will we?'
  },
  {
    id: 'ex024',
    lessonId: 'g08',
    phase: 'phase1',
    cefr: 'A2',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'The report was lengthy, however, the executives read every page.',
      'Although the report was lengthy, but the executives read every page.',
      'The report was lengthy, yet the executives read every page.',
      'Because the report was lengthy, so the executives read it quickly.'
    ],
    answerIndex: 2,
    spokenEn: 'The report was lengthy, yet the executives read every page.',
    explanationTh: 'yet เป็นหนึ่งใน FANBOYS ที่เชื่อมประโยคอิสระสองประโยคด้วยเครื่องหมาย comma ได้ ส่วน however ใช้คั่นหลัง comma อย่างเดียวไม่ได้ (เกิด comma splice) และห้ามใช้ Although...but หรือ Because...so คู่กัน'
  },

  // --- g09: Subject-Verb Agreement ---
  {
    id: 'ex025',
    lessonId: 'g09',
    phase: 'phase1',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The CEO, along with two senior vice presidents, ___ attending the summit in Zurich next week.',
    options: ['are', 'is', 'were', 'have been'],
    answerIndex: 1,
    spokenEn: 'The CEO, along with two senior vice presidents, is attending the summit in Zurich next week.',
    explanationTh: 'คำเชื่อม along with ไม่ทำให้ประธานกลายเป็นพหูพจน์ ให้ยึดประธานตัวหลักด้านหน้าคือ The CEO (เอกพจน์) และมี next week จึงใช้ is attending'
  },
  {
    id: 'ex026',
    lessonId: 'g09',
    phase: 'phase1',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'The number of ' },
      { label: 'A', text: 'remote workers' },
      { text: ' across the region ' },
      { label: 'B', text: 'have increased' },
      { text: ' ' },
      { label: 'C', text: 'steadily' },
      { text: ' over the ' },
      { label: 'D', text: 'past three years' },
      { text: '.' }
    ],
    options: ['remote workers', 'have increased', 'steadily', 'past three years'],
    answerIndex: 1,
    correctionText: 'have increased → has increased',
    spokenEn: 'The number of remote workers across the region has increased steadily over the past three years.',
    explanationTh: 'โครงสร้าง The number of + นามพหูพจน์ หมายถึง "จำนวนของ..." ใช้กริยาเอกพจน์เสมอ (has increased) ต่างจาก A number of ที่ใช้กริยาพหูพจน์'
  },
  {
    id: 'ex027',
    lessonId: 'g09',
    phase: 'phase1',
    cefr: 'B1',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'IT Security Guideline',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Every laptop and tablet issued by the company ___ equipped with automatic disk encryption. Staff must not disable this security feature.',
    options: ['are', 'is', 'were', 'have'],
    answerIndex: 1,
    spokenEn: 'Every laptop and tablet issued by the company is equipped with automatic disk encryption.',
    explanationTh: 'แม้มีคำว่า and เชื่อม laptop กับ tablet แต่เมื่อมี Every นำหน้า ประธานถือเป็นเอกพจน์เสมอ จึงใช้กริยาเอกพจน์ is'
  },

  // --- g10: Indefinite Pronouns & both / either / neither / none ---
  {
    id: 'ex028',
    lessonId: 'g10',
    phase: 'phase1',
    cefr: 'A2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '___ of the three proposed layouts meets the client’s strict accessibility guidelines.',
    options: ['Neither', 'Both', 'None', 'Either'],
    answerIndex: 2,
    spokenEn: 'None of the three proposed layouts meets the client’s strict accessibility guidelines.',
    explanationTh: 'มีตัวเลือก 3 แบบ (three) จึงใช้ Both / Either / Neither ไม่ได้ (กลุ่มนั้นใช้กับ 2 สิ่ง) จึงต้องใช้ None (ไม่มีเลยในกลุ่มตั้งแต่ 3 ขึ้นไป)'
  },
  {
    id: 'ex029',
    lessonId: 'g10',
    phase: 'phase1',
    cefr: 'A2',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { label: 'A', text: 'Something' },
      { text: ' in the server logs ' },
      { label: 'B', text: 'look' },
      { text: ' unusual, so let’s run ' },
      { label: 'C', text: 'a diagnostic' },
      { text: ' check ' },
      { label: 'D', text: 'right away' },
      { text: '.' }
    ],
    options: ['Something', 'look', 'a diagnostic', 'right away'],
    answerIndex: 1,
    correctionText: 'look → looks',
    spokenEn: 'Something in the server logs looks unusual, so let’s run a diagnostic check right away.',
    explanationTh: 'Indefinite Pronoun (Something, Everyone, Nobody ฯลฯ) ใช้กริยาเอกพจน์เสมอ จึงต้องเป็น looks'
  },
  {
    id: 'ex030',
    lessonId: 'g10',
    phase: 'phase1',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Either the finance director or the two senior accountants ___ going to sign the voucher.',
    options: ['is', 'are', 'was', 'has'],
    answerIndex: 1,
    spokenEn: 'Either the finance director or the two senior accountants are going to sign the voucher.',
    explanationTh: 'โครงสร้าง Either A or B ให้ผันกริยาตามประธานตัวที่ใกล้กริยาที่สุด (the two senior accountants = พหูพจน์) จึงใช้ are'
  },

  /* ===================== PHASE 2 (g11–g19 · 27 Questions) ===================== */

  // --- g11: Prepositions ---
  {
    id: 'ex031',
    lessonId: 'g11',
    phase: 'phase2',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'All quarterly expense claims must be submitted to the accounting office ___ Friday at 4:00 p.m.',
    options: ['until', 'by', 'since', 'during'],
    answerIndex: 1,
    spokenEn: 'All quarterly expense claims must be submitted to the accounting office by Friday at 4:00 p.m.',
    explanationTh: 'ใช้ by สำหรับเส้นตาย (ไม่เกินวันศุกร์เวลา 16:00 น.) ส่วน until หมายถึงทำต่อเนื่องไปจนถึงเวลานั้น'
  },
  {
    id: 'ex032',
    lessonId: 'g11',
    phase: 'phase2',
    cefr: 'A2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Several ' },
      { label: 'A', text: 'interns' },
      { text: ' arrived ' },
      { label: 'B', text: 'in' },
      { text: ' the airport terminal two hours ' },
      { label: 'C', text: 'before' },
      { text: ' their flight ' },
      { label: 'D', text: 'departure' },
      { text: '.' }
    ],
    options: ['interns', 'in', 'before', 'departure'],
    answerIndex: 1,
    correctionText: 'in → at',
    spokenEn: 'Several interns arrived at the airport terminal two hours before their flight departure.',
    explanationTh: 'arrive at ใช้กับสถานที่เฉพาะหรืออาคาร (the airport terminal, the station) ส่วน arrive in ใช้กับเมืองหรือประเทศ'
  },
  {
    id: 'ex033',
    lessonId: 'g11',
    phase: 'phase2',
    cefr: 'B1',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Facility Maintenance Alert',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'The pedestrian bridge connecting Building A and Building C will be closed ___ the weekend renovation. Employees are advised to use the ground-level walkway instead.',
    options: ['while', 'during', 'since', 'among'],
    answerIndex: 1,
    spokenEn: 'The pedestrian bridge connecting Building A and Building C will be closed during the weekend renovation.',
    explanationTh: 'หลังช่องว่างเป็นคำนาม (the weekend renovation) จึงต้องใช้บุพบท during (ระหว่างช่วง...) ส่วน while เป็นคำเชื่อมที่ต้องตามด้วยประโยค (S+V)'
  },

  // --- g12: Present Simple & Present Continuous ---
  {
    id: 'ex034',
    lessonId: 'g12',
    phase: 'phase2',
    cefr: 'A2',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Currently, our legal department ___ all vendor agreements for next year.',
    options: ['review', 'is reviewing', 'reviewed', 'has review'],
    answerIndex: 1,
    spokenEn: 'Currently, our legal department is reviewing all vendor agreements for next year.',
    explanationTh: 'คำว่า Currently ชี้ถึงการดำเนินการที่กำลังทำอยู่ในช่วงเวลานี้ (Present Continuous) และ department เป็นเอกพจน์ จึงใช้ is reviewing'
  },
  {
    id: 'ex035',
    lessonId: 'g12',
    phase: 'phase2',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Most architects ' },
      { label: 'A', text: 'are believing' },
      { text: ' that ' },
      { label: 'B', text: 'natural lighting' },
      { text: ' significantly ' },
      { label: 'C', text: 'improves' },
      { text: ' productivity in ' },
      { label: 'D', text: 'open offices' },
      { text: '.' }
    ],
    options: ['are believing', 'natural lighting', 'improves', 'open offices'],
    answerIndex: 0,
    correctionText: 'are believing → believe',
    spokenEn: 'Most architects believe that natural lighting significantly improves productivity in open offices.',
    explanationTh: 'believe เป็น State Verb (กริยาบอกความรู้สึกนึกคิด/ความเชื่อ) ไม่นิยมใช้ในรูป Continuous (-ing) ให้ใช้ Present Simple เป็น believe'
  },
  {
    id: 'ex036',
    lessonId: 'g12',
    phase: 'phase2',
    cefr: 'A2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The shuttle bus to the main campus ___ every fifteen minutes on weekdays.',
    options: ['is departing', 'depart', 'departs', 'has departed'],
    answerIndex: 2,
    spokenEn: 'The shuttle bus to the main campus departs every fifteen minutes on weekdays.',
    explanationTh: 'ตารางเวลาเดินรถและกิจวัตรประจำ (every fifteen minutes on weekdays) ใช้ Present Simple; ประธาน shuttle bus เป็นเอกพจน์จึงเติม -s เป็น departs'
  },

  // --- g13: Present Perfect & Present Perfect Continuous ---
  {
    id: 'ex037',
    lessonId: 'g13',
    phase: 'phase2',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Dr. Nair ___ at this medical research center since it opened in 2018.',
    options: ['works', 'worked', 'has worked', 'is working'],
    answerIndex: 2,
    spokenEn: 'Dr. Nair has worked at this medical research center since it opened in 2018.',
    explanationTh: 'โครงสร้าง since + อดีต (it opened in 2018) ใช้เชื่อมเหตุการณ์ที่เริ่มในอดีตและยังดำเนินมาถึงปัจจุบัน ประโยคหลักจึงต้องใช้ Present Perfect: has worked'
  },
  {
    id: 'ex038',
    lessonId: 'g13',
    phase: 'phase2',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'The marketing director ' },
      { label: 'A', text: 'has already finished' },
      { text: ' the Q3 presentation ' },
      { label: 'B', text: 'two days' },
      { text: ' ' },
      { label: 'C', text: 'ago' },
      { text: ' before leaving for ' },
      { label: 'D', text: 'Osaka' },
      { text: '.' }
    ],
    options: ['has already finished', 'two days', 'ago', 'Osaka'],
    answerIndex: 0,
    correctionText: 'has already finished → finished',
    spokenEn: 'The marketing director finished the Q3 presentation two days ago before leaving for Osaka.',
    explanationTh: 'มีคำบอกเวลาอดีตที่จบลงชัดเจน (two days ago) จึงห้ามใช้ Present Perfect (has finished) ต้องใช้ Past Simple (finished) เท่านั้น'
  },
  {
    id: 'ex039',
    lessonId: 'g13',
    phase: 'phase2',
    cefr: 'B1',
    part: 'passage',
    examStyle: 'TGAT Text Completion',
    passageTitle: 'Customer Support Email',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Thank you for your patience. Our engineers ___ on the payment gateway bug all morning, and they expect to release a fix within thirty minutes.',
    options: ['work', 'have been working', 'were worked', 'will be working'],
    answerIndex: 1,
    spokenEn: 'Our engineers have been working on the payment gateway bug all morning, and they expect to release a fix within thirty minutes.',
    explanationTh: 'บริบทบอกว่าแก้ปัญหามาตลอดช่วงเช้าจนถึงตอนนี้และยังไม่เสร็จสมบูรณ์ จึงใช้ Present Perfect Continuous (have been working) เพื่อเน้นความต่อเนื่อง'
  },

  // --- g14: Past Simple, Past Continuous & used to ---
  {
    id: 'ex040',
    lessonId: 'g14',
    phase: 'phase2',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Although the interface looked confusing at first, our staff is now ___ the new layout.',
    options: ['used to', 'use to', 'using to', 'used for'],
    answerIndex: 0,
    spokenEn: 'Although the interface looked confusing at first, our staff is now used to the new layout.',
    explanationTh: 'โครงสร้าง be used to + Noun/V-ing แปลว่า "คุ้นเคย/ชินกับ..." ต่างจาก used to + V1 ที่แปลว่าเคยทำในอดีต'
  },
  {
    id: 'ex041',
    lessonId: 'g14',
    phase: 'phase2',
    cefr: 'A2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'While the technician ' },
      { label: 'A', text: 'repaired' },
      { text: ' the projector, the lights in the auditorium ' },
      { label: 'B', text: 'suddenly' },
      { text: ' ' },
      { label: 'C', text: 'went out' },
      { text: ' for several ' },
      { label: 'D', text: 'minutes' },
      { text: '.' }
    ],
    options: ['repaired', 'suddenly', 'went out', 'minutes'],
    answerIndex: 0,
    correctionText: 'repaired → was repairing',
    spokenEn: 'While the technician was repairing the projector, the lights in the auditorium suddenly went out for several minutes.',
    explanationTh: 'เหตุการณ์ที่กำลังดำเนินอยู่ต่อเนื่องในอดีตหลัง While แล้วมีอีกเหตุการณ์สั้นมาแทรก (went out) ต้องใช้ Past Continuous คือ was repairing'
  },
  {
    id: 'ex042',
    lessonId: 'g14',
    phase: 'phase2',
    cefr: 'B1',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่มีความหมายตรงกับประโยคต้นฉบับและถูกหลักไวยากรณ์',
    sentence: 'Years ago, this quiet street was filled with small bookshops, though none remain today.',
    options: [
      'This quiet street is used to having many small bookshops today.',
      'There used to be many small bookshops along this quiet street.',
      'Small bookshops were used to fill this quiet street years ago.',
      'This quiet street use to have many small bookshops years ago.'
    ],
    answerIndex: 1,
    spokenEn: 'There used to be many small bookshops along this quiet street.',
    explanationTh: 'There used to be... แปลว่าเคยมีในอดีตแต่ปัจจุบันไม่มีแล้ว ตรงกับความหมายต้นฉบับ และรูป used to ในบอกเล่าต้องมี -d เสมอ'
  },

  // --- g15: Past Perfect & Past Perfect Continuous ---
  {
    id: 'ex043',
    lessonId: 'g15',
    phase: 'phase2',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'By the time the safety inspectors arrived at the factory, the maintenance crew ___ the leak.',
    options: ['sealed', 'has sealed', 'had already sealed', 'was sealing'],
    answerIndex: 2,
    spokenEn: 'By the time the safety inspectors arrived at the factory, the maintenance crew had already sealed the leak.',
    explanationTh: 'By the time + อดีต (arrived) แสดงว่าอีกเหตุการณ์จบไปก่อนหน้านั้นแล้ว จึงต้องใช้ Past Perfect: had already sealed'
  },
  {
    id: 'ex044',
    lessonId: 'g15',
    phase: 'phase2',
    cefr: 'B2',
    part: 'passage',
    examStyle: 'TGAT Text Completion',
    passageTitle: 'Project Post-Mortem Note',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Before the software update rolled out last Friday, the QA team ___ automated stress tests for nearly three weeks without detecting any critical crashes.',
    options: ['has been running', 'had been running', 'is running', 'would run'],
    answerIndex: 1,
    spokenEn: 'Before the software update rolled out last Friday, the QA team had been running automated stress tests for nearly three weeks.',
    explanationTh: 'เหตุการณ์ทดสอบต่อเนื่องนาน 3 สัปดาห์เกิดขึ้นและดำเนินมาก่อนจุดอดีต rolled out last Friday จึงใช้ Past Perfect Continuous: had been running'
  },
  {
    id: 'ex045',
    lessonId: 'g15',
    phase: 'phase2',
    cefr: 'B2',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่มีความหมายตรงกับประโยคต้นฉบับและถูกหลักไวยากรณ์',
    sentence: 'First, Mia saved a backup copy of her thesis. Then, her laptop crashed.',
    options: [
      'When Mia saved a backup copy of her thesis, her laptop had crashed.',
      'Before Mia’s laptop crashed, she had saved a backup copy of her thesis.',
      'Mia had her laptop crash after she was saving a backup copy.',
      'Until Mia saved a backup copy, her laptop had already crashed.'
    ],
    answerIndex: 1,
    spokenEn: 'Before Mia’s laptop crashed, she had saved a backup copy of her thesis.',
    explanationTh: 'การสำรองไฟล์เกิดก่อนคอมพิวเตอร์พัง จึงใช้ Past Perfect (had saved) กับเหตุการณ์แรก และ Past Simple (crashed) กับเหตุการณ์ที่เกิดทีหลัง'
  },

  // --- g16: Future Tenses ---
  {
    id: 'ex046',
    lessonId: 'g16',
    phase: 'phase2',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'By the end of this quarter, the engineering division ___ over two million lines of legacy code.',
    options: ['will migrate', 'migrates', 'will have migrated', 'is migrating'],
    answerIndex: 2,
    spokenEn: 'By the end of this quarter, the engineering division will have migrated over two million lines of legacy code.',
    explanationTh: 'คำว่า By the end of + เวลาในอนาคต (this quarter) ใช้กับ Future Perfect (will have + V3) เพื่อบอกสิ่งที่จะทำเสร็จสิ้นก่อนกำหนดเวลานั้น'
  },
  {
    id: 'ex047',
    lessonId: 'g16',
    phase: 'phase2',
    cefr: 'A2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Please call our ' },
      { label: 'A', text: 'front desk' },
      { text: ' as soon as you ' },
      { label: 'B', text: 'will reach' },
      { text: ' the main station so we can ' },
      { label: 'C', text: 'dispatch' },
      { text: ' the ' },
      { label: 'D', text: 'airport van' },
      { text: '.' }
    ],
    options: ['front desk', 'will reach', 'dispatch', 'airport van'],
    answerIndex: 1,
    correctionText: 'will reach → reach',
    spokenEn: 'Please call our front desk as soon as you reach the main station so we can dispatch the airport van.',
    explanationTh: 'หลังคำเชื่อมเวลา (as soon as, when, before, until) เมื่อกล่าวถึงอนาคต ห้ามใช้ will ให้ใช้ Present Simple แทน คือ reach'
  },
  {
    id: 'ex048',
    lessonId: 'g16',
    phase: 'phase2',
    cefr: 'B1',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Flight Captain Announcement',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Ladies and gentlemen, at this time tomorrow afternoon, we ___ smoothly over the Pacific Ocean on our way to Vancouver. Please fasten your seatbelts for takeoff.',
    options: ['fly', 'will be flying', 'have flown', 'flew'],
    answerIndex: 1,
    spokenEn: 'At this time tomorrow afternoon, we will be flying smoothly over the Pacific Ocean on our way to Vancouver.',
    explanationTh: 'ระบุเวลาเจาะจงในอนาคต (at this time tomorrow afternoon) ใช้ Future Continuous (will be + V-ing) เพื่อบอกสิ่งที่กำลังจะดำเนินอยู่ในช่วงเวลานั้น'
  },

  // --- g17: Modal Verbs & Modal Perfect ---
  {
    id: 'ex049',
    lessonId: 'g17',
    phase: 'phase2',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The streetlights and sidewalks are completely wet; it ___ heavily overnight.',
    options: ['must rain', 'should rain', 'must have rained', 'can have rained'],
    answerIndex: 2,
    spokenEn: 'The streetlights and sidewalks are completely wet; it must have rained heavily overnight.',
    explanationTh: 'สรุป/คาดเดาอย่างมั่นใจจากหลักฐานปัจจุบันถึงเรื่องที่เกิดขึ้นไปแล้วในอดีต (ถนนเปียก -> ฝนต้องตกหนักเมื่อคืนแน่ๆ) ใช้ must have + V3'
  },
  {
    id: 'ex050',
    lessonId: 'g17',
    phase: 'phase2',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'With the new electronic gate installed, visitors ' },
      { label: 'A', text: 'do not have to' },
      { text: ' ' },
      { label: 'B', text: 'waiting' },
      { text: ' in line ' },
      { label: 'C', text: 'for' },
      { text: ' a paper badge ' },
      { label: 'D', text: 'anymore' },
      { text: '.' }
    ],
    options: ['do not have to', 'waiting', 'for', 'anymore'],
    answerIndex: 1,
    correctionText: 'waiting → wait',
    spokenEn: 'With the new electronic gate installed, visitors do not have to wait in line for a paper badge anymore.',
    explanationTh: 'หลัง do not have to (ไม่จำเป็นต้อง) ต้องตามด้วยกริยารูปฐาน V1 คือ wait ไม่ใช่ V-ing (waiting)'
  },
  {
    id: 'ex051',
    lessonId: 'g17',
    phase: 'phase2',
    cefr: 'B2',
    part: 'structure',
    examStyle: 'IELTS Grammar',
    promptTh: 'เลือกประโยคที่มีความหมายตรงกับประโยคต้นฉบับและถูกหลักไวยากรณ์',
    sentence: 'It was a mistake for Daniel to send the confidential draft without checking the recipient list.',
    options: [
      'Daniel must not send the confidential draft without checking the list.',
      'Daniel shouldn’t have sent the confidential draft without checking the recipient list.',
      'Daniel doesn’t have to send the confidential draft before checking the list.',
      'Daniel might not have sent the confidential draft without checking the list.'
    ],
    answerIndex: 1,
    spokenEn: 'Daniel shouldn’t have sent the confidential draft without checking the recipient list.',
    explanationTh: "การตำหนิ/เสียดายเรื่องที่ทำพลาดไปแล้วในอดีต ('ไม่ควรจะทำเลย') ใช้ shouldn't have + V3"
  },

  // --- g18: Gerund, Infinitive & Causative Verbs ---
  {
    id: 'ex052',
    lessonId: 'g18',
    phase: 'phase2',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'We look forward to ___ your team at the Bangkok Tech Expo next month.',
    options: ['meet', 'meeting', 'met', 'be met'],
    answerIndex: 1,
    spokenEn: 'We look forward to meeting your team at the Bangkok Tech Expo next month.',
    explanationTh: 'สำนวน look forward to (ตั้งตารอคอย) มีคำว่า to เป็นบุพบท จึงต้องตามด้วย Gerund (V-ing) คือ meeting'
  },
  {
    id: 'ex053',
    lessonId: 'g18',
    phase: 'phase2',
    cefr: 'B2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'The strict supervisor ' },
      { label: 'A', text: 'made' },
      { text: ' all junior analysts ' },
      { label: 'B', text: 'to recalculate' },
      { text: ' the quarterly ' },
      { label: 'C', text: 'expenses' },
      { text: ' before ' },
      { label: 'D', text: 'noon' },
      { text: '.' }
    ],
    options: ['made', 'to recalculate', 'expenses', 'noon'],
    answerIndex: 1,
    correctionText: 'to recalculate → recalculate',
    spokenEn: 'The strict supervisor made all junior analysts recalculate the quarterly expenses before noon.',
    explanationTh: 'Causative verb รูป Active: make + กรรม + V1 (Bare Infinitive ไม่มี to) จึงต้องใช้ recalculate ไม่ใช่ to recalculate'
  },
  {
    id: 'ex054',
    lessonId: 'g18',
    phase: 'phase2',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'While driving through the countryside, we stopped ___ some fresh fruit at a roadside stall.',
    options: ['buying', 'to buy', 'bought', 'buy'],
    answerIndex: 1,
    spokenEn: 'While driving through the countryside, we stopped to buy some fresh fruit at a roadside stall.',
    explanationTh: 'stop + to V1 แปลว่า "หยุดทำสิ่งหนึ่ง (ขับรถ) เพื่อจะทำอีกสิ่งหนึ่ง (ลงไปซื้อผลไม้)" ต่างจาก stop + V-ing ที่แปลว่าเลิกทำสิ่งนั้น'
  },

  // --- g19: Transitive, Linking & Phrasal Verbs ---
  {
    id: 'ex055',
    lessonId: 'g19',
    phase: 'phase2',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Because the main projector failed, the coordinators decided to ___ the workshop until Friday.',
    options: ['call off', 'put off', 'turn down', 'look into'],
    answerIndex: 1,
    spokenEn: 'Because the main projector failed, the coordinators decided to put off the workshop until Friday.',
    explanationTh: 'put off แปลว่า "เลื่อนออกไป" (มีคำว่า until Friday ชี้ชัด) ส่วน call off คือยกเลิก, turn down คือปฏิเสธ/ลดเสียง และ look into คือตรวจสอบ'
  },
  {
    id: 'ex056',
    lessonId: 'g19',
    phase: 'phase2',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'During the afternoon session, the committee ' },
      { label: 'A', text: 'discussed about' },
      { text: ' several proposals ' },
      { label: 'B', text: 'to reduce' },
      { text: ' plastic ' },
      { label: 'C', text: 'packaging' },
      { text: ' across all ' },
      { label: 'D', text: 'retail outlets' },
      { text: '.' }
    ],
    options: ['discussed about', 'to reduce', 'packaging', 'retail outlets'],
    answerIndex: 0,
    correctionText: 'discussed about → discussed',
    spokenEn: 'During the afternoon session, the committee discussed several proposals to reduce plastic packaging across all retail outlets.',
    explanationTh: 'discuss เป็น Transitive Verb (กริยาต้องการกรรมตรง) ตามด้วยกรรมได้เลย ห้ามใส่ about ต่อท้าย'
  },
  {
    id: 'ex057',
    lessonId: 'g19',
    phase: 'phase2',
    cefr: 'B2',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'IT Helpdesk Reply',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'We received your request regarding the missing invoice PDF. Please ___ and I will resend the file immediately.',
    options: ['put it off', 'pick it up', 'hand it over', 'bear with me'],
    answerIndex: 3,
    spokenEn: 'Please bear with me and I will resend the file immediately.',
    explanationTh: 'สำนวน bear with me (หรือ wait patiently with me) แปลว่า "รบกวนรอสักครู่" เหมาะสมกับบริบทฝ่ายสนับสนุนลูกค้ากำลังจัดส่งไฟล์ให้ใหม่'
  },

  /* ===================== PHASE 3 (g20–g30 · 33 Questions) ===================== */

  // --- g20: Adjectives (-ed/-ing), Adverbs & Order of Adj ---
  {
    id: 'ex058',
    lessonId: 'g20',
    phase: 'phase3',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The museum recently acquired a ___ sculpture from a private collection.',
    options: [
      'Greek ancient marble small',
      'small ancient Greek marble',
      'marble small ancient Greek',
      'ancient small marble Greek'
    ],
    answerIndex: 1,
    spokenEn: 'The museum recently acquired a small ancient Greek marble sculpture from a private collection.',
    explanationTh: 'เรียงลำดับ Adjective หน้าคำนาม (OSASCOMP): Size (small) → Age (ancient) → Origin (Greek) → Material (marble) + sculpture'
  },
  {
    id: 'ex059',
    lessonId: 'g20',
    phase: 'phase3',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'After a twelve-hour flight without sleep, ' },
      { label: 'A', text: 'most travelers' },
      { text: ' felt ' },
      { label: 'B', text: 'completely exhausting' },
      { text: ' by the time they reached ' },
      { label: 'C', text: 'the hotel' },
      { text: ' ' },
      { label: 'D', text: 'lobby' },
      { text: '.' }
    ],
    options: ['most travelers', 'completely exhausting', 'the hotel', 'lobby'],
    answerIndex: 1,
    correctionText: 'completely exhausting → completely exhausted',
    spokenEn: 'After a twelve-hour flight without sleep, most travelers felt completely exhausted by the time they reached the hotel lobby.',
    explanationTh: 'บอกความรู้สึกของคน (travelers felt...) ต้องใช้ Adjective ลงท้าย -ed คือ exhausted (รู้สึกเหนื่อยล้าสุดขีด) ส่วน exhausting แปลว่าน่าเหน็ดเหนื่อย'
  },
  {
    id: 'ex060',
    lessonId: 'g20',
    phase: 'phase3',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The warehouse is not ___ to store another shipment of seasonal electronics.',
    options: ['enough spacious', 'spacious enough', 'too spacious', 'spaciously enough'],
    answerIndex: 1,
    spokenEn: 'The warehouse is not spacious enough to store another shipment of seasonal electronics.',
    explanationTh: 'คำว่า enough เมื่อขยาย Adjective ต้องวางไว้ "หลัง" Adjective (spacious enough) และหลัง is ต้องใช้ Adjective (spacious)'
  },

  // --- g21: Comparison ---
  {
    id: 'ex061',
    lessonId: 'g21',
    phase: 'phase3',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The ___ you organize the customer database, the faster our sales team can follow up.',
    options: ['well', 'better', 'best', 'more good'],
    answerIndex: 1,
    spokenEn: 'The better you organize the customer database, the faster our sales team can follow up.',
    explanationTh: 'โครงสร้างคู่ขนาน "ยิ่ง...ก็ยิ่ง..." ใช้ The + ขั้นกว่า ..., the + ขั้นกว่า ... ดังนั้นคู่กับ the faster จึงต้องใช้ The better'
  },
  {
    id: 'ex062',
    lessonId: 'g21',
    phase: 'phase3',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'This updated electric sedan is ' },
      { label: 'A', text: 'far more quieter' },
      { text: ' than ' },
      { label: 'B', text: 'previous models' },
      { text: ' when driven at ' },
      { label: 'C', text: 'highway' },
      { text: ' ' },
      { label: 'D', text: 'speeds' },
      { text: '.' }
    ],
    options: ['far more quieter', 'previous models', 'highway', 'speeds'],
    answerIndex: 0,
    correctionText: 'far more quieter → far quieter',
    spokenEn: 'This updated electric sedan is far quieter than previous models when driven at highway speeds.',
    explanationTh: 'ห้ามใช้ขั้นกว่าซ้อนสองชั้น (more + quieter ผิด) คำว่า quiet ใช้ quieter ได้เลย จึงเขียนเป็น far quieter'
  },
  {
    id: 'ex063',
    lessonId: 'g21',
    phase: 'phase3',
    cefr: 'B2',
    part: 'structure',
    examStyle: 'IELTS Grammar',
    promptTh: 'เลือกประโยคที่มีความหมายตรงกับประโยคต้นฉบับและถูกหลักไวยากรณ์',
    sentence: 'No other candidate in the final interview round demonstrated more confidence than Priya.',
    options: [
      'Priya was as confident as any other candidate who failed the interview.',
      'Priya was the most confident candidate in the final interview round.',
      'Other candidates were more confident than Priya in the final round.',
      'Priya demonstrated less confidence than the other candidates.'
    ],
    answerIndex: 1,
    spokenEn: 'Priya was the most confident candidate in the final interview round.',
    explanationTh: '"ไม่มีผู้สมัครคนอื่นมั่นใจกว่า Priya" มีความหมายเท่ากับ Priya มั่นใจที่สุด (the most confident) ในรอบสัมภาษณ์สุดท้าย'
  },

  // --- g22: Dummy Subjects & So / Neither ---
  {
    id: 'ex064',
    lessonId: 'g22',
    phase: 'phase3',
    cefr: 'A2',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '“Our branch hasn’t received the new barcode scanners yet.” — “___.”',
    options: ['So has ours', 'Neither has ours', 'Neither does ours', 'Ours hasn’t too'],
    answerIndex: 1,
    spokenEn: 'Our branch hasn’t received the new barcode scanners yet. — Neither has ours.',
    explanationTh: 'ประโยคหน้าเป็นปฏิเสธใน Present Perfect (hasn’t received) การคล้อยตามเชิงปฏิเสธจึงใช้ Neither + กริยาช่วย (has) + ประธาน (ours)'
  },
  {
    id: 'ex065',
    lessonId: 'g22',
    phase: 'phase3',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { label: 'A', text: 'It took' },
      { text: ' the software engineers nearly three weeks ' },
      { label: 'B', text: 'rebuilding' },
      { text: ' the entire ' },
      { label: 'C', text: 'payment' },
      { text: ' module after ' },
      { label: 'D', text: 'the outage' },
      { text: '.' }
    ],
    options: ['It took', 'rebuilding', 'payment', 'the outage'],
    answerIndex: 1,
    correctionText: 'rebuilding → to rebuild',
    spokenEn: 'It took the software engineers nearly three weeks to rebuild the entire payment module after the outage.',
    explanationTh: 'โครงสร้าง It takes/took + (person) + time + to V1 ต้องใช้ to rebuild ไม่ใช่ V-ing (rebuilding)'
  },
  {
    id: 'ex066',
    lessonId: 'g22',
    phase: 'phase3',
    cefr: 'B1',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'There are essential to verify your passport details before flying.',
      'It is essential to verify your passport details before flying.',
      'There is essential that you verify your passport details.',
      'It takes essential verifying your passport details before flying.'
    ],
    answerIndex: 1,
    spokenEn: 'It is essential to verify your passport details before flying.',
    explanationTh: 'การประเมินความสำคัญด้วย Adjective (essential) ก่อน to V1 ใช้ประธานสมมติว่า It is + adj + to V1 ไม่ใช่ There is/are'
  },

  // --- g23: Indirect Questions, Imperatives & Exclamations ---
  {
    id: 'ex067',
    lessonId: 'g23',
    phase: 'phase3',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Could you let me know when the quarterly financial audit ___?',
    options: ['will it begin', 'does it begin', 'begins', 'is it beginning'],
    answerIndex: 2,
    spokenEn: 'Could you let me know when the quarterly financial audit begins?',
    explanationTh: 'Indirect Question (Could you let me know when...) ส่วนคำถามซ้อนด้านในต้องเรียงแบบประโยคบอกเล่า [S + V] คือ the quarterly financial audit begins (ไม่สลับเอา does/will ไว้หน้าประธาน)'
  },
  {
    id: 'ex068',
    lessonId: 'g23',
    phase: 'phase3',
    cefr: 'B1',
    part: 'structure',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'Do you happen to know where is the nearest pharmacy?',
      'Do you happen to know where the nearest pharmacy is?',
      'Do you happen to know where does the nearest pharmacy locate?',
      'Can you tell me that where is the nearest pharmacy?'
    ],
    answerIndex: 1,
    spokenEn: 'Do you happen to know where the nearest pharmacy is?',
    explanationTh: 'หลังคำเชื่อมคำถามอ้อม (where) ต้องเรียงตามลำดับ ประธาน + กริยา (the nearest pharmacy is) เสมอ'
  },
  {
    id: 'ex069',
    lessonId: 'g23',
    phase: 'phase3',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '___ practical workshop that was—everyone left with concrete templates!',
    options: ['How', 'What a', 'What', 'So'],
    answerIndex: 1,
    spokenEn: 'What a practical workshop that was—everyone left with concrete templates!',
    explanationTh: 'คำอุทานที่ตามด้วยคำนามนับได้เอกพจน์ (practical workshop) ใช้ What a/an + Adj + Noun ส่วน How ใช้ตามด้วย Adj/Adv เท่านั้น'
  },

  // --- g24: Active & Passive Voice ---
  {
    id: 'ex070',
    lessonId: 'g24',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'All incoming international parcels ___ through customs inspection before local delivery.',
    options: ['must pass', 'must be passed', 'are passing by', 'have passed to'],
    answerIndex: 0,
    spokenEn: 'All incoming international parcels must pass through customs inspection before local delivery.',
    explanationTh: 'pass through เป็นกริยาบอกการเคลื่อนผ่านที่ไม่ต้องมี Passive (พัสดุผ่านด่านศุลกากรได้ด้วยรูปแบบ Active: must pass through)'
  },
  {
    id: 'ex071',
    lessonId: 'g24',
    phase: 'phase3',
    cefr: 'B2',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Annual Bridge Inspection',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Motorists are advised to plan alternate routes this Sunday morning because the suspension bridge ___ for structural safety checks between 6:00 a.m. and 10:00 a.m.',
    options: ['is inspecting', 'is being inspected', 'has inspected', 'will inspect'],
    answerIndex: 1,
    spokenEn: 'The suspension bridge is being inspected for structural safety checks between 6:00 a.m. and 10:00 a.m.',
    explanationTh: 'สะพานเป็นผู้ถูกตรวจสอบในเวลานั้น (Passive Continuous) จึงใช้ is being inspected'
  },
  {
    id: 'ex072',
    lessonId: 'g24',
    phase: 'phase3',
    cefr: 'B2',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่มีความหมายตรงกับประโยคต้นฉบับและถูกหลักไวยากรณ์',
    sentence: 'The curator has already transferred the rare manuscripts to the climate-controlled vault.',
    options: [
      'The rare manuscripts have already transferred to the climate-controlled vault.',
      'The rare manuscripts were already being transferred by the curator.',
      'The rare manuscripts have already been transferred to the climate-controlled vault.',
      'The climate-controlled vault has been transferred the rare manuscripts.'
    ],
    answerIndex: 2,
    spokenEn: 'The rare manuscripts have already been transferred to the climate-controlled vault.',
    explanationTh: 'แปลง Present Perfect Active (has transferred) เป็น Passive ของประธานพหูพจน์ (manuscripts) ได้เป็น have already been transferred'
  },

  // --- g25: If-Clauses & Mixed Conditionals ---
  {
    id: 'ex073',
    lessonId: 'g25',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '___ the supplier ships the spare parts today, the assembly line will resume tomorrow morning.',
    options: ['Unless', 'Provided that', 'In case of', 'Even though'],
    answerIndex: 1,
    spokenEn: 'Provided that the supplier ships the spare parts today, the assembly line will resume tomorrow morning.',
    explanationTh: 'Provided that (= if / on condition that) ตามด้วยประโยคบอกเงื่อนไขที่ทำให้สายการผลิตกลับมาเดินต่อได้ (In case of ต้องตามด้วยคำนาม)'
  },
  {
    id: 'ex074',
    lessonId: 'g25',
    phase: 'phase3',
    cefr: 'B2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'If the marketing team ' },
      { label: 'A', text: 'had analyzed' },
      { text: ' the survey data more carefully, we ' },
      { label: 'B', text: 'wouldn’t miss' },
      { text: ' the launch window ' },
      { label: 'C', text: 'last' },
      { text: ' ' },
      { label: 'D', text: 'autumn' },
      { text: '.' }
    ],
    options: ['had analyzed', 'wouldn’t miss', 'last', 'autumn'],
    answerIndex: 1,
    correctionText: 'wouldn’t miss → wouldn’t have missed',
    spokenEn: 'If the marketing team had analyzed the survey data more carefully, we wouldn’t have missed the launch window last autumn.',
    explanationTh: 'มีคำว่า last autumn ชี้ว่าเป็นผลลัพธ์ที่พลาดไปแล้วในอดีต (If-clause Type 3) ฝั่งผลจึงต้องใช้ wouldn’t have missed (would + have + V3)'
  },
  {
    id: 'ex075',
    lessonId: 'g25',
    phase: 'phase3',
    cefr: 'C1',
    part: 'structure',
    examStyle: 'IELTS Grammar',
    promptTh: 'เลือกประโยคที่มีความหมายตรงกับประโยคต้นฉบับและถูกหลักไวยากรณ์',
    sentence: 'Elena accepted the scholarship abroad two years ago, so she speaks fluent Spanish today.',
    options: [
      'If Elena hadn’t accepted the scholarship abroad, she wouldn’t have spoken Spanish today.',
      'If Elena hadn’t accepted the scholarship abroad, she wouldn’t speak fluent Spanish today.',
      'If Elena didn’t accept the scholarship abroad, she wouldn’t speak fluent Spanish today.',
      'Unless Elena accepted the scholarship abroad, she would speak fluent Spanish today.'
    ],
    answerIndex: 1,
    spokenEn: 'If Elena hadn’t accepted the scholarship abroad, she wouldn’t speak fluent Spanish today.',
    explanationTh: 'Mixed Conditional: เงื่อนไขสมมติตรงข้าม "อดีต" (hadn’t accepted) ส่งผลต่อ "ปัจจุบัน" (today → wouldn’t speak)'
  },

  // --- g26: Unreal Past ---
  {
    id: 'ex076',
    lessonId: 'g26',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'It is high time the city council ___ the aging water pipelines downtown.',
    options: ['replaces', 'replaced', 'has replaced', 'will replace'],
    answerIndex: 1,
    spokenEn: 'It is high time the city council replaced the aging water pipelines downtown.',
    explanationTh: 'โครงสร้าง It is (high) time + S + V2 (Unreal Past) ใช้บอกเรื่องที่ควรรีบลงมือทำได้แล้วในตอนนี้ จึงใช้ replaced'
  },
  {
    id: 'ex077',
    lessonId: 'g26',
    phase: 'phase3',
    cefr: 'B2',
    part: 'passage',
    examStyle: 'TGAT Text Completion',
    passageTitle: 'Personal Journal Entry',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Looking back at last month’s pitch meeting, I wish I ___ more case studies ready. If I had brought concrete numbers, the investors might have approved our proposal on the spot.',
    options: ['have', 'had', 'had had', 'would have'],
    answerIndex: 2,
    spokenEn: 'Looking back at last month’s pitch meeting, I wish I had had more case studies ready.',
    explanationTh: 'เสียดายเรื่องที่เกิดขึ้นไปแล้วในอดีต (last month’s pitch meeting) โครงสร้าง wish ใช้ Past Perfect คือ had + V3 (had had = ได้เตรียมมีไว้)'
  },
  {
    id: 'ex078',
    lessonId: 'g26',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'I would rather you ___ the confidential client list outside the office network.',
    options: ["don't share", "didn't share", "haven't shared", 'not to share'],
    answerIndex: 1,
    spokenEn: 'I would rather you didn’t share the confidential client list outside the office network.',
    explanationTh: 'when subject changes: would rather + S + V2 (didn’t share) ใช้แสดงความต้องการให้อีกฝ่ายไม่ทำสิ่งนั้นในปัจจุบัน/อนาคต'
  },

  // --- g27: Clauses (Relative, Noun & Participle) ---
  {
    id: 'ex079',
    lessonId: 'g27',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Ms. Lin, ___ research on battery recycling won a national award, will join our lab in April.',
    options: ['who', 'whom', 'whose', 'which'],
    answerIndex: 2,
    spokenEn: 'Ms. Lin, whose research on battery recycling won a national award, will join our lab in April.',
    explanationTh: 'ต้องการ Relative Pronoun แสดงความเป็นเจ้าของเชื่อมระหว่าง Ms. Lin กับคำนาม research ("งานวิจัยของเธอ") จึงใช้ whose'
  },
  {
    id: 'ex080',
    lessonId: 'g27',
    phase: 'phase3',
    cefr: 'B2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'The new logistics center, ' },
      { label: 'A', text: 'that' },
      { text: ' was completed ' },
      { label: 'B', text: 'ahead of schedule' },
      { text: ', can store ' },
      { label: 'C', text: 'up to' },
      { text: ' twenty thousand ' },
      { label: 'D', text: 'pallets' },
      { text: '.' }
    ],
    options: ['that', 'ahead of schedule', 'up to', 'pallets'],
    answerIndex: 0,
    correctionText: 'that → which',
    spokenEn: 'The new logistics center, which was completed ahead of schedule, can store up to twenty thousand pallets.',
    explanationTh: 'ใน Non-defining Relative Clause (มีเครื่องหมาย comma คั่น) ห้ามใช้ that เด็ดขาด สำหรับสิ่งของ/สถานที่ต้องใช้ which'
  },
  {
    id: 'ex081',
    lessonId: 'g27',
    phase: 'phase3',
    cefr: 'C1',
    part: 'structure',
    examStyle: 'IELTS Grammar',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'Designing by an award-winning studio, the pavilion attracts thousands daily.',
      'Designed by an award-winning studio, the pavilion attracts thousands daily.',
      'Having designed by an award-winning studio, the pavilion attracts thousands daily.',
      'To design by an award-winning studio, the pavilion attracts thousands daily.'
    ],
    answerIndex: 1,
    spokenEn: 'Designed by an award-winning studio, the pavilion attracts thousands daily.',
    explanationTh: 'ประธานประโยคหลักคือ the pavilion (ศาลาจัดแสดง) เป็นผู้ "ถูกออกแบบ" จึงต้องลดรูป Participle Clause ด้วย V3 (Designed by...)'
  },

  // --- g28: Reported Speech ---
  {
    id: 'ex082',
    lessonId: 'g28',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The regional supervisor reminded the clerks ___ all receipts before closing the register.',
    options: ['verify', 'verifying', 'to verify', 'verified'],
    answerIndex: 2,
    spokenEn: 'The regional supervisor reminded the clerks to verify all receipts before closing the register.',
    explanationTh: 'การรายงานประโยคคำสั่งหรือการเตือนด้วย remind + กรรม ต้องตามด้วย to V1 คือ to verify'
  },
  {
    id: 'ex083',
    lessonId: 'g28',
    phase: 'phase3',
    cefr: 'B2',
    part: 'passage',
    examStyle: 'TGAT Text Completion',
    passageTitle: 'Minutes of Meeting',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'During yesterday’s press briefing, the spokesperson confirmed that the rail operator ___ a new express line the following spring.',
    options: ['launches', 'will launch', 'would launch', 'has launched'],
    answerIndex: 2,
    spokenEn: 'During yesterday’s press briefing, the spokesperson confirmed that the rail operator would launch a new express line the following spring.',
    explanationTh: 'กริยานำรายงานเป็นอดีต (confirmed) และบอกเวลาในอนาคตที่เปลี่ยนเป็น the following spring จึงต้องถอย Tense (Backshift) จาก will เป็น would launch'
  },
  {
    id: 'ex084',
    lessonId: 'g28',
    phase: 'phase3',
    cefr: 'B2',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่มีความหมายตรงกับประโยคต้นฉบับและถูกหลักไวยากรณ์',
    sentence: '“Did you submit the customs declaration yesterday?” the officer asked me.',
    options: [
      'The officer asked me if did I submit the customs declaration the day before.',
      'The officer asked me whether I had submitted the customs declaration the day before.',
      'The officer asked me that I submitted the customs declaration yesterday.',
      'The officer asked me if had I submitted the customs declaration yesterday.'
    ],
    answerIndex: 1,
    spokenEn: 'The officer asked me whether I had submitted the customs declaration the day before.',
    explanationTh: 'รายงานคำถาม Yes/No: ใช้ if/whether + ประธาน + กริยา (I had submitted — ถอยจาก Past Simple เป็น Past Perfect) และเปลี่ยน yesterday เป็น the day before'
  },

  // --- g29: Word Formation, Connectors, Parallel & Inversion ---
  {
    id: 'ex085',
    lessonId: 'g29',
    phase: 'phase3',
    cefr: 'C1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '___ the unexpected port congestion, our logistics partners delivered all seasonal stock on time.',
    options: ['Although', 'Even though', 'Notwithstanding', 'Whereas'],
    answerIndex: 2,
    spokenEn: 'Notwithstanding the unexpected port congestion, our logistics partners delivered all seasonal stock on time.',
    explanationTh: 'หลังช่องว่างเป็นวลีนาม (the unexpected port congestion — ไม่มีกริยาแท้) จึงต้องใช้ Preposition เช่น Notwithstanding / Despite ไม่ใช่ Conjunction (Although / Even though / Whereas)'
  },
  {
    id: 'ex086',
    lessonId: 'g29',
    phase: 'phase3',
    cefr: 'C1',
    part: 'passage',
    examStyle: 'IELTS Grammar',
    passageTitle: 'Editorial Excerpt',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Urban planners must balance economic growth with environmental sustainability. Not only ___ lower carbon emissions, but it also makes neighborhoods safer for cyclists.',
    options: [
      'expanded public transit does',
      'does expanded public transit',
      'is expanded public transit',
      'expanded public transit can'
    ],
    answerIndex: 1,
    spokenEn: 'Not only does expanded public transit lower carbon emissions, but it also makes neighborhoods safer for cyclists.',
    explanationTh: 'เมื่อขึ้นต้นประโยคด้วยคำเชิงปฏิเสธ/จำกัดอย่าง Not only ต้องใช้ Inversion (กริยาช่วย + ประธาน + กริยาแท้): Not only does expanded public transit lower...'
  },
  {
    id: 'ex087',
    lessonId: 'g29',
    phase: 'phase3',
    cefr: 'C1',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'The role requires analyzing sales trends, drafting quarterly budgets, and to coach new staff.',
      'The role requires analyzing sales trends, drafting quarterly budgets, and coaching new staff.',
      'The role requires to analyze sales trends, drafting quarterly budgets, and coaching new staff.',
      'The role requires analyzing sales trends, to draft quarterly budgets, and coaching new staff.'
    ],
    answerIndex: 1,
    spokenEn: 'The role requires analyzing sales trends, drafting quarterly budgets, and coaching new staff.',
    explanationTh: 'Parallel Structure (โครงสร้างคู่ขนาน): กริยาในชุดรายการต้องเป็นรูปเดียวกันทั้งหมด (analyzing..., drafting..., and coaching...)'
  },

  // --- g30: Thai-English Grammar Traps ---
  {
    id: 'ex088',
    lessonId: 'g30',
    phase: 'phase3',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Our overseas partners ___ the eco-friendly packaging prototype at yesterday’s showcase.',
    options: ['very liked', 'liked very', 'really liked', 'much liked'],
    answerIndex: 2,
    spokenEn: 'Our overseas partners really liked the eco-friendly packaging prototype at yesterday’s showcase.',
    explanationTh: 'กับดักภาษาไทย: ห้ามวาง very หน้าคำกริยา like (very like ผิด) ให้ใช้ really liked หรือ liked ... very much แทน'
  },
  {
    id: 'ex089',
    lessonId: 'g30',
    phase: 'phase3',
    cefr: 'B1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Before ' },
      { label: 'A', text: 'returning to home' },
      { text: ' after the conference, ' },
      { label: 'B', text: 'my colleagues' },
      { text: ' ' },
      { label: 'C', text: 'visited' },
      { text: ' the exhibition ' },
      { label: 'D', text: 'downtown' },
      { text: '.' }
    ],
    options: ['returning to home', 'my colleagues', 'visited', 'downtown'],
    answerIndex: 0,
    correctionText: 'returning to home → returning home',
    spokenEn: 'Before returning home after the conference, my colleagues visited the exhibition downtown.',
    explanationTh: 'คำว่า home เมื่อใช้กับกริยาบอกการเคลื่อนที่ (go, come, return, arrive) ทำหน้าที่เป็น Adverb จึงไม่ต้องใส่บุพบท to (ใช้ returning home)'
  },
  {
    id: 'ex090',
    lessonId: 'g30',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'According to the facility brochure, ___ three charging stations in the underground garage.',
    options: ['it has', 'there have', 'there are', 'they have'],
    answerIndex: 2,
    spokenEn: 'According to the facility brochure, there are three charging stations in the underground garage.',
    explanationTh: 'การบอกว่า "มี..." (การมีอยู่ของสิ่งของในสถานที่) ในภาษาอังกฤษต้องใช้ There is / There are (ตามด้วยคำนามพหูพจน์ stations จึงใช้ there are) ไม่ใช่ it has หรือ there have'
  },

  /* ===================== 7 NEW BRIDGE LESSONS EXAM BANK (ex091–ex111 · 21 Questions) ===================== */

  // --- g02b: Demonstratives & Quantifiers ---
  {
    id: 'ex091',
    lessonId: 'g02b',
    phase: 'phase1',
    cefr: 'A2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Because the logistics team had very ___ information about the delay, they could not estimate the arrival time.',
    options: ['few', 'many', 'little', 'several'],
    answerIndex: 2,
    spokenEn: 'Because the logistics team had very little information about the delay, they could not estimate the arrival time.',
    explanationTh: 'information เป็นคำนามนับไม่ได้ และบริบทแง่ลบ (จึงคาดคะเนเวลาไม่ได้) ต้องใช้ little ไม่ใช่ few/many/several'
  },
  {
    id: 'ex092',
    lessonId: 'g02b',
    phase: 'phase1',
    cefr: 'A1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { label: 'A', text: 'This' },
      { text: ' ceramic mugs ' },
      { label: 'B', text: 'on the display shelf' },
      { text: ' were ' },
      { label: 'C', text: 'handcrafted' },
      { text: ' by artisans ' },
      { label: 'D', text: 'in Lampang' },
      { text: '.' }
    ],
    options: ['This', 'on the display shelf', 'handcrafted', 'in Lampang'],
    answerIndex: 0,
    correctionText: 'This → These',
    spokenEn: 'These ceramic mugs on the display shelf were handcrafted by artisans in Lampang.',
    explanationTh: 'ceramic mugs เป็นคำนามพหูพจน์และใช้กริยา were จึงต้องใช้คำชี้เฉพาะพหูพจน์คือ These แทน This'
  },
  {
    id: 'ex093',
    lessonId: 'g02b',
    phase: 'phase1',
    cefr: 'A2',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Catering Confirmation',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'We have prepared vegetarian sandwiches and pastries for the workshop. Would you like ___ herbal tea sent to the boardroom before the afternoon session starts?',
    options: ['any', 'some', 'many', 'few'],
    answerIndex: 1,
    spokenEn: 'Would you like some herbal tea sent to the boardroom before the afternoon session starts?',
    explanationTh: 'ประโยคเสนอ/เชิญชวนอย่างสุภาพ (Would you like...?) ใช้ some ไม่ใช่ any (และ herbal tea เป็นนามนับไม่ได้จึงใช้ many/few ไม่ได้)'
  },

  // --- g06b: Yes/No & Wh-Questions ---
  {
    id: 'ex094',
    lessonId: 'g06b',
    phase: 'phase1',
    cefr: 'A2',
    part: 'completion',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '___ authorized the emergency maintenance shutdown last midnight?',
    options: ['Who did', 'Who', 'Whom did', 'Whose'],
    answerIndex: 1,
    spokenEn: 'Who authorized the emergency maintenance shutdown last midnight?',
    explanationTh: 'ถามหาตัวผู้กระทำ (ประธาน) โดยตามด้วยกริยาอดีต authorized ทันที จึงใช้ Who ตัวเดียวโดยไม่ต้องใส่ did'
  },
  {
    id: 'ex095',
    lessonId: 'g06b',
    phase: 'phase1',
    cefr: 'A2',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { label: 'A', text: 'How often' },
      { text: ' does the quality team ' },
      { label: 'B', text: 'inspects' },
      { text: ' the cold-storage units ' },
      { label: 'C', text: 'at' },
      { text: ' the ' },
      { label: 'D', text: 'central depot' },
      { text: '?' }
    ],
    options: ['How often', 'inspects', 'at', 'central depot'],
    answerIndex: 1,
    correctionText: 'inspects → inspect',
    spokenEn: 'How often does the quality team inspect the cold-storage units at the central depot?',
    explanationTh: 'มีกริยาช่วย does อยู่หน้าประธานแล้ว กริยาแท้ต้องกลับเป็นรูปฐาน V1 คือ inspect ไม่เติม -s'
  },
  {
    id: 'ex096',
    lessonId: 'g06b',
    phase: 'phase1',
    cefr: 'A2',
    part: 'structure',
    examStyle: 'TGAT Grammar',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'How long does it takes to reach the ferry pier from here?',
      'How long does it take to reach the ferry pier from here?',
      'How far does it take to reach the ferry pier from here?',
      'How long it takes to reach the ferry pier from here?'
    ],
    answerIndex: 1,
    spokenEn: 'How long does it take to reach the ferry pier from here?',
    explanationTh: 'ถามระยะเวลาใช้ How long + does + it + take (V1 ไม่เติม -s) + to V1'
  },

  // --- g16b: 12 Tenses Contrast ---
  {
    id: 'ex097',
    lessonId: 'g16b',
    phase: 'phase2',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'Our customer service desk ___ over three hundred tickets since the software upgrade went live.',
    options: ['resolved', 'has resolved', 'resolves', 'was resolving'],
    answerIndex: 1,
    spokenEn: 'Our customer service desk has resolved over three hundred tickets since the software upgrade went live.',
    explanationTh: 'มี since + อดีต (went live) และเน้นจำนวนงานที่ทำเสร็จจนถึงตอนนี้ จึงใช้ Present Perfect: has resolved'
  },
  {
    id: 'ex098',
    lessonId: 'g16b',
    phase: 'phase2',
    cefr: 'B2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Our regional distributor ' },
      { label: 'A', text: 'has signed' },
      { text: ' the exclusive supply agreement ' },
      { label: 'B', text: 'in' },
      { text: ' ' },
      { label: 'C', text: 'November 2022' },
      { text: ' before expanding ' },
      { label: 'D', text: 'nationwide' },
      { text: '.' }
    ],
    options: ['has signed', 'in', 'November 2022', 'nationwide'],
    answerIndex: 0,
    correctionText: 'has signed → signed',
    spokenEn: 'Our regional distributor signed the exclusive supply agreement in November 2022 before expanding nationwide.',
    explanationTh: 'ระบุเวลาอดีตที่จบลงชัดเจน (in November 2022) จึงต้องใช้ Past Simple (signed) ห้ามใช้ Present Perfect (has signed)'
  },
  {
    id: 'ex099',
    lessonId: 'g16b',
    phase: 'phase2',
    cefr: 'B2',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Warehouse Relocation Schedule',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'The moving trucks are scheduled to arrive at dawn on Saturday. By 6:00 p.m. that evening, the crew ___ all shelving units to the new facility.',
    options: ['relocates', 'will have relocated', 'has relocated', 'relocated'],
    answerIndex: 1,
    spokenEn: 'By 6:00 p.m. that evening, the crew will have relocated all shelving units to the new facility.',
    explanationTh: 'By + เวลาในอนาคต (By 6:00 p.m. that evening) แสดงว่าการย้ายจะเสร็จสิ้นก่อนเวลานั้น ใช้ Future Perfect: will have relocated'
  },

  // --- g19b: Dependent Prepositions ---
  {
    id: 'ex100',
    lessonId: 'g19b',
    phase: 'phase2',
    cefr: 'B1',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The final approval of the construction permit depends entirely ___ the environmental impact assessment.',
    options: ['with', 'for', 'on', 'in'],
    answerIndex: 2,
    spokenEn: 'The final approval of the construction permit depends entirely on the environmental impact assessment.',
    explanationTh: 'depend คู่กับบุพบท on เสมอ (depend on = ขึ้นอยู่กับ)'
  },
  {
    id: 'ex101',
    lessonId: 'g19b',
    phase: 'phase2',
    cefr: 'B2',
    part: 'error_id',
    examStyle: 'A-Level Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'Several senior engineers ' },
      { label: 'A', text: 'objected to' },
      { text: ' ' },
      { label: 'B', text: 'shorten' },
      { text: ' the safety testing phase ' },
      { label: 'C', text: 'by' },
      { text: ' two ' },
      { label: 'D', text: 'weeks' },
      { text: '.' }
    ],
    options: ['objected to', 'shorten', 'by', 'weeks'],
    answerIndex: 1,
    correctionText: 'shorten → shortening',
    spokenEn: 'Several senior engineers objected to shortening the safety testing phase by two weeks.',
    explanationTh: 'to ใน object to เป็นบุพบท ต้องตามด้วย Gerund (V-ing) คือ shortening ไม่ใช่ V1'
  },
  {
    id: 'ex102',
    lessonId: 'g19b',
    phase: 'phase2',
    cefr: 'B1',
    part: 'passage',
    examStyle: 'TOEIC Part 6',
    passageTitle: 'Onboarding Handbook',
    promptTh: 'อ่านข้อความสั้นด้านล่าง แล้วเลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามบริบท',
    passageEn: 'Every regional coordinator is responsible ___ submitting a weekly inventory summary before Friday noon. Late reports may delay restocking.',
    options: ['to', 'with', 'for', 'at'],
    answerIndex: 2,
    spokenEn: 'Every regional coordinator is responsible for submitting a weekly inventory summary before Friday noon.',
    explanationTh: 'responsible คู่กับบุพบท for + V-ing (รับผิดชอบในการทำ...)'
  },

  // --- g21b: Conjunctions & Transitions ---
  {
    id: 'ex103',
    lessonId: 'g21b',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '___ the steep rise in raw material costs, the bakery kept its retail prices unchanged.',
    options: ['Although', 'Even though', 'In spite of', 'Whereas'],
    answerIndex: 2,
    spokenEn: 'In spite of the steep rise in raw material costs, the bakery kept its retail prices unchanged.',
    explanationTh: 'หลังช่องว่างเป็นวลีนาม (the steep rise in raw material costs — ไม่มีกริยาแท้) จึงต้องใช้ Prepositional Connector คือ In spite of'
  },
  {
    id: 'ex104',
    lessonId: 'g21b',
    phase: 'phase3',
    cefr: 'B2',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { label: 'A', text: 'Because of' },
      { text: ' the ferry schedule ' },
      { label: 'B', text: 'was disrupted' },
      { text: ' by strong winds, many tourists ' },
      { label: 'C', text: 'stayed' },
      { text: ' an extra night ' },
      { label: 'D', text: 'on the island' },
      { text: '.' }
    ],
    options: ['Because of', 'was disrupted', 'stayed', 'on the island'],
    answerIndex: 0,
    correctionText: 'Because of → Because',
    spokenEn: 'Because the ferry schedule was disrupted by strong winds, many tourists stayed an extra night on the island.',
    explanationTh: 'ข้างหลังมีประธานและกริยาแท้ (the ferry schedule was disrupted) จึงต้องใช้ Conjunction คือ Because ไม่ใช่ Because of'
  },
  {
    id: 'ex105',
    lessonId: 'g21b',
    phase: 'phase3',
    cefr: 'B2',
    part: 'structure',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'The new train is quiet, however, tickets sell out quickly.',
      'The new train is quiet; however, tickets sell out quickly.',
      'Despite the new train is quiet, tickets sell out quickly.',
      'Although the new train is quiet, but tickets sell out quickly.'
    ],
    answerIndex: 1,
    spokenEn: 'The new train is quiet; however, tickets sell out quickly.',
    explanationTh: 'however เป็น Transition Adverb ต้องคั่นประโยคอิสระสองประโยคด้วยอัฒภาค (;) หรือมหัพภาค (.) ตามด้วย comma'
  },

  // --- g27b: Participle Clauses & Reduced Clauses ---
  {
    id: 'ex106',
    lessonId: 'g27b',
    phase: 'phase3',
    cefr: 'B2',
    part: 'completion',
    examStyle: 'TOEIC Part 5',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: '___ in 2012 as a small family workshop, the studio now exports ceramics to thirty countries.',
    options: ['Establishing', 'Established', 'To establish', 'Having establishing'],
    answerIndex: 1,
    spokenEn: 'Established in 2012 as a small family workshop, the studio now exports ceramics to thirty countries.',
    explanationTh: 'ประธานหลัง comma คือ the studio ซึ่ง "ถูกก่อตั้งขึ้น" (Passive) จึงต้องลดรูป Participle Clause ด้วย V3 คือ Established'
  },
  {
    id: 'ex107',
    lessonId: 'g27b',
    phase: 'phase3',
    cefr: 'C1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { text: 'All invoices ' },
      { label: 'A', text: 'approving' },
      { text: ' by the finance controller ' },
      { label: 'B', text: 'are processed' },
      { text: ' ' },
      { label: 'C', text: 'automatically' },
      { text: ' every ' },
      { label: 'D', text: 'Wednesday' },
      { text: '.' }
    ],
    options: ['approving', 'are processed', 'automatically', 'Wednesday'],
    answerIndex: 0,
    correctionText: 'approving → approved',
    spokenEn: 'All invoices approved by the finance controller are processed automatically every Wednesday.',
    explanationTh: 'ใบแจ้งหนี้ (invoices) เป็นผู้ "ถูกอนุมัติ" (มี by the finance controller) จึงต้องลดรูป Relative Clause ด้วย V3 คือ approved'
  },
  {
    id: 'ex108',
    lessonId: 'g27b',
    phase: 'phase3',
    cefr: 'C1',
    part: 'structure',
    examStyle: 'IELTS Grammar',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'Reviewing the final blueprints, a critical measurement error was noticed.',
      'Reviewing the final blueprints, the lead architect noticed a critical measurement error.',
      'Having reviewed the final blueprints, the construction budget became clearer.',
      'Reviewed the final blueprints, the lead architect spotted a measurement error.'
    ],
    answerIndex: 1,
    spokenEn: 'Reviewing the final blueprints, the lead architect noticed a critical measurement error.',
    explanationTh: 'ประธานหลัง comma ต้องเป็นผู้ที่กำลังตรวจแบบแปลนจริง (the lead architect) เพื่อหลีกเลี่ยง Dangling Participle'
  },

  // --- g29b: Subjunctive, Cleft Sentences & Inversion ---
  {
    id: 'ex109',
    lessonId: 'g29b',
    phase: 'phase3',
    cefr: 'C1',
    part: 'completion',
    examStyle: 'A-Level Structure',
    promptTh: 'เลือกคำหรือวลีที่เติมลงในช่องว่างได้ถูกต้องตามหลักไวยากรณ์',
    sentence: 'The safety committee insisted that every contractor ___ the updated protocol before entering the site.',
    options: ['signs', 'signed', 'sign', 'signing'],
    answerIndex: 2,
    spokenEn: 'The safety committee insisted that every contractor sign the updated protocol before entering the site.',
    explanationTh: 'หลัง insist that + ประธาน ใช้ Mandative Subjunctive กริยารูปฐาน V1 เสมอคือ sign (ไม่เติม -s แม้ประธานเป็นเอกพจน์)'
  },
  {
    id: 'ex110',
    lessonId: 'g29b',
    phase: 'phase3',
    cefr: 'C1',
    part: 'error_id',
    examStyle: 'CU-TEP Error ID',
    promptTh: 'ระบุส่วนที่ขีดเส้นใต้ (A, B, C หรือ D) ที่มีข้อผิดพลาดทางไวยากรณ์',
    segments: [
      { label: 'A', text: 'Seldom' },
      { text: ' ' },
      { label: 'B', text: 'the museum has' },
      { text: ' displayed such a ' },
      { label: 'C', text: 'well-preserved' },
      { text: ' collection of ' },
      { label: 'D', text: 'ancient textiles' },
      { text: '.' }
    ],
    options: ['Seldom', 'the museum has', 'well-preserved', 'ancient textiles'],
    answerIndex: 1,
    correctionText: 'the museum has → has the museum',
    spokenEn: 'Seldom has the museum displayed such a well-preserved collection of ancient textiles.',
    explanationTh: 'ขึ้นต้นประโยคด้วยคำเชิงปฏิเสธ Seldom ต้องใช้ Negative Inversion สลับกริยาช่วยไว้หน้าประธาน: has the museum'
  },
  {
    id: 'ex111',
    lessonId: 'g29b',
    phase: 'phase3',
    cefr: 'C1',
    part: 'structure',
    examStyle: 'IELTS Grammar',
    promptTh: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด',
    sentence: '',
    options: [
      'No sooner the keynote ended than the delegates rushed to the exhibition hall.',
      'No sooner had the keynote ended when the delegates rushed to the exhibition hall.',
      'No sooner had the keynote ended than the delegates rushed to the exhibition hall.',
      'Hardly had the keynote ended than the delegates rushed to the exhibition hall.'
    ],
    answerIndex: 2,
    spokenEn: 'No sooner had the keynote ended than the delegates rushed to the exhibition hall.',
    explanationTh: 'สูตร Inversion ที่ถูกต้องคือ No sooner + had + S + V3 + than + S + V2 (ส่วน Hardly คู่กับ when)'
  }
];
