import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryAction =
  | { kind: "link"; href: string; label: string; className?: string; linkProps?: Record<string, string> }
  | { kind: "external"; href: string; label: string; linkProps?: Record<string, string> };

export type HowWeHelpOfferCardProps = {
  title: ReactNode;
  children: ReactNode;
  primary: PrimaryAction;
  /** Optional second action (e.g. Broken Glass Test: underlined Learn more). */
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function HowWeHelpOfferCard({
  title,
  children,
  primary,
  secondaryHref,
  secondaryLabel = "Learn more",
}: HowWeHelpOfferCardProps) {
  const primaryClass =
    "inline-flex justify-center rounded-[4px] bg-[#B5332E] px-5 py-3 text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E]";
  const secondaryClass =
    "inline-flex justify-center text-[14px] font-semibold text-[#F7F5F2] underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white/55";

  return (
    <article className="group flex h-full flex-col rounded-[6px] border border-white/15 bg-[#0E1A2B] p-7 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow,transform] duration-200 hover:border-white/25 hover:shadow-[0_22px_48px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-0.5">
      <h3 className="font-display text-xl font-semibold text-[#F7F5F2] sm:text-2xl [&_sup]:text-[#F7F5F2]">{title}</h3>
      <p className="mt-4 flex-1 text-[15px] font-medium leading-relaxed text-[#F7F5F2] sm:text-[16px]">
        {children}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
        {primary.kind === "link" ? (
          <Link href={primary.href} className={primaryClass}>
            {primary.label}
          </Link>
        ) : (
          <a href={primary.href} {...(primary.linkProps ?? {})} className={primaryClass}>
            {primary.label}
          </a>
        )}
        {secondaryHref ? (
          <Link href={secondaryHref} className={secondaryClass}>
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
