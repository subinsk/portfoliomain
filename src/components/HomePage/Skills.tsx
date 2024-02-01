import React, { FC } from "react";
import Image from "next/image";
import { Section } from "../common";

interface Images {
  [key: string]: {
    default: {
      src: string;
    };
  };
}

export const Skills: FC = () => {
  const images = importAll(
    require.context("../../images/skills/", false, /\.(png|jpe?g|svg)$/)
  ) as Images;
  return (
    <Section _id="skills" headerText="I'm good at" bgVariant="secondary">
      <div className="flex justify-center flex-wrap md:flex-row px-14 md:py-12">
        {Object.keys(images).map((key, index) => {
          return (
            <div className="p-8" key={key}>
              <Image
                key={index}
                src={images[key as string].default.src}
                width={100}
                height={100}
                alt="Skill"
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

function importAll(r: __WebpackModuleApi.RequireContext) {
  let images: any = {};
  r.keys().map((item: string, index: any) => {
    images[item.replace("./", "") as string] = r(item);
  });
  return images;
}
