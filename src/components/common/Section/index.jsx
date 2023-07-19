import { SectionHeader } from "./Header";

const bgVariantMap = {
  primary: "#ffffff",
  secondary: "#f9fbfc",
};

export const Section = ({ bgVariant, children, headerText, _id }) => (
  <div
    id={_id}
    className={`flex flex-col w-full bg-[${bgVariantMap[bgVariant]}] md:px-6`}
  >
    <SectionHeader text={headerText} />
    {children}
  </div>
);
