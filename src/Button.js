import React from 'react';
import { useTranslation } from 'react-i18next';
import './Button.css';

const Button = () => {
  const { t } = useTranslation();
  return (
    <div className="learn-more">
      <span className="button-circle" aria-hidden="true">
        <span className="icon blue-arrow"></span>
      </span>
      <span className="button-text text-lg">{t('learnmore')}</span>
    </div>
  );
};

export default Button;
