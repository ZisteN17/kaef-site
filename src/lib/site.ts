/** Адрес сайта: из NEXT_PUBLIC_SITE_URL, иначе локальный. Без завершающего слэша. */
export function siteUrl(raw: string | undefined = process.env.NEXT_PUBLIC_SITE_URL): string {
  const v = (raw && raw.trim()) || 'http://localhost:3010'
  return v.replace(/\/+$/, '')
}
