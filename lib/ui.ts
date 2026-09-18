/**
 * Token UI condivisi: tipografia corpo, titoli, pulsanti, form.
 * I titoli display usano la classe `.font-display` (Newsreader, caricato in layout).
 */
export const ui = {
  /** Sfondo brand scuro, piatto (footer, sezioni scure, hero fallback) */
  brandGradient: "bg-[#1c1e21]",
  /** Compatto, stesso grafite (privacy / barre) */
  brandGradientCompact: "bg-[#1c1e21]",
  /** Card progetto su sfondo chiaro — foto a vivo, titolo sotto */
  projectCardLight:
    "group block overflow-hidden rounded-sm",
  /** Card progetto su sfondo scuro */
  projectCardDark:
    "group block overflow-hidden rounded-sm",

  /** Paragrafi corpo su sfondo chiaro */
  body: "copy-rhythm text-[0.98rem] text-[var(--copy-body)] sm:text-[1.05rem]",
  /** Testo secondario (card, intro) */
  bodyMuted: "copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]",

  /** H1 pagine interne standard */
  pageTitle: "section-title text-[2.05rem] text-[#2a2a2a] sm:text-5xl md:text-6xl",
  /** Margine sotto H1 quando segue un intro nello stesso plate */
  pageTitleLead: "mb-6 sm:mb-8",

  /** H1 case study / progetto singolo */
  caseStudyTitle: "section-title text-[1.9rem] text-[#2a2a2a] sm:text-4xl md:text-5xl",

  /** H2 sezioni home (Chi siamo, Servizi, Contatti, …) — comporre con font-display */
  homeSectionTitle: "section-title home-section-title reveal-title",
  /** H2 sezioni home su sfondo scuro (Progetti, Statistiche) */
  homeSectionTitleInverted: "section-title home-section-title home-section-title--inverted reveal-title",

  /** H2 sezione lunga (servizi, privacy, landing) */
  sectionHeadingAccent: "section-title text-2xl text-[#2a2a2a]",

  /** H2 galleria, “Progetti in evidenza” */
  gallerySectionTitle: "section-title text-xl text-[#2a2a2a] sm:text-2xl",

  /** H2 in card chiare (Recapiti, Dove siamo) */
  cardHeading: "section-title text-xl text-[#2a2a2a] sm:text-2xl",

  /** Foto di contenuto (editoriale: angolo vivo, filetto leggero) */
  contentImage: "relative overflow-hidden rounded-sm border border-[#1c1e21]/10",

  /** Link inline (grafite → rosso logo al hover) */
  linkAccent: "link-accent",

  /** Pulsante primario — grafite. Rosso solo su nav, hover testo, focus. */
  btnPrimary:
    "inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#1c1e21] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#121416] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(176,16,16,0.55)] disabled:opacity-60",

  /** Pulsante outline */
  btnOutline:
    "inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#1c1e21] bg-transparent px-8 py-3 text-sm font-semibold text-[#1c1e21] transition hover:bg-[#1c1e21] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(176,16,16,0.55)]",

  /** Pulsante trasparente su sfondo scuro (privacy / barre) */
  btnGhostOnDark:
    "inline-flex min-h-[44px] items-center justify-center rounded-sm border border-white/35 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",

  /** CTA su sfondo scuro (hero) */
  btnOnDark:
    "inline-flex min-h-[48px] w-full items-center justify-center rounded-sm border border-white/25 bg-white px-8 py-3 text-sm font-semibold text-[#1c1e21] transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(176,16,16,0.7)] sm:w-auto",

  /** Cookie: accetta / rifiuta — stessi pesi visivi (pari dignità Garante) */
  cookieAccept:
    "min-h-[48px] flex-1 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#1c1e21] transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:min-w-[8.5rem] sm:px-6",

  cookieReject:
    "min-h-[48px] flex-1 rounded-md border-2 border-white bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:min-w-[8.5rem] sm:px-6",

  /** Input / textarea form contatti */
  inputField:
    "w-full rounded-md border-2 border-[#1c1e21]/12 bg-white px-4 py-3 text-base text-[#333] outline-none transition placeholder:text-neutral-400 focus:border-[#b01010] focus:ring-2 focus:ring-[rgba(176,16,16,0.2)]",

  /** Link colonna footer */
  footerLink: "focus-ring inline-block min-h-[44px] py-1.5 leading-relaxed transition-colors hover:text-white",
} as const;
