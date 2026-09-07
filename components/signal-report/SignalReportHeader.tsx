import Link from "next/link";
import { BUSINESS_HOME_URL } from "@/lib/domains";
import { signalReport } from "@/content/signal-report";

export default function SignalReportHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#dbd8cd] border-b border-[rgba(15,23,42,0.08)]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="h-[56px] sm:h-[60px] flex items-center justify-between gap-4">
          <a
            href={BUSINESS_HOME_URL}
            className="font-display text-[#142033] text-[20px] sm:text-[22px] leading-none font-semibold tracking-[-0.022em] whitespace-nowrap hover:text-[#A6342E] transition-colors"
          >
            Glass Partners
          </a>
          <Link
            href={signalReport.header.secondaryHref}
            className="text-right text-[11px] sm:text-[12px] font-medium leading-snug text-[#334155] hover:text-[#0E1A2B] transition-colors max-w-[180px] sm:max-w-none"
          >
            {signalReport.header.secondaryLink}
          </Link>
        </div>
      </div>
    </header>
  );
}
