"use client";

import { useEffect, useState } from "react";
import { FORM_ID, signalReport } from "@/content/signal-report";
import { trackEvent } from "@/lib/analytics";
import { scrollToHeroForm } from "@/lib/scrollToHeroForm";

const btnPrimary =
  "inline-flex w-full items-center justify-center rounded-[4px] bg-[#B5332E] px-5 py-3.5 text-[14px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5332E]";

export default function SignalReportStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const heroForm = document.getElementById(FORM_ID);
    if (!hero || !heroForm) return;

    let heroVisible = true;
    let formVisible = false;

    const update = () => setVisible(!heroVisible && !formVisible);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.1 },
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        formVisible = entry?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.15 },
    );

    heroObserver.observe(hero);
    formObserver.observe(heroForm);

    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#0E1A2B]/10 bg-[#f4f1e8]/95 px-4 py-3 backdrop-blur-sm md:hidden"
      role="region"
      aria-label="Request the sample report"
    >
      <a
        href={`#${FORM_ID}`}
        className={btnPrimary}
        onClick={(e) => {
          e.preventDefault();
          trackEvent("signal_report_cta_click", { location: "sticky_mobile" });
          scrollToHeroForm(FORM_ID);
        }}
      >
        {signalReport.cta.primary}
      </a>
    </div>
  );
}
