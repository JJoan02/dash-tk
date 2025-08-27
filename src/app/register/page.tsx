'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../auth/Auth.module.css';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch(`https://api.tk-host.fun/api/v1/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al registrar la cuenta.');
            }

            setSuccess('¡Cuenta creada con éxito! Serás redirigido para iniciar sesión.');
            
            // Automatically log in the user and redirect to dashboard after successful registration
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
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={`card-tk ${styles.authCard}`}>
                <h1 className={styles.authTitle}>Crear Cuenta</h1>
                {error && <p style={{color: 'var(--tk-danger)', textAlign: 'center'}}>{error}</p>}
                {success && <p style={{color: 'var(--tk-success)', textAlign: 'center'}}>{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className={styles.formInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            className={styles.formInput}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            className={styles.formInput}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className={`btn-tk-primary ${styles.submitButton}`}>
                        Registrarse
                    </button>
                </form>
                <div className={styles.switchLink}>
                    <p>¿Ya tienes una cuenta? <Link href="/login">Inicia Sesión</Link></p>
                </div>
            </div>
        </div>
    );
}
