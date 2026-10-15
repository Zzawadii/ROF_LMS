'use client';

import React, { useState } from "react";
import { Search, Download } from "lucide-react";

export default function SubmissionControls() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="relative w-full sm:w-80">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search students by name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
        <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl px-3 py-2 outline-none cursor-pointer">
          <option>All Statuses</option>
          <option>Reviewed</option>
          <option>Not Reviewed</option>
        </select>
        <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl px-3 py-2 outline-none cursor-pointer">
          <option>All Groups</option>
          <option>G12 - Geometry</option>
        </select>
        <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl px-3 py-2 outline-none cursor-pointer">
          <option>Sort by</option>
          <option>Name (A-Z)</option>
          <option>Score (High-Low)</option>
          <option>Submitted Date</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition shadow-sm">
          <Download className="w-4 h-4 text-slate-500" />
          Download Report
        </button>
      </div>
    </div>
  );
}
