import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, AlertCircle, ArrowLeft } from 'lucide-react';

const JobRegistrationConfirmed = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-pink-50 p-4 border-b border-pink-100">
        <div className="max-w-4xl mx-auto text-pink-800 text-sm">
          <span>If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. </span>
          <Link to="/payment-account" className="text-pink-600 hover:text-pink-700 ml-1 underline">
            Click here to register your account information &gt;
          </Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center text-sm">
          <Link to="/" className="text-pink-600 hover:text-pink-700">Work from home SharApu</Link>
          <span className="mx-2 text-pink-300">&gt;</span>
          <span className="text-pink-800">Job registration</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Register your first job</h1>

        {/* Review Status Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Status Header */}
          <div className="bg-pink-500 p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-white" />
              <h2 className="text-lg font-semibold text-white">
                We are currently conducting the initial review.
              </h2>
            </div>
          </div>

          {/* Status Details */}
          <div className="p-6 space-y-6">
            <div className="bg-pink-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-pink-500 mt-0.5" />
                <div className="space-y-2 text-pink-800">
                  <p>During the initial review process, you will not be able to request new work or edit the work content.</p>
                  <p>Once the review is complete, we will notify you by email and on SharApu, so please wait until the review is complete.</p>
                  <p className="text-pink-600">*The initial review takes 1-3 business days.</p>
                </div>
              </div>
            </div>

            {/* Return Button */}
            <div className="flex justify-center">
              <Link 
                to="/hirer-profile"
                className="flex items-center gap-2 px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRegistrationConfirmed;