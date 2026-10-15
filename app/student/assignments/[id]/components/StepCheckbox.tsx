'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  text: string;
  completed: boolean;
}

interface StepCheckboxProps {
  step: Step;
  onToggle: (id: string) => void;
}

export default function StepCheckbox({ step, onToggle }: StepCheckboxProps) {
  return (
    <button
      onClick={() => onToggle(step.id)}
      className="w-full text-left flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition group"
    >
      <div
        className={`w-5 h-5 rounded flex items-center justify-center transition ${
          step.completed
            ? 'bg-blue-600 text-white'
            : 'border border-gray-300'
        }`}
      >
        {step.completed && <Check className="w-3.5 h-3.5" />}
      </div>
      <span
        className={`text-xs font-medium ${
          step.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {step.text}
      </span>
    </button>
  );
}
