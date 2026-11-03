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
  isYou?: boolean
}

interface ThreadModalProps {
  thread: ThreadzThread | null
  liveComments: LiveComment[]
  typingName: string | null
  visitor: { name: string; color: string } | null
  shareCount: number
  onComment: (text: string) => void
  onOpenChange: (open: boolean) => void
}

export function ThreadModal({
  thread,
  liveComments,
  typingName,
  visitor,
  shareCount,
  onComment,
  onOpenChange,
}: ThreadModalProps) {
  const [text, setText] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  // tiap ada komentar baru / indikator nulis, lirik ke bawah
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [liveComments.length, typingName])

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
        className="flex max-h-[85dvh] flex-col gap-0 overflow-hidden rounded-2xl border-neutral-800 bg-[#101010] p-0 sm:max-w-[600px]"
      >
        <DialogTitle className="sr-only">Cuitan {author.name}</DialogTitle>

        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
          <span className="text-[15px] font-semibold text-neutral-200">Cuitan</span>
        </div>

        <div ref={scrollRef} className="tz-scroll min-h-0 flex-1 overflow-y-auto">
          {/* post utama */}
          <div className="flex gap-3 px-4 py-4">
            <Avatar name={author.name} color={author.color} size={44} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-[15px]">
                <span className="font-semibold text-neutral-100">{author.name}</span>
                <span className="text-neutral-500">· {formatMinutesAgo(thread.minutesAgo)}</span>
              </div>
              <p className="mt-1 whitespace-pre-wrap text-[16px] leading-relaxed text-neutral-100">
                {thread.content}
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                {commentCount > 0
                  ? `${commentCount} komentar · ${shareCount} dibagikan`
                  : `belum ada yang komen · ${shareCount} dibagikan`}
              </p>
            </div>
          </div>

          {/* komentar asli */}
          <div className="border-t border-neutral-800">
            {thread.comments.map((c, i) => {
              const u = getUser(c.authorId)
              return (
                <div key={`${thread.id}-${i}`} className="flex gap-3 border-b border-neutral-900 px-4 py-3">
                  <Avatar name={u.name} color={u.color} size={34} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="truncate font-semibold text-neutral-200">{u.name}</span>
                      <span className="shrink-0 text-xs text-neutral-500">
                        · {formatMinutesAgo(c.minutesAgo)}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[15px] leading-snug text-neutral-300">{c.content}</p>
                  </div>
                </div>
              )
            })}

            {/* komentar live: punya lu + balasan simulasi */}
            {liveComments.map((c) => (
              <div
                key={c.key}
                className={`tz-pop flex gap-3 border-b border-neutral-900 px-4 py-3 ${c.isYou ? "bg-neutral-900/40" : ""}`}
              >
                <Avatar name={c.name} color={c.color} size={34} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-sm">
                    <span className="truncate font-semibold text-neutral-200">{c.name}</span>
                    {c.isYou && (
                      <span className="rounded bg-neutral-100 px-1.5 py-px text-[10px] font-bold uppercase text-black">
                        lu
                      </span>
                    )}
                    <span className="shrink-0 text-xs text-neutral-500">
                      · {formatMinutesAgo(c.minutesAgo)}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[15px] leading-snug text-neutral-300">{c.content}</p>
                </div>
              </div>
            ))}

            {/* indikator seseorang lagi nulis */}
            {typingName && (
              <div className="tz-pop flex items-center gap-3 border-b border-neutral-900 px-4 py-3">
                <span className="h-[34px] w-[34px] shrink-0 rounded-full bg-neutral-800" />
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <span className="font-medium text-neutral-400">{typingName}</span>
                  <span>lagi nulis</span>
                  <span className="flex gap-0.5">
                    <span className="tz-dot inline-block h-1 w-1 rounded-full bg-neutral-400" />
                    <span className="tz-dot inline-block h-1 w-1 rounded-full bg-neutral-400" />
                    <span className="tz-dot inline-block h-1 w-1 rounded-full bg-neutral-400" />
                  </span>
                </div>
              </div>
            )}

            {commentCount === 0 && !typingName && (
              <p className="px-4 py-6 text-center text-sm text-neutral-500">
                komen pertama nungguin lu, loh
              </p>
            )}
          </div>
        </div>

        {/* composer */}
        <div className="border-t border-neutral-800 bg-[#101010] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Avatar
              name={visitor?.name ?? "lu"}
              color={visitor?.color ?? "#404040"}
              size={34}
            />
            <div className="flex flex-1 items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 py-1.5 pl-4 pr-1.5 focus-within:border-neutral-500">
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
                className="w-full bg-transparent text-[15px] text-neutral-100 outline-none placeholder:text-neutral-500"
                maxLength={280}
                aria-label="Tulis komentar"
              />
              <button
                type="button"
                onClick={submit}
                disabled={!text.trim()}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-black transition-opacity disabled:opacity-30"
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
