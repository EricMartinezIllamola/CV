import React from 'react';
import Home from './Home';
import Expand_Home from './Expand_Home';
import About from './About';
import Expand_HardSkills from './Expand_HardSkills';
import HardSkills from './HardSkills';
import Projects from './Projects';
import SoftSkills from './SoftSkills';
import Contact from './Contact';

function Main() {
    return (
        <React.StrictMode>
            <main>
                <Home />
                <Expand_Home />
                <About />
                <Expand_HardSkills />
                <HardSkills />
                <Projects />
                <SoftSkills />
                <Contact />
            </main>
        </React.StrictMode>
    );
}

export default Main;