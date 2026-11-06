import { ArrowUpRight } from 'lucide-react'
import Photo from './Photo'
import Reveal from './Reveal'
import WaveDivider from './WaveDivider'
import { menu, menuNote, photos } from '../data/cafe'
import { formatPrice } from '../lib/format'
import { menuUrl } from '../lib/links'
import { btnGhostLight, container } from './ui'

/** Асимметричная сетка 5+4+3 / 3+4+5, средние карточки смещены вниз */
const layout = [
  { span: 'md:col-span-5', ratio: 'aspect-[3/4]', offset: '' },
  { span: 'md:col-span-4', ratio: 'aspect-[4/5]', offset: 'md:mt-24' },
  { span: 'md:col-span-3', ratio: 'aspect-[3/4]', offset: '' },
  { span: 'md:col-span-3', ratio: 'aspect-[3/4]', offset: '' },
  { span: 'md:col-span-4', ratio: 'aspect-[4/5]', offset: 'md:mt-24' },
  { span: 'md:col-span-5', ratio: 'aspect-[3/4]', offset: '' },
]

export default function MenuHighlights() {
  return (
    <section id="menu" className="relative bg-paper pb-[130px] pt-[var(--space-section)] md:pb-[190px]">
      <div className={container}>
        <Reveal>
          <p className="section-label text-green">Меню</p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">За чем приходят в Каеф</h2>
          <p className="mt-5 max-w-[38rem] text-ink/80">
            Завтраки, супы и паста — шесть блюд из меню, с которых удобно начать.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:mt-20 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
          {menu.map((item, i) => {
            const l = layout[i]
            return (
              <li key={item.id} className={`min-w-0 ${l.span} ${l.offset} ${i < 1 ? 'col-span-2' : ''}`}>
                <div className="overflow-hidden" style={{ borderRadius: 'var(--radius-arch)' }}>
                  <Photo
                    photo={photos[item.photo]}
                    sizes="(min-width:768px) 40vw, 50vw"
                    className={`${l.ratio} h-auto w-full object-cover transition-transform duration-[600ms] ease-out hover:translate-y-[-4px] motion-reduce:transition-none`}
                  />
                </div>
                <div className="mt-4 flex flex-col gap-1 border-t border-green/25 pt-3 md:flex-row md:items-start md:justify-between md:gap-4">
                  <h3 className="min-w-0 text-[18px] leading-snug [hyphens:auto] md:text-[22px]">{item.name}</h3>
                  <p className="shrink-0 text-[18px] font-semibold text-green md:pt-0.5">{formatPrice(item.price)}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-16 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[34rem] text-[15px] text-ink/70">{menuNote}</p>
          <a href={menuUrl()} target="_blank" rel="noopener noreferrer" className={btnGhostLight}>
            Актуальное меню в Яндекс Картах <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <WaveDivider to="ceramic" flip />
    </section>
  )
}
