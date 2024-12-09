import React from 'react';
import { BookOpen, Calendar, CheckSquare, Layout, FileText } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Layout, current: true },
  { name: 'Courses', icon: BookOpen, current: false },
  { name: 'Tasks', icon: CheckSquare, current: false },
  { name: 'Calendar', icon: Calendar, current: false },
  { name: 'Notes', icon: FileText, current: false },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              className={`
                w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md
                ${item.current
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
              `}
            >
              <item.icon
                className={`
                  mr-3 h-6 w-6
                  ${item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'}
                `}
              />
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}