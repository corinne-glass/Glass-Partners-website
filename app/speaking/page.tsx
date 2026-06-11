import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import { speaking, speakingPositioning } from "@/content/speaking";

export const metadata: Metadata = {
  title: `Speaking | ${site.name}`,
  description: `${speakingPositioning} Book Corinne Glass for keynotes on commitment, AI readiness, and the people system behind performance.`,
  alternates: { canonical: "/speaking" },
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap";

const btnSecondary =
  "inline-flex items-center justify-center rounded-[4px] border border-white/85 bg-white/[0.08] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] backdrop-blur-[2px] transition-colors hover:bg-white/16 whitespace-nowrap";

const laneCardClass =
  "flex h-full flex-col rounded-[6px] border border-white/12 bg-[#0E1A2B] p-7 shadow-[0_18px_34px_-14px_rgba(0,0,0,0.35)] sm:p-8";

const workshopCardClass =
  "rounded-[6px] border border-white/12 bg-white/[0.04] px-5 py-5 sm:px-6 sm:py-6";

export default function SpeakingPage() {
  const filmGrain =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.22'/%3E%3C/svg%3E\")";

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="scroll-mt-24 bg-[#0E1A2B] pt-[118px] pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10">
          <div className="max-w-[1240px] mx-auto grid gap-10 lg:grid-cols-[1.08fr_0.92fr] items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B5332E]">
                {speaking.hero.label}
              </p>
              <h1 className="mt-5 font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.03em] text-[#F7F5F2] max-w-5xl">
                {speaking.hero.headline}
              </h1>
              <p className="mt-6 max-w-4xl text-[17px] leading-[1.75] text-[rgba(247,245,242,0.88)] sm:text-[18px]">
                {speaking.hero.subheading}
              </p>
              <p className="mt-5 max-w-4xl text-[16px] leading-[1.75] text-[rgba(247,245,242,0.78)] sm:text-[17px]">
                {speaking.hero.supporting}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#enquire" className={btnPrimary}>
                  Enquire About Speaking
                </Link>
                <Link href="#signature-topics" className={btnSecondary}>
                  View Signature Topics
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-[460px] lg:max-w-[480px] ml-auto rounded-[6px] overflow-hidden border border-white/10">
              <Image
                src="/speaking-session-1.png"
                alt="Corinne Glass speaking to a leadership audience"
                width={768}
                height={1152}
                className="w-full h-full object-cover object-[52%_62%] [filter:grayscale(1)_contrast(1.12)_brightness(0.92)]"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.18]"
                style={{ backgroundImage: filmGrain, backgroundSize: "220px 220px" }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,26,43,0.28) 0%, rgba(14,26,43,0.06) 36%, rgba(14,26,43,0.32) 100%)",
                }}
                aria-hidden
              />
            </div>
          </div>
        </section>

        {/* Speaking lanes */}
        <section className="scroll-mt-24 border-t border-authority/10 bg-[#fcfcfa] px-5 py-20 sm:px-8 lg:px-12 sm:py-24">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl lg:text-[2.5rem]">
              {speaking.lanesHeading}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {speaking.lanes.map((lane) => (
                <article key={lane.id} className={laneCardClass}>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#F7F5F2] md:text-[1.65rem]">
                    {lane.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-medium leading-snug text-[#B5332E]">
                    {lane.proofPoint}
                  </p>
                  <div className="mt-5 space-y-4">
                    {lane.paragraphs.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={`text-[16px] leading-relaxed ${
                          index < 2
                            ? "font-semibold text-[#F7F5F2]"
                            : "text-[rgba(247,245,242,0.82)]"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <p className="mt-6 text-[14px] font-semibold uppercase tracking-[0.08em] text-[rgba(247,245,242,0.72)]">
                    Best for
                  </p>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[rgba(247,245,242,0.82)]">
                    {lane.bestFor}
                  </p>
                  <div className="mt-6 pt-2">
                    <Link
                      href={`#keynote-${lane.id}`}
                      className="text-[15px] font-semibold text-[#B5332E] underline decoration-[#B5332E]/40 underline-offset-4 transition-colors hover:decoration-[#B5332E]"
                    >
                      Read full keynote
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Signature keynotes */}
        <section
          id="signature-topics"
          className="scroll-mt-24 border-t border-authority/10 bg-white px-5 py-20 sm:px-8 lg:px-12 sm:py-24"
        >
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl lg:text-[2.5rem]">
              Signature keynotes
            </h2>
            <div className="mt-12 space-y-16 sm:space-y-20">
              {speaking.keynotes.map((keynote) => (
                <article
                  key={keynote.id}
                  id={`keynote-${keynote.id}`}
                  className="scroll-mt-28 rounded-[6px] border border-authority/12 bg-[#f3f0e8] p-7 sm:p-9 lg:p-10"
                >
                  <h3 className="font-display text-[1.75rem] font-semibold tracking-[-0.02em] text-authority sm:text-[2rem]">
                    {keynote.title}
                  </h3>
                  <p className="mt-3 text-lg font-medium leading-snug text-[#B5332E] sm:text-xl">
                    {keynote.subtitle}
                  </p>
                  <div className="mt-6 max-w-4xl space-y-4">
                    {keynote.body.map((paragraph) => (
                      <p key={paragraph} className="text-[16px] leading-[1.75] text-metal sm:text-[17px]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                      <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-authority/80">
                        Audiences leave with
                      </p>
                      <p className="mt-2 text-[15px] text-metal">A sharper understanding of:</p>
                      <ul className="mt-3 space-y-2.5">
                        {keynote.audiencesLeaveWith.map((item) => (
                          <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-metal">
                            <span
                              className="mt-[0.35em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B5332E]/90"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-authority/80">
                        Best suited to
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-metal">{keynote.bestSuitedTo}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section className="scroll-mt-24 border-t border-white/10 bg-[#0E1A2B] px-5 py-16 sm:px-8 lg:px-12 sm:py-20">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-2xl tracking-[-0.02em] text-[#F7F5F2] md:text-3xl">
              {speaking.workshopsHeading}
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[rgba(247,245,242,0.78)]">
              Supporting sessions for leadership teams who want practical frameworks alongside the
              signature keynotes.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {speaking.workshops.map((workshop) => (
                <article key={workshop.title} className={workshopCardClass}>
                  <h3 className="font-display text-lg font-semibold text-[#F7F5F2]">{workshop.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[rgba(247,245,242,0.78)]">
                    {workshop.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Corinne */}
        <section className="scroll-mt-24 border-t border-authority/10 bg-white px-5 py-20 sm:px-8 lg:px-12 sm:py-24">
          <div className="max-w-[1240px] mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <h2 className="font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl lg:text-[2.5rem]">
                {speaking.whyCorinne.heading}
              </h2>
              <div className="mt-8 space-y-5 max-w-3xl text-[16px] leading-[1.75] text-metal sm:text-[17px]">
                {speaking.whyCorinne.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative self-end w-full max-w-[420px] lg:ml-auto rounded-[6px] overflow-hidden border border-authority/12">
              <Image
                src="/speaking-session-2-final.png"
                alt="Corinne Glass delivering a leadership speaking session"
                width={768}
                height={1152}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Bring Corinne into the room */}
        <section
          id="enquire"
          className="scroll-mt-24 border-t border-white/10 bg-[#0E1A2B] px-5 py-20 sm:px-8 lg:px-12 sm:py-24"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-[#F7F5F2] md:text-4xl lg:text-[2.5rem]">
              {speaking.cta.heading}
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-[rgba(247,245,242,0.82)] sm:text-[17px]">
              {speaking.cta.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link href={site.startConversationPath} className={`${btnPrimary} mt-10`}>
              {speaking.cta.button}
            </Link>
          </div>
        </section>

        {/* Need speaker details? */}
        <section className="scroll-mt-24 border-t border-authority/10 bg-[#f3f0e8] px-5 py-16 sm:px-8 lg:px-12 sm:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl tracking-[-0.02em] text-authority md:text-3xl">
              {speaking.speakerDetails.heading}
            </h2>
            <div className="mt-5 space-y-3 text-[16px] leading-relaxed text-metal">
              {speaking.speakerDetails.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={site.startConversationPath}
              className="inline-flex items-center justify-center rounded-[4px] border border-authority/25 bg-white px-[22px] py-[15px] text-[16px] font-semibold text-authority transition-colors hover:bg-cloud-50 whitespace-nowrap mt-8"
            >
              {speaking.speakerDetails.button}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
