"use client";

import Image from "next/image";
import { useId, useState, type KeyboardEvent } from "react";
import { signal } from "@/content/signal";

type MotifKind = "independentVoice" | "hiddenCost" | "employerBrand" | "action";

type Tile = {
  front: string;
  reverseHeading: string;
  reverseCopy: readonly string[];
  motif: MotifKind;
};

const TILE_IMAGES: Record<MotifKind, string> = {
  independentVoice: "/images/signal/why-independent-voice.png",
  hiddenCost: "/images/signal/why-hidden-cost.png",
  employerBrand: "/images/signal/why-employer-brand.png",
  action: "/images/signal/why-action.png",
};

function TileIllustration({
  motif,
  className = "",
}: {
  motif: MotifKind;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <Image
        src={TILE_IMAGES[motif]}
        alt=""
        fill
        sizes="(max-width: 768px) 70vw, 280px"
        className="object-contain object-center"
        aria-hidden
      />
    </div>
  );
}

function FlipTile({
  tile,
  index,
  isOpen,
  onToggle,
}: {
  tile: Tile;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  const id = useId();
  const frontId = `${id}-front`;
  const backId = `${id}-back`;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle(index);
    }
  };

  return (
    <div className="[perspective:1200px]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={backId}
        onClick={() => onToggle(index)}
        onKeyDown={handleKeyDown}
        className="group relative block h-full min-h-[300px] w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5332E] sm:min-h-[320px] lg:min-h-[340px] xl:min-h-[360px]"
      >
        <div
          className={`relative h-full min-h-[300px] transition-transform duration-[400ms] ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] motion-reduce:transition-none sm:min-h-[320px] lg:min-h-[340px] xl:min-h-[360px] ${
            isOpen ? "[transform:rotateY(180deg)] motion-reduce:[transform:none]" : ""
          }`}
        >
          {/* Front */}
          <div
            id={frontId}
            className={`absolute inset-0 overflow-hidden rounded-[4px] border border-[#d9bc81]/40 bg-[#101a2a] px-9 py-9 [backface-visibility:hidden] motion-reduce:[transform:none] sm:px-10 sm:py-10 ${
              isOpen ? "motion-reduce:hidden" : ""
            }`}
          >
            <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between">
              <p className="w-[52%] max-w-[320px] font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#F7F5F2] sm:text-[30px] lg:text-[32px]">
                {tile.front}
              </p>
              <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#d9bc81]">
                WHY IT MATTERS →
              </span>
            </div>

            <div className="pointer-events-none absolute inset-y-[8%] right-0 flex w-[44%] items-center sm:w-[46%]">
              <TileIllustration motif={tile.motif} />
            </div>
          </div>

          {/* Back */}
          <div
            id={backId}
            className={`absolute inset-0 overflow-hidden rounded-[4px] border border-[#B5332E]/55 bg-[#f4f1e8] px-9 py-9 [backface-visibility:hidden] [transform:rotateY(180deg)] motion-reduce:[transform:none] sm:px-10 sm:py-10 ${
              isOpen ? "" : "motion-reduce:hidden"
            }`}
          >
            <div className="flex h-full min-h-[260px] flex-col items-center justify-center text-center">
              <h3 className="max-w-[34rem] font-display text-[26px] leading-[1.12] tracking-[-0.02em] text-[#0E1A2B] sm:text-[28px] lg:text-[30px]">
                {tile.reverseHeading}
              </h3>
              <p className="mt-5 max-w-[34rem] text-[16px] leading-[1.62] text-[#0E1A2B] sm:text-[17px]">
                {tile.reverseCopy[0]}
              </p>
              {tile.reverseCopy[1] ? (
                <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.62] text-[#0E1A2B] sm:text-[17px]">
                  {tile.reverseCopy[1]}
                </p>
              ) : null}
              <span className="mt-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7d6c48]">
                ← BACK
              </span>
            </div>
          </div>
        </div>

        <span className="sr-only">
          Differentiator {index + 1}: {tile.front}. {tile.reverseHeading}. {tile.reverseCopy.join(" ")}
        </span>
      </button>
    </div>
  );
}

export default function SignalWhyTiles() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={signal.why.id} className="scroll-mt-24 bg-[#0E1A2B] px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1220px]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bc81]">{signal.why.eyebrow}</p>
        <h2 className="mt-4 max-w-4xl font-display text-[36px] leading-[1.08] tracking-[-0.02em] text-[#F7F5F2] sm:text-[46px]">
          {signal.why.h2}
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-[rgba(247,245,242,0.78)]">{signal.why.intro}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {(signal.why.tiles as readonly Tile[]).map((tile, index) => (
            <FlipTile
              key={tile.front}
              tile={tile}
              index={index}
              isOpen={openIndex === index}
              onToggle={(i) => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
