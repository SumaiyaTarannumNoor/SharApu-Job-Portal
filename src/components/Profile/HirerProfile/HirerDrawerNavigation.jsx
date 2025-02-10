import React, { useState, useEffect } from 'react';
import { Menu, X, Coins } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const HirerDrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = () => {
    navigate('/hirer-profile');
    setIsOpen(false);
  };

  const handleFindWorker = () => {
    navigate('/find-a-worker');
    setIsOpen(false);
  };

  const handleHirerWorkManagement = () => {
    navigate('/hirer-work-management');
    setIsOpen(false);
  };

  const handleWorkerManagement = () => {
    navigate('/worker-management');
    setIsOpen(false);
  };

  const handlePaymentOptions = () => {
    navigate('/payment-options');
    setIsOpen(false);
  };

  const handlePaymentHistory = () => {
    navigate('/payment-history');
    setIsOpen(false);
  };

  const handleRegisterJob = () => {
    navigate('/register-job');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              onClick={handleHome}
              isActive={location.pathname === '/hirer-profile'}
            >
              Home
            </MobileNavLink>
            <MobileNavLink 
              onClick={handleFindWorker}
              isActive={location.pathname === '/find-a-worker'}
            >
              Find a Worker
            </MobileNavLink>
            <MobileNavLink 
              onClick={handleHirerWorkManagement}
              isActive={location.pathname === '/hirer-work-management'}
            >
              Work Management
            </MobileNavLink>
            <MobileNavLink 
              onClick={handleWorkerManagement}
              isActive={location.pathname === '/worker-management'}
            >
              Worker Management
            </MobileNavLink>
            <MobileNavLink 
              onClick={handlePaymentOptions}
              isActive={location.pathname === '/paid-options'}
            >
              Payment options
            </MobileNavLink>
            
            <div className="px-2 py-2 space-y-2">
              {/* Mobile Register Job Button */}
              <button
                onClick={handleRegisterJob}
                className="w-full 
                  bg-gradient-to-r from-blue-400 to-blue-600 
                  hover:from-blue-500 hover:to-blue-700
                  text-white font-semibold
                  rounded-full px-6 py-2.5 
                  flex items-center justify-center gap-2
                  transition-all duration-300 
                  transform hover:scale-105
                  shadow-lg hover:shadow-xl
                  border-2 border-blue-300
                  hover:border-blue-400
                  animate-pulse hover:animate-none
                "
              >
                <span className="font-medium">✨ Register a Job 💼</span>
              </button>

              {/* Mobile Payment History Button */}
              <button
                onClick={handlePaymentHistory}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 
                  rounded-md px-4 py-2 flex items-center justify-center gap-2
                  transition-all duration-200 transform hover:scale-105
                  shadow-md hover:shadow-lg"
              >
                <Coins className="w-5 h-5" />
                <span className="font-medium">💰 Payment History ✨</span>
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
              onClick={handleHome}
              isActive={location.pathname === '/hirer-profile'}
            >
              Home
            </NavLink>
            <NavLink 
              onClick={handleFindWorker}
              isActive={location.pathname === '/find-a-worker'}
            >
              Find a Worker
            </NavLink>
            <NavLink 
              onClick={handleHirerWorkManagement}
              isActive={location.pathname === '/hirer-work-management'}
            >
              Work Management
            </NavLink>
            <NavLink 
              onClick={handleWorkerManagement}
              isActive={location.pathname === '/worker-management'}
            >
              Worker Management
            </NavLink>
            <NavLink 
              onClick={handlePaymentOptions}
              isActive={location.pathname === '/paid-options'}
            >
              Payment options
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Register Job Button */}
            <button
              onClick={handleRegisterJob}
              className="
                bg-gradient-to-r from-blue-400 to-blue-600 
                hover:from-blue-500 hover:to-blue-700
                text-white font-semibold
                rounded-full px-6 py-2 
                flex items-center gap-2
                transition-all duration-300 
                transform hover:scale-105
                shadow-lg hover:shadow-xl
                border-2 border-blue-300
                hover:border-blue-400
                animate-pulse hover:animate-none
              "
            >
              ✨ Register a Job 💼
            </button>

            {/* Desktop Payment History Button */}
            <button
              onClick={handlePaymentHistory}
              className="bg-white border-4 border-pink-500 hover:bg-pink-500 text-black 
                rounded-md px-4 py-1 flex items-center gap-2
                transition-all duration-200 transform hover:scale-105
                shadow-md hover:shadow-lg"
            >
              <Coins className="w-5 h-5" />
              <span className="font-medium">💰 Payment History ✨</span>
            </button>
          </div>
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

export default HirerDrawerNavigation;