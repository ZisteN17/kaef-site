import { Wifi, Car, Dog, Sun, CreditCard, Coffee, ShoppingBag, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'
import WaveDivider from './WaveDivider'
import { features, occasions } from '../data/cafe'
import { container } from './ui'

const icons: Record<string, LucideIcon> = { wifi: Wifi, car: Car, dog: Dog, sun: Sun, card: CreditCard, coffee: Coffee, bag: ShoppingBag }

export default function Suits() {
  return (
    <section id="suits" className="relative bg-paper pb-[var(--space-after-wave)] pt-[var(--space-section)]">
      <div className={`${container} grid gap-10 lg:grid-cols-12`}>
        <Reveal className="lg:col-span-7">
          <p className="section-label text-green">Подходит для</p>
          <ul className="mt-6 border-t border-green/30">
            {occasions.map((o) => (
              <li key={o} className="border-b border-green/30 py-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-none md:py-6">
                {o}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-10">
          <h2 className="font-display text-[28px] leading-tight">Что есть в кафе</h2>
          <ul className="mt-6 space-y-4">
            {features.map((f) => {
              const Icon = icons[f.icon]
              return (
                <li key={f.id} className="flex items-center gap-4 text-[17px]">
                  <Icon size={22} className="shrink-0 text-green" aria-hidden="true" />
                  {f.label}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
      <WaveDivider to="deep" />
    </section>
  )
}
