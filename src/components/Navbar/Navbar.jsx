import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SharApuLogo from '../../../assets/Logo/sharapulogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current path is in profile section or if we're in search page from main profile
  const isProfileSection = [
    '/main-profile',
    '/client-management',
    '/drawer-navigation',
    '/interesting-list',
    '/mini-profile-card',
    '/reward-history',
    '/user-settings-section',
    '/work-management',
    '/hirer-profile',
    '/find-a-worker',
    '/hirer-icon-setting',
    '/hirer-identity-verification',
    '/hirer-self-introduction',
    '/hirer-settings',
    '/register-a-job',
    '/hirer-work-management',
    '/worker-management',
    '/hirer-payment-history',
    '/payment-options'
  ].includes(location.pathname);

  const isSearchFromProfile = 
    location.pathname === '/search-for-a-job' && 
    location.state?.from === 'mainProfile';

  const hideAuthButtons = isProfileSection || isSearchFromProfile;

  const handleRegisterClick = () => navigate('/membership-registration');
  const handleSearchForAJob = () => navigate('/search-for-a-job');
  const handleWantToOrderWork = () => navigate('/want-to-order-work');
  const handleWantToReceiveWork = () => navigate('/want-to-receive-work');
  const handleLoginClick = () => navigate('/login');
  const handleHomeClick = () => navigate('/');

  return (
    <div className="w-full">
      <header className="bg-white text-pink-400 py-1 text-center text-sm">
        We support working housewives!
      </header>

      <nav className="bg-pink-500 text-white py-4 relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div onClick={handleHomeClick} className="h-26 w-32 text-2xl sm:text-3xl font-bold cursor-pointer">
              <img src={SharApuLogo} alt="" />
            </div>

            {(!hideAuthButtons || window.innerWidth >= 1024) && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-white rounded p-2"
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </button>
            )}

            <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-4/5">
              {!hideAuthButtons && (
                <div className="flex space-x-6">
                  <button onClick={handleSearchForAJob} className="hover:text-pink-200 transition-colors duration-200">
                    Search for a Job
                  </button>
                  <button onClick={handleWantToOrderWork} className="hover:text-pink-200 transition-colors duration-200">
                    If you want to order work
                  </button>
                  <button onClick={handleWantToReceiveWork} className="hover:text-pink-200 transition-colors duration-200">
                    Those who want to receive work
                  </button>
                </div>
              )}

              {!hideAuthButtons && (
                <div className="flex space-x-4">
                  <button onClick={handleLoginClick} className="bg-white text-pink-500 px-4 py-2 rounded hover:bg-pink-100 transition-colors duration-200">
                    Log In
                  </button>
                  <button onClick={handleRegisterClick} className="bg-white text-pink-500 px-4 py-2 rounded hover:bg-pink-100 transition-colors duration-200">
                    Register as a Member (Free)
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
