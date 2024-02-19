import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import './ProjectCard.css';
import project1img from './img/project/project1img.png';
import project1vid from './img/project/project1vid.mp4';
import experience_image_1 from './img/experience/experience1.jpg';

const Project = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "project_title1",
      image: project1img,
      video: project1vid,
      description: "project_description1",
      bgColor: "#e6f7ff", // Background color
      textColor: "#004080", // Text color
      tag: "# UX/UI",
      time: "2023 - 2024",
      place: "project_location1",
    },
    {
      id: 2,
      title: "project_title2",
      image: "https://example.com/project2-image.jpg",
      video: "https://example.com/project2",
      description: "project_description2",
      bgColor: "#fde2e4", // Background color
      textColor: "#cc0000", // Text color
      tag: "# UX/UI",
      time: "2023 - 2024",
      place: "project_location2",
    },
    {
      id: 3,
      title: "project_title3",
      image: "https://example.com/project3-image.jpg",
      video: "https://example.com/project3",
      description: "project_description3",
      bgColor: "#fff2cc", // Background color
      textColor: "#e68a00", // Text color
      tag: "# UX/UI",
      time: "2023 - 2024",
      place: "project_location3",
    },
    {
      id: 4,
      title: "project_title4",
      image: "https://example.com/project4-image.jpg",
      video: "https://example.com/project4",
      description: "project_description4",
      bgColor: "#fff2cc", // Background color
      textColor: "#e68a00", // Text color
      tag: "# UX/UI",
      time: "2023 - 2024",
      place: "project_location4",
    },
  ]);

  const [colorStop, setColorStop] = useState(0); // Initial color stop value
  const ProRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (ProRef.current) {
        const rect = ProRef.current.getBoundingClientRect();
        const newColorStop = rect.bottom < 1500 ? 1 : 0;
        setColorStop(newColorStop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Use rgba to control the opacity of the background color
  const backgroundColor = `rgba(76, 239, 110, ${colorStop})`;

  return (
    <div>
      <div className='w-full h-[360rem] pt-32 bg-white' ref={ProRef}>
      <div className='w-full h-[360rem] duration-[1s] -mt-[24rem] top-0 transition-all ease-in-out' style={{ backgroundColor }}>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;