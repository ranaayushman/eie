import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useFeatureStore } from "../store";

type Props = {
    children: React.ReactNode;
    id: string;
};

export const FeatureTitle = ({ children, id }: Props) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const IsInview = useInView(ref, { margin: "-50% 0px -50% 0px" });
    const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
    const inViewFeature = useFeatureStore((state) => state.inViewFeature); // Retrieve the current in-view feature

    useEffect(() => {
        if (IsInview) {
            setInViewFeature(id);
        } else if (inViewFeature === id) {
            setInViewFeature(null);
        }
    }, [IsInview, id, inViewFeature, setInViewFeature]);

    return (
        <p
            ref={ref}
            className={classNames(
                "text-5xl transition-colors pt-16 text-center",
                IsInview ? "text-gray-100" : "text-gray-700"
            )}
        >
            {children}
        </p>
    );
};
