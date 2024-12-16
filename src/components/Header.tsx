import React from 'react';
import { Wrench } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-3">
          <Wrench className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Online Tools</h1>
        </div>
      </div>
    </header>
  );
}