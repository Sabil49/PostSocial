"use client";
import { useSession } from "next-auth/react";
import CustomerPortal from "./customer-portal";

export default function SubscribeButton() {
  const { data: session } = useSession();
  const email= session?.user?.email || "test@example.com";
  const planId = "pdt_ctSjb2435t8p2c1vQcx98"; // replace with your actual plan ID from Dodo Payments
  const subscribe = async () => {
    const resp = await fetch("/api/payments/dodo/checkout", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.DODO_PAYMENTS_API_KEY}`,
  },
  body: JSON.stringify({
    plan_id: planId,                  // ✅ snake_case
    customer: { email: email },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
  }),
});

    const text = await resp.text();
let data;
try {
  data = JSON.parse(text);
} catch {
  console.error("Dodo API raw response:", text);
  return Response.json({ error: text }, { status: 400 });
}
    
    if (data.checkout_url) {
      console.log("Redirecting to:", data.checkout_url);
      window.location.href = data.checkout_url; // redirect to hosted checkout
    }
  };

  return (
    <div>
      {session && (
        <>
        <button
          onClick={subscribe}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Subscribe Now
        </button>
        <CustomerPortal />
        </>
      )}      
    </div>
  );
}
