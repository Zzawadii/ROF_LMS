'use client';

import React from "react";
import Link from "next/link";
import { FileText, Link2, MoreVertical } from "lucide-react";

interface Student {
  id: string;
  name: string;
  studentId: string;
  type: "Reviewed" | "Not Reviewed";
  score: string;
  submittedAt: string;
  iconType: "doc" | "link";
}

const mockStudents: Student[] = [
  {
    id: "1",
    name: "Eric MUGISHA",
    studentId: "#23456",
    type: "Reviewed",
    score: "18/20",
    submittedAt: "July 25, 12:06 PM",
    iconType: "doc",
  },
  {
    id: "2",
    name: "Ariana Grande",
    studentId: "#34534",
    type: "Reviewed",
    score: "17/20",
    submittedAt: "July 25, 10:16 AM",
    iconType: "doc",
  },
  {
    id: "3",
    name: "Uwitonze Emma",
    studentId: "#98749",
    type: "Not Reviewed",
    score: "-",
    submittedAt: "July 25, 14:00 PM",
    iconType: "link",
  },
  {
    id: "4",
    name: "Kamahoro Linda",
    studentId: "#43853",
    type: "Reviewed",
    score: "15/20",
    submittedAt: "July 25, 11:00 PM",
    iconType: "doc",
  },
];

interface SubmissionsTableProps {
  assignmentId: string;
}

export default function SubmissionsTable({ assignmentId }: SubmissionsTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Custom Table Header */}
      <div className="bg-[#DCE3F2] px-6 py-3.5 grid grid-cols-12 text-sm font-semibold text-slate-700 border-b border-slate-200">
        <div className="col-span-4">Title</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Score</div>
        <div className="col-span-2">Submitted</div>
        <div className="col-span-2">Actions</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-slate-100">
        {mockStudents.map((student) => (
          <div
            key={student.id}
            className="px-6 py-4 grid grid-cols-12 items-center text-sm hover:bg-slate-50/80 transition"
          >
            {/* Title / Student Info */}
            <div className="col-span-4 flex items-center gap-3">
              <div
                className={`p-2.5 rounded-xl ${
                  student.iconType === "doc"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-amber-50 text-amber-500"
                }`}
              >
                {student.iconType === "doc" ? (
                  <FileText className="w-5 h-5" />
                ) : (
                  <Link2 className="w-5 h-5" />
                )}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{student.name}</h4>
                <p className="text-xs text-slate-400">{student.studentId}</p>
              </div>
            </div>

            {/* Type / Status */}
            <div className="col-span-2 font-medium text-slate-700">
              {student.type}
            </div>

            {/* Score */}
            <div className="col-span-2 font-bold text-slate-800">
              {student.score}
            </div>

            {/* Submitted Date */}
            <div className="col-span-2 text-xs text-slate-600 font-medium leading-relaxed">
              <div>{student.submittedAt.split(",")[0]}</div>
              <div className="text-slate-400">{student.submittedAt.split(",")[1]}</div>
            </div>

            {/* Actions */}
            <div className="col-span-2 flex items-center gap-2">
              {student.type === "Reviewed" ? (
                <Link
                  href={`/mentor/assignments/${assignmentId}/submissions/${student.id}`}
                  className="px-4 py-1.5 border border-blue-500 text-blue-600 hover:bg-blue-50 rounded-xl font-medium text-xs transition"
                >
                  Review
                </Link>
              ) : (
                <Link
                  href={`/mentor/assignments/${assignmentId}/submissions/${student.id}`}
                  className="px-5 py-1.5 bg-[#2B2BB2] text-white hover:bg-indigo-800 rounded-xl font-medium text-xs transition"
                >
                  View
                </Link>
              )}
              <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
