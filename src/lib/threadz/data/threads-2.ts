import type { ThreadzThread } from "../types"

// PART 2: cuitan 26-50.
//
// PANDUAN SUARA:
//  7: awam stand-up, punchline pendek       45: ahli statistik, lotre itu momok
// 29: awam religius, halus, syukur          42: ahli anti-judol, tenang ngeri
// 36: awam kurir/ojol, blak-blakan          15: awam bapak tua, kapital, "Salam"
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 7,
    minutesAgo: 30,
    shares: 244,
    content:
      "indomaret deket rumah: 5 kasir. yang buka: 1.\n\nantrian: 9 orang. yang ngawas: 0.\n\nini bukan keluhan. ini karya seni yang konsisten. setiap hari gambar yang sama digambar ulang. salut.",
    comments: [
      { authorId: 22, minutesAgo: 25, content: "konsistensinya yang bikin gak kecewa lagi. kita udah level penerimaan" },
      { authorId: 45, minutesAgo: 18, content: "9 orang x 3 menit = 27 menit. bisa dipake buat mikir 'kenapa gak pake mesin'. jawabannya juga konsisten: gak bisa" },
      { authorId: 37, minutesAgo: 10, content: "di warung gue 1 kasir, 1 pemilik, 0 antrian. tapi barangnya juga lebih dikit. adil rasa ya" },
    ],
  },
  {
    id: 27,
    authorId: 45,
    minutesAgo: 60,
    shares: 178,
    content:
      "karena masih sering ditanya, gue angkat dari materi kuliah:\n\npeluang jackpot lotre: 1 : 292.201.338.\npeluang kena sambar petir dalam setaun: 1 : 1.222.000.\n\ngapnya 239 kali.\n\njadi kalo ada yang bilang 'namanya juga usaha', mohon dipahami: ini bukan usaha. usaha ada usaha yang menaikkan peluang. ini cuma nunggu. nunggu yang itu2 lagi. pake duit.",
    comments: [
      { authorId: 3, minutesAgo: 52, content: "1:1.222.000 aja udah bikin orang gak mo mandi pas hujan. tapi 1:292 juta masih dikira pintu" },
      { authorId: 7, minutesAgo: 40, content: "gue tinggal deket menara telekomunikasi dan gak pernah kena petir. tiket lotre beli 3x, kalah 3x. statistik jujur banget sama gue" },
      { authorId: 31, minutesAgo: 22, content: "orang pilih yang 292 juta karena 'dobel2nya gede'. dobel2nya gede, peluangnya juga gede... ke arah kosong" },
    ],
  },
  {
    id: 28,
    authorId: 29,
    minutesAgo: 100,
    shares: 87,
    content:
      "gue gak baca semua post panjang di atas, tapi intinya kan beli lotre itu tabungan untung2an? modal dikit, kalo hoki jutaan.\n\nsama kaya nabung tapi ada kejutan",
    comments: [
      { authorId: 27, minutesAgo: 92, content: "bukan. nabung: duit lu masih duit lu. lotre: duit lu jadi duit orang lain, kecuali lu 1 dari 292 juta. kejutannya ada. kebanyakan kejutannya muncul di rekening yang makin tipis" },
      { authorId: 20, minutesAgo: 75, content: "tabungan punya bunga. lotre punya bapak2 yang nungguin tanggal undian. beda jauh rasanya kalo dipikir pelan2" },
    ],
  },
  {
    id: 29,
    authorId: 34,
    minutesAgo: 150,
    shares: 266,
    content:
      "bulan ini pengeluaran lebih gede dari biasanya. rekening tipis.\n\ntapi anak sehat. bapak ibu masih ada. motor masih jalan.\n\nalhamdulillah. rezeki itu kadang gak keliatan di saldo. dia keliatan di hal2 yang hari ini gak perlu kita bayar.",
    comments: [
      { authorId: 14, minutesAgo: 140, content: "ini perhitungan yang gak pernah gagal: yang gak keliatan di saldo seringnya lebih berharga dari yang keliatan" },
      { authorId: 22, minutesAgo: 120, content: "semoga bulan depan lebih lapang ya. doa terbaik dari sini" },
      { authorId: 37, minutesAgo: 95, content: "bener. kasih sehat itu udah mahal banget. kita yang sering lupa ngecheck harganya" },
    ],
  },
  {
    id: 30,
    authorId: 42,
    minutesAgo: 210,
    shares: 598,
    content:
      "gue jelasin slot pakai satu gambar, gak perlu grafik:\n\nslot itu lobang.\n\nbukan lobang yang bisa dipagari. lobang yang makin lu injak makin dalam, dan pinggirannya didesain biar keliatan datar dari atas. makanya orang gak pernah ngerasa 'udah dalam'. dia ngerasa 'udah deket2 keluar'.\n\ntetangga gue mulai dari 'coba dikit'. 3 bulan. motornya pergi. istrinya gak pergi. dia yang nanggung semuanya.\n\ngak ada yang 'jago keluar dari lobang'. yang ada: berhenti injak. sekarang. bukan nanti yang udah tenggelam.",
    comments: [
      { authorId: 9, minutesAgo: 195, content: "'udah deket2 keluar' — persis kalimat om gue dulu. sampe om gue gak keluar2. makanya tiap ada yang bilang gitu bulu gue berdiri" },
      { authorId: 22, minutesAgo: 180, content: "semoga tetangga lu dikasih jalan keluar yang bener. bukan yang keliatan doang" },
      { authorId: 37, minutesAgo: 150, content: "di kampung gue slot masuk lewat HP anak2. bapaknya main di warung, anaknya main di rumah. satu keluarga dua lobang" },
      { authorId: 14, minutesAgo: 120, content: "sistem ini dibikin orang pinter buat ngambil uang orang yang lagi butuh harapan. itu keseluruhan penjelasannya" },
      { authorId: 46, minutesAgo: 90, content: "share ya. ibu2 sering gak paham kok bapaknya bisa sampe segitu. sekarang gue paham: lobangnya gak keliatan" },
      { authorId: 3, minutesAgo: 60, content: "yang bikin gak sadar: tiap kalah dikit2, tiap menang dikit2. rata-ratanya? mesin yang pegang" },
      { authorId: 48, minutesAgo: 30, content: "energi masuk lobang gak bisa balik 100%. secara fisika maupun keuangan. bedanya fisika gak ada iklan 'menang terus'" },
    ],
  },
  {
    id: 31,
    authorId: 12,
    minutesAgo: 260,
    shares: 341,
    content:
      "'cuti itu hak lu.'\n\niya. tapi coba perhatiin orang yang ambil cuti panjang: chat dia tetep dibales. kadang dari pantai.\n\ngue gak mo terima ini. tapi gue juga gak mo jadi contoh.\n\njadi gue nulis di sini. di mana gue berani.",
    comments: [
      { authorId: 26, minutesAgo: 245, content: "'kadang dari pantai' — SUMPAH. gue pernah liat senior bales email jam 7 pagi pas liburan di jogja" },
      { authorId: 42, minutesAgo: 215, content: "hak yang gak berani dipakai bukan hak. itu diskon yang gak pernah di-redeem" },
      { authorId: 4, minutesAgo: 180, content: "keberanian ada levelnya. level 1: komen ini dari akun utama. selamat, lu naik level" },
      { authorId: 19, minutesAgo: 140, content: "di pabrik gak ada drama beginian. masuk jam 7 pulang jam 3. dibales gak dibales sama aja. minusnya beda tempat" },
      { authorId: 37, minutesAgo: 95, content: "cuti paling aman itu pas panen. semua orang sibuk sendiri, gak ada yang inget lu kerja atau gak" },
    ],
  },
  {
    id: 32,
    authorId: 20,
    minutesAgo: 320,
    shares: 102,
    content:
      "menurut riset yang gue baca (lupa sumbernya tapi serius), otak kanan buat seni, otak kiri buat matematika.\n\njadi kalo lu jelek itung, jangan sedih. lu mungkin seniman.\n\ngue sendiri gak bisa itung dan gue yakin banget gue seniman.",
    comments: [
      { authorId: 24, minutesAgo: 305, content: "riset yang lu maksud udah lama dibantah, itu mitos populer. semua orang pake dua2nya. tapi oke, seniman juga boleh salah" },
      { authorId: 11, minutesAgo: 280, content: "'gue baca di internet, internet gak mungkin bohong' — itu kemarin. hari ini dia belajar: internet bisa. sangat bisa" },
      { authorId: 35, minutesAgo: 240, content: "berarti gue seniman juga dong. gue gak bisa itung DAN gak bisa gambar. gue apa?" },
      { authorId: 31, minutesAgo: 200, content: "gabut. lu gabut. sama kaya kita semua di sini" },
      { authorId: 47, minutesAgo: 160, content: "gue bisa itung dikit dan gambar dikit. berarti gue setengah seniman setengah matematikawan. lumayan kan" },
    ],
  },
  {
    id: 33,
    authorId: 40,
    minutesAgo: 380,
    shares: 187,
    content:
      "pelanggan dateng bawa HP yang ketumpahan air sabun. katanya 'biasa aja kan bang'.\n\nbiasa aja ya. air sabun. ada lemak, ada bahan kimia, ada gelembung. masuk ke mesin yang gak suka ketiganya.\n\ndia bayar servis 200rb terus bilang 'kok mahal'. bang. HP lu makan sabun. gue yang nyekip nyuci bagian dalamnya pake alkohol.\n\nlu bayar sabun 15rb. HP lu yang ketularan.",
    comments: [
      { authorId: 45, minutesAgo: 360, content: "200rb itu murah dibanding data yang hilang. tapi orang itung servis, gak itung foto anak yang hilang" },
      { authorId: 7, minutesAgo: 330, content: "'HP lu makan sabun' — kalimat pembuka stand up terbaik taun ini. gak butuh penjelasan tambahan" },
      { authorId: 14, minutesAgo: 290, content: "alkohol buat elektronik itu bener. dia nyuci, bukan ngelap. beda tingkat keselamatannya" },
      { authorId: 26, minutesAgo: 240, content: "gue sekali HP keceburuh bak. hari itu gue belajar: beras itu bukan penyembuh. dia penunda duka" },
    ],
  },
  {
    id: 34,
    authorId: 48,
    minutesAgo: 440,
    shares: 136,
    content:
      "bunga majemuk itu fisika: bola salju digulir turun. kecil di atas. gede di bawah. dan gak bisa dihentikan di tengah jalan dengan 'yah sudahlah'.\n\nmakanya pinjol jangan dianggap 'bantuan cepat'. dia bola salju yang udah nungguin lu di dasar bukit. lu tinggal lepasin.",
    comments: [
      { authorId: 3, minutesAgo: 420, content: "'gak bisa dihentikan di tengah dengan yah sudahlah' — dan yang jual bolanya bilang 'tenang, bolanya kecil kok'" },
      { authorId: 22, minutesAgo: 380, content: "semoga post ini nyampe ke yang lagi nyari 'pinjaman cair 5 menit'. tolong baca ini dulu baru klik" },
    ],
  },
  {
    id: 35,
    authorId: 47,
    minutesAgo: 500,
    shares: 64,
    content:
      "kira2 kalo gue transfer 1 juta ke diri sendiri 12x, jadi 12 juta kan? sistemnya ngebuat duit.\n\nudah gue coba 2x kok masih 1 juta. mungkin belum rajin",
    comments: [
      { authorId: 24, minutesAgo: 480, content: "transfer itu mindahin, bukan ngalihin. 1 juta mindah 12x = 1 juta. capek 12x. yang nambah cuma lelah. duit gak nambah dari pindah rumah, sama juga gak nambah dari pindah rekening" },
    ],
  },
  {
    id: 36,
    authorId: 26,
    minutesAgo: 560,
    shares: 209,
    content:
      "ongkir naik lagi. pelanggan tanya: 'kok ongkirnya naik terus?'\n\npak. bensin naik. ban cepet gundul. jalan macet. badan gue juga ada masa garansinya.\n\ntapi yang bikin gue senyum: yang paling sering tanya 'kok ongkir naik' sama orang yang pesennya 3 km doang tapi 'sebentar ya pak, saya ambil2 dulu' 15 menit.",
    comments: [
      { authorId: 43, minutesAgo: 540, content: "sebagai pihak yang pernah 'ambil2 dulu' 12 menit, gue minta maaf atas nama semua orang. bensin gak murah, waktu lu gak murah" },
      { authorId: 7, minutesAgo: 470, content: "'badan gue juga ada masa garansinya' — kalimat ini wajib jadi slogan perkumpulan kurir se-nusantara" },
      { authorId: 45, minutesAgo: 400, content: "ongkir itu biaya nyata per kilometer. orang mikirnya cuma jarak. padahal yang dibayar: jarak + waktu + ban + badan" },
      { authorId: 12, minutesAgo: 320, content: "gue selalu kasih lebih dikit tapi dari hati. semoga cukup. kurangnya doa" },
    ],
  },
  {
    id: 37,
    authorId: 30,
    minutesAgo: 640,
    shares: 254,
    content:
      "paylater. cicilan 0%. 'gratis biaya admin bulan pertama'.\n\ngue bahas satu2 singkat:\n\ncicilan 0%: harganya biasanya udah dinaikin diam2. lu gak bayar bunga, lu bayar 'kemahalan'.\nbiaya admin: nama lain dari bunga. kaya 'biaya layanan', 'biaya perawatan', 'biaya biayaan'.\npaylater: pinjam duit buat beli yang belum sanggup dibeli. ribetnya bukan hari ini. ribetnya bulan depan, terus bulan depannya lagi.\n\nintinya: yang dibungkus paling rapet biasanya isinya paling gak enak.\n\nmomok gak dateng pakai tanduk. dia dateng pakai tulisan '0%'.",
    comments: [
      { authorId: 18, minutesAgo: 610, content: "'momok gak dateng pakai tanduk' — dan dia gak langsung kerasa. dia nyicil ngerasain" },
      { authorId: 42, minutesAgo: 560, content: "yang paling licik itu '0%'. karena 0 itu angka paling dipercaya orang. angkanya 0, posisinya yang digeser" },
      { authorId: 49, minutesAgo: 480, content: "gue hampir klik 'geser' buat sepatu kemarin. untung ngecheck total: beda 180rb dari harga normal. yang 0% yang mana bang" },
    ],
  },
  {
    id: 38,
    authorId: 43,
    minutesAgo: 720,
    shares: 158,
    content:
      "hari ke-214 ngerjain skripsi. bab 4 masih bab 3.\n\ndosbing: 'sabar ya, proses.'\n\ngue tau proses. prosesnya yang bikin gue ngobrol sama printer.\n\nhari ini printer bilang 'paper jam'. gue bilang 'sama, kita'.",
    comments: [
      { authorId: 1, minutesAgo: 700, content: "'sama, kita' — printer udah lebih peduli dari sebagian orang. semangat, bab 4 pasti beres" },
      { authorId: 12, minutesAgo: 650, content: "gue pernah ngobrol sama spidol pas skripsi. spidol gak jawab tapi rasanya nyaman. lanjutkan" },
      { authorId: 27, minutesAgo: 580, content: "hari ke-214 bab 4 masih bab 3 itu bukan mundur. itu menahan garis. skripsi gugur biasanya di orang yang berhenti nahan garis" },
      { authorId: 4, minutesAgo: 500, content: "semangat dek. skripsi itu lompatan iman paling terstruktur. selesai juga nanti" },
      { authorId: 16, minutesAgo: 420, content: "gue level di bawah lu: proposal. kita satu garis depan. salut" },
    ],
  },
  {
    id: 39,
    authorId: 50,
    minutesAgo: 800,
    shares: 55,
    content:
      "WUEBED. GUE BARU TAU KALO 0 DIBAGI APA2 HASILNYA 0.\n\nJADI KALO GUE 0 UANG DIBAGI 7 HARI, TIAP HARI 0. MATEMATIKANYA BENER TAPI NGENA BANGET SIH",
    comments: [],
  },
  {
    id: 40,
    authorId: 1,
    minutesAgo: 900,
    shares: 121,
    content:
      "yang bilang 'besok mulai olahraga' terus besoknya bilang lagi 'besok mulai', kumpul sini.\n\nkita bikin grup. namanya: besok.",
    comments: [
      { authorId: 4, minutesAgo: 880, content: "daftar. anggota pertama. sekaligus anggota terakhir karena gak ada yang dateng" },
      { authorId: 7, minutesAgo: 820, content: "grupnya gak usah dibikin. yang pasti besok isinya 'besok mulai' lagi" },
      { authorId: 31, minutesAgo: 740, content: "gue jadi admin ya. tugas admin: ngingetin tiap besok" },
      { authorId: 43, minutesAgo: 660, content: "besok gue gabung. maksud gue besok. bener besok" },
    ],
  },
  {
    id: 41,
    authorId: 18,
    minutesAgo: 1000,
    shares: 173,
    content:
      "gue baru check: 6 kontak WA yang sering gue chat taun 2019. hari ini cuma 1 yang masih aktif curhat2an.\n\nsisanya: saling nge-react status. kadang 'pagi' pas lebaran.\n\ngue gak marah sama siapa2. hidup emang jalan. orang gak bisa ikut jalan sepanjang waktu.\n\ncuma kadang pengen ada yang tanya 'lu gimana?' duluan. bukan karena butuh jawaban. tapi biar kerasa ada yang penasaran.",
    comments: [
      { authorId: 24, minutesAgo: 970, content: "'biar kerasa ada yang penasaran' — kontak kita makin banyak, pertanyaannya makin dikit. ini statistik yang gak ada grafiknya" },
      { authorId: 33, minutesAgo: 900, content: "2019 ke sekarang 7 taun. kontak yang bertahan 1 dari 6 itu udah bagus. kualitas > kuantitas. walau tetep sepi" },
      { authorId: 46, minutesAgo: 800, content: "ayah gue bilang: temen itu kaya bintang. gak semua keliatan tiap malam. yang penting ada yang tetep nongol" },
      { authorId: 11, minutesAgo: 700, content: "gue kemungkinan besar salah satu dari 'sisanya'. makanya gue mulai dulu: lu gimana?" },
      { authorId: 4, minutesAgo: 580, content: "halo. gue nanya duluan: lu gimana? serius nanya. besok gue bakal lupa nanya lagi. jadi jawab sekarang" },
      { authorId: 37, minutesAgo: 460, content: "di desa gak ada istilah gak aktif. yang gak muncul 3 hari ada yang ngetuk pintu. kadang nyebelin. sekarang gue sadar itu berharga" },
      { authorId: 25, minutesAgo: 340, content: "btw kontak gue 4. semuanya mama gue dengan nomor beda. lucu tapi beneran" },
    ],
  },
  {
    id: 42,
    authorId: 49,
    minutesAgo: 1100,
    shares: 196,
    content:
      "magang: gak dibayar. transport 3 angkot. siang beli nasi padang 'setengah2'.\n\nyang gue dapet: pengalaman.\n\nyang pengalaman gak bisa beli: nasi.\n\nmakanya tiap hari gue samain rasio nasi sama lauk: 9 banding 1.",
    comments: [
      { authorId: 7, minutesAgo: 1070, content: "rasio 9:1 itu bukan nasi padang lagi. itu nasi dengan kenangan padang" },
      { authorId: 12, minutesAgo: 990, content: "magang gak dibayar emang masalah nasional. 'pengalaman' gak bisa dimasak" },
      { authorId: 26, minutesAgo: 900, content: "gue pernah kerja 'dibayar pengalaman' 3 bulan. sekarang gue kerja dibayar bensin. naik kelas" },
      { authorId: 45, minutesAgo: 800, content: "nilai pengalaman itu nyata. biaya hidup lebih nyata. perusahaan yang cuma bisa bayar pengalaman seharusnya jujur di lowongannya: 'gaji: cerita'" },
      { authorId: 22, minutesAgo: 700, content: "semoga cepet dilepas jadi karyawan beneran ya. dari komennya keliatan berat banget" },
    ],
  },
  {
    id: 43,
    authorId: 38,
    minutesAgo: 1200,
    shares: 47,
    content:
      "wkwkwkkw gue baru tau 'FC' di sepak bola itu Football Club.\n\ngue kira dari sononya emang doain: 'FC ya semoga menang'",
    comments: [
      { authorId: 17, minutesAgo: 1180, content: "wkwk gue kira FC itu fasilitas kompor. sama2 gak nyambung. kita sefam" },
    ],
  },
  {
    id: 44,
    authorId: 31,
    minutesAgo: 1350,
    shares: 227,
    content:
      "2 taun di posisi yang sama. tiap review: 'performa bagus, tunggu momentum yang tepat'.\n\ngue baru paham: momentum gak dateng sendiri. dia ditungguin sama orang yang udah punya momentum.\n\ngak jadi ngeluh. gue cuma mo bilang ke yang lagi di posisi gue: mulai itung pencapaian lu sendiri. tulis sendiri. jangan tunggu dibacain orang lain.\n\nkarena 'momentum' itu kata paling sopan buat 'belum sekarang'.",
    comments: [
      { authorId: 22, minutesAgo: 1320, content: "simpan. buat dibaca ulang pas review bulan depan. semangat, lu gak sendirian" },
      { authorId: 37, minutesAgo: 1250, content: "di sawah gak ada review. yang ada: panen atau gak. jujur rasanya. tapi ya tetep kadang kangen dibilangin 'performa bagus' wkwk" },
      { authorId: 42, minutesAgo: 1150, content: "tulis pencapaian sendiri = bikin data. tanpa data, review itu opini. dengan data, review itu rapat. dua2nya melelahkan, tapi satu di antaranya ada hasilnya" },
      { authorId: 14, minutesAgo: 1050, content: "'momentum' juga kata favorit buat nunda kenaikan gaji. 'timing' versi buat staf" },
      { authorId: 44, minutesAgo: 950, content: "gue juga 2 taun di posisi yang sama: posisi tidur. terus gue dipromosiin jadi raja kasur. kadang momentum itu di rumah aja" },
      { authorId: 4, minutesAgo: 840, content: "kalimat terakhirnya ngena. 'belum sekarang' yang pake jas alus" },
      { authorId: 49, minutesAgo: 700, content: "dari magang gue belajar: yang nunggu momentum makan mie. yang bikin momentum makan di luar. gue masih mie. tapi gue sadar" },
    ],
  },
  {
    id: 45,
    authorId: 33,
    minutesAgo: 1500,
    shares: 168,
    content:
      "kenapa antrian lu selalu lebih lambat dari antrian sebelah? bukan ilusi, tapi juga bukan kutukan:\n\n- lu cuma ngalamin antrian lu. yang sebelah lu cuma liat dari jauh, keliatan lancar.\n- lu lebih inget momen kalah daripada menang.\n- kadang bener: antrian lu emang lambat. makanya lu pindah. terus antrian sebelah yang tadinya cepet jadi lambat. karena lu pindah.\n\nhidup: 1. logika antrian: 0.",
    comments: [
      { authorId: 11, minutesAgo: 1470, content: "teori antrian itu cabang matematika yang paling deket sama pengalaman rohani" },
      { authorId: 3, minutesAgo: 1380, content: "'karena lu pindah' — variabel yang suka lupa diitung: gue. selalu gue" },
      { authorId: 46, minutesAgo: 1250, content: "gue pinter: gue suruh suami antri di sebelah. dia yang lambat, gue yang senyum" },
    ],
  },
  {
    id: 46,
    authorId: 32,
    minutesAgo: 1650,
    shares: 83,
    content:
      "tdi beli es teh 5k. skrg 7k. minggu lalu 4k kalo gak salah.\n\ninflasi tuh gak dateng di berita doang ternyata. dia dateng di gelas plastik",
    comments: [
      { authorId: 24, minutesAgo: 1620, content: "es teh naik terus tapi rasanya masih sama. di sinilah kita dikecewakan: harga naik, isi jujur gak berubah" },
      { authorId: 47, minutesAgo: 1550, content: "7 ribu itu mahal ya. sebenernya. tapi gue tetep beli. kita sama" },
    ],
  },
  {
    id: 47,
    authorId: 4,
    minutesAgo: 1800,
    shares: 92,
    content:
      "halo. pertanyaan pagi: kalau di angkot ada anak kecil manggil lu 'bapak', lu betulan sadar umur, atau lu mikir 'bapaknya mana ya' terus lanjut liat pemandangan?",
    comments: [
      { authorId: 16, minutesAgo: 1770, content: "gue 24 dan diomelin 'dek' sama mbak2 penjual. pilihannya: nangis atau senyum. gue pilih senyum sambil nangis" },
    ],
  },
  {
    id: 48,
    authorId: 36,
    minutesAgo: 1950,
    shares: 288,
    content:
      "cicilan 0%. HP terbaru. 'cukup 1,2 juta per bulan'.\n\ngue itung cepet: 1,2 x 12 = 14,4 juta. harga tunainya 11 juta.\n\nbeda 3,4 juta. itu bukan 0%. itu 0% yang ngumpet di harga.\n\naturan gue sederhana: kalo mo tau biaya beneran, jangan liat angka paling gede di brosur. liat total keluar. satu angka itu gak bisa dikabar2in.",
    comments: [
      { authorId: 48, minutesAgo: 1930, content: "3,4 juta itu bukan biaya kecil. itu 'biaya kemalasan ngecheck'. dan kemalasan selalu punya invoice" },
      { authorId: 14, minutesAgo: 1850, content: "total keluar. dua kata yang bikin semua brosur turun derajat kepercayaannya" },
      { authorId: 7, minutesAgo: 1750, content: "kabar2in gak bisa. jadi gosip pun gak bisa. angkanya terlalu jujur" },
      { authorId: 31, minutesAgo: 1600, content: "ini persis yang gue tanya ke sales kemarin. dia pindah topik 3x. topiknya: 'tapi bang, fiturnya'..." },
      { authorId: 33, minutesAgo: 1450, content: "angka paling gede di brosur itu bukan harga. itu iklan" },
    ],
  },
  {
    id: 49,
    authorId: 25,
    minutesAgo: 2150,
    shares: 68,
    content:
      "btw 1 juta itu banyak ya. sebenernya.\n\ntapi kalo dipake bayar apa2 kok cepet abis. berarti 1 juta itu banyak buat disimpen, sedikit buat dipake. matematika uang tuh ngeselin",
    comments: [],
  },
  {
    id: 50,
    authorId: 15,
    minutesAgo: 2400,
    shares: 234,
    content:
      "Anak-anak muda sekarang sering bilang capek.\n\nSaya mau bilang begini: capek itu bukan cuma milik zaman sekarang. zaman saya dulu juga capek. yang beda: dulu gak ada tempat curhat. sekarang paling tidak ada grup, ada status, ada teman yang bisa menjawab jam 2 malam.\n\nJadi jangan malu capek. Yang penting besok pagi bangun lagi.\n\nSalam hangat, dari bapak-bapak yang juga masih berjuang antar anak sekolah.",
    comments: [
      { authorId: 9, minutesAgo: 2360, content: "makasih, bapak. baca ini jam 1 malam abis lembur. langsung beda rasanya" },
      { authorId: 22, minutesAgo: 2280, content: "salam balik. semoga bapak dan anak2 selalu sehat" },
      { authorId: 26, minutesAgo: 2200, content: "antar anak sekolah itu olahraga juga ya bapak. tiap pagi 2x naik turun motor" },
      { authorId: 31, minutesAgo: 2100, content: "'ada teman yang bisa menjawab jam 2 malam' — dan kadang jawabannya cuma 'sabar ya'. tapi cukup kok" },
      { authorId: 44, minutesAgo: 1950, content: "bapak gue juga begini kalau ngetik. semua kata depan kapital. resmi, kayak surat dinas" },
      { authorId: 7, minutesAgo: 1800, content: "'Salam hangat' dari orang yang belum kenal kita ternyata bisa bikin sejuk. ini bukan soal cuaca" },
    ],
  },
]
