"use client";

import { useState } from "react";
import {
  Search,
  Upload,
  MoreVertical,
  MoreHorizontal,
  ChevronDown,
  Filter,
  FileText,
  Link as LinkIcon,
} from "lucide-react";

interface Paper {
  id: string;
  title: string;
  subtitle: string;
  type: "PDF" | "Link";
  year: number;
  uploadedDate: string;
  uploadedBy: string;
  size: string;
}

const initialPapers: Paper[] = [
  {
    id: "1",
    title: "Camp Selection 2023",
    subtitle: "Geometry",
    type: "PDF",
    year: 2024,
    uploadedDate: "July 25, 2026",
    uploadedBy: "You",
    size: "2.4MB",
  },
  {
    id: "2",
    title: "National Olympiad 2023",
    subtitle: "Round 1 - Geometry",
    type: "PDF",
    year: 2025,
    uploadedDate: "July 25, 2026",
    uploadedBy: "You",
    size: "3.1MB",
  },
  {
    id: "3",
    title: "National Olympiad 2023",
    subtitle: "Round 2",
    type: "Link",
    year: 2026,
    uploadedDate: "July 25, 2026",
    uploadedBy: "You",
    size: "—",
  },
  {
    id: "4",
    title: "National Olympiad 2023",
    subtitle: "Round 2",
    type: "PDF",
    year: 2023,
    uploadedDate: "July 25, 2026",
    uploadedBy: "You",
    size: "3.1MB",
  },
];

export default function PastPapersTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("All Years");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredPapers = initialPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear =
      selectedYear === "All Years" || paper.year.toString() === selectedYear;
    const matchesType = selectedType === "All" || paper.type === selectedType;

    return matchesSearch && matchesYear && matchesType;
  });

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 border-b-2 border-blue-600 inline-block pb-0.5">
            Past Papers
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage past papers and past Olympiad questions
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-[#2827A6] hover:bg-[#1f1e84] text-white font-medium px-5 py-2.5 rounded-2xl shadow-sm transition-all">
            <Upload className="w-4 h-4" />
            <span>Upload Past Paper</span>
          </button>
          <button className="p-2.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-slate-600 shadow-sm transition-all">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search & Filters Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search papers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-300 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Year Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsYearOpen(!isYearOpen);
                setIsFilterOpen(false);
              }}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 shadow-sm hover:bg-white transition-all"
            >
              <span>{selectedYear}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>
            {isYearOpen && (
              <div className="absolute left-0 mt-1 w-32 bg-white rounded-lg border border-slate-200 shadow-lg py-1 z-20 text-xs">
                {["All Years", "2023", "2024", "2025", "2026"].map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setIsYearOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-slate-100 transition-colors ${selectedYear === year ? "font-bold text-slate-900" : "text-slate-600"
                      }`}
                  >
                    ▪ {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Type Filters Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
                setIsYearOpen(false);
              }}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 shadow-sm hover:bg-white transition-all"
            >
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span>Filters</span>
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg border border-slate-200 shadow-lg p-2 z-20 text-xs">
                <div className="font-semibold text-slate-400 mb-1 px-1 uppercase tracking-wider text-[10px]">
                  Type
                </div>
                {["All", "PDF", "Link"].map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded hover:bg-slate-100 transition-colors flex items-center gap-1.5 ${selectedType === type ? "font-bold text-slate-900" : "text-slate-600"
                      }`}
                  >
                    <span className="text-[8px]">{selectedType === type ? "●" : "○"}</span>
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#D3DCED]/60 text-slate-600 text-sm font-semibold border-b border-slate-200">
                <th className="py-3.5 px-6">Title</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Year</th>
                <th className="py-3.5 px-4">Uploaded</th>
                <th className="py-3.5 px-4">Size</th>
                <th className="py-3.5 px-6 text-right"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredPapers.map((paper) => (
                <tr key={paper.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      {paper.type === "PDF" ? (
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                          <LinkIcon className="w-5 h-5 text-amber-600" />
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-slate-900">{paper.title}</div>
                        <div className="text-xs text-slate-400">{paper.subtitle}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 font-medium text-slate-700">{paper.type}</td>
                  <td className="py-3.5 px-4 text-slate-700">{paper.year}</td>
                  <td className="py-3.5 px-4">
                    <div className="text-slate-800 font-medium">{paper.uploadedDate}</div>
                    <div className="text-xs text-slate-400">By {paper.uploadedBy}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{paper.size}</td>
                  <td className="py-3.5 px-6 text-right">
                    <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredPapers.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-slate-400">
                    No papers found matching your filters.
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
