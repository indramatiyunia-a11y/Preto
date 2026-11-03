import { THREADS } from "../src/lib/threadz/threads"

const skeleton = THREADS.map((t) => ({
  id: t.id,
  a: t.authorId,
  m: t.minutesAgo,
  s: t.shares,
  n: t.comments.length,
  c: t.comments.map((c) => ({ a: c.authorId, m: c.minutesAgo })),
}))

console.log(JSON.stringify(skeleton))
console.log("---")
const counts = skeleton.map((t) => t.n)
console.log("total comments:", counts.reduce((x, y) => x + y, 0))
console.log("max:", Math.max(...counts), "min:", Math.min(...counts))
console.log("distribution:", JSON.stringify(counts))
