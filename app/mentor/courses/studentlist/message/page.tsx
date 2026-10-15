'use client';

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  X,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Link2,
  Image as ImageIcon,
} from 'lucide-react';

export default function NewMessage() {
  const router = useRouter();
  const [subject, setSubject] = useState<string>('Geometry 101 - Let\'s Get Back on Track');
  const [message, setMessage] = useState<string>(
    `Hello everyone,\n\nI noticed that you haven't been active in the course recently and/or have missing assignments.\n\nPlease make sure to check the course and submit any outstanding work as soon as possible. If you need any help, feel free to reach out.\n\nLet's keep up the great work!\n\n- Bonte M.`
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSendMessage = () => {
    // Here you would typically send the message to your backend
    // For now, we'll just navigate to the success page
    router.push('/mentor/courses/studentlist/message/success');
  };

  return (
    <div className="p-6">
      {/* Go Back Link */}
      <Link
        href="/mentor/courses/studentlist"
        className="mb-4 flex items-center text-sm font-medium text-gray-600 transition hover:text-gray-900"
      >
        <ArrowLeft className="mr-1.5 h-4 w-4" /> Go Back
      </Link>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">New Message</h1>
        <p className="mt-1 text-sm text-gray-500">
          Compose and send message to filtered students.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm">
        {/* Recipients Row */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-semibold text-gray-700">Recipients</span>
            <div className="flex items-center rounded-full bg-[#1E40AF] px-3 py-1 text-xs font-medium text-white shadow-sm">
              <span>5 Students</span>
              <button
                type="button"
                className="ml-1.5 inline-flex items-center rounded-full p-0.5 hover:bg-blue-800 focus:outline-none"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-[#1E40AF] hover:underline"
          >
            Show Recipients
          </button>
        </div>

        {/* Subject Input */}
        <div className="mb-6">
          <label className="mb-1.5 block text-sm font-semibold text-gray-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter subject..."
          />
        </div>

        {/* Message Editor */}
        <div className="mb-6">
          <label className="mb-1.5 block text-sm font-semibold text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>

          <div className="overflow-hidden rounded-xl border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            {/* Rich Text Toolbar */}
            <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-[#F1F4F9] px-3 py-2 text-gray-600">
              <div className="relative mr-2">
                <button
                  type="button"
                  className="flex items-center rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
                >
                  Paragraph <ChevronDown className="ml-1 h-3.5 w-3.5 text-gray-500" />
                </button>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <button
                type="button"
                className="rounded p-1.5 hover:bg-gray-200"
                title="Bold"
              >
                <Bold className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded p-1.5 hover:bg-gray-200"
                title="Italic"
              >
                <Italic className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded p-1.5 hover:bg-gray-200"
                title="Underline"
              >
                <Underline className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded p-1.5 hover:bg-gray-200"
                title="Strikethrough"
              >
                <Strikethrough className="h-4 w-4" />
              </button>
              <div className="h-4 w-px bg-gray-300" />
              <button
                type="button"
                className="rounded p-1.5 hover:bg-gray-200"
                title="Bullet List"
              >
                <List className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded p-1.5 hover:bg-gray-200"
                title="Numbered List"
              >
                <ListOrdered className="h-4 w-4" />
              </button>
              <div className="h-4 w-px bg-gray-300" />
              <button
                type="button"
                className="rounded p-1.5 hover:bg-gray-200"
                title="Insert Link"
              >
                <Link2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded p-1.5 hover:bg-gray-200"
                title="Insert Image"
              >
                <ImageIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Textarea Area */}
            <textarea
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-y bg-white p-4 text-sm leading-relaxed text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Attachment */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Attachment
          </label>
          <div className="flex items-center space-x-3">
            <label className="cursor-pointer rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200">
              Choose File
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <span className="text-xs text-gray-500">
              {selectedFile ? selectedFile.name : 'No file chosen'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="mt-6 flex justify-end space-x-3">
        <Link
          href="/mentor/courses/studentlist"
          className="rounded-xl border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
        >
          Cancel
        </Link>
        <button
          type="button"
          onClick={handleSendMessage}
          className="rounded-xl bg-[#2221B2] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-900 transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
