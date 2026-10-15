'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Edit,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  Calendar,
  BarChart3
} from 'lucide-react';

export default function AssignmentDetailPage() {
  const router = useRouter();

  const assignment = {
    id: '1',
    title: 'Geometry Assignment 3',
    course: 'Geometry',
    learningCircle: 'G12',
    description: 'Solve the following geometry problems. Show all your steps and explain your reasoning.',
    dueDate: 'May 29, 2026',
    dueTime: '11:59 PM',
    totalPoints: 100,
    createdAt: 'May 20, 2026',
    status: 'Active',
  };

  const stats = {
    totalStudents: 28,
    submitted: 24,
    pending: 4,
    graded: 18,
    avgScore: 85,
  };

  return (
    <div 
      className="min-h-screen p-6 md:p-10 font-sans" 
      style={{ backgroundColor: '#E6EBF2' }}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Assignments
        </button>

        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{assignment.title}</h1>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {assignment.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Created {assignment.createdAt}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Due {assignment.dueDate} at {assignment.dueTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{stats.totalStudents} students</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href={`/mentor/assignments/${assignment.id}/submissions`}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                View Submissions
              </Link>
              <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
                <p className="text-xs text-gray-600">Total Students</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.submitted}</p>
                <p className="text-xs text-gray-600">Submitted</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
                <p className="text-xs text-gray-600">Pending</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.graded}</p>
                <p className="text-xs text-gray-600">Graded</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.avgScore}%</p>
                <p className="text-xs text-gray-600">Avg. Score</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Assignment Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {assignment.description}
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Instructions</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Read each problem carefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Show all your work and calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Submit your answers in PDF format</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Late submissions will be penalized</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Assignment Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Assignment Info</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Course</span>
                  <span className="font-semibold text-gray-900">{assignment.course}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Learning Circle</span>
                  <span className="font-semibold text-gray-900">{assignment.learningCircle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Points</span>
                  <span className="font-semibold text-gray-900">{assignment.totalPoints}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-green-600">{assignment.status}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  href={`/mentor/assignments/${assignment.id}/submissions`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Review Submissions
                </Link>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit Assignment
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-100 transition-colors">
                  <XCircle className="w-4 h-4" />
                  Delete Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
