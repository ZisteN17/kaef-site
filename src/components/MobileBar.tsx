import { MapPin, Phone, UtensilsCrossed } from 'lucide-react'
import { routeUrl, telUrl } from '../lib/links'

const item = 'flex flex-1 flex-col items-center justify-center gap-1 text-[13px] font-medium'

/** Нижняя панель на телефоне. Высота и safe-area учтены отступом body. */
export default function MobileBar() {
  return (
    <nav
      aria-label="Быстрые действия"
      className="on-dark fixed inset-x-0 bottom-0 z-40 flex bg-deep text-paper shadow-[0_-6px_20px_rgba(0,0,0,0.2)] md:hidden"
      style={{ height: 'calc(var(--mobilebar-h) + env(safe-area-inset-bottom))', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={routeUrl()} target="_blank" rel="noopener noreferrer" className={`${item} text-paper`}>
        <MapPin size={22} aria-hidden="true" /> Маршрут
      </a>
      <a href={telUrl()} className={`${item} border-x border-mint/20`}>
        <Phone size={22} aria-hidden="true" /> Позвонить
      </a>
      <a href="#menu" className={item}>
        <UtensilsCrossed size={22} aria-hidden="true" /> Меню
      </a>
    </nav>
  )
}
