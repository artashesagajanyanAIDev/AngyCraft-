"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "angycraft_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(CONSENT_KEY) === null);
  }, []);

  const saveConsent = (value: "all" | "necessary") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Уведомление об использовании cookie"
      className="fixed inset-x-4 bottom-4 z-[60] rounded-2xl border border-border/70 bg-background/95 p-5 shadow-[0_20px_60px_-20px_oklch(0.27_0.028_350/0.3)] backdrop-blur-md md:inset-x-auto md:right-6 md:max-w-xl"
    >
      <h2 className="font-serif text-xl font-semibold">Мы используем cookie</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Cookie нужны для работы сайта и сохранения настроек. Сейчас на сайте
        используются только необходимые cookie; рекламные и аналитические
        cookie не подключены.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Подробнее — в <Link className="text-primary underline-offset-4 hover:underline" href="/privacy">Политике конфиденциальности</Link>.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button variant="outline" className="rounded-full" onClick={() => saveConsent("necessary")}>
          Только необходимые
        </Button>
        <Button className="rounded-full" onClick={() => saveConsent("all")}>
          Принять
        </Button>
      </div>
    </aside>
  );
}
