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

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll Event');
      // Implement your logic here
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    console.log("Intersection Observer Effect Triggered");
  
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.getAttribute('name'));
          alert(entry.target.getAttribute('name'));
        }
      });
    };
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
  
    return () => {
      observer.disconnect();
    };
  }, [homeRef]);  
  

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
        <Element name="home" ref={homeRef}>
          <header className="h-screen z-50">
          <Navbar
            elements={{
              home: homeRef,
              experience: experienceRef,
              contact: skillRef,
              projects: projectsRef,
              contact: contactRef,
            }}
          />
            <Header />
          </header>
          <Project />
          <Animation1 />
        </Element>
        <Element name="experience" ref={experienceRef}>
          <MyExperiences />
        </Element>
        <Element name="skill" ref={skillRef}>
          <Animation2 />
          <Skill />
        </Element>
        <Element name="projects" ref={projectsRef}>
          <Videos />
          <SmallPrograms />
        </Element>
        <Element name="contact" ref={contactRef}>
          <Contact />
        </Element>
        <BackToTop />
        <Footer />
        <CustomCursor />
      </Preloader>
    </div>
  );
}

export default App;
