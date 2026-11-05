import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Ограничение: не более 5 заявок за 60 секунд с одного IP.
// Для нескольких экземпляров приложения используйте общее хранилище, например Redis.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, { count: number; resetAt: number }>();
let lastCleanupAt = Date.now();

function rateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();

  if (now - lastCleanupAt >= RATE_LIMIT_WINDOW_MS) {
    for (const [key, entry] of ipHits) {
<<<<<<< HEAD
      if (entry.resetAt <= now) {
        ipHits.delete(key);
      }
=======
      if (entry.resetAt <= now) ipHits.delete(key);
>>>>>>> fa5a4569bd68ce1b57f461e8e3c16fc6f5abebb8
    }
    lastCleanupAt = now;
  }

  const entry = ipHits.get(ip);

  if (!entry || entry.resetAt <= now) {
    ipHits.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { ok: true };
  }

  entry.count += 1;

  if (entry.count > RATE_LIMIT_MAX) {
    return {
      ok: false,
      retryAfter: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }

  return { ok: true };
}

// Хешированный идентификатор IP; это не гарантирует полной анонимизации.
async function hashIp(ip: string): Promise<string> {
  try {
    return createHash("sha256").update(ip).digest("hex").slice(0, 24);
  } catch {
    return "unknown";
  }
}

const phoneOrEmail = z
  .string()
  .trim()
  .min(5, "Укажите телефон или email")
  .max(120, "Слишком длинное значение")
  .refine(
    (value) => {
      const isEmail = z.string().email().safeParse(value).success;
      const allowedPhoneCharacters = /^[0-9+().\s-]+$/.test(value);
      const normalizedPhone = value.replace(/[\s().-]/g, "");
      const isPhone =
        allowedPhoneCharacters && /^\+?\d{7,15}$/.test(normalizedPhone);

      return isEmail || isPhone;
    },
    { message: "Укажите корректный телефон или email" },
  );

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Имя слишком короткое" })
    .max(60, { message: "Слишком длинное имя" }),
  contact: phoneOrEmail,
  topic: z.enum(["order", "masterclass", "corporate", "other"]),
  // Сообщение необязательно. Пустая строка и отсутствие поля разрешены.
<<<<<<< HEAD
=======
  // После проверки message всегда будет строкой, поэтому БД и письмо работают как прежде.
>>>>>>> fa5a4569bd68ce1b57f461e8e3c16fc6f5abebb8
  message: z
    .string()
    .trim()
    .max(2000, { message: "Сообщение слишком длинное" })
    .optional()
    .default(""),
});

type ContactTopic = z.infer<typeof contactSchema>["topic"];

const topicLabels: Record<ContactTopic, string> = {
  order: "Заказ изделия",
  masterclass: "Запись на мастер-класс",
  corporate: "Корпоративное мероприятие",
  other: "Другое",
};

export async function POST(req: Request) {
  // Используйте forwarding-заголовки только если их задаёт доверенный reverse proxy.
  const forwardedFor = req.headers.get("x-forwarded-for") || "";
  const rawIp =
    forwardedFor.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    "unknown";

  const rl = rateLimit(rawIp);

  if (!rl.ok) {
    return NextResponse.json(
      { error: "Слишком много заявок. Попробуйте позже." },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfter ?? 60) },
      },
    );
  }

  let body: unknown;

  try {
    body = await req.json();
  } catch {
<<<<<<< HEAD
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
=======
    return NextResponse.json(
      { error: "Некорректный JSON" },
      { status: 400 },
    );
>>>>>>> fa5a4569bd68ce1b57f461e8e3c16fc6f5abebb8
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Проверьте поля формы",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const { name, contact, topic, message } = parsed.data;
  let persisted = false;

  // Сохранение в БД выполняется отдельно: письмо всё ещё может быть отправлено,
  // даже если база данных временно недоступна.
  try {
    const ipHash = await hashIp(rawIp);
    const userAgent = req.headers.get("user-agent")?.slice(0, 240) ?? null;

    await db.lead.create({
      data: {
        name,
        contact,
        topic,
        message,
        ipHash,
        userAgent,
      },
    });

    persisted = true;
  } catch (error) {
    console.error("[api/contact] Failed to persist lead:", error);
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_EMAIL || "angycraftmsk@mail.ru";

  if (!smtpUser || !smtpPass) {
    console.error("[api/contact] SMTP_USER or SMTP_PASS is not configured");

    return NextResponse.json(
      {
        error: persisted
          ? "Заявка сохранена, но отправка на email пока не настроена."
          : "Не удалось сохранить заявку, и отправка email не настроена.",
        saved: persisted,
      },
      { status: 503 },
    );
  }

  try {
    const smtpPort = Number(process.env.SMTP_PORT || 465);

    if (![465, 587].includes(smtpPort)) {
      return NextResponse.json(
        {
          error: "Неверный SMTP_PORT: используйте 465 или 587.",
          saved: persisted,
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.mail.ru",
      port: smtpPort,
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE.toLowerCase() === "true"
        : smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const replyTo = contact.includes("@") ? contact : undefined;
    const messageText = message || "Не указано";

    await transporter.sendMail({
      from: `Сайт ЭнджиКрафт <${smtpUser}>`,
      to: recipient,
      ...(replyTo ? { replyTo } : {}),
      subject: `Новая заявка: ${topicLabels[topic]}`,
      text: [
        "Новая заявка с сайта ЭнджиКрафт",
        "",
        `Имя: ${name}`,
        `Контакт: ${contact}`,
        `Тема: ${topicLabels[topic]}`,
        "",
        "Сообщение:",
        messageText,
      ].join("\n"),
    });
  } catch (error) {
    console.error("[api/contact] Failed to send email:", error);

    return NextResponse.json(
      {
        error: persisted
          ? "Заявка сохранена, но письмо не удалось отправить. Попробуйте позже."
          : "Не удалось сохранить заявку или отправить письмо. Попробуйте позже.",
        saved: persisted,
      },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      saved: persisted,
      message: persisted
        ? "Заявка принята. Мы свяжемся с вами."
        : "Заявка отправлена на email, но не сохранена в базе.",
    },
    {
      status: 201,
      headers: { "Cache-Control": "no-store" },
    },
  );
}
