/** Fire a GA4 event when gtag is available (consent accepted). No-ops otherwise. */
export function trackEvent(name: string, params?: Record<string, string | number | boolean | undefined>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
