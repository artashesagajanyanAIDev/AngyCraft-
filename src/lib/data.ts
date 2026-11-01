import type {
  Product,
  MasterclassFeature,
  MasterclassPlan,
  Testimonial,
  GalleryItem,
  ContactTopic,
} from "@/types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Гипсовый набор",
    description: "паднос, свеча, ваза",
    priceFrom: "от " + 1100,
    image: "/images/product1.jpg",
    images: ["/images/product1.jpg", "/images/product1(2).jpg", "/images/product1(3).jpg",],
    alt: "Ароматный набор «Розовый рассвет» — свечи и гипсовый декор на подносе",
    tag: "hit",
  },
  {
    id: "p2",
    name: "Ракушка",
    description: "декор из гипса",
    priceFrom: "от 300",
    image: "/images/product2-1.jpg",
    images: ["/images/product2-1.jpg", "/images/product2-2.jpg", "/images/product2-3.jpg", "/images/product2-4.jpg"],
    alt: "гипсовый декор в виде ракушки",
    tag: "new",
  },
  {
    id: "p3",
    name: "Пион",
    description: "ароматическая свеча",
    priceFrom: "от 500",
    image: "/images/product-3.jpg",
    images: ["/images/product-3.jpg"],
    alt: "Ароматическая свеча «Пион» — гипсовая свеча ручной работы",
  },
  {
    id: "p4",
    name: "Ваза",
    description: "декор из гипса",
    priceFrom: "300",
    image: "/images/product-4-1.jpg",
    images: [
      "/images/product-4-1.jpg",
      "/images/product-4-2.jpg",
      "/images/product-4-3.jpg",
      "/images/product-4-4.jpg",
    ],
    alt: "гипсовая ваза ручной работы",
  },

  {
    id: "p5",
    name: "Скульптура",
    description: "Ароматическая cвеча",
    priceFrom: "от 550",
    image: "/images/product-5-1.jpg",
    images: ["/images/product-5-1.jpg", "/images/product-5-2.jpg",],
    alt: "Свечи «Тёплый вечер» — ароматические гипсовые свечи ручной работы",
    tag: "hit",
  },
  {
    id: "p6",
    name: "Сердце",
    description: "фотоподставка из гипса",
    priceFrom: "150",
    image: "/images/product-6-1.jpg",
    images: ["/images/product-6-1.jpg", "/images/product-6-2.jpg", "/images/product-6-3.jpg"],
    alt: "Фотоподставка «Сердце» — гипсовая подставка для фотографий",
  },
  {
    id: "p7",
    name: "Шкатулка",
    description: "декор из гипса",
    priceFrom: "от 300",
    image: "/images/product-7-1.jpg",
    images: ["/images/product-7-1.jpg", "/images/product-7-2.jpg", "/images/product-7-3.jpg", "/images/product-7-4.jpg"],
    alt: "Шкатулка «Нежный сад» — гипсовая шкатулка для маленьких сокровищ",
    // tag: "hit",
  },
  {
    id: "p8",
    name: "Гипсовый набор",
    description: "паднос, свеча, шкатулка",
    priceFrom: "1100",
    image: "/images/product-8-1.jpg",
    images: ["/images/product-8-1.jpg", "/images/product-8-2.jpg",],
    alt: "Ароматный набор «Тёплый вечер» — свечи и гипсовый декор на подносе",
    tag: "hit",
  },
  {
    id: "p9",
    name: "Поднос",
    description: "декор из гипса",
    priceFrom: "300",
    image: "/images/product-9-1.jpg",
    images: ["/images/product-9-1.jpg", "/images/product-9-2.jpg", "/images/product-9-3.jpg",],
    alt: "Поднос «Уют» — гипсовый декор для дома",
  },
  {
    id: "p10",
    name: "Cвеча",
    description: "ароматическая свеча",
    priceFrom: "550",
    image: "/images/product-10-1.jpg",
    images: ["/images/product-10-1.jpg", "/images/product-10-2.jpg",],
    alt: "Cвеча «Тёплый вечер» — ароматическая гипсовая свеча ручной работы",
  },
  {
    id: "teplyy-vecher-11",
    name: "3D раскраска",
    description: "гипсовая фигурка для раскрашивания",
    priceFrom: "150",
    image: "/images/product-11-1.jpg",
    images: ["/images/product-11-1.jpg", "/images/product-11-2.jpg", "/images/product-11-3.jpg", "/images/product-11-4.jpg", "/images/product-11-5.jpg",],
    alt: "3D раскраска — гипсовая фигурка для раскрашивания",
    tag: "hit",
  },
  {
    id: "p12",
    name: "Гипсовый набор",
    description: "паднос, ваза, шкатулка",
    priceFrom: "600",
    image: "/images/product-12-1.jpg",
    images: ["/images/product-12-1.jpg", "/images/product-12-2.jpg", "/images/product-12-3.jpg", "/images/product-12-4.jpg"],
    alt: "Гипсовый набор — поднос, ваза и шкатулка",
    tag: "new",
  },
];

