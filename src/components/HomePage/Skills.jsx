import React from "react";
import Image from "next/image";
import { Section } from "../common";

export const Skills = () => {
  const images = importAll(
    require.context("../../images/skills/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <Section _id="skills" headerText="I'm good at" bgVariant="secondary">
      <div className="flex justify-center flex-wrap md:flex-row px-14 md:py-12">
        {Object.keys(images).map((key, index) => {
          return (
            <div className="p-8" key={key}>
              <Image
                key={index}
                src={images[key].default.src}
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

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
