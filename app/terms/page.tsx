
import Link from "next/link";
export default function Terms() {
  return (
    <main style={{ maxWidth: 700, margin: "60px auto", padding: "0 24px", fontFamily: "inherit" }}>
      <Link href="/" style={{ color: "#2563eb", fontSize: 14, textDecoration: "none" }}>← Back</Link>
      <h1 style={{ fontSize: 32, fontWeight: 900, margin: "20px 0 16px", letterSpacing: "-1px" }}>Terms of Service</h1>
      <p style={{ color: "#6b7280", lineHeight: 1.7, marginBottom: 16 }}>MissedCallText provides an automated SMS text-back service for missed calls. By signing up, you agree to use the service in compliance with applicable laws including TCPA. You are responsible for ensuring you have appropriate consent to send automated messages to callers. Service is billed monthly at $97 after a 14-day free trial. You may cancel at any time before the trial ends to avoid charges. MissedCallText is not liable for missed or undelivered messages due to carrier issues outside our control.</p>
      <p style={{ color: "#9ca3af", fontSize: 13 }}>Last updated: April 2025</p>
    </main>
  );
}
