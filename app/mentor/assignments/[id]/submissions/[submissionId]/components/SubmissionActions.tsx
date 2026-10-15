'use client';

export default function SubmissionActions() {
  const handleReturnForRevision = () => {
    // Handle return for revision logic
    console.log('Return for revision clicked');
  };

  const handleSendFeedback = () => {
    // Handle send feedback logic
    console.log('Send feedback clicked');
  };

  return (
    <div className="flex items-center gap-3 pt-4">
      <button
        onClick={handleReturnForRevision}
        className="flex-1 py-3 px-4 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-xl border border-gray-200 shadow-sm transition-colors text-center"
      >
        Return for Revision
      </button>
      <button
        onClick={handleSendFeedback}
        className="flex-1 py-3 px-4 bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors text-center"
      >
        Send Feedback
      </button>
    </div>
  );
}
