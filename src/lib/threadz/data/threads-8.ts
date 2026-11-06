import type { ThreadzThread } from "../types"

// PART 8: cuitan 176-200 — ROMBAK TOTAL V3 (Nov 2026). Penulis 26-50 urut.
// Hukum isi: scripts/rumus-v2.md BAGIAN 2 (FORMULA HITAM dilarang) + BAGIAN 4.
export const THREADS_PART8: ThreadzThread[] = [
  {
    id: 176,
    authorId: 26,
    minutesAgo: 5275,
    shares: 16,
    content:
      "pagi tadi naik satu tukang sayur membawa empat ikat sayur di pangkuannya. gue bilang nak, taruh saja di kursi kosong, dia bilang tidak usah, biar gue pegang, nanti kusut. semua penumpang menggeser sedikit agar sayurnya dapat tempat. satu ibu malah memegangi ikat paling atas. tukang sayurnya turun di pasar, sayurnya tetap rapi gak kusut",
    comments: [
      { authorId: 102, minutesAgo: 5267, content: "naik angkot bareng tukang sayur itu untung, saya pernah dapat satu ikat kangkung gratis gara-gara bantu angkat" },
      { authorId: 199, minutesAgo: 5259, content: "tukang sayur naik angkot pagi itu biasanya dari kebun jam 5, sayurnya masih ada embun, wanginya beda sama yang di pasar" },
    ],
  },
  {
    id: 177,
    authorId: 27,
    minutesAgo: 5305,
    shares: 8,
    content:
      "Tukang angkut baru hari ini lupa mencatat satu pallet. Pencarian di daftar tidak menemukan apa-apa, kelompok kami nyaris menganggap pallet itu menguap. Sore ini ditemukan juga: ditaruh di ujung rak paling bawah, tertutup kardus kosong. Tukang angkut itu minta maaf dua kali, besok ia akan mencatat sebelum mengangkat, bukan setelah.\nGudang itu tempat yang menghukum kelalaian dengan cara yang sabar: barangnya muncul sendiri, malunya yang tidak.",
    comments: [
      { authorId: 240, minutesAgo: 5297, content: "catat sebelum angkat. mantra itu harus dijahit di punggung semua orang gudang mas" },
    ],
  },
  {
    id: 178,
    authorId: 28,
    minutesAgo: 5335,
    shares: 27,
    content:
      "guys tolong cek pemahaman gue soal grafik fungsi kuadrat. gue paham: kalau a positif parabola buka ke atas, a negatif buka ke bawah. contoh y = x² − 4x + 3, a-nya 1 jadi buka ke atas. gue faktorkan jadi (x−1)(x−3), titik potong sumbu x-nya 1 dan 3. terus puncaknya di tengah-tengahnya kan? gue hitung (1+3)/2 = 2, lalu masukkan x = 2 ke rumus: 4 − 8 + 3 = −1. jadi puncaknya (2, −1).\nBENER GAK INI? temen gue bilang puncak itu pakai −b/2a, dan jawabannya sama aja. tapi gue pengen tahu kenapa bisa sama, bukan sekadar cocok",
    comments: [
      { authorId: 212, minutesAgo: 5327, content: "benar kak! −b/2a = −(−4)/2 = 2, dan (1+3)/2 = 2. keduanya sama karena titik puncak memang selalu tepat di tengah dua akar 🙃" },
      { authorId: 223, minutesAgo: 5319, content: "puncak di tengah dua akar itu sifat simetri parabola kak, jadi caramu bukan kebetulan, itu sifat resminya 🙃" },
      { authorId: 131, minutesAgo: 5311, content: "cara lu lebih cepet buat cek kilat bre, rumus −b/2a dipakai kalau gak sempet difaktorkan" },
    ],
  },
  {
    id: 179,
    authorId: 29,
    minutesAgo: 5365,
    shares: 11,
    content:
      "proyek akhir gue disetujui: bikin sandaran sepeda dari besi bekas, tinggi dudukan 75 cm sesuai ukuran sepeda standar. om bengkel hanya bilang satu hal: ukur dulu sepeda paling kecil yang biasa dipakai anak-anak di sini, jangan kejar angka standar internet. jadi malam ini gue mengukur tiga sepeda tetangga, bukan satu.\nbengkel itu ternyata sekolah yang tidak memberi rapor",
    comments: [
      { authorId: 186, minutesAgo: 5357, content: "ukur yang ada, bukan yang tertulis. itu pelajaran bengkel paling mahal dan sekaligus paling murah om" },
      { authorId: 213, minutesAgo: 5349, content: "75 cm itu cocok untuk ring 26-27 inci om, tetapi ukuran lokal selalu menang 🙃" },
    ],
  },
  {
    id: 180,
    authorId: 30,
    minutesAgo: 5395,
    shares: 15,
    content:
      "Pertanyaan si anak les sore ini: kenapa harus belajar kecepatan kalau nanti tidak jadi sopir? Saya jawab karena kecepatan itu cara berpikir tentang jarak dan waktu, bukan urusan kendaraan. Dia balik bertanya: kalau begitu kenapa di bukunya contohnya selalu mobil? Saya terdiam, karena benar juga; semua contoh di buku itu kendaraan.\nMalam ini saya menyiapkan contoh baru: kecepatan mengetik, kecepatan menghafal, kecepatan menuruni tangga. Besok saya bawa. Kalau besok dia masih nanya kenapa, berarti pekerjaan rumah saya yang belum selesai.",
    comments: [
      { authorId: 262, minutesAgo: 5387, content: "contoh kecepatan menghafal itu bagus, karena yang dihitung anak sehari-hari memang begitu" },
      { authorId: 39, minutesAgo: 5379, content: "pertanyaan si anak itu pertanyaan kurikulum, bukan pertanyaan matematika. gurunya yang harus menang" },
      { authorId: 90, minutesAgo: 5371, content: "contoh menuruni tangga itu asyik, sekalian hitung anak tangganya, anak-anak suka yang bisa mereka cek sendiri" },
    ],
  },
  {
    id: 181,
    authorId: 31,
    minutesAgo: 5425,
    shares: 17,
    content:
      "pelanggan tetangga membeli dua bungkus, katanya uangnya belum cair: catat aja kak, besok sore bayar. gue tulis di buku, tanpa tanda tangan, tanpa nomor rumah, hanya nama dan hari. gue tidak tahu ini namanya ceroboh atau namanya tetangga.\nyang gue tahu, tiga tahun membuka kios, catatan seperti ini belum satu pun hangus. besok sore dia datang, gue mau pura-pura lupa, biar dia yang senang lebih dulu",
    comments: [
      { authorId: 102, minutesAgo: 5417, content: "catatan tanpa tanda tangan gitu jangan ditiru sama pembeli baru kak, om saya dulu ada yang numpang berulang terus gak bayar sampai pindah kampung" },
      { authorId: 258, minutesAgo: 5409, content: "pura-pura lupa itu jurus bagus kak, tapi jangan sering, sekali-sekali aja biar gak jadi kebiasaan dia juga" },
    ],
  },
  {
    id: 182,
    authorId: 32,
    minutesAgo: 5455,
    shares: 13,
    content:
      "hujan semalam kencang, teh mengira sayur berantakan. ternyata pagi ini bayam justru segar, kangkung tetap tegak, yang lemas hanya daun ketumbar. teh mencuci, menata, dan tetap lumayan. pelanggan bertanya, teh, sayur begini tahan berapa hari di kulkas? teh menjawab dua hari paling enak, hari ketiga masih bisa, tetapi enaknya sudah pindah ke penggorengan. pelanggan ketawa.\njawaban jujur itu murah, teh tidak tahu kenapa jarang dipakai",
    comments: [
      { authorId: 84, minutesAgo: 5447, content: "gue pernah ditawarin sayur 'masih bagus' padahal udah lembap. sejak itu gue lebih percaya sama yang bilang 'ini yang terbaik hari ini'" },
    ],
  },
  {
    id: 183,
    authorId: 33,
    minutesAgo: 5485,
    shares: 20,
    content:
      "Tanya takaran nasi sekali lagi. Biasa memasak 3 gelas beras dengan air sampai satu ruas jari di atas beras. Malam ini anak pulang membawa dua teman, jadi berasnya naik menjadi 4 gelas. Pertanyaannya: airnya ikut naik sebesar apa? Tetap satu ruas jari di atas beras, atau perlu ditambah lebih karena berasnya lebih banyak?\nAku pernah terlalu yakin dan hasilnya menjadi bubur. Sekarang aku ingin mendengar pengalaman yang lebih waras.",
    comments: [
      { authorId: 59, minutesAgo: 5477, content: "ruas jari itu ikut naik bersama berasnya kak, karena ia rasio, bukan ukuran tetap. satu ruas di atas beras untuk 3 maupun 4 gelas tetap aman 🙏" },
      { authorId: 219, minutesAgo: 5469, content: "air mengikuti rasio kak, bukan mengikuti panci. kalau 3 gelas dulu pas, untuk 4 gelas tinggal tambahkan sepertiga bagian air lamanya 🙃" },
    ],
  },
  {
    id: 184,
    authorId: 34,
    minutesAgo: 5515,
    shares: 10,
    content:
      "Lampu jalan depan pos berkedip tiga malam. Saya mencatat ke admin: lokasi, waktu kedip, sisi jalan. Dua hari kemudian diperbaiki, dan malam ini lampunya menyala tenang tanpa kedip. Saya kirim balasan ke admin: terima kasih, lampunya sudah baik. Admin balas satu kata: sip. urusan selesai dalam dua baris.",
    comments: [
      { authorId: 199, minutesAgo: 5507, content: "pak, lampu jalan itu ada nomor tiangnya, lain kali sekalian foto tiangnya, perbaikan bisa lebih cepat" },
      { authorId: 272, minutesAgo: 5499, content: "admin balas sip doang ya pak wkwk, admin kantor saya juga gitu, itu tandanya pekerjaannya udah kelar semua" },
      { authorId: 336, minutesAgo: 5491, content: "wkwk admin-nya rajin juga pak, catatan kedip doang kok dua hari udah beres" },
    ],
  },
  {
    id: 185,
    authorId: 35,
    minutesAgo: 5545,
    shares: 22,
    content:
      "pikiran jam 11 malam: kalau SEMUA lampu di kota mati bersamaan selama satu detik, mata kita yang kebiasaan terang langsung bisa lihat bintang tidak ya? gue dengar di tempat yang benar-benar gelap, bintangnya semua kelihatan. tapi mata kita juga baru terkena gelap, harus adaptasi dulu kan, sekitar 15-30 menit katanya. jadi satu detik itu tidak cukup ya.\nberasa menyesal bertanya, tetapi tetap ingin tahu: ada yang pernah mengalami mati lampu lama di kota? bintangnya kelihatan tidak beneran?",
    comments: [
      { authorId: 212, minutesAgo: 5537, content: "mata butuh waktu adaptasi bre, sekitar 20-30 menit untuk gelap penuh. satu detik tidak cukup, tetapi ada yang pernah mengalami padam seisi kota dan bilang langitnya berubah total 🙃" },
    ],
  },
  {
    id: 186,
    authorId: 36,
    minutesAgo: 5575,
    shares: 14,
    content:
      "km, malam ini gue menemukan cara menghafal tanda peradangan yang akhirnya menempel: rubor, calor, dolor, tumor, functio laesa. merah, panas, nyeri, bengkak, fungsi hilang. gue bikin kalimat sendiri: RUDY CINTA DODDY TUKANG FUTSAL. aneh, tetapi lama-lama menempel. kakak tingkat gue bilang metode begini namanya jembatan keledai yang personal, tidak bisa dipinjam orang lain.\nbenar juga. kalimat gue kalau dibaca orang lain pasti ketawa, tidak hafal",
    comments: [
      { authorId: 227, minutesAgo: 5567, content: "jembatan keledai personal itu hafalan paling awet kak, yang dipinjam biasanya cepat terlupakan 🙃" },
      { authorId: 213, minutesAgo: 5559, content: "catatan kecil kak: empat tanda pertama dari Celsus, functio laesa yang kelima tambahan dari Galen. kalau ujiannya menanyakan sejarah, jangan lupakan Galen 🙃" },
      { authorId: 71, minutesAgo: 5551, content: "semangat kak, RUDY CINTA DODDY TUKANG FUTSAL itu kalimat yang akan menguasai dunia 😄" },
      { authorId: 327, minutesAgo: 5543, content: "gue akan mengingat DODDY TUKANG FUTSAL sampai kapan pun kak, terima kasih sudah mengajari" },
    ],
  },
  {
    id: 187,
    authorId: 37,
    minutesAgo: 5605,
    shares: 9,
    content:
      "Bocah tetangga belajar naik sepeda empat sore berturut-turut. Hari pertama jatuh dua kali, hari kedua jatuh sekali lalu berhenti lebih awal, hari ketiga tidak jatuh tetapi belum berani dilepaskan. Hari keempat sore ini: ia melaju sendiri sepanjang jalan depan, sambil berteriak sambil melihat ke belakang, tidak memandang jalan.\nibunya udah nyiapin kunci pas dari tadi sore, katanya habis dia bisa, roda bantunya dibuka hari itu juga. bocahnya gak tau",
    comments: [
      { authorId: 262, minutesAgo: 5597, content: "sepeda anak sekarang rodanya gampang dilepas ya pak, jaman saya dulu roda bantunya dibuka pakai gergaji wkwk" },
      { authorId: 199, minutesAgo: 5589, content: "sore keempat itu yang membuat tiga sore sebelumnya tidak terasa sia-sia" },
      { authorId: 272, minutesAgo: 5581, content: "hati-hati pak, anak yang melihat ke belakang sambil berteriak itu biasanya nabrak, kasih teriakan pelan-pelan aja" },
    ],
  },
  {
    id: 188,
    authorId: 38,
    minutesAgo: 5635,
    shares: 21,
    content:
      "bunda membeli roti enam, aku makan dua, sisanya empat. aku menulis di kertas: 6 − 2 = 4. lalu aku berpikir, kalau rotinya dimakan semua, 6 − 6 = 0, artinya ada nol roti di atas meja. nol itu bukan sesuatu yang ada, tetapi kok aku bisa bilang ada nol roti? bunda bilang pertanyaanku membuatnya ikut berpikir.\nsekarang kami berdua duduk berpikir tentang nol sambil makan roti. nol itu tidak bisa dimakan, bunda",
    comments: [
      { authorId: 39, minutesAgo: 5627, content: "pertanyaanmu luar biasa nak. nol memang angka yang mewakili ketiadaan; kita bisa berbicara tentang sesuatu yang tidak ada, itu keajaiban bahasa sekaligus angka" },
      { authorId: 90, minutesAgo: 5619, content: "coba eksperimen kecil: satu kotak kosong, satu kotak isi 1 kelereng, suruh dia hitung dua-duanya, nanti dia sendiri nemu beda ada dan tidak ada" },
    ],
  },
  {
    id: 189,
    authorId: 39,
    minutesAgo: 5665,
    shares: 31,
    content:
      "Sering ditanya: kenapa 1 tidak termasuk bilangan prima? Jawabannya bukan karena 1 aneh, melainkan definisi: prima adalah bilangan yang memiliki tepat dua pembagi. 1 hanya punya satu pembagi, yaitu dirinya sendiri. Jika 1 dianggap prima, banyak pernyataan matematika harus menambah kalimat kecuali 1 di mana-mana; lebih nyaman memilih definisi yang membuat pernyataan lain bersih.\nAnak tetangga menilai itu sepertinya memilih aturan demi kerapian. Saya menjawab iya, matematika memang seni merapikan. Kurang lebih begitu sore ini.",
    comments: [
      { authorId: 212, minutesAgo: 5657, content: "contoh paling jelasnya bre: faktorisasi prima. kalau 1 ikut, 12 bisa menjadi 1×1×1×2×2×3 dan seterusnya tanpa ujung. mengerikan 🙃" },
      { authorId: 227, minutesAgo: 5649, content: "tepat dua pembagi itu kuncinya bre. 1 hanya punya satu, jadi ia bukan prima dan bukan komposit, ia warga bebas 🙃" },
      { authorId: 313, minutesAgo: 5641, content: "'matematika seni merapikan' itu kalimat yang akan gue tempel di meja belajar wkwk" },
      { authorId: 209, minutesAgo: 5633, content: "inilah yang membuat gue suka matematika: aturannya boleh dipilih, asal konsekuensinya dihitung 🙃" },
    ],
  },
  {
    id: 190,
    authorId: 40,
    minutesAgo: 5695,
    shares: 13,
    content:
      "Panen pertama kebun tomat: enam buah, tidak besar, kemerahannya belum merata. Tiga saya bawa ke tetangga, tiga lagi disimpan untuk sambal. Tetangga yang menerima berkata panen berikutnya harus lebih banyak, saya cuma senyum, benihnya masih ada setengah bungkus.\nSambalnya besok saya bikin. Kalau tiga tomat gak cukup, ya campur cabai rawit, namanya juga panen darurat.",
    comments: [
      { authorId: 84, minutesAgo: 5687, content: "enam buah itu sudah layak disebut panen. tahun depan kalau kelebihan baru rasanya jadi petani sungguhan" },
    ],
  },
  {
    id: 191,
    authorId: 41,
    minutesAgo: 5725,
    shares: 15,
    content:
      "Paket tadi pagi berat, alamatnya kebun di ujung kampung, dari jalan masih jalan kaki dua ratus meter, becek. Penerimanya bapak lanjut usia, gue bantu angkut sampe pinggir kebun. Di situ disodorin teh hangat, gak enak nolak, minum dua gelas sambil denger cerita alat itu buat nanam cabai lagi, tahun lalu gagal panen. Yang bikin gue pengen nanya justru pas pulang: aplikasi ngarahin gue muter jauh, padahal jalan kebun itu lebih deket, gue lewat situ gak ada masalah kok. kenapa rute apps sering gak masuk akal gini sih, ada yang ngalamin juga gak",
    comments: [
      { authorId: 258, minutesAgo: 5717, content: "teh di tepi kebun itu gak bisa ditolak mas, sekali ditawarin dua gelas, cerita panen tahun lalu ikut kebawa semua" },
      { authorId: 199, minutesAgo: 5709, content: "jalan kebun emang gitu mas, sepatu saya dua kali sebulan harus dicuci, lumpurnya lengket" },
      { authorId: 272, minutesAgo: 5701, content: "mas, alat pertanian berat itu biasanya dibantu angkut sampai gudang kan? jangan cuma ditaruh depan pagar, besok dia repot sendiri" },
    ],
  },
  {
    id: 192,
    authorId: 42,
    minutesAgo: 5755,
    shares: 16,
    content:
      "Jam dinding baru saya pasang di dapur, besar dan mudah terbaca dari lorong. Efeknya tak terduga: anak-anak kos yang biasanya mandi jam sembilan malam kini berlomba-lomba mandi jam delapan, katanya takut ketahuan jadwal mandinya tertinggal. Ada yang menulis jam mandi di kertas kecil dan menempelnya di pintu kamar.\nBesok saya beli satu jam lagi buat ruang tengah, buat yang lalu-lalu ngebut dari dapur padahal waktunya masih jam 7.",
    comments: [
      { authorId: 71, minutesAgo: 5747, content: "yang ngebut dari dapur itu biasanya yang baru dilarang goreng di kamar ya wkwk" },
      { authorId: 205, minutesAgo: 5739, content: "kertas kecil tempel pintu itu gampang rontok, suruh aja pakai lakban bening, punya saya dulu tiap pagi gak keliatan karena keburu gelap" },
    ],
  },
  {
    id: 193,
    authorId: 43,
    minutesAgo: 5785,
    shares: 6,
    content:
      "Mesin baru tiba hari ini, pelatihan operator berlangsung dua hari. Menariknya: yang paling banyak bertanya justru operator lama, karena mereka hafal di bagian mana mesin lama sering bermasalah, jadi mereka mencocokkan satu per satu. Yang paling percaya diri operator muda, sampai mencoba satu prosedur, diam beberapa detik, lalu bertanya juga.\nSore ini kedua kelompok duduk bersama menyalin catatan yang sama. Ada yang janji bawa kopi buat sesi besok pagi. Mesinnya sendiri baru mau dicoba start Kamis.",
    comments: [
      { authorId: 240, minutesAgo: 5777, content: "mas, operator lama nanya banyak itu wajar, mereka takut ada prosedur baru yang beda sama kebiasaan mereka" },
      { authorId: 199, minutesAgo: 5769, content: "pelatihan dua hari cukup ya mas? mesin baru di tempat saya dulu tiga hari, hari ketiganya cuma buat tanya-tanya bebas" },
      { authorId: 272, minutesAgo: 5761, content: "kopinya jangan lupa ditagih mas wkwk, janji begini biasanya yang paling sering ilang" },
      { authorId: 192, minutesAgo: 5753, content: "pelatihan dua hari dengan dua kelompok duduk bersama biasanya berakhir menjadi aturan tak tertulis yang paling kuat" },
    ],
  },
  {
    id: 194,
    authorId: 44,
    minutesAgo: 5815,
    shares: 24,
    content:
      "hari ini gue merebus telur dua belas menit, tetapi karena asyik main ponsel menjadi dua puluh menit. pinggir kuningnya jadi abu-abu kehijauan. gue panik mengira telurnya tercemar, gue telusuri, ternyata itu reaksi besi dan sulfur telur kalau terlalu panas; tidak berbahaya, hanya tidak enak dilihat. temen kos menyarankan cepat-cepat dinginkan telurnya setelah merebus agar tidak terlanjur kepanasan.\ndapur itu sekolah kimia gratis. gue tidak mendaftar tetapi tidak bisa keluar",
    comments: [
      { authorId: 213, minutesAgo: 5807, content: "itu cincin besi-sulfur bre, muncul di tepi kuning karena telur terlalu lama panas. dinginkan cepat dengan air dingin, tidak akan muncul lagi 🙃" },
      { authorId: 318, minutesAgo: 5799, content: "kimia gratis plus gelar sarjana telur bre, lulusan dapur semua" },
    ],
  },
  {
    id: 195,
    authorId: 45,
    minutesAgo: 5845,
    shares: 7,
    content:
      "Melati yang saya tanam bulan lalu mulai berbunga. Tetangga berhenti di depan pagar, berkata wangi. Saya menjawab, dari tanaman itu juga.\nHal seperti itulah yang membuat pagi terasa cukup.",
    comments: [],
  },
  {
    id: 196,
    authorId: 46,
    minutesAgo: 5875,
    shares: 18,
    content:
      "Surat edaran kurikulum baru datang: 14 halaman. Seminggu kemudian turun ringkasannya: 2 halaman. Semua guru membaca ringkasannya, termasuk saya. Petugas administrasi bertanya, jika ringkasannya sudah cukup, untuk apa yang panjang? Saya menjawab: yang panjang itu untuk arsip, yang ringkas untuk hidup 😅\nBesok ringkasannya saya tempel di papan, dan yang panjang disimpan di lemari yang pintunya tertutup rapat.",
    comments: [
      { authorId: 192, minutesAgo: 5867, content: "yang panjang untuk arsip, yang ringkas untuk hidup. kalimat itu layak masuk kumpulan catatan birokrasi bu" },
    ],
  },
  {
    id: 197,
    authorId: 47,
    minutesAgo: 5905,
    shares: 19,
    content:
      "Nasabah datang membawa anaknya yang mungkin berusia empat tahun. Anak itu menatap ruangan, lalu bertanya keras-keras, ini rumah uang ya? Sebagian nasabah tertawa. Satu bapak menjawab, iya, nanti kamu tumbuh menjadi orang yang menjaganya. Saya memberi permen, anak itu mengangguk seperti menerima tugas.\nSeharian ruangan itu lebih ringan. Anak-anak punya cara memberi izin kepada ruangan untuk bernapas.",
    comments: [
      { authorId: 84, minutesAgo: 5897, content: "anak kecil di antrean itu hiburan gratis sekaligus alarm buat yang gak sabaran. untung nasabahnya yang sabar" },
      { authorId: 262, minutesAgo: 5889, content: "'rumah uang' itu nama yang jujur. orang dewasa menyebutnya dengan nama panjang yang berat, kak" },
      { authorId: 205, minutesAgo: 5881, content: "bapak yang menjawab nanti kamu tumbuh menjaganya itu nasihat singkat yang bagus kak" },
      { authorId: 283, minutesAgo: 5873, content: "permen dan anggukan itu transaksi paling polos hari ini kak" },
    ],
  },
  {
    id: 198,
    authorId: 48,
    minutesAgo: 5935,
    shares: 11,
    content:
      "Pengunjung muda hari ini berdiri membaca satu bab selama hampir dua jam, dekat rak filsafat. Saya membawakan kursi tanpa bertanya. Ia menerima, mengucapkan terima kasih dua kali, lalu kembali membaca sambil berdiri. Besok saya taruh bangku tinggi dekat rak itu, sekalian tanya dia kuliah apa, soalnya selama dua jam itu bukunya gak ia pindah-pindah.",
    comments: [
      { authorId: 258, minutesAgo: 5927, content: "rak filsafat itu memang bikin lupa waktu pak, saya pernah nyari satu buku di situ, keluar jam tutup, bukunya belum ketemu juga" },
      { authorId: 262, minutesAgo: 5919, content: "berdiri dua jam itu kaki saya udah pindah-pindah tiga kali pak, anak ini kuat juga" },
      { authorId: 272, minutesAgo: 5911, content: "kasih tau jam istirahat perpustakaannya juga pak, kadang pengunjung berdiri gara-gara gak tau bisa pindah ke ruang baca" },
      { authorId: 313, minutesAgo: 5903, content: "gue membaca sambil berdiri juga pak, kakinya yang menjadi saksi diam-diam wkwk" },
      { authorId: 322, minutesAgo: 5895, content: "rak filsafat memang membuat orang lupa duduk wkwk" },
    ],
  },
  {
    id: 199,
    authorId: 49,
    minutesAgo: 5965,
    shares: 14,
    content:
      "hari ini bos cuti dan gue menjaga toko sendirian pertama kali. kembalian lima ribu sering tidak tepat, satu pembeli yang sabar ikut membantu menghitung, lalu berkata santai bang, yang penting jujur. satu om lansia meminta potongan rapi, gue gagal dua kali, dia berkata potongan itu seni yang butuh sepuluh tahun.\nsore ini gue menutup toko, ngitung kembalian tiga kali soalnya masih deg-degan. besok bos balik, laporan gue satu kalimat: toko aman, potongan rapi belum jadi bagian dari diri gue",
    comments: [
      { authorId: 186, minutesAgo: 5957, content: "pertama kali jaga sendirian itu gini bang, gue dulu salah kasih kembalian 50 ribu, besoknya nyeret laci dihitung mundur tiga kali" },
      { authorId: 199, minutesAgo: 5949, content: "yang ngomongin sepuluh tahun itu omnya bercanda bang wkwk, atau dia emang nyekrip 30 tahun" },
      { authorId: 144, minutesAgo: 5941, content: "potongan rapi butuh sepuluh tahun itu bilangan yang tidak berlebihan bang, gue setuju wkwk" },
    ],
  },
  {
    id: 200,
    authorId: 50,
    minutesAgo: 5995,
    shares: 48,
    content:
      "GUYS. LAPORAN AKHIR BULAN.\nPELANGGAN HARI INI BANYAK. GUE TIDAK SEMPAT MENGHITUNG, TIDAK SEMPAT MENCATAT, TIDAK SEMPAT BERPIKIR. YANG GUE INGET: PANCINYA PANAS, TANGAN GUE PANAS, SEMUANYA PANAS. SATU PELANGGAN BILANG 'SAMBARANMU NAIK KUALITAS BANG'. GUE TIDAK TAHU ITU PUJIAN ATAU TUDUHAN.\nBULAN INI DITUTUP DENGAN UAP, TANGAN, DAN SATU KESIMPULAN: BESOK GUE BUKA LAGI.",
    comments: [
      { authorId: 154, minutesAgo: 5987, content: "GUYS 'SAMBARANMU NAIK KUALITAS' ITU PUJIAN PALING KACAU BRE, GUE IKUT BANGGA" },
    ],
  },
]
