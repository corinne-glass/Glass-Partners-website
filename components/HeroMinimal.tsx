import Link from "next/link";
import Image from "next/image";
import { site, brokenGlassTestLinkProps } from "@/content/site";

/** Minimal hero variant for A/B testing against image-led banner. */
export default function HeroMinimal() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-authority/10 bg-[#dbd8cd]">
      <div className="mx-auto max-w-[1280px] px-5 pt-[96px] sm:px-6 sm:pt-[104px] lg:px-[32px]">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-center pb-10 pt-2 lg:col-span-5 lg:pb-14">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B5332E]">
              Variant B
            </p>
            <h1 className="mt-5 font-display text-[44px] leading-[1.04] tracking-[-0.03em] text-[#0E1A2B] sm:text-[54px] lg:text-[62px]">
              People.
              <br />
              Performance.
              <br />
              Profit.
            </h1>
            <p className="mt-7 max-w-[36rem] text-[20px] leading-[1.5] text-[#334156]">
              Glass Partners helps businesses scale by strengthening the people system behind performance.
            </p>
            <p className="sr-only">{site.positioning}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={site.brokenGlassTestUrl}
                {...brokenGlassTestLinkProps()}
                className="inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap"
              >
                Take the Broken Glass Test
              </Link>
              <Link
                href={site.startConversationPath}
                className="inline-flex items-center justify-center rounded-[4px] border border-[#0E1A2B]/55 bg-white/45 px-[22px] py-[15px] text-[16px] font-semibold text-[#0E1A2B] transition-colors hover:bg-white/70 whitespace-nowrap"
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          <div className="relative h-[340px] overflow-hidden lg:col-span-7 lg:h-[420px]">
            <div className="absolute inset-0 lg:[clip-path:polygon(16%_0%,100%_0%,100%_100%,39%_100%)]">
              <Image
                src="/corinne-presenting-hero.png"
                alt="Corinne presenting to a room"
                fill
                className="object-cover object-[72%_20%]"
                sizes="(max-width: 1024px) 100vw, 760px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
