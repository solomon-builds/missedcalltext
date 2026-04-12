
"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    businessPhone: "",
    businessType: "",
    customMessage: "",
  });

  const defaultMessage = form.businessName
    ? `Hey! This is ${form.ownerName || "us"} from ${form.businessName}. Sorry I missed your call — I'm with a customer right now. What can I help you with? I'll call you back as soon as I\'m free! 🔧`
    : "Hey! Sorry I missed your call — I'm with a customer right now. What can I help you with? I'll call you back shortly!";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, message: form.customMessage || defaultMessage }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 14px",
    border: "1.5px solid #e5e7eb", borderRadius: 8,
    fontSize: 15, fontFamily: "inherit",
    outline: "none", color: "#0d1117",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block", fontSize: 13, fontWeight: 600,
    color: "#374151", marginBottom: 6,
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "inherit" }}>
      {/* Nav */}
      <nav style={{
        background: "white", borderBottom: "1px solid #e5e7eb",
        padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span style={{ fontSize: 20 }}>📲</span>
          <span style={{ fontWeight: 900, fontSize: 17, color: "#0d1117", letterSpacing: "-0.5px" }}>
            MissedCall<span style={{ color: "#2563eb" }}>Text</span>
          </span>
        </Link>
        <span style={{ fontSize: 13, color: "#9ca3af" }}>14-day free trial · No credit card required</span>
      </nav>

      <div style={{ maxWidth: 580, margin: "48px auto", padding: "0 24px" }}>
        {/* Steps */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, alignItems: "center" }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: step >= s ? "#2563eb" : "#e5e7eb",
                color: step >= s ? "white" : "#9ca3af",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, flexShrink: 0,
              }}>{step > s ? "✓" : s}</div>
              <span style={{ fontSize: 12, color: step >= s ? "#2563eb" : "#9ca3af", fontWeight: 600 }}>
                {s === 1 ? "Your Info" : s === 2 ? "Your Message" : "Payment"}
              </span>
              {s < 3 && <div style={{ flex: 1, height: 2, background: step > s ? "#2563eb" : "#e5e7eb" }} />}
            </div>
          ))}
        </div>

        <div style={{
          background: "white", borderRadius: 16,
          border: "1.5px solid #e5e7eb", padding: "40px 36px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          {step === 1 && (
            <>
              <h1 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-1px", color: "#0d1117", marginBottom: 6 }}>
                Set up your account
              </h1>
              <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 28 }}>
                Takes about 2 minutes. We'll handle the rest.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={labelStyle}>Business Name *</label>
                  <input style={inputStyle} name="businessName" value={form.businessName} onChange={handleChange} placeholder="High Value Plumbing" />
                </div>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input style={inputStyle} name="ownerName" value={form.ownerName} onChange={handleChange} placeholder="Mike Johnson" />
                </div>
                <div>
                  <label style={labelStyle}>Your Email *</label>
                  <input style={inputStyle} name="email" type="email" value={form.email} onChange={handleChange} placeholder="mike@highvalueplumbing.com" />
                </div>
                <div>
                  <label style={labelStyle}>Your Cell Phone (for reply notifications) *</label>
                  <input style={inputStyle} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0001" />
                </div>
                <div>
                  <label style={labelStyle}>Your Business Phone (the one customers call) *</label>
                  <input style={inputStyle} name="businessPhone" type="tel" value={form.businessPhone} onChange={handleChange} placeholder="(555) 000-0002" />
                  <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 6 }}>
                    We'll set up call forwarding instructions after you sign up.
                  </p>
                </div>
                <div>
                  <label style={labelStyle}>Business Type</label>
                  <select style={inputStyle} name="businessType" value={form.businessType} onChange={handleChange}>
                    <option value="">Select your trade</option>
                    <option>Plumber</option>
                    <option>HVAC</option>
                    <option>Electrician</option>
                    <option>Landscaper / Lawn Care</option>
                    <option>Roofer</option>
                    <option>Painter</option>
                    <option>House Cleaning</option>
                    <option>Handyman</option>
                    <option>Auto Repair</option>
                    <option>Other</option>
                  </select>
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!form.businessName || !form.ownerName || !form.email || !form.phone || !form.businessPhone}
                  style={{
                    background: "#2563eb", color: "white", border: "none",
                    padding: "14px", borderRadius: 10, fontWeight: 700,
                    fontSize: 16, cursor: "pointer", fontFamily: "inherit",
                    opacity: (!form.businessName || !form.ownerName || !form.email || !form.phone || !form.businessPhone) ? 0.5 : 1,
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
              <h1 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-1px", color: "#0d1117", marginBottom: 6 }}>
                Customize your message
              </h1>
              <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 28 }}>
                This is what gets texted to anyone who calls and doesn't reach you.
              </p>

              <div style={{
                background: "#f0f9ff", border: "1.5px solid #bae6fd",
                borderRadius: 10, padding: 16, marginBottom: 24,
              }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#0369a1", marginBottom: 8 }}>
                  📲 Default message (auto-generated for you):
                </p>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65, fontStyle: "italic" }}>
                  {defaultMessage}
                </p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Custom message (optional — leave blank to use the default above)</label>
                <textarea
                  style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                  name="customMessage"
                  value={form.customMessage}
                  onChange={handleChange}
                  placeholder="Write your own message here, or leave blank..."
                  maxLength={320}
                />
                <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 6 }}>
                  Keep it under 160 characters to avoid split messages. ({(form.customMessage || defaultMessage).length}/320)
                </p>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => setStep(1)} style={{
                  flex: 1, background: "#f3f4f6", color: "#374151",
                  border: "1.5px solid #e5e7eb", padding: "14px",
                  borderRadius: 10, fontWeight: 600, fontSize: 15,
                  cursor: "pointer", fontFamily: "inherit",
                }}>← Back</button>
                <button onClick={() => setStep(3)} style={{
                  flex: 2, background: "#2563eb", color: "white",
                  border: "none", padding: "14px", borderRadius: 10,
                  fontWeight: 700, fontSize: 16, cursor: "pointer", fontFamily: "inherit",
                }}>Continue →</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-1px", color: "#0d1117", marginBottom: 6 }}>
                Start your free trial
              </h1>
              <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 28 }}>
                14 days free. $97/month after. Cancel any time.
              </p>

              {/* Summary */}
              <div style={{ background: "#f9fafb", borderRadius: 10, padding: 20, marginBottom: 28 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 12 }}>Your setup summary:</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    ["Business", form.businessName],
                    ["Owner", form.ownerName],
                    ["Business Phone", form.businessPhone],
                    ["Reply notifications to", form.phone],
                    ["Message", (form.customMessage || defaultMessage).slice(0, 80) + "..."],
                  ].map(([label, val]) => (
                    <div key={label} style={{ display: "flex", gap: 12, fontSize: 13 }}>
                      <span style={{ color: "#9ca3af", minWidth: 120 }}>{label}</span>
                      <span style={{ color: "#0d1117", fontWeight: 500 }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                background: "#f0fdf4", border: "1.5px solid #bbf7d0",
                borderRadius: 10, padding: 16, marginBottom: 24,
              }}>
                <p style={{ fontSize: 13, color: "#15803d", lineHeight: 1.65 }}>
                  ✅ <strong>14 days completely free.</strong> We'll send you setup instructions immediately after. Your card is only charged after the trial ends — and you can cancel anytime before.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => setStep(2)} style={{
                  flex: 1, background: "#f3f4f6", color: "#374151",
                  border: "1.5px solid #e5e7eb", padding: "14px",
                  borderRadius: 10, fontWeight: 600, fontSize: 15,
                  cursor: "pointer", fontFamily: "inherit",
                }}>← Back</button>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  style={{
                    flex: 2, background: "#f97316", color: "white",
                    border: "none", padding: "14px", borderRadius: 10,
                    fontWeight: 800, fontSize: 16, cursor: loading ? "wait" : "pointer",
                    fontFamily: "inherit", opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? "Loading..." : "Start Free Trial →"}
                </button>
              </div>
              <p style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", marginTop: 12 }}>
                🔒 Secured by Stripe. We never see your card details.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
