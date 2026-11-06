import type { ThreadzThread } from "../types"

// PART 2: cuitan 26-50 — ROMBAK V5 (6 Nov 2026): total ganti isi jadi FORUM
// MATEMATIKA (V3 lama masih diary harian: kangkung, kucing pos, lampu sorot,
// rumah biru, telur dadar — semuanya dihapus). Slot teknis TIDAK berubah:
// id 26-50, authorId 26-50 urut, minutesAgo = 25 + 30*(id-1), komentar
// menyebar 0-6, komentar minutesAgo lebih kecil dari post-nya.
// Aturan lengkap: scripts/rumus-v2.md BAGIAN 1G + FORMULA HITAM 19 POLA.
// Tema file ini: pecahan, bilangan & pembagian — bentuk BARU, jangan nyontek
// bentuk threads-1.
export const THREADS_PART2: ThreadzThread[] = [
  {
    id: 26,
    authorId: 26,
    minutesAgo: 775,
    shares: 18,
    content:
      "nah ini nanya beneran. anak tetangga PR: tangki motor isi 3/4, terus kepake setengah dari isinya, sisa berapa. gue jawab setengah tangki, dia bilang 3/8. gue bilang kok bisa, dia gambar kotak dibagi 4, diarsir 3, terus arsirannya dibagi dua. keliatan sih 1,5 kotak dari 4. tapi kalau 1,5 dari 4 kok ditulis 3/8, bukan 1,5/4? ini gue yang bego atau emang pecahan maennya begini",
    comments: [
      { authorId: 118, minutesAgo: 766, content: "3/8 bre. setengah dari 3/4 itu 3/4 × 1/2 = 3/8. aturannya pembilang kali pembilang, penyebut kali penyebut" },
      { authorId: 154, minutesAgo: 759, content: "1,5/4 juga jawaban lu sebenarnya, cuma belum disederhanain. kalikan 2 ke atas dan ke bawah, jadi 3/8. sama aja cuma bentuknya beda" },
    ],
  },
  {
    id: 27,
    authorId: 27,
    minutesAgo: 805,
    shares: 9,
    content:
      "84 kardus mau dibagi rata ke rak. rak ada 6, tiap rak 14. rak ada 7, tiap rak 12. dua-duanya rata tanpa sisa. anak magang nanya: kalau raknya 5 kok gak bisa rata. saya cek 84 ÷ 5 = 16 sisa 4. dia lanjut nanya syaratnya apa biar pembagian gak bersisa. saya cuma biasa ngerjain, gak biasa jelasin teorinya. ada yang mau jelasin singkat",
    comments: [
      { authorId: 258, minutesAgo: 796, content: "kalau 84 dibagi 5 hasilnya 16 sisa 4. 84 bukan kelipatan 5, jadi mustahil rata tanpa sisa. kelipatan 5 selalu berujung 0 atau 5" },
      { authorId: 236, minutesAgo: 788, content: "di gudang kami sama. jumlah gak pas ya sisa dipisah jadi satu rak campuran, jangan dipaksa rata, malah berantakan" },
    ],
  },
  {
    id: 28,
    authorId: 28,
    minutesAgo: 835,
    shares: 33,
    content:
      "ULANGAN FAKTORISASI PRIMA DIBALIKIN DAN GUE HAMPIR NANGIS WKWKWK. soalnya 360. gue jawab 2 × 3 × 5 × 12, nilai gue merah. guru bilang 12 masih bisa dipecah, harus 2³ × 3² × 5. gue cek: 8 × 9 × 5 = 360. TAPI TEMEN GUE JAWAB 2 × 2 × 2 × 3 × 3 × 5 DAN DIA BENAR JUGA. guru bilang dua-duanya sama, cuma bentuk nulisnya beda. TERUS BENTUK MANA YANG DIBENER-BENER DITERIMA. wkwkwk gue pusing tapi kepo",
    comments: [
      { authorId: 131, minutesAgo: 828, content: "dua-duanya diterima bre, yang penting semua faktornya prima. jawaban lu belum selesai soalnya 12 masih bisa dipecah jadi 2 × 2 × 3" },
      { authorId: 223, minutesAgo: 821, content: "jurus aman: bagi terus sama 2 sampai gak bisa, lanjut 3, lanjut 5. hitung tiap angka kepakai berapa kali, tulis pangkatnya" },
      { authorId: 313, minutesAgo: 814, content: "2³ × 3² × 5 sama 2×2×2×3×3×5 itu cuma beda kemasan bre, isinya 360 dua-duanya" },
      { authorId: 84, minutesAgo: 806, content: "jangan kehilangan semangat, faktorisasi itu kebiasaan, seminggu udah lancar" },
    ],
  },
  {
    id: 29,
    authorId: 29,
    minutesAgo: 865,
    shares: 11,
    content:
      "pelat persegi luas 225 cm². gue itung sisinya 15, soalnya 15 × 15 = 225. om bilang tinggal diukur aja pake mistar. mana yang sah buat laporan?",
    comments: [
      { authorId: 186, minutesAgo: 856, content: "itungan lu sah om. ukur buat cek fisik, hitung buat laporan. 15 × 15 = 225 udah bener" },
      { authorId: 30, minutesAgo: 849, content: "akar dari 225 itu memang 15. kalau ukurannya nyimpel dikit dari 15 itu urusan benda, bukan urusan hitung" },
    ],
  },
  {
    id: 30,
    authorId: 30,
    minutesAgo: 895,
    shares: 14,
    content:
      "Si anak menemukan hal aneh di kalkulator ponselnya: 0,1 + 0,2 hasilnya 0,30000000000000004. Dia bertanya kenapa angka aneh itu muncul, padahal di kertas 0,1 + 0,2 = 0,3. Saya mencoba menjelaskan bahwa ponsel menghitung dengan cara tertentu, tetapi penjelasan saya malah membuatnya bertanya lebih dalam: kalau ponsel bisa begitu, kenapa kita tetap percaya kalkulator untuk soal ujian? Saya tidak ingin menjawab asal-asalan. Adakah penjelasan sederhana yang bisa saya pakai besok di sesi les?",
    comments: [
      { authorId: 262, minutesAgo: 887, content: "ponsel menyimpan angka dalam biner. 0,1 dan 0,2 tidak bisa dieja persis dalam biner, jadi tinggal sisa kecil di belakang. kita menulis pakai sepuluh jadi masalahnya gak kelihatan" },
      { authorId: 322, minutesAgo: 879, content: "buat anak cukup gini bu: kalkulator pakai bahasa biner, 0,1 sama 0,2 gak bisa dieja pas, makanya ada kembangan kecil. hasil ujian tetap aman soalnya bedanya nol koma nol doang berkali-kali" },
      { authorId: 118, minutesAgo: 871, content: "tes gampang bu: suruh dia coba 0,5 + 0,25. hasilnya bersih. angka yang bisa dieja biner gak ngaco" },
    ],
  },
  {
    id: 31,
    authorId: 31,
    minutesAgo: 925,
    shares: 20,
    content:
      "total belanja 17.350, pelanggan bayar 20.000, kembalian harusnya 2.650. masalahnya receh 50 dan 100 di laci gue habis. dia bilang gak usah ribet, kasih 2.500 aja. itu selisih 150, pelanggan yang rugi. gue nanya balik: kalau kondisinya dibalik, total 17.650, bayar 20.000, kembalian 2.350 dan recehnya juga habis, boleh gak gue kasih 2.500 dan gue yang rugi 150? kasir sebelah bilang terserah. cuma gue pengen tau ada aturan pembulatannya gak sebenarnya",
    comments: [
      { authorId: 205, minutesAgo: 917, content: "2.650 ya 2.650. pembulatan cuma sah kalau dua pihak setuju, dan kalau receh habis biasanya kasir yang menanggung, bukan pelanggan" },
      { authorId: 240, minutesAgo: 902, content: "di toko besar polanya pembulatan menguntungkan pelanggan otomatis. bisa niru pola itu biar gak debat tiap hari" },
    ],
  },
  {
    id: 32,
    authorId: 32,
    minutesAgo: 955,
    shares: 12,
    content:
      "ada pembeli nanya teh, setengah kilo itu berapa. gue tunjuk jarum timbangan, bilang pas di tengah antara 0 sama 1. dia ngotot setengah itu 0,2, soalnya koma satu koma dua. gue jawab kok 0,2, dia bilang koma satu dibaca satu-dua. ya sudah gue timbang aja manual pake separuh dari ikat. yang mau gue tanya: cara jelasin setengah itu 0,5 ke orang yang baca koma kayak baca nomor rumah gimana ya? pake contoh uang kayaknya paling gampang, ada usulan lain?",
    comments: [
      { authorId: 102, minutesAgo: 948, content: "teh, pake uang bener. 1.000 dibagi dua itu 500, sama kayak 1 dibagi dua itu 0,5. koma itu penanda posisi, bukan angka kedua" },
      { authorId: 84, minutesAgo: 941, content: "bisa pake gelas teh. setengah gelas itu kelihatan mata, gak perlu angka dulu" },
      { authorId: 66, minutesAgo: 933, content: "gue dulu juga salah bacanya teh wkwk, pahamnya pas dikasih uang 500 dari seribu" },
    ],
  },
  {
    id: 33,
    authorId: 33,
    minutesAgo: 985,
    shares: 25,
    content:
      "Resep minta garam 3/4 sendok teh. Di rumah cuma ada sendok takar 1/2. Ternyata cukup diambil sekali penuh lalu setengahnya lagi. Aku hitung 1/2 + 1/4 = 3/4, pas. Yang membuatku ragu: boleh gak ditulis 1,5 kali takaran 1/2? Anakku bilang pecahan gak boleh dikali angka koma aneh. Mohon dijelaskan sebelum jam masak siang, takut salah takaran lagi setelah kejadian kuah keasinan kemarin.",
    comments: [
      { authorId: 277, minutesAgo: 977, content: "1,5 kali 1/2 memang 3/4 bu. pecahan boleh dikali bilangan apa saja, tidak ada larangannya" },
      { authorId: 90, minutesAgo: 970, content: "biar gampang di dapur bu: setengah dulu, sisanya separuh dari sendok 1/2. tangan lebih jujur dari angka" },
      { authorId: 143, minutesAgo: 962, content: "kakaknya salah prinsip bu, malah garamnya yang jadi korban wkwk" },
    ],
  },
  {
    id: 34,
    authorId: 34,
    minutesAgo: 1015,
    shares: 6,
    content:
      "rekan shift bilang sisa kerja 3 jam. gantian 06.00, sekarang 02.00. selisihnya 4 jam. logbook: sisa 4 jam. ronde dulu.",
    comments: [],
  },
  {
    id: 35,
    authorId: 35,
    minutesAgo: 1045,
    shares: 27,
    content:
      "mikir sendiri terus gak ketemu. utang 3 kali utang 3, kok hasilnya 9. utang udah ditambah utang lagi, harusnya makin parah, kok malah jadi positif. guru bilang itu aturan tanda, tanda emang begini. tapi aturan kan ada alasan. ada yang bisa jelasin kenapa minus kali minus jadi plus, pakai cerita biasa aja, jangan gaya buku pelajaran",
    comments: [
      { authorId: 227, minutesAgo: 1037, content: "cerita utang: lu utang 3 kali utang 3, itu utang 9. kalau utangnya DIHAPUS, keadaan lu membaik 9. penghapusan utang = minus kali minus = positif" },
      { authorId: 313, minutesAgo: 1030, content: "guru gue dulu bilang minus itu arah mundur. mundur arah mundur itu maju. gak sempurna tapi nempel sampe sekarang" },
      { authorId: 131, minutesAgo: 1022, content: "ini soal ulangan lo ya, buat apa pusing, nanti dikoreksi otomatis pas ngerjain soal" },
    ],
  },
  {
    id: 36,
    authorId: 36,
    minutesAgo: 1075,
    shares: 16,
    content:
      "KUIS BESOK DAN GUE MASIH KESEL SOAL INI BANGET. urutkan dari terkecil: 2/5, 1/2, 3/7. jawaban gue 3/7 paling kecil soalnya angka 3 lebih kecil dari 5. guru coret. terus gue coba nyamain penyebut tapi penyebutnya 5, 2, 7 beda-beda, bingung nyari yang satu. temen bilang pake 70. gue hitung: 2/5 = 28/70, 1/2 = 35/70, 3/7 = 30/70. jadi urutannya 2/5, 3/7, 1/2. BENER GAK INI. kalau salah besok gue duluan yang dipanggil",
    comments: [
      { authorId: 212, minutesAgo: 1067, content: "bener, 70 itu KPK dari 5, 2, 7. urutan lu udah bener: 28 < 30 < 35" },
      { authorId: 118, minutesAgo: 1059, content: "cara cepet: 2/5 = 0,4, 3/7 kira-kira 0,43, 1/2 = 0,5. hasilnya sama aja" },
      { authorId: 149, minutesAgo: 1051, content: "gak usah panik, lu justru udah pake cara yang benar sampe penyebutnya nyatu" },
    ],
  },
  {
    id: 37,
    authorId: 37,
    minutesAgo: 1105,
    shares: 8,
    content:
      "Sore ini saya memperhatikan bocah sebelah belajar perkalian di teras. Ia menyebut 7 × 8 itu 54. Bapaknya menegur, jawabannya 56. Anak itu menoleh ke tangga: 7 × 7 = 49, ditambah 7 jadi 56, lalu tertawa sendiri. Saya jadi penasaran: seingat saya pasangan 7 × 8 memang paling sering tertukar, baik dengan 54 maupun 63. Apakah memang begitu di kalangan pengajar, dan mengapa pasangan ini yang paling rawan tertukar dibanding 6 × 7 atau 8 × 9?",
    comments: [
      { authorId: 258, minutesAgo: 1098, content: "wajar itu tertukar pak. 7 × 7 = 49 dan 7 × 9 = 63 mengapitnya dengan selisih 7 sama jauh, jadi ingatan gampang geser" },
      { authorId: 268, minutesAgo: 1091, content: "anak itu sudah menemukan strategi sendiri (49 + 7), itu pertanda bagus pak. banyak anak hafal doang tanpa tahu jalan" },
    ],
  },
  {
    id: 38,
    authorId: 38,
    minutesAgo: 1135,
    shares: 22,
    content:
      "bunda, PR-nya minta tentukan bilangan prima. aku nulis 51 itu prima soalnya di tabel cuma ada 2, 3, 5, 7 dan 51 gak habis dibagi semuanya. terus temen bilang 51 = 3 × 17. aku itung: 3 × 17 = 51. bener. terus kok 17 gak ada di tabel ya? tabel itu cuma buat ngecek cepet atau tabelnya kurang lengkap? nanti sore dikumpulin, bunda tolong jawabnya cepetan, makasih",
    comments: [
      { authorId: 63, minutesAgo: 1128, content: "tabel itu cuma contoh awal dik. 17 memang prima, dan 51 bukan prima karena habis dibagi 3. ceknya gak cukup sama 2, 3, 5, 7 doang" },
      { authorId: 143, minutesAgo: 1121, content: "trik: jumlah digitnya. 5 + 1 = 6, habis dibagi 3, berarti 51 habis dibagi 3. gak perlu tabel panjang" },
      { authorId: 66, minutesAgo: 1113, content: "bilangan prima itu cuma punya dua pembagi: 1 dan dirinya sendiri. 51 punya empat, jadi bukan" },
    ],
  },
  {
    id: 39,
    authorId: 39,
    minutesAgo: 1165,
    shares: 35,
    content:
      "temen lama telepon malam tadi, isinya protes. cucunya dapat tugas: cari bilangan terkecil yang habis dibagi 1 sampai 10, kunci jawabannya 2520. dia curiga angka itu asal-asalan. kurang lebih begini caraku membujuknya: 2520 habis dibagi 7 (sisa 360), habis dibagi 8 (sisa 315), habis dibagi 9 (sisa 280). sementara 1260, yang setengahnya, gagal di 8: hasilnya 157,5. jadi 2520 benar-benar terkecil, bukan sulap. yang saya suka dari cucunya: dia menantang kunci jawaban dulu, baru percaya. kurang lebih begitu ceritanya, maaf panjang",
    comments: [
      { authorId: 318, minutesAgo: 1157, content: "kuncinya 8 sama 9 pak. yang satu sampai tujuh udah dijamin sama LCM sebelumnya, 10 juga. 2520 memang titik terkecilnya" },
      { authorId: 262, minutesAgo: 1149, content: "anak yang berani curiga sama kunci jawaban itu anak yang nanti gak asal salin. salut buat cucunya" },
      { authorId: 192, minutesAgo: 1139, content: "2520 juga namanya kelipatan persekutuan terkecil dari satu sampai sepuluh. kasih nama itu ke cucu, pasti seneng" },
    ],
  },
  {
    id: 40,
    authorId: 40,
    minutesAgo: 1195,
    shares: 13,
    content:
      "pupuk kantong 1 kilo. dulu aku pakai 1/4 tiap minggu, habis 4 minggu pas. kemarin petugas bilang takarannya kebanyakan, suruh pakai setengah dari 1/4. cucu aku itung 1/8, katanya jadi habis 8 minggu. aku nggak percaya, dikira dia ngawur. terus aku cek pake sendok: 1/4 itu 2 sendok, setengahnya 1 sendok, seminggu 1 sendok, 8 minggu 8 sendok. 1 kilo itu 8 sendok penuh kok. jadi benar 8 minggu ya. bingung tapi lega",
    comments: [
      { authorId: 84, minutesAgo: 1188, content: "benar bu, 1/4 dibagi 2 itu 1/8. karena pakainya jadi lebih lambat, umurnya dua kali lipat" },
      { authorId: 90, minutesAgo: 1181, content: "hitungan sendoknya juga bener bu. memang paling gampang dicek pake benda deket tangan" },
      { authorId: 15, minutesAgo: 1173, content: "cucu pintar bu. itungan anak sekarang kenceng banget lho" },
    ],
  },
  {
    id: 41,
    authorId: 41,
    minutesAgo: 1225,
    shares: 4,
    content:
      "gang pendek. rumah nomor genap semua: 2, 4, 6 sampai 14. penghuni no. 14 bilang dia rumah ke-7. hitung gue: 2, 4, 6, 8, 10, 12, 14. bener tujuh.",
    comments: [],
  },
  {
    id: 42,
    authorId: 42,
    minutesAgo: 1255,
    shares: 21,
    content:
      "kamar A token listrik sisa 12 kWh, pakainya 1,5 kWh per hari. kamar B sisa 9 kWh, pakainya 1 kWh per hari. si C tanya mana yang lebih dulu gelap. aku itung: A habis 8 hari, B habis 9 hari. C ngotot B yang duluan soalnya sisanya paling dikit. aku bingung mau kasih contoh apa biar kebayang, soalnya urusan listrik di kos gak boleh salah, kemarin ada yang gedor pintu jam 2 pagi gara-gara gelap",
    comments: [
      { authorId: 60, minutesAgo: 1247, content: "hitungan bener bu, A yang duluan. B sisanya dikit tapi jatahnya juga kecil, kayak tangki kecil yang jalan pelan" },
      { authorId: 106, minutesAgo: 1239, content: "contohnya gampang bu: uang jajan 12 ribu habis 1,5 ribu sehari, lawan 9 ribu habis 1 ribu sehari. mana cepet habis? nanti dia nanggep sendiri" },
      { authorId: 143, minutesAgo: 1231, content: "tambahin aja bu di grup kos: yang habis duluan kasih tau 2 hari sebelumnya. masalah gelap beres" },
    ],
  },
  {
    id: 43,
    authorId: 43,
    minutesAgo: 1285,
    shares: 17,
    content:
      "target shift 1.200 unit, waktu 8 jam. sampai jam tiga sore masuk 950. sisa waktu satu jam, sisa target 250 unit. kepala lini minta semua fokus, padahal rata-rata normal kami 160 per jam. hitunganku: butuh 250 per jam untuk satu jam terakhir. itu sekitar 1,5 kali kecepatan biasa. yang tanya di grup: wajar gak disuruh ngejar 250, atau targetnya yang salah atur dari awal. sampai postingan ini ditulis belum ada jawaban dari atasan",
    comments: [
      { authorId: 240, minutesAgo: 1277, content: "1,5 kali dalam satu jam itu mepet, biasanya yang naik malah cacat. lebih berguna nyari kenapa jam 1 sampai 3 bocor" },
      { authorId: 272, minutesAgo: 1269, content: "dengan ritme 160 per jam, 1.200 butuh 7,5 jam kerja murni. kalau jam 3 baru 950, ada jam yang kemana-mana" },
      { authorId: 205, minutesAgo: 1261, content: "jawaban atasan biasanya: diusahakan. ya udah usahain, tapi jangan sampe mesin yang bayar" },
    ],
  },
  {
    id: 44,
    authorId: 44,
    minutesAgo: 1315,
    shares: 5,
    content:
      "resep 2 gelas beras butuh 3 gelas air. beras gue tinggal 1,5 gelas, gue itung airnya 2,25. wkwk kalau keras berarti itungan gue ngaco lagi",
    comments: [
      { authorId: 152, minutesAgo: 1307, content: "2,25 bre. 3 dibagi 2 = 1,5, terus dikali 1,5 = 2,25. nambah sembarangan nanti malah bubur wkwk" },
    ],
  },
  {
    id: 45,
    authorId: 45,
    minutesAgo: 1345,
    shares: 26,
    content:
      "Teman sepensiunan saya bersikeras harga kopi warung naik tiga puluh persen, dari 12.000 menjadi 15.000. Saya hitung dengan cara lama: selisihnya 3.000, dibagi harga awal 12.000, hasilnya 0,25, jadi dua puluh lima persen. Beliau tidak mau kalah, katanya yang penting naiknya 3.000 dan 3.000 dari 10.000 memang tiga puluh persen. Di situlah letak bedanya: pembaginya bukan 10.000 melainkan 12.000. Saya tidak jadi debat lagi, hanya ingin konfirmasi di sini: dua puluh lima persen itu benar, bukan?",
    comments: [
      { authorId: 283, minutesAgo: 1337, content: "benar pak, 3.000 ÷ 12.000 = 25%. persen kenaikan selalu dibanding harga awal, bukan angka yang mudah dihitung" },
      { authorId: 199, minutesAgo: 1329, content: "kopi 15 ribu. hitungan pak yang benar, temannya kebawa angka bulat" },
      { authorId: 258, minutesAgo: 1321, content: "kalau mau damai, tinggal tunjuk struk: 12.000 lalu 15.000. angka gak bisa didebat lama" },
    ],
  },
  {
    id: 46,
    authorId: 46,
    minutesAgo: 1375,
    shares: 14,
    content:
      "Laporan kehadiran: 7A hadir 30 dari 32, 7B hadir 28 dari 30, 7C hadir 29 dari 31. Total hadir 87 dari 93. Aku hitung 87 ÷ 93 = 0,935..., jadi 93,5 persen. Bos minta angka bulat di ringkasan: 94 persen. Anak magang protes, katanya 93,5 harusnya dibulatkan ke bawah karena lima-nya kecil. Padahal aturan umum: tepat 0,5 dibulatkan ke atas. Sekarang ringkasan dan lampiran beda angka, dan besok ada rapat 😅. Mohon saran singkat: ikut mana?",
    comments: [
      { authorId: 268, minutesAgo: 1367, content: "aturan umum tepat 0,5 ke atas kak, jadi 94. lampiran tetap tulis 93,5, dua-duanya sah karena beda tingkat ketelitian" },
      { authorId: 227, minutesAgo: 1359, content: "tulis metodenya di catatan kaki kak: dibulatkan ke bulat terdekat. 93,5 jadi 94. rapat selesai dalam 2 menit" },
      { authorId: 322, minutesAgo: 1351, content: "anak magangnya lucu kak, lima-nya kecil wkwk. aturan gak kenal besar kecil kalau udah tepat setengah" },
    ],
  },
  {
    id: 47,
    authorId: 47,
    minutesAgo: 1405,
    shares: 23,
    content:
      "Nasabah lansia datang membawa satu lembar lima puluh ribu dan empat lembar sepuluh ribu. Total sembilan puluh ribu. Ia ingin ditukar menjadi lima lembar delapan belas ribu, katanya supaya gampang dibagi lima cucu. Saya jelaskan tidak ada pecahan delapan belas ribu, jadi mustahil. Ia bertanya: kalau begitu cara paling dekat apa? Saya tawarkan sembilan lembar sepuluh ribu: satu untuk tiap cucu, empat lembar sisanya untuk tabungan sekolah mereka. Beliau tertawa lalu setuju. Yang ingin saya tanyakan ke rekan teller: kalimat penjelasan macam apa yang paling cepat dipahami nasabah tua soal pecahan uang, tanpa terasa menggurui?",
    comments: [
      { authorId: 84, minutesAgo: 1397, content: "paling cepet: kertas kecil, tulis 90 ÷ 5 = 18, terus tunjukin pecahan yang ada: 10, 20, 50. nasabah tua percaya tulisan tangan" },
      { authorId: 262, minutesAgo: 1389, content: "kalau cucunya ikut ke loket, libatkan saja. dua generasi satu meja, penjelasan jadi santai" },
      { authorId: 283, minutesAgo: 1381, content: "ide sembilan lembar itu elegan pak. 90 ÷ 5 = 18 ribu per cucu, tapi karena pecahan delapan ribu tidak ada, satu lembar per cucu plus tabungan itu jalan keluar yang paling tenang" },
    ],
  },
  {
    id: 48,
    authorId: 48,
    minutesAgo: 1435,
    shares: 7,
    content:
      "Rak setinggi 120 cm. Muat 40 buku tebal 3 cm, atau 60 buku tebal 2 cm. 40 × 3 = 120. 60 × 2 = 120. Genap. Tapi kepala ini tetap memilih yang tebal.",
    comments: [
      { authorId: 336, minutesAgo: 1427, content: "genap dua-duanya pak. pilihan jatuh ke selera, bukan hitungan" },
    ],
  },
  {
    id: 49,
    authorId: 49,
    minutesAgo: 1465,
    shares: 29,
    content:
      "bos-bos, bantu itung. kapasitas teoretis: buka 9 jam kurang istirahat 1 jam = 8 jam = 480 menit. potongan rata 15 menit. 480 ÷ 15 = 32 kepala. kenyataan hari ini 20 kepala, sisanya ngetem sambil nonton HP. pertanyaan buat bos yang jaga kasir: 32 itu angka utopian gak? soalnya tiap kepala ada yang cerita dulu 5 sampai 10 menit sebelum duduk, itu gak masuk 15 menit",
    comments: [
      { authorId: 118, minutesAgo: 1457, content: "realistisnya 20 sampai 24 bos. tiap kepala ada jeda duduk-bangun 3 sampai 5 menit. 32 itu kalau yang duduk robot" },
      { authorId: 199, minutesAgo: 1449, content: "20 kepala tetap bagus bos, hampir dua pertiga kapasitas. jangan dibandingin angka langit" },
      { authorId: 240, minutesAgo: 1441, content: "itung cerita pelanggan masukin aja bos: 15 + 5 = 20 menit per kepala, 480 ÷ 20 = 24. angka itu lebih deket sama kenyataan" },
    ],
  },
  {
    id: 50,
    authorId: 50,
    minutesAgo: 1495,
    shares: 31,
    content:
      "GUYS, LAPORAN DARI DAPUR. stok mie awal 24 bungkus. malem pertama dimakan sepertiga, itu 8, sisa 16. malem kedua dimakan SETENGAH DARI SISA, gue kira tinggal dikit, ternyata itu 8 lagi, sisa 8. penghuni kos nanya kok cepet habis. gue cek catatan: sepertiga dari 24 itu 8, setengah dari 16 itu 8. ITUNGANNYA BENER. jadi yang salah apa? kecepatan makan anak kos apa persentase yang bikin gak sadar? GUYS tolong jawab sebelum malem ketiga, sisa 8 itu bayangan",
    comments: [
      { authorId: 44, minutesAgo: 1487, content: "itungan lu bener guys, yang gak bener keyakinannya. setengah dari sisa itu selalu terasa dikit padahal besar" },
      { authorId: 154, minutesAgo: 1479, content: "malem ketiga habis lagi wkwk. mie gak pernah lolos dari kos" },
      { authorId: 336, minutesAgo: 1471, content: "kalau mau awet guys, ganti aturannya: malem ketiga maksimal sepertiga dari sisa, itu 5 bungkus doang. sisa 13, hidup lebih tenang" },
    ],
  },
]
