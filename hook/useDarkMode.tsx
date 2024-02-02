"use client";

import { DARK_THEME_KEY } from "@/constant/localStorage";
import { useEffect, useState } from "react";


const useDarkMode = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    initTheme();
  }, []);

  const initTheme = () => {
    if (!localStorage.getItem(DARK_THEME_KEY)) {
      localStorage.setItem(DARK_THEME_KEY, `true`);
      document!.documentElement!.classList.add("dark");
      setDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem(DARK_THEME_KEY)!
      );
      isDarkTheme && document!.documentElement!.classList.add("dark");
      setDarkTheme(() => {
        return isDarkTheme;
      });
    }
  };

  const toggleDarkTheme = () => {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem(DARK_THEME_KEY)!
    );
    setDarkTheme(!isDarkTheme);
    document!.documentElement!.classList.toggle("dark");
    localStorage.setItem(DARK_THEME_KEY, `${!isDarkTheme}`);
  };

  return {darkTheme, toggleDarkTheme}
};

export default useDarkMode;
