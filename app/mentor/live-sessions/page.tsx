'use client';

import React, { useState } from 'react';
import {
  Plus,
  Paperclip,
  Calendar,
  Clock,
  Users,
  MoreVertical,
  X,
  ChevronDown,
  Check,
  Link2,
  Bell
} from 'lucide-react';

interface Session {
  id: string;
  title: string;
  subject: string;
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
    date: 'Sep 9, 2026',
    time: '15:00 - 16:00',
    studentsCount: 28,
    status: 'Upcoming',
  },
  {
    id: '2',
    title: 'Introduction to Algebra',
    subject: 'Algebra',
    date: 'Sep 9, 2026',
    time: '15:00 - 16:00',
    studentsCount: 28,
    status: 'Upcoming',
  },
  {
    id: '3',
    title: 'Introduction to Algebra',
    subject: 'Algebra',
    date: 'Sep 9, 2026',
    time: '15:00 - 16:00',
    studentsCount: 28,
    status: 'Upcoming',
  },
];

const mockPastSessions: Session[] = [
  {
    id: '4',
    title: 'Geometry Basics',
    subject: 'Geometry',
    date: 'Sep 1, 2026',
    time: '14:00 - 15:00',
    studentsCount: 25,
    status: 'Past',
  },
  {
    id: '5',
    title: 'Calculus Workshop',
    subject: 'Calculus',
    date: 'Aug 28, 2026',
    time: '16:00 - 17:00',
    studentsCount: 30,
    status: 'Past',
  },
  {
    id: '6',
    title: 'Trigonometry Review',
    subject: 'Trigonometry',
    date: 'Aug 25, 2026',
    time: '15:00 - 16:00',
    studentsCount: 22,
    status: 'Past',
  },
];

