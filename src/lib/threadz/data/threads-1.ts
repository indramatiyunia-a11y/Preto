import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25 (paling baru di feed).
//
// PRINSIP BARU: komentar gak boleh dicampur acak. Komentar ditulis tangan
// dan authorId-nya DIPILIH sesuai dunia post-nya:
//   - cuitan ibu-ibu  -> dikomen ibu-ibu (kak/bu/teh, "anakku juga", emoji)
//   - cuitan anak sekolah -> dikomen anak sekolah (wkwk, lowercase, typo)
//   - cuitan bapak-bapak -> dikomen bapak-bapak (pendek, "om", tanpa emoji)
// Warga lalu-lalang juga punya "kampung" masing2 per rentang id (51+ ibu-ibu,
// 111+ anak muda, 171+ bapak, 206+ mahasiswa, 231+ pekerja, 256+ formal) biar
// gaya komennya konsisten tiap kali akun yang sama muncul.
//
// Sidik jari tiap penulis (contoh di part ini):
//  1 : ibu muda. "Alhamdulillah/papanya/ya udah deh", emoji 😭 jarang, 1-2 blok
//  2 : anak kos laki, LEDAKAN KAPITAL + ekor lowercase, tanpa titik
//  3 : ibu guru, "saya/Ananda", baku tapi hidup, dua paragraf
//  4 : bapak kantoran pendiam, 2-4 kalimat kering, jam persis, tanpa emoji
//  5 : anak warung, buku tulis, kolom kas, hangat
//  6 : bego pede, lowercase mengalir tanpa tanda baca, itungan salah yakin
//  7 : mahasiswi, "fix/yaudah/guys", tugas, blok + emoticon 🙃
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
// Jangan diseragamin lagi. Kalau dua cuitan kerasa "satu tangan", gagal.
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 1,
    minutesAgo: 25,
    shares: 12,
    content:
      "Alhamdulillah sore tadi papanya anter beliin sepatu buat anak aku yang pertama, ukuran 33 pas. Barusan aku mau selimutin, tau2nya dia udah tidur pake sepatunya masih, kaus kaki jg nempel gitu aja. Aku gak enak lepasinnya, kasian takut dia bangun.\n\nYa udah aku biarin aja deh, besok subuh aku cuci diam2 😭",
    comments: [
      { authorId: 57, minutesAgo: 22, content: "MasyaAllah, itu tandanya dia sayang banget sama sepatunya kak 😭 anakku dulu juga gitu, ampe 3 hari gak dilepas sepatunya" },
      { authorId: 63, minutesAgo: 20, content: "kak besok kalo udah dicuci, jemurnya jangan kena matahari langsung ya, biar gak pecah kulitnya. aku pernah salah 😅" },
      { authorId: 33, minutesAgo: 17, content: "kaus kakinya dicuci terpisah ya bu, yang itu biasanya bau paling keras, dari keringet seharian" },
      { authorId: 46, minutesAgo: 14, content: "Alhamdulillah ya bu. Simpan kotaknya sekalian, nanti pas ganti ukuran bisa dipakai lagi buat adiknya" },
      { authorId: 82, minutesAgo: 11, content: "kak, dari ukuran 33 ke 34 itu biasanya cepet banget ya? anakku dari 33 naik ke 34 cuma 4 bulan, dompetnya yang sakit 😂" },
      { authorId: 91, minutesAgo: 8, content: "Semoga sekolahnya lancar ya bu anaknya. Dulu anak saya juga begitu, sepatu baru dipake tidur, kaus kaki juga. Sekarang disuruh beli sepatu malah males" },
      { authorId: 22, minutesAgo: 5, content: "aku baca sambil senyum, anakku dulu juga gitu, takut lecet takut semuanya 🙏 selamat sekolah ya nak" },
      { authorId: 69, minutesAgo: 4, content: "Anakku dulu juga begitu kak, dipake tidur 3 hari. Dilepas malah nangis, katanya rasanya kosong 😂" },
      { authorId: 88, minutesAgo: 3, content: "sepatunya putih ya bu? kalau putih awas, minggu kedua pasti minta dibantu ngucek bareng2 😄" },
      { authorId: 93, minutesAgo: 2, content: "terharu bacanya bu 😭 masa2 sepatu sekolah pertama tuh cuma sekali seumur hidup, catat tanggalnya ya" },
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
      { authorId: 44, minutesAgo: 51, content: "gue lebih parah bre, nyari HP pake HP sambil muterin kos, tetangga nanya nyari apa wkwkwk" },
      { authorId: 118, minutesAgo: 47, content: "senter mode on, gk heran batre ente abis terus wkwk" },
      { authorId: 10, minutesAgo: 43, content: "BJIR GUE PERNAH GITU JUGA NYARI KACAMATA PADAHAL UDAH DIPAKE DI MATA WKWKWK" },
      { authorId: 129, minutesAgo: 39, content: "yg penting ketemu bre, gue hp ilang beneran ampe skrg 🙏" },
      { authorId: 224, minutesAgo: 35, content: "cara klasik: telepon dari HP orang lain, ikutin bunyinya. tapi kalo yang bunyi notif doang ya susah, harus ada chat masuk" },
      { authorId: 13, minutesAgo: 31, content: "wkwkwk gak logik sih tapi relatable bgt bre" },
      { authorId: 141, minutesAgo: 27, content: "gue pernah nyari charger ampe nangis, ketemunya udah dicolok di kamar tetangga. sklian malu wkwk" },
      { authorId: 115, minutesAgo: 24, content: "pas nemu dipegang sendiri tuh berasa nemu harta karun tapi malu juga ya bre wkwk" },
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
      { authorId: 48, minutesAgo: 79, content: "Guru yang mau repot memotong kue tengah malam demi soal ulangan, murid-muridnya beruntung." },
      { authorId: 30, minutesAgo: 72, content: "saya juga pernah begitu, buat soal pembagian akhirnya beli dua roti biar bisa dipotong beneran di depan murid les. mereka lebih percaya kalau lihat bentuknya" },
      { authorId: 262, minutesAgo: 64, content: "Ibu ini teladan. Saya dulu juga begitu, menghitung soal panen jeruk semalaman, besoknya jeruknya habis dimakan tetangga." },
      { authorId: 39, minutesAgo: 57, content: "dua pertiga plus sepertiga itu satu utuh, jadi kuenya tinggal satu, tinggal dipotong dua kali. praktis" },
      { authorId: 77, minutesAgo: 50, content: "semangat ya bu. anak saya yang kelas 4 sekarang suka bagi2 kue ke adiknya, katanya belajar dari gurunya 😄" },
      { authorId: 5, minutesAgo: 42, content: "kuenya jangan lupa dibeli di warung kami bu, nanti aku catat sebagai pengeluaran riset wkwk" },
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
      { authorId: 27, minutesAgo: 108, content: "9 menit masih aman. di gudang kami telat 5 menit langsung dicatat satpam, walaupun satpamnya sendiri kadang telat" },
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
      { authorId: 15, minutesAgo: 138, content: "bener itu kata ibunya teh, nyicil tuh seringnya lupa sendiri udah sampe mana. buku itu penyelamat" },
      { authorId: 39, minutesAgo: 130, content: "kolom lunas sama sisain memang harus dipisah. kalau campur, yang nyangkut bisa kecoret tanpa sengaja" },
      { authorId: 66, minutesAgo: 121, content: "warung teh, stok roti kismisnya tolong ditambah ya, tiap sore selalu abis duluan" },
      { authorId: 21, minutesAgo: 113, content: "aku pembeli yang selalu nyicil 2 ribu tiap lewat. makasih ya gak diomelin wkwk" },
      { authorId: 233, minutesAgo: 104, content: "aku suka warung yang jujur ngomongnya, kalo uang kurang dibales 'itu aja dulu dik'. hemat hati" },
      { authorId: 48, minutesAgo: 96, content: "Buku kas warung itu arsip sosial lingkungan. Siapa rajin, siapa terlantar, semua tercatat." },
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
      { authorId: 11, minutesAgo: 168, content: "4500 bagi 2 itu 2250, bener. tapi 18 ribu bagi 2 itu 9 ribu, bisa rata kok. yang gak bisa rata itu 9 dibagi 2. jangan numpang nyebelin" },
      { authorId: 226, minutesAgo: 160, content: "wkwk ini puyeng sendiri, 2250 itu 2000 plus 250, 250 itu seperempat ribu. udah beres kan gitu aja" },
      { authorId: 28, minutesAgo: 157, content: "wkwk bre 2250 itu emang 2 ribu plus 250, gue cek pake kalkulator biar gak ikut puyeng" },
      { authorId: 49, minutesAgo: 154, content: "di cukuran juga ada yang itung gagal om. yang penting kenyang, receh disimpen kaleng bener juga" },
      { authorId: 2, minutesAgo: 151, content: "GUE IKUT PUYENG BACA. TAPI YANG PENTING KENYANG. SATU PAKTIK" },
      { authorId: 137, minutesAgo: 143, content: "kaleng biskuit tuh gk awet bre, abisnya kue nya gk smpe seminggu wkwkwk" },
    ],
  },
  {
    id: 7,
    authorId: 7,
    minutesAgo: 205,
    shares: 41,
    content:
      "angket skripsi: target 100, masuk 37. tiap sebar grup, yang isi tetep 6-7 orang itu2. kemarin coba sebar ke grup sebelah, malah ada yang bales 'misi mbak gak ngerti' 🙃\n\nfix besok aku cetak kuesioner beneran, jalan kaki ke kamar2 kos sambil bawa coklat sachet. biar ada timbangan. berhasil apa gak gak tau. ya udahlah, yang penting minggu ini udah gerak.",
    comments: [
      { authorId: 25, minutesAgo: 198, content: "coklat sachet itu ampuh bre. dulu gue tawarin mi instan, respondennya malah nanya bisa refill gak" },
      { authorId: 212, minutesAgo: 190, content: "perasaan banget ini, angket gue jalan 3 hari doang terus nganggur sampe sekarang 🙃" },
      { authorId: 36, minutesAgo: 181, content: "km sisa brp lagi? kalo 63 mah masih sanggup 2 minggu kalau kos2an diserbu. semangat ya" },
      { authorId: 152, minutesAgo: 172, content: "yang bales 'misi mbak' itu mending kak, yang gue alami diem doang terus ngalihin topik 😭" },
      { authorId: 30, minutesAgo: 163, content: "kalau kos2an, dateng pas jam makan. habis magrib biasanya pada di kamar. jangan sore, sore pada tidur" },
    ],
  },
  {
    id: 8,
    authorId: 8,
    minutesAgo: 235,
    shares: 23,
    content:
      "jaga malam tadi: satu pasien, gula darah dicek 3 kali. jam 2 minta selimut. jam 3 minta selimut lagi, katanya dingin. jam 4 selimutnya dikembalikan, katanya panas.\n\ngue duduk deket pintu ngitung: selimut itu pindah 2 kali dalam 2 jam. kopi di meja jaga udah dingin pas sempet dipegang. ya udah, minimal selimutnya hangat pas dibutuhin.",
    comments: [
      { authorId: 12, minutesAgo: 228, content: "selimut 2 jam 2 kali itu masih adem. gue pernah 4 kali. yang bolak balik bukan obatnya, selimutnya wkwk" },
      { authorId: 248, minutesAgo: 220, content: "selimut yang pindah2 itu tugasya paling manusiawi si om, panas dingin memang begitu" },
      { authorId: 23, minutesAgo: 211, content: "jam 4 pagi itu jam paling jujur. badan bingung mau panas apa dingin, sama kayak kopinya" },
    ],
  },
  {
    id: 9,
    authorId: 9,
    minutesAgo: 265,
    shares: 15,
    content:
      "order tadi malem 6 km, tarif 14. hujan gede.\nsempet mikir ambil apa gak. ambil lah, sekalian jalan.\n\ndi restoran tunggu 12 menit, pesanannya belum jadi. jalan macet dikit, nyampe rumah pelanggan jam 21.40. dia bilang 'bang makasih ya masih mau jalan malem2 hujan'.\n\ntarif 14 plus bonus hujan 3, total 17. pulangnya lewat jalan sepi, 9 km. dapet hiburan pikiran gratis.",
    comments: [
      { authorId: 20, minutesAgo: 257, content: "yang minta anter malem2 hujan biasanya emang lagi butuh. dapet makasih aja udah lumayan, mas" },
      { authorId: 240, minutesAgo: 249, content: "17 buat 6 km plus hujan masih kurang si om, tapi yang penting ampe tujuan selamat" },
      { authorId: 26, minutesAgo: 240, content: "kalau udah malem gitu gue turunin penumpangnya mepet gang aja biar gak kesandung jalan bolong. hati2 di jalan bro" },
      { authorId: 115, minutesAgo: 231, content: "gaskeun bang, hujan mah rezeki juga wkwk, jas hujannya dipake dua, satu buat motor" },
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
      { authorId: 13, minutesAgo: 286, content: "wkwkwk persamaan kuadrat tuh yang ada pangkat 2 nya bre, gue catet rumus abc doang gk ngerti isinya, dua2nya sama2 menyala wkwk" },
      { authorId: 28, minutesAgo: 279, content: "bre b itu angka yang nempel x, c itu angka nganggur sendirian. contoh 2x kuadrat + 3x + 1, b nya 3 c nya 1. catet itu aja, minimal besok gak bengong WKWK" },
      { authorId: 38, minutesAgo: 271, content: "kak, itu pelajaran smp kan ya? bunda bilang nanti pas ke smp ada. aku ikut takutan aja deh wkwk" },
      { authorId: 131, minutesAgo: 263, content: "wkwk gue juga gitu bre, buku dibuka doang gak dibaca, nilai keluar 68. lumayan buat anak yang pasrah" },
      { authorId: 35, minutesAgo: 256, content: "tadi gue mikir, kalo gue jadi huruf b di soal itu gak enak ya, dipanggil terus wkwk" },
      { authorId: 149, minutesAgo: 249, content: "gue kemarin nanya alur soal ke anak sebelah, bayarnya coklat 2 bungkus. tutor alam bre wkwk" },
    ],
  },
  {
    id: 11,
    authorId: 11,
    minutesAgo: 325,
    shares: 41,
    content:
      "Gajian tadi siang. Kebiasaan saya: catat dulu sebelum dipakai. Sepuluh persen buat ibu, sedikit buat kaleng, sisanya bulan berjalan.\n\nTernyata setelah dicek masih ada satu pos yang lupa: sumbangan tiap Jumat di kantor. Jadi angka di catatan dan angka di dompet tidak cocok. Selisihnya kecil, tapi kalau dibiarkan nanti jadi biasa. Malam ini dirapikan dulu, baru senyum.",
    comments: [
      { authorId: 39, minutesAgo: 316, content: "selisih kecil yang dicari itu tanda orangnya rapi. kebanyakan orang biarin, terus heran uangnya kemana" },
      { authorId: 271, minutesAgo: 308, content: "Menata catatan sebelum memakai uang itu kebiasaan baik. Saya belajar hal ini terlambat, sekitar usia empat puluhan." },
      { authorId: 45, minutesAgo: 299, content: "Sepuluh persen untuk orang tua itu nafkah batin juga. Lanjutkan, Nona." },
      { authorId: 21, minutesAgo: 290, content: "aku kebalikannya, dompet duluan baru nyusul catat. hasilnya tiap akhir bulan jadi detektif wkwk" },
      { authorId: 59, minutesAgo: 281, content: "kak, sumbangan Jumat itu jangan dihitung rugi ya, itu tabungan di tempat lain 😄" },
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
      { authorId: 8, minutesAgo: 346, content: "jam 3 malam tanya cuma mau kepastian itu sering. kadang mereka cuma pengen denger suara orang sebelum tidur" },
      { authorId: 243, minutesAgo: 338, content: "jawaban 'jam 8' itu menenangkan. kayak jadwal kereta, yang penting ada jamnya" },
    ],
  },
  {
    id: 13,
    authorId: 13,
    minutesAgo: 385,
    shares: 19,
    content:
      "hari ini dpt jajan 10 rebu dari om. plng skolah beli cilok 5 rebu, es teh 2 rebu, sisa 3 rebu tadi kepake beli pulsa game 3 rebu. pas bgt gk sengaja wkwk. terus dpet skin gratis dari event. puas bgt hari ini. bsk jajan apa ya, tadi liat somay baru buka depan gang, blom coba",
    comments: [
      { authorId: 127, minutesAgo: 376, content: "cilok 5 rebu di sekolah mah banyak bgt itu bre, di tempat gue 3 rebu doang wkwk" },
      { authorId: 10, minutesAgo: 368, content: "SOMAY BARU BUKA WAJIB COBA. KALO ENAK KABARIN GUE JUGA" },
      { authorId: 35, minutesAgo: 359, content: "pulsa 3 rebu dpet skin gratis... hidupmu beruntung bgt sih" },
      { authorId: 143, minutesAgo: 350, content: "itunganmu rapi bgt padahal kt orang2 males itung wkwkwk" },
      { authorId: 38, minutesAgo: 341, content: "somay sama bakso sama aja gak kak? aku jg mau coba depan gang, tapi bunda bilang tunggu gajian" },
      { authorId: 118, minutesAgo: 332, content: "es teh 2 rebu tuh minuman wajib pelajar bre, gk bisa ditawar wkwkwk" },
      { authorId: 141, minutesAgo: 327, content: "pulsa 3 rebu dpet skin gratis tuh udah rezeki anak sekolah bre wkwk" },
      { authorId: 133, minutesAgo: 324, content: "somay depan gang tuh gila rasanya bre, tapi beli setengah porsi dulu aja, aman" },
    ],
  },
  {
    id: 14,
    authorId: 14,
    minutesAgo: 415,
    shares: 7,
    content:
      "pagi ini om-om parkir bayarnya pake koin 500. kubumpul 34 keping. ada yang masih panas, abis dijepit jok.\nsore biasanya 40-an keping. om yang motor stangnya miring itu bayarnya paling cepet, om yang minta dikit dulu malah lupa sampe magrib.\ngak apa. koin aja bisa numpuk, masa orangnya gak balik.",
    comments: [
      { authorId: 186, minutesAgo: 406, content: "om stang miring emang tipe bayar duluan. yang nunda biasanya yang motornya paling kinclong" },
      { authorId: 41, minutesAgo: 398, content: "kantong depan gue tiap sore bunyi juga om, isinya receh dari ongkir kecil2. berat lho wkwk" },
      { authorId: 49, minutesAgo: 389, content: "pelanggan macem2 om. ada yang bayar duluan, ada yang minta digrooming dulu baru bayar. yang penting kembali" },
      { authorId: 205, minutesAgo: 380, content: "34 keping kali 500 itu 17 ribu om. lumayan buat bensin motor kecil seminggu" },
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
      { authorId: 72, minutesAgo: 436, content: "aku juga pernah teh, tanya2 malah dibales 'ya gitu lah'. mending beli aja, puyeng ntar 😂" },
      { authorId: 32, minutesAgo: 428, content: "aku jualan juga teh, kadang naik emang berat. tapi yang suka nawar justru pelanggan yang paling sering dateng, itu pertanda baik" },
      { authorId: 1, minutesAgo: 419, content: "aku kemarin sama teh, terong naik 2 ribu, aku tetep beli 3, anakku doyan tumisnya" },
      { authorId: 88, minutesAgo: 410, content: "yang dibungkus satu buat bapaknya ya teh? semoga besok dapet harga enak 🙏" },
    ],
  },
  {
    id: 16,
    authorId: 16,
    minutesAgo: 475,
    shares: 26,
    content:
      "Hari ini kerjaan utama: menelepon 32 nasabah yang jatuh tempo. Yang diangkat 14. Yang marah 3. Yang bercerita panjang soal usahanya 5, dan itu yang paling lama.\n\nSore, satu bapak bilang, 'non, ingetin aja tiap bulan, kadang aku lupa, bukan gak mau bayar.' Aku catat di kolom khusus. Ada kolom 'peringatan', ada kolom 'ingatkan tiap bulan'. Yang kedua isinya cuma 2 orang.",
    comments: [
      { authorId: 47, minutesAgo: 466, content: "setuju non, di balik loket juga gitu. nasabah yang cerita biasanya bukan gak niat, cuma kelebihan beban" },
      { authorId: 276, minutesAgo: 458, content: "Pekerjaan menelepon dengan sabar itu seni. Semoga nasabahnya membalas dengan kejujuran." },
      { authorId: 11, minutesAgo: 449, content: "kolom 'ingatkan tiap bulan' itu sistem yang bagus. di catatan aku juga ada kolom serupa, isinya tagihan langganan warung" },
    ],
  },
  {
    id: 17,
    authorId: 17,
    minutesAgo: 505,
    shares: 30,
    content:
      "laporan lab hari ini: massa jenis minyak 0,8 gram per cm kubik. dosen tanya kalau dipake buoyancy, berapa persen yang tenggelam. gue jwb 80 persen, bener. temen gue jawab 20 persen, jawabannya juga bener. beda yang ditanya. dosen cuma senyum.\nbro, itu momen gue sadar ngerjain soal yang penting baca pelan2, bukan ngehafal. tes berikutnya gue baca soal dua kali, skor naik dari 76 jadi 87. kecil tapi nyata",
    comments: [
      { authorId: 39, minutesAgo: 496, content: "0,8 gram per cm kubik itu 800 kg per meter kubik, jadi 80 persen di dalam air, 20 persen di atas. dua2nya bener, tergantung ditanyain bagian mana" },
      { authorId: 28, minutesAgo: 488, content: "wkwkwk ini beneran, gue dulu jawab 'tergantung' malah dikira sok tau. ternyata emang tergantung soalnya" },
      { authorId: 219, minutesAgo: 479, content: "baca 2x naik 11 poin itu mah bukan kecil bre, itu lompatan. gue naik 2 poin aja syukur" },
      { authorId: 36, minutesAgo: 470, content: "manusia yang baca pelan2 menang. abis lab ngapain lagi? aku ada kuis patologi minggu depan, minta doanya ya" },
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
      { authorId: 178, minutesAgo: 526, content: "turun 7 rebu sekali angin itu biasanya bener musim puncak om. beli sekarang, jangan nunggu minggu depan" },
      { authorId: 32, minutesAgo: 518, content: "sayur juga gitu om. kangkung musim hujan murah banget, musim panas naik 2 kali, pembeli nyalahin aku, padahal tanah" },
      { authorId: 15, minutesAgo: 509, content: "teh, aku beli yang 18 tadi ya, pilih yang buahnya belom kebuka semua biar tahan dua hari" },
      { authorId: 199, minutesAgo: 500, content: "yang jual duluan untung itu bener om, sama kayak yang di pasar modal" },
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
      { authorId: 49, minutesAgo: 556, content: "bener bos, di cukuran juga ada yang nawarin gini. jawabku sama: kerja yang jelas aja, potong rambut dapat uang potong rambut" },
      { authorId: 236, minutesAgo: 548, content: "tangan om itu mungkin nyelametin dia. sebelahan gue ada yang mulai gini, sekarang motornya kejual" },
      { authorId: 23, minutesAgo: 539, content: "aplikasi yang janjiin angka besar dari modal kecil, rumus matematikanya gak pernah seimbang. yang seimbang cuma buat yang bikin aplikasinya" },
      { authorId: 283, minutesAgo: 530, content: "Menolak dengan sopan itu pelajaran. Semoga bapak tadi ingat pesan Anda." },
    ],
  },
  {
    id: 20,
    authorId: 20,
    minutesAgo: 595,
    shares: 14,
    content:
      "Penumpang jam 10 malam, turun di ujung perumahan. Di jalan dia tidur, kepala nyandar jendela. Gue pelankan aja, lewat polisi tidur tiga kali dia gak goyang.\n\nSampai tujuan dia bangun, tanya 'sudah sampai ya mas?'. Gue bilang sudah, dari tadi 5 menit nungguin lu bangun. Dia senyum, bayar, gak ngomong banyak. Itu aja. Gue jalan lagi.",
    comments: [
      { authorId: 9, minutesAgo: 586, content: "penumpang tidur tuh percaya penuh sama kita bang. makanya di lempar polisi tidur jangan ngebut" },
      { authorId: 26, minutesAgo: 578, content: "penumpang tidur di angkot pun gitu mas, kepala melayang kiri kanan tapi gak pernah jatuh. aneh tapi nyata" },
      { authorId: 296, minutesAgo: 569, content: "5 menit nungguin orang tidur tanpa keberatan, itu kesabaran langka mas. semoga rezekinya lancar 🙏" },
      { authorId: 12, minutesAgo: 560, content: "penumpang yang tidur biasanya habis shift juga kayak gue. makasih ya mas2 ojol yang nyetirnya pelan" },
    ],
  },
  {
    id: 21,
    authorId: 21,
    minutesAgo: 625,
    shares: 21,
    content:
      "kaleng nabung gue bulan ini: 38 ribu. sumbernya receh kembalian sama penghematan es teh (seminggu gak beli, ganti air putih seduh sendiri).\n\ntadi mau beli kerudung baru, liat harga 65. gue itung: 38 di kaleng, 20 di dompet, kurang 7. ya udah minggu depan lagi. kerudung lama masih bisa, cuma warnanya udah gak warna lagi.",
    comments: [
      { authorId: 7, minutesAgo: 616, content: "air putih seduh sendiri itu juara, gue juga. hemat 2 rebu sehari kalau konsisten, sebulan 60" },
      { authorId: 155, minutesAgo: 608, content: "'warnanya udah gak warna lagi' 😭 aku relate banget kak, punyaku udah jadi abu misterius" },
      { authorId: 16, minutesAgo: 599, content: "cek kaleng dulu sebelum beli itu kebiasaan yang jarang ada sekarang. salut" },
      { authorId: 68, minutesAgo: 590, content: "kaleng nabung itu suka gak awet kak, biasanya kepake buat jajan pas sakit wkwk. semangat ya" },
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
      { authorId: 74, minutesAgo: 646, content: "lima menit itu cukup kok bu. anak yang jauh kalau udah bilang cukup, berarti dia baik2 aja" },
      { authorId: 103, minutesAgo: 638, content: "Anak yang menelepon dulu tanpa diminta itu tandanya dia ingat rumah. Syukuri ya bu." },
      { authorId: 1, minutesAgo: 629, content: "semoga anaknya sehat terus ya bu, insyaAllah 🙏" },
      { authorId: 24, minutesAgo: 620, content: "ANAKMU BAIK BU. CUCU AKU JARANG TELEPON TAPI SETIAP PULANG SELALU BAWA BUAH DARI KEBUN. ALHAMDULILLAH" },
      { authorId: 81, minutesAgo: 611, content: "aamiin bu, semoga pertemuan berikutnya lebih lama 🙏" },
      { authorId: 66, minutesAgo: 604, content: "lima menit itu mah anaknya udah mandiri bu. kalau ada masalah pasti dia telepon lebih lama" },
      { authorId: 97, minutesAgo: 602, content: "makan teratur kamar bersih uang cukup, itu jawaban paling penenang buat ibu2 🙏" },
      { authorId: 107, minutesAgo: 600, content: "Alhamdulillah ya bu. Anak yang telepon dulu tanpa diminta itu hasil didikan orang tuanya." },
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
      { authorId: 4, minutesAgo: 676, content: "Kulkas yang begini biasanya hanya butuh dibersihkan kumparan belakangnya. Saya pernah mengalaminya." },
      { authorId: 249, minutesAgo: 668, content: "kulkas shift malam juga ternyata ya, sama kayak kita om" },
      { authorId: 45, minutesAgo: 659, content: "Peralatan yang bekerja diam2 patut dihargai. Selamat istirahat." },
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
      { authorId: 106, minutesAgo: 706, content: "Mbak, itu namanya anak berbakat. Jangan diinterupsi ya mbak, biarkan dia asyik sampai magrib" },
      { authorId: 33, minutesAgo: 698, content: "pura2 tidur itu jurus ampuh bu, aku juga sering. anak2 jadi ngerasa bebas 😄" },
      { authorId: 97, minutesAgo: 689, content: "semoga cucunya sehat dan rajin terus ya bu 🙏" },
      { authorId: 22, minutesAgo: 680, content: "cucu yang rajin, neneknya juga pintar pura2 tidur. cocok bu 😄" },
      { authorId: 1, minutesAgo: 677, content: "jangan lupa disiapin camilannya ya bu pas cucunya belajar, biar makin betah 😄" },
      { authorId: 63, minutesAgo: 674, content: "semoga cucunya makin pintar dan sehat ya bu 🙏" },
      { authorId: 74, minutesAgo: 671, content: "ini jurus yang sama kayak punya mertua aku dulu bu. yang keliatan cuma tidur, yang gak keliatan kerja 😄" },
      { authorId: 110, minutesAgo: 668, content: "Bu, belajar sampai magrib itu rejeki. Nenek yang sabar menunggu itu berkah." },
    ],
  },
  {
    id: 25,
    authorId: 25,
    minutesAgo: 745,
    shares: 30,
    content:
      "rencana gajian bulan depan udah gue susun rapi: sewa, makan, tabung dikit, sisanya jajan warung. TP. tanggal 12 ban motor kena paku. ban baru 140 rebu. abes itu rencana.\nya udahlah, gue tambahin satu pos di catatan: 'dana paku lagi'. bulan depan kena paku lagi gak? gak tau. yang jelas rencana sekarang lebih jujur dari kemarin.",
    comments: [
      { authorId: 2, minutesAgo: 736, content: "DANA PAKU LAGI WKWKWK. GUE ADA POS 'DANA KUNCI ILANG LAGI'. KITA SAMA2 DIGODA DUNIA" },
      { authorId: 223, minutesAgo: 728, content: "140 rebu ban tuh sakit bre, dulu gue kena 2 minggu berturut, kanan kiri 😭" },
      { authorId: 21, minutesAgo: 719, content: "dana paku lagi itu dana darurat versi jujur sih. bagus udah mikir ke situ" },
      { authorId: 137, minutesAgo: 710, content: "rencana yang jujur emang harus ada pos dadakannya wkwk" },
    ],
  },
]
