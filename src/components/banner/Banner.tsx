import React from "react";
import Main from "./Main";
import SVGWrapper from "../common/wrapper/SVGWrapper";

const Banner = () => {
  return (
    <div className="flex flex-col gap-2 w-full px-3 pt-3 pb-2">
      <Main />
      <p className="flex items-center gap-2 text-sm text-primary">
        <SVGWrapper alt="Notification" src="/assets/bell.svg" className="w-4 h-4" />
        <span className="line-clamp-1">¡FELICIDADES artxxxxipa! GANADOR DESTACADO</span>
      </p>
    </div>
  );
};

export default Banner;