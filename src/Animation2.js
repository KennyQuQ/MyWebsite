// AnimationPage.js
import React, { useState, useEffect, useRef } from 'react';
import './Animation.css'; // Import the styles for AnimationPage
import EmojiRain from './EmojiRain';

const AnimationPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isin, setisin] = useState(false);
  const [bottom, setbottom] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setisin(rect.top < 150 && rect.bottom > -150);
        setbottom(rect.bottom);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset1 = (bottom - 1500) * -0.3; // Adjust the parallax effect by changing the multiplier
  const parallaxOffset2 = (bottom - 1500) * -0.3; // Adjust the parallax effect by changing the multiplier

  const overlayStyle1 = {
    top: '30%',
    transform: `translateY(${parallaxOffset1}px)`, // Adding translateZ for a 3D effect
  };

  const overlayStyle2 = {
    top: '50%',
    transform: `translateY(${parallaxOffset2}px)`, // Adding translateZ for a 3D effect
  };

  const opacity = Math.max(0, bottom / 1000);


  return (
    <div className={`animation-page`} ref={componentRef}>
    <div style={{ opacity }}>
        {isin && <EmojiRain />}
    </div>
     <div className={`overlay ${isin ? 'overlay-update' : ''}`} style={overlayStyle1}>
        還
      </div>
      <div className={`overlay ${isin ? 'overlay-update' : ''}`} style={overlayStyle2}>
        在這?
      </div>
      <div className="sign sign1" style={{
        transform: `translate(${(-1) * (bottom * -2 + 2000)}px, ${(bottom * -1 + 1200)}px) rotate(-30deg)`,
        width: '3000px', // Adjust the width as needed
        height: '200px', // Adjust the height as needed
        fontSize: '5rem', // Adjust the font size as needed
        background: 'linear-gradient(to right, #ff8c00, #ff2d55)', // Add a gradient background for a cooler look
        color: '#fff', // Set the text color to white
        padding: '40px', // Add padding for better spacing
        }}>
        還是有滿滿的好奇心嗎?
        </div>

<div className="sign sign2" style={{
  transform: `translate(${bottom * -2}px, ${bottom * -1 + 2200}px) rotate(30deg)`,
  width: '3000px', // Adjust the width as needed
  height: '200px', // Adjust the height as needed
  fontSize: '5rem', // Adjust the font size as needed
  background: 'linear-gradient(to right, #2e3192, #1b1464)', // Add a gradient background for a cooler look
  color: '#fff', // Set the text color to white
  padding: '40px', // Add padding for better spacing
  textAlign: 'left', // Align the text to the right
}}>
  那就看看我的作品吧!
</div>

      {/* Your animation page content goes here */}
    </div>
  );
};

export default AnimationPage;
