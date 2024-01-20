// Navbar.js
import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ elements }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
    const list = document.querySelectorAll('.list');

window.onload = function () {
  document.querySelector('.home').classList.add('active');
};

function activateLink(index) {
  list.forEach((item) => item.classList.remove('active'));
  list[index].classList.add('active');
}

list.forEach((item, index) => item.addEventListener('click', () => activateLink(index)));

// Define waypoints for different screen sizes
const waypoints = {
  large: [
    { start: 0, end: 24.2 },
    { start: 24.2, end: 82.69 },
    { start: 82.69, end: 91.25 },
    { start: 91.25, end: 95.25 },
    { start: 95.25, end: 100 },
  ],
  medium: [
    { start: 0, end: 9 },
    { start: 10, end: 65 },
    { start: 66, end: 72 },
    { start: 73, end: 80 },
    { start: 81, end: 100 },
  ],
  small: [
    { start: 0, end: 9 },
    { start: 10, end: 65 },
    { start: 66, end: 71 },
    { start: 72, end: 82 },
    { start: 83, end: 100 },
  ],
};

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var totalHeight = document.body.scrollHeight - window.innerHeight;
  var scrollPercentage = (scrollPosition / totalHeight) * 100;
  console.log(scrollPercentage.toFixed(2));

  // Determine the screen size
  let screenSize;
  if (window.screen.width >= 769) {
    screenSize = 'large';
  } else if (window.screen.width >= 512 && window.screen.width < 769) {
    screenSize = 'medium';
  } else {
    screenSize = 'small';
  }

  // Find the active waypoint based on screen size
  const activeWaypoint = waypoints[screenSize].find(
    (waypoint) => scrollPercentage.toFixed(2) >= waypoint.start && scrollPercentage.toFixed(2) <= waypoint.end
  );

  // Activate the corresponding link
  if (activeWaypoint) {
    activateLink(waypoints[screenSize].indexOf(activeWaypoint));
  }
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
  }, []); // Empty dependency array ensures that this useEffect runs only once on component mount
//   useEffect(() => {
//     const list = document.querySelectorAll('.list');
//     const refs = Object.values(elements ?? {});

//     const thresholds = refs.map(ref => ref.current.offsetTop / document.body.scrollHeight * 100);

//     // console.log(thresholds)
//     window.onload = function () {
//       document.querySelector('.home').classList.add('active');
//     };

//     function activeLink() {
//       list.forEach((item) => item.classList.remove('active'));
//       this.classList.add('active');
//     }

//     list.forEach((item) => item.addEventListener('click', activeLink));

//     window.addEventListener('scroll', function () {
//     var scrollPosition = window.scrollY;
//     var totalHeight = document.body.scrollHeight - window.innerHeight;
//     var scrollPercentage = (scrollPosition / totalHeight) * 100;

//     list.forEach((item, index) => {
//       if (scrollPercentage.toFixed(2) <= thresholds[index]) {
//         list.forEach((item) => item.classList.remove('active'));
//         item.classList.add('active');
//         return;
//       }
//     });
//   });
// }, []);

    
  // console.log("Refs in Navbar.js:", listRefs);
    
      
  // const list = document.querySelectorAll('.list');

  

  // useEffect(() => {
  //   if (Array.isArray(listRefs) && listRefs.length > 0) {
  //     const observerOptions = {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0.5,
  //     };

  //     const observerCallback = (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           listRefs.forEach((ref, index) => {
  //             if (ref && ref.current && ref.current instanceof Element) {
  //               list[index].classList.remove('active');
  //             }
  //           });

  //           const index = listRefs.findIndex((ref) => ref && ref.current === entry.target);

  //           if (listRefs[index] && listRefs[index].current) {
  //             list[index].classList.add('active');
  //           }
  //         }
  //       });
  //     };

  //     const observer = new IntersectionObserver(observerCallback, observerOptions);

  //     listRefs.forEach((ref) => {
  //       if (ref && ref.current && ref.current instanceof Element) {
  //         observer.observe(ref.current);
  //       }
  //     });

  //     return () => {
  //       observer.disconnect();
  //     };
  //   }
  // }, [listRefs]);

  // window.addEventListener('scroll', reveal);
  
  //     function reveal() {
  //       var reveals = document.querySelectorAll('.reveal');
  //       for (var i = 0; i < reveals.length; i++) {
  //         var windowheight = window.innerHeight;
  //         var revealtop = reveals[i].getBoundingClientRect().top;
  //         var revealpoint = 150;
  
  //         if (revealtop < windowheight - revealpoint) {
  //           reveals[i].classList.add('displayed');
  //         } else {
  //           reveals[i].classList.remove('displayed');
  //         }
  //       }
  //     }


  return (
    <div className='py-[32px]'>
      <nav className="w-full h-[0px] flex justify-center items-center fixed fade-down z-50" style={navbarStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="nav z-50">
          <ul className="w-full flex justify-center items-center">
            <li className="list home">
              <ScrollLink to="home" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                <span className="text">主頁</span>
              </ScrollLink>
            </li>
            <li className="list">
              <ScrollLink to="experience" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                <span className="text">經歷</span>
              </ScrollLink>
            </li>
            <li className="list">
              <ScrollLink to="skill" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="thumbs-up-outline"></ion-icon></span>
                <span className="text">關於我</span>
              </ScrollLink>
            </li>
            <li className="list">
              <ScrollLink to="projects" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="camera-outline"></ion-icon></span>
                <span className="text">作品</span>
              </ScrollLink>
            </li>
            <li className="list">
              <ScrollLink to="contact" smooth={true} duration={0}>
                <span className="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                <span className="text">聯繫</span>
              </ScrollLink>
            </li>
            <div className="indicator"></div>
          </ul>
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
