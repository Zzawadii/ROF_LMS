import React from "react";
import { Menu, Bell, User } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className="h-20 w-full flex items-center justify-between px-6 border-blue-200">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-5">
        {/* Make icon clickable with cursor-pointer and onClick */}
        <button 
          onClick={onMenuClick}
          className="p-1 hover:bg-gray-200/50 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-6 w-6 text-gray-700 cursor-pointer" />
        </button>

        {/* Logo + Text */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Rwanda Olympiad Foundation"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center">
            <div className="text-3xl font-extrabold tracking-tight text-gray-900 leading-none pr-3">
              ROF
            </div>
            <div className="h-9 w-px bg-gray-400" />
            <div className="text-xs font-bold tracking-wide text-gray-800 uppercase leading-tight pl-3">
              <div>Rwanda</div>
              <div>Olympiad</div>
              <div>Foundation</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <Bell className="h-5 w-5 text-gray-700 cursor-pointer" />

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>

          <div className="flex flex-col">
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