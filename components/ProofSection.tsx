import Link from "next/link";
import { site } from "@/content/site";

const btnPrimary =
  "inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap";

const pillarClass =
  "rounded-sm border border-authority/10 bg-white p-7 shadow-[0_14px_32px_-16px_rgba(15,23,42,0.22)] transition-shadow duration-300 hover:shadow-md hover:shadow-[0_16px_36px_-10px_rgba(15,23,42,0.16)]";

export default function ProofSection() {
  return (
    <section
      id="proof"
      className="scroll-mt-24 border-t border-authority/10 bg-white px-5 py-24 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-sm border border-authority/10 bg-white px-6 py-10 md:px-10 md:py-12 shadow-[0_28px_70px_-18px_rgba(15,23,42,0.12)] ring-1 ring-[#0E1A2B]/[0.04]">
          <h2 className="font-display text-3xl md:text-[2.25rem] lg:text-[2.5rem] text-authority mb-8 max-w-4xl tracking-[-0.02em] leading-tight">
            Built for businesses that need more than advice
          </h2>
          <div className="max-w-4xl space-y-6 text-lg text-metal leading-relaxed mb-10 md:mb-11">
            <p>
              Glass Partners is not built to sit on the sidelines. We step into what is stuck,
              tell the truth about what is getting in the way, and help fix it in a way that
              strengthens performance for the long term.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-8 md:mb-9">
            <div className={pillarClass}>
              <h3 className="font-display text-lg font-semibold text-authority mb-3">
                20+ years of leadership and operational experience
              </h3>
              <p className="text-[15px] text-metal leading-relaxed">
                Experience across executive leadership, product and technology, commercial
                operations, transformation, leadership development, and branding.
              </p>
            </div>
            <div className={pillarClass}>
              <h3 className="font-display text-lg font-semibold text-authority mb-3">
                Operator-led
              </h3>
              <p className="text-[15px] text-metal leading-relaxed">
                Not polished analysis with no follow-through. Practical execution with commercial
                accountability.
              </p>
            </div>
            <div className={pillarClass}>
              <h3 className="font-display text-lg font-semibold text-authority mb-3">
                Built to fix what is stuck
              </h3>
              <p className="text-[15px] text-metal leading-relaxed">
                Structured to step into pressure points, remove drag, and restore momentum where
                performance is breaking down.
              </p>
            </div>
            <div className={pillarClass}>
              <h3 className="font-display text-lg font-semibold text-authority mb-3">
                Commercially grounded across the full system
              </h3>
              <p className="text-[15px] text-metal leading-relaxed">
                Performance, people, growth, and execution treated as one operating system, not
                separate conversations.
              </p>
            </div>
          </div>

          <div className="max-w-3xl border-l-2 border-rebel/55 pl-5">
            <div className="flex flex-col gap-4">
              <p className="text-xl md:text-[1.45rem] font-medium text-authority leading-snug tracking-[-0.01em]">
                Operator energy. Clear standards. Stronger execution.
              </p>
              <Link href={site.startConversationPath} className={`${btnPrimary} self-start`}>
                Fix What’s Stuck
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
