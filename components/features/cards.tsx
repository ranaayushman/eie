import classNames from "classnames";
import { useFeatureStore } from "../store";
import React from "react";
import Image from "next/image";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={classNames(
        "h-full w-full absolute inset-0 rounded-full bg-gradient-to-br transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Name1 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/President.jpg"
      />
    </FeatureCard>
  );
};

export const Name2 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/ViceP.jpg"
      />
    </FeatureCard>
  );
};

export const Name3 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/Secretary2.jpg"
      />
    </FeatureCard>
  );
};

export const Name4 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/Treasurer11.jpg"
      />
    </FeatureCard>
  );
};

export const Name5 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/TechnicalHead1.jpg"
      />
    </FeatureCard>
  );
};

export const Name6 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/img/img15.png"
      />
    </FeatureCard>
  );
};
export const Name7 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/MediaHead1.jpg"
      />
    </FeatureCard>
  );
};

export const Name8 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/EventManagementHead1.jpg"
      />
    </FeatureCard>
  );
};

export const Name9 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/CreativeHead11.jpg"
      />
    </FeatureCard>
  );
};

export const Name10 = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <Image
        alt=""
        fill
        className={classNames(
          "absolute rounded-full shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="/members/WomensHead.jpg"
      />
    </FeatureCard>
  );
};
