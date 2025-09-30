
import { Checkout } from "@dodopayments/nextjs";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
const handler = Checkout({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY,
  returnUrl: process.env.DODO_PAYMENTS_RETURN_URL,
  environment: process.env.DODO_PAYMENTS_ENVIRONMENT === "live_mode" ? "live_mode" : process.env.DODO_PAYMENTS_ENVIRONMENT === "test_mode" ? "test_mode" : undefined,
  type: "session", // for checkout sessions
});
return handler(req);
}