import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en.json';
import vi from './languages/vi.json';

export const resources = {
  en,
  vi,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'vi',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
