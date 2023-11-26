"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Call = () => {
  const router = useRouter();
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Schedule Your Zoom Meeting
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Receive a complimentary 15-minute Zoom call from us to learn how
              our services can assist you.
            </p>
            <h3 className="text-2xl font-semibold mb-4">
              The Meeting is Perfect For
            </h3>
            <ul className="text-lg text-gray-700 list-disc pl-6 mb-6">
              <li>
                Condensing the existing website into elegant, well-functioning
                funnels. Making the move from an offline to an internet
                business.
              </li>
              <li>Recognizing the possibilities for increasing revenue via conversion rate optimization and funnels.</li>
              <li>
                Businesses looking to understand their increased revenue
                potential with funnels & conversion rate optimization.
              </li>
              <li>
                Businesses looking to maximize their conversion rates & average
                order value.
              </li>
              <li>
                Businesses looking for a reliable agency that can make their
                company a priority.
              </li>
            </ul>
            <Link href="/Contact">
              <button
                href="#contact"
                className="border border-black rounded-xl px-4 py-2 text-zinc-800 text-md  bg-blue-400 hover:shadow-md hover:shadow-zinc-400 transition-colors duration-300"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Call;
