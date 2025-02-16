import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User } from 'lucide-react';
import DrawerNavigation from './DrawerNavigation';
import MiniProfileCard from './MiniProfileCard';
import WorkManagement_InProgress from './WorkManagement_InProgress';
import WorkManagement_EndItem from './WorkManagement_EndItem';

const WorkManagement = () => {
  const [selectedTab, setSelectedTab] = useState('in-progress');
  const [displayNumber, setDisplayNumber] = useState('20');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const tabs = [
    { id: 'applying', label: 'Currently applying', count: 0 },
    { id: 'in-progress', label: 'In progress', count: 0 },
    { id: 'end', label: 'End', count: 1 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
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

      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <Link to="/" className="text-pink-500 hover:underline">Work from home SharApu</Link>
        <span className="mx-2 text-gray-500">&gt;</span>
        <span className="text-gray-600">Work Management</span>
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
                  ? 'bg-pink-500 text-white' 
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
            className="appearance-none bg-white border rounded-md px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="20">20 Results</option>
            <option value="50">50 Results</option>
            <option value="100">100 Results</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Content Area */}
      {selectedTab === 'in-progress' && <WorkManagement_InProgress />}
      {selectedTab === 'end' && <WorkManagement_EndItem />}
      {selectedTab === 'applying' && <WorkManagement_InProgress />}

      {/* Input Core System Link */}
      <div className="mt-8 text-right">
        <Link 
          to="/input-core-system"
          className="text-pink-500 hover:underline inline-flex items-center"
        >
          Click here for "Input Core System" 
          <span className="ml-1">&gt;</span>
        </Link>
      </div>

      {/* Search Button */}
      <div className="mt-8 flex justify-center">
        <Link
          to="/search-for-a-job"
          state={{ from: 'mainProfile' }}
          className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors duration-200"
        >
          Search for a job
        </Link>
      </div>
    </div>
  );
};

export default WorkManagement;