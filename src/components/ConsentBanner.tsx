'use client'

import { useEffect, useState } from 'react'
import { CONSENT_EVENT, CONSENT_KEY, hasAnalytics, type Consent } from '../lib/consent'
import { btnGhostDark, btnPrimary } from './ui'

/** Показывается только если подключена аналитика (иначе согласие не на что запрашивать). */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!hasAnalytics()) return
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function choose(value: Consent) {
    try {
      localStorage.setItem(CONSENT_KEY, value)
    } catch {}
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
    setVisible(false)
  }

  if (!visible) return null
  return (
    <div
      role="dialog"
      aria-label="Согласие на аналитику"
      className="on-dark fixed inset-x-3 z-50 rounded-card bg-deep p-4 text-paper shadow-[0_10px_30px_rgba(0,0,0,0.3)] md:inset-x-auto md:right-6 md:max-w-[420px]"
      style={{ bottom: 'calc(var(--mobilebar-h) + env(safe-area-inset-bottom) + 12px)' }}
    >
      <p className="text-[14px] leading-snug">
        Мы можем подключить Яндекс Метрику (она использует cookie и собирает обезличенную статистику посещений), чтобы
        понимать, чем сайт полезен. Включим её только с вашего согласия. Отказ не влияет на работу сайта; выбор можно
        изменить в подвале.{' '}
        <a href="/privacy" className="underline underline-offset-4">
          Политика конфиденциальности
        </a>
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => choose('granted')} className={`${btnPrimary} !min-h-[40px] flex-1`}>
          Согласен
        </button>
        <button type="button" onClick={() => choose('denied')} className={`${btnGhostDark} !min-h-[40px] flex-1`}>
          Отказаться
        </button>
      </div>
    </div>
  )
}
