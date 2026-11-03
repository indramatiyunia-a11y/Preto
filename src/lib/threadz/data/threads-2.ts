import type { ThreadzThread } from "../types"

// PART 2: thread 26-50
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 39,
    minutesAgo: 6000,
    shares: 97,
    content:
      "kenapa playlist shuffle masih nyimpen 3 lagu artis yang sama berurutan? karena acak yang beneran acak itu GAK 'keliatan acak'. otak lu gila cari pola, mesin gak ngasih pola. makanya aplikasi bikin shuffle yang 'lebih acak dari acak'. manusia: curiga sama kebetulan, yakin sama pola ilusi",
    comments: [
      { authorId: 16, minutesAgo: 5900, content: "jadi aplikasinya gak salah, telinga gue yang bego" },
      { authorId: 35, minutesAgo: 5600, content: "gue masih curiga aplikasi bisa baca pikiran" },
      { authorId: 45, minutesAgo: 5200, content: "gue pernah di tim rekomendasi. fitur kami kami namain 'keteraturan yang menyenangkan'. user senang, satu ilmu statistik mati" },
    ],
  },
  {
    id: 27,
    authorId: 15,
    minutesAgo: 6600,
    shares: 72,
    content:
      "belanja 47.500, gue bayar 100rb plus 2.500 biar gampang. kasir kebalik kasih kembalian 55rb. gue balikin 5rb. dia senyum. secara sistem: gue bayar 102.500, barang 47.500, kembalian seharusnya 55rb... eh malah jadi 60rb. untung dunia masih dijalanin manusia yang bisa ngitung sambil senyum",
    comments: [
      { authorId: 1, minutesAgo: 6500, content: "gue kasir. kadang otak ngaco pas shift malem. pelanggan yang jujur balikin kembalian itu bakal masuk surga, serius" },
      { authorId: 9, minutesAgo: 6200, content: "gue paling segan ini. takut kasirnya malah tambah bingung dobel" },
      { authorId: 46, minutesAgo: 5700, content: "sekali gue kasih 2.500 terus kasirnya bingung total. akhirnya gue bilang 'biar bulat bang'. kita ketawa bareng. momen" },
    ],
  },
  {
    id: 28,
    authorId: 44,
    minutesAgo: 7200,
    shares: 88,
    content:
      "kenapa baterai dari 100% ke 50% itu lama banget, terus dari 20% ke 1% CEPET BANGET?? persen itu bohong. baterai mah bohong pake kostum persen",
    comments: [
      { authorId: 36, minutesAgo: 7100, content: "persen itu estimasi dari tegangan yang gak linear. turun 100-50 itu santai, 20-0 itu jebreg. gitarnya gak rusak, senarnya yang beda tebal" },
      { authorId: 23, minutesAgo: 6800, content: "gue pernah kejar2 colokan di angka 15%. gue percaya persen, gue cuma gak percaya diri" },
      { authorId: 46, minutesAgo: 6300, content: "1% di HP gue bisa nahan setengah lagu. persen paling berotot sedunia" },
    ],
  },
  {
    id: 29,
    authorId: 42,
    minutesAgo: 7800,
    shares: 65,
    content:
      "pesanan kue dobel, resep buat 24 piece harus jadi 36. skala 1,5. telur 4 x 1,5 = 6. gampang. tepung 250gr x 1,5 = 375gr. baking powder 1 sdt jadi 1,5 sdt = 1 sdt + 1/2 sdt. SUHU OVEN TETAP 180, JANGAN DINAEEKAN. kue gak butuh semangat dobel, dia butuh skala yang jujur",
    comments: [
      { authorId: 7, minutesAgo: 7700, content: "yang dinaekan suhunya kemarin hasilnya: atas gosong, bawah basah. bencana dua lapis" },
      { authorId: 34, minutesAgo: 7400, content: "masak2an ternyata penuh pecahan. gue baru sadar pas harus mbalik takaran" },
      { authorId: 42, minutesAgo: 6900, content: "tips: catat semua skala di kertas. jangan percaya ingatan. ingatan itu rata-rata yang gampang korup" },
    ],
  },
  {
    id: 30,
    authorId: 19,
    minutesAgo: 8400,
    shares: 79,
    content:
      "map bilang jarak 5 km. realitanya naik turun bukit, 7,3 km kaki gue yang nanggung. matematika map: garis lurus, dunia pythagoras. kaki gue: jalan beneran. beda 2,3 km itu beda nyawa",
    comments: [
      { authorId: 4, minutesAgo: 8300, content: "sesama penunggang. jarak di map itu iklan, jalan nyata itu kenyataan" },
      { authorId: 27, minutesAgo: 8000, content: "ini beda jarak lurus vs jarak sepanjang jalan. kota gak dirancang buat garis lurus, dia dirancang buat tanjakan dan warung" },
      { authorId: 16, minutesAgo: 7500, content: "baru tau istilahnya dari sini. makasih, materi yang gak pernah kebagian jam pelajaran" },
    ],
  },
  {
    id: 31,
    authorId: 5,
    minutesAgo: 9500,
    shares: 210,
    content:
      "kuis: 3 pintu, 1 mobil 2 kambing. lu pilih 1 pintu, host (yang TAU isi semua pintu) buka 1 pintu kambing, terus nawarin: pindah atau tetep? yang jawab 'yaudah 50:50' silakan duduk. jawaban bener: PINDAH. peluang menang jadi 2/3. info gratis dari pihak yang tahu segalanya itu langka, diambil la",
    comments: [
      { authorId: 2, minutesAgo: 9400, content: "gue tetep 50:50. dua pintu satu hadiah. matematika sd" },
      { authorId: 9, minutesAgo: 9200, content: "gue dulu juga bego soal ini. abis disuruh simulasi 100x di kertas: pindah. matematika menang, gengsi yang kalah" },
    ],
  },
  {
    id: 32,
    authorId: 21,
    minutesAgo: 10500,
    shares: 134,
    content:
      "kelas 23 orang, peluang ada 2 orang yang ultah sama itu udah 50%. gak percaya? yang dihitung bukan 'cocok sama ultah LU', tapi 'ADA PASANGAN yang cocok'. jumlah pasangan yang mungkin: 253. matematika gak peduli lu merasa spesial",
    comments: [
      { authorId: 43, minutesAgo: 10400, content: "kelas gue dulu 32 orang, ada 2 orang ultah sama persis. waktu itu gue kira mereka kembar yang putus" },
      { authorId: 45, minutesAgo: 10000, content: "yang lebih seru: ultah 29 Februari. peluangnya 1/1461, dan tetep aja bisa ngehit kelas sekelas. langka gak berarti mustahil ketemu" },
    ],
  },
  {
    id: 33,
    authorId: 50,
    minutesAgo: 11500,
    shares: 45,
    content:
      "tiap malem gue liat jam 11:11. HARUSNYA ADA ARTINYA. hari ini gue liat lagi: 11:11. dua hari berturut2. kebetulan sebesar ini GAK MUNGKIN. semesta ngomong sama gue lewat angka, kalian aja yang gak denger",
    comments: [
      { authorId: 45, minutesAgo: 11400, content: "lu ngeliat jam ratusan kali sehari. otak lu ngefilter, cuma 11:11 yang diinget. namanya bias seleksi. semestanya gak ngomong, filter lu yang cerewet" },
      { authorId: 31, minutesAgo: 11200, content: "gue juga pernah. gue sadar pas gue liat 11:11 pas baru bangun siang. semesta ternyata juga bisa kejedot pintu" },
    ],
  },
  {
    id: 34,
    authorId: 48,
    minutesAgo: 12500,
    shares: 187,
    content:
      "bukti formal 1+1=2 di buku Principia Mathematica baru selesai di halaman 379. sebelum itu: definisi, aksioma, notasi. jadi pas ada yang bilang 'matematika itu gampang tinggal itung', dia ngomong dari halaman 380",
    comments: [
      { authorId: 16, minutesAgo: 12400, content: "379 halaman buat 1+1=2. gue 379 halaman buat laporan bulanan dan tetep ditolak atasan. dunia gak adil" },
      { authorId: 21, minutesAgo: 12000, content: "bukan 'belum bener', tapi 'belum dibuktikan formal'. ada dua kategori di dunia: gampang dipercaya, susah dibuktikan. hidup penuh hal begini" },
    ],
  },
  {
    id: 35,
    authorId: 6,
    minutesAgo: 13500,
    shares: 66,
    content:
      "gue main matematika sama keponakan gue 5 tahun: 'tak hingga tambah 1?' dia jawab 'tak hingga'. 'tambah 100?' 'tak hingga'. 'tambah TAK HINGGA?' 'TAK HINGGA LAGI'. keponakan gue udah paham hal yang gue gak paham sampe kuliah",
    comments: [
      { authorId: 24, minutesAgo: 13400, content: "anak2 itu matematikawan natural. mereka belum diajarin takut sama tak hingga" },
      { authorId: 22, minutesAgo: 13200, content: "keponakan gue jawabnya 'angkanya gede banget'. lebih jujur dari beberapa dosen gue" },
    ],
  },
  {
    id: 36,
    authorId: 45,
    minutesAgo: 14500,
    shares: 156,
    content:
      "peluang nebak 4 digit: 1 banding 10.000. peluang kena sambaran petir dalam setahun: sekitar 1 banding 1 juta. orang tetep beli tiket. petir gak dijual. itulah masalahnya: harapan dijual, risiko gratis",
    comments: [
      { authorId: 10, minutesAgo: 14400, content: "tapi kalo gak beli ya gak mungkin menang. 0%. gue milih 0,01%" },
      { authorId: 8, minutesAgo: 14200, content: "dan 99,99% gak menang. keputusan finansial yang dijual pake cerita 'ada loh yang pernah menang'. ada juga yang pernah kena petir, gak ada yang nyari" },
    ],
  },
  {
    id: 37,
    authorId: 34,
    minutesAgo: 15500,
    shares: 58,
    content:
      "pembeli: 'bu, timbangan akurat kan?' gue: 'akurat, 1 kg'. dia: 'tapi kok keliatan dikit?' GUE JUAL BERAT, BUKAN GEDENYA. kalau mau gede, beli plastik. plastiknya gratis kok",
    comments: [
      { authorId: 7, minutesAgo: 15400, content: "gue pernah nanya hal yang sama pas beli minyak. abis mikir, gue minta maaf ke penjualnya" },
      { authorId: 12, minutesAgo: 15200, content: "satu kg ya satu kg. yang beda itu harapan pembeli dan kesabaran penjual" },
    ],
  },
  {
    id: 38,
    authorId: 33,
    minutesAgo: 16500,
    shares: 93,
    content:
      "trik kali 11: 32 x 11. taruh 3...2, tengahnya 3+2=5, jadi 352. 87 x 11: 8...(8+7=15)...7, angka 15 kelebihan, geser 1 ke depan, jadi 957. latih 5x, jari lu jadi kalkulator. kalkulator HP tetep lebih cepet, tapi kalah gengsi",
    comments: [
      { authorId: 43, minutesAgo: 16400, content: "gue pake ini di kasir dan pelanggan kira gue jenius. gue cuma hafal satu trik" },
      { authorId: 38, minutesAgo: 16200, content: "coba 99 x 11: 9...(18)...9 = 1089? GUE CEK KALKULATOR, IYA 1089. GUE BENER SENDIRI. harapan" },
    ],
  },
  {
    id: 39,
    authorId: 10,
    minutesAgo: 17500,
    shares: 172,
    content:
      "beli flashdisk 256GB, ternyata cuma 238GB. KURANG 18GB. TOKO INI PENCURI GIGABYTE. mau gue laporin ke lembaga. ada gak ya lembaga penanganan kehilangan gigabyte",
    comments: [
      { authorId: 39, minutesAgo: 17400, content: "yang lu beli tetep 256 milyar byte. tapi komputer ngitung pakai unit yang lebih besar (1 GiB = 1.073.741.824 byte). 256 milyar byte = 238,4 GiB. gak ada yang hilang, cuma dua bahasa. lu beli kambing, dapet kambing, beda sebutan" },
      { authorId: 16, minutesAgo: 17200, content: "18GB 'hilang' tiap beli flashdisk dan ternyata masalahnya bahasa. relasi kita dengan unit emang penuh miskomunikasi" },
    ],
  },
  {
    id: 40,
    authorId: 47,
    minutesAgo: 18500,
    shares: 84,
    content:
      "kata orang umur kucing = 7 x umur manusia. kucing gue 4 tahun = 28 tahun manusia. dan kucing gue udah punya kerjaan (tidur), tempat tinggal (kasur gue), dan gak bayar kos. dia lebih stabil dari gue di umur 28. matematika gak berbohong",
    comments: [
      { authorId: 46, minutesAgo: 18400, content: "ini bukan matematika lagi, ini lampiran kehidupan. tapi setuju, kucing emang lebih beres" },
      { authorId: 18, minutesAgo: 18200, content: "soal angka: konversi umur kucing itu gak linear. tahun pertama sekitar 15 tahun manusia, kedua 9, setelahnya sekitar 4 per tahun. kucing 4 tahun itu sekitar 32. makin jomplang" },
    ],
  },
  {
    id: 41,
    authorId: 21,
    minutesAgo: 19500,
    shares: 69,
    content:
      "kenapa antrian lu selalu yang paling lambat? karena mata lu cuma mantau antrian lu sendiri. otak ngitung 'antrian gue gak jalan' tapi gak ngitung antrian lain yang udah selesai. alhasil semua antrian keliatan lebih cepet kecuali punya lu. matematika sekalian jadi psikolog dadakan",
    comments: [
      { authorId: 16, minutesAgo: 19400, content: "gue pernah pindah antrian 3x dan makin lambat tiap pindah. matematika gak bisa ditipu, tapi bisa ngasih pelajaran hidup" },
      { authorId: 34, minutesAgo: 19200, content: "antrian CS adalah tempat di mana waktu terasa paling matematika: lambatnya bisa dihitung, tapi gak berguna" },
    ],
  },
  {
    id: 42,
    authorId: 16,
    minutesAgo: 20500,
    shares: 121,
    content:
      "gaji 4,5jt. kos 1,2jt. makan 1,5jt. transport 600rb. pulsa + langganan 300rb. sisa 900rb. realita akhir bulan: 90rb. selisih 810rb itu namanya 'kehidupan sosial', gak masuk excel karena gak diakui resmi. gue mau bikin laporan keuangan yang jujur. bab 1: menyangkal",
    comments: [
      { authorId: 22, minutesAgo: 20400, content: "810rb itu bukan pengeluaran, itu biaya buat tetep dipanggil kalo ada yang gawe" },
      { authorId: 46, minutesAgo: 20200, content: "excel gue juga begitu. kategori 'lain-lain' adalah kategori terbesar dalam riwayat hidup gue" },
    ],
  },
  {
    id: 43,
    authorId: 23,
    minutesAgo: 21500,
    shares: 143,
    content:
      "10 juta dibagi ke 10 orang = 1 juta per orang, gede. 10 miliar dibagi ke 1 juta orang = 10 ribu per orang, receh. angka gede itu gak segede keliatannya pas dibagi. makanya tiap ada yang janji 'dana miliaran buat rakyat', tanya dulu: dibagi ke BERAPA ORANG",
    comments: [
      { authorId: 16, minutesAgo: 21400, content: "ini alasan gue gak kaget lagi pas denger angka triliunan tapi jalan tetep bergelombang" },
      { authorId: 35, minutesAgo: 21200, content: "10 triliun dibagi 280 juta orang = sekitar 35rb. CUKUP BUAT MAKAN 2 HARI. kan gue bener" },
    ],
  },
  {
    id: 44,
    authorId: 17,
    minutesAgo: 22500,
    shares: 96,
    content:
      "main dadu 2 biji, angka 7 keluar paling sering. GUE TAU ADA YANG NGERUSAK DADUNYA. 6+1, 5+2, 4+3, 3+4, 2+5, 1+6 = 6 cara. angka 2 cuma 1 cara (1+1). INI KONSPIRASI MEJA MAIN",
    comments: [
      { authorId: 5, minutesAgo: 22400, content: "bukan konspirasi, itu sebaran kemungkinan. ada 6 cara nyusun 7, cuma 1 cara nyusun 2. dadu jujur, yang jujur aja keliatan curiga" },
      { authorId: 9, minutesAgo: 22200, content: "gue tau ini dari board game. dadu gak curang, dia cuma punya favorit" },
    ],
  },
  {
    id: 45,
    authorId: 12,
    minutesAgo: 23500,
    shares: 71,
    content:
      "arisan hari ini: 12 orang, iuran 250rb. kumpulan 3jt, diambil 1 orang. gue terakhir dapat 6 tahun lalu dan belum balik arisan. guru matematika gak pernah ngajarin arisan. padahal arisan itu matematika sosial paling rumit: adil di aturan, gak disiplin di jadwal, penuh dendam halus di grup chat",
    comments: [
      { authorId: 7, minutesAgo: 23400, content: "arisan itu investasi sosial yang laporannya gak pernah seimbang. gue ikut 3 grup dan udah lupa di grup mana duit gue" },
    ],
  },
  {
    id: 46,
    authorId: 9,
    minutesAgo: 24500,
    shares: 84,
    content:
      "parkir 2 jam: 5rb. gue keluar di menit ke-124: 10rb. tarif melompat gara2 'satuan pembulatan'. 4 menit = 5rb. per menitnya 1.250. ITU LEBIH MAHAL DARI GAJI GUE PER MENIT. parkiran lebih tajam dari bank",
    comments: [
      { authorId: 16, minutesAgo: 24400, content: "parkiran satu2nya tempat di mana waktu secara harfiah lebih berharga dari uang" },
    ],
  },
  {
    id: 47,
    authorId: 49,
    minutesAgo: 25500,
    shares: 59,
    content:
      "gajian tanggal 25. tanggal 1 saldo udah kayak gini. antara tanggal 25 dan 1 cuma ada 6 hari. 6 hari itu bukan waktu, itu musim. dan di musim itu gue jadi filosof: mikirin nilai uang, arti hidup, dan kenapa mi instan bisa seharga nasi padang",
    comments: [
      { authorId: 22, minutesAgo: 25400, content: "'6 hari itu bukan waktu, itu musim'. discreenshot sambil nangis" },
    ],
  },
  {
    id: 48,
    authorId: 26,
    minutesAgo: 26500,
    shares: 66,
    content:
      "ide di grup chat: 'kalo semua orang bayar pajak 10% flat, gak ada yang keberatan kan?' gue jawab: yang gaji 2jt kehilangan 200rb makannya. yang gaji 200jt kehilangan 20jt liburannya. angkanya sama, efeknya beda kelas. flat itu keliatan adil, dia cuma adil di kertas",
    comments: [
      { authorId: 16, minutesAgo: 26400, content: "ini debat abadi tiap grup keluarga. flat itu simpel. tapi simpel gak otomatis adil" },
    ],
  },
  {
    id: 49,
    authorId: 43,
    minutesAgo: 27500,
    shares: 77,
    content:
      "pinjem HP temen buat git, dia bilang 'sandi 6 digit'. gue nanya angkanya apa. dia jawab 'tanggal lahir gue lah, semua orang pake itu'. GUE GAK TAU TANGGAL LAHIR TEMEN GUE SENDIRI. temen sejati gak harus hafal angka. kata matematika sosial",
    comments: [
      { authorId: 46, minutesAgo: 27400, content: "gue gak hafal tanggal lahir saudara gue sendiri tapi hafal jadwal terakhir diisi BBM. prioritas otak emang unik" },
    ],
  },
  {
    id: 50,
    authorId: 33,
    minutesAgo: 28500,
    shares: 82,
    content:
      "nasi goreng abang2 kok enak? teori gue: panas + minyak + kecepatan aduk = komposisi. arah aduk konsisten, tenaga gede, panas nembus merata. nasi goreng itu bidang vektor. abang2 goreng adalah fisikawan praktisi yang gak pernah nulis jurnal",
    comments: [
      { authorId: 34, minutesAgo: 28400, content: "gue jualan buah dan setuju. cara masuk keranjang beda, hasil beda. itu juga vektor" },
    ],
  },
]
