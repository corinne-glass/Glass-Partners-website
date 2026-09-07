"use client";

import Image from "next/image";

export default function SignalReportReportVisual({
  images,
  activeIndex,
  className = "",
}: {
  images: readonly string[];
  activeIndex: number;
  className?: string;
}) {
  const safeIndex = Math.min(Math.max(activeIndex, 0), images.length - 1);

  return (
    <div
      className={`relative aspect-[4/5] w-full max-w-[400px] select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 overflow-hidden rounded-[2px] border border-[#0E1A2B]/10 bg-white shadow-[0_16px_40px_rgba(14,26,43,0.12)] transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
            index === safeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          <Image
            src={src}
            alt=""
            width={400}
            height={520}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 768px) 90vw, 400px"
            draggable={false}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
