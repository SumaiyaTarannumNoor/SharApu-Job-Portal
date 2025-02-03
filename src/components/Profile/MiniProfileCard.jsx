import React from 'react';
import { ChevronDown, Home, User, Settings, BookOpen, LogOut, Bell } from 'lucide-react';

const MiniProfileCard = () => {
  return (
    <div className="w-48 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with profile info */}
      <div className="bg-pink-500 p-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
          <User className="w-4 h-4 text-pink-500" />
        </div>
        <span className="text-white font-medium">ahmedul</span>
        <ChevronDown className="w-4 h-4 text-white ml-auto" />
      </div>

      {/* Menu items */}
      <nav className="py-2">
        <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-pink-50 text-gray-700">
          <Home className="w-4 h-4 text-pink-400" />
          <span>Home</span>
        </a>
        
        <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-pink-50 text-gray-700">
          <Bell className="w-4 h-4 text-pink-400" />
          <span>Notice</span>
        </a>

        <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-pink-50 text-gray-700">
          <User className="w-4 h-4 text-pink-400" />
          <span>My Profile</span>
        </a>

        <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-pink-50 text-gray-700">
          <Settings className="w-4 h-4 text-pink-400" />
          <span>User Settings</span>
        </a>

        <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-pink-50 text-gray-700">
          <BookOpen className="w-4 h-4 text-pink-400" />
          <span>User Guide</span>
        </a>

        <hr className="my-2 border-gray-100" />

        <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-pink-50 text-gray-700">
          <LogOut className="w-4 h-4 text-pink-400" />
          <span>Logout</span>
        </a>
      </nav>
    </div>
  );
};

export default MiniProfileCard;