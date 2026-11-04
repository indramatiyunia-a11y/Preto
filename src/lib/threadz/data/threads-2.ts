import type { ThreadzThread } from "../types"

// PART 2: cuitan 26-50. Lanjutan sidik jari:
//  26 : driver angkot, "nah/bro", hitung penumpang, ayam ikut nyetir
//  27 : gudang, resi & dus, sistematis, dua paragraf pendek
//  28 : SMA pinter yang meledak, wkwkwk, ulangan, satu blok panjang
//  29 : SMK bengkel, "om", rantai-sprocket, kalimat terpotong
//  30 : guru les privat, "si anak", tarif per jam, tenang
//  31 : kasir kios, struk & kembalian, kalimat pendek turun baris
//  32 : tukang sayur keliling, "teh/bu", ikat-kilo, hangat
//  33 : ibu dapur besar, takaran gelas, "abang", cerita masak
//  34 : satpam, ronde-jam-logbook, kering, tanpa emoji
//  35 : SMP dreamy, lowercase, mikir aneh, pendek banget
//  36 : co-as kedokteran, "km/banget", panik ujian, hitung halaman
//  37 : pengamat tetangga, kalimat lengkap, tenang, observasi
//  38 : anak kelas 5, "bunda", jajan & celengan, typo imut
//  39 : matematikawan santai, "kurang lebih", pecah angka, sopan
//  40 : nenek kebun, huruf campur, tomat-sambal, kagum bukan pamer
//  41 : kurir paket, fragmen, alamat aneh, hujan
//  42 : ibu kos, angka listrik per kamar, tegas tapi sayang
//  43 : pekerja pabrik, shift-lembur-mesin, capek, pendek
//  44 : anak kos gagal masak, lowercase wkwk, nasi goreng rasa asap
//  45 : pensiunan, "saya", kalimat lengkap, pasar & catatan kecil
//  46 : ibu PNS sekolah, rapat-seragam, angka menit, 😅
//  47 : teller, nasabah & pecahan uang, sabar
//  48 : kakek perpustakaan, buku, kalimat utuh, hening
//  49 : tukang cukur, "bos", hitung kepala, cermin
//  50 : chef mie kos, "GUYS", eksperimen resep, laporan absurd
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 26,
    minutesAgo: 775,
    shares: 14,
    content:
      "penumpang pagi ini 14 orang. 3 bawa tas beras, 1 bawa kandang ayam.\nnah ayamnya bunyi tiap lampu merah. yang depan minta remnya halus, yang belakang buru2 turun. gue di tengah, nyetir aja.\n\nayam itu nyanyi terus sampe turun. gak tau dia nyanyi seneng apa kesel. bro.",
    comments: [
      { authorId: 9, minutesAgo: 767, content: "ayam kandang tuh paling ribet bang wkwk" },
      { authorId: 244, minutesAgo: 758, content: "ayamku dulu juga nyanyi tiap lampu merah wkwk" },
      { authorId: 20, minutesAgo: 750, content: "rem halus wajib bro, tas beras gampang roboh" },
      { authorId: 121, minutesAgo: 742, content: "nyanyi seneng apa kesel wkwk pertanyaan buat ayamnya" },
    ],
  },
  {
    id: 27,
    authorId: 27,
    minutesAgo: 805,
    shares: 26,
    content:
      "masuk 42 dus hari ini, keluar 38. sisa 4. yang kemasannya rusak 2, dicatat terpisah.\n\ntukang angkut minta istirahat 10 menit. kasih aja, dia angkat 20 dus sendirian dari pagi. resi 8841 sampai 8850, semua kelar jam 3.",
    comments: [
      { authorId: 41, minutesAgo: 797, content: "20 dus sendirian om berat itu" },
      { authorId: 196, minutesAgo: 789, content: "yang rusak dicatat terpisah itu penting om" },
      { authorId: 34, minutesAgo: 780, content: "resi rapi itu bikin tenang. catatan beres, kerja beres" },
    ],
  },
  {
    id: 28,
    authorId: 28,
    minutesAgo: 835,
    shares: 26,
    content:
      "ulangan mtk tadi. temen sebangku gue jawab pake 3 cara di kertas, gue jawab satu alur doang. pas dikoreksi nilai kita SAMA. 82. wkwkwk. bu guru bilang yang penting alurnya jelas. TAPI KENAPA YANG TIGA ALUR SAMA YANG SATU ALUR WKWK. terus temenku bilang 'kan hasilnya sama'. hmm iya sih. TAPI GUE MAU NILAI LEBIH DONG WKWK",
    comments: [
      { authorId: 156, minutesAgo: 828, content: "82 WKWK GUE BELUM NYAMPE SITU. HORMAT" },
      { authorId: 160, minutesAgo: 820, content: "dari 65 ke 82 itu lompatan kak 😭" },
      { authorId: 133, minutesAgo: 812, content: "temen lu jahat bgt wkwkwk" },
      { authorId: 145, minutesAgo: 805, content: "alur gue aja gk ketemu dari kemarin wkwk" },
      { authorId: 35, minutesAgo: 798, content: "nilai sama tapi capeknya beda ya" },
      { authorId: 25, minutesAgo: 791, content: "asal naik dari kemarin udah syukur bre, di magang juga gitu" },
    ],
  },
  {
    id: 29,
    authorId: 29,
    minutesAgo: 865,
    shares: 30,
    content:
      "motor pelanggan hari ini: rantai kendor, rantai kendor, rantai kendor. 3 motor masalahnya sama.\nom-om bilang 'biasa om, dirantainya ketahan lama'. ya om, rantai itu bagian yang gerak terus, masa gak kendor.\nganti 2, kencengin 1. sore dijalan coba semua aman. besok om yang kemarin balik lagi kayaknya. suaranya udah gue hafal.",
    comments: [
      { authorId: 183, minutesAgo: 857, content: "'ketahan lama' wkwkwk yakin banget om2 ini" },
      { authorId: 49, minutesAgo: 850, content: "suaranya udah hafal wkwk, di cukuran juga gitu" },
      { authorId: 251, minutesAgo: 841, content: "bengkel yang kencengin doang kalau masih bisa itu langka bang, bagus" },
    ],
  },
  {
    id: 30,
    authorId: 30,
    minutesAgo: 895,
    shares: 7,
    content:
      "si anak yang les rabu jam 4 hari ini dateng jam 4.40, bawa wajah males. aku gak maksa, kita mulai dari soal yang dia suka: soal uang.\nternyata dia bisa itung kembalian 12 ribu dari 50 di kepala. cepet. aku tulis di catatan kemajuan: 'bisa itung uang, perlu soal kontekstual'.\ntarif per jam, tapi hari ini aku tambah 15 menit gratis. karena dia akhirnya senyum pas matematika.",
    comments: [
      { authorId: 46, minutesAgo: 887, content: "itu yang diinget anaknya sampe gede kak 😊" },
      { authorId: 84, minutesAgo: 878, content: "anakku juga gitu, jago kalo soalnya duit jajan 😄" },
      { authorId: 267, minutesAgo: 869, content: "Matematika yang dekat dengan hidup anak itu yang paling nempel. Lanjutkan." },
    ],
  },
  {
    id: 31,
    authorId: 31,
    minutesAgo: 925,
    shares: 5,
    content:
      "pelanggan bayar 17.500 pake 20 ribu.\nkembalian 2.500: satu 2000, satu 500.\ndia bilang 'satu 2000 doang gak apa'. aku tetep kasih 500 nya. dia senyum.\n\nstruk nomor 0093. hari ini 91 lembar, rata2 12 ribu. kaki semutan dari jam 2. besok tanggal tua, biasanya rame.",
    comments: [
      { authorId: 14, minutesAgo: 917, content: "om yang 'gak apa' gitu biasanya paling inget budi" },
      { authorId: 5, minutesAgo: 909, content: "yang ditolak recehnya jarang balik lagi dik. bener kasihnya" },
      { authorId: 192, minutesAgo: 899, content: "91 lembar sehari ramai ya dik wkwk" },
    ],
  },
  {
    id: 32,
    authorId: 32,
    minutesAgo: 955,
    shares: 12,
    content:
      "sayur hari ini: kangkung sisa 2 ikat, bayem habis, tomat tinggal 1 kilo. bu pelanggan langganan minta disisain daun bawang, kusisain.\n sore balik dia bawa pisang 2 sisir. gak kuminta, dia bawa sendiri.\n jualan sayur itu gak cuma sayur ya teh. besok kangkungnya kuborong dua kali biar bu itu gak kehabisan.",
    comments: [
      { authorId: 86, minutesAgo: 947, content: "aku pelanggan kayak bu itu teh 😄" },
      { authorId: 69, minutesAgo: 939, content: "yang balik bawa2 itu langka teh" },
      { authorId: 101, minutesAgo: 930, content: "Semoga jualannya lancar ya teh 🙏" },
    ],
  },
  {
    id: 33,
    authorId: 33,
    minutesAgo: 985,
    shares: 21,
    content:
      "masak nasi tadi, abang minta lebih padat. takaranku biasa 4 gelas beras 5 gelas air. kutambah beras setengah gelas, airnya gak kutambah.\n\njadinya kurang air dikit. kuberi air panas sendok teh satu2 sambil diaduk. pas abang makan dia bilang, 'ini enak, kok beda?'\nbapak2 kalau nasi enak selalu nanya kok beda. yang repot dapurnya 😄 besok coba takaran 4 gelas 4,5 gelas.",
    comments: [
      { authorId: 60, minutesAgo: 977, content: "gelas bekas di rak dapur tuh bukan gelas bu, itu alat ukur 😄" },
      { authorId: 65, minutesAgo: 969, content: "suamiku juga bu wkwk, nasi enak selalu nanya kok beda" },
      { authorId: 76, minutesAgo: 960, content: "semoga abang puas terus ya bu 🙏" },
      { authorId: 93, minutesAgo: 950, content: "kalo mau padat bu, 4 gelas 4 gelas" },
    ],
  },
  {
    id: 34,
    authorId: 34,
    minutesAgo: 1015,
    shares: 12,
    content:
      "ronde malam 12. tiap ronde 6 menit kalau jalan santai, total 72 menit cuma buat muter.\nsisa waktu duduk, catat, denger kucing. jam 2 ada mobil masuk, nomor dicatat, sopir ngangguk.\ndi logbook kutulis 'aman'. dua kata itu hasil kerja semalem. besok ronde lagi.",
    comments: [
      { authorId: 27, minutesAgo: 1007, content: "'aman' dua kata itu hasil paling susah om" },
      { authorId: 238, minutesAgo: 998, content: "kucing itu patroli gak digaji om wkwk" },
      { authorId: 199, minutesAgo: 989, content: "72 menit muter, sisanya duduk. seimbang om" },
    ],
  },
  {
    id: 35,
    authorId: 35,
    minutesAgo: 1045,
    shares: 2,
    content:
      "gue mikir: kalo semua orang jalan pelan2, lampu merah mah gak berguna ya.\n\ntadi gue mikir itu pas nunggu lampu hijau 90 detik. 90 detik itu bisa buat apa ya. belum ketemu jawabannya. besok lanjut mikir.",
    comments: [],
  },
  {
    id: 36,
    authorId: 36,
    minutesAgo: 1075,
    shares: 17,
    content:
      "kuis patologi minggu depan, 9 bab. km tau gak tiap bab rata2 30 halaman. total 270. kalau 40 halaman sehari itu hampir 7 hari, tapi itu hari tanpa tidur.\nmanusia butuh tidur. jadi dihitung 27 halaman doang: fix 10 hari. waktu tinggal 6.\nmatematikanya gak mau bergaul sama harapan km 🙃",
    comments: [
      { authorId: 7, minutesAgo: 1067, content: "jangan dibagi rata km, bab yang berat kasih 2 hari 🙃" },
      { authorId: 215, minutesAgo: 1059, content: "jangan sampai kuisnya sehat, manusianya sakit" },
      { authorId: 217, minutesAgo: 1050, content: "270 halaman 🙃 semangat km" },
      { authorId: 158, minutesAgo: 1041, content: "'matematikanya gak mau bergaul sama harapan' 😭 simpen quote" },
    ],
  },
  {
    id: 37,
    authorId: 37,
    minutesAgo: 1105,
    shares: 7,
    content:
      "Rumah sebelah kemarin menaruh pot bunga di pagar. Hari ini nambah tiga. Seminggu lalu halamannya masih disemen.\n\nOrang di rumah itu sedang merapikan sesuatu. Saya tidak bertanya, hanya tersenyum setiap bertemu. Rumah yang mulai tertata biasanya berarti penghuninya mulai tenang.",
    comments: [
      { authorId: 293, minutesAgo: 1097, content: "Senyum tanpa bertanya itu cara paling sopan." },
      { authorId: 77, minutesAgo: 1089, content: "semoga keluarga di sebelah selalu tenang ya 🙏" },
    ],
  },
  {
    id: 38,
    authorId: 38,
    minutesAgo: 1135,
    shares: 12,
    content:
      "pelajaran hari ini: pecahan. bunda beliin kue 1 potong. aku potong 2, kasih adik 1. bunda bilang itu namanya setengah.\nternyata pecahan itu enak ya, soalnya ada kuenya. besok mau beli lagi buat belajar perempat.",
    comments: [
      { authorId: 69, minutesAgo: 1127, content: "adiknya untung kak, dapet kue sekaligus pelajaran 😄" },
      { authorId: 24, minutesAgo: 1119, content: "ANAK PINTAR. POTONG 2 KASIH 1 KE ADEK. NENEK DOAIN KUENYA ENAK" },
      { authorId: 92, minutesAgo: 1110, content: "belajar perempat potongnya 4 ya nak, yang kebagian makin banyak 🙏" },
      { authorId: 28, minutesAgo: 1101, content: "wkwkwk matematika paling berguna sedunia. kue perempat menunggu" },
    ],
  },
  {
    id: 39,
    authorId: 39,
    minutesAgo: 1165,
    shares: 15,
    content:
      "Orang sering tanya, kok bisa itung cepet. Jawabannya gak ada rahasia: jangan takut angka jelek.\n\n47 kali 6 itu susah. Tapi 50 kali 6 gampang: 300. Terus 300 dikurang 3 kali 6, 18. Jadi 282. Kurang lebih 282. Persis.",
    comments: [
      { authorId: 221, minutesAgo: 1157, content: "gue pake ini buat itung ongkos bulanan wkwk" },
      { authorId: 17, minutesAgo: 1149, content: "distribusi ya bro, di kampus dipake terus" },
      { authorId: 214, minutesAgo: 1140, content: "besok ini jadi soal pembuka di les ya, makasih" },
    ],
  },
  {
    id: 40,
    authorId: 40,
    minutesAgo: 1195,
    shares: 21,
    content:
      "Tomat di kebun tahun ini banyak, ya. Kemarin dipetik 4 kilo, hari ini 3 kilo lagi. Dibagi tetangga 2 kilo, sisanya dibikin sambal.\nAnakku bilang jangan tanam banyak-banyak, capek. Tapi lihat tomat merah gitu aja nggak bikin capek. Bikin kagum.",
    comments: [
      { authorId: 107, minutesAgo: 1187, content: "Tomat kebun sendiri rasanya lain ya bu" },
      { authorId: 32, minutesAgo: 1179, content: "dibagi tetangga 2 kilo itu besar bu" },
      { authorId: 97, minutesAgo: 1170, content: "kagum bukan capek. tomatnya makin deris ya bu 🙏" },
    ],
  },
  {
    id: 41,
    authorId: 41,
    minutesAgo: 1225,
    shares: 26,
    content:
      "paket hari ini 63. alamat lengkap 55. harus ditelepon dulu 8.\n\nsatu paket nama penerimanya cuma tulis 'bang ojol biasa anter sini'. yang penting sampai kata paketnya. ketemu, bener orangnya, tinggal di gang.",
    comments: [
      { authorId: 191, minutesAgo: 1217, content: "'bang ojol biasa anter sini' wkwk" },
      { authorId: 235, minutesAgo: 1209, content: "63 paket ramai bang, gue 40 aja kaki gerah" },
      { authorId: 188, minutesAgo: 1200, content: "alamat lengkap 55 dari 63 udah bagus bang" },
    ],
  },
  {
    id: 42,
    authorId: 42,
    minutesAgo: 1255,
    shares: 12,
    content:
      "listrik anak kos naik 3 kamar kemarin. kupanggil satu2: kamar A setrika tiap malam, kamar B kulkas mini, kamar C... dia punya pemanas air sendiri.\n\nkubilang dik, air hangat ada di kamar mandi. dia bilang 'ibu, airnya gak terima'. akhirnya kupasang angka pemakaian di pintu per kamar. bukan marah.",
    comments: [
      { authorId: 21, minutesAgo: 1247, content: "lebih tenang liat angka daripada ditegur nggak jelas ib" },
      { authorId: 210, minutesAgo: 1239, content: "'airnya gak terima' wkwk bakat anak kos itu" },
      { authorId: 214, minutesAgo: 1230, content: "pemanas air di kamar tuh ngeri ib 😅" },
      { authorId: 109, minutesAgo: 1221, content: "Ibu kos yang tegas tapi adil itu dicari ib." },
      { authorId: 310, minutesAgo: 1213, content: "anak kamar C itu mungkin nyuci tiap hari ib wkwk" },
    ],
  },
  {
    id: 43,
    authorId: 43,
    minutesAgo: 1285,
    shares: 5,
    content:
      "shift 2 hari ini. masuk jam 2 siang, keluar jam 10 malem. lembur 2 jam, tambahan 32 ribu.\n\nmesin nomor 4 suaranya beda. kulapor jam 5, kudiamin sampai jam 6, sambil kerja pelan dengerin mesin. target hari ini gak tercapai, kecuali satu: mesinnya gak meledak.",
    comments: [
      { authorId: 246, minutesAgo: 1277, content: "mesin yang suaranya beda tuh minta dilirik om" },
      { authorId: 192, minutesAgo: 1269, content: "mesinnya selamat itu yang paling mahal om" },
    ],
  },
  {
    id: 44,
    authorId: 44,
    minutesAgo: 1315,
    shares: 30,
    content:
      "masak nasi goreng pertama kali di kos. hasil: nasi goreng rasa asap. asapnya bukan dari kompor, dari kejadian.\n\ngue salah tuang minyak, kena api sebentar. tetangga kamar nawarin nasi dari rumah makan, gue terima. dadar kemarin lupa garem, hari ini minyak yang salah. besok coba lagi, doain minyaknya nurut wkwk",
    comments: [
      { authorId: 50, minutesAgo: 1307, content: "gue lebih parah: mie kuah tak dikenal 😭" },
      { authorId: 139, minutesAgo: 1300, content: "KENA API SEBENTAR ITU BIASA. YANG PENTING DAPAR GAK PECAH WKWKWK" },
      { authorId: 128, minutesAgo: 1292, content: "tuang minyaknya pas kompor udah nyala bre" },
      { authorId: 229, minutesAgo: 1284, content: "tetangga kamar yang nawarin makan itu wajib dijaga bre" },
      { authorId: 146, minutesAgo: 1276, content: "gue kemarin masak mie airnya kebuang smua wkwk" },
      { authorId: 10, minutesAgo: 1268, content: "ASAP BUKAN GAGAL BRE. ITU PEMBAKARAN WKWK" },
    ],
  },
  {
    id: 45,
    authorId: 45,
    minutesAgo: 1345,
    shares: 7,
    content:
      "Pagi ini saya kembali ke kantor lama mengurus surat pensiun. Ruangannya sama, kursinya beda. Ada yang menyapa, ada yang tidak, tidak apa-apa.\n\nDi jalan pulang mampir pasar, membeli pepaya satu buah, 9 ribu. Dulu yang membeli pepaya adalah istri saya. Sekarang saya, dengan catatan kecil di dompet: pepaya, 9 ribu, untuk kesehatan.",
    comments: [
      { authorId: 96, minutesAgo: 1337, content: "Semoga sehat selalu, Bapak 🙏" },
      { authorId: 11, minutesAgo: 1329, content: "catatan 'untuk kesehatan' itu lebih berharga dari struk" },
      { authorId: 274, minutesAgo: 1320, content: "Pensiunan yang tetap tertib itu contoh, Bapak." },
    ],
  },
  {
    id: 46,
    authorId: 46,
    minutesAgo: 1375,
    shares: 12,
    content:
      "rapat komite sore tadi 2 jam 40 menit. agenda utama: seragam. hasil: seragam tetap, ditambah satu pasang olahraga per anak dari dana komite, pengukuran Sabtu pagi.\n\nyang paling lama debat: warna celana. 40 menit 😅 anak2 gak tau seragam mereka dibahas 40 menit. besok kutulis undangan pengukuran, 26 kelas, satu2.",
    comments: [
      { authorId: 61, minutesAgo: 1367, content: "satu pasang olahraga per anak itu enak kak 🙏" },
      { authorId: 73, minutesAgo: 1358, content: "kak, anaknya bawa sepatu olahraga juga gak?" },
      { authorId: 89, minutesAgo: 1349, content: "26 kelas satu2 itu capek ya kak" },
    ],
  },
  {
    id: 47,
    authorId: 47,
    minutesAgo: 1405,
    shares: 5,
    content:
      "nasabah terakhir hari ini jam 3.50. mau tarik 400 ribu buat bayar kontrakan, minta pecahan: 8 lembar 50.\nduitnya ada, tapi lembar 50 tinggal 6. kuberi 6 lembar 50 plus 1 lembar 100. dia bilang gak apa.\nkadang orang gak butuh uang. cuma butuh pecahan yang pas buat dibagikan.",
    comments: [
      { authorId: 16, minutesAgo: 1397, content: "yang minta pecahan pas itu biasanya buat dibagikan ya non. kasusnya bervariasi" },
    ],
  },
  {
    id: 48,
    authorId: 48,
    minutesAgo: 1435,
    shares: 21,
    content:
      "Perpustakaan hari ini dipinjam 11 buku. Yang paling banyak dibaca di tempat: buku resep. Yang paling lama di tangan: atlas.\n\nSeorang anak duduk di rak sejarah, membaca sambil berdiri, karena kursinya penuh. Saya tidak menyuruhnya pindah. Kursi akan datang dan pergi. Yang dibaca hari ini akan tinggal lebih lama.",
    comments: [
      { authorId: 281, minutesAgo: 1427, content: "Rumah orang tidak punya dandang sebesar rak perpustakaan, Pak." },
      { authorId: 45, minutesAgo: 1418, content: "Dulu saya juga lebih suka atlas, Pak." },
    ],
  },
  {
    id: 49,
    authorId: 49,
    minutesAgo: 1465,
    shares: 5,
    content:
      "kepala tadi 12. rapi 9, cerewet 3.\nyang cerewet minta 'tipis dikit' 4 kali, terus bilang 'kok jadi pendek'. gimana sih bos.\ncermin kutunjukin, dia senyum, 'iya ya'.\npelanggan tuh kadang gak tau maunya. kita yang harus tau duluan.",
    comments: [
      { authorId: 194, minutesAgo: 1457, content: "'tipis dikit' 4 kali mah botak namanya om wkwkwk" },
      { authorId: 19, minutesAgo: 1449, content: "di kios juga gitu bos wkwk" },
      { authorId: 232, minutesAgo: 1440, content: "cermin itu alat bukti paling jujur om wkwk" },
    ],
  },
  {
    id: 50,
    authorId: 50,
    minutesAgo: 1495,
    shares: 26,
    content:
      "GUYS eksperimen mie malam ini: mie, telur, sisa ayam kemarin, kecap. rencananya seimbang.\nkenyataannya: mie gak mateng semua, tengahnya kerass. kutambah air, jadilah mie kuah ayam kecap tak dikenal.\ntemen kamar makan 2 porsi. resep tak dikenal itu LAKU. besok gue ulang, kali ini mateng dulu baru diaduk. catat.",
    comments: [
      { authorId: 44, minutesAgo: 1487, content: "gue dadar aja lupa garem wkwk" },
      { authorId: 140, minutesAgo: 1480, content: "NAMA RESERNYA WKWKWK. TEMEN KAMAR LU PENASARAN JURAGAN" },
      { authorId: 126, minutesAgo: 1472, content: "kemarin aku kebalik, hasilnya kerass semua bre 😭" },
      { authorId: 150, minutesAgo: 1464, content: "penilaian paling jujur emang temen kamar bre" },
      { authorId: 147, minutesAgo: 1455, content: "besok kabarin kalah menang nya bre wkwk" },
    ],
  },
]
