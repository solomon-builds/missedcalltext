
import { NextRequest, NextResponse } from "next/server";

// Demo webhook — sends a real SMS to show the product working in under 60 seconds
// Used for pitches: "Call this number, hang up, watch your phone"

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const from = formData.get("From") as string;
  const callStatus = formData.get("CallStatus") as string;

  console.log(`Demo call: from=${from}, status=${callStatus}`);

  // Send demo SMS to the caller
  if (from && process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_ACCOUNT_SID !== "placeholder") {
    try {
      const twilio = (await import("twilio")).default;
      const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
      await client.messages.create({
        body: `👋 Hey! This is the MissedCallText demo. In a real setup, YOUR business name and custom message would appear here — automatically sent in under 60 seconds after every missed call. Pretty powerful, right?

See how it works: missedcalltext.vercel.app`,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: from,
      });
      console.log(`Demo SMS sent to ${from}`);
    } catch (err) {
      console.error("Demo SMS error:", err);
    }
  }

  // TwiML response
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna">Thanks for trying MissedCallText. Check your phone — we just sent you a text to show you exactly how it works. Visit missedcalltext dot vercel dot app to start your free trial.</Say>
</Response>`;

  return new NextResponse(twiml, { headers: { "Content-Type": "text/xml" } });
}

export async function GET() {
  return NextResponse.json({ status: "Demo endpoint live", number: process.env.TWILIO_PHONE_NUMBER });
}
