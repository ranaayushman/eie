"use client";
import React, { useState } from "react";

const NavbarTwo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const options = [
    {
      name: "Option 1",
      links: [
        { label: "Link 1", href: "/option-1/link-1" },
        { label: "Link 2", href: "/option-1/link-2" },
      ],
    },
    {
      name: "Option 2",
      links: [
        { label: "Link 1", href: "/option-2/link-1" },
        { label: "Link 2", href: "/option-2/link-2" },
      ],
    },
    {
      name: "Option 3",
      links: [
        { label: "Link 1", href: "/option-3/link-1" },
        { label: "Link 2", href: "/option-3/link-2" },
      ],
    },
    {
      name: "About",
      links: [
        { label: "ISA", href: "/option-4/link-1" },
        { label: "AEIE ", href: "/option-4/link-2" },
      ],
    },
    // {
    //   name: "Option 5",
    //   links: [
    //     { label: "Link 1", href: "/option-5/link-1" },
    //     { label: "Link 2", href: "/option-5/link-2" },
    //   ],
    // },
    // {
    //   name: "Option 6",
    //   links: [
    //     { label: "Link 1", href: "/option-6/link-1" },
    //     { label: "Link 2", href: "/option-6/link-2" },
    //   ],
    // },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="relative p-4">
      <div className="flex items-center justify-end">
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
          {options.map((option, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="text-gray-300 hover:text-gray-800 py-2 px-4 hover:bg-[#c7d2fe] focus:outline-none flex items-center"
              >
                {option.name}
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
                  {option.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="inline-block py-2 px-4 hover:bg-blue-700"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
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
