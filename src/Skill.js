import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillIcon from './SkillIcon';

const skillsData = [
  { name: 'skill_name1', level: 'skill_level2', icon: 'logo-react' },
  { name: 'skill_name2', level: 'skill_level2', icon: 'game-controller-outline' },
  { name: 'skill_name3', level: 'skill_level3', icon: 'analytics-outline' },
  { name: 'skill_name4', level: 'skill_level1', icon: 'logo-apple-ar' },
  { name: 'skill_name5', level: 'skill_level2', icon: 'folder-open-outline' },
  { name: 'skill_name6', level: 'skill_level1', icon: 'logo-python' },
];

const SkillsPage = () => {
  const { t } = useTranslation();
  const skillsPageStyle = {
    maxWidth: '2000px', // Adjust the maximum width as needed
    padding: '20px', // Add some padding for better spacing
    backgroundColor: '#e5e7eb', // Set the background color to white
    boxShadow: '0 12px 30px rgba(0, 0, 0, 1)', // Add a subtle shadow
  };

  const skillsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  };

  const headingStyle = {
    fontWeight: 'bold', // Add bold font weight
    color: '#333', // Darken the text color
    textTransform: 'uppercase', // Convert text to uppercase
    letterSpacing: '2px', // Add letter spacing
    textAlign: 'left', // Center-align the text
    marginBottom: '20px', // Add some bottom margin
    transform: 'rotateX(15deg)', // Rotate the text on the X-axis for a 3D effect
  };  

  return (
    <div>
      <div className='reveal w-full mt-[32rem] flex items-center justify-center text-[4.5rem]' style={headingStyle}>{t('skill_bigtitle')}</div>
      <div className='reveal mt-[6rem] mb-[16rem]' style={skillsPageStyle}>
        <div className='max-md:gap-[0px] md:gap-[20px] pt-[3rem]' style={skillsContainerStyle}>
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
    </div>
  );
};

export default SkillsPage;
