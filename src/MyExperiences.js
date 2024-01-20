import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import experience_image_1 from './img/experience/experience1.jpg';
import experience_image_2 from './img/experience/experience2.jpg';
import experience_image_3 from './img/experience/experience3.jpg';

const experiencesData = [
      {
        icon: "accessibility-outline",
        title: "出生",
        date: "2005",
        description: "2005年出生於中國澳門。",
        image: experience_image_1,
        color: "#ffffff",
      },
      {
        icon: "book-outline",
        title: "入讀",
        date: "2008",
        description: "2008年入讀澳門聖保祿學校幼稚園部。",
        image: experience_image_2,
        color: "#ffffff",
      },
      {
        icon: "calculator-outline",
        title: "加入奧數斑",
        date: "2013-2023",
        description: "從小學三年級開始加入奧數斑，在澳門小學網絡數學比賽、港澳數學奧林匹克公開賽、澳門校際數學比賽、數學大王國際邀請賽、WMI世界數學邀請賽小學組等比賽中屢獲佳績。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "walk-outline",
        title: "加入田徑隊",
        date: "2013-2017",
        description: "小學三年級至小學六年級期間加入田徑隊，小學六年級成為田徑隊隊長，在校內男子50米、4x50米和200米皆獲第一名。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "code-working-outline",
        title: "初接觸編程",
        date: "2018-2019",
        description: "在初一的時候初接觸編程，自學了windows 批次檔，以及用批次檔寫了井字遊戲以及類Pokemon對戰游戲。在初二自學使用Scratch寫了許多2D游戲，包括使用Scratch製作類Mario系列的2D平台遊戲和類使命召喚殭屍模式的平面捲軸遊戲，以此作品獲得校內Scratch & Mblock編程比賽的冠軍。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "laptop-outline",
        title: "加入電腦校隊",
        date: "2019-2023",
        description: "以Scratch & Mblock編程比賽的冠軍為契機，我於初三加入了學校的電腦校隊，學習了如計算機組成原理、常用的Office軟件、計算機網絡基礎知識和一些常用編程語言，並於同年參加了如全澳中學生資訊科技知識問答比賽，獲得了不錯的成績。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "logo-apple-ar",
        title: "3D遊戲製作",
        date: "2020-2023",
        description: "初三開始接觸3D遊戲引擎(如: Unity, Unreal Engine 4 等)，參與了全澳資訊科技三維編程大賽(以Alice 3D軟件製作)，獲得了全澳第三名的成績。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "videocam-outline",
        title: "影片製作",
        date: "2021-2023",
        description: "高一在朋友的邀請下接觸了影片製作，自學了Photoshop和Premiere Pro等影視製作軟件。高二接觸了動畫製作，製作成「懂理財，你才能成為人才！」影片，並獲得全校最高的評分。高三幫老師製作教育&回顧影片，並擔任畢業影片製作人。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "chatbubbles-outline",
        title: "英文能力",
        date: "2021-2023",
        description: "高中三年獲得了校內的Spelling Bee比賽的冠軍、Reader's Theatre比賽的冠軍以及Jeopardy比賽的季軍。在校外參與了以可持續發展為主題的全澳英文徵文比賽(Macao-wide English Essay Competition)，獲得了Honorable Mention的成績。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "trophy-outline",
        title: "高中比賽",
        date: "2021-2023",
        description: "在高中參與了 STEAM 及 IOT 創意解難賽 ，內容是以編寫MBOT機械車的程序，來實視各種解難操作，過程中學習到了像fusion 360等軟件來製作小組件，各類傳感器的使用，以及各類傳感器在物聯網(IOT)的實際應用，比賽連續兩年獲得了全澳第三名。我也參與了 全澳校園氣象監察比賽 ，主要是使用Python語言爬取網上的氣象資料，解析收集而來的 XML 格式檔案，再以 Pandas 和 MatplotLib 等擴展庫去分析數據以及製作圖表，最後比賽獲得了全澳第二名。我亦參與了 校內的常識問答比賽 ，比賽連續兩年獲得了第一名。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "document-text-outline",
        title: "Excel軟件能力",
        date: "2022-2023",
        description: "自小便對數據數析有興趣，通過老師的推薦下，考取了Excel Core、Excel Associate、Excel Expert等證書。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "globe-outline",
        title: "學習前端WEB開發",
        date: "2022-2023",
        description: "在高三我嘗試學習前端WEB開發，在學習三週後我參加了 全澳學生網站技術技能比賽 ，其中我學習到了由基礎的 HTML, CSS, Javascript, 以及一些常用框架如 tailwindcss, vue.js等，最後在學習一個月後獲得全澳第七名。後來被老師邀請製作小程序，主要是用作模擬考的隨機分配座位，後來出於自己的興趣製作了外賣平台的介面以及這個網頁。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "school-outline",
        title: "高中畢業",
        date: "2023",
        description: "高中以理組全級第一的成績畢業於澳門聖保祿學校，並考進了上海交通大學的密西根學院。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
      {
        icon: "arrow-redo-outline",
        title: "大學生活",
        date: "2023- ????",
        description: "我加入了上海交通大學MC社的技術開發部，現在負責地圖以及數據包開發。",
        image: experience_image_3,
        color: "#ffffff",
      },
];

const MyExperiences = () => {
    const experienceHeight = 40; // Adjust this value based on your design preferences
    const [focusedIndex, setFocusedIndex] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(experiencesData[0].image); // Set initial background image
    const [scrollY, setScrollY] = useState(0);

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
    background: scrollY > 9500 ? '#ffffff' : '#000000',
    opacity: scrollY > 9500 ? 1 : 0.4,
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
              setBackgroundImage(experiencesData[index].image); // Set background image based on focused experience
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
      <div className="container-experiences" style={containerStyle}>
        <div className="reveal flex justify-center items-center max-md:text-[8.5vw] text-[5vw] pb-[2vw] text-[#ffffff]">我的經歷</div>
        <div className="center-line" style={{ height: `${experiencesData.length * experienceHeight - 70}vh` }}>
          <a href="#experiences" className="reveal scroll-icon p-1 hover:opacity-80 duration-300"><ion-icon name="chevron-up-outline"></ion-icon></a>
        </div>
       
        {experiencesData.map((experience, index) => (
            <div>
          <div key={index} className={`z-10 reveal row row-${index % 2 === 0 ? 'left' : 'right'}`} style={{
            transform: scrollY < 9000 ? `translateY(${((scrollY - window.innerHeight) * -1.5) + 3200}px)` : 'translateY(-9000px)',
            transition: 'transform 0s ease-in-out', // Adjust the transition duration
          }}>       
            <section
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
                transform: focusedIndex === index ? 'scale(4)' : 'scale(1)', // Adjust the scale factor as needed
                transition: 'transform 0.8s ease-in-out', // Adjust the transition duration
                zIndex: -1,
                color: experience.color,
              }}></ion-icon>
                <span className="max-md:text-[1.8vw] md:text-[1.2vw] p-1 date">{experience.date}</span>
              </span>
              <div className="details px-4">
                <span className="max-md:text-[2.5vw] md:text-[1.5vw] p-1 font-bold text-white">{experience.title}</span>
              </div>
              <p className="max-md:text-[1.8vw] md:text-[1.2vw] py-[1.8vw] px-4 text-white">{experience.description}</p>
            </section>
          </div>
          </div>
        ))}
        </div>
      </div>
    );
  };
  
  

export default MyExperiences;
