"use client";
import React from "react";
import Image from "next/image";
import { deets } from "./Data/page";

const All = () => {
  return (
    <>
      <section className="grid lg:grid-cols-3 gap-4">
      {deets.map((deet)=> (
         <div className="rounded-lg bg-slate-800 p-5 grid gap-10 lg:gap-16" key={deet.id}>         
          <div className="flex gap-4 items-center">
            <Image
              src={deet.logo}
              alt={deet.alt}
              className="w-11 lg:w-16"
              width={200}
              height={200}
            />

            <div>
              <h2 className="text-bold">{deet.name}</h2>
              <p className="text-sm max-w-[30ch]">{deet.description}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="rounded-full px-4 py-2 border border-white">
              <p className="text-xs lg:text-sm text-center">Remove</p>
            </div>

            <div>{/* Toggle */}</div>
          </div>
        </div>
      ))}
       
      </section>
    </>
  );
};

export default All;
