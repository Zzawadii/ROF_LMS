import React from 'react';
import AssignmentSearch from './components/AssignmentSearch';
import AssignmentsContent from './components/AssignmentsContent';

// Server Component - can fetch data here in production
// const assignments = await getAssignments();

export default function AssignmentsPage() {
  return (
    <main className="p-8 max-w-7xl mx-auto font-sans text-gray-800">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Tasks Overview
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          View tasks from all courses and track their status
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <AssignmentSearch />
      </div>

      {/* Assignments Content with Client-Side Filtering */}
      <AssignmentsContent />
    </main>
  );
}