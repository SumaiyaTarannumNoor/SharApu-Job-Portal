import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';

const HirerWorkManagement = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inProgress');
  
  const handleSwitchRole = () => {
    // Handle role switching logic
    console.log('Switching role...');
  };

  const MiniProfileCard = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Profile</div>
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Settings</div>
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer text-red-600">Logout</div>
      </div>
    );
  };

  const HirerDrawerNavigation = () => (
    <nav className="hidden md:flex border-b border-gray-200">
      <div className="flex px-4 gap-6">
        <Link to="/dashboard" className="px-4 py-3 text-pink-600 border-b-2 border-pink-600">
          Work Management
        </Link>
        <Link to="/jobs" className="px-4 py-3 text-gray-600 hover:text-pink-600">
          Job Listings
        </Link>
        <Link to="/workers" className="px-4 py-3 text-gray-600 hover:text-pink-600">
          Find Workers
        </Link>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              SharApu
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSwitchRole}
              className="
                px-6 py-2 
                font-semibold 
                text-white 
                rounded-full 
                bg-gradient-to-r from-pink-500 to-pink-600 
                hover:from-pink-600 hover:to-pink-700 
                transition-all duration-200 
                shadow-lg hover:shadow-xl 
                transform hover:-translate-y-0.5
                border border-pink-200
                hover:border-pink-300
              "
            >
              Switch Role
            </button>
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
        </div>

        <HirerDrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
          <Link to="/payment-account" className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 ${activeTab === 'waiting' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-600'}`}
              onClick={() => setActiveTab('waiting')}
            >
              0 items waiting to be posted
            </button>
            <button
              className={`px-6 py-3 ${activeTab === 'inProgress' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('inProgress')}
            >
              In progress 0
            </button>
            <button
              className={`px-6 py-3 ${activeTab === 'end' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-600'}`}
              onClick={() => setActiveTab('end')}
            >
              End 0 items
            </button>
          </div>

          <div className="p-6">
            <div className="text-center text-gray-600 py-8">
              There is currently no work in progress.
            </div>
            
            <div className="flex justify-center mt-4">
              <button className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
                Register a job
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HirerWorkManagement;