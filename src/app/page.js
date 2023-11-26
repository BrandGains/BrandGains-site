"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Feature from "@/components/Feautre";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Wizards from "@/components/Wizards";
import Call from "@/components/Call";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero />
      <Feature />
      <Services />
      {/* <Wizards /> */}
      <Call />
    </>
  );
}
