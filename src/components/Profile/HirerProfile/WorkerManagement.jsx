import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import HirerDrawerNavigation from './HirerDrawerNavigation';

const WorkerManagement = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('follow');
  
  const navigate = useNavigate();
  
  const handleSwitchRole = () => {
    navigate('/choose-role');
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
          <h1 className="text-2xl font-bold px-6 py-4">Worker Management</h1>
          
          <div className="flex border-b">
            <button
              className={`px-8 py-3 ${activeTab === 'follow' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setActiveTab('follow')}
            >
              Follow
            </button>
            <button
              className={`px-8 py-3 ${activeTab === 'partner' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setActiveTab('partner')}
            >
              Partner
            </button>
          </div>

          <div className="p-6">
            <p className="text-gray-600 mb-4">
              There are no workers you are currently following. Search for workers you are interested in by clicking
              <Link to="/find-worker" className="text-pink-600 hover:text-pink-700 mx-1">
                "Find a Worker"
              </Link>
              , or follow workers you have done business with. By following a worker, you can leave notes for each worker and introduce their work all at once.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkerManagement;