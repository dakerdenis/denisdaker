import { useState, useEffect } from 'react';

export const usePreloader = (minDuration = 1000) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const loadTime = Date.now() - startTime;
      const remainingTime = minDuration - loadTime;

      setTimeout(() => setIsLoaded(true), remainingTime > 0 ? remainingTime : 0);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [minDuration]);

  return isLoaded;
};
