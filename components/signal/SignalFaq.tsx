"use client";

import { useId, useState } from "react";
import { signal } from "@/content/signal";

export default function SignalFaq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#0E1A2B]/12 border-y border-[#0E1A2B]/12">
      {signal.faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-q-${index}`;
        const panelId = `${baseId}-a-${index}`;

        return (
          <div key={faq.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5332E]"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-[17px] font-semibold leading-snug text-[#0E1A2B] sm:text-[18px]">
                  {faq.q}
                </span>
                <span className="mt-0.5 shrink-0 text-[22px] leading-none text-[#B5332E]" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="pb-5">
              <p className="max-w-3xl text-[16px] leading-[1.75] text-[#334155]">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
