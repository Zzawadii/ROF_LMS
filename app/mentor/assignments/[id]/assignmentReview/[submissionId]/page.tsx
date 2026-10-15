import Link from 'next/link';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import FeedbackEditor from './components/FeedbackEditor';
import ScoreInput from './components/ScoreInput';
import SubmissionActions from './components/SubmissionActions';

// Server Component - can fetch data here
// In production:
// const submission = await getSubmission(params.id, params.submissionId);

interface PageProps {
  params: Promise<{ id: string; submissionId: string }>;
}

export default async function SubmissionDetailPage({ params }: PageProps) {
  const { id, submissionId } = await params;

  // Mock data - replace with actual API call
  const submissionData = {
    id: submissionId,
    assignmentId: id,
    studentName: "Bonte M.",
    assignmentTitle: "Geometry Assignment 3",
    status: "Submitted",
    submittedAt: "May 29, 2026 at 10:42 AM",
    fileName: "Geometry_Assignment3_BonteM.pdf",
    fileSize: "1.2 MB",
    fileType: "PDF",
    dueDate: "May 30, 2026 • 11:59 PM",
    submittedDate: "May 29, 2026 • 10:42 AM",
    timeTaken: "1 day",
    attempt: "1 of 2",
    currentScore: 18,
    maxScore: 20,
    initialFeedback: `Excellent work, Bonte!\n\nYour proofs are mostly correct and clearly written. Please check Question 4 carefully. The final step needs justification using the Angle Bisector Theorem.\n\nKeep it up!`,
  };

  return (
    <div className="min-h-screen bg-[#E6EBF2] p-8 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Navigation / Link */}
        <Link
          href={`/mentor/assignments/${id}/assignmentReview`}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Submissions</span>
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold text-gray-900">
                {submissionData.studentName} - {submissionData.assignmentTitle}
              </h1>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-medium text-sm rounded-full">
                {submissionData.status}
              </span>
            </div>
            <p className="text-gray-500 mt-1 text-sm">Submitted on {submissionData.submittedAt}</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 text-sm font-medium border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors self-start md:self-auto">
            <span>Download Submission</span>
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left / Main Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Student Submission Card - Server Component */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100/50">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                Student Submission
              </h2>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{submissionData.fileName}</p>
                    <p className="text-xs text-gray-400">
                      {submissionData.fileType} • {submissionData.fileSize}
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-white text-xs font-semibold text-gray-700 border border-gray-200 rounded-md shadow-2xs hover:bg-gray-50 transition-colors">
                  View PDF
                </button>
              </div>
            </div>

            {/* Mentor Feedback Card - Client Component */}
            <FeedbackEditor initialFeedback={submissionData.initialFeedback} />

            {/* Score Card - Client Component */}
            <ScoreInput
              currentScore={submissionData.currentScore}
              maxScore={submissionData.maxScore}
            />
          </div>

          {/* Right Column (1/3 width) */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Submission Details Panel - Server Component */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100/50 space-y-5">
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Submission Details
              </h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Due Date</p>
                  <p className="text-gray-700 font-medium mt-0.5">{submissionData.dueDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Submitted</p>
                  <p className="text-gray-700 font-medium mt-0.5">{submissionData.submittedDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Time Taken</p>
                  <p className="text-gray-700 font-medium mt-0.5">{submissionData.timeTaken}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Attempt</p>
                  <p className="text-gray-700 font-medium mt-0.5">{submissionData.attempt}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Client Component */}
            <SubmissionActions />
          </div>
        </div>
      </div>
    </div>
  );
}
