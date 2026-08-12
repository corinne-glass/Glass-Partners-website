import { signal } from "@/content/signal";

export default function SignalFiveFracturesPanel() {
  const { fractures } = signal.reveals;

  return (
    <aside className="relative flex h-auto min-h-0 flex-col overflow-hidden bg-[#efe9dc] px-7 pb-8 pt-8 sm:px-9 sm:pb-9 sm:pt-9 lg:h-full lg:px-10 lg:pb-8 lg:pt-9">
      <div className="flex min-h-0 flex-1 flex-col">
        {/* Top zone */}
        <div className="shrink-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">
            {fractures.heading}
          </p>
          <p className="mt-3 max-w-md text-[16px] leading-[1.55] text-[#0E1A2B]/85 lg:text-[17px]">
            {fractures.intro}
          </p>
        </div>

        {/* Middle zone — five equal rows */}
        <ol className="mt-5 flex min-h-0 flex-1 list-none flex-col p-0 lg:mt-6 lg:grid lg:grid-rows-5">
          {fractures.items.map((item, index) => (
            <li
              key={item.name}
              className={`grid min-h-0 grid-cols-[auto_1fr] content-center gap-x-4 border-[#d9bc81]/45 py-3.5 lg:gap-x-5 lg:py-0 ${
                index < fractures.items.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="pt-0.5 text-[12px] font-semibold tracking-[0.08em] text-[#B5332E] lg:text-[13px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[22px] leading-[1.15] tracking-[-0.02em] text-[#0E1A2B] lg:truncate lg:text-[24px]">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-[15px] leading-[1.4] text-[#0E1A2B]/8 lg:line-clamp-2 lg:text-[16px] lg:leading-[1.4]">
                  {item.explanation}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Bottom zone */}
        <p className="mt-7 shrink-0 border-l-2 border-[#B5332E] pl-4 font-display text-[20px] leading-[1.35] tracking-[-0.02em] text-[#0E1A2B] lg:mt-8 lg:pl-5 lg:text-[22px]">
          {fractures.closing}
        </p>
      </div>
    </aside>
  );
}
