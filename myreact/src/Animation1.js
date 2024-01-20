import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import './Animation.css'; // Import the CSS file for styling
import bush from './img/bush.png';
import anya from './img/Anya.png';

import './Anya.css'; // Import the styles for AnyaComponent

const YourComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translate1X, setTranslate1X] = useState(0);
  const [translate2X, setTranslate2X] = useState(0);

  // Update scroll position on scroll
  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };


  useEffect(() => {
    const handleScroll = () => {
      const scroll1X = (window.scrollY - 3000) * 1.17;
      const scroll2X = (window.scrollY - 2800) * -1.17;
      setTranslate1X(scroll1X);
      setTranslate2X(scroll2X);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const book1Style = {
    transform: `translateX(${(scrollPosition / 3) - 500}px)`,
  };

  const book2Style = {
    transform: `translateX(${(-1 * scrollPosition / 3) + 500}px)`,
  };

  return (
    // <Element name="animated-section">
    //     <div className="books-container">
    //       {/* Animated Book 1 */}
    //       <div className="book" style={book1Style}>
    //         <img
    //           src={bush}  // Replace with the actual path to your image
    //           alt="Book 1"
    //           style={{ width: '1500px', height: '300px' }}
    //         />
    //       </div>

    //       {/* Animated Book 2 */}
    //       <div className="book" style={book2Style}>
    //         <img
    //           src={bush}  // Replace with the actual path to your image
    //           alt="Book 2"
    //           style={{ width: '1500px', height: '300px' }}
    //         />
    //       </div>
    //     </div>
    //   </Element>
    <div>
  {/* Animated section with signs */}
  <div className="rolling-sign-container" style={{ transform: `translateX(${translate1X}px)` }}>
    <p className="sign-text sign-left">想要更了解我嗎？</p>
  </div>

  <div className="rolling-sign-container" style={{ transform: `translateX(${translate2X}px)` }}>
    <p className="sign-text sign-right">好奇嗎？ 那就繼續向下吧！</p>
  </div>
</div>

  );
};


export default YourComponent;
