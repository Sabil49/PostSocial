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
        'Authorization': `Bearer ${process.env.DODO_PAYMENTS_API_KEY}`,
        'Access-Control-Allow-Origin': '*',
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
        },
        
        // Billing address for tax calculation and compliance
        // billing_address: {
        //   street: '123 Main St',
        //   city: 'San Francisco',
        //   state: 'CA', 
        //   country: 'US', // Required: ISO 3166-1 alpha-2 country code
        //   zipcode: '94102'
        // },
        
        // Where to redirect after successful payment
        return_url: process.env.DODO_PAYMENTS_RETURN_URL,
        
        // Custom data for your internal tracking
        metadata: {
          order_id: 'order_123',
          source: 'web_app'
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const checkoutSession = await response.json();
    
    // Redirect your customer to this URL to complete payment
    console.log('Checkout URL:', checkoutSession.checkout_url);
    console.log('Session ID:', checkoutSession.session_id);

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
