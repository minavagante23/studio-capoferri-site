"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Delegates tel:/mailto: clicks site-wide so every contact link is measured once. */
export function AnalyticsClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackEvent("click_phone", { link_url: href });
        return;
      }
      if (href.startsWith("mailto:")) {
        trackEvent("click_email", { link_url: href });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
