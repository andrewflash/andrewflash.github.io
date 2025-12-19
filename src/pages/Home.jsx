import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Research from '../sections/Research';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

const Home = () => {
    return (
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
    );
};

export default Home;
