import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25 (paling baru di feed).
//
// Tiap akun punya dunia sendiri + cara ngetik sendiri. Beberapa contoh di
// part ini:
//  1 : ibu muda, anak baru SD, ejaan rapi, ending gak di-poles
//  2 : anak kos, SEMUA HURUF BESAR, satu blok, typo
//  3 : ibu guru kelas 4, kalimat baku tapi nyata, gak pernah nasehat
//  5 : anak warung, angka buku tulis
//  13: yakin banget sama hitungan salahnya sendiri
//  20: om motor, hitungan BBM yang salah tapi pede
// dst. Jangan diseragamin lagi — kalau dua cuitan kerasa "satu tangan",
// itu gagal.
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 1,
    minutesAgo: 25,
    shares: 12,
    content:
      "anak aku yang pertama beli sepatu sekolah baru sore tadi, papanya yang nganter. ukuran 33. barusan aku liat dia tidur pake sepatunya masih. kaus kaki juga. aku gak tega ngerampas, takut dia kebangun.\n\nbesok pagi aku cuci diam-diam deh.",
    comments: [
      { authorId: 46, minutesAgo: 22, content: "papanya juga ya, terus pura-pura gak liat wkwk" },
      { authorId: 48, minutesAgo: 19, content: "Catat ukurannya tiap semester. Naiknya cepat sekali." },
      { authorId: 22, minutesAgo: 15, content: "semoga lancar sekolahnya, sayang 🙏" },
      { authorId: 9, minutesAgo: 9, content: "anak tetangga ku juga gitu dulu, gak mau dilepas ampe disuruh mandi pake sepatu" },
    ],
  },
  {
    id: 2,
    authorId: 2,
    minutesAgo: 55,
    shares: 30,
    content:
      "HP GUE ILANG DARI MEJA. GUE CARI 40 MENIT. ANGKAT KASUR, GESER LEMARI, BUKA KANTONG RANSEL SEMUA. TAU GUE NEMU DIMANA? DI MEJA. TEPAT SEBELAH GELAS GUE. TERUS GUE DENGAR NOTIF DARI ARAH MEJA. DARI TADI. DARI MEJAAAA. GUE MAU NGAMUK KESIAPA?!",
    comments: [
      { authorId: 10, minutesAgo: 51, content: "BJIR NYARI HP PAKAI HP SEBELAH WKWKWK" },
      { authorId: 38, minutesAgo: 47, content: "HAAHAHA GUE PERNAH NYARI KACAMATA SEMENTARA DIPAKE DI KEPALA" },
      { authorId: 44, minutesAgo: 40, content: "YAUDAH yang penting ketemu. gue nyari kunci motor semalem sampe tetangga ikutan" },
      { authorId: 31, minutesAgo: 33, content: "ampun wkwk" },
      { authorId: 6, minutesAgo: 25, content: "klo bisa notif berarti ada chat ya masuk? dari siapa" },
      { authorId: 49, minutesAgo: 17, content: "gue abis jaga juga baru nemu charger gue ketindih kasur pasien, wkwk" },
    ],
  },
  {
    id: 3,
    authorId: 3,
    minutesAgo: 85,
    shares: 21,
    content:
      "Semalam jam setengah satu saya masih bangun, memotong kue di meja dapur. Ternyata sedang menyusun soal cerita ulangan: kue dibagi dua pertiga dan sepertiga. Saya perlu memastikan potongannya masuk akal.\n\nBesok kalau ada anak yang menjawab berbeda dari kunci, saya dengarkan dulu alasannya. Sering kali mereka benar dan kuncinya yang kurang tepat.",
    comments: [
      { authorId: 48, minutesAgo: 79, content: "Yang menulis soal sampai mencoba potongannya sendiri itu jarang. Anak-anak beruntung." },
      { authorId: 18, minutesAgo: 72, content: "dua pertiga itu porsi paling susah dipotong beneran ya, biasanya yang kebagian aku wkwk" },
      { authorId: 5, minutesAgo: 63, content: "kue yang tadi dipotong masuk buku tulis aku juga, sebagai pengeluaran. hehe" },
      { authorId: 30, minutesAgo: 50, content: "adikku kelas 3 juga belajar begitu, tapi dia membagi kuenya ke mulut dia dulu" },
    ],
  },
  {
    id: 4,
    authorId: 6,
    minutesAgo: 115,
    shares: 3,
    content:
      "kok ya itunganku gk pernah bulat. tadi beli bensin 20 pas e-toll nya 18. ribu. terus di minimarket ambil roti 2 tanda terimanya 4.500. berarti 1 roti 2.250. knp gk bisa yang enak2 aja kayak 2 ribu pas. duit recehnya aja makin banyak di kantong, smpai macem2",
    comments: [
      { authorId: 5, minutesAgo: 108, content: "harga memang jarang bulat, makanya warung ku suka bantu bulatin ke bawah kalau pembelinya langganan" },
      { authorId: 42, minutesAgo: 96, content: "2.250 itu 2.000 plus 250. receh 500-an butuh setengah. lumayan buat latihan jari" },
    ],
  },
  {
    id: 5,
    authorId: 9,
    minutesAgo: 145,
    shares: 45,
    content:
      "sore ini got depan rumah mampet. yang turun: pak RT pake kaos dalam, empat bapak-bapak, dan anak-anak yang cuma pegang tongkat. yang paling banyak ngomong umurnya 70. yang paling gak ngomong paling rajin.\n\nakhirnya selesai magrib. pak RT bilang, 'besok kalau ujan lagi, jangan disalurin ke sini ya, pindah ke selokan belakang.' semua orang geleng. terus pada pulang masing-masing.",
    comments: [
      { authorId: 43, minutesAgo: 137, content: "pak RT yang begini jarang ya. biasanya yang ngomong doang" },
      { authorId: 37, minutesAgo: 126, content: "yang paling gak ngomong paling rajin. bener itu" },
      { authorId: 22, minutesAgo: 112, content: "semoga tetangga terus rukun 🙏" },
      { authorId: 12, minutesAgo: 97, content: "di kompleks gue kerja bakti doang pas ada orang mati. biasa selesai dalam 20 menit" },
      { authorId: 26, minutesAgo: 80, content: "got mampet + ujan = musuh abadi penumpang juga bang. tiap lewat gang ampe bilik jalan pelan" },
    ],
  },
  {
    id: 6,
    authorId: 33,
    minutesAgo: 175,
    shares: 21,
    content:
      "masak nasi tadi pindah panci, dari rice cooker ke dandang buat dikeplok buat abang. takaranku biasanya 4 gelas beras 5 gelas air. abang minta nasi lebih padat. aku tambah beras setengah gelas, airnya gak aku tambah.\n\njadinya kerasa kurang air dikit. aku kasih sendok teh air panas satu-satu sambil diaduk. pas abang makan dia bilang, 'ini enak, kok beda?'",
    comments: [
      { authorId: 5, minutesAgo: 166, content: "itungan gelas itu paling awet di kepala. di warung kami takaran pakai gelas bekas juga" },
      { authorId: 16, minutesAgo: 152, content: "bapak-bapak kalau nasi enak selalu nanya kok beda 😅 padahal kita yang repot" },
      { authorId: 22, minutesAgo: 138, content: "sembahyang masakanmu lancar selalu" },
    ],
  },
  {
    id: 7,
    authorId: 12,
    minutesAgo: 205,
    shares: 8,
    content:
      "pulang shift pagi, naik bus, tidur, kelewatan dua halte. jalan balik 40 menit. sepatu gue lecet. besok gue tidur berdiri aja kali ya biar gak kelewatan. capek. udah ah.",
    comments: [
      { authorId: 26, minutesAgo: 196, content: "bang kalau tidur jangan di halte terakhir, mending duduk deket pintu. gue yang tiap hari ngangkut" },
      { authorId: 31, minutesAgo: 183, content: "capek banget dah" },
      { authorId: 49, minutesAgo: 170, content: "satu jalur sama gue bang. gue tidur di kursi tunggu ruang jaga. ada yang bangunin malah kaget" },
    ],
  },
  {
    id: 8,
    authorId: 13,
    minutesAgo: 235,
    shares: 54,
    content:
      "GUYS DISKON 50% TERUS DAPET DISKON 20% LAGI ITU 70%. FIX. FINAL. GUE UDAH PAKE ITU BUAT BELI JAKET. terus kasirnya bilang 'kak jadinya 60%'. kata siapa? kata kertas? KATA MATEMATIKA YANG MANA?! yang penting gue hemat. gak terima koreksi. KECUALI koreksinya bikin makin murah. itu gue terima.",
    comments: [
      { authorId: 5, minutesAgo: 228, content: "50 dari 100 jadi 50. 20 dari 50 itu 10. jadi 60. maaf, angka gak bisa ditekan" },
      { authorId: 39, minutesAgo: 219, content: "harga 250, diskon 60% bayar 100. diskon 70% bayar 75. kasirnya bener, bedanya 25 ribu. cek strukmu" },
      { authorId: 2, minutesAgo: 207, content: "WKWKWK BENER JUGA YA KATA KASIR TAPI GUE MAU IKUT PERCAYA YANG 70" },
      { authorId: 6, minutesAgo: 195, content: "jadi mana yang bener, 70 atau 60? aku ikut yang paling murah aja deh" },
      { authorId: 28, minutesAgo: 181, content: "wkwkwk gue pernah gitu sampe dijelasin pake kertas di kasir. memalukan tapi nambah ilmu" },
      { authorId: 50, minutesAgo: 168, content: "gue denger diskon dobel itu mitos tapi juga tetep percaya, siapa tau tokonya beda aturan" },
      { authorId: 45, minutesAgo: 154, content: "Kasir Anda jujur. Itu lebih berharga daripada potongannya." },
      { authorId: 44, minutesAgo: 141, content: "gue pernah yakin kayak gitu, diketawain kasirnya. sakit hati tapi bener sih" },
      { authorId: 33, minutesAgo: 128, content: "jaketya enak gak? itu yang penting" },
      { authorId: 20, minutesAgo: 112, content: "bro 70% mah kalau diskonnya diaplikasi. di kasir mah patuh struk" },
    ],
  },
  {
    id: 9,
    authorId: 16,
    minutesAgo: 265,
    shares: 41,
    content:
      "token listrik gue habis jam 6 pagi, pas lagi ngelap lantai. masukin 50, ya udah jalan lagi. sore ini aku duduk itung: bulan lalu 50, bulan ini 50, dua bulan lagi kayaknya harus 100.\n\nbesok aku kerjain: jemuran yang kemarin ujan, cuci sarung bantal, sama nabung receh di kaleng kue. kalengnya tinggal ditutup rapat biar gak kepake buat jajan.",
    comments: [
      { authorId: 48, minutesAgo: 256, content: "Kalau token habis tiap awal bulan, catat pemakaiannya per minggu. Biasanya yang besarnya setrika dan kulkas lama." },
      { authorId: 33, minutesAgo: 243, content: "kaleng kue itu penjara receh yang paling ampuh di setiap rumah 😄" },
      { authorId: 1, minutesAgo: 228, content: "aku juga kaleng kue, isinya sekarang setengah, mulai godaan tiap sore" },
      { authorId: 22, minutesAgo: 213, content: "semoga bulan depan hemat terus 🙏" },
    ],
  },
  {
    id: 10,
    authorId: 39,
    minutesAgo: 295,
    shares: 15,
    content:
      "tadi siang di bank. satu loket buka, baris 12 orang. rata-rata 3 menit satu orang, berarti gue nunggu sekitar 30 menit kalau gak ada yang ribut. gue pindah ke baris satunya yang keliatan lebih pendek.\n\nternyata isinya orang-orang yang minta buka rekening, satu orang bisa 15 menit. gue balik ke baris awal. posisi gue udah nomor 4. hidup gak selalu adil tapi kadang lucu.",
    comments: [
      { authorId: 27, minutesAgo: 285, content: "buka rekening emang makan waktu. data satu-satu. gue sering nerima barang di gudang juga begitu, keliatan cepet ternyata ribet" },
      { authorId: 8, minutesAgo: 270, content: "ini soal estimasi antrean favorit gue. yang paling bikin salah itu rata-rata tanpa sebaran" },
      { authorId: 47, minutesAgo: 255, content: "aku kerja di balik loket. makasih udah balik, baris satunya emang penjara" },
      { authorId: 31, minutesAgo: 240, content: "hidup gak adil tapi lucu. simpen buat caption" },
    ],
  },
  {
    id: 11,
    authorId: 20,
    minutesAgo: 325,
    shares: 30,
    content:
      "tangki motor gue 50 ribu penuh. gue kira itu berarti bensin 12-an ribu per liter karena tangki gue 4,2 liter. BRO. 4,2 LITER ISINYA 50 RIBU. BERARTI BENSIN 12 RIBUAN/LITER?? GAK MASUK AKAL. BERARTI TANGKI GUE YANG KECIL. ya udah tangki kecil gak dosa. cek sendiri kalau gak percaya",
    comments: [
      { authorId: 39, minutesAgo: 313, content: "50 ribu dibagi 12 ribuan per liter itu sekitar 4,2 liter. pas, bukan gak sengaja" },
      { authorId: 26, minutesAgo: 298, content: "bro tangki emang 4-4,5 liter, 50 ribu juga pas penuh. angkanya cocok semua" },
      { authorId: 47, minutesAgo: 282, content: "aku salah itung kembalian aja bisa ngerti ini kok. 50 dibagi 12 ya sekitar 4" },
      { authorId: 2, minutesAgo: 266, content: "GUE JUGA PERNAH KIRAIN TANGKI GUE BOCOR. TERNYATA GUE YANG SALAH ITUNG" },
      { authorId: 42, minutesAgo: 250, content: "4,2 liter buat motor harian udah lumayan. yang penting tekanan angin, bukan tangki" },
      { authorId: 13, minutesAgo: 235, content: "GUYS KALO GITU GUE 50 RIBU DAPET 4,2 LITER. MURAH BANGET DONG. ATAU MAHAL? GAK YAKIN" },
    ],
  },
  {
    id: 12,
    authorId: 4,
    minutesAgo: 355,
    shares: 5,
    content: "kunci motor ilang dicari setengah jam. ketemu di kantong. kantong yang dari awal sudah diperiksa.",
    comments: [],
  },
  {
    id: 13,
    authorId: 22,
    minutesAgo: 385,
    shares: 19,
    content:
      "anakku telepon sore tadi, cuma lima menit. katanya makan udah teratur, kamar bersih, uang cukup. sudah itu saja yang ibu butuh dengar. selebihnya semoga 🙏",
    comments: [
      { authorId: 1, minutesAgo: 376, content: "lima menit itu cukup kok bu. anak udah mikirin kita" },
      { authorId: 40, minutesAgo: 361, content: "SEMOGA ANAKMU SEHAT. CUCU AKU JUGA JARANG TELEPON. TAPI AKU YAKIN DIA BAIK BAIK SAJA" },
      { authorId: 22, minutesAgo: 347, content: "aamiin, semoga anakmu juga sehat" },
    ],
  },
  {
    id: 14,
    authorId: 8,
    minutesAgo: 415,
    shares: 23,
    content:
      "skripsi gue butuh minimal 100 responden. yang udah isi 37. tiap gue sebar angket, yang isi tetep 6-7 orang itu-itu, wong yang gue tanya balik pun mereka. terus gue itung: kalau kecepatannya 2 orang per hari, 63 orang lagi = sebulan lagi. deadline 3 minggu. ada selisih 9 hari yang harus gue tempuh dengan cara yang belum gue tau.",
    comments: [
      { authorId: 18, minutesAgo: 401, content: "sebar ke grup angkatan lain, jangan cuma satu. biasanya langsung naik" },
      { authorId: 49, minutesAgo: 386, content: "37 responden masih mending. gue kena data pasien yang gak boleh gue sebar-sebar, nunggu izin doang seminggu" },
      { authorId: 39, minutesAgo: 371, content: "2 per hari itu asumsi hari kerja atau kalender? kalau kalender, 9 hari selisihnya tinggal sekitar 5" },
      { authorId: 28, minutesAgo: 356, content: "semangat kak, gue baru selesai ploto aja rasanya udah setengah mati" },
      { authorId: 8, minutesAgo: 341, content: "di grup angkatan udah. malah ada yang bilang 'kuisioner lagi? wkwk'. sakit." },
    ],
  },
  {
    id: 15,
    authorId: 14,
    minutesAgo: 445,
    shares: 17,
    content:
      "di pasar tadi cuanki naik 500. tukang cuanki bilang 'bahan naik semua'. aku nanya bahan apa. dia jawab 'semuanya teh'. mmm. oke. ya aku beli dua porsi. satu buat makan sekarang, satu buat dibungkus. kan yang satu udah beli, kalau gak beli 500 itu buat apa lho.",
    comments: [
      { authorId: 32, minutesAgo: 434, content: "aku juga suka nanya bahan naik apa, biasanya dijawab 'ya gitu lah teh'. sama saja" },
      { authorId: 14, minutesAgo: 420, content: "yang dibungkus satu buat bapak? semoga enak yu" },
      { authorId: 50, minutesAgo: 405, content: "katanya cuanki naik gara2 kuota. kuota apa? gak tau. yang penting gue percaya" },
      { authorId: 5, minutesAgo: 390, content: "500 itu buat tenang hati sih. kadang beli bukan soal harga" },
    ],
  },
  {
    id: 16,
    authorId: 28,
    minutesAgo: 475,
    shares: 26,
    content:
      "ulangan math tadi. temen sebangku gue jawab pake 3 cara di kertas, gue jawab satu alur doang. pas ploto dikoreksi nilai kita SAMA. 82. gils. aku mikir, berarti yang dinilai hasilnya ya bukan gayanya. terus bu guru bilang 'yang penting alurnya jelas'. TAPI KENAPA NILAI GUE YANG SATU ALUR SAMA YANG TIGA ALUR WKWKWK. ya udahlah.",
    comments: [
      { authorId: 18, minutesAgo: 462, content: "82 dua-duanya, berarti emang dua-duanya bener. alur beda hasil sama itu biasa kok di matematika" },
      { authorId: 8, minutesAgo: 447, content: "dinilai di jawaban, bukan di dramanya wkwk" },
      { authorId: 10, minutesAgo: 432, content: "GILS 82. GUE BLM NYAMPE ITU JUGA" },
      { authorId: 3, minutesAgo: 417, content: "Saya yang mengoreksi ulangan hari itu. Dua-duanya rapi, sulit memilih. Salut." },
      { authorId: 38, minutesAgo: 400, content: "SUMPAH GUE PERNAH GITU, NILAI GUE SAMA YANG NGOPYEK. DUNIA GAK ADIL TAPI GUE TETEP NGERASA MENANG WKWK" },
      { authorId: 46, minutesAgo: 385, content: "anak gue juga gitu, nilai sama dengan yang senyap-senyap pinter. dia malah bangga" },
    ],
  },
  {
    id: 17,
    authorId: 24,
    minutesAgo: 505,
    shares: 35,
    content:
      "rencana bulan depan: gas 180, laundry 45, listrik 60, mie dan beras 80, jajan jalan 50. total 415 ribu dari gaji magang 1,8 juta. sisanya untuk nabung dan satu kali makan enak tiap awal bulan.\n\nmasalahnya bulan ini gue gak sempet nabung karena ban motornya kena paku di tanggal 12. ban baru 140. rencana bulan depan: tambah satu pos, 'ban lagi'. kalo gak kena paku, uangnya jadi tabungan paku. aman.",
    comments: [
      { authorId: 11, minutesAgo: 493, content: "pos 'ban lagi' itu bijak. di kos gue juga ada pos 'isi ulang galon dadakan' 10 ribu" },
      { authorId: 24, minutesAgo: 478, content: "setuju, pos dadakan itu penyelamat rencana" },
      { authorId: 39, minutesAgo: 463, content: "1,8 juta dikurang 415 + 140 = 1.245. masih ada ruang untuk satu kali makan enak kok" },
      { authorId: 47, minutesAgo: 448, content: "aku nabung di kaleng, abang di kos nabung di aplikasi. dua2nya abis pas tanggal tua wkwk" },
      { authorId: 8, minutesAgo: 433, content: "gaji magang 1,8 itu udah bagus. skripsi gue aja belum gajian" },
    ],
  },
  {
    id: 18,
    authorId: 10,
    minutesAgo: 535,
    shares: 26,
    content:
      "ULKAN MATEMATIKA BESOK. GUE BELAJAR DARI JAM 4. JAM 5 LAPAR. JAM 6 LAPAR LAGI. JAM 7 GUE MAKAN. JAM 8 NGANTUK. SKRG JAM 9 GUE BELUM BUKA BUKU. BESOK ULANGANNYA PERSAMAAN KUADRAT. PERSAMAANNYA APA GUE BELUM TAU. GILS.",
    comments: [
      { authorId: 28, minutesAgo: 522, content: "persamaan kuadrat itu ada pangkat 2 nya. sisanya cari di buku halaman 4 bagian bawah" },
      { authorId: 6, minutesAgo: 506, content: "klo gue yang gak belajarnya sampe besok pagi baru panik. lo udah oke kok udah buka bukunya siapa tau" },
      { authorId: 44, minutesAgo: 490, content: "YAUDAH besok nyontek ke gue. GUE JUGA GAK BISA WKWKWK" },
    ],
  },
  {
    id: 19,
    authorId: 47,
    minutesAgo: 565,
    shares: 7,
    content:
      "tadi pelanggan nawar roti 2 ribu. stoknya banyak, aku kasih. terus dia minta kembalian 500 dibuletin. aku bilang oke. dia senyum, bilang 'kamu pinter'. aku gak pinter. aku cuma males debat pagi-pagi.",
    comments: [
      { authorId: 5, minutesAgo: 552, content: "males debat itu bentuk pinter yang paling hemat tenaga" },
      { authorId: 32, minutesAgo: 537, content: "aku tukang sayur, hampir tiap hari ada yang minta dibuletin. kadang aku senggol dia dikit hehe" },
      { authorId: 45, minutesAgo: 521, content: "Mengalah pada hal kecil untuk menjaga suasana. Itu tidak berarti kalah." },
      { authorId: 14, minutesAgo: 505, content: "roti 2 ribu tapi kembalian minta dibuletin, orangnya lucu juga ya" },
      { authorId: 13, minutesAgo: 489, content: "GUE KASIH TAU RAHASIA: KALO MALES DEBAT, TINGGAL BILANG 'SESUAI HARGANYA YA'. FIX." },
    ],
  },
  {
    id: 20,
    authorId: 26,
    minutesAgo: 595,
    shares: 14,
    content:
      "penumpang jam 10 malem, naik dari pasar, turun di perumahan ujung. di jalan dia tidur. gue lewat 3 polisi tidur, dia gak jatuh. sampai tujuan dia bangun, bilang 'bang, kita udah sampai?' gue bilang iya, udah 5 menit duduk di sini nungguin lu bangun. dia bilang makasih, gak ngasih apa-apa, tapi senyumnya gak bohong. udah. cukup cerita itu aja.",
    comments: [
      { authorId: 12, minutesAgo: 581, content: "penumpang tidur di motor tuh seimbang banget ya, gak pernah jatuh kiri kanan" },
      { authorId: 34, minutesAgo: 565, content: "gue komuter, tiap liat ojol nganter orang ngantuk gue jadi mikir, capeknya sama aja kayak kita" },
      { authorId: 22, minutesAgo: 549, content: "semoga penumpangnya sampai tujuan dengan selamat dan pulang ke rumah 🙏" },
      { authorId: 26, minutesAgo: 533, content: "iya, senyumnya gak bohong, cukup itu" },
    ],
  },
  {
    id: 21,
    authorId: 5,
    minutesAgo: 625,
    shares: 21,
    content:
      "hari ini warung untung bersih 86 ribu. dua belas ribu di antaranya masih dicatat, belum dibayar, pembelinya orang sebelah. ibu bilang jangan dihitung duluan yang belum masuk. jadi aku catat dua-duanya: yang masuk 74, yang nyangkut 12.\n\nbesok kalau dia bayar, 12 itu pindah kolom. buku tulis ku penuh kolom-kolom kecil begini dari tahun lalu. gak ada yang beli buku itu. tapi isinya jujur.",
    comments: [
      { authorId: 39, minutesAgo: 610, content: "memisahkan yang masuk dan yang nyangkut itu prinsip akuntansi yang benar. mantap" },
      { authorId: 48, minutesAgo: 594, content: "Buku tulis seperti itu akan sangat berharga kalau ibu perlu mengingat siapa yang baik." },
      { authorId: 24, minutesAgo: 578, content: "aku juga punya buku begini buat kos-kosan, tapi isinya sering gak cocok sama realita wkwk" },
      { authorId: 16, minutesAgo: 562, content: "warung itu kerja yang gak keliatan capeknya. semangat" },
    ],
  },
  {
    id: 22,
    authorId: 29,
    minutesAgo: 655,
    shares: 156,
    content:
      "sejak kemarin ibu naruh kunci-kunci rumah di gantungan dekat pintu. selama ini dia naruhnya di mana saja. di tas, di bantal, di atas kulkas… sekarang gantungannya rapi, ada tiga kunci sama satu gantungan kunci bekas.\n\naku gak nanya apa-apa. dia juga gak jelasin. ya udah gitu.",
    comments: [
      { authorId: 37, minutesAgo: 641, content: "rumah yang mulai tertata itu tanda orangnya mulai tenang lagi" },
      { authorId: 45, minutesAgo: 625, content: "Kadang perbaikan datang tanpa diumumkan. Saya bersyukur membaca ini." },
      { authorId: 9, minutesAgo: 609, content: "ibu-ibu begitu. yang penting gantungan kuncinya nempel di tempat yang sama tiap hari" },
      { authorId: 48, minutesAgo: 593, content: "Saya juga berhenti bertanya kalau anggota keluarga mulai menertibkan sesuatu sendiri. Itu cara mereka memulihkan diri." },
    ],
  },
  {
    id: 23,
    authorId: 19,
    minutesAgo: 685,
    shares: 2,
    content: "jam 1 lewat. kulkas di dapur mati nyala mati nyala. satu-satunya penghuni rumah ini yang punya jadwal dan disiplin.",
    comments: [
      { authorId: 23, minutesAgo: 672, content: "gue juga denger kulkas. kita berdua tau jam keberapa dia istirahat" },
    ],
  },
  {
    id: 24,
    authorId: 40,
    minutesAgo: 715,
    shares: 12,
    content:
      "CUCU AKU KALO DISURUH BELAJAR DIA MALES. KALO TIDAK DISURUH DIA MAU BELAJAR SENDIRI. ANEH YA. TADI SORE AKU PURA2 TIDUR DI KURSI. DIA BUKA BUKUNYA SENDIRI SAMPE MAGRIB. AKU GAK TEGA BANGUNIN. GUAJAR JUGA GAK BERANI NGOMONG APA2.",
    comments: [
      { authorId: 1, minutesAgo: 700, content: "nenek pura-pura tidur itu jurus paling ampuh 😄 anak-anak suka kerasa bebas" },
      { authorId: 48, minutesAgo: 685, content: "Anak yang belajar karena kehendak sendiri tahan lebih lama daripada yang disuruh." },
    ],
  },
  {
    id: 25,
    authorId: 31,
    minutesAgo: 745,
    shares: 5,
    content: "capek tapi gak ngantuk. gak marah tapi pengen banting sesuatu. akhirnya banting bantal. abis dah.",
    comments: [
      { authorId: 44, minutesAgo: 730, content: "bantal gak dosa. YAUDAH" },
      { authorId: 23, minutesAgo: 715, content: "jam segini rasanya persis gini" },
    ],
  },
]
