import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  ChevronDown, 
  Crown, 
  Star, 
  Trophy, 
  Rocket,
  Shield, 
  MessageCircle,
  Users,
  Gift
} from 'lucide-react';
import HirerDrawerNavigation from './HirerDrawerNavigation'; // Import the navigation component

const PaymentOptions = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSwitchRole = () => {
    navigate('/choose-role');
  };

  const MiniProfileCard = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Profile</div>
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Settings</div>
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer text-red-600">Logout</div>
      </div>
    );
  };

  const PaidOptionCard = ({ title, price, features, icon: Icon, popular }) => (
    <div className={`relative bg-white rounded-lg shadow-lg p-6 border-2 
      ${popular ? 'border-pink-500' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex items-center justify-center mb-4">
        <Icon className={`w-12 h-12 ${popular ? 'text-pink-500' : 'text-gray-600'}`} />
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <div className="text-center mb-4">
        <span className="text-3xl font-bold">৳{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Star className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-2 rounded-full font-semibold transition-all duration-200
        ${popular 
          ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
        Subscribe Now
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              SharApu
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSwitchRole}
              className="
                px-6 py-2 
                font-semibold 
                text-white 
                rounded-full 
                bg-gradient-to-r from-pink-500 to-pink-600 
                hover:from-pink-600 hover:to-pink-700 
                transition-all duration-200 
                shadow-lg hover:shadow-xl 
                transform hover:-translate-y-0.5
                border border-pink-200
                hover:border-pink-300
              "
            >
              Switch Role
            </button>
            <div className="relative">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User className="w-6 h-6 text-white bg-pink-500 rounded-full p-1" />
                <span className="text-gray-700">ahmedul</span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
              </div>
              <MiniProfileCard isOpen={isProfileOpen} />
            </div>
          </div>
        </div>

        {/* Added the navigation component */}
        <HirerDrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
          <Link to="/payment-account" className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Premium Features</h1>
          <p className="text-gray-600">Choose the perfect plan for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <PaidOptionCard
            title="Starter Pack"
            price="999"
            icon={Rocket}
            features={[
              "Priority in search results",
              "5 featured job posts per month",
              "Direct messaging with workers",
              "Basic analytics dashboard",
              "bKash & Nagad payment support"
            ]}
          />

          <PaidOptionCard
            title="Business Pro"
            price="2499"
            icon={Crown}
            popular={true}
            features={[
              "Everything in Starter Pack",
              "15 featured job posts per month",
              "Advanced analytics & reporting",
              "Priority customer support",
              "Team collaboration tools",
              "All payment methods supported"
            ]}
          />

          <PaidOptionCard
            title="Enterprise"
            price="4999"
            icon={Trophy}
            features={[
              "Everything in Business Pro",
              "Unlimited featured job posts",
              "Custom branding options",
              "API access",
              "Dedicated account manager",
              "Custom payment solutions"
            ]}
          />
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">SSL Commerz certified secure transaction</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MessageCircle className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Dedicated support in Bangla & English</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Large Network</h3>
            <p className="text-gray-600">Access to verified skilled workers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Gift className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Special Offers</h3>
            <p className="text-gray-600">Regular discounts & promotional deals</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentOptions;