
"use client";

export default function DashboardPage() {
  // In production: fetch real data from Stripe + call logs
  const mockActivity = [
    { time: "Today 2:34 PM", from: "(555) 123-4567", status: "Texted ✓", replied: true },
    { time: "Today 11:12 AM", from: "(555) 987-6543", status: "Texted ✓", replied: false },
    { time: "Yesterday 4:55 PM", from: "(555) 456-7890", status: "Texted ✓", replied: true },
    { time: "Yesterday 9:00 AM", from: "(555) 234-5678", status: "Texted ✓", replied: true },
    { time: "Apr 11 3:30 PM", from: "(555) 876-5432", status: "Texted ✓", replied: false },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "inherit" }}>
      <nav style={{
        background: "white", borderBottom: "1px solid #e5e7eb",
        padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>📲</span>
          <span style={{ fontWeight: 900, fontSize: 17, color: "#0d1117", letterSpacing: "-0.5px" }}>
            MissedCall<span style={{ color: "#2563eb" }}>Text</span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
          <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>Active</span>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-1px", color: "#0d1117", marginBottom: 8 }}>
          Your Dashboard
        </h1>
        <p style={{ fontSize: 15, color: "#9ca3af", marginBottom: 36 }}>High Value Plumbing · Trial active — 11 days remaining</p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 36 }}>
          {[
            { label: "Calls Auto-Texted", value: "23", sub: "This month" },
            { label: "Replies Received", value: "14", sub: "60.8% reply rate" },
            { label: "Est. Jobs Recovered", value: "4-6", sub: "At $300 avg = $1,500" },
            { label: "ROI This Month", value: "15×", sub: "vs $97 subscription" },
          ].map(({ label, value, sub }) => (
            <div key={label} style={{
              background: "white", borderRadius: 12,
              border: "1.5px solid #e5e7eb", padding: "20px 24px",
            }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#0d1117", letterSpacing: "-1px", lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#374151", margin: "6px 0 4px" }}>{label}</div>
              <div style={{ fontSize: 12, color: "#9ca3af" }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div style={{ background: "white", borderRadius: 14, border: "1.5px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #e5e7eb" }}>
            <h2 style={{ fontSize: 17, fontWeight: 800, color: "#0d1117", letterSpacing: "-0.3px" }}>Recent Activity</h2>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                {["Time", "Caller", "Status", "Replied?"].map(h => (
                  <th key={h} style={{
                    padding: "12px 24px", textAlign: "left",
                    fontSize: 12, fontWeight: 700, color: "#9ca3af",
                    textTransform: "uppercase", letterSpacing: 0.5,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockActivity.map((row, i) => (
                <tr key={i} style={{ borderTop: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "14px 24px", fontSize: 13, color: "#6b7280" }}>{row.time}</td>
                  <td style={{ padding: "14px 24px", fontSize: 14, fontWeight: 600, color: "#0d1117" }}>{row.from}</td>
                  <td style={{ padding: "14px 24px" }}>
                    <span style={{
                      fontSize: 12, fontWeight: 700, color: "#15803d",
                      background: "#f0fdf4", padding: "3px 10px", borderRadius: 20,
                    }}>{row.status}</span>
                  </td>
                  <td style={{ padding: "14px 24px" }}>
                    {row.replied
                      ? <span style={{ fontSize: 12, color: "#2563eb", fontWeight: 700 }}>✓ Yes</span>
                      : <span style={{ fontSize: 12, color: "#9ca3af" }}>Not yet</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Setup status */}
        <div style={{
          marginTop: 24, background: "#fffbeb", border: "1.5px solid #fde68a",
          borderRadius: 12, padding: "20px 24px",
          display: "flex", alignItems: "flex-start", gap: 12,
        }}>
          <span style={{ fontSize: 20 }}>⚙️</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#92400e", marginBottom: 4 }}>
              Complete your setup
            </p>
            <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.65 }}>
              Set up call forwarding on your business phone to activate automatic text-backs.
              Check your welcome email for step-by-step instructions, or reply to it and we'll walk you through it.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
