"use client";
import { useSession } from "next-auth/react";
import CustomerPortal from "./customer-portal";


export default function SubscribeButton() {
  const { data: session } = useSession();
  const email= session?.user?.email || "test@example.com";
  const subscribe = async () => {
    const resp = await fetch("/api/payments/dodo/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        plan_id: "pdt_ctSjb2435t8p2c1vQcx98",         // plan created in Dodo dashboard
        customer: { email: email },
      }),
    });

    const text = await resp.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(`Invalid JSON from server: ${text}`);
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
