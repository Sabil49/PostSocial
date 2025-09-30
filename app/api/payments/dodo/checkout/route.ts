import { NextRequest, NextResponse } from "next/server";
import { Checkout } from "@dodopayments/nextjs";

export async function POST(req: NextRequest) {
    const { plan_id, customer } = await req.json();
    if (!plan_id || !customer || !customer.email) {
        return NextResponse.json(
            { error: "Missing planId or customerEmail" },
            { status: 400 }
        );
    }

  // Dodo Checkout handler for subscriptions
  const handler = Checkout({
    bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
    returnUrl: process.env.DODO_PAYMENTS_RETURN_URL!,
    environment: process.env.DODO_PAYMENTS_ENVIRONMENT === "live_mode" ? "live_mode" : process.env.DODO_PAYMENTS_ENVIRONMENT === "test_mode" ? "test_mode" : undefined,
    type: "session", // use session for recurring/subscription flows
  });

  // forward the NextRequest object directly
  return handler(req);
};
