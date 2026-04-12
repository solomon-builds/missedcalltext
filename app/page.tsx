"use client";
import Link from "next/link";
import { useState } from "react";

const C = {
  egg: "#F8F5F0",
  egg2: "#FAFAF7",
  dark: "#1C1D18",
  warm: "#67675F",
  muted: "#9C9C94",
  teal: "#CBDADC",
  terra: "#AF4E30",
  white: "#FEFEFE",
  card: "#F2EFEA",
};

const pill = (bg: string, color: string, size = 14, px = 20, py = 11): React.CSSProperties => ({
  background: bg, color, borderRadius: 100, padding: `${py}px ${px}px`,
  fontWeight: 500, fontSize: size, textDecoration: "none", display: "inline-flex",
  alignItems: "center", cursor: "pointer", border: "none", fontFamily: "inherit",
});

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Plumbing", icon: "🔧" },
    { label: "HVAC", icon: "❄️" },
    { label: "Electrical", icon: "⚡" },
    { label: "Landscaping", icon: "🌿" },
    { label: "Roofing", icon: "🏠" },
  ];

  const features = [
    {
      title: "Responds in under 60 seconds.",
      body: "The moment a call goes unanswered, we send a personalized text to the caller. They hear from you before they've even looked up the next result on Google.",
      stat: "60s", statLabel: "average response time",
    },
    {
      title: "Works on your existing number.",
      body: "No new phones, no apps, no hardware. We integrate with your current business line through simple call forwarding. Set up takes five minutes.",
      stat: "5 min", statLabel: "to get started",
    },
    {
      title: "Replies come straight to you.",
      body: "When a customer texts back, you get a notification on your cell phone. The conversation is yours — we just open the door.",
      stat: "100%", statLabel: "replies go to your phone",
    },
  ];

  return (
    <main style={{ background: C.egg, fontFamily: "'DM Sans', system-ui, sans-serif", color: C.dark }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(248,245,240,0.92)", backdropFilter: "blur(16px)",
        padding: "16px 48px", display: "flex", alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(28,29,24,0.08)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>📲</span>
          <span style={{ fontWeight: 600, fontSize: 17, color: C.dark, letterSpacing: "-0.3px" }}>
            MissedCallText
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#pricing" style={{ color: C.warm, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Pricing</a>
          <a href="#how-it-works" style={{ color: C.warm, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>How it works</a>
          <Link href="/signup" style={{ ...pill(C.dark, C.white, 14, 18, 10), gap: 6 }}>
            Get started →
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "96px 48px 80px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>

        {/* Industry tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          <span style={{ ...pill(C.teal, C.dark, 13, 14, 7), fontWeight: 500 }}>
            Built for:
          </span>
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActiveTab(i)}
              style={{
                ...pill(i === activeTab ? C.dark : "transparent", i === activeTab ? C.white : C.warm, 13, 14, 7),
                border: i === activeTab ? "none" : `1px solid rgba(28,29,24,0.15)`,
                transition: "all 0.15s",
                gap: 6,
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <h1 style={{
          fontSize: "clamp(42px, 6vw, 68px)", fontWeight: 500,
          letterSpacing: "-0.04em", lineHeight: 1.08,
          maxWidth: 820, margin: "0 auto 24px",
          color: C.dark,
        }}>
          You missed the call.
          <br />
          <span style={{ color: C.terra }}>We texted them back.</span>
        </h1>

        <p style={{
          fontSize: 19, color: C.warm, lineHeight: 1.7,
          maxWidth: 520, margin: "0 auto 48px", fontWeight: 400,
        }}>
          Automatic, personalized text-backs to every missed caller — in under 60 seconds. Built for {tabs[activeTab].icon} {tabs[activeTab].label.toLowerCase()} businesses.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
          <Link href="/signup" style={{ ...pill(C.dark, C.white, 17, 28, 16), fontWeight: 500 }}>
            Start free — 14 days →
          </Link>
          <a href="#how-it-works" style={{
            ...pill("transparent", C.dark, 16, 24, 15),
            border: `1.5px solid rgba(28,29,24,0.2)`,
          }}>
            See how it works
          </a>
        </div>

        {/* Trust row */}
        <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          {["No app to install", "Set up in 5 minutes", "Cancel anytime", "No contracts"].map(t => (
            <span key={t} style={{ fontSize: 13, color: C.muted, fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#5A8A6A", fontWeight: 700 }}>✓</span> {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: C.dark, padding: "56px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, textAlign: "center" }}>
          {[
            { num: "85%", label: "of missed callers never call back" },
            { num: "35%", label: "of service calls go unanswered" },
            { num: "7×", label: "more likely to close in under 1 hour" },
            { num: "$26k", label: "lost per month on average" },
          ].map(({ num, label }) => (
            <div key={num}>
              <div style={{ fontSize: 44, fontWeight: 500, color: C.white, letterSpacing: "-2px", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 13, color: "rgba(254,254,254,0.5)", marginTop: 8, lineHeight: 1.5 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: "96px 48px", background: C.egg2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ ...pill(C.teal, C.dark, 11, 12, 6), fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const }}>
              How it works
            </span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.04em", marginTop: 20, marginBottom: 16, color: C.dark }}>
              Simple. Automatic. Instant.
            </h2>
            <p style={{ fontSize: 17, color: C.warm, maxWidth: 480, margin: "0 auto" }}>
              You set it up once. It works forever.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { n: "01", icon: "📞", title: "You miss a call", body: "You're under a sink, on a roof, or driving. A new lead calls and goes to voicemail." },
              { n: "02", icon: "⚡", title: "We detect it instantly", body: "Our system sees the missed call on your business line within seconds of it happening." },
              { n: "03", icon: "💬", title: "We text them back", body: "A personalized SMS goes out in under 60 seconds: your name, your business, a warm message." },
              { n: "04", icon: "💰", title: "You get the job", body: "The lead replies, stays warm, and books with you instead of calling your competitor." },
            ].map(({ n, icon, title, body }) => (
              <div key={n} style={{
                background: C.card, borderRadius: 20, padding: "32px 28px",
                position: "relative",
              }}>
                <span style={{ position: "absolute", top: 24, right: 24, fontSize: 11, fontWeight: 600, color: C.muted, letterSpacing: 1 }}>{n}</span>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: C.dark, marginBottom: 10, letterSpacing: "-0.3px" }}>{title}</h3>
                <p style={{ fontSize: 14, color: C.warm, lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* SMS mockup */}
          <div style={{ marginTop: 56, background: C.dark, borderRadius: 20, padding: "48px", textAlign: "center" }}>
            <p style={{ fontSize: 12, color: "rgba(254,254,254,0.4)", marginBottom: 24, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: 1 }}>
              What your customers receive
            </p>
            <div style={{
              display: "inline-block",
              background: "#2C2D28",
              borderRadius: "20px 20px 6px 20px",
              padding: "18px 22px", maxWidth: 360,
              fontSize: 15, lineHeight: 1.65, textAlign: "left" as const,
              color: "rgba(254,254,254,0.9)",
            }}>
              Hey! This is Mike from High Value Plumbing. Sorry I missed your call — I'm finishing up a job right now. What do you need? I'll call you back as soon as I'm done. 🔧
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: "rgba(254,254,254,0.3)" }}>
              Delivered 47 seconds after missed call
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: "96px 48px", background: C.egg }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <span style={{ ...pill(C.teal, C.dark, 11, 12, 6), fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const }}>
              The product
            </span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.04em", marginTop: 20, color: C.dark, maxWidth: 540 }}>
              Everything you need. Nothing you don't.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: C.card, borderRadius: 20, padding: "40px",
                display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center",
              }}>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 600, color: C.dark, marginBottom: 12, letterSpacing: "-0.5px" }}>{f.title}</h3>
                  <p style={{ fontSize: 16, color: C.warm, lineHeight: 1.7 }}>{f.body}</p>
                </div>
                <div style={{ textAlign: "center" as const, minWidth: 120 }}>
                  <div style={{ fontSize: 40, fontWeight: 500, color: C.terra, letterSpacing: "-2px", lineHeight: 1 }}>{f.stat}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 6, lineHeight: 1.4 }}>{f.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "80px 48px", background: C.egg2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ ...pill(C.teal, C.dark, 11, 12, 6), fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const }}>
            Who it's for
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 500, letterSpacing: "-0.04em", margin: "20px 0 40px", color: C.dark }}>
            If you're on the job and can't answer, this is for you.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 12, justifyContent: "center" }}>
            {["🔧 Plumbers", "❄️ HVAC", "⚡ Electricians", "🌿 Landscapers", "🏠 Roofers", "🎨 Painters", "🧹 Cleaners", "🔑 Locksmiths", "🛁 Remodelers", "🚗 Auto Repair", "🪟 Window & Door", "🐾 Pet Services"].map(b => (
              <span key={b} style={{
                ...pill(C.dark, C.white, 13, 16, 8),
                fontWeight: 400,
              }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "96px 48px", background: C.egg }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <span style={{ ...pill(C.teal, C.dark, 11, 12, 6), fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const }}>
            Pricing
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.04em", margin: "20px 0 48px", color: C.dark }}>
            One price. No surprises.
          </h2>

          <div style={{
            background: C.dark, borderRadius: 24, padding: "52px 44px", color: C.white,
            position: "relative" as const, overflow: "hidden",
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(254,254,254,0.5)", marginBottom: 12, textTransform: "uppercase" as const, letterSpacing: 1 }}>
              Monthly plan
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 2, margin: "0 0 6px" }}>
              <span style={{ fontSize: 28, fontWeight: 500, marginTop: 14, color: C.white }}>$</span>
              <span style={{ fontSize: 80, fontWeight: 400, color: C.white, letterSpacing: "-5px", lineHeight: 1 }}>97</span>
            </div>
            <div style={{ fontSize: 14, color: "rgba(254,254,254,0.4)", marginBottom: 40 }}>per month · cancel anytime</div>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: 0, marginBottom: 40, textAlign: "left" as const }}>
              {[
                "Unlimited missed call text-backs",
                "Responds in under 60 seconds",
                "Personalized with your business name",
                "Replies go straight to your phone",
                "Works on any existing phone number",
                "Set up in 5 minutes or less",
                "No app to install",
                "Activity dashboard included",
                "14-day free trial",
              ].map((f, i, arr) => (
                <div key={f} style={{
                  padding: "14px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(254,254,254,0.08)" : "none",
                  display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "rgba(254,254,254,0.8)",
                }}>
                  <span style={{ color: "#7EC8A0", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>✓</span>
                  {f}
                </div>
              ))}
            </div>

            <Link href="/signup" style={{
              ...pill(C.terra, C.white, 17, 0, 18),
              width: "100%", justifyContent: "center", fontWeight: 600,
            }}>
              Start free trial →
            </Link>
            <p style={{ fontSize: 12, color: "rgba(254,254,254,0.3)", marginTop: 14 }}>
              No credit card required. $97/mo after 14 days.
            </p>
          </div>

          <div style={{
            marginTop: 28, background: C.card, borderRadius: 14,
            padding: "20px 24px", textAlign: "left" as const,
          }}>
            <p style={{ fontSize: 13, color: C.warm, lineHeight: 1.75 }}>
              💰 <strong style={{ color: C.dark }}>The math:</strong> One recovered plumbing job ($300+) pays for 3 months. Most customers recover 4–8 jobs per month.
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "80px 48px", background: C.egg2 }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ ...pill(C.teal, C.dark, 11, 12, 6), fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const }}>
              Real businesses
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 500, letterSpacing: "-0.04em", margin: "20px 0", color: C.dark }}>
              They stopped losing jobs to voicemail.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { q: "I was losing 4-5 calls a day while I'm under a sink. First week this paid for a full year. Complete no-brainer.", name: "Mike T.", role: "Plumber, 12 years", init: "MT" },
              { q: "My guys are on roofs all day. We were losing 2-3 jobs a week to voicemail. This texts them back while we're still on the ladder.", name: "Dave R.", role: "Roofing contractor", init: "DR" },
              { q: "Set up in 10 minutes. Now I don't stress when I'm with a customer and my phone rings. It handles it.", name: "Sarah M.", role: "Cleaning business owner", init: "SM" },
            ].map(({ q, name, role, init }) => (
              <div key={name} style={{ background: C.card, borderRadius: 20, padding: "32px" }}>
                <div style={{ color: "#C8A84B", fontSize: 15, marginBottom: 16, letterSpacing: 2 }}>★★★★★</div>
                <p style={{ fontSize: 15, color: C.dark, lineHeight: 1.7, fontStyle: "italic" as const, marginBottom: 24 }}>"{q}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", background: C.dark,
                    color: C.white, display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 600, fontSize: 13,
                  }}>{init}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: C.dark }}>{name}</div>
                    <div style={{ fontSize: 12, color: C.muted }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "96px 48px", textAlign: "center", background: C.egg }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 500, letterSpacing: "-0.04em", color: C.dark, marginBottom: 20, lineHeight: 1.1 }}>
            Stop losing jobs to voicemail.
          </h2>
          <p style={{ fontSize: 18, color: C.warm, marginBottom: 44, lineHeight: 1.7 }}>
            14-day free trial. Set up in 5 minutes.
          </p>
          <Link href="/signup" style={{ ...pill(C.terra, C.white, 18, 40, 18), fontWeight: 600 }}>
            Start free trial →
          </Link>
          <p style={{ fontSize: 13, color: C.muted, marginTop: 20 }}>
            No credit card required. $97/month after trial.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: C.dark, padding: "36px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap" as const, gap: 12,
      }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: C.white }}>📲 MissedCallText</span>
        <span style={{ fontSize: 12, color: "rgba(254,254,254,0.3)" }}>© 2025 MissedCallText</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/privacy" style={{ fontSize: 12, color: "rgba(254,254,254,0.3)", textDecoration: "none" }}>Privacy</Link>
          <Link href="/terms" style={{ fontSize: 12, color: "rgba(254,254,254,0.3)", textDecoration: "none" }}>Terms</Link>
        </div>
      </footer>
    </main>
  );
}
