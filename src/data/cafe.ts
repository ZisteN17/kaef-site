/**
 * Весь контент сайта «Кәеф» (в Яндекс Картах — «Каеф») в одном файле.
 * Источник фактов: карточка Яндекс Карт (https://yandex.ru/maps/org/kayef/91052974636/), сверено 2026-11-06.
 * Правка меню, отзывов и контактов — только здесь, компоненты не трогать.
 */

export type Photo = { src: string; width: number; height: number; alt: string }

export type PhotoKey =
  | 'logo'
  | 'cups-winter'
  | 'cup-takeaway'
  | 'interior-hall'
  | 'interior-banquette'
  | 'interior-greenery'
  | 'interior-wide'
  | 'interior-ceiling'
  | 'interior-slogan'
  | 'interior-counter'
  | 'counter-bar'
  | 'pastry-case'
  | 'teapot-ornament'
  | 'latte-ornament'
  | 'coffee-ornament'
  | 'tea-mochi'
  | 'facade'
  | 'facade-spring'
  | 'entrance-festive'
  | 'dish-sandwich-egg'
  | 'dish-black-pasta'
  | 'dish-tom-yam'
  | 'dish-syrniki'
  | 'dish-scramble-sausage'
  | 'dish-oatmeal-pear'
  | 'dish-breakfast-board'
  | 'dish-scramble-avocado'
  | 'dish-caesar'
  | 'dish-flatbread-breakfast'

