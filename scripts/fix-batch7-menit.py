#!/usr/bin/env python3
# Perbaikan BATCH 7 (threads-11.ts):
# 1) menit post & komentar id 261-274 mengikuti rumus 25+30*(id-1) dengan pola jarak template
# 2) panjang post: 259/266 diperpanjang ke 350-550, 261/271 ke 550+, 269 ke 350-550, 275 dipendekkan <130
# 3) komentar berawalan angka+titik (pola daftar bernomor) diubah
import re, sys

P = "src/lib/threadz/data/threads-11.ts"
s = open(P).read()

TARGET = {
 261: [7825, 7811,7796,7781,7767,7752,7738,7723,7708,7693,7678,7663,7648,7633,7618,6990],
 262: [7855, 7840,7822,7801,7784,7760,7741,7715,7690,7661,7628,7596,7080],
 263: [7885, 7870,7854,7838,7821,7805,7789,7772,7756,7740,7723,7707,7691,7674,7658,7642,7627,7612,7598,7585,6890],
 265: [7945, 7932,7918,7904,7889,7873,7858,7843,7827,7811,7793,7775,7757,7739,7721,7702,7683,7240],
 266: [7975, 7959,7943,7926,7908,7891,7874,7857,7840,7823,7806,7789,7772,7130],
 267: [8005, 7991,7976,7962,7947,7932,7916,7901,7885,7869,7853,7837,7820,7803,7786,7769,7751,7733,7715,6980],
 268: [8035, 8020,8002,7985,7967,7949,7930,7911,7892,7873,7854,7835,7817,7798,7180],
 269: [8065, 8048,8031,8014,7996,7979,7961,7944,7927,7910,7893,7876,7859,7842,7825,7808,7330],
 270: [8095, 8078,8061,8046,8029,8011,7992,7970,7948,7929,7909,7240],
 271: [8125, 8110,8094,8077,8061,8045,8028,8011,7994,7977,7960,7943,7926,7909,7892,7874,7857,7840,7410],
 272: [8155, 8140,8122,8101,8084,8060,8041,8015,7990,7961,7928,7896,7380],
 273: [8185, 8171,8156,8141,8127,8112,8098,8083,8068,8053,8038,8023,8008,7993,7978,7350],
 274: [8215, 8200,8184,8168,8151,8135,8119,8102,8086,8070,8053,8037,8021,8004,7988,7972,7957,7942,7928,7915,7220],
}

# pecah blok per post
blocks = re.split(r'(?=\n  \{\n    id: )', s)
out = []
changed = 0
for b in blocks:
    m = re.match(r'\n  \{\n    id: (\d+),', b)
    if m:
        pid = int(m.group(1))
        if pid in TARGET:
            vals = TARGET[pid]
            idx = -1
            def rep(mo):
                global idx
                idx += 1
                return f"minutesAgo: {vals[idx]}"
            b2, n = re.subn(r'minutesAgo: \d+', rep, b)
            if n != len(vals):
                print(f"!! id {pid}: {n} minutesAgo ditemukan, target {len(vals)}"); sys.exit(1)
            b = b2
            changed += 1
    out.append(b)
s = "".join(out)
print(f"menit diperbaiki untuk {changed} post")

