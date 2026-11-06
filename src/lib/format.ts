/** 390 → «390 ₽» (неразрывный пробел) */
export function formatPrice(n: number): string {
  return `${new Intl.NumberFormat('ru-RU').format(n)} ₽`
}

/** 4.7 → «4,7» */
export function formatRating(n: number): string {
  return n.toFixed(1).replace('.', ',')
}

/** Русское склонение: 1 оценка, 2 оценки, 5 оценок, 261 оценка */
export function pluralRu(n: number, forms: [string, string, string]): string {
  const a = Math.abs(n) % 100
  const b = a % 10
  if (a > 10 && a < 20) return forms[2]
  if (b > 1 && b < 5) return forms[1]
  if (b === 1) return forms[0]
  return forms[2]
}
