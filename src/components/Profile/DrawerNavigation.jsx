import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const DrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Mobile Drawer Trigger */}
      <button 
        className="p-2 text-pink-600 lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop */}
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
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold text-pink-600">Menu</span>
          <button 
            className="p-2 text-gray-600 hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="bg-pink-400 h-full">
          <div className="flex flex-col space-y-1">
            <MobileNavLink onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink onClick={() => setIsOpen(false)}>Search for a job</MobileNavLink>
            <MobileNavLink onClick={() => setIsOpen(false)}>Work Management</MobileNavLink>
            <MobileNavLink onClick={() => setIsOpen(false)}>Interesting! List</MobileNavLink>
            <MobileNavLink onClick={() => setIsOpen(false)}>Client Management</MobileNavLink>
          </div>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-pink-400 hidden lg:block w-full">
        <div className="flex space-x-1 px-4">
          <NavLink>Home</NavLink>
          <NavLink>Search for a job</NavLink>
          <NavLink>Work Management</NavLink>
          <NavLink>Interesting! List</NavLink>
          <NavLink>Client Management</NavLink>
        </div>
      </nav>
    </>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ children, onClick }) => (
  <button 
    className="px-4 py-3 text-white text-left w-full hover:bg-pink-500 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </button>
);

// Desktop Navigation Link
const NavLink = ({ children }) => (
  <button className="px-4 py-2 text-white hover:bg-pink-500 transition-colors duration-200">
    {children}
  </button>
);

export default DrawerNavigation;