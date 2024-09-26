"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  { name: "Events", href: "#event" },
  { name: "Team", href: "#team" },
  { name: "More", href: "#more" },
] as const;

const ChipTabs = () => {
  const [selected, setSelected] = useState<(typeof tabs)[number]["name"]>(
    tabs[0].name
  );

  return (
    <div className="px-4 sm:px-10 z-[100] backdrop-blur-md h-24 inset-x-0 top-0 w-full transition-all flex items-center justify-between flex-wrap gap-2 shadow-lg">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/img/file.png" width={100} height={20} alt="" />
          <p className="hidden sm:inline-block text-white">EIE Society</p>
        </div>
      </Link>
      <div className="flex">
        {tabs.map((tab) => (
          <Link href={tab.href} key={tab.name}>
            <Chip
              text={tab.name}
              selected={selected === tab.name}
              setSelected={setSelected}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

interface ChipProps {
  text: (typeof tabs)[number]["name"];
  selected: boolean;
  setSelected: (tab: (typeof tabs)[number]["name"]) => void;
}

const Chip: React.FC<ChipProps> = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
