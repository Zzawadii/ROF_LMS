'use client';

import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import AssignmentFilters from './AssignmentFilters';
import AssignmentTable from './AssignmentTable';

interface Assignment {
  id: string;
  name: string;
  course: string;
  subCategory?: string;
  deadline: string;
  status: 'Needs Revision' | 'Completed' | 'In Review' | 'Submitted';
  filterCategory: 'In Progress' | 'Submitted' | 'Reviewed';
}

const assignments: Assignment[] = [
  {
    id: '1',
    name: 'Advanced Calcus Problem Set...',
    course: 'Module 4.2: Derivatives & Integrals,',
    subCategory: 'Applied Mathematics',
    deadline: 'July 25,2026',
    status: 'Needs Revision',
    filterCategory: 'In Progress',
  },
  {
    id: '2',
    name: 'Number Theory:Prime Distribu...',
    course: 'Module 2.1: Analytic Number Theory',
    subCategory: 'Pure Mathematics',
    deadline: 'July 25,2026',
    status: 'Needs Revision',
    filterCategory: 'In Progress',
  },
  {
    id: '3',
    name: 'Combinatorics & Graph Theory....',
    course: 'Module 3: Discrete Mathematics',
    subCategory: 'Theoretical Science',
    deadline: 'July 25,2026',
    status: 'Completed',
    filterCategory: 'Reviewed',
  },
  {
    id: '4',
    name: 'Linear Algebra: Vector Spaces',
    course: 'Module 1: Fundamental Structures',
    subCategory: 'Algebraic Track',
    deadline: 'July 25,2026',
    status: 'Completed',
    filterCategory: 'Reviewed',
  },
  {
    id: '5',
    name: 'Probability Theory Mock Exam',
    course: 'Module 6: Statistical Analysis',
    subCategory: 'Stochastic Processes',
    deadline: 'July 25,2026',
    status: 'In Review',
    filterCategory: 'In Progress',
  },
  {
    id: '6',
    name: 'Geometry & Topology Explorati..',
    course: 'Module 3.1: Euclidean Spaces',
    subCategory: 'Visual Mathematics',
    deadline: 'July 25,2026',
    status: 'Completed',
    filterCategory: 'Reviewed',
  },
  {
    id: '7',
    name: 'Real Analysis: Sequence Limits',
    course: 'Module 2.3: Convergence',
    subCategory: 'Fundamental Analysis',
    deadline: 'July 25,2026',
    status: 'Submitted',
    filterCategory: 'Submitted',
  },
];

type FilterType = 'All' | 'In Progress' | 'Submitted' | 'Reviewed';

export default function AssignmentsContent() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');

  const filteredAssignments = assignments.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.filterCategory === selectedFilter;
  });

  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      {/* Action Buttons */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end mb-6">
        <AssignmentFilters onFilterChange={handleFilterChange} />

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition">
          <ArrowUpDown className="w-3.5 h-3.5 text-gray-600" />
          Sort By
        </button>
      </div>

      {/* Table - Server Component */}
      <AssignmentTable assignments={filteredAssignments} />
    </>
  );
}
