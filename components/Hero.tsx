import Link from "next/link";
import Image from "next/image";
import { site, brokenGlassTestLinkProps } from "@/content/site";

/** Speaking image native 1024×575 — card max width keeps display at or below source resolution. */
const SPEAKING_ASPECT = "aspect-[1024/575]";

export default function Hero() {
  return (
    <section id="top" className="bg-[#0f172a] pt-[76px]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:py-16">
        <div className="grid items-center gap-10 md:min-h-[500px] lg:grid-cols-[minmax(0,1fr)_minmax(0,648px)] lg:gap-12 xl:gap-14">
          <div className="max-w-[38rem]">
            <h1 className="font-display text-[38px] font-normal leading-[1.05] tracking-[-0.03em] text-[#F7F5F2] sm:text-[42px] md:text-[56px] lg:text-[62px] xl:text-[70px]">
              <span className="mb-[0.065em] block">People.</span>
              Performance.
              <br />
              Profit.
            </h1>

            <p className="mt-5 text-[20px] font-medium leading-[1.35] text-[#F7F5F2] sm:mt-7 sm:text-[23px] md:text-[29px]">
              Scale does not break businesses.
              <br />
              Weak people systems do.
            </p>

            <p className="mt-5 text-[16px] leading-[1.65] text-[rgba(247,245,242,0.9)] sm:mt-8 sm:text-[17px] md:text-[19px]">
              Glass Partners helps businesses scale by strengthening the people system that drives
              performance.
            </p>

            <p className="sr-only">{site.positioning}</p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href={site.brokenGlassTestUrl}
                {...brokenGlassTestLinkProps()}
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-[4px] bg-[#B5332E] px-5 py-3.5 text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] sm:w-auto sm:px-[22px] sm:py-[15px] sm:text-[16px]"
              >
                Take the Broken Glass Test
              </Link>
              <Link
                href={site.startConversationPath}
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-[4px] border border-white/85 bg-white/[0.08] px-5 py-3.5 text-[15px] font-semibold text-[#F7F5F2] backdrop-blur-[2px] transition-colors hover:bg-white/16 sm:w-auto sm:px-[22px] sm:py-[15px] sm:text-[16px]"
              >
                Work with Glass Partners
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <figure className="w-full max-w-[min(100%,576px)] overflow-hidden rounded-[4px] border border-[#e5e2d8]/55 bg-[#f3f0e8] p-[2px] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.36)] sm:max-w-[540px] lg:w-full lg:max-w-[612px] xl:max-w-[648px]">
              <div className={`relative ${SPEAKING_ASPECT} w-full overflow-hidden bg-[#e8e4da]`}>
                <Image
                  src="/hero-banner-user-upload.png"
                  alt="Corinne Glass presenting to a leadership team"
                  fill
                  priority
                  sizes="(min-width: 1280px) 648px, (min-width: 1024px) 612px, (min-width: 640px) 540px, 90vw"
                  className="object-cover object-[18%_10%] scale-[1.56] origin-[18%_10%] grayscale contrast-[1.12] brightness-[1.02]"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
