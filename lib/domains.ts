/**
 * Dual-domain routing: glasspartners.com.au (business) · corinneglass.com (personal).
 */

export const BUSINESS_HOST = "glasspartners.com.au";
export const PERSONAL_HOST = "corinneglass.com";

/** Internal App Router path for the personal home (rewritten from `/` on corinneglass.com). */
export const PERSONAL_HOME_PATH = "/personal";

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
    process.env.NEXT_PUBLIC_BUSINESS_SITE_URL ??
    `https://${BUSINESS_HOST}`
  ).replace(/\/$/, "");
}

export function absoluteUrl(kind: SiteKind, path = "/"): string {
  const base = getSiteOrigin(kind);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const crossSiteNav = {
  business: {
    label: "Glass Partners",
    href: () => absoluteUrl("business", "/"),
    hint: "Business advisory",
  },
  personal: {
    label: "Corinne Glass",
    href: () => absoluteUrl("personal", "/"),
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
