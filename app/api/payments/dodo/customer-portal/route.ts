    // Example in a Next.js API route (e.g., pages/api/customer-portal.js)
    import DodoPayments from 'dodopayments';
    import { NextResponse,NextRequest } from 'next/server';

    export default async function handler(req: NextRequest) {
      if (req.method === 'POST') {
        const { customer_id } = await req.json(); // Assuming you pass customer_id from the client

        const client = new DodoPayments({
          bearerToken: process.env.DODO_PAYMENTS_API_KEY,
        });

        try {
          const customerPortalSession = await client.customers.customerPortal.create(customer_id);
          return NextResponse.json({ portal_url: customerPortalSession.link });
        } catch (error) {
          console.error("Error creating customer portal session:", error);
          return NextResponse.json({ error: "Failed to create customer portal session" }, { status: 500 });
        }
      } else {
        return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
      }
    }