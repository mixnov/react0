import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";

function Layout({ startingTheme, children }) {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>
                {children}
            </LayoutNoThemeProvider>
        </ThemeProvider>
    );
}

function LayoutNoThemeProvider({ children }) {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={"container-fluid " + (theme === "light" ? "light" : "dark")} >
            {children}
        </div>
    );
}

export default Layout;