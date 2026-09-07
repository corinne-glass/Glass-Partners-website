"use client";

import { trackEvent } from "@/lib/analytics";
import { FORM_ID, signalReport } from "@/content/signal-report";
import { scrollToHeroForm } from "@/lib/scrollToHeroForm";

const btnPrimary =
  "inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[15px] sm:text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5332E]";

export default function SignalReportCta({
  location,
  fullWidth,
  compact,
  className,
  targetId = FORM_ID,
  label,
}: {
  location: string;
  fullWidth?: boolean;
  compact?: boolean;
  className?: string;
  targetId?: string;
  label?: string;
}) {
  const styles = className ?? (compact ? `${btnPrimary} px-5 py-3.5 text-[15px]` : btnPrimary);
  const text = label ?? signalReport.cta.primary;

  return (
    <a
      href={`#${targetId}`}
      className={`${styles}${fullWidth ? " w-full" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        trackEvent("signal_report_cta_click", { location });
        scrollToHeroForm(targetId);
      }}
    >
      {text}
    </a>
  );
}
