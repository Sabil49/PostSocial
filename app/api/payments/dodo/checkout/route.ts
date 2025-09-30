// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const response = await fetch("https://test.dodopayments.com/checkouts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.DODO_PAYMENTS_API_KEY}`,
//       },
//       body: JSON.stringify({
//         plan_id: body.plan_id,
//         customer: { email: body.customerEmail },
//         success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
//         cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
//       }),
//     });

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }


// app/checkout/route.ts
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