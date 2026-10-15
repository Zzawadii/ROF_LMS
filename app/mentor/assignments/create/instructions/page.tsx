"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    ChevronDown,
    X,
    Bold,
    Italic,
    Underline,
    List,
    ListOrdered,
    Link2,
    Image as ImageIcon,
    Code,
    Paperclip,
    Plus,
    Check,
} from "lucide-react";

export default function CreateAssignmentPage() {
    const [currentStep, setCurrentStep] = useState<number>(1);

    // Form State
    const [formData, setFormData] = useState({
        assignmentTitle: "Circle Geometry Problem Set 4",
        courseSubject: "Geometry",
        description:
            "Problems on circle theorems, angle properties, and cyclic quadrilaterals.",
        groupCohort: "G-12 (28 students)",
        otherGroups: "",
        assignmentType: "Homework / Practice",
        instructions:
            "Attempt all questions.\nShow all steps clearly.\nWrite your final answers in the boxes provided.\nUpload your work as a single PDF file.\nLate submissions may not be accepted.",
    });

    const steps = [
        { id: 1, name: "Basic Info" },
        { id: 2, name: "Instructions" },
        { id: 3, name: "Resources" },
        { id: 4, name: "Settings" },
        { id: 5, name: "Review" },
    ];

    const handleConfirm = () => {
        setCurrentStep(6); // Move to success page
    };

    return (
        <div className="min-h-screen bg-[#E6EBF2] p-6 text-slate-800">
            {/* Header Back Button */}
            <div className="flex items-center gap-2 mb-6">
                <button
                    onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-xl font-bold text-slate-900">Create Assignment</h1>
            </div>

            {/* Progress Stepper Bar */}
            <div className="bg-white rounded-2xl p-4 mb-8 flex items-center justify-between shadow-sm border border-slate-100 max-w-5xl">
                <div className="flex items-center gap-6">
                    {steps.map((step) => {
                        const isActive = step.id === currentStep;
                        const isCompleted = step.id < currentStep;

                        return (
                            <div key={step.id} className="flex items-center gap-2">
                                <span
                                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${isActive
                                        ? "bg-blue-600 text-white"
                                        : isCompleted
                                            ? "bg-slate-200 text-slate-700"
                                            : "bg-slate-100 text-slate-400"
                                        }`}
                                >
                                    {step.id}
                                </span>
                                <span
                                    className={`text-sm font-medium ${isActive
                                        ? "text-blue-600 font-semibold"
                                        : isCompleted
                                            ? "text-slate-700"
                                            : "text-slate-400"
                                        }`}
                                >
                                    {step.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <span className="text-sm font-medium text-slate-600">
                    Step {currentStep} of {steps.length}
                </span>
            </div>

            {/* STEP 1: BASIC INFO */}
            {currentStep === 1 && (
                <div className="max-w-5xl">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-slate-900 mb-1">
                            Basic Information
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Provide the basic details about your assignments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Assignment Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.assignmentTitle}
                                    onChange={(e) =>
                                        setFormData({ ...formData, assignmentTitle: e.target.value })
                                    }
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Course / Subject <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.courseSubject}
                                        onChange={(e) =>
                                            setFormData({ ...formData, courseSubject: e.target.value })
                                        }
                                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm pr-10"
                                    >
                                        <option value="Geometry">Geometry</option>
                                        <option value="Algebra">Algebra</option>
                                        <option value="Calculus">Calculus</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Brief Description
                                </label>
                                <div className="relative">
                                    <textarea
                                        rows={4}
                                        maxLength={250}
                                        value={formData.description}
                                        onChange={(e) =>
                                            setFormData({ ...formData, description: e.target.value })
                                        }
                                        className="w-full bg-white border border-slate-200 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
                                    />
                                    <span className="absolute bottom-3 right-3 text-xs text-slate-400 font-medium">
                                        {formData.description.length}/250
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Group / Cohort <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm flex items-center justify-between shadow-sm min-h-[46px]">
                                        {formData.groupCohort && (
                                            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs px-2.5 py-1 rounded-full font-medium">
                                                {formData.groupCohort}
                                                <button className="hover:text-blue-800">
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </span>
                                        )}
                                        <ChevronDown className="w-4 h-4 text-slate-400 ml-auto" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Assign to other groups (optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Select groups"
                                    value={formData.otherGroups}
                                    onChange={(e) =>
                                        setFormData({ ...formData, otherGroups: e.target.value })
                                    }
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder:text-slate-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-3">
                                    Assignment Type
                                </label>
                                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                                    {[
                                        "Homework / Practice",
                                        "Quiz / Test",
                                        "Past Paper",
                                        "Other",
                                    ].map((type) => (
                                        <label
                                            key={type}
                                            className="flex items-center gap-2.5 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="assignmentType"
                                                value={type}
                                                checked={formData.assignmentType === type}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        assignmentType: e.target.value,
                                                    })
                                                }
                                                className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                                            />
                                            <span className="text-xs font-medium text-slate-700">
                                                {type}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-12">
                        <button
                            onClick={() => setCurrentStep(2)}
                            className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-md transition-colors"
                        >
                            Next: Instructions
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 2: INSTRUCTIONS */}
            {currentStep === 2 && (
                <div className="max-w-4xl">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-slate-900 mb-1">
                            Instructions
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Add instructions ad any specific guidelines for students.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Instructions for Students
                            </label>

                            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                                <div className="bg-slate-50/70 border-b border-slate-200 p-2.5 flex items-center gap-1.5 flex-wrap">
                                    <button type="button" className="p-1.5 hover:bg-slate-200 rounded text-slate-600">
                                        <Bold className="w-4 h-4" />
                                    </button>
                                    <button type="button" className="p-1.5 hover:bg-slate-200 rounded text-slate-600">
                                        <Italic className="w-4 h-4" />
                                    </button>
                                    <button type="button" className="p-1.5 hover:bg-slate-200 rounded text-slate-600">
                                        <Underline className="w-4 h-4" />
                                    </button>

                                    <div className="h-4 w-[1px] bg-slate-300 mx-1" />

                                    <button type="button" className="p-1.5 hover:bg-slate-200 rounded text-slate-600">
                                        <List className="w-4 h-4" />
                                    </button>
                                    <button type="button" className="p-1.5 bg-slate-200/80 rounded text-slate-800">
                                        <ListOrdered className="w-4 h-4" />
                                    </button>

                                    <div className="h-4 w-[1px] bg-slate-300 mx-1" />

                                    <button type="button" className="p-1.5 hover:bg-slate-200 rounded text-slate-600">
                                        <Link2 className="w-4 h-4" />
                                    </button>
                                    <button type="button" className="p-1.5 hover:bg-slate-200 rounded text-slate-600">
                                        <ImageIcon className="w-4 h-4" />
                                    </button>
                                    <button type="button" className="p-1.5 hover:bg-slate-200 rounded text-slate-600">
                                        <Code className="w-4 h-4" />
                                    </button>
                                    <button type="button" className="p-1.5 hover:bg-slate-200 rounded text-slate-600">
                                        <Paperclip className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="relative p-4">
                                    <textarea
                                        rows={8}
                                        maxLength={1000}
                                        value={formData.instructions}
                                        onChange={(e) =>
                                            setFormData({ ...formData, instructions: e.target.value })
                                        }
                                        className="w-full focus:outline-none text-slate-700 text-sm leading-relaxed resize-none bg-transparent"
                                    />
                                    <span className="absolute bottom-3 right-3 text-xs text-slate-400 font-medium">
                                        {formData.instructions.length}/1000
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 pt-2">
                            <h3 className="text-base font-bold text-slate-900">
                                Attachments /Reference{" "}
                                <span className="text-slate-400 font-normal text-sm">
                                    (Optional)
                                </span>
                            </h3>

                            <div>
                                <label className="inline-flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors">
                                    <Plus className="w-3.5 h-3.5 text-blue-600" />
                                    Upload File
                                    <input type="file" className="hidden" />
                                </label>
                                <p className="text-slate-400 text-xs mt-2">
                                    You can upload reference files or additional resources.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-12">
                        <button
                            onClick={() => setCurrentStep(1)}
                            className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg shadow-sm transition-colors"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => setCurrentStep(3)}
                            className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white font-medium text-sm px-6 py-2.5 rounded-lg shadow-md transition-colors"
                        >
                            Next
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 3: RESOURCES */}
            {currentStep === 3 && (
                <div className="max-w-4xl">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-slate-900 mb-1">
                            Resources
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Add resources and materials for your assignment.
                        </p>
                    </div>

                    {/* Content placeholder - you can customize this */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <p className="text-slate-400 text-center py-12">
                            Add your resources content here...
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-12">
                        <button
                            onClick={() => setCurrentStep(2)}
                            className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg shadow-sm transition-colors"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => setCurrentStep(4)}
                            className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white font-medium text-sm px-6 py-2.5 rounded-lg shadow-md transition-colors"
                        >
                            Next: Settings
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 4: SETTINGS */}
            {currentStep === 4 && (
                <div className="max-w-3xl space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-1">
                            Assignment Settings
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Set submission preferences and grading options.
                        </p>
                    </div>

                    {/* Submission Settings Card */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
                        <h3 className="text-base font-bold text-slate-900">Submission Settings</h3>

                        <div className="space-y-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <label className="text-sm font-medium text-slate-700 w-36">
                                    Submission type
                                </label>
                                <div className="relative flex-1 max-w-xs">
                                    <select
                                        defaultValue="File Upload (PDF)"
                                        className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-9 shadow-sm"
                                    >
                                        <option value="File Upload (PDF)">File Upload (PDF)</option>
                                        <option value="Online Text Entry">Online Text Entry</option>
                                        <option value="URL Submission">URL Submission</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 sm:ml-36">
                                Students will upload a PDF file.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-4 h-4 mt-0.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                />
                                <div>
                                    <p className="text-sm font-medium text-slate-900">
                                        Allow resubmission
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Students can resubmit after feedback
                                    </p>
                                </div>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 mt-0.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                />
                                <div>
                                    <p className="text-sm font-medium text-slate-900">
                                        Allow multiple file upload
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Students can upload more than one file
                                    </p>
                                </div>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 mt-0.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                />
                                <div>
                                    <p className="text-sm font-medium text-slate-900">
                                        Require originality check
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Check for plagiarism (if enabled by admin)
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Grading Card */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                        <h3 className="text-base font-bold text-slate-900">Grading</h3>

                        <div className="flex items-center gap-8 flex-wrap">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Total Points
                                </label>
                                <input
                                    type="number"
                                    defaultValue="20"
                                    className="w-24 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Rubric{" "}
                                    <span className="text-slate-400 font-normal">(Optional)</span>
                                </label>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-blue-600 text-xs font-semibold px-3 py-2 rounded-lg shadow-sm transition-colors"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Add Rubric
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-12">
                        <button
                            onClick={() => setCurrentStep(3)}
                            className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg shadow-sm transition-colors"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => setCurrentStep(5)}
                            className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white font-medium text-sm px-6 py-2.5 rounded-lg shadow-md transition-colors"
                        >
                            Next: Review
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 5: REVIEW */}
            {currentStep === 5 && (
                <div className="max-w-4xl mx-auto space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Review & Confirm</h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Review all details before publishing the assignment.
                        </p>
                    </div>

                    {/* Details Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            {/* Field 1 */}
                            <div className="pb-4 border-b border-slate-100">
                                <p className="text-sm font-medium text-slate-500">Course / Subject</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    {formData.courseSubject}
                                </p>
                            </div>

                            {/* Field 2 */}
                            <div className="pb-4 border-b border-slate-100">
                                <p className="text-sm font-medium text-slate-500">Group</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    {formData.groupCohort}
                                </p>
                            </div>

                            {/* Field 3 */}
                            <div className="pb-4 border-b border-slate-100">
                                <p className="text-sm font-medium text-slate-500">Title</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    {formData.assignmentTitle}
                                </p>
                            </div>

                            {/* Field 4 */}
                            <div className="pb-4 border-b border-slate-100">
                                <p className="text-sm font-medium text-slate-500">Due Date</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    May 16, 2026 at 11:59 PM
                                </p>
                            </div>

                            {/* Field 5 */}
                            <div className="pb-4 border-b border-slate-100">
                                <p className="text-sm font-medium text-slate-500">Instructions</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    5 instruction points
                                </p>
                            </div>

                            {/* Field 6 */}
                            <div className="pb-4 border-b border-slate-100">
                                <p className="text-sm font-medium text-slate-500">Submission Type</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    File Upload (PDF)
                                </p>
                            </div>

                            {/* Field 7 */}
                            <div className="pb-4 border-b border-slate-100">
                                <p className="text-sm font-medium text-slate-500">Resubmission</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    Allowed
                                </p>
                            </div>

                            {/* Field 8 */}
                            <div className="pb-4 border-b border-slate-100">
                                <p className="text-sm font-medium text-slate-500">Total Points</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    20
                                </p>
                            </div>

                            {/* Field 9 */}
                            <div className="pb-4 md:pb-0">
                                <p className="text-sm font-medium text-slate-500">Attachments</p>
                                <p className="text-base font-medium text-slate-800 mt-1">
                                    2 files uploaded
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end space-x-4 pt-4">
                        <button
                            type="button"
                            onClick={() => setCurrentStep(4)}
                            className="px-6 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={handleConfirm}
                            className="px-6 py-2.5 rounded-xl bg-[#2A35AF] text-white font-medium hover:bg-[#232c94] transition-colors shadow-md"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 6: SUCCESS */}
            {currentStep === 6 && (
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="w-full max-w-xl flex flex-col items-center text-center">
                        {/* Success Icon */}
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                            <div className="w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-emerald-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                            Assignment Created!
                        </h1>
                        <p className="text-slate-500 text-sm mt-1 mb-8">
                            Your assignment has been created successfully.
                        </p>

                        {/* Summary Card */}
                        <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 mb-8 text-left flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                                    {formData.assignmentTitle}
                                </h2>
                                <p className="text-sm font-medium text-slate-500 mt-1">
                                    {formData.courseSubject} • {formData.groupCohort}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    Due: May 18, 2026 at 11:59 PM
                                </p>
                            </div>
                            <Link
                                href="/mentor/assignments"
                                className="px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shrink-0 ml-4"
                            >
                                View Assignment
                            </Link>
                        </div>

                        {/* Primary Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                            <button
                                onClick={() => setCurrentStep(1)}
                                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2A35AF] text-white text-sm font-medium hover:bg-[#232c94] transition-colors shadow-md"
                            >
                                Create another Assignment
                            </button>
                            <Link
                                href="/mentor/dashboard"
                                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-700 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm text-center"
                            >
                                Back to Assignments
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}