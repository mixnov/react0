import Header from "./Header";
import { useState } from "react";
import Speakers from "./Speakers";

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <div className={"container-fluid " + (theme === "light" ? "light" : "dark")} >
            <Header theme={theme} />
            <Speakers theme={theme} setTheme={setTheme} />
        </div>
    );
}

export default App;