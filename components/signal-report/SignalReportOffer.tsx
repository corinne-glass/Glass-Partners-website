"use client";

import SignalReportReportVisual from "@/components/signal-report/SignalReportReportVisual";
import { signalReport } from "@/content/signal-report";
import { useActiveSection } from "@/hooks/useActiveSection";

const container = "mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10";

export default function SignalReportOffer() {
  const { offer } = signalReport;
  const images = offer.items.map((item) => item.image);
  const { active, setRef } = useActiveSection(offer.items.length);

  return (
    <section className="bg-[#F7F5F2] bg-grain px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
      <div className={container}>
        <header className="max-w-[720px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5332E]">
            {offer.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0E1A2B]">
            {offer.h2}
          </h2>
          <p className="mt-3 text-[16px] leading-[1.65] text-[#334155]">{offer.intro}</p>
        </header>

        <div className="mt-10 hidden lg:grid lg:grid-cols-[45%_55%] lg:items-start lg:gap-10">
          <div className="sticky top-24 self-start">
            <SignalReportReportVisual images={images} activeIndex={active} />
          </div>
          <ol className="min-w-0">
            {offer.items.map((item, index) => {
              const isActive = active === index;
              const num = String(index + 1).padStart(2, "0");
              return (
                <li
                  key={item.title}
                  ref={setRef(index)}
                  aria-current={isActive ? "true" : undefined}
                  className={`py-6 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                    isActive ? "opacity-100" : "opacity-[0.38]"
                  }`}
                >
                  <div className="flex gap-4">
                    <span
                      className={`font-display text-[13px] font-semibold tracking-[0.08em] transition-colors duration-500 ${
                        isActive ? "text-[#B5332E]" : "text-[#0E1A2B]/25"
                      }`}
                    >
                      {num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`font-semibold text-[15px] transition-colors duration-500 ${
                          isActive ? "text-[#0E1A2B]" : "text-[#445064]"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.5] text-[#64748b]">{item.copy}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-8 space-y-12 lg:hidden">
          {offer.items.map((item, index) => {
            const num = String(index + 1).padStart(2, "0");
            return (
              <article key={item.title}>
                <SignalReportReportVisual
                  images={[item.image]}
                  activeIndex={0}
                  className="mx-auto mb-6 max-w-[300px]"
                />
                <div className="flex gap-4">
                  <span className="font-display text-[13px] font-semibold tracking-[0.08em] text-[#B5332E]">
                    {num}
                  </span>
                  <div>
                    <p className="font-semibold text-[15px] text-[#0E1A2B]">{item.title}</p>
                    <p className="mt-1 text-[14px] leading-[1.5] text-[#64748b]">{item.copy}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
