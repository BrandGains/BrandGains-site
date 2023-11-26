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
    },
    {
      name: "Instagram",
      icon: "/assets/images/instagram.svg",
    },
    {
      name: "Youtube",
      icon: "/assets/images/youtube.svg",
    },
    {
      name: "Twitter",
      icon: "/assets/images/twitter.svg",
    },
    {
      name: "Google",
      icon: "/assets/images/google.svg",
    },
    {
      name: "Snapchat",
      icon: "/assets/images/snapchat.svg",
    },
  ];
  const servicesData = [
    {
      title: "Web Development",
      icon: "/assets/icons/web-dev.png",
      description:
        "Crafting user-friendly and responsive websites tailored to your needs.",
    },
    {
      title: "Graphic Design",
      icon: "/assets/icons/designing.png",
      description: "Creating visually stunning graphics for your brand.",
    },
    {
      title: "Digital Marketing",
      icon: "/assets/icons/ads.png",
      description:
        "Strategizing and executing effective digital marketing campaigns.",
    },
    {
      title: "SEO Optimization",
      icon: "/assets/icons/seo.png",
      description: "Optimizing your online presence for search engines.",
    },
    {
      title: "Mobile App Development",
      icon: "/assets/icons/content-writing.png",
      description: "Building innovative and feature-rich mobile applications.",
    },
    {
      title: "E-commerce Solutions",
      icon: "/assets/icons/ecom.png",
      description: "Creating seamless and secure e-commerce platforms.",
    },
  ];
  return (
    <>
      {/* SERVICES SECTION */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Services
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Explore the range of services we offer to elevate your business.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {servicesData.map((service, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {service.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/Contact">
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get Started
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {socialMediaIcons.map((icon, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-2 shadow-md flex items-center justify-center mb-4"
              >
                <Image
                  src={icon.icon}
                  alt={icon.name}
                  width={10}
                  height={10}
                  className="w-10 h-10 m-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
