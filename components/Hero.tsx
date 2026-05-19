import Link from "next/link";
import Image from "next/image";
import { site, brokenGlassTestLinkProps } from "@/content/site";

/** Full-bleed hero with pre-graded editorial background and readability overlay. */
export default function Hero() {
  /**
   * Version A: left + centre unchanged from the long-standing A gradient (bright band through 58%).
   * From the background pole / right third onward, match HeroB `overlayReadability` strengths:
   * B uses ~0.38 @ 54%, 0.68 @ 68%, 0.84 @ 100% — here that ramp begins after 58% so the speaker
   * and left text plate stay as before. No image scale or crop changes.
   */
  const overlayReadability =
    "linear-gradient(90deg, rgba(7,17,35,0.96) 0%, rgba(7,17,35,0.9) 10%, rgba(7,17,35,0.7) 20%, rgba(7,17,35,0.34) 30%, rgba(7,17,35,0.08) 39%, rgba(7,17,35,0.012) 47%, rgba(7,17,35,0.01) 58%, rgba(7,17,35,0.28) 61%, rgba(7,17,35,0.48) 64%, rgba(7,17,35,0.68) 68%, rgba(7,17,35,0.74) 78%, rgba(7,17,35,0.84) 100%)";

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#0f172a]">
      <div className="absolute inset-x-0 bottom-0 top-[76px] z-0 overflow-hidden">
        <Image
          src="/hero-banner-user-upload.png"
          alt="Corinne presenting to a room"
          fill
          className="object-cover object-[14%_54%] origin-[34%_54%] scale-[1.09] contrast-[1.04] saturate-[1.02] md:object-[18%_53%] md:origin-[36%_53%] md:scale-[1.08] lg:object-[24%_52%] lg:origin-[40%_52%] lg:scale-[1.07] xl:object-[28%_46%] xl:origin-[40%_46%] xl:scale-[1.06] 2xl:object-[30%_45%] 2xl:origin-[42%_45%] 2xl:scale-[1.06]"
          sizes="100vw"
          priority
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[76px] z-[1] bg-cover bg-center"
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
