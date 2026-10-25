"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ReportItemProps {
  label: string;
  value: string | number;
  total?: number;
  hasProgressBar?: boolean;
}

const ReportItem: React.FC<ReportItemProps> = ({
  label,
  value,
  total,
  hasProgressBar,
}) => {
  const numericVal = typeof value === "number" ? value : parseInt(value, 10);
  const progressPct =
    hasProgressBar && total && !isNaN(numericVal)
      ? Math.min(100, Math.round((numericVal / total) * 100))
      : 0;

  return (
    <div className="py-3 border-b border-gray-100 last:border-0 text-xs">
      <div className="flex items-center justify-between">
        <span className="text-gray-500 font-medium">{label}</span>
        <div className="font-bold text-gray-900">
          {total !== undefined ? (
            <span>
              <span className="text-gray-900">{value}</span>
              <span className="text-gray-400 font-normal"> / {total}</span>
            </span>
          ) : (
            <span>{value}</span>
          )}
        </div>
      </div>
      {hasProgressBar && (
        <div className="w-full bg-gray-100 rounded-full h-1 mt-2.5 overflow-hidden">
          <div
            className="bg-indigo-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default function ReportsContent() {
  // Dropdown Filter States
  const [selectedCourse, setSelectedCourse] = useState("Number Theory");
  const [selectedDivision, setSelectedDivision] = useState("Senior");
  const [selectedAssignment, setSelectedAssignment] = useState(
    "Divisibility and Modular Arithmetic"
  );
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 30 days");

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Reports</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          Figures are based on the sample dataset in this prototype.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {/* Course Filter */}
        <div className="relative">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="appearance-none bg-white text-xs font-semibold text-gray-700 pl-4 pr-9 py-2 rounded-xl border border-gray-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer shadow-2xs"
          >
            <option>Number Theory</option>
            <option>Algebra</option>
            <option>Geometry</option>
            <option>Combinatorics</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Division Filter */}
        <div className="relative">
          <select
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className="appearance-none bg-white text-xs font-semibold text-gray-700 pl-4 pr-9 py-2 rounded-xl border border-gray-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer shadow-2xs"
          >
            <option>Senior</option>
            <option>Junior</option>
            <option>All Divisions</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Assignment Filter */}
        <div className="relative">
          <select
            value={selectedAssignment}
            onChange={(e) => setSelectedAssignment(e.target.value)}
            className="appearance-none bg-white text-xs font-semibold text-gray-700 pl-4 pr-9 py-2 rounded-xl border border-gray-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer shadow-2xs"
          >
            <option>Divisibility and Modular Arithmetic</option>
            <option>Quadratic Equations Practice</option>
            <option>Euclidean Geometry Problems</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Timeframe Filter */}
        <div className="relative">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="appearance-none bg-white text-xs font-semibold text-gray-700 pl-4 pr-9 py-2 rounded-xl border border-gray-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer shadow-2xs"
          >
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>All time</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Grid Container for Report Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Activity Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100/80">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Student Activity</h2>
          <div className="divide-y divide-gray-100">
            <ReportItem
              label="Active students"
              value={38}
              total={40}
              hasProgressBar
            />
            <ReportItem label="Assignment submissions" value={38} />
            <ReportItem label="Resource activity (views)" value={155} />
          </div>
        </div>

        {/* Assignment Performance Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100/80">
          <h2 className="text-sm font-bold text-gray-900 mb-4">
            Assignment Performance
          </h2>
          <div className="divide-y divide-gray-100">
            <ReportItem label="Submission rate" value="95%" />
            <ReportItem
              label="Review completion"
              value={38}
              total={38}
              hasProgressBar
            />
            <ReportItem label="Average score" value="77%" />
          </div>
        </div>

        {/* Mentor Review Activity Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100/80">
          <h2 className="text-sm font-bold text-gray-900 mb-4">
            Mentor Review Activity
          </h2>
          <div className="divide-y divide-gray-100">
            <ReportItem label="Assigned submissions" value={38} />
            <ReportItem
              label="Completed reviews"
              value={38}
              total={38}
              hasProgressBar
            />
            <ReportItem label="Pending reviews" value={0} />
          </div>
        </div>

        {/* Division Overview Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100/80">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Division Overview</h2>
          <div className="divide-y divide-gray-100">
            <ReportItem
              label="Junior participation"
              value={0}
              total={50}
              hasProgressBar
            />
            <ReportItem
              label="Senior participation"
              value={38}
              total={40}
              hasProgressBar
            />
          </div>
        </div>
      </div>
    </main>
  );
}
