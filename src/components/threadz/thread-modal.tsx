"use client"

import { useEffect, useRef, useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { SendHorizontal, X } from "lucide-react"
import type { ThreadzThread } from "@/lib/threadz/types"
import { getUser } from "@/lib/threadz/data/users"
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
  onComment: (text: string) => void
  onOpenChange: (open: boolean) => void
}

/**
 * Komentar tampil ala gelembung: avatar + balok abu yang memuat nama & isi.
 * Satu balok satu orang — gak ada yang ketuker siapa ngomong apa.
 */
function CommentRow({
  name,
  color,
  content,
  pop = false,
}: {
  name: string
  color: string
  content: string
  pop?: boolean
}) {
  return (
    <div className={`flex gap-2.5 px-5 ${pop ? "tz-pop" : ""}`}>
      <Avatar name={name} color={color} size={30} />
      <div className="min-w-0 max-w-[85%] rounded-2xl bg-stone-100 px-3.5 py-2">
        <span className="block truncate text-[12.5px] font-semibold leading-tight text-stone-800">
          {name}
        </span>
        <p className="mt-0.5 whitespace-pre-wrap break-words text-[14.5px] leading-relaxed text-stone-700">
          {content}
        </p>
      </div>
    </div>
  )
}

export function ThreadModal({
  thread,
  liveComments,
  visitor,
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

  // cuitan buatan pengunjung (id negatif) tampil pakai identitas pengunjung
  const author = thread.authorId < 0 && visitor ? visitor : getUser(thread.authorId)
  const emptyComments = thread.comments.length === 0 && liveComments.length === 0

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
        showCloseButton={false}
        className="flex max-h-[85dvh] flex-col gap-0 overflow-hidden rounded-2xl border-stone-200/80 bg-white p-0 text-stone-900 shadow-[0_12px_48px_rgba(28,25,23,0.2)] sm:max-w-[580px]"
      >
        <DialogTitle className="sr-only">Cuitan {author.name}</DialogTitle>

        {/* bilah judul: identitas penulis + tombol tutup yang jelas */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-stone-200/80 bg-white px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
            <Avatar name={author.name} color={author.color} size={30} />
            <span className="truncate text-[14px] font-semibold text-stone-900">
              {author.name}
            </span>
          </div>
          <DialogClose
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-700"
            aria-label="Tutup"
          >
            <X className="h-[18px] w-[18px]" strokeWidth={2} />
          </DialogClose>
        </div>

        <div ref={scrollRef} className="tz-scroll min-h-0 flex-1 overflow-y-auto">
          {/* isi cuitan */}
          <div className="flex gap-3 px-5 py-4">
            <Avatar name={author.name} color={author.color} size={42} />
            <div className="min-w-0 flex-1">
              <span className="text-[14px] font-semibold text-stone-900">{author.name}</span>
              <p className="mt-1.5 whitespace-pre-wrap text-[15.5px] leading-relaxed text-stone-800">
                {thread.content}
              </p>
            </div>
          </div>

          {/* bagian komentar — dipisah jelas biar gak nyampur sama isinya */}
          <div className="border-t border-stone-200/80 bg-stone-50/80">
            <p className="px-5 pb-2.5 pt-4 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-stone-400">
              Komentar
            </p>

            <div className="flex flex-col gap-3 pb-4">
              {thread.comments.map((c, i) => {
                const u = getUser(c.authorId)
                return <CommentRow key={`${thread.id}-${i}`} name={u.name} color={u.color} content={c.content} />
              })}

              {/* komentar lu tampil persis kayak komentar orang lain */}
              {liveComments.map((c) => (
                <CommentRow key={c.key} name={c.name} color={c.color} content={c.content} pop />
              ))}

              {emptyComments && (
                <p className="px-5 py-8 text-center text-[13.5px] text-stone-400">
                  Belum ada komentar. Jadilah yang pertama.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* bilah tulis komentar */}
        <div className="shrink-0 border-t border-stone-200/80 bg-white px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Avatar name={visitor?.name ?? "lu"} color={visitor?.color ?? "#a8a29e"} size={34} />
            <div className="flex flex-1 items-center gap-2 rounded-full border border-stone-200 bg-stone-50 py-1.5 pl-4 pr-1.5 transition-all focus-within:border-stone-400 focus-within:bg-white focus-within:shadow-[0_1px_4px_rgba(28,25,23,0.06)]">
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
                maxLength={1000}
                aria-label="Tulis komentar"
              />
              <button
                type="button"
                onClick={submit}
                disabled={!text.trim()}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white transition-all hover:bg-stone-700 active:scale-95 disabled:opacity-30"
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
