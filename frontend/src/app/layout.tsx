import type { Metadata } from "next";
import "./globals.css";
import "@livekit/components-styles";
import '../components/livekit/styles/LivekitOverrides.css';

export const metadata: Metadata = {
  title: "Travelop",
  description: "AI Travel Planner",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
