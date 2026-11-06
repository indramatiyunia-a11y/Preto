import type { ThreadzThread } from "../types"

// PART 3: cuitan 51-75 — ROMBAK TOTAL V3 (Nov 2026). Slot penulis campur
// sesuai urutan wajib di scripts/rumus-v2.md (audit mensyaratkan rotasi).
// Hukum isi: rumus-v2.md BAGIAN 2 (FORMULA HITAM dilarang) + BAGIAN 4 (12 hukum).
export const THREADS_PART3: ThreadzThread[] = [
  {
    id: 51,
    authorId: 9,
    minutesAgo: 1525,
    shares: 14,
    content:
      "order spesial hari ini: penumpang bawa tanaman daun gede, tingginya hampir separuh badan gue, dibungkus karung. gue kira bakal pusing di tikungan, ternyata dia pegangin sendiri kayak pegang bayi. gue jalan pelan, dia senyum. sampe tujuan tanaman aman, dia bahkan bayar tanpa ngomel walaupun rutenya agak jauh.\ngue gak tau nama tanamannya. yang gue tau, rute malam ini tenang banget",
    comments: [
      { authorId: 137, minutesAgo: 1517, content: "orang yang sayang tanaman biasanya sayang penumpang juga bre" },
      { authorId: 199, minutesAgo: 1509, content: "jalan pelan itu bukan lambat bang, itu rute yang dijaga" },
    ],
  },
  {
    id: 52,
    authorId: 33,
    minutesAgo: 1555,
    shares: 19,
    content:
      "anak tadi malam nanya, Bu, bedanya nasi harum sama nasi biasa apa? kok harganya beda dua ribu. aku jawab wanginya beda. dia nanya wanginya dari mana. aku jawab dari berasnya. dia nanya berasnya dari mana. aku jawab dari sawah. dia nanya sawahnya kenapa bisa wangi. AKU STOP. ternyata dia serius menelusuri wangi beras sampai akarnya.\nbesok aku tanya ke penjual beras, tapi siapa tau di sini ada yang bisa jelasin duluan",
    comments: [
      { authorId: 219, minutesAgo: 1547, content: "wangi nasi harum itu dari senyawa khas varietasnya kak, ditanam memang buat itu, bukan dikasih pewangi 🙃" },
      { authorId: 90, minutesAgo: 1540, content: "wangi beras harum itu dari senyawanya kak, bukan dicelup. tapi jawab anak 'ibu juga gak tau, kita cari bareng' itu sah kok, malah seru" },
      { authorId: 66, minutesAgo: 1533, content: "gue baca tiga kali kak, anak lu itu detektif beras" },
    ],
  },
  {
    id: 53,
    authorId: 2,
    minutesAgo: 1585,
    shares: 29,
    content:
      "TUGAS STATISTIK DASAR: KENAPA MEDIAN LEBIH JUJUR DARI MEAN? SOALNYA: SEMBILAN ORANG DAPAT NILAI 70, SATU ORANG DAPAT 10. MEAN-NYA JADI 64. MEDIAN-NYA TETAP 70. SATU ORANG YANG JEBLOK BIKIN SELURUH KELAS SEPERTI IKUT JEBLOK KALAU PAKAI MEAN. GUE MULAI NGERTI KENAPA GURU NYEBUT MEDIAN 'NILAI YANG GAK IKUT DRAMA'.\nyang belum gue nangkep: kalau jumlah datanya GENAP, median-nya ke mana? soal latihan gue ada yang sepuluh angka dan gue gak nemu angka tengah yang satunya",
    comments: [
      { authorId: 227, minutesAgo: 1576, content: "kalau genap bre, median = rata-rata dua angka tengah. ambil angka ke-5 sama ke-6, jumlahin, bagi 2. itu jawabannya 🙃" },
      { authorId: 209, minutesAgo: 1568, content: "mean sensitif ke nilai ekstrem, median gak. makanya berita gaji pakai median, biar gak digeser satu orang" },
      { authorId: 318, minutesAgo: 1560, content: "'nilai yang gak ikut drama' gue curi bre, besok gue pake di kelas" },
      { authorId: 118, minutesAgo: 1552, content: "soal lu bre: kalau angka ke-5 dan ke-6 beda, jawabannya bisa desimal. 68 sama 72 → median 70" },
    ],
  },
  {
    id: 54,
    authorId: 15,
    minutesAgo: 1615,
    shares: 11,
    content:
      "cabai di karung mulai keriting tapi belum busak teh. warnanya masih berkilau. aku pindahin ke karung kering, dikelupasin satu-satu. besok aku janjiin ke langganan yang gak keberatan bentuk, harga lebih ringan dikit. kalau besok masih gak laku ya sudah, jadi sambal rumah sendiri seminggu",
    comments: [
      { authorId: 102, minutesAgo: 1607, content: "cabai keriting teh biasanya malah lebih pedas lho, jujurin aja ke pembeli: keriting tapi ganas" },
    ],
  },
  {
    id: 55,
    authorId: 24,
    minutesAgo: 1645,
    shares: 13,
    content:
      "CUCU AKU PULANG SEKOLAH MEMBAWA KERTAS KECIL. TERTULIS ANGKA 8 BESAR. AKU TANYA ITU APA, DIA BILANG NILAI. NILAI APA, KATANYA NILAI MATEMATIKA. AKU TANYA 8 ITU BAGUS ATAU KURANG, DIA BILANG TERGANTUNG. TERGANTUNG APANYA. TERNYATA TERGANTUNG NILAI TEMEN-TEMENNYA. AKU TIDAK PAHAM SISTEM SEKOLAH SEKARANG, TAPI KAKINYA LONCAT-LONCET KAYAK BURUNG PIPIT, BERARTI BAGUS",
    comments: [
      { authorId: 77, minutesAgo: 1637, content: "kaki loncat-loncat itu indikator paling jujur mbak, lebih jujur dari angkanya 😄" },
      { authorId: 187, minutesAgo: 1629, content: "tergantung temennya itu jawaban pintar mbak. anak itu paham hubungan, bukan cuma angka" },
    ],
  },
  {
    id: 56,
    authorId: 5,
    minutesAgo: 1675,
    shares: 38,
    content:
      "hari ini warung jadi tempat les dadakan. anak SD sebelah bawa PR: cari luas segitiga, alas 12 cm, tinggi 7 cm. dia mangkel karena gak hafal rumus. aku ikuin aja dia itung pakai cara motong: kotak 12 × 7 dibagi dua karena segitiga itu setengah kotak. hasilnya 42 cm persegi. dia bilang 'kakak pinter'. aku gak nyangka momen itu dibalikin ke aku, padahal dulu aku juga mangkel di rumus yang sama",
    comments: [
      { authorId: 143, minutesAgo: 1667, content: "motong kotak terus dibagi dua itu metode yang sama dulu gue diajarin kak, anak gampang nangkep karena keliatan bentuknya" },
      { authorId: 272, minutesAgo: 1659, content: "cara motong itu bikin anak inget lama dik, rumus doang besok lupa. terusin aja" },
      { authorId: 60, minutesAgo: 1651, content: "besok kalau dia nanya luas trapesium gimana ya, jangan suruh motong lagi wkwk" },
    ],
  },
  {
    id: 57,
    authorId: 44,
    minutesAgo: 1705,
    shares: 24,
    content:
      "nasi goreng gue hari ini keasinan parah. gue nambah garam pas nyium kurang nendang, abes itu dua menit kemudian gue nambah lagi pas nyium masih kurang juga. ternyata garam yang pertama belum sempet bercampur. jadi soal hidup malam ini: garam yang sudah masuk gak bisa dikeluarin. temen kos bilang tambahin kentang rebus. gue gak punya kentang. gue punya roti. roti gak bantu sama garam",
    comments: [
      { authorId: 127, minutesAgo: 1697, content: "tunggu beberapa menit baru nambah bre, garam butuh waktu nyebar wkwkwk" },
      { authorId: 318, minutesAgo: 1689, content: "roti gak bantu garam tapi bantu perut bre. makan aja sambil belajar dosa-dosa dapur" },
    ],
  },
  {
    id: 58,
    authorId: 12,
    minutesAgo: 1735,
    shares: 4,
    content:
      "jam dinding ruang rawat mati baterai dua hari.\npasien tetap bertanya jam berapa.\ngue menjawab pakai kira-kira.\ndia bilang cukup. yang penting ada yang bertanya.",
    comments: [],
  },
  {
    id: 59,
    authorId: 30,
    minutesAgo: 1765,
    shares: 16,
    content:
      "si anak malam ini nanya pertanyaan yang bikin gue buka laptop: kenapa π = 3,14? dari mana angka itu? Saya jelasin π itu keliling lingkaran dibagi diameternya, dan angkanya tidak pernah berhenti: 3,14159 dan seterusnya. Dia nanya, kenapa gak berhenti? Saya jawab karena lingkaran tidak mau bulat sempurna dalam bahasa desimal. Dia bilang lingkarannya yang egois.\nSaya rasa jawaban dia lebih bagus dari jawaban saya.",
    comments: [
      { authorId: 212, minutesAgo: 1756, content: "egois itu tepat sih kak, π itu bilangan irasional, desimalnya gak pernah ulang dan gak pernah habis 🙃" },
      { authorId: 262, minutesAgo: 1748, content: "guru yang jujur belum puas dengan jawabannya sendiri itu guru yang layak dipercaya" },
      { authorId: 39, minutesAgo: 1740, content: "buat si anak: ukur lingkaran gelas pakai tali, bagi panjang talinya dengan diameternya. hasilnya mepet 3,14. angka itu keluar dari benda, bukan dari tinta" },
    ],
  },
  {
    id: 60,
    authorId: 21,
    minutesAgo: 1795,
    shares: 18,
    content:
      "jadwal semester ini ada bolong 4 jam di tengah, dua kali seminggu. pulang kos 40 menit naik-transit-naik lagi cuma buat nunggu kelas sore itu rasanya lebay, tapi nginep di perpus 4 jam juga kerasa kayak numpang hidup. temen gue saran manfaatin buat ngerjain tugas di kafe, tapi kafe itu jebakan buat gue, duduk 10 menit jadi niat nongkrong 3 jam.\nkalian biasanya ngapain di waktu bolong? aku butuh ide yang bukan jebakan",
    comments: [
      { authorId: 152, minutesAgo: 1787, content: "perpus kak, tapi tulis target di kertas dulu: dua tugas selesai baru pulang. tanpa target, perpus jadi tempat tidur bersuara nyaring" },
    ],
  },
  {
    id: 61,
    authorId: 17,
    minutesAgo: 1825,
    shares: 20,
    content:
      "bro, tugas gambar teknik pakai skala 1:50. pintu aslinya 80 cm, di gambar jadi 1,6 cm. gue ragu itu kegedean atau kekecilan buat kertas A3. gue ukur pakai penggaris, ternyata 1,6 cm cuma segede jempol. terus gue itung: kalau 80 cm jadi 1,6 cm, gedung 20 meter jadi 40 cm, masih masuk A3. intinya skala itu ngerutot dunia dengan rasio yang setia.\nbro kalian kalau ngegambar pakai skala, ngeceknya pakai apa? gue cuma pakai penggaris, rasanya kurang meyakinkan",
    comments: [
      { authorId: 227, minutesAgo: 1817, content: "penggaris cukup bre, yang penting konsisten sama skala garisnya di pojok kertas. kertas milimeter juga temen baik 🙃" },
      { authorId: 144, minutesAgo: 1809, content: "bayangin bre kalau tanpa skala, kertasnya harus segede pintu wkwkwk" },
    ],
  },
  {
    id: 62,
    authorId: 39,
    minutesAgo: 1855,
    shares: 33,
    content:
      "Menemukan hal kecil yang menyenangkan hari ini: untuk sebarang bilangan tiga digit yang angkanya tidak semua sama, susun digitnya dari besar ke kecil, kurangi dengan susunan dari kecil ke besar, ulangi. Semua berhenti di 495. Contoh: 972 → 972 − 279 = 693 → 963 − 369 = 594 → 954 − 459 = 495. Dan 495 menyusun dirinya lagi: 954 − 459 = 495, tidak mau pindah. Bilangan empat digit punya sahabat serupa, 6174, yang butuh paling banyak tujuh langkah.\nSaya mencoba sembilan bilangan acak di kertas bekas, sembilan-sembilannya sampai. Matematika punya kebiasaan memasukkan semua orang lewat pintu yang sama, kalau kita sabar menghitung.",
    comments: [
      { authorId: 219, minutesAgo: 1847, content: "6174 itu namanya konstanta Kaprekar kak, gue baru tau semalam dan langsung mencoba lima angka, semuanya benar 🙃" },
      { authorId: 143, minutesAgo: 1839, content: "gue baru nyoba 407: 740 − 047 = 693, terus ikut jalan lu sampai 495. gila sih ini" },
      { authorId: 336, minutesAgo: 1831, content: "ini cocok buat main sama adek gue. kalau dia nanya kenapa, gue jawab tanya pak yang satu ini wkwk" },
      { authorId: 258, minutesAgo: 1824, content: "kalimat terakhirnya indah, pak. pintu yang sama untuk semua yang sabar" },
    ],
  },
  {
    id: 63,
    authorId: 1,
    minutesAgo: 1885,
    shares: 15,
    content:
      "Pulang sekolah anak kedua bertanya di meja makan: Bu, kenapa hari itu 24 jam, bukan 20 atau 30? Aku jawab karena begitunya waktu. Dia bilang itu bukan jawaban. Benar juga. Papanya bilang dulu ada orang yang membagi hari jadi 24 dan mereka setuju. Anaknya bertanya siapa yang setuju. Papanya bilang orang zaman dulu. Anaknya bertanya kenapa mereka setuju.\nSekarang satu meja makan menjadi rapat keluarga tentang sejarah jam. Ada yang bisa bantu jawab versi anak SD? Alhamdulillah dia penasaran, hanya saja stok jawaban saya tinggal sedikit 😭",
    comments: [
      { authorId: 268, minutesAgo: 1877, content: "versi sederhananya bu: hari itu satu putaran bumi berputar, dan 24 itu cara manusia membagi putaran jadi potongan yang mudah dihitung" },
      { authorId: 59, minutesAgo: 1870, content: "jawab karena 24 gampang dibagi ke 2, 3, 4, 6, 8, 12 bu. anak suka kalau angkanya bisa diajak main" },
      { authorId: 71, minutesAgo: 1862, content: "rapat keluarga soal jam itu lucu banget bu 😄 anak saya kalau udah nanya kenapa-kenapan gini, ujung-ujungnya saya suruh tanya papanya juga" },
    ],
  },
  {
    id: 64,
    authorId: 28,
    minutesAgo: 1915,
    shares: 27,
    content:
      "adik kelas nanya pagi ini dan gue hampir kepleset: dia yakin peluang muncul dua gambar dari dua lemparan koin itu 1/3, soalnya kemungkinannya cuma tiga: dua gambar, gambar-angka, dua angka. gue jelasin pakai tabel, ada EMPAT kotak: GG, GA, AG, AA, dan GA beda sama AG. dia ngeyel bilang urutan gak penting. gue kasih analogi: kelereng di tangan kiri dan kanan itu dua cara nyusun, bukan satu. dia masih mikir sampai sekarang.\ndan gue ikut mikir, kenapa gampang banget salah di sini",
    comments: [
      { authorId: 212, minutesAgo: 1907, content: "tabel itu cara paling adil bre: setiap lemparan punya dua hasil, jadi 2×2 = 4 kemungkinan, dan tidak ada yang lebih istimewa 🙃" },
      { authorId: 143, minutesAgo: 1899, content: "cek simpelnya: lempar dua koin 40 kali, dua gambar biasanya muncul sekitar 10 kali, bukan 13-an. angka ngomong sendiri" },
      { authorId: 223, minutesAgo: 1891, content: "paling gampang gini bre: lemparan pertama 1/2 gambar, lemparan kedua lagi 1/2, dikali jadi 1/4. dua langkah selesai" },
      { authorId: 336, minutesAgo: 1884, content: "GA sama AG itu beda posisi bre, koin pertama gak kenal koin kedua" },
      { authorId: 131, minutesAgo: 1877, content: "gue dulu salahnya persis gitu, sembuhnya pas guru bilang: koin pertama gak tau koin kedua sudah jatuh" },
    ],
  },
  {
    id: 65,
    authorId: 46,
    minutesAgo: 1945,
    shares: 12,
    content:
      "Hari ini absensi guru: dari 34 orang, 3 mengajukan izin, sisanya hadir. Saya masih mencatat manual di buku besar sebelum masuk sistem, karena sistem kantor suka memakan catatan yang belum difoto. Anak buah bertanya kenapa tidak langsung aplikasi. Benar juga, tetapi buku besar tidak mati baterai dan tidak meminta diperbarui 😅\n34 kurang 3 sama dengan 31. Angka sederhana yang makan waktu lebih lama daripada rapatnya.",
    comments: [
      { authorId: 192, minutesAgo: 1937, content: "buku besar itu tampan karena setia bu. angka 31-nya benar" },
    ],
  },
  {
    id: 66,
    authorId: 6,
    minutesAgo: 1975,
    shares: 5,
    content:
      "gue dan kalkulator masih berdebat sampai sekarang. gue bilang 2 pangkat 3 itu 6 soalnya tinggal nambah. dia ngotot 8. gue tanya dari mana 8nya. dia diem, nampilin 8 lagi. gak ada penjelasan, cuma 8. sekarang gue gak bisa tidur dan kalkulator gue menang tanpa bicara.\n\ntolong ada yang bisa mastiin gak, dan jangan jawab 'itu aturan', itu bukan penjelasan itu nyerah",
    comments: [
      { authorId: 138, minutesAgo: 1967, content: "2×2×2 bre = 8. pangkat itu dikali sendiri berulang, nambah mah namanya lain. ketik manual kalau gak percaya, hasilnya tetep 8" },
      { authorId: 212, minutesAgo: 1959, content: "kalah debat sama kalkulator itu luka yang gak keliatan bre. gue pernah kalah sama tombol mode, jam HP gue salah bulan dua minggu" },
      { authorId: 154, minutesAgo: 1951, content: "guru gue dulu cuma bilang 'dikali sendiri tiga kali' dan gue duduk mikir gimana caranya angka mau ngaliin dirinya sendiri, kayaknya capek" },
      { authorId: 262, minutesAgo: 1944, content: "sisi terangnya 2+2+2 emang 6 bre, jadi lo gak salah total, lo cuma salah pintu" },
    ],
  },
  {
    id: 67,
    authorId: 38,
    minutesAgo: 2005,
    shares: 21,
    content:
      "bunda ngajarin aku cara baru buat 12 × 9: ambil 12 × 10 dulu itu 120, terus kurangin satu 12 karena sebenarnya cuma sembilan, jadi 108. aku cek pakai cara lelah, cocok. terus aku mikir, kalau 12 × 9 bisa gitu, 11 × 9 apakah 99 karena 110 kurang 11? aku itung: 99. BETUL. bunda bilang itu namanya trik. aku bilang itu namanya temuan.",
    comments: [
      { authorId: 39, minutesAgo: 1997, content: "temuan itu kata yang tepat nak. 11×9 = 110 − 11 = 99, dan polanya jalan terus. lanjutkan mencoba" },
      { authorId: 90, minutesAgo: 1990, content: "anak yang menemukan pola sendiri akan hafal lebih lama, bunda kerja bagus 🙏" },
    ],
  },
  {
    id: 68,
    authorId: 11,
    minutesAgo: 2035,
    shares: 26,
    content:
      "Selamat malam. Rekap transaksi bulan ini ada 480 baris di satu sheet, terbagi ke sembilan kategori. Saya masih menjumlahkan per kategori secara manual, memakan waktu hampir satu jam dan rawan terlewat satu baris. Rekan kantor menyebut ada fasilitas bernama pivot table yang bisa merangkum otomatis, tetapi saya belum pernah memakainya.\nApakah ada yang berkenan menjelaskan langkah paling sederhananya? Terima kasih sebelumnya.",
    comments: [
      { authorId: 227, minutesAgo: 2027, content: "blok seluruh datanya kak, Insert → PivotTable, taruh nama kategori di Rows dan angka di Values. dua menit langsung ketemu 🙃" },
      { authorId: 205, minutesAgo: 2019, content: "pivot itu sekali dibiasakan, cara manual terasa seperti menulis dengan paku bu" },
      { authorId: 336, minutesAgo: 2012, content: "sembilan kategori dalam 480 baris itu kandidat pivot nomor satu kak, hasilnya langsung bersih" },
    ],
  },
  {
    id: 69,
    authorId: 20,
    minutesAgo: 2065,
    shares: 10,
    content:
      "Penumpang tua tadi sore bercerita, dulu menelepon ke kampung harus ke kios, antre, bayar per menit, bicara singkat-singkat agar tidak mahal. Katanya suara ibunya selalu terburu-buru karena itulah kasih sayang zaman itu. Sekarang dia punya ponsel di saku, tetapi jarang menelepon. Tidak ada yang menunggu di ujung, katanya.\nSaya mengantarnya sampai halaman, tidak sempat menjawab.",
    comments: [
      { authorId: 258, minutesAgo: 2057, content: "telepon zaman dulu mahal waktunya, jadi dibicarakan dengan utuh. sekarang murah, jadi sering tertunda, pak" },
    ],
  },
  {
    id: 70,
    authorId: 50,
    minutesAgo: 2095,
    shares: 44,
    content:
      "GUYS. LAPORAN DAPUR MALAM INI.\nGUE MASAK MIE BUAT LIMA ORANG. AIR REBUSAN PERTAMA GUE KIRAIN AIR CUCI PIRING, KEBUANG. AIR REBUSAN KEDUA GUE KIRAIN AIR CUCI PIRING JUGA, KEBUANG. AIR KETIGA SELAMAT KARENA ADIK KOS GUE NAGIH MIE TEPAT WAKTU. GUYS, GUE BUANG DUA PANCE AIR PANAS HARI INI. YANG GUE BUANG ITU USAHA. ADIK KOS GUE BILANG 'KAKAK KERJA BAGUS, MIE ENAK'. GUE TIDAK TAHU HARUS SENANG ATAU MERASA DIBAYAR OLEH PENGHINAAN.",
    comments: [
      { authorId: 154, minutesAgo: 2087, content: "DUA KALI KEBUANG ITU SUDAH POLA BRE, BUKAN KECOLOKOAN. TAPI MIE ENAK JADI SEMUA DIMAFAKAN" },
      { authorId: 144, minutesAgo: 2079, content: "adik kos itu HRD yang baik bre, kasih pujian tepat waktu biar karyawan gak resign" },
      { authorId: 318, minutesAgo: 2071, content: "dua pance air panas itu setara setengah ember bre, gue ikut sakit hati wkwk" },
      { authorId: 331, minutesAgo: 2063, content: "pelajaran dapur: tempel label di panci. air cuci piring dan air rebus beda jauh nasibnya" },
    ],
  },
  {
    id: 71,
    authorId: 7,
    minutesAgo: 2125,
    shares: 36,
    content:
      "besok sidang proposal dan malam ini mentor bilang slide gue 'terlalu jujur', artinya 24 slide untuk 10 menit. dia minta disederhanakan tapi tidak bilang bagian mana. guys, kalau kalian jadi penguji, dari 24 slide yang isinya latar belakang, rumusan masalah, tujuan, manfaat, tinjauan pustaka, metode, jadwal, dan doa-doa gue, mana yang biasanya dipotong duluan? gue tidak mau membuang yang penting, tapi gue juga tidak mau penguji mengangguk sambil melihat jam 🙃",
    comments: [
      { authorId: 217, minutesAgo: 2117, content: "potong jadwal dan manfaat kak, itu bisa disebut lisan. sisakan satu slide rumusan masalah, penguji suka bertanya ke situ 🙃" },
      { authorId: 209, minutesAgo: 2110, content: "aturan kasar kak: 10 menit = 10-12 slide. yang dipotong duluan biasanya yang bisa dibaca sendiri di lembar proposal" },
    ],
  },
  {
    id: 72,
    authorId: 16,
    minutesAgo: 2155,
    shares: 14,
    content:
      "Komputer kantor memutuskan memperbarui diri tepat sebelum saya menekan simpan. Sisa pekerjaan: mulai dari awal. Pembaruan katanya selesai dalam beberapa menit. Beberapa menit itu ternyata 40 menit. Saya tidak marah. Saya hanya duduk, menatap layar biru, dan berpikir bahwa mesin juga butuh istirahat, hanya saja mesin tidak pernah meminta izin.",
    comments: [
      { authorId: 243, minutesAgo: 2147, content: "mesin istirahat tanpa izin, karyawan istirahat minta maaf. begitulah adanya non" },
    ],
  },
  {
    id: 73,
    authorId: 36,
    minutesAgo: 2185,
    shares: 15,
    content:
      "km, butuh tips hafal saraf tepi yang efisien. tabelnya panjang: nama saraf, akar tulang belakang, daerah yang dirasakan, gerakan yang dikendalikan. gue sudah membuat kartu kecil 24 lembar, hafalan naik-turun masih acak. jaga malam besok, atlas terbuka di halaman 412 jadi teman tidur, kopi sudah dingin dua jam. km-km punya jembatan keledai yang benar-benar menempel? yang seperti 'banyak hafal banyak bisa' sudah saya dengar empat kali",
    comments: [
      { authorId: 213, minutesAgo: 2177, content: "kelompokin pakai urutan kak: lengan dari C5 sampai T1, kaki dari L2 sampai S2. badan manusia rapi, hafalannya harus ikut rapi" },
      { authorId: 327, minutesAgo: 2169, content: "kartu kecil itu candu kak, begitu hafal 24, otak minta 24 lagi. atur jeda, jangan semua malam ini" },
      { authorId: 71, minutesAgo: 2161, content: "semangat kak, doa ibu-ibu grup ini ikut 🙏" },
    ],
  },
  {
    id: 74,
    authorId: 23,
    minutesAgo: 2215,
    shares: 2,
    content:
      "jam 03.12. log aplikasi menulis baris yang tidak saya buat: 'proses dihentikan dengan sukses'. proses yang mana. sukses yang mana. saya periksa ulang, log tetap yakin. sekarang dua-duanya tidak tidur: saya, dan log yang percaya diri.",
    comments: [
      { authorId: 318, minutesAgo: 2207, content: "bre biarkan saja, sukses itu artinya dia puas dengan dirinya sendiri" },
    ],
  },
  {
    id: 75,
    authorId: 45,
    minutesAgo: 2245,
    shares: 8,
    content:
      "Saya mengantar cucu ke tempat les matematika, lalu menunggu di teras. Ibu-ibu lain juga menunggu. Kami saling mengenal wajah tetapi belum pernah bicara. Hari ini salah seorang bertanya, lesnya bagus tidak? Kami bicara empat puluh menit tentang cucu, jadwal, dan cuaca. Sebelum pulang kami sudah saling menyebut nama.\nTeras tempat les itu ternyata arisan tanpa membawa apa-apa.",
    comments: [
      { authorId: 77, minutesAgo: 2237, content: "teras les itu klub orang tua yang anggotanya tidak pernah mendaftar pak 😄" },
      { authorId: 258, minutesAgo: 2229, content: "perkenalan paling jujur memang lewat orang yang kita tunggu, pak" },
    ],
  },
]
