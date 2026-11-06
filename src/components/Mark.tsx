/** Знак Каеф (перерисованные листья). Знак принадлежит владельцу кафе. */
export default function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect width="64" height="64" rx="14" fill="var(--kaef-green)" />
      <path d="M17 12h5v18h-5z" fill="var(--kaef-paper)" />
      <path d="M22 28c0-9 7-15 18-15 0 10-7 16-18 15z" fill="var(--kaef-paper)" />
      <path d="M10 50c0-9 8-15 19-15 0 10-8 17-19 15z" fill="var(--kaef-paper)" />
      <path d="M30 51c0-9 8-15 19-15 0 10-8 17-19 15z" fill="var(--kaef-paper)" />
    </svg>
  )
}
