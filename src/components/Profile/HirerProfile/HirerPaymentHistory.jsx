import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Calendar } from 'lucide-react';
import HirerDrawerNavigation from './HirerDrawerNavigation';

const HirerPaymentHistory = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [activeTab, setActiveTab] = useState('deposit');

  const handleSwitchRole = () => {
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

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const tabs = [
    { id: 'deposit', label: 'Deposit List' },
    { id: 'refund', label: 'Refund List' },
    { id: 'payout', label: 'Payout List' },
    { id: 'fee', label: 'Fee payment list' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center text-sm">
          <Link to="/" className="text-pink-600 hover:text-pink-700">Work from home Shufuti</Link>
          <span className="mx-2 text-gray-500">&gt;</span>
          <span className="text-gray-800">Payment History</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Payment History</h1>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-6 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-500 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Year and Month Selection */}
        <div className="mt-6 mb-8">
          <div className="flex items-center gap-4">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <div className="flex flex-wrap gap-2">
              {months.map((month) => (
                <button
                  key={month}
                  className="px-4 py-2 text-sm rounded-full hover:bg-pink-100 text-pink-600 transition-colors"
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* No History Message */}
        <div className="bg-pink-50 rounded-lg p-8 text-center">
          <div className="text-pink-800 mb-4">There is no history</div>
          <div className="text-sm text-pink-600 space-y-2">
            <p>*Deposit information before September 4, 2019 does not support displaying worker names, order amounts, or balances.</p>
            <p>Please check your usage history before we began providing storage services (before May 2016) under Usage Status.</p>
            <p>Please check your bank transfer history <Link to="#" className="text-pink-500 hover:text-pink-700 underline">here</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirerPaymentHistory;