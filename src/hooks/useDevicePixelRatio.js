import { useEffect, useState } from 'react';

const useDevicePixelRatio = (minScreenWidth = 768) => { // Set default min screen width if needed
  const [devicePixelRatio, setDevicePixelRatio] = useState(() => {
    if (typeof window !== 'undefined' && window.devicePixelRatio >= 2) {
      return (window.devicePixelRatio * 100) / window.devicePixelRatio;
    }
    return typeof window !== 'undefined' ? window.devicePixelRatio * 100 : 100;
  });

  const handleDevicePixelRatio = () => {
    if (typeof window !== 'undefined') {
      let value = window.devicePixelRatio * 100;
      if (window.devicePixelRatio >= 2) {
        value = (window.devicePixelRatio * 100) / window.devicePixelRatio;
      }
      setDevicePixelRatio(value);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.screen.width >= minScreenWidth) {
      window.addEventListener('resize', handleDevicePixelRatio);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleDevicePixelRatio);
      }
    };
  }, [minScreenWidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = document.querySelector('#main-content');
      if (container) {
        if (devicePixelRatio < 100) {
          container.style.maxWidth = devicePixelRatio + '%';
          container.style.margin = '0 auto';
        } else {
          container.style.removeProperty('max-width');
          container.style.removeProperty('margin');
        }
      }
    }
  }, [devicePixelRatio]);
};

export default useDevicePixelRatio;
