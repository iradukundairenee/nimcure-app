"use client";

import React from "react";
import Link from "next/link";

interface HeaderProps {
  title: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  breadcrumb?: string;
  nextDeliveryDate?: string;
  daysRemaining?: number;
}

const Header: React.FC<HeaderProps> = ({
  title,
  buttonLabel,
  onButtonClick,
  breadcrumb,
  nextDeliveryDate,
  daysRemaining,
}) => {
  return (
    <div className="py-4 px-8 flex flex-row items-center justify-between gap-4 border-b border-gray-200">
      {/* Breadcrumb */}
      {breadcrumb && (
        <div className="flex items-center gap-1">
          <Link href="/patients" className="text-[#4285F4] hover:underline">
            Patients
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-900">View Patient</span>
        </div>
      )}

      {/* Main Header */}
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-[120px]">
          <h1 className="font-gilroy font-normal text-[24px] leading-[26.4px] text-gray-900 m-0">
            {title}
          </h1>

          {/* Delivery Info */}

          {nextDeliveryDate && (
            <p className="text-gray-600 text-sm flex flex-col">
              <div>
              Patient next delivery date is{" "}
              </div>
            <div>
            <span className="font-medium">{nextDeliveryDate}</span>
              {daysRemaining && `, in ${daysRemaining} days`}
            </div>
            </p>
          )}
        </div>

        {buttonLabel && (
          <button
            className="bg-[#4285F4] text-white px-6 py-2 rounded-[4px] hover:bg-blue-600 text-sm font-medium pr-4"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
