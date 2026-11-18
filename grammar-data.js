/* =========================================================
 * Oxflashcards Grammar Academy Curriculum & Exercise Bank
 * Phase 1: Lessons 1-10 (Foundations: Zero to Sentence Mastery)
 * Plus Roadmap Metadata for Lessons 11-30 (Phases 2 & 3)
 * ========================================================= */

const GRAMMAR_PHASES = [
  {
    id: 'phase1',
    number: 1,
    badge: 'A0–A2',
    titleTh: 'ปูพื้นฐานคำ & โครงสร้างประโยค',
    subtitleTh: 'เริ่มจาก 0 เข้าใจชนิดคำ สรรพนาม คำนำหน้านาม กริยาช่วย จนแต่งประโยคถูกหลัก',
    lessonRange: [1, 10]
  },
  {
    id: 'phase2',
    number: 2,
    badge: 'A1–B2',
    titleTh: '12 Tenses, บุพบท & รูปกริยาสำคัญ',
    subtitleTh: 'เวลา 12 กาล, Modal Verbs, Gerund/Infinitive และ Phrasal/Linking Verbs',
    lessonRange: [11, 19]
  },
  {
    id: 'phase3',
    number: 3,
    badge: 'B1–C1',
    titleTh: 'โครงสร้างกลาง–สูง & กับดักคนไทย',
    subtitleTh: 'Comparison, Passive, If-Clauses, Wish, Clauses, Reported Speech & จุดผิดคนไทย',
    lessonRange: [20, 30]
  }
];

const GRAMMAR_UPCOMING_ROADMAP = [
  { id: 'g11', num: 11, phase: 'phase2', level: 'A1–B1', titleTh: 'Prepositions (in / on / at & บุพบทเวลา-สถานที่)', descTh: 'ใช้บอกเวลา สถานที่ ทิศทาง since/for/during/by/until แบบไม่ต้องท่องจำ' },
  { id: 'g12', num: 12, phase: 'phase2', level: 'A1–A2', titleTh: 'Present Simple & Present Continuous', descTh: 'นิสัย/ความจริง vs กำลังเกิดขึ้น + State Verbs ที่ห้ามเติม -ing' },
  { id: 'g13', num: 13, phase: 'phase2', level: 'A2–B1', titleTh: 'Present Perfect & Present Perfect Continuous', descTh: 'have/has + V3, since/for/already/yet/ever และเทียบกับ Past Simple' },
  { id: 'g14', num: 14, phase: 'phase2', level: 'A1–B1', titleTh: 'Past Simple, Past Continuous & used to', descTh: 'เหตุการณ์ในอดีต, เหตุการณ์แทรกซ้อน และ used to vs be used to' },
  { id: 'g15', num: 15, phase: 'phase2', level: 'B1–B2', titleTh: 'Past Perfect & Past Perfect Continuous', descTh: 'การเรียงลำดับเหตุการณ์ก่อน-หลังในอดีตด้วย had + V3' },
  { id: 'g16', num: 16, phase: 'phase2', level: 'A2–B2', titleTh: 'Future Tenses ครบทั้ง 4 รูปแบบ', descTh: 'will vs be going to, Future Continuous และ Future Perfect' },
  { id: 'g17', num: 17, phase: 'phase2', level: 'A2–B2', titleTh: 'Modal Verbs & Modal Perfect', descTh: 'can/could/may/might/must/should/have to และ should have V3' },
  { id: 'g18', num: 18, phase: 'phase2', level: 'B1–B2', titleTh: 'Gerund, Infinitive & Causative Verbs', descTh: 'V-ing vs to V1, stop/remember/try และ make/let/have/get' },
  { id: 'g19', num: 19, phase: 'phase2', level: 'A2–B2', titleTh: 'Transitive, Linking & Phrasal Verbs', descTh: 'discuss/explain to, Linking Verbs + Adj และ Phrasal Verbs แยกกรรม' },
  { id: 'g20', num: 20, phase: 'phase3', level: 'A2–B1', titleTh: 'Adjectives (-ed/-ing) & ตำแหน่ง Adverb', descTh: 'bored vs boring, Adverb of Frequency และลำดับการวาง Adjective' },
  { id: 'g21', num: 21, phase: 'phase3', level: 'A2–B1', titleTh: 'Comparison (ขั้นเท่ากัน / ขั้นกว่า / ขั้นสุด)', descTh: 'as...as, -er/more, -est/the most, รูปพิเศษ และ the more..., the more...' },
  { id: 'g22', num: 22, phase: 'phase3', level: 'A2–B1', titleTh: 'Dummy Subjects (It / There) & So / Neither', descTh: 'It takes / It is + adj + to V1, There is/are และ So do I / Neither do I' },
  { id: 'g23', num: 23, phase: 'phase3', level: 'A2–B1', titleTh: 'Indirect Questions, Imperatives & Exclamations', descTh: 'คำถามสุภาพ Could you tell me where... และประโยคคำสั่ง/ชักชวน' },
  { id: 'g24', num: 24, phase: 'phase3', level: 'B1–B2', titleTh: 'Active & Passive Voice ครบทุก Tense', descTh: 'เปลี่ยนผู้กระทำ ↔ ผู้ถูกกระทำด้วย be + V3 และ Modal Passive' },
  { id: 'g25', num: 25, phase: 'phase3', level: 'B1–B2', titleTh: 'If-Clauses (Type 0, 1, 2, 3) & Mixed Conditionals', descTh: 'ประโยคเงื่อนไขครบทุกแบบ พร้อม unless, provided that, in case' },
  { id: 'g26', num: 26, phase: 'phase3', level: 'B1–B2', titleTh: 'Unreal Past (Wish / If only / would rather / It’s time)', descTh: 'การใช้รูปอดีตเพื่อสมมติหรือแสดงความเสียดายในปัจจุบันและอดีต' },
  { id: 'g27', num: 27, phase: 'phase3', level: 'B1–B2', titleTh: 'Relative Clauses, Noun Clauses & Participles', descTh: 'who/whom/whose/which/that/where, Defining vs Non-defining และ V-ing/V3' },
  { id: 'g28', num: 28, phase: 'phase3', level: 'B1–B2', titleTh: 'Reported Speech (Direct & Indirect Speech)', descTh: 'การรายงานคำพูด กฎย้อน Tense (Backshift), เปลี่ยน Pronoun และเวลา' },
  { id: 'g29', num: 29, phase: 'phase3', level: 'B2–C1', titleTh: 'Word Formation, Connectors, Parallel & Inversion', descTh: 'Prefixes/Suffixes, although vs despite, Parallel Structure & Inversion' },
  { id: 'g30', num: 30, phase: 'phase3', level: 'A1–B2', titleTh: 'Thai–English Grammar Traps (รวมจุดผิดคลาสสิก)', descTh: 'แก้นิสัยแปลตรงตัว: Although...but, Because...so, go home, very like' }
];

const GRAMMAR_LESSONS = [
  {
    id: 'g01',
    num: 1,
    phase: 'phase1',
    level: 'A0',
    titleTh: 'Parts of Speech (ชนิดของคำ 8 ชนิด)',
    titleEn: 'Parts of Speech',
    estMinutes: 4,
    summaryTh: 'ภาษาอังกฤษจัดคำทุกคำออกเป็น 8 หน้าที่หลัก ถ้าดูออกว่าแต่ละคำเป็น "คำชนิดไหน" จะวางตำแหน่งในประโยคได้แม่นยำทันที',
    formulas: [
      { label: 'โครงสร้างหลักในประโยค', parts: ['Noun / Pronoun (ประธาน)', '+', 'Verb (กริยา)', '+', '(Adjective +) Noun / Pronoun (กรรม)'] },
      { label: 'การขยายกริยา vs ขยายคุณศัพท์', parts: ['Verb + Adverb (ขยายกริยา)', '|', 'Adverb + Adjective (ขยายคุณศัพท์)'] }
    ],
    tables: [
      {
        title: 'สรุป 8 ชนิดคำ (Parts of Speech) ที่ต้องรู้จักตั้งแต่ก้าวแรก',
        headers: ['ชนิดคำ', 'หน้าที่หลัก', 'ตัวอย่างคำ', 'ตัวอย่างในประโยค'],
        rows: [
          ['Noun (n.) คำนาม', 'ใช้เรียกคน สัตว์ สิ่งของ สถานที่ ความคิด (มักลงท้าย -tion/-ness)', 'teacher, coffee, Bangkok, happiness', 'The <b>teacher</b> drinks <b>coffee</b>.'],
          ['Pronoun (pron.) สรรพนาม', 'ใช้แทนคำนาม เพื่อไม่ให้พูดชื่อซ้ำ', 'I, you, he, she, it, they, we', '<b>She</b> works at a bank.'],
          ['Verb (v.) คำกริยา', 'บอกการกระทำ หรือสภาพ/ความรู้สึก', 'eat, study, work, is, feel', 'We <b>study</b> English every day.'],
          ['Adjective (adj.) คำคุณศัพท์', 'ขยาย "คำนาม" (วางหน้า Noun หรือหลัง Verb to Be / Linking Verbs)', 'happy, hot, careful, friendly', 'It is a <b>hot</b> day. / The soup <b>tastes good</b>.'],
          ['Adverb (adv.) กริยาวิเศษณ์', 'ขยาย Verb, Adj หรือ Adv (มักลงท้าย -ly · ยกเว้น friendly/lovely เป็น Adj!)', 'quickly, always, very, well', 'He drives <b>carefully</b>. / She runs <b>fast</b>.'],
          ['Preposition (prep.) บุพบท', 'เชื่อมคำนามเพื่อบอกเวลา ตำแหน่ง ทิศทาง', 'in, on, at, between, under, with', 'The cup is <b>between</b> two books.'],
          ['Conjunction (conj.) สันธาน', 'เชื่อมคำ วลี หรือประโยคเข้าด้วยกัน', 'and, but, or, because, so', 'I stayed home <b>because</b> it rained.'],
          ['Interjection (interj.) อุทาน', 'แสดงอารมณ์สั้นๆ มักมีเครื่องหมาย !', 'Wow!, Oh!, Oops!, Ouch!', '<b>Wow!</b> Your English is great.']
        ]
      }
    ],
    examples: [
      { en: 'The smart student answered clearly in class.', th: 'นักเรียนที่ฉลาดตอบอย่างชัดเจนในห้องเรียน', focus: 'smart (adj.) + student (n.) + answered (v.) + clearly (adv.) + in (prep.)' },
      { en: 'She bought a fresh mango because she loves sweet fruit.', th: 'เธอซื้อมะม่วงสดเพราะเธอชอบผลไม้รสหวาน', focus: 'She (pron.) + bought (v.) + fresh (adj.) + because (conj.)' },
      { en: 'Wow! They arrived early at the station.', th: 'ว้าว พวกเขามาถึงที่สถานีแต่เช้าเลย', focus: 'Wow (interj.) + They (pron.) + early (adv.) + at (prep.)' },
      { en: 'This warm soup tastes amazing and feels comforting.', th: 'ซุปอุ่นๆ ถ้วยนี้รสชาติเยี่ยมและกินแล้วรู้สึกสบายท้อง', focus: 'Linking Verbs (taste, feel, look, smell, sound, seem, become) + Adjective' }
    ],
    mistakes: [
      { wrong: 'He is a carefully driver.', right: 'He is a careful driver.', whyTh: 'หน้าคำนาม (driver) ต้องใช้ Adjective (careful) ไม่ใช่ Adverb (carefully)' },
      { wrong: 'She speaks English very good.', right: 'She speaks English very well.', whyTh: 'ขยายกริยา (speaks) ต้องใช้ Adverb คือ well (ดี) ไม่ใช่ Adjective คือ good' },
      { wrong: 'This mango smoothie tastes deliciously.', right: 'This mango smoothie tastes delicious.', whyTh: 'หลัง Linking Verbs (taste, smell, look, sound, feel, seem) ต้องตามด้วย Adjective เพื่อขยายประธาน' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกคำชนิด Adjective เพื่อขยายคำนาม (manager)',
        sentence: 'Our team has a very ___ manager who always helps everyone.',
        options: ['patience', 'patient', 'patiently', 'patiences'],
        answerIndex: 1,
        explanationTh: 'ตำแหน่งหน้าคำนาม (manager) ต้องใช้ Adjective (คำคุณศัพท์) คือ patient (ใจเย็น/อดทน) ส่วน patience เป็น Noun และ patiently เป็น Adverb'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Adverb เพื่อขยายคำกริยา (explained)',
        sentence: 'The instructor explained every grammar rule ___ so beginners understood.',
        options: ['clear', 'clarity', 'clearly', 'clearness'],
        answerIndex: 2,
        explanationTh: 'คำที่มาขยายกริยา explained ("อธิบายอย่างไร?") ต้องใช้ Adverb คือ clearly (อย่างชัดเจน)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Conjunction (คำสันธาน) เพื่อเชื่อมเหตุผลของประโยค',
        sentence: 'We canceled the picnic ___ a heavy storm started.',
        options: ['because', 'under', 'quickly', 'happy'],
        answerIndex: 0,
        explanationTh: 'because เป็น Conjunction เชื่อมประโยคบอกเหตุผล ส่วน under เป็นบุพบท, quickly เป็นกริยาวิเศษณ์ และ happy เป็นคุณศัพท์'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่วางตำแหน่ง Noun, Adjective และ Adverb ได้ถูกต้อง',
        tokens: ['The', 'young', 'chef', 'cooks', 'very', 'well.'],
        explanationTh: 'วาง Adjective (young) หน้า Noun (chef) ตามด้วย Verb (cooks) และ Adverb (very well) เพื่อขยายกริยา'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคสมบูรณ์ (มีคำนาม กริยา Adverb และคำบอกเวลา)',
        tokens: ['My', 'sister', 'plays', 'the', 'piano', 'very', 'well', 'every', 'day.'],
        explanationTh: 'ประธาน (My sister) + กริยา (plays) + กรรม (the piano) + Adverb ขยายกริยา (very well) + คำบอกเวลา (every day)'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ชนิดคำผิดตำแหน่งในประโยค แล้วเลือกคำแก้ไขที่ถูกต้อง',
        tokens: ['Listen', 'careful', 'to', 'the', 'audio', 'clip.'],
        errorIndex: 1,
        corrections: ['carefully', 'careless', 'caring'],
        correctOptionIndex: 0,
        explanationTh: 'Listen เป็นคำกริยา (Verb) จึงต้องขยายด้วย Adverb คือ carefully (อย่างตั้งใจ) ไม่ใช่ Adjective (careful)'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ชนิดคำผิดหน้าที่ แล้วเลือกคำที่ถูกต้อง',
        tokens: ['This', 'is', 'an', 'importantly', 'lesson', 'for', 'beginners.'],
        errorIndex: 3,
        corrections: ['important', 'importance', 'import'],
        correctOptionIndex: 0,
        explanationTh: 'คำที่วางหน้าคำนาม lesson ต้องเป็น Adjective คือ important (สำคัญ) ไม่ใช่ Adverb (importantly)'
      },
      {
        type: 'transform',
        promptTh: 'เลือกชนิดของคำในวงเล็บ [ ] ในประโยค: "She placed the cup [between] two books."',
        sentence: 'คำว่า "between" ทำหน้าที่เป็นคำชนิดใดในประโยคนี้?',
        options: ['Adjective (คำคุณศัพท์)', 'Preposition (คำบุพบท)', 'Conjunction (คำสันธาน)', 'Interjection (คำอุทาน)'],
        answerIndex: 1,
        explanationTh: 'between อยู่หน้าคำนาม two books เพื่อบอกตำแหน่ง (ระหว่างหนังสือสองเล่ม) จึงเป็น Preposition'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำอุทาน (Interjection) ที่เข้ากับบริบทประโยค',
        sentence: '___! I accidentally dropped my phone on the floor.',
        options: ['Oops', 'Because', 'Slowly', 'Table'],
        answerIndex: 0,
        explanationTh: 'Oops! เป็นคำอุทาน (Interjection) ใช้เมื่อทำของหล่นหรือพลาดเล็กน้อยโดยไม่ตั้งใจ'
      },
      {
        type: 'cloze',
        promptTh: 'หลัง Linking Verb (tastes) ต้องใช้ Adjective เพื่อบอกลักษณะของคำนาม (soup)',
        sentence: 'This homemade vegetable soup tastes really ___.',
        options: ['deliciously', 'delicious', 'delight', 'sweetly'],
        answerIndex: 1,
        explanationTh: 'กริยาประสาทสัมผัสอย่าง taste, look, feel, smell ตามด้วย Adjective (delicious = อร่อย) เพื่อขยายประธาน soup ไม่ใช่ Adverb'
      },
      {
        type: 'cloze',
        promptTh: 'สังเกตคำลงท้าย -ly ที่ทำหน้าที่เป็น Adjective (ไม่ใช่ Adverb) เพื่อขยายคำนาม',
        sentence: 'Our new receptionist gave every visitor a ___ smile.',
        options: ['friendly', 'friendliness', 'kindly', 'warmly'],
        answerIndex: 0,
        explanationTh: 'friendly (เป็นมิตร) แม้ลงท้าย -ly แต่เป็น Adjective! วางหน้าคำนาม smile ได้ทันที (ส่วน warmly/kindly เป็น Adverb)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำชนิด Noun (คำนาม) หลังคำว่า your (สังเกต suffix -ness)',
        sentence: 'Thank you so much for your ___ during our stay in Chiang Mai.',
        options: ['kind', 'kindness', 'kindly', 'kinder'],
        answerIndex: 1,
        explanationTh: 'หลัง Possessive (your) ต้องเป็นคำนาม คือ kindness (ความใจดี, ลงท้าย -ness)'
      }
    ]
  },
  {
    id: 'g02',
    num: 2,
    phase: 'phase1',
    level: 'A0–A1',
    titleTh: 'Nouns, Pronouns & Possessives',
    titleEn: 'Nouns, Pronouns & Possessives',
    estMinutes: 5,
    summaryTh: 'แยกระหว่างคำนามนับได้-นับไม่ได้ รู้จักสรรพนามทั้ง 5 ช่อง (ประธาน/กรรม/แสดงความเป็นเจ้าของ/สะท้อน) และการใช้ ’s อย่างถูกต้อง',
    formulas: [
      { label: 'สรรพนาม 5 รูป', parts: ['Subject (I)', '→', 'Object (me)', '→', 'Poss. Adj (my + N)', '→', 'Poss. Pron (mine)', '→', 'Reflexive (myself)'] },
      { label: 'แสดงความเป็นเจ้าของ (’s) & นับไม่ได้', parts: ['เอกพจน์: the boy’s bag', '|', 'พหูพจน์ลงท้าย -s: the boys’ bags', '|', 'นามนับไม่ได้ต้องนับด้วย: a piece of + N'] }
    ],
    tables: [
      {
        title: 'ตารางสรรพนามครบทั้ง 5 ช่อง (จำเป็นที่สุดสำหรับแต่งประโยค)',
        headers: ['ประธาน (Subject)', 'กรรม (Object)', 'นำหน้านาม (Poss. Adj)', 'แทนคำนาม (Poss. Pron)', 'สะท้อนตนเอง (Reflexive)'],
        rows: [
          ['I (ฉัน)', 'me', 'my (+ noun)', 'mine', 'myself'],
          ['you (คุณ)', 'you', 'your (+ noun)', 'yours', 'yourself / yourselves'],
          ['he (เขา)', 'him', 'his (+ noun)', 'his', 'himself'],
          ['she (เธอ)', 'her', 'her (+ noun)', 'hers', 'herself'],
          ['it (มัน)', 'it', 'its (+ noun)', '— (ไม่นิยมใช้)', 'itself'],
          ['we (เรา)', 'us', 'our (+ noun)', 'ours', 'ourselves'],
          ['they (พวกเขา)', 'them', 'their (+ noun)', 'theirs', 'themselves']
        ]
      },
      {
        title: 'คำนามพหูพจน์เปลี่ยนรูป · นามนับไม่ได้ · และการใช้ ’s (ร่วม vs แยก)',
        headers: ['หัวข้อ', 'หลักการสำคัญ', 'ตัวอย่างถูกต้อง'],
        rows: [
          ['<b>Irregular Plurals</b> (พหูพจน์เปลี่ยนรูป)', 'ห้ามเติม -s ต่อท้ายคำเปลี่ยนรูป', 'child → <b>children</b> · person → <b>people</b> · tooth → <b>teeth</b> · woman → <b>women</b>'],
          ['<b>Uncountable Nouns</b> (ห้ามเติม s / a)', 'advice, information, luggage, furniture, equipment, homework, news', 'ใช้ลักษณนามช่วยนับ: <b>a piece of</b> advice / <b>two pieces of</b> luggage'],
          ['<b>’s ร่วมกัน vs แยกกัน</b>', 'ของชิ้นเดียวใช้ร่วมกันเติม ’s ตัวหลัง · มีคนละชิ้นเติม ’s ทั้งคู่', '<b>Tom and Anna’s</b> house (บ้านร่วมกัน) · <b>Tom’s and Anna’s</b> phones (คนละเครื่อง)'],
          ['<b>สิ่งของไม่มีชีวิต</b>', 'นิยมใช้ ... of ... แทน ’s (หรือ Noun + Noun)', '<b>the leg of the table</b> (ไม่ใช่ the table’s leg)']
        ]
      }
    ],
    examples: [
      { en: 'Please send the file to me before noon.', th: 'กรุณาส่งไฟล์มาให้ฉันก่อนเที่ยงนะ', focus: 'หลังบุพบท (to / between / for) ใช้รูปกรรม me ไม่ใช้ I' },
      { en: 'This blue umbrella is mine, not hers.', th: 'ร่มสีน้ำเงินคันนี้เป็นของฉัน ไม่ใช่ของเธอ', focus: 'mine / hers ไม่ต้องมีคำนามตามหลังแล้ว' },
      { en: 'Lisa learned to bake bread by herself.', th: 'ลิซ่าหัดอบขนมปังด้วยตัวเอง', focus: 'by + Reflexive Pronoun (herself) = ด้วยตนเอง' },
      { en: 'Can you give me two pieces of advice about work?', th: 'คุณให้คำแนะนำเรื่องงานแก่ฉันสักสองข้อได้ไหม', focus: 'advice นับไม่ได้ ถ้าต้องการนับจำนวนให้ใช้ piece(s) of advice' }
    ],
    mistakes: [
      { wrong: 'Me and my friend went to the cafe. / Keep this between you and I.', right: 'My friend and I went... / Keep this between you and me.', whyTh: 'ตำแหน่งประธานใช้ I · หลังบุพบท (between, to, with) ใช้รูปกรรม me' },
      { wrong: 'The dog hurt it’s paw.', right: 'The dog hurt its paw.', whyTh: 'its (ไม่มี ’) แปลว่า "ของมัน" หน้าคำนาม · it’s = it is / it has' },
      { wrong: 'He gave me many informations and two luggages.', right: 'He gave me a lot of information and two pieces of luggage.', whyTh: 'information, advice, luggage เป็นนามนับไม่ได้ ห้ามเติม -s และต้องใช้ pieces of ถ้านับจำนวน' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกรูปกรรม (Object Pronoun) หลังคำกริยาและบุพบท',
        sentence: 'The manager asked ___ to finish the weekly report today.',
        options: ['we', 'us', 'our', 'ours'],
        answerIndex: 1,
        explanationTh: 'ตำแหน่งหลังกริยา asked เป็นกรรม จึงต้องใช้ Object Pronoun คือ us (พวกเรา) ส่วน our ต้องตามด้วยคำนาม'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำแสดงความเป็นเจ้าของที่วางเดี่ยวๆ ได้โดยไม่มีคำนามตามหลัง',
        sentence: 'I forgot my charger, so can I borrow ___ for ten minutes?',
        options: ['your', 'you', 'yours', 'yourself'],
        answerIndex: 2,
        explanationTh: 'ด้านหลังช่องว่างไม่มีคำนามตามมา จึงต้องใช้ Possessive Pronoun คือ yours (= your charger)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Reflexive Pronoun (คำสรรพนามสะท้อน) ให้ตรงกับประธานพหูพจน์',
        sentence: 'The students organized the science exhibition all by ___.',
        options: ['themself', 'theirself', 'themselves', 'them'],
        answerIndex: 2,
        explanationTh: 'ประธานคือ The students (พหูพจน์ = they) รูป Reflexive ที่ถูกต้องคือ themselves (ไม่มีคำว่า themself)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำนามนับไม่ได้ (Uncountable Noun) ที่ถูกต้อง',
        sentence: 'Thank you for giving me such helpful ___ before the interview.',
        options: ['advices', 'an advice', 'advice', 'many advice'],
        answerIndex: 2,
        explanationTh: 'advice (คำแนะนำ) เป็นนามนับไม่ได้ ห้ามเติม -s และห้ามนำหน้าด้วย a/an หรือ many (หากต้องการนับให้ใช้ a piece of advice)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ตำแหน่งประธาน (Subject Pronoun) ถูกต้อง',
        tokens: ['Sarah', 'and', 'I', 'shared', 'her', 'notes', 'with', 'them.'],
        explanationTh: 'ใช้ I ในตำแหน่งประธาน (วางหลัง Sarah) ตามด้วย Possessive Adjective (her notes) และรูปกรรม (them)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำเพื่อแสดงความเป็นเจ้าของด้วย ’s ให้ถูกต้อง',
        tokens: ['The', "children's", 'shoes', 'are', 'near', 'the', 'front', 'door.'],
        explanationTh: 'children เป็นรูปพหูพจน์ที่ไม่ได้ลงท้ายด้วย s จึงเติม ’s (children’s) เพื่อแสดงความเป็นเจ้าของ'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่องคำนามนับไม่ได้ แล้วเลือกตัวแก้ให้ถูกต้อง',
        tokens: ['We', 'packed', 'two', 'heavy', 'luggages', 'for', 'the', 'trip.'],
        errorIndex: 4,
        corrections: ['pieces of luggage', 'luggage', 'a luggage'],
        correctOptionIndex: 0,
        explanationTh: 'luggage (สัมภาระ) เป็นนามนับไม่ได้ ไม่เติม -s เมื่อระบุจำนวน 2 ชิ้นต้องใช้ two pieces of luggage'
      },
      {
        type: 'error',
        promptTh: 'แตะคำสรรพนามที่ใช้ผิดรูปหลังบุพบท between แล้วเลือกตัวแก้',
        tokens: ['Please', 'keep', 'this', 'secret', 'between', 'you', 'and', 'I.'],
        errorIndex: 7,
        corrections: ['me.', 'my.', 'mine.'],
        correctOptionIndex: 0,
        explanationTh: 'หลังบุพบท between ต้องใช้รูปกรรมทั้งสองตัว คือ between you and me (ห้ามใช้ I)'
      },
      {
        type: 'transform',
        promptTh: 'แปลงประโยค "The office of my parents is nearby." ให้ใช้รูปเจ้าของแบบกระชับ',
        sentence: 'ข้อใดใช้ Apostrophe (’) แสดงความเป็นเจ้าของได้ถูกต้องสำหรับคำพหูพจน์ parents?',
        options: ["my parent's office", "my parents' office", "my parents's office", "my office's parents"],
        answerIndex: 1,
        explanationTh: 'คำนามพหูพจน์ที่ลงท้ายด้วย -s อยู่แล้ว (parents) ให้ใส่เพียงเครื่องหมาย Apostrophe (’) ต่อท้าย เป็น my parents’ office'
      },
      {
        type: 'cloze',
        promptTh: 'แยกแยะ its (ของมัน) กับ it’s (มันคือ)',
        sentence: 'The puppy wagged ___ tail happily when we came home.',
        options: ["it's", 'its', 'its’', 'it'],
        answerIndex: 1,
        explanationTh: 'its (ไม่มี apostrophe) แปลว่า "ของมัน" ใช้หน้าคำนาม tail ส่วน it’s ย่อมาจาก it is หรือ it has'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกรูปคำนามพหูพจน์เปลี่ยนรูป (Irregular Plural) ให้ถูกต้อง',
        sentence: 'Several ___ from the neighboring school visited our science fair.',
        options: ['childs', 'childrens', 'children', 'child'],
        answerIndex: 2,
        explanationTh: 'Several (หลาย...) ตามด้วยคำนามพหูพจน์ และพหูพจน์ของ child คือ children (ห้ามเติม -s เป็น childrens)'
      },
      {
        type: 'cloze',
        promptTh: 'แยกการใช้ ’s แสดงความเป็นเจ้าของแบบ "คนละชิ้น" (Separate Ownership)',
        sentence: 'Both ___ laptops are charging on the desk right now.',
        options: ["Mark and Leo's", "Mark's and Leo's", "Marks and Leos'", "Mark's and Leo"],
        answerIndex: 1,
        explanationTh: 'laptops เติม -s (มีคนละเครื่อง) จึงต้องใส่ ’s ที่ชื่อเจ้าของทั้งสองคน → Mark’s and Leo’s'
      }
    ]
  },
  {
    id: 'g03',
    num: 3,
    phase: 'phase1',
    level: 'A0–A1',
    titleTh: 'รูปย่อ (Contractions), ตัวพิมพ์ใหญ่ & วรรคตอน',
    titleEn: 'Contractions, Capitalization & Punctuation',
    estMinutes: 4,
    summaryTh: 'แยกให้ออกว่า ’s ย่อมาจาก is, has หรือแสดงความเป็นเจ้าของ และรู้กฎการใช้ตัวพิมพ์ใหญ่กับเครื่องหมายวรรคตอนที่ถูกต้อง',
    formulas: [
      { label: 'ความหมายของ ’s และ ’d', parts: ["She's happy = is", '|', "She's finished = has", '|', "I'd go = would", '|', "I'd gone = had"] },
      { label: 'กฎตัวพิมพ์ใหญ่ (Capitals)', parts: ['ตัวแรกของประโยค', '+', 'I (ฉัน)', '+', 'ชื่อเฉพาะ / วัน / เดือน / ภาษา / ประเทศ'] }
    ],
    tables: [
      {
        title: 'วิธีแยกรูปย่อ + ตัวพิมพ์ใหญ่ Do’s vs Don’ts',
        headers: ['รูปย่อ', 'คำเต็ม', 'วิธีสังเกตคำที่ตามหลัง', 'ตัวอย่าง'],
        rows: [
          ["'s", 'is / has / ของ...', 'ตามด้วย Adj/Noun/V-ing = <b>is</b> · ตามด้วย V3 (Active) = <b>has</b> · ตามด้วยของ = เจ้าของ', "He's tired (is). / He's left (has). / Mia's bag."],
          ["'d", 'would / had', 'ตามด้วย V1 / rather = <b>would</b> · ตามด้วย V3 / better = <b>had</b>', "I'd like tea (would). / You'd better go (had)."],
          ["'re / 've / 'll / won't", 'are / have / will / will not', 'รูปปฏิเสธย่อเปลี่ยนรูปพิเศษ: <b>will not → won’t</b>', "We're ready. / I won't forget."],
          ['ตัวพิมพ์ใหญ่ Do vs Don’t', 'เฉพาะ vs ทั่วไป', 'พิมพ์ใหญ่: <b>I</b>, วัน, เดือน, ภาษา/ชาติ · <b>พิมพ์เล็ก: ฤดูกาล (winter), วิชาทั่วไป (math)</b>', '<b>I</b> study <b>Thai</b> in <b>winter</b> on <b>Monday</b>.']
        ]
      },
      {
        title: 'เครื่องหมายวรรคตอน (Punctuation) และคู่คำพ้องเสียงที่พบบ่อย',
        headers: ['หัวข้อ / คู่คำ', 'วิธีใช้ที่ถูกต้อง', 'ตัวอย่าง'],
        rows: [
          ['<b>. ? ! ,</b> (วรรคตอนหลัก)', '<b>.</b> จบบอกเล่า · <b>?</b> จบคำถาม/ขอร้อง · <b>!</b> อุทาน · <b>,</b> คั่นรายการ (A, B, and C)', 'Could you help me<b>?</b> / I bought tea<b>,</b> milk<b>,</b> and bread<b>.</b>'],
          ["<b>it's</b> vs <b>its</b>", "<b>it's</b> = it is/has · <b>its</b> = ของมัน (หน้าคำนาม)", "<b>It's</b> cute. / Look at <b>its</b> paw."],
          ["<b>you're</b> vs <b>your</b>", "<b>you're</b> = you are · <b>your</b> = ของคุณ", "<b>You're</b> welcome! / Where is <b>your</b> pen?"],
          ["<b>they're</b> / <b>their</b> / <b>there</b>", "<b>they're</b> = they are · <b>their</b> = ของพวกเขา · <b>there</b> = ที่นั่น", "<b>They're</b> reading <b>their</b> notes over <b>there</b>."],
          ["<b>who's</b> vs <b>whose</b>", "<b>who's</b> = who is/has · <b>whose</b> = ของใคร", "<b>Who's</b> calling? / <b>Whose</b> bag is this?"]
        ]
      }
    ],
    examples: [
      { en: "You're right, and it's clear she's worked hard.", th: 'คุณพูดถูก และเห็นชัดว่าเธอทำงานหนักมาก', focus: "You're = You are · it's = it is · she's worked = she has worked" },
      { en: "I'd love to visit Japan in October.", th: 'ฉันอยากไปเที่ยวญี่ปุ่นในเดือนตุลาคมมาก', focus: "I'd love = I would love · Japan / October ขึ้นต้นตัวพิมพ์ใหญ่เสมอ" },
      { en: "Wait! Don't forget Mia's notebook.", th: 'เดี๋ยวก่อน อย่าลืมสมุดของมีอานะ', focus: "Don't = Do not · Mia's = ของมีอา (แสดงความเป็นเจ้าของ)" }
    ],
    mistakes: [
      { wrong: 'every monday, i study english.', right: 'Every Monday, I study English.', whyTh: 'คำว่า I (ฉัน), วันในสัปดาห์ (Monday) และชื่อภาษา/ชาติ (English) ต้องขึ้นต้นตัวพิมพ์ใหญ่เสมอ' },
      { wrong: "The dog hurt it's paw.", right: 'The dog hurt its paw.', whyTh: "it's ย่อมาจาก it is / it has เท่านั้น ถ้าจะบอกว่า 'ของมัน' ต้องใช้ its" },
      { wrong: 'Dont leave yet.', right: "Don't leave yet.", whyTh: "คำปฏิเสธแบบย่อต้องมีเครื่องหมาย Apostrophe แทนตัวอักษรที่หายไป (Do not → Don't)" }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'แยกความหมายของ ’s จากกริยาที่ตามหลังในประโยค',
        sentence: "Look! Mark's just arrived at the airport. ในประโยคนี้ 's ย่อมาจากคำใด?",
        options: ['is', 'has', 'was', 'does'],
        answerIndex: 1,
        explanationTh: "ตามด้วย just arrived (V3 = Present Perfect) ดังนั้น Mark's ย่อมาจาก Mark has"
      },
      {
        type: 'cloze',
        promptTh: 'แยกความหมายของ ’d ในประโยคนี้',
        sentence: "I'd rather stay home tonight than drive in the rain. คำว่า 'd ย่อมาจากคำใด?",
        options: ['did', 'had', 'would', 'could'],
        answerIndex: 2,
        explanationTh: "สำนวน 'd rather + V1 ย่อมาจาก would rather (อยากจะ...มากกว่า)"
      },
      {
        type: 'cloze',
        promptTh: 'เลือกตัวสะกดที่ถูกต้องสำหรับรูปย่อของ they are',
        sentence: '___ planning to open a cozy bakery next month.',
        options: ['Their', 'There', "They're", 'Theirs'],
        answerIndex: 2,
        explanationTh: "They're = They are (กำลังวางแผนจะเปิด...) ส่วน Their = ของพวกเขา และ There = ที่นั่น"
      },
      {
        type: 'cloze',
        promptTh: 'เลือกประโยคที่ใช้ตัวพิมพ์ใหญ่ (Capitalization) ถูกต้อง 100%',
        sentence: 'ข้อใดใช้ตัวพิมพ์ใหญ่ได้ถูกต้องตามหลักภาษาอังกฤษ?',
        options: [
          'My sister and i love japanese food in winter.',
          'My sister and I love Japanese food in winter.',
          'My sister and I love japanese food in Winter.',
          'my sister and I love Japanese food in winter.'
        ],
        answerIndex: 1,
        explanationTh: 'I และชื่อภาษา/สัญชาติ (Japanese) ต้องพิมพ์ใหญ่ ส่วนฤดูกาลอย่าง winter ไม่ต้องพิมพ์ใหญ่'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้รูปย่อและตัวพิมพ์ใหญ่ถูกต้อง',
        tokens: ["She's", 'already', 'booked', 'our', 'flight', 'for', 'Friday.'],
        explanationTh: "She's (= She has) + already + booked + วันที่ขึ้นต้นตัวพิมพ์ใหญ่ (Friday)"
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ whose / who’s ถูกต้อง',
        tokens: ["Who's", 'sitting', 'at', "David's", 'desk', 'today?'],
        explanationTh: "Who's = Who is (ใครกำลังนั่งอยู่) ส่วน David's แสดงความเป็นเจ้าของ (โต๊ะของเดวิด)"
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่องรูปย่อ/คำแสดงความเป็นเจ้าของ แล้วเลือกตัวแก้',
        tokens: ['Your', 'welcome', 'to', 'join', 'our', 'English', 'club!'],
        errorIndex: 0,
        corrections: ["You're", 'Yours', 'You'],
        correctOptionIndex: 0,
        explanationTh: "Your แปลว่า 'ของคุณ' ต้องใช้คำว่า You're (= You are) welcome จึงจะถูกต้อง"
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ตัวพิมพ์ใหญ่ผิดกฎในประโยค แล้วเลือกคำแก้ไข',
        tokens: ['Next', 'tuesday,', 'I', 'have', 'a', 'French', 'class.'],
        errorIndex: 1,
        corrections: ['Tuesday,', 'Tuesdays,', 'tuesdays,'],
        correctOptionIndex: 0,
        explanationTh: 'ชื่อวันทั้ง 7 วัน (Monday – Sunday) ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ → Tuesday,'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนประโยค "Who is responsible for its design?" ให้ใช้รูปย่อที่ถูกต้อง',
        sentence: 'ข้อใดใช้รูปย่อและคำแสดงความเป็นเจ้าของได้ถูกต้องที่สุด?',
        options: [
          "Whose responsible for it's design?",
          "Who's responsible for its design?",
          "Who's responsible for it's design?",
          'Whose responsible for its design?'
        ],
        answerIndex: 1,
        explanationTh: "Who's = Who is (ใครรับผิดชอบ) ส่วน its (ไม่มี ') แปลว่า 'ของมัน' หน้าคำนาม design"
      },
      {
        type: 'cloze',
        promptTh: 'เลือกประโยคที่มีเครื่องหมายวรรคตอนถูกต้องเมื่อจบคำถามสุภาพ',
        sentence: 'Could you please pass me the salt___',
        options: ['.', '?', ',', '!'],
        answerIndex: 1,
        explanationTh: 'ประโยคที่ขึ้นต้นด้วยคำกริยาช่วยเพื่อถามหรือขอร้อง (Could you...?) ต้องปิดท้ายด้วยเครื่องหมายคำถาม (?)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกรูปย่อปฏิเสธของ will not ให้สะกดถูกต้อง',
        sentence: 'I promise I ___ be late for tomorrow’s morning briefing.',
        options: ["willn't", "won't", "wont", "don't will"],
        answerIndex: 1,
        explanationTh: 'รูปย่อของ will not เปลี่ยนสระเป็น won’t (ต้องมีเครื่องหมาย apostrophe ด้วย)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกใช้เครื่องหมายจุลภาค (Comma) คั่นรายการ 3 สิ่งและเวลาหน้าประโยค',
        sentence: 'ข้อใดใช้เครื่องหมายวรรคตอนถูกต้องทั้งหมด?',
        options: [
          'Yesterday morning, Tom bought apples bananas, and grapes.',
          'Yesterday morning, Tom bought apples, bananas, and grapes.',
          'Yesterday morning Tom bought apples, bananas and, grapes.',
          'yesterday morning, Tom bought apples, bananas, and grapes.'
        ],
        answerIndex: 1,
        explanationTh: 'ใส่จุลภาค (,) หลังคำบอกเวลาหน้าประโยค และคั่นระหว่างรายการ 3 สิ่ง (apples, bananas, and grapes) พร้อมขึ้นต้นตัวพิมพ์ใหญ่'
      }
    ]
  },
  {
    id: 'g04',
    num: 4,
    phase: 'phase1',
    level: 'A0–A1',
    titleTh: 'ตัวเลข, วันที่, เวลา & หน่วยนับ',
    titleEn: 'Numbers, Dates, Time & Units',
    estMinutes: 4,
    summaryTh: 'แยกการใช้เลขจำนวน (Cardinal) กับเลขลำดับ (Ordinal), อ่านเวลาและวันที่ถูกบุพบท และกฎสำคัญของหน่วยนับหลักร้อย-หลักพัน',
    formulas: [
      { label: 'ลำดับที่ (Ordinal Numbers)', parts: ['1st (first)', '2nd (second)', '3rd (third)', '4th+ (ปกติเติม -th แต่ระวัง 11th, 12th, 13th และ 21st, 22nd, 23rd)'] },
      { label: 'กฎหลักร้อย/พัน/ล้าน & ตัวเลขพิเศษ', parts: ['มีตัวเลขหน้า: two hundred (ไม่เติม -s)', '|', 'ไม่ระบุเลข: hundreds of people (เติม -s + of)', '|', 'ทศนิยม 3.14 = three point one four'] }
    ],
    tables: [
      {
        title: 'เทียบการใช้ตัวเลข วันที่ เวลา เงิน และทศนิยมที่เจอบ่อยในชีวิตจริง',
        headers: ['หมวดหมู่', 'รูปแบบที่ถูกต้อง', 'ความหมาย / วิธีอ่าน', 'ข้อควรระวัง'],
        rows: [
          ['วันที่ & ปี ค.ศ.', 'on May 5th / in 1998 / in 2026', 'พูด: "May fifth" · ปี 1998 = nineteen ninety-eight', 'ใช้ <b>on</b> กับวัน/วันที่ · ใช้ <b>in</b> กับเดือน/ปีล้วน'],
          ['เวลา (Time)', 'at 7:30 / at 9 o’clock / half past seven', '07:15 = a quarter past seven · 07:45 = a quarter to eight', 'เวลาเจาะจงใช้ <b>at</b> · <b>o’clock ห้ามใช้คู่ a.m./p.m.</b>'],
          ['ตัวเลขหลักใหญ่', 'five thousand / thousands of', '5,000 = five thousand (ไม่มี s)', 'ห้ามพูด five thousands หรือ two hundreds'],
          ['อายุ / เวลา / ระยะทาง (ประสม)', 'a five-year-old boy / a 20-minute walk', 'วางหน้านาม ใช้ขีดเชื่อม (-)', 'มีขีดเชื่อม (-) แล้ว <b>year / minute ไม่เติม -s</b>'],
          ['เงิน ทศนิยม เศษส่วน %', '$12.50 · 3.14 · 1/2 · 2/3 · 50%', '3.14 = three <b>point one four</b> · 1/2 = a half · 2/3 = two-thirds', 'เลขหลังจุดทศนิยมให้อ่านเรียงทีละหลัก (ห้าม fourteen!)']
        ]
      }
    ],
    examples: [
      { en: 'The workshop starts at 9:15 a.m. on June 12th.', th: 'เวิร์กชอปเริ่มเวลา 9:15 น. วันที่ 12 มิถุนายน', focus: 'เวลาใช้ at · วันที่มีเลขวันที่ใช้ on' },
      { en: 'Three hundred students joined the online quiz.', th: 'นักเรียนสามร้อยคนเข้าร่วมแบบทดสอบออนไลน์', focus: 'มีเลข Three นำหน้า จึงไม่เติม -s ที่ hundred' },
      { en: 'She lives in a ten-story apartment building.', th: 'เธออาศัยอยู่ในอาคารอพาร์ตเมนต์สูง 10 ชั้น', focus: 'ten-story วางหน้าคำนาม building จึงไม่เติม -s' }
    ],
    mistakes: [
      { wrong: 'There were two hundreds guests at the hall.', right: 'There were two hundred guests at the hall.', whyTh: 'เมื่อมีตัวเลขเฉพาะ (two, five, ten) อยู่ข้างหน้า hundred/thousand/million ห้ามเติม -s' },
      { wrong: 'I saw a seven-years-old girl.', right: 'I saw a seven-year-old girl.', whyTh: 'คำประสมบอกอายุ/ระยะทางที่มีขีด (-) วางหน้าคำนาม ต้องใช้เอกพจน์ (year ไม่มี -s)' },
      { wrong: 'My flight is in July 4th.', right: 'My flight is on July 4th.', whyTh: 'ถ้ามีแค่เดือนอย่างเดียวใช้ in July แต่ถ้ามี "วันที่" พ่วงด้วย ต้องใช้ on เสมอ' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกคำบอกหน่วยจำนวนที่ถูกต้องเมื่อมีตัวเลขนำหน้า',
        sentence: 'This small library holds over four ___ English books.',
        options: ['thousands', 'thousand', 'thousands of', 'thousand of'],
        answerIndex: 1,
        explanationTh: 'มีตัวเลข specific (four) นำหน้า จึงใช้ thousand รูปเอกพจน์ (ไม่เติม -s และไม่มี of)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำเมื่อต้องการบอกว่า "หลายร้อย" โดยไม่ระบุตัวเลขเจาะจง',
        sentence: '___ travelers arrived at the train station during the holiday.',
        options: ['Hundred of', 'Hundreds', 'Hundreds of', 'Two hundreds'],
        answerIndex: 2,
        explanationTh: 'เมื่อไม่ระบุตัวเลขแน่นอน ให้เติม -s + of เป็น Hundreds of (หลายร้อย)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำบอกเวลาแบบภาษาอังกฤษที่ตรงกับ 7:45 น.',
        sentence: 'It is 7:45 a.m. That means it is a quarter ___ eight.',
        options: ['past', 'to', 'half', 'after'],
        answerIndex: 1,
        explanationTh: '7:45 คือ "อีก 15 นาที (quarter) จะถึง (to) 8 โมง" → a quarter to eight'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำบอกอายุแบบคำคุณศัพท์ประสม (Hyphenated Modifier) หน้าคำนาม',
        sentence: 'We went for a relaxing ___ walk along the beach.',
        options: ['twenty-minutes', 'twenty-minute', 'twenty minutes', 'twenties-minute'],
        answerIndex: 1,
        explanationTh: 'วางหน้าคำนาม walk โดยมีขีดเชื่อม (-) จึงต้องใช้รูปเอกพจน์ twenty-minute'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคบอกวันที่และเวลาถูกต้อง',
        tokens: ['The', 'course', 'begins', 'at', 'nine', "o'clock", 'on', 'April', '3rd.'],
        explanationTh: 'เวลาใช้บุพบท at (at nine o’clock) และวันที่ระบุเลขวันใช้ on (on April 3rd)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคบอกลำดับที่ถูกต้อง',
        tokens: ['Our', 'meeting', 'room', 'is', 'on', 'the', 'third', 'floor.'],
        explanationTh: 'เลขลำดับ (Ordinal Number) สำหรับชั้นที่ 3 คือ the third (วาง the นำหน้าเสมอ)'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่องหน่วยนับหลังตัวเลข แล้วเลือกตัวแก้ที่ถูกต้อง',
        tokens: ['They', 'donated', 'five', 'millions', 'baht', 'to', 'the', 'hospital.'],
        errorIndex: 3,
        corrections: ['million', 'millions of', 'million of'],
        correctOptionIndex: 0,
        explanationTh: 'มีตัวเลข five นำหน้า ห้ามเติม -s ที่ million → five million baht'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้บุพบทกับวันที่ผิด แล้วเลือกตัวแก้',
        tokens: ['My', 'brother', 'was', 'born', 'in', 'October', '21st,', '2001.'],
        errorIndex: 4,
        corrections: ['on', 'at', 'by'],
        correctOptionIndex: 0,
        explanationTh: 'แม้จะมีเดือน October แต่มีวันที่ 21st ระบุเฉพาะเจาะจง จึงต้องใช้ on ไม่ใช่ in'
      },
      {
        type: 'transform',
        promptTh: 'แปลงเวลา "10:30" เป็นสำนวนบอกเวลาภาษาอังกฤษให้ถูกต้อง',
        sentence: 'ข้อใดอ่านเวลา "10:30" ได้ถูกต้องตามหลักสากล?',
        options: ['half to ten', 'half past ten', 'quarter past ten', 'half past eleven'],
        answerIndex: 1,
        explanationTh: 'ครึ่งชั่วโมง (30 นาที) หลัง 10 โมง เรียกว่า half past ten'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกเลขลำดับที่ (Ordinal) ให้ตรงกับคำว่า "อันดับที่ 2"',
        sentence: 'Congratulations on winning ___ prize in the speech contest!',
        options: ['two', 'twoth', 'second', 'the two'],
        answerIndex: 2,
        explanationTh: 'ลำดับที่ 2 ใช้ second (หรือ 2nd) ไม่ใช่ two ซึ่งแปลว่าจำนวน 2'
      },
      {
        type: 'cloze',
        promptTh: 'อ่านทศนิยม (Decimals) ภาษาอังกฤษให้ถูกต้อง',
        sentence: 'The bottle holds 1.75 liters. ในภาษาอังกฤษอ่านตัวเลข "1.75" ว่าอย่างไร?',
        options: ['one point seventy-five', 'one point seven five', 'one dot seventy-five', 'one comma seven five'],
        answerIndex: 1,
        explanationTh: 'จุดทศนิยมภาษาอังกฤษใช้คำว่า point และตัวเลขหลังจุดต้องอ่านเรียงทีละตัว → one point seven five'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกประโยคบอกเวลาที่ใช้ o’clock และ a.m./p.m. ถูกต้อง',
        sentence: 'ข้อใดเขียนเวลา "เก้าโมงเช้า" ได้ถูกต้องไม่ซ้ำซ้อน?',
        options: ["at 9 a.m. o'clock", "at nine o'clock a.m.", "at 9 o'clock", "in 9 o'clock"],
        answerIndex: 2,
        explanationTh: 'คำว่า o’clock ใช้กับชั่วโมงเต็มเท่านั้น และห้ามใช้ซ้อนกับ a.m. / p.m. พร้อมใช้บุพบท at'
      }
    ]
  },
  {
    id: 'g05',
    num: 5,
    phase: 'phase1',
    level: 'A0–A2',
    titleTh: 'Articles & Determiners (a / an / the / some / any)',
    titleEn: 'Articles & Determiners',
    estMinutes: 5,
    summaryTh: 'เลือกใช้ a / an / the / ไม่ใส่ article ได้แม่นจาก "เสียงขึ้นต้น" และความเจาะจง พร้อมวิธีใช้ some, any, much, many, a few, a little',
    formulas: [
      { label: 'กฎ a / an (ดูที่ "เสียง" ไม่ใช่ตัวอักษร)', parts: ['a + เสียงพยัญชนะ (a university)', '|', 'an + เสียงสระ (an hour, an MBA)'] },
      { label: 'ระบุตัวตน vs ทั่วไป', parts: ['ไม่ชี้เฉพาะ (นามนับได้เอกพจน์) = a / an', '|', 'ชี้เฉพาะ/รู้กันทั้งคู่ = the', '|', 'นามพหูพจน์/นับไม่ได้ทั่วไป = ไม่ใส่ (Ø)'] }
    ],
    tables: [
      {
        title: 'Quantifiers (คำบอกปริมาณ) ใช้กับนามนับได้ vs นับไม่ได้',
        headers: ['คำบอกปริมาณ', 'ใช้กับนามประเภทใด', 'ชนิดประโยคที่นิยม', 'ตัวอย่างประโยค'],
        rows: [
          ['some', 'นับได้พหูพจน์ & นับไม่ได้', 'บอกเล่า / ขอร้อง-เสนอ', 'Would you like <b>some</b> tea?'],
          ['any', 'นับได้พหูพจน์ & นับไม่ได้', 'คำถาม / ปฏิเสธ', 'We don’t have <b>any</b> eggs left.'],
          ['many / (a) few', 'นามนับได้พหูพจน์เท่านั้น', 'ทั่วไป / ถาม-ปฏิเสธ', '<b>a few</b> friends (พอมีบ้าง) vs <b>few</b> (แทบไม่มี)'],
          ['much / (a) little', 'นามนับไม่ได้เท่านั้น', 'คำถาม / ปฏิเสธ / บอกเล่า', '<b>a little</b> time (พอมีบ้าง) vs <b>little</b> time (แทบไม่เหลือ)'],
          ['a lot of / lots of', 'ได้ทั้งนับได้พหูพจน์ & นับไม่ได้', 'บอกเล่า (ใช้แทน much/many ได้ง่าย)', 'She reads <b>a lot of</b> books.']
        ]
      },
      {
        title: 'เปรียบเทียบการใช้ "the" vs ไม่ใส่ Article (Zero Article Ø)',
        headers: ['การใช้', 'ต้องใช้เมื่อไร', 'ตัวอย่างชัดเจน'],
        rows: [
          ['<b>ใช้ the</b>', 'มีหนึ่งเดียว, ขั้นสูงสุด, เลขลำดับ, เครื่องดนตรี, ประเทศพหูพจน์/สหภาพ, แม่น้ำ', '<b>the</b> sun · <b>the</b> best · play <b>the</b> piano · <b>the</b> USA'],
          ['<b>ไม่ใส่ (Ø)</b>', 'พูดถึงทั่วไป, นามธรรม (honesty), กีฬา, มื้ออาหาร, ภาษา, วันพหูพจน์', '<b>Honesty</b> matters. · play <b>basketball</b> · have <b>lunch</b> · on <b>Saturdays</b>']
        ]
      }
    ],
    examples: [
      { en: 'Wait an hour before taking the next pill.', th: 'รอหนึ่งชั่วโมงก่อนกินยาเม็ดถัดไป', focus: 'hour ออกเสียง /เอา-เออะ/ ขึ้นต้นเสียงสระ จึงใช้ an hour · the next ใช้ the หน้าลำดับ' },
      { en: 'I bought a book. The book is about Thai history.', th: 'ฉันซื้อหนังสือเล่มหนึ่ง หนังสือเล่มนั้นเกี่ยวกับประวัติศาสตร์ไทย', focus: 'กล่าวครั้งแรกใช้ a · กล่าวซ้ำให้รู้ว่าเล่มไหนใช้ the' },
      { en: 'Could you add a little honey to my tea?', th: 'ช่วยเติมน้ำผึ้งนิดหน่อยลงในชาให้ฉันทีได้ไหม', focus: 'honey นับไม่ได้ + ต้องการความหมาย "นิดหน่อย (เชิงบวก)" ใช้ a little' }
    ],
    mistakes: [
      { wrong: 'He graduated from an university in Bangkok.', right: 'He graduated from a university in Bangkok.', whyTh: 'university ออกเสียง /ยู/ (เสียงพยัญชนะ y) จึงต้องใช้ a university ไม่ใช่ an' },
      { wrong: 'I like the music and the coffee.', right: 'I like music and coffee.', whyTh: 'พูดถึงสิ่งของ/ดนตรีแบบกว้างๆ โดยทั่วไป (ไม่ใช่เพลงเฉพาะหรือแก้วนี้) ไม่ต้องใส่ the' },
      { wrong: 'How many water do you drink daily?', right: 'How much water do you drink daily?', whyTh: 'water เป็นนามนับไม่ได้ จึงต้องใช้ How much ไม่ใช่ How many' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือก Article โดยดูจาก "เสียงขึ้นต้น" ของคำนาม',
        sentence: 'It takes ___ hour to get to the downtown office by bus.',
        options: ['a', 'an', 'the', 'many'],
        answerIndex: 1,
        explanationTh: 'hour ตัว h ไม่ออกเสียง (อ่านว่า /ˈaʊər/ ขึ้นต้นเสียงสระ) จึงต้องใช้ an hour'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก a หรือ an ให้ถูกต้องกับคำที่ขึ้นต้นด้วยตัว u แต่ออกเสียง /ย/',
        sentence: 'Wearing ___ uniform is required at this international school.',
        options: ['an', 'a', 'some', 'few'],
        answerIndex: 1,
        explanationTh: 'uniform ขึ้นต้นด้วยเสียงพยัญชนะ /ยู/ จึงใช้ a uniform (ไม่ใช้ an)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกใช้ the กับสิ่งที่พูดถึงซ้ำหรือมีหนึ่งเดียวที่รู้กัน',
        sentence: 'Please close ___ front window because the wind is getting strong.',
        options: ['a', 'an', 'the', 'any'],
        answerIndex: 2,
        explanationTh: 'ทั้งผู้พูดและผู้ฟังรู้ตรงกันว่าหมายถึงหน้าต่างบานไหน ("หน้าต่างบานหน้า") จึงเจาะจงใช้ the'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำบอกปริมาณสำหรับคำถามและคำปฏิเสธ (นามนับไม่ได้)',
        sentence: 'How ___ sugar do we still have in the jar?',
        options: ['many', 'few', 'much', 'several'],
        answerIndex: 2,
        explanationTh: 'sugar (น้ำตาล) เป็นนามนับไม่ได้ จึงต้องถามด้วย How much'
      },
      {
        type: 'cloze',
        promptTh: 'แยก a little (พอมีอยู่บ้าง เชิงบวก) กับ little (แทบไม่เหลือ เชิงลบ)',
        sentence: 'Don’t worry! We still have ___ minutes before the train leaves.',
        options: ['a little', 'little', 'a few', 'much'],
        answerIndex: 2,
        explanationTh: 'minutes เป็นนามนับได้พหูพจน์ และ "Don’t worry!" สื่อว่าพอมีเวลาเหลืออยู่บ้าง → ใช้ a few'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคขอร้องสุภาพที่ใช้ some ถูกต้อง',
        tokens: ['Would', 'you', 'like', 'some', 'fresh', 'fruit', 'after', 'lunch?'],
        explanationTh: 'ประโยคเชิญชวน/เสนอให้แบบสุภาพ (Would you like...?) มักใช้ some แทน any'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ไม่ใส่ the หน้ากีฬา/วิชาทั่วไป',
        tokens: ['My', 'friends', 'enjoy', 'playing', 'basketball', 'on', 'Saturdays.'],
        explanationTh: 'หน้าชื่อกีฬา (basketball, tennis) และวันพหูพจน์ไม่ใส่ the'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่องการใช้ Quantifier กับนามนับได้/ไม่ได้ แล้วเลือกตัวแก้',
        tokens: ['There', 'are', 'not', 'much', 'chairs', 'in', 'the', 'room.'],
        errorIndex: 3,
        corrections: ['many', 'a little', 'an'],
        correctOptionIndex: 0,
        explanationTh: 'chairs เป็นคำนามนับได้พหูพจน์ ห้ามใช้ much → ต้องใช้ many (There are not many chairs)'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ a / an ผิดตามเสียงขึ้นต้นของคำนาม แล้วเลือกตัวแก้',
        tokens: ['He', 'graduated', 'from', 'an', 'university', 'in', 'Bangkok.'],
        errorIndex: 3,
        corrections: ['a', 'some', 'these'],
        correctOptionIndex: 0,
        explanationTh: 'university ออกเสียงขึ้นต้นด้วยเสียงพยัญชนะ /ยู/ (ไม่ใช่เสียงสระ) จึงต้องใช้ a university'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนประโยค "There is some milk in the fridge." ให้เป็นรูปปฏิเสธ',
        sentence: 'ข้อใดเปลี่ยนเป็นประโยคปฏิเสธได้ถูกต้องที่สุด?',
        options: [
          'There is not some milk in the fridge.',
          'There is not any milk in the fridge.',
          'There are not any milk in the fridge.',
          'There is not many milk in the fridge.'
        ],
        answerIndex: 1,
        explanationTh: 'ในประโยคปฏิเสธ ต้องเปลี่ยน some เป็น any และ milk เป็นนามนับไม่ได้ ใช้กับ is not → There is not any milk'
      },
      {
        type: 'cloze',
        promptTh: 'แยกการใช้ Article หน้าเครื่องดนตรี (ใส่ the) กับชื่อกีฬา (ไม่ใส่ Article)',
        sentence: 'My sister plays ___ guitar very well, while I prefer playing ___ tennis.',
        options: ['a / the', 'the / Ø (ไม่ใส่)', 'Ø / the', 'the / a'],
        answerIndex: 1,
        explanationTh: 'เล่นเครื่องดนตรีใช้ play the guitar แต่เล่นกีฬาไม่ใส่ Article → play tennis'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกระหว่าง a little (พอมีบ้าง เชิงบวก) กับ little (แทบไม่มี เชิงลบ)',
        sentence: 'We have ___ patience left because we have waited over two hours.',
        options: ['a few', 'little', 'many', 'a little'],
        answerIndex: 1,
        explanationTh: 'patience เป็นนามนับไม่ได้ และบริบทคือรอนาน 2 ชั่วโมงจน "แทบไม่เหลือความอดทนแล้ว" (เชิงลบ) → ใช้ little'
      }
    ]
  },
  {
    id: 'g06',
    num: 6,
    phase: 'phase1',
    level: 'A0–A1',
    titleTh: 'Verb to Be, Do, Have & กริยาช่วยพื้นฐาน',
    titleEn: 'Be, Do, Have & Basic Auxiliaries',
    estMinutes: 5,
    summaryTh: 'กริยาพื้นฐาน 3 ตระกูลนี้คือกระดูกสันหลังของประโยคภาษาอังกฤษ ทั้งใช้เป็น "กริยาแท้" และใช้เป็น "กริยาช่วย" สร้างปฏิเสธ/คำถาม',
    formulas: [
      { label: 'Verb to Be (ปัจจุบัน & อดีต)', parts: ['ปัจจุบัน: I am / He,She,It is / We,They are', '|', 'อดีต: I,He,She,It was / We,You,They were', '|', 'ปฏิเสธ: เติม not หลัง Be'] },
      { label: 'Verb to Do & Modal พื้นฐาน', parts: ['Do + I/You/We/They + V1', '|', 'Does + He/She/It + V1', '|', 'Did + ทุกประธาน + V1 · Modals (can/will/must) + V1'] }
    ],
    tables: [
      {
        title: 'วิธีเลือกใช้ Be vs Do vs Have vs Modals + การตอบสั้น',
        headers: ['เมื่อต้องการ...', 'เลือกใช้กริยา', 'โครงสร้างตัวอย่าง', 'ตัวอย่าง'],
        rows: [
          ['ตามด้วย Adj / อาชีพ / สถานที่', '<b>Verb to Be</b> (is/am/are · was/were)', 'S + be + Adj/Noun/Place', 'She <b>is</b> a doctor. / They <b>were</b> tired.'],
          ['สร้างปฏิเสธ/คำถามให้กริยาแท้ (eat, like, go)', '<b>Verb to Do</b> (do/does/did)', 'S + do/does/did + not + <b>V1</b>', 'He <b>doesn’t</b> like tea. (ห้าม likes)'],
          ['<b>have</b> แท้ (มี/กิน) vs ช่วย (Perfect)', 'แท้ใช้ Do ช่วย · Perfect ใช้ have+V3', '<b>Do</b> you <b>have</b> time? vs <b>Have</b> you eaten?', 'She <b>doesn’t have</b> a car. / She <b>hasn’t</b> gone.'],
          ['<b>การตอบสั้น & Modal พื้นฐาน</b>', 'ใช้กริยาช่วยตัวแรก + can/will/must + V1', 'Yes, S + be/do/can (ห้ามย่อรูปในคำตอบ Yes!)', 'Are you ready? → <b>Yes, I am.</b> (❌ Yes, I’m)']
        ]
      }
    ],
    examples: [
      { en: 'Are they ready for the morning class?', th: 'พวกเขาพร้อมสำหรับคาบเรียนตอนเช้าหรือยัง', focus: 'ready เป็น Adjective จึงใช้ Be (Are) นำหน้าตั้งคำถาม (ห้ามใช้ Do they ready?)' },
      { en: 'Does your brother have a driver’s license?', th: 'พี่ชายของคุณมีใบขับขี่ไหม', focus: 'มีกริยาแท้ have อยู่แล้ว ใช้ Does ช่วยถาม และ have คงรูป V1 (ไม่ใช้ has)' },
      { en: 'I am not hungry right now, thanks.', th: 'ตอนนี้ฉันยังไม่หิวครับ ขอบคุณ', focus: 'hungry เป็น Adj จึงใช้ am not (ไม่ใช้ I don’t hungry)' }
    ],
    mistakes: [
      { wrong: 'I am not agree with you.', right: 'I do not agree with you.', whyTh: 'agree เป็นคำกริยาแท้ (Verb) ไม่ใช่ Adjective จึงต้องใช้ do not (don’t) ช่วยปฏิเสธ ห้ามใช้ am not' },
      { wrong: 'She don’t has enough time.', right: "She doesn't have enough time.", whyTh: 'ประธาน She เอกพจน์ต้องใช้ doesn’t และหลัง does/doesn’t กริยาต้องกลับเป็น V1 (have)' },
      { wrong: 'Do you afraid of heights?', right: 'Are you afraid of heights?', whyTh: 'afraid เป็น Adjective (รู้สึกกลัว) จึงต้องใช้ Verb to Be (Are) ไม่ใช่ Do' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาช่วยระหว่าง Verb to Be กับ Verb to Do (ดูว่าคำตามหลังเป็น Adj หรือ Verb)',
        sentence: '___ your colleagues busy with the presentation right now?',
        options: ['Do', 'Does', 'Are', 'Is'],
        answerIndex: 2,
        explanationTh: 'busy (ยุ่ง) เป็น Adjective และ colleagues เป็นพหูพจน์ จึงต้องใช้ Verb to Be คือ Are'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกรูปปฏิเสธที่ถูกต้องกับกริยาแท้ (know)',
        sentence: 'Tom ___ know the password to this Wi-Fi network.',
        options: ['is not', 'are not', "doesn't", "don't"],
        answerIndex: 2,
        explanationTh: 'know เป็นคำกริยาแท้ และประธาน Tom เป็นเอกพจน์ (he) จึงต้องใช้ doesn’t + know (V1)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาแท้หลัง Did (อดีต) ให้ถูกต้อง',
        sentence: 'Did Maya ___ her umbrella on the subway yesterday?',
        options: ['left', 'leaves', 'leave', 'leaving'],
        answerIndex: 2,
        explanationTh: 'หลังกริยาช่วย Did กริยาแท้ต้องกลับเป็นรูปฐาน (V1 = leave) เสมอ'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกรูปปฏิเสธของประโยค "She has a meeting today."',
        sentence: 'She ___ a meeting today, so she can join us for lunch.',
        options: ["doesn't has", "don't have", "doesn't have", "isn't have"],
        answerIndex: 2,
        explanationTh: 'เมื่อใช้ doesn’t มาช่วยปฏิเสธ คำว่า has ต้องคืนรูปเป็น V1 คือ have → doesn’t have'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคคำถามที่ใช้ Verb to Do ถูกต้อง',
        tokens: ['Does', 'your', 'sister', 'have', 'any', 'pets', 'at', 'home?'],
        explanationTh: 'Does (ประธาน your sister เอกพจน์) + คำกริยารูป V1 (have)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคอดีตที่ใช้ Verb to Be ถูกต้อง',
        tokens: ['We', 'were', 'very', 'excited', 'about', 'the', 'concert.'],
        explanationTh: 'excited เป็น Adjective บอกความรู้สึก ใช้กับ Verb to Be รูปอดีตพหูพจน์ (were)'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ Be แทน Do ในประโยคคำถาม แล้วเลือกตัวแก้',
        tokens: ['Why', 'are', 'you', 'think', 'that', 'is', 'true?'],
        errorIndex: 1,
        corrections: ['do', 'does', 'is'],
        correctOptionIndex: 0,
        explanationTh: 'think เป็นกริยาแท้รูป V1 ในประโยคคำถามจึงต้องใช้ do (Why do you think...) ไม่ใช่ are'
      },
      {
        type: 'error',
        promptTh: 'แตะกริยาที่ผันผิดหลัง does not แล้วเลือกตัวแก้',
        tokens: ['He', 'does', 'not', 'goes', 'to', 'the', 'gym', 'on', 'Fridays.'],
        errorIndex: 3,
        corrections: ['go', 'went', 'going'],
        correctOptionIndex: 0,
        explanationTh: 'หลัง does not กริยาแท้ต้องเป็น V1 เสมอ (ห้ามเติม -es) → go'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนประโยค "They were at home last night." เป็นประโยคปฏิเสธ',
        sentence: 'ข้อใดคือประโยคปฏิเสธที่ถูกต้องของ "They were at home last night."?',
        options: [
          "They didn't be at home last night.",
          "They weren't at home last night.",
          "They don't were at home last night.",
          "They wasn't at home last night."
        ],
        answerIndex: 1,
        explanationTh: 'ประโยคที่มี Verb to Be (were) ให้เติม not หลัง were ได้เลย เป็น weren’t'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาหลักที่เข้ากับประธานเอกพจน์ (Our new manager) ในอดีต',
        sentence: 'Yesterday, our new manager ___ ready ten minutes before the deadline.',
        options: ['was', 'were', 'did', 'does'],
        answerIndex: 0,
        explanationTh: 'ready เป็น Adjective จึงต้องใช้ Verb to Be และ our new manager (เอกพจน์ 1 คน) ในอดีตใช้ was'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำตอบสั้น (Short Answer) ที่ถูกต้องของคำถาม Verb to Be',
        sentence: 'A: "Are you free this evening?" — B: "___"',
        options: ["Yes, I'm.", 'Yes, I am.', 'Yes, I do.', 'Yes, am I.'],
        answerIndex: 1,
        explanationTh: 'คำตอบสั้นแบบ Yes ห้ามใช้รูปย่อเด็ดขาด (ต้องตอบ Yes, I am. ไม่ใช่ Yes, I’m.)'
      },
      {
        type: 'cloze',
        promptTh: 'แยกการตอบคำถามที่ใช้ Verb to Have เป็นกริยาแท้ ("Do you have...?")',
        sentence: 'A: "Does Sam have a spare charger?" — B: "No, he ___."',
        options: ["hasn't", "doesn't", "isn't", "don't"],
        answerIndex: 1,
        explanationTh: 'คำถามขึ้นต้นด้วย Does (ใช้ Verb to Do ช่วยถาม) ดังนั้นตอนตอบสั้นต้องตอบด้วย doesn’t'
      }
    ]
  },
  {
    id: 'g07',
    num: 7,
    phase: 'phase1',
    level: 'A1',
    titleTh: 'กฎผันคำ (-s/-es, -ed, -ing) & กริยา 3 ช่อง',
    titleEn: 'Spelling Rules & Key Irregular Verbs',
    estMinutes: 5,
    summaryTh: 'เวลาเติม -s/-es, -ed หรือ -ing คำบางคำต้องเปลี่ยน y เป็น i หรือเบิ้ลพยัญชนะท้าย รวมถึงต้องแม่น Irregular Verbs ที่ไม่เติม -ed',
    formulas: [
      { label: 'กฎพยัญชนะ + y และลงท้าย -sh/-ch/-s/-x/-o', parts: ['พยัญชนะ+y → -ies / -ied (study → studied)', '|', 'สระ+y → เติมได้เลย (play → played)', '|', 'ลงท้าย -sh/-ch/-s/-x/-o → เติม -es (wash → washes)'] },
      { label: 'กฎตัด -e เงียบ & เบิ้ล CVC & -ie', parts: ['ตัด -e ก่อน -ing/-ed (make → making, ยกเว้น -ee: seeing)', '|', 'CVC พยางค์เดียว/เน้นท้าย: stop → stopped, prefer → preferred (ไม่เบิ้ล w, x, y)', '|', 'ie → y+ing (lie → lying)'] }
    ],
    tables: [
      {
        title: 'ตารางกฎการสะกดคำเมื่อเติม -s/-es, -ed และ -ing',
        headers: ['กฎการเปลี่ยนรูป', 'เมื่อใช้ -s / -es', 'เมื่อใช้ -ed / -ing'],
        rows: [
          ['<b>ลงท้าย -sh/-ch/-s/-x/-z/-o</b>', 'เติม <b>-es</b> (wash → washes, go → goes)', 'เติมปกติ (washed / washing)'],
          ['<b>ลงท้ายด้วย -y</b>', 'พยัญชนะ+y → <b>-ies</b> · สระ+y → <b>-ys</b>', 'พยัญชนะ+y: tried / <b>trying</b> (ไม่ต้องเปลี่ยนหน้า -ing!)'],
          ['<b>ลงท้าย -e เงียบ (Silent -e)</b>', 'เติม -s (make → makes)', 'ตัด -e ก่อนเติม -ed / -ing (live → lived / make → <b>making</b>) · ยกเว้น -ee (seeing)'],
          ['<b>CVC เบิ้ลพยัญชนะท้าย</b>', '—', '1 พยางค์ (stopped) หรือ 2 พยางค์<b>เน้นเสียงท้าย</b> (preferred) · ไม่เน้นท้ายไม่เบิ้ล (visited) · ยกเว้น w/x/y (played)']
        ]
      },
      {
        title: 'ตารางกริยา 3 ช่อง (Irregular Verbs) ยอดฮิต จัดตามกลุ่มจำง่าย',
        headers: ['กลุ่ม / รูปแบบ', 'V1 (ปัจจุบัน)', 'V2 (อดีต)', 'V3 (Perfect/Passive)'],
        rows: [
          ['<b>AAA (3 ช่องเหมือนเดิม)</b>', 'put / cut / cost / let / read*', 'put / cut / cost / let / read*', 'put / cut / cost / let / read* (/เรด/)'],
          ['<b>ABB (V2 = V3 เหมือนกัน)</b>', 'buy / bring / think / teach / catch', 'bought / brought / thought / taught / caught', 'bought / brought / thought / taught / caught'],
          ['<b>ABB (สระสั้น/เปลี่ยน -d/-t)</b>', 'make / have / feel / keep / sleep', 'made / had / felt / kept / slept', 'made / had / felt / kept / slept'],
          ['<b>ABC (3 ช่องต่างกัน)</b>', 'go / see / do / fly', 'went / saw / did / flew', 'gone / seen / done / flown'],
          ['<b>ABC (-en / เปลี่ยนสระ)</b>', 'give / take / write / speak / choose / break', 'gave / took / wrote / spoke / chose / broke', 'given / taken / written / spoken / chosen / broken']
        ]
      }
    ],
    examples: [
      { en: 'She tried very hard and finally succeeded.', th: 'เธอพยายามอย่างหนักและในที่สุดก็สำเร็จ', focus: 'try (พยัญชนะ r + y) → เปลี่ยน y เป็น i แล้วเติม -ed เป็น tried' },
      { en: 'The driver stopped immediately at the red light.', th: 'คนขับหยุดรถทันทีตรงสัญญาณไฟแดง', focus: 'stop (1 พยางค์ เสียงสั้น สระ o + สะกด p) → เบิ้ล p เป็น stopped' },
      { en: 'They have already written three emails this morning.', th: 'พวกเขาเขียนอีเมลไปแล้วสามฉบับเช้านี้', focus: 'หลัง have ต้องใช้ V3 (written) ไม่ใช่ wrote (V2)' }
    ],
    mistakes: [
      { wrong: 'He buyed a new keyboard yesterday.', right: 'He bought a new keyboard yesterday.', whyTh: 'buy เป็น Irregular Verb รูปอดีตต้องใช้ bought (ไม่มีคำว่า buyed)' },
      { wrong: 'She is lieing on the sofa.', right: 'She is lying on the sofa.', whyTh: 'คำลงท้ายด้วย -ie (lie, die, tie) เมื่อเติม -ing ต้องเปลี่ยน ie เป็น y ก่อน → lying, dying, tying' },
      { wrong: 'Yesterday, he carryed two heavy boxes.', right: 'Yesterday, he carried two heavy boxes.', whyTh: 'carry ลงท้ายด้วยพยัญชนะ r + y จึงต้องเปลี่ยน y เป็น i ก่อนเติม -ed → carried' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกรูปเติม -ed ที่สะกดถูกต้องสำหรับกริยา plan',
        sentence: 'We ___ this weekend trip two months ago.',
        options: ['planed', 'planned', 'planning', 'plans'],
        answerIndex: 1,
        explanationTh: 'plan มี 1 พยางค์ สระสั้น 1 ตัว (a) + ตัวสะกด 1 ตัว (n) จึงต้องเบิ้ล n ก่อนเติม -ed → planned'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกรูปเติม -ing ที่สะกดถูกต้องสำหรับกริยา die / tie / lie',
        sentence: 'My father is ___ his shoes before going out for a jog.',
        options: ['tieing', 'tying', 'tiing', 'ties'],
        answerIndex: 1,
        explanationTh: 'คำลงท้าย -ie (tie) เมื่อเติม -ing ต้องเปลี่ยน ie เป็น y แล้วเติม ing → tying'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกรูปเติม -s ที่สะกดถูกต้องสำหรับกริยา study vs stay',
        sentence: 'Mark ___ late at the library whenever he prepares for exams.',
        options: ['staies', 'stays', 'stayes', 'stayed'],
        answerIndex: 1,
        explanationTh: 'stay ลงท้ายด้วย "สระ (a) + y" ไม่ต้องเปลี่ยน y เป็น i เติม s ได้เลย → stays'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Irregular Verb ช่อง 3 (V3) หลัง have/has',
        sentence: 'Have you ever ___ a speech in front of a large audience?',
        options: ['give', 'gave', 'given', 'gived'],
        answerIndex: 2,
        explanationTh: 'โครงสร้าง Have you ever + V3 ต้องใช้ช่อง 3 ของ give คือ given (ไม่ใช่ gave ที่เป็น V2)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ Irregular Verbs ในอดีตถูกต้อง',
        tokens: ['She', 'brought', 'fresh', 'mango', 'and', 'made', 'a', 'smoothie.'],
        explanationTh: 'อดีตของ bring คือ brought และอดีตของ make คือ made'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้รูปเติม -ed และ -ing ถูกต้อง',
        tokens: ['The', 'children', 'stopped', 'running', 'when', 'it', 'rained.'],
        explanationTh: 'stop เบิ้ล p เป็น stopped และ run เบิ้ล n เป็น running'
      },
      {
        type: 'error',
        promptTh: 'แตะกริยาที่ผันอดีตผิด (Irregular Verb) แล้วเลือกตัวแก้',
        tokens: ['Last', 'night,', 'I', 'sleeped', 'for', 'nine', 'hours.'],
        errorIndex: 3,
        corrections: ['slept', 'sleeping', 'sleeps'],
        correctOptionIndex: 0,
        explanationTh: 'sleep เป็น Irregular Verb รูปอดีตต้องใช้ slept (ไม่มี sleeped)'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่สะกดผิดกฎเติม -s แล้วเลือกคำที่ถูกต้อง',
        tokens: ['A', 'chef', 'always', 'washs', 'fresh', 'vegetables', 'carefully.'],
        errorIndex: 3,
        corrections: ['washes', 'washies', 'washing'],
        correctOptionIndex: 0,
        explanationTh: 'กริยาลงท้ายด้วย -sh, -ch, -s, -x, -o (เช่น wash, watch, go) ต้องเติม -es → washes'
      },
      {
        type: 'transform',
        promptTh: 'ผันคำว่า "teach, catch, fly" ให้เป็นรูป V2 (Past Simple) ตามลำดับ',
        sentence: 'ข้อใดผัน V2 ของทั้ง 3 คำ (teach / catch / fly) ได้ถูกต้องทั้งหมด?',
        options: [
          'teached / catched / flied',
          'taught / caught / flew',
          'taught / caught / flown',
          'tought / cought / flew'
        ],
        answerIndex: 1,
        explanationTh: 'V2 ที่ถูกต้องคือ teach → taught, catch → caught, fly → flew (ส่วน flown คือ V3)'
      },
      {
        type: 'cloze',
        promptTh: 'เติม V2 ที่ถูกต้องของคำว่า choose (เลือก)',
        sentence: 'Yesterday, our team ___ the blue logo for the new app.',
        options: ['choosed', 'chose', 'chosen', 'choose'],
        answerIndex: 1,
        explanationTh: 'choose ผัน 3 ช่องเป็น choose (V1) – chose (V2) – chosen (V3) ในอดีต (Yesterday) ใช้ chose'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกตัวสะกดที่ถูกต้องเมื่อเติม -ing กับคำที่ลงท้าย -e เงียบ vs -ee',
        sentence: 'Look! She is ___ a handmade gift for her friend and ___ them off tomorrow.',
        options: ['makeing / seeing', 'making / seeing', 'making / seing', 'makking / seeing'],
        answerIndex: 1,
        explanationTh: 'make ลงท้าย -e เงียบ ต้องตัด e ออกก่อนเติม -ing (making) ส่วน see ลงท้าย -ee ไม่ตัด e (seeing)'
      },
      {
        type: 'cloze',
        promptTh: 'แยกการเบิ้ลตัวสะกดในคำ 2 พยางค์ (prefer เน้นท้าย vs visit ไม่เน้นท้าย)',
        sentence: 'Wait a second — she ___ tea, so she ___ the local tea shop twice last week.',
        options: ['prefered / visitted', 'preferred / visited', 'preferred / visitted', 'prefered / visited'],
        answerIndex: 1,
        explanationTh: 'pre-FER เน้นเสียงพยางค์หลังจึงเบิ้ล r (preferred) ส่วน VIS-it เน้นพยางค์หน้า จึงไม่เบิ้ล t (visited)'
      }
    ]
  },
  {
    id: 'g08',
    num: 8,
    phase: 'phase1',
    level: 'A1–A2',
    titleTh: 'Sentence Structure, ประโยค 3 ชนิด & Question Tags',
    titleEn: 'Sentence Structure & Question Tags',
    estMinutes: 5,
    summaryTh: 'เข้าใจความแตกต่างของประโยค Simple / Compound / Complex, การใช้ There is/are แทนคำว่า "มี" และการใช้ Question Tags ท้ายประโยคเพื่อชวนคุย/ยืนยัน',
    formulas: [
      { label: 'โครงสร้างพื้นฐาน & 3 ชนิดประโยค', parts: ['SV / SVO / SVC (+ สถานที่ก่อนเวลา)', '|', 'Simple (1 ใจความ) · Compound (FANBOYS) · Complex (because/although)'] },
      { label: 'กฎ Question Tags (รวมคำกึ่งปฏิเสธ & ข้อยกเว้น)', parts: ['บอกเล่า (+) → Tag ปฏิเสธ (−) · ปฏิเสธ/กึ่งปฏิเสธ (never/hardly) → Tag (+)', '|', 'There is → isn’t there? · Don’t..., will you? · Everyone → aren’t they?'] }
    ],
    tables: [
      {
        title: 'โครงสร้างประโยค · FANBOYS (ไม่ใช้ Comma Splice) · และ Question Tags ครบชุด',
        headers: ['หัวข้อ', 'คำที่ใช้ / กฎจำง่าย', 'ตัวอย่างประโยค'],
        rows: [
          ['<b>5 โครงสร้างพื้นฐาน & มีอยู่</b>', 'SV · SVO · SVC · SVOO · SVOC · บอก "มี" ใช้ <b>There is/are</b>', 'She <b>is</b> happy. / <b>There are</b> three chairs here.'],
          ['<b>FANBOYS & Comma Splice</b>', '<b>F</b>or, <b>A</b>nd, <b>N</b>or, <b>B</b>ut, <b>O</b>r, <b>Y</b>et, <b>S</b>o (ใส่ comma เมื่อเชื่อม 2 ประโยค)', 'It was late<b>, so</b> we took a taxi. (❌ It was late, we took...)'],
          ['<b>Complex</b> (ไม่ใช้คู่กับ but/so)', 'because, although, when, if, while', '<b>Although</b> it rained, we went out.'],
          ['<b>Tag ปกติ & กึ่งปฏิเสธ</b>', 'คำความหมายลบ (<b>never, seldom, rarely, hardly, nobody</b>) → <b>Tag (+)</b>', 'He <b>never</b> lies<b>, does he?</b> / <b>Everyone</b> is ready<b>, aren’t they?</b>'],
          ['<b>Tag ข้อยกเว้นพิเศษ</b>', 'I am → <b>aren’t I?</b> · I’m not → <b>am I?</b> · Let’s → <b>shall we?</b> · คำสั่ง/ห้าม → <b>will you?</b>', '<b>Don’t</b> be late<b>, will you?</b> / Let’s start<b>, shall we?</b>']
        ]
      }
    ],
    examples: [
      { en: 'The cafe was crowded, so we sat outside.', th: 'ร้านกาแฟคนแน่น พวกเราเลยออกไปนั่งข้างนอก', focus: 'Compound Sentence เชื่อม 2 ประโยคอิสระด้วย , so' },
      { en: 'Your brother works in Phuket, doesn’t he?', th: 'พี่ชายของคุณทำงานที่ภูเก็ตใช่ไหม', focus: 'ข้างหน้าไม่มี Be/Modal และเป็นกริยาเติม -s (works) → Tag ใช้ doesn’t he?' },
      { en: 'There are three extra chairs in that room.', th: 'มีเก้าอี้เสริมสามตัวอยู่ในห้องนั้น', focus: 'บอก "มีอยู่" ใช้ There are + นามพหูพจน์ (ห้ามใช้ Have)' }
    ],
    mistakes: [
      { wrong: 'Have three apples on the table.', right: 'There are three apples on the table.', whyTh: 'เมื่อแปลว่า "มี (สิ่งของตั้งอยู่ที่ไหนสักแห่ง)" ต้องใช้ There is / There are ห้ามขึ้นต้นประโยคด้วย Have ลอยๆ' },
      { wrong: "I am late, amn't I?", right: "I am late, aren't I?", whyTh: 'ข้อยกเว้นสำคัญ: Question Tag ของ I am (บอกเล่า) ต้องใช้ aren’t I? เสมอ (แต่ I am not → am I?)' },
      { wrong: 'She likes jazz, isn’t she?', right: "She likes jazz, doesn't she?", whyTh: 'ประโยคหน้าใช้กริยาแท้ likes (Present Simple) ไม่มี Verb to Be จึงต้องใช้ doesn’t she? ใน Tag' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือก Question Tag ที่ถูกต้องกับประโยคที่มี Modal Verb (can)',
        sentence: 'Your sister can speak three languages, ___?',
        options: ["doesn't she", "can't she", "isn't she", 'can she'],
        answerIndex: 1,
        explanationTh: 'ประโยคหน้าเป็นบอกเล่าที่มีกริยาช่วย can จึงใช้ Tag ปฏิเสธด้วยกริยาช่วยตัวเดิม → can’t she?'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Question Tag ของประโยคปฏิเสธที่มีความหมายลบ (never)',
        sentence: 'He never drinks coffee after dinner, ___?',
        options: ["doesn't he", 'does he', 'is he', "isn't he"],
        answerIndex: 1,
        explanationTh: 'never มีความหมายปฏิเสธในตัว! ดังนั้น Question Tag ท้ายประโยคต้องเป็นรูปบอกเล่า → does he?'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Question Tag ข้อยกเว้นของ "I am..."',
        sentence: "I'm on the right train to Chiang Mai, ___?",
        options: ["am not I", "aren't I", "isn't I", "don't I"],
        answerIndex: 1,
        explanationTh: "รูปคำถามยืนยันท้ายประโยคของ I'm / I am ใช้ข้อยกเว้นว่า aren't I?"
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ There is / There are แทนคำว่า "มี" อย่างถูกต้อง',
        sentence: '___ a quiet park behind our office building.',
        options: ['Has', 'Have', 'There is', 'There are'],
        answerIndex: 2,
        explanationTh: 'บอกการมีอยู่ของสิ่งของ (a quiet park = เอกพจน์) ต้องขึ้นต้นด้วย There is (ไม่ใช่ Has/Have)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็น Compound Sentence ที่เชื่อมด้วย FANBOYS ถูกต้อง',
        tokens: ['The', 'train', 'was', 'delayed,', 'but', 'everyone', 'stayed', 'calm.'],
        explanationTh: 'เชื่อมประโยคอิสระ 2 ประโยคที่ขัดแย้งกันด้วย , but'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็น Question Tag สำหรับประโยคชักชวน (Let’s...)',
        tokens: ["Let's", 'review', 'these', 'grammar', 'notes', 'together,', 'shall', 'we?'],
        explanationTh: "ประโยคชักชวนขึ้นต้นด้วย Let's ใช้ Tag ท้ายประโยคว่า shall we?"
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ Question Tag ผิดกริยาช่วย แล้วเลือกตัวแก้',
        tokens: ['They', 'moved', 'to', 'Korat', 'last', 'year,', "weren't", 'they?'],
        errorIndex: 6,
        corrections: ["didn't", "don't", "aren't"],
        correctOptionIndex: 0,
        explanationTh: "กริยาหน้าคือ moved (Past Simple ไม่มี Verb to Be) ดังนั้น Tag ต้องใช้ didn't they?"
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ขึ้นต้นประโยคด้วย Have แทน There is/are แล้วเลือกตัวแก้',
        tokens: ['Have', 'many', 'friendly', 'cafes', 'along', 'this', 'street.'],
        errorIndex: 0,
        corrections: ['There are', 'There is', 'It has'],
        correctOptionIndex: 0,
        explanationTh: 'many friendly cafes เป็นพหูพจน์ ต้องใช้ There are เพื่อแปลว่า "มี..." ไม่ใช่ Have'
      },
      {
        type: 'transform',
        promptTh: 'รวมสองประโยค: "I studied hard." + "I passed the test." เป็น Compound Sentence',
        sentence: 'ข้อใดเชื่อมด้วย FANBOYS ได้ถูกต้องทั้งโครงสร้างและความหมาย?',
        options: [
          'I studied hard, but I passed the test.',
          'I studied hard, so I passed the test.',
          'I studied hard because, I passed the test.',
          'Although I studied hard, so I passed the test.'
        ],
        answerIndex: 1,
        explanationTh: 'เชื่อมเหตุ → ผลแบบ Compound Sentence ใช้ , so (ดังนั้น) ส่วน because เป็น Complex และห้ามใช้ Although คู่กับ so'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกชนิดของประโยค: "Although it was raining, we finished the marathon."',
        sentence: 'ประโยคตัวอย่างด้านบนจัดเป็นประโยคชนิดใด?',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Question Tag'],
        answerIndex: 2,
        explanationTh: 'มีอนุประโยครองที่ขึ้นต้นด้วย Although (Dependent Clause) + ประโยคหลัก (we finished...) จึงเป็น Complex Sentence'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Question Tag สำหรับประโยคคำสั่งเตือนเชิงห้าม ("Don’t...")',
        sentence: 'Please don’t forget to lock the back door tonight, ___?',
        options: ["don't you", 'will you', 'shall we', 'are you'],
        answerIndex: 1,
        explanationTh: 'ประโยคคำสั่งทั้งเชิงขอร้องและเชิงห้าม (Don’t...) ใช้ Question Tag ว่า will you? เสมอ'
      },
      {
        type: 'transform',
        promptTh: 'แก้ไขประโยค Comma Splice (เชื่อม 2 ประโยคด้วยคอมม่าอย่างเดียวผิด): "The cafe closed early, we went straight home."',
        sentence: 'ข้อใดแก้ไขโครงสร้าง Compound Sentence ได้ถูกต้อง?',
        options: [
          'The cafe closed early we went straight home.',
          'The cafe closed early, so we went straight home.',
          'Because the cafe closed early, so we went straight home.',
          'The cafe closed early, but we went straight home.'
        ],
        answerIndex: 1,
        explanationTh: 'ห้ามเชื่อม 2 ประโยคด้วยเครื่องหมาย comma ลอยๆ (Comma Splice) ต้องเติมสันธาน FANBOYS ที่ตรงความหมายเหตุ-ผล คือ , so'
      }
    ]
  },
  {
    id: 'g09',
    num: 9,
    phase: 'phase1',
    level: 'A2–B1',
    titleTh: 'Subject–Verb Agreement (ประธาน–กริยาสอดคล้องกัน)',
    titleEn: 'Subject-Verb Agreement',
    estMinutes: 5,
    summaryTh: 'กฎหลักคือ "ประธานเอกพจน์ ใช้กริยาเอกพจน์ (เติม -s/is/was/has)" และ "ประธานพหูพจน์ ใช้กริยาพหูพจน์" พร้อมข้อยกเว้นที่ออกสอบบ่อยที่สุด',
    formulas: [
      { label: 'ตัวหลอกคลาสสิก 1 (มองหาประธานตัวจริง)', parts: ['The box [of apples] + IS (ดูที่ box)', '|', 'The teacher, [along with / as well as students], + HAS (ดูตัวหน้า)'] },
      { label: 'ตัวหลอกคลาสสิก 2 (Either / Neither / สัดส่วน of)', parts: ['Either A or B / Neither A nor B → ผันตาม B', '|', 'Most of / Half of / 50% of + N → ผันตามคำนามหลัง of'] }
    ],
    tables: [
      {
        title: 'สรุปกฎ Subject–Verb Agreement ที่ห้ามพลาด',
        headers: ['โครงสร้างประธาน', 'กริยาที่ใช้', 'ตัวอย่างที่ถูกต้อง'],
        rows: [
          ['<b>Each / Every + นามเอกพจน์</b>', 'เอกพจน์เสมอ', '<b>Every</b> employee <b>has</b> an ID badge.'],
          ['<b>Each of / One of + นามพหูพจน์</b>', 'เอกพจน์ (ดูที่ Each/One)', '<b>One of</b> my friends <b>lives</b> in Japan.'],
          ['<b>A number of</b> vs <b>The number of</b>', 'A number = พหูพจน์ · The number = เอกพจน์', '<b>A number of</b> cars <b>are</b> parked. / <b>The number of</b> cars <b>is</b> 20.'],
          ['<b>Either A or B / Neither A nor B</b>', 'ดูที่ประธานตัวหลัง (B)', 'Neither Luke nor his sisters <b>are</b> coming.'],
          ['<b>ข่าว / วิชา / เงิน-เวลา-ระยะทางรวม</b>', 'เอกพจน์เสมอ', 'The <b>news is</b> good. / <b>Mathematics is</b> fun. / <b>Two hours is</b> enough.'],
          ['<b>V-ing (Gerund) เป็นประธาน</b>', 'เอกพจน์เสมอ', '<b>Learning</b> new words daily <b>helps</b> you improve.'],
          ['<b>There is/are + A and B</b>', 'ดูที่คำนามตัวแรก (A)', '<b>There is</b> a notebook and two pens.'],
          ['<b>สัดส่วน (most of / half of / 50% of)</b>', 'ดูที่คำนามหลัง <b>of</b> (เอกพจน์ vs พหูพจน์)', 'Half of the <b>cake is</b> gone. / Half of the <b>students are</b> here.'],
          ['<b>กลุ่มคน / ของเป็นคู่ / Relative Clause</b>', 'police/people/scissors = พหูพจน์ · a pair of = เอกพจน์', 'The <b>police are</b> coming. / A <b>pair</b> of scissors <b>is</b> missing. / People <b>who live</b> here...']
        ]
      }
    ],
    examples: [
      { en: 'The price of these tickets has increased this month.', th: 'ราคาของตั๋วเหล่านี้เพิ่มขึ้นในเดือนนี้', focus: 'ประธานตัวจริงคือ The price (เอกพจน์) ไม่ใช่ tickets → ใช้ has' },
      { en: 'Neither the coach nor the players were tired.', th: 'ทั้งโค้ชและผู้เล่นต่างก็ไม่ได้เหนื่อย', focus: 'ตัวใกล้กริยาคือ players (พหูพจน์) → ใช้ were' },
      { en: 'A number of volunteers are cleaning the beach.', th: 'อาสาสมัครจำนวนหนึ่งกำลังทำความสะอาดชายหาด', focus: 'A number of = หลายคน (พหูพจน์) → ใช้ are cleaning' }
    ],
    mistakes: [
      { wrong: 'One of my cousins work in Singapore.', right: 'One of my cousins works in Singapore.', whyTh: 'ประธานตัวจริงคือ One ("หนึ่งใน...") ซึ่งเป็นเอกพจน์ กริยาจึงต้องเติม -s เป็น works' },
      { wrong: 'The number of applicants are rising.', right: 'The number of applicants is rising.', whyTh: 'The number of แปลว่า "จำนวนของ..." ถือเป็นเลขจำนวนเดียว (เอกพจน์) จึงต้องใช้ is' },
      { wrong: 'Ten kilometers are too far to walk.', right: 'Ten kilometers is too far to walk.', whyTh: 'ระยะทาง เงิน หรือเวลารวมเป็นก้อนเดียว (Ten kilometers, Five hundred baht) ใช้กริยาเอกพจน์ is' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'หาประธานตัวจริงหน้าวลี "of the..." ให้เจอแล้วเลือกกริยาที่ตรงกัน',
        sentence: 'One of the laptops in this office ___ a broken keyboard.',
        options: ['have', 'has', 'are having', 'were'],
        answerIndex: 1,
        explanationTh: 'ประธานตัวจริงคือ One (หนึ่งเครื่อง) แม้จะมีคำว่า laptops พ่วงมาข้างหลัง กริยาก็ต้องเป็นเอกพจน์ → has'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาให้ตรงกับ Neither...nor... (ดูตัวใกล้กริยา)',
        sentence: 'Neither Anna nor her teammates ___ ready to leave yet.',
        options: ['is', 'was', 'are', 'has'],
        answerIndex: 2,
        explanationTh: 'โครงสร้าง Neither A nor B ให้ผันกริยาตาม B (her teammates = พหูพจน์) → are'
      },
      {
        type: 'cloze',
        promptTh: 'แยกความต่างระหว่าง A number of กับ The number of',
        sentence: 'The number of tourists visiting Phuket ___ increased sharply this year.',
        options: ['have', 'has', 'are', 'were'],
        answerIndex: 1,
        explanationTh: 'The number of = จำนวนตัวเลขของนักท่องเที่ยว (เป็นเอกพจน์เสมอ) → ใช้ has'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาสำหรับประธานที่เชื่อมด้วย along with / as well as',
        sentence: 'The manager, along with two assistants, ___ attending the conference.',
        options: ['is', 'are', 'were', 'have'],
        answerIndex: 0,
        explanationTh: 'วลีส่วนขยายอย่าง along with / as well as / with ให้ยึดประธานตัวแรก (The manager = เอกพจน์) → is'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาสำหรับ Gerund (V-ing) ที่เป็นประธานของประโยค',
        sentence: 'Drinking enough water every day ___ your concentration.',
        options: ['improve', 'improves', 'are improving', 'were'],
        answerIndex: 1,
        explanationTh: 'กริยาเติม -ing ที่ทำหน้าที่เป็นประธาน (การดื่มน้ำ...) นับเป็นเรื่องเดียว (เอกพจน์) → improves'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ Each of ถูกต้อง',
        tokens: ['Each', 'of', 'the', 'students', 'receives', 'a', 'free', 'workbook.'],
        explanationTh: 'Each of + นามพหูพจน์ (students) ใช้กริยาเอกพจน์เสมอ (receives)'
      },
      {
        type: 'error',
        promptTh: 'แตะกริยาที่ผันไม่ตรงกับประธาน (news) แล้วเลือกตัวแก้',
        tokens: ['The', 'good', 'news', 'about', 'our', 'flight', 'are', 'true.'],
        errorIndex: 6,
        corrections: ['is', 'were', 'have'],
        correctOptionIndex: 0,
        explanationTh: 'news (ข่าวสาร) มี s ท้ายคำก็จริง แต่เป็นคำนามนับไม่ได้รูปเอกพจน์เสมอ → ต้องใช้ is'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดในประโยคบอกเวลารวม แล้วเลือกตัวแก้',
        tokens: ['Three', 'hours', 'of', 'deep', 'sleep', 'aren’t', 'enough', 'for', 'anyone.'],
        errorIndex: 5,
        corrections: ["isn't", "weren't", "don't"],
        correctOptionIndex: 0,
        explanationTh: 'เวลา เงิน หรือระยะทางที่มองเป็นปริมาณรวมก้อนเดียว (Three hours) ใช้กริยาเอกพจน์ → isn’t'
      },
      {
        type: 'transform',
        promptTh: 'เลือกประโยคที่ใช้ A number of กับกริยาได้ถูกต้อง',
        sentence: 'ข้อใดใช้โครงสร้าง A number of ถูกต้องทั้งคำนามและคำกริยา?',
        options: [
          'A number of student is absent today.',
          'A number of students is absent today.',
          'A number of students are absent today.',
          'A number of student are absent today.'
        ],
        answerIndex: 2,
        explanationTh: 'A number of แปลว่า "หลาย..." จึงต้องตามด้วยคำนามพหูพจน์ (students) และกริยาพหูพจน์ (are)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาสำหรับประโยคที่ขึ้นต้นด้วย There + รายการสิ่งของ',
        sentence: 'There ___ a notebook and two pens on your desk.',
        options: ['is', 'are', 'were', 'have'],
        answerIndex: 0,
        explanationTh: 'There is/are เมื่อมีหลายสิ่งตามหลัง ให้ยึดคำนามตัวแรกที่ใกล้ที่สุด (a notebook = เอกพจน์) → There is'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาหลังคำบอกสัดส่วน (Most of / Half of) โดยดูจากคำนามหลัง of',
        sentence: 'Most of the fresh fruit in this basket ___ from local farms in Chiang Mai.',
        options: ['come', 'comes', 'are coming', 'were'],
        answerIndex: 1,
        explanationTh: 'วลี Most of + นามนับไม่ได้ (fruit = เอกพจน์) จึงใช้กริยาเอกพจน์ → comes'
      },
      {
        type: 'cloze',
        promptTh: 'แยกระหว่างคำนามที่เป็นคู่ (glasses, scissors) กับคำว่า "a pair of..."',
        sentence: 'This pair of blue jeans ___ on sale for half price today.',
        options: ['are', 'were', 'is', 'have'],
        answerIndex: 2,
        explanationTh: 'jeans เฉยๆ ใช้พหูพจน์ แต่เมื่อมีคำว่า "This pair of" (1 คู่) นำหน้า ประธานหลักคือ pair (เอกพจน์) → ใช้ is'
      }
    ]
  },
  {
    id: 'g10',
    num: 10,
    phase: 'phase1',
    level: 'A2–B1',
    titleTh: 'Indefinite Pronouns & both / either / neither / none',
    titleEn: 'Indefinite Pronouns & Quantifier Pairs',
    estMinutes: 5,
    summaryTh: 'รวมคำสรรพนามไม่เจาะจงตระกูล some- / any- / no- / every- ที่คนไทยใช้ผิดกริยาบ่อยมาก พร้อมวิธีใช้ both, either, neither, none และ each/every',
    formulas: [
      { label: 'กฎทองตระกูล some-/any-/no-/every-', parts: ['Everyone / Somebody / Anything / Nothing', '+', 'กริยาเอกพจน์เสมอ (is / has / V-s)'] },
      { label: 'ตำแหน่ง Adjective ขยาย', parts: ['Indefinite Pronoun + Adjective', '→', 'something special / anything new'] }
    ],
    tables: [
      {
        title: 'เปรียบเทียบตระกูลไม่เจาะจง · both / either / neither / none · และ each vs every',
        headers: ['คำศัพท์ / โครงสร้าง', 'จำนวน / ความหมาย', 'กริยาที่ใช้', 'ตัวอย่าง'],
        rows: [
          ['some- / somewhere', 'บางคน/บางสิ่ง (บอกเล่า / ขอร้อง / เสนอ Would you like...?)', 'เอกพจน์', '<b>Someone is</b> waiting. / Want <b>something</b> warm?'],
          ['any- / anywhere', 'ถาม-ปฏิเสธ · หรือในบอกเล่า = "ใคร/อะไรก็ได้"', 'เอกพจน์', 'Did <b>anyone call</b>? / <b>Anyone</b> can learn this!'],
          ['no- / nowhere (ไม่มี not ซ้อน)', 'ไม่มีใคร/ไม่มีอะไร · ตำแหน่ง <b>else</b> วางท้าย (someone else)', 'เอกพจน์', '<b>Nobody knows</b> the code. / Ask <b>someone else</b>.'],
          ['both ... and / both of', 'ทั้งสองอย่าง (2 สิ่ง)', 'พหูพจน์', '<b>Both</b> tea and coffee <b>are</b> free.'],
          ['either / neither (of + the + พหูพจน์)', 'อันใดอันหนึ่ง / ไม่ทั้งคู่ (2 สิ่ง)', 'เอกพจน์ (ทางการ)', '<b>Neither of</b> the cafes <b>is</b> open.'],
          ['none (of) vs <b>each / every</b>', 'none (จาก 3+) · <b>each</b> (2+ ทีละอัน, ใช้ each of ได้) · <b>every</b> (3+ รวมๆ, ต้องมี N ตาม)', 'each/every + เอกพจน์', 'She wore a ring on <b>each hand</b>. (2 มือใช้ each)']
        ]
      }
    ],
    examples: [
      { en: 'Everyone in the room is listening closely.', th: 'ทุกคนในห้องกำลังตั้งใจฟังอยู่', focus: 'Everyone แปลว่า "ทุกคน" ก็จริง แต่นับเป็นรายบุคคล (เอกพจน์) จึงใช้ is' },
      { en: 'We want to try something traditional tonight.', th: 'คืนนี้เราอยากลองทานอะไรที่เป็นแบบดั้งเดิม', focus: 'Adjective (traditional) ต้องวางไว้ "หลัง" something' },
      { en: 'Both of these jackets fit me nicely.', th: 'เสื้อแจ็กเก็ตทั้งสองตัวนี้ใส่พอดีกับฉันเลย', focus: 'Both of + พหูพจน์ ใช้กริยาพหูพจน์ fit' }
    ],
    mistakes: [
      { wrong: 'Everybody are happy about the news.', right: 'Everybody is happy about the news.', whyTh: 'Everybody / Everyone / Everything ใช้กริยาเอกพจน์เสมอ (is/was/has/V-s) ห้ามใช้ are' },
      { wrong: "Nobody didn't come to the meeting.", right: 'Nobody came to the meeting.', whyTh: 'Nobody / Nothing มีความหมายปฏิเสธ (ไม่) อยู่ในตัวแล้ว ห้ามใส่ don’t/didn’t ซ้อนกัน (Double Negative)' },
      { wrong: 'Do you know new anything?', right: 'Do you know anything new?', whyTh: 'คำคุณศัพท์ (new, special, interesting) ต้องวางไว้หลัง something/anything เสมอ' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาที่ถูกต้องสำหรับ Everyone / Everybody',
        sentence: 'Everybody at the office ___ excited about the annual bonus.',
        options: ['are', 'were', 'is', 'have'],
        answerIndex: 2,
        explanationTh: 'Everybody ใช้กริยาเอกพจน์เสมอ แม้จะหมายถึงคนหลายคน → is'
      },
      {
        type: 'cloze',
        promptTh: 'หลีกเลี่ยง Double Negative เมื่อประโยคมีคำปฏิเสธอยู่แล้ว (couldn’t)',
        sentence: "I looked everywhere in my bag, but I couldn't find ___.",
        options: ['nothing', 'anything', 'something', 'nowhere'],
        answerIndex: 1,
        explanationTh: "ประโยคมี couldn't (ปฏิเสธ) อยู่แล้ว จึงต้องใช้ anything แทน nothing เพื่อไม่ให้ปฏิเสธซ้อนกัน"
      },
      {
        type: 'cloze',
        promptTh: 'เลือกวาง Adjective กับ Indefinite Pronoun (something / anything)',
        sentence: 'Let’s celebrate! Did ___ happen at work today?',
        options: ['exciting anything', 'anything exciting', 'exciting something', 'something of exciting'],
        answerIndex: 1,
        explanationTh: 'ในประโยคคำถามใช้ anything และวาง Adjective (exciting) ไว้ด้านหลังเป็น anything exciting'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกใช้ both / either / neither ให้ตรงความหมาย (ไม่เอาทั้ง 2 อย่าง)',
        sentence: 'I tried two pairs of shoes, but ___ of them felt comfortable.',
        options: ['both', 'all', 'neither', 'every'],
        answerIndex: 2,
        explanationTh: 'รองเท้ามี 2 คู่ (two pairs) และความหมายคือ "ไม่สบายทั้ง 2 คู่" (but = ขัดแย้ง) จึงใช้ neither'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ both ... and ... ถูกต้อง',
        tokens: ['Both', 'my', 'friend', 'and', 'I', 'are', 'engineers.'],
        explanationTh: 'Both A and B ถือเป็นประธานพหูพจน์ (วาง I ไว้หลังคนอื่น) ใช้กับกริยาพหูพจน์ are engineers'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่มี Adjective ขยาย something ถูกต้อง',
        tokens: ['Would', 'you', 'like', 'something', 'warm', 'to', 'drink?'],
        explanationTh: 'ประโยคเสนอให้แบบสุภาพใช้ something + Adjective ตามหลัง (something warm)'
      },
      {
        type: 'error',
        promptTh: 'แตะคำกริยาที่ผันผิดกับ Everything แล้วเลือกตัวแก้',
        tokens: ['Do', 'not', 'panic;', 'everything', 'in', 'this', 'plan', 'make', 'sense.'],
        errorIndex: 7,
        corrections: ['makes', 'making', 'were'],
        correctOptionIndex: 0,
        explanationTh: 'Everything เป็นสรรพนามเอกพจน์ กริยาช่อง 1 จึงต้องเติม -s เป็น makes sense'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่อง Double Negative แล้วเลือกตัวแก้',
        tokens: ['We', "didn't", 'see', 'nobody', 'at', 'the', 'ticket', 'counter.'],
        errorIndex: 3,
        corrections: ['anybody', 'everybody', 'nothing'],
        correctOptionIndex: 0,
        explanationTh: "ประโยคมี didn't (ปฏิเสธ) อยู่แล้ว ต้องใช้ anybody แทน nobody เพื่อไม่ให้เกิด Double Negative → We didn't see anybody..."
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนประโยค "Both cafes are not open on Monday." ให้เป็นสำนวนที่เป็นธรรมชาติด้วย Neither',
        sentence: 'ข้อใดใช้ Neither of... ได้ถูกต้องตามหลักไวยากรณ์?',
        options: [
          "Neither of the cafes isn't open on Monday.",
          'Neither of the cafes is open on Monday.',
          'Neither of the cafe are open on Monday.',
          'Neither cafes are open on Monday.'
        ],
        answerIndex: 1,
        explanationTh: 'Neither แปลว่า "ไม่ทั้งคู่" จึงไม่ต้องเติม not ซ้อน และตามด้วย of + the + นามพหูพจน์ (the cafes) + กริยาเอกพจน์ (is)'
      },
      {
        type: 'cloze',
        promptTh: 'แยกความต่างระหว่าง each กับ every (เมื่อพูดถึงของ 2 สิ่ง)',
        sentence: 'She wore a silver ring on ___ hand.',
        options: ['every', 'each', 'all', 'both'],
        answerIndex: 1,
        explanationTh: 'คนเรามี 2 มือ (ใช้กับนามเอกพจน์ hand) → each ใช้ได้ตั้งแต่ 2 สิ่งขึ้นไป ส่วน every ใช้กับ 3 สิ่งขึ้นไปเท่านั้น'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกวางคำว่า else ("อื่น") หลัง Indefinite Pronoun ให้ถูกตำแหน่ง',
        sentence: 'I am busy tomorrow; could you ask ___ to cover the morning shift?',
        options: ['else someone', 'someone else', 'anyone of else', 'nobody else'],
        answerIndex: 1,
        explanationTh: 'คำว่า else ("คนอื่น/อย่างอื่น") ต้องวางหลัง Indefinite Pronoun เสมอ → someone else'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ anyone ในประโยคบอกเล่าเพื่อสื่อความหมายว่า "ใครก็ได้ทุกคน"',
        sentence: 'This beginner guide is so clear that ___ can understand it easily.',
        options: ['no one', 'anyone', 'someone', 'neither'],
        answerIndex: 1,
        explanationTh: 'anyone / anybody ในประโยคบอกเล่า (โดยเฉพาะกับ can) แปลว่า "ใครก็ได้ ไม่จำกัดว่าเป็นใคร"'
      }
    ]
  },
  {
    id: 'g11',
    num: 11,
    phase: 'phase2',
    level: 'A1–B1',
    titleTh: 'Prepositions (in / on / at · บุพบทเวลา-สถานที่-ทิศทาง)',
    titleEn: 'Prepositions of Time, Place & Movement',
    estMinutes: 5,
    summaryTh: 'จำหลัก "สามเหลี่ยม in → on → at" (ใหญ่ไปหาเล็ก) พร้อมบุพบทบอกทิศทาง (into/across/through/over) และแยกคู่สับสน for/since/during, by/until, between/among ได้แม่นยำ',
    formulas: [
      { label: 'สามเหลี่ยม in → on → at', parts: ['in (กว้าง: ปี เดือน เมือง ห้อง รถเก๋ง)', '→', 'on (กลาง: วัน วันที่ ถนน รถเมล์/รถไฟ)', '→', 'at (จุดแคบ: เวลาเป๊ะ midnight บ้านเลขที่)'] },
      { label: 'เวลาสับสน & ทิศทาง & ข้อห้าม Ø', parts: ['for + ระยะเวลา · since + จุดเริ่ม · during + N', '|', 'into (เข้าข้างใน) · across (ข้ามผิว) · through (ทะลุอุโมงค์/ป่า)', '|', '❌ ห้ามใส่ in/on/at หน้า this / next / last / every'] }
    ],
    tables: [
      {
        title: 'เปรียบเทียบ Prepositions เวลา · สถานที่ · ยานพาหนะ · และทิศทาง',
        headers: ['คำบุพบท', 'การใช้งานหลัก', 'ตัวอย่างชัดเจน', 'ข้อควรระวัง'],
        rows: [
          ['<b>in / on / at</b> (เวลา)', 'in + เดือน/ปี/ช่วงวัน · on + วัน/วันที่ · at + เวลา/noon/<b>midnight</b>/night', '<b>in</b> May · <b>on</b> Monday · <b>at</b> 8:30 / <b>at midnight</b>', '❌ ห้ามใส่ prep หน้า <b>next/last/this/every</b> (next Monday)'],
          ['<b>in / on / at</b> (สถานที่ & รถ)', 'in + พื้นที่ปิด/เมือง/car/taxi · on + ถนน/ชั้น/bus/train/plane · at + จุดเฉพาะ/บ้านเลขที่', '<b>in</b> a taxi · <b>on</b> Sukhumvit Rd / <b>on</b> a bus · <b>at</b> 42 Elm St', 'arrive <b>in</b> (เมืองใหญ่) / arrive <b>at</b> (จุดเล็ก)'],
          ['<b>Movement (ทิศทาง)</b>', 'into (เข้าไปใน) · onto (ขึ้นไปบน) · across (ข้ามถนน) · <b>through</b> (ทะลุอุโมงค์/ป่า) · <b>over</b> (ข้ามด้านบน)', 'jump <b>over</b> the fence · walk <b>through</b> the tunnel', 'along (เลียบตามแนว) · past (ผ่านเลย) · towards (มุ่งหน้า)'],
          ['<b>for / since / during</b>', 'for + 2 hours · since + 2020 · during + the meeting', '<b>during</b> the trip (ตามด้วยคำนามเท่านั้น)', 'ห้ามใช้ during + ประโยค (ถ้าเป็นประโยคใช้ while)'],
          ['<b>by / until</b> & <b>between / among</b>', 'by (ไม่เกินกำหนด) vs until (จนถึง) · between (แยกชัด 2 หรือชื่อเฉพาะ) vs among (กลุ่ม 3+)', 'Submit <b>by</b> Friday · <b>between</b> Thailand, Laos, and Vietnam', 'between ใช้กับ 3+ สิ่งได้ถ้าระบุแยกทีละชื่อชัดเจน']
        ]
      }
    ],
    examples: [
      { en: 'The train arrives at the station at 6:45 a.m.', th: 'รถไฟมาถึงสถานีเวลา 6:45 น.', focus: 'จุดสถานที่ขนาดเล็กใช้ arrive at · เวลาเจาะจงใช้ at' },
      { en: 'Please finish this report by Thursday afternoon.', th: 'กรุณาทำรายงานนี้ให้เสร็จภายในบ่ายวันพฤหัสบดี', focus: 'by + กำหนดเวลา = เสร็จก่อนหรือภายในเวลาที่กำหนด' },
      { en: 'He stayed awake during the entire flight.', th: 'เขาตื่นอยู่ตลอดช่วงเวลาของเที่ยวบิน', focus: 'during + คำนาม (the entire flight) = ระหว่างช่วง...' },
      { en: 'I walked across the street and went into the cafe.', th: 'ฉันเดินข้ามถนนและเดินเข้าไปในร้านกาแฟ', focus: 'across = ข้ามจากฝั่งหนึ่งไปอีกฝั่ง · into = เคลื่อนที่เข้าไปข้างใน' }
    ],
    mistakes: [
      { wrong: 'See you on the morning at Monday.', right: 'See you on Monday morning.', whyTh: 'ช่วงเวลาทั่วไปใช้ in the morning แต่ถ้ามีชื่อวันพ่วงด้วย (Monday morning) ต้องใช้ on' },
      { wrong: 'We discussed it during we ate lunch.', right: 'We discussed it while we ate lunch.', whyTh: 'during ต้องตามด้วยคำนาม (during lunch) เท่านั้น ถ้าตามด้วย S+V ต้องใช้ while' },
      { wrong: 'Wait here by I come back.', right: 'Wait here until I come back.', whyTh: 'การรอทำต่อเนื่องจนกว่าอีกคนจะกลับมา ต้องใช้ until ไม่ใช่ by' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกบุพบทสำหรับวันที่มีช่วงเวลากำกับ (Friday evening)',
        sentence: 'We usually watch a movie together ___ Friday evening.',
        options: ['in', 'on', 'at', 'by'],
        answerIndex: 1,
        explanationTh: 'แม้จะมีคำว่า evening แต่ระบุชื่อวัน (Friday) นำหน้า จึงต้องใช้ on เสมอ'
      },
      {
        type: 'cloze',
        promptTh: 'แยกระหว่าง by (เส้นตายเสร็จภายใน) กับ until (ทำต่อเนื่องจนถึง)',
        sentence: 'All applications must be submitted ___ May 31st at the latest.',
        options: ['until', 'by', 'since', 'during'],
        answerIndex: 1,
        explanationTh: 'ส่งใบสมัคร "ภายใน/ไม่เกิน" วันที่ 31 พ.ค. (at the latest = อย่างช้าที่สุด) จึงต้องใช้ by'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกบุพบทหน้าคำนามบอกช่วงเวลาเหตุการณ์ (the concert)',
        sentence: 'Please turn off your phone ___ the performance.',
        options: ['while', 'during', 'since', 'between'],
        answerIndex: 1,
        explanationTh: 'the performance เป็นคำนาม จึงใช้ during (ส่วน while ต้องตามด้วยประโยค S+V)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก between หรือ among ให้ถูกต้อง',
        sentence: 'She was nervous speaking ___ more than fifty strangers.',
        options: ['between', 'among', 'across', 'onto'],
        answerIndex: 1,
        explanationTh: 'พูดท่ามกลางกลุ่มคนมากกว่า 2 คนแบบรวมๆ ใช้ among'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ at / in สำหรับสถานที่ (จุดแคบ → เมืองใหญ่) ถูกต้อง',
        tokens: ['They', 'met', 'at', 'the', 'museum', 'in', 'downtown', 'Bangkok.'],
        explanationTh: 'จุดนัดพบเจาะจงใช้ at the museum และพื้นที่เมืองใหญ่ใช้ in Bangkok'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้บุพบทบอกทิศทาง (movement) ถูกต้อง',
        tokens: ['The', 'dog', 'jumped', 'over', 'the', 'fence', 'into', 'our', 'yard.'],
        explanationTh: 'กระโดดข้ามสิ่งกีดขวางใช้ over และกระโดดเข้าไปในพื้นที่ปิดใช้ into'
      },
      {
        type: 'error',
        promptTh: 'แตะบุพบทที่ใช้ผิดกับคำว่า night / noon แล้วเลือกตัวแก้',
        tokens: ['Our', 'bus', 'arrives', 'in', 'midnight,', 'so', 'bring', 'a', 'jacket.'],
        errorIndex: 3,
        corrections: ['at', 'on', 'for'],
        correctOptionIndex: 0,
        explanationTh: 'จุดเวลา midnight / noon / night ใช้คู่กับบุพบท at → at midnight'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่อง until vs by กับกริยาที่จบในจุดเดียว แล้วเลือกตัวแก้',
        tokens: ['Please', 'return', 'the', 'library', 'books', 'until', 'next', 'Monday.'],
        errorIndex: 5,
        corrections: ['by', 'during', 'since'],
        correctOptionIndex: 0,
        explanationTh: 'การคืนหนังสือเป็นจุดกำหนดส่ง (deadline) จึงต้องใช้ by next Monday ไม่ใช่ until'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยน "She lived in Chiang Mai from 2019 to 2024." ให้ใช้บุพบทบอกระยะเวลา',
        sentence: 'ข้อใดใช้ for / since แทนช่วงเวลา 5 ปีได้ถูกต้อง?',
        options: [
          'She lived in Chiang Mai since five years.',
          'She lived in Chiang Mai for five years.',
          'She lived in Chiang Mai during five years.',
          'She lived in Chiang Mai at five years.'
        ],
        answerIndex: 1,
        explanationTh: 'ระบุจำนวนระยะเวลา (five years) ต้องใช้ for (ส่วน since ใช้กับจุดเริ่มต้น เช่น since 2019)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกบุพบทบอกจุดเริ่มต้นเวลา (since vs for) กับปี ค.ศ.',
        sentence: 'This small cafe has been open ___ 2018.',
        options: ['for', 'since', 'during', 'from'],
        answerIndex: 1,
        explanationTh: '2018 เป็น "จุดเริ่มต้น" ในอดีต (นับตั้งแต่ปี 2018 จนถึงปัจจุบัน has been) → ใช้ since'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Preposition of Movement (through ทะลุผ่านพื้นที่ปิด vs across ข้ามพื้นผิว)',
        sentence: 'Our train passed ___ a dark mountain tunnel before reaching the coast.',
        options: ['across', 'through', 'onto', 'among'],
        answerIndex: 1,
        explanationTh: 'เคลื่อนที่ "ทะลุผ่าน" พื้นที่ปิดล้อมรอบ (อุโมงค์/ป่า/ท่อ) ต้องใช้ through (ส่วน across ใช้ข้ามถนน/สะพาน)'
      },
      {
        type: 'cloze',
        promptTh: 'ระวังกับดัก Zero Preposition หน้าคำว่า next / this / last / every',
        sentence: 'Are you attending the annual design workshop ___?',
        options: ['on next Tuesday', 'at next Tuesday', 'next Tuesday', 'in next Tuesday'],
        answerIndex: 2,
        explanationTh: 'หน้าคำว่า next, last, this, every (next Tuesday, last week) ห้ามใส่ in / on / at เด็ดขาด'
      }
    ]
  },
  {
    id: 'g12',
    num: 12,
    phase: 'phase2',
    level: 'A1–A2',
    titleTh: 'Present Simple & Present Continuous (ปัจจุบัน 2 รูปหลัก)',
    titleEn: 'Present Simple vs Present Continuous',
    estMinutes: 5,
    summaryTh: 'แยกความต่างระหว่างเรื่องประจำ/ความจริง (Present Simple) กับสิ่งที่กำลังเกิดขึ้นตอนนี้ (Present Continuous) พร้อมรู้จัก State Verbs ที่ห้ามเติม -ing',
    formulas: [
      { label: '1. Present Simple (กิจวัตร/ความจริง)', parts: ['S + V1 (เติม -s/-es เมื่อ S=He/She/It)', '|', 'ปฏิเสธ/คำถาม: do / does + V1'] },
      { label: '2. Present Continuous (กำลังเกิดขึ้นตอนนี้)', parts: ['S + am / is / are + V-ing', '|', 'สัญญาณเวลา: now, right now, at the moment, Look!'] }
    ],
    tables: [
      {
        title: 'ตารางเปรียบเทียบ Present Simple vs Continuous + State Verbs ที่ห้ามเติม -ing',
        headers: ['หัวข้อ', 'Present Simple', 'Present Continuous'],
        rows: [
          ['ใช้เมื่อไร', 'นิสัย กิจวัตร ความจริง <b>ตารางเวลา (The bus leaves at 8)</b>', 'กำลังทำอยู่ขณะพูด <b>แผนใกล้ๆ (We are meeting at 2)</b>'],
          ['คำบอกเวลา', 'always, usually, often, every day, once a week', 'now, right now, currently, today, this week'],
          ['State Verbs 4 หมวด (ห้าม -ing)', '<b>คิด/รู้:</b> know, believe, understand · <b>ใจ:</b> like, love, want, need · <b>ครอบครอง:</b> own, belong · <b>ประสาทสัมผัส:</b> seem, sound', '❌ I am knowing you. → ✅ I <b>know</b> you. (ระวัง Does she <b>open</b>? ไม่เติม s หลัง does)'],
          ['ความหมายเปลี่ยนเมื่อ -ing', 'have = มี · think = เชื่อว่า · see = เห็น/เข้าใจ · taste = มีรสชาติ', 'having lunch (กิน) · thinking about (ครุ่นคิด) · seeing sb (นัดเจอ) · tasting (ชิม)']
        ]
      }
    ],
    examples: [
      { en: 'Water boils at 100 degrees Celsius.', th: 'น้ำเดือดที่อุณหภูมิ 100 องศาเซลเซียส', focus: 'ความจริงทางวิทยาศาสตร์ ใช้ Present Simple (boils)' },
      { en: 'Be quiet! The baby is sleeping upstairs.', th: 'เงียบหน่อย ลูกน้อยกำลังหลับอยู่ชั้นบน', focus: 'เหตุการณ์เกิดอยู่ตรงหน้าขณะพูด ใช้ is sleeping' },
      { en: 'The last train leaves at 11 p.m., and we are meeting Sam at 9.', th: 'รถไฟขบวนสุดท้ายออกตอน 5 ทุ่ม และเรานัดเจอแซมไว้ตอน 3 ทุ่ม', focus: 'ตารางเดินรถ = Present Simple (leaves) · นัดหมายส่วนตัว = Present Cont. (are meeting)' },
      { en: 'I understand your point, so let’s move forward.', th: 'ฉันเข้าใจประเด็นของคุณ งั้นเราเดินหน้าต่อเลย', focus: 'understand เป็น State Verb (ความเข้าใจ) ไม่ใช้ am understanding' }
    ],
    mistakes: [
      { wrong: 'She is knowing the answer already.', right: 'She knows the answer already.', whyTh: 'know เป็น State Verb บอกสภาพความรู้ ห้ามเติม -ing ต้องใช้ Present Simple (knows)' },
      { wrong: 'Every morning, I am drinking black coffee.', right: 'Every morning, I drink black coffee.', whyTh: 'Every morning บอกกิจวัตรซ้ำๆ ต้องใช้ Present Simple (drink) ไม่ใช่ Present Continuous' },
      { wrong: 'This notebook is belonging to Mark.', right: 'This notebook belongs to Mark.', whyTh: 'belong (เป็นของ) เป็น State Verb ใช้ได้เฉพาะรูป Simple → belongs' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'สังเกตคำบอกความถี่ (usually) เพื่อเลือก Tense กิจวัตร',
        sentence: 'My sister usually ___ the subway to work on weekdays.',
        options: ['take', 'takes', 'is taking', 'taking'],
        answerIndex: 1,
        explanationTh: 'usually บอกกิจวัตรประจำ + ประธาน My sister เอกพจน์ → Present Simple เติม -s (takes)'
      },
      {
        type: 'cloze',
        promptTh: 'สังเกตคำว่า Listen! เพื่อเลือกสิ่งที่กำลังเกิดขึ้นตอนนี้',
        sentence: 'Listen! Someone ___ the piano in the music room.',
        options: ['play', 'plays', 'is playing', 'are playing'],
        answerIndex: 2,
        explanationTh: 'Listen! เป็นสัญญาณบอกสิ่งที่กำลังเกิดขณะพูด + Someone เอกพจน์ → is playing'
      },
      {
        type: 'cloze',
        promptTh: 'ระวัง State Verb (want) ห้ามเติม -ing แม้มีคำว่า right now',
        sentence: 'I ___ a glass of cold water right now because it is humid.',
        options: ['am wanting', 'want', 'wants', 'am want'],
        answerIndex: 1,
        explanationTh: 'want เป็น State Verb (ความต้องการ) แม้มี right now ก็ไม่นิยมใช้รูป -ing ต้องใช้ Present Simple → want'
      },
      {
        type: 'cloze',
        promptTh: 'แยกความหมายของ think (เชื่อว่า vs กำลังครุ่นคิด)',
        sentence: 'Anna ___ about changing her career next year.',
        options: ['thinks', 'is thinking', 'are thinking', 'thinking'],
        answerIndex: 1,
        explanationTh: 'think about + เรื่องที่กำลังครุ่นคิดพิจารณากำลังเกิดขึ้นได้ → is thinking about'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Present Continuous บอกแผนที่นัดไว้แน่นอน',
        tokens: ['We', 'are', 'meeting', 'the', 'client', 'at', 'two', 'this', 'afternoon.'],
        explanationTh: 'ใช้ Present Continuous (are meeting) เล่าตารางนัดหมายที่กำหนดเวลาชัดเจนแล้วได้'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคคำถาม Present Simple ด้วย How often ให้ถูกต้อง',
        tokens: ['How', 'often', 'does', 'your', 'team', 'hold', 'a', 'review', 'meeting?'],
        explanationTh: 'คำถามกิจวัตรใช้ How often + does + ประธาน + V1 (hold)'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่อง State Verb เติม -ing แล้วเลือกตัวแก้',
        tokens: ['I', 'am believing', 'that', 'daily', 'practice', 'works', 'best.'],
        errorIndex: 1,
        corrections: ['believe', 'believes', 'believed'],
        correctOptionIndex: 0,
        explanationTh: 'believe (เชื่อ) เป็น State Verb ห้ามใช้ในรูป Continuous → I believe that...'
      },
      {
        type: 'error',
        promptTh: 'แตะกริยาที่ลืมเติม -ing หลัง is/are แล้วเลือกตัวแก้',
        tokens: ['Please', 'wait,', 'the', 'chef', 'is', 'prepare', 'your', 'pasta', 'now.'],
        errorIndex: 5,
        corrections: ['preparing', 'prepares', 'prepared'],
        correctOptionIndex: 0,
        explanationTh: 'หลัง Verb to Be (is) เพื่อบอกการกระทำที่กำลังดำเนินอยู่ ต้องใช้ V-ing → preparing'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนประโยค "The library opens at 8 a.m." เป็นประโยคคำถาม Yes/No',
        sentence: 'ข้อใดตั้งคำถามใน Present Simple ได้ถูกต้อง?',
        options: [
          'Is the library opens at 8 a.m.?',
          'Does the library opens at 8 a.m.?',
          'Does the library open at 8 a.m.?',
          'Do the library open at 8 a.m.?'
        ],
        answerIndex: 2,
        explanationTh: 'กริยาแท้คือ opens ประธานเอกพจน์ (the library) จึงถามด้วย Does + S + V1 (open ไม่มี -s)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกใช้ Present Simple กับตารางเวลาสาธารณะ (Timetable)',
        sentence: 'Hurry up! The last shuttle bus ___ at 10:15 p.m.',
        options: ['leave', 'leaves', 'is leave', 'leaving'],
        answerIndex: 1,
        explanationTh: 'ตารางเดินรถ/เที่ยวบิน/เวลาฉายหนัง ใช้ Present Simple ได้เลยแม้เป็นเวลาอนาคต → leaves'
      },
      {
        type: 'cloze',
        promptTh: 'แยกความหมายของ taste (มีรสชาติ = State vs กำลังชิม = Action)',
        sentence: 'The chef ___ the curry right now to check if it needs more salt.',
        options: ['taste', 'tastes', 'is tasting', 'are tasting'],
        answerIndex: 2,
        explanationTh: 'การ "กำลังชิม" เป็นการกระทำที่มองเห็นได้ตอนนี้จึงใช้ Continuous (is tasting) ต่างจาก "มีรสชาติ..." (tastes good)'
      },
      {
        type: 'cloze',
        promptTh: 'แยกกริยา "มี" (have = ครอบครอง vs have = กิน/อาบ) ในรูป -ing',
        sentence: 'Sorry, Ken cannot answer the phone; he ___ dinner with his family.',
        options: ['has', 'is having', 'have', 'having'],
        answerIndex: 1,
        explanationTh: 'have dinner (กำลังกินมื้อเย็น) เป็นกิจกรรมไม่ใช่การครอบครอง จึงใช้ Present Continuous → is having dinner'
      }
    ]
  },
  {
    id: 'g13',
    num: 13,
    phase: 'phase2',
    level: 'A2–B1',
    titleTh: 'Present Perfect & Present Perfect Continuous',
    titleEn: 'Present Perfect vs Perfect Continuous & Past Simple',
    estMinutes: 5,
    summaryTh: 'หัวใจของ Present Perfect คือ "เชื่อมโยงอดีตมาถึงปัจจุบัน" รู้ชัดว่าเมื่อไรใช้ have/has + V3, เมื่อไรใช้ been + V-ing และต่างจาก Past Simple ยังไง',
    formulas: [
      { label: '3. Present Perfect (ผล/ประสบการณ์ถึงตอนนี้)', parts: ['S + have / has + V3', '|', 'คีย์เวิร์ด: already, yet, just, ever, never, since, for'] },
      { label: '4. Present Perfect Continuous (เน้นความต่อเนื่องนาน)', parts: ['S + have / has + been + V-ing', '|', 'มักใช้กับ How long / all morning / for 2 hours'] }
    ],
    tables: [
      {
        title: 'เทียบ 3 รูปสำคัญ: Present Perfect vs Perfect Cont. vs Past Simple',
        headers: ['ประเด็นเปรียบเทียบ', 'Present Perfect (have+V3)', 'Present Perfect Cont. (have been+V-ing)', 'Past Simple (V2)'],
        rows: [
          ['จุดเน้นหลัก', 'เน้น <b>ผลลัพธ์/จำนวน</b> · ช่วงเวลายังไม่จบ · หรือ <b>State Verb</b> (know/own)', 'เน้น <b>การทำต่อเนื่องยาวนาน</b> จนถึงตอนนี้ (ห้ามใช้ State Verb!)', 'เหตุการณ์ <b>จบขาดในอดีต</b> ระบุเวลาชัดเจน'],
          ['ตัวอย่างประโยค', 'I <b>have read</b> 3 chapters <b>so far today</b>.', 'I <b>have been reading</b> for 2 hours.', 'I <b>read</b> that book last night.'],
          ['คำบอกเวลา & ตำแหน่ง', '<b>just / already / never</b> (กลาง) · <b>yet</b> (ท้ายถาม/ปฏิเสธ) · <b>so far / today / this week</b>', 'all day, for hours, How long...?', 'yesterday, ago, last week, in 2022'],
          ['<b>for / since</b> & <b>gone / been</b>', '<b>for</b> + ระยะเวลา · <b>since</b> + จุดเวลา หรือ <b>S+V2</b> · gone (ยังไม่กลับ) / been (เคยไป)', 'since 2020 / since I moved here', 'went = ไปเมื่อเวลาในอดีต']
        ]
      }
    ],
    examples: [
      { en: 'She has already sent the updated invoice.', th: 'เธอส่งใบแจ้งหนี้ที่อัปเดตแล้วไปเรียบร้อยแล้ว', focus: 'already วางหน้า V3 ในบอกเล่า (ผลลัพธ์คือส่งเสร็จแล้วตอนนี้)' },
      { en: 'We have been waiting for the bus since 7 a.m.', th: 'พวกเรายืนรอรถเมล์มาตั้งแต่ 7 โมงเช้าแล้ว', focus: 'เน้นการรอต่อเนื่องตั้งแต่ 7 โมงจนถึงวินาทีนี้ → have been waiting' },
      { en: 'Have you ever been to Kyoto?', th: 'คุณเคยไปเที่ยวเกียวโตไหม', focus: 'ถามประสบการณ์ชีวิต (ไปแล้วกลับมา) ใช้ been to ห้ามใช้ gone to' }
    ],
    mistakes: [
      { wrong: 'I have seen him yesterday.', right: 'I saw him yesterday.', whyTh: 'เมื่อมีเวลาในอดีตจบขาดชัดเจน (yesterday, last week, 2 days ago) ห้ามใช้ Present Perfect ต้องใช้ Past Simple (saw)' },
      { wrong: 'She lives here for five years.', right: 'She has lived here for five years.', whyTh: 'อยู่มาตั้งแต่ในอดีตต่อเนื่องมาจนถึงปัจจุบัน (for five years) ต้องใช้ Present Perfect (has lived)' },
      { wrong: 'He has not finished his lunch already.', right: 'He has not finished his lunch yet.', whyTh: 'ประโยคปฏิเสธและคำถามที่แปลว่า "หรือยัง / ยังไม่..." ใช้ yet ท้ายประโยค ไม่ใช้ already' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'สังเกตคำบอกเวลาในอดีตที่จบแล้ว (two days ago) vs Present Perfect',
        sentence: 'Our manager ___ the contract two days ago.',
        options: ['has signed', 'signed', 'have signed', 'signs'],
        answerIndex: 1,
        explanationTh: 'two days ago ระบุเวลาจบในอดีตชัดเจน ห้ามใช้ Present Perfect → ต้องใช้ Past Simple (signed)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Present Perfect สำหรับประโยคปฏิเสธคู่กับคำว่า yet',
        sentence: 'The package ___ arrived at the reception desk yet.',
        options: ["didn't", "hasn't", "haven't", "isn't"],
        answerIndex: 1,
        explanationTh: 'arrived เป็น V3 คู่กับ yet และประธาน package เอกพจน์ → ใช้ hasn’t (has not)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Present Perfect Continuous เพื่อเน้นการทำต่อเนื่องทั้งบ่าย',
        sentence: 'Look at your wet umbrella! It ___ all afternoon.',
        options: ['has been raining', 'rained', 'is rain', 'was raining'],
        answerIndex: 0,
        explanationTh: 'เห็นผลลัพธ์ตอนนี้ (ร่มเปียก) + ต่อเนื่องตลอดบ่าย (all afternoon) → has been raining'
      },
      {
        type: 'cloze',
        promptTh: 'แยกระหว่าง has gone to (ยังไม่กลับ) กับ has been to (กลับมาแล้ว/เคยไป)',
        sentence: 'Tom isn’t at his desk right now; he ___ to the bank.',
        options: ['has been', 'has gone', 'had gone', 'was being'],
        answerIndex: 1,
        explanationTh: 'ตอนนี้อยู่ที่ธนาคาร ยังไม่ได้กลับมา → has gone to the bank'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Present Perfect ที่วางตำแหน่ง just ถูกต้อง',
        tokens: ['They', 'have', 'just', 'finished', 'building', 'the', 'new', 'bridge.'],
        explanationTh: 'คำว่า just (เพิ่งจะ...) วางระหว่าง have/has กับ V3 (have just finished)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคคำถาม How long ใน Present Perfect Continuous',
        tokens: ['How', 'long', 'have', 'you', 'been', 'learning', 'English?'],
        explanationTh: 'How long + have + S + been + V-ing ใช้ถามความยาวนานจนถึงปัจจุบัน'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ Present Simple แทน Present Perfect กับ since แล้วเลือกตัวแก้',
        tokens: ['My', 'aunt', 'owns', 'this', 'flower', 'shop', 'since', '2015.'],
        errorIndex: 2,
        corrections: ['has owned', 'is owning', 'owned'],
        correctOptionIndex: 0,
        explanationTh: 'since 2015 บอกช่วงเวลาจากอดีตถึงปัจจุบัน และ own เป็น State Verb จึงใช้ has owned (ไม่เติม -ing)'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ already ในประโยคปฏิเสธ แล้วเลือกตัวแก้',
        tokens: ['She', 'has', 'not', 'replied', 'to', 'the', 'email', 'already.'],
        errorIndex: 7,
        corrections: ['yet.', 'since.', 'for.'],
        correctOptionIndex: 0,
        explanationTh: 'ในประโยคปฏิเสธและคำถามที่แปลว่า "ยังไม่ / หรือยัง" ใช้ yet ปิดท้ายประโยค ไม่ใช้ already'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนข้อมูล "I started working here in 2021, and I still work here." เป็น 1 ประโยค',
        sentence: 'ข้อใดสื่อความหมายเดียวกันด้วย Present Perfect ได้ถูกต้อง?',
        options: [
          'I worked here since 2021.',
          'I have worked here since 2021.',
          'I am working here since 2021.',
          'I have worked here for 2021.'
        ],
        answerIndex: 1,
        explanationTh: 'เริ่มในอดีต (2021) และยังทำต่อถึงปัจจุบัน ใช้ Present Perfect (have worked) + since + ปี 2021'
      },
      {
        type: 'cloze',
        promptTh: 'เน้นจำนวนผลลัพธ์ที่ทำสำเร็จแล้ว (3 cups) → ใช้ Simple หรือ Continuous?',
        sentence: 'I ___ three cups of green tea so far today.',
        options: ['have been drinking', 'have drunk', 'drank', 'am drinking'],
        answerIndex: 1,
        explanationTh: 'เมื่อระบุ "จำนวน/ผลสำเร็จที่ทำได้" (three cups) และ so far today (จนถึงตอนนี้) ต้องใช้ Present Perfect Simple → have drunk'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ since เชื่อมประโยคอดีต (since + S + V2) เข้ากับ Present Perfect',
        sentence: 'My cousin has lived in Osaka ever since she ___ college.',
        options: ['finishes', 'finished', 'has finished', 'was finishing'],
        answerIndex: 1,
        explanationTh: 'โครงสร้าง [Present Perfect] + since + [Past Simple (V2)] เพื่อบอกจุดเริ่มต้นในอดีต → since she finished'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ Present Perfect Simple (ไม่ใช้ -ing) กับ State Verb (know) แม้มี for ten years',
        sentence: 'We ___ each other for ten years and still meet every month.',
        options: ['have been knowing', 'have known', 'knew', 'are knowing'],
        answerIndex: 1,
        explanationTh: 'know เป็น State Verb (รู้จัก) ห้ามใช้ have been knowing ต้องใช้ Present Perfect Simple → have known'
      }
    ]
  },
  {
    id: 'g14',
    num: 14,
    phase: 'phase2',
    level: 'A1–B1',
    titleTh: 'Past Simple, Past Continuous & used to',
    titleEn: 'Past Simple, Past Continuous & Used To',
    estMinutes: 5,
    summaryTh: 'เล่าเหตุการณ์ในอดีตให้เป็นภาพชัด: สิ่งที่เกิดขึ้นจบไปแล้ว (Past Simple), สิ่งที่กำลังดำเนินอยู่ในอดีตแล้วมีเหตุการณ์มาแทรก (Past Continuous) และนิสัยในอดีต (used to)',
    formulas: [
      { label: '5–6. Past Simple vs Past Continuous', parts: ['เหตุการณ์แทรก/เรียงลำดับ 1→2→3: S + V2', '|', 'เหตุการณ์กำลังทำ (ยาว): S + was/were + V-ing (ห้าม State Verb)'] },
      { label: 'โครงสร้าง used to vs would vs be/get used to', parts: ['used to + V1 (นิสัยหรือสภาพในอดีต) · would + V1 (เฉพาะนิสัยซ้ำๆ ไม่ใช่สภาพ!)', '|', 'be / get used to + V-ing / N (เคยชิน / เริ่มชินกับ...)'] }
    ],
    tables: [
      {
        title: 'เปรียบเทียบ Past Simple · Past Continuous · used to vs would · be/get used to',
        headers: ['โครงสร้าง', 'ความหมาย', 'ตัวอย่างประโยค', 'ข้อควรระวัง'],
        rows: [
          ['<b>Past Simple</b> (S + V2)', 'จบในอดีต หรือเรียงลำดับ 1 → 2 → 3', 'I unlocked, entered, and <b>sat</b> down.', 'ปฏิเสธ/คำถามใช้ <b>did/didn’t + V1</b>'],
          ['<b>Past Continuous</b> (was/were + V-ing)', 'กำลังทำอยู่ ณ เวลาในอดีต', 'At 9 p.m., I <b>was studying</b>.', 'State Verbs (know/want) ห้ามใส่ was/were + -ing!'],
          ['<b>while / when</b> คู่กัน', 'กำลังทำยาว (while + Past Cont.) แล้วมีเรื่องแทรก (when + Past Simple)', 'While I <b>was cooking</b>, the bell <b>rang</b>.', 'เกิดพร้อมกันยาวๆ ทั้งคู่ใช้ Past Cont. คู่กันได้'],
          ['<b>used to</b> vs <b>would + V1</b>', 'นิสัยในอดีต (used to ใช้กับสภาพเช่น live/have ได้ด้วย)', 'I <b>used to live</b> here. / On Sundays we <b>would</b> bike.', '❌ ห้ามพูด would live / would be เหมือน used to'],
          ['<b>be / get used to + V-ing / N</b>', 'be = ชินแล้ว · get = กำลังปรับตัวให้ชิน', 'She <b>got used to driving</b> / <b>spicy food</b>.', 'คำว่า to เป็นบุพบท ต้องตามด้วย <b>V-ing หรือคำนาม</b>']
        ]
      }
    ],
    examples: [
      { en: 'While I was walking to work, it suddenly started to rain.', th: 'ระหว่างที่ฉันกำลังเดินไปทำงาน จู่ๆ ฝนก็เริ่มตกลงมา', focus: 'เดินอยู่ (ยาว: was walking) + ฝนตกแทรก (สั้น: started)' },
      { en: 'Did you use to play badminton after school?', th: 'สมัยเรียนคุณเคยเล่นแบดมินตันหลังเลิกเรียนไหม', focus: 'คำถาม/ปฏิเสธที่มี did เข้ามาช่วย ให้ตัด -d เหลือ use to' },
      { en: 'After living in Japan, she is used to taking trains daily.', th: 'หลังอยู่ญี่ปุ่น เธอก็ชินกับการนั่งรถไฟทุกวันแล้ว', focus: 'is used to (ชินกับ) ต้องตามด้วย V-ing (taking)' }
    ],
    mistakes: [
      { wrong: 'I didn’t used to like spicy food.', right: "I didn't use to like spicy food.", whyTh: 'เมื่อมี didn’t เข้ามาช่วยแล้ว กริยาหลัง didn’t ต้องกลับเป็นรูปเดิม use to (ไม่มี d)' },
      { wrong: 'He is used to wake up at 5 a.m.', right: 'He is used to waking up at 5 a.m.', whyTh: 'เมื่อมี Verb to Be (is/am/are) หน้า used to แปลว่า "เคยชิน" ต้องตามด้วย V-ing เสมอ' },
      { wrong: 'When I was arriving home, they ate dinner.', right: 'When I arrived home, they were eating dinner.', whyTh: 'การมาถึงบ้าน (arrived) เกิดสั้นๆ เพื่อแทรกจังหวะที่คนอื่นกำลังกินข้าวอยู่ (were eating)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือก Tense สำหรับเหตุการณ์ที่กำลังทำอยู่แล้วมีเหตุการณ์มาแทรก',
        sentence: 'I ___ a shower when the delivery driver knocked on the door.',
        options: ['took', 'was taking', 'am taking', 'had take'],
        answerIndex: 1,
        explanationTh: 'knocked เป็นเหตุการณ์สั้นที่แทรกเข้ามา ส่วนการอาบน้ำกำลังดำเนินอยู่ก่อนหน้า → was taking'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Tense ของเหตุการณ์สั้นที่แทรกระหว่างกำลังขับรถ',
        sentence: 'While Tom was driving through the tunnel, his phone ___ signal.',
        options: ['lost', 'was losing', 'loses', 'is losing'],
        answerIndex: 0,
        explanationTh: 'สัญญาณหลุดเป็นจังหวะแทรกสั้นๆ ในอดีต จึงใช้ Past Simple (V2 ของ lose คือ lost)'
      },
      {
        type: 'cloze',
        promptTh: 'แยกระหว่าง used to + V1 (เคยในอดีต) กับ be used to + V-ing (เคยชิน)',
        sentence: 'Now that he works night shifts, Mike is used to ___ during the day.',
        options: ['sleep', 'sleeping', 'slept', 'sleeps'],
        answerIndex: 1,
        explanationTh: 'มี is อยู่หน้า used to (is used to = ชินกับ...) จึงต้องตามด้วย V-ing → sleeping'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกรูปคำถาม/ปฏิเสธของ used to เมื่อมี didn’t อยู่ข้างหน้า',
        sentence: 'We didn’t ___ have high-speed internet in this village.',
        options: ['used to', 'use to', 'using to', 'uses to'],
        answerIndex: 1,
        explanationTh: 'หลัง didn’t ใช้รูป V1 เสมอ จึงต้องตัด -d ออกเป็น didn’t use to'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคเล่า 2 เหตุการณ์เกิดต่อเนื่องพร้อมกันยาวๆ ในอดีต',
        tokens: ['While', 'Emma', 'was', 'cooking,', 'her', 'brothers', 'were', 'setting', 'the', 'table.'],
        explanationTh: 'สองเหตุการณ์ที่กำลังทำควบคู่กันไปตลอดช่วงในอดีต ใช้ Past Continuous ทั้งสองฝั่ง (Emma was... / brothers were...)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคใช้ used to เล่านิสัยในวัยเด็ก',
        tokens: ['My', 'grandfather', 'used', 'to', 'tell', 'us', 'stories', 'every', 'evening.'],
        explanationTh: 'used to + V1 (tell) ใช้บอกนิสัยที่เคยทำเป็นประจำในอดีต'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่อง was vs were ใน Past Continuous แล้วเลือกตัวแก้',
        tokens: ['You', 'was', 'talking', 'so', 'loudly', 'during', 'the', 'movie.'],
        errorIndex: 1,
        corrections: ['were', 'are', 'did'],
        correctOptionIndex: 0,
        explanationTh: 'ประธาน You ในอดีตต้องใช้ were เสมอ (ห้ามใช้ was)'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดหลัง be used to แล้วเลือกตัวแก้',
        tokens: ['After', 'two', 'months,', 'she', 'got', 'used', 'to', 'drive', 'on', 'the', 'left.'],
        errorIndex: 7,
        corrections: ['driving', 'drove', 'driven'],
        correctOptionIndex: 0,
        explanationTh: 'get used to + V-ing (เริ่มชินกับการขับรถทางซ้าย) ต้องใช้ driving'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนประโยค "He smoked in the past, but he stopped." ให้ใช้ used to',
        sentence: 'ข้อใดใช้ used to แทนความหมาย "เคยทำในอดีตแต่ตอนนี้เลิกแล้ว" ได้ถูกต้อง?',
        options: [
          'He is used to smoking.',
          'He used to smoke.',
          'He use to smoke.',
          'He was used to smoke.'
        ],
        answerIndex: 1,
        explanationTh: 'บอกเล่าเรื่องที่เคยทำในอดีตและเลิกแล้วใช้ S + used to + V1 → He used to smoke.'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Past Simple เมื่อเล่าเหตุการณ์เรียงลำดับต่อเนื่อง 1 → 2 → 3 ในอดีต',
        sentence: 'She opened her laptop, checked her inbox, and ___ an urgent reply.',
        options: ['was writing', 'wrote', 'writes', 'has written'],
        answerIndex: 1,
        explanationTh: 'การกระทำที่เกิดต่อเนื่องตามลำดับในอดีต (opened → checked → wrote) ใช้ Past Simple (V2) ทั้งชุด'
      },
      {
        type: 'cloze',
        promptTh: 'แยก used to vs would เมื่อพูดถึง "สภาพ" ในอดีต (ไม่ใช่การกระทำซ้ำ)',
        sentence: 'Before the bridge was built, there ___ a small ferry dock right here.',
        options: ['would be', 'used to be', 'was used to be', 'use to be'],
        answerIndex: 1,
        explanationTh: 'การ "เคยมี/เคยอยู่/เคยเป็น" (be / live / have) เป็นสภาพในอดีต ต้องใช้ used to เท่านั้น (ห้ามใช้ would be)'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ get used to + คำนาม เพื่อบอกว่าเริ่มปรับตัวให้คุ้นเคยกับสิ่งใหม่',
        sentence: 'It took a few weeks, but I finally got used to ___ in Bangkok.',
        options: ['the humid weather', 'live humid', 'hotly weather', 'be humid'],
        answerIndex: 0,
        explanationTh: 'หลัง get used to ตามด้วย V-ing หรือคำนาม (the humid weather) ได้เลย'
      }
    ]
  },
  {
    id: 'g15',
    num: 15,
    phase: 'phase2',
    level: 'B1–B2',
    titleTh: 'Past Perfect & Past Perfect Continuous',
    titleEn: 'Past Perfect & Past Perfect Continuous',
    estMinutes: 4,
    summaryTh: 'เมื่อเล่าอดีต 2 เหตุการณ์ที่ไม่ได้เกิดพร้อมกัน ใช้ Past Perfect (had + V3) เพื่อชี้ชัดว่า "เหตุการณ์ไหนเกิดก่อนอีกเหตุการณ์ในอดีต"',
    formulas: [
      { label: '7. Past Perfect (เกิดก่อนในอดีต)', parts: ['เกิดก่อน: S + had + V3', '|', 'เกิดทีหลัง: S + V2 (Past Simple)'] },
      { label: '8. Past Perfect Continuous (ทำต่อเนื่องก่อนอีกเหตุการณ์)', parts: ['S + had + been + V-ing', '+', 'ก่อนเกิดอีกเรื่องในอดีต (had been waiting before he arrived)'] }
    ],
    tables: [
      {
        title: 'วิธีจับคู่ลำดับเวลากับคำเชื่อม Before / After / By the time',
        headers: ['โครงสร้างเชื่อมเหตุการณ์', 'เหตุการณ์เกิดก่อน (had + V3)', 'เหตุการณ์เกิดหลัง (V2)', 'ตัวอย่าง'],
        rows: [
          ['<b>When / By the time</b> + S + V2, S + had V3', 'อยู่ประโยคหลัก', 'อยู่หลัง When/By the time', 'By the time we <b>arrived</b>, the show <b>had started</b>.'],
          ['<b>After / Before</b> (ความยืดหยุ่น)', 'had V3 (หรือใช้ V2 ก็ได้เพราะ before/after ชัดแล้ว)', 'V2', 'After she <b>had locked</b> (หรือ <b>locked</b>) the door, she <b>left</b>.'],
          ['<b>Mental / Reporting Verbs (อดีต)</b>', 'realized / thought / told that + <b>S + had V3</b>', 'V2 (realized / told)', 'I <b>realized</b> that I <b>had left</b> my bag.'],
          ['<b>Past Perfect Cont.</b> (had been + V-ing)', 'ทำต่อเนื่องมานานก่อน (ห้าม State Verb / นับจำนวน)', 'S + V2', 'They <b>had been walking</b> for an hour (แต่ <b>had known</b> him = Simple)']
        ]
      }
    ],
    examples: [
      { en: 'When I reached the counter, the store had already closed.', th: 'ตอนที่ฉันไปถึงเคาน์เตอร์ ร้านก็ได้ปิดไปแล้วก่อนหน้านั้น', focus: 'ร้านปิด (เกิดก่อน = had already closed) → ฉันไปถึง (เกิดหลัง = reached)' },
      { en: 'She passed the exam easily because she had studied for months.', th: 'เธอสอบผ่านได้ง่ายเพราะเธออ่านหนังสือเตรียมตัวมาก่อนหน้านั้นหลายเดือน', focus: 'เหตุผลที่เกิดก่อน (had studied) → ผลในอดีต (passed)' },
      { en: 'His clothes were dusty because he had been painting the garage.', th: 'เสื้อผ้าของเขาเปื้อนฝุ่นเพราะเขาเพิ่งทาสีโรงรถต่อเนื่องมาก่อนหน้านั้น', focus: 'เน้นการกระทำต่อเนื่องในอดีตที่ส่งผลในอดีต → had been painting' }
    ],
    mistakes: [
      { wrong: 'By the time the ambulance came, the patient already recovered.', right: 'By the time the ambulance came, the patient had already recovered.', whyTh: 'เหตุการณ์ที่เกิดเสร็จสิ้นไปก่อนอีกเรื่องในอดีต ต้องใช้ Past Perfect (had + V3)' },
      { wrong: 'After she had finish dinner, she washed the dishes.', right: 'After she had finished dinner, she washed the dishes.', whyTh: 'หลัง had ต้องใช้กริยาช่อง 3 (V3 = finished) เสมอ ห้ามใช้ V1' },
      { wrong: 'I didn’t recognize him because he had been cut his hair.', right: 'I didn’t recognize him because he had cut his hair.', whyTh: 'ประโยค Active (เขาตัดผมเอง) ใช้ had + V3 (had cut) ไม่ต้องใส่ been (ถ้าใส่ been cut จะแปลว่าถูกตัดแบบ Passive)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือก Tense สำหรับเหตุการณ์ที่เกิดขึ้น "ก่อน" ที่ฉันจะไปถึงสนามบิน',
        sentence: 'By the time we reached Gate 5, the plane ___ off.',
        options: ['took', 'had already taken', 'has already taken', 'was taking'],
        answerIndex: 1,
        explanationTh: 'เครื่องบินขึ้นไปก่อนหน้า (เกิดก่อนอดีต) ส่วน we reached เป็นอดีตที่เกิดตามมา → had already taken off'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ Past Perfect Continuous เพื่ออธิบายสาเหตุของสภาพเหนื่อยล้าในอดีต',
        sentence: 'Liam felt exhausted yesterday evening because he ___ since 6 a.m.',
        options: ['had been working', 'has been working', 'is working', 'works'],
        answerIndex: 0,
        explanationTh: 'felt เป็นอดีต และการทำงานต่อเนื่องตั้งแต่ 6 โมงเกิดต่อเนื่องมาก่อนหน้านั้น → had been working'
      },
      {
        type: 'cloze',
        promptTh: 'จับคู่ After (หลังทำเสร็จก่อน → จึงทำอีกอย่างตามมา)',
        sentence: 'After Sarah ___ all the data, she backed up the folder.',
        options: ['had checked', 'was checking', 'checks', 'has checked'],
        answerIndex: 0,
        explanationTh: 'เช็กข้อมูลเสร็จก่อน (หลัง After ใช้ had + V3) แล้วค่อยแบ็คอัพ (backed up = V2)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำกริยาช่อง 3 (V3) ให้ถูกต้องหลัง had',
        sentence: 'We realized we had ___ the front door key inside the house.',
        options: ['forget', 'forgot', 'forgotten', 'forgetting'],
        answerIndex: 2,
        explanationTh: 'forget – forgot – forgotten ดังนั้นหลัง had ต้องใช้ V3 คือ forgotten'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Past Perfect ที่มี never แสดงประสบการณ์ก่อนจุดหนึ่งในอดีต',
        tokens: ['Before', 'that', 'trip,', 'I', 'had', 'never', 'seen', 'real', 'snow.'],
        explanationTh: 'เล่าประสบการณ์ "ก่อนหน้านั้นในอดีตยังไม่เคยเห็น..." ใช้ had never + V3 (seen)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Past Perfect Continuous แสดงระยะเวลาก่อนเหตุการณ์อดีต',
        tokens: ['They', 'had', 'been', 'waiting', 'for', 'an', 'hour', 'when', 'the', 'doctor', 'arrived.'],
        explanationTh: 'รอต่อเนื่อง 1 ชั่วโมงก่อนหมอมาถึง → had been waiting ... when arrived'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่อง Tense ในประโยค By the time แล้วเลือกตัวแก้',
        tokens: ['By', 'the', 'time', 'he', 'arrived,', 'the', 'concert', 'has', 'started.'],
        errorIndex: 7,
        corrections: ['had', 'was', 'is'],
        correctOptionIndex: 0,
        explanationTh: 'By the time + อดีตที่เกิดทีหลังใช้ V2 (arrived) ส่วนเหตุการณ์ที่เกิดก่อนหน้านั้นในอดีต (คอนเสิร์ตเริ่มไปแล้ว) ต้องใช้ Past Perfect (had started) ไม่ใช่ has started'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ Present Perfect ปนกับประโยคอดีต แล้วเลือกตัวแก้',
        tokens: ['She', 'told', 'me', 'that', 'she', 'has', 'lost', 'her', 'wallet.'],
        errorIndex: 5,
        corrections: ['had', 'have', 'was'],
        correctOptionIndex: 0,
        explanationTh: 'กริยาหลัก told เป็นอดีต เหตุการณ์ที่ทำกระเป๋าหายเกิดก่อนที่จะเล่า จึงต้องใช้ had lost'
      },
      {
        type: 'transform',
        promptTh: 'เรียงลำดับเหตุการณ์: 1) Dan ate lunch. 2) His friend called him. รวมเป็น 1 ประโยค',
        sentence: 'ข้อใดใช้ Past Perfect แสดงว่า Dan กินข้าวก่อนเพื่อนโทรมาได้ถูกต้อง?',
        options: [
          'When his friend called him, Dan had eaten lunch.',
          'When his friend had called him, Dan ate lunch.',
          'When his friend calls him, Dan had eaten lunch.',
          'After his friend called him, Dan had eaten lunch.'
        ],
        answerIndex: 0,
        explanationTh: 'กินข้าวก่อน = had eaten · เพื่อนโทรมาทีหลัง = called'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Past Simple vs Past Perfect เมื่อถามเหตุการณ์แรกที่เกิดขึ้นมาก่อน',
        sentence: 'Why didn’t Mark watch the film with us? — Because he ___ it twice before.',
        options: ['saw', 'has seen', 'had seen', 'was seeing'],
        answerIndex: 2,
        explanationTh: 'didn’t watch เป็นอดีต ส่วนการดูมาแล้ว 2 ครั้งก่อนหน้านั้น ต้องถอยไปเป็น Past Perfect → had seen'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ Past Perfect Simple (ไม่ใช้ -ing) กับ State Verb (know) ก่อนเหตุการณ์ในอดีต',
        sentence: 'When Emma got the promotion in 2022, she ___ her mentor for six years.',
        options: ['had been knowing', 'had known', 'knows', 'has known'],
        answerIndex: 1,
        explanationTh: 'know เป็น State Verb จึงไม่ใช้ had been knowing ต้องใช้ Past Perfect Simple → had known'
      },
      {
        type: 'cloze',
        promptTh: 'ระบุจำนวนผลลัพธ์ที่ทำเสร็จแล้วก่อนเหตุการณ์อดีต (3 emails)',
        sentence: 'Before the boss walked into the office, Leo ___ three urgent emails.',
        options: ['had been writing', 'had written', 'has written', 'was writing'],
        answerIndex: 1,
        explanationTh: 'เมื่อเน้นผลลัพธ์เสร็จสมบูรณ์ตามจำนวน (three emails) ก่อนอีกเรื่องในอดีต ต้องใช้ Past Perfect Simple → had written'
      }
    ]
  },
  {
    id: 'g16',
    num: 16,
    phase: 'phase2',
    level: 'A2–B2',
    titleTh: 'Future Tenses ครบทั้ง 4 รูปแบบ',
    titleEn: 'Future Simple, Continuous, Perfect & Perfect Continuous',
    estMinutes: 5,
    summaryTh: 'ปิดครบทั้ง 12 Tenses! แยกใช้ will (ตัดสินใจฉับพลัน/คาดเดา) กับ be going to (วางแผน/เห็นหลักฐานชัด), รวมถึง Future Continuous และ Future Perfect',
    formulas: [
      { label: '9. Future Simple & รูปอนาคตอื่นๆ', parts: ['S + will + V1 (ตัดสินใจทันที/สัญญา/คาดเดา)', '|', 'S + be going to + V1 (วางแผน/เห็นหลักฐานชัด)', '|', 'ข้อห้าม: หลัง when / as soon as / before / after / until / if ใช้ V1 (ห้าม will!)'] },
      { label: '10–12. Future ระดับกลาง-สูง & ตารางเวลา', parts: ['Future Cont.: will be + V-ing', '|', 'Future Perf.: will have + V3', '|', 'Perf. Cont.: will have been + V-ing'] }
    ],
    tables: [
      {
        title: 'เปรียบเทียบ Future Tenses ครบทั้ง 4 รูปแบบ + Time Clauses',
        headers: ['รูปแบบ', 'โครงสร้าง', 'ใช้เมื่อไร', 'ตัวอย่างประโยค'],
        rows: [
          ['<b>will + V1</b> / <b>Shall I/we?</b>', 'will (not) + V1', 'ตัดสินใจทันทีขณะพูด, คำสัญญา, ปฏิเสธ (won’t), เสนอ/ชวน (Shall)', 'I’<b>ll answer</b> it! / The door <b>won’t open</b>. / <b>Shall we</b> start?'],
          ['<b>be going to + V1</b>', 'am/is/are going to + V1', 'ตั้งใจวางแผนมาก่อน หรือเห็นหลักฐานชัดเจนตรงหน้า', 'Look at those dark clouds! It’<b>s going to rain</b>.'],
          ['<b>Present Cont. / Simple</b> (อนาคต)', 'am/is/are + V-ing · V1/V-s', 'นัดหมายส่วนตัวแน่นอน (Cont.) · ตารางรถ/เครื่องบิน (Simple)', 'I’<b>m meeting</b> Sam at 2. / The bus <b>leaves</b> at 8 a.m.'],
          ['<b>Future Continuous</b>', 'will be + V-ing', 'จะกำลังทำสิ่งนั้นอยู่ ณ จุดเวลาในอนาคต', 'At 9 a.m. tomorrow, I’<b>ll be flying</b> to Seoul.'],
          ['<b>Future Perfect / Perf. Cont.</b>', 'will have + V3 / been + V-ing', 'จะทำเสร็จสิ้นก่อนกำหนด (Perf.) · ทำต่อเนื่องครบเวลา (Perf. Cont.)', 'By Friday, we <b>will have finished</b>. / Next May, <b>will have been living</b>...'],
          ['<b>กฎ Time / If Clauses (ห้าม will!)</b>', 'when / as soon as / before / after / until + <b>V1</b>', 'ประโยครองบอกเวลา/เงื่อนไข ใช้ Present Simple แทนอนาคต', 'Call me <b>as soon as you arrive</b>. (❌ will arrive)']
        ]
      }
    ],
    examples: [
      { en: 'Hold on, I will carry that heavy bag for you.', th: 'เดี๋ยวครับ เดี๋ยวผมช่วยถือกระเป๋าใบหนักนั้นให้เอง', focus: 'ตัดสินใจอาสาช่วยเหลือทันทีตอนพูด → ใช้ will' },
      { en: 'We are going to renovate our kitchen next month.', th: 'เราวางแผนจะรีโนเวตห้องครัวกันเดือนหน้า', focus: 'วางแผนเตรียมการมาก่อนแล้ว → ใช้ are going to' },
      { en: 'By the end of this year, she will have saved 100,000 baht.', th: 'พอถึงสิ้นปีนี้ เธอจะเก็บเงินครบหนึ่งแสนบาทแล้ว', focus: 'By + เวลาอนาคต (เสร็จครบก่อนถึงจุดนั้น) → will have saved (Future Perfect)' }
    ],
    mistakes: [
      { wrong: 'When I will arrive in Tokyo, I will text you.', right: 'When I arrive in Tokyo, I will text you.', whyTh: 'หลังคำเชื่อมเวลาอย่าง when, if, before, after, until, as soon as ห้ามใส่ will! ให้ใช้ Present Simple (arrive) แทนอนาคต' },
      { wrong: 'Look at his hand—he will drop the plates!', right: 'Look at his hand—he is going to drop the plates!', whyTh: 'เมื่อมีหลักฐานชัดเจนอยู่ตรงหน้าว่าจะเกิดแน่ๆ ให้ใช้ be going to (is going to drop)' },
      { wrong: 'This time tomorrow, I will fly to Tokyo.', right: 'This time tomorrow, I will be flying to Tokyo.', whyTh: 'ระบุจุดเวลาที่กำลังดำเนินอยู่พอดีในอนาคต (This time tomorrow) ใช้ Future Continuous (will be + V-ing) เพื่อสื่อว่ากำลังอยู่บนเครื่องบินในเวลานั้น' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกใช้ will เมื่อเป็นการตัดสินใจทันทีขณะกำลังพูด',
        sentence: 'Oh, we are out of milk? Wait a minute, I ___ go buy some.',
        options: ["'m going to", 'will', 'will be', 'will have'],
        answerIndex: 1,
        explanationTh: 'เพิ่งรู้ตอนนี้ว่านมหมดแล้วตัดสินใจไปซื้อเดี๋ยวนั้น (spontaneous decision) → ใช้ will'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกใช้ be going to เมื่อเห็นหลักฐานชัดเจนตรงหน้า',
        sentence: 'Watch out! That glass is on the edge of the table—it ___ fall!',
        options: ['will be', 'is going to', 'is', 'falls'],
        answerIndex: 1,
        explanationTh: 'เห็นแก้วอยู่ขอบโต๊ะกำลังจะหล่นตรงหน้า (clear evidence) → ใช้ is going to'
      },
      {
        type: 'cloze',
        promptTh: 'สังเกตคำเชื่อมเวลา "as soon as" (กฎห้ามใช้ will หลังคำเชื่อมเวลา!)',
        sentence: 'I will call you as soon as I ___ at the hotel.',
        options: ['will arrive', 'arrive', 'am going to arrive', 'arrived'],
        answerIndex: 1,
        explanationTh: 'หลัง as soon as / when / if / before / until ห้ามใส่ will ต้องใช้ Present Simple → arrive'
      },
      {
        type: 'cloze',
        promptTh: 'สังเกต "By 2030" เพื่อเลือก Future Perfect (เสร็จสมบูรณ์ก่อนจุดนั้น)',
        sentence: 'By next Friday, the team ___ all ten lessons in this unit.',
        options: ['will complete', 'will have completed', 'are completing', 'completed'],
        answerIndex: 1,
        explanationTh: 'By + เวลาในอนาคต (ภายในวันศุกร์หน้า จะทำครบเสร็จสิ้นแล้ว) → ใช้ Future Perfect (will have completed)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Future Continuous (กำลังทำอยู่ ณ จุดเวลาอนาคต)',
        tokens: ['This', 'time', 'tomorrow,', 'we', 'will', 'be', 'relaxing', 'by', 'the', 'sea.'],
        explanationTh: 'This time tomorrow (เวลานี้พรุ่งนี้ จะกำลังพักผ่อนอยู่) → will be + V-ing'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Future Perfect Continuous (ครบรอบเวลาต่อเนื่องในอนาคต)',
        tokens: ['Next', 'May,', 'she', 'will', 'have', 'been', 'teaching', 'here', 'for', 'ten', 'years.'],
        explanationTh: 'นับระยะเวลาต่อเนื่อง (for ten years) ไปจนถึงจุดอนาคต (Next May) → will have been + V-ing'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ will หลังคำเชื่อมเวลา before แล้วเลือกตัวแก้',
        tokens: ['Please', 'turn', 'off', 'the', 'lights', 'before', 'you', 'will leave.'],
        errorIndex: 7,
        corrections: ['leave.', 'leaving.', 'left.'],
        correctOptionIndex: 0,
        explanationTh: 'หลัง before (Time Clause) ห้ามใช้ will → ใช้ Present Simple คือ before you leave'
      },
      {
        type: 'error',
        promptTh: 'แตะกริยาที่ผันผิดหลัง will have ใน Future Perfect แล้วเลือกตัวแก้',
        tokens: ['By', '6 p.m.,', 'Dad', 'will', 'have', 'cook', 'dinner', 'for', 'us.'],
        errorIndex: 5,
        corrections: ['cooked', 'cooking', 'cooks'],
        correctOptionIndex: 0,
        explanationTh: 'โครงสร้าง Future Perfect คือ will have + V3 → cooked'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยน "I plan to start a side project next month." ให้ใช้โครงสร้างแผนอนาคตที่ถูกต้อง',
        sentence: 'ข้อใดใช้ be going to แสดงความตั้งใจที่วางแผนมาก่อนแล้วได้ถูกต้อง?',
        options: [
          'I going to start a side project next month.',
          'I am going to start a side project next month.',
          'I will going to start a side project next month.',
          'I am going start a side project next month.'
        ],
        answerIndex: 1,
        explanationTh: 'ต้องมี Verb to Be + going + to + V1 ครบถ้วน → I am going to start...'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกประโยคคำถามที่ถูกต้องเมื่อถามถึงแผนในอนาคต',
        sentence: 'What are you ___ do during the Songkran holiday?',
        options: ['will', 'going to', 'go to', 'going'],
        answerIndex: 1,
        explanationTh: 'มี Verb to Be (are) นำหน้าแล้ว จึงเติม going to + do (V1)'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ Shall I / Shall we เพื่อเสนอตัวช่วยหรือชักชวนอย่างสุภาพ',
        sentence: 'It is getting dark in here. ___ I turn on the desk lamp for you?',
        options: ['Will', 'Shall', 'Going to', 'Do'],
        answerIndex: 1,
        explanationTh: 'คำถามเสนอตัวช่วยเหลือผู้ฟังกับประธาน I / we ให้ใช้ Shall I...? / Shall we...?'
      },
      {
        type: 'cloze',
        promptTh: 'แยกการใช้ Future Continuous vs Future Perfect จากตัวบ่งชี้เวลา',
        sentence: 'By the time you wake up tomorrow, the delivery truck ___ all the parcels.',
        options: ['will be delivering', 'will have delivered', 'delivers', 'is delivering'],
        answerIndex: 1,
        explanationTh: 'By the time + จุดอนาคต (ก่อนคุณตื่น รถจะส่งเสร็จสมบูรณ์ไปแล้ว) → Future Perfect (will have delivered)'
      }
    ]
  },
  {
    id: 'g17',
    num: 17,
    phase: 'phase2',
    level: 'A2–B2',
    titleTh: 'Modal Verbs & Modal Perfect (should have V3 / must have V3)',
    titleEn: 'Modal Verbs & Modal Perfect',
    estMinutes: 5,
    summaryTh: 'กริยาช่วยแสดงความสามารถ คำแนะนำ ความจำเป็น โอกาส รวมถึงการแยกคู่สับสน mustn’t vs don’t have to และการใช้ Modal ในอดีต (Modal Perfect)',
    formulas: [
      { label: 'กฎเหล็กของ Modal Verbs & must vs have to', parts: ['S + Modal + V1 เสมอ (had better not + V1)', '|', 'must = กฎจากใจตัวเอง · have to = กฎภายนอก (อดีตใช้ had to / อนาคต will have to)'] },
      { label: 'Modal Perfect (ย้อนมองอดีตครบชุด)', parts: ['should have V3 (น่าจะทำ) · could have V3 (ทำได้แต่ไม่ได้ทำ)', '|', 'must have V3 (ต้องใช่แน่) · can’t/couldn’t have V3 (เป็นไปไม่ได้) · might have V3 (อาจจะ)'] }
    ],
    tables: [
      {
        title: 'เปรียบเทียบ Modal Verbs · didn’t need to vs needn’t have V3 · และ Modal Perfect',
        headers: ['Modal / คู่เทียบ', 'ความหมาย & การใช้', 'ตัวอย่างชัดเจน'],
        rows: [
          ['<b>mustn’t</b> vs <b>don’t have to / needn’t</b>', '<b>mustn’t</b> = ห้ามทำเด็ดขาด! · <b>don’t have to / needn’t</b> = ไม่จำเป็นต้องทำ', 'You <b>mustn’t</b> park here. / You <b>don’t have to / needn’t</b> pay.'],
          ['<b>didn’t need to V1</b> vs <b>needn’t have V3</b>', '<b>didn’t need to</b> = ไม่ต้องทำ (เลยไม่ได้ทำ) · <b>needn’t have V3</b> = ทำไปแล้วทั้งที่ไม่จำเป็น', 'I <b>needn’t have bought</b> milk because we had plenty.'],
          ['<b>can / could / be able to</b>', '<b>was able to / managed to</b> = ทำสำเร็จ 1 ครั้ง (แต่ปฏิเสธใช้ couldn’t และ could see/hear ได้)', 'We <b>were able to</b> reach on time. / I <b>couldn’t</b> find it.'],
          ['<b>should / had better (not) + V1</b>', 'should = แนะนำทั่วไป · <b>had better (not) + V1</b> = เตือนว่าถ้าไม่ทำ/ทำจะเกิดผลเสีย', 'You’<b>d better not</b> stay out late.'],
          ['<b>should / could have V3</b>', 'should have = เสียดายน่าจะทำ · <b>could have V3</b> = มีโอกาสทำได้แต่ไม่ได้ทำ', 'I <b>should have brought</b> an umbrella. / You <b>could have won</b>!'],
          ['<b>must / might / can’t have V3</b>', 'คาดเดาอดีต: <b>must</b> (มั่นใจว่าใช่) · <b>may/might</b> (อาจจะ) · <b>can’t/couldn’t</b> (ไม่มีทางเป็นไปได้)', 'It <b>must have rained</b>. / She <b>can’t have said</b> that!']
        ]
      }
    ],
    examples: [
      { en: 'Visitors must not feed the animals at this sanctuary.', th: 'ผู้เข้าชมห้ามให้อาหารสัตว์ในเขตรักษาพันธุ์แห่งนี้โดยเด็ดขาด', focus: 'must not (mustn’t) = กฎข้อห้าม' },
      { en: 'You don’t have to print the ticket; just show the QR code.', th: 'คุณไม่ต้องพิมพ์ตั๋วก็ได้ แค่โชว์คิวอาร์โค้ดเลย', focus: 'don’t have to = ไม่จำเป็น (ไม่มีข้อห้าม)' },
      { en: 'She looks exhausted; she must have worked late again.', th: 'เธอดูเหนื่อยมาก เธอต้องทำงานดึกอีกแล้วแน่ๆ', focus: 'คาดเดาเรื่องในอดีตจากหลักฐานตรงหน้า → must have + V3' },
      { en: 'He can’t have forgotten our meeting; I reminded him ten minutes ago.', th: 'เขาไม่มีทางลืมการประชุมของเราแน่ๆ ฉันเพิ่งเตือนเขาเมื่อสิบนาทีก่อน', focus: 'มั่นใจว่าในอดีต "เป็นไปไม่ได้" → can’t have + V3' }
    ],
    mistakes: [
      { wrong: 'You don’t have to smoke in a hospital!', right: "You mustn't smoke in a hospital!", whyTh: 'don’t have to แปลว่า "ไม่ต้องทำก็ได้ (แล้วแต่)" แต่ในโรงพยาบาลคือ "ห้ามสูบเด็ดขาด" ต้องใช้ mustn’t' },
      { wrong: 'He should to apologize to her.', right: 'He should apologize to her.', whyTh: 'หลัง can, could, may, might, must, should ห้ามใส่ to (ยกเว้น ought to และ have to)' },
      { wrong: 'You must has left your keys on the sofa.', right: 'You must have left your keys on the sofa.', whyTh: 'Modal Perfect ใช้ had/has ไม่ได้! หลัง Modal ต้องใช้ have รูปฐานเท่านั้น (must have + V3)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'แยกความหมายสำคัญระหว่าง mustn’t (ห้ามทำ) กับ don’t have to (ไม่จำเป็น)',
        sentence: 'Entrance to the museum is free on Sundays, so you ___ pay anything.',
        options: ["mustn't", "don't have to", "can't", "shouldn't"],
        answerIndex: 1,
        explanationTh: 'เข้าฟรีในวันอาทิตย์ แปลว่า "ไม่จำเป็นต้องจ่าย" → don’t have to (ไม่ใช่ข้อห้าม mustn’t)'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ mustn’t เพื่อบอกข้อห้ามเด็ดขาดตามกฎหมาย/ความปลอดภัย',
        sentence: 'You ___ share your banking PIN code with anyone, even close friends.',
        options: ["don't have to", "mustn't", "needn't", "mightn't"],
        answerIndex: 1,
        explanationTh: 'รหัส PIN ห้ามบอกใครเด็ดขาดเพื่อความปลอดภัย → mustn’t'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ Modal Perfect แสดงความเสียดายในอดีต (รู้งี้ไม่น่ากินกาแฟตอนดึกเลย)',
        sentence: 'I feel wide awake at 2 a.m.! I ___ espresso after dinner.',
        options: ["shouldn't drink", "shouldn't have drunk", "mustn't drink", "had better not drink"],
        answerIndex: 1,
        explanationTh: 'เสียใจ/เสียดายในอดีตที่ทำลงไปแล้ว ("ไม่น่าดื่มเลย") → shouldn’t have + V3 (drunk)'
      },
      {
        type: 'cloze',
        promptTh: 'คาดเดาอดีตอย่างมั่นใจจากร่องรอยที่เห็นตรงหน้า',
        sentence: 'All the lights in their house are off, and the car is gone. They ___ out.',
        options: ['must have gone', 'should go', 'must go', 'would have went'],
        answerIndex: 0,
        explanationTh: 'บ้านมืดและรถไม่อยู่แล้ว → "ต้องออกไปข้างนอกแล้วแน่ๆ" → must have + V3 (gone)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคเตือนอย่างสุภาพด้วย had better (V1)',
        tokens: ['We', 'had', 'better', 'check', 'the', 'weather', 'before', 'hiking.'],
        explanationTh: 'โครงสร้างคำแนะนำแกมเตือน: S + had better + V1 (check)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคขออนุญาต/ขอความช่วยเหลือสุภาพด้วย Could',
        tokens: ['Could', 'you', 'possibly', 'send', 'me', 'the', 'slides', 'by', 'noon?'],
        explanationTh: 'Could you + (possibly) + V1 ใช้ขอร้องอย่างสุภาพในชีวิตจริงและการทำงาน'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใส่ to หลัง Modal Verb (must / should / can) แล้วเลือกตัวแก้',
        tokens: ['Everyone', 'must', 'to wear', 'a', 'seatbelt', 'in', 'the', 'car.'],
        errorIndex: 2,
        corrections: ['wear', 'wearing', 'worn'],
        correctOptionIndex: 0,
        explanationTh: 'หลัง must ต้องตามด้วย V1 โดยตรง ห้ามมี to (หรือเปลี่ยนเป็น has to wear)'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดใน Modal Perfect ที่ใช้ has แทน have แล้วเลือกตัวแก้',
        tokens: ['Noah', 'got', '100%;', 'he', 'must', 'has', 'practiced', 'a', 'lot!'],
        errorIndex: 5,
        corrections: ['have', 'had', 'having'],
        correctOptionIndex: 0,
        explanationTh: 'หลัง Modal Verb (must) ต้องใช้ have เสมอ ไม่ผันเป็น has แม้ประธานจะเป็น he'
      },
      {
        type: 'transform',
        promptTh: 'แปลงประโยค "I regret not booking the flight earlier." เป็น Modal Perfect',
        sentence: 'ข้อใดสื่อความหมาย "ฉันน่าจะจองตั๋วเครื่องบินให้เร็วกว่านี้" ได้ถูกต้อง?',
        options: [
          'I should book the flight earlier.',
          'I should have booked the flight earlier.',
          'I must have booked the flight earlier.',
          'I would book the flight earlier.'
        ],
        answerIndex: 1,
        explanationTh: 'เสียดายเรื่องในอดีตที่ไม่ได้ทำ (regret not booking) ใช้ should have + V3 → I should have booked...'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาช่วยที่หมายถึง "ทำสำเร็จในสถานการณ์เฉพาะเจาะจงครั้งหนึ่ง" ในอดีต',
        sentence: 'Even though the traffic was terrible, we ___ reach the airport on time.',
        options: ['could', 'were able to', 'can', 'might'],
        answerIndex: 1,
        explanationTh: 'เล่าเหตุการณ์ในอดีตที่ฟันฝ่าจนทำสำเร็จในครั้งนั้นจริงๆ (1 ครั้ง) ให้ใช้ was/were able to หรือ managed to (ไม่ใช้ could ในประโยคบอกเล่า)'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ Modal Perfect แสดงความมั่นใจว่า "เป็นไปไม่ได้แน่ๆ" ในอดีต (can’t have V3)',
        sentence: 'Ken doesn’t even know our address, so he ___ that package to your house.',
        options: ['must have sent', "can't have sent", 'should send', 'would sent'],
        answerIndex: 1,
        explanationTh: 'เคนไม่รู้จักที่อยู่เลย ดังนั้น "เป็นไปไม่ได้แน่ๆ ที่เขาจะส่งพัสดุนั้นมา" → can’t have + V3 (sent)'
      },
      {
        type: 'cloze',
        promptTh: 'แยกระหว่าง didn’t need to (ไม่ต้องทำเลยไม่ทำ) กับ needn’t have V3 (ทำไปแล้วทั้งที่ไม่จำเป็น)',
        sentence: 'We ___ all those extra snacks; nobody at the office was hungry after lunch.',
        options: ["didn't need bring", "needn't have brought", "mustn't have brought", "didn't have brought"],
        answerIndex: 1,
        explanationTh: 'เอาขนมมาไปแล้วแต่พบว่าไม่มีใครหิว ("ไม่จำเป็นต้องเอามาเลย" ในสิ่งที่ทำไปแล้ว) → needn’t have + V3 (brought)'
      }
    ]
  },
  {
    id: 'g18',
    num: 18,
    phase: 'phase2',
    level: 'B1–B2',
    titleTh: 'Gerund (V-ing), Infinitive (to V1) & Causative Verbs',
    titleEn: 'Gerund vs Infinitive & Causative Verbs',
    estMinutes: 5,
    summaryTh: 'แยกให้ออกว่ากริยาตัวไหนบังคับตามด้วย V-ing, ตัวไหนต้อง to V1, ตัวไหนตามได้ทั้งคู่แต่ความหมายเปลี่ยน รวมถึงโครงสร้างสั่งให้คนอื่นทำ (make / let / have / get)',
    formulas: [
      { label: 'บังคับตามด้วย V-ing vs to V1', parts: ['enjoy / avoid / finish / mind / keep / suggest / admit + V-ing', '|', 'decide / plan / hope / promise / afford / refuse + to V1', '|', 'suggest + (that) + S + (should) V1 (❌ suggest sb to V1)'] },
      { label: 'Causative (ให้/บังคับ/อนุญาต/ช่วย)', parts: ['make / let / have + คน + V1 (Passive: be made TO V1!)', '|', 'get / tell / advise + คน + to V1 · help + คน + (to) V1', '|', 'have/get + ของ + V3'] }
    ],
    tables: [
      {
        title: 'กริยาที่ความหมายเปลี่ยน (V-ing vs to V1) · Preposition + V-ing · และ Causative',
        headers: ['กริยา / โครงสร้าง', 'ตามด้วย V-ing (Gerund)', 'ตามด้วย to V1 (Infinitive)'],
        rows: [
          ['<b>stop / go on</b>', 'หยุดทำสิ่งนั้น (<b>stop smoking</b>) · ทำสิ่งเดิมต่อ (go on reading)', 'หยุดเพื่อจะทำ (stop <b>to rest</b>) · เปลี่ยนทำสิ่งใหม่ (go on <b>to explain</b>)'],
          ['<b>remember / forget / regret</b>', 'จำได้/ลืม/เสียใจกับสิ่งที่ <b>ทำไปแล้วในอดีต</b> (regret telling him)', 'จำ/ลืม/เสียใจที่ <b>ต้องทำ</b> (I regret <b>to inform</b> you that...)'],
          ['<b>try / mean</b>', 'ลองทำดู (try <b>restarting</b>) · หมายถึงต้องทำ (mean <b>waking</b> early)', 'พยายามอย่างหนัก (try <b>to pass</b>) · ตั้งใจจะ (didn’t mean <b>to hurt</b>)'],
          ['<b>หลัง Preposition & to=Prep</b>', 'ใช้ <b>V-ing เสมอ</b>: without <b>saying</b>, look forward to, be used to, object to', '❌ ห้ามตามด้วย to V1 หลัง of, in, at, for, without และกลุ่ม to=Prep'],
          ['<b>Causative & Passive make</b>', '—', '<b>make/let/have</b> + O + <b>V1</b> (Passive: be made <b>to V1</b>) · <b>get</b> + O + <b>to V1</b> · have my hair <b>cut</b>']
        ]
      }
    ],
    examples: [
      { en: 'I enjoy listening to English podcasts while commuting.', th: 'ฉันสนุกกับการฟังพอดแคสต์ภาษาอังกฤษระหว่างเดินทาง', focus: 'enjoy ตามด้วย V-ing (listening) เสมอ' },
      { en: 'Please remember to send the invoice before 4 p.m.', th: 'กรุณาอย่าลืมส่งใบแจ้งหนี้ก่อน 4 โมงเย็นนะ', focus: 'remember + to V1 = เตือนว่าต้องจำไว้ทำ (ยังไม่เกิดขึ้น)' },
      { en: 'The strict boss made everyone stay late, but let us take a break.', th: 'หัวหน้าจอมเข้มบังคับให้ทุกคนอยู่ดึก แต่ก็อนุญาตให้พวกเราพักเบรก', focus: 'make / let + คน + V1 (stay / take ไม่มี to!)' },
      { en: 'I need to get my laptop repaired tomorrow.', th: 'พรุ่งนี้ฉันต้องเอาแล็ปท็อปไปให้ช่างซ่อม', focus: 'get + สิ่งของ (laptop) + V3 (repaired) = ให้ช่างซ่อมให้ (ของถูกกระทำ)' }
    ],
    mistakes: [
      { wrong: 'Would you mind to open the window?', right: 'Would you mind opening the window?', whyTh: 'mind (รังเกียจ/รบกวน) ต้องตามด้วย V-ing เสมอ (mind opening) ห้ามใช้ to V1' },
      { wrong: 'My parents made me to clean my room.', right: 'My parents made me clean my room.', whyTh: 'make / let + กรรม (Active) ตามด้วย V1 เพียวๆ ห้ามใส่ to (clean)' },
      { wrong: 'I look forward to meet you soon.', right: 'I look forward to meeting you soon.', whyTh: 'to ในสำนวน look forward to เป็น Preposition จึงต้องตามด้วย V-ing (meeting) ไม่ใช่ V1' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือก Gerund (V-ing) หรือ Infinitive (to V1) หลังคำว่า avoid (หลีกเลี่ยง)',
        sentence: 'To stay healthy, try to avoid ___ too much sugary soda.',
        options: ['drink', 'to drink', 'drinking', 'drank'],
        answerIndex: 2,
        explanationTh: 'avoid (หลีกเลี่ยง) เป็นหนึ่งในกริยาที่บังคับตามด้วย Gerund (V-ing) เท่านั้น → drinking'
      },
      {
        type: 'cloze',
        promptTh: 'แยก stop + V-ing (เลิกทำ) กับ stop + to V1 (แวะหยุดเพื่อทำ)',
        sentence: 'On our road trip, we stopped ___ some coffee and stretch our legs.',
        options: ['buying', 'to buy', 'buy', 'bought'],
        answerIndex: 1,
        explanationTh: 'หยุดรถ "เพื่อ" ซื้อกาแฟ ไม่ใช่ "เลิกซื้อกาแฟ" → stopped to buy'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ V-ing หลัง Preposition (without / by / instead of)',
        sentence: 'He left the meeting room without ___ a single word.',
        options: ['say', 'to say', 'saying', 'said'],
        answerIndex: 2,
        explanationTh: 'without เป็น Preposition คำกริยาที่ตามหลัง Preposition ทุกตัวต้องเป็น V-ing เสมอ → saying'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกโครงสร้าง Causative เมื่อให้คนอื่นทำ (get + คน + to V1 vs have + คน + V1)',
        sentence: 'I finally got my little brother ___ me carry the groceries upstairs.',
        options: ['help', 'to help', 'helping', 'helped'],
        answerIndex: 1,
        explanationTh: 'โครงสร้าง "ให้ใครทำอะไร" ด้วย get ใช้ get + คน + to V1 (ต่างจาก have/make/let ที่ไม่ใส่ to) → to help'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกโครงสร้าง Causative Passive: have/get + สิ่งของ + V3',
        sentence: 'My car sounds strange; I should have the brakes ___ this weekend.',
        options: ['check', 'to check', 'checked', 'checking'],
        answerIndex: 2,
        explanationTh: 'the brakes เป็นสิ่งของ (ถูกตรวจเช็ก) จึงใช้ have + สิ่งของ + V3 → checked'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ suggest + V-ing (ห้าม suggest someone to do)',
        tokens: ['The', 'guide', 'suggested', 'taking', 'the', 'earlier', 'ferry', 'to', 'avoid', 'crowds.'],
        explanationTh: 'suggest ตามด้วย V-ing ได้เลย (suggested taking) ห้ามใช้ suggest + to V1'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดหลังคำว่า let (อนุญาต) แล้วเลือกตัวแก้',
        tokens: ['Please', 'let', 'me', 'to know', 'when', 'you', 'arrive', 'safely.'],
        errorIndex: 3,
        corrections: ['know', 'knowing', 'known'],
        correctOptionIndex: 0,
        explanationTh: 'let + กรรม (me) ต้องตามด้วย V1 โดยตรง ห้ามมี to → let me know'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ V1 ผิดหลังสำนวน "look forward to" แล้วเลือกตัวแก้',
        tokens: ['We', 'are', 'really', 'looking', 'forward', 'to', 'visit', 'your', 'new', 'studio.'],
        errorIndex: 6,
        corrections: ['visiting', 'visited', 'visits'],
        correctOptionIndex: 0,
        explanationTh: 'to ใน look forward to เป็นคำบุพบท จึงต้องตามด้วย V-ing → visiting'
      },
      {
        type: 'transform',
        promptTh: 'แยกความหมายของ remember: "I remember meeting him in 2022." แปลว่าอย่างไร?',
        sentence: 'ประโยค "I remember meeting him in 2022." มีความหมายตรงกับข้อใด?',
        options: [
          'ฉันต้องจำไว้ว่าจะไปพบเขาในปี 2022',
          'ฉันจำเหตุการณ์ที่ได้เคยพบเขาในปี 2022 ได้',
          'ฉันลืมไปแล้วว่าเคยพบเขาในปี 2022',
          'ฉันกำลังจะไปพบเขาในปี 2022'
        ],
        answerIndex: 1,
        explanationTh: 'remember + V-ing หมายถึง จำได้ว่า "เคยทำสิ่งนั้นไปแล้วในอดีต" (ต่างจาก remember to V1 ที่แปลว่าจำไว้ต้องทำ)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาที่ตามด้วย to V1 อย่างถูกต้อง (promise / decide / refuse)',
        sentence: 'Maria decided ___ a short break before studying grammar again.',
        options: ['take', 'taking', 'to take', 'took'],
        answerIndex: 2,
        explanationTh: 'decide (ตัดสินใจ) บังคับตามด้วย Infinitive (to + V1) → to take'
      },
      {
        type: 'cloze',
        promptTh: 'แยกความหมายของ regret + to V1 (เสียใจที่จะแจ้งให้ทราบ) vs regret + V-ing',
        sentence: 'We regret ___ you that this evening’s outdoor concert has been postponed.',
        options: ['informing', 'to inform', 'inform', 'informed'],
        answerIndex: 1,
        explanationTh: 'เมื่อต้องการบอกว่า "เสียใจที่ต้องแจ้ง/ประกาศเรื่องร้าย" ในจดหมายหรือประกาศทางการ ต้องใช้ regret + to inform / to say'
      },
      {
        type: 'cloze',
        promptTh: 'ระวัง Passive ของ make (be made + to V1 ต้องคืนรูป to!)',
        sentence: 'Because of the system error, all passengers were made ___ for an extra hour.',
        options: ['wait', 'to wait', 'waiting', 'waited'],
        answerIndex: 1,
        explanationTh: 'ในประโยค Active ใช้ make + คน + V1 (made us wait) แต่พอเป็น Passive (were made) ต้องใส่ to คืนกลับมา → were made to wait'
      }
    ]
  },
  {
    id: 'g19',
    num: 19,
    phase: 'phase2',
    level: 'A2–B2',
    titleTh: 'Transitive, Linking & Phrasal Verbs (จุดผิดคนไทย)',
    titleEn: 'Verb Patterns, Linking Verbs & Phrasal Verbs',
    estMinutes: 5,
    summaryTh: 'แก้จุดผิดอันดับ 1 ของคนไทยอย่าง discuss about ❌ และ explain me ❌ พร้อมเข้าใจ Linking Verbs (ตามด้วย Adj) และ Phrasal Verbs แยกกรรมได้/ไม่ได้',
    formulas: [
      { label: 'กริยาไม่ใส่ Prep vs ต้องใส่ Prep & say/tell', parts: ['discuss / mention / marry / enter / reach + กรรมตรง', '|', 'explain sth TO sb · listen TO · wait FOR · say TO sb vs tell sb'] },
      { label: 'Linking Verbs & Phrasal Verbs แยกได้/ไม่ได้', parts: ['look/feel/sound/taste + Adjective (feel well = สบายดี)', '|', 'แยกได้: turn IT on ✅ · แยกไม่ได้ (Inseparable): look AFTER it ✅'] }
    ],
    tables: [
      {
        title: 'ตารางรวม Verb + Preposition · say/tell/reach · และ Phrasal Verbs แยกได้ vs แยกไม่ได้',
        headers: ['หมวดหมู่', 'รูปแบบที่ถูก ✅', 'รูปแบบที่คนไทยมักใช้ผิด ❌'],
        rows: [
          ['<b>Transitive & reach/arrive</b>', 'discuss the plan · marry him · enter the room · <b>reach</b> Bangkok (arrive in/at)', '❌ discuss about · marry with · enter into (ห้อง) · reach to'],
          ['<b>ต้องมี Prep & say/tell</b>', 'explain sth <b>to</b> me · <b>say to</b> me · <b>tell</b> me · wait <b>for</b> · listen <b>to</b>', '❌ explain me · said me · told to me · wait me'],
          ['<b>Linking Verbs + Adj</b>', 'She looks <b>happy</b>. · Soup smells <b>good</b>. · I feel <b>bad</b> (หรือ feel <b>well</b> = สบายดี)', '❌ looks happily · smells nicely · feel badly'],
          ['<b>Separable Phrasal Verbs (แยกได้)</b>', 'turn on the TV = turn the TV on = <b>turn it on</b> ✅ (pick up / put on / take off)', '❌ turn on it (เมื่อกรรมเป็น it/them/him ห้ามวางท้าย!)'],
          ['<b>Inseparable & 3-Word (แยกไม่ได้!)</b>', '<b>look after</b> it · <b>look for</b> him · <b>run into</b> her · <b>put up with</b> it · <b>run out of</b> milk', '❌ look it after · look him for (ห้ามแทรก it/him ตรงกลาง!)'],
          ['<b>Adj + Preposition คู่ติด</b>', 'interested <b>in</b> · good <b>at</b> · afraid <b>of</b> · proud <b>of</b> · responsible <b>for</b> · depend <b>on</b>', '❌ interested on · good in · afraid with · depend of']
        ]
      }
    ],
    examples: [
      { en: 'Let’s discuss the budget during our afternoon call.', th: 'เรามาคุยเรื่องงบประมาณกันระหว่างโทรคุยช่วงบ่ายนะ', focus: 'discuss + กรรมตรงเลย (ห้ามใส่ about)' },
      { en: 'Could you explain this grammar rule to me again?', th: 'ช่วยอธิบายกฎไวยากรณ์ข้อนี้ให้ฉันฟังอีกรอบได้ไหม', focus: 'explain + [สิ่งที่อธิบาย] + to + [ผู้ฟัง] (ห้ามพูด explain me)' },
      { en: 'Your new idea sounds amazing! Can you turn the mic on?', th: 'ไอเดียใหม่ของคุณฟังดูเยี่ยมมาก ช่วยเปิดไมค์ให้หน่อยได้ไหม', focus: 'sound (Linking Verb) + Adj (amazing) · turn the mic on' },
      { en: 'My sister is really good at solving tricky puzzles.', th: 'น้องสาวของฉันเก่งเรื่องการแก้ปริศนายากๆ มาก', focus: 'good at + V-ing / คำนาม = เก่งในเรื่อง...' }
    ],
    mistakes: [
      { wrong: 'Please explain me how this app works.', right: 'Please explain to me how this app works.', whyTh: 'explain ห้ามตามด้วย "คน" โดยตรง ต้องมี to คั่นหน้าคน (explain to me หรือ explain it to me)' },
      { wrong: 'Turn off it before leaving the room.', right: 'Turn it off before leaving the room.', whyTh: 'เมื่อกรรมของ Separable Phrasal Verb เป็นคำสรรพนาม (it / them / me) ต้องวางแทรกไว้ตรงกลางเสมอ' },
      { wrong: 'You look wonderfully in that blue suit!', right: 'You look wonderful in that blue suit!', whyTh: 'look ในความหมาย "ดูเหมือนว่า/ดู..." เป็น Linking Verb ต้องตามด้วย Adjective (wonderful) ไม่ใช่ Adverb (-ly)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'ระวังกริยา Transitive (discuss) ที่คนไทยชอบใส่ about เกิน',
        sentence: 'Tomorrow we need to ___ the marketing timeline in detail.',
        options: ['discuss about', 'discuss on', 'discuss', 'discuss for'],
        answerIndex: 2,
        explanationTh: 'discuss แปลว่า "อภิปรายเกี่ยวกับ..." อยู่แล้ว จึงไม่ต้องใส่ about ตามหลัง ใช้ discuss + กรรมตรงได้เลย'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกใช้ explain ให้ถูกโครงสร้างเมื่อมีผู้รับฟัง (me)',
        sentence: 'The teacher ___ the difference between those two words to me.',
        options: ['explained', 'explained me', 'told to me', 'said me'],
        answerIndex: 0,
        explanationTh: 'explain + [เรื่องที่อธิบาย] + to me (ส่วน told ใช้ told me ไม่ใส่ to และ said ใช้ said to me)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำหลัง Linking Verb (smell / taste / sound / feel)',
        sentence: 'These freshly baked cinnamon rolls smell ___!',
        options: ['amazingly', 'amazing', 'amaze', 'amazement'],
        answerIndex: 1,
        explanationTh: 'smell เป็น Linking Verb (มีกลิ่น...) จึงต้องตามด้วย Adjective คือ amazing เพื่อขยายคำนาม rolls'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกตำแหน่ง Pronoun (it/them) ใน Phrasal Verb ที่แยกได้',
        sentence: 'That music is too loud! Please ___.',
        options: ['turn down it', 'turn it down', 'turn down them', 'it turn down'],
        answerIndex: 1,
        explanationTh: 'เมื่อใช้ Pronoun (it) แทนคำนาม (that music) กับ Phrasal Verb อย่าง turn down ต้องแทรก it ไว้ตรงกลาง → turn it down'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Preposition คู่ติดของคำว่า interested / responsible / good',
        sentence: 'Who is responsible ___ updating the weekly schedule?',
        options: ['of', 'with', 'for', 'to'],
        answerIndex: 2,
        explanationTh: 'คู่ติดที่ใช้ร่วมกันเสมอคือ be responsible for (รับผิดชอบต่อ...)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ arrive at และ wait for โดยไม่สับสน Preposition',
        tokens: ['When', 'we', 'arrived', 'at', 'the', 'cafe,', 'Lisa', 'was', 'waiting', 'for', 'us.'],
        explanationTh: 'arrive at (สถานที่เล็ก) และ wait for (รอใครสักคน)'
      },
      {
        type: 'error',
        promptTh: 'แตะบุพบทที่ใส่เกินหลังคำว่า marry แล้วเลือกตัวแก้',
        tokens: ['David', 'is', 'going', 'to', 'marry with', 'his', 'college', 'sweetheart.'],
        errorIndex: 4,
        corrections: ['marry', 'marry to', 'marry for'],
        correctOptionIndex: 0,
        explanationTh: 'marry someone ไม่ต้องใส่ with ตามหลัง (ยกเว้นโครงสร้าง get married to someone) → marry his college sweetheart'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ Adverb หลัง Linking Verb (feel) แล้วเลือกตัวแก้',
        tokens: ['I', 'feel', 'badly', 'about', 'forgetting', 'your', 'birthday', 'gift.'],
        errorIndex: 2,
        corrections: ['bad', 'sadly', 'worriedly'],
        correctOptionIndex: 0,
        explanationTh: 'feel (รู้สึก) เป็น Linking Verb จึงต้องใช้ Adjective → I feel bad (ส่วน feel badly หมายถึงประสาทสัมผัสที่มือไม่ดี)'
      },
      {
        type: 'transform',
        promptTh: 'แทนคำว่า "your winter coat" ด้วย "it" ในประโยค: "Don’t forget to put on your winter coat."',
        sentence: 'ข้อใดใช้คำสรรพนาม it กับ Phrasal Verb "put on" ได้ถูกต้อง?',
        options: [
          "Don't forget to put on it.",
          "Don't forget to put it on.",
          "Don't forget putting on it.",
          "Don't forget it put on."
        ],
        answerIndex: 1,
        explanationTh: 'put on เป็น Separable Phrasal Verb เมื่อใช้ it แทนคำนาม ต้องแทรกไว้ตรงกลาง → put it on'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Preposition คู่ติดของคำว่า depend (ขึ้นอยู่กับ)',
        sentence: 'Whether we go hiking or stay in depends ___ the weather forecast.',
        options: ['of', 'with', 'on', 'for'],
        answerIndex: 2,
        explanationTh: 'depend ต้องคู่กับ on (หรือ upon) เสมอ → depends on'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกตำแหน่ง Pronoun ใน Inseparable Phrasal Verb (look after / look for — แยกคำไม่ได้!)',
        sentence: 'My neighbor has a tiny puppy, and I am going to ___ this weekend.',
        options: ['look it after', 'look after it', 'look it for after', 'after look it'],
        answerIndex: 1,
        explanationTh: 'look after (ดูแล) เป็น Inseparable Phrasal Verb ที่ห้ามแยกคำ แม้กรรมเป็น Pronoun (it) ก็ต้องวางต่อท้าย → look after it'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก 3-Word Phrasal Verb ที่ถูกต้อง (run out of / put up with)',
        sentence: 'We need to stop at a gas station soon because we are about to ___ fuel.',
        options: ['run out of', 'run of out', 'run fuel out', 'put out of'],
        answerIndex: 0,
        explanationTh: 'สำนวน 3 คำ run out of + คำนาม แปลว่า "หมด/เกลี้ยง" (ห้ามสลับตำแหน่งคำ) → run out of fuel'
      }
    ]
  },
  {
    id: 'g20',
    num: 20,
    phase: 'phase3',
    level: 'A2–B1',
    titleTh: 'Adjectives (-ed / -ing), การวางตำแหน่ง Adverb & Order of Adj',
    titleEn: 'Adjectives (-ed/-ing), Adverb Placement & Order of Adjectives',
    estMinutes: 5,
    summaryTh: 'แยกความต่างระหว่าง bored กับ boring (-ed = รู้สึก vs -ing = น่า...), ตำแหน่งของ Adverb (M→P→T & always/never), กฎ too/enough และเรียงลำดับ Adjective (OSASCOMP)',
    formulas: [
      { label: 'Adj -ed vs -ing & too / enough', parts: ['คน/สัตว์รู้สึก = -ed · สิ่งที่ทำให้รู้สึก = -ing', '|', 'too + Adj/Adv · Adj/Adv + enough · enough + Noun (❌ too much + Adj)'] },
      { label: 'ตำแหน่ง Adverb & ลำดับ OSASCOMP', parts: ['หลัง Be / ช่วยตัวแรก · หน้ากริยาแท้ · ท้ายประโยค: Manner → Place → Time', '|', 'O(ความเห็น)→S(ขนาด)→A(อายุ)→S(ทรง)→C(สี)→O(ชาติ)→M(วัสดุ)→P(วัตถุประสงค์)+N'] }
    ],
    tables: [
      {
        title: 'เปรียบเทียบ Adj -ed/-ing · Adverb · คู่ -ly สับสน · too/enough · และ OSASCOMP',
        headers: ['หัวข้อ', 'หลักจำง่าย', 'ตัวอย่างชัดเจน'],
        rows: [
          ['<b>-ed</b> vs <b>-ing</b>', '<b>-ed</b> = รู้สึก (คน/สัตว์) · <b>-ing</b> = ลักษณะ "น่า..."', 'The lesson is <b>interesting</b>, so I am <b>interested</b>.'],
          ['<b>Adverb ความถี่ & ลำดับ M→P→T</b>', 'หลัง Be / ระหว่างช่วย-แท้ · ท้ายประโยค: <b>ลักษณะ → สถานที่ → เวลา</b>', 'He has <b>never</b> lied. / She sang <b>well at the hall last night</b>.'],
          ['<b>คู่ -ly ความหมายเปลี่ยน & ไม่เติม -ly</b>', 'hard ≠ hardly (แทบจะไม่) · <b>late</b> ≠ <b>lately</b> (ช่วงนี้) · near ≠ nearly · fast / well', 'arrived <b>late</b> (มาสาย) · busy <b>lately</b> (ยุ่งช่วงนี้) · speaks <b>well</b>'],
          ['<b>too vs enough</b>', '<b>too + Adj/Adv</b> (เกินไป) · <b>Adj/Adv + enough</b> (พอ) · <b>enough + Noun</b>', '<b>too hot</b> to drink · <b>light enough</b> · <b>enough time</b> (❌ too much light)'],
          ['<b>ลำดับ Adj (OSASCOMP ครบ 8 ขั้น)</b>', 'Opinion→Size→Age→<b>Shape</b>→Color→Origin→Material→<b>Purpose</b> + N', 'a lovely small old <b>round</b> white Japanese ceramic <b>tea</b> cup']
        ]
      }
    ],
    examples: [
      { en: 'After the long flight, everyone felt completely exhausted.', th: 'หลังเที่ยวบินอันยาวนาน ทุกคนต่างก็รู้สึกเหนื่อยล้าอย่างสิ้นเชิง', focus: 'คนรู้สึกเหนื่อย ใช้ exhausted (-ed)' },
      { en: 'That documentary about deep oceans was truly fascinating.', th: 'สารคดีเกี่ยวกับมหาสมุทรลึกเรื่องนั้นน่าทึ่งมากจริงๆ', focus: 'สารคดีเป็นสิ่งที่ "น่า..." ใช้ fascinating (-ing)' },
      { en: 'She bought a cute little round wooden jewelry box.', th: 'เธอซื้อกล่องเครื่องประดับไม้ทรงกลมใบเล็กน่ารักมาหนึ่งใบ', focus: 'OSASCOMP: cute (O) + little (S) + round (Shape) + wooden (M) + jewelry (Purpose) + box (N)' },
      { en: 'Maya always checks her spelling carefully at home before bed.', th: 'มายาตรวจคำสะกดอย่างระมัดระวังที่บ้านก่อนนอนเสมอ', focus: 'always หน้ากริยาแท้ · ลำดับท้ายประโยค: Manner (carefully) → Place (at home) → Time (before bed)' }
    ],
    mistakes: [
      { wrong: 'I am very boring in this long lecture.', right: 'I am very bored during this long lecture.', whyTh: 'ฉัน "รู้สึกเบื่อ" ต้องใช้ bored (-ed) หากใช้ I am boring จะแปลว่า "ฉันเป็นคนน่าเบื่อ!"' },
      { wrong: 'He comes always late to practice.', right: 'He always comes late to practice.', whyTh: 'Adverb of Frequency (always/often/never) ต้องวาง "หน้า" กริยาแท้ (always comes) และ "หลัง" Verb to Be (is always)' },
      { wrong: 'She drives very fastly on the highway.', right: 'She drives very fast on the highway.', whyTh: 'ไม่มีคำว่า fastly ในภาษาอังกฤษ คำว่า fast เป็นทั้ง Adj และ Adv' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือก -ed (ความรู้สึกของคน) หรือ -ing (ลักษณะของเรื่อง/สิ่งของ)',
        sentence: 'The tour guide told us such an ___ story about the ancient temple.',
        options: ['amazed', 'amazing', 'amaze', 'amazement'],
        answerIndex: 1,
        explanationTh: 'ขยายคำนาม story (เรื่องราว "น่าทึ่ง") จึงใช้ Adj ลงท้าย -ing → amazing'
      },
      {
        type: 'cloze',
        promptTh: 'บอกความรู้สึกของนักเรียนหลังเห็นข่าวดี',
        sentence: 'All the trainees were ___ when they heard about the field trip.',
        options: ['exciting', 'excited', 'excite', 'excitement'],
        answerIndex: 1,
        explanationTh: 'the trainees เป็นคนที่มีความ "รู้สึกตื่นเต้น" → ใช้ -ed คือ excited'
      },
      {
        type: 'cloze',
        promptTh: 'แยกความหมายของ hard (หนัก/ขยัน) กับ hardly (แทบจะไม่)',
        sentence: 'There was so much fog that I could ___ see the road ahead.',
        options: ['hard', 'hardly', 'hardness', 'harder'],
        answerIndex: 1,
        explanationTh: 'หมอกหนาจน "แทบจะมองไม่เห็น" ใช้ Adverb ความหมายปฏิเสธคือ hardly'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกตำแหน่ง Adverb ความถี่ (usually / never) ที่วางกับกริยาช่วยได้ถูกต้อง',
        sentence: 'My cousin ___ late for an important appointment.',
        options: ['never is', 'is never', 'does never', 'never does'],
        answerIndex: 1,
        explanationTh: 'เมื่อมี Verb to Be (is) ให้วาง Adverb of Frequency ไว้ "หลัง" Verb to Be → is never'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้วางลำดับ Adjective (ความเห็น → สี → วัสดุ + นาม) ได้ถูกต้อง',
        tokens: ['She', 'bought', 'a', 'lovely', 'white', 'cotton', 'shirt.'],
        explanationTh: 'ลำดับคือ ความเห็น (lovely) → สี (white) → วัสดุ (cotton) + คำนาม (shirt)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้วาง Adverb (already / always) ระหว่างกริยาช่วยกับกริยาแท้',
        tokens: ['They', 'have', 'always', 'supported', 'local', 'coffee', 'farmers.'],
        explanationTh: 'ใน Perfect Tense (have supported) วาง always ไว้หลังกริยาช่วยตัวแรก → have always supported'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่อง -ed vs -ing เมื่อบอกความรู้สึกของคน แล้วเลือกตัวแก้',
        tokens: ['I', 'was', 'really', 'surprising', 'by', 'how', 'quiet', 'the', 'city', 'was.'],
        errorIndex: 3,
        corrections: ['surprised', 'surprise', 'surprisingly'],
        correctOptionIndex: 0,
        explanationTh: 'ฉัน (I) เป็นผู้ "รู้สึกประหลาดใจ" จึงต้องใช้ -ed → surprised by'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่อง Adverb ที่ไม่มีรูป -ly แล้วเลือกตัวแก้',
        tokens: ['The', 'train', 'arrived', 'very', 'lately', 'because', 'of', 'heavy', 'snow.'],
        errorIndex: 4,
        corrections: ['late', 'later', 'latter'],
        correctOptionIndex: 0,
        explanationTh: 'lately แปลว่า "ช่วงนี้/เร็วๆ นี้" ไม่ได้แปลว่า "สาย" ถ้าจะบอกว่า "มาถึงสาย" ต้องใช้ late'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนความหมาย "This grammar puzzle confuses me." ให้ใช้ Adj อธิบายความรู้สึกของฉัน',
        sentence: 'ข้อใดใช้ confusing และ confused ได้ถูกต้องตรงความหมายทั้งคู่?',
        options: [
          'I am confusing because this puzzle is confused.',
          'I am confused because this puzzle is confusing.',
          'I am confuse because this puzzle is confusing.',
          'I am confused because this puzzle is confused.'
        ],
        answerIndex: 1,
        explanationTh: 'คนรู้สึกสับสน (I am confused) เพราะปริศนามันน่าสับสน (puzzle is confusing)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Adverb of Degree (too / enough) ให้วางถูกตำแหน่งกับ Adjective',
        sentence: 'Is this backpack ___ to carry on the airplane?',
        options: ['enough light', 'light enough', 'too much light', 'lightly enough'],
        answerIndex: 1,
        explanationTh: 'enough ต้องวางไว้ "หลัง" Adjective เสมอ → light enough (เบาพอ)'
      },
      {
        type: 'cloze',
        promptTh: 'แยกตำแหน่งของ enough เมื่อขยายคำนาม (enough + Noun) vs คำคุณศัพท์',
        sentence: 'We have ___ to finish checking all thirty grammar lessons today.',
        options: ['time enough', 'enough time', 'too much time for', 'much enough time'],
        answerIndex: 1,
        explanationTh: 'คำว่า enough เมื่อวางหน้าคำนาม (Noun) ต้องวางไว้ "ข้างหน้า" → enough time (ต่างจาก Adj ที่วางไว้ข้างหลัง เช่น fast enough)'
      },
      {
        type: 'order',
        promptTh: 'เรียงลำดับ Adverb ท้ายประโยคตามกฎ Manner (อย่างไร) → Place (ที่ไหน) → Time (เมื่อไร)',
        sentence: '',
        tokens: ['The', 'choir', 'performed', 'beautifully', 'at', 'the', 'hall', 'last', 'night.'],
        explanationTh: 'เมื่อมี Adverb หลายตัวท้ายประโยค ให้เรียง Manner (beautifully) → Place (at the hall) → Time (last night)'
      }
    ]
  },
  {
    id: 'g21',
    num: 21,
    phase: 'phase3',
    level: 'A2–B1',
    titleTh: 'Comparison (ขั้นเท่ากัน, ขั้นกว่า, ขั้นสูงสุด & คู่ขนาน)',
    titleEn: 'Comparatives & Superlatives',
    estMinutes: 5,
    summaryTh: 'เปรียบเทียบสิ่งของหรือผู้คนอย่างถูกต้อง ทั้งขั้นเท่ากัน (as...as), ขั้นกว่า (-er / more...than), ขั้นสูงสุด (-est / the most...) และโครงสร้างคู่ขนาน (ยิ่ง...ยิ่ง...)',
    formulas: [
      { label: 'ขั้นเท่ากัน & ขั้นกว่า', parts: ['(not) as/so + Adj/Adv + as · twice as ... as', '|', '1–2 พยางค์ (-y/-le/-er/-ow): -er than · ยาว: more/less ... than', '|', 'ตัวขยายขั้นกว่า: much / far / a lot / even / slightly'] },
      { label: 'ขั้นสูงสุด · ของ 2 สิ่ง · คู่ขนาน', parts: ['one of the + ขั้นสูงสุด + นามพหูพจน์ · ของ 2 สิ่งใช้ (the) + ขั้นกว่า', '|', 'ยิ่ง...ยิ่ง...: The + ขั้นกว่า ..., the + ขั้นกว่า ... · เปลี่ยนเรื่อยๆ: better and better'] }
    ],
    tables: [
      {
        title: 'สรุปรูปเปรียบเทียบ Adj / Adv · ข้อยกเว้น · และโครงสร้างพิเศษ',
        headers: ['คำปกติ', 'ขั้นกว่า (+ than)', 'ขั้นสูงสุด (the ...)', 'ข้อสังเกตสำคัญ'],
        rows: [
          ['tall / happy / simple (2 พยางค์ -y/-le/-er/-ow)', 'taller / happier / <b>simpler</b>', 'the tallest / the happiest / the simplest', 'ลงท้าย -y เปลี่ยนเป็น -ier/-iest · 2 พยางค์ทั่วไปใช้ more (more careful)'],
          ['careful / <b>carefully (Adv)</b>', 'more careful / <b>more carefully</b>', 'the most careful / the most carefully', 'Adv ลงท้าย -ly ใช้ more/the most · รูปสั้นใช้ faster/earlier · ห้าม ❌ more taller'],
          ['<b>good / well</b> & <b>bad / badly</b>', '<b>better</b> · <b>worse</b>', '<b>the best</b> · <b>the worst</b>', 'Adv well → better / the best · badly → worse / the worst'],
          ['<b>far / little / many & much</b>', 'farther (ระยะ) / <b>further</b> (เพิ่มเติม) · less · more', 'the farthest/furthest · the least · the most', '<b>one of the best movies</b> (+ พหูพจน์!) · <b>Of the two</b>..., (the) <b>easier</b>'],
          ['<b>ขั้นเท่ากัน & ตัวขยายความต่าง</b>', '<b>not nearly as ... as</b> / <b>twice as ... as</b>', 'much / far / a lot / <b>slightly</b> + ขั้นกว่า', '❌ ห้ามใช้ very หน้าขั้นกว่า (ใช้ much/far แทน)']
        ]
      }
    ],
    examples: [
      { en: 'Morning traffic today is much worse than yesterday.', th: 'การจราจรตอนเช้าวันนี้แย่กว่าเมื่อวานมาก', focus: 'เน้นขั้นกว่าให้แรงขึ้น ใช้ much / far / a lot + ขั้นกว่า (ห้ามใช้ very worse)' },
      { en: 'This is the most practical suitcase I have ever bought.', th: 'นี่เป็นกระเป๋าเดินทางที่ใช้งานได้จริงที่สุดที่ฉันเคยซื้อมา', focus: 'ขั้นสูงสุด + I have ever + V3 (เท่าที่เคย...มา)' },
      { en: 'The earlier we start, the sooner we finish.', th: 'ยิ่งเราเริ่มเร็วเท่าไร เราก็ยิ่งเสร็จเร็วเท่านั้น', focus: 'โครงสร้างคู่ขนาน: The + ขั้นกว่า..., the + ขั้นกว่า...' }
    ],
    mistakes: [
      { wrong: 'This tablet is more cheaper than that one.', right: 'This tablet is much cheaper than that one.', whyTh: 'ห้ามใช้ more ซ้อนกับ -er (double comparative) ให้เลือกอย่างใดอย่างหนึ่ง หรือใช้ much มาขยายแทน' },
      { wrong: 'She is the most tall student in class.', right: 'She is the tallest student in class.', whyTh: 'tall มี 1 พยางค์ ใช้ -est (the tallest) ไม่ใช้ the most tall' },
      { wrong: 'My phone is very better now.', right: 'My phone is much better now.', whyTh: 'หน้าขั้นกว่าห้ามใช้ very ต้องใช้ much / a lot / far' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกคำขยายหน้าขั้นกว่า (ห้ามใช้ very หน้าขั้นกว่า!)',
        sentence: 'After updating the software, my laptop runs ___ faster than before.',
        options: ['very', 'much', 'more', 'most'],
        answerIndex: 1,
        explanationTh: 'หน้าขั้นกว่า (faster) ใช้ much / far / a lot เพื่อแปลว่า "กว่ามาก" ห้ามใช้ very หรือ more ซ้อน'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกขั้นสูงสุดรูปพิเศษของคำว่า bad',
        sentence: 'That was ___ storm our coastal town had seen in twenty years.',
        options: ['the worse', 'worst', 'the worst', 'the most bad'],
        answerIndex: 2,
        explanationTh: 'ขั้นสูงสุดของ bad คือ worst และต้องมี the นำหน้า → the worst'
      },
      {
        type: 'cloze',
        promptTh: 'เติมโครงสร้างเปรียบเทียบคู่ขนาน (ยิ่งฝึก...ยิ่งมั่นใจ)',
        sentence: 'The more you speak English out loud, ___ confident you become.',
        options: ['more', 'the more', 'the most', 'much more'],
        answerIndex: 1,
        explanationTh: 'โครงสร้างคู่ขนานต้องขึ้นต้นด้วย The + ขั้นกว่า ทั้งสองฝั่ง → the more confident'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกโครงสร้างเปรียบเทียบขั้นเท่ากัน (as ... as)',
        sentence: 'A bicycle isn’t ___ as a scooter, but it is great exercise.',
        options: ['as faster', 'as fast', 'faster', 'so faster'],
        answerIndex: 1,
        explanationTh: 'ระหว่าง as ... as (หรือ not as/so ... as) ต้องใช้ Adj/Adv รูปปกติ ไม่เติม -er → as fast'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคขั้นสูงสุดคู่กับ "one of the..." (ระวังพหูพจน์ท้าย)',
        tokens: ['Chiang Mai', 'is', 'one', 'of', 'the', 'most', 'popular', 'cities', 'in', 'Thailand.'],
        explanationTh: 'one of the + ขั้นสูงสุด + คำนามพหูพจน์เสมอ (cities)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคคู่ขนาน: "ยิ่งสูตรเรียบง่าย อาหารจานนั้นยิ่งดี" (The + ขั้นกว่า..., the + ขั้นกว่า...)',
        tokens: ['The', 'simpler', 'the', 'recipe,', 'the', 'better', 'the', 'dish.'],
        explanationTh: 'ยิ่งสูตรเรียบง่าย ยิ่งอร่อย → The simpler..., the better...'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ขั้นกว่าซ้อนกัน (Double Comparative) แล้วเลือกตัวแก้',
        tokens: ['Buying', 'in', 'bulk', 'is', 'more', 'cheaper', 'than', 'buying', 'small', 'packs.'],
        errorIndex: 4,
        corrections: ['much', 'very', 'most'],
        correctOptionIndex: 0,
        explanationTh: 'cheaper เป็นขั้นกว่าอยู่แล้ว ห้ามมี more นำหน้า → ใช้ much cheaper แทน'
      },
      {
        type: 'error',
        promptTh: 'แตะคำนามที่ไม่เป็นพหูพจน์หลัง "one of the best..." แล้วเลือกตัวแก้',
        tokens: ['That', 'was', 'one', 'of', 'the', 'best', 'movie', 'I', 'have', 'seen.'],
        errorIndex: 6,
        corrections: ['movies', 'a movie', 'movie’s'],
        correctOptionIndex: 0,
        explanationTh: 'หลัง one of the + ขั้นสูงสุด คำนามต้องเป็นพหูพจน์เสมอ (หนึ่งในหนังที่ดีที่สุดหลายๆ เรื่อง) → movies'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนความหมาย "Hotel A costs 2,000 baht. Hotel B costs 1,200 baht." ด้วย less...than',
        sentence: 'ข้อใดสื่อความหมายถูกต้องตามราคาโรงแรมทั้งสองแห่ง?',
        options: [
          'Hotel A is less expensive than Hotel B.',
          'Hotel B is less expensive than Hotel A.',
          'Hotel B is more cheap than Hotel A.',
          'Hotel A is not as expensive than Hotel B.'
        ],
        answerIndex: 1,
        explanationTh: 'Hotel B (1,200) แพงน้อยกว่า Hotel A (2,000) → Hotel B is less expensive than Hotel A.'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำเปรียบเทียบระหว่างของ 2 สิ่ง (ใช้ขั้นกว่า) vs 3+ สิ่ง (ใช้ขั้นสูงสุด)',
        sentence: 'Of the two routes to Hua Hin, Highway 4 is ___ to drive.',
        options: ['the easiest', 'easier', 'more easy', 'easiest'],
        answerIndex: 1,
        explanationTh: 'เปรียบเทียบระหว่าง "2 สิ่ง" (two routes) ใช้ขั้นกว่า (easier) ไม่ใช้ขั้นสูงสุด'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกขั้นกว่าของ Adverb ที่ลงท้ายด้วย -ly (speaks clearly)',
        sentence: 'After practicing with native audio, Mia now speaks English ___ than last semester.',
        options: ['clearer', 'more clearly', 'most clearly', 'much clear'],
        answerIndex: 1,
        explanationTh: 'ขยายคำกริยา speaks ต้องใช้ Adverb (clearly) และรูปขั้นกว่าของ Adverb ลงท้าย -ly ใช้ more clearly'
      },
      {
        type: 'cloze',
        promptTh: 'แยกความต่างระหว่าง farther (ระยะทางจริง) กับ further (ข้อมูล/ระดับเพิ่มเติม)',
        sentence: 'Please click the link below if you need ___ information about our study plan.',
        options: ['farther', 'further', 'farthest', 'more far'],
        answerIndex: 1,
        explanationTh: 'ความหมายเชิงนามธรรมว่า "เพิ่มเติม" (further information / details) ต้องใช้ further ไม่ใช้ farther'
      }
    ]
  },
  {
    id: 'g22',
    num: 22,
    phase: 'phase3',
    level: 'A2–B1',
    titleTh: 'Dummy Subjects (It / There) & การคล้อยตาม (So / Neither)',
    titleEn: 'It / There & Agreement (So / Neither / Either)',
    estMinutes: 5,
    summaryTh: 'ใช้ It และ There เป็นประธานสมมติได้ถูกบริบท (It takes / It is + adj + to V1 vs There is/are) พร้อมวิธีพูดเห็นด้วยสั้นๆ ทั้งบอกเล่าและปฏิเสธ (So do I / Neither do I)',
    formulas: [
      { label: 'โครงสร้าง It เป็นประธานสมมติ', parts: ['It is + Adj + <b>for</b> sb + to V1 (ลักษณะงาน) · It is + Adj + <b>of</b> sb + to V1 (นิสัยคน)', '|', 'It takes + (คน) + เวลา + to V1'] },
      { label: 'การตอบเห็นด้วย (Be / Modal / do-does-did)', parts: ['บอกเล่า: So + กริยาช่วย + S · S + กริยาช่วย + <b>too</b> · Me too', '|', 'ปฏิเสธ: Neither + กริยาช่วยบอกเล่า + S · S + ปฏิเสธ + <b>either</b> · (ประโยค V1/V2 ดึง do/does/did!)'] }
    ],
    tables: [
      {
        title: 'เปรียบเทียบ It (for vs of) · There (ทุก Tense) · และการตอบเห็นด้วย (So / Neither / too / either)',
        headers: ['สถานการณ์', 'โครงสร้างที่ถูก', 'ตัวอย่างชัดเจน'],
        rows: [
          ['<b>It</b> (เวลา/อากาศ/<b>for</b> vs <b>of</b>)', '<b>for sb</b> (important/easy) · <b>of sb</b> (kind/nice/rude ของคน) · It takes...', 'It’s kind <b>of you</b> to help! / It’s easy <b>for me</b>.'],
          ['<b>There</b> (มีสิ่งนั้นอยู่ในหลาย Tense)', 'There <b>is / are / was / were / will be / has been / used to be</b>', '<b>There will be</b> a quiz. / <b>There used to be</b> a cafe here.'],
          ['<b>เห็นด้วย (+) บอกเล่า</b>', '<b>So</b> + aux + S · S + aux + <b>too</b> · <b>Me too</b> (ประโยค V1/V2 ใช้ do/does/did)', '"I <b>watched</b> it." → "<b>So did I.</b>" / "I <b>did too.</b>"'],
          ['<b>เห็นด้วย (−) ปฏิเสธ</b>', '<b>Neither</b> + aux(บอกเล่า) + S · S + ปฏิเสธ + <b>either</b> · <b>Me neither</b>', '"I <b>can’t</b> swim." → "<b>Neither can I.</b>" / "I <b>can’t either.</b>"']
        ]
      }
    ],
    examples: [
      { en: 'It is helpful to read example sentences out loud.', th: 'การอ่านประโยคตัวอย่างออกเสียงเป็นเรื่องที่มีประโยชน์', focus: 'It is + Adj + to V1 (ห้ามขึ้นต้นประโยคด้วย Is helpful to read...)' },
      { en: 'It takes me about twenty minutes to commute by BTS.', th: 'ฉันใช้เวลาเดินทางโดยรถไฟฟ้า BTS ประมาณยี่สิบนาที', focus: 'It takes + คน (me) + เวลา + to V1' },
      { en: '“I haven’t packed my suitcase yet.” — “Neither have I.”', th: '“ฉันยังไม่ได้จัดกระเป๋าเดินทางเลย” — “ฉันก็ยังเหมือนกัน”', focus: 'ประโยคแรกเป็นปฏิเสธ (haven’t) ใช้ Neither + have + I (ห้ามใช้ So!)' }
    ],
    mistakes: [
      { wrong: 'Is very difficult to learn English alone.', right: 'It is very difficult to learn English alone.', whyTh: 'ภาษาอังกฤษห้ามละประธาน! ประโยคบอกลักษณะต้องมีประธานสมมติ It นำหน้า → It is...' },
      { wrong: '“I didn’t see the email.” — “Me neither, too.” / “Neither didn’t I.”', right: '“I didn’t see the email.” — “Neither did I.” (หรือ Me neither.)', whyTh: 'Neither แปลว่า "ไม่เหมือนกัน" อยู่แล้ว จึงต้องตามด้วยกริยาช่วยรูปบอกเล่า (did ไม่ใช่ didn’t)' },
      { wrong: '“I am tired.” — “So do I.”', right: '“I am tired.” — “So am I.”', whyTh: 'ต้องเลือกกริยาช่วยใน So/Neither ให้ตรงกับประโยคแรก! ประโยคแรกใช้ Verb to Be (am) จึงต้องตอบ So am I' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกตอบเห็นด้วยกับประโยคบอกเล่าที่มี Verb to Be (is/am/are)',
        sentence: 'Mark: "I am really hungry after that workout." — Lisa: "___."',
        options: ['So do I', 'So am I', 'Neither am I', 'I am either'],
        answerIndex: 1,
        explanationTh: 'Mark ใช้ Verb to Be (am) ในประโยคบอกเล่า การตอบคล้อยตามจึงใช้ So + am + I'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกตอบเห็นด้วยกับประโยคปฏิเสธ (don’t like)',
        sentence: 'Ken: "I don’t like waiting in long lines." — Ben: "___."',
        options: ['So do I', "Neither don't I", 'Neither do I', 'I do either'],
        answerIndex: 2,
        explanationTh: 'ประโยคแรกเป็นปฏิเสธ (don’t) จึงตอบด้วย Neither + กริยาช่วยบอกเล่า (do) + I'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้โครงสร้าง It takes บอกเวลาที่ใช้ทำกิจกรรม',
        sentence: 'Usually, ___ takes about an hour to bake sourdough bread.',
        options: ['there', 'it', 'that', 'this'],
        answerIndex: 1,
        explanationTh: 'สำนวนบอกระยะเวลาที่ใช้ทำบางสิ่ง คือ It takes + เวลา + to V1'
      },
      {
        type: 'cloze',
        promptTh: 'แยกระหว่าง It is (สภาพ) กับ There is/are (มีสิ่งของอยู่)',
        sentence: 'Look at the notice board; ___ a schedule change for Friday.',
        options: ['it is', 'there is', 'has', 'they are'],
        answerIndex: 1,
        explanationTh: 'บอก "มีบางสิ่งอยู่" (a schedule change) ต้องใช้ There is'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ It is + Adj + for sb + to V1 ถูกต้อง',
        tokens: ['It', 'is', 'essential', 'for', 'beginners', 'to', 'practice', 'daily.'],
        explanationTh: 'It is + Adj (essential) + for (กลุ่มคน) + to V1 (to practice)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำเพื่อตอบเห็นด้วยแบบปฏิเสธด้วย "... either."',
        tokens: ['I', "wasn't", 'ready', 'for', 'the', 'pop', 'quiz', 'either.'],
        explanationTh: 'ปฏิเสธคู่กับ either ต้องใช้รูปปฏิเสธ (wasn’t) แล้วปิดท้ายด้วย either'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ละประธานสมมติ It หน้า Adjective แล้วเลือกตัวแก้',
        tokens: ['Is', 'very', 'polite', 'to', 'say', 'thank', 'you', 'to', 'staff.'],
        errorIndex: 0,
        corrections: ['It is', 'There is', 'Are'],
        correctOptionIndex: 0,
        explanationTh: 'ประโยคบอกเล่าภาษาอังกฤษต้องมีประธานเสมอ → It is very polite to...'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้กริยาช่วยปฏิเสธซ้อนหลัง Neither แล้วเลือกตัวแก้',
        tokens: ['She', "hasn't", 'been', 'to', 'Europe,', 'and', 'neither', "hasn't", 'her', 'sister.'],
        errorIndex: 7,
        corrections: ['has', 'is', 'does'],
        correctOptionIndex: 0,
        explanationTh: 'หลัง neither ต้องใช้กริยาช่วยรูปบอกเล่า (has ไม่ใช่ hasn’t) → neither has her sister'
      },
      {
        type: 'transform',
        promptTh: 'ตอบรับประโยค "Sara can play the violin well." โดยใช้รูปของ "too" สำหรับตัวฉัน (I)',
        sentence: 'ข้อใดตอบคล้อยตามได้ถูกต้องและตรงกริยาช่วย?',
        options: [
          'I do too.',
          'I can too.',
          'Neither can I.',
          'I can either.'
        ],
        answerIndex: 1,
        explanationTh: 'ประโยคเดิมใช้ can เป็นกริยาช่วย และเป็นบอกเล่า จึงตอบด้วย I can too. (หรือ So can I.)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกตอบคล้อยตามกับ Past Simple (watched)',
        sentence: 'Mia: "I watched the live broadcast last night." — Leo: "___."',
        options: ['So do I', 'So was I', 'So did I', 'Neither did I'],
        answerIndex: 2,
        explanationTh: 'watched เป็นอดีต (Past Simple ไม่มี Verb to Be) ดังนั้นกริยาช่วยที่ใช้คล้อยตามคือ did → So did I'
      },
      {
        type: 'cloze',
        promptTh: 'แยกการใช้ of sb (ชม/ตำหนินิสัยบุคคล) vs for sb (บอกความง่าย/จำเป็น) หลัง It is + Adj',
        sentence: 'It was so thoughtful ___ you to bring umbrellas for everyone!',
        options: ['for', 'of', 'to', 'with'],
        answerIndex: 1,
        explanationTh: 'thoughtful / kind / nice / rude บอกลักษณะนิสัยของผู้กระทำ จึงใช้ of you (ไม่ใช้ for you)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกตอบคล้อยตามประโยคปฏิเสธโดยใช้ either ท้ายประโยค',
        sentence: 'Noah: "I didn’t finish the reading homework." — Amy: "I ___."',
        options: ["didn't either", 'did either', "didn't too", 'neither did'],
        answerIndex: 0,
        explanationTh: 'เมื่อใช้ either ปิดท้ายประโยค กริยาช่วยข้างหน้าต้องคงรูปปฏิเสธให้ตรง Tense เดิม → I didn’t either.'
      }
    ]
  },
  {
    id: 'g23',
    num: 23,
    phase: 'phase3',
    level: 'A2–B1',
    titleTh: 'Indirect Questions, คำสั่ง (Imperatives) & คำอุทาน',
    titleEn: 'Indirect Questions, Imperatives & Exclamations',
    estMinutes: 4,
    summaryTh: 'ตั้งคำถามแบบสุภาพได้ถูกต้องโดยไม่สลับตำแหน่งกริยาผิด (Could you tell me where the exit IS?) รวมถึงประโยคคำสั่ง/ชักชวน (Let’s) และคำอุทาน What a...! / How...!',
    formulas: [
      { label: 'คำถามทางอ้อม (Indirect Questions)', parts: ['Could you tell me / Do you know / I wonder', '+', 'Wh-word (หรือ if/whether)', '+', 'S + V (ปฏิเสธคง didn’t/doesn’t ไว้หลัง S!)'] },
      { label: 'คำสั่ง / ชักชวน & คำอุทาน', parts: ['คำสั่ง: (Please) (Don’t) V1 / Do + V1 · ชวน: Let’s (not) + V1', '|', 'What (a/an) + Adj + N! (นามนับไม่ได้/พหูพจน์ไม่มี a!) vs How + Adj/Adv!'] }
    ],
    tables: [
      {
        title: 'เปรียบเทียบ Direct Question vs Indirect Question · คำสั่ง · และคำอุทาน',
        headers: ['แบบถามตรง / รูปแบบ', 'แบบถามสุภาพ (Indirect) / กฎที่ถูกต้อง', 'จุดที่ผิดบ่อย'],
        rows: [
          ['Where <b>is the bank</b>?', 'Could you tell me where <b>the bank is</b>? (ใช้ . หรือ ? ตามตัวเกริ่น)', '❌ ...where is the bank? (I wonder... ใช้จุด .)'],
          ['What time <b>does it leave</b>? / Why <b>didn’t she</b> come?', 'Do you know what time <b>it leaves</b>? / why <b>she didn’t</b> come?', 'ปฏิเสธคง <b>didn’t/doesn’t</b> หลัง S · ถ้า Wh เป็นประธานคงรูป (<b>who called</b>)'],
          ['<b>Did she receive</b> my file?', 'Do you know <b>if/whether she received</b> my file?', 'คำถาม Yes/No ต้องเชื่อมด้วย <b>if / whether</b>'],
          ['คำสั่ง & ชักชวน (<b>Imperatives</b>)', '<b>Please don’t</b> touch · <b>Let’s not</b> waste time · <b>Do</b> sit down! · V1 + <b>and/or</b>', 'Hurry up, <b>or</b> you’ll miss it. (❌ Let’s don’t แบบทางการ)'],
          ['คำอุทาน <b>What</b> vs <b>How</b>', '<b>What a</b> lovely day! / <b>What terrible weather!</b> / <b>How</b> lovely the day is!', 'มี Adj+Noun ต่อติดกันใช้ <b>What</b> (นับไม่ได้/พหูพจน์ห้ามใส่ a!)']
        ]
      }
    ],
    examples: [
      { en: 'Excuse me, could you tell me where the restroom is?', th: 'ขอโทษครับ ช่วยบอกได้ไหมว่าห้องน้ำอยู่ตรงไหน', focus: 'วาง the restroom (S) มาก่อน is (V)' },
      { en: 'Do you know why Maya didn’t join our morning call?', th: 'คุณทราบไหมว่าทำไมมายาถึงไม่ได้เข้าร่วมสายประชุมตอนเช้า', focus: 'Indirect คำถามปฏิเสธ: คง didn’t ไว้หลังประธาน (why Maya didn’t join)' },
      { en: 'What terrible weather! Let’s not drive in this storm.', th: 'อากาศแย่อะไรอย่างนี้! พวกเราอย่าขับรถฝ่าพายุนี้เลย', focus: 'weather นับไม่ได้ ใช้ What ไม่มี a! · Let’s not + V1' },
      { en: 'Please don’t forget your ID card, or the guard won’t let us in.', th: 'กรุณาอย่าลืมบัตรประจำตัวนะ ไม่อย่างนั้นรปภ.จะไม่ให้พวกเราเข้า', focus: 'Please don’t + V1 และ Imperative + or (มิฉะนั้น...)' }
    ],
    mistakes: [
      { wrong: 'Can you tell me where is the nearest ATM?', right: 'Can you tell me where the nearest ATM is?', whyTh: 'เมื่อมีคำเกริ่น Can you tell me / Do you know อยู่หน้าแล้ว ส่วนที่ตามหลัง where ต้องเรียงแบบบอกเล่า (ประธาน + กริยา)' },
      { wrong: 'I don’t know what does this word mean.', right: 'I don’t know what this word means.', whyTh: 'ประโยคบอกเล่าที่มี what คั่นกลาง ห้ามใส่ does เข้ามาสลับ ให้ตัด does ออกแล้วเติม -s ที่ mean → means' },
      { wrong: 'How a delicious cake! / What a nice weather!', right: 'What a delicious cake! / What nice weather!', whyTh: 'เมื่อมีกลุ่ม [Adj + คำนาม] ติดกันให้ใช้ What (ถ้าคำนามนับไม่ได้อย่าง weather/news หรือพหูพจน์ ห้ามใส่ a)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เรียงลำดับคำใน Indirect Question ให้ถูกต้อง',
        sentence: 'Excuse me, do you know where ___?',
        options: ['is the baggage claim', 'the baggage claim is', 'does the baggage claim', 'are the baggage claim'],
        answerIndex: 1,
        explanationTh: 'หลัง do you know where ต้องเรียงแบบประโยคบอกเล่า (ประธาน + กริยา) → the baggage claim is'
      },
      {
        type: 'cloze',
        promptTh: 'แปลงคำถาม Yes/No เป็น Indirect Question (ไม่มี Wh-word ให้ใช้คำใดเชื่อม?)',
        sentence: 'Could you check ___ the parcel has arrived yet?',
        options: ['what', 'whether', 'does', 'did'],
        answerIndex: 1,
        explanationTh: 'คำถาม Yes/No ("พัสดุมาถึงหรือยัง") เมื่อนำมาต่อท้ายประโยคสุภาพ ต้องเชื่อมด้วย if หรือ whether'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำอุทาน What vs How ให้ตรงโครงสร้าง',
        sentence: '___ kind of you to help me carry these heavy bags!',
        options: ['What', 'What a', 'How', 'So much'],
        answerIndex: 2,
        explanationTh: 'ข้างหลังมีแค่ Adjective (kind of you) ไม่มีคำนามหลักตามมา จึงต้องใช้ How + Adj!'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกรูปประโยคปฏิเสธของ Let’s (ชวนกัน "อย่า" ทำ)',
        sentence: 'It’s getting late. ___ waste any more time!',
        options: ["Don't let", "Let's not", "Not let's", "Let's don't"],
        answerIndex: 1,
        explanationTh: "รูปแบบทางการและถูกต้องของ Let's ปฏิเสธคือ Let's not + V1 (Let's not waste...)"
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็น Indirect Question ที่ตัด did ออกแล้วใช้ V2 แทน',
        tokens: ['Do', 'you', 'know', 'why', 'Noah', 'left', 'the', 'meeting', 'early?'],
        explanationTh: 'เมื่อย้ายมาอยู่หลัง Do you know why ต้องตัด did ออกแล้วผัน leave เป็น left'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคอุทานด้วย What + a/an + Adj + Noun',
        tokens: ['What', 'a', 'thoughtful', 'gift', 'that', 'was!'],
        explanationTh: 'gift เป็นคำนามเอกพจน์นับได้ จึงต้องใส่ a หน้า Adj + Noun → What a thoughtful gift'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดใน Indirect Question ที่สลับกริยาช่วยผิดตำแหน่ง แล้วเลือกตัวแก้',
        tokens: ['Could', 'you', 'tell', 'me', 'how', 'much', 'does this jacket cost?'],
        errorIndex: 6,
        corrections: ['this jacket costs?', 'cost this jacket?', 'is this jacket cost?'],
        correctOptionIndex: 0,
        explanationTh: 'ใน Indirect Question ต้องตัด does ออก แล้วเติม -s ที่กริยาหลัก → how much this jacket costs?'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดในประโยคคำสั่ง (Imperative) แล้วเลือกตัวแก้',
        tokens: ['Please', 'not to', 'forget', 'your', 'passport', 'at', 'the', 'counter.'],
        errorIndex: 1,
        corrections: ["don't", 'never to', 'no'],
        correctOptionIndex: 0,
        explanationTh: "ประโยคคำสั่ง/เตือนเชิงปฏิเสธใช้ Don't + V1 (Please don't forget... ไม่มี to)"
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนคำถามตรง "When does the pharmacy open?" เป็น Indirect Question หลัง "Could you tell me..."',
        sentence: 'ข้อใดเปลี่ยนเป็นคำถามสุภาพได้ถูกต้องสมบูรณ์?',
        options: [
          'Could you tell me when does the pharmacy open?',
          'Could you tell me when the pharmacy opens?',
          'Could you tell me when the pharmacy open?',
          'Could you tell me if the pharmacy opens?'
        ],
        answerIndex: 1,
        explanationTh: 'ตัด does ออก วางประธาน the pharmacy ก่อน แล้วเติม -s ที่ open → when the pharmacy opens?'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกประโยคคำสั่งเชิงสุภาพ (Imperative)',
        sentence: '___ a deep breath and read each question carefully.',
        options: ['Taking', 'To take', 'Take', 'Takes'],
        answerIndex: 2,
        explanationTh: 'ประโยคคำสั่ง/แนะนำ ขึ้นต้นด้วย V1 (Base Verb) เสมอ → Take a deep breath...'
      },
      {
        type: 'cloze',
        promptTh: 'ระวังคำอุทาน What กับคำนามนับไม่ได้ (weather / advice / news — ห้ามใส่ a!)',
        sentence: '___ terrible traffic! It took two hours just to cross the bridge.',
        options: ['What a', 'What', 'How a', 'How'],
        answerIndex: 1,
        explanationTh: 'traffic (การจราจร) เป็นคำนามนับไม่ได้ เมื่อตามหลัง What + Adj จึงห้ามใส่ a/an → What terrible traffic!'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกโครงสร้าง Indirect Question แบบปฏิเสธ (คง didn’t ไว้หลังประธาน)',
        sentence: 'Do you happen to know why ___ to the morning meeting?',
        options: ["didn't Leo come", "Leo didn't come", "came Leo not", "doesn't Leo came"],
        answerIndex: 1,
        explanationTh: 'Indirect Question ที่เป็นประโยคปฏิเสธ ต้องวางประธาน (Leo) ก่อนกริยาช่วยปฏิเสธ (didn’t come) → why Leo didn’t come'
      }
    ]
  },
  {
    id: 'g24',
    num: 24,
    phase: 'phase3',
    level: 'B1–B2',
    titleTh: 'Active & Passive Voice ครบทุก Tense สำคัญ',
    titleEn: 'Active & Passive Voice',
    estMinutes: 5,
    summaryTh: 'เข้าใจหัวใจของ Passive Voice เพียงสูตรเดียว: [be + V3] ผันตัว be ตาม Tense ต่างๆ เพื่อเน้นที่ "ผู้ถูกกระทำ" หรือเมื่อไม่รู้/ไม่จำเป็นต้องระบุผู้ทำ',
    formulas: [
      { label: 'หัวใจของ Passive Voice', parts: ['บอกเล่า: S + be (ผันตาม Tense) + V3 (+ by/with ...)', '|', 'คำถาม Passive: (Wh-) + be + S + V3?'] },
      { label: 'Modal, Continuous, Perfect & Causative', parts: ['Modal: must/can/will + be + V3', '|', 'Continuous: is/was + being + V3', '|', 'Perfect: has/had + been + V3', '|', 'Causative: have/get + O + V3'] }
    ],
    tables: [
      {
        title: 'ตารางเทียบ Active → Passive ครบทุก Tense ที่ใช้จริง (รวมคำถาม)',
        headers: ['Tense / รูปประโยค', 'Active (ทำเอง)', 'Passive (ถูกกระทำ = be + V3)'],
        rows: [
          ['Present Simple', 'She <b>cleans</b> the room.', 'The room <b>is cleaned</b> daily.'],
          ['Past Simple (บอกเล่า/คำถาม)', 'Someone <b>stole</b> it. / When <b>did they build</b> it?', 'It <b>was stolen</b>. / When <b>was</b> it <b>built</b>?'],
          ['Present / Past Continuous', 'They <b>are fixing</b> / <b>were fixing</b> it.', 'It <b>is being fixed</b> / <b>was being fixed</b>.'],
          ['Present / Past Perfect', 'We <b>have sent</b> / <b>had sent</b> the files.', 'The files <b>have been sent</b> / <b>had been sent</b>.'],
          ['Future (will / be going to) & Modals', 'They <b>will / are going to / must test</b> it.', 'It <b>will / is going to / must be tested</b>.']
        ]
      },
      {
        title: 'เจาะลึก Passive ขั้นสูง: by vs with · กริยา 2 กรรม · get + V3 · Causative · Impersonal',
        headers: ['หัวข้อสำคัญ', 'หลักการใช้', 'ตัวอย่างประโยค'],
        rows: [
          ['<b>by</b> vs <b>with</b>', '<b>by</b> + ผู้กระทำ (คน/สัตว์/องค์กร) · <b>with</b> + เครื่องมือ/วัสดุ/สสาร', 'Painted <b>by</b> Leo · Cut <b>with</b> a knife · Covered <b>with</b> snow'],
          ['<b>กริยา 2 กรรม</b> (give, send, show, teach)', 'สลับได้ 2 แบบ: เอา <b>คน</b> ขึ้น (นิยมกว่า) หรือ <b>สิ่งของ</b> + to/for', '<b>I was given</b> a prize. = A prize was given <b>to me</b>.'],
          ['<b>get + V3</b> (ภาษาพูด/เหตุฉับพลัน)', 'เน้นเหตุการณ์ไม่คาดคิด/อุบัติเหตุ ใช้แทน be ได้ในภาษาพูด', 'He <b>got hurt</b>. / My phone <b>got stolen</b>. / get stuck'],
          ['<b>Causative (have / get + O + V3)</b>', '"จ้าง/ให้คนอื่นทำให้" (เราไม่ได้ลงมือทำเอง)', 'I <b>had my hair cut</b>. / She <b>got her car washed</b>.'],
          ['<b>Impersonal Passive</b> (กล่าว/เชื่อกันว่า)', '<b>It is said / believed that...</b> หรือ <b>S + is said to + V1 / have V3</b>', '<b>It is said that</b> he is rich. = He <b>is said to be</b> rich.']
        ]
      }
    ],
    examples: [
      { en: 'English is spoken in over fifty countries worldwide.', th: 'ภาษาอังกฤษถูกใช้พูดในมากกว่าห้าสิบประเทศทั่วโลก', focus: 'ความจริงปัจจุบันแบบ Passive → is spoken (ไม่จำเป็นต้องใส่ by people)' },
      { en: 'The bridge is being repaired this week, so expect delays.', th: 'สะพานกำลังถูกซ่อมแซมในสัปดาห์นี้ ดังนั้นอาจมีการล่าช้า', focus: 'กำลังถูกทำอยู่ตอนนี้ → is being + V3 (repaired)' },
      { en: 'All packages will be delivered before 6 p.m.', th: 'พัสดุทั้งหมดจะถูกจัดส่งให้ถึงก่อนหกโมงเย็น', focus: 'Future Passive → will be + V3' }
    ],
    mistakes: [
      { wrong: 'This house built in 1995.', right: 'This house was built in 1995.', whyTh: 'บ้านสร้างตัวเองไม่ได้! ต้องเป็น Passive ในอดีต (was + V3) → was built' },
      { wrong: 'The problem was happened yesterday.', right: 'The problem happened yesterday.', whyTh: 'กริยาที่ไม่มีกรรม (Intransitive) เช่น happen, occur, arrive, die, sleep ห้ามทำเป็น Passive เด็ดขาด!' },
      { wrong: 'Your report will finish by tomorrow.', right: 'Your report will be finished by tomorrow.', whyTh: 'รายงานทำตัวเองให้เสร็จไม่ได้ ต้องใช้ Passive คือ will be finished' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'ดูประธาน (Every invitation card = สิ่งของทำเองไม่ได้) + อดีต (yesterday) เพื่อเลือก Passive',
        sentence: 'Every invitation card ___ by hand yesterday afternoon.',
        options: ['wrote', 'was written', 'were written', 'is written'],
        answerIndex: 1,
        explanationTh: 'Every + นามเอกพจน์ (card) ใช้กริยาเอกพจน์ ในอดีตแบบถูกกระทำ → was written'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Passive ใน Present Continuous (กำลังถูกทำความสะอาดตอนนี้)',
        sentence: 'Sorry, the lobby floor is wet because it ___ right now.',
        options: ['is cleaning', 'is being cleaned', 'cleans', 'was cleaned'],
        answerIndex: 1,
        explanationTh: 'พื้น (it) กำลังถูกทำความสะอาด right now → is being + V3 (cleaned)'
      },
      {
        type: 'cloze',
        promptTh: 'ระวังกริยาที่ไม่สามารถเป็น Passive ได้ (happen / occur / arrive)',
        sentence: 'The minor traffic accident ___ near the intersection at noon.',
        options: ['was happened', 'happened', 'is happened', 'has been happened'],
        answerIndex: 1,
        explanationTh: 'happen เป็น Intransitive Verb (เกิดขึ้นเอง ไม่มีกรรม) จึงห้ามทำเป็น Passive → ใช้ happened'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Modal Passive (ต้องถูกตรวจสอบ)',
        sentence: 'All electrical cables must ___ before opening the factory.',
        options: ['inspect', 'be inspected', 'been inspected', 'inspecting'],
        answerIndex: 1,
        explanationTh: 'สายไฟต้อง "ถูกตรวจสอบ" โครงสร้าง Modal Passive คือ must + be + V3 → be inspected'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Present Perfect Passive ที่ถูกต้อง',
        tokens: ['Two', 'new', 'metro', 'stations', 'have', 'been', 'opened', 'this', 'year.'],
        explanationTh: 'สถานีรถไฟใต้ดินถูกเปิดใช้แล้วในปีนี้ (พหูพจน์) → have been + V3 (opened)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคคำถาม Passive ในอดีต',
        tokens: ['When', 'was', 'this', 'ancient', 'temple', 'first', 'built?'],
        explanationTh: 'คำถาม Passive อดีต: Wh-word + was/were + ประธาน + V3'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ Active ทั้งที่ประธานถูกกระทำ (coffee) แล้วเลือกตัวแก้',
        tokens: ['High-quality', 'Arabica', 'coffee', 'produces', 'in', 'northern', 'Thailand.'],
        errorIndex: 3,
        corrections: ['is produced', 'are produced', 'producing'],
        correctOptionIndex: 0,
        explanationTh: 'กาแฟผลิตตัวเองไม่ได้ ต้องใช้รูป Passive (นามนับไม่ได้เอกพจน์) → is produced'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ Passive ผิดรูปกับกริยา occur แล้วเลือกตัวแก้',
        tokens: ['Nobody', 'knows', 'exactly', 'how', 'the', 'glitch', 'was occurred.'],
        errorIndex: 6,
        corrections: ['occurred.', 'is occurred.', 'had been occurred.'],
        correctOptionIndex: 0,
        explanationTh: 'occur (เกิดขึ้น) เป็นกริยาไม่ต้องการกรรม ใช้เป็น Passive ไม่ได้ ต้องตัด was ออกเหลือ occurred'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนประโยค Active: "A famous architect designed this library." เป็น Passive Voice',
        sentence: 'ข้อใดเปลี่ยนเป็น Passive Voice ในอดีตได้ถูกต้อง?',
        options: [
          'This library designed a famous architect.',
          'This library was design by a famous architect.',
          'This library was designed by a famous architect.',
          'This library is designed by a famous architect.'
        ],
        answerIndex: 2,
        explanationTh: 'กรรม (This library) ย้ายมาเป็นประธาน + designed เป็นอดีต → was designed by...'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Tense Passive คู่กับคำว่า since + ปีในอดีต',
        sentence: 'Since 2020, millions of online orders ___ from this warehouse.',
        options: ['have shipped', 'have been shipped', 'were shipped', 'are shipped'],
        answerIndex: 1,
        explanationTh: 'Since 2020 บอกช่วงเวลาจากอดีตถึงปัจจุบัน + orders ถูกจัดส่ง → Present Perfect Passive (have been shipped)'
      },
      {
        type: 'cloze',
        promptTh: 'Causative Passive (have / get + O + V3): จ้าง/ให้ช่างทำให้ ไม่ได้ซ่อมเอง',
        sentence: 'My laptop kept freezing, so I ___ at the service center yesterday.',
        options: ['repaired it', 'had repaired it', 'had it repaired', 'was it repaired'],
        answerIndex: 2,
        explanationTh: 'ให้ศูนย์บริการซ่อมให้ (ไม่ได้ซ่อมเอง) ใช้โครงสร้าง Causative: had + กรรม (it) + V3 (repaired) → had it repaired'
      },
      {
        type: 'cloze',
        promptTh: 'แยกใช้ by (+ ผู้ทำ) vs with (+ วัสดุ/สสาร/เครื่องมือ) ในประโยค Passive',
        sentence: 'During the winter storm, the mountain road was covered ___ thick snow.',
        options: ['by', 'with', 'from', 'of'],
        answerIndex: 1,
        explanationTh: 'be covered with / be filled with + วัสดุหรือสสาร (thick snow) ใช้ with (ส่วน by ใช้กับผู้กระทำที่เป็นคน/องค์กร)'
      }
    ]
  },
  {
    id: 'g25',
    num: 25,
    phase: 'phase3',
    level: 'B1–B2',
    titleTh: 'If-Clauses (Type 0, 1, 2, 3) & Mixed Conditionals',
    titleEn: 'Conditionals & Unless / In Case',
    estMinutes: 6,
    summaryTh: 'แยกเงื่อนไขครบทั้ง 4 แบบตั้งแต่ข้อเท็จจริงทั่วไป เรื่องเป็นไปได้ สมมติปัจจุบัน ไปจนถึงสมมติอดีตที่แก้ไขไม่ได้ รวมถึง Mixed Conditional, unless และ in case',
    formulas: [
      { label: '4 Types หลัก + Inversion (ละ If)', parts: ['T0: V1/V1 · T1: V1/will V1 · T2: V2(were)/would V1 · T3: had V3/would have V3', '|', 'Inversion (ทางการ): Should + S + V1 · Were + S + ... · Had + S + V3'] },
      { label: 'Mixed (3→2 & 2→3) & คำเชื่อมเงื่อนไข', parts: ['อดีต→ตอนนี้ (3→2): had V3 / would V1 (now) · ปัจจุบัน→อดีต (2→3): V2(were) / would have V3', '|', 'unless (= if...not) · in case (เผื่อว่า ≠ if) · provided (that) / as long as · but for + N'] }
    ],
    tables: [
      {
        title: 'ตารางสรุป If-Clauses ครบ 4 แบบ · Mixed Conditionals · และคำเชื่อมเงื่อนไข',
        headers: ['แบบ', 'If-Clause / คำเชื่อม', 'Main Clause (ผลลัพธ์)', 'ความหมาย & ตัวอย่าง'],
        rows: [
          ['<b>Type 0 & Type 1</b>', 'Present Simple (V1)', 'V1 (จริงเสมอ) · will/can/may + V1 (เป็นไปได้)', 'If ice <b>melts</b>... / If it <b>rains</b>, we <b>will stay</b> in.'],
          ['<b>Type 2</b> (If I were / was)', 'Past Simple (V2 / <b>were</b> ใช้ทางการ)', 'would / could + V1', 'If I <b>were</b> you, I <b>would apply</b>. (ภาษาพูดบางครั้งใช้ was)'],
          ['<b>Type 3</b>', 'Past Perfect (<b>had V3</b>)', 'would / could <b>have V3</b>', 'If I <b>had known</b>, I <b>would have called</b>.'],
          ['<b>Mixed (3→2 & 2→3)</b>', '3→2: <b>had V3</b> · 2→3: <b>were/V2</b>', '3→2: <b>would V1 (now)</b> · 2→3: <b>would have V3</b>', 'If I weren’t shy (ตอนนี้), I <b>would have asked</b> her yesterday.'],
          ['<b>in case vs if & อื่นๆ</b>', 'in case / provided / as long as / unless / but for + N', 'in case = ทำเตรียมไว้ก่อน (≠ if เผื่อถ้าเกิด)', '<b>Had I known</b>, ... / <b>But for</b> your help, I’d fail.']
        ]
      }
    ],
    examples: [
      { en: 'If I were you, I would double-check the contract.', th: 'ถ้าฉันเป็นคุณ ฉันจะตรวจสัญญานั้นซ้ำอีกรอบ', focus: 'Type 2 สมมติตอนนี้ นิยมใช้ were กับทุกประธาน (If I were...)' },
      { en: 'If she had left five minutes earlier, she wouldn’t have missed the bus.', th: 'ถ้าเธอออกจากบ้านเร็วกว่านั้น 5 นาที เธอก็คงไม่ตกรถเมล์ไปแล้ว', focus: 'Type 3 สมมติเรื่องอดีตที่ผ่านไปแล้ว' },
      { en: 'Bring an umbrella in case it rains this afternoon.', th: 'พกร่มไปด้วยนะเผื่อบ่ายนี้ฝนตก', focus: 'in case = เผื่อไว้ก่อน (ทำเตรียมไว้ตั้งแต่ตอนนี้ไม่ว่าจะตกหรือไม่)' }
    ],
    mistakes: [
      { wrong: 'If I will have time tomorrow, I will visit you.', right: 'If I have time tomorrow, I will visit you.', whyTh: 'หลัง If (ใน If-Clause) ห้ามใส่ will! ให้ใช้ Present Simple (have) แทนอนาคต' },
      { wrong: 'If I would have known, I would have helped.', right: 'If I had known, I would have helped.', whyTh: 'ฝั่ง If-Clause ห้ามใส่ would (ใน Type 2–3)! Type 3 ฝั่ง If ต้องเป็น had + V3 เท่านั้น' },
      { wrong: 'Unless you don’t hurry, we will miss the flight.', right: 'Unless you hurry, we will miss the flight.', whyTh: 'unless แปลว่า "ถ้าไม่..." (มี not ในตัวแล้ว) ห้ามใส่ don’t/doesn’t ซ้อน' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'Type 1: สังเกตฝั่งหลัง (will miss) แล้วเลือก Tense ฝั่ง If (ห้ามใส่ will)',
        sentence: 'If you ___ the house now, you will catch the express train.',
        options: ['will leave', 'leave', 'left', 'had left'],
        answerIndex: 1,
        explanationTh: 'เป็น Type 1 (เหตุการณ์เป็นไปได้ในอนาคต) หลัง If ห้ามใช้ will ต้องใช้ Present Simple → leave'
      },
      {
        type: 'cloze',
        promptTh: 'Type 2: สมมติสิ่งที่เป็นไปไม่ได้ในปัจจุบัน (If I were...)',
        sentence: 'If Tom ___ closer to the office, he wouldn’t spend two hours commuting.',
        options: ['lives', 'lived', 'had lived', 'would live'],
        answerIndex: 1,
        explanationTh: 'ฝั่งผลลัพธ์ใช้ wouldn’t spend (would + V1) ดังนั้นเป็น Type 2 ฝั่ง If จึงใช้ Past Simple (lived)'
      },
      {
        type: 'cloze',
        promptTh: 'Type 3: สมมติย้อนอดีตที่เกิดขึ้นไปแล้ว (สังเกต had V3)',
        sentence: 'If we had saved our work properly, we ___ those files.',
        options: ["wouldn't lose", "won't lose", "wouldn't have lost", "hadn't lost"],
        answerIndex: 2,
        explanationTh: 'ฝั่ง If เป็น had saved (Type 3) ฝั่งผลลัพธ์จึงต้องเป็น would/wouldn’t + have + V3 → wouldn’t have lost'
      },
      {
        type: 'cloze',
        promptTh: 'Mixed Conditional: เงื่อนไขในอดีต (had listened) ส่งผลถึง "ตอนนี้" (now)',
        sentence: 'If he had listened to the weather alert, he ___ stuck in traffic now.',
        options: ["wouldn't be", "wouldn't have been", "isn't", "won't be"],
        answerIndex: 0,
        explanationTh: 'สังเกตคำว่า now ท้ายประโยค! อดีตต่างไป (had listened) ส่งผลต่อปัจจุบัน (now) ใช้ wouldn’t be (V1)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกคำเชื่อม unless (ถ้าไม่...) vs in case (เผื่อว่า...)',
        sentence: 'Write down my phone number ___ your battery dies later.',
        options: ['unless', 'in case', 'even though', 'if not'],
        answerIndex: 1,
        explanationTh: 'จดเบอร์ไว้ล่วงหน้า "เผื่อว่า" แบตหมดภายหลัง → ใช้ in case'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Type 2 (If I were you...)',
        tokens: ['If', 'I', 'were', 'you,', 'I', 'would', 'accept', 'that', 'job', 'offer.'],
        explanationTh: 'Type 2 แนะนำตัวเลือก: If I were you, I would + V1'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ใช้ will ผิดในฝั่ง If-Clause แล้วเลือกตัวแก้',
        tokens: ['If', 'she', 'will call', 'tonight,', 'please', 'take', 'a', 'message.'],
        errorIndex: 2,
        corrections: ['calls', 'calling', 'called'],
        correctOptionIndex: 0,
        explanationTh: 'ในประโยคเงื่อนไข Type 1 ห้ามใส่ will หลัง If → ใช้ Present Simple (calls)'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดเรื่อง Double Negative หลัง unless แล้วเลือกตัวแก้',
        tokens: ['Unless', 'you', "don't practice", 'regularly,', 'you', 'will', 'forget', 'quickly.'],
        errorIndex: 2,
        corrections: ['practice', 'not practice', "didn't practice"],
        correctOptionIndex: 0,
        explanationTh: 'unless แปลว่า "ถ้าไม่..." จึงห้ามใส่ don’t ซ้อน → Unless you practice regularly...'
      },
      {
        type: 'transform',
        promptTh: 'แปลงความจริง "I don’t have a car, so I can’t drive to Hua Hin." เป็น Type 2 (สมมติขัดความจริง)',
        sentence: 'ข้อใดใช้ If-Clause Type 2 ได้ถูกต้องตรงความจริงที่ขัดแย้ง?',
        options: [
          'If I have a car, I can drive to Hua Hin.',
          'If I had a car, I could drive to Hua Hin.',
          'If I had had a car, I could have driven to Hua Hin.',
          'If I would have a car, I drove to Hua Hin.'
        ],
        answerIndex: 1,
        explanationTh: 'ขัดกับความจริงในปัจจุบัน (don’t have → had) ผลลัพธ์สมมติ (can → could + V1)'
      },
      {
        type: 'cloze',
        promptTh: 'Type 0 (ความจริงทางวิทยาศาสตร์/กฎธรรมชาติ)',
        sentence: 'If you mix blue and yellow paint, you ___ green.',
        options: ['got', 'get', 'would get', 'had got'],
        answerIndex: 1,
        explanationTh: 'กฎธรรมชาติที่เกิดขึ้นเสมอ (Type 0) ใช้ Present Simple ทั้งสองฝั่ง → get'
      },
      {
        type: 'cloze',
        promptTh: 'Conditional Inversion Type 3 (ละ If โดยนำ Had ขึ้นต้นประโยค)',
        sentence: '___ about the flight delay earlier, I would have stayed at home longer.',
        options: ['If I knew', 'Had I known', 'Did I know', 'Were I known'],
        answerIndex: 1,
        explanationTh: 'If-Clause Type 3 แบบละ If: นำ Had มาวางหน้าประธาน + V3 → Had I known (= If I had known)'
      },
      {
        type: 'cloze',
        promptTh: 'Mixed Conditional (Type 2 → Type 3): นิสัยปัจจุบันส่งผลเสียในอดีต',
        sentence: 'If Nida ___ so careless with her keys, she would not have locked herself out yesterday.',
        options: ["isn't", "weren't", "hadn't", "wouldn't be"],
        answerIndex: 1,
        explanationTh: 'Mixed (2 → 3): ความจริงที่เป็นนิสัยปัจจุบัน (If Nida weren’t careless = Type 2) ส่งผลเสียในอดีตเมื่อวาน (Type 3) → weren’t'
      }
    ]
  },
  {
    id: 'g26',
    num: 26,
    phase: 'phase3',
    level: 'B1–B2',
    titleTh: 'Unreal Past (Wish / If only / would rather / It’s time)',
    titleEn: 'Wish, If Only & Unreal Past',
    estMinutes: 5,
    summaryTh: 'กลุ่มโครงสร้างที่ใช้ "กริยารูปอดีต (V2 / were / had V3)" แต่ไม่ได้หมายถึงอดีตเสมอไป — ใช้เพื่อบอกความปรารถนา เสียดาย หรืออยากให้บางสิ่งเปลี่ยน',
    formulas: [
      { label: 'Wish / If only & as if / as though', parts: ['ตอนนี้: S + V2 / were', '|', 'อดีต: S + had + V3', '|', 'บ่นพฤติกรรม: would + V1', '|', 'ราวกับว่า: as if / as though + V2 / had V3'] },
      { label: 'would rather · had better · It’s time', parts: ['เลือก 2 อย่าง: would rather + V1 + than + V1 (ห้ามใส่ to!)', '|', '2 ประธาน: would rather + S + V2 / had V3', '|', 'เตือน: had better + (not) + V1', '|', "It's (high) time + S + V2"] }
    ],
    tables: [
      {
        title: 'สรุปครบ Unreal Past: Wish · If only · would rather · had better · It’s time · as if',
        headers: ['โครงสร้าง', 'เวลา / สถานการณ์ที่ใช้', 'รูปกริยาที่ต้องใช้', 'ตัวอย่างประโยค'],
        rows: [
          ['<b>wish / If only + S + V2 / were</b>', 'ปรารถนาเรื่อง <b>ปัจจุบัน</b> (ไม่เป็นจริงตอนนี้)', 'Past Simple (were ใช้ได้ทุกประธาน)', 'I wish I <b>spoke</b> Japanese fluently.'],
          ['<b>wish / If only + S + had V3</b>', 'เสียดายเรื่อง <b>ในอดีต</b> ที่แก้ไขไม่ได้', 'Past Perfect (had + V3)', 'I wish I <b>had studied</b> harder in college.'],
          ['<b>wish + S + would V1</b>', 'บ่น/อยากให้คนอื่นเปลี่ยน <b>พฤติกรรม</b> (ไม่ใช่สภาพคงที่/ประธานเดียวกัน)', 'would + V1 (ห้าม I wish I would)', 'I wish it <b>would stop</b> raining! (❌ wish he would be tall)'],
          ['<b>would rather + V1 + than + V1</b>', '1 ประธาน: เลือกทำ A มากกว่า B ด้วยตัวเอง (ความชอบ)', '<b>V1 เพียวๆ</b> ทั้งหน้าและหลัง than (ห้ามใส่ to!)', 'I’d rather <b>stay</b> home <b>than go</b> out.'],
          ['<b>would rather + S + V2 / had V3</b>', '2 ประธาน: อยากให้ <b>อีกคน</b> ทำตอนนี้ (V2) หรือเสียดายอดีต (had V3)', 'ตอนนี้ = V2 · อดีต = had V3 (1 ประธานอดีต: have V3)', 'I’d rather you <b>came</b> today. / <b>hadn’t told</b> him yesterday.'],
          ['<b>had better + (not) + V1</b>', 'คำเตือนเร่งด่วน: "ควรทำตอนนี้ ไม่งั้นเกิดผลเสีย"', '<b>V1 เพียวๆ</b> (ปฏิเสธใช้ had better not + V1)', 'You<b>’d better hurry</b> or we’ll miss the bus.'],
          ['<b>It’s (high) time + S + V2</b>', 'ถึงเวลาแล้วที่ควรจะทำ (ในปัจจุบัน)', 'V2 เสมอ (หรือ to V1 เมื่อไม่มี S)', 'It’s high time we <b>left</b> for the airport.'],
          ['<b>as if / as though + V2 / had V3</b>', 'เปรียบเทียบ "ราวกับว่า..." (เรื่องที่ไม่เป็นความจริง)', 'ไม่จริงตอนนี้ = V2 / were · อดีต = had V3', 'He acts <b>as if he knew</b> everything.']
        ]
      }
    ],
    examples: [
      { en: 'I wish I had more free time to read every evening.', th: 'ฉันหวังว่าฉันจะมีเวลาว่างอ่านหนังสือทุกเย็นมากกว่านี้ (แต่ตอนนี้ไม่มี)', focus: 'ปรารถนาสิ่งที่เป็นจริงไม่ได้ในปัจจุบัน → wish + had (V2)' },
      { en: 'If only I hadn’t spent so much money on snacks last month!', th: 'รู้งี้เดือนที่แล้วฉันไม่น่าใช้เงินซื้อขนมเยอะขนาดนั้นเลย!', focus: 'If only แสดงความเสียดายในอดีต (last month) → hadn’t spent' },
      { en: 'It’s time we upgraded our slow office computers.', th: 'ถึงเวลาแล้วที่เราควรอัปเกรดคอมพิวเตอร์ที่ช้าในออฟฟิศเสียที', focus: 'It’s time + ประธาน (we) + กริยา V2 (upgraded)' }
    ],
    mistakes: [
      { wrong: 'I wish I can speak English like a native.', right: 'I wish I could speak English like a native.', whyTh: 'หลัง wish (ในเรื่องปัจจุบันที่เป็นไปไม่ได้ตอนนี้) ต้องถอยรูปกริยา 1 ขั้น (can → could / will → would)' },
      { wrong: 'She wishes she didn’t say that yesterday.', right: 'She wishes she hadn’t said that yesterday.', whyTh: 'yesterday เป็นเรื่องที่ผ่านไปแล้วในอดีต ความเสียดายในอดีตหลัง wish ต้องใช้ had / hadn’t + V3' },
      { wrong: 'I’d rather you don’t tell anyone.', right: "I'd rather you didn't tell anyone.", whyTh: 'เมื่อมีประธานอีกคนตามหลัง would rather (you) ในความหมายปัจจุบัน/อนาคต ต้องใช้รูปอดีต (didn’t tell)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาหลัง wish เมื่อปรารถนาสิ่งที่ขัดกับความจริง "ในปัจจุบัน"',
        sentence: 'I wish I ___ taller so I could reach that top shelf easily.',
        options: ['am', 'were', 'had been', 'will be'],
        answerIndex: 1,
        explanationTh: 'ความปรารถนาที่ขัดความจริงตอนนี้ ("ตอนนี้ฉันไม่สูง") ใช้ Verb to Be รูป Unreal Past คือ were'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาหลัง wish เมื่อเสียดายเรื่องที่เกิดขึ้นแล้ว "ในอดีต" (last night)',
        sentence: 'Dan wishes he ___ up so late playing games last night.',
        options: ["didn't stay", "hadn't stayed", "wouldn't stay", "doesn't stay"],
        answerIndex: 1,
        explanationTh: 'last night เป็นอดีต ความเสียดายอดีตหลัง wish ใช้ Past Perfect → hadn’t stayed'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาหลัง It’s high time + ประธาน (we)',
        sentence: 'Look at the clock! It’s high time we ___ heading home.',
        options: ['start', 'started', 'will start', 'have started'],
        answerIndex: 1,
        explanationTh: 'โครงสร้าง It’s (high) time + S + V2 (Unreal Past) → started'
      },
      {
        type: 'cloze',
        promptTh: 'แยก would rather + V1 (ตัวเองทำ) vs would rather + S + V2 (ให้คนอื่นทำ)',
        sentence: 'I’d rather you ___ the window closed because the air conditioner is on.',
        options: ['keep', 'kept', 'to keep', 'keeping'],
        answerIndex: 1,
        explanationTh: 'มีประธานตัวใหม่ (you) ตามหลัง I’d rather จึงต้องถอยเป็นรูปอดีต V2 → kept'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค wish บ่นอยากให้พฤติกรรมบางอย่างหยุด (would + V1)',
        tokens: ['I', 'wish', 'my', 'neighbor', 'would', 'stop', 'playing', 'loud', 'music.'],
        explanationTh: 'ต้องการให้คนอื่น/สิ่งอื่นเปลี่ยนพฤติกรรมที่น่ารำคาญ ใช้ wish + S + would + V1'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค If only แสดงความเสียดายในอดีต',
        tokens: ['If', 'only', 'we', 'had', 'checked', 'the', 'traffic', 'before', 'leaving!'],
        explanationTh: 'If only + S + had + V3 ใช้แสดงความเสียดายอย่างแรงในอดีต'
      },
      {
        type: 'error',
        promptTh: 'แตะกริยาหลัง wish ที่ลืมถอยรูปเป็นอดีต (can → could) แล้วเลือกตัวแก้',
        tokens: ['Mia', 'wishes', 'she', 'can', 'play', 'the', 'guitar', 'really', 'well.'],
        errorIndex: 3,
        corrections: ['could', 'will', 'has'],
        correctOptionIndex: 0,
        explanationTh: 'ความปรารถนาปัจจุบันหลัง wish ต้องถอยรูปกริยาจาก can เป็น could'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ to หลัง would rather ... than แล้วเลือกตัวแก้',
        tokens: ['Actually,', 'I', 'would', 'rather', 'stay', 'home', 'than', 'to go', 'out.'],
        errorIndex: 7,
        corrections: ['go', 'going', 'went'],
        correctOptionIndex: 0,
        explanationTh: 'โครงสร้าง I would rather + V1 + than + V1 (ห้ามใส่ to ทั้งหน้าและหลัง than) → stay home than go out'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนความรู้สึกเสียดาย "I regret eating so much spicy food yesterday." ให้ขึ้นต้นด้วย I wish...',
        sentence: 'ข้อใดเขียนประโยคด้วย I wish ได้ถูกต้องตามเวลาในอดีต?',
        options: [
          "I wish I didn't eat so much spicy food yesterday.",
          "I wish I hadn't eaten so much spicy food yesterday.",
          "I wish I wouldn't eat so much spicy food yesterday.",
          "I wish I haven't eaten so much spicy food yesterday."
        ],
        answerIndex: 1,
        explanationTh: 'เรื่องในอดีต (yesterday) หลัง wish ต้องใช้ Past Perfect (hadn’t eaten)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกกริยาหลัง wish เมื่อประธานเป็น I (ห้ามใช้ I wish I would...)',
        sentence: 'I wish I ___ a better memory for names and faces.',
        options: ['would have', 'had', 'have', 'am having'],
        answerIndex: 1,
        explanationTh: 'ประธานเดียวกับ wish (I wish I...) พูดถึงสภาพตอนนี้ ให้ใช้ Past Simple (had) ไม่ใช้ would have'
      },
      {
        type: 'cloze',
        promptTh: 'Unreal Past 2 ประธานในอดีต (would rather + S + had V3)',
        sentence: 'I’d rather you ___ him the secret yesterday; now everyone knows.',
        options: ["didn't tell", "hadn't told", "don't tell", 'not tell'],
        answerIndex: 1,
        explanationTh: 'มีประธานตัวใหม่ (you) + เวลาในอดีต (yesterday) หลัง would rather จึงต้องถอยเป็น Past Perfect → hadn’t told'
      },
      {
        type: 'cloze',
        promptTh: 'คำเตือนเร่งด่วนเฉพาะหน้า (had better + V1 ไม่มี to)',
        sentence: 'The sky is turning dark! We ___ take an umbrella before heading out.',
        options: ["'d better", 'would rather', "'d better to", 'had bettered'],
        answerIndex: 0,
        explanationTh: 'เตือนเรื่องสำคัญเฉพาะหน้า ("ควรทำ ไม่งั้นแย่แน่") ใช้ had better + V1 เพียวๆ (’d better take) โดยไม่มี to'
      }
    ]
  },
  {
    id: 'g27',
    num: 27,
    phase: 'phase3',
    level: 'B1–B2',
    titleTh: 'Clauses (Relative, Noun & Participle Clauses)',
    titleEn: 'Relative, Noun & Participle Clauses',
    estMinutes: 6,
    summaryTh: 'เชื่อมรายละเอียดประโยคให้สละสลวยด้วย Relative Clauses (who/whom/whose/which/that/where), แยก Non-defining (มี comma) และลดรูปด้วย Participle (V-ing/V3) รวมถึง Noun Clause',
    formulas: [
      { label: 'Relative Pronouns หลัก', parts: ['who (คน: ประธาน)', '|', 'whom (คน: กรรม)', '|', 'whose (+ N: ของใคร)', '|', 'which (สิ่งของ)', '|', 'that (คน/สิ่งของ: ห้ามมี comma)', '|', 'where (สถานที่)'] },
      { label: 'Non-defining · Prep · Participle', parts: ['มี , ... , ห้ามใช้ that! · Prep + whom/which', '|', 'ทำเองย่อเป็น V-ing · ถูกทำย่อเป็น V3 · ทำเสร็จก่อน: Having + V3'] }
    ],
    tables: [
      {
        title: 'สรุปครบ Relative Clauses · Noun Clauses · Participle Clauses',
        headers: ['หัวข้อ', 'คำที่ใช้ / กฎสำคัญ', 'ตัวอย่างประโยค'],
        rows: [
          ['<b>whose</b> (ของใคร)', 'ตามด้วย <b>คำนาม</b> เสมอ (แทน his/her/their)', 'The woman <b>whose car</b> broke down called a tow truck.'],
          ['<b>where</b> vs <b>which</b>', 'เกิดเหตุการณ์ "ใน" ที่นั้น = <b>where</b> · ตัวสถานที่เองเป็นประธาน/กรรม = <b>which</b>', 'The cafe <b>where</b> we met / The cafe <b>which</b> has free Wi-Fi'],
          ['<b>มี Comma ( , ... , )</b> & Sentential', 'ขยายเฉพาะ/ขยาย<b>ทั้งประโยค</b> (มี comma) → <b>ใส่ that ไม่ได้!</b> ใช้ who/which', 'Bangkok<b>, which</b> is huge, never sleeps. / He passed<b>, which</b> surprised us.'],
          ['<b>Prep + whom / which</b> & Zero Relative', 'วาง Preposition หน้าคำเชื่อม<b>ห้ามใช้ who/that</b> · หากเป็นกรรมละคำเชื่อมได้', 'The mentor <b>from whom</b> I learned / The movie (<b>that</b>) we saw'],
          ['<b>Noun Clause</b>', 'ทำหน้าที่เป็นประธาน/กรรมทั้งก้อน (what / that / whether)', '<b>What she said</b> was true. / I know <b>that</b> he tried. / Ask <b>whether</b> it fits.'],
          ['<b>Participle ลดรูปหลังนาม</b>', 'ประธานทำเอง = <b>V-ing</b> · ประธานถูกทำ = <b>V3</b>', 'The man <b>standing</b> there (ยืนเอง) / The letter <b>written</b> in Thai (ถูกเขียน)'],
          ['<b>Adverbial Participle & Having V3</b>', 'ขึ้นต้นประโยคบอกเวลา/เหตุผล (<b>ประธาน 2 ฝั่งต้องตัวเดียวกัน!</b>)', '<b>Waiting</b> outside, we saw Tom. / <b>Having finished</b> work, she left.']
        ]
      }
    ],
    examples: [
      { en: 'The colleague whose desk is near the window speaks three languages.', th: 'เพื่อนร่วมงานคนที่โต๊ะของเขาอยู่ใกล้หน้าต่างพูดได้สามภาษา', focus: 'whose + desk (แสดงความเป็นเจ้าของ)' },
      { en: 'My hometown, which is famous for waterfalls, is peaceful.', th: 'บ้านเกิดของฉัน ซึ่งขึ้นชื่อเรื่องน้ำตก เป็นเมืองที่เงียบสงบ', focus: 'Non-defining (มี comma คั่น) → ใช้ which เท่านั้น ห้ามใช้ that' },
      { en: 'Books written by local authors are on the top shelf.', th: 'หนังสือที่ถูกเขียนโดยนักเขียนท้องถิ่นอยู่บนชั้นบนสุด', focus: 'Participle ลดรูปจาก books which were written → books written (V3 ถูกเขียน)' }
    ],
    mistakes: [
      { wrong: 'My brother, that lives in Chiang Mai, is visiting today.', right: 'My brother, who lives in Chiang Mai, is visiting today.', whyTh: 'หลังเครื่องหมาย Comma (Non-defining Relative Clause) ห้ามใช้ that เด็ดขาด (ต้องใช้ who กับคน / which กับของ)' },
      { wrong: 'The hotel where has a swimming pool is expensive.', right: 'The hotel which has a swimming pool is expensive.', whyTh: 'หลังช่องว่างเป็นคำกริยา has (ตัวโรงแรมเป็นประธานที่มีสระน้ำ) ไม่ใช่ "ที่ซึ่งเกิดเหตุการณ์ข้างใน" จึงต้องใช้ which/that ไม่ใช่ where' },
      { wrong: 'The boy who sitting next to me is my cousin.', right: 'The boy sitting next to me is my cousin.', whyTh: 'เมื่อลดรูปเป็น Participle (sitting) ต้องตัดทั้ง Relative Pronoun (who) และ Verb to Be หรือใส่ให้ครบ (who is sitting)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'เลือก whose (ตามด้วยคำนาม) เพื่อแสดงความเป็นเจ้าของใน Relative Clause',
        sentence: 'I thanked the neighbor ___ dog found our missing house keys.',
        options: ['who', 'whom', 'whose', 'which'],
        answerIndex: 2,
        explanationTh: 'หลังช่องว่างเป็นคำนาม (dog = หมาของเพื่อนบ้าน) จึงต้องใช้ whose'
      },
      {
        type: 'cloze',
        promptTh: 'แยก where (ที่ซึ่ง...) vs which (ซึ่งเป็นประธาน/กรรม)',
        sentence: 'That is the bookstore ___ we bought our first English dictionary.',
        options: ['which', 'where', 'who', 'whose'],
        answerIndex: 1,
        explanationTh: 'ความหมายคือ "ที่ร้านนั้นเราได้ซื้อ..." (we bought = มีประธาน+กริยาครบ, ขาดแค่สถานที่ "ในร้านนั้น") → ใช้ where'
      },
      {
        type: 'cloze',
        promptTh: 'ข้อห้ามหลัง Comma (Non-defining Relative Clause)',
        sentence: 'Mount Fuji, ___ is Japan’s highest peak, attracts millions of visitors.',
        options: ['that', 'which', 'where', 'what'],
        answerIndex: 1,
        explanationTh: 'หลัง Comma (Non-defining) ใช้ that ไม่ได้เด็ดขาด! Mount Fuji เป็นสิ่งของ/สถานที่ (ตามด้วย is) จึงใช้ which'
      },
      {
        type: 'cloze',
        promptTh: 'Participle Clause: ประธานทำกริยาเอง (V-ing) vs ถูกกระทำ (V3)',
        sentence: 'All emails ___ after 6 p.m. will be answered tomorrow morning.',
        options: ['receiving', 'received', 'receive', 'to receiving'],
        answerIndex: 1,
        explanationTh: 'อีเมล "ถูกได้รับ" (ลดรูปจาก which are received) → ใช้ Past Participle (V3) คือ received'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Noun Clause ที่ขึ้นต้นด้วย What (= สิ่งที่...)',
        sentence: '___ makes this app effective is its clear Thai explanations.',
        options: ['That', 'What', 'Which', 'Who'],
        answerIndex: 1,
        explanationTh: 'What แปลว่า "สิ่งที่..." ทำหน้าที่เป็นทั้งตัวเชื่อมและประธานของประโยคในตัว (What makes this app effective = สิ่งที่ทำให้แอปนี้ได้ผล)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคลดรูปด้วย Present Participle (V-ing ทำเอง)',
        tokens: ['The', 'woman', 'wearing', 'a', 'green', 'scarf', 'is', 'our', 'instructor.'],
        explanationTh: 'ลดรูปจาก who is wearing เหลือ wearing (V-ing) ได้เลยเมื่อผู้หญิงสวมเอง'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ that หลังเครื่องหมาย Comma แล้วเลือกตัวแก้',
        tokens: ['Her', 'laptop,', 'that', 'she', 'bought', 'last', 'year,', 'still', 'works', 'fast.'],
        errorIndex: 2,
        corrections: ['which', 'who', 'where'],
        correctOptionIndex: 0,
        explanationTh: 'หลังเครื่องหมาย Comma ห้ามใช้ that สำหรับ Non-defining Clause ต้องเปลี่ยนเป็น which'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ where แทน which ทั้งที่มีกริยาตามหลังโดยตรง แล้วเลือกตัวแก้',
        tokens: ['We', 'visited', 'a', 'museum', 'where', 'displays', 'over', '500', 'paintings.'],
        errorIndex: 4,
        corrections: ['which', 'whose', 'whom'],
        correctOptionIndex: 0,
        explanationTh: 'displays เป็นคำกริยาที่ต้องการประธาน พิพิธภัณฑ์ทำหน้าที่เป็นประธาน (พิพิธภัณฑ์ซึ่งจัดแสดง...) จึงต้องใช้ which / that ไม่ใช่ where'
      },
      {
        type: 'transform',
        promptTh: 'รวมสองประโยค "The parcel arrived today. It was shipped from Chiang Mai." โดยลดรูปด้วย Participle',
        sentence: 'ข้อใดย่อประโยคด้วย Participle Clause ได้กระชับและถูกต้อง?',
        options: [
          'The parcel shipping from Chiang Mai arrived today.',
          'The parcel shipped from Chiang Mai arrived today.',
          'The parcel was shipped from Chiang Mai arrived today.',
          'The parcel which shipped from Chiang Mai arrived today.'
        ],
        answerIndex: 1,
        explanationTh: 'พัสดุ "ถูกส่งมา" (Passive) ลดรูป which was shipped เหลือ V3 เพียวๆ → The parcel shipped from Chiang Mai...'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Participle Clause (V-ing) ขึ้นต้นประโยคเมื่อประธานทำกริยา 2 อย่างพร้อมกัน',
        sentence: '___ outside the cafe, we noticed an old friend across the street.',
        options: ['Waited', 'Waiting', 'Wait', 'To waited'],
        answerIndex: 1,
        explanationTh: 'ผู้กระทำคือ we ("ระหว่างที่พวกเรากำลังรออยู่เอง") เป็น Active จึงใช้ Present Participle → Waiting'
      },
      {
        type: 'cloze',
        promptTh: 'Adverbial Participle (Having + V3) & กฎ Dangling Participle (ประธาน 2 ฝั่งต้องตัวเดียวกัน!)',
        sentence: 'Having saved enough money for two years, ___.',
        options: [
          'a new laptop was bought by Nina',
          'Nina finally bought a new laptop',
          'the store sold Nina a new laptop',
          'buying a new laptop happened'
        ],
        answerIndex: 1,
        explanationTh: 'คนที่ออมเงิน (Having saved...) ต้องเป็นประธานตัวเดียวกับประโยคหลัก → Nina finally bought a new laptop'
      },
      {
        type: 'cloze',
        promptTh: 'การใช้ Preposition + Relative Pronoun (ห้ามใช้ who / that หลัง Preposition!)',
        sentence: 'The mentor from ___ I learned the most retired last month.',
        options: ['who', 'whom', 'that', 'whose'],
        answerIndex: 1,
        explanationTh: 'เมื่อวาง Preposition (from) ไว้หน้า Relative Pronoun สำหรับ "คน" ต้องใช้ whom เท่านั้น (ห้ามใช้ who หรือ that)'
      }
    ]
  },
  {
    id: 'g28',
    num: 28,
    phase: 'phase3',
    level: 'B1–B2',
    titleTh: 'Reported Speech (Direct & Indirect Speech)',
    titleEn: 'Reported Speech (Statements, Questions & Commands)',
    estMinutes: 5,
    summaryTh: 'การนำคำพูดของคนอื่นมาเล่าต่อ: เข้าใจกฎถอย Tense (Backshift), เปลี่ยนสรรพนาม, เปลี่ยนคำบอกเวลา/สถานที่ รวมถึงวิธีรายงานประโยคคำถามและคำสั่ง',
    formulas: [
      { label: 'Backshift Tense (กริยานำเป็นอดีต said/told) & ข้อยกเว้น', parts: ['V1 → V2 · is/are → was/were · V2/have V3 → had V3', '|', 'will/can/may → would/could/might · must → had to', '|', 'ไม่ Backshift: กริยานำ Present (says) · ความจริงนิรันดร์ · ยังจริงอยู่ · would/could/should/might'] },
      { label: 'คำถาม · คำสั่ง · Reporting Verbs Patterns', parts: ['คำถาม: asked + if/whether/Wh + S + V (เรียงบอกเล่า)', '|', 'V + to V1 (offer/promise/refuse) · V + sb + (not) to V1 (told/asked/advised/warned/reminded)', '|', 'V + V-ing (suggest/admit/deny)'] }
    ],
    tables: [
      {
        title: 'สรุปการเปลี่ยน Tense · คำถาม · คำสั่ง และ say vs tell vs explain',
        headers: ['Direct Speech (คำพูดตรง)', 'Indirect / Reported Speech (เล่าต่อ)', 'ข้อสังเกตสำคัญ'],
        rows: [
          ['<b>say</b> / <b>explain</b> vs <b>tell</b>', '<b>said</b> (that)... / <b>said to</b> us / <b>explained to</b> us · <b>told</b> us (that)...', '❌ ห้ามพูด said me · ❌ told to me · ❌ explained me'],
          ['“I <b>am busy today</b>.”', 'She said (that) she <b>was busy that day</b>.', 'V1 → V2 · is/am/are → was/were'],
          ['“I <b>will call</b> / <b>must go</b>.”', 'He promised he <b>would call</b> / <b>had to go</b>.', 'will → would · can → could · may → might · must → had to'],
          ['“Where <b>do you live</b>?”', 'She asked me where I <b>lived</b>.', 'ตัด do/does/did ออก แล้วเรียงเป็น <b>S + V</b> (เหมือนบอกเล่า)'],
          ['“<b>Please wait</b> / <b>Don’t go</b>.”', 'He asked me <b>to wait</b> / warned us <b>not to go</b>.', 'คำสั่ง/ขอร้อง/เตือน ใช้ <b>(not) to + V1</b> (ห้าม to not!)']
        ]
      },
      {
        title: 'เจาะลึก: ข้อยกเว้นไม่ Backshift · เปลี่ยนเวลา/สถานที่ · Reporting Verbs',
        headers: ['หัวข้อสำคัญ', 'หลักการ / คำศัพท์ที่ใช้', 'ตัวอย่างประโยค'],
        rows: [
          ['<b>ไม่ Backshift Tense (4 กรณี)</b>', '1) กริยานำเป็น Present (<b>says</b>) · 2) ความจริงนิรันดร์ · 3) ยังเป็นจริงอยู่ตอนนี้ · 4) Modals <b>would/could/should/might</b>', 'He <b>says</b> he is ready. / The Earth <b>revolves</b> around the Sun. / She said she <b>might</b> join.'],
          ['<b>ตารางเปลี่ยนเวลา & สถานที่</b>', 'now→then · here→there · ago→before · today→that day', 'yesterday→<b>the day before</b> · tomorrow→<b>the next day</b> · last/next week→<b>the previous/following week</b>'],
          ['<b>V + to V1</b> & <b>V + sb + to V1</b>', '<b>offer / promise / refuse</b> (+ to V1) · <b>advise / warn / remind / encourage</b> (+ คน + (not) to V1)', 'He <b>offered to help</b>. / She <b>reminded me to lock</b> the door.'],
          ['<b>V + V-ing</b> (ห้ามใส่ คน + to V1!)', '<b>suggest / admit / deny</b> (+ V-ing หรือ that + S + V)', 'She <b>suggested taking</b> a taxi. (❌ suggested me to take!)']
        ]
      }
    ],
    examples: [
      { en: 'Maya told me that she had already booked the hotel.', th: 'มายาบอกฉันว่าเธอได้จองโรงแรมไปเรียบร้อยแล้ว', focus: 'told + คน (me) · ถอย Tense เป็น had already booked' },
      { en: 'The receptionist asked if I needed help with my luggage.', th: 'พนักงานต้อนรับถามว่าฉันต้องการความช่วยเหลือเรื่องกระเป๋าไหม', focus: 'คำถาม Yes/No ใช้ asked + if + S + V (ถอย need → needed)' },
      { en: 'The doctor advised him to drink more water and rest.', th: 'คุณหมอแนะนำให้เขาดื่มน้ำมากขึ้นและพักผ่อน', focus: 'คำแนะนำ/สั่ง ใช้ advised/told + คน + to V1' }
    ],
    mistakes: [
      { wrong: 'He said me that he was tired.', right: 'He told me that he was tired. (หรือ He said that...)', whyTh: 'say ห้ามตามด้วย "คน" โดยตรง ต้องใช้ tell + คน (told me) หรือ said to me' },
      { wrong: 'She asked me where did I buy that bag.', right: 'She asked me where I had bought that bag.', whyTh: 'ใน Reported Question ต้องเรียงเหมือนประโยคบอกเล่า (ตัด did ออกและถอย Tense)' },
      { wrong: 'The coach told us to not give up.', right: 'The coach told us not to give up.', whyTh: 'คำสั่งปฏิเสธให้วาง not ไว้ "หน้า to" เสมอ → not to V1' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'แยกใช้ said vs told เมื่อมีกรรมเป็นบุคคล (us) ตามหลังโดยไม่มี to',
        sentence: 'The guide ___ us that the museum opened at 9 a.m.',
        options: ['said', 'told', 'spoke', 'explained'],
        answerIndex: 1,
        explanationTh: 'มีบุคคล (us) ตามหลังโดยตรงไม่มี to ต้องใช้ told (ส่วน said/explained ต้องมี to เช่น said to us / explained to us)'
      },
      {
        type: 'cloze',
        promptTh: 'Backshift Tense: จากคำพูดตรง "I can finish it tomorrow." (เมื่อเล่าต่อในอดีต)',
        sentence: 'Leo promised he ___ finish it the next day.',
        options: ['can', 'could', 'will', 'may'],
        answerIndex: 1,
        explanationTh: 'กริยานำคือ promised (อดีต) และ tomorrow เปลี่ยนเป็น the next day ดังนั้น can ถอยเป็น could'
      },
      {
        type: 'cloze',
        promptTh: 'รายงานคำพูดที่เป็นประโยคคำถาม Yes/No ("Do you speak Thai?")',
        sentence: 'The interviewer asked me ___ Thai.',
        options: ['did I speak', 'if I spoke', 'whether did I speak', 'do I speak'],
        answerIndex: 1,
        explanationTh: 'Reported Question (Yes/No) ใช้ if/whether + S + V ถอย Tense (speak → spoke)'
      },
      {
        type: 'cloze',
        promptTh: 'รายงานประโยคคำสั่งปฏิเสธ ("Don’t touch the screen!")',
        sentence: 'The sign warned visitors ___ the glass display.',
        options: ['to not touch', 'not to touch', "don't touch", 'not touching'],
        answerIndex: 1,
        explanationTh: 'คำเตือน/คำสั่งปฏิเสธใช้ warned + คน + not to + V1 → not to touch'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็น Reported Question ที่เรียงตำแหน่งประธาน-กริยาถูกต้อง',
        tokens: ['She', 'asked', 'me', 'what', 'time', 'the', 'workshop', 'started.'],
        explanationTh: 'Reported Question ใช้ asked me + Wh-phrase + ประธาน + กริยา (ห้ามสลับ did ขึ้นหน้า)'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำเพื่อรายงานประโยคขอร้องสุภาพ',
        tokens: ['My', 'manager', 'asked', 'me', 'to', 'send', 'the', 'draft', 'that', 'evening.'],
        explanationTh: 'asked + คน (me) + to V1 (to send) และเปลี่ยน tonight เป็น that evening'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ said กับบุคคลโดยตรง (ไม่มี to) แล้วเลือกตัวแก้',
        tokens: ['Emma', 'said', 'me', 'she', 'was', 'moving', 'to', 'Chiang', 'Rai.'],
        errorIndex: 1,
        corrections: ['told', 'talked', 'spoke'],
        correctOptionIndex: 0,
        explanationTh: 'เมื่อมี me (ผู้รับสาร) ตามหลังโดยตรง ต้องใช้ told me ไม่ใช่ said me'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดใน Reported Question ที่เรียงกริยาแบบคำถามตรง แล้วเลือกตัวแก้',
        tokens: ['He', 'asked', 'where', 'was the nearest bus stop.'],
        errorIndex: 3,
        corrections: ['the nearest bus stop was.', 'is the nearest bus stop.', 'had been the nearest bus stop.'],
        correctOptionIndex: 0,
        explanationTh: 'Reported Question ต้องวางประธาน (the nearest bus stop) ไว้หน้ากริยา (was)'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยนคำพูดตรงของ Nina: "I have never tried durian before." เป็น Reported Speech หลัง "Nina said that..."',
        sentence: 'ข้อใดเปลี่ยน Tense และ Pronoun ได้ถูกต้องทั้งหมด?',
        options: [
          'Nina said that I had never tried durian before.',
          'Nina said that she has never tried durian before.',
          'Nina said that she had never tried durian before.',
          'Nina said that she never tried durian before.'
        ],
        answerIndex: 2,
        explanationTh: 'I เปลี่ยนเป็น she ตาม Nina และ have tried (Present Perfect) ถอยเป็น had tried (Past Perfect)'
      },
      {
        type: 'cloze',
        promptTh: 'ข้อยกเว้น: ความจริงทางวิทยาศาสตร์/นิรันดร์ ไม่จำเป็นต้อง Backshift Tense',
        sentence: 'The science teacher explained that the Earth ___ around the Sun.',
        options: ['revolving', 'revolves', 'had revolved', 'is revolve'],
        answerIndex: 1,
        explanationTh: 'ความจริงทางธรรมชาติที่เป็นจริงตลอดกาล (โลกหมุนรอบดวงอาทิตย์) คงรูป Present Simple (revolves) ได้เลย'
      },
      {
        type: 'cloze',
        promptTh: 'Reporting Verb Pattern: กริยา suggest / admit / deny ตามด้วย V-ing เสมอ',
        sentence: 'To avoid the morning rush, our guide suggested ___ at 6:30 a.m.',
        options: ['to leave', 'leaving', 'us leave', 'us to leave'],
        answerIndex: 1,
        explanationTh: 'หลัง suggest / admit / deny ใช้ V-ing (หรือ that + S + V1) ห้ามใช้ suggest + คน + to V1 เด็ดขาด → leaving'
      },
      {
        type: 'cloze',
        promptTh: 'Reporting Verb Pattern: กริยา offer / promise / refuse ตามด้วย to + V1',
        sentence: 'Even though it was late, the technician kindly offered ___ our router right away.',
        options: ['fix', 'to fix', 'fixing', 'us fixing'],
        answerIndex: 1,
        explanationTh: 'คำกริยา offer / promise / refuse / agree ตามด้วย to + V1 โดยตรง → offered to fix'
      }
    ]
  },
  {
    id: 'g29',
    num: 29,
    phase: 'phase3',
    level: 'B2–C1',
    titleTh: 'Word Formation, Connectors, Parallel & Inversion',
    titleEn: 'Prefixes/Suffixes, Connectors, Parallelism & Inversion',
    estMinutes: 6,
    summaryTh: 'ยกระดับภาษาอังกฤษสู่ความเป๊ะระดับสูง/ข้อสอบ: การเติม Prefix/Suffix, แยกคำเชื่อมตามด้วยประโยค vs วลีนาม (although vs despite), โครงสร้างคู่ขนาน และ Inversion',
    formulas: [
      { label: 'คำเชื่อม + ประโยค vs + คำนาม/V-ing', parts: ['although / though / because / whereas + (S + V)', '|', 'despite / in spite of / because of / due to / instead of + (Noun / V-ing)'] },
      { label: 'Parallel · Inversion ขั้นสูง · Subjunctive', parts: ['both A and B / not only A but also B (ชนิดคำเท่ากัน)', '|', 'Never / Not only / No sooner...than / Hardly...when + aux + S + V', '|', 'Not until / Only after + ... + aux + S + V (สลับประโยคหลัง!) · suggest/vital + that + S + V1'] }
    ],
    tables: [
      {
        title: 'สรุป Word Formation · Connectors พื้นฐาน · Parallel · Inversion',
        headers: ['หัวข้อ', 'หลักการสำคัญ', 'ตัวอย่างถูกต้อง'],
        rows: [
          ['<b>Prefixes</b> (เติมหน้าเปลี่ยนความหมายตรงข้าม)', 'un-, dis-, in-/im- (หน้า b/m/p), il- (หน้า l), ir- (หน้า r)', '<b>un</b>happy · <b>dis</b>agree · <b>im</b>possible · <b>ir</b>regular'],
          ['<b>Suffixes</b> (เติมท้ายเปลี่ยนชนิดคำ)', '-tion/-ment/-ness/-ity/-ance (N) · -ize/-ify (V) · -ful/-less/-able/-ous (Adj) · -ly (Adv)', 'create → creat<b>ion</b> (N) · creat<b>ive</b> (Adj) · creat<b>ively</b> (Adv) · speak clearly'],
          ['<b>although vs despite</b>', 'although + S+V · despite + N/V-ing (<b>ห้ามมี of หลัง despite!</b>)', '<b>Although it rained</b>, we went. = <b>Despite the rain</b>, we went.'],
          ['<b>because vs because of</b>', 'because + S+V · because of / due to + N/V-ing', 'Canceled <b>because of the storm</b>.'],
          ['<b>so...that vs such...that</b>', '<b>so</b> + Adj/Adv + that · <b>such</b> + (a/an + Adj) + Noun + that', '<b>so cold</b> that... / <b>such a cold day</b> that...'],
          ['<b>Inversion พื้นฐาน</b> (สลับกริยาช่วยขึ้นหน้า)', 'ขึ้นต้นคำปฏิเสธ: Never / Rarely / Seldom / Little / Under no circumstances', '<b>Not only did he</b> help us, but he also paid! / <b>Little did I know</b>...']
        ]
      },
      {
        title: 'ระดับ B2–C1: Connectors ขั้นสูง · Inversion พิเศษ & Mandative Subjunctive',
        headers: ['โครงสร้างระดับสูง', 'กฎการใช้และจุดหลอกในข้อสอบ', 'ตัวอย่างประโยค'],
        rows: [
          ['<b>whereas / while</b> vs <b>; however, / ; therefore,</b>', 'whereas/while เชื่อมขัดแย้ง 2 ประโยค · however/nevertheless/therefore ต้องคั่นด้วย <b>.</b> หรือ <b>;</b> + <b>,</b>', 'He likes tea, <b>whereas</b> I prefer coffee. / It rained<b>; however,</b> we went.'],
          ['<b>in order to / so as to</b> vs <b>so that</b>', 'in order to / so as to + <b>V1</b> · so that + <b>S + V</b>', 'I study <b>in order to</b> pass. / I study <b>so that I can</b> pass.'],
          ['<b>instead</b> (Adv) vs <b>instead of</b> (Prep)', 'instead อยู่เดี่ยวท้าย/ต้นประโยค · instead of + <b>N / V-ing</b>', 'We walked <b>instead of driving</b>. / We didn’t drive; we walked <b>instead</b>.'],
          ['<b>Hardly/Scarcely...when</b> vs <b>No sooner...than</b>', 'พอทำ A ปุ๊บก็เกิด B ทันที (สลับ <b>had + S + V3</b> · ระวังคู่ <b>when</b> vs <b>than</b>!)', '<b>No sooner had I</b> sat down <b>than</b> the phone rang. / <b>Hardly had we</b> left <b>when</b> it rained.'],
          ['<b>Not until / Only after / Only by</b>', 'ตัวเชื่อมอยู่หน้า แต่ <b>ไปสลับกริยาช่วยที่ Main Clause (ประโยคหลัง!)</b>', '<b>Not until</b> midnight <b>did he</b> arrive. / <b>Only after</b> eating <b>did I</b> feel better.'],
          ['<b>Mandative Subjunctive</b>', 'suggest / recommend / insist / essential / vital + that + S + <b>V1 เพียวๆ (ไม่เติม s / ใช้ be!)</b>', 'The doctor insisted that he <b>take</b> the pill. / It is vital that she <b>be</b> on time.']
        ]
      }
    ],
    examples: [
      { en: 'Despite the heavy traffic, everyone arrived ahead of schedule.', th: 'แม้การจราจรจะติดขัด แต่ทุกคนก็มาถึงก่อนกำหนด', focus: 'Despite + วลีนาม (the heavy traffic) — ห้ามใส่ of หลัง despite!' },
      { en: 'He enjoys swimming, cycling, and hiking on weekends.', th: 'เขาชอบว่ายน้ำ ปั่นจักรยาน และเดินป่าในวันสุดสัปดาห์', focus: 'Parallel Structure: กริยาทุกตัวในชุดเดียวกันต้องเป็น V-ing เหมือนกันหมด' },
      { en: 'Never have I seen such a well-organized workshop.', th: 'ฉันไม่เคยเห็นเวิร์กชอปที่จัดระบบได้ดีขนาดนี้มาก่อนเลย', focus: 'Inversion (เน้นย้ำ): ขึ้นต้นด้วย Never → ดึง have ขึ้นมาหน้า I' }
    ],
    mistakes: [
      { wrong: 'Despite of the rain, they played football.', right: 'Despite the rain, they played football. (หรือ In spite of...)', whyTh: 'Despite ห้ามใส่ of ตามหลังเด็ดขาด (ถ้าจะใช้ of ต้องใช้ In spite of)' },
      { wrong: 'We stayed indoors because of it was raining.', right: 'We stayed indoors because it was raining.', whyTh: 'it was raining เป็นประโยค (มี S+V) จึงต้องใช้ because เฉยๆ ห้ามใส่ of' },
      { wrong: 'Not only she speaks Thai, but also French.', right: 'Not only does she speak Thai, but she also speaks French.', whyTh: 'เมื่อนำคำปฏิเสธอย่าง Not only / Never / Seldom มาไว้ต้นประโยค ต้องสลับกริยาช่วย (does/did/have) ขึ้นมาหน้าประธาน (Inversion)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'แยกตัวเชื่อมที่ตามด้วยประโยค (although) vs วลีนาม (despite)',
        sentence: '___ her busy schedule, Sarah always finds time to volunteer.',
        options: ['Although', 'Despite', 'Despite of', 'Even though'],
        answerIndex: 1,
        explanationTh: 'her busy schedule เป็นวลีนาม (ไม่มีคำกริยา) จึงต้องใช้ Despite (และห้ามใส่ of หลัง despite)'
      },
      {
        type: 'cloze',
        promptTh: 'เลือกใช้ so ... that กับ such ... that ให้ถูกต้อง',
        sentence: 'It was ___ an inspiring lecture that nobody wanted to leave.',
        options: ['so', 'such', 'very', 'too'],
        answerIndex: 1,
        explanationTh: 'หลังช่องว่างมีคำนาม (an inspiring lecture) ตามด้วย that จึงต้องใช้ such (ไม่ใช่ so)'
      },
      {
        type: 'cloze',
        promptTh: 'รักษาโครงสร้างคู่ขนาน (Parallel Structure) ให้รูปคำเท่ากันทุกตัว',
        sentence: 'The new app helps learners read clearly, speak confidently, and ___ faster.',
        options: ['remembering', 'remember', 'to remember', 'remembered'],
        answerIndex: 1,
        explanationTh: '2 ตัวแรกเป็น V1 (read clearly, speak confidently) ตัวที่ 3 หลัง and จึงต้องเป็น V1 ด้วย → remember'
      },
      {
        type: 'cloze',
        promptTh: 'ใช้ Prefix เชิงปฏิเสธให้ถูกกับคำที่ขึ้นต้นด้วยตัว p (possible / polite / patient)',
        sentence: 'Remembering 3,000 words in one night is completely ___.',
        options: ['unpossible', 'dispossible', 'impossible', 'irpossible'],
        answerIndex: 2,
        explanationTh: 'คำคุณศัพท์ที่ขึ้นต้นด้วย p, b หรือ m มักใช้ Prefix ว่า im- → impossible'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Inversion ที่สลับกริยาช่วยมาหน้าประธานหลัง Never',
        sentence: 'Never ___ heard such a clear explanation of English tenses!',
        options: ['I have', 'have I', 'did I have', 'I had'],
        answerIndex: 1,
        explanationTh: 'เมื่อขึ้นต้นประโยคด้วยคำเชิงปฏิเสธ (Never, Rarely, Seldom) ต้องสลับกริยาช่วยมาหน้าประธาน → Never have I heard'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยค Inversion ที่ขึ้นต้นด้วย Not only ถูกต้อง',
        tokens: ['Not', 'only', 'did', 'she', 'win,', 'but', 'she', 'also', 'broke', 'the', 'record.'],
        explanationTh: 'Not only + กริยาช่วย (did) + ประธาน (she) + V1 (win) ..., but also ...'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใช้ Despite คู่กับ of แล้วเลือกตัวแก้',
        tokens: ['Despite of', 'the', 'chilly', 'wind,', 'we', 'walked', 'along', 'the', 'pier.'],
        errorIndex: 0,
        corrections: ['Despite', 'In spite', 'Although'],
        correctOptionIndex: 0,
        explanationTh: 'Despite ใช้เดี่ยวๆ โดยไม่มี of (หากต้องการใช้ of ให้เปลี่ยน Despite เป็น In spite)'
      },
      {
        type: 'error',
        promptTh: 'แตะคำที่ไม่เป็น Parallel ในชุดรายการ แล้วเลือกตัวแก้',
        tokens: ['A', 'good', 'mentor', 'should', 'be', 'patient,', 'honest,', 'and', 'encourage.'],
        errorIndex: 8,
        corrections: ['encouraging.', 'encouragement.', 'to encourage.'],
        correctOptionIndex: 0,
        explanationTh: 'patient และ honest เป็น Adjective ทั้งคู่ ตัวที่ 3 จึงต้องเป็น Adjective ด้วยคือ encouraging (ให้กำลังใจ)'
      },
      {
        type: 'transform',
        promptTh: 'เปลี่ยน "Because the traffic was bad, we arrived late." ให้ใช้ because of',
        sentence: 'ข้อใดใช้ because of + คำนาม/วลีนาม ได้ถูกต้องตามไวยากรณ์?',
        options: [
          'Because of the traffic was bad, we arrived late.',
          'Because of the bad traffic, we arrived late.',
          'Because the bad traffic, we arrived late.',
          'Due to the traffic was bad, we arrived late.'
        ],
        answerIndex: 1,
        explanationTh: 'because of / due to ต้องตามด้วยคำนามหรือวลีนาม (the bad traffic) ไม่ใช่ประโยคที่มี S+V'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Suffix เพื่อเติมคำชนิด Noun (คำนาม) หลังคำว่า your',
        sentence: 'Thank you very much for your kind ___ to the charity event.',
        options: ['contribute', 'contributed', 'contribution', 'contributive'],
        answerIndex: 2,
        explanationTh: 'หลัง Possessive Adjective + Adjective (your kind...) ต้องเป็นคำนาม (Noun) ลงท้าย -tion → contribution'
      },
      {
        type: 'cloze',
        promptTh: 'คู่สำนวน Inversion บอกเหตุการณ์เกิดต่อกันทันที: No sooner ... ___ (vs Hardly ... when)',
        sentence: 'No sooner had the train left the station ___ it started pouring rain.',
        options: ['when', 'than', 'that', 'then'],
        answerIndex: 1,
        explanationTh: 'No sooner ... ต้องคู่กับ than เสมอ (ส่วน Hardly / Scarcely ใช้คู่กับ when) → No sooner had... than...'
      },
      {
        type: 'cloze',
        promptTh: 'Mandative Subjunctive: หลัง insist / recommend / suggest + that ใช้รูปกริยาไม่ผัน (V1 เพียวๆ)',
        sentence: 'The safety board insisted that every passenger ___ a seatbelt during takeoff.',
        options: ['wears', 'wear', 'wore', 'wearing'],
        answerIndex: 1,
        explanationTh: 'โครงสร้าง Mandative Subjunctive: หลัง insist / suggest / recommend + that ใช้ V1 ไม่ผันรูป (แม้ประธานเป็น every passenger) → wear'
      }
    ]
  },
  {
    id: 'g30',
    num: 30,
    phase: 'phase3',
    level: 'A1–B2',
    titleTh: 'Thai–English Grammar Traps (รวมกับดักคนไทย)',
    titleEn: 'Common Thai-English Grammar Traps',
    estMinutes: 5,
    summaryTh: 'บทสรุปปิดจุดบอดที่คนไทยเผลอแปลตรงตัวจากภาษาไทยมากที่สุด เช่น "ถึงแม้...แต่...", "เพราะ...ดังนั้น...", go to home, very like, have แทน there is และ boring vs bored',
    formulas: [
      { label: 'กฎห้ามใช้คำเชื่อม 2 ตัวซ้อน!', parts: ['ใช้ Although (ไม่มี but!)', '|', 'ใช้ Because (ไม่มี so!)', '|', 'เลือกใช้เพียง 1 ตัวใน 1 ประโยค'] },
      { label: 'กับดักคำไทยแปลตรงตัวที่เจอบ่อย', parts: ['go home (ไม่ใส่ to) · reach + สถานที่ (ไม่ใส่ to)', '|', 'really like (ไม่พูด very like) · too (มากเกินไป-แง่ลบ)', '|', 'There are (ไม่ขึ้นต้น Have...) · borrow from vs lend sb'] }
    ],
    tables: [
      {
        title: 'กับดักไวยากรณ์ชุดที่ 1: คำเชื่อมซ้อน · Have vs There · กริยา/อารมณ์',
        headers: ['แบบแปลตรงตัว (ผิด ❌)', 'แบบเจ้าของภาษา (ถูก ✅)', 'เหตุผลทางไวยากรณ์'],
        rows: [
          ['<b>Although</b> it rained, <b>but</b> I went.', '<b>Although</b> it rained, I went. (หรือ It rained, <b>but</b> I went.)', 'ห้ามใส่ Although กับ but พร้อมกันในประโยคเดียว'],
          ['<b>Because</b> I was sick, <b>so</b> I stayed home.', '<b>Because</b> I was sick, I stayed home.', 'ห้ามใส่ Because กับ so พร้อมกัน (ต้องเลือกแค่ 1 ตัว)'],
          ['I want to <b>go to home</b> now.', 'I want to <b>go home</b> now.', 'home, abroad, downtown, here, there เป็น Adverb ไม่ใส่ to'],
          ['I <b>very like</b> mango sticky rice!', 'I <b>really like</b> mango sticky rice! (หรือ ...like it <b>very much</b>.)', 'very ขยาย Adj/Adv ได้ แต่ขยาย Verb โดยตรงไม่ได้'],
          ['<b>Have many people</b> there.', '<b>There are</b> many people there.', 'ห้ามใช้ Have ลอยๆ ขึ้นต้นประโยคแทนคำว่า "มี" (ต้องใช้ There is/are)'],
          ['My friend <b>have</b> a cute dog.', 'My friend <b>has</b> a cute dog.', 'ประธานเอกพจน์บุรุษที่ 3 ต้องผัน have → has'],
          ['She <b>is agree</b> with me.', 'She <b>agrees</b> with me.', 'agree เป็นกริยาแท้ในตัว ไม่ต้องใส่ Verb to Be (is/am/are) นำหน้า']
        ]
      },
      {
        title: 'กับดักไวยากรณ์ชุดที่ 2: กริยาคู่สับสน · บุพบท · Collocations · -ed vs -ing',
        headers: ['เรื่องที่คนไทยสับสนบ่อย', 'แบบถูกธรรมชาติ (ถูก ✅) vs จุดที่ห้ามพูด (❌)', 'คำอธิบายสั้นๆ'],
        rows: [
          ['<b>borrow</b> vs <b>lend</b> (ยืม vs ให้ยืม)', 'Can you <b>lend me</b> your pen? / Can I <b>borrow</b> your pen <b>from</b> you? (❌ borrow you)', '<b>borrow sth from sb</b> (ขอยืมมา) · <b>lend sb sth</b> (ให้เขายืมไป)'],
          ['<b>reach</b> vs <b>arrive</b> vs <b>get to</b>', '<b>reach</b> the office · <b>arrive at</b> the airport / <b>in</b> Bangkok (❌ arrive to / reach to)', '<b>reach + สถานที่เลย</b> (ไม่มี to) · <b>arrive at</b> (จุด) / <b>in</b> (เมือง)'],
          ['<b>say</b> / <b>tell</b> / <b>explain</b> / <b>suggest</b>', '<b>explain the rule to me</b> · <b>suggest going</b> (❌ explain me / suggest me to go)', 'explain/say ต้องมี <b>to + คน</b> · suggest + <b>V-ing</b> (หรือ that + S + V)'],
          ['<b>too</b> vs <b>very</b> (เกินไป vs มาก)', 'The coffee is <b>too</b> hot to drink. (❌ very hot to drink)', '<b>too</b> = มากเกินไปจนเกิดปัญหา (แง่ลบ) · <b>very</b> = มากทั่วไป'],
          ['<b>Collocations</b> แปลตรงตัวจากไทย', '<b>turn on/off</b> the light · <b>take</b> medicine · <b>make</b> a mistake (❌ open light/eat medicine)', 'เครื่องใช้ไฟฟ้าใช้ <b>turn on/off</b> · กินยาใช้ <b>take</b> · ทำผิดใช้ <b>make</b>'],
          ['<b>Adjective -ed</b> vs <b>-ing</b>', 'I am <b>bored</b>. (รู้สึกเบื่อ) · The movie is <b>boring</b>. (น่าเบื่อ) (❌ I am boring)', '<b>-ed</b> = ความรู้สึกของคน · <b>-ing</b> = ลักษณะของสิ่งนั้น/คนนั้น']
        ]
      }
    ],
    examples: [
      { en: 'Although the test was challenging, I passed on my first try.', th: 'ถึงแม้ข้อสอบจะท้าทาย แต่ฉันก็สอบผ่านในครั้งแรกเลย', focus: 'ภาษาไทยพูด "ถึงแม้...แต่..." แต่ภาษาอังกฤษห้ามมี but!' },
      { en: 'I really enjoy practicing English before going home.', th: 'ฉันชอบฝึกภาษาอังกฤษมากก่อนกลับบ้าน', focus: 'วาง really หน้า verb · go home ไม่ใส่ to' },
      { en: 'Please reply to this message as soon as you arrive in Bangkok.', th: 'กรุณาตอบกลับข้อความนี้ทันทีที่คุณมาถึงกรุงเทพฯ นะ', focus: 'reply to + ข้อความ · arrive in (เมือง) ห้ามใช้ arrive to!' }
    ],
    mistakes: [
      { wrong: 'Because the traffic was heavy, so we arrived late.', right: 'Because the traffic was heavy, we arrived late.', whyTh: 'คนไทยพูด "เพราะ...ดังนั้น..." แต่ในภาษาอังกฤษ Because กับ so อยู่ร่วมประโยคเดียวกันไม่ได้' },
      { wrong: 'I very enjoy watching English movies.', right: 'I really enjoy watching English movies.', whyTh: 'ห้ามวาง very หน้ากริยาแท้ (enjoy/like/love) ต้องใช้ really หน้ากริยา หรือ very much ท้ายประโยค' },
      { wrong: 'What time will you arrive to the airport?', right: 'What time will you arrive at the airport?', whyTh: 'arrive ห้ามใช้กับ to เด็ดขาด (เมือง/ประเทศใช้ in · อาคาร/สนามบิน/จุดนัดใช้ at)' }
    ],
    exercises: [
      {
        type: 'cloze',
        promptTh: 'หลีกเลี่ยงกับดัก "Although ... but ..." ที่คนไทยเผลอแปลตรงตัว',
        sentence: 'Although the grammar rules seemed long at first, ___ very easy to remember.',
        options: ['but they were', 'they were', 'so they were', 'and they were'],
        answerIndex: 1,
        explanationTh: 'ขึ้นต้นด้วย Although แล้ว ส่วนหลังต้องตามด้วยประโยคหลักเลย (they were...) ห้ามใส่ but!'
      },
      {
        type: 'cloze',
        promptTh: 'แก้ไขวลี "very like / very love" ให้เป็นภาษาอังกฤษที่ถูกต้อง',
        sentence: 'I ___ spicy papaya salad whenever I visit Thailand.',
        options: ['very like', 'really like', 'like very', 'am very like'],
        answerIndex: 1,
        explanationTh: 'very ใช้ขยายกริยาแท้ (like) โดยตรงไม่ได้ ต้องใช้ really like หรือ like ... very much'
      },
      {
        type: 'cloze',
        promptTh: 'เลือก Preposition หลังคำว่า arrive (ห้ามใช้ arrive to!)',
        sentence: 'Our flight is scheduled to arrive ___ Suvarnabhumi Airport at 8 a.m.',
        options: ['to', 'at', 'on', 'into'],
        answerIndex: 1,
        explanationTh: 'สนามบิน (airport) เป็นจุดสถานที่เฉพาะ ใช้ arrive at (ส่วนเมือง/ประเทศใช้ arrive in)'
      },
      {
        type: 'cloze',
        promptTh: 'แก้ไข "I am agree" ที่คนไทยติดพูดกันบ่อย',
        sentence: 'Your suggestion makes total sense, so I completely ___ with you.',
        options: ['am agree', 'agree', 'am agreed', 'agreeing'],
        answerIndex: 1,
        explanationTh: 'agree เป็นคำกริยาแท้ แปลว่า "เห็นด้วย" อยู่แล้ว ไม่ต้องใส่ Verb to Be (am) ข้างหน้า → I completely agree'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้ใช้ go home (ไม่ใส่ to) และ Because (ไม่มี so) ได้ถูกต้อง',
        tokens: ['Because', 'it', 'was', 'getting', 'dark,', 'we', 'decided', 'to', 'go', 'home.'],
        explanationTh: 'ใช้ Because เพียงตัวเดียว (ไม่มี so) และ go home ไม่ใส่ to คั่นกลาง'
      },
      {
        type: 'order',
        promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ reply to และ reach (ไม่ใส่ to) ได้ถูกต้อง',
        tokens: ['Please', 'reply', 'to', 'my', 'email', 'when', 'you', 'reach', 'the', 'office.'],
        explanationTh: 'reply to (ตอบกลับอีเมล) และ reach + สถานที่โดยตรง (ไม่มี to)'
      },
      {
        type: 'error',
        promptTh: 'แตะคำเชื่อมที่ซ้อนเกินในประโยค Because...so แล้วเลือกตัวแก้',
        tokens: ['Because', 'his', 'alarm', 'did', 'not', 'ring,', 'so he', 'overslept.'],
        errorIndex: 6,
        corrections: ['he', 'therefore he', 'but he'],
        correctOptionIndex: 0,
        explanationTh: 'มี Because อยู่ข้างหน้าแล้ว ห้ามมี so นำหน้าประโยคผลลัพธ์ → ใช้แค่ he overslept'
      },
      {
        type: 'error',
        promptTh: 'แตะจุดผิดที่ใส่ to หน้าคำว่า home / abroad แล้วเลือกตัวแก้',
        tokens: ['After', 'finishing', 'this', 'lesson,', 'I', 'will', 'go', 'to home.'],
        errorIndex: 7,
        corrections: ['home.', 'at home.', 'in home.'],
        correctOptionIndex: 0,
        explanationTh: 'home ในความหมาย "กลับบ้าน" ทำหน้าที่เป็น Adverb of Place จึงห้ามใส่ to (พูดว่า go home)'
      },
      {
        type: 'transform',
        promptTh: 'แก้ไขประโยคสไตล์ไทย "Have many good restaurants in this area, and I very like them."',
        sentence: 'ข้อใดแก้จุดผิดทั้ง 2 จุดในประโยคนี้ได้ถูกต้องสมบูรณ์?',
        options: [
          'There are many good restaurants in this area, and I really like them.',
          'There has many good restaurants in this area, and I really like them.',
          'There are many good restaurants in this area, and I am very like them.',
          'It has many good restaurants in this area, and I very much like them.'
        ],
        answerIndex: 0,
        explanationTh: 'ใช้ There are แทนคำว่า "มี" สำหรับนามพหูพจน์ และใช้ really like แทน very like'
      },
      {
        type: 'cloze',
        promptTh: 'แยกการใช้ borrow (ขอยืมมา) กับ lend (ให้คนอื่นยืมไป)',
        sentence: 'Could you ___ me your pen for a moment? I left mine at home.',
        options: ['borrow', 'lend', 'borrow to', 'lend from'],
        answerIndex: 1,
        explanationTh: 'คนไทยชอบพูดว่า "Can I borrow you?" ซึ่งผิด! ถ้าขอให้ "คุณให้ฉันยืม" ใช้ Could you lend me... (หรือ Can I borrow your pen?)'
      },
      {
        type: 'cloze',
        promptTh: 'แยก Adjective ลงท้าย -ed (ความรู้สึกของคน) vs -ing (ลักษณะที่น่า...)',
        sentence: 'After watching that three-hour documentary on paint drying, all the students felt ___.',
        options: ['boring', 'bored', 'bore', 'to bore'],
        answerIndex: 1,
        explanationTh: 'บอกความ "รู้สึก" ของคน (the students felt...) ต้องใช้ Adjective ลงท้าย -ed → bored (ส่วน boring แปลว่า "น่าเบื่อ")'
      },
      {
        type: 'cloze',
        promptTh: 'แก้ Collocation ที่คนไทยเผลอแปลตรงตัว ("เปิด/ปิดไฟ ปิดแอร์")',
        sentence: 'Don’t forget to ___ the air conditioner before leaving the meeting room.',
        options: ['close', 'shut out', 'turn off', 'open off'],
        answerIndex: 2,
        explanationTh: 'ภาษาไทยพูด "ปิดแอร์/ปิดไฟ" แต่ภาษาอังกฤษห้ามใช้ close กับเครื่องใช้ไฟฟ้าหรือไฟ ต้องใช้ turn off / switch off'
      }
    ]
  }
];
