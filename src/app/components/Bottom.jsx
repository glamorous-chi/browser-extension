"use client";
import React from "react";
import Card from "./Card";

const Bottom = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:justify-between p-4 rounded-lg items-center">
        <h1 className="text-3xl">Extensions List</h1>

        <div className="flex gap-3 items-center text-sm">
          <div className="bg-slate-800 rounded-full px-6 py-3 text-center">
            All
          </div>
          <div className="bg-red-600 rounded-full px-5 py-3 text-center">
            Active
          </div>
          <div className="bg-slate-800 rounded-full px-5 py-3 text-center">
            Inactive
          </div>
        </div>
      </div>

      <div>
        <Card/>
      </div>
    </>
  );
};

export default Bottom;