GANTI = [
 # 259 diperpanjang (350-550)
 ("Deret geometri U1 = 3, rasio 2. Saya hitung U8 = 3 × 2^7 = 384. Jumlah delapan suku: 3(2^8 − 1)/(2−1) = 3 × 255 = 765. Cek: 3+6+12+24+48+96+192+384 = 765. Benar kan? Guru minta dua cara, cara kedua saya itung manual di atas",
  "Deret geometri U1 = 3, rasio 2. Guru minta dua cara sekaligus. Cara rumus: U8 = 3 × 2^7 = 384, jumlah delapan suku Sn = 3(2^8 − 1)/(2−1) = 3 × 255 = 765. Cara manual: 3+6+12+24+48+96+192+384, aku jumlah pelan-pelan dan hasilnya 765 juga. Yang bikin ragu cuma satu: temen bilang rumusnya 3(2^8 − 2), dapat 762, dan dia yakin karena 2^8 harus dikurangi suku pertama juga. Cek siapa yang bener dong, nilai PR tergantung dua cara ini konsisten"),
 # 266 diperpanjang (350-550)
 ("Soal perbandingan berbalik nilai: 12 pekerja menyelesaikan gudang dalam 4 hari. Kalau cuma 8 pekerja, berapa hari? Itunganku: total kerja 12×4 = 48 pekerja-hari, dibagi 8 = 6 hari. Temen dapat 5,33 hari karena dia itung 4 × 8/12 — kebalik bagi. Cek dong, sekalian jelasin kenapa pekerja lebih sedikit HARUS lebih lama",
  "Soal perbandingan berbalik nilai: 12 pekerja menyelesaikan gudang dalam 4 hari. Kalau cuma 8 pekerja, berapa hari? Itunganku: total kerja 12×4 = 48 pekerja-hari, dibagi 8 = 6 hari. Temen dapat 5,33 hari karena dia itung 4 × 8/12 — kebalik bagi. Aku coba ekstrem biar yakin: 1 pekerja doang berarti 48 hari sendirian, jadi makin dikit orang makin lama. Cek dong itunganku, sekalian cara paling aman jelasinnya ke dia tanpa kedengeran menggurui"),
 # 261 diperpanjang (550+)
 ("Segitiga siku-siku, sudut terkecil 30°, sisi miring 20 cm. Sisi terpendek saya hitung 10 cm karena berhadapan 30°, dan sisi satunya 10√3 ≈ 17,3 cm. Temen ragu kenapa bisa langsung 10 tanpa Pythagoras. Jelasinnya gimana ya biar cepet dipahami?",
  "Segitiga siku-siku dengan sudut terkecil 30° dan sisi miring 20 cm. Sisi terpendek saya langsung tulis 10 cm karena berhadapan dengan 30°, dan sisi satunya 10√3 ≈ 17,3 cm. Temen sebangku ragu, dia bilang kok bisa langsung bagi dua tanpa Pythagoras, padahal kemarin soal tangga 13-5-12 saja harus itung akar dulu. Aku coba bukti balik: 10² + (10√3)² = 100 + 300 = 400 = 20², jadi kok pas, tapi dia tetep nanya dari mana aturan bagi dua itu lahir. Guru minta dijelasin pakai gambar di kertas folio, bukan cukup tulis rumus sin 30 = 1/2. Ada yang punya cara visual yang gampang dipahami orang yang masih benci trigonometri?"),
 # 271 diperpanjang (550+)
 ("Merasionalkan penyebut: 1/(√5 − 2). Itunganku: kali (√5 + 2) atas bawah, penyebut jadi (√5)² − 2² = 5 − 4 = 1, hasilnya √5 + 2. Penyebutnya pas 1 bikin kaget, gak perlu disederhanain lagi. Cek ya, dan √5 + 2 ≈ 4,236 kan?",
  "Merasionalkan penyebut: 1/(√5 − 2). Itunganku: dikali (√5 + 2) di atas dan bawah, penyebut jadi (√5)² − 2² = 5 − 4 = 1, jadi hasilnya √5 + 2 ≈ 4,236. Penyebutnya pas 1 bikin kaget, biasanya masih ada sisa di bawah. Temen dapat (√5+2)/5 karena dia salah ngali, penyebutnya dia tulis (√5)² − 2 = 3 terus tetep 5, gak konsisten gitu. Aku yakin identitas (a−b)(a+b) = a²−b² kepake di sini, tapi biar kukuh tolong cek: apakah bener penyebut jadi persis 1, dan apa ada kasus serupa di soal lain yang penyebutnya gak 1 biar aku bisa bandingin?"),
 # 269 diperpanjang (350-550)
 ("Soal garis singgung: titik P berjarak 13 cm dari pusat lingkaran, jari-jari 5 cm. Panjang garis singgung dari P ke titik singgung? Hitunganku: garis singgung tegak lurus jari-jari, jadi segitiga siku-siku dengan sisi miring 13 dan sisi datar 5. Pythagoras: 13² − 5² = 169 − 25 = 144, akarnya 12 cm. Terlalu mulus? Kayanya tripel 5-12-13 lagi",
  "Soal garis singgung lingkaran: titik P berjarak 13 cm dari pusat lingkaran yang jari-jarinya 5 cm. Panjang garis singgung dari P sampai titik singgung? Itunganku: garis singgung selalu tegak lurus jari-jari di titik singgung, jadi terbentuk segitiga siku-siku dengan sisi miring 13 dan satu sisi 5. Pythagoras: 13² − 5² = 169 − 25 = 144, akarnya 12 cm. Jawaban ini mulus banget, temen curiga aku kebetulan doang. Kayanya tripel 5-12-13 lagi ya? Tolong pastiin alur alasannya bener, guru minta alasan tegak-lurusnya ditulis eksplisit"),
 # 275 dipendekkan (<130)
 ("Debat di kos: SATU TAHUN itu berapa DETIK? Temen jawab 365 ribu, aku itung 365 × 24 × 3600 = 31.536.000. Dia gak mau kalah karena 3600 per jam keliatan gede. Cek dong",
  "Debat di kos: SATU TAHUN itu berapa DETIK? Temen jawab 365 ribu, aku dapat 31.536.000 dari 365 × 24 × 3600. Cek dong"),
 # komentar berawalan angka+titik
 ('content: "48. total jarak 80 km, total waktu 1 jam 40 menit, 80 ÷ 1,667 jam = 48 pas"',
  'content: "48 ya: total jarak 80 km, total waktu 1 jam 40 menit, 80 ÷ 1,667 jam = 48 pas"'),
 ('content: "48. dua jalur di atas konsisten"',
  'content: "48 ya, dua jalur di atas konsisten"'),
 ('content: "160. temenmu dua-duanya bener, maju beramai-ramai biar gak sendirian wkwk"',
  'content: "160 ya. temenmu dua-duanya bener, maju beramai-ramai biar gak sendirian wkwk"'),
 ('content: "99. dari 100 naik jadi 110, turun 10% dari 110 = 11, sisa 99"',
  'content: "99 ya: dari 100 naik jadi 110, turun 10% dari 110 = 11, sisa 99"'),
 ('content: "99. dua jalur: itungan langsung sama persen dari 110"',
  'content: "99 ya, dua jalur: itungan langsung sama persen dari 110"'),
 ('content: "68. sisa lima nilai bisa apa aja asal total 400 dan semua ≥ 68"',
  'content: "68 ya, sisa lima nilai bisa apa aja asal total 400 dan semua ≥ 68"'),
]
for lama, baru in GANTI:
    if lama not in s:
        print(f"!! tidak ketemu: {lama[:70]}..."); sys.exit(1)
    s = s.replace(lama, baru)
s = s.replace('content: "iyah 3-4-5 dikali sekali? 6-8-10, dikali dua 9-12-15... 5-12-13 lain keluarga, prima juga"',
                'content: "3-4-5 dikali aja jadi 6-8-10, 9-12-15. 5-12-13 lain keluarga, gak bisa dari kelipatan"')
print(f"{len(GANTI)} ganti teks diterapkan")
open(P, "w").write(s)
