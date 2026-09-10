"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { chromeCopy, getNavLabel, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, navItems } from "@/lib/site";
import { ui } from "@/lib/ui";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const locale = useLocale();
  const copy = chromeCopy[locale].header;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };

    if (media.matches) closeMenu();
    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, [closeMenu]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;

      const root = mobileNavRef.current;
      if (!root) return;

      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ).filter((el) => el.getClientRects().length > 0);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (active === first || active === menuButtonRef.current)) {
        e.preventDefault();
        last.focus();
      }
    };

    lastFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    window.addEventListener("keydown", onKey);

    const t = window.setTimeout(() => {
      mobileNavRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      lastFocusedRef.current?.focus();
    };
  }, [open, closeMenu]);

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-white/88 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl"
            : "bg-white/72 backdrop-blur-2xl"
        }`}
      >
        <div className={layoutGutterXClass}>
          <div className={`relative flex h-[72px] items-center sm:h-[78px] md:h-[94px] md:justify-between ${layoutContentMaxClass}`}>
            <Link
              href={localizeHref("/", locale)}
              className="focus-ring absolute left-1/2 top-1/2 flex shrink-0 -translate-x-1/2 -translate-y-1/2 items-center md:static md:translate-x-0 md:translate-y-0"
              title={linkTitles.home(locale)}
            >
              <Image
                src="/assets/logo-studio-ingegneria-removebg-preview.png"
                alt={locale === "en" ? "Studio Capoferri - structural engineering and design" : "Studio Capoferri - ingegneria e progettazione strutturale"}
                width={220}
                height={70}
                className="h-[54px] w-auto sm:h-[58px] md:h-[70px]"
                priority
              />
            </Link>

            <div className="hidden items-center gap-4 md:flex">
              <nav className="shrink-0" aria-label={copy.mainMenu}>
                <ul className="flex items-center gap-5 lg:gap-7">
                  {navItems.map((item) => {
                    const active = isActivePath(pathname, localizeHref(item.href, locale));
                    const label = getNavLabel(locale, item.key);

                    return (
                      <li key={item.href}>
                        <Link
                          href={localizeHref(item.href, locale)}
                          className={`focus-ring inline-flex min-h-[44px] items-center justify-center px-1 py-2 text-[0.95rem] font-medium tracking-normal transition-colors duration-200 lg:text-[1rem] ${
                            active
                              ? "text-[#b87333]"
                              : "text-[#2a2a2a] hover:text-[#b87333]"
                          }`}
                          aria-current={active ? "page" : undefined}
                          title={linkTitles.nav(label, locale)}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <LanguageSwitcher />
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className="focus-ring relative z-10 ml-auto flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-[#2a3f54]/15 bg-white/70 shadow-sm md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? copy.closeMenu : copy.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`block h-0.5 w-7 rounded bg-[#2a3f54] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-7 rounded bg-[#2a3f54] transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-7 rounded bg-[#2a3f54] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
        <ReadingProgressBar />
      </header>

      <div
        ref={mobileNavRef}
        id="mobile-nav"
        className={`fixed inset-0 top-[73px] z-[999] flex flex-col ${ui.brandGradient} transition sm:top-[79px] md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className={`flex flex-1 items-center justify-center overflow-y-auto ${layoutGutterXClass}`}>
          <ul className={`${layoutContentMaxClass} flex flex-col gap-1 py-8`}>
            {navItems.map((item) => {
              const label = getNavLabel(locale, item.key);
              const href = localizeHref(item.href, locale);
              const active = isActivePath(pathname, href);

              return (
                <li key={item.href}>
                  <Link
                    href={href}
                    className={`focus-ring flex min-h-[48px] items-center justify-center py-4 text-center text-xl font-medium tracking-normal transition sm:text-2xl ${
                      active ? "text-[#e8b478]" : "text-white/90 hover:text-[#e8b478]"
                    }`}
                    aria-current={active ? "page" : undefined}
                    title={linkTitles.nav(label, locale)}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="px-4 pb-8 sm:px-5">
          <div className={`${layoutContentMaxClass} flex justify-center`}>
            <LanguageSwitcher onNavigate={closeMenu} />
          </div>
        </div>
      </div>
    </>
  );
}
