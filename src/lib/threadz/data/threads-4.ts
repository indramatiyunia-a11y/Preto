import type { ThreadzThread } from "../types"

// PART 4: cuitan 76-100. Post kedua untuk penulis 26-50.
// Sidik jari tetap: 13 tetap jamet tanpa tanda baca, 49 tetap "bos",
// 34 tetap logbook, 3 tetap "saya/Ananda", 41 tetap fragmen paket,
// 48 tetap kalimat utuh, 10 tetap KAPITAL+wkwk, dst.
export const THREADS_PART4: ThreadzThread[] = [
  {
    id: 76,
    authorId: 13,
    minutesAgo: 2275,
    shares: 19,
    content:
      "plng skolah hujan gede. gk bawa payung. sembunyi di warung depan, beli es teh 2 rebu. tnggu 40 menit.\nom warung baik, ksih kursi plastik.\npas ujan reda jalan pulang 15 menit, sepatu becek smua. ibu balesin pake sapu tngan wkwk.\nbesok bawa payung bre. catat.",
    comments: [
      { authorId: 143, minutesAgo: 2266, content: "es teh pas hujan tuh wajib bre, panas didalem dingin diluar rasanya seimbang wkwk" },
      { authorId: 127, minutesAgo: 2258, content: "om warung yang ksih kursi tuh orang baik, besok beli snack juga disana ya bre biar dia untung" },
      { authorId: 10, minutesAgo: 2249, content: "IBU BALESIN PAKE SAPU TNGAN WKWKWK. GUE IKUT KEPLESET. GAK APA BRE SEPATU BECEK TANDA PULANG" },
      { authorId: 35, minutesAgo: 2240, content: "sapu tangan ibu tuh alat paling serbaguna di dunia ya... payung juga bisa dari daun pisang sih" },
      { authorId: 38, minutesAgo: 2231, content: "kak, es teh di warung depan sekolah tuh enak gak? besok aku mau beli kalau bunda kasih uang lebih 😄" },
      { authorId: 137, minutesAgo: 2222, content: "ujan 40 menit itu denger, gue sekali ujan 2 jam, kebeku jadi patung wkwk" },
    ],
  },
  {
    id: 77,
    authorId: 49,
    minutesAgo: 2305,
    shares: 5,
    content:
      "sore ini 9 kepala. satu bawa bocah 4 tahun, takut gunting, nangis.\nkuberi cermin kecil, dia liat dirinya sendiri, berhenti nangis. potong rambut bocah itu 40 menit, bayarnya 8 ribu.\nuntung gak ada. tapi om-omnya beli kopi di sebelah, nyodorin satu.\nbos, untung itu bentuknya kadang kopi.",
    comments: [
      { authorId: 14, minutesAgo: 2296, content: "bocah yang takut gunting itu biasanya yang ceritanya paling panjang om. untung gak harus besar, yang penting balik" },
      { authorId: 194, minutesAgo: 2288, content: "cermin kecil itu jurus ampuh ya om. bocah liat dirinya kira kucing kecil wkwk" },
      { authorId: 232, minutesAgo: 2279, content: "8 ribu 40 menit itu kurang om, tapi kopi tetangga itu untung yang gak dicatat" },
      { authorId: 189, minutesAgo: 2270, content: "pelanggan bocah itu investasi om. besar nanti dia yang bawa anak dia ke cukur om lagi" },
    ],
  },
  {
    id: 78,
    authorId: 26,
    minutesAgo: 2335,
    shares: 14,
    content:
      "sore ini penumpang terakhir ibu2 bawa 2 kantong sayur. turunnya di tikungan, jauh dari halte.\nkudeketin ke gang biar dia gak jalan jauh. dia bilang 'mas, tarifnya cukup kan?'.\n\ncukup mas. sayur2 itu buat masakan dia, bukan buat gue. tapi pulangnya gak ngantuk.\naneh ya, ngebantu dikit rasanya kayak dapet bensin gratis. bro.",
    comments: [
      { authorId: 20, minutesAgo: 2326, content: "penumpang yang nanya 'cukup kan' itu biasanya yang pikirannya rapi, mas. dia gak mau rugi orang lain" },
      { authorId: 9, minutesAgo: 2318, content: "turunin ke gang tuh amal yang gak keliatan bro, penumpang doang tau, bos gak tau, tapi bensinnya dapet wkwk" },
      { authorId: 244, minutesAgo: 2309, content: "'dapet bensin gratis' itu perasaan yang gak bisa dibeli. semoga sayurnya enak masakannya 🙏" },
      { authorId: 187, minutesAgo: 2300, content: "angkot yang nge-deketin ke gang itu jarang bro. kebanyakan 'yang turun di sini turun'. selamat" },
      { authorId: 240, minutesAgo: 2291, content: "gue dulu naik angkot bawa galon, yang nyetir nungguin galon naik dulu baru jalan. sampai sekarang gue inget. mungkin ini yang bapaknya rasain ya wkwk" },
    ],
  },
  {
    id: 79,
    authorId: 34,
    minutesAgo: 2365,
    shares: 12,
    content:
      "ronde jam 3 pagi, ada kucing masuk lewat lobang pagar.\nlogbook kutulis: 'kucing, hitam, masuk 03.10, keluar 03.25.'\n\nbos pernah bilang, catat semua yang lewat. kucing pun.\nbesok kalau ada yang nanya keamanan semalem, jawabannya: kucing satu, gak bawa barang, sudah keluar.",
    comments: [
      { authorId: 27, minutesAgo: 2356, content: "logbook yang nulis kucing itu logbook yang hidup om. di gudang kami catat paket doang, kucing lewat gak tercatat, baru besok pagi ketahuan dari bekas" },
    ],
  },
  {
    id: 80,
    authorId: 3,
    minutesAgo: 2395,
    shares: 21,
    content:
      "Hari ini ada murid yang menangis karena nilainya 6, padahal kemarin 5. Kutunjukkan buku nilai: dari 5 ke 6 itu naik.\n\nKatanya, 'Bu, tapi masih merah ya.'\nMerah itu bukan akhir, Ananda. Besok kita koreksi bersama. Yang naik, disyukuri. Yang merah, dikerjakan.",
    comments: [
      { authorId: 30, minutesAgo: 2386, content: "Dari 5 ke 6 itu bukan angka, itu anak yang berani melanjutkan. Murid seperti ini jarang, tetap ditemani ya bu." },
      { authorId: 48, minutesAgo: 2378, content: "Buku nilai yang ditunjukkan adalah bukti paling jujur. Anak menangis karena ia berharap lebih dari dirinya sendiri. Itu bakal menjadi sesuatu." },
      { authorId: 46, minutesAgo: 2369, content: "'Yang naik disyukuri, yang merah dikerjakan' itu peribahasa baru ya bu. aku mau pake di rumah 😄" },
      { authorId: 281, minutesAgo: 2360, content: "Merah di kertas, tetapi prosesnya hijau. Anak-anak membutuhkan guru yang bisa membaca dua warna." },
      { authorId: 77, minutesAgo: 2351, content: "bu, anak saya juga begitu, fokusnya di merahnya. besok saya tunjukkan naiknya dulu, baru kita kerjakan 🙏" },
    ],
  },
  {
    id: 81,
    authorId: 41,
    minutesAgo: 2425,
    shares: 26,
    content:
      "paket hari ini 58, hujan 2 jam. yang terselamatkan 54, yang kemasannya lembek 4, kulapor, diganti hari ini juga.\n\nsatu paket alamatnya pakai simbol hati. bener orangnya, tinggal di gang. minta paketnya dibawa pelan2. katanya isinya kue buat ibunya.\npelan2 aja mas. hati2 kue. hati2 hati.",
    comments: [
      { authorId: 27, minutesAgo: 2416, content: "kemasan lembek dilaporin dan diganti hari ini juga itu sistem yang sehat om. di gudang kami juga begitu, jangan ditumpuk" },
      { authorId: 235, minutesAgo: 2408, content: "paket simbol hati wkwk itu mah penerima lagi baper om, tapi kue buat ibunya tuh manis banget 😭" },
      { authorId: 9, minutesAgo: 2399, content: "hujan 2 jam 58 paket itu keras bang. kemasan lembek 4 dari 58 itu udah rapi" },
      { authorId: 189, minutesAgo: 2390, content: "'hati2 kue hati2 hati' itu doa paket terbaik bang. semoga kuenya utuh, ibunya senyum 🙏" },
    ],
  },
  {
    id: 82,
    authorId: 19,
    minutesAgo: 2455,
    shares: 21,
    content:
      "bos tadi malam yang aplikasi 'modal kecil cair besar' balik. gue kira mau daftar.\nternyata cuma beli pulsa 15 rebu. dia bilang, 'kemarin aku mikir terus om, mending pulsa, kebutuhannya jelas.'\n\nkubilang bagus bos. pulsa 15 rebu dapet 15 rebu. yang lain gak ada yang begini.",
    comments: [
      { authorId: 49, minutesAgo: 2446, content: "bos yang mikir ulang itu selamat om. banyak yang gak mikir ulang, sekarang motornya kejual" },
      { authorId: 23, minutesAgo: 2438, content: "pulsa 15 rebu dapet 15 rebu. itu satu2nya transaksi di dunia yang tidak punya pihak ketiga tersembunyi" },
      { authorId: 283, minutesAgo: 2429, content: "Kebutuhan yang jelas itu lebih aman daripada janji yang besar. Semoga bapak itu tetap waras memilih." },
      { authorId: 236, minutesAgo: 2420, content: "om, kasih tau dia ya kalau mau tambah nambah, tinggal kerja lebih, bukan modal lebih. yang nambah cuma capek, tapi aman wkwk" },
    ],
  },
  {
    id: 83,
    authorId: 8,
    minutesAgo: 2485,
    shares: 5,
    content:
      "jaga pagi tadi: pasien 18.\nyang paling lama: bapak yang bertanya jam berapa bisa pulang. jawab: besok kalau tanda vitalnya stabil. dia bilang, 'besok juga ya.'\nkubilang iya. dia tidur.\n\nkadang jawaban 'besok' itu obat paling murah.",
    comments: [
      { authorId: 12, minutesAgo: 2476, content: "bapak yang bilang 'besok juga ya' itu udah yakin dia pulang ya om. itu mindset paling menyembuhkan" },
    ],
  },
  {
    id: 84,
    authorId: 31,
    minutesAgo: 2515,
    shares: 5,
    content:
      "tanggal tua sesuai prediksi: struk 104.\npelanggan beli mie 8 bungkus, telur 10, minyak 1. kembalian dihitung dua kali, diserahkan.\ndia bilang, 'makasih ya dik, tanggal tua.'\nkubilang sama2. tanggal tua itu bulan semua orang berhitung. kasirnya harus paling jeli.",
    comments: [
      { authorId: 14, minutesAgo: 2506, content: "mie 8 telur 10 itu stok tanggal tua standar ya dik, di halte juga begitu, yang beli roti 2 bungkus" },
      { authorId: 5, minutesAgo: 2498, content: "kembalian dihitung dua kali itu yang bikin pelanggan tenang dik. kasir yang jeli itu langka" },
      { authorId: 192, minutesAgo: 2489, content: "104 struk tanggal tua itu ramai dik. kaki semutnya tambah ya wkwk semangat" },
      { authorId: 141, minutesAgo: 2480, content: "telur 10 biji tuh stok mimpi bre, tanggal tua mah biasanya telur 5 doang 😭" },
      { authorId: 205, minutesAgo: 2474, content: "mie 8 telur 10 minyak 1, itu belanja 3 hari ya dik, tanggal tua emang matang itungannya" },
      { authorId: 233, minutesAgo: 2471, content: "kasir yang ngecek kembalian dua kali itu bikin pelanggan tenang dik. tanggal tua hati gampang panik" },
      { authorId: 155, minutesAgo: 2468, content: "100 ribu buat mie telur minyak tanggal tua tuh pas banget, gue kemarin beli yang sama 😭" },
    ],
  },
  {
    id: 85,
    authorId: 47,
    minutesAgo: 2545,
    shares: 5,
    content:
      "nasabah tadi ibu2 mau setor uang koin hasil jualan kue: 4 tas plastik. kuhitung 42 menit. total 318 ribu.\n\nkubuatkan 100 ribu tabungan atas nama anaknya, sisanya tunai.\nkoinnya semua panas, abis dipegang lama. uang kue itu berat ya. bukan beratnya, tapi ceritanya.",
    comments: [
      { authorId: 16, minutesAgo: 2536, content: "42 menit menghitung koin itu pekerjaan yang sabar non. di leasing pun ada yang setor receh, yang penting niatnya" },
      { authorId: 278, minutesAgo: 2528, content: "318 ribu dari kue itu bukan uang kecil. Itu ratusan kue yang dipanggang satu per satu." },
      { authorId: 31, minutesAgo: 2519, content: "tabungan atas nama anaknya itu manis non. koin panas jadi tabungan yang adem wkwk" },
      { authorId: 287, minutesAgo: 2510, content: "Uang kue yang berat karena ceritanya. Kalimat ini layak dipajang di loket." },
    ],
  },
  {
    id: 86,
    authorId: 25,
    minutesAgo: 2575,
    shares: 30,
    content:
      "dana paku lagi kepake juga. tanggal 8, motor teman kos kena paku. gue gak punya ban, tapi gue punya pos 'dana paku lagi': 140 rebu dari bulan lalu yang gak kepake.\n\ndipinjemin 60. pos itu ternyata bukan buat gue doang.\nbesok kuisi lagi 60, biar posnya sehat. pos sehat, orang tenang.",
    comments: [
      { authorId: 2, minutesAgo: 2566, content: "POS YANG JUJUR ITU PERNALAGAAN ANGKOTA. GUE PUNYA DANA KUNCI ILANG, MUNGKIN PERLU DAFTAR POS BARU: DANA TETANGGA PAKU WKWK" },
      { authorId: 223, minutesAgo: 2558, content: "motor temen kos kena paku tanggal 8 itu miring bre, tanggal tua semua orang diuji 😭 untung ada posnya" },
      { authorId: 21, minutesAgo: 2549, content: "pos yang bisa dipinjem ke temen itu pos yang lebih dari sekadar catatan. semoga posnya sehat terus" },
      { authorId: 137, minutesAgo: 2540, content: "60 rebu balikin 60 rebu. akuntansi kos itu simpel bre asal jujur wkwk" },
      { authorId: 226, minutesAgo: 2531, content: "'pos sehat orang tenang' quote tanggal tua wkwk, gue bikin pos 'dana mie dadakan' deh" },
    ],
  },
  {
    id: 87,
    authorId: 37,
    minutesAgo: 2605,
    shares: 7,
    content:
      "Pot bunga di rumah sebelah sekarang sembilan. Halaman yang disemen minggu lalu malah ditutup karpet rumput sintetis.\n\nYang kemarin merapikan, sekarang menenangkan. Saya hanya melihat dari jendela, sambil minum teh.\nTidak ada yang bertanya, tidak ada yang menjawab. Tetangga yang baik itu begitu.",
    comments: [
      { authorId: 45, minutesAgo: 2596, content: "Sembilan pot dan satu karpet. Rumah yang berubah pelan2 itu rumah yang berencana tinggal lama. Pengamatan Anda jujur." },
      { authorId: 293, minutesAgo: 2588, content: "Minum teh dari jendela sambil memperhatikan dengan baik itu hobi yang tidak merugikan siapa pun. Saya juga begitu 😄" },
      { authorId: 299, minutesAgo: 2579, content: "Karpet sintetis di atas semen itu kombinasi yang menarik. Setengah alam, setengah tertata. Rumah seperti itu mudah dibersihkan." },
      { authorId: 22, minutesAgo: 2570, content: "tetangga yang diam2 menghormati itu berkah ya 🙏 semoga potnya makin banyak" },
    ],
  },
  {
    id: 88,
    authorId: 10,
    minutesAgo: 2635,
    shares: 26,
    content:
      "HASIL ULANGAN KUADRAT KELUAR. 71. GUE YANG KEMARIN PANIK SAMPE SAKIT PERUT ITU.\nGAK NYANGKA WKWKWK.\nTEMEN GUE YANG JUALAN RAKUSAN KANTIN ITU DAPET 70. GUE MENANG 1 POIN.\nRAKUSANNYA KUBAYAR SEHARI DOANG, GAK JADI DUA HARI. SISTEM GUE GILA TAPI JALAN",
    comments: [
      { authorId: 13, minutesAgo: 2626, content: "71 bre alhamdulillah, rakusan sehari doang murah bgt buat nilai 71 wkwk" },
      { authorId: 28, minutesAgo: 2618, content: "gue yang ngajarin rumus abc itu kan, bagian gue mana WKWKWK. tapi congrats, 71 dari yang belum buka buku itu lompatan" },
      { authorId: 160, minutesAgo: 2609, content: "menang 1 poin dari orang jualan rakusan itu kehormatan kak 😭 gue aja kalah dari anak yang tidur di kelas" },
      { authorId: 38, minutesAgo: 2600, content: "kak 71 itu bagus gak ya? bunda bilang kalau di atas 70 itu bagus. aku harap kakak dapet es krim" },
      { authorId: 131, minutesAgo: 2591, content: "sistem gila tapi jalan itu mah di semua umur bre, bukan cuma sekolah wkwkwk" },
      { authorId: 149, minutesAgo: 2582, content: "panik sakit perut tapi tetep ngerjain itu udah menang mental sebelum menang nilai kak 😭 selamat" },
    ],
  },
  {
    id: 89,
    authorId: 42,
    minutesAgo: 2665,
    shares: 12,
    content:
      "angka di pintu kamar kos minggu ini: A 12, B 9, C 14.\nkamar C masih juara boros, tapi turun dari 19. anak C mulai sadar, kemarin dia nanya 'ibu, setrika itu boros gak?'.\n\nboros dik. tapi sekarang dia setrika mingguan, gak harian.\nangka bisa ngajarin orang lebih halus dari omelan.",
    comments: [
      { authorId: 21, minutesAgo: 2656, content: "turun dari 19 ke 14 itu bukan angka ib, itu anak yang mulai punya anggaran 😄" },
      { authorId: 7, minutesAgo: 2648, content: "'setrika itu boros gak' pertanyaan yang berani banget buat anak kos, biasanya kita setrika semalem sebelum ketemu dosen wkwk" },
      { authorId: 109, minutesAgo: 2639, content: "Ibu kos yang pasang angka tanpa marah itu ib kos yang diberkati. Anak C akan ingat ini sebagai pelajaran keuangan pertamanya." },
      { authorId: 214, minutesAgo: 2630, content: "kamar C tuh yang setrika bakat ya ib wkwk, mungkin dia kerja baju kerja tiap hari. semangat, 14 bisa turun lagi" },
      { authorId: 16, minutesAgo: 2621, content: "angka yang dipasang jelas itu bentuk komunikasi yang tertib ib. omelan bikin ngambek, angka bikin mikir." },
    ],
  },
  {
    id: 90,
    authorId: 27,
    minutesAgo: 2695,
    shares: 26,
    content:
      "keluar masuk hari ini: masuk 51, keluar 47. sisa 4, dua kemasan lembek.\nresi 8851 sampai 8863.\n\ntukang angkut istirahat 10 menit dua kali. kasih aja, dia angkat 26 dus.\ngudang itu matematika sederhana yang dilakukan tiap hari. yang bikin susah bukan angkanya, kemasannya yang lembek.",
    comments: [
      { authorId: 41, minutesAgo: 2686, content: "kemasan lembek tuh musuh bersama ya om, di kurir juga gitu. yang kasih dusnya keras tuh pemberi kerja paling baik" },
      { authorId: 196, minutesAgo: 2678, content: "26 dus sehari itu berat om. 10 menit dua kali itu kurang, kasih 15 menit aja biar dia gak pegal" },
      { authorId: 34, minutesAgo: 2669, content: "resi berurutan 8851-8863 itu mempermudah pos jaga juga om, gak ada resi bolong berarti gak ada yang lari" },
      { authorId: 277, minutesAgo: 2660, content: "Matematika sederhana yang dilakukan tiap hari itu disiplin. Susahnya bukan angka, tapi tetap melakukannya." },
    ],
  },
  {
    id: 91,
    authorId: 14,
    minutesAgo: 2725,
    shares: 7,
    content:
      "sore ini 41 keping. om yang stangnya miring bayar duluan kayak biasa.\nyang minta dikit dulu... hari ini dia bayar duluan juga.\n\nkejadian langka. gue catat di kepala: 2 hari langka dalam seminggu.\ndunia masih baik.",
    comments: [
      { authorId: 186, minutesAgo: 2716, content: "om yang biasa nunda tiba2 bayar duluan itu biasanya hari baiknya om. ada rezeki masuk wkwk" },
      { authorId: 205, minutesAgo: 2708, content: "41 keping sore, 34 keping pagi. total 75 keping sehari om. itu 37 ribu setengah. parkir juga punya matematika ya wkwk" },
      { authorId: 49, minutesAgo: 2699, content: "'dunia masih baik' om, kalimat yang bikin sore enak. besok ronde lagi" },
      { authorId: 285, minutesAgo: 2690, content: "Mencatat kebaikan kecil di kepala itu lebih murah dari buku. Selamat sore, mas." },
    ],
  },
  {
    id: 92,
    authorId: 29,
    minutesAgo: 2755,
    shares: 30,
    content:
      "motor om yang kemarin balik. rantainya udah ganti, ternyata yang bunyi sprocket.\nya om, satu pasang. rantai doang gak cukup.\nganti 2: sprocket depan belakang. sore dijalan coba, suara ilang.\nom senyum, gue senyum. bengkel itu tempat senyum yang mahal harganya kalau telat.",
    comments: [
      { authorId: 17, minutesAgo: 2746, content: "bener bro, ganti rantai doang tanpa cek sprocket itu ganti sepatu tanpa cek kaus kaki. dua2nya ngerusak" },
      { authorId: 183, minutesAgo: 2738, content: "'suara ilang' itu kemenangan bengkel bro. pelanggan yang dengernya ilang, telinganya juga senang" },
      { authorId: 49, minutesAgo: 2729, content: "pelanggan yang balik lagi itu tanda percaya ya bro. di cukuran juga begitu, yang balik itu yang cerita2nya paling panjang" },
      { authorId: 251, minutesAgo: 2720, content: "sprocket depan belakang ganti bareng itu standar bengkel yang bener bro, yang gak begitu biasanya cuma mau cepet dapat duit" },
    ],
  },
  {
    id: 93,
    authorId: 22,
    minutesAgo: 2785,
    shares: 19,
    content:
      "anakku kirim foto makan malam. nasi, telur, sayur. gak ada pesan.\n\ncukup foto itu. ibu tau artinya: aku makan baik, jangan khawatir.\nkubales 🙏 doang. kadang doa panjang, kadang doa satu tombol.",
    comments: [
      { authorId: 74, minutesAgo: 2776, content: "foto makanan dari anak yang jauh itu pesan paling lengkap ya bu. gak perlu kata2 🙏" },
      { authorId: 103, minutesAgo: 2768, content: "Nasi, telur, sayur. Itu makan anak yang baik. Ibu boleh tidur tenang malam ini." },
      { authorId: 1, minutesAgo: 2759, content: "'doa satu tombol' itu indah banget bu 😭 semoga anaknya sehat terus 🙏" },
      { authorId: 24, minutesAgo: 2750, content: "ANAK YANG KIRIM FOTO MAKAN ITU ANAK BAIK. CUCU AKU KIRIM FOTO MOTOR DOANG. TAPI MOTORNYA BERSIH. ALHAMDULILLAH" },
      { authorId: 81, minutesAgo: 2741, content: "semoga makanannya selalu teratur ya bu, anak2 yang jauh suka lupa sayur 🙏" },
    ],
  },
  {
    id: 94,
    authorId: 48,
    minutesAgo: 2815,
    shares: 21,
    content:
      "Hari ini buku yang kembali terlambat 6 hari: satu. Siapa: orang tua murid. Alasan: anaknya belum selesai.\n\nSaya tidak mendenda. Anak yang masih membaca itu bukan keterlambatan, itu kelanjutan. Saya catat tanggal kembali yang baru.\nPerpustakaan ini sabar karena bukunya juga sabar menunggu dibaca.",
    comments: [
      { authorId: 3, minutesAgo: 2806, content: "Tidak mendenda karena anak masih membaca, itu keputusan perpustakaan yang memahami pendidikan. Terima kasih, Pak." },
      { authorId: 45, minutesAgo: 2798, content: "Buku yang sabar menunggu dibaca. Kalimat itu cocok menjadi tulisan di pintu perpustakaan." },
      { authorId: 281, minutesAgo: 2789, content: "Enam hari satu buku. Kalau semua pembaca begitu, perpustakaan akan penuh cerita yang tertunda. Semoga anaknya selesai." },
      { authorId: 291, minutesAgo: 2780, content: "Buku yang ditunda bukan buku yang ditolak. Perpustakaan yang sabar itu rumah bagi pembaca yang pelan2." },
    ],
  },
  {
    id: 95,
    authorId: 35,
    minutesAgo: 2845,
    shares: 2,
    content:
      "hari ini gue mikir: kalo es teh itu warnanya coklat, kenapa namanya es teh.\n\nterus gue mikir lagi: yang gak mikir begini namanya normal.\ngue males normal.\nbesok gue mikir yang lain.",
    comments: [
      { authorId: 13, minutesAgo: 2836, content: "es teh coklat tuh karena tehnya diseduh bre, teh tawar mah bening. mikirnya jangan sambil haus wkwk" },
      { authorId: 148, minutesAgo: 2828, content: "gue males normal juga, kita sahabat deh wkwk" },
      { authorId: 133, minutesAgo: 2819, content: "besok mikir kalo es teh jeruk itu ada jeruknya gak ya, itu mikiran yang lebih serius bre" },
    ],
  },
  {
    id: 96,
    authorId: 43,
    minutesAgo: 2875,
    shares: 5,
    content:
      "mesin nomor 4 diremin, suaranya normal lagi. hari ini capaian 95 persen.\n\n5 persen sisanya itu suara mesin yang masih ragu. besok dicoba lagi.\nkaki semut lagi, tapi semutan kali ini dateng dari pekerjaan yang selesai.",
    comments: [
      { authorId: 246, minutesAgo: 2866, content: "mesin yang ragu itu mesin yang minta diperhatikan om. besok kalau masih ragu, lapor lagi, jangan nekat" },
    ],
  },
  {
    id: 97,
    authorId: 18,
    minutesAgo: 2905,
    shares: 14,
    content:
      "durian hari ini habis jam 3 sore. dua karung.\nyang jual 18 kemarin, hari ini 21, masih laku.\nom-om yang minggu lalu nunggu turun lagi, minggu ini beli yang 21.\n\nharga tuh gak bohong. cuma kadang telat nyampe ke orang yang nunggu.",
    comments: [
      { authorId: 178, minutesAgo: 2896, content: "naik 3 rebu masih laku itu tandanya musim masih jalan om. minggu depan mungkin 23, minggu depannya 17" },
      { authorId: 32, minutesAgo: 2888, content: "om, pembeli yang nunggu turun terus itu biasanya yang akhirnya beli lebih mahal wkwk. di sayur juga gitu" },
      { authorId: 199, minutesAgo: 2879, content: "'harga gak bohong cuma telat nyampe' itu bener om. saham, bensin, durian, semua gitu 😄" },
      { authorId: 15, minutesAgo: 2870, content: "teh, besok kalau masih 21 kasih tau ya, aku mau beli buat bapaknya, dia doyan durian 😄" },
      { authorId: 19, minutesAgo: 2864, content: "bos di kios juga gitu om, yang nunggu pulsa murah malah beli pas butuh. harga gak bohong" },
      { authorId: 186, minutesAgo: 2861, content: "21 masih laku berarti pembeli udah paham musim om. yang jual duluan yang senyum" },
      { authorId: 1, minutesAgo: 2858, content: "om durian, besok sisain yang manis ya, anakku doyan banget 😄" },
    ],
  },
  {
    id: 98,
    authorId: 40,
    minutesAgo: 2935,
    shares: 21,
    content:
      "Sambal tomat buatan kemarin habis. Tetangga minta resep. Sebenarnya bukan resep. Cuma tomat, cabai, garam, sabar.\n\nTomatnya dari kebun sendiri, 3 kilo. Yang dibeli cuma cabai, 8 ribu. Anakku bilang untungnya kecil. Tetangga yang makan bilang enak.\nAda untung yang gak dicatat di buku.",
    comments: [
      { authorId: 107, minutesAgo: 2926, content: "Bu, tomat kebun sendiri sama cabai beli itu mahal takaran ya. Yang jualan tomat bisa kalah 😄" },
      { authorId: 32, minutesAgo: 2918, content: "'untung yang gak dicatat di buku' itu paling tahan lama bu. semoga kebunnya makin deris 🙏" },
      { authorId: 18, minutesAgo: 2909, content: "om ikut setuju bu. cabai 8 ribu plus sabar, itu resep yang gak bisa ditiru pembeli" },
      { authorId: 110, minutesAgo: 2900, content: "Tetangga yang minta resep itu tetangga yang beruntung. Semoga tomatnya terus berbuah ya bu 🙏" },
      { authorId: 97, minutesAgo: 2891, content: "sambal tomat kebun sendiri tuh beda bu, rasanya ada tanahnya dikit, enak 😄" },
    ],
  },
  {
    id: 99,
    authorId: 32,
    minutesAgo: 2965,
    shares: 12,
    content:
      "bu pelanggan langganan yang kemarin bawa pisang, hari ini bawa getuk. gak kuminta, dia bawa.\nkangkungnya kukasih 3 ikat, bayarnya 2.\n\npulangnya kantongku ada getuk, hatinya rapi. jualan sayur itu gak rugi. cuma untungnya gak semua masuk kantong.",
    comments: [
      { authorId: 15, minutesAgo: 2956, content: "kangkung 3 ikat bayar 2 itu teh, itu bukan rugi, itu menabung di hati tetangga 😄" },
      { authorId: 86, minutesAgo: 2948, content: "teh, aku juga suka bawa2 ke tukang sayur. sayurnya segar, hati ikut seneng, jadi bawa deh 😄" },
      { authorId: 101, minutesAgo: 2939, content: "Getuk dan pisang bergantian ya teh. Tetangga seperti itu rezekinya lancar 🙏" },
      { authorId: 18, minutesAgo: 2930, content: "jualan sayur itu untungnya ada dua teh: yang masuk kantong sama yang masuk hati. yang kedua lebih awet" },
      { authorId: 95, minutesAgo: 2921, content: "Kangkung 3 ikat bayar 2. Getuk satu piring pulang. Itu perhitungan yang benar, teh." },
    ],
  },
  {
    id: 100,
    authorId: 4,
    minutesAgo: 2995,
    shares: 3,
    content:
      "Rapat hari ini 47 menit, hasil satu keputusan. Kemarin 92 menit, hasil nol.\n\nEfisiensi bukan soal durasi, tapi soal keputusan. Besok rapat lagi. Saya siapkan teh dua gelas. Untuk diri sendiri, dan untuk kesabaran.",
    comments: [
      { authorId: 45, minutesAgo: 2986, content: "47 menit satu keputusan itu rapat yang produktif. Rapat 92 menit tanpa hasil itu rapat berenang. Saya dulu sering terjebak." },
      { authorId: 190, minutesAgo: 2978, content: "teh dua gelas untuk kesabaran itu strategi kantor yang lama om wkwk. yang penting keputusannya ada" },
      { authorId: 27, minutesAgo: 2969, content: "rapat 47 menit 1 keputusan vs 92 menit 0. matematikanya jelas om. besokannya mungkin 30 menit 2 keputusan" },
      { authorId: 285, minutesAgo: 2960, content: "Kesabaran yang diseduh dua kali sehari itu kesabaran yang terjaga. Selamat bekerja, Bapak." },
    ],
  },
]
