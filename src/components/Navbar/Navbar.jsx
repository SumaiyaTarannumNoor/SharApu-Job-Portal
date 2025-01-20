import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <header className="bg-white text-pink-600 py-1 text-center text-sm">
        「主婦の働く」をサポートします！
      </header>
      
      <nav className="bg-pink-500 text-white py-4 relative">
        <div className="container mx-auto px-4">
          {/* Top bar with logo and hamburger */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl sm:text-3xl font-bold">sharApu</div>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-white rounded p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-4/5">
              <div className="flex space-x-6">
                <a href="#" className="hover:text-pink-200 transition-colors duration-200">仕事を探す</a>
                <a href="#" className="hover:text-pink-200 transition-colors duration-200">仕事を発注したい方</a>
                <a href="#" className="hover:text-pink-200 transition-colors duration-200">仕事を受注したい方</a>
              </div>
              <div className="flex space-x-4">
                <button className="bg-white text-pink-500 px-4 py-2 rounded hover:bg-pink-100 transition-colors duration-200">
                  ログイン
                </button>
                <button className="bg-white text-pink-500 px-4 py-2 rounded hover:bg-pink-100 transition-colors duration-200">
                  会員登録（無料）
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden absolute left-0 right-0 bg-pink-500 shadow-lg transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? 'opacity-100 top-full visible' 
                : 'opacity-0 -top-96 invisible'
            }`}
          >
            <div className="px-4 py-6 space-y-6 border-t border-pink-400">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-lg hover:text-pink-200 transition-colors duration-200">
                  仕事を探す
                </a>
                <a href="#" className="text-lg hover:text-pink-200 transition-colors duration-200">
                  仕事を発注したい方
                </a>
                <a href="#" className="text-lg hover:text-pink-200 transition-colors duration-200">
                  仕事を受注したい方
                </a>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <button className="w-full bg-white text-pink-500 px-4 py-3 rounded text-lg font-medium hover:bg-pink-100 transition-colors duration-200">
                  ログイン
                </button>
                <button className="w-full bg-white text-pink-500 px-4 py-3 rounded text-lg font-medium hover:bg-pink-100 transition-colors duration-200">
                  会員登録（無料）
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;