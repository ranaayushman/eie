import React from "react"
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
import { FeatureTitle } from "./title";


const features = [
    {
        title: "Ravi Kumar Singh",
        id: "1",
        postion: "President",
        card: Name1,
    },
    {
        title: "Yashmeen Nisha",
        id: "2",
        postion: "Vice President",
        card: Name2,
    },
    {
        title: "Anand Vardhan",
        id: "3",
        postion: "Secretary",
        card: Name3,
    },
    {
        title: "Vishal Roy",
        id: "4",
        postion: "Treasurer",
        card: Name4,
    },
    {
        title: "Anukriti Sharma",
        id: "5",
        postion: "Technical Head",
        card: Name5,
    },
    {
        title: "Aritra Chakraborty",
        id: "6",
        postion: "Public Realtion Head",
        card: Name6,
    },
    {
        title: "Ankur Kumar",
        id: "7",
        postion: "Media Head",
        card: Name7,
    },
    {
        title: "Dharmveer Kumar",
        id: "8",
        position: "Event Management Head",
        card: Name8,
    },
    {
        title: "Anisha Dhara",
        id: "9",
        postion: "Creative Head",
        card: Name9,
    },
    {
        title: "Ruchika Kumari",
        id: "10",
        postion: "Women Head",
        card: Name10,
    },
];

export const TitleText = () => {
    return (
        <div className="w-full py-20 md:py-[50vh]">
            <ul className="space-y-4 md:space-y-6">
                {features.map((feature) => (
                    <li key={feature.id}>
                        <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                        <p>{feature.position}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export const Para = () => {
    return (
        <div className="w-full md:w-2/3 relative aspect-square bg-gray-100 rounded-full">
            {features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
            ))}
        </div>
    )
};