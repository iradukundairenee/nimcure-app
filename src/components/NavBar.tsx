// src/components/NavBar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Truck, Users, UserCircle, Settings } from "lucide-react";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

interface ProfileProps {
  name: string;
  imageUrl?: string;
}

interface NavBarProps {
  profile?: ProfileProps;
}

const NavBar: React.FC<NavBarProps> = ({
  profile = {
    name: "Emmanuel Adigwe",
    imageUrl: "/api/placeholder/32/32",
  },
}) => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-10 py-2 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-green-600">
          <Image
            src="/images/Vector.svg"
            alt="Vector"
            width={50}
            height={50}
            className="inline-block"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <NavLink
          href="/"
          icon={<Home size={20} />}
          label="Overview"
          isActive={pathname === "#"}
        />
        <NavLink
          href="/deliveries"
          icon={<Truck size={20} />}
          label="Deliveries"
          isActive={pathname === "#"}
        />
        <NavLink
          href="/patients"
          icon={<Users size={20} />}
          label="Patients"
          isActive={pathname === "/patients"}
         
        />
        <NavLink
          href="/dispatch-riders"
          icon={<UserCircle size={20} />}
          label="Dispatch Riders"
          isActive={pathname === "#"}
        />
        <NavLink
          href="/admin"
          icon={<Settings size={20} />}
          label="Admin"
          isActive={pathname === "#"}
        />
      </div>

      <div className="flex items-center space-x-2 cursor-pointer">
        <Image
          src="/images/Ellipse 25.svg"
          alt={`${profile.name}'s profile`}
          width={50}
          height={50}
          className="rounded-full  shadow-md"
        />

        <span className="text-sm text-[#18131A] font-medium">
          {profile.name}
        </span>
        <svg
          className="w-4 h-4 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </nav>
  );
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon,
  label,
  isActive = false,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-1 px-2 py-1 rounded-md ${
        isActive ? "text-blue-500" : "text-gray-600 hover:text-gray-800"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
};

export default NavBar;
