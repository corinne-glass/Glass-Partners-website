import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, brokenGlassTestLinkProps } from "@/content/site";

export const metadata: Metadata = {
  title: `About Corinne Glass | ${site.name}`,
  description:
    "The founder story behind Glass Partners: point of view, mission, and commercial credibility.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#e5e2d8] px-5 pb-24 pt-24 sm:px-6 lg:pb-32">
        <article className="mx-auto max-w-[1020px]">
          <section className="border-b border-[#0E1A2B]/10 pb-18 sm:pb-24">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] md:items-start">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.06em] text-[#B5332E]">
                  The thinking behind Glass Partners.
                </p>
                <h1 className="mt-5 font-display text-[44px] leading-[1.03] tracking-[-0.02em] text-[#0E1A2B] sm:text-[56px] md:text-[64px]">
                  Corinne Glass
                </h1>
                <p className="mt-5 text-[22px] font-medium leading-[1.35] text-[#263246]">
                  Founder, Glass Partners.
                </p>
                <div className="mt-10 max-w-[46rem] space-y-5 text-[19px] leading-[1.62] text-[#1D2A3B] sm:text-[20px]">
                  <p>
                    Strong businesses are built on strong leadership, clear standards, and teams
                    that can perform through change.
                  </p>
                  <p>
                    Glass Partners exists to help businesses become stronger, more adaptive, and
                    better led.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[280px] md:mx-0 md:justify-self-end">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] border border-[#0E1A2B]/12 bg-[#f3f0e8]">
                  <Image
                    src="/corinne-glass.png"
                    alt="Corinne Glass"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 280px, 280px"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-[#0E1A2B]/10 py-18 sm:py-24">
            <h2 className="font-display text-[33px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B] sm:text-[40px]">
              This work is personal
            </h2>
            <div className="mt-10 max-w-[48rem] space-y-7 text-[17px] leading-[1.78] text-[#2C394C] sm:text-[18px]">
              <p>
                I did not build this business because the world needed another consultancy. I built
                it because I have seen, lived, and learned the cost of getting leadership, people,
                and adaptation wrong.
              </p>
              <p>
                I have seen what happens when leadership damages good people, when standards are
                unclear, and when accountability slips. I have also seen what becomes possible when
                the right foundations are in place — when leaders know how to lead, teams know
                what matters, and the people system behind performance is strong enough to carry the
                weight of growth.
              </p>
              <p>
                I grew up close to a business that ran for more than forty years and still did not
                survive the cost of failing to move with the market. That stays with you. It
                shapes how you think about relevance, resilience, risk, and the price businesses
                pay for standing still too long.
              </p>
              <p>
                I have also spent more than two decades inside businesses, leading teams and
                stepping into the parts that were not working. Across different industries and
                operating environments, the pattern is usually the same: when a business is not
                performing at the level it should, the issue is rarely isolated. It is usually
                structural.
              </p>
            </div>
          </section>

          <section className="border-b border-[#0E1A2B]/10 py-18 sm:py-24">
            <h2 className="font-display text-[33px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B] sm:text-[40px]">
              What I believe
            </h2>
            <div className="mt-10 max-w-[48rem] space-y-5 text-[17px] leading-[1.72] text-[#2C394C] sm:text-[18px]">
              <p>I believe businesses win when the people system is strong.</p>
              <p>Not in the soft sense. In the commercial sense.</p>
              <div className="space-y-1.5">
                <p>When leadership is strong.</p>
                <p>When standards are clear.</p>
                <p>When accountability is built into the way the business runs.</p>
                <p>When teams know what matters and perform accordingly.</p>
                <p>When performance is built into the system, not left to chance.</p>
              </div>
              <p>
                People leave. Markets move. Technology changes. But if the system is strong, the
                business holds.
              </p>
              <p>
                I also believe good leaders make themselves redundant in the best possible way —
                not invisible, not irrelevant, but capable of building clarity, lifting standards, and
                developing teams that can perform without everything relying on them.
              </p>
              <p>That is the kind of leadership I believe in. And the kind of business I help build.</p>
            </div>
          </section>

          <section className="border-b border-[#0E1A2B]/10 py-18 sm:py-24">
            <h2 className="font-display text-[33px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B] sm:text-[40px]">
              Why this matters now
            </h2>
            <div className="mt-10 max-w-[48rem] space-y-7 text-[17px] leading-[1.78] text-[#2C394C] sm:text-[18px]">
              <p>As AI becomes our new norm, the standard for human capability rises with it.</p>
              <p>
                Technology will keep getting smarter, faster, and more capable. The real risk is
                assuming the human side of business can stay where it is.
              </p>
              <p>It cannot.</p>
              <p>
                As intelligence becomes more accessible and embedded into daily work, the
                differentiators become more human, not less: judgement, emotional intelligence,
                communication, curiosity, accountability, and the ability to lead people through
                change.
              </p>
              <p>Businesses need both technical intelligence and people intelligence.</p>
              <p>
                When new technology is layered onto a weak people system, it does not solve the
                problem. It amplifies it.
              </p>
            </div>
          </section>

          <section className="border-b border-[#0E1A2B]/10 py-18 sm:py-24">
            <h2 className="font-display text-[33px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B] sm:text-[40px]">
              Why I built Glass Partners
            </h2>
            <div className="mt-10 max-w-[48rem] space-y-7 text-[17px] leading-[1.78] text-[#2C394C] sm:text-[18px]">
              <p>
                Glass Partners exists for founders and leadership teams who know the business
                should be performing better, even if they cannot yet name exactly what is off.
              </p>
              <p>
                The business should not feel this hard to move forward. The team should be
                stronger. The leaders should be leading at a higher level.
              </p>
              <p>
                I built Glass Partners to step into what is stuck, tell the truth about what is
                getting in the way, and help fix it in a way that moves performance forward.
              </p>
            </div>
          </section>

          <section className="border-b border-[#0E1A2B]/10 py-18 sm:py-24">
            <h2 className="font-display text-[33px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B] sm:text-[40px]">
              The question behind the work
            </h2>
            <div className="mt-8 max-w-[48rem] space-y-7 text-[17px] leading-[1.78] text-[#2C394C] sm:text-[18px]">
              <p>Everything I do comes back to one question:</p>
              <p className="font-display text-[24px] leading-[1.2] tracking-[-0.02em] text-[#B5332E] sm:text-[28px]">
                The Broken Glass Test
                <sup className="ml-1 align-super font-sans text-[0.45em] font-bold tracking-[0.02em]">
                  ™
                </sup>
              </p>
              <p className="font-display text-[34px] leading-[1.18] tracking-[-0.02em] text-[#B5332E] sm:text-[42px]">
                Would your team crawl over broken glass for the mission?
              </p>
              <p>Not because people should sacrifice themselves for a business.</p>
              <p>
                Because when leadership is strong, standards are clear, and the system is doing
                its job, people trust where they are going, understand what matters, and perform
                differently.
              </p>
              <p className="font-medium text-[#0E1A2B]">That is the standard.</p>
              <p>
                Glass Partners exists to help businesses become stronger, more adaptive, and better
                led — especially in a world where technology is moving fast and people still very
                much deserve a seat at the table.
              </p>
            </div>
          </section>

          <section className="py-18 sm:py-24">
            <h2 className="max-w-[52rem] font-display text-[33px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B] sm:text-[40px]">
              If your business knows what to do, but it is not happening, we should talk.
            </h2>
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap">
              <Link
                href={site.startConversationPath}
                className="inline-flex justify-center rounded-[4px] bg-[#B5332E] px-8 py-[14px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E]"
              >
                Start a Conversation
              </Link>
              <Link
                href={site.brokenGlassTestUrl}
                {...brokenGlassTestLinkProps()}
                className="inline-flex justify-center rounded-[4px] border border-[#0E1A2B]/80 bg-white/[0.35] px-8 py-[14px] text-[16px] font-semibold text-[#0E1A2B] transition-colors hover:bg-white/60"
              >
                Take the Broken Glass Test
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
