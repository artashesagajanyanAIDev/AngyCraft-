
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { contactTopics } from "@/lib/data";

const phoneOrEmailSchema = z
  .string()
  .min(5, { message: "Укажите телефон или email" })
  .refine(
    (value) =>
      /@/.test(value) || /[0-9()+\-\s]{7,}/.test(value),
    {
      message: "Похоже на опечатку — укажите телефон или email",
    }
  );

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя слишком короткое" })
    .max(60, { message: "Слишком длинное имя" }),

  contact: phoneOrEmailSchema,

  topic: z.string().min(1, {
    message: "Выберите тему",
  }),

  // Сообщение теперь необязательное.
  // Пустая строка разрешена, ограничение в 2000 символов сохранено.
  message: z
    .string()
    .max(2000, {
      message: "Сообщение слишком длинное",
    }),

  offerConsent: z.literal(true, {
    error: () => ({
      message: "Нужно принять публичную оферту",
    }),
  }),

  personalDataConsent: z.literal(true, {
    error: () => ({
      message: "Нужно дать согласие на обработку данных",
    }),
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      contact: "",
      topic: "order",
      message: "",
      offerConsent: true,
      personalDataConsent: true,
    },
  });

  const topicValue = watch("topic");

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(
          err.error || "Не удалось отправить заявку"
        );
      }

      toast.success("Заявка отправлена!", {
        description:
          "Мы свяжемся с вами в ближайшее время.",
      });

      reset();
      setSubmitted(true);
    } catch (error) {
      toast.error("Не удалось отправить", {
        description:
          error instanceof Error
            ? error.message
            : "Попробуйте ещё раз позже.",
      });
    }
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-primary/[0.04] p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle2
            className="size-6"
            aria-hidden
          />
        </span>

        <h3 className="font-serif text-2xl font-semibold">
          Спасибо!
        </h3>

        <p className="max-w-sm text-sm text-muted-foreground text-pretty">
          Ваша заявка отправлена. Мы ответим в течение
          рабочего дня. По срочным вопросам — звоните или напишите напрямую.
        </p>

        <Button
          type="button"
          variant="outline"
          className="mt-1 rounded-full"
          onClick={() => setSubmitted(false)}
        >
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Форма обратной связи"
      className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-8"
    >
      <h3 className="font-serif text-2xl font-semibold">
        Напишите нам
      </h3>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Ваше имя</Label>

        <Input
          id="name"
          autoComplete="name"
          placeholder="Как к вам обращаться?"
          aria-invalid={!!errors.name}
          aria-describedby={
            errors.name ? "name-err" : undefined
          }
          {...register("name")}
        />

        {errors.name && (
          <p
            id="name-err"
            role="alert"
            className="text-xs text-destructive"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact">Телефон или email</Label>

        <Input
          id="contact"
          autoComplete="email"
          inputMode="email"
          placeholder="Для связи с вами"
          aria-invalid={!!errors.contact}
          aria-describedby={
            errors.contact ? "contact-err" : undefined
          }
          {...register("contact")}
        />

        {errors.contact && (
          <p
            id="contact-err"
            role="alert"
            className="text-xs text-destructive"
          >
            {errors.contact.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="topic">Тема</Label>

        <Select
          value={topicValue}
          onValueChange={(value) =>
            setValue("topic", value, {
              shouldValidate: true,
              shouldDirty: true,
            })
          }
        >
          <SelectTrigger
            id="topic"
            className="w-full"
            aria-label="Тема обращения"
          >
            <SelectValue placeholder="Выберите тему" />
          </SelectTrigger>

          <SelectContent>
            {contactTopics.map((topic) => (
              <SelectItem
                key={topic.value}
                value={topic.value}
              >
                {topic.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          Сообщение (необязательно)
        </Label>

        <Textarea
          id="message"
          rows={4}
          placeholder="Расскажите, что вас интересует (необязательно)"
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "message-err" : undefined
          }
          {...register("message")}
        />

        {errors.message && (
          <p
            id="message-err"
            role="alert"
            className="text-xs text-destructive"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 text-xs leading-relaxed text-muted-foreground">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 accent-primary"
            {...register("offerConsent")}
          />

          <span>
            Я ознакомлен(а) и согласен(на) с{" "}
            <Link
              className="text-primary underline-offset-4 hover:underline"
              href="/offer"
            >
              Публичной офертой
            </Link>
            .
            {errors.offerConsent && (
              <span className="mt-1 block text-destructive">
                {errors.offerConsent.message}
              </span>
            )}
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 accent-primary"
            {...register("personalDataConsent")}
          />

          <span>
            Я ознакомлен(а) с{" "}
            <Link
              className="text-primary underline-offset-4 hover:underline"
              href="/privacy"
            >
              Политикой обработки персональных данных
            </Link>{" "}
            и даю согласие на обработку.
            {errors.personalDataConsent && (
              <span className="mt-1 block text-destructive">
                {errors.personalDataConsent.message}
              </span>
            )}
          </span>
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full py-6 text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2
              className="size-4 animate-spin"
              aria-hidden
            />
            Отправляем…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden />
            Отправить заявку
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Нажимая «Отправить заявку», вы соглашаетесь на
        обработку ваших контактных данных для связи по
        вашему обращению. Мы не передаём данные третьим лицам.
      </p>
    </form>
  );
}
