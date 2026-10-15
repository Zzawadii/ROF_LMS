"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface BookItem {
  id: string;
  title: string;
  category: string;
  type: "PDF" | "Link";
  uploadDate: string;
  uploadedBy: string;
  size: string;
}

const initialBooks: BookItem[] = [
  {
    id: "1",
    title: "Camp Selection 2023",
    category: "Geometry",
    type: "PDF",
    uploadDate: "July 25,2026",
    uploadedBy: "You",
    size: "2.4MB",
  },
  {
    id: "2",
    title: "National Olympiad 2023",
    category: "Round 1 - Geometry",
    type: "PDF",
    uploadDate: "July 25,2026",
    uploadedBy: "You",
    size: "3.1MB",
  },
  {
    id: "3",
    title: "National Olympiad 2023",
    category: "Round 2",
    type: "Link",
    uploadDate: "July 25,2026",
    uploadedBy: "You",
    size: "—",
  },
  {
    id: "4",
    title: "National Olympiad 2023",
    category: "Round 2",
    type: "PDF",
    uploadDate: "July 25,2026",
    uploadedBy: "You",
    size: "3.1MB",
  },
];

export default function BooksTab() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"Newest" | "Oldest">("Newest");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredBooks = initialBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Books</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage books and learning materials for this course
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/mentor/courses/upload-book")}
            className="flex items-center gap-2.5 bg-[#2522A5] hover:bg-[#1d1a88] text-white px-6 py-3 rounded-2xl font-medium shadow-sm transition-all text-sm"
          >
            <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span>Upload a Book</span>
          </button>

          <button className="p-2 md:p-3 bg-white hover:bg-gray-50 border border-gray-200/80 rounded-2xl text-gray-600 transition-colors shadow-sm">
            <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search & Actions Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 md:gap-4 pt-2">
        {/* Search Input */}
        <div className="relative flex-1 max-w-full sm:max-w-md">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200/80 rounded-xl text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 relative">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200/80 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            <svg className="w-3.5 h-3.5 stroke-current text-gray-500" fill="none" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filters</span>
          </button>

          {/* Sort Dropdown Container */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200/80 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <svg className="w-3.5 h-3.5 stroke-current text-gray-600" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              <span>Sort By</span>
            </button>

            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-20 text-xs">
                <button
                  onClick={() => { setSortOrder("Newest"); setIsSortOpen(false); }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 font-medium ${sortOrder === "Newest" ? "text-black font-bold" : "text-gray-600"
                    }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  Newest
                </button>
                <button
                  onClick={() => { setSortOrder("Oldest"); setIsSortOpen(false); }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 font-medium ${sortOrder === "Oldest" ? "text-black font-bold" : "text-gray-600"
                    }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  Oldest
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Books Table Container */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-200/70 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            {/* Header */}
            <thead>
              <tr className="bg-[#DCE5F7] text-gray-600 text-xs font-semibold">
                <th className="py-3 md:py-4 px-4 md:px-6">Title</th>
                <th className="py-3 md:py-4 px-4 md:px-6">Type</th>
                <th className="py-3 md:py-4 px-4 md:px-6">Uploaded</th>
                <th className="py-3 md:py-4 px-4 md:px-6">Size</th>
                <th className="py-3 md:py-4 px-4 md:px-6 text-right"></th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50/60 transition-colors">
                  {/* Title Column */}
                  <td className="py-3 md:py-4 px-4 md:px-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      {book.type === "PDF" ? (
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-[#E8F0FE] flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#2563EB] stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-[#FEF6E6] flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D97706] stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 text-xs md:text-sm truncate">
                          {book.title}
                        </p>
                        <p className="text-[10px] md:text-xs text-gray-400 mt-0.5 truncate">
                          {book.category}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Type Column */}
                  <td className="py-3 md:py-4 px-4 md:px-6 font-medium text-gray-800 text-xs">
                    {book.type}
                  </td>

                  {/* Uploaded Column */}
                  <td className="py-3 md:py-4 px-4 md:px-6">
                    <p className="font-bold text-gray-800 text-xs">{book.uploadDate}</p>
                    <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">By {book.uploadedBy}</p>
                  </td>

                  {/* Size Column */}
                  <td className="py-3 md:py-4 px-4 md:px-6 font-medium text-gray-600 text-xs">
                    {book.size}
                  </td>

                  {/* Actions Column */}
                  <td className="py-3 md:py-4 px-4 md:px-6 text-right">
                    <button className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-[#F2F5F9] hover:bg-gray-200 text-gray-600 transition-colors inline-flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                        <circle cx="5" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="19" cy="12" r="2" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
