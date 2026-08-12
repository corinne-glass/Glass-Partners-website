import Link from "next/link";
import { site } from "@/content/site";
import { crossSiteNav } from "@/lib/domains";

export default function Footer() {
  const personal = crossSiteNav.personal;

  return (
    <footer className="py-14 px-5 sm:px-6 bg-authority-matte text-cloud border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-3 text-cloud-200 text-sm max-w-md leading-relaxed">{site.positioning}</p>
            <p className="mt-4 text-cloud-100 text-sm font-medium tracking-[0.02em]">
              People. Performance. Profit.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/" className="text-cloud-100 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-cloud-100 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-cloud-100 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/speaking" className="text-cloud-100 hover:text-white transition-colors">
              Speaking
            </Link>
            <Link href="/connect" className="text-cloud-100 hover:text-white transition-colors">
              Connect
            </Link>
            <Link href="/#contact" className="text-cloud-100 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href={site.startConversationPath} className="text-cloud-100 hover:text-white transition-colors">
              Start the Conversation
            </Link>
            <Link
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#B5332E] hover:text-[#A6342E] transition-colors"
            >
              Connect on LinkedIn
            </Link>
            <Link href="/signal" className="text-cloud-100 hover:text-white transition-colors">
              SIGNAL
            </Link>
            <Link href="/podcast" className="text-cloud-100 hover:text-white transition-colors">
              Podcast
            </Link>
            <Link href="/#newsletter" className="text-cloud-100 hover:text-white transition-colors">
              Newsletter
            </Link>
            <a
              href={personal.href()}
              className="font-medium text-[#B5332E] hover:text-[#A6342E] transition-colors"
            >
              {personal.label}
            </a>
          </nav>
        </div>
        <p className="mt-12 pt-8 border-t border-white/10 text-xs text-cloud-200 text-center md:text-left">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
