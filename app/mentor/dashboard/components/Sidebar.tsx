'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutGrid,
    BookOpen,
    FileText,
    Video,
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
        if (path === "/mentor/dashboard") {
            return pathname === "/mentor/dashboard";
        }
        return pathname.startsWith(path);
    };

    return (
        <aside
            className={`${isOpen ? 'w-64 px-4' : 'w-20 px-3'
                } h-full bg-[#001E4E] text-slate-300 flex flex-col justify-between py-6 select-none transition-all duration-300 ease-in-out`}
        >
            {/* TOP NAVIGATION LINKS */}
            <div className="flex flex-col gap-3">
                {/* Title Header */}
                <div className="text-white font-bold text-center text-lg tracking-wide pb-6 border-b border-blue-900/40 whitespace-nowrap">
                    {isOpen ? "ROF LMS" : "ROF"}
                </div>

                {/* Menu Link */}
                <Link
                    href="/mentor/dashboard"
                    title="Menu"
                    className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
                        } ${isActive("/mentor/dashboard")
                            ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
                            : "hover:bg-white/5 text-slate-400 hover:text-white"
                        }`}
                >
                    <LayoutGrid className="h-5 w-5 flex-shrink-0" />
                    {isOpen && <span className="whitespace-nowrap">Menu</span>}
                </Link>

                {/* Courses Link */}
                <Link
                    href="/mentor/courses"
                    title="Courses"
                    className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
                        } ${isActive("/mentor/courses")
                            ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
                            : "hover:bg-white/5 text-slate-400 hover:text-white"
                        }`}
                >
                    <BookOpen className="h-5 w-5 flex-shrink-0" />
                    {isOpen && <span className="whitespace-nowrap">Courses</span>}
                </Link>

                {/* Assignments Link */}
                <Link
                    href="/mentor/assignments"
                    title="Assignments"
                    className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
                        } ${isActive("/mentor/assignments")
                            ? "bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-md shadow-indigo-950/50"
                            : "hover:bg-white/5 text-slate-400 hover:text-white"
                        }`}
                >
                    <FileText className="h-5 w-5 flex-shrink-0" />
                    {isOpen && <span className="whitespace-nowrap">Assignments</span>}
                </Link>

                {/* Live Sessions Link */}
                <Link
                    href="/mentor/live-sessions"
                    title="Live Sessions"
                    className={`flex items-center gap-3 w-full py-3 rounded-xl font-medium transition-all ${isOpen ? 'px-4' : 'justify-center px-0'
                        } ${isActive("/mentor/live-sessions")
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
