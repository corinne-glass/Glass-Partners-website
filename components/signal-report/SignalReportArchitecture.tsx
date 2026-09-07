"use client";

import { signalReport } from "@/content/signal-report";
import { prefersReducedMotion } from "@/lib/motion";
import { useEffect, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function ArchitectureStage({
  value,
  label,
  emphasis,
}: {
  value: number;
  label: string;
  emphasis: number;
}) {
  const opacity = 0.3 + emphasis * 0.7;

  return (
    <div
      className="text-center transition-[opacity,transform] duration-1000 ease-in-out motion-reduce:transition-none"
      style={{ opacity, transform: `translateY(${(1 - emphasis) * 4}px)` }}
    >
      <p
        className="font-display text-[clamp(3.25rem,9vw,6rem)] font-semibold leading-none tracking-[-0.04em] transition-colors duration-1000 ease-in-out"
        style={{ color: emphasis > 0.55 ? "#B5332E" : "rgba(247, 245, 242, 0.35)" }}
      >
        {value}
      </p>
      <p
        className="mt-2.5 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-1000 ease-in-out"
        style={{ color: emphasis > 0.55 ? "#F7F5F2" : "rgba(247, 245, 242, 0.4)" }}
      >
        {label}
      </p>
    </div>
  );
}

function Connector({ progress }: { progress: number }) {
  const emphasis = smoothstep(0.15, 0.85, progress);

  return (
    <div
      className="flex items-center justify-center motion-reduce:opacity-100"
      style={{ opacity: 0.25 + emphasis * 0.75 }}
      aria-hidden
    >
      <div
        className="hidden lg:block h-px transition-all duration-1000 ease-in-out motion-reduce:transition-none"
        style={{
          width: `${24 + emphasis * 32}px`,
          backgroundColor: emphasis > 0.4 ? "#B5332E" : "rgba(247, 245, 242, 0.15)",
        }}
      />
      <span className="lg:hidden text-[20px] leading-none text-[#B5332E]">↓</span>
      <span className="hidden lg:inline text-[15px] text-[#B5332E]">→</span>
    </div>
  );
}

export default function SignalReportArchitecture() {
  const { architecture } = signalReport.value;
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setProgress(1);
      return;
    }

    const updateProgress = () => {
      const rect = node.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const start = viewHeight * 0.82;
      const end = viewHeight * 0.18;
      const raw = (start - rect.top) / (start - end + rect.height * 0.55);
      setProgress(clamp(raw, 0, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const stageOneEmphasis = 1 - smoothstep(0.28, 0.48, progress);
  const stageTwoEmphasis =
    smoothstep(0.22, 0.42, progress) * (1 - smoothstep(0.58, 0.78, progress));
  const stageThreeEmphasis = smoothstep(0.52, 0.72, progress);

  const driversOpacity = 1 - smoothstep(0.38, 0.52, progress);
  const fracturesOpacity =
    smoothstep(0.34, 0.48, progress) * (1 - smoothstep(0.68, 0.82, progress));

  return (
    <div ref={containerRef} className="py-8 sm:py-10" aria-label="SIGNAL diagnostic architecture">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8 xl:gap-10">
        <ArchitectureStage
          value={architecture.stages[0].value}
          label={architecture.stages[0].label}
          emphasis={stageOneEmphasis}
        />
        <Connector progress={progress} />
        <ArchitectureStage
          value={architecture.stages[1].value}
          label={architecture.stages[1].label}
          emphasis={stageTwoEmphasis}
        />
        <Connector progress={progress} />
        <ArchitectureStage
          value={architecture.stages[2].value}
          label={architecture.stages[2].label}
          emphasis={stageThreeEmphasis}
        />
      </div>

      <div className="relative mt-8 min-h-[108px] sm:min-h-[96px]">
        <ul
          className="absolute inset-x-0 top-0 flex flex-wrap justify-center gap-x-5 gap-y-2.5 transition-[opacity,transform] duration-1000 ease-in-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none"
          style={{
            opacity: driversOpacity,
            transform: `translateY(${(1 - driversOpacity) * 6}px)`,
            pointerEvents: driversOpacity < 0.05 ? "none" : "auto",
          }}
          aria-hidden={driversOpacity < 0.05}
        >
          {architecture.drivers.map((driver) => (
            <li key={driver} className="text-[13px] sm:text-[14px] text-[#c9c2b3]">
              {driver}
            </li>
          ))}
        </ul>

        <div
          className="absolute inset-x-0 top-0 transition-[opacity,transform] duration-1000 ease-in-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none"
          style={{
            opacity: fracturesOpacity,
            transform: `translateY(${(1 - fracturesOpacity) * 6}px)`,
            pointerEvents: fracturesOpacity < 0.05 ? "none" : "auto",
          }}
          aria-hidden={fracturesOpacity < 0.05}
        >
          <p className="mb-3 text-center text-[14px] sm:text-[15px] leading-snug text-[#c9c2b3]">
            {architecture.fracturesIntro}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2.5">
            {architecture.fractures.map((fracture) => (
              <li key={fracture} className="text-[13px] sm:text-[14px] font-medium text-[#F7F5F2]/85">
                {fracture}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
