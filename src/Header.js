import React, { useState, useEffect } from 'react';
import cardImage from './img/cards/card1.jpg';

const Header = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xOffset = (e.clientX * 1.5 + 500) / window.innerWidth - 0.5;
      const xOffset2 = (e.clientX * 0.5 + 1000) / window.innerWidth - 0.5;
      const yOffset = e.clientY * 1.5 / window.innerHeight - 0.5;
      const yOffset2 = e.clientY * 0.5 / window.innerHeight - 0.5;

      setOffset({ x: xOffset * 100, y: yOffset * 100 });
      setOffset2({ x: xOffset2 * 100, y: yOffset2 * 100 });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
      <div className="w-full -mt-[28vh] max-h-[120vh] bg-gradient-to-r from-[#fff8fd] to-[#e0f8fd] px-16">
        <div className="h-[120vh] w-full flex flex-wrap z-10 rounded-full">
          <div className="relative max-w-[400px] m-auto text-center top-[10%] fade-up rounded-full">
          <img src={cardImage} alt="Seat Adjustment" className="w-full rounded-full shadow-2xl" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}/>
          </div>
          <div className="max-lg:-mt-8 relative shadow-2xl min-w-[300px] max-w-[1000px] min-h-[200px] max-h-[500px] m-auto text-center top-[10%] fade-right rounded-3xl p-[0.5vw]" style={{ transform: `translate(${offset2.x}px, ${offset2.y}px)` }}>
            <div className="flex items-start justify-between flex-col p-[2vw] font-bold">
              <div className="max-sm:text-[9vw] sm:max-md:text-[7vw] text-[5vw] text-black p-[1vw]">你好! 👋</div>
              <div className="flex flex-row pl-[1vw]">
                <div className="static-text font-bold">我是 </div>
                <ul className="dynamic-text text-left">
                  <li><span>Kenny Sou</span></li>
                  <li><span>密西根學院本科生</span></li>
                  <li><span>MC社開發部成員</span></li>
                  <li><span>貓貓愛好者😼</span></li>
                </ul>
              </div>
              <div className="max-md:text-[5vw] text-[3vw] text-[#FC6D6D] py-[2vw] ">📍位於上海交通大學</div>
            </div>
          </div>
          <div id="experiences" className="absolute w-full h-[10vh] left-0 bottom-0 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.6)] duration-300 flex justify-center items-center border-y-2 ">
            <p className="arrow font-bold text-6xl text-blue-500 hover:opacity-80"><a href="#experiences"><ion-icon name="caret-down-outline"></ion-icon></a></p>
          </div>
        </div>
      </div>
  );
};

export default Header;
