
"use client";
import Link from "next/link";

const C = {
  egg: "#F8F5F0", egg2: "#F2EFEA", dark: "#1C1D18",
  warm: "#67675F", muted: "#9C9C94", terra: "#AF4E30",
  white: "#FEFEFE", teal: "#CBDADC",
};

export default function DemoPage() {
  return (
    <main style={{ minHeight: "100vh", background: C.egg, fontFamily: "'DM Sans', system-ui, sans-serif", color: C.dark }}>
      <nav style={{
        background: "rgba(248,245,240,0.92)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(28,29,24,0.08)",
        padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ fontWeight: 600, fontSize: 17, color: C.dark, textDecoration: "none" }}>
          📲 MissedCallText
        </Link>
        <Link href="/signup" style={{
          background: C.dark, color: C.white,
          padding: "10px 20px", borderRadius: 100,
          fontWeight: 500, fontSize: 14, textDecoration: "none",
        }}>
          Start free trial →
        </Link>
      </nav>

      <section style={{ padding: "80px 24px 60px", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: C.teal, borderRadius: 20, padding: "6px 16px",
          fontSize: 12, fontWeight: 600, letterSpacing: 1,
          textTransform: "uppercase" as const, color: C.dark, marginBottom: 32,
        }}>
          Live demo — works right now
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 58px)", fontWeight: 500,
          letterSpacing: "-0.04em", lineHeight: 1.08,
          color: C.dark, marginBottom: 20,
        }}>
          See it work<br />
          <span style={{ color: C.terra }}>in 30 seconds.</span>
        </h1>

        <p style={{ fontSize: 18, color: C.warm, lineHeight: 1.7, marginBottom: 56 }}>
          This is a live demo. Call the number below, hang up after 2 rings, and watch your phone.
        </p>

        {/* The call card */}
        <div style={{
          background: C.dark, borderRadius: 24, padding: "48px 40px",
          marginBottom: 40, position: "relative" as const, overflow: "hidden",
        }}>
          <div style={{
            position: "absolute" as const, top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, ${C.terra}, #D4956A)`,
          }} />
          <p style={{ fontSize: 13, color: "rgba(254,254,254,0.4)", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 20 }}>
            Call this number
          </p>
          <a href="tel:+13108703101" style={{
            display: "block", fontSize: "clamp(40px, 8vw, 72px)",
            fontWeight: 500, color: C.white, letterSpacing: "-3px",
            textDecoration: "none", lineHeight: 1, marginBottom: 12,
          }}>
            (310) 870-3101
          </a>
          <p style={{ fontSize: 14, color: "rgba(254,254,254,0.5)", marginBottom: 32 }}>
            Tap to call on mobile
          </p>

          {/* Steps */}
          <div style={{ display: "flex", gap: 0, justifyContent: "center", flexWrap: "wrap" as const }}>
            {[
              { n: "1", label: "Call the number" },
              { n: "2", label: "Hang up after 2 rings" },
              { n: "3", label: "Watch your phone" },
            ].map(({ n, label }, i) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <div style={{ textAlign: "center" as const, padding: "0 20px" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(254,254,254,0.1)", border: "1px solid rgba(254,254,254,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 8px", fontSize: 14, fontWeight: 600, color: C.white,
                  }}>{n}</div>
                  <div style={{ fontSize: 13, color: "rgba(254,254,254,0.6)", whiteSpace: "nowrap" as const }}>{label}</div>
                </div>
                {i < 2 && <div style={{ width: 32, height: 1, background: "rgba(254,254,254,0.1)", flexShrink: 0 }} />}
              </div>
            ))}
          </div>
        </div>

        {/* What happens */}
        <div style={{
          background: C.egg2, borderRadius: 20, padding: "32px",
          marginBottom: 40, textAlign: "left" as const,
        }}>
          <h3 style={{ fontSize: 17, fontWeight: 600, color: C.dark, marginBottom: 16 }}>
            What you'll receive on your phone:
          </h3>
          <div style={{
            background: C.dark, borderRadius: "16px 16px 4px 16px",
            padding: "16px 20px", display: "inline-block",
            fontSize: 14, lineHeight: 1.65, color: "rgba(254,254,254,0.85)",
            maxWidth: 340, textAlign: "left" as const,
          }}>
            👋 Hey! This is the MissedCallText demo. In a real setup, YOUR business name and custom message would appear here — automatically sent in under 60 seconds after every missed call. Pretty powerful, right?<br /><br />
            See how it works: missedcalltext.vercel.app
          </div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 12 }}>
            Delivered in under 60 seconds after you hang up.
          </div>
        </div>

        <p style={{ fontSize: 16, color: C.warm, lineHeight: 1.7, marginBottom: 36 }}>
          That's MissedCallText. Every missed call at your business — plumbing, HVAC, cleaning, auto, whatever — gets that text automatically. Your customers stay warm. You close more jobs.
        </p>

        <Link href="/signup" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: C.terra, color: C.white,
          padding: "18px 40px", borderRadius: 100,
          fontWeight: 600, fontSize: 18, textDecoration: "none",
          boxShadow: `0 8px 32px rgba(175,78,48,0.3)`,
        }}>
          Start your free trial →
        </Link>
        <p style={{ fontSize: 13, color: C.muted, marginTop: 16 }}>
          14 days free · $97/mo after · No contract
        </p>
      </section>
    </main>
  );
}
