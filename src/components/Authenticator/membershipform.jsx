import React, { useState } from 'react';
import { Mail, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const MembershipForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    useType: 'work',
    registrationType: 'individual'
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.username || !formData.password) {
      alert('Please fill in all required fields');
      return;
    }

    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Here you would typically make an API call to register the user
    // For now, we'll just navigate to the personal information page
    navigate('/personal-information');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-4">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        <span className="text-pink-500">Work from home</span>
        <span className="mx-2">›</span>
        <span>Membership Registration</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Membership Registration</h1>

      {/* Registration Form Section */}
      <div className="mb-8">
        <div className="bg-pink-50 p-3 mb-6">
          <p>Register with email address</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="flex items-center gap-2 mb-1">
              <span>Email address</span>
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
            </label>
            <input
              type="email"
              placeholder="shufti@uuru.jp"
              className="w-full border rounded p-2 focus:ring-pink-500 focus:border-pink-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Username Field */}
          <div>
            <label className="flex items-center gap-2 mb-1">
              <span>Username</span>
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
            </label>
            <input
              type="text"
              placeholder="Between 4 and 30 characters, cannot use only half-width @"
              className="w-full border rounded p-2 focus:ring-pink-500 focus:border-pink-500"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="flex items-center gap-2 mb-1">
              <span>Password</span>
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Include at least one half-width English letter or number (8 characters or more)"
              className="w-full border rounded p-2 focus:ring-pink-500 focus:border-pink-500"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <div className="mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2 text-pink-500 focus:ring-pink-500"
                />
                <span className="text-sm">Show password</span>
              </label>
            </div>
          </div>

          {/* How to use */}
          <div>
            <label className="flex items-center gap-2 mb-1">
              <span>How to use</span>
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="useType"
                  value="work"
                  checked={formData.useType === 'work'}
                  onChange={(e) => setFormData({ ...formData, useType: e.target.value })}
                  className="mr-2 text-pink-500 focus:ring-pink-500"
                />
                <span>I want to participate in the work</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="useType"
                  value="job"
                  checked={formData.useType === 'job'}
                  onChange={(e) => setFormData({ ...formData, useType: e.target.value })}
                  className="mr-2 text-pink-500 focus:ring-pink-500"
                />
                <span>I want to apply for a job</span>
              </label>
            </div>
          </div>

          {/* About Registration */}
          <div>
            <label className="flex items-center gap-2 mb-1">
              <span>About Registration</span>
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">Required</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="registrationType"
                  value="individual"
                  checked={formData.registrationType === 'individual'}
                  onChange={(e) => setFormData({ ...formData, registrationType: e.target.value })}
                  className="mr-2 text-pink-500 focus:ring-pink-500"
                />
                <span>Individual</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="registrationType"
                  value="corporation"
                  checked={formData.registrationType === 'corporation'}
                  onChange={(e) => setFormData({ ...formData, registrationType: e.target.value })}
                  className="mr-2 text-pink-500 focus:ring-pink-500"
                />
                <span>Corporation</span>
              </label>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mr-2 text-pink-500 focus:ring-pink-500"
              />
              <span className="text-sm">
                Please agree to <a href="#" className="text-pink-500 underline">the terms of use</a> and{' '}
                <a href="#" className="text-pink-500 underline">privacy policy</a> and press the "Sign up for free" button
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors duration-300"
          >
            Sign up for free
          </button>
        </form>
      </div>

      {/* Alternative Registration */}
      <div>
        <div className="bg-pink-50 p-3 mb-4">
          <p>Register with an account from another service</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center border rounded px-4 py-2 hover:bg-gray-50">
            <Mail className="w-5 h-5 mr-2 text-red-500" />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center border rounded px-4 py-2 hover:bg-gray-50">
            <Users className="w-5 h-5 mr-2 text-purple-500" />
            Register with Yahoo! JAPAN ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;