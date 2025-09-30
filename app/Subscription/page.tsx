"use client";
import { useSession } from "next-auth/react";
import CustomerPortal from "./customer-portal";

export default function SubscribeButton() {
  const { data: userSession } = useSession();

  const email= userSession?.user?.email || "test@example.com";

  const planId = "pdt_ctSjb2435t8p2c1vQcx98"; // replace with your actual plan ID from Dodo Payments
  
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
        },
  
        metadata: {
    order_id: "order_123",
    source: "web_app",
  },
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const checkoutSession = await response.json();
    console.log('Checkout Session:');
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
        <CustomerPortal />
        </>
      )}      
    </div>
  );
}
