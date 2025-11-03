import { useEffect, useState } from "react";
import Card from "./Components/Card";
import { ThemeContextProvider } from "./Context/themeContext";
import ThemeBtn from "./Components/ThemeBtn";


function App() {

  const [defaultMode, setDefaultMode] = useState("light");


  const lightMode = () => {
    setDefaultMode("light")
  }

  const darkMode = () => {
    setDefaultMode("dark")
  }

  //actuall change in theme

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove("light", "dark")
    htmlElement.classList.add(defaultMode)
  }, [defaultMode])

  return (
    <ThemeContextProvider value={{defaultMode, lightMode, darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
