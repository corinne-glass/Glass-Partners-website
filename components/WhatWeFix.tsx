const cardClass =
  "rounded-[6px] border border-authority/12 bg-cloud-50 p-7 shadow-[0_18px_34px_-14px_rgba(14,26,43,0.28)]";

export default function WhatWeFix() {
  return (
    <section id="what-we-fix" className="scroll-mt-24 py-20 px-5 sm:px-6 bg-white border-t border-authority/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-authority tracking-[-0.02em]">
          What we strengthen
        </h2>
        <p className="mt-4 mb-10 text-lg md:text-[1.2rem] text-metal leading-relaxed">
          The four pillars that drive performance.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className={cardClass}>
            <h3 className="font-display text-xl font-semibold text-authority mb-3">Leadership</h3>
            <p className="text-[15px] text-metal leading-relaxed">
              Clear judgement, stronger communication, courageous conversations, and higher standards
              at every level.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className="font-display text-xl font-semibold text-authority mb-3">Accountability</h3>
            <p className="text-[15px] text-metal leading-relaxed">
              Clear ownership, consistent follow-through, and consequences that keep performance on
              track.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className="font-display text-xl font-semibold text-authority mb-3">Clarity</h3>
            <p className="text-[15px] text-metal leading-relaxed">
              Clear expectations, priorities, and direction so people know what matters and what comes
              next.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className="font-display text-xl font-semibold text-authority mb-3">Brand</h3>
            <p className="text-[15px] text-metal leading-relaxed">
              How the business communicates internally and externally, reputation, employer brand,
              and the talent it attracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
