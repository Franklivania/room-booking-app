import { useTheme } from "../context/ThemeContext";
import { Icon } from "@iconify/react";
import ToggleButton from "./ToggleButton";


export default function ThemeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <ToggleButton
            type="button"
            ariaLabel="theme toggle button"
            onClick={toggleTheme}
            className="!rounded-full border"
            isDark="border-orange"
            isLight="border-cyan"
        >
            {theme === 'dark' ? <Icon icon="wi:moon-new" className="text-2xl" /> : <Icon icon="wi:day-sunny" className="text-2xl" />}
        </ToggleButton>
    )
}
