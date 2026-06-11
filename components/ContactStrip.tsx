import Link from "next/link";
import { site, brokenGlassTestLinkProps } from "@/content/site";

export default function ContactStrip() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 px-5 sm:px-6 bg-[#0E1A2B] border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-6 tracking-[-0.02em]">
          If performance is stuck, something is off.
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[rgba(255,255,255,0.9)]">
          Glass Partners helps businesses scale by strengthening the people system that drives
          performance.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <Link
            href={site.startConversationPath}
            className="inline-flex items-center justify-center rounded-[4px] border border-white/90 px-10 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Start a Conversation
          </Link>
          <Link
            href={site.brokenGlassTestUrl}
            {...brokenGlassTestLinkProps()}
            className="inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-10 py-4 text-base font-semibold text-[#F7F5F2] hover:bg-[#A6342E] transition-colors shadow-sm"
          >
            Take the Broken Glass Test
          </Link>
        </div>
      </div>
    </section>
  );
}
