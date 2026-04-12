
import Link from "next/link";
export default function Privacy() {
  return (
    <main style={{ maxWidth: 700, margin: "60px auto", padding: "0 24px", fontFamily: "inherit" }}>
      <Link href="/" style={{ color: "#2563eb", fontSize: 14, textDecoration: "none" }}>← Back</Link>
      <h1 style={{ fontSize: 32, fontWeight: 900, margin: "20px 0 16px", letterSpacing: "-1px" }}>Privacy Policy</h1>
      <p style={{ color: "#6b7280", lineHeight: 1.7, marginBottom: 16 }}>We collect your name, email, and phone number to provide the MissedCallText service. We use this information only to operate the service and notify you of activity. We do not sell your data to third parties. Caller phone numbers are used solely to send automated text-back messages on your behalf. All payment processing is handled by Stripe — we never store card details. You may cancel at any time by contacting us.</p>
      <p style={{ color: "#9ca3af", fontSize: 13 }}>Last updated: April 2025</p>
    </main>
  );
}
