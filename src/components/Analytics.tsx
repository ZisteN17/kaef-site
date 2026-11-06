'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { CONSENT_EVENT, CONSENT_KEY, metrikaId } from '../lib/consent'

/** Яндекс Метрика: грузится только при заданном NEXT_PUBLIC_YM_ID и после согласия. */
export default function Analytics() {
  const [granted, setGranted] = useState(false)
  const id = metrikaId()

  useEffect(() => {
    try {
      if (localStorage.getItem(CONSENT_KEY) === 'granted') setGranted(true)
    } catch {}
    const on = (e: Event) => setGranted((e as CustomEvent).detail === 'granted')
    window.addEventListener(CONSENT_EVENT, on)
    return () => window.removeEventListener(CONSENT_EVENT, on)
  }, [])

  if (!id || !granted) return null
  return (
    <Script id="ym" strategy="afterInteractive">
      {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${id},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});`}
    </Script>
  )
}
