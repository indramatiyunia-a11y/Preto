import type { ThreadzThread } from "../types"

// PART 7: cuitan 151-175. Post keempat penulis 1-25. Batch 3 menuju 1000
// (protokol: dev.sh, riset: scripts/sidik-jari.md).
//
// Aturan user aktif batch ini:
//  - NARASI CONDONG PELAJAR: semua cuitan bawa keluh kesah / aktivitas pelajar
//    (PR, ulangan, remedial, saku, magang, PKL, bazar kelas) dari sudut siapa
//    pun penulisnya. Aspek matematika tetap inti.
//  - REALITAS KERAS: angka kecil, detail kusam, ending gak sempurna.
//  - SATU KARAKTER SATU MODEL: model bentuk keempat tiap penulis beda dari
//    tiga post sebelumnya (tercatat di buku besar sidik-jari.md).
//
// Topik batch ini (semua baru): aljabar 3x = 15 (x itu kotak), split bill
// 155 ribu, remedial & pertanyaan nol genap, jam hadir vs jam efektif,
// pembulatan 500-an di warung, bagi bersusun 848:4, modus frekuensi seri,
// sudut jarum jam ketemu lagi, miliar = seribu juta, luas maksimum pagar
// (persegi), balik modal kupon member toko buku, aturan saku 10-3-2, venn
// ekskul (bola doang), umur kucing kali 7, luas lingkaran tampah tumpeng,
// skala denah 1 cm = 2 km, akar kuadrat 4 m2 bukan sisi 4, FPB tas bazar
// 24 & 36, gacha pity 60 dari 80, kupon undian bon seragam, estimasi
// antre bank 3 menit per nomor, soal umur (4x dan 3x), siklus timer 25+5,
// bilangan negatif dijelasin pakai kulkas, hitungan jam PKL 400.
export const THREADS_PART7: ThreadzThread[] = [
  {
    id: 151,
    authorId: 1,
    minutesAgo: 4525,
    shares: 12,
    content:
      "Jam 8 malam kedengaran cicikan pensil dari kamar depan. Anak yang pertama ngerjain 3x = 15. Dia manggil aku, tanya kok ada hurufnya. Kujelasin: x itu kotak yang isinya ditutup dulu. 3 kotak pas 15, berarti satu kotak 5. Dia diem lama, terus tanya kok kotaknya gak digambar.\n\nPapanya lewat, nanya itu bahasa apa. Kubilang matematika. Dia angguk aja, gak jelas paham atau gak.\n\nKubilang sama anaknya besok lanjut 4x = 20. Dari kamar dia bales, nanti dulu, malam ini x udah cukup.",
    comments: [
      { authorId: 74, minutesAgo: 4517, content: "jelasin x itu kotak yang ditutup itu keren kak, anaknya gampang nangkep 😄" },
      { authorId: 88, minutesAgo: 4509, content: "anakku juga pernah nanya huruf di matematika itu buat apa kak" },
      { authorId: 130, minutesAgo: 4501, content: "malam ini x udah cukup WKWKWK relate banget kak" },
      { authorId: 62, minutesAgo: 4493, content: "semangat anak kak, pelan2 nanti lancar juga 🙏" },
      { authorId: 204, minutesAgo: 4485, content: "bapak angguk doang padahal gak paham itu bapak-bapak universal om" },
      { authorId: 262, minutesAgo: 4477, content: "Anak yang bertanya artinya dia mengikuti pelajarannya dengan serius." },
    ],
  },
  {
    id: 152,
    authorId: 2,
    minutesAgo: 4555,
    shares: 20,
    content:
      "MAKAN BARENG TEMEN KOS, EMPAT ORANG\ntotal 158 ribu. guitung: 158 dibagi 4 jadi 39,5 ribu per kepala. masalahnya satu orang gak jajan es teh, dia minta potong 3 ribu. jadi 155 dibagi 4. 38,75. kasir bingung. kita bingung. hasil akhirnya: yang gak minum bayar 35,75, kita bertiga 39,75. semua angkanya aneh tapi uangnya pas\nguerahin receh 750 di saku celana. itulah puncak matematika anak kos akhir bulan",
    comments: [
      { authorId: 145, minutesAgo: 4547, content: "38,75 ribu itu angka paling jujur di dunia bre wkwk" },
      { authorId: 158, minutesAgo: 4539, content: "yang gak minum es teh harusnya bayar tambahan buat damai bre wkwk" },
      { authorId: 168, minutesAgo: 4531, content: "receh 750 muncul di momen paling krusial 😭" },
      { authorId: 295, minutesAgo: 4523, content: "Angka 38,75 itu bukan salah kalian. Itu salahnya bilangan 155." },
      { authorId: 241, minutesAgo: 4515, content: "belanja rame yang itung selalu satu orang yang sama, di kantor kami juga gitu" },
      { authorId: 119, minutesAgo: 4507, content: "39,75 x 3 plus 35,75, pas 155. kos ini rapi bre" },
    ],
  },
  {
    id: 153,
    authorId: 3,
    minutesAgo: 4585,
    shares: 15,
    content:
      "Remedial hari ini saya adakan untuk delapan Ananda. Yang datang lima. Tiga yang tidak datang ada latihan lomba, itu pun saya izinkan.\n\nKami hanya mengerjakan enam soal. Di tengah soal ketiga ada Ananda berhenti dan bertanya, Bu, nol itu genap atau ganjil. Saya katakan genap, karena bisa dibagi dua tanpa sisa. Dia bertanya lagi, kenapa di soal tidak pernah muncul. Itu pertanyaan yang saya juga belum pernah siapkan jawabannya.\n\nNilai kelima Ananda saya koreksi malam ini. Dua naik dari empat ke tujuh. Sisanya besok kita coba lagi.",
    comments: [
      { authorId: 79, minutesAgo: 4577, content: "anak saya bilang remedial itu nama tempat kak 😭" },
      { authorId: 102, minutesAgo: 4569, content: "nol itu genap, udah gugat ke semua forum kak wkwk" },
      { authorId: 183, minutesAgo: 4561, content: "murid yang nanya nol genap itu pertanda dia mikir bu" },
      { authorId: 216, minutesAgo: 4553, content: "0 dibagi 2 tanpa sisa, pertanyaan Ananda itu valid 🙃" },
      { authorId: 39, minutesAgo: 4545, content: "Nol itu genap, kurang lebih jawaban paling aman bu" },
      { authorId: 281, minutesAgo: 4537, content: "Dua anak naik dari empat ke tujuh itu kemajuan. Selamat bu." },
    ],
  },
  {
    id: 154,
    authorId: 4,
    minutesAgo: 4615,
    shares: 9,
    content:
      "Anak saya menghitung hari sekolahnya di meja makan, jam 19.40. Hadir delapan jam. Menurut hitungannya, jam efektif di kelas empat jam, sisanya upacara, antre kantin, dan menunggu guru masuk. Ia bertanya pendapat saya. Saya bilang di kantor juga demikian, hanya angkanya lebih kecil. Ia tampak lega.",
    comments: [
      { authorId: 196, minutesAgo: 4607, content: "efektif empat jam itu sama persis dengan kantor om, anaknya jujur" },
      { authorId: 178, minutesAgo: 4599, content: "anak yang ngitung jam sekolah sendiri itu calon akuntan om" },
      { authorId: 276, minutesAgo: 4591, content: "Menunggu guru juga bagian dari sekolah, katanya. Mungkin benar." },
      { authorId: 228, minutesAgo: 4583, content: "hadir 8 efektif 4, rasionya 0,5, konsisten dengan kehidupan 🙃" },
      { authorId: 232, minutesAgo: 4575, content: "kalau kerja dihitung sejeli itu, banyak yang gak mau liat hasilnya om" },
      { authorId: 46, minutesAgo: 4567, content: "Di rapat juga sama om: hadir 60 menit, efektifnya 15 😅" },
    ],
  },
  {
    id: 155,
    authorId: 5,
    minutesAgo: 4645,
    shares: 18,
    content:
      "jam istirahat pelajar SMK dateng rame, beli roti 2.500 sama teh 3.000. dua-duanya gak uang pas: yang bayar roti cuma bawa 2 ribu, yang beli teh nyodorin 3.500. di buku kas aturannya gini: kekurangan 500 boleh ditunggu sore, kelebihan 500 dibulatin jadi titipan. namanya titipan, sebagian diambil, sebagian lupa.\n\ntadi sore ada murid balik khusus ambil 500-nya. dia inget dari pagi. aku catet deh nama-nama yang serius sebesar ini.",
    comments: [
      { authorId: 121, minutesAgo: 4637, content: "murid yang balik ambil 500 itu orang baik bumi bre" },
      { authorId: 133, minutesAgo: 4629, content: "buku titipan 500 itu arsip rahasia warung bre wkwk" },
      { authorId: 92, minutesAgo: 4621, content: "semoga anak yang jujur 500 itu rezekinya lancar kak 🙏" },
      { authorId: 201, minutesAgo: 4613, content: "warung yang nyatet titipan itu langka om, biasanya hilang di angin" },
      { authorId: 47, minutesAgo: 4605, content: "Receh 500 memang yang paling sering bikin urusan panjang. Sabar ya kak." },
    ],
  },
  {
    id: 156,
    authorId: 6,
    minutesAgo: 4675,
    shares: 24,
    content:
      "sepupu gue nanya cara bagi bersusun 848 dibagi 4. gue itung di kertas. 8 dibagi 4 jadi 2. taruh 2. turun 4. 4 dibagi 4 jadi 1. taruh 1. turun 8. 8 dibagi 4 jadi 2. hasil 212. gue yakin. sepupu ngecek di hp. hasilnya 212 juga. gue lega sampe sadar gue itung dua angka terakhirnya di kepala doang gak nulis. abes itu gue mikir gimana kalau angkanya gak rapi kayak 850 dibagi 4. gue nyerah. yang 850 itu urusan dosen. hari ini gue rasa kayak dosen yang gak nulis sertifikat",
    comments: [
      { authorId: 144, minutesAgo: 4667, content: "gue kira 212 bakal salah, ternyata bener bre wkwk" },
      { authorId: 161, minutesAgo: 4659, content: "850 dibagi 4 itu 212,5 bre. sekarang gue ikut mikir 😭" },
      { authorId: 24, minutesAgo: 4651, content: "ngajarin sambil ngecek di hp itu metode zaman sekarang om wkwk" },
      { authorId: 312, minutesAgo: 4643, content: "kertas sama hp saling menguatkan. metode modern." },
      { authorId: 199, minutesAgo: 4635, content: "dosen itu gak usah om, cukup pede wkwk" },
    ],
  },
  {
    id: 157,
    authorId: 7,
    minutesAgo: 4705,
    shares: 14,
    content:
      "Kuis pertama statistik isinya modus doang. Sepuluh angka, satu angka muncul tiga kali, jadi modusnya dia. Gak ada rumus, gak ada akar, tinggal ngitung siapa yang paling sering muncul. Aku baca dua kali karena gak percaya semudah ini.\n\nGuys, soal kedua yang bikin. Dua angka frekuensinya seri, dua-duanya muncul dua kali. Aku tulis satu, yang angkanya paling gede. Katanya harus dua-duanya, itu namanya lebih dari satu modus. 🙃\n\nFix besok hafalin satu kalimat doang: frekuensi dulu, baru bandingin.",
    comments: [
      { authorId: 214, minutesAgo: 4697, content: "modus ganda itu jawaban paling nyebelin di statistik 🙃" },
      { authorId: 222, minutesAgo: 4689, content: "frekuensi dulu baru bandingin, itu layak diframe 🙃" },
      { authorId: 136, minutesAgo: 4681, content: "kuis isinya modus doang itu kayak dapet hadiah kak wkwk" },
      { authorId: 307, minutesAgo: 4673, content: "Justru soal yang keliatan gampang yang bikin lupa aturan." },
      { authorId: 11, minutesAgo: 4665, content: "Modus memang soal frekuensi, bukan angkanya yang besar. Seri dua-duanya pun wajar." },
    ],
  },
  {
    id: 158,
    authorId: 8,
    minutesAgo: 4735,
    shares: 8,
    content:
      "shift pagi. pasien 212 nanya jam 2.35.\npertanyaannya bukan kapan minum obat. dia nanya, jarum panjang sama jarum pendek kapan ketemu lagi.\ngue jawab kira-kira jam 3.16. dia bilang kok bisa. gue jelasin jarum pendek jalan terus, gak nunggu di angka 2.\ndia nyatet di buku kecilnya. katanya mau kasih tau cucunya yang masih kelas 6, biar gak kalah sama jam dinding.\ngue baru nyadar gue jawab pake yakin padahal gak tau persis",
    comments: [
      { authorId: 224, minutesAgo: 4727, content: "3.16 itu bener, jarum ketemu tiap 65 menit 27 detik 🙃" },
      { authorId: 172, minutesAgo: 4719, content: "pasien yang nanya jarum ketemu itu orang sabar om" },
      { authorId: 234, minutesAgo: 4711, content: "jam 3.16 itu teliti banget, atasan gue aja gak segitunya" },
      { authorId: 90, minutesAgo: 4703, content: "cucunya kelas 6 pasti seneng dapet materi baru 😄" },
      { authorId: 268, minutesAgo: 4695, content: "Ngitung jarum jam buat cucu itu kelembutan yang menular." },
    ],
  },
  {
    id: 159,
    authorId: 9,
    minutesAgo: 4765,
    shares: 17,
    content:
      "penumpang bocah SMP, jarak 2 km.\ndi jalan dia nanya, bang, miliar itu berapa juta.\ngue jawab seribu juta. dia diem. terus dia bilang kalau dapet miliar mau itung habis dihabisin berapa hari.\ngue itung bareng: 1 miliar dibagi 50 ribu sehari = 20 ribu hari. dia bilang mending gak usah.\nsampe depan sekolah dia bayar pas, bilang terima kasih bang.\nlu dapet penumpang gitu, lu gak bosen diajarin bocah SMP",
    comments: [
      { authorId: 149, minutesAgo: 4757, content: "20 ribu hari itu 54 tahun bre wkwk" },
      { authorId: 129, minutesAgo: 4749, content: "bocah yang mimpi miliar terus langsung itung itu bakal aman bre" },
      { authorId: 187, minutesAgo: 4741, content: "seribu juta itu jawaban akurat om" },
      { authorId: 259, minutesAgo: 4733, content: "Mimpi yang langsung dihitung itu mimpi yang sehat." },
      { authorId: 249, minutesAgo: 4725, content: "penumpang yang bawa pertanyaan angka gede itu bikin jalan ringan" },
    ],
  },
  {
    id: 160,
    authorId: 10,
    minutesAgo: 4795,
    shares: 27,
    content:
      "PR MTK SOAL PAGAR 20 METER BUAT MUTER TANAH, LUAS MAKSIMAL BERAPA. GUE KIRA MAKIN PANJANG MAKIN LUAS, TERNYATA GAK. DICEK TEMEN BANGKU, COBA BIKIN PERSEGI. 20 DIBAGI 4 JADI 5, LUAS 5 KALI 5 = 25. TERNYATA YANG CUMAN 6 KALI 4 DAPET 24, YANG 7 KALI 3 DAPET 21, MAKIN JAUH DARI PERSEGI MAKIN KECIL WKWKWK.\nYANG GUE PELAJARIN MALAM INI: DARI SEMUA BENTUK YANG KELILINGNYA 20, PERSEGI ITU JUARA LUASNYA.\nBESOK DIAJARIN CARA SINGKATNYA KATA BU. DOAIN GUE GAK GAMBAR BENTUK LAGI WKWK",
    comments: [
      { authorId: 142, minutesAgo: 4787, content: "persegi emang juara bre, gue pernah nyoba segitiga kalah wkwk" },
      { authorId: 166, minutesAgo: 4779, content: "gambar ampe ngecek 3 bentuk itu usaha bre, doa diterima 😭" },
      { authorId: 198, minutesAgo: 4771, content: "PR yang bikin anak nyoba bentuk banyak itu PR bagus om" },
      { authorId: 218, minutesAgo: 4763, content: "kalau pagernya 40 m, luas maksnya 100. tetep persegi 🙃" },
      { authorId: 28, minutesAgo: 4755, content: "6 KALI 4 ITU 24, CUMA KALAH SATU. PERSEGI ITU SUNGGUH JUARA WKWK" },
    ],
  },
  {
    id: 161,
    authorId: 11,
    minutesAgo: 4825,
    shares: 13,
    content:
      "Anak minta dibelikan kalkulator ilmiah. Harganya 185 ribu, kupon member toko bukunya 50 ribu setahun, diskon member 20 persen. Kubuka catatan: 20 persen dari 185 ribu adalah 37 ribu, jadi bayar 148 ribu, ditambah kupon 50 ribu totalnya 198 ribu. Lebih mahal 13 ribu dari beli biasa.\n\nKubilang member ini balik modal kalau belanja sekolah setahun kita lewat 250 ribu, karena 20 persen dari 250 ribu pas 50 ribu. Anakku ikut menghitung berapa buku yang dia butuh, terus bilang pasti lewat.\n\nKubiarkan dia berangan dulu. Buku tidak jalan sendiri ke tas.",
    comments: [
      { authorId: 206, minutesAgo: 4817, content: "titik balik modal 250 ribu, angka yang justru bikin orang belanja lebih 🙃" },
      { authorId: 116, minutesAgo: 4809, content: "anak yang bilang pasti lewat itu optimis level dewasa kak wkwk" },
      { authorId: 86, minutesAgo: 4801, content: "aku juga pernah daftar member terus gak balik modal kak, akhirnya dipake beli buku dua kali 🙏" },
      { authorId: 264, minutesAgo: 4793, content: "Menghitung sebelum membeli itu kebiasaan yang baik." },
      { authorId: 237, minutesAgo: 4785, content: "hitung dulu sebelum daftar member itu hemat, dari pengalaman" },
    ],
  },
  {
    id: 162,
    authorId: 12,
    minutesAgo: 4855,
    shares: 10,
    content:
      "anakku minta nambah uang saku.\nsaku 15 ribu sehari. dua hari pertama abis 12 ribu buat jajan tambahan.\naku bikin aturan baru.\n15 ribu tetap. 10 ribu makan. 3 ribu nabung di dompet kecil. 2 ribu bebas.\nseminggu jadi 75 ribu, dan yang bebas cuma 10 ribu seminggu.\ndia ngitung ulang dua kali. gak protes.\nhari ini dia jajan sesuai aturan. malam dia tanya kapan dompet kecilnya boleh dibuka.\nkubilang akhir bulan. dia bilang itu lama. kubilang lama itu angka.",
    comments: [
      { authorId: 66, minutesAgo: 4847, content: "aturan 10-3-2 itu rapi kak, ikut niru 🙏" },
      { authorId: 98, minutesAgo: 4839, content: "anak yang ngitung ulang tanpa protes itu langka kak" },
      { authorId: 238, minutesAgo: 4831, content: "akhir bulan itu memang lama, ibu tahu rasanya" },
      { authorId: 140, minutesAgo: 4823, content: "2 ribu bebas tiap hari itu yang bikin anak bertahan bre wkwk" },
      { authorId: 251, minutesAgo: 4815, content: "dompet kecil yang ditunda itu rasanya kayak gaji yang masuk tabungan" },
    ],
  },
  {
    id: 163,
    authorId: 13,
    minutesAgo: 4885,
    shares: 22,
    content:
      "pr mtk venn: ekskul bola 17, pramuka 13, dua2nya 5. tanya: bola doang brp.\ngue itung 17 minus 5 = 12. temen sekelas bilang harusnya 17 minus 5 tambah 5 lagi jadi 17. gue ikut dia, hapus 12 tulis 17. gk taunya pas dibahas jawabannya 12. jawaban awal gue bener gk jadi apa2 wkwk.\nvenn gue gambar bolong ampe 4 kali. buku gue bolong bgt sekarang.\nkesimpulan: denger temen itu bahaya. denger guru itu wajib. gk ada ngeles.",
    comments: [
      { authorId: 137, minutesAgo: 4877, content: "17 minus 5 itu 12 bre, temen lo bikin gugat wkwk" },
      { authorId: 151, minutesAgo: 4869, content: "venn bolong 4 kali itu lore buku bre 😭" },
      { authorId: 192, minutesAgo: 4861, content: "soal gampang dan buku tetep bolong, itu disiplin om wkwk" },
      { authorId: 213, minutesAgo: 4853, content: "yang doang = total minus irisan. hafalin itu 🙃" },
      { authorId: 217, minutesAgo: 4845, content: "jawaban pertama yang dibahas itu biasanya yang bener 🙃" },
    ],
  },
  {
    id: 164,
    authorId: 14,
    minutesAgo: 4915,
    shares: 9,
    content:
      "kucing pos. umur 4 tahun.\npagi murid SD nanya, om, kucing ini kalau manusia umurnya berapa.\ndia itung: 4 kali 7, 28. terus dia bilang kucingnya lebih tua dari kakaknya.\nsore kakaknya nyamperin. dia nunjuk kucing, bilang ini kakakmu yang 28.\nkakaknya malu. kucing gue yawning.\nkucing gak tau dia dianggep 28. dia tidur aja di kursi depan.",
    comments: [
      { authorId: 101, minutesAgo: 4907, content: "28 tahun kucing itu senior banget bre wkwk" },
      { authorId: 71, minutesAgo: 4899, content: "murid yang itung umur kucing pake 7 itu belajarnya dari mana ya kak 😄" },
      { authorId: 203, minutesAgo: 4891, content: "kucing pos tidur di kursi depan itu tanda pos aman om" },
      { authorId: 322, minutesAgo: 4883, content: "4 kali 7 = 28, muridnya cepet." },
      { authorId: 191, minutesAgo: 4875, content: "kucing pos itu yang paling tenang di antara kita semua om" },
    ],
  },
  {
    id: 165,
    authorId: 15,
    minutesAgo: 4945,
    shares: 16,
    content:
      "ada pesenan nasi tumpeng buat acara lomba anak sekolah, tampahnya bundar diameter 80 cm. aku bingung 80 cm itu gede gak ya, kupikir ampe sore sambil nyiram gerobak.\n\nkebetulan anak SMA langganan lewat, kubilang tolong itungin. dia jawab jari-jari 40, luasnya 3,14 kali 40 kali 40, hasil 5.024 cm persegi. terus dia bilang kira-kira seluas lima ubin kamar.\n\naku deh langsung percaya. 5.024 itu angka gede tapi tampahnya keliatan biasa aja lho. besok kubesan daun pisang dua ikat, katanya buat nutup tampah sama sisanya buat alas kue. semoga pas.",
    comments: [
      { authorId: 77, minutesAgo: 4937, content: "tampah 80 cm itu gede teh, muat buat acara sekolah 🙏" },
      { authorId: 87, minutesAgo: 4929, content: "anak SMA yang itungin tampah itu baik banget teh" },
      { authorId: 128, minutesAgo: 4921, content: "3,14 kali 1600 itu 5.024 kak, anak SMA gak bohong" },
      { authorId: 189, minutesAgo: 4913, content: "daun pisang dua ikat itu standar teh, jangan sampai kurang" },
      { authorId: 82, minutesAgo: 4905, content: "pesenan sekolah itu biasanya rame teh, siapin tenaga juga 🙏" },
    ],
  },
  {
    id: 166,
    authorId: 16,
    minutesAgo: 4975,
    shares: 11,
    content:
      "Amplop denah dari surveyor hari ini: skala 1 cm mewakili 2 km. Dari kantor ke rumah konsumen pertama tercatat 6 cm, jadi 12 km. Ke konsumen kedua 4 cm, jadi 8 km. Pulang ke kantor 5 cm, 10 km. Total 30 km, itu kalau jalannya lurus seperti di denah.\n\nDi sudut denah dia menulis tangan: belok di depan SMP 2, jam setengah dua jalan penuh motor sekolah. Berarti 12 km tadi bisa jadi 20 km kalau kena jam pulang.\n\nAku catat kunjungan mulai jam 9, selesai sebelum jam 1. Denah tidak bohong, hanya jalan yang punya suasana.",
    comments: [
      { authorId: 246, minutesAgo: 4967, content: "jam setengah dua itu jam paling susah naik motor, empati dari yang pernah" },
      { authorId: 256, minutesAgo: 4959, content: "Denah yang jujur lebih berguna daripada jalan yang cepat." },
      { authorId: 216, minutesAgo: 4951, content: "1 cm banding 2 km itu skala 1:200.000, denahnya akurat 🙃" },
      { authorId: 175, minutesAgo: 4943, content: "surveyor yang nulis belokan di denah itu orangnya detail om" },
      { authorId: 185, minutesAgo: 4935, content: "skala 1 cm 2 km itu denah yang bisa dipercaya om" },
    ],
  },
  {
    id: 167,
    authorId: 17,
    minutesAgo: 5005,
    shares: 19,
    content:
      "anak magang SMK di lab nanya, lantai ruang sampel 4 meter persegi, sisinya berapa. dia jawab 4 meter. bro.\n\nkujelasin pelan: sisi kali sisi = luas. 4 kali 4 = 16, bukan 4. yang pas 2 kali 2. jadi sisinya 2 meter, bukan 4.\n\ndia bengong sebentar, terus bilang berarti luas 9 itu sisinya 3. gue angguk. dia nangkep polanya sendiri.\n\nbro, orang yang salah di awal tapi langsung nangkep pola itu bahan magang bagus. besok kuesein dia ukur lab beneran.",
    comments: [
      { authorId: 229, minutesAgo: 4997, content: "sisi 4 kali sisi 4 itu 16, magang hari ini hemat kalkulator 🙃" },
      { authorId: 146, minutesAgo: 4989, content: "jawab 4 meter itu pola belum nyala bre wkwk" },
      { authorId: 271, minutesAgo: 4981, content: "Yang salah lalu langsung menangkap pola itu proses belajar yang benar." },
      { authorId: 186, minutesAgo: 4973, content: "magang SMK yang berani nanya itu bagus om" },
      { authorId: 30, minutesAgo: 4965, content: "Sisi kali sisi memang sering ketuker sama luas, si anak les saya juga gitu" },
    ],
  },
  {
    id: 168,
    authorId: 18,
    minutesAgo: 5035,
    shares: 14,
    content:
      "anak SMK pesen buat bazar kelas: pepaya 24 biji, salak 36 bungkus. minta dibagi tas rata, jumlah tasnya harus paling banyak tapi isinya sama.\nkuitung di kertas: 24 bisa dibagi 2, 3, 4, 6, 8, 12. 36 bisa dibagi 2, 3, 4, 6, 9, 12. yang bareng paling gede: 12.\njadi 12 tas. tiap tas 2 pepaya 3 salak. gak ada sisa, gak ada yang nganggur.\nanaknya jalan bawa tas sambil senyum. om-om di sini gak ngerti FPB, tapi ngerti tas yang rapi.",
    comments: [
      { authorId: 131, minutesAgo: 5027, content: "12 tas isi sama itu satisfying bre" },
      { authorId: 118, minutesAgo: 5019, content: "FPB yang kepake beneran bre, gak kayak di buku 😭" },
      { authorId: 197, minutesAgo: 5011, content: "tas yang rapi itu dagang om" },
      { authorId: 317, minutesAgo: 5003, content: "FPB 24 sama 36 itu 12, hitungan om pas." },
      { authorId: 115, minutesAgo: 4995, content: "12 tas isi sama itu adil bre, bazar siap jalan" },
    ],
  },
  {
    id: 169,
    authorId: 19,
    minutesAgo: 5065,
    shares: 21,
    content:
      "murid SMK tadi nanya bisa isi game seribu gak. bisa aja, tapi gue tanya ngumpul dari mana.\ndia bilang dari sisa uang makan 2 ribu sehari, sepuluh hari, total 20 ribu. katanya pity-nya udah 60 dari 80, tinggal dikit.\ngue hitung: beli 10 kali sekarang, pity jadi 70. kurang 10 lagi. gue jual. tapi gue bilang, uang makan tetep makan. dia mikir lama, narik 10 ribu doang, sisanya bilang besok lagi.\npulsa game itu uang jelas. makan itu juga uang jelas. yang satu jadi karakter di game, yang satu jadi tenaga. hari ini dia milih dua-duanya sedikit.",
    comments: [
      { authorId: 147, minutesAgo: 5057, content: "pity 70 dari 80 itu nyesein banget bre wkwk" },
      { authorId: 123, minutesAgo: 5049, content: "bos yang ngingetin uang makan itu bos satu-satunya bre 😭" },
      { authorId: 233, minutesAgo: 5041, content: "sisa 2 ribu sehari itu kering, empati dari yang pernah" },
      { authorId: 292, minutesAgo: 5033, content: "Sepuluh hari menabung dua ribu itu disiplin. Cara pakainya yang perlu dibimbing." },
      { authorId: 6, minutesAgo: 5025, content: "pity 70 dari 80 berarti sisa 10. gue bisa itung ini wkwk" },
    ],
  },
  {
    id: 170,
    authorId: 20,
    minutesAgo: 5095,
    shares: 12,
    content:
      "Penumpang ibu-ibu tadi bawa bon belanja seragam anaknya, tertempel kupon undian. Dia cerita, satu rice cooker butuh dua puluh lembar kupon. Punyanya lima. Anaknya yang mencatat: tinggal lima belas lembar, sekian bon lagi kalau tiap belanja dapat satu.\n\nDi lampu merah kuhitung: kalau belanja besar tiap bulan sekali, lima belas bulan lagi. Lebih dari setahun.\n\nIbunya bilang, tidak apa-apa, seragamnya dulu yang dipakai anaknya. Kupon boleh santai.\n\nKuturunkan dia di depan rumah. Bonnya dijepit rapi di buku tulis.",
    comments: [
      { authorId: 283, minutesAgo: 5087, content: "Seragam yang dipakai, kupon yang ditunggu. Urutannya benar." },
      { authorId: 94, minutesAgo: 5079, content: "kumpulin kupon itu biasa kak, anaknya yang sabar ngitung itu langka 🙏" },
      { authorId: 219, minutesAgo: 5071, content: "15 bon lagi itu 15 bulan kalau bulanan, sabar itu gratis 🙃" },
      { authorId: 231, minutesAgo: 5063, content: "bon dijepit rapi di buku tulis itu kebiasaan orang urusannya beres" },
      { authorId: 288, minutesAgo: 5055, content: "Kupon boleh lama. Seragam tidak bisa menunggu." },
    ],
  },
  {
    id: 171,
    authorId: 21,
    minutesAgo: 5125,
    shares: 18,
    content:
      "ke bank ambil kartu mahasiswa, nomor gue 47. yang kebagian layar: 12.\nkuitung: rata-rata satu orang 3 menit. 47 minus 12 = 35 orang. 35 kali 3 = 105 menit. hampir 2 jam.\ndah, pulang dulu. nasi bungkus 12 ribu, duduk depan kos, itung ulang jam 3: layar 31. sisa 16 orang. 48 menit. gue jalan lagi.\nsampe bank pas nomor gue dipanggil. 105 menit tadi jadi dua jalan santai plus nasi.\nhemat waktu itu gak selalu di kaleng, deh. kadang di kaki.",
    comments: [
      { authorId: 211, minutesAgo: 5117, content: "antre bank itu kuis kesabaran plus estimasi statistik 🙃" },
      { authorId: 227, minutesAgo: 5109, content: "3 menit per nomor itu optimis, kadang ada yang daftar 4 formulir 🙃" },
      { authorId: 143, minutesAgo: 5101, content: "pulang dulu terus itung ulang itu strategi bre wkwk" },
      { authorId: 274, minutesAgo: 5093, content: "Menghitung sebelum menunggu membuat menunggu jadi ringan." },
      { authorId: 2, minutesAgo: 5085, content: "105 MENIT ITU BISA NGEMIL 3 KALI" },
    ],
  },
  {
    id: 172,
    authorId: 22,
    minutesAgo: 5155,
    shares: 15,
    content:
      "Anakku mengirim soal olimpiade siang tadi. Soalnya: umur ayah empat kali umur anaknya. Lima tahun lagi, ayah tiga kali umur anaknya. Berapa umur anaknya sekarang.\n\nAku duduk dengan kertas kecil. Kubuka angka 10: ayah 40. Lima tahun lagi jadi 15 dan 45, pas tiga kali. Aku senyum sendiri di ruang tamu.\n\nSorenya kutelepon. Katanya dia sudah punya jawaban dan cara yang lebih cepat, tapi senang ibunya ikut pusing juga.\n\nDoa ibu malam ini sederhana: semoga anakku sehat, dan semoga ibu tetap sanggup mengikuti pelajaran kelas sembilan. 🙏",
    comments: [
      { authorId: 81, minutesAgo: 5147, content: "ibu yang ikut pusing itung soal anak itu ibu hebat kak 🙏" },
      { authorId: 97, minutesAgo: 5139, content: "coba angka 10 langsung pas kak, itu rezeki 😄" },
      { authorId: 221, minutesAgo: 5131, content: "selisih umur konstan 30, pas jadi 3 kali anaknya 15, jadi sekarang 10 🙃" },
      { authorId: 265, minutesAgo: 5123, content: "Ibu yang mencoba dulu sebelum bertanya itu teladan." },
      { authorId: 3, minutesAgo: 5115, content: "Soal umur seperti itu memakai selisih yang tetap. Ananda dan ibunya pintar." },
    ],
  },
  {
    id: 173,
    authorId: 23,
    minutesAgo: 5185,
    shares: 11,
    content:
      "adik numpang laptop buat latihan soal. dia set timer 25 menit belajar, 5 menit istirahat. enam siklus rencananya.\n6 kali 30 menit = 3 jam. di kertas.\nrealita: siklus 1-3 beres. siklus 4 istirahatnya 5 menit jadi 40. siklus 5 dia makan. siklus 6 gak jalan, laptop diambil kakaknya buat kerja.\ntotal efektif: kira-kira 2 jam.\ndugaan: 1 jam itu hilang ke kulkas.\nhasil masih oke. besok ulang, timer yang dijalanin dia sendiri, bukan kakaknya.",
    comments: [
      { authorId: 277, minutesAgo: 5177, content: "Dua jam fokus lebih berharga daripada tiga jam di kertas." },
      { authorId: 236, minutesAgo: 5169, content: "istirahat 5 jadi 40 itu bukan adik aja, itu semua orang" },
      { authorId: 112, minutesAgo: 5161, content: "siklus 4 dilanggar itu hukum alam bre wkwk" },
      { authorId: 320, minutesAgo: 5153, content: "6 kali 30 itu 180 menit. di kertas memang cantik." },
      { authorId: 134, minutesAgo: 5145, content: "timer yang dijalanin orang lain itu gak pernah akurat bre wkwk" },
    ],
  },
  {
    id: 174,
    authorId: 24,
    minutesAgo: 5215,
    shares: 26,
    content:
      "CUCU AKU PR BILANGAN MINUS. DIA BILANG MINUS 5 LEBIH BESAR DARI MINUS 2 KARENA 5 LEBIH BESAR DARI 2. AKU PURA2 SETUJU BIAR DIA SEMANGAT.\n\nTERUS AKU BAWA SUHU KULKAS: MINUS 2 ITU BEKU, MINUS 5 LEBIH BEKU DARI MINUS 2. JADI YANG LEBIH BESAR TETEP MINUS 2. DIA DIEM LAMA. TERUS DIA BILANG, NENEK KOK NGEBANDINGIN KULKAS.\n\nPAGINYA DIA BILANG NILAINYA BENAR. KULKAS AKU DAPAT GELAR JUGA.\n\nNGGAJAR ITU GAK HARUS PUNYA BUKU. PUNYA KULKAS AJA CUKUP.",
    comments: [
      { authorId: 71, minutesAgo: 5207, content: "kulkas jadi guru juga akhirnya 😄" },
      { authorId: 122, minutesAgo: 5199, content: "nenek menang argumen pakai kulkas, itu level dewa wkwk" },
      { authorId: 179, minutesAgo: 5191, content: "PR minus dijelasin pake kulkas, baru pertama gue denger om wkwk" },
      { authorId: 341, minutesAgo: 5183, content: "minus 2 sama minus 5, bedanya 3. keluarga ini tepat." },
      { authorId: 10, minutesAgo: 5175, content: "MINUS 2 LEBIH BESAR DARI MINUS 5 ITU BENER, GARIS BILANGAN GAK BOHONG WKWK" },
    ],
  },
  {
    id: 175,
    authorId: 25,
    minutesAgo: 5245,
    shares: 13,
    content:
      "sistem minta 400 jam PKL. kuitung: 8 jam sehari, 5 hari seminggu, 10 minggu. 8 kali 5 = 40 per minggu, kali 10 = 400. pas. gak lebih, gak kurang, kayak dihitung orang yang gak mau ngasih margin.\n\ntp minggu lalu ada hari bos pulangin duluan jam 4. itu minus 4 jam. besoknya gue diemin lembur 1 jam buat nutup. sisa 3 jam masih ngambang.\n\nabes itu gue nanya ke pembimbing, boleh gak tulisannya digebukin dikit. dia bilang jam itu di surat, gak di hati. gue diam. benar juga tp nyebelin.\n\n10 minggu lagi. ngitungnya gampang. nungguinnya yang lama.",
    comments: [
      { authorId: 244, minutesAgo: 5237, content: "sisa 3 jam ngambang itu rasanya kayak tenggat kantor, sabar ya" },
      { authorId: 139, minutesAgo: 5229, content: "jam di surat gak di hati, itu quote pembimbing tahun ini bre 😭" },
      { authorId: 253, minutesAgo: 5221, content: "8 kali 5 kali 10 itu 400, pas banget, pembimbingnya teliti" },
      { authorId: 226, minutesAgo: 5213, content: "PKL 400 jam itu standar, margin 0 itu berani 🙃" },
      { authorId: 242, minutesAgo: 5205, content: "surat yang utuh itu tanggung jawab, lembur cuma bonus" },
    ],
  },
]
