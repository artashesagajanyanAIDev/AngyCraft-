import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex flex-1 items-center justify-center bg-soft-gradient px-6 py-20">
        <div className="flex max-w-md flex-col items-center gap-6 text-center">
          <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-md">
            <Sparkles className="size-6" aria-hidden />
          </span>
          <p className="font-serif text-7xl font-semibold text-primary">404</p>
          <h1 className="font-serif text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            Кажется, эта страница <span className="accent">не найдена</span>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Возможно, ссылка устарела или была введена с опечаткой. Вернитесь
            на главную и продолжите изучать наши изделия и мастер-классы.
          </p>
          <Button asChild size="lg" className="mt-2 rounded-full">
            <Link href="/">
              <ArrowLeft className="size-4" />
              На главную
            </Link>
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">
            Или напишите нам:{" "}
            <a
              href={SITE_CONFIG.emailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
