import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Upload, Shield, AlertCircle, ChevronRight, X } from 'lucide-react';
import HirerUserSettingSidebar from './HirerUserSettingSidebar';
import MiniProfileCard from '../MiniProfileCard';
import HirerDrawerNavigation from './HirerDrawerNavigation';

const HirerIdentityVerification = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentType, setDocumentType] = useState('');
  const [error, setError] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB
        setError('File size should be less than 5MB');
        return;
      }
      setSelectedFile(file);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!documentType) {
      setError('Please select a document type');
      return;
    }
    if (!selectedFile) {
      setError('Please upload a document');
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
            {/* Arrow button for sidebar */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg group"
            >
              <ChevronRight className="w-6 h-6 text-pink-500 animate-pulse transition-transform group-hover:scale-110 group-hover:text-pink-600 shadow-lg shadow-pink-200" />
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
                className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
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
          <div className="absolute inset-0 bg-trasparent" onClick={() => setIsSidebarOpen(false)} />
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
              <span className="text-gray-700">Identity Verification</span>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Verify your identity
                </h1>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <p className="text-blue-800 text-sm">
                  Once you have verified your identity, your profile will display "Verified." This
                  will allow workers to work with peace of mind, so please use this feature.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-pink-50 rounded-lg p-3 sm:p-4">
                  <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
                    Confirm the selection of materials to be submitted
                  </h2>
                  
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                    Please select the materials to be submitted.
                    <br />
                    For overseas identity verification documents, only documents written in English are accepted.
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-pink-100 transition-colors cursor-pointer">
                      <input
                        type="radio"
                        name="documentType"
                        value="driversLicense"
                        onChange={(e) => setDocumentType(e.target.value)}
                        className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                      />
                      <span className="text-sm sm:text-base text-gray-700">Driver's license</span>
                    </label>

                    <label className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-pink-100 transition-colors cursor-pointer">
                      <input
                        type="radio"
                        name="documentType"
                        value="healthInsurance"
                        onChange={(e) => setDocumentType(e.target.value)}
                        className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                      />
                      <span className="text-sm sm:text-base text-gray-700">Health insurance card</span>
                    </label>

                    <label className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-pink-100 transition-colors cursor-pointer">
                      <input
                        type="radio"
                        name="documentType"
                        value="other"
                        onChange={(e) => setDocumentType(e.target.value)}
                        className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                      />
                      <span className="text-sm sm:text-base text-gray-700">Others</span>
                    </label>
                  </div>
                </div>

                <div className="border-2 border-dashed border-pink-200 rounded-lg p-4 sm:p-8 text-center hover:border-pink-400 transition-colors cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-pink-400" />
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      Upload your document
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      To submit your documents, please take a photo of the documents or attach a PDF.
                    </p>
                  </label>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-xs sm:text-sm text-gray-600 space-y-2">
                  <p>※ After your application is submitted, we will review it within one business day and notify you by email.</p>
                  <p>※ Please rest assured that any documents submitted will be deleted after your application has been confirmed.</p>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !selectedFile || !documentType}
                  className="w-full mt-4 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg 
                            hover:from-pink-600 hover:to-pink-700 transition-all duration-200 
                            shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                            text-sm sm:text-base font-medium"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Verification Documents'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirerIdentityVerification;