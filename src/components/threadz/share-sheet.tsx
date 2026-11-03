"use client"

import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { Link2, MessageCircle, Send, Facebook } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface ShareSheetProps {
  threadId: number | null
  onOpenChange: (open: boolean) => void
}

function threadUrl(id: number) {
  return `https://akiomida.app/cuit/${id}`
}

export function ShareSheet({ threadId, onOpenChange }: ShareSheetProps) {
  if (threadId === null) return null

  const copyLink = async () => {
    const url = threadUrl(threadId)
    try {
      await navigator.clipboard.writeText(url)
      toast({ description: "Tautan disalin." })
    } catch {
      toast({ description: `Tautan: ${url}` })
    }
  }

  const shareExternal = (appName: string) => {
    toast({ description: `Tautan disalin, tinggal tempel di ${appName}.` })
  }

  const options = [
    { icon: Link2, label: "Salin tautan", action: copyLink },
    { icon: MessageCircle, label: "Bagikan ke WhatsApp", action: () => shareExternal("WhatsApp") },
    { icon: Send, label: "Bagikan ke Telegram", action: () => shareExternal("Telegram") },
    { icon: Facebook, label: "Bagikan ke Facebook", action: () => shareExternal("Facebook") },
  ]

  return (
    <Drawer open onOpenChange={onOpenChange}>
      <DrawerContent className="mx-auto max-w-[560px] rounded-t-2xl border-stone-200 bg-white text-stone-900">
        <div className="mx-auto w-full max-w-md px-4 pb-8 pt-2">
          <DrawerTitle className="mb-4 text-center text-[15px] font-semibold">
            Bagikan cuitan
          </DrawerTitle>

          <div className="space-y-1">
            {options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => {
                  opt.action()
                  onOpenChange(false)
                }}
                className="flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left text-[15px] transition-colors hover:bg-stone-100"
              >
                <opt.icon className="h-5 w-5 text-stone-500" strokeWidth={1.8} />
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
