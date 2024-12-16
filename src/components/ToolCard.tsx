import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function ToolCard({ icon: Icon, title, description, onClick }: ToolCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-left w-full group"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}