'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import styles from './Dashboard.module.css';
import { FaServer } from 'react-icons/fa';

export default function DashboardPage() {
    const { user } = useAuth();

    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.welcomeTitle}>Bienvenido de vuelta, {user?.name || 'Usuario'}</h1>
            <p className={styles.welcomeSubtitle}>Gestiona tus servicios y configuraciones desde aquí.</p>

            <div className="featuresGrid">
                <Link href="/servers" className={`card-tk ${styles.actionCard}`}>
                    <h2><FaServer /> Gestionar mis Servidores</h2>
                    <p>Ver, iniciar, detener y administrar todos tus servidores activos.</p>
                </Link>
                {/* Add other action cards here in the future */}
            </div>
        </div>
    );
}