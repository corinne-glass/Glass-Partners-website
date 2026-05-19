import Link from "next/link";
import { site, brokenGlassTestLinkProps } from "@/content/site";

const btnPrimary =
  "inline-flex justify-center rounded-[4px] bg-[#B5332E] px-6 py-[14px] text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] sm:px-8 sm:text-[16px]";

export default function HowWeHelpFinalCta() {
  return (
    <section
      id="how-we-help-cta"
      className="scroll-mt-24 border-b border-authority/10 bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl tracking-[-0.02em] text-authority sm:text-3xl md:text-4xl">
          Not sure where to begin? Start with the test.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-metal sm:text-[18px]">
          Take the Broken Glass Test for a fast read on whether commitment, trust, and accountability
          are holding.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.75] text-metal sm:text-[18px]">
          Or enquire about a Performance Reset if you already know something needs attention.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={site.brokenGlassTestUrl}
            {...brokenGlassTestLinkProps()}
            className={btnPrimary}
          >
            Take the Broken Glass Test
          </a>
          <Link href={site.startConversationPath} className={btnPrimary}>
            Enquire About a Performance Reset
          </Link>
        </div>
      </div>
    </section>
  );
}
