// Tipe data buat Threadz — semua data statis biar gak ada hydration mismatch

export type Persona = "awam" | "begok" | "ahli"

export interface ThreadzUser {
  id: number
  /** username yang ditentukan sistem: akiomida + 8 angka */
  name: string
  /** foto profil cuma boleh warna */
  color: string
  persona: Persona
}

export interface ThreadzComment {
  authorId: number
  /** berapa menit lalu komentar ini dibikin */
  minutesAgo: number
  content: string
}

export interface ThreadzThread {
  id: number
  authorId: number
  /** berapa menit lalu thread ini diposting */
  minutesAgo: number
  content: string
  /** jumlah share (tidak ada like di dunia ini) */
  shares: number
  comments: ThreadzComment[]
}

/** komentar tambahan dari user sungguhan (atau balasan simulasi) */
export interface LiveComment extends ThreadzComment {
  /** id unik buat render + animasi */
  key: string
  /** penanda komentar dari "lu" sendiri */
  isYou?: boolean
}
