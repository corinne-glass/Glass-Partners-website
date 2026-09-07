"use client";

import SignalReportLeadForm from "@/components/signal-report/SignalReportLeadForm";
import { signalReport } from "@/content/signal-report";
import { useEffect, useState } from "react";

const container = "mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10";

export default function SignalReportHero() {
  const { hero } = signalReport;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reveal = mounted ? "sr-fade-up motion-reduce:opacity-100" : "opacity-0";

  return (
    <section
      id="hero"
      className="bg-[#F7F5F2] bg-grain px-5 pt-[4.5rem] pb-10 sm:px-8 sm:pt-20 sm:pb-12 lg:px-10 text-[#0E1A2B]"
    >
      <div className={`${container} grid gap-8 lg:grid-cols-[55fr_45fr] lg:items-start lg:gap-10 xl:gap-12`}>
        <div className="flex flex-col gap-5 lg:gap-6 lg:pt-1">
          <div className={reveal} style={{ animationDelay: "0ms" }}>
            <p className="text-[13px] sm:text-[15px] font-bold uppercase tracking-[0.12em] text-[#B5332E]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-2.5 font-display text-[clamp(1.45rem,3vw,2.2rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0E1A2B]">
              {hero.h1}
            </h1>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.6] text-[#334155]">
              {hero.supporting}
            </p>
          </div>

          <div className={reveal} style={{ animationDelay: "80ms" }}>
            <p className="font-display text-[24px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#0E1A2B]">
              {hero.price}
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 sm:gap-4 lg:gap-5">
              {hero.proofLine.map((item) => (
                <div key={item.value} className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[24px] sm:text-[26px] font-semibold leading-none text-[#B5332E] shrink-0">
                      {item.value}
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.04em] text-[#445064] leading-snug">
                      {item.label}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12px] sm:text-[13px] leading-snug text-[#64748b] sm:hidden lg:block">
                    {item.micro}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={reveal} style={{ animationDelay: "120ms" }}>
          <SignalReportLeadForm fieldIdPrefix="sr-hero" />
        </div>
      </div>
    </section>
  );
}
