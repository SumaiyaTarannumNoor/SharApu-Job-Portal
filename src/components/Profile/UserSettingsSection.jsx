import React from 'react';
import { FaBriefcase, FaCode, FaBuilding, FaHandshake } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SettingItem = ({ icon: Icon, onClick, title, description }) => (
  <div 
    className="flex items-start justify-between p-4 border-b border-gray-100 cursor-pointer hover:bg-pink-50 transition-colors"
    onClick={onClick}
  >
    <div className="flex gap-3">
      <div className="mt-1">
        <Icon className="w-5 h-5 text-pink-500" />
      </div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
    <button className="px-4 py-1 text-sm text-pink-500 border border-pink-500 rounded-full hover:bg-pink-50 transition-colors">
      Set up
    </button>
  </div>
);

const UserSettingsSection = () => {
  const navigate = useNavigate();
  
  const handleJobPreferences = () => {
    navigate('/job-preferences');
  };

  const handlePreferredJobs = () => {
    navigate('/preferred-job');
  };

  const handleJobExpertises = () => {
    navigate('/job-expertises')
  }
      
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm mt-6">
          <div className="bg-pink-100 px-4 py-3 rounded-t-lg">
            <h2 className="font-medium text-gray-800">User settings and other things to do</h2>
          </div>
          
          <div className="divide-y divide-gray-50">
            <SettingItem 
              icon={FaBriefcase}
              onClick={handleJobPreferences}
              title="Set your job preferences"
              description="This makes it easier to match with jobs that match your desired working style."
            />
            
            <SettingItem 
              icon={FaBuilding}
              onClick={handlePreferredJobs}
              title="Define the job you are interested in"
              description="This will make it easier to match you with jobs that are similar to the settings you have made."
            />
            
            <SettingItem 
              icon={FaCode}
              onClick={handleJobExpertises}
              title="Set the job type you have experience in"
              description="This will make it easier to match you with jobs similar to the type of work you have experience in."
            />
            
            <SettingItem 
              icon={FaHandshake}
              title="Let's set up the skills"
              description="This will make it easier to match you with jobs that require the skills you can bring to the table."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsSection;