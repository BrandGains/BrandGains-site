import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="footer">
      <div className="max-w-lg  px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
        <h1 className="font-extrabold leading-10 tracking-normal text-black text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl">
          <span className="inline md:block tracking-wider">Book Your</span>
          <span className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
              Call Now
            </span>
          </span>
        </h1>
        <Link href="/Contact">
          <div className="mx-auto rounded-lg font-semibold mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <button className="bg-green-400 border-spacing-3 border-2 border-dashed text-sm text-black py-3 px-7 rounded-full border-black ">
              Apply Now
            </button>
          </div>
        </Link>
      </div>

      <hr className="text-black mx-5" />

      <footer className="pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Link href="/">
                <Image
                  className=""
                  src="/assets/images/main_logo_black.png"
                  width={70}
                  height={70}
                  alt="Brand Gains"
                />
              </Link>
            </div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
