import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';
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

const experiencesData = [
      {
        icon: "accessibility-outline",
        title: "experience_title1",
        date: "2005",
        description: "experience_description1",
        image: experience_image_1,
        color: "#88fe9f",
      },
      {
        icon: "book-outline",
        title: "experience_title2",
        date: "2008",
        description: "experience_description2",
        image: experience_image_2,
        color: "#3a8fd1",
      },
      {
        icon: "calculator-outline",
        title: "experience_title3",
        date: "2013-2023",
        description: "experience_description3",
        image: experience_image_3,
        color: "#aae0e6",
      },
      {
        icon: "walk-outline",
        title: "experience_title4",
        date: "2013-2017",
        description: "experience_description4",
        image: experience_image_4,
        color: "#e96260",
      },
      {
        icon: "code-working-outline",
        title: "experience_title5",
        date: "2018-2019",
        description: "experience_description5",
        image: experience_image_5,
        color: "#df3cff",
      },
      {
        icon: "laptop-outline",
        title: "experience_title6",
        date: "2019-2023",
        description: "experience_description6",
        image: experience_image_6,
        color: "#00e7eb",
      },
      {
        icon: "logo-apple-ar",
        title: "experience_title7",
        date: "2020-2023",
        description: "experience_description7",
        image: experience_image_7,
        color: "#00e7eb",
      },
      {
        icon: "videocam-outline",
        title: "experience_title8",
        date: "2021-2023",
        description: "experience_description8",
        image: experience_image_8,
        color: "#a503fc",
      },
      {
        icon: "chatbubbles-outline",
        title: "experience_title9",
        date: "2021-2023",
        description: "experience_description9",
        image: experience_image_9,
        color: "#11cf30",
      },
      {
        icon: "trophy-outline",
        title: "experience_title10",
        date: "2021-2023",
        description: "experience_description10",
        image: experience_image_10,
        color: "#eba00c",
      },
      {
        icon: "document-text-outline",
        title: "experience_title11",
        date: "2022-2023",
        description: "experience_description11",
        image: experience_image_11,
        color: "#089c03",
      },
      {
        icon: "globe-outline",
        title: "experience_title12",
        date: "2022-2023",
        description: "experience_description12",
        image: experience_image_12,
        color: "#00e7eb",
      },
      {
        icon: "school-outline",
        title: "experience_title13",
        date: "2023",
        description: "experience_description13",
        image: experience_image_13,
        color: "#3a8fd1",
      },
      {
        icon: "arrow-redo-outline",
        title: "experience_title14",
        date: "2023- ????",
        description: "experience_description14",
        image: experience_image_14,
        color: "#e5a39d",
      },
];

