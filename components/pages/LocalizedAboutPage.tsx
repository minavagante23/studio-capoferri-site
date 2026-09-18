"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { chiSiamoPage } from "@/lib/content";
import { chiSiamoEnParagraphs } from "@/lib/about-copy";
import { chiSiamoPageImage } from "@/lib/images";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedAboutPageContent() {
  const isEn = useLocale() === "en";
  const title = isEn ? "About" : chiSiamoPage.title;
  const paragraphs = isEn ? chiSiamoEnParagraphs : chiSiamoPage.paragraphs;
  const alt = isEn ? chiSiamoPageImage.altEn : chiSiamoPageImage.alt;

  return (
    <main id="main-content" className="section-shell">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="home-plate home-plate--well max-w-[860px]">
            <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{title}</h1>
            {paragraphs.map((p, i) => (
              <p key={i} className={`mb-4 last:mb-0 ${ui.body}`}>
                {p}
              </p>
            ))}
            <div className={`${ui.contentImage} mt-8 aspect-[16/10] w-full max-w-[36rem] sm:mt-10`}>
              <Image
                src={chiSiamoPageImage.src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(min-width:640px) 36rem, 100vw"
              />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
