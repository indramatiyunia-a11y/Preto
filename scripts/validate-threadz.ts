// Validasi data threadz: 100 post, komentar 0-10, tepat satu post ber-10 komentar,
// komentar minutesAgo < post minutesAgo, authorId valid, id unik.
import { THREADS } from "../src/lib/threadz/threads"

let ok = true
const errs: string[] = []

const ids = new Set<number>()
let maxCount = 0
let countOfMax = 0
let zero = 0

for (const t of THREADS) {
  if (ids.has(t.id)) errs.push(`id duplikat: ${t.id}`)
  ids.add(t.id)
  if (t.authorId < 1 || t.authorId > 50) errs.push(`post ${t.id}: authorId invalid ${t.authorId}`)
  if (t.content.length < 10) errs.push(`post ${t.id}: konten terlalu pendek`)
  const n = t.comments.length
  if (n > 10) errs.push(`post ${t.id}: ${n} komentar > 10`)
  if (n === 0) zero++
  if (n > maxCount) maxCount = n
  for (const c of t.comments) {
    if (c.authorId < 1 || c.authorId > 50) errs.push(`post ${t.id} komentar: authorId invalid ${c.authorId}`)
    if (c.minutesAgo >= t.minutesAgo) errs.push(`post ${t.id} komentar: minutesAgo ${c.minutesAgo} >= post ${t.minutesAgo}`)
    if (!c.content.trim()) errs.push(`post ${t.id} komentar: konten kosong`)
  }
}

const dist = new Map<number, number>()
for (const t of THREADS) dist.set(t.comments.length, (dist.get(t.comments.length) ?? 0) + 1)
countOfMax = dist.get(maxCount) ?? 0

console.log("total post:", THREADS.length)
console.log("total komentar:", THREADS.reduce((a, t) => a + t.comments.length, 0))
console.log("post tanpa komentar:", zero)
console.log("max komentar:", maxCount, "x", countOfMax, "post")
console.log("distribusi:", [...dist.entries()].sort((a, b) => a[0] - b[0]).map(([k, v]) => `${k}:${v}`).join("  "))

// pos tipe persona buat tab otak-belok
const begok = THREADS.filter((t) => t.authorId % 1 === 0).length

// konten terlarang
const banned = /\b(indomaret|vespa|whatsapp|whats app|warung|angkot|thr|mudik|arisan|jogja|goreng|bakso|yati|padang|warnet|nusantara|rtp|subuh|alhamdulillah|lebaran|solat|kumaha|pinjol|ukt|judol)\b/i
for (const t of THREADS) {
  const texts = [t.content, ...t.comments.map((c) => c.content)]
  for (const s of texts) {
    const m = s.match(banned)
    if (m) errs.push(`post ${t.id}: kata terlarang "${m[0]}"`)
  }
}

if (THREADS.length !== 100) errs.push(`total post ${THREADS.length} != 100`)
if (countOfMax !== 1) errs.push(`harus tepat SATU post ber-${maxCount} komentar, ada ${countOfMax}`)

console.log(errs.length ? "ERRORS:\n" + errs.join("\n") : "SEMUA VALID ✓")
if (errs.length) process.exit(1)
