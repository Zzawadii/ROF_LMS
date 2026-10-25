"use client";

import React, { useState } from "react";
import { Search, AlertCircle, MoreHorizontal } from "lucide-react";

interface Mentor {
  id: string;
  name: string;
  email: string;
  division: "Junior" | "Senior" | "Not assigned";
  courses: string;
  status: "Active" | "Inactive";
  needsAttention?: boolean;
}

const INITIAL_MENTORS: Mentor[] = [
  {
    id: "1",
    name: "Jean Claude Habimana",
    email: "jeanclaude@rof.rw",
    division: "Junior",
    courses: "Algebra, Geometry",
    status: "Active",
  },
  {
    id: "2",
    name: "Aline Uwase",
    email: "aline@rof.rw",
    division: "Junior",
    courses: "Algebra, Combinatorics",
    status: "Active",
  },
  {
    id: "3",
    name: "Eric Niyonzima",
    email: "eric@rof.rw",
    division: "Junior",
    courses: "Algebra, Number Theory, Combinatorics",
    status: "Active",
  },
  {
    id: "4",
    name: "Claudine Mukamana",
    email: "claudine@rof.rw",
    division: "Junior",
    courses: "Algebra",
    status: "Active",
  },
  {
    id: "5",
    name: "Diane Ingabire",
    email: "diane@rof.rw",
    division: "Senior",
    courses: "Geometry, Number Theory",
    status: "Active",
  },
  {
    id: "6",
    name: "Patrick Nkurunziza",
    email: "patrick@rof.rw",
    division: "Senior",
    courses: "Geometry, Number Theory, Combinatorics",
    status: "Active",
  },
  {
    id: "7",
    name: "Olivier Mugisha",
    email: "olivier@rof.rw",
    division: "Senior",
    courses: "No access",
    status: "Active",
    needsAttention: true,
  },
  {
    id: "8",
    name: "Grace Uwimana",
    email: "grace@rof.rw",
    division: "Junior",
    courses: "Geometry",
    status: "Inactive",
    needsAttention: true,
  },
  {
    id: "9",
    name: "Samuel Hakizimana",
    email: "samuel@rof.rw",
    division: "Not assigned",
    courses: "No access",
    status: "Active",
    needsAttention: true,
  },
];

const FILTER_TABS = [
  { label: "All", value: "All" },
  { label: "Junior", value: "Junior" },
  { label: "Senior", value: "Senior" },
  { label: "Needs attention", value: "Needs attention" },
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

export default function MentorsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering Logic
  const filteredMentors = INITIAL_MENTORS.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.courses.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "All") return true;

    if (activeFilter === "Junior" || activeFilter === "Senior") {
      return mentor.division === activeFilter;
    }

    if (activeFilter === "Needs attention") {
      return mentor.needsAttention === true;
    }

    if (activeFilter === "Active" || activeFilter === "Inactive") {
      return mentor.status === activeFilter;
    }

    return true;
  });

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Mentors</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          Mentors review submissions, give scores and formal feedback.
        </p>
      </div>

      {/* Controls Bar: Search & Pill Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px] max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search mentor..."
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
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
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

      {/* Table Card Container */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Mentor
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Email
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Division
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Courses
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Status
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/80">
              {filteredMentors.length > 0 ? (
                filteredMentors.map((mentor) => (
                  <tr
                    key={mentor.id}
                    className="hover:bg-gray-50/60 transition-colors text-xs"
                  >
                    {/* Mentor Name + Warning Icon */}
                    <td className="px-6 py-3.5 font-bold text-gray-800">
                      <div className="flex items-center gap-1.5">
                        <span>{mentor.name}</span>
                        {mentor.needsAttention && (
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500 fill-amber-100 shrink-0" />
                        )}
                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-3.5 text-gray-500 font-medium">
                      {mentor.email}
                    </td>

                    {/* Division */}
                    <td className="px-6 py-3.5 font-medium">
                      <span
                        className={
                          mentor.division === "Not assigned"
                            ? "text-amber-600 font-semibold"
                            : "text-gray-700"
                        }
                      >
                        {mentor.division}
                      </span>
                    </td>

                    {/* Courses */}
                    <td className="px-6 py-3.5 font-medium">
                      <span
                        className={
                          mentor.courses === "No access"
                            ? "text-amber-600 font-semibold"
                            : "text-gray-700"
                        }
                      >
                        {mentor.courses}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold ${
                          mentor.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {mentor.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => alert(`Course access for ${mentor.name}`)}
                          className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-200 transition-colors"
                        >
                          Course access
                        </button>
                        <button
                          onClick={() => alert(`More options for ${mentor.name}`)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-xs text-gray-400 font-medium"
                  >
                    No mentors found matching your criteria.
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
