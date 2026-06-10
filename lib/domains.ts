/**
 * Domain routing: glasspartners.com.au (business) · corinneglass.com (redirects to GP, /corinne = personal).
 */

export const BUSINESS_HOST = "glasspartners.com.au";
export const PERSONAL_HOST = "corinneglass.com";

/** Canonical business homepage. */
export const BUSINESS_HOME_URL = "https://www.glasspartners.com.au";

/** Public path for the Corinne Glass personal page (corinneglass.com only). */
export const PERSONAL_PUBLIC_PATH = "/corinne";

/** @deprecated Legacy internal path — redirects to PERSONAL_PUBLIC_PATH */
export const PERSONAL_HOME_PATH = "/personal";

export const PERSONAL_HOME_URL = `https://${PERSONAL_HOST}${PERSONAL_PUBLIC_PATH}`;

export type SiteKind = "business" | "personal";

const BUSINESS_HOSTS = new Set([
  BUSINESS_HOST,
  `www.${BUSINESS_HOST}`,
  "business.localhost",
]);

const PERSONAL_HOSTS = new Set([
  PERSONAL_HOST,
  `www.${PERSONAL_HOST}`,
  "personal.localhost",
]);

export function normalizeHost(host: string): string {
  return host.split(":")[0].toLowerCase();
}

export function getSiteFromHost(host: string): SiteKind {
  const h = normalizeHost(host);
  if (PERSONAL_HOSTS.has(h)) return "personal";
  return "business";
}

export function isPersonalHost(host: string): boolean {
  return getSiteFromHost(host) === "personal";
}

export function isBusinessHost(host: string): boolean {
  return getSiteFromHost(host) === "business";
}

/** Production origin (https). Override in dev via env. */
export function getSiteOrigin(kind: SiteKind): string {
  if (kind === "personal") {
    return (
      process.env.NEXT_PUBLIC_PERSONAL_SITE_URL ??
      `https://${PERSONAL_HOST}`
    ).replace(/\/$/, "");
  }
  return (
    process.env.NEXT_PUBLIC_BUSINESS_SITE_URL ?? BUSINESS_HOME_URL
  ).replace(/\/$/, "");
}

export function businessUrl(path = "/", search = ""): string {
  const base = getSiteOrigin("business");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}${search}`;
}

export function absoluteUrl(kind: SiteKind, path = "/"): string {
  const base = getSiteOrigin(kind);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const crossSiteNav = {
  business: {
    label: "Glass Partners",
    href: () => BUSINESS_HOME_URL,
    hint: "Business advisory",
  },
  personal: {
    label: "Corinne Glass",
    href: () => PERSONAL_HOME_URL,
    hint: "Personal site",
  },
} as const;

export function siteMetadataFor(kind: SiteKind): {
  metadataBase: URL;
  defaultTitle: string;
  defaultDescription: string;
} {
  if (kind === "personal") {
    return {
      metadataBase: new URL(getSiteOrigin("personal")),
      defaultTitle: "Corinne Glass | Leadership, speaking & The Glass Signal",
      defaultDescription:
        "Corinne Glass — founder of Glass Partners. Speaking, podcast, and practical leadership on people, performance and profit.",
    };
  }
  return {
    metadataBase: new URL(getSiteOrigin("business")),
    defaultTitle: "Glass Partners | People. Performance. Profit.",
    defaultDescription:
      "Glass Partners helps businesses scale by strengthening the people system behind performance.",
  };
}
