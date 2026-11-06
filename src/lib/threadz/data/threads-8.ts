import type { ThreadzThread } from "../types"

// PART 8: cuitan 176-200 — ROMBAK V5 (6 Nov 2026): total ganti isi jadi FORUM
// MATEMATIKA (V3 lama masih diary harian). Slot teknis TIDAK berubah:
// id 176-200, authorId 26-50 urut, minutesAgo = 25 + 30*(id-1), komentar
// menyebar 0-6, komentar minutesAgo lebih kecil dari post-nya.
// Aturan lengkap: scripts/rumus-v2.md BAGIAN 1G + FORMULA HITAM 19 POLA.
// Tema file ini: pola, logika & bilangan — bentuk BARU.
export const THREADS_PART8: ThreadzThread[] = [
  {
    id: 176,
    authorId: 26,
    minutesAgo: 5275,
    shares: 16,
    content:
      "nah bro, nomor angkot di pool gue: 14, 21, 28. anak kondektur baru nanya, nomor berikutnya berapa. gue jawab 35, soalnya nambah 7 terus. dia bilang kok cepet banget ngitungnya. gue bilang kelipatan 7 doang bro. dia masih bengong. pertanyaan gue: cara ngejelasin pola nambah tetap ke anak baru itu gimana bro, pake contoh apa yang dia paham dalam 30 detik",
    comments: [
      { authorId: 137, minutesAgo: 5267, content: "bilang aja bro: 14 itu dua kali 7, 21 tiga kali 7, 28 empat kali 7. nomor berikutnya lima kali 7 = 35. rapi" },
      { authorId: 186, minutesAgo: 5259, content: "35 bener bro. kasih dia karcisnya aja, angka di karcis kelipatan 7 semua, dia akan lihat sendiri" },
    ],
  },
  {
    id: 177,
    authorId: 27,
    minutesAgo: 5305,
    shares: 8,
    content:
      "susunan karung di gudang kami bentuk piramida: lapisan bawah 3, tengah 2, atas 1, total 6 karung satu piramida. kepala gudang minta piramida empat lapis: 4 + 3 + 2 + 1 = 10. anak magang nanya, kalau lima lapis berapa. gue hitung 5 + 4 + 3 + 2 + 1 = 15. dia bilang kok naiknya 5, bukan 4. saya jawab karena lapisan barunya sendiri adalah 5. dia mengangguk seperti tidak yakin. tolong konfirmasi 15 itu benar ya, sebelum dia susun 15 karung untuk sesuatu yang salah",
    comments: [
      { authorId: 240, minutesAgo: 5297, content: "15 benar pak. naiknya selalu sebesar lapisan baru yang ditambahkan" },
      { authorId: 272, minutesAgo: 5289, content: "trik cepat pak: jumlahkan ujungnya lalu kali banyak lapisan. (5+1) × 5 ÷ 2 = 15. sama hasilnya" },
      { authorId: 205, minutesAgo: 5281, content: "piramida 6 lapis jadi 21 pak. biar anak magang lihat polanya: 6, 10, 15, 21, selisihnya 4, 5, 6" },
    ],
  },
  {
    id: 178,
    authorId: 28,
    minutesAgo: 5335,
    shares: 27,
    content:
      "KUIS BILANGAN PRIMA DAN SATU JAWABAN BIKIN KELAS RUSUH WKWKWK. soal: tulis semua prima antara 30 dan 40. gue jawab 31 dan 37. temen gue nambah 33 sama 39, KATANYA ANGKANYA KEREN JADI KEBAYANG PRIMA. terus gue cek: 33 = 3 × 11, 39 = 3 × 13. DUA-DUANYA BUKAN PRIMA. dia masih ngeyel, KATANYA GAK DIBAGI APA2 KOK. gue bawa bukti perkalian ke mejanya. WKWKWK. pertanyaan gue ke kalian: kenapa ya orang otomatis ngerasa angka gede itu prima, padahal 3 sama 11-13 itu pembunuh senyap",
    comments: [
      { authorId: 131, minutesAgo: 5327, content: "karena orang cek pembagi kecil doang bre, 2 sama 5. 3 itu pembagi yang gak keliatan dari angka terakhirnya" },
      { authorId: 223, minutesAgo: 5319, content: "trik bre: jumlah digit. 3+3 = 6 habis dibagi 3. 3+9 = 12 habis dibagi 3. dua-duanya mati begitu" },
      { authorId: 313, minutesAgo: 5311, content: "prima antara 30-40 memang cuma 31 sama 37 bre. jawaban lu aman, temen lu kena jebakan estetika wkwk" },
      { authorId: 84, minutesAgo: 5303, content: "jangan bawa bukti perkalian ke meja orang, bawa ke papan tulis. harga diri penting bre wkwk" },
    ],
  },
  {
    id: 179,
    authorId: 29,
    minutesAgo: 5365,
    shares: 10,
    content:
      "kotak baut di bengkel om: 8, 12, 16, 20 butir. om nanya kotak ke-10 isinya berapa. gue itung nambah 4 tiap kotak: 8 + 4 × 9 = 44. om bilang kok 9 kali, bukan 10. gue jawab karena kotak pertama udah 8, sisanya 9 loncatan. om diam, terus ngangguk sambil pegang kunci 14. bener kan 44 ya, gue gak mau ngulang itungan ini depan om lagi",
    comments: [
      { authorId: 186, minutesAgo: 5357, content: "44 bener om muda. 9 loncatan × 4 = 36, ditambah kotak pertama 8 = 44" },
      { authorId: 240, minutesAgo: 5349, content: "rumusnya 4n + 4. kotak 1 dapet 8 ✓, kotak 10 dapet 44 ✓. loncatannya selalu 4, titik awalnya 8" },
      { authorId: 213, minutesAgo: 5341, content: "ngangguk sambil pegang kunci itu bahasa om yang artinya gue benar wkwk" },
    ],
  },
  {
    id: 180,
    authorId: 30,
    minutesAgo: 5395,
    shares: 15,
    content:
      "Si anak menemukan kegembiraan baru: logika. Hari ini kita berlatih dua kalimat. Kalimat satu: semua kucing suka ikan. Ia menyimpulkan kucingnya suka ikan, dan itu sah. Kalimat dua: semua yang suka ikan adalah kucing. Ia menyimpulkan bebek tetangga yang suka ikan adalah kucing, lalu tertawa sangat lama. Saya ingin melatih logika lebih dalam tanpa membuatnya jadi anak yang menantang semua kalimat di rumah. Adakah soal logika ringan yang pernah berhasil di tangan anak usia SMP, semacam yang membuat tertawa tetapi tetap berpikir?",
    comments: [
      { authorId: 258, minutesAgo: 5387, content: "kalimat satu arah bu: semua kucing suka ikan tidak berarti semua penyuka ikan adalah kucing. kasih dia dua lingkaran yang tumpang tindih, bebek tinggal di lingkaran ikan luar" },
      { authorId: 268, minutesAgo: 5379, content: "soal yang berhasil di siswa saya bu: kalau hujan jalanan basah. jalanan basah apakah selalu karena hujan? anak akan menemukan kunci sendiri" },
      { authorId: 336, minutesAgo: 5371, content: "bebek penyuka ikan disebut kucing itu pintu masuk terbaik bu. tertawa dulu, berpikir kemudian" },
    ],
  },
  {
    id: 181,
    authorId: 31,
    minutesAgo: 5425,
    shares: 13,
    content:
      "mesin kasir reset sendiri jam pagi, nomor struk balik ke 1 setelah semalaman jalan dari 103 ke 104. pelanggan jam 08.05 terima struk nomor 1 dan langsung curiga toko baru buka, padahal toko gue umur 4 tahun. auditor juga pasti tanya kenapa ada loncatan dari 104 ke 1. kalian kalau menghadapi nomor urut yang balik ke awal, cara menjelaskan ke pelanggan sama auditor itu seperti apa? gue cuma mau struk yang gak bikin orang mikir aneh",
    comments: [
      { authorId: 205, minutesAgo: 5417, content: "tempel kertas kecil di mesin: nomor berulang tiap 104 struk. pelanggan baca, auditor baca, selesai" },
      { authorId: 240, minutesAgo: 5409, content: "catat di buku: reset jam 08.00, struk terakhir 104. satu baris itu menyelamatkan satu rapat audit" },
      { authorId: 84, minutesAgo: 5401, content: "struk nomor 1 bukan bukti toko baru, cuma bukti mesin hidup lagi. tenang aja" },
    ],
  },
  {
    id: 182,
    authorId: 32,
    minutesAgo: 5455,
    shares: 12,
    content:
      "pagi bawa 40 ikat sayur. tiap jam laku 5 ikat. pasar buka 6 jam. gue itung: 5 × 6 = 30 ikat laku, sisa 10. tapi kenyataannya jam 12.00 gue nyaris kosong, laku kayaknya 34-35. berarti tiap jamnya gak rata ya teh hitungnya. jam pagi laku lebih banyak? gue gak pernah catat per jam sebelumnya. teh mau mulai catat, ada saran bentuk catatan yang gak bikin tangan keramas",
    comments: [
      { authorId: 102, minutesAgo: 5447, content: "catat teh per dua jam aja: 05-07, 07-09, 09-11. empat kolom doang, nggak repot, polanya kelihatan" },
      { authorId: 84, minutesAgo: 5439, content: "5 × 6 = 30 itu kalau tiap jam sama teh. nyatanya pagi rakus, sore pelan. catatan per jam bakal nunjukin" },
      { authorId: 15, minutesAgo: 5431, content: "kite sama teh, pagi itu yang emas. bawa stok lebih di dua jam pertama, sisa tak perlu banyak" },
    ],
  },
  {
    id: 183,
    authorId: 33,
    minutesAgo: 5485,
    shares: 22,
    content:
      "Resep menyebut 7 sendok teh gula. Sendok di dapurku: sendok makan dan sendok teh. Aku tahu 1 sendok makan memuat 3 sendok teh. Hitunganku: 2 sendok makan = 6 sendok teh, ditambah 1 sendok teh, jadi 7. Yang ingin saya pastikan: apakah 2 sendok makan + 1 sendok teh memang tepat 7 sendok teh, atau ada selisih karena bentuk sendoknya beda? Saya tidak ingin manisnya berlomba dengan kejadian kue kemarin yang rasanya seperti roti tawar",
    comments: [
      { authorId: 277, minutesAgo: 5477, content: "1 sendok makan = 3 sendok teh adalah takaran standar bu. 2 × 3 + 1 = 7. manisnya aman" },
      { authorId: 90, minutesAgo: 5469, content: "selisih antar sendok rumah biasanya kecil bu, yang lebih berpengaruh itu gula ditumpuk rata atau digunung" },
      { authorId: 22, minutesAgo: 5461, content: "wkwk digunung itu namanya sendok tersenyum ya bu. oke, diratakan semua" },
    ],
  },
  {
    id: 184,
    authorId: 34,
    minutesAgo: 5515,
    shares: 6,
    content:
      "ronde 45 menit sekali, mulai 22.00. urutan: 22.00, 22.45, 23.30, 00.15, 01.00, 01.45. ronde ke-6 jam 01.45. logbook ditulis. gantian 02.00. masalah kecil: ronde ke-5 cuma berjarak 45 menit dari ke-4, kok rasanya mepet banget di 01.00. memang 45 menit ya, gak salah tulis.",
    comments: [
      { authorId: 199, minutesAgo: 5507, content: "45 menit konsisten pak, dari 22.00 sampai 01.45 enam ronde pas. rasanya mepet karena jam ke-1 pagi tidak pernah sopan" },
      { authorId: 240, minutesAgo: 5499, content: "bener pak, 45 menit × 5 jeda = 225 menit = 3 jam 45 menit. 22.00 + 3:45 = 01.45" },
      { authorId: 272, minutesAgo: 5491, content: "logbook rapi pakai jam, bukan perasaan. ronde 6 jam 01.45 sah" },
    ],
  },
  {
    id: 185,
    authorId: 35,
    minutesAgo: 5545,
    shares: 12,
    content:
      "mikir: kenapa cuma angka 2 yang prima dan genap sekaligus. angka genap lain kan semua habis dibagi 2, jadi otomatis punya tiga pembagi. kelar. tapi kenapa gak ada satu pun prima genap lainnya, kok cuma satu benda aneh di tengah semua angka. nanya ke guru, guru bilang karena definisi. definisi itu jawaban atau dinding? mikirnya sampe lupa jajan wkwk",
    comments: [
      { authorId: 227, minutesAgo: 5537, content: "genap artinya habis dibagi 2 bre. prima genap otomatis habis dibagi 1, dirinya, dan 2. kalau dirinya memang 2, pembaginya cuma dua. itu sebabnya 2 sendirian" },
      { authorId: 313, minutesAgo: 5529, content: "definisi itu dinding yang dibangun supaya jawaban gak melayang bre. 2 aneh memang, dia pintu masuk dunia prima" },
      { authorId: 118, minutesAgo: 5521, content: "jajanan dulu bre, matematika gak ke mana-mana wkwk" },
    ],
  },
  {
    id: 186,
    authorId: 36,
    minutesAgo: 5575,
    shares: 16,
    content:
      "JADWAL HAFALAN RUSAK DAN GUE PANIK BANGET. target 60 istilah dalam 4 hari, artinya 15 per hari. HARI KEDUA KELEWAT GARA-GARA JAGA LAMPAU. sisa istilah 45 buat 2 hari, per hari 22,5. SETENGAH ISTILAH ITU GIMANA, hafal separuh kata terus tidur? gue pikir dua opsi: hari ini 22 dan besok 23, ato hari ini 23 besok 22. GUE MAU DUA-DUANYA TAPI OTAK GAK SETUJU. yang pernah ngejar hafalan begini, kalian pilih angka yang mana",
    comments: [
      { authorId: 212, minutesAgo: 5567, content: "pilih 23 dulu, sisa 22 besok. beban penutup harus lebih ringan biar tidur cukup sebelum kuis" },
      { authorId: 227, minutesAgo: 5559, content: "22,5 itu rata-rata kak, bukan kewajiban. bagi 23-22 biar ujungnya ringan 🙃" },
      { authorId: 143, minutesAgo: 5551, content: "hafal 23 hari ini, besok 22 dan ulang cepat 45 istilah. ulang itu yang menentukan, bukan angkanya" },
    ],
  },
  {
    id: 187,
    authorId: 37,
    minutesAgo: 5605,
    shares: 9,
    content:
      "Bocah sebelah sore tadi menata batu-batu kecil di tanah: satu, lalu satu lagi, lalu dua, tiga, lima, delapan. Saya memperhatikan dari jendela sambil menutup tenda jendela. Setiap batu baru adalah jumlah dua batu sebelumnya, dan ia tahu itu tanpa membaca buku. Ketika hampir sore, ia berdiri dan berkata tangganya belum selesai. Yang membuat saya menulis ini: dari mana anak-anak menemukan pola seperti itu tanpa diperintah? Apakah semua anak menyimpan tata rasa bilangan seperti ini, hanya saja tidak semua menemukan tanah yang pas untuk menatanya?",
    comments: [
      { authorId: 258, minutesAgo: 5597, content: "pola itu bernama Fibonacci pak. anak menemukannya lewat benda, itulah cara matematika terbaik belajar" },
      { authorId: 268, minutesAgo: 5589, content: "semua anak menyimpan rasa pola pak. yang berbeda adalah kesempatan dan tanahnya. kasih dia batu lagi minggu depan" },
      { authorId: 199, minutesAgo: 5581, content: "tangga belum selesai berarti anak masih berpikir pak. biarkan, dia akan kembali kecil hati besok pagi" },
    ],
  },
  {
    id: 188,
    authorId: 38,
    minutesAgo: 5635,
    shares: 20,
    content:
      "bunda, PR pola: 2, 6, 18, 54, ... aku jawab berikutnya 162 soalnya tiap angka kali 3. 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54, 54 × 3 = 162. temen aku bilang nambah aja: 2 + 4 = 6, 6 + 12 = 18... eh dia gak bisa lanjut, nambahnya 4 lalu 12, gak rata. jadi punya aku yang bisa dilanjut kan bunda? tolong cek, kalau benar aku mau tulis alasan kali tiga di PR-nya biar gurunya paham aku mikir",
    comments: [
      { authorId: 63, minutesAgo: 5627, content: "benar dik, 162. polanya kali 3, dan alasanmu di PR itu justru yang dinilai guru, bukan cuma angkanya" },
      { authorId: 143, minutesAgo: 5619, content: "temenmu menemukan bahwa beda antar angka itu 4, 12, 36, selalu kali 3 juga dik. tapi cara kali 3 kamu lebih langsung" },
      { authorId: 24, minutesAgo: 5611, content: "KALI TIGA TERUS ITU POLA RAPI. CUCU KU JUGA SUKA. TULIS ALASANNYA, JANGAN CUMA ANGKA. NENEK MENGAWASI" },
      { authorId: 187, minutesAgo: 5603, content: "2, 6, 18, 54, 162. lima angka itu kuadrat tiga dik: 3 dipangkatkan berurutan dikali... cek aja, jawabanmu bersih" },
    ],
  },
  {
    id: 189,
    authorId: 39,
    minutesAgo: 5665,
    shares: 32,
    content:
      "Trik yang saya tunjukkan ke cucu pemilik warung dekat rumah: kuadrat yang berujung 5. Contoh 35 × 35. Ambil digit depannya 3, kalikan bilangan sesudahnya, yaitu 4: 3 × 4 = 12. Tempel 25 di belakang: 1.225. Coba 75: 7 × 8 = 56, jadi 5.625. Kurang lebih sama persis dengan menghitung 75 × 75 di kertas, tetapi jauh lebih cepat. Cucu itu mencoba 45, menemukan 2.025, lalu tertawa seperti menemukan uang. Kurang lebih begitu. Adakah trik lain yang membuat orang tertawa setelah menemukan jawabannya?",
    comments: [
      { authorId: 318, minutesAgo: 5657, content: "45² = 2.025 benar pak. trik itu sah untuk semua angka berujung 5" },
      { authorId: 262, minutesAgo: 5649, content: "alasannya pak: (10a+5)² = 100a² + 100a + 25 = 100 × a(a+1) + 25. 25 selalu nyangsung di belakang" },
      { authorId: 283, minutesAgo: 5641, content: "trik pembuat orang tertawa adalah trik terbaik pak. 115 × 115 = 13.225, masih jalan sampai angka besar" },
      { authorId: 258, minutesAgo: 5633, content: "cucu warung itu menemukan kegembiraan yang langka pak: matematika yang terasa seperti sulap" },
    ],
  },
  {
    id: 190,
    authorId: 40,
    minutesAgo: 5695,
    shares: 13,
    content:
      "kebun baru ditanam: baris pertama 1 lubang, baris kedua 3, ketiga 5, keempat 7. cucu aku bilang baris ke-6 pasti 11, katanya bilangan ganjil berurutan. aku hitung pakai batang korek: baris 1 = 1, baris 2 = 1+2 = 3, baris 3 = 3+2 = 5. JADI BARIS 6 = 11 KAN. cucu aku seneng banget sampe lupa makan. aku ikut seneng, kenapa ya angka ganjil itu kayak rapi susunannya",
    comments: [
      { authorId: 84, minutesAgo: 5687, content: "11 benar bu. baris ke-n itu 2n − 1. baris ke-6 = 12 − 1 = 11" },
      { authorId: 90, minutesAgo: 5679, content: "bilangan ganjil itu memang rapi bu, jumlahnya selalu berbentuk persegi kalau ditaruh berdiri" },
      { authorId: 199, minutesAgo: 5671, content: "cucu seneng sampe lupa makan itu harga mati bu wkwk. kebun baru yang menghasilkan dua panen" },
    ],
  },
  {
    id: 191,
    authorId: 41,
    minutesAgo: 5725,
    shares: 4,
    content:
      "resi 4723. tiga digit pertama 4+7+2 = 13. digit ceknya 13 mod 10 = 3. cocok digit terakhir. resi sah. sistem gak bohong. gue yang sering lupa ini memang rumus sistem, bukan perasaan.",
    comments: [
      { authorId: 240, minutesAgo: 5717, content: "bener bro, digit cek itu penjaga typo. 13 sisa 3, resi jalan" },
    ],
  },
  {
    id: 192,
    authorId: 42,
    minutesAgo: 5755,
    shares: 21,
    content:
      "wifi kos 200 ribu, penghuni 7 orang. aku hitung 200.000 ÷ 7 = 28.571,428... ribet. jadi aku bulatkan 28.500 per orang. total 28.500 × 7 = 199.500. KURANG 500. siapa yang nutup 500 itu. aku bukan hemat, aku cuma gak mau bon wifi gak pas. kalian kalau jadi pengurus kos, bulatkan ke atas atau ke bawah? ke atas berarti ada satu orang rugi 3.500, ke bawah berarti aku nutup 500 tiap bulan",
    comments: [
      { authorId: 60, minutesAgo: 5747, content: "bulatkan ke atas bu, 28.600 × 7 = 200.200, lebihnya 200 disimpan buat penuangan kopi darurat" },
      { authorId: 84, minutesAgo: 5739, content: "atau ambil 29.000 bu, lebihnya 3.000 jadi dana router yang mati mendadak. wifi itu hidup mahal" },
      { authorId: 106, minutesAgo: 5731, content: "200.000 ÷ 7 itu 28.571 bu. ke bawah 28.500 itu pilihan paling sopan, 500 ditutup pengurus. rasa aman penghuni lebih penting" },
      { authorId: 143, minutesAgo: 5723, content: "catat di grup bu: 28.500 + 500 dari kas kos. transparan, gak ada yang mikir aneh" },
    ],
  },
  {
    id: 193,
    authorId: 43,
    minutesAgo: 5785,
    shares: 8,
    content:
      "mesin cetak satu unit per 90 detik. order 1.000 unit. gue itung: 1.000 × 90 = 90.000 detik = 25 jam. satu mesin gak mungkin, dua mesin 12,5 jam, tiga mesin sekitar 8,3 jam. kepala gudang bilang pakai dua mesin dan lembur 5 jam. gue cek: 1.000 × 90 ÷ 2 = 45.000 detik = 12,5 jam. pas. pertanyaan gue: 8,3 jam itu artinya 8 jam 18 menit kan, atau 8 jam 30 menit? gue gak mau salah hitung jam lembur orang, itu urusan hidup mati di kantor",
    comments: [
      { authorId: 240, minutesAgo: 5777, content: "8,33 jam itu 8 jam 20 menit pak. 0,33 × 60 = 19,8, kira-kira 20" },
      { authorId: 272, minutesAgo: 5769, content: "tulis di laporan jam:menit, jangan desimal pak. 8:20 itu manusiawi, 8,33 itu kalkulator" },
      { authorId: 236, minutesAgo: 5761, content: "90.000 ÷ 3.600 = 25 jam benar pak. dua mesin 12,5 jam. lembur 5 jam di atas 7,5 jam itu pas" },
    ],
  },
  {
    id: 194,
    authorId: 44,
    minutesAgo: 5815,
    shares: 5,
    content:
      "wkwk gue kalah sama kasir. mie 3.500 + telur 2.500 + es teh 2.000 = 8.000. gue bayar 10.000. kasir balikin 1.500. gue terima tanpa mikir, udah jalan 20 meter, kepala nyala: KOK 1.500, harusnya 2.000. gue balik, kasir cek kalkulator, ternyata gue yang telat sadar. GUE YANG KALAH ITUNGAN DOANG, KASIR BENER. wkwk gimana sih biar otak otomatis itung kembalian, gak kaya komputer lawas yang harus direset dulu",
    comments: [
      { authorId: 152, minutesAgo: 5807, content: "10.000 − 8.000 = 2.000 bre. jurusnya jangan hitung uang balik, hitung sisa dari belanjaanmu" },
      { authorId: 331, minutesAgo: 5799, content: "kasir balikin kurang itu kejadian umum bre, gue sering. kebiasaan terima tanpa lihat itu dosa malam wkwk" },
      { authorId: 23, minutesAgo: 5791, content: "reset otak bre itu namanya tidur. minimal 5 jam wkwk" },
    ],
  },
  {
    id: 195,
    authorId: 45,
    minutesAgo: 5845,
    shares: 19,
    content:
      "Menara masjid berbunyi 06.00, saya keluar rumah tepat saat suara kedua. Kembali melewati gerbang 06.40. Empat puluh menit jalan kaki tanpa terganggu apa pun kecuali seekor ayam yang menyeberang dengan keyakinan penuh. Tidak ada yang perlu dihitung hari ini, kecuali berterima kasih pada pagi yang memberi empat puluh menit penuh. Demikian laporan pagi.",
    comments: [
      { authorId: 283, minutesAgo: 5837, content: "40 menit penuh itu warisan pagi pak. ayam menyeberang itu hitungan yang tak perlu diperdebatkan" },
      { authorId: 258, minutesAgo: 5829, content: "laporan pagi yang tenang pak. besok rutenya sama lagi ya" },
    ],
  },
  {
    id: 196,
    authorId: 46,
    minutesAgo: 5875,
    shares: 10,
    content:
      "Formulir semester baru: nomor urut murid 1 sampai 250. Satu halaman memuat 20 kotak. 250 ÷ 20 = 12,5. Setengah halaman itu tidak bisa dicetak, jadi totalnya 13 halaman dengan 10 kotak kosong di akhir. Bos bertanya kenapa tidak 12 halaman agar rapi. Karena 12 × 20 = 240, kurang 10 kotak untuk 10 murid yang tidak punya tempat tertulis 😅. Sekarang halaman ke-13 hanya berisi sepuluh kotak dan satu catatan kaki. Sebelum rapat besok, mohon konfirmasi: 13 halaman itu benar ya, gak ada cara lain yang lebih rapi?",
    comments: [
      { authorId: 268, minutesAgo: 5867, content: "benar kak, 13 halaman. alternatifnya 15 kotak per halaman jadi 17 halaman penuh, tapi itu lebih banyak kerja, bukan lebih rapi" },
      { authorId: 227, minutesAgo: 5859, content: "10 kotak kosong di akhir itu sah kak, biasanya justru dipakai murid mutasi. kasih catatan: cadangan 😅" },
      { authorId: 322, minutesAgo: 5851, content: "250 ÷ 20 = 12,5 → 13 halaman kak. angka bulat itu mitos kantor wkwk" },
    ],
  },
  {
    id: 197,
    authorId: 47,
    minutesAgo: 5905,
    shares: 17,
    content:
      "Nasabah menyetor koin seratus keping seribu rupiah, total 100.000, dalam satu tas plastik yang berbunyi seperti hujan. Saya menghitung manual selama 12 menit dengan mesin hitung koin yang berjalan pelan. Totalnya tepat. Nasabah bertanya apakah saya kesal, karena menunggu 12 menit terasa lama. Saya menjawab koin tidak boleh ditebak. Yang ingin saya tanyakan ke rekan teller: apakah 12 menit itu wajar untuk 100 keping, atau ada cara hitung yang lebih cepat yang belum saya temukan?",
    comments: [
      { authorId: 84, minutesAgo: 5897, content: "100 keping itu 7 detik per keping pak, sudah wajar dengan mesin pelan. jangan dipercepat, akurat lebih mahal daripada cepat" },
      { authorId: 262, minutesAgo: 5889, content: "kalau mesinnya memungkinkan, timbang dulu pak: 100 koin 1.000 itu standar berat tertentu. timbangan mengecewakan, hitungan menegaskan" },
      { authorId: 283, minutesAgo: 5881, content: "12 menit pak, dan nasabah pulang dengan keyakinan penuh. itu pulsa layanan yang sah" },
    ],
  },
  {
    id: 198,
    authorId: 48,
    minutesAgo: 5935,
    shares: 5,
    content:
      "Rak katalog memakai kode A1 sampai A20, tiap rak empat tumpuk, jadi 80 posisi. Buku katalog hari ini 63. Sisa 17 posisi kosong, menunggu buku yang belum tiba. Kosong bukan kekurangan. Kosong adalah ruang yang sedang dijanjikan.",
    comments: [
      { authorId: 336, minutesAgo: 5927, content: "17 posisi kosong pak, dan kalimat penutupnya lebih rapi dari katalognya" },
    ],
  },
  {
    id: 199,
    authorId: 49,
    minutesAgo: 5965,
    shares: 29,
    content:
      "bos-bos, itung antrian tadi siang. datang 6 orang: 2 minta model rumit, 30 menit per kepala, 4 model biasa, 15 menit. gue itung: 2 × 30 = 60, 4 × 15 = 60, total 120 menit = 2 jam. yang pertama duduk 13.00, yang terakhir selesai 15.00. dia nanya kok lama, gue bilang karena rambutnya panjang doang, waktunya sama keadilan. kalian kalau duduk nomor 6 di barbershop, biasanya tetap nunggu atau kabur cari yang sepi",
    comments: [
      { authorId: 118, minutesAgo: 5957, content: "2 jam itu standar bos. kabur itu rugi, rambut bakal nyari bos balik" },
      { authorId: 199, minutesAgo: 5949, content: "60 + 60 = 120 bener bos. nomor 6 itu menunggu rambut terakhir, gajinya kecil tapi cukup" },
      { authorId: 240, minutesAgo: 5941, content: "gue sih nunggu bos, kabur ke tempat sepi biasanya nemu jawatan baru yang modelnya lebih lambat wkwk" },
    ],
  },
  {
    id: 200,
    authorId: 50,
    minutesAgo: 5995,
    shares: 26,
    content:
      "GUYS, LAPORAN SOSIS. stok 18 batang. tiap porsi 2 batang, gue rencana 8 porsi. gue itung: 2 × 8 = 16. sisa 2. DUA BATANG SOSIS SISA, GUYS. tamu datang 9 orang mendadak. 9 × 2 = 18. PAS, KOSONG HABIS. gue bingung pilih mana: hitungan 8 porsi yang sisa 2, atau hitungan 9 tamu yang pas. GUYS GUE MAU JAWABAN DARI KALIAN, bukan dari dapur, soalnya dapur udah memilih 9 tamu dan gue gak diikutkan rapat",
    comments: [
      { authorId: 44, minutesAgo: 5987, content: "9 tamu guys, sosis gak kenal rapat. dua batang sisa memang ditakdirkan buat tamu kesembilan" },
      { authorId: 154, minutesAgo: 5979, content: "2 × 8 = 16 guys, sisa 2. 9 × 2 = 18 pas. tamu menang, dapur menang, gak ada yang sisa" },
      { authorId: 336, minutesAgo: 5971, content: "tambahan guys: potong 2 sisa jadi 4 setengah batang, jadi campuran. sosis berdamai dengan hitungan" },
    ],
  },
]
