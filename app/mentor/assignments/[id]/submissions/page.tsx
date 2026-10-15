import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, Edit, Users, Calendar } from "lucide-react";
import SubmissionsTable from "./components/SubmissionsTable";
import SubmissionControls from "./components/SubmissionControls";
import AssignmentSidebar from "./components/AssignmentSidebar";

// Server Component - can fetch data here
// In production:
// const assignment = await getAssignment(params.id);
// const submissions = await getAssignmentSubmissions(params.id);

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AssignmentSubmissionsPage({ params }: PageProps) {
  const { id } = await params;

  // Mock data - replace with actual API call
  const assignmentData = {
    id,
    title: "Geometry Assignment 3",
    subject: "Geometry",
    description: "Solve the following geometry problems. Show all your steps and explain your reasoning.",
    dueDate: "May 29, 2026",
    dueTime: "11:59 PM",
    course: "Geometry",
    learningCircle: "G12 - Geometry",
    mentor: "Bonte M.",
    division: "Senior",
    stats: {
      totalStudents: 32,
      submitted: 24,
      notReviewed: 6,
      reviewed: 2,
      notSubmitted: 0,
    },
  };

  return (
    <div className="min-h-screen bg-[#E6EBF2] p-6 text-slate-800 font-sans">
      {/* Top Header Link */}
      <div className="mb-4">
        <Link
          href="/mentor/assignments"
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Assignments
        </Link>
      </div>

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column (Main Content - 3 columns wide on large screens) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Card 1: Assignment Header */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-slate-900">
                    {assignmentData.title}
                  </h1>
                  <span className="px-3 py-0.5 text-xs font-medium bg-slate-100 text-slate-500 rounded-full">
                    {assignmentData.subject}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1 max-w-xl">
                  {assignmentData.description}
                </p>
                <div className="flex items-center gap-1 text-xs text-slate-400 mt-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Due {assignmentData.dueDate}</span>
                  <span>•</span>
                  <span>{assignmentData.dueTime}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 font-medium text-sm rounded-xl hover:bg-slate-50 transition w-full md:w-auto">
                <Mail className="w-4 h-4" />
                Message Students
              </button>
              <Link
                href={`/mentor/assignments/${id}/edit`}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#2B2BB2] text-white font-medium text-sm rounded-xl hover:bg-indigo-800 transition w-full md:w-auto"
              >
                <Edit className="w-4 h-4" />
                Edit Assignment
              </Link>
            </div>
          </div>

          {/* Card 2: Student Engagement Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Student Engagement</h2>
                <p className="text-xs text-slate-400">
                  Overview of submission status for this assignment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 w-full md:w-auto text-center md:text-left">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-blue-600 font-bold text-xl">
                  <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
                  {assignmentData.stats.totalStudents}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Total Students</p>
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-emerald-600 font-bold text-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                  {assignmentData.stats.submitted}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Submitted</p>
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-purple-600 font-bold text-xl">
                  <span className="w-2 h-2 rounded-full bg-purple-600 inline-block"></span>
                  {assignmentData.stats.notReviewed}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Not Reviewed</p>
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-amber-500 font-bold text-xl">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                  {assignmentData.stats.reviewed}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Reviewed</p>
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-rose-500 font-bold text-xl">
                  <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
                  {assignmentData.stats.notSubmitted}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Not Submitted</p>
              </div>
            </div>
          </div>

          {/* Controls / Filters - Client Component */}
          <SubmissionControls />

          {/* Student Submissions Table - Client Component */}
          <SubmissionsTable assignmentId={id} />
        </div>

        {/* Right Sidebar Column - Server Component */}
        <AssignmentSidebar assignment={assignmentData} />
      </div>
    </div>
  );
}
