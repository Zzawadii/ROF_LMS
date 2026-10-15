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
        <div className="flex flex-col h-screen bg-[#e2e8f0] overflow-hidden">
            {/* Navbar - Fixed at top */}
            <div className="flex-shrink-0 relative z-30">
                <Navbar onMenuClick={toggleSidebar} />
            </div>

            {/* Main content area with sidebar */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar - Always visible, expands/collapses */}
                <Sidebar isOpen={isSidebarOpen} />

                {/* Main content - Scrollable */}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
