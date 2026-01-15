'use client';


import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function Home() {

  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />

    </main>
  );
}
