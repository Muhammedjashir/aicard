"use client"; // Enables client-side rendering

import React from "react";
import Image from "next/image";
import Link from "next/link";  

const Landingpage = () => {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg" // ✅ Place your image in the /public folder
          alt="Background"
          fill
          priority
          className=""
        />
        <div className=""></div>
      </div>

      {/* Main Layout */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-40">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start justify-center ">
          <h1 className="text-lg sm:text-xl md:text-4xl mb-4 text-black">
            Seamless Digital Networking
          </h1>

          <p className="mt-8 text-base sm:text-lg text-gray-500">
            Design professional NFC-enabled digital cards that simplify sharing <br />
            <span className="text-gray-500 font-semibold">
              your contact information instantly.
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-20 flex flex-col sm:flex-row w-full gap-4 ">
            {/* <button className="border-2 rounded-lg px-10 sm:px-10 py-3 bg-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">
              Explore Cards
            </button> */}
            <button className="border rounded-lg px-10 sm:px-20 py-3 text-black font-semibold hover:scale-105 transition-transform duration-300 hover:bg-gray-200 cursor-pointer">
              <Link href="/working">
              See How it Works
              </Link>
              
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 relative h-[400px] md:h-full w-full">
          <Image
            src="/crad1.png" // ✅ Place "crad1.png" inside the /public folder
            alt="Card"
            fill
            className="object-contain md:object-cover md:scale-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
