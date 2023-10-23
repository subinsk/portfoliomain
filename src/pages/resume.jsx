import React, { useEffect, useRef } from "react";
import PDFViewer from "../components/common/PDFViewer";
import ResumeFile from "../assets/files/Subin_Resume.pdf";
import { useRouter } from "next/router";
import { ScatterBoxLoader } from "react-awesome-loaders";

export default function Resume() {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      if (router.query.type === "extUrl")
        window.location.assign(
          "https://www.dropbox.com/scl/fi/mhhm4jmsvwatqx9pr2voh/SubinResume.pdf?rlkey=v5qd0ackcqhoyfsfuhv4c6s7z&dl=0"
        );
    }
  }, [router.query]);

  if (router.query.type === "extUrl")
    return (
      <div className="flex w-full h-[100vh] justify-center items-center">
        <div className="flex flex-col">
          <ScatterBoxLoader primaryColor={"#6366F1"} />
          <p className="text-2xl font-medium mt-24 text-[#6366F1]">
            Loading Resume...
          </p>
        </div>
      </div>
    );
  if (router.query.type === "file") return <PDFViewer file={ResumeFile} />;
}
