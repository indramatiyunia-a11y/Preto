import type { ThreadzThread } from "../types"

// PART 6: cuitan 126-150. Post ketiga penulis 26-50. Batch 2 menuju 1000
// (protokol: dev.sh, riset: scripts/sidik-jari.md).
//
// Aturan tambahan dari user (batch ini mulai diberlakukan):
//  - NARASI CONDONG PELAJAR: mayoritas cuitan bawa keluh kesah & aktivitas
//    pelajar (ulangan, PR, telat, tabungan siswa, magang SMK, remedial)
//    dilihat dari siapa pun yang nulis. Aspek matematika tetap intinya.
//  - REALITAS: gak ada kalimat rakitan yang kerasa fake/botter. Angka
//    kecil, detail kusam, ending gak sempurna.
//  - SATU KARAKTER SATU MODEL: bentuk cuitan tiap penulis WAJIB beda dari
//    dua post sebelumnya (bentuk lama tercatat di buku besar).
//
// Topik batch ini (semua baru): kas kekurangan 500 & toleransi harian,
// buku paket dibagi rata per kelas, barisan deret kursi, rasio gigi
// sprocket, hafal rumus vs memilih rumus, itungan kepala murid SMP,
// konversi ikat-kilo, resep porsi 1,5x (liter-ml), angka romawi jam
// gedung, dibagi nol (mikir anak SMP), bobot soal & jam ujian, les
// tetangga di teras, durasi jalan & telat 4 menit, pangkat nol,
// jarak tanam cabe, volumetrik paket, aturan jam belajar kos,
// target pabrik & anak magang, kalori label per sajian, PR pecahan
// cucu (cara pensil), input nilai 744 kotak, tabungan pertama siswa,
// PR di perpustakaan pas listrik mati, murid SMA cukur jambang
// sebelum ulangan, masak rame rasio kuah-mie.
export const THREADS_PART6: ThreadzThread[] = [
  {
    id: 126,
    authorId: 26,
    minutesAgo: 3775,
    shares: 14,
    content:
      "jam 6.20 keberangkatan pertama, kosong.\njam 6.35 dua murid SMP naik. satu bayar 3 ribu pas, satu kekurangan 500. yang kekurangan bilang besok diselesain. gue jalan, dia turunnya bareng yang bayar.\njam 7.05 kas kuhitung: 41 ribu setengah.\n\nkalau tiap hari ada satu kekurangan 500, sebulan jadi 15 ribu. gak kebayang per pemilik angkot, tapi yang jalan tetep nyenengin: murid SMP yang bilang besok itu besoknya bener dibayar. di kepala gue dia lunas sejak dia bilang gitu. bro.",
    comments: [
      { authorId: 121, minutesAgo: 3767, content: "murid yang nebus kekurangan besoknya itu jujur bang wkwk" },
      { authorId: 184, minutesAgo: 3760, content: "500 kali 30 hari 15 ribu, itungan ojol tetap akurat bro" },
      { authorId: 9, minutesAgo: 3752, content: "yang bayar utang 500 tanpa diingetin itu langka bang" },
      { authorId: 146, minutesAgo: 3745, content: "gue pernah kekurangan 500, sopirnya bilang santai aja. ampe sekarang gak lupa 😭" },
      { authorId: 28, minutesAgo: 3738, content: "murid SMP sekarang rapi semua ya bang wkwk" },
    ],
  },
  {
    id: 127,
    authorId: 27,
    minutesAgo: 3805,
    shares: 26,
    content:
      "kiriman buku paket masuk jam 10: 15 dus, tiap dus 32 eksemplar, total 480. petugas sekolahnya minta dibagi rata buat 6 kelas. 480 dibagi 6 pas 80, gak ada sisa. kuhitung bareng sambil cek resi satu2. 480 buku itu berat, dua orang yang angkat, sekarang semua kelar jam 2. aneh ya, buku baru selalu bikin orang gudang mikir anak kelas berapa yang paling capek nanggung.",
    comments: [
      { authorId: 41, minutesAgo: 3797, content: "buku mahal di berat om. 480 eksemplar itu punggung" },
      { authorId: 196, minutesAgo: 3790, content: "pembagian pas tanpa sisa itu memuaskan om" },
      { authorId: 276, minutesAgo: 3782, content: "Buku yang sampai rata berarti semua kelas terlayani. Bagus." },
      { authorId: 71, minutesAgo: 3775, content: "anakku nunggu buku paket baru juga om. semoga cepet turun 🙏" },
    ],
  },
  {
    id: 128,
    authorId: 28,
    minutesAgo: 3835,
    shares: 26,
    content:
      "PR MTK JAM 10 MALEM GILS.\nsoalnya kursi: baris pertama 12, tiap baris nambah 2, baris ke-15 isi berapa.\n12, 14, 16, gue itung pake jari ampe baris 7 baru nyadar gak harus begini.\n(12 tambah 40) kali 15 dibagi 2. hasil 390.\nGRUP KELAS GAK ADA YANG JAWAB, YANG AKTIF CUMA STIKER WKWK.\nbesok gue yang jago sendiri di kelas. doain bu gak milih random.",
    comments: [
      { authorId: 133, minutesAgo: 3827, content: "390 bener bre, gue cek dua kali wkwk" },
      { authorId: 144, minutesAgo: 3819, content: "itung pake jari ampe nyadar gak harus, itu momen bre wkwk" },
      { authorId: 149, minutesAgo: 3811, content: "besok jadi jagoan kelas bre, semangat 😭" },
      { authorId: 13, minutesAgo: 3803, content: "pake jari itu bukan aib bre wkwk" },
      { authorId: 10, minutesAgo: 3795, content: "GRUP KELAS YANG AKTIFNYA STIKER ITU UNIVERSAL WKWKWK" },
    ],
  },
  {
    id: 129,
    authorId: 29,
    minutesAgo: 3865,
    shares: 30,
    content:
      "praktik sore. om bawa sprocket beli sendiri. gigi depan 14, belakang 34.\nguru gue bilang rasio 14 banding 34 itu kira2 1 banding 2,4. artinya sekali kaki, roda muter lebih lambat, tarikan berat.\nom mau tarikan enteng buat angkat barang, tapi gak mau motor lelet. gak bisa dua2nya om.\ndigigi: depan 17, belakang tetep 34. jadi 1 banding 2. tarikan enteng, ngebut turun dikit.\nom mikir 5 detik. pasang aja.",
    comments: [
      { authorId: 183, minutesAgo: 3857, content: "rasio gigi itu matematika bengkel bro, jarang ada yang jelasin" },
      { authorId: 17, minutesAgo: 3850, content: "14 banding 34 turun ke 17 banding 34, gear ratio bener bro" },
      { authorId: 49, minutesAgo: 3843, content: "om mikir 5 detik itu setengah jalan bro" },
      { authorId: 251, minutesAgo: 3835, content: "bengkel yang ngitung rasio dulu sebelum pasang itu rares bro" },
    ],
  },
  {
    id: 130,
    authorId: 30,
    minutesAgo: 3895,
    shares: 7,
    content:
      "rumus yang si anak hafal minggu ini: persegi, persegi panjang, segitiga, trapesium, lingkaran. lima2 lancar.\npas kuberi soal campuran, taman bentuknya persegi panjang, tengahnya kolam lingkaran, dia diem.\nbukan gak hafal. dia gak tau harus ngepek rumus yang mana duluan.\nberarti latihannya bukan nambah rumus. latihannya nambah soal campuran yang bentuknya aneh2.\nminggu depan kubawain soal bentuk aneh. dia gak tau. biar kagetnya tulus.",
    comments: [
      { authorId: 84, minutesAgo: 3887, content: "anakku juga gitu kak, hafal semua bingung pas digabung 😄" },
      { authorId: 267, minutesAgo: 3880, content: "Latihan bentuk aneh itu justru cara yang tepat." },
      { authorId: 38, minutesAgo: 3872, content: "kak, soal campuran itu susah ya? aku besok kelas 6 😭" },
      { authorId: 103, minutesAgo: 3864, content: "semoga si anaknya makin lancar ya kak 🙏" },
    ],
  },
  {
    id: 131,
    authorId: 31,
    minutesAgo: 3925,
    shares: 5,
    content:
      "struk nomor 0117.\nmurid SMP beli buku tulis 5, pulpen 3. buku 4.500 per buah, pulpen 2.000. dia itung di kepala, ngomong 27.500. kutunjuk satu2: 5 kali 4.500 itu 22.500, pulpen 6.000, total 28.500. dia mikir, ketemu salahnya sendiri: dia ngali 4.000.\nbeda 1.000 doang tapi muka dia merah banget. kubilang yang penting berani cek ulang. dia jajan es teh pake sisa uangnya, senyum balik jam 4.\nkaki semutan lagi. standar.",
    comments: [
      { authorId: 14, minutesAgo: 3917, content: "murid yang ngaku salah itung sendiri itu jarang dik" },
      { authorId: 192, minutesAgo: 3910, content: "salah 1.000 muka merah, dulu kita semua gitu wkwk" },
      { authorId: 5, minutesAgo: 3902, content: "pelanggan yang cek ulang bareng itu dik, bukan pelanggan, temen itung" },
      { authorId: 141, minutesAgo: 3895, content: "5 kali 4.500 tapi kepala ngali 4.000, gue relate banget 😭" },
    ],
  },
  {
    id: 132,
    authorId: 32,
    minutesAgo: 3955,
    shares: 12,
    content:
      "yang aneh teh, yang tanya per kilo makin banyak. kangkung kujual per ikat 3 ribu. satu kilo isinya 4 ikat. tadi om tanya perkilo, kubilang 12 ribu. dia liat kangkungnya, mikir, ambil 2 ikat aja.\npadahal 2 ikat itu separo kilo teh, angkanya sama aja. yang di ikat kerasa kecil 😄\nbesok kupasang tulisan kecil: 1 kilo = 4 ikat. biar yang mikir di depan timbangan gak mikir lama2. sayurnya yang layu duluan, bukan mikirnya.",
    comments: [
      { authorId: 15, minutesAgo: 3947, content: "tulisan 1 kilo 4 ikat itu membantu teh 😄" },
      { authorId: 86, minutesAgo: 3940, content: "aku yang mikir lama di depan timbangan teh 😭" },
      { authorId: 68, minutesAgo: 3932, content: "2 ikat separo kilo, bener teh" },
      { authorId: 199, minutesAgo: 3925, content: "angka kecil kerasa murah, itu psikologi jualan teh" },
    ],
  },
  {
    id: 133,
    authorId: 33,
    minutesAgo: 3985,
    shares: 21,
    content:
      "abang kabarin sore tadi: tamu datang 6, resep sup biasanya buat 4.\nresep mama pakai air 2 liter. 2 liter itu 2000 ml. buat 6 orang kali 1,5, jadi 3 liter. air gampang.\nyang gak boleh ikut dikali 1,5 itu garam. 1 sendok teh jadi 1 setengah? gak boleh. kubikin 1 sendok, kurang tinggal ditambah. kebanyakan garam gak ada tombol batal 😄\nabang pulang bawa roti buat jaga2. supnya habis. itungan liter hari ini tepat.",
    comments: [
      { authorId: 60, minutesAgo: 3977, content: "garam gak ikut dikali, itu wisdom dapur bu 😄" },
      { authorId: 93, minutesAgo: 3970, content: "air dikali 1,5 garam dicicin, ikut catat bu 😄" },
      { authorId: 76, minutesAgo: 3962, content: "supnya habis itu nilai tertinggi bu 🙏" },
      { authorId: 21, minutesAgo: 3955, content: "kebanyakan garam mah gak ada undo bu, bener 😄" },
    ],
  },
  {
    id: 134,
    authorId: 34,
    minutesAgo: 4015,
    shares: 12,
    content:
      "jam gedung kita angka romawi. shift ganti jam 11 malem.\nIV itu empat, tapi di jam gedung ditulis IIII, tetap empat. dua2nya bener, tulisannya beda. tanya tukang kebersihan, jawabannya juga gak mutlak.\nyang jelas: tiap mau ganti shift kuberlatih baca jam gedung. kalah sama HP di saku, selisihnya 12 detik.\ndi logbook: ganti shift 23.00, aman. jam gedung masih di X.",
    comments: [
      { authorId: 193, minutesAgo: 4007, content: "IIII lawan IV, sekarang jadi kepikiran om wkwk" },
      { authorId: 276, minutesAgo: 3999, content: "Membaca jam gedung sambil menunggu shift itu latihan yang sabar." },
      { authorId: 190, minutesAgo: 3991, content: "hp menang 12 detik tiap kali om wkwk" },
    ],
  },
  {
    id: 135,
    authorId: 35,
    minutesAgo: 4045,
    shares: 2,
    content:
      "ulangan tadi ada soal 5 dibagi 0. gue isi 0. salah. kata bu, dibagi nol itu gak diperbolehkan.\ngue mikir ampe pulang. kalo 0 dibagi 5 jawabannya 0, kenapa 5 dibagi 0 malah dilarang.\ngue tanya kakak kelas. dia jawab, coba lu bagi 5 permen ke 0 orang, permenya pergi ke mana.\ngue gak nemu jawabannya ampe sekarang. permen yang hilang itu nyimpen misteri.\nbesok gue tanya bu lagi, kali ini bawa catatan.",
    comments: [
      { authorId: 13, minutesAgo: 4037, content: "5 dibagi 0 gk ada jawaban bre wkwk" },
      { authorId: 148, minutesAgo: 4029, content: "permen ke 0 orang itu jawaban terbaik wkwk" },
      { authorId: 160, minutesAgo: 4021, content: "mikirnya niat banget bre 😭" },
      { authorId: 28, minutesAgo: 4013, content: "jawaban dosen gue dulu: jangan dibagi, perkarakan bre WKWK" },
    ],
  },
  {
    id: 136,
    authorId: 36,
    minutesAgo: 4075,
    shares: 17,
    content:
      "ujian blok minggu depan: 100 soal, waktu 120 menit.\n45 detik per soal, 100 soal jadi 75 menit. sisa 45 menit buat yang ragu.\nyang ragu biasanya 20 soal, tiap soal 3 menit = 60 menit. lewat 15 menit dari jatah.\nkesimpulan itungan ini bukan gak bakal selesai. kesimpulannya: jangan pacu 45 detik, jangan nyangkut 3 menit. cari tengahnya.\nkm tau sendiri, tengah itu yang paling susah 🙃",
    comments: [
      { authorId: 211, minutesAgo: 4067, content: "tengahnya 90 detik per soal km, sisanya disiplin 🙃" },
      { authorId: 7, minutesAgo: 4060, content: "gue pake strategi 2 ronde km, gampang dulu 🙃" },
      { authorId: 217, minutesAgo: 4052, content: "itungan biar bisa tidur nyenyak wkwk" },
      { authorId: 230, minutesAgo: 4045, content: "blok mah maraton km, semangat" },
    ],
  },
  {
    id: 137,
    authorId: 37,
    minutesAgo: 4105,
    shares: 7,
    content:
      "Sudah dua minggu, tiap sore jam 4, anak SMA rumah ujung duduk di teras bareng anak SD tetangga sebelahnya. Ada papan tulis kecil, ada yang ditunjuk pakai rotan mainan.\n\nSaya tidak tahu isinya pelajaran apa. Yang kelihatan: anak SD yang tadinya mundur saat ditanya, sekarang maju, dan sorak2 kalau jawabannya benar. Yang mengajar ikut sorak.\n\nKelas yang biayanya satu papan tulis kecil dan satu sore yang panjang.",
    comments: [
      { authorId: 293, minutesAgo: 4097, content: "Sorak dua orang di teras itu kabar baik, Pak." },
      { authorId: 77, minutesAgo: 4089, content: "semoga yang mengajar makin paham juga ya Pak 🙏" },
      { authorId: 262, minutesAgo: 4081, content: "Mengajar adalah cara belajar paling cepat. Keduanya beruntung." },
      { authorId: 45, minutesAgo: 4073, content: "Papan tulis kecil itu modal besar, Bapak." },
    ],
  },
  {
    id: 138,
    authorId: 38,
    minutesAgo: 4135,
    shares: 12,
    content:
      "hari ini aku telat 4 menit. bunda hitung: berangkat jam 6.50, jalan kaki 14 menit, nyampe 7.04. jam masuk 7.00. jadinya telat 4 menit. bu guru catat nama, bintang gak dapat.\nbesok berangkat jam 6.40. jalan 14 menit nyampe 6.54. aman 6 menit.\nbunda bilang itungannya gampang, yang susah bangunnya 😅\nkalau besok gak telat, bunda janji jajan extra. aku tulis di buku: misi 6.40. besar2, biar terlihat.",
    comments: [
      { authorId: 24, minutesAgo: 4127, content: "MISI 6.40 ITU MISI BESAR. NENEK DOAIN BESOK GAK TELAT" },
      { authorId: 92, minutesAgo: 4119, content: "aman 6 menit itu cadangan anak teliti 🙏" },
      { authorId: 69, minutesAgo: 4111, content: "bangunnya memang musuh sejati kak 😄" },
      { authorId: 28, minutesAgo: 4103, content: "itungan telatnya pas kak wkwk semangat" },
    ],
  },
  {
    id: 139,
    authorId: 39,
    minutesAgo: 4165,
    shares: 15,
    content:
      "Anak tetangga tanya sore tadi: angka berapapun pangkat nol kok satu? Nol bukannya kosong?\nKujelaskan pelan: 2 pangkat 3 = 8, 2 pangkat 2 = 4, 2 pangkat 1 = 2. Tiap turun satu tangga, dibagi 2. Terus turun sampai 2 pangkat nol, yang kejadian 2 dibagi 2. Hasilnya 1.\nDia diem sejenak, lalu bilang berarti tangganya gak boleh putus.\nKurang lebih itu jawaban paling pas. Angkanya memang persis satu, tapi tangganya yang penting.",
    comments: [
      { authorId: 221, minutesAgo: 4157, content: "tangganya gak boleh putus, kusimpen buat jelasin adek wkwk" },
      { authorId: 30, minutesAgo: 4149, content: "besok ini jadi pembuka di les ya, makasih" },
      { authorId: 262, minutesAgo: 4141, content: "Penjelasan bertangga itu gampang dicerna, Pak." },
      { authorId: 7, minutesAgo: 4133, content: "gue baru paham pangkat nol dari sini, makasih pak 🙃" },
    ],
  },
  {
    id: 140,
    authorId: 40,
    minutesAgo: 4195,
    shares: 21,
    content:
      "Cucu pulang sekolah cerita ulangan hitungannya salah dikit. Ya sudah, dibantuin yang bisa.\nSore kita tanam cabe bareng. Jarak tanam 30 cm, petaknya 3 meter. Cucu itung sendiri: 3 meter itu 300 cm, 300 dibagi 30 jadi 10 lubang. Kuambil paku buat nusuk lubang, tepat 10.\nCucu bilang, ini ulangan hidup Nek.\nKagum sama Cucu, gak pamer sama cabe. Anak sekarang belajarnya banyak celahnya. kebun pun bisa jadi ruang kelas. Beneran deh.",
    comments: [
      { authorId: 107, minutesAgo: 4187, content: "300 dibagi 30 pas 10, cucunya teliti bu" },
      { authorId: 97, minutesAgo: 4179, content: "tanam sambil itung, itu kelas tanpa atap bu 😄" },
      { authorId: 110, minutesAgo: 4171, content: "Semoga cabenya deris ya bu 🙏" },
      { authorId: 88, minutesAgo: 4163, content: "ulangan hidup versi kebun, ikut kagum bu wkwk" },
    ],
  },
  {
    id: 141,
    authorId: 41,
    minutesAgo: 4225,
    shares: 26,
    content:
      "paket boneka gede tadi. ukurannya 50 kali 40 kali 40.\n50 kali 40 kali 40 = 80.000. dibagi 6.000 = 13,3. sistem minta 14 kilo.\nbenerannya? 3 kilo. isinya bulu sama udara.\npengirim gak marah, katanya biasa. boneka mahal di ukuran, murah di timbangan.\nhari ini 52 paket, satu kena tipis di lift, selamat. udara itu berat juga kalau dihitung sistem.",
    comments: [
      { authorId: 235, minutesAgo: 4217, content: "dibagi 6.000 itu volumetrik bang, gue kena juga 😭" },
      { authorId: 191, minutesAgo: 4209, content: "mahal di ukuran murah di timbangan wkwk" },
      { authorId: 27, minutesAgo: 4201, content: "di gudang juga om, dus gede isinya styrofoam" },
      { authorId: 188, minutesAgo: 4193, content: "52 paket ramai bang" },
    ],
  },
  {
    id: 142,
    authorId: 42,
    minutesAgo: 4255,
    shares: 12,
    content:
      "pengumuman di papan kos malam ini: lima dari tujuh anak ujian minggu depan. lampu kamar yang ujian boleh sampai jam 1, yang gak ujian ikut hemat sampai jam 11. kalau kamar gak ujian lampunya nyala, namanya kubaca di grup. bukan hukuman, cuma dibaca.\nyang paling ribut malah yang gak ujian: ib, adil gak lampu dihitung jam?\nadi. lampu dihitung jam, dan jam belajar juga dihitung dari biaya kuliahnya. sekalian kuingatkan: setrika jangan dipake sambil nunggu mie mateng. kamar C, maksudnya.",
    comments: [
      { authorId: 123, minutesAgo: 4247, content: "lampu dihitung jam, belajar juga dihitung. adil ib 😄" },
      { authorId: 212, minutesAgo: 4239, content: "bukan hukuman cuma dibaca, itu versi lebih ngeri wkwk" },
      { authorId: 214, minutesAgo: 4231, content: "kamar C dan setrika, takdir yang sama ib 😅" },
      { authorId: 310, minutesAgo: 4223, content: "semoga yang ujiannya lolos semua ya ib 🙏" },
      { authorId: 266, minutesAgo: 4215, content: "Aturan yang jelas itu bentuk perhatian juga." },
    ],
  },
  {
    id: 143,
    authorId: 43,
    minutesAgo: 4285,
    shares: 5,
    content:
      "anak magang SMK masuk line hari ini. nanya banyak. satu gak terjawab: om, kalau mesin berhenti kenapa kita tetep kerja.\nkujawab sambil nunjuk papan target: 1.200 unit. jam 6 baru 900. mesin berhenti 20 menit siang tadi. artinya 300 unit sisa wajib jalan.\nmakan jeda 15 menit, mesin yang kejar. mesin yang berhenti, kita yang kejar.\nbesok dia nyambung sendiri alurnya. bagus.",
    comments: [
      { authorId: 246, minutesAgo: 4277, content: "pertanyaan anak magang tuh tajam om" },
      { authorId: 192, minutesAgo: 4269, content: "mesin berhenti 20 menit, unitnya yang ngutang om" },
      { authorId: 233, minutesAgo: 4261, content: "300 unit sisa itu lembur om 😭" },
      { authorId: 29, minutesAgo: 4253, content: "om, anak SMK nunggu jadwal magang. doain kena line yang jelasin" },
    ],
  },
  {
    id: 144,
    authorId: 44,
    minutesAgo: 4315,
    shares: 30,
    content:
      "malam ini gue baca label mie sebelum masak. per sajian 350 kkal, satu bungkus 2 sajian, gue masak 2 bungkus. berarti 1.400 kkal. gue berdiri liat angka itu, terus tetep masak 2 bungkus wkwk.\nlalu kupikir gimana ngurangin dosanya: kuah gak abisin. kuah itu dihitung gak ya. gue gak tau. gue cuma anak kos yang belajar angka dari label makanan.\nakhirnya ditambah telur rebus. telur rebus 90 kkal. angka naik, hati senang. matematis bermasalah, psikologis menyembuhkan wkwk",
    comments: [
      { authorId: 50, minutesAgo: 4307, content: "GUYS KALORI TIDAK DIHITUNG KALAU TIDAK DILIHAT JURAGAN WKWK" },
      { authorId: 128, minutesAgo: 4299, content: "kuah itu nol kkal bre, katanya 😭" },
      { authorId: 146, minutesAgo: 4291, content: "telur rebus 90 kkal worth it bre" },
      { authorId: 229, minutesAgo: 4283, content: "baca label sebelum masak itu upgrade kos bre" },
      { authorId: 2, minutesAgo: 4275, content: "GUE GAK BERANI BACA LABEL. HIDUP GUE TENANG WKWK" },
    ],
  },
  {
    id: 145,
    authorId: 45,
    minutesAgo: 4345,
    shares: 7,
    content:
      "Cucu saya datang bawa PR: tiga perempat dari 60. Dia punya cara sendiri yang bikin pusing.\nSaya ambil kertas dan pensil. Enam puluh dibagi 4, hasilnya 15. Lima belas dikali 3, jadi 45. Satu per satu di atas kertas, seperti dulu di sekolah.\nCara kakek lama, katanya. Kertas ini bisa dilihat, saya menjawab.\nAngka 45 kami tulis besar2. Pajangan di rumah ini sudah lama tidak bertambah. Malam ini bertambah satu.",
    comments: [
      { authorId: 96, minutesAgo: 4337, content: "cara pensil yang bisa dilihat itu warisan Pak 🙏" },
      { authorId: 11, minutesAgo: 4329, content: "45 bener. prosesnya dipajang, lebih bener lagi." },
      { authorId: 274, minutesAgo: 4321, content: "Pajangan bertambah satu. Selamat, Bapak." },
      { authorId: 48, minutesAgo: 4313, content: "Kertas dan pensil tidak pernah keliru, Pak." },
    ],
  },
  {
    id: 146,
    authorId: 46,
    minutesAgo: 4375,
    shares: 12,
    content:
      "tugas sore ini: salin nilai ulangan ke komputer. 3 kelas, tiap kelas 31 anak, kolomnya 8. 3 kali 31 kali 8 = 744 kotak.\nmulai jam 1, selesai jam 3.20. sepuluh menit terakhir itu pengumuman kantor tutup, tangan makin cepet 😅\nsatu nilai gak kebaca di fotokopi. kutelfon guru kelasnya, jawaban datang 4 menit: 86.\n744 kotak itu urusan administrasi. angka 86 itu urusan seorang anak yang minggu lalu minta remedial. semoga dia liat nilai barunya hari ini.",
    comments: [
      { authorId: 61, minutesAgo: 4367, content: "744 kotak itu perjuangan senyap kak 😅" },
      { authorId: 73, minutesAgo: 4359, content: "kak, nilai yang udah masuk komputer bisa dilihat ortunya gak?" },
      { authorId: 89, minutesAgo: 4351, content: "4 menit jawaban 86, cepet banget kak" },
      { authorId: 63, minutesAgo: 4343, content: "semoga anaknya bangga liat nilai baru ya kak 🙏" },
    ],
  },
  {
    id: 147,
    authorId: 47,
    minutesAgo: 4405,
    shares: 5,
    content:
      "siswa SMA datang jam 3 bawa kotak bekas sepatu. mau buka tabungan pertama.\nisinya: koin 500 sebanyak 28, koin 200 sebanyak 40, lembar 1 ribu 3. kuhitung dua kali: 25 ribu tepat. dia ikut ngitung sambil liat layar.\nformulir ditulis pelan, huruf tegak. nama bapaknya ditulis dua kali biar gak goyang.\nkartunya keluar, dia foto dulu sebelum masuk dompet.\nnasabah muda pertama hari ini. semoga kotak sepatu kedua cepet penuh.",
    comments: [
      { authorId: 265, minutesAgo: 4397, content: "kotak sepatu 25 ribu itu berbulan nahan jajan non" },
      { authorId: 278, minutesAgo: 4389, content: "foto kartu dulu wkwk, itu reaksi paling jujur" },
      { authorId: 16, minutesAgo: 4381, content: "yang buka tabungan sendiri uangnya sendiri, biasanya lanjut non 😄" },
      { authorId: 280, minutesAgo: 4373, content: "Semoga tabungannya lancar, Non." },
    ],
  },
  {
    id: 148,
    authorId: 48,
    minutesAgo: 4435,
    shares: 21,
    content:
      "Tiga anak datang petang tadi membawa buku PR. Katanya listrik di rumah mati sejak siang.\nMereka memilih meja dekat jendela, karena cahayanya paling tinggi. Satu bangku dipakai, satu buku tumpuk menjadi alas duduk yang keempat. Tidak ada yang menyuruh mereka diam; perpustakaan petang memang tempat yang bekerja.\nSaya mencatat pengunjung: empat tempat duduk dipakai untuk tiga anak. Satu kursi kosong bukan karena tak ada yang butuh, tetapi karena buku lebih nyaman daripada kayu.",
    comments: [
      { authorId: 281, minutesAgo: 4427, content: "Buku sebagai alas duduk itu kejadian langka, Pak." },
      { authorId: 45, minutesAgo: 4419, content: "Tiga anak dan satu jendela itu cukup, Pak." },
      { authorId: 289, minutesAgo: 4411, content: "listrik mati tapi PR jalan, itu anak tangguh Pak" },
      { authorId: 297, minutesAgo: 4403, content: "Semoga listrik pulang lebih cepat daripada kebiasaan membaca mereka." },
    ],
  },
  {
    id: 149,
    authorId: 49,
    minutesAgo: 4465,
    shares: 5,
    content:
      "sore ini murid SMA dateng 3, satu sekolah. katanya ulangan besok, jambang diangkat biar fokus.\ngue bilang fokus tuh gak tinggal di rambut. tetep dipotong. dua2nya rapi.\nhari ini kepala 11: 8 biasa 13 ribu, 3 pelajar 10 ribu. kekumpul 134 ribu.\nrambut sisa digebas rapet biar gak jadi debu. besok kalau murid lain dateng bawa alasan fokus juga, gue terima aja. alasan boleh aneh, gunting yang harus bener.",
    comments: [
      { authorId: 194, minutesAgo: 4457, content: "cukur sebelum ulangan itu ritual resmi pelajar om wkwk" },
      { authorId: 232, minutesAgo: 4449, content: "8 kali 13 plus 3 kali 10, 134 ribu pas om" },
      { authorId: 127, minutesAgo: 4441, content: "tarif pelajar 10 ribu itu diskon semangat om 😭" },
      { authorId: 183, minutesAgo: 4433, content: "alasan boleh aneh gunting yang harus bener, quote om" },
    ],
  },
  {
    id: 150,
    authorId: 50,
    minutesAgo: 4495,
    shares: 26,
    content:
      "GUYS laporan masak terbesar kos ini: 4 orang, 6 bungkus mie, air 2,5 liter.\nitungannya: tiap bungkus butuh air 400 ml, 6 kali 400 = 2.400 ml. bulatin 2,5 liter. pas.\nyang gak masuk itungan: dimasak pelan2, air nyusut 200 ml, mie ke 5 dan 6 minum air lebih. hasil: 4 porsi nyaris, 1 porsi susah didefinisikan.\ntemen bawa kerupuk 1 bungkus, dibagi 4, tiap orang 3 biji plus 1 buat juragan. GUYS. kerupuk pun dihitung. kos ini sudah maju.",
    comments: [
      { authorId: 160, minutesAgo: 4487, content: "1 porsi susah didefinisikan wkwkwk" },
      { authorId: 162, minutesAgo: 4479, content: "kerupuk 3 plus 1 buat juragan, sistem paling adil guys 😭" },
      { authorId: 126, minutesAgo: 4471, content: "air nyusut itu musuh masak rame bre" },
      { authorId: 150, minutesAgo: 4463, content: "4 orang 6 bungkus, otak kos bekerja wkwk" },
      { authorId: 164, minutesAgo: 4455, content: "besok catat rasio kerupuk juga juragan wkwk" },
    ],
  },
]
