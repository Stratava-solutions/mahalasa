import React from 'react';

export default function RightSidebar() {
  const informationLinks = [
    { title: 'Ghar Wapsi: A Miracle', url: '#' },
    { title: 'Experience of a Seeker', url: '#' },
    { title: 'Panchang in Inbox', url: '#' }
  ];

  return (
<div className="bg-yellow-100 p-6" style={{ width: '250px' }}>
      {/* NEWS Section */}
      <div className="mb-6">
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-3xl font-bold">NEWS</h2>
        </div>
        <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 p-6">
          <h3 className="text-blue-600 text-2xl font-bold mb-3">
            SHRI GURU CHARITHRA
          </h3>
          <p className="text-blue-600 text-lg leading-relaxed">
            The Holy Granth Shri Guru Charithra authored by Guruji Shri Suresh J. Pai is now available in English, Kannada and Marathi . To get your copy please call on # No 8970414801.
          </p>
        </div>
      </div>

      {/* INFORMATION Section */}
      <div className="mb-6">
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-3xl font-bold">INFORMATION</h2>
        </div>
        <div className="bg-yellow-100 p-6">
          <ul className="space-y-3">
            {informationLinks.map((link, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-4 h-4 bg-gray-400 mt-1 mr-3 flex-shrink-0"></span>
                <a 
                  href={link.url} 
                  className="text-blue-600 text-lg hover:text-blue-800 hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* VIDEOS Section */}
      <div className="mb-6">
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-3xl font-bold">VIDEOS</h2>
        </div>
        <div className="bg-yellow-100 p-6">
          {/* Video Placeholder */}
          <div className="bg-black aspect-video flex items-center justify-center mb-4 relative group cursor-pointer">
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all"></div>
            <button className="relative z-10 w-24 h-24 bg-gray-800 bg-opacity-80 rounded-lg flex items-center justify-center hover:bg-opacity-100 transition-all">
              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-white border-b-[20px] border-b-transparent ml-2"></div>
            </button>
          </div>
          <p className="text-gray-700 text-base">
            For more videos, go to{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
              Videos Page
            </a>
          </p>
        </div>
      </div>

      {/* ON FACEBOOK Section */}
      <div>
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-3xl font-bold">ON FACEBOOK</h2>
        </div>
        <div className="bg-yellow-100 p-6">
          {/* Facebook widget would go here */}
          <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            Facebook Feed
          </div>
        </div>
      </div>
    </div>
  );
}