# ЭнджиКрафт — сайт гипсовых изделий ручной работы

Production-ready лендинг на Next.js 16. Создан из макета `upload/index.html`.

## Стек
- Next.js 16 (App Router) + TypeScript 5
- Tailwind CSS 4 + shadcn/ui (New York)
- Prisma ORM (SQLite) для заявок формы
- react-hook-form + zod, sonner (toast), lucide-react
- Шрифты: Cormorant Garamond + Manrope (next/font)

## Запуск локально
```bash
# 1. Установить зависимости
bun install        # или npm install / pnpm install

# 2. Применить схему БД
bun run db:push    # создаст SQLite-файл из DATABASE_URL в .env
# 3. Запустить dev-сервер
bun run dev        # http://localhost:3000

# 4. Сборка для production
bun run build && bun run start
```

## Структура
```
src/
  app/            layout.tsx, page.tsx, api/contact/route.ts,
                  sitemap.ts, robots.ts, manifest.ts, icon.svg,
                  opengraph-image.tsx, not-found.tsx, globals.css
  components/
    sections/     hero, about, products, masterclass, gallery,
                  testimonials, cta-band, contacts
    site-header.tsx, site-footer.tsx, contact-form.tsx,
    section-heading.tsx, structured-data.tsx
    ui/           shadcn/ui компоненты
  lib/            site-config.ts, data.ts, db.ts, utils.ts
  types/          index.ts
  hooks/          use-mobile.ts, use-toast.ts
prisma/           schema.prisma (модель Lead)
public/
  images/         12 сгенерированных изображений
  logo.svg
```

## Возможности
- Sticky header с active-link highlighting + мобильное меню (Sheet)
- Sticky footer
- Форма обратной связи с валидацией (zod) → POST /api/contact → Prisma
- Rate-limit (5 заявок/мин/IP), хеш IP (без хранения сырого IP)
- SEO: Metadata API, sitemap.xml, robots.txt, manifest.webmanifest,
  JSON-LD (Organization, WebSite, LocalBusiness, FAQPage, BreadcrumbList),
  динамическая OG-картинка, SVG-фавикон, 404
- Полная адаптивность: 375 / 768 / 1440 px
- Server Components по умолчанию; Client только для header/form/menu

## Контакты бренда
- Email: hello@angelis.ru
- Телефон: +7 (000) 000-00-00
- Адрес: г. Москва, ул. Творчества, 1

© Студия ЭнджиКрафт. Сделано с любовью. ✦
