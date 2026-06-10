import { crossSiteNav } from "@/lib/domains";

/** Minimal header for campaign landing pages — logo only, no site nav. */
export default function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#dbd8cd] border-b border-[rgba(15,23,42,0.08)]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="h-[76px] flex items-center">
          <a
            href={crossSiteNav.business.href()}
            className="font-display text-[#142033] text-[26px] leading-none font-semibold tracking-[-0.022em] whitespace-nowrap hover:text-[#A6342E] transition-colors"
          >
            Glass Partners
          </a>
        </div>
      </div>
    </header>
  );
}
