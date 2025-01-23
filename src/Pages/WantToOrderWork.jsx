import React from 'react';
import { ClipboardList, Edit, FileSpreadsheet, MessageCircle } from 'lucide-react';
import Penguine1 from '../../assets/LandingPageIconImage/Penguine1.png'
import Penguine2 from '../../assets/LandingPageIconImage/Penguine2.png'
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
                        SharApu Easy Guide for those who want to order work
                    </h1>
                    <p className="mt-4 text-gray-600">
                        No registration fee or brokerage fee!! SharApu has many housewives working, so you can quickly respond to small tasks and sudden requests that are difficult to ask for on other crowdsourcing services.
                    </p>
                    <p className="mt-2 text-gray-600">
                        Please take advantage of SharApu's unique response capabilities!
                    </p>
                </div>
                <img src={Penguine2} alt="Mascot" className="w-32 h-32" />
            </div>
            
            <div className="bg-gradient-to-r from-pink-600 via-pink-400 to-pink-200 p-8 mb-8 rounded-lg shadow-sm border border-pink-100">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className="w-1 h-8 bg-white rounded-full"></span>
                    The following types of work can be requested at SharApu:
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
                Small orders and small lots are OK, so it's easy to order! Please make use of SharApu!
            </p>

            <div className="text-center mb-12">
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full">
                    Register a job now
                </button>
            </div>

            <div className="bg-gradient-to-r from-pink-600 via-pink-400 to-pink-200 p-8 mb-8 rounded-lg shadow-sm border border-pink-100">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className="w-1 h-8 bg-white rounded-full"></span>
                    SharApu employs many housewives who work from home!
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
                    <p className="text-gray-600">Many of our members have a wealth of business experience as working adults, and in the case of SharApu, many of our registered members have worked primarily in clerical or customer service jobs.</p>
                </div>
            </div>

            <div className="flex items-center gap-6 bg-white p-6 rounded-lg">
                <img src={Penguine1} alt="Mascot" className="w-24 h-24" />
                <div>
                    <p className="text-pink-400 mb-2">Since there are many housewives working, many of them concentrate on their work during the day or during the few hours at night, or use their smartphones in their spare time.</p>
                    <button className="text-pink-500 hover:text-pink-600 font-medium">
                        See what customers who use SharApu have to say
                    </button>
                </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg mt-12 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Work flow</h2>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-6">
                        <div className="bg-pink-500 rounded-full p-4 relative min-w-[64px] min-h-[64px] flex items-center justify-center">
                            <span className="text-white text-sm font-medium absolute top-1 left-2 ml-1 mt-1">STEP</span>
                            <span className="text-2xl font-bold text-white mt-1">1</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Register a job</h3>
                                    <p className="text-gray-600">Budget and request details can be freely set</p>
                                    <p className="text-gray-600">Requests can be made for as little as one item, and you can use our services just once or for a long-term period.</p>
                                </div>
                                <div className="text-pink-500">
                                    <FileSpreadsheet className="w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="space-y-1">
                            {[1,2,3].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-pink-200 transform rotate-45"></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="bg-pink-500 rounded-full p-4 relative min-w-[64px] min-h-[64px] flex items-center justify-center">
                            <span className="text-white text-sm font-medium absolute top-1 left-2 ml-1 mt-1">STEP</span>
                            <span className="text-2xl font-bold text-white mt-1">2</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Place an order to a worker</h3>
                                    <p className="text-gray-600">Industry-leading support for peace of mind in your transactions</p>
                                    <p className="text-gray-600">If you have any trouble regarding transactions, we will back you up with a safe and secure support system!</p>
                                </div>
                                <div className="text-pink-500">
                                    <MessageCircle className="w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="space-y-1">
                            {[1,2,3].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-pink-200 transform rotate-45"></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="bg-pink-500 rounded-full p-4 relative min-w-[64px] min-h-[64px] flex items-center justify-center">
                            <span className="text-white text-sm font-medium absolute top-1 left-2 ml-1 mt-1">STEP</span>
                            <span className="text-2xl font-bold text-white mt-1">3</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Easy Payment</h3>
                                    <p className="text-gray-600">The only cost is the worker's compensation.</p>
                                    <p className="text-gray-600">All you have to do is check and approve the delivery and your payment will be completed.</p>
                                    <p className="text-xs text-gray-500 mt-2">*If you use deferred payment, additional fees will be charged.</p>
                                </div>
                                <div className="text-pink-500">
                                    <ClipboardList className="w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="border border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full text-lg font-medium transition-colors">
                        See detailed usage
                    </button>
                </div>
            </div>
        </div>
        
    );
};

export default WantToOrderWork;