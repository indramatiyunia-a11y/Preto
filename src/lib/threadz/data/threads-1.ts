import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25 (paling baru di feed).
//
// ATURAN ISI (berlaku buat semua part):
//  1. Gak ada ritme baku. Tiap cuitan harus beda BENTUKNYA, bukan cuma beda
//     kosakata: ada yang satu blok nahan napas, ada yang baris pendek, ada
//     yang berhenti di tengah tanpa kesimpulan, ada yang nanya ke orang
//     nggak jelas, ada yang cuma keluhan. DILARANG memaku akhiran reflektif
//     ("ya udah, yang penting X" / "X itu Y yang Z") — itu yang bikin semua
//     kisah kerasa ditulis satu tangan.
//  2. Komentar itu dari ORANG ASING yang lagi scroll. Separuhnya pendek
//     (reaksi: wkwk / sama / semangat). Makasimal satu komentar per post yang
//     nyambung ke detail spesifik post, dan harus santai, bukan esai.
//  3. GAK ADA cameo tokoh: bu guru gak muncul "saya yang mengoreksi", temen
//     sebangku gak muncul ngeles, penulis gak bales komennya sendiri. Dunia
//     post cukup hidup di post-nya, komentar cuma dengung orang lewat.
//  4. Kampung akun tetap: 51-110 ibu-ibu, 111-170 anak muda, 171-205 bapak,
//     206-230 mahasiswa, 231-255 pekerja, 256-300 orang tenang, 301-350 campur.
//     Akun utama (1-50) cuma sesekali, dan gak boleh jadi korps tetap.
//
// Sidik jari penulis (kosakata & kebiasaan doang — bentuk bebas):
//  1 : ibu muda. "Alhamdulillah/papanya/ya udah deh", emoji 😭 jarang
//  2 : anak kos laki, LEDAKAN KAPITAL + ekor lowercase, tanpa titik
//  3 : ibu guru, "saya/Ananda", baku tapi hidup
//  4 : bapak kantoran pendiam, 2-4 kalimat kering, jam persis, tanpa emoji
//  5 : anak warung, buku tulis, kolom kas, hangat
//  6 : bego pede, lowercase mengalir tanpa tanda baca, itungan salah yakin
//  7 : mahasiswi, "fix/yaudah/guys", tugas, emoticon 🙃
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
// 24 : nenek, SEMUA KAPITAL + typo (PURA2, GUAJAR), cucu
// 25 : anak magang, "abes/tp", itungan gaji, lelah tapi jalan terus
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 1,
    minutesAgo: 25,
    shares: 12,
    content:
      "Alhamdulillah sore tadi papanya anter beliin sepatu buat anak aku yang pertama, ukuran 33 pas. Barusan aku mau selimutin, tau2nya dia udah tidur pake sepatunya masih, kaus kaki jg nempel gitu aja. Aku gak enak lepasinnya, kasian takut dia bangun.\n\nYa udah aku biarin aja deh, besok subuh aku cuci diam2 😭",
    comments: [
      { authorId: 57, minutesAgo: 23, content: "MasyaAllah 😭 anakku dulu sampe 3 hari gak dilepas" },
      { authorId: 63, minutesAgo: 21, content: "kasian tapi lucu ya kak 😭" },
      { authorId: 72, minutesAgo: 19, content: "besok dia nyariin sepatunya kak, siap2 ngerjain cuciannya 😄" },
      { authorId: 88, minutesAgo: 17, content: "anakku dulu tidur pake helm sepeda kak 😂" },
      { authorId: 91, minutesAgo: 14, content: "kaus kakinya dicuci terpisah ya bu" },
      { authorId: 95, minutesAgo: 12, content: "semoga sekolahnya menyenangkan ya bu 🙏" },
      { authorId: 75, minutesAgo: 9, content: "aku baca sambil senyum kak 😭" },
      { authorId: 59, minutesAgo: 7, content: "ukuran 33 besok2 naik lagi bu 😂" },
      { authorId: 104, minutesAgo: 5, content: "belum apa2 udah disayang gitu, anaknya beruntung 🙏" },
      { authorId: 67, minutesAgo: 3, content: "besok juga kamu yang nyuci kak 😄" },
    ],
  },
  {
    id: 2,
    authorId: 2,
    minutesAgo: 55,
    shares: 30,
    content:
      "GUE NYARI HP SATU JAM. ANGKAT KASUR, BUKA TAS, GELAR BAJU DI LANTAI. TAU GUE NEMU DIMANA? HP NYA GUE PEGANG DARI TADI. GUE PAKE BUAT SENTER PAS ANGKAT KASUR. DI MANA LOGIKANYA. YA SUDAH GUE TIDUR AJA",
    comments: [
      { authorId: 44, minutesAgo: 52, content: "bre gue lebih parah, nyari kacamata padahal dipake wkwk" },
      { authorId: 118, minutesAgo: 49, content: "senter mode on wkwk batre ente pasti abis" },
      { authorId: 137, minutesAgo: 45, content: "yang penting ketemu bre, gue hp ilang beneran 🙏" },
      { authorId: 129, minutesAgo: 41, content: "wkwkwk gak logik tapi relatable" },
      { authorId: 10, minutesAgo: 37, content: "BJIR GUE PERNAH GITU JUGA WKWKWK" },
    ],
  },
  {
    id: 3,
    authorId: 3,
    minutesAgo: 85,
    shares: 21,
    content:
      "Semalam saya masih di dapur jam setengah satu, memotong kue untuk soal cerita ulangan hari ini: dua pertiga dan sepertiga. Kalau potongannya tidak masuk akal, yang dipertanyakan besok adalah saya, bukan anak-anak.\n\nKalau ada yang menjawab beda dari kunci, saya dengar dulu alasannya. Seringnya mereka yang benar.",
    comments: [
      { authorId: 77, minutesAgo: 80, content: "ibu guru kayak gini bikin anak2 nyaman ya bu" },
      { authorId: 90, minutesAgo: 74, content: "potong kue tengah malam buat ulangan. semangat bu" },
      { authorId: 262, minutesAgo: 68, content: "Konsep pecahan paling gampang masuk kalau dilihat langsung." },
      { authorId: 103, minutesAgo: 61, content: "anakku dulu juga diajarin pake benda beneran bu 🙏" },
    ],
  },
  {
    id: 4,
    authorId: 4,
    minutesAgo: 115,
    shares: 3,
    content:
      "Kereta saya terlambat 9 menit tadi pagi. Rapat mulai jam 8, saya masuk 8.14. Tidak ada yang bertanya, semua masih menatap layar. Saya duduk, menyeduh teh, rapat selesai 8.41.",
    comments: [
      { authorId: 174, minutesAgo: 106, content: "9 menit masih sopan om" },
    ],
  },
  {
    id: 5,
    authorId: 5,
    minutesAgo: 145,
    shares: 45,
    content:
      "tadi sore mas pembeli langganan nyicil bayar utang seminggu. aku buka buku, coret yang lama, tulis yang baru. ibu mampir liat, bilang 'yang nyicil jangan dicoret semua, sisain dikit biar gak lupa'. jadi sekarang bukunya ada dua kolom: lunas dan sisain.\n\nmas tadi pas pamit bilang 'ditulis ya dik'. aku bilang iya. ibu yang nulis. aku gak berani nulis nama orang.",
    comments: [
      { authorId: 66, minutesAgo: 140, content: "teh, stok roti kismisnya tolong ditambah ya" },
      { authorId: 15, minutesAgo: 133, content: "kata ibumu bener dik, nyicil suka lupa sendiri" },
      { authorId: 205, minutesAgo: 126, content: "buku dua kolom itu rapi dik" },
      { authorId: 118, minutesAgo: 118, content: "aku yang nyicil 2 rebu tiap lewat wkwk" },
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
      "angket skripsi: target 100, masuk 37. tiap sebar grup yang isi tetep 6-7 orang itu2.\nkemarin sebar ke grup sebelah, ada yang bales 'misi mbak gak ngerti' 🙃\n\nfix besok cetak kuesioner beneran, jalan ke kos2an bawa coklat sachet.\nmau gak ya kalian diisi angket cuma dibayar coklat. jujur.",
    comments: [
      { authorId: 212, minutesAgo: 198, content: "fix mending coklat, responden mah gak nolak 🙃" },
      { authorId: 152, minutesAgo: 192, content: "yang bales 'misi mbak' itu masih ngejawab kak 😭" },
      { authorId: 217, minutesAgo: 185, content: "37 dari 100... kita sama km kak, semangat" },
      { authorId: 213, minutesAgo: 179, content: "dateng abis magrib, pada di kamar. jangan sore" },
      { authorId: 155, minutesAgo: 171, content: "aku isi deh kak, asal coklatnya 😄" },
    ],
  },
  {
    id: 8,
    authorId: 8,
    minutesAgo: 235,
    shares: 23,
    content:
      "jaga malam tadi: satu pasien, gula darah dicek 3 kali. jam 2 minta selimut. jam 3 minta selimut lagi, katanya dingin. jam 4 selimutnya dikembalikan, katanya panas.\n\ngue duduk deket pintu ngitung: selimut itu pindah 2 kali dalam 2 jam. kopi di meja jaga udah dingin pas sempet dipegang.",
    comments: [
      { authorId: 12, minutesAgo: 226, content: "gue pernah 4 kali semalem. yang bolak balik selimut, bukan obatnya wkwk" },
      { authorId: 248, minutesAgo: 217, content: "pasien yang masih mintain2 tuh bagus om" },
    ],
  },
  {
    id: 9,
    authorId: 9,
    minutesAgo: 265,
    shares: 15,
    content:
      "order tadi malem 6 km, tarif 14. hujan gede.\nsempet mikir ambil apa gak. ambil lah, sekalian jalan.\n\ndi restoran tunggu 12 menit, pesanannya belum jadi. jalan macet dikit, nyampe rumah pelanggan jam 21.40. dia bilang 'bang makasih ya masih mau jalan malem2 hujan'.\n\ntarif 14 plus bonus hujan 3, total 17. pulangnya lewat jalan sepi, 9 km.",
    comments: [
      { authorId: 198, minutesAgo: 257, content: "yang makasih gitu jarang mas" },
      { authorId: 240, minutesAgo: 249, content: "17 buat malem hujan kurang si om" },
      { authorId: 115, minutesAgo: 242, content: "bonus hujan 3 lumayan bang wkwk" },
      { authorId: 187, minutesAgo: 233, content: "pulang lewat jalan sepi enak bang, ritme sendiri" },
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
      { authorId: 262, minutesAgo: 300, content: "selisih kecil yang dicari itu tanda orangnya rapi." },
    ],
  },
  {
    id: 12,
    authorId: 12,
    minutesAgo: 355,
    shares: 5,
    content:
      "shift malam. pasien tidur semua.\njam 1 cek tekanan darah, semua normal.\njam 2 kulkas obat bunyi, cuma kompresornya.\njam 3 ada yang panggil, cuma tanya jam berapa dokter dateng.\njawab: jam 8. dia bilang oke, terus tidur lagi.\ngue juga.",
    comments: [
      { authorId: 8, minutesAgo: 347, content: "jam 3 malam nanya jam berapa dokter dateng itu sering. biasanya cuma mau denger suara orang" },
      { authorId: 243, minutesAgo: 338, content: "jawaban 'jam 8' itu nenenin banget ya mbak" },
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
      "kerjaan utama hari ini: menelepon 32 nasabah yang jatuh tempo. Yang diangkat 14. Yang marah 3. Yang bercerita panjang soal usahanya 5, dan itu yang paling lama.\n\nSore, satu bapak bilang, 'non, ingetin aja tiap bulan, kadang aku lupa, bukan gak mau bayar.' Aku catat di kolom khusus. Ada kolom 'peringatan', ada kolom 'ingatkan tiap bulan'. Yang kedua isinya cuma 2 orang.",
    comments: [
      { authorId: 47, minutesAgo: 466, content: "kolom 'ingatkan tiap bulan' itu sistem yang manusiawi non" },
      { authorId: 276, minutesAgo: 458, content: "Sabar menelepon 32 nasabah itu pekerjaan berat. Salut, Nona." },
      { authorId: 268, minutesAgo: 449, content: "di catatan saya juga ada kolom serupa, isinya langganan 😄" },
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
      "bos tadi sore nyodorin HP, minta isi pulsa 25 rebu. terus dia buka aplikasi satu, tulisannya 'modal kecil cair besar'. dia minta tolong daftar-in.\naku bilang aku gak berani bos, itu biasanya makan uang orang, bukan kasih uang.\ndia diem. terus bilang 'ya udah, isi pulsa doang'. aku isi 25 rebu. semoga dia balik cuma buat pulsa.",
    comments: [
      { authorId: 196, minutesAgo: 556, content: "di cukuran juga ada yang nawarin gini bos" },
      { authorId: 236, minutesAgo: 548, content: "sebelahan gue ada yang daftar, motornya kejual om" },
      { authorId: 23, minutesAgo: 539, content: "yang gitu biasanya makannya uang orang. om bener" },
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
      { authorId: 263, minutesAgo: 591, content: "cek kaleng dulu sebelum beli. kebiasaan yang bagus." },
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
      { authorId: 66, minutesAgo: 606, content: "lima menit itu anaknya udah bisa diri sendiri bu" },
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
      "CUCU AKU KALO DISURUH BELAJAR DIA MALES. KALO GAK DISURUH DIA MAU BELAJAR SENDIRI. ANEH YA. TADI SORE AKU PURA2 TIDUR DI KURSI. DIA BUKA BUKUNYA SENDIRI SAMPE MAGRIB. AKU GAK TEGA BANGUNIN. GUAJAR JUGA GAK BERANI NGOMONG APA2.",
    comments: [
      { authorId: 106, minutesAgo: 706, content: "Itu namanya anak berbakat mbak. Jangan dibangunin ya" },
      { authorId: 84, minutesAgo: 698, content: "pura2 tidur itu jurus ampuh bu 😄" },
      { authorId: 97, minutesAgo: 690, content: "semoga cucunya sehat dan rajin terus ya bu 🙏" },
      { authorId: 22, minutesAgo: 681, content: "cucu yang rajin, neneknya juga pintar pura2 tidur. cocok bu 😄" },
      { authorId: 110, minutesAgo: 673, content: "Belajar sampai magrib itu rejeki, bu. Neneknya sabar." },
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
