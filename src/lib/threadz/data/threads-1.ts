import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25 (paling baru di feed) — ROMBAK TOTAL V3 (Nov 2026).
// Rombak V2 dinyatakan gagal: cuma ganti bungkus, dunia post-nya masih buku
// kas. V3 mengganti dunianya: post lahir dari pertanyaan, PR, kebingungan,
// dan momen manusia. Rujukan lengkap: scripts/rumus-v2.md (FORMULA HITAM).
//
// ATURAN ISI V3 (ringkas — hukum lengkap di scripts/rumus-v2.md):
//  1. ≥60% post = pertanyaan sungguhan / PR / momen manusia mentah.
//  2. Panjang menyebar (ada <130 char, ada 500+). PUNCHLINE DILARANG.
//     Ending sah: nanya, nyangkut, doa, berhenti mendadak.
//  3. Matematika HARUS benar; miskonsepsi siswa boleh asal ada komentar
//     yang mengoreksi dengan hitungan benar.
//  4. Komentar: ±40% benar-benar menjawab/mengoreksi. Sisanya reaksi
//     spesifik. Dilarang tepuk tangan kosong bertubi-tubi.
//  5. Jumlah komentar menyebar 0-6, mode gak boleh >30% post.
//  6. DILARANG (FORMULA HITAM): log uang presisi, pamer itungan, dua
//     entitas simetris, kutipan mutiara, birokrat pencatat, resolusi
//     sempurna, genre kerja-duit, esai mini bermoral, PAPARAN META
//     ("pakai bahasa manusia" dkk — sejak 6 Nov 2026, lihat rumus-v2.md
//     BAGIAN 1C + nomor 10), frasa unik yang diulang di post lain.
//  7. Post boleh menggantung. Dunia gak bersih itu manusia.
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 1,
    minutesAgo: 25,
    shares: 12,
    content:
      "anak gue nanya 10 dikurang setengah itu berapa. gue jawab 9,5. dia nanya setengahnya dapet dari mana, bukannya kurang setengah ya tinggal 9 doang. GUE DIAM. gue nyokapnya tapi gue juga gak yakin kok bisa 9,5.\nsekarang dia tidur nyenyak dan gue yang buka ponsel nyari cara jelasin desimal. besok pagi dia pasti nanya lagi, dia tipe yang gak lupa. tolong yang paham jelasin pake benda aja, gue mau siapin alat perangnya",
    comments: [
      { authorId: 74, minutesAgo: 21, content: "tunjukin pake fisik, sepuluh ribu dikurang lima ribu itu lima ribu, jadi sepuluh dikurang setengah ribu ya sembilan koma lima ribu. uang itu paling gampang dimengerti" },
      { authorId: 59, minutesAgo: 18, content: "anakku juga gitu, akhirnya paham pas diajak ukur air setengah gelas di dapur 🙏" },
      { authorId: 268, minutesAgo: 14, content: "gambar garis dari 0 sampai 1, tunjuk titik tengahnya. 0,5 itu alamatnya, bukan sisa" },
    ],
  },
  {
    id: 2,
    authorId: 2,
    minutesAgo: 55,
    shares: 30,
    content:
      "PR KALKULUS BAGIAN INTEGRAL GUE STUCK DI SOAL PALING PERTAMA. INTEGRAL DARI 2X ITU KATANYA X² + C. KENAPA ADA +C. GUE TANYA TEMEN SEKOS, DIA JAWAB 'YA KAN KONSTANTA'. KONSTANTA APANYA BRE. KALAU DITURUNIN BALIK, X² + C MEMANG JADI 2X. TAPI KALAU C-NYA DIGANTI 7 JUGA BENAR. DIGANTI -3 JUGA BENAR. JADI JAWABANNYA ADA BANYAK?! ITU NAMA-NYA JAWABAN ATAU PELANGI.\nyang masih melek tolong jelasin kenapa wajib ditulis +C, soalnya dosen gue ngurangin nilai kalau lupa nulis itu. 17 soal lagi nunggu dan gue baru nembus soal nomor satu",
    comments: [
      { authorId: 212, minutesAgo: 51, content: "inti integral itu nanya 'fungsi apa yang kalau diturunin jadi 2x'. x² bisa, x²+7 juga bisa, x²-3 juga bisa. +C itu nampung semua kemungkinannya 🙃" },
      { authorId: 44, minutesAgo: 47, content: "lu bener bre, jawabannya emang banyak. +C itu tas yang muat semua x² plus konstantanya" },
      { authorId: 227, minutesAgo: 43, content: "dosen gue nyebutnya keluarga fungsi bre. x²+C itu satu keluarga, angkanya cuma beda urutan lahir" },
    ],
  },
  {
    id: 3,
    authorId: 3,
    minutesAgo: 85,
    shares: 21,
    content:
      "Murid kelas 5 saya ngeyel soal (−2) × (−3). Katanya kalau minus itu artinya turun, kok hasil malah naik jadi 6. Logikanya kuat, saya sampai ikut mikir iya juga. Garis bilangan sudah dicoba, dia tetap ngeyel. Dua hari ini kami remuk bersama di kelas.\n\nAda analogi lain yang bisa dipercaya anak kelas 5? Saya gak mau jawab memang begitu aturannya — itu sama aja menyerah di depan anak SD.",
    comments: [
      { authorId: 277, minutesAgo: 79, content: "pakai arah waktu. suhu turun 2 derajat tiap jam. tiga jam lalu udara lebih hangat 6 derajat dari sekarang. mundur dari yang turun = naik" },
      { authorId: 90, minutesAgo: 73, content: "analogi utang juga sering kepakai: dihapus tiga utang masing-masing 2, artinya hartanya nambah 6" },
      { authorId: 66, minutesAgo: 68, content: "gue dulu gak percaya juga, sampai dihitung mundur pakai garis bilangan dan lompatannya cocok semua. anak yang begitu biasanya pahamnya lewat mundur dulu" },
    ],
  },
  {
    id: 4,
    authorId: 4,
    minutesAgo: 115,
    shares: 3,
    content:
      "Dari jam 8 pagi tetangga gue renover rumah. Bor. Jeda sarapan. Bor lagi. WFH hari ini rencananya rampungin laporan, kenyataannya gue hafal semua jenis bor di rumah itu: ada yang berdengung, ada yang nyolot, ada yang bunyinya kayak mau lepas terus gak jadi.\nJam 12 dia istirahat. Gue sempet senyum dua menit. Jam 1 bor lagi.\nGue gak bisa protes, dia yang bantuin angkat barang waktu gue pindahan kemarin. JADI YA SUDAH. Headset, volume kenceng, deadline jam 5. Tolong yang pernah selamat ngerjain kerjaan di tengah konstruksi, cara apa yang dipakai",
    comments: [
      { authorId: 192, minutesAgo: 104, content: "kebetulan tetangga gue juga lagi renover. akhirnya gue ke kafe, beli kopi 22 rebu buat sewa meja, laporan kelar 3 jam. anggep aja biaya lari dari bor" },
      { authorId: 37, minutesAgo: 96, content: "kalau tetangganya masih tau jam istirahat mah masih tergolong sopan. yang gak ada ampun itu yang mulai jam 6 pagi tanpa aba-aba" },
    ],
  },
  {
    id: 5,
    authorId: 5,
    minutesAgo: 145,
    shares: 45,
    content:
      "1 gelas beras itu berapa gram? GUE GAK TAU. padahal beras itu dagangan gue. bener, gak tau.\ntadi ada yang mau nyoba resep dari internet, ukurannya gram, gue cuma punya gelas. gue bilang tunggu ya, gue tanya google. justru google yang bikin pusing: satu web bilang 180, satu 200, satu 240. GELAS YANG MANA SIH.\nakhirnya dia ke timbangan buah sebelah. 180.\nsekarang yang mikir justru gue: kalau resep minta 250 gram, itu ambil gelas berapa? dan kenapa warung sebelah punya timbangan terus gue gak. dijual di mana sih timbangan itu",
    comments: [
      { authorId: 143, minutesAgo: 139, content: "gelas emang beda-beda ukurannya. 250 gram beras kira-kira satu setengah gelas ukuran warungmu, tapi mending beli timbangan aja, sekali beli bisa dipakai bertahun-tahun" },
      { authorId: 84, minutesAgo: 134, content: "lucu ya, jualan beras bertahun-tahun tapi gram itu kayak bahasa asing. di warung kami sama, tanya kilo gampang, tanya gram semuanya tanya balik" },
    ],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 175,
    shares: 3,
    content:
      "tadi sore gue itung 0,1 + 0,2 di ponsel, jawabannya 0,30000000000000004. gue itung ulang pakai kertas, tetap 0,3. gue nyalain kalkulator punya temen kos, hasilnya sama persis. berarti gue salah di dua tempat, atau mesinnya salah di dua tempat. tolong orang yang paham teknologi masuk sini. gue harus tahu dulu sebelum tidur, soalnya kalau mesin aja bisa bohong terus dunia ini gimana",
    comments: [
      { authorId: 219, minutesAgo: 170, content: "itu bukan mesin bohong bre, itu cara komputer nyimpen desimal yang namanya floating point. 0,1 dan 0,2 gak bisa ditulis persis dalam biner, jadi ada sisa super kecil" },
      { authorId: 138, minutesAgo: 164, content: "wkwkwk klasik. coba 0,5 + 0,25, hasilnya bakal bersih soalnya setengah dan seperempat gampang ditulis biner" },
      { authorId: 322, minutesAgo: 159, content: "tenang bre, sisa 0,00000000000000004 gak akan ngaruh ke dompet lu" },
      { authorId: 149, minutesAgo: 152, content: "makhluk paling jujur di dunia itung-itungan itu masih kertas bre" },
    ],
  },
  {
    id: 7,
    authorId: 7,
    minutesAgo: 205,
    shares: 41,
    content:
      "guys, tolong yang paham file Excel. draft bab 4 gue ada di satu sheet, 96 baris data kuesioner yang udah gue rapikan semaleman. tadi sore laptop ngeheng, aku paksa matiin dari panik, dan pas dibuka lagi sheet-nya... kosong. sheet sebelah aman, cuma sheet draft yang hilang. dan aku belum pernah mengklik simpan dari awal 🙃\n\nada cara ngembaliin file yang belum pernah tersimpan? atau memang sudah tidak bisa? ya udah kalau sudah, gue terima nasib dan mulai ngetik ulang sambil nangis, datanya masih nempel di kepala kok, cuma tangan yang mau mogok 🙃",
    comments: [
      { authorId: 217, minutesAgo: 197, content: "kalau belum pernah disimpan kak kemungkinannya tipis, tapi coba cek folder temp atau file sisa .tmp di folder kerja. gue kemarin nemu file .tmp di situ" },
      { authorId: 60, minutesAgo: 188, content: "yang hilang cuma kecepatan tangannya. proses mikirnya udah selesai kan, ngetik ulang itu jauh lebih cepet dari mikir ulang" },
    ],
  },
  {
    id: 8,
    authorId: 8,
    minutesAgo: 235,
    shares: 23,
    content:
      "loker gue macet lagi tadi mau pulang. kuncinya muter tapi gak mau buka, padahal kemarin-kemarin normal normal aja. telepon satpam dari ruang jaga, nunggu sambil duduk deket pintu. dibenerinnya cepet, katanya cuma kunci yang kendor. yang kesel itu udah kedua kali bulan ini. terus pas di angkot gue baru inget charger masih nyambung di colokan ruang jaga. baliknya nanti sore, kalo udah diambil orang ya udah, charger gue emang sering jadi milik bersama",
    comments: [
      { authorId: 258, minutesAgo: 229, content: "gue pernah begini bre, 10 menit berantem sama kunci, ternyata salah loker. untung gak ada yang rekam wkwk" },
    ],
  },
  {
    id: 9,
    authorId: 9,
    minutesAgo: 265,
    shares: 15,
    content:
      "order tadi siang tulisannya 4 menit. pas nyampe depan gang, motor gak bisa masuk, ada gundukan tanah dari renover, mundur dua kali. turun tanya warga, disuruh lewat jalan bawah, nambah lumayan. penumpang nunggu depan pos gerimisan gak bawa payung, gue kasih jas hujan gue. nyampe tujuan dia malah bilang makasih, gak marah sama sekali. yang gue mau tanya ke sini aja: angka 4 menit di aplikasi itu dihitung dari apa, peta taun berapa sih, info renover gak ada sama sekali",
    comments: [
      { authorId: 137, minutesAgo: 258, content: "peta tau jalan pintas, gak tau pintasnya buat motor atau buat kupu-kupu bre" },
      { authorId: 186, minutesAgo: 251, content: "4 menit itu jarak antar titik kalau lu bisa terbang. hujan mah bonus level" },
    ],
  },
  {
    id: 10,
    authorId: 10,
    minutesAgo: 295,
    shares: 26,
    content:
      "KUIS DADAK MATRIKS TADI DAN GUE BARU TAU KALAU DETERMINAN ITU BUKAN NAMBAHIN SEMUA ANGKA DI DALAM KURUNG. jawaban gue beda sendiri dari satu kelas dan WAKTU ITU GUE YAKIN BANGET ITU BENER. TEMEN SEBELAH GUE KETAWA SAMPE DIOMELIN BU. YANG SALAH GAK KENA APA-APA, YANG KETAWA YANG KENA.\nminggu depan ulangan lagi dan gue gak mau bego dua kali berturut-turut. ada yang bisa jelasin kenapa cara hitungnya beda gak, dari nol, pelan-pelan",
    comments: [
      { authorId: 131, minutesAgo: 288, content: "ad kali d dikurang b kali c bre, silang. kenapa harus begitu? jangan tanya, guru gue dulu cuma bilang 'memang begitu' terus nulis di papan" },
      { authorId: 118, minutesAgo: 283, content: "gue lebih heran sama namanya. determinan. kedengerannya kayak jabatan di kantor kelurahan, ternyata cuma satu angka" },
      { authorId: 223, minutesAgo: 277, content: "gue dulu yakin 1/2 + 1/3 itu 2/5, seminat itu, sampe guru nulis panjang di papan dan gue diem aja malu sendiri" },
      { authorId: 154, minutesAgo: 271, content: "lucu ya yang salah gak kena apa-apa, yang ketawa yang kena. hukum rimba kelas bre" },
      { authorId: 313, minutesAgo: 264, content: "masa satu kelas cuma lo doang yang nambahin semua, gue gak percaya. pasti ada yang lain cuma malu ngaku wkwk" },
    ],
  },
  {
    id: 11,
    authorId: 11,
    minutesAgo: 325,
    shares: 41,
    content:
      "100 naik 20% jadi 120. lalu turun 20%. saya jawab otomatis: 100. SALAH. ternyata 96.\npersen itu menempel di angka terakhir, bukan angka awal. pekerjaan saya tiap hari dekat angka, ini baru main-main langsung nyasar. agak malu, tapi lebih tepat disebut kaget.\nanak saya ulangan besok. ada jebakan angka model lain yang perlu diwaspadai? mau saya daftarkan buat dia",
    comments: [
      { authorId: 262, minutesAgo: 317, content: "kebalikannya juga sama: turun dulu 20% lalu naik 20% tetap 96. persen selalu hitung dari angka sekarang" },
      { authorId: 205, minutesAgo: 310, content: "dunia diskon toko juga begini, naik-turun persen gak pernah balik ke asal. lihat label 'diskon besar' mending hitung dulu" },
      { authorId: 71, minutesAgo: 303, content: "contoh serupa yang sering keliru: harga naik 50% harus turun berapa persen biar balik? jawabannya sepertiga, bukan setengah" },
    ],
  },
  {
    id: 12,
    authorId: 12,
    minutesAgo: 355,
    shares: 5,
    content:
      "jam 3.47 alarm infus bunyi. gua jalan ke kamar 5. nyampe, mati sendiri.\ngua diem 5 detik, balik ke kursi, duduk. bunyi lagi.\njalan lagi, mati lagi. sekarang gua berdiri deket pintu, tangan saku, nunggu babak berikutnya. perang dingin, dan gua gak akan tidur duluan",
    comments: [],
  },
  {
    id: 13,
    authorId: 13,
    minutesAgo: 385,
    shares: 19,
    content:
      "guys tolong cek jawaban gue. soalnya: sebuah kubus volumenya 125 cm kubik, brp panjang rusuknya. gue jawab 25 cm soalnya 125 dibagi 5 kan 25?? terus temen gue bilang salah, harusnya 5, katanya harus cari angka yang dikali tiga kali. gue bingung, 5 itu kegedean gk sih buat kubus volume 125? tolong jgn asal bilang gue salah, nilai mat gue udah secandu itu wkwkwk, di buku gk ada pembahasannya smpe skrg",
    comments: [
      { authorId: 127, minutesAgo: 378, content: "volume = rusuk × rusuk × rusuk. 5×5×5 = 125 itu bener. lu bagi doang bre, 125÷5 = 25 tapi itu bukan cara nyari rusuk" },
      { authorId: 138, minutesAgo: 371, content: "cek balik bre: 25×25×25 = 15.625. jelas kegedean wkwkwk" },
      { authorId: 160, minutesAgo: 364, content: "kubus rusuk 5 cm itu ukurannya segede kotak pensil dik, gak gedean kok. bukan kulkas" },
      { authorId: 331, minutesAgo: 357, content: "logikanya sama kayak volume balok dik: panjang×lebar×tinggi. kubus mah semua sisinya sama jadi sekali kali tiga angka yang sama" },
    ],
  },
  {
    id: 14,
    authorId: 14,
    minutesAgo: 415,
    shares: 7,
    content:
      "paman gue bagi video di grup keluarga: 'air garam bisa sembuhin sakit kepala'. gue balas itu gak ada dasar ilmiahnya, kasih dua link.\njawaban gue dianggap kurang ajar. sekarang grup sepi, dan gue dapet chat pribadi berderet nanyain kenapa gue marahin paman.\nGUE GAK MARAH. GUE CUMA KASIH LINK.\nudah. besok gue diam aja. video apa pun saya setuju. yang penting grup rukun dan gue gak jadi topik arisan",
    comments: [
      { authorId: 199, minutesAgo: 406, content: "link dua itu yang bikin tersinggung biasanya. bukan isinya, tapi rasa disangkal di depan keluarga" },
      { authorId: 272, minutesAgo: 399, content: "jurus diam itu akhir dari semua grup keluarga. setuju tanpa membahas, damai tanpa benar" },
    ],
  },
  {
    id: 15,
    authorId: 15,
    minutesAgo: 445,
    shares: 17,
    content:
      "pisang kemarin masih anget, hari ini mulai burik. hujan terus, pembeli yang mampir cuma satu, katanya lihat-lihat doang, ternyata beli tiga ikat kecil juga 😂\ngue pesan es teh ke tetangga lapak, gue anggep itu biaya mewek resmi.\nkalau besok masih hujan, gue sama tetangga lapak potong harga bareng-bareng. biar miskinnya rame, biar gak sendirian",
    comments: [
      { authorId: 102, minutesAgo: 437, content: "pisang burik itu kandidat goreng. di tempat kami potong kecil-kecil jual gorengan, malah lebih cepet habis dari yang bagus" },
      { authorId: 32, minutesAgo: 430, content: "yang cuma lihat-lihat itu setengah pembeli, sisanya cuma butuh waktu sebelum memutuskan. langganan gue yang paling setia dulu juga suka bilang 'cuma nengok'" },
    ],
  },
  {
    id: 16,
    authorId: 16,
    minutesAgo: 475,
    shares: 26,
    content:
      "ambil izin satu hari. rencananya: bersih-bersih, urus pengajuan reimbursement, jemput baju laundry.\nkenyataan jam 1 siang: masih di kasur nonton video orang jatuh dari sepeda. belum mandi. baju masih di laundry. reimbursement itu apa, mana inget.\naneh ya, pas kerja pengennya di rumah, pas di rumah malah gak bisa ngapa-ngapain.\nsisa satu jam lagi sebelum sore. ada yang punya saran cara memaksa diri, selain teriak",
    comments: [
      { authorId: 243, minutesAgo: 466, content: "reimbursement itu memang jenis urusan yang secara hukum tidak tertulis hanya bisa dikerjakan di hari kerja. aturan gak tertulis kantor" },
      { authorId: 290, minutesAgo: 458, content: "video orang jatuh itu hiburan yang gak bisa dibantah. satu jam itu cukup buat mandi, sisanya dianggap besok" },
    ],
  },
  {
    id: 17,
    authorId: 17,
    minutesAgo: 505,
    shares: 30,
    content:
      "bro, tugas geometri jalan bikin gue mikir: rambu 'kemiringan 15%' itu artinya apa persisnya? gue duga miringnya 15 derajat, temen gue bilang bukan, katanya naik 15 meter tiap 100 meter jalan. gue cek: 15/100 = 0,15, dijadikan tan θ, hasilnya sekitar 8,5 derajat. beda jauh dari 15 derajat yang gue bayangin. bro, jadi persen di rambu itu tan, bukan derajat? terus kalau mobil naik jalan 15% kerasa gak ya buat yang biasa bawa beban, soalnya di tugas cuma diminta itung, gak diminta kerasa",
    comments: [
      { authorId: 213, minutesAgo: 496, content: "betul bro, rambu pakai tan. 100% saja itu 45 derajat. bayangin kalau jalan 15 derajat, udah kayak tangga" },
      { authorId: 336, minutesAgo: 488, content: "kerasa bro apalagi motor bawa penumpang. gak nyampe tangga sih, tapi gigi satu pasti keluar" },
      { authorId: 30, minutesAgo: 478, content: "patokan sederhananya bro: yang dirasa landai itu biasanya baru 5%. 15% sudah masuk kategori bukit di banyak buku teks" },
    ],
  },
  {
    id: 18,
    authorId: 18,
    minutesAgo: 535,
    shares: 14,
    content:
      "baru sadar foto di ponsel gue isinya mangga semua. mangga ngantuk, mangga paling besar minggu ini, mangga yang dikira busuk ternyata enggak, mangga tetangga sebelah.\nipar gue nanya kenapa kayak album katalog. gue juga gak tau. lihat mangga bagus, tangan otomatis ambil ponsel.\nini normal gak sih, atau gue doang yang kayak petugas dokumentasi mangga",
    comments: [
      { authorId: 178, minutesAgo: 527, content: "normal, tukang cukur juga suka foto rambut bagus entah buat apa. anggep aja arsip kebanggaan" },
    ],
  },
  {
    id: 19,
    authorId: 19,
    minutesAgo: 565,
    shares: 21,
    content:
      "ada yang isi pulsa salah satu digit. uangnya masuk ke nomor orang lain. dia panik, gue telpon nomor itu, bener diterima.\ngue bilang tadi ada salah kirim pulsa, bisa diantar balik? dia jawab 'nanti dulu ya, lagi rapat'.\nRAPAT. 25 ribu bikin dia punya rapat.\nsampe sekarang gue hafal suaranya, gak hafal mukanya. pulsa itu masih di sana, nganggur",
    comments: [
      { authorId: 240, minutesAgo: 557, content: "yang model gitu biasanya nyadar malemnya terus mampir malu-malu. tunggu aja, salah kirim di tempat gue dulu juga balik sendiri kok" },
      { authorId: 139, minutesAgo: 549, content: "mungkin di dalam rapat itu dia justru mikirin 25 ribunya. kecil, tapi nyangkut" },
    ],
  },
  {
    id: 20,
    authorId: 20,
    minutesAgo: 595,
    shares: 14,
    content:
      "tempat nunggu order sore-sore itu deket lapangan. biasanya satu kelompok senam ibu-ibu, pake satu pengeras suara.\nminggu ini jadi dua kelompok. katanya gara-gara soal jadwal. sekarang satu di timur, satu di barat, dua-duanya nyala barengan, yang diputar beda.\npaling seru pas kebetulan tarinya sama tapi temponya beda. gue duduk di motor, nonton, sampe order masuk.\nbeberapa kali gue lupa lihat ponsel. sori ya yang order, pertunjukannya gratis",
    comments: [
      { authorId: 283, minutesAgo: 586, content: "order gue yang tadinya nyebelin jadi kalem dengar cerita ini. lanjut nonton bang" },
      { authorId: 97, minutesAgo: 578, content: "ponsel gue pernah hilang di angkot dan gak balik 😭 jadi nonton senam dua kelompok itu udah hiburan kelas satu" },
    ],
  },
  {
    id: 21,
    authorId: 21,
    minutesAgo: 625,
    shares: 21,
    content:
      "masak nasi pakai 1 liter beras buat 3 orang, hasilnya kebanyakan parah. sekarang ada 5 porsi nasi dingin di kulkas dan menu besok-belakang udah pasti nasi terus. temen kos bilang takarannya air harus 1,5 kali beras, tapi kata ibu gue 'cukup satu ruas jari di atas beras'. dua-duanya bilang sambil nunjuk, bukan sambil ragu.\nkalian tim ruas jari atau tim rasio? besok aku coba 1 gelas beras dulu, pelan-pelan, daripada nasi nyangkut seminggu",
    comments: [
      { authorId: 33, minutesAgo: 617, content: "tim ruas jari dah kak. gelas beda-beda ukuran, tapi ruas jari itu ikut jari kita sendiri. air satu ruas di atas beras, api kecil di akhir" },
      { authorId: 106, minutesAgo: 610, content: "nasi dingin itu bahan goreng nasi paling enak kak, jangan buang 🙏" },
      { authorId: 152, minutesAgo: 602, content: "tim rasio kak: 1 beras : 1,2-1,5 air tergantung tipe berasnya. yang penting catat hasil percobaan pertama, besok tinggal kurangin" },
    ],
  },
  {
    id: 22,
    authorId: 22,
    minutesAgo: 655,
    shares: 19,
    content:
      "Anakku hari ini nunjuk dua kucing terus bilang dua. bukan satu, bukan sembarangan, bener dua. aku minta ulang, dia tunjuk satu-satu: satu, dua. umur dua tahun tiga bulan.\nmasalah baru sekarang: semua kucing jadi dua. tadi lewat satu kucing, dia tetap bilang dua. aku belum nemu cara ngecek bener atau nggak, soalnya kucing jarang nunggu di tempat",
    comments: [
      { authorId: 77, minutesAgo: 647, content: "fase ini cepet banget lewat, catat di ponsel aja, nanti dibaca ulang pasti lucu" },
      { authorId: 59, minutesAgo: 640, content: "anakku dulu juga mulai dari kucing, lanjut ngitung beruang di TV 😄" },
      { authorId: 103, minutesAgo: 633, content: "kalau jawabannya selalu dua, bilang aja dua itu nama panggilannya kucing. aman berbulan-bulan" },
      { authorId: 309, minutesAgo: 625, content: "tergantung si kucingnya mau dihitung berapa. mereka juga punya pendapat" },
      { authorId: 24, minutesAgo: 616, content: "CUCU IBU PINTAR. KUCING DUA ITU GURU YANG SABAR." },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 685,
    shares: 2,
    content:
      "kuota sisa 0,3 GB. tanggal 14. ponsel bilang pembaruan sistem tersedia, 2,1 GB. gue tunda tiga hari. malam ini tanpa sengaja nyentuh tombol unduh pas pegangan gelap.\nsekarang gue dengar kipas ponsel bunyi kayak kereta malam.\nbesok ke kantor naik apa ya. jalan kaki 5 km gak kuat, angkot 2 ribu. keputusan besok pagi aja, sekarang yang penting gak megang tombol apapun lagi",
    comments: [
      { authorId: 318, minutesAgo: 677, content: "jalan kaki itu bukan hukuman bre, itu fitur bonus dari kecerobohan" },
    ],
  },
  {
    id: 24,
    authorId: 24,
    minutesAgo: 715,
    shares: 12,
    content:
      "CUCU AKU MENGAJARI AKU PAKAI PONSEL. DIA BILANG BICARA SAJA, TULISANNYA JALAN SENDIRI. AKU BICARA SELAMAT PAGI SEMUA, TERNYATA MASUKNYA KE GRUP KOMUNITAS SEBELAH. MEREKA JAWAB 'PAGI MAK MBAK'. MAK BAK. SAYA NENEK.\nDIA JUGA BILANG JANGAN ASAL TERUSKAN PESAN. KENAPA? PESANNYA BAGUS-BAGUS. DIA BILANG ITU MASALAHNYA.\nSEKARANG AKU WAJIB TANYA DULU SEBELUM MENYEBAR APA PUN. BAIKLAH. BESOK AKU TANYA: PESAN MANA YANG BOLEH DITERUSKAN, PESAN MANA YANG DIHARAMKAN.",
    comments: [
      { authorId: 81, minutesAgo: 707, content: "tersalah grup itu tradisi pembuka semua pemula mbak. yang penting disambut 'pagi mak', artinya orangnya ramah" },
      { authorId: 63, minutesAgo: 700, content: "cucu sabar ngajar berarti dia ngerjainnya penuh perhatian, itu langka" },
      { authorId: 187, minutesAgo: 693, content: "aturan 'tanya dulu' itu nanti sendirian longgar, tunggu aja sampai ada pesan yang benar-benar bagus mbak" },
      { authorId: 327, minutesAgo: 685, content: "grup komunitas sebelah itu pintu masuk termudah, dari situ biasanya jadi langganan salam" },
    ],
  },
  {
    id: 25,
    authorId: 25,
    minutesAgo: 745,
    shares: 30,
    content:
      "hari ini presentasi pertama di depan tim. slide gue 12, latihan 4 kali semalem. pas gue buka, tangan gue gemetar sampe remote klikern bunyi klok-klok, abes itu gue fokus ke satu orang yang ngangguk terus, rasanya masuk akal banget.\npresentasi selesai. atasan gue cuma ngangguk lagi terus bilang 'oke, lanjut'. gak ada komentar. gak ada tepuk tangan. gue pulang kerja bingung, senang atau gak ya? tp sore tadi mentor gue bilang buat anak magang oke banget itu. yaudah. gue makan es krim.",
    comments: [
      { authorId: 144, minutesAgo: 737, content: "es krim itu bentuk resmi dari 'gue lolos bre'. selamat kak" },
      { authorId: 236, minutesAgo: 730, content: "di dunia kerja 'oke, lanjut' itu pujian tingkat dewa. dari rekan magang yang sama-sama pernah gemetar: bangga" },
    ],
  },
]
