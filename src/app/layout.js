import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brand-Gains | E-commerce Service Agency",
  description: "We assist e-commerce companies with managing their social media accounts so they can concentrate on expanding their enterprises.",
  openGraph: {
    url: "https://brand-gains.vercel.app/"
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
    </>
  );
}
