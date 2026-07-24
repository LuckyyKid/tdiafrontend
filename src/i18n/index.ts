
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';

// Detect country and set language accordingly
const detectLanguageByCountry = async (): Promise<string> => {
  const savedLanguage = localStorage.getItem('language');
  
  // If user already chose a language, respect that choice
  if (savedLanguage) {
    return savedLanguage;
  }

  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code;
    
    // Set French for France (FR) and Canada (CA - for Quebec)
    if (countryCode === 'FR' || countryCode === 'CA') {
      return 'fr';
    }
  } catch (error) {
    console.log('Could not detect country, defaulting to English');
  }
  
  return 'en';
};

const initializeI18n = async () => {
  const language = await detectLanguageByCountry();

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslations
        },
        fr: {
          translation: frTranslations
        }
      },
      lng: language,
      fallbackLng: 'en',
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
      },
      debug: true, // Enable debug to see translation issues
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      }
    });
};

// Initialize i18n
initializeI18n();

export default i18n;
