import React from 'react';

const HeroSection = ({ HeroImage }) => {
  return (
    <section className="relative h-96 w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-4">
            You can work at your own pace in your spare time
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-white">
            With SharApu, you're sure to find your own work style.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-white px-6 sm:px-8 py-3 rounded-lg text-lg sm:text-xl w-full sm:w-auto">
              It only takes 3 minutes! Register for free here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;