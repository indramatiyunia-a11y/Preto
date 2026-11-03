import type { ThreadzThread } from "../types"

// PART 3: cuitan 51-75.
//
// PANDUAN SUARA:
// 39: ahli pendek ngena, "saya"              42: ahli anti-mesin, tenang ngeri
// 45: ahli angka ngeri                       30: ahli panjang tapi manusiawi
// 32: bego gen-z singkatan                   50: bego caps acak
// ATURAN DUNIA: nol merek, nol nama usaha orang. Acuan universal: rumah, bus,
// kelas, dapur, ladang, langit. Aman dibaca anak sampai kakek.
export const THREADS_PART3: ThreadzThread[] = [
  {
    id: 51,
    authorId: 28,
    minutesAgo: 40,
    shares: 112,
    content:
      "baru sadar: udah 2 tahun gak beli baju baru. bukan strategi hemat. lupa.\n\ndan yang lebih aneh: gak kangen belanja sama sekali. dulu rasanya penting banget. ternyata yang penting duit buat makan dan naik kendaraan.",
    comments: [],
  },
  {
    id: 52,
    authorId: 39,
    minutesAgo: 80,
    shares: 143,
    content:
      "'bunga harian 1% doang.'\n\noke kita itung. 1% per hari, dihitung berbunga-bunga: (1,01)^365 ≈ 37,8 kali setahun. dari 1 juta jadi 37,8 juta.\n\nsaya gak menipu. silakan cek kalkulator. kata 'doang' itu kata paling mahal di dunia pinjaman.",
    comments: [
      { authorId: 1, minutesAgo: 70, content: "37,8 kali. gue baca 3 kali. baru kerasa ngerinya pas gue itung sendiri" },
      { authorId: 46, minutesAgo: 55, content: "harusnya tulisan ini ditempel di pintu-pintu. banyak yang ditawarin '1% doang' sama orang dekat, gak sadar itu bola salju" },
    ],
  },
  {
    id: 53,
    authorId: 6,
    minutesAgo: 120,
    shares: 95,
    content:
      "nabung di kantong celana itu ide gak bener. udah gue buktiin 3 kali: tiap dicuci ilang.\n\ngue gak tau duit gue di mana. di mesin cuci? di alam semesta? tolong yang paham keuangan jelasin, gue siap belajar (kalau duitnya ketemu)",
    comments: [
      { authorId: 27, minutesAgo: 112, content: "celana itu bukan tempat nabung. dia tempat transit. nabung yang bener: tempat yang gak gampang lu sentuh. celana dicuci tiap minggu, rekening gak pernah dicuci. pilih sendiri" },
      { authorId: 20, minutesAgo: 95, content: "berarti lu rugi 3 kali nabung. kalo 50 ribu per nabung, 150 ribu. anggep aja biaya les 'jangan nabung di celana'. murah kok" },
    ],
  },
  {
    id: 54,
    authorId: 43,
    minutesAgo: 170,
    shares: 158,
    content:
      "diputusin via chat. hari yang sama gue ada ujian.\n\ndi kelas, gue baca chat di pojokan sambil jaga muka biar gak ketahuan.\n\nskor ujian: keluar besok. skor hati: keluar duluan.",
    comments: [
      { authorId: 19, minutesAgo: 160, content: "jaga muka di kelas itu kerja berat. semangat dek. skor ujian bisa diulang. skor hati juga, cuma lebih lama" },
      { authorId: 46, minutesAgo: 140, content: "kamu pasti kuat. yang nulis chat begitu gak sepadan sama yang nungguin balasan secepat dia nulis" },
    ],
  },
  {
    id: 55,
    authorId: 27,
    minutesAgo: 230,
    shares: 187,
    content:
      "kipas kamar: kecepatan turun 12% dari tahun lalu, suaranya naik.\n\njadi dia sekarang bekerja lebih keras buat hasil lebih dikit.\n\nudah gue bersihin 3 kali, olesin oli 1 kali.\n\nkesimpulan sementara: kipas gue sedang menjalani hidup dewasa.",
    comments: [
      { authorId: 3, minutesAgo: 220, content: "'lebih keras buat hasil lebih dikit' — jangan dibaca orang kantor. bisa kena" },
      { authorId: 46, minutesAgo: 200, content: "kipas kamar anak gue juga. udah dibawa ke tukang 2 kali, balik-balik sama. mungkin waktunya pensiun dengan hormat" },
      { authorId: 12, minutesAgo: 170, content: "oli udah, sekrup udah, debu udah. masih. mungkin dia cuma butuh dipuji" },
    ],
  },
  {
    id: 56,
    authorId: 41,
    minutesAgo: 290,
    shares: 71,
    content:
      "PARAH BANGET. HP VIBRATES. GUE KIRA BONUS.\n\nTERNYATA PENGUMUMAN JADWAL LEMBUR AKHIR PEKAN.\n\nEKSPETASI TINGGI, REALITA RELA TIDAK",
    comments: [
      { authorId: 24, minutesAgo: 280, content: "ekspetasi tinggi, realita lembur. rasio kecewa: tak terbatas dibagi 2 hari" },
    ],
  },
  {
    id: 57,
    authorId: 46,
    minutesAgo: 340,
    shares: 96,
    content:
      "penjual salah kembalin gue 10 ribu tadi pagi. gue udah nyampe rumah baru ngeh.\n\ngue balik lagi. dia bingung, terus senyum, terus makasihnya tiga kali.\n\nbukan pahlawan. cuma kembalian 10 ribu itu bisa beli banyak hal, gak bisa beli tidur nyenyak.",
    comments: [],
  },
  {
    id: 58,
    authorId: 8,
    minutesAgo: 400,
    shares: 262,
    content:
      "masak nasi: rasio beras : air = 1 : 2. sederhana, selalu jadi.\n\ngue coba terapin ke hidup: kerja : istirahat. ternyata gue bikin 3 : 0,5 dan heran kenapa kepala pusing.\n\ndapur udah ngajarin rasio dari dulu. kita yang males itung.",
    comments: [
      { authorId: 11, minutesAgo: 385, content: "rasio 3:0,5 itu bukan hidup seimbang. itu demo fisika tentang gesekan tanpa pelumas" },
      { authorId: 18, minutesAgo: 350, content: "nasi yang kena rasio salah masih bisa dimakan. manusia yang kena rasio salah harus dibenerin dulu sebelum bisa jalan lagi" },
      { authorId: 45, minutesAgo: 310, content: "istirahat yang disarankan: 7-8 jam. rasio aktual banyak orang: 5 jam + terus scroll. hasilnya keliatan di kacamata dan di kesabaran" },
      { authorId: 33, minutesAgo: 260, content: "gue nyalahin panci. dia yang bilang 'masak'. padahal yang harus jalan kita" },
    ],
  },
  {
    id: 59,
    authorId: 35,
    minutesAgo: 460,
    shares: 59,
    content:
      "makan bareng 4 orang. total 400 ribu. gue pikir berarti tiap orang 100 ribu.\n\nyang pesen teh doang protes. kok ya padahal tehnya 10 ribu. kalo diturunin jadi 90 ribu kan kurang 10 ribu. terus siapa yang bayarin 10 ribu itu",
    comments: [
      { authorId: 44, minutesAgo: 445, content: "yang bayarin 10 ribu itu yang paling beneran sayang. karena di grup, yang disangka rela diam-diam jadi dompet bersama. jangan biarin" },
      { authorId: 20, minutesAgo: 400, content: "solusinya gampang: catet per orang pas pesen. 4 orang 4 baris. selesai. patungan rata itu bukan keadilan, itu males itung" },
    ],
  },
  {
    id: 60,
    authorId: 7,
    minutesAgo: 530,
    shares: 201,
    content:
      "nonton tutorial 'perbaiki keran sendiri, 10 menit selesai'.\n\nmenit 3: tutup keran utama. menit 4: kunci baut. menit 7: air nyemprot muka gue.\n\nsekarang gue punya keran baru gantung gak kepake. dan gue beli handuk.\n\ntotal biaya perbaikan: keran + handuk + harga diri.",
    comments: [
      { authorId: 12, minutesAgo: 515, content: "harga diri itu biaya tersembunyi di semua tutorial. gak pernah disebut di judul" },
      { authorId: 31, minutesAgo: 480, content: "'menit 7: air nyemprot muka' — itu bukan kegagalan, itu inisiasi. semua tukang mulai dari kena semprot" },
      { authorId: 44, minutesAgo: 430, content: "gue benerin keran pake lakban. 3 tahun bertahan. sampe sekarang. gak nyangka gue melebihi standar profesional" },
      { authorId: 26, minutesAgo: 380, content: "handuk yang gak kepake bisa jadi lap dapur. semua pengalaman ada sisi bergunanya" },
    ],
  },
  {
    id: 61,
    authorId: 45,
    minutesAgo: 600,
    shares: 147,
    content:
      "yang bilang 'dikit-dikit aja kok, 10 ribu doang':\n\n10 ribu/hari x 365 = 3,65 juta setahun.\n\ndan itu bukan sekali. itu TIAP TAHUN. lima tahun: 18,25 juta. sepuluh tahun: 36,5 juta.\n\n'cuma' 10 ribu itu bukan dikit. dia dikit di hari. tapi dia jabat tangan sama waktu.",
    comments: [
      { authorId: 3, minutesAgo: 585, content: "'jabat tangan sama waktu' — waktu gak pernah kalah jabat tangan. dia cuma nunggu lu lepas" },
      { authorId: 37, minutesAgo: 540, content: "10 ribu per hari di tempat gue bisa jadi uang jajan 2 anak seminggu. dan ada yang bakar buat 'iseng'. sedihnya nyata" },
    ],
  },
  {
    id: 62,
    authorId: 50,
    minutesAgo: 670,
    shares: 83,
    content:
      "KENAPA YA SETIAP GUE NGITUNG UANG GUE SELALU KURANG.\n\nADA YANG NGURANGIN GAK SIH DI JALAN. GUE MASUKNYA BENAR, KELUARNYA JUGA BENAR, KOK HASILNYA SALAH",
    comments: [
      { authorId: 11, minutesAgo: 655, content: "gak ada yang ngurangin di jalan. yang 'salah' itu definisi benar lu: keluar 'benar' banyak kali. banyak kecil = gede. itu perkalian, bukan keajaiban" },
      { authorId: 24, minutesAgo: 600, content: "coba catet semua keluar seminggu. kertas aja, gak perlu aplikasi. hasilnya biasanya bikin orang duduk diam 5 menit. terus berubah hidupnya" },
      { authorId: 47, minutesAgo: 520, content: "gue udah catet. hasilnya: gue gak mau catet lagi. kadang tau itu bikin sakit" },
    ],
  },
  {
    id: 63,
    authorId: 49,
    minutesAgo: 750,
    shares: 74,
    content:
      "hari ini senin. bus 2x jalan, 1x nyangkut, mesin panas.\n\nudah. itu aja laporan hidup hari ini.",
    comments: [],
  },
  {
    id: 64,
    authorId: 14,
    minutesAgo: 830,
    shares: 176,
    content:
      "tadi pagi di toko ada yang teriak: 'diskon 30% terus 30% lagi berarti 60% dong!'\n\ngue jawab pelan: 100 jadi 70, terus 49. jadi 51%.\n\ntoko jadi sepi 3 detik. terus semua orang balik belanja.\n\nkadang orang gak butuh benar. cuma butuh kedengeran.",
    comments: [
      { authorId: 27, minutesAgo: 810, content: "100 → 70 → 49. tiga angka ini harusnya diajarkan di sekolah dasar pake cerita begini. hafal seumur hidup" },
      { authorId: 24, minutesAgo: 750, content: "'orang gak butuh benar, cuma butuh kedengeran' — ini juga berlaku di kantor, di grup keluarga, di rumah" },
      { authorId: 42, minutesAgo: 690, content: "dan penjual paling paham ini. makanya diskon yang dicetak gede selalu bertumpuk. keliatan gede, jujurnya 51" },
    ],
  },
  {
    id: 65,
    authorId: 38,
    minutesAgo: 910,
    shares: 88,
    content:
      "gue punya teori: makin rajin ngecas HP, makin cepet baterainya abis.\n\nbukti: HP gue gue cas 3x sehari, cepet abis. temen gue cas 1x, tahan lama.\n\nsains kan",
    comments: [
      { authorId: 24, minutesAgo: 895, content: "bukan. HP lu dipake 12 jam, temen lu 3 jam. ngecas itu hasil, bukan penyebab. kaya 'makin sering ke dapur makin cepet lapar'. bukan dapurnya. lapar lu yang duluan" },
      { authorId: 20, minutesAgo: 830, content: "baterai itu kaya tenaga manusia: dipake ilang, diisi isi. hubungannya searah. teori lu kaya bilang 'makin sering isi bensin makin boros bensin'" },
      { authorId: 44, minutesAgo: 760, content: "gue dukung teori lu. gue juga punya: makin sering gue cuci piring, makin banyak piring kotor. piring itu konspirasi" },
    ],
  },
  {
    id: 66,
    authorId: 22,
    minutesAgo: 1000,
    shares: 134,
    content:
      "kalau hari ini kerasa gagal: lu bangun, lu masih coba. itu udah 2 hal yang gak semua orang bisa.\n\ngagal itu gak nempel di badan. dia lewat. kadang dia nunggu di sudut buat ngetes lu besok. tapi dia gak tinggal.\n\nistirahat ya. jangan nyerah.",
    comments: [
      { authorId: 27, minutesAgo: 985, content: "istirahat yang bener itu bagian dari kerja. mesin yang gak pernah mati biasanya rusak duluan" },
      { authorId: 33, minutesAgo: 920, content: "'gagal gak nempel di badan, dia lewat' — pinjem buat tulisan besok pagi. dengan izin tentu" },
      { authorId: 46, minutesAgo: 840, content: "makasih ya. ibu-ibu baca ini sambil duduk 5 menit sebelum masak malam. tepat waktu banget" },
    ],
  },
  {
    id: 67,
    authorId: 30,
    minutesAgo: 1100,
    shares: 245,
    content:
      "cerita singkat, harap dibaca sampai habis.\n\ntahun 2021 gue punya temen kuliah. orangnya rapi, sopan, jajan gak lebih dari 15 ribu. semester 5 dia kenal 'aplikasi yang bisa nambahin uang' dari senior.\n\n3 bulan: uang kuliah telat.\n6 bulan: HP dijual, ganti HP tua warisan.\n8 bulan: berhenti kuliah 1 semester, kerja buat lunasin.\nsekarang: udah lulus. tapi dia bilang, 'gue masih gak bisa lihat kata bonus tanpa deg-degan.'\n\nyang gue pelajari: aplikasi itu gak pernah jadi teman. dia jadi langganan. bedanya teman sama langganan: teman nolong pas susah. langganan nunggu lu gajian.\n\nkalo ada yang nawarin 'cuan' di layar, inget dia. tolong.",
    comments: [
      { authorId: 14, minutesAgo: 1080, content: "'teman nolong pas susah, langganan nunggu lu gajian' — kalimat ini yang harusnya masuk buku sekolah. siapa pun jurusannya" },
      { authorId: 37, minutesAgo: 1000, content: "di tempat gue ada versi kupas gaji: tiap tanggal 1 duitnya udah habis sebelum nyampe rumah" },
      { authorId: 42, minutesAgo: 900, content: "yang bikin gak sadar: awalnya memang menang. sistemnya sengaja kasih rasa 'bisa'. dan rasa itu yang jadi jangkar. nangkep ikan pake umpan. ikan gak sadar dia diliatin" },
      { authorId: 49, minutesAgo: 800, content: "gue kirim ini ke grup angkatan. semoga kebaca sampe bawah, bukan cuma dikasih reaksi" },
      { authorId: 3, minutesAgo: 700, content: "'masih gak bisa lihat kata bonus tanpa deg-degan' — luka itu gak keliatan. tapi dia ikut pulang tiap hari" },
    ],
  },
  {
    id: 68,
    authorId: 47,
    minutesAgo: 1200,
    shares: 52,
    content:
      "kira-kira gue itung: berenti beli kopi 15 ribu/hari = 450 ribu/bulan = 5,4 juta setahun.\n\nberarti kopi bikin miskin dong. tapi kok gue tetep beli. jawab dong yang pinter",
    comments: [
      { authorId: 24, minutesAgo: 1180, content: "itungan lu benar, kesimpulan lu yang kegeser. angka itu bukan 'kopi bikin miskin'. itu 'pilihan lu tiap hari punya harga'. lu beli senangnya, ya bayar. masalah mulai kalo yang dibeli pake duit pinjaman. selama tunai, nikmati aja kopinya" },
    ],
  },
  {
    id: 69,
    authorId: 1,
    minutesAgo: 1300,
    shares: 176,
    content:
      "ada yang nawarin gue 'investasi' 300% setahun. modal 1 juta jadi 3 juta. dikasih bukti transfer, testimoni, grup eksklusif.\n\ngue nanya 1 hal doang: 'dari mana duitnya?'\n\njawabannya: 'yang penting cair kan bang.'\n\niya. yang cair itu duit orang lain. yang gak cair: akal sehat.",
    comments: [
      { authorId: 16, minutesAgo: 1280, content: "'yang cair itu duit orang lain' — gue pernah masuk grup kayak gitu gara-gara 'bukti transfer'. keluar rugi 750 ribu. anggep aja bayar les jangan gampang percaya" },
      { authorId: 26, minutesAgo: 1200, content: "300% setahun itu bukan investasi. itu ikan. ikan besar makan ikan kecil, yang masuk belakangan jadi makanan" },
      { authorId: 44, minutesAgo: 1100, content: "gue juga pernah ditawarin. untung duit gue gak ada. kadang miskin itu menyelamatkan" },
    ],
  },
  {
    id: 70,
    authorId: 36,
    minutesAgo: 1400,
    shares: 129,
    content:
      "slip gaji itu dokumen paling kreatif di dunia kerja:\n\n- gaji bruto: angka yang bikin lu seneng pas interview\n- gaji netto: angka yang nongol di rekening\n- take home pay: angka yang sama dengan netto tapi kedengeran lebih hangat\n\ntiga nama. satu dompet. dan yang paling sering dipake di chat: yang paling gede.",
    comments: [
      { authorId: 11, minutesAgo: 1380, content: "bruto itu angka pemasaran. netto itu angka kenyataan. take home pay itu kenyataan yang dibungkus karung imut" },
      { authorId: 43, minutesAgo: 1300, content: "baru dapet tawaran kerja pertama dan sekarang gue mikir: 'yang mereka maksud yang mana ya'" },
    ],
  },
  {
    id: 71,
    authorId: 44,
    minutesAgo: 1500,
    shares: 94,
    content:
      "wkwk gue baru tau time zone itu bukan zona nyetir.\n\ngue kira orang di zona laen boleh nyetir lebih lama. makanya gue bingung kok gak ada radarnya",
    comments: [
      { authorId: 11, minutesAgo: 1480, content: "dan lu masih nyetir tanpa radar. dua kebingungan sekaligus dalam satu tulisan. efisien" },
      { authorId: 24, minutesAgo: 1400, content: "time zone itu buat jam, buat lu. meski kadang jam di HP juga gak jalan. jadi adil lah" },
      { authorId: 43, minutesAgo: 1300, content: "gue kira 'jam malam' itu jam khusus buat malam-malam. terus gue kena. sama-sama belajar" },
    ],
  },
  {
    id: 72,
    authorId: 34,
    minutesAgo: 1600,
    shares: 189,
    content:
      "motor gue ditabrak di lampu merah. bawaan semuanya aman, gue cuma lecet dikit. motor bengkok di depan.\n\niya rugi. iya capek. iya bingung ngadepin biaya.\n\ntapi gue pulang jalan kaki, bukan dibawa. itu udah lebih dari cukup. sisanya gue ngurus pelan-pelan.",
    comments: [
      { authorId: 4, minutesAgo: 1580, content: "lecet dikit tapi motor bengkok: itu pertukaran paling murah yang bisa terjadi di lampu merah. bersyukur yang sesungguhnya" },
      { authorId: 7, minutesAgo: 1500, content: "'gue pulang jalan kaki, bukan dibawa' — kalimat penyelamat mood sepanjang masa" },
      { authorId: 22, minutesAgo: 1400, content: "semoga cepet selesai urusannya dan motornya segera jalan lagi. doa dari sini" },
      { authorId: 37, minutesAgo: 1300, content: "yang penting sehat. motor bisa dibenerin pelan-pelan. yang gak bisa dibenerin itu kalau yang salah kita di jalan" },
    ],
  },
  {
    id: 73,
    authorId: 11,
    minutesAgo: 1700,
    shares: 156,
    content:
      "60 detik itu 1 menit. kecuali pas nunggu 'klien akan segera merespons'.\n\ndi situ 1 menit = 1 abad, dan 'segera' = 3 hari. satuan waktu di dunia kerja itu luwes sekali.",
    comments: [],
  },
  {
    id: 74,
    authorId: 32,
    minutesAgo: 1800,
    shares: 61,
    content:
      "tadi gue sadar: 'hati2 di jalan' itu bukan chat penutup doang. itu doa versi orang yang gak biasa doa.\n\nmakanya jangan dibales 'oke' doang. minimal 'lu juga'",
    comments: [
      { authorId: 44, minutesAgo: 1780, content: "gue biasanya bales 'wkwk ok'. mulai sekarang gue bales 'lu juga bang'. terima kasih atas pencerahan hatinya" },
    ],
  },
  {
    id: 75,
    authorId: 40,
    minutesAgo: 1950,
    shares: 276,
    content:
      "pelanggan: 'bang, komputer gue lambat. gak ada virus kan?'\n\ngue buka: 47 aplikasi jalan bareng. 12 di antaranya 'pembersih' yang saling bersihin. pembersih 3, saling tikung.\n\nRAM 4 GB. tab browser: 38.\n\ngue tanya: 'kemarin ngapain aja bang?'\njawab: 'biasa aja, buka chat doang.'\n\n'chat doang' yang punya 38 tab.\n\ngak jadi gue ceritain pembersih yang ketiga saling bunuh. biar jadi cerita lu sendiri pas HP lu lemot.\n\npesan gue satu: yang bikin lambat itu jarang virus. yang sering: isinya kebanyakan mikir bareng.",
    comments: [
      { authorId: 9, minutesAgo: 1930, content: "38 tab. gue 61. dan gue gak mau ngaku dulu. hari ini gue tutup 20. hidup langsung enteng. bukan cuma HP" },
      { authorId: 31, minutesAgo: 1870, content: "'chat doang yang punya 38 tab' — kaya 'gue cuma nonton doang' terus nonton 4 jam" },
      { authorId: 16, minutesAgo: 1780, content: "pembersih 3 saling tikung itu komedi. stand up jam 10 pagi di tempat servis" },
      { authorId: 43, minutesAgo: 1690, content: "gue baca ini sambil liat HP gue: 6 aplikasi 'bersih-bersih'. gue gak berani uninstall. gue takut kehilangan... gak tau apa. kemungkinan?" },
      { authorId: 4, minutesAgo: 1590, content: "'yang bikin lambat jarang virus, yang sering isinya kebanyakan' — oke. gue merasa disindir tapi gak bisa buktiin" },
      { authorId: 12, minutesAgo: 1480, content: "bang gue mau nanya: HP gue nyala tapi layar item. itu virus gak? (abaikan. ternyata gue gak pencet tombol nyala. kegelapan doang)" },
      { authorId: 26, minutesAgo: 1350, content: "gue bersihin HP sendiri pas dulu pandemi. 'pembersih' dari 12 jadi 2. penghematan RAM sebesar hidup gue" },
      { authorId: 49, minutesAgo: 1200, content: "gue kirim ke grup. ada yang jawab 'gue 72 tab'. gue gak tau dia gimana caranya hidup" },
      { authorId: 45, minutesAgo: 900, content: "RAM 4 GB, 47 aplikasi: 0,085 GB per aplikasi. buat perbandingan: 1 tab modern rata-rata makan 0,15 GB. jadi komputer lu bukan lambat. dia sedang berdoa" },
    ],
  },
]
