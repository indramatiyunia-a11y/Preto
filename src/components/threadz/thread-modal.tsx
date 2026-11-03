"use client"

import { useEffect, useRef, useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { SendHorizontal } from "lucide-react"
import type { ThreadzThread } from "@/lib/threadz/types"
import { getUser } from "@/lib/threadz/data/users"
import { formatMinutesAgo } from "@/lib/threadz/format"
import { Avatar } from "./avatar"

export interface LiveComment {
  key: string
  name: string
  color: string
  minutesAgo: number
  content: string
}

interface ThreadModalProps {
  thread: ThreadzThread | null
  liveComments: LiveComment[]
  visitor: { name: string; color: string } | null
  shareCount: number
  onComment: (text: string) => void
  onOpenChange: (open: boolean) => void
}

export function ThreadModal({
  thread,
  liveComments,
  visitor,
  shareCount,
  onComment,
  onOpenChange,
}: ThreadModalProps) {
  const [text, setText] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  // komentar baru muncul, lirik ke bawah
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [liveComments.length])

  if (!thread) return null

  const author = getUser(thread.authorId)
  const commentCount = thread.comments.length + liveComments.length

  const submit = () => {
    const t = text.trim()
    if (!t) return
    onComment(t)
    setText("")
  }

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent
        key={thread.id}
        className="flex max-h-[85dvh] flex-col gap-0 overflow-hidden rounded-2xl border-stone-200 bg-white p-0 text-stone-900 sm:max-w-[560px]"
      >
        <DialogTitle className="sr-only">Cuitan {author.name}</DialogTitle>

        <div ref={scrollRef} className="tz-scroll min-h-0 flex-1 overflow-y-auto">
          {/* post utama */}
          <div className="flex gap-3 px-5 py-4">
            <Avatar name={author.name} color={author.color} size={44} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-[15px]">
                <span className="font-semibold text-stone-900">{author.name}</span>
                <span className="text-stone-400">· {formatMinutesAgo(thread.minutesAgo)}</span>
              </div>
              <p className="mt-1.5 whitespace-pre-wrap text-[15px] leading-relaxed text-stone-700">
                {thread.content}
              </p>
              <p className="mt-3 text-[13px] text-stone-400">
                {commentCount > 0
                  ? `${commentCount} komentar · ${shareCount} dibagikan`
                  : `${shareCount} dibagikan`}
              </p>
            </div>
          </div>

          {/* komentar */}
          <div className="border-t border-stone-100">
            {thread.comments.map((c, i) => {
              const u = getUser(c.authorId)
              return (
                <div key={`${thread.id}-${i}`} className="flex gap-3 border-b border-stone-100 px-5 py-3">
                  <Avatar name={u.name} color={u.color} size={32} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[13px]">
                      <span className="truncate font-semibold text-stone-800">{u.name}</span>
                      <span className="shrink-0 text-stone-400">· {formatMinutesAgo(c.minutesAgo)}</span>
                    </div>
                    <p className="mt-0.5 text-[14px] leading-snug text-stone-700">{c.content}</p>
                  </div>
                </div>
              )
            })}

            {/* komentar lu tampil persis kayak komentar orang lain */}
            {liveComments.map((c) => (
              <div
                key={c.key}
                className="tz-pop flex gap-3 border-b border-stone-100 px-5 py-3"
              >
                <Avatar name={c.name} color={c.color} size={32} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[13px]">
                    <span className="truncate font-semibold text-stone-800">{c.name}</span>
                    <span className="shrink-0 text-stone-400">· {formatMinutesAgo(c.minutesAgo)}</span>
                  </div>
                  <p className="mt-0.5 text-[14px] leading-snug text-stone-700">{c.content}</p>
                </div>
              </div>
            ))}

            {commentCount === 0 && (
              <p className="px-5 py-8 text-center text-sm text-stone-400">
                belum ada yang komen di sini
              </p>
            )}
          </div>
        </div>

        {/* composer */}
        <div className="border-t border-stone-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Avatar name={visitor?.name ?? "lu"} color={visitor?.color ?? "#a8a29e"} size={34} />
            <div className="flex flex-1 items-center gap-2 rounded-full border border-stone-200 bg-stone-50 py-1.5 pl-4 pr-1.5 focus-within:border-stone-400">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    submit()
                  }
                }}
                placeholder="Tulis komentar..."
                className="w-full bg-transparent text-[15px] text-stone-900 outline-none placeholder:text-stone-400"
                maxLength={280}
                aria-label="Tulis komentar"
              />
              <button
                type="button"
                onClick={submit}
                disabled={!text.trim()}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white transition-opacity hover:bg-stone-700 disabled:opacity-30"
                aria-label="Kirim komentar"
              >
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
