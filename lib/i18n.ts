import { localizedPathname, toItalianPath } from "@/lib/locale-paths";

export const locales = ["it", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";
export const localeStorageKey = "preferred_locale_studio_capoferri";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleFromPathname(pathname?: string | null): Locale {
  if (!pathname) return defaultLocale;
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "it";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname || "/";
}

function splitHash(path: string) {
  const hashIndex = path.indexOf("#");
  if (hashIndex === -1) return { pathname: path, hash: "" };
  return {
    pathname: path.slice(0, hashIndex),
    hash: path.slice(hashIndex),
  };
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href || href.startsWith("#") || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
    return href;
  }

  const { pathname, hash } = splitHash(href);
  const barePath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const itPath = toItalianPath(barePath);
  return `${localizedPathname(itPath, locale)}${hash}`;
}

export function switchLocalePath(pathname: string, locale: Locale, hash = ""): string {
  const itPath = toItalianPath(pathname || "/");
  return `${localizedPathname(itPath, locale)}${hash}`;
}

export const chromeCopy = {
  it: {
    nav: {
      about: "Chi siamo",
      projects: "Progetti",
      services: "Servizi",
      contacts: "Contatti",
    },
    header: {
      mainMenu: "Menu principale",
      openMenu: "Apri menu",
      closeMenu: "Chiudi menu",
      languageSwitcher: "Cambia lingua",
      languageItalian: "Versione italiana",
      languageEnglish: "Versione inglese",
    },
    footer: {
      services: "Servizi",
      company: "Azienda",
      contacts: "Contatti",
      rights: "Tutti i diritti riservati",
      followLinkedin: "Seguici su LinkedIn - Studio Capoferri",
    },
    cookie: {
      title: "Cookie e privacy",
      body: "Utilizziamo cookie tecnici necessari e, previo consenso, contenuti di terze parti (es. mappe).",
      more: "Informativa estesa",
      accept: "Accetta",
      reject: "Rifiuta",
      dialogLabel: "Informativa sui cookie",
    },
    contactForm: {
      success: "Messaggio inviato. Ti risponderemo al più presto.",
      name: "Nome e cognome",
      email: "Email",
      subject: "Oggetto",
      city: "Città / zona di interesse",
      cityPlaceholder: "Es. Brescia, Bergamo, Milano",
      message: "Messaggio",
      privacyLead: "Ho letto e accetto la",
      privacyLink: "privacy policy",
      submit: "Invia messaggio",
      submitting: "Invio in corso...",
      error: "Invio non riuscito. Riprova o scrivi a",
      errors: {
        name: "Inserisci nome e cognome.",
        email: "Email non valida.",
        message: "Messaggio troppo breve (min. 10 caratteri).",
        privacy: "Accetta la privacy per inviare.",
      },
      noSubject: "(nessun oggetto)",
    },
    cta: {
      defaultTitle: "Hai un progetto in mente?",
      defaultDescription:
        "Raccontaci la tua esigenza: analizziamo fattibilità, costi e tempi e ti proponiamo la soluzione strutturale più adatta.",
      requestConsultation: "Richiedi una consulenza",
      discoverServices: "Scopri i servizi",
    },
    hero: {
      introLabel: "Introduzione",
      location: "Studio Capoferri · Adro (BS)",
      support: "Ingegneria civile, architettura e strutture in acciaio.",
      cta: "Richiedi un preventivo",
      slidePicker: "Seleziona slide hero",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      services: "Services",
      contacts: "Contact",
    },
    header: {
      mainMenu: "Main menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageSwitcher: "Change language",
      languageItalian: "Italian version",
      languageEnglish: "English version",
    },
    footer: {
      services: "Services",
      company: "Company",
      contacts: "Contact",
      rights: "All rights reserved",
      followLinkedin: "Follow us on LinkedIn - Studio Capoferri",
    },
    cookie: {
      title: "Cookies and privacy",
      body: "We use essential technical cookies and, with consent, third-party content such as maps.",
      more: "Extended policy",
      accept: "Accept",
      reject: "Reject",
      dialogLabel: "Cookie notice",
    },
    contactForm: {
      success: "Message sent. We will reply as soon as possible.",
      name: "Full name",
      email: "Email",
      subject: "Subject",
      city: "City / area of interest",
      cityPlaceholder: "Example: Brescia, Bergamo, Milan",
      message: "Message",
      privacyLead: "I have read and accept the",
      privacyLink: "privacy policy",
      submit: "Send message",
      submitting: "Sending...",
      error: "Sending failed. Please try again or write to",
      errors: {
        name: "Please enter your full name.",
        email: "Invalid email address.",
        message: "Message is too short (minimum 10 characters).",
        privacy: "Accept the privacy policy to send the form.",
      },
      noSubject: "(no subject)",
    },
    cta: {
      defaultTitle: "Do you have a project in mind?",
      defaultDescription:
        "Tell us what you need: we assess feasibility, costs and timeline, then propose the most suitable structural solution.",
      requestConsultation: "Request a consultation",
      discoverServices: "Explore services",
    },
    hero: {
      introLabel: "Introduction",
      location: "Studio Capoferri · Adro (BS) - Italy",
      support: "Steel structures + site support in Northern Italy — talk to us in English.",
      cta: "Request a quote",
      slidePicker: "Select hero slide",
    },
  },
} as const;

export function getNavLabel(locale: Locale, key: keyof (typeof chromeCopy.it.nav)) {
  return chromeCopy[locale].nav[key];
}
