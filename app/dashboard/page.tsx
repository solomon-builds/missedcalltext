
"use client";
import { useState } from "react";

const C = {
  egg: "#F8F5F0", egg2: "#F2EFEA", dark: "#1C1D18",
  warm: "#67675F", muted: "#9C9C94", terra: "#AF4E30",
  white: "#FEFEFE", teal: "#CBDADC", green: "#5A8A6A",
};

export default function DashboardPage() {
  const [copied, setCopied] = useState(false);
  const businessPhone = "0000"; // pulled from Stripe sub in production
  const refLink = `https://missedcalltext.vercel.app/signup?ref=${businessPhone}`;

  const copy = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activity = [
    { time: "Today 2:34 PM", from: "(555) 123-4567", texted: true, replied: true },
    { time: "Today 11:12 AM", from: "(555) 987-6543", texted: true, replied: false },
    { time: "Yesterday 4:55 PM", from: "(555) 456-7890", texted: true, replied: true },
    { time: "Yesterday 9:00 AM", from: "(555) 234-5678", texted: true, replied: true },
    { time: "Apr 11 3:30 PM", from: "(555) 876-5432", texted: true, replied: false },
  ];

  return (
    <main style={{ minHeight: "100vh", background: C.egg, fontFamily: "'DM Sans', system-ui, sans-serif", color: C.dark }}>
      <nav style={{
        background: "rgba(248,245,240,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(28,29,24,0.08)",
        padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontWeight: 600, fontSize: 17, color: C.dark }}>📲 MissedCallText</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.green, boxShadow: `0 0 6px ${C.green}` }} />
          <span style={{ fontSize: 13, color: C.warm, fontWeight: 500 }}>Active</span>
        </div>
      </nav>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.8px", color: C.dark, marginBottom: 4 }}>Dashboard</h1>
        <p style={{ fontSize: 14, color: C.muted, marginBottom: 36 }}>Trial active — 11 days remaining</p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 16, marginBottom: 32 }}>
          {[
            { label: "Calls Auto-Texted", value: "23", sub: "This month" },
            { label: "Replies Received", value: "14", sub: "60.8% reply rate" },
            { label: "Jobs Recovered", value: "4–6", sub: "Est. $1,500+ saved" },
            { label: "ROI This Month", value: "15×", sub: "vs $97/mo" },
          ].map(({ label, value, sub }) => (
            <div key={label} style={{ background: C.egg2, borderRadius: 16, padding: "20px 24px" }}>
              <div style={{ fontSize: 34, fontWeight: 500, color: C.dark, letterSpacing: "-1.5px", lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.dark, margin: "6px 0 4px" }}>{label}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* ── REFERRAL SECTION ── */}
        <div style={{
          background: C.dark, borderRadius: 20, padding: "36px 40px",
          marginBottom: 28, color: C.white,
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>🎁</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.5px", marginBottom: 8 }}>
                Refer a business, get a free month.
              </h2>
              <p style={{ fontSize: 14, color: "rgba(254,254,254,0.6)", lineHeight: 1.7, marginBottom: 24, maxWidth: 440 }}>
                Know another service business losing leads to voicemail? Send them your link.
                You get <strong style={{ color: C.white }}>$97 credit (one free month)</strong> for every business that starts a trial.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <div style={{
                  background: "rgba(254,254,254,0.08)", borderRadius: 10,
                  padding: "10px 16px", fontSize: 13, color: "rgba(254,254,254,0.7)",
                  fontFamily: "monospace", flex: 1, minWidth: 200,
                  border: "1px solid rgba(254,254,254,0.12)",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                  {refLink}
                </div>
                <button onClick={copy} style={{
                  background: copied ? C.green : C.terra,
                  color: C.white, border: "none",
                  padding: "10px 20px", borderRadius: 100,
                  fontWeight: 500, fontSize: 14, cursor: "pointer",
                  fontFamily: "inherit", whiteSpace: "nowrap",
                  transition: "background 0.2s",
                }}>
                  {copied ? "✓ Copied!" : "Copy link"}
                </button>
              </div>
            </div>
            <div style={{
              background: "rgba(254,254,254,0.06)", borderRadius: 14,
              padding: "20px 28px", textAlign: "center", minWidth: 160,
            }}>
              <div style={{ fontSize: 36, fontWeight: 500, color: C.white, letterSpacing: "-1.5px" }}>0</div>
              <div style={{ fontSize: 12, color: "rgba(254,254,254,0.5)", marginTop: 4 }}>Referrals sent</div>
              <div style={{ fontSize: 32, fontWeight: 500, color: C.white, letterSpacing: "-1.5px", marginTop: 16 }}>$0</div>
              <div style={{ fontSize: 12, color: "rgba(254,254,254,0.5)", marginTop: 4 }}>Credits earned</div>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div style={{ background: C.egg2, borderRadius: 16, overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(28,29,24,0.08)" }}>
            <h2 style={{ fontSize: 17, fontWeight: 600, color: C.dark }}>Recent Activity</h2>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(28,29,24,0.04)" }}>
                {["Time", "Caller", "Texted", "Replied?"].map(h => (
                  <th key={h} style={{
                    padding: "12px 24px", textAlign: "left",
                    fontSize: 11, fontWeight: 700, color: C.muted,
                    textTransform: "uppercase", letterSpacing: 1,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activity.map((row, i) => (
                <tr key={i} style={{ borderTop: "1px solid rgba(28,29,24,0.06)" }}>
                  <td style={{ padding: "14px 24px", fontSize: 13, color: C.warm }}>{row.time}</td>
                  <td style={{ padding: "14px 24px", fontSize: 14, fontWeight: 600, color: C.dark }}>{row.from}</td>
                  <td style={{ padding: "14px 24px" }}>
                    <span style={{
                      fontSize: 12, fontWeight: 600, color: C.green,
                      background: "rgba(90,138,106,0.12)", padding: "3px 10px", borderRadius: 20,
                    }}>✓ Sent</span>
                  </td>
                  <td style={{ padding: "14px 24px", fontSize: 13 }}>
                    {row.replied
                      ? <span style={{ color: C.terra, fontWeight: 600 }}>✓ Yes</span>
                      : <span style={{ color: C.muted }}>Not yet</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Setup nudge */}
        <div style={{
          marginTop: 20, background: "#FFFBEB", border: "1.5px solid #FDE68A",
          borderRadius: 12, padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 18 }}>⚙️</span>
          <p style={{ fontSize: 13, color: "#92400E", lineHeight: 1.65 }}>
            <strong>Complete your setup:</strong> Set up call forwarding on your business phone so missed calls hit our number automatically.
            Check your welcome email or reply and we'll walk you through it (5 minutes).
          </p>
        </div>
      </div>
    </main>
  );
}
