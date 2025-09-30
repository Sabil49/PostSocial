// app/customer-portal/route.ts
import { NextRequest } from "next/server"
import { CustomerPortal } from "@dodopayments/nextjs"


// Create the handler, but don’t expose customer_id in query params
const handler = CustomerPortal({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
  environment: process.env.DODO_PAYMENTS_ENVIRONMENT === "live_mode" ? "live_mode" : process.env.DODO_PAYMENTS_ENVIRONMENT === "test_mode" ? "test_mode" : undefined,
})

export async function GET(req: NextRequest) {
  // Simulate fetching logged-in user’s customer_id securely
  // Example: from your DB, NextAuth session, or Supabase
  const user = { id: "user_123", customerId: "cus_123" } // replace with real lookup

  // Rewrite the request URL with secured customer_id
  const url = new URL(req.url)
  url.searchParams.set("customer_id", user.customerId)

  // Forward to Dodo’s handler
  return handler(new NextRequest(url, req))
}
