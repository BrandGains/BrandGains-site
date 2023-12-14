import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <section className="text-gray-600 body-font mx-8">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            width={1000}
            height={1160}
            alt="feature"
            quality="100"
            className="object-cover object-center"
            src="/assets/images/Rocket-leads.png"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {/* Feature 1 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base">
                Our skilled team assists in launching and propelling your brand
                to new heights. Experience exceptional outcomes from customized
                social media strategies.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                unleash your company&apos;s development. Concentrate on what is
                important while we handle the rest. Experience faster results
                and discover your company&apos;s actual potential.
              </p>

            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Neptune
              </h2>
              <p className="leading-relaxed text-base">
                Our customized tactics expand the audience for your brand. Gain
                success by utilizing our creative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
