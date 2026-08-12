type TrackProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire analytics events when gtag/dataLayer is present; no-op otherwise. */
export function trackEvent(event: string, props: TrackProps = {}) {
  if (typeof window === "undefined") return;

  const payload = { event, ...props };

  try {
    window.dataLayer?.push(payload);
  } catch {
    /* ignore */
  }

  try {
    window.gtag?.("event", event, props);
  } catch {
    /* ignore */
  }
}
