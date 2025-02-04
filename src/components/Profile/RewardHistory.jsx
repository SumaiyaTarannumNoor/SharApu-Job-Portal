import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Clock, AlertCircle, ChevronDown } from 'lucide-react';
import DrawerNavigation from './DrawerNavigation';

const RewardHistory = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [filterOption, setFilterOption] = useState('all');
  const username = 'ahmedul'; // This could come from your auth context/state

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        <DrawerNavigation/>
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <Link to="/" className="text-pink-500 hover:underline">
          Work from home SharApu
        </Link>
        <span className="mx-2 text-gray-500">&gt;</span>
        <span className="text-gray-600">Reward History</span>
      </nav>

      {/* Title */}
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

      {/* Benefits Section */}
      <div className="bg-white rounded-lg shadow-sm border border-pink-100 mb-8">
        <div className="bg-pink-100 p-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Benefits earned by {username}
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="flex items-center">
            <div className="w-1/2 p-4 bg-pink-500">
              <span className="text-white">Transfer fee: Free</span>
            </div>
            <div className="w-1/2 p-4">
              <span className="text-white">0 times</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/2 p-4 bg-pink-200">
              <span className="text-pink-600">Transfer fee half price</span>
            </div>
            <div className="w-1/2 p-4">
              <span className="text-pink-600">0 times</span>
            </div>
          </div>
        </div>
        <div className="p-4 text-sm text-gray-500">
          *The following shows the rewards obtained in past campaigns.
        </div>
        <div className="p-4 text-sm text-gray-500 border-t">
          *There is currently no campaign running.
        </div>
      </div>

      {/* Reward History Section */}
      <div className="bg-white rounded-lg shadow-sm border border-pink-100">
        <div className="bg-pink-100 p-4">
          <h2 className="font-semibold text-lg text-gray-800">Reward History</h2>
        </div>
        <div className="p-4">
          {/* Filter Dropdown */}
          <div className="relative inline-block mb-4">
            <select
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
              className="appearance-none bg-white border rounded-md px-4 py-2 pr-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="all">all</option>
              <option value="received">Received</option>
              <option value="pending">Pending</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* No History Message */}
          <div className="text-gray-600 py-4">
            No reward history
          </div>

          {/* Usage Status Notice */}
          <div className="mt-8 text-sm text-gray-600">
            Please check your usage history before we began providing storage services (before May 2016) under{' '}
            <Link to="/usage-status" className="text-pink-500 hover:underline">
              Usage Status
            </Link>
            .
          </div>
        </div>
      </div>

      {/* Transfer Application Section from previous version */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
        <div className="bg-pink-50 p-4 border-b border-pink-100">
          <h2 className="font-semibold text-lg text-gray-800">Transfer Application</h2>
        </div>
        <div className="p-6">
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

          <div className="flex items-start gap-4 bg-pink-50 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5 text-pink-500 mt-1" />
            <p className="text-gray-600">
              The transfer request cannot be made because the minimum transfer amount (363 yen or more) has not been reached.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardHistory;