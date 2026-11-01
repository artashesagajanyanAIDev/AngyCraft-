# ЭнджиКрафт Landing Site — Worklog

---
Task ID: 2
Agent: general-purpose (image-generation)
Task: Generate all 12 site images for the ЭнджиКрафт landing page

Work Log:
- Read worklog (empty at start).
- Verified `z-ai` CLI available at /usr/local/bin/z-ai.
- Generated 12 images sequentially via `z-ai image` CLI into /home/z/my-project/public/images/.
- Retried `gallery-tall.jpg` after API rejected `720x1440` (720 not a multiple of 32); used `768x1344` instead.

Stage Summary:
- 12 images produced in /home/z/my-project/public/images/ (hero-main, hero-sub, about, masterclass-main, masterclass-sub, product1-6, gallery-tall), all .jpg, all non-zero.
- gallery-tall.jpg is 768x1344 (slightly less extreme aspect than requested 720x1440) — still tall/vertical, fits the gallery `row-span-2` layout.
- All files are valid JPEG bytes; served correctly by Next.js static handler.

---
Task ID: 1+3+4+5+6+7
Agent: main (Z.ai Code)
Task: Build the complete ЭнджиКрафт Next.js landing site from the uploaded index.html mockup — design system, components, page assembly, contact API + Prisma, SEO, and end-to-end verification.

Work Log:
- Read upload/index.html (Russian single-page landing for "ЭнджиКрафт" / "ANGICRAFT" handmade gypsum brand, soft pink/cream palette).
- Audited existing project scaffold: Next.js 16, Tailwind v4, shadcn/ui (new-york), Prisma/SQLite, lucide-react, react-hook-form, zod, sonner, next-themes. Confirmed `bun run dev` running on :3000.
- Defined design system in src/app/globals.css: warm ivory background, dusty-rose primary, blush accent (OKLCH), Cormorant Garamond + Manrope fonts, `.container-site`, `.bg-soft-gradient`, `.bg-rose-veil`, `.hero-wave`, soft scrollbar, sticky-header scroll-margin.
- Rewrote src/app/layout.tsx: ru lang, Cormorant+Manrope via next/font (latin+cyrillic subsets), full Metadata (title template, description, keywords, canonical, OpenGraph w/ /opengraph-image, Twitter card, robots, manifest), Viewport themeColor, skip-link, StructuredData + Toaster (sonner).
- Created src/lib/site-config.ts (single source of truth: name, url, contacts, address, geo, socials, NAV_LINKS).
- Created src/types/index.ts (Product, MasterclassFeature/Plan, Testimonial, GalleryItem, ContactTopic, ContactPayload).
- Created src/lib/data.ts (6 products, 3 masterclass features, 2 plans, 3 testimonials, 6 gallery items w/ tall/wide spans, 4 contact topics, formatPriceFrom).
- Built src/components/structured-data.tsx — JSON-LD: Organization, WebSite (w/ SearchAction), LocalBusiness (address, geo, openingHours), FAQPage (4 Q&As), BreadcrumbList.
- Built components:
  - site-header.tsx (client): sticky w/ scroll shadow, IntersectionObserver active-link highlighting, desktop nav, mobile Sheet menu (SheetTitle+SheetDescription sr-only for a11y), Sparkles logo.
  - site-footer.tsx (server): brand, nav grid, contacts, socials, sticky-to-bottom (mt-auto).
  - section-heading.tsx: reusable eyebrow chip + serif title + subtitle.
  - sections/hero.tsx: eyebrow chip, serif H1 w/ accent, 2 CTAs, 3-stat dl, 2-image collage grid w/ rounded shapes, "Сделано с любовью" badge, decorative blurs, wave divider.
  - sections/about.tsx: image w/ "с 2021 года" chip, story copy, advantages list w/ check icons.
  - sections/products.tsx: 6 product cards (Badge for Хит/Новинка, hover lift, price + Заказать button, lazy next/image).
  - sections/masterclass.tsx: features (Clock/Palette/Gift icons), 2 pricing plans (featured badge), 2-image collage, CTA.
  - sections/gallery.tsx: masonry-style grid w/ tall (row-span-2) + wide (lg:col-span-2) spans.
  - sections/testimonials.tsx: 3 figures w/ star ratings, Quote icon, avatar initials.
  - sections/cta-band.tsx: rose-veil gradient band w/ large CTA.
  - sections/contacts.tsx: info (Mail/Phone/MapPin) + socials + ContactForm.
  - contact-form.tsx (client): react-hook-form + zod (name/contact phone-or-email/topic/message), Select topic, sonner toast on success, success state w/ "отправить ещё одну", loading spinner, a11y aria-invalid + role=alert.
