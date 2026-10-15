"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Plus,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Types
type TabType = "all" | "upcoming" | "active" | "completed";

interface Assignment {
  id: string;
  title: string;
  topic: string;
  dueDate: string;
  submitted: number;
  reviewed: number;
  pending: number;
  isCompleted?: boolean;
}

// Sample Data
const mockAssignments: Assignment[] = [
  {
    id: "1",
    title: "Geometry Assignment 3",
    topic: "Circle Geometry",
    dueDate: "Due: May 30, 2027 • 11:59 PM",
    submitted: 24,
    reviewed: 12,
    pending: 2,
    isCompleted: false,
  },
  {
    id: "2",
    title: "Geometry Assignment 3",
    topic: "Circle Geometry",
    dueDate: "Due: May 30, 2027 • 11:59 PM",
    submitted: 0,
    reviewed: 0,
    pending: 0,
    isCompleted: false,
  },
  {
    id: "3",
    title: "Geometry Assignment 3",
    topic: "Circle Geometry",
    dueDate: "Due: May 30, 2027 • 11:59 PM",
    submitted: 32,
    reviewed: 32,
    pending: 0,
    isCompleted: true,
  },
  {
    id: "4",
    title: "Geometry Assignment 3",
    topic: "Circle Geometry",
    dueDate: "Due: May 30, 2027 • 11:59 PM",
    submitted: 30,
    reviewed: 30,
    pending: 0,
    isCompleted: true,
  },
];

export default function AssignmentsDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("active");

  const tabs: { id: TabType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="min-h-screen p-6 md:p-10 font-sans text-slate-800" style={{ backgroundColor: '#E6EBF2' }}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Assignments
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Previous Olympiad papers for practices
          </p>
        </div>
        <Link
          href="/mentor/assignments/create"
          className="inline-flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-5 py-3 rounded-2xl shadow-sm transition-all text-sm w-fit"
        >
          <Plus className="w-5 h-5" />
          <span>Create Assignments</span>
        </Link>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors relative ${isActive
                  ? "border-indigo-600 text-indigo-600 font-semibold"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Assignment List */}
      <div className="space-y-4 max-w-5xl">
        {mockAssignments.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden"
          >
            {/* Left: Icon & Info */}
            <div className="flex items-center gap-4 min-w-[280px]">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {item.topic}
                </p>
                <p className="text-xs text-slate-400 mt-1">{item.dueDate}</p>
              </div>
            </div>

            {/* Middle: Metrics */}
            <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto px-4 md:px-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
              <div className="text-center">
                <span className="block text-lg font-bold text-slate-800">
                  {item.submitted}
                </span>
                <span className="text-xs text-slate-400">Submitted</span>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-slate-800">
                  {item.reviewed}
                </span>
                <span className="text-xs text-slate-400">Reviewed</span>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-slate-800">
                  {item.pending}
                </span>
                <span className="text-xs text-slate-400">Pending</span>
              </div>
            </div>

            {/* Right: Action/Status Icon */}
            <div className="self-end md:self-center pl-2">
              {item.isCompleted ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              ) : (
                <Link
                  href={`/mentor/assignments/${item.id}/assignmentReview`}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1 block"
                >
                  <ChevronRight className="w-6 h-6" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-8 text-center max-w-5xl">
        <button className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors">
          <span>View all assignments</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}