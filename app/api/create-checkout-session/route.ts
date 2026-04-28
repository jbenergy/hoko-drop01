import { NextRequest, NextResponse } from "next/server";

// TODO: Wire up Stripe Checkout Session (Step: Backend)
// Required env vars: STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, email, quantity } = body;

    if (!firstName || !email || !quantity) {
      return NextResponse.json({ error: "Fehlende Pflichtfelder." }, { status: 400 });
    }

    // Stripe not configured yet — return placeholder error
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Zahlung aktuell nicht verfügbar. Bitte versuch es später nochmal." },
        { status: 503 }
      );
    }

    // Stripe implementation goes here
    return NextResponse.json({ error: "Noch nicht implementiert." }, { status: 501 });
  } catch {
    return NextResponse.json({ error: "Serverfehler." }, { status: 500 });
  }
}
