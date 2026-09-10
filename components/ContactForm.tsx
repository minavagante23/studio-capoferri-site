"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";

type FieldErrors = Partial<Record<"name" | "email" | "message" | "privacy", string>>;

type Props = {
  formId?: string;
  defaultCity?: string;
  defaultSubject?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  successMessage?: string;
};

export function ContactForm({
  formId,
  defaultCity = "",
  defaultSubject = "",
  messagePlaceholder,
  submitLabel,
  successMessage,
}: Props) {
  const locale = useLocale();
  const copy = chromeCopy[locale].contactForm;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [city, setCity] = useState(defaultCity);
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const errors: FieldErrors = useMemo(() => {
    const e: FieldErrors = {};
    if (touched.name && name.trim().length < 2) e.name = copy.errors.name;
    if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = copy.errors.email;
    if (touched.message && message.trim().length < 10) e.message = copy.errors.message;
    if (touched.privacy && !privacy) e.privacy = copy.errors.privacy;
    return e;
  }, [copy.errors.email, copy.errors.message, copy.errors.name, copy.errors.privacy, email, message, name, privacy, touched]);

  const valid =
    name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    message.trim().length >= 10 &&
    privacy;

  const onBlur = (field: string) => () => setTouched((t) => ({ ...t, [field]: true }));

  const onSubmit = useCallback(
    async (ev: React.FormEvent) => {
      ev.preventDefault();
      setTouched({ name: true, email: true, message: true, privacy: true });
      if (!valid) return;

      setStatus("submitting");
      try {
        const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            _replyto: email,
            email,
            subject: subject || copy.noSubject,
            city: city || "",
            message,
            locale,
            language: locale === "en" ? "English" : "Italian",
          }),
        });
        if (res.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setSubject(defaultSubject);
          setCity(defaultCity);
          setMessage("");
          setPrivacy(false);
          setTouched({});
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    },
    [city, copy.noSubject, defaultCity, defaultSubject, email, locale, message, name, subject, valid]
  );

  if (status === "success") {
    return (
      <p className="w-full rounded-lg border border-[#2a3f54]/20 bg-white/60 px-4 py-6 text-[#2a3f54]" role="status">
        {successMessage ?? copy.success}
      </p>
    );
  }

  return (
    <form id={formId} onSubmit={onSubmit} className="grid w-full gap-3 sm:gap-4 md:grid-cols-2" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.name} <span className="text-red-700">*</span>
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={onBlur("name")}
          className={ui.inputField}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
        />
        {errors.name ? <p id="err-name" className="mt-1 text-sm text-red-700">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.email} <span className="text-red-700">*</span>
        </label>
        <input
          id="email"
          name="_replyto"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={onBlur("email")}
          className={ui.inputField}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email ? <p id="err-email" className="mt-1 text-sm text-red-700">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.subject}
        </label>
        <input id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={ui.inputField} />
      </div>

      <div>
        <label htmlFor="city" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.city}
        </label>
        <input
          id="city"
          name="city"
          placeholder={copy.cityPlaceholder}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={ui.inputField}
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.message} <span className="text-red-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={onBlur("message")}
          placeholder={messagePlaceholder}
          className={ui.inputField}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-msg" : undefined}
        />
        {errors.message ? <p id="err-msg" className="mt-1 text-sm text-red-700">{errors.message}</p> : null}
      </div>

      <div className="flex items-start gap-3 md:col-span-2">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          onBlur={onBlur("privacy")}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#2a3f54] sm:mt-1"
          aria-invalid={!!errors.privacy}
          aria-describedby={errors.privacy ? "err-privacy" : undefined}
        />
        <label htmlFor="privacy" className="text-[0.82rem] text-[#444] sm:text-sm">
          {copy.privacyLead}{" "}
          <Link href={localizeHref("/privacy-policy", locale)} title={linkTitles.privacy} className="link-accent">
            {copy.privacyLink}
          </Link>
          . <span className="text-red-700">*</span>
        </label>
      </div>
      {errors.privacy ? <p id="err-privacy" className="text-sm text-red-700 md:col-span-2">{errors.privacy}</p> : null}

      {status === "error" ? (
        <p className="text-sm text-red-700 md:col-span-2" role="alert">
          {copy.error} {site.email}.
        </p>
      ) : null}

      <button type="submit" disabled={status === "submitting"} className={`${ui.btnPrimary} w-full sm:w-fit md:col-span-2`}>
        {status === "submitting" ? copy.submitting : (submitLabel ?? copy.submit)}
      </button>
    </form>
  );
}
