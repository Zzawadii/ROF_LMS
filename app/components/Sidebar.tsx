'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Trophy,
  BookOpen,
  FileText,
  HelpCircle,
  Settings,
  LogOut
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  // Function to check if link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <aside
      className={`${
        isOpen ? 'w-64 px-4' : 'w-20 px-3'
      } min-h-[calc(100vh-5rem)] bg-[#001E4E] text-slate-300 flex flex-col justify-between py-6 select-none sticky top-20 overflow-hidden transition-all duration-300 ease-in-out`}
    >
      {/* TOP NAVIGATION LINKS */}
      <div className="flex flex-col gap-3">
        {/* Title Header */}
        <div className="text-white font-bold text-center text-lg tracking-wide pb-6 border-b border-blue-900/40 whitespace-nowrap">
          {isOpen ? "ROF LMS" : "ROF"}
        </div>

        {/* Dashboard Link */}
        <Link
          href="/"
          title={!isOpen ? "Dashboard" : undefined}
          className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${
            isOpen ? "px-4" : "justify-center px-0"
          } ${
            isActive("/") && pathname === "/"
              ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <LayoutGrid className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Dashboard</span>}
        </Link>

        {/* Leaderboard Link */}
        <Link
          href="/leaderboard"
          title={!isOpen ? "Leaderboard" : undefined}
          className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${
            isOpen ? "px-4" : "justify-center px-0"
          } ${
            isActive("/leaderboard")
              ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <Trophy className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Leaderboard</span>}
        </Link>

        {/* Courses Link */}
        <Link
          href="/courses"
          title={!isOpen ? "Courses" : undefined}
          className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${
            isOpen ? "px-4" : "justify-center px-0"
          } ${
            isActive("/courses")
              ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <BookOpen className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Courses</span>}
        </Link>

        {/* Assignments Link */}
        <Link
          href="/assignments"
          title={!isOpen ? "Assignments" : undefined}
          className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${
            isOpen ? "px-4" : "justify-center px-0"
          } ${
            isActive("/assignments")
              ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <FileText className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Assignments</span>}
        </Link>
      </div>

      {/* BOTTOM UTILITY LINKS */}
      <div className="flex flex-col gap-2 pt-6 border-t border-blue-900/40">
        {/* Help Button */}
        <button
          title={!isOpen ? "Help" : undefined}
          className={`flex items-center gap-3 w-full py-2.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-sm ${
            isOpen ? "px-4" : "justify-center px-0"
          }`}
        >
          <HelpCircle className="h-4 w-4 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Help</span>}
        </button>

        {/* Settings Button */}
        <button
          title={!isOpen ? "Settings" : undefined}
          className={`flex items-center gap-3 w-full py-2.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-sm ${
            isOpen ? "px-4" : "justify-center px-0"
          }`}
        >
          <Settings className="h-4 w-4 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Settings</span>}
        </button>

        {/* Sign Out Button */}
        <button
          title={!isOpen ? "Sign Out" : undefined}
          className={`flex items-center gap-3 w-full py-2.5 rounded-lg hover:bg-red-500/10 text-red-400 hover:text-red-500 transition-all text-sm font-medium mt-2 ${
            isOpen ? "px-4" : "justify-center px-0"
          }`}
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}