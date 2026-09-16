"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy, localeStorageKey, switchLocalePath, type Locale } from "@/lib/i18n";

type Props = {
  className?: string;
  onNavigate?: () => void;
  tone?: "light" | "dark";
};

const options: { locale: Locale; shortLabel: string }[] = [
  { locale: "it", shortLabel: "IT" },
  { locale: "en", shortLabel: "EN" },
];

export function LanguageSwitcher({ className = "", onNavigate, tone = "light" }: Props) {
  const pathname = usePathname() || "/";
  const locale = useLocale();
  const copy = chromeCopy[locale].header;
  const dark = tone === "dark";
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash || "");
  }, [pathname]);

  const persistPreference = (nextLocale: Locale) => {
    try {
      localStorage.setItem(localeStorageKey, nextLocale);
    } catch {
      /* ignore */
    }
  };

  return (
    <nav aria-label={copy.languageSwitcher} className={`inline-flex items-center gap-1 ${className}`}>
      {options.map((item, index) => {
        const active = item.locale === locale;
        const href = switchLocalePath(pathname, item.locale, hash);

        return (
          <span key={item.locale} className="inline-flex items-center">
            {index > 0 ? (
              <span className={`px-1 text-[0.7rem] ${dark ? "text-white/25" : "text-[#2a3f54]/30"}`} aria-hidden>
                /
              </span>
            ) : null}
            <Link
              href={href}
              prefetch={false}
              onClick={() => {
                persistPreference(item.locale);
                onNavigate?.();
              }}
              aria-current={active ? "page" : undefined}
              aria-label={item.locale === "it" ? copy.languageItalian : copy.languageEnglish}
              className={`focus-ring relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-1.5 text-[0.72rem] font-semibold tracking-[0.16em] transition-colors ${
                dark
                  ? active
                    ? "text-[#e8b478]"
                    : "text-white/45 hover:text-white"
                  : active
                    ? "text-[#b87333]"
                    : "text-[#2a3f54]/55 hover:text-[#b87333]"
              }`}
            >
              {item.shortLabel}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
