import Photo from './Photo'
import Reveal from './Reveal'
import WaveDivider from './WaveDivider'
import { atmosphere, cafe, photos } from '../data/cafe'
import { container } from './ui'

/** Последовательность вход → зал → стойка → посуда. Разные размеры и сдвиги, не masonry. */
const place: Record<string, { cls: string; ratio: string; arch?: boolean; sizes: string }> = {
  entrance: { cls: 'md:col-span-7', ratio: 'aspect-[4/3]', sizes: '(min-width:768px) 58vw, 100vw' },
  hall: { cls: 'md:col-span-4 md:col-start-9 md:mt-28', ratio: 'aspect-[3/4]', arch: true, sizes: '(min-width:768px) 32vw, 100vw' },
  counter: { cls: 'md:col-span-4 md:col-start-2', ratio: 'aspect-[3/4]', sizes: '(min-width:768px) 32vw, 100vw' },
  ceramics: { cls: 'md:col-span-6 md:col-start-7 md:mt-16', ratio: 'aspect-[4/3]', sizes: '(min-width:768px) 50vw, 100vw' },
}

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="relative bg-ceramic pb-[130px] pt-[var(--space-section-md)] md:pb-[200px]">
      <div className={container}>
        <Reveal>
          <p className="section-label text-green">Атмосфера</p>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">Сесть и никуда не спешить</h2>
          <p className="mt-5 max-w-[40rem] text-ink/80">
            Светлый зал с изумрудными диванами, деревянными столами и зеленью под потолком. Посуда с резным орнаментом,
            выпечка в витрине и достаточно места, чтобы позавтракать неторопливо.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
          {atmosphere.map((a, i) => {
            const p = place[a.id]
            return (
              <li key={a.id} className={p.cls}>
                <div className="overflow-hidden" style={{ borderRadius: p.arch ? 'var(--radius-arch)' : 'var(--radius-card)' }}>
                  <Photo photo={photos[a.photo]} sizes={p.sizes} className={`${p.ratio} h-auto w-full object-cover`} />
                </div>
                <p className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-[28px] text-rust">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-[26px]">{a.title}</span>
                </p>
                <p className="mt-1 max-w-[28rem] text-[16px] text-ink/75">{a.caption}</p>
              </li>
            )
          })}
        </ol>

        <Reveal className="mt-20 md:mt-28">
          <p className="max-w-[18ch] font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-green">
            «{cafe.slogan}»
          </p>
          <p className="mt-3 text-[15px] text-ink/70">Надпись на стене зала.</p>
        </Reveal>
      </div>
      <WaveDivider to="paper" />
    </section>
  )
}
