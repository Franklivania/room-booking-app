import { useTheme } from "../context/ThemeContext";

type ToggleButtonProps = {
    type: "reset" | "button" | "submit";
    title?: string;
    className?: string;
    active?: boolean;
    activeClassName?:string;
    ariaLabel: string;
    isDark?: string;
    isLight?: string;
    disabled?: boolean;
    disabledClass?: string;
    children?: React.ReactNode;
    onClick?: React.ReactEventHandler<HTMLButtonElement>;
}

export default function ToggleButton(props:ToggleButtonProps) {
    const { theme } = useTheme();

    return(
        <button
            type={props.type}
            className={`
                relative flex items-center py-2 px-5 bg-transparent rounded-md cursor-pointer
                ${theme === "dark" ? props.isDark : props.isLight}
                ${props.active ? props.activeClassName : ''}
                ${props.disabled ? props.disabledClass : ''}
            `}
            aria-label={props.ariaLabel}
            aria-labelledby={props.ariaLabel}
            title={props.ariaLabel}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
            {props.title}
        </button>
    )
}