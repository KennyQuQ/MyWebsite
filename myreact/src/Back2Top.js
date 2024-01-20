import React from 'react';
import './Back2Top.css'; // Import the CSS file for styling

const BackToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="marquee-container">
      <button
        onClick={handleBackToTop}
        className="bg-gradient-to-r from-[#ffdff5] to-[#c8f2fc] w-100% h-[24rem] text-gray-600 text-7xl hover:text-white transition-colors duration-300 opacity-70"
      >
        <span className='marquee-content'>
        ▣  ↑↑  回到頂部  ↑↑  ▣  ↑↑  回到頂部  ↑↑  ▣  ↑↑  回到頂部  ↑↑  ▣  ↑↑  回到頂部  ↑↑  ▣  ↑↑  回到頂部  ↑↑  ▣  ↑↑  回到頂部  ↑↑  ▣  ↑↑  回到頂部  ↑↑  ▣
         </span>
      </button>
    </div>
  );
};

export default BackToTop;