"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const tabs = ["Home", "About", "Team"] as const;

const ChipTabs = () => {
    const [selected, setSelected] = useState<typeof tabs[number]>(tabs[0]);

    return (
        <div className="px-4 sm:px-10 z-[100] backdrop-blur-md h-24 inset-x-0 top-0 w-full transition-all flex items-center justify-between flex-wrap gap-2 shadow-lg">
            <div>
                <Image
                    src="/img/file.png"
                    width={100}
                    height={20}
                    alt=""
                />
            </div>
            <div className="flex">
                {tabs.map((tab) => (
                    <Chip
                        text={tab}
                        selected={selected === tab}
                        setSelected={setSelected}
                        key={tab}
                    />
                ))}
            </div>
        </div>
    );
};

interface ChipProps {
    text: typeof tabs[number];
    selected: boolean;
    setSelected: (tab: typeof tabs[number]) => void;
}

const Chip: React.FC<ChipProps> = ({ text, selected, setSelected }) => {
    return (
        <button
            onClick={() => setSelected(text)}
            className={`${selected
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
