import type { ThreadzThread } from "../types"

// ===========================================================================
// PART INTL — post INTERNASIONAL (id 9001+, ruang id khusus, jangan dipakai
// batch Indonesia). Dibentuk 6 Nov 2026 per perintah user (sebab musabab
// keenam, rumus-v2.md BAGIAN 1G):
//
//  1. SEMUA post di file ini FULL dalam satu bahasa asing. DILARANG campur:
//     post Arab murni Arab, post Inggris murni Inggris, dst. Tidak ada
//     "Indonesia campur Arab/Inggris" — yang campur itu kesan palsu.
//  2. Komentar WAJIB dijawab DALAM BAHASA YANG SAMA dengan post-nya.
//     Yang baca Arab dijawab orang Arab, yang nanya Inggris dijawab Inggris.
//  3. ISI WAJIB nyambung matematika: pertanyaan soal, minta cek jawaban,
//     konsep bingung, koreksi miskonsepsi. Ini forum matematika, bukan diary.
//  4. Matematika HARUS benar (miskonsepsi boleh, asal ada komentar koreksi).
//  5. DILARANG pakai tanda kutip lurus ' ... ' lebih dari satu pasang per
//     post (aturan skenario). Prancis pakai apostrof tipografis ’ dan « ».
//  6. id 9001-9100 cadangan. Bahasa menyebar: AR, EN, FR, ES, ZH — jangan
//     deret per bahasa, biar feed berasa beneran internasional.
// ===========================================================================
export const THREADS_PART_INTL: ThreadzThread[] = [
  {
    // --- ARAB (RTL) ---
    id: 9001,
    authorId: 1051,
    minutesAgo: 15,
    shares: 8,
    content:
      "السلام عليكم. عندي سؤال: إذا كان 2س + 5 = 17 فما قيمة س؟ نقلت العدد 5 فصار 2س = 12 ثم قلت س = 6، لكن أريد الخطوات كاملة وليس النتيجة فقط. جزاكم الله خيرا",
    comments: [
      { authorId: 1052, minutesAgo: 9, content: "صحيح أن س = 6. بعد النقل نقسم الطرفين على 2: س = 12 ÷ 2 = 6. الخطوة الأساسية أنك تطرح 5 من الطرفين معا" },
      { authorId: 1053, minutesAgo: 6, content: "للتحقق ضع 6 مكان س، يصبح 12 + 5 = 17. إذا ظهر الرقم نفسه فالحل صحيح" },
    ],
  },
  {
    // --- INGGRIS ---
    id: 9005,
    authorId: 1063,
    minutesAgo: 42,
    shares: 15,
    content:
      "Stupid question maybe: how do you solve 3x − 7 = 11? I moved the 7 over and got 3x = 18, then I divided and got x = 6. My classmate swears it is 5. Who is right and why?",
    comments: [
      { authorId: 1064, minutesAgo: 35, content: "You are right. 3x = 18, so x = 18 ÷ 3 = 6. Check: 3 × 6 − 7 = 18 − 7 = 11. Your classmate probably did 11 + 7 = 18 and then wrote 5 out of nowhere" },
      { authorId: 1065, minutesAgo: 28, content: "Tell your classmate to plug their answer back in: 3 × 5 − 7 = 8, not 11. If the check fails, the answer fails" },
    ],
  },
  {
    // --- PRANCIS ---
    id: 9010,
    authorId: 1071,
    minutesAgo: 70,
    shares: 11,
    content:
      "Bonjour, je bloque sur une équation toute simple : 5x + 3 = 2x + 15. J’ai essayé de passer les x d’un côté et j’ai trouvé x = 4, mais je ne suis pas sûre du tout. Quelqu’un peut me détailler les étapes ? Merci d’avance",
    comments: [
      { authorId: 1072, minutesAgo: 62, content: "C’est correct ! 5x − 2x = 15 − 3, donc 3x = 12, donc x = 4. Vérification : 5 × 4 + 3 = 23 et 2 × 4 + 15 = 23" },
      { authorId: 1073, minutesAgo: 55, content: "Astuce : regroupe d’abord les x d’un côté, les nombres de l’autre, puis divise. Trois étapes, toujours les mêmes" },
    ],
  },
  {
    // --- SPANYOL ---
    id: 9013,
    authorId: 1080,
    minutesAgo: 105,
    shares: 9,
    content:
      "Hola, tengo una duda con esta ecuación: x² − 9 = 0. Yo digo que x = 3, pero mi hermano dice que también vale x = −3 y ahora no sé quién tiene razón. El profesor nos pregunta mañana y quiero entender bien el porqué",
    comments: [
      { authorId: 1081, minutesAgo: 96, content: "Los dos tienen razón. Si x² = 9, entonces x = 3 o x = −3, porque (−3) × (−3) = 9 también. Se escribe x = ±3" },
      { authorId: 1082, minutesAgo: 88, content: "Piénsalo al revés: 3 × 3 = 9 y (−3) × (−3) = 9. Negativo por negativo da positivo" },
    ],
  },
  {
    // --- MANDARIN ---
    id: 9016,
    authorId: 1089,
    minutesAgo: 135,
    shares: 13,
    content:
      "请问这道题怎么解：2x − 4 = 10。我算出来 x = 7，同桌说他算的是 x = 3，到底谁对？老师明天要检查作业，求详细步骤，谢谢。",
    comments: [
      { authorId: 1090, minutesAgo: 126, content: "你是对的。两边先加 4：2x = 14，再两边除以 2，得 x = 7。检验：2 × 7 − 4 = 10，正确。" },
      { authorId: 1091, minutesAgo: 118, content: "你同桌可能把 −4 当成 +4 去算了。记住移项要变号。" },
    ],
  },
  {
    // --- ARAB ---
    id: 9002,
    authorId: 1054,
    minutesAgo: 168,
    shares: 6,
    content:
      "سؤال في النسبة المئوية: سعر الدفتر 4000 والمحل يعرض خصم 25 بالمائة. حسبتها هكذا: 4000 قسمة 4 يساوي 1000، إذن السعر بعد الخصم 3000. أخي يقول الطريقة خاطئة لأن الخصم لا يكون قسمة على أربعة. فمن الصواب؟",
    comments: [
      { authorId: 1055, minutesAgo: 160, content: "حسابك صحيح تماما. ربع القيمة يعني القسمة على أربعة، والسعر النهائي 3000" },
      { authorId: 1056, minutesAgo: 151, content: "طريقة أخرى للتأكد: 4000 × 25 = 100000 ثم نقسم على 100 فنحصل على 1000. نفس نتيجتك" },
    ],
  },
  {
    // --- INGGRIS ---
    id: 9006,
    authorId: 1066,
    minutesAgo: 200,
    shares: 22,
    content:
      "Why is any number to the power of zero equal to 1? My teacher just said that is the rule and moved on. I get that 2^3 = 8, 2^2 = 4, 2^1 = 2, and each time you divide by 2, so 2^0 should be 1. But does that pattern count as a real reason, or is there a proper proof?",
    comments: [
      { authorId: 1067, minutesAgo: 190, content: "Your pattern IS the reason. The law says x^a ÷ x^a = x^(a−a) = x^0, and anything divided by itself is 1. So x^0 = 1 for every x except zero. Your teacher skipped the good part" },
      { authorId: 1068, minutesAgo: 178, content: "0^0 is the weird exception, some books say 1, some say undefined. You will meet it again in combinatorics" },
    ],
  },
  {
    // --- PRANCIS ---
    id: 9011,
    authorId: 1074,
    minutesAgo: 242,
    shares: 18,
    content:
      "Ma prof dit que 0,9999… (avec une infinité de 9) est exactement égal à 1. Pour moi c’est faux, c’est juste un peu en dessous de 1, non ? Elle m’a répondu « pose x = 0,999… et calcule 10x − x », mais je n’ai rien compris à ce qu’elle a écrit au tableau",
    comments: [
      { authorId: 1075, minutesAgo: 226, content: "Pose x = 0,999… Alors 10x = 9,999… Fais 10x − x : les décimales se suppriment, il reste 9x = 9, donc x = 1. C’est exactement ce qu’elle voulait te montrer" },
      { authorId: 1076, minutesAgo: 215, content: "Autre façon : 1/3 = 0,333… et 3 × 0,333… = 0,999…, mais 3 × 1/3 = 1. Donc les deux écritures désignent le même nombre" },
    ],
  },
  {
    // --- SPANYOL ---
    id: 9014,
    authorId: 1083,
    minutesAgo: 270,
    shares: 26,
    content:
      "El problema de las gallinas: si 3 gallinas ponen 3 huevos en 3 días, ¿cuántos huevos ponen 9 gallinas en 9 días? Yo contesté 9 y me lo marcaron mal. La respuesta dice 27 y la verdad no entiendo de dónde sale",
    comments: [
      { authorId: 1084, minutesAgo: 260, content: "Primero: 3 gallinas en 3 días ponen 3 huevos, o sea 1 gallina pone 1 huevo cada 3 días. En 9 días una gallina pone 3 huevos. Nueve gallinas: 9 × 3 = 27. Tu error fue pensar que todo se triplica igual" },
      { authorId: 1085, minutesAgo: 251, content: "Truco: las gallinas se multiplican ×3 (de 3 a 9), los días ×3 (de 3 a 9). Huevos: 3 × 3 × 3 = 27" },
    ],
  },
  {
    // --- MANDARIN ---
    id: 9017,
    authorId: 1092,
    minutesAgo: 300,
    shares: 7,
    content:
      "为什么任何数的 0 次方都等于 1？老师只说“规定就是这样”，可是 2 的 3 次方是 8，2 的 2 次方是 4，每次除以 2，那 2 的 0 次方不就正好是 1 吗？这算是证明还是巧合？",
    comments: [
      { authorId: 1093, minutesAgo: 290, content: "你的规律就是原因。因为 x^a ÷ x^a = x^(a−a) = x^0，而同数相除等于 1，所以 x^0 = 1。这是推导，不是巧合。" },
      { authorId: 1094, minutesAgo: 281, content: "有个例外：0 的 0 次方，有的书定义成 1，有的说无意义。以后学排列组合会再遇到。" },
    ],
  },
  {
    // --- ARAB ---
    id: 9003,
    authorId: 1057,
    minutesAgo: 330,
    shares: 14,
    content:
      "أحتاج مساعدة في المعادلة س² - 5س + 6 = 0. علمت أن 2 × 3 = 6 وأن 2 + 3 = 5 لكنني لا أفهم لماذا نستخدم هذين الرقمين معا. شرح المعلم على السبورة كان سريعا ولم أتمكن من المتابعة. من يشرح لي خطوة بخطوة؟",
    comments: [
      { authorId: 1058, minutesAgo: 321, content: "نبحث عن عددين حاصل ضربهما 6 ومجموعهما 5، وهما 2 و 3. فتكون المعادلة (س - 2)(س - 3) = 0 أي س = 2 أو س = 3" },
      { authorId: 1059, minutesAgo: 312, content: "جرّب التعويض: 4 - 10 + 6 = 0 صحيح، و 9 - 15 + 6 = 0 صحيح أيضا" },
    ],
  },
  {
    // --- INGGRIS ---
    id: 9007,
    authorId: 1069,
    minutesAgo: 368,
    shares: 12,
    content:
      "A bag has 4 red and 6 blue marbles. I draw one without looking. My answer for P(red) was 4/10 = 2/5 = 0.4. My friend says probabilities can never be written as 2/5 because probabilities must be out of 100. Is she wrong or am I missing something?",
    comments: [
      { authorId: 1070, minutesAgo: 355, content: "You are right, your friend is confusing probability with percentage. A probability is any number between 0 and 1, so 2/5 is perfectly fine. As a percentage it just becomes 40%" },
      { authorId: 1063, minutesAgo: 344, content: "Picture it as 2 slices out of 5 equal slices. Same cake, same chance" },
    ],
  },
  {
    // --- PRANCIS ---
    id: 9012,
    authorId: 1077,
    minutesAgo: 400,
    shares: 10,
    content:
      "Question de révision pour le brevet : quel est le PPCM de 12 et 18 ? J’ai trouvé 72 en multipliant 12 × 18, mais la correction dit 36. Pourquoi ce n’est pas simplement le produit des deux nombres ?",
    comments: [
      { authorId: 1078, minutesAgo: 390, content: "Le PPCM est le plus petit multiple commun. Multiples de 12 : 12, 24, 36, 48… Multiples de 18 : 18, 36, 54… Le premier en commun est 36. 12 × 18 = 72 est un multiple commun, mais pas le plus petit" },
      { authorId: 1079, minutesAgo: 382, content: "Avec les facteurs premiers : 12 = 2² × 3 et 18 = 2 × 3². PPCM = 2² × 3² = 36. Ça marche à tous les coups" },
    ],
  },
  {
    // --- SPANYOL ---
    id: 9015,
    authorId: 1086,
    minutesAgo: 435,
    shares: 8,
    content:
      "¿Cuánto es el 15% de 240? Yo hice 240 − 15 = 225 y está mal, lo sé, pero no me acuerdo del método. ¿Alguien me lo explica paso a paso?",
    comments: [
      { authorId: 1087, minutesAgo: 425, content: "15% significa 15 por cada 100. Calculas 240 × 15 = 3600, dividido 100 = 36. Más rápido: 10% de 240 es 24, el 5% es 12, sumas y da 36" },
      { authorId: 1088, minutesAgo: 415, content: "Ojo: restar 15 te da 225, que sería 240 menos 15 unidades, no tiene que ver con porcentajes" },
    ],
  },
  {
    // --- MANDARIN ---
    id: 9018,
    authorId: 1095,
    minutesAgo: 470,
    shares: 19,
    content:
      "鸡兔同笼：笼子里鸡和兔一共 35 个头，94 只脚。鸡和兔各有几只？我设鸡 x、兔 y，列了两道式子但是解出来是负数，肯定哪里错了。求完整过程。",
    comments: [
      { authorId: 1096, minutesAgo: 458, content: "设鸡 x，兔 y：x + y = 35，2x + 4y = 94。第一式乘 2：2x + 2y = 70，两式相减得 2y = 24，y = 12，x = 23。鸡 23 只，兔 12 只。你可能是第二式写成 4x + 2y = 94 了。" },
      { authorId: 1097, minutesAgo: 449, content: "验算：23 + 12 = 35 个头，23 × 2 + 12 × 4 = 46 + 48 = 94 只脚。没问题。" },
    ],
  },
  {
    // --- ARAB ---
    id: 9004,
    authorId: 1060,
    minutesAgo: 512,
    shares: 16,
    content:
      "سؤال من واجب أختي الصغيرة: ما ناتج 1/2 + 1/3؟ كتبت في الدفتر أن الناتج 2/5 لأننا نجمع البسط مع البسط والمقام مع المقام، فأعطتها المعلمة درجتين ناقصين. أين الخطأ بالضبط؟",
    comments: [
      { authorId: 1061, minutesAgo: 495, content: "المقامان مختلفان فلا يجوز الجمع مباشرة. نوحد المقام أولا: 3/6 + 2/6 = 5/6. أما 2/5 فهي خطأ شائع بين الطلاب" },
      { authorId: 1062, minutesAgo: 487, content: "تخيلي قطعة كيك واحدة: نصفها وثلثها. اقسميها ستة أجزاء، تأخذين ثلاثة ثم اثنين، فالمجموع خمسة من ستة" },
    ],
  },
  {
    // --- INGGRIS ---
    id: 9008,
    authorId: 1064,
    minutesAgo: 540,
    shares: 21,
    content:
      "Product rule panic: I keep getting the derivative of x·sin(x) wrong. I wrote 1·cos(x) because the derivative of x is 1. The answer key says sin(x) + x·cos(x). Where does the x·cos(x) part come from?? Midterm on Friday",
    comments: [
      { authorId: 1066, minutesAgo: 528, content: "Product rule: (first · derivative of second) + (second · derivative of first) = x·cos(x) + 1·sin(x). You dropped the second term, that is the whole mistake" },
      { authorId: 1070, minutesAgo: 515, content: "Think of it as two moving parts, both contribute. Your version only counted one" },
    ],
  },
  {
    // --- INGGRIS ---
    id: 9009,
    authorId: 1065,
    minutesAgo: 575,
    shares: 17,
    content:
      "A jacket costs 80 dollars after a 20% discount. My answer for the original price was 96, because I added 20% back. The answer sheet says 100. I do not get it, 80 + 20% of 80 is 96, so why 100?",
    comments: [
      { authorId: 1069, minutesAgo: 560, content: "Because the 20% comes OFF the original price, not the sale price. If the original is P: P × 0.8 = 80, so P = 80 ÷ 0.8 = 100. Sanity check: 20% of 100 is 20, and 100 − 20 = 80" },
      { authorId: 1067, minutesAgo: 548, content: "Classic trap. Adding the percentage back only works if the discount was taken from 80, which it was not" },
    ],
  },
]
