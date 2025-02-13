import React from 'react';
import { 
  UserIcon, 
  CreditCardIcon, 
  ShieldCheckIcon, 
  BellIcon, 
  GiftIcon, 
  LogOutIcon 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';


const HirerUserSettingSidebar = () => {
  const navigate = useNavigate();
  const handleHirerSettings = () => {
    navigate('/hirer-settings');
  };  
  const menuItems = [
    { 
      title: 'General settings', 
      items: [
        { icon: UserIcon, text: 'Username' },
        { icon: UserIcon, text: 'Icon' },
        { icon: UserIcon, text: 'self-introduction' },
        { icon: BellIcon, text: 'Notification' }
      ]
    },
    {
      title: 'Privacy and Security Settings',
      items: [
        { icon: ShieldCheckIcon, text: 'Personal information' },
        { icon: UserIcon, text: 'Email address' },
        { icon: ShieldCheckIcon, text: 'Login Password' },
        { icon: ShieldCheckIcon, text: 'Verify your identity' },
        { icon: UserIcon, text: 'Block' }
      ]
    },
    {
      title: 'Payment Settings',
      items: [
        { icon: CreditCardIcon, text: 'Refund account' }
      ]
    },
    {
      title: 'Others',
      items: [
        { icon: UserIcon, text: 'Introducing Shutui' },
        { icon: GiftIcon, text: 'Receive a gift' },
        { icon: LogOutIcon, text: 'Cancel your membership' }
      ]
    }
  ];

  return (
    <div className="w-64 bg-pink-50 h-full shadow-lg">
      <div className="p-4">
        <h2 onClick={handleHirerSettings} className="text-xl font-bold text-pink-800 mb-4">User Settings</h2>
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            <h3 className="text-sm font-semibold text-pink-600 mb-2 uppercase">
              {section.title}
            </h3>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className="flex items-center py-2 px-3 hover:bg-pink-100 rounded-md cursor-pointer transition-colors"
                >
                  <item.icon className="text-pink-500 mr-3" size={20} />
                  <span className="text-pink-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HirerUserSettingSidebar;