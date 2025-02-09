import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProfileClientManagement = () => {
  const [activeTab, setActiveTab] = useState('follow');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm mb-6">
        <a href="#" className="text-pink-500 hover:underline">Work from home Shufti</a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="text-pink-500 hover:underline">Client Management</a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-600">Follow list</span>
      </nav>

      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Client Management</h1>

      {/* Tabs */}
      <div className="flex mb-8 border-b">
        <button
          onClick={() => setActiveTab('follow')}
          className={`px-8 py-3 font-medium relative ${
            activeTab === 'follow'
              ? 'bg-pink-500 text-white rounded-t-lg'
              : 'text-gray-600 hover:text-pink-500'
          }`}
        >
          Follow
          {activeTab === 'follow' && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('partner')}
          className={`px-8 py-3 font-medium relative ${
            activeTab === 'partner'
              ? 'bg-pink-500 text-white rounded-t-lg'
              : 'text-gray-600 hover:text-pink-500'
          }`}
        >
          Partner
          {activeTab === 'partner' && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500"></div>
          )}
        </button>
      </div>

      {/* Empty State Content */}
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-600 mb-3">
          You are not <span className="font-medium">following</span> any clients.
        </p>
        <p className="text-gray-600">
          If you follow a client, you can receive their latest updates.
        </p>
      </div>

      {/* Optional: Add Client Button */}
      <div className="mt-8 text-center">
        <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors duration-200 shadow-sm hover:shadow-md">
          Add New Client
        </button>
      </div>
    </div>
  );
};

export default ProfileClientManagement;