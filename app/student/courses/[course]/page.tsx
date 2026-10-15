import React from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare, BookOpen, FileText } from "lucide-react";
import CourseTabs from "./components/CourseTabs";

// Mock Database (Acts as your backend for now)
const courseData: Record<string, any> = {
  geometry: {
    title: "Geometry",
    description: "Geometry is the study of shapes, sizes, relative positions of figures, and the properties of space.",
    about: "In this track, you will explore important geometric concepts and theorems and apply them to solve challenging Olympiad problems. The content is structured from foundational ideas to advanced topics.",
    level: "Senior Division",
    recommendation: "s4-s6 students",
    learningCircle: "G-12",
    resources: "5 books . 35 papers",
    assignments: "10",
    completionTime: "Senior Division",
    mentor: {
      name: "Jean Pierre Irabarusha",
      role: "Geometry Mentor",
      officeHours: "Tue & Thu • 4:00 PM - 6:00 PM",
    },
    books: [
      { id: 1, title: "Euclidean Geometry in Mathematical Olympiads", author: "Evan Chen" },
      { id: 2, title: "Challenging Problems in Geometry", author: "Alfred S. Posamentier" }
    ],
    papers: [
      { id: 1, year: "2023", title: "National Olympiad Geometry Paper 1" },
      { id: 2, year: "2022", title: "Regional Geometry Finals" }
    ]
  },
  algebra: {
    title: "Algebra",
    description: "Equations, inequalities, functions, polynomials, and structural mathematical reasoning.",
    about: "Master algebraic manipulations, quadratic structures, systems of equations, and functional equations essential for advanced competitions.",
    level: "Senior Division",
    recommendation: "s4-s6 students",
    learningCircle: "G-12",
    resources: "4 books . 28 papers",
    assignments: "12",
    completionTime: "Senior Division",
    mentor: {
      name: "Alice Uwase",
      role: "Algebra Mentor",
      officeHours: "Mon & Wed • 2:00 PM - 4:00 PM",
    },
    books: [
      { id: 1, title: "101 Algebra Problems", author: "Titu Andreescu" }
    ],
    papers: [
      { id: 1, year: "2023", title: "Algebra Selection Test" }
    ]
  },
  "number-theory": {
    title: "Number Theory",
    description: "Divisibility, primes, congruences, modular arithmetic, and Diophantine equations.",
    about: "Dive into the properties of integers, prime factorization, Euler's totient theorem, and modular structures.",
    level: "Advanced Division",
    recommendation: "s5-s6 students",
    learningCircle: "G-12+",
    resources: "6 books . 40 papers",
    assignments: "8",
    completionTime: "Advanced Track",
    mentor: {
      name: "David Mugisha",
      role: "Number Theory Mentor",
      officeHours: "Wed & Fri • 3:00 PM - 5:00 PM",
    },
    books: [],
    papers: []
  },
  combinatorics: {
    title: "Combinatorics",
    description: "Counting techniques, permutations, combinations, graph theory, and pigeonhole principle.",
    about: "Learn advanced counting methods, generating functions, inclusion-exclusion principle, and discrete structural reasoning.",
    level: "Senior Division",
    recommendation: "s4-s6 students",
    learningCircle: "G-12",
    resources: "4 books . 30 papers",
    assignments: "10",
    completionTime: "Senior Division",
    mentor: {
      name: "Clara Keza",
      role: "Combinatorics Mentor",
      officeHours: "Tue & Fri • 1:00 PM - 3:00 PM",
    },
    books: [],
    papers: []
  }
};

