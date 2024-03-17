import Header from "./Header";
import { createContext, useState } from "react";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={
            { setTheme, theme, }
        }>
            <div className={"container-fluid " + (theme === "light" ? "light" : "dark")} >
                <Header />
                <Speakers />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;