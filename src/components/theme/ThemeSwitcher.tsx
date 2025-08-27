'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaPalette, FaImage, FaTrash } from 'react-icons/fa';
import Image from 'next/image';

const THEMES = [
    'dark', 'light', 'synthwave', 'dracula', 'halloween', 'christmas', 
    'new-year', 'valentine', 'joantk', 'ocean', 'forest', 'sakura'
];

const buttonStyle: React.CSSProperties = {
    padding: '0.5rem 0.75rem',
    cursor: 'pointer',
    border: '1px solid var(--tk-border)',
    backgroundColor: 'var(--tk-card-bg)',
    color: 'var(--tk-text-secondary)',
    borderRadius: '5px',
    textTransform: 'capitalize',
    flexGrow: 1,
    margin: '0.25rem'
};

const thumbnailStyle: React.CSSProperties = {
    width: '80px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '5px',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color 0.2s ease'
}

export default function ThemeSwitcher() {
    const { theme, setTheme, background, setBackground } = useTheme();
    const [backgrounds, setBackgrounds] = useState<string[]>([]);

    useEffect(() => {
        // Fetch the list of backgrounds from our new API route
        fetch('/api/theme/backgrounds')
            .then(res => res.json())
            .then(data => setBackgrounds(data))
            .catch(err => console.error("Failed to fetch backgrounds", err));
    }, []);

    return (
        <div style={{ 
            backgroundColor: 'var(--tk-card-bg)', 
            borderRadius: '0.75rem', 
            marginBottom: '1.5rem', 
            gridColumn: 'span 4',
            border: '1px solid var(--tk-border)',
            padding: '1.5rem'
        }}>
            {/* Theme Selection */}
            <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaPalette style={{ marginRight: '0.75rem' }} /> Temas
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {THEMES.map(t => (
                    <button 
                        key={t} 
                        onClick={() => setTheme(t)} 
                        style={{
                            ...buttonStyle,
                            borderColor: theme === t ? 'var(--tk-primary)' : 'var(--tk-border)',
                            color: theme === t ? 'var(--tk-primary)' : 'var(--tk-text-secondary)',
                        }}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Background Selection */}
            <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaImage style={{ marginRight: '0.75rem' }} /> Fondos de Pantalla
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
                {backgrounds.map(bg => (
                    <Image 
                        key={bg} 
                        src={`/fondos/${bg}`}
                        alt={bg}
                        width={80}
                        height={50}
                        style={{
                            ...thumbnailStyle,
                            borderColor: background === `/fondos/${bg}` ? 'var(--tk-primary)' : 'transparent'
                        }}
                        onClick={() => setBackground(`/fondos/${bg}`)}
                    />
                ))}
                <button onClick={() => setBackground(null)} style={{...buttonStyle, flexGrow: 0, marginLeft: '1rem'}} title="Quitar Fondo">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}
