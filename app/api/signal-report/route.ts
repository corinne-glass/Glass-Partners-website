import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type Body = {
  firstName?: string;
  workEmail?: string;
  company?: string;
  role?: string;
  employeeCount?: string;
  website?: string;
  lead_source?: string;
  landing_page?: string;
  referring_url?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readWeb3FormsResult(response: Response): Promise<{
  success?: boolean;
  message?: string;
}> {
  const raw = await response.text();
  if (!raw.trim()) return {};

  try {
    return JSON.parse(raw) as { success?: boolean; message?: string };
  } catch {
    console.error(
      `SIGNAL form: Web3Forms returned non-JSON body (status ${response.status})`,
    );
    return {};
  }
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
  const company = body.company?.trim() ?? "";
  const role = body.role?.trim() ?? "";
  const employeeCount = body.employeeCount?.trim() ?? "";

  if (!firstName || !workEmail || !company || !role || !employeeCount) {
    return NextResponse.json(
      { success: false, message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isEmail(workEmail)) {
    return NextResponse.json({ success: false, message: "Enter a valid work email." }, { status: 400 });
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  const keyConfigured = Boolean(accessKey);
  if (!keyConfigured) {
    console.error("SIGNAL form: Web3Forms access key missing (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY)");
    return NextResponse.json(
      { success: false, message: "Form is not configured yet." },
      { status: 503 },
    );
  }

  const timestamp = new Date().toISOString();
  const origin = request.headers.get("origin") || "https://www.glasspartners.com.au";
  const referer =
    request.headers.get("referer") || "https://www.glasspartners.com.au/signal-report";

  // Match the proven payload shape used by StartConversationForm / SIGNAL enquiry:
  // access_key, subject, from_name, email, and a message body are required for reliable delivery.
  const web3Payload = {
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
      `Lead source: ${body.lead_source || "SIGNAL sample report request"}`,
      `Landing page: ${body.landing_page || "/signal-report"}`,
    ].join("\n"),
    lead_source: body.lead_source || "SIGNAL sample report request",
    landing_page: body.landing_page || "/signal-report",
    referring_url: body.referring_url || "",
    timestamp,
    utm_source: body.utm_source || "",
    utm_medium: body.utm_medium || "",
    utm_campaign: body.utm_campaign || "",
    utm_term: body.utm_term || "",
    utm_content: body.utm_content || "",
  };

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: referer,
      },
      body: JSON.stringify(web3Payload),
      cache: "no-store",
    });

    const data = await readWeb3FormsResult(response);

    if (response.ok && data.success) {
      return NextResponse.json({ success: true });
    }

    console.error(
      `SIGNAL form: Web3Forms returned status ${response.status}${data.success === false ? " (success=false)" : ""}`,
    );

    return NextResponse.json(
      {
        success: false,
        message: data.message || "Something went wrong. Please try again.",
      },
      { status: 502 },
    );
  } catch (error) {
    const name = error instanceof Error ? error.name : "UnknownError";
    console.error(`SIGNAL form: Web3Forms fetch failed (${name})`);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}
