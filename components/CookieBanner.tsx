"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const STORAGE_KEY = "cookie_consent_studio_capoferri";

export type CookieChoice = "accepted" | "rejected";

function getStored(): CookieChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "accepted" || v === "rejected") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function CookieBanner() {
  const locale = useLocale();
  const copy = chromeCopy[locale].cookie;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStored() === null);
  }, []);

  const persist = useCallback((choice: CookieChoice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
      const d = new Date();
      d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
      const secure = window.location.protocol === "https:" ? ";Secure" : "";
      document.cookie = `${STORAGE_KEY}=${choice};expires=${d.toUTCString()};path=/;SameSite=Lax${secure}`;
    } catch {
      /* ignore */
    }
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: choice }));
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={copy.dialogLabel}
      aria-modal="false"
      className={`fixed inset-x-0 bottom-0 z-[10000] border-t-2 border-white/15 ${ui.brandGradient} pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 text-white shadow-[0_-8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md sm:pt-5`}
    >
      <div className={layoutGutterXClass}>
        <div className={`flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between ${layoutContentMaxClass}`}>
          <div className="min-w-0 flex-1 text-sm leading-relaxed md:text-base">
            <p className="font-semibold">{copy.title}</p>
            <p className="mt-0.5 text-white/95 sm:mt-1">
              {copy.body}{" "}
              <Link href={localizeHref("/privacy-policy#cookie", locale)} title={linkTitles.cookiePolicy(locale)} className="underline underline-offset-2 hover:text-white">
                {copy.more}
              </Link>
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-2">
            <button type="button" className={`focus-ring ${ui.cookieAccept}`} onClick={() => persist("accepted")}>
              {copy.accept}
            </button>
            <button type="button" className={`focus-ring ${ui.cookieReject}`} onClick={() => persist("rejected")}>
              {copy.reject}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function resetCookieConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    const secure = window.location.protocol === "https:" ? ";Secure" : "";
    document.cookie = `${STORAGE_KEY}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax${secure}`;
    window.dispatchEvent(new CustomEvent("cookie-consent-reset"));
    window.location.reload();
  } catch {
    /* ignore */
  }
}

export function useCookieConsent(): CookieChoice | null {
  const [c, setC] = useState<CookieChoice | null>(null);

  useEffect(() => {
    const stored = getStored();
    setC(stored);

    const handler = (e: Event) => {
      const ce = e as CustomEvent<CookieChoice>;
      setC(ce.detail);
    };

    window.addEventListener("cookie-consent", handler as EventListener);
    return () => window.removeEventListener("cookie-consent", handler as EventListener);
  }, []);

  return c;
}
