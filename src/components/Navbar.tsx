"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "HOME", path: "/" },
  { name: "CHRONICLES", path: "/chronicles" },
  { name: "FACTFILE", path: "/factfile" },
  { name: "CHARITRA", path: "/charitra" },
  { name: "SHRI GURU CHARITRA", path: "/shri-guru-charitra" },
  { name: "PANCHANGAM", path: "/panchangam" },
  { name: "INVITATION", path: "/invitation" },
  { name: "SEVA", path: "/seva" },
  { name: "TEMPLES", path: "/temples" },
  {
    name: "CHANNELS",
    path: "/channels",
    dropdown: [
      { name: "Mahalasa At Temples", path: "/channels/mahalasa-devi" },
      { name: "Temples", path: "/channels/temples" },
      { name: "Video Gallery", path: "/channels/video-gallery" },
      // { name: "Live Streaming", path: "/channels/live-streaming" },
      // { name: "Audio Darshan", path: "/channels/audio-darshan" },
    ],
  },
  {
    name: "ABOUT",
    path: "/about",
    // dropdown: [
    //   { name: "Temple History", path: "/about/temple-history" },
    //   { name: "Deity Information", path: "/about/deity-information" },
    //   { name: "Temple Architecture", path: "/about/temple-architecture" },
    //   { name: "Management", path: "/about/management" },
    // ],
  },
  {
    name: "CONNECT",
    path: "/contact",
    dropdown: [
      { name: "Contact Us", path: "/contact" },
      { name: "Temples Contacts", path: "/contact/temples-contact" },
      // { name: "Feedback", path: "/contact/feedback" },
      { name: "Policies", path: "/contact/policies" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (tabName: string) => {
    if (window.innerWidth >= 768) {
      setOpenDropdown(tabName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setOpenDropdown(null);
    }
  };

  const handleMobileDropdownToggle = (tabName: string) => {
    setOpenDropdown(openDropdown === tabName ? null : tabName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-orange-50 w-full border-b relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center p-4">
        <span className="font-semibold text-red-600">Menu</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-orange-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block px-2">
        <ul className="flex flex-wrap justify-center gap-1 py-2">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="relative"
              onMouseEnter={() => tab.dropdown && handleMouseEnter(tab.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={tab.path}
                className={`px-2 py-1 text-xs rounded transition-colors cursor-pointer inline-block ${
                  pathname === tab.path ||
                  (tab.dropdown &&
                    tab.dropdown.some((item) => pathname === item.path))
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                }`}
              >
                {tab.name}
                {tab.dropdown && (
                  <svg
                    className="inline-block ml-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>

              {tab.dropdown && openDropdown === tab.name && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-48">
                  <ul className="py-1">
                    {tab.dropdown.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          className={`block px-3 py-2 text-xs text-gray-700 hover:bg-orange-100 transition-colors ${
                            pathname === item.path
                              ? "bg-red-50 text-red-600 font-medium"
                              : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg z-50">
          <div className="py-2">
            {tabs.map((tab) => (
              <div key={tab.name}>
                <div className="flex items-center justify-between">
                  <Link
                    href={tab.path}
                    onClick={closeMobileMenu}
                    className={`flex-1 px-4 py-3 text-sm transition-colors ${
                      pathname === tab.path ||
                      (tab.dropdown &&
                        tab.dropdown.some((item) => pathname === item.path))
                        ? "bg-red-500 text-white"
                        : "text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    {tab.name}
                  </Link>
                  {tab.dropdown && (
                    <button
                      onClick={() => handleMobileDropdownToggle(tab.name)}
                      className="px-4 py-3 text-gray-600 hover:bg-orange-100"
                    >
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openDropdown === tab.name ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {tab.dropdown && openDropdown === tab.name && (
                  <div className="bg-gray-50 border-t">
                    {tab.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={closeMobileMenu}
                        className={`block px-8 py-2 text-sm transition-colors ${
                          pathname === item.path
                            ? "bg-red-50 text-red-600 font-medium border-l-4 border-red-500"
                            : "text-gray-600 hover:bg-orange-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
