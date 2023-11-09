"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  return (
    <div>
      <nav className="w-full bg-transparent top-0 left-0 right-0 z-10 backdrop-blur-sm ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between my-4 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image 
                  src="/assets/images/main_logo_black.png"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/assets/icons/close-menu.png"
                      width={30}
                      height={30}
                      alt="logo"
                    />  
                  ) : (
                    <Image
                      src="/assets/icons/hamburger-menu.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
          <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-end md:flex md:items-center"> 
                <li className="text-l text-black text-center mr-4 hover:text-blue-500 ml-auto">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-l text-white text-center md:hover:text-purple-600 md:hover:bg-transparent ml-auto md:ml-auto md:lr-auto"> {/* Remove pb-6 and py-2 classes */}
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    <button className="border border-black rounded-xl px-4 py-2 text-zinc-800 bg-blue-400 hover:shadow-md hover:shadow-zinc-400 transition-colors duration-300">
                      Apply Now
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}