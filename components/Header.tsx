"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { BUSINESS_HOME_URL, crossSiteNav } from "@/lib/domains";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/connect", label: "Connect" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const personal = crossSiteNav.personal;
  const businessHome = BUSINESS_HOME_URL;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#dbd8cd] border-b border-[rgba(15,23,42,0.08)]"
    >
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="h-[76px] flex items-center justify-between">
          <a
            href={businessHome}
            className="font-display text-[#142033] text-[26px] leading-none font-semibold tracking-[-0.022em] whitespace-nowrap hover:text-[#A6342E] transition-colors shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            Glass Partners
          </a>

          <div className="hidden lg:flex items-center flex-nowrap gap-[32px]">
            <ul className="flex items-center flex-nowrap gap-[30px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-medium tracking-[0.02em] text-[#334155] hover:text-[#B03A32] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={personal.href()}
              className="text-[14px] font-medium tracking-[0.02em] text-[#334155] hover:text-[#B03A32] transition-colors whitespace-nowrap"
            >
              {personal.label}
            </a>
            <Link
              href={site.startConversationPath}
              className="inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[18px] py-[12px] text-[15px] font-semibold text-[#F7F5F2] hover:bg-[#A6342E] transition-colors whitespace-nowrap"
            >
              Book a Conversation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#334155] hover:text-[#142033]"
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
        <div className="lg:hidden border-t border-[rgba(15,23,42,0.08)]">
          <div className="max-w-[1280px] mx-auto px-[32px] pt-4 pb-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-[10px] text-[14px] font-medium tracking-[0.02em] text-[#334155] hover:text-[#B03A32] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={personal.href()}
              onClick={() => setMobileMenuOpen(false)}
              className="py-[10px] text-[14px] font-medium tracking-[0.02em] text-[#334155] hover:text-[#B03A32] transition-colors"
            >
              {personal.label}
            </a>
            <div className="pt-4 mt-3 border-t border-[rgba(15,23,42,0.08)]">
              <Link
                href={site.startConversationPath}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[18px] py-[12px] text-[15px] font-semibold text-[#F7F5F2] hover:bg-[#A6342E] transition-colors whitespace-nowrap"
              >
                Book a Conversation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
