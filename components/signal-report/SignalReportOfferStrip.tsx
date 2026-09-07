import SignalReportCta from "@/components/signal-report/SignalReportCta";
import { FORM_ID, signalReport } from "@/content/signal-report";

export default function SignalReportOfferStrip() {
  const { offerStrip } = signalReport;

  return (
    <section className="border-y border-[#0E1A2B]/12 bg-[#ebe6dc] px-5 py-8 sm:px-8 sm:py-9 lg:px-10">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="shrink-0 font-display text-[24px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#0E1A2B]">
          {offerStrip.price}
        </p>

        <div className="lg:flex-1 lg:text-center">
          <ul className="space-y-1">
            {offerStrip.includes.map((line) => (
              <li key={line} className="text-[14px] sm:text-[15px] font-medium text-[#334155]">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 lg:text-right">
          <SignalReportCta
            location="offer_bar"
            targetId={FORM_ID}
            label={signalReport.cta.primaryWithArrow}
            compact
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-[4px] bg-[#B5332E] px-5 py-3.5 text-[14px] sm:text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5332E]"
          />
        </div>
      </div>
    </section>
  );
}
