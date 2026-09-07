import Image from "next/image";

type Variant = "hero" | "offer";

const HERO_LAYOUT = [
  { src: 0, className: "left-0 top-0 z-30 w-[70%] rotate-[-2deg]" },
  { src: 1, className: "left-[20%] top-[10%] z-20 w-[66%] rotate-[1.5deg]" },
  { src: 2, className: "left-[34%] top-[18%] z-10 w-[60%] rotate-[2.5deg]" },
] as const;

const OFFER_LAYOUT = [
  { src: 0, className: "left-0 top-0 z-30 w-[72%] rotate-[-2deg]" },
  { src: 1, className: "left-[18%] top-[9%] z-20 w-[68%] rotate-[1.5deg]" },
  { src: 2, className: "left-[32%] top-[16%] z-10 w-[62%] rotate-[2.5deg]" },
] as const;

export default function SignalReportStaticMockup({
  images,
  variant,
}: {
  images: readonly string[];
  variant: Variant;
}) {
  const layout = variant === "hero" ? HERO_LAYOUT : OFFER_LAYOUT;
  const aspect =
    variant === "hero" ? "aspect-[4/5] max-w-[380px]" : "aspect-[4/5] w-full max-w-[400px]";

  return (
    <div
      className={`relative mx-auto ${aspect} select-none pointer-events-none`}
      aria-hidden="true"
    >
      {layout.map((item, index) => {
        const src = images[item.src];
        if (!src) return null;
        return (
          <div
            key={`${variant}-${index}`}
            className={`absolute overflow-hidden rounded-[2px] border border-[#0E1A2B]/10 bg-white shadow-[0_14px_32px_rgba(14,26,43,0.12)] ${item.className}`}
          >
            <Image
              src={src}
              alt=""
              width={400}
              height={520}
              className="h-auto w-full object-cover object-top"
              sizes="(max-width: 768px) 280px, 360px"
              draggable={false}
              priority={variant === "hero" && index === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
