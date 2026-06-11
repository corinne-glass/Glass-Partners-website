export const corinne = {
  hero: {
    label: "CORINNE GLASS",
    headline: "Helping businesses scale without scaling the dysfunction.",
    body: [
      "Founder of Glass Partners, speaker, advisor and host of The Glass Signal.",
      "I work with businesses on the people system behind performance — the leadership, capability, communication, accountability and operating rhythm that determine whether growth gets easier or heavier.",
      "AI will not fix a weak people system.",
      "Growth will not hide one.",
      "People will not commit to one they do not believe in.",
    ],
    ctas: {
      connect: "Connect",
      workWith: "Work with Corinne",
    },
  },
  whereToStart: {
    heading: "Start with the right conversation",
    cards: [
      {
        title: "Speaking",
        body: [
          "For founders, leadership teams and business audiences who want a sharper conversation about performance, commitment and the people system behind growth.",
          "Corinne speaks on The Broken Glass Paradox, Human Intelligence for AI, and the conditions that determine whether people commit, perform and carry the mission when the work gets hard.",
        ],
        cta: "View speaking topics",
        href: "/speaking",
        anchor: "#signature-topics",
      },
      {
        title: "The Glass Signal",
        body: [
          "A podcast for people with talent and the courage to use it.",
          "Conversations on business, leadership, growth, AI and performance — the systems, standards, decisions and human behaviour that shape what actually happens.",
          "For people who do not just want to sound sharp. They want to become sharper.",
        ],
        closingLineIndex: 2,
        cta: "Listen to the podcast",
        href: "/podcast",
      },
      {
        title: "Glass Partners",
        body: [
          "For businesses that need execution to match ambition.",
          "Glass Partners strengthens the people system behind performance: leadership, clarity, capability, accountability, operating rhythm and signal.",
          "The work starts where the drag is showing up — founder dependency, weak follow-through, unclear standards, capability gaps or growth that feels harder than it should.",
        ],
        cta: "Explore Glass Partners",
        href: "/",
        external: true,
      },
    ],
  },
  conversationHeading: "What is becoming impossible to ignore",
  conversationCards: [
    {
      id: "broken-glass-question",
      title: "The Broken Glass question",
      paragraphs: [
        "Every business wants people who would crawl over broken glass for the mission.",
        "The mistake is thinking conviction can be demanded.",
        "It cannot.",
        "It is built through credible leadership, clear standards, real ownership and a system people trust enough to back when the work gets hard.",
      ],
      punchIndex: 2,
    },
    {
      id: "ai-mediocrity",
      title: "AI scales mediocrity",
      paragraphs: [
        "AI will not make mediocre thinking brilliant.",
        "It will make it faster, cleaner and easier to ship.",
        "If the person in the driver’s seat lacks judgement, context and capability, the output may look better — but the thinking underneath has not improved.",
        "The advantage will belong to businesses with people who can think, challenge, decide, communicate and use the tools with discipline.",
      ],
      punchIndex: 0,
      closingIndex: 3,
    },
  ],
} as const;
