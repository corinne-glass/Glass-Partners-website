"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const LAYOUT = [
  { src: 0, className: "left-0 top-0 z-30 w-[70%] -rotate-[2deg]", delay: "120ms" },
  { src: 1, className: "left-[20%] top-[10%] z-20 w-[66%] rotate-[1.5deg]", delay: "240ms" },
  { src: 2, className: "left-[34%] top-[18%] z-10 w-[60%] rotate-[2.5deg]", delay: "360ms" },
] as const;

export default function SignalReportAnimatedMockup({
  images,
}: {
  images: readonly string[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = prefersReducedMotion();
    setMounted(true);
  }, []);

  useEffect(() => {
    if (reducedMotion.current) return;

    const onScroll = () => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const progress = 1 - Math.min(Math.max((rect.top + rect.height * 0.5) / viewHeight, 0), 1);
      setParallax((prev) => {
        const y = (progress - 0.5) * 8;
        return prev.y === y ? prev : { ...prev, y };
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reducedMotion.current || typeof window === "undefined") return;

    const onMove = (event: MouseEvent) => {
      const node = containerRef.current;
      if (!node || window.innerWidth < 1024) return;
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = ((event.clientX - cx) / rect.width) * 6;
      const y = ((event.clientY - cy) / rect.height) * 4;
      setParallax({ x, y });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[4/5] w-full max-w-[380px] select-none pointer-events-none motion-reduce:transform-none"
      style={{
        transform: mounted && !reducedMotion.current
          ? `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
          : undefined,
        transition: "transform 0.4s ease-out",
      }}
      aria-hidden="true"
    >
      {LAYOUT.map((item, index) => {
        const src = images[item.src];
        if (!src) return null;
        return (
          <div
            key={index}
            className={`absolute overflow-hidden rounded-[2px] border border-[#0E1A2B]/10 bg-white shadow-[0_16px_40px_rgba(14,26,43,0.14)] ${item.className} ${
              mounted ? "sr-fade-up motion-reduce:opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: item.delay }}
          >
            <Image
              src={src}
              alt=""
              width={400}
              height={520}
              className="h-auto w-full object-cover object-top"
              sizes="(max-width: 768px) 280px, 360px"
              draggable={false}
              priority={index === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
