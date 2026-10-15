"use client";

import React, { useState, ChangeEvent } from "react";
import { ArrowLeft, ChevronDown, Upload } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddBookPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "Introduction to Combinatorics",
    course: "Combinatorics",
    description: "Problems on circle theorems, angle properties, and cyclic quadrilaterals.",
    resourceType: "PDF",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "description" && value.length > 250) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleCancel = () => {
    router.push("/mentor/courses");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData, selectedFile);
    // After successful upload, redirect back
    router.push("/mentor/courses");
  };

  return (
    <div className="min-h-screen bg-[#E6EBF2] p-4 md:p-8 lg:p-12 text-[#2D3748]">
      <div className="max-w-6xl mx-auto">
        {/* Top Back Navigation */}
        <button
          onClick={() => router.push("/mentor/courses")}
          className="flex items-center text-xs font-semibold text-gray-600 hover:text-gray-900 mb-4 md:mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Go Back
        </button>

        {/* Header Section */}
        <div className="border-b border-gray-300/80 pb-3 md:pb-4 mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-1">
            Books
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-normal">
            Add a learning resource for your students.
          </p>
        </div>

        {/* Content Form Layout */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">

            {/* Left Column - Form Fields */}
            <div className="space-y-5">
              {/* Book Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Book Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter book title"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                  required
                />
              </div>

              {/* Course Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Course <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm pr-10"
                    required
                  >
                    <option value="Combinatorics">Combinatorics</option>
                    <option value="Algebra">Algebra</option>
                    <option value="Calculus">Calculus</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Brief Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Brief Description
                </label>
                <div className="relative bg-white border border-slate-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
                  <textarea
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Provide a short description..."
                    className="w-full px-4 pt-3 pb-8 bg-transparent text-slate-800 focus:outline-none text-sm resize-none"
                  />
                  <span className="absolute bottom-2 right-3 text-[10px] text-slate-400 font-medium">
                    {formData.description.length}/250
                  </span>
                </div>
              </div>

              {/* Resource Type */}
              <div className="w-full max-w-[200px]">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Resource Type
                </label>
                <div className="relative">
                  <select
                    name="resourceType"
                    value={formData.resourceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm pr-10"
                  >
                    <option value="PDF">PDF</option>
                    <option value="PNG">PNG</option>
                    <option value="JPG">JPG</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Column - Upload File Dropzone */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Upload file <span className="text-red-500">*</span>
              </label>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white shadow-sm flex flex-col items-center justify-center min-h-[300px]">
                <label className="w-full max-w-sm cursor-pointer group">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                  />
                  <div className="border-2 border-dashed border-indigo-200 group-hover:border-indigo-400 rounded-xl p-8 flex flex-col items-center justify-center bg-indigo-50/20 group-hover:bg-indigo-50/50 transition-all">
                    <div className="w-12 h-12 mb-3 text-slate-600 flex items-center justify-center">
                      <Upload className="w-10 h-10 stroke-[1.5]" />
                    </div>
                    <span className="text-sm font-bold text-slate-700 mb-1">
                      Upload File
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Supported formats: PDF, PNG, JPG
                    </span>
                  </div>
                </label>

                <p className="mt-8 text-sm text-slate-500 font-normal">
                  {selectedFile ? selectedFile.name : "Drag and drop your file here"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#2B2E9D] hover:bg-[#232580] text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
