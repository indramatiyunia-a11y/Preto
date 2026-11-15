# Auto-balance jumlah komentar: delta>0 drop generic, delta<0 add generic
import ast, json, re, sys
src = sys.argv[1]
base = int(sys.argv[2])
p = src
s = open(p).read()
pat = [12,17,11,19,14,20,13,16,11,18,15,12,20,13,16,11,18,15,12,20,13]
PAT = [12,17,11,19,14,20,13,16,11,18,15,12,20,11,17,13,19,14,16,11,18,12,15,20,13]
ids = [base+i for i in range(25)]
pos = {pid: s.find("T.append((%d," % pid) for pid in ids}
pos[base+25] = s.find("assert len(T)")
def bounds(pid):
    return pos[pid], (pos[pid+1] if pid+1 in pos else pos[base+25])
def recompute():
    global pos
    for q in ids: pos[q] = s.find("T.append((%d," % q)
    pos[base+25] = s.find("assert len(T)")
GENERIC = ["iya pas", "iya, pas", "iya, logis", "iya, menarik", "iya, konsisten", "iya, hemat langkah",
 "iya dasar", "iya, dua langkah", "iya, definisinya", "iya, itu sifatnya", "iya, kekinian", "iya, tunggal",
 "iya, ganda", "iya, seru", "iya, lucu", "iya, fakta lucu", "iya, jujur", "iya, realistis", "iya, visual",
 "iya, aman", "iya, teliti", "iya, wajib", "iya, urutan", "iya, satu sistem", "iya, dunia", "iya, lengkap",
 "iya, panjang tapi rapi", "iya, hitungan cepat", "iya, itu bedanya", "iya, itu polanya", "iya, itu kuncinya",
 "iya, itu pelajarannya", "iya, itu intinya", "iya, itu rumusnya", "iya, itu ukurannya", "iya, itu metodenya",
 "iya, itu alasan pola", "iya, itu pesannya", "iya, kebetulan angka", "iya, kebayang", "iya, dari titik awal",
 "iya, dua faktor", "iya, dua komponen", "iya, realita", "iya, praktis", "iya, foto barisan 4 orang 24 pose, realita"]
ADDS = ["susulan: cek lagi pakai jalan lain", "iya, mantap", "susulan: contoh nyata di kehidupan", "iya pas",
 "susulan: angka gampang dipilih", "iya, enak", "PR gue: coba angka lain", "iya pas",
 "susulan: pola yang sama berlaku", "iya pas", "susulan: jangan lupa sederhanakan", "iya pas",
 "susulan: gambar dulu kalau bingung", "iya pas", "susulan: cek balik selalu", "iya pas",
 "susulan: catat biar gak lupa", "iya pas", "susulan: tanya kalau bingung", "iya pas",
 "susulan: latihan lagi biar lancar", "iya pas", "susulan: triknya hafal", "iya pas",
 "susulan: bagus, analisisnya", "iya pas", "susulan: dua jalur satu tujuan", "iya pas",
 "susulan: yang kecil dulu", "iya pas", "susulan: sistematis lebih cepet", "iya pas",
 "susulan: bandingin dua cara", "iya pas", "susulan: jangan asal tebak", "iya pas",
 "susulan: hitung dua kali kalau ragu", "iya pas", "susulan: catet rumusnya", "iya pas"]
tree = ast.parse(s)
calls = []
for node in tree.body:
    if isinstance(node, ast.Expr) and isinstance(node.value, ast.Call):
        f = node.value.func
        if isinstance(f, ast.Attribute) and f.attr == "append":
            el = node.value.args[0]
            calls.append((el.elts[0].value, len(el.elts[2].elts)))
changed = 0
for pid, have in calls:
    need = PAT[(pid - base) % 25] - 1
    d = have - need
    if d == 0: continue
    if d > 0:
        for _ in range(d):
            a, b = bounds(pid)
            sl = s[a:b]
            done = False
            for g in GENERIC:
                m = re.search(r'\s*"[^"]*%s[^"]*"(,)?(?=\n|\])' % re.escape(g), sl)
                if m:
                    frag = sl[:m.start()] + sl[m.end():]
                    frag = frag.replace('"],\n', '",\n').replace('"\n', '",\n') if frag.rstrip().endswith(']') else frag
                    s = s[:a] + frag + s[b:]
                    done = True; recompute(); break
            if not done:
                m = re.search(r'\s*"[^"]*%s[^"]*",' % re.escape("iya"), sl)
                assert m, (pid, "drop gagal")
                s = s[:a] + sl[:m.start()] + sl[m.end():].lstrip() + s[b:]
                recompute()
            changed += 1
    else:
        for _ in range(-d):
            a, b = bounds(pid)
            sl = s[a:b]
            key = '"],\n "telat'
            assert key in sl, (pid, "add gagal")
            txt = ADDS[(pid + changed) % len(ADDS)]
            s = s[:a] + sl.replace(key, '",\n  "%s"],\n "telat' % txt, 1) + s[b:]
            recompute(); changed += 1
open(p, "w").write(s)
print("balancer: %d penyesuaian" % changed)
