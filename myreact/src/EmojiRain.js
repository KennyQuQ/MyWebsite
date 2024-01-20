import React, { useState, useEffect } from 'react';
import './Animation.css'; // Import the styles for AnimationPage
import Emoji from './Emoji';

const EmojiRain = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const emojiOptions = ['😀', '😃', '😄', '😁', '😆', '😂', '🤣', '😊', '😇',
    '🙂', '🙃', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛',
    '😜', '🤪', '😎', '🤩', '😏', '😌',
    '😤',
    '🥵', '😳',
    '🤭', '🤫', '🤥', '😶', '😯',
    '😮', '😲', '😴', '🤤', '😪',
    '🤑', '🤠', '👽',
    '👻', '🤖', '😺', '😸', '😹', '😻', '😼', '😽',
    ]; // Add more emojis as needed

    const emojiInterval = setInterval(() => {
      const newEmoji = {
        symbol: emojiOptions[Math.floor(Math.random() * emojiOptions.length)],
        left: Math.random() * window.innerWidth,
        top: -50,
        animationStartTime: performance.now(),
        initialAnimationSpeed: Math.random() * 1.0 + 0.05,
        gravityAcceleration: 1.0,
        fontSize: Math.random() * 50 + 50,
      };

      setEmojis((prevEmojis) => [...prevEmojis, newEmoji]);
    }, 200);

    return () => clearInterval(emojiInterval);
  }, []);

  const animateEmojis = () => {
    setEmojis((prevEmojis) =>
      prevEmojis.map((emoji) => {
        const elapsed = performance.now() - emoji.animationStartTime;
        const gravityEffect = 0.5 * emoji.gravityAcceleration * Math.pow(elapsed / 1000, 2);
        const translateY = (elapsed / 1000) * emoji.initialAnimationSpeed + emoji.top + gravityEffect;

        if (translateY < window.innerHeight + 50) {
          return { ...emoji, top: translateY };
        } else {
          return null;
        }
      }).filter((emoji) => emoji !== null)
    );

    requestAnimationFrame(animateEmojis);
  };

  useEffect(() => {
    requestAnimationFrame(animateEmojis);
  }, []);

  return (
    <div className="emoji-rain-container">
      {emojis.map((emoji, index) => (
        <Emoji
          key={index}
          symbol={emoji.symbol}
          style={{
            position: 'fixed',
            left: `${emoji.left}px`,
            top: `${emoji.top}px`,
            fontSize: `${emoji.fontSize}px`,
          }}
        />
      ))}
    </div>
  );
};

export default EmojiRain;