import { Calculator, Trophy, ChevronRight, ChevronLeft, CheckCircle2, MessageSquare, Award } from "lucide-react";
import Link from "next/link";

// This can be a Server Component - just rendering static data
// In production, you'd fetch dashboard data here

export default function StudentDashboard() {
    return (
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-8">

                {/* Full-Width Welcome Banner */}
                <div className="relative overflow-hidden rounded-3xl bg-[#030959] p-8 text-white shadow-sm flex flex-col justify-between min-h-[220px]">
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                        <div className="w-48 h-48 border-2 border-white/40 rounded-3xl rotate-12 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                            <Calculator className="w-20 h-20 text-white" />
                        </div>
                    </div>

                    <div className="relative z-10 max-w-md space-y-2">
                        <h1 className="text-3xl font-extrabold tracking-tight">Welcome back, Bonte</h1>
                        <p className="text-sm text-blue-100/80 leading-relaxed font-light">
                            &quot;Mistakes are the steps of the ladder that lead to excellence. Keep climbing.&quot;
                        </p>
                    </div>

                    <div className="relative z-10 mt-6">
                        <p className="text-2xl font-black">1,402</p>
                        <p className="text-[10px] font-bold tracking-widest text-blue-200/70 uppercase">
                            Problems Solved
                        </p>
                    </div>
                </div>

                {/* Active Courses Section */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Active Courses</h3>
                        <Link href="/student/courses" className="text-xs font-semibold text-slate-600 bg-white/80 border border-slate-200 px-4 py-1.5 rounded-full flex items-center gap-1 hover:bg-white shadow-sm transition-colors">
                            View All <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Advanced Algebra */}
                        <Link href="/student/courses/algebra" className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-[170px] hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="space-y-2">
                                <span className="px-3.5 py-2 bg-blue-50 text-blue-600 rounded-xl inline-block text-lg font-bold">∑</span>
                                <h4 className="font-bold text-slate-800 text-base">Advanced Algebra</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Mastering polynomial equations and complex numbers.</p>
                            </div>
                            <button className="bg-[#03045e] text-white text-[11px] font-bold px-5 py-2 rounded-xl w-fit mt-4 hover:bg-[#0b1784]">Continue</button>
                        </Link>

                        {/* Number Theory */}
                        <Link href="/student/courses/number-theory" className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-[170px] hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="space-y-2">
                                <span className="px-3.5 py-2 bg-teal-50 text-teal-700 rounded-xl inline-block text-lg font-bold">#</span>
                                <h4 className="font-bold text-slate-800 text-base">Number Theory</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Modular arithmetic, primes, and divisibility properties.</p>
                            </div>
                            <button className="bg-[#003B46] text-white text-[11px] font-bold px-5 py-2 rounded-xl w-fit mt-4 hover:bg-[#005662]">Continue</button>
                        </Link>

                        {/* Combinatorics */}
                        <Link href="/student/courses/combinatorics" className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-[170px] hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="space-y-2">
                                <span className="px-3.5 py-2 bg-purple-50 text-purple-600 rounded-xl inline-block text-lg font-bold">☍</span>
                                <h4 className="font-bold text-slate-800 text-base">Combinatorics</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Advanced counting, graph theory, and pigeonhole principle.</p>
                            </div>
                            <button className="bg-[#6c2bd9] text-white text-[11px] font-bold px-5 py-2 rounded-xl w-fit mt-4 hover:bg-[#5b21b6]">Continue</button>
                        </Link>

                        {/* Geometry */}
                        <Link href="/student/courses/geometry" className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-[170px] hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="space-y-2">
                                <span className="px-3.5 py-2 bg-red-50 text-red-600 rounded-xl inline-block text-lg font-bold">△</span>
                                <h4 className="font-bold text-slate-800 text-base">Geometry</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Exploring Euclidean geometry and spatial reasoning.</p>
                            </div>
                            <button className="bg-red-600 text-white text-[11px] font-bold px-5 py-2 rounded-xl w-fit mt-4 hover:bg-red-700">Continue</button>
                        </Link>
                    </div>
                </div>

                {/* Current Assignments Section */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Current Assignments</h3>
                        <Link href="/student/assignments" className="text-xs font-semibold text-slate-600 bg-white/80 border border-slate-200 px-4 py-1.5 rounded-full flex items-center gap-1 hover:bg-white shadow-sm transition-colors">
                            View All <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2">
                        <table className="w-full text-left text-xs">
                            <thead>
                                <tr className="border-b border-slate-100 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                                    <th className="py-4 px-6">Course Name</th>
                                    <th className="py-4 px-6">Deadline</th>
                                    <th className="py-4 px-6">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 font-medium text-slate-700">
                                <tr>
                                    <td className="py-4 px-6 font-bold text-slate-800">Advanced Algebra</td>
                                    <td className="py-4 px-6 text-slate-500">Jul 28, 2026</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-red-50 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                                            • Urgent • 4 days left
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-bold text-slate-800">Combinatorics</td>
                                    <td className="py-4 px-6 text-slate-500">Jul 29, 2026</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                                            • In Progress • 5 days
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-bold text-slate-800">Number Theory</td>
                                    <td className="py-4 px-6 text-slate-500">Jul 31, 2026</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                                            • Scheduled • 7 days
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">

                {/* National Ranking Card */}
                <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100 flex flex-col justify-between min-h-[200px]">
                    <div>
                        <div className="flex items-start justify-between">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                National Ranking
                            </span>
                            <Trophy className="w-10 h-10 text-purple-200 stroke-[1.2]" />
                        </div>
                        <h2 className="text-5xl font-black text-[#03045e] mt-2">#4</h2>
                        <p className="mt-4 text-xs font-medium text-slate-500">
                            <span className="font-bold text-[#03045e]">120 points</span> to reach #3.
                        </p>
                    </div>
                    <Link href="/student/leaderboard" className="w-full mt-6 rounded-2xl bg-[#03045e] py-3 text-xs font-semibold text-white transition-colors hover:bg-[#0b1784] text-center">
                        Full Leaderboard
                    </Link>
                </div>

                {/* Calendar Widget */}
                <div className="bg-[#f3f4f9] p-6 rounded-3xl border border-slate-100 shadow-sm relative">
                    <div className="flex items-center justify-between mb-6">
                        <ChevronLeft className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-800" />
                        <span className="text-sm font-bold text-slate-800">October 2024</span>
                        <ChevronRight className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-800" />
                    </div>

                    <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-slate-400 mb-3">
                        <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                    </div>

                    <div className="grid grid-cols-7 text-center text-xs gap-y-3 font-medium text-slate-600">
                        <span className="text-slate-300">28</span><span className="text-slate-300">29</span><span className="text-slate-300">30</span>
                        <span>1</span><span>2</span><span>3</span><span>4</span>
                        <span className="relative">5<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span></span>
                        <span>6</span><span>7</span>
                        <span className="bg-[#03045e] text-white rounded-xl w-7 h-7 flex items-center justify-center mx-auto text-xs font-bold shadow-md">8</span>
                        <span>9</span><span>10</span>
                        <span className="relative">11<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span></span>
                        <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span>
                        <span className="relative">17<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span></span>
                        <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span>
                    </div>
                </div>

                {/* Recent Alerts Widget */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                    <h3 className="text-base font-bold text-slate-800">Recent Alerts</h3>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">Assignment Graded: Advanced Algebra Quiz</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">2 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">Assignment Graded: Advanced Algebra Quiz</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">2 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl shrink-0">
                                <MessageSquare className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">New Comment: Jean-Luc replied to your thread</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">5 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl shrink-0">
                                <MessageSquare className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">New Comment: Jean-Luc replied to your thread</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">5 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                                <Award className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">Badge Unlocked: Consistency Master (7 Day Streak)</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">Yesterday</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/student/assignments" className="w-full text-center text-xs font-bold text-blue-600 hover:text-blue-800 pt-2 block transition-colors">
                        View More Activity
                    </Link>
                </div>

            </div>
        </div>
    );
}
