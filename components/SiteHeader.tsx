"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { fontDisplay } from "@/lib/fonts";
import { chromeCopy, getNavLabel, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, navItems, site } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const locale = useLocale();
  const copy = chromeCopy[locale].header;
  const hero = chromeCopy[locale].hero;
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
        className={`sticky top-0 z-[1000] transition-[background-color,backdrop-filter] duration-300 ${
          open ? "bg-white" : scrolled ? "bg-white/94 backdrop-blur-xl" : "bg-white/80 backdrop-blur-2xl"
        }`}
      >
        <div className={layoutGutterXClass}>
          <div className={`relative flex h-[var(--header-h)] items-center justify-between ${layoutContentMaxClass}`}>
            <Link
              href={localizeHref("/", locale)}
              className="focus-ring relative z-10 flex shrink-0 items-center"
              title={linkTitles.home(locale)}
            >
              <Image
                src="/assets/logo-studio-ingegneria-removebg-preview.png"
                alt={
                  locale === "en"
                    ? "Studio Capoferri - structural engineering and design"
                    : "Studio Capoferri - ingegneria e progettazione strutturale"
                }
                width={220}
                height={70}
                className="h-11 w-auto sm:h-12 md:h-[70px]"
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
                            active ? "text-[#b87333]" : "text-[#2a2a2a] hover:text-[#b87333]"
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
              className="focus-ring relative z-10 ml-2 inline-flex h-11 min-w-[44px] items-center gap-2.5 text-[#2a3f54] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? copy.closeMenu : copy.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="eyebrow text-[0.62rem] tracking-[0.2em] text-current">{open ? copy.closeShort : copy.menuShort}</span>
              <span className={`site-header-burger ${open ? "is-open" : ""}`} aria-hidden>
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
        <ReadingProgressBar />
      </header>

      <div
        ref={mobileNavRef}
        id="mobile-nav"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <nav className={`relative flex min-h-0 flex-1 flex-col ${layoutGutterXClass}`} aria-label={copy.mainMenu}>
          <div className={`flex min-h-0 flex-1 flex-col overflow-y-auto pl-3 sm:pl-4 ${layoutContentMaxClass}`}>
            <p className="eyebrow pt-6 text-[0.68rem] tracking-[0.2em] text-[#e8b478]">{copy.navIndex}</p>
            <ul className="flex flex-col gap-0 pt-5">
              {navItems.map((item, index) => {
                const label = getNavLabel(locale, item.key);
                const href = localizeHref(item.href, locale);
                const active = isActivePath(pathname, href);

                return (
                  <li key={item.href} className="mobile-nav__item">
                    <Link
                      href={href}
                      className={`focus-ring group flex min-h-[52px] items-baseline gap-4 border-b border-white/[0.08] py-3.5 transition-colors ${
                        active ? "text-[#e8b478]" : "text-white hover:text-[#e8b478]"
                      }`}
                      aria-current={active ? "page" : undefined}
                      title={linkTitles.nav(label, locale)}
                      onClick={closeMenu}
                    >
                      <span className={`shrink-0 pt-1 text-[0.72rem] font-medium tabular-nums tracking-[0.14em] ${active ? "text-[#e8b478]" : "text-white/48 group-hover:text-[#e8b478]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`${fontDisplay.className} text-[2.15rem] leading-[0.95] tracking-[0.04em] sm:text-[2.55rem]`}>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-nav__meta mt-auto border-t border-white/10 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6">
              <p className="eyebrow text-[0.62rem] tracking-[0.16em] text-white/45">{hero.location}</p>
              <a
                href={`tel:${site.phoneTel}`}
                className="focus-ring mt-2 inline-flex min-h-[44px] items-center text-sm font-medium tracking-wide text-white/88 transition-colors hover:text-[#e8b478]"
                title={linkTitles.telefono(site.phoneDisplay, locale)}
              >
                {site.phoneDisplay}
              </a>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <LanguageSwitcher tone="dark" onNavigate={closeMenu} />
                <Link
                  href={localizeHref("/contatti", locale)}
                  className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-sm border border-white/25 bg-white px-5 py-2.5 text-[0.78rem] font-semibold text-[#1f2e3d] transition hover:bg-neutral-100"
                  title={linkTitles.contatti(locale)}
                  onClick={closeMenu}
                >
                  {hero.cta}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
