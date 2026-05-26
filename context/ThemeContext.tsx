"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeType =
  | "forest"
  | "danger"
  | "ocean"
  | "night";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext =
  createContext<ThemeContextType>({
    theme: "forest",
    setTheme: () => {},
  });

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [theme, setThemeState] =
    useState<ThemeType>("forest");

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme) {

      setThemeState(savedTheme as ThemeType);

    }

  }, []);

  const setTheme = (
    newTheme: ThemeType
  ) => {

    localStorage.setItem(
      "theme",
      newTheme
    );

    setThemeState(newTheme);

  };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}

export const useTheme = () =>
  useContext(ThemeContext);