/** SIGNAL — Employee Voice & Engagement Assessment (editorial solution page) */

export const signal = {
  productName: "SIGNAL — Employee Voice & Engagement Assessment",
  shortName: "SIGNAL",
  descriptor: "Employee Voice & Engagement Assessment",
  meta: {
    title: "SIGNAL — Employee Voice & Engagement Assessment",
    description:
      "Find out what your people value, what is getting in the way and where attention is needed before disengagement, turnover or poor performance costs the business.",
    ogTitle: "SIGNAL — Employee Voice & Engagement Assessment",
    ogDescription:
      "Find out what your people value, what is getting in the way and where attention is needed before disengagement, turnover or poor performance costs the business.",
    canonical: "/signal",
    ogImage: "/images/signal/signal-employee-voice-social-preview-2026.png",
  },
  hero: {
    eyebrow: "SIGNAL — EMPLOYEE VOICE & ENGAGEMENT ASSESSMENT",
    h1: "FIND OUT WHAT YOUR PEOPLE AREN'T TELLING YOU — BEFORE YOU PAY FOR IT.",
    body: [
      "SIGNAL is an independently run Employee Voice & Engagement Assessment that shows you what is working, what is getting in the way and what deserves attention first.",
      "So you can make decisions about retention, culture, leadership and people investment using evidence rather than assumption.",
    ],
    supporting: "Independent administration. Confidential reporting. Clear priorities. Practical action.",
    ctaLabel: "See if SIGNAL is right for your organisation",
    heroImage: "/images/signal/signal-hero-meeting.png",
    heroAlt: "A diverse team in a collaborative workplace discussion.",
  },
  problem: {
    id: "problem",
    eyebrow: "WHY IT MATTERS",
    h2: "You cannot fix what you cannot see clearly.",
    paragraphs: [
      "Most workplace problems become expensive before they become obvious.",
      "By the time they show up as regrettable turnover, declining performance, repeated hiring, manager frustration or disengagement, the organisation has often been carrying the cost for months.",
      "And if people do not trust the way feedback is collected — or believe anything will happen with what they say — leaders are left making decisions from partial information.",
    ],
    pullLine: "By the time the problem is obvious, you are often already paying for it.",
  },
  campaignSlogan: {
    line: "THE MOST EXPENSIVE EMPLOYEE FEEDBACK IS THE FEEDBACK YOU GET TOO LATE.",
  },
  why: {
    id: "why-signal",
    eyebrow: "WHY SIGNAL",
    h2: "NOT ANOTHER ENGAGEMENT SURVEY.",
    intro:
      "Most employee surveys stop at collection. SIGNAL is designed around what happens before and after the questions are asked: trust in the process, interpretation of what the data actually means, and a clear decision about what happens next.",
    tiles: [
      {
        front: "People say more when you're not the one asking.",
        reverseHeading: "Closer to the truth",
        reverseCopy: [
          "Glass Partners runs SIGNAL independently. Individual responses are not shared, small groups are protected and employee comments are de-identified.",
          "That creates better conditions for people to say what they may not feel safe saying directly to their employer.",
        ],
        motif: "independentVoice" as const,
      },
      {
        front: "A score doesn't tell you what to do.",
        reverseHeading: "Beyond the score",
        reverseCopy: [
          "We interpret what is driving the result — where friction is showing up, which groups are experiencing it and what it may mean for retention, culture and performance.",
        ],
        motif: "hiddenCost" as const,
      },
      {
        front: "Your employer brand already exists inside the business.",
        reverseHeading: "A more credible employer promise",
        reverseCopy: [
          "SIGNAL identifies what employees genuinely value and what the organisation should protect.",
          "Those truths can strengthen culture, shape the employee value proposition and give future employees a more credible reason to join.",
        ],
        motif: "employerBrand" as const,
      },
      {
        front: "Feedback without action destroys trust.",
        reverseHeading: "From employee voice to action",
        reverseCopy: [
          "SIGNAL turns the findings into clear priorities, an executive presentation and practical recommendations for what should happen next.",
          "The organisation can act internally or engage Glass Partners to help deliver the work.",
        ],
        motif: "action" as const,
      },
    ],
  },
  reveals: {
    eyebrow: "WHAT SIGNAL REVEALS",
    h2: "FIND THE FRICTION BEFORE YOU TRY TO FIX IT.",
    intro: [
      "SIGNAL helps distinguish what is working, what is creating friction and what deserves attention first — before time and money are spent solving the wrong problem.",
    ],
    findings: [
      {
        heading: "What is working",
        copy: "See what people value most about working in your organisation and what is worth protecting as you grow.",
        support: "These strengths can reinforce culture, retention and your employer brand.",
      },
      {
        heading: "What is getting in the way",
        copy: "Identify the conditions creating frustration, slowing people down or increasing the risk that good people disengage or leave.",
        support: "This shows you where time, attention and investment may be needed.",
      },
      {
        heading: "What deserves attention first",
        copy: "Separate the issues that matter from the noise so you can focus on the changes most likely to improve the employee experience and strengthen the business.",
      },
    ],
    fractures: {
      heading: "THE FIVE FRACTURES",
      intro:
        "Employee feedback often reveals recurring patterns that create friction as a business grows.",
      items: [
        {
          name: "Leadership Drift",
          explanation:
            "Direction, standards or leadership behaviour are inconsistent, leaving people unclear on what matters and what good looks like.",
        },
        {
          name: "Decision Drag",
          explanation:
            "Decisions, approvals or processes create unnecessary friction, slowing work and pushing authority back up the business.",
        },
        {
          name: "Capability Debt",
          explanation:
            "Skills, capacity, tools or systems have not kept pace with what the business now expects people to deliver.",
        },
        {
          name: "Signal Breakdown",
          explanation:
            "What the organisation says and what people experience do not match, internally or externally.",
        },
        {
          name: "Accountability Theatre",
          explanation:
            "Ownership is discussed, but expectations, follow-through and consequences remain unclear.",
        },
      ],
      closing: "SIGNAL gives you the evidence. The Five Fractures help explain the pattern.",
    },
  },
  report: {
    id: "what-you-receive",
    eyebrow: "WHAT YOU RECEIVE",
    h2: "More than results. A clear case for what should happen next.",
    intro:
      "SIGNAL brings the data, employee voice and Glass Partners interpretation together so you can see what matters, why it matters and where to focus.",
    lead: "You do not leave with a survey score and a dashboard. You leave knowing what to protect, what needs attention and what should happen next.",
    outcomes: [
      {
        num: "01",
        heading: "The workplace picture",
        copy: "What employees are experiencing and the themes shaping engagement, retention and performance.",
      },
      {
        num: "02",
        heading: "The evidence",
        copy: "Where experiences differ across teams, locations or workforce groups, supported by de-identified comments and recurring themes.",
      },
      {
        num: "03",
        heading: "The priorities",
        copy: "What is worth protecting, what needs attention and what is most likely to affect the business.",
      },
      {
        num: "04",
        heading: "The action",
        copy: "Practical recommendations and a focused roadmap for what should happen next.",
      },
    ],
    pullLine:
      "You should leave SIGNAL knowing what to protect, what to change and what not to waste money fixing.",
    ctaLabel: "Talk about SIGNAL",
  },
  process: {
    eyebrow: "HOW IT WORKS",
    h2: "Listen. See clearly. Act.",
    phases: [
      {
        num: "01",
        heading: "Listen",
        copy: "We configure the assessment, prepare the employee communication and run SIGNAL independently so people have a credible way to share what they are experiencing.",
      },
      {
        num: "02",
        heading: "See clearly",
        copy: "We analyse the results, comments and differences across agreed workforce groups to identify the patterns that matter most.",
      },
      {
        num: "03",
        heading: "Act",
        copy: "We present the findings, recommend the priorities and show the organisation what to communicate and where to focus next.",
      },
    ],
  },
  forYou: {
    id: "signal-for-you",
    eyebrow: "WHO IT'S FOR",
    h2: "SIGNAL IS BUILT FOR BUSINESSES ASKING QUESTIONS LIKE:",
    questions: [
      "Why are good people leaving?",
      "Why does engagement feel different across teams?",
      "What is making work harder than it needs to be?",
      "Are our leaders part of the problem?",
      "What should we fix first?",
      "What do our people actually value about working here?",
      "Where should we invest — and where are we about to waste money?",
    ],
    closing:
      "If you're relying on anecdotes, exit interviews or leadership assumptions to answer these questions, SIGNAL gives you a stronger evidence base.",
  },
  ways: {
    eyebrow: "WHAT HAPPENS NEXT",
    h2: "THE REPORT IS YOURS. WHAT HAPPENS NEXT IS YOUR CHOICE.",
    intro: [
      "Use it internally. Take the priorities and recommendations into your existing people plan and leadership agenda.",
      "Or bring Glass Partners in. Where the findings expose deeper leadership, accountability, capability or execution problems, we can help address them.",
    ],
    options: [
      {
        heading: "Use the findings internally",
        paragraphs: [
          "Take the report, priorities and recommendations into your existing people plan and leadership agenda.",
          "You have a clear evidence base for where to focus, what to communicate and what to measure next.",
        ],
        ctaLabel: "Talk about SIGNAL",
        ctaHref: "#enquiry",
        ctaEvent: "signal_start_with_click" as const,
      },
      {
        heading: "Bring Glass Partners in",
        paragraphs: [
          "Where the findings point to deeper issues, Glass Partners can help address the conditions underneath them.",
          "That may include leadership, accountability, capability, employer brand, workforce planning or broader execution issues linked to the Five Fractures.",
        ],
        ctaLabel: "Talk about SIGNAL",
        ctaHref: "#enquiry",
        ctaEvent: "signal_next_talk_click" as const,
        showFracture: true,
      },
    ],
    closing: "Either way, SIGNAL stands on its own.",
  },
  outcome: {
    eyebrow: "THE OUTCOME",
    h2: "MAKE BETTER PEOPLE DECISIONS BEFORE THE PROBLEM GETS MORE EXPENSIVE.",
    body: "Know what to protect. Know what is getting in the way. Know where to invest. And know what needs to change before disengagement becomes another resignation, another hire or another performance problem.",
    points: [
      { num: "01", label: "Reduce avoidable turnover" },
      { num: "02", label: "Focus people investment" },
      { num: "03", label: "Strengthen leadership and performance" },
      { num: "04", label: "Build a more credible employer brand" },
    ],
    pullLine: "Stop spending money replacing people before understanding why they leave.",
  },
  testimonial: {
    eyebrow: "WHAT PEOPLE SAY",
    quote:
      "Corinne has a unique ability to rapidly understand people: what they are trying to say and what they need to hear. She brought integrity, objectiveness and quality to the process, giving us clarity and confidence in our decision-making.",
    attribution: "Karl Schirmer, Managing Director, Pantex Pty Ltd",
  },
  faqs: [
    {
      q: "Are employee responses anonymous?",
      a: "Individual responses are not shared with the organisation. Results are reported in aggregate, small groups are protected and comments are de-identified before they appear in the report.",
    },
    {
      q: "How long does SIGNAL take?",
      a: "The assessment is normally open for two weeks. From initial setup to executive presentation, most projects take approximately four to five weeks.",
    },
    {
      q: "Can SIGNAL be tailored?",
      a: "Yes. The core assessment remains consistent, while workforce groups and selected additional questions can be tailored to the organisation and what it needs to understand. The core assessment includes 45 agreement statements, one employee advocacy question and four open-text questions.",
    },
    {
      q: "What happens after the report?",
      a: "The organisation can use the findings and recommendations to build its own people plan, or engage Glass Partners for action planning and implementation support.",
    },
  ],
  fitCheck: {
    id: "signal-fit",
    h2: "IS SIGNAL RIGHT FOR YOUR ORGANISATION?",
    intro: "SIGNAL is most useful when:",
    points: [
      "you have enough employees to see meaningful patterns;",
      "leadership wants evidence rather than another opinion;",
      "there is a genuine willingness to hear what employees say;",
      "the organisation is prepared to act on what it learns.",
    ],
    antiFit:
      "If the organisation wants a survey purely to prove everything is fine, SIGNAL is probably not the right fit.",
  },
  enquiry: {
    id: "enquiry",
    h2: "Find out what your people are not telling you.",
    copy: [
      "Tell us what you need to understand about your people, culture or performance.",
      "We'll have a short conversation to determine whether SIGNAL is the right fit, what should be measured and what the process would look like for your organisation.",
    ],
    supporting: "A practical fit conversation. If SIGNAL isn't the right solution, we'll tell you.",
    formEyebrow: "Talk about SIGNAL",
    ctaLabel: "Talk about SIGNAL",
    success: "Thank you. Your enquiry has been received and Corinne will be in touch.",
  },
  productCard: {
    title: "SIGNAL — Employee Voice & Engagement Assessment",
    copy: "An independently administered assessment that reveals what your people value, where the workplace experience needs to improve and what should happen next.",
    cta: "Explore SIGNAL",
    href: "/signal",
  },
} as const;
