// components/ImageTextLayout.js

import React from "react";

const AboutBrand = () => {
  return (
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
        <img
          src="/assets/images/ty.jpg"
          alt="Image"
          className="w-2/3 max-w-md mx-auto h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default AboutBrand;
