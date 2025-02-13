import React from 'react';
import { Settings, User, Mail, Lock, CreditCard, Gift, UserX, Info, Bell } from 'lucide-react';

const HirerSettings = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6 mt-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-pink-800 mb-6 flex items-center gap-2">
          <Settings className="w-6 h-6" />
          Hirer Settings
        </h1>

        {/* Settings Menu */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-pink-700 mb-4">Settings Menu</h2>
        </div>

        {/* General Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-pink-700 mb-4">General Settings</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <User className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Notification</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <Bell className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy and Security Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-pink-700 mb-4">Privacy and Security Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Info className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Personal Information"
                className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                placeholder="Email Address"
                className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Lock className="w-5 h-5" />
              </span>
              <input
                type="password"
                placeholder="Login Password"
                className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-pink-700 mb-4">Payment Settings</h2>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <CreditCard className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="RefunD account"
              className="pl-10 w-full border border-pink-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>

        {/* Others */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-pink-700 mb-4">Others</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors">
              <Gift className="w-5 h-5" />
              <span>Receive a gift</span>
            </button>
            <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors">
              <Info className="w-5 h-5" />
              <span>Insurance Status</span>
            </button>
            <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors">
              <UserX className="w-5 h-5" />
              <span>Cancel your membership</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirerSettings;