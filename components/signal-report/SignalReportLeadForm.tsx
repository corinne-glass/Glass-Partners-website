"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { calendlyLinkProps, site } from "@/content/site";
import { FORM_ID, signalReport } from "@/content/signal-report";
import { trackEvent } from "@/lib/analytics";
import { captureUtmToSession, readUtmSession, type UtmParams } from "@/lib/utm";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  firstName: string;
  workEmail: string;
  company: string;
  role: string;
  employeeCount: string;
  website: string;
};

const initial: FormState = {
  firstName: "",
  workEmail: "",
  company: "",
  role: "",
  employeeCount: "",
  website: "",
};

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const labelClass =
  "mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#d9bc81]";

const fieldClass =
  "w-full rounded-[4px] border border-[#cfd4dc] bg-white px-3.5 py-2.5 text-[16px] sm:text-[15px] text-[#0E1A2B] outline-none transition-colors focus:border-[#d9bc81]/80 focus-visible:ring-2 focus-visible:ring-[#d9bc81]/20";

export default function SignalReportLeadForm({
  formId = FORM_ID,
  fieldIdPrefix = "sr",
}: {
  formId?: string;
  fieldIdPrefix?: string;
}) {
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [utm, setUtm] = useState<UtmParams>({});
  const [started, setStarted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const { form, success, cta } = signalReport;
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  useEffect(() => {
    captureUtmToSession();
    setUtm(readUtmSession());
  }, []);

  const canSubmit = useMemo(
    () =>
      Boolean(
        values.firstName.trim() &&
          values.workEmail.trim() &&
          values.company.trim() &&
          values.role.trim() &&
          values.employeeCount.trim(),
      ),
    [values],
  );

  const setField = (field: keyof FormState, value: string) => {
    if (!started) {
      setStarted(true);
      trackEvent("signal_report_form_start");
    }
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot — pretend success without contacting Web3Forms.
    if (values.website.trim()) {
      setSubmittedName(values.firstName.trim());
      setStatus("success");
      return;
    }

    if (!accessKey?.trim()) {
      setStatus("error");
      setErrorMessage("Form is not configured yet.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    const firstName = values.firstName.trim();
    const workEmail = values.workEmail.trim();
    const company = values.company.trim();
    const role = values.role.trim();
    const employeeCount = values.employeeCount;

    try {
      // Reuse the proven browser → Web3Forms pattern from StartConversationForm /
      // NewsletterModal. Server-side Vercel → Web3Forms was failing with a generic
      // network error; browser submissions are the working path on this site.
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "SIGNAL sample report request — Glass Partners",
          from_name: firstName,
          email: workEmail,
          first_name: firstName,
          work_email: workEmail,
          company,
          role,
          employee_count: employeeCount,
          message: [
            "SIGNAL sample report request",
            `Role: ${role}`,
            `Company: ${company}`,
            `Employees: ${employeeCount}`,
            `Lead source: ${form.leadSource}`,
            `Landing page: ${form.landingPage}`,
          ].join("\n"),
          lead_source: form.leadSource,
          landing_page: form.landingPage,
          referring_url: typeof document !== "undefined" ? document.referrer || "" : "",
          timestamp: new Date().toISOString(),
          utm_source: utm.utm_source || "",
          utm_medium: utm.utm_medium || "",
          utm_campaign: utm.utm_campaign || "",
          utm_term: utm.utm_term || "",
          utm_content: utm.utm_content || "",
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        body?: { message?: string };
      };

      if (response.ok && data.success) {
        setSubmittedName(firstName);
        setStatus("success");
        trackEvent("signal_report_form_submit", {
          utm_source: utm.utm_source,
          utm_medium: utm.utm_medium,
          utm_campaign: utm.utm_campaign,
          utm_content: utm.utm_content,
        });
        return;
      }

      setStatus("error");
      setErrorMessage(
        data.message || data.body?.message || "Something went wrong. Please try again.",
      );
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        id={formId}
        className="rounded-[4px] border border-white/10 bg-[#0E1A2B] px-5 py-6 sm:px-6 sm:py-7"
        role="status"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5332E]">
          {success.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.25rem,2.2vw,1.6rem)] font-semibold leading-[1.15] text-[#F7F5F2]">
          {success.h2}
        </h2>
        <p className="mt-4 text-[15px] leading-[1.65] text-[#c9c2b3]">
          {success.thanks(submittedName)}
        </p>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-[15px] font-semibold text-[#F7F5F2]">{success.preferTalk}</p>
          <a
            href={site.calendlyUrl}
            {...calendlyLinkProps()}
            className="mt-3 inline-flex items-center justify-center rounded-[4px] border border-white/85 bg-white/[0.08] px-5 py-2.5 text-[14px] font-semibold text-[#F7F5F2] transition-colors hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => trackEvent("signal_fit_call_click", { location: "success" })}
          >
            {cta.fitCall}
          </a>
          <p className="mt-3 text-[12px] leading-relaxed text-[#9ca3af]">{success.fitMicrocopy}</p>
        </div>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="rounded-[4px] border border-white/10 bg-[#0E1A2B] px-5 py-6 sm:px-6 sm:py-7"
      noValidate
    >
      <h3
        data-form-focus
        tabIndex={-1}
        className="font-display text-[18px] sm:text-[19px] font-semibold leading-[1.2] text-[#F7F5F2] outline-none"
      >
        {form.heading}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.55] text-[#c9c2b3]">{form.intro}</p>

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${fieldIdPrefix}-first-name`} className={labelClass}>
            First name <span className="text-[#B5332E]">*</span>
          </label>
          <input
            id={`${fieldIdPrefix}-first-name`}
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
            value={values.firstName}
            onChange={(e) => setField("firstName", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${fieldIdPrefix}-work-email`} className={labelClass}>
            Work email <span className="text-[#B5332E]">*</span>
          </label>
          <input
            id={`${fieldIdPrefix}-work-email`}
            name="work_email"
            type="email"
            autoComplete="email"
            required
            value={values.workEmail}
            onChange={(e) => setField("workEmail", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${fieldIdPrefix}-company`} className={labelClass}>
            Company <span className="text-[#B5332E]">*</span>
          </label>
          <input
            id={`${fieldIdPrefix}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            required
            value={values.company}
            onChange={(e) => setField("company", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${fieldIdPrefix}-role`} className={labelClass}>
            Role <span className="text-[#B5332E]">*</span>
          </label>
          <input
            id={`${fieldIdPrefix}-role`}
            name="role"
            type="text"
            autoComplete="organization-title"
            required
            value={values.role}
            onChange={(e) => setField("role", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${fieldIdPrefix}-employee-count`} className={labelClass}>
            Number of employees <span className="text-[#B5332E]">*</span>
          </label>
          <select
            id={`${fieldIdPrefix}-employee-count`}
            name="employee_count"
            required
            value={values.employeeCount}
            onChange={(e) => setField("employeeCount", e.target.value)}
            className={fieldClass}
          >
            <option value="">Select</option>
            {form.employeeCountOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor={`${fieldIdPrefix}-website`}>Website</label>
        <input
          id={`${fieldIdPrefix}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setField("website", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit || status === "submitting"}
        className="mt-5 w-full rounded-[4px] bg-[#B5332E] px-[22px] py-3 text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5332E]"
      >
        {status === "submitting" ? "Sending..." : cta.primary}
      </button>

      {errorMessage ? (
        <p className="mt-3 text-[14px] text-[#fca5a5]" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <p className="mt-3 text-[12px] leading-relaxed text-[#9ca3af]">{form.microcopy}</p>
    </form>
  );
}
