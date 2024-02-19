import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './loader.css';

const Preloader = ({ images, children, onLoad }) => {
  const [preloaded, setPreloaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dotCount, setDotCount] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = src;
          image.onload = resolve;
          image.onerror = () => reject(new Error(`Error loading image: ${src}`));
        });
      });

      try {
        await Promise.all(imagePromises);
        setLoading(false);
        setPreloaded(true);
        onLoad && onLoad(); // Call the onLoad callback if provided
      } catch (error) {
        console.error('Error preloading images:', error.message);
        setLoading(false);
      }
    };

    const intervalId = setInterval(() => {
        setDotCount((prevCount) => (prevCount < 3 ? prevCount + 1 : 1));
      }, 500);

    // Use window.onload to ensure the preloading starts after the entire website is loaded
    window.onload = preloadImages;

    // Clean up the event listener to avoid memory leaks
    return () => {
      clearInterval(intervalId);
      window.onload = null;
    };
  }, [images, onLoad]);

  const getLoadingText = () => {
    return t('loading') + '.'.repeat(dotCount);
  };

  return loading ? (
    <div className="flex items-center justify-center h-screen bg-[#f2f7fc] text-[#0aa2ad]">
      <div className="loader-container">
        <div className="loader-circle"></div>
        <div className="loader-line"></div>
        <div className="loader-text">{getLoadingText()}</div>
      </div>
    </div>
  ) : (
    children
  );
};

export default Preloader;
