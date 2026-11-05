import type { ThreadzThread } from "../types"

// PART 8: cuitan 176-200. Post ketiga penulis 26-50. Batch 4 menuju 1000
// (protokol: dev.sh, riset: scripts/sidik-jari.md).
//
// Aturan user aktif batch ini:
//  - NARASI CONDONG PELAJAR: keluh kesah & aktivitas sekolah tetap dominan
//    (median kelas, rapor, PKL bengkel, PR fisika, kalender les, rapat
//    abensi, PR sejarah cucu, anak SMP di angkot). Aspek matematika inti.
//  - REALITAS KERAS + ATURAN BARU POST-CASUS 29: tiap cuitan wajib ada angka
    //    yang dipakai untuk sesuatu; dilarang mantra pengulangan "X, X, X";
    //    ending wajib ada gesekan; kutipan maksimal satu.
//  - SATU KARAKTER SATU MODEL: model ketiga tiap penulis beda dari dua post
//    sebelumnya (dicek lawan tabel BATCH 2 & buku besar).
//
// Topik batch ini (semua baru): pendapatan angkot sore, kapasitas rak dus
// 4x6 sisa lantai, median kelas vs nilai sendiri, jadwal servis 2.000 km
// dibagi rute harian, rata-rata rapor 5 nilai, diskon bundling vs satuan,
// rata belanja 4 minggu langganan, takaran es teh 1:8 hasil komplain,
// interval adzan dibagi putaran ronde, bak bocor 15-3 liter, jadwal jaga
// 30 hari dibagi 4 co-as, waktu tempuh sepeda tiga pagi, pola kalender les
// naik 7, skala denah 1:100, untung kecil kangkung, ganjil-genap nomor
// rumah 1-77, bon warung kos dibagi rata, hitung mundur gajian, timer mie
// 3 menit vs tidur 40, gaji dulu vs pensiun sekarang, persen abensi rapat,
// setoran tetap menuju 2 juta, pola tahun terbit perpustakaan, kapasitas
// cukur 14 kepala x 15 menit, stok mie 43 bungkus habis 3 hari.
export const THREADS_PART8: ThreadzThread[] = [
  {
    id: 176,
    authorId: 26,
    minutesAgo: 5275,
    shares: 14,
    content:
      "sore tadi 18 penumpang. dua anak SMP bareng, tarif dua2nya 6.000, bayar 10.000, kubalikin 4.000 pake dua lembar 2.000. kepepet, 500-an udah gak ada.\nnah yang satu ngeyel, katanya pas dia SD dulu tarif 2.500. bro, itu masa-masa rute masih muter pasar.\nkas sore: 18 kali 3.000 = 54.000. bensin 12.000. sisa 42.000.\nbesok senin pagi pasti penuh lagi. bro.",
    comments: [
      { authorId: 131, minutesAgo: 5267, content: "tarif 3 ribu masih murah bang, di rute gue udah 4 ribu wkwk" },
      { authorId: 183, minutesAgo: 5259, content: "yang ngeyel tarif 2.500 itu ingetannya jadul bro wkwk" },
      { authorId: 244, minutesAgo: 5251, content: "54 ribu minus bensin masih sisa 42, itu udah bagus bang" },
    ],
  },
  {
    id: 177,
    authorId: 27,
    minutesAgo: 5305,
    shares: 9,
    content:
      "rak baru kelar dipasang: 4 susun, 6 kolom. muat 24 dus.\ndateng 31. 24 masuk rak, 7 nginep di lantai deket pintu. tukang angkut minta istirahat jam 11, katanya 'laper om', makanya motornya dia sandar nempel rak.\nresi 9012 sampai 9041, itu 30 lembar, satu gak ketemu. nanti sore kucari di antara dus kamar mandi.\nkalau gak ketemu juga, besok kutulis di papan: yang naro dus kamar mandi tolong dicatat.",
    comments: [
      { authorId: 191, minutesAgo: 5297, content: "7 dus di lantai itu tameng kaki om, hati2 pas balik badan" },
      { authorId: 196, minutesAgo: 5289, content: "resi yang gak ketemu biasanya muncul di tempat paling jelas nanti om wkwk" },
      { authorId: 34, minutesAgo: 5281, content: "papan 'tolong dicatat' itu efektif om, di pos juga gitu" },
    ],
  },
  {
    id: 178,
    authorId: 28,
    minutesAgo: 5335,
    shares: 22,
    content:
      "PR statistik: median nilai ulangan kelas. gue 71. median kelas 74. GUE DI BAWAH MEDIAN KELASNYA SENDIRI WKWKWK. artinya lebih dari setengah kelas di atas gue.\nguru bilang median itu gak ngehakimi, dia cuma nunjuk urutan. temen sebangku bilang 'nomor urutan lo itu yang ngehakimi'.\nterus kita itung bareng: 32 anak, median itu rata2 nilai anak ke-16 sama ke-17. dua orang itu diem aja padahal mereka simpanan rahasia kelas wkwk.\nbesok ulangan lagi. target gue: lewat median aja dulu. jangan langsung juara, capek",
    comments: [
      { authorId: 133, minutesAgo: 5327, content: "di bawah median itu sakit bre, bukan gagal tapi sakit wkwk" },
      { authorId: 145, minutesAgo: 5319, content: "anak ke-16 sama ke-17 pasti tau banyak rahasia kak 😭" },
      { authorId: 160, minutesAgo: 5311, content: "target lewat median itu target yang bisa dijalani kak, kalem" },
      { authorId: 10, minutesAgo: 5303, content: "MEDIAN ITU KAYAK PAPAN SKOR BRE. GAK BICARA CUMA NUNJUK WKWK" },
    ],
  },
  {
    id: 179,
    authorId: 29,
    minutesAgo: 5365,
    shares: 11,
    content:
      "om suruh bikin karton jadwal servis buat 5 motor langganan. katanya selalu lupa kapan terakhir ganti oli.\nmotor hitam: servis tiap 2.000 km. rute om tiap hari 25 km. 2.000 dibagi 25 = 80 hari. kubulis di karton: hari ke-80.\nom gak percaya bisa sejauh itu. dia cek speedometer sendiri, rata2 emang 25. terus dia diem lama, kayak baru sadar kilometernya udah lewat batas dari bulan lalu.\nkarton ketempel di meja om. lima motor, lima angka. sisanya biar om yang jaga.",
    comments: [
      { authorId: 187, minutesAgo: 5357, content: "2.000 dibagi 25 = 80 hari itu bener om, mantau speedometer doang gak cukup" },
      { authorId: 238, minutesAgo: 5349, content: "karton tempel itu sistem om, di gudang juga kayak gitu" },
      { authorId: 199, minutesAgo: 5341, content: "om yang diem lama itu baru sadar motornya udah kelewatan wkwk" },
    ],
  },
  {
    id: 180,
    authorId: 30,
    minutesAgo: 5395,
    shares: 6,
    content:
      "si anak les hari ini bawa rapor. minta diitung rata-ratanya, katanya di rumah masing2 beda pendapat.\nkutulis kolom: 78, 71, 84, 69, 73. jumlah 375. dibagi lima, 75.\ndia diem, terus nanya yang mana yang paling murah buat dinaikin. murah. itu kosakata baru buat nilai.\nkubilang 69 ke 75 bedanya enam poin, satu ulangan doang. dia manggut, terus nanya tarif les naik gak kalau nilai naik.\ntarif tetap. anak yang nilai naik cuma dapat senyum tambah.",
    comments: [
      { authorId: 84, minutesAgo: 5387, content: "'yang paling murah buat dinaikin' itu anaknya jago nalar kak 😄" },
      { authorId: 71, minutesAgo: 5379, content: "rata 75 itu bagus kak, 69 ke 75 memang satu ulangan" },
      { authorId: 267, minutesAgo: 5371, content: "Anak yang bertanya soal angka sendiri sudah setengah jalan." },
    ],
  },
  {
    id: 181,
    authorId: 31,
    minutesAgo: 5425,
    shares: 8,
    content:
      "shampo 18.000, kondisioner 18.000. terpisah 36.000.\npaket dua2nya 32.000. selisih 4.000. pembeli pilih paket, terus nanya kok bisa lebih murah. kujawab: yang bikin paket itu yang jualan, bukan yang ngitung.\nom gudang malah kebalikannya: yang satuan stok numpuk. dia minta paketnya diundur dua minggu, biar yang satuan keangkat dulu.\nstruk nomor 0093 kemarin, sekarang 0118. 25 lembar sampai jam 4. kaki semutan lagi.",
    comments: [
      { authorId: 235, minutesAgo: 5417, content: "selisih 4 ribu dik, kalau sehari 25 lembar itu banyak" },
      { authorId: 60, minutesAgo: 5409, content: "paket memang jalan dik, tapi stok satuan tuh nyusul ilangnya 😄" },
      { authorId: 246, minutesAgo: 5401, content: "om gudang paham banget rasanya jadi yang simpen stok dik" },
    ],
  },
  {
    id: 182,
    authorId: 32,
    minutesAgo: 5455,
    shares: 13,
    content:
      "buku catatan langganan kucek malam ini. bu ratih belanja tiap minggu: 68, 72, 65, 75 ribu. jumlah 280, rata-rata 70 ribu seminggu.\nminggu ini cuma 58. bu-nya ke luar kota nengok anak pertama. kangkungnya kujual ke warung teh eti, sisanya buat sendiri.\njadi gitu teh, rata-rata itu enak buat itung, tapi yang bikin jalan tetep jalan itu minggu kayak gini: sepi, catatannya tetep rapi.",
    comments: [
      { authorId: 86, minutesAgo: 5447, content: "ratanya 70 teh, tapi yang bikin langganan tetep rasa sayurnya 😄" },
      { authorId: 69, minutesAgo: 5439, content: "bu ratih balik pasti langsung nyari teh gitu" },
      { authorId: 101, minutesAgo: 5431, content: "kangkung sisa buat sendiri itu rezeki sendiri teh 🙏" },
    ],
  },
  {
    id: 183,
    authorId: 33,
    minutesAgo: 5485,
    shares: 15,
    content:
      "abang komplain es teh rumah ke manisan minggu lalu. takaran lama: gelas 220 ml, sirup 35 ml, air 185. ke manis katanya.\nkemarin kucoba takaran baru: sirup 25, air 195. jadi kira-kira satu banding delapan. abang minum dua gelas tanpa komentar, cuma minta gelas ketiga.\nterus dia bilang, 'yang gini aja terus, jangan ganti lagi.'\ndua gelas ekstra itu bayaran testing yang paling laris. takaran 25-195 kutulis di dinding dapur, siapa pun yang masak harus nurut.",
    comments: [
      { authorId: 65, minutesAgo: 5477, content: "abangku juga gitu bu, manisnya dikomentarin, gelasnya dua wkwk" },
      { authorId: 93, minutesAgo: 5469, content: "takaran di dinding dapur itu wajib bu, biar gak ganti2 😄" },
      { authorId: 248, minutesAgo: 5461, content: "satu banding delapan itu pas bu, es teh kantin kantor juga gitu" },
    ],
  },
  {
    id: 184,
    authorId: 34,
    minutesAgo: 5515,
    shares: 7,
    content:
      "maghrib jam 5.53, isya jam 7.18. jeda 1 jam 25 menit. kubagi: ronde 6 menit, duduk catat 4 menit, satu putaran 10 menit.\n85 menit dibagi 10 = 8 putaran, sisa 5. lima menit itu buat liat langit, bukan buat tidur.\njam 7.20 ronde terakhir. kucing pos ikut sampai gerbang, terus berhenti. dia gak dijadwalin, tapi dia gak pernah telat.",
    comments: [
      { authorId: 174, minutesAgo: 5507, content: "8 putaran 80 menit itu efektif om, sisanya buat langit yang bikin betah" },
      { authorId: 192, minutesAgo: 5499, content: "kucing pos gak telat itu standar wajib om wkwk" },
      { authorId: 27, minutesAgo: 5491, content: "duduk catat 4 menit itu bagian kerja juga om, bukan sisa" },
    ],
  },
  {
    id: 185,
    authorId: 35,
    minutesAgo: 5545,
    shares: 3,
    content:
      "PR fisika: bak 300 liter, keran ngeluarin 15 liter tiap menit, tapi baknya bocor 3 liter tiap menit.\ngue hitung sambil mandi: yang bener2 masuk cuma 12. 300 dibagi 12, 25 menit penuh.\nterus gue mikir: bocornya 3 liter, 25 menit, jadi 75 liter mubazir. setengah bak kecil mubazir cuma buat ngisi bak besar.\nkertas hitungannya sobekan buku pkn, kecipir air. gue tempel di dinding deket cermin. biar kakak liat, soalnya dia yang buka keran paling lebar.",
    comments: [
      { authorId: 126, minutesAgo: 5537, content: "75 liter mubazir itu banyak bre, setengah bak kecil 😭" },
      { authorId: 150, minutesAgo: 5529, content: "hitung sambil mandi itu seru bre, kertasnya mah jangan kecipir wkwk" },
      { authorId: 139, minutesAgo: 5521, content: "KAKAK YANG BUKA KERAN LEBAR ITU PELAKU UTAMA WKWKWK" },
    ],
  },
  {
    id: 186,
    authorId: 36,
    minutesAgo: 5575,
    shares: 18,
    content:
      "jadwal jaga bulan depan kelar. 30 hari, 4 co-as, dibagi rata. 30 dibagi 4 = 7,5. manusia gak bisa jaga setengah hari, jadi dua orang 8, dua orang 7.\ngue dapet 8. salah satu night-nya nempel deadline usulan skripsi. km tau gak rasanya jaga sampai subuh terus buka laptop ngetik usulan 🙃\nyang dapet 7 ngajak barter: dia ambil jaga tanggal 24, gue ambil tanggal 2 bulan depan. barter tapi tanggalnya geser, km.\nsemalem gue hitung ulang pake kalender dua kali. dua-duanya hasil sama: gue tetep 8 🙃",
    comments: [
      { authorId: 215, minutesAgo: 5567, content: "7,5 jadi 8/8/7/7 itu hukumnya km, semoga barternya gak batal 🙃" },
      { authorId: 217, minutesAgo: 5559, content: "jaga sampai subuh terus buka laptop itu level kedua panik 🙃 semangat" },
      { authorId: 229, minutesAgo: 5551, content: "hitung dua kali hasilnya sama itu paling nyakitin 🙃" },
    ],
  },
  {
    id: 187,
    authorId: 37,
    minutesAgo: 5605,
    shares: 6,
    content:
      "Anak rumah sebelah minggu ini mulai berangkat sekolah naik sepeda. Saya hitung sambil menyapu halaman: Senin 11 menit, Rabu 13, Jumat 12. Rata-rata 12 menit.\nSebelumnya dia berjalan kaki, 25 menit. Sepeda menghemat 13 menit setiap pagi. Dari jendela, dia terlihat mendorong sepeda di jalan menurun, mungkin karena tidak berani melaju cepat.\nTiga hari itu tidak pernah sama persis. Jalan yang sama, pagi yang berbeda. Mungkin anak-anak menghitung waktu dengan cara yang berbeda dari kita.",
    comments: [
      { authorId: 293, minutesAgo: 5597, content: "Rata-rata 12 menit dari tiga pagi itu pengamatan yang tenang, bukan menuduh." },
      { authorId: 281, minutesAgo: 5589, content: "Anak-anak memang punya jam sendiri untuk jalan yang sama." },
      { authorId: 196, minutesAgo: 5581, content: "hemat 13 menit itu bisa buat sarapan lebih lama om wkwk" },
    ],
  },
  {
    id: 188,
    authorId: 38,
    minutesAgo: 5635,
    shares: 11,
    content:
      "aku liatin kalender dinding ke bunda. les aku tiap 7 hari sekali: tanggal 3, terus 10, terus 17, terus 24. naik 7 terus. aku itung pake jari, nggak salah.\nterus dari tanggal 24 kok minggu berikutnya jadi tanggal 1 di bulan baru. bunda bilang itu namanya ganti bulan, matematikanya tetep naik 7, cuma ditulis ulang.\naku masih mikirin: kok angka bisa naik terus tiba2 kebalik jadi 1. bunda ketawa, katanya waktu itu bulat, bukan tangga.",
    comments: [
      { authorId: 92, minutesAgo: 5627, content: "waktu itu bulat bukan tangga, kata bunda itu bagus banget nak 🙏" },
      { authorId: 24, minutesAgo: 5619, content: "TANGGAL 24 KE 1 BUKAN SALAH. BULANNYA YANG BALIK. NENEK DOAIN LESNYA LANJUT" },
      { authorId: 126, minutesAgo: 5611, content: "itung pake jari itu bener nak, lebih akurat dari pikiran wkwk" },
    ],
  },
  {
    id: 189,
    authorId: 39,
    minutesAgo: 5665,
    shares: 9,
    content:
      "Tetangga bawa denah rumah, tanya luas tanahnya. Di kertas: 12 cm kali 9 cm. Skala 1:100, jadi 12 m kali 9 m. 108 m persegi. Kurang lebih 108. Persisnya juga 108.\nDia bingung kenapa saya yakin. Jawabannya sederhana: skala itu janji ukuran, bukan perkiraan. Kertas kecil cuma menyimpan rumah yang lebih besar.\nBesok saya diundang melihat tanahnya langsung. Mungkin di sana saya ketemu angka yang tidak rapi, seperti biasa.",
    comments: [
      { authorId: 262, minutesAgo: 5657, content: "Skala itu janji ukuran, kalimat yang layak ditempel di ruang gambar." },
      { authorId: 274, minutesAgo: 5649, content: "108 m persegi itu untung, angka yang gak rapi biasanya di lapangan." },
      { authorId: 221, minutesAgo: 5641, content: "'kurang lebih 108, persisnya juga 108' wkwk ini gaya om yang khas" },
    ],
  },
  {
    id: 190,
    authorId: 40,
    minutesAgo: 5695,
    shares: 14,
    content:
      "BEnih kangkung beli 8 ribu, ya. Panen kemarin jadi 14 ikat. DIJUAL 2 ribu per ikat, jadi 28 ribu. Untung 20 ribu.\n20 ribu itu kecil ya. Tapi itu dari tanah belakang yang dulu buang sampah. Kucing tetangga garuk dua polybar, satu poly tinggal 3 batang. Ya sudah, saya tancap ulang.\nKAngkung gak nyuruh siapa2, dia tumbuh doang. Itu yang bikin kagum.",
    comments: [
      { authorId: 107, minutesAgo: 5687, content: "untung 20 ribu dari tanah belakang itu besar bu, bukan kecil 🙏" },
      { authorId: 97, minutesAgo: 5679, content: "kucing garuk poly itu pengeluaran gak dibayar bu wkwk" },
      { authorId: 316, minutesAgo: 5671, content: "kangkung tumbuh doang tanpa nyuruh itu bener bu, tanah gak pandai ngeluh" },
    ],
  },
  {
    id: 191,
    authorId: 41,
    minutesAgo: 5725,
    shares: 21,
    content:
      "paket sore: satu blok rumah, nomor 1 sampai 77.\nganjil kanan: 39 rumah. genap kiri: 38. selisih satu. bloknya sama panjang.\n77 itu ganjil terakhir, jadi kanan dapet satu ekstra. yang dapet nomor 77 ternyata toko bakso. ramai. yang nomor 2 rumah kosong udah setahun.\nsatu rumah selisih, satu kehidupan beda. eh. itu mah bukan matematika ya. lanjut anter.",
    comments: [
      { authorId: 235, minutesAgo: 5717, content: "39 lawan 38 itu selisih satu yang bikin mikir bang wkwk" },
      { authorId: 146, minutesAgo: 5709, content: "toko bakso nomor 77 itu untung satu angka bre 😭" },
      { authorId: 229, minutesAgo: 5701, content: "'eh itu mah bukan matematika ya' wkwk relatable banget bang" },
    ],
  },
  {
    id: 192,
    authorId: 42,
    minutesAgo: 5755,
    shares: 10,
    content:
      "warung deket kos ngirim bon bulanan anak-anak. total 1.240 ribu tujuh kamar. dibagi rata kira-kira 177 ribu per anak.\ntapi bon gak rata. kamar A 80, kamar B 95, kamar C 300 ribu. lagi. yang di kamar C beli sarden sama kopi sachet sepuluh, katanya stok bulanan.\nkubilang stok boleh, tulis bon sendiri, jangan numpuk ke bon kamar. dia manggut manggut, es tehnya masih dipegang.\nbesok kupasang lembar bon di dinding dapur. tulis sendiri, bayar sendiri, tanggal 1. selesai urusan.",
    comments: [
      { authorId: 248, minutesAgo: 5747, content: "bon stok bulanan itu wajar ib, tapi tulis sendiri memang lebih adil" },
      { authorId: 60, minutesAgo: 5739, content: "lembar bon di dinding dapur itu bikin tenang ib 😄" },
      { authorId: 118, minutesAgo: 5731, content: "kamar C lagi ib wkwk, sarden sama kopi itu makanan pokok anak kos" },
    ],
  },
  {
    id: 193,
    authorId: 43,
    minutesAgo: 5785,
    shares: 5,
    content:
      "tanggal 22. gajian tanggal 5. sisa 13 hari. hari kerja 9, sisanya minggu.\nkuitung bukan buat sabar, buat atur: mie ayam depan pabrik 12 ribu. 9 hari kerja kalau semua beli = 108 ribu. cukup segitu, lebihnya buat bensin.\nmesin nomor 4 kemarin udah diganti sepatu remnya. suaranya balik normal.\nyang jelas tanggal 5 gak boleh molo di ATM. sisanya nyusul.",
    comments: [
      { authorId: 246, minutesAgo: 5777, content: "108 ribu mie ayam itu angka yang sadar om wkwk" },
      { authorId: 238, minutesAgo: 5769, content: "gak molo di ATM tanggal 5 itu target yang bisa dipegang om" },
      { authorId: 192, minutesAgo: 5761, content: "sepatu rem diganti suara balik normal itu untung besar om" },
    ],
  },
  {
    id: 194,
    authorId: 44,
    minutesAgo: 5815,
    shares: 26,
    content:
      "mie rebus itu 3 menit. gue micu 3 menit, terus ke kamar ambil charger. charger gak ada, gue duduk sebentar. sebentar itu ternyata 40 menit.\nhasilnya bukan mie. hasilnya bubur rasa kaleng. micunya masih bunyi pas gue bangun, kayak lagi nyalahin gue wkwk.\nitungannya begini: air ngebu 3 menit, manusia tidur 40 menit, selisih 37 menit. 37 menit itu cukup buat mengubah genre masakan wkwk.\nbesok micunya kutaro di luar kamar. gak boleh deket kasur.",
    comments: [
      { authorId: 126, minutesAgo: 5807, content: "selisih 37 menit itu genre berubah bre wkwk" },
      { authorId: 150, minutesAgo: 5799, content: "micu deket kasur itu jerat bre, gue pernah dua kali wkwk" },
      { authorId: 312, minutesAgo: 5791, content: "bubur rasa kaleng itu menu baru bre, jual aja" },
    ],
  },
  {
    id: 195,
    authorId: 45,
    minutesAgo: 5845,
    shares: 8,
    content:
      "Cucu saya punya PR sejarah: tanyakan harga jaman dulu. Dia bertanya sambil mencatat, 'Kaki, dulu bensin berapa?'\nSaya jawab jaman muda saya, gaji sebulan 300. Dia berhenti menulis, terus menghitung: pensiunan sekarang sekitar 1,9 juta. 1,9 juta dibagi 300, lebih dari 6 ribu kali.\nDia bertanya, hidup dulu lebih susah atau sekarang? Saya tidak menjawab dengan angka. Angka 6 ribu kali itu terlalu besar buat dipakai menilai hidup.\nPR-nya saya tandatangani, dengan catatan kecil: sumber dari kaki sendiri.",
    comments: [
      { authorId: 293, minutesAgo: 5837, content: "Angka 6 ribu kali memang terlalu besar buat menilai hidup, Pak. Jawaban yang bijak." },
      { authorId: 96, minutesAgo: 5829, content: "PR sejarah yang sumbernya kaki sendiri itu langka Pak 🙏" },
      { authorId: 281, minutesAgo: 5821, content: "Cucu yang bertanya harga jaman dulu itu ikut menyimpan sejarah, Pak." },
    ],
  },
  {
    id: 196,
    authorId: 46,
    minutesAgo: 5875,
    shares: 12,
    content:
      "rapat sore tadi 1 jam 40 menit. agenda satu: persen kehadiran bulan ini.\n7A 92, 7B 88, 8A 81. rata tiga kelas 87. kelas 8A keberatan, katanya angkanya kejam. 21 anak dari 26 datang, itu 80,77, dibulatkan 81. kejam tapi benar 😅\nhasil rapat: tiap Jumat wali kelas kirim satu angka, biar gampang dibaca.\nyang nulis menit rapat lagi saya. pekerjaan kecil yang memanggil-manggil.",
    comments: [
      { authorId: 73, minutesAgo: 5867, content: "21 dari 26 dibulatkan 81 itu jujur kak, kelasnya gak bisa protes 😄" },
      { authorId: 61, minutesAgo: 5859, content: "satu angka tiap Jumat itu enak dibaca kak 🙏" },
      { authorId: 267, minutesAgo: 5851, content: "Menit rapat yang panjang biasanya berisi keputusan yang pendek." },
    ],
  },
  {
    id: 197,
    authorId: 47,
    minutesAgo: 5905,
    shares: 5,
    content:
      "nasabah pertama pagi ini ibu yang setor 10 ribu tiap hari kerja. hari ini dia nanya, kalau sebulan 24 hari kerja, kapan sampai 2 juta.\nkuitung di kertas: 10 ribu kali 24 = 240 ribu sebulan. 2 juta dibagi 240 ribu = 8 bulan lebih.\ndia bilang, 'lama ya non.' kubilang lama tapi jalan terus. dia manggut, setor 10 ribu, pamit, bilang bulan depan lagi.\nrekeningnya sekarang 1,14 juta. bukan angka besar. tapi tiap angka di situ dia yang bawa jalan kaki.",
    comments: [
      { authorId: 274, minutesAgo: 5897, content: "Lama tapi jalan terus itu jawaban yang tepat untuk nasabah yang sabar." },
      { authorId: 199, minutesAgo: 5889, content: "1,14 juta dari setor 10 ribu tiap hari itu bukan angka kecil non" },
      { authorId: 65, minutesAgo: 5881, content: "ibu setor itu seperti saya non 😄 jajan dikit, setor diutamain" },
    ],
  },
  {
    id: 198,
    authorId: 48,
    minutesAgo: 5935,
    shares: 15,
    content:
      "Rak ensiklopedia tua saya rapikan sore tadi. Tahun terbitnya berbaris: 1987, 1994, 2001, 2008. Tiap tujuh tahun sekali pengadaan.\nBuku tertua umurnya 39 tahun. Termuda 18. Keduanya berdiri di rak yang sama, sama-sama belum pernah hilang.\nTahun depan ada pengadaan atau tidak, saya tidak tahu. Yang jelas tujuh tahun itu sudah membuat empat generasi anak berhenti di rak yang sama.",
    comments: [
      { authorId: 256, minutesAgo: 5927, content: "Empat generasi berhenti di rak yang sama itu kalimat yang tenang, Pak." },
      { authorId: 293, minutesAgo: 5919, content: "39 tahun dan 18 tahun di rak yang sama, itu memang perpustakaan." },
      { authorId: 45, minutesAgo: 5911, content: "Saya dulu punya atlas terbitan 1994, Pak. Masih saya simpan." },
    ],
  },
  {
    id: 199,
    authorId: 49,
    minutesAgo: 5965,
    shares: 7,
    content:
      "sabtu kemarin kepala 14. tiap kepala rata-rata 15 menit. 14 kali 15 = 210 menit. 3,5 jam. buka jam 9, tutup jam 3. mepet.\nyang antre nomor 12 sama 13 nyerah jam 2, bilang besok pagi aja bos. gue tulis nomornya di kardus kosong, ketempel cermin.\nhitungannya gampang. tapi dua orang yang cabut itu ngingetin: angka yang aman buat gue belum tentu aman buat yang nunggu.\nbesok sabtu lagi. dua kursi tunggu tambahan udah kupindah ke depan.",
    comments: [
      { authorId: 194, minutesAgo: 5957, content: "nomor besok ditulis di kardus ketempel cermin itu sistem om wkwk" },
      { authorId: 187, minutesAgo: 5949, content: "14 kali 15 mepet itu hitungan yang jujur om, bukan dikejar" },
      { authorId: 131, minutesAgo: 5941, content: "yang cabut nomor 12 13 itu besok dateng duluan pasti bos wkwk" },
    ],
  },
  {
    id: 200,
    authorId: 50,
    minutesAgo: 5995,
    shares: 26,
    content:
      "GUYS audit gudang mie malam ini: stok 43 bungkus. penghuni 7. konsumsi 2 bungkus per kepala per malam. total 14 per hari.\n43 dibagi 14 = 3 hari, sisa 1. hari keempat kita makan apa GUYS. jawabannya: hari keempat kita rebutan satu bungkus sisa itu.\nyang menang rebutan kemarin jadi penjaga stok minggu ini. dia udah bikin skema kupon dari kardus mie. absurd, tapi angkanya jalan.\nlaporan selesai. 43, 7, 14, 3 hari. solusi: besok beli 30 lagi, atau besok beli 30 lagi. pilihannya memang cuma satu.",
    comments: [
      { authorId: 146, minutesAgo: 5987, content: "43 dibagi 14 sisa 1 itu matematika yang kejam bre 😭" },
      { authorId: 312, minutesAgo: 5979, content: "skema kupon dari kardus mie itu jenius bre wkwk" },
      { authorId: 139, minutesAgo: 5971, content: "43, 7, 14, 3 HARI. ANGKA PALING MENGERIKAN DI KOS WKWKWK" },
      { authorId: 44, minutesAgo: 5963, content: "beli 30 lagi dua-duanya pilihan yang sama bre, udah pasti wkwk" },
    ],
  },
]
