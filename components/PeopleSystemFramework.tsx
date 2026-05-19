/**
 * People System wheel — six equal annulus sectors as opposing pairs:
 * Leadership Development ↔ Accountability | Employer Brand ↔ Workforce Planning | Clarity ↔ Systems & Processes.
 * Positions clockwise from 12 o'clock: LD, EB, Clarity, Accountability, WP, Systems.
 * SVG geometry: 60° wedges, shared hub; subtle light dividers; centre hub navy.
 */

const cx = 240;
const cy = 240;
const R_out = 200;
const R_hub = 78;

const navy = "#0E1A2B";
const red = "#B5332E";
/** Neutral stone/beige — shared across non-polar segments */
const stone = "#e5e2d8";
const cream = "#F7F5F2";
const ink = "#0E1A2B";

type SegmentSpec = {
  line1: string;
  line2?: string;
  fill: string;
  /** Light text (cream) on navy or red */
  lightType: boolean;
};

/**
 * Order matches geometry: i=0 at 12 o'clock, +60° per step clockwise.
 * Pairs: index (0,3), (1,4), (2,5) — opposite across the wheel.
 */
const segments: SegmentSpec[] = [
  { line1: "Leadership", line2: "Development", fill: navy, lightType: true },
  { line1: "Employer", line2: "Brand", fill: stone, lightType: false },
  { line1: "Clarity", fill: stone, lightType: false },
  { line1: "Accountability", fill: red, lightType: true },
  { line1: "Workforce", line2: "Planning", fill: stone, lightType: false },
  { line1: "Systems &", line2: "Processes", fill: stone, lightType: false },
];

function degToRad(d: number) {
  return (d * Math.PI) / 180;
}

function pt(r: number, deg: number) {
  const t = degToRad(deg);
  return { x: cx + r * Math.cos(t), y: cy + r * Math.sin(t) };
}

function annulusSectorPath(centerDeg: number) {
  const a0 = centerDeg - 30;
  const a1 = centerDeg + 30;
  const pOut0 = pt(R_out, a0);
  const pOut1 = pt(R_out, a1);
  const pIn1 = pt(R_hub, a1);
  const pIn0 = pt(R_hub, a0);
  return [
    `M ${pOut0.x} ${pOut0.y}`,
    `A ${R_out} ${R_out} 0 0 1 ${pOut1.x} ${pOut1.y}`,
    `L ${pIn1.x} ${pIn1.y}`,
    `A ${R_hub} ${R_hub} 0 0 0 ${pIn0.x} ${pIn0.y}`,
    `Z`,
  ].join(" ");
}

/** Centre angle for segment i: 12 o'clock = -90°, then +60° each step clockwise */
function segmentCenterDeg(i: number) {
  return -90 + i * 60;
}

export default function PeopleSystemFramework() {
  const labelR = (R_hub + R_out) / 2;

  return (
    <section
      id="framework"
      className="scroll-mt-24 border-b border-authority/10 bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
          <div className="mx-auto w-full max-w-[min(100%,440px)] shrink-0 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-square w-full">
              <svg
                viewBox="0 0 480 480"
                className="h-full w-full"
                role="img"
                aria-label="The People System: six opposing pairs — Leadership Development with Accountability; Employer Brand with Workforce Planning; Clarity with Systems and Processes."
              >
                <defs>
                  <filter id="ps-hub-depth" x="-35%" y="-35%" width="170%" height="170%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0E1A2B" floodOpacity="0.18" />
                  </filter>
                </defs>

                {segments.map((s, i) => (
                  <path
                    key={`seg-${i}`}
                    d={annulusSectorPath(segmentCenterDeg(i))}
                    fill={s.fill}
                    stroke="rgba(255,255,255,0.72)"
                    strokeWidth={1.25}
                    strokeLinejoin="miter"
                    style={{ paintOrder: "stroke fill" }}
                  />
                ))}

                <circle
                  cx={cx}
                  cy={cy}
                  r={R_hub}
                  fill={navy}
                  stroke="rgba(247,245,242,0.2)"
                  strokeWidth={1.25}
                  filter="url(#ps-hub-depth)"
                />

                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  fill={cream}
                  className="font-display"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "-0.01em",
                    fontWeight: 700,
                  }}
                >
                  <tspan x={cx} dy="-0.65em">
                    The People
                  </tspan>
                  <tspan x={cx} dy="1.2em">
                    System
                  </tspan>
                </text>

                {segments.map((s, i) => {
                  const L = segmentCenterDeg(i);
                  const pos = pt(labelR, L);
                  const fill = s.lightType ? cream : ink;
                  return (
                    <text
                      key={`lab-${i}`}
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline={s.line2 ? "auto" : "middle"}
                      fill={fill}
                      className="font-display"
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.02em",
                        fontWeight: 700,
                      }}
                    >
                      {s.line2 ? (
                        <>
                          <tspan x={pos.x} dy="-0.5em">
                            {s.line1}
                          </tspan>
                          <tspan x={pos.x} dy="1.05em">
                            {s.line2}
                          </tspan>
                        </>
                      ) : (
                        <tspan>{s.line1}</tspan>
                      )}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-metal/80">
              FRAMEWORK
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              The People System Behind Performance
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-[1.72] text-metal sm:text-[18px]">
              <p>
                Glass Partners is designed to help founders and leadership teams strengthen the people
                system behind performance through sharper leadership, stronger accountability, clearer
                direction, workforce planning, employer brand, and the systems required to support growth.
              </p>
              <p>
                Through practical guidance, honest diagnosis, and hands-on implementation support, we help
                businesses address what is slowing performance down, close the gaps that create drag, and
                put the right structures, rhythms, and capabilities in place so progress is easier to sustain.
              </p>
              <p>
                Clients also gain access to targeted tools, leadership development, workshops, and advisory
                support designed to build capability, accelerate follow-through, and turn strategy into
                consistent execution.
              </p>
            </div>
            <a
              href="#start-here"
              className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-8 py-[14px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E]"
            >
              Learn more about the framework
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
