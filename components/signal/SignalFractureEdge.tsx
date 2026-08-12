"use client";

import { useEffect, useRef, useState } from "react";

export default function SignalFractureEdge() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 -right-8 w-[min(42vw,320px)] transition-opacity duration-[600ms] ease-out motion-reduce:transition-none lg:-right-12 xl:-right-16 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 320 720"
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path
          d="M280 40c-18 88-8 176 24 260 22 58 18 122-12 178-24 44-38 92-28 142 8 38 4 78-16 112"
          stroke="#d9bc81"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.12"
        />
        <path
          d="M300 120l-48 36 28 52-62 44 38 68-54 58"
          stroke="#B5332E"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.1"
        />
        <path
          d="M312 280c-42 24-58 68-44 118 10 36 6 74-18 104-16 20-28 44-24 72"
          stroke="#d9bc81"
          strokeWidth="1.15"
          strokeLinecap="round"
          opacity="0.09"
        />
        <path
          d="M288 420 248 468l36 42-58 34 22 56-46 48"
          stroke="#B5332E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.11"
        />
        <path
          d="M304 560c-34 28-52 64-40 108 8 30 2 62-20 86"
          stroke="#d9bc81"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.1"
        />
        <path
          d="M296 640 268 676M308 520 276 548M318 360 286 388"
          stroke="#B5332E"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.08"
        />
      </svg>
    </div>
  );
}
