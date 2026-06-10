import { site } from "@/content/site";
import { BUSINESS_HOME_URL } from "@/lib/domains";

/** Slim footer for campaign landing pages — no site nav. */
export default function LandingFooter() {
  return (
    <footer className="py-8 px-5 sm:px-8 lg:px-12 xl:px-16 bg-[#070d18] text-[#9ca3af] border-t border-white/10">
      <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        <a
          href={BUSINESS_HOME_URL}
          className="text-[#c9c2b3] hover:text-white transition-colors"
        >
          glasspartners.com.au
        </a>
      </div>
    </footer>
  );
}
