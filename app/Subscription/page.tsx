"use client";
import CustomerPortal from "./customer-portal";

export default function SubscribeButton() {
  const subscribe = async () => {
    const resp = await fetch("/api/payments/dodo/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        planId: "pdt_ctSjb2435t8p2c1vQcx98",         // plan created in Dodo dashboard
        customerEmail: "test@example.com",    // get customer email from your auth/session system
      }),
    });

    const data = await resp.json();
    if (data.checkout_url) {
      console.log("Redirecting to:", data.checkout_url);
      window.location.href = data.checkout_url; // redirect to hosted checkout
    }
  };

  return (
    <div>
      <button
        onClick={subscribe}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Subscribe Now
      </button>      
      <CustomerPortal />
    </div>
  );
}