const catalogEntries = [
  ["Свеча «Пудровая роза»", "Ароматная свеча в гипсовом стакане", 950],
  ["Подсвечник «Лепесток»", "Нежный декор для уютного вечера", 700],
  ["Ваза «Молочная дымка»", "Мини-ваза для сухоцветов", 1350],
  ["Блюдо «Тёплый свет»", "Декоративное блюдо ручной работы", 1100],
  ["Фигурка «Лунный ангел»", "Изящная фигурка из гипса", 900],
  ["Набор свечей «Облако»", "Три свечи в нежной палитре", 1450],
  ["Поднос «Пудровый»", "Компактный поднос для декора", 1600],
  ["Шкатулка «Нежный сад»", "Шкатулка для маленьких сокровищ", 1750],
  ["Композиция «Розовый сад»", "Гипсовый декор с сухоцветами", 2200],
  ["Свеча «Ванильный крем»", "Тёплый ванильный аромат", 850],
  ["Ваза «Персиковый рассвет»", "Ручная работа для светлого интерьера", 1500],
  ["Блюдо «Ангельское крыло»", "Фактурное блюдо для украшений", 1250],
  ["Набор «Домашний уют»", "Свеча, поднос и мини-декор", 2600],
  ["Фигурка «Тихая радость»", "Миниатюрная интерьерная фигурка", 780],
  ["Подсвечник «Капля»", "Лаконичный подсвечник ручной работы", 650],
  ["Набор ваз «Трио»", "Три мини-вазы для сухоцветов", 1900],
  ["Свеча «Белый хлопок»", "Свежий аромат и мягкий свет", 900],
  ["Композиция «Утро в саду»", "Декор с природными мотивами", 2350],
  ["Поднос «Розовый кварц»", "Элегантный поднос для сервировки", 1800],
  ["Шкатулка «Лепестки»", "Небольшая шкатулка с фактурным декором", 1550],
  ["Фигурки «Маленький праздник»", "Набор мини-фигурок для интерьера", 1200],
  ["Свеча «Корица и мёд»", "Уютный аромат для холодного вечера", 980],
  ["Ваза «Сливочный зефир»", "Нежная ваза для любимых цветов", 1400],
  ["Блюдо «Розовая ракушка»", "Декоративное блюдо необычной формы", 1150],
  ["Набор «Тёплый подарок»", "Готовый подарок для близкого человека", 2900],
  ["Подсвечник «Рассвет»", "Парный подсвечник ручной работы", 1050],
  ["Композиция «Нежность»", "Цветочная композиция в гипсовой вазе", 2450],
  ["Фигурка «Добрый дом»", "Символ уюта и спокойствия", 820],
  ["Свеча «Розовый чай»", "Лёгкий цветочный аромат", 920],
  ["Подарочный набор «Для тебя»", "Декор, свеча и упаковка", 3200],
] as const;



export const catalogProducts: Product[] = catalogEntries.map(
  ([name, description, priceFrom], index) => {
    // Используем реальные пути к фото из основного массива товаров.
    const sourceProduct = products[index % products.length];
    const sourceImages = (
      sourceProduct as Product & {
        images?: Array<string | { src: string; alt?: string }>;
      }
    ).images;

    const images =
      Array.isArray(sourceImages) && sourceImages.length > 0
        ? sourceImages.map((item) =>
            typeof item === "string" ? item : item.src,
          )
        : [sourceProduct.image];
    const image = images[0] ?? sourceProduct.image;

    const tag =
      index % 10 === 0
        ? ("hit" as const)
        : index % 13 === 0
          ? ("new" as const)
          : undefined;

    return {
      id: `catalog-${index + 1}`,
      name,
      description,
      priceFrom,
      image,
      images,
      alt: `${name} — ${description}`,
      ...(tag ? { tag } : {}),
    };
  },
);


