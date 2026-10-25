"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

type CategoryType =
  | "Results"
  | "Assignments"
  | "Access"
  | "Courses"
  | "Users"
  | "System";

interface AuditLogEntry {
  id: string;
  when: string;
  actor: string;
  role: string;
  action: string;
  target: string;
  category: CategoryType;
}

const INITIAL_LOGS: AuditLogEntry[] = [
  {
    id: "1",
    when: "Oct 8, 2026 · 19:42",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Published results",
    target: "Euclidean Geometry Problems",
    category: "Results",
  },
  {
    id: "2",
    when: "Oct 8, 2026 · 18:15",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Approved reviews for results",
    target: "Euclidean Geometry Problems",
    category: "Results",
  },
  {
    id: "3",
    when: "Oct 7, 2026 · 16:05",
    actor: "Alice Mukamana",
    role: "Admin",
    action: "Created assignment",
    target: "Counting Principles",
    category: "Assignments",
  },
  {
    id: "4",
    when: "Oct 6, 2026 · 09:30",
    actor: "Alice Mukamana",
    role: "Admin",
    action: "Distributed submissions to mentors",
    target: "Divisibility and Modular Arithmetic",
    category: "Assignments",
  },
  {
    id: "5",
    when: "Oct 5, 2026 · 14:22",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Opened assignment for submissions",
    target: "Divisibility and Modular Arithmetic",
    category: "Assignments",
  },
  {
    id: "6",
    when: "Oct 3, 2026 · 11:48",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Approved mentor access request",
    target: "Betty Uwera",
    category: "Access",
  },
  {
    id: "7",
    when: "Oct 2, 2026 · 17:10",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Updated division settings",
    target: "Senior division",
    category: "Courses",
  },
  {
    id: "8",
    when: "Oct 1, 2026 · 10:02",
    actor: "Alice Mukamana",
    role: "Admin",
    action: "Suspended student account",
    target: "Kevin Bizimana",
    category: "Users",
  },
  {
    id: "9",
    when: "Sep 30, 2026 · 08:55",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Closed submissions",
    target: "Quadratic Equations Practice",
    category: "Assignments",
  },
  {
    id: "10",
    when: "Sep 29, 2026 · 15:41",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Published results",
    target: "Geometry Problems",
    category: "Results",
  },
  {
    id: "11",
    when: "Sep 28, 2026 · 12:20",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Approved mentor access request",
    target: "Innocent Rwema",
    category: "Access",
  },
  {
    id: "12",
    when: "Sep 27, 2026 · 09:14",
    actor: "Alice Mukamana",
    role: "Admin",
    action: "Invited new mentor",
    target: "Josie Murekatete",
    category: "Users",
  },
  {
    id: "13",
    when: "Sep 26, 2026 · 16:33",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Updated course description",
    target: "Combinatorics",
    category: "Courses",
  },
  {
    id: "14",
    when: "Sep 25, 2026 · 13:07",
    actor: "ROF Administrator",
    role: "Admin",
    action: "Changed academic term",
    target: "Term 3 2026",
    category: "System",
  },
];

const FILTER_TABS = [
  { label: "All", value: "All" },
  { label: "Results", value: "Results" },
  { label: "Assignments", value: "Assignments" },
  { label: "Access", value: "Access" },
  { label: "Courses", value: "Courses" },
  { label: "Users", value: "Users" },
  { label: "System", value: "System" },
];

export default function AuditLogTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering Logic
  const filteredLogs = INITIAL_LOGS.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.actor.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "All") return true;

    return log.category === activeFilter;
  });

  // Helper function for category badge styling
  const getCategoryBadgeStyles = (category: CategoryType) => {
    switch (category) {
      case "Results":
        return "bg-emerald-50 text-emerald-700";
      case "Assignments":
        return "bg-indigo-50 text-indigo-700";
      case "Access":
        return "bg-amber-50 text-amber-700";
      case "Courses":
        return "bg-rose-50 text-rose-600";
      case "Users":
        return "bg-sky-50 text-sky-700";
      case "System":
        return "bg-slate-100 text-slate-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Audit Log
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          A chronological record of key administrative actions across the platform.
        </p>
      </div>

      {/* Controls Bar: Search & Pill Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px] max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search actions or targets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white text-xs pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-400 shadow-2xs"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Table Container Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  When
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Actor
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Role
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Action
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Target
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/80">
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="hover:bg-gray-50/60 transition-colors text-xs"
                  >
                    {/* Timestamp */}
                    <td className="px-6 py-3.5 text-gray-400 font-medium whitespace-nowrap">
                      {log.when}
                    </td>

                    {/* Actor */}
                    <td className="px-6 py-3.5 font-bold text-gray-800 whitespace-nowrap">
                      {log.actor}
                    </td>

                    {/* Role */}
                    <td className="px-6 py-3.5 text-gray-500 font-medium">
                      {log.role}
                    </td>

                    {/* Action Description */}
                    <td className="px-6 py-3.5 text-gray-700 font-medium">
                      {log.action}
                    </td>

                    {/* Target */}
                    <td className="px-6 py-3.5 text-gray-600 font-medium">
                      {log.target}
                    </td>

                    {/* Category Badge */}
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold ${getCategoryBadgeStyles(
                          log.category
                        )}`}
                      >
                        {log.category}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-xs text-gray-400 font-medium"
                  >
                    No audit log entries found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
