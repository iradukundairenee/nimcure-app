"use client";
import React from "react";

const PatientSidebar = () => {
  return (
    <div className="flex justify-start">
      <div className="w-[70%] mt-14 bg-white">
        <div className="text-gray-500 mb-4 px-6">Patient</div>

        <div className="space-y-1">
          <button className="w-full text-left px-6 py-2.5 bg-blue-50 text-blue-600 border-r-4 border-blue-600">
            Rider&apos;s Profile
          </button>
          <button className="w-full text-left px-6 py-2.5 text-gray-600 hover:bg-gray-50">
            Delivery History
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientSidebar;
