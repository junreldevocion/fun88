
import { classNames } from "@/utils/className";
import React from "react";

interface MainProps {
  imageUrl: string;
  isActive: boolean;
  title: string;
  description: string;
  text: string;
}

const Main: React.FC<MainProps> = ({ imageUrl, isActive, title, description, text }) => {

  return (
    <div
      className={classNames(
        "w-full h-[180px] rounded-lg",
        "bg-[url(/images/banner-bg.png)] bg-no-repeat bg-cover absolute",
        "duration-700 ease-in-out",
        !isActive ? `opacity-0` : 'opacity-1'
      )}
    >
      <div
        className={classNames(
          "flex flex-col justify-between w-[150px] h-full",
          "px-6 py-7"
        )}
      >
        <b className="text-sm text-white">{title}</b>
        <b className="text-sm text-secondary">{description}</b>
        <b className="text-sm text-white">{text}</b>
      </div>
    </div>
  );
};

export default Main;