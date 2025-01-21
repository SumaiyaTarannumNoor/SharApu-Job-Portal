import React from 'react';

const Footer = () => {
  const menuItems = {
    'Main Menu': [
      { text: 'Search for a job', link: '#' }
    ],
    'Support': [
      { text: 'User Guide', link: '#' },
      { text: 'Q&A List', link: '#' }
    ],
    'Link': [
      { text: 'SharApu Blog', link: '#' },
      { text: 'Official Twitter', link: '#' }
    ],
    'Operating Company': [
      { text: 'Company Information', link: '#' },
      { text: 'Terms of Service', link: '#' }
    ]
  };

  return (
    <footer className="bg-pink-500 text-white mt-16">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(menuItems).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.text}>
                    <a href={item.link} className="hover:text-pink-200">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-pink-400/30 mt-8">
          <div className="py-6 text-center">
            <p className="text-white/90 text-sm mt-6">
              ©{new Date().getFullYear()} 
              <span className="font-semibold text-white"> SharApu  || </span> 
              Powered By 
              <span className="font-semibold"> TechKnowGram Limited</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;