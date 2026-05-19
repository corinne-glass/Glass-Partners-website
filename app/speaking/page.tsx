import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

const speakingTopics = [
  {
    title: "Leadership that creates performance",
    body: "Strong leadership is not a title, a personality type or a collection of good intentions. It is the ability to set standards, create clarity, build trust, develop people, make decisions and keep performance alive when the work gets hard.",
    body2:
      "Corinne helps leaders understand what their leadership is creating - and what needs to shift if they want people to perform with more ownership, confidence and consistency.",
  },
  {
    title: "People systems that support growth",
    body: "Most businesses do not break because people stop caring. They break because the system around the people no longer matches the size, pace or complexity of the business.",
    body2:
      "Corinne speaks about the people system behind performance: leadership, hiring, accountability, workforce planning, communication, operating rhythm, employer brand and the structures that make growth easier to sustain.",
  },
  {
    title: "Communication that moves people",
    body: "A message is not complete because it was delivered. It is complete when people understand why it matters, what the reality is, how it will work and what happens next.",
    body2:
      "Corinne teaches leaders how to communicate with more relevance, authority and follow-through, so people leave conversations knowing what matters and what to do next.",
  },
];

const signatureTopics = [
  {
    title: "Why Growth Feels Harder Than It Should",
    audience:
      "For founders, business owners and leadership teams who are growing, but finding the business harder to move, lead and control.",
    body: "This session explores why growth exposes weak people systems: unclear standards, inconsistent leadership, founder dependency, poor accountability, unclear decision-making and teams working hard inside structures they have outgrown.",
    body2:
      "The focus is practical: how to identify the drag, understand what is causing it and start building the conditions that make scale more sustainable.",
  },
  {
    title: "Performance Is a System, Not a Personality Trait",
    audience:
      "For leaders who want stronger accountability, better standards and more consistent execution without relying on individual heroics.",
    body: "This session challenges the idea that performance is simply about having \"good people\" or \"bad people\". Corinne explores how leadership, clarity, rhythm, standards, communication and environment shape the way people behave, decide, prioritise and perform.",
    body2:
      "The room leaves with a sharper understanding of what performance actually requires - and what leaders must build around people if they want better outcomes.",
  },
  {
    title: "The 7 Signals of Leadership",
    audience:
      "For current and emerging leaders who want to upskill on the key principles of leadership.",
    body: "This session gives leaders a practical framework for assessing their impact across seven signals.",
    body2:
      "It helps leaders see where they are creating strength, where they are creating confusion and what needs to shift if they want to lead people with more clarity, confidence and commercial impact.",
  },
  {
    title: "The 4M Message Method",
    audience: "For leaders who need their message to land the first time.",
    body: "This session teaches leaders how to structure and deliver messages with clarity, authority and follow-through — whether they are speaking to one person, a team or a room.",
    body2:
      "Leaders leave with a practical communication framework that helps them create stronger buy-in, reduce confusion and close the gap between what was said and what happens next.",
  },
  {
    title: "Speed Is Not a Hiring Strategy",
    audience:
      "For businesses filling seats quickly, but paying for it later through turnover, poor fit, rework and inconsistent performance.",
    body: "This session examines why fast hiring can create slow damage, and why the pressure to move quickly often causes businesses to compromise on clarity, standards and fit.",
    body2:
      "Corinne shows what needs to change if businesses want hiring quality, not just hiring activity.",
  },
  {
    title: "Would Your Team Crawl Over Broken Glass for the Mission?",
    audience:
      "For businesses that want people to care deeply about the mission without confusing commitment with burnout, chaos or blind loyalty.",
    body: "This session explores what it really takes for people to believe in where the business is going: strong leadership, clear standards, trust, communication, discipline and a system that makes the mission more than a slogan.",
    body2:
      "It is a direct conversation about belief, ownership and the conditions required for people to perform with genuine commitment.",
  },
];

const roomCards = [
  {
    title: "For the stage",
    items: ["Keynotes", "Conference sessions", "Business breakfasts", "Industry events"],
  },
  {
    title: "For the conversation",
    items: ["Panels", "Podcasts", "Webinars", "Executive discussions"],
  },
  {
    title: "For the work",
    items: [
      "Leadership offsites",
      "Half-day workshops",
      "Full-day workshops",
      "Private leadership development sessions",
    ],
  },
];

