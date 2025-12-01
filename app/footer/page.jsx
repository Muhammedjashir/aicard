"use client"; // Enable client-side interactivity

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row flex-wrap justify-between items-start gap-10">
        {/* Logo & About */}
        <div className="flex-1 min-w-[250px]">
          <Link
            href="/"
            className="text-2xl font-bold font-serif cursor-pointer mb-4 block"
          >
            MY AI CARD
          </Link>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Revolutionizing digital networking with <br /> smart NFC technology.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/myai_card/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex justify-center items-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all duration-300"
            >
              <Image
                src="/Logos/insta.png"
                alt="Instagram"
                width={18}
                height={18}
              />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=61578177707323#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex justify-center items-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all duration-300"
            >
              <Image
                src="/Logos/facebook.webp"
                alt="Facebook"
                width={27}
                height={27}
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/imitpark/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex justify-center items-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all duration-300"
            >
              <Image
                src="/Logos/LinkedIn.webp"
                alt="LinkedIn"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Instant Contact Sharing</li>
            <li>Digital Business Card</li>
            <li>QR Code Integration</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-lg font-bold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/doc">Documentation</Link>
            </li>
            <li>Blog & Articles</li>
            <li>Help Center</li>
            <li>Community Forum</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              Email:{" "}
              <a
                href="mailto:myaicard@imitpark.com"
                className="text-blue-400 hover:underline"
              >
                myaicard@imitpark.com
              </a>
            </li>
            <li>Phone: +91 89436 27627</li>
            <li>
              Location: Finpro Technologies, S2, Navnit Vaidurya, II Main,
              Sarvabhouma Nagar, Bannerghatta Road, Bangalore 560076
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center text-center gap-2 md:gap-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-orange-500">IMIT Park Ltd</span>. All rights
          reserved.
        </p>

        <Link
          href="/termsandPrivecy"
          className="text-gray-500 text-sm hover:text-orange-400 transition-all cursor-pointer"
        >
          Terms of Use | Privacy Policy
        </Link>

        <Link
          href="/returnandRefund"
          className="text-gray-500 text-sm hover:text-orange-400 transition-all cursor-pointer"
        >
          Return Policy | Refund Policy
        </Link>

        <p className="text-gray-500 text-sm">
          Developed by{" "}
          <span className="text-orange-500 font-semibold">Imitpark Ltd</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
