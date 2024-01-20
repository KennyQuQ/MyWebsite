import React, { useEffect, useState } from 'react';
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
          title: "懂理財，你才能成為人才！",
          description: "無論你是學生、職場新人還是已經在職場摸爬滾打多年，理財技能都是你成功的關鍵。這部影片將帶你了解為什麼理財是人才的必備技能。",
          link: "https://youtu.be/MVssUmrLefc"
        },
        {
          id: 1,
          backgroundImage: image2,
          title: "來自物理室的你♂♂",
          description: "在一所大學的物理實驗室中，兩位主角，小昌和小康，在一次意外的科學實驗中發現了一扇通往時空的神秘之門。這個物理室成為了他們獨特而令人著迷的愛情舞台。小昌是一名年輕的物理學家，充滿好奇心和創造力，他一直在探索時空的奧秘。小康是一位天賦異禀的工程師，精通機械製作和發明創造。他們的相遇和共同的科學興趣使他們開始了一段令人心動的冒險。",
          link: "https://youtu.be/0SVOQ-QLt9s"
        },
        {
          id: 2,
          backgroundImage: image3,
          title: "Press Conference",
          description: "此影片暫時不可用🙇",
          link: "https://youtu.be"
          // Add more video data as needed
        },
        {
          id: 3,
          backgroundImage: image4,
          title: "黃六醫生 vs. 膽結石",
          description: "這部影片聚焦於一位傑出的醫生，黃六醫生，以及他在膽結石治療領域的卓越成就。膽結石是一種常見但痛苦的健康問題，它可以嚴重影響患者的生活質量。但有幸的是，黃六醫生以他的醫學專業知識和同情心，一直在幫助患者克服這一問題。",
          link: "https://youtu.be/tYec2NzgmI4"
        },
        {
          id: 4,
          backgroundImage: image5,
          title: "F6D 感謝老師的話",
          description: "這部影片致敬了教育領域的默默奉獻者。在F6D 中，一群學生為了表達他們對老師的深深感激之情，決定共同製作一部特別的影片。 \
            在影片中，你將見證學生們分享了關於他們的老師們的故事和感受。這些故事包括老師的啟發、激勵和幫助，以及老師們在學生生活中所起到的關鍵作用。學生們用真誠的話語和深情的回顧，感謝了那些曾經引導他們走向未來的導師。",
          link: "https://youtu.be/EG8bWeuXEWg"
        }
      ];
      
      
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
  
  const updateCarousel = () => {
    const carouselContainer = document.querySelector(".carousel-container");
  
    if (carouselContainer) {
      const translationValue = - (currentIndex + 1) * 100 + "%";
      carouselContainer.style.transform = `translateX(${translationValue})`;
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
    <div>
     <div id="videos" className="py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-7xl font-bold mb-4 text-gray-800">我的影片</h2>
      </div>
    </div>
    <section className="w-full h-[65vh]">
      <div className="reveal relative mt-[15rem] w-full h-1 top-[30%] flex justify-between z-30">
        <button
          id="btn-ll"
          className="button-video cursor-pointer bg-[rgba(200,200,200,1)] w-[22px] -mt-[5rem] p-8 text-white font-bold text-[2.5rem] duration-300 rounded-xl flex justify-center items-center"
          onClick={prevSlide}
        >
          {'<'}
        </button>
        <button
          id="btn-rr"
          className="button-video z-20 cursor-pointer bg-[rgba(200,200,200,1)] w-[22px] -mt-[5rem] p-8 text-white font-bold text-[2.5rem] duration-300 rounded-xl flex justify-center items-center"
          onClick={nextSlide}
        >
          {'>'}
        </button>
      </div>
      <div className="p-32"></div>
      <div className="-mt-[15rem] w-full max-md:-mt-24 max-md:h-[110%] max-md:flex-col max-md:items-center md:max-xl:h-[30%] xl:h-[50%] flex md:justify-center md:items-center gap-16 transition-transform duration-300 ease-in-out">
  {videosData.map((card, index) => (
    <div
      key={index}
      className="card max-md:w-[70%] md:w-[35%] max-md:h-[500%] md:h-[300%] shadow-2xl duration-300"
      style={{ transform: `translateX(${(currentIndex - 2) * -100}%)` }}
    >
            <div className="card-image" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${card.backgroundImage})` }}></div>
            <div className="card-content">
              <div className="card-title max-md:text-[4vw] md:text-[2.5vw] text-[#0aa2ad] font-bold">{card.title}</div>
              <div className="card-description max-md:text-[2.5vw] md:text-[1.5vw] text-[#879395] overflow-auto">{card.description}</div>
            </div>
            <a target="_blank" href={card.link}>
              <Button />
            </a>
          </div>
        ))}
      </div>
    </section>
      
      <div className="p-32"></div>
    </div>
  );
};

export default Videos;
