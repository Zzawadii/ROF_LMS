'use client';

import React, { useState } from 'react';
import LeaderboardFilter from './LeaderboardFilter';

type FilterType = 'national' | 'studyGroup';

export default function LeaderboardContent() {
  const [filter, setFilter] = useState<FilterType>('national');

  return (
    <>
      {/* Filter Toggle */}
      <LeaderboardFilter onFilterChange={setFilter} />
      
      {/* Display current filter for demo */}
      <p className="text-sm text-gray-500 mt-2">Current filter: {filter}</p>
    </>
  );
}
