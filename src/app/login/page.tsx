'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../auth/Auth.module.css';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch(`https://api.tk-host.fun/api/v1/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al iniciar sesión.');
            }

            // Robustness check: Ensure data.user exists before using it
            if (data && data.user) {
                login(data.user.email, data.user.name, data.user.role);
                router.push('/dashboard');
            } else {
                throw new Error('La respuesta del servidor no incluyó los datos del usuario.');
            }

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error inesperado.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={`card-tk ${styles.authCard}`}>
                <h1 className={styles.authTitle}>Iniciar Sesión</h1>
                {error && <p style={{color: 'var(--tk-danger)', textAlign: 'center'}}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    {/* Form groups... */}
                    <button type="submit" className={`btn-tk-primary ${styles.submitButton}`} disabled={isLoading}>
                        {isLoading ? <FaSpinner className={styles.spinner} /> : 'Acceder'}
                    </button>
                </form>
                <div className={styles.switchLink}>
                    <p>¿No tienes una cuenta? <Link href="/register">Regístrate</Link></p>
                </div>
            </div>
        </div>
    );
}
