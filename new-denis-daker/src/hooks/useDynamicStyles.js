import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useDynamicStyles = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const applyStylesheet = (stylesheetPath) => {
      const existingStylesheet = document.getElementById('language-style');
      if (existingStylesheet) {
        existingStylesheet.remove();
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = stylesheetPath;
      link.id = 'language-style';

      // Make sure it's appended after all other stylesheets
      document.head.appendChild(link);
    };

    // Apply the correct CSS based on the current language
    if (i18n.language === 'ru') {
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/style_ru.css`);
    } else if (i18n.language === 'az') {
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/style_az.css`);
    } else {
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/style_en.css`); // Default to English
    }

    // Clean up: remove the stylesheet when language changes
    return () => {
      const stylesheet = document.getElementById('language-style');
      if (stylesheet) {
        stylesheet.remove();
      }
    };
  }, [i18n.language]);
};
