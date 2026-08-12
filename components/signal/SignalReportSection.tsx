import { SignalTalkCta } from "@/components/signal/SignalCtas";
import { signal } from "@/content/signal";

function ReceiveFractureMotif() {
  return (
    <svg
      viewBox="0 0 320 420"
      className="pointer-events-none absolute -right-6 -top-4 h-[min(70%,420px)] w-[min(42vw,280px)]"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMaxYMin slice"
    >
      <path
        d="M260 20c-18 64-8 128 16 188 16 42 12 88-8 128-14 28-22 60-16 92"
        stroke="#d9bc81"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.12"
      />
      <path
        d="M290 70l-36 28 20 40-46 34 28 50-40 42"
        stroke="#B5332E"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
      />
      <path
        d="M310 200c-32 18-44 52-32 90 6 26 2 54-14 76"
        stroke="#d9bc81"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.09"
      />
    </svg>
  );
}

export default function SignalReportSection() {
  const { report } = signal;

  return (
    <section
      id={report.id}
      className="relative scroll-mt-24 overflow-hidden bg-[#0E1A2B] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-[120px]"
    >
      <ReceiveFractureMotif />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bc81]">{report.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-display text-[36px] leading-[1.08] tracking-[-0.02em] text-[#F7F5F2] sm:text-[46px]">
          {report.h2}
        </h2>
        <p className="mt-6 max-w-[650px] text-[17px] leading-[1.75] text-[rgba(247,245,242,0.78)]">
          {report.intro}
        </p>
        <p className="mt-6 max-w-3xl font-display text-[22px] leading-[1.4] tracking-[-0.02em] text-[#F7F5F2] sm:text-[24px]">
          {report.lead}
        </p>

        <div className="mt-14 grid border-t border-[#d9bc81]/35 sm:mt-16 md:grid-cols-2">
          {report.outcomes.map((outcome, index) => {
            const isLeft = index % 2 === 0;
            const isTopRow = index < 2;

            return (
              <article
                key={outcome.num}
                className={[
                  "border-[#d9bc81]/35 py-9",
                  "border-b md:border-b-0",
                  isLeft ? "md:border-r md:pr-10 md:pl-0" : "md:pl-10 md:pr-0",
                  isTopRow ? "md:border-b md:pb-10 md:pt-10" : "md:pt-10 md:pb-0",
                  index === report.outcomes.length - 1 ? "border-b-0" : "",
                ].join(" ")}
              >
                <p className="text-[13px] font-semibold tracking-[0.08em] text-[#B5332E]">{outcome.num}</p>
                <h3 className="mt-4 font-display text-[26px] leading-[1.15] tracking-[-0.02em] text-[#F7F5F2] sm:text-[28px]">
                  {outcome.heading}
                </h3>
                <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-[rgba(247,245,242,0.78)]">
                  {outcome.copy}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-14 max-w-3xl font-display text-[26px] leading-[1.35] tracking-[-0.02em] text-[#F7F5F2] sm:mt-16 sm:text-[30px] lg:text-[32px]">
          {report.pullLine}
        </p>

        <div className="mt-8 sm:mt-10">
          <SignalTalkCta label={report.ctaLabel} />
        </div>
      </div>
    </section>
  );
}
