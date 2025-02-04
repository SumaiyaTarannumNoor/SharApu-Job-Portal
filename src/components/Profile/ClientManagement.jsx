import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import DrawerNavigation from './DrawerNavigation';
import MiniProfileCard from './MiniProfileCard';

const ClientManagement = () => {
  const [activeTab, setActiveTab] = useState('follow');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const tabs = [
    { id: 'follow', label: 'Follow' },
    { id: 'partner', label: 'Partner' }
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
          <Link to="/" className="text-pink-500 hover:underline">
            Work from home SharApu
          </Link>
          <span className="mx-2 text-gray-500">&gt;</span>
          <Link to="/client-management" className="text-pink-500 hover:underline">
            Client Management
          </Link>
          <span className="mx-2 text-gray-500">&gt;</span>
          <span className="text-gray-600">Follow list</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-800 mb-8">Client Management</h1>

        {/* Tabs */}
        <div className="flex mb-6 border-b">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-12 text-center transition-colors duration-200 relative
                ${activeTab === tab.id 
                  ? 'text-pink-500 font-medium' 
                  : 'text-gray-600 hover:text-pink-400'
                }
              `}
            >
              {tab.label}
              {/* Active Tab Indicator */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {activeTab === 'follow' ? (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-4">You are not following any clients.</p>
            <p className="text-gray-600">
              If you follow a client, you can receive their latest updates.
            </p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700">
              No partner relationships established.
            </p>
          </div>
        )}

        {/* Find Clients Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/search-for-a-job"
            state={{ from: 'mainProfile' }}
            className="inline-flex items-center justify-center px-8 py-3 
              bg-pink-500 text-white rounded-md
              hover:bg-pink-600 transition-colors duration-200"
          >
            Find Clients
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;