'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Users,
  Award,
  Calendar,
  FileText,
  Folder,
  ChevronRight,
  Send,
  ChevronDown,
  Search,
  ChevronLeft,
  ArrowUp,
  ArrowRight,
  UserCheck,
  AlertTriangle,
  UserX
} from 'lucide-react';

interface StudentGrade {
  id: string;
  name: string;
  studentId: string;
  asgmt1: string;
  asgmt2: string;
  asgmt3: string;
  finalGrade: string;
  gradeColorBg: string;
  gradeColorText: string;
}

interface StatCardProps {
  title: string;
  value: string;
  badgeText: string;
  badgeSubtext: string;
}

interface Student {
  rank: number;
  name: string;
  score: string;
}

interface MetricItem {
  id: string;
  label: string;
  count: number;
  percentage: number;
  colorClass: string;
}

interface FilterCriterion {
  id: string;
  field: string;
  operator: string;
  comparison: string;
  value: string;
  unit: string;
  logic: 'OR' | 'AND';
}

interface StudentInList {
  id: string;
  name: string;
  avatar: string;
  lastParticipation: string;
  missingAssignments: number;
  grade: number;
}

const studentsData: StudentGrade[] = [
  {
    id: '1',
    name: 'Eric MUGISHA',
    studentId: '#23456',
    asgmt1: '15/20',
    asgmt2: '18/20',
    asgmt3: '-',
    finalGrade: 'A',
    gradeColorBg: 'bg-orange-100',
    gradeColorText: 'text-orange-500',
  },
  {
    id: '2',
    name: 'Ariana Grande',
    studentId: '#34534',
    asgmt1: '18/20',
    asgmt2: '17/20',
    asgmt3: '-',
    finalGrade: 'A',
    gradeColorBg: 'bg-emerald-100',
    gradeColorText: 'text-emerald-600',
  },
  {
    id: '3',
    name: 'Uwitonze Emma',
    studentId: '#98749',
    asgmt1: '-',
    asgmt2: '-',
    asgmt3: '-',
    finalGrade: '—',
    gradeColorBg: 'bg-gray-200',
    gradeColorText: 'text-gray-500',
  },
  {
    id: '4',
    name: 'Kamahoro Linda',
    studentId: '#43853',
    asgmt1: '20/20',
    asgmt2: '15/20',
    asgmt3: '-',
    finalGrade: 'A',
    gradeColorBg: 'bg-purple-100',
    gradeColorText: 'text-purple-600',
  },
];

// Top Performing Students Data
const topStudents: Student[] = [
  { rank: 1, name: 'Ariana Grande', score: '19/20' },
  { rank: 2, name: 'Eric MUGISHA', score: '18/20' },
  { rank: 3, name: 'Kamahoro Linda', score: '17/20' },
  { rank: 4, name: 'James T.', score: '16/20' },
  { rank: 5, name: 'Sarah K.', score: '15/20' },
];

// Bar Chart Mock Data
const chartData = [
  { label: '0-49', height: 'h-4' },
  { label: '50-59', height: 'h-10' },
  { label: '60-69', height: 'h-16' },
  { label: '70-79', height: 'h-32' },
  { label: '80-89', height: 'h-44' },
  { label: '90-100', height: 'h-28' },
];

// Metrics for Class Summary
const metrics: MetricItem[] = [
  {
    id: '1',
    label: 'Viewed course in the last 7 days',
    count: 20,
    percentage: 63,
    colorClass: 'bg-blue-600',
  },
  {
    id: '2',
    label: 'Submitted an assignment',
    count: 18,
    percentage: 56,
    colorClass: 'bg-blue-600',
  },
  {
    id: '3',
    label: 'Graded assignments',
    count: 16,
    percentage: 50,
    colorClass: 'bg-blue-600',
  },
  {
    id: '4',
    label: 'At risk of falling behind',
    count: 7,
    percentage: 22,
    colorClass: 'bg-amber-500',
  },
  {
    id: '5',
    label: 'Not participating',
    count: 5,
    percentage: 16,
    colorClass: 'bg-rose-500',
  },
];

