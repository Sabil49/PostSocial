// app/api/checkout/route.ts
// import { NextResponse } from "next/server";
// import DodoPayments from "dodopayments";

// const client = new DodoPayments({
//   bearerToken: process.env.DODO_PAYMENTS_API_KEY
// });

// export async function POST(req: Request) {
//   try {
//     const { planId, customerEmail, name } = await req.json();
//     // Create a subscription checkout session
//     const checkoutSessionResponse = await client.checkoutSessions.create({
//   product_cart: [{ product_id: planId, quantity: 1 }],
//   customer: { email: customerEmail , name: name },
//   return_url: process.env.DODO_PAYMENTS_RETURN_URL,
// });

//     return NextResponse.json({ checkout_url: checkoutSessionResponse });
//   } catch (error) {
//     if (error instanceof Error) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//     return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
//   }
// }

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