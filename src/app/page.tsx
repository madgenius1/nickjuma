'use client';


import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {

  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />

    </main>
  );
}
