import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25.
//
// KAMUS SUARA (tiap akun ngetik beda-beda. jangan pernah diseragamin):
//  16: ibu muda, huruf normal, 'aku', cerita anak, emoji sekali-kali
//   2: CAPS anak muda, 'gue', typo, wkwk
//  42: tumpul, lowercase, gak basa-basi, gak jaim
//   5: tenang, presisi, angka cuma kalau memang ada angkanya
//  33: dapur & masak, hangat, lowercase
//  25: pertanyaan absurd, pendek
//   9: kampung & tetangga, panjang dikit, hangat
//  12: pekerja shift, pendek, capek, tanpa emoji
//  20: yakin tapi sering salah, percaya diri tinggi
//  45: bapak tua, kapital di awal kalimat, 'Saya', kalimat panjang
//  10: abang kelas SMP, CAPS campur huruf kecil, ribut
//  19: malem-malem, pendek, gak suka penutup
//  35: ragu-ragu, banyak tanya, sopan
//   3: cerita panjang keluarga, gak pernah kasih kesimpulan
//  44: sial terus, ringan, 'YAUDAH'
//  48: ibu perencana, catetan keluarga, rapi
//   7: kalem, 'saya', pengamat
//  30: kakak yang bantuin adik, 'aku', ringan
//  23: jam 2 pagi, minimalis
//  36: om penasaran teknologi, nyasar itungan
//  46: bapak anak remaja, banyak dialog, sabar
//   6: polos beneran, nanya serius, ketawa sendiri
//  37: ayah pendiam, pendek
//  29: pernah lihat judi merebut keluarga, emosinya diem-diem
//   4: satu-dua kalimat, datar, jarang nulis
//
// ATURAN DUNIA: gak ada nama toko/merek/aplikasi/orang. Angka yang dipakai
// angka dapur dan angka jalan (kilo, ribu, menit, anak tangga). Aman dibaca
// bocah sampai eyang. Gak ada yang jualan, gak ada yang ngajarin.
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 16,
    minutesAgo: 35,
    shares: 12,
    content:
      "anak pertama aku resmi masuk SD minggu ini. sepatu ukuran 31, seragam L, pulang jam 1. semua angka baru yang harus aku hafal sambil tetap kerja.\n\nyang bikin aku senyum tadi pagi: dia pakai sepatunya mundur, kaki kiri masuk kanan. aku betulkan pelan-pelan, dia bilang 'Bunda, yang penting jalannya maju'.\n\niya sayang. yang penting maju.",
    comments: [
      { authorId: 9, minutesAgo: 30, content: "sepatu mundur itu fase yang semua anak lewatin. sabar bunda, nanti malah dia yang ngingetin jam sekolah" },
      { authorId: 48, minutesAgo: 26, content: "catat ukuran sepatunya tiap 6 bulan. anak itu naik ukurannya lebih cepet dari kenaikan apa pun di rumah" },
      { authorId: 22, minutesAgo: 18, content: "semoga lancar sekolahnya ya 🙏" },
      { authorId: 34, minutesAgo: 6, content: "selamat masuk SD! semangat buat bundanya juga" },
    ],
  },
  {
    id: 2,
    authorId: 2,
    minutesAgo: 55,
    shares: 30,
    content:
      "GUE NYARI HP SATU JAM. PAKE SENTER HP. DUA KALI NELPON DARI HP NYEBELAH. UDAH SIAP BANGKRUT BUAT BELI HP BARU, TERNYATA ADA DI TANGAN. SEJAK TADI. GUE MAU MARAH KESIAPA",
    comments: [
      { authorId: 10, minutesAgo: 50, content: "WKWKWK KLASIK BANGET" },
      { authorId: 38, minutesAgo: 44, content: "HAAA GUE JUGA PERNAH, NYARI KACAMATA PAKE KACAMATA SAMPE SEMBAH" },
      { authorId: 49, minutesAgo: 33, content: "yang nelp dari hp sebelah itu puncaknya wkwk" },
      { authorId: 6, minutesAgo: 20, content: "kalo nyari kunci bisa gak pake kunci? kan bunyi. kok gak ada yang bikin" },
      { authorId: 31, minutesAgo: 8, content: "sama, versi gue nyari sandal pake sandal. satu kaki" },
    ],
  },
  {
    id: 3,
    authorId: 42,
    minutesAgo: 75,
    shares: 88,
    content:
      "tetangga nanya soal aplikasi 'modal kecil untung gede'. gue suruh dia baca pelan-pelan tulisan paling kecil di bagian bawah. dia baca. diem. terus nanya, 'ini kalau rugi, boleh gak dibalikin?'\n\nnah itu. yang nawarin untung gede gak pernah mau pegang ruginya. ruginya buat kita yang baca sambil mikir 'kali ini beda'.",
    comments: [
      { authorId: 29, minutesAgo: 68, content: "pertanyaan 'boleh dibalikin gak' itu yang paling penting. sayangnya kebanyakan nanya belakangan" },
      { authorId: 45, minutesAgo: 60, content: "Yang ditawarkan seringnya keuntungan. Yang ditanya langka sekali risikonya." },
      { authorId: 31, minutesAgo: 47, content: "tulisan kecil di bawah itu memang penyelamat. cuma jarang ada yang sempatin" },
      { authorId: 12, minutesAgo: 33, content: "kasus mirip juga ada di sebelah rumah. sama persis urutannya" },
      { authorId: 15, minutesAgo: 22, content: "Semoga tetangga Anda mendengar. Itu sudah paling utama." },
      { authorId: 22, minutesAgo: 7, content: "semoga dia mengurungkan niatnya 🙏" },
    ],
  },
  {
    id: 4,
    authorId: 5,
    minutesAgo: 100,
    shares: 15,
    content:
      "tadi nganter sepupu ke tower sebelah. liftnya 41 lantai plus 2 basement. gue itung tombolnya, 43.\n\npas keluar gue mikir, ngapain gue itung.\n\nterus gue jawab sendiri: karena angka di lift paling enak diitung. selesai.",
    comments: [
      { authorId: 14, minutesAgo: 92, content: "gue pilih itung ubin dinding. hasilnya beda tiap gedung" },
      { authorId: 39, minutesAgo: 75, content: "43 itu angka prima. bonus info gratis" },
      { authorId: 23, minutesAgo: 60, content: "gue itung tombol lift juga tiap naik. gak pernah sampe segitu sih. tapi tetep ngitung" },
    ],
  },
  {
    id: 5,
    authorId: 33,
    minutesAgo: 125,
    shares: 21,
    content:
      "lodeh hari ini santannya dari tetangga. bumbunya standar, gula tinggal segenggam kecil karena gula habis.\n\nternyata rasanya lebih pas. kadang yang bikin enak bukan resep. kebetulan.",
    comments: [
      { authorId: 18, minutesAgo: 118, content: "gula sekarang mahal lho. segenggam kecil itu hemat 500-an" },
      { authorId: 16, minutesAgo: 105, content: "masakan itu bumbu sama kedekatan tetangga 😅" },
      { authorId: 49, minutesAgo: 88, content: "lodeh apapun enak, gak bisa dibantah" },
      { authorId: 22, minutesAgo: 70, content: "punya tetangga yang tukeran lauk itu berkah 🙏" },
    ],
  },
  {
    id: 6,
    authorId: 25,
    minutesAgo: 150,
    shares: 3,
    content: "kenapa ya tangga darurat selalu di pojok. apa api-nya suka kejar orang yang jalan di tengah.",
    comments: [
      { authorId: 10, minutesAgo: 141, content: "BJIR GAK PERNAH MIKIR" },
      { authorId: 5, minutesAgo: 128, content: "karena jalur darurat itu cuma satu arah: keluar. pojok biar gak ada yang bingung milih" },
    ],
  },
  {
    id: 7,
    authorId: 9,
    minutesAgo: 180,
    shares: 45,
    content:
      "sore ini saluran depan rumah mampet. yang turun: bapak-bapak RT 04, satu gayung pinjaman dari rumah gue, dan anak-anak yang tugasnya basa-basi 'ada yang bisa dibantu?'.\n\nyang paling semangat umur 68. yang keluar uang jajanin es buat semua orang: bapak yang motornya paling tua di gang.\n\nselesai sebelum magrib. gak ada rapat, gak ada foto-foto. yang ada muka cuci semua.",
    comments: [
      { authorId: 43, minutesAgo: 170, content: "bapak umur 68 tahun itu harta kampung 🙏" },
      { authorId: 37, minutesAgo: 158, content: "alhamdulillah, tetangga masih rukun" },
      { authorId: 22, minutesAgo: 140, content: "kerja bakti paling jujur ya model begini" },
      { authorId: 12, minutesAgo: 122, content: "di sini juga ada. selesai jam magrib karena debat siapa pegang sapu duluan" },
      { authorId: 31, minutesAgo: 105, content: "selesai sebelum magrib itu rekor" },
    ],
  },
  {
    id: 8,
    authorId: 12,
    minutesAgo: 205,
    shares: 8,
    content:
      "pulang shift jam 6 pagi. naik bus pertama, tidur, kelewatan stop, nyampe terminal, balik lagi. bonus perjalanan 40 menit gratis.\n\nuntung bus terakhir masih ada kursi.",
    comments: [
      { authorId: 26, minutesAgo: 195, content: "gue kelewatan seminggu sekali. itu jadi jam tidur kedua" },
      { authorId: 31, minutesAgo: 182, content: "wkwk bolak balik" },
      { authorId: 1, minutesAgo: 160, content: "sama bang. dua kali seminggu. bukan soal capek, kursinya emang enak" },
    ],
  },
  {
    id: 9,
    authorId: 20,
    minutesAgo: 235,
    shares: 54,
    content:
      "gue udah mutusin: diskon 50% terus 20% itu 70%. udah. fix. JANGAN ADA YANG MIKIR ULANG. gue butuh kemenangan kecil hari ini",
    comments: [
      { authorId: 5, minutesAgo: 225, content: "50 dari 100 jadi 50. 20 dari 50 jadi 10. totalnya 60. maaf, angka gak kenal kompromi" },
      { authorId: 2, minutesAgo: 214, content: "GUE MAU IKUT MENANG DONG, BOLEH GAK DIBIARKAN SALAH SEMINGGU" },
      { authorId: 6, minutesAgo: 200, content: "berarti dapet 60 ya? terus 40-nya ke mana? tanya serius" },
      { authorId: 39, minutesAgo: 185, content: "50 terus 20 emang 60. makanya tiap abis bayar gue cek struk, biar kagetnya di tempat" },
      { authorId: 35, minutesAgo: 170, content: "yakin gak mau diitung ulang dulu?" },
      { authorId: 44, minutesAgo: 150, content: "gue pernah bilang gitu, langsung diketawain kasir" },
    ],
  },
  {
    id: 10,
    authorId: 45,
    minutesAgo: 260,
    shares: 19,
    content:
      "Jam dinding peninggalan ibu selalu mundur empat menit tiap minggu. Setiap Sabtu saya naik kursi, memundurkannya lagi. Empat menit itu tidak mengganggu siapa-siapa, tetapi membiarkannya berjalan mundur terasa seperti membiarkan ibu kehilangan pegangan. Jadi tiap Sabtu saya kembali. Begitu saja.",
    comments: [
      { authorId: 15, minutesAgo: 250, content: "Yang kecil diurus dengan sungguh-sungguh itu yang maknanya paling besar." },
      { authorId: 41, minutesAgo: 240, content: "jam dinding nenek saya dulu juga begitu. pas beliau tiada, jamnya kami biarkan berhenti. beda cara, sama rasanya" },
      { authorId: 22, minutesAgo: 228, content: "menyentuh sekali 🙏" },
      { authorId: 27, minutesAgo: 212, content: "mundur 4 menit per minggu itu sekitar 34 detik sehari. mundurnya konsisten ya" },
    ],
  },
  {
    id: 11,
    authorId: 10,
    minutesAgo: 290,
    shares: 26,
    content:
      "PR MATEMATIKA ADIK GUE KELAS 3 ITU LEBIH SUSAH DARI PR GUE WAKTU KELAS 3. GUE SAMA BAPAK KERJAIN 40 MENIT. HASIL AKHIRNYA: BAPAK GUE YANG NANGIS. GUE CUMA PEGANG PENSIL DARI AWAL",
    comments: [
      { authorId: 38, minutesAgo: 280, content: "HAAA BAPAKNYA NANGIS WKWKWK" },
      { authorId: 46, minutesAgo: 270, content: "di rumah kami yang nangis ibunya. gara-gara soal botol dan air" },
      { authorId: 13, minutesAgo: 255, content: "TUNGGU. YANG PR ITU SIAPA. BAPAKNYA IKUT SEKOLAH JUGA?" },
      { authorId: 24, minutesAgo: 238, content: "soal kelas 3 sekarang emang desainnya buat dewasa yang mikir. anaknya santai aja" },
      { authorId: 32, minutesAgo: 220, content: "wkwk kasian paknya 😭" },
    ],
  },
  {
    id: 12,
    authorId: 19,
    minutesAgo: 315,
    shares: 2,
    content:
      "jam 1 pagi. suara kulkas nyala, berhenti, nyala lagi. dia satu-satunya di rumah yang punya jadwal.\n\ngue nyusul tidur, sambil ngerasa gak disiplin sama kulkas sendiri.",
    comments: [
      { authorId: 23, minutesAgo: 305, content: "kulkas rumah gue juga gitu. kita sama-sama diatur" },
      { authorId: 4, minutesAgo: 292, content: "wkwk" },
    ],
  },
  {
    id: 13,
    authorId: 35,
    minutesAgo: 345,
    shares: 17,
    content:
      "tanya beneran: kok tiap tahun hari besar itu mundur 10-11 hari ya di kalender? bulan kok bisa kejar-kejaran sama tahun. siapa yang ngitung. boleh gak gue itung sendiri di rumah",
    comments: [
      { authorId: 5, minutesAgo: 333, content: "tahun kamariah itu 354 hari, masehi 365. beda 11. makanya mundur tiap tahun" },
      { authorId: 45, minutesAgo: 320, content: "Karena sistemnya dua: satu mengikuti bulan, satu mengikuti matahari. Keduanya benar, hanya beda kecepatan." },
      { authorId: 27, minutesAgo: 305, content: "mundurnya konsisten, jadi sebenarnya bisa diprediksi. coba aja itung sendiri, seru" },
      { authorId: 6, minutesAgo: 288, content: "berarti ultah gue nanti bisa pas musim hujan dong? seru banget" },
      { authorId: 43, minutesAgo: 270, content: "wawasan baru 🙏" },
    ],
  },
  {
    id: 14,
    authorId: 3,
    minutesAgo: 375,
    shares: 132,
    content:
      "makan malem tadi ada 2 ayam dibakar buat 8 orang di meja. om gue buka sesi: 'kalo bagi adil gimana?'\n\nkakak gue bilang bagi 8 sama rata. bapak gue bilang yang gede bagi 6, yang kecil bagi 4. terus sisanya? 'sisanya udah gue makan' kata bapak gue sambil nyimpen bagian dia.\n\nsekarang rumah punya dua kubu: tim 'sama rata' dan tim 'menurut kebutuhan'. gue gak ikut. gue tim 'yang penting dibagi sekarang, debatnya besok'.\n\nayamnya udah gak ada. debatnya masih nyala ampe sekarang di grup keluarga.",
    comments: [
      { authorId: 48, minutesAgo: 365, content: "rumus kami: dibagi sama rata dulu, yang giginya lagi tumbuh dapat potongan tanpa tulang. aman semua" },
      { authorId: 42, minutesAgo: 352, content: "yang paling gendut minta dikit. itu solusi dunia nyata" },
      { authorId: 2, minutesAgo: 338, content: "TIM SAMARATA WOI. GAK ADA LAIN" },
      { authorId: 25, minutesAgo: 322, content: "kalo ayamnya 1,5 gimana? setengahnya dibagi ke siapa" },
      { authorId: 16, minutesAgo: 305, content: "bapak-bapak sama aja di semua rumah 😅" },
      { authorId: 33, minutesAgo: 288, content: "next masak yang gak bisa dibagi: sup. otomatis damai" },
      { authorId: 31, minutesAgo: 270, content: "baca semua sampe abis. gak bantu apa-apa. makasih" },
    ],
  },
  {
    id: 15,
    authorId: 44,
    minutesAgo: 400,
    shares: 12,
    content:
      "pagi buru-buru, nyampe 20 menit naik motor, baru sadar: sepatu kanan sama kiri beda pasangan. satu hitam satu biru.\n\nYAUDAH. gue lakuin aja kayak memang tren. ampe sore gak ada yang ngomong apa-apa. berarti berhasil?",
    comments: [
      { authorId: 32, minutesAgo: 390, content: "menang ya 😭" },
      { authorId: 50, minutesAgo: 378, content: "beda warna doang kan, paling orang mikir lo kreatif" },
      { authorId: 10, minutesAgo: 362, content: "WKWK besok kaos dalam kebalik dong biar komplit" },
      { authorId: 47, minutesAgo: 345, content: "beda model atau cuma beda warna? kalo beda warna masih aman" },
    ],
  },
  {
    id: 16,
    authorId: 48,
    minutesAgo: 430,
    shares: 41,
    content:
      "Nyokap ditawarin tetangga: 'pinjem 2 juta, bunga tipis, per bulan 200 ribu'. Nyokap nanya ke saya dulu. Saya tulis di kertas receh: 200 ribu kali 12 bulan jadi 2,4 juta. Duitnya tetep 2 juta, yang jalan 2,4.\n\nNyokap bilang, 'berarti yang jalan kita ya, bukan duitnya'. Betul. Akhirnya gak jadi ambil, nyokap malah kirimin tetangganya semangkuk sayur.\n\nUrusan duit selesai, urusan tetangga tetap aman.",
    comments: [
      { authorId: 45, minutesAgo: 418, content: "200 ribu tiap bulan dari 2 juta itu sepuluh persen per bulan. Setahun kumpulannya 2,4 juta, sudah melebihi pokoknya. Itu yang perlu dihitung sejak awal." },
      { authorId: 42, minutesAgo: 405, content: "yang nawarin bunga tipis biasanya nunggangin admin gemuk di belakang" },
      { authorId: 22, minutesAgo: 390, content: "cara nyokap menutup topiknya bagus sekali 🙏" },
      { authorId: 21, minutesAgo: 372, content: "kertas receh lebih jujur daripada banyak brosur" },
      { authorId: 37, minutesAgo: 355, content: "alhamdulillah gak jadi" },
      { authorId: 15, minutesAgo: 335, content: "Sayur dan tetangga itu kadang lebih ampuh daripada seminar keuangan." },
    ],
  },
  {
    id: 17,
    authorId: 7,
    minutesAgo: 460,
    shares: 9,
    content:
      "Setahun ini saya mencatat di kertas: kapan hujan mulai. Hasilnya, hujan paling sering datang jam 4 sore sampai magrib.\n\nJadwal jemuran saya pindah ke pagi. Satu tahun mencatat, hasilnya satu keputusan kecil. Tetap saya lanjutkan. Murah, dan berhasil.",
    comments: [
      { authorId: 40, minutesAgo: 450, content: "jam 4 sampai magrib itu cocok sama pengamatan saya. setahun rajin nyatet, salut" },
      { authorId: 5, minutesAgo: 435, content: "iya. jam 4-6 itu frekuensinya paling tinggi di banyak tempat" },
      { authorId: 45, minutesAgo: 418, content: "Mencatat itu jarang gagal. Yang sering gagal itu mengingat." },
    ],
  },
  {
    id: 18,
    authorId: 30,
    minutesAgo: 490,
    shares: 14,
    content:
      "bantuin adik kelas 3 SD PR perkalian. dia itung 7 x 8 pake jari, lama banget. terus tiba-tiba dia bilang, 'kak, 7 x 4-nya 28, tinggal dobel. 56.'\n\ndia nemu sendiri. terus dia gak mau dikasih cara lain lagi.\n\nya udah. aku ganti jadi penonton.",
    comments: [
      { authorId: 39, minutesAgo: 480, content: "dobel itu pintu paling gampang masuknya. dia nemunya sendiri itu yang mahal" },
      { authorId: 24, minutesAgo: 466, content: "anak yang nemu cara sendiri itu gak mau diganti. benar itu" },
      { authorId: 16, minutesAgo: 450, content: "pintar adiknya 🥰" },
      { authorId: 11, minutesAgo: 432, content: "budakna pinter euy" },
      { authorId: 5, minutesAgo: 415, content: "peran orang dewasa paling pas: penonton yang tepuk tangan" },
    ],
  },
  {
    id: 19,
    authorId: 23,
    minutesAgo: 520,
    shares: 1,
    content:
      "jam 2 pagi. gue makan pisang di dapur sambil berdiri. gelap, gak nyalain lampu, biar gak dianggap bangun sama siapa-siapa.\n\npisangnya matang pas. ya udah. itu aja laporan malam ini.",
    comments: [{ authorId: 4, minutesAgo: 510, content: "laporan diterima" }],
  },
  {
    id: 20,
    authorId: 36,
    minutesAgo: 550,
    shares: 23,
    content:
      "kuota 10 GB. dipake video call keluarga 1 jam aja langsung turun ke 6. sisanya 4 GB buat seminggu. gue itung, 4 dibagi 7 itu sekitar setengah lebihan per hari. 500 MB-an.\n\n500 MB buat apa? buat nyari 'cara hemat kuota' pas kuotanya udah abis.",
    comments: [
      { authorId: 27, minutesAgo: 540, content: "video call itu makannya gede, sekali turunnya ratusan MB. buat rutinitas, telepon biasa lebih awet" },
      { authorId: 14, minutesAgo: 525, content: "yang makan kuota biasanya bukan yang keliatan di layar" },
      { authorId: 12, minutesAgo: 508, content: "sama. sisa selalu buat hal yang gak kepake" },
      { authorId: 35, minutesAgo: 490, content: "500 MB sehari itu ketat banget ya" },
    ],
  },
  {
    id: 21,
    authorId: 46,
    minutesAgo: 580,
    shares: 35,
    content:
      "anak gue 15 tadi sore: 'pap, beliin hp baru dong, yang sekarang lemot.' gue bilang oke, nanti gue hitung dulu.\n\nmalamnya gue liat dia duduk di depan HP-nya sendiri. ternyata dia yang hitung cicilannya: 300 ribu kali 12 bulan. dia tutup kalkulator, bilang 'hp sekarang masih bisa'.\n\ngue gak ngomong apa-apa. gue cuma ngepel lebih semangat tadi malam.",
    comments: [
      { authorId: 15, minutesAgo: 568, content: "Anak yang sudah menghitung sendiri biasanya jadi realistis. Yang dilarang duluan biasanya malah penasaran." },
      { authorId: 48, minutesAgo: 555, content: "3,6 juta bisa buat kebutuhan sekolah setahun. dia pasti udah ngeh" },
      { authorId: 9, minutesAgo: 540, content: "papa ngepel lebih semangat wkwk. bagus" },
      { authorId: 12, minutesAgo: 522, content: "hp lama emang paling awet kalau cicilannya gak ada" },
      { authorId: 22, minutesAgo: 505, content: "didikan yang halus 🙏" },
    ],
  },
  {
    id: 22,
    authorId: 6,
    minutesAgo: 610,
    shares: 47,
    content:
      "kemarin beli telor 3 biji 10 ribu. hari ini beli 6 biji 20 ribu. berarti makin banyak makin murah kan??\n\nTAPI HARGA PER BIJINYA SAMA AJA. 10 ribu dibagi 3... eh, 20 ribu dibagi 6... KOK SAMA.\n\ntukangnya ketawa gak jelas. gue juga ketawa. dua-duanya gak ngomong apa-apa lagi.",
    comments: [
      { authorId: 2, minutesAgo: 600, content: "SATU BIJI KALO DIBULETIN 3.300. BELI 3 ATAU BELI 6, PER BIJINYA TETEP 3.300. MURAHNYA Nggak MUNCUL-MUNCUL WOI" },
      { authorId: 18, minutesAgo: 588, content: "makanya kalo mau murah itu negosiasinya di lidah, bukan di jumlah lho" },
      { authorId: 39, minutesAgo: 572, content: "10 per 3 itu 3,3. 20 per 6 juga 3,3. satu biji emang sama. yang beda cuma jumlahnya" },
      { authorId: 33, minutesAgo: 555, content: "telor itu gak kasih diskon. yang kasih cuma tukangnya kalau kita langganan" },
      { authorId: 25, minutesAgo: 538, content: "kalo beli 10 biji 30 ribu gimana? itung dong sekarang" },
      { authorId: 44, minutesAgo: 520, content: "gue pernah kena lebih parah: beli banyak malah abis lebih cepet" },
      { authorId: 31, minutesAgo: 502, content: "wkwk telor paling jujur di dunia" },
    ],
  },
  {
    id: 23,
    authorId: 37,
    minutesAgo: 640,
    shares: 7,
    content:
      "anak bungsu hari ini berhasil geser bangku sendiri biar nyampe keran. dia bangga banget. abis itu lupa bilang makasih ke bangkunya.\n\naku ingetin pelan-pelan. dia balik lagi, tepuk bangkunya dua kali sambil bilang 'maaf ya tadi buru-buru'.\n\nudah. itu aja. pagi ini udah cukup.",
    comments: [
      { authorId: 16, minutesAgo: 630, content: "adab kecil gini yang nempel sampai dewasa 🥰" },
      { authorId: 43, minutesAgo: 617, content: "bapak yang sabar itu amanah 🙏" },
      { authorId: 22, minutesAgo: 600, content: "manis sekali 🙏" },
      { authorId: 15, minutesAgo: 582, content: "Kecil, tetapi tumbuh di tempat yang benar." },
    ],
  },
  {
    id: 24,
    authorId: 29,
    minutesAgo: 670,
    shares: 156,
    content:
      "dua tahun lalu sepupu gue mulai dari 'cuma iseng'. minggu lalu ibunya duduk di teras sambil nanya gue, 'pernah gak dimintain 50 ribu sama saudara sendiri buat modal bangun lagi?'\n\ngue gak jawab. gue masuk, buatin kopi.\n\nkopi panas itu gak ngomong apa-apa. tapi dia abisin. abis itu dia bilang, 'mulai besok saya antar dia kerja.'\n\nbukan janji gede. tapi lebih gede dari semua link yang dia terima dua tahun ini.",
    comments: [
      { authorId: 42, minutesAgo: 658, content: "antar kerja itu bentuk yang paling gampang dipahami: ada yang ngawal, susah balik ke lubang lama" },
      { authorId: 15, minutesAgo: 646, content: "Semoga sang ibu diberi kekuatan, dan saudaranya jalan keluarnya." },
      { authorId: 9, minutesAgo: 632, content: "di kampung kami juga ada kasusnya. yang paling capek emang ibunya" },
      { authorId: 22, minutesAgo: 616, content: "semoga lekas pulih, keluarganya juga 🙏" },
      { authorId: 45, minutesAgo: 600, content: "Yang diminta 50 ribu itu bukan uang. Itu tanda terakhir." },
      { authorId: 31, minutesAgo: 582, content: "gue baca pelan-pelan. terima kasih udah nulis" },
      { authorId: 37, minutesAgo: 565, content: "semoga aman" },
      { authorId: 19, minutesAgo: 548, content: "kopi panas paling ngefek jam segitu" },
    ],
  },
  {
    id: 25,
    authorId: 4,
    minutesAgo: 700,
    shares: 5,
    content: "kunci motor gue pernah gue simpen di tempat rapi. sekarang kunci motornya masih ada, tempat rapi-nya yang ilang.",
    comments: [
      { authorId: 12, minutesAgo: 690, content: "wkwk persis" },
      { authorId: 50, minutesAgo: 675, content: "tempat rapi itu benda paling sering ilang di rumah deh" },
    ],
  },
]
