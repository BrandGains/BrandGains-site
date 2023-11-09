import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse items-center sm:flex-row sm:mt-16 md:mt-0">
      <div className="w-full sm:w-1/2">
        <img
          src="/assets/images/image.png"
          alt="Hero Image"
          className="w-full rounded-lg"
        />
      </div>
      <div className="w-full sm:w-1/2 text-black px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 mt-4 sm:mt-0">
        Arise: Your Marketing Masterminds
        </h1>
        <p className="text-lg sm:text-xl mb-6">
        Discover the exciting world of Arise Social Media Marketing Agency. We combine creativity, strategy, and innovative technology to create stunning social media campaigns that deliver exceptional results. Ready to join the revolution?
        </p>
        <div className="flex flex-col sm:flex-row">
          <button className="bg-gray-300 border border-black text-zinc-800 hover:shadow-md hover:shadow-zinc-400 font-semibold py-2 px-4 rounded-full text-sm mb-4 sm:mb-0 sm:mr-4">
            <a
              href="#learn-more"
            >
              Learn More
            </a>
          </button>
          <button className="bg-red-500 border border-black hover:shadow-md hover:shadow-zinc-400 text-zinc-800 font-semibold py-2 px-4 rounded-full text-sm">
            <a
              href="#contact"
            >
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
