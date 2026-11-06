import type { ThreadzThread } from "../types"

// PART 9: BATCH 5 (6 Nov 2026) — cuitan 201-225, PENGGANDAAN PENULIS:
// 25 penulis BARU (authorId 51-75, belum pernah nulis — dilarang pakai pool
// 1-50). minutesAgo = 25 + 30*(id-1) → 6025 naik +30 tiap id (id 225 = 6745).
// Komentar menyebar 0-6, minutesAgo komentar lebih kecil dari post-nya,
// gak ada self-reply / komen dobel.
// ISI: 100% forum matematika (rumus-v2.md BAGIAN 1G + FORMULA HITAM 19 POLA),
// register tiap post beda suara (baku/gaul/jamet/KAPITAL/daerah/pendek/panjang),
// matematika sudah diverifikasi di scripts/cek-matematika-v5.ts.
// Post bahasa asing TIDAK ada di file ini — threads-intl.ts (id 9001+).
export const THREADS_PART9: ThreadzThread[] = [
  {
    id: 201,
    authorId: 51,
    minutesAgo: 6025,
    shares: 13,
    content:
      "bang, tolong cek PR adik gue, soalnya kita berdua udah bokekin kepala. trapesium: sisi sejajar 10 dan 16, tinggi 6. gue jelasin rumus: jumlah sisi sejajar dikali tinggi dibagi dua. itungan kita: 10 + 16 = 26, dikali 6 = 156, dibagi 2 = 78. adik gue nulis 156 doang soalnya dia lupa bagi dua, terus dia ngeyel katanya rumus udah dia jalanin semua kok dibuang setengahnya. gue bingung cara ngeyakininnya. trapesium itu emang setengah dari kotak panjangnya ya bang, atau rumusnya doang yang begitu? makasih yang mau jawab, adik gue nunggu sambil bantal guling",
    comments: [
      { authorId: 268, minutesAgo: 6016, content: "78 benar bang. jelasin pakai dua trapesium yang disusun saling kebalik, jadilah persegi panjang 26 × 6 = 156. satu trapesium = setengahnya = 78. adikmu akan lihat sendiri" },
      { authorId: 137, minutesAgo: 6009, content: "rumus itu bukan dibang bu, trapesium aslinya memang setengah kotak. 156 itu dua trapesium" },
      { authorId: 227, minutesAgo: 6001, content: "kasih dia kertas bang, gambar trapesium, salin terbalik, tempel. bantal guling bisa jadi alat peraga juga wkwk" },
    ],
  },
  {
    id: 202,
    authorId: 52,
    minutesAgo: 6055,
    shares: 20,
    content:
      "KUIS PELUANG BESOK DAN GUE BARU SADAR GUE NYALAHKAN KUIS YANG SALAH. soal: dua koin dilempar, peluang minimal satu angka. gue jawab 1/2, KATANYA SALAH, KUNCINYA 3/4. gue mikir: angka atau gambar, dua-duanya 50-50. TERUS TEMEN GUE TULIS EMPAT KEMUNGKINAN: GG, GA, AG, AA, DAN HANYA AA YANG KEGAGALAN, JADI 3 DARI 4. KOK BISA MINIMAL SATU ANGKA ITU SEBESAR ITU, TIGA PER EMPAT ITU 75% BRO. koin yang gak gue percaya tadi malah gue anggap sederhana. ada yang bisa mastiin 3/4 itu bener kan, atau kuisnya yang salah",
    comments: [
      { authorId: 212, minutesAgo: 6047, content: "3/4 benar. gagal hanya kalau dua-duanya gambar, itu 1 dari 4. sisanya 3 dari 4 punya angka" },
      { authorId: 118, minutesAgo: 6039, content: "jurus bre: hitung yang gagal dulu, sisanya otomatis sukses. gagal = AA doang, jadi 1/4. 1 − 1/4 = 3/4" },
      { authorId: 223, minutesAgo: 6031, content: "1/2 itu peluang koin pertama angka bre. minimal SATU koin beda cerita, dia boleh dari koin mana pun" },
      { authorId: 313, minutesAgo: 6023, content: "lempar 20 kali bre, catet. angka bakal nongol sekitar 15 kali. 75% itu kerasa setelah dicoba" },
    ],
  },
  {
    id: 203,
    authorId: 53,
    minutesAgo: 6085,
    shares: 8,
    content:
      "Adik kelas 7 saya bertanya hal yang tampak kecil tetapi sulit dijelaskan: kenapa 3 pangkat 4 bukan 12. Ia menghitung 3 × 4 = 12 dan merasa rumus pangkat itu justru mempersulit. Saya menunjukkan 3 × 3 × 3 × 3 = 81, ia mengiyakan hasilnya, tetapi masih bertanya: kalau hasilnya sama-sama membesarkan angka, kenapa harus ada dua jenis? Saya ingin menjawab tanpa mengeluh, karena pertanyaan itu sebenarnya bagus. Adakah yang bisa memberi contoh sederhana tentang beda menambah sebanyak empat kali dan berlipat empat kali?",
    comments: [
      { authorId: 258, minutesAgo: 6076, content: "contoh gandum: 3 butir, hari ini berlipat 4 kali jadi 12 butir. besok 12 berlipat 4 jadi 48. berlipat itu menumpuk ke atas, menambah hanya berjalan lurus" },
      { authorId: 262, minutesAgo: 6068, content: "3 + 3 + 3 + 3 = 12 itu empat porsi kecil. 3 × 3 × 3 × 3 = 81 itu porsi yang memperbesar dirinya tiap giliran" },
      { authorId: 283, minutesAgo: 6060, content: "kasih dia kalkulator: 3 ^ 10 dan 3 × 10. 59.049 lawan 30. jawaban mana yang bikin dia diam" },
      { authorId: 143, minutesAgo: 6052, content: "pertanyaan adik itu pintar. pangkat bukan mempersulit, dia menyingkat penulisan perkalian berulang" },
    ],
  },
  {
    id: 204,
    authorId: 54,
    minutesAgo: 6115,
    shares: 11,
    content:
      "teh minta tolong dihitung ya, kasir warung sebelah ngeyel dan gue gak mau ribut terus tiap pagi. pembeli datang bawa koin 500 sebanyak 12 keping, mau bayar es kopi 5.500 sama bungkus rokok 4.500, total 10.000. pembeli tanya kembalinya, kasir bilang koin 500 cuma sisa 1 di laci, jadi dia kasih 1 lembar 5.000 plus 1 koin 500, katanya PAS. pembeli nyerah bawa cuma 5.500. gue itung sendiri pelan-pelan: 12 keping itu 6.000, kembalian harusnya 6.000 minus... eh 6.000 bukan kembalian, uang pembeli cuma 6.000 padahal totalnya 10.000. JADI PEMBELINYA KURANG UANG 4.000, BUKAN KASIRNYA YANG JAHAT. dari awal gue salah fokus. teh mau tanya: 12 keping 500 itu emang 6.000 kan, dan 6.000 gak cukup buat 10.000, benar ya? sekarang gue yang butuh konfirmasi wkwk",
    comments: [
      { authorId: 102, minutesAgo: 6107, content: "benar teh, 12 × 500 = 6.000, dan 6.000 kurang 4.000 dari 10.000. kasir gak bisa nambah, uang pembeli yang kurang" },
      { authorId: 84, minutesAgo: 6099, content: "teh, pembeli tinggal nambah 4.000 atau kurangi belanjaannya. es kopi 5.500 doang masih kurang 500... pas banget sama satu koin yang ada di laci wkwk" },
      { authorId: 32, minutesAgo: 6091, content: "itungan teh sudah bener. es kopi doang 5.500, uangnya 6.000, kembalian 500. itu solusi paling damai pagi-pagi" },
      { authorId: 205, minutesAgo: 6083, content: "teh teliti seperti ini langka. kasir dengan 1 lembar 5.000 + 1 koin 500 itu untuk belanja 5.500, bukan 10.000" },
    ],
  },
  {
    id: 205,
    authorId: 55,
    minutesAgo: 6145,
    shares: 6,
    content:
      "PR pembagian nih. 729 ÷ 9 = 81. gue itung 9 × 81 = 729, PAS. temen gue jawab 80 sisa 9. gue bilang kok ada sisa 9, kan pembaginya juga 9, berarti bisa dibagi lagi dong. dia bilang sisa boleh sama pembagi, gurunya juga gitu bilang. GITU DIA BILANG ATU GURU. tolong di jawab, sisa 9 di pembagian 9 itu boleh gak ya, kok rasanya kayak nyimpen sisa yang sebenernya bisa dipakai",
    comments: [
      { authorId: 118, minutesAgo: 6137, content: "gak boleh bre. aturannya sisa harus lebih kecil dari pembagi. sisa 9 di pembagian 9 itu tinggal tambahkan 1 ke hasilnya, jadi 81 tanpa sisa" },
      { authorId: 154, minutesAgo: 6129, content: "temen lu nyantol di 9 × 80 = 720, kurang 9. tinggal maju satu langkah, 81. nanti bilang ke dia: sisa yang bisa dibagi ya gak jadi sisa" },
    ],
  },
  {
    id: 206,
    authorId: 56,
    minutesAgo: 6175,
    shares: 17,
    content:
      "kok ya HP gue nulis 0,25 + 0,5 hasilnya 0.75 pakai titik, sedangkan buku gue pakai koma, 0,75. itu dua angka beda atau sama aja? gue takut salah nulis di PR cuma gara-gara tanda baca",
    comments: [
      { authorId: 127, minutesAgo: 6167, content: "sama aja. titik atau koma itu gaya nulis, isinya sama-sama tiga per empat. di PR ikuti gaya bukumu" },
      { authorId: 152, minutesAgo: 6159, content: "HP itu buatan negara yang nulis titik wkwk. di Indonesia koma. angkanya identik, tenang" },
    ],
  },
  {
    id: 207,
    authorId: 57,
    minutesAgo: 6205,
    shares: 24,
    content:
      "RATA-RATA EMPAT ULANGAN DAN GUE MASIH NGEBET ULANG SATU JAM LAGI. tiga ulangan gue: 72, 68, 76. kalau mau rata-rata akhirnya 74, ulangan keempat harus berapa. gue itung: 74 × 4 = 296. total tiga ulangan 72 + 68 + 76 = 216. 296 − 216 = 80. JADI GUE HARUS DAPAT 80. temen gue yakin 72 doang, katanya 72 itu juga rata-rata gue sekarang, jadi bakal nempel. TAPI GUE ITUNG 216 + 72 = 288, DIBAGI 4 = 72, BUKAN 74. temen gue gak nambah apa-apa. jawaban gue 80 itu benar kan? besok pagi dikumpul, gue gak mau salah dua kali",
    comments: [
      { authorId: 268, minutesAgo: 6197, content: "80 benar. 72 itu cuma rata-rata sekarang, tidak bisa dijadikan ulangan keempat. 216 + 80 = 296, dibagi 4 = 74" },
      { authorId: 212, minutesAgo: 6189, content: "temenmu menabrak logika: kalau ulangan keempat sama rata-rata sekarang, rata-ratanya gak bergerak. untuk naik ke 74, harus di atas 72" },
      { authorId: 227, minutesAgo: 6181, content: "80 benar, dan itu aman kok, jaraknya cuma 4 poin dari nilai terbaikmu" },
    ],
  },
  {
    id: 208,
    authorId: 58,
    minutesAgo: 6235,
    shares: 5,
    content:
      "−8 + 5 = ?\ngue jawab 3, guru coret merah, tulis −3.\ngue gk paham. 8 lebih gede dari 5 kan, kok hasilnya minus.\nmacem utang 8 dibayar 5 ya? utangnya masih sisa 3?\nKALO ITU BENER KENAPA GURU GAK BILANG DARI AWAL SIH, mkin pusing gue, tolong di jelasin pake garis bilangan ato apalah yang gampang",
    comments: [
      { authorId: 219, minutesAgo: 6227, content: "utang-utangan itu bener bre. utang 8, dibayar 5, sisa utang 3 = −3. 8 lebih besar dari 5, tapi tanda minusnya yang menang di sini" },
      { authorId: 138, minutesAgo: 6219, content: "garis bilangan bre: mulai dari −8, lompat 5 ke kanan. daratan yang kaki ente mendarat itu −3. coba gambar sekali, langsung nyambung" },
      { authorId: 44, minutesAgo: 6211, content: "guru elo nulis −3 bre, jawab elo 3. beda sejauh 6 langkah di garis bilangan wkwk" },
    ],
  },
  {
    id: 209,
    authorId: 59,
    minutesAgo: 6265,
    shares: 14,
    content:
      "latihan lari sore: lapangan dekat rumah persegi, sisinya 25 meter. gue lari empat putaran dalam 5 menit. gue hitung kelilingnya dulu: 4 × 25 = 100 meter per putaran, empat putaran 400 meter. kecepatannya 400 ÷ 5 = 80 meter per menit. gue coba ubah ke km per jam: 80 × 60 = 4.800 meter = 4,8 km per jam. pertanyaan gue: 4,8 km per jam itu masuk akal gak untuk lari santai? temen gue bilang jalan cepat doang itu 5 km per jam, jadi kok lari gue lebih lambat dari jalan orang. GUE MALES TAPI GUE KEPO",
    comments: [
      { authorId: 258, minutesAgo: 6256, content: "hitungan benar, 4,8 km per jam. untuk 5 menit lari santai itu wajar. temanmu benar juga, jalan cepat orang dewasa bisa 5-6 km per jam" },
      { authorId: 268, minutesAgo: 6248, content: "lari 5 menit itu baru memanas. coba 20 menit, kecepatan rata-ratamu akan naik sendiri ke 6-7 km per jam" },
      { authorId: 192, minutesAgo: 6240, content: "80 meter per menit itu 1,33 meter per detik. pelan memang, tapi empat putaran itu tetap dua ratus... empat ratus meter yang nyata" },
    ],
  },
  {
    id: 210,
    authorId: 60,
    minutesAgo: 6295,
    shares: 19,
    content:
      "tanya dong soal kue, serius tapi lucu. sisa kue 3/4 bagian, dibagi tiga anak sama rata. gue hitung 3/4 ÷ 3 = 1/4, tiap anak dapat seperempat kue. anak bungsu jawab 3/12 terus nangis gara-gara diketawain kakaknya karena angkanya beda. gue bilang tunggu, 3/12 itu sama dengan 1/4 kan, cuma bentuk tulisannya beda. kakaknya tetap ketawa bilang gak ada kue sepertiga-dua belas. sekarang yang nangis ganti gue. pembacaannya gimana ya biar kakaknya paham dua pecahan itu beneran sama, pakai contoh kue yang sama ini aja",
    comments: [
      { authorId: 102, minutesAgo: 6286, content: "3/12 ÷ 3... eh, 1/4 = 3/12 itu benar kak, karena 1 × 3 = 3 dan 4 × 3 = 12. kue yang sama, potongannya yang lebih halus" },
      { authorId: 63, minutesAgo: 6277, content: "gambar kakak: satu kue dibagi 4 sama besar, bagian satu. kue yang sama dibagi 12, ambil 3 bagian. tempel di satu halaman, kakaknya akan melihat dua gambar itu menutupi luas yang sama" },
      { authorId: 84, minutesAgo: 6268, content: "anak yang menangis tadi sebenarnya menemukan konsep pecahan senilai sendiri kak. pelukan dulu, matematika kemudian" },
      { authorId: 24, minutesAgo: 6259, content: "KAKAK YANG SALAH MENGATAWAIN. 3/12 = 1/4. TETANGGA SETUJU, KUE BISA DIPOTONG SEBANYAK APA SAJA" },
    ],
  },
  {
    id: 211,
    authorId: 61,
    minutesAgo: 6325,
    shares: 10,
    content:
      "jam 4.30 sudut jarumnya berapa derajat ya? gue hitung jarum besar di angka 6 = 180 derajat, jarum kecil di antara 4 dan 5... eh 4 dan... jam 4.30 kan jarum kecil di 4,5 kotak, 4,5 × 30 = 135 derajat. selisihnya 45 derajat. bener gak ya, gue gak yakin sama diri sendiri. tolong bantu cek dong, ini PR-nya digumpul besok pagi.",
    comments: [],
  },
  {
    id: 212,
    authorId: 62,
    minutesAgo: 6355,
    shares: 7,
    content:
      "jualan online kecil-kecilan: lima hari terakhir paket keluar 14, 11, 18, 9, 13. total 65, rata-rata 13 per hari. teman saya bilang rata-rata itu percuma, hari beratnya 18 dan 9, tidak pernah pas 13. saya berpikir ulang: rata-rata memang tidak pernah muncul di hari tertentu, tetapi dia membantu saya menentukan berapa stok kardus yang harus disiapkan per minggu, 13 × 7 = 91. pertanyaan saya: kalian pakai rata-rata untuk keputusan harian atau menunggu satu minggu penuh dulu baru menghitung? Saya takut membeli kardus terlalu banyak dan rumah berubah gudang",
    comments: [
      { authorId: 262, minutesAgo: 6346, content: "rata-rata itu tepat untuk stok, karena sisa hari ini menopang hari esok. 91 kardus per minggu itu keputusan yang sehat" },
      { authorId: 205, minutesAgo: 6337, content: "14 + 11 + 18 + 9 + 13 = 65 benar. rata 13 itu bukan hari, itu denyut. denyut yang dipakai untuk pesan kardus" },
      { authorId: 240, minutesAgo: 6328, content: "pesan mingguan pakai rata-rata, pesan darurat pakai hari terburuk. dua angka, dua fungsi" },
    ],
  },
  {
    id: 213,
    authorId: 63,
    minutesAgo: 6385,
    shares: 12,
    content:
      "gk ngerti kenapa temen gue yakin bgt. soal: 20% dari 45 itu berapa. gue itung 45 × 20 = 900, dibagi 100 = 9. temen gue bilang 12, alasanya '20% itu seperlima dikit'. KOK DIKIT DIKIT DIKIT, 20% ITU SEPERLIMA BENERAN KAN, bukan dikit. 45 ÷ 5 = 9. DUA CARA DAPET 9. temen gue tetep 12. bantu gue guys, besok kuis persen, gue gk mau ketawa sama guru kayak di video guru gue yang lalu",
    comments: [
      { authorId: 131, minutesAgo: 6377, content: "9 bre. 20% = 1/5, 45 ÷ 5 = 9. dan 45 × 0,2 = 9 juga. dua-duanya sependapat" },
      { authorId: 313, minutesAgo: 6369, content: "12 itu 26,7% bre, bukan 20%. temen lu main feeling" },
      { authorId: 223, minutesAgo: 6361, content: "trik bre: 10% dari 45 = 4,5. 20% = dua kali = 9. hafal 10% dulu, sisanya kali" },
    ],
  },
  {
    id: 214,
    authorId: 64,
    minutesAgo: 6415,
    shares: 21,
    content:
      "PANITIA ACARA DAN KITA SEMUA GAK SIAP. aula 12 baris × 18 bangku = 216 bangku. tamu konfirmasi datang 248. GAK CUKUP, KURANG 32. ketua panitia nyuruh tambah baris. tambah 2 baris = 36 bangku, total 252, lebih 4. MASALAHNYA: LANTAI AULA GAK BISA DITEMPEL BARIS KE-14 SOALNYA ADA PANGGUNG. gue usul geser jarak baris, temen gue usul ambil bangku pindahan 32 dari ruang serbaguna. HITUNGAN GUE: 248 − 216 = 32, ARTINYA CUMA BUTUH 32, KENAPA HARUS 36? karena baris itu diisi utuh 18, takutnya bolongnya gak rapi. kalian pilih mana",
    comments: [
      { authorId: 212, minutesAgo: 6407, content: "32 bangku pindahan itu tepat jumlahnya. dua baris tambahan itu boros 4 kursi dan ketemu panggung" },
      { authorId: 227, minutesAgo: 6399, content: "tambah 32 bangku tapi susun di akhir baris yang bolong juga kak. bolong itu gak rapi, tapi kursi lebih itu makan lorong 🙃" },
      { authorId: 154, minutesAgo: 6391, content: "248 ÷ 18 = 13,8 baris kak, jadi 14 baris. 14 × 18 = 252. ketua panitia itu matematis, panggung yang gak matematis" },
      { authorId: 143, minutesAgo: 6383, content: "solusi murah: 10 baris 18 + 4 baris 17 = 248. bolongnya rapi, semua kebagian" },
    ],
  },
  {
    id: 215,
    authorId: 65,
    minutesAgo: 6445,
    shares: 9,
    content:
      "jalan ke sekolah 3,2 km dan gue jalananin 40 menit. gue itung kecepatan gue: 3,2 dibagi 40 menit... ribet, gue ubah dulu, 40 menit itu 2/3 jam. 3,2 ÷ 2/3 = 4,8 km per jam. gue itu gila lambat ya. temen gue naik angkot 15 menit, kecepatannya 3,2 ÷ 0,25 = 12,8 km per jam. BEDANYA HAMPIR TIGA KALI. gue nanya di sini: hitungan gue dan temen gue bener kan dua-duanya? terus kalau gue bersepeda dan kecepatan gue dobel, gue nyampe sekolah dalam berapa menit? 20 menit gue tebak, tapi gue gak percaya tebakan gue sendiri",
    comments: [
      { authorId: 137, minutesAgo: 6437, content: "hitungan dua-duanya benar. kecepatan dobel = 9,6 km per jam, waktu jadi setengahnya: 20 menit. tebakanmu benar sekali" },
      { authorId: 186, minutesAgo: 6429, content: "3,2 ÷ 0,25 = 12,8 benar. 15 menit itu 0,25 jam. lu harusnya denger keputusan naik angkot itu sekali lagi" },
      { authorId: 144, minutesAgo: 6421, content: "4,8 km per jam itu pelan banget bro, itu speed buat nge-scroll HP sambil jalan wkwk. sepeda itu pilihan hidup" },
    ],
  },
  {
    id: 216,
    authorId: 66,
    minutesAgo: 6475,
    shares: 18,
    content:
      "Soal bus yang membuat saya diam lama tadi pagi: di halte yang sama berangkat bus A tiap 12 menit dan bus B tiap 18 menit. Pukul 06.30 keduanya berangkat bersamaan. Pertanyaannya: jam berapa mereka berangkat bersama lagi? Saya menghitung kelipatan 12: 06.42, 06.54, 07.06. Kelipatan 18: 06.48, 07.06. Angka yang sama muncul di 07.06, jadi 36 menit kemudian. 36 itu kelipatan keduanya. Benar ya hitungan ini? Dan mengapa 30 menit bukan jawabannya, padahal terlihat sebagai angka yang wajar bagi mata saya",
    comments: [
      { authorId: 258, minutesAgo: 6467, content: "07.06 benar. 30 bukan jawaban karena 30 bukan kelipatan 12. jawabannya harus diterima kedua jadwal, bukan satu" },
      { authorId: 268, minutesAgo: 6459, content: "36 adalah KPK dari 12 dan 18. bus A melangkah 3 kali, bus B melangkah 2 kali, bertemu di langkah yang sama" },
      { authorId: 283, minutesAgo: 6451, content: "6.30 + 36 menit = 7.06 benar. 30 menit itu jebakan yang tampan, ia kelipatan 6 dan 10, bukan 12 dan 18" },
      { authorId: 143, minutesAgo: 6443, content: "hitungan Anda rapi sekali. dua daftar kelipatan itu cara paling jujur menemukan KPK" },
    ],
  },
  {
    id: 217,
    authorId: 67,
    minutesAgo: 6505,
    shares: 15,
    content:
      "(−3)² DIBAWAH GURU ITU 9. −3² DIBAWAH GURU ITU −9. SAMA-SAMA MINUS TIGA, GUE TIDAK MENERIMA KENAPA HASILNYA BEDA SAMPAI 18 JARAK. gurunya bilang kurung yang menentukan, TAPI KURUNG ITU BUKAN ISI SOAL, KURUNG ITU TANDA BACA. aduh maaf gue emosian, tapi tolong ada yang bisa jelasin DENGAN SABAR kenapa tanda kurung mengubah angka 9 jadi −9. gue udah ngepel lantai dua kali karena mikir",
    comments: [
      { authorId: 212, minutesAgo: 6497, content: "(−3)² itu (−3) × (−3) = 9. −3² itu −(3 × 3) = −9, pangkat kerjain 3 dulu, minusnya baru nempel. kurung itu bukan tanda baca, dia penanda siapa yang menang" },
      { authorId: 118, minutesAgo: 6489, content: "baca −3² dengan suara bre: 'minus tiga, dipangkat dua' gak sama dengan 'negatif dari tiga pangkat dua'. urutan baca beda, hasil beda" },
      { authorId: 313, minutesAgo: 6481, content: "ngepel dua kali itu investasi bre, sekarang lu gak akan lupa sampe lulus wkwk" },
    ],
  },
  {
    id: 218,
    authorId: 68,
    minutesAgo: 6535,
    shares: 27,
    content:
      "GUYS GUE BARU DIKASIH PELAJARAN DUNIA NYAMA SAMA KASIR DAN GUE MASIH DUDUK DI DEPAN KALKULATOR. jaket harga 65.000, rambu bilang diskon 40%. gue itung: 40% dari 65.000 = 26.000, itu potongannya, jadi bayar 65.000 − 26.000 = 39.000. PAS KASIR SCAN, KELUAR 26.000. gue protes, kasir bilang itu diskonnya 60%, dia salah ketik waktu set diskon. dia ganti, scan lagi, keluar 39.000. JADI TADI GUE MAU NABRAK KASIR YANG BENER ITUNGAN GUE SENDIRI. diskon 40% itu bayar 39.000 kan guys? dan 26.000 itu diskon 60%? tolong jawab sebelum gue balik ke toko itu dan minta maaf dengan jaket gue",
    comments: [
      { authorId: 268, minutesAgo: 6527, content: "benar dua-duanya. 40% dari 65.000 = 26.000 potongan, bayar 39.000. bayar 26.000 artinya potongan 39.000 = 60%. kasirnya memang salah ketik dan kamu menang argumen" },
      { authorId: 212, minutesAgo: 6519, content: "39.000 itu 60% dari harga. 26.000 itu 40% dari harga. diskon dan harga bayar itu dua sisi yang selalu menjumlah 100%" },
      { authorId: 227, minutesAgo: 6511, content: "minta maaf sambil pakai jaket 39.000 yang beneran dibeli, ending yang cukup kak 🙃" },
      { authorId: 313, minutesAgo: 6503, content: "cek cepat guys: bayar 60% dari harga kalau diskonnya 40%. 65.000 × 0,6 = 39.000. lu benar dari awal" },
    ],
  },
  {
    id: 219,
    authorId: 69,
    minutesAgo: 6565,
    shares: 11,
    content:
      "Akuarium baru di rumah berukuran 60 cm × 30 cm × 40 cm. Saya menghitung volumenya: 60 × 30 × 40 = 72.000 cm³. Satu liter adalah 1.000 cm³, jadi isinya 72 liter. Setengah penuh berarti 36 liter, dan 36 liter air bermassa 36 kilogram, angka yang membuat saya memeriksa kembali meja tempat akuarium itu berdiri. Yang ingin saya tanyakan: apakah konversi 1.000 cm³ = 1 liter itu memang persis, bukan perkiraan? Karena kalau benar, meja lama saya akan mengangguk atau protest, dan saya ingin tahu dulu siapa yang di sini berbohong",
    comments: [
      { authorId: 262, minutesAgo: 6557, content: "persis pak, 1.000 cm³ = 1 liter = 1 dm³. dan 1 liter air bermassa 1 kg pada kondisi normal. meja Anda menghadapi 36 kg itu hitungan yang sah" },
      { authorId: 283, minutesAgo: 6549, content: "72 liter itu akuarium yang layak pak. meja paling aman yang menopang di empat sudut, bukan di tengah" },
      { authorId: 199, minutesAgo: 6541, content: "36 kg air plus pasir plus tanaman, totalnya bisa 50 kg ke atas pak. meja memang harus diajak bicara dulu" },
    ],
  },
  {
    id: 220,
    authorId: 70,
    minutesAgo: 6595,
    shares: 6,
    content:
      "wkwk gue kalah sama soal umur anak tetangga. dia bilang: umur kakaknya 6 tahun lebih tua dari dia. empat tahun lagi umur kakaknya jadi 2 kali umur dia. sekarang umur mereka berdua berapa? gue jawab asal 10 dan 16, dia ketawa terus bilang salah. gue cek: 10 + 4 = 14, 16 + 4 = 20, 20 itu gak 2 kali 14. SALAH BENER. terus gue itung mundur pelan: adik 2, kakak 8. empat tahun lagi 6 dan 12. 12 = 2 × 6. PAS. adik itu 2 tahun dan kakak 8 tahun ya bener kan? anak 3 kelas nemuin gue nganggur di depan pagar",
    comments: [
      { authorId: 137, minutesAgo: 6587, content: "benar bro, 2 dan 8. cek balik: selisih 6 tetap, empat tahun lagi 6 dan 12, dua kali. umur selisih gak berubah, itu kuncinya" },
      { authorId: 227, minutesAgo: 6579, content: "10 dan 16 itu selisih 6 bro tapi empat tahun lagi 14 dan 20, gak dua kali. jawaban 2 dan 8 udah bener" },
      { authorId: 154, minutesAgo: 6571, content: "anak 3 kelas soal umur itu nah bro. dia udah pegang sistem, lu pegang tebakan wkwk" },
    ],
  },
  {
    id: 221,
    authorId: 71,
    minutesAgo: 6625,
    shares: 13,
    content:
      "modus dari data 3, 5, 4, 4, 5, 4, 6 itu berapa ya? gue jawab 4 karena angka 4 muncul tiga kali, terbanyak. temen sebangku yakin 5, alasannya 5 itu di tengah-tengah datanya. padahal di tengah-tengah itu namanya median kak, bukan modus 🙃 sekarang dia bilang gue yang nyampur istilah. tolong bantu baca ulang datanya deh, berapa kali sih angka 4 muncul, gue hitung ulang tiga kali tapi temen gue tetap menang argumen karena dia lebih keras suaranya",
    comments: [
      { authorId: 212, minutesAgo: 6617, content: "4 muncul tiga kali, 5 dua kali, 3 dan 6 sekali. modus 4, jawabanmu benar" },
      { authorId: 209, minutesAgo: 6609, content: "temanmu mendefinisikan tengah, soal menanyakan terbanyak. dua hal yang berbeda kak 🙃" },
      { authorId: 143, minutesAgo: 6601, content: "modus itu mode, yang paling sering muncul kak. 4-4-4 itu bukti, suara keras bukan bukti wkwk" },
      { authorId: 313, minutesAgo: 6593, content: "bawa kertas, lingkari tiap angka 4. tiga lingkaran. tunjuk. selesai 🙃" },
    ],
  },
  {
    id: 222,
    authorId: 72,
    minutesAgo: 6655,
    shares: 10,
    content:
      "Saya membandingkan dua beras di toko. Ukuran 5 kilogram harganya 68.000, berarti per kilogram 13.600. Ukuran 10 kilogram harganya 125.000, per kilogram 12.500. Selisih 1.100 per kilogram, jadi membeli 10 kilogram hemat 11.000. Persoalannya bukan harga, melainkan lemari dapur saya: karung 10 kilogram tidak muat, dan beras yang tergesek di rak atas biasanya jatuh saat anak mengambil panci. Saya membeli 10 kilogram karena hitungannya lebih murah, lalu menyesal setiap pagi. Menurut kalian, hemat 11.000 itu layak dibayar dengan kerapian dapur, atau keputusan terbaik justru dua karung 5 kilogram?",
    comments: [
      { authorId: 262, minutesAgo: 6647, content: "68.000 × 2 = 136.000, jadi dua karung 5 kilo memang lebih mahal 11.000. tapi keputusan belanja bukan cuma hitungan, itu juga urusan lengan dan rak" },
      { authorId: 283, minutesAgo: 6639, content: "11.000 per dua bulan itu 183 rupiah sehari ibu. kerapian dapur jauh lebih mahal harganya" },
      { authorId: 84, minutesAgo: 6631, content: "solusi tengah ibu: beli 10 kilo tapi pindahkan setengah ke wadah mika di bawah. hemat tetap jalan, rak tetap hidup" },
      { authorId: 102, minutesAgo: 6623, content: "12.500 per kilo memang lebih murah ibu. tapi anak yang kena panci jatuh bukan hitungan rupiah" },
    ],
  },
  {
    id: 223,
    authorId: 73,
    minutesAgo: 6685,
    shares: 7,
    content:
      "cek jadwal kereta saya dong. jarak 150 km, kecepatan rata-rata yang diberitahu petugas 60 km per jam. saya hitung 150 ÷ 60 = 2,5 jam, artinya 2 jam 30 menit. berangkat 07.40, sampainya 10.10. benar ya, bukan 10.40? karena 0,5 jam itu setengah jam, bukan 50 menit, dan saya pernah salah soal ini sekali di depan penumpang yang lebih tua dari ayah saya. petugas di stasiun juga bingung ketika saya menanyakan soal 0,5 ini. tolong konfirmasi dengan tegas supaya saya bisa berangkat dengan tenang besok pagi",
    comments: [
      { authorId: 258, minutesAgo: 6677, content: "2,5 jam = 2 jam 30 menit. 07.40 + 2:30 = 10.10. Anda benar, dan 0,5 jam memang 30 menit, bukan 50" },
      { authorId: 268, minutesAgo: 6669, content: "150 ÷ 60 = 2,5 jam benar. cara jaga-jaga: 1 jam menempuh 60 km, 2 jam 120 km, sisa 30 km = 30 menit. total 2 jam 30 menit" },
      { authorId: 192, minutesAgo: 6661, content: "10.10 yang benar. penumpang tua itu juga pernah salah, hanya lebih dahulu salahnya wkwk" },
    ],
  },
  {
    id: 224,
    authorId: 74,
    minutesAgo: 6715,
    shares: 4,
    content:
      "es teh jual 5 gelas 12.500. per gelas 2.500. modal gue 7.000. untung 12.500 − 7.000 = 5.500. per gelas untungnya 1.100. bener gk sih, kok kerasa gak rugi tapi gak kemana2 ya, wkwk",
    comments: [
      { authorId: 152, minutesAgo: 6707, content: "bener bre semua. untung 1.100 per gelas itu wajar buat es teh jualan kecil, volume yang naikin omzet" },
    ],
  },
  {
    id: 225,
    authorId: 75,
    minutesAgo: 6745,
    shares: 23,
    content:
      "TENGAH MALAM DAN GUE NEMU SOAL YANG MENOLAK TIDUR. PR: 2x + 3y = 12. gue jawab x = 3, y = 2. cek: 6 + 6 = 12 ✓. TERUS TEMEN GUE CHAT: x = 0, y = 4. cek: 0 + 12 = 12 ✓. JADI DUA JAWABAN BENAR BERSAMAAN. KENAPA. GUE DIDIK PANJANG UMUR NYA SATU JAWABAN SATU SOAL, KOK SEKARANG ADA SOAL YANG MAKIN DIBAHAS MAKIN BANYAK JAWABANNYA. temen gue bilang itu namanya persamaan dua variabel, jawabannya tak terhingga. TAK TERHINGGA. gue baru mau tidur jam 12 malem, sekarang gue mikirin kata tak terhingga sambil nonton kipas muter. tolong seseorang jelaskan kenapa begini, pake contoh uang pun gue terima",
    comments: [
      { authorId: 212, minutesAgo: 6737, content: "satu persamaan dua variabel itu satu garis lurus bre. semua titik di garis itu jawaban. x = 3 y = 2 dan x = 0 y = 4 sama-sama duduk di garis itu, dan titik-titik lain juga" },
      { authorId: 227, minutesAgo: 6729, content: "contoh uang bre: gue bilang 'dua dompet isinya total 12 ribu'. dompet 3 dan 2? bisa. dompet 0 dan 4? bisa. dompet 1 dan... 3,33 ribu? bisa juga kalau recehnya nyata 🙃" },
      { authorId: 268, minutesAgo: 6721, content: "jawaban tunggal itu lahir kalau ada DUA persamaan bre. satu persamaan baru satu syarat, syarat satu itu longgar. tidur dulu, besok kelasnya jelas" },
      { authorId: 313, minutesAgo: 6713, content: "solusi bulat nonnegatifnya aja udah tiga bre: (0,4), (3,2), (6,0). cek 2×6 + 3×0 = 12 ✓. yang pecahan masih numpuk di garisnya, gak habis itung" },
    ],
  },
]
