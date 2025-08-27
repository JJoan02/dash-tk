'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../auth/Auth.module.css';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // For now, we will just use the mock login for the UI to work.
        // The backend logic for login would be implemented here.
        console.log(`TODO: Implement real login fetch to http://206.183.129.67:4000/api/v1/auth/login`);
        
        // Simulate successful login and update UI
        login(email, email.split('@')[0]);
        router.push('/dashboard');
    };

    return (
        <div className={styles.authContainer}>
            <div className={`card-tk ${styles.authCard}`}>
                <h1 className={styles.authTitle}>Iniciar Sesión</h1>
                {error && <p style={{color: 'var(--tk-danger)', textAlign: 'center'}}>{error}</p>}
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
                    <button type="submit" className={`btn-tk-primary ${styles.submitButton}`}>
                        Acceder
                    </button>
                </form>
                <div className={styles.switchLink}>
                    <p>¿No tienes una cuenta? <Link href="/register">Regístrate</Link></p>
                </div>
            </div>
        </div>
    );
}
