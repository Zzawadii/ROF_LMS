'use client';

import React from 'react';
import {
  Users,
  FileText,
  BookOpen,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Award,
  Activity
} from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

interface RecentActivity {
  id: string;
  student: string;
  action: string;
  assignment: string;
  time: string;
  status: 'submitted' | 'completed' | 'pending';
}

const stats: StatCard[] = [
  {
    title: 'Total Students',
    value: '156',
    change: '+12 this month',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-blue-500',
  },
  {
    title: 'Active Assignments',
    value: '24',
    change: '8 due this week',
    icon: <FileText className="w-6 h-6" />,
    color: 'bg-purple-500',
  },
  {
    title: 'Courses',
    value: '8',
    change: '3 in progress',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-emerald-500',
  },
  {
    title: 'Avg. Performance',
    value: '87%',
    change: '+5% from last month',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-amber-500',
  },
];

const recentActivity: RecentActivity[] = [
  {
    id: '1',
    student: 'Hope Zawadi',
    action: 'submitted',
    assignment: 'Geometry Assignment 3',
    time: '2 hours ago',
    status: 'submitted',
  },
  {
    id: '2',
    student: 'Eric Mugisha',
    action: 'completed',
    assignment: 'Algebra Problem Set 2',
    time: '5 hours ago',
    status: 'completed',
  },
  {
    id: '3',
    student: 'Sarah Umutoni',
    action: 'submitted',
    assignment: 'Calculus Workshop',
    time: '1 day ago',
    status: 'submitted',
  },
  {
    id: '4',
    student: 'James Nkurunziza',
    action: 'late submission',
    assignment: 'Trigonometry Review',
    time: '1 day ago',
    status: 'pending',
  },
  {
    id: '5',
    student: 'Grace Uwase',
    action: 'submitted',
    assignment: 'Number Theory Challenge',
    time: '2 days ago',
    status: 'submitted',
  },
];

const upcomingDeadlines = [
  {
    id: '1',
    title: 'Geometry Assignment 3',
    course: 'Geometry',
    dueDate: 'May 29, 2026',
    submissions: '24/28',
  },
  {
    id: '2',
    title: 'Algebra Problem Set 2',
    course: 'Algebra',
    dueDate: 'June 2, 2026',
    submissions: '18/28',
  },
  {
    id: '3',
    title: 'Calculus Workshop',
    course: 'Calculus',
    dueDate: 'June 5, 2026',
    submissions: '12/30',
  },
];

export default function MentorDashboard() {
  return (
    <div
      className="min-h-screen p-6 md:p-10 font-sans text-slate-800"
      style={{ backgroundColor: '#E6EBF2' }}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-600 mt-1">Welcome back! Here's what's happening with your students.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
                </div>
                <div className={`${stat.color} text-white p-3 rounded-xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.status === 'completed'
                      ? 'bg-green-100 text-green-600'
                      : activity.status === 'submitted'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-amber-100 text-amber-600'
                    }`}>
                    {activity.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : activity.status === 'submitted' ? (
                      <FileText className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                      {activity.student}
                    </p>
                    <p className="text-sm text-gray-600">
                      {activity.action} <span className="font-medium">{activity.assignment}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Deadlines</h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div
                  key={deadline.id}
                  className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
                >
                  <h3 className="text-sm font-bold text-gray-900">{deadline.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{deadline.course}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Clock className="w-3.5 h-3.5" />
                      {deadline.dueDate}
                    </div>
                    <span className="text-xs font-semibold text-blue-600">
                      {deadline.submissions}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Create Assignment</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-purple-500 hover:bg-purple-50 transition-colors">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">View Students</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
              <Award className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold text-gray-700">Grade Submissions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
