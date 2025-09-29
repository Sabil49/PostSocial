import { NextRequest } from "next/server";
import { Checkout } from "@dodopayments/nextjs";

export const POST = async (req: NextRequest) => {
    //  const { planId, customerEmail } = await req.json();
     
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
