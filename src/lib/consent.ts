export type Consent = 'granted' | 'denied'

export const CONSENT_KEY = 'kaef-consent'
export const CONSENT_EVENT = 'kaef-consent'

/** Только цифры: защита от подстановки в inline-скрипт. */
export function metrikaId(raw: string | undefined = process.env.NEXT_PUBLIC_YM_ID): string | null {
  return raw && /^\d{4,12}$/.test(raw.trim()) ? raw.trim() : null
}

export const hasAnalytics = () => metrikaId() !== null
