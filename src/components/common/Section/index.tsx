import { SectionHeader } from "./Header";

const bgVariantMap = {
  primary: "#ffffff",
  secondary: "#f9fbfc",
};

export const Section = ({
  bgVariant,
  children,
  headerText,
  _id,
}: {
  bgVariant: string;
  children: React.ReactNode;
  headerText: string;
  _id: string;
}) => (
  <div
    id={_id}
    className={`flex flex-col w-full bg-[${
      bgVariantMap[bgVariant as keyof typeof bgVariantMap]
    }] md:px-6`}
  >
    <SectionHeader text={headerText} />
    {children}
  </div>
);
