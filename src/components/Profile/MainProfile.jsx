import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import MiniProfileCard from './MiniProfileCard';
import UserSettingsSection from './UserSettingsSection';
import DrawerNavigation from './DrawerNavigation';
import SearchForAJobPage from '../../Pages/SearchForAJob';


const MainProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            {/* Only show drawer trigger on mobile */}
            {/* <div className="lg:hidden">
              <DrawerNavigation />
            </div> */}
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
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
            </div>
            <MiniProfileCard isOpen={isProfileOpen} />
          </div>
        </div>

        {/* Desktop navigation will be hidden on mobile */}
        <DrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
          <button className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </button>
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

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* To-do List */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-gray-100 p-3">
              <h2 className="font-medium">To-do list</h2>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-medium mb-3">Things to do regarding trading</h3>
              <p className="text-gray-700">
                When you apply for a project-type job, the things that ahmedul must do during the transaction will be displayed here.
              </p>
              <p className="mt-2">First, apply for the job that interests you!</p>
              
              <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded transition-colors duration-200">
                Search for a job
              </button>
            </div>

            <UserSettingsSection />

            <SearchForAJobPage />
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
    {/* Work and Client Management */}
    <div>
      <h3 className="font-semibold text-pink-700">Work and Client Management</h3>
      <hr className="border-pink-300 my-2" />
      <ul className="space-y-2">
        <li><Link to="#" className="text-pink-600 hover:underline">Work Management</Link></li>
        <li><Link to="#" className="text-pink-600 hover:underline">Client Management</Link></li>
        <li><Link to="#" className="text-pink-600 hover:underline">Search for a job</Link></li>
      </ul>
    </div>

    {/* Compensation Management */}
    <div>
      <h3 className="font-semibold text-pink-700">Compensation Management</h3>
      <hr className="border-pink-300 my-2" />
      <ul className="space-y-2">
        <li><Link to="#" className="text-pink-600 hover:underline">Reward receiving account</Link></li>
      </ul>
    </div>

    {/* Others */}
    <div>
      <h3 className="font-semibold text-pink-700">Others</h3>
      <hr className="border-pink-300 my-2" />
      <ul className="space-y-2">
        <li><Link to="#" className="text-pink-600 hover:underline">User Settings</Link></li>
        <li><Link to="#" className="text-pink-600 hover:underline">User Guide</Link></li>
      </ul>
    </div>
  </div>
</div>

      </main>
    </div>
  );
};

// Navigation Link Component
const NavLink = ({ children }) => (
    <button className="px-4 py-2 text-white hover:bg-pink-500 transition-colors duration-200">
      {children}
    </button>
  );
  

export default MainProfile;