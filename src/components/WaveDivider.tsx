type Props = { to: 'paper' | 'deep' | 'ceramic'; flip?: boolean }

/** Волнистая кромка внизу секции. Цвет = фон следующей секции. Родитель должен быть relative. */
export default function WaveDivider({ to, flip = false }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-[-1px] block h-[40px] w-full md:h-[72px]"
      style={{ fill: `var(--kaef-${to})`, transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <path d="M0 44C220 92 470 4 720 40s520 52 720-10V80H0Z" />
    </svg>
  )
}
