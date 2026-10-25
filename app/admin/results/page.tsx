"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ResultItem {
  id: string;
  assignment: string;
  submissionsCount: string;
  course: string;
  division: "Junior" | "Senior";
  reviewed: string;
  ready: string;
  publishedStatus: "Not Published" | "Results Published";
  actionType: "outlined" | "filled" | "view";
}

const RESULTS_DATA: ResultItem[] = [
  {
    id: "1",
    assignment: "Quadratic Equations Practice",
    submissionsCount: "42 submissions",
    course: "Algebra",
    division: "Junior",
    reviewed: "34 / 42",
    ready: "8 pending",
    publishedStatus: "Not Published",
    actionType: "outlined",
  },
  {
    id: "2",
    assignment: "Euclidean Geometry Problems",
    submissionsCount: "36 submissions",
    course: "Geometry",
    division: "Senior",
    reviewed: "36 / 36",
    ready: "36 ready",
    publishedStatus: "Not Published",
    actionType: "filled",
  },
  {
    id: "3",
    assignment: "Divisibility and Modular Arithmetic",
    submissionsCount: "38 submissions",
    course: "Number Theory",
    division: "Senior",
    reviewed: "38 / 38",
    ready: "38 ready",
    publishedStatus: "Results Published",
    actionType: "view",
  },
  {
    id: "4",
    assignment: "Algebra Practice",
    submissionsCount: "42 submissions",
    course: "Algebra",
    division: "Junior",
    reviewed: "42 / 42",
    ready: "42 ready",
    publishedStatus: "Not Published",
    actionType: "filled",
  },
];

export default function ResultsTable() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Results</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          Mentors score and give feedback. You check completed reviews and publish results.
        </p>
      </div>

      {/* Table Container Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">
                  Assignment
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">
                  Course
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">
                  Division
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">
                  Reviewed
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">
                  Ready
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">
                  Published
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 text-right pr-8">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/80">
              {RESULTS_DATA.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/60 transition-colors text-xs"
                >
                  {/* Assignment Title + Submissions Subtext */}
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">{item.assignment}</div>
                    <div className="text-[11px] text-gray-400 font-medium mt-0.5">
                      {item.submissionsCount}
                    </div>
                  </td>

                  {/* Course */}
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {item.course}
                  </td>

                  {/* Division */}
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {item.division}
                  </td>

                  {/* Reviewed Count */}
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {item.reviewed}
                  </td>

                  {/* Ready Status */}
                  <td className="px-6 py-4 text-gray-500 font-medium">
                    {item.ready}
                  </td>

                  {/* Published Badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold ${item.publishedStatus === "Results Published"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50/80 text-amber-700"
                        }`}
                    >
                      {item.publishedStatus}
                    </span>
                  </td>

                  {/* Action Buttons */}
                  <td className="px-6 py-4 text-right pr-8">
                    {item.actionType === "outlined" && (
                      <button
                        onClick={() => alert(`Review & Publish: ${item.assignment}`)}
                        className="px-4 py-1.5 border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium rounded-lg transition-colors shadow-2xs cursor-pointer"
                      >
                        Review & Publish
                      </button>
                    )}
                    {item.actionType === "filled" && (
                      <button
                        onClick={() => alert(`Review & Publish: ${item.assignment}`)}
                        className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-xs cursor-pointer"
                      >
                        Review & Publish
                      </button>
                    )}
                    {item.actionType === "view" && (
                      <button
                        onClick={() => router.push(`/admin/results/${item.id}`)}
                        className="px-4 py-1.5 border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium rounded-lg transition-colors shadow-2xs cursor-pointer"
                      >
                        View
                      </button>
                    )}
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