const mockStudents: StudentInList[] = [
  {
    id: '1',
    name: 'Uwase Divine',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    lastParticipation: 'May 10, 2025',
    missingAssignments: 2,
    grade: 62,
  },
  {
    id: '2',
    name: 'Mugisha Yvette',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    lastParticipation: 'May 9, 2025',
    missingAssignments: 1,
    grade: 68,
  },
  {
    id: '3',
    name: 'Niyonzima Eric',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    lastParticipation: 'May 8, 2025',
    missingAssignments: 2,
    grade: 55,
  },
  {
    id: '4',
    name: 'Irakoze Joselyne',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
    lastParticipation: 'May 7, 2025',
    missingAssignments: 3,
    grade: 49,
  },
  {
    id: '5',
    name: 'Hakizimana Jean',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    lastParticipation: 'May 6, 2025',
    missingAssignments: 2,
    grade: 60,
  },
];

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ title, value, badgeText, badgeSubtext }) => (
  <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-2">
    <span className="text-sm font-medium text-slate-500">
      {title}
    </span>
    <div className="text-3xl font-extrabold text-blue-600 tracking-tight">
      {value}
    </div>
    <div className="flex items-center space-x-1 text-xs">
      <span className="flex items-center text-emerald-600 font-bold">
        <ArrowUp className="w-3 h-3 mr-0.5 stroke-[3]" />
        {badgeText}
      </span>
      <span className="text-slate-400">
        {badgeSubtext}
      </span>
    </div>
  </div>
);

