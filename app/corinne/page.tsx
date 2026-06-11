import type { Metadata } from "next";
import Image from "next/image";
import PersonalHeader from "@/components/PersonalHeader";
import PersonalFooter from "@/components/PersonalFooter";
import { businessUrl, crossSiteNav, PERSONAL_PUBLIC_PATH } from "@/lib/domains";
import { corinne } from "@/content/corinne";

export const metadata: Metadata = {
  title: "Corinne Glass | Founder, speaker & advisor",
  description:
    "Founder of Glass Partners, speaker, advisor and host of The Glass Signal. Work on the people system behind performance — commitment, capability and growth.",
  alternates: { canonical: PERSONAL_PUBLIC_PATH },
};

const btnGold =
  "inline-flex items-center justify-center rounded-[4px] bg-[#b79a64] px-6 py-3 text-[15px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors whitespace-nowrap";

const btnOutline =
  "inline-flex items-center justify-center rounded-[4px] border border-white/25 px-6 py-3 text-[15px] font-semibold text-[#f5f1e8] hover:bg-white/5 transition-colors whitespace-nowrap";

const btnGoldSm =
  "inline-flex items-center rounded-[4px] bg-[#b79a64] px-4 py-2 text-[14px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors w-fit";

const whereCardClass =
  "rounded-[8px] border border-white/12 bg-[#111a2a] p-6 sm:p-7 flex flex-col";

const conversationCardClass =
  "flex h-full flex-col rounded-[6px] border border-white/12 bg-[#0E1A2B] p-7 shadow-[0_18px_34px_-14px_rgba(0,0,0,0.35)] sm:p-8";

export default function CorinneHomePage() {
  const business = crossSiteNav.business;

  return (
    <>
      <PersonalHeader />
      <main className="bg-[#0b1220] text-[#f5f1e8]">
        {/* Hero */}
        <section className="pt-[118px] pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10">
          <div className="max-w-[1240px] mx-auto grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8aa86]">
                {corinne.hero.label}
              </p>
              <h1 className="mt-5 font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.03em] max-w-3xl text-[#f7f3ea]">
                {corinne.hero.headline}
              </h1>
              <div className="mt-7 max-w-2xl space-y-4 text-[17px] leading-[1.75] text-[#d6d0c3] sm:text-[18px]">
                {corinne.hero.body.map((line, index) => (
                  <p
                    key={line}
                    className={
                      index >= 2
                        ? "font-medium text-[#f7f3ea]"
                        : undefined
                    }
                  >
                    {line.replace("Glass Partners", business.label)}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={businessUrl("/connect")} className={btnGold}>
                  {corinne.hero.ctas.connect}
                </a>
                <a href={businessUrl("/start")} className={btnOutline}>
                  {corinne.hero.ctas.workWith}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] max-w-[360px] mx-auto lg:mx-0 w-full overflow-hidden rounded-[6px] border border-white/12">
              <Image
                src="/corinne-glass.png"
                alt="Corinne Glass"
                fill
                className="object-cover object-top"
                sizes="360px"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Where to start */}
        <section className="py-20 px-5 sm:px-8 lg:px-12 border-b border-white/10">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-[32px] sm:text-[40px] tracking-[-0.02em] text-[#f7f3ea]">
              {corinne.whereToStart.heading}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {corinne.whereToStart.cards.map((item) => {
                const href =
                  "anchor" in item && item.anchor
                    ? businessUrl(`${item.href}${item.anchor}`)
                    : "external" in item && item.external
                      ? business.href()
                      : businessUrl(item.href);

                return (
                  <article key={item.title} className={whereCardClass}>
                    <h3 className="font-display text-[28px] leading-[1.05] text-[#f7f3ea]">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex-1 space-y-3">
                      {item.body.map((paragraph, index) => (
                        <p
                          key={paragraph}
                          className={`text-[15px] leading-[1.7] ${
                            item.title === "The Glass Signal" && index >= 1 && index <= 2
                              ? "font-medium text-[#f7f3ea]"
                              : item.title === "The Glass Signal" && index === 3
                                ? "text-[#b8aa86]"
                                : "text-[#c9c2b3]"
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <a href={href} className={`${btnGoldSm} mt-6`}>
                      {item.cta}
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* What I am building the conversation around */}
        <section className="py-20 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-[32px] sm:text-[40px] tracking-[-0.02em] text-[#f7f3ea] max-w-3xl">
              {corinne.conversationHeading}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {corinne.conversationCards.map((card) => (
                <article key={card.title} className={conversationCardClass}>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#F7F5F2] md:text-[1.65rem]">
                    {card.title}
                  </h3>
                  {"emphasis" in card && card.emphasis ? (
                    <div className="mt-5 space-y-1">
                      {card.emphasis.map((line) => (
                        <p
                          key={line}
                          className="text-[16px] font-semibold leading-relaxed text-[#B5332E]"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-5 space-y-4">
                    {card.paragraphs.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={`text-[16px] leading-relaxed ${
                          index < 2 && !("emphasis" in card)
                            ? "font-semibold text-[#F7F5F2]"
                            : "text-[rgba(247,245,242,0.82)]"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PersonalFooter />
    </>
  );
}
