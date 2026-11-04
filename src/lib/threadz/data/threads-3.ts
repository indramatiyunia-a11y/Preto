import type { ThreadzThread } from "../types"

// PART 3: cuitan 51-75. Post kedua penulis 1-25.
// Aturan: kosakata & kebiasaan tetap, BENTUKNYA beda dari post pertama —
// gak ada rangkaian "cerita -> pelajaran hidup" yang diulang dua kali.
// Topik sengaja beda dari post pertama; banyak yang makin pekat matematikanya
// (diskon syarat, untung-rugi, desimal, kecepatan rata2, sisa utang).
// Dilarang skenario ketemuan multi-dialog. Kutipan orang maksimal satu baris.
// Gak ada komentar esai, gak ada cameo, gak ada penulis bales diri sendiri,
// gak ada komentar yang gak nyambung sama isi post.
export const THREADS_PART3: ThreadzThread[] = [
  {
    id: 51,
    authorId: 9,
    minutesAgo: 1525,
    shares: 15,
    content:
      "order subuh, 11 km, tarif 21. penumpang bawa kotak sepatu gede, naro di jok depan.\nnyampe dia turun, kotaknya lupa di jok.\ngue kejar, dia dari balkon ngekinclong2in tangan. kotaknya gue taruh depan pagar, lari balik 200 meter.\nsekarang punggung kram. tarif 21 tadi gak kerasa.",
    comments: [
      { authorId: 199, minutesAgo: 1517, content: "kotak di jok mah wajib dilirik balik bang" },
      { authorId: 187, minutesAgo: 1509, content: "200 meter lari subuh bang, gratis olahraga wkwk" },
      { authorId: 240, minutesAgo: 1500, content: "yang balkon ngekinclong2 itu lumayan bang" },
    ],
  },
  {
    id: 52,
    authorId: 33,
    minutesAgo: 1555,
    shares: 21,
    content:
      "beras di minimarket diskon 20 ribu kalau belanja lewat 100 ribu. keranjangku berhenti di 96. kurang 4 ribu. kutambah roti 5 ribu biar tembus syaratnya. total bayar 101, dipotong 20, jadi 81.\n\nkalo gak nambah, 96. dengan nambah 5 jadi 81. lompatannya 15 ribu.\nabang cuma liat aku senyum2 di kasir. dia gak tau ada itungan sepanjang itu 😄",
    comments: [
      { authorId: 60, minutesAgo: 1547, content: "tambah 5 rebu buat hemat 15 rebu, itungan dapur juara bu 😄" },
      { authorId: 65, minutesAgo: 1539, content: "aku juga gitu bu, sampe nambah serbet biar tembus syaratnya wkwk" },
      { authorId: 93, minutesAgo: 1530, content: "diskon beras di mana bu? kabarin dong 😄" },
      { authorId: 81, minutesAgo: 1521, content: "abang cuma liat senyum, gak tau di kepala ada mesin kasir bu wkwk" },
    ],
  },
  {
    id: 53,
    authorId: 2,
    minutesAgo: 1585,
    shares: 30,
    content:
      "CICILAN HP BULAN INI LUNAS. TINGGAL 2 BULAN LAGI. GUE ITUNG ULANG: UANG MAKAN GUE DIPANGKAS JADI MIE DOANG 3 KALI SEHARI. BERAT BADAN TURUN 2 KILO. HP NAIK STATUS JADI MILIK SENDIRI.\nBARTER YANG GAK PERNAH GUE SESALI. MUNGKIN",
    comments: [
      { authorId: 44, minutesAgo: 1577, content: "minimal ada telur bre, biar gak pingsan wkwk" },
      { authorId: 118, minutesAgo: 1569, content: "berat turun, status hp naik. aset kos wkwkwk" },
      { authorId: 223, minutesAgo: 1560, content: "'MUNGKIN' di akhir itu jujur banget 😭 selamat bre" },
      { authorId: 130, minutesAgo: 1551, content: "gue juga gitu dulu, badan langsing kawan wkwk" },
    ],
  },
  {
    id: 54,
    authorId: 15,
    minutesAgo: 1615,
    shares: 14,
    content:
      "modal daging tadi pagi 200 rebu. laku sampe siang 180 rebu. di buku doang rugi 20 rebu teh.\ntapi sisa daging 2 kilo jadi rendang, itu belom masuk itungan. kalau sore rendangnya laku, bukunya balik hijau. kalau gak laku, kita makan rendang seminggu. rugi diliat dari sisi mana teh 😄",
    comments: [
      { authorId: 86, minutesAgo: 1607, content: "rugi di kertas untung di rendang teh 😄" },
      { authorId: 79, minutesAgo: 1599, content: "harga daging naik, semua pedagang mepet ya teh" },
      { authorId: 101, minutesAgo: 1590, content: "semoga rendangnya laku teh 🙏" },
    ],
  },
  {
    id: 55,
    authorId: 24,
    minutesAgo: 1645,
    shares: 26,
    content:
      "CUCU AKU AJARIN AKU PAKAI HP. SEKARANG AKU BISA NGIRIM PESAN SENDIRI. GAK PERLU BANTU LAGI.\nTADI AKU KIRIM KE ANAKKU, DIA BALES 'WAH MAMA PINTER'. PADAHAL CUMA KIRIM IYA. PINTERNYA PALSU. TAPI SENENGNYA ASLI.",
    comments: [
      { authorId: 64, minutesAgo: 1637, content: "yang penting bisa kirim sendiri ya bu 😄" },
      { authorId: 97, minutesAgo: 1629, content: "Pinternya palsu, senengnya asli. Bikin cerah bacanya bu 🙏" },
      { authorId: 22, minutesAgo: 1620, content: "semoga makin lancar pakai HPnya bu 🙏" },
      { authorId: 163, minutesAgo: 1610, content: "cucu yang sabar ngajarin nenek itu anak baik bu, kabarin dia wkwk" },
    ],
  },
  {
    id: 56,
    authorId: 5,
    minutesAgo: 1675,
    shares: 45,
    content:
      "pelanggan bayar pake uang 100 rebu yang rata semua, gak ada bekas lipet. belanjanya 12. kembalian 88, aku itung dua kali.\n\nmasih kepikiran kata paman: kasir yang gak itung dua kali itu percaya diri berlebihan. jadi ya terus itung dua kali deh. uang rata begitu bikin jari gak mau salah.",
    comments: [
      { authorId: 120, minutesAgo: 1667, content: "uang rata tuh kerasa beda di tangan ya dik 😄" },
      { authorId: 70, minutesAgo: 1659, content: "88 ribu recehnya pasti rapi teh" },
      { authorId: 231, minutesAgo: 1650, content: "itung dua kali itu bukan pelan dik, itu teliti" },
    ],
  },
  {
    id: 57,
    authorId: 44,
    minutesAgo: 1705,
    shares: 30,
    content:
      "PR masak kedua: telur dadar. hasil: telur gepeng rasa kayu.\nkenapa kayu? gue lupa garem. telur doang maunya rasa apa coba.\ntetangga kamar ngasih garem sejumput, dadar kedua lumayan. jadi rahasia masak itu garem ya. oke dicatat.\nbesok goreng tempe, doain garemnya gak lupa lagi wkwk",
    comments: [
      { authorId: 50, minutesAgo: 1697, content: "garem sejumput itu sains paling misterius guys 😭" },
      { authorId: 141, minutesAgo: 1689, content: "TELUR GEPEng RASA KAYU WKWKWK KITA SEMANGAT" },
      { authorId: 128, minutesAgo: 1680, content: "gepeng mah karena minyak kebanyakan bre" },
      { authorId: 148, minutesAgo: 1671, content: "coba bubuk kaldu bre, bedanya gila wkwk" },
    ],
  },
  {
    id: 58,
    authorId: 12,
    minutesAgo: 1735,
    shares: 5,
    content:
      "pasien hari ini 22, tanda vital dicatat 22 kali.\njam 12 siang baru sempet duduk 4 menit. makan pun berdiri.\ntemen jaga bilang 'kamu kurus lagi'. aku bilang, shift itu gak diukur kilo, diukur jadwal.\nbesok off. rencana: tidur, tidur, tidur.",
    comments: [
      { authorId: 8, minutesAgo: 1727, content: "22 masih kecil mbak, gue kemarin 31" },
      { authorId: 43, minutesAgo: 1719, content: "makan berdiri biasa mbak, di pabrik juga gitu" },
    ],
  },
  {
    id: 59,
    authorId: 30,
    minutesAgo: 1765,
    shares: 7,
    content:
      "si anak kamis kemarin bawa kartu ulangan. nilai matematikanya 78. dia pura2 santai, 'biasa aja bu'. matanya gak.\n\nkutulis di catatan kemajuan: naik 16 poin dari sebelumnya. dia baca lama. gak ngomong.\nbesok les lanjut. soalnya dia sendiri yang minta tambah jam.",
    comments: [
      { authorId: 84, minutesAgo: 1757, content: "'pura2 santai, matanya gak' itu detail banget kak 😄" },
      { authorId: 46, minutesAgo: 1749, content: "catatan kemajuan itu bentuknya gimana kak?" },
      { authorId: 267, minutesAgo: 1740, content: "Anak yang minta tambah jam sendiri itu jarang. Bagus sekali." },
    ],
  },
  {
    id: 60,
    authorId: 21,
    minutesAgo: 1795,
    shares: 21,
    content:
      "jualan barang gak kepake ke tetangga: laku 3, sisa 2. dapet 28 ribu, masuk kaleng.\nkaleng kemarin 38, sekarang 66. target kerudung 65. udah lewat 1 ribu wkwk.\n\nbesok gue beli. warnanya gak gue tentuin, yang penting gak abu misterius. kalau pas liat langsung gak cocok, ya kalengnya nunggu lagi.",
    comments: [
      { authorId: 7, minutesAgo: 1787, content: "gue mau ikut jualan buku kuliah ah 😄" },
      { authorId: 155, minutesAgo: 1779, content: "'gak abu misterius' 😭 relate" },
      { authorId: 68, minutesAgo: 1770, content: "lewat 1 ribu itu bonus kak 😄" },
      { authorId: 264, minutesAgo: 1761, content: "Kalau targetnya keliatan, biasanya tercapai." },
    ],
  },
  {
    id: 61,
    authorId: 17,
    minutesAgo: 1825,
    shares: 30,
    content:
      "motor teman kos: oli bocor. dia ngira oli abis karena dimakan mesin. bro. oli gak ilang, oli bocor dari seal.\n\ngue ganti seal 12 rebu, oli 55. dia mau bayar jasa 50, gue tolak, minta traktir bakso aja. total biaya motor jadi 67 plus bakso.",
    comments: [
      { authorId: 29, minutesAgo: 1817, content: "bener bro, yang gak ada bekasnya di lantai ya bocor" },
      { authorId: 183, minutesAgo: 1809, content: "'oli dimakan mesin' wkwkwk kalimat bengkel abal2" },
      { authorId: 226, minutesAgo: 1800, content: "bakso sebagai pembayaran itu sistem terbaik bro" },
      { authorId: 36, minutesAgo: 1791, content: "sistem mesin juga ribet ya bro 🙃" },
    ],
  },
  {
    id: 62,
    authorId: 39,
    minutesAgo: 1855,
    shares: 15,
    content:
      "di warung tadi ada yang debat: 0,9 itu lebih besar dari 0,15 atau bukan. Yang satu bilang 15 lebih besar dari 9.\n\nMakanya desimal itu dibaca tempatnya: 0,9 itu 90 persen, 0,15 itu 15 persen. Selesai.",
    comments: [
      { authorId: 17, minutesAgo: 1847, content: "klasik bro. di lab pernah ada yang baca 0,5 liter jadi 5 liter" },
      { authorId: 221, minutesAgo: 1839, content: "gue pernah ikut, debatnya sampe magrib wkwk" },
      { authorId: 30, minutesAgo: 1830, content: "besok ini jadi soal pembuka di les ya, makasih" },
      { authorId: 262, minutesAgo: 1821, content: "Membaca angka pelan2 itu latihan kesabaran juga, Pak." },
    ],
  },
  {
    id: 63,
    authorId: 1,
    minutesAgo: 1885,
    shares: 12,
    content:
      "tadi makan malam anak yang kedua nanya, kalau angka itu gak habis2, kenapa kata 'habis' bisa kepake buat gelas. aku diem bentar, gak siap.\nkakaknya yang jawab: gelasnya yang habis, angkanya gak.\nak gak nyangka jawabannya dari anak kelas 2. ya udah makan, kudengar dua2nya berdebat angka sama gelas sampe piringnya bersih 😭",
    comments: [
      { authorId: 63, minutesAgo: 1877, content: "kakaknya jago bu, jawabannya bener 😄" },
      { authorId: 88, minutesAgo: 1869, content: "anak debat pas makan itu lucu sekaligus pinter bu wkwk" },
      { authorId: 91, minutesAgo: 1860, content: "jangan dibosenin ya bu, anak yang nanya gitu itu lagi mikir" },
      { authorId: 104, minutesAgo: 1851, content: "semoga terus ya bu, pertanyaannya bagus 🙏" },
    ],
  },
  {
    id: 64,
    authorId: 28,
    minutesAgo: 1915,
    shares: 26,
    content:
      "PR fisika: hitung kecepatan rata2. gue jalan ke sekolah 12 menit, pulang 15, jarak 1,8 km. temen gue jawab 'ya 1,8 dibagi 2 doang'. WKWK.\n\nkecepatan rata2 itu total jarak dibagi total waktu: 3,6 km dibagi 27 menit. jadi 0,13 km per menit. bu guru bilang benar.\ntemen gue masih ngambek.",
    comments: [
      { authorId: 157, minutesAgo: 1907, content: "TEMEN LU NGAMBEK KARENA BENERAN WKWKWK" },
      { authorId: 39, minutesAgo: 1899, content: "1,8 dibagi 2 itu rata2 jarak, bukan kecepatan. dua konsep beda" },
      { authorId: 133, minutesAgo: 1890, content: "wkwk gue ikutan ngambek bacanya" },
      { authorId: 160, minutesAgo: 1881, content: "0,13 itu 7,8 km per jam kak 😭" },
    ],
  },
  {
    id: 65,
    authorId: 46,
    minutesAgo: 1945,
    shares: 12,
    content:
      "surat undangan pengukuran seragam sudah selesai 26 kelas, ditandatangani kepala sekolah jam 2. difotokopi 3: satu buat arsip, satu buat papan, satu jaga2. kertas di sekolah itu misterius, bisa hilang sendiri.\n\nSabtu pagi jam 8, antrean per kelas 10 menit. semoga lancar.",
    comments: [
      { authorId: 63, minutesAgo: 1937, content: "per kelas 10 menit itu rapi kak 🙏" },
      { authorId: 73, minutesAgo: 1929, content: "kak, pengukuran itu anaknya bawa sepatu olahraga gak?" },
      { authorId: 89, minutesAgo: 1920, content: "'bisa hilang sendiri' 😄 kertas sekolah emang misterius" },
    ],
  },
  {
    id: 66,
    authorId: 6,
    minutesAgo: 1975,
    shares: 3,
    content:
      "hp gue penyimpanan penuh. gue hapus video 2 tahun lalu 12 buah, dapet ruang 3 giga.\n3 giga itu banyak gk ya. kata hp cukup. kata gue kurang. seterusnya gue percaya hp aja deh.",
    comments: [
      { authorId: 142, minutesAgo: 1967, content: "GUE HAPUS 40 DAPET 2 GIGA DOANG WKWKWK" },
      { authorId: 212, minutesAgo: 1959, content: "3 giga buat game mah 1 aplikasi bre wkwk" },
      { authorId: 137, minutesAgo: 1950, content: "beli 64 giga itu penyesalan bre" },
      { authorId: 143, minutesAgo: 1943, content: "video 2 tahun lalu isinya apa bre wkwk" },
    ],
  },
  {
    id: 67,
    authorId: 38,
    minutesAgo: 2005,
    shares: 12,
    content:
      "aku nabung 2 ribu hari ini di celengan kaleng susu. isinya sekarang 17 ribu. bunda bilang kalau udah 50 ribu bisa beli buku gambar.\n\n50 dikurang 17 itu 33. aku itung pake jari doang, tapi bener kok, aku cek sama bunda. 33 hari lagi kalau tiap hari 1 ribu. semoga gak keburu jajan.",
    comments: [
      { authorId: 24, minutesAgo: 1997, content: "ANAK RAJIN ITUNG. NENEK DOAIN CELANGANNYA CEPET PENUH" },
      { authorId: 69, minutesAgo: 1989, content: "nahan jajan 5 rebu tiap hari ya kak 😄" },
      { authorId: 92, minutesAgo: 1980, content: "semangat ya nak, bunda pasti bangga 🙏" },
    ],
  },
  {
    id: 68,
    authorId: 11,
    minutesAgo: 2035,
    shares: 41,
    content:
      "Akhir bulan tugasnya mengganti struk: warung, ojek, belanja dapur. Kususun per tanggal, dijumlah per kategori: makan 890, jalan 210, lain 150. Total 1.250. Cocok dengan catatan awal.\n\nTidak ada yang selisih.",
    comments: [
      { authorId: 39, minutesAgo: 2027, content: "890 + 210 + 150 = 1.250. pas." },
      { authorId: 16, minutesAgo: 2019, content: "selisih nol itu kepuasan yang gak bisa dibeli." },
      { authorId: 121, minutesAgo: 2010, content: "kategori 'lain' 150 itu isinya apa wkwk" },
    ],
  },
  {
    id: 69,
    authorId: 20,
    minutesAgo: 2065,
    shares: 14,
    content:
      "Penumpang pagi tadi bawa tas kecil, minta anter ke rumah sakit. Di jalan dia diam.\n\nSampai tujuan dia bilang, 'mas, lampu depan lu mati satu.' Gue bilang makasih. Kita gak kenal, tapi dia ngeliatin motor gue sebelum masuk.",
    comments: [
      { authorId: 189, minutesAgo: 2057, content: "lampu mati satu tuh bahaya bang" },
      { authorId: 240, minutesAgo: 2049, content: "gue pernah lampu mati seminggu gak tau 😅" },
      { authorId: 26, minutesAgo: 2040, content: "orang yang masih mikirin motor kita mas" },
    ],
  },
  {
    id: 70,
    authorId: 50,
    minutesAgo: 2095,
    shares: 26,
    content:
      "GUYS eksperimen malam ini: mie telur kornet. kornetnya dimasukin bareng air rebusan.\nhasil: kuahnya kayak sup kaleng, mie-nya bener. telurnya gak jadi, lupa. jadinya mie kornet kuah tanpa telur.\ntemen kamar nambah nasi. ANAK KOS.\nbesok diulang, telurnya dipisah goreng. catat.",
    comments: [
      { authorId: 160, minutesAgo: 2087, content: "lupa telur tapi mie-nya bener guys 😭" },
      { authorId: 162, minutesAgo: 2079, content: "NAMBAH NASI WKWKWK RESMI ANAK KOS JURAGAN" },
      { authorId: 126, minutesAgo: 2070, content: "kornet masuk bareng air rebusan tuh berani bre" },
      { authorId: 150, minutesAgo: 2062, content: "sup kaleng wkwkwk nama menu besok apa" },
      { authorId: 164, minutesAgo: 2053, content: "telurnya dipisah goreng bener bre wkwk" },
    ],
  },
  {
    id: 71,
    authorId: 7,
    minutesAgo: 2125,
    shares: 41,
    content:
      "kuesioner dicetak 60 lembar, 12 ribu. jalan ke kos2an sore, dapet 9 responden baru. total 46. sisa 54.\ncoklat sachet habis 8. rata2 responden minta coklat dulu baru isi.\n\nmanusia. tapi manusia itu lucu, ada yang isi serius banget, ada yang jawab 'semua bener' 15 pertanyaan. yang begitu kubuang satu2.",
    comments: [
      { authorId: 25, minutesAgo: 2117, content: "'semua bener' 15 pertanyaan itu musuh besar" },
      { authorId: 36, minutesAgo: 2109, content: "46 dari 100, separuh jalan km. semangat 🙃" },
      { authorId: 212, minutesAgo: 2100, content: "gue responden angket kemarin dapet biskuit, seneng banget" },
      { authorId: 155, minutesAgo: 2091, content: "yang jawab serius banget tuh biasanya paling dikit ya kak 😭" },
    ],
  },
  {
    id: 72,
    authorId: 16,
    minutesAgo: 2155,
    shares: 26,
    content:
      "closing hari ini: 19 perjanjian jalan dari 23 yang kuproses. angsuran terkecil 480 ribu, terbesar 4 juta 200. term terpanjang 36 bulan.\n\nada nasabah yang ketawa pas liat kolom sisa utangnya, panjangnya dua baris. kubilang pelan2 aja, bulan ke-36 itu terasa jauh tapi dateng terus. dia bilang, 'non, yang penting angkanya jelas dari awal.' itu. itu yang bikin kerjaan ini masuk akal.",
    comments: [
      { authorId: 276, minutesAgo: 2147, content: "36 bulan itu maraton non. semangat" },
      { authorId: 268, minutesAgo: 2139, content: "yang ketawa liat sisa utang biasanya yang paling komit non 😄" },
      { authorId: 47, minutesAgo: 2130, content: "angka yang jelas dari awal itu bentuk kejujuran non." },
    ],
  },
  {
    id: 73,
    authorId: 36,
    minutesAgo: 2185,
    shares: 17,
    content:
      "kuis patologi: SELESAI. gak pinter, tapi habis.\n270 halaman jadi 40 halaman rangkuman, rangkuman jadi 6 lembar semalam.\notak manusia itu mesin kompresi yang gak minta izin 🙃\nsementara ini dulu: tidur 8 jam, makan 3 kali, jadi manusia lagi",
    comments: [
      { authorId: 211, minutesAgo: 2177, content: "rangkuman gue kebalikannya, 40 jadi 80 wkwk" },
      { authorId: 216, minutesAgo: 2169, content: "tidurnya beneran 8 jam ya wkwk" },
      { authorId: 158, minutesAgo: 2160, content: "'gak pinter tapi habis' 🙃 kemenangan paling jujur" },
    ],
  },
  {
    id: 74,
    authorId: 23,
    minutesAgo: 2215,
    shares: 2,
    content:
      "2.40. kulkas nyala-mati ke-4. gue catat jamnya.\nkumparan belakang belum dicek. steker belum dipindah. hipotesis: dua2nya.\nmalam ini gue cuma nyatet. besok eksperimen.",
    comments: [
      { authorId: 4, minutesAgo: 2207, content: "Putuskan listrik dulu sebelum menyentuh kumparan. Sikat kering, bukan kain basah." },
      { authorId: 249, minutesAgo: 2199, content: "kulkas eksperimen, kita nunggu laporan om wkwk" },
    ],
  },
  {
    id: 75,
    authorId: 45,
    minutesAgo: 2245,
    shares: 7,
    content:
      "Buku catatan pepaya saya lanjutkan. Hari ini jeruk 1 kilo, 11 ribu, untuk vitamin.\n\nAnak-anak telepon sore tadi. Saya lapor: jeruk 11 ribu, semuanya sehat. Mereka ketawa, katanya laporan yang aneh. Tidak apa. Besok laporan lagi.",
    comments: [
      { authorId: 48, minutesAgo: 2237, content: "Laporan jeruk itu kebiasaan yang baik, Pak." },
      { authorId: 96, minutesAgo: 2228, content: "Anak yang ketawa dengar laporan itu tandanya dekat ya Pak 🙏" },
      { authorId: 274, minutesAgo: 2219, content: "Catatan yang berlanjut adalah hidup yang berlanjut. Salam sehat, Bapak." },
    ],
  },
]
