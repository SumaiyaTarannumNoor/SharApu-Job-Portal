import React, { useState, useEffect } from 'react';
import { Menu, X, Coins } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const DrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMainProfile = () => {
    navigate('/main-profile');
    setIsOpen(false);
  };

  const handleSearchForAJob = () => {
    navigate('/search-for-a-job', { state: { from: 'mainProfile' } });
    setIsOpen(false);
  };

  const handleWorkManagement = () => {
    navigate('/work-management');
    setIsOpen(false);
  };

  const handleInterestingList = () => {
    navigate('/interesting-list');
    setIsOpen(false);
  };

  const handleClientManagement = () => {
    navigate('/client-management');
    setIsOpen(false);
  };

  const handleRewardHistory = () => {
    navigate('/reward-history');
    setIsOpen(false);
  };

  // Close drawer when screen size becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="w-full">
      {/* Mobile Menu Button */}
      <div className="flex justify-between items-center px-4 py-2">
        <button 
          className="p-2 text-pink-600 lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`
        fixed inset-y-0 left-0 z-50 
        w-[280px] sm:w-[320px] md:w-[400px] 
        bg-white transform transition-transform duration-300 ease-in-out
        lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold text-pink-600">Menu</span>
          <button 
            className="p-2 text-gray-600 hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="bg-pink-400 h-full">
          <div className="flex flex-col space-y-1 p-2">
            <MobileNavLink 
              onClick={handleMainProfile}
              isActive={location.pathname === '/main-profile'}
            >
              Home
            </MobileNavLink>
            <MobileNavLink 
              onClick={handleSearchForAJob}
              isActive={location.pathname === '/search-for-a-job'}
            >
              Search for a job
            </MobileNavLink>
            <MobileNavLink 
              onClick={handleWorkManagement}
              isActive={location.pathname === '/work-management'}
            >
              Work Management
            </MobileNavLink>
            <MobileNavLink 
              onClick={handleInterestingList}
              isActive={location.pathname === '/interesting-list'}
            >
              Interesting! List
            </MobileNavLink>
            <MobileNavLink 
              onClick={handleClientManagement}
              isActive={location.pathname === '/client-management'}
            >
              Client Management
            </MobileNavLink>
            
            {/* Mobile Reward History Button */}
            <div className="px-2 py-2">
              <button
                onClick={handleRewardHistory}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 
                  rounded-md px-4 py-2 flex items-center justify-center gap-2
                  transition-all duration-200 transform hover:scale-105
                  shadow-md hover:shadow-lg"
              >
                <Coins className="w-5 h-5" />
                <span className="font-medium">💰 Reward History ✨</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-pink-400 hidden lg:block w-full">
        <div className="flex items-center justify-between px-4">
          <div className="flex space-x-1">
            <NavLink 
              onClick={handleMainProfile}
              isActive={location.pathname === '/main-profile'}
            >
              Home
            </NavLink>
            <NavLink 
              onClick={handleSearchForAJob}
              isActive={location.pathname === '/search-for-a-job'}
            >
              Search for a job
            </NavLink>
            <NavLink 
              onClick={handleWorkManagement}
              isActive={location.pathname === '/work-management'}
            >
              Work Management
            </NavLink>
            <NavLink 
              onClick={handleInterestingList}
              isActive={location.pathname === '/interesting-list'}
            >
              Interesting! List
            </NavLink>
            <NavLink 
              onClick={handleClientManagement}
              isActive={location.pathname === '/client-management'}
            >
              Client Management
            </NavLink>
          </div>

          {/* Desktop Reward History Button */}
          <button
            onClick={handleRewardHistory}
            className="bg-white border-4 border-indigo-500 hover:bg-pink-500 text-black 
              rounded-md px-4 py-1 flex items-center gap-2
              transition-all duration-200 transform hover:scale-105
              shadow-md hover:shadow-lg"
          >
            <Coins className="w-5 h-5" />
            <span className="font-medium">💰 Reward History ✨</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ children, onClick, isActive }) => (
  <button 
    className={`px-4 py-3 text-white text-left w-full rounded-md transition-colors duration-200
      ${isActive ? 'bg-pink-500' : 'hover:bg-pink-500'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Desktop Navigation Link Component
const NavLink = ({ children, onClick, isActive }) => (
  <button 
    className={`px-4 py-2 text-white rounded-md transition-colors duration-200
      ${isActive ? 'bg-pink-500' : 'hover:bg-pink-500'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default DrawerNavigation;