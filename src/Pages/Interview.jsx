import React from 'react';
import { Search } from 'lucide-react';

const Interview = () => {
  return (
    <div className="w-full bg-white py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-base text-gray-700 mb-2">Your guide to working from home success</h1>
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold text-pink-500 flex items-center gap-2">
              <span className="text-pink-300">•</span>
              Shufuti Blog
              <span className="text-pink-300">•</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-2">
            <Search className="w-6 h-6 text-gray-500" />
            <span className="text-gray-700">Search</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">For those looking for work</h2>
          </div>
          
          <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">For those who want to order work</h2>
          </div>
          
          <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">Beginner's Guide</h2>
          </div>
          
          <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">Shufuti NEWS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;