"use client";

import React, { useState } from "react";
import { 
  Clock, 
  Filter, 
  ArrowUpDown, 
  FileText, 
  MessageSquare, 
  ChevronDown 
} from "lucide-react";

interface AssignmentResult {
  id: string;
  name: string;
  due: string;
  score: string;
  hasFeedback?: boolean;
  commentCount?: number;
}

const mockResults: AssignmentResult[] = [
  {
    id: "1",
    name: "Advanced Calcus Problem Set...",
    due: "July 25, 2026",
    score: "-",
  },
  {
    id: "2",
    name: "Number Theory: Prime Distribu...",
    due: "July 25, 2026",
    score: "11/14",
  },
  {
    id: "3",
    name: "Combinatorics & Graph Theory....",
    due: "July 25, 2026",
    score: "10/10",
  },
  {
    id: "4",
    name: "Linear Algebra: Vector Spaces",
    due: "July 25, 2026",
    score: "18/20",
  },
  {
    id: "5",
    name: "Probability Theory Mock Exam",
    due: "July 25, 2026",
    score: "-",
    hasFeedback: true,
    commentCount: 2,
  },
  {
    id: "6",
    name: "Geometry & Topology Explorati..",
    due: "July 25, 2026",
    score: "15/25",
  },
  {
    id: "7",
    name: "Real Analysis: Sequence Limits",
    due: "July 25, 2026",
    score: "20/30",
  },
];

export default function GradesPage() {
  const [selectedCourse, setSelectedCourse] = useState("Combinatorics");
  const [arrangeBy, setArrangeBy] = useState("Filter by Date");

  return (
    <div 
      className="min-h-screen p-8"
      style={{ backgroundColor: "#E6EBF2" }}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Results</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Review course work results, submitted assessments, and instructor annotations
          </p>
        </div>

        {/* Filters and Actions Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-transparent">
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Course Filter */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                Course
              </label>
              <div className="relative">
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-600 w-52 shadow-sm"
                >
                  <option value="Combinatorics">Combinatorics</option>
                  <option value="Advanced Calculus">Advanced Calculus</option>
                  <option value="Linear Algebra">Linear Algebra</option>
                  <option value="Number Theory">Number Theory</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Arrange By Filter */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                ARRANGE BY
              </label>
              <div className="relative">
                <select
                  value={arrangeBy}
                  onChange={(e) => setArrangeBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-600 w-52 shadow-sm"
                >
                  <option value="Filter by Date">Filter by Date</option>
                  <option value="Filter by Score">Filter by Score</option>
                  <option value="Filter by Name">Filter by Name</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex items-end">
              <button 
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2 rounded-lg shadow-sm transition-colors mt-auto cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Right-side Action Buttons */}
          <div className="flex items-center gap-3 self-end lg:self-auto mt-auto">
            <button 
              type="button"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-sm font-medium px-4 py-2 rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              <Filter className="h-4 w-4 text-gray-500" />
              <span>Filters</span>
            </button>

            <button 
              type="button"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-sm font-medium px-4 py-2 rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              <ArrowUpDown className="h-4 w-4 text-gray-500" />
              <span>Sort By</span>
            </button>
          </div>
        </div>

        {/* Results Table Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Table Header */}
              <thead>
                <tr className="bg-[#D9E1F2] text-gray-700 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-semibold w-5/12">Assignment Name</th>
                  <th className="py-3.5 px-6 font-semibold w-3/12">DUE</th>
                  <th className="py-3.5 px-6 font-semibold w-2/12">Score</th>
                  <th className="py-3.5 px-6 font-semibold w-2/12 text-right pr-8">Feedback</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-sm text-gray-800">
                {mockResults.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                    
                    {/* Assignment Name */}
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {item.name}
                    </td>

                    {/* Due Date */}
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400 shrink-0" />
                        <span>{item.due}</span>
                      </div>
                    </td>

                    {/* Score */}
                    <td className="py-4 px-6 font-medium text-gray-700">
                      {item.score}
                    </td>

                    {/* Feedback / Annotations */}
                    <td className="py-4 px-6 text-right pr-8">
                      {item.hasFeedback ? (
                        <div className="flex items-center justify-end gap-2 text-gray-500">
                          <span className="inline-flex items-center justify-center p-1.5 bg-blue-50 text-blue-600 rounded-md">
                            <FileText className="h-4 w-4" />
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                            <MessageSquare className="h-3.5 w-3.5" />
                            {item.commentCount}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
