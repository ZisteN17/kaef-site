import { MapPin, Phone, Send, Clock } from 'lucide-react'
import Reveal from './Reveal'
import { cafe } from '../data/cafe'
import { cardUrl, mapEmbedUrl, routeUrl, telUrl, telegramUrl } from '../lib/links'
import { btnPrimary, container } from './ui'

export default function Location() {
  const row = 'flex items-start gap-4'
  return (
    <section id="contacts" className="bg-paper pb-[var(--space-section)] pt-[var(--space-section)]">
      <div className={`${container} grid gap-10 lg:grid-cols-12`}>
        <Reveal className="lg:col-span-5">
          <p className="section-label text-green">Как добраться</p>
          <h2 className="mt-3 text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">Ждём на Мансура Хасанова</h2>

          <ul className="mt-8 space-y-5 text-[18px]">
            <li className={row}>
              <MapPin size={22} className="mt-1 shrink-0 text-green" aria-hidden="true" />
              <span>
                {cafe.city}, {cafe.address.street}
              </span>
            </li>
            <li className={row}>
              <Phone size={22} className="mt-1 shrink-0 text-green" aria-hidden="true" />
              <a href={telUrl()} className="underline decoration-green/40 underline-offset-4 hover:decoration-green">
                {cafe.phone.display}
              </a>
            </li>
            <li className={row}>
              <Send size={22} className="mt-1 shrink-0 text-green" aria-hidden="true" />
              <a href={telegramUrl()} target="_blank" rel="noopener noreferrer" className="underline decoration-green/40 underline-offset-4 hover:decoration-green">
                Telegram {cafe.telegram.handle}
              </a>
            </li>
            <li className={row}>
              <Clock size={22} className="mt-1 shrink-0 text-green" aria-hidden="true" />
              <span>
                {cafe.hours.summary}
                <a href={cardUrl()} target="_blank" rel="noopener noreferrer" className="mt-1 block text-[15px] text-green underline underline-offset-4">
                  Уточнить часы в Яндекс Картах
                </a>
              </span>
            </li>
          </ul>

          <a href={routeUrl()} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-10`}>
            <MapPin size={18} aria-hidden="true" /> Построить маршрут
          </a>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-card bg-ceramic">
            <iframe
              src={mapEmbedUrl()}
              title={`Карта: ${cafe.name}, ${cafe.address.street}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full md:h-[540px]"
            />
          </div>
          <p className="mt-3 text-[14px] text-ink/70">
            Карта не загрузилась? Откройте{' '}
            <a href={cardUrl()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              карточку на Яндекс Картах
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
