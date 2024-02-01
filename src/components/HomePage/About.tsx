"use client";

import React, { FC, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export const About: FC = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      "https://assets9.lottiefiles.com/packages/lf20_bp5lntrf.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      id="about"
      className="bg-cover font-libre bg-[#f9fbfc] h-[35rem] w-full flex flex-col md:px-20 px-10 md:pt-16 pt-28 md:flex-row"
    >
      <div className="flex flex-col">
        <span className="font-medium text-purple-700 text-lg md:pt-20">
          Hey There! I am
        </span>
        <span className="bg-gradient-to-r from-purple-600 to-custom-cyan font-extrabold bg-clip-text text-transparent text-[4rem] md:text-[8rem]">
          Subin
        </span>
        <span className="bg-gradient-to-r from-purple-900 to-custom-cyan bg-clip-text text-transparent font-semibold text-medium md:text-medium">
          DEVELOPER &middot; COMMUNITY CONTRIBUTOR
        </span>
      </div>
      <div className="md:mx-auto">
        <Player
          src="https://assets9.lottiefiles.com/packages/lf20_bp5lntrf.json"
          autoplay
          loop
          speed={1}
        />
      </div>
    </div>
  );
};
