import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
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
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('deposit')}
            className={`px-8 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'deposit' ? 'border-pink-500 text-pink-600' : 'border-transparent text-gray-500 hover:text-pink-600'
            }`}
          >
            Deposit List
          </button>
          <button
            onClick={() => setActiveTab('refund')}
            className={`px-8 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'refund' ? 'border-pink-500 text-pink-600' : 'border-transparent text-gray-500 hover:text-pink-600'
            }`}
          >
            Refund List
          </button>
          <button
            onClick={() => setActiveTab('payout')}
            className={`px-8 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'payout' ? 'border-pink-500 text-pink-600' : 'border-transparent text-gray-500 hover:text-pink-600'
            }`}
          >
            Payout List
          </button>
          <button
            onClick={() => setActiveTab('fee')}
            className={`px-8 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'fee' ? 'border-pink-500 text-pink-600' : 'border-transparent text-gray-500 hover:text-pink-600'
            }`}
          >
            Fee payment list
          </button>
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

        {/* Tab Content */}
        {activeTab === 'deposit' && (
          <div className="bg-pink-50 rounded-lg p-8 text-center">
            <div className="text-pink-800 mb-4">There is no history</div>
            <div className="text-sm text-pink-600 space-y-2">
              <p>*Deposit information before September 4, 2019 does not support displaying worker names, order amounts, or balances.</p>
              <p>Please check your usage history before we began providing storage services (before May 2016) under Usage Status.</p>
              <p>Please check your bank transfer history <Link to="#" className="text-pink-500 hover:text-pink-700 underline">here</Link>.</p>
            </div>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="space-y-6">
            {/* Refund Status */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-pink-500 px-4 py-2">
                <h3 className="text-white font-medium">Refund Status</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">Current refund amount:</span>
                  <span className="text-lg font-semibold text-pink-600">0 yen</span>
                </div>
              </div>
            </div>

            {/* Apply for Transfer Section */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-pink-500 px-4 py-2">
                <h3 className="text-white font-medium">Apply for a transfer</h3>
              </div>
              <div className="p-6 bg-pink-50">
                <div className="space-y-3">
                  <p className="text-pink-800">The application deadline is every Tuesday at 6:59am.</p>
                  <p className="text-pink-800">After the deadline, all applications received up until the deadline for that week will be processed.</p>
                  <p className="text-pink-600 text-sm italic">
                    The transfer request cannot be made because the minimum transfer amount (583 yen or more) has not been reached.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-pink-500 px-4 py-2">
                <h3 className="text-white font-medium">Benefits won by ahmedullp</h3>
              </div>
              <div className="p-4">
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-pink-50 text-pink-800">Transfer fee: Free</td>
                        <td className="px-4 py-3 text-pink-600">0 times</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-pink-50 text-pink-800">Transfer fee half price</td>
                        <td className="px-4 py-3 text-pink-600">0 times</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 space-y-2 text-sm text-pink-600">
                  <p>*The following shows the rewards obtained in past campaigns.</p>
                  <p>*There is currently no campaign running.</p>
                </div>
              </div>
            </div>

            {/* Refund History */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-pink-500 px-4 py-2">
                <h3 className="text-white font-medium">Refund History</h3>
              </div>
              <div className="p-4">
                <div className="text-center py-8 text-pink-600">
                  There is no history
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payout' && (
          <div className="bg-pink-50 rounded-lg p-8 text-center">
            <div className="text-pink-800">There is no history</div>
          </div>
        )}

        {activeTab === 'fee' && (
          <div className="bg-pink-50 rounded-lg p-8 text-center">
            <div className="text-pink-800">There is no history</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HirerPaymentHistory;