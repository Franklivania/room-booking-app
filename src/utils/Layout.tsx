import { useTheme } from "../context/ThemeContext";

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
    const { theme } = useTheme();

    return(
        <main role="main" className={`w-screeen h-screen overflow-x-hidden font-poppins ${theme === 'dark' ? '' : ''}`}>
            {children}
        </main>
    )
}