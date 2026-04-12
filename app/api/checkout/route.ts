
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia",
  });

  try {
    const body = await req.json();
    const { businessName, ownerName, email, phone, businessPhone, businessType, message } = body;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://missedcalltext.vercel.app";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
      subscription_data: {
        trial_period_days: 14,
        metadata: { businessName, ownerName, businessPhone, notifyPhone: phone, businessType: businessType || "Other", autoMessage: message },
      },
      customer_email: email,
      metadata: { businessName, ownerName, businessPhone, notifyPhone: phone, businessType: businessType || "Other", autoMessage: message },
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/signup`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
