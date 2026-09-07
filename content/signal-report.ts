/** SIGNAL sample-report campaign landing page — `/signal-report` */

export const FORM_ID = "signal-request";

export const signalReport = {
  meta: {
    title: "Request the SIGNAL Sample Report",
    description:
      "See how SIGNAL turns confidential employee voice into clear business priorities. Request the illustrative SIGNAL Employee Voice & Engagement Assessment report from Glass Partners.",
    ogTitle: "Request the SIGNAL Sample Report | Glass Partners",
    ogDescription:
      "See how SIGNAL turns confidential employee voice into clear business priorities. Request the illustrative SIGNAL Employee Voice & Engagement Assessment report from Glass Partners.",
    canonical: "/signal-report",
    ogImage: "/images/signal/signal-employee-voice-social-preview-2026.png",
  },
  header: {
    secondaryLink: "Already interested? Talk to us about SIGNAL →",
    secondaryHref: "/signal#enquiry",
  },
  cta: {
    primary: "REQUEST THE SAMPLE REPORT",
    primaryWithArrow: "REQUEST THE SAMPLE REPORT →",
    primaryWithUpArrow: "REQUEST THE SAMPLE REPORT ↑",
    fitCall: "BOOK A 15-MINUTE SIGNAL CONVERSATION",
  },
  hero: {
    eyebrow: "SIGNAL | EMPLOYEE VOICE & ENGAGEMENT ASSESSMENT",
    h1: "Know what's getting in the way of performance — before you spend more money trying to fix it.",
    supporting:
      "SIGNAL gives leadership an independent view of the conditions shaping performance — what's working, what's getting in the way and where to act first.",
    price: "$2,999 + GST",
    proofLine: [
      {
        value: 7,
        label: "PERFORMANCE DRIVERS",
        micro: "Understand what's shaping performance",
      },
      {
        value: 5,
        label: "PERFORMANCE RISKS",
        micro: "Identify where the system is breaking down",
      },
      {
        value: 3,
        label: "PRIORITIES FOR ACTION",
        micro: "Know where leadership should act first",
      },
    ],
    reportPages: [
      "/images/signal/signal-report-cover.png",
      "/images/signal/signal-report-results-dashboard.png",
      "/images/signal/signal-report-roadmap.png",
    ],
  },
  value: {
    eyebrow: "WHAT SIGNAL GIVES YOU",
    h2: "Stop guessing. Know where to act.",
    intro:
      "SIGNAL measures the conditions influencing performance across the full people system — not simply how employees feel.",
    image: "/images/signal/signal-hero-meeting.png",
    imageAlt:
      "People in discussion at a table — representing the intelligence held inside the organisation",
    columns: [
      {
        num: "01",
        title: "SEE WHAT'S WORKING",
        copy: "Identify the conditions strengthening performance and what should be protected as the business grows.",
      },
      {
        num: "02",
        title: "DIAGNOSE WHAT'S GETTING IN THE WAY",
        copy: "Assess seven performance drivers, then map the patterns against the Five Fractures to reveal where performance is being constrained or put at risk.",
      },
      {
        num: "03",
        title: "KNOW WHAT TO ACT ON FIRST",
        copy: "Separate isolated issues from systemic patterns and focus leadership on the three priorities with the greatest business impact.",
      },
    ],
    architecture: {
      stages: [
        { value: 7, label: "PERFORMANCE DRIVERS" },
        { value: 5, label: "FRACTURES" },
        { value: 3, label: "PRIORITIES" },
      ],
      drivers: [
        "Direction & Leadership",
        "Manager Effectiveness",
        "Role Clarity & Accountability",
        "Performance Enablement & Decision Flow",
        "Team Trust, Voice & Fairness",
        "Sustainable Work & Wellbeing",
        "Growth & Future Readiness",
      ],
      fractures: [
        "Leadership Drift",
        "Decision Drag",
        "Capability Debt",
        "Signal Breakdown",
        "Accountability Theatre",
      ],
      fracturesIntro:
        "Those performance risks are then interpreted through Glass Partners' Five Fractures.",
    },
    closingSmall: "This isn't about employee sentiment.",
    closingLarge:
      "It's about understanding the conditions behind performance before you make expensive decisions about people.",
  },
  offer: {
    eyebrow: "WHAT YOU RECEIVE",
    h2: "Employee intelligence you can actually act on.",
    intro:
      "SIGNAL turns confidential employee voice into a clear leadership view of what is strengthening performance, what is slowing it and where to act first.",
    items: [
      {
        title: "Employee Voice & Engagement Assessment",
        copy: "Independently administered and confidential.",
        image: "/images/signal/signal-report-cover.png",
      },
      {
        title: "Business & workforce analysis",
        copy: "Understand the patterns shaping performance across the organisation.",
        image: "/images/signal/signal-report-results-dashboard.png",
      },
      {
        title: "Executive SIGNAL report",
        copy: "Clear interpretation of the evidence. Not a data dump.",
        image: "/images/signal/signal-report-executive-summary.png",
      },
      {
        title: "Executive findings session",
        copy: "What the evidence means and what leadership needs to understand.",
        image: "/images/signal/signal-report-segment-insights.png",
      },
      {
        title: "Top 3 priorities + 90-day roadmap",
        copy: "Know where to act first and what happens next.",
        image: "/images/signal/signal-report-roadmap.png",
      },
    ],
  },
  offerStrip: {
    price: "$2,999 + GST",
    includes: [
      "Employee Voice & Engagement Assessment",
      "Approximately 4 weeks from setup to executive findings",
    ],
  },
  testimonial: {
    quote:
      "Corinne has a unique ability to rapidly understand people: what they are trying to say and what they need to hear. She brought integrity, objectiveness and quality to the process, giving us clarity and confidence in our decision-making.",
    attribution: "Karl Schirmer",
    role: "Managing Director, Pantex Pty Ltd",
  },
  form: {
    heading: "Request the SIGNAL sample report",
    intro:
      "See what leadership receives and how SIGNAL turns confidential employee voice into clear business priorities.",
    employeeCountOptions: ["20–49", "50–79", "80–149", "150–299", "300–999", "1,000+"],
    microcopy:
      "We'll contact you directly with the illustrative sample report. Your information is not sold or shared.",
    leadSource: "SIGNAL sample report request",
    landingPage: "/signal-report",
  },
  finalCta: {
    eyebrow: "READY TO SEE SIGNAL IN PRACTICE?",
    h2: "See what SIGNAL could uncover in your business.",
    body: "Request the illustrative sample report and see the level of evidence and analysis leadership receives.",
    support: "$2,999 + GST | Employee Voice & Engagement Assessment",
  },
  success: {
    eyebrow: "REQUEST RECEIVED",
    h2: "We'll take it from here.",
    thanks: (firstName: string) =>
      `Thanks, ${firstName}. We'll be in touch directly about the SIGNAL sample report.`,
    preferTalk: "Prefer to talk now?",
    fitMicrocopy: "No obligation. If SIGNAL isn't the right fit, we'll tell you.",
  },
} as const;
