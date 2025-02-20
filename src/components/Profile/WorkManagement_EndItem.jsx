import React from 'react';

const WorkManagement_EndItem = () => {
  const tableData = [
    {
      jobName: '[Side job/Work from home] We are looking for people who don\'t kno...',
      expectedAmount: '0 yen',
      client: 'Y2 Consulting',
      status: 'Transaction Ended',
      unreadMessages: 1
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-50">
            <th className="px-4 py-3 text-left">Job Name</th>
            <th className="px-4 py-3 text-center">Expected remuneration amount</th>
            <th className="px-4 py-3 text-left">Client</th>
            <th className="px-4 py-3 text-left">Current situation</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-4">
                <div className="flex items-start gap-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">project</span>
                  <span className="text-gray-800">{item.jobName}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-center">{item.expectedAmount}</td>
              <td className="px-4 py-4">{item.client}</td>
              <td className="px-4 py-4">
                <div className="text-orange-500">{item.status}</div>
                <div className="text-sm text-gray-500">
                  Unread messages: {item.unreadMessages}
                </div>
              </td>
              <td className="px-4 py-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                  To the message board
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-4 py-4 border-t">
        <button className="text-gray-500 hover:text-gray-700">← Previous</button>
        <span className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded">1</span>
        <button className="text-gray-500 hover:text-gray-700">to the next →</button>
      </div>
    </div>
  );
};

export default WorkManagement_EndItem;