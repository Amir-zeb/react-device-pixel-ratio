import { useEffect, useState } from 'react';

/**
 * Custom hook to adjust container styles based on device pixel ratio.
 * @param {number} minScreenWidth - Minimum screen width to apply the logic. Default is 768px.
 */
const useDevicePixelRatio = (minScreenWidth = 768) => { 
  // Initialize state with the current device pixel ratio.
  // If window is not defined (e.g., during server-side rendering), default to 100.
  const [devicePixelRatio, setDevicePixelRatio] = useState(() => {
    if (typeof window !== 'undefined' && window.devicePixelRatio >= 2) {
      return (window.devicePixelRatio * 100) / window.devicePixelRatio;
    }
    return typeof window !== 'undefined' ? window.devicePixelRatio * 100 : 100;
  });

  // Function to handle device pixel ratio changes.
  const handleDevicePixelRatio = () => {
    if (typeof window !== 'undefined') {
      let value = window.devicePixelRatio * 100;
      if (window.devicePixelRatio >= 2) {
        value = (window.devicePixelRatio * 100) / window.devicePixelRatio;
      }
      setDevicePixelRatio(value);
    }
  };

  // Effect to add and remove the 'resize' event listener.
  // Runs only if the screen width is greater than or equal to minScreenWidth.
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

  // Effect to adjust container styles based on the device pixel ratio.
  // Runs whenever devicePixelRatio changes.
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
