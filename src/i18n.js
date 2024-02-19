import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translations.json';
import translationZHCH from './locales/zh-CN/translations.json';
import translationZHTW from './locales/zh-TW/translations.json';

const resources = {
  en: {
    translations: translationEN,
  },
  "zh-CN": { // Note the quotes around zh-CN
    translations: translationZHCH,
  },
  "zh-TW": { // And around zh-TW as well
    translations: translationZHTW,
  },
};

i18n
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Automatic language detection.
  .use(LanguageDetector)
  // Backend plugin to load translations.
  .use(HttpBackend)
  .init({
    resources,
    fallbackLng: 'en', // Fallback language
    ns: ['translations'], // Default namespace, can have multiple
    defaultNS: 'translations',
    backend: {
      loadPath: '.np/locales/{{lng}}/{{ns}}.json',
    },
    debug: false,
    detection: {
      // Order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      
      // Keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',

      // Cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // Languages to not persist (cookie, localStorage)

      // Optional htmlTag with lang attribute, e.g., <html lang="en">
      htmlTag: document.documentElement,

      // Only detect languages that are in the whitelist
      checkWhitelist: true,
    },
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },
  });

export default i18n;
