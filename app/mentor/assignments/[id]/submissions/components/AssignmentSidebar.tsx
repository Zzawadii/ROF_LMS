import React from "react";
import {
  FileText,
  Zap,
  Info,
  ChevronRight,
  Mail,
  Download,
} from "lucide-react";

interface AssignmentData {
  id: string;
  course: string;
  learningCircle: string;
  mentor: string;
  division: string;
}

interface AssignmentSidebarProps {
  assignment: AssignmentData;
}

// Server Component
export default function AssignmentSidebar({ assignment }: AssignmentSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Assignment Details Panel */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm">
          <FileText className="w-4 h-4 text-blue-600" />
          <span>Assignment Details</span>
        </div>
        <div className="space-y-3 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Course</span>
            <span className="font-semibold text-slate-800">{assignment.course}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Learning Circle</span>
            <span className="font-semibold text-slate-800">{assignment.learningCircle}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Mentor</span>
            <span className="font-semibold text-slate-800">{assignment.mentor}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Division</span>
            <span className="font-semibold text-slate-800">{assignment.division}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm">
          <Zap className="w-4 h-4 text-blue-600" />
          <span>Quick Actions</span>
        </div>
        <div className="divide-y divide-slate-100 text-xs">
          <button className="w-full py-2.5 flex items-center justify-between text-slate-700 hover:text-blue-600 transition group text-left">
            <span className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              View Assignment Details
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600" />
          </button>
          <button className="w-full py-2.5 flex items-center justify-between text-slate-700 hover:text-blue-600 transition group text-left">
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              Message All Students
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600" />
          </button>
          <button className="w-full py-2.5 flex items-center justify-between text-slate-700 hover:text-blue-600 transition group text-left">
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              Download Submissions
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600" />
          </button>
          <button className="w-full py-2.5 flex items-center justify-between text-slate-700 hover:text-blue-600 transition group text-left">
            <span className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              Export Grades
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* Related Info Panel */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm">
          <Info className="w-4 h-4 text-blue-600" />
          <span>Related Info</span>
        </div>
        <div className="space-y-3 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Course</span>
            <span className="font-semibold text-slate-800">{assignment.course}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Learning Circle</span>
            <span className="font-semibold text-slate-800">{assignment.learningCircle}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Mentor</span>
            <span className="font-semibold text-slate-800">{assignment.mentor}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Division</span>
            <span className="font-semibold text-slate-800">{assignment.division}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
