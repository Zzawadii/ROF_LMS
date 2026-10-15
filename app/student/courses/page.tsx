import React from 'react';
import Link from 'next/link';
import { ChevronRight, GitFork, Layers } from 'lucide-react';

// This can be a Server Component - no interactivity needed
// Data fetching would happen here in a real app

const courses = [
  {
    id: '1',
    code: 'DV2008',
    lecture: 'Lecture 1',
    title: 'Algebra',
    slug: 'algebra',
    description: 'Equations, Inequalities, functions and more.',
    badgeCount: 2,
  },
  {
    id: '2',
    code: 'DV2008',
    lecture: 'Lecture 1',
    title: 'Geometry',
    slug: 'geometry',
    description: 'Triangles, Circles, Transformations and more.',
  },
  {
    id: '3',
    code: 'DV2008',
    lecture: 'Lecture 1',
    title: 'Number Theory',
    slug: 'number-theory',
    description: 'Divisibility, primes, congruences and more.',
  },
  {
    id: '4',
    code: 'DV2008',
    lecture: 'Lecture 1',
    title: 'Combinatorics',
    slug: 'combinatorics',
    description: 'Counting, permutations, combinations and more.',
    badgeCount: 1,
  },
];

export default function CoursesPage() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Courses</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Notification Badge */}
            {course.badgeCount && course.badgeCount > 0 && (
              <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white shadow">
                {course.badgeCount}
              </div>
            )}

            {/* Banner/Image Area - Now clickable */}
            <Link href={`/student/courses/${course.slug}`}>
              <div className="relative flex h-36 w-full items-center justify-end rounded-xl bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300 p-3 cursor-pointer hover:opacity-90 transition-opacity">
                <span className="text-xs font-medium text-white/90">
                  [{course.code}] {course.lecture}
                </span>
              </div>
            </Link>

            {/* Title & Description */}
            <div className="mt-4">
              <Link href={`/student/courses/${course.slug}`}>
                <h2 className="text-xl font-bold text-gray-900 hover:text-indigo-600 cursor-pointer transition-colors">{course.title}</h2>
              </Link>
              <p className="mt-1 text-xs text-gray-500">
                {course.description}
              </p>
            </div>

            <hr className="my-4 border-gray-200" />

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <Link href={`/student/courses/${course.slug}`}>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-indigo-700 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-800">
                  <ChevronRight className="h-3.5 w-3.5" />
                  Continue Learning
                </button>
              </Link>

              <Link href={`/student/courses/${course.slug}?tab=practice`}>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200">
                  <GitFork className="h-3.5 w-3.5 text-indigo-600" />
                  Practice
                </button>
              </Link>

              <Link href={`/student/courses/${course.slug}?tab=books`}>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-indigo-600 transition-colors hover:bg-blue-100">
                  <Layers className="h-3.5 w-3.5 text-indigo-600" />
                  Resources
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}