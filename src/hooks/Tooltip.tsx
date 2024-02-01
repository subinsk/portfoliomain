"use client";
import React, { FC, Ref, useRef } from "react";

export default function Tooltip({
  children,
  tooltipText,
}: {
  children: React.ReactNode;
  tooltipText: string;
}): JSX.Element {
  const tipRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    if (tipRef.current) {
      tipRef.current.style.opacity = "1";
      tipRef.current.style.marginLeft = "20px";
    }
  }
  function handleMouseLeave() {
    if (tipRef.current) {
      tipRef.current.style.opacity = "0";
      tipRef.current.style.marginLeft = "10px";
    }
  }

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="hidden md:block absolute bg-gradient-to-r from-purple-700 to-blue-700/80 text-white px-2 py-2 m-2 rounded items-center transition-all duration-150"
        style={{ left: "100%", opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="bg-purple-700 h-3 w-3 absolute"
          style={{ left: "-6px", transform: "rotate(45deg)" }}
        />
        <span className="text-xs">{tooltipText}</span>
      </div>
      {children}
    </div>
  );
}
