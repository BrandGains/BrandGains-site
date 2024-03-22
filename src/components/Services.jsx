"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  const socialMediaIcons = [
    {
      name: "Facebook",
      icon: "/assets/images/facebook.svg",
      page: "https://www.facebook.com/profile.php?id=61554174041816",
    },
    {
      name: "Instagram",
      icon: "/assets/images/instagram.svg",
      page: "https://www.instagram.com/brandgains/",
    },
    {
      name: "Twitter",
      icon: "/assets/images/twitter.svg",
      page: "https://twitter.com/Brand_Gains/",
    },
    {
      name: "Linkedin",
      icon: "/assets/images/linkedin.svg",
      page: "https://www.linkedin.com/in/brand-gains-16806029b/",
    },
    // {
    //   name: "Youtube",
    //   icon: "/assets/images/youtube.svg",
    // },
    // {
    //   name: "Google",
    //   icon: "/assets/images/google.svg",
    // },
  ];

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="w-full flex flex-col justify-center items-center gap-10">
        <div className="sm:w-4/5 w-11/12 flex justify-evenly gap-20 flex-col sm:flex-row">
          <div className="video sm:w-fit w-fit h-fit  rounded-lg ">
            <iframe
              width="326"
              height="580"
              className="rounded-xl"
              src="https://www.youtube.com/embed/JjzEGstr-Kg?autoplay=1"
              title="Did You Caught All These Details in The Spider-Man into the Spider-Verse?..."
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content flex flex-col sm:w-3/5 w-full justify-around p-8 rounded-lg shadow-2xl shadow-blue-700 bg-gradient-to-r from-blue-800 to-indigo-900 ">
            <h2 className="editing sm:text-7xl text-4xl font-extrabold text-slate-100 tracking-wide w-full leading-7">
              <span className="editing">Editing</span> And Marketing?
            </h2>
            <p className="text-lg font-medium text-slate-200 tracking-wider">
              <span className="text-2xl font-bold text-yellow-300">
                Looking to boost your brand&apos;s social media presence?{" "}
              </span>
              Brand Gains can help. We specialize in crafting high-quality
              short-form content that captures attention and drives results.{" "}
              <hr className="mt-3" /> <br /> Contact Brand Gains today for a
              free consultation and see how we can help you tell your brand
              story through captivating short-form content.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-10">
          <Link href="https://www.youtube.com/@brandgains">
            <button className="border border-black rounded-xl px-4 py-2 text-zinc-800 bg-lime-400 hover:shadow-md hover:shadow-zinc-400 transition-colors duration-300">
              Our Work
            </button>
          </Link>
          <Link href="/Contact">
            <button className="border border-black rounded-xl px-4 py-2 text-zinc-800 bg-blue-400 hover:shadow-md hover:shadow-zinc-400 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialMediaIcons.map((icon, index) => (
              <Link href={icon.page} key={index} target="_blank">
                <div
                  key={index}
                  className="bg-white rounded-md p-2 shadow-md flex items-center justify-center mb-4 mx-auto"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    width={10}
                    height={10}
                    className="w-10 h-10 m-2"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
