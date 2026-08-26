'use client';

import React, { useState } from 'react';

const Leaderboard = () => {
  const [filter, setFilter] = useState('national');

  const topThree = [
    {
      id: 2,
      rank: '2nd',
      badge: 'THE SOLVER',
      name: 'Annet K.',
      points: '2,850',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      accentColor: 'border-slate-300',
      order: 'order-1 md:order-1',
      height: 'md:pt-10',
    },
    {
      id: 1,
      rank: '1st',
      badge: 'THE G.O.A.T',
      name: 'Jean Dam.',
      points: '3,120',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
      accentColor: 'border-amber-400',
      order: 'order-1 md:order-2',
      isFirst: true,
    },
    {
      id: 3,
      rank: '3rd',
      badge: 'THE PROVER',
      name: 'Sonia M.',
      points: '2,410',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
      accentColor: 'border-orange-400',
      order: 'order-3 md:order-3',
      height: 'md:pt-12',
    },
  ];

  const rankings = [
    { rank: '04', name: 'Mugisha Eric', points: '2,240', isUser: false },
    { rank: '05', name: 'Kamali Divine', points: '2,115', isUser: false },
    { rank: '12', name: 'Bonte.M', points: '1,580', isUser: true },
    { rank: '13', name: 'Uwase Kelly', points: '1,490', isUser: false },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 font-sans text-slate-800">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Leaderboard</h1>
          <p className="text-sm text-slate-500">See how you rank against your peers</p>
        </div>

        {/* Filter Toggle */}
        <div className="bg-slate-100 p-1 rounded-full flex items-center w-fit self-start sm:self-auto border border-slate-200">
          <button
            onClick={() => setFilter('national')}
            className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${filter === 'national'
                ? 'bg-[#0f172a] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            National
          </button>
          <button
            onClick={() => setFilter('studyGroup')}
            className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${filter === 'studyGroup'
                ? 'bg-[#0f172a] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            Study Group
          </button>
        </div>
      </div>

      {/* Podium Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end pt-8 pb-4">
        {topThree.map((user) => (
          <div
            key={user.id}
            className={`flex flex-col items-center ${user.order} ${user.height || ''}`}
          >
            {/* Avatar Container */}
            <div className="relative mb-3">
              <div
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full p-1 border-4 ${user.accentColor} overflow-hidden shadow-md`}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {user.isFirst && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-white p-1 rounded-full shadow-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Podium Card */}
            <div
              className={`w-full bg-slate-50/80 backdrop-blur border border-slate-100 rounded-2xl p-4 flex flex-col items-center shadow-sm text-center ${user.isFirst ? 'bg-amber-50/30 border-amber-200 ring-2 ring-amber-400/20 py-6' : ''
                }`}
            >
              <span className="text-[10px] tracking-wider uppercase font-extrabold text-amber-600 bg-amber-100/80 px-2.5 py-0.5 rounded-full mb-2">
                {user.badge}
              </span>
              <h3 className="font-bold text-slate-800 text-base">{user.name}</h3>
              <div className="mt-1">
                <span className="text-xl font-black text-indigo-600 block">{user.points}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Points
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* User Status Bar */}
      <div className="bg-[#0b1329] text-white rounded-2xl p-4 md:px-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Current Rank
          </span>
          <span className="text-2xl font-extrabold text-white">#12</span>
        </div>

        <div className="h-8 w-[1px] bg-slate-800 hidden md:block" />

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Total Points
          </span>
          <span className="text-2xl font-extrabold text-white">1,580</span>
        </div>

        <div className="h-8 w-[1px] bg-slate-800 hidden md:block" />

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Next Milestone
            </span>
            <span className="text-xs text-slate-300">420 to #11</span>
          </div>
          <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full w-[65%]" />
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-indigo-50/50 rounded-2xl p-2 sm:p-4 border border-indigo-100/50">
        <div className="grid grid-cols-12 px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <div className="col-span-2 sm:col-span-2">Rank</div>
          <div className="col-span-7 sm:col-span-8">Name</div>
          <div className="col-span-3 sm:col-span-2 text-right">Points</div>
        </div>

        <div className="space-y-1">
          {rankings.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-12 items-center px-4 py-3 rounded-xl text-sm transition-colors ${row.isUser
                  ? 'bg-indigo-100/70 border border-indigo-200/80 font-bold text-indigo-950'
                  : 'bg-white/60 hover:bg-white text-slate-700'
                }`}
            >
              <div className="col-span-2 sm:col-span-2 font-bold text-slate-900">{row.rank}</div>
              <div className="col-span-7 sm:col-span-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  {row.name.charAt(0)}
                </div>
                <div className="flex items-center gap-2">
                  <span>{row.name}</span>
                  {row.isUser && (
                    <span className="bg-indigo-900 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                      You
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right font-bold text-indigo-600">
                {row.points}
              </div>
            </div>
          ))}
        </div>

        {/* Table Pagination */}
        <div className="flex items-center justify-end gap-2 mt-4 px-2">
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 bg-white/50 hover:bg-white rounded-md transition">
            Prev
          </button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 bg-white/50 hover:bg-white rounded-md transition">
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default Leaderboard;