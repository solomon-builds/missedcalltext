
"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const C = {
  egg: "#F8F5F0", dark: "#1C1D18", warm: "#67675F",
  muted: "#9C9C94", terra: "#AF4E30", white: "#FEFEFE",
  teal: "#CBDADC", card: "#F2EFEA", green: "#5A8A6A",
};

function SignupForm() {
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref") || "";

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    businessName: "", ownerName: "", email: "",
    phone: "", businessPhone: "", businessType: "", customMessage: "",
  });

  const defaultMessage = form.businessName
    ? `Hey! This is ${form.ownerName || "us"} from ${form.businessName}. Sorry I missed your call — I'm with a customer. What do you need? I'll call you right back!`
    : "Hey! Sorry I missed your call. I'm with a customer right now. What do you need? I'll call you back shortly!";

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const checkout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: form.customMessage || defaultMessage,
          referralCode: refCode,
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 14px",
    border: "1.5px solid rgba(28,29,24,0.15)", borderRadius: 10,
    fontSize: 15, fontFamily: "inherit", color: C.dark,
    background: C.white, outline: "none", boxSizing: "border-box",
  };
  const lbl: React.CSSProperties = { display: "block", fontSize: 13, fontWeight: 600, color: C.warm, marginBottom: 6 };

  return (
    <main style={{ minHeight: "100vh", background: C.egg, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <nav style={{
        background: "rgba(248,245,240,0.92)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(28,29,24,0.08)",
        padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ fontWeight: 600, fontSize: 17, color: C.dark, textDecoration: "none" }}>📲 MissedCallText</Link>
        <span style={{ fontSize: 13, color: C.muted }}>14-day free trial · No credit card required</span>
      </nav>

      {/* Referral banner */}
      {refCode && (
        <div style={{
          background: C.teal, padding: "12px 24px", textAlign: "center",
          fontSize: 14, color: C.dark, fontWeight: 500,
        }}>
          🎁 You were referred! Your referrer gets a free month when you start your trial.
        </div>
      )}

      <div style={{ maxWidth: 560, margin: "48px auto", padding: "0 24px" }}>
        {/* Step indicators */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, alignItems: "center" }}>
          {[1, 2, 3].map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: s < 3 ? 1 : "none", gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: step >= s ? C.dark : "rgba(28,29,24,0.1)",
                color: step >= s ? C.white : C.muted,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, flexShrink: 0,
              }}>{step > s ? "✓" : s}</div>
              <span style={{ fontSize: 12, color: step >= s ? C.dark : C.muted, fontWeight: 600 }}>
                {s === 1 ? "Your Info" : s === 2 ? "Your Message" : "Start Trial"}
              </span>
              {s < 3 && <div style={{ flex: 1, height: 1.5, background: step > s ? C.dark : "rgba(28,29,24,0.1)" }} />}
            </div>
          ))}
        </div>

        <div style={{
          background: C.white, borderRadius: 20, border: "1.5px solid rgba(28,29,24,0.08)",
          padding: "40px 36px", boxShadow: "0 4px 32px rgba(28,29,24,0.06)",
        }}>
          {step === 1 && (
            <>
              <h1 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.8px", color: C.dark, marginBottom: 6 }}>Set up your account</h1>
              <p style={{ fontSize: 14, color: C.muted, marginBottom: 28 }}>About 2 minutes. We'll handle the rest.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Business Name *", name: "businessName", placeholder: "Sunrise HVAC & Plumbing" },
                  { label: "Your Name *", name: "ownerName", placeholder: "Maria Garcia" },
                  { label: "Email *", name: "email", placeholder: "maria@sunrisehvac.com", type: "email" },
                  { label: "Your Cell (for reply notifications) *", name: "phone", placeholder: "(555) 000-0001", type: "tel" },
                  { label: "Business Phone (the one customers call) *", name: "businessPhone", placeholder: "(555) 000-0002", type: "tel" },
                ].map(({ label, name, placeholder, type = "text" }) => (
                  <div key={name}>
                    <label style={lbl}>{label}</label>
                    <input style={inp} name={name} type={type}
                      value={(form as any)[name]} onChange={update} placeholder={placeholder} />
                  </div>
                ))}
                <div>
                  <label style={lbl}>Business Type</label>
                  <select style={inp} name="businessType" value={form.businessType} onChange={update}>
                    <option value="">What do you do?</option>
                    {["Plumber","HVAC","Electrician","Landscaper / Lawn Care","Roofer","Painter",
                      "House Cleaning","Handyman","Auto Repair","Salon / Barber","Pet Groomer",
                      "Med Spa","Pest Control","Pool Service","Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!form.businessName || !form.ownerName || !form.email || !form.phone || !form.businessPhone}
                  style={{
                    background: C.dark, color: C.white, border: "none",
                    padding: "14px", borderRadius: 100, fontWeight: 500,
                    fontSize: 16, cursor: "pointer", fontFamily: "inherit",
                    opacity: (!form.businessName || !form.ownerName || !form.email || !form.phone || !form.businessPhone) ? 0.4 : 1,
                    marginTop: 8,
                  }}
                >
                  Continue →
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.8px", color: C.dark, marginBottom: 6 }}>Customize your message</h1>
              <p style={{ fontSize: 14, color: C.muted, marginBottom: 24 }}>
                This goes to everyone who calls and doesn't reach you.
              </p>
              <div style={{ background: C.card, borderRadius: 12, padding: 16, marginBottom: 20 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: C.warm, marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: 0.5 }}>
                  Auto-generated for you:
                </p>
                <p style={{ fontSize: 14, color: C.dark, lineHeight: 1.65, fontStyle: "italic" }}>{defaultMessage}</p>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={lbl}>Custom message (optional)</label>
                <textarea style={{ ...inp, minHeight: 110, resize: "vertical" as const }}
                  name="customMessage" value={form.customMessage} onChange={update}
                  placeholder="Or write your own..." maxLength={320} />
                <p style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>
                  {(form.customMessage || defaultMessage).length}/320 characters
                </p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setStep(1)} style={{
                  flex: 1, background: C.card, color: C.dark, border: "1.5px solid rgba(28,29,24,0.1)",
                  padding: "13px", borderRadius: 100, fontWeight: 500, fontSize: 15,
                  cursor: "pointer", fontFamily: "inherit",
                }}>← Back</button>
                <button onClick={() => setStep(3)} style={{
                  flex: 2, background: C.dark, color: C.white, border: "none",
                  padding: "13px", borderRadius: 100, fontWeight: 500, fontSize: 16,
                  cursor: "pointer", fontFamily: "inherit",
                }}>Continue →</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.8px", color: C.dark, marginBottom: 6 }}>Start your free trial</h1>
              <p style={{ fontSize: 14, color: C.muted, marginBottom: 24 }}>14 days free · $97/mo after · Cancel anytime</p>
              <div style={{ background: C.card, borderRadius: 12, padding: 20, marginBottom: 24 }}>
                {[
                  ["Business", form.businessName],
                  ["Owner", form.ownerName],
                  ["Business phone", form.businessPhone],
                  ["Notifications to", form.phone],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: "flex", gap: 12, fontSize: 13, marginBottom: 8 }}>
                    <span style={{ color: C.muted, minWidth: 130 }}>{label}</span>
                    <span style={{ color: C.dark, fontWeight: 500 }}>{val}</span>
                  </div>
                ))}
                {refCode && (
                  <div style={{ display: "flex", gap: 12, fontSize: 13, marginTop: 4 }}>
                    <span style={{ color: C.muted, minWidth: 130 }}>Referred by</span>
                    <span style={{ color: C.green, fontWeight: 600 }}>🎁 Code: {refCode}</span>
                  </div>
                )}
              </div>
              <div style={{
                background: "#F0FDF4", border: "1.5px solid #BBF7D0",
                borderRadius: 10, padding: 16, marginBottom: 24,
              }}>
                <p style={{ fontSize: 13, color: "#15803D", lineHeight: 1.65 }}>
                  ✅ <strong>14 days completely free.</strong> Setup instructions sent immediately. Your card is only charged after the trial ends.
                </p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setStep(2)} style={{
                  flex: 1, background: C.card, color: C.dark, border: "1.5px solid rgba(28,29,24,0.1)",
                  padding: "13px", borderRadius: 100, fontWeight: 500, fontSize: 15,
                  cursor: "pointer", fontFamily: "inherit",
                }}>← Back</button>
                <button onClick={checkout} disabled={loading} style={{
                  flex: 2, background: C.terra, color: C.white, border: "none",
                  padding: "13px", borderRadius: 100, fontWeight: 600, fontSize: 16,
                  cursor: loading ? "wait" : "pointer", fontFamily: "inherit",
                  opacity: loading ? 0.7 : 1,
                }}>
                  {loading ? "Loading..." : "Start Free Trial →"}
                </button>
              </div>
              <p style={{ fontSize: 11, color: C.muted, textAlign: "center" as const, marginTop: 12 }}>
                🔒 Secured by Stripe
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#F8F5F0" }} />}>
      <SignupForm />
    </Suspense>
  );
}
