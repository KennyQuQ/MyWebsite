// Navbar.js
import './index.css';
import i18n from './i18n.js';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ intersectionResults, isin }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeoutRef = useRef(null);
  
  useEffect(() => {
    // Log the current language
    console.log("Current language:", i18n.language);

    // Try accessing a translation key and log it
    console.log("Translation for 'home':", t('home'));

    // Log all keys in the default namespace (if you want to check what's loaded)
    const keys = i18n.store.data[i18n.language]?.translations ? Object.keys(i18n.store.data[i18n.language].translations) : [];
    console.log("Loaded keys:", keys);
  }, [i18n, t]);
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const list = document.querySelectorAll('.list');

  window.onload = function () {
    document.querySelector('.home').classList.add('active');
  };
  
  list.forEach((item, index) => item.addEventListener('click', () => activateLink(index)));
  
  function activateLink(index) {
    if (index >= 0 && index < list.length) {
      list.forEach((item) => item.classList.remove('active'));
      list[index].classList.add('active');
    } else {
      console.error(`Index ${index} is out of bounds for the list array.`);
    }
  }

  activateLink(intersectionResults - 1);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);

      clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolled(false);
        if (window.scrollY < 800) {
          setIsScrolled(true);
        }
      }, 200); // Adjust the timeout duration as needed
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);


    return () => {
      setIsScrolled(false);
      setIsHovered(false);
      clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const navbarStyle = {
    opacity: (isScrolled || isHovered) ? '0.8' : '0.1',
    transition: 'opacity 1s ease-in-out',
  };

  useEffect(() => {
    
window.addEventListener('scroll', function () {
  
  console.log(intersectionResults);
});


    // reveal
    window.addEventListener('scroll', reveal);

    function reveal() {
      var reveals = document.querySelectorAll('.reveal');
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('displayed');
        } else {
          reveals[i].classList.remove('displayed');
        }
      }
    }
  }, []);

  return (
    <div className='py-[32px]'>
      <nav className="w-full h-[0px] flex justify-center items-center fixed fade-down z-50" style={navbarStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="nav z-50">
          <ul className="w-full flex justify-center items-center">
            <li className="list home">
              <ScrollLink to="home" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                <span className="text">{t('nav_home')}</span>
              </ScrollLink>
            </li>
            <li className="list">
              <ScrollLink to="experience" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                <span className="text">{t('nav_experience')}</span>
              </ScrollLink>
            </li>
            <li className="list">
              <ScrollLink to="skill" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="thumbs-up-outline"></ion-icon></span>
                <span className="text">{t('nav_about')}</span>
              </ScrollLink>
            </li>
            <li className="list">
              <ScrollLink to="projects" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="camera-outline"></ion-icon></span>
                <span className="text">{t('nav_works')}</span>
              </ScrollLink>
            </li>
            <li className="list">
              <ScrollLink to="contact" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                <span className="text">{t('nav_contact')}</span>
              </ScrollLink>
            </li>
            <div className="indicator" style={{ backgroundColor: isin ? '#ffaf21' : '#29fd53' }}></div>
          </ul>
          <div className='left-[90%] absolute w-1/2 h-full flex items-center justify-start'>
            <div className="flex space-x-[0.8rem]">
              <button
                onClick={() => changeLanguage('en')}
                className="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                title="English"
              >
                🇺🇸
              </button>

              <button
                onClick={() => changeLanguage('zh-CN')}
                className="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                title="Simplified Chinese"
              >
                🇨🇳
              </button>

              <button
                onClick={() => changeLanguage('zh-TW')}
                className="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                title="Traditional Chinese"
              >
                🇹🇼
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      
      {/* <div className="absolute w-full h-0 top-[50%] flex justify-between">
              <button className="cursor-pointer w-20 -mt-[22px] p-8 text-white font-bold text-2xl duration-300 rounded-xl flex justify-center items-center">
                <a>&#10094;</a>
              </button>

              <button className="z-20 cursor-pointer w-20 -mt-[22px] p-8 text-white font-bold text-2xl duration-300 rounded-xl flex justify-center items-center">
                <a>&#10095;</a>
              </button>
            </div> */}
          </div>
  );
};

export default Navbar;
