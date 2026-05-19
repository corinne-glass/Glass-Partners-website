import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const audienceCards = [
  { title: "Curious professionals", detail: "People who think deeply and execute decisively." },
  { title: "Founders & business owners", detail: "Operators building businesses that can actually scale." },
  { title: "Current & emerging leaders", detail: "Leaders ready for bigger scope and sharper influence." },
  { title: "People managers", detail: "Managers who want stronger teams, not busier teams." },
  { title: "High performers", detail: "Ambitious people who refuse to coast on past results." },
  { title: "People who want to grow", detail: "Learners who value leverage, precision, and momentum." },
];

const contentPillars = [
  { title: "Business Growth", detail: "How to grow with structure, not chaos." },
  { title: "Scaling", detail: "The systems, cadence, and leadership required at each stage." },
  { title: "Leadership", detail: "Leading under pressure with clarity and conviction." },
  { title: "Upskilling", detail: "Practical ways to increase capability across your team." },
  { title: "Influence", detail: "How to communicate ideas that move people to action." },
  { title: "Performance", detail: "What drives sustainable outcomes across people and business." },
];

/** Launch preview — three launch episodes only (podcast not live yet). */
const launchEpisodes = [
  {
    title: "The Leadership Bottleneck You Can't Out-Hire",
    teaser:
      "Why growth stalls when leadership capability, accountability and operating rhythm lag behind the business.",
    tag: "Leadership",
  },
  {
    title: "Scaling Without Losing Your Standards",
    teaser: "How to grow without letting quality, accountability and culture dilute.",
    tag: "Growth",
  },
  {
    title: "Influence in High-Stakes Rooms",
    teaser:
      "How to communicate with clarity, authority and commercial judgement when the stakes are high.",
    tag: "Influence",
  },
] as const;

const platformLinks = [
  { label: "Spotify", href: "#" },
  { label: "Apple", href: "#" },
  { label: "YouTube", href: "#" },
];

/**
 * Authority metrics strip — removed from the page until numbers are live and approved.
 * Restore: render a section below the hero with three equal-width cards using this data.
 */
const METRICS_STRIP_WHEN_LIVE = [
  { label: "Episodes", value: "120+" },
  { label: "Listeners", value: "250K+" },
  { label: "Guests", value: "80+" },
] as const;
void METRICS_STRIP_WHEN_LIVE;

