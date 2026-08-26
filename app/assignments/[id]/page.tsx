'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  XCircle,
  UploadCloud,
  Check,
  AlertCircle,
} from 'lucide-react';

interface Step {
  id: string;
  text: string;
  completed: boolean;
}

interface Criteria {
  title: string;
  description: string;
  passed: boolean;
}

interface AssignmentDetail {
  id: string;
  title: string;
  status: 'Needs Revision' | 'Completed' | 'In Review' | 'Submitted';
  track: string;
  module: string;
  estimatedTime: string;
  deadline: string;
  description: string;
  steps: Step[];
  deliverables: string[];
  submissionCriteria: Criteria[];
}

const sampleAssignment: AssignmentDetail = {
  id: '1',
  title: "Multi-variable Calculus: Applications of Green's Theorem",
  status: 'Needs Revision',
  track: 'Mathematics Advanced Track',
  module: 'Module 4: Vector Calculus',
  estimatedTime: '2-3h',
  deadline: 'July 25,2026',
  description:
    'In this problem set, you are required to rigorously prove the 2D circulation-curl form of Green\'s Theorem for a non-simply connected region. Specifically, calculate the outward flux of the vector field F(x,y) = (y - cos(y))i + x sin(y)j across the boundary of the annulus defined by 1 ≤ x² + y² ≤ 9.\n\nYour solution must demonstrate a clear transition from double integration over the region to the line integral along the oriented boundaries. High-precision calculations and clear notation are mandatory.',
  steps: [
    { id: 's1', text: 'Parametrize the inner and outer boundaries (C₁ and C₂).', completed: true },
    { id: 's2', text: 'Compute the partial derivatives for the curl components.', completed: true },
    { id: 's3', text: 'Evaluate the double integral using polar coordinates.', completed: false },
    { id: 's4', text: 'Verify results via Desmos or MATLAB visualization.', completed: false },
  ],
  deliverables: [
    'Rigorous Proof of Central Limit Theorem',
    'Rigorous Proof of Central Limit Theorem',
    'Statistical Analysis Report',
    'Reference Bibliography',
  ],
  submissionCriteria: [
    { title: 'Mathematical Rigor', description: 'Proofs must use formal measure-theoretic notation and definitions.', passed: true },
    { title: 'Notation Consistency', description: 'Symbols for σ-algebras and measurable spaces must follow class standards.', passed: true },
    { title: 'Proof Completeness', description: 'All lemmas must be fully stated and justified within the document.', passed: false },
  ],
};

export default function AssignmentDetailPage() {
  const router = useRouter();
  const [steps, setSteps] = useState<Step[]>(sampleAssignment.steps);
  const [linkInput, setLinkInput] = useState('');

  // Modal States
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleStep = (id: string) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, completed: !step.completed } : step
      )
    );
  };

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
    // Auto-close success popup after 2.5s
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50/30 p-6 md:p-10 font-sans text-gray-800 relative">
      {/* Top Back Navigation */}
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-gray-900 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </button>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Header */}
          <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-500 mb-4">
              {sampleAssignment.status}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {sampleAssignment.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium mb-4">
              <span>{sampleAssignment.track}</span>
              <span>•</span>
              <span>{sampleAssignment.module}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {sampleAssignment.estimatedTime}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 pt-2 border-t border-gray-100">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Suggested deadline: {sampleAssignment.deadline}</span>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Requirements</h2>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
              <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                {sampleAssignment.description}
              </p>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h3 className="text-[11px] font-bold text-blue-600 tracking-wider uppercase mb-3">
                Steps to take:
              </h3>
              <div className="space-y-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => toggleStep(step.id)}
                    className="w-full text-left flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition group"
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center transition ${step.completed
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300'
                        }`}
                    >
                      {step.completed && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span
                      className={`text-xs font-medium ${step.completed ? 'line-through text-gray-400' : 'text-gray-700'
                        }`}
                    >
                      {step.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Deliverables</h3>
              <div className="space-y-2.5">
                {sampleAssignment.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-xs font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submission Criteria */}
          <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Submission Criteria
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500 pb-2">
                    <th className="pb-3 w-1/4">Criteria</th>
                    <th className="pb-3 w-2/4">Description</th>
                    <th className="pb-3 w-1/4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {sampleAssignment.submissionCriteria.map((item, idx) => (
                    <tr key={idx}>
                      <td className="py-3 font-bold text-gray-900">{item.title}</td>
                      <td className="py-3 text-gray-500 pr-4">{item.description}</td>
                      <td className="py-3 text-center">
                        {item.passed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 inline-block" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500 inline-block" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Submission Panel */}
        <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm sticky top-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Assignment Submission
          </h2>

          <div className="space-y-5">
            <textarea
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              placeholder="Share your assignment link( Google Drive,Desmos,...)"
              className="w-full h-32 p-4 text-xs border border-gray-200 rounded-2xl bg-white outline-none focus:ring-2 focus:ring-blue-300 resize-none placeholder:text-gray-400"
            />

            <div className="text-center font-bold text-sm text-gray-800">OR</div>

            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center cursor-pointer hover:border-blue-300 transition bg-gray-50/50">
              <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-xs font-bold text-gray-700">Upload File</p>
              <p className="text-[10px] text-gray-400 mt-1">
                Supported formats: PDF, PNG, JPG
              </p>
            </div>

            <button
              onClick={() => setShowConfirmModal(true)}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md transition"
            >
              Submit
            </button>

            <p className="text-[11px] text-gray-400 text-center">
              Your Assignment will be reviewed by a mentor.
            </p>
          </div>
        </div>
      </div>

      {/* POPUP 1: Confirm Submission Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl transition-all">
            <div className="flex items-start gap-4">
              {/* Blue Exclamation Icon */}
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <AlertCircle className="w-10 h-10 stroke-[1.75]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  Confirm Submission?
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-snug">
                  You are about to submit this file. No changes can be made after submitting
                </p>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-6 py-2 bg-blue-50 text-blue-900 text-sm font-medium rounded-lg hover:bg-blue-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmit}
                className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* POPUP 2: Success Confirmation Modal */}
      {showSuccessModal && (
        <div
          onClick={() => setShowSuccessModal(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center space-y-6 transition-all"
          >
            {/* Green Check Icon Circle */}
            <div className="w-24 h-24 rounded-full border-4 border-emerald-500 text-emerald-500 flex items-center justify-center mx-auto">
              <Check className="w-14 h-14 stroke-[2.5]" />
            </div>

            <hr className="border-gray-100 my-4" />

            <h3 className="text-2xl font-bold text-gray-900">
              Submission confirmed!
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}