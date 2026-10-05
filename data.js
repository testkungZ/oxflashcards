const wordsData = [
    {
        "word": "almost",
        "partOfSpeech": "adverb",
        "translation": "เกือบ",
        "definition": "",
        "example": "I almost fell.",
        "exampleTranslation": "ฉันเกือบหกล้ม"
    },
    {
        "word": "alone",
        "partOfSpeech": "adverb",
        "translation": "คนเดียว",
        "definition": "",
        "example": "He lives alone.",
        "exampleTranslation": "เขาอาศัยอยู่คนเดียว"
    },
    {
        "word": "along",
        "partOfSpeech": "noun",
        "translation": "ตาม",
        "definition": "",
        "example": "We walked along the beach.",
        "exampleTranslation": "พวกเราเดินไปตามชายหาด"
    },
    {
        "word": "alongside",
        "partOfSpeech": "adverb",
        "translation": "ข้างๆ อยู่ข้าง",
        "definition": "",
        "example": "The boat pulled alongside the dock.",
        "exampleTranslation": "เรือเข้ามาจอดเทียบท่า"
    },
    {
        "word": "aloud",
        "partOfSpeech": "noun",
        "translation": "ดัง",
        "definition": "",
        "example": "Read the story aloud.",
        "exampleTranslation": "อ่านเรื่องราวออกมาดังๆ"
    },
    {
        "word": "alphabet",
        "partOfSpeech": "noun",
        "translation": "ตัวอักษร",
        "definition": "",
        "example": "There are 26 letters in the alphabet.",
        "exampleTranslation": "มี 26 ตัวอักษรในภาษาอังกฤษ"
    },
    {
        "word": "alphabetical",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งแสดงด้วยตัวอักษร เรียงตามอักษร",
        "definition": "",
        "example": "Please arrange the names in alphabetical order.",
        "exampleTranslation": "โปรดเรียงรายชื่อตามลำดับตัวอักษร"
    },
    {
        "word": "already",
        "partOfSpeech": "adverb",
        "translation": "แล้ว",
        "definition": "",
        "example": "I have already finished my work.",
        "exampleTranslation": "ฉันทำงานเสร็จแล้ว"
    },
    {
        "word": "also",
        "partOfSpeech": "adverb",
        "translation": "ยัง ด้วย อีกด้วย",
        "definition": "",
        "example": "I also like to play tennis.",
        "exampleTranslation": "ฉันก็ชอบเล่นเทนนิสเหมือนกัน"
    },
    {
        "word": "alter",
        "partOfSpeech": "noun",
        "translation": "ปรับปรุง เปลี่ยนแปลง แก้ไข",
        "definition": "",
        "example": "You can alter the size of the image.",
        "exampleTranslation": "คุณสามารถเปลี่ยนขนาดของภาพได้"
    },
    {
        "word": "alternative",
        "partOfSpeech": "noun",
        "translation": "ทางเลือก ตัวเลือก",
        "definition": "",
        "example": "We have no alternative.",
        "exampleTranslation": "พวกเราไม่มีทางเลือกอื่น"
    },
    {
        "word": "although",
        "partOfSpeech": "noun",
        "translation": "ถึงแม้ว่า",
        "definition": "",
        "example": "Although it was raining, we went out.",
        "exampleTranslation": "ถึงแม้ฝนจะตก พวกเราก็ออกไปข้างนอก"
    },
    {
        "word": "altogether",
        "partOfSpeech": "adverb",
        "translation": "ทั้งหมด",
        "definition": "",
        "example": "That will be 50 baht altogether.",
        "exampleTranslation": "ทั้งหมดราคา 50 บาท"
    },
    {
        "word": "always",
        "partOfSpeech": "adverb",
        "translation": "เป็นประจํา",
        "definition": "",
        "example": "I always wake up early.",
        "exampleTranslation": "ฉันตื่นเช้าเสมอ"
    },
    {
        "word": "amaze",
        "partOfSpeech": "noun",
        "translation": "ทําให้ประหลาดใจ",
        "definition": "",
        "example": "Her magic tricks always amaze me.",
        "exampleTranslation": "มายากลของเธอมักจะทำให้ฉันประหลาดใจ"
    },
    {
        "word": "amazed",
        "partOfSpeech": "verb",
        "translation": "รู้สึกประหลาดใจ, รู้สึกทึ่ง",
        "definition": "",
        "example": "I was amazed by the beautiful view.",
        "exampleTranslation": "ฉันรู้สึกประหลาดใจกับวิวที่สวยงาม"
    },
    {
        "word": "amazing",
        "partOfSpeech": "verb",
        "translation": "น่าประหลาดใจ",
        "definition": "",
        "example": "The movie was amazing.",
        "exampleTranslation": "ภาพยนตร์เรื่องนี้น่าประหลาดใจมาก"
    },
    {
        "word": "ambition",
        "partOfSpeech": "noun",
        "translation": "ความทะเยอทะยาน ความมุ่งมาดปรารถนา",
        "definition": "",
        "example": "His ambition is to become a doctor.",
        "exampleTranslation": "ความทะเยอทะยานของเขาคือการเป็นหมอ"
    },
    {
        "word": "ambulance",
        "partOfSpeech": "noun",
        "translation": "รถพยาบาล",
        "definition": "",
        "example": "Call an ambulance!",
        "exampleTranslation": "เรียกรถพยาบาล!"
    },
    {
        "word": "among",
        "partOfSpeech": "noun",
        "translation": "ในระหว่าง ในหมู่ ในจําพวก",
        "definition": "",
        "example": "He was sitting among his friends.",
        "exampleTranslation": "เขานั่งอยู่ท่ามกลางเพื่อนๆ"
    },
    {
        "word": "amount",
        "partOfSpeech": "noun",
        "translation": "จํานวน",
        "definition": "",
        "example": "What is the total amount?",
        "exampleTranslation": "ยอดรวมทั้งหมดคือเท่าไหร่?"
    },
    {
        "word": "amuse",
        "partOfSpeech": "noun",
        "translation": "ทําให้สนุกสนาน",
        "definition": "",
        "example": "The clown amused the children.",
        "exampleTranslation": "ตัวตลกทำให้เด็กๆ สนุกสนาน"
    },
    {
        "word": "amused",
        "partOfSpeech": "verb",
        "translation": "รู้สึกขบขัน, รู้สึกสนุกสนาน",
        "definition": "",
        "example": "I was amused by his funny story.",
        "exampleTranslation": "ฉันรู้สึกขบขันกับเรื่องตลกของเขา"
    },
    {
        "word": "amusing",
        "partOfSpeech": "verb",
        "translation": "น่าขบขัน",
        "definition": "",
        "example": "That was a very amusing joke.",
        "exampleTranslation": "นั่นเป็นเรื่องตลกที่น่าขบขันมาก"
    },
    {
        "word": "analyse",
        "partOfSpeech": "noun",
        "translation": "วิเคราะห์",
        "definition": "",
        "example": "We need to analyse the data.",
        "exampleTranslation": "พวกเราจำเป็นต้องวิเคราะห์ข้อมูล"
    },
    {
        "word": "analysis",
        "partOfSpeech": "noun",
        "translation": "การวิเคราะห์ การจําแนกแยกแยะ",
        "definition": "",
        "example": "The blood analysis showed nothing wrong.",
        "exampleTranslation": "การวิเคราะห์เลือดไม่พบสิ่งผิดปกติ"
    },
    {
        "word": "ancient",
        "partOfSpeech": "noun",
        "translation": "โบราณ",
        "definition": "",
        "example": "They found some ancient coins.",
        "exampleTranslation": "พวกเขาพบเหรียญโบราณบางส่วน"
    },
    {
        "word": "and",
        "partOfSpeech": "noun",
        "translation": "และ",
        "definition": "",
        "example": "I bought apples and bananas.",
        "exampleTranslation": "ฉันซื้อแอปเปิ้ลและกล้วย"
    },
    {
        "word": "anger",
        "partOfSpeech": "noun",
        "translation": "ความโกรธ",
        "definition": "",
        "example": "He could not hide his anger.",
        "exampleTranslation": "เขาไม่สามารถซ่อนความโกรธของเขาได้"
    },
    {
        "word": "angle",
        "partOfSpeech": "noun",
        "translation": "มุม",
        "definition": "",
        "example": "Draw a 90-degree angle.",
        "exampleTranslation": "วาดมุม 90 องศา"
    },
    {
        "word": "angry",
        "partOfSpeech": "adjective",
        "translation": "โกรธ",
        "definition": "",
        "example": "Please do not be angry with me.",
        "exampleTranslation": "โปรดอย่าโกรธฉันเลย"
    },
    {
        "word": "animal",
        "partOfSpeech": "noun",
        "translation": "สัตว์",
        "definition": "",
        "example": "The dog is a friendly animal.",
        "exampleTranslation": "สุนัขเป็นสัตว์ที่เป็นมิตร"
    },
    {
        "word": "ankle",
        "partOfSpeech": "noun",
        "translation": "ข้อเท้า",
        "definition": "",
        "example": "She sprained her ankle.",
        "exampleTranslation": "เธอข้อเท้าแพลง"
    },
    {
        "word": "anniversary",
        "partOfSpeech": "noun",
        "translation": "วันครบรอบ",
        "definition": "",
        "example": "Today is our wedding anniversary.",
        "exampleTranslation": "วันนี้เป็นวันครบรอบแต่งงานของเรา"
    },
    {
        "word": "announce",
        "partOfSpeech": "noun",
        "translation": "ประกาศแจ้ง แถลง แสดง",
        "definition": "",
        "example": "They will announce the winner soon.",
        "exampleTranslation": "พวกเขาจะประกาศรายชื่อผู้ชนะเร็วๆ นี้"
    },
    {
        "word": "annoy",
        "partOfSpeech": "noun",
        "translation": "ทำให้รำคาญ",
        "definition": "",
        "example": "Loud noises annoy me.",
        "exampleTranslation": "เสียงดังทำให้ฉันรำคาญ"
    },
    {
        "word": "annoyed",
        "partOfSpeech": "noun",
        "translation": "รู้สึกรำคาญ",
        "definition": "",
        "example": "I was annoyed by the delay.",
        "exampleTranslation": "ฉันรู้สึกรำคาญกับความล่าช้า"
    },
    {
        "word": "annoying",
        "partOfSpeech": "verb",
        "translation": "น่ารําคาญ",
        "definition": "",
        "example": "That fly is very annoying.",
        "exampleTranslation": "แมลงวันตัวนั้นน่ารำคาญมาก"
    },
    {
        "word": "annual",
        "partOfSpeech": "adjective",
        "translation": "ประจำปี",
        "definition": "",
        "example": "This is an annual event.",
        "exampleTranslation": "นี่คืองานประจำปี"
    },
    {
        "word": "annually",
        "partOfSpeech": "adverb",
        "translation": "ประจําปี รายปี ทุกปี ปีละครั้ง",
        "definition": "",
        "example": "The meeting is held annually.",
        "exampleTranslation": "การประชุมจัดขึ้นเป็นประจำทุกปี"
    },
    {
        "word": "another",
        "partOfSpeech": "noun",
        "translation": "อีกอันหนึ่ง, อย่างอื่น",
        "definition": "",
        "example": "Would you like another cup of tea?",
        "exampleTranslation": "คุณรับชาอีกถ้วยไหม?"
    },
    {
        "word": "answer",
        "partOfSpeech": "noun",
        "translation": "คําตอบ",
        "definition": "",
        "example": "I do not know the answer.",
        "exampleTranslation": "ฉันไม่รู้คำตอบ"
    },
    {
        "word": "anti",
        "partOfSpeech": "noun",
        "translation": "ต่อต้าน",
        "definition": "",
        "example": "He is anti-war.",
        "exampleTranslation": "เขาต่อต้านสงคราม"
    },
    {
        "word": "anticipate",
        "partOfSpeech": "noun",
        "translation": "คาดการณ์ล่วงหน้า",
        "definition": "",
        "example": "We anticipate a lot of people at the party.",
        "exampleTranslation": "พวกเราคาดการณ์ว่าจะมีคนมาร่วมงานปาร์ตี้จำนวนมาก"
    },
    {
        "word": "anxiety",
        "partOfSpeech": "noun",
        "translation": "ความกังวล",
        "definition": "",
        "example": "He suffers from anxiety.",
        "exampleTranslation": "เขาทนทุกข์ทรมานจากความวิตกกังวล"
    },
    {
        "word": "anxious",
        "partOfSpeech": "adjective",
        "translation": "วิตกกังวล, ร้อนใจ",
        "definition": "",
        "example": "I am anxious about the exam.",
        "exampleTranslation": "ฉันรู้สึกกังวลเกี่ยวกับการสอบ"
    },
    {
        "word": "any",
        "partOfSpeech": "noun",
        "translation": "ใดๆ, บ้าง, เลย",
        "definition": "",
        "example": "Do you have any questions?",
        "exampleTranslation": "คุณมีคำถามใดๆ ไหม?"
    },
    {
        "word": "anybody",
        "partOfSpeech": "noun",
        "translation": "ใครก็ตาม",
        "definition": "",
        "example": "Can anybody help me?",
        "exampleTranslation": "มีใครช่วยฉันได้บ้างไหม?"
    },
    {
        "word": "anyone",
        "partOfSpeech": "noun",
        "translation": "ใครก็ตาม",
        "definition": "",
        "example": "Has anyone seen my keys?",
        "exampleTranslation": "มีใครเห็นกุญแจของฉันบ้างไหม?"
    },
    {
        "word": "anything",
        "partOfSpeech": "noun",
        "translation": "อะไรก็ตาม",
        "definition": "",
        "example": "I did not eat anything today.",
        "exampleTranslation": "วันนี้ฉันยังไม่ได้กินอะไรเลย"
    },
    {
        "word": "anyway",
        "partOfSpeech": "adverb",
        "translation": "อย่างไรก็ตาม",
        "definition": "",
        "example": "I will go anyway.",
        "exampleTranslation": "ฉันจะไปอยู่ดี"
    },
    {
        "word": "anywhere",
        "partOfSpeech": "adverb",
        "translation": "ที่ไหนก็ตาม",
        "definition": "",
        "example": "I cannot find it anywhere.",
        "exampleTranslation": "ฉันหามันไม่เจอที่ไหนเลย"
    },
    {
        "word": "apart",
        "partOfSpeech": "adverb",
        "translation": "เป็นส่วนๆ ต่างหาก",
        "definition": "",
        "example": "We are far apart.",
        "exampleTranslation": "พวกเราอยู่ห่างไกลกัน"
    },
    {
        "word": "apart from",
        "partOfSpeech": "noun",
        "translation": "นอกเหนือจาก",
        "definition": "",
        "example": "Apart from this, everything is fine.",
        "exampleTranslation": "นอกเหนือจากนี้ ทุกอย่างเรียบร้อยดี"
    },
    {
        "word": "apartment",
        "partOfSpeech": "noun",
        "translation": "อะพาร์ตเมนต์, ห้องชุด",
        "definition": "",
        "example": "She lives in a small apartment.",
        "exampleTranslation": "เธออาศัยอยู่ในอะพาร์ตเมนต์เล็กๆ"
    },
    {
        "word": "apologize",
        "partOfSpeech": "verb",
        "translation": "ขอโทษ, ขออภัย",
        "definition": "",
        "example": "You must apologize to him.",
        "exampleTranslation": "คุณต้องขอโทษเขา"
    },
    {
        "word": "apparent",
        "partOfSpeech": "noun",
        "translation": "ชัดเจน, ปรากฏชัด",
        "definition": "",
        "example": "It is apparent that he is lying.",
        "exampleTranslation": "มันชัดเจนว่าเขากำลังโกหก"
    },
    {
        "word": "apparently",
        "partOfSpeech": "adverb",
        "translation": "อย่างเห็นได้ชัด, ดูเหมือนว่า",
        "definition": "",
        "example": "Apparently, it is going to rain.",
        "exampleTranslation": "เห็นได้ชัดว่าฝนกำลังจะตก"
    },
    {
        "word": "appeal",
        "partOfSpeech": "noun",
        "translation": "ดึงดูด, อุทธรณ์, ร้องเรียน",
        "definition": "",
        "example": "The idea appeals to me.",
        "exampleTranslation": "ความคิดนี้ดึงดูดใจฉัน"
    },
    {
        "word": "appear",
        "partOfSpeech": "verb",
        "translation": "ปรากฏ, ดูเหมือน",
        "definition": "",
        "example": "A man appeared at the door.",
        "exampleTranslation": "ผู้ชายคนหนึ่งปรากฏตัวที่ประตู"
    },
    {
        "word": "appearance",
        "partOfSpeech": "noun",
        "translation": "รูปร่างหน้าตา, การปรากฏตัว",
        "definition": "",
        "example": "Do not judge by appearance.",
        "exampleTranslation": "อย่าตัดสินจากรูปร่างหน้าตา"
    },
    {
        "word": "apple",
        "partOfSpeech": "noun",
        "translation": "แอปเปิ้ล",
        "definition": "",
        "example": "I ate a red apple.",
        "exampleTranslation": "ฉันกินแอปเปิ้ลสีแดง"
    },
    {
        "word": "application",
        "partOfSpeech": "noun",
        "translation": "การสมัคร ใบสมัคร",
        "definition": "",
        "example": "Fill out this application form.",
        "exampleTranslation": "กรอกใบสมัครนี้"
    },
    {
        "word": "apply",
        "partOfSpeech": "verb",
        "translation": "สมัคร, นำมาใช้",
        "definition": "",
        "example": "I want to apply for this job.",
        "exampleTranslation": "ฉันต้องการสมัครงานนี้"
    },
    {
        "word": "appoint",
        "partOfSpeech": "noun",
        "translation": "แต่งตั้ง",
        "definition": "",
        "example": "They will appoint a new manager.",
        "exampleTranslation": "พวกเขาจะแต่งตั้งผู้จัดการคนใหม่"
    },
    {
        "word": "appointment",
        "partOfSpeech": "noun",
        "translation": "การนัดหมาย, การแต่งตั้ง",
        "definition": "",
        "example": "I have a doctors appointment.",
        "exampleTranslation": "ฉันมีการนัดหมายกับหมอ"
    },
    {
        "word": "appreciate",
        "partOfSpeech": "noun",
        "translation": "ซาบซึ้ง, เห็นคุณค่า",
        "definition": "",
        "example": "I appreciate your help.",
        "exampleTranslation": "ฉันซาบซึ้งในความช่วยเหลือของคุณ"
    },
    {
        "word": "approach",
        "partOfSpeech": "noun",
        "translation": "วิธีการ, เข้าใกล้",
        "definition": "",
        "example": "We must find a new approach.",
        "exampleTranslation": "พวกเราต้องหาวิธีการใหม่"
    },
    {
        "word": "appropriate",
        "partOfSpeech": "noun",
        "translation": "เหมาะสม",
        "definition": "",
        "example": "That is not an appropriate behavior.",
        "exampleTranslation": "นั่นไม่ใช่พฤติกรรมที่เหมาะสม"
    },
    {
        "word": "approval",
        "partOfSpeech": "noun",
        "translation": "การอนุมัติ, ความเห็นชอบ",
        "definition": "",
        "example": "I need your approval first.",
        "exampleTranslation": "ฉันต้องการการอนุมัติจากคุณก่อน"
    },
    {
        "word": "approve",
        "partOfSpeech": "verb",
        "translation": "อนุมัติ",
        "definition": "",
        "example": "Do you approve of this plan?",
        "exampleTranslation": "คุณเห็นด้วยกับแผนนี้ไหม?"
    },
    {
        "word": "approximate",
        "partOfSpeech": "noun",
        "translation": "ประมาณ, คร่าวๆ",
        "definition": "",
        "example": "What is the approximate cost?",
        "exampleTranslation": "ราคาโดยประมาณคือเท่าไหร่?"
    },
    {
        "word": "approximately",
        "partOfSpeech": "adverb",
        "translation": "โดยประมาณ",
        "definition": "",
        "example": "It takes approximately one hour.",
        "exampleTranslation": "ใช้เวลาประมาณหนึ่งชั่วโมง"
    },
    {
        "word": "April",
        "partOfSpeech": "noun",
        "translation": "เมษายน",
        "definition": "",
        "example": "My birthday is in April.",
        "exampleTranslation": "วันเกิดของฉันอยู่ในเดือนเมษายน"
    },
    {
        "word": "area",
        "partOfSpeech": "noun",
        "translation": "พื้นที่, บริเวณ",
        "definition": "",
        "example": "This is a no-smoking area.",
        "exampleTranslation": "นี่คือพื้นที่ห้ามสูบบุหรี่"
    },
    {
        "word": "argue",
        "partOfSpeech": "noun",
        "translation": "โต้เถียง, ถกเถียง",
        "definition": "",
        "example": "They often argue with each other.",
        "exampleTranslation": "พวกเขามักจะโต้เถียงกัน"
    },
    {
        "word": "argument",
        "partOfSpeech": "noun",
        "translation": "ข้อโต้แย้ง, การโต้เถียง",
        "definition": "",
        "example": "We had a heated argument.",
        "exampleTranslation": "พวกเรามีการโต้เถียงกันอย่างดุเดือด"
    },
    {
        "word": "arise",
        "partOfSpeech": "noun",
        "translation": "เกิดขึ้น ลุกขึ้น เป็นผลจาก",
        "definition": "",
        "example": "A new problem has arisen.",
        "exampleTranslation": "ปัญหาใหม่ได้เกิดขึ้น"
    },
    {
        "word": "arm",
        "partOfSpeech": "noun",
        "translation": "แขน",
        "definition": "",
        "example": "He broke his right arm.",
        "exampleTranslation": "เขาแขนขวาหัก"
    },
    {
        "word": "armed",
        "partOfSpeech": "verb",
        "translation": "ติดอาวุธ",
        "definition": "",
        "example": "The robber was armed with a gun.",
        "exampleTranslation": "โจรติดอาวุธปืน"
    },
    {
        "word": "arms",
        "partOfSpeech": "noun",
        "translation": "อาวุธ",
        "definition": "",
        "example": "They supplied arms to the rebels.",
        "exampleTranslation": "พวกเขาจัดหาอาวุธให้กลุ่มกบฏ"
    },
    {
        "word": "army",
        "partOfSpeech": "noun",
        "translation": "กองทัพ",
        "definition": "",
        "example": "He joined the army.",
        "exampleTranslation": "เขาเข้าร่วมกองทัพ"
    },
    {
        "word": "around",
        "partOfSpeech": "noun",
        "translation": "รอบๆ, ประมาณ",
        "definition": "",
        "example": "Look around you.",
        "exampleTranslation": "มองไปรอบๆ ตัวคุณ"
    },
    {
        "word": "arrange",
        "partOfSpeech": "noun",
        "translation": "จัดเตรียม, จัดการ",
        "definition": "",
        "example": "I will arrange a meeting.",
        "exampleTranslation": "ฉันจะจัดการประชุม"
    },
    {
        "word": "arrangement",
        "partOfSpeech": "noun",
        "translation": "การจัดเตรียม, ข้อตกลง",
        "definition": "",
        "example": "They made a special arrangement.",
        "exampleTranslation": "พวกเขาทำข้อตกลงพิเศษ"
    },
    {
        "word": "arrest",
        "partOfSpeech": "noun",
        "translation": "จับ จับกุม",
        "definition": "",
        "example": "The police will arrest the thief.",
        "exampleTranslation": "ตำรวจจะจับกุมหัวขโมย"
    },
    {
        "word": "arrival",
        "partOfSpeech": "noun",
        "translation": "การมาถึง",
        "definition": "",
        "example": "We are waiting for his arrival.",
        "exampleTranslation": "พวกเรากำลังรอการมาถึงของเขา"
    },
    {
        "word": "arrive",
        "partOfSpeech": "adjective",
        "translation": "มาถึง",
        "definition": "",
        "example": "What time will you arrive?",
        "exampleTranslation": "คุณจะมาถึงกี่โมง?"
    },
    {
        "word": "arrow",
        "partOfSpeech": "noun",
        "translation": "ลูกศร, ธนู",
        "definition": "",
        "example": "Follow the arrow.",
        "exampleTranslation": "ตามลูกศรไป"
    },
    {
        "word": "art",
        "partOfSpeech": "noun",
        "translation": "ศิลปะ",
        "definition": "",
        "example": "She is studying modern art.",
        "exampleTranslation": "เธอกำลังศึกษาศิลปะสมัยใหม่"
    },
    {
        "word": "article",
        "partOfSpeech": "noun",
        "translation": "บทความ, สิ่งของ",
        "definition": "",
        "example": "I read an interesting article.",
        "exampleTranslation": "ฉันอ่านบทความที่น่าสนใจ"
    },
    {
        "word": "artificial",
        "partOfSpeech": "adjective",
        "translation": "ประดิษฐ์, เทียม",
        "definition": "",
        "example": "These flowers are artificial.",
        "exampleTranslation": "ดอกไม้เหล่านี้เป็นของเทียม"
    },
    {
        "word": "artist",
        "partOfSpeech": "noun",
        "translation": "ศิลปิน ช่างฝีมือ",
        "definition": "",
        "example": "He is a famous artist.",
        "exampleTranslation": "เขาเป็นศิลปินที่มีชื่อเสียง"
    },
    {
        "word": "artistic",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับศิลปะ",
        "definition": "",
        "example": "She has a lot of artistic talent.",
        "exampleTranslation": "เธอมีพรสวรรค์ทางศิลปะมากมาย"
    },
    {
        "word": "as",
        "partOfSpeech": "noun",
        "translation": "ในฐานะ, เนื่องจาก, ขณะที่",
        "definition": "",
        "example": "He works as a teacher.",
        "exampleTranslation": "เขาทำงานในฐานะครู"
    },
    {
        "word": "ashamed",
        "partOfSpeech": "verb",
        "translation": "รู้สึกละอายใจ",
        "definition": "",
        "example": "I am ashamed of my mistake.",
        "exampleTranslation": "ฉันรู้สึกละอายใจกับความผิดพลาดของฉัน"
    },
    {
        "word": "aside",
        "partOfSpeech": "adverb",
        "translation": "ไปด้านข้าง, สำรองไว้",
        "definition": "",
        "example": "Please step aside.",
        "exampleTranslation": "โปรดหลีกทางไปด้านข้าง"
    },
    {
        "word": "aside from",
        "partOfSpeech": "noun",
        "translation": "นอกเหนือจาก นอกจาก",
        "definition": "",
        "example": "Aside from that, I have no idea.",
        "exampleTranslation": "นอกเหนือจากนั้น ฉันไม่รู้เลย"
    },
    {
        "word": "ask",
        "partOfSpeech": "noun",
        "translation": "ถาม, ขอร้อง",
        "definition": "",
        "example": "Can I ask you a question?",
        "exampleTranslation": "ฉันขอถามคำถามคุณได้ไหม?"
    },
    {
        "word": "asleep",
        "partOfSpeech": "noun",
        "translation": "หลับ",
        "definition": "",
        "example": "The baby is fast asleep.",
        "exampleTranslation": "ทารกหลับสนิท"
    },
    {
        "word": "aspect",
        "partOfSpeech": "noun",
        "translation": "แง่มุม, ด้าน",
        "definition": "",
        "example": "We must consider every aspect.",
        "exampleTranslation": "พวกเราต้องพิจารณาทุกแง่มุม"
    },
    {
        "word": "assist",
        "partOfSpeech": "noun",
        "translation": "ช่วยเหลือ, สนับสนุน",
        "definition": "",
        "example": "I will assist you with this task.",
        "exampleTranslation": "ฉันจะช่วยเหลือคุณในงานนี้"
    },
    {
        "word": "assistance",
        "partOfSpeech": "noun",
        "translation": "ความช่วยเหลือ",
        "definition": "",
        "example": "Do you need any assistance?",
        "exampleTranslation": "คุณต้องการความช่วยเหลือไหม?"
    },
    {
        "word": "assistant",
        "partOfSpeech": "noun",
        "translation": "ผู้ช่วย",
        "definition": "",
        "example": "She works as a shop assistant.",
        "exampleTranslation": "เธอทำงานเป็นผู้ช่วยร้านค้า"
    },
    {
        "word": "associate",
        "partOfSpeech": "noun",
        "translation": "เชื่อมโยง, เกี่ยวข้อง",
        "definition": "",
        "example": "I do not want to associate with them.",
        "exampleTranslation": "ฉันไม่อยากเกี่ยวข้องกับพวกเขา"
    },
    {
        "word": "associated",
        "partOfSpeech": "verb",
        "translation": "ที่เกี่ยวข้อง, สัมพันธ์กัน",
        "definition": "",
        "example": "The risks associated with smoking are high.",
        "exampleTranslation": "ความเสี่ยงที่เกี่ยวข้องกับการสูบบุหรี่มีสูง"
    },
    {
        "word": "association",
        "partOfSpeech": "noun",
        "translation": "สมาคม, ความเกี่ยวพัน",
        "definition": "",
        "example": "He is a member of the association.",
        "exampleTranslation": "เขาเป็นสมาชิกของสมาคม"
    },
    {
        "word": "assume",
        "partOfSpeech": "verb",
        "translation": "สันนิษฐาน, สมมติ",
        "definition": "",
        "example": "Do not assume anything.",
        "exampleTranslation": "อย่าเพิ่งสันนิษฐานอะไร"
    },
    {
        "word": "assure",
        "partOfSpeech": "noun",
        "translation": "รับรอง, ทำให้มั่นใจ",
        "definition": "",
        "example": "I assure you it is safe.",
        "exampleTranslation": "ฉันรับรองกับคุณว่ามันปลอดภัย"
    },
    {
        "word": "at",
        "partOfSpeech": "noun",
        "translation": "ที่ ณ",
        "definition": "",
        "example": "We meet at the station.",
        "exampleTranslation": "เราเจอกันที่สถานี"
    },
    {
        "word": "atmosphere",
        "partOfSpeech": "adverb",
        "translation": "บรรยากาศ",
        "definition": "",
        "example": "The earths atmosphere is changing.",
        "exampleTranslation": "บรรยากาศของโลกกำลังเปลี่ยนแปลง"
    },
    {
        "word": "atom",
        "partOfSpeech": "noun",
        "translation": "อะตอม ปรมาณู",
        "definition": "",
        "example": "An atom is very small.",
        "exampleTranslation": "อะตอมมีขนาดเล็กมาก"
    },
    {
        "word": "attach",
        "partOfSpeech": "noun",
        "translation": "แนบ, ติด",
        "definition": "",
        "example": "Attach the document to your email.",
        "exampleTranslation": "แนบเอกสารไปกับอีเมลของคุณ"
    },
    {
        "word": "attached",
        "partOfSpeech": "verb",
        "translation": "แนบมาด้วย, ผูกพัน",
        "definition": "",
        "example": "Please find the attached file.",
        "exampleTranslation": "โปรดตรวจสอบไฟล์ที่แนบมาด้วย"
    },
    {
        "word": "attack",
        "partOfSpeech": "noun",
        "translation": "โจมตี",
        "definition": "",
        "example": "The dog attacked him.",
        "exampleTranslation": "สุนัขโจมตีเขา"
    },
    {
        "word": "attempt",
        "partOfSpeech": "noun",
        "translation": "ความพยายาม",
        "definition": "",
        "example": "He made a brave attempt.",
        "exampleTranslation": "เขาพยายามอย่างกล้าหาญ"
    },
    {
        "word": "attend",
        "partOfSpeech": "noun",
        "translation": "เข้าร่วม",
        "definition": "",
        "example": "I will attend the meeting.",
        "exampleTranslation": "ฉันจะเข้าร่วมการประชุม"
    },
    {
        "word": "attention",
        "partOfSpeech": "noun",
        "translation": "ความสนใจ",
        "definition": "",
        "example": "Pay attention in class.",
        "exampleTranslation": "ตั้งใจเรียนในชั้นเรียน"
    },
    {
        "word": "attitude",
        "partOfSpeech": "noun",
        "translation": "ทัศนคติ ท่าทาง ท่าในการบิน",
        "definition": "",
        "example": "He has a positive attitude.",
        "exampleTranslation": "เขามีทัศนคติที่ดี"
    },
    {
        "word": "attorney",
        "partOfSpeech": "noun",
        "translation": "ทนายความ นักกฎหมาย ตัวแทน ผู้รับมอบอํานาจ",
        "definition": "",
        "example": "He hired a good attorney.",
        "exampleTranslation": "เขาจ้างทนายความเก่งๆ"
    },
    {
        "word": "attract",
        "partOfSpeech": "noun",
        "translation": "ดึงดูดความสนใจ",
        "definition": "",
        "example": "Flowers attract bees.",
        "exampleTranslation": "ดอกไม้ดึงดูดผึ้ง"
    },
    {
        "word": "attraction",
        "partOfSpeech": "noun",
        "translation": "การดึงดูดความสนใจ",
        "definition": "",
        "example": "The main attraction is the castle.",
        "exampleTranslation": "จุดดึงดูดหลักคือปราสาท"
    },
    {
        "word": "attractive",
        "partOfSpeech": "adjective",
        "translation": "ที่น่าสนใจ",
        "definition": "",
        "example": "She is a very attractive woman.",
        "exampleTranslation": "เธอเป็นผู้หญิงที่มีเสน่ห์มาก"
    },
    {
        "word": "audience",
        "partOfSpeech": "noun",
        "translation": "ผู้ชม ผู้ฟัง",
        "definition": "",
        "example": "The audience clapped loudly.",
        "exampleTranslation": "ผู้ชมปรบมือเสียงดัง"
    },
    {
        "word": "August",
        "partOfSpeech": "noun",
        "translation": "สิงหาคม",
        "definition": "",
        "example": "We will travel in August.",
        "exampleTranslation": "พวกเราจะไปเที่ยวในเดือนสิงหาคม"
    },
    {
        "word": "aunt",
        "partOfSpeech": "noun",
        "translation": "ป้า",
        "definition": "",
        "example": "My aunt lives in London.",
        "exampleTranslation": "ป้าของฉันอาศัยอยู่ในลอนดอน"
    },
    {
        "word": "author",
        "partOfSpeech": "noun",
        "translation": "ผู้ประพันธ์ นักเขียน",
        "definition": "",
        "example": "Who is the author of this book?",
        "exampleTranslation": "ใครคือผู้แต่งหนังสือเล่มนี้?"
    },
    {
        "word": "authority",
        "partOfSpeech": "noun",
        "translation": "เจ้าหน้าที่ เจ้าพนักงาน",
        "definition": "",
        "example": "He has no authority here.",
        "exampleTranslation": "เขาไม่มีอำนาจที่นี่"
    },
    {
        "word": "automatic",
        "partOfSpeech": "adjective",
        "translation": "อัตโนมัติ",
        "definition": "",
        "example": "This car has automatic transmission.",
        "exampleTranslation": "รถคันนี้มีเกียร์อัตโนมัติ"
    },
    {
        "word": "autumn",
        "partOfSpeech": "noun",
        "translation": "ฤดูใบไม้ร่วง",
        "definition": "",
        "example": "Leaves fall in autumn.",
        "exampleTranslation": "ใบไม้ร่วงในฤดูใบไม้ร่วง"
    },
    {
        "word": "available",
        "partOfSpeech": "adjective",
        "translation": "พร้อมใช้ ใช้ประโยชน์ได้ ว่างที่จะพบปะหรือพูดคุย",
        "definition": "",
        "example": "Are there any tickets available?",
        "exampleTranslation": "มีตั๋วว่างบ้างไหม?"
    },
    {
        "word": "average",
        "partOfSpeech": "adjective",
        "translation": "โดยเฉลี่ย",
        "definition": "",
        "example": "His grades are above average.",
        "exampleTranslation": "เกรดของเขาสูงกว่าค่าเฉลี่ย"
    },
    {
        "word": "avoid",
        "partOfSpeech": "noun",
        "translation": "หลีกเลี่ยง",
        "definition": "",
        "example": "You should avoid eating too much sugar.",
        "exampleTranslation": "คุณควรหลีกเลี่ยงการกินน้ำตาลมากเกินไป"
    },
    {
        "word": "awake",
        "partOfSpeech": "noun",
        "translation": "ตื่นตัว",
        "definition": "",
        "example": "Are you still awake?",
        "exampleTranslation": "คุณยังตื่นอยู่ไหม?"
    },
    {
        "word": "award",
        "partOfSpeech": "noun",
        "translation": "ให้รางวัล มอบให้",
        "definition": "",
        "example": "She won an award for acting.",
        "exampleTranslation": "เธอได้รับรางวัลสำหรับการแสดง"
    },
    {
        "word": "aware",
        "partOfSpeech": "adjective",
        "translation": "รู้ตัว รู้สึกตัว",
        "definition": "",
        "example": "I am aware of the problem.",
        "exampleTranslation": "ฉันตระหนักถึงปัญหา"
    },
    {
        "word": "away",
        "partOfSpeech": "adverb",
        "translation": "ออกไป",
        "definition": "",
        "example": "Go away!",
        "exampleTranslation": "ไปให้พ้น!"
    },
    {
        "word": "awful",
        "partOfSpeech": "noun",
        "translation": "น่ากลัว แย่มาก",
        "definition": "",
        "example": "The weather is awful today.",
        "exampleTranslation": "วันนี้อากาศแย่มาก"
    },
    {
        "word": "awfully",
        "partOfSpeech": "adverb",
        "translation": "อย่างเลวร้าย อย่างน่ากลัว",
        "definition": "",
        "example": "I am awfully sorry.",
        "exampleTranslation": "ฉันขอโทษอย่างมาก"
    },
    {
        "word": "awkward",
        "partOfSpeech": "noun",
        "translation": "งุ่มง่าม เคอะเขิน เก้งก้าง",
        "definition": "",
        "example": "It was an awkward silence.",
        "exampleTranslation": "มันเป็นความเงียบที่น่าอึดอัดใจ"
    },
    {
        "word": "baby",
        "partOfSpeech": "noun",
        "translation": "เด็ก",
        "definition": "",
        "example": "The baby is crying.",
        "exampleTranslation": "ทารกกำลังร้องไห้"
    },
    {
        "word": "back",
        "partOfSpeech": "adverb",
        "translation": "หลัง",
        "definition": "",
        "example": "My back hurts.",
        "exampleTranslation": "ฉันปวดหลัง"
    },
    {
        "word": "background",
        "partOfSpeech": "noun",
        "translation": "พื้นหลัง",
        "definition": "",
        "example": "He has a background in music.",
        "exampleTranslation": "เขามีพื้นฐานด้านดนตรี"
    },
    {
        "word": "backward",
        "partOfSpeech": "noun",
        "translation": "ย้อนกลับ",
        "definition": "",
        "example": "He took a step backward.",
        "exampleTranslation": "เขาก้าวถอยหลังหนึ่งก้าว"
    },
    {
        "word": "backwards",
        "partOfSpeech": "noun",
        "translation": "ย้อนกลับ ถอยหลัง",
        "definition": "",
        "example": "Can you count backwards from 10?",
        "exampleTranslation": "คุณนับถอยหลังตั้งแต่ 10 ได้ไหม?"
    },
    {
        "word": "bacteria",
        "partOfSpeech": "noun",
        "translation": "แบคทีเรีย",
        "definition": "",
        "example": "Wash your hands to kill bacteria.",
        "exampleTranslation": "ล้างมือของคุณเพื่อฆ่าเชื้อแบคทีเรีย"
    },
    {
        "word": "bad",
        "partOfSpeech": "adjective",
        "translation": "เลว ไม่ดี",
        "definition": "",
        "example": "This milk has gone bad.",
        "exampleTranslation": "นมนี้บูดแล้ว"
    },
    {
        "word": "badly",
        "partOfSpeech": "adverb",
        "translation": "เลว ร้าย บกพร่อง ไม่ถูกต้อง",
        "definition": "",
        "example": "He was badly injured.",
        "exampleTranslation": "เขาได้รับบาดเจ็บสาหัส"
    },
    {
        "word": "bad-tempered",
        "partOfSpeech": "adjective",
        "translation": "อารมณ์ร้าย อารมณ์ไม่ดี",
        "definition": "",
        "example": "He gets bad-tempered when he is tired.",
        "exampleTranslation": "เขาอารมณ์เสียเมื่อเขาเหนื่อย"
    },
    {
        "word": "bag",
        "partOfSpeech": "noun",
        "translation": "ถุง",
        "definition": "",
        "example": "I bought a new bag.",
        "exampleTranslation": "ฉันซื้อกระเป๋าใบใหม่"
    },
    {
        "word": "baggage",
        "partOfSpeech": "noun",
        "translation": "กระเป๋าเดินทาง",
        "definition": "",
        "example": "He carried my baggage.",
        "exampleTranslation": "เขาถือสัมภาระของฉัน"
    },
    {
        "word": "bake",
        "partOfSpeech": "noun",
        "translation": "อบ",
        "definition": "",
        "example": "I will bake a cake today.",
        "exampleTranslation": "ฉันจะอบเค้กวันนี้"
    },
    {
        "word": "balance",
        "partOfSpeech": "noun",
        "translation": "สมดุล",
        "definition": "",
        "example": "Keep your balance on the bike.",
        "exampleTranslation": "ทรงตัวให้ดีบนจักรยาน"
    },
    {
        "word": "ball",
        "partOfSpeech": "noun",
        "translation": "ลูกบอล",
        "definition": "",
        "example": "The boy threw the ball.",
        "exampleTranslation": "เด็กผู้ชายขว้างลูกบอล"
    },
    {
        "word": "ban",
        "partOfSpeech": "noun",
        "translation": "ห้าม สั่งห้าม",
        "definition": "",
        "example": "There is a ban on smoking here.",
        "exampleTranslation": "มีคำสั่งห้ามสูบบุหรี่ที่นี่"
    },
    {
        "word": "band",
        "partOfSpeech": "noun",
        "translation": "วงดนตรี",
        "definition": "",
        "example": "He plays guitar in a band.",
        "exampleTranslation": "เขาเล่นกีตาร์ในวงดนตรี"
    },
    {
        "word": "bandage",
        "partOfSpeech": "noun",
        "translation": "ผ้าพันแผล",
        "definition": "",
        "example": "The nurse put a bandage on my arm.",
        "exampleTranslation": "พยาบาลพันแผลที่แขนของฉัน"
    },
    {
        "word": "bank",
        "partOfSpeech": "noun",
        "translation": "ธนาคาร",
        "definition": "",
        "example": "I need to go to the bank.",
        "exampleTranslation": "ฉันต้องไปที่ธนาคาร"
    },
    {
        "word": "bar",
        "partOfSpeech": "noun",
        "translation": "ท่อน แท่ง",
        "definition": "",
        "example": "We went to a bar for a drink.",
        "exampleTranslation": "พวกเราไปดื่มที่บาร์"
    },
    {
        "word": "bargain",
        "partOfSpeech": "noun",
        "translation": "การต่อรองราคา",
        "definition": "",
        "example": "This shirt is a real bargain.",
        "exampleTranslation": "เสื้อตัวนี้ราคาถูกมาก"
    },
    {
        "word": "barrier",
        "partOfSpeech": "noun",
        "translation": "สิ่งกีดขวางทางผ่าน สิ่งกีดขวาง อุปสรรค",
        "definition": "",
        "example": "The police put up a barrier.",
        "exampleTranslation": "ตำรวจตั้งแผงกั้น"
    },
    {
        "word": "base",
        "partOfSpeech": "noun",
        "translation": "ฐาน",
        "definition": "",
        "example": "The base of the lamp is heavy.",
        "exampleTranslation": "ฐานของโคมไฟนั้นหนัก"
    },
    {
        "word": "based",
        "partOfSpeech": "verb",
        "translation": "ซึ่งเป็นรากฐาน",
        "definition": "",
        "example": "The movie is based on a true story.",
        "exampleTranslation": "ภาพยนตร์เรื่องนี้สร้างจากเรื่องจริง"
    },
    {
        "word": "basic",
        "partOfSpeech": "adjective",
        "translation": "พื้นฐาน จําเป็นที่สุด",
        "definition": "",
        "example": "These are basic math skills.",
        "exampleTranslation": "นี่คือทักษะคณิตศาสตร์ขั้นพื้นฐาน"
    },
    {
        "word": "basically",
        "partOfSpeech": "adverb",
        "translation": "โดยพื้นฐานแล้ว",
        "definition": "",
        "example": "Basically, we have no money.",
        "exampleTranslation": "โดยพื้นฐานแล้ว พวกเราไม่มีเงินเลย"
    },
    {
        "word": "basis",
        "partOfSpeech": "noun",
        "translation": "พื้นฐาน",
        "definition": "",
        "example": "On what basis did you choose him?",
        "exampleTranslation": "คุณเลือกเขาโดยใช้เกณฑ์อะไร?"
    },
    {
        "word": "bath",
        "partOfSpeech": "noun",
        "translation": "อ่างอาบนํ้า",
        "definition": "",
        "example": "I am going to take a bath.",
        "exampleTranslation": "ฉันกำลังจะอาบน้ำ"
    },
    {
        "word": "bathroom",
        "partOfSpeech": "noun",
        "translation": "ห้องนํ้า",
        "definition": "",
        "example": "Where is the bathroom?",
        "exampleTranslation": "ห้องน้ำอยู่ที่ไหน?"
    },
    {
        "word": "battery",
        "partOfSpeech": "noun",
        "translation": "แบตเตอรี่",
        "definition": "",
        "example": "My phone needs a new battery.",
        "exampleTranslation": "โทรศัพท์ของฉันต้องเปลี่ยนแบตเตอรี่ใหม่"
    },
    {
        "word": "battle",
        "partOfSpeech": "noun",
        "translation": "การต่อสู้",
        "definition": "",
        "example": "The army won the battle.",
        "exampleTranslation": "กองทัพชนะการต่อสู้"
    },
    {
        "word": "bay",
        "partOfSpeech": "noun",
        "translation": "อ่าว ที่เว้าของเทือกเขา",
        "definition": "",
        "example": "We watched the boats in the bay.",
        "exampleTranslation": "พวกเราดูเรือในอ่าว"
    },
    {
        "word": "be",
        "partOfSpeech": "verb",
        "translation": "เป็น อยู่ คือ",
        "definition": "",
        "example": "I want to be a doctor.",
        "exampleTranslation": "ฉันอยากเป็นหมอ"
    },
    {
        "word": "beach",
        "partOfSpeech": "noun",
        "translation": "ชายหาด",
        "definition": "",
        "example": "We walked along the beach.",
        "exampleTranslation": "พวกเราเดินไปตามชายหาด"
    },
    {
        "word": "beak",
        "partOfSpeech": "noun",
        "translation": "จะงอยปาก",
        "definition": "",
        "example": "The bird has a yellow beak.",
        "exampleTranslation": "นกมีจงอยปากสีเหลือง"
    },
    {
        "word": "bear",
        "partOfSpeech": "noun",
        "translation": "คํ้ารับ พยุง หนุน แบก รับภาระ",
        "definition": "",
        "example": "I saw a bear in the zoo.",
        "exampleTranslation": "ฉันเห็นหมีในสวนสัตว์"
    },
    {
        "word": "beard",
        "partOfSpeech": "noun",
        "translation": "เครา",
        "definition": "",
        "example": "He has a long white beard.",
        "exampleTranslation": "เขามีเครายาวสีขาว"
    },
    {
        "word": "beat",
        "partOfSpeech": "noun",
        "translation": "ตี เฆี่ยน",
        "definition": "",
        "example": "My heart began to beat faster.",
        "exampleTranslation": "หัวใจของฉันเริ่มเต้นเร็วขึ้น"
    },
    {
        "word": "beautiful",
        "partOfSpeech": "noun",
        "translation": "สวยงาม",
        "definition": "",
        "example": "The flowers are beautiful.",
        "exampleTranslation": "ดอกไม้สวยงามมาก"
    },
    {
        "word": "beautifully",
        "partOfSpeech": "adverb",
        "translation": "อย่างสวยงาม",
        "definition": "",
        "example": "She sings beautifully.",
        "exampleTranslation": "เธอร้องเพลงได้อย่างไพเราะ"
    },
    {
        "word": "beauty",
        "partOfSpeech": "noun",
        "translation": "ความสวยงาม",
        "definition": "",
        "example": "She is famous for her beauty.",
        "exampleTranslation": "เธอมีชื่อเสียงในเรื่องความงาม"
    },
    {
        "word": "because",
        "partOfSpeech": "noun",
        "translation": "เพราะว่า",
        "definition": "",
        "example": "I stayed home because I was sick.",
        "exampleTranslation": "ฉันอยู่บ้านเพราะฉันป่วย"
    },
    {
        "word": "become",
        "partOfSpeech": "noun",
        "translation": "กลายเป็น",
        "definition": "",
        "example": "The caterpillar will become a butterfly.",
        "exampleTranslation": "หนอนผีเสื้อจะกลายเป็นผีเสื้อ"
    },
    {
        "word": "bed",
        "partOfSpeech": "noun",
        "translation": "เตียง",
        "definition": "",
        "example": "I am going to bed now.",
        "exampleTranslation": "ฉันกำลังจะไปนอนแล้ว"
    },
    {
        "word": "bedroom",
        "partOfSpeech": "noun",
        "translation": "ห้องนอน",
        "definition": "",
        "example": "His bedroom is very clean.",
        "exampleTranslation": "ห้องนอนของเขาสะอาดมาก"
    },
    {
        "word": "beef",
        "partOfSpeech": "noun",
        "translation": "เนื้อวัว",
        "definition": "",
        "example": "I like to eat roast beef.",
        "exampleTranslation": "ฉันชอบกินเนื้อย่าง"
    },
    {
        "word": "beer",
        "partOfSpeech": "noun",
        "translation": "เบียร์",
        "definition": "",
        "example": "Would you like a glass of beer?",
        "exampleTranslation": "คุณรับเบียร์สักแก้วไหม?"
    },
    {
        "word": "before",
        "partOfSpeech": "noun",
        "translation": "ก่อน",
        "definition": "",
        "example": "Please wash your hands before eating.",
        "exampleTranslation": "โปรดล้างมือก่อนรับประทานอาหาร"
    },
    {
        "word": "begin",
        "partOfSpeech": "noun",
        "translation": "เริ่มต้น",
        "definition": "",
        "example": "The movie will begin soon.",
        "exampleTranslation": "ภาพยนตร์กำลังจะเริ่มแล้ว"
    },
    {
        "word": "beginning",
        "partOfSpeech": "verb",
        "translation": "การเริ่มต้น",
        "definition": "",
        "example": "Let us start from the beginning.",
        "exampleTranslation": "มาเริ่มกันตั้งแต่ต้นเลย"
    },
    {
        "word": "behalf",
        "partOfSpeech": "noun",
        "translation": "ในนามของ",
        "definition": "",
        "example": "I am speaking on behalf of my team.",
        "exampleTranslation": "ฉันพูดในนามของทีม"
    },
    {
        "word": "behave",
        "partOfSpeech": "noun",
        "translation": "ประพฤติ",
        "definition": "",
        "example": "The children behaved well today.",
        "exampleTranslation": "เด็กๆ ประพฤติตัวดีในวันนี้"
    },
    {
        "word": "behaviour",
        "partOfSpeech": "noun",
        "translation": "ความประพฤติ พฤติกรรม",
        "definition": "",
        "example": "His behaviour is unacceptable.",
        "exampleTranslation": "พฤติกรรมของเขาเป็นสิ่งที่ยอมรับไม่ได้"
    },
    {
        "word": "behind",
        "partOfSpeech": "noun",
        "translation": "ข้างหลัง",
        "definition": "",
        "example": "The cat is hiding behind the sofa.",
        "exampleTranslation": "แมวกำลังซ่อนอยู่หลังโซฟา"
    },
    {
        "word": "belief",
        "partOfSpeech": "noun",
        "translation": "ความเชื่อ",
        "definition": "",
        "example": "It is my firm belief that we will win.",
        "exampleTranslation": "มันเป็นความเชื่อมั่นของฉันว่าพวกเราจะชนะ"
    },
    {
        "word": "believe",
        "partOfSpeech": "verb",
        "translation": "เชื่อ มั่นใจใน",
        "definition": "",
        "example": "Do you believe in ghosts?",
        "exampleTranslation": "คุณเชื่อเรื่องผีไหม?"
    },
    {
        "word": "bell",
        "partOfSpeech": "noun",
        "translation": "ระฆัง กระดิ่ง",
        "definition": "",
        "example": "The school bell is ringing.",
        "exampleTranslation": "ระฆังโรงเรียนกำลังดัง"
    },
    {
        "word": "belong",
        "partOfSpeech": "noun",
        "translation": "เป็นของ",
        "definition": "",
        "example": "This book belongs to me.",
        "exampleTranslation": "หนังสือเล่มนี้เป็นของฉัน"
    },
    {
        "word": "below",
        "partOfSpeech": "noun",
        "translation": "ด้านล่าง",
        "definition": "",
        "example": "Please read the instructions below.",
        "exampleTranslation": "โปรดอ่านคำแนะนำด้านล่าง"
    },
    {
        "word": "belt",
        "partOfSpeech": "noun",
        "translation": "เข็มขัด",
        "definition": "",
        "example": "Fasten your seat belt.",
        "exampleTranslation": "คาดเข็มขัดนิรภัยของคุณ"
    },
    {
        "word": "bend",
        "partOfSpeech": "noun",
        "translation": "โค้ง งอ ก้ม",
        "definition": "",
        "example": "Bend your knees.",
        "exampleTranslation": "งอเข่าของคุณ"
    },
    {
        "word": "beneath",
        "partOfSpeech": "noun",
        "translation": "ภายใต้",
        "definition": "",
        "example": "We sat beneath a large tree.",
        "exampleTranslation": "พวกเรานั่งอยู่ใต้ต้นไม้ใหญ่"
    },
    {
        "word": "benefit",
        "partOfSpeech": "noun",
        "translation": "ผลประโยชน์",
        "definition": "",
        "example": "Eating fruit has many health benefits.",
        "exampleTranslation": "การกินผลไม้มีประโยชน์ต่อสุขภาพมากมาย"
    },
    {
        "word": "bent",
        "partOfSpeech": "noun",
        "translation": "งอ โค้ง",
        "definition": "",
        "example": "The old man has a bent back.",
        "exampleTranslation": "ชายชรามีหลังค่อม"
    },
    {
        "word": "beside",
        "partOfSpeech": "noun",
        "translation": "ข้าง",
        "definition": "",
        "example": "Come and sit beside me.",
        "exampleTranslation": "มานั่งข้างๆ ฉันสิ"
    },
    {
        "word": "best",
        "partOfSpeech": "adjective",
        "translation": "ดีที่สุด",
        "definition": "",
        "example": "He is my best friend.",
        "exampleTranslation": "เขาคือเพื่อนที่ดีที่สุดของฉัน"
    },
    {
        "word": "bet",
        "partOfSpeech": "noun",
        "translation": "พนัน",
        "definition": "",
        "example": "I bet it will rain tomorrow.",
        "exampleTranslation": "ฉันพนันเลยว่าพรุ่งนี้ฝนจะตก"
    },
    {
        "word": "better",
        "partOfSpeech": "adverb",
        "translation": "ดีกว่า",
        "definition": "",
        "example": "I feel much better today.",
        "exampleTranslation": "วันนี้ฉันรู้สึกดีขึ้นมาก"
    },
    {
        "word": "betting",
        "partOfSpeech": "verb",
        "translation": "การพนัน",
        "definition": "",
        "example": "He lost all his money betting on horses.",
        "exampleTranslation": "เขาเสียเงินทั้งหมดไปกับการพนันม้า"
    },
    {
        "word": "between",
        "partOfSpeech": "noun",
        "translation": "ระหว่าง",
        "definition": "",
        "example": "The house is between two trees.",
        "exampleTranslation": "บ้านอยู่ระหว่างต้นไม้สองต้น"
    },
    {
        "word": "beyond",
        "partOfSpeech": "noun",
        "translation": "เกิน",
        "definition": "",
        "example": "The mountains are beyond the river.",
        "exampleTranslation": "ภูเขาอยู่เลยแม่น้ำไป"
    },
    {
        "word": "bicycle",
        "partOfSpeech": "noun",
        "translation": "รถจักรยาน",
        "definition": "",
        "example": "He rides his bicycle to school.",
        "exampleTranslation": "เขาขี่รถจักรยานไปโรงเรียน"
    },
    {
        "word": "bid",
        "partOfSpeech": "noun",
        "translation": "ประมูลราคา ความพยายามเพื่อให้ได้มา",
        "definition": "",
        "example": "She made a bid of 500 dollars.",
        "exampleTranslation": "เธอเสนอราคา 500 ดอลลาร์"
    },
    {
        "word": "big",
        "partOfSpeech": "adjective",
        "translation": "ใหญ่",
        "definition": "",
        "example": "They live in a big house.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในบ้านหลังใหญ่"
    },
    {
        "word": "bike",
        "partOfSpeech": "noun",
        "translation": "จักรยานสองล้อ",
        "definition": "",
        "example": "Can I borrow your bike?",
        "exampleTranslation": "ฉันขอยืมจักรยานของคุณได้ไหม?"
    },
    {
        "word": "bill",
        "partOfSpeech": "noun",
        "translation": "บิล",
        "definition": "",
        "example": "Can I have the bill, please?",
        "exampleTranslation": "ขอเก็บเงินด้วยครับ/ค่ะ?"
    },
    {
        "word": "billion",
        "partOfSpeech": "noun",
        "translation": "หนึ่งพันล้าน ( USA ) หนึ่งล้านล้าน ( Eng )",
        "definition": "",
        "example": "There are over seven billion people in the world.",
        "exampleTranslation": "มีประชากรมากกว่าเจ็ดพันล้านคนบนโลก"
    },
    {
        "word": "bin",
        "partOfSpeech": "noun",
        "translation": "ถังขยะ",
        "definition": "",
        "example": "Throw the trash in the bin.",
        "exampleTranslation": "ทิ้งขยะลงในถัง"
    },
    {
        "word": "biology",
        "partOfSpeech": "noun",
        "translation": "ชีววิทยา",
        "definition": "",
        "example": "I am studying biology at university.",
        "exampleTranslation": "ฉันกำลังเรียนวิชาชีววิทยาที่มหาวิทยาลัย"
    },
    {
        "word": "bird",
        "partOfSpeech": "noun",
        "translation": "นก",
        "definition": "",
        "example": "The bird is singing in the tree.",
        "exampleTranslation": "นกกำลังร้องเพลงอยู่บนต้นไม้"
    },
    {
        "word": "birth",
        "partOfSpeech": "noun",
        "translation": "กําเนิด",
        "definition": "",
        "example": "Please tell me your date of birth.",
        "exampleTranslation": "โปรดบอกวันเกิดของคุณ"
    },
    {
        "word": "birthday",
        "partOfSpeech": "noun",
        "translation": "วันเกิด",
        "definition": "",
        "example": "Happy birthday to you!",
        "exampleTranslation": "สุขสันต์วันเกิด!"
    },
    {
        "word": "biscuit",
        "partOfSpeech": "noun",
        "translation": "ขนมปังกรอบ",
        "definition": "",
        "example": "Would you like a biscuit with your tea?",
        "exampleTranslation": "คุณรับบิสกิตทานคู่กับชาไหม?"
    },
    {
        "word": "bit",
        "partOfSpeech": "noun",
        "translation": "ของเล็กๆน้อยๆ",
        "definition": "",
        "example": "I am a bit tired.",
        "exampleTranslation": "ฉันรู้สึกเหนื่อยเล็กน้อย"
    },
    {
        "word": "bite",
        "partOfSpeech": "noun",
        "translation": "กัด",
        "definition": "",
        "example": "Does your dog bite?",
        "exampleTranslation": "สุนัขของคุณกัดไหม?"
    },
    {
        "word": "bitter",
        "partOfSpeech": "noun",
        "translation": "ขม",
        "definition": "",
        "example": "The coffee tastes bitter.",
        "exampleTranslation": "กาแฟนี้มีรสขม"
    },
    {
        "word": "bitterly",
        "partOfSpeech": "adverb",
        "translation": "ที่ขมขื่น",
        "definition": "",
        "example": "She cried bitterly.",
        "exampleTranslation": "เธอร้องไห้อย่างขมขื่น"
    },
    {
        "word": "black",
        "partOfSpeech": "adjective",
        "translation": "มืด ดํา สีดํา",
        "definition": "",
        "example": "She is wearing a black dress.",
        "exampleTranslation": "เธอสวมชุดสีดำ"
    },
    {
        "word": "blade",
        "partOfSpeech": "noun",
        "translation": "ใบมีด",
        "definition": "",
        "example": "The blade of this knife is very sharp.",
        "exampleTranslation": "ใบมีดของมีดเล่มนี้คมมาก"
    },
    {
        "word": "blame",
        "partOfSpeech": "noun",
        "translation": "ตําหนิ",
        "definition": "",
        "example": "Do not blame yourself.",
        "exampleTranslation": "อย่าโทษตัวเองเลย"
    },
    {
        "word": "blank",
        "partOfSpeech": "noun",
        "translation": "ที่ว่าง",
        "definition": "",
        "example": "Write your name in the blank space.",
        "exampleTranslation": "เขียนชื่อของคุณในช่องว่าง"
    },
    {
        "word": "blind",
        "partOfSpeech": "noun",
        "translation": "ตาบอด",
        "definition": "",
        "example": "The blind man is walking with a stick.",
        "exampleTranslation": "ชายตาบอดกำลังเดินโดยใช้ไม้เท้า"
    },
    {
        "word": "block",
        "partOfSpeech": "noun",
        "translation": "ท่อน ก้อนใหญ่ ตึกใหญ่",
        "definition": "",
        "example": "They live on the next block.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในช่วงตึกถัดไป"
    },
    {
        "word": "blonde",
        "partOfSpeech": "noun",
        "translation": "ผู้หญิงผมสีเหลืองอ่อน",
        "definition": "",
        "example": "She has beautiful blonde hair.",
        "exampleTranslation": "เธอมีผมสีบลอนด์ที่สวยงาม"
    },
    {
        "word": "blood",
        "partOfSpeech": "noun",
        "translation": "สายเลือด",
        "definition": "",
        "example": "I saw blood on his shirt.",
        "exampleTranslation": "ฉันเห็นเลือดบนเสื้อของเขา"
    },
    {
        "word": "blow",
        "partOfSpeech": "noun",
        "translation": "เป่าลม ผิวปาก",
        "definition": "",
        "example": "Blow out the candles.",
        "exampleTranslation": "เป่าเทียนให้ดับ"
    },
    {
        "word": "blue",
        "partOfSpeech": "noun",
        "translation": "สีนํ้าเงิน",
        "definition": "",
        "example": "The sky is blue.",
        "exampleTranslation": "ท้องฟ้ามีสีฟ้า"
    },
    {
        "word": "board",
        "partOfSpeech": "noun",
        "translation": "แผ่นกระดาน",
        "definition": "",
        "example": "The teacher wrote on the board.",
        "exampleTranslation": "ครูเขียนบนกระดาน"
    },
    {
        "word": "boat",
        "partOfSpeech": "noun",
        "translation": "เรือ",
        "definition": "",
        "example": "We rented a small boat.",
        "exampleTranslation": "พวกเราเช่าเรือลำเล็ก"
    },
    {
        "word": "body",
        "partOfSpeech": "noun",
        "translation": "ร่างกาย",
        "definition": "",
        "example": "Exercise is good for your body.",
        "exampleTranslation": "การออกกำลังกายดีต่อร่างกายของคุณ"
    },
    {
        "word": "boil",
        "partOfSpeech": "noun",
        "translation": "ต้ม",
        "definition": "",
        "example": "Water boils at 100 degrees.",
        "exampleTranslation": "น้ำเดือดที่อุณหภูมิ 100 องศา"
    },
    {
        "word": "bomb",
        "partOfSpeech": "noun",
        "translation": "ลูกระเบิด",
        "definition": "",
        "example": "The bomb exploded loudly.",
        "exampleTranslation": "ระเบิดดังกึกก้อง"
    },
    {
        "word": "bone",
        "partOfSpeech": "noun",
        "translation": "กระดูก",
        "definition": "",
        "example": "The dog buried a bone.",
        "exampleTranslation": "สุนัขฝังกระดูก"
    },
    {
        "word": "book",
        "partOfSpeech": "noun",
        "translation": "หนังสือ",
        "definition": "",
        "example": "I am reading a good book.",
        "exampleTranslation": "ฉันกำลังอ่านหนังสือที่น่าสนใจ"
    },
    {
        "word": "boot",
        "partOfSpeech": "noun",
        "translation": "รองเท้าบูท",
        "definition": "",
        "example": "He put on his winter boots.",
        "exampleTranslation": "เขาสวมรองเท้าบูทกันหนาว"
    },
    {
        "word": "border",
        "partOfSpeech": "noun",
        "translation": "ชายแดน",
        "definition": "",
        "example": "We crossed the border into Mexico.",
        "exampleTranslation": "พวกเราข้ามพรมแดนไปยังประเทศเม็กซิโก"
    },
    {
        "word": "bore",
        "partOfSpeech": "noun",
        "translation": "ทําให้เบื่อหน่าย",
        "definition": "",
        "example": "I hope my story does not bore you.",
        "exampleTranslation": "ฉันหวังว่าเรื่องราวของฉันจะไม่ทำให้คุณเบื่อ"
    },
    {
        "word": "bored",
        "partOfSpeech": "verb",
        "translation": "เบื่อหน่าย",
        "definition": "",
        "example": "The children are getting bored.",
        "exampleTranslation": "เด็กๆ เริ่มรู้สึกเบื่อแล้ว"
    },
    {
        "word": "boring",
        "partOfSpeech": "noun",
        "translation": "ที่น่าเบื่อ",
        "definition": "",
        "example": "The lecture was very boring.",
        "exampleTranslation": "การบรรยายนั้นน่าเบื่อมาก"
    },
    {
        "word": "born",
        "partOfSpeech": "noun",
        "translation": "เกิด",
        "definition": "",
        "example": "I was born in Thailand.",
        "exampleTranslation": "ฉันเกิดที่ประเทศไทย"
    },
    {
        "word": "borrow",
        "partOfSpeech": "noun",
        "translation": "ยืม",
        "definition": "",
        "example": "Can I borrow your pen?",
        "exampleTranslation": "ฉันขอยืมปากกาของคุณได้ไหม?"
    },
    {
        "word": "boss",
        "partOfSpeech": "noun",
        "translation": "นายจ้าง นายใหญ่",
        "definition": "",
        "example": "My boss is very kind.",
        "exampleTranslation": "เจ้านายของฉันใจดีมาก"
    },
    {
        "word": "both",
        "partOfSpeech": "noun",
        "translation": "ทั้งสอง",
        "definition": "",
        "example": "I like both of them.",
        "exampleTranslation": "ฉันชอบพวกเขาทั้งคู่"
    },
    {
        "word": "bother",
        "partOfSpeech": "noun",
        "translation": "รบกวน ทําให้ยุ่งใจ",
        "definition": "",
        "example": "Please do not bother me.",
        "exampleTranslation": "โปรดอย่ารบกวนฉัน"
    },
    {
        "word": "bottle",
        "partOfSpeech": "noun",
        "translation": "ขวด",
        "definition": "",
        "example": "He drank a bottle of water.",
        "exampleTranslation": "เขาดื่มน้ำหนึ่งขวด"
    },
    {
        "word": "bottom",
        "partOfSpeech": "noun",
        "translation": "ก้น พื้นฐาน ข้างใต้ พื้นนํ้า",
        "definition": "",
        "example": "The book is at the bottom of the pile.",
        "exampleTranslation": "หนังสืออยู่ล่างสุดของกอง"
    },
    {
        "word": "bound",
        "partOfSpeech": "noun",
        "translation": "ผูกพัน มุ่งไปยัง",
        "definition": "",
        "example": "He is bound to win.",
        "exampleTranslation": "เขาจะต้องชนะแน่ๆ"
    },
    {
        "word": "bowl",
        "partOfSpeech": "noun",
        "translation": "ชาม",
        "definition": "",
        "example": "Eat a bowl of soup.",
        "exampleTranslation": "กินซุปสักชาม"
    },
    {
        "word": "box",
        "partOfSpeech": "noun",
        "translation": "กล่อง",
        "definition": "",
        "example": "What is in this box?",
        "exampleTranslation": "อะไรอยู่ในกล่องนี้?"
    },
    {
        "word": "boy",
        "partOfSpeech": "noun",
        "translation": "เด็กผู้ชาย",
        "definition": "",
        "example": "The boy is playing outside.",
        "exampleTranslation": "เด็กผู้ชายกำลังเล่นอยู่ข้างนอก"
    },
    {
        "word": "boyfriend",
        "partOfSpeech": "noun",
        "translation": "เพื่อนชาย คู่รัก",
        "definition": "",
        "example": "She went to the movies with her boyfriend.",
        "exampleTranslation": "เธอไปดูหนังกับแฟนหนุ่มของเธอ"
    },
    {
        "word": "brain",
        "partOfSpeech": "noun",
        "translation": "สมอง",
        "definition": "",
        "example": "Use your brain.",
        "exampleTranslation": "ใช้สมองของคุณสิ"
    },
    {
        "word": "branch",
        "partOfSpeech": "noun",
        "translation": "กิ่งก้าน แขนง วิชา สาขา",
        "definition": "",
        "example": "A bird is sitting on a branch.",
        "exampleTranslation": "นกกำลังเกาะอยู่บนกิ่งไม้"
    },
    {
        "word": "brand",
        "partOfSpeech": "noun",
        "translation": "ยี่ห้อ ตราสินค้า",
        "definition": "",
        "example": "What is your favorite brand of shoes?",
        "exampleTranslation": "รองเท้าแบรนด์โปรดของคุณคืออะไร?"
    },
    {
        "word": "brave",
        "partOfSpeech": "noun",
        "translation": "กล้าหาญ",
        "definition": "",
        "example": "He is a brave soldier.",
        "exampleTranslation": "เขาเป็นทหารที่กล้าหาญ"
    },
    {
        "word": "bread",
        "partOfSpeech": "noun",
        "translation": "ขนมปัง",
        "definition": "",
        "example": "I eat bread for breakfast.",
        "exampleTranslation": "ฉันกินขนมปังเป็นอาหารเช้า"
    },
    {
        "word": "break",
        "partOfSpeech": "noun",
        "translation": "ทําให้แตก",
        "definition": "",
        "example": "Do not break the glass.",
        "exampleTranslation": "อย่าทำแก้วแตก"
    },
    {
        "word": "breakfast",
        "partOfSpeech": "noun",
        "translation": "อาหารเช้า",
        "definition": "",
        "example": "What did you have for breakfast?",
        "exampleTranslation": "คุณกินอะไรเป็นอาหารเช้า?"
    },
    {
        "word": "breast",
        "partOfSpeech": "noun",
        "translation": "เต้านม",
        "definition": "",
        "example": "The baby is drinking breast milk.",
        "exampleTranslation": "ทารกกำลังดื่มนมแม่"
    },
    {
        "word": "breath",
        "partOfSpeech": "noun",
        "translation": "ลมหายใจ",
        "definition": "",
        "example": "Take a deep breath.",
        "exampleTranslation": "สูดลมหายใจเข้าลึกๆ"
    },
    {
        "word": "breathe",
        "partOfSpeech": "noun",
        "translation": "หายใจ",
        "definition": "",
        "example": "I can hardly breathe.",
        "exampleTranslation": "ฉันแทบจะหายใจไม่ออก"
    },
    {
        "word": "breathing",
        "partOfSpeech": "noun",
        "translation": "การหายใจ",
        "definition": "",
        "example": "His breathing was slow and steady.",
        "exampleTranslation": "การหายใจของเขาช้าและสม่ำเสมอ"
    },
    {
        "word": "breed",
        "partOfSpeech": "noun",
        "translation": "สายพันธุ์",
        "definition": "",
        "example": "What breed is your dog?",
        "exampleTranslation": "สุนัขของคุณเป็นสายพันธุ์อะไร?"
    },
    {
        "word": "brick",
        "partOfSpeech": "noun",
        "translation": "อิฐ",
        "definition": "",
        "example": "The house is made of red brick.",
        "exampleTranslation": "บ้านหลังนี้สร้างด้วยอิฐสีแดง"
    },
    {
        "word": "bridge",
        "partOfSpeech": "noun",
        "translation": "สะพาน",
        "definition": "",
        "example": "We crossed the bridge.",
        "exampleTranslation": "พวกเราข้ามสะพาน"
    },
    {
        "word": "brief",
        "partOfSpeech": "noun",
        "translation": "สั้น ชั่วคราว รวบรัด",
        "definition": "",
        "example": "We had a brief meeting.",
        "exampleTranslation": "พวกเรามีการประชุมสั้นๆ"
    },
    {
        "word": "briefly",
        "partOfSpeech": "noun",
        "translation": "ชั่วครู่ ในเวลาสั้นๆ",
        "definition": "",
        "example": "He spoke briefly about the plan.",
        "exampleTranslation": "เขาพูดสั้นๆ เกี่ยวกับแผนการ"
    },
    {
        "word": "bright",
        "partOfSpeech": "noun",
        "translation": "สว่าง สดใส",
        "definition": "",
        "example": "The sun is very bright today.",
        "exampleTranslation": "วันนี้แดดแรงมาก"
    },
    {
        "word": "brilliant",
        "partOfSpeech": "noun",
        "translation": "สุกใส โชติช่วง ฉลาดมาก",
        "definition": "",
        "example": "What a brilliant idea!",
        "exampleTranslation": "ช่างเป็นความคิดที่ยอดเยี่ยม!"
    },
    {
        "word": "bring",
        "partOfSpeech": "noun",
        "translation": "เอามาให้ นํามาให้ พามา",
        "definition": "",
        "example": "Please bring me a glass of water.",
        "exampleTranslation": "โปรดนำน้ำมาให้ฉันหนึ่งแก้ว"
    },
    {
        "word": "broad",
        "partOfSpeech": "adjective",
        "translation": "กว้าง",
        "definition": "",
        "example": "He has broad shoulders.",
        "exampleTranslation": "เขามีไหล่กว้าง"
    },
    {
        "word": "broadcast",
        "partOfSpeech": "noun",
        "translation": "ออกอากาศ",
        "definition": "",
        "example": "They broadcast the news every evening.",
        "exampleTranslation": "พวกเขาออกอากาศข่าวทุกเย็น"
    },
    {
        "word": "broadly",
        "partOfSpeech": "adverb",
        "translation": "อย่างกว้างขวาง",
        "definition": "",
        "example": "Broadly speaking, I agree with you.",
        "exampleTranslation": "พูดอย่างกว้างๆ ฉันเห็นด้วยกับคุณ"
    },
    {
        "word": "broken",
        "partOfSpeech": "noun",
        "translation": "เป็นชิ้นเล็กชิ้นน้อย แตกแยก",
        "definition": "",
        "example": "My phone is broken.",
        "exampleTranslation": "โทรศัพท์ของฉันเสีย"
    },
    {
        "word": "brother",
        "partOfSpeech": "noun",
        "translation": "พี่ชาย น้องชาย",
        "definition": "",
        "example": "Do you have a brother?",
        "exampleTranslation": "คุณมีพี่ชายหรือน้องชายไหม?"
    },
    {
        "word": "brown",
        "partOfSpeech": "noun",
        "translation": "สีนํ้าตาล",
        "definition": "",
        "example": "He has brown eyes.",
        "exampleTranslation": "เขามีดวงตาสีน้ำตาล"
    },
    {
        "word": "brush",
        "partOfSpeech": "noun",
        "translation": "แปรง",
        "definition": "",
        "example": "Brush your teeth every day.",
        "exampleTranslation": "แปรงฟันของคุณทุกวัน"
    },
    {
        "word": "bubble",
        "partOfSpeech": "adjective",
        "translation": "ฟองอากาศ",
        "definition": "",
        "example": "The children are blowing bubbles.",
        "exampleTranslation": "เด็กๆ กำลังเป่าฟองสบู่"
    },
    {
        "word": "budget",
        "partOfSpeech": "noun",
        "translation": "งบประมาณ",
        "definition": "",
        "example": "We have a tight budget.",
        "exampleTranslation": "พวกเรามีงบประมาณจำกัด"
    },
    {
        "word": "build",
        "partOfSpeech": "noun",
        "translation": "สร้าง",
        "definition": "",
        "example": "They will build a new house.",
        "exampleTranslation": "พวกเขาจะสร้างบ้านหลังใหม่"
    },
    {
        "word": "building",
        "partOfSpeech": "noun",
        "translation": "อาคาร",
        "definition": "",
        "example": "This building is very tall.",
        "exampleTranslation": "อาคารนี้สูงมาก"
    },
    {
        "word": "bullet",
        "partOfSpeech": "noun",
        "translation": "กระสุน",
        "definition": "",
        "example": "The police found a bullet.",
        "exampleTranslation": "ตำรวจพบกระสุนปืน"
    },
    {
        "word": "bunch",
        "partOfSpeech": "noun",
        "translation": "พวง",
        "definition": "",
        "example": "I bought a bunch of bananas.",
        "exampleTranslation": "ฉันซื้อกล้วยหนึ่งหวี"
    },
    {
        "word": "burn",
        "partOfSpeech": "noun",
        "translation": "เผาไหม้",
        "definition": "",
        "example": "Do not burn your hand.",
        "exampleTranslation": "อย่าทำมือพองไฟ"
    },
    {
        "word": "burnt",
        "partOfSpeech": "noun",
        "translation": "ซึ่งไหม้เกรียม ซึ่งถูกลวกหรือไฟไหม้บาดเจ็บ",
        "definition": "",
        "example": "The toast is burnt.",
        "exampleTranslation": "ขนมปังปิ้งไหม้แล้ว"
    },
    {
        "word": "burst",
        "partOfSpeech": "noun",
        "translation": "ระเบิด",
        "definition": "",
        "example": "The balloon burst.",
        "exampleTranslation": "ลูกโป่งแตก"
    },
    {
        "word": "bury",
        "partOfSpeech": "noun",
        "translation": "ฝัง",
        "definition": "",
        "example": "The dog will bury the bone.",
        "exampleTranslation": "สุนัขจะฝังกระดูก"
    },
    {
        "word": "bus",
        "partOfSpeech": "noun",
        "translation": "รถบัส",
        "definition": "",
        "example": "I take the bus to school.",
        "exampleTranslation": "ฉันนั่งรถบัสไปโรงเรียน"
    },
    {
        "word": "bush",
        "partOfSpeech": "noun",
        "translation": "พุ่มไม้",
        "definition": "",
        "example": "There is a bird in the bush.",
        "exampleTranslation": "มีนกอยู่ในพุ่มไม้"
    },
    {
        "word": "business",
        "partOfSpeech": "noun",
        "translation": "ธุรกิจ",
        "definition": "",
        "example": "He owns a small business.",
        "exampleTranslation": "เขาเป็นเจ้าของธุรกิจเล็กๆ"
    },
    {
        "word": "businessman",
        "partOfSpeech": "noun",
        "translation": "นักธุรกิจ",
        "definition": "",
        "example": "My father is a successful businessman.",
        "exampleTranslation": "พ่อของฉันเป็นนักธุรกิจที่ประสบความสำเร็จ"
    },
    {
        "word": "busy",
        "partOfSpeech": "adjective",
        "translation": "ยุ่ง, ไม่ว่าง",
        "definition": "",
        "example": "I am very busy today.",
        "exampleTranslation": "วันนี้ฉันยุ่งมาก"
    },
    {
        "word": "but",
        "partOfSpeech": "noun",
        "translation": "แต่",
        "definition": "",
        "example": "I like apples, but I do not like bananas.",
        "exampleTranslation": "ฉันชอบแอปเปิ้ล แต่ฉันไม่ชอบกล้วย"
    },
    {
        "word": "butter",
        "partOfSpeech": "noun",
        "translation": "เนย",
        "definition": "",
        "example": "I put butter on my bread.",
        "exampleTranslation": "ฉันทาเนยบนขนมปัง"
    },
    {
        "word": "button",
        "partOfSpeech": "noun",
        "translation": "ปุ่ม",
        "definition": "",
        "example": "Press the red button.",
        "exampleTranslation": "กดปุ่มสีแดง"
    },
    {
        "word": "buy",
        "partOfSpeech": "verb",
        "translation": "ซื้อ",
        "definition": "",
        "example": "I want to buy a new car.",
        "exampleTranslation": "ฉันต้องการซื้อรถคันใหม่"
    },
    {
        "word": "buyer",
        "partOfSpeech": "noun",
        "translation": "ผู้ซื้อ",
        "definition": "",
        "example": "We need to find a buyer for the house.",
        "exampleTranslation": "พวกเราต้องหาผู้ซื้อสำหรับบ้านหลังนี้"
    },
    {
        "word": "by",
        "partOfSpeech": "noun",
        "translation": "โดย",
        "definition": "",
        "example": "This book was written by him.",
        "exampleTranslation": "หนังสือเล่มนี้แต่งโดยเขา"
    },
    {
        "word": "bye",
        "partOfSpeech": "noun",
        "translation": "ลาก่อน",
        "definition": "",
        "example": "Bye, see you later!",
        "exampleTranslation": "ลาก่อน แล้วพบกันใหม่!"
    },
    {
        "word": "cabinet",
        "partOfSpeech": "noun",
        "translation": "คณะรัฐมนตรี, ตู้",
        "definition": "",
        "example": "Put the cups in the cabinet.",
        "exampleTranslation": "ใส่ถ้วยลงในตู้"
    },
    {
        "word": "cable",
        "partOfSpeech": "noun",
        "translation": "สายเคเบิล",
        "definition": "",
        "example": "The internet cable is disconnected.",
        "exampleTranslation": "สายเคเบิลอินเทอร์เน็ตหลุด"
    },
    {
        "word": "cake",
        "partOfSpeech": "noun",
        "translation": "เค้ก",
        "definition": "",
        "example": "Happy birthday! Here is your cake.",
        "exampleTranslation": "สุขสันต์วันเกิด! นี่คือเค้กของคุณ"
    },
    {
        "word": "calculate",
        "partOfSpeech": "noun",
        "translation": "คํานวณ",
        "definition": "",
        "example": "Can you calculate the total cost?",
        "exampleTranslation": "คุณช่วยคำนวณราคารวมได้ไหม?"
    },
    {
        "word": "calculation",
        "partOfSpeech": "noun",
        "translation": "การคํานวณ",
        "definition": "",
        "example": "My calculation was wrong.",
        "exampleTranslation": "การคำนวณของฉันผิดพลาด"
    },
    {
        "word": "call",
        "partOfSpeech": "noun",
        "translation": "โทร, เรียก",
        "definition": "",
        "example": "Please call me later.",
        "exampleTranslation": "โปรดโทรหาฉันทีหลัง"
    },
    {
        "word": "called",
        "partOfSpeech": "verb",
        "translation": "เรียกว่า",
        "definition": "",
        "example": "His dog is called Max.",
        "exampleTranslation": "สุนัขของเขาชื่อแม็กซ์"
    },
    {
        "word": "calm",
        "partOfSpeech": "noun",
        "translation": "สงบ",
        "definition": "",
        "example": "Please stay calm.",
        "exampleTranslation": "โปรดอยู่ในความสงบ"
    },
    {
        "word": "camera",
        "partOfSpeech": "noun",
        "translation": "กล้องถ่ายรูป",
        "definition": "",
        "example": "He bought a new camera.",
        "exampleTranslation": "เขาซื้อกล้องถ่ายรูปตัวใหม่"
    },
    {
        "word": "camp",
        "partOfSpeech": "noun",
        "translation": "ค่าย",
        "definition": "",
        "example": "We will set up camp here.",
        "exampleTranslation": "พวกเราจะตั้งค่ายที่นี่"
    },
    {
        "word": "campaign",
        "partOfSpeech": "noun",
        "translation": "การรณรงค์",
        "definition": "",
        "example": "The election campaign has started.",
        "exampleTranslation": "การรณรงค์หาเสียงเลือกตั้งเริ่มต้นขึ้นแล้ว"
    },
    {
        "word": "camping",
        "partOfSpeech": "verb",
        "translation": "การตั้งแคมป์",
        "definition": "",
        "example": "Let us go camping this weekend.",
        "exampleTranslation": "ไปตั้งแคมป์กันเถอะสุดสัปดาห์นี้"
    },
    {
        "word": "can",
        "partOfSpeech": "noun",
        "translation": "กระป๋อง, สามารถ",
        "definition": "",
        "example": "I can swim.",
        "exampleTranslation": "ฉันว่ายน้ำได้"
    },
    {
        "word": "cancel",
        "partOfSpeech": "noun",
        "translation": "ยกเลิก",
        "definition": "",
        "example": "I have to cancel my appointment.",
        "exampleTranslation": "ฉันต้องยกเลิกการนัดหมาย"
    },
    {
        "word": "cancer",
        "partOfSpeech": "noun",
        "translation": "มะเร็ง",
        "definition": "",
        "example": "Smoking can cause cancer.",
        "exampleTranslation": "การสูบบุหรี่สามารถทำให้เกิดโรคมะเร็งได้"
    },
    {
        "word": "candidate",
        "partOfSpeech": "noun",
        "translation": "ผู้สมัคร",
        "definition": "",
        "example": "He is a good candidate for the job.",
        "exampleTranslation": "เขาเป็นผู้สมัครที่ดีสำหรับงานนี้"
    },
    {
        "word": "candy",
        "partOfSpeech": "noun",
        "translation": "ลูกอม, ขนมหวาน",
        "definition": "",
        "example": "Do not eat too much candy.",
        "exampleTranslation": "อย่ากินลูกอมมากเกินไป"
    },
    {
        "word": "cap",
        "partOfSpeech": "noun",
        "translation": "หมวกแก๊ป, ฝา",
        "definition": "",
        "example": "Put the cap back on the bottle.",
        "exampleTranslation": "ปิดฝาขวดกลับเข้าไป"
    },
    {
        "word": "capable",
        "partOfSpeech": "adjective",
        "translation": "สามารถ, มีความสามารถ",
        "definition": "",
        "example": "She is capable of doing it alone.",
        "exampleTranslation": "เธอสามารถทำมันได้ด้วยตัวเอง"
    },
    {
        "word": "capacity",
        "partOfSpeech": "noun",
        "translation": "ความจุ, ความสามารถ",
        "definition": "",
        "example": "The stadium has a capacity of 50,000.",
        "exampleTranslation": "สนามกีฬาแห่งนี้มีความจุ 50,000 คน"
    },
    {
        "word": "capital",
        "partOfSpeech": "noun",
        "translation": "เมืองหลวง, เงินทุน",
        "definition": "",
        "example": "Bangkok is the capital of Thailand.",
        "exampleTranslation": "กรุงเทพฯ เป็นเมืองหลวงของประเทศไทย"
    },
    {
        "word": "captain",
        "partOfSpeech": "noun",
        "translation": "กัปตัน",
        "definition": "",
        "example": "He is the captain of the football team.",
        "exampleTranslation": "เขาเป็นกัปตันทีมฟุตบอล"
    },
    {
        "word": "capture",
        "partOfSpeech": "noun",
        "translation": "จับกุม, ยึด",
        "definition": "",
        "example": "The police will capture the thief.",
        "exampleTranslation": "ตำรวจจะจับกุมหัวขโมย"
    },
    {
        "word": "car",
        "partOfSpeech": "noun",
        "translation": "รถยนต์",
        "definition": "",
        "example": "I drive a red car.",
        "exampleTranslation": "ฉันขับรถสีแดง"
    },
    {
        "word": "card",
        "partOfSpeech": "noun",
        "translation": "บัตร",
        "definition": "",
        "example": "Here is my business card.",
        "exampleTranslation": "นี่คือนามบัตรของฉัน"
    },
    {
        "word": "cardboard",
        "partOfSpeech": "noun",
        "translation": "กระดาษแข็ง",
        "definition": "",
        "example": "This box is made of cardboard.",
        "exampleTranslation": "กล่องนี้ทำจากกระดาษแข็ง"
    },
    {
        "word": "care",
        "partOfSpeech": "noun",
        "translation": "การดูแล, เอาใจใส่",
        "definition": "",
        "example": "Take care of yourself.",
        "exampleTranslation": "ดูแลตัวเองด้วยนะ"
    },
    {
        "word": "career",
        "partOfSpeech": "noun",
        "translation": "อาชีพ",
        "definition": "",
        "example": "She wants a career in medicine.",
        "exampleTranslation": "เธอต้องการอาชีพด้านการแพทย์"
    },
    {
        "word": "careful",
        "partOfSpeech": "noun",
        "translation": "ระมัดระวัง",
        "definition": "",
        "example": "Be careful when you cross the road.",
        "exampleTranslation": "ระมัดระวังเมื่อข้ามถนน"
    },
    {
        "word": "careless",
        "partOfSpeech": "noun",
        "translation": "ประมาท",
        "definition": "",
        "example": "It was a careless mistake.",
        "exampleTranslation": "มันเป็นความผิดพลาดที่เกิดจากความประมาท"
    },
    {
        "word": "carpet",
        "partOfSpeech": "noun",
        "translation": "พรม",
        "definition": "",
        "example": "We bought a new carpet for the living room.",
        "exampleTranslation": "พวกเราซื้อพรมผืนใหม่สำหรับห้องนั่งเล่น"
    },
    {
        "word": "carrot",
        "partOfSpeech": "noun",
        "translation": "แครอท",
        "definition": "",
        "example": "Rabbits like to eat carrots.",
        "exampleTranslation": "กระต่ายชอบกินแครอท"
    },
    {
        "word": "carry",
        "partOfSpeech": "noun",
        "translation": "ถือ, พกพา",
        "definition": "",
        "example": "Can you carry this bag for me?",
        "exampleTranslation": "คุณช่วยถือกระเป๋าใบนี้ให้ฉันหน่อยได้ไหม?"
    },
    {
        "word": "case",
        "partOfSpeech": "noun",
        "translation": "กรณี",
        "definition": "",
        "example": "Put the glasses in the case.",
        "exampleTranslation": "ใส่แว่นตาในกล่อง"
    },
    {
        "word": "cash",
        "partOfSpeech": "noun",
        "translation": "เงินสด",
        "definition": "",
        "example": "Do you want to pay by cash or credit card?",
        "exampleTranslation": "คุณต้องการจ่ายด้วยเงินสดหรือบัตรเครดิต?"
    },
    {
        "word": "cast",
        "partOfSpeech": "noun",
        "translation": "หล่อ, ขว้าง",
        "definition": "",
        "example": "He cast a shadow on the wall.",
        "exampleTranslation": "เขาทอดเงาลงบนกำแพง"
    },
    {
        "word": "castle",
        "partOfSpeech": "noun",
        "translation": "ปราสาท",
        "definition": "",
        "example": "The king lives in a large castle.",
        "exampleTranslation": "พระราชาอาศัยอยู่ในปราสาทหลังใหญ่"
    },
    {
        "word": "cat",
        "partOfSpeech": "noun",
        "translation": "แมว",
        "definition": "",
        "example": "My cat is sleeping.",
        "exampleTranslation": "แมวของฉันกำลังนอนหลับ"
    },
    {
        "word": "catch",
        "partOfSpeech": "noun",
        "translation": "จับ",
        "definition": "",
        "example": "Try to catch the ball.",
        "exampleTranslation": "พยายามรับลูกบอลให้ได้"
    },
    {
        "word": "category",
        "partOfSpeech": "noun",
        "translation": "หมวดหมู่, ประเภท",
        "definition": "",
        "example": "This book falls into the fiction category.",
        "exampleTranslation": "หนังสือเล่มนี้จัดอยู่ในหมวดหมู่นวนิยาย"
    },
    {
        "word": "cause",
        "partOfSpeech": "noun",
        "translation": "สาเหตุ, ทำให้เกิด",
        "definition": "",
        "example": "What was the cause of the fire?",
        "exampleTranslation": "อะไรคือสาเหตุของไฟไหม้?"
    },
    {
        "word": "CD",
        "partOfSpeech": "noun",
        "translation": "แผ่นซีดี",
        "definition": "",
        "example": "I like to listen to this CD.",
        "exampleTranslation": "ฉันชอบฟังซีดีแผ่นนี้"
    },
    {
        "word": "cease",
        "partOfSpeech": "noun",
        "translation": "หยุด",
        "definition": "",
        "example": "They agreed to cease fighting.",
        "exampleTranslation": "พวกเขาตกลงที่จะหยุดต่อสู้"
    },
    {
        "word": "ceiling",
        "partOfSpeech": "noun",
        "translation": "เพดาน",
        "definition": "",
        "example": "A lamp hangs from the ceiling.",
        "exampleTranslation": "โคมไฟห้อยลงมาจากเพดาน"
    },
    {
        "word": "celebrate",
        "partOfSpeech": "noun",
        "translation": "เฉลิมฉลอง",
        "definition": "",
        "example": "We will celebrate her birthday.",
        "exampleTranslation": "พวกเราจะฉลองวันเกิดของเธอ"
    },
    {
        "word": "celebration",
        "partOfSpeech": "noun",
        "translation": "การเฉลิมฉลอง",
        "definition": "",
        "example": "The celebration lasted all night.",
        "exampleTranslation": "การเฉลิมฉลองกินเวลาตลอดทั้งคืน"
    },
    {
        "word": "cell",
        "partOfSpeech": "noun",
        "translation": "เซลล์, ห้องขัง",
        "definition": "",
        "example": "The human body has many cells.",
        "exampleTranslation": "ร่างกายมนุษย์มีเซลล์มากมาย"
    },
    {
        "word": "cell phone",
        "partOfSpeech": "noun",
        "translation": "โทรศัพท์มือถือ",
        "definition": "",
        "example": "I forgot my cell phone at home.",
        "exampleTranslation": "ฉันลืมโทรศัพท์มือถือไว้ที่บ้าน"
    },
    {
        "word": "cent",
        "partOfSpeech": "noun",
        "translation": "เซนต์",
        "definition": "",
        "example": "It costs 50 cents.",
        "exampleTranslation": "มันราคา 50 เซนต์"
    },
    {
        "word": "centimetre",
        "partOfSpeech": "noun",
        "translation": "เซนติเมตร",
        "definition": "",
        "example": "The insect is one centimetre long.",
        "exampleTranslation": "แมลงมีความยาวหนึ่งเซนติเมตร"
    },
    {
        "word": "central",
        "partOfSpeech": "adjective",
        "translation": "ส่วนกลาง",
        "definition": "",
        "example": "The park is in central London.",
        "exampleTranslation": "สวนสาธารณะอยู่ใจกลางลอนดอน"
    },
    {
        "word": "centre",
        "partOfSpeech": "noun",
        "translation": "ศูนย์กลาง",
        "definition": "",
        "example": "Please stand in the centre of the room.",
        "exampleTranslation": "โปรดยืนอยู่ตรงกลางห้อง"
    },
    {
        "word": "century",
        "partOfSpeech": "noun",
        "translation": "ศตวรรษ",
        "definition": "",
        "example": "This church was built in the 19th century.",
        "exampleTranslation": "โบสถ์นี้ถูกสร้างขึ้นในศตวรรษที่ 19"
    },
    {
        "word": "ceremony",
        "partOfSpeech": "noun",
        "translation": "พิธีการ",
        "definition": "",
        "example": "The wedding ceremony was beautiful.",
        "exampleTranslation": "พิธีแต่งงานสวยงามมาก"
    },
    {
        "word": "certain",
        "partOfSpeech": "adjective",
        "translation": "แน่นอน",
        "definition": "",
        "example": "I am certain that he will come.",
        "exampleTranslation": "ฉันแน่ใจว่าเขาจะมา"
    },
    {
        "word": "certainly",
        "partOfSpeech": "adverb",
        "translation": "อย่างแน่นอน",
        "definition": "",
        "example": "I will certainly help you.",
        "exampleTranslation": "ฉันจะช่วยคุณอย่างแน่นอน"
    },
    {
        "word": "certificate",
        "partOfSpeech": "noun",
        "translation": "ใบรับรอง, ประกาศนียบัตร",
        "definition": "",
        "example": "He received a certificate for his hard work.",
        "exampleTranslation": "เขาได้รับประกาศนียบัตรสำหรับการทำงานหนัก"
    },
    {
        "word": "chain",
        "partOfSpeech": "noun",
        "translation": "โซ่, เครือข่าย",
        "definition": "",
        "example": "She wears a gold chain around her neck.",
        "exampleTranslation": "เธอสวมสร้อยคอทองคำ"
    },
    {
        "word": "chair",
        "partOfSpeech": "noun",
        "translation": "เก้าอี้",
        "definition": "",
        "example": "Please sit on this chair.",
        "exampleTranslation": "โปรดนั่งบนเก้าอี้นี้"
    },
    {
        "word": "chairman",
        "partOfSpeech": "noun",
        "translation": "ประธาน",
        "definition": "",
        "example": "He is the chairman of the committee.",
        "exampleTranslation": "เขาเป็นประธานของคณะกรรมการ"
    },
    {
        "word": "chairwoman",
        "partOfSpeech": "noun",
        "translation": "ประธานหญิง",
        "definition": "",
        "example": "She was elected as the new chairwoman.",
        "exampleTranslation": "เธอได้รับเลือกให้เป็นประธานหญิงคนใหม่"
    },
    {
        "word": "challenge",
        "partOfSpeech": "noun",
        "translation": "ความท้าทาย",
        "definition": "",
        "example": "It is a big challenge for me.",
        "exampleTranslation": "มันเป็นความท้าทายที่ยิ่งใหญ่สำหรับฉัน"
    },
    {
        "word": "challenging",
        "partOfSpeech": "verb",
        "translation": "ท้าทาย",
        "definition": "",
        "example": "The new job is very challenging.",
        "exampleTranslation": "งานใหม่นี้ท้าทายมาก"
    },
    {
        "word": "chamber",
        "partOfSpeech": "noun",
        "translation": "ห้อง, สภา",
        "definition": "",
        "example": "The meeting was held in the council chamber.",
        "exampleTranslation": "การประชุมจัดขึ้นในห้องประชุมสภา"
    },
    {
        "word": "chance",
        "partOfSpeech": "noun",
        "translation": "โอกาส",
        "definition": "",
        "example": "Give me one more chance.",
        "exampleTranslation": "ขอโอกาสฉันอีกครั้ง"
    },
    {
        "word": "change",
        "partOfSpeech": "noun",
        "translation": "เปลี่ยนแปลง",
        "definition": "",
        "example": "I want to change my clothes.",
        "exampleTranslation": "ฉันต้องการเปลี่ยนเสื้อผ้า"
    },
    {
        "word": "channel",
        "partOfSpeech": "noun",
        "translation": "ช่อง",
        "definition": "",
        "example": "What is your favorite TV channel?",
        "exampleTranslation": "ช่องโทรทัศน์ที่คุณชื่นชอบคือช่องอะไร?"
    },
    {
        "word": "chapter",
        "partOfSpeech": "noun",
        "translation": "บท",
        "definition": "",
        "example": "Read the first chapter of the book.",
        "exampleTranslation": "อ่านบทแรกของหนังสือ"
    },
    {
        "word": "character",
        "partOfSpeech": "noun",
        "translation": "ตัวละคร, ลักษณะ",
        "definition": "",
        "example": "He is a funny character.",
        "exampleTranslation": "เขาเป็นตัวละครที่ตลก"
    },
    {
        "word": "characteristic",
        "partOfSpeech": "noun",
        "translation": "ลักษณะเฉพาะ",
        "definition": "",
        "example": "What is the main characteristic of this plant?",
        "exampleTranslation": "อะไรคือลักษณะเฉพาะที่สำคัญของพืชชนิดนี้?"
    },
    {
        "word": "charge",
        "partOfSpeech": "noun",
        "translation": "คิดราคา, ข้อหา",
        "definition": "",
        "example": "How much do you charge for this?",
        "exampleTranslation": "คุณคิดราคาสำหรับสิ่งนี้เท่าไหร่?"
    },
    {
        "word": "charity",
        "partOfSpeech": "noun",
        "translation": "การกุศล",
        "definition": "",
        "example": "She gives money to charity every month.",
        "exampleTranslation": "เธอให้เงินเพื่อการกุศลทุกเดือน"
    },
    {
        "word": "chart",
        "partOfSpeech": "noun",
        "translation": "แผนภูมิ",
        "definition": "",
        "example": "Look at this chart.",
        "exampleTranslation": "ดูที่แผนภูมินี้"
    },
    {
        "word": "chase",
        "partOfSpeech": "noun",
        "translation": "ไล่ตาม",
        "definition": "",
        "example": "The dog chased the cat.",
        "exampleTranslation": "สุนัขไล่ตามแมว"
    },
    {
        "word": "chat",
        "partOfSpeech": "noun",
        "translation": "สนทนา, คุยเล่น",
        "definition": "",
        "example": "We had a friendly chat.",
        "exampleTranslation": "พวกเรามีการพูดคุยอย่างเป็นกันเอง"
    },
    {
        "word": "cheap",
        "partOfSpeech": "noun",
        "translation": "ราคาถูก",
        "definition": "",
        "example": "These shoes are very cheap.",
        "exampleTranslation": "รองเท้าคู่นี้ราคาถูกมาก"
    },
    {
        "word": "cheat",
        "partOfSpeech": "noun",
        "translation": "โกง",
        "definition": "",
        "example": "He tried to cheat on the exam.",
        "exampleTranslation": "เขาพยายามโกงข้อสอบ"
    },
    {
        "word": "check",
        "partOfSpeech": "noun",
        "translation": "ตรวจสอบ",
        "definition": "",
        "example": "Please check your answers.",
        "exampleTranslation": "โปรดตรวจสอบคำตอบของคุณ"
    },
    {
        "word": "cheek",
        "partOfSpeech": "noun",
        "translation": "แก้ม",
        "definition": "",
        "example": "She kissed him on the cheek.",
        "exampleTranslation": "เธอจูบเขาที่แก้ม"
    },
    {
        "word": "cheerful",
        "partOfSpeech": "noun",
        "translation": "ร่าเริง",
        "definition": "",
        "example": "He is a cheerful boy.",
        "exampleTranslation": "เขาเป็นเด็กผู้ชายที่ร่าเริง"
    },
    {
        "word": "cheese",
        "partOfSpeech": "noun",
        "translation": "ชีส",
        "definition": "",
        "example": "I like to eat cheese.",
        "exampleTranslation": "ฉันชอบกินชีส"
    },
    {
        "word": "chemical",
        "partOfSpeech": "noun",
        "translation": "สารเคมี",
        "definition": "",
        "example": "This product contains dangerous chemicals.",
        "exampleTranslation": "ผลิตภัณฑ์นี้มีสารเคมีอันตราย"
    },
    {
        "word": "chemist",
        "partOfSpeech": "noun",
        "translation": "นักเคมี",
        "definition": "",
        "example": "He works as a chemist.",
        "exampleTranslation": "เขาทำงานเป็นนักเคมี"
    },
    {
        "word": "chemistry",
        "partOfSpeech": "noun",
        "translation": "เคมี",
        "definition": "",
        "example": "I study chemistry at school.",
        "exampleTranslation": "ฉันเรียนวิชาเคมีที่โรงเรียน"
    },
    {
        "word": "cheque",
        "partOfSpeech": "noun",
        "translation": "เช็ค",
        "definition": "",
        "example": "Can I pay by cheque?",
        "exampleTranslation": "ฉันสามารถจ่ายด้วยเช็คได้ไหม?"
    },
    {
        "word": "chest",
        "partOfSpeech": "noun",
        "translation": "หน้าอก, หีบ",
        "definition": "",
        "example": "He felt a pain in his chest.",
        "exampleTranslation": "เขารู้สึกเจ็บที่หน้าอก"
    },
    {
        "word": "chew",
        "partOfSpeech": "noun",
        "translation": "เคี้ยว",
        "definition": "",
        "example": "You must chew your food well.",
        "exampleTranslation": "คุณต้องเคี้ยวอาหารให้ละเอียด"
    },
    {
        "word": "chicken",
        "partOfSpeech": "noun",
        "translation": "ไก่",
        "definition": "",
        "example": "We had roast chicken for dinner.",
        "exampleTranslation": "พวกเรากินไก่อบเป็นอาหารเย็น"
    },
    {
        "word": "chief",
        "partOfSpeech": "noun",
        "translation": "หัวหน้า",
        "definition": "",
        "example": "He is the chief of police.",
        "exampleTranslation": "เขาเป็นหัวหน้าตำรวจ"
    },
    {
        "word": "child",
        "partOfSpeech": "noun",
        "translation": "เด็ก",
        "definition": "",
        "example": "The child is playing with a toy.",
        "exampleTranslation": "เด็กกำลังเล่นของเล่น"
    },
    {
        "word": "chin",
        "partOfSpeech": "noun",
        "translation": "คาง",
        "definition": "",
        "example": "He rested his chin on his hand.",
        "exampleTranslation": "เขาใช้มือเท้าคาง"
    },
    {
        "word": "chip",
        "partOfSpeech": "noun",
        "translation": "ชิป, แผ่นบาง",
        "definition": "",
        "example": "Do you want some potato chips?",
        "exampleTranslation": "คุณต้องการมันฝรั่งแผ่นทอดไหม?"
    },
    {
        "word": "chocolate",
        "partOfSpeech": "noun",
        "translation": "ช็อกโกแลต",
        "definition": "",
        "example": "I love eating chocolate.",
        "exampleTranslation": "ฉันชอบกินช็อกโกแลต"
    },
    {
        "word": "choice",
        "partOfSpeech": "noun",
        "translation": "ทางเลือก",
        "definition": "",
        "example": "It is your choice.",
        "exampleTranslation": "มันคือทางเลือกของคุณ"
    },
    {
        "word": "choose",
        "partOfSpeech": "noun",
        "translation": "เลือก",
        "definition": "",
        "example": "Which one will you choose?",
        "exampleTranslation": "คุณจะเลือกอันไหน?"
    },
    {
        "word": "chop",
        "partOfSpeech": "noun",
        "translation": "สับ",
        "definition": "",
        "example": "Chop the onions into small pieces.",
        "exampleTranslation": "สับหัวหอมให้เป็นชิ้นเล็กๆ"
    },
    {
        "word": "church",
        "partOfSpeech": "noun",
        "translation": "โบสถ์",
        "definition": "",
        "example": "We go to church on Sundays.",
        "exampleTranslation": "พวกเราไปโบสถ์ในวันอาทิตย์"
    },
    {
        "word": "cigarette",
        "partOfSpeech": "noun",
        "translation": "บุหรี่",
        "definition": "",
        "example": "He smoked a cigarette.",
        "exampleTranslation": "เขาสูบบุหรี่"
    },
    {
        "word": "cinema",
        "partOfSpeech": "noun",
        "translation": "โรงภาพยนตร์",
        "definition": "",
        "example": "We went to the cinema last night.",
        "exampleTranslation": "พวกเราไปโรงภาพยนตร์เมื่อคืนนี้"
    },
    {
        "word": "circle",
        "partOfSpeech": "noun",
        "translation": "วงกลม",
        "definition": "",
        "example": "Draw a circle on the paper.",
        "exampleTranslation": "วาดวงกลมบนกระดาษ"
    },
    {
        "word": "circumstance",
        "partOfSpeech": "noun",
        "translation": "สถานการณ์",
        "definition": "",
        "example": "I cannot accept it under any circumstance.",
        "exampleTranslation": "ฉันไม่สามารถยอมรับได้ไม่ว่าในสถานการณ์ใด"
    },
    {
        "word": "citizen",
        "partOfSpeech": "noun",
        "translation": "พลเมือง",
        "definition": "",
        "example": "He is a good citizen.",
        "exampleTranslation": "เขาเป็นพลเมืองดี"
    },
    {
        "word": "city",
        "partOfSpeech": "noun",
        "translation": "เมือง",
        "definition": "",
        "example": "Bangkok is a big city.",
        "exampleTranslation": "กรุงเทพฯ เป็นเมืองใหญ่"
    },
    {
        "word": "civil",
        "partOfSpeech": "adjective",
        "translation": "พลเรือน",
        "definition": "",
        "example": "He works as a civil engineer.",
        "exampleTranslation": "เขาทำงานเป็นวิศวกรโยธา"
    },
    {
        "word": "claim",
        "partOfSpeech": "noun",
        "translation": "เรียกร้อง, อ้าง",
        "definition": "",
        "example": "He claims that he is innocent.",
        "exampleTranslation": "เขาอ้างว่าเขาบริสุทธิ์"
    },
    {
        "word": "clap",
        "partOfSpeech": "noun",
        "translation": "ปรบมือ",
        "definition": "",
        "example": "The audience started to clap.",
        "exampleTranslation": "ผู้ชมเริ่มปรบมือ"
    },
    {
        "word": "class",
        "partOfSpeech": "noun",
        "translation": "ชั้นเรียน, ชนชั้น",
        "definition": "",
        "example": "I have an English class today.",
        "exampleTranslation": "วันนี้ฉันมีเรียนวิชาภาษาอังกฤษ"
    },
    {
        "word": "classic",
        "partOfSpeech": "adjective",
        "translation": "คลาสสิก, ยอดเยี่ยม",
        "definition": "",
        "example": "This is a classic love story.",
        "exampleTranslation": "นี่คือเรื่องราวความรักสุดคลาสสิก"
    },
    {
        "word": "classroom",
        "partOfSpeech": "noun",
        "translation": "ห้องเรียน",
        "definition": "",
        "example": "Please be quiet in the classroom.",
        "exampleTranslation": "โปรดเงียบในห้องเรียน"
    },
    {
        "word": "clean",
        "partOfSpeech": "noun",
        "translation": "สะอาด",
        "definition": "",
        "example": "Keep your room clean.",
        "exampleTranslation": "รักษาห้องของคุณให้สะอาด"
    },
    {
        "word": "clear",
        "partOfSpeech": "adjective",
        "translation": "ชัดเจน, ใส",
        "definition": "",
        "example": "The water is very clear.",
        "exampleTranslation": "น้ำใสมาก"
    },
    {
        "word": "clearly",
        "partOfSpeech": "adverb",
        "translation": "อย่างชัดเจน",
        "definition": "",
        "example": "Please speak clearly.",
        "exampleTranslation": "โปรดพูดให้ชัดเจน"
    },
    {
        "word": "clerk",
        "partOfSpeech": "noun",
        "translation": "เสมียน",
        "definition": "",
        "example": "She works as a bank clerk.",
        "exampleTranslation": "เธอทำงานเป็นพนักงานธนาคาร"
    },
    {
        "word": "clever",
        "partOfSpeech": "noun",
        "translation": "ฉลาด",
        "definition": "",
        "example": "The boy is very clever.",
        "exampleTranslation": "เด็กผู้ชายคนนี้ฉลาดมาก"
    },
    {
        "word": "click",
        "partOfSpeech": "noun",
        "translation": "คลิก",
        "definition": "",
        "example": "Click the button to start.",
        "exampleTranslation": "คลิกปุ่มเพื่อเริ่ม"
    },
    {
        "word": "client",
        "partOfSpeech": "noun",
        "translation": "ลูกค้า, ลูกความ",
        "definition": "",
        "example": "The lawyer met with his client.",
        "exampleTranslation": "ทนายความพบกับลูกความของเขา"
    },
    {
        "word": "climate",
        "partOfSpeech": "noun",
        "translation": "สภาพอากาศ, ภูมิอากาศ",
        "definition": "",
        "example": "Thailand has a warm climate.",
        "exampleTranslation": "ประเทศไทยมีสภาพอากาศที่อบอุ่น"
    },
    {
        "word": "climb",
        "partOfSpeech": "noun",
        "translation": "ปีน",
        "definition": "",
        "example": "Can you climb that tree?",
        "exampleTranslation": "คุณสามารถปีนต้นไม้นั้นได้ไหม?"
    },
    {
        "word": "climbing",
        "partOfSpeech": "verb",
        "translation": "การปีน",
        "definition": "",
        "example": "We went rock climbing.",
        "exampleTranslation": "พวกเราไปปีนหน้าผา"
    },
    {
        "word": "clock",
        "partOfSpeech": "noun",
        "translation": "นาฬิกา",
        "definition": "",
        "example": "Look at the clock.",
        "exampleTranslation": "ดูที่นาฬิกาสิ"
    },
    {
        "word": "close",
        "partOfSpeech": "adverb",
        "translation": "ปิด",
        "definition": "",
        "example": "Please close the door.",
        "exampleTranslation": "โปรดปิดประตู"
    },
    {
        "word": "closed",
        "partOfSpeech": "verb",
        "translation": "ปิดแล้ว",
        "definition": "",
        "example": "The shop is closed today.",
        "exampleTranslation": "ร้านปิดในวันนี้"
    },
    {
        "word": "closet",
        "partOfSpeech": "noun",
        "translation": "ตู้เสื้อผ้า",
        "definition": "",
        "example": "My clothes are in the closet.",
        "exampleTranslation": "เสื้อผ้าของฉันอยู่ในตู้เสื้อผ้า"
    },
    {
        "word": "cloth",
        "partOfSpeech": "noun",
        "translation": "ผ้า",
        "definition": "",
        "example": "Use a wet cloth to wipe the table.",
        "exampleTranslation": "ใช้ผ้าเปียกเช็ดโต๊ะ"
    },
    {
        "word": "clothes",
        "partOfSpeech": "noun",
        "translation": "เสื้อผ้า",
        "definition": "",
        "example": "I bought some new clothes.",
        "exampleTranslation": "ฉันซื้อเสื้อผ้าใหม่มาบ้าง"
    },
    {
        "word": "clothing",
        "partOfSpeech": "noun",
        "translation": "เสื้อผ้า",
        "definition": "",
        "example": "We need warm clothing for winter.",
        "exampleTranslation": "พวกเราต้องการเสื้อผ้าที่อบอุ่นสำหรับฤดูหนาว"
    },
    {
        "word": "cloud",
        "partOfSpeech": "noun",
        "translation": "เมฆ",
        "definition": "",
        "example": "Look at that dark cloud.",
        "exampleTranslation": "ดูเมฆสีดำก้อนนั้นสิ"
    },
    {
        "word": "club",
        "partOfSpeech": "noun",
        "translation": "สโมสร",
        "definition": "",
        "example": "He is a member of the golf club.",
        "exampleTranslation": "เขาเป็นสมาชิกของชมรมกอล์ฟ"
    },
    {
        "word": "coach",
        "partOfSpeech": "noun",
        "translation": "โค้ช",
        "definition": "",
        "example": "Our football coach is very strict.",
        "exampleTranslation": "โค้ชฟุตบอลของเราเข้มงวดมาก"
    },
    {
        "word": "coal",
        "partOfSpeech": "noun",
        "translation": "ถ่านหิน",
        "definition": "",
        "example": "They put coal in the fire.",
        "exampleTranslation": "พวกเขาใส่ถ่านหินลงในกองไฟ"
    },
    {
        "word": "coast",
        "partOfSpeech": "noun",
        "translation": "ชายฝั่ง",
        "definition": "",
        "example": "We drove along the coast.",
        "exampleTranslation": "พวกเราขับรถเลียบชายฝั่ง"
    },
    {
        "word": "coat",
        "partOfSpeech": "noun",
        "translation": "เสื้อคลุม",
        "definition": "",
        "example": "Put on your coat, it is cold.",
        "exampleTranslation": "สวมเสื้อโค้ทของคุณ อากาศมันหนาว"
    },
    {
        "word": "code",
        "partOfSpeech": "noun",
        "translation": "รหัส",
        "definition": "",
        "example": "What is the secret code?",
        "exampleTranslation": "รหัสลับคืออะไร?"
    },
    {
        "word": "coffee",
        "partOfSpeech": "noun",
        "translation": "กาแฟ",
        "definition": "",
        "example": "I drink coffee every morning.",
        "exampleTranslation": "ฉันดื่มกาแฟทุกเช้า"
    },
    {
        "word": "coin",
        "partOfSpeech": "noun",
        "translation": "เหรียญ",
        "definition": "",
        "example": "He found an old coin.",
        "exampleTranslation": "เขาพบเหรียญเก่า"
    },
    {
        "word": "cold",
        "partOfSpeech": "noun",
        "translation": "หนาว, เย็น",
        "definition": "",
        "example": "The weather is very cold today.",
        "exampleTranslation": "วันนี้อากาศหนาวมาก"
    },
    {
        "word": "coldly",
        "partOfSpeech": "adverb",
        "translation": "อย่างเย็นชา",
        "definition": "",
        "example": "She looked at him coldly.",
        "exampleTranslation": "เธอมองเขาอย่างเย็นชา"
    },
    {
        "word": "collapse",
        "partOfSpeech": "noun",
        "translation": "พังทลาย, ยุบตัว",
        "definition": "",
        "example": "The old building collapsed.",
        "exampleTranslation": "อาคารเก่าถล่มลงมา"
    },
    {
        "word": "colleague",
        "partOfSpeech": "noun",
        "translation": "เพื่อนร่วมงาน",
        "definition": "",
        "example": "He is my colleague at work.",
        "exampleTranslation": "เขาคือเพื่อนร่วมงานของฉัน"
    },
    {
        "word": "collect",
        "partOfSpeech": "noun",
        "translation": "สะสม, รวบรวม",
        "definition": "",
        "example": "I like to collect stamps.",
        "exampleTranslation": "ฉันชอบสะสมแสตมป์"
    },
    {
        "word": "collection",
        "partOfSpeech": "noun",
        "translation": "คอลเลกชัน, การสะสม",
        "definition": "",
        "example": "He has a large collection of books.",
        "exampleTranslation": "เขามีหนังสือสะสมจำนวนมาก"
    },
    {
        "word": "college",
        "partOfSpeech": "noun",
        "translation": "วิทยาลัย",
        "definition": "",
        "example": "She will go to college next year.",
        "exampleTranslation": "เธอจะเข้าเรียนในวิทยาลัยปีหน้า"
    },
    {
        "word": "colour",
        "partOfSpeech": "noun",
        "translation": "สี",
        "definition": "",
        "example": "What is your favorite colour?",
        "exampleTranslation": "สีโปรดของคุณคือสีอะไร?"
    },
    {
        "word": "coloured",
        "partOfSpeech": "verb",
        "translation": "มีสี",
        "definition": "",
        "example": "He bought a brightly coloured shirt.",
        "exampleTranslation": "เขาซื้อเสื้อที่มีสีสันสดใส"
    },
    {
        "word": "column",
        "partOfSpeech": "noun",
        "translation": "คอลัมน์, เสา",
        "definition": "",
        "example": "The building has tall columns.",
        "exampleTranslation": "อาคารมีเสาสูง"
    },
    {
        "word": "combination",
        "partOfSpeech": "noun",
        "translation": "การรวมกัน",
        "definition": "",
        "example": "It is a combination of two colors.",
        "exampleTranslation": "มันคือการผสมผสานของสองสี"
    },
    {
        "word": "combine",
        "partOfSpeech": "noun",
        "translation": "รวมกัน",
        "definition": "",
        "example": "You can combine these ingredients.",
        "exampleTranslation": "คุณสามารถผสมส่วนผสมเหล่านี้เข้าด้วยกัน"
    },
    {
        "word": "come",
        "partOfSpeech": "verb",
        "translation": "มา",
        "definition": "",
        "example": "Please come here.",
        "exampleTranslation": "โปรดมาที่นี่"
    },
    {
        "word": "comedy",
        "partOfSpeech": "noun",
        "translation": "ละครตลก",
        "definition": "",
        "example": "We watched a comedy movie.",
        "exampleTranslation": "พวกเราดูภาพยนตร์ตลก"
    },
    {
        "word": "comfort",
        "partOfSpeech": "noun",
        "translation": "ความสบาย",
        "definition": "",
        "example": "The hotel offers great comfort.",
        "exampleTranslation": "โรงแรมมีความสะดวกสบายอย่างมาก"
    },
    {
        "word": "comfortable",
        "partOfSpeech": "adjective",
        "translation": "สบาย",
        "definition": "",
        "example": "This chair is very comfortable.",
        "exampleTranslation": "เก้าอี้ตัวนี้นั่งสบายมาก"
    },
    {
        "word": "comfortably",
        "partOfSpeech": "adverb",
        "translation": "อย่างสบาย",
        "definition": "",
        "example": "They live comfortably in the country.",
        "exampleTranslation": "พวกเขาอาศัยอยู่อย่างสะดวกสบายในชนบท"
    },
    {
        "word": "command",
        "partOfSpeech": "noun",
        "translation": "คําสั่ง",
        "definition": "",
        "example": "The dog obeys every command.",
        "exampleTranslation": "สุนัขเชื่อฟังทุกคำสั่ง"
    },
    {
        "word": "comment",
        "partOfSpeech": "noun",
        "translation": "ความคิดเห็น",
        "definition": "",
        "example": "He made a comment about her dress.",
        "exampleTranslation": "เขาแสดงความคิดเห็นเกี่ยวกับชุดของเธอ"
    },
    {
        "word": "commercial",
        "partOfSpeech": "adjective",
        "translation": "เชิงพาณิชย์",
        "definition": "",
        "example": "We saw a commercial on TV.",
        "exampleTranslation": "พวกเราเห็นโฆษณาทางทีวี"
    },
    {
        "word": "commission",
        "partOfSpeech": "noun",
        "translation": "ค่าคอมมิชชั่น, คณะกรรมการ",
        "definition": "",
        "example": "He gets a commission for every sale.",
        "exampleTranslation": "เขาได้รับค่าคอมมิชชันสำหรับการขายทุกครั้ง"
    },
    {
        "word": "commit",
        "partOfSpeech": "noun",
        "translation": "กระทำ, ให้คำมั่น",
        "definition": "",
        "example": "He did not commit the crime.",
        "exampleTranslation": "เขาไม่ได้ก่ออาชญากรรม"
    },
    {
        "word": "commitment",
        "partOfSpeech": "noun",
        "translation": "ข้อผูกมัด",
        "definition": "",
        "example": "Marriage is a big commitment.",
        "exampleTranslation": "การแต่งงานคือข้อผูกมัดที่ยิ่งใหญ่"
    },
    {
        "word": "committee",
        "partOfSpeech": "noun",
        "translation": "คณะกรรมการ",
        "definition": "",
        "example": "She is on the school committee.",
        "exampleTranslation": "เธออยู่ในคณะกรรมการโรงเรียน"
    },
    {
        "word": "common",
        "partOfSpeech": "adjective",
        "translation": "ทั่วไป, ร่วมกัน",
        "definition": "",
        "example": "It is a common mistake.",
        "exampleTranslation": "มันเป็นความผิดพลาดที่พบได้ทั่วไป"
    },
    {
        "word": "commonly",
        "partOfSpeech": "adverb",
        "translation": "โดยทั่วไป",
        "definition": "",
        "example": "This word is commonly used in English.",
        "exampleTranslation": "คำนี้ใช้บ่อยในภาษาอังกฤษ"
    },
    {
        "word": "communicate",
        "partOfSpeech": "noun",
        "translation": "สื่อสาร",
        "definition": "",
        "example": "We communicate by email.",
        "exampleTranslation": "พวกเราติดต่อสื่อสารกันทางอีเมล"
    },
    {
        "word": "communication",
        "partOfSpeech": "noun",
        "translation": "การสื่อสาร",
        "definition": "",
        "example": "Good communication is important.",
        "exampleTranslation": "การสื่อสารที่ดีเป็นสิ่งสำคัญ"
    },
    {
        "word": "community",
        "partOfSpeech": "noun",
        "translation": "ชุมชน",
        "definition": "",
        "example": "We live in a friendly community.",
        "exampleTranslation": "พวกเราอาศัยอยู่ในชุมชนที่เป็นมิตร"
    },
    {
        "word": "company",
        "partOfSpeech": "noun",
        "translation": "บริษัท",
        "definition": "",
        "example": "He works for a software company.",
        "exampleTranslation": "เขาทำงานให้กับบริษัทซอฟต์แวร์"
    },
    {
        "word": "compare",
        "partOfSpeech": "noun",
        "translation": "เปรียบเทียบ",
        "definition": "",
        "example": "Do not compare yourself to others.",
        "exampleTranslation": "อย่าเปรียบเทียบตัวเองกับคนอื่น"
    },
    {
        "word": "comparison",
        "partOfSpeech": "noun",
        "translation": "การเปรียบเทียบ",
        "definition": "",
        "example": "Let us make a comparison between the two.",
        "exampleTranslation": "มาลองเปรียบเทียบระหว่างสองสิ่งนี้กัน"
    },
    {
        "word": "compete",
        "partOfSpeech": "noun",
        "translation": "แข่งขัน",
        "definition": "",
        "example": "I will compete in the race.",
        "exampleTranslation": "ฉันจะเข้าแข่งขันในการวิ่งแข่ง"
    },
    {
        "word": "competition",
        "partOfSpeech": "noun",
        "translation": "การแข่งขัน",
        "definition": "",
        "example": "She won the singing competition.",
        "exampleTranslation": "เธอชนะการแข่งขันร้องเพลง"
    },
    {
        "word": "competitive",
        "partOfSpeech": "adjective",
        "translation": "เชิงแข่งขัน",
        "definition": "",
        "example": "The housing market is very competitive.",
        "exampleTranslation": "ตลาดที่อยู่อาศัยมีการแข่งขันสูงมาก"
    },
    {
        "word": "complain",
        "partOfSpeech": "noun",
        "translation": "ร้องเรียน, บ่น",
        "definition": "",
        "example": "He always complains about the weather.",
        "exampleTranslation": "เขามักจะบ่นเรื่องสภาพอากาศเสมอ"
    },
    {
        "word": "complaint",
        "partOfSpeech": "noun",
        "translation": "ข้อร้องเรียน",
        "definition": "",
        "example": "I want to make a complaint.",
        "exampleTranslation": "ฉันต้องการแจ้งเรื่องร้องเรียน"
    },
    {
        "word": "complete",
        "partOfSpeech": "adjective",
        "translation": "สมบูรณ์",
        "definition": "",
        "example": "The project is now complete.",
        "exampleTranslation": "โครงการเสร็จสมบูรณ์แล้ว"
    },
    {
        "word": "completely",
        "partOfSpeech": "adverb",
        "translation": "อย่างสมบูรณ์, อย่างสิ้นเชิง",
        "definition": "",
        "example": "I completely forgot about it.",
        "exampleTranslation": "ฉันลืมเรื่องนั้นไปอย่างสิ้นเชิง"
    },
    {
        "word": "complex",
        "partOfSpeech": "adjective",
        "translation": "ซับซ้อน",
        "definition": "",
        "example": "It is a very complex problem.",
        "exampleTranslation": "มันเป็นปัญหาที่ซับซ้อนมาก"
    },
    {
        "word": "complicate",
        "partOfSpeech": "noun",
        "translation": "ทำให้ซับซ้อน",
        "definition": "",
        "example": "Do not complicate things.",
        "exampleTranslation": "อย่าทำให้เรื่องมันยุ่งยาก"
    },
    {
        "word": "complicated",
        "partOfSpeech": "verb",
        "translation": "ซับซ้อน",
        "definition": "",
        "example": "The rules are too complicated.",
        "exampleTranslation": "กฎระเบียบนั้นซับซ้อนเกินไป"
    },
    {
        "word": "computer",
        "partOfSpeech": "noun",
        "translation": "คอมพิวเตอร์",
        "definition": "",
        "example": "I use a computer for work.",
        "exampleTranslation": "ฉันใช้คอมพิวเตอร์ในการทำงาน"
    },
    {
        "word": "concentrate",
        "partOfSpeech": "noun",
        "translation": "มีสมาธิ",
        "definition": "",
        "example": "I cannot concentrate with all this noise.",
        "exampleTranslation": "ฉันไม่สามารถรวบรวมสมาธิได้เมื่อมีเสียงดังแบบนี้"
    },
    {
        "word": "concentration",
        "partOfSpeech": "noun",
        "translation": "ความมุ่งมั่น, สมาธิ",
        "definition": "",
        "example": "This game requires concentration.",
        "exampleTranslation": "เกมนี้ต้องใช้สมาธิ"
    },
    {
        "word": "concept",
        "partOfSpeech": "noun",
        "translation": "แนวคิด",
        "definition": "",
        "example": "I do not understand this concept.",
        "exampleTranslation": "ฉันไม่เข้าใจแนวคิดนี้"
    },
    {
        "word": "concern",
        "partOfSpeech": "noun",
        "translation": "ความกังวล",
        "definition": "",
        "example": "This is my main concern.",
        "exampleTranslation": "นี่คือสิ่งที่ฉันกังวลมากที่สุด"
    },
    {
        "word": "concerned",
        "partOfSpeech": "adjective",
        "translation": "เป็นห่วง",
        "definition": "",
        "example": "I am concerned about his health.",
        "exampleTranslation": "ฉันเป็นห่วงสุขภาพของเขา"
    },
    {
        "word": "concerning",
        "partOfSpeech": "verb",
        "translation": "เกี่ยวกับ",
        "definition": "",
        "example": "He wrote a letter concerning the new rules.",
        "exampleTranslation": "เขาเขียนจดหมายเกี่ยวกับกฎใหม่"
    },
    {
        "word": "concert",
        "partOfSpeech": "noun",
        "translation": "คอนเสิร์ต",
        "definition": "",
        "example": "We are going to a rock concert.",
        "exampleTranslation": "พวกเรากำลังจะไปดูคอนเสิร์ตร็อก"
    },
    {
        "word": "conclude",
        "partOfSpeech": "noun",
        "translation": "สรุป",
        "definition": "",
        "example": "What did you conclude from the report?",
        "exampleTranslation": "คุณสรุปอะไรจากรายงานนี้?"
    },
    {
        "word": "conclusion",
        "partOfSpeech": "noun",
        "translation": "ข้อสรุป",
        "definition": "",
        "example": "In conclusion, we need more time.",
        "exampleTranslation": "โดยสรุปแล้ว พวกเราต้องการเวลาเพิ่ม"
    },
    {
        "word": "concrete",
        "partOfSpeech": "noun",
        "translation": "คอนกรีต, รูปธรรม",
        "definition": "",
        "example": "The floor is made of concrete.",
        "exampleTranslation": "พื้นทำจากคอนกรีต"
    },
    {
        "word": "condition",
        "partOfSpeech": "noun",
        "translation": "สภาพ, เงื่อนไข",
        "definition": "",
        "example": "The car is in good condition.",
        "exampleTranslation": "รถอยู่ในสภาพดี"
    },
    {
        "word": "conduct",
        "partOfSpeech": "noun",
        "translation": "ความประพฤติ, ดำเนินการ",
        "definition": "",
        "example": "He will conduct the meeting.",
        "exampleTranslation": "เขาจะจัดการประชุม"
    },
    {
        "word": "conference",
        "partOfSpeech": "noun",
        "translation": "การประชุม",
        "definition": "",
        "example": "The conference was held in Bangkok.",
        "exampleTranslation": "การประชุมจัดขึ้นที่กรุงเทพฯ"
    },
    {
        "word": "confidence",
        "partOfSpeech": "noun",
        "translation": "ความมั่นใจ",
        "definition": "",
        "example": "She has a lot of confidence.",
        "exampleTranslation": "เธอมีความมั่นใจมาก"
    },
    {
        "word": "confident",
        "partOfSpeech": "noun",
        "translation": "มั่นใจ",
        "definition": "",
        "example": "I am confident that we will win.",
        "exampleTranslation": "ฉันมั่นใจว่าพวกเราจะชนะ"
    },
    {
        "word": "confine",
        "partOfSpeech": "noun",
        "translation": "จำกัด",
        "definition": "",
        "example": "The dog was confined to a cage.",
        "exampleTranslation": "สุนัขถูกขังอยู่ในกรง"
    },
    {
        "word": "confined",
        "partOfSpeech": "verb",
        "translation": "ถูกจำกัด",
        "definition": "",
        "example": "She is confined to a wheelchair.",
        "exampleTranslation": "เธอต้องนั่งอยู่แต่ในรถเข็น"
    },
    {
        "word": "confirm",
        "partOfSpeech": "noun",
        "translation": "ยืนยัน",
        "definition": "",
        "example": "Please confirm your booking.",
        "exampleTranslation": "โปรดยืนยันการจองของคุณ"
    },
    {
        "word": "conflict",
        "partOfSpeech": "noun",
        "translation": "ความขัดแย้ง",
        "definition": "",
        "example": "They are trying to avoid a conflict.",
        "exampleTranslation": "พวกเขากำลังพยายามหลีกเลี่ยงความขัดแย้ง"
    },
    {
        "word": "confront",
        "partOfSpeech": "noun",
        "translation": "เผชิญหน้า",
        "definition": "",
        "example": "He decided to confront his fears.",
        "exampleTranslation": "เขาตัดสินใจที่จะเผชิญหน้ากับความกลัว"
    },
    {
        "word": "confuse",
        "partOfSpeech": "noun",
        "translation": "ทำให้สับสน",
        "definition": "",
        "example": "Do not confuse him.",
        "exampleTranslation": "อย่าทำให้เขาสับสน"
    },
    {
        "word": "confused",
        "partOfSpeech": "verb",
        "translation": "รู้สึกสับสน",
        "definition": "",
        "example": "I am confused about the rules.",
        "exampleTranslation": "ฉันรู้สึกสับสนเกี่ยวกับกฎระเบียบ"
    },
    {
        "word": "confusing",
        "partOfSpeech": "verb",
        "translation": "น่าสับสน",
        "definition": "",
        "example": "The instructions are very confusing.",
        "exampleTranslation": "คำแนะนำนี้ชวนสับสนมาก"
    },
    {
        "word": "confusion",
        "partOfSpeech": "noun",
        "translation": "ความสับสน",
        "definition": "",
        "example": "There was some confusion about the date.",
        "exampleTranslation": "มีความสับสนเกี่ยวกับวันที่เล็กน้อย"
    },
    {
        "word": "congratulate",
        "partOfSpeech": "noun",
        "translation": "แสดงความยินดี",
        "definition": "",
        "example": "I want to congratulate you on your success.",
        "exampleTranslation": "ฉันต้องการแสดงความยินดีกับความสำเร็จของคุณ"
    },
    {
        "word": "congratulation",
        "partOfSpeech": "noun",
        "translation": "การแสดงความยินดี",
        "definition": "",
        "example": "Congratulations on your new job!",
        "exampleTranslation": "ขอแสดงความยินดีกับงานใหม่ของคุณ!"
    },
    {
        "word": "congress",
        "partOfSpeech": "noun",
        "translation": "รัฐสภา",
        "definition": "",
        "example": "The US Congress makes laws.",
        "exampleTranslation": "รัฐสภาสหรัฐอเมริกาเป็นผู้ออกกฎหมาย"
    },
    {
        "word": "connect",
        "partOfSpeech": "noun",
        "translation": "เชื่อมต่อ",
        "definition": "",
        "example": "Connect the cable to the computer.",
        "exampleTranslation": "เชื่อมต่อสายเคเบิลเข้ากับคอมพิวเตอร์"
    },
    {
        "word": "connected",
        "partOfSpeech": "verb",
        "translation": "เชื่อมต่อแล้ว",
        "definition": "",
        "example": "My computer is connected to the internet.",
        "exampleTranslation": "คอมพิวเตอร์ของฉันเชื่อมต่ออินเทอร์เน็ตแล้ว"
    },
    {
        "word": "connection",
        "partOfSpeech": "noun",
        "translation": "การเชื่อมต่อ, ความสัมพันธ์",
        "definition": "",
        "example": "There is a bad connection.",
        "exampleTranslation": "สัญญาณการเชื่อมต่อไม่ดี"
    },
    {
        "word": "conscious",
        "partOfSpeech": "adjective",
        "translation": "มีสติ",
        "definition": "",
        "example": "The patient is fully conscious.",
        "exampleTranslation": "ผู้ป่วยมีสติครบถ้วน"
    },
    {
        "word": "consequence",
        "partOfSpeech": "noun",
        "translation": "ผลที่ตามมา",
        "definition": "",
        "example": "You must face the consequences of your actions.",
        "exampleTranslation": "คุณต้องเผชิญกับผลที่ตามมาจากการกระทำของคุณ"
    },
    {
        "word": "conservative",
        "partOfSpeech": "adjective",
        "translation": "อนุรักษ์นิยม",
        "definition": "",
        "example": "My parents have conservative views.",
        "exampleTranslation": "พ่อแม่ของฉันมีความคิดแบบอนุรักษ์นิยม"
    },
    {
        "word": "consider",
        "partOfSpeech": "verb",
        "translation": "พิจารณา",
        "definition": "",
        "example": "We will consider your offer.",
        "exampleTranslation": "พวกเราจะพิจารณาข้อเสนอของคุณ"
    },
    {
        "word": "considerable",
        "partOfSpeech": "adjective",
        "translation": "พอสมควร, มาก",
        "definition": "",
        "example": "He has a considerable amount of money.",
        "exampleTranslation": "เขามีเงินจำนวนมากพอสมควร"
    },
    {
        "word": "considerably",
        "partOfSpeech": "adverb",
        "translation": "อย่างมาก",
        "definition": "",
        "example": "The weather is considerably colder today.",
        "exampleTranslation": "วันนี้อากาศหนาวขึ้นอย่างมาก"
    },
    {
        "word": "consideration",
        "partOfSpeech": "noun",
        "translation": "การพิจารณา",
        "definition": "",
        "example": "Your application is under consideration.",
        "exampleTranslation": "ใบสมัครของคุณกำลังอยู่ระหว่างการพิจารณา"
    },
    {
        "word": "consist",
        "partOfSpeech": "noun",
        "translation": "ประกอบด้วย",
        "definition": "",
        "example": "The team consists of five players.",
        "exampleTranslation": "ทีมประกอบด้วยผู้เล่นห้าคน"
    },
    {
        "word": "constant",
        "partOfSpeech": "adjective",
        "translation": "คงที่",
        "definition": "",
        "example": "The machine makes a constant noise.",
        "exampleTranslation": "เครื่องจักรส่งเสียงดังอย่างสม่ำเสมอ"
    },
    {
        "word": "constantly",
        "partOfSpeech": "adverb",
        "translation": "อย่างต่อเนื่อง",
        "definition": "",
        "example": "She is constantly complaining.",
        "exampleTranslation": "เธอบ่นอยู่อย่างต่อเนื่อง"
    },
    {
        "word": "construct",
        "partOfSpeech": "noun",
        "translation": "สร้าง",
        "definition": "",
        "example": "They will construct a new bridge here.",
        "exampleTranslation": "พวกเขาจะสร้างสะพานใหม่ที่นี่"
    },
    {
        "word": "construction",
        "partOfSpeech": "noun",
        "translation": "การก่อสร้าง",
        "definition": "",
        "example": "The building is under construction.",
        "exampleTranslation": "อาคารนี้กำลังอยู่ระหว่างการก่อสร้าง"
    },
    {
        "word": "consult",
        "partOfSpeech": "noun",
        "translation": "ปรึกษา หารือกับ ขอความเห็นจาก",
        "definition": "",
        "example": "You should consult a doctor.",
        "exampleTranslation": "คุณควรปรึกษาแพทย์"
    },
    {
        "word": "consumer",
        "partOfSpeech": "noun",
        "translation": "ผู้บริโภค",
        "definition": "",
        "example": "Consumer prices have increased.",
        "exampleTranslation": "ราคาสินค้าอุปโภคบริโภคเพิ่มขึ้น"
    },
    {
        "word": "contact",
        "partOfSpeech": "noun",
        "translation": "การติดต่อ",
        "definition": "",
        "example": "Please contact me if you need help.",
        "exampleTranslation": "โปรดติดต่อฉันหากคุณต้องการความช่วยเหลือ"
    },
    {
        "word": "contain",
        "partOfSpeech": "noun",
        "translation": "บรรจุ",
        "definition": "",
        "example": "This box contains old books.",
        "exampleTranslation": "กล่องใบนี้บรรจุหนังสือเก่า"
    },
    {
        "word": "container",
        "partOfSpeech": "noun",
        "translation": "ตู้บรรจุสินค้า",
        "definition": "",
        "example": "Put the food in a plastic container.",
        "exampleTranslation": "ใส่อาหารลงในภาชนะพลาสติก"
    },
    {
        "word": "contemporary",
        "partOfSpeech": "adjective",
        "translation": "มีลักษณะหรือเป็นของยุคปัจจุบัน ร่วมสมัย",
        "definition": "",
        "example": "She likes contemporary art.",
        "exampleTranslation": "เธอชอบศิลปะร่วมสมัย"
    },
    {
        "word": "content",
        "partOfSpeech": "noun",
        "translation": "เนื้อหา",
        "definition": "",
        "example": "Show me the contents of your bag.",
        "exampleTranslation": "ให้ฉันดูของที่อยู่ในกระเป๋าของคุณสิ"
    },
    {
        "word": "contest",
        "partOfSpeech": "noun",
        "translation": "การแข่งขัน การต่อสู้",
        "definition": "",
        "example": "She won a beauty contest.",
        "exampleTranslation": "เธอชนะการประกวดความงาม"
    },
    {
        "word": "context",
        "partOfSpeech": "noun",
        "translation": "บริบท",
        "definition": "",
        "example": "You have to guess the meaning from the context.",
        "exampleTranslation": "คุณต้องเดาความหมายจากบริบท"
    },
    {
        "word": "continent",
        "partOfSpeech": "noun",
        "translation": "ทวีป",
        "definition": "",
        "example": "Asia is the largest continent.",
        "exampleTranslation": "เอเชียเป็นทวีปที่ใหญ่ที่สุด"
    },
    {
        "word": "continue",
        "partOfSpeech": "noun",
        "translation": "ต่อเนื่อง",
        "definition": "",
        "example": "We will continue our journey tomorrow.",
        "exampleTranslation": "พวกเราจะเดินทางต่อไปในวันพรุ่งนี้"
    },
    {
        "word": "continuous",
        "partOfSpeech": "adjective",
        "translation": "อย่างต่อเนื่อง",
        "definition": "",
        "example": "The rain was continuous for two days.",
        "exampleTranslation": "ฝนตกอย่างต่อเนื่องเป็นเวลาสองวัน"
    },
    {
        "word": "contract",
        "partOfSpeech": "noun",
        "translation": "สัญญา",
        "definition": "",
        "example": "He signed a new contract.",
        "exampleTranslation": "เขาเซ็นสัญญาฉบับใหม่"
    },
    {
        "word": "contrast",
        "partOfSpeech": "noun",
        "translation": "ตัดกัน แตกต่างกัน",
        "definition": "",
        "example": "There is a big contrast between the two.",
        "exampleTranslation": "มีความแตกต่างอย่างมากระหว่างสองสิ่งนี้"
    },
    {
        "word": "contribute",
        "partOfSpeech": "noun",
        "translation": "มีส่วนช่วยเหลือ",
        "definition": "",
        "example": "Everyone should contribute to the discussion.",
        "exampleTranslation": "ทุกคนควรมีส่วนร่วมในการแสดงความคิดเห็น"
    },
    {
        "word": "contribution",
        "partOfSpeech": "noun",
        "translation": "การมีส่วนช่วยเหลือ",
        "definition": "",
        "example": "He made a large contribution to charity.",
        "exampleTranslation": "เขาบริจาคเงินจำนวนมากเพื่อการกุศล"
    },
    {
        "word": "control",
        "partOfSpeech": "noun",
        "translation": "ควบคุม",
        "definition": "",
        "example": "He lost control of the car.",
        "exampleTranslation": "เขาสูญเสียการควบคุมรถ"
    },
    {
        "word": "controlled",
        "partOfSpeech": "verb",
        "translation": "ซึ่งถูกควบคุม ซึ่งมีทักษะ",
        "definition": "",
        "example": "The fire is now controlled.",
        "exampleTranslation": "ตอนนี้สามารถควบคุมไฟได้แล้ว"
    },
    {
        "word": "convenient",
        "partOfSpeech": "noun",
        "translation": "สะดวก",
        "definition": "",
        "example": "The hotel is in a convenient location.",
        "exampleTranslation": "โรงแรมตั้งอยู่ในทำเลที่สะดวกสบาย"
    },
    {
        "word": "convention",
        "partOfSpeech": "noun",
        "translation": "การประชุม จารีตประเพณี ธรรมเนียมปฎิบัติ",
        "definition": "",
        "example": "They held a convention in the city.",
        "exampleTranslation": "พวกเขาจัดการประชุมใหญ่ในเมือง"
    },
    {
        "word": "conventional",
        "partOfSpeech": "adjective",
        "translation": "ตามธรรมเนียมปฎิบัติหรือประเพณีนิยม",
        "definition": "",
        "example": "He uses conventional methods.",
        "exampleTranslation": "เขาใช้วิธีการแบบดั้งเดิม"
    },
    {
        "word": "conversation",
        "partOfSpeech": "noun",
        "translation": "การสนทนา",
        "definition": "",
        "example": "We had an interesting conversation.",
        "exampleTranslation": "พวกเรามีการสนทนาที่น่าสนใจ"
    },
    {
        "word": "convert",
        "partOfSpeech": "noun",
        "translation": "เปลี่ยนแปลง เปลี่ยนศาสนา",
        "definition": "",
        "example": "We need to convert dollars into euros.",
        "exampleTranslation": "พวกเราต้องแปลงดอลลาร์เป็นยูโร"
    },
    {
        "word": "convince",
        "partOfSpeech": "noun",
        "translation": "โน้มน้าว ทําให้เชื่อ",
        "definition": "",
        "example": "He tried to convince me to go.",
        "exampleTranslation": "เขาพยายามโน้มน้าวให้ฉันไป"
    },
    {
        "word": "cook",
        "partOfSpeech": "noun",
        "translation": "ทําอาหาร",
        "definition": "",
        "example": "My mother is a good cook.",
        "exampleTranslation": "แม่ของฉันเป็นแม่ครัวที่ดี"
    },
    {
        "word": "cooker",
        "partOfSpeech": "noun",
        "translation": "หม้อหุงข้าว",
        "definition": "",
        "example": "We bought a new electric cooker.",
        "exampleTranslation": "พวกเราซื้อเตาไฟฟ้าใหม่"
    },
    {
        "word": "cookie",
        "partOfSpeech": "noun",
        "translation": "ขนมคุกกี้",
        "definition": "",
        "example": "I baked some chocolate cookies.",
        "exampleTranslation": "ฉันอบคุกกี้ช็อกโกแลต"
    },
    {
        "word": "cooking",
        "partOfSpeech": "noun",
        "translation": "การทําอาหาร",
        "definition": "",
        "example": "I enjoy cooking for my family.",
        "exampleTranslation": "ฉันสนุกกับการทำอาหารให้ครอบครัว"
    },
    {
        "word": "cool",
        "partOfSpeech": "noun",
        "translation": "เฉยเมย, ไม่ตื่นเต้น",
        "definition": "",
        "example": "The weather is cool today.",
        "exampleTranslation": "วันนี้อากาศเย็นสบาย"
    },
    {
        "word": "cope",
        "partOfSpeech": "noun",
        "translation": "รับมือ จัดการ",
        "definition": "",
        "example": "How do you cope with stress?",
        "exampleTranslation": "คุณรับมือกับความเครียดอย่างไร?"
    },
    {
        "word": "copy",
        "partOfSpeech": "noun",
        "translation": "คัดลอก, สําเนา",
        "definition": "",
        "example": "Can you make a copy of this document?",
        "exampleTranslation": "คุณช่วยทำสำเนาเอกสารนี้ได้ไหม?"
    },
    {
        "word": "core",
        "partOfSpeech": "noun",
        "translation": "แก่นแท้ แกน",
        "definition": "",
        "example": "The Earth has a hot core.",
        "exampleTranslation": "โลกมีแกนกลางที่ร้อน"
    },
    {
        "word": "corner",
        "partOfSpeech": "noun",
        "translation": "มุม",
        "definition": "",
        "example": "The shop is at the corner of the street.",
        "exampleTranslation": "ร้านค้าตั้งอยู่ตรงหัวมุมถนน"
    },
    {
        "word": "correct",
        "partOfSpeech": "noun",
        "translation": "แก้ไขให้ถูกต้อง ถูกต้อง",
        "definition": "",
        "example": "Your answer is correct.",
        "exampleTranslation": "คำตอบของคุณถูกต้อง"
    },
    {
        "word": "cost",
        "partOfSpeech": "noun",
        "translation": "ต้นทุน ค่าใช้จ่าย",
        "definition": "",
        "example": "How much does it cost?",
        "exampleTranslation": "มันราคาเท่าไหร่?"
    },
    {
        "word": "cottage",
        "partOfSpeech": "noun",
        "translation": "กระท่อม",
        "definition": "",
        "example": "They live in a small cottage in the woods.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในกระท่อมเล็กๆ ในป่า"
    },
    {
        "word": "cotton",
        "partOfSpeech": "noun",
        "translation": "ฝ้าย ใยฝ้าย",
        "definition": "",
        "example": "This shirt is made of 100% cotton.",
        "exampleTranslation": "เสื้อตัวนี้ทำจากผ้าฝ้าย 100%"
    },
    {
        "word": "cough",
        "partOfSpeech": "noun",
        "translation": "ไอ",
        "definition": "",
        "example": "He has a bad cough.",
        "exampleTranslation": "เขามีอาการไออย่างหนัก"
    },
    {
        "word": "could",
        "partOfSpeech": "noun",
        "translation": "สามารถ (กริยาช่อง 2 ของ )",
        "definition": "",
        "example": "Could you please help me?",
        "exampleTranslation": "คุณช่วยฉันหน่อยได้ไหม?"
    },
    {
        "word": "council",
        "partOfSpeech": "noun",
        "translation": "สภา",
        "definition": "",
        "example": "He is a member of the city council.",
        "exampleTranslation": "เขาเป็นสมาชิกสภาเมือง"
    },
    {
        "word": "count",
        "partOfSpeech": "noun",
        "translation": "นับ",
        "definition": "",
        "example": "Can you count to ten?",
        "exampleTranslation": "คุณนับหนึ่งถึงสิบได้ไหม?"
    },
    {
        "word": "counter",
        "partOfSpeech": "noun",
        "translation": "โต๊ะเคาน์เตอร์",
        "definition": "",
        "example": "Please pay at the counter.",
        "exampleTranslation": "โปรดชำระเงินที่เคาน์เตอร์"
    },
    {
        "word": "country",
        "partOfSpeech": "noun",
        "translation": "ประเทศ",
        "definition": "",
        "example": "Which country are you from?",
        "exampleTranslation": "คุณมาจากประเทศอะไร?"
    },
    {
        "word": "countryside",
        "partOfSpeech": "noun",
        "translation": "ส่วนที่เป็นชนบท",
        "definition": "",
        "example": "I love the quiet countryside.",
        "exampleTranslation": "ฉันรักชนบทที่เงียบสงบ"
    },
    {
        "word": "county",
        "partOfSpeech": "noun",
        "translation": "เขต มณฑล",
        "definition": "",
        "example": "He lives in the next county.",
        "exampleTranslation": "เขาอาศัยอยู่ในเทศมณฑลถัดไป"
    },
    {
        "word": "couple",
        "partOfSpeech": "noun",
        "translation": "คู่, สอง",
        "definition": "",
        "example": "I saw a married couple walking in the park.",
        "exampleTranslation": "ฉันเห็นคู่แต่งงานเดินเล่นอยู่ในสวนสาธารณะ"
    },
    {
        "word": "courage",
        "partOfSpeech": "noun",
        "translation": "ความกล้าหาญ",
        "definition": "",
        "example": "It takes courage to speak the truth.",
        "exampleTranslation": "ต้องใช้ความกล้าหาญในการพูดความจริง"
    },
    {
        "word": "course",
        "partOfSpeech": "noun",
        "translation": "หลักสูตร",
        "definition": "",
        "example": "I am taking an English course.",
        "exampleTranslation": "ฉันกำลังเรียนหลักสูตรภาษาอังกฤษ"
    },
    {
        "word": "court",
        "partOfSpeech": "noun",
        "translation": "ศาล",
        "definition": "",
        "example": "The thief was brought to court.",
        "exampleTranslation": "หัวขโมยถูกนำตัวขึ้นศาล"
    },
    {
        "word": "cousin",
        "partOfSpeech": "noun",
        "translation": "ลูกพี่ลูกน้อง",
        "definition": "",
        "example": "My cousin is visiting me today.",
        "exampleTranslation": "ลูกพี่ลูกน้องของฉันมาเยี่ยมฉันวันนี้"
    },
    {
        "word": "cover",
        "partOfSpeech": "noun",
        "translation": "ปก, คลุม",
        "definition": "",
        "example": "Cover the food with a plate.",
        "exampleTranslation": "ปิดอาหารด้วยจาน"
    },
    {
        "word": "covered",
        "partOfSpeech": "verb",
        "translation": "รู้สึกคลุมหน้าไว้",
        "definition": "",
        "example": "The ground is covered with snow.",
        "exampleTranslation": "พื้นดินถูกปกคลุมไปด้วยหิมะ"
    },
    {
        "word": "covering",
        "partOfSpeech": "verb",
        "translation": "สิ่งที่ปกคลุม สิ่งคุ้มกัน",
        "definition": "",
        "example": "She used a blanket as a covering.",
        "exampleTranslation": "เธอใช้ผ้าห่มเป็นสิ่งปกคลุม"
    },
    {
        "word": "cow",
        "partOfSpeech": "noun",
        "translation": "วัวตัวเมีย แม่วัว",
        "definition": "",
        "example": "The cow is eating grass.",
        "exampleTranslation": "วัวกำลังกินหญ้า"
    },
    {
        "word": "crack",
        "partOfSpeech": "noun",
        "translation": "ร้าว",
        "definition": "",
        "example": "There is a crack in the wall.",
        "exampleTranslation": "มีรอยร้าวบนกำแพง"
    },
    {
        "word": "cracked",
        "partOfSpeech": "verb",
        "translation": "แตก เป็นรอยแตก",
        "definition": "",
        "example": "The glass is cracked.",
        "exampleTranslation": "แก้วมีรอยร้าว"
    },
    {
        "word": "craft",
        "partOfSpeech": "noun",
        "translation": "ฝีมือทางช่าง, เรือ",
        "definition": "",
        "example": "She likes making paper crafts.",
        "exampleTranslation": "เธอชอบทำงานฝีมือจากกระดาษ"
    },
    {
        "word": "crash",
        "partOfSpeech": "noun",
        "translation": "ชน",
        "definition": "",
        "example": "The car was in a bad crash.",
        "exampleTranslation": "รถยนต์ประสบอุบัติเหตุชนกันอย่างรุนแรง"
    },
    {
        "word": "crazy",
        "partOfSpeech": "noun",
        "translation": "คลั่งไคล้",
        "definition": "",
        "example": "Are you crazy?",
        "exampleTranslation": "คุณบ้าไปแล้วหรอ?"
    },
    {
        "word": "cream",
        "partOfSpeech": "noun",
        "translation": "ครีม",
        "definition": "",
        "example": "I like ice cream.",
        "exampleTranslation": "ฉันชอบไอศกรีม"
    },
    {
        "word": "create",
        "partOfSpeech": "noun",
        "translation": "สร้าง สร้างสรรค์",
        "definition": "",
        "example": "We want to create a new app.",
        "exampleTranslation": "พวกเราต้องการสร้างแอปพลิเคชันใหม่"
    },
    {
        "word": "creature",
        "partOfSpeech": "noun",
        "translation": "สัตว์โลก",
        "definition": "",
        "example": "The octopus is a sea creature.",
        "exampleTranslation": "ปลาหมึกยักษ์เป็นสัตว์ทะเล"
    },
    {
        "word": "credit",
        "partOfSpeech": "noun",
        "translation": "ความเชื่อถือ ความเชื่อถือ",
        "definition": "",
        "example": "Can I pay by credit card?",
        "exampleTranslation": "ฉันจ่ายด้วยบัตรเครดิตได้ไหม?"
    },
    {
        "word": "credit card",
        "partOfSpeech": "noun",
        "translation": "บัตรเครดิต",
        "definition": "",
        "example": "I left my credit card at home.",
        "exampleTranslation": "ฉันลืมบัตรเครดิตไว้ที่บ้าน"
    },
    {
        "word": "crime",
        "partOfSpeech": "noun",
        "translation": "อาชญากรรม",
        "definition": "",
        "example": "He committed a serious crime.",
        "exampleTranslation": "เขาก่ออาชญากรรมร้ายแรง"
    },
    {
        "word": "criminal",
        "partOfSpeech": "adjective",
        "translation": "อาชญากร",
        "definition": "",
        "example": "The police caught the criminal.",
        "exampleTranslation": "ตำรวจจับคนร้ายได้"
    },
    {
        "word": "crisis",
        "partOfSpeech": "noun",
        "translation": "ภาวะวิกฤติ",
        "definition": "",
        "example": "The country is facing an economic crisis.",
        "exampleTranslation": "ประเทศกำลังเผชิญกับวิกฤตเศรษฐกิจ"
    },
    {
        "word": "crisp",
        "partOfSpeech": "noun",
        "translation": "เปราะ, กรอบ",
        "definition": "",
        "example": "I love eating potato crisps.",
        "exampleTranslation": "ฉันชอบกินมันฝรั่งทอดกรอบ"
    },
    {
        "word": "criterion",
        "partOfSpeech": "noun",
        "translation": "เกณฑ์ บรรทัดฐาน",
        "definition": "",
        "example": "What is the main criterion for this job?",
        "exampleTranslation": "อะไรคือเกณฑ์หลักสำหรับงานนี้?"
    },
    {
        "word": "critical",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับการวิจารณ์ เกี่ยวกับวิกฤติกาล",
        "definition": "",
        "example": "The patient is in a critical condition.",
        "exampleTranslation": "ผู้ป่วยอยู่ในอาการวิกฤต"
    },
    {
        "word": "criticism",
        "partOfSpeech": "noun",
        "translation": "การวิจารณ์ การติเตียน",
        "definition": "",
        "example": "He cannot accept criticism.",
        "exampleTranslation": "เขาไม่สามารถยอมรับคำวิจารณ์ได้"
    },
    {
        "word": "criticize",
        "partOfSpeech": "verb",
        "translation": "วิจารณ์ จับผิด",
        "definition": "",
        "example": "Do not criticize him all the time.",
        "exampleTranslation": "อย่าวิจารณ์เขาตลอดเวลา"
    },
    {
        "word": "crop",
        "partOfSpeech": "noun",
        "translation": "พืชผล ธัญพืช",
        "definition": "",
        "example": "The farmers lost their crops.",
        "exampleTranslation": "ชาวนาสูญเสียผลผลิต"
    },
    {
        "word": "cross",
        "partOfSpeech": "noun",
        "translation": "เครื่องหมายกากบาท",
        "definition": "",
        "example": "Be careful when you cross the street.",
        "exampleTranslation": "ระมัดระวังเมื่อคุณข้ามถนน"
    },
    {
        "word": "crowd",
        "partOfSpeech": "noun",
        "translation": "ฝูงชน",
        "definition": "",
        "example": "There was a large crowd at the concert.",
        "exampleTranslation": "มีฝูงชนจำนวนมากที่คอนเสิร์ต"
    },
    {
        "word": "crowded",
        "partOfSpeech": "verb",
        "translation": "อัดจนเต็ม เบียดเสียดยัดเยียด",
        "definition": "",
        "example": "The train was very crowded.",
        "exampleTranslation": "รถไฟแน่นมาก"
    },
    {
        "word": "crown",
        "partOfSpeech": "noun",
        "translation": "มงกุฎ",
        "definition": "",
        "example": "The king wears a golden crown.",
        "exampleTranslation": "พระราชาสวมมงกุฎทองคำ"
    },
    {
        "word": "crucial",
        "partOfSpeech": "adjective",
        "translation": "สําคัญ, จําเป็น",
        "definition": "",
        "example": "This is a crucial decision.",
        "exampleTranslation": "นี่เป็นการตัดสินใจที่สำคัญมาก"
    },
    {
        "word": "cruel",
        "partOfSpeech": "noun",
        "translation": "โหดร้าย",
        "definition": "",
        "example": "It is cruel to hit animals.",
        "exampleTranslation": "การตีสัตว์เป็นการกระทำที่โหดร้าย"
    },
    {
        "word": "crush",
        "partOfSpeech": "noun",
        "translation": "ขยี้",
        "definition": "",
        "example": "Do not crush the box.",
        "exampleTranslation": "อย่าบีบกล่องจนแบน"
    },
    {
        "word": "cry",
        "partOfSpeech": "noun",
        "translation": "ร้องไห้",
        "definition": "",
        "example": "The baby began to cry.",
        "exampleTranslation": "ทารกเริ่มร้องไห้"
    },
    {
        "word": "cultural",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับวัฒนธรรม",
        "definition": "",
        "example": "We attended a cultural event.",
        "exampleTranslation": "พวกเราเข้าร่วมงานกิจกรรมทางวัฒนธรรม"
    },
    {
        "word": "culture",
        "partOfSpeech": "noun",
        "translation": "วัฒนธรรม",
        "definition": "",
        "example": "I love learning about Thai culture.",
        "exampleTranslation": "ฉันรักที่จะเรียนรู้เกี่ยวกับวัฒนธรรมไทย"
    },
    {
        "word": "cup",
        "partOfSpeech": "noun",
        "translation": "ถ้วย",
        "definition": "",
        "example": "Can I have a cup of tea?",
        "exampleTranslation": "ฉันขอชาสักถ้วยได้ไหม?"
    },
    {
        "word": "cupboard",
        "partOfSpeech": "noun",
        "translation": "ตู้, ตู้กับข้าว",
        "definition": "",
        "example": "Put the plates in the cupboard.",
        "exampleTranslation": "เก็บจานในตู้"
    },
    {
        "word": "curb",
        "partOfSpeech": "verb",
        "translation": "ขอบถนน, .",
        "definition": "",
        "example": "We must curb our spending.",
        "exampleTranslation": "พวกเราต้องควบคุมการใช้จ่าย"
    },
    {
        "word": "cure",
        "partOfSpeech": "noun",
        "translation": "รักษา",
        "definition": "",
        "example": "There is no cure for this disease.",
        "exampleTranslation": "ไม่มีวิธีรักษาโรคนี้"
    },
    {
        "word": "curious",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งอยากรู้อยากเห็น",
        "definition": "",
        "example": "The child is very curious.",
        "exampleTranslation": "เด็กคนนี้อยากรู้อยากเห็นมาก"
    },
    {
        "word": "curl",
        "partOfSpeech": "noun",
        "translation": "งอ, โก่ง",
        "definition": "",
        "example": "She likes to curl her hair.",
        "exampleTranslation": "เธอชอบดัดผมเป็นลอน"
    },
    {
        "word": "curly",
        "partOfSpeech": "adverb",
        "translation": "งอ, หยิก",
        "definition": "",
        "example": "She has beautiful curly hair.",
        "exampleTranslation": "เธอมีผมหยิกที่สวยงาม"
    },
    {
        "word": "current",
        "partOfSpeech": "adjective",
        "translation": "กระแสนํ้า กระแสลม",
        "definition": "",
        "example": "What is your current job?",
        "exampleTranslation": "งานปัจจุบันของคุณคืออะไร?"
    },
    {
        "word": "currently",
        "partOfSpeech": "adverb",
        "translation": "ปัจจุบัน ในเวลานี้",
        "definition": "",
        "example": "I am currently living in London.",
        "exampleTranslation": "ปัจจุบันฉันอาศัยอยู่ในลอนดอน"
    },
    {
        "word": "curtain",
        "partOfSpeech": "noun",
        "translation": "ม่าน",
        "definition": "",
        "example": "Please close the curtain.",
        "exampleTranslation": "โปรดปิดผ้าม่าน"
    },
    {
        "word": "curve",
        "partOfSpeech": "noun",
        "translation": "เส้นโค้ง",
        "definition": "",
        "example": "The road has a sharp curve.",
        "exampleTranslation": "ถนนมีทางโค้งหักศอก"
    },
    {
        "word": "curved",
        "partOfSpeech": "verb",
        "translation": "ซึ่งโค้ง",
        "definition": "",
        "example": "The building has a curved roof.",
        "exampleTranslation": "อาคารมีหลังคาโค้ง"
    },
    {
        "word": "custom",
        "partOfSpeech": "noun",
        "translation": "ธรรมเนียมปฏิบัติ",
        "definition": "",
        "example": "It is a local custom.",
        "exampleTranslation": "มันเป็นประเพณีท้องถิ่น"
    },
    {
        "word": "customer",
        "partOfSpeech": "noun",
        "translation": "ลูกค้า",
        "definition": "",
        "example": "The shop has many customers.",
        "exampleTranslation": "ร้านมีลูกค้าจำนวนมาก"
    },
    {
        "word": "customs",
        "partOfSpeech": "noun",
        "translation": "พิกัดอัตราภาษีอากร, ลูกค้า",
        "definition": "",
        "example": "We had to wait at customs for an hour.",
        "exampleTranslation": "พวกเราต้องรอที่ด่านศุลกากรเป็นเวลาหนึ่งชั่วโมง"
    },
    {
        "word": "cut",
        "partOfSpeech": "noun",
        "translation": "ตัด",
        "definition": "",
        "example": "I cut my finger with a knife.",
        "exampleTranslation": "ฉันถูกมีดบาดนิ้ว"
    },
    {
        "word": "cycle",
        "partOfSpeech": "noun",
        "translation": "วงจร",
        "definition": "",
        "example": "The water cycle is a natural process.",
        "exampleTranslation": "วัฏจักรของน้ำเป็นกระบวนการทางธรรมชาติ"
    },
    {
        "word": "cycling",
        "partOfSpeech": "noun",
        "translation": "การขี่จักรยาน",
        "definition": "",
        "example": "I go cycling every weekend.",
        "exampleTranslation": "ฉันไปปั่นจักรยานทุกสุดสัปดาห์"
    },
    {
        "word": "dad",
        "partOfSpeech": "noun",
        "translation": "คุณพ่อ",
        "definition": "",
        "example": "My dad is a teacher.",
        "exampleTranslation": "พ่อของฉันเป็นครู"
    },
    {
        "word": "daily",
        "partOfSpeech": "adjective",
        "translation": "ประจําวัน",
        "definition": "",
        "example": "I read a daily newspaper.",
        "exampleTranslation": "ฉันอ่านหนังสือพิมพ์รายวัน"
    },
    {
        "word": "damage",
        "partOfSpeech": "noun",
        "translation": "ความเสียหาย",
        "definition": "",
        "example": "The storm caused a lot of damage.",
        "exampleTranslation": "พายุทำให้เกิดความเสียหายมากมาย"
    },
    {
        "word": "damp",
        "partOfSpeech": "noun",
        "translation": "ชื้น หมาด",
        "definition": "",
        "example": "Wipe the table with a damp cloth.",
        "exampleTranslation": "เช็ดโต๊ะด้วยผ้าหมาดๆ"
    },
    {
        "word": "dance",
        "partOfSpeech": "noun",
        "translation": "การเต้นรํา",
        "definition": "",
        "example": "Would you like to dance?",
        "exampleTranslation": "คุณอยากเต้นรำไหม?"
    },
    {
        "word": "dancer",
        "partOfSpeech": "noun",
        "translation": "นักเต้นรํา",
        "definition": "",
        "example": "She is a professional dancer.",
        "exampleTranslation": "เธอเป็นนักเต้นมืออาชีพ"
    },
    {
        "word": "dancing",
        "partOfSpeech": "verb",
        "translation": "การเต้นรํา",
        "definition": "",
        "example": "I like dancing.",
        "exampleTranslation": "ฉันชอบเต้นรำ"
    },
    {
        "word": "danger",
        "partOfSpeech": "noun",
        "translation": "อันตราย",
        "definition": "",
        "example": "The sign warned of danger.",
        "exampleTranslation": "ป้ายเตือนถึงอันตราย"
    },
    {
        "word": "dangerous",
        "partOfSpeech": "adjective",
        "translation": "เป็นอันตราย",
        "definition": "",
        "example": "It is dangerous to drive fast.",
        "exampleTranslation": "การขับรถเร็วเป็นเรื่องอันตราย"
    },
    {
        "word": "dare",
        "partOfSpeech": "noun",
        "translation": "กล้า",
        "definition": "",
        "example": "I dare you to jump.",
        "exampleTranslation": "ฉันท้าให้คุณกระโดด"
    },
    {
        "word": "dark",
        "partOfSpeech": "noun",
        "translation": "ความมืด",
        "definition": "",
        "example": "It is getting dark outside.",
        "exampleTranslation": "ข้างนอกเริ่มมืดแล้ว"
    },
    {
        "word": "data",
        "partOfSpeech": "noun",
        "translation": "ข้อมูล",
        "definition": "",
        "example": "The computer stores a lot of data.",
        "exampleTranslation": "คอมพิวเตอร์เก็บข้อมูลจำนวนมาก"
    },
    {
        "word": "date",
        "partOfSpeech": "noun",
        "translation": "วันที่",
        "definition": "",
        "example": "What is the date today?",
        "exampleTranslation": "วันนี้วันที่เท่าไหร่?"
    },
    {
        "word": "daughter",
        "partOfSpeech": "noun",
        "translation": "ลูกสาว",
        "definition": "",
        "example": "They have one daughter.",
        "exampleTranslation": "พวกเขามีลูกสาวหนึ่งคน"
    },
    {
        "word": "day",
        "partOfSpeech": "noun",
        "translation": "กลางวัน วัน",
        "definition": "",
        "example": "Have a nice day!",
        "exampleTranslation": "ขอให้เป็นวันที่ดีนะ!"
    },
    {
        "word": "dead",
        "partOfSpeech": "adjective",
        "translation": "ตาย",
        "definition": "",
        "example": "The plant is dead.",
        "exampleTranslation": "ต้นไม้ตายแล้ว"
    },
    {
        "word": "deaf",
        "partOfSpeech": "noun",
        "translation": "หูหนวก, ไม่ยอมฟัง",
        "definition": "",
        "example": "He was born deaf.",
        "exampleTranslation": "เขาหูหนวกตั้งแต่เกิด"
    },
    {
        "word": "deal",
        "partOfSpeech": "noun",
        "translation": "จัดการ จัดสรร",
        "definition": "",
        "example": "We made a deal.",
        "exampleTranslation": "พวกเราทำข้อตกลงกันแล้ว"
    },
    {
        "word": "dear",
        "partOfSpeech": "noun",
        "translation": "ที่รัก",
        "definition": "",
        "example": "Happy birthday, my dear friend.",
        "exampleTranslation": "สุขสันต์วันเกิด เพื่อนรักของฉัน"
    },
    {
        "word": "death",
        "partOfSpeech": "noun",
        "translation": "ความตาย",
        "definition": "",
        "example": "The sudden death of the king shocked the nation.",
        "exampleTranslation": "การสวรรคตอย่างกะทันหันของพระราชาทำให้ทั้งประเทศตกตะลึง"
    },
    {
        "word": "debate",
        "partOfSpeech": "noun",
        "translation": "(การ)ถกเถียง อภิปราย",
        "definition": "",
        "example": "We had a long debate about politics.",
        "exampleTranslation": "พวกเรามีการโต้วาทีที่ยาวนานเรื่องการเมือง"
    },
    {
        "word": "debt",
        "partOfSpeech": "noun",
        "translation": "หนี้สิน",
        "definition": "",
        "example": "He is in deep debt.",
        "exampleTranslation": "เขามีหนี้สินท่วมตัว"
    },
    {
        "word": "decade",
        "partOfSpeech": "noun",
        "translation": "ระยะเวลา, ๑๐",
        "definition": "",
        "example": "A decade is ten years.",
        "exampleTranslation": "หนึ่งทศวรรษคือสิบปี"
    },
    {
        "word": "decay",
        "partOfSpeech": "noun",
        "translation": "ผุพัง",
        "definition": "",
        "example": "Sugar can cause tooth decay.",
        "exampleTranslation": "น้ำตาลสามารถทำให้ฟันผุได้"
    },
    {
        "word": "December",
        "partOfSpeech": "noun",
        "translation": "ธันวาคม",
        "definition": "",
        "example": "December is the last month of the year.",
        "exampleTranslation": "เดือนธันวาคมเป็นเดือนสุดท้ายของปี"
    },
    {
        "word": "decide",
        "partOfSpeech": "noun",
        "translation": "ตกลงใจ, ตัดสินใจ",
        "definition": "",
        "example": "I cannot decide what to eat.",
        "exampleTranslation": "ฉันตัดสินใจไม่ได้ว่าจะกินอะไรดี"
    },
    {
        "word": "decision",
        "partOfSpeech": "noun",
        "translation": "การตัดสินใจ",
        "definition": "",
        "example": "It was a difficult decision.",
        "exampleTranslation": "มันเป็นการตัดสินใจที่ยากลำบาก"
    },
    {
        "word": "declare",
        "partOfSpeech": "noun",
        "translation": "ประกาศ",
        "definition": "",
        "example": "They declared war.",
        "exampleTranslation": "พวกเขาประกาศสงคราม"
    },
    {
        "word": "decline",
        "partOfSpeech": "noun",
        "translation": "(การ)เอียง ลาด เสื่อมลง ปฏิเสธ บอกปัด",
        "definition": "",
        "example": "There is a decline in sales.",
        "exampleTranslation": "ยอดขายลดลง"
    },
    {
        "word": "decorate",
        "partOfSpeech": "noun",
        "translation": "ตกแต่ง",
        "definition": "",
        "example": "We will decorate the room for the party.",
        "exampleTranslation": "พวกเราจะตกแต่งห้องสำหรับงานปาร์ตี้"
    },
    {
        "word": "decoration",
        "partOfSpeech": "noun",
        "translation": "การตกแต่ง",
        "definition": "",
        "example": "The Christmas decorations are beautiful.",
        "exampleTranslation": "ของตกแต่งวันคริสต์มาสสวยงามมาก"
    },
    {
        "word": "decorative",
        "partOfSpeech": "noun",
        "translation": "ซึ่งใช้ตกแต่งหรือประดับประดา",
        "definition": "",
        "example": "These flowers are for decorative purposes.",
        "exampleTranslation": "ดอกไม้เหล่านี้มีไว้เพื่อการตกแต่ง"
    },
    {
        "word": "decrease",
        "partOfSpeech": "noun",
        "translation": "ลดลง",
        "definition": "",
        "example": "The number of students decreased.",
        "exampleTranslation": "จำนวนนักเรียนลดลง"
    },
    {
        "word": "deep",
        "partOfSpeech": "noun",
        "translation": "ลึก",
        "definition": "",
        "example": "The pool is very deep.",
        "exampleTranslation": "สระน้ำลึกมาก"
    },
    {
        "word": "deeply",
        "partOfSpeech": "noun",
        "translation": "อย่างมาก อย่างลึกซึ้ง",
        "definition": "",
        "example": "I am deeply sorry for your loss.",
        "exampleTranslation": "ฉันเสียใจอย่างสุดซึ้งต่อการสูญเสียของคุณ"
    },
    {
        "word": "defeat",
        "partOfSpeech": "noun",
        "translation": "ความพ่ายแพ้",
        "definition": "",
        "example": "Our team suffered a huge defeat.",
        "exampleTranslation": "ทีมของเราประสบความพ่ายแพ้อย่างหนัก"
    },
    {
        "word": "defence",
        "partOfSpeech": "noun",
        "translation": "การป้องกัน",
        "definition": "",
        "example": "He fought in self-defence.",
        "exampleTranslation": "เขาต่อสู้เพื่อป้องกันตัว"
    },
    {
        "word": "defend",
        "partOfSpeech": "noun",
        "translation": "ปกป้อง",
        "definition": "",
        "example": "A lawyer will defend him in court.",
        "exampleTranslation": "ทนายความจะปกป้องเขาในศาล"
    },
    {
        "word": "define",
        "partOfSpeech": "noun",
        "translation": "ให้คําจํากัดความ",
        "definition": "",
        "example": "Can you define this word?",
        "exampleTranslation": "คุณช่วยให้คำจำกัดความคำนี้ได้ไหม?"
    },
    {
        "word": "definite",
        "partOfSpeech": "noun",
        "translation": "แน่นอน, แน่ชัด",
        "definition": "",
        "example": "We need a definite answer.",
        "exampleTranslation": "พวกเราต้องการคำตอบที่ชัดเจน"
    },
    {
        "word": "definitely",
        "partOfSpeech": "adverb",
        "translation": "อย่างแน่นอน เด็ดขาด",
        "definition": "",
        "example": "I will definitely be there.",
        "exampleTranslation": "ฉันจะไปที่นั่นอย่างแน่นอน"
    },
    {
        "word": "definition",
        "partOfSpeech": "noun",
        "translation": "คําจํากัดความ",
        "definition": "",
        "example": "Look up the definition in the dictionary.",
        "exampleTranslation": "หาคำจำกัดความในพจนานุกรม"
    },
    {
        "word": "degree",
        "partOfSpeech": "noun",
        "translation": "ความแตกต่าง ระดับ ชั้น ฐานะ",
        "definition": "",
        "example": "He has a masters degree.",
        "exampleTranslation": "เขามีปริญญาโท"
    },
    {
        "word": "delay",
        "partOfSpeech": "noun",
        "translation": "ความล่าช้า",
        "definition": "",
        "example": "The flight was delayed.",
        "exampleTranslation": "เที่ยวบินล่าช้า"
    },
    {
        "word": "deliberate",
        "partOfSpeech": "noun",
        "translation": "รอบคอบ, ใคร่ครวญ",
        "definition": "",
        "example": "It was a deliberate attempt to hurt her.",
        "exampleTranslation": "มันเป็นความพยายามอย่างจงใจที่จะทำร้ายเธอ"
    },
    {
        "word": "deliberately",
        "partOfSpeech": "adverb",
        "translation": "อย่างรอบครอบ สุขุม ใคร่ครวญ",
        "definition": "",
        "example": "He deliberately broke the glass.",
        "exampleTranslation": "เขาจงใจทำแก้วแตก"
    },
    {
        "word": "delicate",
        "partOfSpeech": "noun",
        "translation": "ละเอียดอ่อน",
        "definition": "",
        "example": "This glass is very delicate.",
        "exampleTranslation": "แก้วใบนี้เปราะบางมาก"
    },
    {
        "word": "delight",
        "partOfSpeech": "noun",
        "translation": "ความยินดี",
        "definition": "",
        "example": "The gift brought her much delight.",
        "exampleTranslation": "ของขวัญนำความยินดีมาให้เธออย่างมาก"
    },
    {
        "word": "delighted",
        "partOfSpeech": "adjective",
        "translation": "ยินดีมาก สุขใจ",
        "definition": "",
        "example": "I am delighted to meet you.",
        "exampleTranslation": "ฉันยินดีมากที่ได้พบคุณ"
    },
    {
        "word": "deliver",
        "partOfSpeech": "noun",
        "translation": "นําส่ง",
        "definition": "",
        "example": "The postman delivers mail every day.",
        "exampleTranslation": "บุรุษไปรษณีย์ส่งจดหมายทุกวัน"
    },
    {
        "word": "delivery",
        "partOfSpeech": "noun",
        "translation": "การนําส่ง การกล่าวสุนทรพจน์ การคลอดบุตร",
        "definition": "",
        "example": "We offer free delivery.",
        "exampleTranslation": "พวกเรามีบริการจัดส่งฟรี"
    },
    {
        "word": "demand",
        "partOfSpeech": "noun",
        "translation": "ความต้องการ",
        "definition": "",
        "example": "There is a high demand for this product.",
        "exampleTranslation": "มีความต้องการสูงสำหรับผลิตภัณฑ์นี้"
    },
    {
        "word": "demonstrate",
        "partOfSpeech": "noun",
        "translation": "แสดง, สาธิต",
        "definition": "",
        "example": "Let me demonstrate how it works.",
        "exampleTranslation": "ให้ฉันสาธิตวิธีใช้งานให้ดู"
    },
    {
        "word": "dentist",
        "partOfSpeech": "noun",
        "translation": "หมอฟัน",
        "definition": "",
        "example": "I have an appointment with the dentist.",
        "exampleTranslation": "ฉันมีนัดกับหมอฟัน"
    },
    {
        "word": "deny",
        "partOfSpeech": "noun",
        "translation": "ปฎิเสธ ไม่ยอมรับ",
        "definition": "",
        "example": "He denied stealing the money.",
        "exampleTranslation": "เขาปฏิเสธว่าไม่ได้ขโมยเงิน"
    },
    {
        "word": "department",
        "partOfSpeech": "noun",
        "translation": "แผนก กรม",
        "definition": "",
        "example": "She works in the sales department.",
        "exampleTranslation": "เธอทำงานในแผนกขาย"
    },
    {
        "word": "departure",
        "partOfSpeech": "noun",
        "translation": "การจากไป การออกเดินทาง",
        "definition": "",
        "example": "The departure of the train is at 8 AM.",
        "exampleTranslation": "เวลารถไฟออกคือ 8 โมงเช้า"
    },
    {
        "word": "depend",
        "partOfSpeech": "noun",
        "translation": "ขึ้นอยู่กับ, เชื่อถือ",
        "definition": "",
        "example": "It depends on the weather.",
        "exampleTranslation": "มันขึ้นอยู่กับสภาพอากาศ"
    },
    {
        "word": "deposit",
        "partOfSpeech": "noun",
        "translation": "ทับถม สะสม การฝากเงิน เงินมัดจํา",
        "definition": "",
        "example": "I need to make a deposit at the bank.",
        "exampleTranslation": "ฉันต้องไปฝากเงินที่ธนาคาร"
    },
    {
        "word": "depress",
        "partOfSpeech": "noun",
        "translation": "ทําให้หดหู่ใจ ทําให้ค่าหรือระดับตํ่าลง",
        "definition": "",
        "example": "The bad news depressed him.",
        "exampleTranslation": "ข่าวร้ายทำให้เขาหดหู่"
    },
    {
        "word": "depressed",
        "partOfSpeech": "adjective",
        "translation": "หดหู่ใจ เศร้า",
        "definition": "",
        "example": "She is feeling depressed lately.",
        "exampleTranslation": "ช่วงนี้เธอรู้สึกซึมเศร้า"
    },
    {
        "word": "depressing",
        "partOfSpeech": "verb",
        "translation": "เศร้าโศก หดหู่ใจ",
        "definition": "",
        "example": "This movie is very depressing.",
        "exampleTranslation": "ภาพยนตร์เรื่องนี้น่าหดหู่มาก"
    },
    {
        "word": "depth",
        "partOfSpeech": "noun",
        "translation": "ความลึก",
        "definition": "",
        "example": "What is the depth of the pool?",
        "exampleTranslation": "ความลึกของสระน้ำคือเท่าไหร่?"
    },
    {
        "word": "derive",
        "partOfSpeech": "noun",
        "translation": "ได้มาจาก",
        "definition": "",
        "example": "Many English words are derived from Latin.",
        "exampleTranslation": "คำศัพท์ภาษาอังกฤษมากมายมีรากศัพท์มาจากภาษาละติน"
    },
    {
        "word": "describe",
        "partOfSpeech": "noun",
        "translation": "พรรณนา บรรยาย",
        "definition": "",
        "example": "Can you describe the man?",
        "exampleTranslation": "คุณช่วยบรรยายลักษณะผู้ชายคนนั้นได้ไหม?"
    },
    {
        "word": "description",
        "partOfSpeech": "noun",
        "translation": "คําอธิบาย",
        "definition": "",
        "example": "He gave a detailed description of the car.",
        "exampleTranslation": "เขาให้คำอธิบายโดยละเอียดเกี่ยวกับรถยนต์"
    },
    {
        "word": "desert",
        "partOfSpeech": "noun",
        "translation": "ทะเลทราย",
        "definition": "",
        "example": "The Sahara is a large desert.",
        "exampleTranslation": "ทะเลทรายซาฮาราเป็นทะเลทรายขนาดใหญ่"
    },
    {
        "word": "deserted",
        "partOfSpeech": "verb",
        "translation": "ซึ่งถูกทอดทิ้ง",
        "definition": "",
        "example": "The streets were deserted at night.",
        "exampleTranslation": "ท้องถนนร้างผู้คนในตอนกลางคืน"
    },
    {
        "word": "deserve",
        "partOfSpeech": "noun",
        "translation": "สมควรได้รับ",
        "definition": "",
        "example": "You deserve a break.",
        "exampleTranslation": "คุณสมควรได้รับการพักผ่อน"
    },
    {
        "word": "design",
        "partOfSpeech": "noun",
        "translation": "ออกแบบ",
        "definition": "",
        "example": "She studies fashion design.",
        "exampleTranslation": "เธอเรียนการออกแบบแฟชั่น"
    },
    {
        "word": "desire",
        "partOfSpeech": "noun",
        "translation": "ปรารถนา",
        "definition": "",
        "example": "He has a strong desire to win.",
        "exampleTranslation": "เขามีความปรารถนาอย่างแรงกล้าที่จะชนะ"
    },
    {
        "word": "desk",
        "partOfSpeech": "noun",
        "translation": "โต๊ะเขียนหนังสือ",
        "definition": "",
        "example": "Put the books on the desk.",
        "exampleTranslation": "วางหนังสือบนโต๊ะทำงาน"
    },
    {
        "word": "desperate",
        "partOfSpeech": "noun",
        "translation": "มีความต้องการอย่างมาก เข้าตาจน",
        "definition": "",
        "example": "He was desperate for money.",
        "exampleTranslation": "เขาสิ้นหวังและต้องการเงินมาก"
    },
    {
        "word": "despite",
        "partOfSpeech": "noun",
        "translation": "ถึงแม้ว่า",
        "definition": "",
        "example": "We went out despite the rain.",
        "exampleTranslation": "พวกเราออกไปข้างนอกแม้ว่าฝนจะตก"
    },
    {
        "word": "destroy",
        "partOfSpeech": "noun",
        "translation": "ทําลาย",
        "definition": "",
        "example": "The fire destroyed the building.",
        "exampleTranslation": "ไฟไหม้ทำลายอาคาร"
    },
    {
        "word": "destruction",
        "partOfSpeech": "noun",
        "translation": "การทําลาย",
        "definition": "",
        "example": "The earthquake caused widespread destruction.",
        "exampleTranslation": "แผ่นดินไหวทำให้เกิดความพินาศในวงกว้าง"
    },
    {
        "word": "detail",
        "partOfSpeech": "noun",
        "translation": "รายละเอียด",
        "definition": "",
        "example": "Please explain in detail.",
        "exampleTranslation": "โปรดอธิบายโดยละเอียด"
    },
    {
        "word": "detailed",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งมีรายละเอียดมาก",
        "definition": "",
        "example": "She gave a detailed report.",
        "exampleTranslation": "เธอให้รายงานที่ละเอียด"
    },
    {
        "word": "determination",
        "partOfSpeech": "noun",
        "translation": "การกําหนด",
        "definition": "",
        "example": "He showed great determination.",
        "exampleTranslation": "เขาแสดงให้เห็นถึงความมุ่งมั่นอย่างมาก"
    },
    {
        "word": "determine",
        "partOfSpeech": "noun",
        "translation": "กําหนด, ตัดสินใจ",
        "definition": "",
        "example": "We must determine the cause of the problem.",
        "exampleTranslation": "พวกเราต้องหาสาเหตุของปัญหา"
    },
    {
        "word": "determined",
        "partOfSpeech": "verb",
        "translation": "เด็ดเดี่ยว มุ่งมั่น",
        "definition": "",
        "example": "I am determined to succeed.",
        "exampleTranslation": "ฉันมุ่งมั่นที่จะประสบความสำเร็จ"
    },
    {
        "word": "develop",
        "partOfSpeech": "verb",
        "translation": "พัฒนา",
        "definition": "",
        "example": "Children develop quickly.",
        "exampleTranslation": "เด็กๆ มีพัฒนาการอย่างรวดเร็ว"
    },
    {
        "word": "development",
        "partOfSpeech": "noun",
        "translation": "การพัฒนา",
        "definition": "",
        "example": "The project is still in development.",
        "exampleTranslation": "โครงการนี้ยังอยู่ในระหว่างการพัฒนา"
    },
    {
        "word": "device",
        "partOfSpeech": "noun",
        "translation": "อุปกรณ์, เครื่องประดิษฐ์",
        "definition": "",
        "example": "This is a useful device.",
        "exampleTranslation": "นี่คืออุปกรณ์ที่มีประโยชน์"
    },
    {
        "word": "devote",
        "partOfSpeech": "noun",
        "translation": "อุทิศ",
        "definition": "",
        "example": "She devoted her life to helping others.",
        "exampleTranslation": "เธออุทิศชีวิตเพื่อช่วยเหลือผู้อื่น"
    },
    {
        "word": "devoted",
        "partOfSpeech": "verb",
        "translation": "มีใจจดใจจ่อ, ใส่ใจ",
        "definition": "",
        "example": "He is a devoted father.",
        "exampleTranslation": "เขาเป็นพ่อที่อุทิศตน"
    },
    {
        "word": "diagram",
        "partOfSpeech": "noun",
        "translation": "แผนภูมิ",
        "definition": "",
        "example": "Look at the diagram on page 10.",
        "exampleTranslation": "ดูแผนภาพในหน้า 10"
    },
    {
        "word": "diamond",
        "partOfSpeech": "noun",
        "translation": "เพชร",
        "definition": "",
        "example": "She wears a diamond ring.",
        "exampleTranslation": "เธอสวมแหวนเพชร"
    },
    {
        "word": "diary",
        "partOfSpeech": "adjective",
        "translation": "สมุดบันทึกเหตุการณ์ในแต่ละวัน",
        "definition": "",
        "example": "She writes in her diary every day.",
        "exampleTranslation": "เธอเขียนไดอารี่ทุกวัน"
    },
    {
        "word": "dictionary",
        "partOfSpeech": "adjective",
        "translation": "พจนานุกรม",
        "definition": "",
        "example": "Look up the word in the dictionary.",
        "exampleTranslation": "หาคำศัพท์ในพจนานุกรม"
    },
    {
        "word": "die",
        "partOfSpeech": "noun",
        "translation": "ตาย",
        "definition": "",
        "example": "The flowers will die without water.",
        "exampleTranslation": "ดอกไม้จะตายหากไม่มีน้ำ"
    },
    {
        "word": "diet",
        "partOfSpeech": "noun",
        "translation": "อาหาร อาหารพิเศษ",
        "definition": "",
        "example": "I am on a strict diet.",
        "exampleTranslation": "ฉันกำลังควบคุมอาหารอย่างเข้มงวด"
    },
    {
        "word": "difference",
        "partOfSpeech": "noun",
        "translation": "ความแตกต่าง",
        "definition": "",
        "example": "What is the difference between these two?",
        "exampleTranslation": "อะไรคือความแตกต่างระหว่างสองสิ่งนี้?"
    },
    {
        "word": "different",
        "partOfSpeech": "adjective",
        "translation": "ที่แตกต่างกัน",
        "definition": "",
        "example": "They have different opinions.",
        "exampleTranslation": "พวกเขามีความคิดเห็นที่แตกต่างกัน"
    },
    {
        "word": "difficult",
        "partOfSpeech": "adjective",
        "translation": "ยาก",
        "definition": "",
        "example": "This test is very difficult.",
        "exampleTranslation": "ข้อสอบนี้ยากมาก"
    },
    {
        "word": "difficulty",
        "partOfSpeech": "noun",
        "translation": "ความยาก",
        "definition": "",
        "example": "He had difficulty breathing.",
        "exampleTranslation": "เขามีปัญหาในการหายใจ"
    },
    {
        "word": "dig",
        "partOfSpeech": "noun",
        "translation": "ขุด",
        "definition": "",
        "example": "The dog likes to dig holes in the yard.",
        "exampleTranslation": "สุนัขชอบขุดหลุมในสวน"
    },
    {
        "word": "dinner",
        "partOfSpeech": "noun",
        "translation": "อาหารคํ่า",
        "definition": "",
        "example": "What is for dinner tonight?",
        "exampleTranslation": "คืนนี้มีอะไรกินเป็นอาหารเย็น?"
    },
    {
        "word": "direct",
        "partOfSpeech": "adjective",
        "translation": "โดยตรงชี้ทาง ชี้แนว แนะแนว ควบคุม อํานวยการ",
        "definition": "",
        "example": "Is there a direct flight to London?",
        "exampleTranslation": "มีเที่ยวบินตรงไปลอนดอนไหม?"
    },
    {
        "word": "direction",
        "partOfSpeech": "noun",
        "translation": "ทิศทาง",
        "definition": "",
        "example": "Which direction is the train station?",
        "exampleTranslation": "สถานีรถไฟไปทางไหน?"
    },
    {
        "word": "directly",
        "partOfSpeech": "adverb",
        "translation": "โดยตรง ทันที",
        "definition": "",
        "example": "He looked directly at me.",
        "exampleTranslation": "เขามองตรงมาที่ฉัน"
    },
    {
        "word": "director",
        "partOfSpeech": "noun",
        "translation": "ผู้กํากับการแสดง",
        "definition": "",
        "example": "He is the director of the company.",
        "exampleTranslation": "เขาเป็นผู้อำนวยการบริษัท"
    },
    {
        "word": "dirt",
        "partOfSpeech": "noun",
        "translation": "สิ่งสกปรก ดิน",
        "definition": "",
        "example": "His clothes were covered in dirt.",
        "exampleTranslation": "เสื้อผ้าของเขาเต็มไปด้วยสิ่งสกปรก"
    },
    {
        "word": "dirty",
        "partOfSpeech": "noun",
        "translation": "สกปรก",
        "definition": "",
        "example": "Your hands are dirty.",
        "exampleTranslation": "มือของคุณสกปรก"
    },
    {
        "word": "disabled",
        "partOfSpeech": "adjective",
        "translation": "พิการ",
        "definition": "",
        "example": "The building has facilities for disabled people.",
        "exampleTranslation": "อาคารมีสิ่งอำนวยความสะดวกสำหรับคนพิการ"
    },
    {
        "word": "disadvantage",
        "partOfSpeech": "noun",
        "translation": "ความเสียเปรียบ ข้อเสียเปรียบ",
        "definition": "",
        "example": "The main disadvantage is the cost.",
        "exampleTranslation": "ข้อเสียเปรียบหลักคือเรื่องราคา"
    },
    {
        "word": "disagree",
        "partOfSpeech": "noun",
        "translation": "ไม่เห็นด้วย",
        "definition": "",
        "example": "I strongly disagree with you.",
        "exampleTranslation": "ฉันไม่เห็นด้วยกับคุณอย่างยิ่ง"
    },
    {
        "word": "disagreement",
        "partOfSpeech": "noun",
        "translation": "ความไม่เห็นด้วย ความไม่ลงรอยกัน",
        "definition": "",
        "example": "We had a slight disagreement.",
        "exampleTranslation": "พวกเรามีความขัดแย้งกันเล็กน้อย"
    },
    {
        "word": "disappear",
        "partOfSpeech": "noun",
        "translation": "หายไป สาบสูญ",
        "definition": "",
        "example": "The sun disappeared behind a cloud.",
        "exampleTranslation": "ดวงอาทิตย์หายวับไปหลังเมฆ"
    },
    {
        "word": "disappoint",
        "partOfSpeech": "noun",
        "translation": "ทําให้ผิดหวัง",
        "definition": "",
        "example": "I do not want to disappoint my parents.",
        "exampleTranslation": "ฉันไม่ต้องการทำให้พ่อแม่ผิดหวัง"
    },
    {
        "word": "disappointed",
        "partOfSpeech": "adjective",
        "translation": "เสียใจ ผิดหวัง",
        "definition": "",
        "example": "I was disappointed with the result.",
        "exampleTranslation": "ฉันรู้สึกผิดหวังกับผลลัพธ์"
    },
    {
        "word": "disappointing",
        "partOfSpeech": "verb",
        "translation": "น่าผิดหวัง น่าเสียดาย",
        "definition": "",
        "example": "The movie was disappointing.",
        "exampleTranslation": "ภาพยนตร์เรื่องนี้น่าผิดหวัง"
    },
    {
        "word": "disappointment",
        "partOfSpeech": "noun",
        "translation": "ความผิดหวัง",
        "definition": "",
        "example": "To my disappointment, he did not come.",
        "exampleTranslation": "สิ่งที่ทำให้ฉันผิดหวังคือเขาไม่ได้มา"
    },
    {
        "word": "disapproval",
        "partOfSpeech": "noun",
        "translation": "ความไม่เห็นด้วย การไม่อนุญาต",
        "definition": "",
        "example": "He shook his head in disapproval.",
        "exampleTranslation": "เขาส่ายหัวด้วยความไม่เห็นด้วย"
    },
    {
        "word": "disapprove",
        "partOfSpeech": "noun",
        "translation": "ไม่เห็นด้วย, ไม่พอใจ",
        "definition": "",
        "example": "My parents disapprove of my behavior.",
        "exampleTranslation": "พ่อแม่ของฉันไม่เห็นด้วยกับพฤติกรรมของฉัน"
    },
    {
        "word": "disapproving",
        "partOfSpeech": "verb",
        "translation": "ซึ่งไม่เห็นด้วย",
        "definition": "",
        "example": "She gave me a disapproving look.",
        "exampleTranslation": "เธอมองฉันด้วยสายตาที่ไม่เห็นด้วย"
    },
    {
        "word": "disaster",
        "partOfSpeech": "noun",
        "translation": "ความหายนะ ภัยพิบัติ ความล่มจม",
        "definition": "",
        "example": "The flood was a terrible disaster.",
        "exampleTranslation": "น้ำท่วมเป็นภัยพิบัติที่น่ากลัว"
    },
    {
        "word": "disc",
        "partOfSpeech": "noun",
        "translation": "แผ่นกลม, แผ่นเสียง",
        "definition": "",
        "example": "He inserted the disc into the computer.",
        "exampleTranslation": "เขาใส่แผ่นดิสก์เข้าไปในคอมพิวเตอร์"
    },
    {
        "word": "discipline",
        "partOfSpeech": "noun",
        "translation": "วินัย",
        "definition": "",
        "example": "The children lack discipline.",
        "exampleTranslation": "เด็กๆ ขาดระเบียบวินัย"
    },
    {
        "word": "discount",
        "partOfSpeech": "noun",
        "translation": "(การ)ลดราคา",
        "definition": "",
        "example": "They offer a 10% discount for students.",
        "exampleTranslation": "พวกเขามีส่วนลด 10% สำหรับนักเรียน"
    },
    {
        "word": "discover",
        "partOfSpeech": "noun",
        "translation": "ค้นพบ",
        "definition": "",
        "example": "Who discovered America?",
        "exampleTranslation": "ใครค้นพบทวีปอเมริกา?"
    },
    {
        "word": "discovery",
        "partOfSpeech": "noun",
        "translation": "การค้นพบ",
        "definition": "",
        "example": "The discovery of electricity changed the world.",
        "exampleTranslation": "การค้นพบไฟฟ้าเปลี่ยนโลกใบนี้"
    },
    {
        "word": "discuss",
        "partOfSpeech": "noun",
        "translation": "อภิปราย",
        "definition": "",
        "example": "We need to discuss the plan.",
        "exampleTranslation": "พวกเราต้องอภิปรายเกี่ยวกับแผนการ"
    },
    {
        "word": "discussion",
        "partOfSpeech": "noun",
        "translation": "การอภิปราย การโต้แย้งหาเหตุผล",
        "definition": "",
        "example": "We had a long discussion.",
        "exampleTranslation": "พวกเรามีการพูดคุยกันอย่างยาวนาน"
    },
    {
        "word": "disease",
        "partOfSpeech": "noun",
        "translation": "โรค",
        "definition": "",
        "example": "He suffers from a rare disease.",
        "exampleTranslation": "เขาทนทุกข์ทรมานจากโรคหายาก"
    },
    {
        "word": "disgust",
        "partOfSpeech": "noun",
        "translation": "ความน่ารังเกียจ ความน่าขยะแขยง",
        "definition": "",
        "example": "He looked at the food with disgust.",
        "exampleTranslation": "เขามองอาหารด้วยความขยะแขยง"
    },
    {
        "word": "disgusted",
        "partOfSpeech": "verb",
        "translation": "ซึ่งน่าสะอิดสะเอียน",
        "definition": "",
        "example": "I was disgusted by his behavior.",
        "exampleTranslation": "ฉันรู้สึกขยะแขยงกับพฤติกรรมของเขา"
    },
    {
        "word": "disgusting",
        "partOfSpeech": "verb",
        "translation": "น่ารังเกียจ น่าขยะแขยง",
        "definition": "",
        "example": "What a disgusting smell!",
        "exampleTranslation": "ช่างเป็นกลิ่นที่น่าขยะแขยงอะไรเช่นนี้!"
    },
    {
        "word": "dish",
        "partOfSpeech": "noun",
        "translation": "จาน",
        "definition": "",
        "example": "This dish is very spicy.",
        "exampleTranslation": "อาหารจานนี้เผ็ดมาก"
    },
    {
        "word": "dishonest",
        "partOfSpeech": "noun",
        "translation": "ไม่ซื่อสัตย์ ไม่สุจริต",
        "definition": "",
        "example": "It is dishonest to lie.",
        "exampleTranslation": "การโกหกเป็นสิ่งที่ไม่ซื่อสัตย์"
    },
    {
        "word": "disk",
        "partOfSpeech": "noun",
        "translation": "สิ่งที่มีรูปร่างเป็นแผ่นกลม จานบันทึกแม่เหล็ก",
        "definition": "",
        "example": "Save the file to the disk.",
        "exampleTranslation": "บันทึกไฟล์ลงในดิสก์"
    },
    {
        "word": "dislike",
        "partOfSpeech": "noun",
        "translation": "ไม่ชอบ",
        "definition": "",
        "example": "I dislike eating vegetables.",
        "exampleTranslation": "ฉันไม่ชอบกินผัก"
    },
    {
        "word": "dismiss",
        "partOfSpeech": "noun",
        "translation": "ไม่สนใจ, ไล่ออก",
        "definition": "",
        "example": "The boss dismissed the idea.",
        "exampleTranslation": "เจ้านายยกเลิกความคิดนั้น"
    },
    {
        "word": "display",
        "partOfSpeech": "noun",
        "translation": "นํามาตั้งแสดง",
        "definition": "",
        "example": "The paintings are on display.",
        "exampleTranslation": "ภาพวาดถูกนำมาจัดแสดง"
    },
    {
        "word": "dissolve",
        "partOfSpeech": "noun",
        "translation": "ละลาย, กระจายตัว",
        "definition": "",
        "example": "Sugar dissolves in water.",
        "exampleTranslation": "น้ำตาลละลายในน้ำ"
    },
    {
        "word": "distance",
        "partOfSpeech": "noun",
        "translation": "ระยะทาง",
        "definition": "",
        "example": "What is the distance from here to Bangkok?",
        "exampleTranslation": "ระยะทางจากที่นี่ถึงกรุงเทพฯ คือเท่าไหร่?"
    },
    {
        "word": "distinguish",
        "partOfSpeech": "noun",
        "translation": "จําแนก แสดงความแตกต่าง",
        "definition": "",
        "example": "I can distinguish the twins now.",
        "exampleTranslation": "ตอนนี้ฉันสามารถแยกแยะฝาแฝดได้แล้ว"
    },
    {
        "word": "distribute",
        "partOfSpeech": "noun",
        "translation": "จําหน่าย, จ่าย",
        "definition": "",
        "example": "Please distribute these papers to the students.",
        "exampleTranslation": "โปรดแจกจ่ายเอกสารเหล่านี้ให้กับนักเรียน"
    },
    {
        "word": "distribution",
        "partOfSpeech": "noun",
        "translation": "การจําหน่าย จ่าย แจก",
        "definition": "",
        "example": "The distribution of food is well organized.",
        "exampleTranslation": "การแจกจ่ายอาหารได้รับการจัดการอย่างดี"
    },
    {
        "word": "district",
        "partOfSpeech": "noun",
        "translation": "เขต อําเภอ",
        "definition": "",
        "example": "He lives in a quiet district.",
        "exampleTranslation": "เขาอาศัยอยู่ในเขตที่เงียบสงบ"
    },
    {
        "word": "disturb",
        "partOfSpeech": "noun",
        "translation": "รบกวน, กวน",
        "definition": "",
        "example": "Do not disturb him while he is studying.",
        "exampleTranslation": "อย่ารบกวนเขาในขณะที่เขากำลังเรียน"
    },
    {
        "word": "divide",
        "partOfSpeech": "noun",
        "translation": "แบ่ง, แบ่งแยก",
        "definition": "",
        "example": "Divide the cake into four pieces.",
        "exampleTranslation": "แบ่งเค้กออกเป็นสี่ชิ้น"
    },
    {
        "word": "division",
        "partOfSpeech": "noun",
        "translation": "การแบ่ง การแบ่งแยก",
        "definition": "",
        "example": "The company has a new sales division.",
        "exampleTranslation": "บริษัทมีแผนกขายแห่งใหม่"
    },
    {
        "word": "divorce",
        "partOfSpeech": "verb",
        "translation": "การหย่าร้าง . หย่า",
        "definition": "",
        "example": "They got a divorce last year.",
        "exampleTranslation": "พวกเขาหย่าร้างกันเมื่อปีที่แล้ว"
    },
    {
        "word": "do",
        "partOfSpeech": "verb",
        "translation": "ทํา ปฏิบัติ การทําจนสําเร็จ",
        "definition": "",
        "example": "What do you want to do?",
        "exampleTranslation": "คุณต้องการทำอะไร?"
    },
    {
        "word": "doctor",
        "partOfSpeech": "noun",
        "translation": "หมอ",
        "definition": "",
        "example": "You should see a doctor.",
        "exampleTranslation": "คุณควรไปพบแพทย์"
    },
    {
        "word": "document",
        "partOfSpeech": "noun",
        "translation": "เอกสาร",
        "definition": "",
        "example": "Please sign this document.",
        "exampleTranslation": "โปรดเซ็นเอกสารนี้"
    },
    {
        "word": "dog",
        "partOfSpeech": "noun",
        "translation": "หมา",
        "definition": "",
        "example": "I have a pet dog.",
        "exampleTranslation": "ฉันมีสุนัขสัตว์เลี้ยงหนึ่งตัว"
    },
    {
        "word": "dollar",
        "partOfSpeech": "noun",
        "translation": "ดอลลาร์ หน่วยเงินตราอเมริกัน",
        "definition": "",
        "example": "It costs one dollar.",
        "exampleTranslation": "มันราคาหนึ่งดอลลาร์"
    },
    {
        "word": "domestic",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับบ้าน เกี่ยวกับประเทศของตน",
        "definition": "",
        "example": "We took a domestic flight.",
        "exampleTranslation": "พวกเราขึ้นเที่ยวบินภายในประเทศ"
    },
    {
        "word": "dominate",
        "partOfSpeech": "noun",
        "translation": "ครอบงํา มีอํานาจเหนือ",
        "definition": "",
        "example": "The strong team dominated the game.",
        "exampleTranslation": "ทีมที่แข็งแกร่งครอบงำการแข่งขัน"
    },
    {
        "word": "door",
        "partOfSpeech": "noun",
        "translation": "ประตู",
        "definition": "",
        "example": "Open the door, please.",
        "exampleTranslation": "โปรดเปิดประตู"
    },
    {
        "word": "dot",
        "partOfSpeech": "noun",
        "translation": "จุด",
        "definition": "",
        "example": "There is a red dot on the map.",
        "exampleTranslation": "มีจุดสีแดงบนแผนที่"
    },
    {
        "word": "double",
        "partOfSpeech": "adverb",
        "translation": "สองเท่า",
        "definition": "",
        "example": "He earns double my salary.",
        "exampleTranslation": "เขาได้รับเงินเดือนเป็นสองเท่าของฉัน"
    },
    {
        "word": "doubt",
        "partOfSpeech": "noun",
        "translation": "สงสัย",
        "definition": "",
        "example": "I doubt that he will come.",
        "exampleTranslation": "ฉันสงสัยว่าเขาจะมา"
    },
    {
        "word": "down",
        "partOfSpeech": "adverb",
        "translation": "ข้างล่าง",
        "definition": "",
        "example": "Please sit down.",
        "exampleTranslation": "โปรดนั่งลง"
    },
    {
        "word": "downstairs",
        "partOfSpeech": "noun",
        "translation": "ลงบันได, ลงชั้นล่าง",
        "definition": "",
        "example": "She is waiting downstairs.",
        "exampleTranslation": "เธอกำลังรออยู่ชั้นล่าง"
    },
    {
        "word": "downward",
        "partOfSpeech": "noun",
        "translation": "ลดตํ่าลง แนวเฉียงลง",
        "definition": "",
        "example": "The bird flew in a downward direction.",
        "exampleTranslation": "นกบินลงในทิศทางดิ่ง"
    },
    {
        "word": "downwards",
        "partOfSpeech": "noun",
        "translation": "ลงข้างล่าง ลงตํ่า",
        "definition": "",
        "example": "Keep your head facing downwards.",
        "exampleTranslation": "ก้มหน้าของคุณลงไป"
    },
    {
        "word": "dozen",
        "partOfSpeech": "noun",
        "translation": "โหล, จํานวน",
        "definition": "",
        "example": "I bought a dozen eggs.",
        "exampleTranslation": "ฉันซื้อไข่หนึ่งโหล"
    },
    {
        "word": "draft",
        "partOfSpeech": "noun",
        "translation": "ฉบับร่าง การร่าง การเกณฑ์ทหาร",
        "definition": "",
        "example": "This is the first draft of my essay.",
        "exampleTranslation": "นี่คือฉบับร่างแรกของเรียงความของฉัน"
    },
    {
        "word": "drag",
        "partOfSpeech": "noun",
        "translation": "ลาก",
        "definition": "",
        "example": "He had to drag the heavy box.",
        "exampleTranslation": "เขาต้องลากกล่องที่หนัก"
    },
    {
        "word": "drama",
        "partOfSpeech": "noun",
        "translation": "ละคร",
        "definition": "",
        "example": "She loves watching Korean dramas.",
        "exampleTranslation": "เธอชอบดูละครเกาหลี"
    },
    {
        "word": "dramatic",
        "partOfSpeech": "adjective",
        "translation": "น่าทึ่ง ตื่นเต้นเร้าใจ",
        "definition": "",
        "example": "There was a dramatic change in the weather.",
        "exampleTranslation": "มีการเปลี่ยนแปลงของสภาพอากาศอย่างน่าทึ่ง"
    },
    {
        "word": "draw",
        "partOfSpeech": "noun",
        "translation": "ดึง, ลาก",
        "definition": "",
        "example": "Can you draw a picture of a cat?",
        "exampleTranslation": "คุณวาดรูปแมวได้ไหม?"
    },
    {
        "word": "drawer",
        "partOfSpeech": "noun",
        "translation": "ลิ้นชัก",
        "definition": "",
        "example": "The keys are in the top drawer.",
        "exampleTranslation": "กุญแจอยู่ในลิ้นชักบนสุด"
    },
    {
        "word": "drawing",
        "partOfSpeech": "verb",
        "translation": "ภาพวาด การวาด",
        "definition": "",
        "example": "This is a beautiful drawing.",
        "exampleTranslation": "นี่คือภาพวาดที่สวยงาม"
    },
    {
        "word": "dream",
        "partOfSpeech": "noun",
        "translation": "ฝัน",
        "definition": "",
        "example": "I had a strange dream last night.",
        "exampleTranslation": "เมื่อคืนฉันฝันแปลกมาก"
    },
    {
        "word": "dress",
        "partOfSpeech": "noun",
        "translation": "เครื่องแต่งกาย",
        "definition": "",
        "example": "She is wearing a beautiful dress.",
        "exampleTranslation": "เธอสวมชุดที่สวยงาม"
    },
    {
        "word": "drink",
        "partOfSpeech": "noun",
        "translation": "ดื่ม",
        "definition": "",
        "example": "What would you like to drink?",
        "exampleTranslation": "คุณต้องการดื่มอะไร?"
    },
    {
        "word": "drive",
        "partOfSpeech": "noun",
        "translation": "ขับ",
        "definition": "",
        "example": "I can drive a car.",
        "exampleTranslation": "ฉันขับรถได้"
    },
    {
        "word": "driver",
        "partOfSpeech": "noun",
        "translation": "คนขับรถ",
        "definition": "",
        "example": "The bus driver was very polite.",
        "exampleTranslation": "คนขับรถบัสสุภาพมาก"
    },
    {
        "word": "drop",
        "partOfSpeech": "verb",
        "translation": "หยด, .",
        "definition": "",
        "example": "Do not drop the glass.",
        "exampleTranslation": "อย่าทำแก้วตก"
    },
    {
        "word": "drug",
        "partOfSpeech": "noun",
        "translation": "ยาเสพติด",
        "definition": "",
        "example": "The doctor prescribed a new drug.",
        "exampleTranslation": "หมอสั่งยาตัวใหม่ให้"
    },
    {
        "word": "drugstore",
        "partOfSpeech": "noun",
        "translation": "ร้ายขายยา",
        "definition": "",
        "example": "I bought medicine at the drugstore.",
        "exampleTranslation": "ฉันซื้อยาที่ร้านขายยา"
    },
    {
        "word": "drum",
        "partOfSpeech": "noun",
        "translation": "กลอง",
        "definition": "",
        "example": "He plays the drum in a band.",
        "exampleTranslation": "เขาตีกลองในวงดนตรี"
    },
    {
        "word": "drunk",
        "partOfSpeech": "noun",
        "translation": "เมา",
        "definition": "",
        "example": "He was too drunk to drive.",
        "exampleTranslation": "เขาเมาเกินกว่าจะขับรถ"
    },
    {
        "word": "dry",
        "partOfSpeech": "noun",
        "translation": "แห้ง ทําให้แห้ง",
        "definition": "",
        "example": "Hang the clothes outside to dry.",
        "exampleTranslation": "แขวนเสื้อผ้าไว้ข้างนอกให้แห้ง"
    },
    {
        "word": "due",
        "partOfSpeech": "adjective",
        "translation": "ครบกําหนด ถึงกําหนด",
        "definition": "",
        "example": "The assignment is due tomorrow.",
        "exampleTranslation": "งานที่ได้รับมอบหมายกำหนดส่งพรุ่งนี้"
    },
    {
        "word": "dull",
        "partOfSpeech": "noun",
        "translation": "น่าเบื่อ",
        "definition": "",
        "example": "The movie was very dull.",
        "exampleTranslation": "ภาพยนตร์เรื่องนี้น่าเบื่อมาก"
    },
    {
        "word": "dump",
        "partOfSpeech": "noun",
        "translation": "ทิ้งขยะ ทิ้ง",
        "definition": "",
        "example": "They dump their garbage here.",
        "exampleTranslation": "พวกเขาทิ้งขยะของพวกเขาที่นี่"
    },
    {
        "word": "during",
        "partOfSpeech": "noun",
        "translation": "ในช่วงเวลา",
        "definition": "",
        "example": "Please turn off your phones during the movie.",
        "exampleTranslation": "โปรดปิดโทรศัพท์ระหว่างชมภาพยนตร์"
    },
    {
        "word": "dust",
        "partOfSpeech": "noun",
        "translation": "ฝุ่นละออง",
        "definition": "",
        "example": "The old books are covered in dust.",
        "exampleTranslation": "หนังสือเก่าเต็มไปด้วยฝุ่น"
    },
    {
        "word": "duty",
        "partOfSpeech": "noun",
        "translation": "หน้าที่",
        "definition": "",
        "example": "It is my duty to protect you.",
        "exampleTranslation": "มันเป็นหน้าที่ของฉันที่จะปกป้องคุณ"
    },
    {
        "word": "DVD",
        "partOfSpeech": "noun",
        "translation": "แผ่นวีดิโอ",
        "definition": "",
        "example": "Let us watch a DVD tonight.",
        "exampleTranslation": "คืนนี้ดูดีวีดีกันเถอะ"
    },
    {
        "word": "dying",
        "partOfSpeech": "verb",
        "translation": "กําลังจะตาย ใกล้ตาย",
        "definition": "",
        "example": "The old tree is dying.",
        "exampleTranslation": "ต้นไม้แก่กำลังจะตาย"
    },
    {
        "word": "each",
        "partOfSpeech": "noun",
        "translation": "แต่ละ",
        "definition": "",
        "example": "Each student has a book.",
        "exampleTranslation": "นักเรียนแต่ละคนมีหนังสือ"
    },
    {
        "word": "each other",
        "partOfSpeech": "noun",
        "translation": "ซึ่งกันและกัน",
        "definition": "",
        "example": "They love each other.",
        "exampleTranslation": "พวกเขารักกัน"
    },
    {
        "word": "ear",
        "partOfSpeech": "noun",
        "translation": "หู",
        "definition": "",
        "example": "An elephant has large ears.",
        "exampleTranslation": "ช้างมีหูขนาดใหญ่"
    },
    {
        "word": "early",
        "partOfSpeech": "adverb",
        "translation": "เช้า แต่เช้า ก่อนเวลาที่กําหนดไว้",
        "definition": "",
        "example": "I wake up early every day.",
        "exampleTranslation": "ฉันตื่นเช้าทุกวัน"
    },
    {
        "word": "earn",
        "partOfSpeech": "noun",
        "translation": "ได้รับ",
        "definition": "",
        "example": "How much money do you earn?",
        "exampleTranslation": "คุณหาเงินได้เท่าไหร่?"
    },
    {
        "word": "earth",
        "partOfSpeech": "noun",
        "translation": "โลก",
        "definition": "",
        "example": "The moon goes around the earth.",
        "exampleTranslation": "ดวงจันทร์โคจรรอบโลก"
    },
    {
        "word": "ease",
        "partOfSpeech": "noun",
        "translation": "ความสะดวก ความสบายใจ ความไร้กังวล",
        "definition": "",
        "example": "He passed the test with ease.",
        "exampleTranslation": "เขาสอบผ่านอย่างง่ายดาย"
    },
    {
        "word": "easily",
        "partOfSpeech": "adverb",
        "translation": "อย่างง่ายดาย",
        "definition": "",
        "example": "She won the game easily.",
        "exampleTranslation": "เธอชนะการแข่งขันอย่างง่ายดาย"
    },
    {
        "word": "east",
        "partOfSpeech": "noun",
        "translation": "ตะวันออก",
        "definition": "",
        "example": "The sun rises in the east.",
        "exampleTranslation": "ดวงอาทิตย์ขึ้นทางทิศตะวันออก"
    },
    {
        "word": "eastern",
        "partOfSpeech": "adjective",
        "translation": "ทางทิศตะวันออก",
        "definition": "",
        "example": "They live in eastern Europe.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในยุโรปตะวันออก"
    },
    {
        "word": "easy",
        "partOfSpeech": "adjective",
        "translation": "ง่าย",
        "definition": "",
        "example": "This math problem is easy.",
        "exampleTranslation": "โจทย์คณิตศาสตร์ข้อนี้ง่ายมาก"
    },
    {
        "word": "eat",
        "partOfSpeech": "noun",
        "translation": "กิน",
        "definition": "",
        "example": "What do you want to eat?",
        "exampleTranslation": "คุณต้องการกินอะไร?"
    },
    {
        "word": "economic",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับเศรษฐศาสตร์ เกี่ยวกับภาวะทางศรษฐกิจ",
        "definition": "",
        "example": "The country is facing an economic crisis.",
        "exampleTranslation": "ประเทศกำลังเผชิญกับวิกฤตเศรษฐกิจ"
    },
    {
        "word": "economy",
        "partOfSpeech": "noun",
        "translation": "เศรษฐกิจ การประหยัด",
        "definition": "",
        "example": "The global economy is growing.",
        "exampleTranslation": "เศรษฐกิจโลกกำลังเติบโต"
    },
    {
        "word": "edge",
        "partOfSpeech": "noun",
        "translation": "ขอบ, ข้าง",
        "definition": "",
        "example": "Do not stand near the edge.",
        "exampleTranslation": "อย่ายืนใกล้ขอบ"
    },
    {
        "word": "edition",
        "partOfSpeech": "noun",
        "translation": "ฉบับพิมพ์ ฉบับพิมพ์ครั้งที่",
        "definition": "",
        "example": "This is the first edition of the book.",
        "exampleTranslation": "นี่คือฉบับพิมพ์ครั้งแรกของหนังสือ"
    },
    {
        "word": "editor",
        "partOfSpeech": "noun",
        "translation": "บรรณาธิการ",
        "definition": "",
        "example": "He is the editor of the newspaper.",
        "exampleTranslation": "เขาเป็นบรรณาธิการของหนังสือพิมพ์"
    },
    {
        "word": "educate",
        "partOfSpeech": "noun",
        "translation": "ให้การศึกษา",
        "definition": "",
        "example": "We must educate our children well.",
        "exampleTranslation": "พวกเราต้องให้การศึกษาแก่เด็กๆ ของเราให้ดี"
    },
    {
        "word": "educated",
        "partOfSpeech": "verb",
        "translation": "มีการศึกษา มีความรู้",
        "definition": "",
        "example": "She is a highly educated woman.",
        "exampleTranslation": "เธอเป็นผู้หญิงที่มีการศึกษาสูง"
    },
    {
        "word": "education",
        "partOfSpeech": "noun",
        "translation": "การศึกษา",
        "definition": "",
        "example": "Education is very important.",
        "exampleTranslation": "การศึกษาเป็นสิ่งสำคัญมาก"
    },
    {
        "word": "effect",
        "partOfSpeech": "noun",
        "translation": "ผล อิทธิพล",
        "definition": "",
        "example": "The medicine had a good effect.",
        "exampleTranslation": "ยามีผลลัพธ์ที่ดี"
    },
    {
        "word": "effective",
        "partOfSpeech": "adjective",
        "translation": "มีประสิทธิภาพ ได้ผล",
        "definition": "",
        "example": "This new law is very effective.",
        "exampleTranslation": "กฎหมายใหม่นี้มีประสิทธิภาพมาก"
    },
    {
        "word": "effectively",
        "partOfSpeech": "adverb",
        "translation": "อย่างได้ผล อย่างมีประสิทธิภาพ",
        "definition": "",
        "example": "The team worked effectively together.",
        "exampleTranslation": "ทีมทำงานร่วมกันอย่างมีประสิทธิภาพ"
    },
    {
        "word": "efficient",
        "partOfSpeech": "noun",
        "translation": "ซึ่งมีประสิทธิภาพ มีผลต่อ",
        "definition": "",
        "example": "This car is very fuel-efficient.",
        "exampleTranslation": "รถคันนี้ประหยัดน้ำมันมาก"
    },
    {
        "word": "effort",
        "partOfSpeech": "noun",
        "translation": "ความพยายาม",
        "definition": "",
        "example": "It takes a lot of effort to learn a language.",
        "exampleTranslation": "ต้องใช้ความพยายามอย่างมากในการเรียนภาษา"
    },
    {
        "word": "egg",
        "partOfSpeech": "noun",
        "translation": "ไข่",
        "definition": "",
        "example": "I eat an egg every morning.",
        "exampleTranslation": "ฉันกินไข่หนึ่งฟองทุกเช้า"
    },
    {
        "word": "eight",
        "partOfSpeech": "noun",
        "translation": "แปด",
        "definition": "",
        "example": "I have eight books.",
        "exampleTranslation": "ฉันมีหนังสือแปดเล่ม"
    },
    {
        "word": "eighteen",
        "partOfSpeech": "noun",
        "translation": "สิบแปด",
        "definition": "",
        "example": "My sister is eighteen years old.",
        "exampleTranslation": "น้องสาวของฉันอายุสิบแปดปี"
    },
    {
        "word": "eighth",
        "partOfSpeech": "noun",
        "translation": "ที่แปด",
        "definition": "",
        "example": "He finished eighth in the race.",
        "exampleTranslation": "เขาเข้าเส้นชัยเป็นที่แปดในการแข่งขัน"
    },
    {
        "word": "eighty",
        "partOfSpeech": "noun",
        "translation": "แปดสิบ",
        "definition": "",
        "example": "My grandfather is eighty years old.",
        "exampleTranslation": "ปู่ของฉันอายุแปดสิบปี"
    },
    {
        "word": "either",
        "partOfSpeech": "noun",
        "translation": "อันใดอันหนึ่ง ถ้าไม่...ก็..หรือว่า",
        "definition": "",
        "example": "You can have either tea or coffee.",
        "exampleTranslation": "คุณสามารถเลือกดื่มชาหรือกาแฟก็ได้"
    },
    {
        "word": "elbow",
        "partOfSpeech": "noun",
        "translation": "ข้อศอก",
        "definition": "",
        "example": "He hurt his left elbow.",
        "exampleTranslation": "เขาได้รับบาดเจ็บที่ข้อศอกซ้าย"
    },
    {
        "word": "elderly",
        "partOfSpeech": "adverb",
        "translation": "คนสูงวัย",
        "definition": "",
        "example": "The elderly man needs help crossing the street.",
        "exampleTranslation": "ชายชราต้องการความช่วยเหลือในการข้ามถนน"
    },
    {
        "word": "elect",
        "partOfSpeech": "noun",
        "translation": "เลือกตั้ง",
        "definition": "",
        "example": "They will elect a new president.",
        "exampleTranslation": "พวกเขาจะเลือกตั้งประธานาธิบดีคนใหม่"
    },
    {
        "word": "election",
        "partOfSpeech": "noun",
        "translation": "การเลือกตั้ง",
        "definition": "",
        "example": "The election will be held next month.",
        "exampleTranslation": "การเลือกตั้งจะจัดขึ้นในเดือนหน้า"
    },
    {
        "word": "electric",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับไฟฟ้า",
        "definition": "",
        "example": "We bought an electric car.",
        "exampleTranslation": "พวกเราซื้อรถยนต์ไฟฟ้า"
    },
    {
        "word": "electrical",
        "partOfSpeech": "adjective",
        "translation": "น่าตื่นเต้น, โดยใช้กระแสไฟฟ้า",
        "definition": "",
        "example": "He is an electrical engineer.",
        "exampleTranslation": "เขาเป็นวิศวกรไฟฟ้า"
    },
    {
        "word": "electricity",
        "partOfSpeech": "noun",
        "translation": "ไฟฟ้า",
        "definition": "",
        "example": "The storm cut off the electricity.",
        "exampleTranslation": "พายุทำให้ไฟฟ้าดับ"
    },
    {
        "word": "electronic",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับอิเล็กทรอนิกส์",
        "definition": "",
        "example": "I like playing electronic games.",
        "exampleTranslation": "ฉันชอบเล่นเกมอิเล็กทรอนิกส์"
    },
    {
        "word": "elegant",
        "partOfSpeech": "noun",
        "translation": "สง่างาม, งดงาม",
        "definition": "",
        "example": "She wore an elegant dress.",
        "exampleTranslation": "เธอสวมชุดที่สง่างาม"
    },
    {
        "word": "element",
        "partOfSpeech": "noun",
        "translation": "ลักษณะที่สําคัญ ปัจจัย ธาตุ",
        "definition": "",
        "example": "Trust is a key element of a good relationship.",
        "exampleTranslation": "ความไว้วางใจเป็นองค์ประกอบสำคัญของความสัมพันธ์ที่ดี"
    },
    {
        "word": "elevator",
        "partOfSpeech": "noun",
        "translation": "ลิฟ (ในอาคาร)",
        "definition": "",
        "example": "Let us take the elevator to the fifth floor.",
        "exampleTranslation": "ขึ้นลิฟต์ไปชั้นห้ากันเถอะ"
    },
    {
        "word": "eleven",
        "partOfSpeech": "adverb",
        "translation": "สิบเอ็ด",
        "definition": "",
        "example": "She is eleven years old.",
        "exampleTranslation": "เธออายุสิบเอ็ดปี"
    },
    {
        "word": "else",
        "partOfSpeech": "adverb",
        "translation": "อีก อื่น",
        "definition": "",
        "example": "Do you need anything else?",
        "exampleTranslation": "คุณต้องการอะไรอีกไหม?"
    },
    {
        "word": "elsewhere",
        "partOfSpeech": "adverb",
        "translation": "ในที่อื่นๆ",
        "definition": "",
        "example": "We will have to look elsewhere.",
        "exampleTranslation": "พวกเราจะต้องไปหาที่อื่น"
    },
    {
        "word": "email",
        "partOfSpeech": "noun",
        "translation": "อีเมล์",
        "definition": "",
        "example": "Send me an email.",
        "exampleTranslation": "ส่งอีเมลหาฉันด้วย"
    },
    {
        "word": "embarrass",
        "partOfSpeech": "noun",
        "translation": "ทําให้ขวยเขิน ทําให้ลําบากใจ",
        "definition": "",
        "example": "Please do not embarrass me in front of my friends.",
        "exampleTranslation": "โปรดอย่าทำให้ฉันอับอายต่อหน้าเพื่อนๆ"
    },
    {
        "word": "embarrassed",
        "partOfSpeech": "verb",
        "translation": "อาย ขวยเขิน",
        "definition": "",
        "example": "I felt so embarrassed.",
        "exampleTranslation": "ฉันรู้สึกอายมาก"
    },
    {
        "word": "embarrassing",
        "partOfSpeech": "verb",
        "translation": "น่าอัปยศอดสู",
        "definition": "",
        "example": "It was an embarrassing situation.",
        "exampleTranslation": "มันเป็นสถานการณ์ที่น่าอับอาย"
    },
    {
        "word": "embarrassment",
        "partOfSpeech": "noun",
        "translation": "กระดาก, ลําบากใจ",
        "definition": "",
        "example": "He turned red with embarrassment.",
        "exampleTranslation": "เขาหน้าแดงด้วยความเขินอาย"
    },
    {
        "word": "emerge",
        "partOfSpeech": "noun",
        "translation": "โผล่ออกมา ปรากฎออกมา",
        "definition": "",
        "example": "The sun emerged from behind the clouds.",
        "exampleTranslation": "ดวงอาทิตย์โผล่ออกมาจากหลังเมฆ"
    },
    {
        "word": "emergency",
        "partOfSpeech": "noun",
        "translation": "ภาวะฉุกเฉิน",
        "definition": "",
        "example": "Call 911 in an emergency.",
        "exampleTranslation": "โทร 911 ในกรณีฉุกเฉิน"
    },
    {
        "word": "emotion",
        "partOfSpeech": "noun",
        "translation": "อารมณ์",
        "definition": "",
        "example": "He showed no emotion.",
        "exampleTranslation": "เขาไม่ได้แสดงอารมณ์ใดๆ"
    },
    {
        "word": "emotional",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับความรู้สึก ซึ่งกระเทือนอารมณ์",
        "definition": "",
        "example": "It was a very emotional movie.",
        "exampleTranslation": "มันเป็นภาพยนตร์ที่สะเทือนอารมณ์มาก"
    },
    {
        "word": "emphasis",
        "partOfSpeech": "noun",
        "translation": "การเน้น",
        "definition": "",
        "example": "The school puts a lot of emphasis on sports.",
        "exampleTranslation": "โรงเรียนให้ความสำคัญกับกีฬามาก"
    },
    {
        "word": "emphasize",
        "partOfSpeech": "verb",
        "translation": "เน้น",
        "definition": "",
        "example": "I want to emphasize the importance of this rule.",
        "exampleTranslation": "ฉันต้องการเน้นย้ำถึงความสำคัญของกฎนี้"
    },
    {
        "word": "empire",
        "partOfSpeech": "noun",
        "translation": "อาณาจักร จักรวรรดิ",
        "definition": "",
        "example": "The Roman Empire was very large.",
        "exampleTranslation": "จักรวรรดิโรมันมีขนาดใหญ่มาก"
    },
    {
        "word": "employ",
        "partOfSpeech": "noun",
        "translation": "จ้าง",
        "definition": "",
        "example": "The company employs 200 people.",
        "exampleTranslation": "บริษัทว่าจ้างพนักงาน 200 คน"
    },
    {
        "word": "employee",
        "partOfSpeech": "noun",
        "translation": "ลูกจ้าง",
        "definition": "",
        "example": "He is a good employee.",
        "exampleTranslation": "เขาเป็นพนักงานที่ดี"
    },
    {
        "word": "employer",
        "partOfSpeech": "noun",
        "translation": "นายจ้าง",
        "definition": "",
        "example": "My employer is very fair.",
        "exampleTranslation": "นายจ้างของฉันมีความยุติธรรมมาก"
    },
    {
        "word": "employment",
        "partOfSpeech": "noun",
        "translation": "การจ้าง",
        "definition": "",
        "example": "It is hard to find employment right now.",
        "exampleTranslation": "การหางานทำในตอนนี้เป็นเรื่องยาก"
    },
    {
        "word": "empty",
        "partOfSpeech": "adjective",
        "translation": "ว่างเปล่า",
        "definition": "",
        "example": "The glass is empty.",
        "exampleTranslation": "แก้วว่างเปล่า"
    },
    {
        "word": "enable",
        "partOfSpeech": "adjective",
        "translation": "ทําให้สามารถ",
        "definition": "",
        "example": "This password will enable you to log in.",
        "exampleTranslation": "รหัสผ่านนี้จะช่วยให้คุณเข้าสู่ระบบได้"
    },
    {
        "word": "encounter",
        "partOfSpeech": "noun",
        "translation": "เผชิญหน้า",
        "definition": "",
        "example": "We had a strange encounter.",
        "exampleTranslation": "พวกเรามีการเผชิญหน้าที่แปลกประหลาด"
    },
    {
        "word": "encourage",
        "partOfSpeech": "noun",
        "translation": "ให้กําลังใจ กระตุ้น",
        "definition": "",
        "example": "My parents always encourage me.",
        "exampleTranslation": "พ่อแม่มักจะให้กำลังใจฉันเสมอ"
    },
    {
        "word": "encouragement",
        "partOfSpeech": "noun",
        "translation": "การให้กําลังใจ",
        "definition": "",
        "example": "I need some encouragement.",
        "exampleTranslation": "ฉันต้องการกำลังใจบ้าง"
    },
    {
        "word": "end",
        "partOfSpeech": "noun",
        "translation": "จุดจบ",
        "definition": "",
        "example": "This is the end of the story.",
        "exampleTranslation": "นี่คือจุดจบของเรื่องราว"
    },
    {
        "word": "ending",
        "partOfSpeech": "verb",
        "translation": "การยุติ ตอนจบ",
        "definition": "",
        "example": "I did not like the ending of the movie.",
        "exampleTranslation": "ฉันไม่ชอบตอนจบของภาพยนตร์เรื่องนี้"
    },
    {
        "word": "enemy",
        "partOfSpeech": "noun",
        "translation": "ศัตรู",
        "definition": "",
        "example": "He has no enemies.",
        "exampleTranslation": "เขาไม่มีศัตรู"
    },
    {
        "word": "energy",
        "partOfSpeech": "noun",
        "translation": "พลังงาน",
        "definition": "",
        "example": "Children have a lot of energy.",
        "exampleTranslation": "เด็กๆ มีพลังงานเยอะมาก"
    },
    {
        "word": "engage",
        "partOfSpeech": "noun",
        "translation": "หมั้น, ผูกมัด",
        "definition": "",
        "example": "They plan to engage in a new project.",
        "exampleTranslation": "พวกเขาวางแผนที่จะมีส่วนร่วมในโครงการใหม่"
    },
    {
        "word": "engaged",
        "partOfSpeech": "verb",
        "translation": "พัวพันกับ, มีคู่หมั้นแล้ว",
        "definition": "",
        "example": "My sister is engaged to be married.",
        "exampleTranslation": "น้องสาวของฉันหมั้นแล้วและกำลังจะแต่งงาน"
    },
    {
        "word": "engine",
        "partOfSpeech": "noun",
        "translation": "เครื่องจักร เครื่องกล",
        "definition": "",
        "example": "The car has a powerful engine.",
        "exampleTranslation": "รถมีเครื่องยนต์ที่ทรงพลัง"
    },
    {
        "word": "engineer",
        "partOfSpeech": "noun",
        "translation": "วิศวกร",
        "definition": "",
        "example": "He works as a software engineer.",
        "exampleTranslation": "เขาทำงานเป็นวิศวกรซอฟต์แวร์"
    },
    {
        "word": "engineering",
        "partOfSpeech": "noun",
        "translation": "วิศวกรรม",
        "definition": "",
        "example": "She is studying engineering.",
        "exampleTranslation": "เธอกำลังเรียนวิศวกรรมศาสตร์"
    },
    {
        "word": "enjoy",
        "partOfSpeech": "noun",
        "translation": "เพลิดเพลิน",
        "definition": "",
        "example": "I enjoy reading books.",
        "exampleTranslation": "ฉันสนุกกับการอ่านหนังสือ"
    },
    {
        "word": "enjoyable",
        "partOfSpeech": "adjective",
        "translation": "น่ายินดี, น่าพอใจ",
        "definition": "",
        "example": "We had an enjoyable evening.",
        "exampleTranslation": "พวกเรามีช่วงเวลาเย็นที่สนุกสนาน"
    },
    {
        "word": "enjoyment",
        "partOfSpeech": "noun",
        "translation": "ความเพลิดเพลิน",
        "definition": "",
        "example": "He reads for enjoyment.",
        "exampleTranslation": "เขาอ่านหนังสือเพื่อความเพลิดเพลิน"
    },
    {
        "word": "enormous",
        "partOfSpeech": "adjective",
        "translation": "มหึมา ใหญ่โต",
        "definition": "",
        "example": "They live in an enormous house.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในบ้านหลังมหึมา"
    },
    {
        "word": "enough",
        "partOfSpeech": "adverb",
        "translation": "พอ",
        "definition": "",
        "example": "Do we have enough food?",
        "exampleTranslation": "พวกเรามีอาหารเพียงพอไหม?"
    },
    {
        "word": "enquiry",
        "partOfSpeech": "noun",
        "translation": "การไต่สวน การสอบถาม",
        "definition": "",
        "example": "I made an enquiry about the flight.",
        "exampleTranslation": "ฉันได้ทำการสอบถามเกี่ยวกับเที่ยวบิน"
    },
    {
        "word": "ensure",
        "partOfSpeech": "verb",
        "translation": "รับรอง, ประกัน",
        "definition": "",
        "example": "Please ensure that the door is locked.",
        "exampleTranslation": "โปรดตรวจสอบให้แน่ใจว่าประตูล็อคแล้ว"
    },
    {
        "word": "enter",
        "partOfSpeech": "noun",
        "translation": "เข้ามา เข้าไป",
        "definition": "",
        "example": "Please enter your password.",
        "exampleTranslation": "โปรดใส่รหัสผ่านของคุณ"
    },
    {
        "word": "entertain",
        "partOfSpeech": "noun",
        "translation": "ทําให้เพลิดเพลิน",
        "definition": "",
        "example": "The clown entertained the kids.",
        "exampleTranslation": "ตัวตลกสร้างความบันเทิงให้เด็กๆ"
    },
    {
        "word": "entertainer",
        "partOfSpeech": "noun",
        "translation": "ผู้ทําให้เพลิดเพลิน",
        "definition": "",
        "example": "He is a famous entertainer.",
        "exampleTranslation": "เขาเป็นผู้ให้ความบันเทิงที่มีชื่อเสียง"
    },
    {
        "word": "entertaining",
        "partOfSpeech": "verb",
        "translation": "ซึ่งให้ความเพลิดเพลิน",
        "definition": "",
        "example": "The show was very entertaining.",
        "exampleTranslation": "รายการนั้นให้ความบันเทิงมาก"
    },
    {
        "word": "entertainment",
        "partOfSpeech": "noun",
        "translation": "ความบันเทิง",
        "definition": "",
        "example": "What kind of entertainment do you like?",
        "exampleTranslation": "คุณชอบความบันเทิงประเภทไหน?"
    },
    {
        "word": "enthusiasm",
        "partOfSpeech": "noun",
        "translation": "ความกระตือรือร้น",
        "definition": "",
        "example": "He showed a lot of enthusiasm for the project.",
        "exampleTranslation": "เขาแสดงความกระตือรือร้นอย่างมากสำหรับโครงการนี้"
    },
    {
        "word": "enthusiastic",
        "partOfSpeech": "adjective",
        "translation": "มีความกระตือรือร้น มีใจจดจ่อ",
        "definition": "",
        "example": "She is very enthusiastic about learning.",
        "exampleTranslation": "เธอมีความกระตือรือร้นในการเรียนมาก"
    },
    {
        "word": "entire",
        "partOfSpeech": "adjective",
        "translation": "ทั้งหมด, ทั้งสิ้น",
        "definition": "",
        "example": "I ate the entire pizza.",
        "exampleTranslation": "ฉันกินพิซซ่าหมดทั้งถาด"
    },
    {
        "word": "entirely",
        "partOfSpeech": "adverb",
        "translation": "โดยสิ้นเชิง อย่างแท้จริง",
        "definition": "",
        "example": "I am entirely responsible for this.",
        "exampleTranslation": "ฉันรับผิดชอบเรื่องนี้โดยสิ้นเชิง"
    },
    {
        "word": "entitle",
        "partOfSpeech": "noun",
        "translation": "ให้ชื่อ, ตั้งชื่อ",
        "definition": "",
        "example": "This ticket entitles you to a free drink.",
        "exampleTranslation": "ตั๋วใบนี้ให้สิทธิ์คุณรับเครื่องดื่มฟรี"
    },
    {
        "word": "entrance",
        "partOfSpeech": "noun",
        "translation": "ทางเข้า",
        "definition": "",
        "example": "The entrance is at the front of the building.",
        "exampleTranslation": "ทางเข้าอยู่ด้านหน้าของอาคาร"
    },
    {
        "word": "entry",
        "partOfSpeech": "noun",
        "translation": "การเข้า ทางเข้า",
        "definition": "",
        "example": "No entry without permission.",
        "exampleTranslation": "ห้ามเข้าโดยไม่ได้รับอนุญาต"
    },
    {
        "word": "envelope",
        "partOfSpeech": "noun",
        "translation": "ซองจดหมาย",
        "definition": "",
        "example": "Put the letter in an envelope.",
        "exampleTranslation": "ใส่จดหมายในซอง"
    },
    {
        "word": "environment",
        "partOfSpeech": "noun",
        "translation": "สิ่งแวดล้อม",
        "definition": "",
        "example": "We must protect the environment.",
        "exampleTranslation": "พวกเราต้องปกป้องสิ่งแวดล้อม"
    },
    {
        "word": "environmental",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับสิ่งแวดล้อม",
        "definition": "",
        "example": "Pollution is an environmental problem.",
        "exampleTranslation": "มลพิษเป็นปัญหาสิ่งแวดล้อม"
    },
    {
        "word": "equal",
        "partOfSpeech": "adjective",
        "translation": "เท่ากัน",
        "definition": "",
        "example": "All men are created equal.",
        "exampleTranslation": "มนุษย์ทุกคนถูกสร้างมาให้เท่าเทียมกัน"
    },
    {
        "word": "equally",
        "partOfSpeech": "adverb",
        "translation": "อย่างเท่าเทียมกัน",
        "definition": "",
        "example": "Share the cake equally.",
        "exampleTranslation": "แบ่งเค้กให้เท่าๆ กัน"
    },
    {
        "word": "equipment",
        "partOfSpeech": "noun",
        "translation": "อุปกรณ์ เครื่องมือ",
        "definition": "",
        "example": "We need new office equipment.",
        "exampleTranslation": "พวกเราต้องการอุปกรณ์สำนักงานใหม่"
    },
    {
        "word": "equivalent",
        "partOfSpeech": "noun",
        "translation": "เท่ากับ ซึ่งมีค่าเท่ากัน",
        "definition": "",
        "example": "Ten dimes are equivalent to one dollar.",
        "exampleTranslation": "สิบเหรียญดิมมีค่าเท่ากับหนึ่งดอลลาร์"
    },
    {
        "word": "error",
        "partOfSpeech": "noun",
        "translation": "ข้อบกพร่อง, จุดบกพร่อง",
        "definition": "",
        "example": "There is an error in your report.",
        "exampleTranslation": "มีข้อผิดพลาดในรายงานของคุณ"
    },
    {
        "word": "escape",
        "partOfSpeech": "noun",
        "translation": "หลบหนี",
        "definition": "",
        "example": "The bird escaped from its cage.",
        "exampleTranslation": "นกหนีออกจากกรง"
    },
    {
        "word": "especially",
        "partOfSpeech": "adverb",
        "translation": "โดยเฉพาะอย่างยิ่ง",
        "definition": "",
        "example": "I love food, especially pizza.",
        "exampleTranslation": "ฉันรักอาหาร โดยเฉพาะพิซซ่า"
    },
    {
        "word": "essay",
        "partOfSpeech": "noun",
        "translation": "เรียงความร้อยแก้ว",
        "definition": "",
        "example": "I have to write an English essay.",
        "exampleTranslation": "ฉันต้องเขียนเรียงความภาษาอังกฤษ"
    },
    {
        "word": "essential",
        "partOfSpeech": "adjective",
        "translation": "จําเป็นที่สุด ซึ่งขาดเสียมิได้",
        "definition": "",
        "example": "Water is essential for life.",
        "exampleTranslation": "น้ำเป็นสิ่งจำเป็นสำหรับชีวิต"
    },
    {
        "word": "essentially",
        "partOfSpeech": "adverb",
        "translation": "จําเป็น เป็นพื้นฐาน",
        "definition": "",
        "example": "It is essentially the same thing.",
        "exampleTranslation": "โดยพื้นฐานแล้วมันเป็นสิ่งเดียวกัน"
    },
    {
        "word": "establish",
        "partOfSpeech": "verb",
        "translation": "ก่อตั้ง",
        "definition": "",
        "example": "The company was established in 1990.",
        "exampleTranslation": "บริษัทก่อตั้งขึ้นในปี 1990"
    },
    {
        "word": "estate",
        "partOfSpeech": "noun",
        "translation": "ทรัพย์สินที่ดิน",
        "definition": "",
        "example": "He owns a large estate in the country.",
        "exampleTranslation": "เขาเป็นเจ้าของที่ดินขนาดใหญ่ในชนบท"
    },
    {
        "word": "estimate",
        "partOfSpeech": "noun",
        "translation": "(การ)ประมาณ ประเมิน กะ ตีราคา",
        "definition": "",
        "example": "Can you estimate the cost?",
        "exampleTranslation": "คุณช่วยประเมินราคาได้ไหม?"
    },
    {
        "word": "even",
        "partOfSpeech": "adverb",
        "translation": "เรียบ, ราบ",
        "definition": "",
        "example": "Even a child can do it.",
        "exampleTranslation": "แม้แต่เด็กก็ทำได้"
    },
    {
        "word": "evening",
        "partOfSpeech": "verb",
        "translation": "ตอนเย็น",
        "definition": "",
        "example": "What are you doing this evening?",
        "exampleTranslation": "เย็นนี้คุณจะทำอะไร?"
    },
    {
        "word": "event",
        "partOfSpeech": "noun",
        "translation": "เหตุการณ์",
        "definition": "",
        "example": "It was a major historical event.",
        "exampleTranslation": "มันเป็นเหตุการณ์ทางประวัติศาสตร์ที่สำคัญ"
    },
    {
        "word": "eventually",
        "partOfSpeech": "adverb",
        "translation": "ในที่สุด ลงท้าย ในบั้นปลาย",
        "definition": "",
        "example": "We will eventually find a way.",
        "exampleTranslation": "ในท้ายที่สุดพวกเราก็จะหาทางได้"
    },
    {
        "word": "ever",
        "partOfSpeech": "adverb",
        "translation": "ตลอดไป เคย",
        "definition": "",
        "example": "Have you ever been to Japan?",
        "exampleTranslation": "คุณเคยไปญี่ปุ่นไหม?"
    },
    {
        "word": "every",
        "partOfSpeech": "noun",
        "translation": "แต่ละ ทั้งหมด",
        "definition": "",
        "example": "I brush my teeth every day.",
        "exampleTranslation": "ฉันแปรงฟันทุกวัน"
    },
    {
        "word": "everybody",
        "partOfSpeech": "noun",
        "translation": "ทุกๆ คน",
        "definition": "",
        "example": "Everybody is happy.",
        "exampleTranslation": "ทุกคนมีความสุข"
    },
    {
        "word": "everyone",
        "partOfSpeech": "noun",
        "translation": "ทุกคน",
        "definition": "",
        "example": "Everyone needs a friend.",
        "exampleTranslation": "ทุกคนต้องการเพื่อน"
    },
    {
        "word": "everything",
        "partOfSpeech": "noun",
        "translation": "ทุกอย่าง",
        "definition": "",
        "example": "Everything will be alright.",
        "exampleTranslation": "ทุกอย่างจะเรียบร้อย"
    },
    {
        "word": "everywhere",
        "partOfSpeech": "adverb",
        "translation": "ทุกที่",
        "definition": "",
        "example": "I looked everywhere for my keys.",
        "exampleTranslation": "ฉันมองหากุญแจของฉันทุกที่"
    },
    {
        "word": "evidence",
        "partOfSpeech": "noun",
        "translation": "หลักฐาน",
        "definition": "",
        "example": "There is no evidence against him.",
        "exampleTranslation": "ไม่มีหลักฐานเอาผิดเขา"
    },
    {
        "word": "evil",
        "partOfSpeech": "noun",
        "translation": "ชั่วร้าย",
        "definition": "",
        "example": "He is an evil man.",
        "exampleTranslation": "เขาเป็นคนชั่วร้าย"
    },
    {
        "word": "exact",
        "partOfSpeech": "noun",
        "translation": "ถูกต้อง",
        "definition": "",
        "example": "I do not know the exact time.",
        "exampleTranslation": "ฉันไม่รู้เวลาที่แน่นอน"
    },
    {
        "word": "exactly",
        "partOfSpeech": "adverb",
        "translation": "อย่างเจาะจง อย่างแน่ชัด",
        "definition": "",
        "example": "That is exactly what I mean.",
        "exampleTranslation": "นั่นคือสิ่งที่ฉันหมายถึงเป๊ะเลย"
    },
    {
        "word": "exaggerate",
        "partOfSpeech": "noun",
        "translation": "คุยโม้",
        "definition": "",
        "example": "Do not exaggerate the problem.",
        "exampleTranslation": "อย่าพูดเกินจริงเกี่ยวกับปัญหานี้"
    },
    {
        "word": "exam",
        "partOfSpeech": "noun",
        "translation": "การสอบ การทดสอบ",
        "definition": "",
        "example": "I passed my final exam.",
        "exampleTranslation": "ฉันสอบปลายภาคผ่านแล้ว"
    },
    {
        "word": "examination",
        "partOfSpeech": "noun",
        "translation": "การตรวจสอบ",
        "definition": "",
        "example": "The doctor will do a physical examination.",
        "exampleTranslation": "หมอจะทำการตรวจร่างกาย"
    },
    {
        "word": "examine",
        "partOfSpeech": "noun",
        "translation": "ตรวจสอบ",
        "definition": "",
        "example": "The police will examine the evidence.",
        "exampleTranslation": "ตำรวจจะตรวจสอบหลักฐาน"
    },
    {
        "word": "example",
        "partOfSpeech": "noun",
        "translation": "ตัวอย่าง",
        "definition": "",
        "example": "Can you give me an example?",
        "exampleTranslation": "คุณยกตัวอย่างให้ฉันดูได้ไหม?"
    },
    {
        "word": "excellent",
        "partOfSpeech": "noun",
        "translation": "ยอดเยี่ยม",
        "definition": "",
        "example": "This food is excellent.",
        "exampleTranslation": "อาหารนี้ยอดเยี่ยมมาก"
    },
    {
        "word": "except",
        "partOfSpeech": "noun",
        "translation": "ยกเว้น ไม่รวมเข้ากับ",
        "definition": "",
        "example": "Everyone went except me.",
        "exampleTranslation": "ทุกคนไปหมดยกเว้นฉัน"
    },
    {
        "word": "exception",
        "partOfSpeech": "noun",
        "translation": "การยกเว้น ข้อยกเว้น กรณีพิเศษ",
        "definition": "",
        "example": "There is an exception to every rule.",
        "exampleTranslation": "มีข้อยกเว้นสำหรับทุกกฎ"
    },
    {
        "word": "exchange",
        "partOfSpeech": "noun",
        "translation": "แลกเปลี่ยน",
        "definition": "",
        "example": "We will exchange gifts.",
        "exampleTranslation": "พวกเราจะแลกของขวัญกัน"
    },
    {
        "word": "excite",
        "partOfSpeech": "noun",
        "translation": "ปลุกเร้า",
        "definition": "",
        "example": "The news excited everyone.",
        "exampleTranslation": "ข่าวนั้นทำให้ทุกคนตื่นเต้น"
    },
    {
        "word": "excited",
        "partOfSpeech": "verb",
        "translation": "ตื่นเต้น",
        "definition": "",
        "example": "I am excited about the trip.",
        "exampleTranslation": "ฉันรู้สึกตื่นเต้นกับการเดินทางครั้งนี้"
    },
    {
        "word": "excitement",
        "partOfSpeech": "noun",
        "translation": "ความตื่นเต้น ความเร่าร้อน",
        "definition": "",
        "example": "The children were full of excitement.",
        "exampleTranslation": "เด็กๆ เต็มไปด้วยความตื่นเต้น"
    },
    {
        "word": "exciting",
        "partOfSpeech": "verb",
        "translation": "น่าตื่นเต้น",
        "definition": "",
        "example": "It was an exciting game.",
        "exampleTranslation": "มันเป็นเกมที่น่าตื่นเต้น"
    },
    {
        "word": "exclude",
        "partOfSpeech": "noun",
        "translation": "กันออกไป ไม่รวมถึง",
        "definition": "",
        "example": "Do not exclude him from the group.",
        "exampleTranslation": "อย่ากันเขาออกจากกลุ่ม"
    },
    {
        "word": "excuse",
        "partOfSpeech": "noun",
        "translation": "แก้ตัว",
        "definition": "",
        "example": "Please excuse me for being late.",
        "exampleTranslation": "โปรดยกโทษให้ฉันที่มาสาย"
    },
    {
        "word": "executive",
        "partOfSpeech": "noun",
        "translation": "ผู้บริหาร",
        "definition": "",
        "example": "He is a senior executive in the company.",
        "exampleTranslation": "เขาเป็นผู้บริหารระดับสูงในบริษัท"
    },
    {
        "word": "exercise",
        "partOfSpeech": "noun",
        "translation": "ออกกําลังกาย",
        "definition": "",
        "example": "You should exercise every day.",
        "exampleTranslation": "คุณควรออกกำลังกายทุกวัน"
    },
    {
        "word": "exhibit",
        "partOfSpeech": "noun",
        "translation": "แสดง แสดงนิทรรศการ",
        "definition": "",
        "example": "They will exhibit their artwork in the gallery.",
        "exampleTranslation": "พวกเขาจะจัดแสดงผลงานศิลปะในแกลเลอรี"
    },
    {
        "word": "exhibition",
        "partOfSpeech": "noun",
        "translation": "การแสดงนิทรรศการ",
        "definition": "",
        "example": "I went to an art exhibition.",
        "exampleTranslation": "ฉันไปนิทรรศการศิลปะ"
    },
    {
        "word": "exist",
        "partOfSpeech": "noun",
        "translation": "มีอยู่",
        "definition": "",
        "example": "Do aliens really exist?",
        "exampleTranslation": "มนุษย์ต่างดาวมีอยู่จริงหรือ?"
    },
    {
        "word": "existence",
        "partOfSpeech": "noun",
        "translation": "การดํารงอยู่",
        "definition": "",
        "example": "He does not believe in the existence of ghosts.",
        "exampleTranslation": "เขาไม่เชื่อเรื่องการมีอยู่ของผี"
    },
    {
        "word": "exit",
        "partOfSpeech": "noun",
        "translation": "ทางออก",
        "definition": "",
        "example": "Where is the emergency exit?",
        "exampleTranslation": "ทางออกฉุกเฉินอยู่ที่ไหน?"
    },
    {
        "word": "expand",
        "partOfSpeech": "noun",
        "translation": "แผ่ ขยาย",
        "definition": "",
        "example": "Heat makes metals expand.",
        "exampleTranslation": "ความร้อนทำให้โลหะขยายตัว"
    },
    {
        "word": "expect",
        "partOfSpeech": "verb",
        "translation": "คาดหวัง . ตั้งครรภ์ (ไม่เป็นทางการ)",
        "definition": "",
        "example": "I expect him to arrive soon.",
        "exampleTranslation": "ฉันคาดหวังให้เขามาถึงในไม่ช้า"
    },
    {
        "word": "expectation",
        "partOfSpeech": "noun",
        "translation": "การคาดหมาย สิ่งที่คาดหมายไว้",
        "definition": "",
        "example": "The result exceeded our expectations.",
        "exampleTranslation": "ผลลัพธ์เกินความคาดหมายของพวกเรา"
    },
    {
        "word": "expected",
        "partOfSpeech": "verb",
        "translation": "รู้สึกคาดหวังไว้",
        "definition": "",
        "example": "The expected delivery date is tomorrow.",
        "exampleTranslation": "วันที่คาดว่าจะจัดส่งคือวันพรุ่งนี้"
    },
    {
        "word": "expense",
        "partOfSpeech": "noun",
        "translation": "ค่าใช้จ่าย",
        "definition": "",
        "example": "The company will pay for all your expenses.",
        "exampleTranslation": "บริษัทจะจ่ายค่าใช้จ่ายทั้งหมดของคุณ"
    },
    {
        "word": "expensive",
        "partOfSpeech": "adjective",
        "translation": "แพง",
        "definition": "",
        "example": "This watch is very expensive.",
        "exampleTranslation": "นาฬิกาเรือนนี้ราคาแพงมาก"
    },
    {
        "word": "experience",
        "partOfSpeech": "noun",
        "translation": "ประสบการณ์",
        "definition": "",
        "example": "He has a lot of experience in this field.",
        "exampleTranslation": "เขามีประสบการณ์มากมายในด้านนี้"
    },
    {
        "word": "experienced",
        "partOfSpeech": "adjective",
        "translation": "มีประสบการณ์",
        "definition": "",
        "example": "She is an experienced teacher.",
        "exampleTranslation": "เธอเป็นครูที่มีประสบการณ์"
    },
    {
        "word": "experiment",
        "partOfSpeech": "noun",
        "translation": "(โดยเฉพาะทางวิทยาศาสตร์)การทดลองเพื่อการศึกษา",
        "definition": "",
        "example": "We did an experiment in chemistry class.",
        "exampleTranslation": "พวกเราทำการทดลองในชั้นเรียนเคมี"
    },
    {
        "word": "expert",
        "partOfSpeech": "noun",
        "translation": "ผู้เชี่ยวชาญ ชํานาญ",
        "definition": "",
        "example": "He is an expert in computer science.",
        "exampleTranslation": "เขาเป็นผู้เชี่ยวชาญด้านวิทยาการคอมพิวเตอร์"
    },
    {
        "word": "explain",
        "partOfSpeech": "noun",
        "translation": "อธิบาย",
        "definition": "",
        "example": "Can you explain this to me?",
        "exampleTranslation": "คุณช่วยอธิบายเรื่องนี้ให้ฉันฟังหน่อยได้ไหม?"
    },
    {
        "word": "explanation",
        "partOfSpeech": "noun",
        "translation": "คําอธิบาย",
        "definition": "",
        "example": "I need an explanation for this.",
        "exampleTranslation": "ฉันต้องการคำอธิบายสำหรับเรื่องนี้"
    },
    {
        "word": "explode",
        "partOfSpeech": "noun",
        "translation": "ระเบิด",
        "definition": "",
        "example": "The bomb is going to explode.",
        "exampleTranslation": "ระเบิดกำลังจะทำงาน"
    },
    {
        "word": "explore",
        "partOfSpeech": "noun",
        "translation": "สํารวจ ค้นหา",
        "definition": "",
        "example": "We went to explore the forest.",
        "exampleTranslation": "พวกเราไปสำรวจป่า"
    },
    {
        "word": "explosion",
        "partOfSpeech": "noun",
        "translation": "การระเบิด",
        "definition": "",
        "example": "There was a loud explosion.",
        "exampleTranslation": "มีเสียงระเบิดดังสนั่น"
    },
    {
        "word": "export",
        "partOfSpeech": "noun",
        "translation": "ส่งสินค้าออก .สินค้าออก การส่งสินค้าออก",
        "definition": "",
        "example": "Thailand exports rice to many countries.",
        "exampleTranslation": "ประเทศไทยส่งออกข้าวไปยังหลายประเทศ"
    },
    {
        "word": "expose",
        "partOfSpeech": "verb",
        "translation": "เผย, เปิด",
        "definition": "",
        "example": "Do not expose the film to direct sunlight.",
        "exampleTranslation": "อย่าให้ฟิล์มถูกแสงแดดโดยตรง"
    },
    {
        "word": "express",
        "partOfSpeech": "noun",
        "translation": "ด่วน",
        "definition": "",
        "example": "He expressed his thanks to everyone.",
        "exampleTranslation": "เขาแสดงความขอบคุณต่อทุกคน"
    },
    {
        "word": "expression",
        "partOfSpeech": "noun",
        "translation": "การแสดงออก",
        "definition": "",
        "example": "She had a sad expression on her face.",
        "exampleTranslation": "เธอมีสีหน้าเศร้าสร้อย"
    },
    {
        "word": "extend",
        "partOfSpeech": "noun",
        "translation": "ขยายออก ยืดออก",
        "definition": "",
        "example": "Can we extend the deadline?",
        "exampleTranslation": "เราสามารถขยายกำหนดเวลาได้ไหม?"
    },
    {
        "word": "extension",
        "partOfSpeech": "noun",
        "translation": "การขยายออก การยืดออก การแผ่ออก",
        "definition": "",
        "example": "They built an extension to their house.",
        "exampleTranslation": "พวกเขาสร้างส่วนต่อเติมของบ้าน"
    },
    {
        "word": "extensive",
        "partOfSpeech": "adjective",
        "translation": "กว้าง, ครอบคลุม",
        "definition": "",
        "example": "He has extensive knowledge of history.",
        "exampleTranslation": "เขามีความรู้ด้านประวัติศาสตร์อย่างกว้างขวาง"
    },
    {
        "word": "extent",
        "partOfSpeech": "noun",
        "translation": "ขอบเขต ขนาด",
        "definition": "",
        "example": "I agree with you to some extent.",
        "exampleTranslation": "ฉันเห็นด้วยกับคุณในระดับหนึ่ง"
    },
    {
        "word": "extra",
        "partOfSpeech": "adjective",
        "translation": "อย่างพิเศษ",
        "definition": "",
        "example": "I need an extra blanket.",
        "exampleTranslation": "ฉันต้องการผ้าห่มเพิ่ม"
    },
    {
        "word": "extraordinary",
        "partOfSpeech": "adjective",
        "translation": "พิเศษ, ผิดธรรมดา",
        "definition": "",
        "example": "She has extraordinary talent.",
        "exampleTranslation": "เธอมีความสามารถพิเศษที่ไม่ธรรมดา"
    },
    {
        "word": "extreme",
        "partOfSpeech": "noun",
        "translation": "สุดขีด",
        "definition": "",
        "example": "The weather is extreme today.",
        "exampleTranslation": "วันนี้สภาพอากาศรุนแรงมาก"
    },
    {
        "word": "extremely",
        "partOfSpeech": "adverb",
        "translation": "วิธีรุนแรง",
        "definition": "",
        "example": "It is extremely hot outside.",
        "exampleTranslation": "ข้างนอกร้อนจัดมาก"
    },
    {
        "word": "eye",
        "partOfSpeech": "noun",
        "translation": "ดวงตา",
        "definition": "",
        "example": "Close your eyes and go to sleep.",
        "exampleTranslation": "หลับตาลงและไปนอน"
    },
    {
        "word": "face",
        "partOfSpeech": "noun",
        "translation": "หน้า",
        "definition": "",
        "example": "Wash your face.",
        "exampleTranslation": "ล้างหน้าของคุณ"
    },
    {
        "word": "facility",
        "partOfSpeech": "noun",
        "translation": "สิ่งอํานวยความสะดวก",
        "definition": "",
        "example": "The hotel has great sports facilities.",
        "exampleTranslation": "โรงแรมมีสิ่งอำนวยความสะดวกด้านกีฬาที่ยอดเยี่ยม"
    },
    {
        "word": "fact",
        "partOfSpeech": "noun",
        "translation": "ความจริง ข้อเท็จจริง",
        "definition": "",
        "example": "It is a known fact that the earth is round.",
        "exampleTranslation": "เป็นข้อเท็จจริงที่ทราบกันดีว่าโลกกลม"
    },
    {
        "word": "factor",
        "partOfSpeech": "noun",
        "translation": "ปัจจัย",
        "definition": "",
        "example": "Price is an important factor.",
        "exampleTranslation": "ราคาเป็นปัจจัยสำคัญ"
    },
    {
        "word": "factory",
        "partOfSpeech": "noun",
        "translation": "โรงงาน",
        "definition": "",
        "example": "He works in a car factory.",
        "exampleTranslation": "เขาทำงานในโรงงานผลิตรถยนต์"
    },
    {
        "word": "fail",
        "partOfSpeech": "noun",
        "translation": "ล้มเหลว",
        "definition": "",
        "example": "If you do not study, you will fail the exam.",
        "exampleTranslation": "ถ้าคุณไม่อ่านหนังสือ คุณจะสอบตก"
    },
    {
        "word": "failure",
        "partOfSpeech": "noun",
        "translation": "ความล้มเหลว",
        "definition": "",
        "example": "The project was a complete failure.",
        "exampleTranslation": "โครงการนี้ล้มเหลวโดยสิ้นเชิง"
    },
    {
        "word": "faint",
        "partOfSpeech": "noun",
        "translation": "เป็นลม",
        "definition": "",
        "example": "She felt faint from the heat.",
        "exampleTranslation": "เธอรู้สึกหน้ามืดเพราะความร้อน"
    },
    {
        "word": "fair",
        "partOfSpeech": "noun",
        "translation": "ยุติธรรม เป็นธรรม",
        "definition": "",
        "example": "It is not fair!",
        "exampleTranslation": "มันไม่ยุติธรรม!"
    },
    {
        "word": "fairly",
        "partOfSpeech": "adverb",
        "translation": "อย่างตรงไปตรงมา อย่างยุติธรรม",
        "definition": "",
        "example": "He treated us fairly.",
        "exampleTranslation": "เขาปฏิบัติต่อพวกเราอย่างยุติธรรม"
    },
    {
        "word": "faith",
        "partOfSpeech": "noun",
        "translation": "ความเชื่อ",
        "definition": "",
        "example": "I have faith in you.",
        "exampleTranslation": "ฉันมีความเชื่อมั่นในตัวคุณ"
    },
    {
        "word": "faithful",
        "partOfSpeech": "noun",
        "translation": "ซื่อสัตย์",
        "definition": "",
        "example": "The dog is a faithful friend.",
        "exampleTranslation": "สุนัขเป็นเพื่อนที่ซื่อสัตย์"
    },
    {
        "word": "faithfully",
        "partOfSpeech": "adverb",
        "translation": "อย่างซื่อสัตย์ อย่างเชื่อถือได้",
        "definition": "",
        "example": "He served the company faithfully for years.",
        "exampleTranslation": "เขารับใช้บริษัทอย่างซื่อสัตย์มาหลายปี"
    },
    {
        "word": "fall",
        "partOfSpeech": "noun",
        "translation": "ตกหล่น",
        "definition": "",
        "example": "Leaves fall from the trees in autumn.",
        "exampleTranslation": "ใบไม้ร่วงจากต้นไม้ในฤดูใบไม้ร่วง"
    },
    {
        "word": "false",
        "partOfSpeech": "adjective",
        "translation": "ปลอม เท็จ",
        "definition": "",
        "example": "That statement is false.",
        "exampleTranslation": "คำกล่าวนั้นเป็นเท็จ"
    },
    {
        "word": "fame",
        "partOfSpeech": "noun",
        "translation": "ชื่อเสียง",
        "definition": "",
        "example": "He achieved wealth and fame.",
        "exampleTranslation": "เขาประสบความสำเร็จทั้งความมั่งคั่งและชื่อเสียง"
    },
    {
        "word": "familiar",
        "partOfSpeech": "adjective",
        "translation": "คุ้นเคย",
        "definition": "",
        "example": "Her face looks familiar.",
        "exampleTranslation": "ใบหน้าของเธอคุ้นตามาก"
    },
    {
        "word": "family",
        "partOfSpeech": "noun",
        "translation": "ครอบครัว",
        "definition": "",
        "example": "I have a large family.",
        "exampleTranslation": "ฉันมีครอบครัวใหญ่"
    },
    {
        "word": "famous",
        "partOfSpeech": "adjective",
        "translation": "มี ชื่อเสียง",
        "definition": "",
        "example": "He is a famous actor.",
        "exampleTranslation": "เขาเป็นนักแสดงที่มีชื่อเสียง"
    },
    {
        "word": "fan",
        "partOfSpeech": "noun",
        "translation": "พัดลม",
        "definition": "",
        "example": "I am a big fan of this band.",
        "exampleTranslation": "ฉันเป็นแฟนตัวยงของวงดนตรีนี้"
    },
    {
        "word": "fancy",
        "partOfSpeech": "noun",
        "translation": "จินตนาการ หรูหรา",
        "definition": "",
        "example": "We went to a fancy restaurant.",
        "exampleTranslation": "พวกเราไปร้านอาหารหรู"
    },
    {
        "word": "far",
        "partOfSpeech": "adverb",
        "translation": "ไกล",
        "definition": "",
        "example": "The station is not far from here.",
        "exampleTranslation": "สถานีอยู่ไม่ไกลจากที่นี่"
    },
    {
        "word": "farm",
        "partOfSpeech": "noun",
        "translation": "ฟาร์ม ไร่",
        "definition": "",
        "example": "They live on a farm.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในฟาร์ม"
    },
    {
        "word": "farmer",
        "partOfSpeech": "noun",
        "translation": "ชาวนา",
        "definition": "",
        "example": "The farmer is feeding the cows.",
        "exampleTranslation": "ชาวนากำลังให้อาหารวัว"
    },
    {
        "word": "farming",
        "partOfSpeech": "verb",
        "translation": "การทําไร่ การทํานา การทําฟาร์ม",
        "definition": "",
        "example": "Farming is hard work.",
        "exampleTranslation": "การทำฟาร์มเป็นงานหนัก"
    },
    {
        "word": "farther",
        "partOfSpeech": "noun",
        "translation": "ไกลออกไป",
        "definition": "",
        "example": "I cannot walk any farther.",
        "exampleTranslation": "ฉันเดินไปไกลกว่านี้ไม่ได้แล้ว"
    },
    {
        "word": "farthest",
        "partOfSpeech": "noun",
        "translation": "ไกลที่สุด ห่างที่สุด มากที่สุด",
        "definition": "",
        "example": "Which planet is the farthest from the sun?",
        "exampleTranslation": "ดาวเคราะห์ดวงใดอยู่ไกลจากดวงอาทิตย์มากที่สุด?"
    },
    {
        "word": "fashion",
        "partOfSpeech": "noun",
        "translation": "แฟชั่น",
        "definition": "",
        "example": "She is interested in fashion.",
        "exampleTranslation": "เธอสนใจเรื่องแฟชั่น"
    },
    {
        "word": "fashionable",
        "partOfSpeech": "adjective",
        "translation": "ทันสมัย",
        "definition": "",
        "example": "She always wears fashionable clothes.",
        "exampleTranslation": "เธอมักจะสวมเสื้อผ้าที่ทันสมัยเสมอ"
    },
    {
        "word": "fast",
        "partOfSpeech": "noun",
        "translation": "เร็ว",
        "definition": "",
        "example": "He runs very fast.",
        "exampleTranslation": "เขาวิ่งเร็วมาก"
    },
    {
        "word": "fasten",
        "partOfSpeech": "noun",
        "translation": "ยึด",
        "definition": "",
        "example": "Fasten your seat belt.",
        "exampleTranslation": "คาดเข็มขัดนิรภัย"
    },
    {
        "word": "fat",
        "partOfSpeech": "noun",
        "translation": "อ้วน",
        "definition": "",
        "example": "This cat is very fat.",
        "exampleTranslation": "แมวตัวนี้อ้วนมาก"
    },
    {
        "word": "father",
        "partOfSpeech": "noun",
        "translation": "พ่อ",
        "definition": "",
        "example": "My father is a doctor.",
        "exampleTranslation": "พ่อของฉันเป็นหมอ"
    },
    {
        "word": "faucet",
        "partOfSpeech": "noun",
        "translation": "ก๊อกไขนํ้า หัวก๊อก",
        "definition": "",
        "example": "Turn off the faucet.",
        "exampleTranslation": "ปิดก๊อกน้ำ"
    },
    {
        "word": "fault",
        "partOfSpeech": "noun",
        "translation": "ความผิด",
        "definition": "",
        "example": "It is not my fault.",
        "exampleTranslation": "มันไม่ใช่ความผิดของฉัน"
    },
    {
        "word": "favour",
        "partOfSpeech": "noun",
        "translation": "อุปถัมภ์ ความกรุณา การเข้าข้าง",
        "definition": "",
        "example": "Can you do me a favour?",
        "exampleTranslation": "คุณช่วยอะไรฉันหน่อยได้ไหม?"
    },
    {
        "word": "favourite",
        "partOfSpeech": "noun",
        "translation": "คนโปรด ของโปรด",
        "definition": "",
        "example": "Blue is my favourite colour.",
        "exampleTranslation": "สีฟ้าคือสีโปรดของฉัน"
    },
    {
        "word": "fear",
        "partOfSpeech": "noun",
        "translation": "กลัว",
        "definition": "",
        "example": "He has a fear of spiders.",
        "exampleTranslation": "เขามีความกลัวแมงมุม"
    },
    {
        "word": "feather",
        "partOfSpeech": "noun",
        "translation": "ขนนก",
        "definition": "",
        "example": "The bird has blue feathers.",
        "exampleTranslation": "นกมีขนนกสีฟ้า"
    },
    {
        "word": "feature",
        "partOfSpeech": "noun",
        "translation": "หน้าตา, ลักษณะโฉมหน้า",
        "definition": "",
        "example": "The new phone has many great features.",
        "exampleTranslation": "โทรศัพท์ใหม่มีคุณสมบัติที่ยอดเยี่ยมมากมาย"
    },
    {
        "word": "February",
        "partOfSpeech": "noun",
        "translation": "กุมภาพันธ์",
        "definition": "",
        "example": "February is the shortest month.",
        "exampleTranslation": "เดือนกุมภาพันธ์เป็นเดือนที่สั้นที่สุด"
    },
    {
        "word": "federal",
        "partOfSpeech": "adjective",
        "translation": "สหพันธรัฐ",
        "definition": "",
        "example": "He works for the federal government.",
        "exampleTranslation": "เขาทำงานให้กับรัฐบาลกลาง"
    },
    {
        "word": "fee",
        "partOfSpeech": "noun",
        "translation": "ค่าธรรมเนียม",
        "definition": "",
        "example": "You must pay an entrance fee.",
        "exampleTranslation": "คุณต้องจ่ายค่าเข้าชม"
    },
    {
        "word": "feed",
        "partOfSpeech": "noun",
        "translation": "กิน, ให้อาหาร",
        "definition": "",
        "example": "Did you feed the dog?",
        "exampleTranslation": "คุณให้อาหารสุนัขหรือยัง?"
    },
    {
        "word": "feel",
        "partOfSpeech": "noun",
        "translation": "แตะ, สัมผัส",
        "definition": "",
        "example": "I feel happy today.",
        "exampleTranslation": "วันนี้ฉันรู้สึกมีความสุข"
    },
    {
        "word": "feeling",
        "partOfSpeech": "verb",
        "translation": "ความรู้สึก",
        "definition": "",
        "example": "I have a bad feeling about this.",
        "exampleTranslation": "ฉันมีความรู้สึกไม่ดีเกี่ยวกับเรื่องนี้"
    },
    {
        "word": "fellow",
        "partOfSpeech": "noun",
        "translation": "เพื่อน",
        "definition": "",
        "example": "He is a good fellow.",
        "exampleTranslation": "เขาเป็นคนดี"
    },
    {
        "word": "female",
        "partOfSpeech": "noun",
        "translation": "เพศหญิง",
        "definition": "",
        "example": "The group consists of three male and two female students.",
        "exampleTranslation": "กลุ่มประกอบด้วยนักเรียนชายสามคนและนักเรียนหญิงสองคน"
    },
    {
        "word": "fence",
        "partOfSpeech": "noun",
        "translation": "รั้ว",
        "definition": "",
        "example": "He climbed over the fence.",
        "exampleTranslation": "เขาปีนข้ามรั้ว"
    },
    {
        "word": "festival",
        "partOfSpeech": "noun",
        "translation": "เทศกาล, งานนักขัตฤกษ์",
        "definition": "",
        "example": "We went to the music festival.",
        "exampleTranslation": "พวกเราไปงานเทศกาลดนตรี"
    },
    {
        "word": "fetch",
        "partOfSpeech": "noun",
        "translation": "ไปเอามา, ไปหยิบมา",
        "definition": "",
        "example": "Can you fetch my glasses?",
        "exampleTranslation": "คุณช่วยไปหยิบแว่นตาให้ฉันได้ไหม?"
    },
    {
        "word": "fever",
        "partOfSpeech": "noun",
        "translation": "ไข้",
        "definition": "",
        "example": "He has a high fever.",
        "exampleTranslation": "เขามีไข้สูง"
    },
    {
        "word": "few",
        "partOfSpeech": "adjective",
        "translation": "น้อยมาก สองสาม",
        "definition": "",
        "example": "I have a few friends in London.",
        "exampleTranslation": "ฉันมีเพื่อนสองสามคนในลอนดอน"
    },
    {
        "word": "field",
        "partOfSpeech": "noun",
        "translation": "ทุ่งนา สนาม",
        "definition": "",
        "example": "The cows are in the field.",
        "exampleTranslation": "วัวอยู่ในทุ่งหญ้า"
    },
    {
        "word": "fifteen",
        "partOfSpeech": "noun",
        "translation": "สิบห้า",
        "definition": "",
        "example": "I have fifteen dollars.",
        "exampleTranslation": "ฉันมีเงินสิบห้าดอลลาร์"
    },
    {
        "word": "fifth",
        "partOfSpeech": "noun",
        "translation": "ที่ห้า",
        "definition": "",
        "example": "Today is her fifth birthday.",
        "exampleTranslation": "วันนี้เป็นวันเกิดปีที่ห้าของเธอ"
    },
    {
        "word": "fifty",
        "partOfSpeech": "noun",
        "translation": "ห้าสิบ",
        "definition": "",
        "example": "She gave me fifty baht.",
        "exampleTranslation": "เธอให้เงินฉันห้าสิบบาท"
    },
    {
        "word": "fight",
        "partOfSpeech": "noun",
        "translation": "ต่อสู้",
        "definition": "",
        "example": "Do not fight with your brother.",
        "exampleTranslation": "อย่าทะเลาะกับน้องชายของคุณ"
    },
    {
        "word": "figure",
        "partOfSpeech": "noun",
        "translation": "รูปร่าง ตัวเลขคํานวณ",
        "definition": "",
        "example": "Write the figure on the board.",
        "exampleTranslation": "เขียนตัวเลขบนกระดาน"
    },
    {
        "word": "file",
        "partOfSpeech": "noun",
        "translation": "แฟ้มเอกสาร",
        "definition": "",
        "example": "Put this paper in the file.",
        "exampleTranslation": "เก็บกระดาษแผ่นนี้ไว้ในแฟ้ม"
    },
    {
        "word": "fill",
        "partOfSpeech": "noun",
        "translation": "เติม",
        "definition": "",
        "example": "Fill the glass with water.",
        "exampleTranslation": "เติมน้ำให้เต็มแก้ว"
    },
    {
        "word": "film",
        "partOfSpeech": "noun",
        "translation": "ฟิล์ม",
        "definition": "",
        "example": "We watched a good film last night.",
        "exampleTranslation": "พวกเราดูภาพยนตร์ที่ดีเรื่องหนึ่งเมื่อคืนนี้"
    },
    {
        "word": "final",
        "partOfSpeech": "adjective",
        "translation": "สุดท้าย",
        "definition": "",
        "example": "This is the final exam.",
        "exampleTranslation": "นี่คือการสอบปลายภาค"
    },
    {
        "word": "finally",
        "partOfSpeech": "adverb",
        "translation": "ในที่สุด",
        "definition": "",
        "example": "Finally, the rain stopped.",
        "exampleTranslation": "ในที่สุด ฝนก็หยุดตก"
    },
    {
        "word": "finance",
        "partOfSpeech": "verb",
        "translation": "การเงิน . จัดเงินทุนให้แก่",
        "definition": "",
        "example": "He works in finance.",
        "exampleTranslation": "เขาทำงานด้านการเงิน"
    },
    {
        "word": "financial",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับการเงิน การคลัง การทุน",
        "definition": "",
        "example": "The company is in financial trouble.",
        "exampleTranslation": "บริษัทกำลังประสบปัญหาทางการเงิน"
    },
    {
        "word": "find",
        "partOfSpeech": "verb",
        "translation": "หา พบ",
        "definition": "",
        "example": "I cannot find my keys.",
        "exampleTranslation": "ฉันหากุญแจของฉันไม่เจอ"
    },
    {
        "word": "fine",
        "partOfSpeech": "noun",
        "translation": "ดี",
        "definition": "",
        "example": "I am feeling fine today.",
        "exampleTranslation": "วันนี้ฉันรู้สึกสบายดี"
    },
    {
        "word": "finely",
        "partOfSpeech": "adverb",
        "translation": "อย่างละเอียด ประณีต สวยงาม",
        "definition": "",
        "example": "Chop the onions finely.",
        "exampleTranslation": "สับหัวหอมให้ละเอียด"
    },
    {
        "word": "finger",
        "partOfSpeech": "noun",
        "translation": "นิ้วมือ",
        "definition": "",
        "example": "She cut her finger.",
        "exampleTranslation": "เธอถูกมีดบาดนิ้ว"
    },
    {
        "word": "finish",
        "partOfSpeech": "noun",
        "translation": "ทําให้สิ้นสุด, เสร็จ",
        "definition": "",
        "example": "Let me finish my work first.",
        "exampleTranslation": "ให้ฉันทำงานให้เสร็จก่อน"
    },
    {
        "word": "finished",
        "partOfSpeech": "verb",
        "translation": "ยุติ ที่เสร็จเรียบร้อย(ผลิตภัณฑ์)",
        "definition": "",
        "example": "Are you finished?",
        "exampleTranslation": "คุณทำเสร็จหรือยัง?"
    },
    {
        "word": "fire",
        "partOfSpeech": "noun",
        "translation": "ยิง จุดไฟ",
        "definition": "",
        "example": "We sat around the fire.",
        "exampleTranslation": "พวกเรานั่งล้อมรอบกองไฟ"
    },
    {
        "word": "firm",
        "partOfSpeech": "noun",
        "translation": "บริษัท",
        "definition": "",
        "example": "He works for a law firm.",
        "exampleTranslation": "เขาทำงานให้กับบริษัทกฎหมาย"
    },
    {
        "word": "firmly",
        "partOfSpeech": "adverb",
        "translation": "อย่างหนักแน่น",
        "definition": "",
        "example": "Hold the rope firmly.",
        "exampleTranslation": "จับเชือกไว้ให้แน่น"
    },
    {
        "word": "first",
        "partOfSpeech": "adverb",
        "translation": "แรก ที่หนึ่ง",
        "definition": "",
        "example": "Who was the first person to arrive?",
        "exampleTranslation": "ใครเป็นคนแรกที่มาถึง?"
    },
    {
        "word": "fish",
        "partOfSpeech": "noun",
        "translation": "ปลา",
        "definition": "",
        "example": "We caught a big fish.",
        "exampleTranslation": "พวกเราจับปลาตัวใหญ่ได้"
    },
    {
        "word": "fishing",
        "partOfSpeech": "noun",
        "translation": "การจับปลา",
        "definition": "",
        "example": "We went fishing yesterday.",
        "exampleTranslation": "พวกเราไปตกปลาเมื่อวานนี้"
    },
    {
        "word": "fit",
        "partOfSpeech": "noun",
        "translation": "เหมาะสม สอดคล้อง",
        "definition": "",
        "example": "These shoes do not fit me.",
        "exampleTranslation": "รองเท้าคู่นี้ไม่พอดีกับฉัน"
    },
    {
        "word": "five",
        "partOfSpeech": "noun",
        "translation": "ห้า",
        "definition": "",
        "example": "I have five dogs.",
        "exampleTranslation": "ฉันมีสุนัขห้าตัว"
    },
    {
        "word": "fix",
        "partOfSpeech": "noun",
        "translation": "แก้ไขปัญหา",
        "definition": "",
        "example": "Can you fix my computer?",
        "exampleTranslation": "คุณซ่อมคอมพิวเตอร์ให้ฉันได้ไหม?"
    },
    {
        "word": "fixed",
        "partOfSpeech": "verb",
        "translation": "ติดแน่น ซึ่งได้กําหนดไว้",
        "definition": "",
        "example": "The price is fixed.",
        "exampleTranslation": "ราคาถูกกำหนดไว้แล้ว"
    },
    {
        "word": "flag",
        "partOfSpeech": "noun",
        "translation": "ธง",
        "definition": "",
        "example": "The flag is red, white, and blue.",
        "exampleTranslation": "ธงมีสีแดง สีขาว และสีน้ำเงิน"
    },
    {
        "word": "flame",
        "partOfSpeech": "noun",
        "translation": "เปลวไฟ",
        "definition": "",
        "example": "The candle flame flickered.",
        "exampleTranslation": "เปลวเทียนสั่นไหว"
    },
    {
        "word": "flash",
        "partOfSpeech": "noun",
        "translation": "แสงวาบ",
        "definition": "",
        "example": "I saw a flash of lightning.",
        "exampleTranslation": "ฉันเห็นฟ้าแลบ"
    },
    {
        "word": "flat",
        "partOfSpeech": "adjective",
        "translation": "แบน, ราบ",
        "definition": "",
        "example": "The world is not flat.",
        "exampleTranslation": "โลกไม่ได้แบน"
    },
    {
        "word": "flavour",
        "partOfSpeech": "noun",
        "translation": "รสชาติ ปรุงรส",
        "definition": "",
        "example": "Which flavour of ice cream do you want?",
        "exampleTranslation": "คุณต้องการไอศกรีมรสอะไร?"
    },
    {
        "word": "flesh",
        "partOfSpeech": "noun",
        "translation": "เนื้อ",
        "definition": "",
        "example": "The flesh of the fruit is sweet.",
        "exampleTranslation": "เนื้อของผลไม้นี้มีรสหวาน"
    },
    {
        "word": "flight",
        "partOfSpeech": "noun",
        "translation": "เที่ยวบิน",
        "definition": "",
        "example": "Have a safe flight.",
        "exampleTranslation": "ขอให้เดินทางโดยสวัสดิภาพ"
    },
    {
        "word": "float",
        "partOfSpeech": "noun",
        "translation": "ลอย",
        "definition": "",
        "example": "Wood floats on water.",
        "exampleTranslation": "ไม้ลอยน้ำ"
    },
    {
        "word": "flood",
        "partOfSpeech": "noun",
        "translation": "นํ้าท่วม",
        "definition": "",
        "example": "The heavy rain caused a flood.",
        "exampleTranslation": "ฝนตกหนักทำให้เกิดน้ำท่วม"
    },
    {
        "word": "floor",
        "partOfSpeech": "noun",
        "translation": "พื้น",
        "definition": "",
        "example": "The keys fell on the floor.",
        "exampleTranslation": "กุญแจตกลงบนพื้น"
    },
    {
        "word": "flour",
        "partOfSpeech": "noun",
        "translation": "แป้ง",
        "definition": "",
        "example": "We need flour to bake a cake.",
        "exampleTranslation": "พวกเราต้องใช้แป้งเพื่ออบเค้ก"
    },
    {
        "word": "flow",
        "partOfSpeech": "noun",
        "translation": "ไหล",
        "definition": "",
        "example": "The river flows into the sea.",
        "exampleTranslation": "แม่น้ำไหลลงสู่ทะเล"
    },
    {
        "word": "flower",
        "partOfSpeech": "noun",
        "translation": "ดอกไม้",
        "definition": "",
        "example": "He gave her a red flower.",
        "exampleTranslation": "เขามอบดอกไม้สีแดงให้เธอ"
    },
    {
        "word": "flu",
        "partOfSpeech": "noun",
        "translation": "ไข้หวัดใหญ่",
        "definition": "",
        "example": "She is in bed with the flu.",
        "exampleTranslation": "เธอนอนซมอยู่บนเตียงเพราะไข้หวัดใหญ่"
    },
    {
        "word": "fly",
        "partOfSpeech": "noun",
        "translation": "บิน",
        "definition": "",
        "example": "The bird can fly very high.",
        "exampleTranslation": "นกสามารถบินได้สูงมาก"
    },
    {
        "word": "flying",
        "partOfSpeech": "verb",
        "translation": "ซึ่งบิน การบิน",
        "definition": "",
        "example": "I am afraid of flying.",
        "exampleTranslation": "ฉันกลัวการขึ้นเครื่องบิน"
    },
    {
        "word": "focus",
        "partOfSpeech": "noun",
        "translation": "จุดรวมแสง จุดความสนใจ จุดศูนย์รวม",
        "definition": "",
        "example": "Try to focus on your studies.",
        "exampleTranslation": "พยายามจดจ่อกับการเรียนของคุณ"
    },
    {
        "word": "fold",
        "partOfSpeech": "noun",
        "translation": "พับ",
        "definition": "",
        "example": "Please fold the paper in half.",
        "exampleTranslation": "โปรดพับกระดาษครึ่งหนึ่ง"
    },
    {
        "word": "follow",
        "partOfSpeech": "verb",
        "translation": "ติดตาม",
        "definition": "",
        "example": "Follow me, please.",
        "exampleTranslation": "ตามฉันมา โปรด"
    },
    {
        "word": "following",
        "partOfSpeech": "verb",
        "translation": "กลุ่มผู้ติดตาม กลุ่มผู้สนับสนุน",
        "definition": "",
        "example": "Answer the following questions.",
        "exampleTranslation": "ตอบคำถามต่อไปนี้"
    },
    {
        "word": "food",
        "partOfSpeech": "noun",
        "translation": "อาหาร",
        "definition": "",
        "example": "Thai food is very spicy.",
        "exampleTranslation": "อาหารไทยมีรสเผ็ดมาก"
    },
    {
        "word": "foot",
        "partOfSpeech": "noun",
        "translation": "เท้า, ปลาย",
        "definition": "",
        "example": "He stepped on my foot.",
        "exampleTranslation": "เขาเหยียบเท้าของฉัน"
    },
    {
        "word": "football",
        "partOfSpeech": "noun",
        "translation": "ฟุตบอล",
        "definition": "",
        "example": "Let us play football!",
        "exampleTranslation": "ไปเล่นฟุตบอลกันเถอะ!"
    },
    {
        "word": "for",
        "partOfSpeech": "noun",
        "translation": "เพื่อ",
        "definition": "",
        "example": "This gift is for you.",
        "exampleTranslation": "ของขวัญชิ้นนี้สำหรับคุณ"
    },
    {
        "word": "force",
        "partOfSpeech": "noun",
        "translation": "บังคับ ผลักดัน",
        "definition": "",
        "example": "Do not force him to eat.",
        "exampleTranslation": "อย่าบังคับให้เขากิน"
    },
    {
        "word": "forecast",
        "partOfSpeech": "noun",
        "translation": "ทํานาย พยากรณ์",
        "definition": "",
        "example": "The weather forecast says it will rain.",
        "exampleTranslation": "พยากรณ์อากาศบอกว่าฝนจะตก"
    },
    {
        "word": "foreign",
        "partOfSpeech": "adjective",
        "translation": "ต่างประเทศ",
        "definition": "",
        "example": "He speaks three foreign languages.",
        "exampleTranslation": "เขาพูดได้สามภาษาต่างประเทศ"
    },
    {
        "word": "forest",
        "partOfSpeech": "noun",
        "translation": "ป่า",
        "definition": "",
        "example": "There are many trees in the forest.",
        "exampleTranslation": "มีต้นไม้มากมายในป่า"
    },
    {
        "word": "forever",
        "partOfSpeech": "adverb",
        "translation": "ตลอดไป นิรันดร",
        "definition": "",
        "example": "I will love you forever.",
        "exampleTranslation": "ฉันจะรักคุณตลอดไป"
    },
    {
        "word": "forget",
        "partOfSpeech": "noun",
        "translation": "ลืม",
        "definition": "",
        "example": "Do not forget your umbrella.",
        "exampleTranslation": "อย่าลืมร่มของคุณนะ"
    },
    {
        "word": "forgive",
        "partOfSpeech": "adjective",
        "translation": "ยกโทษให้",
        "definition": "",
        "example": "Please forgive me.",
        "exampleTranslation": "โปรดยกโทษให้ฉันด้วย"
    },
    {
        "word": "fork",
        "partOfSpeech": "noun",
        "translation": "ส้อม",
        "definition": "",
        "example": "Can I have a knife and fork?",
        "exampleTranslation": "ฉันขอมีดและส้อมได้ไหม?"
    },
    {
        "word": "form",
        "partOfSpeech": "noun",
        "translation": "แบบฟอร์ม",
        "definition": "",
        "example": "Fill out this application form.",
        "exampleTranslation": "กรอกใบสมัครนี้"
    },
    {
        "word": "formal",
        "partOfSpeech": "adjective",
        "translation": "เป็นทางการ",
        "definition": "",
        "example": "You must wear formal clothes.",
        "exampleTranslation": "คุณต้องสวมชุดทางการ"
    },
    {
        "word": "former",
        "partOfSpeech": "adjective",
        "translation": "อดีต",
        "definition": "",
        "example": "He is the former president.",
        "exampleTranslation": "เขาเป็นอดีตประธานาธิบดี"
    },
    {
        "word": "formerly",
        "partOfSpeech": "adverb",
        "translation": "เดิม",
        "definition": "",
        "example": "The country was formerly known as Siam.",
        "exampleTranslation": "ประเทศนี้เคยเป็นที่รู้จักในชื่อสยาม"
    },
    {
        "word": "formula",
        "partOfSpeech": "noun",
        "translation": "สูตร",
        "definition": "",
        "example": "What is the formula for water?",
        "exampleTranslation": "สูตรของน้ำคืออะไร?"
    },
    {
        "word": "fortune",
        "partOfSpeech": "noun",
        "translation": "โชคดี",
        "definition": "",
        "example": "He made a fortune in business.",
        "exampleTranslation": "เขาทำเงินได้มหาศาลจากธุรกิจ"
    },
    {
        "word": "forty",
        "partOfSpeech": "noun",
        "translation": "สี่สิบ",
        "definition": "",
        "example": "She is forty years old.",
        "exampleTranslation": "เธออายุสี่สิบปี"
    },
    {
        "word": "forward",
        "partOfSpeech": "verb",
        "translation": "ไปข้างหน้า, ข้างหน้า",
        "definition": "",
        "example": "Please step forward.",
        "exampleTranslation": "โปรดก้าวไปข้างหน้า"
    },
    {
        "word": "found",
        "partOfSpeech": "noun",
        "translation": "ก่อตั้ง สร้าง",
        "definition": "",
        "example": "They found the lost dog.",
        "exampleTranslation": "พวกเขาพบสุนัขที่หลงทางแล้ว"
    },
    {
        "word": "foundation",
        "partOfSpeech": "noun",
        "translation": "รากฐาน มูลนิธิ",
        "definition": "",
        "example": "The house has a strong foundation.",
        "exampleTranslation": "บ้านมีรากฐานที่แข็งแรง"
    },
    {
        "word": "four",
        "partOfSpeech": "noun",
        "translation": "สี่",
        "definition": "",
        "example": "A square has four sides.",
        "exampleTranslation": "รูปสี่เหลี่ยมจัตุรัสมีสี่ด้าน"
    },
    {
        "word": "fourteen",
        "partOfSpeech": "noun",
        "translation": "สิบสี่",
        "definition": "",
        "example": "I was fourteen when we moved.",
        "exampleTranslation": "ฉันอายุสิบสี่ปีตอนที่พวกเราย้ายบ้าน"
    },
    {
        "word": "fourth",
        "partOfSpeech": "adjective",
        "translation": "ที่สี่",
        "definition": "",
        "example": "He is the fourth person in line.",
        "exampleTranslation": "เขาเป็นคนที่สี่ในแถว"
    },
    {
        "word": "frame",
        "partOfSpeech": "noun",
        "translation": "กรอบ โครง",
        "definition": "",
        "example": "The picture has a wooden frame.",
        "exampleTranslation": "รูปภาพมีกรอบไม้"
    },
    {
        "word": "free",
        "partOfSpeech": "adjective",
        "translation": "อิสระ",
        "definition": "",
        "example": "Is this seat free?",
        "exampleTranslation": "ที่นั่งนี้ว่างไหม?"
    },
    {
        "word": "freedom",
        "partOfSpeech": "noun",
        "translation": "เสรีภาพ",
        "definition": "",
        "example": "Everyone has the right to freedom.",
        "exampleTranslation": "ทุกคนมีสิทธิในเสรีภาพ"
    },
    {
        "word": "freely",
        "partOfSpeech": "adverb",
        "translation": "อย่างอิสระ",
        "definition": "",
        "example": "Animals roam freely in the park.",
        "exampleTranslation": "สัตว์เดินเตร่ไปมาอย่างอิสระในสวน"
    },
    {
        "word": "freeze",
        "partOfSpeech": "noun",
        "translation": "แช่แข็ง",
        "definition": "",
        "example": "Water freezes at 0 degrees Celsius.",
        "exampleTranslation": "น้ำแข็งตัวที่ 0 องศาเซลเซียส"
    },
    {
        "word": "frequent",
        "partOfSpeech": "noun",
        "translation": "บ่อย",
        "definition": "",
        "example": "There are frequent buses to the city.",
        "exampleTranslation": "มีรถประจำทางเข้าเมืองบ่อยครั้ง"
    },
    {
        "word": "frequently",
        "partOfSpeech": "adverb",
        "translation": "บ่อย, หลายครั้ง",
        "definition": "",
        "example": "He travels frequently for work.",
        "exampleTranslation": "เขาเดินทางบ่อยมากเพื่อทำงาน"
    },
    {
        "word": "fresh",
        "partOfSpeech": "adjective",
        "translation": "สด, ใหม่",
        "definition": "",
        "example": "I bought some fresh vegetables.",
        "exampleTranslation": "ฉันซื้อผักสดมาบ้าง"
    },
    {
        "word": "Friday",
        "partOfSpeech": "noun",
        "translation": "วันศุกร์",
        "definition": "",
        "example": "The meeting is on Friday.",
        "exampleTranslation": "การประชุมมีขึ้นในวันศุกร์"
    },
    {
        "word": "fridge",
        "partOfSpeech": "noun",
        "translation": "ตู้เย็น",
        "definition": "",
        "example": "Put the milk in the fridge.",
        "exampleTranslation": "ใส่นมไว้ในตู้เย็น"
    },
    {
        "word": "friend",
        "partOfSpeech": "noun",
        "translation": "เพื่อน",
        "definition": "",
        "example": "He is my best friend.",
        "exampleTranslation": "เขาเป็นเพื่อนสนิทของฉัน"
    },
    {
        "word": "friendly",
        "partOfSpeech": "adverb",
        "translation": "เป็นมิตร",
        "definition": "",
        "example": "She has a friendly smile.",
        "exampleTranslation": "เธอมีรอยยิ้มที่เป็นมิตร"
    },
    {
        "word": "friendship",
        "partOfSpeech": "noun",
        "translation": "มิตรภาพ",
        "definition": "",
        "example": "Our friendship is very important to me.",
        "exampleTranslation": "มิตรภาพของเราสำคัญต่อฉันมาก"
    },
    {
        "word": "frighten",
        "partOfSpeech": "noun",
        "translation": "ขู่",
        "definition": "",
        "example": "Do not frighten the children.",
        "exampleTranslation": "อย่าทำให้เด็กๆ ตกใจกลัว"
    },
    {
        "word": "frightened",
        "partOfSpeech": "verb",
        "translation": "ตกใจ สะดุ้งตกใจกลัว",
        "definition": "",
        "example": "I am frightened of spiders.",
        "exampleTranslation": "ฉันกลัวแมงมุม"
    },
    {
        "word": "frightening",
        "partOfSpeech": "verb",
        "translation": "น่ากลัว",
        "definition": "",
        "example": "The storm was very frightening.",
        "exampleTranslation": "พายุน่ากลัวมาก"
    },
    {
        "word": "from",
        "partOfSpeech": "noun",
        "translation": "จาก",
        "definition": "",
        "example": "I am from Thailand.",
        "exampleTranslation": "ฉันมาจากประเทศไทย"
    },
    {
        "word": "front",
        "partOfSpeech": "noun",
        "translation": "ตอนหน้า แถวหน้า",
        "definition": "",
        "example": "Please come to the front.",
        "exampleTranslation": "โปรดออกมาข้างหน้า"
    },
    {
        "word": "frozen",
        "partOfSpeech": "noun",
        "translation": "แข็งตัวเนื่องจากความเย็นจัด",
        "definition": "",
        "example": "I bought some frozen peas.",
        "exampleTranslation": "ฉันซื้อถั่วลันเตาแช่แข็ง"
    },
    {
        "word": "fruit",
        "partOfSpeech": "noun",
        "translation": "ผลไม้",
        "definition": "",
        "example": "Eating fresh fruit is good for you.",
        "exampleTranslation": "การกินผลไม้สดดีต่อสุขภาพของคุณ"
    },
    {
        "word": "fry",
        "partOfSpeech": "noun",
        "translation": "ทอด ทอดนํ้ามัน",
        "definition": "",
        "example": "Fry the eggs in oil.",
        "exampleTranslation": "ทอดไข่ในน้ำมัน"
    },
    {
        "word": "fuel",
        "partOfSpeech": "noun",
        "translation": "เชื้อเพลิง",
        "definition": "",
        "example": "The car has run out of fuel.",
        "exampleTranslation": "รถน้ำมันหมดแล้ว"
    },
    {
        "word": "full",
        "partOfSpeech": "adjective",
        "translation": "เต็ม เต็มที่ อวบอัด",
        "definition": "",
        "example": "The glass is full of water.",
        "exampleTranslation": "แก้วมีน้ำเต็ม"
    },
    {
        "word": "fully",
        "partOfSpeech": "adverb",
        "translation": "เต็มที่ เต็ม คับ ตื้นเขิน",
        "definition": "",
        "example": "I fully agree with you.",
        "exampleTranslation": "ฉันเห็นด้วยกับคุณอย่างเต็มที่"
    },
    {
        "word": "fun",
        "partOfSpeech": "noun",
        "translation": "ความสนุกสนาน ความขบขัน",
        "definition": "",
        "example": "We had a lot of fun at the party.",
        "exampleTranslation": "พวกเราสนุกกันมากที่งานปาร์ตี้"
    },
    {
        "word": "function",
        "partOfSpeech": "noun",
        "translation": "หน้าที่ งานเลี้ยงขนาดใหญ่",
        "definition": "",
        "example": "What is the function of this button?",
        "exampleTranslation": "ปุ่มนี้มีหน้าที่ทำอะไร?"
    },
    {
        "word": "fund",
        "partOfSpeech": "verb",
        "translation": "เงินทุน, ทุน",
        "definition": "",
        "example": "The project needs more funds.",
        "exampleTranslation": "โครงการนี้ต้องการเงินทุนเพิ่ม"
    },
    {
        "word": "fundamental",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งเกี่ยวกับรากฐาน รากฐาน",
        "definition": "",
        "example": "Freedom of speech is a fundamental human right.",
        "exampleTranslation": "เสรีภาพในการพูดเป็นสิทธิมนุษยชนขั้นพื้นฐาน"
    },
    {
        "word": "funeral",
        "partOfSpeech": "adjective",
        "translation": "งานศพ",
        "definition": "",
        "example": "Many people attended his funeral.",
        "exampleTranslation": "มีผู้คนมากมายมาร่วมงานศพของเขา"
    },
    {
        "word": "funny",
        "partOfSpeech": "noun",
        "translation": "น่าขบขัน ตลก",
        "definition": "",
        "example": "He told a very funny joke.",
        "exampleTranslation": "เขาเล่าเรื่องตลกที่ตลกมาก"
    },
    {
        "word": "fur",
        "partOfSpeech": "noun",
        "translation": "ขนสัตว์ เสื้อผ้าขนสัตว์",
        "definition": "",
        "example": "The cat has soft white fur.",
        "exampleTranslation": "แมวมีขนสีขาวนุ่ม"
    },
    {
        "word": "furniture",
        "partOfSpeech": "noun",
        "translation": "เฟอร์นิเจอร์",
        "definition": "",
        "example": "We bought some new furniture for the living room.",
        "exampleTranslation": "พวกเราซื้อเฟอร์นิเจอร์ใหม่สำหรับห้องนั่งเล่น"
    },
    {
        "word": "further",
        "partOfSpeech": "adverb",
        "translation": "ต่อไป",
        "definition": "",
        "example": "We need to discuss this further.",
        "exampleTranslation": "พวกเราต้องหารือเรื่องนี้เพิ่มเติม"
    },
    {
        "word": "future",
        "partOfSpeech": "noun",
        "translation": "อนาคต",
        "definition": "",
        "example": "Think about your future.",
        "exampleTranslation": "คิดถึงอนาคตของคุณสิ"
    },
    {
        "word": "gain",
        "partOfSpeech": "noun",
        "translation": "ได้รับ",
        "definition": "",
        "example": "She gained a lot of experience.",
        "exampleTranslation": "เธอได้รับประสบการณ์มากมาย"
    },
    {
        "word": "gallon",
        "partOfSpeech": "noun",
        "translation": "แกลลอน หน่วยตวงของเหลว 4",
        "definition": "",
        "example": "The car needs ten gallons of gas.",
        "exampleTranslation": "รถต้องการน้ำมันสิบแกลลอน"
    },
    {
        "word": "gamble",
        "partOfSpeech": "noun",
        "translation": "พนัน เล่นการพนัน",
        "definition": "",
        "example": "He gambled all his money away.",
        "exampleTranslation": "เขาเล่นพนันจนหมดตัว"
    },
    {
        "word": "gambling",
        "partOfSpeech": "verb",
        "translation": "การพนัน",
        "definition": "",
        "example": "Gambling can be a dangerous habit.",
        "exampleTranslation": "การพนันอาจเป็นนิสัยที่อันตราย"
    },
    {
        "word": "game",
        "partOfSpeech": "noun",
        "translation": "เกม",
        "definition": "",
        "example": "We played a fun game.",
        "exampleTranslation": "พวกเราเล่นเกมที่สนุกมาก"
    },
    {
        "word": "gap",
        "partOfSpeech": "noun",
        "translation": "ช่องว่าง ความแตกต่าง",
        "definition": "",
        "example": "There is a gap in the fence.",
        "exampleTranslation": "มีช่องว่างที่รั้ว"
    },
    {
        "word": "garage",
        "partOfSpeech": "noun",
        "translation": "โรงรถ",
        "definition": "",
        "example": "The car is in the garage.",
        "exampleTranslation": "รถอยู่ในโรงรถ"
    },
    {
        "word": "garbage",
        "partOfSpeech": "noun",
        "translation": "ขยะ มูลฝอย",
        "definition": "",
        "example": "Please take out the garbage.",
        "exampleTranslation": "โปรดนำขยะไปทิ้ง"
    },
    {
        "word": "garden",
        "partOfSpeech": "noun",
        "translation": "สวน",
        "definition": "",
        "example": "She is watering the garden.",
        "exampleTranslation": "เธอกำลังรดน้ำสวน"
    },
    {
        "word": "gas",
        "partOfSpeech": "noun",
        "translation": "ก๊าซ",
        "definition": "",
        "example": "The house is heated by gas.",
        "exampleTranslation": "บ้านหลังนี้ทำความร้อนด้วยแก๊ส"
    },
    {
        "word": "gasoline",
        "partOfSpeech": "noun",
        "translation": "นํ้ามันเบนซิน [เบนซิน]",
        "definition": "",
        "example": "The car ran out of gasoline.",
        "exampleTranslation": "รถน้ำมันหมด"
    },
    {
        "word": "gate",
        "partOfSpeech": "noun",
        "translation": "ประตู",
        "definition": "",
        "example": "Please close the gate.",
        "exampleTranslation": "โปรดปิดประตูรั้ว"
    },
    {
        "word": "gather",
        "partOfSpeech": "noun",
        "translation": "ชุมนุม รวมกลุ่ม",
        "definition": "",
        "example": "The children gathered around the teacher.",
        "exampleTranslation": "เด็กๆ มารวมตัวกันรอบๆ ครู"
    },
    {
        "word": "gear",
        "partOfSpeech": "noun",
        "translation": "เฟือง",
        "definition": "",
        "example": "He put the car in reverse gear.",
        "exampleTranslation": "เขาใส่เกียร์ถอยหลังให้รถ"
    },
    {
        "word": "general",
        "partOfSpeech": "adjective",
        "translation": "ทั่วไป",
        "definition": "",
        "example": "The general public can enter for free.",
        "exampleTranslation": "ประชาชนทั่วไปสามารถเข้าชมได้ฟรี"
    },
    {
        "word": "generally",
        "partOfSpeech": "adverb",
        "translation": "โดยทั่วไป",
        "definition": "",
        "example": "It is generally warm in the summer.",
        "exampleTranslation": "โดยทั่วไปอากาศจะอบอุ่นในฤดูร้อน"
    },
    {
        "word": "generate",
        "partOfSpeech": "noun",
        "translation": "สร้างขึ้น",
        "definition": "",
        "example": "Wind turbines generate electricity.",
        "exampleTranslation": "กังหันลมผลิตกระแสไฟฟ้า"
    },
    {
        "word": "generation",
        "partOfSpeech": "noun",
        "translation": "ยุค สมัย การกําเนิด",
        "definition": "",
        "example": "The older generation lived differently.",
        "exampleTranslation": "คนรุ่นเก่าใช้ชีวิตแตกต่างออกไป"
    },
    {
        "word": "generous",
        "partOfSpeech": "adjective",
        "translation": "ใจกว้าง",
        "definition": "",
        "example": "He is a generous man.",
        "exampleTranslation": "เขาเป็นคนใจกว้าง"
    },
    {
        "word": "gentle",
        "partOfSpeech": "noun",
        "translation": "นุ่มนวล อ่อนโยน",
        "definition": "",
        "example": "The nurse was very gentle.",
        "exampleTranslation": "พยาบาลมีความอ่อนโยนมาก"
    },
    {
        "word": "gentleman",
        "partOfSpeech": "noun",
        "translation": "สุภาพบุรุษ",
        "definition": "",
        "example": "He is a true gentleman.",
        "exampleTranslation": "เขาเป็นสุภาพบุรุษที่แท้จริง"
    },
    {
        "word": "gently",
        "partOfSpeech": "adverb",
        "translation": "อย่างสุภาพ อย่างนุ่มนวล",
        "definition": "",
        "example": "She gently held the baby.",
        "exampleTranslation": "เธออุ้มทารกอย่างอ่อนโยน"
    },
    {
        "word": "genuine",
        "partOfSpeech": "noun",
        "translation": "แท้ แท้จริง",
        "definition": "",
        "example": "Is this a genuine leather bag?",
        "exampleTranslation": "นี่คือกระเป๋าหนังแท้ใช่ไหม?"
    },
    {
        "word": "geography",
        "partOfSpeech": "noun",
        "translation": "ภูมิศาสตร์",
        "definition": "",
        "example": "We study geography at school.",
        "exampleTranslation": "พวกเราเรียนวิชาภูมิศาสตร์ที่โรงเรียน"
    },
    {
        "word": "get",
        "partOfSpeech": "verb",
        "translation": "เอา ได้รับ",
        "definition": "",
        "example": "I need to get a new phone.",
        "exampleTranslation": "ฉันต้องซื้อโทรศัพท์ใหม่"
    },
    {
        "word": "giant",
        "partOfSpeech": "noun",
        "translation": "ยักษ์ สิ่งที่ใหญ่โตผิดปกติ",
        "definition": "",
        "example": "The story is about a friendly giant.",
        "exampleTranslation": "เรื่องราวนี้เกี่ยวกับยักษ์ที่เป็นมิตร"
    },
    {
        "word": "gift",
        "partOfSpeech": "noun",
        "translation": "ของขวัญ",
        "definition": "",
        "example": "This is a gift for you.",
        "exampleTranslation": "นี่คือของขวัญสำหรับคุณ"
    },
    {
        "word": "girl",
        "partOfSpeech": "noun",
        "translation": "เด็กผู้หญิง",
        "definition": "",
        "example": "The little girl is playing.",
        "exampleTranslation": "เด็กผู้หญิงตัวเล็กกำลังเล่นอยู่"
    },
    {
        "word": "girlfriend",
        "partOfSpeech": "noun",
        "translation": "เพื่อนผู้หญิง แฟนสาว",
        "definition": "",
        "example": "He bought flowers for his girlfriend.",
        "exampleTranslation": "เขาซื้อดอกไม้ให้แฟนสาวของเขา"
    },
    {
        "word": "give",
        "partOfSpeech": "verb",
        "translation": "ให้",
        "definition": "",
        "example": "Please give me the book.",
        "exampleTranslation": "โปรดส่งหนังสือให้ฉัน"
    },
    {
        "word": "glad",
        "partOfSpeech": "noun",
        "translation": "ดีใจ",
        "definition": "",
        "example": "I am glad to see you.",
        "exampleTranslation": "ฉันดีใจที่ได้พบคุณ"
    },
    {
        "word": "glass",
        "partOfSpeech": "noun",
        "translation": "แก้ว กระจก",
        "definition": "",
        "example": "Please give me a glass of water.",
        "exampleTranslation": "โปรดขอน้ำให้ฉันสักแก้ว"
    },
    {
        "word": "global",
        "partOfSpeech": "adjective",
        "translation": "ทั่วโลก ทั้งโลก",
        "definition": "",
        "example": "Global warming is a serious issue.",
        "exampleTranslation": "ภาวะโลกร้อนเป็นปัญหาร้ายแรง"
    },
    {
        "word": "glove",
        "partOfSpeech": "noun",
        "translation": "ถุงมือ",
        "definition": "",
        "example": "I lost one glove.",
        "exampleTranslation": "ฉันทำถุงมือหายไปหนึ่งข้าง"
    },
    {
        "word": "glue",
        "partOfSpeech": "noun",
        "translation": "กาว",
        "definition": "",
        "example": "Use glue to stick the paper.",
        "exampleTranslation": "ใช้กาวติดกระดาษ"
    },
    {
        "word": "go",
        "partOfSpeech": "verb",
        "translation": "ไป",
        "definition": "",
        "example": "Let us go home.",
        "exampleTranslation": "กลับบ้านกันเถอะ"
    },
    {
        "word": "goal",
        "partOfSpeech": "noun",
        "translation": "เป้าหมาย",
        "definition": "",
        "example": "My goal is to learn English.",
        "exampleTranslation": "เป้าหมายของฉันคือการเรียนภาษาอังกฤษ"
    },
    {
        "word": "god",
        "partOfSpeech": "noun",
        "translation": "พระเจ้า",
        "definition": "",
        "example": "Do you believe in god?",
        "exampleTranslation": "คุณเชื่อในพระเจ้าไหม?"
    },
    {
        "word": "gold",
        "partOfSpeech": "noun",
        "translation": "ทอง",
        "definition": "",
        "example": "She wears a gold ring.",
        "exampleTranslation": "เธอสวมแหวนทองคำ"
    },
    {
        "word": "good",
        "partOfSpeech": "adjective",
        "translation": "ดี",
        "definition": "",
        "example": "This is a good book.",
        "exampleTranslation": "นี่คือหนังสือที่ดี"
    },
    {
        "word": "goodbye",
        "partOfSpeech": "noun",
        "translation": "ลาก่อน",
        "definition": "",
        "example": "I said goodbye to my friends.",
        "exampleTranslation": "ฉันบอกลาเพื่อนๆ ของฉัน"
    },
    {
        "word": "goods",
        "partOfSpeech": "noun",
        "translation": "สินค้า",
        "definition": "",
        "example": "The store sells sports goods.",
        "exampleTranslation": "ร้านขายอุปกรณ์กีฬา"
    },
    {
        "word": "govern",
        "partOfSpeech": "noun",
        "translation": "ปกครอง",
        "definition": "",
        "example": "The president governs the country.",
        "exampleTranslation": "ประธานาธิบดีปกครองประเทศ"
    },
    {
        "word": "government",
        "partOfSpeech": "noun",
        "translation": "รัฐบาล",
        "definition": "",
        "example": "The government makes the laws.",
        "exampleTranslation": "รัฐบาลเป็นผู้ออกกฎหมาย"
    },
    {
        "word": "governor",
        "partOfSpeech": "noun",
        "translation": "ผู้ปกครอง ผู้ว่าราชการ",
        "definition": "",
        "example": "The governor gave a speech.",
        "exampleTranslation": "ผู้ว่าการรัฐกล่าวสุนทรพจน์"
    },
    {
        "word": "grab",
        "partOfSpeech": "noun",
        "translation": "(การ)ฉวย คว้า แย่ง โฉบ จับ",
        "definition": "",
        "example": "He grabbed his bag and ran.",
        "exampleTranslation": "เขาคว้ากระเป๋าแล้ววิ่งไป"
    },
    {
        "word": "grade",
        "partOfSpeech": "noun",
        "translation": "ระดับ",
        "definition": "",
        "example": "She got a good grade in math.",
        "exampleTranslation": "เธอได้เกรดดีในวิชาคณิตศาสตร์"
    },
    {
        "word": "gradual",
        "partOfSpeech": "adjective",
        "translation": "ค่อยๆ",
        "definition": "",
        "example": "There has been a gradual improvement.",
        "exampleTranslation": "มีการพัฒนาขึ้นอย่างค่อยเป็นค่อยไป"
    },
    {
        "word": "gradually",
        "partOfSpeech": "adverb",
        "translation": "ที่ค่อยๆเกิดขึ้น ค่อยๆลาดขึ้น",
        "definition": "",
        "example": "The weather gradually became warmer.",
        "exampleTranslation": "อากาศค่อยๆ อบอุ่นขึ้น"
    },
    {
        "word": "grain",
        "partOfSpeech": "noun",
        "translation": "เมล็ดข้าว",
        "definition": "",
        "example": "Rice is a type of grain.",
        "exampleTranslation": "ข้าวเป็นธัญพืชชนิดหนึ่ง"
    },
    {
        "word": "gram",
        "partOfSpeech": "noun",
        "translation": "กรัม",
        "definition": "",
        "example": "The letter weighs 20 grams.",
        "exampleTranslation": "จดหมายหนัก 20 กรัม"
    },
    {
        "word": "grammar",
        "partOfSpeech": "noun",
        "translation": "ไวยากรณ์",
        "definition": "",
        "example": "English grammar can be difficult.",
        "exampleTranslation": "ไวยากรณ์ภาษาอังกฤษอาจเป็นเรื่องยาก"
    },
    {
        "word": "grand",
        "partOfSpeech": "adjective",
        "translation": "ใหญ่โต สง่างาม",
        "definition": "",
        "example": "They had a grand wedding.",
        "exampleTranslation": "พวกเขาจัดงานแต่งงานที่ยิ่งใหญ่"
    },
    {
        "word": "grandchild",
        "partOfSpeech": "noun",
        "translation": "หลาน",
        "definition": "",
        "example": "She loves her grandchild.",
        "exampleTranslation": "เธอรักหลานของเธอ"
    },
    {
        "word": "granddaughter",
        "partOfSpeech": "noun",
        "translation": "หลานสาว",
        "definition": "",
        "example": "Her granddaughter is five years old.",
        "exampleTranslation": "หลานสาวของเธออายุห้าขวบ"
    },
    {
        "word": "grandfather",
        "partOfSpeech": "noun",
        "translation": "ปู่ ตา",
        "definition": "",
        "example": "My grandfather is 80 years old.",
        "exampleTranslation": "ปู่ของฉันอายุ 80 ปี"
    },
    {
        "word": "grandmother",
        "partOfSpeech": "noun",
        "translation": "ย่า ยาย",
        "definition": "",
        "example": "My grandmother cooks very well.",
        "exampleTranslation": "ย่าของฉันทำอาหารเก่งมาก"
    },
    {
        "word": "grandparent",
        "partOfSpeech": "noun",
        "translation": "ปู่, ย่า",
        "definition": "",
        "example": "They went to visit their grandparents.",
        "exampleTranslation": "พวกเขาไปเยี่ยมปู่ย่าตายาย"
    },
    {
        "word": "grandson",
        "partOfSpeech": "noun",
        "translation": "หลานชาย",
        "definition": "",
        "example": "His grandson plays football.",
        "exampleTranslation": "หลานชายของเขาเล่นฟุตบอล"
    },
    {
        "word": "grant",
        "partOfSpeech": "noun",
        "translation": "อนุญาต ยอมให้",
        "definition": "",
        "example": "The school was given a grant.",
        "exampleTranslation": "โรงเรียนได้รับเงินอุดหนุน"
    },
    {
        "word": "grass",
        "partOfSpeech": "noun",
        "translation": "หญ้า",
        "definition": "",
        "example": "The grass is green.",
        "exampleTranslation": "หญ้ามีสีเขียว"
    },
    {
        "word": "grateful",
        "partOfSpeech": "noun",
        "translation": "ขอบคุณ รู้คุณ",
        "definition": "",
        "example": "I am grateful for your help.",
        "exampleTranslation": "ฉันรู้สึกขอบคุณสำหรับความช่วยเหลือของคุณ"
    },
    {
        "word": "grave",
        "partOfSpeech": "noun",
        "translation": "หลุมฝังศพ",
        "definition": "",
        "example": "They visited his grave.",
        "exampleTranslation": "พวกเขาไปเยี่ยมหลุมศพของเขา"
    },
    {
        "word": "great",
        "partOfSpeech": "adjective",
        "translation": "ยิ่งใหญ่",
        "definition": "",
        "example": "This is a great idea.",
        "exampleTranslation": "นี่เป็นความคิดที่ยอดเยี่ยม"
    },
    {
        "word": "green",
        "partOfSpeech": "adjective",
        "translation": "สี เขียว",
        "definition": "",
        "example": "Leaves are green.",
        "exampleTranslation": "ใบไม้มีสีเขียว"
    },
    {
        "word": "grey",
        "partOfSpeech": "noun",
        "translation": "สีเทา หมองหม่น",
        "definition": "",
        "example": "The sky is grey today.",
        "exampleTranslation": "วันนี้ท้องฟ้าเป็นสีเทา"
    },
    {
        "word": "grocery",
        "partOfSpeech": "noun",
        "translation": "ร้านขายของชํา",
        "definition": "",
        "example": "I need to buy some groceries.",
        "exampleTranslation": "ฉันต้องไปซื้อของชำ"
    },
    {
        "word": "ground",
        "partOfSpeech": "noun",
        "translation": "พื้น, ดิน",
        "definition": "",
        "example": "He dropped it on the ground.",
        "exampleTranslation": "เขาทำมันตกพื้น"
    },
    {
        "word": "group",
        "partOfSpeech": "noun",
        "translation": "กลุ่ม",
        "definition": "",
        "example": "We worked in a small group.",
        "exampleTranslation": "พวกเราทำงานกันในกลุ่มเล็กๆ"
    },
    {
        "word": "grow",
        "partOfSpeech": "noun",
        "translation": "ปลูก",
        "definition": "",
        "example": "Plants need water to grow.",
        "exampleTranslation": "พืชต้องการน้ำเพื่อการเจริญเติบโต"
    },
    {
        "word": "growth",
        "partOfSpeech": "noun",
        "translation": "การเจริญเติบโต",
        "definition": "",
        "example": "The city has seen rapid growth.",
        "exampleTranslation": "เมืองนี้มีการเติบโตอย่างรวดเร็ว"
    },
    {
        "word": "guarantee",
        "partOfSpeech": "verb",
        "translation": "การประกัน หลักประกัน . รับรอง ประกัน",
        "definition": "",
        "example": "I cannot guarantee that it will work.",
        "exampleTranslation": "ฉันรับประกันไม่ได้ว่ามันจะได้ผล"
    },
    {
        "word": "guard",
        "partOfSpeech": "noun",
        "translation": "ยาม, เฝ้า",
        "definition": "",
        "example": "The guard stood at the door.",
        "exampleTranslation": "ยามยืนอยู่ที่ประตู"
    },
    {
        "word": "guess",
        "partOfSpeech": "noun",
        "translation": "เดา",
        "definition": "",
        "example": "Can you guess my age?",
        "exampleTranslation": "คุณเดาอายุของฉันได้ไหม?"
    },
    {
        "word": "guest",
        "partOfSpeech": "noun",
        "translation": "แขก ผู้เข้าพัก",
        "definition": "",
        "example": "We have guests coming for dinner.",
        "exampleTranslation": "พวกเรามีแขกมาทานอาหารเย็น"
    },
    {
        "word": "guide",
        "partOfSpeech": "noun",
        "translation": "แนะแนว แนะนํา",
        "definition": "",
        "example": "He is our tour guide.",
        "exampleTranslation": "เขาเป็นไกด์นำเที่ยวของเรา"
    },
    {
        "word": "guilty",
        "partOfSpeech": "adjective",
        "translation": "มีความผิด เกี่ยวกับความผิด รู้สึกผิด",
        "definition": "",
        "example": "The judge found him guilty.",
        "exampleTranslation": "ผู้พิพากษาตัดสินว่าเขามีความผิด"
    },
    {
        "word": "gun",
        "partOfSpeech": "noun",
        "translation": "ปืน",
        "definition": "",
        "example": "The police officer carries a gun.",
        "exampleTranslation": "เจ้าหน้าที่ตำรวจพกปืน"
    },
    {
        "word": "guy",
        "partOfSpeech": "noun",
        "translation": "เจ้าหมอนี่หมอโน่น คนนั้นคนนี้",
        "definition": "",
        "example": "He is a nice guy.",
        "exampleTranslation": "เขาเป็นผู้ชายที่ดีคนหนึ่ง"
    },
    {
        "word": "habit",
        "partOfSpeech": "noun",
        "translation": "นิสัย",
        "definition": "",
        "example": "Biting your nails is a bad habit.",
        "exampleTranslation": "การกัดเล็บเป็นนิสัยที่ไม่ดี"
    },
    {
        "word": "hair",
        "partOfSpeech": "noun",
        "translation": "ผม",
        "definition": "",
        "example": "She has long black hair.",
        "exampleTranslation": "เธอมีผมสีดำยาว"
    },
    {
        "word": "hairdresser",
        "partOfSpeech": "noun",
        "translation": "ช่างแต่งผม ช่างตัดผม",
        "definition": "",
        "example": "I need to go to the hairdresser.",
        "exampleTranslation": "ฉันต้องไปร้านทำผม"
    },
    {
        "word": "half",
        "partOfSpeech": "noun",
        "translation": "ครึ่งหนึ่ง",
        "definition": "",
        "example": "Cut the apple in half.",
        "exampleTranslation": "ผ่าแอปเปิลครึ่งหนึ่ง"
    },
    {
        "word": "hall",
        "partOfSpeech": "noun",
        "translation": "ห้องโถง",
        "definition": "",
        "example": "The meeting is in the main hall.",
        "exampleTranslation": "การประชุมอยู่ที่ห้องโถงใหญ่"
    },
    {
        "word": "hammer",
        "partOfSpeech": "noun",
        "translation": "ค้อน",
        "definition": "",
        "example": "Use a hammer to hit the nail.",
        "exampleTranslation": "ใช้ค้อนตอกตะปู"
    },
    {
        "word": "hand",
        "partOfSpeech": "noun",
        "translation": "มือ",
        "definition": "",
        "example": "Please wash your hands.",
        "exampleTranslation": "โปรดล้างมือของคุณ"
    },
    {
        "word": "handle",
        "partOfSpeech": "noun",
        "translation": "จัดการ",
        "definition": "",
        "example": "Hold the handle carefully.",
        "exampleTranslation": "จับที่จับอย่างระมัดระวัง"
    },
    {
        "word": "hang",
        "partOfSpeech": "noun",
        "translation": "แขวน",
        "definition": "",
        "example": "Hang your coat on the hook.",
        "exampleTranslation": "แขวนเสื้อโค้ทของคุณไว้ที่ตะขอ"
    },
    {
        "word": "happen",
        "partOfSpeech": "verb",
        "translation": "เกิดขึ้น บังเอิญ",
        "definition": "",
        "example": "What happened to you?",
        "exampleTranslation": "เกิดอะไรขึ้นกับคุณ?"
    },
    {
        "word": "happily",
        "partOfSpeech": "adverb",
        "translation": "อย่างมีความสุข",
        "definition": "",
        "example": "They lived happily ever after.",
        "exampleTranslation": "พวกเขาใช้ชีวิตอย่างมีความสุขตลอดไป"
    },
    {
        "word": "happy",
        "partOfSpeech": "adjective",
        "translation": "สุขใจ",
        "definition": "",
        "example": "I am very happy today.",
        "exampleTranslation": "วันนี้ฉันมีความสุขมาก"
    },
    {
        "word": "hard",
        "partOfSpeech": "adjective",
        "translation": "ยาก แข็ง",
        "definition": "",
        "example": "This rock is very hard.",
        "exampleTranslation": "หินก้อนนี้แข็งมาก"
    },
    {
        "word": "hardly",
        "partOfSpeech": "adverb",
        "translation": "แทบจะไม่",
        "definition": "",
        "example": "I can hardly hear you.",
        "exampleTranslation": "ฉันแทบจะไม่ได้ยินคุณเลย"
    },
    {
        "word": "harm",
        "partOfSpeech": "noun",
        "translation": "อันตราย",
        "definition": "",
        "example": "Eating too much sugar can harm your teeth.",
        "exampleTranslation": "การกินน้ำตาลมากเกินไปอาจเป็นอันตรายต่อฟันของคุณ"
    },
    {
        "word": "harmful",
        "partOfSpeech": "noun",
        "translation": "เป็นอันตราย",
        "definition": "",
        "example": "Smoking is harmful to your health.",
        "exampleTranslation": "การสูบบุหรี่เป็นอันตรายต่อสุขภาพของคุณ"
    },
    {
        "word": "harmless",
        "partOfSpeech": "noun",
        "translation": "ไม่เป็นอันตราย",
        "definition": "",
        "example": "These insects are harmless.",
        "exampleTranslation": "แมลงเหล่านี้ไม่มีอันตราย"
    },
    {
        "word": "hat",
        "partOfSpeech": "noun",
        "translation": "หมวก",
        "definition": "",
        "example": "Wear a hat in the sun.",
        "exampleTranslation": "สวมหมวกเมื่ออยู่กลางแดด"
    },
    {
        "word": "hate",
        "partOfSpeech": "noun",
        "translation": "เกลียดชัง",
        "definition": "",
        "example": "I hate waking up early.",
        "exampleTranslation": "ฉันเกลียดการตื่นเช้า"
    },
    {
        "word": "hatred",
        "partOfSpeech": "verb",
        "translation": "ความเกลียดชัง",
        "definition": "",
        "example": "He looked at me with hatred.",
        "exampleTranslation": "เขามองฉันด้วยความเกลียดชัง"
    },
    {
        "word": "have",
        "partOfSpeech": "verb",
        "translation": "มี ประกอบด้วย",
        "definition": "",
        "example": "I have two sisters.",
        "exampleTranslation": "ฉันมีน้องสาวสองคน"
    },
    {
        "word": "have to",
        "partOfSpeech": "noun",
        "translation": "ต้อง",
        "definition": "",
        "example": "I have to go now.",
        "exampleTranslation": "ฉันต้องไปแล้ว"
    },
    {
        "word": "he",
        "partOfSpeech": "noun",
        "translation": "เขา (ผู้ชาย)",
        "definition": "",
        "example": "He is my brother.",
        "exampleTranslation": "เขาเป็นพี่ชายของฉัน"
    },
    {
        "word": "head",
        "partOfSpeech": "noun",
        "translation": "หัว",
        "definition": "",
        "example": "My head hurts.",
        "exampleTranslation": "ฉันปวดหัว"
    },
    {
        "word": "headache",
        "partOfSpeech": "noun",
        "translation": "อาการปวดหัว",
        "definition": "",
        "example": "I have a bad headache.",
        "exampleTranslation": "ฉันปวดหัวมาก"
    },
    {
        "word": "heal",
        "partOfSpeech": "verb",
        "translation": "รักษาให้หาย, .",
        "definition": "",
        "example": "The wound will heal soon.",
        "exampleTranslation": "บาดแผลจะหายดีในไม่ช้า"
    },
    {
        "word": "health",
        "partOfSpeech": "noun",
        "translation": "สุขภาพ",
        "definition": "",
        "example": "Eating vegetables is good for your health.",
        "exampleTranslation": "การกินผักดีต่อสุขภาพของคุณ"
    },
    {
        "word": "healthy",
        "partOfSpeech": "adjective",
        "translation": "มีสุขภาพดี",
        "definition": "",
        "example": "She is a healthy baby.",
        "exampleTranslation": "เธอเป็นทารกที่แข็งแรง"
    },
    {
        "word": "hear",
        "partOfSpeech": "noun",
        "translation": "ได้ยิน",
        "definition": "",
        "example": "Can you hear me?",
        "exampleTranslation": "คุณได้ยินฉันไหม?"
    },
    {
        "word": "hearing",
        "partOfSpeech": "noun",
        "translation": "การฟัง การพิจารณาคดี",
        "definition": "",
        "example": "He lost his hearing.",
        "exampleTranslation": "เขาสูญเสียการได้ยิน"
    },
    {
        "word": "heart",
        "partOfSpeech": "noun",
        "translation": "ใจ",
        "definition": "",
        "example": "My heart is beating fast.",
        "exampleTranslation": "หัวใจของฉันเต้นเร็ว"
    },
    {
        "word": "heat",
        "partOfSpeech": "noun",
        "translation": "ความร้อน",
        "definition": "",
        "example": "I cannot stand the heat.",
        "exampleTranslation": "ฉันทนความร้อนไม่ได้"
    },
    {
        "word": "heating",
        "partOfSpeech": "noun",
        "translation": "เครื่องทําความร้อนในบ้าน",
        "definition": "",
        "example": "Turn on the heating, please.",
        "exampleTranslation": "โปรดเปิดเครื่องทำความร้อน"
    },
    {
        "word": "heaven",
        "partOfSpeech": "noun",
        "translation": "สวรรค์",
        "definition": "",
        "example": "She believes in heaven.",
        "exampleTranslation": "เธอเชื่อเรื่องสวรรค์"
    },
    {
        "word": "heavily",
        "partOfSpeech": "adverb",
        "translation": "อย่างหนัก",
        "definition": "",
        "example": "It is raining heavily.",
        "exampleTranslation": "ฝนกำลังตกหนัก"
    },
    {
        "word": "heavy",
        "partOfSpeech": "adjective",
        "translation": "หนัก",
        "definition": "",
        "example": "This box is very heavy.",
        "exampleTranslation": "กล่องใบนี้หนักมาก"
    },
    {
        "word": "heel",
        "partOfSpeech": "noun",
        "translation": "ส้นเท้า",
        "definition": "",
        "example": "The heel of my shoe is broken.",
        "exampleTranslation": "ส้นรองเท้าของฉันหัก"
    },
    {
        "word": "height",
        "partOfSpeech": "noun",
        "translation": "ความสูง",
        "definition": "",
        "example": "What is your height?",
        "exampleTranslation": "ความสูงของคุณคือเท่าไหร่?"
    },
    {
        "word": "hell",
        "partOfSpeech": "noun",
        "translation": "นรก",
        "definition": "",
        "example": "He went through hell.",
        "exampleTranslation": "เขาผ่านความยากลำบากแสนสาหัส"
    },
    {
        "word": "hello",
        "partOfSpeech": "noun",
        "translation": "คําใช้ทักทาย",
        "definition": "",
        "example": "Hello, how are you?",
        "exampleTranslation": "สวัสดี คุณสบายดีไหม?"
    },
    {
        "word": "help",
        "partOfSpeech": "noun",
        "translation": "ช่วยเหลือ",
        "definition": "",
        "example": "Can I help you?",
        "exampleTranslation": "ฉันช่วยคุณได้ไหม?"
    },
    {
        "word": "helpful",
        "partOfSpeech": "noun",
        "translation": "เป็นประโยชน์",
        "definition": "",
        "example": "The staff was very helpful.",
        "exampleTranslation": "พนักงานให้ความช่วยเหลือดีมาก"
    },
    {
        "word": "hence",
        "partOfSpeech": "noun",
        "translation": "เพราะฉะนั้น ตั้งแต่นี้ต่อไป",
        "definition": "",
        "example": "It is raining, hence we will stay inside.",
        "exampleTranslation": "ฝนกำลังตก ดังนั้นเราจะอยู่ข้างใน"
    },
    {
        "word": "her",
        "partOfSpeech": "noun",
        "translation": "ของเธอ ของหล่อน",
        "definition": "",
        "example": "I gave her a gift.",
        "exampleTranslation": "ฉันให้ของขวัญแก่เธอ"
    },
    {
        "word": "here",
        "partOfSpeech": "adverb",
        "translation": "ที่นี่",
        "definition": "",
        "example": "Come here, please.",
        "exampleTranslation": "มาที่นี่ โปรด"
    },
    {
        "word": "hero",
        "partOfSpeech": "noun",
        "translation": "วีรบุรุษ",
        "definition": "",
        "example": "He is a national hero.",
        "exampleTranslation": "เขาเป็นวีรบุรุษของชาติ"
    },
    {
        "word": "hers",
        "partOfSpeech": "noun",
        "translation": "ของเขา(ผู้หญิง)",
        "definition": "",
        "example": "This book is hers.",
        "exampleTranslation": "หนังสือเล่มนี้เป็นของเธอ"
    },
    {
        "word": "herself",
        "partOfSpeech": "noun",
        "translation": "ตัวเขา(ผู้หญิง)เอง",
        "definition": "",
        "example": "She hurt herself.",
        "exampleTranslation": "เธอทำให้ตัวเองเจ็บ"
    },
    {
        "word": "hesitate",
        "partOfSpeech": "noun",
        "translation": "ลังเลใจ",
        "definition": "",
        "example": "Do not hesitate to ask.",
        "exampleTranslation": "อย่าลังเลที่จะถาม"
    },
    {
        "word": "hi",
        "partOfSpeech": "noun",
        "translation": "สวัสดี (ใช้กับคนคุ้นเคย)",
        "definition": "",
        "example": "Hi, my name is John.",
        "exampleTranslation": "สวัสดี ฉันชื่อจอห์น"
    },
    {
        "word": "hide",
        "partOfSpeech": "noun",
        "translation": "ซ่อน",
        "definition": "",
        "example": "The dog is hiding under the bed.",
        "exampleTranslation": "สุนัขซ่อนตัวอยู่ใต้เตียง"
    },
    {
        "word": "high",
        "partOfSpeech": "adjective",
        "translation": "สูง",
        "definition": "",
        "example": "The mountain is very high.",
        "exampleTranslation": "ภูเขาสูงมาก"
    },
    {
        "word": "highlight",
        "partOfSpeech": "noun",
        "translation": "เน้น ทําให้เด่น",
        "definition": "",
        "example": "Highlight the important words.",
        "exampleTranslation": "เน้นคำที่สำคัญ"
    },
    {
        "word": "highly",
        "partOfSpeech": "adverb",
        "translation": "อย่างมาก",
        "definition": "",
        "example": "He is highly intelligent.",
        "exampleTranslation": "เขาฉลาดมาก"
    },
    {
        "word": "highway",
        "partOfSpeech": "noun",
        "translation": "ทางหลวง",
        "definition": "",
        "example": "The highway is very busy.",
        "exampleTranslation": "ทางหลวงการจราจรคับคั่งมาก"
    },
    {
        "word": "hill",
        "partOfSpeech": "noun",
        "translation": "เนินเขา ภูเขาลูกเล็ก",
        "definition": "",
        "example": "We walked up the hill.",
        "exampleTranslation": "พวกเราเดินขึ้นเขา"
    },
    {
        "word": "him",
        "partOfSpeech": "noun",
        "translation": "เขาผู้ชาย",
        "definition": "",
        "example": "I saw him yesterday.",
        "exampleTranslation": "ฉันเห็นเขาเมื่อวานนี้"
    },
    {
        "word": "himself",
        "partOfSpeech": "noun",
        "translation": "ตัวเขา(ผู้ชาย)เอง",
        "definition": "",
        "example": "He did it by himself.",
        "exampleTranslation": "เขาทำมันด้วยตัวเอง"
    },
    {
        "word": "hip",
        "partOfSpeech": "noun",
        "translation": "ตะโพก",
        "definition": "",
        "example": "She has wide hips.",
        "exampleTranslation": "เธอมีสะโพกที่ผาย"
    },
    {
        "word": "hire",
        "partOfSpeech": "noun",
        "translation": "จ้าง",
        "definition": "",
        "example": "They hired a new manager.",
        "exampleTranslation": "พวกเขาจ้างผู้จัดการคนใหม่"
    },
    {
        "word": "his",
        "partOfSpeech": "noun",
        "translation": "ของเขาผู้ชาย",
        "definition": "",
        "example": "His car is new.",
        "exampleTranslation": "รถของเขาเป็นของใหม่"
    },
    {
        "word": "historical",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับประวัติศาสตร์",
        "definition": "",
        "example": "I like reading historical novels.",
        "exampleTranslation": "ฉันชอบอ่านนิยายอิงประวัติศาสตร์"
    },
    {
        "word": "history",
        "partOfSpeech": "noun",
        "translation": "ประวัติศาสตร์",
        "definition": "",
        "example": "History is my favorite subject.",
        "exampleTranslation": "ประวัติศาสตร์เป็นวิชาโปรดของฉัน"
    },
    {
        "word": "hit",
        "partOfSpeech": "noun",
        "translation": "ตี",
        "definition": "",
        "example": "The car hit a tree.",
        "exampleTranslation": "รถชนต้นไม้"
    },
    {
        "word": "hobby",
        "partOfSpeech": "noun",
        "translation": "งานอดิเรก",
        "definition": "",
        "example": "My hobby is reading.",
        "exampleTranslation": "งานอดิเรกของฉันคือการอ่านหนังสือ"
    },
    {
        "word": "hold",
        "partOfSpeech": "noun",
        "translation": "ถือ จับ",
        "definition": "",
        "example": "Hold my hand.",
        "exampleTranslation": "จับมือฉันไว้"
    },
    {
        "word": "hole",
        "partOfSpeech": "noun",
        "translation": "รู โพรง",
        "definition": "",
        "example": "There is a hole in my shirt.",
        "exampleTranslation": "มีรูที่เสื้อของฉัน"
    },
    {
        "word": "holiday",
        "partOfSpeech": "noun",
        "translation": "วันหยุด",
        "definition": "",
        "example": "Tomorrow is a public holiday.",
        "exampleTranslation": "พรุ่งนี้เป็นวันหยุดนักขัตฤกษ์"
    },
    {
        "word": "hollow",
        "partOfSpeech": "noun",
        "translation": "กลวง",
        "definition": "",
        "example": "The tree trunk is hollow.",
        "exampleTranslation": "ลำต้นของต้นไม้กลวง"
    },
    {
        "word": "holy",
        "partOfSpeech": "noun",
        "translation": "ศักดิѻสิทธิѻ",
        "definition": "",
        "example": "The Bible is a holy book.",
        "exampleTranslation": "คัมภีร์ไบเบิลเป็นหนังสือศักดิ์สิทธิ์"
    },
    {
        "word": "home",
        "partOfSpeech": "noun",
        "translation": "บ้าน",
        "definition": "",
        "example": "I am going home.",
        "exampleTranslation": "ฉันกำลังจะกลับบ้าน"
    },
    {
        "word": "homework",
        "partOfSpeech": "noun",
        "translation": "การบ้าน",
        "definition": "",
        "example": "Did you do your homework?",
        "exampleTranslation": "คุณทำการบ้านหรือยัง?"
    },
    {
        "word": "honest",
        "partOfSpeech": "noun",
        "translation": "ซื่อสัตย์",
        "definition": "",
        "example": "He is an honest man.",
        "exampleTranslation": "เขาเป็นคนซื่อสัตย์"
    },
    {
        "word": "honestly",
        "partOfSpeech": "adverb",
        "translation": "อย่างซื่อสัตย์",
        "definition": "",
        "example": "Tell me honestly what you think.",
        "exampleTranslation": "บอกฉันตามตรงว่าคุณคิดอย่างไร"
    },
    {
        "word": "honour",
        "partOfSpeech": "verb",
        "translation": "เกียรติยศ, ศักดิѻศรี",
        "definition": "",
        "example": "It is an honour to meet you.",
        "exampleTranslation": "เป็นเกียรติอย่างยิ่งที่ได้พบคุณ"
    },
    {
        "word": "hook",
        "partOfSpeech": "noun",
        "translation": "เบ็ด",
        "definition": "",
        "example": "Hang your coat on the hook.",
        "exampleTranslation": "แขวนเสื้อโค้ทของคุณไว้ที่ตะขอ"
    },
    {
        "word": "hope",
        "partOfSpeech": "noun",
        "translation": "ความหวัง",
        "definition": "",
        "example": "I hope you feel better.",
        "exampleTranslation": "ฉันหวังว่าคุณจะรู้สึกดีขึ้น"
    },
    {
        "word": "horizontal",
        "partOfSpeech": "noun",
        "translation": "เป็นแนวนอน ขนานกับแนวพื้นดิน",
        "definition": "",
        "example": "Draw a horizontal line.",
        "exampleTranslation": "วาดเส้นแนวนอน"
    },
    {
        "word": "horn",
        "partOfSpeech": "noun",
        "translation": "เขาสัตว์",
        "definition": "",
        "example": "The car honked its horn.",
        "exampleTranslation": "รถบีบแตร"
    },
    {
        "word": "horror",
        "partOfSpeech": "noun",
        "translation": "ความน่ากลัว",
        "definition": "",
        "example": "She likes horror movies.",
        "exampleTranslation": "เธอชอบภาพยนตร์สยองขวัญ"
    },
    {
        "word": "horse",
        "partOfSpeech": "noun",
        "translation": "ม้า",
        "definition": "",
        "example": "He is riding a horse.",
        "exampleTranslation": "เขากำลังขี่ม้า"
    },
    {
        "word": "hospital",
        "partOfSpeech": "noun",
        "translation": "โรงพยาบาล",
        "definition": "",
        "example": "She is working in a hospital.",
        "exampleTranslation": "เธอกำลังทำงานในโรงพยาบาล"
    },
    {
        "word": "host",
        "partOfSpeech": "noun",
        "translation": "เจ้าภาพ",
        "definition": "",
        "example": "Thank the host for the party.",
        "exampleTranslation": "ขอบคุณเจ้าภาพสำหรับงานปาร์ตี้"
    },
    {
        "word": "hot",
        "partOfSpeech": "adjective",
        "translation": "ร้อน",
        "definition": "",
        "example": "The coffee is very hot.",
        "exampleTranslation": "กาแฟร้อนมาก"
    },
    {
        "word": "hotel",
        "partOfSpeech": "noun",
        "translation": "โรงแรม",
        "definition": "",
        "example": "We stayed at a nice hotel.",
        "exampleTranslation": "พวกเราพักที่โรงแรมที่สวยงาม"
    },
    {
        "word": "hour",
        "partOfSpeech": "noun",
        "translation": "ชั่วโมง",
        "definition": "",
        "example": "It takes one hour to get there.",
        "exampleTranslation": "ใช้เวลาหนึ่งชั่วโมงในการไปถึงที่นั่น"
    },
    {
        "word": "house",
        "partOfSpeech": "noun",
        "translation": "บ้าน",
        "definition": "",
        "example": "They live in a big house.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในบ้านหลังใหญ่"
    },
    {
        "word": "household",
        "partOfSpeech": "noun",
        "translation": "ครอบครัว",
        "definition": "",
        "example": "This product is for household use.",
        "exampleTranslation": "ผลิตภัณฑ์นี้สำหรับใช้ในครัวเรือน"
    },
    {
        "word": "housing",
        "partOfSpeech": "noun",
        "translation": "การเคหะ การจัดบ้านพักให้",
        "definition": "",
        "example": "There is a shortage of housing.",
        "exampleTranslation": "มีปัญหาขาดแคลนที่อยู่อาศัย"
    },
    {
        "word": "how",
        "partOfSpeech": "noun",
        "translation": "อย่างไร",
        "definition": "",
        "example": "How do you do this?",
        "exampleTranslation": "คุณทำสิ่งนี้ได้อย่างไร?"
    },
    {
        "word": "however",
        "partOfSpeech": "adverb",
        "translation": "อย่างไรก็ตาม",
        "definition": "",
        "example": "It was raining, however, we went out.",
        "exampleTranslation": "ฝนตก แต่พวกเราก็ออกไปข้างนอก"
    },
    {
        "word": "huge",
        "partOfSpeech": "adjective",
        "translation": "ใหญ่มาก ใหญ่โต",
        "definition": "",
        "example": "They built a huge building.",
        "exampleTranslation": "พวกเขาสร้างอาคารขนาดใหญ่โต"
    },
    {
        "word": "human",
        "partOfSpeech": "noun",
        "translation": "มนุษย์",
        "definition": "",
        "example": "Humans are mammals.",
        "exampleTranslation": "มนุษย์เป็นสัตว์เลี้ยงลูกด้วยนม"
    },
    {
        "word": "humorous",
        "partOfSpeech": "adjective",
        "translation": "ตลก",
        "definition": "",
        "example": "He told a humorous story.",
        "exampleTranslation": "เขาเล่าเรื่องที่ตลกขบขัน"
    },
    {
        "word": "humour",
        "partOfSpeech": "noun",
        "translation": "ความตลกขบขัน อารมณ์ขัน",
        "definition": "",
        "example": "She has a good sense of humour.",
        "exampleTranslation": "เธอมีอารมณ์ขันที่ดี"
    },
    {
        "word": "hundred",
        "partOfSpeech": "verb",
        "translation": "ร้อย",
        "definition": "",
        "example": "I have one hundred dollars.",
        "exampleTranslation": "ฉันมีเงินหนึ่งร้อยดอลลาร์"
    },
    {
        "word": "hundredth",
        "partOfSpeech": "noun",
        "translation": "ที่ร้อย",
        "definition": "",
        "example": "Today is our one hundredth day.",
        "exampleTranslation": "วันนี้เป็นวันที่หนึ่งร้อยของเรา"
    },
    {
        "word": "hungry",
        "partOfSpeech": "noun",
        "translation": "หิว",
        "definition": "",
        "example": "I am very hungry.",
        "exampleTranslation": "ฉันหิวมาก"
    },
    {
        "word": "hunt",
        "partOfSpeech": "noun",
        "translation": "ล่า",
        "definition": "",
        "example": "Lions hunt for food.",
        "exampleTranslation": "สิงโตล่าสัตว์เพื่อเป็นอาหาร"
    },
    {
        "word": "hunting",
        "partOfSpeech": "verb",
        "translation": "การล่า การล่าสัตว์ การค้นหา",
        "definition": "",
        "example": "Hunting is not allowed here.",
        "exampleTranslation": "ไม่อนุญาตให้ล่าสัตว์ที่นี่"
    },
    {
        "word": "hurry",
        "partOfSpeech": "noun",
        "translation": "รีบร้อน เร่งด่วน",
        "definition": "",
        "example": "Please hurry up!",
        "exampleTranslation": "โปรดรีบหน่อย!"
    },
    {
        "word": "hurt",
        "partOfSpeech": "noun",
        "translation": "เจ็บ",
        "definition": "",
        "example": "Does it hurt?",
        "exampleTranslation": "มันเจ็บไหม?"
    },
    {
        "word": "husband",
        "partOfSpeech": "noun",
        "translation": "สามี",
        "definition": "",
        "example": "Her husband is a teacher.",
        "exampleTranslation": "สามีของเธอเป็นครู"
    },
    {
        "word": "I",
        "partOfSpeech": "noun",
        "translation": "ฉัน ผม",
        "definition": "",
        "example": "I love you.",
        "exampleTranslation": "ฉันรักคุณ"
    },
    {
        "word": "ice",
        "partOfSpeech": "noun",
        "translation": "นํ้าแข็ง",
        "definition": "",
        "example": "Put some ice in my drink.",
        "exampleTranslation": "ใส่น้ำแข็งในเครื่องดื่มของฉันหน่อย"
    },
    {
        "word": "ice cream",
        "partOfSpeech": "noun",
        "translation": "ไอศกรีม",
        "definition": "",
        "example": "I want chocolate ice cream.",
        "exampleTranslation": "ฉันต้องการไอศกรีมช็อกโกแลต"
    },
    {
        "word": "idea",
        "partOfSpeech": "noun",
        "translation": "ความคิด",
        "definition": "",
        "example": "That is a great idea.",
        "exampleTranslation": "นั่นเป็นความคิดที่ยอดเยี่ยม"
    },
    {
        "word": "ideal",
        "partOfSpeech": "noun",
        "translation": "อุดมคติ",
        "definition": "",
        "example": "This is the ideal place for a picnic.",
        "exampleTranslation": "นี่คือสถานที่ที่เหมาะสำหรับการปิกนิก"
    },
    {
        "word": "identify",
        "partOfSpeech": "verb",
        "translation": "ชี้ตัว, บอกชื่อ",
        "definition": "",
        "example": "Can you identify this plant?",
        "exampleTranslation": "คุณช่วยระบุชนิดของพืชนี้ได้ไหม?"
    },
    {
        "word": "identity",
        "partOfSpeech": "noun",
        "translation": "เอกลักษณ์",
        "definition": "",
        "example": "They kept his identity a secret.",
        "exampleTranslation": "พวกเขาเก็บตัวตนของเขาเป็นความลับ"
    },
    {
        "word": "if",
        "partOfSpeech": "noun",
        "translation": "ถ้า",
        "definition": "",
        "example": "If it rains, we will stay home.",
        "exampleTranslation": "ถ้าฝนตก พวกเราจะอยู่บ้าน"
    },
    {
        "word": "ignore",
        "partOfSpeech": "noun",
        "translation": "ไม่สนใจ ละเลย",
        "definition": "",
        "example": "Do not ignore me.",
        "exampleTranslation": "อย่าเพิกเฉยต่อฉัน"
    },
    {
        "word": "ill",
        "partOfSpeech": "noun",
        "translation": "ป่วย",
        "definition": "",
        "example": "He is very ill.",
        "exampleTranslation": "เขาป่วยหนัก"
    },
    {
        "word": "illegal",
        "partOfSpeech": "adjective",
        "translation": "ผิดกฎหมาย",
        "definition": "",
        "example": "It is illegal to drive without a license.",
        "exampleTranslation": "การขับรถโดยไม่มีใบอนุญาตเป็นเรื่องผิดกฎหมาย"
    },
    {
        "word": "illness",
        "partOfSpeech": "noun",
        "translation": "การไม่สบาย การเจ็บไข้ได้ป่วย",
        "definition": "",
        "example": "She is recovering from a long illness.",
        "exampleTranslation": "เธอกำลังฟื้นตัวจากการป่วยที่ยาวนาน"
    },
    {
        "word": "illustrate",
        "partOfSpeech": "noun",
        "translation": "แสดงให้เห็น(ด้วยภาพ ตัวอย่างหรืออื่นๆ)",
        "definition": "",
        "example": "Use an example to illustrate your point.",
        "exampleTranslation": "ใช้ตัวอย่างเพื่ออธิบายประเด็นของคุณ"
    },
    {
        "word": "image",
        "partOfSpeech": "noun",
        "translation": "ภาพ",
        "definition": "",
        "example": "The image is very clear.",
        "exampleTranslation": "ภาพมีความชัดเจนมาก"
    },
    {
        "word": "imaginary",
        "partOfSpeech": "adjective",
        "translation": "สมมุติขึ้น เพ้อฝัน",
        "definition": "",
        "example": "Unicorns are imaginary creatures.",
        "exampleTranslation": "ยูนิคอร์นเป็นสัตว์ในจินตนาการ"
    },
    {
        "word": "imagination",
        "partOfSpeech": "noun",
        "translation": "จินตนาการ",
        "definition": "",
        "example": "You have a vivid imagination.",
        "exampleTranslation": "คุณมีจินตนาการที่ชัดเจน"
    },
    {
        "word": "imagine",
        "partOfSpeech": "noun",
        "translation": "จินตนาการ นึกคิด",
        "definition": "",
        "example": "Imagine living on the moon.",
        "exampleTranslation": "ลองจินตนาการถึงการใช้ชีวิตบนดวงจันทร์"
    },
    {
        "word": "immediate",
        "partOfSpeech": "noun",
        "translation": "ทันทีทันใด",
        "definition": "",
        "example": "We need immediate action.",
        "exampleTranslation": "พวกเราต้องการการดำเนินการโดยทันที"
    },
    {
        "word": "immediately",
        "partOfSpeech": "adverb",
        "translation": "ทันที, โดยตรง",
        "definition": "",
        "example": "Stop immediately!",
        "exampleTranslation": "หยุดเดี๋ยวนี้!"
    },
    {
        "word": "immoral",
        "partOfSpeech": "adjective",
        "translation": "ผิดศีลธรรม เลว",
        "definition": "",
        "example": "It is immoral to steal.",
        "exampleTranslation": "การขโมยเป็นสิ่งที่ผิดศีลธรรม"
    },
    {
        "word": "impact",
        "partOfSpeech": "verb",
        "translation": "ผลกระทบ, .",
        "definition": "",
        "example": "The crash had a huge impact.",
        "exampleTranslation": "การชนทำให้เกิดผลกระทบอย่างใหญ่หลวง"
    },
    {
        "word": "impatient",
        "partOfSpeech": "noun",
        "translation": "ไม่อดทน ใจร้อน",
        "definition": "",
        "example": "He is very impatient.",
        "exampleTranslation": "เขาเป็นคนใจร้อนมาก"
    },
    {
        "word": "implication",
        "partOfSpeech": "noun",
        "translation": "สิ่งที่พัวพัน สิ่งที่เกี่ยวข้อง นัย",
        "definition": "",
        "example": "What is the implication of this?",
        "exampleTranslation": "นัยของเรื่องนี้คืออะไร?"
    },
    {
        "word": "imply",
        "partOfSpeech": "noun",
        "translation": "บอกเป็นนัย",
        "definition": "",
        "example": "What are you trying to imply?",
        "exampleTranslation": "คุณพยายามจะบอกเป็นนัยว่าอะไร?"
    },
    {
        "word": "import",
        "partOfSpeech": "noun",
        "translation": "สินค้านําเข้า",
        "definition": "",
        "example": "They import cars from Japan.",
        "exampleTranslation": "พวกเขานำเข้ารถยนต์จากญี่ปุ่น"
    },
    {
        "word": "importance",
        "partOfSpeech": "noun",
        "translation": "ความสําคัญ",
        "definition": "",
        "example": "Do you understand the importance of this?",
        "exampleTranslation": "คุณเข้าใจความสำคัญของเรื่องนี้ไหม?"
    },
    {
        "word": "important",
        "partOfSpeech": "adjective",
        "translation": "ที่สําคัญ",
        "definition": "",
        "example": "This is an important message.",
        "exampleTranslation": "นี่คือข้อความที่สำคัญ"
    },
    {
        "word": "impose",
        "partOfSpeech": "verb",
        "translation": "กําหนดให้มี ยัดเยียดให้",
        "definition": "",
        "example": "The government imposed a new tax.",
        "exampleTranslation": "รัฐบาลกำหนดภาษีใหม่"
    },
    {
        "word": "impossible",
        "partOfSpeech": "adjective",
        "translation": "เป็นไปไม่ได้",
        "definition": "",
        "example": "It is impossible to please everyone.",
        "exampleTranslation": "มันเป็นไปไม่ได้ที่จะทำให้ทุกคนพอใจ"
    },
    {
        "word": "impress",
        "partOfSpeech": "noun",
        "translation": "ทําให้ประทับใจ, กด",
        "definition": "",
        "example": "He tried to impress her.",
        "exampleTranslation": "เขาพยายามทำให้เธอประทับใจ"
    },
    {
        "word": "impression",
        "partOfSpeech": "noun",
        "translation": "ความประทับใจ",
        "definition": "",
        "example": "You made a good impression.",
        "exampleTranslation": "คุณสร้างความประทับใจที่ดี"
    },
    {
        "word": "impressive",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งน่าประทับใจ",
        "definition": "",
        "example": "His skills are very impressive.",
        "exampleTranslation": "ทักษะของเขาน่าประทับใจมาก"
    },
    {
        "word": "improve",
        "partOfSpeech": "verb",
        "translation": "ปรับปรุง",
        "definition": "",
        "example": "I want to improve my English.",
        "exampleTranslation": "ฉันต้องการพัฒนาภาษาอังกฤษของฉัน"
    },
    {
        "word": "improvement",
        "partOfSpeech": "noun",
        "translation": "การปรับปรุง",
        "definition": "",
        "example": "There is a big improvement.",
        "exampleTranslation": "มีการพัฒนาขึ้นอย่างมาก"
    },
    {
        "word": "in",
        "partOfSpeech": "noun",
        "translation": "ใน",
        "definition": "",
        "example": "The cat is in the box.",
        "exampleTranslation": "แมวอยู่ในกล่อง"
    },
    {
        "word": "inability",
        "partOfSpeech": "noun",
        "translation": "การไร้ความสามารถ",
        "definition": "",
        "example": "His inability to read is a problem.",
        "exampleTranslation": "การที่เขาไม่สามารถอ่านหนังสือได้เป็นปัญหา"
    },
    {
        "word": "inch",
        "partOfSpeech": "noun",
        "translation": "หน่วยความยาวที่เท่ากับ 2.54 เซนติเมตรหรือ 1 /12 ฟุต",
        "definition": "",
        "example": "The TV is 50 inches.",
        "exampleTranslation": "ทีวีมีขนาด 50 นิ้ว"
    },
    {
        "word": "incident",
        "partOfSpeech": "noun",
        "translation": "เหตุการณ์ เรื่องราว",
        "definition": "",
        "example": "Tell me about the incident.",
        "exampleTranslation": "เล่าเรื่องเหตุการณ์ให้ฉันฟังหน่อย"
    },
    {
        "word": "include",
        "partOfSpeech": "noun",
        "translation": "รวมถึง",
        "definition": "",
        "example": "The price includes breakfast.",
        "exampleTranslation": "ราคานี้รวมอาหารเช้าแล้ว"
    },
    {
        "word": "including",
        "partOfSpeech": "verb",
        "translation": "รวมทั้ง",
        "definition": "",
        "example": "Everyone was there, including you.",
        "exampleTranslation": "ทุกคนอยู่ที่นั่น รวมถึงคุณด้วย"
    },
    {
        "word": "income",
        "partOfSpeech": "noun",
        "translation": "รายได้",
        "definition": "",
        "example": "He has a high income.",
        "exampleTranslation": "เขามีรายได้สูง"
    },
    {
        "word": "increase",
        "partOfSpeech": "noun",
        "translation": "เพิ่มขึ้น",
        "definition": "",
        "example": "Prices are increasing.",
        "exampleTranslation": "ราคากำลังเพิ่มขึ้น"
    },
    {
        "word": "indeed",
        "partOfSpeech": "adverb",
        "translation": "โดยแท้จริง แน่นอนแล้ว",
        "definition": "",
        "example": "Thank you very much indeed.",
        "exampleTranslation": "ขอบคุณมากจริงๆ"
    },
    {
        "word": "independence",
        "partOfSpeech": "noun",
        "translation": "ความเป็นอิสระ",
        "definition": "",
        "example": "The country fought for its independence.",
        "exampleTranslation": "ประเทศต่อสู้เพื่อเอกราช"
    },
    {
        "word": "independent",
        "partOfSpeech": "adjective",
        "translation": "อิสระ",
        "definition": "",
        "example": "She is an independent woman.",
        "exampleTranslation": "เธอเป็นผู้หญิงที่พึ่งพาตัวเองได้"
    },
    {
        "word": "index",
        "partOfSpeech": "noun",
        "translation": "ดรรชนี เครื่องชี้",
        "definition": "",
        "example": "Look up the word in the index.",
        "exampleTranslation": "หาคำในดัชนี"
    },
    {
        "word": "indicate",
        "partOfSpeech": "noun",
        "translation": "ชี้แนะ แสดง",
        "definition": "",
        "example": "The sign indicates the direction.",
        "exampleTranslation": "ป้ายบอกทิศทาง"
    },
    {
        "word": "indication",
        "partOfSpeech": "noun",
        "translation": "การชี้บอก สิ่งที่บอก",
        "definition": "",
        "example": "There is no indication of rain.",
        "exampleTranslation": "ไม่มีสัญญาณว่าฝนจะตก"
    },
    {
        "word": "indirect",
        "partOfSpeech": "noun",
        "translation": "ไม่ตรง, อ้อมค้อม",
        "definition": "",
        "example": "It was an indirect question.",
        "exampleTranslation": "มันเป็นคำถามทางอ้อม"
    },
    {
        "word": "individual",
        "partOfSpeech": "adjective",
        "translation": "ปัจเจกชน, บุคคล",
        "definition": "",
        "example": "Every individual is different.",
        "exampleTranslation": "แต่ละบุคคลมีความแตกต่างกัน"
    },
    {
        "word": "indoor",
        "partOfSpeech": "noun",
        "translation": "ภายในอาคาร ในร่ม ในบ้าน",
        "definition": "",
        "example": "We have an indoor pool.",
        "exampleTranslation": "พวกเรามีสระว่ายน้ำในร่ม"
    },
    {
        "word": "indoors",
        "partOfSpeech": "noun",
        "translation": "ในบ้าน",
        "definition": "",
        "example": "It is raining, so stay indoors.",
        "exampleTranslation": "ฝนกำลังตก ดังนั้นให้อยู่ในบ้าน"
    },
    {
        "word": "industrial",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับอุตสาหกรรม",
        "definition": "",
        "example": "This is an industrial city.",
        "exampleTranslation": "เมืองนี้เป็นเมืองอุตสาหกรรม"
    },
    {
        "word": "industry",
        "partOfSpeech": "noun",
        "translation": "อุตสาหกรรม ความขยันหมั่นเพียร",
        "definition": "",
        "example": "He works in the tech industry.",
        "exampleTranslation": "เขาทำงานในอุตสาหกรรมเทคโนโลยี"
    },
    {
        "word": "inevitable",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งหลีกเลี่ยงไม่ได้",
        "definition": "",
        "example": "Death is inevitable.",
        "exampleTranslation": "ความตายเป็นสิ่งที่หลีกเลี่ยงไม่ได้"
    },
    {
        "word": "infect",
        "partOfSpeech": "noun",
        "translation": "ติดโรค ติดเชื้อ",
        "definition": "",
        "example": "The virus can infect computers.",
        "exampleTranslation": "ไวรัสสามารถแพร่เชื้อไปยังคอมพิวเตอร์ได้"
    },
    {
        "word": "infection",
        "partOfSpeech": "noun",
        "translation": "การติดเชื้อ",
        "definition": "",
        "example": "He has an ear infection.",
        "exampleTranslation": "เขามีอาการติดเชื้อที่หู"
    },
    {
        "word": "infectious",
        "partOfSpeech": "adjective",
        "translation": "ติดเชื้อ",
        "definition": "",
        "example": "This disease is highly infectious.",
        "exampleTranslation": "โรคนี้ติดต่อได้ง่ายมาก"
    },
    {
        "word": "influence",
        "partOfSpeech": "noun",
        "translation": "อิทธิพล",
        "definition": "",
        "example": "My parents had a big influence on me.",
        "exampleTranslation": "พ่อแม่มีอิทธิพลต่อฉันมาก"
    },
    {
        "word": "inform",
        "partOfSpeech": "noun",
        "translation": "แจ้ง",
        "definition": "",
        "example": "Please inform me of any changes.",
        "exampleTranslation": "โปรดแจ้งให้ฉันทราบหากมีการเปลี่ยนแปลง"
    },
    {
        "word": "informal",
        "partOfSpeech": "adjective",
        "translation": "ไม่เป็นทางการ",
        "definition": "",
        "example": "It was an informal meeting.",
        "exampleTranslation": "มันเป็นการประชุมที่ไม่เป็นทางการ"
    },
    {
        "word": "information",
        "partOfSpeech": "noun",
        "translation": "ข้อมูล",
        "definition": "",
        "example": "I need more information.",
        "exampleTranslation": "ฉันต้องการข้อมูลเพิ่มเติม"
    },
    {
        "word": "ingredient",
        "partOfSpeech": "noun",
        "translation": "ส่วนประกอบ",
        "definition": "",
        "example": "Mix all the ingredients together.",
        "exampleTranslation": "ผสมส่วนผสมทั้งหมดเข้าด้วยกัน"
    },
    {
        "word": "initial",
        "partOfSpeech": "adjective",
        "translation": "ชื่อย่อ แรกเริ่ม",
        "definition": "",
        "example": "My initial reaction was to say no.",
        "exampleTranslation": "ปฏิกิริยาแรกของฉันคือการปฏิเสธ"
    },
    {
        "word": "initially",
        "partOfSpeech": "adverb",
        "translation": "แรกเริ่ม เบื้องต้น",
        "definition": "",
        "example": "Initially, I did not like it.",
        "exampleTranslation": "ในตอนแรกฉันไม่ชอบมัน"
    },
    {
        "word": "initiative",
        "partOfSpeech": "noun",
        "translation": "การริเริ่มดําเนินการ",
        "definition": "",
        "example": "He showed great initiative.",
        "exampleTranslation": "เขาแสดงความคิดริเริ่มที่ยอดเยี่ยม"
    },
    {
        "word": "injure",
        "partOfSpeech": "noun",
        "translation": "ทําให้ได้รับบาดเจ็บ",
        "definition": "",
        "example": "He injured his leg playing football.",
        "exampleTranslation": "เขาได้รับบาดเจ็บที่ขาจากการเล่นฟุตบอล"
    },
    {
        "word": "injured",
        "partOfSpeech": "adjective",
        "translation": "ได้รับบาดเจ็บ",
        "definition": "",
        "example": "The injured passengers were taken to the hospital.",
        "exampleTranslation": "ผู้โดยสารที่บาดเจ็บถูกนำตัวส่งโรงพยาบาล"
    },
    {
        "word": "injury",
        "partOfSpeech": "noun",
        "translation": "การบาดเจ็บ",
        "definition": "",
        "example": "He recovered from his injury.",
        "exampleTranslation": "เขาหายจากอาการบาดเจ็บแล้ว"
    },
    {
        "word": "ink",
        "partOfSpeech": "noun",
        "translation": "หมึก",
        "definition": "",
        "example": "Use blue ink to sign the form.",
        "exampleTranslation": "ใช้หมึกสีน้ำเงินเซ็นแบบฟอร์ม"
    },
    {
        "word": "inner",
        "partOfSpeech": "noun",
        "translation": "ภายใน",
        "definition": "",
        "example": "The inner door is locked.",
        "exampleTranslation": "ประตูด้านในถูกล็อค"
    },
    {
        "word": "innocent",
        "partOfSpeech": "noun",
        "translation": "ไร้เดียงสา บริสุทธิѻ",
        "definition": "",
        "example": "The man was found innocent.",
        "exampleTranslation": "ชายคนนั้นถูกตัดสินว่าบริสุทธิ์"
    },
    {
        "word": "insect",
        "partOfSpeech": "noun",
        "translation": "แมลง",
        "definition": "",
        "example": "A fly is an insect.",
        "exampleTranslation": "แมลงวันเป็นแมลง"
    },
    {
        "word": "insert",
        "partOfSpeech": "noun",
        "translation": "ใส่, สอด",
        "definition": "",
        "example": "Insert the coin into the machine.",
        "exampleTranslation": "หยอดเหรียญลงในเครื่อง"
    },
    {
        "word": "inside",
        "partOfSpeech": "noun",
        "translation": "ภายใน",
        "definition": "",
        "example": "Come inside.",
        "exampleTranslation": "เข้ามาข้างในสิ"
    },
    {
        "word": "insist",
        "partOfSpeech": "noun",
        "translation": "ยืนยัน ยืนกราน",
        "definition": "",
        "example": "I insist that you stay.",
        "exampleTranslation": "ฉันยืนกรานให้คุณอยู่"
    },
    {
        "word": "install",
        "partOfSpeech": "noun",
        "translation": "ติดตั้ง สถาปนา",
        "definition": "",
        "example": "They will install a new air conditioner.",
        "exampleTranslation": "พวกเขาจะติดตั้งเครื่องปรับอากาศใหม่"
    },
    {
        "word": "instance",
        "partOfSpeech": "noun",
        "translation": "กรณี ตัวอย่าง ความรีบด่วน",
        "definition": "",
        "example": "For instance, you could read a book.",
        "exampleTranslation": "ยกตัวอย่างเช่น คุณอาจจะอ่านหนังสือ"
    },
    {
        "word": "instead",
        "partOfSpeech": "adverb",
        "translation": "แทนที่",
        "definition": "",
        "example": "I will have tea instead.",
        "exampleTranslation": "ฉันจะดื่มชาแทน"
    },
    {
        "word": "instead of",
        "partOfSpeech": "noun",
        "translation": "แทนที่จะ",
        "definition": "",
        "example": "Let us walk instead of driving.",
        "exampleTranslation": "เดินแทนการขับรถกันเถอะ"
    },
    {
        "word": "institute",
        "partOfSpeech": "noun",
        "translation": "จัดตั้งขึ้น สถาบัน",
        "definition": "",
        "example": "He works at a research institute.",
        "exampleTranslation": "เขาทำงานที่สถาบันวิจัย"
    },
    {
        "word": "institution",
        "partOfSpeech": "noun",
        "translation": "สถาบัน",
        "definition": "",
        "example": "A bank is a financial institution.",
        "exampleTranslation": "ธนาคารเป็นสถาบันการเงิน"
    },
    {
        "word": "instruction",
        "partOfSpeech": "noun",
        "translation": "การสั่งสอน",
        "definition": "",
        "example": "Read the instructions carefully.",
        "exampleTranslation": "อ่านคำแนะนำอย่างละเอียด"
    },
    {
        "word": "instrument",
        "partOfSpeech": "noun",
        "translation": "เครื่องมือ เครื่องดนตรี",
        "definition": "",
        "example": "Can you play any musical instrument?",
        "exampleTranslation": "คุณเล่นเครื่องดนตรีได้ไหม?"
    },
    {
        "word": "insult",
        "partOfSpeech": "noun",
        "translation": "ดูถูก",
        "definition": "",
        "example": "Do not insult him.",
        "exampleTranslation": "อย่าดูถูกเขา"
    },
    {
        "word": "insurance",
        "partOfSpeech": "noun",
        "translation": "การประกัน",
        "definition": "",
        "example": "Do you have car insurance?",
        "exampleTranslation": "คุณมีประกันภัยรถยนต์ไหม?"
    },
    {
        "word": "intelligence",
        "partOfSpeech": "noun",
        "translation": "สติปัญญา ความเฉลียวฉลาด",
        "definition": "",
        "example": "He is a man of high intelligence.",
        "exampleTranslation": "เขาเป็นผู้ชายที่มีความฉลาดสูง"
    },
    {
        "word": "intelligent",
        "partOfSpeech": "noun",
        "translation": "มีสติปัญญา, ฉลาด",
        "definition": "",
        "example": "Dolphins are very intelligent animals.",
        "exampleTranslation": "โลมาเป็นสัตว์ที่ฉลาดมาก"
    },
    {
        "word": "intend",
        "partOfSpeech": "noun",
        "translation": "ตั้งใจ",
        "definition": "",
        "example": "What do you intend to do?",
        "exampleTranslation": "คุณตั้งใจจะทำอะไร?"
    },
    {
        "word": "intended",
        "partOfSpeech": "verb",
        "translation": "ซึ่งมีเจตนา มุ่งหมายไว้",
        "definition": "",
        "example": "This letter was intended for you.",
        "exampleTranslation": "จดหมายฉบับนี้ตั้งใจจะส่งถึงคุณ"
    },
    {
        "word": "intention",
        "partOfSpeech": "noun",
        "translation": "ความตั้งใจ",
        "definition": "",
        "example": "It was not my intention to hurt you.",
        "exampleTranslation": "ฉันไม่ได้มีความตั้งใจที่จะทำร้ายคุณ"
    },
    {
        "word": "interest",
        "partOfSpeech": "noun",
        "translation": "ความสนใจ ดอกเบี้ย",
        "definition": "",
        "example": "He showed no interest in sports.",
        "exampleTranslation": "เขาไม่ได้แสดงความสนใจในกีฬาเลย"
    },
    {
        "word": "interested",
        "partOfSpeech": "adjective",
        "translation": "รู้สึกสนใจ",
        "definition": "",
        "example": "Are you interested in music?",
        "exampleTranslation": "คุณสนใจดนตรีไหม?"
    },
    {
        "word": "interesting",
        "partOfSpeech": "verb",
        "translation": "น่าสนใจ",
        "definition": "",
        "example": "This book is very interesting.",
        "exampleTranslation": "หนังสือเล่มนี้น่าสนใจมาก"
    },
    {
        "word": "interior",
        "partOfSpeech": "noun",
        "translation": "ภายใน ลักษณะการตกแต่งภายใน",
        "definition": "",
        "example": "The interior of the house is beautiful.",
        "exampleTranslation": "การตกแต่งภายในบ้านสวยงามมาก"
    },
    {
        "word": "internal",
        "partOfSpeech": "adjective",
        "translation": "ภายใน ซึ่งมีอยู่ภายใน",
        "definition": "",
        "example": "This is an internal problem.",
        "exampleTranslation": "นี่คือปัญหาภายใน"
    },
    {
        "word": "international",
        "partOfSpeech": "adjective",
        "translation": "ระหว่างประเทศ",
        "definition": "",
        "example": "We flew to an international airport.",
        "exampleTranslation": "พวกเราบินไปยังสนามบินนานาชาติ"
    },
    {
        "word": "Internet",
        "partOfSpeech": "noun",
        "translation": "เครือข่ายคอมพิวเตอร์ที่เชื่อมโยงทั่วโลก",
        "definition": "",
        "example": "I use the Internet every day.",
        "exampleTranslation": "ฉันใช้อินเทอร์เน็ตทุกวัน"
    },
    {
        "word": "interpret",
        "partOfSpeech": "noun",
        "translation": "แปล แปลความ",
        "definition": "",
        "example": "Can you interpret this dream for me?",
        "exampleTranslation": "คุณช่วยทำนายฝันนี้ให้ฉันได้ไหม?"
    },
    {
        "word": "interpretation",
        "partOfSpeech": "noun",
        "translation": "การแปล การแปลความ การเป็นล่าม",
        "definition": "",
        "example": "That is an interesting interpretation.",
        "exampleTranslation": "นั่นเป็นการตีความที่น่าสนใจ"
    },
    {
        "word": "interrupt",
        "partOfSpeech": "noun",
        "translation": "ขัดจังหวะ",
        "definition": "",
        "example": "Do not interrupt me when I am speaking.",
        "exampleTranslation": "อย่าขัดจังหวะเวลาฉันพูด"
    },
    {
        "word": "interruption",
        "partOfSpeech": "noun",
        "translation": "การขัดจังหวะ การหยุดชะงัก",
        "definition": "",
        "example": "We worked without interruption.",
        "exampleTranslation": "พวกเราทำงานโดยไม่มีการขัดจังหวะ"
    },
    {
        "word": "interval",
        "partOfSpeech": "noun",
        "translation": "ช่วงระหว่าง หยุดพักเป็นช่วงๆ",
        "definition": "",
        "example": "There will be a short interval.",
        "exampleTranslation": "จะมีการพักครึ่งเวลาสั้นๆ"
    },
    {
        "word": "interview",
        "partOfSpeech": "noun",
        "translation": "การสัมภาษณ์",
        "definition": "",
        "example": "I have a job interview tomorrow.",
        "exampleTranslation": "ฉันมีสัมภาษณ์งานพรุ่งนี้"
    },
    {
        "word": "into",
        "partOfSpeech": "noun",
        "translation": "เข้าไป ไปยัง",
        "definition": "",
        "example": "He walked into the room.",
        "exampleTranslation": "เขาเดินเข้าไปในห้อง"
    },
    {
        "word": "introduce",
        "partOfSpeech": "noun",
        "translation": "แนะนํา",
        "definition": "",
        "example": "Let me introduce my friend.",
        "exampleTranslation": "ขออนุญาตแนะนำเพื่อนของฉัน"
    },
    {
        "word": "introduction",
        "partOfSpeech": "noun",
        "translation": "การแนะนํา",
        "definition": "",
        "example": "Read the introduction first.",
        "exampleTranslation": "อ่านบทนำก่อน"
    },
    {
        "word": "invent",
        "partOfSpeech": "noun",
        "translation": "ประดิษฐ์",
        "definition": "",
        "example": "Who invented the telephone?",
        "exampleTranslation": "ใครประดิษฐ์โทรศัพท์?"
    },
    {
        "word": "invention",
        "partOfSpeech": "noun",
        "translation": "การประดิษฐ์",
        "definition": "",
        "example": "The internet is a great invention.",
        "exampleTranslation": "อินเทอร์เน็ตเป็นสิ่งประดิษฐ์ที่ยิ่งใหญ่"
    },
    {
        "word": "invest",
        "partOfSpeech": "noun",
        "translation": "ลงทุน",
        "definition": "",
        "example": "It is wise to invest your money.",
        "exampleTranslation": "การลงทุนเป็นเรื่องที่ชาญฉลาด"
    },
    {
        "word": "investigate",
        "partOfSpeech": "noun",
        "translation": "สํารวจ, สืบสวน",
        "definition": "",
        "example": "The police are investigating the crime.",
        "exampleTranslation": "ตำรวจกำลังสืบสวนอาชญากรรม"
    },
    {
        "word": "investigation",
        "partOfSpeech": "noun",
        "translation": "การสืบสวน การไต่สวน การสอบสวน",
        "definition": "",
        "example": "The investigation is ongoing.",
        "exampleTranslation": "การสืบสวนกำลังดำเนินอยู่"
    },
    {
        "word": "investment",
        "partOfSpeech": "noun",
        "translation": "การลงทุน",
        "definition": "",
        "example": "Buying a house is a good investment.",
        "exampleTranslation": "การซื้อบ้านเป็นการลงทุนที่ดี"
    },
    {
        "word": "invitation",
        "partOfSpeech": "noun",
        "translation": "การเชิญ",
        "definition": "",
        "example": "I received an invitation to the party.",
        "exampleTranslation": "ฉันได้รับบัตรเชิญไปงานปาร์ตี้"
    },
    {
        "word": "invite",
        "partOfSpeech": "noun",
        "translation": "เชิญ",
        "definition": "",
        "example": "We will invite them to dinner.",
        "exampleTranslation": "พวกเราจะเชิญพวกเขามาทานอาหารเย็น"
    },
    {
        "word": "involve",
        "partOfSpeech": "noun",
        "translation": "เกี่ยวพัน ทําให้พัวพัน",
        "definition": "",
        "example": "This job involves a lot of traveling.",
        "exampleTranslation": "งานนี้เกี่ยวข้องกับการเดินทางมาก"
    },
    {
        "word": "involvement",
        "partOfSpeech": "noun",
        "translation": "การเกี่ยวข้อง การเกี่ยวโยง ความสัมพันธ์ในด้านชู้สาว",
        "definition": "",
        "example": "They denied their involvement in the crime.",
        "exampleTranslation": "พวกเขาปฏิเสธว่าไม่มีส่วนเกี่ยวข้องกับอาชญากรรม"
    },
    {
        "word": "iron",
        "partOfSpeech": "noun",
        "translation": "รีดผ้า",
        "definition": "",
        "example": "This box is made of iron.",
        "exampleTranslation": "กล่องใบนี้ทำจากเหล็ก"
    },
    {
        "word": "irritate",
        "partOfSpeech": "noun",
        "translation": "รบกวน ทําให้ระคายเคือง",
        "definition": "",
        "example": "His constant complaining irritates me.",
        "exampleTranslation": "การบ่นตลอดเวลาของเขาทำให้ฉันรำคาญ"
    },
    {
        "word": "irritated",
        "partOfSpeech": "adjective",
        "translation": "โกรธเคือง",
        "definition": "",
        "example": "I was irritated by the noise.",
        "exampleTranslation": "ฉันรู้สึกรำคาญเสียงดัง"
    },
    {
        "word": "island",
        "partOfSpeech": "noun",
        "translation": "เกาะ",
        "definition": "",
        "example": "They live on a small island.",
        "exampleTranslation": "พวกเขาอาศัยอยู่บนเกาะเล็กๆ"
    },
    {
        "word": "issue",
        "partOfSpeech": "noun",
        "translation": "ประเด็นถกเถียงหรือโต้แย้ง ฉบับ",
        "definition": "",
        "example": "This is a very important issue.",
        "exampleTranslation": "นี่เป็นประเด็นที่สำคัญมาก"
    },
    {
        "word": "it",
        "partOfSpeech": "noun",
        "translation": "มัน (ใช้แทนสิ่งของ, สัตว์)",
        "definition": "",
        "example": "It is raining.",
        "exampleTranslation": "ฝนกำลังตก"
    },
    {
        "word": "item",
        "partOfSpeech": "noun",
        "translation": "เรื่อง, อัน",
        "definition": "",
        "example": "There is one more item on the list.",
        "exampleTranslation": "มีอีกหนึ่งรายการในใบรายการ"
    },
    {
        "word": "its",
        "partOfSpeech": "noun",
        "translation": "ของมัน",
        "definition": "",
        "example": "The dog wagged its tail.",
        "exampleTranslation": "สุนัขกระดิกหางของมัน"
    },
    {
        "word": "itself",
        "partOfSpeech": "noun",
        "translation": "ตัวเอง",
        "definition": "",
        "example": "The machine turns itself off.",
        "exampleTranslation": "เครื่องจะปิดการทำงานด้วยตัวมันเอง"
    },
    {
        "word": "jacket",
        "partOfSpeech": "noun",
        "translation": "เสื้อแจ๊คเก็ต เสื้อชั้นนอก",
        "definition": "",
        "example": "Put on your jacket, it is cold.",
        "exampleTranslation": "สวมเสื้อแจ็คเก็ตของคุณสิ อากาศหนาวนะ"
    },
    {
        "word": "jam",
        "partOfSpeech": "noun",
        "translation": "(การ) อัด ยัด เบียด . ผลไม้กวน",
        "definition": "",
        "example": "I like strawberry jam.",
        "exampleTranslation": "ฉันชอบแยมสตรอว์เบอร์รี"
    },
    {
        "word": "January",
        "partOfSpeech": "noun",
        "translation": "มกราคม",
        "definition": "",
        "example": "January is the first month of the year.",
        "exampleTranslation": "เดือนมกราคมเป็นเดือนแรกของปี"
    },
    {
        "word": "jealous",
        "partOfSpeech": "adjective",
        "translation": "อิจฉา",
        "definition": "",
        "example": "She was jealous of his success.",
        "exampleTranslation": "เธออิจฉาในความสำเร็จของเขา"
    },
    {
        "word": "jeans",
        "partOfSpeech": "noun",
        "translation": "ยีนส์(เสื้อผ้า) กางเกงยีนส์",
        "definition": "",
        "example": "He is wearing blue jeans.",
        "exampleTranslation": "เขาสวมกางเกงยีนส์สีน้ำเงิน"
    },
    {
        "word": "jelly",
        "partOfSpeech": "adverb",
        "translation": "วุ้น",
        "definition": "",
        "example": "The children love eating jelly.",
        "exampleTranslation": "เด็กๆ ชอบกินเยลลี่"
    },
    {
        "word": "jewellery",
        "partOfSpeech": "noun",
        "translation": "เพชรพลอย อัญมณี",
        "definition": "",
        "example": "She wears a lot of gold jewellery.",
        "exampleTranslation": "เธอสวมเครื่องประดับทองมากมาย"
    },
    {
        "word": "job",
        "partOfSpeech": "noun",
        "translation": "งาน",
        "definition": "",
        "example": "He is looking for a new job.",
        "exampleTranslation": "เขากำลังมองหางานใหม่"
    },
    {
        "word": "join",
        "partOfSpeech": "noun",
        "translation": "มีส่วนร่วม",
        "definition": "",
        "example": "Would you like to join us?",
        "exampleTranslation": "คุณอยากมาร่วมกับพวกเราไหม?"
    },
    {
        "word": "joint",
        "partOfSpeech": "noun",
        "translation": "ร่วมกัน",
        "definition": "",
        "example": "They opened a joint bank account.",
        "exampleTranslation": "พวกเขาเปิดบัญชีธนาคารร่วมกัน"
    },
    {
        "word": "joke",
        "partOfSpeech": "noun",
        "translation": "เรื่องตลก",
        "definition": "",
        "example": "He told a very funny joke.",
        "exampleTranslation": "เขาเล่าเรื่องตลกที่ตลกมาก"
    },
    {
        "word": "journalist",
        "partOfSpeech": "noun",
        "translation": "นักหนังสือพิมพ์",
        "definition": "",
        "example": "She works as a journalist for a newspaper.",
        "exampleTranslation": "เธอทำงานเป็นนักข่าวให้กับหนังสือพิมพ์"
    },
    {
        "word": "journey",
        "partOfSpeech": "noun",
        "translation": "การเดินทาง",
        "definition": "",
        "example": "Have a safe journey.",
        "exampleTranslation": "ขอให้เดินทางโดยสวัสดิภาพ"
    },
    {
        "word": "joy",
        "partOfSpeech": "noun",
        "translation": "สนุก ร่าเริง",
        "definition": "",
        "example": "The baby brought them much joy.",
        "exampleTranslation": "ทารกนำความสุขมาให้พวกเขาอย่างมาก"
    },
    {
        "word": "judge",
        "partOfSpeech": "noun",
        "translation": "ผู้พิพากษา",
        "definition": "",
        "example": "The judge sentenced him to ten years in prison.",
        "exampleTranslation": "ผู้พิพากษาตัดสินจำคุกเขาเป็นเวลาสิบปี"
    },
    {
        "word": "judgement",
        "partOfSpeech": "noun",
        "translation": "การตัดสิน การพิพากษา",
        "definition": "",
        "example": "I trust your judgement.",
        "exampleTranslation": "ฉันเชื่อในการตัดสินใจของคุณ"
    },
    {
        "word": "juice",
        "partOfSpeech": "noun",
        "translation": "นํ้าผลไม้",
        "definition": "",
        "example": "Can I have some orange juice?",
        "exampleTranslation": "ฉันขอน้ำส้มหน่อยได้ไหม?"
    },
    {
        "word": "July",
        "partOfSpeech": "noun",
        "translation": "กรกฎาคม",
        "definition": "",
        "example": "My birthday is in July.",
        "exampleTranslation": "วันเกิดของฉันอยู่ในเดือนกรกฎาคม"
    },
    {
        "word": "jump",
        "partOfSpeech": "noun",
        "translation": "กระโดด",
        "definition": "",
        "example": "The dog can jump very high.",
        "exampleTranslation": "สุนัขสามารถกระโดดได้สูงมาก"
    },
    {
        "word": "June",
        "partOfSpeech": "noun",
        "translation": "มิถุนายน",
        "definition": "",
        "example": "We are going on holiday in June.",
        "exampleTranslation": "พวกเราจะไปพักร้อนในเดือนมิถุนายน"
    },
    {
        "word": "junior",
        "partOfSpeech": "noun",
        "translation": "อ่อนอาวุโส นักศึกษาชั้นปีที่ 3",
        "definition": "",
        "example": "He is a junior manager.",
        "exampleTranslation": "เขาเป็นผู้จัดการระดับล่าง"
    },
    {
        "word": "just",
        "partOfSpeech": "adverb",
        "translation": "เพิ่งจะ",
        "definition": "",
        "example": "I just finished my homework.",
        "exampleTranslation": "ฉันเพิ่งทำการบ้านเสร็จ"
    },
    {
        "word": "justice",
        "partOfSpeech": "noun",
        "translation": "ความยุติธรรม",
        "definition": "",
        "example": "They are fighting for justice.",
        "exampleTranslation": "พวกเขากำลังต่อสู้เพื่อความยุติธรรม"
    },
    {
        "word": "justified",
        "partOfSpeech": "adjective",
        "translation": "อย่างเที่ยงธรรม",
        "definition": "",
        "example": "His anger was completely justified.",
        "exampleTranslation": "ความโกรธของเขามีเหตุผลที่สมควรอย่างยิ่ง"
    },
    {
        "word": "justify",
        "partOfSpeech": "noun",
        "translation": "พิสูจน์ว่าถูกต้อง จัดบรรทัดให้เสมอกัน",
        "definition": "",
        "example": "You do not need to justify your decision to me.",
        "exampleTranslation": "คุณไม่จำเป็นต้องอธิบายเหตุผลในการตัดสินใจของคุณกับฉัน"
    },
    {
        "word": "keen",
        "partOfSpeech": "noun",
        "translation": "กระตือรือร้น",
        "definition": "",
        "example": "He is keen on learning to play the guitar.",
        "exampleTranslation": "เขากระตือรือร้นที่จะเรียนเล่นกีตาร์"
    },
    {
        "word": "keep",
        "partOfSpeech": "verb",
        "translation": "เก็บ รักษาไว้",
        "definition": "",
        "example": "Keep the change.",
        "exampleTranslation": "เก็บเงินทอนไว้เถอะ"
    },
    {
        "word": "key",
        "partOfSpeech": "noun",
        "translation": "กุญแจ",
        "definition": "",
        "example": "I lost my car keys.",
        "exampleTranslation": "ฉันทำกุญแจรถหาย"
    },
    {
        "word": "keyboard",
        "partOfSpeech": "noun",
        "translation": "แป้นพิมพ์ดีด",
        "definition": "",
        "example": "I need a new computer keyboard.",
        "exampleTranslation": "ฉันต้องการแป้นพิมพ์คอมพิวเตอร์ใหม่"
    },
    {
        "word": "kick",
        "partOfSpeech": "noun",
        "translation": "เตะ",
        "definition": "",
        "example": "The boy kicked the ball.",
        "exampleTranslation": "เด็กผู้ชายเตะลูกบอล"
    },
    {
        "word": "kid",
        "partOfSpeech": "noun",
        "translation": "เด็ก",
        "definition": "",
        "example": "The kids are playing outside.",
        "exampleTranslation": "เด็กๆ กำลังเล่นอยู่ข้างนอก"
    },
    {
        "word": "kill",
        "partOfSpeech": "noun",
        "translation": "ฆ่า",
        "definition": "",
        "example": "The poison can kill you.",
        "exampleTranslation": "ยาพิษสามารถฆ่าคุณได้"
    },
    {
        "word": "killing",
        "partOfSpeech": "verb",
        "translation": "การฆ่า การทําลาย",
        "definition": "",
        "example": "The killing of innocent people is wrong.",
        "exampleTranslation": "การฆ่าผู้บริสุทธิ์เป็นสิ่งที่ผิด"
    },
    {
        "word": "kilogram",
        "partOfSpeech": "noun",
        "translation": "กิโลกรัม",
        "definition": "",
        "example": "I bought one kilogram of apples.",
        "exampleTranslation": "ฉันซื้อแอปเปิลหนึ่งกิโลกรัม"
    },
    {
        "word": "kilometre",
        "partOfSpeech": "noun",
        "translation": "กิโลเมตร",
        "definition": "",
        "example": "The beach is two kilometres away.",
        "exampleTranslation": "ชายหาดอยู่ห่างออกไปสองกิโลเมตร"
    },
    {
        "word": "kind",
        "partOfSpeech": "noun",
        "translation": "ชนิด ประเภท",
        "definition": "",
        "example": "What kind of music do you like?",
        "exampleTranslation": "คุณชอบดนตรีประเภทไหน?"
    },
    {
        "word": "kindly",
        "partOfSpeech": "adverb",
        "translation": "เมตตา, กรุณา",
        "definition": "",
        "example": "Will you kindly open the window?",
        "exampleTranslation": "กรุณาเปิดหน้าต่างให้หน่อยได้ไหม?"
    },
    {
        "word": "kindness",
        "partOfSpeech": "noun",
        "translation": "ความเมตตา ความกรุณา ความปรานี",
        "definition": "",
        "example": "Thank you for your kindness.",
        "exampleTranslation": "ขอบคุณสำหรับความมีน้ำใจของคุณ"
    },
    {
        "word": "king",
        "partOfSpeech": "noun",
        "translation": "กษัตริย์",
        "definition": "",
        "example": "The king ruled for fifty years.",
        "exampleTranslation": "พระราชาทรงครองราชย์เป็นเวลาห้าสิบปี"
    },
    {
        "word": "kiss",
        "partOfSpeech": "noun",
        "translation": "จูบ",
        "definition": "",
        "example": "He gave her a kiss on the cheek.",
        "exampleTranslation": "เขาจูบเธอที่แก้ม"
    },
    {
        "word": "kitchen",
        "partOfSpeech": "noun",
        "translation": "ห้องครัว",
        "definition": "",
        "example": "She is cooking in the kitchen.",
        "exampleTranslation": "เธอกำลังทำอาหารในห้องครัว"
    },
    {
        "word": "knee",
        "partOfSpeech": "noun",
        "translation": "หัวเข่า",
        "definition": "",
        "example": "He hurt his left knee.",
        "exampleTranslation": "เขาได้รับบาดเจ็บที่หัวเข่าซ้าย"
    },
    {
        "word": "knife",
        "partOfSpeech": "noun",
        "translation": "มีด",
        "definition": "",
        "example": "Use a knife to cut the meat.",
        "exampleTranslation": "ใช้มีดหั่นเนื้อ"
    },
    {
        "word": "knit",
        "partOfSpeech": "noun",
        "translation": "ถัก(ไหมพรม), ชุน",
        "definition": "",
        "example": "My grandmother taught me how to knit.",
        "exampleTranslation": "คุณย่าสอนฉันถักนิตติ้ง"
    },
    {
        "word": "knitting",
        "partOfSpeech": "verb",
        "translation": "การถัก (ไหมพรม)",
        "definition": "",
        "example": "She enjoys knitting in the evening.",
        "exampleTranslation": "เธอชอบถักนิตติ้งในตอนเย็น"
    },
    {
        "word": "knock",
        "partOfSpeech": "noun",
        "translation": "เคาะ",
        "definition": "",
        "example": "Someone is knocking on the door.",
        "exampleTranslation": "มีคนกำลังเคาะประตู"
    },
    {
        "word": "knot",
        "partOfSpeech": "noun",
        "translation": "ปม, เงื่อน",
        "definition": "",
        "example": "Tie a knot in the rope.",
        "exampleTranslation": "ผูกปมที่เชือก"
    },
    {
        "word": "know",
        "partOfSpeech": "verb",
        "translation": "รู้, ทราบ",
        "definition": "",
        "example": "Do you know his name?",
        "exampleTranslation": "คุณรู้ชื่อของเขาไหม?"
    },
    {
        "word": "knowledge",
        "partOfSpeech": "noun",
        "translation": "ความรู้",
        "definition": "",
        "example": "He has a lot of knowledge about history.",
        "exampleTranslation": "เขามีความรู้เกี่ยวกับประวัติศาสตร์มากมาย"
    },
    {
        "word": "lab",
        "partOfSpeech": "noun",
        "translation": "ห้องทดลอง",
        "definition": "",
        "example": "The science class is in the lab.",
        "exampleTranslation": "ชั้นเรียนวิทยาศาสตร์อยู่ในห้องปฏิบัติการ"
    },
    {
        "word": "label",
        "partOfSpeech": "noun",
        "translation": "ฉลาก ป้าย",
        "definition": "",
        "example": "Read the label on the bottle.",
        "exampleTranslation": "อ่านฉลากบนขวด"
    },
    {
        "word": "laboratory",
        "partOfSpeech": "noun",
        "translation": "ห้องทดลอง",
        "definition": "",
        "example": "The blood samples were sent to the laboratory.",
        "exampleTranslation": "ตัวอย่างเลือดถูกส่งไปยังห้องปฏิบัติการ"
    },
    {
        "word": "labour",
        "partOfSpeech": "noun",
        "translation": "แรงงาน",
        "definition": "",
        "example": "Building a house requires a lot of manual labour.",
        "exampleTranslation": "การสร้างบ้านต้องใช้แรงงานคนจำนวนมาก"
    },
    {
        "word": "lack",
        "partOfSpeech": "noun",
        "translation": "ขาดแคลน",
        "definition": "",
        "example": "There is a lack of fresh water in the village.",
        "exampleTranslation": "หมู่บ้านนี้ขาดแคลนน้ำจืด"
    },
    {
        "word": "lady",
        "partOfSpeech": "noun",
        "translation": "สุภาพสตรี",
        "definition": "",
        "example": "She is a very polite lady.",
        "exampleTranslation": "เธอเป็นสุภาพสตรีที่สุภาพมาก"
    },
    {
        "word": "lake",
        "partOfSpeech": "noun",
        "translation": "ทะเลสาบ",
        "definition": "",
        "example": "We went swimming in the lake.",
        "exampleTranslation": "พวกเราไปว่ายน้ำในทะเลสาบ"
    },
    {
        "word": "lamp",
        "partOfSpeech": "noun",
        "translation": "โคมไฟ",
        "definition": "",
        "example": "Turn on the lamp, please.",
        "exampleTranslation": "โปรดเปิดโคมไฟ"
    },
    {
        "word": "land",
        "partOfSpeech": "noun",
        "translation": "พื้นที่",
        "definition": "",
        "example": "The airplane will land soon.",
        "exampleTranslation": "เครื่องบินกำลังจะลงจอดในไม่ช้า"
    },
    {
        "word": "landscape",
        "partOfSpeech": "noun",
        "translation": "ทิวทัศน์ ลักษณะภูมิประเทศ",
        "definition": "",
        "example": "The landscape here is beautiful.",
        "exampleTranslation": "ภูมิทัศน์ที่นี่สวยงามมาก"
    },
    {
        "word": "lane",
        "partOfSpeech": "noun",
        "translation": "ทาง",
        "definition": "",
        "example": "Stay in the left lane.",
        "exampleTranslation": "ขับให้อยู่ในเลนซ้าย"
    },
    {
        "word": "language",
        "partOfSpeech": "noun",
        "translation": "ภาษา",
        "definition": "",
        "example": "English is a global language.",
        "exampleTranslation": "ภาษาอังกฤษเป็นภาษาสากล"
    },
    {
        "word": "large",
        "partOfSpeech": "adjective",
        "translation": "ใหญ่",
        "definition": "",
        "example": "They live in a large house.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในบ้านหลังใหญ่"
    },
    {
        "word": "largely",
        "partOfSpeech": "adverb",
        "translation": "โดยส่วนมาก อย่างมากมาย",
        "definition": "",
        "example": "His success is largely due to hard work.",
        "exampleTranslation": "ความสำเร็จของเขาส่วนใหญ่มาจากความขยัน"
    },
    {
        "word": "last",
        "partOfSpeech": "adjective",
        "translation": "สุดท้าย",
        "definition": "",
        "example": "This is the last train.",
        "exampleTranslation": "นี่คือรถไฟขบวนสุดท้าย"
    },
    {
        "word": "late",
        "partOfSpeech": "adverb",
        "translation": "สาย",
        "definition": "",
        "example": "Hurry up, or we will be late.",
        "exampleTranslation": "รีบหน่อย มิฉะนั้นเราจะสาย"
    },
    {
        "word": "later",
        "partOfSpeech": "adverb",
        "translation": "ในภายหลัง สายกว่า",
        "definition": "",
        "example": "I will call you later.",
        "exampleTranslation": "ฉันจะโทรหาคุณทีหลัง"
    },
    {
        "word": "latest",
        "partOfSpeech": "adjective",
        "translation": "ล่าสุด",
        "definition": "",
        "example": "Have you heard the latest news?",
        "exampleTranslation": "คุณได้ยินข่าวล่าสุดหรือยัง?"
    },
    {
        "word": "latter",
        "partOfSpeech": "noun",
        "translation": "อันหลัง",
        "definition": "",
        "example": "Of the two options, I prefer the latter.",
        "exampleTranslation": "ในสองตัวเลือกนี้ ฉันชอบอย่างหลังมากกว่า"
    },
    {
        "word": "laugh",
        "partOfSpeech": "noun",
        "translation": "หัวเราะ ยิ้ม",
        "definition": "",
        "example": "His joke made everyone laugh.",
        "exampleTranslation": "เรื่องตลกของเขาทำให้ทุกคนหัวเราะ"
    },
    {
        "word": "launch",
        "partOfSpeech": "noun",
        "translation": "ปล่อย, เริ่ม",
        "definition": "",
        "example": "They will launch the new product next month.",
        "exampleTranslation": "พวกเขาจะเปิดตัวผลิตภัณฑ์ใหม่ในเดือนหน้า"
    },
    {
        "word": "law",
        "partOfSpeech": "noun",
        "translation": "กฎหมาย ข้อบังคับ",
        "definition": "",
        "example": "You must obey the law.",
        "exampleTranslation": "คุณต้องปฏิบัติตามกฎหมาย"
    },
    {
        "word": "lawyer",
        "partOfSpeech": "noun",
        "translation": "ทนายความ",
        "definition": "",
        "example": "You should hire a lawyer.",
        "exampleTranslation": "คุณควรจ้างทนายความ"
    },
    {
        "word": "lay",
        "partOfSpeech": "noun",
        "translation": "วาง, วางไข่",
        "definition": "",
        "example": "Lay the book on the table.",
        "exampleTranslation": "วางหนังสือลงบนโต๊ะ"
    },
    {
        "word": "layer",
        "partOfSpeech": "noun",
        "translation": "ชั้น",
        "definition": "",
        "example": "The cake has three layers.",
        "exampleTranslation": "เค้กมีสามชั้น"
    },
    {
        "word": "lazy",
        "partOfSpeech": "noun",
        "translation": "ขี้เกียจ",
        "definition": "",
        "example": "Do not be lazy.",
        "exampleTranslation": "อย่าขี้เกียจ"
    },
    {
        "word": "lead",
        "partOfSpeech": "noun",
        "translation": "นํา ชักจูง",
        "definition": "",
        "example": "She will lead the team.",
        "exampleTranslation": "เธอจะเป็นผู้นำทีม"
    },
    {
        "word": "leader",
        "partOfSpeech": "noun",
        "translation": "ผู้นํา หัวหน้า",
        "definition": "",
        "example": "He is a born leader.",
        "exampleTranslation": "เขาเกิดมาเพื่อเป็นผู้นำ"
    },
    {
        "word": "leading",
        "partOfSpeech": "verb",
        "translation": "การนํา ชั้นแนวหน้า",
        "definition": "",
        "example": "She played a leading role in the movie.",
        "exampleTranslation": "เธอรับบทนำในภาพยนตร์"
    },
    {
        "word": "leaf",
        "partOfSpeech": "noun",
        "translation": "ใบไม้",
        "definition": "",
        "example": "The leaf turned yellow in autumn.",
        "exampleTranslation": "ใบไม้เปลี่ยนเป็นสีเหลืองในฤดูใบไม้ร่วง"
    },
    {
        "word": "league",
        "partOfSpeech": "noun",
        "translation": "สหพันธ์, หน่วยระยะทาง",
        "definition": "",
        "example": "Their team plays in the national league.",
        "exampleTranslation": "ทีมของพวกเขาเล่นในลีกระดับชาติ"
    },
    {
        "word": "lean",
        "partOfSpeech": "noun",
        "translation": "ยัน พิง",
        "definition": "",
        "example": "Do not lean against the wall.",
        "exampleTranslation": "อย่าพิงกำแพง"
    },
    {
        "word": "learn",
        "partOfSpeech": "noun",
        "translation": "เรียน",
        "definition": "",
        "example": "I want to learn Spanish.",
        "exampleTranslation": "ฉันต้องการเรียนภาษาสเปน"
    },
    {
        "word": "least",
        "partOfSpeech": "adjective",
        "translation": "น้อยที่สุด",
        "definition": "",
        "example": "He has the least money of us all.",
        "exampleTranslation": "เขามีเงินน้อยที่สุดในบรรดาพวกเราทุกคน"
    },
    {
        "word": "leather",
        "partOfSpeech": "noun",
        "translation": "เครื่องหนัง",
        "definition": "",
        "example": "She is wearing a leather jacket.",
        "exampleTranslation": "เธอสวมเสื้อแจ็คเก็ตหนัง"
    },
    {
        "word": "leave",
        "partOfSpeech": "verb",
        "translation": "ออกไป",
        "definition": "",
        "example": "What time does the train leave?",
        "exampleTranslation": "รถไฟออกกี่โมง?"
    },
    {
        "word": "lecture",
        "partOfSpeech": "noun",
        "translation": "บรรยาย",
        "definition": "",
        "example": "The professor gave a lecture on history.",
        "exampleTranslation": "ศาสตราจารย์บรรยายเกี่ยวกับประวัติศาสตร์"
    },
    {
        "word": "left",
        "partOfSpeech": "noun",
        "translation": "ด้านซ้าย เลี้ยวซ้าย",
        "definition": "",
        "example": "Turn left at the next corner.",
        "exampleTranslation": "เลี้ยวซ้ายที่หัวมุมถัดไป"
    },
    {
        "word": "leg",
        "partOfSpeech": "noun",
        "translation": "ขา",
        "definition": "",
        "example": "My leg hurts.",
        "exampleTranslation": "ขาของฉันเจ็บ"
    },
    {
        "word": "legal",
        "partOfSpeech": "adjective",
        "translation": "ตามกฎหมาย",
        "definition": "",
        "example": "It is a legal requirement.",
        "exampleTranslation": "มันเป็นข้อกำหนดทางกฎหมาย"
    },
    {
        "word": "lemon",
        "partOfSpeech": "noun",
        "translation": "มะนาว (ผิวสีเหลือง)",
        "definition": "",
        "example": "Add a slice of lemon to your tea.",
        "exampleTranslation": "ใส่เลมอนฝานลงในชาของคุณ"
    },
    {
        "word": "lend",
        "partOfSpeech": "noun",
        "translation": "ให้ยืม",
        "definition": "",
        "example": "Can you lend me some money?",
        "exampleTranslation": "คุณช่วยให้ฉันยืมเงินหน่อยได้ไหม?"
    },
    {
        "word": "length",
        "partOfSpeech": "noun",
        "translation": "ความยาว",
        "definition": "",
        "example": "What is the length of this table?",
        "exampleTranslation": "ความยาวของโต๊ะนี้คือเท่าไหร่?"
    },
    {
        "word": "less",
        "partOfSpeech": "adverb",
        "translation": "น้อยกว่า เล็กน้อย",
        "definition": "",
        "example": "Eat less sugar.",
        "exampleTranslation": "กินน้ำตาลให้น้อยลง"
    },
    {
        "word": "lesson",
        "partOfSpeech": "noun",
        "translation": "บทเรียน",
        "definition": "",
        "example": "We have an English lesson today.",
        "exampleTranslation": "พวกเรามีเรียนภาษาอังกฤษวันนี้"
    },
    {
        "word": "let",
        "partOfSpeech": "verb",
        "translation": "ให้ทํา อนุญาตให้",
        "definition": "",
        "example": "Let me help you.",
        "exampleTranslation": "ให้ฉันช่วยคุณนะ"
    },
    {
        "word": "letter",
        "partOfSpeech": "noun",
        "translation": "ตัวอักษร จดหมาย",
        "definition": "",
        "example": "I wrote a letter to my friend.",
        "exampleTranslation": "ฉันเขียนจดหมายถึงเพื่อนของฉัน"
    },
    {
        "word": "level",
        "partOfSpeech": "noun",
        "translation": "แนวราบ ระดับ",
        "definition": "",
        "example": "The water level is rising.",
        "exampleTranslation": "ระดับน้ำกำลังสูงขึ้น"
    },
    {
        "word": "library",
        "partOfSpeech": "noun",
        "translation": "ห้องสมุด",
        "definition": "",
        "example": "I borrowed a book from the library.",
        "exampleTranslation": "ฉันยืมหนังสือจากห้องสมุด"
    },
    {
        "word": "licence",
        "partOfSpeech": "noun",
        "translation": "ใบอนุญาต",
        "definition": "",
        "example": "Do you have a driving licence?",
        "exampleTranslation": "คุณมีใบขับขี่ไหม?"
    },
    {
        "word": "license",
        "partOfSpeech": "noun",
        "translation": "การอนุญาต ใบอนุญาต",
        "definition": "",
        "example": "He is a licensed doctor.",
        "exampleTranslation": "เขาเป็นแพทย์ที่มีใบอนุญาต"
    },
    {
        "word": "lid",
        "partOfSpeech": "noun",
        "translation": "ฝาปิด",
        "definition": "",
        "example": "Put the lid on the pot.",
        "exampleTranslation": "ปิดฝาหม้อ"
    },
    {
        "word": "lie",
        "partOfSpeech": "noun",
        "translation": "พูดโกหก นอนลง",
        "definition": "",
        "example": "Do not tell a lie.",
        "exampleTranslation": "อย่าพูดโกหก"
    },
    {
        "word": "life",
        "partOfSpeech": "noun",
        "translation": "ชีวิต",
        "definition": "",
        "example": "Life is full of surprises.",
        "exampleTranslation": "ชีวิตเต็มไปด้วยเรื่องประหลาดใจ"
    },
    {
        "word": "lift",
        "partOfSpeech": "noun",
        "translation": "ยกขึ้น แบกขึ้น",
        "definition": "",
        "example": "He helped me lift the heavy box.",
        "exampleTranslation": "เขาช่วยฉันยกกล่องที่หนัก"
    },
    {
        "word": "light",
        "partOfSpeech": "noun",
        "translation": "แสง แสงสว่าง ความสว่าง",
        "definition": "",
        "example": "Turn on the light.",
        "exampleTranslation": "เปิดไฟ"
    },
    {
        "word": "lightly",
        "partOfSpeech": "adverb",
        "translation": "อย่างเบาๆ",
        "definition": "",
        "example": "She tapped him lightly on the shoulder.",
        "exampleTranslation": "เธอแตะไหล่เขาเบาๆ"
    },
    {
        "word": "like",
        "partOfSpeech": "noun",
        "translation": "ชอบ",
        "definition": "",
        "example": "I like ice cream.",
        "exampleTranslation": "ฉันชอบไอศกรีม"
    },
    {
        "word": "likely",
        "partOfSpeech": "adjective",
        "translation": "น่าจะ",
        "definition": "",
        "example": "It is likely to rain tomorrow.",
        "exampleTranslation": "พรุ่งนี้ฝนน่าจะตก"
    },
    {
        "word": "limit",
        "partOfSpeech": "noun",
        "translation": "จํากัด",
        "definition": "",
        "example": "There is a speed limit here.",
        "exampleTranslation": "มีการจำกัดความเร็วที่นี่"
    },
    {
        "word": "limited",
        "partOfSpeech": "adjective",
        "translation": "ถูกจํากัด มีขอบเขต",
        "definition": "",
        "example": "We have a limited amount of time.",
        "exampleTranslation": "พวกเรามีเวลาจำกัด"
    },
    {
        "word": "line",
        "partOfSpeech": "noun",
        "translation": "เส้น",
        "definition": "",
        "example": "Draw a straight line.",
        "exampleTranslation": "วาดเส้นตรง"
    },
    {
        "word": "link",
        "partOfSpeech": "noun",
        "translation": "จุดเชื่อมโยง สิ่งเชื่อมโยง",
        "definition": "",
        "example": "Click the link below.",
        "exampleTranslation": "คลิกลิงก์ด้านล่าง"
    },
    {
        "word": "lip",
        "partOfSpeech": "noun",
        "translation": "ริมฝีปาก",
        "definition": "",
        "example": "She bit her lip.",
        "exampleTranslation": "เธอกัดริมฝีปากของเธอ"
    },
    {
        "word": "liquid",
        "partOfSpeech": "noun",
        "translation": "เป็นของเหลว ใส สดใส แวววาว",
        "definition": "",
        "example": "Water is a liquid.",
        "exampleTranslation": "น้ำเป็นของเหลว"
    },
    {
        "word": "list",
        "partOfSpeech": "noun",
        "translation": "รายการ",
        "definition": "",
        "example": "I made a shopping list.",
        "exampleTranslation": "ฉันทำรายการซื้อของ"
    },
    {
        "word": "listen",
        "partOfSpeech": "noun",
        "translation": "ฟัง",
        "definition": "",
        "example": "Listen to the music.",
        "exampleTranslation": "ฟังเพลงสิ"
    },
    {
        "word": "literature",
        "partOfSpeech": "noun",
        "translation": "วรรณคดี",
        "definition": "",
        "example": "He studies English literature.",
        "exampleTranslation": "เขาเรียนวรรณคดีอังกฤษ"
    },
    {
        "word": "litre",
        "partOfSpeech": "noun",
        "translation": "ลิตร",
        "definition": "",
        "example": "I drink two litres of water a day.",
        "exampleTranslation": "ฉันดื่มน้ำสองลิตรต่อวัน"
    },
    {
        "word": "little",
        "partOfSpeech": "adjective",
        "translation": "เล็ก น้อย",
        "definition": "",
        "example": "I have a little sister.",
        "exampleTranslation": "ฉันมีน้องสาวตัวเล็ก"
    },
    {
        "word": "live",
        "partOfSpeech": "adjective",
        "translation": "มี, ชีวิตอยู่",
        "definition": "",
        "example": "Where do you live?",
        "exampleTranslation": "คุณอาศัยอยู่ที่ไหน?"
    },
    {
        "word": "lively",
        "partOfSpeech": "adverb",
        "translation": "มีชีวิตชีวา",
        "definition": "",
        "example": "She has a lively personality.",
        "exampleTranslation": "เธอมีบุคลิกที่ร่าเริง"
    },
    {
        "word": "living",
        "partOfSpeech": "noun",
        "translation": "มีชีวิตอยู่ ไม่ตาย . การดํารงชีพ",
        "definition": "",
        "example": "He makes a living by selling cars.",
        "exampleTranslation": "เขาหาเลี้ยงชีพด้วยการขายรถ"
    },
    {
        "word": "load",
        "partOfSpeech": "noun",
        "translation": "บรรจุ บรรทุก",
        "definition": "",
        "example": "The truck is carrying a heavy load.",
        "exampleTranslation": "รถบรรทุกกำลังบรรทุกของหนัก"
    },
    {
        "word": "loan",
        "partOfSpeech": "noun",
        "translation": "ให้กู้ (เงิน สิ่งของ)",
        "definition": "",
        "example": "I got a loan from the bank.",
        "exampleTranslation": "ฉันได้รับเงินกู้จากธนาคาร"
    },
    {
        "word": "local",
        "partOfSpeech": "adjective",
        "translation": "ท้องถิ่น",
        "definition": "",
        "example": "We bought food at the local market.",
        "exampleTranslation": "พวกเราซื้ออาหารที่ตลาดท้องถิ่น"
    },
    {
        "word": "locate",
        "partOfSpeech": "noun",
        "translation": "ที่ตั้ง ตั้ง อยู่",
        "definition": "",
        "example": "Can you locate Paris on the map?",
        "exampleTranslation": "คุณช่วยหาตำแหน่งของปารีสบนแผนที่ได้ไหม?"
    },
    {
        "word": "location",
        "partOfSpeech": "noun",
        "translation": "ตําแหน่งที่ตั้ง",
        "definition": "",
        "example": "The hotel is in a beautiful location.",
        "exampleTranslation": "โรงแรมตั้งอยู่ในสถานที่ที่สวยงาม"
    },
    {
        "word": "lock",
        "partOfSpeech": "noun",
        "translation": "ใส่กุญแจขังไว้ กุญแจ",
        "definition": "",
        "example": "Lock the door when you leave.",
        "exampleTranslation": "ล็อคประตูเมื่อคุณออกไป"
    },
    {
        "word": "logic",
        "partOfSpeech": "noun",
        "translation": "ตรรกวิทยา",
        "definition": "",
        "example": "There is no logic in his argument.",
        "exampleTranslation": "ไม่มีเหตุผลในข้อโต้แย้งของเขา"
    },
    {
        "word": "logical",
        "partOfSpeech": "adjective",
        "translation": "มีเหตุผล",
        "definition": "",
        "example": "That is a logical conclusion.",
        "exampleTranslation": "นั่นเป็นข้อสรุปที่มีเหตุผล"
    },
    {
        "word": "lonely",
        "partOfSpeech": "adverb",
        "translation": "เหงา",
        "definition": "",
        "example": "She feels lonely sometimes.",
        "exampleTranslation": "บางครั้งเธอก็รู้สึกเหงา"
    },
    {
        "word": "long",
        "partOfSpeech": "adverb",
        "translation": "ยาว",
        "definition": "",
        "example": "It is a long journey.",
        "exampleTranslation": "มันเป็นการเดินทางที่ยาวนาน"
    },
    {
        "word": "look",
        "partOfSpeech": "noun",
        "translation": "มอง",
        "definition": "",
        "example": "Look at the beautiful sky.",
        "exampleTranslation": "มองดูท้องฟ้าที่สวยงามสิ"
    },
    {
        "word": "loose",
        "partOfSpeech": "adjective",
        "translation": "หลวม",
        "definition": "",
        "example": "My tooth is loose.",
        "exampleTranslation": "ฟันของฉันโยก"
    },
    {
        "word": "loosely",
        "partOfSpeech": "adverb",
        "translation": "ไม่เคร่งครัด, ไม่แน่น",
        "definition": "",
        "example": "Tie the string loosely.",
        "exampleTranslation": "ผูกเชือกหลวมๆ"
    },
    {
        "word": "lord",
        "partOfSpeech": "noun",
        "translation": "เจ้า ขุนนาง เจ้าของที่ดิน",
        "definition": "",
        "example": "He acts like a lord.",
        "exampleTranslation": "เขาทำตัวเหมือนเป็นเจ้านาย"
    },
    {
        "word": "lorry",
        "partOfSpeech": "noun",
        "translation": "รถยนต์บรรทุก รถบรรทุก",
        "definition": "",
        "example": "The lorry is delivering goods.",
        "exampleTranslation": "รถบรรทุกกำลังส่งสินค้า"
    },
    {
        "word": "lose",
        "partOfSpeech": "verb",
        "translation": "สูญเสีย",
        "definition": "",
        "example": "Do not lose your keys.",
        "exampleTranslation": "อย่าทำกุญแจหาย"
    },
    {
        "word": "loss",
        "partOfSpeech": "noun",
        "translation": "การสูญเสีย",
        "definition": "",
        "example": "The company reported a huge loss.",
        "exampleTranslation": "บริษัทรายงานผลขาดทุนอย่างหนัก"
    },
    {
        "word": "lost",
        "partOfSpeech": "verb",
        "translation": "สูญหายไป เสียไป",
        "definition": "",
        "example": "I am lost.",
        "exampleTranslation": "ฉันหลงทาง"
    },
    {
        "word": "lot",
        "partOfSpeech": "noun",
        "translation": "มาก, (จํานวน",
        "definition": "",
        "example": "I have a lot of work to do.",
        "exampleTranslation": "ฉันมีงานต้องทำเยอะมาก"
    },
    {
        "word": "loud",
        "partOfSpeech": "noun",
        "translation": "ดัง (เสียง)สูง ที่มีสีสด",
        "definition": "",
        "example": "The music is too loud.",
        "exampleTranslation": "ดนตรีเสียงดังเกินไป"
    },
    {
        "word": "love",
        "partOfSpeech": "noun",
        "translation": "รัก",
        "definition": "",
        "example": "I love my family.",
        "exampleTranslation": "ฉันรักครอบครัวของฉัน"
    },
    {
        "word": "lovely",
        "partOfSpeech": "adverb",
        "translation": "สวยงาม น่ารัก",
        "definition": "",
        "example": "You have a lovely home.",
        "exampleTranslation": "คุณมีบ้านที่สวยงาม"
    },
    {
        "word": "lover",
        "partOfSpeech": "noun",
        "translation": "คนรัก คนที่ชอบ",
        "definition": "",
        "example": "He is an animal lover.",
        "exampleTranslation": "เขาเป็นคนรักสัตว์"
    },
    {
        "word": "low",
        "partOfSpeech": "adjective",
        "translation": "ตํ่า",
        "definition": "",
        "example": "The flying bird is very low.",
        "exampleTranslation": "นกที่บินอยู่ต่ำมาก"
    },
    {
        "word": "loyal",
        "partOfSpeech": "noun",
        "translation": "จงรักภักดี ยึดมั่น",
        "definition": "",
        "example": "Dogs are loyal animals.",
        "exampleTranslation": "สุนัขเป็นสัตว์ที่ซื่อสัตย์"
    },
    {
        "word": "luck",
        "partOfSpeech": "noun",
        "translation": "โชค",
        "definition": "",
        "example": "Good luck on your test!",
        "exampleTranslation": "ขอให้โชคดีในการสอบ!"
    },
    {
        "word": "lucky",
        "partOfSpeech": "adjective",
        "translation": "โชคดี, มีโชค",
        "definition": "",
        "example": "You are a lucky person.",
        "exampleTranslation": "คุณเป็นคนโชคดี"
    },
    {
        "word": "luggage",
        "partOfSpeech": "noun",
        "translation": "กระเป๋าเดินทาง",
        "definition": "",
        "example": "Do not forget your luggage.",
        "exampleTranslation": "อย่าลืมกระเป๋าสัมภาระของคุณ"
    },
    {
        "word": "lump",
        "partOfSpeech": "noun",
        "translation": "ก้อน",
        "definition": "",
        "example": "There is a lump in my throat.",
        "exampleTranslation": "มีก้อนจุกอยู่ที่คอของฉัน"
    },
    {
        "word": "lunch",
        "partOfSpeech": "noun",
        "translation": "อาหารกลางวัน",
        "definition": "",
        "example": "What is for lunch today?",
        "exampleTranslation": "วันนี้มีอะไรกินเป็นอาหารกลางวัน?"
    },
    {
        "word": "lung",
        "partOfSpeech": "noun",
        "translation": "ปอด",
        "definition": "",
        "example": "Smoking damages your lungs.",
        "exampleTranslation": "การสูบบุหรี่ทำลายปอดของคุณ"
    },
    {
        "word": "machine",
        "partOfSpeech": "noun",
        "translation": "เครื่องจักร",
        "definition": "",
        "example": "This machine washes clothes.",
        "exampleTranslation": "เครื่องนี้ใช้ซักเสื้อผ้า"
    },
    {
        "word": "machinery",
        "partOfSpeech": "noun",
        "translation": "เครื่องจักรกล",
        "definition": "",
        "example": "The factory has new machinery.",
        "exampleTranslation": "โรงงานมีเครื่องจักรใหม่"
    },
    {
        "word": "mad",
        "partOfSpeech": "noun",
        "translation": "บ้า",
        "definition": "",
        "example": "He was very mad at me.",
        "exampleTranslation": "เขาโกรธฉันมาก"
    },
    {
        "word": "magazine",
        "partOfSpeech": "noun",
        "translation": "นิตยสาร",
        "definition": "",
        "example": "She is reading a fashion magazine.",
        "exampleTranslation": "เธอกำลังอ่านนิตยสารแฟชั่น"
    },
    {
        "word": "magic",
        "partOfSpeech": "noun",
        "translation": "มายากล",
        "definition": "",
        "example": "Do you believe in magic?",
        "exampleTranslation": "คุณเชื่อเรื่องเวทมนตร์ไหม?"
    },
    {
        "word": "mail",
        "partOfSpeech": "noun",
        "translation": "ไปรษณีย์",
        "definition": "",
        "example": "Did you check the mail today?",
        "exampleTranslation": "วันนี้คุณเช็คจดหมายหรือยัง?"
    },
    {
        "word": "main",
        "partOfSpeech": "adjective",
        "translation": "สําคัญ หลัก",
        "definition": "",
        "example": "The main street is very busy.",
        "exampleTranslation": "ถนนสายหลักการจราจรคับคั่งมาก"
    },
    {
        "word": "mainly",
        "partOfSpeech": "adverb",
        "translation": "ส่วนใหญ่ โดยทั่วไป",
        "definition": "",
        "example": "The book is mainly about history.",
        "exampleTranslation": "หนังสือเล่มนี้มีเนื้อหาหลักเกี่ยวกับประวัติศาสตร์"
    },
    {
        "word": "maintain",
        "partOfSpeech": "noun",
        "translation": "บํารุง รักษาไว้",
        "definition": "",
        "example": "He maintains a healthy diet.",
        "exampleTranslation": "เขารักษาสุขภาพด้วยการควบคุมอาหาร"
    },
    {
        "word": "major",
        "partOfSpeech": "adjective",
        "translation": "ส่วนใหญ่, สําคัญ",
        "definition": "",
        "example": "This is a major problem.",
        "exampleTranslation": "นี่เป็นปัญหาใหญ่"
    },
    {
        "word": "majority",
        "partOfSpeech": "noun",
        "translation": "ส่วนใหญ่, ส่วนมาก",
        "definition": "",
        "example": "The majority of people agree.",
        "exampleTranslation": "คนส่วนใหญ่เห็นด้วย"
    },
    {
        "word": "make",
        "partOfSpeech": "verb",
        "translation": "ทํา",
        "definition": "",
        "example": "I will make a cake for you.",
        "exampleTranslation": "ฉันจะทำเค้กให้คุณ"
    },
    {
        "word": "make-up",
        "partOfSpeech": "noun",
        "translation": "เครื่องสําอาง การแต่งหน้า",
        "definition": "",
        "example": "She is putting on make-up.",
        "exampleTranslation": "เธอกำลังแต่งหน้า"
    },
    {
        "word": "male",
        "partOfSpeech": "noun",
        "translation": "เพศชาย",
        "definition": "",
        "example": "He is a male nurse.",
        "exampleTranslation": "เขาเป็นพยาบาลชาย"
    },
    {
        "word": "mall",
        "partOfSpeech": "noun",
        "translation": "ห้างสรรพสินค้า ทางเดินเล่น",
        "definition": "",
        "example": "We went shopping at the mall.",
        "exampleTranslation": "พวกเราไปช้อปปิ้งที่ห้างสรรพสินค้า"
    },
    {
        "word": "man",
        "partOfSpeech": "noun",
        "translation": "ผู้ชาย",
        "definition": "",
        "example": "He is a good man.",
        "exampleTranslation": "เขาเป็นคนดี"
    },
    {
        "word": "manage",
        "partOfSpeech": "noun",
        "translation": "จัดการ",
        "definition": "",
        "example": "How do you manage your time?",
        "exampleTranslation": "คุณจัดการเวลาของคุณอย่างไร?"
    },
    {
        "word": "management",
        "partOfSpeech": "noun",
        "translation": "การจัดการ คณะผู้จัดการ",
        "definition": "",
        "example": "She studies business management.",
        "exampleTranslation": "เธอเรียนการจัดการธุรกิจ"
    },
    {
        "word": "manager",
        "partOfSpeech": "noun",
        "translation": "ผู้จัดการ",
        "definition": "",
        "example": "He is the manager of the store.",
        "exampleTranslation": "เขาเป็นผู้จัดการร้าน"
    },
    {
        "word": "manner",
        "partOfSpeech": "noun",
        "translation": "ลักษณะ",
        "definition": "",
        "example": "He has good manners.",
        "exampleTranslation": "เขามีมารยาทดี"
    },
    {
        "word": "manufacture",
        "partOfSpeech": "noun",
        "translation": "ผลิต ประดิษฐ์",
        "definition": "",
        "example": "This factory manufactures cars.",
        "exampleTranslation": "โรงงานแห่งนี้ผลิตรถยนต์"
    },
    {
        "word": "manufacturer",
        "partOfSpeech": "noun",
        "translation": "ผู้ผลิต ผู้ประดิษฐ์",
        "definition": "",
        "example": "They are a major computer manufacturer.",
        "exampleTranslation": "พวกเขาเป็นผู้ผลิตคอมพิวเตอร์รายใหญ่"
    },
    {
        "word": "manufacturing",
        "partOfSpeech": "noun",
        "translation": "อุตสาหกรรมการผลิต",
        "definition": "",
        "example": "The manufacturing industry is growing.",
        "exampleTranslation": "อุตสาหกรรมการผลิตกำลังเติบโต"
    },
    {
        "word": "many",
        "partOfSpeech": "adjective",
        "translation": "มากมาย",
        "definition": "",
        "example": "I have many friends.",
        "exampleTranslation": "ฉันมีเพื่อนมากมาย"
    },
    {
        "word": "map",
        "partOfSpeech": "noun",
        "translation": "แผนที่",
        "definition": "",
        "example": "Can you show me on the map?",
        "exampleTranslation": "คุณช่วยชี้ให้ฉันดูบนแผนที่ได้ไหม?"
    },
    {
        "word": "March",
        "partOfSpeech": "noun",
        "translation": "มีนาคม",
        "definition": "",
        "example": "My birthday is in March.",
        "exampleTranslation": "วันเกิดของฉันอยู่ในเดือนมีนาคม"
    },
    {
        "word": "mark",
        "partOfSpeech": "noun",
        "translation": "เครื่องหมาย",
        "definition": "",
        "example": "There is a dirty mark on your shirt.",
        "exampleTranslation": "มีรอยเปื้อนบนเสื้อของคุณ"
    },
    {
        "word": "market",
        "partOfSpeech": "noun",
        "translation": "ตลาด",
        "definition": "",
        "example": "We bought vegetables at the market.",
        "exampleTranslation": "พวกเราซื้อผักที่ตลาด"
    },
    {
        "word": "marketing",
        "partOfSpeech": "noun",
        "translation": "การตลาด",
        "definition": "",
        "example": "She works in the marketing department.",
        "exampleTranslation": "เธอทำงานในแผนกการตลาด"
    },
    {
        "word": "marriage",
        "partOfSpeech": "noun",
        "translation": "การแต่งงาน",
        "definition": "",
        "example": "Their marriage is very happy.",
        "exampleTranslation": "ชีวิตแต่งงานของพวกเขามีความสุขมาก"
    },
    {
        "word": "married",
        "partOfSpeech": "adjective",
        "translation": "แต่งงานแล้ว",
        "definition": "",
        "example": "Are you married?",
        "exampleTranslation": "คุณแต่งงานหรือยัง?"
    },
    {
        "word": "marry",
        "partOfSpeech": "noun",
        "translation": "แต่งงาน",
        "definition": "",
        "example": "Will you marry me?",
        "exampleTranslation": "คุณจะแต่งงานกับฉันไหม?"
    },
    {
        "word": "mass",
        "partOfSpeech": "noun",
        "translation": "พิธีรําลึกวันสวรรคตของพระเยซูในศาสนาคริสต์",
        "definition": "",
        "example": "There is a large mass of clouds.",
        "exampleTranslation": "มีกลุ่มเมฆก้อนใหญ่"
    },
    {
        "word": "massive",
        "partOfSpeech": "adjective",
        "translation": "ใหญ่โต หนักและแข็งมาก",
        "definition": "",
        "example": "The building is massive.",
        "exampleTranslation": "อาคารมีขนาดใหญ่โตมาก"
    },
    {
        "word": "master",
        "partOfSpeech": "noun",
        "translation": "นาย, เจ้านาย",
        "definition": "",
        "example": "The dog obeyed its master.",
        "exampleTranslation": "สุนัขเชื่อฟังเจ้านายของมัน"
    },
    {
        "word": "match",
        "partOfSpeech": "noun",
        "translation": "เข้ากัน เท่ากัน การแข่งขัน ไม้ขีดไฟ",
        "definition": "",
        "example": "Did you watch the football match?",
        "exampleTranslation": "คุณได้ดูการแข่งขันฟุตบอลไหม?"
    },
    {
        "word": "matching",
        "partOfSpeech": "verb",
        "translation": "การจับคู่ การถ่วง",
        "definition": "",
        "example": "They wore matching shirts.",
        "exampleTranslation": "พวกเขาสวมเสื้อที่เข้าชุดกัน"
    },
    {
        "word": "mate",
        "partOfSpeech": "noun",
        "translation": "เพื่อน, เพื่อนร่วม(สํานัก,โรงเรียน,",
        "definition": "",
        "example": "He is my flat mate.",
        "exampleTranslation": "เขาเป็นเพื่อนร่วมห้องของฉัน"
    },
    {
        "word": "material",
        "partOfSpeech": "noun",
        "translation": "วัตถุ ส่วนประกอบ",
        "definition": "",
        "example": "What material is this dress made of?",
        "exampleTranslation": "ชุดนี้ทำจากวัสดุอะไร?"
    },
    {
        "word": "mathematics",
        "partOfSpeech": "noun",
        "translation": "คณิตศาสตร์",
        "definition": "",
        "example": "He is good at mathematics.",
        "exampleTranslation": "เขาเก่งคณิตศาสตร์"
    },
    {
        "word": "matter",
        "partOfSpeech": "noun",
        "translation": "สิ่งที่ต้องทํา ภารกิจ สาร งาน",
        "definition": "",
        "example": "It does not matter.",
        "exampleTranslation": "มันไม่สำคัญหรอก"
    },
    {
        "word": "maximum",
        "partOfSpeech": "noun",
        "translation": "มากสุด สูงสุด",
        "definition": "",
        "example": "The maximum speed is 120 km/h.",
        "exampleTranslation": "ความเร็วสูงสุดคือ 120 กม./ชม."
    },
    {
        "word": "May",
        "partOfSpeech": "noun",
        "translation": "พฤษภาคม",
        "definition": "",
        "example": "My birthday is in May.",
        "exampleTranslation": "วันเกิดของฉันอยู่ในเดือนพฤษภาคม"
    },
    {
        "word": "maybe",
        "partOfSpeech": "adverb",
        "translation": "บางที, อาจจะ",
        "definition": "",
        "example": "Maybe he is right.",
        "exampleTranslation": "บางทีเขาอาจจะถูก"
    },
    {
        "word": "mayor",
        "partOfSpeech": "noun",
        "translation": "นายกเทศมนตรี",
        "definition": "",
        "example": "He was elected mayor of the city.",
        "exampleTranslation": "เขาได้รับเลือกเป็นนายกเทศมนตรีของเมือง"
    },
    {
        "word": "me",
        "partOfSpeech": "noun",
        "translation": "ฉัน (รูปกรรมของ )",
        "definition": "",
        "example": "Give it to me.",
        "exampleTranslation": "ให้ฉันสิ"
    },
    {
        "word": "meal",
        "partOfSpeech": "noun",
        "translation": "มื้ออาหาร",
        "definition": "",
        "example": "I had a delicious meal.",
        "exampleTranslation": "ฉันทานอาหารมื้ออร่อย"
    },
    {
        "word": "mean",
        "partOfSpeech": "noun",
        "translation": "หมายถึง หมายความว่า",
        "definition": "",
        "example": "What does this word mean?",
        "exampleTranslation": "คำนี้หมายความว่าอย่างไร?"
    },
    {
        "word": "meaning",
        "partOfSpeech": "noun",
        "translation": "ความหมาย",
        "definition": "",
        "example": "What is the meaning of this?",
        "exampleTranslation": "ความหมายของสิ่งนี้คืออะไร?"
    },
    {
        "word": "means",
        "partOfSpeech": "noun",
        "translation": "วิธีการ ช่องทาง หนทาง",
        "definition": "",
        "example": "We need to find a means of transport.",
        "exampleTranslation": "พวกเราต้องหาวิธีการเดินทาง"
    },
    {
        "word": "meanwhile",
        "partOfSpeech": "adverb",
        "translation": "เวลาในระหว่างนั้น ในเวลาเดียวกัน",
        "definition": "",
        "example": "Meanwhile, I will wait here.",
        "exampleTranslation": "ในระหว่างนี้ ฉันจะรอที่นี่"
    },
    {
        "word": "measure",
        "partOfSpeech": "noun",
        "translation": "การวัด กระบวนการจัด ขนาดที่วัดได้",
        "definition": "",
        "example": "Did you measure the room?",
        "exampleTranslation": "คุณวัดขนาดห้องหรือยัง?"
    },
    {
        "word": "measurement",
        "partOfSpeech": "noun",
        "translation": "การวัด",
        "definition": "",
        "example": "Take accurate measurements.",
        "exampleTranslation": "วัดขนาดให้แม่นยำ"
    },
    {
        "word": "meat",
        "partOfSpeech": "noun",
        "translation": "เนื้อสัตว์",
        "definition": "",
        "example": "I do not eat meat.",
        "exampleTranslation": "ฉันไม่กินเนื้อสัตว์"
    },
    {
        "word": "media",
        "partOfSpeech": "noun",
        "translation": "สื่อ",
        "definition": "",
        "example": "The story was all over the media.",
        "exampleTranslation": "เรื่องราวนี้แพร่กระจายไปทั่วสื่อ"
    },
    {
        "word": "medical",
        "partOfSpeech": "adjective",
        "translation": "ทางการแพทย์",
        "definition": "",
        "example": "He needs medical help.",
        "exampleTranslation": "เขาต้องการความช่วยเหลือทางการแพทย์"
    },
    {
        "word": "medicine",
        "partOfSpeech": "noun",
        "translation": "ยา",
        "definition": "",
        "example": "Did you take your medicine?",
        "exampleTranslation": "คุณกินยาหรือยัง?"
    },
    {
        "word": "medium",
        "partOfSpeech": "noun",
        "translation": "ซึ่งอยู่ระหว่างกลาง",
        "definition": "",
        "example": "I wear a medium size.",
        "exampleTranslation": "ฉันใส่ไซส์กลาง"
    },
    {
        "word": "meet",
        "partOfSpeech": "noun",
        "translation": "พบ เจอ",
        "definition": "",
        "example": "Nice to meet you.",
        "exampleTranslation": "ยินดีที่ได้รู้จัก"
    },
    {
        "word": "meeting",
        "partOfSpeech": "noun",
        "translation": "การประชุม",
        "definition": "",
        "example": "We have a meeting at 10 AM.",
        "exampleTranslation": "พวกเรามีการประชุมตอน 10 โมงเช้า"
    },
    {
        "word": "melt",
        "partOfSpeech": "noun",
        "translation": "ละลาย",
        "definition": "",
        "example": "The ice will melt in the sun.",
        "exampleTranslation": "น้ำแข็งจะละลายเมื่อโดนแดด"
    },
    {
        "word": "member",
        "partOfSpeech": "noun",
        "translation": "สมาชิก",
        "definition": "",
        "example": "She is a member of the club.",
        "exampleTranslation": "เธอเป็นสมาชิกของชมรม"
    },
    {
        "word": "membership",
        "partOfSpeech": "noun",
        "translation": "สมาชิกภาพ จํานวนสมาชิกทั้งหมด",
        "definition": "",
        "example": "He renewed his gym membership.",
        "exampleTranslation": "เขาต่ออายุสมาชิกยิมของเขา"
    },
    {
        "word": "memory",
        "partOfSpeech": "noun",
        "translation": "ความจํา",
        "definition": "",
        "example": "I have a bad memory.",
        "exampleTranslation": "ฉันมีความจำไม่ดี"
    },
    {
        "word": "mental",
        "partOfSpeech": "noun",
        "translation": "เกี่ยวกับจิตใจ",
        "definition": "",
        "example": "Mental health is very important.",
        "exampleTranslation": "สุขภาพจิตเป็นสิ่งสำคัญมาก"
    },
    {
        "word": "mention",
        "partOfSpeech": "noun",
        "translation": "กล่าวถึง",
        "definition": "",
        "example": "He did not mention it.",
        "exampleTranslation": "เขาไม่ได้พูดถึงเรื่องนี้"
    },
    {
        "word": "menu",
        "partOfSpeech": "noun",
        "translation": "รายการ",
        "definition": "",
        "example": "Can I see the menu, please?",
        "exampleTranslation": "ฉันขอดูเมนูหน่อยได้ไหม?"
    },
    {
        "word": "mere",
        "partOfSpeech": "adverb",
        "translation": "เพียงเท่านั้น",
        "definition": "",
        "example": "He is a mere child.",
        "exampleTranslation": "เขาเป็นแค่เด็กคนหนึ่ง"
    },
    {
        "word": "merely",
        "partOfSpeech": "adverb",
        "translation": "เพียงเท่านั้น อย่างง่ายๆ",
        "definition": "",
        "example": "I was merely asking a question.",
        "exampleTranslation": "ฉันก็แค่ถามคำถามเท่านั้นเอง"
    },
    {
        "word": "mess",
        "partOfSpeech": "noun",
        "translation": "ภาวะที่ยุ่งเหยิง ความสับสน",
        "definition": "",
        "example": "This room is a mess!",
        "exampleTranslation": "ห้องนี้รกมาก!"
    },
    {
        "word": "message",
        "partOfSpeech": "noun",
        "translation": "ข้อความ",
        "definition": "",
        "example": "Did you get my message?",
        "exampleTranslation": "คุณได้รับข้อความของฉันไหม?"
    },
    {
        "word": "metal",
        "partOfSpeech": "noun",
        "translation": "โลหะ",
        "definition": "",
        "example": "The box is made of metal.",
        "exampleTranslation": "กล่องใบนี้ทำจากโลหะ"
    },
    {
        "word": "method",
        "partOfSpeech": "noun",
        "translation": "วิธีการ วิธีดําเนินการ วิธี ระเบียบ แบบแผน",
        "definition": "",
        "example": "This is a new method of teaching.",
        "exampleTranslation": "นี่คือวิธีการสอนแบบใหม่"
    },
    {
        "word": "metre",
        "partOfSpeech": "noun",
        "translation": "เมตร",
        "definition": "",
        "example": "The pool is 50 metres long.",
        "exampleTranslation": "สระว่ายน้ำยาว 50 เมตร"
    },
    {
        "word": "midday",
        "partOfSpeech": "noun",
        "translation": "เที่ยงวัน",
        "definition": "",
        "example": "We met at midday.",
        "exampleTranslation": "พวกเราพบกันตอนเที่ยงวัน"
    },
    {
        "word": "middle",
        "partOfSpeech": "noun",
        "translation": "ปานกลาง",
        "definition": "",
        "example": "Stand in the middle of the room.",
        "exampleTranslation": "ยืนอยู่ตรงกลางห้อง"
    },
    {
        "word": "midnight",
        "partOfSpeech": "noun",
        "translation": "เที่ยงคืน",
        "definition": "",
        "example": "The party ends at midnight.",
        "exampleTranslation": "งานปาร์ตี้เลิกตอนเที่ยงคืน"
    },
    {
        "word": "might",
        "partOfSpeech": "noun",
        "translation": "อาจจะ (กริยาช่วงที่ 2 ของ )",
        "definition": "",
        "example": "It might rain later.",
        "exampleTranslation": "ฝนอาจจะตกในภายหลัง"
    },
    {
        "word": "mild",
        "partOfSpeech": "noun",
        "translation": "อ่อน อ่อนโยน",
        "definition": "",
        "example": "We had a mild winter.",
        "exampleTranslation": "พวกเรามีฤดูหนาวที่ไม่หนาวมาก"
    },
    {
        "word": "mile",
        "partOfSpeech": "noun",
        "translation": "ไมล์",
        "definition": "",
        "example": "The nearest town is ten miles away.",
        "exampleTranslation": "เมืองที่ใกล้ที่สุดอยู่ห่างออกไปสิบไมล์"
    },
    {
        "word": "military",
        "partOfSpeech": "adjective",
        "translation": "ทหาร",
        "definition": "",
        "example": "He joined the military.",
        "exampleTranslation": "เขาเข้าร่วมกองทัพ"
    },
    {
        "word": "milk",
        "partOfSpeech": "noun",
        "translation": "นม",
        "definition": "",
        "example": "Do you want milk with your coffee?",
        "exampleTranslation": "คุณต้องการนมในกาแฟของคุณไหม?"
    },
    {
        "word": "milligram",
        "partOfSpeech": "noun",
        "translation": "1/1000 กรัม",
        "definition": "",
        "example": "The pill contains 50 milligrams of medicine.",
        "exampleTranslation": "ยาเม็ดมีตัวยา 50 มิลลิกรัม"
    },
    {
        "word": "millimetre",
        "partOfSpeech": "noun",
        "translation": "มิลลิเมตร",
        "definition": "",
        "example": "The paper is two millimetres thick.",
        "exampleTranslation": "กระดาษหนาสองมิลลิเมตร"
    },
    {
        "word": "million",
        "partOfSpeech": "noun",
        "translation": "หนึ่งล้าน",
        "definition": "",
        "example": "The city has a population of two million.",
        "exampleTranslation": "เมืองมีประชากรสองล้านคน"
    },
    {
        "word": "millionth",
        "partOfSpeech": "noun",
        "translation": "ซึ่งเป็นลําดับที่หนึ่งล้าน",
        "definition": "",
        "example": "He is the millionth visitor.",
        "exampleTranslation": "เขาเป็นผู้มาเยือนคนที่หนึ่งล้าน"
    },
    {
        "word": "mind",
        "partOfSpeech": "noun",
        "translation": "จิตใจ",
        "definition": "",
        "example": "Do you mind if I open the window?",
        "exampleTranslation": "คุณจะรังเกียจไหมถ้าฉันจะเปิดหน้าต่าง?"
    },
    {
        "word": "mine",
        "partOfSpeech": "noun",
        "translation": "ของฉัน . เหมืองแร่",
        "definition": "",
        "example": "This book is mine.",
        "exampleTranslation": "หนังสือเล่มนี้เป็นของฉัน"
    },
    {
        "word": "mineral",
        "partOfSpeech": "noun",
        "translation": "แร่ธาตุ",
        "definition": "",
        "example": "Water contains many minerals.",
        "exampleTranslation": "น้ำมีแร่ธาตุมากมาย"
    },
    {
        "word": "minimum",
        "partOfSpeech": "noun",
        "translation": "ขั้นตํ่า ค่าน้อยที่สุด",
        "definition": "",
        "example": "The minimum age is 18.",
        "exampleTranslation": "อายุขั้นต่ำคือ 18 ปี"
    },
    {
        "word": "minister",
        "partOfSpeech": "noun",
        "translation": "รัฐมนตรี",
        "definition": "",
        "example": "He is the minister of education.",
        "exampleTranslation": "เขาเป็นรัฐมนตรีว่าการกระทรวงศึกษาธิการ"
    },
    {
        "word": "ministry",
        "partOfSpeech": "noun",
        "translation": "กระทรวง",
        "definition": "",
        "example": "She works at the Ministry of Health.",
        "exampleTranslation": "เธอทำงานที่กระทรวงสาธารณสุข"
    },
    {
        "word": "minor",
        "partOfSpeech": "noun",
        "translation": "วิชารอง ผู้เยาว์",
        "definition": "",
        "example": "It is only a minor problem.",
        "exampleTranslation": "มันเป็นเพียงปัญหาเล็กน้อย"
    },
    {
        "word": "minority",
        "partOfSpeech": "noun",
        "translation": "ชนหมู่น้อย กลุ่มสมาชิกเสียงข้างน้อย",
        "definition": "",
        "example": "Only a small minority voted against the law.",
        "exampleTranslation": "มีเพียงชนกลุ่มน้อยที่โหวตคัดค้านกฎหมาย"
    },
    {
        "word": "minute",
        "partOfSpeech": "noun",
        "translation": "นาที",
        "definition": "",
        "example": "Wait a minute.",
        "exampleTranslation": "รอสักครู่"
    },
    {
        "word": "mirror",
        "partOfSpeech": "noun",
        "translation": "กระจกเงา",
        "definition": "",
        "example": "Look at yourself in the mirror.",
        "exampleTranslation": "มองดูตัวเองในกระจกสิ"
    },
    {
        "word": "miss",
        "partOfSpeech": "noun",
        "translation": "พลาด คิดถึง",
        "definition": "",
        "example": "I miss my family.",
        "exampleTranslation": "ฉันคิดถึงครอบครัวของฉัน"
    },
    {
        "word": "missing",
        "partOfSpeech": "verb",
        "translation": "ขาดแคลน, ไม่พบ",
        "definition": "",
        "example": "My dog is missing.",
        "exampleTranslation": "สุนัขของฉันหายไป"
    },
    {
        "word": "mistake",
        "partOfSpeech": "noun",
        "translation": "ข้อผิดพลาด",
        "definition": "",
        "example": "I made a mistake.",
        "exampleTranslation": "ฉันทำผิดพลาด"
    },
    {
        "word": "mistaken",
        "partOfSpeech": "noun",
        "translation": "ผิดพลาด ซึ่งกระทําผิด",
        "definition": "",
        "example": "You must be mistaken.",
        "exampleTranslation": "คุณต้องเข้าใจผิดแน่ๆ"
    },
    {
        "word": "mix",
        "partOfSpeech": "noun",
        "translation": "ผสม",
        "definition": "",
        "example": "Mix the flour and sugar together.",
        "exampleTranslation": "ผสมแป้งและน้ำตาลเข้าด้วยกัน"
    },
    {
        "word": "mixed",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งผสมกัน ยุ่งเหยิง",
        "definition": "",
        "example": "I have mixed feelings about this.",
        "exampleTranslation": "ฉันมีความรู้สึกสับสนเกี่ยวกับเรื่องนี้"
    },
    {
        "word": "mixture",
        "partOfSpeech": "noun",
        "translation": "สารผสม ส่วนผสม",
        "definition": "",
        "example": "Pour the mixture into the pan.",
        "exampleTranslation": "เทส่วนผสมลงในกระทะ"
    },
    {
        "word": "mobile",
        "partOfSpeech": "noun",
        "translation": "ซึ่งเคลื่อนที่ได้ เคลื่อนไหวได้",
        "definition": "",
        "example": "Do you have a mobile phone?",
        "exampleTranslation": "คุณมีโทรศัพท์มือถือไหม?"
    },
    {
        "word": "mobile phone",
        "partOfSpeech": "noun",
        "translation": "โทรศัพท์มือถือ",
        "definition": "",
        "example": "I bought a new mobile phone.",
        "exampleTranslation": "ฉันซื้อโทรศัพท์มือถือเครื่องใหม่"
    },
    {
        "word": "model",
        "partOfSpeech": "noun",
        "translation": "แบบ",
        "definition": "",
        "example": "She works as a fashion model.",
        "exampleTranslation": "เธอทำงานเป็นนางแบบแฟชั่น"
    },
    {
        "word": "modern",
        "partOfSpeech": "adjective",
        "translation": "ทันสมัย",
        "definition": "",
        "example": "They live in a modern house.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในบ้านสมัยใหม่"
    },
    {
        "word": "mom",
        "partOfSpeech": "noun",
        "translation": "แม่",
        "definition": "",
        "example": "My mom is cooking dinner.",
        "exampleTranslation": "แม่ของฉันกำลังทำอาหารเย็น"
    },
    {
        "word": "moment",
        "partOfSpeech": "noun",
        "translation": "ขณะนั้น ชั่วครู่",
        "definition": "",
        "example": "Wait a moment, please.",
        "exampleTranslation": "รอสักครู่ โปรด"
    },
    {
        "word": "Monday",
        "partOfSpeech": "noun",
        "translation": "วันจันทร์",
        "definition": "",
        "example": "I will see you on Monday.",
        "exampleTranslation": "ฉันจะเจอคุณวันจันทร์"
    },
    {
        "word": "money",
        "partOfSpeech": "noun",
        "translation": "เงิน",
        "definition": "",
        "example": "I do not have enough money.",
        "exampleTranslation": "ฉันมีเงินไม่พอ"
    },
    {
        "word": "monitor",
        "partOfSpeech": "noun",
        "translation": "จอภาพ เฝ้าสังเกต",
        "definition": "",
        "example": "Look at the computer monitor.",
        "exampleTranslation": "มองที่หน้าจอคอมพิวเตอร์"
    },
    {
        "word": "month",
        "partOfSpeech": "noun",
        "translation": "เดือน",
        "definition": "",
        "example": "I will go to Japan next month.",
        "exampleTranslation": "ฉันจะไปญี่ปุ่นเดือนหน้า"
    },
    {
        "word": "mood",
        "partOfSpeech": "noun",
        "translation": "อารมณ์ ความรู้สึก",
        "definition": "",
        "example": "He is in a bad mood today.",
        "exampleTranslation": "วันนี้เขาอารมณ์ไม่ดี"
    },
    {
        "word": "moon",
        "partOfSpeech": "noun",
        "translation": "ดวงจันทร์",
        "definition": "",
        "example": "The moon is bright tonight.",
        "exampleTranslation": "คืนนี้ดวงจันทร์สว่างมาก"
    },
    {
        "word": "moral",
        "partOfSpeech": "adjective",
        "translation": "คุณธรรม",
        "definition": "",
        "example": "It was a difficult moral decision.",
        "exampleTranslation": "มันเป็นการตัดสินใจทางศีลธรรมที่ยากลำบาก"
    },
    {
        "word": "morally",
        "partOfSpeech": "adverb",
        "translation": "อย่างถูกทํานองคลองธรรม",
        "definition": "",
        "example": "It is morally wrong to lie.",
        "exampleTranslation": "การโกหกเป็นเรื่องที่ผิดศีลธรรม"
    },
    {
        "word": "more",
        "partOfSpeech": "adverb",
        "translation": "มากกว่า",
        "definition": "",
        "example": "Can I have some more water?",
        "exampleTranslation": "ฉันขอน้ำเพิ่มอีกได้ไหม?"
    },
    {
        "word": "moreover",
        "partOfSpeech": "noun",
        "translation": "นอกจากนั้น",
        "definition": "",
        "example": "It is a good car; moreover, it is cheap.",
        "exampleTranslation": "มันเป็นรถที่ดี ยิ่งไปกว่านั้นมันยังราคาถูก"
    },
    {
        "word": "morning",
        "partOfSpeech": "noun",
        "translation": "เวลาเช้า",
        "definition": "",
        "example": "Good morning!",
        "exampleTranslation": "อรุณสวัสดิ์!"
    },
    {
        "word": "most",
        "partOfSpeech": "adjective",
        "translation": "มากที่สุด",
        "definition": "",
        "example": "Most people like music.",
        "exampleTranslation": "คนส่วนใหญ่ชอบดนตรี"
    },
    {
        "word": "mostly",
        "partOfSpeech": "adverb",
        "translation": "ส่วนมาก",
        "definition": "",
        "example": "The guests were mostly students.",
        "exampleTranslation": "แขกส่วนใหญ่เป็นนักเรียน"
    },
    {
        "word": "mother",
        "partOfSpeech": "noun",
        "translation": "แม่",
        "definition": "",
        "example": "My mother is a teacher.",
        "exampleTranslation": "แม่ของฉันเป็นครู"
    },
    {
        "word": "motion",
        "partOfSpeech": "noun",
        "translation": "โบกไม้โบกมือ ให้สัญญาณเคลื่อนที่",
        "definition": "",
        "example": "The rocking motion made me sleepy.",
        "exampleTranslation": "การโยกไปมาทำให้ฉันง่วงนอน"
    },
    {
        "word": "motor",
        "partOfSpeech": "noun",
        "translation": "เครื่องยนต์ มอเตอร์",
        "definition": "",
        "example": "The boat has a powerful motor.",
        "exampleTranslation": "เรือมีมอเตอร์ที่ทรงพลัง"
    },
    {
        "word": "motorbike",
        "partOfSpeech": "noun",
        "translation": "รถจักรยานยนต์สองล้อ",
        "definition": "",
        "example": "He rides a motorbike to work.",
        "exampleTranslation": "เขาขี่มอเตอร์ไซค์ไปทำงาน"
    },
    {
        "word": "motorcycle",
        "partOfSpeech": "noun",
        "translation": "รถจักรยานยนต์ รถเครื่อง",
        "definition": "",
        "example": "She bought a new motorcycle.",
        "exampleTranslation": "เธอซื้อมอเตอร์ไซค์คันใหม่"
    },
    {
        "word": "mount",
        "partOfSpeech": "noun",
        "translation": "(การ)ขึ้น ปีนขึ้น ลุกขึ้น ขึ้นม้า",
        "definition": "",
        "example": "They will mount a picture on the wall.",
        "exampleTranslation": "พวกเขาจะติดรูปภาพบนผนัง"
    },
    {
        "word": "mountain",
        "partOfSpeech": "noun",
        "translation": "ภูเขา",
        "definition": "",
        "example": "We climbed a high mountain.",
        "exampleTranslation": "พวกเราปีนภูเขาสูง"
    },
    {
        "word": "mouse",
        "partOfSpeech": "noun",
        "translation": "หนู",
        "definition": "",
        "example": "The cat caught a mouse.",
        "exampleTranslation": "แมวจับหนูได้"
    },
    {
        "word": "mouth",
        "partOfSpeech": "noun",
        "translation": "ปาก",
        "definition": "",
        "example": "Open your mouth.",
        "exampleTranslation": "อ้าปากของคุณ"
    },
    {
        "word": "move",
        "partOfSpeech": "noun",
        "translation": "เคลื่อนย้าย",
        "definition": "",
        "example": "Please move your car.",
        "exampleTranslation": "โปรดย้ายรถของคุณ"
    },
    {
        "word": "movement",
        "partOfSpeech": "noun",
        "translation": "การเคลื่อนไหว การเคลื่อนที่",
        "definition": "",
        "example": "There was a sudden movement in the bushes.",
        "exampleTranslation": "มีการเคลื่อนไหวอย่างกะทันหันในพุ่มไม้"
    },
    {
        "word": "movie",
        "partOfSpeech": "noun",
        "translation": "หนัง ภาพยนตร์",
        "definition": "",
        "example": "We went to see a movie.",
        "exampleTranslation": "พวกเราไปดูภาพยนตร์"
    },
    {
        "word": "movie theater",
        "partOfSpeech": "noun",
        "translation": "โรงภาพยนตร์",
        "definition": "",
        "example": "The movie theater is closed.",
        "exampleTranslation": "โรงภาพยนตร์ปิดแล้ว"
    },
    {
        "word": "moving",
        "partOfSpeech": "verb",
        "translation": "ซึ่งเคลื่อนที่",
        "definition": "",
        "example": "The train is moving fast.",
        "exampleTranslation": "รถไฟกำลังเคลื่อนที่อย่างรวดเร็ว"
    },
    {
        "word": "Mr",
        "partOfSpeech": "noun",
        "translation": "นาย",
        "definition": "",
        "example": "Mr. Smith is my boss.",
        "exampleTranslation": "คุณสมิธเป็นเจ้านายของฉัน"
    },
    {
        "word": "Mrs",
        "partOfSpeech": "noun",
        "translation": "นาง",
        "definition": "",
        "example": "Mrs. Brown is a teacher.",
        "exampleTranslation": "คุณนายบราวน์เป็นครู"
    },
    {
        "word": "Ms",
        "partOfSpeech": "noun",
        "translation": "คํานําหน้าชื่อหรือตําแหน่งของผู้หญิงโดยไม่ได้แสดงว่าเป็น",
        "definition": "",
        "example": "Ms. Johnson works here.",
        "exampleTranslation": "คุณจอห์นสันทำงานที่นี่"
    },
    {
        "word": "much",
        "partOfSpeech": "adjective",
        "translation": "มาก",
        "definition": "",
        "example": "How much does this cost?",
        "exampleTranslation": "สิ่งนี้ราคาเท่าไหร่?"
    },
    {
        "word": "mud",
        "partOfSpeech": "noun",
        "translation": "โคลน",
        "definition": "",
        "example": "The pig is playing in the mud.",
        "exampleTranslation": "หมูกำลังเล่นโคลน"
    },
    {
        "word": "multiply",
        "partOfSpeech": "noun",
        "translation": "ให้ทําเพิ่มจํานวนขึ้น คูณ",
        "definition": "",
        "example": "If you multiply 2 by 3, you get 6.",
        "exampleTranslation": "ถ้าคุณคูณ 2 ด้วย 3 คุณจะได้ 6"
    },
    {
        "word": "mum",
        "partOfSpeech": "noun",
        "translation": "แม่",
        "definition": "",
        "example": "My mum is the best.",
        "exampleTranslation": "แม่ของฉันดีที่สุด"
    },
    {
        "word": "murder",
        "partOfSpeech": "noun",
        "translation": "ฆาตกรรม",
        "definition": "",
        "example": "The police are investigating a murder.",
        "exampleTranslation": "ตำรวจกำลังสืบสวนคดีฆาตกรรม"
    },
    {
        "word": "muscle",
        "partOfSpeech": "noun",
        "translation": "กล้ามเนื้อ",
        "definition": "",
        "example": "He has big muscles.",
        "exampleTranslation": "เขามีกล้ามเนื้อใหญ่"
    },
    {
        "word": "museum",
        "partOfSpeech": "noun",
        "translation": "พิพิธภัณฑ์",
        "definition": "",
        "example": "We visited the science museum.",
        "exampleTranslation": "พวกเราไปเยี่ยมชมพิพิธภัณฑ์วิทยาศาสตร์"
    },
    {
        "word": "music",
        "partOfSpeech": "noun",
        "translation": "ดนตรี",
        "definition": "",
        "example": "I love listening to music.",
        "exampleTranslation": "ฉันรักการฟังเพลง"
    },
    {
        "word": "musical",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับดนตรี",
        "definition": "",
        "example": "She has a lot of musical talent.",
        "exampleTranslation": "เธอมีพรสวรรค์ทางดนตรีมาก"
    },
    {
        "word": "musician",
        "partOfSpeech": "noun",
        "translation": "นักดนตรี",
        "definition": "",
        "example": "He is a famous musician.",
        "exampleTranslation": "เขาเป็นนักดนตรีที่มีชื่อเสียง"
    },
    {
        "word": "must",
        "partOfSpeech": "noun",
        "translation": "ต้อง จําเป็นต้อง",
        "definition": "",
        "example": "You must follow the rules.",
        "exampleTranslation": "คุณต้องปฏิบัติตามกฎ"
    },
    {
        "word": "my",
        "partOfSpeech": "noun",
        "translation": "ของฉัน",
        "definition": "",
        "example": "This is my car.",
        "exampleTranslation": "นี่คือรถของฉัน"
    },
    {
        "word": "myself",
        "partOfSpeech": "noun",
        "translation": "ตัวของฉันเอง",
        "definition": "",
        "example": "I did it by myself.",
        "exampleTranslation": "ฉันทำมันด้วยตัวฉันเอง"
    },
    {
        "word": "mysterious",
        "partOfSpeech": "adjective",
        "translation": "ลึกลับ",
        "definition": "",
        "example": "The old house looks mysterious.",
        "exampleTranslation": "บ้านหลังเก่าดูลึกลับ"
    },
    {
        "word": "mystery",
        "partOfSpeech": "noun",
        "translation": "ความลึกลับ",
        "definition": "",
        "example": "It is a mystery how he escaped.",
        "exampleTranslation": "มันเป็นเรื่องลึกลับว่าเขาหนีรอดไปได้อย่างไร"
    },
    {
        "word": "nail",
        "partOfSpeech": "noun",
        "translation": "เล็บ",
        "definition": "",
        "example": "I hammered a nail into the wall.",
        "exampleTranslation": "ฉันตอกตะปูเข้าไปในกำแพง"
    },
    {
        "word": "naked",
        "partOfSpeech": "adjective",
        "translation": "เปลือย เปลือยกาย",
        "definition": "",
        "example": "The baby was completely naked.",
        "exampleTranslation": "ทารกเปลือยเปล่าโดยสิ้นเชิง"
    },
    {
        "word": "name",
        "partOfSpeech": "noun",
        "translation": "ชื่อ",
        "definition": "",
        "example": "What is your name?",
        "exampleTranslation": "คุณชื่ออะไร?"
    },
    {
        "word": "narrow",
        "partOfSpeech": "noun",
        "translation": "แคบ",
        "definition": "",
        "example": "The street is very narrow.",
        "exampleTranslation": "ถนนแคบมาก"
    },
    {
        "word": "nation",
        "partOfSpeech": "noun",
        "translation": "ชาติ",
        "definition": "",
        "example": "The whole nation celebrated the victory.",
        "exampleTranslation": "คนทั้งประเทศเฉลิมฉลองชัยชนะ"
    },
    {
        "word": "national",
        "partOfSpeech": "adjective",
        "translation": "แห่งชาติ",
        "definition": "",
        "example": "Today is a national holiday.",
        "exampleTranslation": "วันนี้เป็นวันหยุดแห่งชาติ"
    },
    {
        "word": "natural",
        "partOfSpeech": "adjective",
        "translation": "โดยธรรมชาติ",
        "definition": "",
        "example": "This juice is made from natural ingredients.",
        "exampleTranslation": "น้ำผลไม้นี้ทำจากส่วนผสมจากธรรมชาติ"
    },
    {
        "word": "naturally",
        "partOfSpeech": "adverb",
        "translation": "แบบธรรมชาติ อย่างธรรมชาติ",
        "definition": "",
        "example": "She is naturally beautiful.",
        "exampleTranslation": "เธอสวยอย่างเป็นธรรมชาติ"
    },
    {
        "word": "nature",
        "partOfSpeech": "noun",
        "translation": "ธรรมชาติ",
        "definition": "",
        "example": "I love spending time in nature.",
        "exampleTranslation": "ฉันรักการใช้เวลาอยู่กับธรรมชาติ"
    },
    {
        "word": "navy",
        "partOfSpeech": "noun",
        "translation": "กองทัพเรือ",
        "definition": "",
        "example": "He joined the navy.",
        "exampleTranslation": "เขาเข้าร่วมกองทัพเรือ"
    },
    {
        "word": "near",
        "partOfSpeech": "noun",
        "translation": "ใกล้",
        "definition": "",
        "example": "The shop is near my house.",
        "exampleTranslation": "ร้านอยู่ใกล้บ้านฉัน"
    },
    {
        "word": "nearby",
        "partOfSpeech": "adverb",
        "translation": "อยู่ถัดไป",
        "definition": "",
        "example": "Do you live nearby?",
        "exampleTranslation": "คุณอาศัยอยู่แถวนี้ไหม?"
    },
    {
        "word": "nearly",
        "partOfSpeech": "adverb",
        "translation": "เกือบ",
        "definition": "",
        "example": "I nearly forgot my keys.",
        "exampleTranslation": "ฉันเกือบลืมกุญแจ"
    },
    {
        "word": "neat",
        "partOfSpeech": "noun",
        "translation": "เรียบร้อย",
        "definition": "",
        "example": "Her handwriting is very neat.",
        "exampleTranslation": "ลายมือของเธอเรียบร้อยมาก"
    },
    {
        "word": "necessarily",
        "partOfSpeech": "adverb",
        "translation": "โดยความจําเป็น",
        "definition": "",
        "example": "Bigger is not necessarily better.",
        "exampleTranslation": "ใหญ่กว่าไม่ได้แปลว่าดีกว่าเสมอไป"
    },
    {
        "word": "necessary",
        "partOfSpeech": "adjective",
        "translation": "จําเป็น",
        "definition": "",
        "example": "Is it necessary to go now?",
        "exampleTranslation": "จำเป็นต้องไปตอนนี้ไหม?"
    },
    {
        "word": "neck",
        "partOfSpeech": "noun",
        "translation": "คอ",
        "definition": "",
        "example": "She wears a necklace around her neck.",
        "exampleTranslation": "เธอสวมสร้อยคอไว้ที่คอ"
    },
    {
        "word": "need",
        "partOfSpeech": "noun",
        "translation": "ต้องการ ประสงค์",
        "definition": "",
        "example": "I need some help.",
        "exampleTranslation": "ฉันต้องการความช่วยเหลือ"
    },
    {
        "word": "needle",
        "partOfSpeech": "noun",
        "translation": "เข็ม",
        "definition": "",
        "example": "She used a needle and thread to sew.",
        "exampleTranslation": "เธอใช้เข็มและด้ายเพื่อเย็บผ้า"
    },
    {
        "word": "negative",
        "partOfSpeech": "adjective",
        "translation": "คําปฏิเสธ การคัดค้าน",
        "definition": "",
        "example": "He has a negative attitude.",
        "exampleTranslation": "เขามีทัศนคติเชิงลบ"
    },
    {
        "word": "neighbour",
        "partOfSpeech": "noun",
        "translation": "เพื่อนบ้าน",
        "definition": "",
        "example": "My neighbour is very friendly.",
        "exampleTranslation": "เพื่อนบ้านของฉันเป็นมิตรมาก"
    },
    {
        "word": "neighbourhood",
        "partOfSpeech": "noun",
        "translation": "ย่านใกล้เคียง สถานที่ใกล้เคียง",
        "definition": "",
        "example": "We live in a quiet neighbourhood.",
        "exampleTranslation": "พวกเราอาศัยอยู่ในละแวกบ้านที่เงียบสงบ"
    },
    {
        "word": "neither",
        "partOfSpeech": "noun",
        "translation": "ไม่(ทั้งสอง)",
        "definition": "",
        "example": "Neither of them can swim.",
        "exampleTranslation": "พวกเขาไม่มีใครว่ายน้ำเป็นเลยสักคน"
    },
    {
        "word": "nephew",
        "partOfSpeech": "noun",
        "translation": "หลานชาย",
        "definition": "",
        "example": "My nephew is three years old.",
        "exampleTranslation": "หลานชายของฉันอายุสามขวบ"
    },
    {
        "word": "nerve",
        "partOfSpeech": "noun",
        "translation": "เส้นประสาท",
        "definition": "",
        "example": "He has the nerve to ask for more money.",
        "exampleTranslation": "เขากล้าพอที่จะขอเงินเพิ่ม"
    },
    {
        "word": "nervous",
        "partOfSpeech": "adjective",
        "translation": "กระวนกระวาย กังวล",
        "definition": "",
        "example": "I feel nervous before the exam.",
        "exampleTranslation": "ฉันรู้สึกประหม่าก่อนสอบ"
    },
    {
        "word": "nest",
        "partOfSpeech": "adjective",
        "translation": "รัง",
        "definition": "",
        "example": "The bird built a nest in the tree.",
        "exampleTranslation": "นกสร้างรังบนต้นไม้"
    },
    {
        "word": "net",
        "partOfSpeech": "noun",
        "translation": "สุทธิ",
        "definition": "",
        "example": "The fisherman threw his net into the sea.",
        "exampleTranslation": "ชาวประมงเหวี่ยงแหลงในทะเล"
    },
    {
        "word": "network",
        "partOfSpeech": "noun",
        "translation": "เครือข่าย",
        "definition": "",
        "example": "The computer is connected to the network.",
        "exampleTranslation": "คอมพิวเตอร์เชื่อมต่อกับเครือข่ายแล้ว"
    },
    {
        "word": "never",
        "partOfSpeech": "adverb",
        "translation": "ไม่เคย",
        "definition": "",
        "example": "I have never been to Paris.",
        "exampleTranslation": "ฉันไม่เคยไปปารีส"
    },
    {
        "word": "nevertheless",
        "partOfSpeech": "adverb",
        "translation": "แม้กระนั้นก็ตาม",
        "definition": "",
        "example": "It was cold; nevertheless, we went swimming.",
        "exampleTranslation": "อากาศหนาว แต่อย่างไรก็ตามพวกเราก็ไปว่ายน้ำ"
    },
    {
        "word": "new",
        "partOfSpeech": "adjective",
        "translation": "ใหม่",
        "definition": "",
        "example": "Look at my new shoes.",
        "exampleTranslation": "ดูรองเท้าคู่ใหม่ของฉันสิ"
    },
    {
        "word": "newly",
        "partOfSpeech": "adverb",
        "translation": "ใหม่เอี่ยม เมื่อเร็วๆนี้",
        "definition": "",
        "example": "They are a newly married couple.",
        "exampleTranslation": "พวกเขาเป็นคู่ข้าวใหม่ปลามัน"
    },
    {
        "word": "news",
        "partOfSpeech": "noun",
        "translation": "ข่าว",
        "definition": "",
        "example": "Did you watch the news today?",
        "exampleTranslation": "วันนี้คุณดูข่าวหรือยัง?"
    },
    {
        "word": "newspaper",
        "partOfSpeech": "noun",
        "translation": "หนังสือพิมพ์",
        "definition": "",
        "example": "I read the newspaper every morning.",
        "exampleTranslation": "ฉันอ่านหนังสือพิมพ์ทุกเช้า"
    },
    {
        "word": "next",
        "partOfSpeech": "adjective",
        "translation": "ถัดไป",
        "definition": "",
        "example": "What should we do next?",
        "exampleTranslation": "พวกเราควรทำอะไรต่อไปดี?"
    },
    {
        "word": "next to",
        "partOfSpeech": "noun",
        "translation": "อยู่ติดกับ",
        "definition": "",
        "example": "She is sitting next to me.",
        "exampleTranslation": "เธอนั่งอยู่ข้างๆ ฉัน"
    },
    {
        "word": "nice",
        "partOfSpeech": "adjective",
        "translation": "ดี",
        "definition": "",
        "example": "Have a nice day!",
        "exampleTranslation": "ขอให้เป็นวันที่ดีนะ!"
    },
    {
        "word": "nicely",
        "partOfSpeech": "adverb",
        "translation": "อย่างดี",
        "definition": "",
        "example": "The room is nicely decorated.",
        "exampleTranslation": "ห้องถูกตกแต่งอย่างสวยงาม"
    },
    {
        "word": "niece",
        "partOfSpeech": "noun",
        "translation": "หลานสาว",
        "definition": "",
        "example": "My niece is playing with her dolls.",
        "exampleTranslation": "หลานสาวของฉันกำลังเล่นกับตุ๊กตาของเธอ"
    },
    {
        "word": "night",
        "partOfSpeech": "noun",
        "translation": "กลางคืน",
        "definition": "",
        "example": "It is dark at night.",
        "exampleTranslation": "ตอนกลางคืนอากาศมืด"
    },
    {
        "word": "nine",
        "partOfSpeech": "noun",
        "translation": "เก้า",
        "definition": "",
        "example": "I work from nine to five.",
        "exampleTranslation": "ฉันทำงานตั้งแต่เก้าโมงเช้าถึงห้าโมงเย็น"
    },
    {
        "word": "nineteen",
        "partOfSpeech": "noun",
        "translation": "สิบเก้า",
        "definition": "",
        "example": "She is nineteen years old.",
        "exampleTranslation": "เธออายุสิบเก้าปี"
    },
    {
        "word": "ninety",
        "partOfSpeech": "noun",
        "translation": "เก้าสิบ",
        "definition": "",
        "example": "My grandmother is ninety years old.",
        "exampleTranslation": "ย่าของฉันอายุเก้าสิบปี"
    },
    {
        "word": "ninth",
        "partOfSpeech": "adjective",
        "translation": "ที่เก้า",
        "definition": "",
        "example": "He finished ninth in the race.",
        "exampleTranslation": "เขาเข้าเส้นชัยเป็นที่เก้าในการแข่งขัน"
    },
    {
        "word": "no",
        "partOfSpeech": "noun",
        "translation": "ไม่",
        "definition": "",
        "example": "The answer is no.",
        "exampleTranslation": "คำตอบคือไม่"
    },
    {
        "word": "no one",
        "partOfSpeech": "noun",
        "translation": "ไม่มีใคร",
        "definition": "",
        "example": "No one knows the truth.",
        "exampleTranslation": "ไม่มีใครรู้ความจริง"
    },
    {
        "word": "nobody",
        "partOfSpeech": "noun",
        "translation": "ไม่มีใคร คนกระจอก",
        "definition": "",
        "example": "Nobody is at home.",
        "exampleTranslation": "ไม่มีใครอยู่บ้าน"
    },
    {
        "word": "noise",
        "partOfSpeech": "noun",
        "translation": "เสียงรบกวน",
        "definition": "",
        "example": "What is that loud noise?",
        "exampleTranslation": "นั่นคือเสียงดังอะไร?"
    },
    {
        "word": "noisy",
        "partOfSpeech": "noun",
        "translation": "อึกทึก เสียงดัง",
        "definition": "",
        "example": "The children are very noisy today.",
        "exampleTranslation": "วันนี้เด็กๆ เสียงดังมาก"
    },
    {
        "word": "none",
        "partOfSpeech": "noun",
        "translation": "ไม่มีเลย",
        "definition": "",
        "example": "None of the apples are good.",
        "exampleTranslation": "ไม่มีแอปเปิลลูกไหนดีเลย"
    },
    {
        "word": "nonsense",
        "partOfSpeech": "noun",
        "translation": "เรื่องไร้สาระ",
        "definition": "",
        "example": "That is complete nonsense!",
        "exampleTranslation": "นั่นมันเรื่องไร้สาระทั้งเพ!"
    },
    {
        "word": "nor",
        "partOfSpeech": "noun",
        "translation": "ไม่",
        "definition": "",
        "example": "I neither speak nor write French.",
        "exampleTranslation": "ฉันทั้งพูดและเขียนภาษาฝรั่งเศสไม่ได้"
    },
    {
        "word": "normal",
        "partOfSpeech": "adjective",
        "translation": "ปกติ ธรรมดา",
        "definition": "",
        "example": "It is normal to feel nervous.",
        "exampleTranslation": "เป็นเรื่องปกติที่จะรู้สึกประหม่า"
    },
    {
        "word": "normally",
        "partOfSpeech": "adverb",
        "translation": "ตามธรรมดา โดยทั่วไป",
        "definition": "",
        "example": "I normally wake up at 7 AM.",
        "exampleTranslation": "ปกติฉันตื่นนอนตอน 7 โมงเช้า"
    },
    {
        "word": "north",
        "partOfSpeech": "noun",
        "translation": "ทิศเหนือ",
        "definition": "",
        "example": "The compass points to the north.",
        "exampleTranslation": "เข็มทิศชี้ไปทางทิศเหนือ"
    },
    {
        "word": "northern",
        "partOfSpeech": "adjective",
        "translation": "ทางทิศเหนือ",
        "definition": "",
        "example": "They live in northern Italy.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ทางตอนเหนือของอิตาลี"
    },
    {
        "word": "nose",
        "partOfSpeech": "adverb",
        "translation": "จมูก",
        "definition": "",
        "example": "He has a large nose.",
        "exampleTranslation": "เขามีจมูกใหญ่"
    },
    {
        "word": "not",
        "partOfSpeech": "adverb",
        "translation": "ไม่",
        "definition": "",
        "example": "I am not tired.",
        "exampleTranslation": "ฉันไม่เหนื่อย"
    },
    {
        "word": "note",
        "partOfSpeech": "noun",
        "translation": "จด บันทึก",
        "definition": "",
        "example": "I left a note on the fridge.",
        "exampleTranslation": "ฉันทิ้งโน้ตไว้บนตู้เย็น"
    },
    {
        "word": "nothing",
        "partOfSpeech": "noun",
        "translation": "ไม่มีอะไร",
        "definition": "",
        "example": "There is nothing in the box.",
        "exampleTranslation": "ไม่มีอะไรอยู่ในกล่องเลย"
    },
    {
        "word": "notice",
        "partOfSpeech": "noun",
        "translation": "ประกาศ แจ้ง",
        "definition": "",
        "example": "Did you notice his new haircut?",
        "exampleTranslation": "คุณสังเกตเห็นทรงผมใหม่ของเขาไหม?"
    },
    {
        "word": "noticeable",
        "partOfSpeech": "adjective",
        "translation": "โดดเด่น, สะดุดตา",
        "definition": "",
        "example": "There is a noticeable difference.",
        "exampleTranslation": "มีความแตกต่างที่เห็นได้ชัด"
    },
    {
        "word": "novel",
        "partOfSpeech": "noun",
        "translation": "นวนิยาย",
        "definition": "",
        "example": "She wrote a famous novel.",
        "exampleTranslation": "เธอเขียนนวนิยายที่มีชื่อเสียง"
    },
    {
        "word": "November",
        "partOfSpeech": "noun",
        "translation": "พฤศจิกายน",
        "definition": "",
        "example": "We will travel in November.",
        "exampleTranslation": "พวกเราจะเดินทางในเดือนพฤศจิกายน"
    },
    {
        "word": "now",
        "partOfSpeech": "adverb",
        "translation": "เดีѺยวนี้",
        "definition": "",
        "example": "I want it right now.",
        "exampleTranslation": "ฉันต้องการมันเดี๋ยวนี้"
    },
    {
        "word": "nowhere",
        "partOfSpeech": "adverb",
        "translation": "ไม่มีที่ไหนเลย",
        "definition": "",
        "example": "There is nowhere to hide.",
        "exampleTranslation": "ไม่มีที่ให้ซ่อนตัว"
    },
    {
        "word": "nuclear",
        "partOfSpeech": "adjective",
        "translation": "นิวเคลียร์",
        "definition": "",
        "example": "They are building a nuclear power plant.",
        "exampleTranslation": "พวกเขากำลังสร้างโรงไฟฟ้านิวเคลียร์"
    },
    {
        "word": "number",
        "partOfSpeech": "noun",
        "translation": "ตัวเลข จํานวน",
        "definition": "",
        "example": "Pick a number from one to ten.",
        "exampleTranslation": "เลือกตัวเลขตั้งแต่หนึ่งถึงสิบ"
    },
    {
        "word": "nurse",
        "partOfSpeech": "noun",
        "translation": "พยาบาล",
        "definition": "",
        "example": "The nurse took my blood pressure.",
        "exampleTranslation": "พยาบาลวัดความดันโลหิตให้ฉัน"
    },
    {
        "word": "nut",
        "partOfSpeech": "noun",
        "translation": "ถั่ว",
        "definition": "",
        "example": "I like to eat mixed nuts.",
        "exampleTranslation": "ฉันชอบกินถั่วรวม"
    },
    {
        "word": "obey",
        "partOfSpeech": "noun",
        "translation": "เชื่อฟัง",
        "definition": "",
        "example": "You must obey the law.",
        "exampleTranslation": "คุณต้องปฏิบัติตามกฎหมาย"
    },
    {
        "word": "object",
        "partOfSpeech": "noun",
        "translation": "วัตถุ สิ่งของ",
        "definition": "",
        "example": "What is that object on the table?",
        "exampleTranslation": "วัตถุบนโต๊ะนั้นคืออะไร?"
    },
    {
        "word": "objective",
        "partOfSpeech": "noun",
        "translation": "วัตถุประสงค์ ไม่ลําเอียง",
        "definition": "",
        "example": "The main objective is to win.",
        "exampleTranslation": "วัตถุประสงค์หลักคือการเอาชนะ"
    },
    {
        "word": "observation",
        "partOfSpeech": "noun",
        "translation": "การสังเกต",
        "definition": "",
        "example": "Make a careful observation.",
        "exampleTranslation": "ทำการสังเกตอย่างระมัดระวัง"
    },
    {
        "word": "observe",
        "partOfSpeech": "noun",
        "translation": "สังเกต",
        "definition": "",
        "example": "We observed the stars through a telescope.",
        "exampleTranslation": "พวกเราสังเกตดวงดาวผ่านกล้องโทรทรรศน์"
    },
    {
        "word": "obtain",
        "partOfSpeech": "verb",
        "translation": "ได้รับ",
        "definition": "",
        "example": "You need a ticket to obtain entry.",
        "exampleTranslation": "คุณต้องมีตั๋วเพื่อเข้าชม"
    },
    {
        "word": "obvious",
        "partOfSpeech": "adjective",
        "translation": "ชัดเจน, ชัดแจ้ง",
        "definition": "",
        "example": "It is obvious that he likes you.",
        "exampleTranslation": "เห็นได้ชัดว่าเขาชอบคุณ"
    },
    {
        "word": "obviously",
        "partOfSpeech": "adverb",
        "translation": "อย่างเห็นชัด อย่างเด่นชัด",
        "definition": "",
        "example": "Obviously, we need more time.",
        "exampleTranslation": "เห็นได้ชัดว่าพวกเราต้องการเวลาเพิ่ม"
    },
    {
        "word": "occasion",
        "partOfSpeech": "noun",
        "translation": "โอกาส",
        "definition": "",
        "example": "This is a special occasion.",
        "exampleTranslation": "นี่คือโอกาสพิเศษ"
    },
    {
        "word": "occasionally",
        "partOfSpeech": "adverb",
        "translation": "เป็นครั้งเป็นคราว, บางครั้งบางคราว",
        "definition": "",
        "example": "We go to the cinema occasionally.",
        "exampleTranslation": "พวกเราไปโรงภาพยนตร์เป็นครั้งคราว"
    },
    {
        "word": "occupied",
        "partOfSpeech": "verb",
        "translation": "ซึ่งยุ่งวุ่นวาย ซึ่งติดธุระ",
        "definition": "",
        "example": "This seat is occupied.",
        "exampleTranslation": "ที่นั่งนี้มีคนนั่งแล้ว"
    },
    {
        "word": "occupy",
        "partOfSpeech": "noun",
        "translation": "ครอบครอง ยึดครอง",
        "definition": "",
        "example": "The army occupied the town.",
        "exampleTranslation": "กองทัพยึดครองเมือง"
    },
    {
        "word": "occur",
        "partOfSpeech": "noun",
        "translation": "เกิดขึ้น ปรากฏขึ้น",
        "definition": "",
        "example": "The accident occurred yesterday.",
        "exampleTranslation": "อุบัติเหตุเกิดขึ้นเมื่อวานนี้"
    },
    {
        "word": "ocean",
        "partOfSpeech": "noun",
        "translation": "มหาสมุทร",
        "definition": "",
        "example": "The boat sailed across the ocean.",
        "exampleTranslation": "เรือแล่นข้ามมหาสมุทร"
    },
    {
        "word": "o'clock",
        "partOfSpeech": "noun",
        "translation": "นาฬิกา",
        "definition": "",
        "example": "It is five o'clock.",
        "exampleTranslation": "เวลาห้าโมงตรง"
    },
    {
        "word": "October",
        "partOfSpeech": "noun",
        "translation": "ตุลาคม",
        "definition": "",
        "example": "We have a holiday in October.",
        "exampleTranslation": "พวกเรามีวันหยุดในเดือนตุลาคม"
    },
    {
        "word": "odd",
        "partOfSpeech": "noun",
        "translation": "แปลก คี่",
        "definition": "",
        "example": "That is an odd shape.",
        "exampleTranslation": "นั่นเป็นรูปร่างที่แปลก"
    },
    {
        "word": "oddly",
        "partOfSpeech": "adverb",
        "translation": "อย่างประหลาด อย่างพิกล อย่างแปลกประหลาด",
        "definition": "",
        "example": "He was behaving oddly.",
        "exampleTranslation": "เขากำลังทำตัวแปลกๆ"
    },
    {
        "word": "of",
        "partOfSpeech": "noun",
        "translation": "ของ เกี่ยวกับ",
        "definition": "",
        "example": "A piece of cake.",
        "exampleTranslation": "เค้กหนึ่งชิ้น"
    },
    {
        "word": "off",
        "partOfSpeech": "noun",
        "translation": "หมด, ขาด",
        "definition": "",
        "example": "Turn off the TV.",
        "exampleTranslation": "ปิดทีวี"
    },
    {
        "word": "offence",
        "partOfSpeech": "noun",
        "translation": "การกระทําผิด การโจมตี การทําให้ขุ่นเคือง",
        "definition": "",
        "example": "It is a criminal offence.",
        "exampleTranslation": "มันเป็นความผิดทางอาญา"
    },
    {
        "word": "offend",
        "partOfSpeech": "noun",
        "translation": "ทําให้ขุ่นเคือง",
        "definition": "",
        "example": "I did not mean to offend you.",
        "exampleTranslation": "ฉันไม่ได้ตั้งใจจะทำให้คุณโกรธ"
    },
    {
        "word": "offense",
        "partOfSpeech": "noun",
        "translation": "ความขุ่นเคือง",
        "definition": "",
        "example": "He committed a minor offense.",
        "exampleTranslation": "เขากระทำความผิดสถานเบา"
    },
    {
        "word": "offensive",
        "partOfSpeech": "adjective",
        "translation": "ที่ทําให้ขุ่นเคือง น่ารังเกียจ",
        "definition": "",
        "example": "That smell is offensive.",
        "exampleTranslation": "กลิ่นนั้นเหม็นมาก"
    },
    {
        "word": "offer",
        "partOfSpeech": "noun",
        "translation": "เสนอ",
        "definition": "",
        "example": "Can I offer you a drink?",
        "exampleTranslation": "ฉันขอเสนอเครื่องดื่มให้คุณได้ไหม?"
    },
    {
        "word": "office",
        "partOfSpeech": "noun",
        "translation": "สํานักงาน",
        "definition": "",
        "example": "I am going to the office.",
        "exampleTranslation": "ฉันกำลังจะไปที่ทำงาน"
    },
    {
        "word": "officer",
        "partOfSpeech": "noun",
        "translation": "เจ้าหน้าที่",
        "definition": "",
        "example": "Ask the police officer.",
        "exampleTranslation": "ถามเจ้าหน้าที่ตำรวจสิ"
    },
    {
        "word": "official",
        "partOfSpeech": "noun",
        "translation": "เป็นทางการ เจ้าหน้าที่",
        "definition": "",
        "example": "This is an official document.",
        "exampleTranslation": "นี่คือเอกสารทางการ"
    },
    {
        "word": "officially",
        "partOfSpeech": "adverb",
        "translation": "อย่างเป็นทางการ",
        "definition": "",
        "example": "The event has officially started.",
        "exampleTranslation": "งานเริ่มอย่างเป็นทางการแล้ว"
    },
    {
        "word": "often",
        "partOfSpeech": "adverb",
        "translation": "บ่อยครั้ง",
        "definition": "",
        "example": "I often go to the park.",
        "exampleTranslation": "ฉันไปสวนสาธารณะบ่อยๆ"
    },
    {
        "word": "oh",
        "partOfSpeech": "noun",
        "translation": "คําอุทานแสดงความตกใจ",
        "definition": "",
        "example": "Oh, I see!",
        "exampleTranslation": "โอ้ ฉันเข้าใจแล้ว!"
    },
    {
        "word": "oil",
        "partOfSpeech": "noun",
        "translation": "นํ้ามัน",
        "definition": "",
        "example": "Add some cooking oil to the pan.",
        "exampleTranslation": "ใส่น้ำมันทำอาหารลงในกระทะเล็กน้อย"
    },
    {
        "word": "OK",
        "partOfSpeech": "noun",
        "translation": "ถูกต้อง",
        "definition": "",
        "example": "Is everything OK?",
        "exampleTranslation": "ทุกอย่างโอเคไหม?"
    },
    {
        "word": "old",
        "partOfSpeech": "adjective",
        "translation": "แก่ เก่าแก่",
        "definition": "",
        "example": "He is an old man.",
        "exampleTranslation": "เขาเป็นชายชรา"
    },
    {
        "word": "old-fashioned",
        "partOfSpeech": "adjective",
        "translation": "สมัยเก่า",
        "definition": "",
        "example": "That dress is old-fashioned.",
        "exampleTranslation": "ชุดนั้นเชยแล้ว"
    },
    {
        "word": "on",
        "partOfSpeech": "noun",
        "translation": "บน, เมื่อ",
        "definition": "",
        "example": "The book is on the table.",
        "exampleTranslation": "หนังสืออยู่บนโต๊ะ"
    },
    {
        "word": "once",
        "partOfSpeech": "adverb",
        "translation": "ครั้งหนึ่ง",
        "definition": "",
        "example": "I have been there once.",
        "exampleTranslation": "ฉันเคยไปที่นั่นหนึ่งครั้ง"
    },
    {
        "word": "one",
        "partOfSpeech": "noun",
        "translation": "หนึ่ง",
        "definition": "",
        "example": "I have one brother.",
        "exampleTranslation": "ฉันมีพี่ชายหนึ่งคน"
    },
    {
        "word": "one another",
        "partOfSpeech": "noun",
        "translation": "ซึ่งกันและกัน",
        "definition": "",
        "example": "They help one another.",
        "exampleTranslation": "พวกเขาช่วยเหลือซึ่งกันและกัน"
    },
    {
        "word": "onion",
        "partOfSpeech": "noun",
        "translation": "หัวหอม",
        "definition": "",
        "example": "I am cutting an onion.",
        "exampleTranslation": "ฉันกำลังหั่นหัวหอม"
    },
    {
        "word": "only",
        "partOfSpeech": "adverb",
        "translation": "อันเดียว คนเดียว",
        "definition": "",
        "example": "I only have one dollar.",
        "exampleTranslation": "ฉันมีเงินแค่หนึ่งดอลลาร์"
    },
    {
        "word": "onto",
        "partOfSpeech": "noun",
        "translation": "ไปยัง",
        "definition": "",
        "example": "The cat jumped onto the table.",
        "exampleTranslation": "แมวกระโดดขึ้นไปบนโต๊ะ"
    },
    {
        "word": "open",
        "partOfSpeech": "adjective",
        "translation": "เปิด",
        "definition": "",
        "example": "Please open the door.",
        "exampleTranslation": "โปรดเปิดประตู"
    },
    {
        "word": "opening",
        "partOfSpeech": "noun",
        "translation": "การเปิด ที่โล่ง กลางแจ้ง",
        "definition": "",
        "example": "The store is opening soon.",
        "exampleTranslation": "ร้านกำลังจะเปิดในไม่ช้า"
    },
    {
        "word": "openly",
        "partOfSpeech": "adverb",
        "translation": "อย่างเปิดเผย",
        "definition": "",
        "example": "They talked openly about their feelings.",
        "exampleTranslation": "พวกเขาพูดถึงความรู้สึกของตนเองอย่างเปิดเผย"
    },
    {
        "word": "operate",
        "partOfSpeech": "noun",
        "translation": "ทํางาน กระทํา",
        "definition": "",
        "example": "He knows how to operate this machine.",
        "exampleTranslation": "เขารู้วิธีใช้เครื่องจักรนี้"
    },
    {
        "word": "operation",
        "partOfSpeech": "noun",
        "translation": "การดําเนินการ การผ่าตัด",
        "definition": "",
        "example": "The doctor performed an operation.",
        "exampleTranslation": "หมอทำการผ่าตัด"
    },
    {
        "word": "opinion",
        "partOfSpeech": "noun",
        "translation": "ความคิดเห็น",
        "definition": "",
        "example": "What is your opinion?",
        "exampleTranslation": "คุณมีความคิดเห็นอย่างไร?"
    },
    {
        "word": "opponent",
        "partOfSpeech": "noun",
        "translation": "ฝ่ายตรงข้าม คู่แข่งขัน",
        "definition": "",
        "example": "He defeated his opponent.",
        "exampleTranslation": "เขาเอาชนะคู่ต่อสู้ของเขา"
    },
    {
        "word": "opportunity",
        "partOfSpeech": "noun",
        "translation": "โอกาส",
        "definition": "",
        "example": "This is a great opportunity.",
        "exampleTranslation": "นี่เป็นโอกาสที่ดีมาก"
    },
    {
        "word": "oppose",
        "partOfSpeech": "noun",
        "translation": "คัดค้าน",
        "definition": "",
        "example": "I oppose this idea.",
        "exampleTranslation": "ฉันคัดค้านความคิดนี้"
    },
    {
        "word": "opposed",
        "partOfSpeech": "verb",
        "translation": "ซึ่งต่อต้าน",
        "definition": "",
        "example": "They are opposed to the new law.",
        "exampleTranslation": "พวกเขาคัดค้านกฎหมายใหม่"
    },
    {
        "word": "opposite",
        "partOfSpeech": "noun",
        "translation": "ตรงกันข้าม",
        "definition": "",
        "example": "They live on the opposite side of the street.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ฝั่งตรงข้ามของถนน"
    },
    {
        "word": "opposition",
        "partOfSpeech": "noun",
        "translation": "ฝ่ายค้าน",
        "definition": "",
        "example": "The plan faced strong opposition.",
        "exampleTranslation": "แผนนี้เผชิญกับการคัดค้านอย่างหนัก"
    },
    {
        "word": "option",
        "partOfSpeech": "noun",
        "translation": "การเลือก ทางเลือก",
        "definition": "",
        "example": "You have another option.",
        "exampleTranslation": "คุณมีอีกหนึ่งทางเลือก"
    },
    {
        "word": "or",
        "partOfSpeech": "noun",
        "translation": "หรือ มิเช่นนั้น",
        "definition": "",
        "example": "Do you want tea or coffee?",
        "exampleTranslation": "คุณต้องการชาหรือกาแฟ?"
    },
    {
        "word": "orange",
        "partOfSpeech": "noun",
        "translation": "สีส้ม ส้ม",
        "definition": "",
        "example": "I ate an orange.",
        "exampleTranslation": "ฉันกินส้มหนึ่งผล"
    },
    {
        "word": "order",
        "partOfSpeech": "noun",
        "translation": "เรียงลําดับ",
        "definition": "",
        "example": "May I take your order?",
        "exampleTranslation": "ฉันขอรับออเดอร์ของคุณได้ไหม?"
    },
    {
        "word": "ordinary",
        "partOfSpeech": "adjective",
        "translation": "สามัญ",
        "definition": "",
        "example": "It was just an ordinary day.",
        "exampleTranslation": "มันเป็นแค่วันธรรมดาวันหนึ่ง"
    },
    {
        "word": "organ",
        "partOfSpeech": "noun",
        "translation": "อวัยวะ",
        "definition": "",
        "example": "The heart is a vital organ.",
        "exampleTranslation": "หัวใจเป็นอวัยวะที่สำคัญ"
    },
    {
        "word": "organization",
        "partOfSpeech": "noun",
        "translation": "องค์กร",
        "definition": "",
        "example": "She works for a charity organization.",
        "exampleTranslation": "เธอทำงานให้กับองค์กรการกุศล"
    },
    {
        "word": "organize",
        "partOfSpeech": "verb",
        "translation": "จัดการ จัดตั้ง",
        "definition": "",
        "example": "We will organize a party.",
        "exampleTranslation": "พวกเราจะจัดงานปาร์ตี้"
    },
    {
        "word": "organized",
        "partOfSpeech": "verb",
        "translation": "ซึ่งจัดตั้ง",
        "definition": "",
        "example": "His desk is very organized.",
        "exampleTranslation": "โต๊ะทำงานของเขาเป็นระเบียบมาก"
    },
    {
        "word": "origin",
        "partOfSpeech": "noun",
        "translation": "จุดกําเนิด",
        "definition": "",
        "example": "What is the origin of this word?",
        "exampleTranslation": "ที่มาของคำนี้คืออะไร?"
    },
    {
        "word": "original",
        "partOfSpeech": "adjective",
        "translation": "แรกเริ่ม",
        "definition": "",
        "example": "This is the original painting.",
        "exampleTranslation": "นี่คือภาพวาดต้นฉบับ"
    },
    {
        "word": "originally",
        "partOfSpeech": "adverb",
        "translation": "โดยดั้งเดิม",
        "definition": "",
        "example": "I am originally from Spain.",
        "exampleTranslation": "เดิมทีฉันมาจากสเปน"
    },
    {
        "word": "other",
        "partOfSpeech": "adjective",
        "translation": "อื่นๆ",
        "definition": "",
        "example": "I need the other shoe.",
        "exampleTranslation": "ฉันต้องการรองเท้าอีกข้าง"
    },
    {
        "word": "otherwise",
        "partOfSpeech": "adverb",
        "translation": "มิฉะนั้น",
        "definition": "",
        "example": "Hurry up, otherwise we will be late.",
        "exampleTranslation": "รีบหน่อย มิฉะนั้นพวกเราจะสาย"
    },
    {
        "word": "ought to",
        "partOfSpeech": "noun",
        "translation": "ควรจะ",
        "definition": "",
        "example": "You ought to apologize.",
        "exampleTranslation": "คุณควรจะขอโทษ"
    },
    {
        "word": "our",
        "partOfSpeech": "noun",
        "translation": "ของเรา",
        "definition": "",
        "example": "This is our house.",
        "exampleTranslation": "นี่คือบ้านของพวกเรา"
    },
    {
        "word": "ours",
        "partOfSpeech": "noun",
        "translation": "ของเรา สิ่งที่เป็นของเรา",
        "definition": "",
        "example": "The red car is ours.",
        "exampleTranslation": "รถสีแดงเป็นของพวกเรา"
    },
    {
        "word": "ourselves",
        "partOfSpeech": "noun",
        "translation": "ตัวเรา",
        "definition": "",
        "example": "We cooked the dinner ourselves.",
        "exampleTranslation": "พวกเราทำอาหารเย็นด้วยตัวเอง"
    },
    {
        "word": "out",
        "partOfSpeech": "noun",
        "translation": "ข้างนอก, ออกไป",
        "definition": "",
        "example": "Please get out of the car.",
        "exampleTranslation": "โปรดลงจากรถ"
    },
    {
        "word": "outdoor",
        "partOfSpeech": "noun",
        "translation": "กลางแจ้ง ที่โล่ง",
        "definition": "",
        "example": "I like outdoor activities.",
        "exampleTranslation": "ฉันชอบกิจกรรมกลางแจ้ง"
    },
    {
        "word": "outdoors",
        "partOfSpeech": "noun",
        "translation": "กลางแจ้ง",
        "definition": "",
        "example": "The children are playing outdoors.",
        "exampleTranslation": "เด็กๆ กำลังเล่นอยู่กลางแจ้ง"
    },
    {
        "word": "outer",
        "partOfSpeech": "noun",
        "translation": "ที่อยู่ด้านนอก",
        "definition": "",
        "example": "Put on your outer layer of clothing.",
        "exampleTranslation": "สวมเสื้อผ้าชั้นนอกของคุณ"
    },
    {
        "word": "outline",
        "partOfSpeech": "noun",
        "translation": "เค้าโครง",
        "definition": "",
        "example": "He gave a brief outline of the plan.",
        "exampleTranslation": "เขาให้โครงร่างคร่าวๆ ของแผน"
    },
    {
        "word": "output",
        "partOfSpeech": "noun",
        "translation": "ผลผลิต ปริมาณของสิ่งที่ผลิตได้",
        "definition": "",
        "example": "The factory has doubled its output.",
        "exampleTranslation": "โรงงานได้เพิ่มผลผลิตเป็นสองเท่า"
    },
    {
        "word": "outside",
        "partOfSpeech": "noun",
        "translation": "ภายนอก",
        "definition": "",
        "example": "It is cold outside.",
        "exampleTranslation": "ข้างนอกอากาศหนาว"
    },
    {
        "word": "outstanding",
        "partOfSpeech": "adjective",
        "translation": "เด่น ยังค้างชําระหนี้",
        "definition": "",
        "example": "The food was outstanding.",
        "exampleTranslation": "อาหารอร่อยยอดเยี่ยมมาก"
    },
    {
        "word": "oven",
        "partOfSpeech": "adverb",
        "translation": "เตาอบ",
        "definition": "",
        "example": "Put the pizza in the oven.",
        "exampleTranslation": "นำพิซซ่าเข้าเตาอบ"
    },
    {
        "word": "over",
        "partOfSpeech": "noun",
        "translation": "เหนือ",
        "definition": "",
        "example": "The plane flew over the house.",
        "exampleTranslation": "เครื่องบินบินเหนือบ้าน"
    },
    {
        "word": "overall",
        "partOfSpeech": "adjective",
        "translation": "ทั้งหมด รวมทั้งสิ้น",
        "definition": "",
        "example": "The overall result is good.",
        "exampleTranslation": "ผลลัพธ์โดยรวมดีมาก"
    },
    {
        "word": "overcome",
        "partOfSpeech": "noun",
        "translation": "มีชัย พิชิต",
        "definition": "",
        "example": "We must overcome these difficulties.",
        "exampleTranslation": "พวกเราต้องเอาชนะความยากลำบากเหล่านี้"
    },
    {
        "word": "owe",
        "partOfSpeech": "noun",
        "translation": "เป็นหนี้",
        "definition": "",
        "example": "I owe you an apology.",
        "exampleTranslation": "ฉันติดค้างคำขอโทษคุณ"
    },
    {
        "word": "own",
        "partOfSpeech": "adjective",
        "translation": "ด้วยตัวเอง",
        "definition": "",
        "example": "I have my own room.",
        "exampleTranslation": "ฉันมีห้องส่วนตัวของตัวเอง"
    },
    {
        "word": "owner",
        "partOfSpeech": "noun",
        "translation": "เจ้าของ",
        "definition": "",
        "example": "Who is the owner of this car?",
        "exampleTranslation": "ใครคือเจ้าของรถคันนี้?"
    },
    {
        "word": "pace",
        "partOfSpeech": "noun",
        "translation": "ฝีเท้า อัตราการเดิน เดินกลับไปกลับมา",
        "definition": "",
        "example": "He walked at a fast pace.",
        "exampleTranslation": "เขาเดินด้วยความเร็วสูง"
    },
    {
        "word": "pack",
        "partOfSpeech": "noun",
        "translation": "ห่อ มัด",
        "definition": "",
        "example": "I need to pack my bag.",
        "exampleTranslation": "ฉันต้องจัดกระเป๋า"
    },
    {
        "word": "package",
        "partOfSpeech": "noun",
        "translation": "หีบ, ห่อ",
        "definition": "",
        "example": "A package arrived for you.",
        "exampleTranslation": "มีพัสดุมาส่งถึงคุณ"
    },
    {
        "word": "packaging",
        "partOfSpeech": "noun",
        "translation": "วัสดุที่ใช่ห่อหุ้มหรือป้องกันสินค้า บรรจุภัณฑ์",
        "definition": "",
        "example": "The product has new packaging.",
        "exampleTranslation": "ผลิตภัณฑ์นี้มีบรรจุภัณฑ์ใหม่"
    },
    {
        "word": "packet",
        "partOfSpeech": "noun",
        "translation": "ห่อของเล็กๆ",
        "definition": "",
        "example": "I bought a packet of chips.",
        "exampleTranslation": "ฉันซื้อขนมมันฝรั่งทอดหนึ่งห่อ"
    },
    {
        "word": "page",
        "partOfSpeech": "noun",
        "translation": "หน้าหนังสือ ใบ",
        "definition": "",
        "example": "Open the book to page 10.",
        "exampleTranslation": "เปิดหนังสือไปที่หน้า 10"
    },
    {
        "word": "pain",
        "partOfSpeech": "noun",
        "translation": "ความเจ็บปวด",
        "definition": "",
        "example": "I have a pain in my back.",
        "exampleTranslation": "ฉันมีอาการปวดหลัง"
    },
    {
        "word": "painful",
        "partOfSpeech": "noun",
        "translation": "เจ็บปวด",
        "definition": "",
        "example": "My arm is very painful.",
        "exampleTranslation": "แขนของฉันเจ็บมาก"
    },
    {
        "word": "paint",
        "partOfSpeech": "noun",
        "translation": "วาดภาพสี ทาสี",
        "definition": "",
        "example": "We will paint the wall blue.",
        "exampleTranslation": "พวกเราจะทาสีผนังเป็นสีฟ้า"
    },
    {
        "word": "painter",
        "partOfSpeech": "noun",
        "translation": "ช่างทาสี จิตรกร",
        "definition": "",
        "example": "He is a famous painter.",
        "exampleTranslation": "เขาเป็นจิตรกรที่มีชื่อเสียง"
    },
    {
        "word": "painting",
        "partOfSpeech": "noun",
        "translation": "ภาพวาด การทาสี",
        "definition": "",
        "example": "This is a beautiful painting.",
        "exampleTranslation": "นี่คือภาพวาดที่สวยงาม"
    },
    {
        "word": "pair",
        "partOfSpeech": "verb",
        "translation": "คู่., -.",
        "definition": "",
        "example": "I bought a new pair of shoes.",
        "exampleTranslation": "ฉันซื้อรองเท้าคู่ใหม่"
    },
    {
        "word": "palace",
        "partOfSpeech": "noun",
        "translation": "พระราชวัง",
        "definition": "",
        "example": "The king lives in a palace.",
        "exampleTranslation": "พระราชาอาศัยอยู่ในพระราชวัง"
    },
    {
        "word": "pale",
        "partOfSpeech": "noun",
        "translation": "ซีด",
        "definition": "",
        "example": "Her face looked pale.",
        "exampleTranslation": "ใบหน้าของเธอดูซีดเซียว"
    },
    {
        "word": "pan",
        "partOfSpeech": "noun",
        "translation": "กระทะ",
        "definition": "",
        "example": "Fry the eggs in a pan.",
        "exampleTranslation": "ทอดไข่ในกระทะ"
    },
    {
        "word": "panel",
        "partOfSpeech": "noun",
        "translation": "บัญชีชื่อ, รายชื่อ",
        "definition": "",
        "example": "The control panel is here.",
        "exampleTranslation": "แผงควบคุมอยู่ที่นี่"
    },
    {
        "word": "pants",
        "partOfSpeech": "noun",
        "translation": "กางเกง",
        "definition": "",
        "example": "I need to buy new pants.",
        "exampleTranslation": "ฉันต้องซื้อกางเกงตัวใหม่"
    },
    {
        "word": "paper",
        "partOfSpeech": "noun",
        "translation": "กระดาษ",
        "definition": "",
        "example": "Write your name on the paper.",
        "exampleTranslation": "เขียนชื่อของคุณลงบนกระดาษ"
    },
    {
        "word": "parallel",
        "partOfSpeech": "noun",
        "translation": "ขนาน",
        "definition": "",
        "example": "Draw two parallel lines.",
        "exampleTranslation": "วาดเส้นขนานสองเส้น"
    },
    {
        "word": "parent",
        "partOfSpeech": "noun",
        "translation": "พ่อแม่",
        "definition": "",
        "example": "My parents live in London.",
        "exampleTranslation": "พ่อแม่ของฉันอาศัยอยู่ในลอนดอน"
    },
    {
        "word": "park",
        "partOfSpeech": "noun",
        "translation": "สวนสาธารณะ",
        "definition": "",
        "example": "We walked in the park.",
        "exampleTranslation": "พวกเราเดินในสวนสาธารณะ"
    },
    {
        "word": "parliament",
        "partOfSpeech": "noun",
        "translation": "รัฐสภา",
        "definition": "",
        "example": "The new law was passed by parliament.",
        "exampleTranslation": "กฎหมายใหม่ผ่านการเห็นชอบจากรัฐสภา"
    },
    {
        "word": "part",
        "partOfSpeech": "noun",
        "translation": "ส่วน ฝ่าย",
        "definition": "",
        "example": "This is my favorite part of the movie.",
        "exampleTranslation": "นี่คือส่วนที่ฉันชอบที่สุดในภาพยนตร์"
    },
    {
        "word": "particular",
        "partOfSpeech": "adjective",
        "translation": "โดยเฉพาะ จําเพาะ พิเศษ อย่างยิ่ง ผิดธรรมดา",
        "definition": "",
        "example": "Is there any particular reason?",
        "exampleTranslation": "มีเหตุผลอะไรเป็นพิเศษไหม?"
    },
    {
        "word": "particularly",
        "partOfSpeech": "adverb",
        "translation": "โดยเฉพาะ เป็นพิเศษ",
        "definition": "",
        "example": "I am particularly interested in history.",
        "exampleTranslation": "ฉันสนใจประวัติศาสตร์เป็นพิเศษ"
    },
    {
        "word": "partly",
        "partOfSpeech": "adverb",
        "translation": "บางส่วน",
        "definition": "",
        "example": "The problem is partly my fault.",
        "exampleTranslation": "ปัญหานี้ส่วนหนึ่งเป็นความผิดของฉันเอง"
    },
    {
        "word": "partner",
        "partOfSpeech": "noun",
        "translation": "หุ้นส่วน",
        "definition": "",
        "example": "He is my business partner.",
        "exampleTranslation": "เขาเป็นหุ้นส่วนทางธุรกิจของฉัน"
    },
    {
        "word": "partnership",
        "partOfSpeech": "noun",
        "translation": "ความร่วมมือ ห้างหุ้นส่วน",
        "definition": "",
        "example": "They formed a business partnership.",
        "exampleTranslation": "พวกเขาสร้างความเป็นหุ้นส่วนทางธุรกิจ"
    },
    {
        "word": "party",
        "partOfSpeech": "noun",
        "translation": "พรรค พรรคการเมือง จัดงานเลี้ยง",
        "definition": "",
        "example": "We went to a birthday party.",
        "exampleTranslation": "พวกเราไปงานปาร์ตี้วันเกิด"
    },
    {
        "word": "pass",
        "partOfSpeech": "noun",
        "translation": "ผ่าน, พ้น",
        "definition": "",
        "example": "Please pass the salt.",
        "exampleTranslation": "โปรดส่งเกลือให้หน่อย"
    },
    {
        "word": "passage",
        "partOfSpeech": "noun",
        "translation": "ทาง",
        "definition": "",
        "example": "Walk down this narrow passage.",
        "exampleTranslation": "เดินไปตามทางเดินแคบๆ นี้"
    },
    {
        "word": "passenger",
        "partOfSpeech": "noun",
        "translation": "ผู้โดยสาร",
        "definition": "",
        "example": "The train has many passengers.",
        "exampleTranslation": "รถไฟมีผู้โดยสารมากมาย"
    },
    {
        "word": "passing",
        "partOfSpeech": "noun",
        "translation": "ผ่านไป",
        "definition": "",
        "example": "Time is passing quickly.",
        "exampleTranslation": "เวลากำลังผ่านไปอย่างรวดเร็ว"
    },
    {
        "word": "passport",
        "partOfSpeech": "noun",
        "translation": "หนังสือเดินทาง",
        "definition": "",
        "example": "Do not forget your passport.",
        "exampleTranslation": "อย่าลืมหนังสือเดินทางของคุณ"
    },
    {
        "word": "past",
        "partOfSpeech": "noun",
        "translation": "อดีต.. อดีตกาล",
        "definition": "",
        "example": "The past is the past.",
        "exampleTranslation": "อดีตก็คืออดีต"
    },
    {
        "word": "path",
        "partOfSpeech": "noun",
        "translation": "ทางเดิน, เส้นทาง",
        "definition": "",
        "example": "Follow the path to the river.",
        "exampleTranslation": "เดินตามทางไปสู่แม่น้ำ"
    },
    {
        "word": "patience",
        "partOfSpeech": "noun",
        "translation": "ความอดทน",
        "definition": "",
        "example": "You need a lot of patience.",
        "exampleTranslation": "คุณต้องมีความอดทนอย่างมาก"
    },
    {
        "word": "patient",
        "partOfSpeech": "noun",
        "translation": "ผู้ป่วย อดทน",
        "definition": "",
        "example": "The doctor examined the patient.",
        "exampleTranslation": "หมอตรวจคนไข้"
    },
    {
        "word": "pattern",
        "partOfSpeech": "noun",
        "translation": "แบบแผน แบบฉบับ แบบอย่าง รูปแบบ ลีลา",
        "definition": "",
        "example": "The shirt has a striped pattern.",
        "exampleTranslation": "เสื้อเชิ้ตมีลวดลายทาง"
    },
    {
        "word": "pause",
        "partOfSpeech": "noun",
        "translation": "หยุดชั่วคราว",
        "definition": "",
        "example": "There was a short pause.",
        "exampleTranslation": "มีการหยุดพักสั้นๆ"
    },
    {
        "word": "pay",
        "partOfSpeech": "noun",
        "translation": "จ่าย",
        "definition": "",
        "example": "I will pay for the meal.",
        "exampleTranslation": "ฉันจะจ่ายค่าอาหารเอง"
    },
    {
        "word": "payment",
        "partOfSpeech": "noun",
        "translation": "การชําระเงิน",
        "definition": "",
        "example": "We accept payment by card.",
        "exampleTranslation": "พวกเรารับชำระเงินด้วยบัตร"
    },
    {
        "word": "peace",
        "partOfSpeech": "noun",
        "translation": "ความสงบสุข",
        "definition": "",
        "example": "We all want world peace.",
        "exampleTranslation": "พวกเราทุกคนต้องการสันติภาพของโลก"
    },
    {
        "word": "peaceful",
        "partOfSpeech": "noun",
        "translation": "เงียบสงบ",
        "definition": "",
        "example": "The village is very peaceful.",
        "exampleTranslation": "หมู่บ้านนี้เงียบสงบมาก"
    },
    {
        "word": "peak",
        "partOfSpeech": "noun",
        "translation": "ยอด จุดสุดยอด",
        "definition": "",
        "example": "He climbed to the mountain peak.",
        "exampleTranslation": "เขาปีนขึ้นไปถึงยอดเขา"
    },
    {
        "word": "pen",
        "partOfSpeech": "verb",
        "translation": "ปากกา",
        "definition": "",
        "example": "I need a blue pen.",
        "exampleTranslation": "ฉันต้องการปากกาสีน้ำเงิน"
    },
    {
        "word": "pencil",
        "partOfSpeech": "noun",
        "translation": "ดินสอ",
        "definition": "",
        "example": "Do you have a pencil?",
        "exampleTranslation": "คุณมีดินสอไหม?"
    },
    {
        "word": "penny",
        "partOfSpeech": "noun",
        "translation": "เหรียญบรอนซ์อังกฤษที่มีค่าเท่ากับ 1/12 ซิลลิง",
        "definition": "",
        "example": "It costs only a penny.",
        "exampleTranslation": "มันราคาแค่หนึ่งเพนนี"
    },
    {
        "word": "pension",
        "partOfSpeech": "noun",
        "translation": "เงินบํานาญ",
        "definition": "",
        "example": "He retired and receives a pension.",
        "exampleTranslation": "เขาเกษียณแล้วและได้รับเงินบำนาญ"
    },
    {
        "word": "people",
        "partOfSpeech": "noun",
        "translation": "ประชาชน",
        "definition": "",
        "example": "There are many people here.",
        "exampleTranslation": "มีผู้คนมากมายที่นี่"
    },
    {
        "word": "pepper",
        "partOfSpeech": "noun",
        "translation": "พริกไทย",
        "definition": "",
        "example": "Add some salt and pepper.",
        "exampleTranslation": "ใส่เกลือและพริกไทยเล็กน้อย"
    },
    {
        "word": "per",
        "partOfSpeech": "noun",
        "translation": "ต่อ",
        "definition": "",
        "example": "The speed limit is 50 miles per hour.",
        "exampleTranslation": "จำกัดความเร็วที่ 50 ไมล์ต่อชั่วโมง"
    },
    {
        "word": "percent",
        "partOfSpeech": "noun",
        "translation": "เปอร์เซ็นต์",
        "definition": "",
        "example": "Fifty percent of the students passed.",
        "exampleTranslation": "ห้าสิบเปอร์เซ็นต์ของนักเรียนสอบผ่าน"
    },
    {
        "word": "perfect",
        "partOfSpeech": "noun",
        "translation": "สมบูรณ์",
        "definition": "",
        "example": "The weather is perfect today.",
        "exampleTranslation": "วันนี้อากาศสมบูรณ์แบบมาก"
    },
    {
        "word": "perfectly",
        "partOfSpeech": "adverb",
        "translation": "อย่างยอดเยี่ยม",
        "definition": "",
        "example": "She speaks English perfectly.",
        "exampleTranslation": "เธอพูดภาษาอังกฤษได้อย่างสมบูรณ์แบบ"
    },
    {
        "word": "perform",
        "partOfSpeech": "noun",
        "translation": "ดําเนินการ",
        "definition": "",
        "example": "The band will perform tonight.",
        "exampleTranslation": "วงดนตรีจะทำการแสดงคืนนี้"
    },
    {
        "word": "performance",
        "partOfSpeech": "noun",
        "translation": "การปฏิบัติ การแสดง",
        "definition": "",
        "example": "The performance was excellent.",
        "exampleTranslation": "การแสดงยอดเยี่ยมมาก"
    },
    {
        "word": "performer",
        "partOfSpeech": "noun",
        "translation": "ผู้แสดง, ผู้เล่น",
        "definition": "",
        "example": "She is a street performer.",
        "exampleTranslation": "เธอเป็นนักแสดงตามท้องถนน"
    },
    {
        "word": "perhaps",
        "partOfSpeech": "adverb",
        "translation": "บางที",
        "definition": "",
        "example": "Perhaps it will rain later.",
        "exampleTranslation": "บางทีฝนอาจจะตกในภายหลัง"
    },
    {
        "word": "period",
        "partOfSpeech": "noun",
        "translation": "ระยะเวลา, สมัย",
        "definition": "",
        "example": "We had a short rest period.",
        "exampleTranslation": "พวกเรามีช่วงเวลาพักผ่อนสั้นๆ"
    },
    {
        "word": "permanent",
        "partOfSpeech": "noun",
        "translation": "ถาวร",
        "definition": "",
        "example": "Is this a permanent job?",
        "exampleTranslation": "นี่คืองานประจำใช่ไหม?"
    },
    {
        "word": "permission",
        "partOfSpeech": "noun",
        "translation": "การอนุญาต",
        "definition": "",
        "example": "You need permission to enter.",
        "exampleTranslation": "คุณต้องได้รับอนุญาตเพื่อเข้าไป"
    },
    {
        "word": "permit",
        "partOfSpeech": "noun",
        "translation": "ใบอนุญาต",
        "definition": "",
        "example": "Smoking is not permitted here.",
        "exampleTranslation": "ไม่อนุญาตให้สูบบุหรี่ที่นี่"
    },
    {
        "word": "person",
        "partOfSpeech": "noun",
        "translation": "บุคคล",
        "definition": "",
        "example": "He is a nice person.",
        "exampleTranslation": "เขาเป็นคนดี"
    },
    {
        "word": "personal",
        "partOfSpeech": "adjective",
        "translation": "ส่วนบุคคล",
        "definition": "",
        "example": "This is my personal opinion.",
        "exampleTranslation": "นี่คือความคิดเห็นส่วนตัวของฉัน"
    },
    {
        "word": "personality",
        "partOfSpeech": "noun",
        "translation": "บุคลิกภาพ",
        "definition": "",
        "example": "She has a friendly personality.",
        "exampleTranslation": "เธอมีบุคลิกที่เป็นมิตร"
    },
    {
        "word": "personally",
        "partOfSpeech": "adverb",
        "translation": "โดยส่วนรวม",
        "definition": "",
        "example": "I personally think it is a bad idea.",
        "exampleTranslation": "โดยส่วนตัวแล้วฉันคิดว่ามันเป็นความคิดที่ไม่ดี"
    },
    {
        "word": "persuade",
        "partOfSpeech": "noun",
        "translation": "ชักชวน",
        "definition": "",
        "example": "He tried to persuade me to go.",
        "exampleTranslation": "เขาพยายามชักชวนให้ฉันไป"
    },
    {
        "word": "pet",
        "partOfSpeech": "noun",
        "translation": "สัตว์เลี้ยง",
        "definition": "",
        "example": "Do you have any pets?",
        "exampleTranslation": "คุณมีสัตว์เลี้ยงไหม?"
    },
    {
        "word": "petrol",
        "partOfSpeech": "noun",
        "translation": "นํ้ามันรถ",
        "definition": "",
        "example": "The car needs more petrol.",
        "exampleTranslation": "รถต้องการน้ำมันเบนซินเพิ่ม"
    },
    {
        "word": "phase",
        "partOfSpeech": "noun",
        "translation": "ช่วง, ระยะ",
        "definition": "",
        "example": "This is just a passing phase.",
        "exampleTranslation": "นี่เป็นเพียงระยะที่กำลังจะผ่านไป"
    },
    {
        "word": "philosophy",
        "partOfSpeech": "noun",
        "translation": "ปรัชญา",
        "definition": "",
        "example": "He studies Greek philosophy.",
        "exampleTranslation": "เขาศึกษาปรัชญากรีก"
    },
    {
        "word": "phone",
        "partOfSpeech": "noun",
        "translation": "โทรศัพท์",
        "definition": "",
        "example": "Can I use your phone?",
        "exampleTranslation": "ฉันขอใช้โทรศัพท์ของคุณได้ไหม?"
    },
    {
        "word": "photo",
        "partOfSpeech": "noun",
        "translation": "รูปถ่าย",
        "definition": "",
        "example": "Can I take a photo?",
        "exampleTranslation": "ฉันขอถ่ายรูปได้ไหม?"
    },
    {
        "word": "photocopy",
        "partOfSpeech": "noun",
        "translation": "สําเนาเอกสารจากเครื่องถ่ายสําเนา",
        "definition": "",
        "example": "Please make a photocopy of this page.",
        "exampleTranslation": "โปรดถ่ายสำเนาหน้านี้"
    },
    {
        "word": "photograph",
        "partOfSpeech": "noun",
        "translation": "ถ่ายภาพ",
        "definition": "",
        "example": "This is a photograph of my family.",
        "exampleTranslation": "นี่คือภาพถ่ายของครอบครัวฉัน"
    },
    {
        "word": "photographer",
        "partOfSpeech": "noun",
        "translation": "ช่างภาพ, ช่างถ่ายรูป",
        "definition": "",
        "example": "He is a professional photographer.",
        "exampleTranslation": "เขาเป็นช่างภาพมืออาชีพ"
    },
    {
        "word": "photography",
        "partOfSpeech": "noun",
        "translation": "การถ่ายภาพ",
        "definition": "",
        "example": "Photography is my hobby.",
        "exampleTranslation": "การถ่ายภาพคืองานอดิเรกของฉัน"
    },
    {
        "word": "phrase",
        "partOfSpeech": "noun",
        "translation": "วลี",
        "definition": "",
        "example": "That is a useful phrase.",
        "exampleTranslation": "นั่นเป็นวลีที่มีประโยชน์"
    },
    {
        "word": "physical",
        "partOfSpeech": "adjective",
        "translation": "กายภาพ",
        "definition": "",
        "example": "Physical exercise is good for you.",
        "exampleTranslation": "การออกกำลังกายทางกายภาพดีต่อคุณ"
    },
    {
        "word": "physics",
        "partOfSpeech": "noun",
        "translation": "ฟิสิกส์",
        "definition": "",
        "example": "Physics is a difficult subject.",
        "exampleTranslation": "ฟิสิกส์เป็นวิชาที่ยาก"
    },
    {
        "word": "piano",
        "partOfSpeech": "noun",
        "translation": "เปียโน",
        "definition": "",
        "example": "She plays the piano beautifully.",
        "exampleTranslation": "เธอเล่นเปียโนได้อย่างไพเราะ"
    },
    {
        "word": "pick",
        "partOfSpeech": "noun",
        "translation": "พลั่ว เครื่องแคะ",
        "definition": "",
        "example": "Pick a card, any card.",
        "exampleTranslation": "เลือกไพ่มาหนึ่งใบ ไพ่อะไรก็ได้"
    },
    {
        "word": "picture",
        "partOfSpeech": "noun",
        "translation": "รูปภาพ",
        "definition": "",
        "example": "Draw a picture of a house.",
        "exampleTranslation": "วาดรูปบ้าน"
    },
    {
        "word": "piece",
        "partOfSpeech": "noun",
        "translation": "ชิ้น",
        "definition": "",
        "example": "Would you like a piece of cake?",
        "exampleTranslation": "คุณต้องการเค้กสักชิ้นไหม?"
    },
    {
        "word": "pig",
        "partOfSpeech": "noun",
        "translation": "หมู",
        "definition": "",
        "example": "The pig is eating.",
        "exampleTranslation": "หมูกำลังกินอาหาร"
    },
    {
        "word": "pile",
        "partOfSpeech": "noun",
        "translation": "กอง",
        "definition": "",
        "example": "There is a pile of books on the desk.",
        "exampleTranslation": "มีกองหนังสืออยู่บนโต๊ะทำงาน"
    },
    {
        "word": "pill",
        "partOfSpeech": "noun",
        "translation": "เม็ด, เม็ดยา",
        "definition": "",
        "example": "Take one pill every morning.",
        "exampleTranslation": "กินยาวันละหนึ่งเม็ดทุกเช้า"
    },
    {
        "word": "pilot",
        "partOfSpeech": "noun",
        "translation": "นักบิน",
        "definition": "",
        "example": "The pilot is flying the plane.",
        "exampleTranslation": "นักบินกำลังขับเครื่องบิน"
    },
    {
        "word": "pin",
        "partOfSpeech": "noun",
        "translation": "หมุด",
        "definition": "",
        "example": "Use a pin to hold it together.",
        "exampleTranslation": "ใช้เข็มหมุดเพื่อยึดมันเข้าด้วยกัน"
    },
    {
        "word": "pink",
        "partOfSpeech": "noun",
        "translation": "สีชมพู",
        "definition": "",
        "example": "She is wearing a pink dress.",
        "exampleTranslation": "เธอสวมชุดสีชมพู"
    },
    {
        "word": "pint",
        "partOfSpeech": "noun",
        "translation": "1/8 ควอร์ต",
        "definition": "",
        "example": "Can I have a pint of beer?",
        "exampleTranslation": "ฉันขอเบียร์สักไพน์ได้ไหม?"
    },
    {
        "word": "pipe",
        "partOfSpeech": "noun",
        "translation": "ท่อ",
        "definition": "",
        "example": "The water pipe is leaking.",
        "exampleTranslation": "ท่อน้ำกำลังรั่ว"
    },
    {
        "word": "pitch",
        "partOfSpeech": "noun",
        "translation": "นํ้ามันดิบ ยางต้นไม้",
        "definition": "",
        "example": "The football pitch is wet.",
        "exampleTranslation": "สนามฟุตบอลเปียก"
    },
    {
        "word": "pity",
        "partOfSpeech": "noun",
        "translation": "สงสาร",
        "definition": "",
        "example": "It is a pity that you cannot come.",
        "exampleTranslation": "น่าเสียดายที่คุณมาไม่ได้"
    },
    {
        "word": "place",
        "partOfSpeech": "noun",
        "translation": "สถานที่",
        "definition": "",
        "example": "This is a nice place to live.",
        "exampleTranslation": "นี่คือสถานที่ที่ดีสำหรับการอยู่อาศัย"
    },
    {
        "word": "plain",
        "partOfSpeech": "noun",
        "translation": "จืด ธรรมดา",
        "definition": "",
        "example": "It was a plain white shirt.",
        "exampleTranslation": "มันเป็นเสื้อเชิ้ตสีขาวเรียบๆ"
    },
    {
        "word": "plan",
        "partOfSpeech": "noun",
        "translation": "แผนการ",
        "definition": "",
        "example": "Do you have a plan?",
        "exampleTranslation": "คุณมีแผนไหม?"
    },
    {
        "word": "plane",
        "partOfSpeech": "noun",
        "translation": "เครื่องบิน",
        "definition": "",
        "example": "We traveled by plane.",
        "exampleTranslation": "พวกเราเดินทางด้วยเครื่องบิน"
    },
    {
        "word": "planet",
        "partOfSpeech": "noun",
        "translation": "ดาวเคราะห์",
        "definition": "",
        "example": "Earth is a planet.",
        "exampleTranslation": "โลกเป็นดาวเคราะห์"
    },
    {
        "word": "planning",
        "partOfSpeech": "noun",
        "translation": "การวางแผน",
        "definition": "",
        "example": "We are planning a party.",
        "exampleTranslation": "พวกเรากำลังวางแผนจัดงานปาร์ตี้"
    },
    {
        "word": "plant",
        "partOfSpeech": "noun",
        "translation": "พืช",
        "definition": "",
        "example": "Water the plant every day.",
        "exampleTranslation": "รดน้ำต้นไม้ทุกวัน"
    },
    {
        "word": "plastic",
        "partOfSpeech": "noun",
        "translation": "พลาสติก",
        "definition": "",
        "example": "The bottle is made of plastic.",
        "exampleTranslation": "ขวดทำจากพลาสติก"
    },
    {
        "word": "plate",
        "partOfSpeech": "noun",
        "translation": "จาน แผ่นโลหะ",
        "definition": "",
        "example": "Please pass me a plate.",
        "exampleTranslation": "โปรดส่งจานให้ฉันหน่อย"
    },
    {
        "word": "platform",
        "partOfSpeech": "noun",
        "translation": "เวทีปราศรัย, แท่น",
        "definition": "",
        "example": "The train is at platform 4.",
        "exampleTranslation": "รถไฟอยู่ที่ชานชาลา 4"
    },
    {
        "word": "play",
        "partOfSpeech": "noun",
        "translation": "เล่น",
        "definition": "",
        "example": "The children love to play.",
        "exampleTranslation": "เด็กๆ ชอบเล่น"
    },
    {
        "word": "player",
        "partOfSpeech": "noun",
        "translation": "ผู้เล่น",
        "definition": "",
        "example": "He is a good football player.",
        "exampleTranslation": "เขาเป็นผู้เล่นฟุตบอลที่เก่ง"
    },
    {
        "word": "pleasant",
        "partOfSpeech": "noun",
        "translation": "น่ารื่นรมย์",
        "definition": "",
        "example": "We had a pleasant evening.",
        "exampleTranslation": "พวกเรามีช่วงเย็นที่น่ารื่นรมย์"
    },
    {
        "word": "please",
        "partOfSpeech": "noun",
        "translation": "ทําให้พอใจ, กรุณา",
        "definition": "",
        "example": "Please help me.",
        "exampleTranslation": "โปรดช่วยฉันด้วย"
    },
    {
        "word": "pleased",
        "partOfSpeech": "adjective",
        "translation": "ยินดี",
        "definition": "",
        "example": "I am pleased to meet you.",
        "exampleTranslation": "ฉันยินดีที่ได้รู้จักคุณ"
    },
    {
        "word": "pleasing",
        "partOfSpeech": "verb",
        "translation": "เป็นที่พอใจ เป็นที่ถูกใจ ซึ่งทําให้พอใจ",
        "definition": "",
        "example": "The result is very pleasing.",
        "exampleTranslation": "ผลลัพธ์เป็นที่น่าพึงพอใจมาก"
    },
    {
        "word": "pleasure",
        "partOfSpeech": "noun",
        "translation": "ความยินดี",
        "definition": "",
        "example": "It is a pleasure to work with you.",
        "exampleTranslation": "เป็นความยินดีอย่างยิ่งที่ได้ร่วมงานกับคุณ"
    },
    {
        "word": "plenty",
        "partOfSpeech": "noun",
        "translation": "มากมาย",
        "definition": "",
        "example": "We have plenty of time.",
        "exampleTranslation": "พวกเรามีเวลามากมาย"
    },
    {
        "word": "plot",
        "partOfSpeech": "noun",
        "translation": "ที่ดินแปลงเล็ก วางแผน อุบาย",
        "definition": "",
        "example": "The movie has an interesting plot.",
        "exampleTranslation": "ภาพยนตร์มีโครงเรื่องที่น่าสนใจ"
    },
    {
        "word": "plug",
        "partOfSpeech": "verb",
        "translation": "จุก, เครื่องอุด",
        "definition": "",
        "example": "Pull the plug out of the socket.",
        "exampleTranslation": "ดึงปลั๊กออกจากเต้ารับ"
    },
    {
        "word": "plus",
        "partOfSpeech": "noun",
        "translation": "เพิ่ม, เพิ่มเข้าไป",
        "definition": "",
        "example": "Two plus two is four.",
        "exampleTranslation": "สองบวกสองเป็นสี่"
    },
    {
        "word": "pocket",
        "partOfSpeech": "noun",
        "translation": "กระเป๋าเสื้อ",
        "definition": "",
        "example": "He put the money in his pocket.",
        "exampleTranslation": "เขาเก็บเงินไว้ในกระเป๋าเสื้อ"
    },
    {
        "word": "poem",
        "partOfSpeech": "noun",
        "translation": "บทร้อยกรอง",
        "definition": "",
        "example": "She wrote a beautiful poem.",
        "exampleTranslation": "เธอแต่งบทกวีที่สวยงาม"
    },
    {
        "word": "poetry",
        "partOfSpeech": "noun",
        "translation": "บทกวี",
        "definition": "",
        "example": "I enjoy reading poetry.",
        "exampleTranslation": "ฉันชอบอ่านบทกวี"
    },
    {
        "word": "point",
        "partOfSpeech": "noun",
        "translation": "จุด, ประเด็น",
        "definition": "",
        "example": "Point to the correct answer.",
        "exampleTranslation": "ชี้ไปที่คำตอบที่ถูกต้อง"
    },
    {
        "word": "pointed",
        "partOfSpeech": "verb",
        "translation": "แหลม",
        "definition": "",
        "example": "He pointed at the dog.",
        "exampleTranslation": "เขาชี้ไปที่สุนัข"
    },
    {
        "word": "poison",
        "partOfSpeech": "noun",
        "translation": "ยาพิษ",
        "definition": "",
        "example": "The snake poison is deadly.",
        "exampleTranslation": "พิษของงูมีอันตรายถึงชีวิต"
    },
    {
        "word": "poisonous",
        "partOfSpeech": "adjective",
        "translation": "เป็นพิษ",
        "definition": "",
        "example": "Some mushrooms are poisonous.",
        "exampleTranslation": "เห็ดบางชนิดมีพิษ"
    },
    {
        "word": "pole",
        "partOfSpeech": "noun",
        "translation": "เสา",
        "definition": "",
        "example": "A flag is flying on the pole.",
        "exampleTranslation": "มีธงโบกสะบัดอยู่บนเสา"
    },
    {
        "word": "police",
        "partOfSpeech": "noun",
        "translation": "ตํารวจ",
        "definition": "",
        "example": "Call the police!",
        "exampleTranslation": "เรียกตำรวจ!"
    },
    {
        "word": "policy",
        "partOfSpeech": "noun",
        "translation": "นโยบาย กรมธรรม์ประกันภัย",
        "definition": "",
        "example": "Honesty is the best policy.",
        "exampleTranslation": "ความซื่อสัตย์คือนโยบายที่ดีที่สุด"
    },
    {
        "word": "polish",
        "partOfSpeech": "adjective",
        "translation": "ขัดเงา",
        "definition": "",
        "example": "He will polish his shoes.",
        "exampleTranslation": "เขาจะขัดรองเท้าของเขา"
    },
    {
        "word": "polite",
        "partOfSpeech": "noun",
        "translation": "สุภาพ",
        "definition": "",
        "example": "He is a polite boy.",
        "exampleTranslation": "เขาเป็นเด็กผู้ชายที่สุภาพ"
    },
    {
        "word": "political",
        "partOfSpeech": "adjective",
        "translation": "ทางการเมือง",
        "definition": "",
        "example": "They discussed political issues.",
        "exampleTranslation": "พวกเขาพูดคุยถึงประเด็นทางการเมือง"
    },
    {
        "word": "politically",
        "partOfSpeech": "adverb",
        "translation": "เกี่ยวกับการเมืองการปกครอง",
        "definition": "",
        "example": "The decision was politically motivated.",
        "exampleTranslation": "การตัดสินใจนั้นมีแรงจูงใจทางการเมือง"
    },
    {
        "word": "politician",
        "partOfSpeech": "noun",
        "translation": "นักการเมือง",
        "definition": "",
        "example": "She wants to be a politician.",
        "exampleTranslation": "เธออยากเป็นนักการเมือง"
    },
    {
        "word": "politics",
        "partOfSpeech": "noun",
        "translation": "การเมือง",
        "definition": "",
        "example": "He is interested in politics.",
        "exampleTranslation": "เขาสนใจการเมือง"
    },
    {
        "word": "pollution",
        "partOfSpeech": "noun",
        "translation": "มลพิษ ของเสีย",
        "definition": "",
        "example": "Air pollution is a big problem.",
        "exampleTranslation": "มลพิษทางอากาศเป็นปัญหาใหญ่"
    },
    {
        "word": "pool",
        "partOfSpeech": "noun",
        "translation": "สระว่ายนํ้า",
        "definition": "",
        "example": "Let us swim in the pool.",
        "exampleTranslation": "ไปว่ายน้ำในสระกันเถอะ"
    },
    {
        "word": "poor",
        "partOfSpeech": "adjective",
        "translation": "ยากจน",
        "definition": "",
        "example": "They are a poor family.",
        "exampleTranslation": "พวกเขาเป็นครอบครัวที่ยากจน"
    },
    {
        "word": "pop",
        "partOfSpeech": "noun",
        "translation": "ที่เป็นที่นิยม . เสียงปะทุเบาๆ",
        "definition": "",
        "example": "I like listening to pop music.",
        "exampleTranslation": "ฉันชอบฟังเพลงป๊อป"
    },
    {
        "word": "popular",
        "partOfSpeech": "adjective",
        "translation": "เป็นที่นิยม",
        "definition": "",
        "example": "This game is very popular.",
        "exampleTranslation": "เกมนี้ได้รับความนิยมมาก"
    },
    {
        "word": "population",
        "partOfSpeech": "noun",
        "translation": "ประชากร",
        "definition": "",
        "example": "The city has a large population.",
        "exampleTranslation": "เมืองนี้มีประชากรจำนวนมาก"
    },
    {
        "word": "port",
        "partOfSpeech": "noun",
        "translation": "ท่าเรือ, เมืองท่า",
        "definition": "",
        "example": "The ship arrived at the port.",
        "exampleTranslation": "เรือมาถึงท่าเรือแล้ว"
    },
    {
        "word": "pose",
        "partOfSpeech": "noun",
        "translation": "วางท่า ตั้งคําถาม",
        "definition": "",
        "example": "The model struck a pose.",
        "exampleTranslation": "นางแบบโพสท่า"
    },
    {
        "word": "position",
        "partOfSpeech": "noun",
        "translation": "ตําแหน่ง",
        "definition": "",
        "example": "What is your position in the company?",
        "exampleTranslation": "ตำแหน่งของคุณในบริษัทคืออะไร?"
    },
    {
        "word": "positive",
        "partOfSpeech": "adjective",
        "translation": "ทางบวก",
        "definition": "",
        "example": "Try to have a positive attitude.",
        "exampleTranslation": "พยายามมีทัศนคติเชิงบวก"
    },
    {
        "word": "possess",
        "partOfSpeech": "noun",
        "translation": "ครอบครอง",
        "definition": "",
        "example": "He possesses great talent.",
        "exampleTranslation": "เขามีพรสวรรค์ที่ยอดเยี่ยม"
    },
    {
        "word": "possession",
        "partOfSpeech": "noun",
        "translation": "การครอบครอง",
        "definition": "",
        "example": "The ring is her most valuable possession.",
        "exampleTranslation": "แหวนเป็นทรัพย์สมบัติที่มีค่าที่สุดของเธอ"
    },
    {
        "word": "possibility",
        "partOfSpeech": "noun",
        "translation": "ความเป็นไปได้",
        "definition": "",
        "example": "There is a possibility of rain.",
        "exampleTranslation": "มีความเป็นไปได้ที่ฝนจะตก"
    },
    {
        "word": "possible",
        "partOfSpeech": "adjective",
        "translation": "เป็นไปได้",
        "definition": "",
        "example": "Is it possible to change the date?",
        "exampleTranslation": "เป็นไปได้ไหมที่จะเปลี่ยนวันที่?"
    },
    {
        "word": "possibly",
        "partOfSpeech": "adverb",
        "translation": "อาจจะ",
        "definition": "",
        "example": "I will possibly see you tomorrow.",
        "exampleTranslation": "ฉันอาจจะได้พบคุณพรุ่งนี้"
    },
    {
        "word": "post",
        "partOfSpeech": "noun",
        "translation": "ปิดประกาศ, เสา",
        "definition": "",
        "example": "I need to post this letter.",
        "exampleTranslation": "ฉันต้องส่งจดหมายฉบับนี้"
    },
    {
        "word": "post office",
        "partOfSpeech": "noun",
        "translation": "ที่ทําการไปรษณีย์",
        "definition": "",
        "example": "Where is the nearest post office?",
        "exampleTranslation": "ที่ทำการไปรษณีย์ที่ใกล้ที่สุดอยู่ที่ไหน?"
    },
    {
        "word": "pot",
        "partOfSpeech": "noun",
        "translation": "หม้อ",
        "definition": "",
        "example": "The soup is cooking in the pot.",
        "exampleTranslation": "ซุปกำลังปรุงอยู่ในหม้อ"
    },
    {
        "word": "potato",
        "partOfSpeech": "noun",
        "translation": "มันฝรั่ง",
        "definition": "",
        "example": "I baked a potato for dinner.",
        "exampleTranslation": "ฉันอบมันฝรั่งสำหรับอาหารเย็น"
    },
    {
        "word": "potential",
        "partOfSpeech": "noun",
        "translation": "เป็นไปได้, .",
        "definition": "",
        "example": "She has the potential to be a star.",
        "exampleTranslation": "เธอมีศักยภาพที่จะเป็นดาราได้"
    },
    {
        "word": "pound",
        "partOfSpeech": "noun",
        "translation": "ปอนด์ หน่วยเงินตราของอังกฤษ",
        "definition": "",
        "example": "This book costs ten pounds.",
        "exampleTranslation": "หนังสือเล่มนี้ราคาสิบปอนด์"
    },
    {
        "word": "pour",
        "partOfSpeech": "noun",
        "translation": "เท",
        "definition": "",
        "example": "Pour the water into the glass.",
        "exampleTranslation": "เทน้ำลงในแก้ว"
    },
    {
        "word": "powder",
        "partOfSpeech": "noun",
        "translation": "ผง",
        "definition": "",
        "example": "Add two spoons of washing powder.",
        "exampleTranslation": "ใส่ผงซักฟอกสองช้อน"
    },
    {
        "word": "power",
        "partOfSpeech": "noun",
        "translation": "กําลัง, แรง",
        "definition": "",
        "example": "The engine has a lot of power.",
        "exampleTranslation": "เครื่องยนต์มีกำลังมาก"
    },
    {
        "word": "powerful",
        "partOfSpeech": "adjective",
        "translation": "มีพลัง",
        "definition": "",
        "example": "He is a powerful leader.",
        "exampleTranslation": "เขาเป็นผู้นำที่ทรงอำนาจ"
    },
    {
        "word": "practical",
        "partOfSpeech": "adjective",
        "translation": "ที่ใช้ได้จริง ในทางปฏิบัติ",
        "definition": "",
        "example": "We need a practical solution.",
        "exampleTranslation": "พวกเราต้องการทางออกที่ใช้ได้จริง"
    },
    {
        "word": "practically",
        "partOfSpeech": "adverb",
        "translation": "ได้ผล อย่างทําได้ ในทางปฏิบัติ",
        "definition": "",
        "example": "The room was practically empty.",
        "exampleTranslation": "ห้องแทบจะว่างเปล่า"
    },
    {
        "word": "practice",
        "partOfSpeech": "noun",
        "translation": "ฝึกฝน",
        "definition": "",
        "example": "You need more practice.",
        "exampleTranslation": "คุณต้องการการฝึกฝนมากกว่านี้"
    },
    {
        "word": "practise",
        "partOfSpeech": "noun",
        "translation": "ฝึกซ้อม, ฝึกฝน",
        "definition": "",
        "example": "I practise playing the piano every day.",
        "exampleTranslation": "ฉันฝึกเล่นเปียโนทุกวัน"
    },
    {
        "word": "praise",
        "partOfSpeech": "noun",
        "translation": "สรรเสริญ",
        "definition": "",
        "example": "The teacher praised her work.",
        "exampleTranslation": "ครูชื่นชมผลงานของเธอ"
    },
    {
        "word": "pray",
        "partOfSpeech": "noun",
        "translation": "สวดมนต์ อธิษฐาน",
        "definition": "",
        "example": "They pray at the temple.",
        "exampleTranslation": "พวกเขาสวดมนต์ที่วัด"
    },
    {
        "word": "prayer",
        "partOfSpeech": "noun",
        "translation": "การสวดมนต์ การอธิษฐาน",
        "definition": "",
        "example": "He said a quick prayer.",
        "exampleTranslation": "เขากล่าวคำอธิษฐานสั้นๆ"
    },
    {
        "word": "precise",
        "partOfSpeech": "noun",
        "translation": "แม่นยํา แน่นอน เที่ยงตรง",
        "definition": "",
        "example": "Can you give me the precise details?",
        "exampleTranslation": "คุณช่วยบอกรายละเอียดที่ชัดเจนได้ไหม?"
    },
    {
        "word": "precisely",
        "partOfSpeech": "adverb",
        "translation": "อย่างเที่ยงตรง อย่างถูกต้อง อย่างแม่นยํา",
        "definition": "",
        "example": "Tell me precisely what happened.",
        "exampleTranslation": "บอกฉันมาให้ชัดเจนว่าเกิดอะไรขึ้น"
    },
    {
        "word": "predict",
        "partOfSpeech": "noun",
        "translation": "ทํานาย พยากรณ์",
        "definition": "",
        "example": "Can you predict the future?",
        "exampleTranslation": "คุณสามารถทำนายอนาคตได้ไหม?"
    },
    {
        "word": "prefer",
        "partOfSpeech": "noun",
        "translation": "ชอบมากกว่า โอนเอียงไป",
        "definition": "",
        "example": "I prefer tea to coffee.",
        "exampleTranslation": "ฉันชอบชามากกว่ากาแฟ"
    },
    {
        "word": "preference",
        "partOfSpeech": "noun",
        "translation": "การชอบมากกว่า สิทธิพิเศษ",
        "definition": "",
        "example": "What is your preference?",
        "exampleTranslation": "ความชอบของคุณคืออะไร?"
    },
    {
        "word": "pregnant",
        "partOfSpeech": "noun",
        "translation": "ตั้งครรภ์",
        "definition": "",
        "example": "She is six months pregnant.",
        "exampleTranslation": "เธอตั้งครรภ์ได้หกเดือนแล้ว"
    },
    {
        "word": "premises",
        "partOfSpeech": "noun",
        "translation": "ที่ดินและสิ่งปลูกสร้าง",
        "definition": "",
        "example": "You must leave the premises immediately.",
        "exampleTranslation": "คุณต้องออกจากสถานที่นี้ทันที"
    },
    {
        "word": "preparation",
        "partOfSpeech": "noun",
        "translation": "การจัดเตรียม",
        "definition": "",
        "example": "The party needs a lot of preparation.",
        "exampleTranslation": "งานปาร์ตี้ต้องการการเตรียมตัวอย่างมาก"
    },
    {
        "word": "prepare",
        "partOfSpeech": "noun",
        "translation": "เตรียม",
        "definition": "",
        "example": "We must prepare for the exam.",
        "exampleTranslation": "พวกเราต้องเตรียมตัวสำหรับการสอบ"
    },
    {
        "word": "prepared",
        "partOfSpeech": "adjective",
        "translation": "เตรียมพร้อม เตรียม",
        "definition": "",
        "example": "I am prepared for anything.",
        "exampleTranslation": "ฉันเตรียมพร้อมสำหรับทุกสิ่ง"
    },
    {
        "word": "presence",
        "partOfSpeech": "noun",
        "translation": "การมีอยู่ การเข้าร่วม",
        "definition": "",
        "example": "Your presence is requested.",
        "exampleTranslation": "ขอเชิญคุณมาร่วมงานด้วย"
    },
    {
        "word": "present",
        "partOfSpeech": "noun",
        "translation": "ปัจจุบัน, เสนอ",
        "definition": "",
        "example": "I gave him a birthday present.",
        "exampleTranslation": "ฉันให้ของขวัญวันเกิดเขา"
    },
    {
        "word": "presentation",
        "partOfSpeech": "noun",
        "translation": "การนําเสนอ",
        "definition": "",
        "example": "She gave a good presentation.",
        "exampleTranslation": "เธอทำการนำเสนอได้ดี"
    },
    {
        "word": "preserve",
        "partOfSpeech": "noun",
        "translation": "เก็บรักษา",
        "definition": "",
        "example": "We must preserve our traditions.",
        "exampleTranslation": "พวกเราต้องอนุรักษ์ประเพณีของเราไว้"
    },
    {
        "word": "president",
        "partOfSpeech": "noun",
        "translation": "ประธาน",
        "definition": "",
        "example": "The president gave a speech.",
        "exampleTranslation": "ประธานาธิบดีกล่าวสุนทรพจน์"
    },
    {
        "word": "press",
        "partOfSpeech": "noun",
        "translation": "กด, อัด",
        "definition": "",
        "example": "Press the button to start.",
        "exampleTranslation": "กดปุ่มเพื่อเริ่มต้น"
    },
    {
        "word": "pressure",
        "partOfSpeech": "noun",
        "translation": "ความดัน",
        "definition": "",
        "example": "The water pressure is low.",
        "exampleTranslation": "แรงดันน้ำต่ำ"
    },
    {
        "word": "presumably",
        "partOfSpeech": "adverb",
        "translation": "น่าจะเป็นไปได้",
        "definition": "",
        "example": "Presumably, he will arrive soon.",
        "exampleTranslation": "สันนิษฐานว่าเขาจะมาถึงในไม่ช้า"
    },
    {
        "word": "pretend",
        "partOfSpeech": "noun",
        "translation": "แสร้งทํา เสแสร้ง",
        "definition": "",
        "example": "Do not pretend to be asleep.",
        "exampleTranslation": "อย่าแกล้งทำเป็นหลับ"
    },
    {
        "word": "pretty",
        "partOfSpeech": "adverb",
        "translation": "สวย น่ารัก",
        "definition": "",
        "example": "She is a pretty girl.",
        "exampleTranslation": "เธอเป็นเด็กผู้หญิงที่น่ารัก"
    },
    {
        "word": "prevent",
        "partOfSpeech": "noun",
        "translation": "ขัดขวาง เป็นอุปสรรค",
        "definition": "",
        "example": "This vaccine will prevent the disease.",
        "exampleTranslation": "วัคซีนนี้จะป้องกันโรค"
    },
    {
        "word": "previous",
        "partOfSpeech": "adjective",
        "translation": "ก่อนหน้านี้ แต่ก่อน",
        "definition": "",
        "example": "Do you have any previous experience?",
        "exampleTranslation": "คุณมีประสบการณ์ก่อนหน้านี้ไหม?"
    },
    {
        "word": "price",
        "partOfSpeech": "noun",
        "translation": "ราคา",
        "definition": "",
        "example": "What is the price of this car?",
        "exampleTranslation": "รถคันนี้ราคาเท่าไหร่?"
    },
    {
        "word": "pride",
        "partOfSpeech": "noun",
        "translation": "ความภาคภูมิใจ",
        "definition": "",
        "example": "He looked at his son with pride.",
        "exampleTranslation": "เขามองลูกชายของเขาด้วยความภาคภูมิใจ"
    },
    {
        "word": "priest",
        "partOfSpeech": "noun",
        "translation": "พระสงฆ์",
        "definition": "",
        "example": "The priest led the prayer.",
        "exampleTranslation": "นักบวชเป็นผู้นำการสวดมนต์"
    },
    {
        "word": "primarily",
        "partOfSpeech": "adverb",
        "translation": "อย่างที่เป็นพื้นฐาน แรกเริ่ม",
        "definition": "",
        "example": "The book is primarily about history.",
        "exampleTranslation": "หนังสือเล่มนี้มีเนื้อหาหลักเกี่ยวกับประวัติศาสตร์"
    },
    {
        "word": "primary",
        "partOfSpeech": "noun",
        "translation": "ชั้นประถม ในขั้นแรก ที่สําคัญที่สุด",
        "definition": "",
        "example": "My primary goal is to learn English.",
        "exampleTranslation": "เป้าหมายหลักของฉันคือการเรียนภาษาอังกฤษ"
    },
    {
        "word": "prime minister",
        "partOfSpeech": "noun",
        "translation": "นายกรัฐมนตรี",
        "definition": "",
        "example": "The prime minister spoke to the press.",
        "exampleTranslation": "นายกรัฐมนตรีพูดคุยกับสื่อมวลชน"
    },
    {
        "word": "prince",
        "partOfSpeech": "noun",
        "translation": "เจ้าชาย",
        "definition": "",
        "example": "The prince lived in a castle.",
        "exampleTranslation": "เจ้าชายอาศัยอยู่ในปราสาท"
    },
    {
        "word": "princess",
        "partOfSpeech": "noun",
        "translation": "เจ้าหญิง",
        "definition": "",
        "example": "She looks like a beautiful princess.",
        "exampleTranslation": "เธอดูเหมือนเจ้าหญิงที่สวยงาม"
    },
    {
        "word": "principle",
        "partOfSpeech": "noun",
        "translation": "หลักการ",
        "definition": "",
        "example": "He is a man of high moral principles.",
        "exampleTranslation": "เขาเป็นคนที่มีหลักการทางศีลธรรมสูง"
    },
    {
        "word": "print",
        "partOfSpeech": "noun",
        "translation": "พิมพ์",
        "definition": "",
        "example": "Can you print this document for me?",
        "exampleTranslation": "คุณช่วยพิมพ์เอกสารนี้ให้ฉันได้ไหม?"
    },
    {
        "word": "printer",
        "partOfSpeech": "noun",
        "translation": "เครื่องพิมพ์",
        "definition": "",
        "example": "The printer is out of paper.",
        "exampleTranslation": "เครื่องพิมพ์กระดาษหมด"
    },
    {
        "word": "printing",
        "partOfSpeech": "noun",
        "translation": "การพิมพ์",
        "definition": "",
        "example": "The book is currently in printing.",
        "exampleTranslation": "หนังสือเล่มนี้กำลังอยู่ในระหว่างการพิมพ์"
    },
    {
        "word": "prior",
        "partOfSpeech": "adverb",
        "translation": "ก่อน อันก่อน",
        "definition": "",
        "example": "I have no prior knowledge of this.",
        "exampleTranslation": "ฉันไม่มีความรู้เกี่ยวกับเรื่องนี้มาก่อน"
    },
    {
        "word": "priority",
        "partOfSpeech": "noun",
        "translation": "การมีสิทธิก่อน ได้สิทธิก่อน",
        "definition": "",
        "example": "My family is my top priority.",
        "exampleTranslation": "ครอบครัวคือความสำคัญอันดับแรกของฉัน"
    },
    {
        "word": "prison",
        "partOfSpeech": "noun",
        "translation": "คุก",
        "definition": "",
        "example": "He was sent to prison for stealing.",
        "exampleTranslation": "เขาถูกส่งเข้าคุกข้อหาขโมยของ"
    },
    {
        "word": "prisoner",
        "partOfSpeech": "noun",
        "translation": "นักโทษ",
        "definition": "",
        "example": "The prisoner escaped.",
        "exampleTranslation": "นักโทษหลบหนีไปได้"
    },
    {
        "word": "private",
        "partOfSpeech": "adjective",
        "translation": "ส่วนตัว",
        "definition": "",
        "example": "This is private property.",
        "exampleTranslation": "นี่คือพื้นที่ส่วนบุคคล"
    },
    {
        "word": "prize",
        "partOfSpeech": "noun",
        "translation": "รางวัล",
        "definition": "",
        "example": "She won first prize in the competition.",
        "exampleTranslation": "เธอได้รับรางวัลที่หนึ่งในการแข่งขัน"
    },
    {
        "word": "probable",
        "partOfSpeech": "adjective",
        "translation": "เป็นไปได้",
        "definition": "",
        "example": "It is probable that it will rain.",
        "exampleTranslation": "มีความเป็นไปได้สูงที่ฝนจะตก"
    },
    {
        "word": "probably",
        "partOfSpeech": "adverb",
        "translation": "ซึ่งเป็นไปได้มาก",
        "definition": "",
        "example": "I will probably stay at home.",
        "exampleTranslation": "ฉันน่าจะอยู่บ้าน"
    },
    {
        "word": "problem",
        "partOfSpeech": "noun",
        "translation": "ปัญหา",
        "definition": "",
        "example": "Can you help me solve this problem?",
        "exampleTranslation": "คุณช่วยฉันแก้ปัญหานี้ได้ไหม?"
    },
    {
        "word": "procedure",
        "partOfSpeech": "noun",
        "translation": "ขั้นตอน",
        "definition": "",
        "example": "Follow the safety procedure.",
        "exampleTranslation": "ปฏิบัติตามขั้นตอนความปลอดภัย"
    },
    {
        "word": "proceed",
        "partOfSpeech": "noun",
        "translation": "ดําเนินการ กระทําต่อไป",
        "definition": "",
        "example": "Please proceed to the next gate.",
        "exampleTranslation": "โปรดดำเนินการไปยังประตูถัดไป"
    },
    {
        "word": "process",
        "partOfSpeech": "noun",
        "translation": "กระบวนการ",
        "definition": "",
        "example": "The process takes three days.",
        "exampleTranslation": "กระบวนการนี้ใช้เวลาสามวัน"
    },
    {
        "word": "produce",
        "partOfSpeech": "noun",
        "translation": "ผลิต ก่อให้เกิด",
        "definition": "",
        "example": "The factory produces cars.",
        "exampleTranslation": "โรงงานแห่งนี้ผลิตรถยนต์"
    },
    {
        "word": "producer",
        "partOfSpeech": "noun",
        "translation": "ผู้ผลิต ผู้อํานวยการสร้างภาพยนตร์",
        "definition": "",
        "example": "He is a movie producer.",
        "exampleTranslation": "เขาเป็นผู้สร้างภาพยนตร์"
    },
    {
        "word": "product",
        "partOfSpeech": "noun",
        "translation": "ผลิตภัณฑ์",
        "definition": "",
        "example": "This is our new product.",
        "exampleTranslation": "นี่คือผลิตภัณฑ์ใหม่ของเรา"
    },
    {
        "word": "production",
        "partOfSpeech": "noun",
        "translation": "การผลิต",
        "definition": "",
        "example": "The production of the new car will start soon.",
        "exampleTranslation": "การผลิตรถยนต์รุ่นใหม่จะเริ่มในไม่ช้า"
    },
    {
        "word": "profession",
        "partOfSpeech": "noun",
        "translation": "อาชีพ วิชาชีพ",
        "definition": "",
        "example": "Teaching is a noble profession.",
        "exampleTranslation": "การสอนเป็นอาชีพที่มีเกียรติ"
    },
    {
        "word": "professional",
        "partOfSpeech": "adjective",
        "translation": "ผู้เชี่ยวชาญในวิชาชีพ อย่างมืออาชีพ",
        "definition": "",
        "example": "You should seek professional advice.",
        "exampleTranslation": "คุณควรขอคำแนะนำจากผู้เชี่ยวชาญ"
    },
    {
        "word": "professor",
        "partOfSpeech": "noun",
        "translation": "ศาสตราจารย์",
        "definition": "",
        "example": "He is a history professor at the university.",
        "exampleTranslation": "เขาเป็นศาสตราจารย์ด้านประวัติศาสตร์ที่มหาวิทยาลัย"
    },
    {
        "word": "profit",
        "partOfSpeech": "noun",
        "translation": "กําไร",
        "definition": "",
        "example": "The company made a large profit.",
        "exampleTranslation": "บริษัททำกำไรได้มาก"
    },
    {
        "word": "program",
        "partOfSpeech": "noun",
        "translation": "รายการ กําหนดการ ชุดคําสั่งคอมพิวเตอร์",
        "definition": "",
        "example": "I watched a TV program about animals.",
        "exampleTranslation": "ฉันดูรายการทีวีเกี่ยวกับสัตว์"
    },
    {
        "word": "programme",
        "partOfSpeech": "noun",
        "translation": "รายการ",
        "definition": "",
        "example": "What is the next programme?",
        "exampleTranslation": "รายการต่อไปคืออะไร?"
    },
    {
        "word": "progress",
        "partOfSpeech": "noun",
        "translation": "ความก้าวหน้า",
        "definition": "",
        "example": "We are making good progress.",
        "exampleTranslation": "พวกเรากำลังมีความคืบหน้าไปด้วยดี"
    },
    {
        "word": "project",
        "partOfSpeech": "noun",
        "translation": "โครงการ",
        "definition": "",
        "example": "This is a science project.",
        "exampleTranslation": "นี่คือโครงงานวิทยาศาสตร์"
    },
    {
        "word": "promise",
        "partOfSpeech": "noun",
        "translation": "คํามั่นสัญญา",
        "definition": "",
        "example": "I promise I will not tell anyone.",
        "exampleTranslation": "ฉันสัญญาว่าจะไม่บอกใคร"
    },
    {
        "word": "promote",
        "partOfSpeech": "noun",
        "translation": "สนับสนุน ส่งเสริม",
        "definition": "",
        "example": "They will promote the new product.",
        "exampleTranslation": "พวกเขาจะโปรโมตผลิตภัณฑ์ใหม่"
    },
    {
        "word": "promotion",
        "partOfSpeech": "noun",
        "translation": "การสนับสนุน การส่งเสริม การเลื่อนตําแหน่ง",
        "definition": "",
        "example": "She got a promotion at work.",
        "exampleTranslation": "เธอได้เลื่อนตำแหน่งในการทำงาน"
    },
    {
        "word": "prompt",
        "partOfSpeech": "noun",
        "translation": "รวดเร็ว, ฉับพลัน",
        "definition": "",
        "example": "His prompt action saved the day.",
        "exampleTranslation": "การกระทำที่รวดเร็วของเขาช่วยแก้ไขสถานการณ์ได้"
    },
    {
        "word": "promptly",
        "partOfSpeech": "adverb",
        "translation": "อย่างทันท่วงที อย่างทันการ",
        "definition": "",
        "example": "He arrived promptly at 9 AM.",
        "exampleTranslation": "เขามาถึงตรงเวลาตอน 9 โมงเช้า"
    },
    {
        "word": "pronounce",
        "partOfSpeech": "noun",
        "translation": "ออกเสียง",
        "definition": "",
        "example": "How do you pronounce this word?",
        "exampleTranslation": "คำนี้ออกเสียงอย่างไร?"
    },
    {
        "word": "pronunciation",
        "partOfSpeech": "noun",
        "translation": "การออกเสียง",
        "definition": "",
        "example": "His English pronunciation is very good.",
        "exampleTranslation": "การออกเสียงภาษาอังกฤษของเขาดีมาก"
    },
    {
        "word": "proof",
        "partOfSpeech": "noun",
        "translation": "พิสูจน์",
        "definition": "",
        "example": "Do you have any proof?",
        "exampleTranslation": "คุณมีหลักฐานไหม?"
    },
    {
        "word": "proper",
        "partOfSpeech": "noun",
        "translation": "เหมาะสม, สมควร",
        "definition": "",
        "example": "This is the proper way to do it.",
        "exampleTranslation": "นี่คือวิธีที่ถูกต้องในการทำสิ่งนี้"
    },
    {
        "word": "properly",
        "partOfSpeech": "adverb",
        "translation": "อย่างเหมาะสม",
        "definition": "",
        "example": "Make sure you do it properly.",
        "exampleTranslation": "ตรวจสอบให้แน่ใจว่าคุณทำอย่างถูกต้อง"
    },
    {
        "word": "property",
        "partOfSpeech": "noun",
        "translation": "ทรัพย์สิน, สมบัติ",
        "definition": "",
        "example": "This building is private property.",
        "exampleTranslation": "อาคารนี้เป็นทรัพย์สินส่วนบุคคล"
    },
    {
        "word": "proportion",
        "partOfSpeech": "noun",
        "translation": "สัดส่วน อัตราส่วน",
        "definition": "",
        "example": "A large proportion of the students passed.",
        "exampleTranslation": "นักเรียนส่วนใหญ่สอบผ่าน"
    },
    {
        "word": "proposal",
        "partOfSpeech": "noun",
        "translation": "การเสนอ ข้อเสนอ การขอแต่งงาน",
        "definition": "",
        "example": "They rejected his proposal.",
        "exampleTranslation": "พวกเขาปฏิเสธข้อเสนอของเขา"
    },
    {
        "word": "propose",
        "partOfSpeech": "noun",
        "translation": "เสนอ",
        "definition": "",
        "example": "He proposed a new plan.",
        "exampleTranslation": "เขาเสนอแผนการใหม่"
    },
    {
        "word": "prospect",
        "partOfSpeech": "noun",
        "translation": "การคาดการณ์ โอกาส ภาพที่มองเห็น",
        "definition": "",
        "example": "The prospect of finding a job is good.",
        "exampleTranslation": "โอกาสในการหางานทำมีสูง"
    },
    {
        "word": "protect",
        "partOfSpeech": "noun",
        "translation": "ป้องกัน, พิทักษ์",
        "definition": "",
        "example": "Wear a hat to protect your face from the sun.",
        "exampleTranslation": "สวมหมวกเพื่อปกป้องใบหน้าจากแสงแดด"
    },
    {
        "word": "protection",
        "partOfSpeech": "noun",
        "translation": "การป้องกัน",
        "definition": "",
        "example": "The forest is under protection.",
        "exampleTranslation": "ป่านี้อยู่ภายใต้การคุ้มครอง"
    },
    {
        "word": "protest",
        "partOfSpeech": "noun",
        "translation": "คัดค้าน ประท้วง",
        "definition": "",
        "example": "They held a protest against the new law.",
        "exampleTranslation": "พวกเขาจัดการประท้วงต่อต้านกฎหมายใหม่"
    },
    {
        "word": "proud",
        "partOfSpeech": "noun",
        "translation": "ภูมิใจ",
        "definition": "",
        "example": "I am proud of you.",
        "exampleTranslation": "ฉันภูมิใจในตัวคุณ"
    },
    {
        "word": "proudly",
        "partOfSpeech": "adverb",
        "translation": "อย่างหยิ่งทะนง",
        "definition": "",
        "example": "She proudly showed her painting.",
        "exampleTranslation": "เธอโชว์ภาพวาดของเธออย่างภาคภูมิใจ"
    },
    {
        "word": "prove",
        "partOfSpeech": "noun",
        "translation": "พิสูจน์",
        "definition": "",
        "example": "Can you prove that you are right?",
        "exampleTranslation": "คุณพิสูจน์ได้ไหมว่าคุณถูก?"
    },
    {
        "word": "provide",
        "partOfSpeech": "noun",
        "translation": "จัดเตรียม จัดหา",
        "definition": "",
        "example": "The hotel provides free Wi-Fi.",
        "exampleTranslation": "โรงแรมมีบริการ Wi-Fi ฟรี"
    },
    {
        "word": "provided",
        "partOfSpeech": "verb",
        "translation": "ถ้า โดยมีข้อแม้ว่า",
        "definition": "",
        "example": "I will go, provided that you come too.",
        "exampleTranslation": "ฉันจะไป โดยมีเงื่อนไขว่าคุณต้องมาด้วย"
    },
    {
        "word": "pub",
        "partOfSpeech": "noun",
        "translation": "ร้านเหล้า",
        "definition": "",
        "example": "We went to the pub for a drink.",
        "exampleTranslation": "พวกเราไปที่ผับเพื่อดื่มเครื่องดื่ม"
    },
    {
        "word": "public",
        "partOfSpeech": "noun",
        "translation": "สาธารณะ",
        "definition": "",
        "example": "The park is open to the public.",
        "exampleTranslation": "สวนสาธารณะเปิดให้ประชาชนทั่วไปเข้าชม"
    },
    {
        "word": "publication",
        "partOfSpeech": "noun",
        "translation": "การโฆษณา การเผยแพร่",
        "definition": "",
        "example": "The publication of the book was a success.",
        "exampleTranslation": "การตีพิมพ์หนังสือประสบความสำเร็จ"
    },
    {
        "word": "publicity",
        "partOfSpeech": "noun",
        "translation": "การโฆษณา การเผยแพร่",
        "definition": "",
        "example": "The event got a lot of publicity.",
        "exampleTranslation": "งานนี้ได้รับการโปรโมทอย่างมาก"
    },
    {
        "word": "publish",
        "partOfSpeech": "noun",
        "translation": "จัดพิมพ์",
        "definition": "",
        "example": "The book was published last year.",
        "exampleTranslation": "หนังสือเล่มนี้ตีพิมพ์เมื่อปีที่แล้ว"
    },
    {
        "word": "publishing",
        "partOfSpeech": "noun",
        "translation": "กิจการพิมพ์",
        "definition": "",
        "example": "She works in the publishing industry.",
        "exampleTranslation": "เธอทำงานในอุตสาหกรรมการพิมพ์"
    },
    {
        "word": "pull",
        "partOfSpeech": "noun",
        "translation": "ลาก ดึง",
        "definition": "",
        "example": "Pull the door to open it.",
        "exampleTranslation": "ดึงประตูเพื่อเปิด"
    },
    {
        "word": "punch",
        "partOfSpeech": "noun",
        "translation": "ชก เจาะรู",
        "definition": "",
        "example": "He gave him a punch in the face.",
        "exampleTranslation": "เขาชกเข้าที่หน้าของเขา"
    },
    {
        "word": "punish",
        "partOfSpeech": "noun",
        "translation": "ลงโทษ",
        "definition": "",
        "example": "The teacher will punish the naughty student.",
        "exampleTranslation": "ครูจะลงโทษนักเรียนที่ดื้อรั้น"
    },
    {
        "word": "punishment",
        "partOfSpeech": "noun",
        "translation": "การลงโทษ",
        "definition": "",
        "example": "The punishment for stealing is jail.",
        "exampleTranslation": "บทลงโทษสำหรับการขโมยคือการจำคุก"
    },
    {
        "word": "pupil",
        "partOfSpeech": "noun",
        "translation": "นักเรียน",
        "definition": "",
        "example": "The school has 500 pupils.",
        "exampleTranslation": "โรงเรียนมีนักเรียน 500 คน"
    },
    {
        "word": "purchase",
        "partOfSpeech": "noun",
        "translation": "ซื้อ",
        "definition": "",
        "example": "I need to purchase some supplies.",
        "exampleTranslation": "ฉันต้องซื้อของใช้บางอย่าง"
    },
    {
        "word": "pure",
        "partOfSpeech": "noun",
        "translation": "บริสุทธิѻ",
        "definition": "",
        "example": "This ring is made of pure gold.",
        "exampleTranslation": "แหวนวงนี้ทำจากทองคำบริสุทธิ์"
    },
    {
        "word": "purely",
        "partOfSpeech": "adverb",
        "translation": "อย่างบริสุทธิѻ",
        "definition": "",
        "example": "It was purely an accident.",
        "exampleTranslation": "มันเป็นแค่อุบัติเหตุจริงๆ"
    },
    {
        "word": "purple",
        "partOfSpeech": "noun",
        "translation": "สีม่วง",
        "definition": "",
        "example": "She likes purple flowers.",
        "exampleTranslation": "เธอชอบดอกไม้สีม่วง"
    },
    {
        "word": "purpose",
        "partOfSpeech": "noun",
        "translation": "วัตถุประสงค์",
        "definition": "",
        "example": "What is the purpose of this meeting?",
        "exampleTranslation": "วัตถุประสงค์ของการประชุมนี้คืออะไร?"
    },
    {
        "word": "pursue",
        "partOfSpeech": "noun",
        "translation": "ไล่ตาม ติดตาม",
        "definition": "",
        "example": "He decided to pursue a career in medicine.",
        "exampleTranslation": "เขาตัดสินใจที่จะทำตามอาชีพทางการแพทย์"
    },
    {
        "word": "push",
        "partOfSpeech": "noun",
        "translation": "ผลัก ดัน",
        "definition": "",
        "example": "Push the button to call the elevator.",
        "exampleTranslation": "กดปุ่มเพื่อเรียกลิฟต์"
    },
    {
        "word": "put",
        "partOfSpeech": "noun",
        "translation": "วาง, ใส่",
        "definition": "",
        "example": "Put the book on the table.",
        "exampleTranslation": "วางหนังสือบนโต๊ะ"
    },
    {
        "word": "qualification",
        "partOfSpeech": "noun",
        "translation": "คุณสมบัติ",
        "definition": "",
        "example": "What are your qualifications for this job?",
        "exampleTranslation": "คุณสมบัติของคุณสำหรับงานนี้คืออะไร?"
    },
    {
        "word": "qualified",
        "partOfSpeech": "verb",
        "translation": "มีคุณสมบัติ",
        "definition": "",
        "example": "She is a qualified doctor.",
        "exampleTranslation": "เธอเป็นหมอที่มีใบรับรอง"
    },
    {
        "word": "qualify",
        "partOfSpeech": "verb",
        "translation": "ทําให้มีคุณสมบัติ",
        "definition": "",
        "example": "He did not qualify for the finals.",
        "exampleTranslation": "เขาไม่ผ่านเข้ารอบชิงชนะเลิศ"
    },
    {
        "word": "quality",
        "partOfSpeech": "noun",
        "translation": "คุณภาพ",
        "definition": "",
        "example": "This shirt is of good quality.",
        "exampleTranslation": "เสื้อเชิ้ตตัวนี้มีคุณภาพดี"
    },
    {
        "word": "quantity",
        "partOfSpeech": "noun",
        "translation": "ปริมาณ",
        "definition": "",
        "example": "We need a large quantity of food.",
        "exampleTranslation": "พวกเราต้องการอาหารจำนวนมาก"
    },
    {
        "word": "quarter",
        "partOfSpeech": "noun",
        "translation": "ไตรมาส",
        "definition": "",
        "example": "Cut the apple into four quarters.",
        "exampleTranslation": "ผ่าแอปเปิลออกเป็นสี่ส่วน"
    },
    {
        "word": "queen",
        "partOfSpeech": "noun",
        "translation": "พระราชินี",
        "definition": "",
        "example": "The queen wore a beautiful crown.",
        "exampleTranslation": "ราชินีสวมมงกุฎที่สวยงาม"
    },
    {
        "word": "question",
        "partOfSpeech": "noun",
        "translation": "คําถาม",
        "definition": "",
        "example": "I have a question for you.",
        "exampleTranslation": "ฉันมีคำถามสำหรับคุณ"
    },
    {
        "word": "quick",
        "partOfSpeech": "noun",
        "translation": "เร็ว",
        "definition": "",
        "example": "He is a quick learner.",
        "exampleTranslation": "เขาเป็นคนเรียนรู้เร็ว"
    },
    {
        "word": "quickly",
        "partOfSpeech": "adverb",
        "translation": "อย่างรวดเร็ว",
        "definition": "",
        "example": "We must act quickly.",
        "exampleTranslation": "พวกเราต้องลงมืออย่างรวดเร็ว"
    },
    {
        "word": "quiet",
        "partOfSpeech": "adjective",
        "translation": "เงียบ",
        "definition": "",
        "example": "Please be quiet.",
        "exampleTranslation": "โปรดเงียบหน่อย"
    },
    {
        "word": "quit",
        "partOfSpeech": "noun",
        "translation": "เลิก ลาออก",
        "definition": "",
        "example": "He quit his job yesterday.",
        "exampleTranslation": "เขาลาออกจากงานเมื่อวานนี้"
    },
    {
        "word": "quite",
        "partOfSpeech": "adverb",
        "translation": "ค่อนข้าง",
        "definition": "",
        "example": "It is quite cold today.",
        "exampleTranslation": "วันนี้อากาศค่อนข้างหนาว"
    },
    {
        "word": "quote",
        "partOfSpeech": "noun",
        "translation": "อ้างคําพูด",
        "definition": "",
        "example": "He quoted a famous poem.",
        "exampleTranslation": "เขายกคำคมจากบทกวีที่มีชื่อเสียง"
    },
    {
        "word": "race",
        "partOfSpeech": "noun",
        "translation": "แข่งขันความเร็ว . เชื้อชาติ",
        "definition": "",
        "example": "Who won the race?",
        "exampleTranslation": "ใครชนะการแข่งขัน?"
    },
    {
        "word": "racing",
        "partOfSpeech": "verb",
        "translation": "การแข่งขันความเร็ว",
        "definition": "",
        "example": "He loves horse racing.",
        "exampleTranslation": "เขาชอบการแข่งม้า"
    },
    {
        "word": "radio",
        "partOfSpeech": "noun",
        "translation": "วิทยุ",
        "definition": "",
        "example": "I listen to the radio every morning.",
        "exampleTranslation": "ฉันฟังวิทยุทุกเช้า"
    },
    {
        "word": "rail",
        "partOfSpeech": "noun",
        "translation": "รางรถไฟ",
        "definition": "",
        "example": "The train travels on a rail.",
        "exampleTranslation": "รถไฟวิ่งบนราง"
    },
    {
        "word": "railroad",
        "partOfSpeech": "noun",
        "translation": "ทางรถไฟ",
        "definition": "",
        "example": "He works on the railroad.",
        "exampleTranslation": "เขาทำงานที่ทางรถไฟ"
    },
    {
        "word": "railway",
        "partOfSpeech": "noun",
        "translation": "รางรถไฟ ทางรถไฟ",
        "definition": "",
        "example": "The railway station is nearby.",
        "exampleTranslation": "สถานีรถไฟอยู่ใกล้ๆ"
    },
    {
        "word": "rain",
        "partOfSpeech": "noun",
        "translation": "ฝน",
        "definition": "",
        "example": "It is starting to rain.",
        "exampleTranslation": "ฝนเริ่มตกแล้ว"
    },
    {
        "word": "raise",
        "partOfSpeech": "noun",
        "translation": "ยกขึ้น เลี้ยงดู",
        "definition": "",
        "example": "Please raise your hand if you know the answer.",
        "exampleTranslation": "โปรดยกมือขึ้นหากคุณรู้คำตอบ"
    },
    {
        "word": "range",
        "partOfSpeech": "noun",
        "translation": "ช่วง ขอบเขต",
        "definition": "",
        "example": "The store sells a wide range of products.",
        "exampleTranslation": "ร้านขายผลิตภัณฑ์ที่หลากหลาย"
    },
    {
        "word": "rank",
        "partOfSpeech": "noun",
        "translation": "ยศ ตําแหน่ง",
        "definition": "",
        "example": "He holds the rank of captain.",
        "exampleTranslation": "เขามียศเป็นกัปตัน"
    },
    {
        "word": "rapid",
        "partOfSpeech": "adjective",
        "translation": "รวดเร็ว",
        "definition": "",
        "example": "There was a rapid change in the weather.",
        "exampleTranslation": "มีการเปลี่ยนแปลงของสภาพอากาศอย่างรวดเร็ว"
    },
    {
        "word": "rare",
        "partOfSpeech": "noun",
        "translation": "หายาก",
        "definition": "",
        "example": "This is a rare bird.",
        "exampleTranslation": "นี่คือนกหายาก"
    },
    {
        "word": "rarely",
        "partOfSpeech": "adverb",
        "translation": "นานๆ ครั้ง อย่างหายาก",
        "definition": "",
        "example": "We rarely go out for dinner.",
        "exampleTranslation": "พวกเราแทบจะไม่ออกไปทานอาหารเย็นข้างนอก"
    },
    {
        "word": "rate",
        "partOfSpeech": "noun",
        "translation": "อัตรา",
        "definition": "",
        "example": "The interest rate has increased.",
        "exampleTranslation": "อัตราดอกเบี้ยเพิ่มขึ้น"
    },
    {
        "word": "rather",
        "partOfSpeech": "adverb",
        "translation": "ค่อนข้าง, ค่อนข้างจะ",
        "definition": "",
        "example": "I would rather stay home.",
        "exampleTranslation": "ฉันอยากอยู่บ้านมากกว่า"
    },
    {
        "word": "raw",
        "partOfSpeech": "noun",
        "translation": "ดิบ",
        "definition": "",
        "example": "Raw meat must be cooked.",
        "exampleTranslation": "เนื้อดิบต้องปรุงให้สุก"
    },
    {
        "word": "reach",
        "partOfSpeech": "noun",
        "translation": "ถึง, มาถึง",
        "definition": "",
        "example": "I cannot reach the top shelf.",
        "exampleTranslation": "ฉันเอื้อมไม่ถึงชั้นบนสุด"
    },
    {
        "word": "react",
        "partOfSpeech": "noun",
        "translation": "แสดงปฏิกิริยาโต้ตอบ โต้ตอบ",
        "definition": "",
        "example": "How did he react to the news?",
        "exampleTranslation": "เขามีปฏิกิริยาอย่างไรกับข่าว?"
    },
    {
        "word": "reaction",
        "partOfSpeech": "noun",
        "translation": "ปฏิกิริยา การโต้ตอบ",
        "definition": "",
        "example": "Her reaction was unexpected.",
        "exampleTranslation": "ปฏิกิริยาของเธอเหนือความคาดหมาย"
    },
    {
        "word": "read",
        "partOfSpeech": "noun",
        "translation": "อ่าน",
        "definition": "",
        "example": "I like to read books.",
        "exampleTranslation": "ฉันชอบอ่านหนังสือ"
    },
    {
        "word": "reader",
        "partOfSpeech": "noun",
        "translation": "ผู้อ่าน",
        "definition": "",
        "example": "He is a fast reader.",
        "exampleTranslation": "เขาเป็นคนอ่านหนังสือเร็ว"
    },
    {
        "word": "reading",
        "partOfSpeech": "noun",
        "translation": "การอ่าน",
        "definition": "",
        "example": "Reading is my favorite hobby.",
        "exampleTranslation": "การอ่านคืองานอดิเรกที่ฉันชอบที่สุด"
    },
    {
        "word": "ready",
        "partOfSpeech": "adjective",
        "translation": "พร้อม เตรียมพร้อม",
        "definition": "",
        "example": "Are you ready to go?",
        "exampleTranslation": "คุณพร้อมจะไปหรือยัง?"
    },
    {
        "word": "real",
        "partOfSpeech": "adjective",
        "translation": "จริง แท้",
        "definition": "",
        "example": "This is a real diamond.",
        "exampleTranslation": "นี่คือเพชรแท้"
    },
    {
        "word": "realistic",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งปฏิบัติได้จริง",
        "definition": "",
        "example": "You need to be realistic about this.",
        "exampleTranslation": "คุณต้องมองโลกตามความเป็นจริงเกี่ยวกับเรื่องนี้"
    },
    {
        "word": "reality",
        "partOfSpeech": "noun",
        "translation": "ความเป็นจริง",
        "definition": "",
        "example": "The reality is very different.",
        "exampleTranslation": "ความจริงแตกต่างกันมาก"
    },
    {
        "word": "realize",
        "partOfSpeech": "verb",
        "translation": "เข้าใจ ตระหนัก",
        "definition": "",
        "example": "I realized that I was wrong.",
        "exampleTranslation": "ฉันตระหนักว่าฉันผิด"
    },
    {
        "word": "really",
        "partOfSpeech": "adverb",
        "translation": "จริงๆ",
        "definition": "",
        "example": "I am really tired.",
        "exampleTranslation": "ฉันเหนื่อยจริงๆ"
    },
    {
        "word": "rear",
        "partOfSpeech": "verb",
        "translation": "ข้างหลัง, .",
        "definition": "",
        "example": "The back door is at the rear of the house.",
        "exampleTranslation": "ประตูด้านหลังอยู่ด้านหลังของบ้าน"
    },
    {
        "word": "reason",
        "partOfSpeech": "noun",
        "translation": "เหตุผล",
        "definition": "",
        "example": "What is the reason for this?",
        "exampleTranslation": "เหตุผลของเรื่องนี้คืออะไร?"
    },
    {
        "word": "reasonable",
        "partOfSpeech": "adjective",
        "translation": "สมเหตุสมผล",
        "definition": "",
        "example": "The price is very reasonable.",
        "exampleTranslation": "ราคาสมเหตุสมผลมาก"
    },
    {
        "word": "reasonably",
        "partOfSpeech": "adverb",
        "translation": "อย่างมีเหตุผล",
        "definition": "",
        "example": "I am reasonably sure it will work.",
        "exampleTranslation": "ฉันค่อนข้างมั่นใจว่ามันจะใช้ได้ผล"
    },
    {
        "word": "recall",
        "partOfSpeech": "noun",
        "translation": "รําลึก หวนคิด",
        "definition": "",
        "example": "I cannot recall his name.",
        "exampleTranslation": "ฉันจำชื่อเขาไม่ได้"
    },
    {
        "word": "receipt",
        "partOfSpeech": "noun",
        "translation": "ใบเสร็จรับเงิน ใบเสร็จรับของ",
        "definition": "",
        "example": "Keep the receipt for your purchase.",
        "exampleTranslation": "เก็บใบเสร็จรับเงินสำหรับการซื้อของคุณไว้"
    },
    {
        "word": "receive",
        "partOfSpeech": "noun",
        "translation": "รับ, ยอมรับ",
        "definition": "",
        "example": "Did you receive my email?",
        "exampleTranslation": "คุณได้รับอีเมลของฉันไหม?"
    },
    {
        "word": "recent",
        "partOfSpeech": "adjective",
        "translation": "เมื่อเร็วๆนี้",
        "definition": "",
        "example": "This is a recent picture of her.",
        "exampleTranslation": "นี่คือรูปถ่ายล่าสุดของเธอ"
    },
    {
        "word": "recently",
        "partOfSpeech": "adverb",
        "translation": "เมื่อเร็วๆนี้ เมื่อไม่นานมานี้",
        "definition": "",
        "example": "Have you seen him recently?",
        "exampleTranslation": "คุณได้เจอเขาเมื่อเร็วๆ นี้ไหม?"
    },
    {
        "word": "reception",
        "partOfSpeech": "noun",
        "translation": "การรับรอง การต้อนรับ งานตอบรับ",
        "definition": "",
        "example": "The reception desk is over there.",
        "exampleTranslation": "โต๊ะต้อนรับอยู่ตรงนั้น"
    },
    {
        "word": "reckon",
        "partOfSpeech": "noun",
        "translation": "คิดคํานวณ, พิจารณาว่า",
        "definition": "",
        "example": "I reckon it will rain tomorrow.",
        "exampleTranslation": "ฉันคิดว่าพรุ่งนี้ฝนจะตก"
    },
    {
        "word": "recognition",
        "partOfSpeech": "noun",
        "translation": "การจําแนกออก การยอมรับ",
        "definition": "",
        "example": "He gained recognition for his work.",
        "exampleTranslation": "เขาได้รับการยอมรับในผลงานของเขา"
    },
    {
        "word": "recognize",
        "partOfSpeech": "verb",
        "translation": "จําได้, รู้จัก",
        "definition": "",
        "example": "Do you recognize this man?",
        "exampleTranslation": "คุณจำผู้ชายคนนี้ได้ไหม?"
    },
    {
        "word": "recommend",
        "partOfSpeech": "noun",
        "translation": "แนะนํา, ชี้แนะ",
        "definition": "",
        "example": "I highly recommend this restaurant.",
        "exampleTranslation": "ฉันขอแนะนำร้านอาหารนี้เป็นอย่างยิ่ง"
    },
    {
        "word": "record",
        "partOfSpeech": "noun",
        "translation": "บรรทุก, แสดง",
        "definition": "",
        "example": "He set a new world record.",
        "exampleTranslation": "เขาสร้างสถิติโลกใหม่"
    },
    {
        "word": "recording",
        "partOfSpeech": "verb",
        "translation": "การบันทึก",
        "definition": "",
        "example": "The band is making a new recording.",
        "exampleTranslation": "วงดนตรีกำลังทำการบันทึกเสียงใหม่"
    },
    {
        "word": "recover",
        "partOfSpeech": "noun",
        "translation": "ได้คืน, ฟื้นไข้",
        "definition": "",
        "example": "He will recover from his illness.",
        "exampleTranslation": "เขาจะหายจากอาการป่วย"
    },
    {
        "word": "red",
        "partOfSpeech": "adjective",
        "translation": "สีแดง",
        "definition": "",
        "example": "Stop at the red light.",
        "exampleTranslation": "หยุดรถเมื่อไฟแดง"
    },
    {
        "word": "reduce",
        "partOfSpeech": "verb",
        "translation": "ลด",
        "definition": "",
        "example": "We need to reduce our expenses.",
        "exampleTranslation": "พวกเราต้องลดค่าใช้จ่าย"
    },
    {
        "word": "reduction",
        "partOfSpeech": "noun",
        "translation": "การลดลง",
        "definition": "",
        "example": "There is a big reduction in prices.",
        "exampleTranslation": "มีการลดราคาครั้งใหญ่"
    },
    {
        "word": "refer",
        "partOfSpeech": "noun",
        "translation": "อ้างถึง",
        "definition": "",
        "example": "Please refer to the instructions.",
        "exampleTranslation": "โปรดอ้างอิงจากคำแนะนำ"
    },
    {
        "word": "reference",
        "partOfSpeech": "noun",
        "translation": "การอ้างอิง การอ้างถึง หนังสืออ้างอิง",
        "definition": "",
        "example": "Save this book for future reference.",
        "exampleTranslation": "เก็บหนังสือเล่มนี้ไว้สำหรับการอ้างอิงในอนาคต"
    },
    {
        "word": "reflect",
        "partOfSpeech": "noun",
        "translation": "สะท้อนกลับ, ไตร่ตรอง",
        "definition": "",
        "example": "The water reflects the sunlight.",
        "exampleTranslation": "น้ำสะท้อนแสงแดด"
    },
    {
        "word": "reform",
        "partOfSpeech": "noun",
        "translation": "ปฏิรูป",
        "definition": "",
        "example": "They want to reform the education system.",
        "exampleTranslation": "พวกเขาต้องการปฏิรูประบบการศึกษา"
    },
    {
        "word": "refrigerator",
        "partOfSpeech": "noun",
        "translation": "ตู้เย็น",
        "definition": "",
        "example": "Put the milk in the refrigerator.",
        "exampleTranslation": "ใส่นมในตู้เย็น"
    },
    {
        "word": "refusal",
        "partOfSpeech": "noun",
        "translation": "การปฏิเสธ",
        "definition": "",
        "example": "His refusal to help was surprising.",
        "exampleTranslation": "การปฏิเสธที่จะช่วยเหลือของเขาน่าประหลาดใจมาก"
    },
    {
        "word": "refuse",
        "partOfSpeech": "noun",
        "translation": "ปฏิเสธ",
        "definition": "",
        "example": "I refuse to answer that question.",
        "exampleTranslation": "ฉันปฏิเสธที่จะตอบคำถามนั้น"
    },
    {
        "word": "regard",
        "partOfSpeech": "noun",
        "translation": "เอาใจใส่, สนใจ",
        "definition": "",
        "example": "He has high regard for his teacher.",
        "exampleTranslation": "เขามีความเคารพอย่างสูงต่อครูของเขา"
    },
    {
        "word": "regarding",
        "partOfSpeech": "verb",
        "translation": "เกี่ยวกับ ในเรื่อง",
        "definition": "",
        "example": "I am writing regarding your letter.",
        "exampleTranslation": "ฉันกำลังเขียนถึงคุณเกี่ยวกับจดหมายของคุณ"
    },
    {
        "word": "region",
        "partOfSpeech": "noun",
        "translation": "บริเวณ ภูมิภาค",
        "definition": "",
        "example": "This region is known for its wine.",
        "exampleTranslation": "ภูมิภาคนี้มีชื่อเสียงเรื่องไวน์"
    },
    {
        "word": "regional",
        "partOfSpeech": "adjective",
        "translation": "ระดับภูมิภาค",
        "definition": "",
        "example": "The regional manager will visit today.",
        "exampleTranslation": "ผู้จัดการระดับภูมิภาคจะมาเยือนวันนี้"
    },
    {
        "word": "register",
        "partOfSpeech": "noun",
        "translation": "การลงทะเบียน บันทึก",
        "definition": "",
        "example": "You need to register for the course.",
        "exampleTranslation": "คุณต้องลงทะเบียนสำหรับหลักสูตรนี้"
    },
    {
        "word": "regret",
        "partOfSpeech": "noun",
        "translation": "เสียใจ . ความเสียใจ",
        "definition": "",
        "example": "I regret saying that.",
        "exampleTranslation": "ฉันเสียใจที่พูดแบบนั้น"
    },
    {
        "word": "regular",
        "partOfSpeech": "adjective",
        "translation": "ปกติ",
        "definition": "",
        "example": "He is a regular customer.",
        "exampleTranslation": "เขาเป็นลูกค้าประจำ"
    },
    {
        "word": "regularly",
        "partOfSpeech": "adverb",
        "translation": "โดยปกติ, ตามธรรมดา",
        "definition": "",
        "example": "You should exercise regularly.",
        "exampleTranslation": "คุณควรออกกำลังกายเป็นประจำ"
    },
    {
        "word": "regulation",
        "partOfSpeech": "noun",
        "translation": "กฎข้อบังคับ การวางข้อกําหนด",
        "definition": "",
        "example": "You must follow the safety regulations.",
        "exampleTranslation": "คุณต้องปฏิบัติตามกฎระเบียบด้านความปลอดภัย"
    },
    {
        "word": "reject",
        "partOfSpeech": "noun",
        "translation": "ปฏิเสธ",
        "definition": "",
        "example": "The company rejected his application.",
        "exampleTranslation": "บริษัทปฏิเสธใบสมัครของเขา"
    },
    {
        "word": "relate",
        "partOfSpeech": "verb",
        "translation": "บอก, เล่า",
        "definition": "",
        "example": "I can relate to your problem.",
        "exampleTranslation": "ฉันสามารถเข้าใจปัญหาของคุณได้"
    },
    {
        "word": "related",
        "partOfSpeech": "adjective",
        "translation": "รู้สึกเกี่ยวข้อง",
        "definition": "",
        "example": "The two events are not related.",
        "exampleTranslation": "สองเหตุการณ์นี้ไม่เกี่ยวข้องกัน"
    },
    {
        "word": "relation",
        "partOfSpeech": "noun",
        "translation": "ความสัมพันธ์ สายสัมพันธ์",
        "definition": "",
        "example": "What is your relation to him?",
        "exampleTranslation": "คุณมีความสัมพันธ์อะไรกับเขา?"
    },
    {
        "word": "relationship",
        "partOfSpeech": "noun",
        "translation": "ความสัมพันธ์",
        "definition": "",
        "example": "They have a good working relationship.",
        "exampleTranslation": "พวกเขามีความสัมพันธ์ในการทำงานที่ดี"
    },
    {
        "word": "relative",
        "partOfSpeech": "noun",
        "translation": "ญาติ",
        "definition": "",
        "example": "All my relatives live in the countryside.",
        "exampleTranslation": "ญาติของฉันทุกคนอาศัยอยู่ในชนบท"
    },
    {
        "word": "relatively",
        "partOfSpeech": "adverb",
        "translation": "โดยเปรียบเทียบกับสิ่งอื่น",
        "definition": "",
        "example": "The test was relatively easy.",
        "exampleTranslation": "การสอบค่อนข้างง่าย"
    },
    {
        "word": "relax",
        "partOfSpeech": "noun",
        "translation": "ผ่อนคลาย",
        "definition": "",
        "example": "Just sit back and relax.",
        "exampleTranslation": "แค่นั่งเอนหลังและผ่อนคลาย"
    },
    {
        "word": "relaxed",
        "partOfSpeech": "noun",
        "translation": "ซึ่งผ่อนคลาย",
        "definition": "",
        "example": "He looks very relaxed.",
        "exampleTranslation": "เขาดูผ่อนคลายมาก"
    },
    {
        "word": "relaxing",
        "partOfSpeech": "verb",
        "translation": "ซึ่งช่วยให้ผ่อนคลาย",
        "definition": "",
        "example": "I had a relaxing weekend.",
        "exampleTranslation": "ฉันมีวันหยุดสุดสัปดาห์ที่ผ่อนคลาย"
    },
    {
        "word": "release",
        "partOfSpeech": "noun",
        "translation": "ออกวางจําหน่าย ปลดปล่อย",
        "definition": "",
        "example": "They will release a new movie next month.",
        "exampleTranslation": "พวกเขาจะเข้าฉายภาพยนตร์ใหม่ในเดือนหน้า"
    },
    {
        "word": "relevant",
        "partOfSpeech": "noun",
        "translation": "เข้าประเด็น",
        "definition": "",
        "example": "That information is not relevant.",
        "exampleTranslation": "ข้อมูลนั้นไม่เกี่ยวข้อง"
    },
    {
        "word": "relief",
        "partOfSpeech": "noun",
        "translation": "ความผ่อนคลาย ภาพนูน",
        "definition": "",
        "example": "It was a great relief to finish the exam.",
        "exampleTranslation": "มันโล่งใจมากที่สอบเสร็จ"
    },
    {
        "word": "religion",
        "partOfSpeech": "noun",
        "translation": "ศาสนา",
        "definition": "",
        "example": "There are many different religions.",
        "exampleTranslation": "มีศาสนาที่แตกต่างกันมากมาย"
    },
    {
        "word": "religious",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับศาสนา เลื่อมใสในศาสนา",
        "definition": "",
        "example": "He is a very religious man.",
        "exampleTranslation": "เขาเป็นคนที่เคร่งศาสนามาก"
    },
    {
        "word": "rely",
        "partOfSpeech": "adverb",
        "translation": "ไว้วางใจ",
        "definition": "",
        "example": "You can always rely on me.",
        "exampleTranslation": "คุณสามารถพึ่งพาฉันได้เสมอ"
    },
    {
        "word": "remain",
        "partOfSpeech": "noun",
        "translation": "ยังคง",
        "definition": "",
        "example": "Please remain in your seats.",
        "exampleTranslation": "โปรดนั่งอยู่กับที่"
    },
    {
        "word": "remains",
        "partOfSpeech": "noun",
        "translation": "ซากศพ",
        "definition": "",
        "example": "They found the remains of an old ship.",
        "exampleTranslation": "พวกเขาพบซากเรือเก่า"
    },
    {
        "word": "remark",
        "partOfSpeech": "noun",
        "translation": "ข้อสังเกต",
        "definition": "",
        "example": "He made a rude remark.",
        "exampleTranslation": "เขาพูดจาหยาบคาย"
    },
    {
        "word": "remarkable",
        "partOfSpeech": "adjective",
        "translation": "ไม่ธรรมดา น่าสังเกต",
        "definition": "",
        "example": "She is a remarkable woman.",
        "exampleTranslation": "เธอเป็นผู้หญิงที่ยอดเยี่ยมมาก"
    },
    {
        "word": "remember",
        "partOfSpeech": "verb",
        "translation": "จดจํา",
        "definition": "",
        "example": "Do you remember my name?",
        "exampleTranslation": "คุณจำชื่อฉันได้ไหม?"
    },
    {
        "word": "remind",
        "partOfSpeech": "noun",
        "translation": "เตือน",
        "definition": "",
        "example": "Please remind me to call her.",
        "exampleTranslation": "โปรดเตือนฉันให้โทรหาเธอด้วย"
    },
    {
        "word": "remote",
        "partOfSpeech": "noun",
        "translation": "ไกล",
        "definition": "",
        "example": "They live in a remote village.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในหมู่บ้านที่ห่างไกล"
    },
    {
        "word": "removal",
        "partOfSpeech": "noun",
        "translation": "การเอาออก",
        "definition": "",
        "example": "The removal of the trees caused a problem.",
        "exampleTranslation": "การตัดต้นไม้ออกทำให้เกิดปัญหา"
    },
    {
        "word": "remove",
        "partOfSpeech": "verb",
        "translation": "เอาออก",
        "definition": "",
        "example": "Remove your shoes before entering.",
        "exampleTranslation": "ถอดรองเท้าก่อนเข้า"
    },
    {
        "word": "rent",
        "partOfSpeech": "noun",
        "translation": "ให้เช่า",
        "definition": "",
        "example": "I pay rent every month.",
        "exampleTranslation": "ฉันจ่ายค่าเช่าทุกเดือน"
    },
    {
        "word": "rented",
        "partOfSpeech": "verb",
        "translation": "ซึ่งจ่ายค่าเช่า",
        "definition": "",
        "example": "We rented a car for the trip.",
        "exampleTranslation": "พวกเราเช่ารถสำหรับการเดินทาง"
    },
    {
        "word": "repair",
        "partOfSpeech": "noun",
        "translation": "ซ่อมแซม",
        "definition": "",
        "example": "He is repairing the broken chair.",
        "exampleTranslation": "เขากำลังซ่อมเก้าอี้ที่พัง"
    },
    {
        "word": "repeat",
        "partOfSpeech": "noun",
        "translation": "กล่าวซํ้า",
        "definition": "",
        "example": "Could you repeat that, please?",
        "exampleTranslation": "คุณช่วยพูดอีกครั้งได้ไหม?"
    },
    {
        "word": "repeated",
        "partOfSpeech": "verb",
        "translation": "กระทําซํ้า พูดซํ้า",
        "definition": "",
        "example": "She repeated the question.",
        "exampleTranslation": "เธอถามคำถามซ้ำ"
    },
    {
        "word": "replace",
        "partOfSpeech": "verb",
        "translation": "แทนที่ สวมตําแหน่ง",
        "definition": "",
        "example": "We need to replace the old tires.",
        "exampleTranslation": "พวกเราต้องเปลี่ยนยางเก่า"
    },
    {
        "word": "reply",
        "partOfSpeech": "noun",
        "translation": "ตอบ",
        "definition": "",
        "example": "I am waiting for his reply.",
        "exampleTranslation": "ฉันกำลังรอคำตอบจากเขา"
    },
    {
        "word": "report",
        "partOfSpeech": "noun",
        "translation": "รายงาน",
        "definition": "",
        "example": "Read this news report.",
        "exampleTranslation": "อ่านรายงานข่าวนี้"
    },
    {
        "word": "represent",
        "partOfSpeech": "noun",
        "translation": "เป็นตัวแทน เล่นบทเป็น",
        "definition": "",
        "example": "This symbol represents peace.",
        "exampleTranslation": "สัญลักษณ์นี้เป็นตัวแทนของสันติภาพ"
    },
    {
        "word": "representative",
        "partOfSpeech": "noun",
        "translation": "ตัวแทน",
        "definition": "",
        "example": "He is a sales representative.",
        "exampleTranslation": "เขาเป็นตัวแทนฝ่ายขาย"
    },
    {
        "word": "reproduce",
        "partOfSpeech": "noun",
        "translation": "สืบพันธุ์ ทําสําเนา",
        "definition": "",
        "example": "Turtles reproduce by laying eggs.",
        "exampleTranslation": "เต่าสืบพันธุ์โดยการวางไข่"
    },
    {
        "word": "reputation",
        "partOfSpeech": "noun",
        "translation": "ชื่อเสียง",
        "definition": "",
        "example": "The restaurant has a good reputation.",
        "exampleTranslation": "ร้านอาหารนี้มีชื่อเสียงที่ดี"
    },
    {
        "word": "request",
        "partOfSpeech": "noun",
        "translation": "ขอร้อง",
        "definition": "",
        "example": "I sent a request for more information.",
        "exampleTranslation": "ฉันส่งคำขอข้อมูลเพิ่มเติมไปแล้ว"
    },
    {
        "word": "require",
        "partOfSpeech": "noun",
        "translation": "ต้องการ เรียกร้อง ขอ",
        "definition": "",
        "example": "This job requires a lot of skill.",
        "exampleTranslation": "งานนี้ต้องใช้ทักษะอย่างมาก"
    },
    {
        "word": "requirement",
        "partOfSpeech": "noun",
        "translation": "สิ่งจําเป็น ความต้องการ",
        "definition": "",
        "example": "What are the entry requirements?",
        "exampleTranslation": "ข้อกำหนดในการเข้าคืออะไร?"
    },
    {
        "word": "rescue",
        "partOfSpeech": "noun",
        "translation": "ช่วยเหลือ",
        "definition": "",
        "example": "The dog rescued the child from the water.",
        "exampleTranslation": "สุนัขช่วยเด็กจากน้ำ"
    },
    {
        "word": "research",
        "partOfSpeech": "noun",
        "translation": "การวิจัย",
        "definition": "",
        "example": "She is doing research for her book.",
        "exampleTranslation": "เธอกำลังทำงานวิจัยสำหรับหนังสือของเธอ"
    },
    {
        "word": "reservation",
        "partOfSpeech": "noun",
        "translation": "การสงวน การรักษาไว้",
        "definition": "",
        "example": "I made a reservation at the hotel.",
        "exampleTranslation": "ฉันจองห้องพักที่โรงแรมแล้ว"
    },
    {
        "word": "reserve",
        "partOfSpeech": "noun",
        "translation": "ถนอมรักษาไว้",
        "definition": "",
        "example": "I want to reserve a table for two.",
        "exampleTranslation": "ฉันต้องการจองโต๊ะสำหรับสองคน"
    },
    {
        "word": "resident",
        "partOfSpeech": "noun",
        "translation": "ผู้อยู่อาศัย ซึ่งอยู่อาศัย",
        "definition": "",
        "example": "She is a local resident.",
        "exampleTranslation": "เธอเป็นคนในท้องถิ่น"
    },
    {
        "word": "resist",
        "partOfSpeech": "noun",
        "translation": "ต้านทาน ขัดขืน",
        "definition": "",
        "example": "I could not resist the chocolate cake.",
        "exampleTranslation": "ฉันทนความเย้ายวนของเค้กช็อกโกแลตไม่ได้"
    },
    {
        "word": "resistance",
        "partOfSpeech": "noun",
        "translation": "การต่อต้าน แรงต้านทาน",
        "definition": "",
        "example": "The body resistance to infection.",
        "exampleTranslation": "ภูมิต้านทานของร่างกายต่อการติดเชื้อ"
    },
    {
        "word": "resolve",
        "partOfSpeech": "noun",
        "translation": "ตกลงใจ, ตัดสินใจ",
        "definition": "",
        "example": "We must resolve this problem quickly.",
        "exampleTranslation": "พวกเราต้องแก้ปัญหานี้อย่างรวดเร็ว"
    },
    {
        "word": "resort",
        "partOfSpeech": "noun",
        "translation": "สถานที่พักตากอากาศ หันไปพึ่ง",
        "definition": "",
        "example": "We stayed at a beach resort.",
        "exampleTranslation": "พวกเราพักที่รีสอร์ทริมชายหาด"
    },
    {
        "word": "resource",
        "partOfSpeech": "noun",
        "translation": "แหล่งที่มา ทรัพยากร",
        "definition": "",
        "example": "Water is a valuable natural resource.",
        "exampleTranslation": "น้ำเป็นทรัพยากรธรรมชาติที่มีค่า"
    },
    {
        "word": "respect",
        "partOfSpeech": "noun",
        "translation": "เคารพ",
        "definition": "",
        "example": "You should respect your elders.",
        "exampleTranslation": "คุณควรเคารพผู้ใหญ่"
    },
    {
        "word": "respond",
        "partOfSpeech": "noun",
        "translation": "ตอบ, พูดตอบ",
        "definition": "",
        "example": "He did not respond to my email.",
        "exampleTranslation": "เขาไม่ได้ตอบอีเมลของฉัน"
    },
    {
        "word": "response",
        "partOfSpeech": "noun",
        "translation": "คําตอบ การตอบ",
        "definition": "",
        "example": "What was his response?",
        "exampleTranslation": "คำตอบของเขาคืออะไร?"
    },
    {
        "word": "responsibility",
        "partOfSpeech": "noun",
        "translation": "ความรับผิดชอบ ภาระหน้าที่",
        "definition": "",
        "example": "It is your responsibility to clean the room.",
        "exampleTranslation": "การทำความสะอาดห้องเป็นความรับผิดชอบของคุณ"
    },
    {
        "word": "responsible",
        "partOfSpeech": "adjective",
        "translation": "รับผิดชอบ",
        "definition": "",
        "example": "Who is responsible for this mess?",
        "exampleTranslation": "ใครเป็นคนรับผิดชอบต่อความยุ่งเหยิงนี้?"
    },
    {
        "word": "rest",
        "partOfSpeech": "noun",
        "translation": "พักผ่อน หยุดพัก",
        "definition": "",
        "example": "You look tired, you need some rest.",
        "exampleTranslation": "คุณดูเหนื่อยนะ คุณต้องพักผ่อนบ้าง"
    },
    {
        "word": "restaurant",
        "partOfSpeech": "noun",
        "translation": "ร้านอาหาร",
        "definition": "",
        "example": "We had dinner at a nice restaurant.",
        "exampleTranslation": "พวกเราทานอาหารเย็นที่ร้านอาหารบรรยากาศดี"
    },
    {
        "word": "restore",
        "partOfSpeech": "noun",
        "translation": "ฟื้นฟู, ซ่อมแซม",
        "definition": "",
        "example": "They will restore the old building.",
        "exampleTranslation": "พวกเขาจะบูรณะอาคารเก่า"
    },
    {
        "word": "restrict",
        "partOfSpeech": "noun",
        "translation": "จํากัด",
        "definition": "",
        "example": "The diet restricts the amount of sugar.",
        "exampleTranslation": "การควบคุมอาหารจำกัดปริมาณน้ำตาล"
    },
    {
        "word": "restricted",
        "partOfSpeech": "verb",
        "translation": "ซึ่งถูกยับยั้ง",
        "definition": "",
        "example": "This area is restricted to staff only.",
        "exampleTranslation": "พื้นที่นี้จำกัดเฉพาะพนักงานเท่านั้น"
    },
    {
        "word": "restriction",
        "partOfSpeech": "noun",
        "translation": "การจํากัด การจํากัดวง การกําหนด การบังคับ",
        "definition": "",
        "example": "There are no parking restrictions here.",
        "exampleTranslation": "ที่นี่ไม่มีข้อจำกัดในการจอดรถ"
    },
    {
        "word": "result",
        "partOfSpeech": "noun",
        "translation": "ผลลัพธ์",
        "definition": "",
        "example": "What is the result of the test?",
        "exampleTranslation": "ผลการสอบคืออะไร?"
    },
    {
        "word": "retain",
        "partOfSpeech": "noun",
        "translation": "รักษาไว้ เก็บไว้",
        "definition": "",
        "example": "Keep your receipt to retain your warranty.",
        "exampleTranslation": "เก็บใบเสร็จไว้เพื่อรักษาสิทธิ์การรับประกันของคุณ"
    },
    {
        "word": "retire",
        "partOfSpeech": "noun",
        "translation": "เกษียณ ถอนตัว",
        "definition": "",
        "example": "He plans to retire at age 65.",
        "exampleTranslation": "เขาวางแผนที่จะเกษียณอายุตอนอายุ 65 ปี"
    },
    {
        "word": "retired",
        "partOfSpeech": "verb",
        "translation": "ถอนตัว ปลดเกษียณ อยู่อย่างสันโดษ",
        "definition": "",
        "example": "My grandfather is retired.",
        "exampleTranslation": "ปู่ของฉันเกษียณแล้ว"
    },
    {
        "word": "retirement",
        "partOfSpeech": "noun",
        "translation": "การปลดเกษียณ",
        "definition": "",
        "example": "She enjoys her retirement.",
        "exampleTranslation": "เธอมีความสุขกับวัยเกษียณ"
    },
    {
        "word": "return",
        "partOfSpeech": "noun",
        "translation": "กลับ",
        "definition": "",
        "example": "When will you return home?",
        "exampleTranslation": "คุณจะกลับบ้านเมื่อไหร่?"
    },
    {
        "word": "reveal",
        "partOfSpeech": "noun",
        "translation": "เปิดเผย",
        "definition": "",
        "example": "The doctor will reveal the test results today.",
        "exampleTranslation": "หมอจะเปิดเผยผลการตรวจวันนี้"
    },
    {
        "word": "reverse",
        "partOfSpeech": "noun",
        "translation": "ถอยกลับ, กลับกัน",
        "definition": "",
        "example": "Put the car in reverse.",
        "exampleTranslation": "ใส่เกียร์ถอยหลัง"
    },
    {
        "word": "review",
        "partOfSpeech": "noun",
        "translation": "ทบทวน",
        "definition": "",
        "example": "Read the book review.",
        "exampleTranslation": "อ่านบทวิจารณ์หนังสือ"
    },
    {
        "word": "revise",
        "partOfSpeech": "noun",
        "translation": "แก้ไขใหม่",
        "definition": "",
        "example": "You should revise your essay.",
        "exampleTranslation": "คุณควรแก้ไขบทความของคุณใหม่"
    },
    {
        "word": "revision",
        "partOfSpeech": "noun",
        "translation": "การปรับปรุงแก้ไข ฉบับปรับปรุงแก้ไข",
        "definition": "",
        "example": "I need to do some revision for the exam.",
        "exampleTranslation": "ฉันต้องทบทวนบทเรียนเพื่อเตรียมสอบ"
    },
    {
        "word": "revolution",
        "partOfSpeech": "noun",
        "translation": "การปฏิวัติ",
        "definition": "",
        "example": "The industrial revolution changed the world.",
        "exampleTranslation": "การปฏิวัติอุตสาหกรรมเปลี่ยนโลก"
    },
    {
        "word": "reward",
        "partOfSpeech": "noun",
        "translation": "รางวัล",
        "definition": "",
        "example": "There is a reward for finding the lost dog.",
        "exampleTranslation": "มีรางวัลสำหรับผู้ที่หาสุนัขที่หายไปพบ"
    },
    {
        "word": "rhythm",
        "partOfSpeech": "noun",
        "translation": "จังหวะ",
        "definition": "",
        "example": "I like the rhythm of this song.",
        "exampleTranslation": "ฉันชอบจังหวะของเพลงนี้"
    },
    {
        "word": "rice",
        "partOfSpeech": "noun",
        "translation": "ข้าว",
        "definition": "",
        "example": "Thai people eat a lot of rice.",
        "exampleTranslation": "คนไทยกินข้าวเยอะมาก"
    },
    {
        "word": "rich",
        "partOfSpeech": "adjective",
        "translation": "รวย อุดมด้วย",
        "definition": "",
        "example": "He is a very rich man.",
        "exampleTranslation": "เขาเป็นผู้ชายที่รวยมาก"
    },
    {
        "word": "rid",
        "partOfSpeech": "adjective",
        "translation": "กําจัด",
        "definition": "",
        "example": "I want to get rid of this old sofa.",
        "exampleTranslation": "ฉันต้องการกำจัดโซฟาเก่าตัวนี้"
    },
    {
        "word": "ride",
        "partOfSpeech": "noun",
        "translation": "ขี่",
        "definition": "",
        "example": "Let us go for a bike ride.",
        "exampleTranslation": "ไปปั่นจักรยานกันเถอะ"
    },
    {
        "word": "rider",
        "partOfSpeech": "noun",
        "translation": "คนที่ขี่ม้าหรือยานพาหนะ",
        "definition": "",
        "example": "The horse rider is very skilled.",
        "exampleTranslation": "คนขี่ม้ามีทักษะดีมาก"
    },
    {
        "word": "ridiculous",
        "partOfSpeech": "adjective",
        "translation": "น่าหัวเราะ, น่าขัน",
        "definition": "",
        "example": "That is a ridiculous idea.",
        "exampleTranslation": "นั่นเป็นความคิดที่ไร้สาระ"
    },
    {
        "word": "riding",
        "partOfSpeech": "verb",
        "translation": "การขี่ม้า",
        "definition": "",
        "example": "She enjoys horse riding.",
        "exampleTranslation": "เธอชอบขี่ม้า"
    },
    {
        "word": "right",
        "partOfSpeech": "noun",
        "translation": "ถูกต้อง",
        "definition": "",
        "example": "Turn right at the corner.",
        "exampleTranslation": "เลี้ยวขวาที่หัวมุม"
    },
    {
        "word": "rightly",
        "partOfSpeech": "adverb",
        "translation": "อย่างถูกต้อง",
        "definition": "",
        "example": "He rightly decided to leave.",
        "exampleTranslation": "เขาตัดสินใจถูกแล้วที่จะจากไป"
    },
    {
        "word": "ring",
        "partOfSpeech": "noun",
        "translation": "แหวน",
        "definition": "",
        "example": "She wears a diamond ring.",
        "exampleTranslation": "เธอสวมแหวนเพชร"
    },
    {
        "word": "rise",
        "partOfSpeech": "noun",
        "translation": "สูงขึ้น, เพิ่มขึ้น",
        "definition": "",
        "example": "The sun will rise soon.",
        "exampleTranslation": "ดวงอาทิตย์จะขึ้นในไม่ช้า"
    },
    {
        "word": "risk",
        "partOfSpeech": "noun",
        "translation": "ความเสี่ยง",
        "definition": "",
        "example": "Do not take any risks.",
        "exampleTranslation": "อย่าเสี่ยงใดๆ"
    },
    {
        "word": "rival",
        "partOfSpeech": "noun",
        "translation": "คู่ต่อสู้ คู่แข่งขัน",
        "definition": "",
        "example": "He defeated his rival.",
        "exampleTranslation": "เขาเอาชนะคู่แข่งของเขา"
    },
    {
        "word": "river",
        "partOfSpeech": "noun",
        "translation": "แม่นํ้า",
        "definition": "",
        "example": "We swam in the river.",
        "exampleTranslation": "พวกเราว่ายน้ำในแม่น้ำ"
    },
    {
        "word": "road",
        "partOfSpeech": "noun",
        "translation": "ถนน",
        "definition": "",
        "example": "The road is closed.",
        "exampleTranslation": "ถนนถูกปิด"
    },
    {
        "word": "rob",
        "partOfSpeech": "noun",
        "translation": "ปล้น",
        "definition": "",
        "example": "Someone tried to rob the bank.",
        "exampleTranslation": "มีคนพยายามปล้นธนาคาร"
    },
    {
        "word": "rock",
        "partOfSpeech": "noun",
        "translation": "หิน",
        "definition": "",
        "example": "The boy threw a rock.",
        "exampleTranslation": "เด็กชายขว้างก้อนหิน"
    },
    {
        "word": "role",
        "partOfSpeech": "noun",
        "translation": "บทบาทการแสดง บทบาทในสังคม",
        "definition": "",
        "example": "She played the lead role in the play.",
        "exampleTranslation": "เธอรับบทนำในละคร"
    },
    {
        "word": "roll",
        "partOfSpeech": "noun",
        "translation": "ม้วน, หมุน",
        "definition": "",
        "example": "The ball rolled down the hill.",
        "exampleTranslation": "ลูกบอลกลิ้งลงไปตามเนินเขา"
    },
    {
        "word": "romantic",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับเรื่องรักใคร่ จินตนาการ",
        "definition": "",
        "example": "It was a romantic dinner.",
        "exampleTranslation": "มันเป็นอาหารค่ำที่โรแมนติก"
    },
    {
        "word": "roof",
        "partOfSpeech": "noun",
        "translation": "หลังคา",
        "definition": "",
        "example": "The bird is on the roof.",
        "exampleTranslation": "นกอยู่บนหลังคา"
    },
    {
        "word": "room",
        "partOfSpeech": "noun",
        "translation": "ห้อง",
        "definition": "",
        "example": "This room is very big.",
        "exampleTranslation": "ห้องนี้ใหญ่มาก"
    },
    {
        "word": "root",
        "partOfSpeech": "noun",
        "translation": "ราก",
        "definition": "",
        "example": "The tree has deep roots.",
        "exampleTranslation": "ต้นไม้มีรากที่ลึก"
    },
    {
        "word": "rope",
        "partOfSpeech": "noun",
        "translation": "เชือก",
        "definition": "",
        "example": "Pull the rope hard.",
        "exampleTranslation": "ดึงเชือกแรงๆ"
    },
    {
        "word": "rough",
        "partOfSpeech": "noun",
        "translation": "หยาบ",
        "definition": "",
        "example": "The sea is very rough today.",
        "exampleTranslation": "วันนี้ทะเลมีคลื่นลมแรงมาก"
    },
    {
        "word": "roughly",
        "partOfSpeech": "adverb",
        "translation": "อย่างคร่าวๆ",
        "definition": "",
        "example": "There were roughly 50 people.",
        "exampleTranslation": "มีผู้คนประมาณ 50 คน"
    },
    {
        "word": "round",
        "partOfSpeech": "noun",
        "translation": "กลม",
        "definition": "",
        "example": "The ball is round.",
        "exampleTranslation": "ลูกบอลมีรูปร่างกลม"
    },
    {
        "word": "rounded",
        "partOfSpeech": "verb",
        "translation": "ซึ่งมีรูปร่างกลม",
        "definition": "",
        "example": "The table has rounded corners.",
        "exampleTranslation": "โต๊ะมีมุมโค้งมน"
    },
    {
        "word": "route",
        "partOfSpeech": "noun",
        "translation": "ทาง เส้นทาง",
        "definition": "",
        "example": "We took a different route.",
        "exampleTranslation": "พวกเราใช้เส้นทางอื่น"
    },
    {
        "word": "routine",
        "partOfSpeech": "noun",
        "translation": "งานประจํา",
        "definition": "",
        "example": "This is my daily routine.",
        "exampleTranslation": "นี่คือกิจวัตรประจำวันของฉัน"
    },
    {
        "word": "row",
        "partOfSpeech": "noun",
        "translation": "แถว, แนว",
        "definition": "",
        "example": "We sat in the front row.",
        "exampleTranslation": "พวกเรานั่งแถวหน้า"
    },
    {
        "word": "royal",
        "partOfSpeech": "noun",
        "translation": "ราช-",
        "definition": "",
        "example": "They live in a royal palace.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในพระราชวัง"
    },
    {
        "word": "rub",
        "partOfSpeech": "noun",
        "translation": "ขัด ถู",
        "definition": "",
        "example": "Rub your hands together to get warm.",
        "exampleTranslation": "ถูมือเข้าด้วยกันเพื่อให้ร่างกายอบอุ่น"
    },
    {
        "word": "rubber",
        "partOfSpeech": "noun",
        "translation": "ยาง",
        "definition": "",
        "example": "The ball is made of rubber.",
        "exampleTranslation": "ลูกบอลทำจากยาง"
    },
    {
        "word": "rubbish",
        "partOfSpeech": "noun",
        "translation": "ของเสีย ขยะ",
        "definition": "",
        "example": "Throw the rubbish in the bin.",
        "exampleTranslation": "ทิ้งขยะลงในถัง"
    },
    {
        "word": "rude",
        "partOfSpeech": "noun",
        "translation": "หยาบ",
        "definition": "",
        "example": "It is rude to stare.",
        "exampleTranslation": "การจ้องมองเป็นเรื่องเสียมารยาท"
    },
    {
        "word": "rudely",
        "partOfSpeech": "adverb",
        "translation": "อย่างหยาบคาย ไม่สุภาพ",
        "definition": "",
        "example": "He spoke to her rudely.",
        "exampleTranslation": "เขาพูดกับเธออย่างหยาบคาย"
    },
    {
        "word": "ruin",
        "partOfSpeech": "noun",
        "translation": "ซากปรักหักพัง ความพินาศ ความหายนะ",
        "definition": "",
        "example": "The fire ruined the building.",
        "exampleTranslation": "ไฟไหม้ทำลายอาคาร"
    },
    {
        "word": "rule",
        "partOfSpeech": "noun",
        "translation": "กฎ",
        "definition": "",
        "example": "You must follow the rules.",
        "exampleTranslation": "คุณต้องปฏิบัติตามกฎ"
    },
    {
        "word": "ruler",
        "partOfSpeech": "noun",
        "translation": "ผู้ปกครอง",
        "definition": "",
        "example": "The king is the ruler of the country.",
        "exampleTranslation": "พระราชาคือผู้ปกครองประเทศ"
    },
    {
        "word": "rumour",
        "partOfSpeech": "noun",
        "translation": "ข่าวลือ",
        "definition": "",
        "example": "I heard a rumour about him.",
        "exampleTranslation": "ฉันได้ยินข่าวลือเกี่ยวกับเขา"
    },
    {
        "word": "run",
        "partOfSpeech": "verb",
        "translation": "วิ่ง",
        "definition": "",
        "example": "He can run very fast.",
        "exampleTranslation": "เขาวิ่งได้เร็วมาก"
    },
    {
        "word": "runner",
        "partOfSpeech": "noun",
        "translation": "ผู้วิ่ง",
        "definition": "",
        "example": "She is a fast runner.",
        "exampleTranslation": "เธอเป็นนักวิ่งที่เร็ว"
    },
    {
        "word": "running",
        "partOfSpeech": "verb",
        "translation": "การวิ่ง",
        "definition": "",
        "example": "I go running every morning.",
        "exampleTranslation": "ฉันไปวิ่งทุกเช้า"
    },
    {
        "word": "rural",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับชนบท",
        "definition": "",
        "example": "They live in a rural area.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในพื้นที่ชนบท"
    },
    {
        "word": "rush",
        "partOfSpeech": "noun",
        "translation": "รีบเร่ง",
        "definition": "",
        "example": "Do not rush, we have time.",
        "exampleTranslation": "ไม่ต้องรีบ พวกเรามีเวลา"
    },
    {
        "word": "sack",
        "partOfSpeech": "verb",
        "translation": "กระสอบ, .",
        "definition": "",
        "example": "He was carrying a sack of potatoes.",
        "exampleTranslation": "เขากำลังแบกกระสอบมันฝรั่ง"
    },
    {
        "word": "sad",
        "partOfSpeech": "noun",
        "translation": "เสียใจ",
        "definition": "",
        "example": "I feel sad today.",
        "exampleTranslation": "วันนี้ฉันรู้สึกเศร้า"
    },
    {
        "word": "sadly",
        "partOfSpeech": "adverb",
        "translation": "อย่างเศร้าใจ อย่างเสียใจ",
        "definition": "",
        "example": "Sadly, he died yesterday.",
        "exampleTranslation": "น่าเศร้าที่เขาเสียชีวิตเมื่อวานนี้"
    },
    {
        "word": "sadness",
        "partOfSpeech": "noun",
        "translation": "ความเสียใจ ความเศร้าโศก",
        "definition": "",
        "example": "She smiled to hide her sadness.",
        "exampleTranslation": "เธอยิ้มเพื่อซ่อนความเศร้า"
    },
    {
        "word": "safe",
        "partOfSpeech": "adjective",
        "translation": "ปลอดภัย",
        "definition": "",
        "example": "Keep your money in a safe place.",
        "exampleTranslation": "เก็บเงินของคุณไว้ในที่ปลอดภัย"
    },
    {
        "word": "safely",
        "partOfSpeech": "adverb",
        "translation": "อย่างปลอดภัย",
        "definition": "",
        "example": "They arrived home safely.",
        "exampleTranslation": "พวกเขาถึงบ้านอย่างปลอดภัย"
    },
    {
        "word": "safety",
        "partOfSpeech": "noun",
        "translation": "ความปลอดภัย",
        "definition": "",
        "example": "Safety is our top priority.",
        "exampleTranslation": "ความปลอดภัยคือสิ่งสำคัญอันดับแรกของเรา"
    },
    {
        "word": "sail",
        "partOfSpeech": "noun",
        "translation": "แล่นเรือ เดินเรือ",
        "definition": "",
        "example": "The boat has a white sail.",
        "exampleTranslation": "เรือมีใบเรือสีขาว"
    },
    {
        "word": "sailing",
        "partOfSpeech": "verb",
        "translation": "การเดินเรือ",
        "definition": "",
        "example": "They went sailing on the lake.",
        "exampleTranslation": "พวกเขาไปล่องเรือใบในทะเลสาบ"
    },
    {
        "word": "sailor",
        "partOfSpeech": "noun",
        "translation": "กะลาสีเรือ",
        "definition": "",
        "example": "He is a sailor in the navy.",
        "exampleTranslation": "เขาเป็นกะลาสีเรือในกองทัพเรือ"
    },
    {
        "word": "salad",
        "partOfSpeech": "noun",
        "translation": "สลัด",
        "definition": "",
        "example": "I had a salad for lunch.",
        "exampleTranslation": "ฉันทานสลัดเป็นอาหารกลางวัน"
    },
    {
        "word": "salary",
        "partOfSpeech": "noun",
        "translation": "เงินเดือน",
        "definition": "",
        "example": "He has a high salary.",
        "exampleTranslation": "เขามีเงินเดือนสูง"
    },
    {
        "word": "sale",
        "partOfSpeech": "noun",
        "translation": "ขาย",
        "definition": "",
        "example": "The shoes are on sale.",
        "exampleTranslation": "รองเท้ากำลังลดราคา"
    },
    {
        "word": "salt",
        "partOfSpeech": "noun",
        "translation": "เกลือ",
        "definition": "",
        "example": "Pass me the salt, please.",
        "exampleTranslation": "โปรดส่งเกลือให้ฉันหน่อย"
    },
    {
        "word": "salty",
        "partOfSpeech": "noun",
        "translation": "เค็ม",
        "definition": "",
        "example": "The soup is too salty.",
        "exampleTranslation": "ซุปเค็มเกินไป"
    },
    {
        "word": "same",
        "partOfSpeech": "adjective",
        "translation": "เหมือน",
        "definition": "",
        "example": "We have the same shoes.",
        "exampleTranslation": "พวกเรามีรองเท้าเหมือนกัน"
    },
    {
        "word": "sample",
        "partOfSpeech": "noun",
        "translation": "ตัวอย่าง ของลอง",
        "definition": "",
        "example": "Can I have a free sample?",
        "exampleTranslation": "ฉันขอตัวอย่างฟรีได้ไหม?"
    },
    {
        "word": "sand",
        "partOfSpeech": "noun",
        "translation": "ทราย",
        "definition": "",
        "example": "The children played in the sand.",
        "exampleTranslation": "เด็กๆ เล่นทราย"
    },
    {
        "word": "satisfaction",
        "partOfSpeech": "noun",
        "translation": "ความพอใจ",
        "definition": "",
        "example": "She smiled with satisfaction.",
        "exampleTranslation": "เธอยิ้มด้วยความพึงพอใจ"
    },
    {
        "word": "satisfied",
        "partOfSpeech": "adjective",
        "translation": "พอใจ",
        "definition": "",
        "example": "Are you satisfied with the result?",
        "exampleTranslation": "คุณพอใจกับผลลัพธ์ไหม?"
    },
    {
        "word": "satisfy",
        "partOfSpeech": "noun",
        "translation": "ทําให้พอใจ",
        "definition": "",
        "example": "The meal did not satisfy his hunger.",
        "exampleTranslation": "มื้ออาหารไม่ได้ทำให้เขาหายหิว"
    },
    {
        "word": "satisfying",
        "partOfSpeech": "verb",
        "translation": "ซึ่งสนองความพอใจ การทําให้พึงพอใจ",
        "definition": "",
        "example": "It was a very satisfying meal.",
        "exampleTranslation": "มันเป็นมื้ออาหารที่น่าพอใจมาก"
    },
    {
        "word": "Saturday",
        "partOfSpeech": "noun",
        "translation": "วันเสาร์",
        "definition": "",
        "example": "I will see you on Saturday.",
        "exampleTranslation": "ฉันจะเจอคุณวันเสาร์"
    },
    {
        "word": "sauce",
        "partOfSpeech": "noun",
        "translation": "ซอส",
        "definition": "",
        "example": "Add some tomato sauce.",
        "exampleTranslation": "ใส่ซอสมะเขือเทศเล็กน้อย"
    },
    {
        "word": "save",
        "partOfSpeech": "verb",
        "translation": "ช่วยให้รอดชีวิต, คุ้มครอง",
        "definition": "",
        "example": "Save your money.",
        "exampleTranslation": "เก็บเงินของคุณไว้"
    },
    {
        "word": "saving",
        "partOfSpeech": "verb",
        "translation": "ช่วยชีวิต, ช่วยเหลือ",
        "definition": "",
        "example": "I am saving money for a new car.",
        "exampleTranslation": "ฉันกำลังเก็บเงินเพื่อซื้อรถคันใหม่"
    },
    {
        "word": "say",
        "partOfSpeech": "verb",
        "translation": "พูด กล่าว",
        "definition": "",
        "example": "What did you say?",
        "exampleTranslation": "คุณพูดว่าอะไรนะ?"
    },
    {
        "word": "scale",
        "partOfSpeech": "noun",
        "translation": "มาตราส่วน",
        "definition": "",
        "example": "He stepped on the weighing scale.",
        "exampleTranslation": "เขาก้าวขึ้นไปบนเครื่องชั่งน้ำหนัก"
    },
    {
        "word": "scare",
        "partOfSpeech": "noun",
        "translation": "ทําให้กลัว ตกใจ",
        "definition": "",
        "example": "The loud noise scared me.",
        "exampleTranslation": "เสียงดังทำให้ฉันตกใจ"
    },
    {
        "word": "scared",
        "partOfSpeech": "verb",
        "translation": "ตกใจ",
        "definition": "",
        "example": "I am scared of spiders.",
        "exampleTranslation": "ฉันกลัวแมงมุม"
    },
    {
        "word": "scene",
        "partOfSpeech": "noun",
        "translation": "ฉาก",
        "definition": "",
        "example": "The movie has a romantic scene.",
        "exampleTranslation": "ภาพยนตร์มีฉากโรแมนติก"
    },
    {
        "word": "schedule",
        "partOfSpeech": "noun",
        "translation": "รายการ กําหนดการ ตารางเวลา",
        "definition": "",
        "example": "What is your schedule for today?",
        "exampleTranslation": "ตารางเวลาของคุณสำหรับวันนี้คืออะไร?"
    },
    {
        "word": "scheme",
        "partOfSpeech": "noun",
        "translation": "แผน รายการ",
        "definition": "",
        "example": "He came up with a new scheme.",
        "exampleTranslation": "เขาคิดแผนการใหม่ขึ้นมา"
    },
    {
        "word": "school",
        "partOfSpeech": "noun",
        "translation": "โรงเรียน",
        "definition": "",
        "example": "The children go to school.",
        "exampleTranslation": "เด็กๆ ไปโรงเรียน"
    },
    {
        "word": "science",
        "partOfSpeech": "noun",
        "translation": "วิทยาศาสตร์",
        "definition": "",
        "example": "I like science class.",
        "exampleTranslation": "ฉันชอบวิชาวิทยาศาสตร์"
    },
    {
        "word": "scientific",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับวิทยาศาสตร์",
        "definition": "",
        "example": "They made a scientific discovery.",
        "exampleTranslation": "พวกเขาค้นพบทางวิทยาศาสตร์"
    },
    {
        "word": "scientist",
        "partOfSpeech": "noun",
        "translation": "นักวิทยาศาสตร์",
        "definition": "",
        "example": "Albert Einstein was a famous scientist.",
        "exampleTranslation": "อัลเบิร์ต ไอน์สไตน์เป็นนักวิทยาศาสตร์ที่มีชื่อเสียง"
    },
    {
        "word": "scissors",
        "partOfSpeech": "noun",
        "translation": "กรรไกร",
        "definition": "",
        "example": "Use the scissors to cut the paper.",
        "exampleTranslation": "ใช้กรรไกรตัดกระดาษ"
    },
    {
        "word": "score",
        "partOfSpeech": "noun",
        "translation": "คะแนน",
        "definition": "",
        "example": "What is the final score?",
        "exampleTranslation": "คะแนนสุดท้ายคือเท่าไหร่?"
    },
    {
        "word": "scratch",
        "partOfSpeech": "noun",
        "translation": "ข่วน, เกา",
        "definition": "",
        "example": "The cat scratched my arm.",
        "exampleTranslation": "แมวข่วนแขนฉัน"
    },
    {
        "word": "scream",
        "partOfSpeech": "noun",
        "translation": "(ส่ง)เสียงร้องกรีѹด",
        "definition": "",
        "example": "She screamed when she saw the mouse.",
        "exampleTranslation": "เธอกรีดร้องเมื่อเห็นหนู"
    },
    {
        "word": "screen",
        "partOfSpeech": "noun",
        "translation": "จอภาพยนต์",
        "definition": "",
        "example": "Look at the TV screen.",
        "exampleTranslation": "มองไปที่หน้าจอทีวี"
    },
    {
        "word": "screw",
        "partOfSpeech": "noun",
        "translation": "สกรู ขันสกรู",
        "definition": "",
        "example": "Use a screwdriver to turn the screw.",
        "exampleTranslation": "ใช้ไขควงเพื่อหมุนสกรู"
    },
    {
        "word": "sea",
        "partOfSpeech": "noun",
        "translation": "ทะเล",
        "definition": "",
        "example": "The sea is very calm today.",
        "exampleTranslation": "วันนี้ทะเลสงบมาก"
    },
    {
        "word": "seal",
        "partOfSpeech": "verb",
        "translation": "ตราประทับ, แมวนํ้า",
        "definition": "",
        "example": "The letter is sealed.",
        "exampleTranslation": "จดหมายถูกปิดผนึกแล้ว"
    },
    {
        "word": "search",
        "partOfSpeech": "noun",
        "translation": "ค้นหา สํารวจ",
        "definition": "",
        "example": "We will search the house.",
        "exampleTranslation": "พวกเราจะค้นบ้าน"
    },
    {
        "word": "season",
        "partOfSpeech": "noun",
        "translation": "ฤดูกาล",
        "definition": "",
        "example": "Summer is my favorite season.",
        "exampleTranslation": "ฤดูร้อนเป็นฤดูที่ฉันชอบที่สุด"
    },
    {
        "word": "seat",
        "partOfSpeech": "noun",
        "translation": "ที่นั่ง",
        "definition": "",
        "example": "Please take a seat.",
        "exampleTranslation": "โปรดนั่งลง"
    },
    {
        "word": "second",
        "partOfSpeech": "noun",
        "translation": "ที่สอง ชั้นสอง อันดับสอง .วินาที",
        "definition": "",
        "example": "Wait a second.",
        "exampleTranslation": "รอสักครู่"
    },
    {
        "word": "secondary",
        "partOfSpeech": "adjective",
        "translation": "ที่สอง ลําดับสอง",
        "definition": "",
        "example": "This is a secondary problem.",
        "exampleTranslation": "นี่เป็นปัญหารอง"
    },
    {
        "word": "secret",
        "partOfSpeech": "noun",
        "translation": "ลับ",
        "definition": "",
        "example": "I will tell you a secret.",
        "exampleTranslation": "ฉันจะบอกความลับคุณ"
    },
    {
        "word": "secretary",
        "partOfSpeech": "noun",
        "translation": "เลขานุการ",
        "definition": "",
        "example": "She works as a secretary.",
        "exampleTranslation": "เธอทำงานเป็นเลขานุการ"
    },
    {
        "word": "section",
        "partOfSpeech": "noun",
        "translation": "ส่วน, ภาค",
        "definition": "",
        "example": "This section of the book is interesting.",
        "exampleTranslation": "ส่วนนี้ของหนังสือน่าสนใจ"
    },
    {
        "word": "sector",
        "partOfSpeech": "noun",
        "translation": "ภาค (ทางเศรษฐกิจหรือสังคม) ส่วนของวงกลม",
        "definition": "",
        "example": "He works in the financial sector.",
        "exampleTranslation": "เขาทำงานในภาคการเงิน"
    },
    {
        "word": "secure",
        "partOfSpeech": "noun",
        "translation": "มั่นคง",
        "definition": "",
        "example": "Make sure the door is secure.",
        "exampleTranslation": "ตรวจสอบให้แน่ใจว่าประตูล็อคแน่นหนา"
    },
    {
        "word": "security",
        "partOfSpeech": "noun",
        "translation": "ความมั่นคง ความปลอดภัย",
        "definition": "",
        "example": "The building has good security.",
        "exampleTranslation": "อาคารมีระบบรักษาความปลอดภัยที่ดี"
    },
    {
        "word": "see",
        "partOfSpeech": "verb",
        "translation": "เห็น",
        "definition": "",
        "example": "I can see you.",
        "exampleTranslation": "ฉันเห็นคุณ"
    },
    {
        "word": "seed",
        "partOfSpeech": "noun",
        "translation": "เมล็ด",
        "definition": "",
        "example": "Plant the seed in the soil.",
        "exampleTranslation": "ปลูกเมล็ดพันธุ์ลงในดิน"
    },
    {
        "word": "seek",
        "partOfSpeech": "noun",
        "translation": "ค้นหา หา",
        "definition": "",
        "example": "They are seeking help.",
        "exampleTranslation": "พวกเขากำลังขอความช่วยเหลือ"
    },
    {
        "word": "seem",
        "partOfSpeech": "noun",
        "translation": "ดูราวกับ, ดูเหมือน",
        "definition": "",
        "example": "You seem tired.",
        "exampleTranslation": "คุณดูเหมือนจะเหนื่อยนะ"
    },
    {
        "word": "select",
        "partOfSpeech": "noun",
        "translation": "เลือก",
        "definition": "",
        "example": "Please select a color.",
        "exampleTranslation": "โปรดเลือกสี"
    },
    {
        "word": "selection",
        "partOfSpeech": "noun",
        "translation": "การเลือก การคัดเลือก",
        "definition": "",
        "example": "The store has a wide selection of shoes.",
        "exampleTranslation": "ร้านมีรองเท้าให้เลือกมากมาย"
    },
    {
        "word": "self",
        "partOfSpeech": "noun",
        "translation": "ด้วยตัวเอง ตัวเอง",
        "definition": "",
        "example": "You must protect your inner self.",
        "exampleTranslation": "คุณต้องปกป้องตัวตนภายในของคุณ"
    },
    {
        "word": "sell",
        "partOfSpeech": "noun",
        "translation": "ขาย",
        "definition": "",
        "example": "Do you sell apples?",
        "exampleTranslation": "คุณขายแอปเปิลไหม?"
    },
    {
        "word": "senate",
        "partOfSpeech": "noun",
        "translation": "วุฒิสภา",
        "definition": "",
        "example": "The senate passed the new bill.",
        "exampleTranslation": "วุฒิสภาผ่านร่างกฎหมายฉบับใหม่"
    },
    {
        "word": "senator",
        "partOfSpeech": "noun",
        "translation": "สมาชิกวุฒิสภา",
        "definition": "",
        "example": "He was elected as a senator.",
        "exampleTranslation": "เขาได้รับเลือกให้เป็นวุฒิสมาชิก"
    },
    {
        "word": "send",
        "partOfSpeech": "noun",
        "translation": "ส่ง",
        "definition": "",
        "example": "Please send me an email.",
        "exampleTranslation": "โปรดส่งอีเมลหาฉัน"
    },
    {
        "word": "senior",
        "partOfSpeech": "noun",
        "translation": "อาวุโส, อายุมาก",
        "definition": "",
        "example": "He is a senior manager.",
        "exampleTranslation": "เขาเป็นผู้จัดการอาวุโส"
    },
    {
        "word": "sense",
        "partOfSpeech": "noun",
        "translation": "ประสาทสัมผัส",
        "definition": "",
        "example": "Dogs have a good sense of smell.",
        "exampleTranslation": "สุนัขมีประสาทสัมผัสในการดมกลิ่นที่ดี"
    },
    {
        "word": "sensible",
        "partOfSpeech": "adjective",
        "translation": "สมเหตุสมผล",
        "definition": "",
        "example": "That is a sensible decision.",
        "exampleTranslation": "นั่นเป็นการตัดสินใจที่มีเหตุผล"
    },
    {
        "word": "sensitive",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งไวต่อสิ่งกระตุ้น",
        "definition": "",
        "example": "My teeth are very sensitive.",
        "exampleTranslation": "ฟันของฉันไวต่อความรู้สึกมาก"
    },
    {
        "word": "sentence",
        "partOfSpeech": "noun",
        "translation": "ประโยค การตัดสิน",
        "definition": "",
        "example": "Write a complete sentence.",
        "exampleTranslation": "เขียนประโยคให้สมบูรณ์"
    },
    {
        "word": "separate",
        "partOfSpeech": "adjective",
        "translation": "แยกออก แยก",
        "definition": "",
        "example": "Keep them in separate boxes.",
        "exampleTranslation": "เก็บพวกมันไว้ในกล่องแยกกัน"
    },
    {
        "word": "separately",
        "partOfSpeech": "adverb",
        "translation": "แยกออก แบ่งสรร",
        "definition": "",
        "example": "They arrived separately.",
        "exampleTranslation": "พวกเขามาถึงแยกกัน"
    },
    {
        "word": "separation",
        "partOfSpeech": "noun",
        "translation": "การแยกออก การแยก การแบ่งแยก",
        "definition": "",
        "example": "The separation was hard for them.",
        "exampleTranslation": "การแยกจากกันเป็นเรื่องยากสำหรับพวกเขา"
    },
    {
        "word": "September",
        "partOfSpeech": "noun",
        "translation": "กันยายน",
        "definition": "",
        "example": "School starts in September.",
        "exampleTranslation": "โรงเรียนเปิดเทอมในเดือนกันยายน"
    },
    {
        "word": "series",
        "partOfSpeech": "noun",
        "translation": "อนุกรม ลําดับ",
        "definition": "",
        "example": "I am watching a new TV series.",
        "exampleTranslation": "ฉันกำลังดูซีรีส์โทรทัศน์เรื่องใหม่"
    },
    {
        "word": "serious",
        "partOfSpeech": "adjective",
        "translation": "ร้ายแรง",
        "definition": "",
        "example": "This is a serious problem.",
        "exampleTranslation": "นี่เป็นปัญหาร้ายแรง"
    },
    {
        "word": "seriously",
        "partOfSpeech": "adverb",
        "translation": "อย่างจริงจัง อย่างร้ายแรง",
        "definition": "",
        "example": "She was seriously injured.",
        "exampleTranslation": "เธอได้รับบาดเจ็บสาหัส"
    },
    {
        "word": "servant",
        "partOfSpeech": "noun",
        "translation": "คนรับใช้",
        "definition": "",
        "example": "The king had many servants.",
        "exampleTranslation": "พระราชามีคนรับใช้มากมาย"
    },
    {
        "word": "serve",
        "partOfSpeech": "noun",
        "translation": "เสิร์ฟอาหาร รับใช้ บริการ",
        "definition": "",
        "example": "They serve breakfast at 7 AM.",
        "exampleTranslation": "พวกเขาให้บริการอาหารเช้าตอน 7 โมงเช้า"
    },
    {
        "word": "service",
        "partOfSpeech": "noun",
        "translation": "บริการ",
        "definition": "",
        "example": "The service here is excellent.",
        "exampleTranslation": "การบริการที่นี่ยอดเยี่ยมมาก"
    },
    {
        "word": "session",
        "partOfSpeech": "noun",
        "translation": "การนั่งประชุม เวลาในการประชุม",
        "definition": "",
        "example": "The afternoon session starts now.",
        "exampleTranslation": "การประชุมช่วงบ่ายเริ่มขึ้นแล้ว"
    },
    {
        "word": "set",
        "partOfSpeech": "noun",
        "translation": "ตั้งตัว จัดวาง",
        "definition": "",
        "example": "I bought a new set of cups.",
        "exampleTranslation": "ฉันซื้อถ้วยชุดใหม่"
    },
    {
        "word": "settle",
        "partOfSpeech": "verb",
        "translation": "เข้าที่ ตั้งถิ่นฐาน",
        "definition": "",
        "example": "They will settle in Canada.",
        "exampleTranslation": "พวกเขาจะตั้งถิ่นฐานในแคนาดา"
    },
    {
        "word": "seven",
        "partOfSpeech": "noun",
        "translation": "เจ็ด",
        "definition": "",
        "example": "I have seven apples.",
        "exampleTranslation": "ฉันมีแอปเปิลเจ็ดลูก"
    },
    {
        "word": "seventeen",
        "partOfSpeech": "noun",
        "translation": "สิบเจ็ด",
        "definition": "",
        "example": "He is seventeen years old.",
        "exampleTranslation": "เขาอายุสิบเจ็ดปี"
    },
    {
        "word": "seventy",
        "partOfSpeech": "noun",
        "translation": "เจ็ดสิบ",
        "definition": "",
        "example": "She drove at seventy miles per hour.",
        "exampleTranslation": "เธอขับรถด้วยความเร็วเจ็ดสิบไมล์ต่อชั่วโมง"
    },
    {
        "word": "several",
        "partOfSpeech": "adjective",
        "translation": "หลาย มากมาย",
        "definition": "",
        "example": "I have read this book several times.",
        "exampleTranslation": "ฉันอ่านหนังสือเล่มนี้มาหลายครั้งแล้ว"
    },
    {
        "word": "severe",
        "partOfSpeech": "adjective",
        "translation": "รุนแรง",
        "definition": "",
        "example": "The storm caused severe damage.",
        "exampleTranslation": "พายุทำให้เกิดความเสียหายอย่างรุนแรง"
    },
    {
        "word": "sew",
        "partOfSpeech": "noun",
        "translation": "เย็บ",
        "definition": "",
        "example": "Can you sew this button on?",
        "exampleTranslation": "คุณช่วยเย็บกระดุมเม็ดนี้ให้หน่อยได้ไหม?"
    },
    {
        "word": "sewing",
        "partOfSpeech": "verb",
        "translation": "การเย็บ การเย็บจักร",
        "definition": "",
        "example": "She likes sewing.",
        "exampleTranslation": "เธอชอบเย็บผ้า"
    },
    {
        "word": "sex",
        "partOfSpeech": "noun",
        "translation": "เพศ",
        "definition": "",
        "example": "What is the baby's sex?",
        "exampleTranslation": "ทารกเพศอะไร?"
    },
    {
        "word": "sexual",
        "partOfSpeech": "adjective",
        "translation": "ทางเพศ",
        "definition": "",
        "example": "They discussed sexual health.",
        "exampleTranslation": "พวกเขาพูดคุยเรื่องสุขภาพทางเพศ"
    },
    {
        "word": "shade",
        "partOfSpeech": "noun",
        "translation": "ร่มเงา",
        "definition": "",
        "example": "Let us sit in the shade.",
        "exampleTranslation": "ไปนั่งในร่มกันเถอะ"
    },
    {
        "word": "shadow",
        "partOfSpeech": "noun",
        "translation": "เงา",
        "definition": "",
        "example": "The tree cast a long shadow.",
        "exampleTranslation": "ต้นไม้ทอดเงายาว"
    },
    {
        "word": "shake",
        "partOfSpeech": "noun",
        "translation": "สั่น",
        "definition": "",
        "example": "Shake the bottle before opening.",
        "exampleTranslation": "เขย่าขวดก่อนเปิด"
    },
    {
        "word": "shall",
        "partOfSpeech": "noun",
        "translation": "จะ",
        "definition": "",
        "example": "Shall we go now?",
        "exampleTranslation": "พวกเราไปกันเลยไหม?"
    },
    {
        "word": "shallow",
        "partOfSpeech": "noun",
        "translation": "ตื้น",
        "definition": "",
        "example": "The water here is shallow.",
        "exampleTranslation": "น้ำตรงนี้ตื้น"
    },
    {
        "word": "shame",
        "partOfSpeech": "noun",
        "translation": "ความอัปยศ",
        "definition": "",
        "example": "What a shame you cannot come!",
        "exampleTranslation": "น่าเสียดายที่คุณมาไม่ได้!"
    },
    {
        "word": "shape",
        "partOfSpeech": "noun",
        "translation": "รูปร่าง",
        "definition": "",
        "example": "The cloud has a funny shape.",
        "exampleTranslation": "ก้อนเมฆมีรูปร่างตลกๆ"
    },
    {
        "word": "share",
        "partOfSpeech": "verb",
        "translation": "ส่วน, หุ้นส่วน",
        "definition": "",
        "example": "They share a room.",
        "exampleTranslation": "พวกเขาใช้ห้องร่วมกัน"
    },
    {
        "word": "sharp",
        "partOfSpeech": "adjective",
        "translation": "คม, ชัด",
        "definition": "",
        "example": "Be careful, the knife is sharp.",
        "exampleTranslation": "ระวังนะ มีดมันคม"
    },
    {
        "word": "sharply",
        "partOfSpeech": "adverb",
        "translation": "อย่างชัดเจน อย่างฉลาด",
        "definition": "",
        "example": "Prices have risen sharply.",
        "exampleTranslation": "ราคาปรับตัวสูงขึ้นอย่างรวดเร็ว"
    },
    {
        "word": "shave",
        "partOfSpeech": "noun",
        "translation": "โกน",
        "definition": "",
        "example": "He needs to shave his beard.",
        "exampleTranslation": "เขาต้องโกนหนวด"
    },
    {
        "word": "she",
        "partOfSpeech": "noun",
        "translation": "เธอ",
        "definition": "",
        "example": "She is my best friend.",
        "exampleTranslation": "เธอคือเพื่อนสนิทของฉัน"
    },
    {
        "word": "sheep",
        "partOfSpeech": "noun",
        "translation": "แกะ",
        "definition": "",
        "example": "The sheep are eating grass.",
        "exampleTranslation": "แกะกำลังกินหญ้า"
    },
    {
        "word": "sheet",
        "partOfSpeech": "noun",
        "translation": "ผ้าปูที่นอน แผ่นกระดาษ",
        "definition": "",
        "example": "I need a blank sheet of paper.",
        "exampleTranslation": "ฉันต้องการกระดาษเปล่าหนึ่งแผ่น"
    },
    {
        "word": "shelf",
        "partOfSpeech": "noun",
        "translation": "หิ้ง",
        "definition": "",
        "example": "Put the book on the top shelf.",
        "exampleTranslation": "วางหนังสือบนชั้นบนสุด"
    },
    {
        "word": "shell",
        "partOfSpeech": "noun",
        "translation": "หอย",
        "definition": "",
        "example": "We collected shells on the beach.",
        "exampleTranslation": "พวกเราเก็บเปลือกหอยบนชายหาด"
    },
    {
        "word": "shelter",
        "partOfSpeech": "noun",
        "translation": "ที่พักอาศัย",
        "definition": "",
        "example": "We found shelter from the rain.",
        "exampleTranslation": "พวกเราหาที่หลบฝนได้"
    },
    {
        "word": "shift",
        "partOfSpeech": "noun",
        "translation": "เลื่อน, เคลื่อน",
        "definition": "",
        "example": "He works the night shift.",
        "exampleTranslation": "เขาทำงานกะกลางคืน"
    },
    {
        "word": "shine",
        "partOfSpeech": "noun",
        "translation": "ส่องแสง",
        "definition": "",
        "example": "The sun is shining.",
        "exampleTranslation": "ดวงอาทิตย์กำลังส่องแสง"
    },
    {
        "word": "shiny",
        "partOfSpeech": "noun",
        "translation": "ส่องสว่าง, เปล่งแสง",
        "definition": "",
        "example": "She has shiny black hair.",
        "exampleTranslation": "เธอมีผมสีดำเงางาม"
    },
    {
        "word": "ship",
        "partOfSpeech": "noun",
        "translation": "เรือ, ส่ง",
        "definition": "",
        "example": "The ship sailed across the ocean.",
        "exampleTranslation": "เรือแล่นข้ามมหาสมุทร"
    },
    {
        "word": "shirt",
        "partOfSpeech": "noun",
        "translation": "เสื้อเชิ้ต",
        "definition": "",
        "example": "He is wearing a blue shirt.",
        "exampleTranslation": "เขาสวมเสื้อเชิ้ตสีฟ้า"
    },
    {
        "word": "shock",
        "partOfSpeech": "noun",
        "translation": "ความสะดุ้งตกใจ",
        "definition": "",
        "example": "The news came as a shock.",
        "exampleTranslation": "ข่าวนั้นทำให้ตกใจมาก"
    },
    {
        "word": "shocking",
        "partOfSpeech": "verb",
        "translation": "เขย่าขวัญ",
        "definition": "",
        "example": "It was a shocking discovery.",
        "exampleTranslation": "มันเป็นการค้นพบที่น่าตกใจ"
    },
    {
        "word": "shoe",
        "partOfSpeech": "noun",
        "translation": "รองเท้า",
        "definition": "",
        "example": "My left shoe is missing.",
        "exampleTranslation": "รองเท้าข้างซ้ายของฉันหายไป"
    },
    {
        "word": "shoot",
        "partOfSpeech": "noun",
        "translation": "ยิง",
        "definition": "",
        "example": "Do not shoot!",
        "exampleTranslation": "อย่ายิง!"
    },
    {
        "word": "shop",
        "partOfSpeech": "noun",
        "translation": "ร้านค้า",
        "definition": "",
        "example": "I need to go to the shop.",
        "exampleTranslation": "ฉันต้องไปที่ร้าน"
    },
    {
        "word": "shopping",
        "partOfSpeech": "noun",
        "translation": "การเดินดูและซื้อของตามร้าน",
        "definition": "",
        "example": "We went shopping for clothes.",
        "exampleTranslation": "พวกเราไปซื้อเสื้อผ้า"
    },
    {
        "word": "short",
        "partOfSpeech": "adjective",
        "translation": "สั้น",
        "definition": "",
        "example": "She has short hair.",
        "exampleTranslation": "เธอมีผมสั้น"
    },
    {
        "word": "shortly",
        "partOfSpeech": "adverb",
        "translation": "ในไม่ช้า อย่างย่อๆ",
        "definition": "",
        "example": "We will arrive shortly.",
        "exampleTranslation": "พวกเราจะไปถึงในไม่ช้า"
    },
    {
        "word": "shot",
        "partOfSpeech": "noun",
        "translation": "การยิง",
        "definition": "",
        "example": "I heard a gun shot.",
        "exampleTranslation": "ฉันได้ยินเสียงปืน"
    },
    {
        "word": "should",
        "partOfSpeech": "noun",
        "translation": "ควรจะ (กริยาช่อง 2 ของ )",
        "definition": "",
        "example": "You should go to sleep.",
        "exampleTranslation": "คุณควรไปนอน"
    },
    {
        "word": "shoulder",
        "partOfSpeech": "noun",
        "translation": "ไหล่",
        "definition": "",
        "example": "He touched my shoulder.",
        "exampleTranslation": "เขาแตะไหล่ของฉัน"
    },
    {
        "word": "shout",
        "partOfSpeech": "noun",
        "translation": "ตะโกน",
        "definition": "",
        "example": "Do not shout at me.",
        "exampleTranslation": "อย่าตะโกนใส่ฉัน"
    },
    {
        "word": "show",
        "partOfSpeech": "noun",
        "translation": "การแสดง",
        "definition": "",
        "example": "Can you show me the way?",
        "exampleTranslation": "คุณช่วยบอกทางให้ฉันได้ไหม?"
    },
    {
        "word": "shower",
        "partOfSpeech": "verb",
        "translation": "การอาบนํ้าด้วยฝักบัว . ฝนตกปรอยๆ หิมะตกปรอยๆ",
        "definition": "",
        "example": "I will take a shower.",
        "exampleTranslation": "ฉันจะไปอาบน้ำ"
    },
    {
        "word": "shut",
        "partOfSpeech": "noun",
        "translation": "ปิด",
        "definition": "",
        "example": "Please shut the door.",
        "exampleTranslation": "โปรดปิดประตู"
    },
    {
        "word": "shy",
        "partOfSpeech": "noun",
        "translation": "ขี้อาย",
        "definition": "",
        "example": "The little boy is very shy.",
        "exampleTranslation": "เด็กชายตัวเล็กขี้อายมาก"
    },
    {
        "word": "sick",
        "partOfSpeech": "noun",
        "translation": "ป่วย",
        "definition": "",
        "example": "I feel sick today.",
        "exampleTranslation": "วันนี้ฉันรู้สึกป่วย"
    },
    {
        "word": "side",
        "partOfSpeech": "noun",
        "translation": "ข้าง ด้าน",
        "definition": "",
        "example": "Walk on the right side of the road.",
        "exampleTranslation": "เดินที่ฝั่งขวาของถนน"
    },
    {
        "word": "sideways",
        "partOfSpeech": "noun",
        "translation": "ไปด้านข้าง",
        "definition": "",
        "example": "The crab walked sideways.",
        "exampleTranslation": "ปูเดินไปด้านข้าง"
    },
    {
        "word": "sight",
        "partOfSpeech": "noun",
        "translation": "สายตา การเห็น",
        "definition": "",
        "example": "His sight is very poor.",
        "exampleTranslation": "สายตาของเขาแย่มาก"
    },
    {
        "word": "sign",
        "partOfSpeech": "noun",
        "translation": "เครื่องหมาย",
        "definition": "",
        "example": "Sign your name here.",
        "exampleTranslation": "เซ็นชื่อของคุณตรงนี้"
    },
    {
        "word": "signal",
        "partOfSpeech": "noun",
        "translation": "สัญญาณ",
        "definition": "",
        "example": "The traffic signal turned green.",
        "exampleTranslation": "สัญญาณไฟจราจรเปลี่ยนเป็นสีเขียว"
    },
    {
        "word": "signature",
        "partOfSpeech": "noun",
        "translation": "ลายเซ็น",
        "definition": "",
        "example": "We need your signature on this form.",
        "exampleTranslation": "พวกเราต้องการลายเซ็นของคุณในแบบฟอร์มนี้"
    },
    {
        "word": "significant",
        "partOfSpeech": "adjective",
        "translation": "สําคัญ",
        "definition": "",
        "example": "This is a significant change.",
        "exampleTranslation": "นี่คือการเปลี่ยนแปลงที่สำคัญ"
    },
    {
        "word": "significantly",
        "partOfSpeech": "adverb",
        "translation": "อย่างสําคัญ",
        "definition": "",
        "example": "Prices have dropped significantly.",
        "exampleTranslation": "ราคาลดลงอย่างเห็นได้ชัด"
    },
    {
        "word": "silence",
        "partOfSpeech": "noun",
        "translation": "ความเงียบ",
        "definition": "",
        "example": "The teacher asked for silence.",
        "exampleTranslation": "ครูขอความเงียบ"
    },
    {
        "word": "silent",
        "partOfSpeech": "noun",
        "translation": "เงียบ",
        "definition": "",
        "example": "Please keep silent in the library.",
        "exampleTranslation": "โปรดรักษาความเงียบในห้องสมุด"
    },
    {
        "word": "silk",
        "partOfSpeech": "noun",
        "translation": "ไหม",
        "definition": "",
        "example": "She wore a beautiful silk dress.",
        "exampleTranslation": "เธอสวมชุดผ้าไหมที่สวยงาม"
    },
    {
        "word": "silly",
        "partOfSpeech": "adverb",
        "translation": "โง่",
        "definition": "",
        "example": "Do not be silly.",
        "exampleTranslation": "อย่าทำตัวไร้สาระ"
    },
    {
        "word": "silver",
        "partOfSpeech": "noun",
        "translation": "สีเงิน",
        "definition": "",
        "example": "The coin is made of silver.",
        "exampleTranslation": "เหรียญทำจากเงิน"
    },
    {
        "word": "similar",
        "partOfSpeech": "adjective",
        "translation": "เหมือนกัน คล้ายกัน",
        "definition": "",
        "example": "Your bag is similar to mine.",
        "exampleTranslation": "กระเป๋าของคุณคล้ายกับของฉัน"
    },
    {
        "word": "similarly",
        "partOfSpeech": "adverb",
        "translation": "ในทํานองเดียวกัน เช่นเดียวกัน",
        "definition": "",
        "example": "He was dressed similarly to his brother.",
        "exampleTranslation": "เขาแต่งตัวคล้ายกับพี่ชายของเขา"
    },
    {
        "word": "simple",
        "partOfSpeech": "noun",
        "translation": "ง่าย, เรียบ",
        "definition": "",
        "example": "It is a simple question.",
        "exampleTranslation": "มันเป็นคำถามที่ง่าย"
    },
    {
        "word": "simply",
        "partOfSpeech": "adverb",
        "translation": "ง่ายๆ แท้ๆ",
        "definition": "",
        "example": "I am simply trying to help.",
        "exampleTranslation": "ฉันก็แค่พยายามจะช่วย"
    },
    {
        "word": "since",
        "partOfSpeech": "noun",
        "translation": "นับตั้งแต่นั้นมา",
        "definition": "",
        "example": "I have lived here since 2010.",
        "exampleTranslation": "ฉันอาศัยอยู่ที่นี่มาตั้งแต่ปี 2010"
    },
    {
        "word": "sincere",
        "partOfSpeech": "adverb",
        "translation": "จริงใจ",
        "definition": "",
        "example": "He gave a sincere apology.",
        "exampleTranslation": "เขากล่าวคำขอโทษอย่างจริงใจ"
    },
    {
        "word": "sincerely",
        "partOfSpeech": "adverb",
        "translation": "อย่างจริงใจ อย่างใจซื่อ อย่างแท้จริง",
        "definition": "",
        "example": "Yours sincerely, John Smith.",
        "exampleTranslation": "ขอแสดงความนับถือ จอห์น สมิธ"
    },
    {
        "word": "sing",
        "partOfSpeech": "verb",
        "translation": "ร้องเพลง",
        "definition": "",
        "example": "She likes to sing in the shower.",
        "exampleTranslation": "เธอชอบร้องเพลงตอนอาบน้ำ"
    },
    {
        "word": "singer",
        "partOfSpeech": "noun",
        "translation": "นักร้อง",
        "definition": "",
        "example": "He is a famous singer.",
        "exampleTranslation": "เขาเป็นนักร้องที่มีชื่อเสียง"
    },
    {
        "word": "singing",
        "partOfSpeech": "verb",
        "translation": "การร้องเพลง",
        "definition": "",
        "example": "I heard the birds singing.",
        "exampleTranslation": "ฉันได้ยินเสียงนกร้อง"
    },
    {
        "word": "single",
        "partOfSpeech": "adjective",
        "translation": "เดียว เป็นโสด",
        "definition": "",
        "example": "He is a single man.",
        "exampleTranslation": "เขาเป็นผู้ชายโสด"
    },
    {
        "word": "sink",
        "partOfSpeech": "noun",
        "translation": "จม",
        "definition": "",
        "example": "Put the dirty dishes in the sink.",
        "exampleTranslation": "ใส่จานที่สกปรกในอ่างล้างจาน"
    },
    {
        "word": "sir",
        "partOfSpeech": "noun",
        "translation": "ท่าน",
        "definition": "",
        "example": "Yes, sir.",
        "exampleTranslation": "ครับผม"
    },
    {
        "word": "sister",
        "partOfSpeech": "noun",
        "translation": "พี่สาว น้องสาว",
        "definition": "",
        "example": "I have one sister.",
        "exampleTranslation": "ฉันมีน้องสาวหนึ่งคน"
    },
    {
        "word": "sit",
        "partOfSpeech": "noun",
        "translation": "นั่ง",
        "definition": "",
        "example": "Please sit down.",
        "exampleTranslation": "โปรดนั่งลง"
    },
    {
        "word": "site",
        "partOfSpeech": "noun",
        "translation": "ตําแหน่ง แหล่งที่ตั้ง",
        "definition": "",
        "example": "This is a building site.",
        "exampleTranslation": "นี่คือสถานที่ก่อสร้าง"
    },
    {
        "word": "situation",
        "partOfSpeech": "noun",
        "translation": "สถานการณ์",
        "definition": "",
        "example": "This is a difficult situation.",
        "exampleTranslation": "นี่เป็นสถานการณ์ที่ยากลำบาก"
    },
    {
        "word": "six",
        "partOfSpeech": "noun",
        "translation": "หก",
        "definition": "",
        "example": "I work six days a week.",
        "exampleTranslation": "ฉันทำงานหกวันต่อสัปดาห์"
    },
    {
        "word": "sixteen",
        "partOfSpeech": "noun",
        "translation": "สิบหก",
        "definition": "",
        "example": "My brother is sixteen years old.",
        "exampleTranslation": "น้องชายของฉันอายุสิบหกปี"
    },
    {
        "word": "sixty",
        "partOfSpeech": "noun",
        "translation": "หกสิบ",
        "definition": "",
        "example": "There are sixty seconds in a minute.",
        "exampleTranslation": "มีหกสิบวินาทีในหนึ่งนาที"
    },
    {
        "word": "size",
        "partOfSpeech": "noun",
        "translation": "ขนาด",
        "definition": "",
        "example": "What size do you wear?",
        "exampleTranslation": "คุณใส่ไซส์อะไร?"
    },
    {
        "word": "skilful",
        "partOfSpeech": "noun",
        "translation": "มีฝีมือ เชี่ยวชาญ",
        "definition": "",
        "example": "He is a skilful player.",
        "exampleTranslation": "เขาเป็นผู้เล่นที่มีทักษะ"
    },
    {
        "word": "skill",
        "partOfSpeech": "noun",
        "translation": "ฝีมือ ทักษะ",
        "definition": "",
        "example": "Reading is an important skill.",
        "exampleTranslation": "การอ่านเป็นทักษะที่สำคัญ"
    },
    {
        "word": "skilled",
        "partOfSpeech": "verb",
        "translation": "เชี่ยวชาญ, ชํานาญ",
        "definition": "",
        "example": "She is a skilled worker.",
        "exampleTranslation": "เธอเป็นคนงานที่มีฝีมือ"
    },
    {
        "word": "skin",
        "partOfSpeech": "noun",
        "translation": "ผิว",
        "definition": "",
        "example": "The apple has a red skin.",
        "exampleTranslation": "แอปเปิลมีเปลือกสีแดง"
    },
    {
        "word": "skirt",
        "partOfSpeech": "noun",
        "translation": "กระโปรง",
        "definition": "",
        "example": "She is wearing a blue skirt.",
        "exampleTranslation": "เธอสวมกระโปรงสีฟ้า"
    },
    {
        "word": "sky",
        "partOfSpeech": "noun",
        "translation": "ท้องฟ้า",
        "definition": "",
        "example": "The sky is blue today.",
        "exampleTranslation": "วันนี้ท้องฟ้าสีฟ้า"
    },
    {
        "word": "sleep",
        "partOfSpeech": "noun",
        "translation": "นอน",
        "definition": "",
        "example": "I need to sleep.",
        "exampleTranslation": "ฉันต้องการนอนหลับ"
    },
    {
        "word": "sleeve",
        "partOfSpeech": "noun",
        "translation": "แขนเสื้อ",
        "definition": "",
        "example": "His shirt has long sleeves.",
        "exampleTranslation": "เสื้อเชิ้ตของเขามีแขนยาว"
    },
    {
        "word": "slice",
        "partOfSpeech": "noun",
        "translation": "ชิ้นแผ่นบางๆ",
        "definition": "",
        "example": "Can I have a slice of bread?",
        "exampleTranslation": "ฉันขอขนมปังแผ่นหนึ่งได้ไหม?"
    },
    {
        "word": "slide",
        "partOfSpeech": "noun",
        "translation": "ภาพนิ่ง การเลื่อนไถล",
        "definition": "",
        "example": "The children play on the slide.",
        "exampleTranslation": "เด็กๆ เล่นกระดานลื่น"
    },
    {
        "word": "slight",
        "partOfSpeech": "noun",
        "translation": "เล็กน้อย ดูถูก",
        "definition": "",
        "example": "There is a slight problem.",
        "exampleTranslation": "มีปัญหาเล็กน้อย"
    },
    {
        "word": "slightly",
        "partOfSpeech": "adverb",
        "translation": "อย่างเล็กน้อย",
        "definition": "",
        "example": "She is slightly taller than me.",
        "exampleTranslation": "เธอสูงกว่าฉันเล็กน้อย"
    },
    {
        "word": "slip",
        "partOfSpeech": "noun",
        "translation": "ลื่นไถล ทําให้ไถลไป",
        "definition": "",
        "example": "Be careful not to slip on the wet floor.",
        "exampleTranslation": "ระวังอย่าลื่นบนพื้นเปียก"
    },
    {
        "word": "slope",
        "partOfSpeech": "noun",
        "translation": "ลาด",
        "definition": "",
        "example": "The hill has a steep slope.",
        "exampleTranslation": "เนินเขามีความลาดชันมาก"
    },
    {
        "word": "slow",
        "partOfSpeech": "verb",
        "translation": "ช้า",
        "definition": "",
        "example": "Please drive slow.",
        "exampleTranslation": "โปรดขับรถช้าๆ"
    },
    {
        "word": "slowly",
        "partOfSpeech": "adverb",
        "translation": "อย่างช้าๆ",
        "definition": "",
        "example": "The turtle walks slowly.",
        "exampleTranslation": "เต่าเดินอย่างช้าๆ"
    },
    {
        "word": "small",
        "partOfSpeech": "adjective",
        "translation": "เล็ก",
        "definition": "",
        "example": "I have a small dog.",
        "exampleTranslation": "ฉันมีสุนัขตัวเล็ก"
    },
    {
        "word": "smart",
        "partOfSpeech": "noun",
        "translation": "ฉลาด เนีѹยบ",
        "definition": "",
        "example": "He is a smart student.",
        "exampleTranslation": "เขาเป็นนักเรียนที่ฉลาด"
    },
    {
        "word": "smash",
        "partOfSpeech": "noun",
        "translation": "ตีแตกละเอียด",
        "definition": "",
        "example": "He accidentally smashed the window.",
        "exampleTranslation": "เขาเผลอทำหน้าต่างแตก"
    },
    {
        "word": "smell",
        "partOfSpeech": "noun",
        "translation": "กลิ่น",
        "definition": "",
        "example": "The flower smells good.",
        "exampleTranslation": "ดอกไม้มีกลิ่นหอม"
    },
    {
        "word": "smile",
        "partOfSpeech": "noun",
        "translation": "ยิ้ม",
        "definition": "",
        "example": "She gave me a big smile.",
        "exampleTranslation": "เธอยิ้มกว้างให้ฉัน"
    },
    {
        "word": "smoke",
        "partOfSpeech": "noun",
        "translation": "สูบบุหรี่",
        "definition": "",
        "example": "There is smoke coming from the fire.",
        "exampleTranslation": "มีควันออกมาจากกองไฟ"
    },
    {
        "word": "smoking",
        "partOfSpeech": "noun",
        "translation": "การสูบบุหรี่",
        "definition": "",
        "example": "Smoking is bad for your health.",
        "exampleTranslation": "การสูบบุหรี่ไม่ดีต่อสุขภาพของคุณ"
    },
    {
        "word": "smooth",
        "partOfSpeech": "noun",
        "translation": "เรียบ",
        "definition": "",
        "example": "The stone is very smooth.",
        "exampleTranslation": "ก้อนหินเรียบเนียนมาก"
    },
    {
        "word": "snake",
        "partOfSpeech": "noun",
        "translation": "งู",
        "definition": "",
        "example": "I am afraid of snakes.",
        "exampleTranslation": "ฉันกลัวงู"
    },
    {
        "word": "snow",
        "partOfSpeech": "noun",
        "translation": "หิมะ",
        "definition": "",
        "example": "The snow is white and cold.",
        "exampleTranslation": "หิมะมีสีขาวและเย็น"
    },
    {
        "word": "so",
        "partOfSpeech": "adverb",
        "translation": "ดังนั้น",
        "definition": "",
        "example": "I am so tired.",
        "exampleTranslation": "ฉันเหนื่อยมาก"
    },
    {
        "word": "soap",
        "partOfSpeech": "noun",
        "translation": "สบู่",
        "definition": "",
        "example": "Use soap to wash your hands.",
        "exampleTranslation": "ใช้สบู่ล้างมือของคุณ"
    },
    {
        "word": "social",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับสังคม",
        "definition": "",
        "example": "She is a very social person.",
        "exampleTranslation": "เธอเป็นคนที่เข้าสังคมเก่งมาก"
    },
    {
        "word": "society",
        "partOfSpeech": "noun",
        "translation": "สังคม",
        "definition": "",
        "example": "We live in a modern society.",
        "exampleTranslation": "พวกเราอาศัยอยู่ในสังคมสมัยใหม่"
    },
    {
        "word": "sock",
        "partOfSpeech": "noun",
        "translation": "ถุงเท้าสั้น",
        "definition": "",
        "example": "I lost one sock.",
        "exampleTranslation": "ฉันทำถุงเท้าหายหนึ่งข้าง"
    },
    {
        "word": "soft",
        "partOfSpeech": "adjective",
        "translation": "อ่อน, อ่อนนุ่ม",
        "definition": "",
        "example": "The pillow is very soft.",
        "exampleTranslation": "หมอนนุ่มมาก"
    },
    {
        "word": "software",
        "partOfSpeech": "noun",
        "translation": "ซอฟต์แวร์",
        "definition": "",
        "example": "I installed new software on my computer.",
        "exampleTranslation": "ฉันติดตั้งซอฟต์แวร์ใหม่ในคอมพิวเตอร์ของฉัน"
    },
    {
        "word": "soil",
        "partOfSpeech": "noun",
        "translation": "ดิน, พื้นดิน",
        "definition": "",
        "example": "The plant needs good soil.",
        "exampleTranslation": "พืชต้องการดินที่ดี"
    },
    {
        "word": "soldier",
        "partOfSpeech": "noun",
        "translation": "ทหาร",
        "definition": "",
        "example": "The soldier wore a uniform.",
        "exampleTranslation": "ทหารสวมเครื่องแบบ"
    },
    {
        "word": "solid",
        "partOfSpeech": "adjective",
        "translation": "ของแข็ง",
        "definition": "",
        "example": "Ice is solid water.",
        "exampleTranslation": "น้ำแข็งคือน้ำที่แข็งตัวเป็นของแข็ง"
    },
    {
        "word": "solution",
        "partOfSpeech": "noun",
        "translation": "วิธีแก้ การแก้(ปัญหา)",
        "definition": "",
        "example": "What is the solution to this problem?",
        "exampleTranslation": "วิธีแก้ปัญหนี้คืออะไร?"
    },
    {
        "word": "solve",
        "partOfSpeech": "noun",
        "translation": "แก้ปัญหา, แก้ไข",
        "definition": "",
        "example": "Can you solve this puzzle?",
        "exampleTranslation": "คุณสามารถแก้ปริศนานี้ได้ไหม?"
    },
    {
        "word": "some",
        "partOfSpeech": "noun",
        "translation": "บางอัน บ้าง",
        "definition": "",
        "example": "Can I have some water?",
        "exampleTranslation": "ฉันขอน้ำหน่อยได้ไหม?"
    },
    {
        "word": "somebody",
        "partOfSpeech": "noun",
        "translation": "บางคน",
        "definition": "",
        "example": "Somebody is knocking on the door.",
        "exampleTranslation": "มีคนกำลังเคาะประตู"
    },
    {
        "word": "somehow",
        "partOfSpeech": "noun",
        "translation": "ด้วยเหตุผลบางประการ",
        "definition": "",
        "example": "We will get there somehow.",
        "exampleTranslation": "พวกเราจะไปถึงที่นั่นด้วยวิธีใดวิธีหนึ่ง"
    },
    {
        "word": "someone",
        "partOfSpeech": "noun",
        "translation": "บางคน",
        "definition": "",
        "example": "Someone stole my bag.",
        "exampleTranslation": "มีใครบางคนขโมยกระเป๋าของฉัน"
    },
    {
        "word": "something",
        "partOfSpeech": "noun",
        "translation": "บางสิ่งบางอย่าง",
        "definition": "",
        "example": "I want something to eat.",
        "exampleTranslation": "ฉันต้องการอะไรบางอย่างมากิน"
    },
    {
        "word": "sometimes",
        "partOfSpeech": "adverb",
        "translation": "บางครั้ง",
        "definition": "",
        "example": "I sometimes go for a walk.",
        "exampleTranslation": "บางครั้งฉันก็ไปเดินเล่น"
    },
    {
        "word": "somewhat",
        "partOfSpeech": "adverb",
        "translation": "บ้าง",
        "definition": "",
        "example": "I was somewhat surprised by the news.",
        "exampleTranslation": "ฉันค่อนข้างประหลาดใจกับข่าวนั้น"
    },
    {
        "word": "somewhere",
        "partOfSpeech": "adverb",
        "translation": "บางแห่ง",
        "definition": "",
        "example": "My keys are somewhere in this room.",
        "exampleTranslation": "กุญแจของฉันอยู่ที่ไหนสักแห่งในห้องนี้"
    },
    {
        "word": "son",
        "partOfSpeech": "noun",
        "translation": "ลูกชาย",
        "definition": "",
        "example": "His son is five years old.",
        "exampleTranslation": "ลูกชายของเขาอายุห้าขวบ"
    },
    {
        "word": "song",
        "partOfSpeech": "noun",
        "translation": "เพลง",
        "definition": "",
        "example": "She sang a beautiful song.",
        "exampleTranslation": "เธอร้องเพลงที่ไพเราะ"
    },
    {
        "word": "soon",
        "partOfSpeech": "adverb",
        "translation": "ในไม่ช้า",
        "definition": "",
        "example": "See you soon!",
        "exampleTranslation": "แล้วพบกันใหม่เร็วๆ นี้!"
    },
    {
        "word": "sore",
        "partOfSpeech": "noun",
        "translation": "เจ็บ",
        "definition": "",
        "example": "My throat is sore.",
        "exampleTranslation": "ฉันเจ็บคอ"
    },
    {
        "word": "sorry",
        "partOfSpeech": "noun",
        "translation": "เสียใจ เศร้าใจ",
        "definition": "",
        "example": "I am sorry for being late.",
        "exampleTranslation": "ฉันขอโทษที่มาสาย"
    },
    {
        "word": "sort",
        "partOfSpeech": "noun",
        "translation": "ชนิด เรียง",
        "definition": "",
        "example": "What sort of music do you like?",
        "exampleTranslation": "คุณชอบดนตรีประเภทไหน?"
    },
    {
        "word": "soul",
        "partOfSpeech": "noun",
        "translation": "จิตวิญญาณ",
        "definition": "",
        "example": "Music is good for the soul.",
        "exampleTranslation": "ดนตรีเป็นสิ่งที่ดีต่อจิตวิญญาณ"
    },
    {
        "word": "sound",
        "partOfSpeech": "noun",
        "translation": "เสียง",
        "definition": "",
        "example": "I heard a strange sound.",
        "exampleTranslation": "ฉันได้ยินเสียงแปลกๆ"
    },
    {
        "word": "soup",
        "partOfSpeech": "noun",
        "translation": "ซุป",
        "definition": "",
        "example": "I like chicken soup.",
        "exampleTranslation": "ฉันชอบซุปไก่"
    },
    {
        "word": "sour",
        "partOfSpeech": "noun",
        "translation": "เปรี้ยว",
        "definition": "",
        "example": "The lemon is very sour.",
        "exampleTranslation": "มะนาวเปรี้ยวมาก"
    },
    {
        "word": "source",
        "partOfSpeech": "noun",
        "translation": "แหล่ง แหล่งที่มา",
        "definition": "",
        "example": "The sun is our source of energy.",
        "exampleTranslation": "ดวงอาทิตย์คือแหล่งพลังงานของเรา"
    },
    {
        "word": "south",
        "partOfSpeech": "noun",
        "translation": "ใต้ ทางทิศใต้",
        "definition": "",
        "example": "The birds fly south in winter.",
        "exampleTranslation": "นกบินไปทางทิศใต้ในฤดูหนาว"
    },
    {
        "word": "southern",
        "partOfSpeech": "adjective",
        "translation": "ทางใต้",
        "definition": "",
        "example": "He has a southern accent.",
        "exampleTranslation": "เขามีสำเนียงทางใต้"
    },
    {
        "word": "space",
        "partOfSpeech": "noun",
        "translation": "อวกาศ",
        "definition": "",
        "example": "There is no space in the car.",
        "exampleTranslation": "ไม่มีที่ว่างในรถ"
    },
    {
        "word": "spare",
        "partOfSpeech": "noun",
        "translation": "ออม, เจียด",
        "definition": "",
        "example": "Do you have a spare pen?",
        "exampleTranslation": "คุณมีปากกาสำรองไหม?"
    },
    {
        "word": "speak",
        "partOfSpeech": "noun",
        "translation": "สนทนา พูด",
        "definition": "",
        "example": "Do you speak English?",
        "exampleTranslation": "คุณพูดภาษาอังกฤษได้ไหม?"
    },
    {
        "word": "speaker",
        "partOfSpeech": "noun",
        "translation": "ผู้พูด เครื่องขยายเสียง",
        "definition": "",
        "example": "The speaker gave a great speech.",
        "exampleTranslation": "ผู้พูดกล่าวสุนทรพจน์ได้ยอดเยี่ยม"
    },
    {
        "word": "special",
        "partOfSpeech": "adjective",
        "translation": "พิเศษ",
        "definition": "",
        "example": "Today is a special day.",
        "exampleTranslation": "วันนี้เป็นวันพิเศษ"
    },
    {
        "word": "specialist",
        "partOfSpeech": "noun",
        "translation": "ผู้เชี่ยวชาญ",
        "definition": "",
        "example": "You should see an eye specialist.",
        "exampleTranslation": "คุณควรไปพบแพทย์ผู้เชี่ยวชาญด้านสายตา"
    },
    {
        "word": "specially",
        "partOfSpeech": "adverb",
        "translation": "อย่างเฉพาะเจาะจง อย่างพิเศษ",
        "definition": "",
        "example": "I made this specially for you.",
        "exampleTranslation": "ฉันทำสิ่งนี้เป็นพิเศษสำหรับคุณ"
    },
    {
        "word": "specific",
        "partOfSpeech": "adjective",
        "translation": "โดยเฉพาะ เจาะจง",
        "definition": "",
        "example": "Can you be more specific?",
        "exampleTranslation": "คุณช่วยระบุให้ชัดเจนกว่านี้ได้ไหม?"
    },
    {
        "word": "specifically",
        "partOfSpeech": "adverb",
        "translation": "โดยจําเพาะ, โดยพันธุ์",
        "definition": "",
        "example": "I specifically asked for no onions.",
        "exampleTranslation": "ฉันระบุไว้อย่างชัดเจนว่าไม่ใส่หัวหอม"
    },
    {
        "word": "speech",
        "partOfSpeech": "noun",
        "translation": "การพูด คําปราศรัย",
        "definition": "",
        "example": "He gave a long speech.",
        "exampleTranslation": "เขากล่าวสุนทรพจน์ยาว"
    },
    {
        "word": "speed",
        "partOfSpeech": "noun",
        "translation": "ความเร็ว",
        "definition": "",
        "example": "Do not drive at a high speed.",
        "exampleTranslation": "อย่าขับรถด้วยความเร็วสูง"
    },
    {
        "word": "spell",
        "partOfSpeech": "noun",
        "translation": "อ่านสะกดคํา",
        "definition": "",
        "example": "How do you spell your name?",
        "exampleTranslation": "คุณสะกดชื่อของคุณอย่างไร?"
    },
    {
        "word": "spelling",
        "partOfSpeech": "verb",
        "translation": "การสะกดคํา",
        "definition": "",
        "example": "Her spelling is very good.",
        "exampleTranslation": "การสะกดคำของเธอดีมาก"
    },
    {
        "word": "spend",
        "partOfSpeech": "noun",
        "translation": "ใช้จ่าย",
        "definition": "",
        "example": "I spend a lot of time reading.",
        "exampleTranslation": "ฉันใช้เวลาอ่านหนังสือมาก"
    },
    {
        "word": "spice",
        "partOfSpeech": "noun",
        "translation": "เครื่องเทศ",
        "definition": "",
        "example": "Add some spice to the food.",
        "exampleTranslation": "ใส่เครื่องเทศลงในอาหารเล็กน้อย"
    },
    {
        "word": "spicy",
        "partOfSpeech": "noun",
        "translation": "ใส่เครื่องเทศ เผ็ดร้อน",
        "definition": "",
        "example": "I love spicy food.",
        "exampleTranslation": "ฉันชอบอาหารรสเผ็ด"
    },
    {
        "word": "spider",
        "partOfSpeech": "noun",
        "translation": "แมงมุม",
        "definition": "",
        "example": "A spider has eight legs.",
        "exampleTranslation": "แมงมุมมีแปดขา"
    },
    {
        "word": "spin",
        "partOfSpeech": "noun",
        "translation": "ปั่น",
        "definition": "",
        "example": "The earth spins on its axis.",
        "exampleTranslation": "โลกหมุนรอบแกนของตัวเอง"
    },
    {
        "word": "spirit",
        "partOfSpeech": "noun",
        "translation": "วิญญาณ",
        "definition": "",
        "example": "They showed great team spirit.",
        "exampleTranslation": "พวกเขาแสดงสปิริตของทีมที่ยอดเยี่ยม"
    },
    {
        "word": "spiritual",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับจิตวิญญาณ",
        "definition": "",
        "example": "She has a deep spiritual belief.",
        "exampleTranslation": "เธอมีความเชื่อทางจิตวิญญาณอย่างลึกซึ้ง"
    },
    {
        "word": "spite",
        "partOfSpeech": "noun",
        "translation": "เจตนาร้าย มุ่งร้าย",
        "definition": "",
        "example": "She did it out of spite.",
        "exampleTranslation": "เธอทำไปด้วยความโกรธแค้น"
    },
    {
        "word": "split",
        "partOfSpeech": "noun",
        "translation": "แยก",
        "definition": "",
        "example": "They split the money equally.",
        "exampleTranslation": "พวกเขาแบ่งเงินกันเท่าๆ กัน"
    },
    {
        "word": "spoil",
        "partOfSpeech": "noun",
        "translation": "เสีย",
        "definition": "",
        "example": "The rain will spoil our picnic.",
        "exampleTranslation": "ฝนจะทำให้การไปปิกนิกของพวกเราหมดสนุก"
    },
    {
        "word": "spoon",
        "partOfSpeech": "noun",
        "translation": "ช้อน",
        "definition": "",
        "example": "Use a spoon to eat the soup.",
        "exampleTranslation": "ใช้ช้อนเพื่อรับประทานซุป"
    },
    {
        "word": "sport",
        "partOfSpeech": "noun",
        "translation": "กีฬา",
        "definition": "",
        "example": "Football is a popular sport.",
        "exampleTranslation": "ฟุตบอลเป็นกีฬาที่ได้รับความนิยม"
    },
    {
        "word": "spot",
        "partOfSpeech": "noun",
        "translation": "เป็นจุด เปื้อน",
        "definition": "",
        "example": "There is a spot on your shirt.",
        "exampleTranslation": "มีรอยเปื้อนบนเสื้อของคุณ"
    },
    {
        "word": "spray",
        "partOfSpeech": "verb",
        "translation": "ละอองนํ้า, .",
        "definition": "",
        "example": "Spray some perfume.",
        "exampleTranslation": "ฉีดน้ำหอมสักหน่อย"
    },
    {
        "word": "spread",
        "partOfSpeech": "noun",
        "translation": "แพร่, กระจาย",
        "definition": "",
        "example": "Spread the butter on the bread.",
        "exampleTranslation": "ทาเนยลงบนขนมปัง"
    },
    {
        "word": "spring",
        "partOfSpeech": "noun",
        "translation": "ฤดูใบไม้ผลิ",
        "definition": "",
        "example": "Flowers bloom in the spring.",
        "exampleTranslation": "ดอกไม้บานในฤดูใบไม้ผลิ"
    },
    {
        "word": "square",
        "partOfSpeech": "noun",
        "translation": "จัตุรัส",
        "definition": "",
        "example": "A square has four equal sides.",
        "exampleTranslation": "สี่เหลี่ยมจัตุรัสมีสี่ด้านที่เท่ากัน"
    },
    {
        "word": "squeeze",
        "partOfSpeech": "noun",
        "translation": "บีบ, รัด",
        "definition": "",
        "example": "Squeeze the lemon juice into the bowl.",
        "exampleTranslation": "บีบน้ำมะนาวลงในชาม"
    },
    {
        "word": "stable",
        "partOfSpeech": "adjective",
        "translation": "มั่นคง",
        "definition": "",
        "example": "The patient condition is stable.",
        "exampleTranslation": "อาการของผู้ป่วยคงที่แล้ว"
    },
    {
        "word": "staff",
        "partOfSpeech": "noun",
        "translation": "คณะผู้ร่วมงาน, เสาคํ้า",
        "definition": "",
        "example": "The hotel staff are very friendly.",
        "exampleTranslation": "พนักงานโรงแรมเป็นมิตรมาก"
    },
    {
        "word": "stage",
        "partOfSpeech": "noun",
        "translation": "เวที",
        "definition": "",
        "example": "The actor walked onto the stage.",
        "exampleTranslation": "นักแสดงเดินขึ้นไปบนเวที"
    },
    {
        "word": "stair",
        "partOfSpeech": "noun",
        "translation": "บันได",
        "definition": "",
        "example": "He ran up the stairs.",
        "exampleTranslation": "เขาวิ่งขึ้นบันไดไป"
    },
    {
        "word": "stamp",
        "partOfSpeech": "noun",
        "translation": "ดวงตราไปรษณียากร ประทับตรา",
        "definition": "",
        "example": "I need a stamp for this letter.",
        "exampleTranslation": "ฉันต้องการแสตมป์สำหรับจดหมายฉบับนี้"
    },
    {
        "word": "stand",
        "partOfSpeech": "noun",
        "translation": "ยืน ตั้ง",
        "definition": "",
        "example": "Please stand up.",
        "exampleTranslation": "โปรดยืนขึ้น"
    },
    {
        "word": "standard",
        "partOfSpeech": "noun",
        "translation": "มาตรฐาน",
        "definition": "",
        "example": "Their products are of a high standard.",
        "exampleTranslation": "ผลิตภัณฑ์ของพวกเขามีมาตรฐานสูง"
    },
    {
        "word": "star",
        "partOfSpeech": "noun",
        "translation": "ดาว",
        "definition": "",
        "example": "Look at the stars in the sky.",
        "exampleTranslation": "ดูดวงดาวบนท้องฟ้าสิ"
    },
    {
        "word": "stare",
        "partOfSpeech": "noun",
        "translation": "จ้องมอง",
        "definition": "",
        "example": "Why are you staring at me?",
        "exampleTranslation": "คุณจ้องมองฉันทำไม?"
    },
    {
        "word": "start",
        "partOfSpeech": "noun",
        "translation": "เริ่ม",
        "definition": "",
        "example": "The race will start soon.",
        "exampleTranslation": "การแข่งขันจะเริ่มในไม่ช้า"
    },
    {
        "word": "state",
        "partOfSpeech": "noun",
        "translation": "สภาพ รัฐ",
        "definition": "",
        "example": "Water is in a liquid state.",
        "exampleTranslation": "น้ำอยู่ในสถานะของเหลว"
    },
    {
        "word": "statement",
        "partOfSpeech": "noun",
        "translation": "คําแถลง บัญชีการเงิน",
        "definition": "",
        "example": "He made a public statement.",
        "exampleTranslation": "เขาได้แถลงการณ์ต่อสาธารณะ"
    },
    {
        "word": "station",
        "partOfSpeech": "noun",
        "translation": "สถานี",
        "definition": "",
        "example": "We waited at the train station.",
        "exampleTranslation": "พวกเรารอที่สถานีรถไฟ"
    },
    {
        "word": "statue",
        "partOfSpeech": "noun",
        "translation": "รูปปั้น รูปสลัก",
        "definition": "",
        "example": "There is a statue in the park.",
        "exampleTranslation": "มีรูปปั้นอยู่ในสวนสาธารณะ"
    },
    {
        "word": "status",
        "partOfSpeech": "noun",
        "translation": "สถานภาพ",
        "definition": "",
        "example": "What is your marital status?",
        "exampleTranslation": "สถานภาพการสมรสของคุณคืออะไร?"
    },
    {
        "word": "stay",
        "partOfSpeech": "noun",
        "translation": "อยู่ พักอยู่",
        "definition": "",
        "example": "I will stay here.",
        "exampleTranslation": "ฉันจะอยู่ที่นี่"
    },
    {
        "word": "steady",
        "partOfSpeech": "adjective",
        "translation": "มั่นคง",
        "definition": "",
        "example": "Keep a steady pace.",
        "exampleTranslation": "รักษาความเร็วให้คงที่"
    },
    {
        "word": "steal",
        "partOfSpeech": "noun",
        "translation": "ขโมย",
        "definition": "",
        "example": "Someone tried to steal my bike.",
        "exampleTranslation": "มีคนพยายามขโมยจักรยานของฉัน"
    },
    {
        "word": "steam",
        "partOfSpeech": "noun",
        "translation": "ไอนํ้า, ไอ",
        "definition": "",
        "example": "The water turned into steam.",
        "exampleTranslation": "น้ำกลายเป็นไอน้ำ"
    },
    {
        "word": "steel",
        "partOfSpeech": "noun",
        "translation": "เหล็กกล้า",
        "definition": "",
        "example": "The bridge is made of steel.",
        "exampleTranslation": "สะพานทำจากเหล็ก"
    },
    {
        "word": "steep",
        "partOfSpeech": "noun",
        "translation": "สูงชัน",
        "definition": "",
        "example": "The hill is very steep.",
        "exampleTranslation": "เนินเขานี้ชันมาก"
    },
    {
        "word": "steer",
        "partOfSpeech": "noun",
        "translation": "คัดท้าย ถือพวงมาลัย",
        "definition": "",
        "example": "Use the steering wheel to steer the car.",
        "exampleTranslation": "ใช้พวงมาลัยเพื่อบังคับทิศทางรถ"
    },
    {
        "word": "step",
        "partOfSpeech": "noun",
        "translation": "ก้าว, จังหวะ",
        "definition": "",
        "example": "Take one step forward.",
        "exampleTranslation": "ก้าวไปข้างหน้าหนึ่งก้าว"
    },
    {
        "word": "stick",
        "partOfSpeech": "noun",
        "translation": "กิ่งไม้",
        "definition": "",
        "example": "Use a stick to stir the paint.",
        "exampleTranslation": "ใช้ไม้คนสี"
    },
    {
        "word": "sticky",
        "partOfSpeech": "noun",
        "translation": "เหนียว",
        "definition": "",
        "example": "Honey is very sticky.",
        "exampleTranslation": "น้ำผึ้งเหนียวมาก"
    },
    {
        "word": "stiff",
        "partOfSpeech": "noun",
        "translation": "แข็งทื่อ",
        "definition": "",
        "example": "My neck is stiff.",
        "exampleTranslation": "คอของฉันแข็งเกร็ง"
    },
    {
        "word": "still",
        "partOfSpeech": "adverb",
        "translation": "ยังเป็นอยู่ แม้กระนั้น",
        "definition": "",
        "example": "Are you still here?",
        "exampleTranslation": "คุณยังอยู่ที่นี่เหรอ?"
    },
    {
        "word": "sting",
        "partOfSpeech": "verb",
        "translation": "ต่อย",
        "definition": "",
        "example": "A bee can sting you.",
        "exampleTranslation": "ผึ้งสามารถต่อยคุณได้"
    },
    {
        "word": "stir",
        "partOfSpeech": "noun",
        "translation": "กวน, คน",
        "definition": "",
        "example": "Stir the soup with a spoon.",
        "exampleTranslation": "คนซุปด้วยช้อน"
    },
    {
        "word": "stock",
        "partOfSpeech": "noun",
        "translation": "คลังสินค้า พัสดุ",
        "definition": "",
        "example": "The store is out of stock.",
        "exampleTranslation": "ร้านค้าไม่มีสินค้าในสต็อก"
    },
    {
        "word": "stomach",
        "partOfSpeech": "noun",
        "translation": "กระเพาะอาหาร",
        "definition": "",
        "example": "My stomach hurts.",
        "exampleTranslation": "ฉันปวดท้อง"
    },
    {
        "word": "stone",
        "partOfSpeech": "noun",
        "translation": "หิน กรวด",
        "definition": "",
        "example": "He threw a stone into the river.",
        "exampleTranslation": "เขาขว้างก้อนหินลงไปในแม่น้ำ"
    },
    {
        "word": "stop",
        "partOfSpeech": "noun",
        "translation": "หยุด",
        "definition": "",
        "example": "Please stop crying.",
        "exampleTranslation": "โปรดหยุดร้องไห้"
    },
    {
        "word": "store",
        "partOfSpeech": "noun",
        "translation": "ร้าน ห้องเก็บของ",
        "definition": "",
        "example": "I bought milk at the store.",
        "exampleTranslation": "ฉันซื้อนมที่ร้านค้า"
    },
    {
        "word": "storm",
        "partOfSpeech": "noun",
        "translation": "พายุ",
        "definition": "",
        "example": "There is a big storm coming.",
        "exampleTranslation": "กำลังมีพายุใหญ่พัดมา"
    },
    {
        "word": "story",
        "partOfSpeech": "noun",
        "translation": "เรื่องราว",
        "definition": "",
        "example": "Tell me a story.",
        "exampleTranslation": "เล่าเรื่องให้ฉันฟังหน่อย"
    },
    {
        "word": "stove",
        "partOfSpeech": "noun",
        "translation": "เตา",
        "definition": "",
        "example": "Turn off the stove.",
        "exampleTranslation": "ปิดเตาไฟ"
    },
    {
        "word": "straight",
        "partOfSpeech": "noun",
        "translation": "ตรง, ซื่อตรง",
        "definition": "",
        "example": "Go straight ahead.",
        "exampleTranslation": "เดินตรงไปข้างหน้า"
    },
    {
        "word": "strain",
        "partOfSpeech": "noun",
        "translation": "ทําให้ตึง, ขึงให้แน่น",
        "definition": "",
        "example": "He strained his muscle.",
        "exampleTranslation": "เขากล้ามเนื้อตึง"
    },
    {
        "word": "strange",
        "partOfSpeech": "noun",
        "translation": "แปลก ประหลาด",
        "definition": "",
        "example": "That is a strange sound.",
        "exampleTranslation": "นั่นเป็นเสียงที่แปลก"
    },
    {
        "word": "stranger",
        "partOfSpeech": "noun",
        "translation": "คนแปลกหน้า",
        "definition": "",
        "example": "Do not talk to strangers.",
        "exampleTranslation": "อย่าพูดคุยกับคนแปลกหน้า"
    },
    {
        "word": "strategy",
        "partOfSpeech": "noun",
        "translation": "ยุทธศาสตร์, ยุทธวิธี",
        "definition": "",
        "example": "We need a good strategy.",
        "exampleTranslation": "พวกเราต้องการกลยุทธ์ที่ดี"
    },
    {
        "word": "stream",
        "partOfSpeech": "noun",
        "translation": "ลําธาร, สายนํ้า",
        "definition": "",
        "example": "A small stream runs through the forest.",
        "exampleTranslation": "มีลำธารเล็กๆ ไหลผ่านป่า"
    },
    {
        "word": "street",
        "partOfSpeech": "noun",
        "translation": "ถนน",
        "definition": "",
        "example": "Look both ways before crossing the street.",
        "exampleTranslation": "มองทั้งสองข้างก่อนข้ามถนน"
    },
    {
        "word": "strength",
        "partOfSpeech": "noun",
        "translation": "ความแข็งแรง",
        "definition": "",
        "example": "He has great physical strength.",
        "exampleTranslation": "เขามีความแข็งแกร่งทางร่างกายมาก"
    },
    {
        "word": "stress",
        "partOfSpeech": "noun",
        "translation": "ความตึงเครียด",
        "definition": "",
        "example": "I am under a lot of stress.",
        "exampleTranslation": "ฉันมีความเครียดมาก"
    },
    {
        "word": "stretch",
        "partOfSpeech": "noun",
        "translation": "ยื่น, ขยายออก",
        "definition": "",
        "example": "Do some stretches before running.",
        "exampleTranslation": "ยืดเส้นยืดสายก่อนวิ่ง"
    },
    {
        "word": "strict",
        "partOfSpeech": "noun",
        "translation": "เข้มงวด, กวดขัน",
        "definition": "",
        "example": "My parents are very strict.",
        "exampleTranslation": "พ่อแม่ของฉันเข้มงวดมาก"
    },
    {
        "word": "strictly",
        "partOfSpeech": "adverb",
        "translation": "อย่างเข้มงวด",
        "definition": "",
        "example": "Smoking is strictly prohibited.",
        "exampleTranslation": "ห้ามสูบบุหรี่โดยเด็ดขาด"
    },
    {
        "word": "strike",
        "partOfSpeech": "noun",
        "translation": "ตี นัดหยุดงาน",
        "definition": "",
        "example": "The workers went on strike.",
        "exampleTranslation": "คนงานนัดหยุดงานประท้วง"
    },
    {
        "word": "striking",
        "partOfSpeech": "verb",
        "translation": "ซึ่งโดดเด่น, น่าประทับใจ",
        "definition": "",
        "example": "There is a striking resemblance between them.",
        "exampleTranslation": "พวกเขามีความคล้ายคลึงกันอย่างเห็นได้ชัด"
    },
    {
        "word": "string",
        "partOfSpeech": "noun",
        "translation": "ด้าย, เส้น",
        "definition": "",
        "example": "Tie the box with a string.",
        "exampleTranslation": "ผูกกล่องด้วยเชือก"
    },
    {
        "word": "strip",
        "partOfSpeech": "noun",
        "translation": "ลอก, ปอก",
        "definition": "",
        "example": "Cut the paper into thin strips.",
        "exampleTranslation": "ตัดกระดาษเป็นแผ่นบางๆ"
    },
    {
        "word": "stripe",
        "partOfSpeech": "noun",
        "translation": "ริ้ว, ผ้าริ้ว",
        "definition": "",
        "example": "The zebra has black and white stripes.",
        "exampleTranslation": "ม้าลายมีลายทางสีดำและสีขาว"
    },
    {
        "word": "striped",
        "partOfSpeech": "verb",
        "translation": "เป็นริ้ว เป็นลายยาว",
        "definition": "",
        "example": "She wore a striped shirt.",
        "exampleTranslation": "เธอสวมเสื้อเชิ้ตลายทาง"
    },
    {
        "word": "stroke",
        "partOfSpeech": "noun",
        "translation": "การตี การเป็นลม",
        "definition": "",
        "example": "He suffered a stroke.",
        "exampleTranslation": "เขาป่วยเป็นโรคหลอดเลือดสมอง"
    },
    {
        "word": "strong",
        "partOfSpeech": "adjective",
        "translation": "แข็งแรง",
        "definition": "",
        "example": "He is a strong man.",
        "exampleTranslation": "เขาเป็นผู้ชายที่แข็งแรง"
    },
    {
        "word": "structure",
        "partOfSpeech": "noun",
        "translation": "โครงสร้าง",
        "definition": "",
        "example": "The building has a steel structure.",
        "exampleTranslation": "อาคารมีโครงสร้างเหล็ก"
    },
    {
        "word": "struggle",
        "partOfSpeech": "noun",
        "translation": "ความพยายาม การฝ่าฟัน การดิ้นรน",
        "definition": "",
        "example": "Life is a struggle.",
        "exampleTranslation": "ชีวิตคือการต่อสู้ดิ้นรน"
    },
    {
        "word": "student",
        "partOfSpeech": "noun",
        "translation": "นักเรียน นักศึกษา",
        "definition": "",
        "example": "I am a university student.",
        "exampleTranslation": "ฉันเป็นนักศึกษามหาวิทยาลัย"
    },
    {
        "word": "studio",
        "partOfSpeech": "noun",
        "translation": "ห้องกระจายเสียงวิทยุ โทรทัศน์",
        "definition": "",
        "example": "He works in a music studio.",
        "exampleTranslation": "เขาทำงานในสตูดิโอบันทึกเสียง"
    },
    {
        "word": "study",
        "partOfSpeech": "noun",
        "translation": "ศึกษา",
        "definition": "",
        "example": "I need to study for the exam.",
        "exampleTranslation": "ฉันต้องเรียนเพื่อสอบ"
    },
    {
        "word": "stuff",
        "partOfSpeech": "noun",
        "translation": "สิ่งของ บรรจุ ยัดไส้",
        "definition": "",
        "example": "Leave your stuff here.",
        "exampleTranslation": "ทิ้งของของคุณไว้ที่นี่"
    },
    {
        "word": "stupid",
        "partOfSpeech": "adjective",
        "translation": "โง่",
        "definition": "",
        "example": "That was a stupid mistake.",
        "exampleTranslation": "นั่นเป็นความผิดพลาดที่โง่เขลา"
    },
    {
        "word": "style",
        "partOfSpeech": "noun",
        "translation": "สไตล์",
        "definition": "",
        "example": "I like her clothing style.",
        "exampleTranslation": "ฉันชอบสไตล์การแต่งตัวของเธอ"
    },
    {
        "word": "subject",
        "partOfSpeech": "noun",
        "translation": "หัวข้อ, เรื่อง",
        "definition": "",
        "example": "Math is my favorite subject.",
        "exampleTranslation": "คณิตศาสตร์เป็นวิชาที่ฉันชอบที่สุด"
    },
    {
        "word": "substance",
        "partOfSpeech": "noun",
        "translation": "สาร, สสาร",
        "definition": "",
        "example": "Water is a liquid substance.",
        "exampleTranslation": "น้ำเป็นสารของเหลว"
    },
    {
        "word": "substantial",
        "partOfSpeech": "adjective",
        "translation": "มีแก่นสาร",
        "definition": "",
        "example": "There is a substantial difference.",
        "exampleTranslation": "มีความแตกต่างอย่างมาก"
    },
    {
        "word": "substitute",
        "partOfSpeech": "verb",
        "translation": "ตัวแทน, .",
        "definition": "",
        "example": "You can substitute milk for water.",
        "exampleTranslation": "คุณสามารถใช้นมแทนน้ำได้"
    },
    {
        "word": "succeed",
        "partOfSpeech": "verb",
        "translation": "ประสบความสําเร็จ",
        "definition": "",
        "example": "I hope you succeed.",
        "exampleTranslation": "ฉันหวังว่าคุณจะประสบความสำเร็จ"
    },
    {
        "word": "success",
        "partOfSpeech": "noun",
        "translation": "ความสําเร็จ",
        "definition": "",
        "example": "The party was a great success.",
        "exampleTranslation": "งานปาร์ตี้ประสบความสำเร็จอย่างมาก"
    },
    {
        "word": "successful",
        "partOfSpeech": "adjective",
        "translation": "ที่ประสบความสําเร็จ",
        "definition": "",
        "example": "He is a successful businessman.",
        "exampleTranslation": "เขาเป็นนักธุรกิจที่ประสบความสำเร็จ"
    },
    {
        "word": "such",
        "partOfSpeech": "adjective",
        "translation": "เช่นนี้ เช่นนั้น",
        "definition": "",
        "example": "I have never seen such a beautiful flower.",
        "exampleTranslation": "ฉันไม่เคยเห็นดอกไม้ที่สวยงามเช่นนี้มาก่อน"
    },
    {
        "word": "suck",
        "partOfSpeech": "noun",
        "translation": "ดูด",
        "definition": "",
        "example": "The baby is sucking his thumb.",
        "exampleTranslation": "ทารกกำลังดูดนิ้วหัวแม่มือของเขา"
    },
    {
        "word": "sudden",
        "partOfSpeech": "adjective",
        "translation": "ทันที ทันใด",
        "definition": "",
        "example": "There was a sudden loud noise.",
        "exampleTranslation": "มีเสียงดังขึ้นอย่างกะทันหัน"
    },
    {
        "word": "suddenly",
        "partOfSpeech": "adverb",
        "translation": "อย่างกะทันหัน",
        "definition": "",
        "example": "Suddenly, the lights went out.",
        "exampleTranslation": "จู่ๆ ไฟก็ดับ"
    },
    {
        "word": "suffer",
        "partOfSpeech": "noun",
        "translation": "ทนทุกข์ทรมาน",
        "definition": "",
        "example": "He suffers from back pain.",
        "exampleTranslation": "เขาทนทุกข์ทรมานจากอาการปวดหลัง"
    },
    {
        "word": "suffering",
        "partOfSpeech": "verb",
        "translation": "ความเจ็บปวด การได้รับความทุกข์ทรมาน",
        "definition": "",
        "example": "There is too much suffering in the world.",
        "exampleTranslation": "มีความทุกข์ทรมานมากเกินไปในโลกนี้"
    },
    {
        "word": "sufficient",
        "partOfSpeech": "noun",
        "translation": "พอ พอเพียง",
        "definition": "",
        "example": "We have sufficient food for everyone.",
        "exampleTranslation": "พวกเรามีอาหารเพียงพอสำหรับทุกคน"
    },
    {
        "word": "sugar",
        "partOfSpeech": "noun",
        "translation": "นํ้าตาล",
        "definition": "",
        "example": "Do you take sugar in your tea?",
        "exampleTranslation": "คุณใส่น้ำตาลในชาไหม?"
    },
    {
        "word": "suggest",
        "partOfSpeech": "noun",
        "translation": "เสนอแนะ",
        "definition": "",
        "example": "I suggest we leave early.",
        "exampleTranslation": "ฉันแนะนำให้พวกเราออกเดินทางแต่เช้า"
    },
    {
        "word": "suggestion",
        "partOfSpeech": "noun",
        "translation": "การเสนอแนะ",
        "definition": "",
        "example": "Do you have any suggestions?",
        "exampleTranslation": "คุณมีคำแนะนำอะไรไหม?"
    },
    {
        "word": "suit",
        "partOfSpeech": "noun",
        "translation": "ชุดเสื้อผ้า เสื้อผ้าที่เป็นชุดเดียวกัน",
        "definition": "",
        "example": "He wore a black suit.",
        "exampleTranslation": "เขาสวมชุดสูทสีดำ"
    },
    {
        "word": "suitable",
        "partOfSpeech": "adjective",
        "translation": "เหมาะสม",
        "definition": "",
        "example": "Is this dress suitable for the party?",
        "exampleTranslation": "ชุดนี้เหมาะสำหรับงานปาร์ตี้ไหม?"
    },
    {
        "word": "suitcase",
        "partOfSpeech": "noun",
        "translation": "กระเป๋าเสื้อผ้ารูปสี่เหลี่ยม",
        "definition": "",
        "example": "Put your clothes in the suitcase.",
        "exampleTranslation": "ใส่เสื้อผ้าของคุณลงในกระเป๋าเดินทาง"
    },
    {
        "word": "suited",
        "partOfSpeech": "verb",
        "translation": "เหมาะสม, สมควร",
        "definition": "",
        "example": "He is well suited for the job.",
        "exampleTranslation": "เขาเหมาะสมกับงานนี้มาก"
    },
    {
        "word": "sum",
        "partOfSpeech": "noun",
        "translation": "รวม",
        "definition": "",
        "example": "The sum of two and three is five.",
        "exampleTranslation": "ผลรวมของสองและสามคือห้า"
    },
    {
        "word": "summary",
        "partOfSpeech": "noun",
        "translation": "การสรุป ใจความสําคัญ",
        "definition": "",
        "example": "Write a summary of the book.",
        "exampleTranslation": "เขียนบทสรุปของหนังสือ"
    },
    {
        "word": "summer",
        "partOfSpeech": "noun",
        "translation": "ฤดูร้อน",
        "definition": "",
        "example": "We go to the beach in summer.",
        "exampleTranslation": "พวกเราไปทะเลในฤดูร้อน"
    },
    {
        "word": "sun",
        "partOfSpeech": "noun",
        "translation": "พระอาทิตย์",
        "definition": "",
        "example": "The sun is shining brightly.",
        "exampleTranslation": "ดวงอาทิตย์กำลังส่องแสงเจิดจ้า"
    },
    {
        "word": "Sunday",
        "partOfSpeech": "noun",
        "translation": "วันอาทิตย์",
        "definition": "",
        "example": "I will see you on Sunday.",
        "exampleTranslation": "ฉันจะเจอคุณวันอาทิตย์"
    },
    {
        "word": "superior",
        "partOfSpeech": "noun",
        "translation": "เหนือกว่า, อาสุโสกว่า",
        "definition": "",
        "example": "This product is superior to the others.",
        "exampleTranslation": "ผลิตภัณฑ์นี้เหนือกว่าผลิตภัณฑ์อื่นๆ"
    },
    {
        "word": "supermarket",
        "partOfSpeech": "noun",
        "translation": "ห้างสรรพสินค้า",
        "definition": "",
        "example": "I am going to the supermarket.",
        "exampleTranslation": "ฉันกำลังจะไปซูเปอร์มาร์เก็ต"
    },
    {
        "word": "supply",
        "partOfSpeech": "noun",
        "translation": "จัดหา จัดเตรียม",
        "definition": "",
        "example": "The water supply was cut off.",
        "exampleTranslation": "การประปาถูกตัด"
    },
    {
        "word": "support",
        "partOfSpeech": "noun",
        "translation": "การสนับสนุน",
        "definition": "",
        "example": "I support your decision.",
        "exampleTranslation": "ฉันสนับสนุนการตัดสินใจของคุณ"
    },
    {
        "word": "supporter",
        "partOfSpeech": "noun",
        "translation": "ผู้สนับสนุน",
        "definition": "",
        "example": "He is a strong supporter of the team.",
        "exampleTranslation": "เขาเป็นผู้สนับสนุนที่แข็งแกร่งของทีม"
    },
    {
        "word": "suppose",
        "partOfSpeech": "noun",
        "translation": "สมมติ",
        "definition": "",
        "example": "I suppose you are right.",
        "exampleTranslation": "ฉันเดาว่าคุณน่าจะพูดถูก"
    },
    {
        "word": "sure",
        "partOfSpeech": "noun",
        "translation": "แน่นอน",
        "definition": "",
        "example": "Are you sure about that?",
        "exampleTranslation": "คุณแน่ใจเรื่องนั้นไหม?"
    },
    {
        "word": "surely",
        "partOfSpeech": "adverb",
        "translation": "แน่นอน อย่างมั่นใจ",
        "definition": "",
        "example": "Surely you must be joking!",
        "exampleTranslation": "คุณต้องล้อเล่นแน่ๆ!"
    },
    {
        "word": "surface",
        "partOfSpeech": "noun",
        "translation": "ผิวหน้า, ผิว",
        "definition": "",
        "example": "The surface of the moon is rocky.",
        "exampleTranslation": "พื้นผิวของดวงจันทร์เต็มไปด้วยหิน"
    },
    {
        "word": "surname",
        "partOfSpeech": "noun",
        "translation": "นามสกุล",
        "definition": "",
        "example": "What is your surname?",
        "exampleTranslation": "นามสกุลของคุณคืออะไร?"
    },
    {
        "word": "surprise",
        "partOfSpeech": "noun",
        "translation": "(การ)ทําให้ประหลาดใจ",
        "definition": "",
        "example": "It was a big surprise.",
        "exampleTranslation": "มันเป็นเรื่องประหลาดใจครั้งใหญ่"
    },
    {
        "word": "surprised",
        "partOfSpeech": "adjective",
        "translation": "ประหลาดใจ สะดุ้ง",
        "definition": "",
        "example": "I was surprised to see him.",
        "exampleTranslation": "ฉันประหลาดใจที่ได้เห็นเขา"
    },
    {
        "word": "surprising",
        "partOfSpeech": "noun",
        "translation": "ทําให้ประหลาดใจ ไม่คาดคิดมาก่อน",
        "definition": "",
        "example": "The result was quite surprising.",
        "exampleTranslation": "ผลลัพธ์ค่อนข้างน่าประหลาดใจ"
    },
    {
        "word": "surround",
        "partOfSpeech": "noun",
        "translation": "ล้อมรอบ",
        "definition": "",
        "example": "The house is surrounded by trees.",
        "exampleTranslation": "บ้านถูกล้อมรอบด้วยต้นไม้"
    },
    {
        "word": "surrounding",
        "partOfSpeech": "verb",
        "translation": "สภาพแวดล้อม บริเวณรอบๆ การแวดล้อม",
        "definition": "",
        "example": "The surrounding area is very beautiful.",
        "exampleTranslation": "บริเวณโดยรอบสวยงามมาก"
    },
    {
        "word": "surroundings",
        "partOfSpeech": "noun",
        "translation": "สิ่งแวดล้อม",
        "definition": "",
        "example": "I like my new surroundings.",
        "exampleTranslation": "ฉันชอบสภาพแวดล้อมใหม่ของฉัน"
    },
    {
        "word": "survey",
        "partOfSpeech": "noun",
        "translation": "สํารวจ",
        "definition": "",
        "example": "Please complete this survey.",
        "exampleTranslation": "โปรดทำแบบสำรวจนี้ให้เสร็จ"
    },
    {
        "word": "survive",
        "partOfSpeech": "noun",
        "translation": "อยู่รอด รอดตาย",
        "definition": "",
        "example": "Plants need water to survive.",
        "exampleTranslation": "พืชต้องการน้ำเพื่อความอยู่รอด"
    },
    {
        "word": "suspect",
        "partOfSpeech": "noun",
        "translation": "สงสัย, .",
        "definition": "",
        "example": "He is the main suspect.",
        "exampleTranslation": "เขาคือผู้ต้องสงสัยคนสำคัญ"
    },
    {
        "word": "suspicion",
        "partOfSpeech": "noun",
        "translation": "ความสงสัย ความกังขา",
        "definition": "",
        "example": "I have a suspicion that he lied.",
        "exampleTranslation": "ฉันมีความสงสัยว่าเขาโกหก"
    },
    {
        "word": "suspicious",
        "partOfSpeech": "adjective",
        "translation": "น่าสงสัย",
        "definition": "",
        "example": "That man looks suspicious.",
        "exampleTranslation": "ผู้ชายคนนั้นดูน่าสงสัย"
    },
    {
        "word": "swallow",
        "partOfSpeech": "noun",
        "translation": "กลืน",
        "definition": "",
        "example": "Swallow the pill with water.",
        "exampleTranslation": "กลืนยาพร้อมกับน้ำ"
    },
    {
        "word": "swear",
        "partOfSpeech": "noun",
        "translation": "สาบาน",
        "definition": "",
        "example": "Do you swear to tell the truth?",
        "exampleTranslation": "คุณสาบานว่าจะพูดความจริงไหม?"
    },
    {
        "word": "swearing",
        "partOfSpeech": "verb",
        "translation": "สาบานตนเข้ารับตําแหน่ง",
        "definition": "",
        "example": "Please stop swearing.",
        "exampleTranslation": "โปรดหยุดพูดคำหยาบ"
    },
    {
        "word": "sweat",
        "partOfSpeech": "noun",
        "translation": "เหงื่อ",
        "definition": "",
        "example": "He wiped the sweat from his face.",
        "exampleTranslation": "เขาเช็ดเหงื่อออกจากใบหน้า"
    },
    {
        "word": "sweater",
        "partOfSpeech": "noun",
        "translation": "ผู้ที่ทํางานหนัก เสื้อที่ถักด้วยขนสัตว์",
        "definition": "",
        "example": "Put on a warm sweater.",
        "exampleTranslation": "สวมเสื้อกันหนาวอุ่นๆ"
    },
    {
        "word": "sweep",
        "partOfSpeech": "noun",
        "translation": "กวาด",
        "definition": "",
        "example": "Please sweep the floor.",
        "exampleTranslation": "โปรดกวาดพื้น"
    },
    {
        "word": "sweet",
        "partOfSpeech": "noun",
        "translation": "หวาน",
        "definition": "",
        "example": "This cake is very sweet.",
        "exampleTranslation": "เค้กชิ้นนี้หวานมาก"
    },
    {
        "word": "swell",
        "partOfSpeech": "noun",
        "translation": "บวม",
        "definition": "",
        "example": "Her ankle began to swell.",
        "exampleTranslation": "ข้อเท้าของเธอเริ่มบวม"
    },
    {
        "word": "swelling",
        "partOfSpeech": "verb",
        "translation": "การบวม การพอง การโป่ง",
        "definition": "",
        "example": "Put ice on the swelling.",
        "exampleTranslation": "ประคบน้ำแข็งตรงรอยบวม"
    },
    {
        "word": "swim",
        "partOfSpeech": "noun",
        "translation": "ว่ายนํ้า",
        "definition": "",
        "example": "I like to swim in the pool.",
        "exampleTranslation": "ฉันชอบว่ายน้ำในสระ"
    },
    {
        "word": "swimming",
        "partOfSpeech": "verb",
        "translation": "การว่ายนํ้า",
        "definition": "",
        "example": "We go swimming every Sunday.",
        "exampleTranslation": "พวกเราไปว่ายน้ำทุกวันอาทิตย์"
    },
    {
        "word": "swimming pool",
        "partOfSpeech": "noun",
        "translation": "สระว่ายนํ้า",
        "definition": "",
        "example": "The hotel has a swimming pool.",
        "exampleTranslation": "โรงแรมมีสระว่ายน้ำ"
    },
    {
        "word": "swing",
        "partOfSpeech": "verb",
        "translation": "แกว่ง",
        "definition": "",
        "example": "The monkey is swinging on the tree.",
        "exampleTranslation": "ลิงกำลังโหนต้นไม้"
    },
    {
        "word": "switch",
        "partOfSpeech": "verb",
        "translation": "สวิทช์, .ปลี่ยน",
        "definition": "",
        "example": "Can you switch on the light?",
        "exampleTranslation": "คุณช่วยเปิดไฟได้ไหม?"
    },
    {
        "word": "swollen",
        "partOfSpeech": "noun",
        "translation": "บวม, ขยายใหญ่",
        "definition": "",
        "example": "My finger is swollen.",
        "exampleTranslation": "นิ้วของฉันบวม"
    },
    {
        "word": "symbol",
        "partOfSpeech": "noun",
        "translation": "สัญลักษณ์",
        "definition": "",
        "example": "The dove is a symbol of peace.",
        "exampleTranslation": "นกพิราบเป็นสัญลักษณ์ของสันติภาพ"
    },
    {
        "word": "sympathetic",
        "partOfSpeech": "adjective",
        "translation": "เห็นใจ",
        "definition": "",
        "example": "She was very sympathetic to my problem.",
        "exampleTranslation": "เธอเห็นอกเห็นใจกับปัญหาของฉันมาก"
    },
    {
        "word": "sympathy",
        "partOfSpeech": "noun",
        "translation": "ความเห็นอกเห็นใจ",
        "definition": "",
        "example": "I have deep sympathy for them.",
        "exampleTranslation": "ฉันมีความเห็นอกเห็นใจพวกเขาอย่างสุดซึ้ง"
    },
    {
        "word": "system",
        "partOfSpeech": "noun",
        "translation": "ระบบ",
        "definition": "",
        "example": "We need a better system.",
        "exampleTranslation": "พวกเราต้องการระบบที่ดีกว่านี้"
    },
    {
        "word": "table",
        "partOfSpeech": "noun",
        "translation": "โต๊ะ ตาราง",
        "definition": "",
        "example": "Set the plates on the table.",
        "exampleTranslation": "วางจานบนโต๊ะ"
    },
    {
        "word": "tablet",
        "partOfSpeech": "noun",
        "translation": "ยาเม็ดแบน",
        "definition": "",
        "example": "I read a book on my tablet.",
        "exampleTranslation": "ฉันอ่านหนังสือบนแท็บเล็ต"
    },
    {
        "word": "tackle",
        "partOfSpeech": "noun",
        "translation": "เข้ากอดรัด เล่นงาน จัดการ",
        "definition": "",
        "example": "We must tackle this problem now.",
        "exampleTranslation": "พวกเราต้องจัดการปัญหานี้เดี๋ยวนี้"
    },
    {
        "word": "tail",
        "partOfSpeech": "noun",
        "translation": "หาง",
        "definition": "",
        "example": "The dog wagged its tail.",
        "exampleTranslation": "สุนัขกระดิกหางของมัน"
    },
    {
        "word": "take",
        "partOfSpeech": "verb",
        "translation": "หยิบ จับ",
        "definition": "",
        "example": "Please take a seat.",
        "exampleTranslation": "โปรดนั่งลง"
    },
    {
        "word": "talk",
        "partOfSpeech": "noun",
        "translation": "พูด",
        "definition": "",
        "example": "Can we talk for a minute?",
        "exampleTranslation": "เราคุยกันสักนาทีได้ไหม?"
    },
    {
        "word": "tall",
        "partOfSpeech": "noun",
        "translation": "สูง",
        "definition": "",
        "example": "He is a tall man.",
        "exampleTranslation": "เขาเป็นผู้ชายตัวสูง"
    },
    {
        "word": "tank",
        "partOfSpeech": "noun",
        "translation": "ถัง รถถัง",
        "definition": "",
        "example": "The fish tank is full of water.",
        "exampleTranslation": "ตู้ปลาเต็มไปด้วยน้ำ"
    },
    {
        "word": "tap",
        "partOfSpeech": "noun",
        "translation": "เคาะ, แตะเบาๆ",
        "definition": "",
        "example": "Turn off the tap.",
        "exampleTranslation": "ปิดก๊อกน้ำ"
    },
    {
        "word": "tape",
        "partOfSpeech": "noun",
        "translation": "สายเทป สายเทปบันทึกเสียง",
        "definition": "",
        "example": "Use some tape to fix it.",
        "exampleTranslation": "ใช้เทปกาวติดมัน"
    },
    {
        "word": "target",
        "partOfSpeech": "noun",
        "translation": "เป้า เป้าหมาย",
        "definition": "",
        "example": "He hit the target.",
        "exampleTranslation": "เขายิงเข้าเป้า"
    },
    {
        "word": "task",
        "partOfSpeech": "noun",
        "translation": "งานหนัก",
        "definition": "",
        "example": "This is a difficult task.",
        "exampleTranslation": "นี่เป็นงานที่ยาก"
    },
    {
        "word": "taste",
        "partOfSpeech": "noun",
        "translation": "ลิ้มรส",
        "definition": "",
        "example": "This soup tastes good.",
        "exampleTranslation": "ซุปนี้รสชาติดี"
    },
    {
        "word": "tax",
        "partOfSpeech": "noun",
        "translation": "ภาษี",
        "definition": "",
        "example": "You must pay your tax.",
        "exampleTranslation": "คุณต้องจ่ายภาษีของคุณ"
    },
    {
        "word": "taxi",
        "partOfSpeech": "noun",
        "translation": "รถแท็กซี่",
        "definition": "",
        "example": "We took a taxi to the airport.",
        "exampleTranslation": "พวกเรานั่งรถแท็กซี่ไปสนามบิน"
    },
    {
        "word": "tea",
        "partOfSpeech": "noun",
        "translation": "ชา",
        "definition": "",
        "example": "Would you like some tea?",
        "exampleTranslation": "คุณต้องการชาไหม?"
    },
    {
        "word": "teach",
        "partOfSpeech": "noun",
        "translation": "สอน",
        "definition": "",
        "example": "Can you teach me how to swim?",
        "exampleTranslation": "คุณสอนฉันว่ายน้ำได้ไหม?"
    },
    {
        "word": "teacher",
        "partOfSpeech": "noun",
        "translation": "ครู",
        "definition": "",
        "example": "My mother is a teacher.",
        "exampleTranslation": "แม่ของฉันเป็นครู"
    },
    {
        "word": "teaching",
        "partOfSpeech": "verb",
        "translation": "การสอน",
        "definition": "",
        "example": "Teaching is a hard job.",
        "exampleTranslation": "การสอนเป็นงานที่หนัก"
    },
    {
        "word": "team",
        "partOfSpeech": "noun",
        "translation": "คณะทํางาน, กลุ่ม",
        "definition": "",
        "example": "Which football team do you support?",
        "exampleTranslation": "คุณเชียร์ทีมฟุตบอลไหน?"
    },
    {
        "word": "tear",
        "partOfSpeech": "noun",
        "translation": "ฉีก",
        "definition": "",
        "example": "A tear rolled down her cheek.",
        "exampleTranslation": "น้ำตากลิ้งลงมาบนแก้มของเธอ"
    },
    {
        "word": "technical",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับเทคนิค",
        "definition": "",
        "example": "It was a technical error.",
        "exampleTranslation": "มันเป็นข้อผิดพลาดทางเทคนิค"
    },
    {
        "word": "technique",
        "partOfSpeech": "noun",
        "translation": "เทคนิค กลวิธี ความสามารถทางเทคนิค",
        "definition": "",
        "example": "He has a good technique.",
        "exampleTranslation": "เขามีเทคนิคที่ดี"
    },
    {
        "word": "technology",
        "partOfSpeech": "noun",
        "translation": "เทคโนโลยี",
        "definition": "",
        "example": "Technology is changing the world.",
        "exampleTranslation": "เทคโนโลยีกำลังเปลี่ยนโลก"
    },
    {
        "word": "telephone",
        "partOfSpeech": "noun",
        "translation": "โทรศัพท์",
        "definition": "",
        "example": "The telephone is ringing.",
        "exampleTranslation": "โทรศัพท์กำลังดัง"
    },
    {
        "word": "television",
        "partOfSpeech": "noun",
        "translation": "โทรทัศน์",
        "definition": "",
        "example": "I am watching television.",
        "exampleTranslation": "ฉันกำลังดูโทรทัศน์"
    },
    {
        "word": "tell",
        "partOfSpeech": "noun",
        "translation": "บอก",
        "definition": "",
        "example": "Tell me a story.",
        "exampleTranslation": "เล่าเรื่องให้ฉันฟังหน่อย"
    },
    {
        "word": "temperature",
        "partOfSpeech": "noun",
        "translation": "อุณหภูมิ",
        "definition": "",
        "example": "The temperature is very high.",
        "exampleTranslation": "อุณหภูมิสูงมาก"
    },
    {
        "word": "temporary",
        "partOfSpeech": "adjective",
        "translation": "ชั่วคราว",
        "definition": "",
        "example": "This is a temporary job.",
        "exampleTranslation": "นี่คืองานชั่วคราว"
    },
    {
        "word": "ten",
        "partOfSpeech": "noun",
        "translation": "สิบ",
        "definition": "",
        "example": "I have ten fingers.",
        "exampleTranslation": "ฉันมีสิบนิ้ว"
    },
    {
        "word": "tend",
        "partOfSpeech": "noun",
        "translation": "มีแนวโน้ม",
        "definition": "",
        "example": "I tend to agree with you.",
        "exampleTranslation": "ฉันมีแนวโน้มที่จะเห็นด้วยกับคุณ"
    },
    {
        "word": "tendency",
        "partOfSpeech": "noun",
        "translation": "แนวโน้ม",
        "definition": "",
        "example": "He has a tendency to talk too much.",
        "exampleTranslation": "เขามีแนวโน้มที่จะพูดมากเกินไป"
    },
    {
        "word": "tension",
        "partOfSpeech": "noun",
        "translation": "ความตึง ความตึงเครียด",
        "definition": "",
        "example": "There is a lot of tension in the room.",
        "exampleTranslation": "มีความตึงเครียดมากในห้องนี้"
    },
    {
        "word": "tent",
        "partOfSpeech": "noun",
        "translation": "เต็นท์",
        "definition": "",
        "example": "We slept in a tent.",
        "exampleTranslation": "พวกเรานอนในเต็นท์"
    },
    {
        "word": "tenth",
        "partOfSpeech": "noun",
        "translation": "ที่สิบ หนึ่งในสิบส่วนที่เท่าๆกัน",
        "definition": "",
        "example": "Today is the tenth of May.",
        "exampleTranslation": "วันนี้คือวันที่สิบพฤษภาคม"
    },
    {
        "word": "term",
        "partOfSpeech": "noun",
        "translation": "เวลาที่กําหนด",
        "definition": "",
        "example": "The school term starts in September.",
        "exampleTranslation": "เทอมของโรงเรียนเริ่มในเดือนกันยายน"
    },
    {
        "word": "terrible",
        "partOfSpeech": "adjective",
        "translation": "น่ากลัว แย่มาก",
        "definition": "",
        "example": "That was a terrible mistake.",
        "exampleTranslation": "นั่นเป็นความผิดพลาดที่แย่มาก"
    },
    {
        "word": "terribly",
        "partOfSpeech": "adverb",
        "translation": "อย่างน่ากลัว",
        "definition": "",
        "example": "I am terribly sorry.",
        "exampleTranslation": "ฉันขอโทษอย่างมาก"
    },
    {
        "word": "test",
        "partOfSpeech": "noun",
        "translation": "ทดสอบ",
        "definition": "",
        "example": "I have a math test tomorrow.",
        "exampleTranslation": "ฉันมีสอบคณิตศาสตร์พรุ่งนี้"
    },
    {
        "word": "text",
        "partOfSpeech": "noun",
        "translation": "ข้อความ ตํารา หนังสือ",
        "definition": "",
        "example": "Read the text on page 10.",
        "exampleTranslation": "อ่านข้อความในหน้า 10"
    },
    {
        "word": "than",
        "partOfSpeech": "noun",
        "translation": "กว่า (ใช้ในการเปรียบเทียบ)",
        "definition": "",
        "example": "She is taller than me.",
        "exampleTranslation": "เธอสูงกว่าฉัน"
    },
    {
        "word": "thank",
        "partOfSpeech": "noun",
        "translation": "ขอบคุณ",
        "definition": "",
        "example": "Thank you for your help.",
        "exampleTranslation": "ขอบคุณสำหรับความช่วยเหลือของคุณ"
    },
    {
        "word": "that",
        "partOfSpeech": "noun",
        "translation": "นั้น, โน่น",
        "definition": "",
        "example": "That is my car.",
        "exampleTranslation": "นั่นคือรถของฉัน"
    },
    {
        "word": "the",
        "partOfSpeech": "noun",
        "translation": "คํานําหน้านามชี้เฉพาะ",
        "definition": "",
        "example": "The book is on the table.",
        "exampleTranslation": "หนังสืออยู่บนโต๊ะ"
    },
    {
        "word": "theatre",
        "partOfSpeech": "noun",
        "translation": "ภาพยนตร์ โรงภาพยนตร์",
        "definition": "",
        "example": "We went to the theatre.",
        "exampleTranslation": "พวกเราไปโรงละคร"
    },
    {
        "word": "their",
        "partOfSpeech": "noun",
        "translation": "ของพวกเขา",
        "definition": "",
        "example": "This is their house.",
        "exampleTranslation": "นี่คือบ้านของพวกเขา"
    },
    {
        "word": "theirs",
        "partOfSpeech": "noun",
        "translation": "ของพวกเขา สิ่งที่เป็นของพวกเขา",
        "definition": "",
        "example": "The blue car is theirs.",
        "exampleTranslation": "รถสีฟ้าเป็นของพวกเขา"
    },
    {
        "word": "them",
        "partOfSpeech": "noun",
        "translation": "พวกเขา",
        "definition": "",
        "example": "I will call them later.",
        "exampleTranslation": "ฉันจะโทรหาพวกเขาในภายหลัง"
    },
    {
        "word": "theme",
        "partOfSpeech": "noun",
        "translation": "หัวข้อ",
        "definition": "",
        "example": "The theme of the party is animals.",
        "exampleTranslation": "ธีมของงานปาร์ตี้คือสัตว์"
    },
    {
        "word": "themselves",
        "partOfSpeech": "noun",
        "translation": "ตัวพวกเขาเอง",
        "definition": "",
        "example": "They enjoyed themselves at the party.",
        "exampleTranslation": "พวกเขาสนุกสนานในงานปาร์ตี้"
    },
    {
        "word": "then",
        "partOfSpeech": "adverb",
        "translation": "เมื่อนั้น",
        "definition": "",
        "example": "We ate dinner, then we watched a movie.",
        "exampleTranslation": "พวกเราทานอาหารเย็น จากนั้นพวกเราก็ดูหนัง"
    },
    {
        "word": "theory",
        "partOfSpeech": "noun",
        "translation": "ทฤษฎี",
        "definition": "",
        "example": "Do you understand Einstein theory?",
        "exampleTranslation": "คุณเข้าใจทฤษฎีของไอน์สไตน์ไหม?"
    },
    {
        "word": "there",
        "partOfSpeech": "adverb",
        "translation": "ที่นั้น",
        "definition": "",
        "example": "Put the box over there.",
        "exampleTranslation": "วางกล่องไว้ตรงนั้น"
    },
    {
        "word": "therefore",
        "partOfSpeech": "adverb",
        "translation": "ดังนั้น",
        "definition": "",
        "example": "I was sick, therefore I stayed home.",
        "exampleTranslation": "ฉันป่วย ฉันจึงอยู่บ้าน"
    },
    {
        "word": "they",
        "partOfSpeech": "noun",
        "translation": "พวกเขา",
        "definition": "",
        "example": "They are my friends.",
        "exampleTranslation": "พวกเขาเป็นเพื่อนของฉัน"
    },
    {
        "word": "thick",
        "partOfSpeech": "noun",
        "translation": "หนา",
        "definition": "",
        "example": "The book is very thick.",
        "exampleTranslation": "หนังสือเล่มนี้หนามาก"
    },
    {
        "word": "thickness",
        "partOfSpeech": "noun",
        "translation": "ความหนา",
        "definition": "",
        "example": "Measure the thickness of the wall.",
        "exampleTranslation": "วัดความหนาของกำแพง"
    },
    {
        "word": "thief",
        "partOfSpeech": "noun",
        "translation": "ขโมย",
        "definition": "",
        "example": "The thief stole my bag.",
        "exampleTranslation": "หัวขโมยขโมยกระเป๋าของฉัน"
    },
    {
        "word": "thin",
        "partOfSpeech": "noun",
        "translation": "บาง",
        "definition": "",
        "example": "He is very thin.",
        "exampleTranslation": "เขาผอมมาก"
    },
    {
        "word": "thing",
        "partOfSpeech": "noun",
        "translation": "สิ่งของ",
        "definition": "",
        "example": "What is that thing?",
        "exampleTranslation": "สิ่งนั้นคืออะไร?"
    },
    {
        "word": "think",
        "partOfSpeech": "noun",
        "translation": "คิด",
        "definition": "",
        "example": "I think it will rain.",
        "exampleTranslation": "ฉันคิดว่าฝนจะตก"
    },
    {
        "word": "thinking",
        "partOfSpeech": "verb",
        "translation": "ความคิด",
        "definition": "",
        "example": "I was thinking about you.",
        "exampleTranslation": "ฉันกำลังคิดถึงคุณ"
    },
    {
        "word": "third",
        "partOfSpeech": "adjective",
        "translation": "ที่สาม",
        "definition": "",
        "example": "She won the third prize.",
        "exampleTranslation": "เธอได้รับรางวัลที่สาม"
    },
    {
        "word": "thirsty",
        "partOfSpeech": "noun",
        "translation": "กระหายนํ้า",
        "definition": "",
        "example": "I am very thirsty.",
        "exampleTranslation": "ฉันกระหายน้ำมาก"
    },
    {
        "word": "thirteen",
        "partOfSpeech": "noun",
        "translation": "สิบสาม",
        "definition": "",
        "example": "He is thirteen years old.",
        "exampleTranslation": "เขาอายุสิบสามปี"
    },
    {
        "word": "thirty",
        "partOfSpeech": "noun",
        "translation": "สามสิบ",
        "definition": "",
        "example": "There are thirty students in the class.",
        "exampleTranslation": "มีนักเรียนสามสิบคนในชั้นเรียน"
    },
    {
        "word": "this",
        "partOfSpeech": "noun",
        "translation": "นี้ นี่",
        "definition": "",
        "example": "This is my friend, Tom.",
        "exampleTranslation": "นี่คือเพื่อนของฉัน ทอม"
    },
    {
        "word": "thorough",
        "partOfSpeech": "noun",
        "translation": "ทั่วถึง",
        "definition": "",
        "example": "The doctor did a thorough checkup.",
        "exampleTranslation": "หมอทำการตรวจอย่างละเอียด"
    },
    {
        "word": "thoroughly",
        "partOfSpeech": "adverb",
        "translation": "ละเอียดลออ หมดจด เต็มที่",
        "definition": "",
        "example": "Wash your hands thoroughly.",
        "exampleTranslation": "ล้างมือของคุณให้สะอาดอย่างทั่วถึง"
    },
    {
        "word": "though",
        "partOfSpeech": "noun",
        "translation": "แม้ว่า ถึงแม้ว่า",
        "definition": "",
        "example": "I went to work, even though I was sick.",
        "exampleTranslation": "ฉันไปทำงาน แม้ว่าฉันจะป่วย"
    },
    {
        "word": "thought",
        "partOfSpeech": "noun",
        "translation": "ความคิด",
        "definition": "",
        "example": "It was a good thought.",
        "exampleTranslation": "มันเป็นความคิดที่ดี"
    },
    {
        "word": "thousand",
        "partOfSpeech": "noun",
        "translation": "หนึ่งพัน",
        "definition": "",
        "example": "I have a thousand dollars.",
        "exampleTranslation": "ฉันมีเงินหนึ่งพันดอลลาร์"
    },
    {
        "word": "thousandth",
        "partOfSpeech": "noun",
        "translation": "ที่หนึ่งพัน",
        "definition": "",
        "example": "He was the thousandth customer.",
        "exampleTranslation": "เขาเป็นลูกค้ารายที่หนึ่งพัน"
    },
    {
        "word": "thread",
        "partOfSpeech": "noun",
        "translation": "ด้าย",
        "definition": "",
        "example": "I need a needle and thread.",
        "exampleTranslation": "ฉันต้องการเข็มและด้าย"
    },
    {
        "word": "threat",
        "partOfSpeech": "noun",
        "translation": "การคุกคาม",
        "definition": "",
        "example": "The storm is a threat to the town.",
        "exampleTranslation": "พายุเป็นภัยคุกคามต่อเมือง"
    },
    {
        "word": "threaten",
        "partOfSpeech": "noun",
        "translation": "คุกคาม",
        "definition": "",
        "example": "He threatened to call the police.",
        "exampleTranslation": "เขาขู่ว่าจะเรียกตำรวจ"
    },
    {
        "word": "three",
        "partOfSpeech": "noun",
        "translation": "สาม",
        "definition": "",
        "example": "I have three dogs.",
        "exampleTranslation": "ฉันมีสุนัขสามตัว"
    },
    {
        "word": "throat",
        "partOfSpeech": "noun",
        "translation": "ลําคอ",
        "definition": "",
        "example": "I have a sore throat.",
        "exampleTranslation": "ฉันเจ็บคอ"
    },
    {
        "word": "through",
        "partOfSpeech": "noun",
        "translation": "ผ่าน, ผ่านพ้น",
        "definition": "",
        "example": "We walked through the park.",
        "exampleTranslation": "พวกเราเดินผ่านสวนสาธารณะ"
    },
    {
        "word": "throughout",
        "partOfSpeech": "noun",
        "translation": "โดยตลอด",
        "definition": "",
        "example": "It rained throughout the day.",
        "exampleTranslation": "ฝนตกตลอดทั้งวัน"
    },
    {
        "word": "throw",
        "partOfSpeech": "noun",
        "translation": "ปา โยน",
        "definition": "",
        "example": "Throw the ball to me.",
        "exampleTranslation": "ขว้างลูกบอลมาให้ฉัน"
    },
    {
        "word": "thumb",
        "partOfSpeech": "noun",
        "translation": "นิ้วหัวแม่มือ",
        "definition": "",
        "example": "He hurt his thumb.",
        "exampleTranslation": "เขาเจ็บนิ้วหัวแม่มือ"
    },
    {
        "word": "Thursday",
        "partOfSpeech": "noun",
        "translation": "วันพฤหัสบดี",
        "definition": "",
        "example": "I will see you on Thursday.",
        "exampleTranslation": "ฉันจะเจอคุณวันพฤหัสบดี"
    },
    {
        "word": "thus",
        "partOfSpeech": "adverb",
        "translation": "เช่นนี้, ดังนี้",
        "definition": "",
        "example": "He was late, thus he missed the train.",
        "exampleTranslation": "เขามาสาย ดังนั้นเขาจึงตกรถไฟ"
    },
    {
        "word": "ticket",
        "partOfSpeech": "noun",
        "translation": "ตัѺว",
        "definition": "",
        "example": "I bought a movie ticket.",
        "exampleTranslation": "ฉันซื้อตั๋วดูหนัง"
    },
    {
        "word": "tidy",
        "partOfSpeech": "noun",
        "translation": "เรียบร้อย",
        "definition": "",
        "example": "Please tidy your room.",
        "exampleTranslation": "โปรดจัดห้องของคุณให้เป็นระเบียบ"
    },
    {
        "word": "tie",
        "partOfSpeech": "noun",
        "translation": "ผูก",
        "definition": "",
        "example": "He wears a suit and tie.",
        "exampleTranslation": "เขาสวมชุดสูทและเนคไท"
    },
    {
        "word": "tight",
        "partOfSpeech": "noun",
        "translation": "แน่น",
        "definition": "",
        "example": "These shoes are too tight.",
        "exampleTranslation": "รองเท้าคู่นี้คับเกินไป"
    },
    {
        "word": "tightly",
        "partOfSpeech": "adverb",
        "translation": "อย่างแน่น อย่างแออัด",
        "definition": "",
        "example": "Hold my hand tightly.",
        "exampleTranslation": "จับมือฉันไว้แน่นๆ"
    },
    {
        "word": "time",
        "partOfSpeech": "noun",
        "translation": "เวลา ครั้ง",
        "definition": "",
        "example": "What time is it?",
        "exampleTranslation": "เวลาเท่าไหร่แล้ว?"
    },
    {
        "word": "timetable",
        "partOfSpeech": "noun",
        "translation": "ตารางเวลา",
        "definition": "",
        "example": "Check the train timetable.",
        "exampleTranslation": "ตรวจสอบตารางเวลารถไฟ"
    },
    {
        "word": "tin",
        "partOfSpeech": "noun",
        "translation": "ดีบุก",
        "definition": "",
        "example": "I bought a tin of beans.",
        "exampleTranslation": "ฉันซื้อถั่วกระป๋องหนึ่งกระป๋อง"
    },
    {
        "word": "tiny",
        "partOfSpeech": "adjective",
        "translation": "เล็กมาก, จิѺว",
        "definition": "",
        "example": "The baby has tiny hands.",
        "exampleTranslation": "ทารกมีมือที่เล็กจิ๋ว"
    },
    {
        "word": "tip",
        "partOfSpeech": "noun",
        "translation": "เงินตอบแทนเล็กน้อย, คําแนะนํา",
        "definition": "",
        "example": "Leave a tip for the waiter.",
        "exampleTranslation": "ให้ทิปแก่พนักงานเสิร์ฟ"
    },
    {
        "word": "tire",
        "partOfSpeech": "noun",
        "translation": "ยางรถ เหนื่อย",
        "definition": "",
        "example": "My bike has a flat tire.",
        "exampleTranslation": "จักรยานของฉันยางแบน"
    },
    {
        "word": "tired",
        "partOfSpeech": "verb",
        "translation": "เหนื่อย เมื่อย",
        "definition": "",
        "example": "I am very tired today.",
        "exampleTranslation": "วันนี้ฉันเหนื่อยมาก"
    },
    {
        "word": "tiring",
        "partOfSpeech": "verb",
        "translation": "น่าเบื่อหน่าย น่ารําคาญ",
        "definition": "",
        "example": "It was a tiring day.",
        "exampleTranslation": "มันเป็นวันที่เหน็ดเหนื่อย"
    },
    {
        "word": "title",
        "partOfSpeech": "noun",
        "translation": "ชื่อเรื่อง",
        "definition": "",
        "example": "What is the title of the book?",
        "exampleTranslation": "ชื่อหนังสือคืออะไร?"
    },
    {
        "word": "to",
        "partOfSpeech": "noun",
        "translation": "ถึง, ไปยัง",
        "definition": "",
        "example": "I am going to the park.",
        "exampleTranslation": "ฉันกำลังจะไปสวนสาธารณะ"
    },
    {
        "word": "today",
        "partOfSpeech": "noun",
        "translation": "วันนี้",
        "definition": "",
        "example": "Today is Monday.",
        "exampleTranslation": "วันนี้คือวันจันทร์"
    },
    {
        "word": "toe",
        "partOfSpeech": "noun",
        "translation": "นิ้วเท้า",
        "definition": "",
        "example": "I stubbed my toe.",
        "exampleTranslation": "ฉันเตะโดนนิ้วเท้าตัวเอง"
    },
    {
        "word": "together",
        "partOfSpeech": "adverb",
        "translation": "ด้วยกัน",
        "definition": "",
        "example": "Let us work together.",
        "exampleTranslation": "มาทำงานด้วยกันเถอะ"
    },
    {
        "word": "toilet",
        "partOfSpeech": "noun",
        "translation": "ห้องนํ้า",
        "definition": "",
        "example": "Where is the toilet?",
        "exampleTranslation": "ห้องน้ำอยู่ที่ไหน?"
    },
    {
        "word": "tomato",
        "partOfSpeech": "noun",
        "translation": "มะเขือเทศ",
        "definition": "",
        "example": "I like tomato soup.",
        "exampleTranslation": "ฉันชอบซุปมะเขือเทศ"
    },
    {
        "word": "tomorrow",
        "partOfSpeech": "noun",
        "translation": "วันพรุ่งนี้",
        "definition": "",
        "example": "See you tomorrow.",
        "exampleTranslation": "แล้วพบกันพรุ่งนี้"
    },
    {
        "word": "ton",
        "partOfSpeech": "noun",
        "translation": "หน่วยนํ้าหนักที่เท่ากับ 1000 กิโลกรัม",
        "definition": "",
        "example": "The elephant weighs over a ton.",
        "exampleTranslation": "ช้างมีน้ำหนักมากกว่าหนึ่งตัน"
    },
    {
        "word": "tone",
        "partOfSpeech": "noun",
        "translation": "เสียงสูงตํ่า คุณภาพของเสียง",
        "definition": "",
        "example": "He spoke in a friendly tone.",
        "exampleTranslation": "เขาพูดด้วยน้ำเสียงที่เป็นมิตร"
    },
    {
        "word": "tongue",
        "partOfSpeech": "noun",
        "translation": "ลิ้น",
        "definition": "",
        "example": "She burned her tongue.",
        "exampleTranslation": "เธอลิ้นพอง"
    },
    {
        "word": "tonne",
        "partOfSpeech": "noun",
        "translation": "1000, กิโลกรัม",
        "definition": "",
        "example": "The truck can carry one tonne.",
        "exampleTranslation": "รถบรรทุกสามารถบรรทุกได้หนึ่งตัน"
    },
    {
        "word": "too",
        "partOfSpeech": "adverb",
        "translation": "ด้วย, เช่นกัน",
        "definition": "",
        "example": "I am too tired to walk.",
        "exampleTranslation": "ฉันเหนื่อยเกินกว่าจะเดิน"
    },
    {
        "word": "tool",
        "partOfSpeech": "noun",
        "translation": "เครื่องมือ อุปกรณ์",
        "definition": "",
        "example": "A hammer is a useful tool.",
        "exampleTranslation": "ค้อนเป็นเครื่องมือที่มีประโยชน์"
    },
    {
        "word": "tooth",
        "partOfSpeech": "noun",
        "translation": "ฟัน",
        "definition": "",
        "example": "My tooth hurts.",
        "exampleTranslation": "ฉันปวดฟัน"
    },
    {
        "word": "top",
        "partOfSpeech": "noun",
        "translation": "บนสุด",
        "definition": "",
        "example": "The cat is on top of the roof.",
        "exampleTranslation": "แมวอยู่บนหลังคา"
    },
    {
        "word": "topic",
        "partOfSpeech": "noun",
        "translation": "หัวข้อเรื่อง",
        "definition": "",
        "example": "What is the topic of your essay?",
        "exampleTranslation": "หัวข้อเรียงความของคุณคืออะไร?"
    },
    {
        "word": "total",
        "partOfSpeech": "adjective",
        "translation": "ทั้งหมด",
        "definition": "",
        "example": "The total cost is fifty dollars.",
        "exampleTranslation": "ค่าใช้จ่ายทั้งหมดคือห้าสิบดอลลาร์"
    },
    {
        "word": "totally",
        "partOfSpeech": "adverb",
        "translation": "ทั้งหมด โดยสิ้นเชิง",
        "definition": "",
        "example": "I totally agree with you.",
        "exampleTranslation": "ฉันเห็นด้วยกับคุณอย่างยิ่ง"
    },
    {
        "word": "touch",
        "partOfSpeech": "noun",
        "translation": "สัมผัส",
        "definition": "",
        "example": "Do not touch the wet paint.",
        "exampleTranslation": "อย่าสัมผัสสีที่ยังไม่แห้ง"
    },
    {
        "word": "tough",
        "partOfSpeech": "adjective",
        "translation": "เหนียว, ทนทาน",
        "definition": "",
        "example": "The meat is very tough.",
        "exampleTranslation": "เนื้อเหนียวมาก"
    },
    {
        "word": "tour",
        "partOfSpeech": "noun",
        "translation": "ท่องเที่ยว",
        "definition": "",
        "example": "We went on a tour of the city.",
        "exampleTranslation": "พวกเราไปทัวร์รอบเมือง"
    },
    {
        "word": "tourist",
        "partOfSpeech": "noun",
        "translation": "นักท่องเที่ยว",
        "definition": "",
        "example": "There are many tourists in Bangkok.",
        "exampleTranslation": "มีนักท่องเที่ยวมากมายในกรุงเทพฯ"
    },
    {
        "word": "towards",
        "partOfSpeech": "noun",
        "translation": "ไปทาง",
        "definition": "",
        "example": "He walked towards the door.",
        "exampleTranslation": "เขาเดินไปทางประตู"
    },
    {
        "word": "tower",
        "partOfSpeech": "noun",
        "translation": "หอคอย",
        "definition": "",
        "example": "Look at that tall tower.",
        "exampleTranslation": "ดูหอคอยสูงนั่นสิ"
    },
    {
        "word": "town",
        "partOfSpeech": "noun",
        "translation": "เมือง",
        "definition": "",
        "example": "I live in a small town.",
        "exampleTranslation": "ฉันอาศัยอยู่ในเมืองเล็กๆ"
    },
    {
        "word": "toy",
        "partOfSpeech": "noun",
        "translation": "ของเล่น",
        "definition": "",
        "example": "The child is playing with a toy.",
        "exampleTranslation": "เด็กกำลังเล่นของเล่น"
    },
    {
        "word": "trace",
        "partOfSpeech": "noun",
        "translation": "รอย ร่องรอย",
        "definition": "",
        "example": "The police found no trace of the thief.",
        "exampleTranslation": "ตำรวจไม่พบร่องรอยของหัวขโมย"
    },
    {
        "word": "track",
        "partOfSpeech": "noun",
        "translation": "ติดตาม",
        "definition": "",
        "example": "The runners are on the track.",
        "exampleTranslation": "นักวิ่งอยู่บนลู่วิ่ง"
    },
    {
        "word": "trade",
        "partOfSpeech": "noun",
        "translation": "การค้า",
        "definition": "",
        "example": "They trade goods with other countries.",
        "exampleTranslation": "พวกเขาทำการค้าสินค้ากับประเทศอื่น"
    },
    {
        "word": "trading",
        "partOfSpeech": "noun",
        "translation": "การประกอบการค้า การทําการค้า",
        "definition": "",
        "example": "He works in a trading company.",
        "exampleTranslation": "เขาทำงานในบริษัทการค้า"
    },
    {
        "word": "tradition",
        "partOfSpeech": "noun",
        "translation": "ธรรมเนียม, จารีต",
        "definition": "",
        "example": "We have a family tradition.",
        "exampleTranslation": "พวกเรามีประเพณีของครอบครัว"
    },
    {
        "word": "traditional",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับจารีต สืบทอดตามประเพณี",
        "definition": "",
        "example": "They wore traditional clothes.",
        "exampleTranslation": "พวกเขาสวมเสื้อผ้าแบบดั้งเดิม"
    },
    {
        "word": "traffic",
        "partOfSpeech": "noun",
        "translation": "การจราจร",
        "definition": "",
        "example": "There is a lot of traffic today.",
        "exampleTranslation": "วันนี้มีการจราจรติดขัดมาก"
    },
    {
        "word": "train",
        "partOfSpeech": "noun",
        "translation": "รถไฟ อบรม",
        "definition": "",
        "example": "We will travel by train.",
        "exampleTranslation": "พวกเราจะเดินทางด้วยรถไฟ"
    },
    {
        "word": "training",
        "partOfSpeech": "noun",
        "translation": "การฝึก",
        "definition": "",
        "example": "He needs more training.",
        "exampleTranslation": "เขาต้องการการฝึกฝนมากกว่านี้"
    },
    {
        "word": "transfer",
        "partOfSpeech": "noun",
        "translation": "ย้าย, โอน",
        "definition": "",
        "example": "I want to transfer some money.",
        "exampleTranslation": "ฉันต้องการโอนเงิน"
    },
    {
        "word": "transform",
        "partOfSpeech": "noun",
        "translation": "เปลี่ยนรูป แปรรูป",
        "definition": "",
        "example": "The caterpillar transformed into a butterfly.",
        "exampleTranslation": "หนอนผีเสื้อกลายร่างเป็นผีเสื้อ"
    },
    {
        "word": "translate",
        "partOfSpeech": "noun",
        "translation": "แปล",
        "definition": "",
        "example": "Please translate this word.",
        "exampleTranslation": "โปรดแปลคำนี้"
    },
    {
        "word": "translation",
        "partOfSpeech": "noun",
        "translation": "การแปล ข้อความที่แปล",
        "definition": "",
        "example": "The translation is correct.",
        "exampleTranslation": "คำแปลนั้นถูกต้อง"
    },
    {
        "word": "transparent",
        "partOfSpeech": "noun",
        "translation": "โปร่งใส",
        "definition": "",
        "example": "The glass is transparent.",
        "exampleTranslation": "แก้วมีความโปร่งใส"
    },
    {
        "word": "transport",
        "partOfSpeech": "noun",
        "translation": "ขนส่ง",
        "definition": "",
        "example": "We need transport to the airport.",
        "exampleTranslation": "พวกเราต้องการการเดินทางไปสนามบิน"
    },
    {
        "word": "transportation",
        "partOfSpeech": "noun",
        "translation": "การขนส่ง การลําเลียง",
        "definition": "",
        "example": "Public transportation is cheap here.",
        "exampleTranslation": "การขนส่งสาธารณะที่นี่ราคาถูก"
    },
    {
        "word": "trap",
        "partOfSpeech": "noun",
        "translation": "กับดัก",
        "definition": "",
        "example": "They set a trap for the mouse.",
        "exampleTranslation": "พวกเขาวางกับดักหนู"
    },
    {
        "word": "travel",
        "partOfSpeech": "noun",
        "translation": "เดินทาง",
        "definition": "",
        "example": "I love to travel.",
        "exampleTranslation": "ฉันรักการเดินทาง"
    },
    {
        "word": "traveller",
        "partOfSpeech": "noun",
        "translation": "ผู้เดินทาง นักท่องเที่ยว นักทัศนาจร",
        "definition": "",
        "example": "He is a weary traveller.",
        "exampleTranslation": "เขาเป็นนักเดินทางที่เหนื่อยล้า"
    },
    {
        "word": "treat",
        "partOfSpeech": "noun",
        "translation": "รักษา ปฎิบัติ",
        "definition": "",
        "example": "He treats me well.",
        "exampleTranslation": "เขาปฏิบัติต่อฉันดี"
    },
    {
        "word": "treatment",
        "partOfSpeech": "noun",
        "translation": "การรักษา",
        "definition": "",
        "example": "He is receiving medical treatment.",
        "exampleTranslation": "เขากำลังรับการรักษาพยาบาล"
    },
    {
        "word": "tree",
        "partOfSpeech": "noun",
        "translation": "ต้นไม้",
        "definition": "",
        "example": "The bird is in the tree.",
        "exampleTranslation": "นกอยู่บนต้นไม้"
    },
    {
        "word": "trend",
        "partOfSpeech": "noun",
        "translation": "แนวโน้ม",
        "definition": "",
        "example": "This fashion trend is popular.",
        "exampleTranslation": "เทรนด์แฟชั่นนี้กำลังได้รับความนิยม"
    },
    {
        "word": "trial",
        "partOfSpeech": "noun",
        "translation": "การทดลอง การสอบสวน",
        "definition": "",
        "example": "He is on trial for murder.",
        "exampleTranslation": "เขากำลังถูกพิจารณาคดีในข้อหาฆาตกรรม"
    },
    {
        "word": "triangle",
        "partOfSpeech": "noun",
        "translation": "รูปสามเหลี่ยม",
        "definition": "",
        "example": "A triangle has three sides.",
        "exampleTranslation": "รูปสามเหลี่ยมมีสามด้าน"
    },
    {
        "word": "trick",
        "partOfSpeech": "noun",
        "translation": "กลอุบาย เล่ห์เหลี่ยม",
        "definition": "",
        "example": "He taught his dog a new trick.",
        "exampleTranslation": "เขาสอนกลเม็ดใหม่ให้สุนัขของเขา"
    },
    {
        "word": "trillion",
        "partOfSpeech": "noun",
        "translation": "ล้านล้าน",
        "definition": "",
        "example": "A trillion is a very large number.",
        "exampleTranslation": "ล้านล้านเป็นตัวเลขที่ใหญ่มาก"
    },
    {
        "word": "trip",
        "partOfSpeech": "noun",
        "translation": "การเดินทาง",
        "definition": "",
        "example": "We went on a trip to the mountains.",
        "exampleTranslation": "พวกเราไปเที่ยวที่ภูเขา"
    },
    {
        "word": "tropical",
        "partOfSpeech": "adjective",
        "translation": "ในเขตร้อนชื้น",
        "definition": "",
        "example": "Thailand has a tropical climate.",
        "exampleTranslation": "ประเทศไทยมีภูมิอากาศแบบเขตร้อน"
    },
    {
        "word": "trouble",
        "partOfSpeech": "noun",
        "translation": "อุปสรรค ความยากลําบาก",
        "definition": "",
        "example": "I am having trouble with my car.",
        "exampleTranslation": "ฉันกำลังมีปัญหากับรถของฉัน"
    },
    {
        "word": "trousers",
        "partOfSpeech": "noun",
        "translation": "กางเกงขายาว",
        "definition": "",
        "example": "He is wearing black trousers.",
        "exampleTranslation": "เขาสวมกางเกงขายาวสีดำ"
    },
    {
        "word": "truck",
        "partOfSpeech": "noun",
        "translation": "รถบรรทุก",
        "definition": "",
        "example": "The truck is carrying vegetables.",
        "exampleTranslation": "รถบรรทุกกำลังขนผัก"
    },
    {
        "word": "true",
        "partOfSpeech": "adjective",
        "translation": "จริง",
        "definition": "",
        "example": "Is that true?",
        "exampleTranslation": "นั่นเป็นเรื่องจริงหรือ?"
    },
    {
        "word": "truly",
        "partOfSpeech": "adverb",
        "translation": "อย่างแท้จริง อย่างถูกต้อง",
        "definition": "",
        "example": "I am truly sorry.",
        "exampleTranslation": "ฉันขอโทษจริงๆ"
    },
    {
        "word": "trust",
        "partOfSpeech": "noun",
        "translation": "เชื่อถือได้",
        "definition": "",
        "example": "I trust you completely.",
        "exampleTranslation": "ฉันเชื่อใจคุณอย่างเต็มที่"
    },
    {
        "word": "truth",
        "partOfSpeech": "noun",
        "translation": "ความจริง",
        "definition": "",
        "example": "Tell me the truth.",
        "exampleTranslation": "บอกความจริงฉันมา"
    },
    {
        "word": "try",
        "partOfSpeech": "noun",
        "translation": "พยายาม, ทดลอง",
        "definition": "",
        "example": "I will try my best.",
        "exampleTranslation": "ฉันจะพยายามให้ดีที่สุด"
    },
    {
        "word": "tube",
        "partOfSpeech": "noun",
        "translation": "หลอด ท่อ ยางในของรถยนต์ อุโมงค์",
        "definition": "",
        "example": "Get a tube of toothpaste.",
        "exampleTranslation": "หยิบยาสีฟันมาหนึ่งหลอด"
    },
    {
        "word": "Tuesday",
        "partOfSpeech": "noun",
        "translation": "วันอังคาร",
        "definition": "",
        "example": "The meeting is on Tuesday.",
        "exampleTranslation": "การประชุมมีขึ้นในวันอังคาร"
    },
    {
        "word": "tune",
        "partOfSpeech": "noun",
        "translation": "ปรับแต่ง",
        "definition": "",
        "example": "He hummed a happy tune.",
        "exampleTranslation": "เขาฮัมเพลงอย่างมีความสุข"
    },
    {
        "word": "tunnel",
        "partOfSpeech": "noun",
        "translation": "อุโมงค์",
        "definition": "",
        "example": "The train went through a tunnel.",
        "exampleTranslation": "รถไฟวิ่งผ่านอุโมงค์"
    },
    {
        "word": "turn",
        "partOfSpeech": "noun",
        "translation": "หมุน วน",
        "definition": "",
        "example": "Turn left at the corner.",
        "exampleTranslation": "เลี้ยวซ้ายที่หัวมุม"
    },
    {
        "word": "twelve",
        "partOfSpeech": "noun",
        "translation": "สิบสอง",
        "definition": "",
        "example": "There are twelve months in a year.",
        "exampleTranslation": "มีสิบสองเดือนในหนึ่งปี"
    },
    {
        "word": "twenty",
        "partOfSpeech": "noun",
        "translation": "ยี่สิบ",
        "definition": "",
        "example": "I have twenty dollars.",
        "exampleTranslation": "ฉันมีเงินยี่สิบดอลลาร์"
    },
    {
        "word": "twice",
        "partOfSpeech": "adverb",
        "translation": "สองครั้ง",
        "definition": "",
        "example": "I brush my teeth twice a day.",
        "exampleTranslation": "ฉันแปรงฟันวันละสองครั้ง"
    },
    {
        "word": "twin",
        "partOfSpeech": "noun",
        "translation": "ฝาแฝด, แฝด",
        "definition": "",
        "example": "They are twin sisters.",
        "exampleTranslation": "พวกเขาเป็นพี่น้องฝาแฝด"
    },
    {
        "word": "twist",
        "partOfSpeech": "noun",
        "translation": "บิด",
        "definition": "",
        "example": "Twist the cap to open the bottle.",
        "exampleTranslation": "บิดฝาเพื่อเปิดขวด"
    },
    {
        "word": "twisted",
        "partOfSpeech": "verb",
        "translation": "รู้สึกผิดศีลธรรม บิดเบี้ยว",
        "definition": "",
        "example": "My ankle is twisted.",
        "exampleTranslation": "ข้อเท้าของฉันพลิก"
    },
    {
        "word": "two",
        "partOfSpeech": "noun",
        "translation": "สอง",
        "definition": "",
        "example": "I have two sisters.",
        "exampleTranslation": "ฉันมีน้องสาวสองคน"
    },
    {
        "word": "type",
        "partOfSpeech": "noun",
        "translation": "ชนิด ประเภท",
        "definition": "",
        "example": "What type of music do you like?",
        "exampleTranslation": "คุณชอบดนตรีประเภทไหน?"
    },
    {
        "word": "typical",
        "partOfSpeech": "adjective",
        "translation": "โดยทั่วไป",
        "definition": "",
        "example": "This is a typical English breakfast.",
        "exampleTranslation": "นี่คืออาหารเช้าแบบอังกฤษทั่วไป"
    },
    {
        "word": "typically",
        "partOfSpeech": "adverb",
        "translation": "อย่างเป็นแบบฉบับ",
        "definition": "",
        "example": "He typically arrives at 9 AM.",
        "exampleTranslation": "โดยปกติเขามาถึงเวลา 9 โมงเช้า"
    },
    {
        "word": "tyre",
        "partOfSpeech": "noun",
        "translation": "ยางล้อรถ",
        "definition": "",
        "example": "The car needs a new tyre.",
        "exampleTranslation": "รถต้องการยางเส้นใหม่"
    },
    {
        "word": "ugly",
        "partOfSpeech": "adverb",
        "translation": "น่าเกลียด",
        "definition": "",
        "example": "The building is very ugly.",
        "exampleTranslation": "อาคารนี้มีลักษณะน่าเกลียดมาก"
    },
    {
        "word": "ultimate",
        "partOfSpeech": "adjective",
        "translation": "สุดท้าย ที่สุด จุดสูงสุด พื้นฐาน",
        "definition": "",
        "example": "This is the ultimate test.",
        "exampleTranslation": "นี่คือการทดสอบขั้นสูงสุด"
    },
    {
        "word": "ultimately",
        "partOfSpeech": "adverb",
        "translation": "ท้ายที่สุด ในที่สุด",
        "definition": "",
        "example": "Ultimately, you must decide.",
        "exampleTranslation": "ในท้ายที่สุด คุณต้องเป็นคนตัดสินใจ"
    },
    {
        "word": "umbrella",
        "partOfSpeech": "noun",
        "translation": "ร่ม",
        "definition": "",
        "example": "Take an umbrella, it is raining.",
        "exampleTranslation": "นำร่มไปด้วย ฝนกำลังตก"
    },
    {
        "word": "unable",
        "partOfSpeech": "adjective",
        "translation": "ไม่สามารถ",
        "definition": "",
        "example": "I am unable to attend the meeting.",
        "exampleTranslation": "ฉันไม่สามารถเข้าร่วมการประชุมได้"
    },
    {
        "word": "unacceptable",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งไม่สามารถยอมรับได้",
        "definition": "",
        "example": "His behavior was unacceptable.",
        "exampleTranslation": "พฤติกรรมของเขาเป็นสิ่งที่ยอมรับไม่ได้"
    },
    {
        "word": "uncertain",
        "partOfSpeech": "adjective",
        "translation": "ไม่แน่นอน ไม่แน่ใจ",
        "definition": "",
        "example": "The future is uncertain.",
        "exampleTranslation": "อนาคตเป็นสิ่งที่ไม่แน่นอน"
    },
    {
        "word": "uncle",
        "partOfSpeech": "noun",
        "translation": "ลุง",
        "definition": "",
        "example": "My uncle lives in London.",
        "exampleTranslation": "ลุงของฉันอาศัยอยู่ในลอนดอน"
    },
    {
        "word": "uncomfortable",
        "partOfSpeech": "adjective",
        "translation": "ไม่สะดวกสบาย",
        "definition": "",
        "example": "This chair is very uncomfortable.",
        "exampleTranslation": "เก้าอี้ตัวนี้นั่งไม่สบายเลย"
    },
    {
        "word": "unconscious",
        "partOfSpeech": "adjective",
        "translation": "ไม่รู้สึกตัว",
        "definition": "",
        "example": "He was knocked unconscious.",
        "exampleTranslation": "เขาถูกชกจนหมดสติ"
    },
    {
        "word": "uncontrolled",
        "partOfSpeech": "adjective",
        "translation": "รู้สึกไม่ได้รับการควบคุม ที่ไม่สามารถควบคุมได้",
        "definition": "",
        "example": "The fire was uncontrolled.",
        "exampleTranslation": "ไฟไหม้ลุกลามจนควบคุมไม่ได้"
    },
    {
        "word": "under",
        "partOfSpeech": "noun",
        "translation": "ใต้",
        "definition": "",
        "example": "The dog is under the table.",
        "exampleTranslation": "สุนัขอยู่ใต้โต๊ะ"
    },
    {
        "word": "underground",
        "partOfSpeech": "noun",
        "translation": "ใต้ดิน",
        "definition": "",
        "example": "The train goes underground.",
        "exampleTranslation": "รถไฟวิ่งใต้ดิน"
    },
    {
        "word": "underneath",
        "partOfSpeech": "noun",
        "translation": "ข้างใต้ ข้างล่าง",
        "definition": "",
        "example": "The coin rolled underneath the sofa.",
        "exampleTranslation": "เหรียญกลิ้งไปใต้โซฟา"
    },
    {
        "word": "understand",
        "partOfSpeech": "noun",
        "translation": "เข้าใจ",
        "definition": "",
        "example": "Do you understand me?",
        "exampleTranslation": "คุณเข้าใจฉันไหม?"
    },
    {
        "word": "understanding",
        "partOfSpeech": "verb",
        "translation": "ความเข้าใจ",
        "definition": "",
        "example": "She showed great understanding.",
        "exampleTranslation": "เธอแสดงให้เห็นถึงความเข้าใจอย่างมาก"
    },
    {
        "word": "underwater",
        "partOfSpeech": "noun",
        "translation": "อยู่ใต้นํ้า",
        "definition": "",
        "example": "Can you swim underwater?",
        "exampleTranslation": "คุณสามารถว่ายน้ำใต้น้ำได้ไหม?"
    },
    {
        "word": "underwear",
        "partOfSpeech": "adjective",
        "translation": "ชุดชั้นใน",
        "definition": "",
        "example": "I need to buy some new underwear.",
        "exampleTranslation": "ฉันต้องซื้อชุดชั้นในใหม่"
    },
    {
        "word": "undo",
        "partOfSpeech": "noun",
        "translation": "ยกเลิกสิ่งที่ได้ทําไปแล้ว",
        "definition": "",
        "example": "How do I undo this knot?",
        "exampleTranslation": "ฉันจะแก้ปมนี้ได้อย่างไร?"
    },
    {
        "word": "unemployed",
        "partOfSpeech": "adjective",
        "translation": "ไม่มีงานทํา ตกงาน",
        "definition": "",
        "example": "He has been unemployed for six months.",
        "exampleTranslation": "เขาตกงานมาหกเดือนแล้ว"
    },
    {
        "word": "unemployment",
        "partOfSpeech": "noun",
        "translation": "การไม่มีงานทํา การตกงาน",
        "definition": "",
        "example": "Unemployment is a big problem.",
        "exampleTranslation": "การว่างงานเป็นปัญหาใหญ่"
    },
    {
        "word": "unexpected",
        "partOfSpeech": "adjective",
        "translation": "ไม่ได้คาดคิดมาก่อน นึกไม่ถึง",
        "definition": "",
        "example": "His visit was unexpected.",
        "exampleTranslation": "การมาเยือนของเขาเป็นเรื่องที่ไม่ได้คาดคิด"
    },
    {
        "word": "unfair",
        "partOfSpeech": "noun",
        "translation": "ไม่ยุติธรรม ไม่เป็นธรรม",
        "definition": "",
        "example": "It is unfair to change the rules now.",
        "exampleTranslation": "มันไม่ยุติธรรมที่จะเปลี่ยนกฎในตอนนี้"
    },
    {
        "word": "unfortunate",
        "partOfSpeech": "noun",
        "translation": "โชคไม่ดี",
        "definition": "",
        "example": "It was an unfortunate accident.",
        "exampleTranslation": "มันเป็นอุบัติเหตุที่โชคร้าย"
    },
    {
        "word": "unfortunately",
        "partOfSpeech": "adverb",
        "translation": "เคราะห์ร้าย น่าสลด",
        "definition": "",
        "example": "Unfortunately, I cannot come.",
        "exampleTranslation": "น่าเสียดายที่ฉันมาไม่ได้"
    },
    {
        "word": "unfriendly",
        "partOfSpeech": "adverb",
        "translation": "ไม่เป็นมิตร, มุ่งร้าย",
        "definition": "",
        "example": "The shop assistant was very unfriendly.",
        "exampleTranslation": "พนักงานขายของไม่เป็นมิตรเลย"
    },
    {
        "word": "unhappy",
        "partOfSpeech": "adjective",
        "translation": "ไม่มีความสุข",
        "definition": "",
        "example": "Why are you unhappy?",
        "exampleTranslation": "ทำไมคุณถึงไม่มีความสุข?"
    },
    {
        "word": "uniform",
        "partOfSpeech": "noun",
        "translation": "เครื่องแบบ",
        "definition": "",
        "example": "The students wear a uniform.",
        "exampleTranslation": "นักเรียนสวมเครื่องแบบ"
    },
    {
        "word": "unimportant",
        "partOfSpeech": "adjective",
        "translation": "ไม่สําคัญ",
        "definition": "",
        "example": "This detail is unimportant.",
        "exampleTranslation": "รายละเอียดนี้ไม่สำคัญ"
    },
    {
        "word": "union",
        "partOfSpeech": "noun",
        "translation": "สหภาพ",
        "definition": "",
        "example": "They formed a workers union.",
        "exampleTranslation": "พวกเขาก่อตั้งสหภาพแรงงาน"
    },
    {
        "word": "unique",
        "partOfSpeech": "noun",
        "translation": "มีลักษณะเฉพาะ",
        "definition": "",
        "example": "Everyone fingerprint is unique.",
        "exampleTranslation": "ลายนิ้วมือของทุกคนมีเอกลักษณ์เฉพาะตัว"
    },
    {
        "word": "unit",
        "partOfSpeech": "noun",
        "translation": "บท, หน่วย",
        "definition": "",
        "example": "This unit of measurement is old.",
        "exampleTranslation": "หน่วยวัดนี้เป็นแบบเก่า"
    },
    {
        "word": "unite",
        "partOfSpeech": "adjective",
        "translation": "รวมกัน",
        "definition": "",
        "example": "We must unite to solve this problem.",
        "exampleTranslation": "พวกเราต้องรวมพลังกันเพื่อแก้ปัญหานี้"
    },
    {
        "word": "united",
        "partOfSpeech": "adjective",
        "translation": "รวมกัน ร่วมกัน",
        "definition": "",
        "example": "They stood united.",
        "exampleTranslation": "พวกเขายืนหยัดเป็นหนึ่งเดียวกัน"
    },
    {
        "word": "universe",
        "partOfSpeech": "noun",
        "translation": "จักรวาล",
        "definition": "",
        "example": "The universe is vast.",
        "exampleTranslation": "จักรวาลนั้นกว้างใหญ่"
    },
    {
        "word": "university",
        "partOfSpeech": "noun",
        "translation": "มหาวิทยาลัย",
        "definition": "",
        "example": "She studies at the university.",
        "exampleTranslation": "เธอเรียนที่มหาวิทยาลัย"
    },
    {
        "word": "unkind",
        "partOfSpeech": "noun",
        "translation": "ไม่ใจดี ไม่มีเมตตา",
        "definition": "",
        "example": "It was unkind of you to say that.",
        "exampleTranslation": "มันเป็นเรื่องใจร้ายที่คุณพูดแบบนั้น"
    },
    {
        "word": "unknown",
        "partOfSpeech": "adjective",
        "translation": "ไม่มีใครรู้ ลึกลับ",
        "definition": "",
        "example": "His name is unknown.",
        "exampleTranslation": "ไม่มีใครรู้จักชื่อของเขา"
    },
    {
        "word": "unless",
        "partOfSpeech": "noun",
        "translation": "นอกจาก ถ้าไม่",
        "definition": "",
        "example": "I will not go unless you come.",
        "exampleTranslation": "ฉันจะไม่ไปเว้นแต่คุณจะมา"
    },
    {
        "word": "unlike",
        "partOfSpeech": "noun",
        "translation": "แตกต่างจาก ไม่เหมือนกัน",
        "definition": "",
        "example": "Unlike his brother, he is very shy.",
        "exampleTranslation": "แตกต่างจากพี่ชาย เขาเป็นคนขี้อายมาก"
    },
    {
        "word": "unlikely",
        "partOfSpeech": "adjective",
        "translation": "ไม่น่าจะเกิดขึ้น",
        "definition": "",
        "example": "It is unlikely to rain today.",
        "exampleTranslation": "วันนี้ไม่น่าจะมีฝนตก"
    },
    {
        "word": "unload",
        "partOfSpeech": "noun",
        "translation": "ถ่ายของ ถอนกระสุนออก",
        "definition": "",
        "example": "They began to unload the truck.",
        "exampleTranslation": "พวกเขาเริ่มขนของลงจากรถบรรทุก"
    },
    {
        "word": "unlucky",
        "partOfSpeech": "adjective",
        "translation": "โชคไม่ดี",
        "definition": "",
        "example": "I was very unlucky today.",
        "exampleTranslation": "วันนี้ฉันโชคร้ายมาก"
    },
    {
        "word": "unnecessary",
        "partOfSpeech": "adjective",
        "translation": "ไม่จําเป็น",
        "definition": "",
        "example": "This step is unnecessary.",
        "exampleTranslation": "ขั้นตอนนี้ไม่จำเป็น"
    },
    {
        "word": "unpleasant",
        "partOfSpeech": "adjective",
        "translation": "ไม่รื่นรมย์ ไม่เป็นที่พอใจ ไม่สนุก",
        "definition": "",
        "example": "There was an unpleasant smell.",
        "exampleTranslation": "มีกลิ่นที่ไม่พึงประสงค์"
    },
    {
        "word": "unreasonable",
        "partOfSpeech": "adjective",
        "translation": "ไร้เหตุผล ไม่เหมาะสม",
        "definition": "",
        "example": "His demands are unreasonable.",
        "exampleTranslation": "ความต้องการของเขาไม่มีเหตุผล"
    },
    {
        "word": "unsteady",
        "partOfSpeech": "adjective",
        "translation": "ไม่คงเส้นคงวา ง่องแง่ง",
        "definition": "",
        "example": "He was unsteady on his feet.",
        "exampleTranslation": "เขาเดินโซเซ"
    },
    {
        "word": "unsuccessful",
        "partOfSpeech": "adjective",
        "translation": "ไม่ประสบความสําเร็จ ล้มเหลว",
        "definition": "",
        "example": "The attempt was unsuccessful.",
        "exampleTranslation": "ความพยายามไม่ประสบความสำเร็จ"
    },
    {
        "word": "untidy",
        "partOfSpeech": "noun",
        "translation": "ไม่เรียบร้อย ไม่เป็นระเบียบ",
        "definition": "",
        "example": "His desk is very untidy.",
        "exampleTranslation": "โต๊ะทำงานของเขาไม่เป็นระเบียบเลย"
    },
    {
        "word": "until",
        "partOfSpeech": "noun",
        "translation": "จนกระทั่ง",
        "definition": "",
        "example": "Wait until I return.",
        "exampleTranslation": "รอจนกว่าฉันจะกลับมา"
    },
    {
        "word": "unusual",
        "partOfSpeech": "adjective",
        "translation": "ผิดจากธรรมดา",
        "definition": "",
        "example": "This is a very unusual bird.",
        "exampleTranslation": "นี่คือนกที่แปลกมาก"
    },
    {
        "word": "unwilling",
        "partOfSpeech": "adjective",
        "translation": "ไม่เต็มใจ",
        "definition": "",
        "example": "He was unwilling to help.",
        "exampleTranslation": "เขาไม่เต็มใจที่จะช่วยเหลือ"
    },
    {
        "word": "up",
        "partOfSpeech": "adverb",
        "translation": "เหนือ, อยู่บน",
        "definition": "",
        "example": "Look up at the sky.",
        "exampleTranslation": "มองขึ้นไปบนท้องฟ้า"
    },
    {
        "word": "upon",
        "partOfSpeech": "noun",
        "translation": "บน",
        "definition": "",
        "example": "Once upon a time.",
        "exampleTranslation": "กาลครั้งหนึ่งนานมาแล้ว"
    },
    {
        "word": "upper",
        "partOfSpeech": "adjective",
        "translation": "ด้านบน",
        "definition": "",
        "example": "He lives on the upper floor.",
        "exampleTranslation": "เขาอาศัยอยู่ชั้นบน"
    },
    {
        "word": "upset",
        "partOfSpeech": "noun",
        "translation": "อารมณ์เสีย",
        "definition": "",
        "example": "Why are you upset?",
        "exampleTranslation": "ทำไมคุณถึงอารมณ์เสีย?"
    },
    {
        "word": "upside down",
        "partOfSpeech": "adjective",
        "translation": "ควํ่า",
        "definition": "",
        "example": "The painting was hung upside down.",
        "exampleTranslation": "ภาพวาดถูกแขวนกลับหัว"
    },
    {
        "word": "upstairs",
        "partOfSpeech": "noun",
        "translation": "ชั้นบน",
        "definition": "",
        "example": "She went upstairs to her room.",
        "exampleTranslation": "เธอเดินขึ้นบันไดไปที่ห้องของเธอ"
    },
    {
        "word": "upward",
        "partOfSpeech": "adverb",
        "translation": "ทางเหนือขึ้นไป",
        "definition": "",
        "example": "The trend is moving upward.",
        "exampleTranslation": "แนวโน้มกำลังเคลื่อนตัวสูงขึ้น"
    },
    {
        "word": "urban",
        "partOfSpeech": "adjective",
        "translation": "เกี่ยวกับเมือง อาศัยอยู่ในเมือง",
        "definition": "",
        "example": "They live in an urban area.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในเขตเมือง"
    },
    {
        "word": "urge",
        "partOfSpeech": "noun",
        "translation": "กระตุ้น",
        "definition": "",
        "example": "I urge you to think again.",
        "exampleTranslation": "ฉันขอให้คุณคิดทบทวนอีกครั้ง"
    },
    {
        "word": "urgent",
        "partOfSpeech": "noun",
        "translation": "ด่วน",
        "definition": "",
        "example": "This is an urgent message.",
        "exampleTranslation": "นี่คือข้อความด่วน"
    },
    {
        "word": "us",
        "partOfSpeech": "noun",
        "translation": "เรา พวกเรา",
        "definition": "",
        "example": "Come with us.",
        "exampleTranslation": "มากับพวกเราสิ"
    },
    {
        "word": "use",
        "partOfSpeech": "noun",
        "translation": "ใช้",
        "definition": "",
        "example": "Can I use your pen?",
        "exampleTranslation": "ฉันขอใช้ปากกาของคุณได้ไหม?"
    },
    {
        "word": "used",
        "partOfSpeech": "verb",
        "translation": "ซึ่งถูกใช้ ที่เคยใช้มาก่อน",
        "definition": "",
        "example": "I bought a used car.",
        "exampleTranslation": "ฉันซื้อรถมือสอง"
    },
    {
        "word": "used to",
        "partOfSpeech": "noun",
        "translation": "เคยชินกับ",
        "definition": "",
        "example": "I used to play tennis.",
        "exampleTranslation": "ฉันเคยเล่นเทนนิส"
    },
    {
        "word": "useful",
        "partOfSpeech": "adjective",
        "translation": "มีประโยชน์",
        "definition": "",
        "example": "This tool is very useful.",
        "exampleTranslation": "เครื่องมือนี้มีประโยชน์มาก"
    },
    {
        "word": "useless",
        "partOfSpeech": "noun",
        "translation": "ไร้ประโยชน์",
        "definition": "",
        "example": "This broken umbrella is useless.",
        "exampleTranslation": "ร่มที่พังคันนี้ไม่มีประโยชน์เลย"
    },
    {
        "word": "user",
        "partOfSpeech": "noun",
        "translation": "ผู้ใช้",
        "definition": "",
        "example": "He is a new user.",
        "exampleTranslation": "เขาเป็นผู้ใช้ใหม่"
    },
    {
        "word": "usual",
        "partOfSpeech": "adjective",
        "translation": "ตามปกติ",
        "definition": "",
        "example": "I will have my usual drink.",
        "exampleTranslation": "ฉันจะดื่มเครื่องดื่มตามปกติ"
    },
    {
        "word": "usually",
        "partOfSpeech": "adverb",
        "translation": "เป็นปกติ สมํ่าเสมอ",
        "definition": "",
        "example": "I usually wake up early.",
        "exampleTranslation": "โดยปกติฉันตื่นเช้า"
    },
    {
        "word": "vacation",
        "partOfSpeech": "noun",
        "translation": "ช่วงลาพักผ่อน ช่วงปิดภาคเรียน",
        "definition": "",
        "example": "We went on vacation to Hawaii.",
        "exampleTranslation": "พวกเราไปพักร้อนที่ฮาวาย"
    },
    {
        "word": "valid",
        "partOfSpeech": "adjective",
        "translation": "ถูกต้องตามเงื่อนไข",
        "definition": "",
        "example": "Is this ticket still valid?",
        "exampleTranslation": "ตั๋วใบนี้ยังใช้ได้อยู่ไหม?"
    },
    {
        "word": "valley",
        "partOfSpeech": "noun",
        "translation": "หุบเขา",
        "definition": "",
        "example": "The village is in a valley.",
        "exampleTranslation": "หมู่บ้านอยู่ในหุบเขา"
    },
    {
        "word": "valuable",
        "partOfSpeech": "adjective",
        "translation": "มีคุณค่า",
        "definition": "",
        "example": "This watch is very valuable.",
        "exampleTranslation": "นาฬิกาเรือนนี้มีค่ามาก"
    },
    {
        "word": "value",
        "partOfSpeech": "noun",
        "translation": "คุณค่า ราคา",
        "definition": "",
        "example": "What is the value of this house?",
        "exampleTranslation": "มูลค่าของบ้านหลังนี้คือเท่าไหร่?"
    },
    {
        "word": "van",
        "partOfSpeech": "noun",
        "translation": "รถตู้",
        "definition": "",
        "example": "The men arrived in a white van.",
        "exampleTranslation": "ผู้ชายมาถึงด้วยรถตู้สีขาว"
    },
    {
        "word": "variation",
        "partOfSpeech": "noun",
        "translation": "การเปลี่ยนแปลง การผันแปร การแปรปรวน",
        "definition": "",
        "example": "There is a slight variation in color.",
        "exampleTranslation": "มีความแตกต่างของสีเล็กน้อย"
    },
    {
        "word": "varied",
        "partOfSpeech": "noun",
        "translation": "แตกต่างกัน, ต่างๆนานา",
        "definition": "",
        "example": "His interests are very varied.",
        "exampleTranslation": "ความสนใจของเขามีหลากหลาย"
    },
    {
        "word": "variety",
        "partOfSpeech": "noun",
        "translation": "ความหลากหลาย",
        "definition": "",
        "example": "The store sells a wide variety of goods.",
        "exampleTranslation": "ร้านขายสินค้าที่หลากหลาย"
    },
    {
        "word": "various",
        "partOfSpeech": "adjective",
        "translation": "ต่างๆ",
        "definition": "",
        "example": "There are various ways to do this.",
        "exampleTranslation": "มีวิธีทำสิ่งนี้ได้หลากหลายวิธี"
    },
    {
        "word": "vary",
        "partOfSpeech": "noun",
        "translation": "เปลี่ยนแปลง",
        "definition": "",
        "example": "The weather can vary from day to day.",
        "exampleTranslation": "สภาพอากาศอาจแตกต่างกันไปในแต่ละวัน"
    },
    {
        "word": "vast",
        "partOfSpeech": "noun",
        "translation": "ใหญ่ มหึมา",
        "definition": "",
        "example": "Russia is a vast country.",
        "exampleTranslation": "รัสเซียเป็นประเทศที่กว้างใหญ่มาก"
    },
    {
        "word": "vegetable",
        "partOfSpeech": "noun",
        "translation": "พืชผัก ผัก",
        "definition": "",
        "example": "You should eat more vegetables.",
        "exampleTranslation": "คุณควรทานผักให้มากขึ้น"
    },
    {
        "word": "vehicle",
        "partOfSpeech": "noun",
        "translation": "พาหนะ",
        "definition": "",
        "example": "A car is a motor vehicle.",
        "exampleTranslation": "รถยนต์เป็นยานยนต์"
    },
    {
        "word": "venture",
        "partOfSpeech": "noun",
        "translation": "การเสี่ยงภัย",
        "definition": "",
        "example": "They started a new business venture.",
        "exampleTranslation": "พวกเขาเริ่มโครงการธุรกิจใหม่"
    },
    {
        "word": "version",
        "partOfSpeech": "noun",
        "translation": "ฉบับ",
        "definition": "",
        "example": "This is the latest version of the app.",
        "exampleTranslation": "นี่คือแอพเวอร์ชันล่าสุด"
    },
    {
        "word": "vertical",
        "partOfSpeech": "adjective",
        "translation": "ซึ่งตั้งตรง แนวตั้งฉาก",
        "definition": "",
        "example": "Draw a vertical line.",
        "exampleTranslation": "วาดเส้นแนวตั้ง"
    },
    {
        "word": "very",
        "partOfSpeech": "adverb",
        "translation": "มาก แท้จริง",
        "definition": "",
        "example": "Thank you very much.",
        "exampleTranslation": "ขอบคุณมาก"
    },
    {
        "word": "via",
        "partOfSpeech": "noun",
        "translation": "โดยทาง โดยเส้นทาง",
        "definition": "",
        "example": "We flew to London via Dubai.",
        "exampleTranslation": "พวกเราบินไปลอนดอนโดยผ่านดูไบ"
    },
    {
        "word": "victim",
        "partOfSpeech": "noun",
        "translation": "เหยื่อ, ผู้รับบาป",
        "definition": "",
        "example": "He is a victim of a crime.",
        "exampleTranslation": "เขาเป็นเหยื่อของอาชญากรรม"
    },
    {
        "word": "victory",
        "partOfSpeech": "noun",
        "translation": "ชัยชนะ",
        "definition": "",
        "example": "They celebrated their victory.",
        "exampleTranslation": "พวกเขาเฉลิมฉลองชัยชนะของพวกเขา"
    },
    {
        "word": "video",
        "partOfSpeech": "noun",
        "translation": "วิดีโอ",
        "definition": "",
        "example": "I watched a funny video.",
        "exampleTranslation": "ฉันดูวิดีโอตลกๆ"
    },
    {
        "word": "view",
        "partOfSpeech": "noun",
        "translation": "ภาพ, ทิวทัศน์",
        "definition": "",
        "example": "The room has a beautiful view.",
        "exampleTranslation": "ห้องมีวิวที่สวยงาม"
    },
    {
        "word": "village",
        "partOfSpeech": "noun",
        "translation": "หมู่บ้านตามบ้านนอก",
        "definition": "",
        "example": "They live in a small village.",
        "exampleTranslation": "พวกเขาอาศัยอยู่ในหมู่บ้านเล็กๆ"
    },
    {
        "word": "violence",
        "partOfSpeech": "noun",
        "translation": "ความรุนแรง",
        "definition": "",
        "example": "There is too much violence on TV.",
        "exampleTranslation": "มีความรุนแรงมากเกินไปในทีวี"
    },
    {
        "word": "violent",
        "partOfSpeech": "noun",
        "translation": "รุนแรง",
        "definition": "",
        "example": "The movie is very violent.",
        "exampleTranslation": "ภาพยนตร์เรื่องนี้มีความรุนแรงมาก"
    },
    {
        "word": "violently",
        "partOfSpeech": "adverb",
        "translation": "อย่างรุนแรง",
        "definition": "",
        "example": "He shook the door violently.",
        "exampleTranslation": "เขาเขย่าประตูอย่างรุนแรง"
    },
    {
        "word": "virtually",
        "partOfSpeech": "adverb",
        "translation": "อย่างเเท้จริง",
        "definition": "",
        "example": "The room was virtually empty.",
        "exampleTranslation": "ห้องนี้แทบจะว่างเปล่า"
    },
    {
        "word": "virus",
        "partOfSpeech": "noun",
        "translation": "ไวรัส",
        "definition": "",
        "example": "Wash your hands to avoid the virus.",
        "exampleTranslation": "ล้างมือของคุณเพื่อหลีกเลี่ยงไวรัส"
    },
    {
        "word": "visible",
        "partOfSpeech": "adjective",
        "translation": "มองเห็นได้ สังเกตได้",
        "definition": "",
        "example": "The stars are visible tonight.",
        "exampleTranslation": "คืนนี้สามารถมองเห็นดวงดาวได้"
    },
    {
        "word": "vision",
        "partOfSpeech": "noun",
        "translation": "ความสามารถในการเห็นภาพ วิสัยทัศน์",
        "definition": "",
        "example": "He has poor vision in his left eye.",
        "exampleTranslation": "เขามีสายตาที่ไม่ดีในตาซ้าย"
    },
    {
        "word": "visit",
        "partOfSpeech": "noun",
        "translation": "เยี่ยม",
        "definition": "",
        "example": "I will visit my grandmother tomorrow.",
        "exampleTranslation": "ฉันจะไปเยี่ยมคุณยายพรุ่งนี้"
    },
    {
        "word": "visitor",
        "partOfSpeech": "noun",
        "translation": "ผู้เยี่ยมเยียน แขก",
        "definition": "",
        "example": "We have a visitor today.",
        "exampleTranslation": "วันนี้พวกเรามีแขกมาเยือน"
    },
    {
        "word": "vital",
        "partOfSpeech": "noun",
        "translation": "จําเป็นสําหรับชีวิต ที่ทําให้ถึงตามได้",
        "definition": "",
        "example": "Water is vital for life.",
        "exampleTranslation": "น้ำมีความสำคัญยิ่งต่อชีวิต"
    },
    {
        "word": "vocabulary",
        "partOfSpeech": "adjective",
        "translation": "ประมวลศัพท์, พจนานุกรม",
        "definition": "",
        "example": "You need to learn new vocabulary.",
        "exampleTranslation": "คุณต้องเรียนรู้คำศัพท์ใหม่"
    },
    {
        "word": "voice",
        "partOfSpeech": "noun",
        "translation": "เสียง",
        "definition": "",
        "example": "She has a beautiful singing voice.",
        "exampleTranslation": "เธอมีเสียงร้องเพลงที่ไพเราะ"
    },
    {
        "word": "volume",
        "partOfSpeech": "noun",
        "translation": "ปริมาตร ปริมาณ เล่ม ความดังของเสียง",
        "definition": "",
        "example": "Please turn down the volume.",
        "exampleTranslation": "โปรดลดระดับเสียงลง"
    },
    {
        "word": "vote",
        "partOfSpeech": "noun",
        "translation": "การลงคะแนนเสียง",
        "definition": "",
        "example": "Do not forget to vote in the election.",
        "exampleTranslation": "อย่าลืมไปลงคะแนนเสียงในการเลือกตั้ง"
    },
    {
        "word": "wage",
        "partOfSpeech": "noun",
        "translation": "ค่าจ้าง เงินเดือน",
        "definition": "",
        "example": "The minimum wage has increased.",
        "exampleTranslation": "ค่าจ้างขั้นต่ำเพิ่มขึ้น"
    },
    {
        "word": "waist",
        "partOfSpeech": "noun",
        "translation": "เอว",
        "definition": "",
        "example": "He tied a belt around his waist.",
        "exampleTranslation": "เขาผูกเข็มขัดรอบเอว"
    },
    {
        "word": "wait",
        "partOfSpeech": "noun",
        "translation": "รอคอย",
        "definition": "",
        "example": "Please wait for me.",
        "exampleTranslation": "โปรดรอฉันด้วย"
    },
    {
        "word": "waiter",
        "partOfSpeech": "noun",
        "translation": "บริกร",
        "definition": "",
        "example": "The waiter brought our food.",
        "exampleTranslation": "พนักงานเสิร์ฟนำอาหารมาให้พวกเรา"
    },
    {
        "word": "wake",
        "partOfSpeech": "noun",
        "translation": "ปลุก",
        "definition": "",
        "example": "I wake up at 6 AM every day.",
        "exampleTranslation": "ฉันตื่นนอนตอน 6 โมงเช้าทุกวัน"
    },
    {
        "word": "walk",
        "partOfSpeech": "noun",
        "translation": "เดิน",
        "definition": "",
        "example": "Let us go for a walk.",
        "exampleTranslation": "ไปเดินเล่นกันเถอะ"
    },
    {
        "word": "walking",
        "partOfSpeech": "noun",
        "translation": "เคลื่อนที่ได้ . การเดิน",
        "definition": "",
        "example": "I enjoy walking in the park.",
        "exampleTranslation": "ฉันชอบเดินในสวนสาธารณะ"
    },
    {
        "word": "wall",
        "partOfSpeech": "noun",
        "translation": "กําแพง",
        "definition": "",
        "example": "There is a clock on the wall.",
        "exampleTranslation": "มีนาฬิกาอยู่บนผนัง"
    },
    {
        "word": "wallet",
        "partOfSpeech": "noun",
        "translation": "กระเป๋าหนังเล็กสําหรับใส่ธนบัตร",
        "definition": "",
        "example": "I lost my wallet.",
        "exampleTranslation": "ฉันทำกระเป๋าสตางค์หาย"
    },
    {
        "word": "wander",
        "partOfSpeech": "noun",
        "translation": "เดินทางไปโดยไม่มีจุดหมายที่แน่นอน ร่อนเร่",
        "definition": "",
        "example": "We wandered around the town.",
        "exampleTranslation": "พวกเราเดินเตร็ดเตร่ไปรอบๆ เมือง"
    },
    {
        "word": "want",
        "partOfSpeech": "noun",
        "translation": "ต้องการ",
        "definition": "",
        "example": "I want a cup of coffee.",
        "exampleTranslation": "ฉันต้องการกาแฟหนึ่งถ้วย"
    },
    {
        "word": "war",
        "partOfSpeech": "noun",
        "translation": "สงคราม",
        "definition": "",
        "example": "The country is at war.",
        "exampleTranslation": "ประเทศกำลังอยู่ในภาวะสงคราม"
    },
    {
        "word": "warm",
        "partOfSpeech": "noun",
        "translation": "อุ่น",
        "definition": "",
        "example": "It is a warm day today.",
        "exampleTranslation": "วันนี้อากาศอบอุ่น"
    },
    {
        "word": "warmth",
        "partOfSpeech": "noun",
        "translation": "ความอบอุ่น",
        "definition": "",
        "example": "I could feel the warmth of the sun.",
        "exampleTranslation": "ฉันสัมผัสได้ถึงความอบอุ่นของดวงอาทิตย์"
    },
    {
        "word": "warn",
        "partOfSpeech": "noun",
        "translation": "เตือน",
        "definition": "",
        "example": "I warned him about the danger.",
        "exampleTranslation": "ฉันเตือนเขาเกี่ยวกับอันตรายแล้ว"
    },
    {
        "word": "warning",
        "partOfSpeech": "verb",
        "translation": "สัญญาณเตือนถึงเหตุร้าย คําเตือน",
        "definition": "",
        "example": "They ignored the warning signs.",
        "exampleTranslation": "พวกเขาเพิกเฉยต่อป้ายเตือน"
    },
    {
        "word": "wash",
        "partOfSpeech": "noun",
        "translation": "ล้าง",
        "definition": "",
        "example": "Please wash your hands.",
        "exampleTranslation": "โปรดล้างมือของคุณ"
    },
    {
        "word": "washing",
        "partOfSpeech": "verb",
        "translation": "การซัก การล้าง",
        "definition": "",
        "example": "She is washing the dishes.",
        "exampleTranslation": "เธอกำลังล้างจาน"
    },
    {
        "word": "waste",
        "partOfSpeech": "noun",
        "translation": "เสีย",
        "definition": "",
        "example": "Do not waste your money.",
        "exampleTranslation": "อย่าสิ้นเปลืองเงินของคุณ"
    },
    {
        "word": "watch",
        "partOfSpeech": "noun",
        "translation": "ดู",
        "definition": "",
        "example": "I watch TV every evening.",
        "exampleTranslation": "ฉันดูทีวีทุกเย็น"
    },
    {
        "word": "water",
        "partOfSpeech": "noun",
        "translation": "นํ้า",
        "definition": "",
        "example": "Can I have a glass of water?",
        "exampleTranslation": "ฉันขอขอน้ำสักแก้วได้ไหม?"
    },
    {
        "word": "wave",
        "partOfSpeech": "noun",
        "translation": "คลื่น",
        "definition": "",
        "example": "He waved goodbye.",
        "exampleTranslation": "เขาโบกมือลา"
    },
    {
        "word": "way",
        "partOfSpeech": "noun",
        "translation": "ทาง เส้นทาง",
        "definition": "",
        "example": "Can you show me the way?",
        "exampleTranslation": "คุณช่วยบอกทางฉันได้ไหม?"
    },
    {
        "word": "we",
        "partOfSpeech": "noun",
        "translation": "เรา",
        "definition": "",
        "example": "We are going to the cinema.",
        "exampleTranslation": "พวกเรากำลังจะไปโรงภาพยนตร์"
    },
    {
        "word": "weak",
        "partOfSpeech": "adjective",
        "translation": "อ่อนแอ",
        "definition": "",
        "example": "He is feeling very weak.",
        "exampleTranslation": "เขารู้สึกอ่อนแอมาก"
    },
    {
        "word": "weakness",
        "partOfSpeech": "noun",
        "translation": "ความอ่อนแอ",
        "definition": "",
        "example": "Chocolate is my weakness.",
        "exampleTranslation": "ช็อกโกแลตคือจุดอ่อนของฉัน"
    },
    {
        "word": "wealth",
        "partOfSpeech": "noun",
        "translation": "ความมั่งคั่ง",
        "definition": "",
        "example": "He used his wealth to help others.",
        "exampleTranslation": "เขาใช้ความมั่งคั่งเพื่อช่วยเหลือผู้อื่น"
    },
    {
        "word": "weapon",
        "partOfSpeech": "noun",
        "translation": "อาวุธ",
        "definition": "",
        "example": "The police found the murder weapon.",
        "exampleTranslation": "ตำรวจพบอาวุธที่ใช้ฆาตกรรม"
    },
    {
        "word": "wear",
        "partOfSpeech": "noun",
        "translation": "สวมใส่ ใส่",
        "definition": "",
        "example": "What will you wear to the party?",
        "exampleTranslation": "คุณจะสวมอะไรไปงานปาร์ตี้?"
    },
    {
        "word": "weather",
        "partOfSpeech": "noun",
        "translation": "สภาพอากาศ",
        "definition": "",
        "example": "The weather is beautiful today.",
        "exampleTranslation": "วันนี้อากาศดีมาก"
    },
    {
        "word": "web",
        "partOfSpeech": "noun",
        "translation": "ใยแมงมุม",
        "definition": "",
        "example": "The spider spun a web.",
        "exampleTranslation": "แมงมุมชักใย"
    },
    {
        "word": "website",
        "partOfSpeech": "noun",
        "translation": "เว็บไซต์",
        "definition": "",
        "example": "Visit our website for more information.",
        "exampleTranslation": "เยี่ยมชมเว็บไซต์ของเราสำหรับข้อมูลเพิ่มเติม"
    },
    {
        "word": "wedding",
        "partOfSpeech": "noun",
        "translation": "งานแต่งงาน",
        "definition": "",
        "example": "They invited us to their wedding.",
        "exampleTranslation": "พวกเขาเชิญพวกเราไปงานแต่งงานของพวกเขา"
    },
    {
        "word": "Wednesday",
        "partOfSpeech": "noun",
        "translation": "วันพุธ",
        "definition": "",
        "example": "The meeting is on Wednesday.",
        "exampleTranslation": "การประชุมมีขึ้นในวันพุธ"
    },
    {
        "word": "week",
        "partOfSpeech": "noun",
        "translation": "สัปดาห์",
        "definition": "",
        "example": "I work five days a week.",
        "exampleTranslation": "ฉันทำงานห้าวันต่อสัปดาห์"
    },
    {
        "word": "weekend",
        "partOfSpeech": "noun",
        "translation": "วันสุดสัปดาห์",
        "definition": "",
        "example": "What are you doing this weekend?",
        "exampleTranslation": "สุดสัปดาห์นี้คุณจะทำอะไร?"
    },
    {
        "word": "weigh",
        "partOfSpeech": "noun",
        "translation": "ชั่งนํ้าหนัก",
        "definition": "",
        "example": "How much do you weigh?",
        "exampleTranslation": "คุณน้ำหนักเท่าไหร่?"
    },
    {
        "word": "weight",
        "partOfSpeech": "verb",
        "translation": "นํ้าหนัก, .",
        "definition": "",
        "example": "I need to lose some weight.",
        "exampleTranslation": "ฉันต้องลดน้ำหนัก"
    },
    {
        "word": "welcome",
        "partOfSpeech": "noun",
        "translation": "ยินดีต้อนรับ",
        "definition": "",
        "example": "Welcome to our home.",
        "exampleTranslation": "ยินดีต้อนรับสู่บ้านของเรา"
    },
    {
        "word": "well",
        "partOfSpeech": "adverb",
        "translation": "ดี",
        "definition": "",
        "example": "I hope you get well soon.",
        "exampleTranslation": "ฉันหวังว่าคุณจะหายดีในเร็ววัน"
    },
    {
        "word": "well known",
        "partOfSpeech": "noun",
        "translation": "เป็นที่รู้จักดี",
        "definition": "",
        "example": "He is a well known author.",
        "exampleTranslation": "เขาเป็นนักเขียนที่มีชื่อเสียง"
    },
    {
        "word": "west",
        "partOfSpeech": "noun",
        "translation": "ตะวันตก",
        "definition": "",
        "example": "The sun sets in the west.",
        "exampleTranslation": "ดวงอาทิตย์ตกทางทิศตะวันตก"
    },
    {
        "word": "western",
        "partOfSpeech": "adjective",
        "translation": "ทางทิศตะวันตก",
        "definition": "",
        "example": "He likes Western food.",
        "exampleTranslation": "เขาชอบอาหารตะวันตก"
    },
    {
        "word": "wet",
        "partOfSpeech": "noun",
        "translation": "เปียก",
        "definition": "",
        "example": "My clothes are wet.",
        "exampleTranslation": "เสื้อผ้าของฉันเปียก"
    },
    {
        "word": "what",
        "partOfSpeech": "noun",
        "translation": "อะไร",
        "definition": "",
        "example": "What is your name?",
        "exampleTranslation": "คุณชื่ออะไร?"
    },
    {
        "word": "whatever",
        "partOfSpeech": "noun",
        "translation": "อะไรก็ตาม",
        "definition": "",
        "example": "Do whatever you want.",
        "exampleTranslation": "ทำสิ่งใดก็ตามที่คุณต้องการ"
    },
    {
        "word": "wheel",
        "partOfSpeech": "noun",
        "translation": "ล้อ",
        "definition": "",
        "example": "The car has four wheels.",
        "exampleTranslation": "รถมีสี่ล้อ"
    },
    {
        "word": "when",
        "partOfSpeech": "noun",
        "translation": "เมื่อไร เมื่อ ตอนที่ ถ้า",
        "definition": "",
        "example": "When will you arrive?",
        "exampleTranslation": "คุณจะมาถึงเมื่อไหร่?"
    },
    {
        "word": "whenever",
        "partOfSpeech": "noun",
        "translation": "เมื่อใดก็ตามที่",
        "definition": "",
        "example": "Come whenever you want.",
        "exampleTranslation": "มาเมื่อไหร่ก็ได้ที่คุณต้องการ"
    },
    {
        "word": "where",
        "partOfSpeech": "noun",
        "translation": "ที่ไหน",
        "definition": "",
        "example": "Where do you live?",
        "exampleTranslation": "คุณอาศัยอยู่ที่ไหน?"
    },
    {
        "word": "whereas",
        "partOfSpeech": "noun",
        "translation": "ในทางตรงกันข้าม (ใช้เปรียบเทียบ)",
        "definition": "",
        "example": "He is tall, whereas his brother is short.",
        "exampleTranslation": "เขาสูง ในขณะที่น้องชายของเขาเตี้ย"
    },
    {
        "word": "wherever",
        "partOfSpeech": "noun",
        "translation": "ที่ไหนก็ตาม ไม่ว่าที่ใด",
        "definition": "",
        "example": "I will follow you wherever you go.",
        "exampleTranslation": "ฉันจะตามคุณไปทุกที่ที่คุณไป"
    },
    {
        "word": "whether",
        "partOfSpeech": "noun",
        "translation": "หรือไม่",
        "definition": "",
        "example": "I do not know whether it will rain.",
        "exampleTranslation": "ฉันไม่รู้ว่าฝนจะตกหรือเปล่า"
    },
    {
        "word": "which",
        "partOfSpeech": "noun",
        "translation": "อันไหน อันซึ่ง",
        "definition": "",
        "example": "Which color do you prefer?",
        "exampleTranslation": "คุณชอบสีไหนมากกว่า?"
    },
    {
        "word": "while",
        "partOfSpeech": "noun",
        "translation": "ชั่วขณะ ในขณะที่",
        "definition": "",
        "example": "I read a book while waiting.",
        "exampleTranslation": "ฉันอ่านหนังสือระหว่างรอ"
    },
    {
        "word": "whisper",
        "partOfSpeech": "noun",
        "translation": "กระซิบ",
        "definition": "",
        "example": "She whispered in my ear.",
        "exampleTranslation": "เธอกระซิบที่หูของฉัน"
    },
    {
        "word": "whistle",
        "partOfSpeech": "noun",
        "translation": "เป่านกหวีด",
        "definition": "",
        "example": "He blew the whistle.",
        "exampleTranslation": "เขาเป่านกหวีด"
    },
    {
        "word": "white",
        "partOfSpeech": "adjective",
        "translation": "ขาว",
        "definition": "",
        "example": "She wore a white dress.",
        "exampleTranslation": "เธอสวมชุดสีขาว"
    },
    {
        "word": "who",
        "partOfSpeech": "noun",
        "translation": "ใคร ผู้ที่",
        "definition": "",
        "example": "Who is that man?",
        "exampleTranslation": "ผู้ชายคนนั้นคือใคร?"
    },
    {
        "word": "whoever",
        "partOfSpeech": "noun",
        "translation": "ใครก็ตาม",
        "definition": "",
        "example": "Whoever did this will be punished.",
        "exampleTranslation": "ใครก็ตามที่ทำสิ่งนี้จะต้องถูกลงโทษ"
    },
    {
        "word": "whole",
        "partOfSpeech": "adjective",
        "translation": "ทั้งหมด ทั้งสิ้น",
        "definition": "",
        "example": "I ate the whole pizza.",
        "exampleTranslation": "ฉันกินพิซซ่าทั้งถาด"
    },
    {
        "word": "whom",
        "partOfSpeech": "noun",
        "translation": "ใคร ผู้ซึ่ง ผู้ที่ ผู้ใด",
        "definition": "",
        "example": "With whom did you go?",
        "exampleTranslation": "คุณไปกับใคร?"
    },
    {
        "word": "whose",
        "partOfSpeech": "noun",
        "translation": "ของใคร",
        "definition": "",
        "example": "Whose book is this?",
        "exampleTranslation": "นี่คือหนังสือของใคร?"
    },
    {
        "word": "why",
        "partOfSpeech": "noun",
        "translation": "ทําไม",
        "definition": "",
        "example": "Why are you late?",
        "exampleTranslation": "ทำไมคุณถึงมาสาย?"
    },
    {
        "word": "wide",
        "partOfSpeech": "adjective",
        "translation": "กว้าง",
        "definition": "",
        "example": "The river is very wide.",
        "exampleTranslation": "แม่น้ำกว้างมาก"
    },
    {
        "word": "widely",
        "partOfSpeech": "adverb",
        "translation": "กว้างขวาง",
        "definition": "",
        "example": "The book is widely read.",
        "exampleTranslation": "หนังสือเล่มนี้เป็นที่อ่านกันอย่างแพร่หลาย"
    },
    {
        "word": "width",
        "partOfSpeech": "noun",
        "translation": "ความกว้าง",
        "definition": "",
        "example": "Measure the width of the table.",
        "exampleTranslation": "วัดความกว้างของโต๊ะ"
    },
    {
        "word": "wife",
        "partOfSpeech": "noun",
        "translation": "ภรรยา",
        "definition": "",
        "example": "This is my wife, Sarah.",
        "exampleTranslation": "นี่คือซาร่าห์ ภรรยาของฉัน"
    },
    {
        "word": "wild",
        "partOfSpeech": "noun",
        "translation": "เป็นป่า, ดุร้าย",
        "definition": "",
        "example": "There are wild animals in the forest.",
        "exampleTranslation": "มีสัตว์ป่าในป่า"
    },
    {
        "word": "will",
        "partOfSpeech": "noun",
        "translation": "จะ พินัยกรรม ความประสงค์",
        "definition": "",
        "example": "I will call you tomorrow.",
        "exampleTranslation": "ฉันจะโทรหาคุณพรุ่งนี้"
    },
    {
        "word": "willing",
        "partOfSpeech": "adjective",
        "translation": "เต็มใจ",
        "definition": "",
        "example": "I am willing to help you.",
        "exampleTranslation": "ฉันเต็มใจที่จะช่วยเหลือคุณ"
    },
    {
        "word": "win",
        "partOfSpeech": "noun",
        "translation": "ชนะ",
        "definition": "",
        "example": "I hope our team will win.",
        "exampleTranslation": "ฉันหวังว่าทีมของเราจะชนะ"
    },
    {
        "word": "wind",
        "partOfSpeech": "noun",
        "translation": "ลม",
        "definition": "",
        "example": "The wind is blowing hard.",
        "exampleTranslation": "ลมพัดแรง"
    },
    {
        "word": "window",
        "partOfSpeech": "noun",
        "translation": "หน้าต่าง",
        "definition": "",
        "example": "Please open the window.",
        "exampleTranslation": "โปรดเปิดหน้าต่าง"
    },
    {
        "word": "wine",
        "partOfSpeech": "noun",
        "translation": "ไวน์",
        "definition": "",
        "example": "Would you like a glass of wine?",
        "exampleTranslation": "คุณต้องการไวน์สักแก้วไหม?"
    },
    {
        "word": "wing",
        "partOfSpeech": "verb",
        "translation": "ปีก",
        "definition": "",
        "example": "The bird broke its wing.",
        "exampleTranslation": "นกปีกหัก"
    },
    {
        "word": "winner",
        "partOfSpeech": "noun",
        "translation": "ผู้ชนะ",
        "definition": "",
        "example": "He is the winner of the race.",
        "exampleTranslation": "เขาคือผู้ชนะการแข่งขัน"
    },
    {
        "word": "winter",
        "partOfSpeech": "noun",
        "translation": "ฤดูหนาว",
        "definition": "",
        "example": "It is very cold in winter.",
        "exampleTranslation": "ในฤดูหนาวอากาศหนาวมาก"
    },
    {
        "word": "wire",
        "partOfSpeech": "noun",
        "translation": "ลวด สายโทรเลข",
        "definition": "",
        "example": "The wire is connected to the TV.",
        "exampleTranslation": "สายไฟเชื่อมต่อกับทีวี"
    },
    {
        "word": "wise",
        "partOfSpeech": "noun",
        "translation": "ฉลาด",
        "definition": "",
        "example": "That is a wise decision.",
        "exampleTranslation": "นั่นเป็นการตัดสินใจที่ชาญฉลาด"
    },
    {
        "word": "wish",
        "partOfSpeech": "noun",
        "translation": "ปรารถนา ประสงค์ ต้องการ",
        "definition": "",
        "example": "Make a wish!",
        "exampleTranslation": "อธิษฐานสิ!"
    },
    {
        "word": "with",
        "partOfSpeech": "noun",
        "translation": "กับ เกี่ยวกับ ต่อ ในส่วน",
        "definition": "",
        "example": "I am going with my friends.",
        "exampleTranslation": "ฉันกำลังไปกับเพื่อนๆ"
    },
    {
        "word": "withdraw",
        "partOfSpeech": "noun",
        "translation": "ถอน ถอนคืน",
        "definition": "",
        "example": "I need to withdraw some money from the bank.",
        "exampleTranslation": "ฉันต้องถอนเงินจากธนาคาร"
    },
    {
        "word": "within",
        "partOfSpeech": "noun",
        "translation": "ภายใน",
        "definition": "",
        "example": "Please reply within three days.",
        "exampleTranslation": "โปรดตอบกลับภายในสามวัน"
    },
    {
        "word": "without",
        "partOfSpeech": "noun",
        "translation": "โดยไม่ต้อง ปราศจาก",
        "definition": "",
        "example": "I cannot live without you.",
        "exampleTranslation": "ฉันไม่สามารถอยู่ได้ถ้าไม่มีคุณ"
    },
    {
        "word": "witness",
        "partOfSpeech": "noun",
        "translation": "เป็นพยาน",
        "definition": "",
        "example": "She was a witness to the accident.",
        "exampleTranslation": "เธอเป็นพยานในอุบัติเหตุ"
    },
    {
        "word": "woman",
        "partOfSpeech": "noun",
        "translation": "ผู้หญิง",
        "definition": "",
        "example": "She is a beautiful woman.",
        "exampleTranslation": "เธอเป็นผู้หญิงที่สวย"
    },
    {
        "word": "wonder",
        "partOfSpeech": "noun",
        "translation": "ความพิศวงสงสัย ประหลาดใจ",
        "definition": "",
        "example": "I wonder where he is.",
        "exampleTranslation": "ฉันสงสัยว่าเขาอยู่ที่ไหน"
    },
    {
        "word": "wonderful",
        "partOfSpeech": "noun",
        "translation": "ดีเยี่ยม",
        "definition": "",
        "example": "We had a wonderful time.",
        "exampleTranslation": "พวกเรามีช่วงเวลาที่ยอดเยี่ยม"
    },
    {
        "word": "wood",
        "partOfSpeech": "noun",
        "translation": "ไม้",
        "definition": "",
        "example": "This table is made of wood.",
        "exampleTranslation": "โต๊ะตัวนี้ทำจากไม้"
    },
    {
        "word": "wooden",
        "partOfSpeech": "noun",
        "translation": "ทําด้วยไม้",
        "definition": "",
        "example": "The box is wooden.",
        "exampleTranslation": "กล่องทำจากไม้"
    },
    {
        "word": "wool",
        "partOfSpeech": "noun",
        "translation": "ขนสัตว์",
        "definition": "",
        "example": "The sweater is made of wool.",
        "exampleTranslation": "เสื้อกันหนาวทำจากขนแกะ"
    },
    {
        "word": "word",
        "partOfSpeech": "noun",
        "translation": "คํา",
        "definition": "",
        "example": "I do not understand this word.",
        "exampleTranslation": "ฉันไม่เข้าใจคำนี้"
    },
    {
        "word": "work",
        "partOfSpeech": "noun",
        "translation": "ทํางาน",
        "definition": "",
        "example": "He is at work.",
        "exampleTranslation": "เขาอยู่ที่ทำงาน"
    },
    {
        "word": "worker",
        "partOfSpeech": "noun",
        "translation": "คนงาน, ผู้ใช้แรงงาน",
        "definition": "",
        "example": "He is a hard worker.",
        "exampleTranslation": "เขาเป็นคนขยันทำงาน"
    },
    {
        "word": "working",
        "partOfSpeech": "verb",
        "translation": "ซึ่งทํางาน ซึ่งใช้การได้",
        "definition": "",
        "example": "I am working right now.",
        "exampleTranslation": "ตอนนี้ฉันกำลังทำงานอยู่"
    },
    {
        "word": "world",
        "partOfSpeech": "noun",
        "translation": "โลก",
        "definition": "",
        "example": "We live in a beautiful world.",
        "exampleTranslation": "พวกเราอาศัยอยู่ในโลกที่สวยงาม"
    },
    {
        "word": "worried",
        "partOfSpeech": "adjective",
        "translation": "รบกวน, กังวล",
        "definition": "",
        "example": "I am worried about him.",
        "exampleTranslation": "ฉันเป็นห่วงเขา"
    },
    {
        "word": "worry",
        "partOfSpeech": "noun",
        "translation": "กังวล",
        "definition": "",
        "example": "Do not worry about it.",
        "exampleTranslation": "ไม่ต้องกังวลเรื่องนั้น"
    },
    {
        "word": "worse",
        "partOfSpeech": "adjective",
        "translation": "แย่ลง",
        "definition": "",
        "example": "The weather is getting worse.",
        "exampleTranslation": "อากาศกำลังแย่ลง"
    },
    {
        "word": "worship",
        "partOfSpeech": "noun",
        "translation": "เคารพ สักการะ นมัสการ กราบไหว้",
        "definition": "",
        "example": "They worship at the temple.",
        "exampleTranslation": "พวกเขาสักการะที่วัด"
    },
    {
        "word": "worst",
        "partOfSpeech": "adjective",
        "translation": "แย่ที่สุด",
        "definition": "",
        "example": "This is the worst movie ever.",
        "exampleTranslation": "นี่คือภาพยนตร์ที่แย่ที่สุดเท่าที่เคยมีมา"
    },
    {
        "word": "worth",
        "partOfSpeech": "noun",
        "translation": "คุ้มค่า",
        "definition": "",
        "example": "How much is this ring worth?",
        "exampleTranslation": "แหวนวงนี้มีมูลค่าเท่าไหร่?"
    },
    {
        "word": "would",
        "partOfSpeech": "noun",
        "translation": "จะ (กริยาช่อง 2 3ของ )",
        "definition": "",
        "example": "Would you like some coffee?",
        "exampleTranslation": "คุณต้องการกาแฟไหม?"
    },
    {
        "word": "wound",
        "partOfSpeech": "noun",
        "translation": "บาดแผล",
        "definition": "",
        "example": "He has a wound on his arm.",
        "exampleTranslation": "เขามีบาดแผลที่แขน"
    },
    {
        "word": "wounded",
        "partOfSpeech": "verb",
        "translation": "ได้รับบาดเจ็บ ได้รับบาดแผล",
        "definition": "",
        "example": "The soldier was wounded in battle.",
        "exampleTranslation": "ทหารได้รับบาดเจ็บในการสู้รบ"
    },
    {
        "word": "wrap",
        "partOfSpeech": "noun",
        "translation": "ห่อ",
        "definition": "",
        "example": "Please wrap this gift.",
        "exampleTranslation": "โปรดห่อของขวัญชิ้นนี้"
    },
    {
        "word": "wrapping",
        "partOfSpeech": "verb",
        "translation": "สิ่งห่อหุ้ม",
        "definition": "",
        "example": "I need some wrapping paper.",
        "exampleTranslation": "ฉันต้องการกระดาษห่อของขวัญ"
    },
    {
        "word": "wrist",
        "partOfSpeech": "noun",
        "translation": "ข้อมือ",
        "definition": "",
        "example": "He wears a watch on his wrist.",
        "exampleTranslation": "เขาสวมนาฬิกาที่ข้อมือ"
    },
    {
        "word": "write",
        "partOfSpeech": "noun",
        "translation": "เขียน",
        "definition": "",
        "example": "Write your name here.",
        "exampleTranslation": "เขียนชื่อของคุณตรงนี้"
    },
    {
        "word": "writer",
        "partOfSpeech": "noun",
        "translation": "ผู้เขียน นักเขียน",
        "definition": "",
        "example": "She is a famous writer.",
        "exampleTranslation": "เธอเป็นนักเขียนที่มีชื่อเสียง"
    },
    {
        "word": "writing",
        "partOfSpeech": "verb",
        "translation": "การเขียน",
        "definition": "",
        "example": "I am writing a letter.",
        "exampleTranslation": "ฉันกำลังเขียนจดหมาย"
    },
    {
        "word": "written",
        "partOfSpeech": "verb",
        "translation": "เป็นลายลักษณ์อักษร กริยาช่อง 3 ของ",
        "definition": "",
        "example": "The test is written in English.",
        "exampleTranslation": "แบบทดสอบเขียนเป็นภาษาอังกฤษ"
    },
    {
        "word": "wrong",
        "partOfSpeech": "adjective",
        "translation": "ผิด",
        "definition": "",
        "example": "Your answer is wrong.",
        "exampleTranslation": "คำตอบของคุณผิด"
    },
    {
        "word": "wrongly",
        "partOfSpeech": "adverb",
        "translation": "อย่างผิดพลาด อย่างผิดๆ",
        "definition": "",
        "example": "He was wrongly accused.",
        "exampleTranslation": "เขาถูกกล่าวหาอย่างผิดๆ"
    },
    {
        "word": "yard",
        "partOfSpeech": "noun",
        "translation": "สวน, สนาม",
        "definition": "",
        "example": "The children are playing in the yard.",
        "exampleTranslation": "เด็กๆ กำลังเล่นอยู่ในสวนหลังบ้าน"
    },
    {
        "word": "yawn",
        "partOfSpeech": "noun",
        "translation": "หาว",
        "definition": "",
        "example": "He gave a big yawn.",
        "exampleTranslation": "เขาหาวหวอดใหญ่"
    },
    {
        "word": "yeah",
        "partOfSpeech": "noun",
        "translation": "ใช่ จ๊ะ",
        "definition": "",
        "example": "Yeah, I think so too.",
        "exampleTranslation": "ใช่ ฉันก็คิดอย่างนั้นเหมือนกัน"
    },
    {
        "word": "year",
        "partOfSpeech": "noun",
        "translation": "ปี",
        "definition": "",
        "example": "I am twenty years old.",
        "exampleTranslation": "ฉันอายุยี่สิบปี"
    },
    {
        "word": "yellow",
        "partOfSpeech": "noun",
        "translation": "สีเหลือง",
        "definition": "",
        "example": "The sun is yellow.",
        "exampleTranslation": "ดวงอาทิตย์มีสีเหลือง"
    },
    {
        "word": "yes",
        "partOfSpeech": "noun",
        "translation": "ใช่",
        "definition": "",
        "example": "Yes, I understand.",
        "exampleTranslation": "ใช่ ฉันเข้าใจ"
    },
    {
        "word": "yesterday",
        "partOfSpeech": "noun",
        "translation": "เมื่อวาน",
        "definition": "",
        "example": "I saw him yesterday.",
        "exampleTranslation": "ฉันเห็นเขาเมื่อวานนี้"
    },
    {
        "word": "yet",
        "partOfSpeech": "adverb",
        "translation": "ยัง ยังคง",
        "definition": "",
        "example": "Are we there yet?",
        "exampleTranslation": "พวกเราถึงหรือยัง?"
    },
    {
        "word": "you",
        "partOfSpeech": "noun",
        "translation": "คุณ",
        "definition": "",
        "example": "You are my friend.",
        "exampleTranslation": "คุณคือเพื่อนของฉัน"
    },
    {
        "word": "young",
        "partOfSpeech": "adjective",
        "translation": "หนุ่ม สาว",
        "definition": "",
        "example": "He is a young boy.",
        "exampleTranslation": "เขาเป็นเด็กผู้ชายที่ยังเด็ก"
    },
    {
        "word": "your",
        "partOfSpeech": "noun",
        "translation": "ของคุณ",
        "definition": "",
        "example": "Is this your book?",
        "exampleTranslation": "นี่คือหนังสือของคุณใช่ไหม?"
    },
    {
        "word": "yours",
        "partOfSpeech": "noun",
        "translation": "ของคุณ สิ่งที่เป็นของคุณ",
        "definition": "",
        "example": "This pen is yours.",
        "exampleTranslation": "ปากกาด้ามนี้เป็นของคุณ"
    },
    {
        "word": "yourself",
        "partOfSpeech": "noun",
        "translation": "ด้วยตัวคุณเอง",
        "definition": "",
        "example": "Please help yourself to food.",
        "exampleTranslation": "โปรดบริการอาหารด้วยตัวเอง"
    },
    {
        "word": "youth",
        "partOfSpeech": "noun",
        "translation": "วัยหนุ่มสาว เยาวชน",
        "definition": "",
        "example": "In his youth, he was an athlete.",
        "exampleTranslation": "ในวัยหนุ่มเขาเป็นนักกีฬา"
    },
    {
        "word": "zero",
        "partOfSpeech": "noun",
        "translation": "เลขศูนย์, ศูนย์",
        "definition": "",
        "example": "The score is zero to zero.",
        "exampleTranslation": "คะแนนคือศูนย์ต่อศูนย์"
    },
    {
        "word": "zone",
        "partOfSpeech": "noun",
        "translation": "พื้นที่ เขต แนว",
        "definition": "",
        "example": "This is a no-parking zone.",
        "exampleTranslation": "นี่คือเขตห้ามจอดรถ"
    }
];
