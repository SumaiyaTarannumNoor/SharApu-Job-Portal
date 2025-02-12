import React from 'react';
import { FileTextIcon, ImageIcon, ShieldIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const HirerUserSettingsSection = () => {
    const navigate = useNavigate();

    const handleHirerSelfIntroduction = () => {
      navigate('/hirer-self-introduction');
    };

    const handleHirerIconSetting = () => {
        navigate('/hirer-icon-setting');
      };

    const settingItems = [
      {
        icon: FileTextIcon,
        title: "Set up your self-introduction",
        description: "Including information about your industry will make it easier for workers to apply.",
        onClick: handleHirerSelfIntroduction
      },
      {
        icon: ImageIcon,
        title: "Let's set the icon",
        description: "Setting an icon will make it easier for workers to recognize you.",
        onClick: () => navigate('/hirer-icon-setting')
      },
      {
        icon: ShieldIcon,
        title: "Verify your identity",
        description: "When you register for a job for the first time, you will need to verify your identity.",
        onClick: () => navigate('/verify-identity')
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-pink-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                User settings and other things to do
              </h2>
            </div>
            
            <div className="divide-y divide-pink-100">
              {settingItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-6 hover:bg-pink-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-pink-100 text-pink-600">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={item.onClick}
                    className="px-6 py-2 text-sm font-medium text-pink-600 border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-colors duration-200"
                  >
                    Set up
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default HirerUserSettingsSection;