export default function OverviewTab() {
  const [activeSubTab, setActiveSubTab] = useState('Overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<string>('Geometry 101');

  const tabs = ['Overview', 'Students', 'Activity', 'Grades', 'Reports', 'Outcomes'];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-900">Course Analytics</h1>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-300">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`py-3 px-1 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeSubTab === tab
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content based on active sub-tab */}
      {activeSubTab === 'Overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column Section */}
          <div className="lg:col-span-7 space-y-6">

            {/* Top Cards: Course Progress & Key Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Course Progress Card */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <h3 className="text-base font-bold text-gray-900 mb-4">Course Progress</h3>
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '66%' }}></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">66%</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">14 of 21 lessons completed</p>
                </div>
              </div>

              {/* Key Information Card */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-4">Key Information</h3>
                <div className="space-y-4">

                  {/* Mentor */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Mentor</p>
                      <p className="text-xs font-bold text-gray-800">Beata M.</p>
                    </div>
                  </div>

                  {/* Learning Circle */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Learning Circle</p>
                      <p className="text-xs font-bold text-gray-800">G12 - Geometry</p>
                    </div>
                  </div>

                  {/* Division */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Division</p>
                      <p className="text-xs font-bold text-gray-800">Senior</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-gray-900">Recent Activity</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View All</a>
              </div>
              <div className="space-y-5">

                {/* Item 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      AG
                    </div>
                    <p className="text-xs font-medium text-gray-800">
                      <span className="font-bold">Ariana Grande</span> submitted Assignment 2
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">2 hours ago</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      EM
                    </div>
                    <p className="text-xs font-medium text-gray-800">
                      <span className="font-bold">Eric Muisha</span> completed Lesson 4: Triangles
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">5 hours ago</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      KL
                    </div>
                    <p className="text-xs font-medium text-gray-800">
                      <span className="font-bold">Kamahoro Linda</span> joined the Geometry Learning circle
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">1 day ago</span>
                </div>

                {/* Item 4 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs font-bold text-gray-800">
                      New announcement: Study guide uploaded
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">2 days ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Section */}
          <div className="lg:col-span-5 space-y-6">

            {/* Upcoming Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-gray-900">Upcoming</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View All</a>
              </div>
              <div className="space-y-5">

                {/* Live Session */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Live Session</p>
                    <p className="text-xs text-gray-400 mt-0.5">Today, 4:00 PM</p>
                  </div>
                </div>

                {/* Assignment */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Assignment</p>
                    <p className="text-xs text-gray-600 mt-0.5">Geometry Assignment 3</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Due May 28, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Resources Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-gray-900">Course Resources</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View All</a>
              </div>
              <div className="space-y-4">

                {/* Books & Notes */}
                <a href="#" className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Folder className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Books & Notes</p>
                      <p className="text-xs text-gray-400">12 resources</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>

                {/* Past Papers */}
                <a href="#" className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Past Papers</p>
                      <p className="text-xs text-gray-400">8 resources</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>

                {/* Assignments */}
                <a href="#" className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Assignments</p>
                      <p className="text-xs text-gray-400">5 assignments</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grades Sub-Tab */}
      {activeSubTab === 'Grades' && (
        <div className="space-y-6">
          {/* Header Section */}
          <div>
            <p className="text-sm text-gray-500 mt-1">View and manage student grades for this course.</p>
          </div>

          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">

            {/* Dropdown Filters */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded-full py-2 pl-4 pr-9 text-xs font-medium text-gray-700 focus:outline-none cursor-pointer shadow-sm">
                  <option>All Students</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded-full py-2 pl-4 pr-9 text-xs font-medium text-gray-700 focus:outline-none cursor-pointer shadow-sm">
                  <option>All Assignments</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search activity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full py-2 pl-9 pr-4 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">

                {/* Table Header */}
                <thead>
                  <tr className="bg-[#DCE4F5] text-gray-700 text-sm font-semibold border-b border-gray-200">
                    <th className="py-4 px-6 w-1/3">Title</th>
                    <th className="py-4 px-6 text-center">Asgmt 1</th>
                    <th className="py-4 px-6 text-center">Asgmt 2</th>
                    <th className="py-4 px-6 text-center">Asgmt 3</th>
                    <th className="py-4 px-6 text-center">Final Grade</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-100 text-xs">
                  {studentsData.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">

                      {/* Student Avatar + Info */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#1B215E] flex items-center justify-center shrink-0" />
                          <div>
                            <p className="font-bold text-gray-900 text-xs">{student.name}</p>
                            <p className="text-[11px] text-gray-400">{student.studentId}</p>
                          </div>
                        </div>
                      </td>

                      {/* Assignment 1 */}
                      <td className="py-4 px-6 text-center font-medium text-gray-800">
                        {student.asgmt1}
                      </td>

                      {/* Assignment 2 */}
                      <td className="py-4 px-6 text-center font-medium text-gray-800">
                        {student.asgmt2}
                      </td>

                      {/* Assignment 3 */}
                      <td className="py-4 px-6 text-center font-medium text-gray-500">
                        {student.asgmt3}
                      </td>

                      {/* Final Grade Badge */}
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-xs ${student.gradeColorBg} ${student.gradeColorText}`}
                        >
                          {student.finalGrade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer / Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-gray-400">
              Showing 1-5 of 32 students
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-colors ${currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 hover:bg-gray-200'
                    }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, 5))}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Students Sub-Tab */}
      {activeSubTab === 'Students' && (
        <div className="space-y-6">
          {/* Section: Student Engagement + Course Selector */}
          <div className="space-y-4 pt-1">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-800">
                Student Engagement
              </h2>
              {/* Course Filter Dropdown */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-slate-500 font-medium">Course</span>
                <div className="relative">
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="appearance-none bg-white border border-slate-200 rounded-lg px-3 py-1.5 pr-7 text-xs font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="Geometry 101">Geometry 101</option>
                    <option value="Algebra 201">Algebra 201</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {/* Total Students */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 leading-tight">32</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">Total Students</div>
                </div>
              </div>

              {/* Active Students */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 leading-tight">20</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">Active Students</div>
                </div>
              </div>

              {/* At Risk */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 leading-tight">7</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">At Risk</div>
                </div>
              </div>

              {/* Not Participating */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
                  <UserX className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 leading-tight">5</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">Not Participating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Class Summary Table/Card */}
          <div className="space-y-3 pt-2">
            <h2 className="text-sm font-bold text-slate-800">
              Class Summary
            </h2>
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                <span>METRIC</span>
                <span>STUDENTS</span>
              </div>

              {/* Metrics Rows */}
              <div className="divide-y divide-slate-100/70">
                {metrics.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 items-center px-6 py-4 text-xs font-medium">
                    {/* Label */}
                    <div className="col-span-12 sm:col-span-4 text-slate-700 font-semibold mb-2 sm:mb-0">
                      {item.label}
                    </div>

                    {/* Progress Bar Container */}
                    <div className="col-span-9 sm:col-span-6 pr-4">
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${item.colorClass}`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Student Count & Percentage */}
                    <div className="col-span-3 sm:col-span-2 text-right text-slate-500 font-semibold">
                      {item.count} <span className="text-slate-400 font-normal">({item.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Link
              href="/mentor/courses/studentlist"
              className="inline-block bg-white border border-slate-200 text-blue-600 text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
            >
              View Student List
            </Link>
          </div>
        </div>
      )}

      {/* Reports Sub-Tab */}
      {activeSubTab === 'Reports' && (
        <div className="space-y-6">
          {/* Header Section */}
          <div>
            <p className="text-sm text-slate-500">
              Detailed reports and insights for your course.
            </p>
          </div>

          {/* Filter Controls Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            {/* Dropdowns */}
            <div className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-1">
                  Report Type
                </span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                    <option>Performance Overview</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="relative mt-5">
                  <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                    <option>All Assignments</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Date Range Picker Badge */}
            <div className="self-end sm:self-center">
              <button className="flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                <span>May 1, 2026 – May 28, 2026</span>
                <Calendar className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>

          {/* Summary Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Average Score"
              value="76%"
              badgeText="12%"
              badgeSubtext="Compared to last month"
            />
            <StatCard
              title="Submission Rate"
              value="75%"
              badgeText="8%"
              badgeSubtext="24 of 32 students"
            />
            <StatCard
              title="Pass Rate"
              value="69%"
              badgeText="10%"
              badgeSubtext="22 of 32 students"
            />
          </div>

          {/* Lower Grid: Chart + Leaderboard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Score Distribution Chart Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
              <h2 className="text-base font-bold tracking-wide text-slate-800 uppercase mb-6">
                Score Distribution
              </h2>
              {/* Chart Area */}
              <div className="relative pl-8 pr-4 pb-6 pt-4">
                {/* Y-Axis Grid Lines & Labels */}
                <div className="absolute inset-0 pl-8 flex flex-col justify-between text-xs text-slate-400 pointer-events-none">
                  <div className="border-b border-slate-100 pb-1 flex items-center">
                    <span className="-ml-6 absolute">15</span>
                  </div>
                  <div className="border-b border-slate-100 pb-1 flex items-center">
                    <span className="-ml-6 absolute">10</span>
                  </div>
                  <div className="border-b border-slate-100 pb-1 flex items-center">
                    <span className="-ml-6 absolute">5</span>
                  </div>
                  <div className="border-b border-slate-200 pb-1 flex items-center">
                    <span className="-ml-6 absolute">0</span>
                  </div>
                </div>

                {/* Bar Columns Container */}
                <div className="relative h-52 flex items-end justify-between px-6 z-10">
                  {chartData.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center group cursor-pointer">
                      <div
                        className={`w-8 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-md transition-all duration-300 group-hover:brightness-110 ${item.height}`}
                      />
                    </div>
                  ))}
                </div>

                {/* X-Axis Labels */}
                <div className="flex justify-between px-4 pt-4 text-xs font-semibold text-slate-400 border-t border-slate-200">
                  {chartData.map((item, idx) => (
                    <span key={idx} className="w-8 text-center">{item.label}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Performing Students Leaderboard */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h2 className="text-sm font-bold tracking-wider text-slate-800 uppercase">
                    Top Performing Students
                  </h2>
                  <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Score
                  </span>
                </div>
                {/* Student Rows */}
                <div className="divide-y divide-slate-50">
                  {topStudents.map((student) => (
                    <div
                      key={student.rank}
                      className="flex items-center justify-between py-3.5 text-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-semibold text-slate-400 w-4">
                          {student.rank}.
                        </span>
                        <span className="font-semibold text-slate-800">
                          {student.name}
                        </span>
                      </div>
                      <span className="font-bold text-slate-800">
                        {student.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leaderboard Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  Showing top 5 of 32 ranked
                </span>
                <button className="flex items-center text-blue-600 font-semibold hover:underline">
                  View full list
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {!['Overview', 'Students', 'Grades', 'Reports'].includes(activeSubTab) && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeSubTab}</h2>
          <p className="text-gray-600">
            {activeSubTab} content will be displayed here.
          </p>
        </div>
      )}
    </div>
  );
}

