import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {
  
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

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

