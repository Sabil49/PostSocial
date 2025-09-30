import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  console.log("Webhook received:");
  console.log(payload);

  try {
    const { email: customer_email } = payload.data.customer;
    switch (payload.type) {     

      case "payment.succeeded": {
        // Payment event
        const { subscription_id, payment_id, total_amount, currency } = payload.data;
        const amount = total_amount; // Assuming amount is in cents

        // Ensure user exists
        const user = await prisma.user.upsert({
          where: { email: customer_email },
          create: { email: customer_email },
          update: {},
        });

        // Log payment in DB (optional, separate payments table)
        await prisma.payment.create({
          data: {
            subscriptionId: subscription_id,
            paymentId: payment_id,
            amount,
            currency,
            status: "succeeded",
            userId: user.id,
          },
        });
        break;
      }

      case "subscription.renewed": {
        const { subscription_id, next_billing_date, product_id } = payload.data;

        const user = await prisma.user.upsert({
          where: { email: customer_email },
          create: { email: customer_email },
          update: {},
        });

        await prisma.subscription.upsert({
          where: { subscriptionId: subscription_id },
          update: {
            subscriptionStatus: "active",
            nextBillingDate: next_billing_date,
          },
          create: {
            subscriptionId: subscription_id,
            planId: product_id,
            nextBillingDate: next_billing_date,
            subscriptionStatus: "active",
            userId: user.id,
          },  
        });
        break;
      }

      case "subscription.canceled": {
        const { subscription_id } = payload.data;

        await prisma.subscription.update({
          where: { subscriptionId: subscription_id },
          data: { subscriptionStatus: "canceled" },
        });
        break;
      }

      case "payment.failed": {
        const { subscription_id: failed_subscription_id } = payload.data;

        await prisma.subscription.update({
          where: { subscriptionId: failed_subscription_id },
          data: { subscriptionStatus: "past_due" },
        });
        break;
      }

      default:
        console.log("Unhandled event type:", payload.type);
        return NextResponse.json({ received: true });
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Webhook handler error:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }

    console.error("Webhook handler unknown error:", err);
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
