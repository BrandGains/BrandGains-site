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
      page: "",
    },
    {
      name: "Instagram",
      icon: "/assets/images/instagram.svg",
      page: "https://www.instagram.com/brandgains/",
    },
    {
      name: "Twitter",
      icon: "/assets/images/twitter.svg",
      page: "",
    },
    {
      name: "Linkedin",
      icon: "/assets/images/linkedin.svg",
      page: "",
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-7xl font-semibold text-gray-900">
              Our Services
            </h1>
            <p className="lg:w-1/2 text-2xl font-medium w-full leading-relaxed text-gray-500">
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
            <button className="flex mx-auto mt-16 bg-blue-400 border border-black hover:shadow-md hover:shadow-zinc-400 text-zinc-800 font-semibold py-2 px-4 focus:outline-none rounded-xl text-lg">
              Contact us
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialMediaIcons.map((icon, index) => (
              <Link href={icon.page}>
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
