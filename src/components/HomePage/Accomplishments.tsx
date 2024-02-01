import React, { FC } from "react";
import Image from "next/image";
import { accomplishments } from "../../data/accomplishments";
import Tooltip from "../../hooks/Tooltip";
import { Section } from "../common";

export const Accomplishments: FC = () => {
  return (
    <Section
      _id="accomplishments"
      headerText="My Accomplishments till now"
      bgVariant="secondary"
    >
      <div className="flex flex-col items-center space-y-24  px-12">
        {accomplishments.map((accomplishment, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col border-0 rounded-md shadow-lg bg-blue-100/30 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:justify-evenly md:max-w-[48.2rem]`}
            >
              <Tooltip tooltipText="Click to view Certificate">
                <a
                  href={accomplishment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex basis-1/5 overflow-hidden duration-700 rounded-lg shadow-xl md:hover:shadow-2xl md:saturate-0 md:hover:saturate-150">
                    <Image
                      src={accomplishment.image}
                      alt={accomplishment.name}
                      width={600}
                      height={400}
                    />
                  </div>
                </a>
              </Tooltip>
              <div className="flex flex-col basis-4/5 items-start p-3 md:items-end my-2 md:p-6">
                <p className="text-xl font-medium bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                  {accomplishment.designation}
                </p>
                <p className="text-[2rem] md:text-[3rem] font-medium bg-gradient-to-r from-blue-800 to-custom-cyan bg-clip-text text-transparent">
                  {accomplishment.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
