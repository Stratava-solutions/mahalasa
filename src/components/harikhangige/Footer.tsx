import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-green-700 mt-12">
      {/* Navigation */}
      <nav className="bg-green-700 py-3">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 text-white text-sm font-semibold">
            <li>
              <a href="/" className="hover:underline">HOME</a>
            </li>
            <li>
              <a href="/history" className="hover:underline">HISTORY</a>
            </li>
            <li>
              <a href="/gallery" className="hover:underline">GALLERY</a>
            </li>
            <li>
              <a href="/publications" className="hover:underline">PUBLICATIONS</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">CONTACT</a>
            </li>
            <li>
              <a href="/sthothra-manjari" className="hover:underline">Sthothra Manjari</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Copyright and Credits */}
      <div className="bg-pink-50 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 text-sm mb-2">
            © 1998-2015 | <span className="italic">Editor: Shrikant N Shenoy</span>
          </p>
          <p className="text-gray-700 text-sm">
            <a href="/" className="text-green-700 hover:underline font-semibold">
              Shri Mahaalasaa Naaraayani Devi Kshetra
            </a>
            {' | Powered by '}
            <a href="#" className="text-blue-600 hover:underline">Mantra</a>
            {' & '}
            <a href="#" className="text-blue-600 hover:underline">WordPress</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}