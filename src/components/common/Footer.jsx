import React from "react";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="z-50 bg-gradient-to-r from-custom-purple-400 to-custom-cyan text-white flex justify-center items-center h-24 w-full"
    >
      Copyright &copy; {date}
      <br />
    </div>
  );
};
