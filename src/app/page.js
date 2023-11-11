"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
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

  const wizards = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/ty.jpg", // Replace with the actual image file path
    },
    {
      name: "Jane Smith",
      role: "Creative Director",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/images/ty.jpg", // Replace with the actual image file path
    },
    {
      name: "Bob Johnson",
      role: "Marketing Specialist",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "/assets/images/ty.jpg", // Replace with the actual image file path
    },
  ];
  return (
    <div>
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
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 mt-4 sm:mt-0">
            Arise: Your Marketing Masterminds
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Discover the exciting world of Arise Social Media Marketing Agency.
            We combine creativity, strategy, and innovative technology to create
            stunning social media campaigns that deliver exceptional results.
            Ready to join the revolution?
          </p>
          <div className="flex flex-col sm:flex-row">
            <button className="bg-gray-300 border border-black text-zinc-800 hover:shadow-md hover:shadow-zinc-400 font-semibold py-2 px-4 rounded-full text-sm mb-4 sm:mb-0 sm:mr-4">
              <a href="#learn-more">Learn More</a>
            </button>
            <button className="bg-red-500 border border-black hover:shadow-md hover:shadow-zinc-400 text-zinc-800 font-semibold py-2 px-4 rounded-full text-sm">
              <a href="#contact">Contact Us</a>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT BRAND */}
      <div className="flex flex-wrap justify-center items-center p-6 lg:p-16 mx-auto max-w-7xl">
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-start">
            Arise: Your Marketing Masterminds
          </h1>
          <p className="text-start text-gray-600 text-lg lg:text-2xl">
            Discover the exciting world of Arise Social Media Marketing Agency.
            We combine creativity, strategy, and innovative technology to create
            stunning social media campaigns that deliver exceptional results.
            Ready to join the revolution?
          </p>
        </div>

        <div className="w-full lg:w-1/2 p-4 sm:flex sm:flex-col-reverse">
          <Image
            src="/assets/images/ty.jpg"
            alt="Image"
            className="w-2/3 max-w-md mx-auto h-auto rounded-md"
            width={1000}
            height={1000}
          />
        </div>
      </div>

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
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Get Started
          </button>
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

      {/* WIZARDS SECTION */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Meet the Wizards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wizards.map((wizard, index) => (
              <div
                key={index}
                className="bg-lime-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 flex flex-col items-center m-8"
              >
                <div className="w-fit relative overflow-hidden mb-4">
                  <Image
                    src={wizard.image}
                    alt={wizard.name}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {wizard.name}
                </h3>
                <p className="text-gray-600 mb-2">{wizard.role}</p>
                <p className="text-gray-600 mb-4">{wizard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHECULE A CALL SECTION */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Schedule Your Call with Dany
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Free 15-Minute Demo Call. By the end of this Audit call, you will
              have a clear understanding of the next steps you can take for your
              business to start generating consistent and reliable results
              online with Funnels & Paid Advertising.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Find a time on Dany’s calendar to schedule your call today, and we
              look forward to speaking to you soon!
            </p>
            <h3 className="text-2xl font-semibold mb-4">
              This Audit Call is Perfect For:
            </h3>
            <ul className="text-lg text-gray-700 list-disc pl-6 mb-6">
              <li>
                Businesses looking to convert their current website into a
                high-quality & streamlined funnel format.
              </li>
              <li>Businesses looking to take their offline business online.</li>
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
            <a
              href="#contact"
              className="border border-black rounded-xl px-4 py-2 text-zinc-800 text-md font-semibold bg-blue-400 hover:shadow-md hover:shadow-zinc-400 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
