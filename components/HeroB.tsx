import Link from "next/link";
import Image from "next/image";
import { site, brokenGlassTestLinkProps } from "@/content/site";

/** B variant: high-end editorial black-and-white hero treatment. */
export default function HeroB() {
  const screenSoftMask =
    "linear-gradient(90deg, #000 0%, #000 16%, rgba(0,0,0,0.68) 24%, rgba(0,0,0,0.2) 31%, transparent 38%)";
  const speakerGlowMask =
    "radial-gradient(ellipse 24% 34% at 44% 36%, #000 0%, #000 46%, transparent 72%)";
  const speakerColorMask =
    "radial-gradient(ellipse 30% 42% at 44% 39%, #000 0%, #000 48%, rgba(0,0,0,0.5) 62%, transparent 78%)";
  const overlayReadability =
    "linear-gradient(90deg, rgba(7,17,35,0.24) 0%, rgba(7,17,35,0.28) 20%, rgba(7,17,35,0.02) 34%, rgba(7,17,35,0.00) 42%, rgba(7,17,35,0.38) 54%, rgba(7,17,35,0.68) 68%, rgba(7,17,35,0.84) 100%)";
  const editorialMonoGrade =
    "linear-gradient(180deg, rgba(8,12,18,0.16) 0%, rgba(8,12,18,0.1) 42%, rgba(8,12,18,0.22) 100%)";

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#0f172a]">
      <div className="absolute inset-x-0 bottom-0 top-[76px] z-0 overflow-hidden">
        <Image
          src="/hero-banner-b-face-match.png"
          alt="Corinne presenting to a room"
          fill
          className="object-cover object-[14%_54%] origin-[34%_54%] scale-[1.04] md:object-[18%_53%] md:origin-[36%_53%] md:scale-[1.03] lg:object-[24%_52%] lg:origin-[40%_52%] lg:scale-[1.02] xl:object-[28%_46%] xl:origin-[40%_46%] xl:scale-[1.01] 2xl:object-[30%_45%] 2xl:origin-[42%_45%] 2xl:scale-[1.01] [filter:grayscale(1)_contrast(1.16)_brightness(0.93)_saturate(0.2)]"
          sizes="100vw"
          priority
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[76px] z-[1] bg-cover bg-center"
        style={{ backgroundImage: editorialMonoGrade }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[76px] z-[2] overflow-hidden"
        style={{
          maskImage: speakerColorMask,
          WebkitMaskImage: speakerColorMask,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
        aria-hidden
      >
        <Image
          src="/hero-banner-b-face-match.png"
          alt=""
          fill
          className="object-cover object-[14%_54%] origin-[34%_54%] scale-[1.04] md:object-[18%_53%] md:origin-[36%_53%] md:scale-[1.03] lg:object-[24%_52%] lg:origin-[40%_52%] lg:scale-[1.02] xl:object-[28%_46%] xl:origin-[40%_46%] xl:scale-[1.01] 2xl:object-[30%_45%] 2xl:origin-[42%_45%] 2xl:scale-[1.01] [filter:saturate(1.08)_brightness(1.03)_contrast(1.03)]"
          sizes="100vw"
          priority={false}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[76px] z-[3] backdrop-blur-[2px] backdrop-brightness-[0.88] backdrop-contrast-[0.9] backdrop-saturate-[0.8]"
        style={{
          maskImage: screenSoftMask,
          WebkitMaskImage: screenSoftMask,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[76px] z-[3] mix-blend-screen"
        style={{
          maskImage: speakerGlowMask,
          WebkitMaskImage: speakerGlowMask,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          backgroundImage:
            "radial-gradient(ellipse 20% 28% at 44% 35%, rgba(255,255,255,0.16), rgba(255,255,255,0.06) 44%, transparent 72%)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[76px] z-[3] bg-cover bg-center"
        style={{ backgroundImage: overlayReadability }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col justify-center px-5 pb-14 pt-[108px] sm:px-6 sm:pb-[18px] sm:pt-[119px] lg:px-10 lg:pb-[22px] lg:pt-[137px]">
        <div className="relative ml-auto max-w-xl translate-x-[0.6cm] lg:translate-x-[1.65cm] xl:translate-x-[1.8cm] lg:max-w-[34rem] xl:max-w-[36rem]">
          <h1 className="font-display text-[42px] font-normal leading-[1.05] tracking-[-0.03em] text-[#F7F5F2] [text-shadow:0_1px_2px_rgba(0,0,0,0.28)] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[70px]">
            <span className="block mb-[0.065em]">People.</span>
            Performance.
            <br />
            Profit.
          </h1>

          <p className="mt-7 text-[23px] font-medium leading-[1.35] text-[#F7F5F2] [text-shadow:0_1px_2px_rgba(0,0,0,0.24)] sm:text-[26px] md:text-[29px]">
            Grow and scale the right way.
          </p>

          <p className="mt-8 max-w-[44rem] text-[17px] leading-[1.65] text-[rgba(247,245,242,0.9)] [text-shadow:0_1px_1px_rgba(0,0,0,0.18)] sm:text-[18px] md:text-[19px]">
            Glass Partners helps businesses become stronger, more adaptive, and better led by
            strengthening the people system behind performance.
          </p>

          <p className="sr-only">{site.positioning}</p>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={site.startConversationPath}
              className="inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap"
            >
              Start a Conversation
            </Link>
            <Link
              href={site.brokenGlassTestUrl}
              {...brokenGlassTestLinkProps()}
              className="inline-flex items-center justify-center rounded-[4px] border border-white/85 bg-white/[0.08] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] backdrop-blur-[2px] transition-colors hover:bg-white/16 whitespace-nowrap"
            >
              Take the Broken Glass Test
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
