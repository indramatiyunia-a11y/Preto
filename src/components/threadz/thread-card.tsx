"use client"

import { MessageCircle, Share2 } from "lucide-react"
import type { ThreadzThread } from "@/lib/threadz/types"
import { getUser } from "@/lib/threadz/data/users"
import { formatMinutesAgo, formatCount } from "@/lib/threadz/format"
import { Avatar } from "./avatar"

interface ThreadCardProps {
  thread: ThreadzThread
  commentCount: number
  shareCount: number
  onOpen: () => void
  onShare: () => void
}

export function ThreadCard({ thread, commentCount, shareCount, onOpen, onShare }: ThreadCardProps) {
  const author = getUser(thread.authorId)

  return (
    <article
      className="group/thread cursor-pointer rounded-2xl border border-stone-200/90 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(28,25,23,0.05)] transition-shadow hover:shadow-[0_2px_10px_rgba(28,25,23,0.08)]"
      onClick={onOpen}
      aria-label={`Cuitan dari ${author.name}`}
    >
      <div className="flex items-center gap-1.5 text-[15px]">
        <Avatar name={author.name} color={author.color} size={36} />
        <span className="truncate font-semibold text-stone-900">{author.name}</span>
        <span className="shrink-0 text-stone-400">· {formatMinutesAgo(thread.minutesAgo)}</span>
      </div>

      <p className="mt-2.5 whitespace-pre-wrap text-[15px] leading-relaxed text-stone-700">
        {thread.content}
      </p>

      {/* Di dunia ini cuma ada dua aksi: komen & share. Gak ada like. */}
      <div className="mt-3 flex items-center gap-1">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
          onClick={(e) => {
            e.stopPropagation()
            onOpen()
          }}
          aria-label={`${commentCount} komentar. Buka cuitan`}
        >
          <MessageCircle className="h-[17px] w-[17px]" strokeWidth={1.8} />
          <span>{formatCount(commentCount)}</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
          onClick={(e) => {
            e.stopPropagation()
            onShare()
          }}
          aria-label={`${shareCount} kali dibagikan. Bagikan cuitan`}
        >
          <Share2 className="h-4 w-4" strokeWidth={1.8} />
          <span>{formatCount(shareCount)}</span>
        </button>
      </div>
    </article>
  )
}
