import Head from "next/head";
import React from "react";
import Feature from "@/components/Feautre";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Wizards from "@/components/Wizards";
import Call from "@/components/Call";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Services />
      {/* <Wizards /> */}
      <Call />
    </div>
  );
}
