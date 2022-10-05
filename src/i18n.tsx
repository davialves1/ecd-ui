import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next);
// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options

export { i18n };

const i18nConfig = {
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        hello: {
          title: 'ECD Project',
          welcome: 'Welcome',
          message: 'Current language: EN',
          button: 'Switch language to German',
        },
      },
    },
    de: {
      translation: {
        hello: {
          title: 'ECD Projekt',
          welcome: 'Willkommen',
          message: 'Aktuelle Sprache: DE',
          button: 'Sprache auf Englisch umstellen',
        },
      },
    },
  },
};

export { i18nConfig };
