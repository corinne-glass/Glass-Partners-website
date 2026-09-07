"use client";

import Image from "next/image";
import SignalReportArchitecture from "@/components/signal-report/SignalReportArchitecture";
import { signalReport } from "@/content/signal-report";
import { useInView } from "@/hooks/useInView";
import { prefersReducedMotion } from "@/lib/motion";
import { useEffect, useRef, useState } from "react";

const container = "mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10";

function OutcomeBlock({
  num,
  title,
  copy,
}: {
  num: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="py-7 sm:py-8">
      <p className="text-[12px] font-semibold tracking-[0.14em] text-[#B5332E]">{num}</p>
      <h3 className="mt-2 font-display text-[clamp(1.1rem,2vw,1.45rem)] font-semibold uppercase leading-[1.15] tracking-[-0.01em] text-[#F7F5F2]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.65] text-[#c9c2b3]">{copy}</p>
    </div>
  );
}

export default function SignalReportValue() {
  const { value } = signalReport;
  const closingRef = useRef<HTMLDivElement>(null);
  const [closingVisible, setClosingVisible] = useState(false);
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    const node = closingRef.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setClosingVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setClosingVisible(true);
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0E1A2B] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className={container}>
        <header
          ref={headerRef}
          className={`max-w-3xl transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5332E]">
            {value.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#F7F5F2]">
            {value.h2}
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#c9c2b3] max-w-2xl">
            {value.intro}
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[42%_58%] lg:gap-12 xl:gap-14">
          <div className="relative lg:row-span-2">
            <div
              className="absolute -left-3 top-8 bottom-8 w-[3px] bg-[#B5332E] hidden lg:block"
              aria-hidden
            />
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[480px] lg:h-full overflow-hidden">
              <Image
                src={value.image}
                alt={value.imageAlt}
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div
                className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0E1A2B] to-transparent lg:hidden"
                aria-hidden
              />
            </div>
          </div>

          <div className="lg:pt-2">
            {value.columns.map((col) => (
              <OutcomeBlock key={col.num} {...col} />
            ))}
          </div>

          <div className="lg:col-start-2 border-t border-[#F7F5F2]/10 pt-2">
            <SignalReportArchitecture />
          </div>
        </div>

        <div
          ref={closingRef}
          className={`mt-14 sm:mt-16 pt-12 sm:pt-16 border-t border-[#F7F5F2]/10 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
            closingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[17px] text-[#c9c2b3]">{value.closingSmall}</p>
          <p className="mt-4 max-w-3xl font-display text-[clamp(1.4rem,3vw,2.15rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#F7F5F2]">
            {value.closingLarge}
          </p>
        </div>
      </div>
    </section>
  );
}
