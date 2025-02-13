import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Upload, ChevronRight, X } from 'lucide-react';
import HirerUserSettingSidebar from './HirerUserSettingSidebar';
import MiniProfileCard from '../MiniProfileCard';
import HirerDrawerNavigation from './HirerDrawerNavigation';

const HirerIconSetting = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // File handling functions remain the same
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload a JPG, PNG, or GIF file.');
        return;
      }
      if (file.size > 800000) {
        setError('Image size should be less than 800KB.');
        return;
      }
      setSelectedFile(file);
      setError('');
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add('border-pink-500');
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove('border-pink-500');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove('border-pink-500');
    const file = event.dataTransfer.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload a JPG, PNG, or GIF file.');
        return;
      }
      setSelectedFile(file);
      setError('');
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select an image file.');
      return;
    }
    setIsSubmitting(true);
    // Add your file upload logic here
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            {/* Menu button for mobile */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg group"
            >
              <ChevronRight className="w-8 h-8 text-pink-500 animate-pulse transition-transform group-hover:scale-110 group-hover:text-pink-600 shadow-lg shadow-pink-200" />
            </button>
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
              <span className="hidden sm:inline text-gray-700">ahmedul</span>
              <ChevronDown 
                className={`z-50 w-4 h-4 text-gray-600 transition-transform duration-200 ${
                  isProfileOpen ? 'transform rotate-180' : ''
                }`} 
              />
            </div>
            <MiniProfileCard isOpen={isProfileOpen} />
          </div>
        </div>

        <HirerDrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          <span className="block sm:inline">If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted.</span>
          <button className="block sm:inline text-pink-600 hover:text-pink-700 mt-1 sm:mt-0 sm:ml-1">
            Click here to register your account information &gt;
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex relative">
        {/* Sidebar Drawer for Mobile */}
        <div className={`
          fixed inset-0 z-50 lg:hidden transition-opacity duration-300
          ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <div className="absolute inset-0 bg-transparent" onClick={() => setIsSidebarOpen(false)} />
          <div className={`
            absolute left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-sm transform transition-transform duration-300
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="p-4">
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-pink-50 rounded-lg"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              <HirerUserSettingSidebar />
            </div>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 p-4">
          <HirerUserSettingSidebar />
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-4 sm:mb-6 text-sm">
              <span className="text-gray-500">Work from home Shuful</span>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-gray-700">Icon Settings</span>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                Icon Settings
              </h1>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative mx-auto sm:mx-0">
                    {previewUrl ? (
                      <img 
                        src={previewUrl} 
                        alt="Profile preview" 
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-pink-200"
                      />
                    ) : (
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-pink-100 flex items-center justify-center border-4 border-pink-200">
                        <User className="w-12 h-12 sm:w-16 sm:h-16 text-pink-300" />
                      </div>
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-medium text-gray-900">Your Profile Icon</h3>
                    <p className="text-sm text-gray-500">Setting an icon will make it easier for workers to recognize you.</p>
                  </div>
                </div>

                <div 
                  className="border-2 border-dashed border-pink-200 rounded-lg p-4 sm:p-8 text-center hover:border-pink-400 transition-colors cursor-pointer relative"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.gif"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-pink-400" />
                  <p className="mt-2 text-sm font-medium text-gray-700">Drop or click to select a file</p>
                  <p className="mt-1 text-xs text-gray-500">Please use images within the size range of 32x32 to 800x800.</p>
                  <p className="text-xs text-gray-500">Please use images in JPG, PNG, or GIF format.</p>
                  <p className="text-xs text-gray-500">Only one file can be uploaded.</p>
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !selectedFile}
                  className="w-full sm:w-auto mt-4 sm:mt-8 px-8 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg 
                            hover:from-pink-600 hover:to-pink-700 transition-all duration-200 
                            shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Updating...' : 'Update'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirerIconSetting;