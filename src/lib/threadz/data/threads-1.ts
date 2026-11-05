import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25 (paling baru di feed) — ROMBAK TOTAL V2 (Nov 2026).
// Cuitan lama dihapus semua atas keputusan user: terasa rekayasa/bot.
//
// ATURAN ISI V2 (hukum tertinggi, rujukan lengkap: scripts/rumus-v2.md):
//  1. ≥60% post = PERTANYAAN SUNGGUHAN atau fragmen mentah — bukan anekdot
//     bermoral. Pelajaran dari Math.SE / Brainly / Gutefrage: post = soal +
//     usaha + titik mentok. Jangan meniru isinya, ambil ruhnya.
//  2. Panjang WAJIB menyebar (ada yang di bawah 130 char, ada yang 500+).
//     PUNCHLINE DILARANG. Ending sah: nanya, nyangkut, berhenti mendadak,
//     doa, terima kasih.
//  3. Matematika yang disebut HARUS benar. Kalau post sengaja salah
//     (miskonsepsi siswa asli), wajib ada komentar yang mengoreksi dengan
//     hitungan benar.
//  4. Komentar: ±40% benar-benar MENJAWAB/MENGOREKSI/hint dengan angka.
//     Sisanya reaksi spesifik ke isi. DILARANG tepuk tangan kosong
//     bertubi-tubi ("semangat kak" berkali-kali).
//  5. Jumlah komentar menyebar 0-6, gak boleh satu jumlah menguasai batch.
//     Post pendek boleh 0-1 komen — itu hidup.
//  6. DILARANG: punchline, dialog 2 kutipan (maks 1 pasangan), daftar
//     bernomor, lagu/ultah, brand, pinjaman/KPR, "gue check", pengulangan
//     mantra "X, X, X", ending reflektif formula, cerita mencari nafkah
//     di luar sekolah/matematika (kasus "rantai kendor" — DILARANG TERULANG).
//  7. Post boleh menggantung tanpa jawaban. Dunia gak bersih itu manusia.
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
      "Alhamdulillah ada yang mau nanya di sini. Anak yang pertama pulang sekolah bilang nilainya tambah satu soal matematika, soalnya 47 + 28. Dia jawab 65, jawaban guru 75. Dia gak terima, bilang cara dia bener karena di rumah papanya juga begitu caranya. Aku coba pake kalkulator HP: 75. Sekarang dua berdua masih ngambek, satu karena dikoreksi, satu karena kalah sama kalkulator 😭\n\nYang aku mau tanya: cara jelasin bawa sisa 1-an itu gimana ya biar gak sampai nangis?",
    comments: [
      { authorId: 71, minutesAgo: 22, content: "75 kak. 7 tambah 8 itu 15, satuannya ditulis, 1-nya disimpen ke puluhan. anaknya lupa bawa 1 😄" },
      { authorId: 111, minutesAgo: 19, content: "47+28 bisa diakalin kak: 47 + 30 = 77, kurangin 2 balik = 75" },
      { authorId: 88, minutesAgo: 15, content: "anakku juga gitu dulu, tambahannya bener tapi yang disimpen selalu kelupaan. ngaruh banget latihan 10 soal sehari" },
      { authorId: 102, minutesAgo: 11, content: "jangan diomelin kak, itu fase bawa sisa. kalo dicoret pelan2 langsung nyambung 🙏" },
      { authorId: 60, minutesAgo: 8, content: "papanya diajak ngambek anaknya 😄 semangat ya kak" },
    ],
  },
  {
    id: 2,
    authorId: 2,
    minutesAgo: 55,
    shares: 30,
    content:
      "PR MATEMATIKA 20 SOAL DIKUMPUL JAM 7 PAGI. SEKARANG JAM 12 MALEM GUE BARU SELESAI NOMOR 3. SOALNYA 2X + 5 = 17, GUE JAWAB X = 6. TAPI DI BUKU ADA CATATAN KECIL 'CEK KEMBALI JAWABANMU'. GUE CEK EMPAT KALI HASILNYA TETEP 6. MEMANGNYA SALAH. KALO BENER KENAPA DISURUH CEK KALO SALAH KENAPA GAK DIBILANGIN LANGSUNG. tolong siapa pun yang masih melek, 17 soal lagi nunggu",
    comments: [
      { authorId: 44, minutesAgo: 50, content: "lu bener bre. 2 kali 6 itu 12, tambah 5 = 17. bukunya yang ngegas wkwk" },
      { authorId: 118, minutesAgo: 47, content: "x = 6 bener. 2x = 12, x = 6. jangan ragu, lanjut soal 4" },
      { authorId: 137, minutesAgo: 43, content: "wkwkwk gue pernah gini, jawabannya bener malah dihapus dan diulang 2 jam" },
      { authorId: 152, minutesAgo: 38, content: "17 soal jam 12 malem bre. tidur jam 2, bangun jam 5, lebih waras dari begadang penuh" },
    ],
  },
  {
    id: 3,
    authorId: 3,
    minutesAgo: 85,
    shares: 21,
    content:
      "Saya mau tanya cara menjelaskan perkalian bersusun. Ananda di kelas 4 menulis 35 × 4 = 1220. Waktu saya tanya langkahnya, dia menunjuk tulisannya: 3 × 4 = 12, 5 × 4 = 20, ditulis berdampingan jadi 1220. Logikanya jalan, tapi nilai tempatnya belum nyambung. Saya coba gambar kotak, dia malah makin bingung sendiri.\n\nAda yang pernah menghadapi kasus serupa? Cara paling cepat nyambung untuk Ananda seperti ini apa ya?",
    comments: [
      { authorId: 90, minutesAgo: 79, content: "itu hitungan per angka tanpa nilai tempat bu. 35 itu 30 + 5, jadi 30×4 = 120, 5×4 = 20, jumlahnya 140" },
      { authorId: 66, minutesAgo: 73, content: "pakai uang main biasanya cepet nyambung bu. 3 keping sepuluh sama 1 keping lima, dikali empat, jumlahin lagi" },
      { authorId: 77, minutesAgo: 68, content: "saya punya murid persis begini bu. minta dia sebut 35 sebagai tiga puluh lima, bukan tiga-lima. biasanya setelah itu ketemu 🙏" },
    ],
  },
  {
    id: 4,
    authorId: 4,
    minutesAgo: 115,
    shares: 3,
    content:
      "Slip gaji masuk jam 10.31. Potongan bulan ini 341.600, bulan lalu 312.400. Selisih 29.200, tidak ada keterangan. HR bilang usahakan cek minggu depan. Angka itu duduk di kepala sampai sekarang.",
    comments: [
      { authorId: 192, minutesAgo: 107, content: "selisih potongan selisih ratusan ribu itu biasanya ada koreksi premi atau iuran yang telat diproses om. minta rincian slipnya, jangan cuma 'cek lagi'" },
    ],
  },
  {
    id: 5,
    authorId: 5,
    minutesAgo: 145,
    shares: 45,
    content:
      "stok gulaku 7 kilo. om langganan ambil 2,5 kilo tiap tiga hari. kuhitung: hari ke-3 sisa 4,5, hari ke-6 sisa 2, hari ke-9 butuh 2,5 cuma ada 2, kurang setengah kilo. padahal rasanya lebih cepet abis dari itungan. itunganku yang salah, atau yang nyedot yang lebih banyak?\n\nbesok pagi kiriman dateng, semoga cukup buat nutup setengah kilo itu.",
    comments: [
      { authorId: 59, minutesAgo: 138, content: "itungan lu bener dik. hari ke-6 sisa 2, pesenan ke-3 butuh 2,5, berarti hari ke-9 kurang setengah kilo" },
      { authorId: 32, minutesAgo: 132, content: "catet aja hutang 0,5 kilo dik, langganan mah gak akan ke mana-mana" },
      { authorId: 205, minutesAgo: 126, content: "gula itu rasanya memang abis duluan dari itungan dik wkwk" },
    ],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 175,
    shares: 3,
    content:
      "diskon 30 persen harga 50 rebu, gue itung bayarnya 20 rebu soalnya 50 kurang 30 ya 20. kasirnya ketawa, gue gak ketawa. sekarang gue diem2 naro itungan di sini, ada yang bisa mastiin gak, soalnya kasir tadi bilang 35 rebu. mana yang bener",
    comments: [
      { authorId: 138, minutesAgo: 170, content: "bre. 30 persen dari 50 rebu itu 15 rebu. bayarnya 50 kurang 15 = 35. bukan 20 wkwk" },
      { authorId: 161, minutesAgo: 165, content: "lu kurangin langsung angka persennya wkwkwk klasik banget" },
      { authorId: 212, minutesAgo: 160, content: "aturannya: 30% × harga dulu, hasilnya baru dikurangin. 30% × 50.000 = 15.000, jadi bayar 35.000" },
      { authorId: 143, minutesAgo: 154, content: "kalo ada yang jual 20 rebu tuh kabarin bre, gue ikut beli wkwk" },
    ],
  },
  {
    id: 7,
    authorId: 7,
    minutesAgo: 205,
    shares: 41,
    content:
      "guys, hasil olah data: standar deviasi 0,8, skala likert 1-5. dosen nanya variance-nya berapa, gue diem. terus dia nanya 'lalu itu berarti datamu menyebar atau menumpuk', diem lagi. ya udah fix malam ini gue balik ke catatan statistik dasar semester 3. ada yang bisa kasih gambaran SD vs variance pake bahasa manusia? 🙃",
    comments: [
      { authorId: 212, minutesAgo: 198, content: "variance itu SD dipangkatkan dua kak. 0,8² = 0,64. jawab itu besok 🙃" },
      { authorId: 217, minutesAgo: 192, content: "SD 0,8 di skala 1-5 artinya datanya cukup ngerumpun di rata-rata, wajar buat likert" },
      { authorId: 213, minutesAgo: 185, content: "dosen gue juga tipe nanya balik ke definisi 🙃 semangat kak" },
    ],
  },
  {
    id: 8,
    authorId: 8,
    minutesAgo: 235,
    shares: 23,
    content:
      "pasien tanya: obat 8 jam sekali, sehari berapa? gue: 3. dia: kok bukan 3 setengah? jam 02.15 gue pura2 cek tetesnya.",
    comments: [
      { authorId: 248, minutesAgo: 228, content: "24 dibagi 8 emang 3 mbak. 3 setengah tuh 24 dibagi 7, pasiennya salah bagi wkwk" },
      { authorId: 251, minutesAgo: 222, content: "jam 2 pagi memang jam pertanyaan-pertanyaan aneh ya mbak" },
    ],
  },
  {
    id: 9,
    authorId: 9,
    minutesAgo: 265,
    shares: 15,
    content:
      "order balik 9 km, tarif 27 rebu. bensin tinggal dua jari. ambil gak ya. udah gue ambil ternyata. sekarang di jalan masih ragu.",
    comments: [
      { authorId: 187, minutesAgo: 258, content: "27 ribu buat 9 km mah oke bang, bensin 2-3 ribu doang, sisanya masuk kantong" },
      { authorId: 240, minutesAgo: 252, content: "yang penting cukup sampe rumah bang" },
    ],
  },
  {
    id: 10,
    authorId: 10,
    minutesAgo: 295,
    shares: 26,
    content:
      "ULANGAN BARISAN DAN DERET BESOK PAGI DAN GUE BARU TAU KALAU BARISAN SAMA DERET ITU BEDA WKWKWK, KATA TEMEN GUE BARISAN ITU ANGKA BERJAJAR DOANG, DERET ITU DIJUMLAHIN, TERUS BU NYA BILANG SOALNYA CAMPUR DUA2NYA. GILS. ADA YANG MAU KASIH CONTOH SOAL SAMA CARANYA GAK BIAR GUE TIDUR NYENYAK, KALAU GAGAL LAGI INI remedial LAGI DAN MUKA IBU GUE UDAH DISENYAPKAN DARI SEMALEM",
    comments: [
      { authorId: 127, minutesAgo: 287, content: "barisan: 2, 5, 8, 11 (selisih tetap 3). deret: 2+5+8+11 = 26. itu bedanya" },
      { authorId: 131, minutesAgo: 281, content: "rumus suku ke-n: a + (n-1)b. contoh: suku ke-10 = 2 + 9×3 = 29" },
      { authorId: 149, minutesAgo: 275, content: "buat jumlah n suku pertama: n/2 × (2a + (n-1)b). 4 suku = 2 × (4+9) = 26, cocok sama itungan atas" },
      { authorId: 144, minutesAgo: 268, content: "ini bab paling waras di semester ini gils, lu pasti bisa wkwk" },
      { authorId: 160, minutesAgo: 261, content: "kerjain 5 soal terus tidur, jangan baca doang wkwk" },
    ],
  },
  {
    id: 11,
    authorId: 11,
    minutesAgo: 325,
    shares: 41,
    content:
      "Selisih 3.500 di kolom kas hari ini. Sudah dicek tiga kali, tidak ketemu. Aturan kantor: kalau besok masih selisih, dicatat sebagai selisih kas dan ditandatangani saya. Sebelum sampai di situ, saya mau tanya: apakah ada cara yang biasa dipakai untuk menemukan selisih sekecil ini? Terima kasih sebelumnya.",
    comments: [
      { authorId: 262, minutesAgo: 317, content: "Kalau selisihnya kelipatan 9, biasanya ada angka yang tertukar posisi (56 jadi 65). 3.500 bukan kelipatan 9, jadi kemungkinan satu transaksi tidak tercatat atau tercatat dobel." },
      { authorId: 268, minutesAgo: 310, content: "Coba cek struk dengan nominal 5.000-an. Selisih 3.500 sering dari situ, misalnya 5.000 tercatat 1.500." },
    ],
  },
  {
    id: 12,
    authorId: 12,
    minutesAgo: 355,
    shares: 5,
    content:
      "jadwal obat pasien tiap 6 jam.\nshift gue: jam 7, 1, 7, 1.\nshift temen: jam 10, 4, 10, 4.\ndua-duanya 24 jam, empat dosis.\nrumah gue dua jam dari sini. tidur dulu.",
    comments: [],
  },
  {
    id: 13,
    authorId: 13,
    minutesAgo: 385,
    shares: 19,
    content:
      "ada yang bisa bntu gk, pr gue gk jelas: keliling persegi panjang 36 cm, panjangnya 5 cm lebih dari lebar, lebar sama panjangnya brp. gue jawab lebar 6 panjang 11 tp gk yakin, di buku gk ada kunci jawabannya, chat bu guru gk dibales smpe skrg, wkwk yaudah gue tanya sini aja sblm tidur",
    comments: [
      { authorId: 143, minutesAgo: 377, content: "lebar 6,5 bre, panjang 11,5. 4x + 10 = 36, 4x = 26, x = 6,5" },
      { authorId: 131, minutesAgo: 371, content: "jawaban lu 6 sama 11 kelilingnya 2(6+11) = 34 doang, kurang 2 dari 36" },
      { authorId: 154, minutesAgo: 364, content: "yg penting dik: jawabannya gak harus bulat. 6,5 itu sah2 aja" },
      { authorId: 118, minutesAgo: 356, content: "chat bu guru jgn jam 10 malem bre, bu juga butuh tidur wkwk" },
    ],
  },
  {
    id: 14,
    authorId: 14,
    minutesAgo: 415,
    shares: 7,
    content:
      "om yang bayar 2.000 pake koin 500 itu hari ini gak dateng. biasanya jam 4 udah nongol, motor stangnya miring. kursi depan kosong. koin hari ini 26 keping, kemarin 34. kurang 8 keping. semoga dia cuma urusan.",
    comments: [
      { authorId: 186, minutesAgo: 406, content: "om yang jarang dateng biasanya ada urusan keluarga mas, besok2 muncul lagi" },
      { authorId: 199, minutesAgo: 399, content: "26 keping itu 13 ribu mas, kurang 8 keping dari kemarin" },
    ],
  },
  {
    id: 15,
    authorId: 15,
    minutesAgo: 445,
    shares: 17,
    content:
      "tolong dong teh yang jago itung, bantu akang pikirin. tomat 12 rebu perkilo, biasanya laku 1,5 kilo. tadi aku ringkes jadi 11 rebu, yang beli langsung ambil 2 kilo. uangnya 22 lawan 18, tapi stok habis lebih cepet. untungnya nambah 4 rebu, capeknya nambah juga lho. besok turunin lagi gak ya? doain laku terus 😂",
    comments: [
      { authorId: 72, minutesAgo: 436, content: "yang 11 ribu teh. 11×2 = 22 ribu, yang 12×1,5 cuma 18 ribu. laku 2 kilo lebih untung 4 ribu" },
      { authorId: 79, minutesAgo: 430, content: "harga ringkes memang bikin pembeli ambil lebih teh, cuma jangan sampe rugi ongkosnya 😄" },
      { authorId: 88, minutesAgo: 424, content: "coba jalanin dua2nya seminggu teh, bandingin sendiri, datanya gak bisa bohong" },
    ],
  },
  {
    id: 16,
    authorId: 16,
    minutesAgo: 475,
    shares: 26,
    content:
      "angsuran klien bulan ini 1.240.000, masuk 1.200.000, kurang 40.000. aku telepon, dia bilang besok dilengkapi. aku buka catatan lama: tiga bulan terakhir selisihnya 40 ribuan terus. bukan jumlah yang sama persis, tapi polanya begitu. aku tandai warna kuning dulu. kalau bulan depan masih begitu, baru aku naikin ke atasan.",
    comments: [
      { authorId: 236, minutesAgo: 466, content: "kurang 40 ribu tiga bulan berturut itu bukan lupa non, itu pola. catat tanggalnya, berguna pas naikin laporan" },
      { authorId: 243, minutesAgo: 459, content: "tandai kuning itu langkah yang tepat non, jangan langsung gugat" },
    ],
  },
  {
    id: 17,
    authorId: 17,
    minutesAgo: 505,
    shares: 30,
    content:
      "itung listrik kamar: lampu 10 watt nyala 8 jam = 80 Wh = 0,08 kWh. tarif 1.444,7 per kWh, berarti 115,6 rupiah semalam. rasa-rasanya tagihan kos jauh lebih gede dari itungan begini. kulkas nyala 24 jam, charger laptop nongkrong, pompa air jam 5 pagi. bro, angka di struk itu emang gitu atau ada yang bocor di itunganku?",
    comments: [
      { authorId: 219, minutesAgo: 496, content: "itungan lu bener bro, 0,08 × 1.444,7 = 115,6. hole-nya di alat besar: kulkas 100 W nyala 24 jam = 2,4 kWh sehari" },
      { authorId: 223, minutesAgo: 489, content: "setrika 350 W setengah jam aja 0,175 kWh. lampu doang mah receh, yang makan tuh yang panas sama yang muter terus" },
      { authorId: 227, minutesAgo: 483, content: "coba audit kamar: kipas, kulkas, charger. catat watt-nya, itung semalem, langsung keliatan bocornya di mana bro" },
    ],
  },
  {
    id: 18,
    authorId: 18,
    minutesAgo: 535,
    shares: 14,
    content:
      "semangka turun dari 8 rebu ke 6 rebu perkilo. panen raya om, semua kebon panen barengan. yang bikin mikir: harga turun, yang beli gak nambah. kemarin 30 biji, hari ini 28 biji. orang lagi hemat semua ya. besok coba potongin percobaan, siapa tau yang kemarin cuma nengok jadi beli.",
    comments: [
      { authorId: 178, minutesAgo: 526, content: "harga turun pembeli gak nambah itu tandanya yang dateng emang langganan om, bukan pembeli baru" },
      { authorId: 80, minutesAgo: 519, content: "semangka 6 rebu om? siap2 besok rame sendiri 😄" },
    ],
  },
  {
    id: 19,
    authorId: 19,
    minutesAgo: 565,
    shares: 21,
    content:
      "bos yang jual genset tadi nawar komisi: dari 2 persen minta 5 persen, katanya biar semangat jualannya. itunganku gampang: 2 persen dari 12.240.000 itu 244.800. 5 persen itu 612.000. selisih 367.200 sebulan. gue gak marah, gue cuma jawab: angkanya yang bicara dulu, baru semangat.",
    comments: [
      { authorId: 196, minutesAgo: 556, content: "selisih 367 ribu sebulan om, 2 persen untuk usaha sekelas itu udah masuk akal" },
      { authorId: 236, minutesAgo: 549, content: "janji semangat itu gak bisa dicairin om wkwk" },
    ],
  },
  {
    id: 20,
    authorId: 20,
    minutesAgo: 595,
    shares: 14,
    content:
      "penumpang tadi bawa dua kantong berat, mau ke bandara. gue sebut perkiraan 60 sampai 70 ribu tergantung macet. dia tawar flat 65. macet 40 menit, meteran ngendap di 71 ketika sampai. dia tetap bayar 65, minta struk, pamit sopan. dua-duanya sudah sepakat dari awal, gak ada yang merugi.",
    comments: [
      { authorId: 26, minutesAgo: 586, content: "flat 65 vs meter 71, penumpang untung 6 ribu mas. tapi yang jalan mulus dua jam mah nilai segitu" },
      { authorId: 258, minutesAgo: 579, content: "kesepakatan flat itu dua sisi tahu risikonya. bagus kalau dua-duanya tenang." },
    ],
  },
  {
    id: 21,
    authorId: 21,
    minutesAgo: 625,
    shares: 21,
    content:
      "kaleng nabung bulan ini 146 rebu. sepatu yang gue incar 289 rebu. kurang 143. itung2an nabung 15 rebu seminggu = butuh 9,5 minggu. hampir dua setengah bulan buat sepatu. dibanding temen gue yang tinggal bilang ke papanya, yaudah deh. tapi kaleng gue isi sendiri dari kembalian, jadi gak ada yang berhak protes. ada tips nabung yang gak siksa? siapa tau 9,5 minggu bisa dipangkas jadi 6.",
    comments: [
      { authorId: 209, minutesAgo: 616, content: "tiap dapet receh 500/1000 langsung ke kaleng kak, biasanya bisa memangkas 1-2 minggu" },
      { authorId: 133, minutesAgo: 609, content: "146 ke 289 itu jarak yang jujur banget ya kak 😭" },
      { authorId: 68, minutesAgo: 601, content: "pelan2 kak, yang penting kalengnya gak dibuka 🙏" },
    ],
  },
  {
    id: 22,
    authorId: 22,
    minutesAgo: 655,
    shares: 19,
    content:
      "anakku tanya, bu, 1/2 + 1/3 kok hasilnya bukan 2/5. aku gak bisa jawab karena aku juga kira 2/5. besok dia ulangan pecahan. tolong yang bisa, jelasin cara yang paling gampang dipahami anak kelas 5, soalnya besok pagi sebelum berangkat aku mau ajarin dia. terima kasih banyak sebelumnya 🙏",
    comments: [
      { authorId: 74, minutesAgo: 647, content: "bukan 2/5 bu. penyebutnya disamain dulu: 1/2 = 3/6, 1/3 = 2/6, jumlahnya 5/6" },
      { authorId: 103, minutesAgo: 641, content: "cara cepetnya bu: atas dikali silang lalu dijumlah, bawah dikali antar sendiri: (1×3 + 1×2)/(2×3) = 5/6" },
      { authorId: 97, minutesAgo: 634, content: "ajarin pake gelas bu: setengah gelas air + sepertiga gelas air, dituang ke gelas sama besar, keliatan 5/6-nya" },
      { authorId: 81, minutesAgo: 627, content: "anak untung punya ibu yang ikut belajar bu 🙏" },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 685,
    shares: 2,
    content:
      "03.47. iseng itung ulang IPK pake bobot sks. nilai 3,5 dari matkul 3 sks, nilai 3,0 dari matkul 4 sks. rata2 polos 3,25. rata2 terbobot (3,5×3 + 3,0×4)/7 = 3,21. selama ini gue pake yang polos. kulkas bunyi. besok kerjain KRS yang bener.",
    comments: [
      { authorId: 309, minutesAgo: 676, content: "bener, IPK itu rata-rata terbobot. rata2 polos cuma cocok kalau semua sks sama" },
    ],
  },
  {
    id: 24,
    authorId: 24,
    minutesAgo: 715,
    shares: 12,
    content:
      "CUCU AKU PR BAGI PECAHAN. 1/2 DIBAGI 1/4 KATANYA HASILNYA 2. AKU BILANG SALAH, MASA DIBAGI HASILNYA MALAH BESAR. TERNYATA YANG BENAR DIA. DIJELASIN PAKAI KUE: SETENGAH KUE DIPOTONG SEBESAR SEPEREMPAT, ISINYA CUMA DUA POTONGAN. AKU PURA2 NGGAJAR PADAHAL BARU NGARTI DETIK ITU JUGA. NILAI ULANGANNYA DOAIN YANG BAGUS.",
    comments: [
      { authorId: 106, minutesAgo: 706, content: "benar itu mbak, 1/2 ÷ 1/4 = 1/2 × 4 = 2. pembaginya kecil, hasilnya bisa membesar 😄" },
      { authorId: 84, minutesAgo: 699, content: "penjelasan kue itu ampuh mbak, langsung kebayang potongannya" },
      { authorId: 110, minutesAgo: 691, content: "cucu jelasin ke nenek, nenek pura2 ngajar. tim yang solid wkwk" },
    ],
  },
  {
    id: 25,
    authorId: 25,
    minutesAgo: 745,
    shares: 30,
    content:
      "tanya buat yang pernah magang di perusahaan gede: potongan transport 400 dipotong penuh padahal dua hari seminggu WFH. gaji 1.500 jadi masuk 1.100. pembimbing bilang standar semua begitu. standar di mana ya, gak ada yang nulis. pengen nanya ke HR tp takut dianggap rewel, magang cuman 6 bulan abes setiap tanggal muda rasanya beda.",
    comments: [
      { authorId: 119, minutesAgo: 737, content: "tanya aja sopan pake angka bre: 'transport 400 dipotong penuh padahal 8 hari WFH, apakah bisa proporsional?' gak ada yang gugat orang yang nanya pake angka" },
      { authorId: 152, minutesAgo: 729, content: "400 itu bukan uang jajan bre, wajar lu mikirin. yang nanya gak rewel, yang diem nyesek" },
    ],
  },
]
