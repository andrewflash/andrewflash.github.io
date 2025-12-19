import React from 'react';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Research from './sections/Research';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
