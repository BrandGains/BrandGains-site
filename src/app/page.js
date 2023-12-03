import React from "react";
import Feature from "@/components/Feautre";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Wizards from "@/components/Wizards";
import Call from "@/components/Call";
import Script from "next/script";

export const metadata = {
  title: "Brand-Gains | E-commerce Service Agency",
  description:
    "We assist e-commerce companies with managing their social media accounts so they can concentrate on expanding their enterprises.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Services />
      {/* <Wizards /> */}
      <Call />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
    `}
      </Script>
    </div>
  );
}
