'use client'

import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const { theme, setTheme } =useTheme();

    return (
        <div>
            The Current theme is: { there}
            <button onClick={()=> setTheme('Loght')}>Light</button>
            <button onClick={()=> setTheme('dark')}>Dark</button>
        </div>
    )
};

export default ThemeSwitcher;