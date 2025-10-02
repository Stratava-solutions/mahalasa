"use client";

import { useState, useRef, useEffect } from "react";
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
    ],
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "CONNECT",
    path: "/contact",
    dropdown: [
      { name: "Contact Us", path: "/contact" },
      { name: "Temples Contacts", path: "/contact/temples-contact" },
      { name: "Policies", path: "/contact/policies" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const timeoutRef = useRef<any>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const handleMouseEnter = (tabName: string) => {
    if (window.innerWidth >= 768) {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setOpenDropdown(tabName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      // Add a small delay before closing to allow moving to dropdown
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 150);
    }
  };

  const handleDropdownMouseEnter = () => {
    // Cancel the close timeout when mouse enters dropdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Close dropdown when mouse leaves
    if (window.innerWidth >= 768) {
      setOpenDropdown(null);
    }
  };

  const toggleMobileDropdown = (tabName: string) => {
    setOpenDropdown(openDropdown === tabName ? null : tabName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-orange-50 border-b border-orange-200 w-full relative z-50">
      {/* Mobile Menu Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <span className="font-bold text-red-600">Mahalasa</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-orange-100 transition-colors"
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
      <div className="hidden md:block">
        <ul className="flex flex-wrap justify-center gap-2 py-2">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="relative"
              ref={(el) => {
                dropdownRefs.current[tab.name] = el;
              }}
              onMouseEnter={() => tab.dropdown && handleMouseEnter(tab.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={tab.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors inline-block ${
                  pathname === tab.path ||
                  (tab.dropdown &&
                    tab.dropdown.some((item) => pathname === item.path))
                    ? "bg-red-500 text-white"
                    : "text-gray-700 hover:bg-orange-100"
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

              {/* Dropdown */}
              {tab.dropdown && openDropdown === tab.name && (
                <ul
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-[180px] z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {tab.dropdown.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 transition-colors ${
                          pathname === item.path
                            ? "bg-red-50 text-red-600 font-medium"
                            : ""
                        }`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-orange-200 shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          {tabs.map((tab) => (
            <div key={tab.name}>
              <div className="flex justify-between items-center">
                <Link
                  href={tab.path}
                  onClick={closeMobileMenu}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
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
                    onClick={() => toggleMobileDropdown(tab.name)}
                    className="px-4 py-3 text-gray-600 hover:bg-orange-100 transition-colors"
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
                      className={`block px-8 py-2 text-sm text-gray-700 hover:bg-orange-100 transition-colors ${
                        pathname === item.path
                          ? "bg-red-50 text-red-600 font-medium border-l-4 border-red-500"
                          : ""
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
      )}
    </nav>
  );
}