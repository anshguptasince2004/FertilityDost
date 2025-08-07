import { style } from "framer-motion/client";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    color: "#ffececff",
    logo: "/src/assets/RedLogo.png",
    logo1: "/src/assets/RedLogo1.png",
    footerColor: "#4B0000",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
