'use client'
import { useState } from 'react';

const tabs = [
  'HOME','CHRONICLES','FACTFILE','CHARITRA','PANCHANGAM',
  'INVITATION','SEVA','TEMPLES','CHANNELS','ABOUT','CONNECT'
];

export default function Navbar() {
  const [active, setActive] = useState('HOME');

  return (
    <nav className="bg-orange-50 w-full border-b">
      <div className="px-2">
        <ul className="flex flex-wrap justify-center gap-1 py-2">
          {tabs.map(tab => (
            <li key={tab}>
              <button
                onClick={() => setActive(tab)}
                className={`px-2 py-1 text-xs rounded transition-colors cursor-pointer ${
                  active === tab
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}