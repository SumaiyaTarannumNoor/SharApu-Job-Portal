import React from 'react';
import { Mail, Users } from 'lucide-react';

const AlternativeRegistration = () => {
  return (
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
          {/* Register with Yahoo! JAPAN ID */}
          Register with NID
        </button>
      </div>
    </div>
  );
};

export default AlternativeRegistration;