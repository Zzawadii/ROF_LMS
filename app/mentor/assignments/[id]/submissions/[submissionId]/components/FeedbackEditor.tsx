'use client';

import { useState } from 'react';
import { Bold, Italic, Underline, List, ListOrdered, Link2, Image as ImageIcon } from 'lucide-react';

interface FeedbackEditorProps {
  initialFeedback: string;
}

export default function FeedbackEditor({ initialFeedback }: FeedbackEditorProps) {
  const [feedback, setFeedback] = useState(initialFeedback);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100/50 overflow-hidden">
      <div className="p-6 pb-3">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mentor Feedback</h2>
      </div>

      {/* Rich Text Toolbar */}
      <div className="flex items-center gap-1 px-6 py-2 bg-gray-50/80 border-y border-gray-100 text-gray-500">
        <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
          <Bold className="w-4 h-4" />
        </button>
        <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
          <Italic className="w-4 h-4" />
        </button>
        <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
          <Underline className="w-4 h-4" />
        </button>
        <div className="w-px h-4 bg-gray-300 mx-1" />
        <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
          <List className="w-4 h-4" />
        </button>
        <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
          <ListOrdered className="w-4 h-4" />
        </button>
        <div className="w-px h-4 bg-gray-300 mx-1" />
        <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
          <Link2 className="w-4 h-4" />
        </button>
        <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
          <ImageIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Text Area */}
      <div className="p-6">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={6}
          className="w-full text-sm text-gray-700 focus:outline-none resize-none bg-transparent"
          placeholder="Write feedback here..."
        />
      </div>
    </div>
  );
}
