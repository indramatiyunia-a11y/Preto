// Audit RITME: cek keluhan user —
//  1. post gak boleh berakhiran formula reflektif yang sama ("yang penting X" dll)
//  2. komentar harus didominasi reaksi pendek (orang asing), bukan esai
//  3. gak ada cameo tokoh / self-reply / kontinuitas "kemarin kamu post"
//  4. akun yang sama gak jadi korps komentar tetap
import { THREADS } from "../src/lib/threadz/threads"
import { getUser } from "../src/lib/threadz/data/users"

const masalah: string[] = []

// 1. akhiran formula
const landings = [/ya udahlah/i, /ya udah, yang penting/i, /yang penting .{2,30}$/i, /\. (gak apa|masih baik|orang tenang)\.?$/i]
for (const t of THREADS) {
  const tail = t.content.trim().slice(-80)
  for (const re of landings) if (re.test(tail)) masalah.push(`post ${t.id} akhiran formula: ...${tail.slice(-60)}`)
}

// hitung pemakaian frasa penanda ritme di seluruh post
const frasa = ["ya udah", "ya sudah", "yang penting", "gak apa", "besok lagi"]
for (const f of frasa) {
  const n = THREADS.filter((t) => t.content.toLowerCase().includes(f)).length
  console.log(`frasa "${f}" di ${n} post`)
}

// 2. distribusi panjang komentar
let pendek = 0, total = 0
const panjangSemua: number[] = []
for (const t of THREADS) for (const c of t.comments) { total++; panjangSemua.push(c.content.split(/\s+/).length); if (c.content.split(/\s+/).length <= 8) pendek++ }
console.log(`komentar <=8 kata: ${pendek}/${total} (${Math.round((pendek / total) * 100)}%)`)

// 3. cameo & self-reply
const cameo = [/saya yang mengoreksi/i, /gue yang ngajarin/i, /yang komen kemarin/i, /kata yang komen/i, /kemarin kamu post/i]
for (const t of THREADS) {
  const texts = [t.content, ...t.comments.map((c) => c.content)]
  for (const s of texts) for (const re of cameo) if (re.test(s)) masalah.push(`post ${t.id} cameo: "${s.slice(0, 60)}"`)
  if (t.comments.some((c) => c.authorId === t.authorId)) masalah.push(`post ${t.id}: penulis komen di post sendiri`)
}

// 4. korps komentar: frekuensi akun di seluruh komentar
const freq = new Map<number, number>()
for (const t of THREADS) for (const c of t.comments) freq.set(c.authorId, (freq.get(c.authorId) ?? 0) + 1)
const terame = [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)
console.log("akun paling sering komen:", terame.map(([id, n]) => `#${id}:${n}x`).join(" "))

// 5. sampel pembuka & akhiran post (mata manusia)
const opening = new Set<string>()
for (const t of THREADS) opening.add(t.content.trim().split(/\s+/)[0].toLowerCase())
console.log("variasi kata pembuka unik:", opening.size, "dari 100 post")

if (masalah.length) {
  console.log(`\nMASALAH ${masalah.length}:`)
  for (const m of masalah.slice(0, 30)) console.log(" -", m)
  process.exit(1)
}
console.log("\nRITME AMAN ✔")
