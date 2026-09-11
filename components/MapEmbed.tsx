"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { CookieChoice } from "./CookieBanner";

const STORAGE_KEY = "cookie_consent_studio_capoferri";

function readConsent(): CookieChoice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "accepted" || v === "rejected") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function MapEmbed() {
  const locale = useLocale();
  const isEn = locale === "en";
  const [consent, setConsent] = useState<CookieChoice | null>(null);

  useEffect(() => {
    setConsent(readConsent());
    const onCustom = (e: Event) => {
      const ce = e as CustomEvent<CookieChoice>;
      setConsent(ce.detail);
    };
    window.addEventListener("cookie-consent", onCustom as EventListener);
    return () => window.removeEventListener("cookie-consent", onCustom as EventListener);
  }, []);

  const src =
    "https://maps.google.com/maps?q=Via%20Piave%2035,%20Adro%20BS&t=&z=13&ie=UTF8&iwloc=&output=embed";

  if (consent !== "accepted") {
    return (
      <div
        className="flex min-h-[220px] items-center justify-center rounded-sm border border-[#2a3f54]/10 bg-gradient-to-br from-[#f4f7fa] to-[#eef3f8] px-4 text-center text-[0.82rem] text-[#4b5a69] sm:min-h-[300px] sm:px-5 sm:text-sm md:min-h-[400px]"
        role="region"
        aria-label={isEn ? "Map disabled until cookie consent" : "Mappa disattivata fino al consenso cookie"}
      >
        <p>
          {isEn
            ? "The Google Maps embed loads only if you accept non-essential cookies from the banner at the bottom of the page, or from the privacy policy."
            : "La mappa Google Maps viene caricata solo se accetti i cookie non strettamente necessari dal banner in basso, oppure da privacy policy."}
        </p>
      </div>
    );
  }

  return (
    <iframe
      className="h-[220px] w-full rounded-sm border-0 sm:h-[300px] md:h-[420px]"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title={isEn ? "Studio Capoferri office — Via Piave 35, Adro (BS)" : "Sede Studio Capoferri — Via Piave 35, Adro (BS)"}
      src={src}
    />
  );
}
