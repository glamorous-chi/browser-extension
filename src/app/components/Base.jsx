"use client"
import React from "react";
import Image from "next/image";

// First Section
const Base = () => {
  return (
    <div className="p-4 bg-slate-700 rounded-lg flex justify-between">
      <div className="flex gap-2">
        <Image
          src="/logo.svg"
          alt="Brand Logo"
          className="w-36 lg:w-36"
          width={200}
          height={200}
          priority
        />
      </div>
      
      <div className="rounded-lg flex items-center p-2 bg-slate-800 cursor-pointer">
        <Image
          src="/icon-sun.svg"
          alt="Light mode icon"
          className="w-4 lg:w-6"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Base;
