// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language JSON files (e.g., English and French)
import en from './Locales/en.json';
import fr from './Locales/fr.json';
import es from './Locales/es.json';
import ar from './Locales/ar.json';
import de from './Locales/de.json';

i18n
  .use(initReactI18next) // Connects i18next with React
  .init({
    resources: {
      en: {translation: en},
      fr: {translation: fr},
      es: {translation: es},
      ar: {translation: ar},
      de: {translation: de},

    },
    lng: 'en',
    fallbackLng: 'en', // Fallback language in case of missing translation
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