export const photos: Record<PhotoKey, Photo> = {
  'logo': { src: '/images/kaef/logo.jpg', width: 640, height: 640, alt: 'Знак Кәеф: белые листья на зелёном фоне' },
  'cups-winter': { src: '/images/kaef/cups-winter.jpg', width: 1502, height: 2000, alt: 'Стаканы Кәеф с фирменным знаком в зимний вечер' },
  'cup-takeaway': { src: '/images/kaef/cup-takeaway.jpg', width: 1500, height: 2000, alt: 'Стакан кофе с собой с листовым узором' },
  'interior-hall': { src: '/images/kaef/interior-hall.jpg', width: 1500, height: 2000, alt: 'Зал Кәеф: изумрудные диваны и деревянные столы' },
  'interior-banquette': { src: '/images/kaef/interior-banquette.jpg', width: 1500, height: 2000, alt: 'Изумрудный диван и меню на столе в зале Кәеф' },
  'interior-greenery': { src: '/images/kaef/interior-greenery.jpg', width: 1500, height: 2000, alt: 'Зал Кәеф с подвесной зеленью и тёплым светом' },
  'interior-wide': { src: '/images/kaef/interior-wide.jpg', width: 1500, height: 2000, alt: 'Светлый зал Кәеф с зеленью под потолком и большими окнами' },
  'interior-ceiling': { src: '/images/kaef/interior-ceiling.jpg', width: 1500, height: 2000, alt: 'Терракотовый потолок и подвесные растения над стойкой Кәеф' },
  'interior-slogan': { src: '/images/kaef/interior-slogan.jpg', width: 1500, height: 2000, alt: 'Надпись на стене зала: «Место, где тебя ждут»' },
  'interior-counter': { src: '/images/kaef/interior-counter.jpg', width: 2000, height: 1500, alt: 'Барная стойка и открытые полки в Кәеф' },
  'counter-bar': { src: '/images/kaef/counter-bar.jpg', width: 1502, height: 2000, alt: 'Стойка с кассой, витриной и меню' },
  'pastry-case': { src: '/images/kaef/pastry-case.jpg', width: 1502, height: 2000, alt: 'Витрина с выпечкой и десертами' },
  'teapot-ornament': { src: '/images/kaef/teapot-ornament.jpg', width: 2000, height: 1500, alt: 'Чайник и чашка с резным орнаментом на деревянном столе' },
  'latte-ornament': { src: '/images/kaef/latte-ornament.jpg', width: 1500, height: 2000, alt: 'Латте в чашке с орнаментом и тарелка с завтраком' },
  'coffee-ornament': { src: '/images/kaef/coffee-ornament.jpg', width: 1500, height: 2000, alt: 'Чёрный кофе в чашке с резным узором' },
  'tea-mochi': { src: '/images/kaef/tea-mochi.jpg', width: 1125, height: 2000, alt: 'Чай и моти на керамической посуде' },
  'facade': { src: '/images/kaef/facade.jpg', width: 956, height: 720, alt: 'Фасад Кәеф со входом и вывеской «Гастрокофейня»' },
  'facade-spring': { src: '/images/kaef/facade-spring.jpg', width: 1125, height: 2000, alt: 'Вход в Кәеф с весенним декором' },
  'entrance-festive': { src: '/images/kaef/entrance-festive.jpg', width: 956, height: 720, alt: 'Вход в Кәеф, украшенный зелёной гирляндой' },
  'dish-sandwich-egg': { src: '/images/kaef/dish-sandwich-egg.jpg', width: 1500, height: 2000, alt: 'Бутерброд с глазуньей, овощами и сыром на тёмной тарелке' },
  'dish-black-pasta': { src: '/images/kaef/dish-black-pasta.jpg', width: 1500, height: 2000, alt: 'Чёрная паста с тигровыми креветками и лаймом' },
  'dish-tom-yam': { src: '/images/kaef/dish-tom-yam.jpg', width: 1500, height: 2000, alt: 'Суп том-ям с тигровыми креветками в рифлёной миске' },
  'dish-syrniki': { src: '/images/kaef/dish-syrniki.jpg', width: 1333, height: 2000, alt: 'Сырники со сметаной и ягодным вареньем на светлой тарелке' },
  'dish-scramble-sausage': { src: '/images/kaef/dish-scramble-sausage.jpg', width: 960, height: 1280, alt: 'Скрэмбл с сосисками, тостами и горошком' },
  'dish-oatmeal-pear': { src: '/images/kaef/dish-oatmeal-pear.jpg', width: 1500, height: 2000, alt: 'Овсяная каша с грушей на столе с чаем' },
  'dish-breakfast-board': { src: '/images/kaef/dish-breakfast-board.jpg', width: 1240, height: 1280, alt: 'Завтрак: глазунья, колбаска, салат и хлебцы на салфетке' },
  'dish-scramble-avocado': { src: '/images/kaef/dish-scramble-avocado.jpg', width: 1500, height: 2000, alt: 'Скрэмбл с авокадо, помидорами и хлебом' },
  'dish-caesar': { src: '/images/kaef/dish-caesar.jpg', width: 1500, height: 2000, alt: 'Салат цезарь с курицей' },
  'dish-flatbread-breakfast': { src: '/images/kaef/dish-flatbread-breakfast.jpg', width: 1500, height: 2000, alt: 'Завтрак с лепёшкой и яйцом' },
}

export type MenuItem = {
  id: string
  name: string
  /** цена в рублях */
  price: number
  photo: PhotoKey
}

export type Review = {
  id: string
  /** цитата целиком, без сокращений, как в Яндекс Картах */
  text: string
  author: string
  source: 'Яндекс Карты'
  /** ссылка на карточку/отзывы организации (стабильной ссылки на отдельный отзыв нет) */
  url: string
}

export type Feature = { id: string; label: string; icon: 'wifi' | 'car' | 'dog' | 'sun' | 'card' | 'coffee' | 'bag' }

const ORG_ID = '91052974636'

export const cafe = {
  name: 'Кәеф',
  /** написание в Яндекс Картах — для поиска и разметки */
  nameAlt: 'Каеф',
  nameLatin: 'Kaef',
  descriptor: 'Гастрокофейня',
  slogan: 'Место, где тебя ждут',
  city: 'Казань',
  address: { street: 'ул. Мансура Хасанова, 13', postalCode: '420073', region: 'Республика Татарстан' },
  phone: { display: '+7 905 025-99-95', e164: '+79050259995' },
  telegram: { handle: '@kaefhane', url: 'https://t.me/kaefhane' },
  /** координаты из карточки Яндекс Карт (в ссылке из брифа отличаются на ~30 м) */
  coordinates: { lat: 55.779664, lon: 49.183765 },
  orgId: ORG_ID,
  rating: { value: 4.7, ratings: 261, reviews: 169, checkedAt: '2026-11-06' },
  award: 'Хорошее место — 2026',
  averageCheck: 'от 500 ₽',
  hours: { summary: 'Ежедневно, 8:00–20:00', checkedAt: '2026-11-06' },
  /** юридическая подпись: реквизиты владельца ещё не получены */
  legalLine: '[НАИМЕНОВАНИЕ ИП/ООО — впиши] · ИНН [ИНН — впиши] · ОГРН/ОГРНИП [ОГРН — впиши] · [ЮРИДИЧЕСКИЙ АДРЕС — впиши]',
} as const

