import type { ThreadzThread } from "../types"

// PART 3: cuitan 51-75 — ROMBAK V5 (6 Nov 2026): total ganti isi jadi FORUM
// MATEMATIKA (V3 lama masih diary harian). Slot teknis TIDAK berubah:
// id 51-75, authorId mengikuti rotasi audit (9,33,2,15,24,5,44,12,30,21,17,
// 39,1,28,46,6,38,11,20,50,7,16,36,23,45), minutesAgo = 25 + 30*(id-1),
// komentar menyebar 0-6, komentar minutesAgo lebih kecil dari post-nya.
// Aturan lengkap: scripts/rumus-v2.md BAGIAN 1G + FORMULA HITAM 19 POLA.
// Tema file ini: geometri & pengukuran — bentuk BARU, jangan nyontek threads-1/2.
export const THREADS_PART3: ThreadzThread[] = [
  {
    id: 51,
    authorId: 9,
    minutesAgo: 1525,
    shares: 14,
    content:
      "bang, apps bilang jarak order 8,4 km. pas gue jalan odometer motor gue 9,2 km. penumpang nanya kok beda 800 meter, apps-nya bohong. gue jawab gak tau juga. beda segini wajar gak bang? atau emang apps itungnya garis lurus doang padahal jalan belok-belok",
    comments: [
      { authorId: 199, minutesAgo: 1517, content: "wajar bang. apps itung jalur jalan, tapi odonya ikut belokan plus jalan pintas lu. beda ratusan meter itu normal" },
      { authorId: 154, minutesAgo: 1509, content: "yang dipakai tarif bang tetap yang di apps. odonya buat ganti ban doang wkwk" },
    ],
  },
  {
    id: 52,
    authorId: 33,
    minutesAgo: 1555,
    shares: 19,
    content:
      "Resep brownies tertulis untuk loyang 20 × 20 cm. Loyang saya 25 × 25 cm. Abang di toko bilang tinggal kali 1,5. Aku hitung sendiri: 20 × 20 = 400, 25 × 25 = 625, dan 625 ÷ 400 = 1,5625. Bukan 1,5. Abang bilang lama-lama sama saja, tapi tepung dan gula akan berbeda 25 gram-an kalau pakai 1,5625. Yang benar mana? Dan kalau garam, apakah ikut dikali persis atau cukup dirasakan dulu?",
    comments: [
      { authorId: 277, minutesAgo: 1547, content: "1,5625 yang benar bu. bahan kering ikut dikali penuh. garam dan gula bibir memang lebih aman dijadikan rasa, bukan angka" },
      { authorId: 90, minutesAgo: 1540, content: "abang toko itu ngambil patokan enak dijual bu wkwk. 625 ÷ 400 = 1,5625, hitungan ibu yang benar" },
      { authorId: 84, minutesAgo: 1533, content: "wkwk justru bu yang teliti. 625 ÷ 400 = 1,5625, kalkulator memang harus masuk dapur sekarang" },
    ],
  },
  {
    id: 53,
    authorId: 2,
    minutesAgo: 1585,
    shares: 29,
    content:
      "SOAL LUAS TANAH BENTUK L DAN GUE BENAR-BENAR MENTOK. tanahnya persegi panjang 10 × 8, potong persegi kecil 4 × 3 di sudut. gue hitung 80 − 12 = 68 m². TEMEN GUE YAKIN 92, KATANYA DITAMBAH SOALNYA BENTUKNYA BESAR. gue bilang potong berarti dikurang, dia bilang kok tahu potongnya, soal cuma gambar. GAMBAR POTONGAN ITU YA POTONG DONG.\nyaudah sekarang gue ragu sendiri. ada yang bisa baca maksud soal model begini tanpa nambah-kurang asal",
    comments: [
      { authorId: 227, minutesAgo: 1576, content: "68 bre. kalau di soal ada potongan digambar ganda terus, itu dikurang. 92 = 80 + 12 itu tanah nambah sendiri wkwk" },
      { authorId: 209, minutesAgo: 1568, content: "trik: warnai bidangnya. bagian yang diarsir doang yang dihitung. kalau gambar L-nya jelas, 80 − 12 langsung keliatan" },
      { authorId: 318, minutesAgo: 1560, content: "cek balik bre: 68 + 12 harus balik ke 80. itu tes paling gampang" },
      { authorId: 118, minutesAgo: 1552, content: "temen lu pasti kepikiran luas total dulu. jawabannya 68, gak usah ragu" },
    ],
  },
  {
    id: 54,
    authorId: 15,
    minutesAgo: 1615,
    shares: 11,
    content:
      "semangka gue 4,7 kg. pembeli minta dipotong seperempat. gue itung 4,7 dibagi 4 itu 1,175 kg. cuma timbangan gue analog, jarumnya gak sehalus itu, sisa dua angka di belakang koma. yang gue tanya: kalau gue potong kira-kira 1,2 kg terus kasih kembalian 50 gram dari mangkok sebelah, itu terhitung jujur gak? atau memang sebaiknya gue bilang ke pembeli, timbangan teh gak presisi, mau dijarahin sedikit lebih gede?",
    comments: [
      { authorId: 102, minutesAgo: 1607, content: "bilang aja teh apa adanya: 4,7 ÷ 4 itu 1,175, timbangan teh gak sampai digit ketiga. pembeli lebih takut potongan gak adil daripada 25 gram" },
      { authorId: 84, minutesAgo: 1599, content: "pake prinsip pasar teh: lebih kecil dari hitungan boleh, lebih besar kasih kelebihan dikit. jangan kebalik" },
      { authorId: 32, minutesAgo: 1591, content: "1,2 kg buat seperempat dari 4,7 itu udah hampir pas teh, cuma lebih 25 gram doang" },
    ],
  },
  {
    id: 55,
    authorId: 24,
    minutesAgo: 1645,
    shares: 13,
    content:
      "CUCU AKU PR KELILING PAGAR KEBUN 12 METER KALI 9 METER. DIA JAWAB 21. AKU BILANG KELILING ITU BERPUTAR, JADI 12 + 9 + 12 + 9 = 42. DIA BILANG NENEK KOQ RIBET, GURU CUMA TAMBAH. AKU PURA2 TAU TERUS TELEPON NENEK LAIN, KATANYA 42 JUGA. TAPI BAHAYA KALAU SALAH, NANTI CUCU NGELUH KAKAKNYA SALAHIN.\nPERTANYAAN: 42 BENAR KAN. DAN KENAPA 21 ITU MENGIKUTI BUKAN BERPUTAR. NENEK PUSING TAPI KOK SENENG BISA NGGAJAR BALIK WKWK",
    comments: [
      { authorId: 77, minutesAgo: 1637, content: "42 benar mbak. 21 itu cuma setengah jalan, belum balik ke titik awal" },
      { authorId: 187, minutesAgo: 1629, content: "cucu menyusun 12 + 9 doang mbak. minta dia jalanin pagar pakai pensil, sampai kembali ke titik mulai, baru dia paham kenapa dua kali" },
      { authorId: 63, minutesAgo: 1621, content: "NENEK HEBAT. itungan nenek benar semua, biarkan cucu ngecek sendiri pakai jalan kaki" },
    ],
  },
  {
    id: 56,
    authorId: 5,
    minutesAgo: 1675,
    shares: 38,
    content:
      "di warung ada roda guling bekas, kelilingnya 132 cm, dipakai ngukur jarak etalase. adik keponakan nanya diameter rodanya berapa. gue coba pakai 22/7: 132 × 7 ÷ 22 = 42 cm. terus dia nanya, kalau pakai 3,14 kok jadi 42,04, beda dikit. mana yang dianggap benar, dan keliling roda asli itu persis 3,14 kali diameter atau bukan? gue cuma jualan, gak pernah mikir beginian, sekarang malah penasaran",
    comments: [
      { authorId: 262, minutesAgo: 1667, content: "22/7 dan 3,14 sama-sama perkiraan pi. 22/7 = 3,1428..., sedikit lebih besar dari 3,14, makanya hasilnya beda tipis. dua-duanya boleh" },
      { authorId: 39, minutesAgo: 1659, content: "pi itu angka yang tidak berhenti: 3,1415926... jadi tidak ada satupun yang persis. untuk roda guling, 42 cm sudah sangat layak" },
      { authorId: 60, minutesAgo: 1651, content: "roda guling warung gak mungkin bulat sempurna kok, beda 0,04 itu hilang di kerusakan ban" },
    ],
  },
  {
    id: 57,
    authorId: 44,
    minutesAgo: 1705,
    shares: 24,
    content:
      "botol minyak 1 liter. gelas ukur gue 250 ml. gue tuang 3 gelas, keburu mikirin mie, gak ngitung sisa. terus gue itung deh: 4 gelas itu 1 liter, gue udah keluar 3, sisa 1 gelas. WADUH tapi pas gue ketok-ketok botolnya masih mayan banyak. ternyata minyak mampet di dinding botol, kayaknya gak 250 ml. jadi itungan gelas itu yang bener atau botolnya yang jujur? wkwk urusan goreng kepepet",
    comments: [
      { authorId: 127, minutesAgo: 1697, content: "itungan lu bener, 4 × 250 = 1000. sisa di dinding itu biasanya 10-20 ml doang, ketok-ketok keluar kok" },
      { authorId: 318, minutesAgo: 1689, content: "biar teliti, gelas terakhir isi 200 dan sisanya dipakai ngelemin loyang. botol minyak emang begituan" },
      { authorId: 152, minutesAgo: 1681, content: "mikirin mie sambil tuang minyak itu resiko wkwk. itungan lu aman, sisa mampet itu standar" },
    ],
  },
  {
    id: 58,
    authorId: 12,
    minutesAgo: 1735,
    shares: 4,
    content:
      "pasien tinggi 168 cm.\nkartu medis minta dalam meter.\ngue tulis 1,68 m.\npasien protes, katanya 1,70.\n168 cm itu 1,68 m kan. pembulatan bukan hak pasien.",
    comments: [
      { authorId: 258, minutesAgo: 1727, content: "1,68 benar. 1,70 itu pembulatan ke atas, bukan pengukuran. kartu medis memakai angka hasil ukur" },
      { authorId: 240, minutesAgo: 1719, content: "168 cm ÷ 100 = 1,68 m. gak ada jalan lain" },
    ],
  },
  {
    id: 59,
    authorId: 30,
    minutesAgo: 1765,
    shares: 16,
    content:
      "si anak menentang rumus luas segitiga. alas 8, tinggi 5. dia menghitung 8 × 5 = 40 dan menolak dibagi 2. katanya memotong setengah itu merugikan, jawabannya harus besar. saya sudah tunjukkan gambar segitiga di dalam persegi panjang, ia mengiyakan sebentar, lalu bertanya kembali: kok bisa luas segitiga pas setengahnya, kalau segitiganya miring? Saya butuh analogi lain selain gambar, sesuatu yang bisa ia pegang. Ada usulan dari yang pernah menghadapi anak tipe ini?",
    comments: [
      { authorId: 258, minutesAgo: 1756, content: "pakai kertas dan gunting. buat segitiga, gandakan dengan menyalinnya lalu ditempel berlawanan arah, jadilah persegi panjang. dua segitiga = satu persegi panjang, jadi satu segitiga setengahnya" },
      { authorId: 262, minutesAgo: 1748, content: "anak itu sebenarnya sudah berpikir benar untuk persegi panjang. ia hanya perlu melihat bahwa segitiga memang setengah bentuknya" },
      { authorId: 39, minutesAgo: 1740, content: "beri dia dua segitiga kongruen dan suruh menyusun sendiri. anak yang menemukan sendiri tidak akan pernah bertanya lagi" },
    ],
  },
  {
    id: 60,
    authorId: 21,
    minutesAgo: 1795,
    shares: 18,
    content:
      "tanya dong. gue beli kain di pasar, gue kira harga 18 ribu per meter, ambil 2,5 meter, rencana bayar 45 ribu. pas di kasir struknya 47.500. gue protes, kasir nunjuk rambu: kain premium 19.000. gue itung 2,5 × 19.000 = 47.500. PAS. jadi gue salah baca rambu, bukan kasir salah itung. nah sekarang gue ragu mau lanjut bayar atau tuker ke yang 18 ribu. 2.500 itu buat bayar kemewahan gak ya wkwk. ambil yang premium deh dah",
    comments: [
      { authorId: 102, minutesAgo: 1787, content: "hitungannya pas kak, 2,5 × 19.000 memang 47.500. premiumnya worth it kalau buat baju yang sering dipakai" },
      { authorId: 60, minutesAgo: 1779, content: "selisih 1 ribu per meter itu biasanya beda serat kak. coba tarik aja dua kainnya, langsung kerasa" },
    ],
  },
  {
    id: 61,
    authorId: 17,
    minutesAgo: 1825,
    shares: 20,
    content:
      "bro, tugas bikin gue ragu sama guru SMP dulu. tiang 6 m, tali diikat di puncak, ujung talinya dipaku ke tanah sejauh 8 m dari puncak sepanjang talinya. gue itung pakai Pythagoras: jarak paku ke kaki tiang = √(8² − 6²) = √(64 − 36) = √28 ≈ 5,29 m. temen gue bilang harusnya 2 m, katanya 8 − 6 = 2, gampang. GUE YANG GAK TAU DUA-DUANYA MANA. 5,29 itu gak bulat banget, jadi gue mikir gue yang salah. bantuin cek bro",
    comments: [
      { authorId: 213, minutesAgo: 1817, content: "5,29 bro. segitiga siku-siku, tali miring, jadi sisi miringnya 8. √28 ≈ 5,29. 8 − 6 = 2 itu bukan Pythagoras, itu curang" },
      { authorId: 336, minutesAgo: 1809, content: "gak bulat itu justru tanda tugasnya nyata bro. soal buatan biasanya 3-4-5 doang" },
      { authorId: 144, minutesAgo: 1801, content: "cek balik: 5,29² + 6² kira-kira 28 + 36 = 64, dan √64 = 8. cocok, aman" },
      { authorId: 186, minutesAgo: 1793, content: "5,29 m itu hampir 5 meter 29 cm. bayangin dari kaki tiang, paku di situ" },
    ],
  },
  {
    id: 62,
    authorId: 39,
    minutesAgo: 1855,
    shares: 33,
    content:
      "Ada pertanyaan warung dekat rumah yang menarik: kenapa tutup resapan air itu bundar semua, tidak ada yang persegi. Kurang lebih jawabannya begini: persegi sisi 60 cm punya diagonal 60√2, kira-kira 84,8 cm. Diagonal itu lebih panjang daripada sisi, jadi tutup persegi bisa jatuh ke lubangnya sendiri kalau ditegakkan menyilang. Tutup bundar dengan diameter sama besar dari segala arah, mustahil lolos. Kurang lebih begitu. Yang saya tanyakan: adakah bentuk lain selain lingkaran yang juga tidak bisa jatuh ke lubang serupanya? Saya menduga ada, tetapi belum menemukan contohnya",
    comments: [
      { authorId: 318, minutesAgo: 1847, content: "segitiga sama sisi juga aman pak, tingginya lebih besar dari sisinya. tapi sulit ditanggung karena ada ujung lancip" },
      { authorId: 262, minutesAgo: 1839, content: "bentuk seperti itu namanya constant width pak. lingkaran contoh termudahnya, ada juga Reuleaux triangle" },
      { authorId: 258, minutesAgo: 1831, content: "Reuleaux itu sebutannya pak. kurang lebih dibahas di buku geometri lama, jarang keluar di warung wkwk" },
      { authorId: 192, minutesAgo: 1824, content: "tambah satu alasan praktis pak: tutup bundar tidak perlu diputar agar pas lubang, pekerja lebih cepat" },
    ],
  },
  {
    id: 63,
    authorId: 1,
    minutesAgo: 1885,
    shares: 15,
    content:
      "anak nanya papanya salah jawab, sekarang gue yang disalahin. meja makan 120 cm × 60 cm. taplak kain 1 m × 1 m. papanya bilang muat soalnya kain 1 m lebih besar dari 1 m meja. gue bilang tunggu, 1 m itu satu arah, meja 1,2 m arah panjangnya. taplak bakal bolong 20 cm di sisi panjang. gue hitung luas: meja 1,2 × 0,6 = 0,72 m², kain 1 m². luasnya cukup TAPI bentuknya gak cocok. kok ke anak susah ya jelasin luas cukup tapi bentuk gak cukup?",
    comments: [
      { authorId: 268, minutesAgo: 1877, content: "pakai kertas: sobek kertas 1 × 1 meter di lantai, taruh box 1,2 × 0,6 di atasnya. sudut-sudut meja nongol, kelihatan sendiri" },
      { authorId: 74, minutesAgo: 1869, content: "karena luas dan bentuk itu dua hal kak. luas cukup itu soal banyaknya kain, bentuk soal posisinya. anak pahamnya pas lihat sudut nongol" },
      { authorId: 59, minutesAgo: 1861, content: "jawaban papanya benar untuk luas, salah untuk bentuk. dua-duanya kena ya, jangan dibohongin anak wkwk" },
    ],
  },
  {
    id: 64,
    authorId: 28,
    minutesAgo: 1915,
    shares: 27,
    content:
      "KUIS KELAS DIBALIKIN DAN ADA SATU JAWABAN YANG BIKIN SEKELAS HILARIA WKWKWK. soal volume kubus rusuk 5. temen gue jawab 15. gue tanya dari mana, dia bilang 5 + 5 + 5. kata dia volume itu kayak nambah rusuknya tiga kali. gue bilang itu keliling segitiga kali. semua ketawa, dia panik, terus nanya balik: KOK TAU SIH HARUSNYA DIKALI. gue jelasin pakai kotak kardus 5 × 5 × 5 kotak-kotak kecil. dia ngerti, tapi gue jadi mikir: kenapa ya banyak orang otomatis nambah dulu sebelum mikir kali",
    comments: [
      { authorId: 131, minutesAgo: 1907, content: "karena nambah itu refleks pertama semua makhluk hidup wkwk. volume itu isi ruang, jadi 5 × 5 × 5 = 125" },
      { authorId: 223, minutesAgo: 1899, content: "trik ngebedain: tambah itu panjang, kali itu mengisi. satu dimensi, dua dimensi, tiga dimensi" },
      { authorId: 143, minutesAgo: 1891, content: "temen lu jujur sih, lebih baik nanya kok tahu daripada jawab 125 asal tebak. banyak yang kayak gitu" },
    ],
  },
  {
    id: 65,
    authorId: 46,
    minutesAgo: 1945,
    shares: 10,
    content:
      "Anggaran keramik aula rapat: lantai 12 m × 8 m = 96 m². Keramik 40 × 40 cm, luas per keping 0,16 m², jadi 96 ÷ 0,16 = 600 keping. Satu dus isi 5 keping, jadi 120 dus. Vendor menyarankan cadangan 5 persen: 600 × 1,05 = 630 keping, jadi 126 dus. Bos menanyakan kenapa tidak langsung 125 dus agar angkanya rapi. Karena 630 keping tidak bisa dibagi 5 menjadi 125 dus — 630 ÷ 5 = 126. Mengingatkan rapat besok akan membahas harga 126 dus versus 125 dus, dan saya hanya ingin tenang 😅",
    comments: [
      { authorId: 268, minutesAgo: 1937, content: "126 dus sudah benar kak. 630 ÷ 5 = 126, angka vendor yang bener. rapatnya bisa dipercepat dengan tabel kecil ini" },
      { authorId: 227, minutesAgo: 1929, content: "bos suka angka rapi kak wkwk. bilang aja 125 dus = 625 keping, kurang 5 keping dari cadangan, sisa keramik gak bisa dikomplain vendor" },
      { authorId: 322, minutesAgo: 1921, content: "96 ÷ 0,16 = 600 kak, itu yang bikin rapat panjang biasanya. sekarang udah fix, tenang aja" },
    ],
  },
  {
    id: 66,
    authorId: 6,
    minutesAgo: 1975,
    shares: 3,
    content:
      "gue yakin 1 m² itu 100 cm². soalnya 1 m itu 100 cm, kan tinggal ganti satuannya. terus semua orang di grup kelas bilang 10.000. gue gak nerima. kalau 1 m itu 100 cm, 1 m² ya 100 cm². tolong ada yang jelasin pelan-pelan, jangan ketawa dulu, gue serius nanya",
    comments: [
      { authorId: 219, minutesAgo: 1967, content: "cobain deh: gambar kotak 1 meter kira-kira satu langkah besar, lalu isi pake kotak kecil 1 cm. sisi atasnya muat 100 kotak kecil, sisi bawahnya juga 100. 100 × 100 = 10.000" },
      { authorId: 138, minutesAgo: 1959, content: "1 m = 100 cm itu panjang. luas itu panjang kali lebar, dua arah. jadi 100 × 100, bukan 100 sekali" },
      { authorId: 118, minutesAgo: 1951, content: "kelipatannya naik 100 tiap tambah dimensi bre. 1 m³ = 100 × 100 × 100 = 1.000.000 cm³, makin gila" },
    ],
  },
  {
    id: 67,
    authorId: 38,
    minutesAgo: 2005,
    shares: 22,
    content:
      "bunda, PR soal jarum jam. jam 3 lewat 30 menit, jarum kecil di antara angka 3 sama 4, jarum besar di angka 6. aku itung: jarum besar ada di 180 derajat, jarum kecil di 105 derajat, selisihnya 75 derajat. temen sebangku bilang 90 soalnya dari 3 ke 6 kok tiga loncatan, tiga kali tiga puluh. aku gak yakin mau coret itunganku sendiri. jam 3.30 jarum kecil kok gak diam di 3, dia jalan dikit ya bunda? tolong dibales sebelum libur bel, aku hafal rumusnya lupa alasannya",
    comments: [
      { authorId: 63, minutesAgo: 1997, content: "75 derajat dik. jarum kecil ikut bergerak: dalam 30 menit dia jalan setengah kotak, dari 90 derajat ke 105 derajat. temenmu lupa jarum kecil juga hidup" },
      { authorId: 187, minutesAgo: 1989, content: "kuncinya: jarum besar 6 derajat per menit, jarum kecil 0,5 derajat per menit. kalau dua-duanya dihitung, 3.30 selalu 75 derajat" },
      { authorId: 268, minutesAgo: 1981, content: "PR itu menarik dik, banyak orang dewasa juga menjawab 90 karena lupa jarum kecil berjalan. jawabanmu bagus" },
    ],
  },
  {
    id: 68,
    authorId: 11,
    minutesAgo: 2035,
    shares: 24,
    content:
      "Aku sedang memverifikasi denah kantor dari konsultan. Skala 1:200. Ruang arsip di denah 6 cm × 4,5 cm. Hitunganku: 6 × 200 = 1.200 cm = 12 m, dan 4,5 × 200 = 900 cm = 9 m, jadi luasnya 108 m². Rekan di bagian umum menghitung dengan cara lain: luas di denah dulu, 6 × 4,5 = 27 cm², lalu dikali 200, hasilnya 5.400, dan ia menulis 5.400 m². Aku menegur bahwa skala dikali dua kali untuk luas, jadi 27 × 200 × 200 = 1.080.000 cm² = 108 m². Kami sama-sama gak mau mundur. Mana penjelasan yang paling rapi untuk dikirim ke grup?",
    comments: [
      { authorId: 262, minutesAgo: 2027, content: "hitungan ibu benar. satuan panjang dikali skala sekali, satuan luas dua kali, karena luas itu panjang × lebar" },
      { authorId: 283, minutesAgo: 2019, content: "cara paling rapi untuk grup: tulis 12 m × 9 m = 108 m², langsung. 5.400 m² itu lebih besar dari gedung" },
      { authorId: 205, minutesAgo: 2011, content: "108 m² untuk ruang arsip itu besar sekali, tapi itu urusan kantor ya, hitungannya sudah benar" },
    ],
  },
  {
    id: 69,
    authorId: 20,
    minutesAgo: 2065,
    shares: 12,
    content:
      "Penumpang sore tadi menanyakan hal kecil di jalan: layar bilang perjalanan 12 menit untuk 5,2 km. Ia menghitung dalam kepalanya dan menyimpulkan kecepatan mobil 12 km per jam, seolah menit dan kilometer bertukar tempat. Saya jelaskan pelan bahwa 5,2 km dalam 12 menit berarti per menit kita menempuh 5,2 dibagi 12, sekitar 0,43 km, dan dalam satu jam 26 km. Ia mengangguk sambil tetap memandang layar. Yang membuat saya menulis ini: kebingungan seperti itu ternyata tidak pilih-pilih umur. Adakah cara menjelaskan yang lebih bertahap daripada membawanya ke angka per menit?",
    comments: [
      { authorId: 258, minutesAgo: 2057, content: "cara jalan kaki paling mudah dipahami: 1 km butuh 15 menit. 5,2 km berarti sekitar 78 menit kalau jalan kaki, tapi kita sampai 12 menit, jadi kita jauh lebih cepat" },
      { authorId: 268, minutesAgo: 2049, content: "26 km per jam memang kecepatan wajar dalam lalu lintas kota. angkanya tidak bohong" },
      { authorId: 336, minutesAgo: 2041, content: "penumpang itu menukar posisi angka: 12 menit dibaca 12 km per jam. sering sekali terjadi, tidak pilih umur seperti kata om" },
    ],
  },
  {
    id: 70,
    authorId: 50,
    minutesAgo: 2095,
    shares: 26,
    content:
      "GUYS, LAPORAN DARI DAPUR LAGI. panci lama diameter 24 cm, panci baru 30 cm. gue kira bedanya cuma 6 cm, nyaris kembar. GUE SALAH BESAR. luas dasar panci lama: 3,14 × 12 × 12 = 452,16 cm². panci baru: 3,14 × 15 × 15 = 706,5 cm². BEDANYA 254 cm², kayak nambah satu panci kecil lagi. makanya resep kuah yang biasanya pas sekarang keasinan, karena dasar panasnya beda. GUYS, pertanyaan gue: kenapa diameter naik 6 cm doang luasnya bisa naik separuh lagi? gue ngerasa dapur ini menipu gue",
    comments: [
      { authorId: 44, minutesAgo: 2087, content: "karena luas itu pangkat dua guys. 15 ÷ 12 = 1,25, terus 1,25 × 1,25 = 1,5625. panci lu gede 56 persen, bukan 25 persen" },
      { authorId: 152, minutesAgo: 2079, content: "dapur gak menipu, matematika yang jujur wkwk. radius yang naik, luasnya naik dobel efeknya" },
      { authorId: 336, minutesAgo: 2071, content: "tips guys: pindah panci besar, turunin api setengah tingkat. dasar lebih luas, panas lebih menyebar" },
    ],
  },
  {
    id: 71,
    authorId: 7,
    minutesAgo: 2125,
    shares: 32,
    content:
      "sketsa lokasi penelitian pakai peta skala 1:5.000. jarak dua titik di peta 7,2 cm. gue hitung: 7,2 × 5.000 = 36.000 cm = 360 m. pembimbing nanya, kok 360, bukan 36. gue balik ngecek: 36.000 cm dibagi 100 = 360 m. TERUS GUE RAGU APAGITUKNYA. 1:5.000 artinya 1 cm di peta = 5.000 cm dunia bener kan, bukan 5.000 m? 🙃 soalnya kalau 5.000 m, jaraknya jadi 36 km, nggak masuk akal buat kelurahan",
    comments: [
      { authorId: 212, minutesAgo: 2117, content: "5.000 cm itu benar kak, jadi 360 m. kalau skalanya 1 cm = 5.000 m, biasanya ditulis 1:500.000. peta kelurahan memang kiloan" },
      { authorId: 209, minutesAgo: 2109, content: "trik cek kak: 5.000 cm = 50 m. jadi tiap 1 cm di peta = 50 m. 7,2 × 50 = 360 m. cocok" },
      { authorId: 143, minutesAgo: 2101, content: "pembimbing cuma ngecek gak asal nemplok kak, jawaban lu udah rapi. 360 m, selesai 🙃" },
    ],
  },
  {
    id: 72,
    authorId: 16,
    minutesAgo: 2155,
    shares: 9,
    content:
      "Aku mengatur ulang rak arsip: rak 2 m × 0,8 m. Box arsip 40 cm × 30 cm. Hitunganku: sepanjang 200 cm muat 5 box (5 × 40 = 200), sedangkan ke arah 80 cm muat 2 box (2 × 30 = 60, sisa 20 cm terbuang). Total 10 box per rak, sisa 20 cm sepanjang rak. Atasan bertanya kenapa sisa 20 cm tidak diisi box ketiga. Karena 3 × 30 = 90, lebih besar dari 80, box ketiga akan menonjol keluar. Aku sudah menjelaskan dua kali. Pertanyaanku: apakah ada istilah sederhana untuk sisa ruang yang tidak cukup begini, supaya penjelasan ke atasan terasa lebih ilmiah daripada gak cukup tempat saja?",
    comments: [
      { authorId: 262, minutesAgo: 2147, content: "istilah kerjanya cukup: sisa ruang tidak mencukupi satu unit. secara matematika 80 ÷ 30 = 2 sisa 20, dan sisa tidak boleh dibulatkan naik untuk benda fisik" },
      { authorId: 283, minutesAgo: 2139, content: "box miring 45 derajat? tetap tidak muat kak, panjang diagonalnya 50 cm, tetap lebih besar dari 20" },
      { authorId: 240, minutesAgo: 2131, content: "kasih atasan gambar box ketiga yang nongol 10 cm, selesai diskusi. gambar lebih laku dari istilah" },
    ],
  },
  {
    id: 73,
    authorId: 36,
    minutesAgo: 2185,
    shares: 11,
    content:
      "lingkar kepala bayi pasien: minggu lalu 34 cm, hari ini hasil benang + penggaris 34 cm juga, tapi noda kertas ukur menunjukkan kemarin 34,5. selisih 0,5 cm banget, dan gue panik udah mikir hidrosefalus. spv bilang tenang, benang ngelewatin telinga beda 2 mm itu udah beda hasil, plus tegangan benang ngaruh. gue mau nanya ke yang sering jaga posyandu: toleransi ukur lingkar kepala manual itu berapa sih, dan kapan beda 0,5 cm layak digarisbawahi? gue gak mau terlambat, tapi juga gak mau bikin ibu pasien panik sendirian banget",
    comments: [
      { authorId: 240, minutesAgo: 2177, content: "benang itu toleransinya 0,3 sampai 0,5 cm wajar. yang digarisbawahi itu tren naik terus antar kunjungan, bukan satu selisih kecil" },
      { authorId: 205, minutesAgo: 2169, content: "catat dua ukuran dengan alat yang sama di kunjungan berikutnya. tren lebih berbicara daripada angka tunggal" },
      { authorId: 268, minutesAgo: 2161, content: "kehati-hatian kamu bagus, tapi 0,5 cm antar alat manual itu dalam batas wajar. tidur yang cukup juga ya" },
    ],
  },
  {
    id: 74,
    authorId: 23,
    minutesAgo: 2215,
    shares: 2,
    content:
      "layar 24 inci, diagonal. spek tulis 20,9 × 11,8. cek: 20,9² = 436,81. 11,8² = 139,24. jumlah 576,05. 24² = 576. lolos, selisih 0,05 itu urusan pembulatan pabrik. jam 02.40, produkivitas tinggi",
    comments: [
      { authorId: 213, minutesAgo: 2207, content: "pythagoras juga dipakai pabrik monitor ya. cek lu rapi" },
      { authorId: 223, minutesAgo: 2199, content: "0,05 di 576 itu 0,01 persen doang. aman" },
    ],
  },
  {
    id: 75,
    authorId: 45,
    minutesAgo: 2245,
    shares: 19,
    content:
      "Tanah warisan orang tua saya berukuran 25 m × 16 m, jadi 400 m². Empat anak sepakat membagi sama besar, artinya 100 m² per orang. Persoalannya bukan angka, melainkan bentuk: lahirnya panjang melintang, sehingga 100 m² bisa jadi pita 25 m × 4 m atau 10 m × 10 m. Sepupu menawarkan cara menumbangkan pita-tita itu berpatokan sumbu yang lurus. Saya bertanya di sini karena ingin keputusan keluarga yang tenang: pembagian rata luas dan pembagian rata bentuk, mana yang biasa dipakai notaris, dan apakah keduanya boleh berbeda?",
    comments: [
      { authorId: 283, minutesAgo: 2237, content: "biasanya yang dipakai luas sama besar pak, bentuknya mengikuti patok. notaris mencantumkan luas, bukan bentuk" },
      { authorId: 258, minutesAgo: 2229, content: "jika bisa, ambil bentuk yang sama juga (10 × 10) supaya harga per meter terasa adil. tapi itu keputusan keluarga, bukan kewajiban" },
      { authorId: 192, minutesAgo: 2221, content: "pita 25 × 4 itu menyulitkan bangun pak. kalau bisa, tegak lurus lebih kecil, pemakaian lebih nyaman" },
    ],
  },
]
