// AnimationPage.js
import React, { useState, useEffect } from 'react';
import './Animation.css'; // Import the styles for AnimationPage
import EmojiRain from './EmojiRain';

const AnimationPage = () => {
  const [scrollY, setScrollY] = useState(0);

  const parallaxOffset1 = (scrollY - 10100) * 0.5; // Adjust the parallax effect by changing the multiplier
  const parallaxOffset2 = (scrollY - 10100) * 0.5; // Adjust the parallax effect by changing the multiplier

  const overlayStyle1 = {
    top: '30%',
    transform: `translateY(${parallaxOffset1}px)`, // Adding translateZ for a 3D effect
  };

  const overlayStyle2 = {
    top: '50%',
    transform: `translateY(${parallaxOffset2}px)`, // Adding translateZ for a 3D effect
  };

  const opacity = Math.max(0, 1 - (scrollY - 10200) / 1000);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`animation-page`}>
    <div style={{ opacity }}>
        {scrollY > 9500 && scrollY < 11200  && <EmojiRain />}
    </div>
     <div className={`overlay ${scrollY > 9500 ? 'overlay-update' : ''}`} style={overlayStyle1}>
        還
      </div>
      <div className={`overlay ${scrollY > 9500 ? 'overlay-update' : ''}`} style={overlayStyle2}>
        在這?
      </div>
      <div className="sign sign1" style={{
        transform: `translate(${(-1) * (scrollY * 2 - 20000)}px, ${(scrollY * 1 - 10000)}px) rotate(-30deg)`,
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
  transform: `translate(${scrollY * 2 - 22000}px, ${scrollY * 1 - 9000}px) rotate(30deg)`,
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
