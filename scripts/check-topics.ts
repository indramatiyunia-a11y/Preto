// cek ulang topik judi dengan word boundary + distribusi jumlah komentar
import { THREADS } from "../src/lib/threadz/threads"

const judiWords = /\b(judi|slot|jackpot|togel|judol|taruhan|pemda\b.*\bbet)\b|\bslot\b/i
const judiPosts = THREADS.filter((t) => judiWords.test(t.content) || /judi|slot/i.test(t.content))
console.log("post judi/slot beneran:", judiPosts.map((t) => `#${t.id}`).join(", "))

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
