interface AvatarProps {
  name: string
  color: string
  size?: number
  online?: boolean
}

/**
 * Foto profil di dunia Threadz cuma boleh warna solid.
 * Gak ada foto, gak ada huruf. Warna doang.
 */
export function Avatar({ name, color, size = 40, online = false }: AvatarProps) {
  const dot = Math.max(9, Math.round(size * 0.27))
  return (
    <span
      className="relative inline-block shrink-0"
      style={{ width: size, height: size }}
      title={name}
    >
      <span
        className="block h-full w-full rounded-full transition-transform group-hover/thread:scale-[1.03]"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {online && (
        <span
          className="absolute -bottom-0.5 -right-0.5 rounded-full bg-emerald-400 ring-2 ring-black"
          style={{ width: dot, height: dot }}
          aria-hidden="true"
        />
      )}
      <span className="sr-only">{name}</span>
    </span>
  )
}
