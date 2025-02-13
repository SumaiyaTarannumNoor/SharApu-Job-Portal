import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, User, Mail, Lock, CreditCard, Gift, UserX, Info, Bell, Eye, ShieldCheck, ChevronDown } from 'lucide-react';
import HirerUserSettingSidebar from './HirerUserSettingSidebar';
import MiniProfileCard from '../MiniProfileCard';
import HirerDrawerNavigation from './HirerDrawerNavigation';

const HirerSettings = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
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
              <ChevronDown 
                className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                  isProfileOpen ? 'transform rotate-180' : ''
                }`} 
              />
            </div>
            <MiniProfileCard isOpen={isProfileOpen} />
          </div>
        </div>

        <HirerDrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted.
          <button className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 p-4">
          <HirerUserSettingSidebar />
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm">
              <span className="text-gray-500">Work from home Shuful</span>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-gray-700">User Settings</span>
            </div>

            {/* Settings Menu */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-pink-700">Settings Menu</h2>
            </div>

            {/* General Settings */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-pink-700 mb-4">General settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Username"
                      className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <Eye className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="icon"
                        className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    <span className="text-pink-500 text-sm ml-2">Not set</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <Info className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="self-introduction"
                        className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    <span className="text-pink-500 text-sm ml-2">Not set</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="relative">
                  <Bell className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="notification"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
            </div>

            {/* Privacy and Security Settings */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-pink-700 mb-4">Privacy and Security Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="relative">
                  <Info className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="personal information"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div className="relative">
                  <Mail className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="email address"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div className="relative">
                  <Lock className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    placeholder="Login Password"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <ShieldCheck className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Verify your identity"
                        className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    <span className="text-pink-500 text-sm ml-2">Not set</span>
                  </div>
                </div>
                <div className="relative">
                  <User className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="block"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
            </div>

            {/* Payment Settings */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-pink-700 mb-4">Payment Settings</h2>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex-grow">
                    <CreditCard className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Refund account"
                      className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                  </div>
                  <span className="text-pink-500 text-sm ml-2">Not set</span>
                </div>
              </div>
            </div>

            {/* Others */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-pink-700 mb-4">others</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Info className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Introducing Shufuti"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div className="relative">
                  <Gift className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Receive a gift"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div className="relative">
                  <UserX className="w-5 h-5 text-pink-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Cancel your membership"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirerSettings;