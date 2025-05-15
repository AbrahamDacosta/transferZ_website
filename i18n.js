import { initReactI18next } from 'react-i18next';

import translationFR from '../public/locales/fr/common.json';
import translationEN from '../public/locales/en/common.json';

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;