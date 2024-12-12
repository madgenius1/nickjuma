'use client';


import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
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
      <Skills />
      <Contact />

    </main>
  );
}
