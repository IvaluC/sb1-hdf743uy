import React from 'react';
import { PlusCircle, BookOpen, Clock, Brain } from 'lucide-react';

const actions = [
  { name: 'New Note', icon: PlusCircle, color: 'bg-blue-500' },
  { name: 'Study Session', icon: Clock, color: 'bg-green-500' },
  { name: 'Quick Quiz', icon: Brain, color: 'bg-purple-500' },
  { name: 'Review Material', icon: BookOpen, color: 'bg-orange-500' },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action) => (
        <button
          key={action.name}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`${action.color} p-3 rounded-full text-white mb-3`}>
            <action.icon className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium text-gray-900">{action.name}</span>
        </button>
      ))}
    </div>
  );
}