import Link from "next/link";
import Image from "next/image";
import { site, brokenGlassTestLinkProps } from "@/content/site";

const heroPhotoCrop =
  "object-cover object-[14%_14%] origin-[18%_14%] scale-[1.4] sm:object-[16%_16%] sm:origin-[20%_16%] sm:scale-[1.42] md:object-[18%_18%] md:origin-[22%_18%] md:scale-[1.44] lg:object-[20%_20%] lg:origin-[24%_20%] lg:scale-[1.48] xl:object-[22%_22%] xl:origin-[26%_22%] xl:scale-[1.52] 2xl:object-[24%_24%] 2xl:origin-[28%_24%] 2xl:scale-[1.56]";

/**
 * Split hero: photo column (~65%) + navy content panel (~35%).
 * Mobile: image band on top, content panel below.
 */
export default function Hero() {
  return (
    <section id="top" className="bg-[#0f172a] pt-[76px]">
      <div className="w-full md:grid md:grid-cols-[13fr_7fr] md:min-h-[clamp(420px,34vw,640px)]">
        {/* Photo — crop + cinematic filter preview (dark, desaturated, warm tint) */}
        <div className="relative isolate h-[44vw] min-h-[240px] max-h-[320px] overflow-hidden sm:max-h-[360px] md:h-full md:max-h-none md:min-h-0">
          <Image
            src="/hero-banner-user-upload.png"
            alt="Corinne presenting to a room"
            fill
            priority
            sizes="(min-width: 768px) 65vw, 100vw"
            className={`${heroPhotoCrop} brightness-[1.12] contrast-[1.08] saturate-[1.38]`}
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_88%_at_40%_34%,rgba(10,16,28,0.04)_0%,rgba(10,16,28,0.14)_52%,rgba(10,16,28,0.26)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-[rgba(68,52,38,0.1)] via-transparent to-[rgba(12,20,34,0.05)] mix-blend-multiply"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_72%_78%_at_40%_34%,transparent_0%,transparent_58%,rgba(7,14,26,0.28)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(ellipse_58%_64%_at_40%_32%,rgba(255,252,245,0.34)_0%,transparent_66%)] mix-blend-screen"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-tr from-[rgba(255,235,210,0.12)] via-transparent to-[rgba(180,210,255,0.08)] mix-blend-screen"
            aria-hidden
          />
          {/* Extra saturation on window/trees only — no colour cast */}
          <div
            className="pointer-events-none absolute inset-0 z-[6] opacity-[0.48] mix-blend-soft-light [mask-image:radial-gradient(ellipse_58%_52%_at_76%_30%,#000_30%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_58%_52%_at_76%_30%,#000_30%,transparent_75%)]"
            aria-hidden
          >
            <Image
              src="/hero-banner-user-upload.png"
              alt=""
              fill
              sizes="(min-width: 768px) 65vw, 100vw"
              className={`${heroPhotoCrop} brightness-[1.06] contrast-[1.05] saturate-[2.15]`}
            />
          </div>
        </div>

        {/* Navy content panel — typography matches pre-split gradient overlay hero */}
        <div className="relative flex flex-col justify-center bg-[#0f172a] px-6 py-9 sm:px-8 sm:py-10 md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 2xl:px-16">
          <div className="relative z-10 w-full max-w-[34rem] text-left lg:max-w-[36rem] xl:max-w-[38rem]">
            <h1 className="font-display text-[42px] font-normal leading-[1.05] tracking-[-0.03em] text-[#F7F5F2] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[70px]">
              <span className="mb-[0.065em] block">People.</span>
              Performance.
              <br />
              Profit.
            </h1>

            <p className="mt-7 text-[23px] font-medium leading-[1.35] text-[#F7F5F2] sm:text-[26px] md:text-[29px]">
              Grow and scale the right way.
            </p>

            <p className="mt-8 text-[17px] leading-[1.65] text-[rgba(247,245,242,0.9)] sm:text-[18px] md:text-[19px]">
              Glass Partners helps businesses become stronger, more adaptive, and better led by
              strengthening the people system behind performance.
            </p>

            <p className="sr-only">{site.positioning}</p>

            <div className="mt-10 flex flex-row flex-nowrap items-center gap-2.5 sm:gap-3 md:gap-4">
              <Link
                href={site.startConversationPath}
                className="inline-flex min-w-0 shrink items-center justify-center whitespace-nowrap rounded-[4px] bg-[#B5332E] px-3 py-3 text-[13px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] sm:px-4 sm:py-[14px] sm:text-[15px] lg:px-[22px] lg:py-[15px] lg:text-[16px]"
              >
                Start a Conversation
              </Link>
              <Link
                href={site.brokenGlassTestUrl}
                {...brokenGlassTestLinkProps()}
                className="inline-flex min-w-0 shrink items-center justify-center whitespace-nowrap rounded-[4px] border border-white/85 bg-white/[0.08] px-3 py-3 text-[13px] font-semibold text-[#F7F5F2] backdrop-blur-[2px] transition-colors hover:bg-white/16 sm:px-4 sm:py-[14px] sm:text-[15px] lg:px-[22px] lg:py-[15px] lg:text-[16px]"
              >
                Take the Broken Glass Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
