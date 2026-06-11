const leftColumn = [
  "Your expectations are not being met",
  "Things are reactive",
  "Everyone is busy, but nothing is really moving",
] as const;

const rightColumn = [
  "Too much still depends on you",
  "Accountability is inconsistent",
  "The urgency is not shared",
] as const;

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-0">
      {items.map((line) => (
        <li
          key={line}
          className="flex gap-2.5 border-b border-authority/10 py-2.5 text-[16px] leading-snug text-authority sm:py-3 sm:text-[17px]"
        >
          <span className="mt-[0.32em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B5332E]/90" aria-hidden />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WhyWeExist() {
  return (
    <section
      id="problem"
      className="scroll-mt-24 border-t border-authority/10 bg-[#fcfcfa] px-5 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[52rem] font-display text-[1.85rem] font-normal leading-[1.1] tracking-[-0.02em] text-authority sm:text-[2.1rem] md:text-[2.35rem] lg:text-[2.5rem]">
          You know this should be working better.
        </h2>

        <p className="mt-3 max-w-2xl text-[16px] leading-snug text-authority/75 sm:mt-4 sm:text-[17px] sm:leading-relaxed">
          The pressure shows up first in the day-to-day.
        </p>

        <div className="mt-6 grid gap-0 sm:mt-7 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-14">
          <BulletList items={leftColumn} />
          <BulletList items={rightColumn} />
        </div>

        <div className="mt-8 border-l-2 border-[#B5332E]/50 pl-5 sm:mt-9 sm:pl-6 md:mt-10">
          <p className="max-w-3xl text-[1.25rem] font-medium leading-[1.4] tracking-[-0.015em] text-[#B5332E] sm:text-[1.4rem] md:text-[1.5rem]">
            Growth does not create the weakness. It exposes it.
          </p>
        </div>
      </div>
    </section>
  );
}
