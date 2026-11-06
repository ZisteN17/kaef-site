/** Адрес сайта: из NEXT_PUBLIC_SITE_URL, иначе локальный. Без завершающего слэша. */
export function siteUrl(raw: string | undefined = process.env.NEXT_PUBLIC_SITE_URL): string {
  const v = (raw && raw.trim()) || 'http://localhost:3010'
  return v.replace(/\/+$/, '')
}

/** Демо-режим: боевой домен не задан, индексация выключена. */
export function isDemo(raw: string | undefined = process.env.NEXT_PUBLIC_SITE_URL): boolean {
  return !(raw && raw.trim())
}
