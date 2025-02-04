import React, { useState } from 'react';
import Social from '../Authenticator/socialLogin';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    usernameEmail: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main-profile');
  };


  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Log in</h1>

      {/* Email/Username Login Section */}
      <div className="mb-8">
        <div className="bg-pink-50 p-3 mb-6 text-center">
          <p>Log in with your username/email address</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username/Email Field */}
          <div>
            <input
              type="text"
              placeholder="Username/Email Address"
              className="w-full border rounded p-2.5 focus:ring-pink-500 focus:border-pink-500"
              value={formData.usernameEmail}
              onChange={(e) => setFormData({ ...formData, usernameEmail: e.target.value })}
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="w-full border rounded p-2.5 focus:ring-pink-500 focus:border-pink-500"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {/* Show Password Checkbox */}
          <div>
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2 text-pink-500 focus:ring-pink-500"
              />
              Show password
            </label>
          </div>

          {/* Login Button */}
          <button onClick={handleLogin}
            type="submit"
            className="w-full bg-pink-500 text-white py-2.5 rounded hover:bg-pink-600 transition-colors duration-300"
          >
            Log in
          </button>
        </form>

        {/* Help Links */}
        <div className="mt-4 text-center">
          <a href="#" className="text-pink-500 hover:underline text-sm block mb-2">
            If you have forgotten your password, click here (reissue password)
          </a>
          <a href="#" className="text-pink-500 hover:underline text-sm block">
            If you cannot log in, please go to the help page.
          </a>
        </div>
      </div>

      {/* SNS Login Section */}
      <div>
        <div className="bg-pink-50 p-3 mb-6 text-center">
          <p>Log in with your SNS account</p>
        </div>
        <Social />

        {/* SNS Help Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-pink-500 hover:underline text-sm">
            If you cannot log in with your SNS account, click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;