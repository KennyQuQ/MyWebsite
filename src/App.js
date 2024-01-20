import React, { useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MyExperiences from './MyExperiences';
import Contact from './Contact';
import Videos from './Videos';
import SmallPrograms from './SmallPrograms';
import Footer from './Footer';
import Project from './Project';
import './App.css';
import './index.css';
import Preloader from './Preloader'; // Adjust the path to the Preloader component
import Animation1 from './Animation1';
import Animation2 from './Animation2';
import { Element } from 'react-scroll';
import CustomCursor from './CustomCursor';
import Skill from './Skill';

import experience1 from './img/experience/experience1.jpg';
import experience2 from './img/experience/experience2.jpg';
import experience3 from './img/experience/experience3.jpg';
import BackToTop from './Back2Top';

const imagesToPreload = [
  experience1,
  experience2,
  experience3,
];

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = [homeRef, experienceRef, skillRef, projectsRef, contactRef];
  const [intersectionResults, setIntersectionResults] = useState(0);

  const handleScroll = () => {
    const results = refs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        return rect.top < 100;
      }
      return false; // Default to false if ref.current is null
    });

    const trueValue = results.filter(value => value === true).length;
    setIntersectionResults(trueValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [refs]);

  const containerStyle = {
    scrollbarWidth: 'thin',
    scrollbarColor: 'transparent transparent',
  };

  const handleLoad = () => {
    console.log('All images are preloaded. Do something after loading.');
  };
  
  
  return (
    <div style={containerStyle}>
      <Preloader images={imagesToPreload} onLoad={handleLoad}>
        <Element name="home">
          <div ref={homeRef}>
            <header className="h-screen z-50">
            <Navbar
              intersectionResults={intersectionResults}  // Make sure to pass it here
            />
              <Header />
            </header>
          <Project />
          <Animation1 />
          </div>
        </Element>
        <Element name="experience">
          <div ref={experienceRef}>
            <MyExperiences />
          </div>
        </Element>
        <Element name="skill">
          <div ref={skillRef}>
            <Animation2 />
            <Skill />
          </div>
        </Element>
        <Element name="projects">
          <div ref={projectsRef}>
            <Videos />
            <SmallPrograms />
          </div>
        </Element>
        <Element name="contact">
          <div ref={contactRef}>
            <Contact />
            <BackToTop />
            <Footer />
          </div>
        </Element>
        <CustomCursor />
      </Preloader>
    </div>
  );
}

export default App;
