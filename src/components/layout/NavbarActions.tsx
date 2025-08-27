'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function NavbarActions() {
    const { isAuthenticated, logout, user } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/'); // Redirect to home after logout
    };

    return (
        <div className='nav-actions'>
            {isAuthenticated ? (
                <>
                    <span style={{ marginRight: '1rem' }}>Hola, {user?.name}</span>
                    <button onClick={handleLogout} className='btn-outline-secondary'>
                        Cerrar Sesión
                    </button>
                </>
            ) : (
                <Link href="/login" className='btn-tk-primary'>
                    Iniciar Sesión
                </Link>
            )}
        </div>
    );
}
