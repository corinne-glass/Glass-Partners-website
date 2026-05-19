import Link from "next/link";
import { site } from "@/content/site";

export default function PerformanceReset() {
  return (
    <section
      id="performance-reset"
      className="scroll-mt-24 py-24 px-5 sm:px-6 bg-white border-t border-authority/10"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-authority mb-6 tracking-[-0.02em]">
          Performance Reset
        </h2>
        <p className="text-lg md:text-[1.2rem] text-metal leading-relaxed mb-8">
          For businesses that know something is off, but need to understand where performance is
          really breaking down.
        </p>
        <ul className="space-y-3 text-metal leading-relaxed mb-10">
          <li className="flex gap-3">
            <span className="text-rebel shrink-0">•</span>
            <span>Uncover what is slowing performance down</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rebel shrink-0">•</span>
            <span>Identify where the gaps exist</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rebel shrink-0">•</span>
            <span>Get clarity on what needs to change next</span>
          </li>
        </ul>
        <Link
          href={site.startConversationPath}
          className="inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] hover:bg-[#A6342E] transition-colors whitespace-nowrap"
        >
          Enquire About a Performance Reset
        </Link>
      </div>
    </section>
  );
}
