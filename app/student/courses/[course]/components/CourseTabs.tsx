'use client';

import React from 'react';

type TabType = 'overview' | 'books' | 'papers';

interface CourseTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function CourseTabs({ activeTab, onTabChange }: CourseTabsProps) {
  return (
    <div className="mt-6 flex gap-8 border-b border-gray-200 text-sm font-medium">
      <button
        onClick={() => onTabChange('overview')}
        className={`pb-3 transition-colors ${
          activeTab === 'overview'
            ? 'border-b-2 border-indigo-600 font-semibold text-indigo-600'
            : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        Overview
      </button>
      <button
        onClick={() => onTabChange('books')}
        className={`pb-3 transition-colors ${
          activeTab === 'books'
            ? 'border-b-2 border-indigo-600 font-semibold text-indigo-600'
            : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        Books
      </button>
      <button
        onClick={() => onTabChange('papers')}
        className={`pb-3 transition-colors ${
          activeTab === 'papers'
            ? 'border-b-2 border-indigo-600 font-semibold text-indigo-600'
            : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        Past Papers
      </button>
    </div>
  );
}
