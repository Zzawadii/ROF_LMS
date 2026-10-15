import React from 'react';
import Link from 'next/link';
import { Clock } from 'lucide-react';

interface Assignment {
  id: string;
  name: string;
  course: string;
  subCategory?: string;
  deadline: string;
  status: 'Needs Revision' | 'Completed' | 'In Review' | 'Submitted';
  filterCategory: 'In Progress' | 'Submitted' | 'Reviewed';
}

interface AssignmentTableProps {
  assignments: Assignment[];
}

const getStatusBadge = (status: Assignment['status']) => {
  switch (status) {
    case 'Needs Revision':
      return 'bg-red-100 text-red-500 hover:bg-red-200';
    case 'Completed':
      return 'bg-blue-100 text-blue-600 hover:bg-blue-200';
    case 'In Review':
      return 'bg-orange-100 text-orange-500 hover:bg-orange-200';
    case 'Submitted':
      return 'bg-green-100 text-green-600 hover:bg-green-200';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

// This is a Server Component - just renders data
export default function AssignmentTable({ assignments }: AssignmentTableProps) {
  return (
    <div className="border border-blue-200/80 rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#DCE3F6] text-gray-700 text-sm font-bold">
              <th className="py-4 px-6">Assignment Name</th>
              <th className="py-4 px-6">Course/Module</th>
              <th className="py-4 px-6">Suggested Deadline</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {assignments.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 px-6 font-bold text-gray-900 text-xs max-w-xs truncate">
                  {item.name}
                </td>
                <td className="py-4 px-6">
                  <div className="font-bold text-gray-800 text-xs">
                    {item.course}
                  </div>
                  {item.subCategory && (
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      {item.subCategory}
                    </div>
                  )}
                </td>
                <td className="py-4 px-6 text-xs font-bold text-gray-800">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500 stroke-[1.5]" />
                    <span>{item.deadline}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold cursor-pointer transition ${getStatusBadge(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <Link
                    href={`/student/assignments/${item.id}`}
                    className="text-xs font-bold text-gray-600 hover:text-gray-900 transition"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
