import type { ThreadzThread } from "../types"

// PART 4: cuitan 76-100.
//
// KAMUS SUARA:
//  29: pernah lihat judi merebut keluarga, emosinya diem-diem
//  40: tanaman & cuaca, pelan, lowercase
//  14: kering, presisi, gak banyak kata
//  32: dramatis muda, huruf panjang, emoji 😭
//  20: yakin tapi sering salah, percaya diri
//  43: acara kampung & adab, 'saya', 🙏
//   6: polos beneran, nanya serius, ketawa sendiri
//  15: bapak tua, kapital di awal, 'Saya', pelan
//  38: cewek remaja hiperbola, HAAA/GILS
//   3: cerita panjang keluarga, gak pernah kasih kesimpulan
//  18: jago harga pasar, 'lho', duduk mikir
//  36: om penasaran teknologi, nyasar itungan
//  12: pekerja shift, pendek, capek, tanpa emoji
//  35: ragu-ragu, banyak tanya, sopan
//  24: bapak anak kecil, dialog, sabar
//  50: chaos, typo, plot twist sendiri
//  16: ibu muda, huruf normal, 'aku', cerita anak
//  27: iseng ngumpulin data, gak mau jadi guru
//  22: ibu sopan, normal case, 🙏
//   2: CAPS, typo, wkwk
//   9: kampung & tetangga, panjang dikit, hangat
//  47: polos-literal, praktis
//  19: malem-malem, pendek, gak suka penutup
//  28: baru pindah rumah, sopan, banyak nanya
//  25: pertanyaan absurd, pendek
//
// ATURAN DUNIA: gak ada merek/toko/orang. angka dapur & angka jalan. aman
// bocah sampai eyang. gak ada yang jualan, gak ada yang ngajarin.
export const THREADS_PART4: ThreadzThread[] = [
  {
    id: 76,
    authorId: 29,
    minutesAgo: 3800,
    shares: 178,
    content:
      "di kampung kami ada bapak yang dulu hancur karena slot online. sekarang dia jaga anak-anak nyebrang depan sekolah tiap pagi.\n\ngue nanya sekali, 'masih kepikiran?'. dia bilang, 'pikirannya masih lewat. tapi gue gak kasih tempat duduk.'\n\nsejak hari itu gue gak gampang ngomong 'sudah selesai' ke orang yang lagi di dalamnya. orang yang jalan kelarnya tau persis harganya.",
    comments: [
      { authorId: 42, minutesAgo: 3790, content: "'gue gak kasih tempat duduk'. kalimat itu berat" },
      { authorId: 45, minutesAgo: 3780, content: "Yang pulang dari lubang seperti itu, langkahnya berbeda dari orang lain." },
      { authorId: 15, minutesAgo: 3770, content: "Semoga pagi-paginya selalu diberi kekuatan." },
      { authorId: 9, minutesAgo: 3760, content: "anak-anak nyebrang itu aman di tangan dia" },
      { authorId: 37, minutesAgo: 3750, content: "semoga terus kuat" },
      { authorId: 22, minutesAgo: 3740, content: "sembuh yang pelan-pelan 🙏" },
      { authorId: 31, minutesAgo: 3730, content: "gue baca dua kali" },
      { authorId: 19, minutesAgo: 3720, content: "pagi paling jujur itu yang di depan sekolah" },
    ],
  },
  {
    id: 77,
    authorId: 40,
    minutesAgo: 3950,
    shares: 14,
    content:
      "hujan tiga hari. cabe di pot ketawa seneng, tomat di pot sebelah kurang setuju. satu halaman, dua cuaca.\n\nbesok saya tuker tempatnya. dunia pot sederhana banget: yang gak cocok dipindah, yang cocok dijaga.",
    comments: [
      { authorId: 34, minutesAgo: 3942, content: "semoga dua-duanya bersemangat" },
      { authorId: 41, minutesAgo: 3930, content: "tanaman itu kayak orang. ada yang suka ujan ada yang gak" },
      { authorId: 22, minutesAgo: 3918, content: "semoga panennya lancar 🙏" },
    ],
  },
  {
    id: 78,
    authorId: 14,
    minutesAgo: 4100,
    shares: 18,
    content:
      "dari rumah ke pasar itu 23 lampu jalan. tadi pagi dua mati.\n\ntetep terang, tapi rasanya beda. dua dari 23 ternyata cukup buat bikin jalan kerasa sepi.\n\nangka kecil emang gak minta izin buat kerasa gede.",
    comments: [
      { authorId: 5, minutesAgo: 4092, content: "8-9 persen aja, tapi kerasanya jauh lebih dari itu" },
      { authorId: 45, minutesAgo: 4080, content: "Mata itu tidak memperbesar. Ia hanya menunjukkan." },
      { authorId: 39, minutesAgo: 4068, content: "coba itung pas malem, pasti beda lagi rasanya" },
    ],
  },
  {
    id: 79,
    authorId: 32,
    minutesAgo: 4250,
    shares: 65,
    content:
      "SUMPAH nangis tadi sore. bapak gue bawa pulang mangkok baru padahal yang lama masih ada.\n\n'yang lama buat kucing, yang baru buat kita. keluarga harus rapi.'\n\nBAPAK GUE ULANGI KALIMAT ITU DUA KALI SAMPE SEKARANG NYANGKUT",
    comments: [
      { authorId: 16, minutesAgo: 4242, content: "bapak-bapak kalau sayang ya gitu caranya 😭" },
      { authorId: 22, minutesAgo: 4230, content: "menyentuh 🙏" },
      { authorId: 46, minutesAgo: 4218, content: "'keluarga harus rapi'. simpen kalimatnya" },
      { authorId: 37, minutesAgo: 4206, content: "alhamdulillah punya bapak begini" },
      { authorId: 43, minutesAgo: 4194, content: "yang lama buat kucing itu bagian paling lucu sekaligus paling sayang 🙏" },
    ],
  },
  {
    id: 80,
    authorId: 20,
    minutesAgo: 4400,
    shares: 36,
    content:
      "gue paham: ditimbang pagi itu lebih ringan dari siang. karena semalem kita napas, yang keluar gak masuk.\n\nTOLONG ADA YANG ITUNG. kalo bener, timbangan gue pindah ke subuh. gak usah mikir, gak usah beli alat baru. cuma pindah jam.",
    comments: [
      { authorId: 5, minutesAgo: 4392, content: "arah logikanya bener. besarnya sekitar 100-200 gram. cuma timbangan dapur yang bakal sadar" },
      { authorId: 39, minutesAgo: 4380, content: "napas semaleman itu kira-kira beberapa ratus gram juga. ya udah, pindah jam aja" },
      { authorId: 35, minutesAgo: 4368, content: "terus kenapa ditimbang abis makan langsung naik? jawab dong" },
      { authorId: 47, minutesAgo: 4356, content: "pindah jam itu gratis. gue dukung" },
      { authorId: 25, minutesAgo: 4344, content: "kalo abis keramas lebih ringan gak ya?" },
      { authorId: 31, minutesAgo: 4332, content: "wkwk sains versi dapur" },
    ],
  },
  {
    id: 81,
    authorId: 43,
    minutesAgo: 4560,
    shares: 27,
    content:
      "kerja bakti pagi ini rame. yang paling tua disuruh istirahat dua kali, dua-duanya pura-pura dengerin sambil nyambung ngelap.\n\nsaluran yang ketutup daun sejak minggu lalu akhirnya jalan lagi sebelum jam 9. selesai semua, yang paling tua duluan yang bilang 'mari minum dulu'.\n\nsemua pulang bawa pinggang kaku dan kenyang.",
    comments: [
      { authorId: 9, minutesAgo: 4552, content: "yang paling tua itu presiden di lapangan" },
      { authorId: 37, minutesAgo: 4540, content: "alhamdulillah, saluran lancar" },
      { authorId: 15, minutesAgo: 4528, content: "Orang tua itu tidak pernah benar-benar diam. Ia hanya berpindah posisi." },
      { authorId: 22, minutesAgo: 4516, content: "kerja sama yang rapi 🙏" },
    ],
  },
  {
    id: 82,
    authorId: 6,
    minutesAgo: 4720,
    shares: 29,
    content:
      "kenapa ya: kalau gue nabung 5 ribu tiap hari, gue gak ngerasa makin kaya. tapi kalau gue ngeluarin 5 ribu tiap hari, gue ngerasa makin miskin banget.\n\narahnya kan beda. kok ngerasanya gak adil.",
    comments: [
      { authorId: 5, minutesAgo: 4712, content: "dua-duanya kerasa. yang ngeluarin lebih nempel di kepala. namanya juga ngerasa, bukan itungan" },
      { authorId: 48, minutesAgo: 4700, content: "makanya nabung itu jangan dianggep duit. dianggep barang yang lagi disimpen, baru kerasa" },
      { authorId: 18, minutesAgo: 4688, content: "karena yang keluar itu keliatan wujudnya, yang masuk cuma angka lho" },
      { authorId: 21, minutesAgo: 4676, content: "cara saya: nabung dulu, sisa baru buat jajan. kebalik dari biasa tapi aman" },
      { authorId: 25, minutesAgo: 4664, content: "kalo nabungnya sambil nyebut 'satu lagi, dua lagi' bakal kerasa gak ya" },
      { authorId: 31, minutesAgo: 4652, content: "sama. gue gak ngerti juga tapi gue iya-iya aja" },
    ],
  },
  {
    id: 83,
    authorId: 15,
    minutesAgo: 4880,
    shares: 34,
    content:
      "Pagi tadi hujan tiba-tiba. Di bawah tenda kecil depan toko ada empat orang menunggu. Tidak ada yang bicara, tetapi semuanya bergeser memberi tempat satu sama lain.\n\nKetika hujan reda, semua saling mengangguk seperti rekan lama. Hujan itu memang jago membuat orang rukun.",
    comments: [
      { authorId: 43, minutesAgo: 4872, content: "tenda kecil itu sekolah rukun yang gak bayar 🙏" },
      { authorId: 22, minutesAgo: 4860, content: "tenang dan hangat 🙏" },
      { authorId: 34, minutesAgo: 4848, content: "semoga hari mereka lancar" },
      { authorId: 37, minutesAgo: 4836, content: "alhamdulillah" },
      { authorId: 41, minutesAgo: 4824, content: "dulu juga begitu. tenda depan toko itu tempat semua cerita pendek" },
    ],
  },
  {
    id: 84,
    authorId: 38,
    minutesAgo: 5050,
    shares: 41,
    content:
      "HAAAA gue baru tau aturan eskalator: yang berdiri di kanan, yang ngebut jalan di kiri.\n\nGUE 17 TAHUN DI DUNIA BARU TAU. tadi pagi gue berdiri di kiri, di belakang gue ada bapak ngelus dada kayak nyetel ulang kesabarannya",
    comments: [
      { authorId: 10, minutesAgo: 5042, content: "WKWK BAPAKNYA SABAR BANGET" },
      { authorId: 25, minutesAgo: 5030, content: "kalo dua-duanya jalan gimana? jalan bareng di kanan?" },
      { authorId: 47, minutesAgo: 5018, content: "aturan itu biasanya ada tulisannya di dinding juga. kecil banget sih hurufnya" },
      { authorId: 2, minutesAgo: 5006, content: "GUE JUGA BARU TAHUN LALU. KITA SENASIB" },
      { authorId: 44, minutesAgo: 4994, content: "gue pernah diingetin baik-baik sama petugas. malu 3 hari" },
    ],
  },
  {
    id: 85,
    authorId: 3,
    minutesAgo: 5220,
    shares: 44,
    content:
      "om gue punya teori: motor banyakan lewat pas hujan mulai, bukan pas hujan gede. gue bantah, taruhan satu es teh.\n\ngue itung sendiri 15 menit di teras: pas mulai hujan 7 motor, pas gede 3. gue kalah.\n\nom gue minum es tehnya sambil bilang 'itungan itu buat yang sabar duduk.' bapak gue dari dapur: 'sabar duduk itu mahal. makanya gak semua orang punya.'",
    comments: [
      { authorId: 12, minutesAgo: 5212, content: "om-om menang teori itu paling gede senyumnya" },
      { authorId: 39, minutesAgo: 5200, content: "15 menit itu sampel kecil, tapi om gak peduli, yang penting menang. persis om saya" },
      { authorId: 26, minutesAgo: 5188, content: "gue sering itung motor juga pas nganggur di teras" },
      { authorId: 2, minutesAgo: 5176, content: "ES TEH KALAH TARUHAN ITU PALING ENAK" },
      { authorId: 31, minutesAgo: 5164, content: "'itungan itu buat yang sabar duduk'. gue simpen" },
      { authorId: 42, minutesAgo: 5152, content: "yang penting kebiasaan ngitung jalan terus. es tehnya bonus" },
    ],
  },
  {
    id: 86,
    authorId: 18,
    minutesAgo: 5400,
    shares: 26,
    content:
      "karung beras 2,5 kilo abis dalam 9 hari. gue itung sambil nunggu: sekitar 280 gram sehari. 4 orang makan, 70 gram per orang.\n\nDASAR BERAS ITU TIPU. keliatannya banyak, abisnya diam-diam.",
    comments: [
      { authorId: 33, minutesAgo: 5392, content: "280 gram sehari buat 4 orang itu mepet. berarti sering makannya di luar ya 😅" },
      { authorId: 48, minutesAgo: 5380, content: "2,5 kilo 9 hari itu 280-an sehari. itungan dapurnya bersih" },
      { authorId: 5, minutesAgo: 5368, content: "yang tipu itu bukan berasnya, tapi mata kita pas ngeliat karung" },
      { authorId: 49, minutesAgo: 5356, content: "beras paling jujur pas gaji baru masuk. abisnya itu" },
    ],
  },
  {
    id: 87,
    authorId: 36,
    minutesAgo: 5580,
    shares: 38,
    content:
      "TV tua di rumah cuma mau nyala kalau dipukul dua kali, di sisi kanan atas. kata bapak itu bukan rusak, 'sapaan'.\n\nsampai sekarang kalau bapak gak ada, kita pukul sambil bilang 'pagi, bapak'.\n\nnyala semua. 20 tahun berjalan.",
    comments: [
      { authorId: 41, minutesAgo: 5572, content: "TV zaman dulu emang paling setia. sama orangnya, sama pukulannya" },
      { authorId: 46, minutesAgo: 5560, content: "sapaan itu yang bikin awet 😅" },
      { authorId: 22, minutesAgo: 5548, content: "rumah yang hangat 🙏" },
      { authorId: 34, minutesAgo: 5536, content: "semoga 20 tahun lagi masih nyala" },
    ],
  },
  {
    id: 88,
    authorId: 12,
    minutesAgo: 5760,
    shares: 15,
    content:
      "lembur 3 jam hari ini. di kertas, 3 jam kali tarif, angkanya bikin senyum.\n\ndi kenyataan: pulang jam 11, tidur jam 12, bangun jam 5. senyumnya numpang di besok.\n\nbesok juga numpang. ya udah. kerja.",
    comments: [
      { authorId: 26, minutesAgo: 5752, content: "senyum numpang itu yang paling sering telat dateng" },
      { authorId: 1, minutesAgo: 5740, content: "sama bang. itungan kertas selalu lebih manis" },
      { authorId: 31, minutesAgo: 5728, content: "3 jam itu gede ya kalau dibanding rasanya" },
      { authorId: 42, minutesAgo: 5716, content: "yang penting dibayar sesuai kertas. itu minimal" },
    ],
  },
  {
    id: 89,
    authorId: 35,
    minutesAgo: 5950,
    shares: 31,
    content:
      "tanya: nomor undian di struk belanja itu panjangnya kenapa 12 angka? gue coba itung peluangnya di HP... gak selesai.\n\nyang gue tau: belanja tiap minggu 4 tahun, gak pernah kepanggil. yang bikin heran, iklannya selalu nunjukin yang menang.\n\nsekarang struknya gue buang di tong. hemat hati, hemat kertas.",
    comments: [
      { authorId: 5, minutesAgo: 5942, content: "peluangnya sekitar 1 banding juta-an. dan tiap undian mulai dari nol lagi. gak nyambung sama 4 tahun lamanya" },
      { authorId: 42, minutesAgo: 5930, content: "yang ditunjukin selalu yang menang. yang kalah gak diundang bicara" },
      { authorId: 45, minutesAgo: 5918, content: "Struk yang dibuang dengan sadar itu hemat dua kali." },
      { authorId: 20, minutesAgo: 5906, content: "gue juga pernah nunggu telepon. terus nunggunya gak dibayar-bayar. berhenti" },
      { authorId: 31, minutesAgo: 5894, content: "gue masih simpen struknya sampai sekarang. doakan gue gak kegoda lagi" },
    ],
  },
  {
    id: 90,
    authorId: 24,
    minutesAgo: 6140,
    shares: 39,
    content:
      "anak gue bikin daftar keinginan 7 item. gue tanya 'semua?'.\n\ndia jawab, 'nggak pap. yang penting nomor 1 sama nomor 7. sisanya buat senyum-senyum doang pas nulisnya.'\n\nanak itu ngurutin sendiri apa yang dia mau. gue 40 tahun kadang masih nyampur semua jadi satu.",
    comments: [
      { authorId: 16, minutesAgo: 6132, content: "nomor 1 sama nomor 7. itu prioritas versi anak 🥰" },
      { authorId: 46, minutesAgo: 6120, content: "anak yang tau urutan keinginannya itu jarang nangis di toko" },
      { authorId: 48, minutesAgo: 6108, content: "daftar 7 itu pas banget. kebanyakan dari 7 malah susah milih" },
      { authorId: 9, minutesAgo: 6096, content: "anak-anak gampang seneng. kita yang bikin ribet" },
      { authorId: 15, minutesAgo: 6084, content: "Keinginan yang tertata adalah hadiah bagi orang tuanya." },
    ],
  },
  {
    id: 91,
    authorId: 50,
    minutesAgo: 6330,
    shares: 12,
    content:
      "gue tiap hari bilang 'besok rapihin kamar'. udah 9 hari. besok hari ke-10.\n\nkalau besok tetep gak rapi, berarti gue gak tipu siapa-siapa kecuali diri gue sendiri. gratis pula.",
    comments: [
      { authorId: 44, minutesAgo: 6322, content: "gue juga. besok kita sama-sama mulai" },
      { authorId: 10, minutesAgo: 6310, content: "HARI KE-10 WOI. LANJUTKAN TRADISINYA" },
      { authorId: 47, minutesAgo: 6298, content: "kamar itu gak ngeluh kok. dia cuma nunggu" },
    ],
  },
  {
    id: 92,
    authorId: 16,
    minutesAgo: 6520,
    shares: 44,
    content:
      "anak gue (6) minta diitungin sampai seribu sambil diayun. jam 8 malem.\n\ngue itung sampe 300-an dia udah ngantuk. sebelum molor dia bilang, 'lanjut besok ya, dari 301.'\n\nbesok gue harus inget 301. janji anak juga janji. semoga gue gak lupa.",
    comments: [
      { authorId: 15, minutesAgo: 6512, content: "Kalau bapaknya lupa, anak akan mengingat. Memang begitu adanya." },
      { authorId: 22, minutesAgo: 6500, content: "semoga inget 301-nya 🙏" },
      { authorId: 37, minutesAgo: 6488, content: "alhamdulillah, anak yang minta diitungin itu rezeki" },
      { authorId: 43, minutesAgo: 6476, content: "anak inget semua janji 🙏" },
      { authorId: 34, minutesAgo: 6464, content: "catet di HP sekalian biar aman. anak gak maafin lupa 😅" },
      { authorId: 46, minutesAgo: 6452, content: "anak gue dulu minta mulai dari 500. gue lupa. dia gak lupa sampe sekarang" },
    ],
  },
  {
    id: 93,
    authorId: 27,
    minutesAgo: 6720,
    shares: 20,
    content:
      "gue catet 30 hari: 19 kali hujan sore. tapi anehnya, tiap gue jemur di luar, yang 19 itu kompak gak turun. yang nyamber selalu dari 11 sisa itu.\n\ngue udah ngerasa ini statistik yang sengaja nunggu jemuran.",
    comments: [
      { authorId: 40, minutesAgo: 6712, content: "hujan itu gak baca catatan. makanya gak kompatibel sama jemuran" },
      { authorId: 5, minutesAgo: 6700, content: "19 dari 30 itu sekitar 63 persen. sore-sore emang paling rawan. jemur pagi aja" },
      { authorId: 39, minutesAgo: 6688, content: "kemungkinannya memang gak adil, tapi itunganmu rapi. lanjut catet" },
      { authorId: 35, minutesAgo: 6676, content: "berarti catet 60 hari dong, biar gak curiga sama 11 itu" },
    ],
  },
  {
    id: 94,
    authorId: 22,
    minutesAgo: 6920,
    shares: 33,
    content:
      "Tadi sore menghadiri pengajian tetangga. Yang saya ingat bukan acaranya.\n\nMereka yang datang paling awal justru yang paling senyap: langsung bekerja mengangkat kursi, menyiapkan air, menjaga pintu. Tidak ada yang meminta.\n\nSaya ikut menyalami sebentar dan pulang. Cukup.",
    comments: [
      { authorId: 43, minutesAgo: 6912, content: "begitulah orang yang baik. kerja tanpa suara 🙏" },
      { authorId: 15, minutesAgo: 6900, content: "Yang datang untuk membantu tidak butuh duduk." },
      { authorId: 37, minutesAgo: 6888, content: "alhamdulillah, semoga keluarga yang diuji diberi kekuatan" },
      { authorId: 9, minutesAgo: 6876, content: "kursi, air, pintu. tiga hal yang jarang dipuji tapi paling dibutuhkan" },
    ],
  },
  {
    id: 95,
    authorId: 2,
    minutesAgo: 7120,
    shares: 28,
    content:
      "GUE ITUNG UANG RECEH 100 DI DOMPET: 23 BIJI. BERARTI 2.300.\n\nGUE PIKIR MAU BELI APA. TERUS GUE PIKIR LAGI: SIMPEN AJA. BERARTI HARI INI GUE UNTUNG 2.300 TANPA NGERJAIN APA-APA.\n\nSALAM HEMAT",
    comments: [
      { authorId: 10, minutesAgo: 7112, content: "WKWK 2.300 ITU MODAL ES TEH SATU. TAPI LO GAK MAU MINUM. RESPECT" },
      { authorId: 38, minutesAgo: 7100, content: "HAAA DOMPET GUE RECEHNYA BANYAKAN, GUE KIRA GUE KAYA" },
      { authorId: 49, minutesAgo: 7088, content: "salam hemat dari sejuta umat" },
      { authorId: 13, minutesAgo: 7076, content: "ITUNG RECEH ITU KEGIATAN PALING MENENANGKAN. SETUJU" },
      { authorId: 31, minutesAgo: 7064, content: "simpen. nanti pas lagi butuh dikit, itu nyelametin" },
    ],
  },
  {
    id: 96,
    authorId: 9,
    minutesAgo: 7330,
    shares: 25,
    content:
      "tadi pagi anak SD bantuin neneknya angkat galon naik satu lantai. dia istirahat dua kali sambil ngomel manis: 'nek, galon ini bohong. katanya 19 liter, kok rasanya 90.'\n\nneneknya ketawa. galon nyampe. laporan selesai.",
    comments: [
      { authorId: 16, minutesAgo: 7322, content: "19 liter dibawa naik itu berat beneran 😅 anak itu kuat" },
      { authorId: 46, minutesAgo: 7310, content: "ngomel manisnya yang bikin nenek muda" },
      { authorId: 37, minutesAgo: 7298, content: "alhamdulillah ada yang bantu" },
    ],
  },
  {
    id: 97,
    authorId: 47,
    minutesAgo: 7540,
    shares: 37,
    content:
      "sabun 1 batang 4 ribu. sabun 3 batang 10 ribu. gue itung, 3 kali 4 itu 12. berarti beli 3 itu hemat 2 ribu.\n\nTAPI GUE CUMA BUTUH 1. BELI 3 BERARTI GUE BELANJA 10 RIBU BUAT HEMAT 2 RIBU.\n\nGUE DIJEBOL SISTEM. ATAU GUE YANG GAK NGERTI SISTEM.",
    comments: [
      { authorId: 5, minutesAgo: 7532, content: "hemat 2 ribu itu bener, tapi cuma kalau ketiganya kepake sampai habis. yang gak kepake bukan hemat, itu stok yang nunggu" },
      { authorId: 18, minutesAgo: 7520, content: "yang 2 ribu itu bener, tapi yang jualan juga gak bodoh. dua-duanya benar" },
      { authorId: 48, minutesAgo: 7508, content: "aturan gampangnya: beli banyak cuma kalau barangnya gak basi. sabun gak basi. silakan" },
      { authorId: 2, minutesAgo: 7496, content: "HEMAT 2 RIBU ITU HEMAT WOI. GUE TEAM BELI 3" },
      { authorId: 25, minutesAgo: 7484, content: "kalo 4 batang 12 ribu gimana? tinggal nambah 2 ribu" },
      { authorId: 31, minutesAgo: 7472, content: "sistem itu gak jebol. cuma pinter ngadepin manusia" },
    ],
  },
  {
    id: 98,
    authorId: 19,
    minutesAgo: 7750,
    shares: 6,
    content:
      "jam 1 pagi ayam tetangga berkokok. salah jam.\n\ngue denger sambil senyum-senyum sendiri di kasur. satu kampung salah bareng, enak juga.",
    comments: [
      { authorId: 23, minutesAgo: 7742, content: "ayamnya juga ada yang gak bisa tidur sepertinya" },
      { authorId: 4, minutesAgo: 7730, content: "kokok salah jam itu paling lucu di dunia" },
    ],
  },
  {
    id: 99,
    authorId: 28,
    minutesAgo: 7970,
    shares: 17,
    content:
      "bulan kedua di sini. gue udah hafal jam motor sayur lewat: jam 6:40, klakson dua kali. gue nyiapin kantong jam 6:35.\n\ntetangga bilang 'lo udah lokal banget'.\n\nya jam keempat itu bahasa yang sama di mana-mana.",
    comments: [
      { authorId: 22, minutesAgo: 7962, content: "klakson motor sayur itu suara paling ramah di pagi hari 🙏" },
      { authorId: 37, minutesAgo: 7950, content: "motor sayur memang tepat waktu. lebih tepat dari banyak orang" },
      { authorId: 26, minutesAgo: 7938, content: "gue juga hafal yang di rute gue: jam 6:20. beda kampung, bahasa sama" },
    ],
  },
  {
    id: 100,
    authorId: 25,
    minutesAgo: 8200,
    shares: 9,
    content: "pertanyaan hari ini: kalau gue tidur jam 9, bangun jam 9:30, itu namanya tidur beneran atau cuma nyoba-nyoba?",
    comments: [
      { authorId: 50, minutesAgo: 8192, content: "itu namanya ngecas. cas 30 persen" },
      { authorId: 10, minutesAgo: 8180, content: "BJIR GUE SERING. ITU TIDUR VERSI PENDEK" },
      { authorId: 38, minutesAgo: 8168, content: "HAAA NYOBA-NYOBA WKWK" },
      { authorId: 31, minutesAgo: 8156, content: "gue selalu nyoba-nyoba. ampe subuh" },
    ],
  },
]
