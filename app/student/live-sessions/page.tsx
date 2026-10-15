'use client';

import React, { useState } from 'react';
import {
  Paperclip,
  Calendar,
  Clock,
  Users,
  MoreVertical,
  Video
} from 'lucide-react';

interface Session {
  id: string;
  title: string;
  subject: string;
  mentor: string;
  date: string;
  time: string;
  studentsCount: number;
  status: 'Upcoming' | 'Past';
}

const mockSessions: Session[] = [
  {
    id: '1',
    title: 'Introduction to Algebra',
    subject: 'Algebra',
    mentor: 'Dr. Smith',
    date: 'Sep 9, 2026',
    time: '15:00 - 16:00',
    studentsCount: 28,
    status: 'Upcoming',
  },
  {
    id: '2',
    title: 'Geometry Problem Solving',
    subject: 'Geometry',
    mentor: 'Prof. Johnson',
    date: 'Sep 12, 2026',
    time: '14:00 - 15:00',
    studentsCount: 25,
    status: 'Upcoming',
  },
  {
    id: '3',
    title: 'Calculus Workshop',
    subject: 'Calculus',
    mentor: 'Dr. Williams',
    date: 'Sep 15, 2026',
    time: '16:00 - 17:00',
    studentsCount: 30,
    status: 'Upcoming',
  },
];

const mockPastSessions: Session[] = [
  {
    id: '4',
    title: 'Geometry Basics',
    subject: 'Geometry',
    mentor: 'Prof. Johnson',
    date: 'Sep 1, 2026',
    time: '14:00 - 15:00',
    studentsCount: 25,
    status: 'Past',
  },
  {
    id: '5',
    title: 'Calculus Workshop',
    subject: 'Calculus',
    mentor: 'Dr. Williams',
    date: 'Aug 28, 2026',
    time: '16:00 - 17:00',
    studentsCount: 30,
    status: 'Past',
  },
  {
    id: '6',
    title: 'Trigonometry Review',
    subject: 'Trigonometry',
    mentor: 'Dr. Brown',
    date: 'Aug 25, 2026',
    time: '15:00 - 16:00',
    studentsCount: 22,
    status: 'Past',
  },
];

export default function StudentLiveSessions() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming');

  // Get sessions based on active tab
  const displaySessions = activeTab === 'Upcoming' ? mockSessions : mockPastSessions;

  return (
    <div className="w-full p-6 font-sans text-slate-800 flex flex-col justify-between min-h-screen">
      {/* Main Content Area */}
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Live Sessions</h1>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              Join your upcoming live sessions and watch recordings of past sessions
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 border border-blue-100">
            <Video className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              {mockSessions.length} Upcoming Sessions
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-300/60 mb-6">
          <button
            onClick={() => setActiveTab('Upcoming')}
            className={`pb-2 px-4 text-sm font-semibold transition-all border-b-2 ${activeTab === 'Upcoming'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('Past')}
            className={`pb-2 px-4 text-sm font-semibold transition-all border-b-2 ${activeTab === 'Past'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
          >
            Past
          </button>
        </div>

        {/* Session Cards List */}
        <div className="space-y-4">
          {displaySessions.map((session) => (
            <div
              key={session.id}
              className="relative flex flex-col md:flex-row md:items-center justify-between rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-100 transition-shadow hover:shadow-md gap-4"
            >
              {/* Left Side: Icon & Details */}
              <div className="flex items-start sm:items-center gap-4">
                {/* Paperclip Icon Container */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Paperclip className="h-6 w-6 transform -rotate-45" />
                </div>

                {/* Session Info */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">{session.title}</h3>
                  <p className="text-xs text-slate-400 font-medium">{session.subject} • {session.mentor}</p>

                  {/* Meta Details Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-slate-400" />
                      <span>{session.studentsCount} students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Status Badge, Button, Options */}
              <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                {/* Status Badge */}
                <span className={`md:absolute md:top-3 md:right-16 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                  session.status === 'Upcoming' 
                    ? 'bg-emerald-100/70 text-emerald-600' 
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {session.status}
                </span>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    className="rounded-xl bg-[#2525A8] px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1E1E8B]"
                  >
                    {session.status === 'Upcoming' ? 'Join Session' : 'View Recording'}
                  </button>
                  <button
                    type="button"
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Pagination Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/60 pt-4 text-xs text-slate-500 max-w-6xl w-full mx-auto">
        <p>
          Showing <span className="font-semibold text-slate-700">1-{displaySessions.length}</span> of{' '}
          <span className="font-semibold text-slate-700">{displaySessions.length}</span> sessions
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled
            className="rounded-lg border border-slate-200 bg-white/50 px-3 py-1.5 font-medium text-slate-400 cursor-not-allowed"
          >
            Previous
          </button>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-3 py-1.5 font-medium text-white shadow-sm"
          >
            1
          </button>
          <button
            type="button"
            disabled
            className="rounded-lg border border-slate-200 bg-white/50 px-3 py-1.5 font-medium text-slate-400 cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
