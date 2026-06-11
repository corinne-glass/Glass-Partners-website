import Link from "next/link";

const btnPrimary =
  "inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap";

const btnSecondary =
  "inline-flex items-center justify-center rounded-[4px] border border-authority/25 bg-white px-[22px] py-[15px] text-[16px] font-semibold text-authority transition-colors hover:bg-cloud-50 whitespace-nowrap";

const tileClass =
  "flex h-full flex-col rounded-[6px] border border-authority/12 bg-cloud-50 p-7 shadow-[0_18px_34px_-14px_rgba(14,26,43,0.28)] sm:p-8";

const resetUsefulFor = [
  "growth friction",
  "leadership misalignment",
  "hiring and retention issues",
  "unclear accountability",
  "AI adoption risk",
  "teams working hard but not moving cleanly",
] as const;

export default function HowGlassPartnersWorks() {
  return (
    <section
      id="how-we-work"
      className="scroll-mt-24 border-t border-authority/10 bg-white px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl lg:text-[2.5rem]">
          How Glass Partners works
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className={tileClass}>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-authority md:text-[1.65rem]">
              The Performance Reset
            </h3>
            <p className="mt-5 text-[16px] leading-relaxed text-metal md:text-[17px]">
              For businesses that need to diagnose the drag, align the leadership team and move
              quickly on the levers that matter.
            </p>
            <p className="mt-6 text-[14px] font-semibold uppercase tracking-[0.08em] text-authority/80">
              Useful for:
            </p>
            <ul className="mt-3 space-y-2">
              {resetUsefulFor.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-metal">
                  <span className="mt-[0.35em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B5332E]/90" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex-1 pt-2">
              <Link href="/fy27-execution-reset" className={btnPrimary}>
                Book a Performance Reset
              </Link>
            </div>
          </article>

          <article className={tileClass}>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-authority md:text-[1.65rem]">
              The Strategic Partnership
            </h3>
            <p className="mt-5 text-[16px] leading-relaxed text-metal md:text-[17px]">
              For businesses that need ongoing strategic partnership and operational expertise across
              leadership, capability, operating rhythms, employee signalling and the people system
              behind performance.
            </p>
            <p className="mt-5 flex-1 text-[16px] leading-relaxed text-metal md:text-[17px]">
              This is not consulting theatre. It is practical, embedded work designed to identify
              the right lever, pull it properly and keep the business moving.
            </p>
            <div className="mt-8 pt-2">
              <Link href="/products" className={btnSecondary}>
                Explore Strategic Partnership
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
