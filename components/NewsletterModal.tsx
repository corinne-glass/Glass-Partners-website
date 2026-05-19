"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type RefObject,
} from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type Status = "idle" | "submitting" | "success" | "error";

type NewsletterModalProps = {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

export default function NewsletterModal({ open, onClose, triggerRef }: NewsletterModalProps) {
  const titleId = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const handleClose = useCallback(() => {
    setStatus("idle");
    setErrorMessage(null);
    setEmail("");
    onClose();
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, [onClose, triggerRef]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    emailRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessKey?.trim()) {
      setStatus("error");
      setErrorMessage("Newsletter signups are not configured yet.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          email: email.trim(),
          subject: "Newsletter signup — Glass Partners",
          message: "Signed up from glasspartners.com newsletter modal.",
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
        body?: { message?: string; data?: unknown };
      };

      if (res.ok && data.success === true) {
        setStatus("success");
        return;
      }

      const msg =
        data.message ||
        data.body?.message ||
        (res.status === 429 ? "Too many requests. Please try again later." : "Something went wrong.");
      setStatus("error");
      setErrorMessage(msg);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0E1A2B]/55 backdrop-blur-[2px]"
        aria-label="Close newsletter dialog"
        onClick={handleClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] w-full max-w-[420px] rounded-[6px] border border-[#0E1A2B]/10 bg-[#faf8f5] px-6 py-7 shadow-[0_24px_60px_-20px_rgba(14,26,43,0.32)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id={titleId}
            className="font-display text-xl font-normal tracking-[-0.02em] text-[#0E1A2B] sm:text-2xl"
          >
            Stay close to the thinking
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="-mr-1 -mt-1 shrink-0 rounded p-1.5 text-[#445064] hover:bg-[#0E1A2B]/8 hover:text-[#0E1A2B]"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-[#445064] sm:text-[16px] sm:leading-[1.55]">
          Sharp thinking on leadership, performance, and the systems behind scale.
        </p>

        {status === "success" ? (
          <p className="mt-6 text-[16px] font-medium text-[#0E1A2B]" role="status">
            Thanks — you are on the list. Check your inbox to confirm.
          </p>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                ref={emailRef}
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full appearance-none rounded-[4px] border border-[#cfc9bf] bg-white/95 px-4 py-[13px] text-[16px] text-[#0E1A2B] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] placeholder:text-[#64748b]/70 outline-none ring-0 transition-[border-color,box-shadow,background-color] duration-200 focus:border-[#0E1A2B]/28 focus:bg-white focus:shadow-[inset_0_0_0_1px_rgba(14,26,43,0.06),0_0_0_1px_rgba(14,26,43,0.12)] focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1A2B]/12 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f5]"
              />
            </div>
            {status === "error" && errorMessage && (
              <p className="text-[14px] font-medium text-[#B5332E]" role="alert">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-[4px] bg-[#B5332E] px-5 py-3.5 text-[16px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] disabled:pointer-events-none disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Join the list"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
