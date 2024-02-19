import React from 'react';
import { useTranslation } from 'react-i18next';

const SmallPrograms = () => {
  const { t } = useTranslation();
  const programsData = [
    {
      title: 'program_title1',
      description: 'program_description1',
      timeToMake: 'program_time1',
      link: './html/placeArrangement.html',
    },
    {
      title: 'program_title2',
      description: 'program_description2',
      timeToMake: 'program_time2',
      link: './html/placeArrangement(sixClass).html',
    },
    {
      title: 'program_title3',
      description: 'program_description3',
      timeToMake: 'program_time3',
      link: './foodOrder/index.html',
    },
    // Add more programs as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 reveal">
      <h1 className="text-7xl font-bold mb-16 text-center text-green-500">{t('program_bigtitle')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programsData.map((program, index) => (
          <div key={index} className="relative overflow-hidden bg-green-500 rounded-lg p-6 transform hover:rotate-3 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h1 className="text-3xl text-white mb-2 font-bold">{t(program.title)}</h1>
            <p className="text-white mb-4">{t(program.description)}</p>
            <p className="text-white opacity-80">{t(program.timeToMake)}</p>
            <a href={program.link}>
              <button className="mt-4 bg-white text-green-500 py-2 px-8 rounded-full cursor-pointer text-lg font-bold transform hover:scale-110 transition-transform duration-300 hover:bg-green-700 hover:text-white">
                按我!
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallPrograms;