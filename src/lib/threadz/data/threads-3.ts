import type { ThreadzThread } from "../types"

// PART 3: cuitan 51-75. Semua penulis ini post kedua mereka — topik beda
// dari post pertama, tapi sidik jarinya harus sama:
//  9 ojol tetap "bang" & hitung km. 33 tetap takaran & abang.
//  2 tetap KAPITAL tanpa titik. 15 tetap "teh". 24 tetap KAPITAL + typo.
//  5 tetap buku tulis. 44 tetap gagal masak lowercase. dst.
export const THREADS_PART3: ThreadzThread[] = [
  {
    id: 51,
    authorId: 9,
    minutesAgo: 1525,
    shares: 15,
    content:
      "order pagi, penumpang bawa 2 kotak kue buat dikirim.\nkotaknya gak boleh dimiringin. jalan 8 km gue hati2 kayak bawa bayi.\n\nnyampe, dia bilang makasih, tarif 16. kuenya bukan buat gue. tapi seneng liat orang jagain kue kayak jagain bayi.",
    comments: [
      { authorId: 20, minutesAgo: 1516, content: "kue yang gak boleh dimiringin itu biasanya bolu kukus, mas. kalau miring, teksturnya berubah. yang jaga kue emang harus pelan" },
      { authorId: 240, minutesAgo: 1508, content: "16 buat 8 km pelan2 itu tenang bang, yang penting kotaknya utuh. kue miring = order kembali nol" },
      { authorId: 154, minutesAgo: 1499, content: "gue pernah kirim kue tart pake ojol, sampainya utuh, aku ampe bayar doa tiap lampu merah 😭" },
      { authorId: 26, minutesAgo: 1490, content: "bawa bayi n bro, bayi kalo kena guncang nangis, kue kalo kena guncang roboh. sama aja bahayanya wkwk" },
    ],
  },
  {
    id: 52,
    authorId: 33,
    minutesAgo: 1555,
    shares: 21,
    content:
      "bakso buatan sendiri 3 kilo, buat dijual ke tetangga 55 ribu per kilo. abang tanya untungnya.\n\nkuitung: daging 120, tepung 12, gas 8. jual 165. untungnya 25, kebagian gak sampe 10 ribu per kilo. abang ketawa. tapi besok bikin 5 kilo, pesenan naik. itungan untung boleh kecil.",
    comments: [
      { authorId: 1, minutesAgo: 1546, content: "bakso buatan sendiri 55 ribu per kilo tuh masih murah bu, di bakso keliling sepanci aja 15. pesenan naik pasti karena enak 😄" },
      { authorId: 15, minutesAgo: 1538, content: "untungnya 25 dari 3 kilo tapi pembeli tetangga yang balik2, itu mah untung yang gak keliatan ya bu. lama2 pesenannya naik sendiri" },
      { authorId: 93, minutesAgo: 1529, content: "daging 120 buat 3 kilo itu bagus bu, berarti dagingnya bener, tepungnya gak dilebihin. makanya tetangga balik2" },
      { authorId: 22, minutesAgo: 1520, content: "semoga pesenannya tambah terus ya bu 🙏 bakso buatan ibu itu beda" },
      { authorId: 5, minutesAgo: 1511, content: "di buku warung, kategori 'untung kecil tapi balik lagi' itu paling dicari bu. beliau namanya pelanggan tetap" },
    ],
  },
  {
    id: 53,
    authorId: 2,
    minutesAgo: 1585,
    shares: 30,
    content:
      "CICILAN HP BULAN INI LUNAS. TINGGAL 2 BULAN LAGI. GUE ITUNG ULANG: UANG MAKAN GUE DIPANGKAS JADI MIE DOANG 3 KALI SEHARI. BERAT BADAN TURUN 2 KILO. HP NAIK STATUS JADI MILIK SENDIRI.\nBARTER YANG GAK PERNAH GUE SESALI. MUNGKIN",
    comments: [
      { authorId: 44, minutesAgo: 1576, content: "mie 3 kali sehari bre itu usaha, makanan pendamping minimal ada telur dikit biar gak pingsan wkwk" },
      { authorId: 118, minutesAgo: 1568, content: "berat turun 2 kilo, status hp naik. aset kos emang gitu wkwkwk" },
      { authorId: 223, minutesAgo: 1559, content: "'MUNGKIN' di akhir itu jujur banget 😭 selamat ya bre, 2 bulan lagi bebas" },
      { authorId: 130, minutesAgo: 1550, content: "gue cicil HP 3 bulan pake cara yang sama, sekarang badanku langsing kawan wkwk" },
      { authorId: 25, minutesAgo: 1541, content: "2 kilo 2 bulan itu turunnya pelan, masih aman bre. yang bahaya turun 5 kilo sebulan karena mie doang. sisain 2 rebu buat telur" },
    ],
  },
  {
    id: 54,
    authorId: 15,
    minutesAgo: 1615,
    shares: 14,
    content:
      "hari ini dagang singkong 3 karung. yang kupilih sendiri 2 karung, yang dikirim tengah malam 1 karung. yang kupilih kulitnya bagus, yang kirim murah 1 ribu.\npembeli milih yang murah. ya sudah teh 😄\nbesok aku akali: yang bagus taruh atas, yang murah taruh bawah. sama2 kebeli kan.",
    comments: [
      { authorId: 32, minutesAgo: 1606, content: "jujur tapi akal-akalan itu khas penjual ya teh 😄 yang murah tetep laku, yang bagus jadi iklan atasnya" },
      { authorId: 72, minutesAgo: 1598, content: "teh, yang murah 1 ribu itu biasanya enak buat digoreng. aku malah nyari yang gitu, kulitnya gelap mah gak masalah" },
      { authorId: 1, minutesAgo: 1589, content: "aku pembeli yang suka milih sendiri teh, tapi kalau ditata rapi gitu jadi percaya, semua kebeli 😄" },
      { authorId: 95, minutesAgo: 1580, content: "Singkong yang tengah malam dikirim itu dari kebun jauh ya teh. Biasanya yang begitu lebih manis." },
    ],
  },
  {
    id: 55,
    authorId: 24,
    minutesAgo: 1645,
    shares: 26,
    content:
      "CUCU AKU AJARIN AKU PAKAI HP. SEKARANG AKU BISA NGIRIM PESAN SENDIRI. GAK PERLU BANTU LAGI.\nTADI AKU KIRIM KE ANAKKU, DIA BALES 'WAH MAMA PINTER'. PADAHAL CUMA KIRIM 'IYA'. PINTERNYA PALSU. TAPI SENENGNYA ASLI.",
    comments: [
      { authorId: 1, minutesAgo: 1636, content: "bu, yang penting bisa kirim sendiri ya. banyak ibu2 di kompleks aku masih minta tolong anaknya buat balas pesan 😄" },
      { authorId: 97, minutesAgo: 1628, content: "Pinternya palsu, senengnya asli. Kalimat nenek ini bikin hari saya cerah 🙏" },
      { authorId: 106, minutesAgo: 1619, content: "Mbak, teruskan belajar ya. Nanti bisa lihat foto cucu langsung di HP, gak perlu dicetak dulu." },
      { authorId: 22, minutesAgo: 1610, content: "senengnya asli itu yang penting bu 😄 semoga makin lancar pakai HPnya 🙏" },
      { authorId: 163, minutesAgo: 1601, content: "cucu yang sabar ngajarin nenek itu anak baik banget bu, kabarin dia ya dari sini wkwk" },
    ],
  },
  {
    id: 56,
    authorId: 5,
    minutesAgo: 1675,
    shares: 45,
    content:
      "hari ini pelanggan bawa uang 100 rebu, belanja 12 rebu. kembalian 88. aku itung dua kali.\n\nibu bilang, 'itung dua kali itu bagus, nanti kalau gak bulat kamu yang dicari orang.' jadi kalau bulat malah nyariin ya bu wkwk.\nuang 100 rebu itu rata semua, gak ada bekas lipet. langka.",
    comments: [
      { authorId: 21, minutesAgo: 1666, content: "bener banget, uang 100 ribu gak berlipet itu langka. pembeli yang gak lipet uang biasanya yang baru ambil dari ATM" },
      { authorId: 15, minutesAgo: 1658, content: "kembalian 88 itu bagus teh, recehnya rapi. pembeli juga seneng dapet uang gak berantakan" },
      { authorId: 39, minutesAgo: 1649, content: "12 dari 100 itu 88, dihitung dua kali tetap 88. kebiasaan cek ulang itu bukan ragu, itu tanggung jawab" },
      { authorId: 231, minutesAgo: 1640, content: "aku dari sebelah, uang 100 rebu yang baru dari mesin itu bener keras semua, gak bisa dilipet 😄" },
      { authorId: 48, minutesAgo: 1631, content: "Ibu yang mengajarkan menghitung dua kali itu mengajarkan hati-hati. Warung ini akan awet." },
      { authorId: 31, minutesAgo: 1624, content: "uang 100 rebu gak berlipet itu memang biasanya habis gajian mas, kasir tuh hafal tekstur uang 😄" },
      { authorId: 66, minutesAgo: 1621, content: "warung teh, singkong gorengnya hari ini ada gak? biasanya sore langsung habis" },
      { authorId: 190, minutesAgo: 1618, content: "belanja 12 dari 100, kembalian 88 dihitung dua kali. itu pekerjaan warung yang benar" },
    ],
  },
  {
    id: 57,
    authorId: 44,
    minutesAgo: 1705,
    shares: 30,
    content:
      "PR masak kedua: telur dadar. hasil: telur gepeng rasa kayu.\nkenapa kayu? gue lupa garem. telur doang maunya rasa apa coba.\ntetangga kamar ngasih garem sejumput, dadar kedua lumayan. jadi rahasia masak itu garem ya. oke dicatat.\nbesok goreng tempe, doain garemnya gak lupa lagi wkwk",
    comments: [
      { authorId: 50, minutesAgo: 1696, content: "guys, garem sejumput itu sains paling misterius. sisi yang lupa garem kemarin, hari ini malah bikin dadar laku 😭" },
      { authorId: 2, minutesAgo: 1688, content: "TELUR GEPEng RASA KAYU WKWKWK. GUE PEMBAHAS BERAT BADAN AJA LUPA GAREM. KITA SEMANGAT" },
      { authorId: 128, minutesAgo: 1679, content: "gepeng tuh karena minyaknya kebanyakan bre, garem itu rasa, minyak itu bentuk. dua2nya penting" },
      { authorId: 33, minutesAgo: 1670, content: "garem itu bukan rahasia, itu teman. kalo ada yang bingung masak, kirim aja pertanyaannya ke sini, gratis 😄" },
      { authorId: 229, minutesAgo: 1661, content: "besok tempe, lusa tahu, minggu depan udah chef bre. dari kayu ke laku itu jalannya cepet wkwk" },
      { authorId: 13, minutesAgo: 1652, content: "garem sejumput, lupa garem wkwkwk. bre coba bubuk kaldu juga, beda rasanya gila" },
    ],
  },
  {
    id: 58,
    authorId: 12,
    minutesAgo: 1735,
    shares: 5,
    content:
      "hari ini pasien 22, tanda vital dicatat 22 kali.\njam 12 siang baru sempet duduk 4 menit. makan pun berdiri.\ntemen jaga bilang 'kamu kurus lagi'. aku bilang, shift itu gak diukur kilo, diukur jadwal.\nbesok off. rencana: tidur, tidur, tidur.",
    comments: [
      { authorId: 8, minutesAgo: 1726, content: "22 tanda vital itu masih tergolong kecil. di ruang jaga gue kemarin 31. tapi yang penting bukan angka, yang penting off-nya dipakai tidur beneran" },
      { authorId: 43, minutesAgo: 1718, content: "makan berdiri itu biasa di shift ya mbak. di pabrik juga gitu, yang berbeda cuma mesinnya. semoga off-nya puas tidur" },
      { authorId: 243, minutesAgo: 1709, content: "gak diukur kilo, diukur jadwal. setuju mbak, semoga off besok bener2 off 🙏" },
      { authorId: 289, minutesAgo: 1700, content: "Perawat yang tetap mencatat tertib meski lelah itu kepercayaan pasien. Selamat istirahat." },
    ],
  },
  {
    id: 59,
    authorId: 30,
    minutesAgo: 1765,
    shares: 7,
    content:
      "si anak kamis kemarin bawa kartu ulangan. nilai 78. dia pura2 santai, 'biasa aja bu'. matanya gak.\n\nkutulis di catatan kemajuan: 'naik 16 poin dari sebelumnya'. dia baca lama. gak ngomong.\nbesok les lanjut. soalnya dia sendiri yang minta tambah jam. itu jawaban paling jelas.",
    comments: [
      { authorId: 3, minutesAgo: 1756, content: "78 dari 62 itu bukan angka, itu anak yang mulai percaya dirinya. Tambahan jam yang diminta sendiri adalah nilai terbaik untuk guru." },
      { authorId: 46, minutesAgo: 1748, content: "kak, catatan kemajuan itu bentuknya seperti apa? aku mau buat juga buat anak, dia gak ngerti progres sendiri 😄" },
      { authorId: 84, minutesAgo: 1739, content: "'pura2 santai, matanya gak' itu detail banget kak. anak2 suka ngepoin paling ekspresinya 😄" },
      { authorId: 267, minutesAgo: 1730, content: "Anak yang meminta tambahan jam itu jarang. Berikan yang terbaik, karena kelangkaannya sedang tumbuh." },
    ],
  },
  {
    id: 60,
    authorId: 21,
    minutesAgo: 1795,
    shares: 21,
    content:
      "jualan barang gak kepake ke tetangga: laku 3, sisa 2. dapet 28 ribu, masuk kaleng.\nkaleng kemarin 38, sekarang 66. target kerudung 65. udah lewat 1 ribu wkwk.\n\nbesok gue beli. warnanya gak gue tentuin, yang penting gak abu misterius. kalau pas liat langsung gak cocok, ya kalengnya nunggu lagi, gak apa. yang penting kalengnya jujur.",
    comments: [
      { authorId: 7, minutesAgo: 1786, content: "28 dari jualan barang gak kepake itu bagus guys, sekalian bersih2 lemari. gue mau ikut ah, target jualan buku kuliah 😄" },
      { authorId: 155, minutesAgo: 1778, content: "'yang penting kalengnya jujur' 😭 kak ini filosofi yang banget, kaleng yang dihitung itu kaleng yang bisa dipercaya" },
      { authorId: 16, minutesAgo: 1769, content: "kalau angka kaleng dan angka target terlihat, biasanya tercapai. lanjutkan" },
      { authorId: 68, minutesAgo: 1760, content: "lewat 1 ribu dari target itu bukan kurang kak, itu bonus 😄 besok jangan lupa cerita kerudungnya warna apa" },
    ],
  },
  {
    id: 61,
    authorId: 17,
    minutesAgo: 1825,
    shares: 30,
    content:
      "motor teman kos: oli bocor. dia ngira oli abis karena dimakan mesin. bro. oli gak ilang, oli bocor dari seal.\n\ngue ganti seal 12 rebu, oli 55. dia mau bayar jasa 50, gue tolak, minta traktir bakso aja. total biaya motor jadi 67 plus bakso. murah banget buat orang yang gak ngerti mesin",
    comments: [
      { authorId: 29, minutesAgo: 1816, content: "bener bro, seal itu biang keroknya. oli yang turun terus tapi gak ada bekas di lantai ya biasanya bocor ke dalam, ganti seal langsung sembuh" },
      { authorId: 183, minutesAgo: 1808, content: "'oli dimakan mesin' wkwkwk ini kalimat bengkel abal2. oli tuh bisa ilang karena bocor atau terbakar, gak ada mesin yang makan" },
      { authorId: 39, minutesAgo: 1799, content: "12 + 55 = 67. murah. yang mahal biasanya bukan barangnya, tapi yang gak ditunjukin akarnya" },
      { authorId: 226, minutesAgo: 1790, content: "bakso sebagai pembayaran itu sistem barter terbaik di kos bro. sate juga oke" },
      { authorId: 36, minutesAgo: 1781, content: "gue pusing belajar sistem tubuh manusia, ternyata sistem mesin juga pusingin. seal itu kayak pembuluh ya bro, bocor dikit ribet 🙃" },
    ],
  },
  {
    id: 62,
    authorId: 39,
    minutesAgo: 1855,
    shares: 15,
    content:
      "Tadi di warung ada yang debat: 0,9 itu lebih besar dari 0,15 atau bukan. Yang satu bilang 15 lebih besar dari 9.\n\nMakanya desimal itu dibaca tempatnya: 0,9 itu 90 persen, 0,15 itu 15 persen. Selesai.\nKadang yang ribet bukan angkanya, tapi kita yang ngebut membaca.",
    comments: [
      { authorId: 3, minutesAgo: 1846, content: "Ini pelajaran yang saya berikan ke Ananda kelas 4 juga. Tempat angka menentukan nilainya. Terima kasih, Pak." },
      { authorId: 17, minutesAgo: 1838, content: "bro ini klasik banget, di lab juga pernah ada yang baca 0,5 liter jadi 5 liter. untung cuma larutan gula, gak ada yang mati" },
      { authorId: 262, minutesAgo: 1829, content: "Membaca tempat angka itu melatih kesabaran. Orang yang buru2 membaca angka biasanya buru2 juga dalam kesimpulan." },
      { authorId: 221, minutesAgo: 1820, content: "wkwk gue pernah ikut debat yang sama di warung, hasilnya kita minum dulu, debatnya lanjut sampe magrib" },
      { authorId: 30, minutesAgo: 1811, content: "0,9 dan 0,15. besok ini aku jadikan soal pembuka di les. murid suka bingung, terus senyum pas paham. makasih ya" },
    ],
  },
  {
    id: 63,
    authorId: 1,
    minutesAgo: 1885,
    shares: 12,
    content:
      "hari ini masak sayur bening. anak yang pertama nambah nasi 2 kali. biasanya disuapin maunya ayam doang.\n\nternyata kuncinya garam dikit, gula dikit, kesabaran banyak. resep itu gak ada di buku ya 😭",
    comments: [
      { authorId: 33, minutesAgo: 1876, content: "bener banget bu, kesabaran itu bumbu paling mahal 😄 sayur bening yang enak itu yang gak buru2 masaknya" },
      { authorId: 15, minutesAgo: 1868, content: "anak yang nambah 2 kali tuh bu, itu ulasan paling jujur di dunia. bintang lima lho 😄" },
      { authorId: 65, minutesAgo: 1859, content: "garam dikit gula dikit, itu resep turun2mun ya bu. sayur bening tuh yang bikin kekenyangan ringan" },
      { authorId: 74, minutesAgo: 1850, content: "semoga anaknya makin sehat ya bu 🙏 sayur bening tuh paling aman buat anak" },
      { authorId: 88, minutesAgo: 1841, content: "aku cobain ya bu, anakku juga doang maunya ayam, capek liat 😅" },
    ],
  },
  {
    id: 64,
    authorId: 28,
    minutesAgo: 1915,
    shares: 26,
    content:
      "PR fisika: hitung kecepatan rata2. gue jalan ke sekolah 12 menit, pulang 15, jarak 1,8 km. temen gue jawab 'ya 1,8 dibagi 2 doang'. WKWK.\n\nkecepatan rata2 itu total jarak dibagi total waktu: 3,6 km dibagi 27 menit. jadi 0,13 km per menit. dibaca 130 meter per menit. bu guru bilang benar.\ntemen gue masih ngambek. wkwk",
    comments: [
      { authorId: 39, minutesAgo: 1906, content: "3,6 dibagi 27 itu 0,133, dibulatkan 0,13. benar. temen yang jawab 1,8 dibagi 2 itu itung jarak doang, bukan kecepatan. jangan ngambek, diperbaiki aja" },
      { authorId: 10, minutesAgo: 1898, content: "WKWKWK TEMEN LU ITUNG DOANG TANPA PAHAM. GUE MAU BELAJAR SAMA LU DEH" },
      { authorId: 3, minutesAgo: 1889, content: "Kesalahan yang dibenahi dengan senyum itu belajar yang baik. Beri temanmu waktu, dia juga sedang tumbuh." },
      { authorId: 160, minutesAgo: 1880, content: "130 meter per menit itu 7,8 km per jam ya kak, lumayan rapi buat anak sekolah 😭 gue jalan pagi aja 6 km/jam" },
      { authorId: 133, minutesAgo: 1871, content: "1,8 dibagi 2 = 0,9 km. satuan km doang, gak ada waktu. dasar logika fisika bre wkwkwk" },
      { authorId: 28, minutesAgo: 1862, content: "kerjain ulang dong cara lu itung, aku mau nulis di catatan biar gak lupa lagi wkwk" },
    ],
  },
  {
    id: 65,
    authorId: 46,
    minutesAgo: 1945,
    shares: 12,
    content:
      "surat undangan pengukuran seragam sudah selesai 26 kelas, ditandatangani kepala sekolah jam 2. difotokopi 3: satu buat arsip, satu buat papan, satu jaga2. kertas di sekolah itu misterius, bisa hilang sendiri.\n\nSabtu pagi jam 8, antrean per kelas 10 menit. semoga lancar.",
    comments: [
      { authorId: 3, minutesAgo: 1936, content: "Tiga salinan untuk tiga kebutuhan, itu kewaspadaan yang tidak berlebihan. Sekolah yang tertib itu terasa dari urusan kertasnya." },
      { authorId: 1, minutesAgo: 1928, content: "Sabtu pagi per kelas 10 menit itu rapi ya kak, komite pasti senang 🙏" },
      { authorId: 73, minutesAgo: 1919, content: "kak, pengukuran per kelas itu anaknya harus bawa sepatu olahraga juga gak? biar sekalian diukur 🙏" },
      { authorId: 89, minutesAgo: 1910, content: "'bisa hilang sendiri' 😄 kertas di sekolah memang misterius kak. semoga Sabtunya aman" },
    ],
  },
  {
    id: 66,
    authorId: 6,
    minutesAgo: 1975,
    shares: 3,
    content:
      "hp gue penyimpanan penuh. gue hapus video 2 tahun lalu 12 buah, dapet ruang 3 giga.\n3 giga itu banyak gk ya. kata hp cukup. kata gue kurang. seterusnya gue percaya hp aja deh.\nabis itu hp bilang baterai 1 persen. hp suka ngajarin hidup",
    comments: [
      { authorId: 2, minutesAgo: 1966, content: "HP SUKA NGAJARIN HIDUP WKWKWK. GUE HAPUS 40 VIDEO DAPET 2 GIGA DOANG, LU UNTUNG BRE" },
      { authorId: 6, minutesAgo: 1958, content: "40 video 2 giga itu mah video yang pendek2 gk. video gue panjang2, makanya 3 giga" },
      { authorId: 212, minutesAgo: 1949, content: "3 giga buat game online mah cuma 1 aplikasi bre wkwk. penyesalan nomor satu: beli HP 64 giga" },
      { authorId: 137, minutesAgo: 1940, content: "baterai 1 persen pas lagi ngerjain penting tuh test kepercayaan 🙏 hp emang guru hidup" },
    ],
  },
  {
    id: 67,
    authorId: 38,
    minutesAgo: 2005,
    shares: 12,
    content:
      "hari ini aku nabung 2 ribu di celengan kaleng susu. isinya sekarang 17 ribu. bunda bilang kalau udah 50 ribu bisa beli buku gambar.\n\n50 dikurang 17 itu 33. aku itung pake jari doang, tapi bener kok, aku cek sama bunda. 33 hari lagi kalau tiap hari 1 ribu. semoga gak keburu jajan.",
    comments: [
      { authorId: 3, minutesAgo: 1996, content: "33 dari 50, itungan dengan jari yang benar itu bangga. Teruskan, Nak. Buku gambar akan lebih bermakna karena ditunggu." },
      { authorId: 24, minutesAgo: 1988, content: "ANAK PINTAR ITUNG. NENEK DOAIN CELANGANNYA CEPAT PENUH. JANGAN JAJAN YG BANYAK YA" },
      { authorId: 69, minutesAgo: 1979, content: "kakak hebat, kalau tiap hari 1 ribu dari uang jajan itu berarti bisa nahan yang 5 ribu ya 😄" },
      { authorId: 92, minutesAgo: 1970, content: "semangat ya nak, bunda pasti bangga 🙏 kalau udah 50 ribu, buku gambar sama pensil warnanya sekalian ya" },
      { authorId: 35, minutesAgo: 1961, content: "33 hari itu lama banget ya... tapi kalau buku gambarnya udah di tangan pasti worth it" },
    ],
  },
  {
    id: 68,
    authorId: 11,
    minutesAgo: 2035,
    shares: 41,
    content:
      "Akhir bulan tugasnya mengganti struk: warung, ojek, belanja dapur. Kususun per tanggal, dijumlah per kategori: makan 890, jalan 210, lain 150. Total 1.250. Cocok dengan catatan awal.\n\nTidak ada yang selisih. Rasanya tenang. Orang lain mungkin melihat itu ribet. Saya melihat itu tidur nyenyak.",
    comments: [
      { authorId: 39, minutesAgo: 2026, content: "890 + 210 + 150 = 1.250. pas. orang yang struknya cocok itu jarang, biasanya selisihnya di jajan dadakan" },
      { authorId: 16, minutesAgo: 2018, content: "selisih nol itu kepuasan yang gak bisa dibeli. di pekerjaanku juga gitu, cocok itu senyum" },
      { authorId: 21, minutesAgo: 2009, content: "aku minta tips: kategori 'lain' 150 itu isinya apa ya? punyaku kategori lain selalu meledak wkwk" },
      { authorId: 45, minutesAgo: 2000, content: "Membuka struk satu per satu itu seperti membaca buku harian. Yang tertib tidak pernah menyesal." },
    ],
  },
  {
    id: 69,
    authorId: 20,
    minutesAgo: 2065,
    shares: 14,
    content:
      "Penumpang pagi, bawa tas kecil, minta anter ke rumah sakit. Di jalan dia diam.\n\nSampai tujuan dia bilang, 'mas, lampu depan lu mati satu.' Gue bilang makasih. Kita gak kenal, tapi dia ngeliatin motor gue sebelum masuk.\nAda orang begitu. Itu cukup buat pagi ini.",
    comments: [
      { authorId: 9, minutesAgo: 2056, content: "lampu mati satu tuh berbahaya bang, untung dia ngasih tau. ada orang yang cuma liat terus bales badan" },
      { authorId: 26, minutesAgo: 2048, content: "penumpang yang masih mikirin motor kita sebelum masuk RS itu orang baik mas. semoga dia aman di dalam" },
      { authorId: 240, minutesAgo: 2039, content: "gue pernah kena lampu mati satu seminggu gak tau, sampe ada yang nyodorin mentok lampu terus bilang 'om, lampu lu doang nyala' 😅" },
      { authorId: 296, minutesAgo: 2030, content: "Perhatian kecil dari orang yang tidak dikenal itu doa bentuk lain. Semoga penumpangnya sehat 🙏" },
    ],
  },
  {
    id: 70,
    authorId: 50,
    minutesAgo: 2095,
    shares: 26,
    content:
      "eksperimen kedua: mie telur versi mateng. rebus 4 menit persis, tiriskan, baru tumis.\nhasil: MIE GORENG ASLI GUYS. temen kamar gak percaya, nanya 'ini dibeli ya'.\nGUE YANG MASAK. dia makan 2 porsi lagi. resep tak dikenal kedua: laku lagi. besok mie kuah, doain kuahnya gak jadi air kolam",
    comments: [
      { authorId: 44, minutesAgo: 2086, content: "gue dadar masih rasa kayu, lu udah mie goreng asli. temen kamar gue kalo denger ini bakal nanya kapan 'ini dibeli ya' gue wkwk" },
      { authorId: 2, minutesAgo: 2078, content: "4 MENIT PERSIS. ITU KUNCI BRE. GUE PERNAH 7 MENIT, HASILNYA MIE BUBUR" },
      { authorId: 126, minutesAgo: 2069, content: "tiriskan dulu baru tumis itu logika yang gak semua anak kos ngerti bre wkwkwk selamat" },
      { authorId: 150, minutesAgo: 2060, content: "air kolam wkwkwk jangan sampe bre, kuah tuh yang bikin beda antara mie kuah dan mie tenggelam" },
      { authorId: 13, minutesAgo: 2051, content: "reser tak dikenal kedua laku, besok versi 3 udah resto bre wkwk" },
    ],
  },
  {
    id: 71,
    authorId: 7,
    minutesAgo: 2125,
    shares: 41,
    content:
      "kuesioner dicetak 60 lembar, 12 ribu. jalan ke kos2an sore, dapet 9 responden baru. total 46. sisa 54.\ncoklat sachet habis 8. rata2 responden minta coklat dulu baru isi.\n\nmanusia. tapi manusia itu lucu, ada yang isi serius banget, ada yang jawab 'semua bener' 15 pertanyaan. yang begitu kubuang satu2. datanya harus jujur.",
    comments: [
      { authorId: 25, minutesAgo: 2116, content: "'semua bener' 15 pertanyaan itu responden musuh besar. gue pernah dapet yang isinya coret2 doang, sampah data bre" },
      { authorId: 36, minutesAgo: 2108, content: "46 dari 100 itu udah separuh jalan ya km, semangat. coklat sachet itu investasi riset yang wajib 🙃" },
      { authorId: 212, minutesAgo: 2099, content: "coklat dulu baru isi itu sistem barter yang adil kok mbak 😄 gue responden angket kemarin dapet biskuit, seneng" },
      { authorId: 155, minutesAgo: 2090, content: "'datanya harus jujur' itu prinsip yang bagus kak, banyak yang asal jumlah doang padahal 😭" },
      { authorId: 30, minutesAgo: 2081, content: "coba sebar juga di warung yang rame, pembeli yang nunggu biasanya suka ngerjain sesuatu. aku dulu begitu, 20 responden satu sore" },
    ],
  },
  {
    id: 72,
    authorId: 16,
    minutesAgo: 2155,
    shares: 26,
    content:
      "nasabah yang kemarin masuk kolom 'ingatkan tiap bulan' tadi telepon sendiri. mau bayar penuh.\n\ndia bilang, 'non, makasih ya ngajarin aku itung angsuran.' aku gak ngajar apa2, cuma kasih angka. tapi kalau angka bisa bikin orang tenang, ya bagus.",
    comments: [
      { authorId: 47, minutesAgo: 2146, content: "nasabah yang menelepon sendiri itu hasil kerja yang lembut non. di loket pun begitu, yang dijelasin dengan tenang biasanya balik dengan tenang" },
      { authorId: 11, minutesAgo: 2138, content: "'cuma kasih angka' itu yang paling dibutuhkan orang yang panik. angka yang jelas itu kepastian" },
      { authorId: 276, minutesAgo: 2129, content: "Pekerjaan yang mengajarkan orang menghitung itu pekerjaan yang mendidik. Semoga nasabahnya lancar sampai lunas." },
      { authorId: 231, minutesAgo: 2120, content: "bapak yang kemarin 'bukan gak mau bayar' itu kan ya non, ternyata bener, cuma butuh diingetin dengan baik 😄" },
    ],
  },
  {
    id: 73,
    authorId: 36,
    minutesAgo: 2185,
    shares: 17,
    content:
      "kuis patologi: SELESAI. gak pinter, tapi habis.\n270 halaman jadi 40 halaman rangkuman, rangkuman jadi 6 lembar semalam.\notak manusia itu mesin kompresi yang gak minta izin 🙃\nsementara ini dulu: tidur 8 jam, makan 3 kali, jadi manusia lagi",
    comments: [
      { authorId: 7, minutesAgo: 2176, content: "270 jadi 40 jadi 6 itu kebalikan dari rangkuman gue: 40 jadi 80 karena gue nambahin catatan pinggir wkwk" },
      { authorId: 8, minutesAgo: 2168, content: "6 lembar semalam itu kekompakan manusia dan deadline. selamat, sekarang tidurnya beneran 8 jam ya" },
      { authorId: 217, minutesAgo: 2159, content: "'gak pinter tapi habis' itu kemenangan paling jujur 🙃 semoga hasilnya membeli" },
      { authorId: 158, minutesAgo: 2150, content: "turu 8 jam makan 3 kali, itu balik ke bentuk manusia asli. enjoy ya km, hebat" },
    ],
  },
  {
    id: 74,
    authorId: 23,
    minutesAgo: 2215,
    shares: 2,
    content:
      "jam 2.30. kulkas tadi malam mati nyala 4 kali, gak sampai 5. gue catat jamnya.\n\nbesok cek kumparan belakangnya, kata yang komen kemarin. makasih. rumah ini akhirnya punya satu hal yang bisa diperbaiki.",
    comments: [
      { authorId: 4, minutesAgo: 2206, content: "Kumparan di belakang, putuskan listrik dulu sebelum disentuh. Sikat lembut, bukan kain basah. Semoga membaik." },
      { authorId: 23, minutesAgo: 2198, content: "sudah kucatat. sikat lembut. laporan besok malam." },
    ],
  },
  {
    id: 75,
    authorId: 45,
    minutesAgo: 2245,
    shares: 7,
    content:
      "Buku catatan pepaya saya lanjutkan: hari ini jeruk 1 kilo, 11 ribu, untuk vitamin. Pensiunan itu pekerjaan baru. Bayarannya sehat, gajinya doa anak-anak.\n\nSaya tidak keberatan. Yang penting buku catatannya masih muat satu halaman lagi.",
    comments: [
      { authorId: 48, minutesAgo: 2236, content: "Jeruk untuk vitamin, doa untuk gaji. Pensiunan yang tetap tertib mencatat itu memiliki kekayaan yang tidak terlihat." },
      { authorId: 11, minutesAgo: 2228, content: "buku yang masih muat satu halaman itu harapan ya pak. semoga halamannya banyak lagi 🙏" },
      { authorId: 96, minutesAgo: 2219, content: "Anak-anak yang mengirim doa untuk orang tua itu anugerah, Pak. Semoga jeruknya manis." },
      { authorId: 274, minutesAgo: 2210, content: "Pepaya 9 ribu kemarin, jeruk 11 ribu hari ini. Catatan yang berlanjut adalah hidup yang berlanjut." },
    ],
  },
]
