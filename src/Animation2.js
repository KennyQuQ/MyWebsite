// AnimationPage.js
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Animation.css'; // Import the styles for AnimationPage
import EmojiRain from './EmojiRain';

const AnimationPage = ({ isin, bottom }) => {
  const [scrollY, setScrollY] = useState(0);
  const [offset, setoffset] = useState(1500);
  const [height, setheight] = useState(200);
  const [fontSize, setfontSize] = useState(5);
  const [offset1, setOffset1] = useState({ x: 2000, y: 1200 });
  const [offset2, setOffset2] = useState({ x: 0, y: 2200 });
  const componentRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const isPhone = window.innerWidth <= 512; // Adjust the breakpoint as needed for tablet
    const isSmallTablet = window.innerWidth > 512 && window.innerWidth <= 768; // Adjust the breakpoint as needed for tablet
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; // Adjust the breakpoint as needed for tablet
    if (isPhone) {
      setfontSize(3);
      setheight(150);
      setoffset(3000);
      setOffset1({ x: 3000, y: 1500 });
      setOffset2({ x: 500, y: 2600 });
    } else if (isSmallTablet) {
      setfontSize(4.5);
      setheight(175);
      setoffset(2800);
      setOffset1({ x: 2000, y: 1500 });
      setOffset2({ x: 0, y: 2400 });
    } else if (isTablet) {
      setfontSize(4.5);
      setheight(175);
      setoffset(2800);
      setOffset1({ x: 3200, y: 1800 });
      setOffset2({ x: 500, y: 2800 });
    } else {
      setfontSize(5);
      setheight(200);
      setoffset(1600);
      setOffset1({ x: 2000, y: 1200 });
      setOffset2({ x: 0, y: 2200 });
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const parallaxOffset = (bottom - offset) * -0.3; // Adjust the parallax effect by changing the multiplier

  const overlayStyle1 = {
    top: '30%', // Adjust the top position as needed
    transform: `translateY(${parallaxOffset}px)`, // Adding translateZ for a 3D effect
  };

  const overlayStyle2 = {
    transform: `translateY(${parallaxOffset}px)`, // Adding translateZ for a 3D effect
  };

  const opacity = Math.max(0, bottom / 1000);


  return (
    <div className={`animation-page`} ref={componentRef}>
    <div style={{ opacity }}>
        {isin && <EmojiRain />}
    </div>
     <div className={`overlay xl:left-[50%] md:left-[35%] max-md:left-[15%] xl:text-[16rem] md:text-[12rem] max-md:text-[8rem] ${isin ? 'overlay-update' : ''}`} style={overlayStyle1}>
      {t('ani2_still')}
      </div>
      <div className={`overlay xl:top-[55%] max-xl:top-[40%] xl:left-[50%] md:left-[35%] max-md:left-[15%] xl:text-[16rem] md:text-[12rem] max-md:text-[8rem] ${isin ? 'overlay-update' : ''}`} style={overlayStyle2}>
      {t('ani2_here')}
      </div>
      <div className="sign sign1" style={{
        transform: `translate(${(-1) * (bottom * -2 + offset1.x)}px, ${(bottom * -1 + offset1.y)}px) rotate(-30deg)`,
        width: '3000px', // Adjust the width as needed
        height: `${height}px`, // Adjust the height as needed
        fontSize: `${fontSize}rem`, // Adjust the font size as needed
        background: 'linear-gradient(to right, #ff8c00, #ff2d55)', // Add a gradient background for a cooler look
        color: '#fff', // Set the text color to white
        padding: '40px', // Add padding for better spacing
        }}>
        {t('ani2_curious')}
        </div>

      <div className="sign sign2" style={{
        transform: `translate(${bottom * -2 + offset2.x}px, ${bottom * -1 + offset2.y}px) rotate(30deg)`,
        width: '3000px', // Adjust the width as needed
        height: `${height}px`, // Adjust the height as needed
        fontSize: `${fontSize}rem`, // Adjust the font size as needed
        background: 'linear-gradient(to right, #2e3192, #1b1464)', // Add a gradient background for a cooler look
        color: '#fff', // Set the text color to white
        padding: '40px', // Add padding for better spacing
        textAlign: 'left', // Align the text to the right
      }}>
        {t('ani2_seework')}
      </div>

      {/* Your animation page content goes here */}
    </div>
  );
};

export default AnimationPage;
