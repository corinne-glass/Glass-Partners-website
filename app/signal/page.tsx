import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignalFaq from "@/components/signal/SignalFaq";
import SignalEnquiryForm from "@/components/signal/SignalEnquiryForm";
import SignalReportSection from "@/components/signal/SignalReportSection";
import SignalWhyTiles from "@/components/signal/SignalWhyTiles";
import SignalFractureEdge from "@/components/signal/SignalFractureEdge";
import SignalFiveFracturesPanel from "@/components/signal/SignalFiveFracturesPanel";
import { SignalHeroCta, SignalEnquiryCta } from "@/components/signal/SignalCtas";
import { signal } from "@/content/signal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: signal.meta.title,
  description: signal.meta.description,
  alternates: { canonical: signal.meta.canonical },
  openGraph: {
    title: signal.meta.ogTitle,
    description: signal.meta.ogDescription,
    url: "https://www.glasspartners.com.au/signal",
    siteName: site.name,
    type: "website",
    images: [
      {
        url: signal.hero.heroImage,
        width: 1024,
        height: 576,
        alt: signal.hero.heroAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: signal.meta.ogTitle,
    description: signal.meta.ogDescription,
    images: [signal.hero.heroImage],
  },
  keywords: [
    "employee engagement survey",
    "employee engagement assessment",
    "employee voice",
    "anonymous employee survey",
    "workplace engagement",
    "workplace culture",
    "employee experience",
    "people plan",
    "employer brand",
    "employee value proposition",
    "employee retention",
    "external employee survey provider",
  ],
};

const container = "mx-auto max-w-[1220px]";
const section = "px-5 py-24 sm:px-8 sm:py-28 lg:px-12";

function JsonLd() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: signal.productName,
    description: signal.meta.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: "https://www.glasspartners.com.au",
    },
    areaServed: "AU",
    url: "https://www.glasspartners.com.au/signal",
    serviceType: "Employee Voice & Engagement Assessment",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: signal.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

function TestimonialSection() {
  return (
    <section className={`${section} bg-white`}>
      <div className={`${container} max-w-3xl`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">
          {signal.testimonial.eyebrow}
        </p>
        <div className="mt-6 flex items-center gap-1.5" role="img" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} viewBox="0 0 20 20" className="h-5 w-5 text-[#B5332E]" aria-hidden>
              <path
                fill="currentColor"
                d="M10 1.5l2.35 5.35 5.85.55-4.4 3.85 1.3 5.7L10 13.9l-4.1 2.95 1.3-5.7-4.4-3.85 5.85-.55L10 1.5z"
              />
            </svg>
          ))}
        </div>
        <blockquote className="mt-6">
          <p className="font-display text-[24px] leading-[1.35] tracking-[-0.02em] text-[#0E1A2B] sm:text-[30px] sm:leading-[1.32]">
            “{signal.testimonial.quote}”
          </p>
          <cite className="mt-6 block text-[15px] not-italic text-[#7d6c48]">
            — {signal.testimonial.attribution}
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

