import PerformanceCompounds from "./PerformanceCompounds";
import Link from "next/link";
import { site } from "@/content/site";

const btnPrimary =
  "inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap";

export default function CompoundsSection() {
  return (
    <section
      id="flywheel"
      className="scroll-mt-24 border-t border-authority/10 bg-cloud-50 px-5 py-24 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <div className="max-w-3xl lg:max-w-md xl:max-w-lg lg:shrink-0">
            <h2 className="font-display text-3xl md:text-4xl text-authority tracking-[-0.02em]">
              How performance compounds
            </h2>
            <div className="mt-6 space-y-5 text-lg text-metal leading-relaxed">
              <p className="font-medium text-authority text-xl">Performance is not linear.</p>
              <p>When leadership is stronger, teams perform better.</p>
              <p>When teams perform better, results improve.</p>
              <p>When results improve, reputation strengthens.</p>
              <p>When reputation strengthens, better people want in.</p>
              <p className="text-authority font-medium pt-2">That is how momentum builds.</p>
            </div>
          </div>

          <div className="min-w-0 w-full lg:flex-1 lg:flex lg:justify-end lg:self-start">
            <PerformanceCompounds />
          </div>
        </div>

        <div className="mt-9 max-w-md border-t border-authority/10 pt-8 xl:max-w-lg">
          <Link href={site.startConversationPath} className={btnPrimary}>
            Fix What’s Stuck
          </Link>
        </div>
      </div>
    </section>
  );
}
