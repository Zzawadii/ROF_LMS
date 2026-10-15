'use client';

import React, { useState } from 'react';
import { UploadCloud, AlertCircle, Check } from 'lucide-react';

export default function SubmissionPanel() {
  const [linkInput, setLinkInput] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
    // Auto-close success popup after 2.5s
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2500);
  };

  return (
    <>
      <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Assignment Submission
        </h2>

        <div className="space-y-5">
          <textarea
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            placeholder="Share your assignment link( Google Drive,Desmos,...)"
            className="w-full h-32 p-4 text-xs border border-gray-200 rounded-2xl bg-white outline-none focus:ring-2 focus:ring-blue-300 resize-none placeholder:text-gray-400"
          />

          <div className="text-center font-bold text-sm text-gray-800">OR</div>

          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center cursor-pointer hover:border-blue-300 transition bg-gray-50/50">
            <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs font-bold text-gray-700">Upload File</p>
            <p className="text-[10px] text-gray-400 mt-1">
              Supported formats: PDF, PNG, JPG
            </p>
          </div>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md transition"
          >
            Submit
          </button>

          <p className="text-[11px] text-gray-400 text-center">
            Your Assignment will be reviewed by a mentor.
          </p>
        </div>
      </div>

      {/* POPUP 1: Confirm Submission Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl transition-all">
            <div className="flex items-start gap-4">
              {/* Blue Exclamation Icon */}
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <AlertCircle className="w-10 h-10 stroke-[1.75]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  Confirm Submission?
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-snug">
                  You are about to submit this file. No changes can be made after submitting
                </p>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-6 py-2 bg-blue-50 text-blue-900 text-sm font-medium rounded-lg hover:bg-blue-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmit}
                className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* POPUP 2: Success Confirmation Modal */}
      {showSuccessModal && (
        <div
          onClick={() => setShowSuccessModal(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center space-y-6 transition-all"
          >
            {/* Green Check Icon Circle */}
            <div className="w-24 h-24 rounded-full border-4 border-emerald-500 text-emerald-500 flex items-center justify-center mx-auto">
              <Check className="w-14 h-14 stroke-[2.5]" />
            </div>

            <hr className="border-gray-100 my-4" />

            <h3 className="text-2xl font-bold text-gray-900">
              Submission confirmed!
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
