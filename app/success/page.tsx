
"use client";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1.5px", color: "#0d1117", marginBottom: 12 }}>
          You're in! Trial started.
        </h1>
        <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, marginBottom: 40 }}>
          Check your email — we've sent you setup instructions. It takes about 5 minutes to get your first missed call auto-texted.
        </p>

        <div style={{
          background: "white", borderRadius: 16, border: "1.5px solid #e5e7eb",
          padding: "32px", marginBottom: 32, textAlign: "left",
        }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0d1117", marginBottom: 20, letterSpacing: "-0.5px" }}>
            Your 3-step setup:
          </h3>
          {[
            { n: "1", title: "Check your email", desc: "We've sent you personalized forwarding instructions for your carrier." },
            { n: "2", title: "Set up call forwarding", desc: "In your carrier settings, forward unanswered calls to your MissedCallText number. Takes 2 minutes." },
            { n: "3", title: "Test it", desc: "Call your business number from another phone and let it ring. You'll get a text back within 60 seconds." },
          ].map(({ n, title, desc }) => (
            <div key={n} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "#2563eb", color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 14, flexShrink: 0,
              }}>{n}</div>
              <div>
                <div style={{ fontWeight: 700, color: "#0d1117", fontSize: 15, marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: "#f0fdf4", border: "1.5px solid #bbf7d0",
          borderRadius: 12, padding: 20, marginBottom: 32,
        }}>
          <p style={{ fontSize: 14, color: "#15803d", lineHeight: 1.65 }}>
            💬 Need help? Reply to your welcome email or text us. We'll personally help you get set up — most customers are live in under 15 minutes.
          </p>
        </div>

        <Link href="/" style={{
          display: "inline-block", color: "#9ca3af",
          fontSize: 14, textDecoration: "none",
        }}>← Back to home</Link>
      </div>
    </main>
  );
}
