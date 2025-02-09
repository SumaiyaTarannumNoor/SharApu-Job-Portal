import React from 'react';
import { UserPlus, Briefcase, Building2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ChooseRole = () => {
  const navigate = useNavigate();

  const handleSeekJob = () => {
    navigate('/main-profile');
  };
  
  const handleHirer = () => {
    navigate('/hirer-profile');
  };

  const handleThirdParty = () => {
    navigate('/third-party');
  };

  const roles = [
    {
      title: 'Hire',
      description: 'Find the perfect professional to bring your project to life.',
      icon: UserPlus,
      onClick: handleHirer
    },
    {
      title: 'Seek Job',
      description: 'Browse and apply for a wide range of job opportunities.',
      icon: Briefcase,
      onClick: handleSeekJob
    },
    {
      title: 'Third Party',
      description: 'Explore our suite of tools and services for businesses.',
      icon: Building2,
      onClick: handleThirdParty
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-pink-500 to-pink-400 py-20 px-4 mt-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Choose Your Role
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              onClick={role.onClick}
              className="group relative bg-white bg-opacity-20 rounded-2xl p-8 hover:bg-opacity-30 transition-all duration-300 cursor-pointer backdrop-blur-sm border border-pink-400 border-opacity-20"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-pink-400 bg-opacity-30 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                  <role.icon className="w-10 h-10 text-pink-200" />
                </div>
                
                <h2 className="text-2xl font-semibold text-white">
                  {role.title}
                </h2>
                
                <p className="text-pink-100 text-opacity-90">
                  {role.description}
                </p>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;