import type { ThreadzThread } from "../types"

// PART 3: cuitan 51-75.
//
// KAMUS SUARA:
//   1: tanggal tua, gaul pelan, self-reward kecil
//  45: bapak tua, kapital di awal, 'Saya', kalimat panjang
//  10: abang SMP, CAPS campur kecil, iseng itung
//   9: kampung & tetangga, panjang dikit, hangat
//  20: yakin tapi sering salah, percaya diri
//  33: dapur & masak, hangat, lowercase
//  36: om penasaran teknologi, nyasar itungan
//  44: sial terus, ringan, YAUDAH
//  13: CAPS panik
//   7: kalem, 'saya', pengamat
//  25: pertanyaan absurd, pendek
//  48: ibu perencana, catetan keluarga, rapi
//  23: jam 2 pagi, minimalis
//  42: tumpul, pendek, gak jaim
//  47: polos-literal, praktis
//  30: kakak yang bantuin adik, 'aku', ringan
//  19: malem-malem, pendek, gak suka penutup
//  35: ragu-ragu, banyak tanya, sopan
//  49: jajan & kopi, humor, lowercase
//   3: cerita panjang keluarga, gak pernah kasih kesimpulan
//  26: penumpang commuter, capek tapi lengket ke manusia
//  46: bapak anak remaja, dialog, sabar
//  11: sunda campur indo, jemuran & tetangga
//  21: perencana, 'saya', rapi tapi gak kaku
//   4: satu-dua kalimat, datar, jarang nulis
//
// ATURAN DUNIA: gak ada merek/toko/orang. angka dapur & angka jalan. aman
// bocah sampai eyang. gak ada yang jualan, gak ada yang ngajarin.
export const THREADS_PART3: ThreadzThread[] = [
  {
    id: 51,
    authorId: 1,
    minutesAgo: 1800,
    shares: 19,
    content:
      "rekor tanggal tua pribadi: mie 3 hari berturut-turut. hari ini gue tambah telor.\n\nkemewahan harus dirayakan sekecil apa pun. selamat kepada telor tersebut.",
    comments: [
      { authorId: 49, minutesAgo: 1792, content: "telor itu puncak peradaban tanggal tua" },
      { authorId: 12, minutesAgo: 1780, content: "gue juga baru rayain: kopi sachet dobel hari ini" },
      { authorId: 32, minutesAgo: 1768, content: "menang banget 😭" },
      { authorId: 44, minutesAgo: 1755, content: "semoga tanggal 1 cepet nyampe" },
    ],
  },
  {
    id: 52,
    authorId: 45,
    minutesAgo: 1860,
    shares: 21,
    content:
      "Dulu saya menghitung hari menuju tahun baru. Sekarang saya menghitung hari sejak cucu terakhir lahir.\n\nArah hitungannya berubah, cara hitungnya tetap sama: satu demi satu.",
    comments: [
      { authorId: 15, minutesAgo: 1852, content: "Semoga hitungannya panjang dan sehat selalu." },
      { authorId: 41, minutesAgo: 1840, content: "yang penting hitungannya jalan terus" },
      { authorId: 22, minutesAgo: 1828, content: "indah sekali 🙏" },
      { authorId: 27, minutesAgo: 1815, content: "hitungan naik itu enak dilihat. semoga tambah terus" },
    ],
  },
  {
    id: 53,
    authorId: 10,
    minutesAgo: 1920,
    shares: 34,
    content:
      "gue iseng itung: jajan gue 15 ribu sehari. sebulan 450 ribu. GUE BISA BELI APA.\n\n(buka toko online 5 menit) ... GAK JADI. JAJAN LAGI.\n\ntapi serius itung itu bikin ngeri lho",
    comments: [
      { authorId: 2, minutesAgo: 1912, content: "GUE LEBIH PARAH: 20 RIBU. GAK MAU ITUNG" },
      { authorId: 38, minutesAgo: 1900, content: "HAAA GUE JUGA BARU ITUNG KEMARIN, HASILNYA GUE TUTUP APLIKASINYA" },
      { authorId: 35, minutesAgo: 1888, content: "450 itu gede ya kalau dibanding 'cuma 15 ribu doang'" },
      { authorId: 49, minutesAgo: 1875, content: "tapi jajan itu investasi mood. gak bisa dihapus" },
      { authorId: 25, minutesAgo: 1862, content: "kalo sebulan 450, setahun berapa? jangan dijawab" },
    ],
  },
  {
    id: 54,
    authorId: 9,
    minutesAgo: 1990,
    shares: 28,
    content:
      "di RT kita sekarang ada kotak biaya bersih buat lampu jalan yang rusak.\n\nyang bikin saya senyum bukan kotaknya. catatannya: bapak-bapak nyicil, ibu-ibu nyatet, anak-anak yang paling jago ngingetin 'kok bulan ini belum?'.\n\ntiga generasi ngurusin satu lampu jalan. tanpa rapat, tanpa aplikasi.",
    comments: [
      { authorId: 43, minutesAgo: 1982, content: "begitulah warga yang benar 🙏" },
      { authorId: 37, minutesAgo: 1970, content: "alhamdulillah ada yang mau ngurus" },
      { authorId: 15, minutesAgo: 1958, content: "Lampu jalan yang menyala karena kebersamaan itu lebih terang." },
      { authorId: 22, minutesAgo: 1945, content: "tertib dan rapi 🙏" },
    ],
  },
  {
    id: 55,
    authorId: 20,
    minutesAgo: 2060,
    shares: 41,
    content:
      "gue itung: jalan kaki 10 menit, naik motor 2 menit. berarti motor 5 kali lebih cepat. terus kalau jalan kaki 1 jam, naik motor 12 menit.\n\nBERARTI BESOK GUE JALAN KAKI BUAT NGUJI ITUNGAN GUE. kalo telat, dunia yang salah.",
    comments: [
      { authorId: 5, minutesAgo: 2052, content: "kelipatan itu gak jalan di semua kasus. laporan hasilnya ditunggu" },
      { authorId: 39, minutesAgo: 2040, content: "motor itu naiknya bukan cuma kecepatan, juga jalurnya. coba itung jalurnya" },
      { authorId: 26, minutesAgo: 2028, content: "gue sering gitu. hasilnya telat 20 menit. dunia konsisten menang" },
      { authorId: 2, minutesAgo: 2015, content: "GUE DUKUNG. LAPOR HASIL YA" },
      { authorId: 47, minutesAgo: 2002, content: "jalan kaki 1 jam itu jauh ya. 5 kilo lebih" },
      { authorId: 31, minutesAgo: 1990, content: "wkwk eksperimen paling berani" },
    ],
  },
  {
    id: 56,
    authorId: 33,
    minutesAgo: 2130,
    shares: 17,
    content:
      "masak nasi buat 8 orang, takaran air pakai ruas jari dari nenek. nenek bilang ruas jari gak pernah salah.\n\ntadi hasilnya gosong. gue cek ulang, ternyata piringnya yang kegedean, nasinya pas.\n\njadi salahnya piring. gak usah dibilang ke nenek.",
    comments: [
      { authorId: 16, minutesAgo: 2122, content: "ruas jari itu amanah, piring yang sering bohong 😅" },
      { authorId: 18, minutesAgo: 2110, content: "8 orang itu porsi gede ya. berasnya aja udah 1,5 kilo-an" },
      { authorId: 49, minutesAgo: 2098, content: "nasinya pas, piringnya gak sopan" },
      { authorId: 22, minutesAgo: 2085, content: "rahasia nenek tetap terjaga 🙏" },
      { authorId: 34, minutesAgo: 2072, content: "yang penting semua makan, sisanya debat dapur" },
    ],
  },
  {
    id: 57,
    authorId: 36,
    minutesAgo: 2200,
    shares: 26,
    content:
      "HP nenek saya tadi nyala 12 persen. saya panik mau nyari charger. nenek bilang 'masih cukup buat seminggu'.\n\nternyata dia cuma telepon 3 menit per hari. 12 persen versi nenek itu 84 menit cadangan.\n\nefisien banget. HP saya 80 persen dan saya ngerasa darurat.",
    comments: [
      { authorId: 27, minutesAgo: 2192, content: "84 menit cadangan itu itungan yang bersih. salut buat nenek" },
      { authorId: 46, minutesAgo: 2180, content: "kita makai 80 persen buat nonton, nenek makai 12 buat tanya kabar. beda dunia" },
      { authorId: 14, minutesAgo: 2168, content: "yang boros bukan HP-nya" },
      { authorId: 22, minutesAgo: 2155, content: "nenek itu tingkat efisiensi tertinggi 🙏" },
    ],
  },
  {
    id: 58,
    authorId: 44,
    minutesAgo: 2280,
    shares: 12,
    content:
      "pagi ini gue naik tangga benerin antena. kekunci di atap, kunci ada di dalam.\n\ntetangga pinjemin tangga, terus disuruh dulu 'sarapan, nanti jatuh'.\n\njadi hari ini gue dapat: antena beres, sarapan gratis, dan pelajaran kunci gak boleh tinggal di meja.",
    comments: [
      { authorId: 50, minutesAgo: 2272, content: "kunci di meja itu musuh diri sendiri" },
      { authorId: 32, minutesAgo: 2260, content: "sarapan gratis itu menang utama 😭" },
      { authorId: 37, minutesAgo: 2248, content: "semoga tetangganya diberkahi" },
      { authorId: 22, minutesAgo: 2235, content: "tetangga seperti itu harganya mahal 🙏" },
    ],
  },
  {
    id: 59,
    authorId: 13,
    minutesAgo: 2350,
    shares: 20,
    content:
      "SEMALAM GUE MIKIRIN: KOK SEPATU KANAN SELALU LEBIH CEPET AUS DARI YANG KIRI.\n\nJAM 3 PAGI. BESOK ADA URUSAN PENTING. PIKIRAN GUE MALAH KESANA.\n\nADA YANG BISA JELASIN?",
    comments: [
      { authorId: 14, minutesAgo: 2342, content: "karena gak semua orang mampir kakinya sama. liat tapak yang ausnya paling dalam" },
      { authorId: 19, minutesAgo: 2330, content: "jam 3 pagi itu jam semua pertanyaan penting" },
      { authorId: 23, minutesAgo: 2318, content: "gue juga pernah mikir ginian. jawabannya gak gue cari. biar tetep misteri" },
      { authorId: 38, minutesAgo: 2305, content: "HAAA GUE PERNAH MIKIR INI JUGA" },
      { authorId: 47, minutesAgo: 2292, content: "kanan biasanya dipake buat ngerem ya? mungkin itu" },
    ],
  },
  {
    id: 60,
    authorId: 7,
    minutesAgo: 2430,
    shares: 24,
    content:
      "Saya perhatikan penjual di depan pintu sekolah hafal semua anak tanpa daftar. 'Yang dua es tiap hari itu kelas 4. Yang nunggu paling lama itu anak yang bapaknya suka telat.'\n\nDatanya akurat semua. Saya sebagai orang dewasa butuh catatan di HP, beliau cukup mata.",
    comments: [
      { authorId: 16, minutesAgo: 2422, content: "penjual depan sekolah itu arsip berjalan" },
      { authorId: 46, minutesAgo: 2410, content: "dan biasanya hafal juga siapa yang sering gak bawa duit. yang itu gak pernah dibebani" },
      { authorId: 43, minutesAgo: 2398, content: "orang-orang di pintu sekolah itu emang luar biasa 🙏" },
      { authorId: 31, minutesAgo: 2385, content: "arsip berjalan wkwk bener banget" },
    ],
  },
  {
    id: 61,
    authorId: 25,
    minutesAgo: 2500,
    shares: 6,
    content:
      "gue barusan sadar: lampu tombol lift itu nyala abis dipencet, mati pas liftnya nyampe.\n\n25 tahun hidup GAK PERNAH GUE PERHATIIN. kesimpulan: gue selama ini naik lift dalam keadaan ngelamun. lanjut.",
    comments: [
      { authorId: 47, minutesAgo: 2492, content: "coba perhatiin juga, pintunya kebuka dulu atau lampunya mati dulu. topik baru" },
      { authorId: 10, minutesAgo: 2480, content: "BJIR GUE JUGA BARU SADAR SEKARANG" },
      { authorId: 5, minutesAgo: 2468, content: "iya. itu umpan balik buat yang nunggu. berguna banget sebenarnya" },
    ],
  },
  {
    id: 62,
    authorId: 48,
    minutesAgo: 2580,
    shares: 33,
    content:
      "dari catatan keluarga: piknik kecil ke taman itu 60 ribuan (es, camilan, tiket). main di halaman depan pake kain sarung buat tenda cuma 15 ribu (cuma es).\n\nhasil survei anak: sama-sama seru.\n\nanggaran kami menang dua-duanya: dompet senang, anak senang. minggu depan versi 2: tenda dari sprei.",
    comments: [
      { authorId: 16, minutesAgo: 2572, content: "piknik versi halaman itu yang bakal diinget anak sampai dewasa 🥰" },
      { authorId: 21, minutesAgo: 2560, content: "15 ribu buat kenangan segitu itu murah banget" },
      { authorId: 22, minutesAgo: 2548, content: "keluarga yang kreatif 🙏" },
      { authorId: 34, minutesAgo: 2535, content: "sprei lebih adem daripada kain sarung. semoga berjaya" },
      { authorId: 43, minutesAgo: 2522, content: "anak-anak gak peduli mahal-murahnya. yang penting ikutnya 🙏" },
    ],
  },
  {
    id: 63,
    authorId: 23,
    minutesAgo: 2650,
    shares: 3,
    content:
      "jam 1 pagi gue itung sumbu roda sepeda di teras: 36. roda belakang gue itung lagi: 36. kembar.\n\nterus gue mikir, ada gak ya roda yang sumbunya beda.\n\ngak penting. gue masuk lagi.",
    comments: [
      { authorId: 19, minutesAgo: 2642, content: "36 itu standar ya. gue baru tau" },
      { authorId: 4, minutesAgo: 2630, content: "wkwk itungan jam 1 pagi selalu keliatan penting" },
    ],
  },
  {
    id: 64,
    authorId: 42,
    minutesAgo: 2740,
    shares: 102,
    content:
      "temen gue nanya, 'menang dikit terus, kenapa gak ditambah modalnya?'\n\ngue jawab: 'menang dikit itu umpan. kailnya udah nempel di mulut lu.'\n\ndia marah, gue diemin. dua minggu kemarin dia chat lagi: 'bro, bener.'\n\nlebih baik dimarahi sekali daripada nyesel bertahun-tahun.",
    comments: [
      { authorId: 29, minutesAgo: 2732, content: "yang marah duluan itu biasanya yang paling dalam" },
      { authorId: 45, minutesAgo: 2720, content: "Kebanggaan yang lebih dulu sakit, keluarga yang kemudian menanggung." },
      { authorId: 15, minutesAgo: 2708, content: "Anda penyelamat yang sabar." },
      { authorId: 9, minutesAgo: 2695, content: "kasus di kampung kami mirip. yang akhirnya sadar emang butuh orang yang gak ngalah" },
      { authorId: 31, minutesAgo: 2682, content: "gue simpen kalimat kailnya. buat temen gue" },
      { authorId: 12, minutesAgo: 2670, content: "yang chat lagi itu beruntung masih sempet" },
      { authorId: 37, minutesAgo: 2658, content: "semoga dia benar-benar berhenti" },
    ],
  },
  {
    id: 65,
    authorId: 47,
    minutesAgo: 2820,
    shares: 14,
    content:
      "gue selalu parkir di posisi paling ujung. paling jauh dari pintu.\n\ngak pernah kebalik motor, gak pernah kegores, gak pernah ditutup mobil.\n\nrugi 30 langkah jalan kaki, aman seharian. gue pilih yang 30 langkah.",
    comments: [
      { authorId: 5, minutesAgo: 2812, content: "30 langkah itu sekitar 25 meter. 25 meter buat aman itu murah" },
      { authorId: 12, minutesAgo: 2800, content: "sama. gue juga ujung. yang kejebak tengah itu paling sering kena" },
      { authorId: 44, minutesAgo: 2788, content: "gue pernah parkir deket pintu. pulang-pulang motornya udah gak keliatan bentuknya" },
    ],
  },
  {
    id: 66,
    authorId: 30,
    minutesAgo: 2900,
    shares: 27,
    content:
      "adik gue kelas 3 latihan soal: 'ibu punya 24 kue, dibagi sama rata buat 4 anak.' dia jawab 6. bener.\n\nterus dia nanya, 'kak, ibunya makan kapan?'\n\nSOALNYA GAK NYEBUT IBUNYA IKUT MAKAN. nilai dia di lembar jawaban: bintang. nilai logikanya di kepala gue: 100.",
    comments: [
      { authorId: 24, minutesAgo: 2892, content: "anak yang mikirin ibunya di soal matematika itu didikan rumahnya oke" },
      { authorId: 39, minutesAgo: 2880, content: "jawaban resmi 6. jawaban kehidupan: 'tergantung ibunya laper atau gak'. dua-duanya benar di dunia masing-masing" },
      { authorId: 11, minutesAgo: 2868, content: "biasane anak SD emang tajam euy" },
      { authorId: 16, minutesAgo: 2855, content: "24 kue itu banyak ya. ibunya sabar nulis soal 😅" },
      { authorId: 5, minutesAgo: 2842, content: "soalnya gak lengkap, jawaban anak justru nutup lubangnya. bagus" },
      { authorId: 2, minutesAgo: 2830, content: "24 DIBAGI 4 EMANG 6 DONG. TERUS MASALAHNYA DI MANA. OH IBUNYA. IYA YA" },
    ],
  },
  {
    id: 67,
    authorId: 19,
    minutesAgo: 2980,
    shares: 7,
    content:
      "jam 12 malem suara motor terakhir lewat depan rumah. abis itu sunyi banget.\n\ngue sempet itung sambil ngantuk: 12 motor, 6 mobil, 1 yang mbalik.\n\nyang mbalik itu pasti ada urusan. gak gue tanya. selamat jalan.",
    comments: [
      { authorId: 23, minutesAgo: 2972, content: "yang mbalik itu biasanya lupa sesuatu. rasanya familiar" },
      { authorId: 4, minutesAgo: 2960, content: "12 motor 6 mobil. itungan yang gak berguna. lanjutkan" },
    ],
  },
  {
    id: 68,
    authorId: 35,
    minutesAgo: 3070,
    shares: 18,
    content:
      "tanya serius: kalau semua orang buang sampah lebih dikit, di TPS juga jadi lebih dikit kan?\n\nterus yang buang paling banyak itu siapa? gak usah dijawab. gue juga. kita sama-sama.",
    comments: [
      { authorId: 40, minutesAgo: 3062, content: "yang mulai ngurangin duluan itu untung duluan. rumah bersih, hati ikut" },
      { authorId: 37, minutesAgo: 3050, content: "mulai dari rumah aja" },
      { authorId: 22, minutesAgo: 3038, content: "sadar itu langkah pertama 🙏" },
    ],
  },
  {
    id: 69,
    authorId: 49,
    minutesAgo: 3150,
    shares: 30,
    content:
      "kopi sachet langganan gue keluar rasa baru: rasa kopi. gue cek komposisi: 'perisa kopi' itu urutan nomor 9. nomor 1: gula.\n\nJADI TIGA TAHUN GUE MINUM GULA PERASA KOPI.\n\nenak sih. makanya gak berani ganti.",
    comments: [
      { authorId: 33, minutesAgo: 3142, content: "semua sachet gitu. yang nomor satu hampir selalu gula" },
      { authorId: 12, minutesAgo: 3130, content: "yang penting enak di lidah. komposisi itu urusan pabriknya" },
      { authorId: 2, minutesAgo: 3118, content: "GUE CEK JUGA BARUSAN. GUA MINUM GULA JUGA TERNYATA" },
      { authorId: 31, minutesAgo: 3105, content: "urutan nomor 9 wkwk" },
      { authorId: 25, minutesAgo: 3092, content: "kalo perisa kopi nomor 1 gimana? makin enak atau makin bahaya" },
    ],
  },
  {
    id: 70,
    authorId: 3,
    minutesAgo: 3240,
    shares: 58,
    content:
      "kakek gue hafal ultah 14 cucu tanpa HP. gue tanya caranya. dia bilang, 'yang bulan genap dulu, yang ganjil kemudian, sisanya nempel sendiri.'\n\ngue coba: lupa yang pertama pas nyampe yang kelima.\n\nkakek gue gak ngulang penjelasan. dia cuma senyum. sepertinya cara dia tuh bukan metode. gaya hidup.",
    comments: [
      { authorId: 45, minutesAgo: 3232, content: "Yang disimpan di hati tidak membutuhkan daftar." },
      { authorId: 15, minutesAgo: 3220, content: "Kakek dan cucu, pasangan yang tak pernah kehabisan cerita." },
      { authorId: 27, minutesAgo: 3208, content: "gaya hidup itu jawaban paling jujur. metode itu buat yang belum hafal" },
      { authorId: 9, minutesAgo: 3195, content: "kakek saya juga gitu. beda: dia hafal 19. gak tau caranya" },
      { authorId: 22, minutesAgo: 3182, content: "semoga kakek sehat selalu 🙏" },
      { authorId: 41, minutesAgo: 3170, content: "dulu orang tua saya hafal semua tanggal itu. sekarang kita diingetin HP, masih telat" },
    ],
  },
  {
    id: 71,
    authorId: 26,
    minutesAgo: 3320,
    shares: 22,
    content:
      "di bus tadi pagi ada ibu-ibu berdiri di depan ngingetin semua penumpang: 'dompet dan HP dicek ya, sebelum berangkat.'\n\nsatu bus langsung riuh nyari dompet. satu orang ketemu. kabar baik.\n\npolisi gak bisa ngumpulin orang secepat ibu-ibu satu kalimat.",
    comments: [
      { authorId: 12, minutesAgo: 3312, content: "ibu-ibu satu kalimat itu kerja lima petugas" },
      { authorId: 31, minutesAgo: 3300, content: "wkwk riuh sekali bus" },
      { authorId: 37, minutesAgo: 3288, content: "semoga dompet yang ketemu bawa senang pemiliknya" },
    ],
  },
  {
    id: 72,
    authorId: 46,
    minutesAgo: 3420,
    shares: 214,
    content:
      "anak gue (12) tadi malem nanya sambil ngerjain PR: 'pap, kenapa ya kalau nunggu itu ngerasa lama banget, tapi kalau lagi seneng waktunya cepet banget? padahal jamnya sama kan?'\n\ngue jawab 'iya, jamnya sama.' terus dia nunggu gue jelasin. terus gue nyadar gue juga gak tau. terus dia tidur duluan.\n\nsekarang gue yang masih di teras mikirin pertanyaan bocah 12 tahun.",
    comments: [
      { authorId: 15, minutesAgo: 3408, content: "Waktu itu milik siapa yang menjalaninya, bukan milik jam." },
      { authorId: 23, minutesAgo: 3395, content: "pertanyaan itu gak ada jawabannya. makanya jam 12 malem masih mikir" },
      { authorId: 45, minutesAgo: 3382, content: "Yang dihitung jam, yang dirasakan hati. Keduanya tidak pernah sepakat." },
      { authorId: 34, minutesAgo: 3370, content: "anak itu bakal jadi orang yang mikir. asah terus" },
      { authorId: 27, minutesAgo: 3358, content: "nunggu itu gak ada isinya, seneng itu penuh isi. isi yang bikin waktu jalan. teori gue aja sih" },
      { authorId: 9, minutesAgo: 3345, content: "di rumah kami juga pernah ditanya begini. jawabannya 'karena nunggu gak ada serunya'. beres. gak dianggep" },
      { authorId: 22, minutesAgo: 3332, content: "pertanyaan anak itu kadang lebih dalam dari perkuliahan 🙏" },
      { authorId: 5, minutesAgo: 3320, content: "10 menit nunggu dan 10 menit seneng sama-sama 600 detik. yang beda cuma perspektif. jawaban resmi: gue juga gak tau" },
      { authorId: 31, minutesAgo: 3308, content: "gue baca dua kali. gak ngerti tapi nanggung" },
      { authorId: 41, minutesAgo: 3295, content: "zaman saya dulu pertanyaannya sama. jawabannya juga belum ada sampai sekarang" },
    ],
  },
  {
    id: 73,
    authorId: 11,
    minutesAgo: 3500,
    shares: 26,
    content:
      "soré tadi ujan gede. jemuran tetangga sebelah masih di tali, mereka lagi keluar. tetangga sebelahnya lagi yang turun angkat. terus jemuran yang bawah ikut diangkat.\n\nakhire jemuran satu gang aman tanpa satu pun pemiliknya yang jaga.\n\nkeun.",
    comments: [
      { authorId: 22, minutesAgo: 3492, content: "gotong royong yang tenang 🙏" },
      { authorId: 9, minutesAgo: 3480, content: "jemuran satu gang itu aset bersama ya" },
      { authorId: 43, minutesAgo: 3468, content: "tetangga seperti itu dijaga 🙏" },
      { authorId: 37, minutesAgo: 3455, content: "alhamdulillah" },
    ],
  },
  {
    id: 74,
    authorId: 21,
    minutesAgo: 3600,
    shares: 24,
    content:
      "saya simpen kembalian receh di kaleng selama sebulan. dibuka tadi, isinya 87 ribu. kaget.\n\nrencananya buat... sudah terpakai buat bensin dadakan sore ini. kaleng dua dimulai malam ini. tujuan sama. semoga kaleng dua lebih setia.",
    comments: [
      { authorId: 48, minutesAgo: 3592, content: "87 ribu buat bensin dadakan emang paling berguna sih. tapi buat yang terakhir kali ya" },
      { authorId: 12, minutesAgo: 3580, content: "kaleng itu dompet kedua yang paling jujur" },
      { authorId: 22, minutesAgo: 3568, content: "semoga setia 🙏" },
      { authorId: 18, minutesAgo: 3555, content: "receh itu kecil, tapi kalau ditumpuk tumpukannya keliatan lho" },
    ],
  },
  {
    id: 75,
    authorId: 4,
    minutesAgo: 3700,
    shares: 4,
    content: "hari ini gue lap jendela. sekali ngelap. dua-duanya langsung keliatan lebih bersih: jendelanya dan lapnya. percaya atau tidak, itu urusan kaca.",
    comments: [
      { authorId: 50, minutesAgo: 3692, content: "kaca tuh gampang bohongin mata wkwk" },
      { authorId: 31, minutesAgo: 3680, content: "gue doang apa jendela emang gak pernah bener bersih" },
    ],
  },
]
