import { NextRequest, NextResponse } from "next/server";

// TODO: Wire up Stripe Webhook (Step: Backend)
// Required env vars: STRIPE_WEBHOOK_SECRET, KV_REST_API_URL, KV_REST_API_TOKEN

export async function POST(req: NextRequest) {
  // Stripe webhook handler — to be implemented
  return NextResponse.json({ received: true });
}
