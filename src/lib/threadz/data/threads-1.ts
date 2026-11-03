import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25.
//
// JARAN SUARA (tiap akun ngetik beda. gak ada gaya seragam):
//   3: cerita panjang, suka nyeret keluarga ke topik, gak pernah kasih kesimpulan
//   5: pendek, presisi, pake angka doang kalau emang ada angkanya
//   9: keluarga & tetangga, anti-mesin lewat cerita, bukan lewat ceramah
//   1,4,7,23: pendek-pendek. 23 suka malam-malam, gak suka titik akhir
//   2,17: CAPS. 6,25: polos nanya. 13: CAPS panik. 10: eksperimen logika
//  15: bapak tua, kalimat rapi, "Saya". 11: guru, "saya". 24: bapak anak
// ATURAN DUNIA: gak ada nama toko/merek/aplikasi/orang. Kalau butuh angka,
// angkanya angka dapur: receh, kaleng, gentong. Aman dibaca bocah sampai eyang.
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 3,
    minutesAgo: 35,
    shares: 486,
    content:
      "om gue semalem debat sama kakak gue: 0,999... itu sama dengan 1 apa bukan. dua-duanya lama. dua-duanya nyangkut di kata 'hampir'.\n\nyang seru tuh pas bibi masuk bawa piring, denger 10 detik, bilang 'kalo sama kenapa tulisannya beda', terus keluar. pulang duluan tanpa pamit pikir.\n\ngue gak sided sama siapa-siapa. gue dengerin sambil nyimpin es teh. dua-duanya ngangek gue.\n\nyang gue perhatiin: debat angka gak pernah ada yang pulang bawa hasil. tapi pagi ini mereka nanya ke gue, 'eh lu lebih ke mana'.\n\nkok gue yang diseret. gue gak ngajak.\n\nya udah gue jawab, 'gue netral. tapi es tehnya habis, buatin lagi dong'.",
    comments: [
      { authorId: 2, minutesAgo: 30, content: "BERARTI GAK ADA ANGKA ANTARA 0,999... SAMA 1 KAN?? GAK ADA JARAK TAPI BEDA. LOGIKANYA MENANG SENDIRI" },
      { authorId: 5, minutesAgo: 27, content: "1/3 itu 0,333... . dikali 3 ya 0,999... . tapi 1/3 x 3 ya 1. dua jalan, satu rumah" },
      { authorId: 17, minutesAgo: 24, content: "KALO SAMA KENAPA KALKULATOR NULISNYA BEDA. JAWAB SEKARANG. GUE MASIH DI TERMINAL" },
      { authorId: 9, minutesAgo: 21, content: "di rumah gue topik ini nyaris bikin om sama ayah gak makan. ibu masuk cuma bilang 'angka gak lari, nasi lari'. damai instan" },
      { authorId: 25, minutesAgo: 18, content: "btw kalo 0,999 dibuletin jadi 1, berarti angka yang dibuletin tuh dapet promo naik kelas ya" },
      { authorId: 11, minutesAgo: 15, content: "pernah saya bawa ke kelas. satu murid jawab 'pak kalo dihampirin terus, kapan nyampe'. saya gak jawab. saya kasih nilai buat pertanyaannya aja" },
      { authorId: 46, minutesAgo: 11, content: "anak gue ampe nangis belajar ginian waktu SMP. ternyata penderitaannya turun-temurun" },
      { authorId: 23, minutesAgo: 5, content: "es teh di tengah debat angka itu rasanya lebih manis ya" },
      { authorId: 31, minutesAgo: 2, content: "gue gak ngerti satu pun tapi baca semua sampe habis. olahraga gratis" },
    ],
  },
  {
    id: 2,
    authorId: 13,
    minutesAgo: 60,
    shares: 812,
    content:
      "SERIUS TANYA: 6÷2(1+2) ITU BERAPA. GUE BILANG 1, TEMEN GUE BILANG 9. GUE CEK KALKULATOR, DIA NGASIH 9.\n\nJADI GUE SALAH ATAU KALKULATOR SALAH. JANGAN JAWAB 'KALKULATOR BENAR' KARENA GUE GAK SIAP DENGER ITU HARI INI",
    comments: [
      { authorId: 5, minutesAgo: 55, content: "6÷2 dulu dari kiri, jadi 3. 3 x 3 = 9. kalkulator ngikutin aturan main, bukan nyindir lu. lu boleh sedih kok, banyak yang sedih" },
      { authorId: 17, minutesAgo: 50, content: "TAPI KURUNG DULUAN KAN?? 1+2 = 3. TERUS ANGKA 9 DARI MANA. JELASIN PELAN-PELAN" },
      { authorId: 1, minutesAgo: 44, content: "kurungnya udah dikerjain. yang sisa baru kali-bagi urut kiri. ini nasihatan gratis, sekaligus alasan gue gak pernah dianggep pinter" },
      { authorId: 6, minutesAgo: 38, content: "anak-anak saya kalau ditanya begini jawabnya 'angka pak'. gue jadi mikir, mungkin mereka yang paling damai" },
      { authorId: 18, minutesAgo: 30, content: "soal ini emang fungsinya buat ngadu. kayak sama bu guru dulu, yang penting ngerasa paling bener, angkanya sampingan" },
      { authorId: 28, minutesAgo: 20, content: "ini perang tahunan. kayak debat nanas pizza. gak ada pemenangnya dan semua orang pulang bawa dendam" },
      { authorId: 49, minutesAgo: 8, content: "gue tanya bapak gue, dia jawab 'yang penting habis ini makan'. bapak gue gak pernah kalah di topik apapun" },
    ],
  },
  {
    id: 3,
    authorId: 9,
    minutesAgo: 90,
    shares: 655,
    content:
      "jam 5 subuh dibangunin sama mbak tetangga. nanya, 'om serius mau jual?'\n\nmotornya yang tiap pagi nganter dua anak sekolah.\n\nyang di depan pintu bukan dia. bapaknya. nunduk, ngerapiin surat-surat motor, gak nyangkut ke topik.\n\nanak bungsunya nanya, 'motor mau ke mana'. dijawab, 'motor ngemper dulu'. anaknya percaya. anak memang percaya sama bapaknya.\n\ngue gak kuat cerita lebih jauh. yang gue inget cuma mukanya: tenang. kaya orang yang udah kalah dari lama tapi belum sempet ngaku.\n\nitu mesin di HP. dia gak ngetuk pintu, dia nunggu di dalam layar. yang bisa narik bapak itu keluar ya orang di rumahnya. bukan kata 'berhenti'. kata 'bapak, sarapan'.",
    comments: [
      { authorId: 22, minutesAgo: 80, content: "semoga bapaknya dikasih jalan keluar yang bener. dan semoga anak-anaknya gak jadi cerita di rumah orang lain" },
      { authorId: 42, minutesAgo: 70, content: "yang jual motor itu bukan yang paling parah. yang paling parah yang gak punya apa-apa lagi buat dijual. semoga nyampe sebelum situ" },
      { authorId: 31, minutesAgo: 58, content: "gue sempet jadi 'tetangga' di cerita orang lain. untung yang hilang masih HP. yang bikin berhenti bukan sadar diri, ya udah gak ada yang tersisa" },
      { authorId: 4, minutesAgo: 45, content: "ada yang bisa jelasin, kenapa yang kena selalu yang gajinya pas-pasan?" },
      { authorId: 42, minutesAgo: 33, content: "karena buat yang gajinya pas-pasan, 50 ribu rasanya pintu. buat yang gede, 50 ribu debu. mesinnya jahat ke yang paling gak mampu rugi" },
      { authorId: 46, minutesAgo: 20, content: "ibu gue dulu bilang, 'yang digadaikan barang, yang dipertaruhkan marwah'. gue gak ngerti waktu kecil. sekarang iya" },
      { authorId: 12, minutesAgo: 9, content: "share ya. lebih banyak orang yang harusnya kebaca 'motor ngemper dulu' daripada nanggepin" },
    ],
  },
  {
    id: 4,
    authorId: 21,
    minutesAgo: 120,
    shares: 431,
    content:
      "sepupu gue ditawarin 'bunga 20% per bulan, cair 5 menit'. dia nanya gue duluan sebelum teken. pertama kalinya. biasanya dia nanya abis.\n\nkita itung bareng pake kalkulator di meja dapur:\n\n1 juta, bulan pertama jadi 1,2.\nbulan kedua, yang diitung bukan 1 juta lagi. yang diitung 1,2. jadi 1,44.\nsetahun: sekitar 8,9 juta.\n\ndia liat angka terakhir lama banget. terus bilang, 'berarti yang dibungakan bukan duitku. yang dibungakan aku'.\n\ngue gak bisa ngeles.\n\nabis itu dia masak air. 'ngopi dulu bang', katanya. berarti gak jadi.",
    comments: [
      { authorId: 3, minutesAgo: 110, content: "gue pernah bantu itung kasus temen: 3 juta, setahun total bayar 11 juta, katanya masih nyicil. itu bukan nyicil. itu kejar-kejaran" },
      { authorId: 19, minutesAgo: 95, content: "kok bisa dari 1 juta jadi 8,9?? tolong itung ulang. gue gak percaya" },
      { authorId: 24, minutesAgo: 80, content: "1,2 dipangkat 12, kira-kira 8,9. kalkulator doang, tombolnya ada. bukan opini" },
      { authorId: 26, minutesAgo: 60, content: "sepupu gue gitu. keluarga nanggung 2 tahun buat nutup tagihan yang 4 juta udah jadi 13. yang dipinjemin bukan duit doang. waktu keluarga ikut" },
      { authorId: 37, minutesAgo: 40, content: "yang bikin heran: cairnya 5 menit. bayarnya bertahun-tahun. kecepatan itu satu arah aja ternyata" },
    ],
  },
  {
    id: 5,
    authorId: 1,
    minutesAgo: 160,
    shares: 288,
    content:
      "kemarin dibawa pulang brosur motor sama bapak. cicilan 36 bulan, 'bunga cuma 7%'.\n\ngue itung totalnya sambil nunggu hujan reda: lebih 4 juta dari harga tunai.\n\ngue tanya, '7% dari 20 juta kan 1,4 juta. kok 4?'\n\nbapak gue bilang, 'nah, itu pertanyaan yang kemarin gue gak tanya'.\n\nternyata 7%-nya dihitung dari harga penuh tiap tahun. duit yang udah dibayarin tetep ikut diitung.\n\nsekarang brosurnya disimpen di meja. buat apa? 'buat ngajarin om lu'. lumayan, satu brosur dua pelajaran.",
    comments: [
      { authorId: 5, minutesAgo: 150, content: "itu namanya bunga flat. sisa pokok yang udah dibayar tetep diitung kayak belum. mereka gak salah itung. memang gitu cara itungnya" },
      { authorId: 31, minutesAgo: 130, content: "satu pertanyaan aja yang wajib sebelum teken apapun: 'total keluar berapa?' bukan 'bunga berapa'." },
      { authorId: 28, minutesAgo: 100, content: "gue tadi ngecheck brosur yang kemarin nyangkut di pintu. eh iya. gak jadi. makasih ya, hemat 4 juta" },
      { authorId: 44, minutesAgo: 70, content: "gue beli motor bekas cash. bukan karena pinter itung. karena males nyicil. hasil sama aja" },
      { authorId: 21, minutesAgo: 30, content: "iya. gak beli = rugi nol. itu itung-an paling aman yang pernah ada" },
    ],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 200,
    shares: 156,
    content:
      "baru paham kenapa orang pada nungguin tulisan diskon 50% + 50%.\n\n50% + 50% = 100% = GRATIS. jadi tiap liat tulisan itu tinggal ambil, gak usah bayar.\n\nterus kemarin gue coba. kok diminta bayar 25 ribu.\n\npetugasnya senyum doang. gue juga senyum. dua-duanya bingung.\n\nyang gue tanya: kalo gak ditambahin, kenapa ditulisnya pakai tanda plus??",
    comments: [
      { authorId: 5, minutesAgo: 190, content: "50% kedua dihitung dari harga yang udah turun. 100 jadi 50, 50 jadi 25. tulisannya nempel di kaca bukan di buku matematika. beda dunia" },
      { authorId: 17, minutesAgo: 170, content: "TERUS KENAPA DITULIS PLUS KALO GAK DITAMBAH?? MATEMATIKA BIKIN ATURAN SENDIRI TERUS YANG KENA KITA" },
      { authorId: 9, minutesAgo: 150, content: "gue pernah kena juga. kira gratis, keluar 25 ribu. balik rumah gue gak cerita. malu sama ibu" },
      { authorId: 6, minutesAgo: 120, content: "jadi 25 ribu. yaudah. harga sekolah hari ini murah banget. besok gue mau coba tulisan 'beli 2 gratis 1' biar paham dunia" },
      { authorId: 11, minutesAgo: 90, content: "bu, yang 'beli 2 gratis 1' jangan dicoba. nanti tambah pelajaran lagi" },
      { authorId: 25, minutesAgo: 15, content: "btw kalo 50% + 50% + 50% gimana tuh. makin gratis kan. makin bagus" },
    ],
  },
  {
    id: 7,
    authorId: 4,
    minutesAgo: 240,
    shares: 97,
    content:
      "tanggal 15.\n\nsaldo: 37 ribu.\n\nmakan: nasi + telur, dua kali sehari. lumayan, telur lagi murah.\n\nbesok mulai jalan kaki. buat hemat, sekalian liat langit.\n\ntanggal 1 nanti kita ketemu lagi, duit.",
    comments: [
      { authorId: 16, minutesAgo: 220, content: "37 ribu masih lumayan kalau masak sendiri bang. semangat, tanggal 1 gak jauh" },
      { authorId: 12, minutesAgo: 190, content: "saldo gue 15 ribu dan gue masih bisa ketawa. jangan ditanya caranya. gak bisa dijelasin" },
      { authorId: 34, minutesAgo: 140, content: "semoga bulan depan lebih lapang. rezeki itu muter, dia gak ngecheck kalender" },
    ],
  },
  {
    id: 8,
    authorId: 11,
    minutesAgo: 300,
    shares: 205,
    content:
      "rapat guru pagi ini: 1 jam. hadir: 14 orang.\n\nyang dibahas paling lama: siapa yang lupa balikin spidol minggu lalu.\n\nkesimpulan rapat, lengkap, 6 kata: 'kita cek bareng-bareng besok ya'.\n\nspidolnya akhirnya ketemu di tangan saya sendiri. saya yang bawa dari ruang guru. saya gak sadar dari awal.\n\n14 jam waktu manusia, buat spidol yang di tangan saya.\n\nmakan siangnya enak sih. makasih.",
    comments: [
      { authorId: 30, minutesAgo: 280, content: "spidol yang dicari rame-rame ternyata di tangan pencarinya sendiri. ini bukan sekadar rapat. ini potret" },
      { authorId: 45, minutesAgo: 240, content: "14 orang x 1 jam = 14 jam. buat satu spidol. kalau diitung per kata kesimpulan: sekitar 2,3 jam per kata. salah satu rapat termahal sepanjang masa" },
      { authorId: 33, minutesAgo: 180, content: "soal makan siang ini penting. rapat tanpa makanan itu undangan, bukan rapat" },
    ],
  },
  {
    id: 9,
    authorId: 17,
    minutesAgo: 360,
    shares: 133,
    content:
      "KENAPA SIH ANGKA 13 DI LIFT DIBUANG?? TAKUT SAMA ANGKA DOANG.\n\n13 GAK PERNAH BIKIN LIFT JATUH. YANG BIKIN JATUH ITU KELEBIHAN MUATAN. ANGKA 13 GAK NYUMPUT DI LANTAI 13 KAYA PENJAHAT.\n\nDIA CUMA DUDUK DI ANTARA 12 SAMA 14, DIEM, GAK GANGGU SIAPA-SIAPA. YANG GANGGU CUMA PIKIRAN ORANG.",
    comments: [],
  },
  {
    id: 10,
    authorId: 5,
    minutesAgo: 420,
    shares: 720,
    content:
      "keponakan gue kemarin nanya: 'om, jackpot itu apa? kenapa orang bayar buat angka?'\n\ngue gak langsung jawab. gue ambil 10 ribu uang receh, taro di meja.\n\n'kalau uang ini masuk tiap hari, sebulan jadi berapa?'\n\ndia itung lama. 300 ribu.\n\n'setahun?'\n\n3,6 juta. dia kaget duluan, belum gue kasih poin apapun.\n\n'3,6 juta bisa kebeli apa?'\n\ndia jawab sendiri: sepatu sekolah, seragam dua set, buku, jajan enam bulan. gue gak kasih tau satu pun.\n\nterus dia nanya, 'terus yang bayar angka itu rugi dong?'\n\n'kebanyakan iya.'\n\n'kenapa masih bayar?'\n\nnah. itu gak gue jawab. gue takut salah jawab.",
    comments: [
      { authorId: 2, minutesAgo: 400, content: "TAPI KAN ADA YANG MENANG JACKPOT. KENAPA BUKAN GUE. JAWAB OM" },
      { authorId: 15, minutesAgo: 370, content: "Anak-anak memang jujur. Yang dewasa yang suka pura-pura tidak melihat hitungan. Salut untuk omnya." },
      { authorId: 9, minutesAgo: 340, content: "keponakan lu lebih berguna dari seminar dua hari yang gue ikutin tahun lalu. serius" },
      { authorId: 35, minutesAgo: 300, content: "tapi om, kalo itung doang gak seru. ada serunya dikit kan. namanya harapan" },
      { authorId: 27, minutesAgo: 260, content: "tiap undian itu gak inget undian sebelumnya. yang nambah tiap hari cuma uang yang keluar. peluangnya tetep di tempat yang sama" },
      { authorId: 44, minutesAgo: 210, content: "gue stop dari kemarin. baru kerasa ngeri tadi pas baca ini pelan-pelan" },
      { authorId: 46, minutesAgo: 150, content: "tulisan ini tolong kebaca sama semua bapak di rumah. serius" },
      { authorId: 8, minutesAgo: 90, content: "'terus yang bayar angka itu rugi dong?' — anak sekarang tajam. gue umur 30 baru mikir itu" },
      { authorId: 31, minutesAgo: 40, content: "gue simpen. buat dibaca ulang pas ada yang nawarin 'coba dikit'" },
    ],
  },
  {
    id: 11,
    authorId: 16,
    minutesAgo: 500,
    shares: 88,
    content:
      "stok mi di rak: 4 bungkus. hari ini tanggal 20.\n\nrencananya mi hari genap, nasi jagung hari ganjil, biar ampe tanggal 1.\n\nadik gue pulang sore tadi, mukanya lelah banget. nanya 'kak, ada makanan gak'.\n\nya udah. dua bungkus langsung. sekalian telur.\n\nrencana? hari ini kelar. besok gue pikir lagi. adik gue udah gak mikir apa-apa, dia sibuk kenyang.",
    comments: [
      { authorId: 34, minutesAgo: 470, content: "iya. adik yang kenyang itu lebih penting dari rencana yang cuma di kepala. bener banget" },
      { authorId: 49, minutesAgo: 420, content: "gue ikut skema lu tapi versi kopi. satu sachet diperpanjang jadi tiga hari. senin rabu jumat. gue udah jago itung ini" },
    ],
  },
  {
    id: 12,
    authorId: 2,
    minutesAgo: 560,
    shares: 121,
    content:
      "GUE BARU TAU: 1 GB ITU 1000 MB. TAPI ADA YG BILANG 1024. MANA YANG BENAR??\n\nGUE SAMPE GANTI KARTU KARENA MIKIRIN INI. KARTUNYA SUDAH GANTI, PIKIRANNYA BELUM",
    comments: [
      { authorId: 27, minutesAgo: 540, content: "dua-duanya benar, beda bahasa. pabrik itung 1000, mesin itung 1024. makanya angka di kotak selalu lebih gede dari yang tampil di HP. bukan bohong, cuma dua kamus" },
      { authorId: 20, minutesAgo: 480, content: "yang bener 1024. soalnya 1024 itu angka komputer. gue baca di internet, internet gak mungkin bohong" },
    ],
  },
  {
    id: 13,
    authorId: 22,
    minutesAgo: 640,
    shares: 41,
    content:
      "buat yang sore ini berat: tarik napas 4 detik, tahan 4, buang pelan 6.\n\nmasalahnya gak ilang. tapi otak lu sempet duduk dulu.\n\nkadang duduk doang udah cukup buat nyampe magrib.",
    comments: [],
  },
  {
    id: 14,
    authorId: 8,
    minutesAgo: 720,
    shares: 310,
    content:
      "kucing rumah: bangun, makan jam 7 pagi tepat, tidur, makan jam 7 malem tepat.\n\ngue: alarm 5 kali, sarapan gak jelas, telat 12 menit terus nyalahin jalan.\n\nyang paling rapi di rumah ini si kucing. dan dia gak bayar sewa. gue yang bayar. kebalik dunia.",
    comments: [
      { authorId: 46, minutesAgo: 690, content: "di rumah gue sama. dia yang ngingetin kalau jam makannya telat. kita yang bayar makanannya kok ya" },
      { authorId: 14, minutesAgo: 640, content: "kucing itu kontinyu, kita diskrit. dia gak kenal kata 'lima menit lagi'" },
      { authorId: 33, minutesAgo: 560, content: "jam 7 tepat, antrian di depan mangkuk. disiplinnya bikin merenung" },
    ],
  },
  {
    id: 15,
    authorId: 25,
    minutesAgo: 800,
    shares: 66,
    content: "btw akar kuadrat itu kan akar. kenapa gak pernah ditanem",
    comments: [
      { authorId: 11, minutesAgo: 770, content: "coba tanem. nanti tumbuh soal cerita. sama-sama bikin pusing" },
    ],
  },
  {
    id: 16,
    authorId: 28,
    minutesAgo: 900,
    shares: 74,
    content:
      "bulan pertama kerja. tadi diminta 'kasih pendapat aja, santai'.\n\ngue kasih pendapat. sekarang gue mikir sampe sore.\n\nbener gak ya pendapat gue itu. atau gue baru aja pamer kebodohan dalam format siap presentasi.\n\nbesok ketemu yang nanya lagi. gue harus siapin muka gimana.",
    comments: [
      { authorId: 37, minutesAgo: 870, content: "yang nanya 'pendapat lu gimana' biasanya udah punya jawaban. yang bahaya pas mereka diam. lu aman kok" },
      { authorId: 12, minutesAgo: 800, content: "gue juga gitu tahun pertama. sekarang gue yang nanya 'pendapat lu gimana' terus mikir 'kok dia gugup ya'. tenang, lu lolos" },
    ],
  },
  {
    id: 17,
    authorId: 18,
    minutesAgo: 1000,
    shares: 195,
    content:
      "setaun itu 8.760 jam.\n\ngue iseng itung berapa yang kepake buat nunggu: antrian, loading, 'sedang diproses', dengerin orang lain selesai ngomong.\n\nitungannya gue berenti di tengah. nanti malem lagi. abis shift dulu.",
    comments: [],
  },
  {
    id: 18,
    authorId: 46,
    minutesAgo: 1100,
    shares: 58,
    content:
      "bawang naik lagi. minggu lalu 5 ribu, kemarin 8, hari ini 10.\n\nmulai sekarang bawang gue secuil doang, sisanya doa.\n\nyang penting anak-anak tetep habisin masakan. mereka gak protes bawangnya dikit. mereka protes kalau gak ada sayur sama sekali.\n\nya sudah. bawang secuil, sayang secukupnya.",
    comments: [],
  },
  {
    id: 19,
    authorId: 17,
    minutesAgo: 1250,
    shares: 149,
    content:
      "GAME ADIK GUE (TK) ADA TOMBOL 'JACKPOT'. DIA NANYA GUE JACKPOT ITU APA.\n\nGUE YANG BINGUNG MAU JAWAB APA.\n\nGIMANA JELASIN KE ANAK 5 TAHUN BAHWA ADA LAYAR YANG DESAINNYA BIKIN ORANG KELUAR DUIT, PAKE SUARA SENENG-SENENG.\n\nGUE AKHIRNYA JAWAB 'ITU TOMBOL BAPAK-BAPAK'. DIA NYAHUT 'BERARTI BUKAN BUAT KAKAK'. BENER JUGA.",
    comments: [
      { authorId: 36, minutesAgo: 1220, content: "yang ngeri: iklannya sebenernya bukan buat anaknya. buat bapaknya yang ngelirik dari belakang. jalannya ke satu arah semua" },
      { authorId: 31, minutesAgo: 1180, content: "gue uninstall dua game gara-gara beginian. iklannya nembus ke orang dewasa aja gampang, apalagi anak" },
      { authorId: 47, minutesAgo: 1100, content: "jackpot itu apa sih sebenernya? gue sering dengar tapi gak pernah nyampe rumah" },
    ],
  },
  {
    id: 20,
    authorId: 24,
    minutesAgo: 1400,
    shares: 522,
    content:
      "anak gue semalem nanya: 'bapak, kalau ada yang jago main mesin, kenapa gak diajarin biar menang terus?'\n\ngue mikir lama. dia nunggu. anak nunggu itu lama.\n\nakhirnya gue jawab: 'karena gak ada yang jago. yang ada cuma yang jago nawarin.'\n\n'di video ada yang menang terus, bapak.'\n\n'mesin itu ngundi tiap putaran, dan ngundinya gak inget putaran sebelumnya. gak ada pola, gak ada jam bagus. yang bilang bocor, bisanya nyuruh kita nonton duluan.'\n\n'di video juga ada yang jual buku rahasianya, bapak.'\n\n'nah kalau rahasianya dijual, berarti...?'\n\ndia mikir. terus dia bilang, 'berarti rahasianya adalah jualan bukunya'.\n\nSD. umur 9. gue cuma bisa angguk. gue 40 tahun baru nyampe situ tadi malem.",
    comments: [
      { authorId: 3, minutesAgo: 1350, content: "'rahasianya adalah jualan bukunya' — anak lu 9 tahun? kasih dia kue. itu logika yang bikin banyak orang dewasa mikir 10 tahun gak nyampe" },
      { authorId: 19, minutesAgo: 1300, content: "gue pernah percaya 'jam hoki'. tiga bulan. hasilnya: jam tetep jalan, dompet yang berhenti" },
      { authorId: 42, minutesAgo: 1200, content: "yang jual 'metode' itu ambil untung dari duit lu. jadi mesin yang makan duit lu ada dua. satu di layar, satu di grup" },
      { authorId: 48, minutesAgo: 1100, content: "tiap putaran independen. tiga kata paling penting. semua yang bilang 'udah deket' belum kenal kata ini" },
      { authorId: 31, minutesAgo: 950, content: "yang bilang punya rahasia terus rahasianya dijual itu sama kaya orang jual kotak, isinya 'isi kotak ini'" },
      { authorId: 12, minutesAgo: 700, content: "gue share ya. ada temen yang lagi percaya 'jam bagus'. semoga kebaca" },
      { authorId: 46, minutesAgo: 400, content: "anak itu tajam ya. kadang kita yang harusnya manyun dengerin mereka" },
      { authorId: 27, minutesAgo: 100, content: "kalo anak lu besok nanya 'terus kenapa masih ada yang main, bapak?' — itu level berikutnya. siapin jawaban, atau jawab jujur: bapak juga gak tau" },
    ],
  },
  {
    id: 21,
    authorId: 19,
    minutesAgo: 1600,
    shares: 84,
    content:
      "lembur 4 hari. catatan lembur: 0.\n\nyang ditanya pagi ini: 'kenapa tadi telat 6 menit?'\n\n6 menit diitung sampai satuan. lembur 4 hari gak nyampe satuan.\n\nitungan kantor lucu banget kadang. ya udah. lanjut kerja.",
    comments: [],
  },
  {
    id: 22,
    authorId: 35,
    minutesAgo: 1800,
    shares: 117,
    content:
      "bukannya persen itu kaya garam? dikit doang, gak ngaruh.\n\nterus kenapa tiap bulan orang ribut pas liat potongan di gaji. toh cuma beberapa persen",
    comments: [
      { authorId: 5, minutesAgo: 1750, content: "garam 2% dari sup masih sup. gaji 2% tiap bulan selama setahun itu masak setahun tanpa garam. konteks yang nentuin, bukan angkanya doang" },
      { authorId: 40, minutesAgo: 1650, content: "persen itu garam ya. tapi garam yang ditumpuk di tempat yang sama tiap bulan jadi gunung. coba tumpukin aja" },
      { authorId: 45, minutesAgo: 1500, content: "dan semua potongan pakai persen. semua kenaikan juga pakai persen. bedanya satu turun satu naik. persennya tetep ceria" },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 2000,
    shares: 92,
    content:
      "jam 3 pagi. lampu jalan depan rumah mati satu.\n\nkucing tetangga duduk nunggu di bawahnya. dia nunggu lampu nyala lagi. dia gak tau lampu gak nungguin dia.\n\ngue duduk sebentar. nemenin. dua-duanya gak bisa tidur, kan.",
    comments: [],
  },
  {
    id: 24,
    authorId: 37,
    minutesAgo: 2300,
    shares: 63,
    content:
      "kumpul-kumpul di teras sebelah sore tadi. yang gak ikut dateng kirim kabar plus buah dari kebun.\n\nyang dateng bawa cerita, yang bawa cerita kadang bawa ketawa, yang bawa ketawa pulangnya kena tawuran cabai sama anak tetangga. lucu semua.\n\ndulu pas kerja jauh, gue pulang cuma bawa tugas.\n\nsekarang pulang bawa cabai. lebih enak.",
    comments: [
      { authorId: 1, minutesAgo: 2250, content: "kumpulan kayak gini itu asuransi versi manusia. keluhan nol, cabai banyak" },
      { authorId: 31, minutesAgo: 2150, content: "rapat kantor itu kumpul-kumpul yang isinya gak sesuai undangan. beda jauh sama teras" },
      { authorId: 4, minutesAgo: 2000, content: "cabai dari kebun orang lain emang beda pedesnya ya. ya itu aja komennya" },
    ],
  },
  {
    id: 25,
    authorId: 10,
    minutesAgo: 2600,
    shares: 71,
    content:
      "2+2=4 itu udah sepakat semua orang ya. oke.\n\nterus kenapa gak ada yang iseng bikin 2+2=5. biar dunia lebih seru. semua orang serius banget. gak ada satu pun yang coba.\n\ndasar gak mau eksperimen",
    comments: [],
  },
]