export const menu: MenuItem[] = [
  { id: 'sandwich-egg', name: 'Бутерброд с глазуньей', price: 420, photo: 'dish-sandwich-egg' },
  { id: 'black-pasta', name: 'Чёрная паста с тигровыми креветками в соусе том-ям', price: 790, photo: 'dish-black-pasta' },
  { id: 'tom-yam', name: 'Том-ям с тигровыми креветками', price: 690, photo: 'dish-tom-yam' },
  { id: 'syrniki', name: 'Сырники со сметаной и малиновым вареньем', price: 390, photo: 'dish-syrniki' },
  { id: 'scramble', name: 'Скрэмбл с сосисками из индейки', price: 390, photo: 'dish-scramble-sausage' },
  { id: 'oatmeal', name: 'Овсяная каша с яблоком и грушей', price: 290, photo: 'dish-oatmeal-pear' },
]

export const menuNote = 'Цены и наличие могут измениться — актуальное меню смотрите в Яндекс Картах'

/** подтверждено карточкой: «Подходит для» */
export const occasions: string[] = ['Завтрак', 'Встреча', 'Семейный ужин', 'День рождения', 'Кофе с собой']

/** подтверждено карточкой: удобства */
export const features: Feature[] = [
  { id: 'wifi', label: 'Wi-Fi', icon: 'wifi' },
  { id: 'parking', label: 'Парковка', icon: 'car' },
  { id: 'terrace', label: 'Летняя веранда', icon: 'sun' },
  { id: 'dogs', label: 'Можно с собакой', icon: 'dog' },
  { id: 'card', label: 'Оплата картой', icon: 'card' },
  { id: 'coffee-to-go', label: 'Кофе с собой', icon: 'coffee' },
  { id: 'takeaway', label: 'Еда навынос', icon: 'bag' },
]

const REVIEWS_URL = `https://yandex.ru/maps/org/kayef/${ORG_ID}/reviews/`

/** Только реальные отзывы из Яндекс Карт, дословно (проверено 2026-11-06). */
export const reviews: Review[] = [
  {
    id: 'alya',
    text: 'Приятная, ненавязчивая атмосфера, красивая подача блюд. Порции большие и очень вкусные, все свежее.',
    author: 'аля',
    source: 'Яндекс Карты',
    url: REVIEWS_URL,
  },
  {
    id: 'aleksandra',
    text: 'Уютная атмосфера, красивый интерьер и посуда создают прекрасное настроение с утра.',
    author: 'Александра',
    source: 'Яндекс Карты',
    url: REVIEWS_URL,
  },
]

/** Последовательность «Атмосферы»: вход → зал → стойка → керамика */
export const atmosphere: { id: string; title: string; caption: string; photo: PhotoKey }[] = [
  { id: 'entrance', title: 'Вход', caption: 'Вход и вывеска «Гастрокофейня».', photo: 'facade' },
  { id: 'hall', title: 'Зал', caption: 'Изумрудные диваны, дерево и зелень под потолком.', photo: 'interior-hall' },
  { id: 'counter', title: 'Стойка', caption: 'Кофе, выпечка в витрине и меню у кассы.', photo: 'pastry-case' },
  { id: 'ceramics', title: 'Посуда', caption: 'Керамика с резным орнаментом — чайник, чашки, тарелки.', photo: 'teapot-ornament' },
]

export const sources = [
  { label: 'Яндекс Карты', url: `https://yandex.ru/maps/org/kayef/${ORG_ID}/` },
] as const
