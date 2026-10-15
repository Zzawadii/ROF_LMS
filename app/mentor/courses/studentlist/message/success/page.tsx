'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

export default function MessageSentSuccess() {
  const router = useRouter();
  
  // You can get these from URL params or state in a real implementation
  const recipientCount = 5;
  const recipientLabel = '5 Students';
  const subject = "Geometry 101 - Let's Get Back on Track";
  const sentDate = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 font-sans text-slate-800">
      <div className="flex max-w-xl flex-col items-center text-center">
        {/* Success Icon */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-sm">
          <CheckCircle2 className="h-20 w-20 stroke-[1.5] text-emerald-500" />
        </div>

        {/* Header Text */}
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Message Sent
        </h1>
        <p className="mt-2 text-base text-slate-500">
          Your message has been sent to {recipientCount} students.
        </p>

        {/* Info Card */}
        <div className="mt-8 w-full max-w-md rounded-xl border border-slate-200/60 bg-[#F2F4FA] p-5 text-left shadow-sm">
          <div className="grid grid-cols-[80px_1fr] gap-y-3 text-sm">
            <span className="font-medium text-slate-500">To:</span>
            <span className="font-semibold text-slate-900">{recipientLabel}</span>

            <span className="font-medium text-slate-500">Subject:</span>
            <span className="font-semibold text-[#1D3B8A]">{subject}</span>

            <span className="font-medium text-slate-500">Sent:</span>
            <span className="text-slate-700">{sentDate}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex w-full max-w-md items-center justify-center gap-4">
          <button
            onClick={() => router.push('/mentor/conversations')}
            type="button"
            className="w-1/2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50 active:scale-[0.98]"
          >
            Go to conversations
          </button>
          <Link
            href="/mentor/courses"
            className="w-1/2 rounded-xl bg-[#2D2DAA] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#24248E] active:scale-[0.98] text-center"
          >
            Back to analytics
          </Link>
        </div>
      </div>
    </div>
  );
}
