export default function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="scroll-mt-24 border-t border-white/10 bg-[#0E1A2B] px-5 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-4xl font-display text-3xl tracking-[-0.02em] text-[#F7F5F2] md:text-4xl lg:text-[2.5rem]">
          As AI becomes the new norm, the human side of business has to get better.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-[6px] border border-white/12 bg-white/[0.04] p-6 shadow-[0_12px_28px_-16px_rgba(181,51,46,0.75)]">
            <h3 className="font-display text-[26px] leading-tight tracking-[-0.02em] text-[#F7F5F2]">Curiosity</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[rgba(247,245,242,0.82)]">
              AI answers. People still need to ask the right questions and seek real understanding.
            </p>
          </article>
          <article className="rounded-[6px] border border-white/12 bg-white/[0.04] p-6 shadow-[0_12px_28px_-16px_rgba(181,51,46,0.75)]">
            <h3 className="font-display text-[26px] leading-tight tracking-[-0.02em] text-[#F7F5F2]">
              People intelligence
            </h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[rgba(247,245,242,0.82)]">
              Technology does not replace trust, communication, accountability, or the ability to
              get the best out of people.
            </p>
          </article>
          <article className="rounded-[6px] border border-white/12 bg-white/[0.04] p-6 shadow-[0_12px_28px_-16px_rgba(181,51,46,0.75)]">
            <h3 className="font-display text-[26px] leading-tight tracking-[-0.02em] text-[#F7F5F2]">Discernment</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[rgba(247,245,242,0.82)]">
              AI can process fast. People still need to explore, interpret, and decide what matters.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
