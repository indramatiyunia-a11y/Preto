import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25.
//
// PANDUAN SUARA (biar tiap orang ngetiknya beda, kaya orang beneran):
//  3: ahli, "gue", cerita panjang, analogi meja makan   5: ahli, "saya"... eh "gue", pendek presisi
//  9: awam, cerita keluarga, anti-taruhan               1: awam, "gue", singkat santai
//  2,6,13,17,20,25: bego — typo/caps/salah yakin        42: ahli anti-mesin, tenang ngeri
// ATURAN DUNIA: gak ada nama toko/merek/usaha orang. Semua acuan universal:
// rumah, keluarga, sekolah, jalan, dapur, langit. Bacaan aman anak sampai kakek.
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 3,
    minutesAgo: 35,
    shares: 486,
    content:
      "perdebatan meja makan semalem: 0,999... sama 1 itu sama atau beda. om gue nyangkut di kata 'hampir'. katanya 'hampir itu berarti belum'. terus dia capek duluan, beresin piring, pulang ke kamar. padahal dia yang buka topik.\n\ncoba jawab ini sama gue: sebutin SATU angka yang letaknya nempel di antara 0,999... sama 1. satu aja.\n\ngue gak perlu lu setuju. lu cuma perlu gagal nyari angkanya. itu doang.",
    comments: [
      { authorId: 2, minutesAgo: 30, content: "GK ADA ANGKANYA KAN?? BERARTI JELAS BEDA. GAK ADA JARAK MALAH BEDA?? LOGIKA GUE MENANG, LOGIKA LU BONGKAR" },
      { authorId: 5, minutesAgo: 27, content: "1/3 itu 0,333... . dikali 3: 0,999... . dan 1/3 x 3 ya 1. isinya sama, cuma dua nama. selesai, makan dulu" },
      { authorId: 17, minutesAgo: 24, content: "BEDA LAH. TULISANNYA AJA BEDA. 1 ITU 1, YANG TITIK2 ITU LAGI NGANTUK BELUM SELESAI NGETIK" },
      { authorId: 9, minutesAgo: 21, content: "gue pernah berantem soal ini sama kakak gue sampe ibu nyamber dua-duanya pake sendok. damai selamanya sejak itu" },
      { authorId: 25, minutesAgo: 18, content: "btw kalo 0,999 = 1, berarti 1,999 = 2 DONG. IYA KAN? JAWAB DULU BARU MANDI" },
      { authorId: 11, minutesAgo: 15, content: "iya bener. semua angka yang ujungnya ...999 punya dua nama. om lu gak salah mikir, dia cuma belum nemu pintu belakangnya" },
      { authorId: 31, minutesAgo: 11, content: "gue gak ngerti satu pun dari komen di atas tapi baca semua. olahraga otak gratis kok" },
      { authorId: 46, minutesAgo: 5, content: "anak gue ampe nangis pas dijelasin ginian. ternyata penderitaan ini turun-temurun ya" },
      { authorId: 24, minutesAgo: 2, content: "kaya ibu sama mama. panggilannya beda, orangnya satu" },
    ],
  },
  {
    id: 2,
    authorId: 13,
    minutesAgo: 60,
    shares: 812,
    content:
      "SERIUS DEH YA. 6÷2(1+2) ITU 1. TEMEN GUE BILANG 9, GUE BLOCK. LAYAK DIBLOCK.\n\nGUE CEK PAKE KALKULATOR, KALKULATORNYA BILANG 9. JADI KALKULATOR YANG SALAH??? KALKULATOR YANG BEGO??? GUE DIKETAWAIN SAMA ALAT SENDIRI",
    comments: [
      { authorId: 5, minutesAgo: 55, content: "9. kali dan bagi itu sebaya, kerjain dari kiri: 6÷2 = 3, lanjut 3 x 3 = 9. kalkulatornya gak bego, dia nurut aturan main" },
      { authorId: 17, minutesAgo: 50, content: "TAPI KATA BU GURU YANG DI DALAM KURUNG DULUAN" },
      { authorId: 1, minutesAgo: 44, content: "kurungnya udah dikerjain bang. 1+2 = 3. sisanya 6÷2 x 3. kurungnya udah pulang kerja" },
      { authorId: 6, minutesAgo: 38, content: "gue guru TK. jawabannya 'angka'. selamat pagi semuanya" },
      { authorId: 18, minutesAgo: 30, content: "soal ini emang doang ngetes siapa yang bisa dikalahin rasa penasarannya. yang jawab 1 gak bego, cuma sekolahnya beda era. yang makian itu yang beda" },
      { authorId: 28, minutesAgo: 20, content: "ini perang tahunan. kayak debat nanas pizza. gak ada pemenangnya dan semua orang pulang bawa dendam" },
      { authorId: 49, minutesAgo: 8, content: "gue tanya bapak gue, jawabannya 'yang penting makan dulu'. bapak gue selalu menang" },
    ],
  },
  {
    id: 3,
    authorId: 9,
    minutesAgo: 90,
    shares: 655,
    content:
      "tetangga gue jual motornya semalem. motor yang tiap pagi nganter dua anak sekolah.\n\nbuat bayar utang main mesin di HP.\n\nanaknya nangis di depan rumah. bapaknya di dalam rumah pegang HP. gue gak mengarang, gue ngeliat langsung tadi pagi. dan yang paling merinding: bapaknya keliatan tenang. kaya yang udah kalah dari dulu tapi belum berani ngaku.\n\nkalo ada yang baca ini dan lagi main: itu mesin. dia didesain buat menangin dia, bukan lu. berhenti sekarang, pas yang hilang masih motor. jangan nunggu yang hilang jadi anak lu sendiri.",
    comments: [
      { authorId: 22, minutesAgo: 80, content: "sebelah rumah mertua gue sama. gajian tanggal 1, tanggal 3 udah gadai anting. yang ditabung buat sekolah malah ke situ. ngeri ngeliatnya" },
      { authorId: 42, minutesAgo: 70, content: "faktanya begini: dari semua duit yang masuk ke mesin itu, sebagian besar tinggal di mesin. pelan-pelan, tiap hari, gak capek. yang main cuma numpang liat angkanya lari" },
      { authorId: 31, minutesAgo: 58, content: "gue pernah fase itu. yang bikin berhenti bukan sadar diri. udah gak ada yang bisa dijual. semoga tetangga lu sadar sebelum nyampe situ" },
      { authorId: 4, minutesAgo: 45, content: "ada yang bisa jelasin gak, kenapa yang kena selalu yang gajinya kecil? yang besar kan juga ada yang main" },
      { authorId: 42, minutesAgo: 33, content: "karena buat yang gaji kecil, 50 ribu rasanya kayak pintu harapan. buat yang gaji gede, 50 ribu debu. mesinnya jahat ke yang paling gak mampu rugi" },
      { authorId: 16, minutesAgo: 20, content: "tulisan ini harusnya kebaca semua orang yang baru aja gajian. serius" },
      { authorId: 12, minutesAgo: 9, content: "semoga motornya balik. dan semoga anaknya lupa semalem itu, pelan-pelan" },
    ],
  },
  {
    id: 4,
    authorId: 21,
    minutesAgo: 120,
    shares: 431,
    content:
      "jelasin dikit biar ada yang mikir dua kali sebelum teken setuju: bunga 20% per bulan itu gak berhenti di 20%. dia berbunga dari bunga.\n\n1 juta, bulan pertama jadi 1,2. bulan kedua dihitung dari 1,2. setahun: sekitar 8,9 juta. dari SATU juta.\n\nyang gak pernah disebut iklannya: angka ini jalan tiap hari. gak ngurusin urusan siapa-siapa, gak ngerti kata 'nanti deh'. sabar banget. kita gak sebisa dia.",
    comments: [
      { authorId: 3, minutesAgo: 110, content: "gue pernah ngulik kasus temen. pokoknya 3 juta, setahun dia udah bayar total 11 juta dan katanya masih nyicil. itu bukan nyicil, itu kejar-kejaran" },
      { authorId: 19, minutesAgo: 95, content: "kok bisa 8,9 juta dari 1 juta?? gue gak percaya. tolong diitung ulang" },
      { authorId: 14, minutesAgo: 80, content: "1,2 dipangkat 12 ya 8,9 lebih dikit. kalkulator doang, tombolnya ada. bukan opini, ini pangkat" },
      { authorId: 26, minutesAgo: 60, content: "sepupu gue gitu. keluarga nanggung 2 tahun buat nutup tagihan yang 4 juta udah jadi 13. yang dipinjemin ternyata bukan duit, ya" },
      { authorId: 37, minutesAgo: 40, content: "yang bikin gila: dapetnya cepet banget. lima menit cair. pas mau bayar, lima bulan" },
    ],
  },
  {
    id: 5,
    authorId: 1,
    minutesAgo: 160,
    shares: 288,
    content:
      "dibawa pulang brosur motor, cicilan 36 bulan, katanya 'bunga cuma 7%'.\n\ngue itung totalnya: lebih 4 juta dari harga tunai. 7% dari 20 juta kan 1,4 juta. kok 4?\n\nternyata itu bunga flat: 7% dihitung dari 20 juta TIAP TAHUN. duit yang udah gue bayarin juga tetep ikut diitung.\n\ngak jadi beli. gue jalan kaki aja. lumayan, sehat juga.",
    comments: [
      { authorId: 5, minutesAgo: 150, content: "flat itu dasarnya: sisa pokok yang udah lu bayar diitung kayak belum dibayar. mereka gak salah itung. mereka emang gitu cara itungnya" },
      { authorId: 31, minutesAgo: 130, content: "satu pertanyaan doang yang harus lu tanya sebelum teken apapun: 'total keluar berapa?' bukan 'bunga berapa'. total keluar, titik" },
      { authorId: 28, minutesAgo: 100, content: "gue tadi check brosur yang kemarin gue terima. eh iya. gak jadi. makasih ya" },
      { authorId: 44, minutesAgo: 70, content: "berarti gak jadi beli gak rugi kan? IYA KAN??" },
      { authorId: 21, minutesAgo: 30, content: "iya. gak beli = rugi nol. matematika paling aman yang pernah ada" },
    ],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 200,
    shares: 156,
    content:
      "baru paham kenapa orang pada pinter itung diskon.\n\n50% + 50% = 100% = GRATIS. jadi tiap ada tulisan 'diskon 50% + 50%' tinggal ambil. gratis.\n\nterus kenapa gak ada yang pake cara ini sih?? orang-orang susah banget ngeliat pintu",
    comments: [
      { authorId: 5, minutesAgo: 190, content: "50% kedua dihitung dari harga yang udah turun 50%. 100 jadi 50, 50 jadi 25. totalnya 75, bukan 100. makanya tulisan itu suka nempel di kaca. keliatan gede" },
      { authorId: 17, minutesAgo: 170, content: "TERUS KENAPA ADA TANDA PLUSNYA KALO GAK DITAMBAH?? MATEMATIKA BIKIN ATURAN SENDIRI TERUS YANG SALAH KITA" },
      { authorId: 9, minutesAgo: 150, content: "gue dulu juga kena. kira gratis, terus diminta bayar 25. kasirnya senyum. gue yang ngelap etalase" },
      { authorId: 6, minutesAgo: 120, content: "jadi 25. yaudah yang penting gue belajar sesuatu hari ini. murah banget harga sekolahnya" },
      { authorId: 11, minutesAgo: 90, content: "ini persis kenapa promosi begitu nempel di kaca, bukan nempel di buku matematika" },
      { authorId: 25, minutesAgo: 15, content: "btw kalo 50% + 50% + 50% gimana? makin murah kan. makasih, kapan-kapan gue bahas" },
    ],
  },
  {
    id: 7,
    authorId: 4,
    minutesAgo: 240,
    shares: 97,
    content:
      "tanggal 15.\n\nsaldo: 37 ribu.\n\nrencana bulan depan: banyak. semangat: penuh. dompet: sabar.\n\nkita jalan lagi tanggal 1.",
    comments: [
      { authorId: 16, minutesAgo: 220, content: "37 ribu masih bisa makan enak tuh kalau masak sendiri. sabar bang, tanggal 1 gak jauh" },
      { authorId: 12, minutesAgo: 190, content: "saldo gue 15 ribu dan gue masih bisa ketawa. jangan tanya caranya, gak bisa dijelasin" },
      { authorId: 34, minutesAgo: 140, content: "semoga bulan depan lebih lapang. rezeki itu muter, dia gak ngecheck tanggal" },
    ],
  },
  {
    id: 8,
    authorId: 11,
    minutesAgo: 300,
    shares: 205,
    content:
      "rapat pagi: 1 jam. peserta: 12 orang.\n\nhasil: 12 jam hidup manusia terpakai. kesimpulan rapat, lengkap, 6 kata: 'kita follow up minggu depan ya'.\n\ngak ada kue. ini yang paling gue anggap pelanggaran.",
    comments: [
      { authorId: 30, minutesAgo: 280, content: "efisiensi rapat itu bisa dihitung: 0,1 kata per jam per orang. udah lebih lambat dari kaktus tumbuh" },
      { authorId: 49, minutesAgo: 240, content: "gue yang nyatet. satu jam ngetik 6 kata. sisanya dengerin orang tarik napas" },
      { authorId: 33, minutesAgo: 180, content: "soal kue ini yang paling bikin gue gak terima. kue harus ada" },
    ],
  },
  {
    id: 9,
    authorId: 17,
    minutesAgo: 360,
    shares: 133,
    content:
      "kenapa sih nomor 13 di lift diilangin?? manusia takut sama angka doang. angka 13 gak pernah bikin lift jatuh. yang bikin jatuh itu kelebihan muatan. gak ada hubungannya sama 13. angka 13 cuma duduk manis di antara 12 sama 14, gak ganggu siapa-siapa",
    comments: [],
  },
  {
    id: 10,
    authorId: 5,
    minutesAgo: 420,
    shares: 720,
    content:
      "soal lotre yang ditanyain ke gue sejak kemarin, jawabannya begini:\n\npeluang jackpot: 1 banding ratusan juta. buat perbandingan, peluang kena sambar petir dalam setahun: 1 banding sejuta-an. petir menang jauh.\n\ntapi yang bikin gue sedih bukan angka gede itu. yang bikin sedih: ada orang nyisihin 20 ribu tiap hari buat 'coba-coba', setahun kemudian dia itung sendiri: 7,3 juta keluar. nol masuk.\n\n20 ribu x 365 = 7,3 juta. duit itu bisa jadi uang sekolah satu anak setahun. modal dagang kecil. tabungan darurat. dipilih jadi asap.\n\nlotre itu bukan pintu. dia saringan. yang lolos satu orang. yang sisa jadi biaya operasional impian orang lain.",
    comments: [
      { authorId: 2, minutesAgo: 400, content: "TAPI 1 BANDING RATUSAN JUTA BERARTI ADA YANG MENANG KAN. KENAPA BUKAN GUE. JAWAB PAK" },
      { authorId: 15, minutesAgo: 370, content: "gue dulu iseng sebulan. pas itung total keluar, gue duduk lama banget. 600 ribu. untuk apa ya 600 ribu itu" },
      { authorId: 9, minutesAgo: 340, content: "angka 7,3 juta itu ngena. uang sekolah satu setahun di tempat gue. dibakar buat 'coba'" },
      { authorId: 35, minutesAgo: 300, content: "bukannya kalo main terus makin deket menangnya? kayak angkat botol, makin sering makin kuat" },
      { authorId: 27, minutesAgo: 260, content: "bukan. tiap undian gak inget undian sebelumnya. yang nambah cuma uang yang keluar. peluangnya tetep di situ, mana-mana" },
      { authorId: 44, minutesAgo: 210, content: "yaudah gue stop. beneran. barunya kerasa ngeri pas dibaca pelan-pelan" },
      { authorId: 46, minutesAgo: 150, content: "tulisan ini tolong dibaca sampe habis. jangan berhenti di paragraf pertama" },
      { authorId: 8, minutesAgo: 90, content: "'bukan pintu, dia saringan' — kalimat ini harusnya ditempel di dekat kasir mana-mana" },
      { authorId: 31, minutesAgo: 40, content: "gue simpen. buat dibaca ulang tiap ada yang nawarin 'coba dikit'" },
    ],
  },
  {
    id: 11,
    authorId: 16,
    minutesAgo: 500,
    shares: 88,
    content:
      "stok mi di rak tinggal 4 bungkus, tanggal 20.\n\nrencana awal gue: mi hari genap, nasi hari ganjil, biar sampe tanggal 1.\n\nterus adik gue pulang sore, lapar. ya udah gue masakin dua bungkus. rencana kelar hari itu juga.\n\nbiarin. adik kenyang lebih penting daripada rencana yang cuma nulis di kepala.",
    comments: [
      { authorId: 34, minutesAgo: 470, content: "yang begini gak pernah jadi rencana yang bener, tapi selalu jadi pilihan yang bener" },
      { authorId: 49, minutesAgo: 420, content: "gue ikut skema lu tapi versi kopi: satu sachet diperpanjang jadi tiga hari" },
    ],
  },
  {
    id: 12,
    authorId: 2,
    minutesAgo: 560,
    shares: 121,
    content:
      "GUE BARU TAU: 1 GB ITU 1000 MB. TAPI ADA YG BILANG 1024. JADI MANA??\n\nGUE SAMPE LAMA GANTI KARTU KARENA MASIH MIKIRIN INI. KARTUNYA UDAH GANTI, PIKIRANNYA BELUM",
    comments: [
      { authorId: 27, minutesAgo: 540, content: "dua-duanya bener, beda konteks. pabrik: 1000. sistem dalam mesin: 1024. makanya angka di kotak selalu lebih gede dari yang tampil di HP. bukan bohong, cuma dua bahasa" },
      { authorId: 20, minutesAgo: 480, content: "yang bener 1024. soalnya 1024 itu angka komputer. gue baca di internet, internet gak mungkin bohong" },
    ],
  },
  {
    id: 13,
    authorId: 22,
    minutesAgo: 640,
    shares: 41,
    content:
      "buat yang hari ini berat: tarik napas 4 detik, tahan 4, buang pelan 6.\n\nmasalahnya gak ilang. tapi otak lu sempet duduk dulu. kadang itu udah cukup buat nyampe sore.",
    comments: [],
  },
  {
    id: 14,
    authorId: 8,
    minutesAgo: 720,
    shares: 310,
    content:
      "kucing gue: bangun, makan jam 7 tepat, tidur, makan jam 7 malem tepat.\n\ngue: alarm 5 kali, snooze 4 kali, sarapan gak jelas, telat 12 menit terus nyalahin jalanan.\n\ndan yang punya jadwal hidup paling rapi di rumah ini ya si kucing. gue cuma sewa kamar.",
    comments: [
      { authorId: 46, minutesAgo: 690, content: "di rumah gue sama. kucingnya yang ngingetin kalau jam makannya telat. kita yang bayar makanannya kok ya" },
      { authorId: 14, minutesAgo: 640, content: "kucing itu kontinyu, kita diskrit. dia gak kenal kata 'lima menit lagi'" },
      { authorId: 33, minutesAgo: 560, content: "jam 7 tepat, antrian pembuktian di depan mangkuk. disiplinnya bikin kita semua merenung" },
    ],
  },
  {
    id: 15,
    authorId: 25,
    minutesAgo: 800,
    shares: 66,
    content: "btw akar kuadrat itu kan akar. kenapa gak pernah ditanem",
    comments: [
      { authorId: 11, minutesAgo: 770, content: "coba tanem. nanti tumbuh soal cerita. dua-duanya sama bikin pusing kok" },
    ],
  },
  {
    id: 16,
    authorId: 28,
    minutesAgo: 900,
    shares: 74,
    content:
      "bulan pertama kerja. tadi diminta 'kasih pendapat aja, santai'.\n\ngue kasih pendapat. sekarang gue mikir sampe petang. bener gak ya pendapat gue itu. atau gue baru aja nampilin kebodohan dalam format siap presentasi",
    comments: [
      { authorId: 37, minutesAgo: 870, content: "yang nanya 'pendapat lu gimana' biasanya udah punya jawaban. lu aman. yang bahaya pas mereka diam" },
      { authorId: 12, minutesAgo: 800, content: "gue juga gitu tahun pertama. sekarang gue yang nanya 'pendapat lu gimana' terus mikir 'kok dia gugup ya'. percaya, lu lolos" },
    ],
  },
  {
    id: 17,
    authorId: 18,
    minutesAgo: 1000,
    shares: 195,
    content:
      "setaun itu 8.760 jam.\n\ncoba tebak berapa dari situ kepake buat nunggu: antrian, loading, 'sedang diproses', orang lain.\n\ngue gak mau jawab. gue cuma mau lu kerasa sebentar.",
    comments: [],
  },
  {
    id: 18,
    authorId: 46,
    minutesAgo: 1100,
    shares: 58,
    content:
      "bawang naik lagi. minggu lalu 5 ribu, kemarin 8, hari ini 10.\n\ngue mulai masak pake bawang secuil doang, sisanya doa.\n\nyang jualan bilang 'semua naik, bu'. ya sudah. mumpung lagi musim gini, dapur rumah ini resmi masuk mode hemat bawang. rahasia di balik rasa: sayang.",
    comments: [],
  },
  {
    id: 19,
    authorId: 17,
    minutesAgo: 1250,
    shares: 149,
    content:
      "game buat anak-anak sekarang penuh iklan mesin jackpot terus. adik gue TK, dia nanya jackpot tuh apa.\n\nGUE YANG BINGUNG MAU JAWAB APA. gimana caranya jelasin ke anak umur 5 tahun, bahwa ada layar yang didesain buat ngambil duit orang, pake muka senyum",
    comments: [
      { authorId: 36, minutesAgo: 1220, content: "yang ngeri: iklannya sebenernya bukan buat anaknya. buat bapaknya yang ngelirik dari belakang. jalannya ke satu arah semua" },
      { authorId: 31, minutesAgo: 1180, content: "gue uninstall dua game gara-gara ini. iklannya nembus ke orang dewasa aja gampang. apalagi anak" },
      { authorId: 47, minutesAgo: 1100, content: "jackpot itu apa sih sebenernya? gue sering dengar tapi gak pernah nyampe rumah" },
    ],
  },
  {
    id: 20,
    authorId: 24,
    minutesAgo: 1400,
    shares: 522,
    content:
      "sering dapet pertanyaan: 'kalau ada yang jago, kenapa gak bisa diajarin biar menang terus?'\n\nkarena gak ada yang bisa. yang ada cuma yang jago jualannya.\n\nmesin itu ngundi tiap putaran, dan ngundinya gak inget putaran sebelumnya. gak ada pola, gak ada jam bagus, gak ada 'mesin lagi baik'. video 'bocoran' yang lu tonton dibikin orang yang untungnya dari penonton, bukan dari mesin.\n\nciri paling gampang: kalau metodenya dijual, bukan dipakai. orang yang beneran bisa nangkep ikan gak jual pancing.",
    comments: [
      { authorId: 3, minutesAgo: 1350, content: "'gak ada pola' itu tiga kata paling mahal yang justru gratis. makanya gak pernah dibeli orang" },
      { authorId: 19, minutesAgo: 1300, content: "gue pernah percaya 'jam hoki'. tiga bulan. hasilnya: jam tetep jalan, dompet yang berhenti" },
      { authorId: 42, minutesAgo: 1200, content: "ditambah: yang jual 'metode' itu ambil untung dari duit lu. jadi mesin yang makan duit lu ada dua. satu di layar, satu di grup" },
      { authorId: 48, minutesAgo: 1100, content: "sistem yang gak simpen ingatan itu udah begitu dari pabriknya. yang simpen ingatan cuma dompet lu. isinya makin lama makin tipis" },
      { authorId: 31, minutesAgo: 950, content: "'rahasia kaya' yang dijual orang kaya juga gitu. kalau beneran rahasia, diapain dijual" },
      { authorId: 12, minutesAgo: 700, content: "gue share ya. ada temen yang lagi percaya 'jam bagus'. semoga kebaca" },
      { authorId: 36, minutesAgo: 400, content: "'yang bisa nangkep ikan gak jual pancing' — pinjem kalimat ini buat penutup cerita akhir pekan, ya" },
      { authorId: 27, minutesAgo: 100, content: "tiap putaran independen. kata paling penting di tulisan itu. semua yang bilang 'udah deket' belum paham kata ini" },
    ],
  },
  {
    id: 21,
    authorId: 19,
    minutesAgo: 1600,
    shares: 84,
    content:
      "lembur 4 hari. catatan lembur: 0.\n\nyang ditanya: 'kenapa tadi pagi telat 6 menit?'\n\n6 menit diitung sampai satuan. lembur 4 hari kok gak nyampe satuan ya. itung-an perusahaan lucu banget",
    comments: [],
  },
  {
    id: 22,
    authorId: 35,
    minutesAgo: 1800,
    shares: 117,
    content:
      "bukannya persen itu kayak garam? dikit doang, gak ngaruh.\n\nterus kenapa tiap bulan orang ribut pas liat potongan di gaji. toh cuma beberapa persen",
    comments: [
      { authorId: 5, minutesAgo: 1750, content: "garam 2% dari sup masih sup. gaji 2% selama 12 bulan itu setahun masak tanpa garam. konteks yang nentuin, bukan angkanya doang" },
      { authorId: 40, minutesAgo: 1650, content: "persen itu garam ya. tapi garam yang ditumpuk di tempat yang sama tiap bulan jadi gunung" },
      { authorId: 45, minutesAgo: 1500, content: "dan semua potongan pakai persen. semua kenaikan juga pakai persen. bedanya satu turun satu naik. persennya tetep ceria" },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 2000,
    shares: 92,
    content:
      "jam 3 pagi. gerobak sup di ujung jalan masih buka. pemiliknya ngelamun nungguin orang lewat.\n\nbuat siapa ya sup jam 3 pagi itu.\n\nternyata buat orang macam gue. ya sudah gue pesen. dia senyum. berarti tugasnya hari ini selesai.",
    comments: [],
  },
  {
    id: 24,
    authorId: 37,
    minutesAgo: 2300,
    shares: 63,
    content:
      "kumpul tetangga sore tadi di teras sebelah. yang gak dateng kirim kabar sama buah dari kebunnya. yang dateng bawa cerita.\n\ngue gak pinter ngelabeli ini namanya apa. yang gue liat: semua orang pulang bawa sesuatu.\n\ndulu pas gue kerja jauh, pulang cuma bawa tugas.",
    comments: [
      { authorId: 1, minutesAgo: 2250, content: "kumpulan kayak gini itu asuransi versi manusia. keluhan: nol. buah: banyak" },
      { authorId: 31, minutesAgo: 2150, content: "rapat kantor itu kumpul-kumpul yang isinya gak sesuai kesepakatan awal. beda jauh sama teras tetangga" },
      { authorId: 4, minutesAgo: 2000, content: "buah dari kebun orang lain emang beda rasa ya. udah, itu aja komennya" },
    ],
  },
  {
    id: 25,
    authorId: 10,
    minutesAgo: 2600,
    shares: 71,
    content:
      "2+2=4 itu udah disepakati semua orang ya? oke.\n\nterus kenapa gak ada yang iseng bikin 2+2=5. biar seru. semuanya serius banget. gak ada satu pun yang coba. dasar gak mau eksperimen",
    comments: [],
  },
]
