import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: 'var(--kaef-green)',
        deep: 'var(--kaef-deep)',
        paper: 'var(--kaef-paper)',
        ceramic: 'var(--kaef-ceramic)',
        ink: 'var(--kaef-ink)',
        rust: 'var(--kaef-rust)',
        mint: 'var(--kaef-mint)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        text: ['var(--font-text)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { btn: 'var(--radius-btn)', card: 'var(--radius-card)' },
      maxWidth: { container: 'var(--container)' },
      transitionDuration: { fast: 'var(--dur-fast)' },
    },
  },
  plugins: [],
}

export default config
