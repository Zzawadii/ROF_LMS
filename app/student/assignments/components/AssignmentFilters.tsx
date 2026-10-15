'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';

const filterOptions = ['All', 'In Progress', 'Submitted', 'Reviewed'] as const;
type FilterType = (typeof filterOptions)[number];

interface AssignmentFiltersProps {
  onFilterChange: (filter: FilterType) => void;
}

export default function AssignmentFilters({ onFilterChange }: AssignmentFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterSelect = (option: FilterType) => {
    setSelectedFilter(option);
    setIsFilterOpen(false);
    onFilterChange(option);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-gray-600" />
        Filters
      </button>

      {/* Dropdown Menu */}
      {isFilterOpen && (
        <div className="absolute right-0 top-full mt-1.5 w-32 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1.5 text-center overflow-hidden">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleFilterSelect(option)}
              className={`w-full py-1.5 text-xs font-bold transition-colors ${
                selectedFilter === option
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
