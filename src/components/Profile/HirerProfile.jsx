import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ChevronDown, AlertCircle } from 'lucide-react';
import MiniProfileCard from './MiniProfileCard';
import UserSettingsSection from './UserSettingsSection';
import HirerDrawerNavigation from './HirerDrawerNavigation';
import Penguine from '../../../assets/LandingPageIconImage/Penguine1.png'

const HirerProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSwitchRole = () => {
    navigate('/choose-role');
  };

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

        {/* Desktop navigation will be hidden on mobile */}
        <HirerDrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
          <Link to="/payment-account" className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-pink-600" />
          </div>
          <h1 className="text-xl text-gray-800">
            <span className="font-medium">Ahmedul </span>
            <span className="text-gray-600">Hello,</span>
          </h1>
        </div>

        {/* Important Notice */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-medium text-lg mb-2">Please be sure to check!!</h2>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm">important</span>
                <span>Regarding work that violates the Terms of Use and Job Request Guidelines</span>
              </div>
            </div>
          </div>
        </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* To-do List */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-gray-100 p-3">
              <h2 className="font-medium">To-do list</h2>
            </div>
            
            <div className="bg-pink-50/50 rounded">
              <div className="p-3 bg-pink-100/50 border-l-4 border-pink-300">
                <h3 className="font-medium text-gray-800">Things to do regarding trading</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Currently, there is no requirement to do so.</p>
                <p className="mt-2">If there are any comments in "New Messages" on the right, click on them to check the message board.</p>
                
                <div className="mt-6 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                       <img src={Penguine} alt="" />
                      </div>
                    </div>
                    <div className="absolute -right-2 -top-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <UserSettingsSection />
          </div>

          {/* Messages Section */}
          <div>
            <div className="bg-gray-100 p-3">
              <h2 className="font-medium">New Messages</h2>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="text-gray-600">There are no new messages.</p>
            </div>
          </div>
        </div>

        {/* Profile Navigation Section */}
        <div className="bg-pink-50 p-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Job Management */}
            <div>
              <h3 className="font-semibold text-pink-700">Job Management</h3>
              <hr className="border-pink-300 my-2" />
              <ul className="space-y-2">
                <li><Link to="/post-job" className="text-pink-600 hover:underline">Post a Job</Link></li>
                <li><Link to="/job-management" className="text-pink-600 hover:underline">Job Management</Link></li>
                <li><Link to="/worker-list" className="text-pink-600 hover:underline">Worker Management</Link></li>
              </ul>
            </div>

            {/* Payment Management */}
            <div>
              <h3 className="font-semibold text-pink-700">Payment Management</h3>
              <hr className="border-pink-300 my-2" />
              <ul className="space-y-2">
                <li><Link to="/payment-account" className="text-pink-600 hover:underline">Payment History</Link></li>
                <li><Link to="/payment-history" className="text-pink-600 hover:underline">Refund Account</Link></li>
              </ul>
            </div>

            {/* Others */}
            <div>
              <h3 className="font-semibold text-pink-700">Others</h3>
              <hr className="border-pink-300 my-2" />
              <ul className="space-y-2">
                <li><Link to="/user-settings" className="text-pink-600 hover:underline">User Settings</Link></li>
                <li><Link to="/user-guide" className="text-pink-600 hover:underline">User Guide</Link></li>
                <li><Link to="/terms-of-service" className="text-pink-600 hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HirerProfile;