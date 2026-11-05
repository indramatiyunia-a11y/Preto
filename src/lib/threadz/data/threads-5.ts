import type { ThreadzThread } from "../types"

// PART 5: cuitan 101-125. Post ketiga penulis 1-25. Batch 1 dari sistem
// menuju 1000 cuitan (protokol: dev.sh di root, riset: scripts/sidik-jari.md).
//
// Aturan sama dengan part sebelumnya, plus tegas ini:
//  - TIAP cuitan wajib sidik baru: topik BELUM pernah dipakai (cek buku besar),
//    bentuk beda dari dua post sebelumnya, penutup beda, ritme beda.
//  - Topik batch ini (semua baru, tidak ada yang nyambung ke post lama):
//    luas keramik + cadangan 10%, PPN di struk, jam analog kelipatan lima,
//    gaji naik vs harga naik, warung titip kabar (hidup), aduk kopi 100x,
//    mean vs median, dosis per kilo, BBM per km, peluang dadu, pajak per
//    hari, KPK jadwal obat, regen stamina game, frekuensi motor per jam,
//    porsi belanja mengecil, pelunasan awal, diagonal TV (Pythagoras),
//    grosir vs eceran, hujan sepi (hidup), dompet ketinggalan (hidup),
//    diskon bertingkat, takaran sus, estimasi download, hitung mundur
//    tanggal, gaji magang per jam.
//  - Komentar tetap kampung & register online: nyambung isi post, gak ada
//    kalimat layanan tatap muka, gak ada cameo, gak ada esai, gak ada dobel.
export const THREADS_PART5: ThreadzThread[] = [
  {
    id: 101,
    authorId: 1,
    minutesAgo: 3025,
    shares: 12,
    content:
      "Alhamdulillah akhirnya jadi juga ganti keramik kamar anak yang pertama. Lantai lamanya udah ngangkang di satu sudut. Kukira beli keramik tinggal ukur panjang kali lebar. Kamar 3 kali 4 meter, berarti 12 meter kotak. Kata tukangnya jangan dibeli pas, tambah sepuluh persen buat yang kepotong dan yang pecah pas dipasang. 12 ditambah sepuluh persen jadi 13,2. Jadi beli 14 kotak biar aman.\n\nPas dipasang kepake 13. Sisa satu kotak sekarang nangkring di gudang. Papanya bilang simpan aja, siapa tau butuh tambal. Ya udah deh, simpan.",
    comments: [
      { authorId: 74, minutesAgo: 3017, content: "beli lebih itu bener kak. waktu renovasi rumahku kekurangan dua kotak, beli lagi gambarnya beda 😭" },
      { authorId: 60, minutesAgo: 3009, content: "13,2 itu itungan teliti banget kak, aku mah langsung dikali satu setengah 😭" },
      { authorId: 33, minutesAgo: 3002, content: "sisa satu kotak itu bukan sisa bu, itu cadangan 😄" },
      { authorId: 85, minutesAgo: 2995, content: "setuju sama papanya bu. simpan." },
      { authorId: 97, minutesAgo: 2988, content: "semoga kamar anaknya makin nyaman ya kak 🙏" },
    ],
  },
  {
    id: 102,
    authorId: 2,
    minutesAgo: 3055,
    shares: 30,
    content:
      "GUE MAKAN DI KAFE SEKALI SEBULAN DOANG. MAKANNYA 60 RIBU. GUE SIAPIN 65 RIBU PAS. PAS DIKASIH STRUKNYA: 66,6 RIBU. GUE TANYA ITU APAAN. KATANYA PPN SEBELAS PERSEN. TERNYATA MAKAN 60 RIBU ITU ADA TANGGUNGAN 6,6 RIBU YANG GAK PERNAH MUNCUL DI MENU. GUE ITUNG DI KEPALA, 60 DIBAGI SEPULUH DITAMBAH SEPARONYA, BENER 6,6. GAK NYANGKA ITUNGAN GUE DIPAKE BUAT BIAYA TAMBAHAN. GUE BAYAR PAKAI SENYUMAN. PULANGNYA JALAN KAKI 2 KM. BIAR BALIK DUITNYA",
    comments: [
      { authorId: 44, minutesAgo: 3047, content: "66,6 dari 60 itu nambah 11 persen bre, sampe gue ikutan ngitung wkwk" },
      { authorId: 137, minutesAgo: 3040, content: "pulang jalan kaki 2 km itu kelas ekonomi bre wkwk" },
      { authorId: 10, minutesAgo: 3032, content: "MENU YANG GAK NULIS HARGA SEBELUM PAJAK ITU TIPU DAYA DUNIA WKWK" },
      { authorId: 50, minutesAgo: 3025, content: "sekali sebulan dapet struk kafe, gue mah kalkulasi mie terus bre wkwk" },
      { authorId: 152, minutesAgo: 3018, content: "kafe itu kelas matematika terakhir gua bre wkwk" },
      { authorId: 25, minutesAgo: 3011, content: "di kerjaan juga bre, angka di brosur sama angka di kertas kerja beda. normal" },
    ],
  },
  {
    id: 103,
    authorId: 3,
    minutesAgo: 3085,
    shares: 21,
    content:
      "Hari ini saya baru tahu, ada Ananda kelas 4 yang tidak bisa membaca jam dinding. Bukan karena malas. Jarum pendek dan jarum panjangnya memang belum pernah dikenalkan sampai tuntas.\n\nSaya bawa jam kertas buatan sendiri. Kita mulai dari kelipatan lima: lima, sepuluh, lima belas. Ananda yang tadinya hanya mengangguk ikut maju, memasang jarumnya sendiri. Sebelum bel, dia bisa membaca jam 10.20 tanpa bantuan.\n\nSaya pulang dengan tas yang terasa lebih ringan dari isinya.",
    comments: [
      { authorId: 77, minutesAgo: 3077, content: "jam kertas buatan sendiri itu ajaib ya bu 🙏" },
      { authorId: 90, minutesAgo: 3069, content: "anakku lancar jam dinding waktu kelas 3 bu. kelipatan lima memang pintunya" },
      { authorId: 262, minutesAgo: 3061, content: "Kelipatan lima adalah pintu jam. Setelah lewat, siswa tidak kembali bingung." },
      { authorId: 103, minutesAgo: 3054, content: "semoga Ananda makin lancar ya bu 🙏" },
    ],
  },
  {
    id: 104,
    authorId: 4,
    minutesAgo: 3115,
    shares: 3,
    content:
      "Gaji naik 4 persen mulai bulan ini. Cabai naik dari 38 ke 52, sepertiga sekali angkat. Saya hitung keduanya di meja makan, jam 19.15. Hasilnya satu arah.\n\nKenaikan yang bertemu kenaikan itu bukan kenaikan. Itu posisi tetap.",
    comments: [
      { authorId: 174, minutesAgo: 3107, content: "posisi tetap itu istilahnya om. gaji jalan santai, harga jalan cepat" },
      { authorId: 192, minutesAgo: 3099, content: "cabai naik sepertiga om, gaji naik 4 persen. sayurnya menang telak" },
      { authorId: 271, minutesAgo: 3092, content: "Dihitung di meja makan jam 19.15 itu disiplin, Bapak." },
    ],
  },
  {
    id: 105,
    authorId: 5,
    minutesAgo: 3145,
    shares: 7,
    content:
      "pagi tadi bu rina mampir cuma buat duduk. belanjanya kopi satu sachet. yang panjang itu ceritanya: cucu pertamanya udah bisa jalan.\n\naku dengerin sambil nyusun galon. warung tuh kadang bukan tempat jualan ya. tempat orang nitip kabar seneng.\n\nsebelum pulang dia titip salam ke mamah. aku bilang iya. mamah kenal dia dari jaman aku kecil. salamnya kusampaikan sore ini juga.",
    comments: [
      { authorId: 66, minutesAgo: 3137, content: "cucu pertama jalan itu kabar segede itu dik, kopi sachet doang 😄" },
      { authorId: 15, minutesAgo: 3129, content: "warung emang tempat nitip kabar dik. aku juga begitu ke warung sebelah 😄" },
      { authorId: 199, minutesAgo: 3122, content: "pelanggan yang balik cuma buat cerita itu pelanggan sejati dik" },
    ],
  },
  {
    id: 106,
    authorId: 6,
    minutesAgo: 3175,
    shares: 3,
    content:
      "nonton video bilang aduk kopi seratus kali rasanya jadi beda. gue aduk seratus kali pake itungan jari sama lirik jam. hasilnya kopi. rasanya kopi. terus gue curiga gue kelebihan itung. gue ulang dari nol. pas udah 137 gue berhenti. 137 kan lebih dari seratus jadi mestinya makin beda. hasilnya tetep kopi. yang beda cuma tangan gue pegal. besok gue coba 200. gak ada yang bisa nge-stop gue",
    comments: [
      { authorId: 138, minutesAgo: 3167, content: "GUE IKUT NYOBA SEMALAM. HASILNYA GAK ADA YANG BERUBAH KECUALI JADWAL TIDUR WKWKWK" },
      { authorId: 143, minutesAgo: 3159, content: "137 itu bukan kelebihan itung bre, itu kelebihan semangat wkwk" },
      { authorId: 161, minutesAgo: 3151, content: "tangan pegal tapi dapet ilmu bre wkwk" },
      { authorId: 212, minutesAgo: 3144, content: "secara metode bre, gelasnya beda tuh variabel yang kelewat wkwk" },
      { authorId: 66, minutesAgo: 3136, content: "besok 200 itu tanganmu yang minta bre wkwk" },
    ],
  },
  {
    id: 107,
    authorId: 7,
    minutesAgo: 3205,
    shares: 41,
    content:
      "berita bilang rata-rata gaji lulusan baru segini segini. guys, inget ya itu mean. satu orang gajinya tinggi bisa ngangkat angkanya semua.\n\ncontoh gampang: lima orang, gajinya 3, 3, 4, 5, 40. rata-ratanya 11 juta. padahal empat dari lima gajinya paling jauh 5. yang jujur itu median: 4.\n\nyaudah sekarang tiap liat kata rata-rata, gua otomatis nyari medianannya. kebiasaan warisan dosen pembimbing. fix 🙃",
    comments: [
      { authorId: 212, minutesAgo: 3197, content: "40 juta itu yang bikin mean sombong wkwk" },
      { authorId: 215, minutesAgo: 3189, content: "median itu satu2nya angka yang gak gengsi kak 🙃" },
      { authorId: 217, minutesAgo: 3182, content: "gua sekarang gak percaya judul berita 🙃" },
      { authorId: 221, minutesAgo: 3174, content: "gue pake median buat itung sewa kos, lumayan wkwk" },
      { authorId: 155, minutesAgo: 3167, content: "yaudah gua ikutan nyari median juga kak 😭" },
    ],
  },
  {
    id: 108,
    authorId: 8,
    minutesAgo: 3235,
    shares: 23,
    content:
      "shift malam. bayi masuk jam 23.10, bobot 8 kilo. dosis 15 mg per kilo. 8 kali 15, 120 mg. gue itung dua kali. selalu dua kali.\n\nobat kebanyakan bukan nambah kesembuhan, cuma nambah kerjaan. jam 23.40 aman.",
    comments: [
      { authorId: 12, minutesAgo: 3227, content: "itung dua kali itu bukan pelan om, itu standar" },
      { authorId: 243, minutesAgo: 3219, content: "8 kilo kali 15 = 120, bener om" },
      { authorId: 248, minutesAgo: 3212, content: "pasien tidur, perawat bisa duduk. itu menang om" },
    ],
  },
  {
    id: 109,
    authorId: 9,
    minutesAgo: 3265,
    shares: 15,
    content:
      "isi bensin 2 liter pagi.\nsore cek, 48 km jalan.\nberarti 24 km per liter.\nharga naik 800 per liter dari minggu lalu.\nberarti tiap km naik 33 rupiah.\ngak kerasa di sekali jalan.\nberasa di akhir bulan.\nbesok coba rute kanan yang katanya lancar. itung lagi.",
    comments: [
      { authorId: 187, minutesAgo: 3257, content: "33 rupiah per km gak kerasa bang, tapi numpuk wkwk" },
      { authorId: 199, minutesAgo: 3249, content: "24 km per liter lumayan bang, punyaku 21 doang" },
      { authorId: 240, minutesAgo: 3242, content: "rute kanan tuh kadang jaraknya nambah tapi lama ngedum bang" },
      { authorId: 235, minutesAgo: 3234, content: "kenaikan tuh paling berasa pas itung akhir bulan bang 😭" },
    ],
  },
  {
    id: 110,
    authorId: 10,
    minutesAgo: 3295,
    shares: 26,
    content:
      "GILS PR PELUANG LEMPAR DADU 30 KALI CATAT HASILNYA. KATA BUKU PELUANG DAPET ANGKA 6 ITU SATU PER ENAM, JADI DARI 30 LEMPARAN HARUSNYA KELUAR 5 KALI. GUE LEMPAR BENERAN SAMPE MAMA KIRA GUE MAIN DADU DI KAMAR. HASILNYA ANGKA 6 KELUAR 3 DOANG WKWKWK. GUE TANYA BU GURU, KATANYA NAMANYA JUGA PELUANG BUKAN JANJI. YA SUDAH BESOK GUE LEMPAR 30 KALI LAGI BIAR ADIL WKWK",
    comments: [
      { authorId: 127, minutesAgo: 3287, content: "wkwk 3 dari 30 itu rezeki dadunya bre" },
      { authorId: 144, minutesAgo: 3279, content: "GUE DADUNYA KEBALIK. 6 KELUAR 7 KALI. KITA TUKARAN DADU WKWK" },
      { authorId: 149, minutesAgo: 3271, content: "'peluang bukan janji' wkwkwk kata bu gurunya gue simpen" },
      { authorId: 160, minutesAgo: 3264, content: "besok 30 lemparan lagi itu komitmen bre 😭" },
      { authorId: 13, minutesAgo: 3256, content: "dadunya gk sre bre wkwk" },
    ],
  },
  {
    id: 111,
    authorId: 11,
    minutesAgo: 3325,
    shares: 41,
    content:
      "Pajak motor tahunan jatuh bulan ini: 1.245.000. Nomor besar. Akhir pekan lalu kubagi kecil-kecil: setahun 365 hari, jadi sekitar 3.400 per hari.\n\nKesimpulannya sederhana: yang bikin berat biasanya soal kapan uangnya keluar, bukan soal besarnya. Sekarang pos kendaraan di catatanku dua kolom: bayarnya sekali setahun, itungannya per hari.\n\nPikiranku lebih ringan daripada dompetku.",
    comments: [
      { authorId: 262, minutesAgo: 3317, content: "Membagi yang besar menjadi per hari itu cara menenangkan diri yang baik." },
      { authorId: 16, minutesAgo: 3309, content: "kalau dihitung per hari, tagihan segede apapun jadi bisa dilalui ya." },
      { authorId: 267, minutesAgo: 3302, content: "Angka besar yang sudah dibagi itu gak bikin gelisah. Bagus." },
    ],
  },
  {
    id: 112,
    authorId: 12,
    minutesAgo: 3355,
    shares: 5,
    content:
      "pasien dua obat.\nsatu tiap 6 jam. satu tiap 8 jam.\njam 6 pagi dua2nya bareng.\nkenapa? 24. angka pertama yang bisa dibagi 6 dan 8.\nperawat gak hafal rumus.\nperawat hafal jam 6 pagi.\nbesok juga jam 6 pagi.",
    comments: [
      { authorId: 8, minutesAgo: 3347, content: "jam 6 pagi itu jam sakti semua bangsal mbak" },
      { authorId: 246, minutesAgo: 3339, content: "dibagi 6 dan 8 ketemu 24. matematika paling kepake di bangsal mbak" },
      { authorId: 240, minutesAgo: 3332, content: "obat bareng jam 6 pagi, yang bangun juga seiklasnya wkwk" },
    ],
  },
  {
    id: 113,
    authorId: 13,
    minutesAgo: 3385,
    shares: 19,
    content:
      "stamina di game balik 1 tiap 3 menit. stamina full 20. gue tnggu dari 5. butuh 45 menit. gue itung pake timer hape beneran. pas 45 menit stamina 20 pas. terus gue mikir gk lucu ya hidup gue nunggu 45 menit buat angka game. gk lucu tp gue lanjut main. wkwk. besok libur gue itung lg dari nol, siapa tau ada triknya",
    comments: [
      { authorId: 154, minutesAgo: 3377, content: "45 menit nunggu stamina bre, mending tidur wkwk" },
      { authorId: 127, minutesAgo: 3369, content: "gue itung jg semuanya bre, banner gue itung hari wkwk" },
      { authorId: 158, minutesAgo: 3361, content: "timer hape buat stamina itu teliti bre wkwk" },
      { authorId: 10, minutesAgo: 3353, content: "GAK LUCU TAPI LANJUT. JUDUL HIDUP ANAK GAME WKWKWK" },
    ],
  },
  {
    id: 114,
    authorId: 14,
    minutesAgo: 3415,
    shares: 7,
    content:
      "jam 7: rame. jam 8: rame. jam 9: kosong.\njam 12: rame sebentar, semua cari makan.\njam 2: kosong banget. gue hitung motor 8 doang.\njam 5: rame lagi.\nberarti gue kerja dua kali sehari. sisanya jaga.\njaga itu kerjaan juga. cuma gak dibayar doang.",
    comments: [
      { authorId: 186, minutesAgo: 3407, content: "jam 2 kosong itu jam tukang parkir ngopi mas" },
      { authorId: 205, minutesAgo: 3399, content: "dua kali rame sisanya jaga. sama kayak jualan mas" },
      { authorId: 190, minutesAgo: 3392, content: "motor 8 doang jam 2, sepi banget ya mas wkwk" },
    ],
  },
  {
    id: 115,
    authorId: 15,
    minutesAgo: 3445,
    shares: 17,
    content:
      "cabai naik terus teh, dari 40 jadi 62. yang dulu beli satu kilo sekarang minta seperempat kilo. ada yang minta seratus gram doang. gak apa deh, kupasang juga.\n\nyang lucu teh, sepi di timbangan tapi rame di orangnya. yang dateng tetep dateng, cuma porsinya yang diet 😄\n\nbesok tongkolnya kupotong lebih kecil2 aja, biar semua kebagian.",
    comments: [
      { authorId: 72, minutesAgo: 3437, content: "porsi diet tapi tetep dateng, itu sayang teh 😄" },
      { authorId: 86, minutesAgo: 3429, content: "aku juga teh, beli 100 gram doang tapi sering 😄" },
      { authorId: 79, minutesAgo: 3421, content: "yang dateng tetep dateng itu mah untung teh" },
      { authorId: 101, minutesAgo: 3414, content: "semoga harga cabainya turun ya teh 🙏" },
    ],
  },
  {
    id: 116,
    authorId: 16,
    minutesAgo: 3475,
    shares: 26,
    content:
      "Nasabah hari ini mau lunas di bulan ke-14 dari term 24. Kuhitung ulang dua kali: sisa pokok ditambah bunga yang berjalan saja. Dia hemat sepuluh bulan bunga yang sebenarnya gak perlu ditanggung.\n\nDia tanya dua kali, 'bener gak non, kok sedikit?' Bener. Itu bagian yang bikin kerjaan ini masih masuk akal: ada angka yang bisa turun, bukan cuma naik.\n\nLelahnya di telinga, leganya di lembar perhitungan.",
    comments: [
      { authorId: 268, minutesAgo: 3467, content: "yang lunasin duluan biasanya yang paling rapi non 😄" },
      { authorId: 276, minutesAgo: 3459, content: "hemat sepuluh bulan bunga itu banyak non" },
      { authorId: 47, minutesAgo: 3451, content: "angka yang bisa turun memang lebih ramah daripada yang naik, non." },
      { authorId: 264, minutesAgo: 3444, content: "Lembar perhitungan yang beres bikin tidur nyenyak." },
    ],
  },
  {
    id: 117,
    authorId: 17,
    minutesAgo: 3505,
    shares: 30,
    content:
      "temen kos beli TV katanya 43 inci, terus dia ngukur lemari 43 inci. bro. inci di TV itu diagonal, bukan lebar. 43 inci tuh 109 cm diagonal, layarnya rasio 16 banding 9. gue itung pake rumus segitiga: lebar kira2 95 cm, tinggi 53. lemari 43 inci tuh 109 cm. kebayang kan TVnya gak muat.\n\nakhirnya TV nangkring di meja, lemari pindah ke kamar sebelah. besok kita beli meteran. gak mau menebak lagi bro",
    comments: [
      { authorId: 219, minutesAgo: 3497, content: "diagonal bukan lebar, kesalahan klasik bro wkwk" },
      { authorId: 29, minutesAgo: 3489, content: "16 banding 9 itu rasio standar bro, itunganmu bener" },
      { authorId: 226, minutesAgo: 3482, content: "meteran 20 rebu ngalahin salah ukur 2 juta bro" },
      { authorId: 39, minutesAgo: 3474, content: "95 dan 53 itu kira2 benar bro. kurang lebih." },
    ],
  },
  {
    id: 118,
    authorId: 18,
    minutesAgo: 3535,
    shares: 14,
    content:
      "semangka musim om. beli di kios 11 rebu perkilo.\neceran 15 rebu, untung 4. yang ambil satuan sehari 20 kilo doang. 4 kali 20, 80 rebu.\nyang ambil peti 10 kilo, petinya 130 rebu. untung 2 perkilo. 5 peti sehari, 50 kilo. 2 kali 50, 100 rebu.\n100 lawan 80. peti menang.\nuntungnya tipis tapi tiap hari. yang penting tiap hari.",
    comments: [
      { authorId: 178, minutesAgo: 3527, content: "100 rebu dari selisih 2 rebu perkilo itu sistem om" },
      { authorId: 80, minutesAgo: 3519, content: "tipis tapi tiap hari, itu jualan sejati om" },
      { authorId: 199, minutesAgo: 3512, content: "5 peti sehari ramai om" },
      { authorId: 68, minutesAgo: 3504, content: "yang beli peti biasanya buat acara ya om" },
    ],
  },
  {
    id: 119,
    authorId: 19,
    minutesAgo: 3565,
    shares: 21,
    content:
      "hujan sore ini deras, tiga jam sepi.\n\nbos yang biasa beli pulsa jam 4 lewat langsung aja, payung di tangannya gede. cuma ngangguk.\n\nhujan itu gak ngurangin jualan sebanyak yang orang kira. cuma ngurangin yang males keluar rumah. yang butuh tetep dateng. segitu aja.",
    comments: [
      { authorId: 196, minutesAgo: 3557, content: "yang butuh tetep dateng om, hujan cuma saringan" },
      { authorId: 236, minutesAgo: 3549, content: "tiga jam sepi itu jam paling jujur om wkwk" },
      { authorId: 14, minutesAgo: 3542, content: "hujan sore mah semua males gerak om wkwk" },
    ],
  },
  {
    id: 120,
    authorId: 20,
    minutesAgo: 3595,
    shares: 14,
    content:
      "Penumpang sore tadi nyampe tujuan, baru sadar dompetnya ketinggalan di rumah. Dia minta izin telepon keluarganya buat anterin uang. Kubilang gak usah, besok dia balik lagi ke titik yang sama, ngerampung bayarnya.\n\nMalam ini dia telepon lagi, minta nomor rekening biar ditransfer malam ini juga. Kubilang besok aja, kan masih inget wajahnya.\n\nSebelum jalan sore tadi dia pamit dua kali. Orang yang pamit dua kali biasanya bisa dipercaya.",
    comments: [
      { authorId: 9, minutesAgo: 3587, content: "pamit dua kali itu detail mas wkwk" },
      { authorId: 26, minutesAgo: 3579, content: "dompet tinggal tapi janji ditepati, itu orang baik mas" },
      { authorId: 187, minutesAgo: 3572, content: "yang nawarin transfer duluan tuh beneran niat bayar mas" },
      { authorId: 240, minutesAgo: 3564, content: "kepercayaan gak dibeli mas, dikasih" },
    ],
  },
  {
    id: 121,
    authorId: 21,
    minutesAgo: 3625,
    shares: 21,
    content:
      "serum 90 ribu diskon 30 persen. terus ada tanda tambahan diskon 20 persen. gue langsung itung: 30 tambah 20 jadi 50 persen, berarti bayar 45 doang. dah kusimulasikan kalengnya.\n\nternyata diskonnya dihitung bertingkat. 90 dikurang 30 persen jadi 63, terus 63 dikurang 20 persen jadi 50,4. bukan 45. bedanya 5,4, dan semua itu karena persen kedua nempel di harga yang udah kepotong.\n\nya udah dah, 50,4 tetep lebih murah dari 63. kalengnya nunggu minggu depan aja dah.",
    comments: [
      { authorId: 209, minutesAgo: 3617, content: "diskon bertingkat itu musuh besar kak 😄" },
      { authorId: 155, minutesAgo: 3609, content: "gue pernah kira 45 juga kak, kenyataannya nangis 😭" },
      { authorId: 7, minutesAgo: 3602, content: "itu diskon multiplikatif kak. 0,7 kali 0,8 = 0,56. efektifnya 44 persen doang 🙃" },
      { authorId: 68, minutesAgo: 3594, content: "selisih 5,4 nya mah ke kaleng kak wkwk" },
    ],
  },
  {
    id: 122,
    authorId: 22,
    minutesAgo: 3655,
    shares: 19,
    content:
      "anakku sekarang 6 botol sehari, satu botol 4 takar. satu takar buat 60 ml. berarti sehari airnya 1440 ml, takarnya 24.\n\nkaleng yang kemarin habis tadi pagi. kubeli dua, tanggalnya kutulis di tutupnya pake spidol biar gak salah hitung lagi. doain kalengnya awet sampai tanggal tua ya 🙏",
    comments: [
      { authorId: 74, minutesAgo: 3647, content: "tanggal di tutup pake spidol itu sistem bu. ikut catat 🙏" },
      { authorId: 97, minutesAgo: 3639, content: "24 takar sehari itu tanggung jawab segede itu bu 🙏" },
      { authorId: 82, minutesAgo: 3632, content: "SEMOGA KALENGNYA CUKUP SAMPAI TANGGAL TUA BU. ALHAMDULILLAH" },
      { authorId: 81, minutesAgo: 3624, content: "semoga anaknya sehat, kalengnya awet ya bu 🙏" },
    ],
  },
  {
    id: 123,
    authorId: 23,
    minutesAgo: 3685,
    shares: 2,
    content:
      "3,6 giga. kecepatan 15 mega per detik. itungan: 240 detik, 4 menit.\n\nrealita: 11 menit.\n\n7 menit itu pergi ke mana. dugaan sementara: tetangga streaming. besok jam 3 pagi coba lagi.",
    comments: [
      { authorId: 4, minutesAgo: 3677, content: "Kecepatan di brosur dan kenyataan memang tidak pernah bertemu. Jam 3 pagi keputusan yang tepat." },
      { authorId: 249, minutesAgo: 3669, content: "jam 3 pagi itu jam paling jujur om wkwk" },
      { authorId: 212, minutesAgo: 3662, content: "7 menit itu dibagi rata ke semua penghuni jaringan om wkwk" },
    ],
  },
  {
    id: 124,
    authorId: 24,
    minutesAgo: 3715,
    shares: 12,
    content:
      "CUCU AKU BILANG PULANG TANGGAL 20. SEKARANG TANGGAL 12. AKU ITUNG PAKE JARI: 8 HARI LAGI. TADI MALAM AKU ITUNG ULANG, TAKUT SALAH. TETAP 8.\n\nTIAP HARI AKU ITUNG ULANG. KADANG MULAI DARI 12. KADANG DARI ANGKA DI KALENDER DAPUR. HASILNYA SAMA TERUS. 8 HARI ITU KOK LAMA YA. DULU TAHUN BERLALU CEPET. TERNYATA YANG PELAN ITU NUNGGU CUCU.\n\nPURA2 SIBUK DEH AKU BIAR CEPET.",
    comments: [
      { authorId: 106, minutesAgo: 3707, content: "itung ulang tiap hari itu yang bikin cepet bu 😄" },
      { authorId: 84, minutesAgo: 3699, content: "8 hari itu bentar bu. semoga cucunya bawa kabar senang" },
      { authorId: 97, minutesAgo: 3692, content: "semoga ketemu tanggal 20 ya bu 🙏" },
      { authorId: 110, minutesAgo: 3684, content: "KALENDER DAPUR JUGA ITUNGAN YANG BENAR BU 😄" },
    ],
  },
  {
    id: 125,
    authorId: 25,
    minutesAgo: 3745,
    shares: 30,
    content:
      "penasaran gaji magangku itu berapa per jam. 1,2 juta sebulan, hari kerja 22. per hari 54 ribu lebih. dibagi 8 jam jadi 6.800 lebih sedikit.\n\nabis itu gue diam sebentar. tp ya udah. minimal sekarang angkanya jelas, gak lagi nebak2. sambil nunggu SK, yang penting tiap bulan ada angka masuk. abes hidup itu muter, gak lurus kayak pembagian.",
    comments: [
      { authorId: 2, minutesAgo: 3737, content: "6.800 PER JAM. GUE GAK BERANI ITUNG GUE WKWK" },
      { authorId: 223, minutesAgo: 3729, content: "yang penting angkanya jelas bre, nebak2 tuh yang capek" },
      { authorId: 119, minutesAgo: 3722, content: "SK jalan terus bre. magang yang tau angkanya lebih tenang" },
      { authorId: 123, minutesAgo: 3714, content: "1,2 juta dibagi 22 dibagi 8 itu 6.818 bre wkwk" },
      { authorId: 137, minutesAgo: 3707, content: "hidup muter kayak pembagian wkwkwk relate bre" },
    ],
  },
]
