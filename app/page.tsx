import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-4xl font-bold text-slate-900">Olympiads LMS</h1>
        <p className="text-slate-600">Choose your portal</p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/student/dashboard"
            className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Student Portal
          </Link>

          <Link
            href="/mentor/dashboard"
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            Mentor Portal
          </Link>
        </div>
      </div>
    </div>
  );
}