import Link from "next/link";
import NewsletterSubscribe from "./NewsletterSubscribe";

export default function Newsletter() {
  const baseCardClass =
    "group w-full rounded-[6px] border border-[#142033]/18 bg-white px-6 py-5 text-left transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[1px] hover:border-[#142033]/30 hover:shadow-[0_14px_30px_-22px_rgba(15,23,42,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142033]/30";
  const arrowClass =
    "ml-auto text-[#142033]/55 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1";

  return (
    <section
      id="newsletter"
      className="scroll-mt-24 border-t border-[#142033]/12 bg-[#f4f1e8] px-5 py-20 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7d6c48]">Connect</p>
          <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.025em] text-[#142033] sm:text-[44px]">
            Sharp thinking for leaders building businesses that need to perform.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-[#334155]">
            Practical insight on leadership, scale, people systems, AI, execution, and the uncomfortable truths
            behind business growth.
          </p>
          <p className="mt-5 text-[15px] leading-[1.7] text-[#475569]">
            Explore the thinking, listen to the conversations, or bring Corinne into the room.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3.5">
          <NewsletterSubscribe className={baseCardClass}>
            <span className="flex items-start gap-4">
              <span>
                <span className="block font-display text-[24px] leading-[1.1] tracking-[-0.02em] text-[#142033]">
                  Join the Newsletter
                </span>
                <span className="mt-2 block text-[14px] leading-[1.6] text-[#475569]">
                  Practical thinking, sharper takes and the occasional myth-busting view on what actually helps
                  businesses perform.
                </span>
              </span>
              <span className={arrowClass} aria-hidden>
                →
              </span>
            </span>
          </NewsletterSubscribe>

          <Link
            href="/podcast"
            className={baseCardClass}
          >
            <span className="flex items-start gap-4">
              <span>
                <span className="block font-display text-[24px] leading-[1.1] tracking-[-0.02em] text-[#142033]">
                  Listen to The Glass Signal
                </span>
                <span className="mt-2 block text-[14px] leading-[1.6] text-[#475569]">
                  For people with talent and the courage to use it.
                </span>
              </span>
              <span className={arrowClass} aria-hidden>
                →
              </span>
            </span>
          </Link>

          <Link
            href="/speaking"
            className={`${baseCardClass} border-[#B5332E]/35 shadow-[inset_3px_0_0_0_rgba(181,51,46,0.72)] hover:border-[#B5332E]/55`}
          >
            <span className="flex items-start gap-4">
              <span>
                <span className="block font-display text-[24px] leading-[1.1] tracking-[-0.02em] text-[#142033]">
                  Bring Corinne Into the Room
                </span>
                <span className="mt-2 block text-[14px] leading-[1.6] text-[#475569]">
                  Sharp, practical talks on leadership, scale and the people system behind performance.
                </span>
              </span>
              <span
                className="ml-auto text-[#B5332E] transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
