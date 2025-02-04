import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare } from 'lucide-react';
import DrawerNavigation from './DrawerNavigation';

const InterestingList = () => {
  const [activeTab, setActiveTab] = useState('interesting');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const tabs = [
    { id: 'interesting', label: 'Interesting! List' },
    { id: 'follow', label: 'Follow Client Work' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <DrawerNavigation />
      <nav className="text-sm mb-8">
        <Link to="/" className="text-pink-500 hover:underline">Work from home SharApu</Link>
        <span className="mx-2 text-gray-500">&gt;</span>
        <span className="text-gray-600">Search for a job</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-800 mb-8">Interesting! List</h1>

      {/* Tabs */}
      <div className="flex mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              py-4 px-8 text-center transition-colors duration-200
              ${activeTab === tab.id 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Toggle for available jobs */}
      <div className="flex justify-end mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showOnlyAvailable}
            onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
            className="hidden"
          />
          <div className={`
            w-5 h-5 border rounded mr-2 flex items-center justify-center
            ${showOnlyAvailable ? 'bg-pink-500 border-pink-500' : 'border-gray-300'}
          `}>
            {showOnlyAvailable && <CheckSquare className="w-4 h-4 text-white" />}
          </div>
          <span className="text-gray-700">Only available jobs</span>
        </label>
      </div>

      {/* Content Area */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-600">
          Interested! You don't have any jobs listed.
        </p>
      </div>

      {/* Search Button */}
      <div className="mt-8 flex justify-center">
        <Link
          to="/search-for-a-job"
          className="inline-flex items-center justify-center px-8 py-3 
            border border-pink-500 text-pink-500 rounded-md
            hover:bg-pink-50 transition-colors duration-200"
        >
          Search for a job
        </Link>
      </div>
    </div>
  );
};

export default InterestingList;