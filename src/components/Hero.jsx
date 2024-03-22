"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      {/* HERO SECTION */}
      <section className="mx-10 flex flex-col-reverse items-center sm:flex-row sm:mt-16 md:mt-0">
        <div className="w-full sm:w-1/2">
          <Image
            src="/assets/images/img.png"
            alt="Hero Image"
            width={700}
            height={486}
            style={{ width: "100%", height: "auto" }}
            quality="100"
            loading="eager"
            className="rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 text-black px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-4 sm:mt-0">
            Ready to take your social media to the next level?
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            In today's fast-paced digital world, attention spans are shorter
            than ever. That's where Brand Gains comes in. We specialize in
            crafting engaging short-form content that cuts through the noise and
            resonates with your target audience.
            <span className="block text-xl text-green-900 underline font-medium">
              {" "}
              Let&apos;s grow together.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row">
            <Link href="/Contact">
              <button className="border border-black rounded-xl px-4 py-2 text-zinc-800 bg-blue-400 hover:shadow-md hover:shadow-zinc-400 transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
