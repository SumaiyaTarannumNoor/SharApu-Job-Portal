import React from 'react';
import { ClipboardList, Edit, FileSpreadsheet, MessageCircle } from 'lucide-react';
import Penguine1 from '../../assets/LandingPageIconImage/Penguine1.png'
import Worker1 from '../../assets/Workers/Worker1.png'
import Worker2 from '../../assets/Workers/Worker2.png'

const WantToOrderWork = () => {
    const workTypes = [
        {
            icon: <FileSpreadsheet className="w-16 h-16 text-yellow-400" />,
            title: "Data entry and collection",
            price: "20 yen/item",
            description: "You can request a wide range of services, including entering receipts, transcribing audio, and gathering information on nearby areas."
        },
        {
            icon: <Edit className="w-16 h-16 text-yellow-400" />,
            title: "Writing/Reviews",
            price: "100 yen/article",
            description: "You can request the creation of articles on a particular topic, reviews of movies and TV dramas, and reviews of products."
        },
        {
            icon: <ClipboardList className="w-16 h-16 text-yellow-400" />,
            title: "Survey responses",
            price: "20 yen/item",
            description: "Since there are many female workers, it is useful if you want to gather more voices from women."
        },
        {
            icon: <MessageCircle className="w-16 h-16 text-yellow-400" />,
            title: "Sales, customer support, research",
            price: "30 yen/item",
            description: "Making appointments and making telephone sales to inform about seminars, etc."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Shufuti Easy Guide for those who want to order work
                    </h1>
                    <p className="mt-4 text-gray-600">
                        No registration fee or brokerage fee!! Shufuti has many housewives working, so you can quickly respond to small tasks and sudden requests that are difficult to ask for on other crowdsourcing services.
                    </p>
                    <p className="mt-2 text-gray-600">
                        Please take advantage of Shufuti's unique response capabilities!
                    </p>
                </div>
                <img src="/api/placeholder/200/200" alt="Mascot" className="w-32 h-32" />
            </div>
            
            <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-white p-8 mb-8 rounded-lg shadow-sm border border-pink-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-8 bg-pink-400 rounded-full"></span>
                    The following types of work can be requested at Shufuti:
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workTypes.map((work, index) => (
                    <div key={index} className="border rounded-lg p-6 flex flex-col items-center text-center">
                        {work.icon}
                        <h3 className="text-lg font-semibold mt-4 mb-2">{work.title}</h3>
                        <p className="text-pink-500 font-medium mb-4">Estimated unit price: {work.price}</p>
                        <p className="text-gray-600 text-sm">{work.description}</p>
                        <button className="mt-4 text-pink-500 hover:text-pink-600">
                            View actual jobs in this category
                        </button>
                    </div>
                ))}
            </div>

            <p className="text-center my-8 text-gray-600">
                Small orders and small lots are OK, so it's easy to order! Please make use of Shufuti!
            </p>

            <div className="text-center mb-12">
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full">
                    Register a job now
                </button>
            </div>

            <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-white p-8 mb-8 rounded-lg shadow-sm border border-pink-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-8 bg-pink-400 rounded-full"></span>
                    Shufuti employs many housewives who work from home!
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <img src={Worker2} alt="Woman working from home" className="w-full h-64 object-cover rounded-lg mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Many housewives are eager to work</h3>
                    <p className="text-gray-600">Many people have switched to working from home due to pregnancy or childcare, so they are highly motivated to work and many of them continue working continuously.</p>
                </div>

                <div>
                    <img src={Worker1} alt="Professional woman" className="w-full h-64 object-cover rounded-lg mb-4" />
                    <h3 className="text-lg font-semibold mb-2">There are many excellent people</h3>
                    <p className="text-gray-600">Many of our members have a wealth of business experience as working adults, and in the case of Shufuti, many of our registered members have worked primarily in clerical or customer service jobs.</p>
                </div>
            </div>

            <div className="flex items-center gap-6 bg-gray-50 p-6 rounded-lg">
                <img src={Penguine1} alt="Mascot" className="w-24 h-24" />
                <div>
                    <p className="text-gray-600 mb-2">Since there are many housewives working, many of them concentrate on their work during the day or during the few hours at night, or use their smartphones in their spare time.</p>
                    <button className="text-pink-500 hover:text-pink-600 font-medium">
                        See what customers who use Shufuti have to say
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WantToOrderWork;