"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] text-black px-4 md:px-16 lg:px-24 py-16 mt-10">
      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SECTION */}
       <div className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
  <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left">
    Contact Us
  </h1>

  <p className="text-gray-700 mb-6 text-center md:text-left leading-relaxed">
    Our mailing address is:
    <br />
    <span className="font-bold">
      IMIT Park Ltd. LF Tower, Tana-Irinjalakuda, Thrissur,
      Kerala Pin : 680121
    </span>
    <br />
    Phone: +91 89436 27627
    <br />
    Email: <strong>myaicard@imitpark.com</strong>
  </p>

  {/* Social Icons */}
  <div className="flex justify-center md:justify-start items-center gap-6 mt-6">
    <Link
      href="https://www.instagram.com/myai_card/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[40px] h-[40px] flex justify-center items-center"
    >
      <Image
        src="/Logos/instagram black.png"
        alt="Instagram"
        width={30}
        height={30}
      />
    </Link>

    <Link
      href="https://www.facebook.com/profile.php?id=61578177707323#"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[40px] h-[40px] flex justify-center items-center"
    >
      <Image
        src="/Logos/facebook black.png"
        alt="Facebook"
        width={30}
        height={30}
      />
    </Link>

    <Link
      href="https://www.linkedin.com/company/imitpark/posts/?feedView=all"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[40px] h-[40px] flex justify-center items-center"
    >
      <Image
        src="/Logos/LinkedIn black.png"
        alt="LinkedIn"
        width={30}
        height={30}
      />
    </Link>
  </div>
</div>


        {/* RIGHT SECTION — FORM */}
        <div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Great vision without great people is irrelevant.
            <br />
            Let's work together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 border border-gray-400 rounded-sm bg-white focus:outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full p-3 border border-gray-400 rounded-sm bg-white focus:outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Enter your message"
              className="w-full p-3 border border-gray-400 rounded-sm bg-white focus:outline-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 rounded-sm hover:bg-gray-700 transition cursor-pointer"
            >
              submit
            </button>
          </form>
        </div>
      </div>

      {/* MAP AT THE BOTTOM CENTER */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full md:w-4/4 h-100 rounded-xl overflow-hidden shadow-md border">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.241123925195!2d76.2150940762719!3d10.348675599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f768249c9bf5%3A0x48c8065261fbf396!2sIMIT%20PARK%20-%20International%20Media%20and%20Information%20Technology%20Park%20%7C%20IT%20Company%20In%20Kerala!5e0!3m2!1sen!2sin!4v1711470000000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
