/**
 * Central copy for Glass Partners. Update env vars when quiz + email are final.
 */
export const site = {
  name: "Glass Partners",
  /** Legal/company name used for copyright */
  legalName: "Glass Group",
  /** Core line — footer / positioning */
  positioning:
    "Glass Partners helps businesses scale by strengthening the people system that drives performance.",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "corinne@corinneglass.com",
  brokenGlassTestUrl:
    process.env.NEXT_PUBLIC_BROKEN_GLASS_TEST_URL ??
    "https://forms.gle/DRn1CqWUy7bM2XfR6",
  /** 30-minute intro — used for Start a Conversation, Performance Reset enquiry, Contact section */
  calendlyUrl:
    process.env.NEXT_PUBLIC_CONTACT_CALENDLY_URL ??
    "https://calendly.com/corinne-corinneglass/30min",
  /** Unified conversion entry page */
  startConversationPath: "/start",
  linkedinUrl: "https://www.linkedin.com/in/corinne-glass-mba-8a8400120/",
} as const;

/** Use on Broken Glass CTAs: new tab + security when URL is off-site. */
export function brokenGlassTestLinkProps(): {
  target?: "_blank";
  rel?: string;
} {
  const url = site.brokenGlassTestUrl;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}

export function calendlyLinkProps(): { target: "_blank"; rel: string } {
  return { target: "_blank", rel: "noopener noreferrer" };
}

export const flywheelPhases = [
  {
    label: "Leadership sets the standard",
    detail:
      "Standards and behaviour define what the organisation rewards and tolerates.",
  },
  {
    label: "Culture drives behaviour",
    detail:
      "Alignment and trust turn groups into teams that consistently deliver.",
  },
  {
    label: "Teams deliver outcomes",
    detail: "How work gets done becomes what the business is known for.",
  },
  {
    label: "Reputation attracts better talent",
    detail: "The right people choose you — and raise the bar again.",
  },
] as const;

/** Optional — used by `SocialProof.tsx` if wired in */
export const testimonials = [
  {
    quote:
      "Corinne doesn't just talk about leadership, she drives execution. Clear direction, strong accountability, and things actually get done.",
    attribution: "— Simon, CTO, Digital Learning Platform",
  },
  {
    quote:
      "Corinne has a unique ability to rapidly understand people: what they are trying to say and what they need to hear. She brought integrity, objectiveness and quality to the process, giving us clarity and confidence in our decision-making.",
    attribution: "— Karl Schirmer, Managing Director, Pantex Pty Ltd",
  },
  {
    quote:
      "Corinne brings clarity where things feel stuck. She aligns teams, lifts standards, and gets performance moving again.",
    attribution: "— Sam, Senior Leader, SaaS",
  },
] as const;
