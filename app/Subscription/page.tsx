"use client";
import { useSession } from "next-auth/react";
import CustomerPortal from "./customer-portal";
import { useState } from "react";

export default function SubscribeButton() {
  const [loading, setLoading] = useState(false);
  const { data: userSession } = useSession();

  const email= userSession?.user?.email || "test@example.com";

  const planId = "pdt_ctSjb2435t8p2c1vQcx98"; // replace with your actual plan ID from Dodo Payments
  
  // async function handleSubscribe() {
  //   setLoading(true);
  //   const res = await fetch("api/payments/dodo/checkout", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.DODO_PAYMENTS_API_KEY}` },
  //     body: JSON.stringify({
  //       planId: planId, // Example plan ID
  //       customerEmail: email,
  //       name: userSession?.user?.name || "Test User",
  //     }),
  //   });
  //       if (!res.ok) {
  //     throw new Error(`HTTP error! status: ${res.status}`);
  //   }

  //   const checkoutSession = await res.json();
  //   console.log('Checkout Session:>>>>>>>>>>');
  //   console.log(checkoutSession);
  //   if (checkoutSession.checkout_url) {
  //     window.location.href = checkoutSession.checkout_url; // Redirect to checkout
  //   }
  //   setLoading(false);
  // }
  // Direct API call using fetch - useful for any JavaScript environment
const createCheckoutSession = async () => {
  try {
    const response = await fetch('api/payments/dodo/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DODO_PAYMENTS_API_KEY}`
      },
      body: JSON.stringify({
        // Products to sell - use IDs from your Dodo Payments dashboard
        product_cart: [
          {
            product_id: planId, // Replace with your actual product ID
            quantity: 1
          }
        ],
        
        // Pre-fill customer information to reduce checkout friction
        customer: {
          email: email,
          name: userSession?.user?.name || "Test User",
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const checkoutSession = await response.json();
    console.log('Checkout Session:===========>');
    console.log(checkoutSession);
    // Redirect your customer to this URL to complete payment
    console.log('Checkout URL:', checkoutSession.checkout_url);

    if (checkoutSession && checkoutSession.checkout_url) {
      window.location.href = checkoutSession.checkout_url;
      return checkoutSession;
    }
    
  } catch (error) {
    console.error('Failed to create checkout session:', error);
    throw error;
  }
}

  return (
    <div>
      {userSession && (
        <>
        <button
          onClick={createCheckoutSession}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Subscribe Now
        </button>
        {/* <button onClick={handleSubscribe} disabled={loading}>
          {loading ? "Redirecting..." : "Subscribe Now"}
       </button> */}
        <CustomerPortal />
        </>
      )}      
    </div>
  );
}
