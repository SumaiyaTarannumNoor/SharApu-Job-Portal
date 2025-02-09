import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProfileWorkManagement = () => {
  const [displayNumber, setDisplayNumber] = useState(20);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const statuses = [
    { label: 'Currently applying', count: 0 },
    { label: 'In progress', count: 0 },
    { label: 'End', count: 1, suffix: 'item' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center mb-6">
        <nav className="text-sm breadcrumbs">
          <span className="text-pink-500 hover:underline cursor-pointer">Work from home SharApu</span>
          <span className="mx-2">›</span>
          <span className="font-semibold">Work Management</span>
        </nav>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-gray-800">Work Management</h1>

      {/* Status Tabs */}
      <div className="flex mb-8 border-b">
        {statuses.map((status, index) => (
          <div
            key={status.label}
            className={`px-6 py-3 cursor-pointer relative ${
              index === 1 ? 'bg-pink-500 text-white rounded-t-lg' : 'text-gray-600 hover:text-pink-500'
            }`}
          >
            {status.label}: {status.count}
            {status.suffix && ` ${status.suffix}`}
            {index === 1 && <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500"></div>}
          </div>
        ))}

        {/* Display Number Dropdown */}
        <div className="ml-auto relative">
          <div className="flex items-center text-sm text-gray-600">
            Display number:
            <div
              className="ml-2 px-3 py-1 border rounded-md flex items-center cursor-pointer hover:border-pink-500"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {displayNumber} Results
              <ChevronDown className="ml-2 w-4 h-4" />
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
              {[10, 20, 30, 50].map((number) => (
                <div
                  key={number}
                  className="px-4 py-2 hover:bg-pink-50 cursor-pointer"
                  onClick={() => {
                    setDisplayNumber(number);
                    setIsDropdownOpen(false);
                  }}
                >
                  {number} Results
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Empty State */}
      <div className="text-center py-12">
        <p className="text-gray-600 mb-8">There is currently no work in progress.</p>
        <a
          href="#"
          className="text-pink-500 hover:underline block mb-8"
        >
          Click here for "Input Core System" ›
        </a>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors">
          Search for a job
        </button>
      </div>
    </div>
  );
};

export default ProfileWorkManagement;