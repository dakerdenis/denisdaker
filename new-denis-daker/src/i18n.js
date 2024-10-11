import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Import the translation files
import en from './locales/en.json';
import ru from './locales/ru.json';
import az from './locales/az.json';



i18n
    .use(LanguageDetector) // Language detection plugin
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            az: { translation: az },
          },
        fallbackLng: 'en', // Default language if no detection
        interpolation: {
            escapeValue: false // React already escapes by default
        }
    });

export default i18n;
