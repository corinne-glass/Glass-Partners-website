"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { signal } from "@/content/signal";

const btnPrimary =
  "inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-[22px] py-[15px] text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5332E]";

const btnPrimaryCompact =
  "inline-flex items-center justify-center whitespace-nowrap rounded-[4px] bg-[#B5332E] px-5 py-3.5 text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5332E] sm:px-[22px] sm:py-[15px] sm:text-[16px]";

export function SignalHeroCta({
  className,
  compact,
  fullWidth,
}: {
  className?: string;
  compact?: boolean;
  fullWidth?: boolean;
}) {
  const styles = className ?? (compact ? btnPrimaryCompact : btnPrimary);

  return (
    <a
      href="#enquiry"
      className={`${styles}${fullWidth ? " w-full" : ""}`}
      onClick={() => trackEvent("signal_hero_cta_click", { location: "hero" })}
    >
      {signal.hero.ctaLabel}
    </a>
  );
}

export function SignalEnquiryCta({
  label = "Talk about SIGNAL",
  eventName = "signal_talk_click",
  location,
  className,
}: {
  label?: string;
  eventName?: string;
  location: string;
  className?: string;
}) {
  const styles = className ?? `${btnPrimaryCompact} w-full sm:w-auto`;

  return (
    <a
      href="#enquiry"
      className={styles}
      onClick={() => trackEvent(eventName, { location })}
    >
      {label}
    </a>
  );
}

export function SignalTalkCta({
  label = "Talk about SIGNAL",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <SignalEnquiryCta
      label={label}
      eventName="signal_talk_click"
      location="receive"
      className={className}
    />
  );
}

export function SignalStartConversationCta({
  className = btnPrimary,
  fullWidth,
}: {
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <a
      href="#enquiry"
      className={`${className}${fullWidth ? " w-full" : ""}`}
      onClick={() => trackEvent("signal_start_conversation_click", { location: "final" })}
    >
      Talk about SIGNAL
    </a>
  );
}

export function SignalServiceLink({
  href,
  service,
  children,
  className,
}: {
  href: string;
  service: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent("signal_internal_service_link_click", { service })}
    >
      {children}
    </Link>
  );
}
