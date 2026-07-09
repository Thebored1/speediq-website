import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeedIQ — Every quarter, a little higher",
  description:
    "SpeedIQ runs your brand, digital, and production work end to end — senior strategists, creatives, and makers, with results you can chart.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
