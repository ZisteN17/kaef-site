import type { MetadataRoute } from 'next'
import { isDemo, siteUrl } from '../lib/site'

export default function robots(): MetadataRoute.Robots {
  // Пока не задан боевой домен (NEXT_PUBLIC_SITE_URL), сайт — демо и не должен попадать в поиск.
  if (isDemo()) return { rules: { userAgent: '*', disallow: '/' } }
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${siteUrl()}/sitemap.xml` }
}
