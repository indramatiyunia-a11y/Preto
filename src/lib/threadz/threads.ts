import type { ThreadzThread } from "./types"
import { THREADS_PART1 } from "./data/threads-1"
import { THREADS_PART2 } from "./data/threads-2"
import { THREADS_PART3 } from "./data/threads-3"
import { THREADS_PART4 } from "./data/threads-4"
import { THREADS_PART5 } from "./data/threads-5"
import { THREADS_PART6 } from "./data/threads-6"
import { THREADS_PART7 } from "./data/threads-7"
import { THREADS_PART8 } from "./data/threads-8"
import { THREADS_PART9 } from "./data/threads-9"
import { THREADS_PART10 } from "./data/threads-10"
import { THREADS_PART11 } from "./data/threads-11"
import { THREADS_PART12 } from "./data/threads-12"
import { THREADS_PART13 } from "./data/threads-13"
import { THREADS_PART14 } from "./data/threads-14"
import { THREADS_PART15 } from "./data/threads-15"
import { THREADS_PART16 } from "./data/threads-16"
import { THREADS_PART17 } from "./data/threads-17"
import { THREADS_PART18 } from "./data/threads-18"
import { THREADS_PART19 } from "./data/threads-19"
import { THREADS_PART20 } from "./data/threads-20"
import { THREADS_PART21 } from "./data/threads-21"
import { THREADS_PART22 } from "./data/threads-22"
import { THREADS_PART23 } from "./data/threads-23"
import { THREADS_PART24 } from "./data/threads-24"
import { THREADS_PART25 } from "./data/threads-25"
import { THREADS_PART26 } from "./data/threads-26"
import { THREADS_PART27 } from "./data/threads-27"
import { THREADS_PART28 } from "./data/threads-28"
import { THREADS_PART29 } from "./data/threads-29"
import { THREADS_PART30 } from "./data/threads-30"
import { THREADS_PART31 } from "./data/threads-31"
import { THREADS_PART32 } from "./data/threads-32"
import { THREADS_PART33 } from "./data/threads-33"
import { THREADS_PART34 } from "./data/threads-34"
import { THREADS_PART35 } from "./data/threads-35"
import { THREADS_PART36 } from "./data/threads-36"
import { THREADS_PART37 } from "./data/threads-37"
import { THREADS_PART38 } from "./data/threads-38"
import { THREADS_PART39 } from "./data/threads-39"
import { THREADS_PART40 } from "./data/threads-40"
import { THREADS_PART41 } from "./data/threads-41"
import { THREADS_PART42 } from "./data/threads-42"
import { THREADS_PART43 } from "./data/threads-43"
import { THREADS_PART44 } from "./data/threads-44"
import { THREADS_PART_INTL } from "./data/threads-intl"

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
  ...THREADS_PART6,
  ...THREADS_PART7,
  ...THREADS_PART8,
  ...THREADS_PART9,
  ...THREADS_PART10,
  ...THREADS_PART11,
  ...THREADS_PART12,
  ...THREADS_PART13,
  ...THREADS_PART14,
  ...THREADS_PART15,
  ...THREADS_PART16,
  ...THREADS_PART17,
  ...THREADS_PART18,
  ...THREADS_PART19,
  ...THREADS_PART20,
  ...THREADS_PART21,
  ...THREADS_PART22,
  ...THREADS_PART23,
  ...THREADS_PART24,
  ...THREADS_PART25,
  ...THREADS_PART26,
  ...THREADS_PART27,
  ...THREADS_PART28,
  ...THREADS_PART29,
  ...THREADS_PART30,
  ...THREADS_PART31,
  ...THREADS_PART32,
  ...THREADS_PART33,
  ...THREADS_PART34,
  ...THREADS_PART35,
  ...THREADS_PART36,
  ...THREADS_PART37,
  ...THREADS_PART38,
  ...THREADS_PART39,
  ...THREADS_PART40,
  ...THREADS_PART41,
  ...THREADS_PART42,
  ...THREADS_PART43,
  ...THREADS_PART44,
  // post internasional (full Arab/EN/FR/ES/ZH) — file terpisah sesuai
  // perintah user, biar gak kecampur sama batch Indonesia.
  ...THREADS_PART_INTL,
].map((t) => ({ ...t, content: rapi(t.content) }))

export function getThread(id: number): ThreadzThread | undefined {
  return THREADS.find((t) => t.id === id)
}
