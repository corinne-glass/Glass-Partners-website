import Link from "next/link";
import { site, brokenGlassTestLinkProps } from "@/content/site";

const drivers = [
  "Mission and Direction",
  "Leadership Trust",
  "Performance Environment",
  "Growth and Commitment",
] as const;

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

        <p className="mt-5 text-lg font-medium leading-relaxed text-[#E8EDF3] md:mt-6 md:text-xl">
          Great leaders ensure the answer is yes.
        </p>

        <div className="mt-6 space-y-2 text-lg leading-relaxed text-[rgba(247,245,242,0.78)] md:mt-7">
          <p>Leadership sets the conditions.</p>
          <p>Teams decide whether the mission lives or dies in execution.</p>
          <p>Strong businesses do not leave that to chance.</p>
        </div>

        <div className="mt-8 border-t border-white/[0.08] pt-8 md:mt-10 md:pt-9">
          <p className="text-lg leading-relaxed text-[rgba(247,245,242,0.72)]">
            The Broken Glass Test is a short leadership diagnostic designed to reveal whether your
            team is truly committed to the mission — or whether there are cracks affecting
            performance, trust, and accountability.
          </p>

          <p className="mt-5 text-base font-semibold leading-snug text-[rgba(247,245,242,0.9)] md:mt-6 md:text-[17px]">
            It assesses four critical drivers of high performance:
          </p>

          <ul className="mt-3 space-y-3 text-base leading-relaxed text-[rgba(247,245,242,0.76)] md:text-[17px]">
            {drivers.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="shrink-0 leading-none text-rebel" aria-hidden>
                  •
                </span>
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 md:mt-10">
            <Link
              href={site.brokenGlassTestUrl}
              {...brokenGlassTestLinkProps()}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[4px] bg-[#B5332E] px-[22px] py-[14px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E]"
            >
            Take the Broken Glass Test
          </Link>
        </div>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-[rgba(247,245,242,0.62)] md:text-[17px]">
          In under 3 minutes, uncover whether commitment is driving performance — or quietly
          limiting it.
        </p>
      </div>
    </section>
  );
}
