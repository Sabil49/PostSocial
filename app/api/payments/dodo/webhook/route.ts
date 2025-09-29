import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";
// import { Webhooks } from "dodo-payments";

  export async function POST(req: NextRequest) {
  const payload = await req.json();
  console.log("Webhook received:");
  console.log(payload);
  switch (payload.type) {
    case "subscription.created":
      const { subscription_id: created_subscription_id, plan_id, next_billing_date } = payload.data;
      const { email: customer_email } = payload.data.customer;

      // ensure user exists
      const user = await prisma.user.upsert({
        where: { email: customer_email },
        create: { email: customer_email },
        update: {},
      });

      // save subscription
      await prisma.subscription.create({
        data: {
          subscriptionId: created_subscription_id,
          planId: plan_id,
          subscriptionStatus: "active",
          nextBillingDate: new Date(next_billing_date),
          userId: user.id,
        },
      });
      break;

    case "subscription.renewed":
      const { subscription_id: renewed_subscription_id, current_period_end } = payload.data;

      await prisma.subscription.update({
        where: { subscriptionId: renewed_subscription_id },
        data: {
          subscriptionStatus: "active",
          nextBillingDate: new Date(current_period_end),
        },
      });
      break;

    case "subscription.canceled":
      const { subscription_id } = payload.data;

      await prisma.subscription.update({
          where: { subscriptionId: subscription_id },
          data: { subscriptionStatus: "canceled" },
        });
      break;

    case "payment.failed":
      const { subscription_id: failed_subscription_id } = payload.data;

        await prisma.subscription.update({
          where: { subscriptionId: failed_subscription_id },
          data: { subscriptionStatus: "past_due" },
        });

    default:
      return NextResponse.json({ "Unhandled event": payload.type }, { status: 400 });
  }

  return NextResponse.json({ received: true });
}


//   return Webhooks({
//     webhookKey: process.env.DODO_PAYMENTS_WEBHOOK_KEY!,
//     onPayload: async (payload) => {
//       console.log("Webhook received:", payload);

//       if (payload.event === "subscription.active") {
//         const { subscription_id, plan_id, customer_email, current_period_end } =
//           payload.data;

//         // ensure user exists
//         const user = await prisma.user.upsert({
//           where: { email: customer_email },
//           create: { email: customer_email },
//           update: {},
//         });

//         // save subscription
//         await prisma.subscription.create({
//           data: {
//             subscriptionId: subscription_id,
//             planId: plan_id,
//             status: "active",
//             nextBillingDate: new Date(current_period_end),
//             userId: user.id,
//           },
//         });
//       }

//       if (payload.type === "subscription.renewed") {
//         const { subscription_id, current_period_end } = payload.data;

//         await prisma.subscription.update({
//           where: { subscriptionId: subscription_id },
//           data: {
//             status: "active",
//             nextBillingDate: new Date(current_period_end),
//           },
//         });
//       }

//       if (payload.type === "subscription.cancelled") {
//         const { subscription_id } = payload.data;

//         await prisma.subscription.update({
//           where: { subscriptionId: subscription_id },
//           data: { status: "canceled" },
//         });
//       }

//       if (payload.type === "payment.failed") {
//         const { subscription_id } = payload.data;

//         await prisma.subscription.update({
//           where: { subscriptionId: subscription_id },
//           data: { status: "past_due" },
//         });
//       }
//     },
//   })(req, body, signature);
// };

//         });
//       }
//     },
//   })(req, body, signature);
// };
