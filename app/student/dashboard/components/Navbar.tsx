'use client';

import { Menu, Bell, User } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className="h-20 w-full flex items-center justify-between px-4 md:px-6 border-blue-200">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Hamburger Menu Button */}
        <button
          onClick={onMenuClick}
          className="p-1 hover:bg-gray-200/50 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-6 w-6 text-gray-700 cursor-pointer" />
        </button>

        {/* Logo + Text */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Rwanda Olympiad Foundation"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center">
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 leading-none pr-2 md:pr-3">
              ROF
            </div>
            <div className="h-7 md:h-9 w-px bg-gray-400" />
            <div className="text-[10px] md:text-xs font-bold tracking-wide text-gray-800 uppercase leading-tight pl-2 md:pl-3">
              <div>Rwanda</div>
              <div>Olympiad</div>
              <div>Foundation</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-6">
        <Bell className="h-5 w-5 text-gray-700 cursor-pointer hidden sm:block" />

        <div className="flex items-center gap-2 md:gap-3">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <User className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </div>

          <div className="hidden lg:flex flex-col">
            <span className="text-sm font-semibold text-gray-800">
              Hope Zawadi
            </span>
            <span className="text-xs text-gray-500">
              hopevzawadii@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}