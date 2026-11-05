import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SITE_CONFIG } from "@/lib/site-config";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: SITE_CONFIG.emailHref,
  },
  {
    icon: Phone,
    label: "Телефон",
    value: SITE_CONFIG.phone,
    href: SITE_CONFIG.phoneHref,
  },
  {
    icon: MapPin,
    label: "Адрес мастерской",
    value: `${SITE_CONFIG.address.addressLocality}, ${SITE_CONFIG.address.streetAddress}`,
    href: undefined,
  },
];

export function Contacts() {
  return (
    <section
      id="contacts"
      aria-labelledby="contacts-title"
      className="py-16 md:py-24"
    >
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Info */}
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            Контакты
          </span>
          <h2
            id="contacts-title"
            className="font-serif text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl md:text-5xl"
          >
            Давайте <span className="accent">создавать</span> вместе
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            Напишите нам, чтобы заказать изделие или узнать расписание
            мастер-классов.
          </p>

          <ul role="list" className="mt-2 flex flex-col gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-foreground transition-colors hover:text-primary md:text-lg"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-base font-medium text-foreground md:text-lg">
                        {item.value}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Мы в соцсетях
            </h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {SITE_CONFIG.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center rounded-full border border-border/70 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
}
