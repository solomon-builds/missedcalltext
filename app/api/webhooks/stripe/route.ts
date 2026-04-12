
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia",
  });

  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: import("stripe").Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  console.log(`Stripe webhook: ${event.type}`);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as import("stripe").Stripe.Checkout.Session;
    const meta = session.metadata || {};
    console.log("New customer:", meta.businessName, meta.businessPhone, session.customer_email);
  }

  if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object as import("stripe").Stripe.Subscription;
    console.log("Cancelled:", sub.id, sub.metadata?.businessName);
  }

  return NextResponse.json({ received: true });
}
