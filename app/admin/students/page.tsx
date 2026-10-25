"use client";

import React, { useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";

interface Student {
  id: string;
  name: string;
  email: string;
  division: "Junior" | "Senior";
  status: "Active" | "Inactive";
  completedAssignments: number;
  totalAssignments: number;
}

const INITIAL_STUDENTS: Student[] = [
  {
    id: "1",
    name: "Aimable Mugabo",
    email: "aimable.mugabo0@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "2",
    name: "Chantal Umutoni",
    email: "chantal.umutoni1@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "3",
    name: "Kevin Gasana",
    email: "kevin.gasana2@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "4",
    name: "Divine Habimana",
    email: "divine.habimana3@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "5",
    name: "Fabrice Ingabire",
    email: "fabrice.ingabire4@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "6",
    name: "Ange Uwase",
    email: "ange.uwase5@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "7",
    name: "Yves Byiringiro",
    email: "yves.byiringiro6@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "8",
    name: "Sandrine Murekatete",
    email: "sandrine.murekatete7@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "9",
    name: "Thierry Mutoni",
    email: "thierry.mutoni8@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "10",
    name: "Josiane Niyonsenga",
    email: "josiane.niyonsenga9@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "11",
    name: "Gilbert Nshimiyimana",
    email: "gilbert.nshimiyimana10@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
  {
    id: "12",
    name: "Esther Ishimwe",
    email: "esther.ishimwe11@students.rof.rw",
    division: "Junior",
    status: "Active",
    completedAssignments: 3,
    totalAssignments: 3,
  },
];

const FILTER_TABS = [
  { label: "All", value: "All" },
  { label: "Juniors", value: "Junior" },
  { label: "Seniors", value: "Senior" },
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

export default function StudentsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering logic
  const filteredStudents = INITIAL_STUDENTS.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "All") return true;

    if (activeFilter === "Junior" || activeFilter === "Senior") {
      return student.division === activeFilter;
    }

    if (activeFilter === "Active" || activeFilter === "Inactive") {
      return student.status === activeFilter;
    }

    return true;
  });

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Students</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          Academic scores are managed by mentors and are not editable here.
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

      {/* Table Container Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Student
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Email
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Division
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Status
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Assignment Activity
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/80">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => {
                  const progressPercentage = Math.min(
                    100,
                    Math.round(
                      (student.completedAssignments / student.totalAssignments) * 100
                    )
                  );

                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-50/60 transition-colors text-xs"
                    >
                      {/* Name */}
                      <td className="px-6 py-3.5 font-bold text-gray-800">
                        {student.name}
                      </td>

                      {/* Email */}
                      <td className="px-6 py-3.5 text-gray-500 font-medium">
                        {student.email}
                      </td>

                      {/* Division */}
                      <td className="px-6 py-3.5 text-gray-700 font-medium">
                        {student.division}
                      </td>

                      {/* Status Badge */}
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold ${
                            student.status === "Active"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>

                      {/* Assignment Activity Progress Bar */}
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-3 max-w-[180px]">
                          <div className="w-full bg-gray-200/80 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                              style={{ width: `${progressPercentage}%` }}
                            />
                          </div>
                          <span className="text-gray-500 font-medium shrink-0">
                            {student.completedAssignments}/{student.totalAssignments}
                          </span>
                        </div>
                      </td>

                      {/* Action */}
                      <td className="px-6 py-3.5 text-right">
                        <button
                          onClick={() => alert(`Actions for ${student.name}`)}
                          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-xs text-gray-400 font-medium"
                  >
                    No students found matching your criteria.
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
