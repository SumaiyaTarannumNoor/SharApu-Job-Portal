import React, { useState } from 'react';

const RewardReceivingAccount = () => {
  const [bankType, setBankType] = useState('private-and-public');
  const [accountType, setAccountType] = useState('regular-deposit');

  const radioStyle = "accent-pink-500 h-4 w-4 cursor-pointer focus:outline-none";
  const checkboxStyle = "accent-pink-500 h-4 w-4 rounded cursor-pointer focus:outline-none";

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 bg-pink-400 border-b border-gray-200 rounded-t-lg">
        <h2 className="text-lg font-semibold text-white">
          Reward receiving account
        </h2>
      </div>

      {/* Form Content */}
      <div className="p-6">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Bank Type Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Bank Type <span className="text-pink-500">*Required</span>
            </label>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="banks"
                  name="bankType"
                  value="private-and-public"
                  checked={bankType === 'private-and-public'}
                  onChange={(e) => setBankType(e.target.value)}
                  className={radioStyle}
                />
                <label htmlFor="banks" className="text-sm cursor-pointer">Private and Public Bank</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="post"
                  name="bankType"
                  value="bangladesh-post-bank"
                  checked={bankType === 'bangladesh-post-bank'}
                  onChange={(e) => setBankType(e.target.value)}
                  className={radioStyle}
                />
                <label htmlFor="post" className="text-sm cursor-pointer">Bangladesh Post Bank</label>
              </div>
            </div>
          </div>

          {/* Financial Institution */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Financial institution code <span className="text-pink-500">*Required</span>
            </label>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="0001"
                className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="check-institution"
                  className={checkboxStyle}
                />
                <label htmlFor="check-institution" className="ml-2 text-sm text-gray-600 cursor-pointer">
                  Check financial institution code
                </label>
              </div>
            </div>
            <p className="text-xs text-gray-500">*Please enter a financial number</p>
          </div>

          {/* Rest of the form remains the same... */}
          {/* Branch Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Branch Name <span className="text-pink-500">*Required</span>
              </label>
              <input 
                type="text" 
                placeholder="Main Branch"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Branch Code <span className="text-pink-500">*Required</span>
              </label>
              <input 
                type="text" 
                placeholder="001"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>

          {/* Account Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Account Type <span className="text-pink-500">*Required</span>
            </label>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="regular"
                  name="accountType"
                  value="regular-deposit"
                  checked={accountType === 'regular-deposit'}
                  onChange={(e) => setAccountType(e.target.value)}
                  className={radioStyle}
                />
                <label htmlFor="regular" className="text-sm cursor-pointer">Regular deposit</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="current"
                  name="accountType"
                  value="current-account"
                  checked={accountType === 'current-account'}
                  onChange={(e) => setAccountType(e.target.value)}
                  className={radioStyle}
                />
                <label htmlFor="current" className="text-sm cursor-pointer">Current account</label>
              </div>
            </div>
          </div>

          {/* Account Number */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Account Number <span className="text-pink-500">*Required</span>
            </label>
            <input 
              type="text" 
              placeholder="1234567"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <p className="text-xs text-gray-500">*Please enter a 7-digit number</p>
          </div>

          {/* Account Holder */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Account holder <span className="text-pink-500">*Required</span>
            </label>
            <input 
              type="text" 
              placeholder="Chef Marco"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <div className="space-y-1 text-xs text-gray-500">
              <p>*Only katakana characters, half-width English letters (uppercase only), half-width numbers.</p>
              <p>*In the case of a credit card statement account, the account name and the credit card name may differ.</p>
              <p>*If the account information is incorrect after the transfer fails, additional fees will be incurred.</p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                id="confirm"
                className={checkboxStyle}
              />
              <label htmlFor="confirm" className="text-sm text-gray-600 cursor-pointer">
                Confirm my set changing your account
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RewardReceivingAccount;