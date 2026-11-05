/**
 * Central site configuration — used across metadata, SEO, structured data,
 * header/footer, contacts. Single source of truth.
 */
export const SITE_CONFIG = {
  name: "ЭнджиКрафт",
  legalName: "Студия ЭнджиКрафт",
  tagline: "Гипсовые изделия и мастер-классы ручной работы",
  url: "https://angelis.ru",
  locale: "ru-RU",
  description:
    "ЭнджиКрафт — авторские гипсовые изделия ручной работы и творческие мастер-классы. Свечи, декор, фигурки и подарочные наборы в нежной розово-белой палитре.",
  foundingDate: "2021",
  email: "angycraftmsk@mail.ru",
  emailHref: "https://e.mail.ru/compose/?to=angycraftmsk%40mail.ru",
  phone: "+7 (928) 275-33-56",
  phoneHref: "tel:+79282753356",
  address: {
    streetAddress: "м. Верхные Лихоборы",
    addressLocality: "Москва",
    addressRegion: "Москва",
    postalCode: "127474",
    addressCountry: "RU",
  },
  geo: {
    latitude: 55.7558,
    longitude: 37.6173,
  },
  socials: [
    { label: "VK", href: "https://vk.ru/angycraftmsk" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О нас", href: "#about" },
  { label: "Каталог", href: "#products" },
  { label: "Мастер-классы", href: "#masterclass" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
] as const;
