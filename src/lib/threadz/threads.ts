import type { ThreadzThread } from "./types"
import { THREADS_PART1 } from "./data/threads-1"
import { THREADS_PART2 } from "./data/threads-2"
import { THREADS_PART3 } from "./data/threads-3"
import { THREADS_PART4 } from "./data/threads-4"

// ===========================================================================
// CARA ORANG NGETIK
//
// Orang asli di media sosial itu GAK nulis rapi per paragraf dengan baris
// kosong di tiap bagian. Yang banyak malah:
//   - ngeblok satu napas, koma kekoma, titik ke titik (flat)
//   - enter doang tanpa jarak, tiap kalimat turun baris (lines)
//   - satu blok panjang + satu kalimat numpuk di bawah (gaptail)
//   - cerita panjang yang emang diselingi jeda (keep) — jarang
// Format "2-3 paragraf rapi + punchline" itu sidik jari robot. Makanya tiap
// cuitan di-format ulang sesuai watak id-nya. Deterministik, biar server &
// browser ngeluarin hasil yang sama.
// ===========================================================================
type ModeTulisan = "flat" | "lines" | "gaptail" | "keep"

function acakId(id: number): number {
  let x = (id * 2654435761) % 4294967296
  x ^= x >>> 13
  x = Math.imul(x, 1274126177)
  x ^= x >>> 16
  return Math.abs(x)
}

function modeTulisan(id: number, content: string): ModeTulisan {
  const gap = (content.match(/\n[ \t]*\n/g) ?? []).length
  if (gap === 0) return "flat"
  if (gap >= 3) return "keep" // cerita panjang, jeda antar adegan itu wajar
  const bagian = content.split(/\n[ \t]*\n/)
  const terakhir = (bagian[bagian.length - 1] ?? "").trim()
  if (content.length > 340 && gap >= 2) return "keep"
  if (gap === 1 && terakhir.length > 0 && terakhir.length <= 45) {
    const h = acakId(id) % 3
    return h === 0 ? "gaptail" : h === 1 ? "flat" : "lines"
  }
  return acakId(id) % 2 === 0 ? "flat" : "lines"
}

function rapi(t: string): string {
  return t
    .replace(/[ \t]+\n/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim()
}

function formatTulisan(id: number, content: string): string {
  const mode = modeTulisan(id, content)
  if (mode === "keep") return rapi(content)
  const bagian = content.split(/\n[ \t]*\n/)
  if (mode === "flat") return rapi(bagian.join(" "))
  if (mode === "lines") return rapi(bagian.join("\n"))
  // gaptail: blok panjang, terus satu baris numpuk di bawah tanpa jarak rapi
  const terakhir = bagian.pop() ?? ""
  return rapi(bagian.join(" ") + "\n" + terakhir)
}

// ===========================================================================
// Kolom komentar datang dari semua arah: sebagian warga tetap (1-50),
// sebagian besar warga lalu-lalang (51-350). Biar kerasa ramai — bukan
// 30 muka yang itu-itu aja nongol di semua post. Pakai benih tetap juga.
// ===========================================================================
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
]).map((t) => ({ ...t, content: formatTulisan(t.id, t.content) }))

export function getThread(id: number): ThreadzThread | undefined {
  return THREADS.find((t) => t.id === id)
}
