
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  console.log(`Stripe webhook: ${event.type}`);

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const meta = session.metadata || {};

      console.log("New customer onboarded:", {
        businessName: meta.businessName,
        businessPhone: meta.businessPhone,
        email: session.customer_email,
      });

      // In production: save to DB, send welcome email with setup instructions
      // For now: log the new customer
      await sendWelcomeInstructions(session);
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      console.log("Subscription cancelled:", sub.id, sub.metadata?.businessName);
      // In production: disable the service for this customer
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log("Payment failed:", invoice.customer_email);
      // In production: alert customer, pause service
      break;
    }
  }

  return NextResponse.json({ received: true });
}

async function sendWelcomeInstructions(session: Stripe.Checkout.Session) {
  const meta = session.metadata || {};
  
  // Log the setup needed — in production this sends an email
  console.log(`
    ============================
    NEW MISSEDCALLTEXT CUSTOMER
    ============================
    Business: ${meta.businessName}
    Owner: ${meta.ownerName}
    Email: ${session.customer_email}
    Business Phone: ${meta.businessPhone}
    Notify Phone: ${meta.notifyPhone}
    Trade: ${meta.businessType}
    Auto Message: ${meta.autoMessage}
    
    SETUP INSTRUCTIONS TO SEND:
    1. Log into your phone carrier account (or ask us to help)
    2. Set up call forwarding when unanswered to: ${process.env.TWILIO_PHONE_NUMBER}
    3. Set the forward delay to 15 seconds (so you can still answer)
    4. That's it — we handle the rest!
    ============================
  `);
}