const MyExperiences = ({ over, bottom }) => {
    const [experienceHeight, setexperienceHeight] = useState(40); // Adjust this value based on your design preferences
    const [focusedIndex, setFocusedIndex] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(experiencesData[0].image); // Set initial background image
    const [scrollY, setScrollY] = useState(0);
    
    const [scaleStyle, setScaleStyle] = useState(4);
    const [transformStyle, setTransformStyle] = useState(
      `translateY(${(bottom * 1.5) + 500}px)`
    );
    const { t } = useTranslation();

    useEffect(() => {
      const handleResize = () => {
        const isPhone = window.innerWidth <= 512; // Adjust the breakpoint as needed for tablet
        const isSmallTablet = window.innerWidth > 512 && window.innerWidth <= 768; // Adjust the breakpoint as needed for tablet
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; // Adjust the breakpoint as needed for tablet
      
        if (isPhone) {
          setexperienceHeight(40);
        } else if (isSmallTablet) {
          setexperienceHeight(35);
        } else if (isTablet) {
          setexperienceHeight(30);
        } else {
          setexperienceHeight(41);
        }

        if (isPhone || isSmallTablet) {
          setScaleStyle(2.5);
        } else if (isTablet) {
          setScaleStyle(3.5);
        } else {
          setScaleStyle(4.5);
        }
        
    // console.log(scaleStyle);
        
        if (isPhone) {
          setTransformStyle(!over ? `translateY(${(bottom * 0.75) + 500}px)` : 'translateY(-9000px)');
        } else if (isSmallTablet || isTablet) {
          setTransformStyle(!over ? `translateY(${(bottom * 1) + 500}px)` : 'translateY(-9000px)');
        } else {
          setTransformStyle(!over ? `translateY(${(bottom * 1.5) + 500}px)` : 'translateY(-9000px)');
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [over, bottom]);

    const handleScroll = () => {
        setScrollY(window.scrollY);
      };

    const containerStyle = {
      height: `${experiencesData.length * experienceHeight}vh`,
    };

    const fixedBackgroundStyle = {
    background: `url(${backgroundImage}) center/cover fixed`,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -100,
    transition: 'background 0.5s ease-in-out', // Add transition for background
  };

  const blackLayerStyle = {
    background: over ? '#ffffff' : '#000000',
    opacity: over ? 1 : 0.4,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -99,
    transition: 'background 0.5s ease-in-out, opacity 0.5s ease-in-out', // Add transition for display
  };


    const containerRef = useRef(null);

    const elementRefs = useRef([]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {
        const handleIntersection = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.getAttribute('data-index'));
              setFocusedIndex(index);
              setBackgroundImage(experiencesData[index].image);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersection, {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        });
    
        document.querySelectorAll('.reveal.row section').forEach((section, index) => {
          observer.observe(section);
          section.setAttribute('data-index', index);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);
    
    return (
    <div className='w-full' style={containerStyle}>
        <div className="filter blur-lg duration-[1s]" style={fixedBackgroundStyle}></div>
        <div style={blackLayerStyle}></div>
      <div className="container-experiences xl:max-w-[75%] lg:max-w-[90%] md:max-w-[70%]" style={containerStyle}>
        <div className="reveal flex justify-center items-center max-md:text-[4rem] md:text-[7rem] pb-[2rem] text-[#ffffff]">{t('experience_bigtitle')}</div>
        <div className="center-line" style={{ height: `${experiencesData.length * experienceHeight - 70}vh` }}>
          <a href="#experiences" className="reveal scroll-icon p-1 hover:opacity-80 duration-300"><ion-icon name="chevron-up-outline"></ion-icon></a>
        </div>
       
        {experiencesData.map((experience, index) => (
            <div>
          <div key={index} className={`z-10 reveal row row-${index % 2 === 0 ? 'left' : 'right'}`} style={{
            transform: transformStyle,
            transition: 'transform 0s ease-in-out', // Adjust the transition duration
          }}>
            <section className='max-md:my-20 md:my-16 lg:my-12 xl:my-4 '
              style={{
                position: 'relative',
                opacity: focusedIndex === index ? 1 : 0.7, // Initial opacity (adjust as needed)
                filter: focusedIndex === index ? 'blur(0)' : 'blur(5px)', // Initial blur (adjust as needed)
                transition: 'opacity 0.8s ease-in-out, filter 0.8s ease-in-out', // Combine transitions
                zIndex: -1,
              }}
            >
            <img src={experience.image} alt={`Experience ${index + 1}`} className="experience-image duration-30" />
              <span className='ion-icon'>
                <ion-icon className='relative z-10' name={experience.icon} style={{
                transform: focusedIndex === index ? `scale(${scaleStyle})` : 'scale(1)', // Adjust the scale factor as needed
                transition: 'transform 0.8s ease-in-out', // Adjust the transition duration
                zIndex: -1,
                color: experience.color,
              }}></ion-icon>
                <div className="max-lg:text-4xl max-lg:mt-4 max-lg:-ml-4 lg:text-8xl p-1 date">{experience.date}</div>
              </span>
              <div className="details px-4">
                <span className="max-md:text-3xl md:text-4xl p-1 font-bold text-white">{t(experience.title)}</span>
              </div>
              <p className="max-md:text-[0.9rem] md:text-xl max-md:pl-[2rem] py-[1.8vw] px-4 text-white">{t(experience.description)}</p>
            </section>
          </div>
          </div>
        ))}
        </div>
      </div>
    );
  };

export default MyExperiences;
