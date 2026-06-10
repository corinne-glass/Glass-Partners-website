import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LandingHeader from "@/components/LandingHeader";
import LandingFooter from "@/components/LandingFooter";
import { fy27 } from "@/content/fy27-execution-reset";
import { calendlyLinkProps, site } from "@/content/site";

export const metadata: Metadata = {
  title: "The FY27 Execution Reset",
  description: fy27.subtitle,
  alternates: { canonical: "/fy27-execution-reset" },
};

const filmGrain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.22'/%3E%3C/svg%3E\")";

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeLinecap="round" />
    </svg>
  );
}

function OutcomeIcon({ index }: { index: number }) {
  const cls = "h-9 w-9 text-[#B5332E]";
  if (index === 0) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="10" cy="10" r="6" />
        <path d="M14.5 14.5L20 20" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M7 9h10M7 13h6" strokeLinecap="round" />
        <path d="M5 5h14a2 2 0 012 2v8a4 4 0 01-4 4H9a4 4 0 01-4-4V7a2 2 0 012-2z" />
      </svg>
    );
  }
  if (index === 2) {
    return <TargetIcon className={cls} />;
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
      <path d="M8 14h2M12 14h2M16 14h2M8 17h2" strokeLinecap="round" />
    </svg>
  );
}

function FormatRowIcon({ index }: { index: number }) {
  const cls = "h-6 w-6 text-white";
  if (index === 0) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 14v4M9 18h6" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="9" rx="3" />
        <path d="M6 11a6 6 0 0112 0" strokeLinecap="round" />
        <path d="M4 20h16" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <circle cx="12" cy="13" r="2.5" />
        <path d="M5 19c0-2.2 3.1-4 7-4s7 1.8 7 4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 19V8l7-4 7 4v11" strokeLinejoin="round" />
      <path d="M5 19h14" strokeLinecap="round" />
      <path d="M9 15h6M9 12h6" strokeLinecap="round" />
    </svg>
  );
}

function UnpackIcon({ index }: { index: number }) {
  const cls = "h-6 w-6 shrink-0 text-white/90";
  const icons = [
    <path key="0" d="M12 3l2.2 6.8H21l-5.5 4 2.1 6.7L12 16.5 6.4 20.5l2.1-6.7L3 9.8h6.8L12 3z" fill="currentColor" stroke="none" />,
    <><circle key="c" cx="12" cy="12" r="8" /><path key="p" d="M8 12h8M12 8v8" strokeLinecap="round" /></>,
    <path key="2" d="M4 12h16M12 4v16" strokeLinecap="round" />,
    <><circle key="c" cx="12" cy="12" r="8" /><path key="p" d="M8 12h8" strokeLinecap="round" /></>,
    <path key="4" d="M5 6h14v12H5zM8 10h8M8 14h5" strokeLinecap="round" />,
    <path key="5" d="M5 18l4-6 3 4 3-5 4 7H5z" strokeLinejoin="round" />,
  ];
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      {icons[index]}
    </svg>
  );
}

