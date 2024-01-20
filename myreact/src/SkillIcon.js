// SkillIcon.js

import React, { useState } from 'react';

const SkillIcon = ({ skillName, skillLevel, skillIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const iconStyle = {
    position: 'relative',
    width: '200px', // Adjusted width for better alignment
    height: '200px', // Adjusted height for better alignment
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px', // Added rounded corners
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none', // Added shadow on hover
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    zIndex: 100,
    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
    margin: '20px', // Increased margin for a bigger gap
  };

  const overlayStyle = {
    position: 'relative',
    width: '200px', // Adjusted width for better alignment
    height: '50px',
    fontSize: '1.5rem', // Increased font size
    bottom: '32px',
    opacity: isHovered ? '1' : '0',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 100,
    transform: isHovered ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    margin: '20px', // Increased margin for a bigger gap
  };

  const levelStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  return (
    <div>
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={iconStyle}
        >
        <ion-icon className="text-6xl" name={skillIcon} style={{ fontSize: '4.2rem' }} />
      <div className="skill-name text-3xl mt-6">{skillName}</div>
    </div>
    <div style={overlayStyle}>
    <div style={levelStyle}>{skillLevel}</div>
  </div>
  </div>
  );
};

export default SkillIcon;
