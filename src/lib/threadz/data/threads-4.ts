import type { ThreadzThread } from "../types"

// PART 4: cuitan 76-100 — ROMBAK V5 (6 Nov 2026): total ganti isi jadi FORUM
// MATEMATIKA (V3 lama masih diary harian). Slot teknis TIDAK berubah:
// id 76-100, authorId mengikuti rotasi audit (13,49,26,34,3,41,19,8,31,47,
// 25,37,10,42,27,14,29,22,48,35,43,18,40,32,4), minutesAgo = 25 + 30*(id-1),
// komentar menyebar 0-6, komentar minutesAgo lebih kecil dari post-nya.
// Aturan lengkap: scripts/rumus-v2.md BAGIAN 1G + FORMULA HITAM 19 POLA.
// Tema file ini: aljabar & persamaan — bentuk BARU.
export const THREADS_PART4: ThreadzThread[] = [
  {
    id: 76,
    authorId: 13,
    minutesAgo: 2275,
    shares: 17,
    content:
      "pliss tolong di cek. PR: 4x − 3 = 21. gue pindahin minus 3 ke kanan jadi plus: 4x = 24. terus dibagi 4: x = 6. cek balik: 4×6 = 24, 24−3 = 21. PAS. tapi guru bilang jawaban temen gue x = 5 juga dikoreksi. emang 4×5 = 20, 20−3 = 17, BUKAN 21. kenapa dia semangat banget ngajuin 5 sih. gue gk ngerti urusan pindah ruas ini benernya aturannya apa, soalnya guru cuma bilang ganti tanda. kenapa harus ganti tanda sih",
    comments: [
      { authorId: 118, minutesAgo: 2267, content: "x = 6 bre. pindah ruas itu ganti tanda karena yang lu kerjain sebenarnya nambah 3 ke dua sisi. 4x − 3 + 3 = 21 + 3. tulisannya yang dipendekin jadi ganti tanda" },
      { authorId: 212, minutesAgo: 2259, content: "cara aman: jangan pindah ruas dulu. tambahin 3 ke kiri dan kanan. hasilnya sama, tapi otak gak ketuker" },
      { authorId: 331, minutesAgo: 2251, content: "6 bre, cek balik lu udah pas. temen lu itu nyantol di 4×5 doang" },
    ],
  },
  {
    id: 77,
    authorId: 49,
    minutesAgo: 2305,
    shares: 12,
    content:
      "ada bos yang nunggu giliran potong rambut, sambil itu dia ajak gue berhitung wkwk. katanya umurnya 3 kali umur anaknya. sepuluh tahun lagi umurnya 2 kali umur anaknya. dia minta gue tebak umurnya. gue jawab asal, dia ketawa terus bilang gak usah jadi tukang cukur, jadi guru aja. sekarang gue yang penasaran banget: itu beneran bisa dihitung gak ya, umur orang yang tinggal nambah doang tiap tahun",
    comments: [
      { authorId: 186, minutesAgo: 2297, content: "bisa bos. sebut umur anak x, umur bos 3x. sepuluh tahun lagi: 3x + 10 = 2(x + 10). dapet x = 10, anak 10, bos 30. cek: sepuluh tahun lagi 40 dan 20, pas dua kali" },
      { authorId: 313, minutesAgo: 2289, content: "bos itu ngajak berhitung doang biar gak ngantuk nunggu wkwk. jawabannya 10 dan 30" },
      { authorId: 118, minutesAgo: 2281, content: "terima tawarannya bos, jadi tukang cukur punya gelar matematika tambahan wkwk" },
    ],
  },
  {
    id: 78,
    authorId: 26,
    minutesAgo: 2335,
    shares: 15,
    content:
      "nah ini buat yang jago itung. kas angkot sore tadi 42 ribu, tarif 3.500. gue itung di kepala 12 penumpang. penumpang terakhir ngambek, katanya dia doang yang nggak dibukain pintu, bukan urusan hitungan. tapi gue tetep nanya: 42.000 ÷ 3.500 itu 12 bener kan bro, atau gue doang yang ngitung sambil nyetir",
    comments: [
      { authorId: 137, minutesAgo: 2327, content: "12 bener bro. 3.500 × 12 = 42.000. pintu mah urusan lain wkwk" },
      { authorId: 186, minutesAgo: 2319, content: "bener. tapi kebiasaan itung di kepala sambil nyetir itu mepet bro, kasih jeda lampu merah dulu" },
    ],
  },
  {
    id: 79,
    authorId: 34,
    minutesAgo: 2365,
    shares: 9,
    content:
      "ronde tiap 40 menit, mulai 21.00. rekan shift tanya ronde jam 00.20 itu ronde keberapa. gue itung: dari 21.00 ke 00.20 itu 3 jam 20 menit = 200 menit. 200 ÷ 40 = 5. jadi ronde pertama 21.00, ronde ke-6 di 00.20. dia bilang ronde ke-5. mohon konfirmasi, logbook mau ditulis. ini penting soalnya minggu lalu ada dua orang yang sama-sama ngepos ronde 4",
    comments: [
      { authorId: 258, minutesAgo: 2357, content: "kalau 21.00 dihitung ronde pertama, 00.20 memang ronde ke-6. 200 ÷ 40 = 5 jeda, ditambah ronde awal" },
      { authorId: 199, minutesAgo: 2349, content: "ke-6 pak. dua orang ngepos ronde 4 minggu lalu itu karena ada yang mulai itung dari nol" },
      { authorId: 272, minutesAgo: 2341, content: "tulis jam di logbook, jangan cuma nomor ronde. nomor bisa gacak kalau titik mulainya gak sama" },
    ],
  },
  {
    id: 80,
    authorId: 3,
    minutesAgo: 2395,
    shares: 31,
    content:
      "Hari ini Ananda kelas 5 menemukan hal yang membuatnya berhenti lama di buku: 5x = 5, jawabannya x = 1. 5x = 0, jawabannya x = 0. Lalu ia bertanya: kalau 5x = −5, apakah x boleh negatif? Ia berkata angka minus itu untuk suhu dan utang, bukan untuk kotak misteri. Saya ingin menjawab dengan benar dan jujur bahwa aljabar memang mengenal bilangan negatif, tetapi saya sedang mencari pengantar yang terasa wajar bagi si anak, bukan sekadar aturan. Ada usulan cara yang pernah berhasil di kelas Anda?",
    comments: [
      { authorId: 258, minutesAgo: 2387, content: "kotak misteri bisa diisi utang juga, bu. 5 kotak masing-masing berisi utang 1, totalnya utang 5. jadi x = −1" },
      { authorId: 268, minutesAgo: 2379, content: "keluarkan soal 5x = 5 sampai 5x = −5 berurutan di satu garis. anak akan melihat jawabannya turun rapi: 1, 0, −1" },
      { authorId: 336, minutesAgo: 2371, content: "suhu juga bisa bu: 5 kantong es masing-masing menurunkan suhu 1 derajat, efek total −5. minus masuk lewat benda" },
      { authorId: 143, minutesAgo: 2364, content: "ananda itu bertanya tepat sekali bu. tahap ini penting, jangan dijawab nanti saja" },
    ],
  },
  {
    id: 81,
    authorId: 41,
    minutesAgo: 2425,
    shares: 16,
    content:
      "paket 4 kg. ongkir: 8.000 untuk kg pertama, 2.000 tiap kg berikut. gue itung 8.000 + 3 × 2.000 = 14.000. struknya 15.000. kurang 1.000. pelanggan udah bilang gak mau nyumbang. gue buka rincian: ada baris packing 1.000. jadi bukan itungan ongkir yang salah, ada biaya bungkus. tanya buat kurir lain: biaya packing gini wajar gak dicantumin pas awal? gue males ganti urusan pelanggan",
    comments: [
      { authorId: 144, minutesAgo: 2417, content: "wajar kalau dicantumin bro, yang bikin emosi itu nongol belakangan. mepet 1.000 doang tapi kerasa" },
      { authorId: 187, minutesAgo: 2409, content: "biaya tambahan di akhir itu sumber komplain nomor satu bro. minta outlet tulis di nota awal" },
    ],
  },
  {
    id: 82,
    authorId: 19,
    minutesAgo: 2455,
    shares: 18,
    content:
      "bos, pembeli ambil 3 voucher 10 ribu. total 30 ribu. dia bayar 50 ribu, gue balikin 20 ribu. dia ngeyel minta 25 ribu, alasannya voucher 10 ribu dibeli 10 ribu dikurangin diskon... gue gak dapet alasan lengkapnya, yang jelas dia itung 50 − 25 = 25. gue cek dua kali: 3 × 10.000 = 30.000. 50.000 − 30.000 = 20.000. ada yang salah di gue gak bos, atau dia yang nitip kekacauan sendiri",
    comments: [
      { authorId: 240, minutesAgo: 2447, content: "gue yang benar bos. 50 − 30 = 20. 25 itu angka dari mana-mana" },
      { authorId: 258, minutesAgo: 2439, content: "tulis 3 × 10.000 di kertas kecil di depan dia. kalau angka sudah kelihatan, kekacauan hilang sendiri" },
      { authorId: 199, minutesAgo: 2431, content: "voucher 10 ribu diskon gak masuk kios bos, itu urusan operator. pegang struk, tenang" },
    ],
  },
  {
    id: 83,
    authorId: 8,
    minutesAgo: 2485,
    shares: 6,
    content:
      "giliran jaga 3 orang, tiap giliran 2 jam, mulai 20.00.\n20.00 gue, 22.00 dr. Wulan, 00.00 dr. Bayu.\n02.00 gue lagi, 04.00 Wulan, 06.00 Bayu.\nronde ke-6 pas jam 06.00. siklusnya balik tiap 6 jam.\nyang nanya buat jadwal besok: bener gak gue duluan lagi di 08.00",
    comments: [
      { authorId: 258, minutesAgo: 2477, content: "bener. 3 giliran × 2 jam = 6 jam satu putaran. 08.00 itu ronde ke-7, kembali ke awal yaitu Anda" },
    ],
  },
  {
    id: 84,
    authorId: 31,
    minutesAgo: 2515,
    shares: 13,
    content:
      "promo hari ini: beli 2 sabun hemat 3.000. pelanggan ambil 6, terus protes karena dia menghitung hemat 18.000, padahal di struk hematnya 9.000. dia menghitung 6 × 3.000, satu per satu dikali. saya cek: 6 sabun itu 3 pasang, 3 × 3.000 = 9.000. dia diam sejenak, lalu bilang struk yang benar. pertanyaan saya ke sesama kasir: ada cara ngejelasin beda harga per pasang vs per biji yang gak bikin pelanggan berasa bodoh?",
    comments: [
      { authorId: 84, minutesAgo: 2507, content: "sama, saya sering kena. tunjukin aja struknya per pasang: pasang 1, pasang 2, pasang 3. hitungan mereka masuk sendiri" },
      { authorId: 205, minutesAgo: 2499, content: "jangan pakai kata salah. pakai: biar lebih jelas, saya rinci per pasang ya. pelanggan tetap malu wkwk tapi sopan" },
    ],
  },
  {
    id: 85,
    authorId: 47,
    minutesAgo: 2545,
    shares: 22,
    content:
      "Nasabah datang mau menarik 2.000.000 untuk biaya hajatan. Buku tabungannya memang cukup. Ia membawa uang tunai 30 lembar lima puluh ribu untuk menambah setoran supaya pecahannya rapi. Saya hitung 30 × 50.000 = 1.500.000, dan ia menganggap dengan itu sudah tercapai 2.000.000. Kurangnya 500.000, yaitu 5 lembar seratus ribu. Ia terkejut kok bisa kurang 5 lembar, katanya sudah bawa tumpukan tinggi. Yang ingin saya tanyakan ke rekan: apakah ada urutan kalimat yang menolong nasabah memahami selisih lembar tanpa merasa dihitung hina?",
    comments: [
      { authorId: 84, minutesAgo: 2537, content: "mulai dari yang dia punya: 1.500.000. tulis besar-besar. terus tanya, ke 2.000.000 kurang berapa. biar dia sendiri yang menjawab 500.000" },
      { authorId: 262, minutesAgo: 2529, content: "tumpukan tinggi itu feeling, bukan angka pak. nasabah tua percaya menghitung bersama lebih daripada dihitung" },
      { authorId: 205, minutesAgo: 2521, content: "tawarkan 2 lembar 250 ribu kalau ada pak, kadang urusan lembar beres di bentuk lain" },
    ],
  },
  {
    id: 86,
    authorId: 25,
    minutesAgo: 2575,
    shares: 28,
    content:
      "gaji magang per hari 60 ribu, masuk 22 hari. gue itung 60 × 22 = 1.320 ribu. slip yang keluar 1.290 ribu. selisih 30 ribu, yaitu tepat satu hari. ternyata hari yang gue sakit tetap dihitung masuk di absen, tapi di hitungan gaji jadi bolong. tp gak ada pengumuman, abes gue nanya ke apa ya. ke HR langsung kerasa melawan, ke mentor ditindas ke HR lagi. diamdoang rugi 30 ribu yang bukan tanggungan gue",
    comments: [
      { authorId: 236, minutesAgo: 2567, content: "nanya ke mentor dulu aja pakai kalimat tanya: mas, di slip 22 hari tapi hitungannya 21, ini pasal apa ya. bukan tuduhan, cuma nanya" },
      { authorId: 144, minutesAgo: 2559, content: "30 ribu itu nasi 5 hari magang. tanya. HR juga manusia" },
      { authorId: 318, minutesAgo: 2551, content: "cek dulu rule sakit di kontrak magang. kalau sakit memang gak dibayar, berarti slip yang benar dan absen yang perlu dikoreksi" },
    ],
  },
  {
    id: 87,
    authorId: 37,
    minutesAgo: 2605,
    shares: 10,
    content:
      "Tetangga sebelah menjual permen di depan rumah dengan harga 1.500 untuk 3 biji, jadi 500 per biji. Tadi sore ada pembeli minta tambah 2 biji setelah ambil 3. Anak itu menjawab 2 biji 1.500, lalu bapaknya mengingatkan dari jendela: 2 biji itu 1.000. Anak menyesal sebentar, mengulang hitungannya, dan akhirnya mengembalikan 500 ke pembeli. Yang membuat saya memperhatikan ini sejenak: anak itu menghitung ulang sebelum bapaknya selesai bicara. Adakah di antara warga sini yang menemukan anak belajar angka lewat jualan begini? Saya penasaran apakah ini jalur yang baik untuk kelas 4",
    comments: [
      { authorId: 258, minutesAgo: 2597, content: "jualan itu guru terbaik untuk hitung cepat pak. kesalahan 500 tadi murah dibanding pelajaran yang didapat" },
      { authorId: 268, minutesAgo: 2589, content: "anak yang mengulang hitungan sendiri sebelum dikoreksi itu tanda pemahaman sudah berjalan pak" },
      { authorId: 199, minutesAgo: 2581, content: "harga satuan 500 biji, jadi 2 biji 1.000. anak itu akan hafal beginian seumur hidup" },
    ],
  },
  {
    id: 88,
    authorId: 10,
    minutesAgo: 2635,
    shares: 29,
    content:
      "SPLDV DI KELAS HARI INI JADI GIMANA-GIMANAAN WKWKWK. soal: 2x + y = 10 dan x − y = 2. gue jumlahin dua persamaan langsung: 3x = 12, jadi x = 4, y = 2. guru bilang bener. TAPI TEMEN GUE NGOTOT GUE SALAH, KATANYA HARUSNYA SUBSTITUSI DULU BARU JUMLAH, GABISA LANGSUNG. terus dia lihat kunci: bener. DIA MASIH NGEYEL BILANG KEBETULAN. cek: 2(4) + 2 = 10 ✓ dan 4 − 2 = 2 ✓. GABET, dua-duanya masuk. kenapa ya ada orang menganggap langkah pendek sebagai kebetulan",
    comments: [
      { authorId: 131, minutesAgo: 2627, content: "langsung jumlah itu sah bre. aturannya boleh jumlah dua persamaan asal variabel yang satu habis. y lu emang hilang pas dijumlah" },
      { authorId: 212, minutesAgo: 2619, content: "kebetulan gak bisa lolos cek balik dua persamaan sekaligus bre. jawaban lu udah digenggam kunci" },
      { authorId: 143, minutesAgo: 2611, content: "substitusi sama eliminasi itu dua pintu ke rumah yang sama. yang penting nyampe" },
      { authorId: 313, minutesAgo: 2603, content: "tambahin ke temen: coba dia substitusi dulu, hasilnya tetap x = 4, y = 2. biar adem" },
    ],
  },
  {
    id: 89,
    authorId: 42,
    minutesAgo: 2665,
    shares: 20,
    content:
      "anak-anak kos rebutan hitung bon warung: 3 mie instan + 2 telur = 21.000, dan 1 mie instan + 2 telur = 13.000. A bilang telur 6.500 masing-masing, B bilang mie 7.000. aku dengar dari dapur semua salah, terus aku hitung pelan: selisih kedua baris itu 2 mie = 8.000, jadi mie 4.000. telurnya: 13.000 − 4.000 = 9.000, dibagi 2 = 4.500. cek: 3 × 4.000 + 2 × 4.500 = 21.000. PAS. anak-anak masih ngeyel soalnya mereka udah makan duluan wkwk. kalian bilang mana, bon warung atau anak kos",
    comments: [
      { authorId: 44, minutesAgo: 2657, content: "bon warung menang bu wkwk. mie 4.000 telur 4.500. anak kos itung sambil lapar, hasilnya selalu melar" },
      { authorId: 152, minutesAgo: 2649, content: "selisih dua baris itu jurus ampuh bu. yang beda antara bon 1 dan bon 2 cuma 2 mie, jadi 8.000 bagi 2 = 4.000 per mie" },
      { authorId: 60, minutesAgo: 2641, content: "bunda bisa jelasin ke anak-anak pakai cara ganti telur: keduanya punya 2 telur, telurnya saling batal, tinggal beda mie" },
      { authorId: 143, minutesAgo: 2633, content: "21.000 dan 13.000. selisihnya 8.000. itu 2 mie. sudah terlalu jelas untuk diperdebatkan wkwk" },
    ],
  },
  {
    id: 90,
    authorId: 27,
    minutesAgo: 2695,
    shares: 14,
    content:
      "empat palet, masing-masing bakal diisi 60 dus. total 240. ternyata ada 8 dus rusak dari kirim tadi pagi, kepala gudang menyuruh kerusakannya dibagi rata ke 4 palet supaya invoice per palet tetap jelas. rekan gue bilang tiap palet jadi 58 dus bener, tapi dia itungnya lewat pengurangan langsung dari tiap palet. gue itung lewat total: 240 − 8 = 232, dibagi 4 = 58. hasilnya sama. pertanyaan gue: cara mana yang lebih aman buat laporan, itung per palet atau itung total dulu baru bagi?",
    comments: [
      { authorId: 240, minutesAgo: 2687, content: "total dulu baru bagi pak. satu sumber angka, gak ada kesempatan salah kurang dua kali" },
      { authorId: 205, minutesAgo: 2679, content: "per palet itu cepat kalau rusaknya emang merata. tapi total dulu lebih rapi di laporan audit" },
      { authorId: 272, minutesAgo: 2671, content: "catat juga 8 dus rusak itu di nota. 232 itu angka yang nanti ditagih, jangan sampai 240 yang dikira sampai semua" },
    ],
  },
  {
    id: 91,
    authorId: 14,
    minutesAgo: 2725,
    shares: 7,
    content:
      "om bayar 11 ribu di pos. tarif jam pertama 3, berikutnya 2. itung gue: 3 + 4×2 = 11. lima jam.\nom bilang harusnya tujuh jam. struknya hilang. sisa gue: nanya ke kalian, 11 ribu itu lima jam kan, bukan tujuh.",
    comments: [
      { authorId: 199, minutesAgo: 2716, content: "lima jam om. 3 ribu jam pertama + 8 ribu untuk 4 jam berikutnya. tujuh jam itu 15 ribu" },
      { authorId: 240, minutesAgo: 2707, content: "bener, tujuh jam = 3 + 6 × 2 = 15. om salah inget tarif atau salah inget jam dateng" },
    ],
  },
  {
    id: 92,
    authorId: 29,
    minutesAgo: 2755,
    shares: 11,
    content:
      "tiga kotak baut total 84 butir. om tanya satu kotak berapa, gue jawab 28. bener kan 84 ÷ 3. terus om pesen 2 kotak lagi buat stok, totalnya baut sekarang jadi berapa? gue hitung 28 × 5 = 140. gue bingung sendiri kok om doang yang nanya hal gini pas gue lagi pegang mesin",
    comments: [
      { authorId: 186, minutesAgo: 2747, content: "140 bener om muda. 84 + 56 = 140, atau 28 × 5. dua-duanya sama" },
      { authorId: 240, minutesAgo: 2739, content: "28 × 5 pas. pegang mesin sambil itung itu jangan, taruh hitungan di kertas dulu wkwk" },
    ],
  },
  {
    id: 93,
    authorId: 22,
    minutesAgo: 2785,
    shares: 19,
    content:
      "Anakku latihan hitung di tangga masjid tadi sore. Dia berdiri di anak tangga ke-3, lalu naik sampai ke-8. Aku tanya naik berapa anak tangga. Dia jawab 6, karena dari 3 ke 8 dia menyebut: 3, 4, 5, 6, 7, 8. Kakaknya bilang 5, karena 8 − 3. Mereka berdua sama-sama percaya diri, dan aku berdiri di tengah sambil memegang tas. Seharusnya aku berpihak ke mana, dan bagaimana menjelaskan beda menghitung anak tangga dengan menghitung langkah tanpa bikin salah satunya menangis?",
    comments: [
      { authorId: 77, minutesAgo: 2776, content: "kakak benar bu, naiknya 5 langkah. anak kecil sering menghitung titik awal ikut, itu biasa di umurnya" },
      { authorId: 268, minutesAgo: 2767, content: "biar damai bu, tunjukin jari: dari 3 ke 8 cukup hitung 4, 5, 6, 7, 8. jari yang ditekuk berjumlah 5" },
      { authorId: 63, minutesAgo: 2758, content: "bedanya: 6 itu banyak anak tangga yang dia injak termasuk yang pertama, 5 itu langkah naiknya. dua-duanya ada maknanya" },
      { authorId: 143, minutesAgo: 2749, content: "tangga masjid itu guru matematika gratis bu wkwk. dua-duanya gak usah nangis" },
    ],
  },
  {
    id: 94,
    authorId: 48,
    minutesAgo: 2815,
    shares: 5,
    content:
      "Rak majalah di pojok memakai aturan sederhana: baris pertama 20 buku, tiap baris di bawahnya menambah 3. Baris kesepuluh memuat 20 + 3 × 9 = 47. Tidak ada yang menanyakan hal ini kecuali murid magang sore tadi. Ia lalu diam lama, menatap rak, dan berkata pola ini seperti menaiki tangga yang langkahnya rapi. Kami tidak melanjutkan percakapan, dan sore berakhir tenang begitu saja.",
    comments: [
      { authorId: 336, minutesAgo: 2806, content: "murid magang itu menemukan barisan aritmetika pak. tangga yang langkahnya rapi, kalimat yang tepat" },
      { authorId: 258, minutesAgo: 2797, content: "baris pertama 20, langkah 3. baris ke-10 = 20 + 27 = 47. rak itu rapi sekali pak" },
    ],
  },
  {
    id: 95,
    authorId: 35,
    minutesAgo: 2845,
    shares: 12,
    content:
      "kok ya x + x hasilnya 2x, tapi x × x hasilnya x². duanya sama-sama dobel-kan? kenapa satu jadi angka depan, satu jadi pangkat di atas. guru bilang satu nambah satu berlipat. nambah dan berlipat itu bedanya apa, gak jelas. mikirnya sampe lupa lihat lampu merah tadi wkwk",
    comments: [
      { authorId: 227, minutesAgo: 2837, content: "nambah = geser. 3 + 3 = 6, maju sekali. berlipat = lompat jauh. 3 × 3 = 9. nambah 3 sekali, kali 3 itu nambah 3 sebanyak 3 kali" },
      { authorId: 118, minutesAgo: 2829, content: "coba angka aja dulu: 4 + 4 = 8 (doel), 4 × 4 = 16 (pangkat dua). dua dunia beda" },
      { authorId: 313, minutesAgo: 2821, content: "x² itu x dikali x bre, bukan x ditambah x. 2x itu x ditambah x. bentuknya beda karena tindakannya beda" },
    ],
  },
  {
    id: 96,
    authorId: 43,
    minutesAgo: 2875,
    shares: 8,
    content:
      "target harian 1.000 unit. shift pagi nyumbang 380, shift siang 350. kertas target gue ketok: 380 + 350 = 730. sisa buat shift malam 270. operator malam langsung bilang targetnya dobel beban dibanding shift siang. gue cek: 270 vs 350, malamnya justru lebih ringan 80 unit. tapi dia ngotot karena jumlah orangnya lebih dikit. pertanyaan gue: sisa target begini wajar gak dihitung per total, atau memang harus dibagi jumlah orang dulu baru dibandingin",
    comments: [
      { authorId: 240, minutesAgo: 2867, content: "dibagi jumlah orang dulu baru jujur. beban per orang itu yang kerasa di tangan, bukan total" },
      { authorId: 272, minutesAgo: 2859, content: "kasi angka: kalau pagi 10 orang, 380 ÷ 10 = 38 per orang. malam 5 orang, 270 ÷ 5 = 54 per orang. di situlah komplainnya berdiri" },
      { authorId: 236, minutesAgo: 2851, content: "target total itu buat laporan, beban per orang itu buat manusia. dua duanya harus dibahas" },
    ],
  },
  {
    id: 97,
    authorId: 18,
    minutesAgo: 2905,
    shares: 21,
    content:
      "om-om, jelasin ke gue cara ngitungnya. peti mangga 5 lapis, tiap lapis 8 baris... eh salah, tiap lapis isinya 8. gue itung 5 × 8 = 40. anak magang nanya kok bisa langsung kali, bukannya 8 + 8 + 8 + 8 + 8. gue jawab sama aja, kali itu nambah yang banyak. dia bilang kalau sama aja kenapa gurunya gak nulis tambah kelima kali. gue bingung cara jelasin, tolong om yang sering ngurus kuli kasih kalimat singkatnya",
    comments: [
      { authorId: 186, minutesAgo: 2896, content: "kasih om: 8 + 8 = 16, tambah 8 = 24, tambah lagi = 32, terakhir 40. ganti tangan, lalu kasih kalkulator: 5 × 8 = 40. dia akan pilih yang cepet" },
      { authorId: 240, minutesAgo: 2887, content: "kali itu tanda tangan dari nambah berulang om. sama isi, beda jalan" },
      { authorId: 137, minutesAgo: 2878, content: "anak magang tuh udah mikir bener, cuma belum lihat jalan pintasnya. om udah jelasin tepat kok" },
    ],
  },
  {
    id: 98,
    authorId: 40,
    minutesAgo: 2935,
    shares: 13,
    content:
      "cucu aku itung lubang tanam cabe: lahan 2 meter, jarak antar lubang 25 cm. dia bilang 200 ÷ 25 = 8, jadi 8 lubang per baris, empat baris jadi 32. aku ikut ngeyel kok kayaknya kurang satu di ujung, terus aku hitung pelan pake benang: 25, 50, 75, 100, 125, 150, 175, 200. DELAPAN TITIK TENGAH, tapi di ujung nol sama di ujung dua ratus juga ada lubang. JADI SEMBILAN PER BARIS, 36 SEMUA. aku dan cucu sama-sama gak percaya. kenapa ya dibagi hasilnya 8 tapi lubangnya 9, ini namanya apa",
    comments: [
      { authorId: 143, minutesAgo: 2926, content: "namanya masalah pagar bu. 8 itu banyaknya jarak, bukan banyaknya lubang. lubang = jarak + 1 kalau ujung dua-duanya ditanam" },
      { authorId: 258, minutesAgo: 2917, content: "cucu tidak salah bu, dia menghitung jarak. nenek juga tidak salah, nenek menghitung lubang. dua-duanya benar di dunia masing-masing" },
      { authorId: 199, minutesAgo: 2908, content: "biar gampang ke bayangin bu: 8 jarak itu seperti 8 tangga, tapi tangga yang menyambung butuh 9 pijakan" },
    ],
  },
  {
    id: 99,
    authorId: 32,
    minutesAgo: 2965,
    shares: 12,
    content:
      "jeruk gue 18 ribu untuk 2 kilo. pembeli minta 1,5 kilo. gue itung: 18 ÷ 2 = 9 ribu per kilo, jadi 1,5 × 9 = 13,5 ribu. dia ngotot 12 ribu, katanya 18 dikurang setengah kilo 6 ribu. teh jelasin, 6 ribu itu satu kilo lain, bukan setengah. dia tetap nggak paham, terus akhirnya dibayar 12 ribu juga, teh tanggung 1,5 ribu. pertanyaan teh: cara ngomongnya gimana ya biar orang paham setengah kilo itu 4,5 ribu bukan 6, tanpa kerasa ngeyel? teh capek klakson",
    comments: [
      { authorId: 102, minutesAgo: 2957, content: "teh, pakai uang: 2 kilo itu 18 ribu. satu kilo 9 ribu. setengah kilo 4,5 ribu. 9 + 4,5 = 13,5. kasih dia tiga koin biar kelihatan" },
      { authorId: 84, minutesAgo: 2949, content: "harga per kilo dulu teh, itu kuncinya. kalau langsung dari 2 kilo ke 1,5 kilo, orang sering ngira selisihnya 0,5 kilo" },
      { authorId: 15, minutesAgo: 2941, content: "teh, tulis aja di kardus: 1 kilo = 9.000. tanggungan 1,5 ribu itu catat buat pelajaran wkwk" },
    ],
  },
  {
    id: 100,
    authorId: 4,
    minutesAgo: 2995,
    shares: 3,
    content:
      "Lift gedung datang tiap 90 detik sekali, ditambah waktu buka-tutup pintu sekitar 30 detik. Jam 08.47 saya menunggu di lantai 6. Sampai 08.52, sudah tiga kali pintu terbuka dan tiga kali saya gagal masuk karena penuh. Empat siklus mungkin dalam 5 menit itu angka di atas kertas. Laporan yang benar: jam 08.52 saya memilih tangga. Tidak ada yang perlu dihitung lagi, kecuali kalori.",
    comments: [
      { authorId: 192, minutesAgo: 2987, content: "3 siklus × (90 + 30) = 360 detik = 6 menit. jam 08.52 masih sebelum siklus keempat, hitungan pak tepat" },
      { authorId: 258, minutesAgo: 2979, content: "tangga di lantai 6 itu keputusan yang menyelamatkan pagi pak" },
    ],
  },
]
