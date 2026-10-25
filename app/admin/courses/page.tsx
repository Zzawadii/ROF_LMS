"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface CourseData {
  id: string;
  course: string;
  description: string;
  divisions: {
    junior: boolean;
    senior: boolean;
  };
  isActive: boolean;
  studentsCount: string;
  mentorsCount: number;
}

const INITIAL_COURSES: CourseData[] = [
  {
    id: "1",
    course: "Algebra",
    description:
      "Equations, inequalities, polynomials and functional reasoning for olympiad preparation.",
    divisions: { junior: true, senior: true },
    isActive: true,
    studentsCount: "2,480",
    mentorsCount: 4,
  },
  {
    id: "2",
    course: "Geometry",
    description:
      "Euclidean geometry, synthetic proofs, transformations and trigonometry.",
    divisions: { junior: true, senior: true },
    isActive: true,
    studentsCount: "2,480",
    mentorsCount: 4,
  },
  {
    id: "3",
    course: "Number Theory",
    description:
      "Divisibility, modular arithmetic, Diophantine equations and primes.",
    divisions: { junior: true, senior: true },
    isActive: true,
    studentsCount: "2,480",
    mentorsCount: 3,
  },
  {
    id: "4",
    course: "Combinatorics",
    description:
      "Counting techniques, pigeonhole principle, graph theory and recurrences.",
    divisions: { junior: true, senior: true },
    isActive: true,
    studentsCount: "2,480",
    mentorsCount: 3,
  },
];

export default function CoursesWithEditModal() {
  const [courses, setCourses] = useState<CourseData[]>(INITIAL_COURSES);
  const [editingCourse, setEditingCourse] = useState<CourseData | null>(null);

  // Open modal with selected course data
  const handleEditClick = (course: CourseData) => {
    setEditingCourse({ ...course });
  };

  // Close modal
  const handleCloseModal = () => {
    setEditingCourse(null);
  };

  // Save updated course state
  const handleSaveChanges = () => {
    if (!editingCourse) return;

    setCourses((prev) =>
      prev.map((c) => (c.id === editingCourse.id ? editingCourse : c))
    );
    setEditingCourse(null);
  };

  return (
    <main className="relative min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Courses</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          The Mathematics curriculum is fixed to four areas: Algebra, Geometry, Number Theory and Combinatorics.
        </p>
      </div>

      {/* Top Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">
              ACTIVE COURSES
            </p>
            <h3 className="text-2xl font-bold text-gray-900">
              {courses.filter((c) => c.isActive).length}
            </h3>
          </div>
          <p className="text-xs text-gray-400 mt-2 font-medium">Of 4 curriculum areas</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">
              ENROLLED STUDENTS
            </p>
            <h3 className="text-2xl font-bold text-gray-900">2,040</h3>
          </div>
          <p className="text-xs text-gray-400 mt-2 font-medium">Across both divisions</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">
              ASSIGNED MENTORS
            </p>
            <h3 className="text-2xl font-bold text-gray-900">42</h3>
          </div>
          <p className="text-xs text-gray-400 mt-2 font-medium">Teaching across courses</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">
              OPEN ASSIGNMENTS
            </p>
            <h3 className="text-2xl font-bold text-gray-900">2</h3>
          </div>
          <p className="text-xs text-gray-400 mt-2 font-medium">Currently accepting submissions</p>
        </div>
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">Course</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">Division</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">Students</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">Mentors</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 text-right pr-10">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/80">
              {courses.map((item) => {
                const divisionText =
                  item.divisions.junior && item.divisions.senior
                    ? "Junior & Senior"
                    : item.divisions.junior
                      ? "Junior"
                      : item.divisions.senior
                        ? "Senior"
                        : "None";

                return (
                  <tr key={item.id} className="hover:bg-gray-50/60 transition-colors text-xs">
                    <td className="px-6 py-4 font-bold text-gray-900">{item.course}</td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{divisionText}</td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{item.studentsCount}</td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{item.mentorsCount}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold ${item.isActive
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-500"
                          }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right pr-10">
                      <div className="inline-flex items-center gap-4">
                        <button
                          onClick={() => alert(`Viewing ${item.course}`)}
                          className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleEditClick(item)}
                          className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- EDIT COURSE MODAL OVERLAY --- */}
      {editingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 shadow-2xl border border-gray-100 transition-all transform scale-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Edit {editingCourse.course}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Content */}
            <div className="space-y-6 pt-2">
              {/* Course Description */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Course description
                </label>
                <textarea
                  rows={3}
                  value={editingCourse.description}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      description: e.target.value,
                    })
                  }
                  className="w-full text-xs text-gray-800 bg-white border border-indigo-500/80 rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none font-normal shadow-2xs"
                />
              </div>

              {/* Division Availability */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2.5">
                  Division availability
                </label>
                <div className="space-y-2.5">
                  {/* Junior Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-gray-800">
                    <div
                      onClick={() =>
                        setEditingCourse({
                          ...editingCourse,
                          divisions: {
                            ...editingCourse.divisions,
                            junior: !editingCourse.divisions.junior,
                          },
                        })
                      }
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors cursor-pointer ${editingCourse.divisions.junior
                          ? "bg-indigo-600 text-white"
                          : "border border-gray-300 bg-white"
                        }`}
                    >
                      {editingCourse.divisions.junior && (
                        <Check className="w-3 h-3 stroke-[3]" />
                      )}
                    </div>
                    <span>Junior (S1–S3)</span>
                  </label>

                  {/* Senior Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-gray-800">
                    <div
                      onClick={() =>
                        setEditingCourse({
                          ...editingCourse,
                          divisions: {
                            ...editingCourse.divisions,
                            senior: !editingCourse.divisions.senior,
                          },
                        })
                      }
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors cursor-pointer ${editingCourse.divisions.senior
                          ? "bg-indigo-600 text-white"
                          : "border border-gray-300 bg-white"
                        }`}
                    >
                      {editingCourse.divisions.senior && (
                        <Check className="w-3 h-3 stroke-[3]" />
                      )}
                    </div>
                    <span>Senior (S4–S6)</span>
                  </label>
                </div>
              </div>

              {/* Course Active Switch Card */}
              <div className="bg-gray-50/70 rounded-2xl p-4 flex items-center justify-between border border-gray-100">
                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    Course active
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-medium">
                    Inactive courses are hidden from students.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setEditingCourse({
                      ...editingCourse,
                      isActive: !editingCourse.isActive,
                    })
                  }
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${editingCourse.isActive ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${editingCourse.isActive ? "translate-x-4" : "translate-x-0"
                      }`}
                  />
                </button>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2.5 mt-8">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-5 py-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium rounded-xl transition-colors shadow-2xs cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveChanges}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
