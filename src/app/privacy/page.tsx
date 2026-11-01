import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Политика конфиденциальности",
  description: "Политика обработки персональных данных и использования cookie ЭнджиКрафт.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main id="main" className="flex-1">
        <article className="container-site max-w-4xl py-16 md:py-24">
          <Button asChild variant="ghost" className="mb-8 rounded-full px-0 hover:bg-transparent hover:text-primary">
            <Link href="/"><ArrowLeft className="size-4" /> На главную</Link>
          </Button>
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Политика конфиденциальности</h1>
          <p className="mt-4 text-sm text-muted-foreground">Редакция от 30 сентября 2026 года</p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/85">
            <section id="data-processing">
              <h2 className="font-serif text-2xl font-semibold">1. Общие положения</h2>
              <p className="mt-3">Настоящая политика описывает, какие данные может получать сайт ЭнджиКрафт, для каких целей они используются и как посетитель может управлять согласием.</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl font-semibold">2. Какие данные обрабатываются</h2>
              <p className="mt-3">При отправке формы обратной связи могут обрабатываться имя, телефон или email, выбранная тема обращения и текст сообщения. Эти данные используются только для ответа на обращение и связи по заказу или мастер-классу.</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl font-semibold">3. Cookie</h2>
              <p className="mt-3">Сайт использует необходимые cookie для работы отдельных функций интерфейса, включая сохранение настроек. Аналитические и рекламные cookie не используются. Выбор в баннере сохраняется в браузере и может быть удалён через настройки браузера.</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl font-semibold">4. Права пользователя</h2>
              <p className="mt-3">Пользователь вправе запросить сведения об обработке своих данных, потребовать их уточнения или удаления, а также отозвать согласие, обратившись по адресу <a className="text-primary underline-offset-4 hover:underline" href="mailto:angycraftmsk@mail.ru">angycraftmsk@mail.ru</a>.</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl font-semibold">5. Контакты оператора</h2>
              <p className="mt-3">По вопросам обработки персональных данных: <a className="text-primary underline-offset-4 hover:underline" href="mailto:angycraftmsk@mail.ru">angycraftmsk@mail.ru</a>.</p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
