/** Общие классы кнопок и ссылок (только токены). */
const base =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn px-6 text-[15px] font-semibold transition-colors duration-fast'

export const btnPrimary = `${base} bg-rust text-paper hover:bg-[#8f3b2f]`
export const btnGhostDark = `${base} border border-mint/60 text-paper hover:bg-paper/10`
export const btnGhostLight = `${base} border border-green text-green hover:bg-green hover:text-paper`
export const container = 'mx-auto w-full max-w-container px-[var(--gutter)]'
