// cek ulang topik terlarang + distribusi jumlah komentar
import { THREADS } from "../src/lib/threadz/threads"

const judiWords = /\b(judi|slot|jackpot|togel|judol|taruhan|pemda\b.*\bbet)\b|\bslot\b/i
const judiPosts = THREADS.filter((t) => judiWords.test(t.content) || /judi|slot/i.test(t.content))
console.log("post judi/slot beneran:", judiPosts.map((t) => `#${t.id}`).join(", "))

// topik yang diharamkan user: lagu & ulang tahun
const terlarang = /\blagu|musik|nyanyi lagu|dengerin lagu|ultah|ulang tahun|birthday/i
const postLaguUltah = THREADS.filter((t) => terlarang.test(t.content))
const komentarLaguUltah = THREADS.flatMap((t) =>
  t.comments.filter((c) => terlarang.test(c.content)).map((c) => `#${t.id}(a${c.authorId})`)
)
console.log("post lagu/ultah:", postLaguUltah.map((t) => `#${t.id}`).join(", ") || "bersih")
console.log("komentar lagu/ultah:", komentarLaguUltah.join(", ") || "bersih")

// kata buatan (invented slang) yang pernah keluar: rakusan, ngafa
const kataBuatan = /rakusan|\bngafa\b/i
const postBuatan = THREADS.filter(
  (t) => kataBuatan.test(t.content) || t.comments.some((c) => kataBuatan.test(c.content))
)
console.log("kata buatan rakusan/ngafa:", postBuatan.map((t) => `#${t.id}`).join(", ") || "bersih")

// struktur timeline-jam (template angka yang dilarang): 3+ penyebutan "jam N" dalam satu paragraf KAPITAL
const timelineJam = THREADS.filter((t) => {
  const blok = t.content.split("\n\n").filter((b) => b === b.toUpperCase() && /[A-Z]/.test(b))
  return blok.some((b) => (b.match(/\bJAM \d/i) ?? []).length >= 3)
})
console.log("post timeline jam KAPITAL:", timelineJam.map((t) => `#${t.id}`).join(", ") || "bersih")

// penawaran transaksional ala "bayar pakai X" di post (constructed deal punchline)
const dealPunchline = THREADS.filter((t) => /bayar pakai|bayarnya pakai|dibayar pakai/i.test(t.content))
console.log("post deal punchline:", dealPunchline.map((t) => `#${t.id}`).join(", ") || "bersih")

// distribusi jumlah komentar
const dist = new Map<number, number>()
THREADS.forEach((t) => {
  const c = t.comments.length
  dist.set(c, (dist.get(c) ?? 0) + 1)
})
console.log("distribusi komentar:", [...dist.entries()].sort((a, b) => a[0] - b[0]).map(([k, v]) => `${k}x:${v}`).join(" | "))

// 10 thread dengan komentar terbanyak
const top = [...THREADS].sort((a, b) => b.comments.length - a.comments.length).slice(0, 5)
console.log("terame:", top.map((t) => `#${t.id}(${t.comments.length})`).join(", "))

// sampel isi 3 thread acak dari part 3/4 buat cek kualitas
for (const id of [55, 78, 92]) {
  const t = THREADS.find((x) => x.id === id)
  if (t) console.log(`\n--- #${id} (author ${t.authorId}) ---\n${t.content.slice(0, 260)}`)
}
