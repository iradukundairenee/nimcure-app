"use client";
import React from "react";

const PatientsInformations = () => {
  return (
    <div className="flex justify-start">
      <div className="w-[70%] mt-14 bg-white">
        <h2 className="text-[16px] font-gilroy font-medium leading-[17.6px] text-left mb-4 p-3">
          Patient Information
        </h2>
        <div className="p-3 flex flex-row justify-between">
          <p className="text-sm  font-gilroy font-medium text-[#2A2A2AB2] opacity-70">
            Hospital ID
          </p>
          <p className="text-sm  font-gilroy font-medium text-gray-900">
            1AFHFH093
          </p>
        </div>
        <div className="p-3 flex flex-row justify-between">
          <p className="text-sm  font-gilroy font-medium text-[#2A2A2AB2] opacity-70">
            Name
          </p>
          <p className="text-sm  font-gilroy font-medium text-gray-900">
            Oluwaseun Aregbesola
          </p>
        </div>
        <div className="p-3 flex flex-row justify-between">
          <p className="text-sm  font-gilroy font-medium text-[#2A2A2AB2] opacity-70">
            Phone Number
          </p>
          <p className="text-sm  font-gilroy font-medium text-gray-900">
            +2347068642920
          </p>
        </div>
        <div className="p-3 flex flex-row justify-between">
          <p className="text-sm  font-gilroy font-medium text-[#2A2A2AB2] opacity-70">
            Next Delivery Date
          </p>
          <p className="text-sm  font-gilroy font-medium text-gray-900">
            12th September 2020
          </p>
        </div>
        <div className="p-3 flex flex-row justify-between">
          <p className="text-sm  font-gilroy font-medium text-[#2A2A2AB2] opacity-70">
            Location
          </p>
          <p className="text-sm  font-gilroy font-medium text-gray-900">
            Yaba, Lagos
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientsInformations;
