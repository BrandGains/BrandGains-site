import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brand Gains | Your Premier Social Media Marketing Solution",
  description: "Unlock growth with our expert social media marketing ad campaigns, content, and strategic planning. Your satisfaction guaranteed; your success, our mission.",
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
