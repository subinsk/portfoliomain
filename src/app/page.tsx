"use client";
import {
  About,
  Accomplishments,
  Experience,
  Footer,
  Projects,
  Skills,
  Sociallinks,
} from "@/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSticky, setIsSticky] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    setOffset(window.pageYOffset);
    var bottom = document.getElementById("footer");
    if (bottom && offset < bottom.offsetTop - 1000) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [offset]);

  return (
    <main className="w-full flex flex-col gap-10">
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Accomplishments />
      <Sociallinks isSticky={isSticky} />
      <Footer />
    </main>
  );
}
