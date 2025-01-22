import React, { useState } from 'react';

const PersonalInformationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    furigana: '',
    gender: 'Woman',
    dateOfBirth: '',
    postCode: '',
    livingAbroad: false,
    prefecture: '',
    municipality: '',
    streetAddress: '',
    buildingName: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Getting Ready</h1>
      
      <div className="bg-gray-100 p-3 mb-6">
        <p>Please register your personal information</p>
      </div>

      <div className="mb-6">
        <p className="text-gray-700">Thank you for registering!</p>
        <p className="text-gray-700">For a safe transaction, please register your personal information.</p>
        <p className="text-sm text-gray-500">Information other than gender, age, and area of residence (prefecture) will not be made public.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>First name</span>
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="housewife"
              className="w-full border rounded p-2"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="mb-2 block text-transparent">.</label>
            <input
              type="text"
              placeholder="Maruko"
              className="w-full border rounded p-2"
              readOnly
            />
          </div>
        </div>

        {/* Name (furigana) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>Last Name</span>
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
            </label>
            <input
              type="text"
              name="furigana"
              placeholder="Chief"
              className="w-full border rounded p-2"
              value={formData.furigana}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="mb-2 block text-transparent">.</label>
            <input
              type="text"
              placeholder="Marco"
              className="w-full border rounded p-2"
              readOnly
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="flex items-center gap-2 mb-2">
            <span>Sex</span>
            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="woman"
                checked={formData.gender === 'woman'}
                onChange={handleInputChange}
                className="mr-2 text-pink-500"
              />
              <span>Woman</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
                className="mr-2 text-pink-500"
              />
              <span>Male</span>
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-1">*Changes cannot be made after registration.</p>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="flex items-center gap-2 mb-2">
            <span>Date of Birth</span>
            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
          </label>
          <input
            type="text"
            name="dateOfBirth"
            placeholder="19980123"
            className="w-full border rounded p-2"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
          <p className="text-sm text-gray-500 mt-1">*Changes cannot be made after registration.</p>
        </div>

        {/* Post Code */}
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <label className="flex items-center gap-2 mb-2">
              <span>Post code</span>
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
            </label>
            <input
              type="text"
              name="postCode"
              placeholder="1040053"
              className="w-full border rounded p-2"
              value={formData.postCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="pt-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="livingAbroad"
                checked={formData.livingAbroad}
                onChange={handleInputChange}
                className="mr-2 text-pink-500"
              />
              <span>Living abroad</span>
            </label>
          </div>
        </div>

        {/* Prefecture */}
        <div>
          <label className="flex items-center gap-2 mb-2">
            <span>Prefectures</span>
            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
          </label>
          <select
            name="prefecture"
            className="w-full border rounded p-2"
            value={formData.prefecture}
            onChange={handleInputChange}
          >
            <option value="">Please choose from the following</option>
            <option value="tokyo">Tokyo</option>
            {/* Add more prefectures */}
          </select>
        </div>

        {/* Municipality */}
        <div>
          <label className="flex items-center gap-2 mb-2">
            <span>Municipalities</span>
            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
          </label>
          <input
            type="text"
            name="municipality"
            placeholder="Harumi, Chuo Ward"
            className="w-full border rounded p-2"
            value={formData.municipality}
            onChange={handleInputChange}
          />
        </div>

        {/* Street Address */}
        <div>
          <label className="flex items-center gap-2 mb-2">
            <span>Street address</span>
            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
          </label>
          <input
            type="text"
            name="streetAddress"
            placeholder="3-12-1"
            className="w-full border rounded p-2"
            value={formData.streetAddress}
            onChange={handleInputChange}
          />
        </div>

        {/* Building Name */}
        <div>
          <label className="mb-2 block">Building name and room number</label>
          <input
            type="text"
            name="buildingName"
            placeholder="KDX Harumi Building 901"
            className="w-full border rounded p-2"
            value={formData.buildingName}
            onChange={handleInputChange}
          />
          <p className="text-sm text-gray-500 mt-1">*Please enter the building name and room number</p>
        </div>

        {/* Phone Number */}
        <div>
          <label className="flex items-center gap-2 mb-2">
            <span>Telephone number</span>
            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="0312345678"
            className="w-full border rounded p-2"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        {/* Error Message */}
        <div className="text-red-500 text-center">
          Please check that some items have not been entered correctly
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-400 text-white px-8 py-2 rounded hover:bg-blue-500 transition-colors duration-300"
          >
            to the next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformationForm;