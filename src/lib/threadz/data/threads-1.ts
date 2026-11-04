import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25 (paling baru di feed).
//
// ATURAN ISI (berlaku buat semua part):
//  1. Dunia ini kampung matematika: siswa, mahasiswa, guru, les privat, kasir,
//     pedagang, ibu-ibu yang ngawal PR anak, ojol yang itung tarif, orang
//     kantoran yang hidup di angka. KEBANYAKAN cuitan itu OBROLAN MATEMATIKA
//     yang beda-beda topiknya: perkalian, diskon, pecahan, KPK, desimal,
//     persen, bunga, kecepatan, statistik, geometri, itungan dapur, nilai
//     ulangan. Yang sisa (± 1 dari 4) tetap urusan hidup biasa biar gak
//     terasa satu klub matematika sehari penuh.
//  2. Gak ada ritme baku. Tiap cuitan beda BENTUKNYA, bukan cuma kosakata:
//     satu blok nahan napas, baris pendek, KAPITAL, kalimat kering, nanya ke
//     nggak jelas, berhenti di tengah. DILARANG akhiran reflektif berulang
//     ("ya udah, yang penting X" / "X itu Y yang Z") — variasikan penutup:
//     ada yang berhenti begitu aja, ada yang nyuruh doain, ada yang nyambit.
//  3. DILARANG cuitan bergaya SKENARIO KETEMUAN: cerita berantai "si A dateng
//     bilang '...', terus si B jawab '...'" pake kutipan dialog lebih dari
//     SATU. Itu naskah drama, bukan cuitan. Kutipan orang maksimal satu baris
//     per cuitan, atau diceritain nggak langsung (kata mama, kata abang).
//  4. Komentar itu dari ORANG ASING yang lagi scroll dan HARUS NYAMBUNG sama
//     isi post — gak ada komentar nanya stok warung di atas cerita orang.
//     Separuhnya reaksi pendek (wkwk / sama / semangat). MAKSIMAL SATU komen
//     per post yang nyinggung detail spesifik, santai bukan esai.
//  5. GAK ADA cameo tokoh: bu guru gak muncul "saya yang mengoreksi", temen
//     sebangku gak muncul ngeles, penulis gak bales komennya sendiri.
//  6. Kampung akun tetap: 51-110 ibu-ibu, 111-170 anak muda, 171-205 bapak,
//     206-230 mahasiswa, 231-255 pekerja, 256-300 orang tenang, 301-350 campur.
//     Akun utama (1-50) cuma sesekali, gak jadi korps tetap.
//
// Sidik jari penulis (kosakata & kebiasaan doang — bentuk bebas):
//  1 : ibu muda. "Alhamdulillah/papanya/ya udah deh", anak-anak, 😭 jarang
//  2 : anak kos laki, LEDAKAN KAPITAL + ekor lowercase, tanpa titik
//  3 : ibu guru matematika SD, "saya/Ananda", baku tapi hidup
//  4 : bapak kantoran pendiam, 2-4 kalimat kering, jam persis, tanpa emoji
//  5 : anak warung, buku tulis, kolom kas, hangat
//  6 : bego pede, lowercase mengalir tanpa tanda baca, itungan salah yakin
//  7 : mahasiswi, "fix/yaudah/guys", skripsi & statistik, 🙃
//  8 : RS shift malam, "gue", jam-jam presisi, kalimat satu baris
//  9 : ojol muda, "bang/lu", jarak-tarif, baris pendek
// 10 : SMA riuh, KAPITAL + wkwk bercampur, satu blok, tanpa titik
// 11 : akuntan kecil, "aku", rapi sopan, catatan-kolom
// 12 : perawat shift, kalimat pendek turun baris, kering
// 13 : SMP jamet, lowercase total, tanpa tanda baca, typo (gk,bgt,smpe), wkwk
// 14 : tukang parkir, "om", fragmen pendek, koin
// 15 : ibu pasar, "teh", lho/ya/deh, hangat, satu blok
// 16 : karyawati leasing, "aku", rapi lelah, angka angsuran
// 17 : mahasiswa teknik, "bro", konversi satuan, satu blok
// 18 : pedagang buah, "om", musim-harga, baris pendek
// 19 : kios pulsa, "bos", terang, tegas soal jelas-jelasnya uang
// 20 : ojol senior, penumpang, tenang, paragraf pendek
// 21 : anak kos cewek hemat, "deh/dah", ribuan, kaleng nabung
// 22 : ibu sus galau, "anakku", doa singkat 🙏
// 23 : begadang techy, kering minimal, kulkas & jam
// 24 : nenek, SEMUA KAPITAL + typo (PURA2, NGGAJAR), cucu
// 25 : anak magang, "abes/tp", itungan gaji, lelah tapi jalan terus
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 1,
    minutesAgo: 25,
    shares: 12,
    content:
      "Alhamdulillah anak yang pertama akhirnya lancar perkalian 7. Dari sore dia ngasal sendiri soalnya, sembarang angka yang kutentuin. 7 kali 8, 7 kali 6, dijawab tanpa mikir lama. Katanya triknya satu: 7 kali 8 tuh 7 kali 4 doang lalu diulang dua kali. Aku gak ngerti matematikanya tapi kayaknya bener.\n\nYa udah deh, besok naikin ke 8.",
    comments: [
      { authorId: 71, minutesAgo: 22, content: "7 kali 8 itu 56 kak, anaknya bener 😄" },
      { authorId: 85, minutesAgo: 19, content: "anakku dulu hafalnya tabel ditempel di dinding kak" },
      { authorId: 93, minutesAgo: 16, content: "lancar terus ya kak, angka 8 juga nyusul 😄" },
      { authorId: 102, minutesAgo: 13, content: "pintar banget, bangga ya kak 🙏" },
      { authorId: 60, minutesAgo: 10, content: "aku umur segini masih itung pake jari kak 😭" },
      { authorId: 66, minutesAgo: 8, content: "yang nemu trik dobel tuh siapa kak, sekolah atau papanya?" },
      { authorId: 104, minutesAgo: 5, content: "semangat belajarnya buat anak kak 🙏" },
    ],
  },
  {
    id: 2,
    authorId: 2,
    minutesAgo: 55,
    shares: 30,
    content:
      "GUE MAU BELI SEPATU. DI ETALASE 400 RIBU. PAS BAYAR KATA KASIRNYA DISKON 25 PERSEN CUMA JALAN KALAU BELANJA DI ATAS 500 RIBU. GUE ITUNG DEPAN KASIR. KASIRNYA ITUNG JUGA. DUA2NYA SAMA2 BINGUNG. KESIMPULAN: GAK DAPAT DISKON, BAYAR 400. AKHIRNYA GUE BELI KAKI AYAM 12 RIBU PULANG",
    comments: [
      { authorId: 44, minutesAgo: 51, content: "diskon yang ada syarat2nya gitu itu penipuan halus bre wkwk" },
      { authorId: 118, minutesAgo: 48, content: "kaki ayam 12 rebu penutup yang elegan wkwk" },
      { authorId: 137, minutesAgo: 44, content: "pembeli sama kasir sama2 itung bareng itu adegan langka bre" },
      { authorId: 10, minutesAgo: 39, content: "GUE PERNAH DITOLAK DISKON SOALNYA KATANYA CUMA BUAT APLIKASI WKWKWK" },
      { authorId: 152, minutesAgo: 34, content: "sepatu nunggu gajian aja bre, kaki ayam dulu" },
    ],
  },
  {
    id: 3,
    authorId: 3,
    minutesAgo: 85,
    shares: 21,
    content:
      "Hari ini ada Ananda yang bertanya, Bu, buat apa belajar KPK. Saya tidak menjawab dengan teori. Kami menghitung jadwal bus: satu berangkat tiap 12 menit, satu tiap 18 menit, kapan keduanya jalan bersama lagi. Ananda menghitung sendiri sampai ketemu angkanya.\n\nPertanyaan yang mengganggu itu biasanya pintu masuk terbaik.",
    comments: [
      { authorId: 77, minutesAgo: 79, content: "cara menjelaskan yang bagus bu 🙏" },
      { authorId: 90, minutesAgo: 72, content: "jadwal bus itu contoh nyata ya bu, anak langsung ngeh" },
      { authorId: 262, minutesAgo: 66, content: "KPK memang paling mudah lewat kejadian yang berulang." },
      { authorId: 103, minutesAgo: 60, content: "anakku kelas 4 sedang di bab itu bu. semoga ketemu gurunya seperti ibu 🙏" },
      { authorId: 81, minutesAgo: 54, content: "semoga anak-anaknya makin paham ya bu" },
    ],
  },
  {
    id: 4,
    authorId: 4,
    minutesAgo: 115,
    shares: 3,
    content:
      "Laporan bulanan butuh 14 angka. Saya mengisi 13. Satu kolom kosong karena sumbernya belum mengirim. Telepon ke sumbernya jam 10.02. Dijawab jam 15.47, isinya: 'usahakan ya Pak.'",
    comments: [
      { authorId: 174, minutesAgo: 106, content: "kolom kosong itu yang paling lama ditunggu om" },
      { authorId: 192, minutesAgo: 97, content: "15.47 buat jawaban begitu itu jam yang tepat om wkwk" },
    ],
  },
  {
    id: 5,
    authorId: 5,
    minutesAgo: 145,
    shares: 45,
    content:
      "hari ini aku salah kasih kembalian dua kali. pagi kelebihan 1000, sore kekurangan 500. yang kelebihan gak balik, yang kekurangan balik sendiri mau bilang.\n\njadi inget pesan mama: kalo salah jangan pura2 bener. untung bukunya dua kolom, yang salah kucoret pake pensil dan kutandain kecil. besok aku itung pelan2, apalagi kalau orangnya lagi buru2.",
    comments: [
      { authorId: 66, minutesAgo: 139, content: "yang balikin kekurangan itu orang baik dik" },
      { authorId: 15, minutesAgo: 131, content: "coretan pensil itu bijak dik, tinta susah dihapus" },
      { authorId: 205, minutesAgo: 123, content: "buku dua kolom mah sistem waras dik" },
      { authorId: 59, minutesAgo: 116, content: "kembalian tuh musuh halus dik wkwk" },
    ],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 175,
    shares: 3,
    content:
      "beli bensin 20 rebu dibalikin 2 rebu berarti bensinnya 18 rebu. 18 itu 2 kali 9. 9 gk bisa dibagi rata ke 2 jadi knp ya kok nyebelin. terus beli roti 4500 berarti 2250 satu. 2250 itu separo dari 4500. separo terus separo kok gk abis2. ya udah yang penting kenyang. recehnya aku simpen di kaleng biskuit",
    comments: [
      { authorId: 267, minutesAgo: 169, content: "4500 bagi 2 itu 2250 bener. 18 ribu bagi 2 itu 9 ribu, bisa rata kok. yang gak bisa itu 9 dibagi 2" },
      { authorId: 161, minutesAgo: 162, content: "wkwk puyeng bacanya bre" },
      { authorId: 195, minutesAgo: 158, content: "di cukuran juga ada yang itung gagal om wkwk" },
      { authorId: 138, minutesAgo: 151, content: "GUE IKUT PUYENG. SATU PAKTI WKWKWK" },
      { authorId: 137, minutesAgo: 143, content: "kaleng biskuit isinya mah abis duluan bre wkwk" },
    ],
  },
  {
    id: 7,
    authorId: 7,
    minutesAgo: 205,
    shares: 41,
    content:
      "dosen bilang sampel 37 gak cukup buat ambil kesimpulan. ya udah kuhitung ulang: populasi 200, pake rumus slovin, minimal 133 responden.\n\n133 orang itu setara dua angkatan satu jurusan. fix gue ganti jadi studi kasus. gampang, jujur, gagalnya jelas 🙃",
    comments: [
      { authorId: 212, minutesAgo: 198, content: "studi kasus itu pintu darurat semua skripsi kak 🙃" },
      { authorId: 217, minutesAgo: 192, content: "slovin akhirnya kepake juga wkwk" },
      { authorId: 213, minutesAgo: 185, content: "nyebul angket itu takdir mahasiswa kak" },
      { authorId: 155, minutesAgo: 179, content: "semangat kak, pasti ada jalannya 🙃" },
    ],
  },
  {
    id: 8,
    authorId: 8,
    minutesAgo: 235,
    shares: 23,
    content:
      "jaga malam, satu pasien infus. gue itung tetesnya: 20 tetes per menit. setengah jam kemudian kantongnya turun 40 ml. berarti 600 tetes buat 40 ml.\n\ngak tau ini penting buat siapa. gue cuma butuh yakin keringat di pelipis gue jatuhnya lebih cepet dari tetesnya.",
    comments: [
      { authorId: 12, minutesAgo: 226, content: "itung tetes itu ritual jaga malam ya om" },
      { authorId: 248, minutesAgo: 217, content: "pasien tidur nyenyak berarti aman om" },
    ],
  },
  {
    id: 9,
    authorId: 9,
    minutesAgo: 265,
    shares: 15,
    content:
      "itungan hari ini: 14 order, tarif kekumpul 208. bensin 42. pulsa 8. parkir 6.\nsisa 152 buat sehari jalan. bagus gak? gak tau. yang jelas angka 208 itu bikin senyum pas kebaca jam 9 malem.",
    comments: [
      { authorId: 198, minutesAgo: 257, content: "208 omzet sehari itu rame mas" },
      { authorId: 240, minutesAgo: 249, content: "152 sisa buat sehari jalan, lumayan mas" },
      { authorId: 115, minutesAgo: 242, content: "senyum jam 9 malem itu wajib bang wkwk" },
      { authorId: 187, minutesAgo: 233, content: "omzet gede gak otomatis sisa gede ya bang, itungan ojol emang gitu" },
    ],
  },
  {
    id: 10,
    authorId: 10,
    minutesAgo: 295,
    shares: 26,
    content:
      "ULANGAN MTK BESOK GILS, BUKUNYA GUE BUKA SORE TADI LIAT LIAT DOANG TERUS GUE TUTUP LAGI WKWKWK, PERSAMAAN KUADRAT ITU B NYA DARI MANA C NYA DARI MANA, GUE GAK PAHAM DARI AWALNYA AJA, YA UDAH BESOK TERIMA NASIB, GILS ADA YANG MAU NJELASIN DARI NOL GAK, DUDUKNYA GUE PALING BELAKANG JADI GAK PERNAH DIPANGGIL BU NYA WKWK",
    comments: [
      { authorId: 144, minutesAgo: 288, content: "wkwkwk bre gue juga, buku dibuka tutup doang" },
      { authorId: 127, minutesAgo: 282, content: "DUDUKNYA PALING BELAKANG EMANG AMAN DARI PANGGILAN. STRATEGI JUGA WKWK" },
      { authorId: 131, minutesAgo: 276, content: "wkwk gue juga gitu, nilai keluar 68" },
      { authorId: 38, minutesAgo: 269, content: "kak, persamaan kuadrat itu di smp ada gak ya? aku takutan 😄" },
      { authorId: 149, minutesAgo: 261, content: "gue besok ulangan juga, kita sama2 menyalaaaa wkwk" },
    ],
  },
  {
    id: 11,
    authorId: 11,
    minutesAgo: 325,
    shares: 41,
    content:
      "Gajian tadi siang. Kebiasaan saya: catat dulu sebelum dipakai. Sepuluh persen buat ibu, sedikit buat kaleng, sisanya bulan berjalan.\n\nTernyata setelah dicek masih ada satu pos yang lupa: sumbangan tiap Jumat di kantor. Jadi angka di catatan dan angka di dompet tidak cocok. Malam ini dirapikan dulu.",
    comments: [
      { authorId: 271, minutesAgo: 316, content: "Kebiasaan mencatat sebelum memakai itu jarang ada. Teruskan." },
      { authorId: 21, minutesAgo: 308, content: "aku kebalikannya, dompet duluan catat nyusul. tiap akhir bulan jadi detektif wkwk" },
      { authorId: 262, minutesAgo: 300, content: "Selisih kecil yang dicari itu tanda orangnya rapi." },
    ],
  },
  {
    id: 12,
    authorId: 12,
    minutesAgo: 355,
    shares: 5,
    content:
      "3 hari shift malam.\ntidur 4 jam, 5 jam, 3 jam.\ntotal 12 jam dalam 3 hari. standar manusia 8 jam sehari.\nberarti gue utang 12 jam tidur.\nbesok off. utang dicicil.",
    comments: [
      { authorId: 8, minutesAgo: 347, content: "utang tidur itu biasanya dicicil pake akhir pekan mbak" },
      { authorId: 243, minutesAgo: 338, content: "12 jam dalam 3 hari itu berat mbak, istirahatnya beneran ya" },
    ],
  },
  {
    id: 13,
    authorId: 13,
    minutesAgo: 385,
    shares: 19,
    content:
      "dpt jajan 10 rebu dari om. plng skolah beli cilok 5 rebu, es teh 2 rebu, sisa 3 rebu tadi kepake beli pulsa game 3 rebu. pas bgt gk sengaja wkwk. terus dpet skin gratis dari event. puas bgt hari ini. bsk jajan apa ya, tadi liat somay baru buka depan gang, blom coba",
    comments: [
      { authorId: 127, minutesAgo: 377, content: "cilok sini 3 rebu doang bre wkwk" },
      { authorId: 154, minutesAgo: 370, content: "SOMAY DEPAN GANG WAJIB COBA. KABARIN RASANYA" },
      { authorId: 35, minutesAgo: 362, content: "pulsa 3 rebu dpet skin gratis. hidupmu beruntung bgt sih" },
      { authorId: 143, minutesAgo: 353, content: "itunganmu rapi bgt wkwkwk" },
      { authorId: 118, minutesAgo: 344, content: "es teh 2 rebu mah wajib bre, gk bisa ditawar" },
    ],
  },
  {
    id: 14,
    authorId: 14,
    minutesAgo: 415,
    shares: 7,
    content:
      "pagi ini om-om parkir bayarnya pake koin 500. kubumpul 34 keping. ada yang masih panas, abis dijepit jok.\nsore biasanya 40-an keping. om yang motor stangnya miring itu bayarnya paling cepet, om yang minta dikit dulu malah lupa sampe magrib.\ngak apa.",
    comments: [
      { authorId: 186, minutesAgo: 405, content: "om stang miring emang tipe bayar duluan mas wkwk" },
      { authorId: 205, minutesAgo: 396, content: "34 keping itu 17 rebu mas" },
      { authorId: 41, minutesAgo: 388, content: "kantong depan gue tiap sore bunyi juga, isinya receh ongkir. berat lho" },
    ],
  },
  {
    id: 15,
    authorId: 15,
    minutesAgo: 445,
    shares: 17,
    content:
      "tadi pagi teh cuanki naikin harga 500. aku tanya kenapa teh, dia jawab bahan naik. aku bilang oke terus pesen dua porsi, satu makan di tempat satu buat dibungkus. kan udah duduk teh, males pindah 😂\nbesok aku coba nawar yang dibungkus, siapa tau masih bisa. doain ya",
    comments: [
      { authorId: 72, minutesAgo: 437, content: "aku juga pernah teh, dibales 'ya gitu lah' 😂" },
      { authorId: 79, minutesAgo: 429, content: "yang suka nawar justru pelanggan langganan teh 😄" },
      { authorId: 1, minutesAgo: 420, content: "terong juga naik teh, tetep beli aja 😄" },
      { authorId: 88, minutesAgo: 411, content: "semoga besok dapet harga enak ya teh 🙏" },
    ],
  },
  {
    id: 16,
    authorId: 16,
    minutesAgo: 475,
    shares: 26,
    content:
      "nasabah tadi nanya, kok cicilan bulan pertama kebayarnya bunga semua, pokoknya cuma sedikit.\nkujelasin pake angka kecil: utang 12 juta, bunga 1 persen per bulan dari sisa utang. bulan pertama sisa utangnya masih gede, jadi bunganya gede. makin dicicil makin mengecil.\nakhirnya dia paham. kalimat penutupnya: makin cepet lunas, makin hemat. bener. itu yang bikin seharian di telepon terasa terbayar.",
    comments: [
      { authorId: 276, minutesAgo: 466, content: "nasabah yang akhirnya ngerti itu hasil sabar non" },
      { authorId: 268, minutesAgo: 458, content: "'makin cepet lunas makin hemat' itu kalimat emas non" },
      { authorId: 11, minutesAgo: 449, content: "bunga dari sisa utang memang gak pernah nyakitin yang itung dengan benar." },
    ],
  },
  {
    id: 17,
    authorId: 17,
    minutesAgo: 505,
    shares: 30,
    content:
      "laporan lab hari ini: massa jenis minyak 0,8 gram per cm kubik. dosen tanya kalau dipake buoyancy, berapa persen yang tenggelam. gue jwb 80 persen, bener. temen gue jawab 20 persen, jawabannya juga bener. beda yang ditanya. dosen cuma senyum.\nbro, tes berikutnya gue baca soal dua kali. skor naik dari 76 jadi 87",
    comments: [
      { authorId: 219, minutesAgo: 495, content: "naik 11 poin bre, gue naik 2 aja syukur" },
      { authorId: 28, minutesAgo: 487, content: "dosen senyum tuh bisa dua arti wkwk" },
      { authorId: 212, minutesAgo: 479, content: "berarti dua2nya bener tergantung yang ditanya ya. ok paham" },
      { authorId: 36, minutesAgo: 470, content: "baca soal 2x itu bener bro 🙃" },
    ],
  },
  {
    id: 18,
    authorId: 18,
    minutesAgo: 535,
    shares: 14,
    content:
      "durian musim ini om. kemarin jual 25 rebu perkilo. hari ini 18. bukan karena jelek, panennya barengan semua.\nyang jual duluan untung. yang ngantor kaget harga turun, yang tukang nunggu lebih turun lagi. aku di tengah, jual aja.\nsore ini target abisin dua karung. kalau gak habis, dibikin jus buat anak-anak, katanya enak.",
    comments: [
      { authorId: 178, minutesAgo: 526, content: "turun 7 rebu sekali angin om, beli sekarang" },
      { authorId: 80, minutesAgo: 518, content: "sayur juga gitu om, musim mah ngatur harga" },
      { authorId: 68, minutesAgo: 509, content: "aku ambil yang 18 om, buat dua hari" },
      { authorId: 199, minutesAgo: 500, content: "yang jual duluan untung om" },
    ],
  },
  {
    id: 19,
    authorId: 19,
    minutesAgo: 565,
    shares: 21,
    content:
      "bos tadi nyodorin HP minta isi pulsa 25 rebu. di layarnya masih kebuka aplikasi 'modal kecil cair besar' dari kemarin.\naku isi pulsa doang. pulsa itu jelas: 25 rebu dapet 25 rebu. aplikasi yang namanya janji cair gitu isinya gak jelas. mending pulsa.",
    comments: [
      { authorId: 196, minutesAgo: 556, content: "mending pulsa om, angkanya jelas" },
      { authorId: 236, minutesAgo: 548, content: "yang namaannya cair besar biasanya besoknya kering om wkwk" },
    ],
  },
  {
    id: 20,
    authorId: 20,
    minutesAgo: 595,
    shares: 14,
    content:
      "jam 10 malam, penumpang turunnya di ujung perumahan. Di jalan dia tidur, kepala nyandar jendela. Gue pelankan aja, lewat polisi tidur tiga kali dia gak goyang.\n\nSampai tujuan dia bangun, tanya 'sudah sampai ya mas?'. Gue bilang sudah, dari tadi 5 menit nungguin lu bangun. Dia senyum, bayar, gak ngomong banyak. Gue jalan lagi.",
    comments: [
      { authorId: 9, minutesAgo: 586, content: "penumpang tidur tuh percaya penuh bang" },
      { authorId: 26, minutesAgo: 578, content: "di angkot juga gitu mas, gak pernah jatuh" },
      { authorId: 12, minutesAgo: 570, content: "penumpang yang tidur biasanya habis shift juga mas" },
    ],
  },
  {
    id: 21,
    authorId: 21,
    minutesAgo: 625,
    shares: 21,
    content:
      "kaleng nabung gue bulan ini: 38 ribu. sumbernya receh kembalian sama penghematan es teh (seminggu gak beli, ganti air putih seduh sendiri).\n\ntadi mau beli kerudung baru, liat harga 65. gue itung: 38 di kaleng, 20 di dompet, kurang 7. minggu depan lagi deh. kerudung lama masih bisa, cuma warnanya udah gak warna lagi.",
    comments: [
      { authorId: 209, minutesAgo: 616, content: "air putih seduh sendiri itu juara kak" },
      { authorId: 155, minutesAgo: 608, content: "'gak warna lagi' 😭 punyaku abu misterius" },
      { authorId: 68, minutesAgo: 600, content: "kaleng nabung suka kepake pas sakit kak wkwk" },
      { authorId: 263, minutesAgo: 591, content: "Cek kaleng dulu sebelum beli. Kebiasaan yang bagus." },
    ],
  },
  {
    id: 22,
    authorId: 22,
    minutesAgo: 655,
    shares: 19,
    content:
      "anakku telepon sore tadi, cuma lima menit. bilang makan udah teratur, kamar bersih, uang cukup.\nsudah itu saja yang ibu butuh dengar. selebihnya serahkan 🙏",
    comments: [
      { authorId: 74, minutesAgo: 646, content: "lima menit itu cukup bu" },
      { authorId: 103, minutesAgo: 638, content: "Anak yang telepon dulu itu ingat rumah, bu." },
      { authorId: 1, minutesAgo: 630, content: "semoga anaknya sehat terus ya bu 🙏" },
      { authorId: 82, minutesAgo: 622, content: "ANAKMU BAIK BU. CUCU AKU JARANG TELEPON TAPI TIAP PULANG BAWA BUAH. ALHAMDULILLAH" },
      { authorId: 81, minutesAgo: 613, content: "aamiin bu, semoga ketemu berikutnya lebih lama 🙏" },
      { authorId: 97, minutesAgo: 601, content: "makan teratur kamar bersih uang cukup 🙏" },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 685,
    shares: 2,
    content:
      "jam 1 lewat. kulkas di dapur mati nyala mati nyala. satu2nya penghuni rumah ini yang punya jadwal kerja jelas.",
    comments: [
      { authorId: 4, minutesAgo: 676, content: "Kulkas yang begini biasanya cuma perlu kumparan belakangnya dibersihkan. Saya pernah mengalaminya." },
      { authorId: 249, minutesAgo: 668, content: "kulkas shift malam juga ya om" },
    ],
  },
  {
    id: 24,
    authorId: 24,
    minutesAgo: 715,
    shares: 12,
    content:
      "CUCU AKU NGHAFAL PERKALIAN 7. TADI AKU TANYA 7 KALI 8, DIA JAWAB 56. TAU2NYA DIA TANYA BALIK 7 KALI 9. AKU SENYAP. TERUS DIA BILANG, NENEK KOK CUMA NGGAJAR DOANG NANYA TERUS. PURA2 SIBUK DEH AKU. SEMOGA ULANGANNYA LANCAR.",
    comments: [
      { authorId: 106, minutesAgo: 706, content: "Ulangan perkalian mah tabelnya ditempel dulu mbak 😄" },
      { authorId: 84, minutesAgo: 698, content: "Nenek ditanya balik itu tanda cucunya cerdas bu 😄" },
      { authorId: 97, minutesAgo: 690, content: "Semoga ulangannya lancar ya bu 🙏" },
      { authorId: 110, minutesAgo: 681, content: "7 kali 9 itu 63 bu. Kabarin cucunya wkwk" },
    ],
  },
  {
    id: 25,
    authorId: 25,
    minutesAgo: 745,
    shares: 30,
    content:
      "rencana gajian bulan depan udah gue susun rapi: sewa, makan, tabung dikit, sisanya jajan warung. TAPI. tanggal 12 ban motor kena paku. ban baru 140 rebu. abes itu rencana.\n\nsekarang di catatan ada pos baru: 'dana paku lagi'. bulan depan kena paku lagi gak? gak tau.",
    comments: [
      { authorId: 2, minutesAgo: 737, content: "DANA PAKU LAGI WKWKWK GUE ADA POS 'DANA KUNCI ILANG LAGI'" },
      { authorId: 223, minutesAgo: 729, content: "140 rebu sakit bre, gue pernah kanan kiri 😭" },
      { authorId: 119, minutesAgo: 720, content: "namanya juga rencana, ada pos dadakannya wajar" },
      { authorId: 137, minutesAgo: 711, content: "paku tuh milih motor ya bre wkwk" },
    ],
  },
]
