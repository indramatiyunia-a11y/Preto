"use client"

import { MessageCircle, Share2 } from "lucide-react"
import type { ThreadzThread } from "@/lib/threadz/types"
import { getUser } from "@/lib/threadz/data/users"
import { Avatar } from "./avatar"

interface ThreadCardProps {
  thread: ThreadzThread
  visitor: { name: string; color: string } | null
  onOpen: () => void
  onShare: () => void
}

export function ThreadCard({ thread, visitor, onOpen, onShare }: ThreadCardProps) {
  // cuitan buatan pengunjung (id negatif) tampil pakai identitas pengunjung
  const author = thread.authorId < 0 && visitor ? visitor : getUser(thread.authorId)

  return (
    <article
      className="group/thread cursor-pointer rounded-2xl border border-stone-200/90 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(28,25,23,0.05)] transition-shadow hover:shadow-[0_3px_14px_rgba(28,25,23,0.08)]"
      onClick={onOpen}
      aria-label={`Cuitan dari ${author.name}`}
    >
      {/* tanpa waktu. biar semuanya kerasa baru kemarin sore. */}
      <div className="flex items-center gap-2.5 text-[15px]">
        <Avatar name={author.name} color={author.color} size={38} />
        <span className="truncate font-semibold text-stone-900">{author.name}</span>
      </div>

      <p className="mt-2.5 whitespace-pre-wrap text-[15px] leading-[1.65] text-stone-800">
        {thread.content}
      </p>

      {/* Di dunia ini cuma ada dua aksi: komen & share. Gak ada like, gak ada angka. */}
      <div className="-mx-5 mt-3 flex border-t border-stone-100">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-bl-2xl py-2.5 text-[13.5px] font-medium text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-900"
          onClick={(e) => {
            e.stopPropagation()
            onOpen()
          }}
          aria-label="Lihat komentar"
        >
          <MessageCircle className="h-[17px] w-[17px]" strokeWidth={1.8} />
          Komentar
        </button>
        <span className="my-2 w-px bg-stone-100" aria-hidden="true" />
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-br-2xl py-2.5 text-[13.5px] font-medium text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-900"
          onClick={(e) => {
            e.stopPropagation()
            onShare()
          }}
          aria-label="Bagikan cuitan"
        >
          <Share2 className="h-4 w-4" strokeWidth={1.8} />
          Bagikan
        </button>
      </div>
    </article>
  )
}
