'use client'

import { useEffect, useState } from 'react'
import { CONSENT_KEY, hasAnalytics } from '../lib/consent'

/** Ссылка «Изменить выбор по аналитике»: сбрасывает сохранённый выбор и показывает баннер заново. Видна только если аналитика подключена. */
export default function ConsentReset({ className = '' }: { className?: string }) {
  const [show, setShow] = useState(false)
  useEffect(() => setShow(hasAnalytics()), [])
  if (!show) return null
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        try {
          localStorage.removeItem(CONSENT_KEY)
        } catch {}
        window.location.reload()
      }}
    >
      Изменить выбор по аналитике
    </button>
  )
}
