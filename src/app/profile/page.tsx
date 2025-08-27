'use client';

import React from 'react';

export default function ProfilePage() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Mi Perfil</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--tk-text-secondary)' }}>
                Próximamente: Aquí podrás ver y editar la información de tu cuenta.
            </p>
        </div>
    );
}
