import type { ThreadzThread } from "../types"

// PART 3: cuitan 51-75. random, standup, problema hidup
export const THREADS_PART3: ThreadzThread[] = [
  {
    id: 51,
    authorId: 28,
    minutesAgo: 40,
    shares: 112,
    content:
      "tanggal merah jatuh selasa. orang normal: senang, libur. gue: selasa libur, rabu masuk satu hari, kamis jumat kerja, weekend, senin kerja. jadi minggu ini gue kerja 4 hari dengan 5 hari pengeluaran. tanggal merah itu bukan bonus, dia ngerombak arus kas mingguan sambil senyum",
    comments: [],
  },
  {
    id: 52,
    authorId: 39,
    minutesAgo: 80,
    shares: 143,
    content:
      "grup WA kelas 40 orang. yang ngobrol aktif 5. sisanya 35, semuanya 'dilihat'. itu bukan grup, itu siaran pribadi 5 orang dengan 35 pendengar setia. di teori graf, derajat rata2 keliatan besar, tapi derajat yang beneran kepake kecil. pertemanan juga gitu kayaknya. banyak garis, dikit yang nyala",
    comments: [
      { authorId: 1, minutesAgo: 70, content: "grup gue 60 orang. aktif: bendahara, yang jualan, sama gue (kadang). kita tiga jaga peradaban" },
      { authorId: 46, minutesAgo: 55, content: "yang 'dilihat' itu nyumbang paling penting: mereka bikin grup kerasa rame kalo kita spam. hargai pendengar" },
    ],
  },
  {
    id: 53,
    authorId: 6,
    minutesAgo: 120,
    shares: 95,
    content:
      "gue baru sadar sesuatu yang GILA. kalo gue punya 10jt terus gue pinjem 20jt, total gue pegang 30jt. hutang 20jt. berarti saldo bersih gue tetep 10jt. UANG GUE GAK BERUBAH TAPI GUE PEGANG 30JT. kenapa orang gak semua ngelakuin ini. rasanya kayak nge-cheat tapi legal",
    comments: [
      { authorId: 27, minutesAgo: 112, content: "bang itu namanya leverage. kalo bisnisnya jalan namanya modal, kalo gagal namanya cerita sedih keluarga. sama angkanya, beda akhir" },
      { authorId: 20, minutesAgo: 95, content: "bapak gue pernah mikir kayak gini pas taun 2016. sekarang kami nyewa rumah. cerita panjang" },
    ],
  },
  {
    id: 54,
    authorId: 43,
    minutesAgo: 170,
    shares: 158,
    content:
      "sabun cair botol 500ml 28rb. isi ulang 750ml 32rb. per mililiter: botol 56rb/liter, refill 42,7rb/liter. refill lebih murah 24%. TAPI GUE TETEP BELI YANG BOTOL. kenapa? KARENA PUMP-NYA. kehidupan modern itu mahal gara2 mekanik pompa. gue sudah coba mindahin isi ke botol lama, tumpah 15%. matematika 1, matematika 2, dua2nya kalah sama tangan gue yang goyah",
    comments: [
      { authorId: 19, minutesAgo: 160, content: "beli botol sekali, abis itu refill selamanya. pump harus dijaga kayak aset. udah 3 taun pump gue masih kerja" },
      { authorId: 46, minutesAgo: 140, content: "pump yang bagus itu warisan. pump yang rusak itu biaya. gue milih pump sampe mati" },
    ],
  },
  {
    id: 55,
    authorId: 27,
    minutesAgo: 230,
    shares: 187,
    content:
      "hitung kebutuhan tidur: 8 jam. bangun 05:30. berarti masuk selimut jam 21:30. sekarang jam 23:47. kalo tidur sekarang gue dapet 5 jam 43 menit = 71% dari kebutuhan. terus gue kepikiran 71% itu, gue jadi mikir lagi, sekarang 23:52, persentasenya turun ke 70,3%. gue gak tidur karena mikirin persentase tidur yang gak bakal gue dapet. paradoks, tapi konsisten",
    comments: [
      { authorId: 3, minutesAgo: 220, content: "ini algoritma tidur yang gak bisa dikonvergen. saran: stop itung di 23:59, biar 69% rasanya seperti 69% aja" },
      { authorId: 46, minutesAgo: 200, content: "gue tidur jam 1 tiap hari dengan alasan 'hari ini gak kebagian hidup'. 71% itu mewah bang. ambil" },
      { authorId: 12, minutesAgo: 170, content: "satu-satunya yang bikin gue tidur cepet: matikan HP. tapi HP adalah sumber hidup. impas, begadang" },
    ],
  },
  {
    id: 56,
    authorId: 41,
    minutesAgo: 290,
    shares: 71,
    content:
      "kata orang 'gaji negatif gak ada'. PADA BENER. soalnya kalo gaji bisa negatif, kita BAYAR buat kerja. terus kok saldo rekening bisa negatif?? berarti rekening-nya yang kerja dong. REKENING GUE LEBIH SIBUK DARI GUE. gue cuma megang kartu",
    comments: [
      { authorId: 24, minutesAgo: 280, content: "saldo negatif itu rekening lu kerja buat bank. gajinya bukan lu. selamat siang" },
    ],
  },
  {
    id: 57,
    authorId: 46,
    minutesAgo: 340,
    shares: 96,
    content:
      "laundry kiloan 6rb/kg. baju 1 minggu 4,5kg = 27rb. sebulan 108rb. setahun 1,3 juta. dulu tinggal di rumah, cuci pake mesin mama, gratis. DEWASA ITU GAK MAHAL DI BAJUNYA. yang mahal jasa orang lain ngerjain hal yang dulu gak gugur korek apinya, tinggal mesin, air, dan minggu",
    comments: [],
  },
  {
    id: 58,
    authorId: 8,
    minutesAgo: 400,
    shares: 262,
    content:
      "postingan motivasi bilang: 'perbaiki 1% tiap hari, 1,01^365 = 37,8, jadi setahun lu 37x lebih baik'. cantik. tapi yang gak ditulis: 0,99^365 = 0,0255. memburuk 1% sehari, setahun lu tinggal 2,5% dari kemampuan awal. motivasi itu matematika yang diedit. dua-duanya bener, satu yang dinyalain",
    comments: [
      { authorId: 11, minutesAgo: 385, content: "ini yang harus dibaca di kelas. dua sisi pangkat, bukan cuma sisi yang bikin seneng" },
      { authorId: 18, minutesAgo: 350, content: "37x lebih baik juga gak realistis sebagai harian, tapi sebagai arah dia bener. arah itu yang murah, biayanya konsistensi" },
      { authorId: 45, minutesAgo: 310, content: "gue print ini tempel di kelas. murid2 gue paling sering quote '1% doang'. sekarang ada balesannya" },
      { authorId: 33, minutesAgo: 260, content: "secara bahasa 0,0255 itu 2,5%. gue baca 3x sampe nyambung. worth it" },
    ],
  },
  {
    id: 59,
    authorId: 35,
    minutesAgo: 460,
    shares: 59,
    content:
      "geometri tuh pelajaran tentang jeruk kan. soalnya ada jeruk gabus, lingkaran jeruk, potong jeruk jadi 8 bagian... JERUKNYA GAK PERNAH DIBAGIKAN. 12 taun sekolah, nol jeruk. gue hitung sendiri. NOL",
    comments: [
      { authorId: 44, minutesAgo: 445, content: "bayangin jeruk di soal yang dijumlah dari 1985 sampai sekarang. miliaran jeruk. gak satu pun dimakan" },
      { authorId: 20, minutesAgo: 400, content: "gue baca ini sambil makan jeruk. rasa bersalah yang aneh. nih jeruk gue doain sama jeruk2 di soal" },
    ],
  },
  {
    id: 60,
    authorId: 7,
    minutesAgo: 530,
    shares: 201,
    content:
      "nemang: 'diharapkan hadir 200 tamu'. katering 200 porsi x 45rb = 9jt. rata2 amplop 75rb (kata pengalaman) = 15jt. untung 6jt KALAU semua dateng. realita: 30% bolong, dan yang bolong biasanya yang 'maaf ya ga bisa datang'. amplopnya juga ikut ga datang. matematika pernikahan itu matematika harapan dengan biaya tera",
    comments: [
      { authorId: 12, minutesAgo: 515, content: "yang dateng tanpa kabar itu bahaya dua arah: kursi kosong, amplop kosong. dobel rugi. tapi gak usah dihisapi, nikahan bukan bisnis" },
      { authorId: 31, minutesAgo: 480, content: "gue buat list 3 kolom: pasti dateng, mungkin, gak mungkin. katering dihitung dari kolom 1 plus setengah kolom 2. jalan terus sampe sekarang" },
      { authorId: 44, minutesAgo: 430, content: "'biaya tera' WKWK. iya bgt. gue sempet itung: tiap tamu yang ga dateng itu 45rb balik ke kantong tapi 100rb ilang dari harapan" },
      { authorId: 4, minutesAgo: 380, content: "salam kenal sama pasangan lu yang nerima perhitungan ini. calon suami/istri yang nikahin orang yang itung amplop itu sejati" },
    ],
  },
  {
    id: 61,
    authorId: 45,
    minutesAgo: 600,
    shares: 147,
    content:
      "pergi ke kantor 30 km/jam (pagi, sepi). pulang 10 km/jam (macet). kecepatan rata2 gue 15 km/jam. BUKAN 20. rata2 kecepatan itu total jarak dibagi total waktu, bukan rata2in angkanya. sejak ngitung ini gue gak marah pas macet pulang. gue tau dari jam 8 pagi bahwa angka pulang udah jelek. kejutan itu sumber marah, bukan macetnya",
    comments: [
      { authorId: 3, minutesAgo: 585, content: "harmonic mean pake jadul. gue baca ini di mobil, gue sekarang di macet, gue tenang. angkanya 15. oke." },
      { authorId: 37, minutesAgo: 540, content: "gue gak ngerti matematikanya tapi gue ngerti pesannya: kalah macet sama orang yang gak mikir. salam" },
    ],
  },
  {
    id: 62,
    authorId: 50,
    minutesAgo: 670,
    shares: 83,
    content:
      "kenapa gak dibikin aja pi = 3? lingkarannya beda dikit doang kan. JUSTRU. 'beda dikit' itu yang bikin jembatan ambruk sama roda mundur. TAPI buat nyendok nasi, pi = 3 kan cukup. gue hidup dua kehidupan: kehidupan pi = 3,14 buat yang penting, pi = 3 buat nyendok",
    comments: [
      { authorId: 11, minutesAgo: 655, content: "pi = 22/7 itu udah versi 'kepala2' buat itung kilat. pi = 3 tuh buat orang yang udah nyerah sebelum mulai" },
      { authorId: 24, minutesAgo: 600, content: "nyendok nasi gak butuh pi bang. butuh sendok. pi cuma buat yang pinggirannya melengkung" },
      { authorId: 47, minutesAgo: 520, content: "gue itung luza luza (laza) dari pi = 3, hasilnya piring gak muat. akhirnya gue percaya 3,14. sejarah gue sama pi" },
    ],
  },
  {
    id: 63,
    authorId: 49,
    minutesAgo: 750,
    shares: 74,
    content:
      "tinta printer 480rb. kertas 45rb/rim. gue cetak 12 lembar CV. 12 lembar dari 500 lembar. kertasnya murah. TINTANYA? gak ada yang jelasin. layar bilang 'tinta rendah' padahal baru 40 halaman. tinta itu komoditas paling misterius setelah cinta: mahal, gak keliatan, dan abis pas paling dibutuhin",
    comments: [],
  },
  {
    id: 64,
    authorId: 14,
    minutesAgo: 830,
    shares: 176,
    content:
      "13 itu sama dengan 1 di jam. 13 sama dengan 1 di bulan (bulan ke-13 balik ke Januari). 13 nada balik ke nada awal di musik. semua itu modulo: lingkaran yang diketik ulang. gue jelasin ini ke keponakan umur 8, dia jawab: 'kayak level game yang balik ke awal tapi makin susah'. anak 8 taun ngerti modulo lebih cepet dari beberapa atasan gue",
    comments: [
      { authorId: 27, minutesAgo: 810, content: "modulo itu konsep paling underserved di sekolah. padahal jam, kalender, WiFi, semua pakai" },
      { authorId: 24, minutesAgo: 750, content: "'level game yang balik ke awal tapi makin susah' itu definisi hidup juga sih. keponakan lu siap nikah" },
      { authorId: 42, minutesAgo: 690, content: "ini alasan gue jadi ngeh kenapa 23:00 + 4 jam = 03:00 bukan 27:00. 30 taun baru gugup. modulo mohon maaf" },
    ],
  },
  {
    id: 65,
    authorId: 38,
    minutesAgo: 910,
    shares: 88,
    content:
      "100rb itu gede. 100rb pecahan 4 lembar 25rb itu kerasa KECIL. PADAHAL SAMA. gue cek 3x. uang itu aktor, dia gak konsisten sama karakternya sendiri. gue skrg nyimpen semua pecah 100rb di kantong belakang biar kerasa 'tabungan'. gila ya manusia",
    comments: [
      { authorId: 45, minutesAgo: 895, content: "ini namanya denomination effect. pecahan gede dijaga, pecahan kecil dibuang. penelitian beneran ada, lu gak sendirian" },
      { authorId: 12, minutesAgo: 830, content: "gue sebaliknya: 100rb 1 lembar itu 'masih ada waktu buat hemat'. 4x25rb itu 'udah kejadian'." },
      { authorId: 31, minutesAgo: 760, content: "duit digital makin ngaburin: saldo 1jt di app kerasa angka, 10 lembar 100rb kerasa hidup" },
    ],
  },
  {
    id: 66,
    authorId: 22,
    minutesAgo: 1000,
    shares: 134,
    content:
      "anak gue SD nanya: 'pah, kalau 0 dikali apa2 hasilnya 0, terus 0 x 0 itu 0 kan? terus kenapa gak boleh dibagi 0?' gue buka google. google jawab 'gak didefinisikan'. anak gue nanya 'gak didefinisikan itu artinya apa?' gue bilang 'gak ada aturannya'. dia bilang 'terus bikin aturannya dong'. ANAK GUE 9 TAHUN DAN DIA BARU SAJA NANYA KENAPA MATEMATIKA GAK LENGKAP",
    comments: [
      { authorId: 27, minutesAgo: 985, content: "jawaban jujurnya: pembagian itu 'berapa banyak x muat di y'. 0 muat berapa kali di 5? jawabannya 'terus-terusan' karena 0 gak nambah apa2. makanya gak boleh, bukan karena gak bisa" },
      { authorId: 33, minutesAgo: 920, content: "'terus bikin aturannya dong' itu nanti dia temuin bentuk matematika yang lain. anakan sekarang beda. gakuat" },
      { authorId: 45, minutesAgo: 840, content: "pembagian 0 itu gak didefinisikan karena hasilnya rusak. 1÷0 = tak hingga?? kalo gitu 2÷0 juga tak hingga, berarti 1 = 2. makanya ditutup, biar semua tetep masuk akal" },
    ],
  },
  {
    id: 67,
    authorId: 30,
    minutesAgo: 1100,
    shares: 245,
    content:
      "lowongan kerja tulis 'gaji sampai 15jt'. kata 'sampai' itu matematika menyusup ke bahasa. artinya ADA satu orang yang 15jt. median mungkin 6,5jt. perusahaan bicara pake nilai maksimum (outlier), karyawan ngalamin pake median. dua-duanya angka. satu bikin semangat, satu bikin sadar",
    comments: [
      { authorId: 14, minutesAgo: 1080, content: "wawancara: 'kisaran 8-15jt'. masuk: 'kisaran 8-15jt' tadi? HRD: 'itu range semua level'. oke" },
      { authorId: 37, minutesAgo: 1000, content: "tanya balik: 'berapa orang di level ini dan berapa median level ini?' jadi pertanyaan wajib gue. jawabannya nunjukin banyak hal" },
      { authorId: 46, minutesAgo: 900, content: "mean buat iklan, median buat realita. thread ini harus jadi sticky grup jobseeker" },
      { authorId: 4, minutesAgo: 800, content: "'sampai' itu kata paling licin di dunia kerja. sampai juga bisa berarti 'gak sampai'" },
      { authorId: 22, minutesAgo: 700, content: "gue kerja di tempat yang iklannya 'hingga 20jt'. gue 7,2. gue masih di sini karena nasi udah di tangan. hidup" },
    ],
  },
  {
    id: 68,
    authorId: 47,
    minutesAgo: 1200,
    shares: 52,
    content:
      "curah hujan 50mm itu artinya airnya numpuk setinggi 5cm kalau gak ngalir ke mana2. terus kok kita gak tenggelam? KARENA TANAH MINUM. tanah itu makhluk raksasa yang haus dan diam. gue sekarang takut sama tanah. bukan takut, hormat",
    comments: [
      { authorId: 35, minutesAgo: 1180, content: "tanah minum, awan gembala, gue perhatiin. dunia penuh pelayan yang gak diberi nama" },
    ],
  },
  {
    id: 69,
    authorId: 1,
    minutesAgo: 1300,
    shares: 176,
    content:
      "servis motor: oli 85rb, kampas rem 45rb, tune up 60rb, jasa 30rb. total 220rb. gue nanya 'kenapa 220?' montirnya jelasin 4 menit pake istilah yang gue gak kenal satu pun. gue setuju BUKAN karena ngerti, tapi karena dia megang kunci roda gue. kepercayaan itu mata uang, dan montir pegang cadangannya. gue cuma bisa itung total, dia yang pegang jalan",
    comments: [
      { authorId: 16, minutesAgo: 1280, content: "'dia megang kunci roda gue' itu definisi ekonomi asimetri informasi paling sadis yang pernah gue baca" },
      { authorId: 26, minutesAgo: 1200, content: "solusi gue: cari bengkel yang nampilin part lama dalam plastik. keliatan dramatis, tapi itung2an mereka jadi bisa dicek" },
      { authorId: 44, minutesAgo: 1100, content: "gue juga gitu tiap ke bengkel. ngerasa gak ngerti itu normal, yang penting gak asal iya. nanya 'ini kenapa harus diganti' gak bikin montir marah, malah dia seneng dianggep ahli" },
    ],
  },
  {
    id: 70,
    authorId: 36,
    minutesAgo: 1400,
    shares: 129,
    content:
      "resep bilang 'api sedang, masak 15 menit'. api sedang itu berapa derajat? 15 menit dihitung dari kapan: sebelum mendidih atau sesudah? resep itu eksperimen yang ditulis pake bahasa manusia, dan manusia suka mengaburkan variabel. makanya masakan mama gak pernah sama persis sama resep. variabel rahasia namanya 'rasa tangan', gak terukur, gak terjual, tapi nyata",
    comments: [
      { authorId: 11, minutesAgo: 1380, content: "'rasa tangan' itu variabel tersembunyi. di statistik namanya residual. semua model gak bisa nangkep mama" },
      { authorId: 43, minutesAgo: 1300, content: "gue nyoba masak resep internet 3x beda hasil. ternyata kompor gue lebih rakus. variabel hardware, bukan software" },
    ],
  },
  {
    id: 71,
    authorId: 44,
    minutesAgo: 1500,
    shares: 94,
    content:
      "rem mobil di kaki kanan. kaki kanan itu yang dominan. JADI REM ITU SEBENARNYA FITUR UTAMA, BUKAN GAS. mobil didesain buat berhenti dulu, jalan itu bonus. gue dari dulu mikirnya terbalik, makanya gue gak brani ambil SIM. kini alasan gue pake dasar teknik. MINTA DIHARGAI",
    comments: [
      { authorId: 24, minutesAgo: 1480, content: "keamanan memang didesain sekitar berhenti. ABS, airbag, rem. semua itu buat 'kalau gak bisa jalan'. lu gak salah total, cuma lu maju duluan" },
      { authorId: 20, minutesAgo: 1400, content: "gue ambil SIM umur 30 karena gue mikir rem lebih penting dari gas. hasilnya: gue paling pelan di jalan. gue bangga" },
      { authorId: 35, minutesAgo: 1300, content: "gas itu opsi, rem itu kewajiban. hidup juga gitu. thread ini sebenarnya bukan tentang mobil" },
    ],
  },
  {
    id: 72,
    authorId: 34,
    minutesAgo: 1600,
    shares: 189,
    content:
      "warisan: tanah 240m2, dibagi 4 anak = 60m2 per anak. di kertas oke. di lapangan: bagian pinggir jalan lebih berharga dari bagian tengah. jadi 60m2 pinggir itu gak sama dengan 60m2 tengah. keluarga gue musyawarah 3 bulan buat 2 meter. DUA METER. silaturahmi kalah sama meteran, dan meteran gak bisa salat",
    comments: [
      { authorId: 4, minutesAgo: 1580, content: "2 meter itu bukan tanah, itu harga diri. sayangnya harganya silaturahmi. gue pernah liat sendiri" },
      { authorId: 7, minutesAgo: 1500, content: "keluarga gue jadi sistem lot: diundi, yang dapet pinggir ganti selisih harga dengan uang. 1 hari selesai. cara paling jujur: nilai dua2nya, beda dibayar" },
      { authorId: 37, minutesAgo: 1400, content: "yang warisan paling mahal bukan tanahnya, tapi keputusan yang adil. tanah bisa dibagi, hati gak ada meternya" },
      { authorId: 22, minutesAgo: 1300, content: "solusi keluarga temen gue: jual semuanya, bagi uang. tanah hilang, silaturahmi nyala. trade off yang gak ada di buku" },
    ],
  },
  {
    id: 73,
    authorId: 11,
    minutesAgo: 1700,
    shares: 156,
    content:
      "bulan keliatan lebih gede pas di dekat horizon. itu ilusi. diameter sudutnya sama persis, otak lu yang main skala. otak yang sama itu juga yang bilang 'besok aja nabungnya'. satu alat, dua kerusakan: satu bikin lu kagum, satu bikin lu telat. gue mulai curiga sama semua 'keliatan besar'",
    comments: [],
  },
  {
    id: 74,
    authorId: 32,
    minutesAgo: 1800,
    shares: 61,
    content:
      "naik tangga bisa lompat 2 anak sekalian = setengah waktu. TAPI turun gak bisa lompat 2. BERARTI TANGGA ITU ASIMETRIS. ke atas itu usaha, ke bawah itu resiko. tangga gak pernah dijelasin gini di sekolah, padahal dia ngajarin hidup gratis tiap hari",
    comments: [
      { authorId: 44, minutesAgo: 1780, content: "gue pernah lompat 2 anak tangga pas turun. sekarang gue paham kenapa di koridor rumah sakit banyak tulisan hati2. resiko itu nyata" },
    ],
  },
  {
    id: 75,
    authorId: 40,
    minutesAgo: 1950,
    shares: 276,
    content:
      "gue punya sistem amplop yang gue jalanin 6 taun: sahabat 200rb, temen kerja dekat 100rb, temen biasa 75rb, kenalan 50rb, temen SMA yang tiba2 invite setelah 10 taun hilang 100rb (itu buat beli muka). masalahnya: 6 taun berjalan, arus gue selalu MINUS. yang gue datengin lebih banyak dari yang ngundangin gue. kesimpulan: persahabatan itu investasi yang dividennya nasi kotak",
    comments: [
      { authorId: 9, minutesAgo: 1930, content: "nasi kotak itu dividen yang gak bisa direinvestasi tapi bikin kenyang. gue setuju sistem lu" },
      { authorId: 31, minutesAgo: 1870, content: "gue catat semua amplop di spreadsheet. arus gue juga minus 4 taun berjalan. tapi tiap kondangan gue dapet cerita, itu ROI gue" },
      { authorId: 16, minutesAgo: 1780, content: "'beli muka' itu investasi paling jujur di dunia. kadang bermanfaat, kadang cuma jadi foto" },
      { authorId: 43, minutesAgo: 1690, content: "temen SMA yang tiba2 invite itu spesies langka. gue biasanya kasih 100rb plus sembangan 'lama gak ketemu'" },
      { authorId: 4, minutesAgo: 1590, content: "gue dulu minus juga. terus gue nikah, semua balik sekaligus. sistem amplop itu akhirnya balik modal cuma butuh satu acara" },
      { authorId: 12, minutesAgo: 1480, content: "buat yang minus terus: itu bukan rugi. lu cuma bayar lebih dulu buat acara yang bakal dateng ke lu nanti. arisan sosial" },
      { authorId: 26, minutesAgo: 1350, content: "spreadsheet amplop itu keren tapi gak semua orang sanggup liat angkanya. gue coba, sehari langsung tutup" },
      { authorId: 49, minutesAgo: 1200, content: "gue cuma punya 1 tarif: 100rb. sahabat marah, kenalan seneng. satu tarif, nol drama. tapi ya itu, sahabat marah" },
      { authorId: 34, minutesAgo: 1050, content: "thread ini lebih jujur dari semua seminar keuangan yang pernah gue ikut. nasi kotak sebagai dividen itu realita pasar" },
      { authorId: 45, minutesAgo: 900, content: "secara ekonomi ini zero negative-sum game tapi positive-relationship game. gak ada di buku, tapi gue percaya" },
    ],
  },
]
