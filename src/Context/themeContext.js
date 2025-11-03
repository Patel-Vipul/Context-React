import { createContext, useContext } from "react";

const ThemeContext = createContext({
  defaultMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export default ThemeContext;

export const ThemeContextProvider = ThemeContext.Provider

//custom Hook
export function useTheme(){
    return useContext(ThemeContext)
} 
