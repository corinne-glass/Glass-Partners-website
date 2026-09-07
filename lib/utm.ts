const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

const UTM_SESSION_KEY = "gp_utm_params";

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

/** Persist URL UTM params to sessionStorage on first campaign visit. */
export function captureUtmToSession(): void {
  if (typeof window === "undefined") return;
  const fromUrl = readUtmFromLocation();
  if (Object.keys(fromUrl).length === 0) return;
  try {
    const existing = readUtmSession();
    sessionStorage.setItem(
      UTM_SESSION_KEY,
      JSON.stringify({ ...existing, ...fromUrl }),
    );
  } catch {
    /* ignore */
  }
}

/** Merge session-stored UTMs with any present in the current URL. */
export function readUtmSession(): UtmParams {
  if (typeof window === "undefined") return {};
  let stored: UtmParams = {};
  try {
    const raw = sessionStorage.getItem(UTM_SESSION_KEY);
    if (raw) stored = JSON.parse(raw) as UtmParams;
  } catch {
    /* ignore */
  }
  const fromUrl = readUtmFromLocation();
  return { ...stored, ...fromUrl };
}
