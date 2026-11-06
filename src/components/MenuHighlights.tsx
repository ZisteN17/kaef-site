import { ArrowUpRight } from 'lucide-react'
import MenuCarousel from './MenuCarousel'
import Reveal from './Reveal'
import WaveDivider from './WaveDivider'
import { menuNote } from '../data/cafe'
import { menuUrl } from '../lib/links'
import { btnGhostLight, container } from './ui'

export default function MenuHighlights() {
  return (
    <section id="menu" className="relative bg-paper pb-[var(--space-after-wave)] pt-[var(--space-section)]">
      <div className={container}>
        <Reveal>
          <p className="section-label text-green">Меню</p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">За чем приходят в Каеф</h2>
          <p className="mt-4 max-w-[38rem] text-ink/80">
            Завтраки, супы и паста — шесть блюд из меню, с которых удобно начать.
          </p>
        </Reveal>
      </div>

      <div className="mt-8 md:mt-10">
        <MenuCarousel />
      </div>

      <div className={`${container} mt-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between`}>
        <p className="max-w-[34rem] text-[15px] text-ink/70">{menuNote}</p>
        <a href={menuUrl()} target="_blank" rel="noopener noreferrer" className={btnGhostLight}>
          Актуальное меню в Яндекс Картах <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <WaveDivider to="ceramic" flip />
    </section>
  )
}
