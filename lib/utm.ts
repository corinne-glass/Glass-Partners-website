const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function readUtmFromSearch(search: string): UtmParams {
  const params = new URLSearchParams(search.startsWith("?") ? search : `?${search}`);
  const out: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) out[key] = value;
  }
  return out;
}

export function readUtmFromLocation(): UtmParams {
  if (typeof window === "undefined") return {};
  return readUtmFromSearch(window.location.search);
}
