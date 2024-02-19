import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import './Animation.css'; // Import the CSS file for styling
import bush from './img/bush.png';
import anya from './img/Anya.png';

import './Anya.css'; // Import the styles for AnyaComponent

const Animation1 = ({ bottom }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translate1X, setTranslate1X] = useState(0);
  const [translate2X, setTranslate2X] = useState(0);
  const { t } = useTranslation();
  
  
  useEffect(() => {
    const isPhone = window.innerWidth <= 512; // Adjust the breakpoint as needed for tablet
    const isSmallTablet = window.innerWidth > 512 && window.innerWidth <= 768; // Adjust the breakpoint as needed for tablet
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; // Adjust the breakpoint as needed for tablet
    let scroll1X, scroll2X;
      
      if (isPhone) {
        scroll1X = bottom * -0.5 - 1350;
        scroll2X = bottom * 0.7 - 450;
      } else if (isSmallTablet) {
        scroll1X = bottom * -1.5 - 200;
        scroll2X = bottom * 0.7 - 500;
      } else if (isTablet) {
        scroll1X = bottom * -1.35;
        scroll2X = bottom * 0.7 - 200;
      } else {
        scroll1X = bottom * -1.17;
        scroll2X = bottom * 1.17;
      }

      setTranslate1X(scroll1X);
      setTranslate2X(scroll2X);
  });
  
  return (
    <div>
  <div className="rolling-sign-container" style={{ transform: `translateX(${translate1X}px)` }}>
    <p className="sign-text sign-left max-md:text-5xl md:text-6xl xl:text-7xl">{t('ani1_understand')}</p>
  </div>

  <div className="rolling-sign-container" style={{ transform: `translateX(${translate2X}px)` }}>
    <p className="sign-text sign-right max-md:text-5xl md:text-6xl xl:text-7xl">{t('ani1_curious')}</p>
  </div>
</div>

  );
};


export default Animation1;
