/* =========================================================
 * Oxflashcards Grammar Real-Life Dialogues (37 Lessons)
 * Contextual spoken dialogues with highlighted target grammar,
 * Thai translations, speaker roles, and quick takeaways.
 * ========================================================= */

const GRAMMAR_DIALOGUES = {
  g01: {
    titleEn: 'At the Campus Cafe',
    sceneTh: 'นิน่ากับทอมคุยกันเรื่องร้านกาแฟใหม่หน้ามหาวิทยาลัย',
    emoji: '☕',
    speakers: {
      A: { name: 'Nina', roleTh: 'นักศึกษาไทย' },
      B: { name: 'Tom', roleTh: 'เพื่อนแลกเปลี่ยน' }
    },
    lines: [
      { sp: 'A', en: 'Hey Tom! This **new** **cafe** looks **really** nice.', th: 'หวัดดีทอม! คาเฟ่ใหม่ร้านนี้ดูดีมากเลย' },
      { sp: 'B', en: '**Yes**, I **drink** **coffee** here **every** morning.', th: 'ใช่ ฉันดื่มกาแฟที่นี่ทุกเช้าเลย' },
      { sp: 'A', en: 'Do **you** **like** their **iced** tea **or** matcha?', th: 'นายชอบชาเย็นหรือมัทฉะของที่นี่เหรอ' },
      { sp: 'B', en: 'I **love** the matcha, **and** the **staff** work **quickly**.', th: 'ฉันชอบมัทฉะมาก แล้วพนักงานก็ทำงานเร็วด้วย' },
      { sp: 'A', en: 'Great! Let us **sit** **near** the **window**.', th: 'เยี่ยมเลย งั้นเรานั่งใกล้หน้าต่างกันนะ' },
      { sp: 'B', en: '**Wow**, that **table** is **quiet** **and** bright.', th: 'ว้าว โต๊ะนั้นเงียบแล้วก็สว่างดีด้วย' }
    ],
    takeawayTh: [
      '**คำนาม (Noun)** เช่น `cafe, coffee, window` ใช้เรียกคน สัตว์ สิ่งของ และสถานที่',
      '**คำคุณศัพท์ (Adj)** เช่น `new, quiet` ขยายนาม ส่วน **คำกริยาวิเศษณ์ (Adv)** เช่น `really, quickly` ขยายกริยาหรือ Adj',
      '**คำเชื่อม & บุพบท** เช่น `and, or` เชื่อมคำ และ `near` บอกตำแหน่งสถานที่'
    ]
  },

  g02: {
    titleEn: 'Packing for Chiang Mai',
    sceneTh: 'ฝ้ายกับเบนช่วยกันจัดกระเป๋าก่อนออกเดินทางไปเชียงใหม่',
    emoji: '🧳',
    speakers: {
      A: { name: 'Fai', roleTh: 'เพื่อนร่วมทริป' },
      B: { name: 'Ben', roleTh: 'เพื่อนชาวอังกฤษ' }
    },
    lines: [
      { sp: 'A', en: 'Ben, is this **your** charger, or is it **mine**?', th: 'เบน นี่ที่ชาร์จของนาย หรือของฉันนะ' },
      { sp: 'B', en: 'It is **mine**! Put **it** in **my** small bag, please.', th: 'ของฉันเอง! ใส่ไว้ในกระเป๋าใบเล็กของฉันได้เลย' },
      { sp: 'A', en: 'Okay. Do we have enough **water** and **snacks** for the trip?', th: 'โอเค เรามีน้ำกับขนมพอสำหรับทริปนี้ไหม' },
      { sp: 'B', en: 'Yes, **Lina\'s** mom gave **us** two **bottles** and some fruit.', th: 'พอเลย แม่ของลีน่าให้น้ำสองขวดกับผลไม้เรามาด้วย' },
      { sp: 'A', en: 'That is so kind of **her**! Did you pack **yourself**?', th: 'ท่านใจดีจัง! แล้วนายจัดกระเป๋าเองหมดเลยเหรอ' },
      { sp: 'B', en: 'Almost! **My** sister helped **me** fold these **shirts**.', th: 'เกือบหมดนะ พี่สาวช่วยฉันพับเสื้อพวกนี้' }
    ],
    takeawayTh: [
      '`your / my` (Possessive Adj) ต้องตามด้วยนาม ส่วน `mine` (Possessive Pronoun) ใช้เดี่ยวๆ แทน `my charger`',
      '`Lina\'s mom` ใช้ `\'s` แสดงความเป็นเจ้าของ และ `water` เป็นนามนับไม่ได้ จึงไม่เติม `-s`',
      '`yourself` เป็น Reflexive Pronoun ใช้เน้นว่าทำด้วยตัวเอง'
    ]
  },

  g02b: {
    titleEn: 'At the Night Market',
    sceneTh: 'มิ้นท์พาอเล็กซ์เดินช้อปปิ้งและซื้อของกินที่ตลาดนัดกลางคืน',
    emoji: '🛍️',
    speakers: {
      A: { name: 'Mint', roleTh: 'เจ้าถิ่นไทย' },
      B: { name: 'Alex', roleTh: 'นักท่องเที่ยว' }
    },
    lines: [
      { sp: 'A', en: 'Look at **these** mango boxes here. They smell amazing!', th: 'ดูกล่องมะม่วงพวกนี้สิ หอมมากเลย' },
      { sp: 'B', en: 'Nice! What about **those** lanterns over there?', th: 'น่ากินจัง แล้วโคมไฟพวกนั้นที่อยู่ตรงโน้นล่ะ' },
      { sp: 'A', en: '**That** stall sells handmade lamps, but I don\'t have **much** cash left.', th: 'ร้านนั้นขายโคมไฟแฮนด์เมด แต่ฉันเหลือเงินสดไม่เยอะแล้ว' },
      { sp: 'B', en: 'No problem. Do you need **some** money? I have **a lot of** baht.', th: 'ไม่เป็นไร เธอต้องการเงินเพิ่มไหม ฉันมีเงินบาทเยอะเลย' },
      { sp: 'A', en: 'Just **a little** cash for **a few** skewers, thanks!', th: 'ขอเงินสดนิดหน่อยไว้ซื้อหมูปิ้งไม่กี่ไม้ ขอบใจนะ' },
      { sp: 'B', en: 'How **many** skewers do you want? I don\'t see **any** spicy sauce.', th: 'เธออยากได้กี่ไม้ ฉันไม่เห็นซอสเผ็ดเลย' }
    ],
    takeawayTh: [
      '**ใกล้ตัว**: `this` (1) / `these` (หลายชิ้น) · **ไกลตัว**: `that` (1) / `those` (หลายชิ้น)',
      '**นามนับไม่ได้** (`cash, money`) ใช้ `much, a little` ส่วน **นามนับได้พหูพจน์** (`skewers`) ใช้ `many, a few`',
      '`some` ใช้ในประโยคบอกเล่า/เสนอให้ ส่วน `any` ใช้ในประโยคปฏิเสธ (`don\'t see any`)'
    ]
  },

  g03: {
    titleEn: 'Checking an Email Draft',
    sceneTh: 'พลอยให้แดนช่วยตรวจอีเมลภาษาอังกฤษก่อนส่งให้ลูกค้า',
    emoji: '📧',
    speakers: {
      A: { name: 'Ploy', roleTh: 'พนักงานใหม่' },
      B: { name: 'Dan', roleTh: 'หัวหน้าทีม' }
    },
    lines: [
      { sp: 'A', en: 'Dan, **I\'m** ready to send this email to **Mr. Lee**.', th: 'แดน ฉันพร้อมส่งอีเมลนี้ให้คุณลีแล้วค่ะ' },
      { sp: 'B', en: 'Wait—**it\'s** good, but capitalize **Monday** and **Bangkok**.', th: 'เดี๋ยวก่อน เนื้อหาดีแล้ว แต่ต้องขึ้นต้น Monday กับ Bangkok ด้วยตัวพิมพ์ใหญ่นะ' },
      { sp: 'A', en: 'Oops! **I\'ve** fixed them. What about the apostrophe in **don\'t**?', th: 'อุ๊ย แก้แล้วค่ะ แล้วเครื่องหมายอะพอสทรอฟีในคำว่า don\'t ล่ะคะ' },
      { sp: 'B', en: '**That\'s** right, and use a comma before **please** at the end.', th: 'อันนั้นถูกแล้ว แล้วใส่คอมม่าหน้าคำว่า please ตอนท้ายด้วยนะ' },
      { sp: 'A', en: 'Got it! **He\'s** waiting for **our** price list, **isn\'t** he?', th: 'เข้าใจแล้วค่ะ เขากำลังรอใบเสนอราคาของเราอยู่ใช่ไหมคะ' },
      { sp: 'B', en: 'Yes, **let\'s** send it now before **5 p.m.**!', th: 'ใช่ ส่งตอนนี้เลยก่อน 5 โมงเย็นกันเถอะ!' }
    ],
    takeawayTh: [
      '**รูปย่อ (Contractions)**: `I\'m = I am`, `it\'s = it is`, `I\'ve = I have`, `He\'s = He is`',
      '**ตัวพิมพ์ใหญ่ (Capitalization)**: ชื่อคน (`Mr. Lee`), วันในสัปดาห์ (`Monday`), และชื่อเมือง (`Bangkok`) ต้องขึ้นต้นด้วยตัวใหญ่เสมอ',
      '`don\'t` และ `isn\'t` ต้องวางเครื่องหมาย `\'` แทนตัวอักษรที่หายไปให้ถูกตำแหน่ง'
    ]
  },

  g04: {
    titleEn: 'Booking a Train Ticket',
    sceneTh: 'ก้องโทรจองตั๋วรถไฟกับเจ้าหน้าที่สถานีสำหรับวันหยุดยาว',
    emoji: '🚆',
    speakers: {
      A: { name: 'Kong', roleTh: 'ผู้โดยสาร' },
      B: { name: 'Sarah', roleTh: 'เจ้าหน้าที่จองตั๋ว' }
    },
    lines: [
      { sp: 'A', en: 'Hello, I\'d like **two** tickets to Hua Hin on **July third**.', th: 'สวัสดีครับ ขอจองตั๋วไปหัวหิน 2 ใบ วันที่ 3 กรกฎาคมครับ' },
      { sp: 'B', en: 'Sure! The train leaves at **eight fifteen** in the morning.', th: 'ได้ค่ะ รถไฟออกเวลา 8 โมง 15 นาทีตอนเช้านะคะ' },
      { sp: 'A', en: 'Great. How much is it for **second**-class seats?', th: 'ดีเลยครับ ที่นั่งชั้นสองราคาเท่าไรครับ' },
      { sp: 'B', en: 'It\'s **three hundred** baht each, so **six hundred** baht in total.', th: 'ใบละ 300 บาท รวมทั้งหมด 600 บาทค่ะ' },
      { sp: 'A', en: 'How long does the trip take from **Platform five**?', th: 'เดินทางนานแค่ไหนครับ จากชานชาลาที่ 5 ใช่ไหม' },
      { sp: 'B', en: 'About **three and a half** hours. Please arrive **twenty minutes** early.', th: 'ประมาณ 3 ชั่วโมงครึ่งค่ะ กรุณามาก่อนเวลา 20 นาทีนะคะ' }
    ],
    takeawayTh: [
      '**วันที่และลำดับ (Ordinal)** ใช้ `July third (3rd)`, `second-class` ไม่ใช้เลขจำนวนนับ (`three, two`)',
      '**หน่วยหลักร้อย** อย่าง `three hundred` เมื่อมีตัวเลขข้างหน้า **ห้ามเติม -s** หลัง `hundred`',
      '**เวลาและวัน**: ใช้ `at` นำหน้าเวลา (`at eight fifteen`) และ `on` นำหน้าวันที่ (`on July third`)'
    ]
  },

  g05: {
    titleEn: 'First Day at the Gym',
    sceneTh: 'แป้งมาสมัครฟิตเนสครั้งแรกและคุยกับเทรนเนอร์เจค',
    emoji: '🏋️',
    speakers: {
      A: { name: 'Pang', roleTh: 'สมาชิกใหม่' },
      B: { name: 'Jake', roleTh: 'เทรนเนอร์' }
    },
    lines: [
      { sp: 'A', en: 'Hi! I want to join **a** gym near my office.', th: 'สวัสดีค่ะ ฉันอยากสมัครฟิตเนสสักแห่งใกล้ที่ทำงาน' },
      { sp: 'B', en: 'Welcome! Do you have **an** hour for **a** quick tour?', th: 'ยินดีต้อนรับครับ คุณมีเวลาสักชั่วโมงไหม เดี๋ยวผมพาเดินดูรอบๆ' },
      { sp: 'A', en: 'Yes! Is **the** locker room on **the** second floor?', th: 'มีค่ะ ห้องล็อกเกอร์อยู่ชั้นสองใช่ไหมคะ' },
      { sp: 'B', en: 'Right, and **the** treadmill area has **a** great city view.', th: 'ใช่ครับ แล้วโซนลู่วิ่งก็มีวิวเมืองสวยมากด้วย' },
      { sp: 'A', en: 'Awesome. I usually drink **water** and eat **an** apple after class.', th: 'เยี่ยมเลย ปกติฉันดื่มน้ำแล้วก็กินแอปเปิลหนึ่งลูกหลังออกกำลังกาย' },
      { sp: 'B', en: 'Smart habit! **Exercise** is **the** best way to reduce stress.', th: 'เป็นนิสัยที่ดีมาก การออกกำลังกายเป็นวิธีลดความเครียดที่ดีที่สุดเลยครับ' }
    ],
    takeawayTh: [
      '`an hour` ใช้ `an` เพราะตัว `h` ไม่ออกเสียง (ขึ้นต้นด้วยเสียงสระ) เช่นเดียวกับ `an apple`',
      '`the` ใช้เมื่อเจาะจงชัดเจน (`the locker room`), ลำดับที่ (`the second floor`), และขั้นสุด (`the best`)',
      'นามนับไม่ได้หรือกล่าวถึงทั่วไป (`water, Exercise`) **ไม่ต้องใส่ a / an / the**'
    ]
  },

  g06: {
    titleEn: 'New Roommate Check-In',
    sceneTh: 'เจมส์กับบีมเพิ่งย้ายมาเป็นรูมเมตกันและคุยเรื่องกิจวัตรในหอพัก',
    emoji: '🏠',
    speakers: {
      A: { name: 'Beam', roleTh: 'รูมเมตไทย' },
      B: { name: 'James', roleTh: 'รูมเมตต่างชาติ' }
    },
    lines: [
      { sp: 'A', en: '**Are** you tired from moving? Your boxes **are** really heavy!', th: 'นายเหนื่อยจากการย้ายของไหม กล่องของนายหนักมากเลย' },
      { sp: 'B', en: 'A bit! **Do** you **have** an extra fan? It **is** warm in here.', th: 'นิดหน่อย นายมีพัดลมสำรองไหม ในนี้ค่อนข้างร้อนนะ' },
      { sp: 'A', en: 'Yes, I **do**! I **have** a small one on my desk.', th: 'มีสิ ฉันมีตัวเล็กอยู่บนโต๊ะตัวหนึ่ง' },
      { sp: 'B', en: 'Thanks! **Does** the building **have** a laundry room?', th: 'ขอบใจนะ ตึกนี้มีห้องซักผ้าไหม' },
      { sp: 'A', en: 'It **does**, on the ground floor, but it **doesn\'t** take cash.', th: 'มีอยู่ชั้นล่าง แต่เครื่องไม่รับเงินสดนะ' },
      { sp: 'B', en: 'Good to know. **I\'m** glad you **are** my roommate!', th: 'ดีเลยที่บอก ฉันดีใจที่ได้นายเป็นรูมเมตนะ' }
    ],
    takeawayTh: [
      '**Verb to Be** (`is/am/are`) ใช้คู่กับคุณศัพท์หรือคำนาม (`Are you tired?`, `It is warm`)',
      '**Verb to Do** (`Do/Does`) เป็นกริยาช่วยสร้างคำถามและปฏิเสธกับกริยาแท้ (`Do you have...?`, `doesn\'t take`)',
      'หลัง `Does / doesn\'t` กริยาแท้ต้องกลับเป็นรูปเดิม `V1` (`have`, `take`) ไม่ผันเป็น `has / takes`'
    ]
  },

  g06b: {
    titleEn: 'Lost at BTS Siam',
    sceneTh: 'เอ็มม่าหลงทางที่สถานีรถไฟฟ้าสยามเลยถามทางกับภูมิ',
    emoji: '🚇',
    speakers: {
      A: { name: 'Emma', roleTh: 'นักท่องเที่ยว' },
      B: { name: 'Poom', roleTh: 'คนทำงานในกรุงเทพฯ' }
    },
    lines: [
      { sp: 'A', en: 'Excuse me, **does** this train **go** to Asok?', th: 'ขอโทษนะคะ รถไฟขบวนนี้ไปอโศกไหมคะ' },
      { sp: 'B', en: 'Yes, it does. **Where** **are** you heading today?', th: 'ใช่ครับ วันนี้คุณจะไปไหนเหรอครับ' },
      { sp: 'A', en: 'Terminal 21! **How many** stops **is** it from here?', th: 'เทอร์มินอล 21 ค่ะ จากตรงนี้ไปกี่สถานีคะ' },
      { sp: 'B', en: 'Only four stops. **Why** **did** you get off at Siam?', th: 'แค่ 4 สถานีครับ แล้วทำไมคุณถึงลงที่สยามล่ะครับ' },
      { sp: 'A', en: 'I changed lines! **Which** exit **should** I take at Asok?', th: 'ฉันเปลี่ยนสายรถไฟค่ะ ที่อโศกควรออกทางออกไหนคะ' },
      { sp: 'B', en: 'Take Exit 1. **What time** **does** the mall open? Right at 10!', th: 'ออกทางออก 1 ครับ ห้างเปิดกี่โมงนะ เปิด 10 โมงพอดีเลย' }
    ],
    takeawayTh: [
      'โครงสร้างคำถาม Wh-Question คือ `Wh-word + กริยาช่วย (do/does/did/is/should) + ประธาน + กริยาแท้`',
      '**ห้ามเรียงแบบภาษาไทย** เช่น `Where are you heading?` (ไม่ใช่ ~~Where you are heading?~~)',
      '`How many` ตามด้วยนามนับได้พหูพจน์ (`stops`) และ `Which` ใช้เมื่อมีตัวเลือกจำกัด (`Which exit`)'
    ]
  },

  g07: {
    titleEn: 'Catching Up on Monday',
    sceneTh: 'จูนกับมาร์คเล่าเรื่องวันหยุดสุดสัปดาห์ให้กันฟังในออฟฟิศเช้าวันจันทร์',
    emoji: '🌤️',
    speakers: {
      A: { name: 'June', roleTh: 'เพื่อนร่วมงาน' },
      B: { name: 'Mark', roleTh: 'เพื่อนร่วมงาน' }
    },
    lines: [
      { sp: 'A', en: 'Morning Mark! I **went** hiking and **took** tons of photos.', th: 'มอร์นิ่งมาร์ค! เมื่อวานฉันไปเดินป่าแล้วถ่ายรูปมาเพียบเลย' },
      { sp: 'B', en: 'Cool! I **stayed** home and **studied** for my driving test.', th: 'เจ๋งเลย ฉันอยู่บ้านอ่านหนังสือเตรียมสอบใบขับขี่' },
      { sp: 'A', en: 'Really? My sister **tried** it last week and **passed** easily.', th: 'จริงเหรอ พี่สาวฉันไปสอบอาทิตย์ที่แล้วก็ผ่านสบายๆ เลย' },
      { sp: 'B', en: 'Nice! I **bought** a guidebook and **wrote** notes all Sunday.', th: 'ดีจัง ฉันซื้อคู่มือมาแล้วจดโน้ตทั้งวันอาทิตย์เลย' },
      { sp: 'A', en: 'Wait—are you **planning** to take it soon? Stop **worrying**!', th: 'เดี๋ยวนะ นายวางแผนจะไปสอบเร็วๆ นี้เหรอ เลิกกังวลได้เลย' },
      { sp: 'B', en: 'Yes, next Friday! Yesterday I **felt** nervous, but today I\'m ready.', th: 'ใช่ ศุกร์หน้าเลย! เมื่อวานฉันรู้สึกประหม่า แต่วันนี้พร้อมแล้ว' }
    ],
    takeawayTh: [
      '**กริยาเปลี่ยนรูป (Irregular V2)**: `go → went`, `take → took`, `buy → bought`, `write → wrote`, `feel → felt`',
      '**ลงท้ายพยัญชนะ + y** เปลี่ยน `y → ied` (`study → studied`, `try → tried`) แต่ถ้าหน้า y เป็นสระให้เติม `-ed` เลย (`stayed`)',
      '**สระเสียงสั้น + พยัญชนะตัวเดียว** เบิ้ลตัวสะกดก่อนเติม `-ing` (`plan → planning`)'
    ]
  },

  g08: {
    titleEn: 'Before a Team Presentation',
    sceneTh: 'ต้นกับเคทเช็กความพร้อมก่อนขึ้นนำเสนองานต่อหน้าผู้บริหาร',
    emoji: '📊',
    speakers: {
      A: { name: 'Ton', roleTh: 'นักการตลาด' },
      B: { name: 'Kate', roleTh: 'หัวหน้าโปรเจกต์' }
    },
    lines: [
      { sp: 'A', en: 'The slides look really clean, **don\'t they**?', th: 'สไลด์ดูสะอาดตามากเลย ใช่ไหมครับ' },
      { sp: 'B', en: 'Yes! You sent the final file to the client, **didn\'t you**?', th: 'ใช่! นายส่งไฟล์ตัวจริงให้ลูกค้าแล้วใช่ไหม' },
      { sp: 'A', en: 'I did. Our manager isn\'t late today, **is he**?', th: 'ส่งแล้วครับ ผู้จัดการเราวันนี้ไม่สายใช่ไหมครับ' },
      { sp: 'B', en: 'No, he\'s already inside. **Let\'s** test the mic, **shall we**?', th: 'ไม่นะ เขาอยู่ในห้องแล้ว เรามาลองไมค์กันเถอะ ดีไหม' },
      { sp: 'A', en: 'Sure. **I\'m** speaking second, **aren\'t I**?', th: 'ได้เลย ผมพูดเป็นคนที่สองใช่ไหมครับ' },
      { sp: 'B', en: 'Right! Don\'t forget the Q&A sheet, **will you**?', th: 'ถูกต้อง! อย่าลืมใบสรุปคำถามนะ โอเคไหม' }
    ],
    takeawayTh: [
      '**Question Tag** ใช้หลักสลับขั้ว: ประโยคหน้าบอกเล่า → Tag ปฏิเสธ (`look → don\'t they?`), หน้าปฏิเสธ → Tag บอกเล่า (`isn\'t → is he?`)',
      '**ข้อยกเว้นที่ออกสอบบ่อย**: `I am ...` ใช้ `aren\'t I?`, `Let\'s ...` ใช้ `shall we?`',
      'ประโยคคำสั่งหรือขอร้อง (`Don\'t forget...`) มักปิดท้ายด้วย `will you?`'
    ]
  },

  g09: {
    titleEn: 'Organizing a Club Event',
    sceneTh: 'มายด์กับลูคัสเตรียมงานชมรมอาสาสมัครในมหาวิทยาลัย',
    emoji: '🎪',
    speakers: {
      A: { name: 'Mild', roleTh: 'ประธานชมรม' },
      B: { name: 'Lucas', roleTh: 'ฝ่ายประสานงาน' }
    },
    lines: [
      { sp: 'A', en: '**Everyone** in our club **is** excited about Saturday\'s event.', th: 'ทุกคนในชมรมเราตื่นเต้นกับงานวันเสาร์มากเลย' },
      { sp: 'B', en: 'Great! **The list** of volunteers **has** twenty names now.', th: 'เยี่ยมเลย รายชื่ออาสาสมัครตอนนี้มี 20 คนแล้ว' },
      { sp: 'A', en: 'Wait—**neither** Pam **nor** her friends **have** arrived yet.', th: 'เดี๋ยวนะ ทั้งแพมและเพื่อนๆ ของเธอยังมาไม่ถึงเลย' },
      { sp: 'B', en: 'They\'re on the way. **A number of** students **are** setting up chairs.', th: 'พวกเขากำลังมา มีนักศึกษาหลายคนกำลังช่วยจัดเก้าอี้อยู่' },
      { sp: 'A', en: 'Good! **The number of** guests **is** higher than last year.', th: 'ดีเลย จำนวนแขกปีนี้สูงกว่าปีที่แล้วอีก' },
      { sp: 'B', en: 'Awesome, and **this news** **makes** our advisor super proud.', th: 'สุดยอดเลย ข่าวนี้ทำให้อาจารย์ที่ปรึกษาภูมิใจมากแน่ๆ' }
    ],
    takeawayTh: [
      'สรรพนามไม่ชี้เฉพาะ (`Everyone`) และนามนับไม่ได้ (`news`) ใช้กริยา**เอกพจน์** (`is, makes`) เสมอ',
      '`The list of volunteers` ประธานตัวจริงคือ `The list` (เอกพจน์) จึงใช้ `has` ไม่ดูคำหลัง `of`',
      '`Neither A nor B` ผันกริยาตามตัวใกล้ (`her friends → have`) · `A number of` = พหูพจน์ (`are`) แต่ `The number of` = เอกพจน์ (`is`)'
    ]
  },

  g10: {
    titleEn: 'Choosing a Restaurant',
    sceneTh: 'แพรกับโนอาห์ช่วยกันเลือกร้านอาหารเย็นหลังเลิกงาน',
    emoji: '🍜',
    speakers: {
      A: { name: 'Prae', roleTh: 'เพื่อนร่วมงาน' },
      B: { name: 'Noah', roleTh: 'เพื่อนร่วมงาน' }
    },
    lines: [
      { sp: 'A', en: 'Are you hungry? **Nobody** **wants** to cook tonight!', th: 'หิวไหม คืนนี้ไม่มีใครอยากทำกับข้าวเลย' },
      { sp: 'B', en: 'Same! We can try **either** the ramen shop **or** the Thai bistro.', th: 'เหมือนกัน เราไปลองร้านราเมงหรือไม่ก็ร้านอาหารไทยก็ได้นะ' },
      { sp: 'A', en: '**Both** places **are** close, so **neither** option **is** too far.', th: 'ทั้งสองร้านอยู่ใกล้มาก ดังนั้นไม่มีตัวเลือกไหนไกลเกินไปเลย' },
      { sp: 'B', en: 'Is there **anything** spicy at the bistro? I want **something** warm.', th: 'ร้านอาหารไทยมีอะไรเผ็ดๆ ไหม ฉันอยากกินอะไรอุ่นๆ' },
      { sp: 'A', en: '**Everything** on their menu **tastes** fresh, and **all** of it is affordable.', th: 'ทุกอย่างในเมนูเขารสชาติสดใหม่ แถมราคาจับต้องได้หมดเลย' },
      { sp: 'B', en: 'Let\'s go there! **Each** person **gets** a free drink on Fridays.', th: 'ไปร้านนั้นกันเถอะ วันศุกร์แต่ละคนได้เครื่องดื่มฟรีด้วยนะ' }
    ],
    takeawayTh: [
      '`Nobody, Everything, Each` ใช้กริยา**เอกพจน์** (`wants, tastes, gets`)',
      '`Both ... are` ใช้พหูพจน์เสมอ ส่วน `neither + นามเอกพจน์` ใช้กริยาเอกพจน์ (`neither option is`)',
      '`anything` ใช้ในคำถาม/ปฏิเสธ ส่วน `something` ใช้ในบอกเล่า (`I want something warm`)'
    ]
  },

  g11: {
    titleEn: 'Meeting at the Airport',
    sceneTh: 'บอสไปรับโคลอี้ที่สนามบินสุวรรณภูมิและนัดจุดเจอกันทางโทรศัพท์',
    emoji: '✈️',
    speakers: {
      A: { name: 'Chloe', roleTh: 'เพื่อนจากต่างประเทศ' },
      B: { name: 'Boss', roleTh: 'เพื่อนชาวไทย' }
    },
    lines: [
      { sp: 'A', en: 'Hey Boss! My flight landed **at** 3:30 **in** the afternoon.', th: 'เฮ้บอส เครื่องลงตอนบ่ายสามครึ่งแล้วนะ' },
      { sp: 'B', en: 'Welcome to Bangkok! I\'m waiting **at** Gate 4, **on** the second floor.', th: 'ยินดีต้อนรับสู่กรุงเทพฯ! ฉันรออยู่ที่ประตู 4 ชั้นสองนะ' },
      { sp: 'A', en: 'Got it. Should I walk **through** customs and go **up** the escalator?', th: 'โอเค ฉันต้องเดินผ่านด่านศุลกากรแล้วขึ้นบันไดเลื่อนใช่ไหม' },
      { sp: 'B', en: 'Yes! Walk **past** the bank, and you\'ll see me **between** two cafes.', th: 'ใช่ เดินผ่านธนาคารมา แล้วเธอจะเห็นฉันอยู่ระหว่างคาเฟ่สองร้าน' },
      { sp: 'A', en: 'Awesome. Are we driving **to** Pattaya **on** Sunday?', th: 'เยี่ยมเลย วันอาทิตย์เราขับรถไปพัทยากันใช่ไหม' },
      { sp: 'B', en: 'Yes, **in** the morning! Let\'s grab dinner **in** town tonight first.', th: 'ใช่ ตอนเช้าเลย คืนนี้ไปหาข้าวเย็นกินในเมืองกันก่อนนะ' }
    ],
    takeawayTh: [
      '**เวลา**: `at` + เวลาเป๊ะ (`at 3:30`), `on` + วัน (`on Sunday`), `in` + ช่วงเวลาของวัน (`in the afternoon/morning`)',
      '**สถานที่**: `at` + จุดเฉพาะ (`at Gate 4`), `on` + ชั้น/พื้นผิว (`on the second floor`), `in` + พื้นที่ปิด/เมือง (`in town`)',
      '**การเคลื่อนที่**: `through` (ทะลุผ่าน), `up` (ขึ้น), `past` (เดินผ่านเลยไป), `to` (ไปยังปลายทาง)'
    ]
  },

  g12: {
    titleEn: 'Working from a Coworking Space',
    sceneTh: 'วิวกับโอลิเวอร์คุยกันเรื่องการทำงานและโปรเจกต์ที่กำลังทำอยู่ตอนนี้',
    emoji: '💻',
    speakers: {
      A: { name: 'View', roleTh: 'ดีไซเนอร์' },
      B: { name: 'Oliver', roleTh: 'นักพัฒนาแอป' }
    },
    lines: [
      { sp: 'A', en: 'Hey Oliver! You usually **work** from home. What **are** you **doing** here?', th: 'หวัดดีโอลิเวอร์ ปกตินายทำงานที่บ้านนี่ วันนี้มาทำอะไรที่นี่ล่ะ' },
      { sp: 'B', en: 'My internet **is** down, so I **am finishing** a report here today.', th: 'เน็ตที่บ้านล่มน่ะ วันนี้เลยมานั่งทำรายงานให้เสร็จที่นี่' },
      { sp: 'A', en: 'I **understand**! This place **has** fast Wi-Fi and great lighting.', th: 'เข้าใจเลย ที่นี่ไวไฟแรงแล้วก็แสงสวยด้วย' },
      { sp: 'B', en: 'True. Who **are** you **designing** that poster for right now?', th: 'จริงด้วย แล้วตอนนี้เธอกำลังออกแบบโปสเตอร์นั้นให้ใครอยู่เหรอ' },
      { sp: 'A', en: 'A local bakery! It **opens** next month, and I **love** their brand.', th: 'ร้านเบเกอรีแถวนี้แหละ ร้านเปิดเดือนหน้า ฉันชอบแบรนด์เขามาก' },
      { sp: 'B', en: 'It **looks** awesome. Do you **need** feedback when you\'re done?', th: 'ดูสวยมากเลย ทำเสร็จแล้วอยากให้ช่วยคอมเมนต์ไหม' }
    ],
    takeawayTh: [
      '**Present Simple** (`work, has, opens`) ใช้กับกิจวัตรประจำ (`usually`) และข้อเท็จจริงทั่วไป',
      '**Present Continuous** (`are doing, am finishing, are designing`) ใช้กับสิ่งที่กำลังเกิดขึ้นตอนนี้หรือชั่วคราว (`today, right now`)',
      '**State Verbs** อย่าง `understand, love, need` ไม่เติม `-ing` แม้จะพูดถึงความรู้สึกตอนนี้'
    ]
  },

  g13: {
    titleEn: 'Reuniting After Two Years',
    sceneTh: 'น้ำกับไรอันกลับมาเจอกันอีกครั้งหลังไม่ได้เจอกันมาสองปี',
    emoji: '🥂',
    speakers: {
      A: { name: 'Nam', roleTh: 'เพื่อนสมัยเรียน' },
      B: { name: 'Ryan', roleTh: 'เพื่อนจากสิงคโปร์' }
    },
    lines: [
      { sp: 'A', en: 'Ryan! I **haven\'t seen** you **since** 2024! How have you been?', th: 'ไรอัน! ฉันไม่ได้เจอนายตั้งแต่ปี 2024 เลย เป็นยังไงบ้าง' },
      { sp: 'B', en: 'So good! I **have been living** in Singapore **for** two years now.', th: 'ดีมากเลย ตอนนี้ฉันไปอยู่ที่สิงคโปร์มาได้สองปีแล้ว' },
      { sp: 'A', en: 'Nice! **Have** you **tried** the new boat noodle spot here **yet**?', th: 'เจ๋งจัง นายได้ลองร้านก๋วยเตี๋ยวเรือเปิดใหม่แถวนี้หรือยัง' },
      { sp: 'B', en: 'Yes, I **went** there **yesterday**! I **have already eaten** two bowls.', th: 'ลองแล้ว ฉันเพิ่งไปเมื่อวานเอง กินไปแล้วสองชามเลย' },
      { sp: 'A', en: 'Haha! You **have been** to Chiang Mai too, right?', th: 'ฮ่าๆ นายเคยไปเชียงใหม่มาแล้วด้วยใช่ไหม' },
      { sp: 'B', en: 'Twice! And I **have been learning** Thai **for** six months.', th: 'สองครั้งแล้ว! แล้วฉันก็กำลังเรียนภาษาไทยมาได้ 6 เดือนแล้วด้วย' }
    ],
    takeawayTh: [
      '`since` + จุดเริ่มต้น (`since 2024`) · `for` + ระยะเวลา (`for two years / six months`)',
      '**Present Perfect Cont.** (`have been living / learning`) เน้นการทำต่อเนื่องจากอดีตจนถึงวินาทีนี้',
      'เมื่อระบุเวลาจบในอดีตชัดเจน (`yesterday`) ต้องใช้ **Past Simple** (`went`) ห้ามใช้ `have gone`'
    ]
  },

  g14: {
    titleEn: 'Power Outage Story',
    sceneTh: 'กิ๊ฟกับเลียมเล่าเรื่องไฟดับเมื่อคืนและเปรียบเทียบกับสมัยก่อน',
    emoji: '⚡',
    speakers: {
      A: { name: 'Gift', roleTh: 'เพื่อนบ้าน' },
      B: { name: 'Liam', roleTh: 'เพื่อนบ้าน' }
    },
    lines: [
      { sp: 'A', en: 'What **were** you **doing** when the power **went** out last night?', th: 'เมื่อคืนตอนไฟดับนายกำลังทำอะไรอยู่เหรอ' },
      { sp: 'B', en: 'I **was cooking** pasta, and suddenly the kitchen **went** totally dark!', th: 'ฉันกำลังต้มพาสต้าอยู่เลย แล้วจู่ๆ ครัวก็มืดสนิท' },
      { sp: 'A', en: 'Oh no! While I **was taking** a shower, my phone **rang** loudly.', th: 'โหแย่เลย ตอนฉันกำลังอาบน้ำ โทรศัพท์ก็ดังลั่นเลย' },
      { sp: 'B', en: 'We **used to** have outages every rainy season in my hometown.', th: 'ที่บ้านเกิดฉันสมัยก่อนไฟเคยดับทุกหน้าฝนเลยนะ' },
      { sp: 'A', en: 'Really? I\'m not **used to** **sleeping** without air conditioning!', th: 'จริงเหรอ ฉันไม่ชินกับการนอนไม่เปิดแอร์เลย' },
      { sp: 'B', en: 'Luckily, the lights **came** back on twenty minutes later.', th: 'โชคดีนะที่ไฟกลับมาติดในอีก 20 นาทีต่อมา' }
    ],
    takeawayTh: [
      '**เหตุการณ์แทรกซ้อน**: เหตุการณ์ที่กำลังดำเนินอยู่ใช้ `was/were + V-ing` (`was cooking`) ส่วนเหตุการณ์ที่แทรกเข้ามาใช้ `V2` (`went out, rang`)',
      '`used to + V1` = เคยทำในอดีตแต่เลิกแล้ว (`used to have`)',
      '`be used to + V-ing/Noun` = เคยชินกับ (`not used to sleeping`)'
    ]
  },

  g15: {
    titleEn: 'Almost Missed the Flight',
    sceneTh: 'ปั้นเล่าให้ฮันนาห์ฟังเรื่องเกือบตกเครื่องตอนไปญี่ปุ่น',
    emoji: '🛫',
    speakers: {
      A: { name: 'Pun', roleTh: 'นักเดินทาง' },
      B: { name: 'Hannah', roleTh: 'เพื่อนสนิท' }
    },
    lines: [
      { sp: 'A', en: 'By the time I reached the gate, boarding **had already started**!', th: 'ตอนฉันวิ่งไปถึงเกต เขาเริ่มเรียกขึ้นเครื่องไปแล้ว!' },
      { sp: 'B', en: 'Seriously? Why were you so late?', th: 'จริงเหรอ ทำไมไปสายขนาดนั้นล่ะ' },
      { sp: 'A', en: 'I **had been waiting** for a taxi for 40 minutes before one finally **stopped**.', th: 'ฉันรอแท็กซี่มาตั้ง 40 นาทีเต็มๆ กว่าจะมีคันหนึ่งยอมจอดรับ' },
      { sp: 'B', en: 'That sounds stressful! **Had** you **checked** in online first?', th: 'ฟังดูเครียดมากเลย เธอเช็กอินออนไลน์ไว้ก่อนหรือยังล่ะ' },
      { sp: 'A', en: 'Luckily, I **had downloaded** my boarding pass the night before.', th: 'โชคดีที่ฉันโหลดบอร์ดดิ้งพาสไว้ตั้งแต่คืนก่อนแล้ว' },
      { sp: 'B', en: 'Phew! I\'m glad the plane **hadn\'t left** without you.', th: 'โล่งอกไปที ดีนะที่เครื่องบินยังไม่ออกไปก่อน' }
    ],
    takeawayTh: [
      '**Past Perfect** (`had + V3`) ใช้กับเหตุการณ์ที่**เกิดเสร็จก่อน**อีกเหตุการณ์ในอดีต (`had started` ก่อน `reached`)',
      '**Past Perfect Continuous** (`had been waiting`) เน้นความต่อเนื่องยาวนาน (`for 40 minutes`) ก่อนจุดหนึ่งในอดีต',
      'คำบอกสัญญาณยอดฮิต: `By the time + V2`, `the night before`, `before + V2`'
    ]
  },

  g16: {
    titleEn: 'Career Plans Next Year',
    sceneTh: 'เฟิร์นกับอีธานคุยกันเรื่องแผนการงานและเป้าหมายในปีหน้า',
    emoji: '🚀',
    speakers: {
      A: { name: 'Fern', roleTh: 'นักวิเคราะห์ข้อมูล' },
      B: { name: 'Ethan', roleTh: 'วิศวกรซอฟต์แวร์' }
    },
    lines: [
      { sp: 'A', en: 'Look at these dark clouds—it **is going to** rain any minute!', th: 'ดูเมฆดำนั่นสิ ฝนกำลังจะตกในอีกไม่กี่นาทีแน่ๆ' },
      { sp: 'B', en: 'Wait, I **will grab** an umbrella for you from my car.', th: 'เดี๋ยวฉันไปหยิบร่มในรถมาให้นะ' },
      { sp: 'A', en: 'Thanks! By the way, what **will** you **be doing** at 8 p.m. tomorrow?', th: 'ขอบใจนะ ว่าแต่พรุ่งนี้ตอน 2 ทุ่มนายจะกำลังทำอะไรอยู่เหรอ' },
      { sp: 'B', en: 'I **will be flying** to Tokyo! My team **is going to** launch an app there.', th: 'ฉันจะกำลังบินไปโตเกียวอยู่เลย ทีมฉันตั้งใจจะเปิดตัวแอปที่นั่น' },
      { sp: 'A', en: 'So exciting! **By** December, we **will have finished** our big project too.', th: 'น่าตื่นเต้นจัง พอถึงเดือนธันวาคม พวกเราก็คงทำโปรเจกต์ใหญ่เสร็จเรียบร้อยแล้วเหมือนกัน' },
      { sp: 'B', en: 'Nice! Next month I **will have been working** here **for** three years.', th: 'เยี่ยมเลย เดือนหน้าฉันก็จะทำงานที่นี่ครบ 3 ปีเต็มแล้ว' }
    ],
    takeawayTh: [
      '`be going to` ใช้กับแผนที่ตั้งใจไว้แล้วหรือมีหลักฐานชัด (`dark clouds → is going to rain`) ส่วน `will` ใช้เมื่อตัดสินใจทันที (`will grab`)',
      '**Future Continuous** (`will be flying`) บอกสิ่งที่จะกำลังทำอยู่ ณ เวลาหนึ่งของอนาคต (`at 8 p.m. tomorrow`)',
      '**Future Perfect** (`will have finished`) มักคู่กับ `By + เวลาอนาคต` เพื่อบอกว่าเสร็จเรียบร้อยแล้วก่อนเวลานั้น'
    ]
  },

  g16b: {
    titleEn: 'Catching Up Over Lunch',
    sceneTh: 'พีทกับโคลอี้ทานข้าวเที่ยงด้วยกันและอัปเดตชีวิตตั้งแต่อดีต ปัจจุบัน ยันอนาคต',
    emoji: '🍱',
    speakers: {
      A: { name: 'Pete', roleTh: 'ผู้จัดการร้าน' },
      B: { name: 'Sophie', roleTh: 'นักเขียนอิสระ' }
    },
    lines: [
      { sp: 'A', en: 'Sophie, you **always** **order** green curry, right?', th: 'โซฟี เธอสั่งแกงเขียวหวานเป็นประจำเลยใช่ไหม' },
      { sp: 'B', en: 'Usually, yes, but today I **am trying** their new pad thai.', th: 'ปกติใช่ แต่วันนี้ฉันกำลังลองผัดไทยเมนูใหม่ของร้านดู' },
      { sp: 'A', en: 'How is your book? You **have been writing** it **since** January!', th: 'หนังสือเป็นยังไงบ้าง เธอเขียนมาตั้งแต่เดือนมกราคมแล้วนี่' },
      { sp: 'B', en: 'I **finished** chapter ten **last night** after I **had edited** the intro.', th: 'ฉันเขียนบทที่ 10 จบเมื่อคืนนี้เอง หลังจากที่แก้บทนำเสร็จก่อนหน้านี้' },
      { sp: 'A', en: 'Impressive! What **were** you **doing** when your editor called?', th: 'เก่งมาก! แล้วตอนบรรณาธิการโทรมาเธอกำลังทำอะไรอยู่เหรอ' },
      { sp: 'B', en: 'I **was drinking** coffee! **By** May, I **will have sent** the final draft.', th: 'กำลังดื่มกาแฟอยู่เลย! พอถึงพฤษภาคมฉันคงส่งต้นฉบับสุดท้ายเสร็จแล้ว' }
    ],
    takeawayTh: [
      '**เช็กคำบอกเวลา (Time Marker)** ก่อนเลือก Tense: `always` → Present Simple, `today` → Present Cont., `since` → Present Perfect Cont.',
      '**อดีตซ้อนอดีต**: เหตุการณ์ก่อนหน้าใช้ `had edited` (Past Perfect) ส่วนเหตุการณ์ทีหลังที่มีเวลาชัด (`last night`) ใช้ `finished` (Past Simple)',
      '`By + เวลาอนาคต` (`By May`) เป็นสัญญาณชัดเจนของ **Future Perfect** (`will have sent`)'
    ]
  },

  g17: {
    titleEn: 'Locked Out of the Office',
    sceneTh: 'แพรวากับแดเนียลหาคีย์การ์ดเข้าออฟฟิศไม่เจอเลยช่วยกันเดาและให้คำแนะนำ',
    emoji: '🔑',
    speakers: {
      A: { name: 'Praewa', roleTh: 'นักบัญชี' },
      B: { name: 'Daniel', roleTh: 'เพื่อนร่วมงาน' }
    },
    lines: [
      { sp: 'A', en: 'Oh no, I can\'t find my key card! I **must have left** it in the taxi.', th: 'แย่แล้ว ฉันหาคีย์การ์ดไม่เจอ ฉันต้องลืมไว้บนแท็กซี่แน่ๆ เลย' },
      { sp: 'B', en: 'Wait—check your jacket. It **might** still be inside the pocket.', th: 'เดี๋ยวก่อน ลองเช็กเสื้อแจ็กเก็ตดูสิ มันอาจจะยังอยู่ในกระเป๋าก็ได้' },
      { sp: 'A', en: 'Nothing here. I **should have checked** my bag before getting out!', th: 'ไม่มีเลย ฉันน่าจะเช็กกระเป๋าก่อนลงจากรถแท้ๆ' },
      { sp: 'B', en: 'You **don\'t have to** panic. Security **can** issue a temporary pass.', th: 'เธอไม่ต้องตกใจไปนะ รปภ. ออกบัตรชั่วคราวให้ได้' },
      { sp: 'A', en: 'True! But we **mustn\'t** enter the server room without a real badge.', th: 'จริงด้วย แต่เราห้ามเข้าห้องเซิร์ฟเวอร์โดยไม่มีบัตรจริงนะ' },
      { sp: 'B', en: 'Don\'t worry—**could** you call the driver? He **may have found** it already.', th: 'ไม่ต้องห่วง เธอลองโทรหาคนขับดูได้ไหม เขาอาจจะเจอแล้วก็ได้' }
    ],
    takeawayTh: [
      '**Modal Perfect (`Modal + have + V3`)** ใช้คาดเดาหรือเสียดายเรื่องในอดีต: `must have left` (ต้องลืมไว้แน่ๆ), `should have checked` (น่าจะเช็กแต่ไม่ได้ทำ)',
      '`don\'t have to` = ไม่จำเป็นต้องทำ ส่วน `mustn\'t` = ห้ามทำเด็ดขาด (ความหมายต่างกันมาก!)',
      '`could / might / may` ใช้ขอร้องอย่างสุภาพหรือบอกความเป็นไปได้'
    ]
  },

  g18: {
    titleEn: 'Car Trouble Before Work',
    sceneTh: 'นัทกับเมย์คุยกันเรื่องเอารถเข้าซ่อมและนิสัยการขับรถ',
    emoji: '🚗',
    speakers: {
      A: { name: 'Nut', roleTh: 'พนักงานออฟฟิศ' },
      B: { name: 'May', roleTh: 'เพื่อนร่วมงาน' }
    },
    lines: [
      { sp: 'A', en: 'I **avoid** **driving** during rush hour, so I usually take the train.', th: 'ฉันเลี่ยงการขับรถช่วงชั่วโมงเร่งด่วน ปกติเลยนั่งรถไฟฟ้าแทน' },
      { sp: 'B', en: 'Smart! I **decided** **to get** my brakes **checked** this morning.', th: 'ฉลาดมาก วันนี้เมื่อเช้าฉันเพิ่งตัดสินใจเอารถไปให้ช่างเช็กเบรกมา' },
      { sp: 'A', en: 'Good call! Did you **have** the mechanic **change** the oil too?', th: 'ดีเลย แล้วเธอให้ช่างช่วยเปลี่ยนน้ำมันเครื่องด้วยไหม' },
      { sp: 'B', en: 'Yes, and I **remembered** **to pick up** my spare key before leaving.', th: 'เปลี่ยนด้วย แล้วฉันก็จำได้ว่าต้องหยิบกุญแจสำรองมาก่อนออกบ้าน' },
      { sp: 'A', en: 'I still **remember** **getting** stuck on Rama 9 last month—never again!', th: 'ฉันยังจำตอนรถติดแหง็กอยู่พระราม 9 เดือนที่แล้วได้เลย เข็ดแล้ว' },
      { sp: 'B', en: 'Haha, my boss **made** me **leave** early yesterday because of the rain.', th: 'ฮ่าๆ เมื่อวานหัวหน้าฉันสั่งให้รีบกลับก่อนเพราะฝนตกหนักเลย' }
    ],
    takeawayTh: [
      'กริยาบางตัวตามด้วย **Gerund (`V-ing`)** เช่น `avoid driving` แต่บางตัวตามด้วย **to-Infinitive** เช่น `decide to get`',
      '`remember + to V1` = จำได้ว่าต้องทำ · `remember + V-ing` = จำเหตุการณ์ที่เคยทำในอดีตได้',
      '**Causative**: `get + สิ่งของ + V3` (`get my brakes checked`), `have/make + คน + V1` (`have the mechanic change`, `made me leave`)'
    ]
  },

  g19: {
    titleEn: 'Fixing a Broken Coffee Machine',
    sceneTh: 'เจสกับภูมิช่วยกันดูเครื่องชงกาแฟในออฟฟิศที่จู่ๆ ก็เสีย',
    emoji: '🔧',
    speakers: {
      A: { name: 'Jess', roleTh: 'ฝ่ายบุคคล' },
      B: { name: 'Poom', roleTh: 'ฝ่ายไอที' }
    },
    lines: [
      { sp: 'A', en: 'The office coffee machine **broke down** again! The kitchen **smells** burnt.', th: 'เครื่องชงกาแฟออฟฟิศพังอีกแล้ว! ในครัวมีกลิ่นไหม้เลย' },
      { sp: 'B', en: 'That **sounds** **bad**. Let me **look into** it right now.', th: 'ฟังดูไม่ดีเลย เดี๋ยวฉันขอไปเช็กดูให้ตอนนี้เลย' },
      { sp: 'A', en: 'Thanks! Could you **turn** it **off** first? The top **feels** really **hot**.', th: 'ขอบใจนะ ช่วยปิดเครื่องก่อนได้ไหม ข้างบนมันร้อนมากเลย' },
      { sp: 'B', en: 'Done. We **ran out of** water filters too, so I\'ll **pick** some **up** later.', th: 'ปิดแล้ว เราใช้ตัวกรองน้ำหมดด้วย เดี๋ยวฉันแวะไปซื้อมาเพิ่มทีหลัง' },
      { sp: 'A', en: 'You\'re a lifesaver! Let\'s **put off** the coffee break until 3 p.m.', th: 'นายช่วยชีวิตไว้เลย งั้นเราเลื่อนพักดื่มกาแฟไปบ่ายสามกันนะ' },
      { sp: 'B', en: 'No problem—it should **become** **ready** once we clean the valve.', th: 'ไม่มีปัญหา พอล้างวาล์วเสร็จมันน่าจะกลับมาพร้อมใช้งานแล้วล่ะ' }
    ],
    takeawayTh: [
      '**Linking Verbs** (`smells, sounds, feels, become`) ตามด้วย **Adjective** (`bad, hot, ready`) ไม่ใช่ Adverb (`~~sounds badly~~`)',
      '**Phrasal Verbs** เปลี่ยนความหมายเมื่อรวมกับคำบุพบท: `break down` (เสีย), `look into` (ตรวจสอบ), `run out of` (หมด), `put off` (เลื่อนออกไป)',
      'Phrasal verb แบบแยกได้เมื่อกรรมเป็นสรรพนาม (`it, some`) ต้องวางไว้ตรงกลาง (`turn it off`, `pick some up`)'
    ]
  },

  g19b: {
    titleEn: 'Preparing for a Job Interview',
    sceneTh: 'แป้งคุยกับพี่ชายเรื่องการเตรียมตัวสัมภาษณ์งานที่บริษัทต่างชาติ',
    emoji: '💼',
    speakers: {
      A: { name: 'Pang', roleTh: 'ผู้สมัครงาน' },
      B: { name: 'Aek', roleTh: 'พี่ชาย' }
    },
    lines: [
      { sp: 'A', en: 'I\'m really **interested in** this role, but I\'m **nervous about** the interview!', th: 'หนูสนใจตำแหน่งนี้มากเลย แต่ก็กังวลเรื่องสัมภาษณ์จัง' },
      { sp: 'B', en: 'You\'re **good at** explaining ideas. Just **focus on** your real results.', th: 'เราเก่งเรื่องอธิบายไอเดียอยู่แล้ว แค่โฟกัสไปที่ผลงานจริงของเราก็พอ' },
      { sp: 'A', en: 'Should I **make a decision** about salary before they ask?', th: 'หนูควรตัดสินใจเรื่องเงินเดือนไว้ก่อนที่เขาจะถามเลยไหม' },
      { sp: 'B', en: 'Yes, **do research** first! Success **depends on** good preparation.', th: 'ใช่ หาข้อมูลไว้ก่อนเลย ความสำเร็จขึ้นอยู่กับการเตรียมตัวที่ดีนะ' },
      { sp: 'A', en: 'Got it! I\'ll **take responsibility for** leading our final-year project.', th: 'เข้าใจแล้ว เดี๋ยวหนูจะเล่าเรื่องที่รับผิดชอบเป็นหัวหน้าโปรเจกต์จบด้วย' },
      { sp: 'B', en: 'Awesome—you\'ll **make a great impression** and be **proud of** yourself!', th: 'เยี่ยมเลย เธอต้องสร้างความประทับใจได้ดีแล้วก็ภูมิใจในตัวเองแน่ๆ' }
    ],
    takeawayTh: [
      '**Dependent Prepositions** ต้องจำคู่กันเสมอ: `interested in`, `nervous about`, `good at`, `focus on`, `depend on`, `proud of`',
      '**Collocations (`do vs make`)**: ใช้ `do research` (ค้นคว้า) แต่ใช้ `make a decision` (ตัดสินใจ) และ `make an impression` (สร้างความประทับใจ)',
      'หลังบุพบท (`at, for`) ถ้าตามด้วยกริยาต้องเติม `-ing` (`good at explaining`, `responsibility for leading`)'
    ]
  },

  g20: {
    titleEn: 'Reviewing a New Movie',
    sceneTh: 'คิมกับมิวเดินออกจากโรงหนังแล้วคุยรีวิวหนังที่เพิ่งดูจบ',
    emoji: '🎬',
    speakers: {
      A: { name: 'Kim', roleTh: 'คอหนัง' },
      B: { name: 'Mew', roleTh: 'เพื่อนสนิท' }
    },
    lines: [
      { sp: 'A', en: 'That ending was so **surprising**! I felt totally **amazed**.', th: 'ตอนจบหักมุมมาก! ฉันรู้สึกทึ่งสุดๆ ไปเลย' },
      { sp: 'B', en: 'Really? I was a bit **bored** in the middle—it moved **slowly**.', th: 'จริงเหรอ ช่วงกลางเรื่องฉันแอบเบื่อนิดหน่อย มันเดินเรื่องช้าไป' },
      { sp: 'A', en: 'Wait, I **always** **enjoy** slow thrillers! Did you see that **beautiful old wooden** house?', th: 'เฮ้ย ฉันชอบหนังระทึกขวัญแนวเนิบๆ ตลอดเลยนะ เธอเห็นบ้านไม้เก่าหลังสวยนั้นไหม' },
      { sp: 'B', en: 'Yes! The cinematography was **incredibly** sharp, and the lead actor spoke **clearly**.', th: 'เห็นสิ งานภาพคมชัดแบบสุดยอดมาก แล้วพระเอกก็พูดชัดเจนมากด้วย' },
      { sp: 'A', en: 'The music is **never** **boring** in his films either.', th: 'ดนตรีประกอบในหนังของผู้กำกับคนนี้ก็ไม่เคยหน้าเบื่อเลยเหมือนกัน' },
      { sp: 'B', en: 'True! Let\'s grab a **hot sweet Thai** tea and talk more.', th: 'จริง! ไปซื้อชาไทยร้อนหวานๆ กินแล้วคุยกันต่อเถอะ' }
    ],
    takeawayTh: [
      '**Adj `-ing` vs `-ed`**: `-ing` บอกลักษณะของสิ่งนั้น (`surprising, boring`) · `-ed` บอกความรู้สึกของคน (`amazed, bored`)',
      '**ตำแหน่ง Adverb ความถี่**: วาง**หน้ากริยาแท้** (`always enjoy`) แต่**หลัง Verb to be** (`is never boring`)',
      '**ลำดับ Adj (OSASCOMP)**: ความเห็น → อายุ → วัสดุ (`beautiful old wooden house`) ไม่สลับลำดับ'
    ]
  },

  g21: {
    titleEn: 'Comparing Two Laptops',
    sceneTh: 'โอมกับแคลร์ช่วยกันเปรียบเทียบโน้ตบุ๊กสองรุ่นในร้านไอที',
    emoji: '🖥️',
    speakers: {
      A: { name: 'Ohm', roleTh: 'นักศึกษาวิศวะ' },
      B: { name: 'Claire', roleTh: 'เพื่อนร่วมคณะ' }
    },
    lines: [
      { sp: 'A', en: 'This silver laptop is much **lighter than** my old one!', th: 'โน้ตบุ๊กสีเงินเครื่องนี้เบากว่าเครื่องเก่าของฉันตั้งเยอะเลย' },
      { sp: 'B', en: 'True, and its screen is **brighter**, but it\'s **more expensive than** the gray model.', th: 'จริง แถมจอสว่างกว่าด้วย แต่มันแพงกว่ารุ่นสีเทานะ' },
      { sp: 'A', en: 'Is the battery **as good as** the gray one?', th: 'แบตเตอรี่มันดีเท่ารุ่นสีเทาไหม' },
      { sp: 'B', en: 'Even **better**! Actually, it has **the longest** battery life in the shop.', th: 'ดีกว่าอีก! จริงๆ แล้วมันแบตอึดที่สุดในร้านนี้เลยนะ' },
      { sp: 'A', en: '**The more** I compare them, **the harder** it is to choose!', th: 'ยิ่งฉันเปรียบเทียบมากเท่าไร ก็ยิ่งเลือกยากขึ้นเท่านั้นเลย' },
      { sp: 'B', en: 'Pick **the most reliable** one—you carry it every day anyway.', th: 'เลือกรุ่นที่ไว้ใจได้ที่สุดเถอะ ยังไงนายก็ต้องพกมันทุกวันอยู่แล้ว' }
    ],
    takeawayTh: [
      '**ขั้นกว่า**: คำสั้นเติม `-er + than` (`lighter than`), คำยาวใช้ `more ... than` (`more expensive than`), เปลี่ยนรูปพิเศษ `good → better`',
      '**ขั้นสุด**: ใส่ `the` เสมอ (`the longest`, `the most reliable`) และขั้นเท่ากันใช้ `as + Adj + as` (`as good as`)',
      '**ยิ่ง...ยิ่ง...**: ใช้โครงสร้าง `The + ขั้นกว่า ..., the + ขั้นกว่า ...` (`The more ..., the harder ...`)'
    ]
  },

  g21b: {
    titleEn: 'Rainy Day Commute',
    sceneTh: 'บีมกับฮานะคุยกันเรื่องรถติดตอนฝนตกหนักแต่ยังไปประชุมทัน',
    emoji: '🌧️',
    speakers: {
      A: { name: 'Beam', roleTh: 'นักออกแบบ' },
      B: { name: 'Hana', roleTh: 'ผู้จัดการบัญชี' }
    },
    lines: [
      { sp: 'A', en: '**Although** it rained heavily, everyone arrived on time.', th: 'แม้ว่าฝนจะตกหนักมาก แต่ทุกคนก็มาถึงตรงเวลาเลย' },
      { sp: 'B', en: 'Yeah! I took the boat **because of** the traffic jam on Sukhumvit.', th: 'ใช่ ฉันนั่งเรือมาเพราะรถติดหนักบนถนนสุขุมวิทเลย' },
      { sp: 'A', en: 'Smart! **Despite** the wet shoes, I still prefer the BTS.', th: 'ฉลาดมาก แม้ว่ารองเท้าจะเปียก แต่ฉันก็ยังชอบนั่งบีทีเอสมากกว่า' },
      { sp: 'B', en: 'The client loved our draft. **However**, they want two small edits.', th: 'ลูกค้าชอบดราฟต์เรามากเลย อย่างไรก็ตาม เขาขอแก้จุดเล็กๆ สองจุด' },
      { sp: 'A', en: 'No problem—**therefore**, let\'s finish the edits before lunch.', th: 'ไม่มีปัญหา ดังนั้นเรามาแก้ให้เสร็จก่อนพักเที่ยงกันเถอะ' },
      { sp: 'B', en: 'Agreed! I brought extra coffee **so that** we can stay sharp.', th: 'เห็นด้วย ฉันซื้อกาแฟเผื่อมาด้วยเพื่อที่เราจะได้ตื่นตัวกัน' }
    ],
    takeawayTh: [
      '**ตามด้วยประโยค (`S + V`)**: `Although`, `so that` (`Although it rained...`)',
      '**ตามด้วยนาม/วลี (`Noun / V-ing`)**: `because of`, `Despite` (`because of the traffic jam`, `Despite the wet shoes`)',
      '**คำเชื่อมขึ้นประโยคใหม่ (Transition)** อย่าง `However,` และ `Therefore,` ต้องมีเครื่องหมายจุลภาค (`,`) คั่น'
    ]
  },

  g22: {
    titleEn: 'Trying a New Fitness Class',
    sceneTh: 'เจนกับต้าคุยกันเรื่องคลาสพิลาทิสที่เพิ่งลองไปเรียนด้วยกัน',
    emoji: '🧘',
    speakers: {
      A: { name: 'Jane', roleTh: 'เพื่อนร่วมคลาส' },
      B: { name: 'Ta', roleTh: 'เพื่อนร่วมคลาส' }
    },
    lines: [
      { sp: 'A', en: '**There are** so many people in the studio today!', th: 'วันนี้ในสตูดิโอมีคนเยอะมากเลย!' },
      { sp: 'B', en: 'I know! **It is** hard to find an empty mat near the mirror.', th: 'นั่นสิ ยากมากเลยที่จะหาเสื่อว่างใกล้กระจก' },
      { sp: 'A', en: 'I really enjoyed the stretching part.', th: 'ฉันชอบช่วงยืดเส้นมากเลย' },
      { sp: 'B', en: '**So did I**! **There was** a great playlist playing too.', th: 'ฉันก็เหมือนกัน! แถมมีเพลย์ลิสต์เพลงดีมากเปิดคลอด้วย' },
      { sp: 'A', en: 'I haven\'t tried the evening yoga class yet.', th: 'ฉันยังไม่เคยลองคลาสโยคะตอนเย็นเลย' },
      { sp: 'B', en: '**Neither have I**—I don\'t have free time on Tuesdays **either**.', th: 'ฉันก็ยังไม่เคยเหมือนกัน วันอังคารฉันก็ไม่ว่างเหมือนกันเลย' }
    ],
    takeawayTh: [
      '`There is / There are` แปลว่า **"มี"** ผันตามนามข้างหลัง (`There are many people`, `There was a playlist`)',
      '`It is + Adj + to V1` ใช้เป็นประธานหลอก เช่น `It is hard to find...`',
      '**เห็นด้วยแบบบอกเล่า** ใช้ `So + กริยาช่วย + ประธาน` (`So did I`) · **เห็นด้วยแบบปฏิเสธ** ใช้ `Neither + กริยาช่วย + ประธาน` (`Neither have I`) หรือ `not ... either`'
    ]
  },

  g23: {
    titleEn: 'At the Hotel Reception',
    sceneTh: 'มิ้นท์เช็กอินที่โรงแรมในภูเก็ตและสอบถามข้อมูลกับพนักงานต้อนรับ',
    emoji: '🏨',
    speakers: {
      A: { name: 'Mint', roleTh: 'แขกโรงแรม' },
      B: { name: 'Leo', roleTh: 'พนักงานต้อนรับ' }
    },
    lines: [
      { sp: 'A', en: 'Excuse me, could you tell me **where the breakfast lounge is**?', th: 'ขอโทษนะคะ ช่วยบอกได้ไหมคะว่าห้องอาหารเช้าอยู่ตรงไหน' },
      { sp: 'B', en: 'Certainly! **Take** the elevator to Floor 3 and **turn** left.', th: 'ได้ครับ ขึ้นลิฟต์ไปชั้น 3 แล้วเลี้ยวซ้ายนะครับ' },
      { sp: 'A', en: 'Thanks! Do you know **if the pool stays open** after 8 p.m.?', th: 'ขอบคุณค่ะ คุณพอทราบไหมคะว่าสระว่ายน้ำเปิดหลัง 2 ทุ่มไหม' },
      { sp: 'B', en: 'Yes, until 10 p.m.! **Please don\'t forget** to bring your room key.', th: 'เปิดถึง 4 ทุ่มครับ กรุณาอย่าลืมพกคีย์การ์ดห้องไปด้วยนะครับ' },
      { sp: 'A', en: '**What a lovely** ocean view you have from this lobby!', th: 'วิวทะเลจากล็อบบี้นี้สวยอะไรอย่างนี้!' },
      { sp: 'B', en: '**How kind** of you to say so! Enjoy your stay with us.', th: 'คุณใจดีจังเลยที่ชมครับ ขอให้มีความสุขกับการพักผ่อนนะครับ' }
    ],
    takeawayTh: [
      '**Indirect Questions** (`Could you tell me... / Do you know...`) ข้างหลังต้องเรียงเป็น**ประโยคบอกเล่า (`S + V`)** (`where the lounge is`, ไม่ใช่ ~~where is the lounge~~)',
      'คำถาม Yes/No แบบอ้อมเชื่อมด้วย `if / whether` (`if the pool stays open`)',
      '**คำอุทาน**: `What + a/an + Adj + Noun` (`What a lovely ocean view!`) vs `How + Adj` (`How kind!`)'
    ]
  },

  g24: {
    titleEn: 'Inside a Thai Coffee Roastery',
    sceneTh: 'ภูมิพาแอนนาเดินชมโรงคั่วกาแฟและอธิบายขั้นตอนการผลิต',
    emoji: '🫘',
    speakers: {
      A: { name: 'Anna', roleTh: 'ผู้เยี่ยมชม' },
      B: { name: 'Poom', roleTh: 'เจ้าของโรงคั่ว' }
    },
    lines: [
      { sp: 'A', en: 'This smells amazing! Where **are** these coffee beans **grown**?', th: 'หอมมากเลย! เมล็ดกาแฟพวกนี้ปลูกที่ไหนเหรอคะ' },
      { sp: 'B', en: 'They **are harvested** by local farmers in Chiang Rai every winter.', th: 'เมล็ดพวกนี้ถูกเก็บเกี่ยวโดยเกษตรกรท้องถิ่นในเชียงรายทุกหน้าหนาวครับ' },
      { sp: 'A', en: 'Cool! How **is** the batch **being roasted** right now?', th: 'เจ๋งจัง แล้วล็อตนี้กำลังถูกคั่วแบบไหนอยู่เหรอคะ' },
      { sp: 'B', en: 'Medium roast! The temperature **is controlled** automatically by this machine.', th: 'คั่วกลางครับ อุณหภูมิจะถูกควบคุมอัตโนมัติโดยเครื่องนี้' },
      { sp: 'A', en: 'Has the new blend **been packed** yet?', th: 'เบลนด์ตัวใหม่ถูกแพ็กเรียบร้อยแล้วหรือยังคะ' },
      { sp: 'B', en: 'Yes, 200 bags **were sealed** this morning and **will be shipped** tomorrow.', th: 'เรียบร้อยครับ 200 ถุงถูกซีลเมื่อเช้านี้และจะถูกจัดส่งพรุ่งนี้ครับ' }
    ],
    takeawayTh: [
      '**Passive Voice** มีหัวใจเดียวคือ `Verb to be (ผันตาม Tense) + V3` เน้น "ผู้ถูกกระทำ" มากกว่าคนทำ',
      'สังเกตการผันตาม Tense: Present Simple (`are grown`), Present Cont. (`is being roasted`), Present Perfect (`been packed`), Past (`were sealed`), Future (`will be shipped`)',
      'ใช้ `by + ผู้กระทำ` (`by local farmers`) เฉพาะเมื่ออยากเน้นว่าใครเป็นคนทำ'
    ]
  },

  g25: {
    titleEn: 'Weekend Beach Backup Plan',
    sceneTh: 'นิ้งกับแซมวางแผนทริปทะเลและเผื่อแผนสำรองถ้าฝนตก',
    emoji: '🏖️',
    speakers: {
      A: { name: 'Ning', roleTh: 'เพื่อนร่วมทริป' },
      B: { name: 'Sam', roleTh: 'เพื่อนร่วมทริป' }
    },
    lines: [
      { sp: 'A', en: '**If** the weather **stays** sunny tomorrow, we **will rent** kayaks!', th: 'ถ้าพรุ่งนี้อากาศยังแดดดีอยู่ เราจะเช่าเรือคายัคพายกันนะ!' },
      { sp: 'B', en: 'Awesome! Pack a light jacket **in case** it **gets** windy on the boat.', th: 'เยี่ยมเลย พกเสื้อคลุมบางๆ ไปเผื่อไว้ด้วยนะ เผื่อบนเรือลมแรง' },
      { sp: 'A', en: 'Good tip. We can\'t go snorkeling **unless** the waves **calm** down.', th: 'แนะนำดีมาก เราจะออกไปดำน้ำตื้นไม่ได้เลยถ้าคลื่นไม่สงบลง' },
      { sp: 'B', en: 'True! **If** I **had** an underwater camera, I **would take** coral photos.', th: 'จริง! ถ้าฉันมีกล้องใต้น้ำนะ ฉันจะถ่ายรูปปะการังให้หมดเลย' },
      { sp: 'A', en: '**If** we **had booked** earlier, we **would have gotten** the beachfront villa.', th: 'ถ้าเราจองเร็วกว่านี้ ป่านนี้คงได้วิลล่าติดหาดไปแล้ว' },
      { sp: 'B', en: 'No worries—**if** you **mix** sea breeze and good food, any trip **is** great!', th: 'ไม่เป็นไรหรอก ถ้ามีลมทะเลกับของกินอร่อย ทริปไหนก็ดีหมดแหละ!' }
    ],
    takeawayTh: [
      '**Type 1** (เป็นไปได้จริง): `If + V1, will + V1` · **Type 2** (สมมติตอนนี้): `If + V2, would + V1` · **Type 3** (เสียดายอดีต): `If + had V3, would have V3`',
      '`unless` = **if ... not** (`unless the waves calm down` = ถ้าคลื่นไม่สงบ) จึงไม่ใส่ `not` ซ้ำ',
      '`in case` = **เผื่อว่า** ใช้บอกการเตรียมตัวล่วงหน้า (`in case it gets windy`)'
    ]
  },

  g26: {
    titleEn: 'After a Tough Exam',
    sceneTh: 'เจกับลิลลี่คุยกันหลังออกจากห้องสอบภาษาอังกฤษ',
    emoji: '📝',
    speakers: {
      A: { name: 'Jay', roleTh: 'นักศึกษา' },
      B: { name: 'Lily', roleTh: 'เพื่อนร่วมคลาส' }
    },
    lines: [
      { sp: 'A', en: 'Phew! I **wish** I **had** ten more minutes for the essay.', th: 'เฮ้อ! ฉันอยากให้มีเวลาเขียนเรียงความเพิ่มอีกสัก 10 นาทีจัง' },
      { sp: 'B', en: 'Me too! **If only** I **had reviewed** conditional sentences last night!', th: 'ฉันก็เหมือนกัน รู้งี้เมื่อคืนทบทวนเรื่องประโยคเงื่อนไขซะก็ดี!' },
      { sp: 'A', en: 'Same. I **wish** the exam room **weren\'t** so freezing cold.', th: 'จริง ฉันอยากให้ห้องสอบไม่หนาวขนาดนี้จัง' },
      { sp: 'B', en: 'Haha, **it\'s high time** we **took** a proper break and ate something!', th: 'ฮ่าๆ ถึงเวลาแล้วที่เราควรพักจริงๆ จังๆ แล้วไปหาอะไรกินกัน' },
      { sp: 'A', en: 'Yes! I **would rather** **eat** hot ramen than study right now.', th: 'ใช่! ตอนนี้ฉันยอมกินราเมงร้อนๆ ดีกว่าอ่านหนังสือต่ออีก' },
      { sp: 'B', en: 'I **wish** my phone **would stop** buzzing with group chat messages first!', th: 'ฉันอยากให้มือถือหยุดเด้งข้อความแชตกลุ่มก่อนเลยตอนนี้!' }
    ],
    takeawayTh: [
      '`wish / if only + V2 (were)` ใช้หวังเรื่องที่ตรงข้าม**ปัจจุบัน** (`wish I had`, `wish it weren\'t`)',
      '`wish / if only + had V3` ใช้เสียดายเรื่องใน**อดีต**ที่แก้ไม่ได้แล้ว (`If only I had reviewed`)',
      '`It\'s high time + S + V2` (ถึงเวลาแล้วที่...) และ `would rather + V1` (อยากทำ...มากกว่า)'
    ]
  },

  g27: {
    titleEn: 'Finding a Cozy Apartment',
    sceneTh: 'แป้งคุยกับนายหน้าอสังหาฯ เรื่องคอนโดที่เพิ่งไปดูมา',
    emoji: '🏙️',
    speakers: {
      A: { name: 'Pang', roleTh: 'ผู้เช่า' },
      B: { name: 'David', roleTh: 'นายหน้าคอนโด' }
    },
    lines: [
      { sp: 'A', en: 'I loved the condo **that** overlooks the park!', th: 'ฉันชอบคอนโดห้องที่มองเห็นวิวสวนมากเลยค่ะ!' },
      { sp: 'B', en: 'Great! The owner, **who** lives in Japan, just renovated the kitchen.', th: 'ดีเลยครับ เจ้าของห้องซึ่งอาศัยอยู่ที่ญี่ปุ่นเพิ่งรีโนเวตครัวใหม่เลย' },
      { sp: 'A', en: 'Nice! Is this the building **where** pets are allowed?', th: 'เยี่ยมเลยค่ะ นี่คือตึกที่อนุญาตให้เลี้ยงสัตว์ได้ใช่ไหมคะ' },
      { sp: 'B', en: 'Yes, and **what** makes it popular is the free shuttle to the station.', th: 'ใช่ครับ และสิ่งที่ทำให้ตึกนี้ฮิตก็คือรถรับส่งฟรีไปสถานีรถไฟฟ้า' },
      { sp: 'A', en: 'Do you know the neighbor **whose** balcony has all those plants?', th: 'คุณรู้จักเพื่อนบ้านคนที่ระเบียงมีต้นไม้เยอะๆ นั่นไหมคะ' },
      { sp: 'B', en: 'Sure! The unit **located** on Floor 12 is still open if you want to compare.', th: 'รู้จักครับ ห้องที่ตั้งอยู่ชั้น 12 ก็ยังว่างนะครับ เผื่อคุณอยากเทียบดู' }
    ],
    takeawayTh: [
      '**Relative Clauses**: `who` (คน), `that/which` (สิ่งของ), `where` (สถานที่), `whose` (แสดงความเป็นเจ้าของ เช่น `whose balcony`)',
      'แบบมีคอมม่า (Non-defining) เช่น `, who lives in Japan,` ใช้ขยายเพิ่มเติมและ**ห้ามใช้ `that`**',
      '**Noun Clause** (`what makes it popular`) ทำหน้าที่เป็นประธานของประโยค และ `located on Floor 12` เป็น Participle Clause ขยายนาม'
    ]
  },

  g27b: {
    titleEn: 'Tech Startup Demo Day',
    sceneTh: 'วินกับเรเชลคุยกันระหว่างงานเปิดตัวแอปของสตาร์ตอัป',
    emoji: '📱',
    speakers: {
      A: { name: 'Win', roleTh: 'ผู้ร่วมงาน' },
      B: { name: 'Rachel', roleTh: 'ผู้ก่อตั้งสตาร์ตอัป' }
    },
    lines: [
      { sp: 'A', en: '**Walking** into the hall, I noticed the booth **decorated** with neon lights.', th: 'ตอนเดินเข้ามาในฮอลล์ ฉันสังเกตเห็นบูธที่ตกแต่งด้วยไฟนีออนเลย' },
      { sp: 'B', en: 'That\'s ours! The app **developed** by our team helps travelers translate menus.', th: 'บูธเราเอง! แอปที่ถูกพัฒนาโดยทีมเราช่วยนักท่องเที่ยวแปลเมนูอาหารได้' },
      { sp: 'A', en: '**Having tested** it for two minutes, I\'m already impressed!', th: 'พอลองเทสต์ไปแค่สองนาที ฉันก็ประทับใจแล้วนะเนี่ย' },
      { sp: 'B', en: 'Thanks! The engineer **standing** by the screen built the camera feature.', th: 'ขอบคุณครับ วิศวกรที่ยืนอยู่ข้างจอนั่นแหละเป็นคนทำฟีเจอร์กล้อง' },
      { sp: 'A', en: '**Built** with offline mode, it must work great in remote areas.', th: 'พอสร้างมาให้มีโหมดออฟไลน์ด้วย มันต้องใช้ดีมากในพื้นที่ห่างไกลแน่ๆ' },
      { sp: 'B', en: 'Exactly! **Not knowing** local languages shouldn\'t stop anyone from exploring.', th: 'ถูกต้อง! การไม่รู้ภาษาท้องถิ่นไม่ควรมาหยุดใครจากการออกไปเที่ยว' }
    ],
    takeawayTh: [
      '**ลดรูป Relative Clause**: ทำเอง (Active) ใช้ `V-ing` (`the engineer standing`) · ถูกกระทำ (Passive) ใช้ `V3` (`the app developed by...`, `booth decorated`)',
      '**Participle Clause ขึ้นต้นประโยค**: `Walking into...` (ทำพร้อมกัน) · `Having + V3` (`Having tested`) = ทำเสร็จก่อนอีกเหตุการณ์',
      '**กฎเหล็ก**: ประธานของประโยคหลักต้องเป็นคนเดียวกับผู้ทำกริยาใน Participle Clause (`Walking ..., I noticed`) เพื่อไม่ให้เกิด Dangling Modifier'
    ]
  },

  g28: {
    titleEn: 'Passing On a Message from the Boss',
    sceneTh: 'ออมเล่าให้เพื่อนร่วมทีมฟังว่าผู้จัดการโทรมาสั่งงานอะไรไว้บ้าง',
    emoji: '📞',
    speakers: {
      A: { name: 'Aom', roleTh: 'เลขาทีม' },
      B: { name: 'Chris', roleTh: 'นักพัฒนาเว็บ' }
    },
    lines: [
      { sp: 'A', en: 'Chris, our boss just called and **said that** the meeting **had been moved** to Friday.', th: 'คริส หัวหน้าเพิ่งโทรมาบอกว่าการประชุมถูกเลื่อนไปวันศุกร์แล้วนะ' },
      { sp: 'B', en: 'Oh, good! Did she say anything about the budget?', th: 'โอ้ ดีเลย แล้วเขาพูดอะไรเรื่องงบประมาณไหม' },
      { sp: 'A', en: 'She **asked me if** we **could** send the updated sheet **the next day**.', th: 'เขาถามฉันว่าพรุ่งนี้พวกเราพอจะส่งตารางงบที่อัปเดตแล้วได้ไหม' },
      { sp: 'B', en: 'No problem. Did she ask **when** the new site **would** go live?', th: 'ไม่มีปัญหา แล้วเขาถามไหมว่าเว็บใหม่จะเปิดใช้งานเมื่อไร' },
      { sp: 'A', en: 'Yes, and she **told us not to rush** the security testing.', th: 'ถามสิ แล้วเขาก็บอกพวกเราว่าอย่ารีบร้อนเรื่องเทสต์ระบบความปลอดภัยนะ' },
      { sp: 'B', en: 'Got it! She also **promised to join** our lunch once she\'s back.', th: 'รับทราบ! เขาสัญญาว่าจะมากินข้าวเที่ยงกับเราด้วยพอกลับมาแล้ว' }
    ],
    takeawayTh: [
      '**Backshift Tense**: เมื่อกริยานำเป็นอดีต (`said, asked`) ให้ถอย Tense ลง 1 ขั้น (`can → could`, `will → would`, `has been → had been`) และปรับเวลา (`tomorrow → the next day`)',
      '**คำถามอ้อม**: ใช้ `asked + if/Wh-word + S + V` (`asked me if we could...`, `when the new site would...`) ไม่กลับรูปคำถาม',
      '**คำสั่ง/ขอร้อง**: ใช้ `told/asked + คน + (not) to V1` (`told us not to rush`)'
    ]
  },

  g29: {
    titleEn: 'Polishing a Scholarship Essay',
    sceneTh: 'ฟ้าให้อาจารย์มาร์ตินช่วยเกลาเรียงความสมัครทุนการศึกษาให้ดูเป็นมืออาชีพ',
    emoji: '🎓',
    speakers: {
      A: { name: 'Fah', roleTh: 'นักศึกษาทุน' },
      B: { name: 'Martin', roleTh: 'อาจารย์ที่ปรึกษา' }
    },
    lines: [
      { sp: 'A', en: 'Professor, how can I make this essay sound more **professional** and **persuasive**?', th: 'อาจารย์คะ หนูจะทำยังไงให้เรียงความนี้ดูเป็นมืออาชีพและน่าเชื่อถือขึ้นคะ' },
      { sp: 'B', en: 'Keep your lists **parallel**: say "**researching, writing, and presenting**," not "to present."', th: 'จัดรูปคำให้ขนานกันนะ ใช้ researching, writing, and presenting อย่าหลุดเป็น to present' },
      { sp: 'A', en: 'Got it! What about my opening? "**Not only did** I volunteer, **but** I **also** led a workshop."', th: 'เข้าใจแล้วค่ะ แล้วประโยคเปิดนี้ล่ะคะ "ไม่เพียงแต่หนูเป็นอาสาสมัคร แต่ยังนำเวิร์กชอปด้วย"' },
      { sp: 'B', en: 'Strong **inversion**! Also avoid **unnecessary** repetition—cut any **meaningless** filler words.', th: 'ใช้ Inversion ได้ทรงพลังมาก! แล้วก็เลี่ยงคำซ้ำที่ไม่จำเป็น ตัดคำฟุ่มเฟือยที่ไม่มีความหมายออกด้วยนะ' },
      { sp: 'A', en: 'Should I use "**moreover**" to connect my second achievement?', th: 'หนูควรใช้คำว่า moreover เพื่อเชื่อมผลงานชิ้นที่สองไหมคะ' },
      { sp: 'B', en: 'Yes! Your **clarity** and **dedication** really shine through now.', th: 'ใช่เลย ตอนนี้ความชัดเจนและความทุ่มเทของเธอโดดเด่นออกมาชัดเจนมาก' }
    ],
    takeawayTh: [
      '**Parallelism (คู่ขนาน)**: คำที่เชื่อมด้วย `and` ต้องรูปเดียวกันทั้งหมด (`researching, writing, and presenting`)',
      '**Prefix/Suffix**: `un-` (ไม่: `unnecessary`), `-less` (ไร้: `meaningless`), `-ity / -tion` สร้างคำนาม (`clarity, dedication`)',
      '**Negative Inversion**: `Not only + กริยาช่วย + S + V` (`Not only did I volunteer`) ช่วยเพิ่มน้ำหนักให้งานเขียนระดับ B2–C1'
    ]
  },

  g29b: {
    titleEn: 'Debating Remote Work Policy',
    sceneTh: 'นนท์กับเอเลน่าประชุมหารือเรื่องนโยบายการทำงานแบบไฮบริดในบริษัท',
    emoji: '🏛️',
    speakers: {
      A: { name: 'Non', roleTh: 'ผู้จัดการทีม' },
      B: { name: 'Elena', roleTh: 'ผู้อำนวยการฝ่ายบุคคล' }
    },
    lines: [
      { sp: 'A', en: 'HR **recommended that** every team **meet** in person twice a week.', th: 'ฝ่ายบุคคลแนะนำว่าทุกทีมควรมาเจอกันที่ออฟฟิศสัปดาห์ละสองครั้งครับ' },
      { sp: 'B', en: 'Yes! **It is essential that** each manager **be** flexible with commuting hours.', th: 'ใช่ค่ะ จำเป็นอย่างยิ่งที่ผู้จัดการแต่ละคนจะต้องยืดหยุ่นเรื่องเวลาเดินทาง' },
      { sp: 'A', en: '**It was** the long commute **that** drained our team\'s energy last quarter.', th: 'การเดินทางไกลๆ นี่แหละครับที่ดูดพลังทีมเราไปหมดเมื่อไตรมาสก่อน' },
      { sp: 'B', en: '**Never have I seen** morale improve so fast after switching to hybrid!', th: 'ฉันไม่เคยเห็นขวัญกำลังใจทีมดีขึ้นเร็วขนาดนี้มาก่อนเลยหลังจากเปลี่ยนเป็นไฮบริด' },
      { sp: 'A', en: '**What** we need most **is** clearer guidelines for async updates.', th: 'สิ่งที่เราต้องการมากที่สุดตอนนี้ก็คือแนวทางที่ชัดเจนขึ้นสำหรับการอัปเดตงานแบบไม่พร้อมกัน' },
      { sp: 'B', en: '**Seldom do** policies please everyone, yet this one comes very close.', th: 'น้อยครั้งมากที่นโยบายจะถูกใจทุกคน แต่นโยบายนี้ใกล้เคียงมากเลยค่ะ' }
    ],
    takeawayTh: [
      '**Mandative Subjunctive**: หลัง `recommend / essential that + S` ใช้กริยา**รูปเดิม (`V1 / be`)** ไม่เติม `-s` (`every team meet`, `each manager be`)',
      '**Cleft Sentences** ใช้เน้นจุดสำคัญ: `It was [สิ่งที่เน้น] that ...` และ `What [สิ่งที่เน้น] is ...`',
      '**Negative Inversion**: ขึ้นต้นด้วยคำเชิงลบ (`Never, Seldom`) ต้องสลับกริยาช่วยมาหน้าประธาน (`Never have I seen`, `Seldom do policies`)'
    ]
  },

  g30: {
    titleEn: 'Fixing Common Thai-English Slip-ups',
    sceneTh: 'ปาล์มกับเพื่อนชาวออสเตรเลียคุยกันขำๆ เรื่องประโยคภาษาอังกฤษที่คนไทยเผลอแปลตรงตัวบ่อย',
    emoji: '🇹🇭',
    speakers: {
      A: { name: 'Palm', roleTh: 'ผู้เรียนไทย' },
      B: { name: 'Liam', roleTh: 'เพื่อนชาวออสเตรเลีย' }
    },
    lines: [
      { sp: 'A', en: 'Liam, I\'m **very** tired today, and I **agree with** your idea to rest!', th: 'เลียม วันนี้ฉันเหนื่อยมากเลย แล้วฉันก็เห็นด้วยกับไอเดียนายที่ให้พักนะ' },
      { sp: 'B', en: 'Haha, nice catch—you didn\'t say "I am agree"! Wait, **because** it\'s hot, let\'s stay indoors.', th: 'ฮ่าๆ พูดถูกเลย เธอไม่เผลอพูดว่า I am agree แล้ว! เพราะอากาศร้อน เรานั่งข้างในกันเถอะ' },
      { sp: 'A', en: 'Right! No "because ... so" together! Could you **turn on** the air conditioner?', th: 'ใช่ ห้ามใช้ because คู่กับ so! ช่วยเปิดแอร์หน่อยได้ไหม' },
      { sp: 'B', en: 'Sure—never "open the air"! By the way, I have some useful **information** for your trip.', th: 'ได้เลย ห้ามพูดว่า open the air นะ! ว่าแต่ฉันมีข้อมูลดีๆ สำหรับทริปเธอด้วย' },
      { sp: 'A', en: 'Thanks! I\'m **looking forward to** **visiting** Sydney next year.', th: 'ขอบใจนะ ฉันตั้งตารอที่จะไปเที่ยวซิดนีย์ปีหน้าเลย' },
      { sp: 'B', en: 'Awesome—remember we **discuss** the plan tomorrow, not "discuss about"!', th: 'เยี่ยมเลย จำไว้นะว่าพรุ่งนี้เรา discuss the plan กัน ไม่ต้องใส่ about นะ!' }
    ],
    takeawayTh: [
      '`agree` เป็นกริยาแท้ ใช้ `I agree` (ห้าม `~~I am agree~~`) · `discuss` ไม่ต้องมี `about` ตามหลัง (`discuss the plan`)',
      'ห้ามใช้ `because ... so` หรือ `although ... but` คู่กันในประโยคเดียว ให้เลือกใช้เพียงคำเดียว',
      'เครื่องใช้ไฟฟ้าใช้ `turn on / turn off` (ไม่ใช่ `~~open/close~~`) และ `look forward to` ต้องตามด้วย `V-ing` (`visiting`)'
    ]
  }
};