export default function PodcastPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0b1220] text-[#f5f1e8]">
        <section className="pt-[116px] pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10">
          <div className="max-w-[1320px] mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-[#b8aa86]">Business. Leadership. Education.</p>
              <h1 className="mt-5 font-display text-[48px] sm:text-[60px] lg:text-[72px] leading-[0.98] tracking-[-0.03em] text-[#f7f3ea]">
                The Glass Signal
              </h1>
              <p className="mt-7 font-display text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.1] tracking-[-0.02em] text-[#f7f3ea] max-w-3xl">
                For people with{" "}
                <span className="inline-block bg-[#b79a64] px-[0.18em] text-[#0b1220]">Talent</span> and the{" "}
                <span className="relative top-[0.14em] inline-block bg-[#b79a64] px-[0.18em] py-[0.06em] leading-none text-[#0b1220]">
                  <span className="relative -top-[0.14em] inline-block">Courage</span>
                </span>{" "}
                to use it.
              </p>
              <p className="mt-7 max-w-xl text-[18px] leading-[1.7] text-[#d6d0c3]">
                A sharp, practical podcast on leadership, growth, and performance for ambitious people building
                businesses, teams, and influence that lasts.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#featured-episode"
                  className="inline-flex items-center justify-center rounded-[4px] bg-[#b79a64] px-6 py-3 text-[15px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
                >
                  Listen Now
                </a>
                <a
                  href="#episode-library"
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#d7cfbf]/60 px-6 py-3 text-[15px] font-semibold text-[#f3ede1] hover:bg-white/10 transition-colors"
                >
                  View Episodes
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    className="inline-flex items-center rounded-[4px] border border-white/20 px-4 py-2 text-sm text-[#e3dac7] hover:bg-white/10 transition-colors"
                  >
                    {platform.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[620px]">
              <div className="absolute -inset-4 bg-[#101827] rounded-[8px]" aria-hidden />
              <div className="relative z-10 overflow-hidden rounded-[8px] border border-white/10">
                <Image
                  src="/the-glass-signal-cover.png"
                  alt="Host of The Glass Signal podcast"
                  width={1024}
                  height={1024}
                  className="w-full object-cover object-[center_16%]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-20 bg-[#f2eee5] text-[#101828]">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="font-display text-[42px] sm:text-[52px] leading-[1.02] tracking-[-0.03em]">This podcast is for...</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {audienceCards.map((card) => (
                <article key={card.title} className="rounded-[6px] border border-[#0f172a]/12 bg-white px-5 py-6">
                  <h3 className="font-semibold text-[16px] leading-[1.35]">{card.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.55] text-[#334155]">{card.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-20 border-t border-white/10">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="font-display text-[42px] sm:text-[52px] leading-[1.02] tracking-[-0.03em]">What we talk about</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contentPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-[6px] border border-white/12 bg-[#111a2a] px-6 py-6">
                  <h3 className="font-display text-[30px] leading-[1.05] tracking-[-0.02em] text-[#f7f3ea]">{pillar.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#c9c2b3]">{pillar.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-episode" className="px-5 sm:px-8 lg:px-12 py-20 bg-[#0e1727] border-y border-white/10">
          <div className="max-w-[1320px] mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#a99671]">Featured Episode</p>
              <h2 className="mt-5 font-display text-[42px] sm:text-[52px] leading-[1.02] tracking-[-0.03em] text-[#f7f3ea]">
                Why Great Businesses Break Before They Scale
              </h2>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-[#d6d0c3]">
                A practical breakdown of the invisible leadership and systems gaps that quietly cap performance.
              </p>
              <ul className="mt-7 space-y-2 text-[16px] text-[#e8e1d3]">
                <li>- The first signal your growth model is under strain</li>
                <li>- Where leadership bottlenecks hide in plain sight</li>
                <li>- A practical framework to reset execution quality fast</li>
              </ul>
              <a
                href="#"
                className="mt-9 inline-flex items-center justify-center rounded-[4px] bg-[#b79a64] px-6 py-3 text-[15px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
              >
                Listen to Episode
              </a>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-[#101827] p-4 sm:p-6">
              <div className="relative overflow-hidden rounded-[6px]">
                <Image
                  src="/the-glass-signal-cover.png"
                  alt="Featured episode artwork"
                  width={1024}
                  height={1024}
                  className="w-full object-cover object-[center_16%]"
                />
              </div>
              <div className="mt-5 rounded-[4px] border border-white/10 px-4 py-4">
                <p className="text-sm uppercase tracking-[0.14em] text-[#a99671]">Player</p>
                <p className="mt-2 text-[14px] text-[#cfc8b9]">
                  Replace with Spotify / Apple embedded player when episode URLs are finalized.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="episode-library" className="px-5 sm:px-8 lg:px-12 py-20">
          <div className="max-w-[1320px] mx-auto">
            <div>
              <h2 className="font-display text-[42px] sm:text-[52px] leading-[1.02] tracking-[-0.03em]">
                The Glass Signal is launching soon
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.65] text-[#c9c2b3]">
                Sharp conversations and solo essays on leadership, scale, ambition and the people system behind
                performance.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
              {["Leadership", "Growth", "Influence"].map((tag) => (
                <span key={tag} className="rounded-[4px] border border-white/15 px-3 py-2 text-[#d7cfbf]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {launchEpisodes.map((episode) => (
                <article
                  key={episode.title}
                  className="rounded-[8px] border border-white/12 bg-[#101a2a] overflow-hidden"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[#0d1524]">
                    <Image
                      src="/the-glass-signal-cover.png"
                      alt=""
                      width={1024}
                      height={1024}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover object-[center_16%]"
                      aria-hidden
                    />
                    <div className="absolute right-3 top-3 max-w-[calc(100%-1.5rem)]">
                      <span className="inline-block rounded-[4px] border border-white/15 bg-[#0b1220]/75 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#e8dcc4] backdrop-blur-sm sm:text-[10px] sm:tracking-[0.14em]">
                        Launch episode
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.12em] text-[#a99671]">{episode.tag}</p>
                    <h3 className="mt-3 font-display text-[28px] leading-[1.06] tracking-[-0.02em] text-[#f7f3ea]">
                      {episode.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-[#c9c2b3]">{episode.teaser}</p>
                    <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.12em] text-[#8a8275]">
                      Available at launch
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/#newsletter"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#b79a64] px-6 py-3 text-[15px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
              >
                Get the first episodes
              </Link>
              <Link
                href="/connect"
                className="inline-flex items-center text-[15px] font-semibold tracking-wide text-[#d9bc81] hover:text-[#edd09a] transition-colors underline-offset-4 hover:underline"
              >
                Explore The Glass Signal
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-20 bg-[#f2eee5] text-[#101828]">
          <div className="max-w-[1320px] mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <Image
                src="/podcast-host-about-v2.png"
                alt="Host portrait"
                width={1024}
                height={1024}
                className="w-full rounded-[8px] border border-[#0f172a]/10 object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-[42px] sm:text-[52px] leading-[1.02] tracking-[-0.03em]">About the host</h2>
              <p className="mt-6 text-[17px] leading-[1.75] text-[#334155] max-w-2xl">
                Corinne brings 20+ years of leadership experience across team performance, business growth, and
                execution discipline. She has built and led teams, improved business outcomes, and now helps leaders
                raise standards through Glass Partners.
              </p>
              <ul className="mt-7 space-y-2 text-[16px] text-[#1f2937]">
                <li>- 20+ years leadership experience</li>
                <li>- Built and led high-performing teams</li>
                <li>- Improved business performance through people systems</li>
                <li>- Founder of Glass Partners</li>
              </ul>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-[#0f172a] px-6 py-3 text-[15px] font-semibold text-[#f7f3ea] hover:bg-[#1f2b3f] transition-colors"
              >
                Work With Glass Partners
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-20 border-y border-white/10 bg-[#0d1626]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-[42px] sm:text-[52px] leading-[1.02] tracking-[-0.03em] text-[#f7f3ea]">
              Stay sharp
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-[#d6d0c3]">
              Get new episodes, strategic insights, and practical frameworks sent directly to your inbox.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-[4px] border border-white/20 bg-[#101a2a] px-4 py-3 text-[#f5f1e8] placeholder:text-[#8f98ab] outline-none focus:border-[#b79a64]"
              />
              <button
                type="submit"
                className="rounded-[4px] bg-[#b79a64] px-6 py-3 text-[15px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {platformLinks.map((platform) => (
                <a
                  key={`${platform.label}-subscribe`}
                  href={platform.href}
                  className="inline-flex items-center rounded-[4px] border border-white/20 px-4 py-2 text-sm text-[#e3dac7] hover:bg-white/10 transition-colors"
                >
                  {platform.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-24 bg-[#090f19]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-[#a99671]">From insight to execution</p>
            <h2 className="mt-5 font-display text-[44px] sm:text-[58px] leading-[1.01] tracking-[-0.03em] text-[#f7f3ea]">
              Better thinking is only useful if it changes business performance.
            </h2>
            <Link
              href="/#contact"
              className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-[#b79a64] px-8 py-4 text-[16px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
