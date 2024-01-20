import React from 'react';
import './Button.css';

const Button = () => {
  return (
    <div className="learn-more">
      <span className="button-circle" aria-hidden="true">
        <span className="icon blue-arrow"></span>
      </span>
      <span className="button-text text-lg">了解更多</span>
    </div>
  );
};

export default Button;
