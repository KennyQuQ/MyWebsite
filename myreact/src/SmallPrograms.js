import React from 'react';

const SmallPrograms = () => {
  const programsData = [
    {
      title: '座位表',
      description: '座位表生成器 OWO',
      timeToMake: '2 hours',
      link: './html/placeArrangement.html',
    },
    {
      title: '座位表 - 六個班',
      description: '座位表生成器 - 六個班',
      timeToMake: 'so many hours',
      link: './html/placeArrangement(sixClass).html',
    },
    {
      title: 'Mcdonald',
      description: 'Mcdonald OWO',
      timeToMake: '6 hours',
      link: './foodOrder/index.html',
    },
    // Add more programs as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-7xl font-bold mb-16 text-center text-green-500">我的小程序</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programsData.map((program, index) => (
          <div key={index} className="relative overflow-hidden bg-green-500 rounded-lg p-6 transform hover:rotate-3 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h1 className="text-3xl text-white mb-2 font-bold">{program.title}</h1>
            <p className="text-white mb-4">{program.description}</p>
            <p className="text-white opacity-80">{program.timeToMake} to make</p>
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