"use client";

import { FormEvent, useMemo, useState } from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  whatIsHappening: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  companySize: "",
  whatIsHappening: "",
};

const COMPANY_SIZE_OPTIONS = ["Under 50", "51-150", "151-300", "301-500", "500+"] as const;

type Props = {
  /** Prefills enquiry subject / type (e.g. SIGNAL) */
  enquiryType?: string;
};

export default function StartConversationForm({ enquiryType }: Props) {
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const subject = enquiryType?.trim()
    ? `${enquiryType.trim()} enquiry — Glass Partners`
    : "Start the Conversation enquiry — Glass Partners";

  const canSubmit = useMemo(
    () =>
      values.name.trim() &&
      values.email.trim() &&
      values.company.trim() &&
      values.companySize.trim(),
    [values],
  );

  const setField = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accessKey?.trim()) {
      setStatus("error");
      setErrorMessage("Enquiry form is not configured yet.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim() || "Not provided",
          company: values.company.trim(),
          company_size: values.companySize,
          enquiry_type: enquiryType?.trim() || "General",
          message: values.whatIsHappening.trim() || "No additional context provided.",
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        body?: { message?: string };
      };

      if (response.ok && data.success) {
        setStatus("success");
        setValues(initialState);
        return;
      }

      setStatus("error");
      setErrorMessage(data.message || data.body?.message || "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="rounded-[8px] border border-[#0f172a]/12 bg-white p-6 sm:p-7">
      <h2 className="font-display text-[31px] leading-[1.06] tracking-[-0.02em] text-[#0f172a]">
        Send a quick enquiry
      </h2>
      <p className="mt-3 text-[15px] leading-[1.7] text-[#334155]">
        {enquiryType?.trim()
          ? `Enquiry regarding ${enquiryType.trim()}. Share context first and we will come back to you.`
          : "For people who want to share context first."}
      </p>

      {status === "success" ? (
        <p className="mt-6 rounded-[6px] border border-[#0f172a]/12 bg-[#f8f7f4] px-4 py-3 text-[15px] leading-relaxed text-[#0f172a]">
          Thanks for sharing context. We will review this and come back to you with the most useful next step.
        </p>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#475569]">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                value={values.name}
                onChange={(e) => setField("name", e.target.value)}
                className="w-full rounded-[4px] border border-[#cfd4dc] px-3.5 py-2.5 text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#0f172a]/30"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#475569]">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                className="w-full rounded-[4px] border border-[#cfd4dc] px-3.5 py-2.5 text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#0f172a]/30"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#475569]">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => setField("phone", e.target.value)}
                className="w-full rounded-[4px] border border-[#cfd4dc] px-3.5 py-2.5 text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#0f172a]/30"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#475569]">
                Company
              </span>
              <input
                type="text"
                name="company"
                required
                autoComplete="organization"
                value={values.company}
                onChange={(e) => setField("company", e.target.value)}
                className="w-full rounded-[4px] border border-[#cfd4dc] px-3.5 py-2.5 text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#0f172a]/30"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#475569]">
              Company size
            </span>
            <select
              name="company_size"
              required
              value={values.companySize}
              onChange={(e) => setField("companySize", e.target.value)}
              className="w-full rounded-[4px] border border-[#cfd4dc] bg-white px-3.5 py-2.5 text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#0f172a]/30"
            >
              <option value="">Select company size</option>
              {COMPANY_SIZE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#475569]">
              What is happening in the business?
            </span>
            <textarea
              name="what_is_happening"
              rows={5}
              value={values.whatIsHappening}
              onChange={(e) => setField("whatIsHappening", e.target.value)}
              placeholder="Tell me what feels stuck, messy, heavy, or harder than it should be."
              className="w-full rounded-[4px] border border-[#cfd4dc] px-3.5 py-3 text-[15px] leading-relaxed text-[#0f172a] outline-none transition-colors placeholder:text-[#64748b] focus:border-[#0f172a]/30"
            />
          </label>

          {status === "error" && errorMessage && (
            <p className="text-[14px] font-medium text-[#B5332E]" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting" || !canSubmit}
            className="inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-6 py-3 text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] disabled:pointer-events-none disabled:opacity-55"
          >
            {status === "submitting" ? "Sending..." : "Send Enquiry"}
          </button>

          <p className="text-[14px] leading-relaxed text-[#475569]">
            We will review this and come back to you with the most useful next step.
          </p>
        </form>
      )}
    </div>
  );
}
