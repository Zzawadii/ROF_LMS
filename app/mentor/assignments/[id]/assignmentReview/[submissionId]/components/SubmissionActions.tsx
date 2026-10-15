'use client';

import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function SubmissionActions() {
  const [showPopup, setShowPopup] = useState(false);

  const handleReturnForRevision = () => {
    // Handle return for revision logic
    console.log('Return for revision clicked');
  };

  const handleSendFeedback = () => {
    // Handle send feedback logic
    console.log('Send feedback clicked');
    setShowPopup(true);

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
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

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Feedback Sent!</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Your feedback has been successfully sent to the student.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
