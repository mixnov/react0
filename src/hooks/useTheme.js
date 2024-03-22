import { useState } from "react";

function useTheme(startingTheme = 'light') {

    const [theme, setTheme] = useState(startingTheme);

    return {
        theme,
        setTheme
    }

}

export default useTheme;