"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { signal } from "@/content/signal";
import { trackEvent } from "@/lib/analytics";
import { readUtmFromLocation, type UtmParams } from "@/lib/utm";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  firstName: string;
  workEmail: string;
  organisation: string;
  role: string;
  employeeCount: string;
  message: string;
  website: string;
};

const initial: FormState = {
  firstName: "",
  workEmail: "",
  organisation: "",
  role: "",
  employeeCount: "",
  message: "",
  website: "",
};

const EMPLOYEE_OPTIONS = ["20–49", "50–149", "150–299", "300–999", "1,000+"];

export default function SignalEnquiryForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [utm, setUtm] = useState<UtmParams>({});
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setUtm(readUtmFromLocation());
  }, []);

  const canSubmit = useMemo(
    () =>
      Boolean(
        values.firstName.trim() &&
          values.workEmail.trim() &&
          values.organisation.trim() &&
          values.employeeCount.trim(),
      ),
    [values],
  );

  const setField = (field: keyof FormState, value: string) => {
    if (!started) {
      setStarted(true);
      trackEvent("signal_start_conversation_click", { location: "enquiry" });
      trackEvent("signal_enquiry_form_start");
    }
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/signal-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName: values.firstName.trim(),
          workEmail: values.workEmail.trim(),
          organisation: values.organisation.trim(),
          role: values.role.trim(),
          employeeCount: values.employeeCount,
          message: values.message.trim(),
          website: values.website,
          lead_source: "SIGNAL enquiry",
          ...utm,
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && data.success) {
        setStatus("success");
        trackEvent("signal_enquiry_form_submit", {
          utm_source: utm.utm_source,
          utm_medium: utm.utm_medium,
          utm_campaign: utm.utm_campaign,
        });
        setValues(initial);
        return;
      }

      setStatus("error");
      setErrorMessage(data.message || "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const fieldClass =
    "w-full rounded-[4px] border border-[#cfd4dc] bg-white px-3.5 py-2.5 text-[15px] text-[#0E1A2B] outline-none transition-colors focus:border-[#0E1A2B]/35";

  const labelClass =
    "mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#d9bc81]";

  if (status === "success") {
    return (
      <p
        className="rounded-[6px] border border-[#0E1A2B]/12 bg-white px-5 py-4 text-[16px] leading-relaxed text-[#0E1A2B]"
        role="status"
      >
        {signal.enquiry.success}
      </p>
    );
  }

  return (
    <form className="relative space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>
            First name<span className="text-[#B5332E]">*</span>
          </span>
          <input
            type="text"
            name="first_name"
            required
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) => setField("firstName", e.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>
            Work email<span className="text-[#B5332E]">*</span>
          </span>
          <input
            type="email"
            name="work_email"
            required
            autoComplete="email"
            value={values.workEmail}
            onChange={(e) => setField("workEmail", e.target.value)}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>
          Organisation<span className="text-[#B5332E]">*</span>
        </span>
        <input
          type="text"
          name="organisation"
          required
          autoComplete="organization"
          value={values.organisation}
          onChange={(e) => setField("organisation", e.target.value)}
          className={fieldClass}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Role</span>
          <input
            type="text"
            name="role"
            autoComplete="organization-title"
            value={values.role}
            onChange={(e) => setField("role", e.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>
            Approximate employee number<span className="text-[#B5332E]">*</span>
          </span>
          <select
            name="employee_count"
            required
            value={values.employeeCount}
            onChange={(e) => setField("employeeCount", e.target.value)}
            className={fieldClass}
          >
            <option value="">Select</option>
            {EMPLOYEE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>What would you like to understand or improve?</span>
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          className={`${fieldClass} leading-relaxed`}
        />
      </label>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => setField("website", e.target.value)}
          />
        </label>
      </div>

      {status === "error" && errorMessage && (
        <p className="text-[14px] font-medium text-[#F7B4AE]" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || !canSubmit}
        className="inline-flex w-full items-center justify-center rounded-[4px] bg-[#B5332E] px-6 py-3.5 text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] disabled:pointer-events-none disabled:opacity-55 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Talk about SIGNAL"}
      </button>
    </form>
  );
}
