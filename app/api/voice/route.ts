
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const from = formData.get("From") as string;
  const to = formData.get("To") as string;
  console.log(`Missed call: from=${from}, to=${to}`);

  const customerConfig = await getCustomerByPhone(to);
  const businessName = customerConfig?.businessName || "the business";
  const autoMessage = customerConfig?.autoMessage || "Hey! Sorry I missed your call. I am with a customer right now but I will call you back shortly!";
  const notifyPhone = customerConfig?.notifyPhone;

  if (customerConfig && process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_ACCOUNT_SID !== "placeholder") {
    try {
      const twilio = (await import("twilio")).default;
      const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
      await client.messages.create({ body: autoMessage, from: process.env.TWILIO_PHONE_NUMBER!, to: from });
      if (notifyPhone) {
        await client.messages.create({
          body: `📞 MissedCallText: Missed call from ${from}. Auto-text sent. Watch for their reply!`,
          from: process.env.TWILIO_PHONE_NUMBER!,
          to: notifyPhone,
        });
      }
    } catch (err) {
      console.error("Twilio error:", err);
    }
  }

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna">Thanks for calling ${businessName}. We missed your call but just sent you a text message. We will call you back shortly!</Say>
</Response>`;

  return new NextResponse(twiml, { headers: { "Content-Type": "text/xml" } });
}

async function getCustomerByPhone(businessPhone: string) {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2026-03-25.dahlia" });
    const normalize = (p: string) => p?.replace(/\D/g, "") || "";
    
    for (const status of ["active", "trialing"] as const) {
      const subs = await stripe.subscriptions.list({ status, limit: 100 });
      for (const sub of subs.data) {
        if (normalize(sub.metadata.businessPhone) === normalize(businessPhone)) {
          return {
            businessName: sub.metadata.businessName || "the business",
            autoMessage: sub.metadata.autoMessage || "Hey! Sorry I missed your call. I will call you back shortly!",
            notifyPhone: sub.metadata.notifyPhone,
          };
        }
      }
    }
  } catch (err) {
    console.error("Stripe lookup error:", err);
  }
  return null;
}
