import Link from "next/link";
import { site } from "@/content/site";

const btnPrimary =
  "inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap";

export default function AboutGlassPartners() {
  return (
    <section
      id="about-glass-partners"
      className="scroll-mt-24 border-t border-authority/10 bg-[#f3f0e8] px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl lg:text-[2.5rem]">
          What we actually do
        </h2>

        <p className="mt-8 max-w-3xl text-[1.2rem] font-bold leading-[1.5] tracking-[-0.02em] text-authority sm:text-[1.35rem] md:text-[1.45rem]">
          Help you take your time back. Get the payoff. Enjoy what you have built.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-[1.75] text-metal md:text-[1.2rem]">
          We strengthen the people system behind performance.
        </p>

        <div className="mt-10 max-w-3xl border-l-2 border-rebel/55 pl-5">
          <div className="space-y-3 text-lg font-bold leading-[1.5] text-authority md:text-[1.2rem]">
            <p>Not another strategy.</p>
            <p>Not surface-level advice.</p>
            <p>A stronger business through a stronger people system.</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:justify-start">
          <Link href={site.startConversationPath} className={btnPrimary}>
            Fix What’s Stuck
          </Link>
        </div>
      </div>
    </section>
  );
}
