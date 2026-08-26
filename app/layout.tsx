'use client';

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col min-h-screen bg-[#e2e8f0]">
          {/* Top Navbar */}
          <Navbar onMenuClick={toggleSidebar} />

          <div className="flex flex-1 min-h-0">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} />

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
