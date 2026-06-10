import Link from "next/link";
import { crossSiteNav } from "@/lib/domains";
import { site } from "@/content/site";

export default function PersonalFooter() {
  const business = crossSiteNav.business;

  return (
    <footer className="py-14 px-5 sm:px-6 bg-[#070d18] text-[#f5f1e8] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display text-2xl">Corinne Glass</p>
            <p className="mt-3 text-[#c9c2b3] text-sm max-w-md leading-relaxed">
              Founder of Glass Partners. Leadership, speaking, and The Glass Signal.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/connect" className="text-[#c9c2b3] hover:text-white transition-colors">
              Connect
            </Link>
            <Link href="/speaking" className="text-[#c9c2b3] hover:text-white transition-colors">
              Speaking
            </Link>
            <Link href="/podcast" className="text-[#c9c2b3] hover:text-white transition-colors">
              Podcast
            </Link>
            <Link href="/about" className="text-[#c9c2b3] hover:text-white transition-colors">
              About
            </Link>
            <Link
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b79a64] hover:text-[#d4bc82] transition-colors"
            >
              LinkedIn
            </Link>
            <a
              href={business.href()}
              className="font-medium text-[#b79a64] hover:text-[#d4bc82] transition-colors"
            >
              {business.label} →
            </a>
          </nav>
        </div>
        <p className="mt-12 pt-8 border-t border-white/10 text-xs text-[#9a9283] text-center md:text-left">
          © {new Date().getFullYear()} Corinne Glass. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
