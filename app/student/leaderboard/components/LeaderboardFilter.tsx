'use client';

import React, { useState } from 'react';

type FilterType = 'national' | 'studyGroup';

interface LeaderboardFilterProps {
  onFilterChange: (filter: FilterType) => void;
}

export default function LeaderboardFilter({ onFilterChange }: LeaderboardFilterProps) {
  const [filter, setFilter] = useState<FilterType>('national');

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="bg-slate-100 p-1 rounded-full flex items-center w-fit self-start sm:self-auto border border-slate-200">
      <button
        onClick={() => handleFilterChange('national')}
        className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
          filter === 'national'
            ? 'bg-[#0f172a] text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        National
      </button>
      <button
        onClick={() => handleFilterChange('studyGroup')}
        className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
          filter === 'studyGroup'
            ? 'bg-[#0f172a] text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        Study Group
      </button>
    </div>
  );
}
