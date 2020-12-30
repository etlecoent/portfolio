import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {
  
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.querySelector('html').classList.add('dark')
  // } else {
  //   document.querySelector('html').classList.remove('dark')
  // }

  const enabled =
    typeof darkMode !== 'undefined' ? darkMode : false;

  // Fire off effect that add/removes dark mode class
  useEffect(() => {
    const element = window.document.body;
    if (enabled) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [enabled] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [darkMode, setDarkMode];
};

export { useDarkMode };

