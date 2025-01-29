import React from 'react';
import { ShieldCheck, Banknote, HeartHandshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Add this import
import Person1 from '../../assets/People/Person1.jpg';
import Person2 from '../../assets/People/Person2.jpg';
import Penguine3 from '../../assets/LandingPageIconImage/Penguine3.png';
import TestimonialsSection from '../components/Reviewers/TestimonialsSection';

const WantToReceiveWork = () => {
  
  const navigate = useNavigate();
  const handleContactUs = () => {
    navigate('/contact-us');
  };
  return (
    <div className="bg-pink-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-pink-900 mb-2">
              SharApu Easy Guide for those who want to receive work
            </h1>
            <p className="text-pink-700">
              Earn some extra cash in your spare time! Use your experience to work from home!
            </p>
            <p className="text-pink-600 mt-2">
              With a wide range of jobs and a comprehensive support system, working from home is the standard, making it easy to continue with a variety of work styles!
            </p>
          </div>
          <div className="text-pink-500 w-16 h-16">
            <img src={Penguine3} alt="Penguin mascot" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Job Selection Banner */}
        <div className="bg-pink-100 p-4 rounded-lg mb-8">
          <p className="text-pink-800 font-medium">
            Choose from a wide variety of jobs! Find a job that "I can do"!
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <img src={Person1} alt="Person working" className="w-full mb-4 rounded object-cover" />
            <h2 className="text-xl font-semibold text-pink-900 mb-3">
              It's okay if you're not confident in your skills or experience!
            </h2>
            <p className="text-pink-700">
              With the convenient tag function, you can search for the job that suits you with one click! There are jobs that even those who are new to telecommuting can join immediately, such as #beginners welcome, #no skills required, and jobs that can be completed with just a smartphone.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <img src={Person2} alt="Person working from home" className="w-full mb-4 rounded object-cover" />
            <h2 className="text-xl font-semibold text-pink-900 mb-3">
              You can continue it even with an irregular lifestyle!
            </h2>
            <p className="text-pink-700">
              There are many jobs available for surveys and simple data entry that can be done in the spare time between housework and childcare, or in a few hours at night. Many experienced workers are starting out little by little and finding their own pace.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 mb-16">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Find a job now
          </button>
        </div>

        {/* Support System Section */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-pink-900 text-center mb-12">
            With a comprehensive support system, you can work with peace of mind
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Safe and Secure System */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-pink-900 mb-3">
                A safe and secure system
              </h3>
              <p className="text-pink-700 text-sm">
                All orders are reviewed by the office, and only approved orders are posted. This is to ensure that you can do business safely.
              </p>
            </div>

            {/* Full Payment Guarantee */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Banknote className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-pink-900 mb-3">
                Full payment guarantee
              </h3>
              <p className="text-pink-700 text-sm">
                We will pay your compensation on your behalf. This will prevent non-payment of compensation and allow you to work with peace of mind.
              </p>
            </div>

            {/* Comprehensive Support */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <HeartHandshake className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-pink-900 mb-3">
                A comprehensive support system
              </h3>
              <p className="text-pink-700 text-sm">
                Even during transactions, you can contact our office via chat or email with any questions, and a dedicated staff member will be happy to assist you by phone.
              </p>
            </div>
          </div>

          {/* Support Message */}
          <div className="mt-12 text-center">
            <div className="inline-block">
              <img src={Penguine3} alt="Mascot" className="w-24 h-24 mx-auto mb-4" />
              <p className="text-pink-800 text-sm">
                We strive to improve our services every day so that workers can continue working with peace of mind!
              </p>
              {/* Contact Text with Animation */}
              <p className="text-pink-700 text-sm mt-2">
                If you have any problems, please feel free to{' '}
                <button
                  onClick={handleContactUs}
                  className="inline-block text-2xl text-pink-600 animate-bounce cursor-pointer border-none bg-transparent p-0 font-inherit"
                >
                  CONTACT
                </button>
                {' '}support.
              </p>

            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
    </div>

  );
};

export default WantToReceiveWork;