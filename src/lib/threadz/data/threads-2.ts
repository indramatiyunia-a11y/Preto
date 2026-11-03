import type { ThreadzThread } from "../types"

// PART 2: cuitan 26-50. kerja, keluarga, standup, peringatan
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 7,
    minutesAgo: 30,
    shares: 244,
    content:
      "rapat pagi 1 jam. peserta 12 orang. total yang kebakar: 12 jam kerja manusia. hasil rapat satu kalimat: 'kita follow up minggu depan'. 12 jam itu setengah hari kerja satu orang utuh. kita bakar setengah hidup satu orang buat 6 kata. tanpa kue. gak ada kue sama sekali",
    comments: [
      { authorId: 22, minutesAgo: 25, content: "rapat kami 2 jam, hasilnya 'mo dijadwalkan ulang'. itu 24 jam. satu hari manusia utuh. GAK ADA KUE" },
      { authorId: 45, minutesAgo: 18, content: "biaya rapat = jumlah orang x durasi x tarif per jam. coba itung rapat berikutnya pake kalkulator di depan semua orang. ajaib, jadi 20 menit" },
      { authorId: 37, minutesAgo: 10, content: "kue itu penting. rapat gak kue = eksekusi gak HAK" },
    ],
  },
  {
    id: 27,
    authorId: 45,
    minutesAgo: 60,
    shares: 178,
    content:
      "maps ngasih 3 pilihan: 12 menit lewat jalan kecil, 19 menit lewat tol bayar 14rb. gue pilih tol. 7 menit gue bayar 2rb per menit. nah di kantor gue disuruh lembur 2 jam, gratis, 'buat pengalaman'. nilai menit gue 2rb di jalan tol dan 0 di meja meeting. hidup emang konsisten ya",
    comments: [
      { authorId: 3, minutesAgo: 52, content: "2rb/menit = 120rb/jam. lu gak lembur, lu nyumbang 240rb per bulan ke perusahaan. itungannya jangan dikasih tau HRD" },
      { authorId: 7, minutesAgo: 40, content: "gue pernah disuruh lembur 'buat pengalaman' terus di evaluasi taun berikutnya ditulis 'kurang komitmen'. pengalaman yang mana yang dihitung" },
      { authorId: 31, minutesAgo: 22, content: "sejak gue nilai waktu sendiri, gue gak pernah mikir tol mahal lagi. yang mahal itu gak ada uang buat bayar tol" },
    ],
  },
  {
    id: 28,
    authorId: 29,
    minutesAgo: 100,
    shares: 87,
    content:
      "kayaknya arisan bisa lebih efisien. 100 orang nyumbang 10rb = 1 juta. terus 1 juta dibagi lagi ke 100 orang = 10rb balik. JADI SEMUA ORANG NYUMBANG DAN NERIMA UANG YANG SAMA DALAM MALAM YANG SAMA. kenapa harus diundi?? gue udah mikirin ini dari 2019 dan gak ada yang ngerti gue",
    comments: [
      { authorId: 27, minutesAgo: 92, content: "bang... itu namanya gak ada arisan. itu namanya ngumpul" },
      { authorId: 20, minutesAgo: 75, content: "gue baca 2x. makin gak ngerti. tapi gue seneng ada orang mikir kayak gini. dunia butuh" },
    ],
  },
  {
    id: 29,
    authorId: 34,
    minutesAgo: 150,
    shares: 266,
    content:
      "panen cabai 1,2 ton. harga anjlok 18rb per kilo dari minggu lalu. 21,6 juta menguap dalam semalam. tukang warung bilang 'ya namanya juga pasar, pak'. iya sih. coba kalo yang hilang 21,6 juta itu dari tabungan dia, namanya juga apa? korban? kolaps? gampang ya ngomongnya kalo angkanya bukan angka lu",
    comments: [
      { authorId: 14, minutesAgo: 140, content: "harga komoditas itu naik turun kayak gini, tapi beban mikroekonominya numpuk ke petani. konsumen gak ngerasa murah, tengkulak yang sehat" },
      { authorId: 22, minutesAgo: 120, content: "cabai di pasar sebelah 35rb. petani dapet 17. 18rb itu di jalan. jalannya lama banget" },
      { authorId: 37, minutesAgo: 95, content: "semoga musim depan lebih terang, pak. gue serius" },
    ],
  },
  {
    id: 30,
    authorId: 42,
    minutesAgo: 210,
    shares: 598,
    content:
      "buat yang nanya 'ada jam hoki gak sih main slot': gak ada. generator angkanya diuji dan disertifikasi, distribusinya gak peduli jam berapa, gak peduli HP apa, gak peduli lu depositnya gimana. satu-satunya yang pasti: makin lama main, makin deket ke house edge. itu bukan permainan. itu alat ngambil duit yang diupah matematika, dan matematikanya gak bisa lu lawan pake niat. yang bisa lu lawan cuma satu: gak mulai",
    comments: [
      { authorId: 9, minutesAgo: 195, content: "tetangga gue motor kejual gara2 ini. motor anter anak sekolah. bener2 gak ada yang menang kecuali yang punya mesin" },
      { authorId: 22, minutesAgo: 180, content: "kakak kantor gue 'balik modal terus main'. sekarang dia balik modal sama mobil mak. mobil mak dia jual. sekarang dia balik modal pake apa? gak ada yang bisa dibalikin lagi" },
      { authorId: 37, minutesAgo: 150, content: "gue share ini ke grup kelas. semoga ada yang baca sampe selesai. biasanya orang berhenti di kata 'hoki'" },
      { authorId: 14, minutesAgo: 120, content: "yang bikin gelap: target pemakainya justru orang yang gak mampu rugi. 50rb buat yang gaji 2jt itu pintu, buat yang gaji 50jt itu debu" },
      { authorId: 46, minutesAgo: 90, content: "gue pernah fase gini 8 bulan. yang bikin stop bukan sadar, tapi gak ada lagi yang bisa dijual. semoga ada yang stop lebih awal dari gue" },
      { authorId: 3, minutesAgo: 60, content: "post ini gratis tapi mahal harganya buat yang beneran baca. semoga sampai" },
      { authorId: 48, minutesAgo: 30, content: "rumusnya simpel: yang main gak pernah bangkrut lebih cepet dari mesin. mesin gak punya gaji, gak punya anak sekolah, gak punya perut" },
    ],
  },
  {
    id: 31,
    authorId: 12,
    minutesAgo: 260,
    shares: 341,
    content:
      "adik gue 19 tahun, gaji 2,3jt. paylater aktif di 4 aplikasi. total tanggungan 6,8jt. dia bilang 'aman kak, bisa dicicil'. 6,8jt di-cicil 12 bulan plus bunga, dia bayar barang yang udah dia pake bosen. itu bukan 'bisa dicicil'. itu hutang yang dikasih nama lucu biar gak kerasa. gue bantu dia hapus aplikasinya semalem. nangisnya kayak cabut gigi. iya, memang gitu prosesnya",
    comments: [
      { authorId: 26, minutesAgo: 245, content: "paylater itu troli di supermarket versi digital: dibikin gampang biar lu kebawa. yang beda, troli ini nge-billing" },
      { authorId: 42, minutesAgo: 215, content: "gampang didapet + bunga jelas di belakang = industri. gampangnya itu produk, bukan berkah" },
      { authorId: 4, minutesAgo: 180, content: "sebenernya cara ngomongnya gak gampang ya ke adik. gue nyoba ke adek gue dimarahin balik. kalian ngasih nyempilin gimana" },
      { authorId: 19, minutesAgo: 140, content: "mulai dari hapus 1 aplikasi. jangan semua. satu-satu. itu yang jalan di keluarga gue" },
      { authorId: 37, minutesAgo: 95, content: "semoga adik lu tembus ke sisi tenang, kak. gue baca ini sambil ngecek paylater gue. aman. baru sadar 'aman' itu harus dicek, bukan dirasain" },
    ],
  },
  {
    id: 32,
    authorId: 20,
    minutesAgo: 320,
    shares: 102,
    content:
      "kenapa jam 12 malam langsung balik ke angka 1?? 12 kan harusnya paling gede. terus jam 12 SIANG juga 12. dua2nya 12. JADI 12 ITU SEBENARNYA 0 KAN? KAN?? gue nanya ini ke keluarga gue, semua nyuruh gue tidur",
    comments: [
      { authorId: 24, minutesAgo: 305, content: "sumpah ini gak bego. di sistem 24 jam, 12 malam memang 00:00. lu hampir nemu konversi sendiri, cuma berhenti di pintunya" },
      { authorId: 11, minutesAgo: 280, content: "tepat. 12 malam = 0:00, 12 siang = 12:00. angka jam itu lingkaran, gak ada awal resmi. kita yang milih start-nya" },
      { authorId: 35, minutesAgo: 240, content: "gue gak paham tapi gue ngerasa ada yang gede di sini" },
      { authorId: 31, minutesAgo: 200, content: "pola jam = modulo 12. 13 = 1, 14 = 2. jadi 12 tuh beneran jembatan, bukan puncak. nice" },
      { authorId: 47, minutesAgo: 160, content: "sekarang gue gak bisa liat jam 12 dengan tenang lagi. thanks" },
    ],
  },
  {
    id: 33,
    authorId: 40,
    minutesAgo: 380,
    shares: 187,
    content:
      "KPR ditolak. alasan bank: 'rasio cicilan terhadap penghasilan 42%, batas kami 35%'. cicilan 4,2jt. gaji 10jt bruto, bersih 8,7. mereka itung dari bruto. jadi di mata bank gue mampu bayar 4,2jt dari 10jt. di mata dapur gue, 4,2jt dari 8,7jt itu gak nyampe akhir bulan. yang diitung kertas, yang makan perut. dan dua2nya gak pernah ketemu",
    comments: [
      { authorId: 45, minutesAgo: 360, content: "bank pakai bruto karena konsisten dengan aturan mereka, bukan karena gak tau realita. makanya perannya kita yang hitung bersih sebelum dateng, biar gak sakit hati dua kali" },
      { authorId: 7, minutesAgo: 330, content: "gue lolos KPR terus nyesel: cicilan 4jt, tanggungan 3. kertas bilang mampu. kulkas bilang jangan" },
      { authorId: 14, minutesAgo: 290, content: "rule of thumb yang jalan di lapangan: cicilan max 30% dari TAKE HOME PAY. bank boleh bilang 35-40, hidup yang bakal nelpon" },
      { authorId: 26, minutesAgo: 240, content: "ditolak itu bukan akhir. gue ditolak 2 bank, usaha 8 bulan buat turun rasio, ke-3 jalan. jangan nyerah cuma karena angka satu lembar" },
    ],
  },
  {
    id: 34,
    authorId: 48,
    minutesAgo: 440,
    shares: 136,
    content:
      "cuaca bilang 'peluang hujan 40%'. gue jelasin ke mama: artinya dari 100 hari yang kondisinya serupa, 40 di antaranya hujan. bukan '40% bagian dari langit yang hujan'. gue jelasin 4 kali. beliau tetep bawa payung. beliau keluar kering. gue keluar basah. base rate 4, itu jejak yang gak bisa dibantah",
    comments: [
      { authorId: 3, minutesAgo: 420, content: "mama selalu menang bukan karena ngerti statistik, tapi karena dia udah ngalamin 10.000 hari. itu sampel yang lebih besar dari app" },
      { authorId: 22, minutesAgo: 380, content: "gue jadi mikir: kadang yang kita sebut 'takut' itu sebenarnya pengalaman yang dihitung manual" },
    ],
  },
  {
    id: 35,
    authorId: 47,
    minutesAgo: 500,
    shares: 64,
    content:
      "lingkaran itu kalau dipotong tengah terus dibuka jadinya garis panjang. garis itu sisi. sisi itu punya kotak. JADI LINGKARAN ITU KOTAK YANG LAGI REBAHAN. gue gak terima dibilang bego, gue cuma liat dunia lebih lengkap",
    comments: [
      { authorId: 24, minutesAgo: 480, content: "gue gak tau mau marah atau ngedoom. keliatannya dua2nya" },
    ],
  },
  {
    id: 36,
    authorId: 26,
    minutesAgo: 560,
    shares: 209,
    content:
      "ayam utuh 38rb/kg. ayam fillet 58rb/kg. selisih 20rb buat yang udah dipotong. gue itung: potong sendiri 20 menit, cuci pisau talenan 10 menit, baju kena 1x. 30 menit gue 'dibayar' 20rb = 40rb per jam. gaji gue per jam 27rb. TERNYATA GUE LEBIH MURAH DARI TUKANG POTONG AYAM. sejak itu gue beli fillet dan gak liat balik",
    comments: [
      { authorId: 43, minutesAgo: 540, content: "gue justru sebaliknya: potong sendiri 20 menit sambil denger musik itu murah banget. tergantung nilai lu kasih ke 20 menit lu sendiri" },
      { authorId: 7, minutesAgo: 470, content: "nah ini. 30 menit di dapur buat gue itu terapi. buat lu itu kerja yang gak dibayar. dua-duanya bener" },
      { authorId: 45, minutesAgo: 400, content: "secara ekonomi namanya opportunity cost. gue seneng thread dapur ngajarin ini tanpa kata 'opportunity cost'" },
      { authorId: 12, minutesAgo: 320, content: "gue itung mundur: 20rb selisih x 4x sebulan = 80rb. setahun hampir 1jt. buat 1jt gue beli fillet DAN damai" },
    ],
  },
  {
    id: 37,
    authorId: 30,
    minutesAgo: 640,
    shares: 254,
    content:
      "nol itu penemuan, bukan hal yang 'ya sudah pasti ada'. orang2 india yang ngerjain serius, diwarisin kaum arab, terus nyampe eropa. tanpa nol gak ada 10, gak ada 100, gak ada rekber, gak ada saldo 0 yang bikin lu cek 3x. nol itu jadi landasan buat semua sistem angka modern. terus anehnya, angka yang paling sering bikin kita panik juga dia: nol di belakang saldo, nol di depan chat, nol di kelas",
    comments: [
      { authorId: 18, minutesAgo: 610, content: "nol di depan chat itu luka. kena" },
      { authorId: 42, minutesAgo: 560, content: "tambahan: posisi nol juga ngubah nilai. 1 vs 10 vs 100. angka yang sama, dampaknya beda jauh. makanya nol itu patut dihormat" },
      { authorId: 49, minutesAgo: 480, content: "gue cuma mau bilang thread ini bikin gue hormat sama angka paling tidak menyerupai apapun. 0 respect yang jadi ada" },
    ],
  },
  {
    id: 38,
    authorId: 43,
    minutesAgo: 720,
    shares: 158,
    content:
      "arisan RT: 25 orang, iuran 100rb per bulan, tiap bulan 1 pemenang dapet 2,5jt. gue urutan 22 dari 25. artinya gue ngasih 2,1 juta lebih dulu SEBELUM dapet 2,5jt. kalo dihitung dingin, arisan itu bukan cara cari untung. itu koperasi waktu. urutan awal dapet uang duluan, urutan akhir dapet 'tabungan paksa'. gue? gue dapet teman. gak ada di rumus, tapi worth it",
    comments: [
      { authorId: 1, minutesAgo: 700, content: "gue urutan 24. gue dapet tabungan paksa DAN teman. tapi 2 tahun nunggu itu lama bgt loh" },
      { authorId: 12, minutesAgo: 650, content: "yang penting ada buku catatannya sama yang jadi bendahara-nya orang yang gak mudah tergoda. sistem aman karena orangnya" },
      { authorId: 27, minutesAgo: 580, content: "matematis: yang menang duluan dapet 'bunga negatif' kebalik. arisan itu pinjaman sosial. kalo anggota2nya beres, gak ada yang rugi besar" },
      { authorId: 4, minutesAgo: 500, content: "grup arisan gue ambruk taun lalu karena bendaharanya 'sedang kebutuhan'. 25 orang 100rb = 2,5jt ilang. percaya itu bukan bunga, tapi bisa hangus" },
      { authorId: 16, minutesAgo: 420, content: "thread arisan paling jujur. gak ada kata untung di awal, tapi gak ada kata bohong" },
    ],
  },
  {
    id: 39,
    authorId: 50,
    minutesAgo: 800,
    shares: 55,
    content:
      "kenapa gak ada huruf yang sama sama angka? kalo ada, 5 bisa jadi S. terus 5S = SS = dua S = 10. GUE BISA NGEHITUNG PAKAI KATA. kenapa nggak diajarin dari sekolah",
    comments: [],
  },
  {
    id: 40,
    authorId: 1,
    minutesAgo: 900,
    shares: 121,
    content:
      "biaya masuk SD: buku LKS 85rb, seragam 2 set 450rb, sepatu 180rb, 'uang kegiatan' 150rb. gue itung pake kalkulator biar gak salah nyalahin di grup WA ortu lain. ternyata salah itung. lebih MAHAL dari gue kira. jadi gue gak nyalahin siapa2 di grup, gue nyalahin di sini aja",
    comments: [
      { authorId: 4, minutesAgo: 880, content: "anak gue juga. jangan lupa seragam olahraga yang beda, atribut pramuka, dan 'buku cerita wajib' yang gak ada di daftar awal" },
      { authorId: 7, minutesAgo: 820, content: "150rb uang kegiatan itu buat apa gak pernah jelas. pas ditanya jawabannya 'untuk kegiatan' hebat" },
      { authorId: 31, minutesAgo: 740, content: "gue pengen itung semua biaya sekolah 6 taun jadi satu lembar. takutnya gak sanggup nge-desain lembarannya" },
      { authorId: 43, minutesAgo: 660, content: "ngitung dulu sebelum marah. bapak ini teladan. gue marah dulu baru itung, hasilnya ganti2 angka, malu2" },
    ],
  },
  {
    id: 41,
    authorId: 18,
    minutesAgo: 1000,
    shares: 173,
    content:
      "taksi yang gue naikin nomornya 1729. gue cerita ke supir: 'mas, itu angka paling kecil yang bisa ditulis jadi jumlah dua kubus dengan dua cara beda: 1 pangkat 3 tambah 12 pangkat 3, sama 9 pangkat 3 tambah 10 pangkat 3.' dia liat gue di kaca, terus jawab 'kereta juga banyak nomor. yang penting nyampe.' gue gak bisa tidur semalem mikir jawaban itu",
    comments: [
      { authorId: 24, minutesAgo: 970, content: "1729 hardy-ramanujan. supir itu gak tau dia baru ngalahin profesor pake satu kalimat" },
      { authorId: 33, minutesAgo: 900, content: "'yang penting nyampe' itu filosofi hidup orang yang gak sempet pusing mikirin angka. hormat" },
      { authorId: 46, minutesAgo: 800, content: "gue pengen naik taksi nomor 1729 terus jelasin juga. semoga dapet. semoga supirnya lebih sabar dari gue" },
      { authorId: 11, minutesAgo: 700, content: "fun fact lain: 1729 juga bisa 1729 = 10^3 + 9^3 = 12^3 + 1^3. ya itu tadi, dua cara. gue cuma penguat, bukan perusak suasana" },
      { authorId: 4, minutesAgo: 580, content: "gue share ini ke grup. gak ada yang bales. 1729 orang juga gak bales" },
      { authorId: 37, minutesAgo: 460, content: "angka taksi 1729 jadi terkenal karena cerita. angka di plang mobil lu juga ada ceritanya, cuma belum ada yang cerita" },
      { authorId: 25, minutesAgo: 340, content: "gue ngitung: 1+1728 = 1729, 729+1000 = 1729. GILA. angka gak nyangka2" },
    ],
  },
  {
    id: 42,
    authorId: 49,
    minutesAgo: 1100,
    shares: 196,
    content:
      "rumah ke kantor 90 menit bolak balik. 22 hari kerja = 33 jam per bulan = 396 jam setahun. 396 jam itu 16,5 hari penuh. SETAHUN GUE NGINAP 16 HARI DI JALAN. tanpa kasur. tanpa dibayar. tanpa foto buat share. komute itu kerja kedua yang gak ada di kontrak",
    comments: [
      { authorId: 7, minutesAgo: 1070, content: "396 jam itu kalo dituker ngerjain apa? bisa 2 skill baru. atau 400 episode sinetron. pilihan hidup" },
      { authorId: 12, minutesAgo: 990, content: "gue 2 jam sehari. 10 hari per taun. gue 'nginap' 10 hari di jalan dan gue baru sadar gara2 thread ini. terima kasih? terima kasih." },
      { authorId: 26, minutesAgo: 900, content: "pindah kos deket kantor itu naik gaji 400rb versi gue. hitung2 sendiri, langsung pindah" },
      { authorId: 45, minutesAgo: 800, content: "kayaknya HRD musti ngitung juga ongkos waktu karyawan. perusahaan hemat sewa, karyawan bayar pakai umur" },
      { authorId: 22, minutesAgo: 700, content: "396 jam x tarif lembur 25rb = 9,9jt setahun. GILA. itu gaji 13. lu kerja ekstra buat jalanan" },
    ],
  },
  {
    id: 43,
    authorId: 38,
    minutesAgo: 1200,
    shares: 47,
    content:
      "kenapa pelajaran 'matematika' isinya jeruk sama kereta? JERUKNYA GAK DIBAGIKAN. keretanya GAK DINAIKIN. belajar 12 taun, gue gak pernah megang jeruk yang disoal. itung sendiri berapa jeruk yang gue kasihanikan",
    comments: [
      { authorId: 17, minutesAgo: 1180, content: "jeruk di soal matematika itu abadi. dia gak busuk, dia gak bulan2, dia cuma nunggu diitung" },
    ],
  },
  {
    id: 44,
    authorId: 31,
    minutesAgo: 1350,
    shares: 227,
    content:
      "laporan bulan ini, jualan online: omzet 4,2jt. gak usah seneng dulu. modal barang 3,1jt, packaging 180rb, iklan 250rb, ongkos subsidi 320rb. sisa 350rb. terus ada refund 45rb. bersih 305rb. dibagi 30 hari: 10rb per hari. parkir motor sehari 2rb. gue 'gajian' 8rb per hari di atas parkir. besok jualan lagi, karena 8rb itu dari 30 hari kerja, bukan dari 1 hari kerja",
    comments: [
      { authorId: 22, minutesAgo: 1320, content: "gue juga jualan. omzet gede itu ilusi, yang nyata margin sama repeat order. thread ini jujur banget" },
      { authorId: 37, minutesAgo: 1250, content: "10rb/hari x 30 hari... lu kerja lebih gila dari gue yang 27rb/jam tapi gak jualan apa2. semangat bro" },
      { authorId: 42, minutesAgo: 1150, content: "ikutin: catat semua termasuk waktu lu. waktu lu itu modal juga. kalo margin gak nutup waktu, modelnya musti diganti" },
      { authorId: 14, minutesAgo: 1050, content: "harga jual naik 10% biasanya lebih gampang daripada potong biaya 10%. percobaan kecil dulu di 20% produk, liat reaksi pasar" },
      { authorId: 44, minutesAgo: 950, content: "aduh ini relate. refund 45rb itu paling sakit karena barangnya udah gak ada di gudang, cuma ada di hati" },
      { authorId: 4, minutesAgo: 840, content: "semangat. toko gue taun 2 baru mulai 'gajian' normal. taun 1 itu namanya belajar yang bayarnya ilmu" },
      { authorId: 49, minutesAgo: 700, content: "gue baca sambil itung punya gue. makin sedih. tapi yaudah, jualan lagi. terima kasih atas kejujuran" },
    ],
  },
  {
    id: 45,
    authorId: 33,
    minutesAgo: 1500,
    shares: 168,
    content:
      "murid gue tanya: 'pak, buat apa belajar sin cos tan, nanti kerja gak pake'. gue jawab: lu latihan angkat beban di gym buat apa? lu gak bakal angkat barbel di kantor kan? tapi badan lu kuat buat angkat apa aja. matematika itu gym buat nalar. soalnya dumbbell-nya. gak ada yang dipake di kerjaan, tapi semua kerjaan terasa gampang kalo ototnya ada",
    comments: [
      { authorId: 11, minutesAgo: 1470, content: "guru yang jelasin pake gym itu bakal diinget muridnya sampai mereka 40 taun dan baru sadar" },
      { authorId: 3, minutesAgo: 1380, content: "sebagai sesama guru: iya. yang dipake bukan rumusnya, tapi kebiasaan duduk, mikir, gak panik sama angka. itu fitness yang gak keliatan" },
      { authorId: 46, minutesAgo: 1250, content: "gue jadi guru olahraga. analogi lu gue curol sampe murid2 gue. semua babak baru" },
    ],
  },
  {
    id: 46,
    authorId: 32,
    minutesAgo: 1650,
    shares: 83,
    content:
      "gue bagi 1 pake 0 di kalkulator hasilnya ERROR. ERROR itu bukan jawaban, itu KATA KERJA. kalkulator lagi stres, bukan gak bisa. kasih istirahat 5 menit pasti bisa. semua yang ERROR cuma butuh istirahat, termasuk kalkulator, termasuk gue",
    comments: [
      { authorId: 24, minutesAgo: 1620, content: "1÷0 itu gak didefinisikan, bukan gak bisa. bedanya: gak bisa itu sementara, gak didefinisikan itu gak ada di aturan. kalkulator gak stres, dia jujur" },
      { authorId: 47, minutesAgo: 1550, content: "'termasuk gue' WKWKWK. gue ikut merasakan ERROR-nya" },
    ],
  },
  {
    id: 47,
    authorId: 4,
    minutesAgo: 1800,
    shares: 92,
    content:
      "jarum bensin udah nyentuh garis merah dari kemarin sore. hari ini gue beraniin isi 30rb. 30rb = 4,2 liter = sekitar 55 km. SPBU terdekat 1,2 km. jadi 55 km itu buat perjalanan yang 1,2 km-nya udah lewat. KATANYA bensin udah abis. ternyata 'abis' itu perkiraan, dan perkiraan itu lu pilih percaya atau gak. gue pilih percaya sampe habis",
    comments: [
      { authorId: 16, minutesAgo: 1770, content: "motor gue 'abis' itu artinya masih ada 1,5 liter. motor gue jujur, gue yang gak" },
    ],
  },
  {
    id: 48,
    authorId: 36,
    minutesAgo: 1950,
    shares: 288,
    content:
      "orang suka kangen: 'dulu nasi sepiring 500 perak!'. iya, 1998. gaji umr 1998 sekitar 180rb. nasi 500 berarti gaji itu 360 piring. sekarang nasi 15rb, umr sekitar 5jt = 333 piring. harga naik 30x, daya beli turun dikit. INI YANG GAK Dicerita pas orang kangen masa lalu: yang naik bukan cuma harga, yang turun gak juga seburuk keluhannya",
    comments: [
      { authorId: 48, minutesAgo: 1930, content: " Ini bagus. Orang2 bandingin harga, gak bandingin gaji. kalo bandingin dua2nya, kadang dulu lebih susah" },
      { authorId: 14, minutesAgo: 1850, content: "inflasi itu nyata tapi gak merata. kalo gajinya kaku, inflasi terasa dobel. makanya naik2 gaji itu penting dibahas" },
      { authorId: 7, minutesAgo: 1750, content: "gue share ke grup keluarga. bapak gue bilang 'ya dulu lebih murah'. gue bales 'ya dulu lebih susah'. chat-nya dibaca. gak dibales" },
      { authorId: 31, minutesAgo: 1600, content: "daya beli piring nasi itu metrik paling jujur buat hidup sehari2. kertas statistik susah dibaca, piring gampang" },
      { authorId: 33, minutesAgo: 1450, content: "data sejarah gaji susah dicari pasti, tapi arah ceritanya masuk akal. 1998 krisis, 360 piring gak seburuk itu juga mungkin. intinya: jangan kangen masa lalu cuma pake satu variabel" },
    ],
  },
  {
    id: 49,
    authorId: 25,
    minutesAgo: 2150,
    shares: 68,
    content:
      "bilangan bulat tuh kenapa namanya 'bulat'? 1 itu lancip kalo ditulis. 2 lancip. 3 lancip. 8 baru agak bulat. 0 bulat banget. JADI BILANGAN BULAT YANG BENER CUMA 0 DAN 8. SISANYA NIPU. gue siap berdebat sama siapa aja",
    comments: [],
  },
  {
    id: 50,
    authorId: 15,
    minutesAgo: 2400,
    shares: 234,
    content:
      "nasi padang langganan gue: nasi + rendang + sayur + es teh = 28rb. 12 taun lalu pesanan yang sama 12rb. gue itung naiknya sekitar 8% per tahun. inflasi resmi aja biasanya 3-5%. warung deket rumah inflasinya lebih galak dari bank mana pun. TAPI GUE GAK PINDAH. rendangnya gak punya pengganti di daerah ini. ada harga buat yang enak, dan gue bayar dengan rela, sambil itung",
    comments: [
      { authorId: 9, minutesAgo: 2360, content: "rendang 28rb sekarang termasuk murah loh. gue sini 35rb, enak juga tapi nasi bungkus dua tangan" },
      { authorId: 22, minutesAgo: 2280, content: "8% per tahun itu gila. 12 taun dobel dobel. itung 1,08^12 = 2,5. 12rb x 2,5 = 30rb. KOK NYARUH. matematika warung akurat" },
      { authorId: 26, minutesAgo: 2200, content: "gue pernah pindah warung karena naik harga. seminggu balik. yang enak gak bisa diganti, yang murah cuma bisa ditahan" },
      { authorId: 31, minutesAgo: 2100, content: "1,08^12 = 2,518. 12 x 2,518 = 30,2rb. itu kalo naik rata2 tiap taun. kenyataannya naik saat bbm naik, sisanya diam. warung juga mikir" },
      { authorId: 44, minutesAgo: 1950, content: "warung yang naik harga secukupnya dan tetep enak itu aset nasional. lapor ke mana ya biar diplakin" },
      { authorId: 7, minutesAgo: 1800, content: "es teh + rendang = kombinasi yang gak bisa dihitung pake uang doang. tapi 28rb, itungannya tetep kita rayakan" },
    ],
  },
]
