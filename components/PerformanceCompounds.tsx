import { flywheelPhases } from "@/content/site";

/**
 * Four clockwise arc segments with a separate hand-drawn arrow layer.
 * ViewBox 720×720, centre 360 — ring radius tuned to sit in the channel between hub and cards.
 */
function FlywheelRingArrows({ className }: { className?: string }) {
  const c = 360;
  const r = 212;
  const top = c - r;
  const right = c + r;
  const bottom = c + r;
  const left = c - r;
  return (
    <svg
      className={className}
      viewBox="0 0 720 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Slightly offset second pass gives a hand-drawn pencil feel */}
      <path
        d={`M ${c} ${top} A ${r} ${r} 0 0 1 ${right} ${c}`}
        className="stroke-rebel"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2.4 1.8"
        opacity={0.94}
      />
      <path
        d={`M ${c + 1.5} ${top + 1} A ${r - 0.8} ${r - 0.8} 0 0 1 ${right - 1} ${c + 1.3}`}
        className="stroke-rebel"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.2 2.8"
        opacity={0.28}
      />
      <path
        d={`M ${right} ${c} A ${r} ${r} 0 0 1 ${c} ${bottom}`}
        className="stroke-rebel"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2.4 1.8"
        opacity={0.94}
      />
      <path
        d={`M ${right - 1.2} ${c + 1.3} A ${r - 0.8} ${r - 0.8} 0 0 1 ${c + 1.2} ${bottom - 1}`}
        className="stroke-rebel"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.2 2.8"
        opacity={0.28}
      />
      <path
        d={`M ${c} ${bottom} A ${r} ${r} 0 0 1 ${left} ${c}`}
        className="stroke-rebel"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2.4 1.8"
        opacity={0.94}
      />
      <path
        d={`M ${c + 1.2} ${bottom - 1.2} A ${r - 0.8} ${r - 0.8} 0 0 1 ${left + 1.2} ${c + 1.2}`}
        className="stroke-rebel"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.2 2.8"
        opacity={0.28}
      />
      <path
        d={`M ${left} ${c} A ${r} ${r} 0 0 1 ${c} ${top}`}
        className="stroke-rebel"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2.4 1.8"
        opacity={0.94}
      />
      <path
        d={`M ${left + 1.3} ${c + 1.1} A ${r - 0.8} ${r - 0.8} 0 0 1 ${c + 1.2} ${top + 1.1}`}
        className="stroke-rebel"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.2 2.8"
        opacity={0.28}
      />
    </svg>
  );
}

function FlywheelSketchArrows({ className }: { className?: string }) {
  const c = 360;
  const r = 212;
  const angles = [45, 135, 225, 315];

  return (
    <svg
      className={className}
      viewBox="0 0 720 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {angles.map((deg) => {
        const theta = (deg * Math.PI) / 180;
        const x = c + r * Math.cos(theta);
        const y = c + r * Math.sin(theta);
        const tangentRotation = deg + 90;

        return (
          <g key={deg} transform={`translate(${x} ${y}) rotate(${tangentRotation})`}>
            <path
              d="M -8 -6 L 0 0 L -8 6"
              className="stroke-rebel"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.95}
            />
            <g transform="translate(0.8 0.6)">
              <path
                d="M -8 -6 L 0 0 L -8 6"
                className="stroke-rebel"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.35}
              />
            </g>
          </g>
        );
      })}
    </svg>
  );
}

function PhaseCard({
  phase,
  index,
  compact,
}: {
  phase: (typeof flywheelPhases)[number];
  index: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-sm border border-authority/15 bg-white shadow-sm text-center flex flex-col ${
        compact ? "p-5" : "p-6"
      }`}
    >
      <span className="text-xs font-bold text-rebel mb-2 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3
        className={`font-display text-authority leading-tight mb-2 ${
          compact ? "text-base" : "text-lg"
        }`}
      >
        {phase.label}
      </h3>
      <p className={`text-metal leading-relaxed flex-1 ${compact ? "text-xs" : "text-sm"}`}>
        {phase.detail}
      </p>
    </div>
  );
}

/** Distance from hub to card centre — wider ring so cards do not crowd the centre */
const RING_R = 222;
const FLYWHEEL_CARD_W = 176;

export default function PerformanceCompounds() {
  const cycleLabel =
    "Performance flywheel cycle: step 1 Leadership sets the standard, step 2 Culture drives behaviour, step 3 Teams deliver outcomes, step 4 Reputation attracts better talent; then talent raises the standard for leadership and the cycle continues.";

  return (
    <div className="mt-0 lg:mt-0 w-full">
      {/* Large screens: circular flywheel — single transform chain so ring + cards share one centre */}
      <div
        className="hidden lg:block relative mx-auto w-full max-w-[min(100%,720px)] aspect-square [isolation:isolate]"
        role="img"
        aria-label={cycleLabel}
      >
        <FlywheelRingArrows className="absolute inset-0 h-full w-full pointer-events-none overflow-visible" />
        <FlywheelSketchArrows className="absolute inset-0 z-[2] h-full w-full pointer-events-none overflow-visible" />
        {flywheelPhases.map((phase, i) => (
          <div
            key={phase.label}
            className="absolute left-1/2 top-1/2 w-0 h-0"
            aria-hidden
          >
            <div
              className="will-change-transform"
              style={{
                width: FLYWHEEL_CARD_W,
                transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-${RING_R}px) rotate(${-i * 90}deg)`,
                transformOrigin: "center center",
              }}
            >
              <PhaseCard phase={phase} index={i} compact />
            </div>
          </div>
        ))}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-rebel/30 text-4xl font-light select-none"
          aria-hidden
        >
          ↻
        </div>
      </div>

      {/* Tablet: 2×2 + cycle hint (not a straight timeline) */}
      <div className="hidden md:grid lg:hidden grid-cols-2 max-w-3xl mx-auto gap-4">
        {flywheelPhases.map((phase, i) => (
          <PhaseCard key={phase.label} phase={phase} index={i} />
        ))}
        <div className="col-span-2 flex flex-col items-center justify-center py-4 gap-2 border-t border-b border-dashed border-authority/15">
          <span className="text-rebel text-2xl" aria-hidden>
            ↻
          </span>
          <p className="text-sm text-center text-metal max-w-md">
            The same loop — leadership → culture → teams → reputation → stronger talent.
          </p>
        </div>
      </div>

      <p className="hidden md:block lg:hidden text-center mt-8 text-sm font-medium text-metal">
        <span className="inline-flex items-center gap-2">
          <span className="text-rebel" aria-hidden>
            ↻
          </span>
          Talent raises the standard for leadership — and the cycle continues.
        </span>
      </p>

      {/* Mobile: vertical stack; ↻ suggests continuation, not a single downward pipeline */}
      <div className="md:hidden max-w-md mx-auto">
        <ol className="space-y-0 list-none p-0">
          {flywheelPhases.map((phase, i) => (
            <li key={phase.label}>
              <PhaseCard phase={phase} index={i} />
              {i < flywheelPhases.length - 1 && (
                <div className="flex justify-center py-3 text-rebel" aria-hidden>
                  <span className="text-xl leading-none">↻</span>
                </div>
              )}
            </li>
          ))}
        </ol>
        <p className="text-center mt-8 text-sm text-metal">
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="text-rebel" aria-hidden>
              ↻
            </span>
            Talent raises the standard for leadership — and the cycle continues.
          </span>
        </p>
      </div>
    </div>
  );
}
