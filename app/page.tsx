"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e7eb",
        padding: "14px 40px", display: "flex",
        alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>📲</span>
          <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: "-0.5px", color: "#0d1117" }}>
            MissedCall<span style={{ color: "#2563eb" }}>Text</span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href="#how-it-works" style={{ color: "#6b7280", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>How It Works</a>
          <a href="#pricing" style={{ color: "#6b7280", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Pricing</a>
          <Link href="/signup" style={{
            background: "#2563eb", color: "white",
            padding: "9px 20px", borderRadius: 8,
            fontWeight: 700, fontSize: 14, textDecoration: "none",
            transition: "background 0.2s",
          }}>Start Free Trial →</Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #0d1117 0%, #1e3a5f 100%)",
        color: "white", padding: "96px 24px 80px",
        textAlign: "center",
      }}>
        {/* Live badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.4)",
          borderRadius: 20, padding: "6px 16px", marginBottom: 28,
          fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          color: "#93c5fd",
        }}>
          <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", boxShadow: "0 0 8px #22c55e", display: "inline-block" }} />
          Built for local service businesses
        </div>

        <h1 style={{
          fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 900,
          letterSpacing: "-2.5px", lineHeight: 1.05, marginBottom: 24,
          maxWidth: 840, margin: "0 auto 24px",
        }}>
          You missed the call.<br />
          <span style={{ color: "#f97316" }}>We texted them back.</span>
        </h1>

        <p style={{
          fontSize: 20, color: "rgba(255,255,255,0.7)", lineHeight: 1.7,
          maxWidth: 560, margin: "0 auto 16px",
        }}>
          When you're on a job and can't answer, MissedCallText sends an automatic, personalized text to every missed caller — in under 60 seconds.
        </p>

        <p style={{
          fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7,
          maxWidth: 520, margin: "0 auto 40px",
        }}>
          Before they call your competitor.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          <Link href="/signup" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#f97316", color: "white",
            padding: "18px 36px", borderRadius: 12,
            fontWeight: 800, fontSize: 18, textDecoration: "none",
            boxShadow: "0 4px 32px rgba(249,115,22,0.4)",
            letterSpacing: "-0.3px",
          }}>
            Start Free — 14 Days →
          </Link>
          <a href="#how-it-works" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "2px solid rgba(255,255,255,0.25)", color: "white",
            padding: "16px 28px", borderRadius: 12,
            fontWeight: 600, fontSize: 17, textDecoration: "none",
          }}>
            See how it works
          </a>
        </div>

        {/* Trust line */}
        <div style={{
          display: "flex", gap: 32, justifyContent: "center",
          flexWrap: "wrap", color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 500,
        }}>
          {["✅ No app to install", "✅ Set up in 5 minutes", "✅ Cancel anytime", "✅ No contracts"].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ padding: "72px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb" }}>The Problem</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, letterSpacing: "-1.5px", color: "#0d1117", margin: "12px 0 20px" }}>
            Every missed call is money walking out the door
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, marginBottom: 48 }}>
            85% of callers who can't reach you won't call back — they call the next person on Google. The average plumbing job is $300. Missing 3 calls a day is $900 lost. Every day.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { num: "85%", label: "of missed callers never call back" },
              { num: "35%", label: "of calls go unanswered at the avg service business" },
              { num: "7×", label: "more likely to close a lead contacted in under 1 hour" },
              { num: "$26k", label: "lost per month on average from slow follow-up" },
            ].map(({ num, label }) => (
              <div key={num} style={{
                background: "white", border: "1.5px solid #e5e7eb",
                borderRadius: 14, padding: 28, textAlign: "center",
              }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: "#dc2626", letterSpacing: "-2px", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 8, lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb" }}>How It Works</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, letterSpacing: "-1.5px", color: "#0d1117", margin: "12px 0 16px" }}>
              Simple. Automatic. Instant.
            </h2>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7 }}>
              You set it up once. We handle the rest — forever.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              {
                step: "01",
                icon: "📞",
                title: "You miss a call",
                desc: "You're on a job, driving, or with a customer. A new lead calls — it goes to voicemail.",
              },
              {
                step: "02",
                icon: "⚡",
                title: "We detect it in seconds",
                desc: "Our system sees the missed call on your business line within seconds of it happening.",
              },
              {
                step: "03",
                icon: "💬",
                title: "We text them instantly",
                desc: "A personalized SMS goes out in under 60 seconds: \"Hey, sorry we missed you — we're on a job. What do you need? We'll call you right back.\"",
              },
              {
                step: "04",
                icon: "💰",
                title: "You get the job",
                desc: "The lead replies, stays warm, and books with you instead of calling your competitor.",
              },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} style={{
                background: "#f9fafb", border: "1.5px solid #e5e7eb",
                borderRadius: 14, padding: 28, position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  fontSize: 11, fontWeight: 800, color: "#d1d5db",
                  letterSpacing: 1,
                }}>{step}</div>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0d1117", marginBottom: 8, letterSpacing: "-0.3px" }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* SMS preview */}
          <div style={{
            marginTop: 56, background: "#0d1117", borderRadius: 16,
            padding: "40px", color: "white", textAlign: "center",
          }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
              What your customers receive
            </p>
            <div style={{
              display: "inline-block", background: "#1e3a5f",
              borderRadius: "18px 18px 4px 18px",
              padding: "16px 20px", maxWidth: 340,
              fontSize: 15, lineHeight: 1.6, textAlign: "left", color: "rgba(255,255,255,0.9)",
            }}>
              Hey! This is Mike from High Value Plumbing. Sorry I missed your call — I'm finishing up a job right now. What can I help you with? I'll call you back as soon as I'm done. 🔧
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 8 }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Delivered 47 seconds after missed call</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "72px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb" }}>Who It's For</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, letterSpacing: "-1.5px", color: "#0d1117", margin: "12px 0 40px" }}>
            Built for small service businesses
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {[
              "🔧 Plumbers", "❄️ HVAC", "⚡ Electricians", "🌿 Landscapers",
              "🏠 Roofers", "🎨 Painters", "🧹 Cleaners", "🔑 Locksmiths",
              "🪟 Window & Door", "🛁 Remodelers", "🚗 Auto Repair", "🐾 Pet Services",
            ].map(b => (
              <span key={b} style={{
                background: "white", border: "1.5px solid #e5e7eb",
                borderRadius: 20, padding: "10px 20px",
                fontSize: 14, fontWeight: 600, color: "#374151",
              }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb" }}>Pricing</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, letterSpacing: "-1.5px", color: "#0d1117", margin: "12px 0 40px" }}>
            One price. No surprises.
          </h2>

          <div style={{
            background: "white", border: "2px solid #2563eb",
            borderRadius: 20, padding: "48px 40px",
            boxShadow: "0 0 60px rgba(37,99,235,0.1)",
            position: "relative", overflow: "hidden",
          }}>
            {/* Top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: "linear-gradient(90deg, #2563eb, #7c3aed)",
            }} />

            <div style={{ fontSize: 13, fontWeight: 700, color: "#2563eb", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
              Monthly Plan
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 4, margin: "8px 0 4px" }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: "#0d1117", marginTop: 12 }}>$</span>
              <span style={{ fontSize: 72, fontWeight: 900, color: "#0d1117", letterSpacing: "-4px", lineHeight: 1 }}>97</span>
            </div>
            <div style={{ fontSize: 14, color: "#9ca3af", marginBottom: 32 }}>per month · cancel anytime</div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", textAlign: "left" }}>
              {[
                "Unlimited missed call text-backs",
                "Responds in under 60 seconds",
                "Personalized message with your business name",
                "Replies go straight to your phone",
                "Works on any existing phone number",
                "Simple setup — 5 minutes or less",
                "No app to install on your end",
                "Dashboard to see all activity",
                "14-day free trial included",
              ].map(f => (
                <li key={f} style={{
                  padding: "11px 0", borderBottom: "1px solid #f3f4f6",
                  fontSize: 14, display: "flex", alignItems: "center", gap: 10,
                  color: "#374151",
                }}>
                  <span style={{ color: "#16a34a", fontWeight: 700, fontSize: 16 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link href="/signup" style={{
              display: "block", width: "100%",
              background: "#f97316", color: "white",
              padding: "18px 0", borderRadius: 12,
              fontWeight: 800, fontSize: 18, textDecoration: "none",
              textAlign: "center", letterSpacing: "-0.3px",
              boxShadow: "0 4px 20px rgba(249,115,22,0.3)",
            }}>
              Start Free Trial — 14 Days →
            </Link>
            <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 12 }}>
              No credit card required for trial. $97/mo after.
            </p>
          </div>

          {/* ROI math */}
          <div style={{
            marginTop: 32, background: "#f0fdf4", border: "1.5px solid #bbf7d0",
            borderRadius: 12, padding: "20px 24px", textAlign: "left",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#15803d", marginBottom: 8 }}>💰 The math is simple:</p>
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
              If MissedCallText recovers just <strong>one</strong> job per month that you would have lost, it pays for itself. Most plumbers recover 4–8 jobs. That's $1,200–$2,400 in jobs saved for $97/month.
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "72px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb" }}>Early Users</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, letterSpacing: "-1.5px", color: "#0d1117", margin: "12px 0" }}>
              Real results from real businesses
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              {
                quote: "I was losing 4-5 calls a day just because I can't answer while I'm under a sink. First week this thing paid for a full year of itself. No brainer.",
                name: "Mike T.", role: "Plumber, 12 years in business",
                initials: "MT",
              },
              {
                quote: "My guys are on roofs all day. We were probably losing 2-3 jobs a week to voicemail. This texts them back while we're still on the ladder. Love it.",
                name: "Dave R.", role: "Roofing contractor",
                initials: "DR",
              },
              {
                quote: "Set it up in like 10 minutes. Now I don't stress when I'm with a customer and my phone rings. It handles it.",
                name: "Sarah M.", role: "House cleaning business",
                initials: "SM",
              },
            ].map(({ quote, name, role, initials }) => (
              <div key={name} style={{
                background: "white", border: "1.5px solid #e5e7eb",
                borderRadius: 14, padding: 28,
              }}>
                <div style={{ color: "#f59e0b", fontSize: 16, marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 }}>
                  "{quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: "50%",
                    background: "#2563eb", color: "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 13,
                  }}>{initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#0d1117" }}>{name}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #1e3a5f, #0d1117)",
        padding: "80px 24px", textAlign: "center", color: "white",
      }}>
        <h2 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-2px", marginBottom: 16 }}>
          Stop losing jobs to voicemail.
        </h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 40, lineHeight: 1.7 }}>
          14-day free trial. Set up in 5 minutes. No tech skills needed.
        </p>
        <Link href="/signup" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "#f97316", color: "white",
          padding: "20px 44px", borderRadius: 12,
          fontWeight: 800, fontSize: 20, textDecoration: "none",
          boxShadow: "0 8px 40px rgba(249,115,22,0.4)",
          letterSpacing: "-0.5px",
        }}>
          Start Free Trial →
        </Link>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 16 }}>
          No credit card required. $97/month after trial.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#0d1117", padding: "32px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 12,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>📲</span>
          <span style={{ fontWeight: 900, fontSize: 16, color: "white", letterSpacing: "-0.5px" }}>
            MissedCall<span style={{ color: "#3b82f6" }}>Text</span>
          </span>
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © 2025 MissedCallText · Built for local service businesses
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/privacy" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Privacy</Link>
          <Link href="/terms" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Terms</Link>
        </div>
      </footer>
    </main>
  );
}
