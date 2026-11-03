import type { ThreadzUser, Persona } from "../types"

// Warga Akiomida. Nama ditentukan sistem: akiomida + 8 angka.
// Foto profil cuma boleh warna solid, gak ada foto lain di dunia ini.
//
// 50 warga utama = yang rajin nulis cuitan.
// 300 warga lalu-lalang = rame di kolom komentar aja.
// Total 350. Biar dunianya kerasa ramai, bukan 30 muka yang itu-itu aja.
export const USERS: ThreadzUser[] = [
  { id: 1, name: "akiomida48291037", color: "#f43f5e", persona: "awam" },
  { id: 2, name: "akiomida73615284", color: "#fb923c", persona: "begok" },
  { id: 3, name: "akiomida19084726", color: "#34d399", persona: "ahli" },
  { id: 4, name: "akiomida60293847", color: "#f59e0b", persona: "awam" },
  { id: 5, name: "akiomida37581940", color: "#2dd4bf", persona: "ahli" },
  { id: 6, name: "akiomida81472903", color: "#e879f9", persona: "begok" },
  { id: 7, name: "akiomida52910638", color: "#a78bfa", persona: "awam" },
  { id: 8, name: "akiomida90374615", color: "#a3e635", persona: "ahli" },
  { id: 9, name: "akiomida24680913", color: "#22d3ee", persona: "awam" },
  { id: 10, name: "akiomida68132754", color: "#f87171", persona: "begok" },
  { id: 11, name: "akiomida09518273", color: "#facc15", persona: "ahli" },
  { id: 12, name: "akiomida46092718", color: "#ec4899", persona: "awam" },
  { id: 13, name: "akiomida72839045", color: "#fb7185", persona: "begok" },
  { id: 14, name: "akiomida15384092", color: "#4ade80", persona: "ahli" },
  { id: 15, name: "akiomida89026437", color: "#d6a06a", persona: "awam" },
  { id: 16, name: "akiomida30758129", color: "#94a3b8", persona: "awam" },
  { id: 17, name: "akiomida69407258", color: "#ef4444", persona: "begok" },
  { id: 18, name: "akiomida52617380", color: "#a855f7", persona: "ahli" },
  { id: 19, name: "akiomida04819273", color: "#14b8a6", persona: "awam" },
  { id: 20, name: "akiomida81640392", color: "#d946ef", persona: "begok" },
  { id: 21, name: "akiomida37205891", color: "#38bdf8", persona: "ahli" },
  { id: 22, name: "akiomida94061725", color: "#84cc16", persona: "awam" },
  { id: 23, name: "akiomida61803398", color: "#eab308", persona: "awam" },
  { id: 24, name: "akiomida27182818", color: "#c084fc", persona: "ahli" },
  { id: 25, name: "akiomida14142135", color: "#f97316", persona: "begok" },
  { id: 26, name: "akiomida57721566", color: "#9ca3af", persona: "awam" },
  { id: 27, name: "akiomida49502731", color: "#10b981", persona: "ahli" },
  { id: 28, name: "akiomida83657021", color: "#fdba74", persona: "awam" },
  { id: 29, name: "akiomida71094386", color: "#f97316", persona: "begok" },
  { id: 30, name: "akiomida26479031", color: "#7c3aed", persona: "ahli" },
  { id: 31, name: "akiomida95127368", color: "#2dd4bf", persona: "awam" },
  { id: 32, name: "akiomida08347219", color: "#f43f5e", persona: "begok" },
  { id: 33, name: "akiomida46281057", color: "#86efac", persona: "ahli" },
  { id: 34, name: "akiomida73901842", color: "#fbbf24", persona: "awam" },
  { id: 35, name: "akiomida20584763", color: "#d8b4fe", persona: "begok" },
  { id: 36, name: "akiomida91736420", color: "#7dd3fc", persona: "ahli" },
  { id: 37, name: "akiomida64029581", color: "#a3a380", persona: "awam" },
  { id: 38, name: "akiomida13579246", color: "#fca5a5", persona: "begok" },
  { id: 39, name: "akiomida86420973", color: "#818cf8", persona: "ahli" },
  { id: 40, name: "akiomida37024619", color: "#fbbf24", persona: "awam" },
  { id: 41, name: "akiomida29573061", color: "#ff7a59", persona: "begok" },
  { id: 42, name: "akiomida50817392", color: "#c2843f", persona: "ahli" },
  { id: 43, name: "akiomida76120948", color: "#b5a8f5", persona: "awam" },
  { id: 44, name: "akiomida38491057", color: "#6ee7b7", persona: "begok" },
  { id: 45, name: "akiomida62938471", color: "#64748b", persona: "ahli" },
  { id: 46, name: "akiomida70513649", color: "#f9a8d4", persona: "awam" },
  { id: 47, name: "akiomida18033988", color: "#b08968", persona: "begok" },
  { id: 48, name: "akiomida94261830", color: "#be123c", persona: "ahli" },
  { id: 49, name: "akiomida31415926", color: "#86efac", persona: "awam" },
  { id: 50, name: "akiomida86753091", color: "#f0abfc", persona: "begok" },
]

// ---------------------------------------------------------------------------
// Warga lalu-lalang (id 51-350). Dibikin dari benih tetap, jadi hasilnya
// selalu sama di server dan di browser — gak ada flash, gak ada mismatch.
// ---------------------------------------------------------------------------
function buatBenih(seed: number) {
  let s = seed | 0
  return () => {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const WARNA_WARGA = [
  "#f43f5e", "#fb7185", "#f97316", "#fb923c", "#f59e0b", "#facc15",
  "#a3e635", "#84cc16", "#4ade80", "#34d399", "#2dd4bf", "#22d3ee",
  "#38bdf8", "#818cf8", "#a78bfa", "#c084fc", "#e879f9", "#f0abfc",
  "#f87171", "#fdba74", "#86efac", "#7dd3fc", "#d8b4fe", "#fda4af",
  "#fcd34d", "#a5b4fc", "#6ee7b7", "#f9a8d4", "#bef264", "#5eead4",
  "#a8a29e", "#94a3b8", "#d6a06a", "#b08968", "#c2843f", "#9f6b53",
]

function bangunWarga(): ThreadzUser[] {
  const acak = buatBenih(11090101)
  const terpakai = new Set(USERS.map((u) => u.name))
  const daftar: ThreadzUser[] = []
  for (let i = 0; i < 300; i++) {
    let angka = ""
    do {
      angka = String(Math.floor(acak() * 1e8)).padStart(8, "0")
    } while (terpakai.has(`akiomida${angka}`))
    terpakai.add(`akiomida${angka}`)
    // kebanyakan orang biasa. beberapa yang rame gaya, sesekali yang jeli angka.
    const r = acak()
    const persona: Persona = r < 0.72 ? "awam" : r < 0.87 ? "begok" : "ahli"
    daftar.push({
      id: 51 + i,
      name: `akiomida${angka}`,
      color: WARNA_WARGA[Math.floor(acak() * WARNA_WARGA.length)],
      persona,
    })
  }
  return daftar
}

export const WARGA_LALU_LALANG: ThreadzUser[] = bangunWarga()

const SEMUA_WARGA: ThreadzUser[] = [...USERS, ...WARGA_LALU_LALANG]

const USER_MAP = new Map(SEMUA_WARGA.map((u) => [u.id, u]))

export function getUser(id: number): ThreadzUser {
  const u = USER_MAP.get(id)
  // fallback biar gak pernah crash, walaupun harusnya gak mungkin kelempar
  return u ?? { id, name: "akiomida00000000", color: "#9ca3af", persona: "awam" }
}
