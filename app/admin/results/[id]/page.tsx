"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface StudentReview {
  id: string;
  student: string;
  score: string;
  mentor: string;
  feedback: string;
  status: "Reviewed" | "Resubmission Requested" | "Pending Review";
}

const REVIEWS_DATA: StudentReview[] = [
  {
    id: "1",
    student: "Aimable Mugabo",
    score: "58%",
    mentor: "Jean Claude Habimana",
    feedback: "Good reasoning overall. Part (c) needs a complet...",
    status: "Reviewed",
  },
  {
    id: "2",
    student: "Chantal Umutoni",
    score: "65%",
    mentor: "Jean Claude Habimana",
    feedback: "Solid work. Try to state the theorem you are using ...",
    status: "Reviewed",
  },
  {
    id: "3",
    student: "Kevin Gasana",
    score: "75%",
    mentor: "Jean Claude Habimana",
    feedback: "Solid work. Try to state the theorem you are using ...",
    status: "Reviewed",
  },
  {
    id: "4",
    student: "Divine Habimana",
    score: "81%",
    mentor: "Jean Claude Habimana",
    feedback: "Excellent, well-structured solution with careful nota...",
    status: "Reviewed",
  },
  {
    id: "5",
    student: "Fabrice Ingabire",
    score: "88%",
    mentor: "Jean Claude Habimana",
    feedback: "Clear method and correct final answer. Show the d...",
    status: "Reviewed",
  },
  {
    id: "6",
    student: "Ange Uwase",
    score: "61%",
    mentor: "Jean Claude Habimana",
    feedback: "—",
    status: "Resubmission Requested",
  },
  {
    id: "7",
    student: "Yves Byiringiro",
    score: "74%",
    mentor: "Jean Claude Habimana",
    feedback: "Correct approach, but an arithmetic slip in the last...",
    status: "Reviewed",
  },
  {
    id: "8",
    student: "Sandrine Murekatete",
    score: "57%",
    mentor: "Jean Claude Habimana",
    feedback: "Excellent, well-structured solution with careful nota...",
    status: "Reviewed",
  },
  {
    id: "9",
    student: "Thierry Mutoni",
    score: "—",
    mentor: "Jean Claude Habimana",
    feedback: "—",
    status: "Pending Review",
  },
  {
    id: "10",
    student: "Josiane Niyonsenga",
    score: "—",
    mentor: "Jean Claude Habimana",
    feedback: "—",
    status: "Pending Review",
  },
  {
    id: "11",
    student: "Gilbert Nshimiyimana",
    score: "84%",
    mentor: "Aline Uwase",
    feedback: "Clear method and correct final answer. Show the d...",
    status: "Reviewed",
  },
  {
    id: "12",
    student: "Esther Ishimwe",
    score: "96%",
    mentor: "Aline Uwase",
    feedback: "Solid work. Try to state the theorem you are using ...",
    status: "Reviewed",
  },
  {
    id: "13",
    student: "Moses Tuyisenge",
    score: "74%",
    mentor: "Aline Uwase",
    feedback: "Excellent, well-structured solution with careful nota...",
    status: "Reviewed",
  },
  {
    id: "14",
    student: "Clarisse Ndayisaba",
    score: "74%",
    mentor: "Aline Uwase",
    feedback: "",
    status: "Reviewed",
  },
  {
    id: "15",
    student: "Pacifique Uwamahoro",
    score: "74%",
    mentor: "Aline Uwase",
    feedback: "Excellent, well-structured solution with careful nota...",
    status: "Reviewed",
  },
  {
    id: "16",
    student: "Liliane Iradukunda",
    score: "66%",
    mentor: "Aline Uwase",
    feedback: "—",
    status: "Reviewed",
  },
];

export default function AssignmentResultsDetail() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Back Link */}
      <button
        onClick={() => router.push("/admin/results")}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 mb-3 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Results</span>
      </button>

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Quadratic Equations Practice
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          Junior · Algebra · 50 students
        </p>
      </div>

      {/* Warning Callout Banner */}
      <div className="bg-gray-100/80 border border-gray-200/80 rounded-2xl px-5 py-3.5 mb-6">
        <p className="text-xs text-gray-600 font-medium">
          8 submissions are still awaiting mentor review. Results can be published once all reviews are complete.
        </p>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100/80">
          <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">
            SUBMITTED
          </p>
          <h3 className="text-2xl font-bold text-gray-900">42</h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100/80">
          <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">
            REVIEWED
          </p>
          <h3 className="text-2xl font-bold text-gray-900">34</h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100/80">
          <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">
            PENDING
          </p>
          <h3 className="text-2xl font-bold text-gray-900">8</h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100/80">
          <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">
            AVERAGE SCORE
          </p>
          <h3 className="text-2xl font-bold text-gray-900">75%</h3>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        {/* Table Subheader */}
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-xs font-bold text-gray-900">
            Completed mentor reviews
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-3.5 text-xs font-semibold text-gray-500">
                  Student
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-gray-500">
                  Score
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-gray-500">
                  Mentor
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-gray-500">
                  Feedback
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-gray-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/80">
              {REVIEWS_DATA.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/60 transition-colors text-xs"
                >
                  {/* Student Name */}
                  <td className="px-6 py-3.5 font-bold text-gray-900">
                    {item.student}
                  </td>

                  {/* Score */}
                  <td className="px-6 py-3.5 text-gray-600 font-medium">
                    {item.score}
                  </td>

                  {/* Mentor */}
                  <td className="px-6 py-3.5 text-gray-600 font-medium">
                    {item.mentor}
                  </td>

                  {/* Feedback */}
                  <td className="px-6 py-3.5 text-gray-500 font-normal max-w-xs truncate">
                    {item.feedback || "—"}
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-3.5">
                    <span
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold ${
                        item.status === "Reviewed"
                          ? "bg-emerald-50 text-emerald-700"
                          : item.status === "Resubmission Requested"
                          ? "bg-rose-50 text-rose-600 border border-rose-200/50"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {item.status}
                    </span>
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
