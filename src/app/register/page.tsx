'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../auth/Auth.module.css';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`https://api.tk-host.fun/api/v1/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al registrar la cuenta.');
            }

            setSuccess('¡Cuenta creada! Redirigiendo al dashboard...');
            
            setTimeout(() => {
                login(email, email.split('@')[0]);
                router.push('/dashboard');
            }, 2000);

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error inesperado.');
            }
        } finally {
            // Don't set loading to false on success because we are navigating away
            if (error) setIsLoading(false);
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={`card-tk ${styles.authCard}`}>
                <h1 className={styles.authTitle}>Crear Cuenta</h1>
                {error && <p style={{color: 'var(--tk-danger)', textAlign: 'center'}}>{error}</p>}
                {success && <p style={{color: 'var(--tk-success)', textAlign: 'center'}}>{success}</p>}
                <form onSubmit={handleSubmit}>
                    {/* Form groups... */}
                    <button type="submit" className={`btn-tk-primary ${styles.submitButton}`} disabled={isLoading}>
                        {isLoading ? <FaSpinner className={styles.spinner} /> : 'Registrarse'}
                    </button>
                </form>
                <div className={styles.switchLink}>
                    <p>¿Ya tienes una cuenta? <Link href="/login">Inicia Sesión</Link></p>
                </div>
            </div>
        </div>
    );
}