export default function SpeakingPage() {
  const filmGrain =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.22'/%3E%3C/svg%3E\")";

  return (
    <>
      <Header />
      <main className="bg-[#0b1220] text-[#f5f1e8]">
        <section className="pt-[118px] pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10">
          <div className="max-w-[1240px] mx-auto grid gap-10 lg:grid-cols-[1.08fr_0.92fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#b8aa86]">Speaking</p>
              <h1 className="mt-5 font-display text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.03em] max-w-5xl">
                Book Corinne Glass to speak on leadership, scale and the people system behind performance.
              </h1>
              <div className="mt-8 max-w-4xl space-y-5 text-[18px] leading-[1.75] text-[#d6d0c3]">
                <p>
                  Corinne Glass speaks to founders, business owners, leadership teams and growth-minded professionals
                  about what really determines whether people, teams and businesses perform.
                </p>
                <p>
                  Her work sits at the intersection of leadership, accountability, hiring, standards, communication,
                  operating rhythm and the people system behind growth.
                </p>
                <p>
                  Direct, practical and commercially grounded, Corinne brings sharp insight, real-world experience and
                  usable frameworks into the room - so people leave clearer, stronger and better equipped to lead,
                  follow, grow and perform.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={site.startConversationPath}
                  className="inline-flex items-center justify-center rounded-[4px] bg-[#b79a64] px-6 py-3 text-[15px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
                >
                  Enquire About Speaking
                </Link>
                <a
                  href="#signature-topics"
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#d7cfbf]/60 px-6 py-3 text-[15px] font-semibold text-[#f3ede1] hover:bg-white/10 transition-colors"
                >
                  View Speaking Topics
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-[460px] lg:max-w-[480px] ml-auto rounded-[8px] overflow-hidden border border-white/10">
              <Image
                src="/speaking-session-1.png"
                alt="Corinne speaking"
                width={768}
                height={1152}
                className="w-full h-full object-cover object-[52%_62%] [filter:grayscale(1)_contrast(1.16)_brightness(0.84)]"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.2]"
                style={{ backgroundImage: filmGrain, backgroundSize: "220px 220px" }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6,10,16,0.26) 0%, rgba(6,10,16,0.06) 36%, rgba(6,10,16,0.3) 100%)",
                }}
                aria-hidden
              />
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-20 border-b border-white/10">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.04] tracking-[-0.03em] max-w-4xl">
              A direct voice on leadership, performance and the systems that shape both.
            </h2>
            <div className="mt-8 space-y-5 max-w-5xl text-[17px] leading-[1.8] text-[#d6d0c3]">
              <p>
                Corinne Glass is the Founder and Managing Director of Glass Partners, an operational advisory partner
                helping businesses scale by strengthening the people system that drives performance.
              </p>
              <p>
                With more than two decades of experience inside businesses, leading teams, developing people and
                stepping into the parts that are not working, Corinne has spent her career speaking to rooms full of
                people who are there to learn, reflect, develop and take better action.
              </p>
              <p>
                Her work is built around a clear belief: performance is not accidental. It is shaped by the standards
                leaders set, the clarity people receive, the environment they operate in, the quality of
                communication, the discipline of follow-through and the systems that either support people or slowly
                wear them down.
              </p>
              <p>
                Corinne speaks to the real issues that slow businesses down: unclear standards, weak leadership
                rhythms, founder dependency, poor hiring discipline, diluted accountability, underdeveloped managers
                and teams working hard inside systems that no longer support the size or ambition of the business.
              </p>
              <p>
                Known for her direct, commercial and practical delivery, Corinne brings the conversations many
                businesses avoid into the room - then makes them useful.
              </p>
              <p>
                Her sessions are not motivational theatre. They are designed to give people language, tools and
                frameworks they can take back into their business, leadership role, team or personal life and use
                immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-20 bg-[#f2eee5] text-[#101828] border-b border-[#0f172a]/10">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.04] tracking-[-0.03em]">
              What Corinne Speaks About
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {speakingTopics.map((topic) => (
                <article key={topic.title} className="rounded-[6px] border border-[#0f172a]/12 bg-white p-6">
                  <h3 className="font-display text-[30px] leading-[1.06] tracking-[-0.02em]">{topic.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#334155]">{topic.body}</p>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#334155]">{topic.body2}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-20 bg-[#f2eee5] text-[#101828] border-b border-[#0f172a]/10">
          <div className="max-w-[1240px] mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
            <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.04] tracking-[-0.03em]">Why Corinne</h2>
            <div className="mt-8 space-y-5 max-w-5xl text-[17px] leading-[1.8] text-[#334155]">
              <p>
                Corinne brings the commercial edge of an operator, the diagnostic lens of an advisor and the
                developmental depth of someone who knows leadership cannot just be talked about. It has to be
                practised.
              </p>
              <p>
                She does not speak in theory for theory&apos;s sake. Her work is grounded in what happens inside real
                businesses: the pressure, the people dynamics, the missed conversations, the leadership gaps, the
                hiring decisions, the accountability problems and the systems that quietly determine whether
                performance moves forward or stalls.
              </p>
              <p>
                Her mission is to give people the tools, language and confidence to go back into their personal and
                professional lives and lead better, follow better, grow better and create better outcomes.
              </p>
            </div>
            </div>
            <div className="relative self-end w-full max-w-[420px] lg:ml-auto rounded-[8px] overflow-hidden border border-[#0f172a]/12">
              <Image
                src="/speaking-session-2-final.png"
                alt="Corinne delivering a leadership speaking session"
                width={768}
                height={1152}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </section>

        <section id="signature-topics" className="px-5 sm:px-8 lg:px-12 py-20 border-b border-white/10">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.04] tracking-[-0.03em]">
              Signature Speaking Topics
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {signatureTopics.map((topic) => (
                <article key={topic.title} className="rounded-[8px] border border-white/12 bg-[#111a2a] p-6">
                  <h3 className="font-display text-[30px] leading-[1.05] tracking-[-0.02em] text-[#f7f3ea]">
                    {topic.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-[#e4ddcf]">{topic.audience}</p>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#c9c2b3]">{topic.body}</p>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#c9c2b3]">{topic.body2}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-24 border-b border-white/10 bg-[#0e1727]">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.04] tracking-[-0.03em]">
              Bring Corinne into the right room.
            </h2>
            <p className="mt-6 max-w-4xl text-[17px] leading-[1.8] text-[#d6d0c3]">
              Corinne speaks in rooms where people are there to think, develop and take better action - from founder
              events and leadership offsites to podcasts, panels, workshops and conference stages.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {roomCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[8px] border border-[#d7cfbf]/20 bg-[#141f33] px-7 py-8 transition-colors hover:bg-[#17243b]"
                >
                  <h3 className="font-display text-[32px] leading-[1.04] tracking-[-0.02em] text-[#f7f3ea]">
                    {card.title}
                  </h3>
                  <ul className="mt-6 space-y-3 text-[15px] leading-[1.65] text-[#d8d1c2]">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-10 max-w-5xl text-[15px] leading-[1.75] text-[#beb6a5]">
              Best suited for founders, business owners, leadership teams, people managers, emerging leaders,
              growth-stage businesses, HR and talent audiences, industry associations, women in business communities
              and professional networks.
            </p>
          </div>
        </section>

        <section className="px-5 sm:px-8 lg:px-12 py-24 bg-[#090f19] border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-[44px] sm:text-[58px] leading-[1.01] tracking-[-0.03em] text-[#f7f3ea]">
              Bring Corinne into the room.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.75] text-[#d6d0c3]">
              For speaking, panels, podcasts, leadership sessions and private workshops on leadership, scale,
              accountability, hiring, communication and the people system behind performance.
            </p>
            <Link
              href={site.startConversationPath}
              className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-[#b79a64] px-8 py-4 text-[16px] font-semibold text-[#0b1220] hover:bg-[#c2a86f] transition-colors"
            >
              Enquire About Speaking
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
