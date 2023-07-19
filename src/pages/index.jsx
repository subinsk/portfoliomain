import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

import {
  Navbar,
  About,
  Accomplishments,
  Experience,
  Footer,
  Projects,
  Skills,
  Sociallinks,
} from "../components";

export default function Home() {
  const [isSticky, setIsSticky] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(window.pageYOffset);
    var bottom = document.getElementById("footer");
    if (offset < bottom.offsetTop - 1000) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [offset]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.googletagmanager.com/gtag/js?id=G-JGLK2H7L22";
    script.async = true;

    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Subin S K Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JGLK2H7L22');
                  `,
          }}
        ></script>
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-JGLK2H7L22"
            strategy="beforeInteractive"
          />
        </>
      </Head>
      <Navbar />
      <div className="w-full flex flex-col gap-10">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Accomplishments />
        <Sociallinks isSticky={isSticky} />
        <Footer />
      </div>
    </div>
  );
}
