"use client";

import Link from "next/link";
import { useState } from "react";
import { businessUrl, crossSiteNav, PERSONAL_PUBLIC_PATH } from "@/lib/domains";

const navLinks = [
  { href: businessUrl("/connect"), label: "Connect", external: true },
  { href: businessUrl("/speaking"), label: "Speaking", external: true },
  { href: businessUrl("/podcast"), label: "Podcast", external: true },
  { href: businessUrl("/about"), label: "About", external: true },
];

export default function PersonalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const business = crossSiteNav.business;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220] border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="h-[76px] flex items-center justify-between">
          <Link
            href={PERSONAL_PUBLIC_PATH}
            className="font-display text-[#f5f1e8] text-[26px] leading-none font-semibold tracking-[-0.022em] whitespace-nowrap hover:text-[#c2a86f] transition-colors shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            Corinne Glass
          </Link>

          <div className="hidden lg:flex items-center flex-nowrap gap-[28px]">
            <ul className="flex items-center flex-nowrap gap-[26px]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] font-medium tracking-[0.02em] text-[#c9c2b3] hover:text-[#f5f1e8] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={business.href()}
              className="text-[14px] font-medium tracking-[0.02em] text-[#b79a64] hover:text-[#d4bc82] transition-colors whitespace-nowrap"
            >
              {business.label} →
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#c9c2b3] hover:text-[#f5f1e8]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-[32px] pt-4 pb-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-[10px] text-[14px] font-medium text-[#c9c2b3] hover:text-[#f5f1e8] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={business.href()}
                onClick={() => setMobileMenuOpen(false)}
                className="py-[10px] text-[14px] font-medium text-[#b79a64] hover:text-[#d4bc82] transition-colors"
              >
                {business.label} →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
