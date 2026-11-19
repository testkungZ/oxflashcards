/* =========================================================
 * Oxflashcards Grammar Curriculum 2.0 (Zero to Mastery Upgrade)
 * - Adds 7 bridge lessons (30 -> 37 lessons) preserving g01-g30 IDs
 * - Adds deep Thai concept explanations, step-by-step guides,
 *   compare boxes, quick checklists, and extra examples/mistakes
 *   across all 37 lessons.
 * ========================================================= */

const GRAMMAR_V2_NEW_LESSONS = [];
const GRAMMAR_V2_ENRICHMENTS = {};

/* ===================== PHASE 1 NEW LESSONS (g02b, g06b) ===================== */
GRAMMAR_V2_NEW_LESSONS.push(
  {
    id: 'g02b',
    afterId: 'g02',
    phase: 'phase1',
    level: 'A0–A2',
    titleTh: 'คำชี้เฉพาะ & คำบอกปริมาณ (Demonstratives & Quantifiers)',
    titleEn: 'Demonstratives & Quantifiers',
    estMinutes: 5,
    summaryTh: 'ชี้สิ่งของใกล้-ไกลด้วย this / that / these / those และเลือกคำบอกปริมาณ (some, any, much, many, a few, a little, a lot of) ให้ตรงกับคำนามนับได้และนับไม่ได้',
    conceptTh: 'ในภาษาไทยเรามักพูดแค่ "อันนี้ / อันนั้น" หรือ "เยอะ / นิดหน่อย" ใช้ได้กับทุกคำนาม แต่ในภาษาอังกฤษต้องเช็ก 2 อย่างเสมอ: (1) อยู่ใกล้หรือไกล และมี 1 ชิ้นหรือหลายชิ้น (this/that/these/those) และ (2) คำนามนั้น "นับเป็นชิ้นได้" หรือ "นับไม่ได้" เช่น water, money, time, information เพราะคำบอกปริมาณอย่าง many/few ใช้กับนามนับได้พหูพจน์เท่านั้น ส่วน much/little ใช้กับนามนับไม่ได้เท่านั้น',
    stepGuide: [
      { step: 1, titleTh: 'ชี้สิ่งของ: เช็ก "ระยะทาง + จำนวน"', detailTh: 'ใกล้+1 ชิ้น = **this**, ไกล+1 ชิ้น = **that**, ใกล้+หลายชิ้น = **these**, ไกล+หลายชิ้น = **those**', miniEx: 'This cup is hot. / Those shoes are expensive.' },
      { step: 2, titleTh: 'บอกปริมาณ: เช็กก่อนว่าคำนาม "นับได้พหูพจน์" หรือ "นับไม่ได้"', detailTh: 'ถ้านามเติม -s ได้ (books, people, chairs) ใช้ **many / a few / few** ถ้านับไม่ได้ (water, advice, luggage, time) ใช้ **much / a little / little**', miniEx: 'many emails (นับได้) vs much time (นับไม่ได้)' },
      { step: 3, titleTh: 'แยก a few / a little (พอมีบ้าง +) vs few / little (แทบไม่มี −)', detailTh: 'มี **a** นำหน้าให้ความรู้สึกแง่บวกว่า "ยังมีอยู่บ้างพอใช้ได้" แต่ถ้าไม่มี a แปลว่า "น้อยมากจนแทบไม่พอ"', miniEx: 'I have **a little** money. (พอมีอยู่บ้าง) vs I have **little** money. (แทบไม่มีเงินเลย)' },
      { step: 4, titleTh: 'ใช้ a lot of / lots of เป็นตัวช่วยปลอดภัยในประโยคบอกเล่า', detailTh: '**a lot of** ใช้ได้ทั้งนามนับได้พหูพจน์และนามนับไม่ได้ ส่วน **some** ใช้ในบอกเล่า/ชวนเสนอ และ **any** ใช้ในปฏิเสธ/คำถามทั่วไป', miniEx: 'We have a lot of work. / Do you have any questions?' }
    ],
    formulas: [
      { label: 'คำชี้เฉพาะ 4 ตัว (Demonstratives)', parts: ['ใกล้: this (เอกพจน์) / these (พหูพจน์)', 'ไกล: that (เอกพจน์) / those (พหูพจน์)'] },
      { label: 'สูตรจับคู่คำบอกปริมาณ', parts: ['many / a few + นามนับได้พหูพจน์', 'much / a little + นามนับไม่ได้', 'a lot of / some / any + ใช้ได้ทั้งคู่'] }
    ],
    tables: [
      {
        title: 'ตารางสรุปคำบอกปริมาณ (Quantifiers) ครบทุกกลุ่ม',
        headers: ['คำบอกปริมาณ', 'ใช้กับคำนาม', 'ความหมาย / โทนประโยค', 'ตัวอย่าง'],
        rows: [
          ['many / too many', 'นับได้พหูพจน์', 'มาก / มากเกินไป', 'There are many students here.'],
          ['much / too much', 'นับไม่ได้', 'มาก (นิยมใช้ในปฏิเสธ/คำถาม)', 'We do not have much time.'],
          ['a lot of / lots of', 'ได้ทั้ง 2 แบบ', 'เยอะมาก (ใช้ในบอกเล่า)', 'She drinks a lot of water.'],
          ['a few / few', 'นับได้พหูพจน์', 'พอมีบ้าง (+) / แทบไม่มี (−)', 'I have a few close friends.'],
          ['a little / little', 'นับไม่ได้', 'พอมีบ้าง (+) / แทบไม่มี (−)', 'Add a little sugar to the tea.'],
          ['some / any', 'ได้ทั้ง 2 แบบ', 'some (บอกเล่า/เสนอ) · any (ปฏิเสธ/ถาม)', 'Would you like some coffee?']
        ]
      }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ อย่าจำสลับ: a few vs few และ much vs many',
      items: [
        { label: 'a few / a little (มี a = แง่บวก)', descTh: 'ยังมีอยู่บ้างเล็กน้อย พอใช้ได้ ไม่ได้แย่', example: 'We still have **a few** tickets left. (ยังพอมีตั๋วเหลืออยู่บ้าง)' },
        { label: 'few / little (ไม่มี a = แง่ลบ)', descTh: 'มีน้อยมาก แทบจะไม่มีเลย ไม่เพียงพอ', example: 'He has **little** patience for delays. (เขาแทบไม่มีความอดทนเลย)' },
        { label: 'many vs much', descTh: '**many** ตามด้วยนามพหูพจน์ (เติม -s) ส่วน **much** ตามด้วยนามนับไม่ได้ (ไม่เติม -s)', example: 'How **many** bags? vs How **much** luggage?' }
      ]
    },
    examples: [
      { en: 'These apples look much fresher than those ones on the top shelf.', th: 'แอปเปิลพวกนี้ดูสดกว่าพวกนั้นบนชั้นบนมาก', focus: 'these (ใกล้+พหูพจน์) / those (ไกล+พหูพจน์)' },
      { en: 'How much luggage are you checking in today?', th: 'วันนี้คุณจะโหลดกระเป๋าสัมภาระกี่ใบ (ปริมาณเท่าไร)', focus: 'luggage นับไม่ได้ → ใช้ How much' },
      { en: 'We only have a few minutes before the boarding gate closes.', th: 'เรายังพอมีเวลาอีกไม่กี่นาทีก่อนประตูขึ้นเครื่องจะปิด', focus: 'minutes นับได้พหูพจน์ → ใช้ a few' },
      { en: 'There is very little milk left in the fridge, so I will buy more.', th: 'มีนมเหลืออยู่ในตู้น้อยมาก (แทบไม่พอ) ฉันจึงจะไปซื้อเพิ่ม', focus: 'little + นามนับไม่ได้ = น้อยมากจนไม่พอ' },
      { en: 'Would you like some green tea while you wait?', th: 'คุณอยากรับชาเขียวสักหน่อยระหว่างรอไหมครับ', focus: 'ประโยคเชิญชวน/เสนอให้ ใช้ some แทน any' }
    ],
    mistakes: [
      { wrong: 'This shoes are too tight for me.', right: 'These shoes are too tight for me.', whyTh: 'shoes เป็นคำนามพหูพจน์ (รองเท้าเป็นคู่) ต้องใช้ **These** ไม่ใช่ This' },
      { wrong: 'She gave me many useful informations.', right: 'She gave me a lot of useful information.', whyTh: 'information เป็นคำนามนับไม่ได้ ห้ามเติม -s และห้ามใช้ many' },
      { wrong: 'I do not have some cash in my wallet.', right: 'I do not have any cash in my wallet.', whyTh: 'ในประโยคปฏิเสธที่มี not ต้องใช้ **any** ไม่ใช่ some' },
      { wrong: 'We need a few sugar for this cake recipe.', right: 'We need a little sugar for this cake recipe.', whyTh: 'sugar เป็นคำนามนับไม่ได้ ต้องใช้ **a little** ไม่ใช่ a few' }
    ],
    quickChecklist: [
      'ใกล้-ไกล + เอกพจน์/พหูพจน์: **this/that** (+ นามเอกพจน์) · **these/those** (+ นามพหูพจน์)',
      'เห็นคำนามนับไม่ได้ยอดฮิต (`information, advice, luggage, furniture, traffic, money, time`) → ใช้ **much / a little / a lot of** และห้ามเติม -s',
      'ประโยคบอกเล่าใช้ **some** / ปฏิเสธ-คำถามใช้ **any** / เชิญชวน-ขอร้องสุภาพ (`Would you like...?`) ใช้ **some**'
    ],
    exercises: [
      { type: 'cloze', promptTh: 'เลือกคำชี้เฉพาะให้ตรงกับคำนามพหูพจน์ที่อยู่ใกล้ตัว', sentence: '___ headphones on my desk belong to my brother.', options: ['This', 'That', 'These', 'It'], answerIndex: 2, explanationTh: 'headphones เป็นพหูพจน์และอยู่ใกล้ตัว (on my desk) จึงใช้ These' },
      { type: 'cloze', promptTh: 'เลือกคำบอกปริมาณให้ตรงกับคำนามนับไม่ได้', sentence: 'How ___ traffic is there on Sukhumvit Road right now?', options: ['many', 'much', 'few', 'several'], answerIndex: 1, explanationTh: 'traffic (การจราจร) เป็นคำนามนับไม่ได้ จึงใช้ How much' },
      { type: 'cloze', promptTh: 'เลือกคำบอกปริมาณที่แปลว่า "ยังมีเหลืออยู่บ้างเล็กน้อย" กับนามพหูพจน์', sentence: 'Do not worry; we still have ___ seats available in the front row.', options: ['a little', 'much', 'a few', 'little'], answerIndex: 2, explanationTh: 'seats เป็นคำนามนับได้พหูพจน์ และบริบทแง่บวก (ไม่ต้องกังวล) จึงใช้ a few' },
      { type: 'cloze', promptTh: 'เลือกคำที่ใช้ในประโยคปฏิเสธ', sentence: 'Unfortunately, there is not ___ space left in the parking lot.', options: ['some', 'many', 'any', 'a few'], answerIndex: 2, explanationTh: 'ประโยคปฏิเสธ (is not) + นามนับไม่ได้ (space) ใช้ any' },
      { type: 'cloze', promptTh: 'เลือกคำที่ใช้ในประโยคเชิญชวนอย่างสุภาพ', sentence: 'Would you like ___ orange juice with your breakfast?', options: ['any', 'many', 'some', 'few'], answerIndex: 2, explanationTh: 'ประโยคเสนอ/เชิญชวน (Would you like...?) ใช้ some' },
      { type: 'cloze', promptTh: 'เลือกคำบอกปริมาณที่สื่อความหมายแง่ลบว่า "แทบไม่มีเลย"', sentence: 'He speaks very ___ Japanese, so he needed a translator in Kyoto.', options: ['a few', 'little', 'many', 'few'], answerIndex: 1, explanationTh: 'ภาษา (Japanese) เป็นนามนับไม่ได้ และบริบทบอกว่าต้องใช้ล่าม (แทบพูดไม่ได้เลย) จึงใช้ little' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคถามปริมาณที่ถูกต้อง', tokens: ['How', 'many', 'cups', 'of', 'coffee', 'do', 'you', 'drink?'], explanationTh: 'cups เป็นนามนับได้พหูพจน์ จึงใช้ How many cups of coffee + do you drink?' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคบอกปริมาณที่ถูกต้อง', tokens: ['Those', 'wooden', 'chairs', 'cost', 'a', 'lot', 'of', 'money.'], explanationTh: 'Those (ไกล+พหูพจน์) + wooden chairs + cost + a lot of money' },
      { type: 'error', promptTh: 'แตะจุดที่ใช้คำชี้เฉพาะผิด แล้วเลือกคำแก้ไขที่ถูกต้อง', tokens: ['That', 'new', 'employees', 'work', 'in', 'our', 'department.'], errorIndex: 0, corrections: ['Those', 'This', 'Much'], correctOptionIndex: 0, explanationTh: 'employees เป็นคำนามพหูพจน์ จึงต้องใช้ Those แทน That' },
      { type: 'error', promptTh: 'แตะจุดที่ใช้คำบอกปริมาณผิด แล้วเลือกคำแก้ไขที่ถูกต้อง', tokens: ['She', 'gave', 'me', 'a', 'few', 'useful', 'advice.'], errorIndex: 4, corrections: ['little', 'many', 'several'], correctOptionIndex: 0, explanationTh: 'advice เป็นคำนามนับไม่ได้ ต้องใช้ a little แทน a few' },
      { type: 'transform', promptTh: 'ข้อใดใช้คำบอกปริมาณกับคำนามนับไม่ได้ได้ถูกต้อง', sentence: 'เลือกประโยคที่ถูกหลักไวยากรณ์ทั้งหมด', options: ['There are too much noise outside.', 'We have a little time before the train leaves.', 'He bought a few furniture for his condo.', 'How many money did the ticket cost?'], answerIndex: 1, spokenEn: 'We have a little time before the train leaves.', explanationTh: 'time เป็นนามนับไม่ได้ ใช้ a little ถูกต้อง ส่วน noise/furniture/money นับไม่ได้ทั้งหมดจึงใช้ are/a few/many ไม่ได้' },
      { type: 'transform', promptTh: 'ประโยคใดหมายความว่า "เธอแทบไม่มีเพื่อนในเมืองนี้เลย (รู้สึกเหงา)"', sentence: 'เลือกประโยคที่สื่อความหมายแง่ลบถูกต้อง', options: ['She has a few friends in this city.', 'She has few friends in this city.', 'She has a little friends in this city.', 'She has much friends in this city.'], answerIndex: 1, spokenEn: 'She has few friends in this city.', explanationTh: 'few (ไม่มี a) + นามพหูพจน์ (friends) สื่อความหมายแง่ลบว่ามีน้อยมากจนแทบไม่มี' }
    ]
  },
  {
    id: 'g06b',
    afterId: 'g06',
    phase: 'phase1',
    level: 'A0–A2',
    titleTh: 'การตั้งคำถามครบทุกรูปแบบ (Yes/No & Wh-Questions)',
    titleEn: 'Yes/No & Wh-Questions',
    estMinutes: 5,
    summaryTh: 'สร้างประโยคคำถามภาษาอังกฤษได้ถูกต้องไม่เรียงคำผิดแบบแปลไทย ทั้งคำถาม Yes/No, กลุ่ม Wh- (What/Where/When/Why/Who/Which/Whose), กลุ่ม How และ Subject Questions',
    conceptTh: 'คนไทยมักตั้งคำถามผิดเพราะแปลตรงตัวจากไทย เช่น "คุณอาศัยอยู่ที่ไหน?" → "You live where? ❌" แต่ในภาษาอังกฤษกฎเหล็กของการตั้งคำถามคือ **ต้องดึงกริยาช่วย (do/does/did, is/am/are, can/will) มาวางไว้หน้าประธานเสมอ** ยกเว้นกรณีเดียวคือ **Subject Question** (เมื่อคำว่า Who หรือ What ทำหน้าที่เป็นตัวประธานเอง เช่น Who called you?) ซึ่งไม่ต้องใส่ do/does/did',
    stepGuide: [
      { step: 1, titleTh: 'คำถาม Yes/No: ย้ายกริยาช่วยมาหน้าสุด', detailTh: 'ถ้าประโยคมี **be / can / will / have (Perfect)** ให้ย้ายมาหน้าประธานได้เลย แต่ถ้ามีกริยาแท้ธรรมดา (like, work, go) ให้เติม **Do / Does / Did** มาช่วยหน้าสุด แล้วคืนรูปกริยาแท้เป็น V1', miniEx: 'You like tea. → **Do** you like tea? / She went home. → **Did** she **go** home?' },
      { step: 2, titleTh: 'คำถาม Wh-: วาง Wh- ไว้หน้าคำถาม Yes/No', detailTh: 'จำสูตรทอง **Wh- + กริยาช่วย (Aux) + ประธาน + กริยาหลัก** เช่น Where + do + you + work?', miniEx: 'What **does** your father **do**? / Why **were** they late?' },
      { step: 3, titleTh: 'รู้จักกลุ่ม How 6 ตัวที่ใช้บ่อยในชีวิตจริง', detailTh: '**How much** (ราคา/ปริมาณนับไม่ได้), **How many** (จำนวนนับได้), **How long** (นานแค่ไหน), **How often** (บ่อยแค่ไหน), **How far** (ไกลแค่ไหน), **How old** (อายุเท่าไร)', miniEx: '**How long** does it take to get to the airport?' },
      { step: 4, titleTh: 'ระวัง Subject Question (ถามหาตัวผู้กระทำ)', detailTh: 'ถ้าอยากรู้ว่า "ใครเป็นคนทำ" หรือ "อะไรเกิดขึ้น" โดย Who/What เป็นประธานเอง **ห้ามใส่ do/does/did** ให้ตามด้วยกริยาแท้ผันตาม Tense ได้เลย', miniEx: '**Who broke** the window? (ใครทำกระจกแตก?) เทียบกับ **Who did you call?** (คุณโทรหาใคร?)' }
    ],
    formulas: [
      { label: 'สูตรคำถาม Wh- ทั่วไป (Object Question)', parts: ['Wh- Word', '+', 'Aux (do/does/did/be/modal)', '+', 'Subject', '+', 'Main Verb (V1/V-ing)?'] },
      { label: 'สูตร Subject Question (ถามหาตัวประธาน)', parts: ['Who / What / Which + Noun', '+', 'Verb (ผันตาม Tense เลย)', '+', 'Object?'] }
    ],
    tables: [
      {
        title: 'ตารางเทียบคำถาม Wh- & How ที่ใช้จริงบ่อยที่สุด',
        headers: ['คำถาม', 'ใช้ถามเรื่อง', 'ตัวอย่างประโยค', 'คำแปล'],
        rows: [
          ['What / Which', 'สิ่งของทั่วไป / เลือกจากตัวเลือกจำกัด', 'Which train goes to Ayutthaya?', 'รถไฟขบวนไหนไปอยุธยา?'],
          ['Who / Whose', 'บุคคล / ความเป็นเจ้าของของใคร', 'Whose umbrella is this?', 'ร่มคันนี้เป็นของใคร?'],
          ['Where / When', 'สถานที่ / เวลา', 'When did the meeting start?', 'การประชุมเริ่มเมื่อไร?'],
          ['Why', 'เหตุผล', 'Why are you smiling?', 'ทำไมคุณถึงยิ้มอยู่?'],
          ['How often', 'ความถี่', 'How often do you exercise?', 'คุณออกกำลังกายบ่อยแค่ไหน?'],
          ['How long / How far', 'ระยะเวลา / ระยะทาง', 'How long have you lived here?', 'คุณอยู่ที่นี่มานานแค่ไหนแล้ว?']
        ]
      }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Object Question vs Subject Question',
      items: [
        { label: 'ถามหากรรม (ต้องมี do/does/did)', descTh: 'มี "ประธาน" อยู่ในประโยคแล้ว เราอยากรู้ว่าประธานทำกับใคร/อะไร', example: 'Who **did you meet** yesterday? (เมื่อวานคุณไปเจอใครมา?)' },
        { label: 'ถามหาประธาน (ไม่ต้องมี do/does/did)', descTh: 'ไม่รู้ว่าใครคือผู้กระทำ คำว่า Who/What จึงเป็นประธานเองเลย', example: 'Who **met** you at the station? (ใครมารับคุณที่สถานี?)' }
      ]
    },
    examples: [
      { en: 'Where do you usually have lunch on weekdays?', th: 'วันธรรมดาปกติคุณกินมื้อเที่ยงที่ไหน', focus: 'Wh + do + S + V1' },
      { en: 'What time does the last skytrain leave?', th: 'รถไฟฟ้าขบวนสุดท้ายออกกี่โมง', focus: 'ประธานเอกพจน์ (last skytrain) → does + V1 (leave)' },
      { en: 'Did your team finish the report before the deadline?', th: 'ทีมของคุณทำรายงานเสร็จก่อนกำหนดไหม', focus: 'อดีต → Did + S + V1 (finish ไม่เติม -ed)' },
      { en: 'How often does the bus come to this stop?', th: 'รถเมล์มาป้ายนี้บ่อยแค่ไหน', focus: 'How often ถามความถี่' },
      { en: 'Who sent this package to our office?', th: 'ใครเป็นคนส่งพัสดุนี้มาที่ออฟฟิศเรา', focus: 'Subject Question ไม่ต้องใส่ did' }
    ],
    mistakes: [
      { wrong: 'Where you live in Bangkok?', right: 'Where do you live in Bangkok?', whyTh: 'คำถามที่มีกริยาแท้ (live) ต้องใส่กริยาช่วย **do** ไว้หน้าประธานเสมอ' },
      { wrong: 'When did she arrived at the hotel?', right: 'When did she arrive at the hotel?', whyTh: 'มี **did** เป็นอดีตแล้ว กริยาแท้ต้องกลับเป็น V1 คือ **arrive** ไม่เติม -ed ซ้ำ' },
      { wrong: 'Who did design this mobile app?', right: 'Who designed this mobile app?', whyTh: 'ถามหาตัวประธาน (ใครออกแบบ) เป็น Subject Question ไม่ต้องใส่ did ให้ใช้ V2 (designed) เลย' },
      { wrong: 'How much people attended the seminar?', right: 'How many people attended the seminar?', whyTh: 'people เป็นคำนามนับได้พหูพจน์ ต้องใช้ **How many** ไม่ใช่ How much' }
    ],
    quickChecklist: [
      'คำถามทั่วไปต้องเรียง **Wh- + กริยาช่วย + ประธาน + กริยาหลัก** เสมอ',
      'หลัง **do / does / did** กริยาหลักต้องเป็นรูปฐาน **V1** ห้ามเติม -s หรือ -ed',
      'ถามหาตัวผู้กระทำ (**Who / What + V**) ไม่ต้องใส่ do/does/did (เช่น `Who called you?`)',
      '**How many** (+ นามพหูพจน์) vs **How much** (+ นามนับไม่ได้/ราคา) · **How long** (เวลา) vs **How often** (ความถี่)'
    ],
    exercises: [
      { type: 'cloze', promptTh: 'เลือกกริยาช่วยและกริยาหลักที่ถูกต้องในประโยคคำถามปัจจุบัน', sentence: 'What time ___ the museum ___ on Sundays?', options: ['do / opens', 'does / open', 'is / open', 'does / opens'], answerIndex: 1, explanationTh: 'ประธาน the museum เป็นเอกพจน์ ใช้ does + กริยารูปฐาน V1 (open)' },
      { type: 'cloze', promptTh: 'เลือกคำถามกลุ่ม How ให้ตรงกับความหมาย (ถามความถี่)', sentence: '___ do you back up your laptop files? — Once a week.', options: ['How long', 'How far', 'How often', 'How much'], answerIndex: 2, explanationTh: 'คำตอบบอกความถี่ (Once a week) จึงต้องถามด้วย How often' },
      { type: 'cloze', promptTh: 'เลือกคำถามแสดงความเป็นเจ้าของ', sentence: '___ notebook was left on the conference table?', options: ['Who', 'Whom', 'Whose', 'Which of'], answerIndex: 2, explanationTh: 'Whose + คำนาม (notebook) แปลว่า "สมุดของใคร"' },
      { type: 'cloze', promptTh: 'เลือกรูปประโยคคำถามอดีตที่ถูกต้อง', sentence: 'Why ___ to cancel the outdoor concert yesterday?', options: ['they decided', 'did they decide', 'did they decided', 'were they decide'], answerIndex: 1, explanationTh: 'คำถามอดีตใช้ Wh- + did + ประธาน + V1 คือ did they decide' },
      { type: 'cloze', promptTh: 'เลือกรูป Subject Question ที่ถูกต้อง (ถามหาตัวผู้กระทำ)', sentence: '___ you learn how to code in Python?', options: ['Who did help', 'Who helped', 'Who was help', 'Who helping'], answerIndex: 1, explanationTh: 'Who เป็นประธานผู้กระทำเอง (ใครช่วยคุณ?) ไม่ต้องใส่ did ใช้ Who helped เลย' },
      { type: 'cloze', promptTh: 'เลือกคำถามกลุ่ม How ให้ตรงกับคำตอบเรื่องระยะเวลา', sentence: '___ did it take you to finish the marathon? — Four hours.', options: ['How far', 'How often', 'How long', 'How many'], answerIndex: 2, explanationTh: 'คำตอบเป็นระยะเวลา (Four hours) ใช้ How long' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคคำถาม Wh- ที่ถูกต้อง', tokens: ['Where', 'did', 'you', 'buy', 'that', 'leather', 'jacket?'], explanationTh: 'เรียงตามสูตร Wh- (Where) + Aux (did) + Subject (you) + V1 (buy) + Object' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคคำถามกลุ่ม How ที่ถูกต้อง', tokens: ['How', 'many', 'languages', 'can', 'your', 'manager', 'speak?'], explanationTh: 'How many + นามพหูพจน์ (languages) + Modal (can) + Subject (your manager) + V1 (speak)' },
      { type: 'error', promptTh: 'แตะจุดที่ผิดในประโยคคำถาม แล้วเลือกคำแก้ไข', tokens: ['Does', 'your', 'sister', 'works', 'at', 'the', 'hospital?'], errorIndex: 3, corrections: ['work', 'worked', 'working'], correctOptionIndex: 0, explanationTh: 'มีกริยาช่วย Does แล้ว กริยาแท้ต้องกลับเป็นรูปฐาน V1 คือ work ไม่เติม -s' },
      { type: 'error', promptTh: 'แตะจุดที่ผิดในคำถาม แล้วเลือกคำแก้ไข', tokens: ['How', 'much', 'tickets', 'do', 'we', 'need', 'tonight?'], errorIndex: 1, corrections: ['many', 'long', 'often'], correctOptionIndex: 0, explanationTh: 'tickets เป็นคำนามนับได้พหูพจน์ ต้องใช้ How many แทน How much' },
      { type: 'transform', promptTh: 'ข้อใดตั้งคำถามแบบ Subject Question (ถามว่าใครโทรมา) ได้ถูกต้อง', sentence: 'ต้องการถามว่า "ใครโทรหาคุณเมื่อคืนนี้?"', options: ['Who did call you last night?', 'Who called you last night?', 'Who was call you last night?', 'Whom called you last night?'], answerIndex: 1, spokenEn: 'Who called you last night?', explanationTh: 'Who ทำหน้าที่เป็นประธานของประโยค จึงไม่ต้องใช้ did ใช้ Who called you last night?' },
      { type: 'transform', promptTh: 'ข้อใดตั้งคำถามได้ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด', sentence: 'ต้องการถามว่า "ปกติเขาไปทำงานอย่างไร?"', options: ['How he goes to work usually?', 'How does he usually go to work?', 'How is he usually go to work?', 'How does he usually goes to work?'], answerIndex: 1, spokenEn: 'How does he usually go to work?', explanationTh: 'Wh- (How) + does + ประธาน (he) + adverb (usually) + V1 (go)' }
    ]
  }
);

