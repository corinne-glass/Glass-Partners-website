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

        <p className="mt-6 font-display text-2xl font-medium leading-[1.28] tracking-[-0.02em] text-[#F7F5F2] md:mt-7 md:text-[1.65rem] md:leading-[1.3]">
          Would your team crawl over broken glass for the mission?
        </p>

        <p className="mt-6 text-lg leading-relaxed text-[rgba(247,245,242,0.82)] md:mt-7 md:text-xl">
          The Broken Glass Test helps you see whether your people are truly behind the business — or
          whether they are complying, coasting, protecting themselves or quietly checking out.
        </p>

        <div className="mt-9 md:mt-10">
          <Link
            href={site.brokenGlassTestUrl}
            {...brokenGlassTestLinkProps()}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[4px] bg-[#B5332E] px-[22px] py-[14px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E]"
          >
            Take the 3-minute test
          </Link>
        </div>
      </div>
    </section>
  );
}