// Server Component - reads query params and renders appropriate content
export default async function DynamicCoursePage({
  params,
  searchParams
}: {
  params: Promise<{ course: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  // Unwrap Next.js dynamic params
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const courseSlug = resolvedParams.course.toLowerCase();
  const tabParam = resolvedSearchParams.tab;

  // Determine active tab from URL
  const activeTab: "overview" | "books" | "papers" =
    tabParam === 'books' ? 'books' :
      tabParam === 'papers' || tabParam === 'practice' ? 'papers' :
        'overview';

  // Get data or fallback to geometry if invalid slug
  const course = courseData[courseSlug] || courseData["geometry"];

  return (
    <div className="relative min-h-screen p-8 text-gray-900">
      {/* Back Link */}
      <Link href="/student/courses" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
        <ArrowLeft className="h-4 w-4" /> Back to courses
      </Link>

      {/* Course Header */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold tracking-tight">{course.title}</h1>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl">{course.description}</p>
      </div>

      {/* Tabs - Link-based navigation, no client state needed */}
      <div className="mt-6 flex gap-8 border-b border-gray-200 text-sm font-medium">
        <Link
          href={`/student/courses/${courseSlug}?tab=overview`}
          className={`pb-3 transition-colors ${activeTab === 'overview'
              ? 'border-b-2 border-indigo-600 font-semibold text-indigo-600'
              : 'text-gray-500 hover:text-gray-800'
            }`}
        >
          Overview
        </Link>
        <Link
          href={`/student/courses/${courseSlug}?tab=books`}
          className={`pb-3 transition-colors ${activeTab === 'books'
              ? 'border-b-2 border-indigo-600 font-semibold text-indigo-600'
              : 'text-gray-500 hover:text-gray-800'
            }`}
        >
          Books
        </Link>
        <Link
          href={`/student/courses/${courseSlug}?tab=papers`}
          className={`pb-3 transition-colors ${activeTab === 'papers'
              ? 'border-b-2 border-indigo-600 font-semibold text-indigo-600'
              : 'text-gray-500 hover:text-gray-800'
            }`}
        >
          Past Papers
        </Link>
      </div>

      {/* Content Layout */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content (Left Side) */}
        <div className="lg:col-span-2 space-y-8">
          {activeTab === "overview" && (
            <>
              {/* About Section */}
              <div>
                <h2 className="text-lg font-bold">About this subject</h2>
                <p className="mt-2 text-gray-600 leading-relaxed">{course.about}</p>
              </div>

              {/* Specs Box */}
              <div className="grid grid-cols-2 gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Level</p>
                  <p className="mt-1 font-medium text-gray-800">{course.level}</p>

                  <p className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Learning Circle</p>
                  <p className="mt-1 font-medium text-gray-800">{course.learningCircle}</p>

                  <p className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Assignments</p>
                  <p className="mt-1 font-medium text-gray-800">{course.assignments}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recommendation for</p>
                  <p className="mt-1 font-medium text-gray-800">{course.recommendation}</p>

                  <p className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Resources</p>
                  <p className="mt-1 font-medium text-gray-800">{course.resources}</p>

                  <p className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Avg. Completion Time</p>
                  <p className="mt-1 font-medium text-gray-800">{course.completionTime}</p>
                </div>
              </div>

              {/* How to get started */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">How to get started</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-indigo-700">1</span>
                    <p>Start with the recommended book.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-indigo-700">2</span>
                    <p>Study the notes and examples.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-indigo-700">3</span>
                    <p>Practice problems regularly.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-indigo-700">4</span>
                    <p>Attempt assignments and ask questions.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "books" && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold">Recommended Books</h2>
              {course.books?.length > 0 ? (
                course.books.map((book: any) => (
                  <div key={book.id} className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{book.title}</p>
                      <p className="text-xs text-gray-500">By {book.author}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No books available for this subject yet.</p>
              )}
            </div>
          )}

          {activeTab === "papers" && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold">Past Exam Papers</h2>
              {course.papers?.length > 0 ? (
                course.papers.map((paper: any) => (
                  <div key={paper.id} className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <FileText className="h-6 w-6 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{paper.title}</p>
                      <p className="text-xs text-gray-500">Year: {paper.year}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No past papers uploaded yet.</p>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Mentor Card (Right Side) */}
        <div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm space-y-6">
            <h3 className="font-bold text-gray-900">Your Mentor</h3>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                {course.mentor.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-900">{course.mentor.name}</p>
                <p className="text-xs text-gray-500">{course.mentor.role}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Office Hours</p>
              <p className="mt-1 text-sm text-gray-700">{course.mentor.officeHours}</p>
            </div>

            <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-blue-50/50 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-blue-100">
              <MessageSquare className="h-4 w-4" /> Ask a question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}