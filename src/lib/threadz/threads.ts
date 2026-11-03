import type { ThreadzThread } from "./types"
import { THREADS_PART1 } from "./data/threads-1"
import { THREADS_PART2 } from "./data/threads-2"
import { THREADS_PART3 } from "./data/threads-3"
import { THREADS_PART4 } from "./data/threads-4"

// Kolom komentar datang dari semua arah: sebagian warga tetap (1-50),
// sebagian besar warga lalu-lalang (51-350). Biar kerasa ramai — bukan
// 30 muka yang itu-itu aja nongol di semua post.
// Pakai benih tetap juga, biar server & browser nampilin hal yang sama.
function buatBenih(seed: number) {
  let s = seed | 0
  return () => {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function ramakanKomentar(threads: ThreadzThread[]): ThreadzThread[] {
  const acak = buatBenih(32035077)
  return threads.map((t) => {
    const udahPakai = new Set<number>()
    const comments = t.comments.map((c) => {
      // ~60% komentar diserahkan ke warga lalu-lalang
      if (acak() < 0.6) {
        let id = 51 + Math.floor(acak() * 300)
        // hindari dua komentar berurutan dari akun yang sama di satu post
        let jaga = 0
        while (udahPakai.has(id) && jaga < 20) {
          id = 51 + Math.floor(acak() * 300)
          jaga++
        }
        udahPakai.add(id)
        return { ...c, authorId: id }
      }
      udahPakai.add(c.authorId)
      return c
    })
    return { ...t, comments }
  })
}

export const THREADS: ThreadzThread[] = ramakanKomentar([
  ...THREADS_PART1,
  ...THREADS_PART2,
  ...THREADS_PART3,
  ...THREADS_PART4,
])

export function getThread(id: number): ThreadzThread | undefined {
  return THREADS.find((t) => t.id === id)
}
