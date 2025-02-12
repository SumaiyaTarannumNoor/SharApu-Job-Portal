import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Check } from 'lucide-react';
import HirerDrawerNavigation from '../HirerDrawerNavigation';
import Step2RegisterAJob from './Step2RegisterAJob';
import Step3RegisterAJob from './Step3RegisterAJob';
import Step4RegisterAJob from './Step4RegisterAJob';

const RegisterAJob = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleNextStep = () => {
    if (selectedProjectType && selectedCategory) {
      setCurrentStep(2);
    } else {
      alert('Please select a project type and category before proceeding');
    }
  };

  const handleSwitchRole = () => {
    console.log('Switching role...');
  };

  const MiniProfileCard = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Profile</div>
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Settings</div>
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer text-red-600">Logout</div>
      </div>
    );
  };

  const steps = [
    { number: 1, title: 'Selecting a Job Type and Category' },
    { number: 2, title: 'Enter your job description' },
    { number: 3, title: 'Attachment of reference materials' },
    { number: 4, title: 'Other Settings' },
    { number: 5, title: 'Check the contents' },
  ];

  if (currentStep === 4) {
    return <Step4RegisterAJob currentStep={currentStep} setCurrentStep={setCurrentStep} />;
  }

  // If we're on step 3, render Step3RegisterAJob
  if (currentStep === 3) {
    return <Step3RegisterAJob currentStep={currentStep} setCurrentStep={setCurrentStep} />;
  }

  // If we're on step 2, render Step2RegisterAJob
  if (currentStep === 2) {
    return <Step2RegisterAJob currentStep={currentStep} setCurrentStep={setCurrentStep} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
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

        <HirerDrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
          <Link to="/payment-account" className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link to="/" className="text-pink-600 hover:text-pink-700">Work from home Shufuti</Link>
            <span className="mx-2">&gt;</span>
            <span>Job registration</span>
          </div>

          {/* Title and Description */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Job registration</h1>
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 text-pink-800">
              <p className="font-medium mb-2">Please cooperate with the initial review to continue using the service.</p>
              <p className="text-sm">When you register a job for the first time, Shufuti will conduct an examination to ensure that you can continue to use the service.</p>
              <p className="text-sm text-pink-600">*The initial examination takes 1 to 3 business days.</p>
            </div>
          </div>

          {/* Progress Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center relative z-10">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${currentStep === step.number ? 'bg-pink-600 text-white' : 
                      currentStep > step.number ? 'bg-pink-400 text-white' : 
                      'bg-gray-200 text-gray-500'}
                    transition-all duration-200
                  `}>
                    {currentStep > step.number ? <Check className="w-6 h-6" /> : step.number}
                  </div>
                  <p className="text-xs text-center mt-2 w-24">{step.title}</p>
                  {index < steps.length - 1 && (
                    <div className={`absolute top-5 left-12 w-[calc(100%-3rem)] h-0.5 
                      ${currentStep > step.number ? 'bg-pink-400' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1 Content */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              STEP 1. Select the job type and category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Types */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded text-sm">
                    Required
                  </div>
                  <h3 className="font-medium">Project Types</h3>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="projectType"
                      value="project"
                      className="text-pink-600 focus:ring-pink-500"
                      checked={selectedProjectType === 'project'}
                      onChange={(e) => setSelectedProjectType(e.target.value)}
                    />
                    <span className="text-sm text-gray-700">Project Type</span>
                  </label>
                  <ul className="space-y-3 text-sm text-gray-600 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      This type of system accepts applications from workers and allows for communication from ordering to delivery.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      You can give instructions and negotiate with the worker you are requesting via the communication board.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      Recommended for those who want to work slowly and steadily.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Task Type */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-medium">Task Type</h3>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="projectType"
                      value="task"
                      className="text-pink-600 focus:ring-pink-500"
                      checked={selectedProjectType === 'task'}
                      onChange={(e) => setSelectedProjectType(e.target.value)}
                    />
                    <span className="text-sm text-gray-700">Task Type</span>
                  </label>
                  <ul className="space-y-3 text-sm text-gray-600 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      This is a simple type that does not require any applications and simply evaluates the deliveries made by workers.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      You will not be able to communicate with the worker you are requesting via the message board.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      Recommended for those who want to collect a large amount of deliveries at once.
                    </li>
                  </ul>
                </div>
                <button className="mt-4 text-pink-600 text-sm hover:text-pink-700">
                  Task type usage examples
                </button>
              </div>
            </div>

            {/* Job Categories Section */}
            <div className="mt-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Job Category</h3>
                <p className="text-sm text-pink-600 mt-2">
                  Please select the correct job category to avoid skill mismatches.
                  <span className="text-gray-500 ml-1">
                    If the correct category is not selectable, your application may be rejected.
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Data entry and product registration */}
                <div className="border rounded-lg p-4 hover:border-pink-300 transition-colors">
                  <h4 className="font-medium text-gray-800 mb-3">Data entry and product registration</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="data_entry"
                        className="text-pink-600 focus:ring-pink-500"
                        checked={selectedCategory === 'data_entry'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <span>Data entry and data check</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="data_collection"
                        className="text-pink-600 focus:ring-pink-500"
                        checked={selectedCategory === 'data_collection'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <span>Data collection and classification</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="product_registration"
                        className="text-pink-600 focus:ring-pink-500"
                        checked={selectedCategory === 'product_registration'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <span>Product Registration</span>
                    </label>
                  </div>
                </div>

                {/* Sales and Support */}
                <div className="border rounded-lg p-4 hover:border-pink-300 transition-colors">
                  <h4 className="font-medium text-gray-800 mb-3">Sales, customer support, research</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="sales"
                        className="text-pink-600 focus:ring-pink-500"
                        checked={selectedCategory === 'sales'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <span>Sales/Telemarketing</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="customer_support"
                        className="text-pink-600 focus:ring-pink-500"
                        checked={selectedCategory === 'customer_support'}onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Customer Support</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="research"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'research'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Monitor, Survey, Research</span>
                      </label>
                    </div>
                  </div>
  
                  {/* Web Development */}
                  <div className="border rounded-lg p-4 hover:border-pink-300 transition-colors">
                    <h4 className="font-medium text-gray-800 mb-3">Web production, Web design and development</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="web_design"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'web_design'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Web Design</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="html_css"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'html_css'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>HTML and CSS coding</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="website_test"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'website_test'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Website check/ups test</span>
                      </label>
                    </div>
                  </div>
  
                  {/* Writing */}
                  <div className="border rounded-lg p-4 hover:border-pink-300 transition-colors">
                    <h4 className="font-medium text-gray-800 mb-3">Writing</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="article_creation"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'article_creation'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Article/blog creation</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="reviews"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'reviews'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Customer reviews and testimonials</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="transcription"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'transcription'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Text and transcription</span>
                      </label>
                    </div>
                  </div>
  
                  {/* Design and Media */}
                  <div className="border rounded-lg p-4 hover:border-pink-300 transition-colors">
                    <h4 className="font-medium text-gray-800 mb-3">Design, photography, and video</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="illustrations"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'illustrations'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Illustrations, logos, and graphics</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="photo_editing"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'photo_editing'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Photo retouching, photo editing</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="video_editing"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'video_editing'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Video shooting, video editing</span>
                      </label>
                    </div>
                  </div>
  
                  {/* Translation */}
                  <div className="border rounded-lg p-4 hover:border-pink-300 transition-colors">
                    <h4 className="font-medium text-gray-800 mb-3">Translation</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="english_translation"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'english_translation'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>English Translation</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-600 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="other_translation"
                          className="text-pink-600 focus:ring-pink-500"
                          checked={selectedCategory === 'other_translation'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span>Other translations</span>
                      </label>
                    </div>
                  </div>
                </div>
  
                {/* Navigation Buttons */}
                <div className="flex justify-end mt-8 gap-4">
                  <button
                    className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default RegisterAJob;