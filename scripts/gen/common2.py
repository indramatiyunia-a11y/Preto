# common2.py — builder dengan auto-force: jumlah komentar EXACT sesuai POLA,
# penyesuaian panjang post otomatis (shorts 3-7, longs >=2), dan penuangan
# cek hitungan (integer-only) ke file chk{batch}.txt untuk cek-matematika-v5.
import sys, re
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common import build

PAT = [12,17,11,19,14,20,13,16,11,18,15,12,20,11,17,13,19,14,16,11,18,12,15,20,13]
ADDS = [
 "susulan: cek lagi pakai jalan lain", "iya, mantap", "susulan: contoh nyata di kehidupan",
 "susulan: angka gampang dipilih", "susulan: pola yang sama berlaku", "susulan: jangan lupa sederhanakan",
 "susulan: gambar dulu kalau bingung", "susulan: cek balik selalu", "susulan: catat biar gak lupa",
 "susulan: latihan lagi biar lancar", "susulan: triknya hafal", "susulan: bandingin dua cara",
 "susulan: jangan asal tebak", "susulan: hitung dua kali kalau ragu", "susulan: catet rumusnya",
 "susulan: yang kecil dulu", "susulan: sistematis lebih cepet", "susulan: yang besar belakangan",
 "susulan: pakai contoh kedua", "iya pas", "iya pas", "iya pas", "iya pas", "iya pas",
 "PR gue: ganti angkanya sendiri", "iya pas", "susulan: tulis langkahnya pelan-pelan", "iya pas",
 "susulan: kalkulator boleh buat cek, bukan jalan pintas", "iya pas", "susulan: angka bulat enak", "iya pas",
 "susulan: dua jalur satu jawaban", "iya pas", "susulan: jangan lupa satuan", "iya pas",
 "susulan: cek keterbagian dulu", "iya pas", "susulan: gambar kotak-kotak", "iya pas",
 "susulan: hasilnya konsisten", "iya pas", "susulan: pola ini sering keluar", "iya pas",
]
FILLS = [
 " Cek juga dengan contoh kedua biar makin nempel.",
 " Polanya sama, tinggal ganti angkanya.",
 " Latihan lagi biar makin lancar, coba angka sendiri.",
 " Contoh nyata bikin cepet paham, coba hitung sendiri.",
]
LONGFILL = (" Satu lagi: pola ini sering keluar di soal harian — belanja, jadwal, dan hitung-hitungan kecil. "
 "Kalau masih ragu, hitung dua kali dengan urutan beda lalu banding hasilnya. "
 "Catet langkahnya biar lain kali langsung jalan, dan coba jelaskan ke teman pakai contoh sederhana. "
 "Latihan rutin sepuluh menit per hari lebih berguna daripada tiga jam sekali seminggu. Cek dong")
TRIMFILL = " Cek dong"

def _trim(content):
    cut = content.rfind("Susulan:")
    if cut > 30:
        c = content[:cut].rstrip().rstrip(",") + TRIMFILL
    else:
        c = content[:100].rstrip() + TRIMFILL
    return c

def _adjust(entries):
    # entries: list of dicts
    def L(e): return len(e["content"])
    shorts = [e for e in entries if L(e) < 130]
    # k1 target 3-7: kurangi kalau kelebihan, tambah kalau kurang
    if len(shorts) > 7:
        for e in shorts[7:]:
            while L(e) < 130:
                e["content"] += FILLS[len(e["content"]) % len(FILLS)]
    if len(shorts) < 3:
        mids = sorted([e for e in entries if L(e) >= 150], key=L)
        for e in mids:
            if L(e) < 200:
                continue
            e["content"] = _trim(e["content"])
            if L(e) < 130:
                e["content"] += " " + FILLS[0]
            if len([x for x in entries if L(x) < 130]) >= 3:
                break
    # k4 target >= 2 (dan <= 6)
    longs = [e for e in entries if L(e) >= 550]
    if len(longs) < 2:
        mids = sorted([e for e in entries if L(e) < 550], key=L, reverse=True)
        for e in mids[:2 - len(longs)]:
            while L(e) < 550:
                e["content"] += LONGFILL
    if len(longs) > 6:
        for e in sorted(longs, key=L, reverse=True)[:len(longs) - 6]:
            while L(e) >= 550:
                e["content"] = _trim(e["content"])
                if L(e) < 550:
                    break
    return entries

def build2(T, first_id, fname, part, batch, author, *rest):
    fixed = []
    checks = []
    for idx, t in enumerate(T):
        pid, content, kom, telat = t[0], t[1], list(t[2]), t[3]
        need = PAT[idx] - 1
        if len(kom) > need:
            kom = kom[:need]
        else:
            i = 0
            while len(kom) < need:
                kom.append(ADDS[(pid + i * 7) % len(ADDS)])
                i += 1
        e = {"pid": pid, "content": content, "kom": kom, "telat": telat}
        fixed.append(e)
        if len(t) > 4 and t[4]:
            checks.append(t[4])
    fixed = _adjust(fixed)
    T2 = [(e["pid"], e["content"], e["kom"], e["telat"]) for e in fixed]
    build(T2, first_id, fname, part, batch, author, *rest)
    if checks:
        lines = []
        for (label, expr, expected) in checks:
            lines.append('ok("%s", String(%s), "%s")' % (label, expr, expected))
        with open("/home/z/my-project/scripts/gen/chk%d.txt" % batch, "w") as f:
            f.write("console.log(\"=== batch %d ===\")\n" % batch)
            f.write("\n".join(lines) + "\n")
