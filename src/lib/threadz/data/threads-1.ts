import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25.
//
// PANDUAN SUARA (biar tiap orang ngetiknya beda, kaya orang beneran):
//  3: ahli, "gue", tenang, analogi sehari-hari      5: ahli, "saya", pendek presisi
//  9: awam, cerita keluarga, CAPS kaget             1: awam, "gue", singkat santai
//  2,6,13,17,20,25: bego — typo/caps/salah yakin    42: ahli anti-judol, tenang ngeri
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 3,
    minutesAgo: 35,
    shares: 486,
    content:
      "0,999... itu = 1. titik. bukan 'hampir 1', bukan 'nanti jadi 1'. udah 1 dari kemarin.\n\nyang masih nolak, tolong jawab ini: ada angka berapa yang letaknya nempel di antara 0,999... sama 1? sebutin satu.\n\ngue tunggu sambil ngupin kopi. kopi gue udah tinggal ampas. gue masih tunggu.",
    comments: [
      { authorId: 2, minutesAgo: 30, content: "gk ada angkanya kan?? berarti jelas beda. gak usah pake kopi2an, ini soal angka bang, serius" },
      { authorId: 5, minutesAgo: 27, content: "1/3 = 0,333... dikali 3 jadi 0,999... dan 1/3 x 3 ya 1. selesai. debatnya pindah ke grup keluarga aja" },
      { authorId: 17, minutesAgo: 24, content: "ya beda dong tulisannya aja beda. 1 itu 1, 0,999 itu 0,999. kaya bapak sama papa, panggilan beda orang beda" },
      { authorId: 9, minutesAgo: 21, content: "gue pernah berantem soal ini sama kakak kelas taun 2019 ampe satpam warnet ikut nonton. hari ini gue damai. gak usah diterusin" },
      { authorId: 25, minutesAgo: 18, content: "kalo 0,999 = 1 berarti 1,999 = 2 DONG?? IYA KAN? JAWAB JANGAN KABUR" },
      { authorId: 11, minutesAgo: 15, content: "iya. semua angka berujung ...999 punya dua nama. selamat, lu nemuin pola, bukan keanehan" },
      { authorId: 31, minutesAgo: 11, content: "gue gak ngerti satu pun dari komen di atas tapi gue baca semua. olahraga otak gratis kok" },
      { authorId: 41, minutesAgo: 8, content: "wkwkwwk ampe satpam warnet ikut nonton. thread ini lebih seru dr film yang gue nonton setengah kemarin" },
      { authorId: 46, minutesAgo: 5, content: "adik gue ampir nangis waktu dijelasin ini. ternyata penderitaannya turun temun ya" },
      { authorId: 24, minutesAgo: 2, content: "nama lain dari 1 itu 0,999... kaya 'es teh' sama 'teh anget'. isinya sama, orangnya beda prinsip" },
    ],
  },
  {
    id: 2,
    authorId: 13,
    minutesAgo: 60,
    shares: 812,
    content:
      "SERIUS NYA YA. 6÷2(1+2) ITU 1. TEMEN GUE BILANG 9 SAMPE DI-BLOCK.\n\nGUE CEK KE KALKULATOR, TERNYATA KALKULATORNYA NYEBRAK GUE. JADI KALKULATOR YANG SALAH??? KALKULATOR YANG BEGO???",
    comments: [
      { authorId: 5, minutesAgo: 55, content: "9. kali dan bagi itu sebaya, dijalanin dari kiri: 6÷2 = 3, lanjut 3 x 3 = 9. kalkulatornya gak bego, dia nurut aturan main" },
      { authorId: 17, minutesAgo: 50, content: "TAPI KATA BU GURU YANG DALAM KURUNG ITU YANG DULUAN" },
      { authorId: 1, minutesAgo: 44, content: "kurungnya udah dikerjain bang, isinya 1+2 = 3. sisanya 6÷2 x 3. kurungnya udah pulang kerja" },
      { authorId: 6, minutesAgo: 38, content: "gue guru TK. jawabannya 'angka'. selamat pagi" },
      { authorId: 18, minutesAgo: 30, content: "soal ini emang doang ngetes siapa yang bisa dikalahin rasa penasarannya. yang jawab 1 gak bego, cuma sekolahnya beda era. yang maki2 baru bego" },
      { authorId: 28, minutesAgo: 20, content: "ini perang tahunan. kayak mudik, kayak arisan, kayak naiknya harga cabai. gak ada pemenangnya dan kita udah nyaman" },
      { authorId: 41, minutesAgo: 8, content: "gue tanya bapak gue, jawabannya 'isi dulu gelasnya'. bapak gue turun gunung duluan kayaknya" },
    ],
  },
  {
    id: 3,
    authorId: 9,
    minutesAgo: 90,
    shares: 655,
    content:
      "tetangga gue jual motornya semalem. motor anter anak sekolah.\n\nbuat bayar slot.\n\nanaknya nangis di depan rumah, bapaknya sibuk di warung internet deket pasar. gue gak lebay, gue ngeliat langsung gimana mesin itu ngambil duit orang dari tangan anaknya sendiri.\n\nkalo ada yang baca ini lagi main: itu mesin, bukan hoki. dia didesain buat menangnya dia, bukan lu. berhenti sekarang. jangan nunggu yang dijual motor besok jadi anak lu sendiri.",
    comments: [
      { authorId: 22, minutesAgo: 80, content: "sebelah rumah mertua gue sama. gajian tanggal 1, tanggal 3 udah gadai anting. yang mo ditabung buat sekolah malah masuk ke sana. ngeri ngeliatnya" },
      { authorId: 42, minutesAgo: 70, content: "faktanya gini: RTP 90-an persen itu bukan berarti lu menang 90%. itu artinya dari semua uang yang masuk, mesin ambil sisanya. pelan2. tiap hari. gak capek. hukumnya udah ditulis sebelum lu duduk" },
      { authorId: 31, minutesAgo: 58, content: "gue pernah fase itu. yang bikin berhenti bukan sadar diri. udah gak ada lagi yang bisa dijual. semoga tetangga lu sadar sebelum segitu" },
      { authorId: 4, minutesAgo: 45, content: "ada yang bisa jelasin kenapa yang kena tuh orang kecil? yang gajinya gede kan juga ada yang main" },
      { authorId: 42, minutesAgo: 33, content: "karena buat yang gaji kecil, 50rb rasanya kayak pintu harapan. buat yang gaji gede, 50rb itu debu. mesinnya jahat ke orang yang paling gak mampu rugi" },
      { authorId: 16, minutesAgo: 20, content: "post ini harusnya dibaca semua orang yang baru aja gajian. serius deh" },
      { authorId: 12, minutesAgo: 9, content: "semoga anaknya naik motor bapaknya lagi. beneran, semoga" },
    ],
  },
  {
    id: 4,
    authorId: 21,
    minutesAgo: 120,
    shares: 431,
    content:
      "jelasin dikit biar ada yang mikir dua kali sebelum teken: bunga 20%/bulan itu gak berhenti di 20%. itu bunga berbunga.\n\n1 juta, bulan pertama jadi 1,2. bulan kedua dihitung dari 1,2. setahun jadi sekitar 8,9 juta. DELAPAN KOMA SEMBILAN. dari SATU juta.\n\nyang gak dibahas iklannya: angka ini gak kenal kata 'nanti deh'. dia jalan tiap hari. sabar. gak capek. beda sama kita.",
    comments: [
      { authorId: 3, minutesAgo: 110, content: "pernah ngetot kasus temen. pokok 3jt, setahun dibayar total 11jt. dia ngerasa dia 'nyicil'. dia nyicil ke jurang" },
      { authorId: 19, minutesAgo: 95, content: "kok bisa 8,9 juta dari 1 juta?? gue gak percaya. tolong diitung ulang" },
      { authorId: 14, minutesAgo: 80, content: "1,2 pangkat 12 = 8,916. kalkulator aja, tombol x= doang. ini bukan opini, ini kenal pangkat" },
      { authorId: 26, minutesAgo: 60, content: "adik sepupu gue gitu. keluarga nanggung 2 taun buat nutup 4jt yang udah jadi 13jt. nanggung tagihannya" },
      { authorId: 37, minutesAgo: 40, content: "yang bikin gila, dapetnya gampang banget. 5 menit cair. pas mo bayar, 5 bulan" },
    ],
  },
  {
    id: 5,
    authorId: 1,
    minutesAgo: 160,
    shares: 288,
    content:
      "dibawa pulang brosur motor, cicilan 36 bulan 'bunga cuma 7%'.\n\ngue itung totalnya: lebih 4 juta dari harga tunai. 7% dari 20 juta kan 1,4 juta. kok 4?\n\nternyata itu bunga flat: 7% dihitung dari 20 juta TIAP TAHUN. duit yang udah gue bayarin pun tetep ikut dihitung.\n\ngak jadi beli. gue jalan kaki aja dulu. sehat juga.",
    comments: [
      { authorId: 5, minutesAgo: 150, content: "flat itu dasarnya: sisa pokok lu udah dibayar tapi diitung kaya belum. dealer gak salah itung. mereka emang gitu cara itungnya" },
      { authorId: 31, minutesAgo: 130, content: "ini alasan kenapa sebelum teken apapun lu tanya satu hal doang: 'total keluar berapa?' bukan 'bunganya berapa'. total keluar, titik" },
      { authorId: 28, minutesAgo: 100, content: "ampe bikin gue check brosur yang kemarin gue terima. eh iya. gak jadi. makasih ya" },
      { authorId: 44, minutesAgo: 70, content: "berarti kalo gak jadi beli gue gak rugi kan? iya kan??" },
      { authorId: 21, minutesAgo: 30, content: "iya. gak beli = rugi 0. matematika paling aman sepanjang masa" },
    ],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 200,
    shares: 156,
    content:
      "baru paham kenapa orang pada pinter itung diskon.\n\n50% + 50% = 100% = GRATIS. jadi tiap ada tulisan 'diskon 50% + 50%' lu tinggal ambil. gratisan.\n\nkenapa gak ada yang bahas ini di sekolah???",
    comments: [
      { authorId: 5, minutesAgo: 190, content: "50% kedua dihitung dari harga yang udah turun 50%. 100rb → 50rb → 25rb. totalnya 75%, bukan 100%. itu kenapa toko suka banget nulis begini. keliatan gede" },
      { authorId: 17, minutesAgo: 170, content: "TERUS KENAPA ADA TANDA PLUSNYA KALO GAK DITAMBAH?? MATEMATIKA BIKIN ATURAN SENDIRI TERUS YANG SALAH KITA" },
      { authorId: 9, minutesAgo: 150, content: "gue dulu juga kena. bayar 60rb, kira gratis. kasirnya nyengir. gue yang ngelap etalase" },
      { authorId: 6, minutesAgo: 120, content: "jadi 25rb. yaudah siapa yang makan 100rb-an. tetep mahal" },
      { authorId: 11, minutesAgo: 90, content: "ini persis alasan promosi '50%+50%' nempel di kaca toko, bukan nempel di buku matematika" },
      { authorId: 46, minutesAgo: 50, content: "makasih ya. ibu2 banyak yang kejebak ginian lho, jadi inget pas belanja bulanan nanti" },
      { authorId: 25, minutesAgo: 15, content: "btw kalo diskonnya 50% + 50% + 50% gimana? makin murah kan. makasih" },
    ],
  },
  {
    id: 7,
    authorId: 4,
    minutesAgo: 240,
    shares: 97,
    content:
      "tanggal 15.\n\nsaldo: 37 ribu.\n\nrencana bulan depan: banyak. semangat: penuh. dompet: nunggu tanggal 1.\n\nkita lanjut.",
    comments: [
      { authorId: 16, minutesAgo: 220, content: "37 ribu itu masih bisa makmie 7 hari kalau pintar. sabar bang, tanggal 1 segera dateng" },
      { authorId: 12, minutesAgo: 190, content: "saldo gue 15 ribu dan gue masih bisa ketawa. jangan tanya kenapa" },
      { authorId: 34, minutesAgo: 140, content: "sabar ya, semoga bulan depan lebih lapang. rezeki itu muter, gak lihat tanggal" },
    ],
  },
  {
    id: 8,
    authorId: 11,
    minutesAgo: 300,
    shares: 205,
    content:
      "rapat pagi: 1 jam. 12 orang.\n\nhasil: 12 jam kerja manusia dibakar. kesimpulan rapat: 'kita follow up minggu depan'.\n\n6 kata. dari 12 jam. tanpa kue. gak ada kue sama sekali.",
    comments: [
      { authorId: 30, minutesAgo: 280, content: "efisiensi rapat bisa dihitung: 0,1 kata per jam per orang. udah itu lebih lambat dari pertumbuhan kaktus" },
      { authorId: 49, minutesAgo: 240, content: "gue yang nyatet notulennya. isi notulen: 'follow up minggu depan'. gue ngetik 6 kata sambil nyari 1 jam hidup gue" },
      { authorId: 33, minutesAgo: 180, content: "kue-nya yang paling bikin gue kecewa di post ini" },
    ],
  },
  {
    id: 9,
    authorId: 20,
    minutesAgo: 360,
    shares: 133,
    content:
      "kenapa sih nomor 13 di lift diilangin?? takut sama angka doang manusia. angka 13 gak pernah bikin lift jatuh. yang bikin jatuh itu kelebihan muatan. gak nyambung sama 13 sama sekali",
    comments: [],
  },
  {
    id: 10,
    authorId: 5,
    minutesAgo: 420,
    shares: 720,
    content:
      "soal lotre yang dari kemarin ditanyain ke gue, jawabannya begini:\n\npeluang jackpotnya 1 banding 292 juta. lu lebih mungkin kena sambar petir. serius. dua kali.\n\ntapi yang bikin gue sedih bukan angka 292 juta itu. yang bikin sedih: ada orang nyisihin 20rb tiap hari buat 'coba2', terus setaun kemudian dia itung sendiri: 7,3 juta keluar. 0 masuk.\n\n20rb/hari x 365 = 7,3 juta. angka itu bisa jadi modal usaha kecil. uang sekolah satu anak setaun. atau tabungan darurat. dipilih jadi asap.\n\nlotre bukan pintu. dia filter. yang lolos cuma satu orang. yang sisa jadi duit orang lain.",
    comments: [
      { authorId: 2, minutesAgo: 400, content: "tapi kalo 1 banding 292 juta berarti ADA yang menang kan. kenapa bukan gue. JAWAB" },
      { authorId: 15, minutesAgo: 370, content: "gue dulu iseng 1 bulan. pas itung total pengeluaran gue duduk lama banget. 600rb. buat apa ya 600rb itu" },
      { authorId: 9, minutesAgo: 340, content: "angka 7,3 jt itu ngena. uang sekolah anak setaun di daerah gue. dan dibakar buat 'coba'" },
      { authorId: 35, minutesAgo: 300, content: "bukannya kalo main terus makin deket menangnya? kaya angkat botol, makin sering makin kuat" },
      { authorId: 27, minutesAgo: 260, content: "bukan. tiap undian itu independen, gak ada memori. makin sering main = makin banyak uang keluar. peluang tetep 1:292 juta. yang nambah cuma kerugiannya" },
      { authorId: 44, minutesAgo: 210, content: "yaudah gue stop. gak jadi. makasih bang beneran. barunya kerasa ngeri setelah dibaca pelan2" },
      { authorId: 46, minutesAgo: 150, content: "post ini tolong dibaca sampe habis. jangan berhenti di paragraf 1" },
      { authorId: 8, minutesAgo: 90, content: "'bukan pintu, dia filter' — kalimat ini harusnya ditempel di warung internet" },
      { authorId: 31, minutesAgo: 40, content: "gue save. buat gue baca ulang tiap ada yang nawarin 'coba dikit'" },
      { authorId: 25, minutesAgo: 12, content: "btw 292 juta itu banyak ya. sebenernya." },
    ],
  },
  {
    id: 11,
    authorId: 16,
    minutesAgo: 500,
    shares: 88,
    content:
      "stok mie di rak kos tinggal 4 bungkus. kuota 1,2 GB. tanggal 20.\n\ngue udah bikin rencana sampe tanggal 1: mie hari genap, nasi hari ganjil. kuota disimpen buat yang penting2.\n\nyang penting2: nonton video masak mie. biar mie gue beda rasa.",
    comments: [
      { authorId: 34, minutesAgo: 470, content: "konsekuensi banget. semangat, tanggal 1 segera dateng" },
      { authorId: 49, minutesAgo: 420, content: "gue ikut rencana lu tapi versi kopi: 1 sachet diperpanjang jadi 3 hari" },
    ],
  },
  {
    id: 12,
    authorId: 2,
    minutesAgo: 560,
    shares: 121,
    content:
      "GUE BARU TAU: 1 GB ITU 1000 MB. TAPI ADA YG BILANG 1024. JADI MANA??\n\ngue pindah sim card aja lama karena mikirin ini masalah",
    comments: [
      { authorId: 27, minutesAgo: 540, content: "dua2nya bener, beda konteks. pabrik: 1 GB = 1000 MB. sistem operasi: 1 GiB = 1024 MiB. makanya kapasitas di kotak selalu lebih gede dari yang tampil di HP. bukan tipu, beda satuan" },
      { authorId: 20, minutesAgo: 480, content: "yang bener 1024. soalnya 1024 itu angka komputer. gue baca di internet, internet gak mungkin bohong" },
    ],
  },
  {
    id: 13,
    authorId: 22,
    minutesAgo: 640,
    shares: 41,
    content:
      "buat yang hari ini berat: tarik napas 4 detik, tahan 4, buang 6.\n\ngak nge-solve masalah. tapi otak lu sempet duduk dulu. itu udah cukup buat hari ini.",
    comments: [],
  },
  {
    id: 14,
    authorId: 8,
    minutesAgo: 720,
    shares: 310,
    content:
      "kucing gue: bangun, makan jam 7 tepat, tidur, makan jam 7 malem tepat.\n\ngue: alarm 5 kali, snooze 4, sarapan gak jelas, telat 12 menit terus nyalahin traffic.\n\ndan yang punya jadwal hidup paling rapi di rumah ini: si kucing.",
    comments: [
      { authorId: 46, minutesAgo: 690, content: "di rumah gue sama. kucingnya yang ngingetin jam makan kalo telat. kita yang bayar dia kok ya" },
      { authorId: 14, minutesAgo: 640, content: "kucing itu kontinyu, kita diskrit. dia gak kenal kata '5 menit lagi'" },
      { authorId: 33, minutesAgo: 560, content: "jam 7 tepat. antrian pembuktian di depan mangkuk. disiplinnya bikin gue merenung" },
    ],
  },
  {
    id: 15,
    authorId: 25,
    minutesAgo: 800,
    shares: 66,
    content: "btw akar kuadrat itu kan akar. kenapa gak pernah ditanem",
    comments: [
      { authorId: 11, minutesAgo: 770, content: "coba tanem. nanti tumbuh soal cerita. dua2nya sama2 bikin pusing kok" },
    ],
  },
  {
    id: 16,
    authorId: 28,
    minutesAgo: 900,
    shares: 74,
    content:
      "bulan pertama kerja. tadi di meeting diminta 'kasih pendapat aja, santai'.\n\ngue kasih pendapat. sekarang gue overthinking sampe magrib.\n\nbener gak ya pendapat gue itu. atau gue baru aja nampilin kebodohan dalam format siap presentasi",
    comments: [
      { authorId: 37, minutesAgo: 870, content: "yang nanya 'pendapat lu gimana' di meeting biasanya udah punya jawaban. lu aman, tenang" },
      { authorId: 12, minutesAgo: 800, content: "gue juga gitu taun pertama. sekarang gue yang nanya 'pendapat lu gimana' terus mikir 'kok dia gugup ya'. lolos lu, percaya" },
    ],
  },
  {
    id: 17,
    authorId: 18,
    minutesAgo: 1000,
    shares: 195,
    content:
      "setaun itu 8.760 jam.\n\ncoba kira2 berapa jam kita pake buat nunggu: antrian, loading, 'sedang dalam proses', orang lain.\n\ngue gak mo jawab. gue cuma mo lu kerasa dikit.",
    comments: [],
  },
  {
    id: 18,
    authorId: 46,
    minutesAgo: 1100,
    shares: 58,
    content:
      "kemarin cabai rawit 90rb/kg. hari ini 110rb. minggu lalu masih 65rb.\n\ngue mulai masak pake 3 cabai aja, sisanya bayang2an.\n\nyang jualan bilang 'naik semua bu'. ya sudah. gue juga gak mo kalah. seminggu ini masakan rumah tangga gue diet pedas.",
    comments: [],
  },
  {
    id: 19,
    authorId: 17,
    minutesAgo: 1250,
    shares: 149,
    content:
      "kok ya game buat anak2 skrg penuh iklan slot sama 'jackpot' mlulu. adik gue TK, dia nanya jackpot tuh apa.\n\nGUE YANG BINGUNG MAU JAWAB APA. aplikasi kumaha sih, bikin anak tau kata jackpot duluan dr kata berbagi",
    comments: [
      { authorId: 36, minutesAgo: 1220, content: "yang ngeri, iklan macam gitu tujuannya bukan anaknya. tujuannya bapaknya yang ngelirik dari belakang. jalannya ke satu arah semua" },
      { authorId: 31, minutesAgo: 1180, content: "gue uninstall 2 game di HP gara2 ini. iklannya nembus ke orang dewasa aja gampang. apalagi anak" },
      { authorId: 47, minutesAgo: 1100, content: "jackpot tuh apa sih sebenernya? gue sering dengar tapi gak pernah nyampe rumah" },
    ],
  },
  {
    id: 20,
    authorId: 24,
    minutesAgo: 1400,
    shares: 522,
    content:
      "sering dapet pertanyaan: 'kalau ada yang jago, kenapa gak bisa diajari menangin slot?'\n\nkarena gak ada yang bisa. yang ada cuma yang jago jualannya.\n\nslot itu random number generator. tiap putaran gak inget putaran sebelumnya. gak ada pola, gak ada jam hoki, gak ada 'mesin lagi baik'. video 'bocoran' yang lu tonton dibikin orang yang untungnya dari viewers, bukan dari mesin.\n\nciri paling gampang: kalau metodenya dijual, bukan dipakai. orang yang beneran bisa nangkep ikan gak jual pancing.",
    comments: [
      { authorId: 3, minutesAgo: 1350, content: "'gak ada pola' tiga kata paling mahal yang justru gratis. makanya gak dibeli orang" },
      { authorId: 19, minutesAgo: 1300, content: "gue pernah percaya 'jam hoki'. 3 bulan. hasilnya: jam tetep jalan, dompet yang berhenti" },
      { authorId: 42, minutesAgo: 1200, content: "ditambah: yang jual 'metode' itu komisinya dari deposit lu. jadi mesin yang makan uang lu ada dua. satu di layar, satu di grup" },
      { authorId: 48, minutesAgo: 1100, content: "sistem gak simpen memori itu udah beres dari pabriknya. yang nyimpen memori cuma dompet lu. isinya makin lama makin kurang" },
      { authorId: 31, minutesAgo: 950, content: "'rahasia kaya' yang dijual orang kaya juga gitu. kalo beneran rahasia, diapain dijual" },
      { authorId: 12, minutesAgo: 700, content: "share ya. ada temen yang lagi percaya 'jam gacor'. semoga kebaca" },
      { authorId: 36, minutesAgo: 400, content: "'orang yang beneran bisa nangkep ikan gak jual pancing' — pinjem kalimat ini buat penutup sharing akhir pekan, ya" },
    ],
  },
  {
    id: 21,
    authorId: 19,
    minutesAgo: 1600,
    shares: 84,
    content:
      "lembur 4 hari. lemburin: 0.\n\nyang ditanya HRD: 'kenapa absen telat 6 menit?'\n\n6 menit mereka itung sampai satuan. pas gue minta lembur kok itungannya gak sampai satuan ya.",
    comments: [],
  },
  {
    id: 22,
    authorId: 35,
    minutesAgo: 1800,
    shares: 117,
    content:
      "bukannya persen tuh kayak garam? dikit doang, gak ngaruh.\n\nterus kenapa tiap bulan potongan gaji pada ribut. toh cuma beberapa persen",
    comments: [
      { authorId: 5, minutesAgo: 1750, content: "garam 2% dari sup masih sup. gaji 2% selama 12 bulan itu setaun masak tanpa garam. konteks nentuin, bukan angkanya doang" },
      { authorId: 40, minutesAgo: 1650, content: "persen itu garam ya. tapi garam yang ditumpuk tiap bulan di tempat yang sama jadi gunung" },
      { authorId: 45, minutesAgo: 1500, content: "dan semua potongan pakai persen. semua kenaikan gaji juga pakai persen. bedanya satu turun satu naik. persennya tetep sumringah" },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 2000,
    shares: 92,
    content:
      "jam 3 pagi. gerobak bakso di ujung jalan masih buka. pemiliknya ngelamun nungguin orderan.\n\nbuat siapa ya bakso jam 3 pagi itu.\n\nbuat orang macam gue. oke gue pesen. dia senyum. berarti tugasnya selesai hari ini.",
    comments: [],
  },
  {
    id: 24,
    authorId: 37,
    minutesAgo: 2300,
    shares: 63,
    content:
      "arisan tetangga tadi siang di rumah bu yati. yang gak dateng kirim uang pake kurir. yang dateng bawa pisang goreng.\n\ngue gak tau ini namanya keuangan atau ramah tamah.\n\ntapi semua orang pulang bawa sesuatu. dulu pas gue kerja di kota, pulang bawa tugas.",
    comments: [
      { authorId: 1, minutesAgo: 2250, content: "arisan itu asuransi sosial versi manusia. keluhan: 0. cemilan: banyak" },
      { authorId: 31, minutesAgo: 2150, content: "'pulang bawa tugas' — bapak gue pernah bilang kantor itu arisan yang isinya gak sesuai kesepakatan" },
      { authorId: 4, minutesAgo: 2000, content: "pisang goreng bu yati emang juara. udah, itu aja komennya" },
    ],
  },
  {
    id: 25,
    authorId: 10,
    minutesAgo: 2600,
    shares: 71,
    content:
      "2+2=4 itu udah disepakati semua orang ya? oke.\n\nterus kenapa gak ada yang iseng bikin 2+2=5. biar seru. semuanya serius banget",
    comments: [],
  },
]
