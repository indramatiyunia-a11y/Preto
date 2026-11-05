import type { ThreadzThread } from "./types"
import { THREADS_PART1 } from "./data/threads-1"
import { THREADS_PART2 } from "./data/threads-2"
import { THREADS_PART3 } from "./data/threads-3"
import { THREADS_PART4 } from "./data/threads-4"
import { THREADS_PART5 } from "./data/threads-5"

// ===========================================================================
// FORMAT DITULIS TANGAN.
//
// Orang asli di media sosial itu GAK nulis rapi per paragraf dengan baris
// kosong di tiap bagian. Yang banyak malah:
//   - ngeblok satu napas, koma kekoma, titik ke titik (flat)
//   - enter doang tanpa jarak, tiap kalimat turun baris (lines)
//   - satu blok panjang + satu kalimat numpuk di bawah (gaptail)
//   - cerita panjang yang emang diselingi jeda (keep)
// Karena tiap cuitan udah ditulis dengan layout pilihan penulisnya sendiri,
// sini cuma bersihin spasi sisa. Gak ada yang diubah, gak ada yang
// diseragamin — layout yang flat ditulis flat, yang berantakan tetap
// berantakan. Itu bagian dari orangnya.
//
// Komentar juga DITULIS TANGAN dan authorId-nya DIPILIH sesuai dunia post:
// ibu-ibu nge-post, yang komen ibu-ibu. Anak sekolah nge-post, yang komen
// anak sekolah. Gak ada pengacakan akun — dulu 60% komentar diacak ulang ke
// warga mana pun, hasilnya komentar ibu-ibu bisa muncul di atas cuitan
// anak SMP. Gak relevan, kerasa sintetis. Sekarang: siapa nulis, dia yang
// muncul, konsisten sama "kampung" akunnya.
// ===========================================================================
function rapi(t: string): string {
  return t
    .replace(/[ \t]+\n/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim()
}

export const THREADS: ThreadzThread[] = [
  ...THREADS_PART1,
  ...THREADS_PART2,
  ...THREADS_PART3,
  ...THREADS_PART4,
  ...THREADS_PART5,
].map((t) => ({ ...t, content: rapi(t.content) }))

export function getThread(id: number): ThreadzThread | undefined {
  return THREADS.find((t) => t.id === id)
}
