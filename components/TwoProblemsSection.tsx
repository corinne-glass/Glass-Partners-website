import Link from "next/link";
import { site, brokenGlassTestLinkProps } from "@/content/site";

const btnPrimary =
  "inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap";

const btnSecondary =
  "inline-flex items-center justify-center rounded-[4px] border border-white/85 bg-white/[0.08] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] backdrop-blur-[2px] transition-colors hover:bg-white/16 whitespace-nowrap";

const paradoxLines = [
  "Speed without clarity.",
  "Loyalty without trust.",
  "Accountability without ownership.",
  "Culture talk while weak standards stay untouched.",
  "Conviction expected. Compliance created.",
] as const;

const tileClass =
  "flex h-full flex-col rounded-[6px] border border-white/12 bg-[#0E1A2B] p-7 shadow-[0_18px_34px_-14px_rgba(0,0,0,0.35)] sm:p-8";

export default function TwoProblemsSection() {
  return (
    <section
      id="two-problems"
      className="scroll-mt-24 border-t border-authority/10 bg-white px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-4xl font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl lg:text-[2.5rem]">
          Two problems we help businesses solve
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-metal md:text-[1.15rem] lg:max-w-none lg:whitespace-nowrap lg:text-[1.12rem] xl:text-[1.2rem]">
          Different symptoms. Same root cause: the people system is not strong enough for what the business is asking of it.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className={tileClass}>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#F7F5F2] md:text-[1.65rem]">
              The Broken Glass Paradox
            </h3>
            <p className="mt-5 text-[16px] font-semibold leading-relaxed text-[#F7F5F2]">
              Every business wants people who would crawl over broken glass for the mission.
            </p>
            <p className="mt-4 text-[16px] font-semibold leading-relaxed text-[#F7F5F2]">
              Most accidentally build the conditions that make people step back.
            </p>
            <ul className="mt-5 space-y-2 border-l-2 border-[#B5332E]/50 pl-4">
              {paradoxLines.map((line) => (
                <li key={line} className="text-[15px] leading-snug text-[rgba(247,245,242,0.88)]">
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex-1 text-[16px] leading-relaxed text-[rgba(247,245,242,0.82)]">
              Glass Partners helps businesses strengthen the conditions that make people believe,
              commit and perform when the work gets hard.
            </p>
            <div className="mt-8 pt-2">
              <Link href={site.brokenGlassTestUrl} {...brokenGlassTestLinkProps()} className={btnPrimary}>
                Take the Broken Glass Test
              </Link>
            </div>
          </article>

          <article className={tileClass}>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#F7F5F2] md:text-[1.65rem]">
              Human Intelligence for Artificial Intelligence
            </h3>
            <p className="mt-5 text-[16px] font-semibold leading-relaxed text-[#B5332E]">
              AI will not fix incompetence.
            </p>
            <p className="mt-1 text-[16px] font-semibold leading-relaxed text-[#B5332E]">
              It will accelerate it.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-[rgba(247,245,242,0.82)]">
              Used well, AI creates leverage. Used by people without judgement, context or
              capability, it scales average thinking, generic output and poor decisions faster.
            </p>
            <p className="mt-5 flex-1 text-[16px] leading-relaxed text-[rgba(247,245,242,0.82)]">
              Glass Partners helps businesses build the human capability AI still depends on:
              judgement, discernment, ownership, communication, learning discipline and the ability
              to turn tools into better performance.
            </p>
            <div className="mt-8 pt-2">
              <Link href={site.startConversationPath} className={btnSecondary}>
                Build AI-ready capability
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
