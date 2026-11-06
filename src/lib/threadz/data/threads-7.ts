import type { ThreadzThread } from "../types"

// PART 7: cuitan 151-175 — ROMBAK V5 (6 Nov 2026): total ganti isi jadi FORUM
// MATEMATIKA (V3 lama masih diary harian). Slot teknis TIDAK berubah:
// id 151-175, authorId 1-25 urut, minutesAgo = 25 + 30*(id-1), komentar
// menyebar 0-6, komentar minutesAgo lebih kecil dari post-nya.
// Aturan lengkap: scripts/rumus-v2.md BAGIAN 1G + FORMULA HITAM 19 POLA.
// Tema file ini: kecepatan, waktu, jarak & beban kerja — bentuk BARU.
export const THREADS_PART7: ThreadzThread[] = [
  {
    id: 151,
    authorId: 1,
    minutesAgo: 4525,
    shares: 22,
    content:
      "Antar anak sekolah jadi soal hitung pagi ini. Kami berangkat 07.00, jalan 20 menit, dan bel berbunyi 07.30. Anak bertanya kalau jalan 20 menit, sampainya 07.20, berarti sisa 10 menit sebelum bel, apakah itu cukup untuk lapangan dan mencari sepatu di kantong. Ya udah deh, daripada dia panik, kita jalan 10 menit lebih awal besok. Yang ingin saya tanya: cara menghitung sisa waktu begini kalau ditulis rapi seperti apa ya, biar anak bisa menghitung sendiri kalau besok ibunya telat bangun",
    comments: [
      { authorId: 268, minutesAgo: 4517, content: "sederhananya: jam bel − jam sampai = sisa. 07.30 − 07.20 = 10 menit. kasih dia kalender kecil di lemari, dia bisa hitung sendiri tiap pagi" },
      { authorId: 74, minutesAgo: 4509, content: "10 menit untuk lapangan plus cari sepatu itu mepet kak. keputusan berangkat duluan itu benar" },
      { authorId: 59, minutesAgo: 4501, content: "anak bisa diajak menyusun dua kolom kak: jam sampai dan jam bel. selisihnya dia hitung sendiri. itu pelajaran waktu yang hidup" },
    ],
  },
  {
    id: 152,
    authorId: 2,
    minutesAgo: 4555,
    shares: 24,
    content:
      "KERETA PAGI DUA OPSI DAN GUE GAK BISA MILIH. opsi A: 06.40. opsi B: 07.10. stasiun 15 menit jalan kaki dari kos, plus 10 menit buat cek gerbong. kalau A, gue harus keluar kos 06.15 paling lambat. kalau B, keluar 06.45. BIDANG TIDUR SELISIHNYA 30 MENIT.\nTERUS TEMEN KOS BILANG KERETA ITU GAK PERNAH TEPAT, SIAPIN 10 MENIT TOLERANSI. JADI A ITU 06.05 KELUAR, B ITU 06.35. gue nanya ke sini: toleransi 10 menit itu lazim gak buat kereta, atau temen gue doang yang males bangun",
    comments: [
      { authorId: 212, minutesAgo: 4547, content: "toleransi 10 menit itu wajar bre, bukan soal males. kereta itu gak nunggu, ganti opsi A aja biar aman" },
      { authorId: 209, minutesAgo: 4539, content: "hitungan bre rapi: A keluar 06.05, B keluar 06.35. 30 menit tidur itu nyata, tapi keterlambatan pertama lebih mahal" },
      { authorId: 313, minutesAgo: 4531, content: "ambil A bre sekali aja test. kalau platformnya kelamaan, baru turun ke B besok. data dulu, tidur kemudian" },
    ],
  },
  {
    id: 153,
    authorId: 3,
    minutesAgo: 4585,
    shares: 25,
    content:
      "Ananda kelas 6 lari pagi hari ini: dua putaran lapangan, masing-masing 400 meter, selesai 5 menit. Ia bertanya itu kecepatan berapa, karena di televisi angkanya berbeda-beda. Hitunganku: 800 meter dalam 5 menit berarti 160 meter per menit, dan satu jam berisi 12 kali 5 menit, jadi 1.920 meter... tunggu, itu kurang. 160 × 60 = 9.600 meter = 9,6 km per jam. Saya koreksi sendiri di depan murid, dan itu bagus, tetapi saya ingin memastikan 9,6 km per jam itu benar sebelum masuk jurnal kelas. Adakah yang bisa mengonfirmasi sekali lagi?",
    comments: [
      { authorId: 258, minutesAgo: 4577, content: "benar bu, 800 ÷ 5 = 160 meter per menit, × 60 = 9.600 m = 9,6 km per jam. anak lari santai itu di range yang tepat" },
      { authorId: 268, minutesAgo: 4569, content: "cara cepat bu: 400 m 2 putaran 5 menit = 160 m per menit. jurnal kelas aman dengan 9,6" },
      { authorId: 336, minutesAgo: 4561, content: "koreksi sendiri di depan murid itu pelajaran terbaik bu. angka pun boleh diperbaiki" },
    ],
  },
  {
    id: 154,
    authorId: 4,
    minutesAgo: 4615,
    shares: 2,
    content:
      "Kereta 06.52. Dari gerbang masuk ke peron butuh 4 menit berjalan. Peron dicapai 06.50, artinya gerbang 06.46. Dari pintu rumah ke gerbang 2 menit, jadi rumah 06.44. Semua digambar mundur dari menit paling terakhir. Saya berdiri di 06.44 dan tidak tahu kenapa memakai algoritma ini untuk hidup yang tidak pernah berjalan rapi.",
    comments: [
      { authorId: 258, minutesAgo: 4607, content: "berhitung mundur dari titik akhir itu cara paling tahan guncangan pak. setiap jeda dihitung sekali" },
      { authorId: 283, minutesAgo: 4599, content: "6.44 berangkat, itu sempurna. hidup tidak rapi, tapi jadwal bisa" },
    ],
  },
  {
    id: 155,
    authorId: 5,
    minutesAgo: 4645,
    shares: 30,
    content:
      "warung buka jam 06.00, pelanggan pertama nongol 06.12. dia pesen 4 roti bakar, tiap roti 5 menit di panggangan. gue hitung di kepala: 4 × 5 = 20 menit, jadi dia selesai 06.32, keburu dia nelepon tukang ojek katanya 06.30 udah jalan. GIMANA INI. kalau gue panggang dua sekaligus, waktunya tinggal 15 menit kan? atau emang gak bisa dua sekaligus soalnya panggangan gue kecil. roti bakar itu jualan atlatik wkwk",
    comments: [
      { authorId: 102, minutesAgo: 4637, content: "kalau muat 2 sekaligus kak, dua ronde: 5 + 10 = 15 menit. selesai 06.27, tukang ojek nyampe pas" },
      { authorId: 84, minutesAgo: 4629, content: "4 × 5 = 20 kalau satu-satu kak. dua sekaligus itu 10 + 5. panggangan kecil juga bisa dorong di sudut" },
      { authorId: 60, minutesAgo: 4621, content: "besok kak, tuang mentega dulu semua roti, baru panggang. persiapan gak masuk hitungan api" },
      { authorId: 32, minutesAgo: 4613, content: "jualan roti bakar itu memang atletik kak wkwk. semangat" },
    ],
  },
  {
    id: 156,
    authorId: 6,
    minutesAgo: 4675,
    shares: 6,
    content:
      "gue naik sepeda 10 km selama 1 jam. gue yakin kecepatan gue 10 km per jam. terus temen bilang, kalau di tengah jalan istirahat warung 20 menit, kecepatan rata-rata lu bukan 10 lagi, jadi 7,5. gue gak paham. kenapa harus dikurangi, gue istirahat kan bukan ngurangin jalan. tolong ada yang jelasin pelan-pelan, jangan pakai kata efektif gitu, gue alergi",
    comments: [
      { authorId: 219, minutesAgo: 4667, content: "gak ada yang dikurangi bre. total waktunya yang jadi 1 jam 20 menit. 10 km ÷ 1,33 jam = 7,5. istirahatmu ikut masuk waktu" },
      { authorId: 138, minutesAgo: 4659, content: "kecepatan rata-rata itu jalan dibagi SEMUA waktu bre, termasuk duduk warung. warung ikut nanggung hitungan wkwk" },
      { authorId: 118, minutesAgo: 4651, content: "1 jam 20 menit = 4/3 jam bre. 10 ÷ 4/3 = 7,5. angkanya kebetulan cantik" },
    ],
  },
  {
    id: 157,
    authorId: 7,
    minutesAgo: 4705,
    shares: 32,
    content:
      "hitung mundur skripsi hari ini: sisa 60 halaman. ritme gue 2 halaman per hari. 60 ÷ 2 = 30 hari. deadline dari dosen 24 hari. GAK CUKUP 🙃. kalau mau nutup dalam 24 hari, gue butuh 60 ÷ 24 = 2,5 halaman per hari. setengah halaman itu kecil banget dipandang, tapi 0,5 × 24 = 12 halaman tambahan, itu setengah bab. pertanyaan gue buat yang udah lulus: kalian nambah ritme atau memangkas bab? gue udah coba nambah, hasilnya halaman 21 dan 22 jadi satu halaman lebih banyak tapi lebih jelek",
    comments: [
      { authorId: 212, minutesAgo: 4697, content: "2,5 per hari itu benar kak. saran: pisahkan hari penulisan dan hari perbaikan. 18 hari nulis 3 halaman, 6 hari rapikan" },
      { authorId: 209, minutesAgo: 4689, content: "60 ÷ 24 = 2,5 kak. setengah halaman itu satu paragraf doang, gak serem di atas kertas 🙃" },
      { authorId: 154, minutesAgo: 4681, content: "jangan memangkas bab kak, dosen lihat itu. tambah ritme dikit tiap hari lebih gampang dari bab yang hilang" },
      { authorId: 143, minutesAgo: 4673, content: "2 halaman → 2,5 halaman itu naik 25% kak. pagi 1,5 siang 1. gak kerasa rasanya" },
    ],
  },
  {
    id: 158,
    authorId: 8,
    minutesAgo: 4735,
    shares: 9,
    content:
      "shift 21.00 sampai 06.00.\nnegara bilang 9 jam.\nistirahat 45 menit.\nkerja efektif 8 jam 15 menit.\nyang nanya gue: 8 jam 15 itu ditulis 8,25 atau 8:15 di laporan. gue ketuker terus",
    comments: [
      { authorId: 240, minutesAgo: 4727, content: "8:15 itu jam, 8,25 itu desimal. 15 menit = 0,25 jam. dua-duanya benar, tinggal ikut kolom laporan" },
      { authorId: 258, minutesAgo: 4719, content: "9 jam dikurang 45 menit = 8 jam 15 menit. perhitungan Anda benar" },
    ],
  },
  {
    id: 159,
    authorId: 9,
    minutesAgo: 4765,
    shares: 15,
    content:
      "bang, order 6 km biasanya 18 menit, itu 20 km per jam. tadi hujan, selesai 30 menit, jadi 12 km per jam. penumpang nggak protes, cuma nanya kok lama, gue jawab hujan. nah gue penasaran bang: kalau kecepatan turun 40 persen, tarif layak naik berapa persen biar nggak rugi bensin doang? gue gak mau makmur, gue mau nggak rugi",
    comments: [
      { authorId: 137, minutesAgo: 4757, content: "waktu naik 18 ke 30 menit itu 66% lebih lama bang. tarif platform gak ganti, rugi waktu lu doang. makanya jam hujan banyak yang nolak order" },
      { authorId: 186, minutesAgo: 4749, content: "20 turun ke 12 itu turun 40% bang. kalau mau impas dari sisi waktu, tarif harus naik sekitar 66%, gak bakal disetujui platform" },
      { authorId: 154, minutesAgo: 4741, content: "realistisnya bang, ambil order deket doang pas hujan. jarak pendek bikin rugi waktunya kecil" },
    ],
  },
  {
    id: 160,
    authorId: 10,
    minutesAgo: 4795,
    shares: 28,
    content:
      "LARI 3 KM BARENG TEMEN KELAS DAN GUE KALAH 3 MENIT WKWKWK. gue 18 menit, dia 15 menit. gue itung: bedanya 3 menit buat 3 km, JADI 1 MENIT PER KM. TERUS GUE MIKIR, KALAU GUE MAMPU NGURANGIN 1 MENIT DI SETIAP KM GUE SAMA DIA DOONG. TAPI KENAPA YA NAMBAH KECEPATAN ITU KERASANYA GAK GITU AJA. guru ol ol bilang masalahnya napas, gue bilang masalahnya kaki. ADA YANG BISA BANTU ITUNG, KALAU GUE MAU 15 MENIT BUAT 3 KM, PER KM HARUS BERAPA DETIK",
    comments: [
      { authorId: 131, minutesAgo: 4787, content: "15 menit ÷ 3 km = 5 menit per km = 300 detik per km. lu sekarang 360 detik. kurangi 60 detik per km bre" },
      { authorId: 223, minutesAgo: 4779, content: "jangan kurangi sekali bre. minggu ini 340, minggu depan 320. napas ikut latihan, bukan ikut keinginan wkwk" },
      { authorId: 143, minutesAgo: 4771, content: "1 menit per km itu 60 detik bre. guru ol ol betul, napas dulu, kaki kemudian" },
    ],
  },
  {
    id: 161,
    authorId: 11,
    minutesAgo: 4825,
    shares: 24,
    content:
      "Rapat pagi 09.00 sampai 10.40, total 100 menit. Tiga agenda: penjualan 25 menit, kas 35 menit, pemasok 30 menit. Jumlah agenda 90 menit. Sisa 10 menit pergi ke pembahasan jadwal istirahat yang bahasanya melebar menjadi tentang menu kantin. Aku mencatat semua ini untuk laporan, lalu sadar laporan yang jujur membuat pemimpin rapat tidak senang. Pertanyaanku: apakah rekan-rekan mencatat rapat dengan menit, atau memilih mencatat poin saja supaya tidak ada angka yang bisa diperdebatkan?",
    comments: [
      { authorId: 262, minutesAgo: 4817, content: "catat keduanya aku, angka di lampiran, poin di badan laporan. yang diperdebatkan bisa diarahkan ke angka, bukan ke orang" },
      { authorId: 283, minutesAgo: 4809, content: "10 menit menu kantin itu jeda yang sah. rapat tanpa jeda hidup lebih panjang dari agendanya" },
      { authorId: 205, minutesAgo: 4801, content: "pemimpin rapat yang takut pada angka biasanya takut pada durasinya sendiri. bukan urusan pencatat" },
    ],
  },
  {
    id: 162,
    authorId: 12,
    minutesAgo: 4855,
    shares: 4,
    content:
      "penghitung langkah shift malam: 5.400 langkah.\nrata 70 cm per langkah = 3.780 meter.\nhampir 4 km di lorong.\nkaki diam-diam protes.",
    comments: [],
  },
  {
    id: 163,
    authorId: 13,
    minutesAgo: 4885,
    shares: 19,
    content:
      "gue salah itung macet gile. jalanan macet 7 km per jam doang. jarak tinggal 3,5 km. gue kira 15 menit nanti nyampe, ternyata 3,5 dibagi 7 itu setengah jam, JAM PENUH 30 MENIT. gue sms orang rumah 15 menit, jadi bohong 15 menit. bener kan 30 menit tuh, gak mungkin gue salah lagi kali ya. gk akan gue itung macet pake perasaan lagi, mepet bgt dihajar",
    comments: [
      { authorId: 118, minutesAgo: 4877, content: "30 menit bre. 7 km per jam = 3,5 km tiap 30 menit. macet itu selalu dua kali dugaan" },
      { authorId: 331, minutesAgo: 4869, content: "trik bre: 7 km per jam itu 350 meter per menit. 3.500 ÷ 350 = 10... eh itu salah gue wkwk, 700 m per menit baru 5 menit/km" },
      { authorId: 154, minutesAgo: 4861, content: "bre, 7 km per jam artinya 3,5 km butuh setengah jam. macet selalu dua kali dugaan, 30 menit itu bener" },
    ],
  },
  {
    id: 164,
    authorId: 14,
    minutesAgo: 4915,
    shares: 7,
    content:
      "shift 08.00-16.00. delapan jam. tiga jam pos A. lima jam pos B. pos B deket makanan, itu untungnya. payung tinggal satu. om-om rebutan.",
    comments: [
      { authorId: 199, minutesAgo: 4907, content: "lima jam di pos B itu gila om, penuh motor lagi. payung satu mah gak bakal selesai" },
      { authorId: 240, minutesAgo: 4899, content: "deket makanan itu selisih 2 jam pos A jadi terbayar om wkwk" },
    ],
  },
  {
    id: 165,
    authorId: 15,
    minutesAgo: 4945,
    shares: 14,
    content:
      "pasar buka jam 05.00. dua jam pertama gue lakuin separuh stok, jam 07.00 nyaris kosong. empat jam berikutnya cuma jalan sisa-sisanya. teh itung: separuh dalam 2 jam itu 25 persen per jam, sisanya 12 persen per jam pagi. gue nanya ke rekan pasar: normal gak begini? kalau normal, berarti gue harus bawa stok dua kali doang di dua jam pertama, sisanya hemat. teh gak mau bawa terus terus soalnya punggung ikut dihitung",
    comments: [
      { authorId: 102, minutesAgo: 4937, content: "normal teh, pembeli pagi itu yang buru-buru. stok 60 persen untuk 2 jam pertama, sisanya buat yang santai" },
      { authorId: 84, minutesAgo: 4929, content: "25 persen per jam vs 12 itu teh hitungan kasar yang berguna. bawa stok mengikuti jam, bukan harapan" },
      { authorId: 32, minutesAgo: 4921, content: "punggung ikut dihitung teh wkwk. yang penting dagangan habis, bukan bahu yang habis" },
    ],
  },
  {
    id: 166,
    authorId: 16,
    minutesAgo: 4975,
    shares: 9,
    content:
      "Lembur minggu ini: 2 jam per hari, 5 hari, total 10 jam. Laporan bulan berjalan belum mencantumkannya karena form lembur menunggu persetujuan bertingkat. Aku menghitung ulang: 10 jam itu 1,25 hari kerja penuh. Ia hilang dalam administrasi, bukan dalam kerja. Pertanyaanku sederhana untuk rekan karyawan lain: lembur kalian biasanya masuk laporan berapa lama setelah kejadian? Aku ingin mengetahui apakah satu bulan itu normal atau terlalu lama",
    comments: [
      { authorId: 240, minutesAgo: 4967, content: "di tempat kami masuk di bulan yang sama kalau form selesai sebelum tanggal 25. satu bulan itu mepet, tapi masih dalam rentang normal" },
      { authorId: 272, minutesAgo: 4959, content: "1,25 hari kerja itu angka yang layak ditekankan kak. kalimatnya: kerja sudah terjadi, administrasi yang tertinggal" },
      { authorId: 192, minutesAgo: 4951, content: "10 jam lembur itu bukan angka kecil kak. tanyakan status formnya, bukan status kerjanya" },
    ],
  },
  {
    id: 167,
    authorId: 17,
    minutesAgo: 5005,
    shares: 21,
    content:
      "bro, konversi kecepatan jadi debat panas di lab: 54 km per jam = 15 m per detik. gue pake rumus bagi 3,6, langsung keluar 15. temen gue ngeyel, katanya harus dikali 1.000 lalu dibagi 3.600. hasilnya sama doang, 15. GUE YANG DI TENGAH. kenapa ya dua jalan yang beda panjang nyampe ke angka yang sama, dan mana yang harus ditulis di laporan? bro-bro teknik jawab dong, gue males jadi wasit terus",
    comments: [
      { authorId: 213, minutesAgo: 4997, content: "dua-duanya benar bro, bagi 3,6 itu bentuk ringkasnya 1.000 ÷ 3.600. ditulis di laporan pakai 3,6, kasih catatan kaki kalau dosen nggak percaya" },
      { authorId: 336, minutesAgo: 4989, content: "54 ÷ 3,6 = 15 bro. temen lu itu bukan salah, cuma suka jalan kaki panjang wkwk" },
      { authorId: 144, minutesAgo: 4981, content: "km per jam ke m per detik selalu bagi 3,6 bro. mundurnya kali 3,6. hafal dua arah, wasit pensiun" },
    ],
  },
  {
    id: 168,
    authorId: 18,
    minutesAgo: 5035,
    shares: 11,
    content:
      "om-om, itungan bodi gue. pasar ke toko 7 km, pulang-pergi 14 km. sehari tiga kali antar, jadi 42 km. enam hari kerja, 252 km seminggu. om-om biasanya itung begini buat atur servis atau gue doang yang bego penasaran",
    comments: [
      { authorId: 199, minutesAgo: 5027, content: "itung begini wajib om. 252 km per minggu itu mesin yang kerja keras, servisnya jangan ditunda" },
      { authorId: 240, minutesAgo: 5019, content: "42 km per hari × 6 = 252 bener om. catat per bulan juga, biar tahu kapan oli diganti" },
    ],
  },
  {
    id: 169,
    authorId: 19,
    minutesAgo: 5065,
    shares: 16,
    content:
      "bos, hitung jam efektif kios. buka 08.00 tutup 21.00, itu 13 jam. istirahat makan 30 menit, jadi 12,5 jam efektif. gue mikir, 12,5 itu lebih dari setengah hari. pertanyaan gue: kios kalian biasanya tutup 30 menit buat makan atau langsung jajan di tempat? gue mau atur ulang jam buka kalau memang 12,5 itu terlalu rakus",
    comments: [
      { authorId: 240, minutesAgo: 5057, content: "13 jam − 0,5 = 12,5 bener bos. kios kami makan sambil jaga, tapi duduknya disediain. itu solusi 15 menit yang jujur" },
      { authorId: 199, minutesAgo: 5049, content: "12,5 jam efektif itu rakus bos. pelanggan tetap dateng selama pintu terbuka, makan 30 menit gak bikin bangkrut" },
      { authorId: 258, minutesAgo: 5041, content: "kalau mau rehat penuh, geser tutupnya 30 menit lebih awal. jangan dicuri dari tengah hari" },
    ],
  },
  {
    id: 170,
    authorId: 20,
    minutesAgo: 5095,
    shares: 12,
    content:
      "Penumpang ke bandara pagi tadi: jarak 32 km, kecepatan rata-rata 40 km per jam. Saya menghitung: 32 ÷ 40 = 0,8 jam, yaitu 48 menit. Ditambah penurunan bagasi 10 menit, sekitar 58 menit. Ia berangkat 07.00 dan sampai 07.58, tepat sebelum antrean check-in memanjang. Di jalan ia bertanya kenapa perhitungan begini tidak diajarkan di sekolah dalam bentuk perjalanan nyata. Saya menjawab mungkin diajarkan, hanya saja kita lupa memakainya. Yang ingin saya tanyakan ke penumpang ojek lain: perhitungan waktu yang Anda buat di kepala selama perjalanan biasanya memakai langkah apa, kecepatan dulu atau jarak dulu?",
    comments: [
      { authorId: 258, minutesAgo: 5087, content: "jarak dulu om, karena jarak tidak berbohong. kecepatan baru diatur sesuai sisa waktu" },
      { authorId: 268, minutesAgo: 5079, content: "32 ÷ 40 = 0,8 jam = 48 menit benar om. sekolah mengajarkan rumus, hidup mengajarkan aplikasinya" },
      { authorId: 192, minutesAgo: 5071, content: "0,8 jam itu 48 menit om. banyak orang tersandung di sini, 0,8 jam bukan 80 menit" },
    ],
  },
  {
    id: 171,
    authorId: 21,
    minutesAgo: 5125,
    shares: 18,
    content:
      "tanya dong. air 2 liter di panci gue mendidih 9 menit. kalau cuma 1 liter, temen kos bilang 4,5 menit. gue ragu, kok bisa persis setengah waktunya? panasnya mah masuk ke panci dulu, bukan ke air. terus gue coba tadi pagi, 1 liter mendidih 5 menit lebih sedikit. temen gue bilang kebetulan. kalian bilang mana, 4,5 menit bener secara hitungan atau memang dapur gak nurut sama rumus deh",
    comments: [
      { authorId: 60, minutesAgo: 5117, content: "hitungan kasar 4,5 bener dah, tapi panci juga harus dipanaskan, jadi kenyataan lebih lama. 5 menit itu masuk akal" },
      { authorId: 102, minutesAgo: 5109, content: "setengah air ≠ setengah waktu kak, ada panci dan nyala yang ikut kebagian panas. rumusnya kasar, dapurnya jujur" },
      { authorId: 84, minutesAgo: 5101, content: "cobain tiga kali kak, catat. kalau rata-ratanya 5, temenmu bisa dibilang teorinya mepet doang" },
    ],
  },
  {
    id: 172,
    authorId: 22,
    minutesAgo: 5155,
    shares: 19,
    content:
      "Anakku dan bundanya berlomba jalan 200 meter ke posyandu tadi pagi. Anakku menempuh 4 menit. Saya menempuh 2 menit 40 detik. Anakku menanyakan selisihnya berapa detik, dan ia ingin dihitung ulang tiga kali karena tidak percaya bundanya lebih cepat 80 detik. Saya menjelaskan: 4 menit itu 240 detik, 2 menit 40 detik itu 160 detik, selisihnya 80. Ia lalu bertanya kalau satu langkah bunda itu lebih panjang, apakah bunda boleh dihitung menang. Pertanyaan ini makin dalam dari yang saya siapkan. Bagaimana menjelaskan perbedaan waktu tempuh dan panjang langkah tanpa menghancurkan semangat anak?",
    comments: [
      { authorId: 77, minutesAgo: 5147, content: "kasih dua nilai bu: waktu dan langkah adalah dua lomba yang berbeda. bunda menang waktu, anak menang antusiasme" },
      { authorId: 268, minutesAgo: 5139, content: "80 detik benar bu. soal langkah: wajar bunda lebih cepat, tapi anak bisa berlatih. itu bukan kalah, itu garis start" },
      { authorId: 63, minutesAgo: 5131, content: "anak meminta dihitung ulang tiga kali, itu tanda ia sedang cinta matematika bu. jangan dibiarkan hilang" },
      { authorId: 24, minutesAgo: 5123, content: "JAWAB SAJA: BUNDA MENANG DETIK, ANAK MENANG KUCING DEPAN POSYANDU. DUA-DUANYA JUARA. NENEK SETUJU" },
    ],
  },
  {
    id: 173,
    authorId: 23,
    minutesAgo: 5185,
    shares: 2,
    content:
      "baterai 3.000 mAh. drain terukur 120 mAh per jam. 3.000 ÷ 120 = 25 jam. jam 01.10, kepala tidak ikut dihitung dalam formula",
    comments: [
      { authorId: 213, minutesAgo: 5177, content: "25 jam itu di idle bre. layar nyala drain 3-4 kali lipat, jangan ngarep ke pagi" },
    ],
  },
  {
    id: 174,
    authorId: 24,
    minutesAgo: 5215,
    shares: 12,
    content:
      "CUCU AKU BERANGKAT SEKOLAH 06.45 DARI RUMAH. JALAN KAKI 10 MENIT SAMPAI GERBANG 06.55. BEL BERBUNYI 07.00. SISA LIMA MENIT BUAT MENGHIRUP UDARA PAGI KAYAK ANAK SEHAT. AKU TANYA, KALAU BERANGKAT 06.40, SISANYA BERAPA. DIA HITUNG: 06.40 + 10 = 06.50, SISA 10 MENIT. DIA BILANG NENEK, 10 MENIT ITU BISA MELIHAT KUCING. AKU PURA2 TAU ITUNGAN GURUNYA, TAPI KUCING ITU ADEM SEKALI. NENEK PUAS HARI INI",
    comments: [
      { authorId: 63, minutesAgo: 5207, content: "06.40 + 10 menit = 06.50, sisa 10 menit. benar semua mbak. kucing juga sepakat" },
      { authorId: 187, minutesAgo: 5199, content: "anak itu memakai perencanaan waktu mbak, jarang di umurnya. jangan dipotong kucingnya, kucing ikut jadwal" },
      { authorId: 74, minutesAgo: 5191, content: "10 menit ekstra itu investasi suasana hati mbak. anak yang tenang masuk kelas lebih siap" },
    ],
  },
  {
    id: 175,
    authorId: 25,
    minutesAgo: 5245,
    shares: 22,
    content:
      "jam kerja magang: masuk 08.30, pulang 17.00. gue itung 8,5 jam. istirahat makan siang 1 jam, jadi 7,5 jam kerja. tp di slip ditulis 8 jam. abes gue bingung, angka 8 itu dari mana. mungkin pulangnya dihitung 17.30 yang mana gue udah di jalan. atau istirahatnya dihitung setengah jam yang mana gue makan 1 jam beneran. gak ada manualnya, gak ada yang jelasin. tanya ke siapa ya tanpa terdengar gue ngitung kasbon",
    comments: [
      { authorId: 236, minutesAgo: 5237, content: "08.30-17.00 itu 8,5 jam di jam. istirahat 1 jam → 7,5 jam. slip 8 jam harus ada sumbernya, tanya format slipnya dulu" },
      { authorId: 144, minutesAgo: 5229, content: "7,5 vs 8 itu 0,5 jam = 30 menit magang. tanya aja ke mentor dengan kalimat: slip tulis 8, hitungan gue 7,5, mana yang dipakai" },
    ],
  },
]
