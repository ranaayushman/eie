"use client";
import React, { useState } from "react";

const NavbarTwo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="relative p-4">
      <div className=" items-center justify-start">
        <div className="items-center justify-start">
          <h1 className="text-white text-xl font-bold pl-12">Dept of EIE</h1>
        </div>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div>
        <ul
          className={`mt-4 md:flex md:justify-around md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          {[
            "About",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5",
            "Option 6",
          ].map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="text-gray-300 hover:text-gray-800 py-2 px-4 hover:bg-[#c7d2fe] focus:outline-none flex items-center"
              >
                {item}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <ul className="absolute left-0 mt-2 bg-blue-800 text-white rounded shadow-lg w-full z-50 md:w-64">
                  <li>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block py-2 px-4 hover:bg-blue-700"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block py-2 px-4 hover:bg-blue-700"
                    >
                      Link 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarTwo;
