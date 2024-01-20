// Emoji.js
import React from 'react';

const Emoji = ({ symbol, style, onAnimationEnd }) => (
    <span onAnimationEnd={onAnimationEnd} style={style} role="img" aria-label="emoji">
      {symbol}
    </span>
  );

export default Emoji;
