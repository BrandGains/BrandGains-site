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
  const servicesData = [
    {
      title: "Ad Campaigns",
      icon: "/assets/icons/ads.png",
      description:
        "powerful digital marketing strategies with eye-catching ads to grow your company",
    },
    {
      title: "SEO Optimization",
      icon: "/assets/icons/seo.png",
      description: "Optimizing your online presence for search engines.",
    },
    {
      title: "Content Creation",
      icon: "/assets/icons/content-creation.png",
      description:
        "We develop hook-and retention-based content that attracts in the audience. ",
    },
    {
      title: "Strategic Planning",
      icon: "/assets/icons/seo.png",
      description:
        "Strategies tailored to your goals, boosting growth in line with market demand.",
    },
    {
      title: "Content Writing",
      icon: "/assets/icons/content-writing.png",
      description:
        "Crafting brand-focused content for effective communication on blogs and websites.",
    },
    {
      title: "Graphic Designing",
      icon: "/assets/icons/designing.png",
      description: "Creating visually stunning graphics for your brand.",
    },
  ];
  return (
    <>
      {/* SERVICES SECTION */}
      <section className="w-full flex justify-center">
        <div className="sm:w-4/5 w-11/12 flex justify-evenly gap-20 flex-col sm:flex-row">
          <div className="video sm:w-fit w-fit h-fit  rounded-lg ">
            <iframe
              width="326"
              height="580"
              className="rounded-xl"
              src="https://www.youtube.com/embed/JjzEGstr-Kg?autoplay=1"
              title="Did You Caught All These Details in The Spider-Man into the Spider-Verse?..."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content flex flex-col sm:w-3/5 w-full justify-center gap-10 p-8 rounded-lg shadow-2xl shadow-blue-700 bg-gradient-to-r from-blue-800 to-indigo-900 ">
            <h2 className="sm:text-7xl text-4xl font-extrabold text-slate-100 tracking-wide w-full">
              Editing?
            </h2>
            <p className="text-xl font-medium text-slate-200">
              We are <span className="text-2xl">Here!!</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