/* ===================== PHASE 1 ENRICHMENTS (g01–g10) ===================== */
Object.assign(GRAMMAR_V2_ENRICHMENTS, {
  g01: {
    conceptTh: 'ภาษาอังกฤษจัดคำทุกคำตาม "หน้าที่ในประโยค" (8 ชนิดคำ) ต่างจากภาษาไทยที่คำเดียวอาจวางได้หลายที่โดยไม่เปลี่ยนรูป แต่ในภาษาอังกฤษคำรากเดียวกันมักเปลี่ยนท้ายคำตามหน้าที่ เช่น **decide (V.) → decision (N.) → decisive (Adj.) → decisively (Adv.)** ถ้าเรามองออกว่าช่องว่างต้องการคำชนิดไหน เราจะแต่งประโยคและทำข้อสอบได้แม่นขึ้นทันที',
    stepGuide: [
      { step: 1, titleTh: 'หาโครงสร้างหลัก ประธาน (N/Pron) + กริยา (V) ให้เจอก่อน', detailTh: 'ประโยคภาษาอังกฤษที่สมบูรณ์ต้องมีอย่างน้อย 1 ประธาน และ 1 กริยาแท้เสมอ', miniEx: '**The team** (N) **works** (V) hard.' },
      { step: 2, titleTh: 'เช็กคำขยาย: ขยายคำนามใช้ Adj / ขยายกริยาใช้ Adv', detailTh: 'วาง **Adjective** ไว้หน้าคำนาม หรือหลัง Verb to Be/Linking Verb ส่วน **Adverb** (มักลงท้าย -ly) ใช้ขยายกริยาหรือขยาย Adj', miniEx: 'a **careful** (Adj) driver vs drives **carefully** (Adv)' },
      { step: 3, titleTh: 'สังเกตคำเชื่อม: Preposition (+ นาม) vs Conjunction (+ ประโยค)', detailTh: '**in, on, at, for, with** ตามด้วยคำนาม ส่วน **and, but, because, although** เชื่อมประโยคหรือวลี', miniEx: '**in** the morning (Prep) vs **because** it rained (Conj)' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Adjective vs Adverb',
      items: [
        { label: 'Adjective (คำคุณศัพท์)', descTh: 'บอกลักษณะของ "คำนาม" วางหน้าคำนาม หรือหลัง is/am/are/feel/look/taste', example: 'The soup tastes **good**. / She is a **quick** learner.' },
        { label: 'Adverb (คำกริยาวิเศษณ์)', descTh: 'บอกวิธีทำของ "กริยา" (ทำอย่างไร) มักลงท้าย -ly', example: 'She learns **quickly**. / Listen **carefully**.' }
      ]
    },
    quickChecklist: [
      'หน้าคำนาม = **Adjective** (`a clear plan`) · ขยายกริยา = **Adverb** (`explain clearly`)',
      'หลัง Verb to Be / Linking Verb (`feel, seem, look, sound, taste`) = ใช้ **Adjective** เสมอ',
      'จำตัวย่อ **Preposition + Noun** และ **Conjunction + Sentence (S+V)**'
    ],
    extraExamples: [
      { en: 'The software update runs smoothly on older devices.', th: 'อัปเดตซอฟต์แวร์ทำงานได้อย่างลื่นไหลบนอุปกรณ์รุ่นเก่า', focus: 'smoothly (Adv) ขยายกริยา runs' }
    ],
    extraMistakes: [
      { wrong: 'He speaks English very fluent.', right: 'He speaks English very fluently.', whyTh: 'ขยายกริยา speaks ("พูดอย่างไร") ต้องใช้ Adverb คือ **fluently**' }
    ]
  },
  g02: {
    conceptTh: 'หัวใจของบทนี้มี 2 เรื่องที่คนไทยพลาดบ่อย: (1) ภาษาอังกฤษแยก **คำนามนับได้** (มีเอกพจน์/พหูพจน์ เติม -s ได้) กับ **คำนามนับไม่ได้** (ไม่มีรูปพหูพจน์ ห้ามใส่ a/an ห้ามเติม -s เช่น advice, information, furniture, luggage) และ (2) **คำสรรพนามเปลี่ยนรูปตามตำแหน่ง** เช่น I (ประธาน) / me (กรรม) / my (หน้าคำนาม) / mine (แทนของฉันไม่ต้องมีนามตาม)',
    stepGuide: [
      { step: 1, titleTh: 'เช็กชนิดคำนามก่อนเติม a/an หรือ -s', detailTh: 'นามนับได้เอกพจน์ห้ามปล่อยเปลือย ต้องมี a/an/the/my นำหน้า แต่นามนับไม่ได้ห้ามใส่ a/an และห้ามเติม -s', miniEx: 'a laptop / two laptops · ~~an advice~~ → some advice' },
      { step: 2, titleTh: 'เลือกช่องสรรพนามตามตำแหน่งในประโยค', detailTh: 'หน้ากริยา = Subject (`I, he, they`) · หลังกริยา/บุพบท = Object (`me, him, them`) · หน้าคำนาม = Possessive Adj (`my, their`) · ไม่มีนามตาม = Possessive Pron (`mine, theirs`)', miniEx: 'Give **it** to **me**. / That seat is **mine**.' },
      { step: 3, titleTh: 'ใช้ Reflexive Pronouns (-self/-selves) เมื่อประธานกับกรรมคือคนเดียวกัน', detailTh: 'เช่น ทำด้วยตัวเอง (`by myself`) หรือทำร้ายตัวเอง (`hurt himself`)', miniEx: 'She fixed the printer **herself**.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: my vs mine และ ’s ของเอกพจน์ vs พหูพจน์',
      items: [
        { label: 'my / your / their (+ ต้องมีคำนามตาม)', descTh: 'ทำหน้าที่ขยายคำนามที่ตามหลังทันที', example: 'This is **my** badge. / **Their** office is upstairs.' },
        { label: 'mine / yours / theirs (ไม่ต้องมีคำนามตาม)', descTh: 'แทนคำนามนั้นไปในตัวเลย', example: 'This badge is **mine**. / That car is **theirs**.' },
        { label: 'student’s vs students’', descTh: 'เอกพจน์เติม **’s** · พหูพจน์ลงท้าย s อยู่แล้วเติมแค่ **’**', example: 'one **student’s** bag vs ten **students’** bags' }
      ]
    },
    quickChecklist: [
      'นามนับไม่ได้ยอดฮิตที่ห้ามเติม -s: `information, advice, equipment, furniture, luggage, news, homework`',
      'หลังบุพบท (`for, with, between, to`) ต้องใช้รูปกรรมเสมอ (`between you and me` ไม่ใช่ `between you and I`)',
      'ไม่มีคำนามตามหลัง → ใช้ `mine / yours / his / hers / ours / theirs`'
    ],
    extraExamples: [
      { en: 'Please keep this secret strictly between you and me.', th: 'กรุณาเก็บความลับนี้ไว้แค่ระหว่างคุณกับฉันนะ', focus: 'หลังบุพบท between ต้องใช้กรรม me' }
    ],
    extraMistakes: [
      { wrong: 'This project is between you and I.', right: 'This project is between you and me.', whyTh: 'between เป็นบุพบท ต้องตามด้วยสรรพนามรูปกรรมคือ **me** ไม่ใช่ I' }
    ]
  },
  g03: {
    conceptTh: 'เครื่องหมายวรรคตอนและตัวพิมพ์ใหญ่ในภาษาอังกฤษไม่ได้มีไว้แค่สวยงาม แต่เปลี่ยนความหมายได้จริง โดยเฉพาะ **’s** ที่ย่อได้ถึง 3 แบบ (`is`, `has`, และ `แสดงความเป็นเจ้าของ`) และคู่สับสนตลอดกาลอย่าง **its vs it’s** กับ **your vs you’re** ที่ออกสอบบ่อยมาก',
    stepGuide: [
      { step: 1, titleTh: 'แยกความหมายของ ’s จากคำที่ตามหลัง', detailTh: 'ตามด้วย V-ing / Adj / นาม = **is** · ตามด้วย V3 (`gone, been, finished`) = **has** · ตามด้วยสิ่งของที่เป็นเจ้าของ = **แสดงความเป็นเจ้าของ**', miniEx: "He's working (is) · He's finished (has) · Tom's phone (ของ Tom)" },
      { step: 2, titleTh: 'เช็กคู่สับสนรูปย่อ vs แสดงความเป็นเจ้าของ', detailTh: 'ตัวที่มี **apostrophe (’)** คือรูปย่อของ 2 คำเสมอ (`it’s = it is`, `you’re = you are`, `they’re = they are`) ส่วนตัวที่ไม่มีคือคำแสดงความเป็นเจ้าของ (`its`, `your`, `their`)', miniEx: 'The dog wagged **its** tail. (ของมัน)' },
      { step: 3, titleTh: 'จำหมวดคำที่ต้องขึ้นต้นตัวพิมพ์ใหญ่เสมอ', detailTh: 'คำว่า **I**, ต้นประโยค, ชื่อคน/เมือง/ประเทศ, ภาษา/สัญชาติ (`Thai, English`), วันในสัปดาห์ (`Monday`), และเดือน (`January`)', miniEx: 'We speak **English** every **Monday** in **May**.' }
    ],
    compareBox: {
      titleTh: 'คู่สับสนยอดฮิตที่ห้ามสลับกัน',
      items: [
        { label: "it's vs its", descTh: '**it’s** = it is / it has · **its** = ของมัน (หน้าคำนาม)', example: '**It’s** raining. / The app lost **its** connection.' },
        { label: "you're vs your", descTh: "**you’re** = you are · **your** = ของคุณ", example: "**You’re** early! / Check **your** email." },
        { label: "they're vs their vs there", descTh: "**they’re** = they are · **their** = ของพวกเขา · **there** = ที่นั่น/มี", example: "**They’re** parking **their** car over **there**." }
      ]
    },
    quickChecklist: [
      'ลองแตกคำในใจทุกครั้ง: ถ้าแทนด้วย `it is` ได้ → ใช้ **it’s** ถ้าไม่ได้ → ใช้ **its**',
      'ชื่อวัน (`Monday`), เดือน (`June`), ภาษา (`Thai`), และคำว่า **I** ต้องเป็นตัวพิมพ์ใหญ่เสมอ',
      'ชื่อฤดูกาล (`summer, winter`) ไม่ต้องใช้ตัวพิมพ์ใหญ่'
    ],
    extraExamples: [
      { en: 'Our new cafe opens in October, and its signature drink is matcha.', th: 'คาเฟ่ใหม่ของเราเปิดเดือนตุลาคม และเครื่องดื่มซิกเนเจอร์ของมันคือมัทฉะ', focus: 'October (พิมพ์ใหญ่) + its (ของมัน)' }
    ],
    extraMistakes: [
      { wrong: 'The company updated it’s privacy policy last week.', right: 'The company updated its privacy policy last week.', whyTh: 'ความหมายคือ "นโยบายของมัน" ไม่ใช่ it is จึงต้องใช้ **its** (ไม่มี apostrophe)' }
    ]
  },
  g04: {
    conceptTh: 'ตัวเลข วันที่ และเวลาในภาษาอังกฤษมีจุดต่างจากภาษาไทยอยู่ 3 ข้อสำคัญ: (1) วันที่และลำดับชั้นใช้ **เลขลำดับ (1st, 2nd, 3rd)** ไม่ใช่เลขจำนวน, (2) หน่วยนับอย่าง **hundred / thousand / million** ห้ามเติม -s เมื่อมีตัวเลขนำหน้า และ (3) คำบุพบทที่ใช้คู่กับเวลา/วัน/เดือน ต้องจับคู่ให้ถูก (`at` เวลา · `on` วัน/วันที่ · `in` เดือน/ปี)',
    stepGuide: [
      { step: 1, titleTh: 'แยก Cardinal (จำนวน) vs Ordinal (ลำดับที่)', detailTh: 'นับจำนวนของใช้ `one, two, three` · บอกลำดับที่ วันที่ หรือชั้นอาคารใช้ `the first, the second, the third, the twenty-first`', miniEx: 'two floors (2 ชั้น) vs **the second** floor (ชั้นที่ 2)' },
      { step: 2, titleTh: 'กฎหน่วยนับหลักร้อย–หลักล้าน', detailTh: 'มีตัวเลขข้างหน้า → **ไม่เติม -s** (`five thousand people`) · ไม่มีตัวเลขข้างหน้าและแปลว่า "เป็นพันๆ" → **เติม -s + of** (`thousands of people`)', miniEx: 'three **hundred** guests vs **hundreds of** guests' },
      { step: 3, titleTh: 'จับคู่บุพบทเวลา-วันที่ให้แม่น', detailTh: '**at** + เวลานาฬิกา (`at 8:30`) · **on** + วัน/วันที่ (`on May 15, on Friday`) · **in** + เดือน/ปี (`in July, in 2026`)', miniEx: 'The event starts **at** 9 a.m. **on** June 1.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: มีตัวเลข vs ไม่มีตัวเลขหน้าหน่วยนับ',
      items: [
        { label: 'มีตัวเลขนำหน้า (ห้ามเติม -s)', descTh: 'บอกจำนวนแน่นอน เช่น 200, 5,000, 3 ล้าน', example: 'two **hundred** books / five **thousand** baht' },
        { label: 'ไม่มีตัวเลขนำหน้า (เติม -s + of)', descTh: 'บอกจำนวนมหาศาลแบบไม่เจาะจง ("หลายร้อย/หลายพัน")', example: '**hundreds of** photos / **thousands of** visitors' }
      ]
    },
    quickChecklist: [
      'เลขลำดับที่ 1, 2, 3 ลงท้ายพิเศษ: **1st (first), 2nd (second), 3rd (third)** (ยกเว้น 11th, 12th, 13th)',
      'ตัวเลข + `hundred / thousand / million` ห้ามเติม -s เด็ดขาด',
      'วัน/วันที่ใช้ **on** · เดือน/ปีใช้ **in** · เวลาใช้ **at**'
    ],
    extraExamples: [
      { en: 'Thousands of runners joined the charity marathon on Sunday morning.', th: 'นักวิ่งหลายพันคนเข้าร่วมมาราธอนการกุศลในเช้าวันอาทิตย์', focus: 'Thousands of (ไม่มีตัวเลข) + on Sunday morning' }
    ],
    extraMistakes: [
      { wrong: 'My office is on the five floor.', right: 'My office is on the fifth floor.', whyTh: 'บอกลำดับชั้นอาคารต้องใช้เลขลำดับ (Ordinal) คือ **the fifth floor**' }
    ]
  },
  g05: {
    conceptTh: 'ภาษาไทยไม่มีคำนำหน้านาม (a / an / the) ทำให้คนไทยมักลืมใส่หรือใส่เกิน กฎสำคัญที่สุดที่ต้องจำคือ **a/an ดูที่ "เสียง" ไม่ใช่ตัวอักษร** (เช่น `an hour`, `a university`), **the ใช้เมื่อผู้พูดและผู้ฟังรู้ตรงกันว่าหมายถึงอันไหน**, และ **Zero Article (ไม่ใส่เลย)** ใช้เมื่อพูดถึงสิ่งทั่วไปที่เป็นพหูพจน์หรือนามนับไม่ได้',
    stepGuide: [
      { step: 1, titleTh: 'เช็กเสียงขึ้นต้นสำหรับ a vs an', detailTh: 'ออกเสียงขึ้นต้นเป็นสระ (อ-) ใช้ **an** (`an hour, an MBA, an honest man`) · ออกเสียงพยัญชนะ (ย-, ว-) ใช้ **a** (`a university, a European country, a one-way ticket`)', miniEx: '**an** honest answer / **a** useful tool' },
      { step: 2, titleTh: 'เลือกว่า "เจาะจง (the)" หรือ "ยังไม่เจาะจง (a/an)"', detailTh: 'พูดถึงครั้งแรกแบบไม่เจาะจงใช้ **a/an** · พูดถึงซ้ำครั้งที่สอง หรือมีสิ่งเดียวในโลก/ในห้อง (`the sun, the door, the CEO`) หรือมีคำขยายเจาะจง ใช้ **the**', miniEx: 'I bought **a** book. **The** book is about history.' },
      { step: 3, titleTh: 'รู้จัก Zero Article (ไม่ต้องใส่คำนำหน้านาม)', detailTh: 'ไม่ใส่ article หน้า **ชื่อมื้ออาหาร** (`have breakfast`), **กีฬา** (`play tennis`), **วิชา/ภาษา** (`study English`), **ประเทศส่วนใหญ่** (`in Thailand`), และ **คำนามพหูพจน์/นับไม่ได้ที่พูดถึงทั่วไป** (`Dogs are loyal.`)', miniEx: 'I love **coffee**. (กาแฟโดยทั่วไป ไม่ใส่ the)' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: ใส่ the vs ไม่ใส่ article (Zero Article)',
      items: [
        { label: 'พูดถึงโดยทั่วไป (ไม่ใส่ the)', descTh: 'หมายถึงสิ่งนั้นทั้งหมดบนโลกแบบไม่เจาะจง', example: '**Music** helps people relax. / **Cats** love boxes.' },
        { label: 'พูดถึงแบบเจาะจง (ใส่ the)', descTh: 'หมายถึงอันใดอันหนึ่งที่ทั้งสองฝ่ายรู้กันชัดเจน', example: '**The music** at that cafe was too loud.' }
      ]
    },
    quickChecklist: [
      '**a / an** ดูที่ **เสียงอ่าน** (`an hour`, `an MBA`, `a university`, `a uniform`)',
      'มีสิ่งเดียว / ขั้นสูงสุด (`the best`) / กล่าวซ้ำ → ใช้ **the**',
      'พูดถึงนามพหูพจน์หรือนามนับไม่ได้แบบทั่วไป + ชื่อมื้ออาหาร/กีฬา/ภาษา → **ไม่ใส่ article**'
    ],
    extraExamples: [
      { en: 'She is an honest leader who graduated from a university in Japan.', th: 'เธอเป็นผู้นำที่ซื่อสัตย์ซึ่งเรียนจบจากมหาวิทยาลัยแห่งหนึ่งในญี่ปุ่น', focus: 'an honest (เสียง อ-) / a university (เสียง ย-)' }
    ],
    extraMistakes: [
      { wrong: 'We usually have the breakfast at 7 a.m.', right: 'We usually have breakfast at 7 a.m.', whyTh: 'หน้าชื่อมื้ออาหารทั่วไป (`breakfast, lunch, dinner`) ไม่ต้องใส่ the' }
    ]
  },
  g06: {
    conceptTh: 'กริยา 3 ตระกูล **Be / Do / Have** เป็นกระดูกสันหลังของประโยคภาษาอังกฤษทั้งหมด จุดที่คนเรียนจาก 0 สับสนที่สุดคือ **Be (is/am/are/was/were)** ห้ามวางคู่กับกริยาช่อง 1 ธรรมดาเด็ดขาด เช่น `I am agree ❌` หรือ `She is work ❌` — ถ้าประโยคมีกริยาแท้ธรรมดา ต้องใช้ **Do / Does / Did** มาช่วยทำปฏิเสธและคำถามแทน',
    stepGuide: [
      { step: 1, titleTh: 'ใช้ Verb to Be เมื่อตามด้วย คำนาม / Adj / สถานที่ / V-ing / V3', detailTh: 'Be ทำหน้าที่เชื่อม "เป็น/อยู่/คือ" หรือช่วยสร้าง Continuous (`is working`) และ Passive (`was built`) ห้ามตามด้วย V1 ธรรมดา', miniEx: 'She **is** happy. / They **are** working.' },
      { step: 2, titleTh: 'ใช้ Verb to Do ช่วยกริยาแท้ธรรมดาในปฏิเสธและคำถาม', detailTh: 'ปัจจุบันใช้ **do/does** อดีตใช้ **did** และกริยาแท้ที่ตามหลังต้องคืนรูป **V1 เสมอ**', miniEx: 'He **does not** eat meat. / **Did** you **sleep** well?' },
      { step: 3, titleTh: 'แยก Have (กริยาแท้ = มี) vs Have (กริยาช่วย = ทำแล้วใน Perfect)', detailTh: 'เมื่อ have แปลว่า "มี" ปฏิเสธคือ **don’t/doesn’t have** แต่เมื่อเป็นกริยาช่วย Perfect (`have + V3`) ปฏิเสธคือ **haven’t/hasn’t + V3**', miniEx: 'I **don’t have** a car. vs I **haven’t seen** him.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: เมื่อไรใช้ is/am/are vs do/does',
      items: [
        { label: 'ใช้ is / am / are (ไม่มี Action Verb V1)', descTh: 'ตามด้วย Adj, Noun, สถานที่, หรือ V-ing', example: '**Are** you tired? / She **is not** at home.' },
        { label: 'ใช้ do / does / did (มี Action Verb V1)', descTh: 'ตามด้วยกริยาการกระทำรูป V1 (`like, know, go, agree`)', example: '**Do** you **agree**? / He **doesn’t know**.' }
      ]
    },
    quickChecklist: [
      'ห้ามเขียน `be + V1` เด็ดขาด (`I am agree ❌` → `I agree ✓`, `Do you agree? ✓`)',
      'หลัง **do / does / did** กริยาแท้ต้องกลับเป็นรูปฐาน **V1** เสมอ (`doesn’t have` ไม่ใช่ `doesn’t has`)',
      'เช็กประธานเอกพจน์ (`he/she/it`) ใช้ `is / was / does / has`'
    ],
    extraExamples: [
      { en: 'I completely agree with your suggestion, and I do not have any objections.', th: 'ฉันเห็นด้วยกับข้อเสนอของคุณทั้งหมด และไม่มีข้อคัดค้านใดๆ', focus: 'agree ไม่ใช้ am / ปฏิเสธของ have (มี) ใช้ do not have' }
    ],
    extraMistakes: [
      { wrong: 'Are you know the password for the Wi-Fi?', right: 'Do you know the password for the Wi-Fi?', whyTh: 'know เป็นกริยาแท้ (V1) ต้องใช้กริยาช่วย **Do** ไม่ใช่ Are' }
    ]
  },
  g07: {
    conceptTh: 'ภาษาอังกฤษต้องผันท้ายคำกริยาตามประธานและเวลา (`-s/-es`, `-ed`, `-ing`) ซึ่งมีกฎสะกดคำที่เป็นระบบชัดเจน ไม่ต้องเดามั่ว ส่วน **กริยา 3 ช่อง (Irregular Verbs)** ที่ไม่เติม -ed ให้จำแยกเป็นตระกูลเสียงจะจำได้เร็วกว่าท่องเรียง A–Z หลายเท่า',
    stepGuide: [
      { step: 1, titleTh: 'กฎเติม -s/-es (สำหรับประธานเอกพจน์ Present Simple)', detailTh: 'ลงท้าย `s, sh, ch, x, o` เติม **-es** (`watches, goes`) · ลงท้าย พยัญชนะ+y เปลี่ยน y เป็น **-ies** (`studies`) แต่สระ+y เติม s เลย (`plays`)', miniEx: 'fix → fixes · try → tries · enjoy → enjoys' },
      { step: 2, titleTh: 'กฎเบิ้ลพยัญชนะท้าย (CVC) ก่อนเติม -ed / -ing', detailTh: 'คำพยางค์เดียวเสียงสั้น (พยัญชนะ-สระ-พยัญชนะ) เช่น `stop, plan, run, wrap` ต้องเบิ้ลตัวท้าย (`stopped, planning, running`) ยกเว้นคำลงท้าย `w, x, y`', miniEx: 'stop → stopped / stopping · fix → fixed (ไม่เบิ้ล x)' },
      { step: 3, titleTh: 'จำกริยา 3 ช่องแบบจัดกลุ่มเสียง', detailTh: 'กลุ่มคงรูป (`cut-cut-cut, put-put-put`), กลุ่ม i-a-u (`begin-began-begun, drink-drank-drunk`), กลุ่ม -en (`write-wrote-written, choose-chose-chosen`)', miniEx: 'speak – spoke – **spoken** / break – broke – **broken**' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: V2 (Past Simple) vs V3 (Perfect / Passive)',
      items: [
        { label: 'ช่อง 2 (V2) — ใช้โดดๆ ในอดีต', descTh: 'เล่าเรื่องที่จบไปแล้วในอดีต ไม่มี have/has/be นำหน้า', example: 'She **wrote** an email yesterday. / He **chose** the blue shirt.' },
        { label: 'ช่อง 3 (V3) — ต้องมี have/had หรือ be นำหน้า', descTh: 'ใช้ใน Perfect (`have/has/had + V3`) และ Passive (`be + V3`)', example: 'She has **written** three reports. / The winner was **chosen**.' }
      ]
    },
    quickChecklist: [
      'พยัญชนะ + y → เปลี่ยน y เป็น i (`studies, studied`) แต่เติม **-ing** คง y ไว้เสมอ (`studying`)',
      'คำลงท้าย `-e` ตัด e ทิ้งก่อนเติม `-ing` (`make → making`, `write → writing`)',
      'แยก V2 กับ V3 ให้ขาด (`went` vs `have gone`, `ate` vs `have eaten`, `chose` vs `have chosen`)'
    ],
    extraExamples: [
      { en: 'She has already written the summary and sent it to the editor.', th: 'เธอเขียนบทสรุปเสร็จเรียบร้อยแล้วและส่งให้บรรณาธิการแล้ว', focus: 'has + V3 (written / sent)' }
    ],
    extraMistakes: [
      { wrong: 'I have already went to that new restaurant.', right: 'I have already gone to that new restaurant.', whyTh: 'หลัง have ใน Present Perfect ต้องใช้ V3 (**gone**) ไม่ใช่ V2 (went)' }
    ]
  },
  g08: {
    conceptTh: 'เมื่อเข้าใจคำแต่ละชนิดแล้ว ก้าวต่อไปคือการประกอบเป็น **ประโยค 3 ระดับ** (Simple 1 ใจความ, Compound เชื่อม 2 ประโยคเท่ากันด้วย FANBOYS, Complex ประโยคหลัก+ประโยครอง) เพื่อไม่ให้เขียนประโยคติดกันผิดหลัก (Comma Splice) พร้อมเรียนรู้ **Question Tags** สำหรับพูดยืนยันแบบเจ้าของภาษา',
    stepGuide: [
      { step: 1, titleTh: 'แยกประโยค 3 ชนิดจากตัวเชื่อม', detailTh: '**Simple** = 1 S+V · **Compound** = S+V + `, FANBOYS` (for, and, nor, but, or, yet, so) + S+V · **Complex** = มีคำเชื่อมรอง (`because, although, when, if`)', miniEx: 'It rained, **so** we stayed in. (Compound)' },
      { step: 2, titleTh: 'ห้ามเชื่อม 2 ประโยคด้วยเครื่องหมาย comma (,) เปล่าๆ', detailTh: 'ถ้าไม่มีคำเชื่อม FANBOYS ห้ามคั่น 2 ประโยคด้วย comma เฉยๆ ให้แยกเป็น `.` หรือใส่คำเชื่อมที่เหมาะสม', miniEx: '~~I was tired, I went to bed.~~ → I was tired, **so** I went to bed.' },
      { step: 3, titleTh: 'กฎกลับขั้ว Question Tags (+ ↔ −)', detailTh: 'หน้าบอกเล่า (+) → ท้ายปฏิเสธ (−) · หน้าปฏิเสธ (−) → ท้ายบอกเล่า (+) และต้องใช้ **กริยาช่วย + สรรพนาม** เท่านั้น', miniEx: 'You work here, **don’t you?** / She isn’t late, **is she?**' }
    ],
    compareBox: {
      titleTh: 'ข้อยกเว้น Question Tags ที่ออกสอบบ่อยที่สุด',
      items: [
        { label: "I am ... → aren't I?", descTh: 'บอกเล่า I am ใช้ tag พิเศษว่า aren’t I? (ไม่ใช่ amn’t I?)', example: 'I am on the guest list, **aren’t I?**' },
        { label: "Let's ... → shall we?", descTh: 'ประโยคชักชวนขึ้นต้น Let’s ใช้ shall we? เสมอ', example: 'Let’s take a short break, **shall we?**' },
        { label: 'คำปฏิเสธแฝง (never, hardly, seldom)', descTh: 'ถือว่าประโยคหน้าเป็นปฏิเสธ (−) แล้ว ท้ายจึงต้องเป็นบอกเล่า (+)', example: 'He **never** arrives late, **does he?**' }
      ]
    },
    quickChecklist: [
      'จำ FANBOYS 7 ตัว: **For, And, Nor, But, Or, Yet, So**',
      'Tag ใช้สรรพนามเสมอ (`Tom` → `he`, `Everyone` → `they`, `There is` → `isn’t there?`)',
      'เห็น `never / hardly / rarely / nobody` หน้าประโยค → ถือเป็นลบ (−) ท้ายต้องเป็นบวก (+)'
    ],
    extraExamples: [
      { en: 'Nobody called while I was away, did they?', th: 'ไม่มีใครโทรมาตอนฉันไม่อยู่ใช่ไหม', focus: 'Nobody เป็นลบ (−) + ใช้สรรพนาม they → did they?' }
    ],
    extraMistakes: [
      { wrong: 'He seldom eats fast food, doesn’t he?', right: 'He seldom eats fast food, does he?', whyTh: 'seldom (ไม่ค่อย) มีความหมายเชิงปฏิเสธอยู่แล้ว ท้ายประโยคจึงต้องใช้บอกเล่า **does he?**' }
    ]
  },
  g09: {
    conceptTh: 'ภาษาไทยไม่เปลี่ยนกริยาตามจำนวนประธาน ("เขากิน / พวกเขากิน") แต่ภาษาอังกฤษ **ประธานกับกริยาต้องจับคู่จำนวนให้ตรงกันเสมอ (Subject–Verb Agreement)** เคล็ดลับสำคัญคือ **อย่าหลงกลคำขยายที่คั่นกลางระหว่างประธานกับกริยา** ให้ตัดวลีบุพบท (`of..., with..., in...`) ออกในใจเพื่อหา "ประธานตัวจริง"',
    stepGuide: [
      { step: 1, titleTh: 'หา "ประธานตัวจริง" ก่อนคำว่า of / in / with / along with', detailTh: 'คำที่อยู่หลังบุพบทเป็นแค่ส่วนขยาย ไม่ใช่ประธานหลัก เช่น **The quality** (เอกพจน์) of these products **is** high.', miniEx: '**The manager**, along with her assistants, **is** here.' },
      { step: 2, titleTh: 'แยก A number of (พหูพจน์) vs The number of (เอกพจน์)', detailTh: '**A number of** = จำนวนมาก (หลาย...) → กริยาพหูพจน์ · **The number of** = ตัวเลขจำนวนของ... → กริยาเอกพจน์', miniEx: '**A number of** cars **are** parked. vs **The number of** cars **is** rising.' },
      { step: 3, titleTh: 'เช็กประธานกลุ่มพิเศษที่เป็นเอกพจน์เสมอ', detailTh: 'Gerund (`Swimming is...`), ชื่อวิชา/ข่าว (`News is..., Mathematics is...`), จำนวนเงิน/เวลา/ระยะทางที่มองเป็นก้อนเดียว (`Ten kilometers is far.`), และ `Each / Every + นาม`', miniEx: '**Every** student and teacher **has** an ID card.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: กลุ่มตัวเชื่อมที่เปลี่ยนกฎการผันกริยา',
      items: [
        { label: 'A and B → พหูพจน์', descTh: 'มี 2 สิ่งรวมกัน ใช้กริยาพหูพจน์ (ยกเว้นมี Every นำหน้า)', example: 'Coffee and tea **are** available.' },
        { label: 'Either A or B / Neither A nor B → ดูตัวใกล้กริยา', descTh: 'ผันกริยาตามประธานตัวหลัง (B) ที่อยู่ติดกริยาที่สุด', example: 'Neither the teacher nor **the students were** ready.' },
        { label: 'A together with / as well as B → ดูตัวหน้า (A)', descTh: 'ส่วนหลังเป็นแค่ส่วนเสริม ให้ยึดประธานตัวแรก (A)', example: '**The captain**, as well as the crew, **was** calm.' }
      ]
    },
    quickChecklist: [
      'ตัดส่วนขยายหลัง `of / with / along with / as well as` ออกเพื่อหาประธานตัวจริง',
      '**The number of** → กริยาเอกพจน์ · **A number of** → กริยาพหูพจน์',
      'เห็น **Each / Every** นำหน้า หรือประธานเป็น **V-ing** → กริยาเอกพจน์เสมอ'
    ],
    extraExamples: [
      { en: 'Ten thousand baht is a reasonable price for this laptop.', th: 'หนึ่งหมื่นบาทเป็นราคาที่สมเหตุสมผลสำหรับแล็ปท็อปเครื่องนี้', focus: 'จำนวนเงินมองเป็นก้อนเดียว → กริยาเอกพจน์ is' }
    ],
    extraMistakes: [
      { wrong: 'The list of approved items are on your desk.', right: 'The list of approved items is on your desk.', whyTh: 'ประธานตัวจริงคือ **The list** (เอกพจน์) ไม่ใช่ items จึงต้องใช้ **is**' }
    ]
  },
  g10: {
    conceptTh: 'คำสรรพนามไม่เจาะจงตระกูล **some- / any- / no- / every-** (`everyone, somebody, anything, nothing`) คนไทยมักแปลว่า "ทุกคน = หลายคน" แล้วเผลอใช้กริยาพหูพจน์ (`Everyone are ❌`) แต่ในไวยากรณ์อังกฤษคำกลุ่มนี้ถือเป็น **เอกพจน์เสมอ** ส่วนกลุ่ม **both / either / neither / none** ต้องแยกให้ชัดว่าพูดถึง "2 สิ่ง" หรือ "3 สิ่งขึ้นไป"',
    stepGuide: [
      { step: 1, titleTh: 'จำกฎเหล็ก: ตระกูล -one / -body / -thing = กริยาเอกพจน์เสมอ', detailTh: '`Everyone, Somebody, Anyone, Nobody, Everything, Nothing` ใช้ `is / was / has / V-s` เสมอ', miniEx: '**Everyone wants** to succeed. / **Nothing is** impossible.' },
      { step: 2, titleTh: 'แยกกลุ่ม 2 สิ่ง (both / either / neither) vs 3 สิ่งขึ้นไป (all / none)', detailTh: '2 สิ่ง: **both** (ทั้งคู่ + พหูพจน์), **either** (อันใดอันหนึ่ง), **neither** (ไม่ทั้งคู่) · 3 สิ่งขึ้นไป: **all** (ทั้งหมด), **none** (ไม่มีเลย)', miniEx: '**Neither** of the two keys fits. / **None** of the five keys fits.' },
      { step: 3, titleTh: 'ห้ามใช้ปฏิเสธซ้อนในประโยคเดียว (Double Negative)', detailTh: 'ถ้าใช้ **nobody / nothing / nowhere / neither** แล้ว ห้ามใส่ `not` ซ้ำอีก', miniEx: '~~I did not see nobody.~~ → I saw **nobody**. / I did not see **anybody**.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: another vs other vs the other',
      items: [
        { label: 'another (+ นามเอกพจน์)', descTh: 'อีก 1 อัน (แบบไม่เจาะจงจากหลายๆ อัน)', example: 'Can I have **another cup** of tea?' },
        { label: 'other (+ นามพหูพจน์/นับไม่ได้)', descTh: 'อื่นๆ แบบไม่เจาะจง', example: 'Do you have any **other questions**?' },
        { label: 'the other (อันที่เหลืออยู่)', descTh: 'อีกอันที่เหลือจาก 2 อัน (เจาะจง)', example: 'One shoe is here; where is **the other** one?' }
      ]
    },
    quickChecklist: [
      '`Everyone / Somebody / Nothing / Everything` → ใช้กริยาเอกพจน์ (`is / has / V-s`) เสมอ',
      '2 สิ่งใช้ **both / either / neither** · 3 สิ่งขึ้นไปใช้ **all / none**',
      'ห้ามใช้ `not` คู่กับ `nothing / nobody / neither` ในประโยคเดียวกัน'
    ],
    extraExamples: [
      { en: 'Everything in the new apartment looks clean and modern.', th: 'ทุกอย่างในอพาร์ตเมนต์ใหม่ดูสะอาดและทันสมัย', focus: 'Everything → กริยาเอกพจน์ looks' }
    ],
    extraMistakes: [
      { wrong: 'Neither of the three applicants had enough experience.', right: 'None of the three applicants had enough experience.', whyTh: 'มี 3 คน (three) ใช้ Neither ไม่ได้ (ใช้กับ 2 สิ่ง) ต้องใช้ **None**' }
    ]
  }
});


/* ===================== PHASE 2 NEW LESSONS (g16b, g19b) ===================== */
GRAMMAR_V2_NEW_LESSONS.push(
  {
    id: 'g16b',
    afterId: 'g16',
    phase: 'phase2',
    level: 'A2–B2',
    titleTh: 'สรุปเทียบ 12 Tenses & วิธีเลือก Tense ในสถานการณ์จริง',
    titleEn: '12 Tenses Contrast & Decision Mastery',
    estMinutes: 6,
    summaryTh: 'รวบยอด 12 Tenses ทั้งระบบให้เห็นภาพรวมในหน้าเดียว พร้อมวิธีตัดสินใจ 3 ขั้นตอน และเจาะลึก 5 คู่ Tense ที่คนไทยใช้สับสนมากที่สุดในชีวิตจริงและข้อสอบ',
    conceptTh: 'หลังจากเรียนแยกทีละคู่มาแล้ว (`g12`–`g16`) ความท้าทายจริงคือการ "เลือก Tense ให้ถูกเมื่อต้องใช้รวมกัน" คนไทยมักงงเพราะภาษาไทยไม่มีการผันกริยาตามเวลา แต่ความลับของ 12 Tenses ง่ายมาก: มันคือตาราง **3 ช่วงเวลา (อดีต / ปัจจุบัน / อนาคต) × 4 ลักษณะการกระทำ (ธรรมดา / กำลังทำ / เสร็จหรือเชื่อมถึงจุดนั้น / ทำต่อเนื่องยาวนาน)** แค่ตอบ 2 คำถามนี้ได้ คุณจะเลือก Tense ถูกแทบทุกประโยค',
    stepGuide: [
      { step: 1, titleTh: 'ถามตัวเองข้อ 1: เหตุการณ์เกิดใน "อดีต / ปัจจุบัน / อนาคต"?', detailTh: 'มองหาคำบอกเวลา (Time Markers) ก่อนเสมอ เช่น `yesterday / ago` (อดีตจบแล้ว), `now / currently` (ตอนนี้), `since / for / already / yet` (เชื่อมถึงปัจจุบัน), `by next month` (ก่อนจุดอนาคต)', miniEx: 'last week → Past · since 2020 → Present Perfect · by 2030 → Future Perfect' },
      { step: 2, titleTh: 'ถามตัวเองข้อ 2: เหตุการณ์นั้น "จบขาด" หรือ "เชื่อมถึงจุดอื่น"?', detailTh: 'ถ้าจบขาดในอดีตพร้อมเวลาชัดเจน → **Past Simple** · ถ้าเริ่มในอดีตแต่ยังมีผล/ยังทำถึงตอนนี้ → **Present Perfect** · ถ้าเกิดก่อนอีกเหตุการณ์ในอดีต → **Past Perfect**', miniEx: 'I **lost** my key yesterday. (จบเมื่อวาน) vs I **have lost** my key! (ตอนนี้ยังหาไม่เจอ)' },
      { step: 3, titleTh: 'ถามตัวเองข้อ 3: กำลังเน้น "ความต่อเนื่อง ณ จุดเวลา" หรือไม่?', detailTh: 'ถ้ากำลังทำอยู่ตอนนั้น (`at 8 p.m. yesterday`, `right now`, `at this time tomorrow`) ให้ใส่รูป **Continuous (`be + V-ing`)** ยกเว้น State Verbs (`know, believe, own, want`)', miniEx: 'At 9 p.m. last night, I **was driving** home.' },
      { step: 4, titleTh: 'ระวังประโยคที่มี 2 เหตุการณ์คู่กัน (Tense Pairing)', detailTh: 'อดีตแทรกซ้อน: **While + was/were V-ing, V2** · อดีตก่อน-หลัง: **By the time + V2, had V3** · อนาคตหลังคำเชื่อมเวลา: **When/As soon as + V1, will V1**', miniEx: 'As soon as she **arrives**, we **will start**.' }
    ],
    formulas: [
      { label: 'สูตร 3 คู่ Tense จับคู่เหตุการณ์ (ออกสอบบ่อยสุด)', parts: ['While + was/were V-ing , S + V2 (แทรกซ้อน)', 'By the time + V2 , S + had + V3 (เกิดก่อน-หลัง)', 'When / As soon as + V1 , S + will + V1 (อนาคต)'] },
      { label: 'สูตรแยก Perfect 3 เวลา (จุดอ้างอิง)', parts: ['เชื่อมถึงตอนนี้ → have/has + V3', 'เกิดก่อนจุดอดีต → had + V3', 'เสร็จก่อนจุดอนาคต → will have + V3'] }
    ],
    tables: [
      {
        title: 'ตารางสรุปเทียบ 5 คู่ Tense ที่คนไทยสับสนที่สุด',
        headers: ['คู่ที่สับสน', 'Tense แรก (ใช้เมื่อไร)', 'Tense ที่สอง (ใช้เมื่อไร)', 'ตัวอย่างเทียบ'],
        rows: [
          ['Past Simple vs Present Perfect', 'อดีตจบแล้ว + มีเวลาอดีตชัด (ago, yesterday)', 'ไม่เน้นเวลา / ยังมีผลถึงตอนนี้ (since, yet, ever)', 'I visited Japan in 2022. vs I have visited Japan twice.'],
          ['Present Perfect vs Perfect Cont.', 'เน้น "ผลลัพธ์ / จำนวนครั้งที่เสร็จ"', 'เน้น "ระยะเวลาที่ทำต่อเนื่องไม่หยุด"', 'I have read 3 chapters. vs I have been reading for 2 hours.'],
          ['Past Simple vs Past Continuous', 'เหตุการณ์สั้นที่เข้ามาแทรก', 'เหตุการณ์ที่กำลังดำเนินอยู่ตอนนั้น', 'The phone rang while I was showering.'],
          ['Past Simple vs Past Perfect', 'เหตุการณ์ที่เกิดทีหลังในอดีต', 'เหตุการณ์ที่เกิดและจบไปก่อนหน้าในอดีต', 'When I arrived, the train had already left.'],
          ['will vs be going to', 'ตัดสินใจเดี๋ยวนั้น / สัญญา / เดาจากความเห็น', 'วางแผนไว้ก่อนแล้ว / มีหลักฐานเห็นชัดตรงหน้า', 'I will help you! vs Look at those clouds; it is going to rain.']
        ]
      }
    ],
    compareBox: {
      titleTh: 'เช็กเร็ว: คำบอกเวลา 4 กลุ่มที่ล็อกคำตอบทันที',
      items: [
        { label: 'ล็อก Past Simple (V2)', descTh: 'ห้ามใช้ Present Perfect เด็ดขาดเมื่อเห็นคำเหล่านี้', example: '**yesterday, last night, two days ago, in 2019**' },
        { label: 'ล็อก Present Perfect (have/has V3)', descTh: 'เชื่อมเหตุการณ์จากอดีตจนถึงวินาทีนี้', example: '**since, for (+ ยังทำอยู่), already, yet, so far, recently**' },
        { label: 'ล็อก Future Perfect (will have V3)', descTh: 'บอกว่าสิ่งนั้นจะเสร็จเรียบร้อยก่อนถึงกำหนดอนาคต', example: '**by tomorrow, by the end of this year, by 2030**' }
      ]
    },
    examples: [
      { en: 'I have lived in Bangkok since 2019, but I lived in Chiang Mai before that.', th: 'ฉันอยู่กรุงเทพฯ ตั้งแต่ปี 2019 (ตอนนี้ยังอยู่) แต่ก่อนหน้านั้นเคยอยู่เชียงใหม่', focus: 'have lived (ถึงตอนนี้) vs lived (จบไปแล้วในอดีต)' },
      { en: 'She has written five emails this morning and has been replying to clients for two hours.', th: 'เช้านี้เธอเขียนอีเมลเสร็จไปแล้ว 5 ฉบับ และกำลังตอบลูกค้าต่อเนื่องมา 2 ชั่วโมงแล้ว', focus: 'เน้นจำนวน (has written) vs เน้นเวลาต่อเนื่อง (has been replying)' },
      { en: 'By the time we reached the theater, the movie had already started.', th: 'กว่าเราจะไปถึงโรงหนัง หนังก็เริ่มฉายไปก่อนแล้ว', focus: 'had already started เกิดก่อน reached' },
      { en: 'At 10 a.m. tomorrow, the board will be reviewing the annual budget.', th: 'พรุ่งนี้ตอนสิบโมงเช้า คณะกรรมการจะกำลังพิจารณาประจำปีอยู่', focus: 'จุดเวลาเจาะจงในอนาคต → Future Continuous' },
      { en: 'I will text you as soon as the plane lands.', th: 'ฉันจะส่งข้อความหาคุณทันทีที่เครื่องบินลงจอด', focus: 'หลัง as soon as ใช้ Present Simple (lands) ไม่ใช้ will land' }
    ],
    mistakes: [
      { wrong: 'I have graduated from university three years ago.', right: 'I graduated from university three years ago.', whyTh: 'มีคำบอกเวลาอดีตชัดเจน (**three years ago**) ต้องใช้ Past Simple (graduated) ห้ามใช้ Present Perfect' },
      { wrong: 'When I will arrive at the station, I will call you.', right: 'When I arrive at the station, I will call you.', whyTh: 'หลังคำเชื่อมเวลา (`when, as soon as, before, until`) ห้ามใช้ will ให้ใช้ Present Simple (arrive)' },
      { wrong: 'She is knowing the answer since yesterday.', right: 'She has known the answer since yesterday.', whyTh: 'know เป็น State Verb ห้ามเติม -ing และมี `since yesterday` ต้องใช้ Present Perfect (**has known**)' },
      { wrong: 'By the end of this month, I will finish the entire course.', right: 'By the end of this month, I will have finished the entire course.', whyTh: 'มี **By the end of + อนาคต** เพื่อเน้นว่าเสร็จก่อนกำหนด ใช้ Future Perfect (**will have finished**)' }
    ],
    quickChecklist: [
      'เห็น `ago / yesterday / last / in 2020` → **Past Simple (V2)** เท่านั้น',
      'เห็น `since / already / yet / so far` → **Present Perfect (have/has + V3)**',
      'เห็น `By the time + V2` → ฝั่งหลักใช้ **Past Perfect (had + V3)** · เห็น `By + อนาคต` → **will have + V3**',
      'หลังคำเชื่อมเวลา (`when / as soon as / before / after / until`) เมื่อพูดถึงอนาคต → ใช้ **V1** ห้ามใส่ `will`'
    ],
    exercises: [
      { type: 'cloze', promptTh: 'เลือก Tense ที่เข้ากับคำบอกเวลาอดีตที่จบลงแล้ว', sentence: 'Our company ___ its first overseas branch in 2021.', options: ['has opened', 'opened', 'opens', 'had open'], answerIndex: 1, explanationTh: 'ระบุปีอดีตชัดเจน (in 2021) ต้องใช้ Past Simple คือ opened' },
      { type: 'cloze', promptTh: 'เลือก Tense ที่เชื่อมเหตุการณ์จากอดีตจนถึงปัจจุบัน', sentence: 'Ms. Kanya ___ as a UX designer here since she moved to Bangkok.', options: ['worked', 'is working', 'has worked', 'works'], answerIndex: 2, explanationTh: 'since + อดีต (she moved) คู่กับ Present Perfect คือ has worked' },
      { type: 'cloze', promptTh: 'เลือก Tense สำหรับเหตุการณ์ที่เกิดและจบไปก่อนอีกเหตุการณ์ในอดีต', sentence: 'When the rescue team arrived, the floodwater ___ already.', options: ['receded', 'has receded', 'had receded', 'was receding'], answerIndex: 2, explanationTh: 'น้ำลดไปก่อนที่ทีมกู้ภัยจะมาถึง (arrived) จึงใช้ Past Perfect: had receded' },
      { type: 'cloze', promptTh: 'เลือก Tense หลังคำเชื่อมเวลาเมื่อกล่าวถึงอนาคต', sentence: 'We will send you the tracking number as soon as the parcel ___ the warehouse.', options: ['will leave', 'leaves', 'left', 'is leaving'], answerIndex: 1, explanationTh: 'หลัง as soon as ห้ามใช้ will ให้ใช้ Present Simple (leaves)' },
      { type: 'cloze', promptTh: 'เลือก Tense สำหรับสิ่งที่กำลังจะดำเนินอยู่ ณ เวลาเจาะจงในอนาคต', sentence: 'Do not call me at 3:00 p.m. tomorrow; I ___ a client presentation.', options: ['give', 'gave', 'will be giving', 'have given'], answerIndex: 2, explanationTh: 'ระบุจุดเวลาเฉพาะในอนาคต (at 3:00 p.m. tomorrow) ใช้ Future Continuous: will be giving' },
      { type: 'cloze', promptTh: 'เลือก Tense ที่เน้น "จำนวนชิ้นงานที่ทำเสร็จแล้ว" จนถึงตอนนี้', sentence: 'So far today, the technician ___ four laptops.', options: ['repaired', 'has repaired', 'is repairing', 'was repairing'], answerIndex: 1, explanationTh: 'So far today + เน้นจำนวนที่เสร็จแล้ว (four laptops) ใช้ Present Perfect: has repaired' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคอดีตแทรกซ้อนที่ถูกต้อง', tokens: ['I', 'was', 'cooking', 'dinner', 'when', 'the', 'lights', 'went', 'out.'], explanationTh: 'Past Continuous (was cooking) กำลังทำอยู่ + when + Past Simple (went out) แทรกเข้ามา' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยค Future Perfect ที่ถูกต้อง', tokens: ['By', 'next', 'June,', 'she', 'will', 'have', 'completed', 'her', 'degree.'], explanationTh: 'By + เวลาอนาคต (next June) + S + will have + V3 (completed)' },
      { type: 'error', promptTh: 'แตะจุดที่ใช้ Tense ผิด แล้วเลือกคำแก้ไขที่ถูกต้อง', tokens: ['My', 'brother', 'has', 'bought', 'his', 'motorcycle', 'last', 'month.'], errorIndex: 2, corrections: ['(ตัด has ออก → bought)', 'was', 'is'], correctOptionIndex: 0, explanationTh: 'มี last month บอกอดีตชัดเจน ห้ามใช้ has bought ต้องใช้ Past Simple (bought)' },
      { type: 'error', promptTh: 'แตะจุดที่ใช้ Tense ผิดหลังคำเชื่อมเวลา แล้วเลือกคำแก้ไข', tokens: ['Please', 'wait', 'here', 'until', 'the', 'rain', 'will', 'stop.'], errorIndex: 6, corrections: ['(ตัด will → stops)', 'is', 'has'], correctOptionIndex: 0, explanationTh: 'หลัง until เมื่อพูดถึงอนาคต ห้ามใช้ will ให้ใช้ Present Simple: stops' },
      { type: 'transform', promptTh: 'ข้อใดใช้การจับคู่ Tense ถูกต้องสมบูรณ์ที่สุด', sentence: 'เลือกประโยคที่ไม่มีข้อผิดพลาดเรื่อง Tense', options: ['I have seen him at the airport yesterday.', 'She has been working on this report for three hours.', 'When we will finish lunch, we go back to work.', 'He was knowing my sister since college.'], answerIndex: 1, spokenEn: 'She has been working on this report for three hours.', explanationTh: 'has been working ... for three hours ใช้ Present Perfect Continuous บอกการทำต่อเนื่องได้อย่างถูกต้อง' },
      { type: 'transform', promptTh: 'ประโยคใดหมายความว่า "เขายังไม่ได้ย้ายออก ตอนนี้ยังอยู่ที่นี่"', sentence: 'เทียบความต่างระหว่าง Past Simple กับ Present Perfect', options: ['He lived in this neighborhood for ten years.', 'He has lived in this neighborhood for ten years.', 'He had lived in this neighborhood before 2015.', 'He was living in this neighborhood last year.'], answerIndex: 1, spokenEn: 'He has lived in this neighborhood for ten years.', explanationTh: 'Present Perfect (has lived ... for ten years) หมายถึงเริ่มอยู่เมื่อ 10 ปีก่อนและปัจจุบันยังคงอยู่' }
    ]
  },
  {
    id: 'g19b',
    afterId: 'g19',
    phase: 'phase2',
    level: 'A2–B2',
    titleTh: 'Dependent Prepositions (กริยา/คุณศัพท์ + บุพบทคู่บุญ)',
    titleEn: 'Dependent Prepositions & Collocations',
    estMinutes: 5,
    summaryTh: 'รวมกลุ่มคำกริยา คำคุณศัพท์ และคำนามที่ต้องจับคู่กับบุพบทเฉพาะตัวเสมอ (เช่น interested in, depend on, responsible for, apologize to sb for sth) เพื่อไม่ให้แปลตรงตัวจากไทยผิด',
    conceptTh: 'คนไทยมักพลาดเรื่องบุพบทคู่คำเพราะแปลตรงตัวจากภาษาไทย เช่น "ขึ้นอยู่กับ" → เผลอใช้ `depend with ❌` (ที่ถูกคือ **depend on**), "แต่งงานกับ" → `marry with ❌` (ที่ถูกคือ **marry + คน** หรือ **be married to**), "สนใจใน/เกี่ยวกับ" → `interested about ❌` (ที่ถูกคือ **interested in**) คำพวกนี้ภาษาอังกฤษเรียกว่า **Dependent Prepositions** ที่ต้องจำควบเป็นคู่ และถ้าตามด้วยกริยาต้องเป็น **V-ing** เสมอ',
    stepGuide: [
      { step: 1, titleTh: 'จำกลุ่ม Verb + Preposition ยอดฮิตในชีวิตจริงและข้อสอบ', detailTh: '**depend on** (ขึ้นอยู่กับ), **listen to** (ฟัง), **wait for** (รอ), **belong to** (เป็นของ), **consist of** (ประกอบด้วย), **concentrate on** (จดจ่อกับ), **succeed in** (สำเร็จใน)', miniEx: 'Our plan **depends on** the weather.' },
      { step: 2, titleTh: 'จำกลุ่ม Adjective + Preposition ที่ออกสอบบ่อยที่สุด', detailTh: '**interested in** (สนใจ), **good/bad at** (เก่ง/อ่อน), **responsible for** (รับผิดชอบ), **afraid/proud/tired of** (กลัว/ภูมิใจ/เบื่อ), **familiar with** (คุ้นเคยกับ), **similar to / different from**', miniEx: 'She is **responsible for** managing the budget.' },
      { step: 3, titleTh: 'กฎเหล็ก: หลังบุพบททุกตัว ถ้าตามด้วยกริยาต้องเติม -ing', detailTh: 'รวมถึงคำที่ลงท้ายด้วย **to** ที่เป็นบุพบทด้วย เช่น `look forward to + V-ing`, `be used to + V-ing`, `object to + V-ing`, `committed to + V-ing`', miniEx: 'He apologized for **arriving** late. / I look forward to **hearing** from you.' },
      { step: 4, titleTh: 'แยกคำที่มีบุพบท 2 ตำแหน่ง (คน vs เรื่อง)', detailTh: '**apologize to** (ใคร) **for** (เรื่องอะไร) · **agree with** (คน/ความเห็น) **on/about** (หัวข้อ) · **thank** (ใคร) **for** (เรื่องอะไร)', miniEx: 'I must **apologize to** the client **for** the delay.' }
    ],
    formulas: [
      { label: 'สูตรบุพบทคู่คำ + คำนาม / V-ing', parts: ['Verb / Adj + Dependent Preposition', '+', 'Noun / Gerund (V-ing)'] },
      { label: 'กลุ่ม to ที่เป็นบุพบท (ห้ามตามด้วย V1!)', parts: ['look forward to / be used to / object to / lead to', '+', 'Noun / V-ing'] }
    ],
    tables: [
      {
        title: 'ตารางรวม Dependent Prepositions ยอดฮิต (Verb & Adjective)',
        headers: ['บุพบท', 'Verb + Prep', 'Adjective + Prep', 'ตัวอย่างประโยค'],
        rows: [
          ['in', 'believe in, succeed in, participate in', 'interested in, experienced in', 'She succeeded in passing the exam.'],
          ['on', 'depend on, rely on, focus on, insist on', 'keen on, based on', 'You can always rely on our support team.'],
          ['for', 'apologize for, apply for, prepare for, wait for', 'famous for, responsible for, suitable for', 'Chiang Mai is famous for its night markets.'],
          ['of', 'consist of, approve of, remind sb of', 'afraid of, proud of, aware of, capable of', 'The course consists of ten modules.'],
          ['to', 'belong to, listen to, object to, lead to', 'married to, similar to, allergic to, addicted to', 'Her jacket is very similar to mine.'],
          ['with / at', 'agree with, deal with, cope with / laugh at', 'familiar with, satisfied with / good at, surprised at', 'He is very good at solving technical issues.']
        ]
      }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: คู่ที่ความหมายเปลี่ยนเมื่อเปลี่ยนบุพบท',
      items: [
        { label: 'good at vs good for', descTh: '**good at** = เก่งเรื่องอะไร · **good for** = มีประโยชน์ต่อสุขภาพ/สิ่งใด', example: 'She is **good at** math. / Swimming is **good for** your heart.' },
        { label: 'agree with vs agree to', descTh: '**agree with** + คน/ความเห็น · **agree to** + ข้อเสนอ/เงื่อนไข/แผนการ', example: 'I **agree with** you. / They **agreed to** our terms.' },
        { label: 'married to (ไม่ใช่ married with)', descTh: 'เมื่อใช้เป็น Adj (`be/get married`) ต้องตามด้วย **to** เสมอ', example: 'He has been **married to** Sarah for five years.' }
      ]
    },
    examples: [
      { en: 'The final delivery date depends on the customs clearance process.', th: 'วันจัดส่งสุดท้ายขึ้นอยู่กับขั้นตอนการผ่านศุลกากร', focus: 'depend on (ไม่ใช่ depend with)' },
      { en: 'Are you familiar with the new accounting software?', th: 'คุณคุ้นเคยกับซอฟต์แวร์บัญชีตัวใหม่ไหม', focus: 'familiar with' },
      { en: 'Our team is responsible for maintaining all cloud servers.', th: 'ทีมของเรารับผิดชอบในการดูแลเซิร์ฟเวอร์คลาวด์ทั้งหมด', focus: 'responsible for + V-ing (maintaining)' },
      { en: 'She apologized to her supervisor for missing the morning briefing.', th: 'เธอขอโทษหัวหน้าของเธอที่พลาดการประชุมสรุปช่วงเช้า', focus: 'apologize to (ใคร) for (เรื่องอะไร)' },
      { en: 'The new training program consists of five interactive workshops.', th: 'โปรแกรมอบรมใหม่ประกอบด้วยเวิร์กชอปเชิงโต้ตอบ 5 ชุด', focus: 'consist of (และไม่ใช้รูป Passive)' }
    ],
    mistakes: [
      { wrong: 'My decision depends with the final budget.', right: 'My decision depends on the final budget.', whyTh: 'depend ต้องคู่กับ **on** เสมอ (แปลว่าขึ้นอยู่กับ)' },
      { wrong: 'I am very interested on digital photography.', right: 'I am very interested in digital photography.', whyTh: 'interested ต้องคู่กับ **in** เสมอ' },
      { wrong: 'She got married with her college classmate last year.', right: 'She got married to her college classmate last year.', whyTh: 'get/be married ต้องใช้คู่กับ **to** ไม่ใช่ with' },
      { wrong: 'Thank you for help me carry these heavy boxes.', right: 'Thank you for helping me carry these heavy boxes.', whyTh: 'หลังบุพบท for ถ้าตามด้วยกริยาต้องเติม **-ing** (helping)' }
    ],
    quickChecklist: [
      'จำคู่กันพลาด: `depend on`, `interested in`, `good at`, `responsible for`, `married to`, `consist of`, `familiar with`',
      'หลังบุพบททุกตัว (`in, on, at, for, of, about, with` + `look forward to / object to`) กริยาต้องเป็น **V-ing** เสมอ',
      'คำว่า `consist of` (ประกอบด้วย) ใช้ในรูป Active เสมอ ห้ามเขียน `is consisted of ❌`'
    ],
    exercises: [
      { type: 'cloze', promptTh: 'เลือกบุพบทคู่บุญที่ถูกต้องกับ depend', sentence: 'Whether we hold the event outdoors depends ___ the weather forecast.', options: ['with', 'on', 'at', 'for'], answerIndex: 1, explanationTh: 'depend คู่กับ on เสมอ (depend on = ขึ้นอยู่กับ)' },
      { type: 'cloze', promptTh: 'เลือกบุพบทคู่บุญที่ถูกต้องกับ responsible', sentence: 'Ms. Ploy is responsible ___ coordinating all international shipments.', options: ['to', 'with', 'for', 'of'], answerIndex: 2, explanationTh: 'responsible คู่กับ for (รับผิดชอบในเรื่อง...) และตามด้วย V-ing' },
      { type: 'cloze', promptTh: 'เลือกบุพบทที่ถูกต้องกับ married', sentence: 'My older brother has been married ___ an architect since 2020.', options: ['with', 'to', 'for', 'by'], answerIndex: 1, explanationTh: 'be/get married ต้องตามด้วย to เสมอ (ห้ามใช้ with)' },
      { type: 'cloze', promptTh: 'เลือกรูปกริยาที่ถูกต้องหลังบุพบท', sentence: 'He apologized to the customer for ___ the wrong invoice.', options: ['send', 'to send', 'sending', 'sent'], answerIndex: 2, explanationTh: 'หลังบุพบท for ต้องตามด้วย Gerund (V-ing) คือ sending' },
      { type: 'cloze', promptTh: 'เลือกบุพบทที่ถูกต้องกับ familiar', sentence: 'Are the new interns familiar ___ our company security guidelines?', options: ['with', 'on', 'for', 'at'], answerIndex: 0, explanationTh: 'familiar คู่กับ with (คุ้นเคยกับ)' },
      { type: 'cloze', promptTh: 'เลือกบุพบทที่ถูกต้องกับ succeed', sentence: 'After months of testing, the engineers succeeded ___ reducing battery drain.', options: ['on', 'at', 'in', 'to'], answerIndex: 2, explanationTh: 'succeed คู่กับ in + V-ing (ทำได้สำเร็จในเรื่อง...)' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ Dependent Preposition ถูกต้อง', tokens: ['She', 'is', 'very', 'good', 'at', 'explaining', 'complex', 'ideas.'], explanationTh: 'be good at + V-ing (explaining) แปลว่าเก่งในการอธิบาย' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ consist of ถูกต้อง', tokens: ['The', 'exam', 'consists', 'of', 'four', 'separate', 'sections.'], explanationTh: 'consists of + นามพหูพจน์ (ประกอบด้วย 4 ส่วน)' },
      { type: 'error', promptTh: 'แตะบุพบทที่ใช้ผิด แล้วเลือกคำแก้ไขที่ถูกต้อง', tokens: ['Several', 'staff', 'members', 'are', 'interested', 'about', 'joining', 'the', 'club.'], errorIndex: 5, corrections: ['in', 'on', 'with'], correctOptionIndex: 0, explanationTh: 'interested ต้องคู่กับ in เสมอ (interested in + V-ing)' },
      { type: 'error', promptTh: 'แตะจุดที่ผิดหลัง look forward to แล้วเลือกคำแก้ไข', tokens: ['We', 'look', 'forward', 'to', 'receive', 'your', 'feedback', 'soon.'], errorIndex: 4, corrections: ['receiving', 'received', 'receives'], correctOptionIndex: 0, explanationTh: 'to ใน look forward to เป็นบุพบท ต้องตามด้วย V-ing คือ receiving' },
      { type: 'transform', promptTh: 'ข้อใดใช้ Dependent Preposition ได้ถูกต้องสมบูรณ์ทั้งหมด', sentence: 'เลือกประโยคที่ถูกหลักไวยากรณ์', options: ['The committee consists from five senior directors.', 'They are proud with their daughter’s achievement.', 'I completely agree with your point about remote work.', 'He insisted on to pay for everyone’s dinner.'], answerIndex: 2, spokenEn: 'I completely agree with your point about remote work.', explanationTh: 'agree with (คน/ความเห็น) ถูกต้อง ส่วนข้ออื่นผิดที่ consist of, proud of, และ insist on paying' },
      { type: 'transform', promptTh: 'ข้อใดแยกการใช้ good at กับ good for ได้ถูกต้อง', sentence: 'ต้องการบอกว่า "การเดินตอนเช้าดีต่อสุขภาพของคุณ"', options: ['Morning walks are good at your health.', 'Morning walks are good for your health.', 'Morning walks are good in your health.', 'Morning walks are good with your health.'], answerIndex: 1, spokenEn: 'Morning walks are good for your health.', explanationTh: 'good for แปลว่ามีประโยชน์/ดีต่อ ส่วน good at แปลว่าเก่งเรื่องอะไร' }
    ]
  }
);

/* ===================== PHASE 2 ENRICHMENTS (g11–g19) ===================== */
Object.assign(GRAMMAR_V2_ENRICHMENTS, {
  g11: {
    conceptTh: 'บุพบท **in / on / at** ไม่ต้องท่องจำแบบสุ่ม ให้ใช้ภาพ **"สามเหลี่ยมหัวกลับ (ใหญ่ → กลาง → เล็ก)"** ทั้งเรื่องเวลาและสถานที่: **in** คือกว้าง/ข้างใน (ปี, เดือน, เมือง, ในกล่อง), **on** คือพื้นผิว/วัน (วัน, วันที่, บนโต๊ะ, ถนน), และ **at** คือจุดเจาะจง (เวลานาฬิกา, จุดนัดพบ, เลขที่บ้าน)',
    stepGuide: [
      { step: 1, titleTh: 'เวลา: in (กว้าง) → on (วัน/วันที่) → at (จุดเวลา)', detailTh: '**in** 2026 / May / the morning · **on** Monday / May 15 / Monday morning · **at** 8:30 / noon / night / the weekend', miniEx: 'in June → on June 5 → at 10:00 a.m.' },
      { step: 2, titleTh: 'สถานที่: in (พื้นที่ปิด/เมือง) → on (ผิว/ถนน/ชั้น) → at (จุดเฉพาะ)', detailTh: '**in** Bangkok / the room · **on** the desk / the 3rd floor / Sukhumvit Road · **at** the door / the station / 42 Rama IV Road', miniEx: 'arrive **in** Tokyo vs arrive **at** the airport' },
      { step: 3, titleTh: 'แยกคู่เวลาสับสน: by vs until และ during vs while vs for', detailTh: '**by** = เส้นตายไม่เกินเวลานี้ · **until** = ทำต่อเนื่องไปจนถึงเวลานั้น · **during + คำนาม** · **while + ประโยค (S+V)** · **for + ระยะเวลา (2 hours)**', miniEx: 'Submit it **by** Friday. / Wait here **until** 5 p.m.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: during vs while vs for',
      items: [
        { label: 'during + คำนาม (ช่วงเหตุการณ์)', descTh: 'บอกว่าเกิดระหว่างเหตุการณ์ใด (ไม่มีตัวเลขเวลา)', example: 'Do not use your phone **during** the exam.' },
        { label: 'while + ประโยค (S + V)', descTh: 'เชื่อมเหตุการณ์สองอย่างที่เกิดพร้อมกัน', example: 'He fell asleep **while** he was reading.' },
        { label: 'for + ระยะเวลา (จำนวน)', descTh: 'บอกความยาวนานเป็นตัวเลข/หน่วยเวลา', example: 'We waited **for** forty minutes.' }
      ]
    },
    quickChecklist: [
      'วันที่มีคำว่า morning/night ต่อท้าย ใช้ **on** (`on Friday morning`) แต่ไม่มีวันใช้ **in** (`in the morning`)',
      '**by** = ภายในกำหนดส่ง (ทำเสร็จก่อน) · **until** = ทำยาวไปจนถึงเวลานั้น',
      '**between** (2 สิ่ง หรือระบุชื่อชัดเจน) vs **among** (ท่ามกลางกลุ่ม 3 สิ่งขึ้นไป)'
    ],
    extraExamples: [
      { en: 'Please stay in the lobby until the shuttle bus arrives at 7:30 a.m.', th: 'กรุณารออยู่ที่ล็อบบี้จนกว่ารถรับส่งจะมาถึงเวลา 7:30 น.', focus: 'until (รอต่อเนื่อง) + at 7:30 a.m.' }
    ],
    extraMistakes: [
      { wrong: 'Please finish this assignment until tomorrow noon.', right: 'Please finish this assignment by tomorrow noon.', whyTh: 'บอกเส้นตาย (ส่งไม่เกินเที่ยงพรุ่งนี้) ต้องใช้ **by** ไม่ใช่ until' }
    ]
  },
  g12: {
    conceptTh: 'แม้ทั้ง **Present Simple** และ **Present Continuous** จะเป็นปัจจุบันทั้งคู่ แต่หน้าที่ต่างกันชัดเจน: **Present Simple** ใช้กับสิ่งที่จริงเสมอ/กิจวัตรประจำ/ตารางเวลา ส่วน **Present Continuous** ใช้กับสิ่งที่กำลังเกิดขึ้นชั่วคราวตอนนี้ (หรือแผนที่นัดไว้แน่นอน) และมีกลุ่มกริยาบอกความรู้สึก/ความคิด (**State Verbs**) ที่ห้ามเติม -ing',
    stepGuide: [
      { step: 1, titleTh: 'เช็กว่าเป็น "ประจำ/จริงเสมอ" หรือ "กำลังเกิดตอนนี้"', detailTh: 'เห็น `every day, always, usually, often, on Mondays` → **Present Simple (V1 / V-s)** · เห็น `now, right now, at the moment, currently, Look!` → **Present Continuous (is/am/are + V-ing)**', miniEx: 'She **drinks** tea every morning, but today she **is drinking** coffee.' },
      { step: 2, titleTh: 'ระวัง State Verbs ที่ห้ามเติม -ing', detailTh: 'กริยาบอกสภาพจิตใจ/การครอบครอง/ความรู้สึก (`know, believe, understand, remember, own, belong, want, prefer, seem`) ใช้ Present Simple แม้เกิดตอนนี้', miniEx: 'I **understand** you now. (ไม่ใช่ ~~I am understanding~~)' },
      { step: 3, titleTh: 'รู้กริยาที่เปลี่ยนความหมายเมื่อเป็น -ing', detailTh: '`have` (มี = ไม่เติม ing / กิน-อาบน้ำ = เติม ing ได้: `having lunch`) · `think` (คิดว่า = ไม่เติม ing / กำลังครุ่นคิด = `thinking about`)', miniEx: 'I **have** a car. vs I **am having** dinner.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Present Simple vs Present Continuous',
      items: [
        { label: 'Present Simple (ถาวร / กิจวัตร)', descTh: 'งานประจำ ถิ่นที่อยู่ถาวร กฎธรรมชาติ ตารางเดินรถ', example: 'He **works** at a bank. / The train **leaves** at 6.' },
        { label: 'Present Continuous (ชั่วคราว / กำลังทำ)', descTh: 'สิ่งที่กำลังเกิดตอนนี้ หรือโครงการชั่วคราวช่วงนี้', example: 'He **is working** from home this week.' }
      ]
    },
    quickChecklist: [
      'ประธานเอกพจน์ (`he/she/it`) ใน Present Simple บอกเล่าอย่าลืมเติม **-s/-es**',
      'State Verbs (`know, believe, want, need, own, seem`) ห้ามใช้รูป Continuous',
      'ตารางเวลาเดินรถ/เครื่องบิน/หนังฉาย แม้อยู่ในอนาคต ใช้ Present Simple (`The flight departs at 8 p.m.`)'
    ],
    extraExamples: [
      { en: 'Right now I am staying at a friend’s condo while my apartment is being painted.', th: 'ตอนนี้ฉันพักอยู่คอนโดเพื่อนชั่วคราวระหว่างที่ห้องฉันกำลังทาสี', focus: 'เหตุการณ์ชั่วคราวช่วงนี้ → am staying' }
    ],
    extraMistakes: [
      { wrong: 'This laptop is belonging to the IT department.', right: 'This laptop belongs to the IT department.', whyTh: 'belong (เป็นของ) เป็น State Verb ห้ามใช้ในรูป Continuous' }
    ]
  },
  g13: {
    conceptTh: 'คนไทยงง **Present Perfect (`have/has + V3`)** มากที่สุดเพราะภาษาไทยไม่มีรูปนี้ ให้จำแก่นเดียวคือ **"สะพานเชื่อมอดีตมาถึงปัจจุบัน"** — ไม่ใช่เรื่องที่จบขาดไปแล้ว แต่เป็นเรื่องที่ (1) เริ่มในอดีตและยังทำอยู่ตอนนี้, (2) เพิ่งทำเสร็จและเห็นผลตอนนี้, หรือ (3) ประสบการณ์ชีวิตตั้งแต่เกิดจนถึงตอนนี้',
    stepGuide: [
      { step: 1, titleTh: 'เช็ก 3 สถานการณ์ที่ใช้ Present Perfect', detailTh: '(1) ยังทำต่อเนื่องมาถึงตอนนี้ (`since 2020`, `for 5 years`) (2) ประสบการณ์ (`ever / never / twice`) (3) เพิ่งเสร็จหรือมีผลถึงปัจจุบัน (`just / already / yet`)', miniEx: 'I **have already sent** the email.' },
      { step: 2, titleTh: 'แยก since (จุดเริ่มต้น) vs for (ความยาวนาน)', detailTh: '**since** + จุดเวลา (`since Monday, since 2018, since I was young`) · **for** + ระยะเวลา (`for 3 days, for two hours, for a long time`)', miniEx: 'for 5 years vs since 2021' },
      { step: 3, titleTh: 'แยก Present Perfect (ผลลัพธ์) vs Present Perfect Cont. (ความต่อเนื่อง)', detailTh: 'เน้นว่าเสร็จกี่ชิ้น/กี่ครั้ง → **have/has + V3** · เน้นว่าทำต่อเนื่องไม่หยุดมานานแค่ไหน (อาจยังไม่เสร็จ) → **have/has been + V-ing**', miniEx: 'I **have painted** 2 walls. vs I **have been painting** all afternoon.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: have been to vs have gone to',
      items: [
        { label: 'have/has been to (เคยไปและกลับมาแล้ว)', descTh: 'บอกประสบการณ์ว่าเคยไปสถานที่นั้น ตอนนี้ไม่ได้อยู่ที่นั่นแล้ว', example: 'She **has been to** Seoul three times.' },
        { label: 'have/has gone to (ไปแล้ว ยังไม่กลับ)', descTh: 'ตอนนี้เจ้าตัวอยู่ที่นั่นหรือกำลังเดินทางไป ยังไม่ได้กลับมา', example: 'Tom isn’t here; he **has gone to** the bank.' }
      ]
    },
    quickChecklist: [
      'ห้ามใช้ Present Perfect คู่กับเวลาอดีตจบแล้ว (`yesterday, ago, last week`)',
      '**already** (บอกเล่า = เรียบร้อยแล้ว) · **yet** (ปฏิเสธ/คำถาม = ยัง/หรือยัง วางท้ายประโยค)',
      '**since** + จุดเริ่มต้น · **for** + ช่วงระยะเวลา'
    ],
    extraExamples: [
      { en: 'Have you tried the new Thai restaurant across the street yet?', th: 'คุณเคยลองร้านอาหารไทยเปิดใหม่ฝั่งตรงข้ามหรือยัง', focus: 'คำถามประสบการณ์/หรือยัง → Have + S + V3 ... yet?' }
    ],
    extraMistakes: [
      { wrong: 'I know my best friend since primary school.', right: 'I have known my best friend since primary school.', whyTh: 'มี `since primary school` เชื่อมจากอดีตถึงปัจจุบัน ต้องใช้ Present Perfect (**have known**)' }
    ]
  },
  g14: {
    conceptTh: 'เรื่องเล่าในอดีตมี 3 เครื่องมือหลัก: **Past Simple (V2)** สำหรับเหตุการณ์ที่เกิดและจบขาดแล้ว, **Past Continuous (`was/were + V-ing`)** สำหรับฉากหลังที่กำลังดำเนินอยู่ตอนนั้น (มักมีเหตุการณ์สั้นมาแทรก), และ **used to** สำหรับนิสัยเก่าในอดีตที่เลิกทำไปแล้ว (ระวังอย่าสับสนกับ **be/get used to** ที่แปลว่าคุ้นชิน!)',
    stepGuide: [
      { step: 1, titleTh: 'เล่าเหตุการณ์อดีตตามลำดับ → ใช้ Past Simple (V2)', detailTh: 'เห็นคำบอกเวลาอดีตชัด (`yesterday, last night, in 2020, two hours ago`) ใช้ V2 ในบอกเล่า และ `did + V1` ในปฏิเสธ/คำถาม', miniEx: 'I woke up, made coffee, and checked my email.' },
      { step: 2, titleTh: 'เหตุการณ์กำลังทำอยู่แล้วมีเรื่องแทรก → จับคู่ while / when', detailTh: 'เหตุการณ์ยาว (กำลังทำ) = **was/were + V-ing** · เหตุการณ์สั้น (แทรกเข้ามา) = **V2**', miniEx: 'While I **was walking** to work, it **started** to rain.' },
      { step: 3, titleTh: 'แยก used to V1 (เคยทำ) vs be/get used to V-ing (ชินกับ)', detailTh: 'ไม่มี be/get ข้างหน้า = **used to + V1** (เคยทำในอดีต ตอนนี้เลิกแล้ว) · มี be/get ข้างหน้า = **be/get used to + Noun/V-ing** (คุ้นเคย/เริ่มชินกับ)', miniEx: 'I **used to wake** up late, but now I **am used to waking** up at 6.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: used to vs be used to vs get used to',
      items: [
        { label: 'used to + V1 (อดีตที่เปลี่ยนไปแล้ว)', descTh: 'เคยทำเป็นประจำในอดีต แต่ปัจจุบันไม่ได้ทำแล้ว (ปฏิเสธ: didn’t use to)', example: 'We **used to live** in a small town.' },
        { label: 'be used to + Noun / V-ing', descTh: 'คุ้นเคย/ชินกับสิ่งนั้นแล้ว (เป็นสภาพในปัจจุบันหรืออดีตก็ได้)', example: 'She **is used to driving** in heavy traffic.' },
        { label: 'get used to + Noun / V-ing', descTh: 'กำลังปรับตัวให้ค่อยๆ ชินกับสิ่งใหม่', example: 'You will soon **get used to** the cold weather.' }
      ]
    },
    quickChecklist: [
      'ในประโยคปฏิเสธ/คำถามของ `used to` ให้ตัด `-d` ออก: `did you use to...?` / `didn’t use to...`',
      'หลัง **be/get used to** คำว่า `to` เป็นบุพบท ต้องตามด้วย **Noun หรือ V-ing** เสมอ',
      'จำสูตรแทรกซ้อน: **While + was/were V-ing, S + V2**'
    ],
    extraExamples: [
      { en: 'Did you use to play video games after school when you were a kid?', th: 'ตอนเด็กๆ คุณเคยเล่นวิดีโอเกมหลังเลิกเรียนไหม', focus: 'คำถามของ used to → Did you use to + V1' }
    ],
    extraMistakes: [
      { wrong: 'I am used to wake up early every day.', right: 'I am used to waking up early every day.', whyTh: 'หลัง **be used to** (คุ้นชินกับ) ต้องตามด้วย **V-ing (waking)** ไม่ใช่ V1' }
    ]
  },
  g15: {
    conceptTh: '**Past Perfect (`had + V3`)** คือ **"อดีตของอดีต"** — เราไม่ใช้มันลอยๆ ในประโยคเดียวโดดๆ แต่ใช้เมื่อมี **เหตุการณ์ 2 อย่างในอดีต** เพื่อชี้ชัดว่า "เหตุการณ์ไหนเกิดและจบไปก่อน" (`had + V3`) และ "เหตุการณ์ไหนเกิดตามมาทีหลัง" (`V2`)',
    stepGuide: [
      { step: 1, titleTh: 'วางลำดับเหตุการณ์ในอดีต: เกิดก่อน (1) vs เกิดทีหลัง (2)', detailTh: 'เหตุการณ์ที่ 1 (เกิดก่อน) = **had + V3** · เหตุการณ์ที่ 2 (เกิดทีหลัง) = **Past Simple (V2)**', miniEx: 'After she **had finished** (1) the report, she **went** (2) home.' },
      { step: 2, titleTh: 'จำตำแหน่งคำเชื่อม 3 ตัวหลัก: before / after / by the time', detailTh: '**Before / By the time + V2 (เกิดทีหลัง), S + had + V3 (เกิดก่อน)** · **After + had + V3 (เกิดก่อน), S + V2 (เกิดทีหลัง)**', miniEx: '**By the time** I got there, the shop **had closed**.' },
      { step: 3, titleTh: 'ใช้ Past Perfect Continuous (had been + V-ing) เมื่อเน้นความยาวนานก่อนจุดอดีต', detailTh: 'บอกว่ารอหรือทำสิ่งนั้นต่อเนื่องมานานแค่ไหน ก่อนอีกเหตุการณ์ในอดีตจะเกิดขึ้น', miniEx: 'We **had been waiting** for 40 minutes before the bus finally came.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Past Simple ทั้งคู่ vs Past Perfect + Past Simple',
      items: [
        { label: 'When I arrived, they ate dinner.', descTh: 'พอฉันไปถึง พวกเขาก็เริ่มกินข้าวพร้อมกัน (เกิดไล่เลี่ยกัน)', example: 'V2 + V2 = เกิดตามลำดับทันที' },
        { label: 'When I arrived, they had eaten dinner.', descTh: 'พอฉันไปถึง พวกเขากินเสร็จไปเรียบร้อยก่อนหน้าแล้ว (ฉันมาช้าไป)', example: 'V2 + had V3 = จบไปก่อนหน้านั้นแล้ว' }
      ]
    },
    quickChecklist: [
      'เกิดก่อนในอดีต = **had + V3** · เกิดทีหลัง = **V2**',
      'เห็น `By the time + V2` หรือ `Before + V2` → อีกฝั่งมักเป็น **had + V3**',
      'เน้นระยะเวลาที่ทำต่อเนื่องก่อนจุดอดีต (มี `for 2 hours`) → **had been + V-ing**'
    ],
    extraExamples: [
      { en: 'He realized he had left his passport at home only after reaching the airport.', th: 'เขารู้ตัวว่าลืมพาสปอร์ตไว้ที่บ้านก็ตอนไปถึงสนามบินแล้ว', focus: 'ลืมไว้ (had left) เกิดก่อนรู้ตัว (realized)' }
    ],
    extraMistakes: [
      { wrong: 'By the time the ambulance arrived, the driver already fainted.', right: 'By the time the ambulance arrived, the driver had already fainted.', whyTh: 'หมดสติไปก่อนรถพยาบาลมาถึง ต้องใช้ Past Perfect (**had already fainted**)' }
    ]
  },
  g16: {
    conceptTh: 'ภาษาไทยพูดถึงอนาคตแค่คำว่า "จะ" คำเดียว แต่ภาษาอังกฤษแยกความหมายของ "จะ" ตาม **ระดับการวางแผนและมุมมองเวลา**: ตัดสินใจเดี๋ยวนั้นใช้ **will**, วางแผนแล้ว/เห็นหลักฐานชัดใช้ **be going to**, นัดหมายลงตารางแล้วใช้ **Present Continuous**, กำลังจะทำ ณ จุดเวลานั้นใช้ **will be + V-ing**, และจะเสร็จก่อนกำหนดใช้ **will have + V3**',
    stepGuide: [
      { step: 1, titleTh: 'แยก will vs be going to ให้ชัด', detailTh: '**will** = ตัดสินใจทันทีตอนพูด, เสนอช่วย, สัญญา, คาดเดาจากความเห็น (`I think...`) · **be going to** = วางแผนไว้แล้วก่อนพูด หรือมีหลักฐานเห็นตรงหน้า (`Look at the dark clouds!`)', miniEx: '"The phone is ringing." → "I **will** get it!" (ตัดสินใจทันที)' },
      { step: 2, titleTh: 'แยก Future Continuous vs Future Perfect', detailTh: 'เห็น `at this time tomorrow / at 8 p.m. tonight` (กำลังทำอยู่ตอนนั้น) → **will be + V-ing** · เห็น `by tomorrow / by the end of...` (จะเสร็จก่อนกำหนด) → **will have + V3**', miniEx: 'By Friday, we **will have finished** all tasks.' },
      { step: 3, titleTh: 'กฎเหล็ก Time Clauses: ห้ามใส่ will หลังคำเชื่อมเวลา/เงื่อนไข', detailTh: 'หลัง `when, as soon as, before, after, until, if` แม้หมายถึงอนาคต ให้ใช้ **Present Simple (V1/V-s)** เสมอ', miniEx: 'I will call you **as soon as** I **get** home.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: 3 วิธีพูดเรื่องอนาคตพื้นฐาน',
      items: [
        { label: 'will + V1 (ตัดสินใจทันที)', descTh: 'ไม่ได้วางแผนมาก่อน เพิ่งคิดเดี๋ยวนี้', example: 'Oh, we are out of milk. I **will buy** some now.' },
        { label: 'be going to + V1 (ตั้งใจวางแผนแล้ว)', descTh: 'คิดเตรียมการไว้ก่อนหน้าที่จะพูดแล้ว', example: 'I **am going to study** abroad next year.' },
        { label: 'Present Continuous (นัดหมายแน่นอน)', descTh: 'ลงปฏิทิน/จองตั๋ว/นัดเวลาและคนไว้เรียบร้อยแล้ว', example: 'I **am flying** to Tokyo on Friday at 9 a.m.' }
      ]
    },
    quickChecklist: [
      'ตัดสินใจทันที/สัญญา/เสนอช่วย → **will** · วางแผนแล้ว/มีหลักฐานเห็นชัด → **be going to**',
      'เห็น `By + เวลาอนาคต` → **will have + V3** · เห็น `At + เวลาเจาะจงอนาคต` → **will be + V-ing**',
      'หลัง `when / if / as soon as / before / until` ใช้ **V1** ห้ามใส่ `will`'
    ],
    extraExamples: [
      { en: 'By the time you wake up tomorrow, I will have already arrived in Chiang Mai.', th: 'กว่าคุณจะตื่นพรุ่งนี้ ฉันคงไปถึงเชียงใหม่เรียบร้อยแล้ว', focus: 'By the time + V1 (wake up) → will have + V3' }
    ],
    extraMistakes: [
      { wrong: 'Look at that boy on the wall; he will fall!', right: 'Look at that boy on the wall; he is going to fall!', whyTh: 'คาดการณ์จากหลักฐานที่เห็นอยู่ตรงหน้าชัดเจน ต้องใช้ **is going to**' }
    ]
  },
  g17: {
    conceptTh: '**Modal Verbs** (`can, could, may, might, must, should, have to`) เป็นกริยาช่วยบอก "น้ำเสียง" เช่น ความสามารถ, การขออนุญาต, คำแนะนำ, กฎบังคับ และความน่าจะเป็น กฎเหล็กมี 2 ข้อ: (1) หลัง Modal ธรรมดาต้องตามด้วย **V1 เสมอ** (ห้ามเติม to/-s/-ed) และ (2) เมื่อพูดย้อนถึงอดีตใช้ **Modal + have + V3** (เช่น `should have V3` = น่าจะทำแต่ไม่ได้ทำ)',
    stepGuide: [
      { step: 1, titleTh: 'แยกความต่าง mustn’t (ห้าม!) vs don’t have to (ไม่จำเป็น)', detailTh: 'จุดออกสอบอันดับ 1! **mustn’t** = กฎห้ามทำเด็ดขาด · **don’t have to** = ไม่มีข้อบังคับ ทำหรือไม่ทำก็ได้', miniEx: 'You **mustn’t** smoke here. (ห้ามสูบ) vs You **don’t have to** wear a tie. (ไม่ใส่ก็ได้)' },
      { step: 2, titleTh: 'เรียงน้ำหนักการคาดเดา (Deduction)', detailTh: 'มั่นใจว่าใช่แน่ๆ = **must** · อาจจะใช่ = **may / might / could** · มั่นใจว่าไม่ใช่แน่ๆ = **can’t** (ไม่ใช้ mustn’t เพื่อเดา!)', miniEx: 'He has worked 12 hours; he **must** be exhausted. / That **can’t** be true!' },
      { step: 3, titleTh: 'ใช้ Modal Perfect (Modal + have + V3) เพื่อย้อนอดีต', detailTh: '**should have V3** (ควรทำแต่ไม่ได้ทำ — เสียดาย), **shouldn’t have V3** (ไม่น่าทำเลย), **must have V3** (ต้องเกิดแน่ๆ ในอดีต), **can’t have V3** (เป็นไปไม่ได้ที่จะทำในอดีต)', miniEx: 'I **should have backed up** my files before the crash.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: mustn’t vs don’t have to และ must have V3 vs should have V3',
      items: [
        { label: "mustn't vs don't have to", descTh: "**mustn’t** = ห้ามทำ (อันตราย/ผิดกฎ) · **don’t have to** = ไม่จำเป็นต้องทำ", example: "Entry is free; you **don’t have to** buy a ticket." },
        { label: 'must have V3 (มั่นใจในอดีต)', descTh: 'เดาอย่างมั่นใจจากหลักฐานว่าเกิดเรื่องนั้นขึ้นแล้วแน่ๆ', example: 'The road is wet; it **must have rained** last night.' },
        { label: 'should have V3 (เสียดาย/ตำหนิ)', descTh: 'สิ่งที่ควรทำในอดีตแต่ไม่ได้ทำ', example: 'You **should have left** earlier to avoid traffic.' }
      ]
    },
    quickChecklist: [
      'หลัง Modal ทุกตัว (`can, could, may, might, must, should`) ตามด้วย **V1** ห้ามใส่ `to` (ยกเว้น `have to / ought to`)',
      'ไม่จำเป็นต้องทำ = **don’t/doesn’t have to** · ห้ามทำเด็ดขาด = **mustn’t**',
      'เดาอดีตอย่างมั่นใจ = **must have V3** · เสียดายไม่ได้ทำ = **should have V3**'
    ],
    extraExamples: [
      { en: 'She can’t have forgotten the meeting—we just reminded her ten minutes ago!', th: 'เธอไม่มีทางลืมการประชุมแน่ๆ เราเพิ่งเตือนเธอไปเมื่อสิบนาทีที่แล้วเอง!', focus: 'can’t have V3 = มั่นใจว่าไม่ใช่อย่างแน่นอนในอดีต' }
    ],
    extraMistakes: [
      { wrong: 'You must to wear a helmet when riding a motorbike.', right: 'You must wear a helmet when riding a motorbike.', whyTh: 'หลัง must ตามด้วย V1 ทันที ห้ามใส่ **to**' }
    ]
  },
  g18: {
    conceptTh: 'เมื่อมีกริยา 2 ตัวเรียงต่อกันในประโยคภาษาอังกฤษ กริยาตัวหลังไม่สามารถวางเป็น V1 เปล่าๆ ได้ แต่ต้องเลือกว่าจะเป็น **Gerund (`V-ing`)** หรือ **Infinitive (`to V1`)** ขึ้นอยู่กับกริยาตัวหน้า รวมถึงกลุ่ม **Causative Verbs (`make / let / have / get`)** ที่ใช้บอกการ "สั่ง/อนุญาต/จ้างให้คนอื่นทำ"',
    stepGuide: [
      { step: 1, titleTh: 'จำกริยากลุ่มหลักที่ตามด้วย V-ing (Gerund)', detailTh: '`enjoy, finish, avoid, mind, suggest, keep, practice, consider, recommend, admit, deny` + หลังบุพบททุกตัว (`good at, look forward to`)', miniEx: 'I **suggest taking** the skytrain. / She **avoids eating** late.' },
      { step: 2, titleTh: 'จำกริยากลุ่มหลักที่ตามด้วย to V1 (Infinitive)', detailTh: '`want, decide, plan, hope, promise, agree, refuse, manage, afford, offer, expect, seem` + หลัง Adjective (`easy to use`)', miniEx: 'They **decided to postpone** the launch.' },
      { step: 3, titleTh: 'ระวัง 4 กริยาที่ความหมายเปลี่ยนระหว่าง V-ing กับ to V1', detailTh: '**stop + V-ing** (เลิกทำ) vs **stop + to V1** (หยุดเพื่อไปทำ) · **remember/forget + V-ing** (จำได้ว่าเคยทำแล้ว) vs **to V1** (อย่าลืมที่ต้องทำ) · **try + V-ing** (ลองวิธีใหม่ดู) vs **to V1** (พยายามเต็มที่)', miniEx: 'He **stopped smoking** (เลิกบุหรี่) vs He **stopped to smoke** (หยุดเดินเพื่อสูบ)' },
      { step: 4, titleTh: 'สูตร Causative Verbs (Active vs Passive)', detailTh: 'ให้ "คน" ทำ (Active): **make / let / have + คน + V1** แต่ **get + คน + to V1** · ให้ "สิ่งของ" ถูกทำ (Passive): **have / get + สิ่งของ + V3**', miniEx: 'She **had her hair cut**. (ไปตัดผมมา — ผมถูกตัด)' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Causative Active vs Passive',
      items: [
        { label: 'make / let / have + คน + V1', descTh: 'บังคับ / อนุญาต / วานให้คนทำ (ไม่มี to)', example: 'The boss **made** us **stay** late. / **Let** me **help**.' },
        { label: 'get + คน + to V1', descTh: 'โน้มน้าว/ขอให้คนทำ (ต้องมี to)', example: 'I **got** my brother **to fix** the router.' },
        { label: 'have / get + สิ่งของ + V3', descTh: 'จ้างช่างหรือให้ใครทำบางอย่างกับสิ่งของของเรา', example: 'We **had** the air conditioner **repaired** yesterday.' }
      ]
    },
    quickChecklist: [
      '`enjoy / avoid / mind / suggest / finish / keep` + **V-ing** (ห้ามใช้ `suggest to V1`!)',
      '`decide / plan / promise / refuse / afford / manage` + **to V1**',
      '`make / let / have + คน + V1` · `get + คน + to V1` · `have/get + สิ่งของ + V3`'
    ],
    extraExamples: [
      { en: 'I remember locking the front door before we left for the airport.', th: 'ฉันจำได้ว่าฉันล็อกประตูหน้าบ้านไปแล้วก่อนที่เราจะออกไปสนามบิน', focus: 'remember + V-ing = จำเหตุการณ์ที่ทำไปแล้วในอดีต' }
    ],
    extraMistakes: [
      { wrong: 'I suggest to take a taxi because it is raining heavily.', right: 'I suggest taking a taxi because it is raining heavily.', whyTh: 'suggest ต้องตามด้วย **V-ing** (หรือ `that + S + V1`) ห้ามใช้ `suggest to V1`' }
    ]
  },
  g19: {
    conceptTh: 'กริยาภาษาอังกฤษแบ่งพฤติกรรมออกเป็น 3 กลุ่มที่คนไทยมักใช้ผิด: (1) **Transitive Verbs** ที่รับกรรมตรงทันทีโดย **ห้ามใส่บุพบทคั่น** (`discuss the plan` ไม่ใช่ `discuss about`), (2) **Linking Verbs** ที่เชื่อมประธานกับสภาพจึงตามด้วย **Adjective** ไม่ใช่ Adverb (`tastes good`), และ (3) **Phrasal Verbs** ที่บางตัวแยกกรรมได้และถ้ากรรมเป็นสรรพนาม (`it/them`) ต้องวางไว้ตรงกลางเท่านั้น!',
    stepGuide: [
      { step: 1, titleTh: 'จำ 7 Transitive Verbs ที่ห้ามใส่บุพบทเกิน', detailTh: '**discuss** (ไม่ใช่ about), **enter** (ไม่ใช่ into ห้อง), **marry** (ไม่ใช่ with), **contact** (ไม่ใช่ with), **reach** (ไม่ใช่ to), **emphasize** (ไม่ใช่ on), **approach** (ไม่ใช่ to)', miniEx: 'Let’s **discuss** the schedule. / Please **contact** HR.' },
      { step: 2, titleTh: 'ใช้ Adjective หลัง Linking Verbs เสมอ', detailTh: 'กลุ่มประสาทสัมผัสและสภาพ: `be, seem, appear, become, feel, look, sound, smell, taste, remain, stay` + **Adj**', miniEx: 'Your idea **sounds great**! (ไม่ใช่ ~~sounds greatly~~)' },
      { step: 3, titleTh: 'กฎวางกรรมสรรพนามใน Separable Phrasal Verbs', detailTh: 'ถ้าเป็นคำนาม วางกลางหรือท้ายก็ได้ (`turn off the light` / `turn the light off`) แต่ถ้าเป็นสรรพนาม (`it, them, him`) **ต้องวางตรงกลางเท่านั้น** (`turn it off ✓`, `turn off it ❌`)', miniEx: 'Pick **it** up! / Please fill **them** out.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: กริยาที่ต้องระวังเรื่องบุพบท',
      items: [
        { label: 'ห้ามใส่บุพบทต่อท้าย', descTh: 'ตามด้วยกรรมตรงทันทีเลย', example: '**discuss** the issue · **marry** him · **reach** the goal' },
        { label: 'ต้องใส่ to ก่อนคนเสมอ', descTh: 'ห้ามวาง "คน" ติดหลังกริยาโดยตรง (ต่างจาก tell/give)', example: '**explain** the rule **to me** (ไม่ใช่ ~~explain me~~)' }
      ]
    },
    quickChecklist: [
      'ห้ามเขียน `discuss about`, `marry with`, `contact with`, `explain me`',
      'หลัง Linking Verb (`feel, look, sound, smell, taste, seem, remain`) ใช้ **Adjective**',
      'Phrasal Verb แยกได้ + กรรมเป็น `it / them` → วางไว้ **ตรงกลางเสมอ** (`put it off`, `turn it down`)'
    ],
    extraExamples: [
      { en: 'Could you explain this grammar rule to me one more time?', th: 'ช่วยอธิบายกฎไวยากรณ์ข้อนี้ให้ฉันฟังอีกสักรอบได้ไหม', focus: 'explain + สิ่งที่อธิบาย + to + คน' }
    ],
    extraMistakes: [
      { wrong: 'Can you explain me how this machine works?', right: 'Can you explain to me how this machine works?', whyTh: 'explain ต้องมี **to** นำหน้าคนเสมอ (`explain to me`)' }
    ]
  }
});


/* ===================== PHASE 3 NEW LESSONS (g21b, g27b, g29b) ===================== */
GRAMMAR_V2_NEW_LESSONS.push(
  {
    id: 'g21b',
    afterId: 'g21',
    phase: 'phase3',
    level: 'B1–B2',
    titleTh: 'คำเชื่อมประโยค & ตัวเชื่อมความ (Conjunctions & Transitions)',
    titleEn: 'Conjunctions, Prepositional Connectors & Transitions',
    estMinutes: 6,
    summaryTh: 'แยกใช้คำเชื่อม 3 ตระกูลให้ถูกโครงสร้างและถูกเครื่องหมายวรรคตอน: Conjunction (+ ประโยค), Preposition (+ คำนาม/V-ing), และ Transition Adverbs (However, Therefore, Moreover)',
    conceptTh: 'คำเชื่อมภาษาอังกฤษหลายคำแปลไทยเหมือนกันเป๊ะ เช่น `although / despite / however` แปลว่า "แม้ว่า/แต่" เหมือนกัน หรือ `because / because of / therefore` เกี่ยวกับเหตุผลเหมือนกัน แต่ **ตำแหน่งและโครงสร้างที่ตามหลังต่างกันอย่างสิ้นเชิง!** วิธีทำข้อสอบและเขียนให้ถูก 100% คือ **อย่าดูแค่คำแปล ให้ดู "สิ่งที่ตามหลังช่องว่าง"** ว่าเป็นประโยคเต็ม (มี S+V) หรือเป็นแค่วลีนาม (ไม่มีกริยาแท้)',
    stepGuide: [
      { step: 1, titleTh: 'ตระกูลที่ 1: Subordinating Conjunctions (+ ประโยค S + V)', detailTh: 'กลุ่มขัดแย้ง: **although, though, even though, whereas, while** · กลุ่มเหตุผล: **because, since, as** · กลุ่มจุดประสงค์: **so that, in order that** — หลังคำกลุ่มนี้ต้องมี **ประธาน + กริยาแท้** เสมอ', miniEx: '**Although** it rained heavily, the match continued.' },
      { step: 2, titleTh: 'ตระกูลที่ 2: Prepositional Connectors (+ คำนาม / V-ing เท่านั้น)', detailTh: 'กลุ่มขัดแย้ง: **despite, in spite of** · กลุ่มเหตุผล: **because of, due to, owing to** · กลุ่มเพิ่มเติม: **besides, in addition to** — ห้ามมีกริยาแท้ตามหลังเด็ดขาด (ถ้าอยากใส่ประโยคต้องเติม `the fact that`)', miniEx: '**Despite** the heavy rain, the match continued.' },
      { step: 3, titleTh: 'ตระกูลที่ 3: Transition Adverbs (เชื่อมข้ามประโยค ต้องมี . หรือ ; นำหน้า)', detailTh: '**However, / Nevertheless,** (อย่างไรก็ตาม), **Therefore, / Consequently,** (ดังนั้น), **Moreover, / Furthermore,** (ยิ่งไปกว่านั้น) — ห้ามวางคั่น 2 ประโยคด้วยเครื่องหมาย comma (,) ตัวเดียว!', miniEx: 'The road was flooded**; therefore,** we took the train.' },
      { step: 4, titleTh: 'กฎเหล็กคนไทย: ห้ามใช้คำเชื่อม 2 ตัวซ้อนกันในประโยคเดียว', detailTh: 'มี `Although` แล้วห้ามใส่ `but` · มี `Because` แล้วห้ามใส่ `so`', miniEx: '~~Although he was tired, but he finished it.~~ → **Although** he was tired, he finished it.' }
    ],
    formulas: [
      { label: 'ตระกูล 1 vs ตระกูล 2 (เทียบโครงสร้าง)', parts: ['Although / Because / While', '+', 'Subject + Verb (ประโยค)'] },
      { label: 'ตระกูล 2 & 3 (นาม vs ข้ามประโยค)', parts: ['Despite / Because of / Due to + Noun / V-ing', 'ประโยค 1 ; However / Therefore , ประโยค 2'] }
    ],
    tables: [
      {
        title: 'ตารางแยก 3 ตระกูลคำเชื่อมตามความหมายและโครงสร้าง',
        headers: ['ความหมาย', 'ตามด้วย S + V (Conjunction)', 'ตามด้วย Noun / V-ing (Prep)', 'ขึ้นประโยคใหม่ (Transition)'],
        rows: [
          ['ขัดแย้ง (แม้ว่า / แต่)', 'although, even though, whereas', 'despite, in spite of', 'However, / Nevertheless,'],
          ['เหตุผล (เพราะ / ดังนั้น)', 'because, since, as', 'because of, due to, owing to', 'Therefore, / Thus, / As a result,'],
          ['เพิ่มเติม (นอกจากนี้)', 'and, not only...but also', 'besides, in addition to', 'Moreover, / Furthermore, / In addition,'],
          ['จุดประสงค์ (เพื่อที่จะ)', 'so that, in order that', 'in order to + V1, for + V-ing', '—']
        ]
      }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: although vs despite vs however',
      items: [
        { label: 'although + S + V', descTh: 'เชื่อม 2 ประโยคเข้าด้วยกันโดยมีประธานและกริยาตามหลัง', example: '**Although** the price was high, we bought it.' },
        { label: 'despite + Noun / V-ing', descTh: 'ตามด้วยคำนามหรือ V-ing เท่านั้น (ห้ามใส่ of หลัง despite!)', example: '**Despite** the high price, we bought it.' },
        { label: '; however, + S + V', descTh: 'คั่นระหว่างประโยคที่จบแล้วด้วย . หรือ ; แล้วตามด้วย comma', example: 'The price was high**; however,** we bought it.' }
      ]
    },
    examples: [
      { en: 'Despite the sudden power outage, the backup generators kept the hospital running.', th: 'แม้ว่าไฟฟ้าจะดับกะทันหัน แต่เครื่องปั่นไฟสำรองก็ยังทำให้โรงพยาบาลทำงานต่อได้', focus: 'Despite + วลีนาม (the sudden power outage)' },
      { en: 'Even though the flight was delayed by three hours, passengers stayed calm.', th: 'แม้ว่าเที่ยวบินจะล่าช้าไปสามชั่วโมง ผู้โดยสารก็ยังคงใจเย็น', focus: 'Even though + S + V (the flight was delayed)' },
      { en: 'The outdoor concert was postponed due to the severe thunderstorm.', th: 'คอนเสิร์ตกลางแจ้งถูกเลื่อนออกไปเนื่องจากพายุฝนฟ้าคะนองรุนแรง', focus: 'due to + วลีนาม (the severe thunderstorm)' },
      { en: 'Sales dropped in January; however, they recovered strongly in February.', th: 'ยอดขายลดลงในเดือนมกราคม อย่างไรก็ตาม มันฟื้นตัวอย่างแข็งแกร่งในเดือนกุมภาพันธ์', focus: '; however, เชื่อมสองประโยคอิสระ' },
      { en: 'She left early so that she could avoid the evening rush hour.', th: 'เธอออกเดินทางเร็วเพื่อที่จะหลีกเลี่ยงชั่วโมงเร่งด่วนตอนเย็น', focus: 'so that + S + could/can + V1' }
    ],
    mistakes: [
      { wrong: 'Despite of the rain, they played football.', right: 'Despite the rain, they played football.', whyTh: 'ห้ามใส่ **of** หลัง despite เด็ดขาด (ใช้ `Despite` หรือ `In spite of` อย่างใดอย่างหนึ่ง)' },
      { wrong: 'Because of it was raining, we canceled the hike.', right: 'Because it was raining, we canceled the hike.', whyTh: 'ข้างหลังเป็นประโยค (`it was raining`) ต้องใช้ **Because** ไม่ใช่ Because of' },
      { wrong: 'The app is free, however, some features require a subscription.', right: 'The app is free; however, some features require a subscription.', whyTh: 'however ไม่ใช่ FANBOYS ห้ามคั่น 2 ประโยคด้วย comma เฉยๆ ต้องใช้ **; however,** หรือแยกเป็น `. However,`' },
      { wrong: 'Although he studied hard, but he failed the first test.', right: 'Although he studied hard, he failed the first test.', whyTh: 'ห้ามใช้ Although คู่กับ but ในประโยคเดียวกัน' }
    ],
    quickChecklist: [
      'หลังช่องว่างมี `S + V` → ใช้ **although / even though / because / since / while**',
      'หลังช่องว่างเป็น `คำนาม / V-ing` → ใช้ **despite / in spite of / because of / due to**',
      'จำให้ขึ้นใจ: `despite` **ไม่มี of** · `in spite of` **มี of**',
      '`however / therefore / moreover` ต้องมี **.** หรือ **;** นำหน้า และมี **,** ตามหลัง'
    ],
    exercises: [
      { type: 'cloze', promptTh: 'เลือกคำเชื่อมที่ตามด้วยวลีนาม (ไม่มีกริยาแท้)', sentence: '___ his lack of formal training, he became an outstanding chef.', options: ['Although', 'Even though', 'Despite', 'Whereas'], answerIndex: 2, explanationTh: 'his lack of formal training เป็นวลีนาม (ไม่มีกริยาแท้) จึงต้องใช้ Despite' },
      { type: 'cloze', promptTh: 'เลือกคำเชื่อมเหตุผลที่ตามด้วยประโยคเต็ม (S + V)', sentence: 'We booked an earlier train ___ the highway was closed for repairs.', options: ['because of', 'due to', 'because', 'despite'], answerIndex: 2, explanationTh: 'the highway was closed เป็นประโยค (S + V) จึงใช้ because' },
      { type: 'cloze', promptTh: 'เลือกคำเชื่อมเหตุผลที่ตามด้วยวลีนาม', sentence: 'Several domestic flights were canceled ___ heavy fog at the airport.', options: ['because', 'since', 'due to', 'although'], answerIndex: 2, explanationTh: 'heavy fog เป็นวลีนาม ใช้ due to / because of' },
      { type: 'cloze', promptTh: 'เลือกตัวเชื่อมที่บอกผลลัพธ์หลังเครื่องหมายอัฒภาค (;)', sentence: 'The prototype failed the safety check; ___, the launch was delayed.', options: ['however', 'therefore', 'although', 'despite'], answerIndex: 1, explanationTh: 'ไม่ผ่านตรวจความปลอดภัย → ผลลัพธ์คือเลื่อนเปิดตัว ใช้ therefore (ดังนั้น)' },
      { type: 'cloze', promptTh: 'เลือกคำเชื่อมจุดประสงค์ที่ตามด้วยประโยค (S + could + V1)', sentence: 'Please speak clearly into the microphone ___ everyone at the back can hear you.', options: ['in order to', 'so that', 'because of', 'despite'], answerIndex: 1, explanationTh: 'ตามด้วยประโยค (everyone ... can hear) ใช้ so that (in order to ต้องตามด้วย V1)' },
      { type: 'cloze', promptTh: 'เลือกคำเชื่อมที่แสดงความแตกต่างระหว่างสองสิ่ง', sentence: 'My sister prefers quiet mountain towns, ___ I love busy coastal cities.', options: ['despite', 'because of', 'whereas', 'therefore'], answerIndex: 2, explanationTh: 'whereas (ในขณะที่) เป็น Conjunction เปรียบเทียบความต่างของสองประโยค' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ Despite ถูกต้อง', tokens: ['Despite', 'feeling', 'exhausted,', 'she', 'finished', 'the', 'final', 'draft.'], explanationTh: 'Despite + V-ing (feeling exhausted), + S + V' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคที่ใช้ however กับเครื่องหมาย ; ถูกต้อง', tokens: ['The', 'hotel', 'was', 'small;', 'however,', 'the', 'service', 'was', 'excellent.'], explanationTh: 'ประโยค 1 ; however, ประโยค 2' },
      { type: 'error', promptTh: 'แตะจุดที่ใช้คำเชื่อมผิด แล้วเลือกคำแก้ไขที่ถูกต้อง', tokens: ['Despite', 'of', 'the', 'tight', 'budget,', 'the', 'team', 'delivered', 'great', 'results.'], errorIndex: 1, corrections: ['(ตัด of ออก)', 'in', 'to'], correctOptionIndex: 0, explanationTh: 'ห้ามใส่ of หลัง Despite (ใช้ Despite the tight budget)' },
      { type: 'error', promptTh: 'แตะจุดที่ใช้คำเชื่อมผิดโครงสร้าง แล้วเลือกคำแก้ไข', tokens: ['Although', 'the', 'traffic', 'jam,', 'they', 'arrived', 'before', 'noon.'], errorIndex: 0, corrections: ['Despite', 'Because', 'However'], correctOptionIndex: 0, explanationTh: 'the traffic jam เป็นวลีนาม (ไม่มีกริยา) จึงต้องใช้ Despite แทน Although' },
      { type: 'transform', promptTh: 'ข้อใดใช้คำเชื่อมและเครื่องหมายวรรคตอนได้ถูกต้องสมบูรณ์ที่สุด', sentence: 'เลือกประโยคที่ถูกหลักไวยากรณ์', options: ['The tablet is light, however, its battery lasts all day.', 'The tablet is light; moreover, its battery lasts all day.', 'Because the tablet is light, so I carry it everywhere.', 'In spite of the tablet is light, it feels very sturdy.'], answerIndex: 1, spokenEn: 'The tablet is light; moreover, its battery lasts all day.', explanationTh: 'ใช้ ; moreover, เชื่อมความเสริมสองประโยคอิสระได้อย่างถูกต้องตามหลักไวยากรณ์และวรรคตอน' },
      { type: 'transform', promptTh: 'ประโยคใดแปลงจาก "Because it rained heavily, we stayed inside." โดยใช้วลีนามได้ถูกต้อง', sentence: 'เปลี่ยนประโยคเหตุผลให้ใช้วลีนาม (Noun Phrase)', options: ['Because of it rained heavily, we stayed inside.', 'Due to the heavy rain, we stayed inside.', 'Despite the heavy rain, we stayed inside.', 'Although the heavy rain, we stayed inside.'], answerIndex: 1, spokenEn: 'Due to the heavy rain, we stayed inside.', explanationTh: 'Due to + วลีนาม (the heavy rain) มีความหมายเหตุผลตรงกับ Because it rained heavily' }
    ]
  },
  {
    id: 'g27b',
    afterId: 'g27',
    phase: 'phase3',
    level: 'B2–C1',
    titleTh: 'Participle Clauses & การลดรูปประโยค (Reduced Clauses)',
    titleEn: 'Participle Clauses & Reduced Relative Clauses',
    estMinutes: 6,
    summaryTh: 'ย่อประโยคให้กระชับและเป็นธรรมชาติแบบภาษาเขียนระดับสูงด้วยการลดรูปเป็น V-ing (Active), V3 (Passive), Having + V3 และป้องกันข้อผิดพลาด Dangling Modifiers',
    conceptTh: 'ในบทความข่าว ภาษาธุรกิจ และข้อสอบ B2–C1 เรามักเจอประโยคขึ้นต้นด้วย **V-ing** หรือ **V3** เช่น `Designed in Japan, this camera...` หรือ `Walking down the street, I saw...` นี่คือการ **ลดรูปประโยค (Participle Clause)** โดยตัดคำเชื่อม (`who/which/because/when`) และ `be` ออกให้กระชับ กฎทองมี 2 ข้อ: (1) ดูประธานประโยคหลักว่า **ทำเอง (ใช้ V-ing)** หรือ **ถูกทำ (ใช้ V3)** และ (2) **ประธานของสองส่วนต้องเป็นคน/สิ่งเดียวกันเสมอ!**',
    stepGuide: [
      { step: 1, titleTh: 'ลดรูป Relative Clause (ตัด who / which / that + be)', detailTh: 'ถ้าคำนามข้างหน้า **ทำเอง (Active)** → เปลี่ยนกริยาเป็น **V-ing** · ถ้าคำนามข้างหน้า **ถูกทำ (Passive)** → เหลือแค่ **V3**', miniEx: 'The man ~~who is~~ **standing** there / The email ~~which was~~ **sent** yesterday' },
      { step: 2, titleTh: 'ขึ้นต้นประโยคด้วย Participle Clause (บอกเหตุผล/เวลา)', detailTh: 'เช็กประธานที่อยู่หลังเครื่องหมาย comma (,) ทันที! ถ้าประธานนั้นทำกริยาหน้าประโยคเองใช้ **V-ing** ถ้าถูกทำใช้ **V3**', miniEx: '**Built** in 1920, **the bridge** still stands today. (สะพานถูกสร้าง → V3)' },
      { step: 3, titleTh: 'ใช้ Having + V3 เมื่อเหตุการณ์แรก "จบสมบูรณ์ก่อน" เหตุการณ์ที่สอง', detailTh: 'แปลว่า "หลังจากที่ได้ทำ...เสร็จแล้ว ก็..." (ถ้าเป็น Passive ใช้ **Having been + V3**)', miniEx: '**Having finished** all her exams, Maya went on vacation.' },
      { step: 4, titleTh: 'ระวัง Dangling Participle (ประธานหลัง comma ไม่ตรงกับผู้ทำ!)', detailTh: 'ห้ามเขียน `Walking to the station, the rain started. ❌` (เพราะจะแปลว่าฝนกำลังเดินไปสถานี!) ต้องเอาคนเดินมาเป็นประธานหลัง comma: `Walking to the station, **I** got caught in the rain. ✓`', miniEx: '~~Reading the report, a mistake appeared.~~ → Reading the report, **she** spotted a mistake.' }
    ],
    formulas: [
      { label: 'ลดรูป Active vs Passive', parts: ['Active (ทำเอง): V-ing ... , S + V', 'Passive (ถูกทำ): V3 ... , S + V'] },
      { label: 'ลดรูป Perfect Participle (จบก่อน)', parts: ['Active: Having + V3 ... , S + V', 'Passive: Having been + V3 ... , S + V'] }
    ],
    tables: [
      {
        title: 'ตารางเทียบประโยคเต็ม vs ประโยคที่ลดรูปแล้ว (Reduced Clauses)',
        headers: ['ประโยคเต็ม', 'รูปที่ลดแล้ว (Participle)', 'เหตุผล'],
        rows: [
          ['The passengers who are waiting at Gate 5...', 'The passengers waiting at Gate 5...', 'Active (ผู้โดยสารรอเอง → V-ing)'],
          ['The products which were made in Thailand...', 'The products made in Thailand...', 'Passive (สินค้าถูกผลิต → V3)'],
          ['Because she felt tired, she left early.', 'Feeling tired, she left early.', 'ประธานเดียวกัน + Active → V-ing'],
          ['Because it was written in haste, the essay had errors.', 'Written in haste, the essay had errors.', 'Passive (เรียงความถูกเขียน → V3)'],
          ['After he had lived in London for 5 years, he moved back.', 'Having lived in London for 5 years, he moved back.', 'เกิดจบก่อนเหตุการณ์หลัง → Having + V3']
        ]
      }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: V-ing vs V3 หน้าประโยค (ดูที่ประธานหลัง comma!)',
      items: [
        { label: 'V-ing ..., Subject (ทำเอง)', descTh: 'ประธานหลัง comma เป็นผู้ลงมือทำกริยานั้นเอง', example: '**Opening** the window, **he** felt a cool breeze.' },
        { label: 'V3 ..., Subject (ถูกทำ)', descTh: 'ประธานหลัง comma เป็นผู้ถูกกระทำ', example: '**Surprised** by the news, **the staff** went silent.' },
        { label: 'Dangling Error (ผิดที่พบบ่อย!)', descTh: 'ประธานหลัง comma ไม่ใช่ผู้ทำกริยาหน้าประโยค', example: '~~Driving home, a deer crossed the road.~~ (กวางไม่ได้ขับรถ!)' }
      ]
    },
    examples: [
      { en: 'Located near the central station, the hotel is ideal for business travelers.', th: 'ตั้งอยู่ใกล้สถานีกลาง โรงแรมแห่งนี้จึงเหมาะมากสำหรับนักเดินทางธุรกิจ', focus: 'โรงแรมถูกตั้งอยู่ (Passive) → Located' },
      { en: 'Anyone wishing to apply for the scholarship must submit the form by Friday.', th: 'ใครก็ตามที่ประสงค์จะสมัครทุนการศึกษาต้องส่งแบบฟอร์มภายในวันศุกร์', focus: 'ลดรูป who wishes → wishing (Active)' },
      { en: 'Having checked all the figures twice, the accountant signed off on the report.', th: 'หลังจากตรวจสอบตัวเลขทั้งหมดสองรอบแล้ว นักบัญชีก็เซ็นอนุมัติรายงาน', focus: 'Having + V3 (ตรวจเสร็จก่อนจึงเซ็น)' },
      { en: 'Not knowing the local language, he relied on a translation app.', th: 'เพราะไม่รู้ภาษาท้องถิ่น เขาจึงพึ่งพาแอปแปลภาษา', focus: 'รูปปฏิเสธวาง Not ไว้หน้า V-ing (Not knowing)' },
      { en: 'The documents signed by the director are kept in the locked cabinet.', th: 'เอกสารที่ถูกลงนามโดยผู้อำนวยการถูกเก็บไว้ในตู้ที่ล็อกกุญแจ', focus: 'ลดรูป which were signed → signed (V3)' }
    ],
    mistakes: [
      { wrong: 'Writing in clear Thai, the handbook is easy for beginners to follow.', right: 'Written in clear Thai, the handbook is easy for beginners to follow.', whyTh: 'ประธานหลัง comma คือ **the handbook** (คู่มือ "ถูกเขียน" ไม่ได้เขียนเอง) จึงต้องใช้ V3 (**Written**)' },
      { wrong: 'Walking through the park, my phone suddenly rang.', right: 'Walking through the park, I heard my phone suddenly ring.', whyTh: 'Dangling Modifier! โทรศัพท์เดินในสวนไม่ได้ ประธานหลัง comma ต้องเป็น **I**' },
      { wrong: 'The student stood near the podium is our class president.', right: 'The student standing near the podium is our class president.', whyTh: 'ลดรูป Relative Clause ที่นักเรียนยืนเอง (Active) ต้องใช้ **standing** ไม่ใช่ stood (ซึ่งจะทำให้มีกริยาแท้ชนกับ is)' },
      { wrong: 'Knowing not what to say, he simply smiled.', right: 'Not knowing what to say, he simply smiled.', whyTh: 'รูปปฏิเสธของ Participle Clause ต้องวาง **Not** ไว้หน้า V-ing เสมอ (`Not knowing`)' }
    ],
    quickChecklist: [
      'เช็กประธานที่อยู่ติดหลัง comma เสมอ: **ทำเอง → V-ing** · **ถูกทำ → V3**',
      'เหตุการณ์แรกจบก่อนเหตุการณ์ที่สอง → **Having + V3** (Active) / **Having been + V3** (Passive)',
      'รูปปฏิเสธให้วาง **Not** ไว้ข้างหน้าสุด (`Not wanting to disturb them, ...`)',
      'ห้ามให้เกิด Dangling Participle: ประธานหลัง comma ต้องเป็นผู้ทำ/ผู้ถูกทำของกริยาหน้าประโยคจริง'
    ],
    exercises: [
      { type: 'cloze', promptTh: 'เลือกรูป Participle ที่สอดคล้องกับประธานหลัง comma (the museum)', sentence: '___ in 1895, the national museum houses thousands of rare artifacts.', options: ['Founding', 'Founded', 'To found', 'Having founded'], answerIndex: 1, explanationTh: 'the museum ถูกก่อตั้ง (Passive) จึงใช้ V3 คือ Founded' },
      { type: 'cloze', promptTh: 'เลือกรูปลดรูป Relative Clause ที่ถูกต้อง (Active)', sentence: 'Passengers ___ to Chiang Mai should proceed to Gate 12 immediately.', options: ['fly', 'flew', 'flying', 'flown'], answerIndex: 2, explanationTh: 'ลดรูป who are flying (ผู้โดยสารบินเอง = Active) จึงใช้ flying' },
      { type: 'cloze', promptTh: 'เลือกรูป Perfect Participle สำหรับเหตุการณ์ที่จบลงก่อน', sentence: '___ the installation guide carefully, Marco set up the router in five minutes.', options: ['Read', 'Having read', 'Being read', 'To reading'], answerIndex: 1, explanationTh: 'อ่านคู่มือจบก่อนแล้วค่อยตั้งค่าเราเตอร์ (Active จบก่อน) ใช้ Having read' },
      { type: 'cloze', promptTh: 'เลือกรูปปฏิเสธของ Participle Clause ที่ถูกต้อง', sentence: '___ the address clearly, the driver called the customer for directions.', options: ['Not know', 'Knowing not', 'Not knowing', 'Did not know'], answerIndex: 2, explanationTh: 'รูปปฏิเสธวาง Not หน้า V-ing คือ Not knowing' },
      { type: 'cloze', promptTh: 'เลือกรูปลดรูป Relative Clause ที่ถูกต้อง (Passive)', sentence: 'All applications ___ after the Friday deadline will not be considered.', options: ['submitting', 'submitted', 'submit', 'are submitted'], answerIndex: 1, explanationTh: 'ใบสมัคร "ถูกส่ง" (Passive: which are submitted) ลดรูปเหลือ V3 คือ submitted' },
      { type: 'cloze', promptTh: 'เลือกรูป Participle ที่เข้ากับประธานหลัง comma (she)', sentence: '___ by the loud thunder, she quickly closed all the balcony windows.', options: ['Startling', 'Startled', 'Startle', 'Having startling'], answerIndex: 1, explanationTh: 'เธอ "รู้สึกตกใจ/ถูกทำให้ตกใจ" (Passive) ใช้ V3 คือ Startled' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยค Participle Clause ที่ถูกต้อง', tokens: ['Designed', 'for', 'beginners,', 'this', 'app', 'is', 'very', 'intuitive.'], explanationTh: 'Designed for beginners (Passive V3) ขยายประธาน this app' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยคลดรูป Active ที่ถูกต้อง', tokens: ['The', 'woman', 'sitting', 'next', 'to', 'me', 'is', 'a', 'doctor.'], explanationTh: 'ลดรูป who is sitting → sitting next to me' },
      { type: 'error', promptTh: 'แตะจุดที่ใช้ Participle ผิด แล้วเลือกคำแก้ไขที่ถูกต้อง', tokens: ['Building', 'from', 'recycled', 'wood,', 'the', 'cabin', 'stays', 'cool', 'all', 'summer.'], errorIndex: 0, corrections: ['Built', 'Builds', 'To build'], correctOptionIndex: 0, explanationTh: 'the cabin ถูกสร้างขึ้น (Passive) ต้องใช้ V3 คือ Built แทน Building' },
      { type: 'error', promptTh: 'แตะจุดที่ผิดในการลดรูปประโยค แล้วเลือกคำแก้ไข', tokens: ['The', 'emails', 'sending', 'by', 'the', 'marketing', 'team', 'reached', 'ten', 'thousand', 'users.'], errorIndex: 2, corrections: ['sent', 'send', 'were sent'], correctOptionIndex: 0, explanationTh: 'emails ถูกส่ง (มี by the marketing team) ต้องลดรูปเป็น V3 คือ sent' },
      { type: 'transform', promptTh: 'ข้อใดไม่มีข้อผิดพลาดเรื่อง Dangling Participle (ประธานสองฝั่งตรงกัน)', sentence: 'เลือกประโยคที่ถูกต้องตามหลักไวยากรณ์สมบูรณ์ที่สุด', options: ['Jogging along the river, a stray puppy followed me.', 'Jogging along the river, I noticed a stray puppy following me.', 'Jogging along the river, the sunrise looked breathtaking.', 'Jogging along the river, my headphones suddenly disconnected.'], answerIndex: 1, spokenEn: 'Jogging along the river, I noticed a stray puppy following me.', explanationTh: 'ผู้ที่วิ่งจ็อกกิ้งคือ I ซึ่งวางเป็นประธานหลัง comma ถูกต้อง (ข้ออื่นทำให้ดูเหมือนลูกหมา/พระอาทิตย์/หูฟังกำลังวิ่งจ็อกกิ้ง)' },
      { type: 'transform', promptTh: 'ข้อใดลดรูปประโยค "The report which was prepared by Anna won praise." ได้ถูกต้อง', sentence: 'เลือกรูปที่กระชับและถูกไวยากรณ์', options: ['The report preparing by Anna won praise.', 'The report prepared by Anna won praise.', 'The report was prepared by Anna won praise.', 'Preparing by Anna, the report won praise.'], answerIndex: 1, spokenEn: 'The report prepared by Anna won praise.', explanationTh: 'ตัด which was ออก เหลือ V3 คือ The report prepared by Anna won praise.' }
    ]
  },
  {
    id: 'g29b',
    afterId: 'g29',
    phase: 'phase3',
    level: 'B2–C1',
    titleTh: 'Subjunctive, Cleft Sentences & Inversion (ไวยากรณ์ระดับสูง C1)',
    titleEn: 'Subjunctive, Cleft Sentences & Negative Inversion',
    estMinutes: 6,
    summaryTh: 'ยกระดับภาษาอังกฤษสู่ความเป๊ะระดับ C1 ด้วยโครงสร้างออกสอบขั้นสูง: Mandative Subjunctive (suggest that he be...), Cleft Sentences เน้นใจความ และ Negative Inversion',
    conceptTh: 'โครงสร้าง 3 ชุดนี้คือลายเซ็นของภาษาอังกฤษระดับ C1 ที่มักทำให้คนระดับ B1–B2 งงเพราะดู "ขัดกับกฎพื้นฐาน" เช่น ทำไมเขียน `It is essential that he **be** on time` (ไม่ใช้ `is`?) หรือทำไมเขียน `Never **have I** seen...` (สลับเหมือนคำถามทั้งที่เป็นประโยคบอกเล่า!) แต่พอเข้าใจหลักการเพียง 3 สูตรนี้ คุณจะอ่านข้อสอบและเขียนงานทางการได้คมขึ้นทันที',
    stepGuide: [
      { step: 1, titleTh: 'Mandative Subjunctive: หลังกริยา/Adj เสนอแนะ-สั่ง-จำเป็น ใช้ V1 รูปฐานเสมอ!', detailTh: 'หลัง `suggest, recommend, insist, demand, propose, advise` หรือ `It is essential / vital / important / necessary` + **that + S + (not) + V1 รูปฐาน** (ไม่เติม -s, ไม่ผันเป็น is/was → ใช้ **be** เสมอ!)', miniEx: 'The doctor recommended that she **take** (ไม่เติม -s) rest. / It is vital that he **be** present.' },
      { step: 2, titleTh: 'Cleft Sentences: โครงสร้างเน้นจุดสำคัญของประโยค', detailTh: 'แบบที่ 1 (**It-Cleft**): `It is/was + [สิ่งที่เน้น] + that/who + ...` · แบบที่ 2 (**What-Cleft**): `What + S + V + is/was + [สิ่งที่เน้น]`', miniEx: '**It was Sarah who** solved the bug. / **What we need is** clearer communication.' },
      { step: 3, titleTh: 'Negative Inversion: ขึ้นต้นด้วยคำเชิงปฏิเสธ/จำกัด → สลับกริยาช่วยไว้หน้าประธาน', detailTh: 'เมื่อย้าย `Never, Rarely, Seldom, Little, Not only, Hardly, No sooner, Only after...` มาไว้หน้าสุดของประโยค ต้องสลับเป็น **[คำปฏิเสธ] + กริยาช่วย + ประธาน + กริยาหลัก**', miniEx: '**Never have I** seen such a view. / **Not only did she** win, but she also broke the record.' },
      { step: 4, titleTh: 'จำคู่ Inversion ที่ออกสอบบ่อย: Hardly...when / No sooner...than', detailTh: '**Hardly had + S + V3 + when + S + V2** และ **No sooner had + S + V3 + than + S + V2** (แปลว่า "เพิ่งจะ...ทันใดนั้นก็...")', miniEx: '**No sooner had** we sat down **than** the fire alarm rang.' }
    ],
    formulas: [
      { label: 'สูตร Subjunctive (ไม่ผันกริยา)', parts: ['suggest / insist / essential + that', '+', 'Subject', '+', '(not) + Base Verb (V1 / be)'] },
      { label: 'สูตร Negative Inversion', parts: ['Never / Rarely / Not only / Little', '+', 'Aux (do/did/have/had/can)', '+', 'Subject + Main Verb'] }
    ],
    tables: [
      {
        title: 'ตารางสรุปโครงสร้าง C1 ออกสอบบ่อย',
        headers: ['โครงสร้าง', 'คำสัญญาณที่ต้องจับให้ได้', 'ตัวอย่างประโยคที่ถูกต้อง'],
        rows: [
          ['Mandative Subjunctive', 'suggest / insist / recommend / essential / vital + that', 'The board insisted that the CFO **resign** immediately.'],
          ['Subjunctive ปฏิเสธ', 'that + S + **not** + V1 (ห้ามใส่ don’t/doesn’t!)', 'We ask that guests **not smoke** near the entrance.'],
          ['It-Cleft (เน้นจุด)', 'It is/was + [Focus] + that/who ...', 'It was **in 2019** that the company went global.'],
          ['What-Cleft (เน้นสิ่งที่)', 'What + S + V + is/was ...', '**What surprised me most** was his calm reaction.'],
          ['Negative Inversion', 'Never / Seldom / Not only / Little / Only when...', '**Seldom do we** receive such unanimous praise.'],
          ['Hardly / No sooner', 'Hardly had ... **when** / No sooner had ... **than**', '**Hardly had** the train left **when** it began to pour.']
        ]
      }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: ประโยคปกติ vs รูป Inversion / Subjunctive',
      items: [
        { label: 'ปกติ vs Subjunctive', descTh: 'ปกติ `He is on time.` แต่หลัง `It is essential that...` ต้องคืนรูปฐาน `be`', example: 'It is essential that he **be** on time. (ไม่ใช่ ~~is~~)' },
        { label: 'ปกติ vs Negative Inversion', descTh: 'ปกติ `I have never seen...` พอย้าย Never ขึ้นต้นต้องสลับเป็น `have I`', example: '**Never have I** seen anything like this.' },
        { label: 'Hardly...when vs No sooner...than', descTh: 'จำคู่ให้แม่น: **Hardly → when** · **No sooner → than** (เพราะ sooner เป็นขั้นกว่าคู่ than)', example: 'No sooner had he arrived **than** the phone rang.' }
      ]
    },
    examples: [
      { en: 'The committee recommended that every applicant submit two reference letters.', th: 'คณะกรรมการแนะนำให้ผู้สมัครทุกคนส่งจดหมายรับรองสองฉบับ', focus: 'Subjunctive: every applicant + submit (V1 ไม่เติม -s)' },
      { en: 'It is vital that the lab equipment be calibrated before each experiment.', th: 'เป็นเรื่องสำคัญอย่างยิ่งที่อุปกรณ์ห้องแล็บจะต้องได้รับการปรับเทียบก่อนการทดลองแต่ละครั้ง', focus: 'Subjunctive Passive: be + V3 (ไม่ใช้ is)' },
      { en: 'What this department really needs is a faster approval workflow.', th: 'สิ่งที่แผนกนี้ต้องการจริงๆ คือขั้นตอนการอนุมัติที่เร็วขึ้น', focus: 'What-Cleft เน้นใจความหลัก' },
      { en: 'Not only does this filter save electricity, but it also runs silently.', th: 'เครื่องกรองนี้ไม่เพียงช่วยประหยัดไฟ แต่ยังทำงานเงียบอีกด้วย', focus: 'Not only + does + ประธาน + V1 (Inversion)' },
      { en: 'Little did they realize how popular the small cafe would become.', th: 'พวกเขาแทบไม่รู้เลยว่าคาเฟ่เล็กๆ แห่งนี้จะโด่งดังเพียงใด', focus: 'Little + did + they + realize' }
    ],
    mistakes: [
      { wrong: 'The manager insisted that he attends the client dinner.', right: 'The manager insisted that he attend the client dinner.', whyTh: 'หลัง **insist that** ใช้ Subjunctive รูปฐาน V1 (**attend** ไม่เติม -s)' },
      { wrong: 'Never I have experienced such warm hospitality.', right: 'Never have I experienced such warm hospitality.', whyTh: 'ขึ้นต้นด้วย Never ต้องสลับกริยาช่วยไว้หน้าประธาน: **Never have I...**' },
      { wrong: 'No sooner had the bell rung when the students rushed out.', right: 'No sooner had the bell rung than the students rushed out.', whyTh: 'No sooner (ขั้นกว่า) ต้องจับคู่กับ **than** เสมอ (ส่วน Hardly คู่กับ when)' },
      { wrong: 'The policy requires that employees do not share passwords.', right: 'The policy requires that employees not share passwords.', whyTh: 'รูปปฏิเสธของ Subjunctive วาง **not + V1** ได้เลยโดยไม่ต้องใช้ `do` (`not share`)' }
    ],
    quickChecklist: [
      'หลัง `suggest / insist / recommend / demand / essential / vital + that + S` → ใช้ **V1 รูปฐาน / be / not + V1** เสมอ',
      'ขึ้นต้นด้วย `Never / Rarely / Seldom / Not only / Little` → สลับ **[กริยาช่วย + ประธาน + กริยาหลัก]**',
      'จำคู่สลับไม่ได้: **Hardly ... when** · **No sooner ... than**',
      'เน้นใจความใช้ **It is/was ... that/who ...** หรือ **What + S + V + is/was ...**'
    ],
    exercises: [
      { type: 'cloze', promptTh: 'เลือกรูปกริยาที่ถูกต้องในโครงสร้าง Subjunctive', sentence: 'It is imperative that every visitor ___ a safety helmet inside the plant.', options: ['wears', 'wear', 'wore', 'wearing'], answerIndex: 1, explanationTh: 'หลัง It is imperative that + S ใช้ Subjunctive รูปฐาน V1 (wear ไม่เติม -s)' },
      { type: 'cloze', promptTh: 'เลือกรูปกริยา Passive Subjunctive ที่ถูกต้อง', sentence: 'The lawyer demanded that the confidential files ___ sealed immediately.', options: ['are', 'were', 'be', 'being'], answerIndex: 2, explanationTh: 'หลัง demand that + S รูป Passive Subjunctive ใช้ be + V3 คือ be sealed' },
      { type: 'cloze', promptTh: 'เลือกรูป Negative Inversion ที่ถูกต้อง', sentence: 'Rarely ___ such remarkable teamwork in a newly formed division.', options: ['we have seen', 'have we seen', 'we saw', 'did we saw'], answerIndex: 1, explanationTh: 'ขึ้นต้นด้วย Rarely ต้องใช้ Inversion: กริยาช่วย (have) + ประธาน (we) + V3 (seen)' },
      { type: 'cloze', promptTh: 'เลือกคำเชื่อมที่จับคู่กับ No sooner ได้ถูกต้อง', sentence: 'No sooner had the announcement ended ___ the audience burst into applause.', options: ['when', 'than', 'then', 'that'], answerIndex: 1, explanationTh: 'No sooner ... than เป็นคู่บังคับ (sooner เป็นขั้นกว่าจึงใช้ than)' },
      { type: 'cloze', promptTh: 'เลือกโครงสร้าง Cleft Sentence เพื่อเน้นใจความ', sentence: '___ kept the startup alive during the crisis was the founders’ resilience.', options: ['That', 'What', 'Which', 'It'], answerIndex: 1, explanationTh: 'What-Cleft: What kept the startup alive ... was ... แปลว่า "สิ่งที่ทำให้สตาร์ทอัปอยู่รอดคือ..."' },
      { type: 'cloze', promptTh: 'เลือกรูป Inversion หลัง Not only ที่ถูกต้อง', sentence: 'Not only ___ the coding challenge, but he also mentored two junior interns.', options: ['he won', 'did he win', 'he did win', 'did he won'], answerIndex: 1, explanationTh: 'Not only ขึ้นต้นประโยคต้องสลับกริยาช่วยอดีต: did he win' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยค Negative Inversion ที่ถูกต้อง', tokens: ['Never', 'have', 'I', 'heard', 'such', 'a', 'moving', 'speech.'], explanationTh: 'Never + have + I + heard + Object' },
      { type: 'order', promptTh: 'เรียงคำให้เป็นประโยค It-Cleft เน้นตัวบุคคลที่ถูกต้อง', tokens: ['It', 'was', 'Dr.', 'Suda', 'who', 'discovered', 'the', 'missing', 'link.'], explanationTh: 'It was + [บุคคลที่เน้น] + who + V' },
      { type: 'error', promptTh: 'แตะจุดที่ผิดในประโยค Subjunctive แล้วเลือกคำแก้ไข', tokens: ['The', 'director', 'suggested', 'that', 'Mark', 'rewrites', 'the', 'opening', 'paragraph.'], errorIndex: 5, corrections: ['rewrite', 'rewrote', 'rewriting'], correctOptionIndex: 0, explanationTh: 'หลัง suggest that + ประธานเอกพจน์ ต้องใช้ Subjunctive V1 รูปฐานคือ rewrite (ไม่เติม -s)' },
      { type: 'error', promptTh: 'แตะจุดที่ผิดในประโยค Inversion แล้วเลือกคำแก้ไข', tokens: ['Little', 'they', 'knew', 'that', 'the', 'bridge', 'had', 'already', 'closed.'], errorIndex: 1, corrections: ['did they know', 'they did know', 'knew they'], correctOptionIndex: 0, explanationTh: 'ขึ้นต้นด้วย Little ต้องใช้ Inversion: Little did they know' },
      { type: 'transform', promptTh: 'ข้อใดใช้ Mandative Subjunctive รูปปฏิเสธได้ถูกต้องที่สุด', sentence: 'ต้องการบอกว่า "กฎกำหนดว่านักเรียนต้องไม่นำโทรศัพท์เข้าห้องสอบ"', options: ['The rule requires that students do not bring phones into the exam room.', 'The rule requires that students not bring phones into the exam room.', 'The rule requires that students not bringing phones into the exam room.', 'The rule requires that students didn’t bring phones into the exam room.'], answerIndex: 1, spokenEn: 'The rule requires that students not bring phones into the exam room.', explanationTh: 'รูปปฏิเสธมาตรฐานของ Subjunctive คือ that + S + not + V1 (not bring)' },
      { type: 'transform', promptTh: 'ข้อใดใช้ Inversion กับ Hardly ได้ถูกต้องสมบูรณ์ที่สุด', sentence: 'เลือกประโยคที่ถูกทั้งการสลับตำแหน่งและคำเชื่อมคู่กัน', options: ['Hardly we had arrived when the storm hit.', 'Hardly had we arrived than the storm hit.', 'Hardly had we arrived when the storm hit.', 'Hardly did we arrived when the storm hit.'], answerIndex: 2, spokenEn: 'Hardly had we arrived when the storm hit.', explanationTh: 'สูตรคือ Hardly + had + S + V3 + when + S + V2' }
    ]
  }
);

/* ===================== PHASE 3 ENRICHMENTS (g20–g30) ===================== */
Object.assign(GRAMMAR_V2_ENRICHMENTS, {
  g20: {
    conceptTh: 'คำคุณศัพท์ (`Adjective`) และกริยาวิเศษณ์ (`Adverb`) มี 3 กับดักใหญ่ที่ออกสอบประจำ: (1) คู่ **-ed (รู้สึก) vs -ing (น่า...)**, (2) **ตำแหน่งวาง enough** (วางหลัง Adj แต่หน้า Noun), และ (3) **คำคู่สับสนที่เติม -ly แล้วความหมายเปลี่ยนไปเลย** เช่น `hard` (หนัก) vs `hardly` (แทบจะไม่) และ `late` (สาย) vs `lately` (ช่วงนี้)',
    stepGuide: [
      { step: 1, titleTh: 'แยก -ed (ความรู้สึกของคน) vs -ing (คุณสมบัติของสิ่งนั้น)', detailTh: 'คนรู้สึกเบื่อ/ตื่นเต้น/เหนื่อย = **bored / excited / exhausted** · หนังน่าเบื่อ/งานน่าตื่นเต้น = **boring / exciting / exhausting**', miniEx: 'I am **interested** in this **interesting** book.' },
      { step: 2, titleTh: 'วางตำแหน่ง Adverb และ enough ให้เป๊ะ', detailTh: 'Adverb บอกความถี่ (`always, usually, never`) วาง **หน้ากริยาแท้** แต่ **หลัง Verb to Be** · ส่วน **enough** วาง **หลัง Adj/Adv** (`big enough`) แต่ **หน้าคำนาม** (`enough money`)', miniEx: 'She is **always** early. / The room is **large enough**.' },
      { step: 3, titleTh: 'จำลำดับเรียง Adjective (OSASCOMP)', detailTh: 'Opinion → Size → Age → Shape → Color → Origin → Material → Purpose + Noun', miniEx: 'a **beautiful small old Italian leather** bag' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: คำที่เติม -ly แล้วความหมายเปลี่ยนทันที',
      items: [
        { label: 'hard vs hardly', descTh: '**hard** = อย่างหนัก (เป็นทั้ง Adj และ Adv) · **hardly** = แทบจะไม่ (เชิงปฏิเสธ)', example: 'She works **hard**. vs She **hardly** sleeps.' },
        { label: 'late vs lately', descTh: '**late** = สาย/ดึก · **lately** = ช่วงนี้/เมื่อเร็วๆ นี้ (มักใช้กับ Present Perfect)', example: 'He arrived **late**. vs Have you seen him **lately**?' },
        { label: 'Adj + enough vs enough + Noun', descTh: 'วางสลับด้านกันตามชนิดคำ', example: 'strong **enough** (หลัง Adj) vs **enough** time (หน้า Noun)' }
      ]
    },
    quickChecklist: [
      'คนรู้สึก = **-ed** (`bored, tired, surprised`) · สิ่งที่ทำให้รู้สึก = **-ing** (`boring, tiring, surprising`)',
      '**Adj + enough** (`fast enough`) · **enough + Noun** (`enough space`)',
      '`hardly` แปลว่า "แทบจะไม่" ไม่ได้แปลว่า "อย่างหนัก"'
    ],
    extraExamples: [
      { en: 'We have hardly had any rain lately, so the garden is very dry.', th: 'ช่วงนี้ฝนแทบไม่ตกเลย สวนจึงแห้งมาก', focus: 'hardly (แทบจะไม่) + lately (ช่วงนี้)' }
    ],
    extraMistakes: [
      { wrong: 'He studied hardly for the final exam.', right: 'He studied hard for the final exam.', whyTh: 'แปลว่า "เรียนอย่างหนัก" ต้องใช้ **hard** (ถ้าใช้ hardly จะแปลว่าแทบไม่ได้อ่านเลย!)' }
    ]
  },
  g21: {
    conceptTh: 'การเปรียบเทียบในภาษาอังกฤษแบ่งเป็น 4 ขั้น: เท่ากัน (`as...as`), ขั้นกว่า (`-er / more ... than`), ขั้นสูงสุด (`the -est / the most ...`), และคู่ขนาน (`The + ขั้นกว่า ..., the + ขั้นกว่า ...`) จุดที่ต้องระวังที่สุดคือ **ห้ามใช้ขั้นกว่าซ้อน 2 ชั้น** (`more better ❌`, `more quieter ❌`) และรู้จักตัวเน้นความต่างอย่าง `much / far / a lot / slightly`',
    stepGuide: [
      { step: 1, titleTh: 'เช็กพยางค์เพื่อเลือกรูป -er/-est vs more/most', detailTh: 'คำสั้น 1 พยางค์หรือลงท้าย -y เติม **-er / -est** (`faster, easier`) · คำยาว 2 พยางค์ขึ้นไปใช้ **more / the most** (`more reliable, the most expensive`)', miniEx: 'busy → busier · careful → more careful' },
      { step: 2, titleTh: 'จำคำเปลี่ยนรูปพิเศษ 4 ตัวหลัก', detailTh: '**good/well → better → best**, **bad → worse → worst**, **far → farther/further → farthest/furthest**, **little → less → least**', miniEx: 'Today’s traffic is **worse** than yesterday’s.' },
      { step: 3, titleTh: 'ใช้ตัวเน้นหน้าขั้นกว่าและโครงสร้าง "ยิ่ง...ยิ่ง..."', detailTh: 'เน้นว่า "กว่ามาก" ใช้ **much / far / a lot + ขั้นกว่า** (ห้ามใช้ `very` หน้าขั้นกว่า!) · และคู่ขนานใช้ **The + ขั้นกว่า..., the + ขั้นกว่า...**', miniEx: 'This route is **much faster**. / **The earlier** we leave, **the sooner** we arrive.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: ตัวเน้นที่ใช้ได้ vs ห้ามใช้หน้าขั้นกว่า',
      items: [
        { label: 'ใช้ได้: much / far / a lot / a bit / slightly', descTh: 'วางหน้าขั้นกว่าได้ทั้ง -er และ more', example: 'This laptop is **far lighter** and **much more durable**.' },
        { label: 'ห้ามใช้: very + ขั้นกว่า', descTh: 'very ใช้กับขั้นปกติเท่านั้น (`very fast ✓`, `very faster ❌`)', example: '~~very better~~ → **much better**' }
      ]
    },
    quickChecklist: [
      'ห้ามซ้อนขั้นกว่า (`more easier ❌` → `easier ✓`, `more better ❌` → `better ✓`)',
      'ห้ามใช้ `very` หน้าขั้นกว่า ให้ใช้ **much / far / a lot** แทน',
      'ขั้นเท่ากัน: `as + Adj/Adv ขั้นปกติ + as` · ยิ่ง...ยิ่ง...: `The + ขั้นกว่า..., the + ขั้นกว่า...`'
    ],
    extraExamples: [
      { en: 'The more carefully you check your work, the fewer mistakes you will make.', th: 'ยิ่งคุณตรวจงานละเอียดมากเท่าไร คุณก็จะยิ่งทำผิดพลาดน้อยลงเท่านั้น', focus: 'The more carefully ..., the fewer ...' }
    ],
    extraMistakes: [
      { wrong: 'This new battery is very better than the old one.', right: 'This new battery is much better than the old one.', whyTh: 'หน้าขั้นกว่า (better) ห้ามใช้ very ต้องใช้ **much / far / a lot**' }
    ]
  },
  g22: {
    conceptTh: 'ประโยคภาษาอังกฤษทุกประโยคต้องมีประธาน แม้ความหมายในภาษาไทยจะไม่มีประธานชัดๆ เช่น "ฝนตก", "ใช้เวลา 20 นาที", "มีร้านกาแฟอยู่ตรงหัวมุม" ภาษาอังกฤษจึงใช้ประธานสมมติ 2 ตัวคือ **It** (เวลา, อากาศ, ระยะทาง, ความคิดเห็น `It is + adj + to V1`) และ **There** (บอกว่า "มีอะไรอยู่" `There is/are`) ส่วน **So / Neither** ใช้ตอบเห็นด้วยแบบสั้นกระชับ',
    stepGuide: [
      { step: 1, titleTh: 'แยก It (อากาศ/เวลา/ความเห็น) vs There (การมีอยู่)', detailTh: '**It** + is/was + อากาศ/เวลา/Adj + to V1 (`It takes 10 minutes to walk.`) · **There** + is/are + คำนาม (บอกว่า "มี..." โดยผัน is/are ตามคำนามที่ตามหลัง!)', miniEx: '**There are** two banks nearby. / **It is** easy to park here.' },
      { step: 2, titleTh: 'สูตรคล้อยตามบอกเล่า: So + กริยาช่วย + ประธาน', detailTh: 'ใช้เมื่อเห็นด้วยกับประโยคบอกเล่าก่อนหน้า โดยกริยาช่วยต้องตรงกับ Tense ของประโยคหน้า', miniEx: '"I love sushi." → "**So do I.**" / "She can swim." → "**So can I.**"' },
      { step: 3, titleTh: 'สูตรคล้อยตามปฏิเสธ: Neither / Nor + กริยาช่วย + ประธาน', detailTh: 'ใช้เมื่อเห็นด้วยกับประโยคปฏิเสธ (ไม่ต้องใส่ `not` ซ้ำเพราะ Neither เป็นปฏิเสธแล้ว!)', miniEx: '"I haven’t been to Korea." → "**Neither have I.**"' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: It takes vs It is vs There is/are',
      items: [
        { label: 'It takes + (คน) + เวลา + to V1', descTh: 'บอกระยะเวลาที่ใช้ในการทำสิ่งใด', example: '**It took** me an hour **to finish** the report.' },
        { label: 'It is + Adj + to V1', descTh: 'บอกความรู้สึก/ความสำคัญของการทำสิ่งใด', example: '**It is** important **to back up** your data.' },
        { label: 'There is/are + คำนาม', descTh: 'บอกว่า "มี..." อยู่ในสถานที่นั้น (ห้ามใช้ It has ❌)', example: '**There is** a pharmacy next to the station.' }
      ]
    },
    quickChecklist: [
      'บอกว่า "มีสิ่งของ/คนอยู่ในที่นั้น" → ใช้ **There is / There are** (ห้ามใช้ `It has` หรือ `There have`)',
      '`It takes + เวลา + to V1` ต้องตามด้วย **to V1** (ไม่ใช่ V-ing)',
      'เห็นด้วยบอกเล่า = **So + Aux + S** · เห็นด้วยปฏิเสธ = **Neither + Aux + S**'
    ],
    extraExamples: [
      { en: 'My sister doesn’t drink coffee after 4 p.m., and neither do I.', th: 'น้องสาวฉันไม่ดื่มกาแฟหลังสี่โมงเย็น และฉันก็เหมือนกัน', focus: 'ประโยคหน้าเป็นปฏิเสธ Present Simple → neither do I' }
    ],
    extraMistakes: [
      { wrong: '"I did not watch the match." — "Neither didn’t I."', right: '"I did not watch the match." — "Neither did I."', whyTh: 'Neither มีความหมายปฏิเสธอยู่แล้ว ห้ามใช้ didn’t ซ้ำ ต้องใช้ **Neither did I**' }
    ]
  },
  g23: {
    conceptTh: 'เวลาเราอยากถามคนแปลกหน้าหรือลูกค้าอย่างสุภาพ เราจะเติมวลีนำเช่น `Could you tell me...`, `Do you know...`, `I wonder...` กลายเป็น **Indirect Question** กฎเหล็กข้อเดียวที่คนไทยพลาดบ่อยสุดคือ **ส่วนคำถามที่ซ้อนอยู่ข้างหลังต้องเรียงแบบประโยคบอกเล่า (`S + V`) และห้ามใส่ `do/does/did` ซ้ำ!**',
    stepGuide: [
      { step: 1, titleTh: 'เปลี่ยน Direct Question → Indirect Question (สลับกลับเป็น S + V)', detailTh: 'ถ้ามี `is/are/can/will` ให้ย้ายกลับไปไว้ **หลังประธาน** · ถ้ามี `do/does/did` ให้ **ตัดทิ้ง** แล้วผันกริยาแท้ตามประธาน/Tense แทน', miniEx: 'Where **is** the exit? → Could you tell me where **the exit is**?' },
      { step: 2, titleTh: 'ถ้าเป็นคำถาม Yes/No ให้เติม if หรือ whether เชื่อม', detailTh: 'ไม่มี Wh-word ให้ใส่ **if / whether** คั่นก่อนเรียง `S + V`', miniEx: 'Did he call? → Do you know **if he called**?' },
      { step: 3, titleTh: 'แยกคำอุทาน What vs How', detailTh: '**What + (a/an) + Adj + Noun!** (มีคำนามปิดท้าย) · **How + Adj/Adv (+ S + V)!** (ไม่มีคำนามตามหลัง Adj)', miniEx: '**What a** lovely day! vs **How** lovely!' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Direct Question vs Indirect Question',
      items: [
        { label: 'Direct Question (ถามตรง)', descTh: 'กริยาช่วยอยู่หน้าประธานตามปกติ', example: 'What time **does the bank close**?' },
        { label: 'Indirect Question (ถามสุภาพ)', descTh: 'ตัด does ออก แล้วผันกริยาตามประธาน (`S + V`)', example: 'Could you tell me what time **the bank closes**?' }
      ]
    },
    quickChecklist: [
      'หลัง `Could you tell me / Do you know / I wonder` + `Wh- / if` → ต้องเรียง **ประธาน + กริยา (S + V)** เสมอ',
      'ตัด `do / does / did` ในส่วนคำถามซ้อนทิ้ง แล้วผันกริยาแท้ให้ตรง Tense',
      '**What a/an + Adj + นามเอกพจน์** vs **How + Adj/Adv**'
    ],
    extraExamples: [
      { en: 'I was wondering whether the conference room is available this afternoon.', th: 'ฉันสงสัยว่าห้องประชุมจะว่างช่วงบ่ายนี้ไหม', focus: 'whether + S (the conference room) + V (is)' }
    ],
    extraMistakes: [
      { wrong: 'Do you know where does she work?', right: 'Do you know where she works?', whyTh: 'ใน Indirect Question ต้องตัด does ออก แล้วเรียงบอกเล่าเป็น **she works**' }
    ]
  },
  g24: {
    conceptTh: '**Passive Voice** ใช้เมื่อเราอยากเน้นที่ **"ผู้ถูกกระทำ"** หรือไม่รู้/ไม่จำเป็นต้องบอกว่าใครเป็นคนทำ สูตรมีแค่สูตรเดียวตลอด 12 Tenses คือ **[Verb to Be (ผันตาม Tense) + V3]** เคล็ดลับสำคัญอีกข้อคือ **กริยาอกรรม (Intransitive Verbs) ที่ไม่มีกรรม เช่น `happen, occur, arrive, appear, die, consist` ห้ามทำเป็น Passive เด็ดขาด!**',
    stepGuide: [
      { step: 1, titleTh: 'เช็กก่อนว่าประธาน "ทำเอง (Active)" หรือ "ถูกทำ (Passive)"', detailTh: 'ลองแปลในใจ: ประตูเปิดเองไม่ได้ (ถูกเปิด → Passive) · พนักงานเปิดประตู (ทำเอง → Active)', miniEx: 'The bridge **was built** in 1990. (สะพานถูกสร้าง)' },
      { step: 2, titleTh: 'เลือกตัว Be ให้ตรง Tense แล้วตามด้วย V3 เสมอ', detailTh: 'Present Simple = **is/are V3** · Past Simple = **was/were V3** · Continuous = **is/was being V3** · Perfect = **has/have/had been V3** · Modal = **will/can/must be V3**', miniEx: 'The report **is being reviewed** right now.' },
      { step: 3, titleTh: 'จำกริยาต้องห้ามที่ทำเป็น Passive ไม่ได้!', detailTh: '`happen, occur, take place, arrive, appear, disappear, exist, consist of, belong to` ใช้รูป Active เสมอ', miniEx: 'The accident **happened** last night. (ห้ามเขียน ~~was happened~~ ❌)' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Active vs Passive ใน 3 Tense ออกสอบบ่อย',
      items: [
        { label: 'Present Continuous', descTh: 'Active: `is/are + V-ing` · Passive: `is/are being + V3`', example: 'They **are fixing** the road. → The road **is being fixed**.' },
        { label: 'Present Perfect', descTh: 'Active: `has/have + V3` · Passive: `has/have been + V3`', example: 'She **has sent** the files. → The files **have been sent**.' },
        { label: 'Modal Verbs', descTh: 'Active: `must/can + V1` · Passive: `must/can be + V3`', example: 'You **must sign** this. → This **must be signed**.' }
      ]
    },
    quickChecklist: [
      'สูตรเดียวจำตลอดชีวิต: **Passive = be (ผันตาม Tense) + V3**',
      'เห็น `being + V3` = กำลังถูกทำ · เห็น `been + V3` = ถูกทำไปแล้ว (Perfect)',
      'ห้ามทำ Passive กับ `happen, occur, arrive, appear, consist of, belong to`'
    ],
    extraExamples: [
      { en: 'All customer data is encrypted before it is stored on our cloud servers.', th: 'ข้อมูลลูกค้าทั้งหมดจะถูกเข้ารหัสก่อนที่จะถูกจัดเก็บบนเซิร์ฟเวอร์คลาวด์ของเรา', focus: 'Present Simple Passive (is encrypted / is stored)' }
    ],
    extraMistakes: [
      { wrong: 'A serious power outage was happened in the downtown area.', right: 'A serious power outage happened in the downtown area.', whyTh: 'happen เป็นกริยาอกรรม ห้ามใช้รูป Passive (`was happened` ผิดเสมอ)' }
    ]
  },
  g25: {
    conceptTh: '**If-Clauses (ประโยคเงื่อนไข)** แยกง่ายๆ ตามระดับ "ความเป็นจริงของเวลา": **Type 0** (ความจริงเสมอ), **Type 1** (เป็นไปได้จริงในอนาคต), **Type 2** (สมมติตรงข้ามความจริงปัจจุบัน), **Type 3** (สมมติย้อนอดีตที่แก้ไม่ได้แล้ว), และ **Mixed Conditional** (อดีตเปลี่ยน → ปัจจุบันเปลี่ยน) นอกจากนี้ในข้อสอบระดับสูงยังมีการละ `If` ด้วยการสลับคำ (`Should / Were / Had`)',
    stepGuide: [
      { step: 1, titleTh: 'จับคู่สูตร 4 Types ให้เป๊ะ (ฝั่ง If ↔ ฝั่งผลลัพธ์)', detailTh: 'T0: `V1 ↔ V1` · T1: `V1 ↔ will V1` · T2: `V2/were ↔ would V1` · T3: `had V3 ↔ would have V3`', miniEx: 'If I **knew** (V2), I **would tell** (would V1) you.' },
      { step: 2, titleTh: 'เข้าใจ Mixed Conditional (อดีตส่งผลถึงวันนี้)', detailTh: 'เงื่อนไขในอดีต (**If + had V3**) ส่งผลลัพธ์มาถึงปัจจุบัน (มีคำว่า `now / today` → **would + V1**)', miniEx: 'If I **had taken** that job, I **would live** in Tokyo **now**.' },
      { step: 3, titleTh: 'รู้จักคำเชื่อมเงื่อนไขอื่นและการละ If (Inversion)', detailTh: '**unless** (= if...not), **provided that / as long as** (= โดยมีเงื่อนไขว่า), **in case** (= เผื่อว่า) · ละ If: **Should + S + V1** (T1), **Were + S + ...** (T2), **Had + S + V3** (T3)', miniEx: '**Had** I known earlier, I would have helped.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Type 2 vs Type 3 vs Mixed',
      items: [
        { label: 'Type 2 (สมมติตอนนี้)', descTh: 'ตอนนี้ไม่ได้เป็นแบบนั้น (`V2/were → would V1`)', example: 'If I **were** you, I **would accept** the offer.' },
        { label: 'Type 3 (เสียดายอดีต)', descTh: 'เหตุการณ์จบไปแล้วในอดีต (`had V3 → would have V3`)', example: 'If we **had left** earlier, we **would have caught** the flight.' },
        { label: 'Mixed (อดีต → ตอนนี้)', descTh: 'อดีตเปลี่ยน ทำให้สภาพ "ตอนนี้ (now/today)" เปลี่ยน', example: 'If she **had slept** last night, she **wouldn’t be** tired **now**.' }
      ]
    },
    quickChecklist: [
      'ฝั่ง `If` ห้ามใส่ `will / would` (ใช้ `V1` / `V2` / `had V3`)',
      'Type 2 ใช้ **were** กับทุกประธานได้ (`If I were you...`)',
      '`unless` = `if ... not` (ห้ามใส่ not ซ้ำในประโยค unless!)',
      'ละ If แบบทางการ: `Should you need...` / `Were I you...` / `Had we known...`'
    ],
    extraExamples: [
      { en: 'Should you require any further assistance, please contact our front desk.', th: 'หากคุณต้องการความช่วยเหลือเพิ่มเติม กรุณาติดต่อแผนกต้อนรับ', focus: 'การละ If แบบ Type 1 (Should + S + V1)' }
    ],
    extraMistakes: [
      { wrong: 'If I will see him tomorrow, I will give him the keys.', right: 'If I see him tomorrow, I will give him the keys.', whyTh: 'ในส่วนเงื่อนไขหลัง If (Type 1) ห้ามใส่ will ต้องใช้ Present Simple (**see**)' }
    ]
  },
  g26: {
    conceptTh: '**Unreal Past** คือกลุ่มโครงสร้างที่ใช้ **"กริยารูปอดีต (`V2 / were / had V3`)"** แต่ไม่ได้แปลว่าเกิดในอดีตเสมอไป — มันคือการ "ถอย Tense 1 ขั้น" เพื่อส่งสัญญาณว่า **"เรื่องนี้ไม่เป็นจริง / แค่ปรารถนา / อยากให้เปลี่ยน"** ได้แก่ `wish`, `if only`, `would rather`, และ `It’s (high) time`',
    stepGuide: [
      { step: 1, titleTh: 'Wish / If only: แยกความปรารถนา 3 เวลา', detailTh: 'อยากให้ **ตอนนี้** ต่างออกไป → **V2 / were** · เสียดายเรื่อง **ในอดีต** → **had + V3** · รำคาญอยากให้คนอื่นเปลี่ยนนิสัย → **would + V1**', miniEx: 'I wish I **spoke** French. (ตอนนี้) / I wish I **had studied** harder. (อดีต)' },
      { step: 2, titleTh: 'Would rather: แยก "ประธานคนเดียว" vs "เปลี่ยนประธาน"', detailTh: 'พูดถึงตัวเอง (ประธานเดียวกัน) → **would rather + V1** (`I’d rather stay home.`) · พูดถึงคนอื่น (มีประธานใหม่) → **would rather + S + V2** (`I’d rather you stayed.`)', miniEx: 'I’d rather **go** now. vs I’d rather **you didn’t tell** anyone.' },
      { step: 3, titleTh: 'It is (high/about) time + S + V2', detailTh: 'แปลว่า "ถึงเวลาที่ควรจะทำ...ได้แล้วนะ (ช้ากว่ากำหนดแล้ว)" ต้องใช้ **V2** เสมอ (หรือ `It’s time to V1` ถ้าไม่ระบุประธาน)', miniEx: 'It is high time we **upgraded** our old servers.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: wish (ปัจจุบัน) vs wish (อดีต)',
      items: [
        { label: 'wish + S + V2 / were (ปัจจุบัน)', descTh: 'ตอนนี้ไม่ได้เป็นอย่างที่หวัง', example: 'I wish I **had** more free time these days.' },
        { label: 'wish + S + had + V3 (อดีต)', descTh: 'เสียดายสิ่งที่ทำไปแล้วหรือไม่ได้ทำในอดีต', example: 'I wish I **had bought** that ticket yesterday.' }
      ]
    },
    quickChecklist: [
      'อยากให้ตอนนี้เปลี่ยน = `wish + V2 / were` · เสียดายอดีต = `wish + had + V3`',
      '`would rather + V1` (ทำเอง) vs `would rather + S + V2` (อยากให้คนอื่นทำ)',
      '`It is (high) time + S + V2` (ใช้ V2 เสมอ แม้พูดถึงตอนนี้!)'
    ],
    extraExamples: [
      { en: 'If only we had booked the hotel room two weeks earlier!', th: 'ถ้าเพียงแต่เราจองห้องพักโรงแรมเร็วกว่านี้สักสองสัปดาห์ก็คงดี!', focus: 'If only + had V3 = เสียดายเรื่องอดีต' }
    ],
    extraMistakes: [
      { wrong: 'I wish I have a bigger apartment near the station.', right: 'I wish I had a bigger apartment near the station.', whyTh: 'ปรารถนาเรื่องไม่จริงในปัจจุบันหลัง wish ต้องถอยเป็น V2 (**had**)' }
    ]
  },
  g27: {
    conceptTh: '**Relative Clauses** (`who, whom, whose, which, that, where, when`) คือประโยคย่อยที่ใช้ขยายคำนามให้ชัดเจนขึ้นโดยไม่ต้องตัดเป็น 2 ประโยคสั้นๆ ส่วน **Noun Clauses** (`what, that, whether, how`) คือประโยคย่อยที่ทำหน้าที่เป็นประธานหรือกรรมทั้งก้อนแทนคำนาม จุดออกสอบที่พลาดบ่อยสุดคือ **หลังเครื่องหมาย comma (,) ห้ามใช้ `that` เด็ดขาด!**',
    stepGuide: [
      { step: 1, titleTh: 'เลือก Relative Pronoun ให้ตรงกับคำนามข้างหน้าและหน้าที่', detailTh: 'คน = **who** (ประธาน) / **whom** (กรรม/หลังบุพบท) · ความเป็นเจ้าของ (+ นาม) = **whose** · สิ่งของ = **which** · สถานที่ (+ S+V สมบูรณ์) = **where**', miniEx: 'The author **whose** book won the prize is Thai.' },
      { step: 2, titleTh: 'แยก Defining (ไม่มี comma) vs Non-defining (มี comma คั่น)', detailTh: 'ถ้ามี **comma (,)** คั่นข้อมูลเสริม เช่น ชื่อเฉพาะ (`Bangkok, which...` / `My mother, who...`) **ห้ามใช้ `that`** และห้ามละตัวเชื่อมออก', miniEx: 'Chiang Mai, **which** is in northern Thailand, is famous for coffee.' },
      { step: 3, titleTh: 'แยก where vs which กับสถานที่', detailTh: 'ถ้าประโยคหลังมี **กริยาครบและขาดแค่สถานที่** (in/at) ใช้ **where** · แต่ถ้าประโยคหลัง **ขาดประธานหรือกรรมตรง** (เช่น `...which attracts tourists`) ต้องใช้ **which**!', miniEx: 'The cafe **where** we met (ครบแล้ว) vs The cafe **which** opened yesterday (ขาดประธาน)' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: where vs which และ what vs that (Noun Clause)',
      items: [
        { label: 'where vs which (กับสถานที่)', descTh: 'ลองเติมสถานที่กลับเข้าไป: ถ้าต้องใส่ `in/at` → ใช้ **where** · ถ้าไม่ต้องใส่บุพบท → ใช้ **which**', example: 'The hotel **where** we stayed (stayed *in* it) vs The hotel **which** has a pool.' },
        { label: 'what vs that (ใน Noun Clause)', descTh: '**what** = สิ่งที่ (ไม่มีคำนามอยู่ข้างหน้า) · **that** = การที่/ว่า (ตามหลังคำนามหรือกริยา `know/believe that`)', example: '**What** he said surprised us. vs I know **that** he is honest.' }
      ]
    },
    quickChecklist: [
      'เห็น **comma (,)** หน้าช่องว่าง → ตัด **`that`** ทิ้งทันที (ใช้ `who` หรือ `which`)',
      'เห็นคำนามตามหลังช่องว่างทันทีและแปลว่า "ของ..." → ใช้ **whose**',
      'ใช้ Noun Clause เป็นประธาน (`What you need is...`) → กริยาหลักเป็น **เอกพจน์**'
    ],
    extraExamples: [
      { en: 'What matters most in learning a language is consistent daily practice.', th: 'สิ่งที่สำคัญที่สุดในการเรียนภาษาคือการฝึกฝนอย่างสม่ำเสมอทุกวัน', focus: 'Noun Clause (What matters most...) เป็นประธานเอกพจน์ → is' }
    ],
    extraMistakes: [
      { wrong: 'My laptop, that I bought last year, still works smoothly.', right: 'My laptop, which I bought last year, still works smoothly.', whyTh: 'หลัง comma (Non-defining Relative Clause) ห้ามใช้ that ต้องใช้ **which**' }
    ]
  },
  g28: {
    conceptTh: '**Reported Speech** คือการนำคำพูดของคนอื่นมาเล่าต่อ เมื่อกริยานำเล่าเป็นอดีต (`said, told, asked, confirmed`) ภาษาอังกฤษต้อง **ถอย Tense ลง 1 ขั้น (Backshift)** พร้อมเปลี่ยนสรรพนามและคำบอกเวลา (`today → that day`, `yesterday → the day before`, `tomorrow → the next day`) และถ้าเล่าประโยคคำถามต้องเรียงกลับเป็น **บอกเล่า (S + V)** เหมือน Indirect Questions',
    stepGuide: [
      { step: 1, titleTh: 'จำตาราง Backshift (ถอย Tense 1 ขั้นเมื่อกริยานำเป็นอดีต)', detailTh: '`V1 → V2`, `is/are → was/were`, `V2 / have V3 → had V3`, `will → would`, `can → could`, `may → might`', miniEx: '"I will call you." → She said she **would** call me.' },
      { step: 2, titleTh: 'แยก say vs tell ให้ขาด', detailTh: '**tell + คน** ทันที (`told me that...`) · **say** ไม่ตามด้วยคนตรงๆ (`said that...` หรือ `said to me that...`)', miniEx: 'He **told me** he was busy. (ไม่ใช่ ~~He told that...~~)' },
      { step: 3, titleTh: 'เล่าคำถามและคำสั่งให้ถูกโครงสร้าง', detailTh: 'คำถาม Yes/No → `asked + (คน) + if/whether + S + V` · คำถาม Wh- → `asked + (คน) + Wh- + S + V` · คำสั่ง/ขอร้อง/เตือน → `told / asked / reminded / advised + คน + (not) to V1`', miniEx: 'She **reminded us not to** forget our ID cards.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: คำบอกเวลาที่เปลี่ยนเมื่อเล่าต่อ',
      items: [
        { label: 'now / today / tonight', descTh: 'เปลี่ยนเป็นเวลาอ้างอิงในอดีต', example: 'then / that day / that night' },
        { label: 'yesterday / last week', descTh: 'เปลี่ยนเป็นช่วงเวลาก่อนหน้านั้น', example: 'the day before / the previous week' },
        { label: 'tomorrow / next month', descTh: 'เปลี่ยนเป็นช่วงเวลาถัดไป', example: 'the next day / the following month' }
      ]
    },
    quickChecklist: [
      '**tell + คน** (`told her`) · **say + that** (`said that`)',
      'รายงานคำถามต้องเรียง **S + V** และตัด `do/does/did` ทิ้ง (`asked where I lived`)',
      'รายงานคำสั่ง/คำเตือนใช้ **`Verb + คน + (not) to V1`** (`advised me to wait`)'
    ],
    extraExamples: [
      { en: 'The doctor advised my father to reduce his sodium intake immediately.', th: 'คุณหมอแนะนำให้พ่อของฉันลดปริมาณโซเดียมทันที', focus: 'Reporting Verb คำแนะนำ: advise + คน + to V1' }
    ],
    extraMistakes: [
      { wrong: 'She told that she would arrive before noon.', right: 'She told me that she would arrive before noon.', whyTh: 'หลัง **told** ต้องมีกรรมที่เป็นคนเสมอ (หรือเปลี่ยนเป็น `She said that...`)' }
    ]
  },
  g29: {
    conceptTh: 'บทนี้รวบ 2 ทักษะทำคะแนนสูงสุดในข้อสอบ TOEIC / A-Level / IELTS: (1) **Word Formation** การเดาชนิดคำจากหางคำ (Suffix) เพื่อเลือกคำลงช่องว่างได้แม้ไม่รู้คำแปลทุกตัว และ (2) **Parallel Structure** การจัดรูปคำหรือวลีที่เชื่อมด้วย `and, or, but, both...and, not only...but also` ให้มีโครงสร้างเสมอกันทุกตัว',
    stepGuide: [
      { step: 1, titleTh: 'จำหางคำ (Suffixes) 4 ตระกูลเพื่อฟันธงชนิดคำใน 3 วินาที', detailTh: '**Noun:** `-tion, -ment, -ness, -ity, -ance/-ence, -er/-ist` · **Adj:** `-ive, -ous, -al, -ful, -less, -able/-ible` · **Verb:** `-ize, -ate, -ify, -en` · **Adv:** `-ly`', miniEx: 'create (V) → creation (N) → creative (Adj) → creatively (Adv)' },
      { step: 2, titleTh: 'เช็ก Parallel Structure (โครงสร้างคู่ขนาน) หน้า-หลังคำเชื่อม', detailTh: 'คำที่เชื่อมด้วย `and / or / but` หรือ `A, B, and C` ต้องเป็นชนิดคำหรือรูปกริยาเดียวกันทั้งหมด เช่น `V-ing, V-ing, and V-ing` หรือ `Adj, Adj, and Adj`', miniEx: 'She likes **hiking**, **swimming**, and **cycling**. (V-ing ทั้ง 3 ตัว)' },
      { step: 3, titleTh: 'เช็กคู่ Correlative Conjunctions ให้ตรงรูปกันทั้งสองฝั่ง', detailTh: '**both A and B**, **either A or B**, **neither A nor B**, **not only A but also B** — สิ่งที่ตามหลังตัวแรกและตัวที่สองต้องมีโครงสร้างเท่ากัน', miniEx: 'He is **not only** smart **but also** hardworking.' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: Parallel ที่ถูก vs ผิด',
      items: [
        { label: 'ผิด (ไม่ขนานกัน)', descTh: 'ปน V-ing กับ to V1 ในชุดรายการเดียวกัน', example: '~~The job involves answering calls, filing reports, and to greet guests.~~' },
        { label: 'ถูก (ขนานกันทุกตัว)', descTh: 'ใช้ V-ing เหมือนกันทั้ง 3 กิจกรรม', example: 'The job involves **answering** calls, **filing** reports, and **greeting** guests.' }
      ]
    },
    quickChecklist: [
      'ดูคำข้างหน้า-ข้างหลังช่องว่างเพื่อระบุชนิดคำ แล้วใช้ Suffix ตัดช้อยส์ทันที',
      'เห็น `and / or / both...and / not only...but also` → เช็กรูปคำทั้ง 2 ฝั่งให้ **ขนานกันเสมอ**',
      'จำ Prefix กลับความหมาย: `un-, in-, im-, il-, ir-, dis-, mis-`'
    ],
    extraExamples: [
      { en: 'The new software is reliable, user-friendly, and affordable.', th: 'ซอฟต์แวร์ตัวใหม่เชื่อถือได้ ใช้งานง่าย และราคาจับต้องได้', focus: 'Parallel Adjectives ทั้ง 3 คำ' }
    ],
    extraMistakes: [
      { wrong: 'She wants to improve her listening, speaking, and how to write.', right: 'She wants to improve her listening, speaking, and writing.', whyTh: 'Parallel Structure: ต้องใช้รูป Gerund (`listening, speaking, and writing`) ให้เสมอกันทั้ง 3 ตัว' }
    ]
  },
  g30: {
    conceptTh: 'บทสรุปสุดท้ายนี้รวบรวม **กับดักไวยากรณ์ที่คนไทยพลาดซ้ำมากที่สุด** จากนิสัยการแปลไทยเป็นอังกฤษตรงตัวคำต่อคำ เช่น "ถึงแม้...แต่...", "เพราะ...ดังนั้น...", "ชอบมาก → very like", "กลับบ้าน → go to home", "มี 3 คน → have 3 people" การจำและแก้ 10+ จุดนี้จะทำให้ภาษาอังกฤษของคุณดูเป็นธรรมชาติขึ้นทันทีแบบก้าวกระโดด',
    stepGuide: [
      { step: 1, titleTh: 'เลิกใส่คำเชื่อมซ้ำคู่แบบภาษาไทย', detailTh: 'ห้ามเขียน `Although...but` และ `Because...so` ให้เลือกใช้แค่ตัวใดตัวหนึ่งเท่านั้น', miniEx: '**Although** it was late, we kept working. (ตัด but ทิ้ง)' },
      { step: 2, titleTh: 'เลิกใช้ have แทนการมีอยู่ และเลิกใช้ very หน้าคำกริยา', detailTh: 'บอกว่า "มี..." ในสถานที่ใช้ **There is/are** · บอกว่า "ชอบมาก" ใช้ **really like** หรือ **like ... very much** (ห้าม `very like ❌`)', miniEx: '**There are** many cafes here. / I **really like** Thai food.' },
      { step: 3, titleTh: 'จำคำสถานที่ที่เป็น Adverb (ห้ามใส่ to) และคำที่ห้ามใส่ about/with', detailTh: '**go home / go abroad / go upstairs / go downtown** (ไม่มี to) · **discuss** (ไม่มี about) · **marry** (ไม่มี with) · **borrow from / lend to** (อย่าสลับทิศ)', miniEx: 'Let’s **go home** now. / Can I **borrow** your pen?' }
    ],
    compareBox: {
      titleTh: 'เทียบชัดๆ: คำคู่ที่คนไทยสลับทิศบ่อยที่สุด',
      items: [
        { label: 'borrow (ขอยืมมา) vs lend (ให้ยืมไป)', descTh: '**borrow** = รับเข้ามา (`borrow sth from sb`) · **lend** = ส่งออกไป (`lend sb sth`)', example: 'Can I **borrow** your charger? / Could you **lend** me your charger?' },
        { label: 'open/close vs turn on/off', descTh: 'ประตู/หน้าต่าง/แอป ใช้ **open/close** · ไฟ/แอร์/ทีวี/เครื่องใช้ไฟฟ้า ใช้ **turn on/off**', example: 'Please **turn off** the air conditioner before leaving.' }
      ]
    },
    quickChecklist: [
      'ห้าม `Although...but` / `Because...so` / `very like` / `go to home` / `open the light`',
      'มีสิ่งของในสถานที่ = **There is / There are** (ไม่ใช่ `It has`)',
      'ฉันเบื่อ = `I am bored` (ไม่ใช่ `I am boring` ซึ่งแปลว่าฉันเป็นคนน่าเบื่อ!)',
      'ขอยืม = **borrow** · ให้ยืม = **lend** · เปิดไฟ = **turn on the light**'
    ],
    extraExamples: [
      { en: 'Could you turn off the lights and lock the door before you go home?', th: 'ช่วยปิดไฟและล็อกประตูก่อนกลับบ้านได้ไหม', focus: 'turn off the lights (ไม่ใช่ close) + go home (ไม่มี to)' }
    ],
    extraMistakes: [
      { wrong: 'Please close the air conditioner when you leave the room.', right: 'Please turn off the air conditioner when you leave the room.', whyTh: 'เครื่องใช้ไฟฟ้า (ไฟ, แอร์, พัดลม, ทีวี) ใช้ **turn on / turn off** ไม่ใช่ open / close' }
    ]
  }
});

/* ===================== APPLY CURRICULUM 2.0 TO GRAMMAR_LESSONS ===================== */
(function applyGrammarCurriculumV2() {
  if (typeof GRAMMAR_LESSONS === 'undefined' || !Array.isArray(GRAMMAR_LESSONS)) return;

  // 1. Insert 7 new bridge lessons right after their anchor lessons (idempotent)
  GRAMMAR_V2_NEW_LESSONS.forEach(newLesson => {
    if (GRAMMAR_LESSONS.some(l => l.id === newLesson.id)) return;
    const anchorIdx = GRAMMAR_LESSONS.findIndex(l => l.id === newLesson.afterId);
    if (anchorIdx >= 0) {
      GRAMMAR_LESSONS.splice(anchorIdx + 1, 0, newLesson);
    } else {
      GRAMMAR_LESSONS.push(newLesson);
    }
  });

  // 2. Merge deep Thai enrichments into existing 30 lessons
  GRAMMAR_LESSONS.forEach(lesson => {
    const enr = GRAMMAR_V2_ENRICHMENTS[lesson.id];
    if (!enr) return;
    if (enr.conceptTh && !lesson.conceptTh) lesson.conceptTh = enr.conceptTh;
    if (enr.stepGuide && !lesson.stepGuide) lesson.stepGuide = enr.stepGuide;
    if (enr.compareBox && !lesson.compareBox) lesson.compareBox = enr.compareBox;
    if (enr.quickChecklist && !lesson.quickChecklist) lesson.quickChecklist = enr.quickChecklist;
    if (Array.isArray(enr.extraExamples) && enr.extraExamples.length) {
      lesson.examples = Array.isArray(lesson.examples) ? lesson.examples : [];
      enr.extraExamples.forEach(ex => {
        if (!lesson.examples.some(e => e.en === ex.en)) lesson.examples.push(ex);
      });
    }
    if (Array.isArray(enr.extraMistakes) && enr.extraMistakes.length) {
      lesson.mistakes = Array.isArray(lesson.mistakes) ? lesson.mistakes : [];
      enr.extraMistakes.forEach(m => {
        if (!lesson.mistakes.some(x => x.wrong === m.wrong)) lesson.mistakes.push(m);
      });
    }
  });

  // 3. Recompute sequential lesson numbers (1..37) and sync GRAMMAR_PHASES ranges
  GRAMMAR_LESSONS.forEach((lesson, idx) => {
    lesson.num = idx + 1;
  });

  if (typeof GRAMMAR_PHASES !== 'undefined' && Array.isArray(GRAMMAR_PHASES)) {
    GRAMMAR_PHASES.forEach(ph => {
      const nums = GRAMMAR_LESSONS.filter(l => l.phase === ph.id).map(l => l.num);
      if (nums.length) {
        ph.lessonRange = [Math.min(...nums), Math.max(...nums)];
      }
    });
  }
})();
