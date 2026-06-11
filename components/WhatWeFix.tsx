const pillarClass =
  "flex min-h-full flex-col rounded-[6px] border border-authority/12 bg-cloud-50 px-4 py-7 shadow-[0_18px_34px_-14px_rgba(14,26,43,0.28)] sm:px-5 sm:py-8 lg:px-4 lg:py-9 xl:px-5";

const pillars = [
  {
    title: "Leadership",
    body: "The judgement, standards and conversations that determine how people behave when pressure rises.",
  },
  {
    title: "Clarity",
    body: "The priorities, expectations and decision rights that stop people guessing, duplicating work or inventing their own version of the plan.",
  },
  {
    title: "Capability",
    body: "The roles, skills and team structure needed for the business you are becoming, not just the business you are today.",
  },
  {
    title: "Operating Rhythm",
    body: "The cadence, systems and follow-through that keep work moving, decisions visible and accountability real.",
  },
  {
    title: "Signal",
    body: "The internal and external message your business sends through how it leads, communicates, treats people and attracts talent.",
  },
] as const;

export default function WhatWeFix() {
  return (
    <section id="what-we-fix" className="scroll-mt-24 border-t border-authority/10 bg-white px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl">
          What we strengthen
        </h2>
        <p className="mt-4 mb-10 text-lg leading-relaxed text-metal md:text-[1.2rem]">
          The people system behind performance.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className={pillarClass}>
              <h3 className="font-display text-lg font-semibold leading-tight text-authority sm:text-xl lg:text-[1.05rem] xl:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-metal sm:text-[15px] lg:text-[13px] lg:leading-[1.65] xl:text-[14px]">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
