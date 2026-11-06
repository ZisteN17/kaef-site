import type { Metadata, Viewport } from 'next'
import { Geologica, Kurale } from 'next/font/google'
import './globals.css'
import { cafe } from '../data/cafe'
import { cafeJsonLd } from '../lib/jsonld'
import { siteUrl } from '../lib/site'
import Analytics from '../components/Analytics'
import ConsentBanner from '../components/ConsentBanner'

const display = Kurale({ weight: '400', subsets: ['latin', 'cyrillic', 'cyrillic-ext'], display: 'swap', variable: '--font-display' })
const text = Geologica({ adjustFontFallback: false, subsets: ['latin', 'cyrillic', 'cyrillic-ext'], display: 'swap', variable: '--font-text' })

const title = `${cafe.name} — гастрокофейня в Казани: завтраки и кофе на Мансура Хасанова, 13`
const description =
  'Каеф — кафе в Казани на улице Мансура Хасанова, 13: красивые завтраки, кофе с собой, летняя веранда и спокойные встречи. Меню, отзывы и маршрут.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: cafe.name,
    title,
    description,
    url: '/',
    images: [{ url: '/images/kaef/interior-counter.jpg', width: 2000, height: 1500, alt: 'Зал и стойка кафе Каеф' }],
  },
}

export const viewport: Viewport = { themeColor: '#1e3a31', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${display.variable} ${text.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-btn focus:bg-paper focus:px-4 focus:py-3 focus:text-ink"
        >
          К содержимому
        </a>
        {children}
        <ConsentBanner />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeJsonLd(siteUrl())) }} />
      </body>
    </html>
  )
}
