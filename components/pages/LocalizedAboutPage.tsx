"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { chiSiamoPage } from "@/lib/content";
import { chiSiamoEnParagraphs } from "@/lib/about-copy";
import { chiSiamoPageImage } from "@/lib/images";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedAboutPageContent() {
  const isEn = useLocale() === "en";

  if (!isEn) {
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="home-plate home-plate--well">
              <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{chiSiamoPage.title}</h1>
              <div className={`space-y-5 sm:space-y-6 ${ui.body}`}>
                {chiSiamoPage.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className={`${ui.contentImage} mt-8 aspect-[16/9] w-full sm:mt-12`}>
                <Image src={chiSiamoPageImage.src} alt={chiSiamoPageImage.alt} fill className="object-cover" sizes="(min-width:800px) 800px, 100vw" />
              </div>
            </div>
            <ContactCtaSection locale="it" className="mt-10 sm:mt-14" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="home-plate home-plate--well">
            <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{isEn ? "About" : chiSiamoPage.title}</h1>
            <div className={`space-y-5 sm:space-y-6 ${ui.body}`}>
              {isEn
                ? chiSiamoEnParagraphs.map((p, i) => <p key={i}>{p}</p>)
                : chiSiamoPage.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className={`${ui.contentImage} mt-8 aspect-[16/9] w-full sm:mt-12`}>
              <Image
                src={chiSiamoPageImage.src}
                alt={isEn ? "Studio Capoferri team during a technical meeting in Adro" : chiSiamoPageImage.alt}
                fill
                className="object-cover"
                sizes="(min-width:800px) 800px, 100vw"
              />
            </div>
          </div>
          <ContactCtaSection locale={isEn ? "en" : "it"} className="mt-10 sm:mt-14" />
        </div>
      </div>
    </main>
  );
}
