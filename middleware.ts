import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  BUSINESS_HOME_URL,
  businessUrl,
  getSiteFromHost,
  normalizeHost,
  PERSONAL_HOME_PATH,
  PERSONAL_HOME_URL,
  PERSONAL_PUBLIC_PATH,
} from "@/lib/domains";

function forwardSiteHeaders(
  request: NextRequest,
  site: ReturnType<typeof getSiteFromHost>,
  extra?: Record<string, string>
) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site", site);
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      requestHeaders.set(key, value);
    }
  }
  return requestHeaders;
}

/** 301 to GP home — local dev uses business.localhost. */
function redirectToBusinessHome(request: NextRequest): NextResponse {
  const host = normalizeHost(request.headers.get("host") ?? "");
  if (host === "personal.localhost") {
    const url = new URL(request.url);
    url.hostname = "business.localhost";
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.redirect(BUSINESS_HOME_URL, 301);
}

/** 301 to same path on the business domain. */
function redirectToBusinessPath(request: NextRequest): NextResponse {
  const { pathname, search } = request.nextUrl;
  const host = normalizeHost(request.headers.get("host") ?? "");
  if (host === "personal.localhost") {
    const url = new URL(request.url);
    url.hostname = "business.localhost";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.redirect(businessUrl(pathname, search), 301);
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const site = getSiteFromHost(host);
  const { pathname } = request.nextUrl;

  // Corinne personal page only lives on corinneglass.com/corinne
  if (site === "business" && (pathname === PERSONAL_PUBLIC_PATH || pathname === PERSONAL_HOME_PATH)) {
    return NextResponse.redirect(PERSONAL_HOME_URL, 301);
  }

  if (site === "personal") {
    // Legacy /personal → /corinne
    if (pathname === PERSONAL_HOME_PATH) {
      return NextResponse.redirect(new URL(PERSONAL_PUBLIC_PATH, request.url), 301);
    }

    // corinneglass.com/ → Glass Partners home
    if (pathname === "/") {
      return redirectToBusinessHome(request);
    }

    // Corinne personal page
    if (pathname === PERSONAL_PUBLIC_PATH) {
      return NextResponse.next({
        request: {
          headers: forwardSiteHeaders(request, "personal", {
            "x-canonical-path": PERSONAL_PUBLIC_PATH,
          }),
        },
      });
    }

    // All other paths on corinneglass.com → glasspartners.com.au equivalent
    return redirectToBusinessPath(request);
  }

  return NextResponse.next({
    request: { headers: forwardSiteHeaders(request, site) },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|txt|xml)).*)",
  ],
};
