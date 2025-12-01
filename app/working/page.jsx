"use client";

import React from "react";

export default function HowItWorks() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-black p-0 m-0 overflow-hidden ">
      <video
        src="/Working.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto max-h-screen object-cover"
      ></video>
    </div>
  );
}
