'use client';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaPalette, FaImage, FaTrash } from 'react-icons/fa';

const THEMES = [
    'dark', 
    'light', 
    'synthwave', 
    'dracula', 
    'halloween', 
    'christmas', 
    'new-year', 
    'valentine', 
    'joantk',
    'ocean',
    'forest',
    'sakura'
];
const BACKGROUNDS = [
    '(m=eaSaaTbaAaaaa)(mh=KBOl-HQQzjhFmBzP)16.jpg',
    '(m=eaSaaTbaAaaaa)(mh=KOcpRNwj2_jF4Vz3)5.jpg',
    'anime-school-uniform-anime-girls-hentai-ouji-to-warawanai-neko-visual-novel-maimaki-mai-yokodera-youto-wallpaper-preview.jpg',
    'preview.jpg',
    'tumblr_mnkrvnHF2I1stqrf7o2_1280.jpg',
    'tumblr_mqo8widC6p1stqrf7o2_1280.jpg'
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

export default function ThemeSwitcher() {
    const { theme, setTheme, setBackground } = useTheme();

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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {BACKGROUNDS.map(bg => (
                    <button key={bg} onClick={() => setBackground(`/fondos/${bg}`)} style={buttonStyle}>
                        {bg.substring(0, 20)}...
                    </button>
                ))}
                <button onClick={() => setBackground(null)} style={{...buttonStyle, color: 'var(--tk-danger)'}}>
                    <FaTrash style={{ marginRight: '0.5rem' }}/> Quitar Fondo
                </button>
            </div>
        </div>
    );
}
