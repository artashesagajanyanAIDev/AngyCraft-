import { SITE_CONFIG } from "@/lib/site-config";

/**
 * JSON-LD structured data for the ЭнджиКрафт landing page.
 * Includes Organization, WebSite, LocalBusiness, and FAQPage schemas —
 * only the types that genuinely match the site's content.
 */
export function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: "ANGICRAFT",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    foundingDate: SITE_CONFIG.foundingDate,
    slogan: SITE_CONFIG.tagline,
    sameAs: SITE_CONFIG.socials.map((s) => s.href),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    inLanguage: "ru-RU",
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/opengraph-image`,
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: SITE_CONFIG.socials.map((s) => s.href),
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что входит в стоимость мастер-класса по гипсу?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В стоимость мастер-класса ЭнджиКрафт входят все необходимые материалы и инструменты: натуральный гипс премиум-качества, формы, декор и упаковка. Вы забираете готовое изделие с собой. Занятие длится 2–3 часа.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли заказать индивидуальный мастер-класс?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, мы проводим индивидуальные мастер-классы 1-на-1 с мастером за 2 500 ₽, а также групповые занятия до 6 человек за 1 800 ₽. Возможны корпоративные мероприятия для команд.",
        },
      },
      {
        "@type": "Question",
        name: "Как заказать гипсовое изделие?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оставьте заявку через форму на сайте, напишите на email hello@angelis.ru или позвоните по телефону. Мы обсудим детали, материалы и сроки изготовления. Цены на готовые изделия — от 800 ₽.",
        },
      },
      {
        "@type": "Question",
        name: "Где находится мастерская ЭнджиКрафт?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мастерская ЭнджиКрафт находится в Москве, ул. Творчества, 1. Работаем с 2021 года. Точное время визита согласуйте заранее через контакты на сайте.",
        },
      },
    ],
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: SITE_CONFIG.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
