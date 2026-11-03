import type { ThreadzThread } from "../types"

// PART 4: cuitan 76-100. penutup: problema, kearifan, dan satu thread paling rame
export const THREADS_PART4: ThreadzThread[] = [
  {
    id: 76,
    authorId: 26,
    minutesAgo: 45,
    shares: 152,
    content:
      "gaji 4,8jt. jam kerja 8/hari x 22 hari = 176 jam. gaji per jam: 27rb. naik ojol ke kantor 12rb per arah. gue baru sadar: perjalanan ke tempat gue dihargai setengah harga kerja gue per jam. logistik itu gak dibayar, dia dipotong. tiap pagi gue 'bayar' buat bisa mulai kerja",
    comments: [
      { authorId: 45, minutesAgo: 38, content: "kalo ditambah waktu tempuh: 2 jam/hari x 22 = 44 jam. 44 jam itu 5,5 hari kerja gratis buat jalan. lu kerja 27,5 hari, dibayar 22" },
      { authorId: 7, minutesAgo: 20, content: "ini yang bikin wfh bahkan 2 hari seminggu kerasa kayak kenaikan gaji. hemat waktu = hemat duit, cuma beda bentuk" },
    ],
  },
  {
    id: 77,
    authorId: 3,
    minutesAgo: 90,
    shares: 173,
    content:
      "keponakan nanya: 'om, kok ngitung 1+1 cepet, 48291 x 9182 lama? kliknya sama kan.' ITU PERTANYAAN YANG BAGUS. klik lu sama, kerja mesin beda. jumlah digit nambah, langkah perkalian ikut nambah. sama kayak di kantor: 'ya udah coba dulu'-nya satu kalimat, kerjanya seminggu. klik sama, durasi gak pernah adil",
    comments: [
      { authorId: 14, minutesAgo: 80, content: "itu namanya complexity. anak kecil yang nanya itu cocok jadi programmer. siapin HP lama buat dia mainin kalkulator" },
      { authorId: 46, minutesAgo: 60, content: "'ya udah coba dulu' satu kalimat vs seminggu kerja. gue ngerasa diliat langsung sama thread ini" },
      { authorId: 27, minutesAgo: 35, content: "jawabannya juga: perkalian pake algoritma, langkahnya nambah per digit. kalkulator gak mikir, dia ngikutin resep. resep panjang = lama" },
    ],
  },
  {
    id: 78,
    authorId: 2,
    minutesAgo: 130,
    shares: 66,
    content:
      "kenapa 6 takut sama 7? soalnya 7 8 9. EITSIH. kalo gitu 7 itu kannibal. dan 10 aman. 9-nya pulang dengan trauma. matematika itu ternyata punya cerita serem juga, gak cuma angka2 kering",
    comments: [],
  },
  {
    id: 79,
    authorId: 40,
    minutesAgo: 180,
    shares: 241,
    content:
      "makan di luar 25rb x 2 orang x 22 hari = 1,1jt. masak: beras 120rb + lauk 400rb + sayur 150rb + gas 20rb = 690rb buat 30 hari. hemat 400an per bulan. TAPI masak makan 1 jam/hari = 30 jam/bulan. 30 jam itu kalo dipake kerja side job 27rb/jam = 810rb. JADI MASAK ITU RUGI 400RB?? terus gue sadar: side job 30 jam itu gak ada. yang ada cuma jam tidur. jadi masak tetep menang. kalkulator kalah sama kenyataan",
    comments: [
      { authorId: 43, minutesAgo: 170, content: "side job 30 jam/bulan itu ada kok, namanya lembur. tapi kalo pilih antara lembur vs masak sendiri buat 1,1jt... gue pilih tidur" },
      { authorId: 37, minutesAgo: 150, content: "masak itu juga skill yang turunannya seumur hidup. gak bisa dihitung per bulan. anak lu nanti makan enak, itu return 20 taun lagi" },
      { authorId: 26, minutesAgo: 120, content: "gue itung beneran: masak sendiri buat 2 orang itu sekitar 15-20rb/porsi kecuali lauknya mahal. makan luar 25rb itu standar sekarang. selisihnya tipis banget di kota gede" },
      { authorId: 12, minutesAgo: 90, content: "kuncinya kulkas: bahan yang gak jadi masak = rugi 100%. makanya masak 1x buat 2 hari. kalkulator + kulkas = strategi" },
      { authorId: 46, minutesAgo: 50, content: "ini thread paling jujur soal 'hemat masak sendiri'. gak selalu hemat, tapi hampir selalu lebih sehat. dan sehat itu... ya, mahal kalo dihitung mundur dari biaya rumah sakit" },
    ],
  },
  {
    id: 80,
    authorId: 18,
    minutesAgo: 240,
    shares: 218,
    content:
      "promo resto: 'beli 2 pizza medium lebih hemat daripada 1 large'. cek: large 30cm itu luasnya 707 cm persegi. medium 20cm, dua2nya = 628 cm persegi. SATU large itu LEBIH BANYAK dari DUA medium. resto tau ini. lu kira hemat, lu kehilangan 79 cm persegi pizza. matematika di meja makan itu senjata, bukan pelajaran",
    comments: [
      { authorId: 24, minutesAgo: 230, content: "luas naik kuadrat, keliling naik linear. makanya yang gede selalu lebih 'banyak'. pizzeria paling ngerti geometri" },
      { authorId: 42, minutesAgo: 200, content: "gue selalu pesen large 1. temen2 gue pesen 2 medium 'biar bisa beda topping'. kenyataannya yang kebanyakan topping cuma 1: topping penyesalan" },
    ],
  },
  {
    id: 81,
    authorId: 13,
    minutesAgo: 300,
    shares: 79,
    content:
      "orang indo (yang ikut adat tiongkok) gak suka angka 4 karena kedengeran 'mati'. TAPI kamar rumah sakit nomor 4 tetep penuh. lantai 4 lift tetep diteken. JADI takutnya selektif. takut yang murah, berani yang mahal. manusia itu makhluk yang ngitung pake rasa dulu, angka belakangan",
    comments: [
      { authorId: 45, minutesAgo: 290, content: "ini psikologi risk. takut pada yang gak bisa dikontrol harganya, santai pada yang bisa. angka 4 gratis buat ditakutin, rumah sakit gak bisa ditolak" },
      { authorId: 31, minutesAgo: 260, content: "kamar 4 di RS itu bukan pilihan, itu kebutuhan. takut boleh, sakit tetep ditangani. kita manusia, bukan kalkulator" },
      { authorId: 20, minutesAgo: 220, content: "di apartemen gue gak ada lantai 4. dari 3 langsung 5. artinya lantai 5 itu sebenarnya lantai 4 yang ganti nama. pendiam yang paling ramai" },
    ],
  },
  {
    id: 82,
    authorId: 23,
    minutesAgo: 360,
    shares: 103,
    content:
      "ronda 8 jam, 4 orang, 30 rumah. per rumah = 1,6 jam jaga. gue jaga 8 jam dan rumah gue juga dijaga sama 3 orang lain 8 jam. matematikanya adil, badan gue yang protes. tugas utama jam 2 pagi cuma satu: GAK TIDUR. gajinya nasi bungkus sama rasa 'ini kampung gue'. nasi bungkus itu kecil, rasa itu gak ada di bon",
    comments: [],
  },
  {
    id: 83,
    authorId: 5,
    minutesAgo: 420,
    shares: 355,
    content:
      "urutan operasi matematika itu sebenarnya kurikulum hidup yang dijual murah: kurung dulu = urusan pribadi selesaikan sebelum urusan bareng. pangkat sebelum kali = skill naikin dulu sebelum ngomongin gaji. kali bagi sebelum tambah kurang = arus kas tetap dulu sebelum neraca emosi. kiri ke kanan kalau seangkatan = urusan selevel, selesaiin satu2, gak lompat. guru gue dulu cuma bilang 'hafal'. padahal itu panduan hidup 16 kata",
    comments: [
      { authorId: 11, minutesAgo: 405, content: "gue guru. gue bakal curi cara jelasin ini. besok pagi kelas 7 bakal mikir mereka belajar hidup, padahal cuma KABATA" },
      { authorId: 27, minutesAgo: 370, content: "'arus kas dulu baru emosi' itu prinsip keuangan rumah tangga paling gampang diinget. siapin print out, tempel di kulkas" },
      { authorId: 45, minutesAgo: 330, content: "tambah satu: tanda kurung boleh bersarang = urusan besar ada di dalam urusan kecil. buka dari paling dalam. yang paling deket, selesaikan duluan" },
      { authorId: 22, minutesAgo: 280, content: "16 kata itu. gue share ke grup keluarga. mama gue bales: 'yang penting kerjain'. MAMA ITU KOMPILEK ERROR, DIA KERJA LANGSUNG" },
      { authorId: 4, minutesAgo: 220, content: "thread ini yang bikin gue akhirnya ngerti kenapa 2+3x4 = 14 bukan 20. sekian taun gue itung 20 dengan penuh percaya diri. semoga lu bahagia" },
    ],
  },
  {
    id: 84,
    authorId: 10,
    minutesAgo: 480,
    shares: 44,
    content:
      "listrik 2200 watt. watt itu tenaga. kalo gue makan 2 porsi, gue watt-nya berapa? GAK ADA DI KALKULATOR. ilmu yang katanya lengkap, ternyata gak bisa ngitung makan. gak lengkap kan",
    comments: [
      { authorId: 24, minutesAgo: 470, content: "itu kalori bang. 2 porsi nasi sekitar 500 kkal. watt itu tenaga per detik, kalori itu energi. satu keluarga besar, beda jabatan" },
    ],
  },
  {
    id: 85,
    authorId: 37,
    minutesAgo: 550,
    shares: 121,
    content:
      "kaki gue ukuran 42. merk A pas. merk B kekecilan. merk C kegedean. PADAHAL 42 SEMUA. ukuran itu opini, kaki itu fakta. tiap merk pake standar sendiri pake penjelasan 'last shape-nya beda'. last shape. lu denger itu. jadi gue harus NYOBAIN tiap sepatu, tiap merk, tiap model. beli sepatu online itu judi, dan tiketnya ongkir",
    comments: [
      { authorId: 19, minutesAgo: 540, content: "42 merk A = 42, merk B = 43, merk C = 41. itu bukan ukuran, itu ramalan. gue sepatu kerja aja ke toko biar yakin" },
      { authorId: 49, minutesAgo: 480, content: "solusi aneh tapi jalan: catat ukuran per merk di catatan HP. gue punya tabel 'ukuran sepatu menurut 6 merk'. hidup jadi ilmiah" },
    ],
  },
  {
    id: 86,
    authorId: 33,
    minutesAgo: 620,
    shares: 197,
    content:
      "murid protes: 'pak, kan ada kalkulator, kenapa harus hafal 7x8?' gue jawab: ada GPS pun orang tetep diajarin baca jalan. kalkulator itu alat bantu, bukan pengganti nalar. kalo lu gak tau kira2 7x8 itu sekitar 50-an, lu gak akan sadar pas lu salah tekan 7+8. nalar itu alarm rumah. kalkulator itu tamu. tamu gak punya akses alarm",
    comments: [
      { authorId: 27, minutesAgo: 605, content: "estimasi dulu baru kalkulasi. 7x8 ~ 7x8=56. kalo kalkulator bilang 15, alarm bunyi. gak hafal = gak punya alarm" },
      { authorId: 11, minutesAgo: 560, content: "sebagai sesama guru: murid yang hafal tabelnya itu lebih berani nyoba soal susah. bukan soal cepet, soal gak takut sama angka" },
    ],
  },
  {
    id: 87,
    authorId: 35,
    minutesAgo: 700,
    shares: 88,
    content:
      "postingan bilang: perbaiki 1% tiap hari, setahun jadi 37x lebih baik. GUE MULAI KEMARIN. hari ini hari ke-2. nilai gue sekarang 1,02. tersisa 363 hari menuju 37x. GUE SUDAH DI JALUR. motivasi: gue. matematika: belum mau ngomong",
    comments: [
      { authorId: 24, minutesAgo: 690, content: "semangat bang. cuma pengingat kecil dari temen: 0,99^365 = 0,025. jangan sampai bolong ya. 1 hari bolong itu 1%, 2 hari itu 2%, itu bukan diskon" },
      { authorId: 20, minutesAgo: 660, content: "gue support tapi gue juga tau hari ke-9 lu bakal share 'hari ini gak ada yang berubah'. ITU NORMAL. lanjut aja" },
      { authorId: 44, minutesAgo: 620, content: "1,02 itu naik. kecil tapi naik. arah itu udah menang sebelum angka ngejar. follow up ya bang, gue bookmark" },
    ],
  },
  {
    id: 88,
    authorId: 49,
    minutesAgo: 780,
    shares: 203,
    content:
      "bon gue di warung deket kos: 87rb. ibunya nyatet di buku tulis halaman 12, baris 3, pake pulpen. gue nanya 'bu, gak takut gak dibayar?' beliau jawab: 'yang takut kan lu'. DIA BENER. sistem pencatatan ibu warung itu lebih kuat dari aplikasi apapun: dia pegang relasi, bukan cuma data. gue bayar hari itu juga, plus beli kopi yang gak gue butuh",
    comments: [
      { authorId: 22, minutesAgo: 765, content: "buku bon ibu warung itu database paling aman di negara ini. gak bisa diretas, cuma bisa ditagih" },
      { authorId: 4, minutesAgo: 730, content: "'yang takut kan lu' itu rangkaian kata paling efektif buat menyelesaikan utang. gak ada reminder app yang sanggup" },
      { authorId: 37, minutesAgo: 690, content: "gue pernah bon 120rb pas di-PHK. ibu warungnya bilang 'bayarnya lama2 gak apa2, makan tetap'. gue sekarang gak pernah pindah warung. relasi itu bukan angka, tapi dia nyimpen angka" },
      { authorId: 31, minutesAgo: 640, content: "plus beli kopi yang gak gue butuh WKWK. itu bukan biaya tambahan, itu biaya martabat. gue ngerti banget" },
      { authorId: 26, minutesAgo: 590, content: "ini yang gak ngajarin di kelas: sistem keuangan paling tahan krisis itu warung. mereka bikin kredit tanpa bunga karena mereka hitung pake muka, bukan skor" },
    ],
  },
  {
    id: 89,
    authorId: 21,
    minutesAgo: 860,
    shares: 117,
    content:
      "besok gerhana sebagian. inget ya: JANGAN pake colongan bekas mie instan, JANGAN pake kacamata hitam biasa, JANGAN percaya 'sebentar doang'. mata itu gak bisa di-upgrade. beda sama HP. cara aman: live stream, atau kardus bolong pake alat proyeksi. fisika itu kadang bentuk lain dari kata 'jangan'",
    comments: [
      { authorId: 18, minutesAgo: 850, content: "'fisika itu bentuk lain dari kata jangan' gue quote ini. gue tau orang yang merokok sambil nunggu gerhana pakai colongan. dua keputusan buruk dalam satu sore" },
    ],
  },
  {
    id: 90,
    authorId: 6,
    minutesAgo: 940,
    shares: 57,
    content:
      "kopi 3in1 = kopi + gula + krimer = 3. terus ada 2in1. terus kopi hitam sachet itu 1in1? KOK GAK DIJUAL 1in1? terus kopi tubruk itu 0in1? INI SISTEMNYA GIMANA. gue cuma mau ngopi, gue malah mikir aljabar",
    comments: [],
  },
  {
    id: 91,
    authorId: 4,
    minutesAgo: 1020,
    shares: 141,
    content:
      "THR 1x gaji: 4,8jt. pengeluaran lebaran: baju 4 orang 1,2jt, kue 350rb, mudik bensin + tol 700rb, amplop anak2 40 x 20rb = 800rb, oleh2 400rb. total 3,45jt. sisa 1,35jt buat 3 minggu sebelum gajian lagi. TAHUN INI GUE NABUNG SEMANGAT. bunganya 0%, tapi beku buat dipake, dan gak bisa dicairin",
    comments: [
      { authorId: 43, minutesAgo: 1005, content: "'nabung semangat, bunga 0%, beku' WKWK. gue juga punya rekening itu, isinya niat baik tiap taun" },
      { authorId: 16, minutesAgo: 950, content: "amplop 40 anak x 20rb. gue cek rumah keluarga gue: 60 anak. semoga gaji gue taun depan ngerti makna THR: Terima Hari ini, Rampok besok" },
    ],
  },
  {
    id: 92,
    authorId: 48,
    minutesAgo: 1100,
    shares: 163,
    content:
      "duit kita: 100rb merah, 50rb biru, 20rb hijau, 10rb ungu, 5rb coklat. tiba2 gue kepikiran: 2 lembar 50rb (biru + biru) nilainya sama dengan 1 lembar 100rb (merah). kalo ditumpuk kok gak jadi merah? warna gak kenal penjumlahan, cuma kenal jumlah. yang ngerangkum nilai itu kita, bukan warna. keponakan gue gak nanya ini. gue yang nanya, sendirian, jam 11 malem",
    comments: [],
  },
  {
    id: 93,
    authorId: 17,
    minutesAgo: 1200,
    shares: 62,
    content:
      "kata fisika semua benda itu gelombang. terus kenapa meja gue gak goyang? KARENA DIA GELOMBANG YANG TENANG. meja lebih dewasa dari gue. gue emosi karena sepele, meja gak goyang walau ditimpa laptop, buku, sama beban hidup gue",
    comments: [
      { authorId: 44, minutesAgo: 1190, content: "meja gue goyang tiap gue ketuk pake sendok. berarti dia juga punya batas. relatable" },
    ],
  },
  {
    id: 94,
    authorId: 9,
    minutesAgo: 1300,
    shares: 288,
    content:
      "hitung hari ini: kerja 9 jam, commute 3 jam, tidur 7 jam, makan 1,5 jam, mandi salat 1,5 jam. total 22 jam. sisa 2 jam. ITU NAMANYA HIDUP. 2 jam/hari x 365 hari = 730 jam = 30 hari penuh setahun. jadi gue 'hidup' 1 bulan per tahun. sisanya administrasi. gue gak nyerah, gue cuma pengin angkanya keliatan, karena kalo keliatan gak bisa dianggep biasa",
    comments: [
      { authorId: 7, minutesAgo: 1285, content: "gue baca ini di commute pulang. 3 jam juga. kita seangkatan. doakan gue, besok gue coba utang tidur dikit buat nambah 30 menit hidup" },
      { authorId: 26, minutesAgo: 1240, content: "2 jam itu bukan sisa, itu modal. dipake buat apa itu keputusan paling penting harian. gue pilih main sama anak, lu pilih apa?" },
      { authorId: 46, minutesAgo: 1190, content: "thread ini lebih sadar dari semua konten 'rumus sukses'. rumus sukses gue: kurangin commute 1 jam. selesai. gaji boleh turun dikit, hidup naik banyak" },
    ],
  },
  {
    id: 95,
    authorId: 14,
    minutesAgo: 1400,
    shares: 231,
    content:
      "5 taun gue posting soal 0,999... = 1 dan sampai sekarang tiap minggu masih ada yang berantem di komen. gue udah gak berdebat. gue cuma bilang: 'anggap aja gak sama. terus sebutin satu angka di antara 0,999... dan 1.' hening. SELALU HENING. keheningan itu jawaban paling elegan. kadang gue kangen suara perang itu, tapi ya sudah",
    comments: [
      { authorId: 27, minutesAgo: 1385, content: "gue pernah nyoba nyebutin. gue bilang '0,999...5'. semua orang ketawa. gue belajar: lima itu gak muat di belakang tak hingga" },
      { authorId: 45, minutesAgo: 1330, content: "5 taun thread itu masih hidup. itu bukan thread lagi, itu monumen. gak ada like di sini tapi dia jadi tempat ngumpul" },
    ],
  },
  {
    id: 96,
    authorId: 2,
    minutesAgo: 1500,
    shares: 84,
    content:
      "1 liter air = 1 kg. berarti 1 liter minyak goreng = 1 kg JUGA dong? kata petugas 'gak, minyak lebih ringan bang'. KOK BISA. sama2 1 LITER. ini penipuan skala atau apa. gue timbang sendiri: minyak 0,9 kg. GAK SATU. SEPERSEBELAS NYA MANA",
    comments: [
      { authorId: 27, minutesAgo: 1485, content: "itu densitas bang. air 1,0; minyak 0,92. liter itu volume, kilo itu berat. bukan semua 1 liter beratnya sama, makanya minyak mengapung di air" },
      { authorId: 20, minutesAgo: 1440, content: "gue umur 31 dan baru ngerti kenapa minyak di atas air. sekolah dulu gak nyampe bagian ini, atau gue yang gak nyampe" },
      { authorId: 46, minutesAgo: 1400, content: "'sepersebelasnya mana' WKWK. gue cek: 1 - 0,92 = 0,08. jadi seperduabelas setengah. gue juga baru itung. kita sama" },
    ],
  },
  {
    id: 97,
    authorId: 19,
    minutesAgo: 1600,
    shares: 98,
    content:
      "HP 2,3jt di mall. online 2,15jt + ongkir 25rb + biaya layanan 12rb + garansi toko 35rb = 2,22jt. hemat 80rb buat nunggu 3 hari + resiko lecet. gue tetep beli online. gue TAU itungannya. tapi 'keliatan hemat' itu dopamin, bukan keputusan. gue sadar, gue tetep beli. manusia itu makhluk yang bisa itung terus gak nurut sama itungannya",
    comments: [
      { authorId: 12, minutesAgo: 1585, content: "80rb itu harga ketenangan nunggu paket datang. gue bayar lebih mahal buat lebih gak sabar. logika" },
    ],
  },
  {
    id: 98,
    authorId: 8,
    minutesAgo: 1700,
    shares: 245,
    content:
      "orang bangga 'gue itung cepet pake kepala'. kerennya bukan di cepet. kerennya di: lu tau KAPAN angka harus dicurigai. 'diskon 70%', 'ratusan ribu orang sudah membuktikan', 'rata2 pengguna turun 5kg', 'aman, bunganya cuma dikit'. nalar itu bukan kecepatan. nalar itu bau aneh yang lu cium sebelum lu liat. kalkulator gak punya hidung. punya hidung itu lu",
    comments: [
      { authorId: 42, minutesAgo: 1685, content: "'bunga cuma dikit' itu kalimat paling mahal yang pernah ada. 2% per bulan kerasa dikit, setahun itu 26,8%. itung: 1,02^12. bunga besar pake kostum kecil" },
      { authorId: 45, minutesAgo: 1640, content: "gue guru. ini yang gue coba tanam ke murid dari SD. angka itu kertas, hidung itu alat bertahan hidup" },
    ],
  },
  {
    id: 99,
    authorId: 25,
    minutesAgo: 1800,
    shares: 76,
    content:
      "anak tetangga SD nanya: 'om, angka paling gede apa?' gue jawab paling sok: 'googolplex'. dia diem 2 detik terus nanya: 'terus googolplex + 1?' ...gue diam. anak itu ngalahin gue pake TAMBAH SATU. gue udah siapin jawaban buat 10 pertanyaan matematika, gak nyiapin satu ini. pendidikan itu berbahaya. gak nyangka dia belom sekolah matematika apa2 udah menang",
    comments: [],
  },
  {
    id: 100,
    authorId: 28,
    minutesAgo: 1950,
    shares: 402,
    content:
      "rumah gue deket lapangan. tiap sore ada bapak2 jual es teh 5rb, anak2 main bola pakai sepatu sandal, ibu2 senam sampai speaker kena tegur. gue suka nunggu antre es teh. lama2 gue sadar: gue gak pernah itung antreannya. 5rb itu gue keluar tanpa mikir. bandingin sama beli kopi 30rb yang gue itungin diskon, rating, jarak. ternyata gue itung buat yang gue ragu. yang gue yakin, gue tinggal jalan ke lapangan. itu aja. hari ini antrean 11 orang, dan gue gak ngitung apa2",
    comments: [
      { authorId: 9, minutesAgo: 1930, content: "'gue itung buat yang gue ragu' itu kalimat yang gak bisa gue lupain. es teh 5rb itu bukan transaksi, itu posisi" },
      { authorId: 22, minutesAgo: 1870, content: "gue di kampung juga gitu. bakso 10rb, antrean 20 menit, gak pernah kehitung. yang kehitung: kapan bakso dateng. beda dunia sama hitung2an kerja" },
      { authorId: 31, minutesAgo: 1800, content: "ini thread paling tenang di sini. di tengah semua orang berantem soal angka, ada orang nunggu es teh gak ngitung apa2. gue pengen jadi orang itu" },
      { authorId: 4, minutesAgo: 1730, content: "antrean 11 orang itu pasti kehitung sama yang jualan. dia tau persis berapa gelas per sore. yang gak kehitung: cerita tiap gelas. enak ya gitu" },
      { authorId: 16, minutesAgo: 1660, content: "gue mulai ikutin: belanja bulanan tanpa ngebandingin 3 tokpe. pertama kalinya 5 taun gue beli beras langsung. rasanya aneh. aneh yang bagus" },
      { authorId: 37, minutesAgo: 1580, content: "matematika itu alat. kadang buat itung, kadang buat sadar kapan gak usah itung. thread ini bagian kedua. jarang ada" },
      { authorId: 12, minutesAgo: 1500, content: "es teh 5rb, senam ibu2, bola sepatu sandal. itu paket yang gak dijual di mana2. gue share ini ke grup keluarga, biar mama ikut baca. beliau tiap sore di lapangan juga" },
      { authorId: 49, minutesAgo: 1420, content: "gue dateng dari thread 0,999 yang masih perang. turun di sini, tenang. kayak masuk warung abis macet" },
      { authorId: 45, minutesAgo: 1340, content: "antrean 11 orang x 5rb = 55rb per sore buat bapak es teh. kalo dia jual 30 hari: 1,65jt. warung lapangan itu ekonomi kecil yang jalan tiap hari tanpa perlu seminar. semoga sehat2 dia" },
      { authorId: 46, minutesAgo: 1200, content: "gue udah scroll jauh, balik lagi ke sini cuma buat bilang: makasih thread ini. gue hari ini gak itung apa2 pas jalan sore. pertama kali bertahun2. lapangan gue juga ada. besok gue ke sana" },
    ],
  },
]
