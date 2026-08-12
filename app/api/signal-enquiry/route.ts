import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type Body = {
  firstName?: string;
  workEmail?: string;
  organisation?: string;
  role?: string;
  message?: string;
  employeeCount?: string;
  website?: string;
  lead_source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  if (body.website && body.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const firstName = body.firstName?.trim() ?? "";
  const workEmail = body.workEmail?.trim() ?? "";
  const organisation = body.organisation?.trim() ?? "";
  const employeeCount = body.employeeCount?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!firstName || !workEmail || !organisation || !employeeCount) {
    return NextResponse.json(
      { success: false, message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isEmail(workEmail)) {
    return NextResponse.json({ success: false, message: "Enter a valid work email." }, { status: 400 });
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Form is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "SIGNAL enquiry — Glass Partners",
        from_name: firstName,
        email: workEmail,
        organisation,
        role: body.role?.trim() || "Not provided",
        employee_count: employeeCount,
        message: message || "Not provided",
        lead_source: body.lead_source || "SIGNAL enquiry",
        utm_source: body.utm_source || "",
        utm_medium: body.utm_medium || "",
        utm_campaign: body.utm_campaign || "",
        utm_term: body.utm_term || "",
        utm_content: body.utm_content || "",
      }),
    });

    const data = (await response.json()) as { success?: boolean; message?: string };

    if (response.ok && data.success) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: data.message || "Something went wrong. Please try again." },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Network error. Please try again." },
      { status: 502 },
    );
  }
}
