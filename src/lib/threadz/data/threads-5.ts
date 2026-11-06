import type { ThreadzThread } from "../types"

// PART 5: cuitan 101-125 — ROMBAK V5 (6 Nov 2026): total ganti isi jadi FORUM
// MATEMATIKA (V3 lama masih diary harian). Slot teknis TIDAK berubah:
// id 101-125, authorId 1-25 urut, minutesAgo = 25 + 30*(id-1), komentar
// menyebar 0-6, komentar minutesAgo lebih kecil dari post-nya.
// Aturan lengkap: scripts/rumus-v2.md BAGIAN 1G + FORMULA HITAM 19 POLA.
// Tema file ini: statistika & peluang — bentuk BARU.
export const THREADS_PART5: ThreadzThread[] = [
  {
    id: 101,
    authorId: 1,
    minutesAgo: 3025,
    shares: 20,
    content:
      "Alhamdulillah nilai anak naik terus tapi dia maunya lebih. Tiga ulangan terakhir: 70, 75, 80. Dia bertanya kalau ulangan keempat harus berapa supaya rata-ratanya 78. Papanya bilang 78 saja sudah bagus, anaknya ngotot mau hitung. Kami hitung bersama: total 70 + 75 + 80 = 225, supaya rata-rata 78 dalam 4 ulangan harus total 312, jadi ulangan keempatnya 87. Dia menatap angka 87 itu lama, terus bilang besok belajar lebih lama. Yang ingin saya tanya: 87 itu benar ya hitungannya, jangan-jangan kami berdua salah sama-sama",
    comments: [
      { authorId: 268, minutesAgo: 3017, content: "benar kak, 312 − 225 = 87. anak itu menargetkan dirinya sendiri, itu kebiasaan yang baik" },
      { authorId: 74, minutesAgo: 3009, content: "87 benar. cek baliknya: 225 + 87 = 312, dibagi 4 = 78. dua-duanya sudah dipegang angka" },
      { authorId: 59, minutesAgo: 3001, content: "kak, anak bertanya begitu sebelum ujian itu langka. jangan diganggu, dia sedang menyusun rencana" },
    ],
  },
  {
    id: 102,
    authorId: 2,
    minutesAgo: 3055,
    shares: 27,
    content:
      "STATISTIKA KAMAR 6 ORANG DAN GUE GAK PUAS SAMA GURU. nilai mat: 60, 65, 70, 75, 80, 90. gue hitung mean: total 440 dibagi 6 = 73,3. median: 70 dan 75 dirata = 72,5. BUKAN APA-APA KALAU ANGKANYA BEDA TIPIS, YANG GUE BINGUNG KENAPA HARUS ADA DUA CARA. gurunya bilang biar adil. ADIL ITU ALASAN ATAU HIBURAN.\nyaudah gue nanya ke sini: kapan mean bohong dan median lebih jujur, kalo ada yang bisa jelasin pake contoh nyata makasih banyak deh",
    comments: [
      { authorId: 212, minutesAgo: 3047, content: "contoh nyata: gaji kantor 9 orang 4 juta, satu bos 100 juta. mean jadi 13,6 juta, tidak ada yang gaji segitu. median tetap 4 juta. satu angka gede bisa menyeret mean" },
      { authorId: 227, minutesAgo: 3039, content: "mean bohong kalau ada pencilan bre. median gak peduli sebesar apa angka ekstrem, dia cuma lihat yang tengah" },
      { authorId: 209, minutesAgo: 3031, content: "mean itu tergantung semua angka, median cuma posisi. makanya berita gaji dan harga rumah pakai median" },
      { authorId: 313, minutesAgo: 3023, content: "440 ÷ 6 = 73,3 bre, dan (70+75) ÷ 2 = 72,5. itungan lu rapi, tinggal pilih ceritanya" },
    ],
  },
  {
    id: 103,
    authorId: 3,
    minutesAgo: 3085,
    shares: 24,
    content:
      "Kelas saya berisi 28 murid. Ketika nilai diurutkan dari terkecil, median terletak di antara urutan ke-14 dan ke-15, sehingga keduanya harus dirata-rata. Murid ke-14 bertanya hari ini: kenapa saya tidak jadi median saja, saya satu-satunya di tengah. Saya menjawab bahwa jumlah murid yang genap membuat posisi tengah terbelah dua, tetapi ia bertanya lagi: kalau begitu kenapa sekolah tidak mengatur kelas menjadi 29 orang supaya median tunggal? Saya tertawa, lalu tersadar bahwa pertanyaan itu sungguh menarik. Apakah ada pengajar yang pernah menjelaskan posisi median dengan cara yang tidak membuat murid tengah merasa diabaikan?",
    comments: [
      { authorId: 258, minutesAgo: 3077, content: "murid ke-14 dan ke-15 adalah dua penjaga pintu median bu. keduanya sama penting, tanpa salah satu, pintu tidak ada" },
      { authorId: 268, minutesAgo: 3069, content: "anjurkan kelompok berpasangan bu: murid ke-1 dengan ke-28, ke-2 dengan ke-27, dan seterusnya. yang bertemu di tengah adalah ke-14 dan ke-15" },
      { authorId: 39, minutesAgo: 3061, content: "kelas 29 orang tidak menjamin adil bu, hanya menggeser persoalan. yang penting murid memahami bahwa median adalah posisi, bukan jabatan" },
    ],
  },
  {
    id: 104,
    authorId: 4,
    minutesAgo: 3115,
    shares: 3,
    content:
      "Absen bulan lalu: 9 hari kerja, hadir 8. Persen 88,9. HRD menulis 89. Rekan menanyakan mana yang benar. Jawabannya tergantung berapa digit yang diminta laporan. Saya memilih tidak memperpanjang diskusi jam istirahat.",
    comments: [],
  },
  {
    id: 105,
    authorId: 5,
    minutesAgo: 3145,
    shares: 36,
    content:
      "warung gue pasang roda undian 8 bagian, 2 bagian diantaranya hadiah. jadi peluang dapat hadiah 2/8 = 1/4. kemarin ada yang muter 20 kali, dapet hadiah 6 kali. dia curiga roda gue diatur. gue itung: 1/4 dari 20 itu 5. dapet 6 itu lebih satu. SEKARANG GUE YANG CURIGA, emang gak diatur kan? atau ada kira-kira batas wajar dapet hadiah berapa dari 20 muter, biar kalau ada yang ngeyel gue punya jawaban selain teriak",
    comments: [
      { authorId: 262, minutesAgo: 3137, content: "harapan dari 20 putaran itu 5, tapi hasil nyata boleh naik-turun. dapat 6 masih sangat wajar. yang mencurigakan kalau 20 putaran dapat 15" },
      { authorId: 118, minutesAgo: 3129, content: "kak, coba catat 100 putaran. kalau hasilnya mendekati 25, roda kakak jujur. 20 putaran itu terlalu pendek buat vonis" },
      { authorId: 84, minutesAgo: 3121, content: "peluang itu ramalan jangka panjang kak, bukan janji tiap putaran. 6 dari 20 itu hoki pembeli, bukan magis roda" },
      { authorId: 60, minutesAgo: 3113, content: "jawab aja pakai selera: lebih 1 hadiah = satu kotak es teh gratis. pembeli seneng, warung gak rugi berapa" },
    ],
  },
  {
    id: 106,
    authorId: 6,
    minutesAgo: 3175,
    shares: 4,
    content:
      "gue curiga dadu gue cacat. peluang keluar 6 itu kan 1 dari 6, terus gue lempar 10 kali gak sekali pun keluar 6. sepuluh kali bre. gue cek dadunya bulat-bulat gak ada yang aneh. terus temen kos bilang 1 dari 6 itu gak janji tiap 6 lempar. gue gak ngerti. kalau gak janji, buat apa ditulis 1/6? ada yang bisa jelasin gak pake istilah asing",
    comments: [
      { authorId: 219, minutesAgo: 3167, content: "1/6 itu perkiraan kalau dilempar BANYAK kali bre. 10 kali itu kebanyakan, bisa aja gak muncul sama sekali. coba 60 kali, kira-kira 10 kali muncul 6, tapi juga gak pasti pas" },
      { authorId: 138, minutesAgo: 3159, content: "dadu gak ngerti janji bre wkwk. peluang itu ramalan rata-rata, bukan kontrak" },
      { authorId: 118, minutesAgo: 3151, content: "paling gampang: 10 lempar itu cuma cuplikan pendek. film 10 detik gak bisa dinilai bagus jeleknya" },
      { authorId: 44, minutesAgo: 3143, content: "dadunya cacat atau bukan, 10 lempar belum cukup buat buka kasus wkwk" },
    ],
  },
  {
    id: 107,
    authorId: 7,
    minutesAgo: 3205,
    shares: 32,
    content:
      "skripsi bab empat: dari 40 responden, 12 memakai fitur utama. gue hitung 12 ÷ 40 = 0,3 = 30%. pembimbing minta diagram lingkaran. gue baca-baca cara bikin: persen × 360 derajat. jadi 0,3 × 360 = 108 derajat buat irisan fitur utama. sisa 252 derajat untuk sisanya. TERUS GUE MIKIR, 108 itu angka yang aneh, kok bukan 90 ato 120, jadi gue cek ulang dua kali dan tetap 108. 🙃 bener kan ya 30% itu memang 108 derajat di lingkaran, gue gak mau salah di gambar paling gampang",
    comments: [
      { authorId: 212, minutesAgo: 3197, content: "bener kak, 30% × 360° = 108°. angka gak harus bulat cantik, yang penting proporsinya pas" },
      { authorId: 209, minutesAgo: 3189, content: "cek cepet kak: 10% = 36°, jadi 30% = 3 × 36 = 108°. cocok" },
      { authorId: 154, minutesAgo: 3181, content: "252° sisanya juga tepat kak (70% × 360). diagramnya aman, lanjut ke pembahasan" },
      { authorId: 143, minutesAgo: 3173, content: "108 itu derajat segi lima beraturan juga kak, kebetulan cantik kok 🙃" },
    ],
  },
  {
    id: 108,
    authorId: 8,
    minutesAgo: 3235,
    shares: 7,
    content:
      "suhu pasien 6 jam terakhir:\n37,0 / 37,5 / 38,0 / 37,5 / 37,0 / 36,5\njumlah 223,5, dibagi 6 = 37,25.\nrata-rata dibawah 37,5. grafik boleh turun ya dokter bilang.\nyang gue nanya: 37,25 itu ditulis apa di chart, dua angka di belakang boleh?",
    comments: [
      { authorId: 240, minutesAgo: 3227, content: "boleh, chart biasanya satu-dua desimal. 37,25 sah. tren turunnya yang lebih penting dari desimalnya" },
      { authorId: 258, minutesAgo: 3219, content: "223,5 ÷ 6 = 37,25 benar. tulis 37,3 kalau chart satu desimal, ikut aturan unit" },
    ],
  },
  {
    id: 109,
    authorId: 9,
    minutesAgo: 3265,
    shares: 15,
    content:
      "lu pernah itung order batal gak bang. hari hujan: 10 order, 3 batal. gue itung 3 dari 10. temen gue bilang 30% itu kek gede banget, gue bilang hari hujan emang begitu. nah gue penasaran, berapa persen batal yang dianggap wajar buat ojol, dan batal seperti ini masuk hitungan app gak ya. gue gak mau ngeluh ke platform terus nanti dicap penakut",
    comments: [
      { authorId: 137, minutesAgo: 3257, content: "hari hujan 30% batal itu biasa bang. hari cerah biasanya jauh dibawah itu" },
      { authorId: 186, minutesAgo: 3249, content: "pelanggan yang batal tidak merugikan rating lu bang, cuma bikin emosi. yang bahaya lu yang batal duluan" },
      { authorId: 154, minutesAgo: 3241, content: "catat bang tiap hari hujan. kalau rutin 30%, lu bisa atur jam ngetem lu sendiri, banyak untungnya" },
    ],
  },
  {
    id: 110,
    authorId: 10,
    minutesAgo: 3295,
    shares: 25,
    content:
      "PR DIAGRAM BATANG NYARIS HABISIN NYAWA GUE WKWKWK. nilai kelas, sumbu datar = nilai, sumbu tegak = jumlah orang. soalnya minta modus. gue jawab 80 karena batangnya paling tinggi, TERNYATA BATANG TERTINGGI ITU DI ATAS ANGKA 80 DI SUMBU DATAR, BUKAN NILAI 80 DOANG, SOALNYA NILAI 80 SAMA 85 DIGABUNG SATU BATANG. guru bilang hati-hati baca sumbunya. TEMEN GUE YANG JAWAB 82,5 DIANGGAP BENAR SOALNYA DIA PAKAI TITIK TENGAH BATANG. KOK BISA BEGITU. ada yang bisa jelasin kenapa titik tengah batang yang dipakai",
    comments: [
      { authorId: 131, minutesAgo: 3287, content: "karena batang itu mewakili rentang bre. 80-85 diperlakukan sebagai satu kelompok, titik tengahnya 82,5 jadi wakilnya" },
      { authorId: 223, minutesAgo: 3279, content: "modus data berkelompok itu emang pakai titik tengah kelas bre. gak pake satu nilai tunggal" },
      { authorId: 143, minutesAgo: 3271, content: "kejadian lu itu classic bre wkwk. sumbu datar diagram batang itu jebakan favorit guru" },
      { authorId: 313, minutesAgo: 3263, content: "catet bre: batang tinggi = sering muncul. titik tengah = alamatnya" },
    ],
  },
  {
    id: 111,
    authorId: 11,
    minutesAgo: 3325,
    shares: 27,
    content:
      "Aku sedang membuat rata-rata bergerak 5 hari untuk laporan penjualan. Data: 120, 135, 128, 140, 132. Total 655, rata-rata 131. Hari ke-6 tercatat 150, sehingga rata-rata 6 hari menjadi 805 ÷ 6 = 134,17. Pertanyaanku dua: pertama, benar ya angka 134,17, saya membulatkan dua desimal. Kedua, kenapa rata-rata ikut naik 3,17 padahal hari ke-6 itu 150, tampak kecil pengaruhnya? Ia naik karena dibagi enam sekarang, tetapi rekan kantor berkeras naiknya harus sekitar 19. Aku butuh kalimat penjelasan yang tenang sebelum rapat Senin",
    comments: [
      { authorId: 262, minutesAgo: 3317, content: "134,17 benar kak. rata-rata menyesuaikan diri ke angka baru: semua nilai lama ikut terbagi. 150 itu satu dari enam, bukan satu dari satu" },
      { authorId: 283, minutesAgo: 3309, content: "naik 19 itu salah kak, itu cuma selisih 150 dengan 131. rata-rata baru dihitung ulang dari total, bukan dari selisih terakhir" },
      { authorId: 205, minutesAgo: 3301, content: "kalimatnya begini kak: rata-rata baru = (655 + 150) ÷ 6 = 134,17. angka lama ikut kebagian pembagi baru" },
      { authorId: 258, minutesAgo: 3293, content: "rekan itu melupakan pembaginya kak. 150 memang di atas rata-rata lama 19, tetapi pengaruhnya diencerkan oleh enam hari" },
    ],
  },
  {
    id: 112,
    authorId: 12,
    minutesAgo: 3355,
    shares: 4,
    content:
      "catat tekanan pasien 12 hari.\n3 hari bolong, pasien pulang kampung.\ndata utuh 9 hari.\ncukup gak buat lihat pola.",
    comments: [],
  },
  {
    id: 113,
    authorId: 13,
    minutesAgo: 3385,
    shares: 18,
    content:
      "gk ngerti peluang koin lagi. PR: lempar 2 koin, peluang muncul 2 gambar. gue jawab 1/3 soalnya kemungkinan itu cuma 3: dua2nya gambar, dua2nya angka, ato campur. guru coret, tulis 1/4. gue masih bingung smpe skrg, dari mana datengnya 4. temen bilang campur itu dipecah jadi dua. dipecah gimana sih. tolong jelasin pk benda nyata, jgn pake tabel aneh2, gk nangkep",
    comments: [
      { authorId: 118, minutesAgo: 3377, content: "koin pertama dua kemungkinan, koin kedua dua kemungkinan. 2 × 2 = 4 bre: gambar-gambar, gambar-angka, angka-gambar, angka-angka. campur itu dua kemungkinan terpisah, bukan satu" },
      { authorId: 331, minutesAgo: 3369, content: "coba lempar beneran bre 20 kali, catet. campur keluar lebih sering dari gambar-gambar. situ langsung nangkep kenapa 4" },
      { authorId: 154, minutesAgo: 3361, content: "gambar-angka sama angka-gambar itu beda bre, urutannya beda. itu sumber angka 4-nya" },
    ],
  },
  {
    id: 114,
    authorId: 14,
    minutesAgo: 3415,
    shares: 9,
    content:
      "pos jam 07-08 masuk 14 motor. jam 08-09 masuk 22. jam 09-10 masuk 9. jam tersibuk 08-09. om nanya pos baru dibuka mana, gue tunjuk angka ini. cukup.",
    comments: [
      { authorId: 199, minutesAgo: 3407, content: "22 motor dalam sejam itu padat om. pos baru enak deket gedung kantor" },
    ],
  },
  {
    id: 115,
    authorId: 15,
    minutesAgo: 3445,
    shares: 14,
    content:
      "catatan buku tulis gue: omzet lima hari 210, 180, 240, 190, 230 ribu. jumlah 1.050, rata-rata 210 ribu. minggu lalu rata-rata 230 ribu, jadi turun 20 ribu sehari. gue udah itung dua kali pake kalkulator tetangga. yang gue mau nanya, turun 20 ribu itu jelek banget gak ya buat warung kecil? karena di kepala gue rasanya gede, tapi pembeli tetap lalu-lalang kayak biasa. teh gak mau panik sebelum waktunya",
    comments: [
      { authorId: 102, minutesAgo: 3437, content: "20 dari 230 itu sekitar 8,7 persen teh. masih normal naik-turun mingguan, panik kalau turunnya lewat 15 persen dua minggu beruntun" },
      { authorId: 84, minutesAgo: 3429, content: "coba cek teh hari apa yang beda. kadang satu hari libur besar doang yang menyeret rata-rata turun" },
      { authorId: 32, minutesAgo: 3421, content: "iya teh, ternyata jumat ada yang tutup pasar. berarti bukan dagangan yang jelek wkwk" },
    ],
  },
  {
    id: 116,
    authorId: 16,
    minutesAgo: 3475,
    shares: 9,
    content:
      "Survei kantin kantor: 40 karyawan. 25 memilih kopi, 10 teh, 5 lain-lain. Persennya 62,5 / 25 / 12,5. Bos bertanya kenapa angka kopi bukan 60 persen, katanya sepertiga lebih dari teh seharusnya rapi. Aku menjelaskan 25 ÷ 40 = 0,625, tidak ada yang bisa digeser karena total harus 100. Ia masih menatap angka 62,5 dengan wajah meragukan. Adakah rekan yang pernah menghadapi bos yang meminta persen dibulatkan supaya rapi? Bagaimana caranya tetap jujur tanpa terdengar mengoreksi bos di depan karyawan lain",
    comments: [
      { authorId: 262, minutesAgo: 3467, content: "62,5 itu tepat kak, tidak perlu dibulatkan. bos biasanya setuju begitu melihat 25 ÷ 40 di kalkulator" },
      { authorId: 283, minutesAgo: 3459, content: "kalau dipaksa rapi kak, tetap cantumkan angka asli di lampiran. kejujuran tinggal di sana, rapat tenang" },
      { authorId: 192, minutesAgo: 3451, content: "40 responden memang suka menghasilkan desimal kak. 62,5 = 5/8. angka yang sah" },
    ],
  },
  {
    id: 117,
    authorId: 17,
    minutesAgo: 3505,
    shares: 21,
    content:
      "bro, tugas laporan kecil nanya: waktu cetak 3D dicoba 5 kali: 42, 45, 44, 47, 42 menit. gue hitung rata-rata 44, range 47−42 = 5. temen gue bilang lapor range aja, gue bilang rata-rata, terus kita sama-sama bingung mana yang ditulis. laporan kecil doang sih tapi nilai nyangkut di situ bro. kalian biasanya nulis apa, dua-duanya atau pilih satu",
    comments: [
      { authorId: 213, minutesAgo: 3497, content: "dua-duanya bro. rata-rata 44 buat angka utama, range 5 buat nunjukin seberapa stabil. laporan beda cerita kalau cuma satu" },
      { authorId: 336, minutesAgo: 3489, content: "42 muncul dua kali bro, itu juga layak disebut. waktu paling sering keluar" },
      { authorId: 144, minutesAgo: 3481, content: "kalau disuruh pilih satu, rata-rata bro. range gak bisa dipakai menebak hasil berikutnya" },
    ],
  },
  {
    id: 118,
    authorId: 18,
    minutesAgo: 3535,
    shares: 11,
    content:
      "kemarin bawa 45 kilo mangga ke pasar. terjual 30. sisa 15. gue itung 30 dari 45 itu dua per tiga. besok bawa berapa enaknya ya om? musim rame tapi gak mau modal nganggur",
    comments: [
      { authorId: 199, minutesAgo: 3527, content: "kalau laku dua per tiga, besok turunkan dikit om, 40 kilo cukup. sisa 15 kilo itu modal yang nunggu" },
      { authorId: 240, minutesAgo: 3519, content: "coba om catat per jam. dua per tiga itu angka hari, jam tersibuknya yang menentukan besok bawa berapa" },
    ],
  },
  {
    id: 119,
    authorId: 19,
    minutesAgo: 3565,
    shares: 16,
    content:
      "bos-bos, omzet kios tiga hari: 270, 310, 290 ribu. rata-rata 290. nah anehnya TIDAK ADA SATU HARI PUN yang omzetnya pas 290. hari pertama di bawah, kedua di atas, ketiga pas di rata-rata 290. eh ternyata ketiga ya 290, berarti ada satu yang pas. yaudah pertanyaan gue yang bener: rata-rata itu nilai yang nyata atau cuma nilai rakitan, soalnya di struk gak pernah ada tulisan 290 kecuali kebetulan",
    comments: [
      { authorId: 240, minutesAgo: 3557, content: "rata-rata itu angka rakitan bos, tapi berguna. dia nunjukin level harian tanpa peduli urutan" },
      { authorId: 258, minutesAgo: 3549, content: "290 itu pusat gravitasi tiga hari bos. tidak perlu muncul di struk, cukup menggambarkan berat" },
      { authorId: 199, minutesAgo: 3541, content: "day 3 emang pas 290 bos, jadi ada satu yang nyata wkwk. itu kebetulan yang jarang" },
    ],
  },
  {
    id: 120,
    authorId: 20,
    minutesAgo: 3595,
    shares: 12,
    content:
      "Dua penumpang pagi tadi memberi saya soal tanpa sadar. Perjalanan pertama 14 km ditempuh 25 menit. Perjalanan kedua 9 km ditempuh 20 menit. Penumpang kedua berkata perjalanannya lebih cepat karena angka semuanya lebih kecil. Saya menghitung sambil menyetir setelah menurunkannya: 14 ÷ 25 = 0,56 km per menit, sekitar 33,6 km per jam. Perjalanan kedua 9 ÷ 20 = 0,45, sekitar 27 km per jam. Perjalanan pertama ternyata yang lebih gesit per kilometer. Yang ingin saya tanyakan: mengapa orang mudah menganggap jarak kecil berarti lebih cepat, padahal waktunya tidak sepenuhnya sebanding?",
    comments: [
      { authorId: 258, minutesAgo: 3587, content: "karena manusia melihat dua angka sekaligus dan memilih yang lebih kecil, tanpa membaginya. kecepatan itu hasil bagi, bukan angka tunggal" },
      { authorId: 268, minutesAgo: 3579, content: "33,6 dan 27 km per jam. perbedaan 6,6 km per jam itu terasa sekali di kota pak" },
      { authorId: 192, minutesAgo: 3571, content: "penumpang itu sebenarnya menghitung kemudahan, bukan kecepatan pak. 9 km terasa dekat karena angkanya kecil" },
    ],
  },
  {
    id: 121,
    authorId: 21,
    minutesAgo: 3625,
    shares: 18,
    content:
      "tanya dong yang sering makan rame. total makan 96 ribu untuk 4 orang, bagi rata jadi 24 ribu per kepala. masalahnya dua orang makan jauh lebih banyak, dua orang kami doang makan soto kecil. gue usul bagi sesuai porsi, tapi gak ada yang catat harga per menu. udah malem, semua males itung, uangnya nyampur di meja. jadi pilih mana deh, bagi rata biar cepet pulang, atau itung ulang skrg biar adil? gue pengen adil tapi juga pengen tidur",
    comments: [
      { authorId: 60, minutesAgo: 3617, content: "bagi rata deh kak kalau makan rame terus, lain kali gantian yang kebanyakan mentraktir. hitung porsi pas males itu bikin rasa" },
      { authorId: 102, minutesAgo: 3609, content: "24 ribu × 4 = 96 ribu kak, bagi rata itu matematisnya benar. adil atau tidak itu urusan makanannya" },
      { authorId: 84, minutesAgo: 3601, content: "aturan kos kak: yang pesan terbanyak yang itung. dia yang paling kenal porsinya" },
      { authorId: 106, minutesAgo: 3593, content: "96 ÷ 4 = 24 kak. itung ulang cuma worth it kalau selisihnya lebih dari 10 ribuan" },
    ],
  },
  {
    id: 122,
    authorId: 22,
    minutesAgo: 3655,
    shares: 19,
    content:
      "Anakku bermain kelereng dengan sepupunya: 5 merah dan 3 biru dalam satu kantong. Aku tanya kalau diambil satu tanpa dilihat, mana yang mungkin keluar. Ia menjawab pasti merah, karena banyaknya merah lebih dari setengah. Aku menjelaskan bahwa mungkin saja biru, tinggal peluangnya lebih kecil, 5 dari 8 untuk merah. Ia memejamkan mata, mengambil, dan keluar biru. Sekarang ia berdiri di tengah teras seperti menemukan dunia baru. Bagaimana cara merawat momen begini supaya ia mengerti peluang bukan keajaiban, melainkan kebiasaan benda banyak dan sedikit?",
    comments: [
      { authorId: 77, minutesAgo: 3647, content: "biarkan ia mengulang pelan-pelan bu. 10 kali ambil, catat. biru akan muncul sekitar 3-4 kali. pengalaman mengalahkan ceramah" },
      { authorId: 268, minutesAgo: 3639, content: "kantong itu gurunya bu. yang ditunggu bukan hasil satu kali, tapi pola banyak kali" },
      { authorId: 63, minutesAgo: 3631, content: "anak yang sudah melihat biru keluar tidak akan pernah lupa peluang. momen itu mahal bu, simpan baik-baik" },
      { authorId: 24, minutesAgo: 3623, content: "KELERENG BIRU ITU GURU TERBAIK. NENEK SETUJU. BANYAK-KAN KELERENGNYA, JANGAN BANYAK-KAN CERAMAH" },
    ],
  },
  {
    id: 123,
    authorId: 23,
    minutesAgo: 3685,
    shares: 2,
    content:
      "log server: rata-rata 200 request/menit, 10 menit. ekspektasi 2.000. total masuk 1.874. drop 126 = 6,3%. jam 02.00-02.10. entah bot yang tidur entah kabel",
    comments: [
      { authorId: 213, minutesAgo: 3677, content: "6,3% drop di jam sepi itu masih dalam toleransi. bandingin sama jam 8 malem dulu" },
      { authorId: 313, minutesAgo: 3669, content: "coba cek burst-nya bre. 200/menit itu rata, kalo 5 menit kosong terus 5 menit banjir tetap 1000" },
    ],
  },
  {
    id: 124,
    authorId: 24,
    minutesAgo: 3715,
    shares: 12,
    content:
      "CUCU AKU DAPAT NILAI 6 DARI 10 DI ULANGAN. DIA BILANG BERARTI 60 PERSEN. AKU BILANG IYA. TERUS DIA TANYA NENEK, 60 ITU BAGUS ATAU JELEK. AKU BINGUNG JAWABNYA SOALNYA DULU SEKOLAH PAKAI ANGKA 1 SAMPAI 10, SEKARANG DIA MINTA PERSEN. AKU TANYA BALIK, KALAU KUE 10 POTONG DAN MAKA 6, ITU BANYAK KAN. DIA BILANG BANYAK TAPI KALAU ULANGAN, BANYAK ITU TANDA BELUM PAHAM.\nPertanyaanku: 60 dari 100 itu kategori apa ya buat anak SD sekarang, lulus atau remedial? AKU PURA2 TAU TERUS KEPO KE SINI, MAAPKAN NENEK",
    comments: [
      { authorId: 63, minutesAgo: 3707, content: "di banyak sekolah bu, 60 itu KKMin, tepat lulus tapi mepet. jawaban kue nenek bagus sekali untuk pembanding" },
      { authorId: 187, minutesAgo: 3699, content: "cucu itu sudah paham skala bu, jawabannya jujur. 60 = 6 dari 10, dan untuk ulangan memang tepat di batas" },
      { authorId: 74, minutesAgo: 3691, content: "NENEK TIDAK PERLU MAAP. pertanyaan lulus atau remedial itu pertanyaan penting. jawaban sekolah beda-beda, tanya bu guru langsung paling aman" },
    ],
  },
  {
    id: 125,
    authorId: 25,
    minutesAgo: 3745,
    shares: 22,
    content:
      "absensi magang bulan ini: 24 hari kerja, gue hadir 22. gue itung 22 ÷ 24 = 0,9167, jadi 91,67 persen. mentor minta angka bulat di laporan, jadi gue tulis 92 persen. abes gue mikir, kalau HR pakai angka bulat juga, 92 vs 91,67 itu gak gede bedanya tp bisa beda kategori kan? tp gak ada pedoman yang gue baca. sekalian nanya, angka absensi magang dihitung sampai berapa desimal di kantor kalian",
    comments: [
      { authorId: 236, minutesAgo: 3737, content: "kantor gaku satu desimal pak: 91,7. bulat 92 biasanya buat slide, lampiran tetap lengkap" },
      { authorId: 144, minutesAgo: 3729, content: "91,67 itu tepat. tulis 92 di ringkasan, 91,67 di detail. dua-duanya hidup damai" },
    ],
  },
]
