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
    title: 'Brand-Gains | E-commerce Service Agency',
    description: 'We assist e-commerce companies with managing their social media accounts so they can concentrate on expanding their enterprises.',
    image: 'https://media.discordapp.net/attachments/1017465630523408435/1178268324841406514/SOCIAL_IMAGE.png?ex=657586e3&is=656311e3&hm=bcb1319efa2f5c3df195664f2d5a3791e08b7c13e6ab152a480509714adc0556&=&format=webp&width=1262&height=662'
  },};

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
