import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectCard.css';
import Button from './Button'; // Import your Button component

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const [fliptop, setfliptop] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(16 / 9); // Adjust the aspect ratio as needed
  const { t } = useTranslation();

  useEffect(() => {
    const updateAspectRatio = () => {
      if (videoRef.current) {
        const { videoWidth, videoHeight } = videoRef.current;
        setAspectRatio(videoWidth / videoHeight);
      }
    };

    window.addEventListener('resize', updateAspectRatio);
    updateAspectRatio(); // Initial calculation
  });
  const isPhone = window.innerWidth <= 512; // Adjust the breakpoint as needed for tablet
  const isSmallTablet = window.innerWidth > 512 && window.innerWidth <= 768; // Adjust the breakpoint as needed for tablet
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; // Adjust the breakpoint as needed for tablet

  useEffect(() => {
    const flip = () => {
      const card = cardRef.current;
      const windowheight = window.innerHeight;
      const fliptop = titleRef.current.getBoundingClientRect().top;
      setfliptop(card.getBoundingClientRect().top);
      let flippoint = 850;

      if (isPhone) {
        flippoint = 550;
      } else if (isSmallTablet) {
        flippoint = 950;
      } else if (isTablet) {
        flippoint = 1050;
      } else {
        flippoint = 800;
      }

      if (fliptop < windowheight - flippoint) {
        card.classList.add('flipped');
      } else {
        card.classList.remove('flipped');
      }
    };

    window.addEventListener('scroll', flip);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', flip);
    };
  }, []);

  let titleStyle;
  if (isPhone) {
    titleStyle = {
      transform: `translateX(${-0.1 * fliptop + 20}px)`,
    };
  } else {
    titleStyle = {
      transform: `translateX(${-0.2 * fliptop + 100}px)`,
    };
  }

  return (
    <div className="project-container max-md:mx-8 md:mx-16 xl:mx-48 py-16 max-xl:mt-64 xl:my-64">
      <div className="project-content max-xl:ml-4 flex max-xl:flex-col">
        <div className="flex flex-col items-center">
          <div className="w-full" ref={titleRef} style={titleStyle}>
            <h2 className="w-full max-md:text-8xl md:text-9xl" data-text={t(project.title)}>
              {t(project.title)}
            </h2>
          </div>
          <div ref={cardRef} className="project-card max-md:w-[350px] max-md:h-[200px] md:w-[700px] md:h-[400px]">
            <div className="card-inner">
              <div className="card-front">
                {/* Front content, an image */}
                <img src={project.image} alt={project.title} className="absolute top-0 left-0 w-full h-full" />
              </div>
              <div className="card-back" style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }}>
                {/* Back content, a video */}
                <video ref={videoRef} className="absolute top-0 left-0 w-full h-full" width="100%" height="100%" controls={false} muted={true} autoPlay={true} loop playsInline>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="max-xl:w-full xl:w-[30%] flex flex-col xl:mr-[8rem] xl:mt-[23rem]">
          <p className='max-xl:text-lg xl:text-xl text-[#181817] leading-[2rem] font-bold'>{t(project.description)}</p>
          <p className='max-xl:text-lg xl:text-xl text-[#4df276] max-xl:mt-4 xl:mt-8 font-bold'>{project.tag}</p>
          <p className='max-xl:text-xl xl:text-2xl text-black max-xl:mt-6 xl:mt-12 font-extrabold'>{project.time}</p>
          <p className='max-xl:text-xl xl:text-2xl text-black mt-2 font-extrabold'>{t(project.place)}</p>
          <a className='mt-8' href={project.link} target="_blank" rel="noopener noreferrer">
            <div className='md:w-[60%] lg:w-[45%] xl:w-[95%] flex max-md:flex-col max-md:items-start md:items-center justify-between'><span className='text-xl text-black font-extrabold'>有興趣嗎 &rarr; &nbsp; &nbsp; &nbsp;</span><span className='max-md:ml-12'><Button /></span></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
