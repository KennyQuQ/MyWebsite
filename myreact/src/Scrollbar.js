import React from 'react';

const Scrollbar = () => {
  const containerStyle = {
    height: '300px',
    overflowY: 'scroll',
    scrollbarWidth: 'thin',  // For Firefox
    scrollbarColor: 'darkgray lightgray',  // For Firefox
  };

  const contentStyle = {
    height: '500px', // Adjust the content height as needed
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Your scrollable content goes here */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
      </div>
    </div>
  );
};

export default Scrollbar;
