import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from "react";
import getTheme from "./theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode || "dark";
  });

  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
