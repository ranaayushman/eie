"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavbarTwo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const options = [
    {
      name: "Photo Gallery",
      links: [{ label: "CodeX", href: "/codeX" }],
    },
    {
      name: "About",
      links: [
        { label: "ISA", href: "/about-isa" },
        { label: "AEIE", href: "/about-aeie" },
        { label: "ISOI", href: "/about-isoi" },
      ],
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    moveNub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Gallery = () => {
  return (
    <div>
      <div className="">
        <h3 className="mb-2 text-xl text-neutral-400 transition-colors hover:text-neutral-50 font-bold">
          <Link href="/codeX" className="mb-1 block">
            Codex
          </Link>
        </h3>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x font-bold divide-neutral-700">
      <Link
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <span className="text-xl">ISA</span>
      </Link>
      <Link
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <span className="text-xl">AEIE</span>
      </Link>
      <Link
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <span className="text-xl">ISOI</span>
      </Link>
    </div>
  );
};

export default NavbarTwo;
