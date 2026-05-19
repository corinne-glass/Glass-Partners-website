"use client";

import { ReactNode, useRef, useState } from "react";
import NewsletterModal from "./NewsletterModal";

type NewsletterSubscribeProps = {
  /** When set, replaces default trigger styles (e.g. to match sibling CTA cards). */
  className?: string;
  children?: ReactNode;
};

export default function NewsletterSubscribe({ className, children }: NewsletterSubscribeProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const defaultTriggerClass =
    "inline-flex items-center justify-center w-full rounded-[4px] border border-[#142033]/30 bg-transparent px-4 py-2 text-[13px] font-semibold tracking-[0.02em] text-[#142033] hover:bg-[#142033]/5 transition-colors whitespace-nowrap";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? defaultTriggerClass}
      >
        {children ?? "Join the Newsletter"}
      </button>
      <NewsletterModal
        open={open}
        onClose={() => setOpen(false)}
        triggerRef={triggerRef}
      />
    </>
  );
}
