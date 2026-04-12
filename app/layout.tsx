import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MissedCallText — Never Lose a Lead Again",
  description: "When you miss a call, we text them back in 60 seconds. Built for plumbers, HVAC, electricians, and local service businesses. $97/month.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
