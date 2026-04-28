import { NextRequest, NextResponse } from "next/server";

// TODO: Wire up Buttondown API (Step: Backend)
// Required env vars: BUTTONDOWN_API_KEY

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Ungültige Email-Adresse." }, { status: 400 });
    }

    if (!process.env.BUTTONDOWN_API_KEY) {
      // Graceful stub — accept the request silently in preview
      console.log("[Newsletter stub] Would subscribe:", email);
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, tags: ["hoko-drop01"] }),
    });

    if (!res.ok) {
      const data = await res.json();
      // Already subscribed is fine
      if (data?.code === "email_already_exists") {
        return NextResponse.json({ ok: true });
      }
      return NextResponse.json({ error: "Newsletter-Fehler." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Serverfehler." }, { status: 500 });
  }
}
