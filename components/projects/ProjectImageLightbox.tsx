"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { fontSans } from "@/lib/fonts";

type Img = { src: string; alt: string };

type Props = {
  images: Img[];
  className?: string;
};

export function ProjectImageLightbox({ images, className = "" }: Props) {
  const locale = useLocale();
  const isEn = locale === "en";
  const copy = isEn
    ? {
        gallery: "Photo gallery",
        fullscreen: "Fullscreen gallery",
        close: "Close gallery",
        prev: "Previous image",
        next: "Next image",
        select: "Select image",
        open: "Open in gallery",
        help: "Swipe, use the arrow keys or Shift plus mouse wheel to change image. Exit with Esc or by clicking the background.",
      }
    : {
        gallery: "Galleria fotografica",
        fullscreen: "Galleria a schermo intero",
        close: "Chiudi galleria",
        prev: "Immagine precedente",
        next: "Immagine successiva",
        select: "Seleziona immagine",
        open: "Apri nella galleria",
        help: "Scorri col dito, usa le frecce o Maiusc più rotellina per cambiare immagine. Esci con Esc o clic sullo sfondo.",
      };
  const [open, setOpen] = useState<number | null>(null);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);
  const [renderedOpen, setRenderedOpen] = useState<number | null>(null);
  const lightboxTouchX = useRef<number | null>(null);
  const filmstripRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const scrollYRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);

  const go = useCallback(
    (delta: number) => {
      setOpen((i) => {
        if (i === null) return null;
        const n = images.length;
        return (i + delta + n) % n;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (typeof document === "undefined") return;
    const node = document.createElement("div");
    node.setAttribute("data-project-lightbox-root", "");
    document.body.appendChild(node);
    setPortalNode(node);
    return () => {
      setPortalNode(null);
      node.remove();
    };
  }, []);

  useEffect(() => {
    if (open !== null) setRenderedOpen(open);
  }, [open]);

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;
        const focusable = Array.from(
          root.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("inert") && el.getClientRects().length > 0);

        if (focusable.length === 0) {
          e.preventDefault();
          root.focus();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;

        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && (active === first || active === root)) {
          e.preventDefault();
          last.focus();
        }
      }
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };

    const onWheel = (e: WheelEvent) => {
      if (images.length < 2) return;
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      if (e.shiftKey || absX > absY) {
        e.preventDefault();
        if ((e.shiftKey ? e.deltaY : e.deltaX) > 0) go(1);
        else go(-1);
      }
    };

    window.addEventListener("keydown", onKey);
    const dialog = dialogRef.current;
    dialog?.addEventListener("wheel", onWheel, { passive: false });

    lastFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    scrollYRef.current = window.scrollY;

    const bodyStyle = document.body.style;
    const prevBodyOverflow = bodyStyle.overflow;
    const prevBodyPosition = bodyStyle.position;
    const prevBodyTop = bodyStyle.top;
    const prevBodyWidth = bodyStyle.width;

    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollYRef.current}px`;
    bodyStyle.width = "100%";

    const inerted: HTMLElement[] = [];
    if (portalNode) {
      for (const child of Array.from(document.body.children)) {
        if (!(child instanceof HTMLElement) || child === portalNode) continue;
        child.inert = true;
        child.setAttribute("aria-hidden", "true");
        inerted.push(child);
      }
    }

    requestAnimationFrame(() => dialogRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", onKey);
      dialog?.removeEventListener("wheel", onWheel);

      for (const el of inerted) {
        el.inert = false;
        el.removeAttribute("aria-hidden");
      }

      bodyStyle.overflow = prevBodyOverflow;
      bodyStyle.position = prevBodyPosition;
      bodyStyle.top = prevBodyTop;
      bodyStyle.width = prevBodyWidth;

      window.scrollTo({ top: scrollYRef.current, behavior: "auto" });
      lastFocusedRef.current?.focus();
    };
  }, [open, close, go, images.length, portalNode]);

  useEffect(() => {
    if (renderedOpen === null || !filmstripRef.current) return;
    const el = filmstripRef.current;
    const thumb = el.children[renderedOpen] as HTMLElement | undefined;
    thumb?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [renderedOpen]);

  const onLightboxTouchStart = (e: React.TouchEvent) => {
    lightboxTouchX.current = e.touches[0]?.clientX ?? null;
  };

  const onLightboxTouchEnd = (e: React.TouchEvent) => {
    if (lightboxTouchX.current === null || images.length < 2) return;
    const dx = e.changedTouches[0].clientX - lightboxTouchX.current;
    lightboxTouchX.current = null;
    if (Math.abs(dx) < 48) return;
    go(dx < 0 ? 1 : -1);
  };

  if (images.length === 0) return null;

  const captionClass = `${fontSans.className} text-[0.78rem] leading-snug text-[#666] sm:text-[0.82rem]`;

  const lightbox =
    renderedOpen !== null ? (
      <AnimatePresence
        initial={false}
        onExitComplete={() => {
          setRenderedOpen(null);
        }}
      >
        {open !== null ? (
          <motion.div
            ref={dialogRef}
            id="project-lightbox-dialog"
            className="fixed inset-0 z-[10050] flex h-dvh w-screen cursor-zoom-out flex-col overflow-hidden bg-gradient-to-b from-[#e8ecf1]/[0.92] via-[#eef2f6]/[0.94] to-[#e2e8ee]/[0.92] backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={copy.fullscreen}
            tabIndex={-1}
            onClick={close}
            onTouchStart={onLightboxTouchStart}
            onTouchEnd={onLightboxTouchEnd}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.18, ease: "easeOut" }}
          >
            <motion.div
              className="relative z-30 flex shrink-0 items-center justify-end gap-3 border-b border-white/35 bg-white/55 px-3 py-3 shadow-[0_12px_30px_rgba(42,63,84,0.08)] backdrop-blur-xl sm:px-5 sm:py-4"
              onClick={(e) => e.stopPropagation()}
              initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.18, ease: "easeOut" }}
            >
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#2a3f54]/15 bg-white text-xl leading-none text-[#2a3f54] shadow-sm transition hover:bg-[#fafbfc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a3f54]"
                onClick={close}
                aria-label={copy.close}
              >
                &times;
              </button>
            </motion.div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto overscroll-contain px-3 py-3 sm:px-6 sm:py-4">
              <motion.div
                className="flex w-full max-w-[min(96vw,1200px)] flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.985, y: 10 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985, y: 8 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
              >
                <div className="relative w-full rounded-[1.9rem] border border-white/18 bg-[rgba(255,255,255,0.045)] p-3 shadow-[0_24px_80px_rgba(42,63,84,0.18)] ring-1 ring-white/10 backdrop-blur-2xl sm:p-4">
                  {images.length > 1 ? (
                    <>
                      <button
                        type="button"
                        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-white/40 bg-white/68 text-xl text-[#2a3f54] shadow-[0_10px_28px_rgba(42,63,84,0.12)] backdrop-blur-xl transition hover:scale-[1.04] hover:bg-white/84 sm:left-3 sm:h-11 sm:w-11 sm:text-2xl"
                        onClick={(e) => {
                          e.stopPropagation();
                          go(-1);
                        }}
                        aria-label={copy.prev}
                      >
                        &lsaquo;
                      </button>
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-white/40 bg-white/68 text-xl text-[#2a3f54] shadow-[0_10px_28px_rgba(42,63,84,0.12)] backdrop-blur-xl transition hover:scale-[1.04] hover:bg-white/84 sm:right-3 sm:h-11 sm:w-11 sm:text-2xl"
                        onClick={(e) => {
                          e.stopPropagation();
                          go(1);
                        }}
                        aria-label={copy.next}
                      >
                        &rsaquo;
                      </button>
                    </>
                  ) : null}

                  <div
                    className="relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-[1.45rem] border border-white/8 bg-transparent shadow-none backdrop-blur-0"
                    style={{
                      height: "min(620px, calc(100dvh - 18rem))",
                      maxHeight: "min(620px, calc(100dvh - 18rem))",
                    }}
                  >
                    <Image
                      src={images[open].src}
                      alt={images[open].alt}
                      fill
                      className="cursor-zoom-out object-contain"
                      sizes="(max-width: 768px) 96vw, 1200px"
                      priority
                    />
                  </div>
                </div>

                <p className={`${captionClass} mt-3 max-w-[1100px] px-1 text-center sm:mt-4`}>{images[open].alt}</p>

                <p className="sr-only">
                  {copy.help}
                </p>
              </motion.div>
            </div>

            {images.length > 1 ? (
              <motion.div
                className="shrink-0 border-t border-white/35 bg-white/52 px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:px-4"
                onClick={(e) => e.stopPropagation()}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.18, ease: "easeOut" }}
              >
                <div
                  ref={filmstripRef}
                  className="flex cursor-grab gap-2 overflow-x-auto overscroll-x-contain pb-1 active:cursor-grabbing [scrollbar-width:thin] [scrollbar-color:rgba(42,63,84,0.35)_transparent]"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  {images.map((img, i) => (
                    <button
                      key={`strip-${img.src}-${i}`}
                      type="button"
                      onClick={() => setOpen(i)}
                      className={`relative h-[4.25rem] w-[6.5rem] shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition sm:h-[4.75rem] sm:w-28 ${
                        i === open
                          ? "border-[#2a3f54] ring-2 ring-[#2a3f54]/25"
                          : "border-transparent opacity-75 hover:opacity-100"
                      }`}
                      aria-label={img.alt || copy.select}
                      aria-current={i === open ? "true" : undefined}
                    >
                      <Image src={img.src} alt="" fill className="object-cover" sizes="112px" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    ) : null;

  return (
    <section className={className} aria-label={copy.gallery}>
      <div className="fine-divider mb-6" />

      <div className="md:hidden">
        <div
          className="-mx-1 flex gap-3 overflow-x-auto overscroll-x-contain px-1 pb-3 pt-1 [scrollbar-width:thin] [scrollbar-color:rgba(42,63,84,0.35)_transparent] snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {images.map((img, i) => (
            <button
              key={`thumb-m-${img.src}-${i}`}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative aspect-[4/3] w-[min(78vw,320px)] shrink-0 snap-start cursor-zoom-in overflow-hidden rounded-2xl border border-[#2a3f54]/12 bg-white text-left shadow-[0_6px_24px_rgba(42,63,84,0.08)] ring-0 transition hover:border-[#2a3f54]/25 hover:shadow-[0_12px_32px_rgba(42,63,84,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a3f54]"
              aria-label={`${copy.open}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
                sizes="78vw"
              />
            </button>
          ))}
        </div>
      </div>

      <ul className="hidden list-none gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <li key={`thumb-d-${img.src}-${i}`}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[#2a3f54]/10 bg-[#fafbfc] text-left shadow-[0_8px_28px_rgba(42,63,84,0.07)] transition hover:-translate-y-0.5 hover:border-[#2a3f54]/22 hover:shadow-[0_14px_40px_rgba(42,63,84,0.11)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a3f54]"
              aria-label={`${copy.open}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(min-width:1024px) 33vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a3f54]/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"
                aria-hidden
              />
            </button>
          </li>
        ))}
      </ul>

      {portalNode ? createPortal(lightbox, portalNode) : null}
    </section>
  );
}
