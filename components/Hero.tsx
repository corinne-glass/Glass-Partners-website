import Link from "next/link";
import Image from "next/image";
import { site, brokenGlassTestLinkProps } from "@/content/site";

/** Mobile: tighter crop, presenter centred, no table. Desktop: shared crop with ultrawide scale steps. */
const heroPhotoCrop =
  "object-cover max-md:object-[16%_8%] max-md:origin-[20%_8%] max-md:scale-[1.62] md:object-[18%_12%] md:origin-[22%_12%] md:scale-[1.52] lg:scale-[1.56] xl:scale-[1.62] 2xl:scale-[1.72]";

const heroPhotoFilters = "brightness-[1.12] contrast-[1.08] saturate-[1.38]";

/**
 * Split hero: photo column (~65%) + navy content panel (~35%).
 * Mobile: image band on top, content panel below.
 */
export default function Hero() {
  return (
    <section id="top" className="bg-[#0f172a] pt-[76px]">
      <div className="w-full md:grid md:grid-cols-[13fr_7fr] md:h-[560px] lg:h-[580px] xl:h-[600px] 2xl:h-[620px]">
        {/* Photo */}
        <div className="relative isolate h-[min(52vw,340px)] min-h-[268px] overflow-hidden md:h-full md:min-h-0 md:max-h-none">
          <Image
            src="/hero-banner-user-upload.png"
            alt="Corinne presenting to a room"
            fill
            priority
            sizes="(min-width: 768px) 65vw, 100vw"
            className={`${heroPhotoCrop} ${heroPhotoFilters}`}
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_88%_90%_at_38%_32%,rgba(10,16,28,0.02)_0%,rgba(10,16,28,0.13)_54%,rgba(10,16,28,0.3)_100%)] md:bg-[radial-gradient(ellipse_88%_90%_at_40%_34%,rgba(10,16,28,0.02)_0%,rgba(10,16,28,0.13)_54%,rgba(10,16,28,0.3)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-[rgba(68,52,38,0.1)] via-transparent to-[rgba(12,20,34,0.05)] mix-blend-multiply"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_74%_80%_at_38%_32%,transparent_0%,transparent_58%,rgba(7,14,26,0.3)_100%)] md:bg-[radial-gradient(ellipse_74%_80%_at_40%_34%,transparent_0%,transparent_60%,rgba(7,14,26,0.3)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-tr from-[rgba(255,235,210,0.1)] via-transparent to-transparent mix-blend-screen md:to-[rgba(180,210,255,0.08)]"
            aria-hidden
          />
          {/* Tree saturation — desktop only */}
          <div
            className="pointer-events-none absolute inset-0 z-[5] hidden opacity-[0.48] mix-blend-soft-light [mask-image:radial-gradient(ellipse_58%_52%_at_76%_30%,#000_30%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_58%_52%_at_76%_30%,#000_30%,transparent_75%)] md:block"
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

        {/* Navy content panel */}
        <div className="relative flex flex-col justify-center bg-[#0f172a] px-5 py-8 sm:px-8 sm:py-10 md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 2xl:px-16">
          <div className="relative z-10 w-full max-w-[34rem] text-left lg:max-w-[36rem] xl:max-w-[38rem]">
            <h1 className="font-display text-[38px] font-normal leading-[1.05] tracking-[-0.03em] text-[#F7F5F2] sm:text-[42px] md:text-[56px] lg:text-[62px] xl:text-[70px]">
              <span className="mb-[0.065em] block">People.</span>
              Performance.
              <br />
              Profit.
            </h1>

            <p className="mt-5 text-[20px] font-medium leading-[1.35] text-[#F7F5F2] sm:mt-7 sm:text-[23px] md:text-[29px]">
              Grow and scale the right way.
            </p>

            <p className="mt-5 text-[16px] leading-[1.65] text-[rgba(247,245,242,0.9)] sm:mt-8 sm:text-[17px] md:text-[19px]">
              Glass Partners helps businesses become stronger, more adaptive, and better led by
              strengthening the people system behind performance.
            </p>

            <p className="sr-only">{site.positioning}</p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 md:flex-row md:flex-nowrap md:items-center md:gap-4">
              <Link
                href={site.startConversationPath}
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-[4px] bg-[#B5332E] px-5 py-3.5 text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] md:w-auto md:px-4 md:py-[14px] md:text-[15px] lg:px-[22px] lg:py-[15px] lg:text-[16px]"
              >
                Start a Conversation
              </Link>
              <Link
                href={site.brokenGlassTestUrl}
                {...brokenGlassTestLinkProps()}
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-[4px] border border-white/85 bg-white/[0.08] px-5 py-3.5 text-[15px] font-semibold text-[#F7F5F2] backdrop-blur-[2px] transition-colors hover:bg-white/16 md:w-auto md:px-4 md:py-[14px] md:text-[15px] lg:px-[22px] lg:py-[15px] lg:text-[16px]"
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
