import HowWeHelpOfferGroup from "@/components/HowWeHelpOfferGroup";
import type { HowWeHelpOfferCardProps } from "@/components/HowWeHelpOfferCard";
import { site, brokenGlassTestLinkProps } from "@/content/site";

const startHereCards: HowWeHelpOfferCardProps[] = [
  {
    title: (
      <>
        The Broken Glass Test
        <sup className="ml-0.5 align-super font-sans text-[0.45em] font-bold tracking-[0.02em] text-[#F7F5F2]">
          ™
        </sup>
      </>
    ),
    children:
      "A short leadership diagnostic to test whether commitment is driving performance — or quietly limiting it.",
    primary: {
      kind: "external",
      href: site.brokenGlassTestUrl,
      label: "Take the test",
      linkProps: brokenGlassTestLinkProps(),
    },
    secondaryHref: "/#broken-glass-test",
  },
  {
    title: "Performance Reset",
    children:
      "A practical deep dive for businesses that know something is off and need clarity on where performance is really breaking down — and what needs to change next.",
    primary: {
      kind: "link",
      href: site.startConversationPath,
      label: "See What's Really Going On",
    },
  },
  {
    title: "Employee Experience Diagnostic",
    children:
      "A practical view of how people are experiencing leadership, communication, standards, and the conditions they are being asked to perform inside.",
    primary: {
      kind: "link",
      href: site.startConversationPath,
      label: "See What's Really Going On",
    },
  },
  {
    title: "Workforce Pulse",
    children:
      "A fast read on capability, sentiment, pressure points, and what the workforce may be signalling before bigger issues show up in performance or retention.",
    primary: {
      kind: "link",
      href: site.startConversationPath,
      label: "See What's Really Going On",
    },
  },
];

const strengthenCards: HowWeHelpOfferCardProps[] = [
  {
    title: "Leadership Performance Intensives",
    children:
      "Targeted leadership development designed to strengthen judgement, communication, courageous conversations, accountability, and the standards performance depends on.",
    primary: {
      kind: "link",
      href: site.startConversationPath,
      label: "Start the Conversation",
    },
  },
  {
    title: "Team Performance Reset",
    children:
      "A focused reset to improve clarity, alignment, ownership, and follow-through so teams stop staying busy and start moving the business forward.",
    primary: {
      kind: "link",
      href: site.startConversationPath,
      label: "Start the Conversation",
    },
  },
];

const signalCards: HowWeHelpOfferCardProps[] = [
  {
    title: "Employer Brand Strategy",
    children:
      "Clarify what your business stands for, how it is experienced, and the signal it sends to the market so you attract people who raise the standard.",
    primary: {
      kind: "link",
      href: site.startConversationPath,
      label: "Start the Conversation",
    },
  },
  {
    title: "Strategic Hiring Support",
    children:
      "Strengthen the hiring decisions that shape performance by improving role clarity, selection thinking, and the fit between talent and business need.",
    primary: {
      kind: "link",
      href: site.startConversationPath,
      label: "Start the Conversation",
    },
  },
  {
    title: "Workforce Planning",
    children:
      "Make better talent and capability decisions ahead of growth by aligning workforce planning to business priorities, structure, and future demand.",
    primary: {
      kind: "link",
      href: site.startConversationPath,
      label: "Start the Conversation",
    },
  },
];

export default function HowWeHelpOfferSections() {
  return (
    <>
      <HowWeHelpOfferGroup
        id="start-here"
        heading="Start Here"
        subheading="Get a clearer read on what is holding performance back."
        cards={startHereCards}
        gridClassName="mt-12 grid gap-5 md:grid-cols-2 md:gap-6"
        surfaceClassName="bg-[#f4f3f0]"
      />
      <HowWeHelpOfferGroup
        id="strengthen"
        heading="Strengthen"
        subheading="Build stronger leaders, clearer teams, and better performance conditions."
        cards={strengthenCards}
        surfaceClassName="bg-white"
      />
      <HowWeHelpOfferGroup
        id="signal-and-scale"
        heading="Signal and Scale"
        subheading="Strengthen the signal your business sends and the talent decisions that shape growth."
        cards={signalCards}
        gridClassName="mt-12 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        surfaceClassName="bg-[#f4f3f0]"
      />
    </>
  );
}
