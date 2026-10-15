'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  XCircle,
  Info,
  Smile,
  MoreVertical,
  ThumbsUp,
  Heart,
  Laugh,
} from 'lucide-react';
import StepCheckbox from './components/StepCheckbox';
import SubmissionPanel from './components/SubmissionPanel';

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

interface Comment {
  id: string;
  author: string;
  avatarLetter: string;
  tag: string;
  time: string;
  content: string;
  reactions: {
    type: "like" | "heart" | "laugh";
    count: number;
  }[];
}

const sampleAssignment: AssignmentDetail = {
  id: '1',
  title: "Multi-variable Calculus: Applications of Green's Theorem",
  status: 'Needs Revision',
  track: 'Mathematics Advanced Track',
  module: 'Module 4: Vector Calculus',
  estimatedTime: '2-3h',
  deadline: 'July 25, 2026',
  description:
    'In this problem set, you are required to rigorously prove the 2D circulation-curl form of Green\'s Theorem for a non-simply connected region. Specifically, calculate the outward flux of the vector field F(x,y) = (y - cos(y))i + x sin(y)j across the boundary of the annulus defined by 1 ≤ x² + y² ≤ 9.\n\nYour solution must demonstrate a clear transition from double integration over the region to the line integral along the oriented boundaries. High-precision calculations and clear notation are mandatory.',
  steps: [
    { id: '1', text: 'Read the problem statement carefully', completed: true },
    { id: '2', text: 'Identify the vector field components', completed: true },
    { id: '3', text: 'Set up the double integral', completed: false },
    { id: '4', text: 'Calculate the line integral', completed: false },
    { id: '5', text: 'Verify your solution', completed: false },
  ],
  deliverables: [
    'A complete written proof (PDF format)',
    'All intermediate calculations',
    'Final numerical answer with units',
  ],
  submissionCriteria: [
    {
      title: 'Mathematical Rigor',
      description: 'All steps must be clearly justified with proper notation',
      passed: true,
    },
    {
      title: 'Calculation Accuracy',
      description: 'Final answer must be within 0.01 of expected value',
      passed: false,
    },
    {
      title: 'Formatting',
      description: 'Submit as PDF with proper equations formatting',
      passed: true,
    },
  ],
};

const mockComments: Comment[] = [
  {
    id: "1",
    author: "Ariana Grande",
    avatarLetter: "A",
    tag: "S5 • Senior",
    time: "May 28, 4:12 PM",
    content: "Does anyone know how to approach question 4? I'm a bit confused about the cyclic quadrilateral part.",
    reactions: [
      { type: "heart", count: 3 },
      { type: "like", count: 5 },
    ],
  },
  {
    id: "2",
    author: "Eric M.",
    avatarLetter: "E",
    tag: "S5 • Senior",
    time: "May 28, 5:03 PM",
    content: "I used the angle theorem from chapter 2. It helped a lot!",
    reactions: [
      { type: "like", count: 2 },
      { type: "laugh", count: 2 },
    ],
  },
  {
    id: "3",
    author: "Uwitonze Emma",
    avatarLetter: "U",
    tag: "S4 • Senior",
    time: "May 28, 6:20 PM",
    content: "Same! But I got a different answer, can we compare?",
    reactions: [
      { type: "like", count: 1 },
    ],
  },
];

