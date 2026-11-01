import Link from "next/link";
import { Sparkles } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/40">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/#hero"
              className="inline-flex items-center gap-2"
              aria-label="ЭнджиКрафт — на главную"
            >
              <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="size-4" />
              </span>
              <span className="font-serif text-xl font-semibold tracking-wide">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.tagline}. Делаем нежные гипсовые изделия с любовью
              с {SITE_CONFIG.foundingDate} года.
            </p>
          </div>

          {/* Nav */}
          <nav
            aria-label="Навигация в подвале"
            className="md:col-span-4 md:justify-self-center"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Разделы
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-sm text-foreground/75 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/catalog"
                  className="text-sm text-foreground/75 transition-colors hover:text-primary"
                >
                  Полный каталог
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contacts */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Контакты
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.emailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/75 transition-colors hover:text-primary"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="text-foreground/75 transition-colors hover:text-primary"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="text-foreground/75">
                {SITE_CONFIG.address.addressLocality},{" "}
                {SITE_CONFIG.address.streetAddress}
              </li>
            </ul>
            <ul className="mt-4 flex flex-wrap gap-3">
              {SITE_CONFIG.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-foreground/75 transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.legalName}. Сделано с
            любовью. ✦
          </p>
          <p>Гипс · Ручная работа · Творчество</p>
        </div>
        <nav aria-label="Документы сайта" className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary">Политика конфиденциальности</Link>
          <Link href="/personal-data-consent" className="hover:text-primary">Согласие на обработку данных</Link>
          <Link href="/cookie-consent" className="hover:text-primary">Согласие на cookie</Link>
          <Link href="/privacy#data-processing" className="hover:text-primary">Обработка персональных данных</Link>
          <Link href="/offer" className="hover:text-primary">Публичная оферта</Link>
          <Link href="/marketing-consent" className="hover:text-primary">Согласие на рассылку</Link>
          <Link href="/user-agreement" className="hover:text-primary">Пользовательское соглашение</Link>
        </nav>
      </div>
    </footer>
  );
}
