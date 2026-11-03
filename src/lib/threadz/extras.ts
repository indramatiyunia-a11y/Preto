// Semua yang bikin Akiomida kerasa hidup, tanpa pura2 ada yang online.
// Balasan ke komen lu itu GAK dijamin — 1% doang. Dunia gak diem nungguin lu.
//
// Aturan balasan: satu kalimat, jelas, nyambung sama isi komen. Bukan acak.
// Nada balasan ngikutin nada komen; akun yang ngebales ngikutin nadanya.

import type { ThreadzUser } from "./types"
import { USERS } from "./data/users"

type ReplyTone = "humor" | "dukung" | "tanya" | "netral"

const REPLIES: Record<ReplyTone, string[]> = {
  humor: [
    "wkwk iya juga",
    "gila, bener banget",
    "kocak tapi masuk akal",
    "lucu, tapi gue ngangguk dua kali",
    "wkwk sama, rumah gue juga",
  ],
  dukung: [
    "semangat ya",
    "sabar, pelan-pelan aja",
    "semoga cepat membaik 🙏",
    "kuat ya, ikut doakan",
    "yang penting udah jalan",
  ],
  tanya: [
    "gue juga nunggu jawabannya",
    "ikut penasaran, tunggu yang jawab",
    "nanya yang bener ini, ikut mikir",
    "semoga ada yang jelasin, ngefek nih",
    "pertanyaan bagus, dicatet dulu",
  ],
  netral: [
    "setuju sama ini",
    "sama, di sini juga gitu",
    "beneran?? 😅",
    "baru kepikiran, iya sih",
    "dicatet, makasih",
    "iya, masuk akal",
  ],
}

/** Nada komen ngarahin ke jenis balasan. Sederhana aja, yang penting nyambung. */
function detectTone(text: string): ReplyTone {
  const t = text.toLowerCase()
  if (/(wkwk|hehe|haha|😂|😭|lucu|kocak|gila)/.test(t)) return "humor"
  if (/(semangat|sabar|semoga|kuat|nyesek|sedih|nangis|tabah)/.test(t)) return "dukung"
  if (/( \?|\?$|kenapa|kok |gimana|berapa|tanya|beneran gak|tau gak)/.test(t)) return "tanya"
  return "netral"
}

/** Persona yang wajar ngebales nada segitu. Begok buat humor, ahli buat tanya. */
function personasFor(tone: ReplyTone): ThreadzUser["persona"][] {
  switch (tone) {
    case "humor":
      return ["begok", "awam"]
    case "tanya":
      return ["ahli", "awam"]
    case "dukung":
      return ["awam", "ahli"]
    default:
      return ["awam", "begok", "ahli"]
  }
}

/** Pilih user acak yang cocok buat bales (kalo hoki 1%) */
export function pickRandomReplyUser(commentText: string): ThreadzUser {
  const ok = personasFor(detectTone(commentText))
  const pool = USERS.filter((u) => ok.includes(u.persona))
  const list = pool.length > 0 ? pool : USERS
  return list[Math.floor(Math.random() * list.length)]
}

/** Balasan yang jarang banget, tapi NYAMBUNG sama komen yang barusan */
export function pickRandomReply(commentText: string): string {
  const pool = REPLIES[detectTone(commentText)]
  return pool[Math.floor(Math.random() * pool.length)]
}

/** Warna pilihan buat avatar lu (foto profil di dunia ini cuma boleh warna) */
const MY_COLORS = [
  "#f43f5e", "#fb923c", "#facc15", "#a3e635", "#34d399",
  "#2dd4bf", "#22d3ee", "#a78bfa", "#e879f9", "#fb7185",
  "#f59e0b", "#4ade80", "#a855f7", "#f97316", "#10b981",
]

export function randomVisitor(): { name: string; color: string } {
  const digits = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join("")
  return {
    name: `akiomida${digits}`,
    color: MY_COLORS[Math.floor(Math.random() * MY_COLORS.length)],
  }
}
