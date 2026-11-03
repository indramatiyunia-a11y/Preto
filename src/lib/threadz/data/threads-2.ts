import type { ThreadzThread } from "../types"

// PART 2: cuitan 26-50.
//
// KAMUS SUARA:
//   8: jawa campur indo, pasar & tetangga, santai
//  47: polos-literal, nanya hal praktis, gak puitis
//   2: CAPS, typo, wkwk
//  21: perencana, 'saya', rapi tapi gak kaku
//  38: cewek remaja hiperbola, HAAA/GILS
//  15: bapak tua, kapital di awal, 'Saya', pelan
//  32: dramatis muda, huruf panjang, emoji 😭
//   5: presisi, datar, gak pernah nggambar
//  34: optimis, pendek hangat
//  13: CAPS panik, semua masalah mendesak
//  39: hobi itung, santai, gak mau jadi guru
//  26: penumpang commuter, capek tapi lengket ke manusia
//  17: CAPS marah soal sistem, sumbernya keluarga
//  28: baru pindah rumah, sopan, banyak nanya
//  40: tanaman & cuaca, pelan, lowercase
//  41: nostalgia, 'dulu', pelan-pelan
//  42: tumpul, jawaban pendek, gak jaim
//  43: acara kampung & adab, 'saya', 🙏
//  50: chaos, typo, plot twist sendiri
//  24: bapak anak kecil, dialog, sabar
//  18: jago harga pasar, 'lho', duduk mikir
//  22: ibu sopan, normal case, 🙏
//  14: kering, presisi, gak banyak kata
//  31: lurker, jarang nulis
//   6: polos beneran, nanya serius
//
// ATURAN DUNIA: gak ada merek/toko/orang. angka dapur & angka jalan. aman
// bocah sampai eyang. gak ada yang jualan, gak ada yang ngajarin.
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 8,
    minutesAgo: 730,
    shares: 18,
    content:
      "esuk nang pasar, tuku cabai. tukange nimbang sambil ngomel, 'iki sing paling apik'. gue njaluk 300 gram, dia bilang '250 wae, sing sise isih seger pasti kurang'.\n\nyo wis, ambil 250. sampek rumah, dia benar. cabai yang 50 gram itu biasanya yang pertama kebusuk.\n\ncara dia tau itu, gak gue tanya lagi.",
    comments: [
      { authorId: 33, minutesAgo: 722, content: "tukang pasar itu gitu. timbangannya jujur, mulutnya gratis" },
      { authorId: 18, minutesAgo: 710, content: "250-300 gram gak keliatan mata, tapi kerasa di dompet lho" },
      { authorId: 47, minutesAgo: 695, content: "250 gram cabai itu banyak atau sedikit sih? serius nanya" },
      { authorId: 9, minutesAgo: 678, content: "pasar pagi memang gak ada duanya" },
    ],
  },
  {
    id: 27,
    authorId: 47,
    minutesAgo: 770,
    shares: 11,
    content:
      "kucing tetangga tiap sore jam 6 mampir. gue kasih makan tiap kali. minggu ini dia mulai mampir jam 5:30.\n\nminggu depan mungkin jam 5. terus akhirnya jadi jam berapa? gue pengen tau arah mainnya.",
    comments: [
      { authorId: 14, minutesAgo: 762, content: "coba dicatet. tiap minggu mundur 30 menit. sebulan lagi dia mampir jam 3-an" },
      { authorId: 40, minutesAgo: 750, content: "kucing itu punya kalender sendiri. kita cuma numpang baca" },
      { authorId: 16, minutesAgo: 738, content: "makanya orang bilang kasih makan itu belajar nanggung 😅" },
      { authorId: 25, minutesAgo: 722, content: "akhirnya dia bakal mampir jam subuh. itu jam kerjanya" },
      { authorId: 4, minutesAgo: 708, content: "wkwk tergantung seberapa enak makannya" },
    ],
  },
  {
    id: 28,
    authorId: 2,
    minutesAgo: 810,
    shares: 44,
    content:
      "GUE BARU TAU RAMBUTAN MERAH ITU BELUM PASTI MANIS. HIJAU JUGA BUKAN JAMINAN KESEM.\n\nTUKANGNYA BILANG 'COBA DULU SATU'. TERUS GUE BELI SEKARUNG.\n\nITUNG-ITUNGAN LOGIKANYA DI MANA. YANG DISURUH COBA SATU, YANG DIBAWA PULANG SEKARUNG",
    comments: [
      { authorId: 5, minutesAgo: 802, content: "ngetes satu itu memang sampling. yang memperluas sampelnya lo sendiri" },
      { authorId: 25, minutesAgo: 790, content: "kalo satu enak, sepuluh pasti enak dong? ini logika gue" },
      { authorId: 32, minutesAgo: 778, content: "wkwk sama, cicip satu bawa satu kantong 😭" },
      { authorId: 18, minutesAgo: 765, content: "yang jago beli buah itu ngetes yang beda posisi: atas, bawah, tengah. satu cicip gak cukup" },
      { authorId: 49, minutesAgo: 752, content: "sekarung itu berapa kilo? pembicaraan penting ini" },
      { authorId: 13, minutesAgo: 738, content: "GUE MAU IKUT. KASIH TAU TUKANGNYA YANG MANA" },
    ],
  },
  {
    id: 29,
    authorId: 21,
    minutesAgo: 850,
    shares: 26,
    content:
      "belanja bulanan saya sekarang dipecah dua: yang segar ambil tiap minggu, yang tahan simpan ambil tanggal 1. hasilnya buah gak mati sia-sia di kulkas, susu gak kedaluwarsa.\n\nsatu kegagalan masih tersisa: kopi selalu habis lebih cepet dari semua rencana. kaleng kopi itu satu-satunya yang gak bisa diitung.",
    comments: [
      { authorId: 48, minutesAgo: 842, content: "kopi itu pemakaiannya naik kalau bulan sibuk. wajar, bukan rencananya yang salah" },
      { authorId: 33, minutesAgo: 830, content: "kopi itu kategori emosional. gak bisa masuk perencanaan" },
      { authorId: 22, minutesAgo: 815, content: "saya juga mengalami hal yang sama 🙏" },
      { authorId: 12, minutesAgo: 800, content: "yang di rumah saya melebihi rencana: gas" },
    ],
  },
  {
    id: 30,
    authorId: 38,
    minutesAgo: 890,
    shares: 15,
    content:
      "GILS hari ini naik tangga ke lantai 3 terus GUE ITUNG. 24 anak tangga doang. KOK RASANYA RATUSAN.\n\nmata gue bohong atau kaki gue yang lemah. mohon jawaban ilmiah atau sekadar hiburan",
    comments: [
      { authorId: 5, minutesAgo: 882, content: "naik itu rasanya lebih lama dari turun, padahal jumlahnya sama. soalnya pas naik otak ngitung terus" },
      { authorId: 25, minutesAgo: 870, content: "coba turun sambil itung. beda dunia" },
      { authorId: 47, minutesAgo: 858, content: "24 anak tangga itu 8 per lantai ya? kok dikit" },
      { authorId: 14, minutesAgo: 845, content: "lakuin tiap hari. seminggu lagi rasanya 12" },
      { authorId: 10, minutesAgo: 830, content: "HAAA GUE BELUM PERNAH ITUNG. MAU COBA BESOK" },
    ],
  },
  {
    id: 31,
    authorId: 15,
    minutesAgo: 930,
    shares: 33,
    content:
      "Malam tadi hujan turun tiba-tiba. Jemuran saya aman, sebab cucu saya enam tahun berpesan sebelum tidur: 'Atuk, kalau malam mendung, jemuran harus naik.'\n\nPerintah itu saya jalankan, meski saya tiga kali umurnya. Hujan reda. Semua aman.",
    comments: [
      { authorId: 43, minutesAgo: 922, content: "cucu yang bertanggung jawab, atuk yang taat. rumah yang baik 🙏" },
      { authorId: 22, minutesAgo: 910, content: "manis sekali 🙏" },
      { authorId: 16, minutesAgo: 895, content: "anak-anak itu kalau dipercaya serius banget ya 🥰" },
      { authorId: 41, minutesAgo: 880, content: "dulu anak kecil juga ngingetin orang tuanya soal jemuran. sama saja sepanjang masa" },
      { authorId: 34, minutesAgo: 865, content: "semoga hujannya bawa berkah" },
    ],
  },
  {
    id: 32,
    authorId: 32,
    minutesAgo: 970,
    shares: 52,
    content:
      "capekk hari ini. tapi sore tadi bapak gue kirim voice note, isinya dia dengerin lagu lama sambil senyum-senyum sendiri.\n\n4 menit 12 detik. gue dengerin 3 kali. gak ada yang penting dibahas. cuma suara bapak senyum.\n\nmakasih ya papah.",
    comments: [
      { authorId: 16, minutesAgo: 962, content: "satu-satunya voice note yang gak pernah di-skip 😭" },
      { authorId: 46, minutesAgo: 950, content: "simpan voice notenya ya. jangan dihapus" },
      { authorId: 22, minutesAgo: 938, content: "menyentuh 🙏" },
      { authorId: 37, minutesAgo: 925, content: "alhamdulillah masih ada yang kirim" },
      { authorId: 43, minutesAgo: 912, content: "4 menit itu berharga banget sebenarnya" },
      { authorId: 31, minutesAgo: 898, content: "gue juga simpan voice note almarhum bapak. tetap dibuka sekali-sekali" },
    ],
  },
  {
    id: 33,
    authorId: 5,
    minutesAgo: 1010,
    shares: 9,
    content:
      "tes kecil kemarin: nonton video, baterai turun dari 80 ke 79 dalam 12 menit. hari ini cuma chat, 80 ke 79 dalam 40 menit.\n\njadi 1 persen itu bukan jarak yang sama. dia tergantung kita lagi ngapain. HP aja pahamnya gitu, apalagi kita.",
    comments: [
      { authorId: 27, minutesAgo: 1002, content: "persen itu persen dari sisa, bukan satuan menit. makanya rasanya melompat" },
      { authorId: 36, minutesAgo: 990, content: "berarti gue selama ini salah itung sisa baterai dong" },
      { authorId: 14, minutesAgo: 975, content: "yang keliatan makan itu videonya. yang gak keliatan itu layar yang nyala terus. dua-duanya makan baterai" },
    ],
  },
  {
    id: 34,
    authorId: 34,
    minutesAgo: 1050,
    shares: 38,
    content:
      "temen saya dagangannya tutup setelah dua tahun. pagi ini dia malah dateng bantuin angkat barang gudang.\n\ngue gak nanya soal dagangannya. dia gak nanya soal tagihan saya. kita ngangkat barang, ngobrol soal hujan sama cabai tetangga. sore dia pulang duluan.\n\nudah. itu temen sejati versi saya.",
    comments: [
      { authorId: 9, minutesAgo: 1042, content: "orang yang lagi susah tapi masih kuat bantu orang lain itu luar biasa" },
      { authorId: 37, minutesAgo: 1030, content: "alhamdulillah ada temen begini" },
      { authorId: 22, minutesAgo: 1015, content: "persahabatan yang tenang 🙏" },
      { authorId: 19, minutesAgo: 1000, content: "ngobrol soal hujan sama cabai itu caranya bilang 'gue ngerti posisi lu' tanpa nanya-nanya" },
    ],
  },
  {
    id: 35,
    authorId: 13,
    minutesAgo: 1090,
    shares: 21,
    content:
      "TOLONG. PIN ATM GUE ILANG. BUKAN KARTUNYA. PIN-nya.\n\nGUE CHECK 5 CELANA, 2 TAS. HASIL: DEBU 7, PIN 0.\n\nTEPAT JAM 12 SIANG GUE INGET: PIN ITU GUE SIMPEN DI DOMPET. DOMPETNYA MANA",
    comments: [
      { authorId: 2, minutesAgo: 1082, content: "DOMPET ITU BIASANYA Nempel SAMA KUNCI. CARI KUNCINYA DULU" },
      { authorId: 50, minutesAgo: 1070, content: "ceking laci meja. semua benda ilang akhirnya ke laci meja" },
      { authorId: 44, minutesAgo: 1058, content: "gue pernah gitu. pin-nya ternyata gue simpen sendiri di catatan HP. teknologi nyelametin orang lupa" },
      { authorId: 31, minutesAgo: 1045, content: "wkwk debu 7" },
      { authorId: 47, minutesAgo: 1030, content: "kalo udah ketemu, ganti tempat simpannya sekalian. biar besok ada topik baru" },
    ],
  },
  {
    id: 36,
    authorId: 39,
    minutesAgo: 1130,
    shares: 47,
    content:
      "tadi pagi: antrian teller bank 8 orang, 2 teller. sore: antrian kasir pasar 8 orang, 1 kasir.\n\nyang di bank rasanya 15 menit, yang di pasar rasanya 30.\n\nduga gede saya: bukan soal jumlah orangnya. soal ada gak ada jalur kedua yang kebuka pas nunggu.",
    comments: [
      { authorId: 14, minutesAgo: 1122, content: "di bank orang nunggu duduk, di pasar nunggu sambil megang barang. itu juga nambah rasanya" },
      { authorId: 45, minutesAgo: 1110, content: "Menunggu di tempat yang teduh memang terasa lebih singkat." },
      { authorId: 27, minutesAgo: 1095, content: "jalur kedua itu gak nambah kasir, tapi nambah harapan. harapan bikin nunggu lebih pendek" },
      { authorId: 31, minutesAgo: 1080, content: "wkwk analisis yang gue butuhin seminggu lalu" },
      { authorId: 12, minutesAgo: 1065, content: "sama. makanya gue pilih jam sepi. jam sepi itu ajaib" },
    ],
  },
  {
    id: 37,
    authorId: 26,
    minutesAgo: 1170,
    shares: 29,
    content:
      "bus pagi jam 5. bapak keliling jualan kopi antar penumpang, gelas 3 ribu. gue beli dua: satu buat gue, satu gue titip ke penumpang paling ujung yang tadi minta berhenti tapi gak bawa duit receh.\n\nbapaknya cuma ngangguk. gak ada nama, gak ada cerita.\n\ndua gelas kopi, 6 ribu. pagi itu selesai dengan benar.",
    comments: [
      { authorId: 12, minutesAgo: 1162, content: "yang minta berhenti duluan biasanya yang paling butuh. matap" },
      { authorId: 37, minutesAgo: 1150, content: "semoga berkah" },
      { authorId: 31, minutesAgo: 1138, content: "6 ribu buat dua orang senyum. murah banget" },
      { authorId: 19, minutesAgo: 1122, content: "kopi bus pagi itu beda rasanya. lebih panas dari yang di rumah" },
    ],
  },
  {
    id: 38,
    authorId: 17,
    minutesAgo: 1210,
    shares: 96,
    content:
      "SETELAH TAHUN-TAHUN GUE NGERTI SATU HAL: NUNGGAK ITU GAMPANG. YANG SUSAH ITU LIAT ORANG TUA GUE NABUNG SAKITAN TAPI DITOLAK PINJAMAN KARENA 'GAK ADA JAMINAN'.\n\nPADAHAL IKLAN BILANG CAIR 5 MENIT BUAT SEMUA ORANG.\n\nMAKANYA KALAU ADA YANG BILANG CAIR CEPET, GUE BACA DULU SIAPA YANG AKAN BAYAR. JAWABANNYA SELALU SAMA: BUKAN YANG NGIKLANIN",
    comments: [
      { authorId: 42, minutesAgo: 1202, content: "yang cair 5 menit itu duitnya. yang pergi bertahun-tahun itu tenangnya" },
      { authorId: 45, minutesAgo: 1190, content: "Yang cairnya cepat biasanya biayanya gak ditulis di depan." },
      { authorId: 15, minutesAgo: 1175, content: "Sakitannya itu yang tak terlihat. Semoga orang tua Anda sehat selalu." },
      { authorId: 22, minutesAgo: 1160, content: "benar sekali 🙏" },
      { authorId: 48, minutesAgo: 1145, content: "cara baca paling aman: hitung total keluar sampai lunas. bukan bunga bulanannya" },
      { authorId: 31, minutesAgo: 1130, content: "gue simpen. buat diajarin ke adik gue yang mau ambil" },
      { authorId: 9, minutesAgo: 1115, content: "grup keluarga gue perlu baca ini" },
    ],
  },
  {
    id: 39,
    authorId: 28,
    minutesAgo: 1260,
    shares: 16,
    content:
      "baru pindah sini minggu kedua. gue beli gula di tiga toko beda buat bandingin. temen gue bilang capek.\n\niya. tapi hasilnya toko yang paling jauh murah 1 ribu per kilo. sebulan 4 kilo, hemat 4 ribu. setahun 48 ribu.\n\nlumayan buat sekali nongkrong. ya udah gue pilih yang deket aja deh. tenang.",
    comments: [
      { authorId: 18, minutesAgo: 1252, content: "1 ribu per kilo itu lumayan gede lho buat barang sehari-hari" },
      { authorId: 21, minutesAgo: 1240, content: "tapi jangan lupa ongkos ke sana. itung keduanya baru adil" },
      { authorId: 49, minutesAgo: 1228, content: "48 ribu itu 6 gelas kopi warung. worth it atau gak, tergantung temen ngobrolnya" },
      { authorId: 35, minutesAgo: 1215, content: "yakin hasil seminggu itu bisa dipegang setahun?" },
      { authorId: 31, minutesAgo: 1200, content: "pilihan paling manusiawi: yang deket. gue dukung" },
    ],
  },
  {
    id: 40,
    authorId: 40,
    minutesAgo: 1300,
    shares: 10,
    content:
      "tanaman cabe di pot: minggu lalu daun baru 3. hari ini jadi 6. kalau minggu depan 12, saya akan sangat angkuh ke grup tetangga.\n\nkalau masih 6, saya pura-pura gak pernah itung.",
    comments: [
      { authorId: 41, minutesAgo: 1292, content: "tanaman itu kayak anak. tumbuhnya di waktu kita lagi gak liat" },
      { authorId: 34, minutesAgo: 1280, content: "semoga 12. saya dukung dari sini" },
      { authorId: 22, minutesAgo: 1268, content: "semangat bercocok tanamnya 🙏" },
      { authorId: 25, minutesAgo: 1255, content: "kalo jadi 5 gimana? ada yang ilang di jalan?" },
    ],
  },
  {
    id: 41,
    authorId: 41,
    minutesAgo: 1340,
    shares: 27,
    content:
      "dulu foto keluarga satu tahun cuma satu lembar, disimpen rapi di album. sekarang sehari bisa 40 lembar, diem di galeri gak pernah dibuka.\n\ntadi malam iseng buka album tua. satu-satunya yang kami semua masih muda sekaligus.\n\nya gitu.",
    comments: [
      { authorId: 15, minutesAgo: 1332, content: "Album itu benar-benar penjaga waktu." },
      { authorId: 46, minutesAgo: 1320, content: "saya juga baru buka album kemarin. anak gue gak percaya saya pernah sesempit itu" },
      { authorId: 43, minutesAgo: 1308, content: "foto lama itu warisan keluarga 🙏" },
    ],
  },
  {
    id: 42,
    authorId: 42,
    minutesAgo: 1380,
    shares: 63,
    content:
      "orang nanya gue, 'ada aplikasi gede-gedean buat modal dobel gak?'.\n\ngue jawab: ada. aplikasi catat pengeluaran. gratis. tiap hari kebuka. hasilnya konsisten: dobel itu gak pernah muncul, tapi pengeluaran berhenti dobel.\n\nlumayan.",
    comments: [
      { authorId: 29, minutesAgo: 1372, content: "pengeluaran berhenti dobel itu untung paling besar yang pernah ada" },
      { authorId: 45, minutesAgo: 1360, content: "Menang dua kali: uang tidak hilang, tidur tidak hilang." },
      { authorId: 15, minutesAgo: 1348, content: "Jawaban yang menyejukkan." },
      { authorId: 31, minutesAgo: 1335, content: "gw pasang sekalian ah" },
      { authorId: 12, minutesAgo: 1322, content: "aplikasi itungan emang gak bikin kaya. minimal kita tau uang lari ke mana" },
      { authorId: 22, minutesAgo: 1308, content: "terima kasih sudut pandangnya 🙏" },
    ],
  },
  {
    id: 43,
    authorId: 43,
    minutesAgo: 1420,
    shares: 24,
    content:
      "acara di tetangga tadi malam. yang bikin saya senyum bukan makanannya.\n\nanak-anak yang bantu layani: piring diangkat bareng, gelas diisi bareng, yang paling kecil paling rajin. tidak ada yang disuruh dua kali.\n\nsebelum pulang, dia minta 'satu bungkus kecil buat teman saya yang di rumah'. kasih saja.",
    comments: [
      { authorId: 16, minutesAgo: 1412, content: "anak yang mikirin temannya itu didikan rumahnya 🥰" },
      { authorId: 22, minutesAgo: 1400, content: "senang membacanya 🙏" },
      { authorId: 9, minutesAgo: 1388, content: "anak kecil di acara itu kerja paling keras, gak pernah dipotret" },
      { authorId: 37, minutesAgo: 1375, content: "alhamdulillah" },
    ],
  },
  {
    id: 44,
    authorId: 50,
    minutesAgo: 1470,
    shares: 13,
    content:
      "hari ini gue buang sampah jam 6 pagi. besok mau jam 5:30. lusa jam 5. minggu depan... GUE TINGGAL.\n\nBUKAN GUE TINGGAL. MAKSUDNYA SAMPAHNYA YANG TINGGAL NUMPUK. GUE GAK KE MANA-MANA. TENANG. KAMAR JUGA RAPI.\n\n(kamar gue gak rapi)",
    comments: [
      { authorId: 10, minutesAgo: 1462, content: "WKWKWK PLOT TWIST" },
      { authorId: 38, minutesAgo: 1450, content: "HAAA KAMARNYA GAK RAPI WKWK" },
      { authorId: 47, minutesAgo: 1438, content: "jam 5:30 itu masih gelap ya. siapin senter" },
      { authorId: 31, minutesAgo: 1425, content: "kamar rapi itu opsional. sampah gak boleh nunggu" },
    ],
  },
  {
    id: 45,
    authorId: 24,
    minutesAgo: 1510,
    shares: 31,
    content:
      "anak gue (7) nanya di jalan: 'bapak, kenapa rumah seberang ganjil semua, sini genap semua?'\n\ngue jelasin standar penomoran setengah jalan. dia udah ngobrol sama temennya: 'ternyata jalan itu punya dua sisi, kayak orang.'\n\ngue berhenti jelasin. udah dikalahin kalimat anak sendiri.",
    comments: [
      { authorId: 39, minutesAgo: 1502, content: "ganjil satu sisi, genap satu sisi. dia nemu polanya duluan dari pertanyaannya sendiri" },
      { authorId: 30, minutesAgo: 1490, content: "logika anak SD itu kadang lebih tajam dari PR-nya 😅" },
      { authorId: 5, minutesAgo: 1478, content: "dia nangkep pola, bukan hafalan. itu yang bikin jawabannya bersih" },
      { authorId: 16, minutesAgo: 1465, content: "jawaban anak gue waktu ditanya sama: 'karena jalan gak mau berantem'" },
      { authorId: 14, minutesAgo: 1450, content: "kalimat 'jalan punya dua sisi' itu layak masuk buku" },
    ],
  },
  {
    id: 46,
    authorId: 18,
    minutesAgo: 1560,
    shares: 20,
    content:
      "telur minggu lalu 28, kemarin 30. gula tetep. minyak turun 2 ribu.\n\ngue duduk depan warung mikir: naik 2 dari 28 itu persennya berapa ya. warung tutup jam 5, gue masih di kursi. tukangnya siapin teh. 'sambil itung, mas.'",
    comments: [
      { authorId: 39, minutesAgo: 1552, content: "2 dari 28 itu sekitar 7 persen. untung teh warung gak ikut naik" },
      { authorId: 48, minutesAgo: 1540, content: "minyak turun 2 itu jarang. catet tanggalnya, jarang kejadian dua kali" },
      { authorId: 5, minutesAgo: 1528, content: "naiknya kecil tapi per kilo. yang kerasa itu itungan per bulan" },
      { authorId: 31, minutesAgo: 1515, content: "tukangnya paling sabar ngadepin pelanggan begini wkwk" },
    ],
  },
  {
    id: 47,
    authorId: 22,
    minutesAgo: 1600,
    shares: 42,
    content:
      "Sore tadi anak tetangga lari bawa surat yang salah alamat ke rumah saya. Napasnya semput, wajahnya takut, 'suratnya sudah dibuka? belum ya Bu?'.\n\nSaya bilang belum, terima kasih sudah repot-repot. Dia senyum lebar dan lari lagi.\n\nAnak kecil senyum itu tidak butuh biaya. Tetapi efeknya ke saya sampai magrib.",
    comments: [
      { authorId: 16, minutesAgo: 1592, content: "anak yang jujur repotnya sendiri 😅🥰" },
      { authorId: 43, minutesAgo: 1580, content: "didikan yang baik dari rumahnya 🙏" },
      { authorId: 15, minutesAgo: 1568, content: "Anak yang jujur itu amanah kecil." },
      { authorId: 37, minutesAgo: 1555, content: "alhamdulillah masih ada anak begini" },
      { authorId: 22, minutesAgo: 1542, content: "semoga rezekinya lancar 🙏" },
    ],
  },
  {
    id: 48,
    authorId: 14,
    minutesAgo: 1650,
    shares: 22,
    content:
      "gue coba jalan pintas yang katanya lebih cepet. gue catet: rute lama 12 menit, pintas 14 menit.\n\ndua menit lebih lambat, tapi lewat pohon rambutan tetangga. keputusan final: tetep lewat pintas.\n\nmatematika boleh kalah sama pohon rambutan.",
    comments: [
      { authorId: 5, minutesAgo: 1642, content: "14 menit itu 2 menit lebih lama dari 12. secara angka memang kalah. tapi pohon rambutan gak masuk kalkulator" },
      { authorId: 26, minutesAgo: 1630, content: "di rute saya juga ada pohon. matahari terbenam lewat sana. kalah semua itungan" },
      { authorId: 39, minutesAgo: 1618, content: "tambahin rasa buahnya ke dalam itungan, pasti menang" },
      { authorId: 31, minutesAgo: 1605, content: "pohon rambutan itu patokan terbaik" },
    ],
  },
  {
    id: 49,
    authorId: 31,
    minutesAgo: 1700,
    shares: 35,
    content:
      "gue biasanya cuma baca. hari ini pengen nulis sekali: terima kasih buat yang rajin nulis panjang-panjang di sini.\n\nsore lewat kerja jadi gak berat. kerasa kayak mampir ke teras orang.",
    comments: [
      { authorId: 3, minutesAgo: 1692, content: "mampir terus. kursi selalu ada" },
      { authorId: 9, minutesAgo: 1680, content: "terima kasih sudah mampir. teras memang butuh yang duduk" },
      { authorId: 22, minutesAgo: 1668, content: "salam hangat 🙏" },
      { authorId: 34, minutesAgo: 1655, content: "jadi semangat nulisnya" },
      { authorId: 19, minutesAgo: 1642, content: "teras paling nyata jam segini" },
    ],
  },
  {
    id: 50,
    authorId: 6,
    minutesAgo: 1750,
    shares: 14,
    content:
      "katanya gosok gigi itu 2 menit. gue itung pake lagu favorit, ternyata lagunya 3 menit 20 detik.\n\nJADI GUE GOSOK KELEBEHAN.\n\nbesok gue cari lagu yang pas. doakan gue.",
    comments: [
      { authorId: 25, minutesAgo: 1742, content: "atau denger 2 menit pertama doang, sisanya di-skip. tetep kehitung gosok gigi" },
      { authorId: 32, minutesAgo: 1730, content: "lagu apa? biar aku ikut gosek 😭" },
      { authorId: 16, minutesAgo: 1718, content: "yang penting giginya bersih 😅" },
    ],
  },
]
