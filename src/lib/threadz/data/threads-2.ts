import type { ThreadzThread } from "../types"

// PART 2: cuitan 26-50.
// Suara lanjutan part 1. Beberapa akun mulai keliatan dunianya:
//  27 : kepala gudang, kalimat kabel-telegraf, angka
//  45 : bapak pensiunan, "Saya", kalimat panjang tenang
//  34 : komuter kereta, pendek datar
//  49 : koas rumah sakit, jam-jam aneh, gak selesai mikirnya
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 2,
    minutesAgo: 780,
    shares: 24,
    content:
      "GUE SIMPAN MIE DI KOS BUAT GAWAT-DARURAT. KEMARIN ADA KEGAWATDARURATAN. KEGAWATDARURATANNYA: TEMEN GUE LAPAR JAM 1 PAGI. GUE KASIH 2 BUNGKUS. HARI INI GUE BUKA LEMARI. SISA SATU. SATU! YANG KEGAWATDARURATAN SEKARANG SIAPA?! WKWKWK. BESOK GUE BELI LAGI DAN GUE TULIS NAMA GUE DI KEMASANNYA. PULSA-AN, TANPA PAMRIH.",
    comments: [
      { authorId: 38, minutesAgo: 770, content: "TULIS NAMA ITU GAK EFEKTIF, TEMEN BACA JUGA WKWKWK. KASIH GOSOK GELAP DI KEMASANNYA" },
      { authorId: 11, minutesAgo: 758, content: "di kos gue sistemnya kebalikan: yang naruh mie wajib naruh catatan siapa yang ambil. malah rame" },
      { authorId: 50, minutesAgo: 745, content: "katanya mie gawat darurat harus dimasak bener. gue makan mentah aja bisa. prihatin sama diri sendiri" },
      { authorId: 2, minutesAgo: 732, content: "GOSONG-SONG DARI KEMASANNYA. SAMA TEMEN GUE. INGET ITU" },
      { authorId: 44, minutesAgo: 719, content: "YAUDAH ganti kunci lemari. eh gue lupa lemari kos gak ada kuncinya. YAUDAH" },
    ],
  },
  {
    id: 27,
    authorId: 27,
    minutesAgo: 810,
    shares: 23,
    content:
      "stok kemarin: 342 dus. hari ini hitung: 339. selisih 3. gak ada yang hilang. cuma salah naruh, masuk rak sama yang kecil.\n\nmakanya gak pernah bikin laporan sebelum langsung ke rak. lantai gudang lebih jujur dari catatan.",
    comments: [
      { authorId: 12, minutesAgo: 799, content: "di gudang kami juga. catatan 40, lantai 40, tapi beda jenis. dua-duanya benar tapi kacau" },
      { authorId: 39, minutesAgo: 786, content: "selisih 3 dari 342 itu 0,87 persen. masih wajar, tapi memang harus ditrace" },
      { authorId: 27, minutesAgo: 773, content: "0,87 persen tetep nyari selama setengah hari. angka gak kasihan" },
    ],
  },
  {
    id: 28,
    authorId: 3,
    minutesAgo: 840,
    shares: 21,
    content:
      "Hari ini koreksi ulangan di kelas 4. Delapan anak menjawab soal pembagian dengan cara yang tidak saya ajarkan: mereka membagi dulu yang besar, sisa potongannya dibagi dua. Jawabannya benar. Alasannya bervariasi, dari 'biar adik dapat' sampai 'karena yang kecil enak dipotong terakhir'.\n\nSaya tidak mengoreksi satu pun. Catatan saya: cara mereka lebih mudah dilakukan dengan tangan daripada cara di buku.",
    comments: [
      { authorId: 30, minutesAgo: 828, content: "adikku juga gitu, membagi kue dulu yang besar biar sisa kecilnya adik sendiri yang pegang" },
      { authorId: 39, minutesAgo: 815, content: "membagi besar dulu lalu sisa dibagi dua itu sebenarnya cara distribusi yang dipakai di gudang juga. anak-anak menemukan logistik" },
      { authorId: 18, minutesAgo: 802, content: "ini yang bikin seneng ngajar ya, nemu cara yang gak ada di buku" },
      { authorId: 28, minutesAgo: 789, content: "kalau anakku jawab gitu nanti aku takut dia dianggap salah. sekarang tenang karena baca ini" },
    ],
  },
  {
    id: 29,
    authorId: 9,
    minutesAgo: 870,
    shares: 45,
    content:
      "ronda mulai jalan lagi di gang. jadwalnya di papan pos, tulisan spidol. kemarin ujan, luntur, pak RT nulis ulang. gak ada yang protes, yang protes cuma pak RT sendiri, bilang 'spidol ini mahal juga lho'.\n\ngiliran gue nanti jumat. yang bawa cuma senter. senter rumah, yang baterainya bisa digongso dikit kalau redup.",
    comments: [
      { authorId: 37, minutesAgo: 856, content: "spidolnya mahal tapi tulisannya mau luntur juga. sama seperti semuanya" },
      { authorId: 22, minutesAgo: 842, content: "semoga aman ronda-rondanya 🙏" },
      { authorId: 26, minutesAgo: 828, content: "bang kalau giliran ronda pas hujan, biasanya gak jadi kan? gue pernah jadi satu-satunya yang dateng pas hujan, lucu banget" },
      { authorId: 42, minutesAgo: 814, content: "baterai digongso itu jurus klasik. di bengkel gue juga pake itu buat lampu sorot" },
    ],
  },
  {
    id: 30,
    authorId: 45,
    minutesAgo: 900,
    shares: 19,
    content:
      "Pagi ini saya berjalan ke ujung kampung, seperti biasa pukul enam. Warung kopi belum buka. Saya duduk di bangku beton depannya, menunggu dua puluh menit. Tidak ada yang mendesak saya, tidak ada telepon, tidak ada laporan. Dahulu waktu masih bekerja, menunggu dua puluh menit terasa seperti membengkak. Sekarang terasa seperti bagian dari pagi.",
    comments: [
      { authorId: 41, minutesAgo: 887, content: "Pensiun itu menunggu yang tidak membuat bersalah. Selamat menikmati pak." },
      { authorId: 46, minutesAgo: 874, content: "gue yang masih kerja sampe baca 'tidak ada yang mendesak' rasanya kayak naik gunung wkwk" },
      { authorId: 7, minutesAgo: 860, content: "Saya juga sering duduk di bangku beton dekat warung. Kadang itu tempat terbaik untuk melihat jam berapa." },
      { authorId: 45, minutesAgo: 846, content: "Bener, Bang. Bangku beton itu kursi paling jujur di kampung." },
      { authorId: 22, minutesAgo: 832, content: "semoga sehat selalu, Pak 🙏" },
    ],
  },
  {
    id: 31,
    authorId: 50,
    minutesAgo: 930,
    shares: 12,
    content:
      "katanya naruh bawang di kulkas bikin tahan lama. gue coba. SEMINGGU. kulkas jadi bau bawang. terus katanya naruh kopi bisa ngilangin bau. gue coba. SEKARANG KULKAS BAU BAWANG KOPI. gue buka kulkas rasanya kayak ditinggal orang. wkwk. besok gue coba tips lagi, siapa tau yang ini beda",
    comments: [
      { authorId: 33, minutesAgo: 917, content: "coba arang dari tungku bekas, itumu yang bener bisa nyedot bau. kaleng kecil aja" },
      { authorId: 13, minutesAgo: 904, content: "GUE PERCAYA TIPS LU. GAK PERNAH GAGAL. YANG GAGAL ITU CARA NARUHNYA" },
      { authorId: 16, minutesAgo: 890, content: "bawang mahal sekarang, bau-bau doang sayang 😄" },
      { authorId: 50, minutesAgo: 876, content: "OK ARANG. dicatet. kalo gagal gue lapor ke sini lagi wkwk" },
    ],
  },
  {
    id: 32,
    authorId: 23,
    minutesAgo: 960,
    shares: 2,
    content: "lampu jalan di ujung gang mati tiga hari. malem-malem gang jadi lebih bisik-bisik.",
    comments: [],
  },
  {
    id: 33,
    authorId: 16,
    minutesAgo: 990,
    shares: 41,
    content:
      "jemuran kemarin ketangis ujan jam 3 sore. aku jemur ulang malam, sekarang ujan lagi jam 6 pagi. jemuran gantung di teras dalam, rapi tapi lembab. aku itung: kalau cuaca begini 4 hari lagi, cucian 2 bak mandi.\n\nya udah, besok aku cuci yang penting doang. seragam, handuk, sarung. sisanya nunggu. bulan ini air juga naik, tapi itu urusan lain, yang sekarang yang kering dulu.",
    comments: [
      { authorId: 48, minutesAgo: 977, content: "Cuci yang penting saja itu keputusan yang tepat. Sisanya menunggu, bukan menunda." },
      { authorId: 1, minutesAgo: 964, content: "jemuran ujan itu musuh ibu-ibu sejagat 😅 aku juga baru kemarin" },
      { authorId: 33, minutesAgo: 950, content: "coba jemur di dalam ruangan deket kipas, biasanya lebih cepet dari keliatannya" },
      { authorId: 22, minutesAgo: 936, content: "semoga besok cerah, biar jemuranmu kering semua 🙏" },
      { authorId: 7, minutesAgo: 922, content: "Menurut catatan saya tiga hari terakhir hujan mulai pukul 4-6. Jemuran sore memang kecil kemungkinannya kering." },
    ],
  },
  {
    id: 34,
    authorId: 44,
    minutesAgo: 1020,
    shares: 12,
    content:
      "sepeda gue ban belakangnya kempes di tengah jalan. gue turunin, gue liat, gak ada paku. anginnya doang yang ngambek. gue pompa 5 menit, jalan 200 meter, kempes lagi. YAUDAH. gue gandeng sepeda ampe bengkel. ongkos: 5 ribu. ban: gak diganti, cuma digongso. YAUDAH. besok naik kaki aja kali ya",
    comments: [
      { authorId: 42, minutesAgo: 1005, content: "ban yang cuma kurang angin mah gak usah diganti. bawa pompa mini 20 ribu sekali beli, seumur hidup" },
      { authorId: 20, minutesAgo: 990, content: "bro gandeng sepeda mending gue anter, gak nyampe setengah km itu" },
      { authorId: 44, minutesAgo: 975, content: "makasih bro, tapi besok gue coba jalan kaki dulu. latihan juga" },
    ],
  },
  {
    id: 35,
    authorId: 8,
    minutesAgo: 1050,
    shares: 23,
    content:
      "dosen pembimbing gue balas email rata-rata 6 hari. gue kirim revisi bab 3 9 hari lalu. belum dibalas. kemarin gue kirim lagi, isinya cuma nanya kabar. dibalas 3 menit. BERARTI DIA ONLINENYA SEHARIAN TAPI PILIH MAILNYA.\n\nya udah. gue nerusin ngetik. angket 37 responden. menunggu itu juga kerjaan, kayaknya.",
    comments: [
      { authorId: 18, minutesAgo: 1036, content: "nanya kabar itu trik. sering works. wkwk" },
      { authorId: 49, minutesAgo: 1022, content: "di rumah sakit juga gitu, tanya pasien langsung dibalas, kirim laporan nunggu" },
      { authorId: 28, minutesAgo: 1008, content: "9 hari itu panjang bang. semangat, bab 3 bab paling duraka" },
      { authorId: 8, minutesAgo: 994, content: "iya. sabar. dosen juga manusia, mungkin juga lagi banyak responden sendiri wkwk" },
      { authorId: 39, minutesAgo: 980, content: "rata-rata 6 hari tapi balas nanya kabar 3 menit. sebarannya menarik untuk diteliti" },
      { authorId: 8, minutesAgo: 966, content: "bener banget. sayangnya skripsi gue bukan tentang dosen" },
    ],
  },
  {
    id: 36,
    authorId: 12,
    minutesAgo: 1080,
    shares: 8,
    content:
      "lembur 3 jam. gaji lembur belum jelas. yang jelas: kaki gue gak mau naik tangga lagi. tidur di lantai aja deh.",
    comments: [
      { authorId: 34, minutesAgo: 1066, content: "lembur tanpa gaji jelas itu kerja sukarela dengan seragam" },
      { authorId: 12, minutesAgo: 1052, content: "iya. tapi ya begitulah. udah ah, males mikir" },
    ],
  },
  {
    id: 37,
    authorId: 1,
    minutesAgo: 1110,
    shares: 26,
    content:
      "PR matematika anakku diselesaikan papanya semalam. saya bilang biarkan dia yang kerjain, papanya bilang 'iya, cuma ngecek doang'. jam 9 malam saya dengar mereka berdua masih ngitung. jam 10 papanya keluar kamar duluan, muka penuh keringat, bilang 'soalnya susah'.\n\nanaknya udah tidur jam 9. soalnya yang ngerjain selesai jam 10. besok saya pesenin PR buat papanya aja kali ya.",
    comments: [
      { authorId: 46, minutesAgo: 1095, content: "PR anak itu ujian buat orangtuanya. kita yang gugur dulu wkwk" },
      { authorId: 3, minutesAgo: 1081, content: "Orang tua yang ikut menghitung sampai berkeringat biasanya anaknya jadi berani mencoba juga." },
      { authorId: 38, minutesAgo: 1067, content: "SUMPAH PAPANYA SAMA KAYAK TEMEN KOS GUE, MUKA KERINGAT KELUAR KAMAR" },
      { authorId: 48, minutesAgo: 1053, content: "Catat soal mana yang susah. Nanti kalau menemui gurunya, bisa ditanyakan langsung." },
      { authorId: 1, minutesAgo: 1039, content: "iya aku catat, besok kubawa ke sekolah. biar gurunya juga tau rasanya wkwk" },
    ],
  },
  {
    id: 38,
    authorId: 46,
    minutesAgo: 1140,
    shares: 35,
    content:
      "anak gue 15 tahun tadi malam: 'pap, gak usah anter besok. gue naik angkot sendiri.' gue jawab oke.\n\npagi ini gue tetep ngikutin dari belakang naik motor, jarak 30 meter. dia naik angkot di halte, gue liat dia duduk deket jendela. dia gak liat gue. ya udah. gak usah dia tau.",
    comments: [
      { authorId: 9, minutesAgo: 1124, content: "bapak-bapak ngikutin sambil ngaku gak ngikutin. hobi nasional" },
      { authorId: 28, minutesAgo: 1110, content: "anaknya pasti nanti tau juga waktu dia bawa motor sendiri, terus dia yang ngikutin bapaknya. nangis itu" },
      { authorId: 34, minutesAgo: 1096, content: "gue komuter, tiap pagi liat begini di halte. kadang anak yang dijaga tau, cuma pura-pura gak liat. biar bapaknya seneng" },
      { authorId: 45, minutesAgo: 1082, content: "Menjaga dari kejauhan adalah pekerjaan bapak yang paling tidak terlihat. Terima kasih sudah berbagi." },
    ],
  },
  {
    id: 39,
    authorId: 13,
    minutesAgo: 1170,
    shares: 30,
    content:
      "GUYS GUE BARU TAU: BELI 2 ITU LEBIH MURAH DARI BELI 1 DUA KALI. makanya gue beli roti 2 sekaligus. padahal gue sendirian. logika banget kan. TERUS ROTINYA KEDUA KADALUARSA. gue maksa makan. perut gue kebagian 2 roti, dompet gue kebagian hemat 2 ribu. FIX. MENANG. wkwk",
    comments: [
      { authorId: 5, minutesAgo: 1156, content: "hemat 2 ribu, rugi satu roti kedaluwarsa 3 ribu. bersih rugi 1 ribu. tapi menang dalam cerita" },
      { authorId: 39, minutesAgo: 1142, content: "beli 2 lebih murah per bungkusnya, bukan totalnya. yang nambah cuma isi perut" },
      { authorId: 44, minutesAgo: 1128, content: "YAUDAH makan roti kedaluwarsa itu sukarela kan. GUE PERNAH. GAK ADA APA2 KECUALI PENYESALAN" },
      { authorId: 6, minutesAgo: 1114, content: "klo beli 3 gimana? lebih murah lagi gak? tanya serius" },
      { authorId: 13, minutesAgo: 1100, content: "BESOK GUE COBA 3. LAPORAN MENYUSUL. WKWKWK" },
    ],
  },
  {
    id: 40,
    authorId: 34,
    minutesAgo: 1200,
    shares: 7,
    content:
      "kereta telat 40 menit. di peron gak ada pengumuman. semua orang liat papan berulang-ulang kayak makanya bisa berubah. gue jajan kopi. 5 ribu. telatnya jadi terasa dibayar.",
    comments: [
      { authorId: 12, minutesAgo: 1187, content: "kopi peron itu obat paling murah buat telat" },
      { authorId: 26, minutesAgo: 1174, content: "gue juga. kalau telat 30 menit gue beli kacang. kalau 1 jam gue beli bakso. sistemnya jelas" },
      { authorId: 34, minutesAgo: 1161, content: "besok kalau telat 1 jam berarti bakso. doain gak telat, bakso mahal" },
    ],
  },
  {
    id: 41,
    authorId: 5,
    minutesAgo: 1230,
    shares: 21,
    content:
      "ibu flu, warung buka setengah hari. jam 12 tutup. penjualan kemarin 310 ribu, hari ini sampai tutup 96 ribu. rugi sekitar 200-an. tapi ibu tidur, dan kaleng teh di dapur masih ada. kalau warung rugi tapi ibu sembuh, itu bukan rugi. ya gitu.",
    comments: [
      { authorId: 16, minutesAgo: 1215, content: "ibu sehat itu untung yang gak masuk buku tulis" },
      { authorId: 39, minutesAgo: 1201, content: "96 dari 310 itu sekitar 31 persen. semoga besok balik normal" },
      { authorId: 22, minutesAgo: 1187, content: "semoga ibunya cepat sembuh 🙏" },
      { authorId: 14, minutesAgo: 1173, content: "kalau ke warung tetangga, biasanya aku tinggalin pesenan buat besok. biar tetep jalan walau singkat" },
    ],
  },
  {
    id: 42,
    authorId: 20,
    minutesAgo: 1260,
    shares: 30,
    content:
      "servis motor kemarin. mekanik bilang rantai kendor. gue bilang biarin. rantai kendor bikin gue jalan pelan. gue mah butuh jalan pelan. mekanik senyum-senyum ngesek rantainya juga. TERUS KENAPA DISEK?! mungkin biar gak terlalu kendor. ya udah. pokoknya motor gue sekarang pelan tapi yakin. kayak gue",
    comments: [
      { authorId: 42, minutesAgo: 1246, content: "rantai kendor itu ngesek sama gigi. sekali dua kali gak kerasa, lama-lama giginya tipis. pelan tapi yakin menuju bengkel lagi" },
      { authorId: 44, minutesAgo: 1232, content: "pelan tapi yakin, terus dibawa ke bengkel. hidup gue" },
      { authorId: 26, minutesAgo: 1218, content: "gue ojol, rantai gue dikencengin tiap 2 bulan. hemat banget biaya servisnya" },
      { authorId: 13, minutesAgo: 1204, content: "KENDOR DIKIT GAK DOSA BRO. FINAL. KECUALI SAMPE LEPAS. ITU MAHAL" },
    ],
  },
  {
    id: 43,
    authorId: 18,
    minutesAgo: 1290,
    shares: 14,
    content:
      "rapat organisasi tadi 3 jam. agenda: 5. yang keputusannya: 1. keputusannya: rapat lanjut minggu depan.\n\ngue itung di buku catatan: total jam rapat semester ini 21 jam, keputusan 6. rata-rata 3,5 jam per keputusan. ya udah, gue catet lagi. gak jadi pindah organisasi, gak jadi juga jadi ketua. jadi penulis notulen yang hidup tenang.",
    comments: [
      { authorId: 8, minutesAgo: 1276, content: "notulen itu pekerjaan paling jujur di organisasi. semua orang tau siapa yang bener-bener dengar" },
      { authorId: 28, minutesAgo: 1262, content: "3,5 jam per keputusan itu efisien wkwk organisasi gue 3 jam per (gak jadi apa2)" },
      { authorId: 45, minutesAgo: 1248, content: "Semua keputusan besar dimulai dari rapat yang membosankan. Sabar." },
      { authorId: 43, minutesAgo: 1234, content: "aku yang njahit seragam acara, tiap rapat begitu aku cuma inget ukuran lengan tiap orang. sama-sama tenang aja" },
      { authorId: 18, minutesAgo: 1220, content: "ya. tenang. catatan itu sisa yang paling tahan lama" },
    ],
  },
  {
    id: 44,
    authorId: 42,
    minutesAgo: 1320,
    shares: 26,
    content:
      "macet tadi siang di depan bengkel. pelanggan panik masuk, ban motor belakangnya lepek. gue cek: gak bocor. angin doang. gue tanya terakhir pompa kapan. dia bilang 'ngapain pompa, ada gak ada bedanya'.\n\nbedanya 12 kilometer sebelum bannya kena spakbor. angin 32 itu bukan angin hias. 5 menit pompa, gratis, gak sampai magrib.",
    comments: [
      { authorId: 26, minutesAgo: 1305, content: "bener banget. gue ojol tiap subuh pompa. beda kerasa banget pas bawa penumpang" },
      { authorId: 20, minutesAgo: 1290, content: "32 itu buat muatan normal ya bro? gue biasa 40, bawa bensin 2 liter sama tupperware" },
      { authorId: 42, minutesAgo: 1276, content: "40 buat yang muatannya penuh oke. harian mah 30-32, ban awet dan jalan tetap ringan" },
      { authorId: 9, minutesAgo: 1262, content: "gratis pompa di bengkel begini itu salah satu bapak terbaik kampung" },
    ],
  },
  {
    id: 45,
    authorId: 38,
    minutesAgo: 1350,
    shares: 26,
    content:
      "KULKAS KOS KITA 3 ORANG. GUE NARUH ES KRIM, DITULIS NAMA GUE DI TUTUPNYA. BALIK DARI KELAS: SISA WRAP DAN SENDOK. SENDOK DOANG. HAAHAHA GILA. YANG MAKAN BILANG 'AKU KIRA MILIK SEMUA'. MILIK SEMUA?! NAMANYA TERTULIS. TULISANNYA ITU. BESOK GUE NARUH KUNCI LEMARI DI ES KRIM. WKWKWK GILA GUE IKUTAN GILA",
    comments: [
      { authorId: 26, minutesAgo: 1335, content: "es krim dengan kunci lemari itu gabungan paling aman di dunia kos" },
      { authorId: 2, minutesAgo: 1321, content: "WKWKWK SENDOK DOANG ITU INSAF BANGET. SETIDAKNYA DIBERSIHKAN" },
      { authorId: 50, minutesAgo: 1307, content: "gue denger es krim yang ditulis nama itu tahan 1 jam. yang gak ditulis tahan 2 menit. statistik kos" },
      { authorId: 47, minutesAgo: 1293, content: "aku kerja kasir, orang yang bilang 'aku kira milik semua' itu tipe yang juga nawar harga yang udah jelas" },
      { authorId: 28, minutesAgo: 1279, content: "SUMPAH KULKAS KOS ITU DUNIA KEDUA. GUE NARUH JUS, BALIKNYA JUS TINGGAL SISA SERET" },
      { authorId: 44, minutesAgo: 1265, content: "YAUDAH beli es krim yang bisa dibeli satuan, tiap hari beli. hemat hati" },
    ],
  },
  {
    id: 46,
    authorId: 41,
    minutesAgo: 1380,
    shares: 12,
    content:
      "arisan kampung kemarin. giliran saya tahun lalu, tahun ini tulisan saya keluar lagi. saya yakin pencatatannya keliru, saya bilang 'pak, coba cek lagi'. hasilnya bener. dua kali berturut-turut. semua orang bilang hoki. saya bilang gak hoki, saya yakin kertasnya yang sering diaduk-aduk. ya udah, saya terima juga. uangnya buat biaya gang.",
    comments: [
      { authorId: 45, minutesAgo: 1366, content: "Menyangsang hasil undian tetap sopan itu bagus. Yang menarik, Anda tetap menerima dengan rasa tanggung jawab." },
      { authorId: 39, minutesAgo: 1352, content: "keluar dua kali berturut-turut memang jarang. kalau pesertanya 20 orang, kemungkinannya sekitar 1 banding 380" },
      { authorId: 41, minutesAgo: 1338, content: "1 banding 380? berarti saya orang yang beruntung, bukan kertas yang salah. oke saya hoki" },
      { authorId: 14, minutesAgo: 1324, content: "uangnya buat biaya gang, itu berkah pak. hoki yang dipakai buat orang lain" },
    ],
  },
  {
    id: 47,
    authorId: 7,
    minutesAgo: 1410,
    shares: 9,
    content:
      "Saya mencatat waktu hujan di kertas kalender bekas. Tiga hari ini mulai pukul empat sore. Jemuran pindah ke teras dalam. Dicatat lagi besok.",
    comments: [
      { authorId: 33, minutesAgo: 1396, content: "catatan sederhana tapi paling sering disalahkan sama cuaca wkwk" },
      { authorId: 5, minutesAgo: 1382, content: "di warung kami juga catat hujan, karena yang dateng sore naik kalau hujan gak. jadi tahu harus nyiapin apa" },
      { authorId: 45, minutesAgo: 1368, content: "Catatan kecil yang dilakukan terus-menerus menjadi ilmu rumah tangga. Lanjutkan, Pak." },
      { authorId: 7, minutesAgo: 1354, content: "Terima kasih. Kalender bekasnya masih banyak halaman. Cukup sampai akhir tahun." },
    ],
  },
  {
    id: 48,
    authorId: 43,
    minutesAgo: 1440,
    shares: 17,
    content:
      "pesanan seragam tim futsal anak-anak, 12 potong, ukurannya beda-beda. catetanku ampe 2 halaman: leher, dada, lengan, panjang. anak paling kecil tanya 'bu, kok ukurannya aku paling kecil?' aku jawab 'biar muat'. dia senyum. pekerjaan seperti ini yang buat aku gak mau berhenti jahit.",
    comments: [
      { authorId: 48, minutesAgo: 1425, content: "Menjahit untuk anak-anak adalah pekerjaan yang hasilnya tumbuh bersama mereka." },
      { authorId: 1, minutesAgo: 1411, content: "anak paling kecil selalu paling manyun soal ukuran 😄 tapi pas muat dia paling bangga" },
      { authorId: 43, minutesAgo: 1397, content: "iya, besok dia minta dijahit nama di punggung. sudah dua kali minta" },
      { authorId: 46, minutesAgo: 1383, content: "anak gue dulu minta nomor di punggung, nomornya umur dia. sekarang baju udah kecil, nomor masih sama" },
    ],
  },
  {
    id: 49,
    authorId: 49,
    minutesAgo: 1470,
    shares: 23,
    content:
      "jaga malam. jam 3 pagi semua pasien tidur. gue duduk di pos, kopi ke-3, gelasnya udah gak panas. di ruang jaga jam dinding suaranya kegedean. gue itung: shift selesai jam 7, tersisa 4 jam. 4 jam itu gak pernah kerasa 4 jam. kadang kerasa 40 menit, kadang kerasa seminggu.\n\nudah ah, ngetik juga bikin ngantuk gak dateng.",
    comments: [
      { authorId: 12, minutesAgo: 1455, content: "jam 3 pagi itu jam paling jujur. badan bilang tidur, tugas bilang jaga" },
      { authorId: 8, minutesAgo: 1441, content: "4 jam yang kadang 40 menit kadang seminggu itu persis rasanya nunggu balasan dosen wkwk" },
      { authorId: 22, minutesAgo: 1427, content: "semoga ada waktu tidur yang cukup nanti, terima kasih jaga malam 🙏" },
      { authorId: 49, minutesAgo: 1413, content: "ada. sore nanti. itu rencananya. rencana juga gak selalu jadi wkwk" },
      { authorId: 31, minutesAgo: 1399, content: "ampun jam 3 pagi masih nulis, capek banget dah" },
    ],
  },
  {
    id: 50,
    authorId: 15,
    minutesAgo: 1500,
    shares: 5,
    content:
      "Ada payung tergeletak di depan rumah tetangga sejak Selasa. Sudah tiga hari. Belum ada yang mengambilnya. Saya juga belum. Mungkin pemiliknya sedang berpikir, sama seperti saya.",
    comments: [
      { authorId: 45, minutesAgo: 1485, content: "Payung yang menunggu tiga hari biasanya sudah menjadi milik jalan. Tapi menunggu lebih sopan." },
      { authorId: 23, minutesAgo: 1470, content: "payung itu kayak sinyal hidup. ada, tapi gak ada yang ambil" },
    ],
  },
]
