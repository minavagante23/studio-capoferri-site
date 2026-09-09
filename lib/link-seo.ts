type SeoLocale = "it" | "en";

export function linkTitle(label: string, context?: string): string {
  return context ? `${label} - ${context}` : label;
}

export const linkTitles = {
  home: (locale: SeoLocale = "it") => (locale === "en" ? "Back to home - Studio Capoferri" : "Torna alla home - Studio Capoferri"),
  skipContent: (locale: SeoLocale = "it") => (locale === "en" ? "Skip to main content" : "Salta al contenuto principale"),
  nav: (label: string, locale: SeoLocale = "it") => linkTitle(locale === "en" ? `Go to ${label}` : `Vai a ${label}`, "Studio Capoferri"),
  servizio: (name: string, locale: SeoLocale = "it") => linkTitle(name, locale === "en" ? "Studio Capoferri Services" : "Servizi Studio Capoferri"),
  acciaio: (city: string, locale: SeoLocale = "it") =>
    linkTitle(locale === "en" ? `Steel structure design in ${city}` : `Progettazione strutture in acciaio a ${city}`, "Studio Capoferri"),
  pagina: (name: string) => linkTitle(name, "Studio Capoferri"),
  progetto: (name: string, locale: SeoLocale = "it") => linkTitle(locale === "en" ? `Project: ${name}` : `Progetto: ${name}`, "Studio Capoferri"),
  consulenza: (locale: SeoLocale = "it") => (locale === "en" ? "Request a consultation - Studio Capoferri Contact" : "Richiedi una consulenza - Contatti Studio Capoferri"),
  contatti: (locale: SeoLocale = "it") => (locale === "en" ? "Contact us - Studio Capoferri" : "Contattaci - Studio Capoferri"),
  scopriServizi: (locale: SeoLocale = "it") => (locale === "en" ? "Explore all services - Studio Capoferri" : "Scopri tutti i servizi - Studio Capoferri"),
  scopriServizio: (name: string, locale: SeoLocale = "it") => linkTitle(locale === "en" ? `Learn more: ${name}` : `Scopri di più: ${name}`, locale === "en" ? "Services" : "Servizi"),
  tuttiProgetti: (locale: SeoLocale = "it") => (locale === "en" ? "Explore all projects - Studio Capoferri" : "Esplora tutti i progetti - Studio Capoferri"),
  formContatti: (locale: SeoLocale = "it") => (locale === "en" ? "Write to us using the contact form - Studio Capoferri" : "Scrivici dal form contatti - Studio Capoferri"),
  privacy: "Privacy policy - Studio Capoferri",
  cookiePolicy: (locale: SeoLocale = "it") => (locale === "en" ? "Cookie notice - Studio Capoferri Privacy policy" : "Informativa cookie - Privacy Studio Capoferri"),
  telefono: (phone: string, locale: SeoLocale = "it") => linkTitle(locale === "en" ? `Call ${phone}` : `Chiama ${phone}`, "Studio Capoferri"),
  email: (email: string, locale: SeoLocale = "it") => linkTitle(locale === "en" ? `Email ${email}` : `Scrivi a ${email}`, "Studio Capoferri"),
  linkedin: (locale: SeoLocale = "it") => (locale === "en" ? "Follow us on LinkedIn - Studio Capoferri" : "Seguici su LinkedIn - Studio Capoferri"),
  breadcrumbProgetti: (locale: SeoLocale = "it") => (locale === "en" ? "Back to projects - Studio Capoferri" : "Torna ai progetti - Studio Capoferri"),
  breadcrumbArea: (area: string, locale: SeoLocale = "it") => linkTitle(locale === "en" ? `Projects ${area}` : `Progetti ${area}`, "Studio Capoferri"),
  external: (name: string, locale: SeoLocale = "it") => linkTitle(name, locale === "en" ? "External site" : "Sito esterno"),
  legacyRedirect: (page: string, locale: SeoLocale = "it") => linkTitle(locale === "en" ? `Go to the new page: ${page}` : `Vai alla nuova pagina: ${page}`, "Studio Capoferri"),
} as const;
