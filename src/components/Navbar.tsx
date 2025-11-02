"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  name: string;
  path: string;
  dropdown?: Tab[];
}


interface NavbarI{
  tabs:Tab[]
}



export default function Navbar({tabs}:NavbarI) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nestedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        setOpenDropdown(null);
        setNestedDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (window.innerWidth >= 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpenDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
        setNestedDropdown(null);
      }, 200);
    }
  };

  const handleNestedMouseEnter = (name: string) => {
    if (window.innerWidth >= 768) {
      if (nestedTimeoutRef.current) clearTimeout(nestedTimeoutRef.current);
      setNestedDropdown(name);
    }
  };

  const handleNestedMouseLeave = () => {
    if (window.innerWidth >= 768) {
      nestedTimeoutRef.current = setTimeout(() => {
        setNestedDropdown(null);
      }, 200);
    }
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Recursive Dropdown
  const Dropdown = ({ items, isNested = false }: { items: Tab[]; isNested?: boolean }) => (
    <ul
      className={`absolute bg-white border border-gray-200 rounded-lg shadow-xl min-w-[190px] z-50 dropdown-container backdrop-blur-sm transition-all duration-200 ${
        isNested ? "top-0 left-full ml-2" : "top-full left-0 mt-2"
      }`}
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (nestedTimeoutRef.current) clearTimeout(nestedTimeoutRef.current);
      }}
      onMouseLeave={isNested ? handleNestedMouseLeave : handleMouseLeave}
    >
      {items.map((item) => (
        <li
          key={item.name}
          className="relative group"
          onMouseEnter={() => item.dropdown && handleNestedMouseEnter(item.name)}
        >
          <Link
            href={item.path}
            target={item.path.startsWith("http") ? "_blank" : "_self"}
            className={`block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-red-600 transition-all duration-150 rounded-md ${
              pathname === item.path ? "bg-red-100 text-red-600" : ""
            }`}
            onClick={() => {
              setOpenDropdown(null);
              setNestedDropdown(null);
            }}
          >
            {item.name} {item.dropdown && <span className="ml-1">▸</span>}
          </Link>
          {item.dropdown && nestedDropdown === item.name && (
            <Dropdown items={item.dropdown} isNested={true} />
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-200 shadow-sm w-full relative z-50">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <span className="font-extrabold text-red-700 text-lg">Mahalasa</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-orange-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex flex-wrap justify-center gap-1 py-2">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="relative  whitespace-nowrap dropdown-container"
              onMouseEnter={() => tab.dropdown && handleMouseEnter(tab.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={tab.path}
                className={`px-4 py-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-wide transition-all duration-200 ${
                  pathname === tab.path ||
                  (tab.dropdown && tab.dropdown.some((i) => pathname === i.path))
                    ? "bg-red-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-100 hover:text-red-700"
                }`}
              >
                {tab.name} {tab.dropdown && <span className="ml-1 inline-block">▾</span>}
              </Link>

              {tab.dropdown && openDropdown === tab.name && <Dropdown items={tab.dropdown} />}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-orange-200 shadow-lg z-50 max-h-[80vh] overflow-y-auto rounded-b-lg">
          {tabs.map((tab) => (
            <div key={tab.name} className="border-b border-orange-100">
              <div className="flex justify-between items-center">
                <Link
                  href={tab.path}
                  onClick={() => {
                    if (!tab.dropdown) {
                      setIsMobileMenuOpen(false);
                      setOpenDropdown(null);
                    }
                  }}
                  className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                    pathname === tab.path ||
                    (tab.dropdown && tab.dropdown.some((i) => pathname === i.path))
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

              {/* Mobile nested dropdown */}
              {tab.dropdown && openDropdown === tab.name && (
                <div className="bg-gray-50 border-t">
                  {tab.dropdown.map((item) => (
                    <MobileDropdownItem
                      key={item.name}
                      item={item}
                      pathname={pathname}
                      onClose={() => setIsMobileMenuOpen(false)}
                    />
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

// Recursive Mobile Dropdown
const MobileDropdownItem = ({
  item,
  pathname,
  level = 1,
  onClose,
}: {
  item: Tab;
  pathname: string;
  level?: number;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-gray-100`} style={{ paddingLeft: `${level * 16}px` }}>
      <div className="flex justify-between items-center">
        <Link
          href={item.path}
          className={`flex-1 px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 transition-colors ${
            pathname === item.path ? "bg-red-50 text-red-600 font-medium" : ""
          }`}
          onClick={() => {
            if (!item.dropdown) onClose();
          }}
        >
          {item.name}
        </Link>
        {item.dropdown && (
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 text-gray-600 hover:bg-orange-100 rounded"
          >
            <svg
              className={`w-3 h-3 transform transition-transform ${open ? "rotate-180" : ""}`}
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
      {item.dropdown && open && (
        <div className="bg-gray-50">
          {item.dropdown.map((sub) => (
            <MobileDropdownItem
              key={sub.name}
              item={sub}
              pathname={pathname}
              level={level + 1}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
};
