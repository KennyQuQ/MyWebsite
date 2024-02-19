import React, { useRef, useState, useEffect } from 'react';
import i18n from './i18n.js';
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
import BackToTop from './Back2Top';

import experience_image_1 from './img/experience/experience1.jpg';
import experience_image_2 from './img/experience/experience2.jpg';
import experience_image_3 from './img/experience/experience3.jpg';
import experience_image_4 from './img/experience/experience4.jpg';
import experience_image_5 from './img/experience/experience5.jpg';
import experience_image_6 from './img/experience/experience6.jpg';
import experience_image_7 from './img/experience/experience7.jpg';
import experience_image_8 from './img/experience/experience8.jpg';
import experience_image_9 from './img/experience/experience9.jpg';
import experience_image_10 from './img/experience/experience10.jpg';
import experience_image_11 from './img/experience/experience11.jpg';
import experience_image_12 from './img/experience/experience12.jpg';
import experience_image_13 from './img/experience/experience13.jpg';
import experience_image_14 from './img/experience/experience14.jpg';
import project1img from './img/project/project1img.png';
import project1vid from './img/project/project1vid.mp4';

const imagesToPreload = [
  experience_image_1,
  experience_image_2,
  experience_image_3,
  experience_image_4,
  experience_image_5,
  experience_image_6,
  experience_image_7,
  experience_image_8,
  experience_image_9,
  experience_image_10,
  experience_image_11,
  experience_image_12,
  experience_image_13,
  experience_image_14,
  project1img,
  project1vid,
];

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const animation1Ref = useRef(null);
  const animation2Ref = useRef(null);
  const pjRef = useRef(null);

  const refs = [homeRef, experienceRef, skillRef, projectsRef, contactRef];
  const [intersectionResults, setIntersectionResults] = useState(0);
  const [animation1bottom, setAnimation1bottom] = useState(0);
  const [animation2bottom, setAnimation2bottom] = useState(0);
  const [experienceisin, setexperienceisin] = useState(false);
  const [animation2isin, setAnimation2isin] = useState(false);
  const [animation2over, setAnimation2over] = useState(false);

  const handleScroll = () => {
    setAnimation2isin(animation2Ref.current.getBoundingClientRect().top < 150 && animation2Ref.current.getBoundingClientRect().bottom > -150);
    setAnimation2isin(animation2Ref.current.getBoundingClientRect().top < 150 && animation2Ref.current.getBoundingClientRect().bottom > -150);
    setexperienceisin(pjRef.current.getBoundingClientRect().top < -1250 && animation2Ref.current.getBoundingClientRect().top > 150);
    setAnimation2over(animation2Ref.current.getBoundingClientRect().top < 150);
    setAnimation1bottom(animation1Ref.current.getBoundingClientRect().bottom);
    setAnimation2bottom(animation2Ref.current.getBoundingClientRect().bottom);

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
            <Navbar intersectionResults={intersectionResults} isin={experienceisin} />
              <Header />
            </header>
            <div ref={pjRef}>
              <Project />
            </div>
            <div ref={animation1Ref}>
              <Animation1 bottom={animation1bottom} />
            </div>
          </div>
        </Element>
        <Element name="experience">
          <div ref={experienceRef}>
            <MyExperiences over={animation2over} bottom={animation1bottom} />
          </div>
        </Element>
        <Element name="skill">
          <div ref={skillRef}>
            <div ref={animation2Ref}>
              <Animation2 isin={animation2isin} bottom={animation2bottom} />
            </div>
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
