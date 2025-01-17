// src/components/NavBar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Truck, Users, UserCircle, Settings } from 'lucide-react';

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
    imageUrl: "/api/placeholder/32/32" 
  } 
}) => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-green-600">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </Link>

        <div className="flex items-center space-x-6">
          <NavLink 
            href="/" 
            icon={<Home size={20} />} 
            label="Overview" 
            isActive={pathname === '/'} 
          />
          <NavLink 
            href="/deliveries" 
            icon={<Truck size={20} />} 
            label="Deliveries" 
            isActive={pathname === '/deliveries'} 
          />
          <NavLink 
            href="/patients" 
            icon={<Users size={20} />} 
            label="Patients" 
            isActive={pathname === '/patients'} 
          />
          <NavLink 
            href="/dispatch-riders" 
            icon={<UserCircle size={20} />} 
            label="Dispatch Riders" 
            isActive={pathname === '/dispatch-riders'} 
          />
          <NavLink 
            href="/admin" 
            icon={<Settings size={20} />} 
            label="Admin" 
            isActive={pathname === '/admin'} 
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <img 
          src={profile.imageUrl}
          alt={`${profile.name}'s profile`}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm text-gray-700">{profile.name}</span>
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
  isActive = false 
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-1 px-2 py-1 rounded-md ${
        isActive 
          ? 'text-blue-500' 
          : 'text-gray-600 hover:text-gray-800'
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
};

export default NavBar;
