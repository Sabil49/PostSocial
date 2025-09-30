import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  console.log("Webhook received:");
  console.log(payload);

  try {
    switch (payload.type) {
      case "subscription.active": {
        const { subscription_id: created_subscription_id, plan_id, next_billing_date } = payload.data;
        const { email: customer_email } = payload.data.customer;

        const user = await prisma.user.upsert({
          where: { email: customer_email },
          create: { email: customer_email },
          update: {},
        });

        await prisma.subscription.create({
          data: {
            subscriptionId: created_subscription_id,
            planId: plan_id,
            subscriptionStatus: "active",
            nextBillingDate: next_billing_date,
            userId: user.id,
          },
        });
        break;
      }

      case "subscription.renewed": {
        const { subscription_id: renewed_subscription_id, current_period_end } = payload.data;

        await prisma.subscription.update({
          where: { subscriptionId: renewed_subscription_id },
          data: {
            subscriptionStatus: "active",
            nextBillingDate: current_period_end,
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
