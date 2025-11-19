"use client";

import Image from "next/image";
import Link from "next/link";

export default function DocsPage() {
  const topics = [
    {
      title: "Getting Started",
      desc: "Setup and begin using the platform.",
      icon: "🚀",
      link: "/doc/gettingstarted",
    },
    {
      title: "Digital Card Setup",
      desc: "Create and customize your smart digital card.",
      icon: "💳",
      link: "/doc/card-setup",
    },
    {
      title: "Customization",
      desc: "Make your design stand out and suit your brand.",
      icon: "🎨",
      link: "/doc/customization",
    },
    {
      title: "Features",
      desc: "Explore powerful features of the platform.",
      icon: "🧰",
      link: "/doc/features",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Documentation Theme <br /> By MyAiCard
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Learn how to get started, customize your digital card,
            explore powerful features, and create a professional smart identity.
          </p>

          {/* Search Box - uncomment if needed */}
          {/* 
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-lg border border-gray-200 rounded-full p-2 gap-2 max-w-xl mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search here for answers..."
              className="flex-1 px-4 py-2 text-gray-700 rounded-full outline-none w-full"
            />
            <button className="px-6 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition w-full sm:w-auto">
              Search Now
            </button>
          </div>
          */}
        </div>

        {/* Right Side Graphic */}
        <div className="flex justify-center w-full">
          <Image
            src="/docs.webp"
            width={450}
            height={450}
            alt="Documentation Illustration"
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>

      </section>

      {/* BROWSE YOUR TOPICS */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
            Browse Your Topics
          </h2>

          {/* Info Cards */}
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-6 
            sm:gap-8
          ">
            {topics.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="
                  bg-white 
                  shadow-sm 
                  hover:shadow-xl 
                  transition 
                  p-6 sm:p-8 
                  rounded-2xl 
                  cursor-pointer 
                  group 
                  border 
                  border-gray-200
                "
              >
                <div className="text-4xl mb-4">{item.icon}</div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-red-500 transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
