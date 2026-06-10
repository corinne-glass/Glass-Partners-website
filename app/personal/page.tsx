import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PersonalHeader from "@/components/PersonalHeader";
import PersonalFooter from "@/components/PersonalFooter";
import { crossSiteNav } from "@/lib/domains";
import { site, calendlyLinkProps } from "@/content/site";

export const metadata: Metadata = {
  title: "Corinne Glass | Leadership, speaking & The Glass Signal",
  description:
    "Corinne Glass — founder of Glass Partners. Speaking, podcast, and practical leadership on people, performance and profit.",
  alternates: { canonical: "/" },
};

const highlights = [
  {
    title: "Speaking",
    body: "Keynotes and workshops on leadership, people systems, and communication that moves teams to perform.",
    href: "/speaking",
    cta: "Speaking",
  },
  {
    title: "The Glass Signal",
    body: "Practical conversations on leadership, scale, and the people system behind performance.",
    href: "/podcast",
    cta: "Podcast",
  },
  {
    title: "Glass Partners",
    body: "Advisory and operating partner work for businesses that need execution to match growth.",
    href: crossSiteNav.business.href(),
    cta: crossSiteNav.business.label,
    external: true,
  },
];

export default function PersonalHomePage() {
  const business = crossSiteNav.business;

  return (
    <>
      <PersonalHeader />
      <main className="bg-[#0b1220] text-[#f5f1e8]">
        <section className="pt-[118px] pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10">
          <div className="max-w-[1240px] mx-auto grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#b8aa86]">Corinne Glass</p>
              <h1 className="mt-5 font-display text-[42px] sm:text-[56px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] max-w-3xl">
                Leadership that creates performance.
              </h1>
              <p className="mt-7 max-w-2xl text-[18px] leading-[1.75] text-[#d6d0c3]">
                Founder of {business.label}. I work with leaders and growing businesses on the people
                system behind performance — through advisory, speaking, and The Glass Signal.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center rounded-[4px] bg-[#b79a64] px-6 py-3 text-[15px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
                >
                  Connect
                </Link>
                <a
                  href={site.calendlyUrl}
                  {...calendlyLinkProps()}
                  className="inline-flex items-center justify-center rounded-[4px] border border-white/25 px-6 py-3 text-[15px] font-semibold text-[#f5f1e8] hover:bg-white/5 transition-colors"
                >
                  Book a conversation
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] max-w-[360px] mx-auto lg:mx-0 w-full overflow-hidden rounded-[6px] border border-white/12">
              <Image
                src="/corinne-glass.png"
                alt="Corinne Glass"
                fill
                className="object-cover object-top"
                sizes="360px"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-[32px] sm:text-[40px] tracking-[-0.02em] text-[#f7f3ea]">
              Where to start
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[8px] border border-white/12 bg-[#111a2a] p-6 flex flex-col"
                >
                  <h3 className="font-display text-[28px] leading-[1.05] text-[#f7f3ea]">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#c9c2b3] flex-1">{item.body}</p>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      className="mt-6 inline-flex items-center rounded-[4px] bg-[#b79a64] px-4 py-2 text-[14px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors w-fit"
                    >
                      {item.cta} →
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center rounded-[4px] bg-[#b79a64] px-4 py-2 text-[14px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors w-fit"
                    >
                      {item.cta}
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PersonalFooter />
    </>
  );
}
