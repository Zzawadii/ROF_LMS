'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Trophy,
  BookOpen,
  FileText,
  Video,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Award
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();
  const [isAssignmentsOpen, setIsAssignmentsOpen] = useState(pathname.startsWith("/student/assignments"));

  // Function to check if link is active
  const isActive = (path: string) => {
    if (path === "/student/dashboard") {
      return pathname === "/student/dashboard";
    }
    return pathname.startsWith(path);
  };

  return (
    <aside
      className={`${isOpen ? 'w-64 px-4' : 'w-20 px-3'
        } h-full bg-[#001E4E] text-slate-300 flex flex-col justify-between py-6 select-none overflow-y-auto transition-all duration-300 ease-in-out`}
    >
      {/* TOP NAVIGATION LINKS */}
      <div className="flex flex-col gap-3">
        {/* Title Header */}
        <div className="text-white font-bold text-center text-lg tracking-wide pb-6 border-b border-blue-900/40 whitespace-nowrap">
          {isOpen ? "ROF LMS" : "ROF"}
        </div>

        {/* Menu Link */}
        <Link
          href="/student/dashboard"
          title="Dashboard"
          className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
            } ${isActive("/student/dashboard")
              ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
            }`}
        >
          <LayoutGrid className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Menu</span>}
        </Link>

        {/* Leaderboard Link */}
        <Link
          href="/student/leaderboard"
          title="Leaderboard"
          className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
            } ${isActive("/student/leaderboard")
              ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
            }`}
        >
          <Trophy className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Leaderboard</span>}
        </Link>

        {/* Courses Link */}
        <Link
          href="/student/courses"
          title="Courses"
          className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
            } ${isActive("/student/courses")
              ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
            }`}
        >
          <BookOpen className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Courses</span>}
        </Link>

        {/* Assignments Section (Collapsible) */}
        <div>
          {/* Assignments Header - Clickable to toggle */}
          <button
            onClick={() => setIsAssignmentsOpen(!isAssignmentsOpen)}
            title="Assignments"
            className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
              } ${isActive("/student/assignments")
                ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
                : "hover:bg-white/5 text-slate-400 hover:text-white"
              }`}
          >
            <FileText className="h-5 w-5 flex-shrink-0" />
            {isOpen && (
              <>
                <span className="whitespace-nowrap flex-1 text-left">Assignments</span>
                {isAssignmentsOpen ? (
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 flex-shrink-0" />
                )}
              </>
            )}
          </button>

          {/* Nested Items - Only show when expanded and sidebar is open */}
          {isAssignmentsOpen && isOpen && (
            <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-900/40 pl-4">
              <Link
                href="/student/assignments"
                className={`flex items-center gap-3 w-full py-2 px-3 rounded-lg font-medium text-sm transition-all ${pathname === "/student/assignments"
                    ? "bg-blue-600/20 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <span className="whitespace-nowrap">All Assignments</span>
              </Link>
              <Link
                href="/student/assignments/results"
                className={`flex items-center gap-3 w-full py-2 px-3 rounded-lg font-medium text-sm transition-all ${pathname === "/student/assignments/results"
                    ? "bg-blue-600/20 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <span className="whitespace-nowrap">Results</span>
              </Link>
            </div>
          )}
        </div>

        {/* Live Sessions Link */}
        <Link
          href="/student/live-sessions"
          title="Live Sessions"
          className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
            } ${isActive("/student/live-sessions")
              ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
            }`}
        >
          <Video className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Live Sessions</span>}
        </Link>
      </div>

      {/* BOTTOM UTILITY LINKS */}
      <div className="flex flex-col gap-2 pt-6 border-t border-blue-900/40">
        {/* Help Button */}
        <button
          title="Help"
          className={`flex items-center gap-3 w-full py-2.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-sm ${isOpen ? 'px-4' : 'justify-center px-0'
            }`}
        >
          <HelpCircle className="h-4 w-4 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Help</span>}
        </button>

        {/* Settings Button */}
        <button
          title="Settings"
          className={`flex items-center gap-3 w-full py-2.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-sm ${isOpen ? 'px-4' : 'justify-center px-0'
            }`}
        >
          <Settings className="h-4 w-4 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Settings</span>}
        </button>

        {/* Sign Out Button */}
        <button
          title="Sign Out"
          className={`flex items-center gap-3 w-full py-2.5 rounded-lg hover:bg-red-500/10 text-red-400 hover:text-red-500 transition-all text-sm font-medium mt-2 ${isOpen ? 'px-4' : 'justify-center px-0'
            }`}
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {isOpen && <span className="whitespace-nowrap">Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}