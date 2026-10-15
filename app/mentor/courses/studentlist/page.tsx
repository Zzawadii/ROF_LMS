'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, RotateCw, ChevronDown } from 'lucide-react';

interface FilterCriterion {
  id: string;
  field: string;
  operator: string;
  comparison: string;
  value: string;
  unit: string;
  logic: 'OR' | 'AND';
}

interface Student {
  id: string;
  name: string;
  avatar: string;
  lastParticipation: string;
  missingAssignments: number;
  grade: number;
}

const mockStudents: Student[] = [
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

export default function StudentListFilter() {
  const [matchType, setMatchType] = useState<'All' | 'Any'>('All');
  const [criteria, setCriteria] = useState<FilterCriterion[]>([
    {
      id: '1',
      field: 'Last participation',
      operator: 'is',
      comparison: 'more than',
      value: '7',
      unit: 'days ago',
      logic: 'OR',
    },
    {
      id: '2',
      field: 'Submission',
      operator: 'has not submitted',
      comparison: 'at least one',
      value: '',
      unit: 'assignment',
      logic: 'AND',
    },
    {
      id: '3',
      field: 'Grade',
      operator: 'is less than',
      comparison: '',
      value: '70',
      unit: '%',
      logic: 'AND',
    },
  ]);

  const handleAddCriterion = () => {
    setCriteria((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        field: 'Grade',
        operator: 'is less than',
        comparison: '',
        value: '70',
        unit: '%',
        logic: 'AND',
      },
    ]);
  };

  const handleClearFilters = () => {
    setCriteria([]);
  };

  return (
    <div className="p-6">
      {/* Top Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Link
            href="/mentor/courses"
            className="mb-2 flex items-center text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Go Back
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Student List</h1>
          <p className="text-sm text-gray-500">
            Use a filter to identify students based on course activity.
          </p>
        </div>
        <button
          onClick={handleClearFilters}
          className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
        >
          Clear Filters
        </button>
      </div>

      {/* Filter Card */}
      <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center space-x-2 text-sm text-gray-700">
          <span>Show students who match</span>
          <div className="relative inline-block">
            <select
              value={matchType}
              onChange={(e) => setMatchType(e.target.value as 'All' | 'Any')}
              className="appearance-none rounded-md border border-gray-200 bg-white py-1 pl-3 pr-8 text-sm font-medium text-gray-800 shadow-sm focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Any">Any</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-3.5 w-3.5 text-gray-500" />
          </div>
          <span>of the following criteria</span>
        </div>

        {/* Dynamic Criteria List */}
        <div className="space-y-4">
          {criteria.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && (
                <div className="relative my-2 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <span className="relative bg-white px-3 text-xs uppercase text-gray-400">
                    {item.logic}
                  </span>
                </div>
              )}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
                {/* Field Selection */}
                <div className="relative md:col-span-3">
                  <select
                    value={item.field}
                    onChange={(e) => {
                      const updated = [...criteria];
                      updated[index].field = e.target.value;
                      setCriteria(updated);
                    }}
                    className="w-full appearance-none rounded-lg border border-gray-200 bg-white p-2.5 pr-8 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="Last participation">Last participation</option>
                    <option value="Submission">Submission</option>
                    <option value="Grade">Grade</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
                </div>

                {/* Operator Selection */}
                <div className="relative md:col-span-3">
                  <select
                    value={item.operator}
                    onChange={(e) => {
                      const updated = [...criteria];
                      updated[index].operator = e.target.value;
                      setCriteria(updated);
                    }}
                    className="w-full appearance-none rounded-lg border border-gray-200 bg-white p-2.5 pr-8 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="is">is</option>
                    <option value="has not submitted">has not submitted</option>
                    <option value="is less than">is less than</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
                </div>

                {/* Comparison Selection */}
                <div className="relative md:col-span-3">
                  <select
                    value={item.comparison}
                    onChange={(e) => {
                      const updated = [...criteria];
                      updated[index].comparison = e.target.value;
                      setCriteria(updated);
                    }}
                    className="w-full appearance-none rounded-lg border border-gray-200 bg-white p-2.5 pr-8 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="more than">more than</option>
                    <option value="at least one">at least one</option>
                    <option value="">None</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
                </div>

                {/* Value Input */}
                <div className="md:col-span-1">
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => {
                      const updated = [...criteria];
                      updated[index].value = e.target.value;
                      setCriteria(updated);
                    }}
                    className="w-full rounded-lg border border-gray-200 p-2.5 text-center text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>

                {/* Unit Field */}
                <div className="md:col-span-2">
                  <div className="flex h-full w-full items-center justify-center rounded-lg border border-gray-100 bg-gray-50 px-3 text-xs text-gray-600">
                    {item.unit}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Add Criterion Button */}
        <button
          onClick={handleAddCriterion}
          className="mt-6 flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          <Plus className="mr-1 h-4 w-4" /> Add Another Criterion
        </button>
      </div>

      {/* Preview Section */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Preview</h2>
            <p className="text-xs text-gray-500">
              {mockStudents.length} students match this criteria
            </p>
          </div>
          <button className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-700">
            <RotateCw className="mr-1 h-3.5 w-3.5" /> Refresh
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-[#F8FAFC] text-xs font-semibold text-gray-600">
              <tr>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Last Participation</th>
                <th className="py-3 px-4">Missing Assignments</th>
                <th className="py-3 px-4">Current Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="py-3.5 px-4 font-medium text-gray-900">
                    <div className="flex items-center space-x-3">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="h-7 w-7 rounded-full object-cover"
                      />
                      <span>{student.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-gray-500">{student.lastParticipation}</td>
                  <td className="py-3.5 px-4 text-gray-500">{student.missingAssignments}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${student.grade < 50
                          ? 'bg-red-700 text-white'
                          : student.grade < 60
                            ? 'bg-red-200 text-red-800'
                            : 'bg-red-100 text-red-600'
                        }`}
                    >
                      {student.grade}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Action */}
        <div className="mt-6 flex justify-end">
          <Link
            href="/mentor/courses/studentlist/message"
            className="rounded-lg bg-[#2221B2] px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-900 transition"
          >
            Message Students ({mockStudents.length})
          </Link>
        </div>
      </div>
    </div>
  );
}
