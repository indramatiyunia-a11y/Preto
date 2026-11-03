import type { ThreadzThread } from "../types"

// PART 2: cuitan 26-50.
//
// JARAN SUARA:
//   7: humor kering, observasi.   45: itung-itungan dapur, gak pakai angka impor
//  34: ibu, syukur lewat detail.  42: tenang, metafora sederhana
//  36: kiriman keliling, blak-blakan.  15: bapak tua, huruf depan kapital, "Salam"
//  29,35: bego percaya diri soal uang.  20: "gue baca di internet"
// ATURAN DUNIA: nol merek, nol nama usaha/orang. Kalau butuh angka, angkanya
// receh & kaleng. Aman dibaca bocah sampai eyang.
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 7,
    minutesAgo: 30,
    shares: 244,
    content:
      "posyandu pagi ini: 5 meja, yang buka 1.\n\nantrian: 9 ibu, 3 balita yang rame nangis, 1 kucing yang duduk paling rapi.\n\nyang jaga antrian: nol. tapi aman. karena semua orang saling pegangin tempat pas anaknya dipanggil ditimbang.\n\nini bukan keluhan. ini karya yang digambar ulang tiap bulan dengan setia.",
    comments: [
      { authorId: 22, minutesAgo: 25, content: "konsistensinya yang bikin gak kecewa lagi. kita udah di tahap penerimaan" },
      { authorId: 45, minutesAgo: 18, content: "9 orang x 3 menit = 27 menit. cukup buat mikir 'kenapa gak buka meja lagi'. jawabannya juga konsisten: besok" },
      { authorId: 37, minutesAgo: 10, content: "di posyandu desa: 1 meja, 1 kader, 0 antrian panjang. karena semua kenal semua. kalah gede meja, kalah rame orang" },
    ],
  },
  {
    id: 27,
    authorId: 45,
    minutesAgo: 60,
    shares: 178,
    content:
      "anak tetangga kemarin minta 10 ribu buat 'ikut tiket angka sama temannya'.\n\ngue gak ngelarang. gue ajak duduk duluan.\n\ngue ambil 10 ribu uang receh dari kaleng, susun di meja.\n\n'kalau 10 ribu ini masuk tiap hari, sebulan jadi berapa?'\n\ndia itung. 300 ribu.\n\n'setahun?'\n\n3,6 juta. dia diem.\n\n'3,6 juta itu bisa buat apa?'\n\n'sepatu, tas, buku setaun. terus bisa nabung.'\n\n'kalau masuk ke angka itu, yang keluar 3,6 juta, yang balik biasanya nol.'\n\ndia diem lama. terus dia bilang, 'kalo gitu uangnya gue masuk gentong aja'.\n\noke. besok gue bantu borin lubang gentongnya.",
    comments: [
      { authorId: 3, minutesAgo: 52, content: "'kalo gitu uangnya masuk gentong aja' — menang. gak perlu ceramah. cukup meja, uang receh, sama waktu" },
      { authorId: 27, minutesAgo: 40, content: "yang bagus lu gak larang. yang dilarang malah dipikirin. yang diajak itung, dia sendiri yang tinggalin" },
      { authorId: 9, minutesAgo: 22, content: "gue kopi cara ini buat anak gue. minggu ini aja kita mulai kaleng receh. terima kasih" },
    ],
  },
  {
    id: 28,
    authorId: 29,
    minutesAgo: 100,
    shares: 87,
    content:
      "gue gak baca semua tulisan panjang di atas, tapi intinya kan lotre itu tabungan kejutan? modal dikit, kalo kebagian jutaan.\n\nsama kaya nabung, tapi ada kejutannya",
    comments: [
      { authorId: 27, minutesAgo: 92, content: "bukan. nabung: duit lu masih duit lu. lotre: duit lu jadi duit orang lain, kecuali lu yang satu dari ratusan ribu orang itu. kejutannya ada. kebanyakan kejutannya di rekening yang makin tipis" },
      { authorId: 20, minutesAgo: 75, content: "tabungan ada bunganya. lotre ada orang nungguin undiannya sambil gaspedal harapan. beda jauh kalau dipikir pelan-pelan. tapi kalo gak dipikir, memang mirip" },
    ],
  },
  {
    id: 29,
    authorId: 34,
    minutesAgo: 150,
    shares: 266,
    content:
      "bulan ini pengeluaran lebih gede dari biasanya. saldo tipis.\n\ntapi yang di rumah semuanya sehat. bapak-ibu masih ada. sepeda tua masih kuat dianterin jemput adik.\n\nmakan malem tadi nasi + sayur asem, ditemani cerita adik yang gak jelas tapi lucu.\n\nalhamdulillah. saldo bisa dikejar lagi. adik gak bisa diperkecil lagi, udah 8 tahun.",
    comments: [
      { authorId: 14, minutesAgo: 140, content: "yang gak keliatan di saldo itu yang paling berat bebannya kalau ilang. bener banget" },
      { authorId: 22, minutesAgo: 120, content: "semoga bulan depan lebih lapang ya. doa dari sini" },
      { authorId: 37, minutesAgo: 95, content: "'adik gak bisa diperkecil lagi, udah 8 tahun' — gue senyum baca ini. unik banget kalimatnya. semangat" },
    ],
  },
  {
    id: 30,
    authorId: 42,
    minutesAgo: 210,
    shares: 598,
    content:
      "tetangga gue mulai dari 'coba dikit'. tiga bulan. motornya pergi. istrinya gak pergi. dia yang nanggung semuanya, plus muka tenang yang gak asli.\n\ngue jelasin mesin itu ke anak gue pake satu gambar aja, gak perlu grafik:\n\nmesin itu lobang. pinggirannya diratain biar keliatan datar dari atas. makanya yang di dalam gak pernah ngerasa 'udah dalam'. dia ngerasa 'udah deket keluar'.\n\nanak gue nanya, 'kalo gitu cara keluarnya gimana?'\n\n'gak ada yang jago keluar dari lobang. yang ada: gak injak dari awal.'\n\ndia diem. terus nanya, 'kalo udah di dalam?'\n\n'nah itu. butuh orang luar yang ngerojong. makanya jangan malu nyeret orang yang sayang kita.'\n\ngue gak tau jawaban itu bener apa gak. gue cuma gak mau jawaban itu gak pernah kepake.",
    comments: [
      { authorId: 9, minutesAgo: 195, content: "'udah deket keluar' — persis kalimat om gue dulu. sampe om gue gak keluar-keluar. tiap denger kalimat itu bulu gue berdiri" },
      { authorId: 22, minutesAgo: 180, content: "semoga tetangga lu dikasih jalan yang bener. bukan yang keliatan doang" },
      { authorId: 37, minutesAgo: 150, content: "di kampung gue masuknya lewat HP anak-anak. bapaknya main di teras, anaknya main di kamar. satu rumah dua lobang" },
      { authorId: 14, minutesAgo: 120, content: "sistemnya dibikin orang pinter buat ngambil duit orang yang lagi butuh harapan. penjelasan versi pendek" },
      { authorId: 46, minutesAgo: 90, content: "gue share ya. banyak ibu gak paham kok bapaknya bisa sampe segitu. sekarang paham: pinggirannya diratain" },
      { authorId: 3, minutesAgo: 60, content: "yang bikin gak sadar: kalahnya dikit-dikit, menangnya dikit-dikit. rata-ratanya? lobang yang pegang" },
      { authorId: 48, minutesAgo: 30, content: "energi yang masuk lobang gak bisa balik 100%. bedanya sama fisika: fisika gak ada suara 'coba lagi, deket'" },
    ],
  },
  {
    id: 31,
    authorId: 12,
    minutesAgo: 260,
    shares: 341,
    content:
      "'cuti itu hak lu.'\n\niya. tapi coba perhatiin orang yang ambil cuti panjang: chat dia tetep dibales. kadang dari pantai, sekalian foto sunset.\n\ngue gak terima ini secara prinsip. tapi gue juga belum berani jadi contoh.\n\njadi gue nulis di sini. di tempat gue berani.\n\nkalo ada yang udah berhasil cuti 10 hari tanpa dibales satu pun chat, gue minta ilmunya. serius. komen.",
    comments: [
      { authorId: 26, minutesAgo: 245, content: "'kadang dari pantai, sekalian foto sunset' — SUMPAH. gue pernah liat senior bales chat jam 7 pagi pas liburan, sambil cerita sunset" },
      { authorId: 42, minutesAgo: 215, content: "hak yang gak berani dipakai bukan hak. itu kupon yang gak pernah dituker" },
      { authorId: 4, minutesAgo: 180, content: "keberanian ada levelnya. level 1: nulis begini pake akun utama. selamat, lu naik level" },
      { authorId: 19, minutesAgo: 140, content: "di pabrik gak ada drama beginian. masuk jam 7, pulang jam 3. dibales gak dibales sama aja. kadang nyebelin, kadang nikmat" },
      { authorId: 37, minutesAgo: 95, content: "cuti paling aman itu pas musim sibuknya orang lain. semua sibuk sendiri, gak ada yang inget lu kerja apa nggak" },
    ],
  },
  {
    id: 32,
    authorId: 20,
    minutesAgo: 320,
    shares: 102,
    content:
      "menurut bacaan yang gue baca (lupa sumbernya tapi serius), otak kanan buat seni, otak kiri buat itung.\n\njadi kalau lu jelek itung, jangan sedih. lu mungkin seniman.\n\ngue sendiri gak bisa itung dan gue yakin banget gue seniman.",
    comments: [
      { authorId: 24, minutesAgo: 305, content: "bacaan itu udah lama dibantah, itu mitos yang enak didenger. semua orang pakai dua-duanya. tapi oke, seniman juga boleh salah" },
      { authorId: 11, minutesAgo: 280, content: "'gue baca di internet, internet gak mungkin bohong' — itu kemarin. hari ini pelajarannya: internet bisa. sangat bisa" },
      { authorId: 35, minutesAgo: 240, content: "berarti gue seniman juga dong. gue gak bisa itung DAN gak bisa gambar. gue apa?" },
      { authorId: 31, minutesAgo: 200, content: "gabut. lu gabut. sama kaya kita semua di sini" },
      { authorId: 47, minutesAgo: 160, content: "gue bisa itung dikit dan gambar dikit. berarti gue setengah seniman setengah penghitung. lumayan" },
    ],
  },
  {
    id: 33,
    authorId: 40,
    minutesAgo: 380,
    shares: 187,
    content:
      "adik gue bawa HP ke kamar mandi 'buat musik aja kak'. sekarang HP-nya makan air sabun.\n\ngue bongkar pakai obeng jam kacamata. di dalamnya: air, busa, dan potongan kemasan sabun yang nyangkut. kemasannya ikut masuk. kenapa. kenapa masuk.\n\ndia bayar gue pake cium tangan gue sama janji 'besok kakak gue yang gue dengerin'.\n\nbesok-besok aja janjinya. busanya yang penting udah gue lap.\n\nHP nyala lagi. kamera agak berkabut. dia bilang 'efek senja'. ya udah. lah.",
    comments: [
      { authorId: 45, minutesAgo: 360, content: "kamera berkabut itu bukan efek senja. itu kenangan. HP kenangan" },
      { authorId: 7, minutesAgo: 330, content: "'kenapa masuk' ditanya ke siapa? ke adik? ke sabun? gue penasaran jawabannya" },
      { authorId: 14, minutesAgo: 290, content: "anak-anak itu begini. 'buat musik aja' itu pintu masuk paling sering dipake. semua bapak-ibu harusnya tau" },
      { authorId: 26, minutesAgo: 240, content: "gue sekali HP keceburuh bak. hari itu gue belajar: beras itu bukan penyembuh. dia penunda duka" },
    ],
  },
  {
    id: 34,
    authorId: 48,
    minutesAgo: 440,
    shares: 136,
    content:
      "kakak gue nanya kenapa pinjaman bunga tinggi bahaya. gue bawa dia ke gentong air belakang rumah.\n\n'ini bola salju versi sini: es batu. taruh di gelas, tuang air panas. itung tiap menit.'\n\ndia nunggu. terus bilang 'ilang'.\n\n'ilangnya pelan-pelan kan? nah pinjaman itu kebalikannya. nambahnya pelan-pelan, tiap hari, gak capek, gak ngurusin urusan siapa-siapa.'\n\ndia diem. terus dia matiin notifikasi 'pinjaman cair 5 menit' di HP-nya. sendiri.",
    comments: [
      { authorId: 3, minutesAgo: 420, content: "'gak ngurusin urusan siapa-siapa' — dan yang jual bolanya bilang 'tenang, bolanya kecil kok'" },
      { authorId: 22, minutesAgo: 380, content: "semoga tulisan ini nyampe ke yang lagi nyari 'pinjaman cair 5 menit'. tolong baca ini dulu baru klik" },
    ],
  },
  {
    id: 35,
    authorId: 35,
    minutesAgo: 500,
    shares: 64,
    content:
      "kira-kira kalau gue transfer 1 juta ke diri sendiri 12 kali, jadi 12 juta kan? sistemnya bikin duit.\n\nudah gue coba 2 kali. kok masih 1 juta. mungkin belum rajin",
    comments: [
      { authorId: 24, minutesAgo: 480, content: "transfer itu mindahin, bukan nambahin. 1 juta dipindah 12 kali ya 1 juta. yang nambah cuma notifikasi. duit gak nambah dari pindah rumah, sama juga gak nambah dari pindah rekening" },
    ],
  },
  {
    id: 36,
    authorId: 36,
    minutesAgo: 560,
    shares: 209,
    content:
      "hari ini bawa kiriman ke rumah di ujung gang yang tangganya 12.\n\nbapaknya nyuruh 'taruh aja depan'. terus ngejar gue bawa minum. gak nanya-nanya. minum aja.\n\nsebelumnya di rumah sebelahnya, ibu-ibu nyuruh gue duduk dulu 'habis panas'. gue duduk 3 menit. 3 menit itu bikin sore gue gak karuan senyumnya.\n\nbesok antar lagi ke gang yang sama. sengaja lewat sana.",
    comments: [
      { authorId: 43, minutesAgo: 540, content: "3 menit duduk pakai disuruh orang tua itu terapi. gak ada di jadwal mana-mana" },
      { authorId: 7, minutesAgo: 470, content: "'besok sengaja lewat sana' — hal kecil yang bikin hidup enak. simpan" },
      { authorId: 46, minutesAgo: 400, content: "minum doang gak nanya-nanya. orang baik itu masih ada ya. makasih ceritanya" },
      { authorId: 12, minutesAgo: 320, content: "gue selalu kasih lebih dikit tapi dari hati. semoga cukup. kurangnya gue doain" },
    ],
  },
  {
    id: 37,
    authorId: 30,
    minutesAgo: 640,
    shares: 254,
    content:
      "om gue kemarin beli HP 'cicilan 0%, cukup 1,2 juta per bulan'.\n\nmalem ini kita itung bareng: 1,2 x 12 = 14,4 juta. harga tunainya 11 juta.\n\nbeda 3,4 juta. om gue bilang 'berarti 0%-nya di mana'.\n\ngue jawab, 'di brosur'.\n\ndia ketawa. ketawanya lama banget. ketawa orang yang baru sadar.\n\nsekarang HP-nya dipake buat ngecek tagihan. sama aja kan, penuh manfaat.",
    comments: [
      { authorId: 18, minutesAgo: 610, content: "'0%-nya di mana' 'di brosur' — gue kopi ini buat grup keluarga. biar yang lain ngeh sebelum ketawa lama" },
      { authorId: 42, minutesAgo: 560, content: "angka nol itu angka paling dipercaya orang. angkanya nol, posisinya yang digeser" },
      { authorId: 49, minutesAgo: 480, content: "gue hampir ambil 'geser' buat sepatu kemarin. untung ngecheck total: beda 180 ribu dari harga normal. 0% yang mana bang" },
    ],
  },
  {
    id: 38,
    authorId: 43,
    minutesAgo: 720,
    shares: 158,
    content:
      "hari ke-214 ngerjain skripsi. bab 4 masih bab 3.\n\ndosen: 'sabar ya, proses.'\n\ngue tau proses. prosesnya yang bikin gue ngobrol sama printer.\n\nhari ini printer bilang 'paper jam'. gue bilang 'sama, kita'.\n\nterus dia nyetak. doain lancar ya. nanti gue update.",
    comments: [
      { authorId: 1, minutesAgo: 700, content: "'sama, kita' — printer udah lebih peduli dari sebagian orang. semangat, bab 4 pasti beres" },
      { authorId: 12, minutesAgo: 650, content: "gue pernah ngobrol sama spidol pas ngerjain tugas akhir. spidol gak jawab tapi nyaman. lanjutkan" },
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
      "gue baru check: 6 kontak yang tahun 2019 sering gue ajak ngobrol panjang. hari ini tinggal 1 yang masih curhat-curhatan.\n\nsisanya: saling liat tulisan pendek. kadang 'pagi' pas hari besar.\n\ngue gak marah sama siapa-siapa. hidup emang jalan. orang gak bisa ikut jalan sepanjang waktu.\n\ncuma kadang pengen ada yang nanya 'lu gimana?' duluan. bukan karena butuh jawaban. biar kerasa ada yang penasaran.\n\noke. habis ini gue chat duluan ke satu orang. besok gue update.",
    comments: [
      { authorId: 24, minutesAgo: 970, content: "'biar kerasa ada yang penasaran' — kontak kita makin banyak, pertanyaannya makin dikit. ini statistik yang gak ada grafiknya" },
      { authorId: 33, minutesAgo: 900, content: "2019 ke sekarang 7 tahun. yang bertahan 1 dari 6 udah bagus. kualitas > jumlah. walaupun tetep sepi" },
      { authorId: 46, minutesAgo: 800, content: "ayah gue bilang: temen itu kaya bintang. gak semua keliatan tiap malam. yang penting ada yang tetep nongol" },
      { authorId: 11, minutesAgo: 700, content: "gue kemungkinan besar salah satu dari 'sisanya'. makanya gue mulai duluan: lu gimana?" },
      { authorId: 4, minutesAgo: 580, content: "halo. gue nanya duluan: lu gimana? serius nanya. besok gue bakal lupa nanya lagi. jadi jawab sekarang" },
      { authorId: 37, minutesAgo: 460, content: "di kampung gue dulu gak ada istilah gak aktif. yang gak muncul 3 hari pasti ada yang ngetuk pintu. dulu nyebelin. sekarang gue sadar itu berharga" },
    ],
  },
  {
    id: 42,
    authorId: 49,
    minutesAgo: 1100,
    shares: 196,
    content:
      "magang: gak dibayar. transport: 3 bus bolak-balik. makan siang: yang paling murah deket kantor.\n\nyang gue dapet: pengalaman.\n\nyang pengalaman gak bisa bayar: makan siang.\n\nmakanya tiap malem gue masak sendiri, dibagi dua: satu buat malem, satu buat esok.\n\nkadang porsinya keliru. kadang gue makan doang tanpa lauk. gak apa. besok ada besok.",
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
      "2 tahun di posisi yang sama. tiap review: 'performa bagus, tunggu momentum yang tepat'.\n\ngue baru paham: momentum gak dateng sendiri. dia ditungguin sama orang yang udah punya momentum.\n\ngak jadi ngeluh. gue cuma mulai catet pencapaian sendiri dari hari ini. tulis sendiri, jangan nunggu dibacain orang lain.\n\nkalo taun depan masih 'tunggu momentum', minimal gue udah punya buku tulis 1 buat buktiin gue jalan terus.",
    comments: [
      { authorId: 22, minutesAgo: 1320, content: "simpan. buat dibaca ulang pas review bulan depan. semangat, lu gak sendirian" },
      { authorId: 37, minutesAgo: 1250, content: "di ladang gak ada review. yang ada: panen atau gak. jujur rasanya. tapi ya tetep kadang kangen dibilangin 'bagus' wkwk" },
      { authorId: 42, minutesAgo: 1150, content: "catet pencapaian sendiri itu bikin data. tanpa data, review itu opini. dengan data, review itu rapat. dua-duanya melelahkan, tapi satu di antaranya ada hasilnya" },
      { authorId: 14, minutesAgo: 1050, content: "'momentum' juga kata favorit buat nunda kenaikan gaji. 'timing' versi kantor" },
      { authorId: 44, minutesAgo: 950, content: "gue juga 2 tahun di posisi yang sama: posisi tidur. terus gue dipromosiin jadi raja kasur. kadang momentum itu di rumah aja" },
      { authorId: 4, minutesAgo: 840, content: "'tunggu momentum' itu 'belum sekarang' yang pake jas rapi" },
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
      "tdi beli segelas teh 5 rb. skrg 7 rb. minggu lalu 4 rb kalo gak slh.\n\ninflasi tuh gk dateng di berita doang ternyata. dia dateng di gelas plastik",
    comments: [
      { authorId: 24, minutesAgo: 1620, content: "harganya naik terus, isinya masih teh yang sama. paling jujur di antara kita ya si teh" },
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
      { authorId: 16, minutesAgo: 1770, content: "gue 24 dan dipanggil 'dek' sama pedagang di pasar. pilihannya: nangis atau senyum. gue pilih senyum sambil nangis" },
    ],
  },
  {
    id: 48,
    authorId: 36,
    minutesAgo: 1950,
    shares: 288,
    content:
      "HP gue udah 5 tahun. layarnya kena pemukulan waktu kecil, baterainya 4 jam.\n\nada yang nawarin 'cicilan 0%'. gue itung total keluar: 14 juta lebih.\n\n14 juta itu bukan angka HP di rumah gue. itu: sekolah adik setahun + sayur 2 bulan + tabungan darurat yang belum ada.\n\ngue tutup tawarannya. HP lama masih nyala. adik gue sekolah. pilihan gampang sebenarnya, asal diberi waktu itung.",
    comments: [
      { authorId: 48, minutesAgo: 1930, content: "14 juta itu bukan biaya kecil. itu 'biaya kemalasan ngecheck'. dan kemalasan selalu punya tagihan" },
      { authorId: 14, minutesAgo: 1850, content: "total keluar. dua kata yang bikin semua brosur turun derajat kepercayaannya" },
      { authorId: 7, minutesAgo: 1750, content: "'adik gue sekolah' — itu pembelian paling mahal dan paling murah sekaligus. gak ngerti? baca lagi" },
      { authorId: 31, minutesAgo: 1600, content: "ini persis yang gue tanya ke yang nawarin kemarin. dia pindah topik 3 kali: 'tapi bang, fiturnya'..." },
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
      "Anak-anak muda sekarang sering bilang capek.\n\nSaya mau bilang begini: capek itu bukan cuma milik zaman sekarang. Zaman saya dulu juga capek. Yang beda: dulu tidak ada tempat curhat. Sekarang setidaknya ada grup, ada tulisan, ada teman yang bisa menjawab jam 2 malam.\n\nJadi jangan malu capek. Yang penting besok pagi bangun lagi, mandi, dan jalan lagi. Itu sudah hebat.\n\nSalam, dari bapak-bapak yang juga masih berjuang antar anak sekolah.",
    comments: [
      { authorId: 9, minutesAgo: 2360, content: "makasih, bapak. baca ini jam 1 malam abis lembur. langsung beda rasanya" },
      { authorId: 22, minutesAgo: 2280, content: "salam balik. semoga bapak dan anak-anak selalu sehat" },
      { authorId: 26, minutesAgo: 2200, content: "antar anak sekolah itu olahraga juga ya bapak. tiap pagi dua kali naik-turun kendaraan" },
      { authorId: 31, minutesAgo: 2100, content: "'ada teman yang bisa menjawab jam 2 malam' — dan kadang jawabannya cuma 'sabar ya'. tapi cukup kok" },
      { authorId: 44, minutesAgo: 1950, content: "bapak gue juga begini kalau ngetik. semua kata depan huruf besar. resmi, kayak surat dinas" },
      { authorId: 7, minutesAgo: 1800, content: "'Salam' dari orang yang belum kenal kita ternyata bisa bikin sejuk. ini bukan soal cuaca" },
    ],
  },
]