- Assembled src/app/page.tsx (sticky-header + main flex-1 + sticky-footer layout).
- Backend: prisma/schema.prisma — added Lead model (name, contact, topic, message, ipHash, userAgent, handled, createdAt, indexes). Pushed via `bun run db:push` + generated client.
- Built src/app/api/contact/route.ts (POST): in-memory rate limit (5/min/IP), SHA-256 IP hash (no raw IP stored), zod validation (ru messages), Prisma persist (best-effort, never fails user), 429/422/201 responses, force-dynamic.
- SEO files:
  - src/app/icon.svg — brand "A" monogram on rose gradient.
  - src/app/robots.ts — allow /, disallow /api/, sitemap + host.
  - src/app/sitemap.ts — single URL, weekly, priority 1.
  - src/app/manifest.ts — PWA manifest w/ theme_color #c97d8b, icon.svg.
  - src/app/opengraph-image.tsx — next/og ImageResponse 1200x630 PNG (rewritten satori-safe: every multi-child div has explicit display:flex).
  - src/app/not-found.tsx — branded 404 w/ 404, Sparkles, CTA.
- Removed conflicting public/robots.txt (now served dynamically by app/robots.ts).
- Verification (agent-browser + z-ai vision VLM):
  - Page renders clean, title correct, no runtime errors.
  - Accessibility tree: semantic landmarks (header/nav/main/section/footer), single H1, proper H2/H3 hierarchy, form labels + aria-invalid + role=alert.
  - Mobile menu (Sheet) opens/closes, keyboard-accessible, has SheetTitle+Description.
  - Contact form: filled + submitted → 201 created → "Спасибо!" success state → lead persisted to DB (verified via Prisma query: name, contact, topic, message, ipHash, userAgent, handled=false, createdAt).
  - SEO endpoints: /sitemap.xml 200 (application/xml), /robots.txt 200 (correct content), /manifest.webmanifest 200 (application/manifest+json), /opengraph-image 200 (image/png 1200x630 RGBA 242KB), /icon.svg 200 (image/svg+xml, auto-detected in head), /nonexistent → 404 page.
  - Responsive: 375 / 768 / 1440 — no horizontal scroll (scrollWidth === innerWidth at 375), mobile 1-col products, hero readable, footer sticky.
  - Lint: clean (eslint . — no warnings/errors).
  - Dev log: all 200s, no errors after fixes.
  - VLM desktop review: "production-ready design", all sections praised, no overflow, footer visible & well-structured.
  - VLM mobile review: no horizontal scroll, hero readable, burger visible, products 1-column, form usable, no bugs.
- Bugs fixed during verification:
  1. Missing SheetDescription → added sr-only description (Radix DialogContent a11y warning cleared).
  2. about.jpg LCP warning → set loading="eager" (near-fold on desktop).
  3. OG image `failed to pipe response` (Satori "Expected <div> display:flex for multi-child") → rewrote every multi-child div with explicit display:flex.
  4. /icon 404 (metadata referenced `/icon` w/o extension) → removed manual `icons` config, let Next.js auto-detect src/app/icon.svg → served at /icon.svg with auto `<link rel="icon">`.

Stage Summary:
- Single-page (route `/`) production-ready Next.js 16 landing site for ЭнджиКрафт, Russian content, soft pink/cream design system.
- Architecture: app/ (layout, page, sitemap, robots, manifest, icon, opengraph-image, not-found, api/contact), components/ (site-header, site-footer, section-heading, contact-form, structured-data, ui/*), components/sections/ (hero, about, products, masterclass, gallery, testimonials, cta-band, contacts), lib/ (site-config, data, db, utils), types/, prisma/.
- Server Components for all static sections; Client Components only for header (IntersectionObserver), contact-form (form state + fetch), and the Sheet-based mobile menu.
- SEO: full Metadata API (title template, canonical, OG, Twitter, robots), dynamic sitemap/robots/manifest, auto-detected SVG favicon, dynamic OG image, JSON-LD (Organization + WebSite + LocalBusiness + FAQPage + BreadcrumbList), 404 page, ru-RU lang.
- Performance: next/image everywhere with explicit sizes, priority on hero-main, eager on about (near-fold), lazy on the rest; Cormorant+Manrope via next/font with display:swap; single-flight CSS.
- Backend: POST /api/contact with rate limit + zod + Prisma Lead persistence + IP hashing. Verified end-to-end (DB row created).
- Sticky footer (mt-auto on flex-col root), sticky header, smooth-scroll anchor nav, active-section highlighting, mobile Sheet menu, toast notifications, success state.
- All ESLint clean, dev log clean, no runtime errors, no horizontal scroll at 375/768/1440, VLM-verified on desktop & mobile.
