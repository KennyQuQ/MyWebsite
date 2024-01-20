import React from 'react';
import SkillIcon from './SkillIcon';

const skillsData = [
  { name: 'React', level: 'Intermediate', icon: 'logo-react' },
  { name: 'JavaScript', level: 'Advanced', icon: 'logo-javascript' },
  // Add more skills as needed
];

const SkillsPage = () => {
  const skillsPageStyle = {
    maxWidth: '2000px', // Adjust the maximum width as needed
    margin: '20rem auto', // Center the content horizontally
    padding: '20px', // Add some padding for better spacing
    backgroundColor: '#e5e7eb', // Set the background color to white
    boxShadow: '0 12px 30px rgba(0, 0, 0, 1)', // Add a subtle shadow
  };

  const skillsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px', // Adjust the gap between items
  };

  const headingStyle = {
    fontSize: '3rem', // Increase the font size
    fontWeight: 'bold', // Add bold font weight
    color: '#333', // Darken the text color
    textTransform: 'uppercase', // Convert text to uppercase
    letterSpacing: '2px', // Add letter spacing
    textAlign: 'left', // Center-align the text
    marginBottom: '20px', // Add some bottom margin
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Add a subtle text shadow
    transform: 'rotateX(15deg)', // Rotate the text on the X-axis for a 3D effect
  };  

  return (
    <div style={skillsPageStyle}>
      <h2 style={headingStyle}>My Skills</h2>
      <div style={skillsContainerStyle}>
        {skillsData.map((skill, index) => (
          <SkillIcon
            key={index}
            skillName={skill.name}
            skillLevel={skill.level}
            skillIcon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
