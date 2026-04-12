import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MissedCallText — Never Lose a Lead Again",
  description: "When you miss a call, we text them back in 60 seconds. Built for plumbers, HVAC, electricians, and local service businesses. $97/month.",
  openGraph: {
    title: "MissedCallText — Never Lose a Lead Again",
    description: "When you miss a call, we text them back in 60 seconds. Never lose another job to a competitor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
