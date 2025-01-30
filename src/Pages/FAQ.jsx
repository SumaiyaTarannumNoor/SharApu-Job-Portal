import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/transactions');
  };

  const faqSections = [
    {
      title: 'Opening times',
      items: [
        { text: "Shufuti's business days and business hours", link: '#' }
      ]
    },
    {
      title: 'About the usage environment',
      items: [
        { text: "It doesn't display well on smartphone", link: '#' },
        { text: "If the screen is not displayed normally or operations are not possible", link: '#' },
        { text: "The page is not displayed properly (Safari recommended environment)", link: '#' }
      ]
    },
    {
      title: 'About the work budget',
      items: [
        { text: "The transaction was canceled after I placed the order, but I received a bill from my credit card company", link: '#' },
        { text: 'About the "Advance Payment" System', link: '#' },
        { text: "How to refund the budget you paid for a job", link: '#' },
        { text: "Can't use the remaining balance (change) for another project", link: '#' }
      ]
    },
    {
      title: '[Project] How to proceed with work (Worker)',
      items: [
        { text: "I was invited to make a direct payment outside the site", link: '#' }
      ]
    },
    {
      title: 'Payment',
      items: [
        { text: 'Can\'t change from "pay later" to "pay in advance"', link: '#' },
        { text: 'About the budget (advance payment method)', link: '#' },
        { text: 'What is the deferred payment system usage fee?', link: '#' },
        { text: 'Can you leave invoices and receipts?', link: '#' }
      ]
    },
    {
      title: 'About withdrawal',
      items: [
        { text: 'Please tell me how to cancel my membership', link: '#' }
      ]
    },
    {
      title: 'Log in',
      items: [
        { text: 'My account has been temporarily locked', link: '#' }
      ]
    },
    {
      title: 'About the transaction',
      items: [
        { text: 'Changes in job recruitment method, compensation, additional recruitment, and termination', link: '#' },
        { text: 'About "jobs" and "tasks" in project types', link: '#' },
        { text: 'Is it possible to deliver the same task multiple times?', link: '#' },
        { text: 'About the blocking function (formerly known as the blacklist)', link: '#' },
        { text: 'I lost contact with the other party during the transaction', link: '#' },
        { text: 'I want to continue trading with the same worker (regarding the "Continuous Ordering and Receiving Function")', link: '#' }
      ],
      showMore: true  // Added to identify this section for the show more button
    },
    {
      title: 'About registration information',
      items: [
        { text: 'Functionality restrictions due to unregistered account information', link: '#' },
        { text: 'Identity verification for those living overseas', link: '#' },
        { text: 'When I attach an ID document, the image appears distorted', link: '#' },
        { text: 'Guide page about average hourly rate', link: '#' },
        { text: "I can't log in", link: '#' },
        { text: "I forgot my password and can't log in", link: '#' }
      ]
    },
    {
      title: 'About job registration',
      items: [
        { text: 'Average hourly rate', link: '#' },
        { text: 'Individual hourly rate', link: '#' },
        { text: 'Can I request more work than the planned number of people?', link: '#' },
        { text: 'Can I modify or add to the published job design? (Addition function)', link: '#' }
      ]
    },
    {
      title: 'About Membership Registration',
      items: [
        { text: 'I accidentally registered as a client', link: '#' },
        { text: 'I registered as a worker by mistake', link: '#' }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6 text-pink-600">Q&A List</h1>
      
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search for the keyword you want to find"
          className="w-full p-4 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 pl-12"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqSections.map((section, index) => (
          <div key={index} className="border-b border-pink-100 pb-6 mb-6">
            <h2 className="text-lg font-semibold mb-4 text-pink-700">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href={item.link}
                    className="text-pink-600 hover:text-pink-800 hover:underline block transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            {section.showMore && (
              <div className="mt-4 text-right">
                <button
                  onClick={handleShowMore}
                  className="text-sm text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-gray-600 mt-8">
        <p className="mb-4">
          If you can't find what you're looking for or the problem persists, please{' '}
          <a href="#" className="text-pink-600 hover:text-pink-700 hover:underline">
            contact us here
          </a>
          .
        </p>
        <p>
          If you want to return to the Shufuti site, please{' '}
          <a href="#" className="text-pink-600 hover:text-pink-700 hover:underline">
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FAQ;