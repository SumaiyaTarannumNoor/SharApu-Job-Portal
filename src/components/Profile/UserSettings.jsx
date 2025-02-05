import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import { 
  FaUser, 
  FaImage, 
  FaFileAlt, 
  FaBell, 
  FaBriefcase, 
  FaCog, 
  FaTools, 
  FaClock,
  FaUserClock,
  FaShieldAlt,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaBan,
  FaFileInvoiceDollar
} from 'react-icons/fa';

import MiniProfileCard from './MiniProfileCard';
import DrawerNavigation from './DrawerNavigation';

const SettingItem = ({ icon: Icon, label, notSet = false }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-100 hover:border-pink-200 transition-all duration-200 group">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
          <Icon className="w-5 h-5 text-pink-500" />
        </div>
        <span className="font-medium text-gray-700 group-hover:text-gray-900">
          {label}
        </span>
      </div>
      {notSet && (
        <span className="px-2 py-1 text-xs rounded-full bg-pink-50 text-pink-600 group-hover:bg-pink-100">
          Not set
        </span>
      )}
    </div>
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="bg-gradient-to-r from-pink-50 to-pink-100/50 p-3 rounded-lg mb-4">
    <h2 className="font-semibold text-gray-800">{title}</h2>
  </div>
);

const UserSettings = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
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

        <DrawerNavigation />

        {/* Alert Banner */}
        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
          <button className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
        <span className="text-gray-500">Work from home Shuful</span>
        <span className="mx-2 text-gray-400">&gt;</span>
        <span className="text-gray-700">User Settings</span>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">User Settings</h1>

        <div className="space-y-8">
          {/* General Settings */}
          <section>
            <SectionHeader title="General settings" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SettingItem icon={FaUser} label="Username" />
              <SettingItem icon={FaImage} label="icon" notSet />
              <SettingItem icon={FaFileAlt} label="self-introduction" notSet />
              <SettingItem icon={FaBell} label="notification" />
            </div>
          </section>

          {/* Work-related Settings */}
          <section>
            <SectionHeader title="Work-related settings" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SettingItem icon={FaBriefcase} label="Work facilities and environment" notSet />
              <SettingItem icon={FaCog} label="Interesting Job" notSet />
              <SettingItem icon={FaTools} label="skill" notSet />
              <SettingItem icon={FaTools} label="Available tools" notSet />
              <SettingItem icon={FaBriefcase} label="Occupations experienced" notSet />
              <SettingItem icon={FaClock} label="Available working hours per day" />
              <SettingItem icon={FaUserClock} label="Desire to continue working" />
            </div>
          </section>

          {/* Privacy and Security Settings */}
          <section>
            <SectionHeader title="Privacy and Security Settings" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SettingItem icon={FaShieldAlt} label="personal information" />
              <SettingItem icon={FaEnvelope} label="email address" />
              <SettingItem icon={FaLock} label="Login Password" />
              <SettingItem icon={FaIdCard} label="Verify your identity" notSet />
              <SettingItem icon={FaBan} label="block" />
              <SettingItem 
                icon={FaFileInvoiceDollar} 
                label="Qualified invoice issuer registration number" 
                notSet 
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;