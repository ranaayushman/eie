"use client";

import {
    Name1,
    Name10,
    Name2,
    Name3,
    Name4,
    Name5,
    Name6,
    Name7,
    Name8,
    Name9,
} from "@/components/features/cards";
import { FeatureTitle } from "@/components/features/title";
import React, { Fragment } from "react";

const features = [
    {
        title: "Name 1",
        id: "1",
        position: "President",
        card: Name1,
    },
    {
        title: "Name 2",
        id: "2",
        position: "Vice President",
        card: Name2,
    },
    {
        title: "Name 3",
        id: "3",
        position: "Secretary",
        card: Name3,
    },
    {
        title: "Name 4",
        id: "4",
        position: "Treasurer",
        card: Name4,
    },
    {
        title: "Name 5",
        id: "5",
        position: "Technical Head",
        card: Name5,
    },
    {
        title: "Name 6",
        id: "6",
        position: "Public Relation Head",
        card: Name6,
    },
    {
        title: "Name 7",
        id: "7",
        position: "Media Head",
        card: Name7,
    },
    {
        title: "Name 8",
        id: "8",
        position: "Event Management Head",
        card: Name8,
    },
    {
        title: "Name 9",
        id: "9",
        position: "Creative Head",
        card: Name9,
    },
    {
        title: "Name 10",
        id: "10",
        position: "Women Head",
        card: Name10,
    },
];

const Socials = () => {
    return (
        <section id="Team" className="mx-auto max-w-6xl px-4 ">
            <div className="flex flex-col-reverse md:flex-row w-full gap-10 md:gap-20 items-start">
                <div className="w-full py-20 md:py-[50vh]">
                    <ul className="space-y-4 md:space-y-6">
                        {features.map((feature) => (
                            <li key={feature.id}>
                                <Fragment>
                                    <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                                    <p className="text-lg text-yellow-400 text-center">{feature.position}</p>
                                </Fragment>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full p-20 sticky top-0 flex h-96 md:h-screen items-center">
                    <div className="w-full md:w-2/3 relative aspect-square bg-gray-100 rounded-full">
                        {features.map((feature) => (
                            <feature.card id={feature.id} key={feature.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Socials;
