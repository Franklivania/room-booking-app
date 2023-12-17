import { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState<Theme>(savedTheme ? (savedTheme as Theme) : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be used within the ThemeContext provider")
    };
    return context;
}

export {ThemeProvider, useTheme}