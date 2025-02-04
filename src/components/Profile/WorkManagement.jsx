import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import DrawerNavigation from './DrawerNavigation';

const WorkManagement = () => {
  const [selectedTab, setSelectedTab] = useState('in-progress');
  const [displayNumber, setDisplayNumber] = useState('20');

  const tabs = [
    { id: 'applying', label: 'Currently applying', count: 0 },
    { id: 'in-progress', label: 'In progress', count: 0 },
    { id: 'end', label: 'End', count: 0 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <DrawerNavigation />
      <nav className="text-sm mb-8">
        <Link to="/" className="text-pink-400 hover:underline">Work from home SharApu</Link>
        <span className="mx-2 text-gray-500">&gt;</span>
        <span className="text-gray-600">Search for a job</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-800 mb-8">Work Management</h1>

      {/* Tabs and Display Number */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`
                flex-1 py-4 px-6 text-center
                ${selectedTab === tab.id 
                  ? 'bg-blue-400 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
                transition-colors duration-200
              `}
            >
              {tab.label}: {tab.count}
            </button>
          ))}
        </div>

        <div className="relative ml-4">
          <select
            value={displayNumber}
            onChange={(e) => setDisplayNumber(e.target.value)}
            className="appearance-none bg-white border rounded-md px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="20">20 Results</option>
            <option value="50">50 Results</option>
            <option value="100">100 Results</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-600">There is currently no work in progress.</p>
      </div>

      {/* Input Core System Link */}
      <div className="mt-8 text-right">
        <Link 
          to="/input-core-system"
          className="text-pink-400 hover:underline inline-flex items-center"
        >
          Click here for "Input Core System" 
          <span className="ml-1">&gt;</span>
        </Link>
      </div>

      {/* Search Button */}
      <div className="mt-8 flex justify-center">
        <Link
          to="/search-for-a-job"
          className="bg-pink-400 text-white px-8 py-3 rounded-md hover:bg-blue-500 transition-colors duration-200"
        >
          Search for a job
        </Link>
      </div>
    </div>
  );
};

export default WorkManagement;