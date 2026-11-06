import Mark from './Mark'
import { cafe, sources } from '../data/cafe'
import { telUrl, telegramUrl } from '../lib/links'
import { container } from './ui'
import ConsentReset from './ConsentReset'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="on-dark bg-deep pb-10 pt-16 text-paper md:pt-20">
      <div className={`${container} grid gap-10 md:grid-cols-12`}>
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Mark className="h-10 w-10" />
            <span className="font-display text-[32px] leading-none">{cafe.name}</span>
          </div>
          <p className="mt-4 max-w-[26rem] text-mint">
            {cafe.descriptor} в {cafe.city === 'Казань' ? 'Казани' : cafe.city}. {cafe.slogan}.
          </p>
        </div>

        <address className="not-italic text-[16px] md:col-span-4">
          <p>
            {cafe.city}, {cafe.address.street}
          </p>
          <p className="mt-2">
            <a href={telUrl()} className="underline underline-offset-4">
              {cafe.phone.display}
            </a>
          </p>
          <p className="mt-2">
            <a href={telegramUrl()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Telegram {cafe.telegram.handle}
            </a>
          </p>
        </address>

        <div className="text-[15px] text-mint md:col-span-3">
          <p>
            Источники данных и фото:{' '}
            {sources.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                {s.label}
              </a>
            ))}
          </p>
          <p className="mt-2">
            <a href="/privacy" className="underline underline-offset-4">
              Политика конфиденциальности
            </a>
          </p>
          <p className="mt-2">
            <ConsentReset className="text-left underline underline-offset-4" />
          </p>
        </div>
      </div>
      <div className={`${container} mt-12 border-t border-mint/20 pt-6 text-[14px] text-mint`}>
        <p>
          © {year} {cafe.name}. {cafe.legalLine}
        </p>
      </div>
    </footer>
  )
}
