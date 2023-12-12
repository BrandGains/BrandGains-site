import React from "react";
import Feature from "@/components/Feautre";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Wizards from "@/components/Wizards";
import Call from "@/components/Call";

export default function Home() {
  return (
    <div>
      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=id=G-PGR865BV9D`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PGR865BV9D');
    `}
      </Script>

      {/* Microsoft Clarity */}
      <Script
        id="clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_KEY}");
          `,
        }}
      />
      <Hero />
      <Feature />
      <Services />
      {/* <Wizards /> */}
      <Call />
    </div>
  );
}
