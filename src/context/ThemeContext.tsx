'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const ALL_THEMES = [
    'dark', 'light', 'synthwave', 'dracula', 'halloween', 'christmas', 
    'new-year', 'valentine', 'joantk', 'ocean', 'forest', 'sakura'
];

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    background: string | null;
    setBackground: (background: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setThemeState] = useState('dark');
    const [background, setBackgroundState] = useState<string | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('tk-theme') || 'dark';
        setThemeState(savedTheme);
        const savedBg = localStorage.getItem('tk-background');
        setBackgroundState(savedBg);
    }, []);

    useEffect(() => {
        // BUG FIX: Use classList to avoid removing existing body classes
        const bodyClasses = document.body.classList;
        // Remove all possible theme classes
        ALL_THEMES.forEach(t => bodyClasses.remove(`theme-${t}`));
        // Add the current theme class
        bodyClasses.add(`theme-${theme}`);
        
        localStorage.setItem('tk-theme', theme);
    }, [theme]);

    useEffect(() => {
        const bgValue = background ? `url(${background})` : 'none';
        document.documentElement.style.setProperty('--tk-background-image', bgValue);
        if (background) {
            localStorage.setItem('tk-background', background);
        } else {
            localStorage.removeItem('tk-background');
        }
    }, [background]);

    const setTheme = (newTheme: string) => {
        setThemeState(newTheme);
    };

    const setBackground = (newBg: string | null) => {
        setBackgroundState(newBg);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, background, setBackground }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
