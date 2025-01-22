import React from 'react';
import Check1 from '../../../assets/LandingPageIconImage/Check1.png';
import Penguine1 from '../../../assets/LandingPageIconImage/Penguine1.png';
import Ok from '../../../assets/LandingPageIconImage/Ok.png';
import Work_Time from '../../../assets/LandingPageIconImage/Work_Time.png';
import Safety from '../../../assets/LandingPageIconImage/Safety.png';

const ReasonCard = ({ title, description, icon, subtitle }) => (
    <div className="aspect-square">
        <div className="bg-pink-50 rounded-full shadow-md w-full h-full p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="flex flex-col items-center justify-center mb-2">
                <img src={icon} alt={title} className="w-16 h-16 mb-1" />
                <span className="text-pink-500 text-xs font-medium">{subtitle}</span>
            </div>
            <h3 className="text-center text-yellow-300 font-semibold text-lg mb-1 px-4">
                {title}
            </h3>
            <p className="text-black text-center text-sm px-4 line-clamp-3">
                {description}
            </p>
        </div>
    </div>
);

const ReasonsSection = () => {
    const reasons = [
        {
            title: "High Quality Service",
            description: "We provide the highest quality service and propose solutions tailored to your needs.",
            icon: Ok,
            subtitle: "OK"
        },
        {
            title: "24 Hour support",
            description: "Our expert staff is available 24/7 to provide prompt support.",
            icon: Work_Time,
            subtitle: "Work Time"
        },
        {
            title: "Reasonable price",
            description: "We provide high quality services at competitive prices.",
            icon: Safety,
            subtitle: "Safety"
        }
    ];

    return (
        <div className="mt-24 bg-pink-200 py-24 sm:py-16 px-8 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-12 space-y-2 sm:space-y-0">
                <img src={Check1} alt="Check" className="w-16 h-16" />
                <div className="flex flex-col space-y-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-pink-500">
                      <span className="text-blue-400">3 </span>reasons to choose SharApu
                    </h2>
                    <h4 className="text-sm text-gray-600 text-center">
                    Even if you are new to working from home, you can use this service safely and securely!
                    </h4>
                </div>
                <img src={Penguine1} alt="Mascot" className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {reasons.map((reason, index) => (
                    <ReasonCard key={index} {...reason} />
                ))}
            </div>
            <div className="text-center mt-12">
                <button className="bg-pink-500 text-white px-8 py-3 rounded-lg text-md hover:bg-pink-600 transition duration-300">
                    Start Now For Free
                </button>
            </div>
        </div>
    );
};

export default ReasonsSection;