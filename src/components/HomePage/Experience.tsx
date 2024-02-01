import { FC } from "react";
import { experiences } from "../../data/experience";
import { Section } from "../common";

export const Experience: FC = () => {
  return (
    <Section headerText="I've worked at" _id="experience" bgVariant="primary">
      <div className="flex flex-col gap-10 md:gap-20 px-6 md:px-24">
        {experiences.map((experience, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-2 md:gap-6"
            >
              <div className="md:basis-1/6">
                <p className="text-sm text-gray-500 font-semibold">
                  {experience.from} - {experience.to}
                </p>
              </div>
              <div className="flex flex-col gap-5 md:basis-5/6">
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">
                    {experience.title}
                  </p>
                  <p className="font-semibold text-gray-500">
                    {experience.company}
                  </p>
                </div>
                <p className="text-sm w-11/12">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology, index) => {
                    return (
                      <p
                        key={index}
                        className="px-3 py-2 text-xs rounded-full font-semibold bg-purple-100 text-purple-700"
                      >
                        {technology}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