export default function SignalPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="bg-[#f4f1e8] text-[#0E1A2B]">
        {/* 1. Hero */}
        <section className={`${section} pt-[116px]`}>
          <div className={`${container} grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-14`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d6c48] sm:tracking-[0.2em]">
                {signal.hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-xl font-display text-[34px] leading-[1.05] tracking-[-0.03em] text-[#0E1A2B] sm:text-[46px] lg:text-[52px]">
                {signal.hero.h1}
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-[#334155] sm:text-[18px]">
                {signal.hero.body[0]}
              </p>
              <p className="mt-4 max-w-xl text-[17px] leading-[1.75] text-[#334155] sm:text-[18px]">
                {signal.hero.body[1]}
              </p>
              <div className="mt-8 sm:mt-10">
                <SignalHeroCta compact />
              </div>
              <p className="mt-8 max-w-xl text-[15px] font-semibold leading-[1.55] tracking-[0.01em] text-[#0E1A2B] sm:mt-10 sm:text-[16px]">
                {signal.hero.supporting}
              </p>
            </div>

            <figure className="relative w-full max-w-[min(100%,560px)] justify-self-center overflow-hidden rounded-[4px] border border-[#0E1A2B]/10 bg-[#e8e4da] shadow-[0_20px_50px_-24px_rgba(14,26,43,0.28)] lg:max-w-none lg:justify-self-end">
              <div className="relative aspect-[1024/576] w-full overflow-hidden">
                <Image
                  src={signal.hero.heroImage}
                  alt={signal.hero.heroAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 70vw, 92vw"
                  className="object-cover object-[58%_center]"
                />
              </div>
            </figure>
          </div>
        </section>

        {/* 2. Why it matters */}
        <section
          id={signal.problem.id}
          className="relative scroll-mt-24 overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-[120px]"
        >
          <SignalFractureEdge />
          <div
            className={`${container} relative z-10 grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.55fr)] lg:items-start lg:gap-x-20 xl:gap-x-28`}
          >
            <div className="lg:max-w-[22rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">
                {signal.problem.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-[34px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B] sm:text-[40px] lg:mt-6 lg:text-[44px] lg:leading-[1.1]">
                {signal.problem.h2}
              </h2>
            </div>

            <div className="lg:max-w-[36rem] lg:justify-self-end">
              {signal.problem.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-[17px] leading-[1.8] text-[#0E1A2B] sm:text-[18px] ${index === 0 ? "" : "mt-5"}`}
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-10 border-l-2 border-[#B5332E] pl-6 font-display text-[24px] leading-[1.38] tracking-[-0.02em] text-[#0E1A2B] sm:mt-12 sm:text-[28px] lg:text-[32px]">
                {signal.problem.pullLine}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Campaign slogan */}
        <section className="bg-[#0E1A2B] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className={`${container} max-w-[1100px]`}>
            <div className="border-l-2 border-[#B5332E] pl-6 sm:pl-8">
              <p className="font-display text-[28px] leading-[1.2] tracking-[-0.02em] text-[#F7F5F2] sm:text-[36px] lg:text-[42px]">
                {signal.campaignSlogan.line}
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why SIGNAL */}
        <SignalWhyTiles />

        {/* 5. Testimonial */}
        <TestimonialSection />

        {/* 6. What SIGNAL reveals */}
        <section className={`${section} bg-[#f4f1e8]`}>
          <div
            className={`${container} grid gap-14 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-stretch lg:gap-x-14 xl:gap-x-16`}
          >
            <div className="flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">
                {signal.reveals.eyebrow}
              </p>
              <h2 className="mt-4 max-w-xl font-display text-[34px] leading-[1.1] tracking-[-0.02em] text-[#0E1A2B] sm:text-[42px] lg:text-[44px]">
                {signal.reveals.h2}
              </h2>
              {signal.reveals.intro.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`max-w-xl text-[17px] leading-[1.75] text-[#0E1A2B]/85 ${index === 0 ? "mt-6" : "mt-4"}`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-12 flex flex-1 flex-col justify-between border-t-2 border-[#B5332E]">
                {signal.reveals.findings.map((finding) => (
                  <article
                    key={finding.heading}
                    className="border-b border-[#0E1A2B]/12 py-7 first:pt-8 last:border-b-0 last:pb-0"
                  >
                    <h3 className="font-display text-[24px] leading-[1.2] tracking-[-0.02em] text-[#0E1A2B] sm:text-[26px]">
                      {finding.heading}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.75] text-[#0E1A2B]/85 sm:text-[17px]">
                      {finding.copy}
                    </p>
                    {"support" in finding && finding.support ? (
                      <p className="mt-3 text-[14px] leading-[1.7] text-[#7d6c48]">{finding.support}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <SignalFiveFracturesPanel />
          </div>
        </section>

        {/* 7. What you receive */}
        <SignalReportSection />

        {/* 8. How it works */}
        <section className={`${section} bg-[#f4f1e8]`}>
          <div className={container}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">
              {signal.process.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[36px] leading-[1.08] tracking-[-0.02em] text-[#0E1A2B] sm:text-[46px]">
              {signal.process.h2}
            </h2>
            <div className="mt-16 grid gap-14 lg:grid-cols-3 lg:gap-12">
              {signal.process.phases.map((phase) => (
                <article key={phase.num} className="border-t-2 border-[#B5332E] pt-8">
                  <p className="font-display text-[40px] leading-none text-[#B5332E] sm:text-[44px]">
                    {phase.num}
                  </p>
                  <h3 className="mt-5 font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#0E1A2B] sm:text-[30px]">
                    {phase.heading}
                  </h3>
                  <p className="mt-4 text-[16px] leading-[1.75] text-[#0E1A2B]/85 sm:text-[17px]">
                    {phase.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 9. SIGNAL is for you */}
        <section id={signal.forYou.id} className={`${section} scroll-mt-24 bg-white`}>
          <div className={container}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">
              {signal.forYou.eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-[#0E1A2B] sm:text-[42px]">
              {signal.forYou.h2}
            </h2>
            <ul className="mt-12 max-w-3xl list-none space-y-0 border-t border-[#0E1A2B]/12 p-0">
              {signal.forYou.questions.map((question) => (
                <li
                  key={question}
                  className="border-b border-[#0E1A2B]/12 py-5 font-display text-[22px] leading-[1.3] tracking-[-0.02em] text-[#0E1A2B] sm:text-[26px]"
                >
                  {question}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-3xl text-[17px] leading-[1.75] text-[#0E1A2B]/85 sm:text-[18px]">
              {signal.forYou.closing}
            </p>
          </div>
        </section>

        {/* 10. What happens next */}
        <section className={`${section} bg-[#0E1A2B]`}>
          <div className={container}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bc81]">
              {signal.ways.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[36px] leading-[1.08] tracking-[-0.02em] text-[#F7F5F2] sm:text-[46px]">
              {signal.ways.h2}
            </h2>
            {signal.ways.intro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`max-w-3xl text-[17px] leading-[1.75] text-[rgba(247,245,242,0.78)] ${
                  index === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
              {signal.ways.options.map((option) => (
                <article
                  key={option.heading}
                  className="relative flex h-full flex-col overflow-hidden border border-[#d9bc81]/40 bg-[#f4f1e8] px-8 py-9 sm:px-10 sm:py-11"
                >
                  {"showFracture" in option && option.showFracture ? (
                    <svg
                      viewBox="0 0 280 420"
                      className="pointer-events-none absolute -right-4 bottom-0 top-8 h-auto w-[55%] max-w-[220px]"
                      fill="none"
                      aria-hidden
                      preserveAspectRatio="xMaxYMid slice"
                    >
                      <path
                        d="M220 20c-16 58-6 118 14 172 14 38 10 80-8 116-12 26-20 54-14 84"
                        stroke="#d9bc81"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        opacity="0.14"
                      />
                      <path
                        d="M250 70l-32 26 18 36-42 30 24 46-36 38"
                        stroke="#B5332E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.1"
                      />
                    </svg>
                  ) : null}

                  <div className="relative z-10 flex h-full flex-col">
                    <h3 className="font-display text-[28px] leading-[1.15] tracking-[-0.02em] text-[#0E1A2B] sm:text-[30px]">
                      {option.heading}
                    </h3>
                    {option.paragraphs.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={`text-[16px] leading-[1.75] text-[#0E1A2B]/85 sm:text-[17px] ${
                          index === 0 ? "mt-5" : "mt-4"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                    <div className="mt-8 lg:mt-auto lg:pt-10">
                      <SignalEnquiryCta
                        label={option.ctaLabel}
                        eventName={option.ctaEvent}
                        location="ways"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-12 max-w-3xl font-display text-[20px] leading-[1.45] tracking-[-0.02em] text-[#F7F5F2] sm:mt-14 sm:text-[22px]">
              {signal.ways.closing}
            </p>
          </div>
        </section>

        {/* 11. Outcome */}
        <section className="relative overflow-hidden bg-[#f4f1e8] px-5 py-[72px] sm:px-8 sm:py-20 lg:px-12 lg:py-[88px]">
          <svg
            viewBox="0 0 280 420"
            className="pointer-events-none absolute -right-8 top-10 h-[min(75%,380px)] w-[min(38vw,240px)]"
            fill="none"
            aria-hidden
            preserveAspectRatio="xMaxYMid slice"
          >
            <path
              d="M220 20c-16 58-6 118 14 172 14 38 10 80-8 116-12 26-20 54-14 84"
              stroke="#d9bc81"
              strokeWidth="1.25"
              strokeLinecap="round"
              opacity="0.12"
            />
            <path
              d="M250 70l-32 26 18 36-42 30 24 46-36 38"
              stroke="#B5332E"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.09"
            />
            <path
              d="M260 210c-28 16-38 48-28 82 6 24 2 50-12 70"
              stroke="#d9bc81"
              strokeWidth="1.15"
              strokeLinecap="round"
              opacity="0.1"
            />
          </svg>

          <div className={`${container} relative z-10`}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">
              {signal.outcome.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-[34px] leading-[1.08] tracking-[-0.02em] text-[#0E1A2B] sm:mt-4 sm:text-[42px] lg:text-[44px]">
              {signal.outcome.h2}
            </h2>
            <p className="mt-5 max-w-3xl text-[17px] leading-[1.7] text-[#0E1A2B]/85">
              {signal.outcome.body}
            </p>

            <div className="mt-10 grid grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {signal.outcome.points.map((point, index) => (
                <div
                  key={point.num}
                  className={[
                    "border-[#d9bc81]/45 py-6",
                    index % 2 === 0 ? "border-r pr-5 sm:pr-6" : "pl-5 sm:pl-6",
                    index < 2 ? "border-b lg:border-b-0" : "",
                    index < 3 ? "lg:border-r" : "",
                    index === 0 ? "lg:pr-7 lg:pl-0" : "",
                    index === 1 || index === 2 ? "lg:px-7" : "",
                    index === 3 ? "lg:pl-7 lg:pr-0" : "",
                  ].join(" ")}
                >
                  <p className="font-display text-[28px] leading-none text-[#B5332E] sm:text-[32px]">
                    {point.num}
                  </p>
                  <p className="mt-3 text-[15px] font-semibold leading-[1.35] text-[#0E1A2B] sm:text-[16px]">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[900px] border-l-2 border-[#B5332E] pl-5 font-display text-[24px] leading-[1.35] tracking-[-0.02em] text-[#0E1A2B] sm:mt-12 sm:pl-6 sm:text-[28px] lg:text-[30px]">
              {signal.outcome.pullLine}
            </p>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className={`${section} border-t border-[#0E1A2B]/08 bg-white`}>
          <div className={`${container} max-w-3xl`}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">Questions</p>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-[#0E1A2B] sm:text-[40px]">
              A few practical details
            </h2>
            <div className="mt-10">
              <SignalFaq />
            </div>
          </div>
        </section>

        {/* 13. Fit check + enquiry */}
        <section id={signal.enquiry.id} className={`${section} scroll-mt-24 bg-[#0E1A2B]`}>
          <div className={container}>
            <div id={signal.fitCheck.id} className="scroll-mt-24 max-w-3xl">
              <h2 className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-[#F7F5F2] sm:text-[40px]">
                {signal.fitCheck.h2}
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-[rgba(247,245,242,0.78)]">
                {signal.fitCheck.intro}
              </p>
              <ul className="mt-6 space-y-3">
                {signal.fitCheck.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[16px] leading-[1.6] text-[rgba(247,245,242,0.85)]">
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[#B5332E]" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[15px] leading-[1.7] text-[rgba(247,245,242,0.62)]">
                {signal.fitCheck.antiFit}
              </p>
            </div>

            <div className="mt-16 grid gap-12 border-t border-white/12 pt-16 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
              <div>
                <h2 className="font-display text-[36px] leading-[1.08] tracking-[-0.02em] text-[#F7F5F2] sm:text-[46px]">
                  {signal.enquiry.h2}
                </h2>
                {signal.enquiry.copy.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 max-w-xl text-[17px] leading-[1.75] text-[rgba(247,245,242,0.8)]"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="mt-8 max-w-md text-[14px] leading-[1.7] text-[rgba(247,245,242,0.6)]">
                  {signal.enquiry.supporting}
                </p>
              </div>
              <div
                id="signal-enquiry-form"
                className="rounded-[4px] border border-white/12 bg-white/[0.04] p-6 sm:p-8"
              >
                <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#d9bc81]">
                  {signal.enquiry.formEyebrow}
                </p>
                <SignalEnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
