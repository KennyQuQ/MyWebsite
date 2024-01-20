import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Style your cursor in a separate CSS file

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>;
};

export default CustomCursor;