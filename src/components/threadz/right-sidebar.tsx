"use client"

import { TrendingUp, Search } from "lucide-react"
import { TRENDING } from "@/lib/threadz/extras"
import { USERS } from "@/lib/threadz/data/users"
import { Avatar } from "./avatar"
import { toast } from "@/hooks/use-toast"

interface RightSidebarProps {
  onlineCount: number | null
}

export function RightSidebar({ onlineCount }: RightSidebarProps) {
  // subset user yang "lagi online" — dipilih deterministik biar gak kena hydration mismatch
  const onlineUsers = USERS.filter((u) => u.id % 6 === 1).slice(0, 8)

  return (
    <aside className="fixed inset-y-0 right-0 z-40 hidden w-[336px] flex-col gap-6 overflow-y-auto px-6 py-6 lg:flex">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          toast({ description: "Fitur cari belum jalan. Tapi niat lu nyari udah keliatan." })
        }}
      >
        <div className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 text-neutral-500 focus-within:ring-1 focus-within:ring-neutral-600">
          <Search className="h-4 w-4" />
          <input
            type="search"
            placeholder="Cari cuitan..."
            className="w-full bg-transparent text-sm text-neutral-200 outline-none placeholder:text-neutral-500"
            aria-label="Cari cuitan"
          />
        </div>
      </form>

      <section className="rounded-2xl border border-neutral-800 p-4">
        <h2 className="mb-3 flex items-center gap-2 text-[15px] font-bold text-neutral-100">
          <TrendingUp className="h-4 w-4 text-neutral-400" />
          Lagi rame
        </h2>
        <ul className="space-y-3">
          {TRENDING.map((t, i) => (
            <li key={t.tag}>
              <button
                type="button"
                className="w-full text-left transition-colors hover:opacity-80"
                onClick={() => toast({ description: "Topik lagi rame. Balik ke feed aja, semuanya ada." })}
              >
                <p className="text-[11px] text-neutral-500">
                  {i + 1} · lagi rame di Threadz
                </p>
                <p className="text-[14px] font-semibold text-neutral-200">{t.tag}</p>
                <p className="text-[12px] text-neutral-500">{t.count}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-neutral-800 p-4">
        <h2 className="mb-1 text-[15px] font-bold text-neutral-100">Lagi online</h2>
        <p className="mb-3 flex items-center gap-1.5 text-[13px] text-neutral-500">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          {onlineCount === null ? "nyambungin..." : `${onlineCount.toLocaleString("id-ID")} warga lagi nongkrong`}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {onlineUsers.map((u) => (
            <Avatar key={u.id} name={u.name} color={u.color} size={34} online />
          ))}
        </div>
      </section>

      <footer className="mt-auto pb-4 text-[12px] leading-relaxed text-neutral-600">
        <p>threadz · gak ada like di sini, cuma komen &amp; share</p>
        <p>jalan di server otak z.ai</p>
      </footer>
    </aside>
  )
}
