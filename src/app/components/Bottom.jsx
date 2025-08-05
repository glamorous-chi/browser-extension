"use client";
import React from "react";
import { useState } from "react";
import Active from "./Active";
import Inactive from "./Inactive";
import All from "./All";

const Bottom = () => {
  // const [tab, setTab] = useState("All");
  const [activeTab, setActiveTab] = useState("All");

  const tabClass = (tab) =>
    `rounded-full px-6 py-3 text-center cursor-pointer text-white ${
      activeTab === tab ? "bg-red-600 text-slate-300" : "bg-slate-800 text-white"
    }`;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:justify-between p-4 rounded-lg items-center">
        <h1 className="text-3xl">Extensions List</h1>

        <div className="flex gap-3 items-center text-sm">
          <button
            onClick={() => setActiveTab("All")}
            className= {tabClass('All')}>
            All
          </button>
          <button
            onClick={() => setActiveTab("Active")}
            className= {tabClass('Active')}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab("Inactive")}
            className= {tabClass('Inactive')}
          >
            Inactive
          </button>
        </div>
      </div>

      <div>
        {activeTab === "All" && <All />}
        {activeTab === "Active" && <Active />}
        {activeTab === "Inactive" && <Inactive />}
      </div>
    </>
  );
};

export default Bottom;
