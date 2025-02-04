import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, User, ChevronDown } from 'lucide-react';
import DrawerNavigation from './DrawerNavigation';
import MiniProfileCard from './MiniProfileCard';

const InterestingList = () => {
  const [activeTab, setActiveTab] = useState('interesting');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const tabs = [
    { id: 'interesting', label: 'Interesting! List' },
    { id: 'follow', label: 'Follow Client Work' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm mb-8">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              SharApu
            </Link>
          </div>
          <div className="relative">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <User className="w-6 h-6 text-white bg-pink-500 rounded-full p-1" />
              <span className="text-gray-700">ahmedul</span>
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
            </div>
            <MiniProfileCard isOpen={isProfileOpen} />
          </div>
        </div>

        {/* Desktop navigation */}
        <DrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
          <button className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link to="/" className="text-pink-500 hover:underline">Work from home SharApu</Link>
          <span className="mx-2 text-gray-500">&gt;</span>
          <span className="text-gray-600">Interesting List</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-800 mb-8">Interesting! List</h1>

        {/* Tabs */}
        <div className="flex mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-8 text-center transition-colors duration-200 rounded-t-lg
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
        {activeTab === 'interesting' ? (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600">
              Interested! You don't have any jobs listed.
            </p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600">
              You are not following any client work.
            </p>
          </div>
        )}

        {/* Search Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/search-for-a-job"
            state={{ from: 'mainProfile' }}
            className="inline-flex items-center justify-center px-8 py-3 
              border border-pink-500 text-pink-500 rounded-md
              hover:bg-pink-50 transition-colors duration-200"
          >
            Search for a job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterestingList;