"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { trackEvent } from "@/lib/analytics";
import {
  carpenterieCopy,
  carpenterieDownloadHref,
} from "@/lib/carpenterie-copy";
import { localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";

type FieldErrors = Partial<Record<"name" | "email" | "message" | "privacy", string>>;

const SAMPLES_ZIP_NAME = "studio-capoferri-esempi-elaborati-officina.zip";
/** After auto-download, wait before allowing a manual re-download. */
const DOWNLOAD_COOLDOWN_MS = 20_000;

function triggerSamplesDownload() {
  if (!carpenterieDownloadHref || typeof document === "undefined") return;
  const a = document.createElement("a");
  a.href = carpenterieDownloadHref;
  a.setAttribute("download", SAMPLES_ZIP_NAME);
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function CarpenterieRfqForm() {
  const locale = useLocale();
  const copy = carpenterieCopy[locale].form;
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [scopes, setScopes] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [downloadReady, setDownloadReady] = useState(true);
  const cooldownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const armDownloadCooldown = useCallback(() => {
    setDownloadReady(false);
    if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
    cooldownTimer.current = setTimeout(() => setDownloadReady(true), DOWNLOAD_COOLDOWN_MS);
  }, []);

  useEffect(
    () => () => {
      if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
    },
    [],
  );

  const runSamplesDownload = useCallback(
    (linkText: string) => {
      triggerSamplesDownload();
      trackEvent("file_download", {
        file_name: SAMPLES_ZIP_NAME,
        link_text: linkText,
      });
      armDownloadCooldown();
    },
    [armDownloadCooldown],
  );

  const toggle = (list: string[], id: string, set: (v: string[]) => void) => {
    set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  const errors: FieldErrors = useMemo(() => {
    const e: FieldErrors = {};
    if (touched.name && name.trim().length < 2) e.name = copy.errors.name;
    if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = copy.errors.email;
    if (touched.message && message.trim().length < 20) e.message = copy.errors.message;
    if (touched.privacy && !privacy) e.privacy = copy.errors.privacy;
    return e;
  }, [copy.errors, email, message, name, privacy, touched]);

  const valid =
    name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    message.trim().length >= 20 &&
    privacy;

  const onBlur = (field: string) => () => setTouched((t) => ({ ...t, [field]: true }));

  const onSubmit = useCallback(
    async (ev: React.FormEvent) => {
      ev.preventDefault();
      setTouched({ name: true, email: true, message: true, privacy: true });
      if (!valid) return;

      setStatus("submitting");
      try {
        const scopeLabels = carpenterieCopy[locale].form.scopes
          .filter((s) => scopes.includes(s.id))
          .map((s) => s.label)
          .join(", ");

        const res = await fetch(`https://formspree.io/f/${site.formspreeCarpenterieId}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            _subject: `[Carpenteria / preventivo] ${company || name}`,
            name,
            company,
            _replyto: email,
            email,
            phone,
            location,
            scope: scopeLabels || "(non specificato)",
            message,
            locale,
            language: locale === "en" ? "English" : "Italian",
            routing: "Chiara Rebessi — richieste carpenterie / elaborati officina",
            ...(carpenterieDownloadHref
              ? { samples_pack_url: `${site.url}${carpenterieDownloadHref}` }
              : {}),
          }),
        });
        if (res.ok) {
          trackEvent("generate_lead", {
            method: "carpenterie_rfq",
            locale,
            form_id: "carpenterie-rfq",
          });
          if (carpenterieDownloadHref) {
            runSamplesDownload(copy.successDownload);
          }
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    },
    [
      company,
      copy.successDownload,
      email,
      locale,
      location,
      message,
      name,
      phone,
      runSamplesDownload,
      scopes,
      valid,
    ],
  );

  if (status === "success") {
    return (
      <div
        className="w-full rounded-lg border border-[#1c1e21]/20 bg-white/60 px-4 py-6 text-[#1c1e21]"
        role="status"
      >
        <p className="font-display text-lg font-medium tracking-tight">{copy.successTitle}</p>
        <p className={`mt-2 ${ui.bodyMuted}`}>{copy.successBody}</p>
        {carpenterieDownloadHref ? (
          <p className="mt-4">
            <button
              type="button"
              disabled={!downloadReady}
              className={`${ui.btnPrimary} disabled:pointer-events-none disabled:opacity-50`}
              onClick={() => runSamplesDownload(copy.successDownload)}
            >
              {downloadReady ? copy.successDownload : copy.successDownloadStarted}
            </button>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      id="rfq-carpenterie"
      onSubmit={onSubmit}
      className="grid w-full gap-3 sm:gap-4 md:grid-cols-2"
      noValidate
    >
      <div>
        <label htmlFor="rfq-company" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.company}
        </label>
        <input
          id="rfq-company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={ui.inputField}
          autoComplete="organization"
        />
      </div>
      <div>
        <label htmlFor="rfq-name" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.name} <span className="text-red-700">*</span>
        </label>
        <input
          id="rfq-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={onBlur("name")}
          className={ui.inputField}
          autoComplete="name"
          aria-invalid={!!errors.name}
        />
        {errors.name ? <p className="mt-1 text-sm text-red-700">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="rfq-email" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.email} <span className="text-red-700">*</span>
        </label>
        <input
          id="rfq-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={onBlur("email")}
          className={ui.inputField}
          autoComplete="email"
          aria-invalid={!!errors.email}
        />
        {errors.email ? <p className="mt-1 text-sm text-red-700">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="rfq-phone" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.phone}
        </label>
        <input
          id="rfq-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={ui.inputField}
          autoComplete="tel"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="rfq-location" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.location}
        </label>
        <input
          id="rfq-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={ui.inputField}
        />
      </div>

      <fieldset className="md:col-span-2">
        <legend className="mb-2 text-sm font-medium text-[#333]">{copy.scope}</legend>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {copy.scopes.map((s) => (
            <label key={s.id} className="inline-flex items-center gap-2 text-sm text-[#444]">
              <input
                type="checkbox"
                checked={scopes.includes(s.id)}
                onChange={() => toggle(scopes, s.id, setScopes)}
                className="h-4 w-4 accent-[#b01010]"
              />
              {s.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="md:col-span-2">
        <label htmlFor="rfq-message" className="mb-1 block text-sm font-medium text-[#333]">
          {copy.message} <span className="text-red-700">*</span>
        </label>
        <textarea
          id="rfq-message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={onBlur("message")}
          placeholder={copy.messagePlaceholder}
          className={ui.inputField}
          aria-invalid={!!errors.message}
        />
        {errors.message ? <p className="mt-1 text-sm text-red-700">{errors.message}</p> : null}
      </div>

      <div className="flex items-start gap-3 md:col-span-2">
        <input
          id="rfq-privacy"
          type="checkbox"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          onBlur={onBlur("privacy")}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#b01010]"
        />
        <label htmlFor="rfq-privacy" className="text-[0.82rem] text-[#444] sm:text-sm">
          {copy.privacyLead}{" "}
          <Link href={localizeHref("/privacy-policy", locale)} title={linkTitles.privacy} className="link-accent">
            {copy.privacyLink}
          </Link>
          . <span className="text-red-700">*</span>
        </label>
      </div>
      {errors.privacy ? <p className="text-sm text-red-700 md:col-span-2">{errors.privacy}</p> : null}

      {status === "error" ? (
        <p className="text-sm text-red-700 md:col-span-2" role="alert">
          {copy.error} {site.email}.
        </p>
      ) : null}

      <button type="submit" disabled={status === "submitting"} className={`${ui.btnPrimary} w-full sm:w-fit md:col-span-2`}>
        {status === "submitting" ? copy.submitting : copy.submit}
      </button>
    </form>
  );
}
