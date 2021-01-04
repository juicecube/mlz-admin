import React, { useState, useEffect } from 'react';

const useDarkTheme = (callback: Function, observed: any) => {
  const [theme, toggleTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    toggleTheme(!!observed ? 'dark' : 'light');
    callback?.(theme);
  }, observed);
  useEffect(() => {
    if (theme === 'dark') {
      // 当dark时，加载对应的style
    }
  }, [theme]);
  return { theme };
};

export default useDarkTheme;
