'use client';

import React, { useState } from 'react';
import {
    Search,
    Filter,
    Mail,
    MoreVertical,
    TrendingUp,
    TrendingDown,
    Award,
    Users,
    ChevronDown
} from 'lucide-react';
import Link from 'next/link';

interface Student {
    id: string;
    name: string;
    email: string;
    avatar: string;
    course: string;
    learningCircle: string;
    progress: number;
    assignments: {
        completed: number;
        total: number;
    };
    averageScore: number;
    trend: 'up' | 'down';
    lastActive: string;
}

const mockStudents: Student[] = [
    {
        id: '1',
        name: 'Hope Zawadi',
        email: 'hopevzawadii@gmail.com',
        avatar: 'H',
        course: 'Geometry',
        learningCircle: 'G12',
        progress: 85,
        assignments: { completed: 18, total: 24 },
        averageScore: 87,
        trend: 'up',
        lastActive: '2 hours ago',
    },
    {
        id: '2',
        name: 'Eric Mugisha',
        email: 'eric.m@gmail.com',
        avatar: 'E',
        course: 'Algebra',
        learningCircle: 'G11',
        progress: 92,
        assignments: { completed: 22, total: 24 },
        averageScore: 91,
        trend: 'up',
        lastActive: '5 hours ago',
    },
    {
        id: '3',
        name: 'Sarah Umutoni',
        email: 'sarah.u@gmail.com',
        avatar: 'S',
        course: 'Calculus',
        learningCircle: 'G12',
        progress: 78,
        assignments: { completed: 16, total: 24 },
        averageScore: 79,
        trend: 'down',
        lastActive: '1 day ago',
    },
    {
        id: '4',
        name: 'James Nkurunziza',
        email: 'james.n@gmail.com',
        avatar: 'J',
        course: 'Geometry',
        learningCircle: 'G10',
        progress: 65,
        assignments: { completed: 14, total: 24 },
        averageScore: 68,
        trend: 'up',
        lastActive: '1 day ago',
    },
    {
        id: '5',
        name: 'Grace Uwase',
        email: 'grace.u@gmail.com',
        avatar: 'G',
        course: 'Trigonometry',
        learningCircle: 'G11',
        progress: 88,
        assignments: { completed: 20, total: 24 },
        averageScore: 86,
        trend: 'up',
        lastActive: '3 hours ago',
    },
    {
        id: '6',
        name: 'David Habimana',
        email: 'david.h@gmail.com',
        avatar: 'D',
        course: 'Algebra',
        learningCircle: 'G12',
        progress: 95,
        assignments: { completed: 23, total: 24 },
        averageScore: 94,
        trend: 'up',
        lastActive: '1 hour ago',
    },
];

export default function MentorStudents() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('All Courses');
    const [selectedCircle, setSelectedCircle] = useState('All Circles');

    return (
        <div
            className="min-h-screen p-6 md:p-10 font-sans"
            style={{ backgroundColor: '#E6EBF2' }}
        >
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Students</h1>
                    <p className="text-gray-600 mt-1">Manage and monitor your students' progress</p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Students</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
                            </div>
                            <Users className="w-8 h-8 text-blue-500" />
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Active Today</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">48</p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-green-500" />
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Avg. Score</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">85%</p>
                            </div>
                            <Award className="w-8 h-8 text-amber-500" />
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">At Risk</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                            </div>
                            <TrendingDown className="w-8 h-8 text-red-500" />
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search students by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <select
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>All Courses</option>
                                <option>Geometry</option>
                                <option>Algebra</option>
                                <option>Calculus</option>
                                <option>Trigonometry</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select
                                value={selectedCircle}
                                onChange={(e) => setSelectedCircle(e.target.value)}
                                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>All Circles</option>
                                <option>G10</option>
                                <option>G11</option>
                                <option>G12</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                            <Filter className="w-4 h-4" />
                            More Filters
                        </button>
                    </div>
                </div>

                {/* Students Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockStudents.map((student) => (
                        <div
                            key={student.id}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                                        {student.avatar}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900">{student.name}</h3>
                                        <p className="text-xs text-gray-500">{student.email}</p>
                                    </div>
                                </div>
                                <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                                    <MoreVertical className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>

                            {/* Info */}
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Course</span>
                                    <span className="font-semibold text-gray-900">{student.course}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Circle</span>
                                    <span className="font-semibold text-gray-900">{student.learningCircle}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Assignments</span>
                                    <span className="font-semibold text-gray-900">
                                        {student.assignments.completed}/{student.assignments.total}
                                    </span>
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between text-sm mb-2">
                                    <span className="text-gray-600">Progress</span>
                                    <span className="font-bold text-gray-900">{student.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full transition-all"
                                        style={{ width: `${student.progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${student.trend === 'up'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {student.trend === 'up' ? (
                                            <TrendingUp className="w-3 h-3" />
                                        ) : (
                                            <TrendingDown className="w-3 h-3" />
                                        )}
                                        {student.averageScore}%
                                    </div>
                                    <span className="text-xs text-gray-400">{student.lastActive}</span>
                                </div>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Mail className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
