"use client"

import { Home, Flame, CircleHelp, Dices, Infinity as InfinityIcon } from "lucide-react"
import { Avatar } from "./avatar"
import type { Tab } from "./tabs"

interface LeftNavProps {
  tab: Tab
  onTab: (t: Tab) => void
  visitor: { name: string; color: string } | null
  onReroll: () => void
}

export function LeftNav({ tab, onTab, visitor, onReroll }: LeftNavProps) {
  const items: { id: Tab; label: string; icon: typeof Home }[] = [
    { id: "untuk-lu", label: "Untuk lu", icon: Home },
    { id: "paling-rame", label: "Paling rame", icon: Flame },
    { id: "gak-gamblang", label: "Gak gamblang", icon: CircleHelp },
  ]

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[275px] flex-col justify-between border-r border-neutral-800 px-4 py-6 md:flex">
      <div>
        <div className="mb-8 flex items-center gap-2.5 px-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-black">
            <InfinityIcon className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="text-xl font-bold tracking-tight text-neutral-50">threadz</span>
        </div>

        <nav className="space-y-1" aria-label="Navigasi utama">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onTab(item.id)}
              className={`flex w-full items-center gap-4 rounded-full px-4 py-2.5 text-[15px] transition-colors ${
                tab === item.id
                  ? "bg-neutral-900 font-semibold text-neutral-50"
                  : "text-neutral-400 hover:bg-neutral-900/60 hover:text-neutral-100"
              }`}
              aria-current={tab === item.id ? "page" : undefined}
            >
              <item.icon className="h-5 w-5" strokeWidth={1.9} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-neutral-800 p-4">
          <p className="text-sm font-semibold text-neutral-200">Nama &amp; warna lu ditentuin sistem</p>
          <p className="mt-1 text-[13px] leading-snug text-neutral-500">
            Semua warga sini namanya akiomida + 8 angka, dan foto profil cuma boleh warna. Bete sama warna lu? Undi ulang aja.
          </p>
          <button
            type="button"
            onClick={onReroll}
            className="mt-3 flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
          >
            <Dices className="h-4 w-4" />
            Undi ulang identitas
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-neutral-900/60">
        <Avatar
          name={visitor?.name ?? "lu"}
          color={visitor?.color ?? "#404040"}
          size={38}
          online
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-neutral-200">
            {visitor?.name ?? "akiomida..."}
          </p>
          <p className="text-xs text-neutral-500">ini akun lu · balesan dijamin</p>
        </div>
      </div>
    </aside>
  )
}
