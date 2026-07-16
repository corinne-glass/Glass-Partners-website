import Link from "next/link";
import { site, brokenGlassTestLinkProps } from "@/content/site";

export default function BrokenGlassTest() {
  return (
    <section
      id="broken-glass-test"
      className="scroll-mt-24 bg-[#0F1A2B] py-20 px-5 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-rebel md:text-4xl">
          The Broken Glass Test
          <sup className="ml-1 align-super font-sans text-[0.45em] font-bold tracking-[0.02em] text-rebel">
            ™
          </sup>
        </h2>

        <p className="mt-2.5 font-display text-lg font-medium leading-[1.3] tracking-[-0.02em] text-[#F7F5F2] md:mt-3 md:text-xl md:leading-[1.32]">
          Would your team crawl over broken glass for the mission?
        </p>

        <h3 className="mt-8 font-display text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#F7F5F2] md:mt-9 md:text-[1.75rem]">
          Is your people system ready for growth?
        </h3>

        <p className="mt-5 text-lg leading-relaxed text-[rgba(247,245,242,0.82)] md:text-xl">
          Take the three-minute Broken Glass Test and get a clearer view of where leadership, clarity,
          accountability, capability or signal may be weakening performance.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-[rgba(247,245,242,0.82)] md:text-xl">
          You will receive your score, what it may be signalling and the first issue worth examining.
        </p>

        <div className="mt-9 md:mt-10">
          <Link
            href={site.brokenGlassTestUrl}
            {...brokenGlassTestLinkProps()}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[4px] bg-[#B5332E] px-[22px] py-[14px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E]"
          >
            Get My Broken Glass Score
          </Link>
        </div>
      </div>
    </section>
  );
}
