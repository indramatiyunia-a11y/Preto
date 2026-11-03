"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar } from "./avatar"

interface PostComposerProps {
  visitor: { name: string; color: string } | null
  onPost: (text: string) => void
}

/**
 * Kotak nulis di paling atas feed, ala aplikasi ringan:
 * avatar + pil "Apa yang ada di pikiranlu?" — diklik keluar textarea.
 */
export function PostComposer({ visitor, onPost }: PostComposerProps) {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const submit = () => {
    const t = text.trim()
    if (!t) return
    onPost(t)
    setText("")
    setOpen(false)
  }

  return (
    <div className="rounded-2xl border border-stone-200/90 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(28,25,23,0.05)]">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center gap-3 text-left"
          aria-label="Buka kotak nulis cuitan"
        >
          <Avatar name={visitor?.name ?? "lu"} color={visitor?.color ?? "#a8a29e"} size={38} />
          <span className="flex-1 rounded-full border border-stone-200 bg-stone-100/80 px-4 py-2 text-[14px] text-stone-400">
            Apa yang ada di pikiranlu?
          </span>
        </button>
      ) : (
        <div className="flex gap-3">
          <Avatar name={visitor?.name ?? "lu"} color={visitor?.color ?? "#a8a29e"} size={38} />
          <div className="min-w-0 flex-1">
            <span className="text-[13px] font-semibold text-stone-800">
              {visitor?.name ?? "akiomida..."}
            </span>
            <textarea
              ref={inputRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  submit()
                }
                if (e.key === "Escape") {
                  setOpen(false)
                  setText("")
                }
              }}
              rows={3}
              maxLength={280}
              placeholder="tulis di sini..."
              className="tz-scroll mt-1 w-full resize-none bg-transparent text-[15px] leading-relaxed text-stone-900 outline-none placeholder:text-stone-400"
              aria-label="Tulis cuitan"
            />
            <div className="mt-2 flex items-center justify-between">
              <span
                className={`text-[12px] ${
                  280 - text.length <= 20 ? "text-orange-700" : "text-stone-400"
                }`}
              >
                {280 - text.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    setText("")
                  }}
                  className="rounded-full px-3.5 py-1.5 text-[13px] text-stone-500 transition-colors hover:bg-stone-100"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={submit}
                  disabled={!text.trim()}
                  className="rounded-full bg-stone-900 px-4 py-1.5 text-[13px] font-semibold text-white transition-all hover:bg-stone-700 disabled:opacity-30"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