export default function Fy27ExecutionResetPage() {
  return (
    <>
      <LandingHeader />
      <main className="bg-[#f4f1e8] text-[#0E1A2B]">
        {/* Hero */}
        <section className="border-b border-[#0E1A2B]/10 pt-[108px] pb-16 px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1320px] mx-auto grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-14">
            <div>
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#B5332E]">
                {fy27.tagline}
              </p>
              <h1 className="mt-5 font-display text-[40px] sm:text-[54px] lg:text-[62px] leading-[1.02] tracking-[-0.03em] uppercase text-[#0E1A2B]">
                {fy27.title}
              </h1>
              <p className="mt-7 max-w-2xl text-[18px] sm:text-[20px] leading-[1.75] text-[#334155] italic">
                {fy27.subtitle}
              </p>
              <blockquote className="mt-8 border-l-4 border-[#B5332E] pl-5 sm:pl-6 max-w-xl">
                <p className="text-[15px] sm:text-[16px] font-semibold uppercase tracking-[0.05em] leading-[1.65] text-[#B5332E]">
                  {fy27.callout.line1}
                </p>
                <p className="mt-3 text-[15px] sm:text-[16px] font-semibold uppercase tracking-[0.05em] leading-[1.65] text-[#B5332E]">
                  {fy27.callout.line2}
                </p>
              </blockquote>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link
                  href={site.startConversationPath}
                  className="inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-6 py-3.5 text-[16px] font-semibold text-[#F7F5F2] hover:bg-[#A6342E] transition-colors"
                >
                  Enquire about availability
                </Link>
                <a
                  href={site.calendlyUrl}
                  {...calendlyLinkProps()}
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#0E1A2B]/40 bg-white/50 px-6 py-3.5 text-[16px] font-semibold text-[#0E1A2B] hover:bg-white/80 transition-colors"
                >
                  Book a conversation
                </a>
              </div>
            </div>

            <div className="mx-auto lg:mx-0 w-[260px] sm:w-[280px] lg:w-[300px] shrink-0">
              <div className="border-[3px] border-[#B5332E] bg-[#B5332E] p-[3px]">
                <div className="relative w-full overflow-hidden bg-[#0E1A2B]" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/speaking-session-1.png"
                    alt="Corinne Glass"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover object-[52%_62%] [filter:grayscale(1)_contrast(1.12)_brightness(0.9)]"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.18]"
                    style={{ backgroundImage: filmGrain, backgroundSize: "220px 220px" }}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-b border-[#0E1A2B]/10 px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 bg-white">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex items-start gap-5 sm:gap-6">
              <TargetIcon className="h-11 w-11 shrink-0 text-[#B5332E] mt-1" />
              <h2 className="font-display text-[30px] sm:text-[38px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B]">
                {fy27.philosophy.headline}
              </h2>
            </div>
            <div className="mt-8 space-y-4 text-[17px] sm:text-[19px] leading-[1.75] text-[#334155]">
              {fy27.philosophy.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Framework + unpacks */}
        <section className="border-b border-[#0E1A2B]/10">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col px-5 sm:px-10 lg:px-12 xl:px-16 py-12 sm:py-14 lg:py-16 bg-[#e8e4da] border-b lg:border-b-0 lg:border-r border-[#0E1A2B]/10">
              <div>
                <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.1] tracking-[-0.02em]">
                  {fy27.framework.title}
                </h2>
                <div className="mt-5 space-y-4 text-[17px] sm:text-[18px] leading-[1.7] text-[#334155]">
                  {fy27.framework.intro.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 flex-1">
                {fy27.framework.pillars.map((pillar) => (
                  <div key={pillar.title} className="border-t border-[#0E1A2B]/12 pt-5">
                    <h3 className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.08em] text-[#0E1A2B]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-[16px] sm:text-[17px] leading-[1.6] text-[#445064]">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 items-start">
                <div className="rounded-[4px] bg-[#B5332E] p-6 sm:p-7 text-[#F7F5F2]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50">
                      <CalendarIcon className="h-5 w-5" />
                    </span>
                    <h3 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.1em]">
                      Available formats
                    </h3>
                  </div>
                  <div className="mt-5 border border-white/40">
                    {fy27.formats.map((f, i) => (
                      <div
                        key={f.label}
                        className={`grid grid-cols-[52px_1fr_1fr] sm:grid-cols-[60px_1.15fr_0.85fr] items-stretch min-h-[56px] sm:min-h-[64px] ${
                          i > 0 ? "border-t border-white/40" : ""
                        }`}
                      >
                        <div className="flex items-center justify-center border-r border-white/40 px-2 py-3">
                          <FormatRowIcon index={i} />
                        </div>
                        <div className="flex items-center border-r border-white/40 px-4 py-3 text-[15px] sm:text-[16px] font-medium leading-snug">
                          {f.label}
                        </div>
                        <div className="flex items-center px-4 py-3 text-[14px] sm:text-[15px] font-medium uppercase tracking-[0.03em] leading-snug">
                          {f.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[4px] bg-[#B5332E] p-6 sm:p-7 text-[#F7F5F2]">
                  <h3 className="text-[15px] sm:text-[16px] font-bold uppercase tracking-[0.1em] text-center">
                    Designed for
                  </h3>
                  <p className="mt-4 text-[15px] sm:text-[17px] leading-[1.55] text-center">
                    {fy27.designedFor.intro}
                  </p>
                  <ul className="mt-5 grid grid-cols-2 gap-2.5">
                    {fy27.designedFor.tags.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-center text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.04em] border border-white/30 rounded-[3px] px-2.5 py-2.5 text-center leading-tight"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-5 sm:px-10 lg:px-12 xl:px-16 py-12 sm:py-14 lg:py-16 bg-[#0E1A2B] text-white">
              <h2 className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.16em] text-[#F7F5F2]">
                What Corinne Unpacks
              </h2>
              <ol className="mt-8 flex flex-col flex-1 justify-between gap-5 sm:gap-6 lg:gap-0 lg:py-2">
                {fy27.unpacks.map((item, i) => (
                  <li key={item.num} className="flex gap-4 sm:gap-5 items-start">
                    <span className="text-[32px] sm:text-[36px] font-light leading-none text-[#B5332E] tabular-nums w-10 shrink-0">
                      {item.num}
                    </span>
                    <div className="flex gap-3 sm:gap-4 pt-1 min-w-0">
                      <UnpackIcon index={i} />
                      <div>
                        <h3 className="text-[15px] sm:text-[16px] font-bold uppercase tracking-[0.06em]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[16px] sm:text-[17px] leading-[1.65] text-[#c9c2b3]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 bg-white border-b border-[#0E1A2B]/10">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="text-center text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.18em] text-[#B5332E]">
              The audience leaves with
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {fy27.outcomes.map((outcome, i) => (
                <div
                  key={outcome}
                  className="flex flex-col items-center text-center px-4 lg:border-r lg:border-[#0E1A2B]/10 last:border-r-0"
                >
                  <OutcomeIcon index={i} />
                  <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[#334155]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA footer band */}
        <section className="bg-[#0E1A2B] text-white px-5 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-16">
          <div className="max-w-[1320px] mx-auto flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-[17px] sm:text-[19px] font-bold uppercase tracking-[0.05em] leading-[1.5]">
                {fy27.cta.headline}
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] uppercase tracking-[0.04em] text-[#9ca3af]">
                {fy27.cta.sub}
              </p>
            </div>

            <div className="flex flex-row items-center gap-4 sm:gap-6 lg:shrink-0">
              <Link
                href={site.startConversationPath}
                className="inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-6 py-3 text-[16px] font-semibold text-[#F7F5F2] hover:bg-[#A6342E] transition-colors whitespace-nowrap"
              >
                Enquire about availability
              </Link>
              <a
                href={`mailto:${site.contactEmail}`}
                className="text-[16px] sm:text-[17px] font-medium text-white hover:text-[#c2a86f] transition-colors whitespace-nowrap"
              >
                {site.contactEmail}
              </a>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}
