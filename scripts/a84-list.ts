import { THREADS } from "../src/lib/threadz/threads"
THREADS.forEach((t) => {
  t.comments?.forEach((c) => {
    if (c.authorId === 84) console.log(`post ${t.id} (a${t.authorId}) :: c84@${c.minutesAgo} :: "${t.content.slice(0, 45).replace(/\n/g, " ")}" >> KOMEN: ${c.content}`)
  })
})
