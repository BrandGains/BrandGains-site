"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent top-0 left-0 right-0 z-10 backdrop-blur-sm">
      <div className="flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="my-4 ">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/assets/images/main_logo_black.png"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
        </div>
        <div className=" pb-3 mt-8 md:pb-0 md:mt-0">
          <ul className="items-center justify-end md:flex md:items-center">
            <li className="text-l text-white text-center">
              <Link href="/Contact">
                <button className="border border-black rounded-xl px-4 py-2 text-zinc-800 bg-blue-400 hover:shadow-md hover:shadow-zinc-400 transition-colors duration-300">
                  Apply Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
