"use client"

import { MessageCircle, Send } from "lucide-react"
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
      className="group/thread cursor-pointer border-b border-neutral-800 px-4 py-3 transition-colors hover:bg-neutral-950"
      onClick={onOpen}
      aria-label={`Cuitan dari ${author.name}`}
    >
      <div className="flex gap-3">
        <Avatar name={author.name} color={author.color} size={40} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[15px]">
            <span className="truncate font-semibold text-neutral-100">{author.name}</span>
            <span className="shrink-0 text-neutral-500">· {formatMinutesAgo(thread.minutesAgo)}</span>
          </div>
          <p className="mt-0.5 whitespace-pre-wrap text-[15px] leading-snug text-neutral-200">
            {thread.content}
          </p>

          {/* Hanya ada dua aksi di dunia ini: komentar & share. Gak ada like. Titik. */}
          <div className="mt-2.5 flex items-center gap-1">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-100"
              onClick={(e) => {
                e.stopPropagation()
                onOpen()
              }}
              aria-label={`${commentCount} komentar. Buka cuitan`}
            >
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.8} />
              {commentCount > 0 && <span>{formatCount(commentCount)}</span>}
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-100"
              onClick={(e) => {
                e.stopPropagation()
                onShare()
              }}
              aria-label={`${shareCount} kali dibagikan. Bagikan cuitan`}
            >
              <Send className="h-[17px] w-[17px]" strokeWidth={1.8} />
              {shareCount > 0 && <span>{formatCount(shareCount)}</span>}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
