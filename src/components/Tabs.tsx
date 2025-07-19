'use client'
import { useState } from 'react';

const tabs = [
  'HOME','CHRONICLES','FACTFILE','CHARITRA','PANCHANGAM',
  'INVITATION','SEVA','TEMPLES','CHANNELS','ABOUT','CONNECT'
];

export default function Tabs() {
  const [active, setActive] = useState('HOME');

  return (
    <nav className="bg-cream-100 w-full overflow-x-scroll no-scrollbar">
      <ul className="inline-flex space-x-2 px-4 py-2 snap-x snap-mandatory">
        {tabs.map(tab => (
          <li key={tab} className="snap-center">
            <button
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-md transition-colors ${
                active === tab
                  ? 'bg-white text-green-900 font-semibold shadow'
                  : 'bg-cream-100 text-gray-700 hover:bg-white hover:text-green-800'
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
