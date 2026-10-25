"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

// User Data Type Definition
interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Mentor" | "Student";
  division: "Junior" | "Senior" | "—";
  status: "Active" | "Pending" | "Inactive";
}

const FILTER_TABS = [
  { label: "All", value: "All" },
  { label: "Students", value: "Student" },
  { label: "Mentors", value: "Mentor" },
  { label: "Admins", value: "Admin" },
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

interface UsersTableClientProps {
  initialUsers: User[];
}

export default function UsersTableClient({ initialUsers }: UsersTableClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering Logic
  const filteredUsers = initialUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "All") return true;

    if (["Student", "Mentor", "Admin"].includes(activeFilter)) {
      return user.role === activeFilter;
    }

    if (["Active", "Pending", "Inactive"].includes(activeFilter)) {
      return user.status === activeFilter;
    }

    return true;
  });

  return (
    <>
      {/* Controls Bar: Search & Pill Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px] max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
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
                  Name
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Email
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Role
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Division
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Status
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/70">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50/60 transition-colors text-xs"
                  >
                    {/* Name */}
                    <td className="px-6 py-3.5 font-semibold text-gray-800">
                      {user.name}
                    </td>

                    {/* Email */}
                    <td className="px-6 py-3.5 text-gray-500 font-medium">
                      {user.email}
                    </td>

                    {/* Role */}
                    <td className="px-6 py-3.5 text-gray-600 font-medium">
                      {user.role}
                    </td>

                    {/* Division */}
                    <td className="px-6 py-3.5 text-gray-600 font-medium">
                      {user.division}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : user.status === "Pending"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-3.5">
                      <button
                        onClick={() => alert(`Viewing user ${user.name}`)}
                        className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-xs text-gray-400 font-medium"
                  >
                    No users found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
