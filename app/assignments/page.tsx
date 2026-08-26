'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, ArrowUpDown, Clock } from 'lucide-react';

interface Assignment {
  id: string;
  name: string;
  course: string;
  subCategory?: string;
  deadline: string;
  status: 'Needs Revision' | 'Completed' | 'In Review' | 'Submitted';
  filterCategory: 'In Progress' | 'Submitted' | 'Reviewed';
}

const assignments: Assignment[] = [
  {
    id: '1',
    name: 'Advanced Calcus Problem Set...',
    course: 'Module 4.2: Derivatives & Integrals,',
    subCategory: 'Applied Mathematics',
    deadline: 'July 25,2026',
    status: 'Needs Revision',
    filterCategory: 'In Progress',
  },
  {
    id: '2',
    name: 'Number Theory:Prime Distribu...',
    course: 'Module 2.1: Analytic Number Theory',
    subCategory: 'Pure Mathematics',
    deadline: 'July 25,2026',
    status: 'Needs Revision',
    filterCategory: 'In Progress',
  },
  {
    id: '3',
    name: 'Combinatorics & Graph Theory....',
    course: 'Module 3: Discrete Mathematics',
    subCategory: 'Theoretical Science',
    deadline: 'July 25,2026',
    status: 'Completed',
    filterCategory: 'Reviewed',
  },
  {
    id: '4',
    name: 'Linear Algebra: Vector Spaces',
    course: 'Module 1: Fundamental Structures',
    subCategory: 'Algebraic Track',
    deadline: 'July 25,2026',
    status: 'Completed',
    filterCategory: 'Reviewed',
  },
  {
    id: '5',
    name: 'Probability Theory Mock Exam',
    course: 'Module 6: Statistical Analysis',
    subCategory: 'Stochastic Processes',
    deadline: 'July 25,2026',
    status: 'In Review',
    filterCategory: 'In Progress',
  },
  {
    id: '6',
    name: 'Geometry & Topology Explorati..',
    course: 'Module 3.1: Euclidean Spaces',
    subCategory: 'Visual Mathematics',
    deadline: 'July 25,2026',
    status: 'Completed',
    filterCategory: 'Reviewed',
  },
  {
    id: '7',
    name: 'Real Analysis: Sequence Limits',
    course: 'Module 2.3: Convergence',
    subCategory: 'Fundamental Analysis',
    deadline: 'July 25,2026',
    status: 'Submitted',
    filterCategory: 'Submitted',
  },
];

const filterOptions = ['All', 'In Progress', 'Submitted', 'Reviewed'] as const;
type FilterType = (typeof filterOptions)[number];

const getStatusBadge = (status: Assignment['status']) => {
  switch (status) {
    case 'Needs Revision':
      return 'bg-red-100 text-red-500 hover:bg-red-200';
    case 'Completed':
      return 'bg-blue-100 text-blue-600 hover:bg-blue-200';
    case 'In Review':
      return 'bg-orange-100 text-orange-500 hover:bg-orange-200';
    case 'Submitted':
      return 'bg-green-100 text-green-600 hover:bg-green-200';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export default function AssignmentsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAssignments = assignments.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.filterCategory === selectedFilter;
  });

  return (
    <main className="p-8 max-w-7xl mx-auto font-sans text-gray-800">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Tasks Overview
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          View tasks from all courses and track their status
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full pl-9 pr-12 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 border border-gray-200 rounded px-1.5 py-0.5 text-[10px] text-gray-400 font-mono">
            ⌘ K
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          {/* Filters Dropdown Container */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-gray-600" />
              Filters
            </button>

            {/* Dropdown Menu */}
            {isFilterOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-32 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1.5 text-center overflow-hidden">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedFilter(option);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full py-1.5 text-xs font-bold transition-colors ${selectedFilter === option
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-800 hover:bg-gray-50'
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-600" />
            Sort By
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="border border-blue-200/80 rounded-2xl overflow-hidden bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#DCE3F6] text-gray-700 text-sm font-bold">
                <th className="py-4 px-6">Assignment Name</th>
                <th className="py-4 px-6">Course/Module</th>
                <th className="py-4 px-6">Suggested Deadline</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredAssignments.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-gray-900 text-xs max-w-xs truncate">
                    {item.name}
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-xs">
                      {item.course}
                    </div>
                    {item.subCategory && (
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        {item.subCategory}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-6 text-xs font-bold text-gray-800">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500 stroke-[1.5]" />
                      <span>{item.deadline}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold cursor-pointer transition ${getStatusBadge(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={`/assignments/${item.id}`}
                      className="text-xs font-bold text-gray-600 hover:text-gray-900 transition"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}