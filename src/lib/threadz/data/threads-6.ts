import type { ThreadzThread } from "../types"

// PART 6: cuitan 126-150 — ROMBAK V5 (6 Nov 2026): total ganti isi jadi FORUM
// MATEMATIKA (V3 lama masih diary harian). Slot teknis TIDAK berubah:
// id 126-150, authorId 26-50 urut, minutesAgo = 25 + 30*(id-1), komentar
// menyebar 0-6, komentar minutesAgo lebih kecil dari post-nya.
// Aturan lengkap: scripts/rumus-v2.md BAGIAN 1G + FORMULA HITAM 19 POLA.
// Tema file ini: rasio, proporsi & persen — bentuk BARU.
export const THREADS_PART6: ThreadzThread[] = [
  {
    id: 126,
    authorId: 26,
    minutesAgo: 3775,
    shares: 17,
    content:
      "nah bro, rute biasa 9 km tadi kelar 27 menit gara-gara jalanan jelek. gue itung sambil nunggu lampu: 9 dibagi 27 menit, tiap menit 0,33 km, kali 60 jadi 20 km per jam. bener kan itung gue bro? terus penumpang nanya, kalau kecepatan begini terus-terusan, tarif ikut naik gak bro, soalnya di apps harga sama padahal waktu dobel",
    comments: [
      { authorId: 137, minutesAgo: 3767, content: "itungan bener bro, 20 km/jam itu lambat banget buat 9 km. tarif gak ikut waktu, ikut jarak" },
      { authorId: 186, minutesAgo: 3759, content: "20 km per jam itu 3 km tiap 9 menit bro. macet mah untungnya mesin, bukan dompet" },
    ],
  },
  {
    id: 127,
    authorId: 27,
    minutesAgo: 3805,
    shares: 8,
    content:
      "dua rak gudang, isinya selisih 24 dus. rasio isi rak A terhadap rak B itu 3 banding 5. anak magang langsung bilang A 3 bagian B 5 bagian, tapi dia bingung satu bagian berapa dus. gue itung: selisih 2 bagian = 24, jadi satu bagian 12, berarti A 36, B 60, total 96. dia nanya bener gak, terus nanya lagi kenapa selisihnya 2 bagian bukan 5 dikurang 3... eh itu sama doang. tolong konfirmasi angkanya biar saya bisa kasih tahu kepala gudang dengan tenang",
    comments: [
      { authorId: 240, minutesAgo: 3797, content: "bener pak. 5 − 3 = 2 bagian selisihnya, 24 ÷ 2 = 12 per bagian. A 36, B 60" },
      { authorId: 192, minutesAgo: 3789, content: "cek balik: 36 + 60 = 96, dan 60 − 36 = 24. dua syarat terpenuhi, aman" },
      { authorId: 272, minutesAgo: 3781, content: "anak magang itu hampir nyampe pak, cuma mentok di langkah selisih. kasih dia kertas, dia pasti kejar" },
    ],
  },
  {
    id: 128,
    authorId: 28,
    minutesAgo: 3835,
    shares: 26,
    content:
      "RESEP KUE DIPORSIKAN DAN TEMEN GUE MASIH PROTES WKWKWK. resep untuk 4 porsi: terigu 300 g, garam 6 g. mau bikin 7 porsi. gue hitung faktornya 7 ÷ 4 = 1,75. terigu 300 × 1,75 = 525 g. garam 6 × 1,75 = 10,5 g. temen gue nanya KOK GARAM IKUT DIKALI GARAM ITU CUMA DIKIT, ASAL TAMBAH DUA TIGA KOMPORAN AJA. gue bilang yang diubarin porsinya bukan selera. DIA MASIH NGEYEL. gue jelasin pakai angka: kalau garam gak ikut rasio, kue 7 porsi bakal keasinan atau kekurangan, tergantung muka si tukang takar wkwkwk. kalian pakai cara apa?",
    comments: [
      { authorId: 131, minutesAgo: 3827, content: "1,75 penuh bre, semua bahan ikut. yang beda perlakuan cuma bahan yang dirasakan di akhir, itu urusan penyesuaian, bukan urusan resep" },
      { authorId: 223, minutesAgo: 3819, content: "7 ÷ 4 = 1,75 bre. terigu 525, garam 10,5. temen lu itu takut angka koma doang wkwk" },
      { authorId: 154, minutesAgo: 3811, content: "garam 10,5 itu 10 setengah gram bre, masuk sendok teh kecil aja. gak serumit keliatannya" },
    ],
  },
  {
    id: 129,
    authorId: 29,
    minutesAgo: 3865,
    shares: 10,
    content:
      "om-om, campuran oli mesin dua tak rasio 1:25. gue punya bensin 2,5 liter, jadi oli yang dibutuhin 100 ml. gue itung: 2.500 ml ÷ 25 = 100. ternyata om tukang bengkel tuang 150 ml, katanya biar mesin adem. mesin adem itu hitungan atau perasaan om? gue mau ikut om atau tetap pegang 100 ml",
    comments: [
      { authorId: 186, minutesAgo: 3857, content: "1:25 = 100 ml om muda, itungan lu bener. 150 itu rasio 1:16, kekentalan naik, asap nanti tebel" },
      { authorId: 240, minutesAgo: 3849, content: "tanya om-omnya pakai rasio 1:16 ato 1:25. kadang om yang tuang besar ikut hafalan mesin lama, bukan perasaan" },
      { authorId: 213, minutesAgo: 3841, content: "pegang buku mesin om. semua rasio udah ditulis di sana, om-om lama kadang hafalan lama ikut mesin lama" },
    ],
  },
  {
    id: 130,
    authorId: 30,
    minutesAgo: 3895,
    shares: 15,
    content:
      "si anak membawa soal peta: skala 1:250.000, jarak dua kota di peta 4,8 cm. Ia menjawab 1.200 km. Saya mencoba mengingatkan bahwa 250.000 yang dimaksud adalah sentimeter, sehingga 4,8 × 250.000 = 1.200.000 cm, dan 100.000 cm adalah 1 km, jadi hasilnya 12 km. Ia protes keras: kalau dikalikan bilangan besar, kok hasilnya jadi kecil. Saya menghargai protes itu, karena perpindahan satuan memang tidak terlihat. Apakah ada yang punya analogi sederhana untuk memperlihatkan bahwa cm ke km itu memotong lima nol, bukan menambah?",
    comments: [
      { authorId: 262, minutesAgo: 3887, content: "pakai tangga satuan bu: cm → m → km, tiap anak tangga memotong dua nol. lima nol terpotong total, jadi angka menyusut" },
      { authorId: 268, minutesAgo: 3879, content: "biar kelihatan bu, tulis 1.200.000 cm di kertas besar, terus suruh dia ukur keliling lapangan 100.000 cm = 1 km. 12 lapangan = 12 km" },
      { authorId: 143, minutesAgo: 3871, content: "kunci bu: satuan ikut dibawa. 1.200.000 cm itu memang besar, tapi dalam km dia hanya 12" },
    ],
  },
  {
    id: 131,
    authorId: 31,
    minutesAgo: 3925,
    shares: 18,
    content:
      "sabun merek sama, rak kiri: 3 biji 13.500, rak kanan: 5 biji 21.000. pelanggan mau hemat, gue itungin: kiri 4.500 per biji, kanan 4.200 per biji, kanan lebih murah 300 per biji. dia ambil yang kiri 3 biji, katanya dia cuma butuh 3. gue mikir, hemat 300 per biji itu buat dia 900 kalau ambil 3, tapi ambil 5 berarti keluar uang lebih dulu 21.000 vs 13.500. hemat yang mana sebenarnya sih, per biji atau per total keluaran",
    comments: [
      { authorId: 205, minutesAgo: 3917, content: "dua-duanya benar, tergantung butuh. per biji kanan lebih murah, tapi kalau hanya butuh 3, keluaran terkecil tetap kiri" },
      { authorId: 240, minutesAgo: 3909, content: "hemat yang benar dihitung dari selisih pengeluaran buat kebutuhan yang sama. ambil lebih dari butuh itu nunda belanja, bukan hemat" },
      { authorId: 84, minutesAgo: 3901, content: "pelanggan itu jujur sama dirinya bu, butuh 3 ya ambil 3. kasir yang jago itungin per biji tetap pegang nilai" },
    ],
  },
  {
    id: 132,
    authorId: 32,
    minutesAgo: 3955,
    shares: 12,
    content:
      "tomat kemarin 8 ribu per kilo, hari ini 10 ribu. pembeli ikut bernada: naik 2 ribu berarti naik 20 persen teh. gue ikut manggut-manggut, terus malam tadi kepikiran, 2 dari 8 itu bukan 2 dari 10. gue itung pakai kertas: 2 ÷ 8 = 0,25, jadi naik 25 persen. nah sekarang gue bingung sama diri sendiri, bener sih hitungan gue, tapi kenapa orang-orang otomatis pakai 10 sebagai pembaginya? teh ikut kacau juga di akhir pekan",
    comments: [
      { authorId: 102, minutesAgo: 3947, content: "pembaginya harga lama teh, 8 ribu. 2 ÷ 8 = 25 persen. orang otomatis pakai harga baru karena itu angka yang baru dilihat" },
      { authorId: 84, minutesAgo: 3939, content: "25 persen teh bener. kenaikan selalu dibanding dari mana dia berangkat, bukan kemana dia tiba" },
      { authorId: 60, minutesAgo: 3931, content: "teh tinggal bilang: dari 8 ke 10. kalau harga turun balik ke 8, turunnya 20 persen. bolak-baliknya gak simetris, itu yang bikin kacau" },
    ],
  },
  {
    id: 133,
    authorId: 33,
    minutesAgo: 3985,
    shares: 22,
    content:
      "Resep nasi: 1 cup beras pakai 1,5 cup air. Aku akan memasak 3 cup beras, jadi airnya 4,5 cup. Yang membuatku ragu bagian garam: resep menulis 1/4 sendok teh untuk 2 cup beras. Untuk 3 cup berarti 1,5 kali bagian itu, yaitu 3/8 sendok teh. Setengah sendok teh kecil kekurangannya tidak sampai separuh, tetapi ketiga per delapan pun tidak ada alatnya di dapurku. Apakah 3/8 memang benar, dan kira-kira cara mengambilnya bagaimana tanpa membeli sendok baru?",
    comments: [
      { authorId: 277, minutesAgo: 3977, content: "3/8 benar bu: 1/4 × 1,5. ambil 1/4 sendok teh penuh lalu separuhnya lagi, jadilah 3/8" },
      { authorId: 90, minutesAgo: 3969, content: "1/8 itu separuh dari 1/4 bu. jadi 1/4 penuh + 1/4 separuh = 3/8. tangan lebih praktis dari alat" },
      { authorId: 59, minutesAgo: 3961, content: "ibu bisa juga lewati desimal: asin belakangan selalu bisa ditambah, asin dari awal susah ditarik" },
    ],
  },
  {
    id: 134,
    authorId: 34,
    minutesAgo: 4015,
    shares: 6,
    content:
      "4 lampu pos, 18 watt masing-masing, nyala 12 jam. 18 × 12 = 216 Wh per lampu. ×4 = 864 Wh. logbook: 0,86 kWh per malam. ronde.",
    comments: [],
  },
  {
    id: 135,
    authorId: 35,
    minutesAgo: 4045,
    shares: 23,
    content:
      "mikir di angkot: motor 40 km per jam, terus berhenti warung 15 menit, terus jalan lagi 40 km per jam. rata-ratanya jadi berapa sih. kok rasanya bukan 40 lagi, karena waktunya kebanyakan. tapi kalau dibilang 40 dikurang sesuatu, dikurangnya berapa. nanya ke google pusing, nanya di sini mungkin lebih manusiawi",
    comments: [
      { authorId: 227, minutesAgo: 4037, content: "rata-rata itu total jarak dibagi total waktu bre. berhenti 15 menit bikin waktu panjang, jadi rata-rata turun. butuh tau jarak perjalanan dulu baru bisa dihitung" },
      { authorId: 118, minutesAgo: 4029, content: "misal bre: 40 km dalam 1 jam + 15 menit istirahat = 40 ÷ 1,25 jam = 32 km per jam. istirahat makan rata-rata" },
      { authorId: 313, minutesAgo: 4021, content: "kuncinya bre: kecepatan gak diaverase-kan, yang diaverase jarak per waktu total. waktunya ikut dihitung walau diam" },
    ],
  },
  {
    id: 136,
    authorId: 36,
    minutesAgo: 4075,
    shares: 16,
    content:
      "BAGIAN HAFALAN DIBAGI DAN GUE JADI SENGSEK BANGET. 120 slide atlas harus dibagi 5 orang, tiap orang 24. satu angkatan minta beban kurang seperempat karena dia jaga lab, jadi 24 × 3/4 = 18. sisa bebannya 102 buat 4 orang, per orang 25,5. GIMANA CARA NYA MIKIR 25,5 SLIDE. setengah slide itu artinya apa, halaman yang ketuker? gue panik mikir keadilan, yang minta dikurangi seneng, empat lainnya dendam diam-diam. ada yang pernah urus pembagian yang hasilnya gak bulat gini",
    comments: [
      { authorId: 212, minutesAgo: 4067, content: "25,5 itu berarti 25 + 26, dua orang dapat 26 dan dua orang dapat 25. total tetap 102" },
      { authorId: 209, minutesAgo: 4059, content: "kalau slide gak bisa dibelah, yang dibelah bebannya: satu orang ambil slide gambar doang. gambar lebih ringan dari teks" },
      { authorId: 227, minutesAgo: 4051, content: "cara adilnya undian kak, yang dapat 26 dan 25 ditentukan undi. keadilan prosedur bikin dendam hilang 🙃" },
      { authorId: 143, minutesAgo: 4044, content: "24 × 3/4 = 18 kak, dan 102 ÷ 4 = 25,5. hitungannya sudah bener, tinggal dibulatkan dengan undian" },
    ],
  },
  {
    id: 137,
    authorId: 37,
    minutesAgo: 4105,
    shares: 9,
    content:
      "Warung es teh sebelah menaikkan harga dari 3 ribu menjadi 4 ribu awal bulan ini. Kenaikan itu 1 dari 3, sekitar 33 persen. Yang menarik, tetangga memperkirakan pelanggannya berkurang sedikit, tetapi dalam dua minggu terakhir deretan gelas di mejanya justru penuh lagi, terutama setelah magrib. Ia menambah satu toples kerupuk kecil di meja, mungkin itu pengaruhnya. Saya menghitung sekilas: kalau dulu sehari 100 gelas kini 90 gelas, pendapatannya berubah dari 300 ribu menjadi 360 ribu. Adakah pengalaman serupa di lingkungan warga, bahwa harga naik tetapi pembeli bertahan?",
    comments: [
      { authorId: 258, minutesAgo: 4097, content: "90 gelas × 4 ribu = 360 ribu benar pak. harga naik 33 persen, penjualan turun 10 persen, hasil tetap untung" },
      { authorId: 283, minutesAgo: 4089, content: "es teh itu kebutuhan pak, bukan kemewahan. kalau naiknya sampai 5 ribu baru deretan gelas kosong" },
      { authorId: 199, minutesAgo: 4081, content: "toples kerupuk itu pemasaran yang gak keluar biaya pak. pelanggan bayar 4 ribu, dapat perasaan 3 ribu" },
    ],
  },
  {
    id: 138,
    authorId: 38,
    minutesAgo: 4135,
    shares: 20,
    content:
      "bunda, PR peta: skala 1:10.000, jarak rumah ke sekolah di peta 3 cm. aku itung 3 × 10.000 = 30.000 cm. terus aku ubah ke meter: 30.000 ÷ 100 = 300 meter. bener kan? temen sebangku bilang 3.000 meter, dia gak bagi 100. aku yakin aku yang bener tapi dia bilang angka besar itu lebih kayak jarak sekolah wkwk. sekolah gue di seberang gang doang bunda, gak mungkin 3 km. tolong jawab sebelum dia posting hasil PR di grup kelas",
    comments: [
      { authorId: 63, minutesAgo: 4127, content: "300 meter dik, hitunganmu benar. temenmu lupa cm ke m harus dibagi 100. 3 km itu jalan naik gunung, bukan ke sekolah" },
      { authorId: 143, minutesAgo: 4119, content: "trik dik: 1:10.000 artinya 1 cm peta = 100 m nyata. jadi 3 cm = 300 m. hafalin konversi satu langkahnya" },
      { authorId: 24, minutesAgo: 4111, content: "JAWABAN CUCU KU YANG LAIN JUGA 300. TEMENMU HARUS BELAJAR TANGGA SATUAN. JANGAN POSTING DI GRUP DULU, MALU" },
      { authorId: 187, minutesAgo: 4103, content: "angka besar itu bukan bukti jarak besar dik. yang menentukan satuannya" },
    ],
  },
  {
    id: 139,
    authorId: 39,
    minutesAgo: 4165,
    shares: 32,
    content:
      "Trik kecil yang saya suka: 12,5 persen itu seperdelapan. Jadi menghitung 12,5 persen dari 200.000 sama saja membagi tiga kali: 200.000 ÷ 2 = 100.000, ÷ 2 = 50.000, ÷ 2 = 25.000. Kurang lebih sama hasilnya dengan 200.000 × 0,125, tetapi dibagi dua tiga kali itu tidak menuntut kertas. Keluarga pemilik warung dekat rumah sekarang memakai trik ini untuk hitung diskon dan menurut cerita mereka kepalanya lebih ringan. Kurang lebih itu saja. Adakah persen lain yang punya bentuk pecahan sewarna, yang bisa dipakai sehari-hari tanpa kalkulator?",
    comments: [
      { authorId: 318, minutesAgo: 4157, content: "25% = 1/4 pak, bagi dua dua kali. 75% = 3/4, bagi 4 kali 3. 20% = 1/5, bagi 5" },
      { authorId: 262, minutesAgo: 4149, content: "6,25% = 1/16 pak, satu langkah lagi dari 12,5. sering muncul di cicilan... eh, di potongan kertas ujian" },
      { authorId: 283, minutesAgo: 4141, content: "37,5% = 3/8 pak. setengah 75. trik yang sama, jalan mundur" },
      { authorId: 258, minutesAgo: 4133, content: "keluarga warung itu contoh terbaik pak. matematika yang dipakai tiap hari jadi otot" },
    ],
  },
  {
    id: 140,
    authorId: 40,
    minutesAgo: 4195,
    shares: 13,
    content:
      "pupuk daun: 1 sendok teh untuk 2 liter air. ember aku 10 liter. cucu aku itung 10 × 1 = 10 sendok, aku bilang kok 10, 10 liter itu 5 kali dari 2 liter, jadi 5 sendok. dia ngotot, katanya 2 liter pakai 1 sendok, 10 liter pasti lebih banyak dari 5. aku cek pakai gelas: 2 liter itu 10 gelas, 10 liter 50 gelas. gelasnya 5 kali. JADI SENDOKNYA JUGA 5 KAN. kenapa anak sekarang itung kok membesar-membesarkan, aku ikut ragu padahal aku yang pegang ember",
    comments: [
      { authorId: 84, minutesAgo: 4187, content: "5 sendok benar bu. 10 ÷ 2 = 5. cucunya mungkin mengira setiap liter butuh sendok" },
      { authorId: 199, minutesAgo: 4179, content: "gelas 50 vs 10 itu 5 kali bu. rasio tumbuh sama sendoknya. hitungan nenek yang jalan" },
      { authorId: 60, minutesAgo: 4171, content: "cucu itu mikir 10 liter = 10 bagian bu, padahal bagian yang benar 5 bagian isi 2 liter" },
    ],
  },
  {
    id: 141,
    authorId: 41,
    minutesAgo: 4225,
    shares: 4,
    content:
      "paket boneka. 40 × 30 × 20 = 24.000 cm³. dibagi 6.000 = 4 kg volumetrik. berat asli 3 kg. bayar 4 kg. boneka menang lawan timbangan.",
    comments: [
      { authorId: 240, minutesAgo: 4217, content: "volumetrik selalu makan kurir begitu bro. 24.000 ÷ 6.000 = 4 itu standar" },
      { authorId: 205, minutesAgo: 4209, content: "pelanggan biasanya paham kalau ditunjukin kertas hitung: panjang kali lebar kali tinggi dibagi 6.000" },
    ],
  },
  {
    id: 142,
    authorId: 42,
    minutesAgo: 4255,
    shares: 21,
    content:
      "tagihan air bulanan tiga kamar: total pemakaian 24 m³, tagihan 61.200. dibagi rata jadi 20.400 per kamar. masalahnya kamar A dua orang, kamar B dua orang, kamar C cuma satu orang, dan C memang hampir tidak pernah mandi lama. si C protes, dua orang di kamar A juga protes kalau dibagi kepala mereka tanggung lebih. aku bukan pengacara, aku cuma ibu kos yang pegang bon. kalian kalau jadi pengurus kos, bagi rata atau bagi kepala?",
    comments: [
      { authorId: 60, minutesAgo: 4247, content: "bagi kepala bu: 5 orang × 12.240. kamar A 24.480, B 24.480, C 12.240. C miskonsepsi soal merata, bukan soal air" },
      { authorId: 84, minutesAgo: 4239, content: "kalau alat ukur per kamar, keadilannya per kamar bu. yang ngeprotes itu biasanya yang baru pindah" },
      { authorId: 106, minutesAgo: 4231, content: "61.200 ÷ 3 = 20.400 bu, hitungan rata kakaknya benar. tapi keadilan beda barang dengan hitungan" },
      { authorId: 143, minutesAgo: 4223, content: "solusi tengah bu: bulan depan pasang catatan pemakaian per kamar. satu bulan data, semua protes selesai" },
    ],
  },
  {
    id: 143,
    authorId: 43,
    minutesAgo: 4285,
    shares: 8,
    content:
      "mesin utama kapasitas 240 unit per jam. shift 7,5 jam, jadi target 1.800. realisasi hari ini 1.620. kepala minta persen efisiensi. gue itung 1.620 ÷ 1.800 = 0,9, jadi 90 persen. dia tanya 10 persen itu unit berapa, gue jawab 180. dia diam lama, terus bilang catat besok jam berapa mesin berhenti. pertanyaan gue: efisiensi 90 persen itu di kalian dianggap bagus atau bahaya, biar gue tau harus senyum atau siap overtime",
    comments: [
      { authorId: 240, minutesAgo: 4277, content: "90 persen itu bagus pak di mesin tua, bahaya kalau mesin baru. yang penting trennya, bukan satu hari" },
      { authorId: 272, minutesAgo: 4269, content: "180 unit itu 45 menit mesin penuh pak. catat durasi berhenti besok, angka akan bicara" },
      { authorId: 236, minutesAgo: 4261, content: "kami standarnya 92. 90 itu masih aman tapi udah dipanggil rapat wkwk" },
    ],
  },
  {
    id: 144,
    authorId: 44,
    minutesAgo: 4315,
    shares: 5,
    content:
      "wkwk belanja otak gue jebol. telur ecer di tukang sayur 2.500 per butir. di warung ada paket setengah kilo katanya 10 butir 26.000. gue itung per butir 2.600. MAHAL 100 PERAK dibanding ecer. terus gue mikir, kenapa gue mikirin 100 perak sampe 5 menit di depan kulkas. kalian pilih mana, yang murah 100 perak tapi jalan jauh, atau yang langsung bisa dimasak",
    comments: [
      { authorId: 152, minutesAgo: 4307, content: "100 perak × 10 butir = 1.000 perak bre. ongkos jalan lu kemana-mana juga 1 ribuan. ambil yang deket" },
      { authorId: 106, minutesAgo: 4299, content: "yang bisa dimasak sekarang bre, telur gak kenal harga wkwk" },
      { authorId: 313, minutesAgo: 4291, content: "per kilo: 10 butir setengah kilo berarti 20 butir per kilo = 52.000. ecer 50.000 per kilo. beda 2.000 per kilo bre" },
    ],
  },
  {
    id: 145,
    authorId: 45,
    minutesAgo: 4345,
    shares: 19,
    content:
      "Rutinitas jalan pagi saya: rute 2,4 km. Tahun lalu saya menyelesaikannya 35 menit. Sebulan latihan terakhir, 30 menit. Teman jalan pagi menyebut saya menjadi 14 persen lebih cepat, dan saya memperhatikan angka itu: selisih waktu 5 menit dibagi 35 menit memang sekitar 14 persen. Namun kalau dihitung kecepatan, dulu sekitar 4,11 km per jam, sekarang 4,8 km per jam, naik sekitar 16 persen. Dua persen itu pergi ke mana, saya belum menemukan penjelasan yang rapi. Mungkin di sini ada yang suka menghitung sambil jalan.",
    comments: [
      { authorId: 283, minutesAgo: 4337, content: "dua persen itu tidak hilang pak. satu dihitung dari waktu (5/35 = 14,3%), satu dari kecepatan (0,69/4,11 ≈ 16,8%). pembaginya beda" },
      { authorId: 258, minutesAgo: 4329, content: "2,4 ÷ 0,5 jam = 4,8 km per jam. kecepatan sekarang pak, dan itu prestasi untuk usia mana pun" },
      { authorId: 192, minutesAgo: 4321, content: "naiknya memang beda arah pak: waktu turun 14%, kecepatan naik lebih besar karena pembaginya ikut mengecil" },
    ],
  },
  {
    id: 146,
    authorId: 46,
    minutesAgo: 4375,
    shares: 10,
    content:
      "Anggaran kegiatan sekolah: total 2.500.000. Untuk belanja kertas disetujui 12 persen. Aku hitung 2.500.000 × 12 ÷ 100 = 300.000. Bos berkata persetujuannya 250 ribu, karena 10 persen dari 2.500.000. Aku cek berulang: 12 persen itu memang 300 ribu. Kemungkinan bos mengingat persen lain, atau total lain. Besok rapat anggaran dan aku tidak ingin salah menyalahkan orang 😅. Tolong konfirmasi angka 300 ribu itu benar ya untuk 12 persen",
    comments: [
      { authorId: 268, minutesAgo: 4367, content: "benar kak, 12% × 2.500.000 = 300.000. 250 ribu itu 10 persen. bos mungkin mencampur dua persen" },
      { authorId: 227, minutesAgo: 4359, content: "siapkan dua angka di slide kak: 10% = 250 ribu, 12% = 300 ribu. bos akan pilih sendiri dan rapat beres 😅" },
      { authorId: 322, minutesAgo: 4351, content: "2.500.000 × 0,12 = 300.000 kak. kalkulator, angka, dan matahari sepakat" },
    ],
  },
  {
    id: 147,
    authorId: 47,
    minutesAgo: 4405,
    shares: 17,
    content:
      "Nasabah menabung 750.000 setiap bulan selama empat bulan dan menganggap bukunya akan menunjukkan 3.000.000. Buku menampilkan 2.900.000. Ia datang dengan wajah merah karena mengira ada 100 ribu yang tertelan. Saya jelaskan pelan: empat bulan ada biaya administrasi 25.000 per bulan, total 100.000, sehingga saldonya 2.900.000. Ia menanyakan kenapa biaya tidak diberitahu waktu buka rekening. Pertanyaan itu sulit, karena kertasnya pernah ia tanda tangani. Yang ingin saya tanyakan ke rekan teller: cara menjelaskan biaya administrasi ke nasabah tanpa terdengar seperti menutupi kesalahan pihak kami sendiri?",
    comments: [
      { authorId: 84, minutesAgo: 4397, content: "tunjukkan empat baris biaya di buku, satu per bulan, jangan dicampur. nasabah melihat pola, bukan teori" },
      { authorId: 262, minutesAgo: 4389, content: "frasa yang sering membantu pak: ini biaya yang sama tiap bulan, bukan potongan acak. lalu tunjukkan tanggalnya" },
      { authorId: 283, minutesAgo: 4381, content: "750 × 4 = 3.000.000 benar pak, dan 4 × 25.000 = 100.000. dua hitungan itu tidak bertengkar, hanya belum diperkenalkan" },
    ],
  },
  {
    id: 148,
    authorId: 48,
    minutesAgo: 4435,
    shares: 5,
    content:
      "Peta dinding perpustakaan berskala 1:1.500. Jalan yang panjangnya 6 cm di peta ternyata 9.000 cm, yakni 90 meter. Dulu saya menempuhnya 15 menit sambil membawa buku. Sekarang jalan itu rata, dan saya masih memilih jalan kaki. Peta tidak pernah bohong, hanya tata caranya yang perlu diingat.",
    comments: [],
  },
  {
    id: 149,
    authorId: 49,
    minutesAgo: 4465,
    shares: 29,
    content:
      "bos-bos, itung antrian rambut sore tadi. jam 16.00 datang 6 orang: 2 minta model rumit 30 menit per kepala, 4 biasa 15 menit. gue hitung: 2 × 30 = 60, 4 × 15 = 60, total 120 menit = 2 jam. artinya orang terakhir kepotong sekitar jam 18.00. gue kasih tahu, yang paling akhir malah seneng, katanya bisa nongkrong dulu. kalian kalau jadi tukang cukur, kasih tahu jam selesai atau biarkan kaget pas duduk",
    comments: [
      { authorId: 118, minutesAgo: 4457, content: "kasih tahu bos, antrian yang tahu jam selesai jadi antrian tenang. kaget di kursi bikin rambut ikut berdiri" },
      { authorId: 199, minutesAgo: 4449, content: "120 menit itu tepat bos. yang nunggu 2 jam biasanya yang balik lagi jadi pelanggan tetap kalau tempatnya nyaman" },
      { authorId: 240, minutesAgo: 4441, content: "gue kalau jadi pelanggan malah suka ditanya dulu bos. ngecek HP di warung rambut itu liburan gratis wkwk" },
    ],
  },
  {
    id: 150,
    authorId: 50,
    minutesAgo: 4495,
    shares: 26,
    content:
      "GUYS, LAPORAN KUAH. stok kuah 5 liter untuk 40 porsi, artinya 125 ml per porsi, pas banget sejak tiga bulan. MALAM INI TAMU DATANG 60 ORANG. 60 × 125 ml = 7.500 ml = 7,5 liter. panci gue terbesar 6 liter. GUYS, GUE KURANG 1,5 LITER DAN WAKTU TINGGAL 40 MENIT. gue sudah suruh anak magang rebus air di panci kecil sekaligus. pertanyaan gue sambil aduk: 125 ml per porsi itu terlalu dermaga atau memang standar mie? GUYS tolong jawab cepat, adukannya tidak menunggu",
    comments: [
      { authorId: 44, minutesAgo: 4487, content: "125 ml itu wajar guys, kuah mie kosong itu dosa. tambah air rebus + bumbu instan cadangan, tamu gak bakal tau" },
      { authorId: 154, minutesAgo: 4479, content: "7.500 ml guys, panci 6 liter kurang 1,5. panci kecil 2 liter udah cukup cadangan" },
      { authorId: 336, minutesAgo: 4471, content: "60 × 125 = 7.500 guys. selamat memasak dua panci, itu workout malam ini" },
    ],
  },
]
