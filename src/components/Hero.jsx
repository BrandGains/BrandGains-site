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
      <section className="flex flex-col-reverse items-center sm:flex-row sm:mt-16 md:mt-0">
        <div className="w-full sm:w-1/2">
          <Image
            src="/assets/images/image.png"
            alt="Hero Image"
            width={1000}
            height={10}
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 text-black px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-4 sm:mt-0">
            Drive Growth, Convert Leads
            Your Ultimate Digital Marketing
            Partner!
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            A Social Media Marketing Agency for E-Commerce. We combine
            creativity, strategy, and innovative technology to create
            result-based social media campaigns that deliver exceptional results
            <span className="block text-xl text-green-900 underline font-medium">
              {" "}
              Ready to join the revolution?
            </span>
          </p>
          <div className="flex flex-col sm:flex-row">
            <Link href="/Contact">
              <button className="bg-red-500 border border-black hover:shadow-md hover:shadow-zinc-400 text-zinc-800 font-semibold py-2 px-4 rounded-xl text-md">
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
