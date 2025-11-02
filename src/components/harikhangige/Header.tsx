import React from "react";

export function Header() {
  return (
    <div className="w-full bg-white relative h-25 overflow-hidden">
      <div className="absolute inset-0 opacity-5"></div>
      <div className="container max-h-25 px-4 py-8 relative z-10">
        <div className="flex items-center justify-between gap-8">
          {/* Left side - Deity Image */}
          <div className="flex-shrink-0">
            <div className="w-48 rounded-lg flex items-center justify-center">
              <img
                src="/harkandige/header-image.png"
                alt="Shri Mahaalasaa Naaraayani Devi"
                className="w-48 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center">
            {/* Kannada Text */}
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
              || ಮೂಲ ಶ್ರೀಮತ್ ಮಹಾಲಸಾ ನಾರಾಯಣೀ ವಿಜಯತೇ ||
            </div>

            {/* Hindi Text */}
            <div className="text-lg md:text-xl text-gray-700 mb-4">
              || मूल श्रीमत महालसा नारायणी विजयते ||
            </div>

            {/* Welcome Text */}
            <div className="text-xl md:text-2xl text-gray-800 mb-2">
              Welcome to
            </div>

            {/* Main Temple Name */}
            <div className="text-3xl font-bold text-orange-600 mb-6 tracking-wide">
              SHRI MAHAALASAA NAARAAYANI DEVI KSHETRA
            </div>

            {/* Address */}
            <div className="text-md text-gray-800 mb-2">
              41 SHIROOR, HARIKHANDIGE- 576 124, UDUPI DIST.
            </div>

            {/* Phone Numbers */}
            <div className="text-base md:text-lg text-gray-700 font-semibold">
              PHONE: 9739486200, 8970414801, 9886818366
            </div>
          </div>

          {/* Right side - Decorative element or second image */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="text-orange-600 text-4xl">🕉️</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border pattern */}
      <div className="h-2 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"></div>
    </div>
  );
}
