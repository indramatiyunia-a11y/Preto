import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25. urutan: mulai dari yang lagi panas di feed
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 3,
    minutesAgo: 35,
    shares: 486,
    content:
      "udah 5 jam orang2 di sini berantem soal 0,999999... gue cuma mo bilang: angka itu sama dengan 1. bukan mendekati. SAMA. kalo lu tetep gak terima, coba sebutin satu angka di antara 0,999... sama 1. satu aja. gue tunggu sambil ngupin kopi",
    comments: [
      { authorId: 2, minutesAgo: 30, content: "gak ada angkanya karena memang belum sampe 1 bang. selamanya belum. selamanya tuh lama loh" },
      { authorId: 5, minutesAgo: 27, content: "1/3 = 0,333... x 3 = 0,999... dan 1/3 x 3 ya 1. selesai. masalah lu bukan di angka, di nolaknya" },
      { authorId: 17, minutesAgo: 24, content: "ya jelas beda dong, kan tulisannya beda. 1 sama 0,999... kaya bapak sama papa, beda panggilan" },
      { authorId: 9, minutesAgo: 21, content: "gue pernah berantem ini sama kakak kelas taun 2019 sampai dimarahin satpam warnet. hari ini barulah gue damai" },
      { authorId: 25, minutesAgo: 18, content: "kalo 0,999=1 berarti 1,999=2 dong. IYA KAN? KAN?!" },
      { authorId: 11, minutesAgo: 15, content: "iya. semua angka yang ujungnya ...999 punya dua nama. selamat, lu nemuin pola" },
      { authorId: 31, minutesAgo: 11, content: "gue gak paham satu pun tapi gue ikut penasaran terus baca semua komen. ini olahraga apa gimana" },
      { authorId: 41, minutesAgo: 8, content: "matematikawan ngerangkum perdebatan 2000 tahun jadi 'selesai, masalah lu di nolaknya'. gila sih ini keren" },
      { authorId: 46, minutesAgo: 5, content: "adek gue ampir nangis pas dijelasin ini. skalanya beda2 ternyata penderitaannya" },
      { authorId: 24, minutesAgo: 2, content: "nama lain dari 1 itu 0,999... sama kayak nama lain dari es teh di warung itu 'teh anget'. isi sama, label beda" },
    ],
  },
  {
    id: 2,
    authorId: 13,
    minutesAgo: 60,
    shares: 812,
    content:
      "SERIUS NYA. 6÷2(1+2) ITU 1 KAN. TEMEN GUE BILANG 9 SAMPAI MAKI2. TERUS GUE CEK KALKULATOR, KALKULATORNYA NYABUNTEM SAMA TEMEN GUE. KALKULATORNYA YANG BEGO KAN???",
    comments: [
      { authorId: 5, minutesAgo: 55, content: "9 bang. kali dan bagi itu sebaya, dikerjain dari kiri: 6÷2 = 3, terus 3 x 3 = 9. kalkulatornya gak bego, dia patuh aturan" },
      { authorId: 17, minutesAgo: 50, content: "TAPI KATA BU GURU TANDA KURUNG DULU" },
      { authorId: 1, minutesAgo: 44, content: "tanda kurungnya udah dikerjain bang. 1+2 itu yang duluan. sisanya 6÷2 x 3. kurungnya gak dianggurin, dia udah pulang" },
      { authorId: 6, minutesAgo: 38, content: "gue guru TK. jawabannya 'angka'. selamat siang" },
      { authorId: 18, minutesAgo: 30, content: "soal ini emang doang nge-test siapa yang sok yakin. konvensi kiri ke kanan: 9. tapi yang jawab 1 gak bodoh, cuma nurut konvensi lain. yang bodoh yang maki2" },
      { authorId: 28, minutesAgo: 20, content: "ini war tahunan. kayak mudik, kayak arisan, kayak naiknya harga cabai. gak ada habisnya dan kita udah nyaman" },
      { authorId: 41, minutesAgo: 8, content: "gue tanya bapak gue, dia jawab 'isi dulu gelasnya'. turun gunung dulu kayaknya" },
    ],
  },
  {
    id: 3,
    authorId: 9,
    minutesAgo: 90,
    shares: 655,
    content:
      "tetangga rumah gue motor-nya dijual semalem. buat apa? buat slot. motornya buat anter anak sekolah. anaknya nangis di depan rumah, bapaknya sibuk di warung internet. gue gak lagi lebay, gue cuma liat langsung gimana slot itu ngambil duit orang dari tangan anaknya sendiri. kalo ada yang baca ini lagi main slot: itu mesin, bukan hoki. dia didesain buat menangnya dia, bukan lu. berhenti sekarang, jangan tunggu yang dijual motor lu sempat jadi anak lu sendiri",
    comments: [
      { authorId: 22, minutesAgo: 80, content: "sebelah rumah mertua gue juga. gajian tanggal 1, tanggal 3 udah gadai emas. yang ditabung buat cicilan malah masuk sana. ngeri ngeliatnya" },
      { authorId: 42, minutesAgo: 70, content: "faktanya gini: RTP slot 90-an persen itu bukan berarti lu menang 90%. itu artinya dari semua duit yang masuk, mesin ambil sisanya. makin lama makin dalam. hukumnya udah ditulis sebelum lu duduk" },
      { authorId: 31, minutesAgo: 58, content: "gue pernah fase gitu. yang bikin berhenti bukan sadar diri, tapi udah gak ada lagi yang bisa dijual. semoga tetangga lu sadar sebelum segitu" },
      { authorId: 4, minutesAgo: 45, content: "ada yang bisa jelasin kenapa yang kena tuh orang2 yang gaji kecil? yang gaji gede kan juga ada yang main" },
      { authorId: 42, minutesAgo: 33, content: "karena buat yang gaji kecil, 50rb itu rasanya kayak pintu harapan. buat yang gaji gede, 50rb itu debu. mesinnya jahat ke yang paling gak mampu rugi" },
      { authorId: 16, minutesAgo: 20, content: "post ini harus dibaca anak2 yang baru gajian. serius" },
      { authorId: 12, minutesAgo: 9, content: "semoga anaknya kembali naik motor bapaknya. bener2 semoga" },
    ],
  },
  {
    id: 4,
    authorId: 21,
    minutesAgo: 120,
    shares: 431,
    content:
      "jelasin dikit soal pinjol biar ada yang kepikiran dua kali sebelum teken: bunga 20% per bulan itu gak berhenti di 20%. itu bunga berbunga. 1 juta, bulan pertama jadi 1,2. bulan kedua dihitung dari 1,2. setahun: 1 juta jadi sekitar 8,9 juta. delapan koma sembilan. dari SATU juta. yang gak dibahas iklannya: angka ini gak paham kata 'nanti deh'. dia jalan tiap hari, sabar, dan gak capek",
    comments: [
      { authorId: 3, minutesAgo: 110, content: "gue pernah itung KSSK temen. pokok 3jt, total dibayar 11jt dalam setahun. dia kira dia 'nyicil'. dia nyicil ke jurang" },
      { authorId: 19, minutesAgo: 95, content: "kok bisa 8,9 juta dari 1 juta?? gue gak percaya. coba diitung ulang" },
      { authorId: 14, minutesAgo: 80, content: "1,2 dipangkatkan 12 = 8,916. itung pake kalkulator, tombol x= aja. ini bukan opini, ini kenal pangkat" },
      { authorId: 26, minutesAgo: 60, content: "adik sepupu gue begitu. keluarga nanggung sampai 2 tahun buat nutup 4jt yang jadi 13jt. nanggung tagihannya" },
      { authorId: 37, minutesAgo: 40, content: "yang bikin gila, aplikasinya gampang banget didapet. 5 menit, duit cair. kalau mau bayar, 5 bulan" },
    ],
  },
  {
    id: 5,
    authorId: 1,
    minutesAgo: 160,
    shares: 288,
    content:
      "dibawa pulang brosur motor, cicilan 36 bulan 'bunga cuma 7%'. gue itung totalnya: lebih 4 juta dari harga tunai. 7% dari 20 juta kan 1,4 juta. kok 4 juta? gue screenshot terus googling 'apa itu bunga flat'. ternyata gue dibebanin bunga buat duit yang udah gue bayarin. kereta yang udah lewat tetep ditagih tiketnya",
    comments: [
      { authorId: 5, minutesAgo: 150, content: "itu bunga flat. dihitung dari pokok awal terus2an, padahal hutang lu tinggal separuh di bulan ke-18. bunga efektifnya bisa 12-13%. brosur gak bohong, dia cuma gak jelasin" },
      { authorId: 31, minutesAgo: 130, content: "anjir baru nyambung. jadi gue selama ini bayar bunga buat duit yang udah gue seret ke rumah" },
      { authorId: 28, minutesAgo: 100, content: "toko gue nawarin cicilan 0%. bunganya pindah ke 'biaya admin'. ganti baju, orangnya sama" },
      { authorId: 44, minutesAgo: 70, content: "prinsip gue sekarang: kalo gak sanggup bayar tunai 2x, berarti belum mampu beli 1x. kejam tapi nyelametin" },
      { authorId: 21, minutesAgo: 30, content: "minta simulasi total pembayaran secara tertulis sebelum tanda tangan. sales-nya kaget, lu lega" },
    ],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 200,
    shares: 156,
    content:
      "gue tetep yakin 1 kg kapas lebih berat dari 1 kg besi. kan kantong kapasnya gede. gede itu berat. logika. pas gue tanya ke guru, beliau cuma diem 10 detik terus lanjut ngajar. KENAPA DIEM. kalau gak bisa jawab bilang aja",
    comments: [
      { authorId: 5, minutesAgo: 190, content: "1 kg ya 1 kg bang. yang gede volumenya, bukan beratnya. timbangan gak peduli bentuk" },
      { authorId: 17, minutesAgo: 170, content: "tapi kapasnya banyak bangeeet" },
      { authorId: 9, minutesAgo: 150, content: "banyak itu jumlah bang, bukan berat" },
      { authorId: 6, minutesAgo: 120, content: "oke kalo 1 kg kapas jatuh ke kepala gue sama 1 kg besi jatuh ke kepala lu. beda kan sakitnya? ITU BUKTI" },
      { authorId: 11, minutesAgo: 90, content: "itu bukti besi lebih padat, bukan lebih berat. dua besaran beda. gue mohon" },
      { authorId: 46, minutesAgo: 50, content: "anak gue debat ini 1 jam di dalam mobil. yang nyerah gue, padahal gue yang benar" },
      { authorId: 25, minutesAgo: 15, content: "gue udah gak yakin sama apapun sekarang. thanks" },
    ],
  },
  {
    id: 7,
    authorId: 4,
    minutesAgo: 240,
    shares: 97,
    content:
      "tanggal 20. saldo 87rb. sisa hari sebelum gajian 10. jadi 8.700 per hari. masalahnya besok ada pengajian, sabtu kondangan kantor, dan anak gue minta buat 'buatan sendiri' untuk tugas sekolah yang ternyata butuh lem, kertas karton, sama pewarna. 8.700 per hari itu gak termasuk harga keikhlasan",
    comments: [
      { authorId: 16, minutesAgo: 220, content: "8.700/hari tapi kondangan?? lu mau ngasih amplop isinya doa ya bang" },
      { authorId: 12, minutesAgo: 190, content: "gue tanggal 15 udah bokek. lu masih ada 87rb, itu namanya kaya. relatif" },
      { authorId: 34, minutesAgo: 140, content: "kalau udah segini, gue mulai masak nasi + telur dadar 3 hari. betah karena terpaksa" },
    ],
  },
  {
    id: 8,
    authorId: 11,
    minutesAgo: 300,
    shares: 205,
    content:
      "rapor anak gue: rata-rata kelas 75. kedengerannya oke. gue minta data mentah ke wali kelas: 28 murid dari 30 dapet 60an. dua anak dapet 98. rata-rata naik gara2 dua orang itu. median kelasnya 62. jadi anak gue yang dapet 70 itu sebenernya di atas mayoritas temen-nya. angka tunggal itu bisa ngebohong pake data beneran",
    comments: [
      { authorId: 30, minutesAgo: 280, content: "ini yang gak ngajarin di sekolah. mean itu gampang dibikin cantik sama 2 orang" },
      { authorId: 49, minutesAgo: 240, content: "bapak ini nanya data mentah ke wali kelas. level parenting gak biasa. respect" },
      { authorId: 33, minutesAgo: 180, content: "di kantor juga gini. 'rata-rata gaji kami 15jt' padahal median-nya 6. satu orang direktur menaikkan harga martabat satu perusahaan" },
    ],
  },
  {
    id: 9,
    authorId: 20,
    minutesAgo: 360,
    shares: 133,
    content:
      "kasir: 'diskonnya 50% terus tambah 20%' gue langsung jawab 70%. dia diem. gue diem. gue bayar. tapi sampe sekarang di dalem hati gue tetep yakin itu 70% DAN gue kebayang bayarannya kurang gede. kenapa gak 70. KENAPA",
    comments: [],
  },
  {
    id: 10,
    authorId: 5,
    minutesAgo: 420,
    shares: 720,
    content:
      "gacha itu mesin slot yang pake kostum karakter. rate 1,6% itu dihitung, diuji, dan disetujui biar perasaan 'sebentar lagi dapet' itu tetep hidup lebih lama dari uang lu. temen sekelas dulu keluar 4 juta dalam sebulan. karakternya dapet. dua minggu main. sekarang jadi ikon di layar yang dia gak buka lagi. kalo mau main, budgetin sekeras-kerasnya. mesin itu gak pernah bosen, yang bosen harusnya lu duluan",
    comments: [
      { authorId: 2, minutesAgo: 400, content: "tapi temen gue dapat 2x sehari. berarti rate-nya bohong" },
      { authorId: 15, minutesAgo: 370, content: "itu varians. yang zonk gak pamer. yang untung bikin konten" },
      { authorId: 9, minutesAgo: 340, content: "gz. gue 84 pull dapat yang gak gue pengen. matematikanya tetep jalan, emosinya yang telat" },
      { authorId: 35, minutesAgo: 300, content: "gue dulu kira kalau topup pas hujan peluangnya naik. sedih ya kalo diinget" },
      { authorId: 27, minutesAgo: 260, content: "tiap pull itu independen. dunia gak nyimpen hutang ke lu, gak peduli udah zonk berapa" },
      { authorId: 44, minutesAgo: 210, content: "gue hapus game-nya 2 tahun lalu. bukan karena kuat, karena hapusnya pas gaji belum cair. kadang keputusan bagus dateng dari timing yang kejam" },
      { authorId: 46, minutesAgo: 150, content: "screenshot saldo rekening jadi wallpaper HP gue. works. jalannya pelan tapi works" },
      { authorId: 8, minutesAgo: 90, content: "expected cost per karakter itu ratusan ribu sampai jutaan tergantung luck. intinya: kalo gak siap zonk total, jangan mulai" },
      { authorId: 31, minutesAgo: 40, content: "thread ini harus nempel di pintu warnet dan di lockscreen anak kos seluruh indo" },
      { authorId: 25, minutesAgo: 12, content: "gue baca ini pake HP yang kelarin 3jt kuota gacha taun lalu. irony level dewa" },
    ],
  },
  {
    id: 11,
    authorId: 16,
    minutesAgo: 500,
    shares: 88,
    content:
      "kondangan saudara, masuk 5 kepala keluarga. amplop 200rb dari kas keluarga. terus panitia minta 'satu nama keluarga aja di buku tamu'. jadi di buku tamu cuma nama kakak gue. gue nyumbang 40rb, gak keliatan, gak tercatat, gak diteriakin MC. matematika sosial lebih ribet dari integral",
    comments: [
      { authorId: 34, minutesAgo: 470, content: "gue pernah jadi yang namanya ditulis. gak nyumbang. legendaris" },
      { authorId: 49, minutesAgo: 420, content: "solusi keluarga gue: amplop ditulis semua nama, nyumbang di grup WA sebelum acara. transparan kayak koperasi" },
    ],
  },
  {
    id: 12,
    authorId: 2,
    minutesAgo: 560,
    shares: 121,
    content:
      "minus kali minus kok jadi PLUS sih. gue utang 3. gak dibayar. terus utangnya dihapus. kok malah kerasa untung?? utang yang hilang itu plus buat gue kan. TERUS KENAPA MATEMATIKA NGAJARIN YANG SUSAH KALAU HASILNYA KAYAK GITU AJA",
    comments: [
      { authorId: 27, minutesAgo: 540, content: "utang dihapus itu bukan plus kali plus bang, itu penalti gak ada. beda tabel, beda aturan" },
      { authorId: 20, minutesAgo: 480, content: "gue baca 3x dan makin dalam lu. tapi gue ikut seneng" },
    ],
  },
  {
    id: 13,
    authorId: 22,
    minutesAgo: 640,
    shares: 41,
    content:
      "isi token listrik 50rb, masuk 43rb. gue tanya petugas, katanya 'PPN, pajak abnormal, biaya administrasi'. administrasi apa yang harganya 7rb? posisinya dia lagi duduk, nge-scan, terus nyerahin struk. itu 3 detik kerja. 7rb. gue mau kerja jadi administrasi",
    comments: [],
  },
  {
    id: 14,
    authorId: 8,
    minutesAgo: 720,
    shares: 310,
    content:
      "hitung bareng: kuota 10GB buat 30 hari = 333MB per hari. video 480p makan sekitar 300MB per jam. jadi kuota lu didesain buat 1 jam hiburan per hari, sisanya buat WA dan ngecek jam. begitu lu scroll 2 jam, kuota habis, terus lu nyalahin sinyal. bukan sinyal. itu desain harga",
    comments: [
      { authorId: 46, minutesAgo: 690, content: "gue ngerasa diliatin sama thread ini sambil ngecek kuota gue. bener. 333MB" },
      { authorId: 14, minutesAgo: 640, content: "kabarnya 5G lebih irit kuota? gak. lebih cepet = makin gampang gede data yang kebawa" },
      { authorId: 33, minutesAgo: 560, content: "pake wifi kantor buat yang gede2, kuota HP cuma buat darurat. hidup lebih tenang" },
    ],
  },
  {
    id: 15,
    authorId: 25,
    minutesAgo: 800,
    shares: 66,
    content:
      "KALO 5! = 5x4x3x2x1, KENAPA 0! = 1?? DIKALIIN SEMUA SAMPE NOL KAN HARUSNYA NOL. MATEMATIKA LAGI NGARANG DIA SENDIRI",
    comments: [
      { authorId: 11, minutesAgo: 770, content: "5! = 5x4!, 4! = 4x3!, terus turun terus... sampe 1! = 1x0!. biar aturannya konsisten, 0! harus 1. bukan ngarang, ngestop tangga biar gak amblas" },
    ],
  },
  {
    id: 16,
    authorId: 28,
    minutesAgo: 900,
    shares: 74,
    content:
      "kantor gue lantai 3, tangganya 48 anak tangga. tiap pagi gue itung sambil naik. 48 x 16cm = 7,68 meter. tiap hari gue naik 7,68 meter pake kaki. udah 4 taun. kalo dijumlah: 5,6 km. GUE SUDAH NAIK GUNUNG 5,6 KM DAN BADAN GUE MASIH AJA GINI. angka gak bisa diboongin, tapi angka juga gak bisa bikin badan bagus. disindir angka sendiri",
    comments: [
      { authorId: 37, minutesAgo: 870, content: "naik 5,6km tapi makan 3 porsi. netral" },
      { authorId: 12, minutesAgo: 800, content: "nyata. gue naik tangga kampus 4 taun, berat gue naik 12kg. tangga gak bisa dipersalahkan" },
    ],
  },
  {
    id: 17,
    authorId: 18,
    minutesAgo: 1000,
    shares: 195,
    content:
      "bunga matahari di depan kos ada 3 batang. gue hitung spiralnya pas nunggu hujan reda: 34 sama 55. fibonacci. tumbuhan aja lebih disiplin dari gue soal angka. minimal gue bisa samain disiplinnya buat jadwal tidur. minimal",
    comments: [],
  },
  {
    id: 18,
    authorId: 46,
    minutesAgo: 1100,
    shares: 58,
    content:
      "8 km, 1 jam 40 menit. kecepatan rata-rata 4,7 km per jam. GUE JALAN KAKI DARI RUMAH KE KANTOR LEBIH CEPET DARI ITU. besok gue coba. kalo macet, gue macet di atas sepeda minimal. gengsi mahal, bensin juga mahal, niat gratis",
    comments: [],
  },
  {
    id: 19,
    authorId: 17,
    minutesAgo: 1250,
    shares: 149,
    content:
      "beli 1 gratis 1 kan sama aja diskon 100% ya. TERUS KOK YANG GUE BAYAR TETEP 25RB. yang gratis yang mana. yang mana yang gratisnya. kasirnya bilang 'yang kedua bang'. yang kedua itu gratis apa nggak sih. JAWAB",
    comments: [
      { authorId: 36, minutesAgo: 1220, content: "beli 1 gratis 1 itu diskon 50% bang. lu bayar 25rb dapet 2 = 12,5rb per pcs. gratisnya muncul kalo lu rencananya emang mo beli 2" },
      { authorId: 31, minutesAgo: 1180, content: "makanya yang benernya itu 'hemat 50% kalo lu mo beli dobel'. marketing itu seni bikin lu ngerasa menang" },
      { authorId: 47, minutesAgo: 1100, content: "gue beli 1 gratis 1 terus kasih satu ke adek gue. harga 25rb buat jadi orang baik. worth it" },
    ],
  },
  {
    id: 20,
    authorId: 24,
    minutesAgo: 1400,
    shares: 522,
    content:
      "jelasin santai soal tes medis: penyakitnya jarang, 1 dari 1000 orang. tesnya bagus, akurasi 99%. lu tes, hasilnya positif. gak usah panik dulu. hitung: dari 100.000 orang, 100 beneran sakit, dari mereka 99 kedeteksi. dari 99.900 yang sehat, 999 kedeteksi salah. jadi dari 1.098 orang yang positif, cuma 99 yang beneran sakit. sekitar 9%. bukan 99%. ini namanya base rate, dan dokter2 pun pernah ketuker. tes ulang itu wajar, bukan penghakiman",
    comments: [
      { authorId: 3, minutesAgo: 1350, content: "ini thread yang pernah nyelametin gue dari bayar terapi macem2 dulu. hasil positif dua kali, tes molekuler negatif. base rate ajaib" },
      { authorId: 19, minutesAgo: 1300, content: "gue baca 2x baru ngerti. penasaran kenapa ini gak dijelasin waktu serahin hasil" },
      { authorId: 42, minutesAgo: 1200, content: "dokter gak salah juga sih, mereka nyusul dengan pemeriksaan lanjutan. yang bahaya kita nyimpulin sendiri sebelum ditanya balik" },
      { authorId: 48, minutesAgo: 1100, content: "sebagai orang yang kerja di lab: kita ngasih angka, bukan vonis. thread ini jelasin bedanya dengan bagus" },
      { authorId: 31, minutesAgo: 950, content: "9% vs 99%. beda 90%. gue sekarang jadi takut sama angka yang gak dijelasin konteksnya" },
      { authorId: 12, minutesAgo: 700, content: "share ke grup keluarga. semoga ada yang tenang abis baca" },
      { authorId: 36, minutesAgo: 400, content: "intinya: tes bagus + penyakit jarang = banyak positif palsu. gampang diingetnya kayak 'sepatu bagus gak nyampein lu ke langit'" },
    ],
  },
  {
    id: 21,
    authorId: 19,
    minutesAgo: 1600,
    shares: 84,
    content:
      "bensin 20rb = 35 km = 571 perak per km. rumah ke kantor 9 km, bolak balik 18 km = 10rb sehari. 22 hari kerja = 220rb per bulan buat bensin doang. gaji gue 3,2jt bersih. jadi sebelum gue sempet mikir, 7% gaji udah terbang di pom. angka2 kecil itu gak pernah numpang, dia nginap terus",
    comments: [],
  },
  {
    id: 22,
    authorId: 35,
    minutesAgo: 1800,
    shares: 117,
    content:
      "persen itu makhluk sosial. diskon 50% dari harga baju kerasa gede, diskon 50% dari waktu kerja kerasa biasa aja. diskon 50% gaji?? GILA. PADAHAL SAMA-SAMA SETENGAH. persen gak punya moral, dia nyantol di situasi. makanya iklan suka pake persen, bukan pake cerita",
    comments: [
      { authorId: 5, minutesAgo: 1750, content: "secara teknis lu bener, secara pemasaran iklan selalu pake cerita DAN persen. dobel pukulan" },
      { authorId: 40, minutesAgo: 1650, content: "50% diskon sepatu: WAJIB BELI. 50% kerja dari rumah: masih mikir2. manusia emang gitu" },
      { authorId: 45, minutesAgo: 1500, content: "dalam statistik ini namanya framing effect. lu gak bego, lu normal. manusia normal itu gampang dibohongin, makanya penting ngerti angka" },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 2000,
    shares: 92,
    content:
      "kucing tidur 16 jam sehari. itu 2/3 hidupnya. kucing gue umur 9 tahun, berarti dia udah 'nghidup' cuma 3 tahun dari 9. sisanya mimpi ikan. gue iri sampai gue ngecek diri sendiri: 9 taun terakhir gue gak tidur 16 jam, gue scroll 16 jam versi terbagi. kita satu keluarga yang sangat sehat",
    comments: [],
  },
  {
    id: 24,
    authorId: 37,
    minutesAgo: 2300,
    shares: 63,
    content:
      "bank. layar: 'antrean 12 orang, estimasi 40 menit'. kasirnya 2, tapi yang satu khusus nasabah prioritas. jadi buat gue, kasir efektif 1. 40 menit buat transfer 200rb ke mama. transaksi paling penting dengan layanan paling lambat. gue gak marah sama kasirnya, dia juga antrean. gue cuma mo bilang: sistem itu matematika yang dikostum jadi pelayanan",
    comments: [
      { authorId: 1, minutesAgo: 2250, content: "nasabah prioritas itu gak pernah diliat. kayak pokemon legend. mereka dateng pas lu lagi hampir maju" },
      { authorId: 31, minutesAgo: 2150, content: "m-banking 3 menit selesai. gue cuma ke sini pas musti tanda tangan fisik. 40 menit itu harga tanda tangan" },
      { authorId: 4, minutesAgo: 2000, content: "gue minta nomor antrean jam 9 pagi, dipanggil jam 11. itu bukan antrean, itu penginapan" },
    ],
  },
  {
    id: 25,
    authorId: 10,
    minutesAgo: 2600,
    shares: 71,
    content:
      "gue ngitung 1234 x 5678 pake kertas hasilnya 7.006.652. kalkulator HP bilang 7.006.652. sama persis. gue coba lagi. SAMA LAGI. kalkulator ini ngecopy jawaban gue. KASIH KREDIT DONG",
    comments: [],
  },
]
