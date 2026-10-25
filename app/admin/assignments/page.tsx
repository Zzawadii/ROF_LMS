"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

interface Assignment {
  id: string;
  assignment: string;
  course: string;
  division: "Junior" | "Senior";
  dueDate: string;
  submissions: string;
  reviewedCount: number;
  totalToReview: number;
  status: "Reviewing" | "Results Ready" | "Results Published" | "Open" | "Draft";
}

const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: "1",
    assignment: "Quadratic Equations Practice",
    course: "Algebra",
    division: "Junior",
    dueDate: "30 September 2026",
    submissions: "42 / 50 submitted",
    reviewedCount: 34,
    totalToReview: 42,
    status: "Reviewing",
  },
  {
    id: "2",
    assignment: "Euclidean Geometry Problems",
    course: "Geometry",
    division: "Senior",
    dueDate: "22 September 2026",
    submissions: "36 / 40 submitted",
    reviewedCount: 36,
    totalToReview: 36,
    status: "Results Ready",
  },
  {
    id: "3",
    assignment: "Divisibility and Modular Arithmetic",
    course: "Number Theory",
    division: "Senior",
    dueDate: "10 September 2026",
    submissions: "38 / 40 submitted",
    reviewedCount: 38,
    totalToReview: 38,
    status: "Results Published",
  },
  {
    id: "4",
    assignment: "Counting Principles",
    course: "Combinatorics",
    division: "Junior",
    dueDate: "12 October 2026",
    submissions: "18 / 50 submitted",
    reviewedCount: 0,
    totalToReview: 18,
    status: "Open",
  },
  {
    id: "5",
    assignment: "Algebra Practice",
    course: "Algebra",
    division: "Junior",
    dueDate: "18 September 2026",
    submissions: "42 / 50 submitted",
    reviewedCount: 42,
    totalToReview: 42,
    status: "Results Ready",
  },
  {
    id: "6",
    assignment: "Similar Triangles Review",
    course: "Geometry",
    division: "Junior",
    dueDate: "20 October 2026",
    submissions: "—",
    reviewedCount: 0,
    totalToReview: 0,
    status: "Draft",
  },
];

const FILTER_TABS = [
  { label: "All", value: "All" },
  { label: "Draft", value: "Draft" },
  { label: "Published", value: "Published" },
  { label: "Open", value: "Open" },
  { label: "Closed", value: "Closed" },
  { label: "Reviewing", value: "Reviewing" },
  { label: "Results Ready", value: "Results Ready" },
  { label: "Results Published", value: "Results Published" },
];

export default function AssignmentsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering Logic
  const filteredAssignments = INITIAL_ASSIGNMENTS.filter((item) => {
    const matchesSearch =
      item.assignment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "All") return true;

    if (activeFilter === "Published") {
      return ["Reviewing", "Results Ready", "Results Published", "Open", "Closed"].includes(item.status);
    }

    return item.status === activeFilter;
  });

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Assignments & Submissions
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          Create official assignments, publish them, distribute submissions to mentors and monitor reviews.
        </p>
      </div>

      {/* Controls Bar: Search & Pill Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px] max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
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
                  Assignment
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Course
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Division
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Due Date
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Submissions
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Review Progress
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/80">
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((item) => {
                  const hasProgress = item.totalToReview > 0;
                  const progressPct = hasProgress
                    ? Math.round((item.reviewedCount / item.totalToReview) * 100)
                    : 0;

                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50/60 transition-colors text-xs"
                    >
                      {/* Assignment Name */}
                      <td className="px-6 py-4 font-bold text-gray-900">
                        {item.assignment}
                      </td>

                      {/* Course */}
                      <td className="px-6 py-4 text-gray-600 font-medium">
                        {item.course}
                      </td>

                      {/* Division */}
                      <td className="px-6 py-4 text-gray-600 font-medium">
                        {item.division}
                      </td>

                      {/* Due Date */}
                      <td className="px-6 py-4 text-gray-600 font-medium">
                        {item.dueDate}
                      </td>

                      {/* Submissions */}
                      <td className="px-6 py-4 text-gray-600 font-medium">
                        {item.submissions}
                      </td>

                      {/* Review Progress */}
                      <td className="px-6 py-4">
                        {hasProgress ? (
                          <div className="space-y-1.5 max-w-[160px]">
                            <div className="text-gray-500 font-medium">
                              {item.reviewedCount} / {item.totalToReview} reviewed
                            </div>
                            <div className="w-full bg-gray-200/80 rounded-full h-1.5 overflow-hidden">
                              <div
                                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                                style={{ width: `${progressPct}%` }}
                              />
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-400 font-medium">—</span>
                        )}
                      </td>

                      {/* Status Badge */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold ${
                            item.status === "Reviewing"
                              ? "bg-amber-50 text-amber-700"
                              : item.status === "Results Ready"
                              ? "bg-indigo-50 text-indigo-700"
                              : item.status === "Results Published"
                              ? "bg-emerald-50 text-emerald-700"
                              : item.status === "Open"
                              ? "bg-sky-50 text-sky-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-xs text-gray-400 font-medium"
                  >
                    No assignments found matching your criteria.
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
