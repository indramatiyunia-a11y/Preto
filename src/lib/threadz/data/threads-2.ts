import type { ThreadzThread } from "../types"

// PART 2: cuitan 26-50.
//
// PANDUAN SUARA:
//  7: awam stand-up, punchline pendek        45: ahli angka ngeri, lotre itu momok
// 34: awam syukur, keluarga                  42: ahli anti-mesin, tenang ngeri
// 36: awam kurir, blak-blakan               15: awam bapak tua, huruf depan kapital, "Salam"
// ATURAN DUNIA: nol merek, nol nama usaha orang. Acuan universal: rumah, bus,
// dapur, sekolah, pantai, kebun. Aman dibaca anak sampai kakek.
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 7,
    minutesAgo: 30,
    shares: 244,
    content:
      "toko sebelah: 5 jalur kasir. yang buka: 1.\n\nantrian: 9 orang. yang ngawas: 0.\n\nini bukan keluhan. ini karya seni yang konsisten. tiap hari gambar yang sama digambar ulang dengan setia. salut",
    comments: [
      { authorId: 22, minutesAgo: 25, content: "konsistensinya yang bikin gak kecewa lagi. kita udah di level penerimaan" },
      { authorId: 45, minutesAgo: 18, content: "9 orang x 3 menit = 27 menit. cukup buat mikir 'kenapa gak buka jalur lain'. jawabannya juga konsisten: gak dibuka" },
      { authorId: 37, minutesAgo: 10, content: "di toko kecil depan: 1 kasir, 1 pemilik, 0 antrian. barangnya lebih dikit, hidupnya lebih tenang" },
    ],
  },
  {
    id: 27,
    authorId: 45,
    minutesAgo: 60,
    shares: 178,
    content:
      "karena masih sering ditanya, gue angkat dari materi yang dulu gue ajarin:\n\npeluang jackpot lotre: 1 banding sekitar 292 juta.\npeluang kena sambar petir dalam setahun: 1 banding sekitar sejuta dua.\n\ngapnya ratusan kali.\n\njadi kalau ada yang bilang 'namanya juga mencoba', mohon dipahami: mencoba yang bener itu menaikin peluang. ini cuma nunggu. nunggu yang itu-itu lagi. pake duit.",
    comments: [
      { authorId: 3, minutesAgo: 52, content: "1 banding sejuta aja udah bikin orang gak mau jalan pas hujan. tapi 1 banding 292 juta masih dikira pintu" },
      { authorId: 7, minutesAgo: 40, content: "gue tinggal deket menara sinyal dan gak pernah kena petir. tiket itu gue beli 3 kali, kalah 3 kali. statistik jujur banget sama gue" },
      { authorId: 31, minutesAgo: 22, content: "yang dipilih orang yang 292 juta itu karena 'hadiahnya gede'. hadiahnya gede, peluangnya juga gede... ke arah kosong" },
    ],
  },
  {
    id: 28,
    authorId: 29,
    minutesAgo: 100,
    shares: 87,
    content:
      "gue gak baca semua tulisan panjang di atas, tapi intinya kan lotre itu tabungan kejutan? modal dikit, kalau kebagian jutaan.\n\nsama kayak nabung, tapi ada kejutan",
    comments: [
      { authorId: 27, minutesAgo: 92, content: "bukan. nabung: duit lu masih duit lu. lotre: duit lu jadi duit orang lain, kecuali lu 1 dari 292 juta. kejutannya ada. kebanyakan kejutannya muncul di rekening yang makin tipis" },
      { authorId: 20, minutesAgo: 75, content: "tabungan punya bunga. lotre punya orang yang nungguin undian sambil gaspedal harapan. beda jauh kalau dipikir pelan-pelan" },
    ],
  },
  {
    id: 29,
    authorId: 34,
    minutesAgo: 150,
    shares: 266,
    content:
      "bulan ini pengeluaran lebih gede dari biasanya. rekening tipis.\n\ntapi semua di rumah sehat. bapak ibu masih ada. sepeda tua masih bisa dianggurin.\n\nbersyukur. rezeki itu kadang gak keliatan di saldo. dia keliatan di hal-hal yang hari ini gak perlu kita bayar.",
    comments: [
      { authorId: 14, minutesAgo: 140, content: "ini perhitungan yang gak pernah gagal: yang gak keliatan di saldo seringnya lebih berharga dari yang keliatan" },
      { authorId: 22, minutesAgo: 120, content: "semoga bulan depan lebih lapang ya. doa baik dari sini" },
      { authorId: 37, minutesAgo: 95, content: "bener. sehat itu udah mahal banget. kita yang sering lupa ngecheck harganya" },
    ],
  },
  {
    id: 30,
    authorId: 42,
    minutesAgo: 210,
    shares: 598,
    content:
      "gue jelasin mesin itu pakai satu gambar, gak perlu grafik:\n\nmesin itu lobang.\n\nbukan lobang yang bisa dipagari. lobang yang makin lu injak makin dalam, dan pinggirannya diratain biar keliatan datar dari atas. makanya orang gak pernah ngerasa 'udah dalam'. dia ngerasa 'udah deket keluar'.\n\ntetangga gue mulai dari 'coba dikit'. tiga bulan. motornya pergi. istrinya gak pergi. dia yang nanggung semuanya.\n\ngak ada yang 'jago keluar dari lobang'. yang ada: berhenti injak. sekarang. bukan nanti, pas udah gelap.",
    comments: [
      { authorId: 9, minutesAgo: 195, content: "'udah deket keluar' — persis kalimat om gue dulu. sampe om gue gak keluar-keluar. makanya tiap ada yang bilang gitu bulu gue berdiri" },
      { authorId: 22, minutesAgo: 180, content: "semoga tetangga lu dikasih jalan keluar yang bener. bukan yang keliatan doang" },
      { authorId: 37, minutesAgo: 150, content: "di tempat gue mesinnya masuk lewat HP anak-anak. bapaknya main di teras, anaknya main di dalam. satu rumah dua lobang" },
      { authorId: 14, minutesAgo: 120, content: "sistem ini dibikin orang pinter buat ngambil duit orang yang lagi butuh harapan. itu penjelasannya, versi pendek" },
      { authorId: 46, minutesAgo: 90, content: "gue share ya. banyak ibu gak paham kok bapaknya bisa sampe segitu. sekarang gue paham: lobangnya gak keliatan" },
      { authorId: 3, minutesAgo: 60, content: "yang bikin gak sadar: kalahnya dikit-dikit, menangnya dikit-dikit. rata-ratanya? mesin yang pegang" },
      { authorId: 48, minutesAgo: 30, content: "energi yang masuk lobang gak bisa balik 100%. secara fisika maupun keuangan. bedanya fisika gak ada iklan 'menang terus'" },
    ],
  },
  {
    id: 31,
    authorId: 12,
    minutesAgo: 260,
    shares: 341,
    content:
      "'cuti itu hak lu.'\n\niya. tapi coba perhatiin orang yang ambil cuti panjang: pesan dia tetep dibales. kadang dari pantai.\n\ngue gak mau terima ini. tapi gue juga gak mau jadi contoh.\n\njadi gue nulis di sini. di tempat gue berani.",
    comments: [
      { authorId: 26, minutesAgo: 245, content: "'kadang dari pantai' — SUMPAH. gue pernah liat senior bales pesan jam 7 pagi pas lagi liburan di pantai" },
      { authorId: 42, minutesAgo: 215, content: "hak yang gak berani dipakai bukan hak. itu kupon yang gak pernah dituker" },
      { authorId: 4, minutesAgo: 180, content: "keberanian ada levelnya. level 1: komen ini pake akun utama. selamat, lu naik level" },
      { authorId: 19, minutesAgo: 140, content: "di pabrik gak ada drama beginian. masuk jam 7, pulang jam 3. dibales gak dibales sama aja" },
      { authorId: 37, minutesAgo: 95, content: "cuti paling aman itu pas musim sibuk orang lain. semua orang sibuk sendiri, gak ada yang inget lu kerja apa gak" },
    ],
  },
  {
    id: 32,
    authorId: 20,
    minutesAgo: 320,
    shares: 102,
    content:
      "menurut bacaan yang gue baca (lupa sumbernya tapi serius), otak kanan buat seni, otak kiri buat itung-itungan.\n\njadi kalau lu jelek itung, jangan sedih. lu mungkin seniman.\n\ngue sendiri gak bisa itung dan gue yakin banget gue seniman.",
    comments: [
      { authorId: 24, minutesAgo: 305, content: "bacaan itu udah lama dibantah, itu mitos populer. semua orang pakai dua-duanya. tapi oke, seniman juga boleh salah" },
      { authorId: 11, minutesAgo: 280, content: "'gue baca di internet, internet gak mungkin bohong' — itu kemarin. hari ini dia belajar: internet bisa. sangat bisa" },
      { authorId: 35, minutesAgo: 240, content: "berarti gue seniman juga dong. gue gak bisa itung DAN gak bisa gambar. gue apa?" },
      { authorId: 31, minutesAgo: 200, content: "gabut. lu gabut. sama kayak kita semua di sini" },
      { authorId: 47, minutesAgo: 160, content: "gue bisa itung dikit dan gambar dikit. berarti gue setengah seniman setengah penghitung. lumayan kan" },
    ],
  },
  {
    id: 33,
    authorId: 40,
    minutesAgo: 380,
    shares: 187,
    content:
      "pelanggan dateng bawa HP yang ketumpahan air sabun. katanya 'biasa aja kan bang'.\n\nbiasa aja ya. air sabun itu ada lemaknya, ada bubuknya, ada gelembungnya. masuk ke mesin yang gak suka ketiganya.\n\ndia bayar servis 200 ribu terus bilang 'kok mahal'. bang. HP lu makan sabun. gue yang nyikip-nyikip ngerapiin bagian dalamnya.\n\nlu bayar sabun 15 ribu. HP lu yang ketularan.",
    comments: [
      { authorId: 45, minutesAgo: 360, content: "200 ribu itu murah dibanding data yang hilang. tapi orang itung servis, gak itung foto anak yang hilang" },
      { authorId: 7, minutesAgo: 330, content: "'HP lu makan sabun' — pembukaan stand up terbaik tahun ini. gak butuh penjelasan tambahan" },
      { authorId: 14, minutesAgo: 290, content: "alkohol buat ngerapiin mesin itu bener. dia nyuci, bukan cuma ngelap. beda tingkat keselamatannya" },
      { authorId: 26, minutesAgo: 240, content: "gue sekali HP keceburuh bak. hari itu gue belajar: beras itu bukan penyembuh. dia penunda duka" },
    ],
  },
  {
    id: 34,
    authorId: 48,
    minutesAgo: 440,
    shares: 136,
    content:
      "bunga majemuk itu fisika: bola salju digulir turun. kecil di atas. gede di bawah. dan gak bisa dihentikan di tengah jalan dengan 'yah sudahlah'.\n\nmakanya pinjaman bunga tinggi jangan dianggap 'bantuan cepat'. dia bola salju yang udah nungguin lu di dasar bukit. lu tinggal lepasin.",
    comments: [
      { authorId: 3, minutesAgo: 420, content: "'gak bisa dihentikan di tengah dengan yah sudahlah' — dan yang jual bolanya bilang 'tenang, bolanya kecil kok'" },
      { authorId: 22, minutesAgo: 380, content: "semoga tulisan ini nyampe ke yang lagi nyari 'pinjaman cair 5 menit'. tolong baca ini dulu baru klik" },
    ],
  },
  {
    id: 35,
    authorId: 35,
    minutesAgo: 500,
    shares: 64,
    content:
      "kira-kira kalau gue transfer 1 juta ke diri sendiri 12 kali, jadi 12 juta kan? sistemnya bikin duit.\n\nudah gue coba 2 kali kok masih 1 juta. mungkin belum rajin",
    comments: [
      { authorId: 24, minutesAgo: 480, content: "transfer itu mindahin, bukan nambahin. 1 juta mindah 12 kali ya 1 juta. yang nambah cuma capek. duit gak nambah dari pindah rumah, sama juga gak nambah dari pindah rekening" },
    ],
  },
  {
    id: 36,
    authorId: 36,
    minutesAgo: 560,
    shares: 209,
    content:
      "biaya antar naik lagi. pelanggan tanya: 'kok naik terus?'\n\npak. bahan bakar naik. ban cepet gundul. jalanan macet. badan gue juga ada masa garansinya.\n\ntapi yang bikin gue senyum: yang paling sering nanya 'kok naik' sama orang yang jaraknya 3 kilo doang tapi 'sebentar ya pak, saya ambil sesuatu dulu' 15 menit.",
    comments: [
      { authorId: 43, minutesAgo: 540, content: "sebagai pihak yang pernah 'ambil sesuatu' 12 menit, gue minta maaf atas nama semua orang. bahan bakar gak murah, waktu lu gak murah" },
      { authorId: 7, minutesAgo: 470, content: "'badan gue juga ada masa garansinya' — kalimat ini wajib jadi semboyan para kurir di mana-mana" },
      { authorId: 45, minutesAgo: 400, content: "biaya antar itu biaya nyata per kilometer. orang mikirnya cuma jarak. padahal yang dibayar: jarak + waktu + ban + badan" },
      { authorId: 12, minutesAgo: 320, content: "gue selalu kasih lebih dikit tapi dari hati. semoga cukup. kurangnya gue doain" },
    ],
  },
  {
    id: 37,
    authorId: 30,
    minutesAgo: 640,
    shares: 254,
    content:
      "'beli sekarang, bayar nanti.' cicilan 0%. 'gratis biaya admin bulan pertama.'\n\ngue bahas satu-satu, singkat:\n\ncicilan 0%: harganya biasanya udah dinaikin diam-diam. lu gak bayar bunga, lu bayar 'kemahalan'.\nbiaya admin: nama lain dari bunga. kaya 'biaya layanan', 'biaya perawatan', 'biaya-biayaan'.\nbeli sekarang bayar nanti: pinjam duit buat beli yang belum sanggup dibeli. ribetnya bukan hari ini. ribetnya bulan depan, terus bulan depannya lagi.\n\nintinya: yang dibungkus paling rapet biasanya isinya paling gak enak.\n\nmomok gak dateng pakai tanduk. dia dateng pakai tulisan '0%'.",
    comments: [
      { authorId: 18, minutesAgo: 610, content: "'momok gak dateng pakai tanduk' — dan dia gak langsung kerasa. dia nyicil ngerasain" },
      { authorId: 42, minutesAgo: 560, content: "yang paling licik itu '0%'. karena nol itu angka paling dipercaya orang. angkanya nol, posisinya yang digeser" },
      { authorId: 49, minutesAgo: 480, content: "gue hampir klik 'geser' buat sepatu kemarin. untung ngecheck total: beda 180 ribu dari harga normal. yang 0% yang mana bang" },
    ],
  },
  {
    id: 38,
    authorId: 43,
    minutesAgo: 720,
    shares: 158,
    content:
      "hari ke-214 ngerjain skripsi. bab 4 masih bab 3.\n\npembimbing: 'sabar ya, proses.'\n\ngue tau proses. prosesnya yang bikin gue ngobrol sama printer.\n\nhari ini printer bilang 'paper jam'. gue bilang 'sama, kita'.",
    comments: [
      { authorId: 1, minutesAgo: 700, content: "'sama, kita' — printer udah lebih peduli dari sebagian orang. semangat, bab 4 pasti beres" },
      { authorId: 12, minutesAgo: 650, content: "gue pernah ngobrol sama spidol pas ngerjain tugas akhir. spidol gak jawab tapi rasanya nyaman. lanjutkan" },
      { authorId: 27, minutesAgo: 580, content: "hari ke-214 bab 4 masih bab 3 itu bukan mundur. itu nahan garis. yang gugur biasanya yang berhenti nahan" },
      { authorId: 4, minutesAgo: 500, content: "semangat dek. skripsi itu lompatan iman yang paling terstruktur. selesai juga nanti" },
      { authorId: 16, minutesAgo: 420, content: "gue level di bawah lu: proposal. kita satu garis depan. salut" },
    ],
  },
  {
    id: 39,
    authorId: 50,
    minutesAgo: 800,
    shares: 55,
    content:
      "WUEBED. GUE BARU TAU KALO 0 DIBAGI APA PUN HASILNYA 0.\n\nJADI KALO GUE 0 UANG DIBAGI 7 HARI, TIAP HARI 0. MATEMATIKANYA BENER TAPI NGENA BANGET SIH",
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
      "gue baru check: 6 kontak yang tahun 2019 sering gue ajak ngobrol panjang. hari ini cuma 1 yang masih aktif curhat-curhatan.\n\nsisanya: saling kasih reaksi di tulisan pendek. kadang 'pagi' pas hari besar.\n\ngue gak marah sama siapa-siapa. hidup emang jalan. orang gak bisa ikut jalan sepanjang waktu.\n\ncuma kadang pengen ada yang nanya 'lu gimana?' duluan. bukan karena butuh jawaban. tapi biar kerasa ada yang penasaran.",
    comments: [
      { authorId: 24, minutesAgo: 970, content: "'biar kerasa ada yang penasaran' — kontak kita makin banyak, pertanyaannya makin dikit. ini statistik yang gak ada grafiknya" },
      { authorId: 33, minutesAgo: 900, content: "2019 ke sekarang 7 tahun. yang bertahan 1 dari 6 udah bagus. kualitas > jumlah. walaupun tetep sepi" },
      { authorId: 46, minutesAgo: 800, content: "ayah gue bilang: temen itu kaya bintang. gak semua keliatan tiap malam. yang penting ada yang tetep nongol" },
      { authorId: 11, minutesAgo: 700, content: "gue kemungkinan besar salah satu dari 'sisanya'. makanya gue mulai duluan: lu gimana?" },
      { authorId: 4, minutesAgo: 580, content: "halo. gue nanya duluan: lu gimana? serius nanya. besok gue bakal lupa nanya lagi. jadi jawab sekarang" },
      { authorId: 37, minutesAgo: 460, content: "di tempat gue dulu gak ada istilah gak aktif. yang gak muncul 3 hari pasti ada yang ngetuk pintu. dulu nyebelin. sekarang gue sadar itu berharga" },
    ],
  },
  {
    id: 42,
    authorId: 49,
    minutesAgo: 1100,
    shares: 196,
    content:
      "magang: gak dibayar. transport: 3 bus bolak-balik. makan siang: yang paling murah di dekat kantor.\n\nyang gue dapet: pengalaman.\n\nyang pengalaman gak bisa bayar: makan siang.\n\nmakanya tiap hari gue ngatur porsi sendiri. kadang rasanya kayak ngitung peluang: kecil, tapi gue tetep pasang harapan.",
    comments: [
      { authorId: 7, minutesAgo: 1070, content: "ngatur porsi tiap hari itu olahraga yang gak diminta. semangat, yang muda" },
      { authorId: 12, minutesAgo: 990, content: "magang gak dibayar emang jadi bahan tertawaan nasional. 'pengalaman' gak bisa dimasak" },
      { authorId: 26, minutesAgo: 900, content: "gue pernah kerja 'dibayar pengalaman' 3 bulan. sekarang gue kerja dibayar bensin. naik kelas" },
      { authorId: 45, minutesAgo: 800, content: "nilai pengalaman itu nyata. biaya hidup lebih nyata. tempat yang cuma bisa bayar pengalaman seharusnya jujur di lowongannya: 'gaji: cerita'" },
      { authorId: 22, minutesAgo: 700, content: "semoga cepet dilepas jadi karyawan beneran ya. dari tulisannya keliatan berat banget" },
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
      { authorId: 17, minutesAgo: 1180, content: "wkwk gue kira FC itu fasilitas kompor. sama-sama gak nyambung. kita sefam" },
    ],
  },
  {
    id: 44,
    authorId: 31,
    minutesAgo: 1350,
    shares: 227,
    content:
      "2 tahun di posisi yang sama. tiap review: 'performa bagus, tunggu momentum yang tepat'.\n\ngue baru paham: momentum gak dateng sendiri. dia ditungguin sama orang yang udah punya momentum.\n\ngak jadi ngeluh. gue cuma mau bilang ke yang lagi di posisi gue: mulai catet pencapaian lu sendiri. tulis sendiri. jangan tunggu dibacain orang lain.\n\nkarena 'momentum' itu kata paling sopan buat 'belum sekarang'.",
    comments: [
      { authorId: 22, minutesAgo: 1320, content: "simpan. buat dibaca ulang pas review bulan depan. semangat, lu gak sendirian" },
      { authorId: 37, minutesAgo: 1250, content: "di ladang gak ada review. yang ada: panen atau gak. jujur rasanya. tapi ya tetep kadang kangen dibilangin 'bagus' wkwk" },
      { authorId: 42, minutesAgo: 1150, content: "catet pencapaian sendiri itu bikin data. tanpa data, review itu opini. dengan data, review itu rapat. dua-duanya melelahkan, tapi satu di antaranya ada hasilnya" },
      { authorId: 14, minutesAgo: 1050, content: "'momentum' juga kata favorit buat nunda kenaikan gaji. 'timing' versi kantor" },
      { authorId: 44, minutesAgo: 950, content: "gue juga 2 tahun di posisi yang sama: posisi tidur. terus gue dipromosiin jadi raja kasur. kadang momentum itu di rumah aja" },
      { authorId: 4, minutesAgo: 840, content: "kalimat terakhirnya ngena. 'belum sekarang' yang pake jas rapi" },
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
      { authorId: 11, minutesAgo: 1470, content: "teori antrian itu cabang itung-itungan yang paling deket sama pengalaman rohani" },
      { authorId: 3, minutesAgo: 1380, content: "'karena lu pindah' — variabel yang paling sering lupa diitung: gue. selalu gue" },
      { authorId: 46, minutesAgo: 1250, content: "gue udah nemu solusinya: gue suruh suami antri di sebelah. dia yang lambat, gue yang senyum" },
    ],
  },
  {
    id: 46,
    authorId: 32,
    minutesAgo: 1650,
    shares: 83,
    content:
      "tdi beli segelas teh 5 ribu. skrg 7 ribu. minggu lalu 4 ribu kalo gak salah.\n\ninflasi tuh gak dateng di berita doang ternyata. dia dateng di gelas plastik",
    comments: [
      { authorId: 24, minutesAgo: 1620, content: "harganya naik terus tapi rasanya masih sama. di sinilah kita dikecewakan: harga naik, isinya jujur gak berubah" },
      { authorId: 47, minutesAgo: 1550, content: "7 ribu itu mahal ya sebenernya. tapi gue tetep beli. kita sama" },
    ],
  },
  {
    id: 47,
    authorId: 4,
    minutesAgo: 1800,
    shares: 92,
    content:
      "halo. pertanyaan pagi: kalau di bus ada anak kecil manggil lu 'bapak', lu langsung sadar umur, atau lu mikir 'bapaknya mana ya' terus lanjut liat pemandangan?",
    comments: [
      { authorId: 16, minutesAgo: 1770, content: "gue 24 dan diomelin 'dek' sama penjual di pasar. pilihannya: nangis atau senyum. gue pilih senyum sambil nangis" },
    ],
  },
  {
    id: 48,
    authorId: 36,
    minutesAgo: 1950,
    shares: 288,
    content:
      "HP. cicilan '0%'. 'cukup 1,2 juta per bulan.'\n\ngue itung cepet: 1,2 x 12 = 14,4 juta. harga tunainya 11 juta.\n\nbeda 3,4 juta. itu bukan 0%. itu 0% yang ngumpet di harga.\n\naturan gue sederhana: kalau mau tau biaya beneran, jangan liat angka paling gede di brosur. liat total keluar. angka itu gak bisa diurus-urusin.",
    comments: [
      { authorId: 48, minutesAgo: 1930, content: "3,4 juta itu bukan biaya kecil. itu 'biaya kemalasan ngecheck'. dan kemalasan selalu punya tagihan" },
      { authorId: 14, minutesAgo: 1850, content: "total keluar. dua kata yang bikin semua brosur turun derajat kepercayaannya" },
      { authorId: 7, minutesAgo: 1750, content: "diurus-urusin gak bisa. jadi gosip pun gak bisa. angkanya terlalu jujur" },
      { authorId: 31, minutesAgo: 1600, content: "ini persis yang gue tanya ke penjual kemarin. dia pindah topik 3 kali. topiknya: 'tapi bang, fiturnya'..." },
      { authorId: 33, minutesAgo: 1450, content: "angka paling gede di brosur itu bukan harga. itu iklan" },
    ],
  },
  {
    id: 49,
    authorId: 25,
    minutesAgo: 2150,
    shares: 68,
    content:
      "btw 1 juta itu banyak ya. sebenernya.\n\ntapi kalau dipake bayar apa-apa kok cepet abis. berarti 1 juta itu banyak buat disimpen, sedikit buat dipake. itung-itungan uang tuh ngeselin",
    comments: [],
  },
  {
    id: 50,
    authorId: 15,
    minutesAgo: 2400,
    shares: 234,
    content:
      "Anak-anak muda sekarang sering bilang capek.\n\nSaya mau bilang begini: capek itu bukan cuma milik zaman sekarang. zaman saya dulu juga capek. yang beda: dulu gak ada tempat curhat. sekarang setidaknya ada grup, ada tulisan, ada teman yang bisa menjawab jam 2 malam.\n\nJadi jangan malu capek. Yang penting besok pagi bangun lagi, mandi, dan jalan lagi. Itu sudah hebat.\n\nSalam hangat, dari bapak-bapak yang juga masih berjuang antar anak sekolah.",
    comments: [
      { authorId: 9, minutesAgo: 2360, content: "makasih, bapak. baca ini jam 1 malam abis lembur. langsung beda rasanya" },
      { authorId: 22, minutesAgo: 2280, content: "salam balik. semoga bapak dan anak-anak selalu sehat" },
      { authorId: 26, minutesAgo: 2200, content: "antar anak sekolah itu olahraga juga ya bapak. tiap pagi dua kali naik-turun kendaraan" },
      { authorId: 31, minutesAgo: 2100, content: "'ada teman yang bisa menjawab jam 2 malam' — dan kadang jawabannya cuma 'sabar ya'. tapi cukup kok" },
      { authorId: 44, minutesAgo: 1950, content: "bapak gue juga begini kalau ngetik. semua kata depan huruf besar. resmi, kayak surat dinas" },
      { authorId: 7, minutesAgo: 1800, content: "'Salam hangat' dari orang yang belum kenal kita ternyata bisa bikin sejuk. ini bukan soal cuaca" },
    ],
  },
]
