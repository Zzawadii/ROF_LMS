"use client";

import { useState } from "react";
import OverviewTab from "./OverviewTab";
import BooksTab from "./BooksTab";
import PastPapersTab from "./PastPapersTab";

export default function CoursesContent() {
  const [activeTab, setActiveTab] = useState<"Overview" | "Books" | "Past Papers">("Past Papers");

  return (
    <div className="min-h-screen bg-[#E6EBF2] p-6 lg:p-10 font-sans text-slate-800">
      {/* Tabs Navigation */}
      <div className="flex items-center gap-6 border-b border-slate-300/60 mb-6 text-sm font-medium">
        {(["Overview", "Books", "Past Papers"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 transition-colors relative ${
              activeTab === tab
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 -mb-[2px]"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Books" && <BooksTab />}
      {activeTab === "Past Papers" && <PastPapersTab />}
    </div>
  );
}
