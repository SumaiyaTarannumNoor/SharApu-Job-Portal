import React from 'react';
import { ClipboardList, Edit, FileSpreadsheet, MessageCircle } from 'lucide-react';

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

      <div className="bg-gray-100 p-4 mb-8">
        <h2 className="text-xl font-semibold">The following types of work can be requested at Shufuti:</h2>
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

      <div className="text-center">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full">
          Register a job now
        </button>
      </div>
    </div>
  );
};

export default WantToOrderWork;