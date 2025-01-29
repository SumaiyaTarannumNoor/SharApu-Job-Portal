import React, { useState, useEffect } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import Penguine2 from '../../../assets/LandingPageIconImage/Penguine2.png';
import { useNavigate } from 'react-router-dom'; // Add this import

const ContactUs = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const navigate = useNavigate();
  const handleSupport = () => {
    navigate('/support');
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const issues = [
    'Technical Support',
    'Account Issues',
    'Billing Questions',
    'Feature Request',
    'Bug Report',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <nav className="flex items-center mb-8">
          <div className="flex items-center text-pink-500 hover:text-pink-600">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span onClick={handleSupport} className="text-3xl cursor-pointer"><span class="rounded-lg text-white text-bold bg-pink-600 p-2 mr-1">SharApu</span>Support</span>
            <span><img src={Penguine2} alt="Penguin" /></span>
          </div>
          <div className="ml-auto">
            <button className="flex items-center text-gray-500 hover:text-pink-500">
              <HelpCircle className="w-5 h-5 mr-2" />
              <span>How to write job details</span>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Inquiry</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-lg text-gray-700 mb-4">
                Please select the appropriate issue below
              </label>
              <select
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="">-</option>
                {issues.map((issue) => (
                  <option key={issue} value={issue}>
                    {issue}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                If you can't find what you're looking for or the problem persists, please{' '}
                <button className="text-pink-500 hover:text-pink-600 font-medium">
                  contact us
                </button>
                {' '}here.
              </p>
              
              <p className="text-gray-600">
                If you want to return to the SharApu site, please click{' '}
                <button className="text-pink-500 hover:text-pink-600 font-medium">
                  here
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;