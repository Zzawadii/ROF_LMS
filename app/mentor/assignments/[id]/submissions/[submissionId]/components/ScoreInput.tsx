'use client';

import { useState } from 'react';

interface ScoreInputProps {
  currentScore: number;
  maxScore: number;
}

export default function ScoreInput({ currentScore, maxScore }: ScoreInputProps) {
  const [score, setScore] = useState<number | string>(currentScore);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100/50">
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Score</h2>
      <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
        <input
          type="text"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="w-10 text-center font-bold text-xl text-gray-900 bg-white border border-gray-200 rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <span className="text-xl font-semibold text-gray-400">/ {maxScore}</span>
      </div>
    </div>
  );
}