export default function AssignmentDetailPage() {
  const router = useRouter();
  const [assignment, setAssignment] = useState<AssignmentDetail>(sampleAssignment);
  const [activeTab, setActiveTab] = useState<"assignment" | "discussion" | "results">("assignment");
  const [newComment, setNewComment] = useState("");

  const toggleStep = (stepId: string) => {
    setAssignment((prev) => ({
      ...prev,
      steps: prev.steps.map((s) =>
        s.id === stepId ? { ...s, completed: !s.completed } : s
      ),
    }));
  };

  return (
    <div
      className="min-h-screen p-4 md:p-8"
      style={{ backgroundColor: "#E6EBF2" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Go Back Link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </button>

        {/* Assignment Title & Metadata */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {assignment.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Due {assignment.deadline} • 11:59 PM</span>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
              {assignment.status}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-300/70 mb-6">
          <nav className="-mb-px flex gap-8">
            <button
              onClick={() => setActiveTab("assignment")}
              className={`pb-3 text-base font-semibold transition-colors relative cursor-pointer ${activeTab === "assignment"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Assignment
              {activeTab === "assignment" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("discussion")}
              className={`pb-3 text-base font-semibold transition-colors relative cursor-pointer ${activeTab === "discussion"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Discussion
              {activeTab === "discussion" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("results")}
              className={`pb-3 text-base font-semibold transition-colors relative cursor-pointer ${activeTab === "results"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Results
              {activeTab === "results" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          </nav>
        </div>

        {/* Assignment Tab Content */}
        {activeTab === "assignment" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Assignment Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description Card */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {assignment.description}
                </p>
              </div>

              {/* Track & Module Info */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                      Track
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {assignment.track}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                      Module
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {assignment.module}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                      Estimated Time
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {assignment.estimatedTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                      Deadline
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {assignment.deadline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps to Complete */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Steps to Complete
                </h2>
                <div className="space-y-3">
                  {assignment.steps.map((step) => (
                    <StepCheckbox
                      key={step.id}
                      step={step}
                      onToggle={toggleStep}
                    />
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Deliverables</h2>
                <ul className="space-y-2">
                  {assignment.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Submission Panel */}
            <div className="lg:col-span-1">
              <SubmissionPanel />
            </div>
          </div>
        )}

        {/* Discussion Tab Content */}
        {activeTab === "discussion" && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Info Banner Alert */}
            <div className="flex items-center gap-3 bg-[#EEF4FF] border border-[#D0E1FF] text-[#2563EB] px-4 py-3 rounded-xl text-sm font-medium shadow-sm">
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Info className="w-3.5 h-3.5" />
              </div>
              <span>
                This is a general discussion for this assignment. Be respectful and help each other!
              </span>
            </div>

            {/* Comment Input Bar Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1E1B4B] text-white flex items-center justify-center font-bold text-sm shrink-0">
                B
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-gray-200 rounded-full py-2.5 pl-4 pr-10 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <button
                type="button"
                className="bg-[#2B36C8] hover:bg-blue-800 text-white font-medium text-xs px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Post
              </button>
            </div>

            {/* Comments Feed List */}
            <div className="space-y-4">
              {mockComments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80 relative"
                >
                  {/* Card Header: Avatar, Name, Badge, Date, Options */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm">
                        {comment.avatarLetter}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">
                            {comment.author}
                          </span>
                          <span className="bg-[#EFF6FF] text-[#3B82F6] text-[11px] font-semibold px-2 py-0.5 rounded-md">
                            {comment.tag}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 font-medium mt-0.5">
                          {comment.time}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Comment Content */}
                  <p className="text-sm text-gray-700 mt-4 leading-relaxed font-normal">
                    {comment.content}
                  </p>

                  {/* Reaction Badges & Reply Action */}
                  <div className="flex items-center gap-2 mt-4">
                    {comment.reactions.map((react, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 bg-[#F1F5F9] border border-gray-200/60 rounded-full px-2.5 py-1 text-xs font-semibold text-gray-700"
                      >
                        {react.type === "heart" && (
                          <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white">
                            <Heart className="w-2.5 h-2.5 fill-current" />
                          </div>
                        )}
                        {react.type === "like" && (
                          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <ThumbsUp className="w-2.5 h-2.5 fill-current" />
                          </div>
                        )}
                        {react.type === "laugh" && (
                          <div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-white">
                            <Laugh className="w-2.5 h-2.5 fill-current" />
                          </div>
                        )}
                        <span>{react.count}</span>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="text-xs font-semibold text-gray-500 hover:text-gray-800 ml-1 transition-colors cursor-pointer"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results Tab Content */}
        {activeTab === "results" && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Score Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Your Score</h2>
                <div className="text-3xl font-bold text-blue-600">18/20</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">You scored 90% on this assignment</p>
            </div>

            {/* Submission Criteria Results */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Evaluation Criteria</h2>
              <div className="space-y-4">
                {assignment.submissionCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    {criteria.passed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900">{criteria.title}</h3>
                      <p className="text-xs text-gray-600 mt-1">{criteria.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Instructor Feedback</h2>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Excellent work on the overall proof structure! Your approach to the double integral was correct.
                  However, there was a minor calculation error in step 3. Please review the orientation of the boundary
                  curves. With this correction, your solution would be perfect.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-semibold">Dr. Johnson</span>
                  <span>•</span>
                  <span>May 30, 2026</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
