import SignalReportCta from "@/components/signal-report/SignalReportCta";
import { signalReport } from "@/content/signal-report";

export default function SignalReportFinalCta() {
  const { finalCta } = signalReport;

  return (
    <section className="bg-[#0E1A2B] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto flex max-w-[1160px] flex-col items-start gap-6 sm:gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5332E]">
            {finalCta.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.35rem,2.6vw,1.95rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#F7F5F2]">
            {finalCta.h2}
          </h2>
          <p className="mt-3 text-[16px] leading-[1.65] text-[#c9c2b3]">{finalCta.body}</p>
          <p className="mt-3 text-[13px] font-medium text-[#9ca3af]">{finalCta.support}</p>
        </div>
        <div className="shrink-0 w-full sm:w-auto">
          <SignalReportCta
            location="final_cta"
            label={signalReport.cta.primaryWithUpArrow}
            fullWidth
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-[4px] bg-[#B5332E] px-6 py-3.5 text-[14px] sm:text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5332E]"
          />
        </div>
      </div>
    </section>
  );
}
