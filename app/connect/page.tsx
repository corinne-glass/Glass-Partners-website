import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

const connectItems = [
  {
    title: "Podcast",
    detail: "Listen to The Glass Signal for practical leadership and performance conversations.",
    href: "/podcast",
    cta: "Go to Podcast",
    external: false,
  },
  {
    title: "LinkedIn",
    detail: "Connect with Corinne for sharper thinking on leadership, scale and people systems.",
    href: site.linkedinUrl,
    cta: "Connect on LinkedIn",
    external: true,
  },
  {
    title: "Newsletter",
    detail: "Get practical insights and strategic takes delivered directly to your inbox.",
    href: "/#newsletter",
    cta: "Go to Newsletter",
    external: false,
  },
];

export default function ConnectPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0b1220] text-[#f5f1e8]">
        <section className="pt-[118px] pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10">
          <div className="max-w-[1240px] mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#b8aa86]">Connect</p>
            <h1 className="mt-5 font-display text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.03em] max-w-4xl">
              Choose where you want to connect.
            </h1>
            <p className="mt-7 max-w-3xl text-[18px] leading-[1.75] text-[#d6d0c3]">
              Whether you prefer long-form episodes, direct professional networking, or regular written insights, you
              can connect with Corinne through the channel that suits you best.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {connectItems.map((item) => (
                <article key={item.title} className="rounded-[8px] border border-white/12 bg-[#111a2a] p-6">
                  <h2 className="font-display text-[34px] leading-[1.04] tracking-[-0.02em] text-[#f7f3ea]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#c9c2b3]">{item.detail}</p>
                  {item.external ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center rounded-[4px] bg-[#b79a64] px-4 py-2 text-[14px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
                    >
                      {item.cta}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center rounded-[4px] bg-[#b79a64] px-4 py-2 text-[14px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
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
      <Footer />
    </>
  );
}
