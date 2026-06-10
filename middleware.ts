import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getSiteFromHost,
  PERSONAL_HOME_PATH,
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

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const site = getSiteFromHost(host);
  const { pathname } = request.nextUrl;

  // corinneglass.com/ → personal home (URL stays `/`)
  if (site === "personal" && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = PERSONAL_HOME_PATH;
    return NextResponse.rewrite(url, {
      request: {
        headers: forwardSiteHeaders(request, site, { "x-canonical-path": "/" }),
      },
    });
  }

  // Hide internal personal route on the business domain
  if (site === "business" && pathname === PERSONAL_HOME_PATH) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Normalise personal domain: /personal → /
  if (site === "personal" && pathname === PERSONAL_HOME_PATH) {
    return NextResponse.redirect(new URL("/", request.url));
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
