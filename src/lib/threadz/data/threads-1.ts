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
//     sempurna, genre kerja-duit, esai mini bermoral.
//  7. Post boleh menggantung. Dunia gak bersih itu manusia.
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 1,
    minutesAgo: 25,
    shares: 12,
    content:
      "Alhamdulillah hari ini papanya yang nganterin sekolah, jadi aku kebagian denger obrolan pulangnya. Anak pertama nanya di mobil: 'Bu, 10 dikurang setengah kok hasilnya 9,5? Bukannya harus 9?' Aku jawab setengah itu 0,5, dia makin bingung. Setengahnya dari apa, Bu? Katanya. Sekarang tiap malam dia nanya hal kecil kayak gini terus, aku mulai kehabisan stok jawaban 😭\n\nAda yang punya cara jelasin desimal ke anak kelas 3 SD biar gak tambah bingung?",
    comments: [
      { authorId: 74, minutesAgo: 21, content: "itu tahap bagus bu, anak mulai penasaran angka kecil. ajakin pakai koin: setengah dari 1.000 itu 500, tunjuk fisiknya dulu" },
      { authorId: 59, minutesAgo: 18, content: "anakku juga gitu, akhirnya paham pas diajak ukur air setengah gelas di dapur 🙏" },
      { authorId: 268, minutesAgo: 14, content: "gambar garis dari 0 sampai 1 bu, tunjuk titik tengahnya. 0,5 itu alamatnya, bukan sisa" },
      { authorId: 88, minutesAgo: 10, content: "gak usah takut gak bisa jawab bu. bilang aja 'besok kita cari tahu bareng', anak jadi ikut mencari" },
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
      "Saya butuh bantuan cara menjelaskan perkalian bilangan negatif. Murid kelas 5 saya bertanya: kalau dikurangi itu artinya turun, kenapa hasil dari (−2) × (−3) justru naik menjadi 6? Logika anak itu kuat, dan saya tidak mau menjawab 'memang begitu aturannya'. Saya sudah mencoba dengan garis bilangan, ia bertahan dengan pertanyaannya.\n\nAnanda itu cerdas. Ada yang bisa memberi saya analogi yang jujur untuk anak SD? Terima kasih banyak sebelumnya.",
    comments: [
      { authorId: 277, minutesAgo: 79, content: "pakai arah waktu bu. suhu turun 2 derajat setiap jam. tiga jam yang lalu, udara lebih hangat 6 derajat dari sekarang. mundur ke belakang dari yang turun = jadinya naik" },
      { authorId: 90, minutesAgo: 73, content: "analogi utang juga sering kepakai bu: dihapus tiga utang masing-masing 2, artinya hartanya nambah 6" },
      { authorId: 66, minutesAgo: 68, content: "gue dulu gak percaya juga bu, sampai dihitung mundur pakai garis bilangan, lompatannya cocok semua" },
    ],
  },
  {
    id: 4,
    authorId: 4,
    minutesAgo: 115,
    shares: 3,
    content:
      "Rapat evaluasi 90 menit. Empat poin agenda. Poin pertama selesai dalam 7 menit. Sisanya tempat arisan. AC bagus. Catatan saya dua baris.",
    comments: [
      { authorId: 192, minutesAgo: 104, content: "90 menit itu udah singkat om. kemarin di tempat kami tiga jam, hasilnya satu keputusan: rapat lanjutan" },
    ],
  },
  {
    id: 5,
    authorId: 5,
    minutesAgo: 145,
    shares: 45,
    content:
      "ada pelanggan nanya: 1 gelas beras itu berapa gram sih? dia mau nyoba resep dari internet yang ukurannya pakai gram, tapi di warung jualnya pakai gelas. aku jawab 'kira-kira kak' soalnya aku sendiri gak pernah itung. terus dia minta timbang di timbangan buah sebelah, katanya gelas kami itu 180 gram.\n\nsekarang aku penasaran: beda gelas beda gram ya? kalau resepnya minta 250 gram, harus ambil berapa gelas? balik sekolah mau aku timbang satu-satu semua gelas di warung, biar besok ada jawabannya",
    comments: [
      { authorId: 143, minutesAgo: 139, content: "beda kak, gelas di rumah gue 240 ml tapi beras lebih berat dari air. 250 gram itu sekitar 1,4 gelas ukuran warung lu" },
      { authorId: 84, minutesAgo: 134, content: "semangat kak, setelah timbang sendiri sekali biasanya langsung hafal 🙏" },
    ],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 175,
    shares: 3,
    content:
      "gue gak percaya kalkulator lagi. itung 0,1 + 0,2 di ponsel, jawabannya 0,30000000000000004. gue itung ulang pakai kertas, tetap 0,3. gue nyalain kalkulator punya temen kos, hasilnya sama persis. berarti gue salah di dua tempat, atau mesinnya salah di dua tempat. tolong orang yang paham teknologi masuk sini. gue harus tahu dulu sebelum tidur, soalnya kalau mesin aja bisa bohong terus dunia ini gimana",
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
      { authorId: 217, minutesAgo: 197, content: "kalau belum pernah disimpan kak kemungkinannya tipis, tapi coba cek folder temp atau file sisa .tmp di folder kerja. semoga ada jejaknya 🙃" },
      { authorId: 60, minutesAgo: 188, content: "semangat kak. kata temen kerja di kantor: ngetik ulang itu cepat, mikir ulang yang lama. dan mikirnya udah selesai kan" },
    ],
  },
  {
    id: 8,
    authorId: 8,
    minutesAgo: 235,
    shares: 23,
    content:
      "pasien lansia minta jendela dibuka jam 04.10, katanya pengen dengar adzan sambil lihat langit masih gelap. gue buka.\ndia bilang rumahnya deket masjid, tapi yang suaranya ngepas di telinga tetangga sebelah rumah.",
    comments: [
      { authorId: 258, minutesAgo: 229, content: "ada orang yang iramanya lebih menghentakan daripada tempatnya, mbak" },
    ],
  },
  {
    id: 9,
    authorId: 9,
    minutesAgo: 265,
    shares: 15,
    content:
      "ada bocah SMP naik sendirian, order dari rumah temennya, jarak 4 km. gue nanya udah sering gak, dia jawab 'aman bang' penuh percaya diri. pas turun dia bayar pakai uang kembalian yang digulung karet banget, bentuknya lucu. gue bilang hati-hati, dia lari masuk gang sambil ngelempar makasih bang.\nsekarang gue mikir, umur segitu dulu gue belum pernah naik ke mana-mana sendirian",
    comments: [
      { authorId: 137, minutesAgo: 258, content: "bre anak sekarang beda, adik gue kelas 4 udah punya jadwal anter sendiri, cuma gak pakai aplikasi" },
      { authorId: 186, minutesAgo: 251, content: "asal bocahnya tenang kayak gitu aman bang. yang bikin cemas biasanya yang riuh di dalam mobil" },
    ],
  },
  {
    id: 10,
    authorId: 10,
    minutesAgo: 295,
    shares: 26,
    content:
      "KUIS DADAK MATRIKS TADI DAN GUE BARU TAU KALAU DETERMINAN ITU BUKAN 'ANGKA DI KURUNG DITAMBAH SEMUA'. Matriksnya 3 5 / 2 4, gue jawab 14 karena 3+5+2+4 = 14. TEMEN GUE KETAWA SAMPE DIAMARIN BU. Katanya rumusnya ad minus bc, jadi 3×4 minus 5×2 = 2. GUE MIKIR, LHA KOK KALI-KALIAN, KAN MATRIKSNYA DITAMBAH. BU JELASIN PAKAI JAJARGENJANG 5 MENIT DAN GUE MASIH SEDANG MAKAN.\nADA YANG MAU JELASIN DARI NOL PAKAI BAHASA MANUSIA GAK, minggu depan ulangan dan gue gak mau diamarin dua kali wkwkwk",
    comments: [
      { authorId: 131, minutesAgo: 288, content: "determinan itu ukuran 'seberapa gede tempat yang dilipat' matriksnya bre, makanya pakai kali. 3×4 = 12, 5×2 = 10, selisihnya 2" },
      { authorId: 118, minutesAgo: 283, content: "cek cepetnya: matriks 1 0 / 0 1 determinannya 1×1 − 0×0 = 1. kalau ditambah semua jadi 2, padahal jawaban benarnya 1" },
      { authorId: 223, minutesAgo: 277, content: "gambar vektor (3,5) dan (2,4) di kertas kotak kak, luas jajargenjangnya bakal kelihatan sendiri kenapa harus dikali" },
      { authorId: 154, minutesAgo: 271, content: "wkwkwk diamarin bu itu artinya kelas lu rame banget, istilahnya atmosfer kelas hidup bre" },
      { authorId: 313, minutesAgo: 264, content: "14 itu kebetulan rapi bre, jawaban determinan aslinya biasanya janggal wkwk" },
    ],
  },
  {
    id: 11,
    authorId: 11,
    minutesAgo: 325,
    shares: 41,
    content:
      "Selasa lalu saya mengikuti kelas belajar daring untuk latihan angka. Soal latihannya: sebuah nilai naik 20 persen, lalu turun 20 persen. Saya yakin jawabannya kembali ke angka semula. Ternyata tidak: 100 naik 20 persen menjadi 120, kemudian turun 20 persen menjadi 96. Persen itu ternyata ditempelkan ke angka terbaru, bukan angka awal. Umur 34 tahun baru menyadarinya, agak malu tetapi lega.\n\nAda materi semacam ini yang sering keliru juga? Saya mau kumpulkan untuk latihan anak saya di rumah.",
    comments: [
      { authorId: 262, minutesAgo: 317, content: "klasik. kebalikannya juga sama: turun dulu 20% lalu naik 20% tetap 96. persen selalu hitung dari angka sekarang" },
      { authorId: 205, minutesAgo: 310, content: "saya pernah terjebak yang begini saat melihat diskon toko. naik-turun dengan persen sama tidak pernah kembali ke asal" },
      { authorId: 71, minutesAgo: 303, content: "contoh serupa yang sering keliru bu: harga naik 50% harus turun berapa persen biar balik? jawabannya sepertiga, bukan setengah" },
    ],
  },
  {
    id: 12,
    authorId: 12,
    minutesAgo: 355,
    shares: 5,
    content:
      "shift malam hari kedua.\npasien kamar 5 dekak-dekak menyebut nama cucunya.\nkopi ketiga. koridor sepi.\nbesok libur. semoga.",
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
      "om yang tiap hari parkir jam setengah tujuh, tiga hari ini gak muncul. motornya gak ada. pos jadi sepi, gue sampe sempet rapikan tumpukan koran yang selama ini jadi sandaran dia.\nsemoga baik-baik aja. kadang orang hilang gitu aja, tanpa pamit, terus muncul lagi kayak gak ada apa-apa.",
    comments: [
      { authorId: 199, minutesAgo: 406, content: "om tipe begitu biasanya muncul lagi mas, orang yang punya kebiasaan susah pindah" },
      { authorId: 272, minutesAgo: 399, content: "rapikan koran itu tanda pos sudah jadi miliknya juga mas. semoga om-om itu sehat" },
    ],
  },
  {
    id: 15,
    authorId: 15,
    minutesAgo: 445,
    shares: 17,
    content:
      "hujan dari subuh teh, lapangan kosong, payung nangkring di bawah meja, ceret kosong. cabai di karung masih bagus karena gak keburu lembap. satu pembeli dateng cuma buat bertanya kabar 😂\ndoain besok cerah ya teh-teh sekalian, dagangan gak tahan menunggu dua hari",
    comments: [
      { authorId: 102, minutesAgo: 437, content: "semangat teh, musim begini memang ujian sabar buat kita yang jualan di lapangan 🙏" },
    ],
  },
  {
    id: 16,
    authorId: 16,
    minutesAgo: 475,
    shares: 26,
    content:
      "Rapat koordinasi tadi dari jam 10 sampai jam 12. Ada 23 slide presentasi, dua diagram yang tidak ada yang membaca, satu diskusi panas soal jadwal absensi. Keputusan akhirnya satu kalimat: 'diteruskan seperti sebelumnya.'\nAku pulang kerja lelah, tetapi kelelahannya bukan karena memikirkan angka, hanya karena menahan diri untuk tidak menghela napas terlalu keras di ruangan ber-AC.",
    comments: [
      { authorId: 243, minutesAgo: 466, content: "rapat begini itu gym mental non. yang paling pegal bukan tangan, tapi otot wajah yang jaga ekspresi" },
      { authorId: 290, minutesAgo: 458, content: "satu kalimat setelah dua jam itu bukan kegagalan non. kadang itu tanda semua orang sudah sepaham" },
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
      { authorId: 30, minutesAgo: 478, content: "patokan sederhananya bro: trotoar yang terasa landai itu sekitar 5%. 15% sudah masuk kategori bukit di banyak buku teks" },
    ],
  },
  {
    id: 18,
    authorId: 18,
    minutesAgo: 535,
    shares: 14,
    content:
      "semangka kemarin laku dikit. hari ini aku potongin dua buah buat contoh di depan lapak, merah banget untungnya. yang mampir cuma nengok-nengok doang, satu orang bahkan bilang 'besok ya om' padahal aku gak nawarin apa-apa.\nbesok coba lagi. kali ini taruh di posisi paling depan, siapa tau yang kemarin cuma pengen lihat jadi pengen beli.",
    comments: [
      { authorId: 178, minutesAgo: 527, content: "potongin contoh itu cara lama tapi masih ampuh om. orang percaya sama yang bisa dilihat, bukan yang diceritakan" },
    ],
  },
  {
    id: 19,
    authorId: 19,
    minutesAgo: 565,
    shares: 21,
    content:
      "jam 8 malam ke atas, sinyal di depan kios sering susah dipakai. pelanggan tanya kenapa, gue jawab jujur: tidak tahu. bisa karena awan, bisa karena banyak orang membuka ponselnya bersamaan.\npelanggan mengangguk seperti mengerti, padahal kami dua-duanya sama-sama tidak paham.",
    comments: [
      { authorId: 240, minutesAgo: 557, content: "jawaban jujur itu tipe jawaban yang paling sering bikin pelanggan balik lagi bos" },
    ],
  },
  {
    id: 20,
    authorId: 20,
    minutesAgo: 595,
    shares: 14,
    content:
      "Penumpang tadi pagi lupa ponselnya di jok belakang. Saya baru sadar sepuluh menit kemudian, langsung balik ke alamat pemesanan. Ia belum menyadari kehilangan, masih sibuk membuka pagar. Saat diserahkan, ia diam sebentar, lalu berkata terima kasih dua kali.\nTidak ada yang berlebihan. Hanya ponsel yang kembali dan orang yang bisa melanjutkan hari.",
    comments: [
      { authorId: 283, minutesAgo: 586, content: "sepuluh menit balik arah itu murah dibanding satu hari panik, pak. kerja bagus" },
      { authorId: 97, minutesAgo: 578, content: "ponsel saya pernah hilang di taksi dan tidak kembali pak 😭 senang membaca yang begini" },
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
      "Anakku hari ini menunjuk dua ekor kucing di halaman lalu berkata 'dua'. Bukan satu, bukan sembarangan, tetapi dua. Ibu minta mengulang, ia mengulang sambil menunjuk kucingnya satu-satu: satu, dua. Umurnya dua tahun tiga bulan, Alhamdulillah.\nSebentar lagi mungkin menghitung sampai sepuluh. Doakan saja ibu yang tidak sabar ini tidak mengajari anak berhitung sampai lupa menidurkannya siang 🙏",
    comments: [
      { authorId: 77, minutesAgo: 647, content: "barakallah bu, fase begini cepat lewat, nikmatin sambil dicatat-catat kecil 🙏" },
      { authorId: 59, minutesAgo: 640, content: "anakku dulu juga mulai dari kucing bu, dua kucing itu guru berhitung terbaik 😄" },
      { authorId: 103, minutesAgo: 633, content: "jangan buru-buru ke sepuluh bu, dua itu sudah kejayaan. lanjutkan dengan barang berpasangan di rumah" },
      { authorId: 309, minutesAgo: 625, content: "doa terbaik bu, anak sedang menghitung dunia sedikit demi sedikit" },
      { authorId: 24, minutesAgo: 616, content: "CUCU IBU PINTAR. KUCING DUA ITU GURU YANG SABAR." },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 685,
    shares: 2,
    content:
      "kuota sisa 0,3 GB. tanggal 14. ponsel bilang pembaruan sistem tersedia, ukuran 2,1 GB. gue tunda tiga hari. malam ini tanpa sengaja menyentuh tombol unduh saat pegangan gelap. sekarang dengar kipas ponsel bernafas seperti kereta malam.\nbesok jalan kaki ke kantor. gratis, sehat, selaras.",
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
      "CUCU AKU ULANGAN PERKALIAN BESOK. DIA MENGAJARI AKU 8×7. AKU JAWAB 54, DIA BILANG SALAH, HARUSNYA 56. AKU TANYA ASALNYA DARI MANA, DIA BILANG TINGGAL AMBIL 8×6 LALU TAMBAH 8 LAGI. PIKIRANNYA CEPAT SEKALI PADAHAL TADI MASIH NGANTUK MAKAN LONTONG.\nAKU PURA2 TIDAK TAHU APA-APA PADAHAL AKU HANYA INGIN DIA MERASA SEDANG MENGAJAR. DOAKAN NILAINYA BAGUS. KALAU BAGUS AKU BUATKAN MAKANAN KESUKAANNYA.",
    comments: [
      { authorId: 81, minutesAgo: 707, content: "8×6 lalu tambah 8 itu cara yang benar mbak, anaknya paham strukturnya, doa kami ikut 🙏" },
      { authorId: 63, minutesAgo: 700, content: "cucu bisa mengajar berarti dia paham sungguhan mbak, bukan sekadar hafal" },
      { authorId: 187, minutesAgo: 693, content: "lontong terbukti lintas zaman sebagai hadiah belajar mbak" },
      { authorId: 327, minutesAgo: 685, content: "metode pura2 tidak tahu itu ampuh mbak, cucu jadi merasa penting dan belajarnya makin semangat" },
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
