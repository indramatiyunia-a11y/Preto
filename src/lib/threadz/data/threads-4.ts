import type { ThreadzThread } from "../types"

// PART 4: cuitan 76-100.
//
// JARAN SUARA:
//  26: memori kota & arah jalan.       9: cerita keluarga (anti-taruhan)
//  42/45/48: bunga & peluang, bahasa sehari-hari.  40: HP keluarga rusak
//  28: jujur bingung.                  25: "btw..." satu paragraf polos
//  23: malam, pendek, gak suka titik akhir.  15: bapak tua, "Salam"
// ATURAN DUNIA: nol merek, nol nama usaha/orang. Acuan: rumah, bus, kelas,
// ladang, langit, gentong. Aman dibaca bocah sampai eyang.
export const THREADS_PART4: ThreadzThread[] = [
  {
    id: 76,
    authorId: 26,
    minutesAgo: 45,
    shares: 152,
    content:
      "alamat hari ini: 'deket pohon beringin tua, seberang pos ronda'.\n\npak. pohonnya udah gak ada sejak 2019. pos ronda pindah tahun 2021. yang ada: lapangan kosong dan kenangan orang.\n\ngue nemuin rumahnya pakai cara sederhana: tanya 3 orang, ambil rata-rata arah jawabannya, jalan ke situ. nyampe.",
    comments: [
      { authorId: 45, minutesAgo: 38, content: "rata-rata arah jawaban 3 orang itu metode yang gak akan pernah masuk jurnal. tapi tingkat keberhasilannya tinggi" },
      { authorId: 7, minutesAgo: 20, content: "kenangan orang sebagai penunjuk jalan. selamat jalan, pohon yang sudah gugur" },
    ],
  },
  {
    id: 77,
    authorId: 3,
    minutesAgo: 90,
    shares: 173,
    content:
      "prinsip yang simpel tapi jarang diinget:\n\nkalau sesuatu bikin rugi buat yang beli, dia gak akan ditawarin terus-terusan ke lu.\n\ntiket angka ditawarin di mana-mana, tiap hari, tiap jam. artinya: rata-rata, yang main rugi. terus-terusan. bukan kadang-kadang. dia didesain begitu.\n\ngue pernah nanya ke yang jual: 'bang, lu sendiri main gak?'\n\ndia ketawa. 'kalo gue main, siapa yang jual.'\n\ngue gak beli. dan gue gak nyuruh lu. gue cuma kasih tau percakapan itu.",
    comments: [
      { authorId: 14, minutesAgo: 80, content: "'kalo gue main, siapa yang jual' — jawaban paling jujur sepanjang sejarah jualan" },
      { authorId: 46, minutesAgo: 60, content: "gue kasih ini ke suami baca. dia diam 1 menit. terus bilang 'yaudah gue berenti'. harapannya amin, tahun depan masih begitu" },
      { authorId: 27, minutesAgo: 35, content: "yang gak pernah dipajang di mana-mana itu yang bener bisa bikin untung. yang dipajang terus, ya itu" },
    ],
  },
  {
    id: 78,
    authorId: 2,
    minutesAgo: 130,
    shares: 66,
    content:
      "LU PERNAH GAK SIH MIKIR: kenapa namanya 'pembayaran'? karena kita bayar.\n\nTERUS 'PERBANKAN' KOK GAK PERBANKAN-AN. BAHASA GAK KONSISTEN",
    comments: [],
  },
  {
    id: 79,
    authorId: 40,
    minutesAgo: 180,
    shares: 241,
    content:
      "anak gue banting HP pas kalah main. 'dikit kok bapak.'\n\ndikit tuh ukurannya gimana? layar retak 3 arah, tombol nyala pindah kerja ke tombol volume.\n\ngue gak teriak. gue duduk, gue suruh dia duduk.\n\n'yang rusak itu barang. yang banting itu pilihan. besok mainnya habis magrib aja, biar layar gak keburu panas.'\n\ndia ngangguk, mukanya kusut, terus dia pamit tidur lebih cepet dari biasa. anak kalah itu capek banget ya. besok kita coba lagi.",
    comments: [
      { authorId: 43, minutesAgo: 170, content: "'yang rusak itu barang. yang banting itu pilihan' — gue catet. buat diri gue sendiri juga, bukan cuma buat anak" },
      { authorId: 37, minutesAgo: 150, content: "'dikit itu relatif' — sama kaya 'gajinya dikit doang, kerjanya banyak'" },
      { authorId: 26, minutesAgo: 120, content: "sebagai pihak yang sering bilang 'sebentar lagi sampai', gue merasa terwakili. 8 kilometer itu jujurnya 40 menit kalau hujan" },
      { authorId: 12, minutesAgo: 90, content: "gue banting HP sendiri pas kalah main. dikit. sekarang gue main pake HP yang sedang berebut hidup" },
      { authorId: 46, minutesAgo: 50, content: "anak kalah itu capek banget ya — iya. makanya malam-malamnya butuh makan enak, bukan ceramah tambahan" },
    ],
  },
  {
    id: 80,
    authorId: 18,
    minutesAgo: 240,
    shares: 218,
    content:
      "manusia tidur 1/3 hidupnya. itu standar.\n\ngue tambah 1/4 buat scroll. tinggal 5/12 buat 'hidup yang bener2 dirasakan'.\n\n5/12 itu 42%. dan gue ngerasa 42% itu banyak. padahal gue inget cuma 12%.",
    comments: [
      { authorId: 24, minutesAgo: 230, content: "42% terasa banyak karena dia gak disimpen ke ingatan. ingatan kita milih yang bermakna. jadi gak perlu panik: yang kelak diinget itu yang bermakna, bukan yang dihitung" },
      { authorId: 42, minutesAgo: 200, content: "dan yang biasanya gak diinget: antrian, iklan, scroll. yang diinget: orang. kalo mau nambah 'bagian hidup', nambahin orangnya. bukan layarnya" },
    ],
  },
  {
    id: 81,
    authorId: 13,
    minutesAgo: 300,
    shares: 79,
    content:
      "SUMPAH GUE BARU NYAMBUNG KENAPA DISEBUT 'AKAR'. KARENA NYANGKUT TANAH KAN.\n\nTERUS AKAR KUADRAT ITU APAN? KUADRATNYA NYEMPEL TANAH JUGA???",
    comments: [
      { authorId: 5, minutesAgo: 290, content: "akar kuadrat: angka yang kalo dikali diri sendiri hasilnya si kuadrat. 3 x 3 = 9, jadi akar 9 itu 3. gak semua yang 'akar' nyangkut tanah. ada yang nyangkut di nilai ulangan" },
      { authorId: 17, minutesAgo: 260, content: "GUE JUGA BARU NYAMBUNG TADI. KITA BARENG. TERUS AKAR KUBIK ITU TIGA TANAH YA? JAWAB DONG YANG PINTAR" },
      { authorId: 33, minutesAgo: 220, content: "akar kubik: angka yang dikali dirinya sendiri dua kali (3 x 3 x 3). tanahnya makin dalam, angkanya makin kuat" },
    ],
  },
  {
    id: 82,
    authorId: 23,
    minutesAgo: 360,
    shares: 103,
    content:
      "pulang fajar. mata sipit, langit mulai terang, tetangga sepuh udah nyapu depan rumah.\n\n'udah pulang kerja, mas?'\n\niya bu. jangan ditanya.\n\ngue ambil sapu kedua. nyapu bareng lebih cepet. beliau ketawa, 'ya udah, sampe ujung jalan ya'.\n\nsampe ujung jalan lah.",
    comments: [],
  },
  {
    id: 83,
    authorId: 5,
    minutesAgo: 420,
    shares: 355,
    content:
      "'Diskon s/d 70%' itu artinya: ada barang yang 70%. sisanya... 5%.\n\ngue cek 1 rak penuh: dari 42 barang, yang kena 70% itu 2. yang 5-10%: 19. sisanya 30-50%.\n\nkata 's/d' itu kata paling legal buat bilang 'gak semua'.\n\nkalo baca brosur pake asumsi, lu yang bingung. baca pake mata yang jahat: cari angka terkecilnya dulu.",
    comments: [
      { authorId: 11, minutesAgo: 405, content: "'cari angka terkecilnya dulu' — prinsip yang sama berlaku buat gaji yang ditawarin pas interview" },
      { authorId: 27, minutesAgo: 370, content: "42 barang, 2 yang 70%: 4,7%. sekian persen janji yang kepenuhi. statistiknya receh, dampaknya harapan" },
      { authorId: 45, minutesAgo: 330, content: "yang masuk karena 70%, keluar dompetnya karena 30%. rasio di rak dan rasio di dompet itu beda jauh" },
      { authorId: 22, minutesAgo: 280, content: "makasih ya. jadi gak ngarep 70% pas gajian nanti. semoga kita semua ketemu yang jujur" },
      { authorId: 4, minutesAgo: 220, content: "'kata paling legal' — kaya 'mulai dari 99 ribu' di katalog. yang 99 ribu: 1 item. udah diborong" },
    ],
  },
  {
    id: 84,
    authorId: 10,
    minutesAgo: 480,
    shares: 44,
    content:
      "angka favorit gue 7.\n\ngue baru sadar: di kalender dia selalu nanggung. minggu ada 7 hari, tapi gue selalu nungguin dia lewat.\n\nangka yang sabar bener",
    comments: [
      { authorId: 24, minutesAgo: 470, content: "7 itu angka yang kerja: 5 hari kerja + 2 hari yang dipake buat pulih dari kerja. yang sabar bukan si 7. yang sabar kita" },
    ],
  },
  {
    id: 85,
    authorId: 37,
    minutesAgo: 550,
    shares: 121,
    content:
      "harga panen turun lagi. katanya 'ikut harga di seberang lautan'.\n\ngue gak pernah ke seberang lautan. gue ke ladang, ke tengah, ke gudang. harga turunnya nyampai semua. pas naik, dia suka nyasar, gak sampai sini.\n\nya sudah. tetep tanam. orang tetep makan.",
    comments: [
      { authorId: 19, minutesAgo: 540, content: "harga turunnya nyampai, naiknya nyasar. ini juga terjadi di gaji, pak. kita satu perasaan" },
      { authorId: 22, minutesAgo: 480, content: "semoga harga membaik pas panen depan ya, pak. yang makan setiap hari berhutang budi ke yang garap" },
    ],
  },
  {
    id: 86,
    authorId: 33,
    minutesAgo: 620,
    shares: 197,
    content:
      "tombol 'tutup pintu' di lift itu placebo. di banyak lift modern, tombol itu gak terhubung ke apa-apa. lu pencet, pintu tetep tutup waktunya dia.\n\nbukti hidup yang paling jujur: kita suka ngerasa ada kontrol. padahal yang kita pegang: tombol kosong.",
    comments: [
      { authorId: 27, minutesAgo: 605, content: "tapi ada lift yang beneran nerima. biar gak salah: di beberapa lift, tahan tombol pintu bareng nomor lantai. sisanya: placebo yang lucu" },
      { authorId: 11, minutesAgo: 560, content: "tombol kosong juga ada di rapat: 'kita dengarkan masukan lu'. pencet. gak ada yang gerak" },
    ],
  },
  {
    id: 87,
    authorId: 35,
    minutesAgo: 700,
    shares: 88,
    content:
      "bukannya kalo gue main mesin itu kadang menang? berarti sistemnya bisa dikalahin dong?\n\nterus kenapa ada yang bangkrut, padahal kadang kan menang",
    comments: [
      { authorId: 27, minutesAgo: 690, content: "karena 'kadang menang' itu bagian dari desainnya. sistem kasih kemenangan kecil sesekali supaya lu balik. lu menang dikit-dikit, mesin menang terus. gak ada yang 'ngalahin sistem'. yang ada: yang belum kena gilirannya" },
      { authorId: 42, minutesAgo: 660, content: "yang bangkrut itu bukan yang 'sial'. yang bangkrut itu yang balik lagi dan lagi. kemenangan kecil itu umpan. dan umpan selalu keliatan enak dari mulut ikan" },
      { authorId: 3, minutesAgo: 620, content: "cara paling aman ngalahin mesin: gak main. menang: 100%. rugi: 0. satu-satunya strategi yang udah terbukti" },
    ],
  },
  {
    id: 88,
    authorId: 49,
    minutesAgo: 780,
    shares: 203,
    content:
      "kantor baru: 'kita di sini kayak keluarga.'\n\nsetahu gue keluarga gak nahan cuti. keluarga gak chat jam 9 malem soal 'hal kecil'. keluarga gak nanya 'kenapa resign' dengan nada yang bikin lu ngerasa bersalah.\n\ngue sayang keluarga gue yang bener. yang di kantor, gue profesional aja. saling hormat. selesai jam 5.",
    comments: [
      { authorId: 22, minutesAgo: 765, content: "'saling hormat, selesai jam 5' — semoga semua tempat kerja kayak gini. dan semoga lu dapet tempat kayak gini juga" },
      { authorId: 4, minutesAgo: 730, content: "'keluarga gak nahan cuti' — kalimat paling jujur tentang istilah keluarga kantor. pinjem ya buat gue kirim ke grup" },
      { authorId: 37, minutesAgo: 690, content: "di rumah gue, keluarga itu yang ngasih makan pas gue gak punya. tempat kerja yang bilang keluarga biasanya yang minta lembur pas gue mau pulang" },
      { authorId: 31, minutesAgo: 640, content: "chat jam 9 malem soal 'hal kecil': hal kecil itu gak pernah kecil buat yang ditunjuk ngerjainnya" },
      { authorId: 26, minutesAgo: 590, content: "istilah keluarga juga dipake ke kiriman. yang bikin keluarga: yang dateng pas kita susah. jawabannya sederhana" },
    ],
  },
  {
    id: 89,
    authorId: 21,
    minutesAgo: 860,
    shares: 117,
    content:
      "murid: 'Pak, buat apa belajar persen? nanti juga gak kepake.'\n\ngue jawab: 'biar lu gak diempot diskon. biar gak salah paham bunga. biar tau kenapa potongan di gaji lu bukan angka yang mereka sebut duluan.'\n\nmurid diam. terus nanya lagi: 'pak, terus biar dapet teman dekat gimana?'\n\nguru juga manusia. gue jawab: 'persen lu jelasin dulu. sisanya jalan sendiri.'",
    comments: [
      { authorId: 18, minutesAgo: 850, content: "'biar gak diempot diskon' — pelajaran yang paling dibutuhkan, diringkas jadi kalimat yang murid inget seumur hidup" },
    ],
  },
  {
    id: 90,
    authorId: 6,
    minutesAgo: 940,
    shares: 57,
    content:
      "udh gue mikir 1 jam. hasilnya: mikir 1 jam. gak ada solusi.\n\ntapi kerasa produktif. bingung sendiri",
    comments: [],
  },
  {
    id: 91,
    authorId: 4,
    minutesAgo: 1020,
    shares: 141,
    content:
      "umur 30. belum beli rumah, belum punya tabungan yang bisa diceritain, motor masih tahun 2016.\n\ntapi tiap pagi gue bisa antar ibu ke pasar. tiap malam tidur tanpa nangis.\n\ngue gak bilang hidup sukses. gue bilang: hidup jalan.\n\nkadang 'jalan doang' udah berat banget buat sebagian orang. dan gue gak akan ngecilin itu.",
    comments: [
      { authorId: 22, minutesAgo: 1005, content: "'gue gak akan ngecilin itu' — dan justru karena gak ngecilin, jalan lu bakal makin lapang. semangat" },
      { authorId: 49, minutesAgo: 950, content: "gue 23 dan ngerasa telat semua. baca ini kerasa: gak ada yang telat. tiap orang jalan di jalan yang beda" },
    ],
  },
  {
    id: 92,
    authorId: 48,
    minutesAgo: 1100,
    shares: 163,
    content:
      "beban di pundak gak majemuk. 10 kilo tetep 10 kilo besok.\n\nbunga majemuk: 1 juta jadi 1,2. terus diitung dari 1,2. dalam setahun 8,9 juta.\n\nmakanya pinjaman bunga tinggi lebih berat dari tas batu. tas batu bisa ditaro. bunga jalan terus. sampe lu bayar.",
    comments: [],
  },
  {
    id: 93,
    authorId: 32,
    minutesAgo: 1200,
    shares: 62,
    content: "mkn dulu gue. ujan trus kerjaan nambah. hidup kok tmbh2an pas ujan",
    comments: [
      { authorId: 44, minutesAgo: 1190, content: "kayak gosip: makin ujan makin nambah. semangat, makan yang banyak. hidup gak bisa dibenerin kalo laper" },
    ],
  },
  {
    id: 94,
    authorId: 9,
    minutesAgo: 1300,
    shares: 288,
    content:
      "om gue dulu main taruhan bola. mulai dari 50 ribu. 'cuma iseng ngerasain menang'.\n\nsekarang motor tua peninggalan eyang udah gak ada. rumah udah gak ada. yang masih ada: mata om gue tiap kali ada yang ngomongin bola. dia keluar ruangan.\n\ngue gak nulis ini buat menghina om gue. gue nulis ini supaya yang baca gak jadi om gue di cerita anak orang lain.\n\n'cuma iseng ngerasain menang' itu kalimat pembuka dari semua cerita sedih tentang taruhan.\n\nkalo ada yang bilang kalimat itu ke lu, jangan senyum. tarik dia pulang.",
    comments: [
      { authorId: 7, minutesAgo: 1285, content: "'jangan senyum. tarik dia pulang' — gue akan inget ini seumur hidup. makasih" },
      { authorId: 22, minutesAgo: 1240, content: "semoga om lu dikasih ketenangan. dan semoga tulisan ini nyampe ke yang paling butuh baca" },
      { authorId: 27, minutesAgo: 1190, content: "'mulai dari 50 ribu' — angka paling kecil yang jadi pintu terbesar. dan pintu itu gak ada gagangnya di sisi dalam" },
      { authorId: 46, minutesAgo: 1100, content: "gue simpen tulisan ini. nanti gue baca ulang pas anak gue umurnya mulai nekat" },
    ],
  },
  {
    id: 95,
    authorId: 14,
    minutesAgo: 1400,
    shares: 231,
    content:
      "'Pak, 0,1 + 0,2 kok hasilnya 0,30000000000000004? kalkulatornya rusak?'\n\ngue senyum. 'selamat datang di pecahan versi mesin. komputer itung pake dua lambang doang, 0 dan 1. 0,1 dan 0,2 itu gak habis rapi di situ, jadi ada sisa. kecil sekali, tapi ada.'\n\nmurid: 'terus yang bener yang mana?'\n\ngue: 'dua-duanya. manusia pakai cara satu, mesin pakai cara lain. yang penting lu tau kapan pakai yang mana. biar gak ditipu angka.'",
    comments: [
      { authorId: 27, minutesAgo: 1385, content: "0,1 + 0,2 = 0,30000000000000004 itu salah satu hal pertama yang bikin orang gila di pemrograman. dan 'biar gak ditipu angka' itu benar di semua level hidup" },
      { authorId: 45, minutesAgo: 1330, content: "dan orang dewasa ditipu angka tiap hari: diskon, bunga, persen. mesin itu versi jujurnya. dia kasih tau sisanya" },
    ],
  },
  {
    id: 96,
    authorId: 2,
    minutesAgo: 1500,
    shares: 84,
    content:
      "KILOAN TUH PER KILO KAN? NYUCI GUE: 12 KAOS DIBILANG 3 KILO. GUE BINGUNG. 12 KAOS KOK 3 KILO, KAOS GUE RINGAN BGT YA TERNYATA.\n\nDUNIA CUCI MEMBANTAI ASUMSI GUE",
    comments: [
      { authorId: 27, minutesAgo: 1485, content: "12 kaos = 3 kilo, berarti 250 gram per kaos. kaos biasa emang sekitar situ. jadi bukan dunia cuci yang salah itung. dunia cuci paling jujur hari ini" },
      { authorId: 20, minutesAgo: 1440, content: "berarti kaos itu ringan. 3 kilo bisa diangkat satu tangan. yang bayar per kilo malah untung. lanjutkan" },
      { authorId: 46, minutesAgo: 1400, content: "coba kalau celana panjang. 12 celana itu bisa 8 kilo. makanya nyuci kaos murah, nyuci celana bikin dompet olahraga" },
    ],
  },
  {
    id: 97,
    authorId: 19,
    minutesAgo: 1600,
    shares: 98,
    content:
      "shift normal: 3 x 8 jam. shift tempat gue: 2 x 10 jam + lembur 'sukarela'.\n\nhasil itungannya: sama-sama 24 jam.\n\nyang beda: kaki gue, mata gue, dan jumlah 'sukarela' yang gak ada di kamus sukarela.",
    comments: [
      { authorId: 22, minutesAgo: 1585, content: "semoga aturannya diperbaiki ya. kaki dan mata lu itu bukan biaya operasional. itu hidup lu" },
    ],
  },
  {
    id: 98,
    authorId: 8,
    minutesAgo: 1700,
    shares: 245,
    content:
      "orang yang nawarin ibu gue 'simpanan berbunga': 'bunganya kecil kok, 1% doang per bulan.'\n\ngue jawab: 'bunga apapun ukurannya, dia tumbuh. itu definisi bunga. 1% per bulan itu lebih dari 12% setahun. dan 12% itu gak kecil buat duit yang lagi susah.'\n\nyang nawarin diem. ibu gue liat gue, terus liat si penawar, terus bilang 'anak gue pinter'.\n\ngue gak pinter. gue cuma itung 3 detik. 3 detik itu lebih pendek dari mikir 'kecil ya kayaknya'.",
    comments: [
      { authorId: 27, minutesAgo: 1685, content: "'bunga apapun ukurannya, dia tumbuh' — definisi paling jujur yang pernah gue dengar. dan yang ditawarin kecil-kecilan itu selalu yang tumbuh paling rapi" },
      { authorId: 11, minutesAgo: 1640, content: "12% setahun itu bukan 'kecil'. kalau ditaruh di iklan, itu jadi 'menarik'. sama angka, dua rasa. tergantung siapa yang bayar" },
    ],
  },
  {
    id: 99,
    authorId: 25,
    minutesAgo: 1800,
    shares: 76,
    content:
      "btw senin itu awal minggu kan.\n\nterus kok kerasa akhir pekan doang rasanya. jam 8 malem udah lelahnya jumat.\n\njam manusia sama jam kalender beda. gak nyambung bgt",
    comments: [],
  },
  {
    id: 100,
    authorId: 28,
    minutesAgo: 1950,
    shares: 402,
    content:
      "coba sekarang sebutin 1 orang yang lu bisa telfon cuma buat cerita. bukan minta tolong, bukan nanya kerjaan. cerita. 'gue hari ini lelah bang.'\n\n...sama gue.\n\ngue gak sedih kok. gue cuma baru ngeh: kita punya 800 kontak, dan kontak yang aman buat ngomong hal kayak gitu tinggal segini.\n\nkalo lu sama kaya gue: nanti sore gue telfonin satu orang yang udah lama gak gue telfon. buat apa-apa. cerita doang.\n\nkalo lu mau ikut, ikut aja. gratis.",
    comments: [
      { authorId: 9, minutesAgo: 1930, content: "gue ikut. sore ini. kontak nomor 4 dari 2019. doain dia angkat" },
      { authorId: 22, minutesAgo: 1870, content: "gue yang jadi yang ditelfon kemarin. temen sekolah dulu. kami ngobrol 40 menit, dua-duanya ngerasa hidup. ikut ya semua" },
      { authorId: 31, minutesAgo: 1800, content: "gue laki-laki, 34 tahun, dan gue belum pernah telfon temen 'cuma cerita'. gue mulai hari ini. serius. makasih" },
      { authorId: 4, minutesAgo: 1730, content: "jawaban gue: ...gak ada yang bisa gue sebut. makanya gue gak bisa lewat tulisan ini tanpa komen. gue telfonin bapak gue nanti. dia pasti seneng banget padahal cuma ditanya 'pak, gimana kabarnya'" },
      { authorId: 16, minutesAgo: 1660, content: "kontak aman gue: 1. ibu kos. dia gak pernah telfonan, tapi tiap gue pulang dia nanya 'udah makan?'. itu udah mirip telfon" },
      { authorId: 37, minutesAgo: 1580, content: "di kampung gue dulu gak pernah sepi begini. gue pindah kota tahun lalu dan baru kerasa yang namanya 'gak ada yang bisa ditelfon'. ikut. semoga banyak yang ikut" },
      { authorId: 12, minutesAgo: 1500, content: "gue baru telfonin temen sekolah. dia angkat, diem 3 detik, terus bilang 'kok nelfon'. terus kita ngobrol 1 jam. makasih ya tulisan ini" },
      { authorId: 49, minutesAgo: 1420, content: "gue ikut sore. doain angkat ya. kalo gak angkat, gue kirim tulisan 'gue mau cerita dikit boleh?'. sama aja kok. yang penting nyampe" },
      { authorId: 45, minutesAgo: 1340, content: "dari bacaan yang pernah gue dapet: rata-rata orang dewasa punya 2-5 orang yang bisa diajak cerita apa aja, dan itu dianggap sehat. yang punya 1: masih dalam batas sehat. yang 0: mulai 1 hari ini" },
      { authorId: 15, minutesAgo: 1200, content: "Telepon itu gratis. Yang mahal itu nunggu lama. Ikut saya, sore ini juga. Salam." },
    ],
  },
]
