"use client";

import { signalReport } from "@/content/signal-report";
import { useInView } from "@/hooks/useInView";

export default function SignalReportTestimonial() {
  const { testimonial } = signalReport;
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-[#B5332E] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      aria-label="Client testimonial"
    >
      <div
        className={`mx-auto max-w-[1160px] transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <blockquote className="max-w-[820px]">
          <p className="font-display text-[clamp(1.35rem,3vw,2.1rem)] font-normal leading-[1.45] tracking-[-0.015em] text-[#F7F5F2]">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-8">
            <cite className="not-italic">
              <span className="block text-[15px] font-normal text-[#F7F5F2]">
                {testimonial.attribution}
              </span>
              <span className="mt-1 block text-[14px] text-[#f4e8e6]">{testimonial.role}</span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
