'use client';

import { useState } from "react";
import Navbar from "./dashboard/components/Navbar";
import Sidebar from "./dashboard/components/Sidebar";

export default function MentorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen w-full bg-[#e2e8f0] overflow-x-hidden flex flex-col">
            {/* Navbar - Scrolls with content */}
            <div className="w-full flex-shrink-0">
                <Navbar onMenuClick={toggleSidebar} />
            </div>

            {/* Main content area with sidebar */}
            <div className="flex w-full flex-1">
                {/* Sidebar - Scrolls with content, extends to match content height */}
                <div className="flex-shrink-0 self-stretch">
                    <Sidebar isOpen={isSidebarOpen} />
                </div>

                {/* Main content */}
                <main className="flex-1 min-w-0 w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
