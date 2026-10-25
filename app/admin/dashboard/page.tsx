import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  subtext?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, subtext }) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
    <div>
      <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-1">
        {label}
      </p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
    {subtext && (
      <p className="text-xs text-gray-400 mt-2 font-medium">{subtext}</p>
    )}
  </div>
);

interface AttentionItemProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const AttentionItem: React.FC<AttentionItemProps> = ({ title, description, onClick }) => (
  <div 
    onClick={onClick}
    className="group bg-white border border-gray-200/80 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-gray-300 transition-all shadow-2xs"
  >
    <div>
      <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
    </div>
    <ArrowRight className="w-4 h-4 text-indigo-600 transition-transform group-hover:translate-x-1 shrink-0 ml-3" />
  </div>
);

interface ActivityItemProps {
  text: string;
  date: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ text, date }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 text-xs">
    <span className="text-gray-700 font-medium">{text}</span>
    <span className="text-gray-400 font-medium shrink-0 ml-4">{date}</span>
  </div>
);

export default function DashboardMain() {
  const metrics = [
    { label: 'TOTAL STUDENTS', value: '2,480' },
    { label: 'TOTAL MENTORS', value: '42' },
    { label: 'JUNIOR STUDENTS', value: '1,320', subtext: 'S1–S3' },
    { label: 'SENIOR STUDENTS', value: '1,160', subtext: 'S4–S6' },
    { label: 'ACTIVE COURSES', value: '4', subtext: 'Mathematics' },
  ];

  const attentionItems = [
    {
      title: 'Assignment reviews pending',
      description: '8 submissions are currently with mentors · 9 awaiting distribution.',
    },
    {
      title: 'Results awaiting publication',
      description: '2 assignments have completed reviews.',
    },
    {
      title: 'Mentor access requests',
      description: '3 mentor accounts require attention.',
    },
  ];

  const recentActivities = [
    { text: '24 students submitted Quadratic Equations Practice', date: 'Today' },
    { text: 'Mentor Jean Claude completed 8 reviews', date: 'Today' },
    { text: 'Admin published Geometry Problems results', date: 'Yesterday' },
    { text: '12 new student accounts were created', date: 'Yesterday' },
    { text: 'Divisibility and Modular Arithmetic opened for submissions', date: 'Sep 27' },
    { text: '3 mentor access requests are awaiting review', date: 'Sep 26' },
  ];

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 font-sans text-gray-800">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Good afternoon, Admin
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-normal">
          Platform overview — manage users, curriculum, assignments and the results workflow.
        </p>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {metrics.map((metric, idx) => (
          <MetricCard
            key={idx}
            label={metric.label}
            value={metric.value}
            subtext={metric.subtext}
          />
        ))}
      </div>

      {/* Main Content Sections: Needs attention & Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Needs Attention Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Needs attention</h2>
            <p className="text-xs text-gray-500 mb-6">What requires action right now.</p>
            
            <div className="space-y-3">
              {attentionItems.map((item, idx) => (
                <AttentionItem
                  key={idx}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80">
          <h2 className="text-xl font-bold text-gray-900">Recent activity</h2>
          <p className="text-xs text-gray-500 mb-4">Latest events across the platform.</p>
          <div className="mt-2 divide-y divide-gray-100">
            {recentActivities.map((act, idx) => (
              <ActivityItem key={idx} text={act.text} date={act.date} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
