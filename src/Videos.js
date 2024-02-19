import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Videos.css';
import Button from './Button';
import image1 from './img/background/video1.png';
import image2 from './img/background/video2.png';
import image3 from './img/background/video3.png';
import image4 from './img/background/video4.png';
import image5 from './img/background/video5.png';

const Videos = () => {
    const videosData = [
        {
          id: 0,
          backgroundImage: image1,
          title: "videos_title1",
          description: "videos_description1",
          link: "https://youtu.be/MVssUmrLefc"
        },
        {
          id: 1,
          backgroundImage: image2,
          title: "videos_title2",
          description: "videos_description2",
          link: "https://youtu.be/0SVOQ-QLt9s"
        },
        {
          id: 2,
          backgroundImage: image3,
          title: "videos_title3",
          description: "videos_description3",
          link: "https://youtu.be"
          // Add more video data as needed
        },
        {
          id: 3,
          backgroundImage: image4,
          title: "videos_title4",
          description: "videos_description4",
          link: "https://youtu.be/tYec2NzgmI4"
        },
        {
          id: 4,
          backgroundImage: image5,
          title: "videos_title5",
          description: "videos_description5",
          link: "https://youtu.be/EG8bWeuXEWg"
        }
      ];
      
  const { t } = useTranslation();
  let [slide, setSlide] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videosData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videosData.length) % videosData.length);
  };

  const pushVideo = (num) => {
    setSlide((prevSlide) => (prevSlide + num + videosData.length) % videosData.length);
    updateCarousel();
  };    

  const showVideo = () => {
    const currentVideo = videosData[slide];
    const Videos = document.querySelector("#myVideo");
  
    if (Videos) {
      Videos.style.backgroundImage = `url(${currentVideo.backgroundImage})`;
    }
  
    const Titles = document.querySelector("#myTitle");
    const Dis = document.querySelector("#myDescription");
    const Links = document.querySelector("#myVideolink");
  
    if (Titles) {
      Titles.textContent = currentVideo.title;
    }
  
    if (Dis) {
      Dis.innerHTML = currentVideo.description;
    }
  
    if (Links) {
      Links.href = currentVideo.link;
    }
  };

  const carouselContainer = document.querySelector(".carousel-container");

  const isPhone = window.innerWidth <= 512; // Adjust the breakpoint as needed for tablet
  const isSmallTablet = window.innerWidth > 512 && window.innerWidth <= 768; // Adjust the breakpoint as needed for tablet
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; // Adjust the breakpoint as needed for tablet
  
  let scale = 100;

  if (isPhone) {
    scale = 500;
  } else if (isSmallTablet) {
    scale = 150;
  } else if (isTablet) {
    scale = 150;
  } else {
    scale = 100;
  }

  const updateCarousel = () => {
    const carouselContainer = document.querySelector(".carousel-container");
  
    if (carouselContainer) {
      const translationValue = - (currentIndex + 1) * 100 + "%";
      carouselContainer.style.transform = `translateX(${translationValue * scale})`;
    }
  };
  
  useEffect(() => {
    const nextButton = document.querySelector("#btn-rr");
    const prevButton = document.querySelector("#btn-ll");
  
    const handleBtnLLClick = () => {
      pushVideo(-1);
      updateCarousel();
    };
  
    const handleBtnRRClick = () => {
      pushVideo(1);
      updateCarousel();
    };
  
    nextButton.addEventListener("click", handleBtnRRClick);
    prevButton.addEventListener("click", handleBtnLLClick);
  
    return () => {
      nextButton.removeEventListener("click", handleBtnRRClick);
      prevButton.removeEventListener("click", handleBtnLLClick);
    };
  }, [currentIndex]);
  
  return (
    <div className='reveal'>
     <div id="videos" className="py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-7xl font-bold mb-4 text-[#58d3dc]">{t('videos_bigtitle')}</h2>
      </div>
    </div>
    <section className="w-full h-[65vh]">
      <div className="reveal relative mt-[15rem] w-full h-1 top-[30%] flex justify-between z-30">
        <button
          id="btn-ll"
          className="button-video cursor-pointer bg-[rgba(200,200,200,1)] w-[22px] -mt-[5rem] p-8 text-white font-bold text-[2.5rem] duration-300 rounded-xl flex justify-center items-center opacity-50"
          onClick={prevSlide}
        >
          {'<'}
        </button>
        <button
          id="btn-rr"
          className="button-video z-20 cursor-pointer bg-[rgba(200,200,200,1)] w-[22px] -mt-[5rem] p-8 text-white font-bold text-[2.5rem] duration-300 rounded-xl flex justify-center items-center opacity-50"
          onClick={nextSlide}
        >
          {'>'}
        </button>
      </div>
      <div className="p-32"></div>
      <div className="md:-mt-[15rem] w-full max-md:-mt-[30rem] max-md:h-[110%] max-md:items-center md:max-xl:h-[30%] xl:h-[50%] flex justify-center items-center md:gap-16 transition-transform duration-300 ease-in-out">
  {videosData.map((card, index) => (
    <div
      key={index}
      className="card flex-shrink-0 flex-grow-0 max-md:w-[70%] md:w-[55%] xl:w-[35%] max-md:h-[100%] md:h-[300%] shadow-2xl duration-300"
      style={{ transform: `translateX(${(currentIndex - 2) * -100}%)` }}
    >
            <div className="card-image" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${card.backgroundImage})` }}></div>
            <div className="card-content p-[2rem] overflow-auto">
              <div className="card-title h-[20%] max-md:text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] text-[#0aa2ad] font-bold">{t(card.title)}</div>
              <div className="card-description h-[70%] pl-[1rem] max-md:text-[0.8rem] md:text-[0.95rem] xl:text-[1.2rem] text-[#879395] max-md:leading-5 md:leading-6">{t(card.description)}</div>
            </div>
            <div className='xl:w-[100%] h-[10%] mx-[3rem] flex items-center justify-between max-xl:flex-col max-xl:items-start'>
              <span className='md:text-md xl:text-xl text-black font-extrabold'>{t('videos_click')} &rarr; &nbsp; &nbsp; &nbsp;</span>
              <a className='max-xl:ml-[4rem] pb-[2rem]' target="_blank" href={card.link}>
                <Button />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
      
      <div className="p-32"></div>
    </div>
  );
};

export default Videos;
