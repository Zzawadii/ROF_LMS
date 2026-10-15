"use client";

import React, { useState } from "react";
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
    UploadCloud,
    Check,
} from "lucide-react";

export default function AssignmentWizard() {
    const [currentStep, setCurrentStep] = useState<number>(1);

    // Consolidated Form State across all wizard steps
    const [formData, setFormData] = useState({
        // Step 1: Basic Info
        assignmentTitle: "Circle Geometry Problem Set 4",
        courseSubject: "Geometry",
        description:
            "Problems on circle theorems, angle properties, and cyclic quadrilaterals.",
        groupCohort: "G-12 (28 students)",
        otherGroups: "",
        assignmentType: "Homework / Practice",

        // Step 2: Instructions
        instructions:
            "Attempt all questions.\nShow all steps clearly.\nWrite your final answers in the boxes provided.\nUpload your work as a single PDF file.\nLate submissions may not be accepted.",

        // Step 3: Resources
        attachments: [] as string[],

        // Step 4: Settings
        submissionType: "File Upload (PDF)",
        allowResubmission: true,
        allowMultipleFiles: false,
        requireOriginalityCheck: false,
        totalPoints: "20",
        rubricAdded: false,
    });

    const steps = [
        { id: 1, name: "Basic Info" },
        { id: 2, name: "Instructions" },
        { id: 3, name: "Resources" },
        { id: 4, name: "Settings" },
        { id: 5, name: "Review" },
    ];

    const handleNext = () => {
        if (currentStep < 5) setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    };

    return (
        <div className="min-h-screen bg-[#E6EBF2] p-6 sm:p-10 text-slate-800">
            <div className="max-w-5xl mx-auto">
                {/* Header Back Button */}
                <div className="flex items-center gap-2 mb-6">
                    <button
                        onClick={handleBack}
                        className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-semibold"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Create Assignment</span>
                    </button>
                </div>

                {/* Progress Stepper Bar */}
                <div className="bg-white rounded-2xl p-4 mb-8 flex items-center justify-between shadow-sm border border-slate-200">
                    <div className="flex items-center gap-6 overflow-x-auto">
                        {steps.map((step) => {
                            const isActive = step.id === currentStep;
                            const isCompleted = step.id < currentStep;

                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setCurrentStep(step.id)}
                                    className="flex items-center gap-2 whitespace-nowrap"
                                >
                                    <span
                                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${isActive
                                            ? "bg-blue-600 text-white"
                                            : isCompleted
                                                ? "bg-blue-100 text-blue-700"
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
                                </button>
                            );
                        })}
                    </div>
                    <span className="text-sm font-medium text-slate-500 hidden sm:inline-block">
                        Step {currentStep} of {steps.length}
                    </span>
                </div>

                {/* STEP 1: BASIC INFO */}
                {currentStep === 1 && (
                    <div className="space-y-6">
                        <div>
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
                                            setFormData({
                                                ...formData,
                                                assignmentTitle: e.target.value,
                                            })
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
                                                setFormData({
                                                    ...formData,
                                                    courseSubject: e.target.value,
                                                })
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
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setFormData({ ...formData, groupCohort: "" })
                                                        }
                                                        className="hover:text-blue-800"
                                                    >
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
                    </div>
                )}

                {/* STEP 2: INSTRUCTIONS */}
                {currentStep === 2 && (
                    <div className="max-w-4xl space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-1">
                                Instructions
                            </h2>
                            <p className="text-slate-500 text-sm">
                                Add instructions and any specific guidelines for students.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Instructions for Students
                                </label>

                                <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                                    <div className="bg-slate-50/70 border-b border-slate-200 p-2.5 flex items-center gap-1.5 flex-wrap">
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-slate-200 rounded text-slate-600"
                                        >
                                            <Bold className="w-4 h-4" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-slate-200 rounded text-slate-600"
                                        >
                                            <Italic className="w-4 h-4" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-slate-200 rounded text-slate-600"
                                        >
                                            <Underline className="w-4 h-4" />
                                        </button>

                                        <div className="h-4 w-[1px] bg-slate-300 mx-1" />

                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-slate-200 rounded text-slate-600"
                                        >
                                            <List className="w-4 h-4" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 bg-slate-200/80 rounded text-slate-800"
                                        >
                                            <ListOrdered className="w-4 h-4" />
                                        </button>

                                        <div className="h-4 w-[1px] bg-slate-300 mx-1" />

                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-slate-200 rounded text-slate-600"
                                        >
                                            <Link2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-slate-200 rounded text-slate-600"
                                        >
                                            <ImageIcon className="w-4 h-4" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-slate-200 rounded text-slate-600"
                                        >
                                            <Code className="w-4 h-4" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-slate-200 rounded text-slate-600"
                                        >
                                            <Paperclip className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="relative p-4">
                                        <textarea
                                            rows={8}
                                            maxLength={1000}
                                            value={formData.instructions}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    instructions: e.target.value,
                                                })
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
                                    Attachments / Reference{" "}
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
                    </div>
                )}

                {/* STEP 3: RESOURCES */}
                {currentStep === 3 && (
                    <div className="max-w-4xl space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-1">
                                Resources
                            </h2>
                            <p className="text-slate-500 text-sm">
                                Attach supplementary learning material or templates.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center shadow-sm">
                            <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                            <p className="text-sm font-semibold text-slate-700 mb-1">
                                Drag and drop resource files here, or click to browse
                            </p>
                            <p className="text-xs text-slate-400">
                                Supports PDF, DOCX, PPTX, or ZIP files up to 25MB.
                            </p>
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

                        <p className="text-sm font-semibold text-slate-800">
                            Instructions for Students
                        </p>

                        {/* Submission Settings Card */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
                            <h3 className="text-base font-bold text-slate-900">
                                Submission Settings
                            </h3>

                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <label className="text-sm font-medium text-slate-700 w-36">
                                        Submission type
                                    </label>
                                    <div className="relative flex-1 max-w-xs">
                                        <select
                                            value={formData.submissionType}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    submissionType: e.target.value,
                                                })
                                            }
                                            className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-9 shadow-sm"
                                        >
                                            <option value="File Upload (PDF)">
                                                File Upload (PDF)
                                            </option>
                                            <option value="Online Text Entry">
                                                Online Text Entry
                                            </option>
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
                                        checked={formData.allowResubmission}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                allowResubmission: e.target.checked,
                                            })
                                        }
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
                                        checked={formData.allowMultipleFiles}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                allowMultipleFiles: e.target.checked,
                                            })
                                        }
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
                                        checked={formData.requireOriginalityCheck}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                requireOriginalityCheck: e.target.checked,
                                            })
                                        }
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
                                        value={formData.totalPoints}
                                        onChange={(e) =>
                                            setFormData({ ...formData, totalPoints: e.target.value })
                                        }
                                        className="w-24 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Rubric <span className="text-slate-400 font-normal">(Optional)</span>
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFormData({
                                                ...formData,
                                                rubricAdded: !formData.rubricAdded,
                                            })
                                        }
                                        className="inline-flex items-center gap-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-blue-600 text-xs font-semibold px-3 py-2 rounded-lg shadow-sm transition-colors"
                                    >
                                        <Plus className="w-3.5 h-3.5" />
                                        {formData.rubricAdded ? "Rubric Added" : "Add Rubric"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 5: REVIEW */}
                {currentStep === 5 && (
                    <div className="max-w-3xl space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-1">
                                Review & Publish
                            </h2>
                            <p className="text-slate-500 text-sm">
                                Verify details before publishing your assignment.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                            <div>
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                    Title
                                </span>
                                <p className="text-lg font-bold text-slate-900">
                                    {formData.assignmentTitle}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-3">
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                        Course / Subject
                                    </span>
                                    <p className="text-sm font-medium text-slate-800">
                                        {formData.courseSubject}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                        Cohort
                                    </span>
                                    <p className="text-sm font-medium text-slate-800">
                                        {formData.groupCohort || "None"}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-3">
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                        Submission Type
                                    </span>
                                    <p className="text-sm font-medium text-slate-800">
                                        {formData.submissionType}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                        Total Points
                                    </span>
                                    <p className="text-sm font-medium text-slate-800">
                                        {formData.totalPoints} pts
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Global Bottom Navigation Controls */}
                <div className="flex items-center justify-end gap-3 mt-12">
                    {currentStep > 1 && (
                        <button
                            onClick={handleBack}
                            className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg shadow-sm transition-colors"
                        >
                            Back
                        </button>
                    )}

                    <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white font-medium text-sm px-6 py-2.5 rounded-lg shadow-md transition-colors"
                    >
                        {currentStep === 5 ? (
                            <>
                                Publish Assignment
                                <Check className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                Next
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}