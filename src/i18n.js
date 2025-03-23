// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language JSON files (e.g., English and French)
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import ar from './locales/ar.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import cn from './locales/cn.json';
import ja from './locales/ja.json';
import it from './locales/it.json';
import pt from './locales/pt.json';
import hi from './locales/hi.json';


i18n
  .use(initReactI18next) // Connects i18next with React
  .init({
    resources: {
      en: {translation: en},
      fr: {translation: fr},
      es: {translation: es},
      ar: {translation: ar},
      de: {translation: de},
      ru: {translation: ru},
      cn: {translation: cn},
      ja: {translation: ja},
      it: {translation: it},
      pt: {translation: pt},
      hi: {translation: hi},

    },
    lng: 'en',
    fallbackLng: 'en', // Fallback language in case of missing translation
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