export default function LiveSessions() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get sessions based on active tab
  const displaySessions = activeTab === 'Upcoming' ? mockSessions : mockPastSessions;

  return (
    <div className="w-full p-6 font-sans text-slate-800 flex flex-col justify-between">
      {/* Main Content Area */}
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Live Sessions</h1>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              View and manage your upcoming and past live sessions
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2525A8] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1E1E8B] active:scale-[0.98]"
          >
            <Plus className="h-5 w-5" />
            Schedule Session
          </button>
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
                  <p className="text-xs text-slate-400 font-medium">{session.subject}</p>

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
                <span className={`md:absolute md:top-3 md:right-16 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${session.status === 'Upcoming'
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
                    {session.status === 'Upcoming' ? 'Join' : 'View Recording'}
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

      {/* Schedule Session Modal */}
      <ScheduleSessionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

// Schedule Session Modal Component
interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = [
  { number: 1, label: 'Session Details' },
  { number: 2, label: 'Date & Time' },
  { number: 3, label: 'Meeting Link' },
  { number: 4, label: 'Notify Students' },
];

function ScheduleSessionModal({ isOpen, onClose }: ScheduleModalProps) {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    sessionTitle: 'Geometry Problem Solving',
    course: 'Geometry',
    learningCircle: 'G12',
    description: "We'll work through challenging triangle problems from previous Olympiad papers.",
    date: '',
    startTime: '',
    endTime: '',
    platform: 'Google Meet',
    meetingUrl: 'https://meet.google.com/abc-defg-hij',
    instructions: '',
    notifyStudents: true,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-bold text-slate-900">Schedule Live Session</h2>
          <button
            onClick={onClose}
            type="button"
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col md:flex-row min-h-[420px]">
          {/* Left Step Sidebar */}
          <div className="w-full md:w-60 border-b md:border-b-0 md:border-r border-slate-100 p-6 bg-slate-50/50">
            <div className="relative flex md:flex-col justify-between md:justify-start gap-6">
              {/* Vertical line indicator for desktop */}
              <div className="hidden md:block absolute left-[15px] top-3 bottom-3 w-[2px] bg-slate-200 -z-0" />

              {STEPS.map((step) => {
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;

                return (
                  <div key={step.number} className="relative z-10 flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${isActive
                        ? 'bg-[#1D4ED8] text-white shadow-sm'
                        : isCompleted
                          ? 'bg-emerald-500 text-white'
                          : 'border border-slate-300 bg-white text-slate-400'
                        }`}
                    >
                      {isCompleted ? <Check className="h-4 w-4" /> : step.number}
                    </div>
                    <span
                      className={`text-xs font-medium whitespace-nowrap ${isActive ? 'text-blue-600 font-semibold' : 'text-slate-500'
                        }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Form Area */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            {/* Step 1: Session Details */}
            {currentStep === 1 && (
              <div className="space-y-4">
                {/* Session Title */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Session title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.sessionTitle}
                    onChange={(e) => setFormData({ ...formData, sessionTitle: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter session title"
                  />
                </div>

                {/* Course Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Course <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                    >
                      <option value="Geometry">Geometry</option>
                      <option value="Algebra">Algebra</option>
                      <option value="Calculus">Calculus</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                {/* Learning Circle Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Learning Circle <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.learningCircle}
                      onChange={(e) => setFormData({ ...formData, learningCircle: e.target.value })}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                    >
                      <option value="G12">G12</option>
                      <option value="G11">G11</option>
                      <option value="G10">G10</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Description <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                    placeholder="Add description..."
                  />
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {currentStep === 2 && (
              <div className="space-y-4">
                {/* Date Picker */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Time Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Start Time */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Start time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.startTime}
                        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                        className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                      >
                        <option value="">Select time</option>
                        <option value="08:00">08:00 AM</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  {/* End Time */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      End time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.endTime}
                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                        className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                      >
                        <option value="">Select time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                        <option value="19:00">07:00 PM</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Meeting Link */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Meeting Link</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Add the link to your preferred video meeting platform.
                  </p>
                </div>

                {/* Platform Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Platform
                  </label>
                  <div className="relative">
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                    >
                      <option value="Google Meet">Google Meet</option>
                      <option value="Zoom">Zoom</option>
                      <option value="Microsoft Teams">Microsoft Teams</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                {/* Meeting Link Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Meeting link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    value={formData.meetingUrl}
                    onChange={(e) => setFormData({ ...formData, meetingUrl: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="https://meet.google.com/..."
                  />
                </div>

                {/* Info Box */}
                <div className="flex items-center gap-3 rounded-xl bg-blue-50/60 p-3.5 text-xs text-blue-700 border border-blue-100/50">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100/80 text-blue-600">
                    <Link2 className="h-4 w-4" />
                  </div>
                  <span>You can use Google Meet, Zoom, Microsoft Teams, or any other platform.</span>
                </div>

                {/* Additional Instructions */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Additional instructions <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none placeholder:text-slate-400"
                    placeholder="e.g. Please join 5 minutes early and have your notes ready."
                  />
                </div>
              </div>
            )}

            {/* Step 4: Notify Students */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Notify Students</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Students in the selected learning circle will be notified about this session.
                  </p>
                </div>

                {/* Notification Toggle Card */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 p-4 shadow-sm">
                  <div className="flex items-start gap-3.5 pr-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Notify students when this session is published
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        An email and in-app notification will be sent to all students in the selected learning circle.
                      </p>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, notifyStudents: !formData.notifyStudents })}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${formData.notifyStudents ? 'bg-[#1D4ED8]' : 'bg-slate-200'
                      }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${formData.notifyStudents ? 'translate-x-5' : 'translate-x-0'
                        }`}
                    />
                  </button>
                </div>

                {/* Summary Card */}
                <div className="rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold text-slate-900">Summary</h4>
                  <div className="grid grid-cols-[80px_1fr] gap-y-2.5 text-xs">
                    <span className="text-slate-500">Course</span>
                    <span className="font-semibold text-slate-900">{formData.course}</span>
                    <span className="text-slate-500">Group</span>
                    <span className="font-semibold text-slate-900">{formData.learningCircle}</span>
                    <span className="text-slate-500">Students</span>
                    <span className="font-semibold text-slate-900">28 students</span>
                  </div>
                </div>
              </div>
            )}

            {/* Footer Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-4">
              {/* Back Button */}
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-[0.98]"
                >
                  Back
                </button>
              )}

              {/* Next/Submit Button */}
              <button
                type="button"
                onClick={() => {
                  if (currentStep < 4) setCurrentStep((prev) => prev + 1);
                  else {
                    // Handle form submission here
                    console.log('Session scheduled:', formData);
                    onClose();
                  }
                }}
                className="rounded-xl bg-[#1D4ED8] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#1E40AF] active:scale-[0.98] ml-auto"
              >
                {currentStep === 1
                  ? 'Next: Date & Time'
                  : currentStep === 2
                    ? 'Next: Meeting Link'
                    : currentStep === 3
                      ? 'Next: Notify Students'
                      : 'Schedule Session'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
