"use client";

import React, { useState } from "react";

interface DivisionData {
  title: string;
  subtitle: string;
  courses: string[];
  acceptingStudents: boolean;
  description: string;
}

export default function DivisionsContent() {
  // State management for Junior division settings
  const [juniorData, setJuniorData] = useState<DivisionData>({
    title: "Junior division",
    subtitle: "S1–S3 · 1,320 students · 24 mentors",
    courses: ["Algebra", "Geometry", "Number Theory", "Combinatorics"],
    acceptingStudents: true,
    description: "Junior division — students in senior one to senior three (S1–S3).",
  });

  // State management for Senior division settings
  const [seniorData, setSeniorData] = useState<DivisionData>({
    title: "Senior division",
    subtitle: "S4–S6 · 1,160 students · 18 mentors",
    courses: ["Algebra", "Geometry", "Number Theory", "Combinatorics"],
    acceptingStudents: true,
    description: "Junior division — students in senior one to senior three (S1–S3).",
  });

  const handleSave = (divisionName: string) => {
    alert(`Saved settings for ${divisionName}`);
  };

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Divisions</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          The ROF LMS has exactly two divisions: Junior (S1–S3) and Senior (S4–S6).
        </p>
      </div>

      {/* Grid Container for Side-by-Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Junior Division Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 flex flex-col justify-between">
          <div>
            {/* Title & Subtitle */}
            <h2 className="text-lg font-bold text-gray-900">{juniorData.title}</h2>
            <p className="text-xs text-gray-400 mt-0.5 font-medium mb-6">
              {juniorData.subtitle}
            </p>

            {/* Courses Section */}
            <div className="mb-6">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                AVAILABLE MATHEMATICS COURSES
              </span>
              <div className="flex flex-wrap gap-2">
                {juniorData.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-50/70 text-indigo-700 text-xs font-semibold rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <button
                onClick={() => alert("Viewing Junior students & mentors")}
                className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition-colors shadow-2xs"
              >
                View students & mentors
              </button>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-gray-800">
                Accepting new students
              </span>
              <button
                type="button"
                onClick={() =>
                  setJuniorData((prev) => ({
                    ...prev,
                    acceptingStudents: !prev.acceptingStudents,
                  }))
                }
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  juniorData.acceptingStudents ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    juniorData.acceptingStudents ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Description Textarea */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Division description
              </label>
              <textarea
                rows={3}
                value={juniorData.description}
                onChange={(e) =>
                  setJuniorData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full text-xs text-gray-800 bg-white border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none font-medium"
              />
            </div>
          </div>

          {/* Save Button */}
          <div>
            <button
              onClick={() => handleSave("Junior division")}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
            >
              Save settings
            </button>
          </div>
        </div>

        {/* Senior Division Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 flex flex-col justify-between">
          <div>
            {/* Title & Subtitle */}
            <h2 className="text-lg font-bold text-gray-900">{seniorData.title}</h2>
            <p className="text-xs text-gray-400 mt-0.5 font-medium mb-6">
              {seniorData.subtitle}
            </p>

            {/* Courses Section */}
            <div className="mb-6">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                AVAILABLE MATHEMATICS COURSES
              </span>
              <div className="flex flex-wrap gap-2">
                {seniorData.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-50/70 text-indigo-700 text-xs font-semibold rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <button
                onClick={() => alert("Viewing Senior students & mentors")}
                className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition-colors shadow-2xs"
              >
                View students & mentors
              </button>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-gray-800">
                Accepting new students
              </span>
              <button
                type="button"
                onClick={() =>
                  setSeniorData((prev) => ({
                    ...prev,
                    acceptingStudents: !prev.acceptingStudents,
                  }))
                }
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  seniorData.acceptingStudents ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    seniorData.acceptingStudents ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Description Textarea */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Division description
              </label>
              <textarea
                rows={3}
                value={seniorData.description}
                onChange={(e) =>
                  setSeniorData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full text-xs text-gray-800 bg-white border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none font-medium"
              />
            </div>
          </div>

          {/* Save Button */}
          <div>
            <button
              onClick={() => handleSave("Senior division")}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
            >
              Save settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
