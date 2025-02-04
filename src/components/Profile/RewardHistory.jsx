import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Clock, AlertCircle } from 'lucide-react';
import DrawerNavigation from './DrawerNavigation';

const RewardHistory = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        <DrawerNavigation />
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <Link to="/" className="text-pink-500 hover:underline">
          Work from home SharApu
        </Link>
        <span className="mx-2 text-gray-500">&gt;</span>
        <span className="text-gray-600">Reward History</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <Wallet className="w-8 h-8 text-pink-500" />
        Reward History
      </h1>

      {/* Tabs */}
      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab('history')}
          className={`
            py-3 px-8 text-center transition-colors duration-200 relative
            ${activeTab === 'history' 
              ? 'bg-pink-500 text-white rounded-t-lg' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-t-lg'
            }
          `}
        >
          Reward History
        </button>
        <button
          onClick={() => setActiveTab('withdrawal')}
          className={`
            py-3 px-8 text-center transition-colors duration-200 relative
            ${activeTab === 'withdrawal' 
              ? 'bg-pink-500 text-white rounded-t-lg' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-t-lg'
            }
          `}
        >
          Withdrawal List
        </button>
      </div>

      {/* Reward Status Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="bg-pink-50 p-4 border-b border-pink-100">
          <h2 className="font-semibold text-lg text-gray-800">Reward Status</h2>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-gray-600 mb-2">Current Reward Amount</h3>
            <p className="text-3xl font-bold text-pink-600">0 yen</p>
          </div>
        </div>
      </div>

      {/* Transfer Application Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-pink-50 p-4 border-b border-pink-100">
          <h2 className="font-semibold text-lg text-gray-800">Transfer Application</h2>
        </div>
        <div className="p-6">
          {/* Deadline Info */}
          <div className="flex items-start gap-4 mb-6">
            <Clock className="w-5 h-5 text-pink-500 mt-1" />
            <div>
              <p className="font-medium mb-2">
                The application deadline is <span className="text-pink-600">every Tuesday at 6:59am</span>
              </p>
              <p className="text-gray-600">
                After the deadline, all applications received up until the deadline for that week will be processed.
              </p>
            </div>
          </div>

          {/* Transfer Notice */}
          <div className="flex items-start gap-4 bg-pink-50 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5 text-pink-500 mt-1" />
            <p className="text-gray-600">
              The transfer request cannot be made because the minimum transfer amount (363 yen or more) has not been reached.
            </p>
          </div>
        </div>
      </div>

      {/* Transaction History Table - You can add this if needed */}
      {activeTab === 'history' && (
        <div className="mt-8">
          {/* Add transaction history table here */}
        </div>
      )}

      {/* Withdrawal List Table - You can add this if needed */}
      {activeTab === 'withdrawal' && (
        <div className="mt-8">
          {/* Add withdrawal list table here */}
        </div>
      )}
    </div>
  );
};

export default RewardHistory;