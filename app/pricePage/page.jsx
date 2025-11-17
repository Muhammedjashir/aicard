"use client"; // ✅ Required for client-side rendering

import React from "react";
import Image from "next/image";

const Pricepage = () => {
  const features = [
    {
      vdo: "/animation.mp4",
      background: "/blue.png",
      title: "Digital Starter",
      description: "Perfect for individuals getting started",
      price: "Starts From ₹599.00",
    },
    {
      vdo: "/Business.mp4",
      background: "/green.png",
      title: "Business Pro",
      description: "Most popular for professionals",
      price: "Starts From ₹999.00",
    },
  ];

  const plans = [
    {
      background: "/blue.png",
      title: "Digital Starter",
      price: "₹599 INR",
      sub: "One-time payment • Lifetime access",
      feature: [
        "1 Digital Card",
        "Basic Customization",
        "Contact Sharing",
        "Standard Support",
        "QR Code Integration",
        "Web Profile",
        "Social Media Links",
        "Unlimited Taps",
      ],
    },
    {
      background: "/green.png",
      title: "Business Pro",
      price: "₹999 INR",
      sub: "One-time payment • Lifetime access",
      feature: [
        "1 Digital Card",
        "1 Physical NFC Card",
        "Advanced Customization",
        "Priority Support",
        "Unlimited Taps",
        "Analytics Dashboard",
        "QR Code Integration",
        "Social Media Links",
        "Custom Branding",
      ],
    },
  ];

  const fea = {
    title: "Plan Comparison",
    feature: [
      { name: "Digital Card", starter: true, pro: true },
      { name: "Physical Card", starter: false, pro: true },
      {
        name: "Customization",
        starter: "Basic",
        pro: "Advanced",
        proType: "text",
      },
      {
        name: "Support",
        starter: "Standard",
        pro: "Priority",
        proType: "text",
      },
      { name: "Analytics", starter: false, pro: true },
      { name: "Taps", starter: "Unlimited", pro: "Unlimited", proType: "text" },
    ],
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-black via-slate-500 to-gray-200">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text text-center">
        Multiple Options Available
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white text-center font-semibold mt-4 mb-10">
        For all professions
      </p>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl mb-7">
        {features.map((feature, index) => (
          <div
            key={index}
            className="cursor-pointer relative rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-110 sm:h-full md:h-120 object-cover"
            >
              <source src={feature.vdo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-sm sm:text-base mb-2">{feature.description}</p>
              {feature.price && (
                <p className="text-orange-400 font-semibold text-lg">
                  {feature.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl  h-120 ">
        {plans.map((feature, index) => (
          <div
            key={index}
            className="cursor-pointer relative rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 "
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={feature.background}
                alt={feature.title}
                fill
                className="object-contain  "
              />
            </div>

            <div className="rounded-xl absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

            <div className="absolute top-0 left-0 right-0 p-6 text-white">
              <h2 className="text-4xl font-bold mb-2 text-center">
                {feature.title}
              </h2>
              {feature.price && (
                <p className="text-orange-400 font-semibold text-2xl text-center">
                  {feature.price}
                </p>
              )}
              <p className="text-sm sm:text-base mb-2 text-center">
                {feature.sub}
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-1">Features:</h3>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-white h-24 ">
                {feature.feature.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden relative right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-black/10 rounded-2xl shadow-lg mt-10 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          Plan Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b border-gray-400 text-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Features</th>
                <th className="text-center py-3 px-4 font-semibold">
                  Digital Starter
                </th>
                <th className="text-center py-3 px-4 font-semibold text-orange-400">
                  Business Pro
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-100">
              {fea.feature.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-600 hover:bg-white/10 transition"
                >
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    {item.name}
                  </td>

                  <td className="text-center py-3 px-4">
                    {typeof item.starter === "boolean" ? (
                      item.starter ? (
                        <span className="text-green-300 text-lg">✓</span>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )
                    ) : (
                      <span className="text-green-300 font-semibold">
                        {item.starter}
                      </span>
                    )}
                  </td>

                  <td className="text-center py-3 px-4">
                    {typeof item.pro === "boolean" ? (
                      item.pro ? (
                        <span className="text-orange-400 text-lg">✓</span>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )
                    ) : (
                      <span className="text-orange-400 font-semibold">
                        {item.pro}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricepage;