export const masterclassFeatures: MasterclassFeature[] = [
  {
    icon: "Clock",
    title: "2–3 часа",
    description: "погружения в творчество",
  },
  {
    icon: "Palette",
    title: "Все материалы",
    description: "включены в стоимость",
  },
  {
    icon: "Gift",
    title: "Забираете с собой",
    description: "готовое изделие",
  },
];

export const masterclassPlans: MasterclassPlan[] = [
  {
    id: "group",
    name: "Групповой",
    price: 3000,
    description: "Занятие в небольшой компании",
  },
  {
    id: "devichnik",
    name: "Девичник",
    price: 3500,
    description: "Творческий праздник для вашей компании",
    featured: true,
    badge: "Популярно",
  },
  {
    id: "kids",
    name: "Детский",
    price: 2000,
    description: "Творческое занятие для детей",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "Maria",
    name: "Мария Б.",
    category: "Мастер-класс",
    rating: 5,
    quote:
      "Ангелина, спасибо большое за мк по гипсу Мне очень понравилось, было красиво и уютно. Атмосфера очень комфортная, ты чуткая и внимательная, была рядом на каждом этапе изготовления и все подробно объясняла, помогала, отвечала на все вопросы. Спасибо тебе за новый опыт ❤️❤️❤️",
    initials: "М",
  },
  {
    id: "Uliana",
    name: "Ульяна Б.",
    category: "Девичник",
    rating: 5,
    quote:
      "Приятно, что можно душевно посидеть девичьей компанией, пообщаться и найти новых друзей. Помимо расслабляющего, эстетичного, творческого время препровождения, ты, по сути, забираешь этот вайб с собой) шкатулочка сделанная твоими руками, целый набор, который будет напоминать о таком приятном дне и украшать твой дом, создавая атмосферу пинтереста в квартире. Это так красиво! И это ты сделала сама!",
    initials: "У",
  },
  {
    id: "Victoria",
    name: "Виктория С.",
    category: "Мастер-класс",
    rating: 5,
    quote:
      "Посетила мастер-класс и осталась очень довольна! Ангелина дала четкие инструкции и показала все тонкости работы с гипсом. Получила много полезной информации, а главное- унесла с собой готовое изделие, которое теперь украшает мой дом. Очень рекомендую тем, кто хочет освоить новое хобби или просто интересно провести время.",
    initials: "В",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/Izdeliya1.jpg",
    alt: "Декоративный поднос и ваза с цветочным рисунком и пчёлами",
    span: "tall",
  },
  {
    src: "/images/izdeliya2.jpg",
    alt: "Белая рельефная ваза и поднос с лимонами",
    span: "default",
  },
  {
    src: "/images/izdeliya3.jpg",
    alt: "Жёлтый декоративный поднос с подсолнухами и интерьерные вазы",
    span: "default",
  },
  {
    src: "/images/izdeliya4.jpg",
    alt: "Декоративный поднос с авторской надписью и белые рельефные изделия",
    span: "wide",
  },
  {
    src: "/images/izdeliya5.jpg",
    alt: "Поднос с пейзажем и зелёная декоративная ваза",
    span: "default",
  },
  {
    src: "/images/izdeliya6.jpg",
    alt: "Набор белых рельефных ваз, шкатулка и поднос",
    span: "tall",
  },
];

export const contactTopics: ContactTopic[] = [
  { value: "order", label: "Заказ изделия" },
  { value: "masterclass", label: "Запись на мастер-класс" },
  { value: "corporate", label: "Корпоративное мероприятие" },
  { value: "other", label: "Другое" },
];

/** Format a number as RUB price, e.g. 1900 -> "от 1 900 ₽" */
/** Форматирует цену: 1900 -> "от 1 900 ₽" */
export function formatPriceFrom(value: string | number): string {
  const raw = String(value).trim();

  // Если в значении нет числа, оставляем исходный текст.
  const normalized = raw.replace(/^от\s*/i, "");
  const match = normalized.match(/\d[\d\s]*/);

  if (!match) {
    return raw;
  }

  const price = Number(match[0].replace(/\s/g, ""));

  if (!Number.isFinite(price)) {
    return raw;
  }

  const formatted = new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(price);

  return `от ${formatted} ₽`;
}