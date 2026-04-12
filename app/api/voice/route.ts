
import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

// Twilio sends POST to this endpoint when a call is received or missed
// We return TwiML to play a brief voicemail, then send an SMS

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const from = formData.get("From") as string;
  const to = formData.get("To") as string;
  const callStatus = formData.get("CallStatus") as string;

  console.log(`Call event: from=${from}, to=${to}, status=${callStatus}`);

  // Look up the customer config for this business phone number
  const customerConfig = await getCustomerByPhone(to);

  if (!customerConfig) {
    // No customer found — basic TwiML response
    const VoiceResponse = twilio.twiml.VoiceResponse;
    const twiml = new VoiceResponse();
    twiml.say("Sorry, we missed your call. We will call you back shortly.");
    return new NextResponse(twiml.toString(), {
      headers: { "Content-Type": "text/xml" },
    });
  }

  const { autoMessage, notifyPhone, businessName } = customerConfig;

  // Send SMS to the caller
  const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    // Text the missed caller
    await twilioClient.messages.create({
      body: autoMessage,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: from,
    });

    // Notify the business owner
    if (notifyPhone) {
      await twilioClient.messages.create({
        body: `📞 MissedCallText: You missed a call from ${from}. We auto-texted them for you. Reply to this number to see their response.`,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: notifyPhone,
      });
    }

    console.log(`SMS sent to ${from} for business ${businessName}`);
  } catch (smsError) {
    console.error("SMS error:", smsError);
  }

  // TwiML: play a brief message and hang up
  const VoiceResponse = twilio.twiml.VoiceResponse;
  const twiml = new VoiceResponse();
  twiml.say(`Thanks for calling ${businessName}. We are currently unavailable but have sent you a text message and will call you back shortly.`);

  return new NextResponse(twiml.toString(), {
    headers: { "Content-Type": "text/xml" },
  });
}

// In production this would query a database
// For now, reads from environment or a simple JSON store
async function getCustomerByPhone(businessPhone: string) {
  // This is the simple version — in production connect to Vercel KV or PlanetScale
  // The customer data comes from their Stripe subscription metadata
  // For the MVP, we use a hardcoded lookup that gets populated by the Stripe webhook
  
  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-03-25.dahlia",
    });

    // Search active subscriptions for this business phone
    const subscriptions = await stripe.subscriptions.list({
      status: "active",
      limit: 100,
    });

    const trialSubs = await stripe.subscriptions.list({
      status: "trialing",
      limit: 100,
    });

    const allSubs = [...subscriptions.data, ...trialSubs.data];
    
    for (const sub of allSubs) {
      const meta = sub.metadata;
      // Normalize phone comparison
      const normalize = (p: string) => p.replace(/\D/g, "");
      if (meta.businessPhone && normalize(meta.businessPhone) === normalize(businessPhone)) {
        return {
          businessName: meta.businessName || "the business",
          autoMessage: meta.autoMessage || `Hey! Sorry I missed your call. I'm with a customer right now but I'll call you back shortly!`,
          notifyPhone: meta.notifyPhone,
        };
      }
    }
  } catch (err) {
    console.error("Stripe lookup error:", err);
  }

  return null;
}
