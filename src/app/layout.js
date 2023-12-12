import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brand-Gains | Elevating Businesses through Expert Social Media Marketing Services",
  description: "Brand Gains, the go-to social media marketing agency, can help you take your company to the next level. To deliver you leads and long-term happiness, we specialize in ad campaigns, content production, and strategic planning. Our goal is your success, choose Brand Gains for a joyful, powerful marketing journey.",
  openGraph: {
    url: "https://brand-gains.vercel.app/",
    type: "website",
  },
  twitter: {
    site: "@Brand_Gains",
    url: "https://brand-gains.vercel.app/",
  }
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-r from-fuchsia-50 to-sky-50`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
