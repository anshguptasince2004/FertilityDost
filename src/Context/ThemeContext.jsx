import { style } from "framer-motion/client";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    color: "#e9f5ff",    
    logo: "/src/assets/FertilityDostLogo1.png",
    logo1: "/src/assets/FertilityDostLogo.png",
    footerColor: "#152346",
    logosize: "50px",
    marginLeft: "10%",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
