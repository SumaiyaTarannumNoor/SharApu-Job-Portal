import React from 'react';
import Interview from '../Interview/Interview';
import Penguine from '../../../assets/LandingPageIconImage/Penguine1.png'

const ManagementBlog = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-pink-600 flex items-center gap-2">
          SharApu Management Office
          <span className="text-sm font-normal bg-pink-200 px-2 py-1 rounded">Article</span>
        </h1>
      </header>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg p-8">
        <div className="flex flex-col items-center max-w-xs mx-auto text-center">
          {/* Logo */}
          <div className="w-52 h-52 mb-4">
            <div className="relative w-full h-full">
              <div className="w-full h-full rounded-full bg-[#b8c0ff]">
                <img src={Penguine} alt="" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-xl font-medium text-gray-800 mb-1">SharApu</h2>
          <p className="text-gray-600 text-sm mb-1">Management</p>
          <p className="text-gray-600 text-sm mb-6">Office</p>
          
          <p className="text-xl text-gray-700 mb-4">
            Hello! This is SharApu Management.
          </p>
        </div>
      </div>

      <Interview />
    </div>
  );
};

export default ManagementBlog;