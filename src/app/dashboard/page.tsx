'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './Dashboard.module.css';
import ServerList from '../../components/dashboard/ServerList';
import { FaSpinner } from 'react-icons/fa';

// Interface to match the real, detailed API response from your backend
interface Server {
    id: number;
    uuid: string;
    name: string;
    ip: string;
    port: number;
    memory: number;
    disk: number;
    status: string;
    cpuUsage: string;
    ramUsage: string;
}

interface DashboardData {
    welcomeMessage: string;
    tkCoinsBalance: number;
    servers: Server[];
}

export default function DashboardPage() {
    const { user } = useAuth();
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!user || !user.name) {
            setLoading(false);
            return; // Don't fetch if user is not logged in
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`https://api.tk-host.fun/api/v1/dashboard/user/${user.name}`);
                
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ message: 'Error fetching dashboard data.' }));
                    throw new Error(errorData.message || 'No se pudieron cargar los datos del dashboard.');
                }

                const dashboardData = await response.json();
                setData(dashboardData);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Ocurrió un error inesperado.');
                }
                console.error("Failed to fetch dashboard data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    if (loading) {
        return (
            <div className={styles.dashboardContainer} style={{ textAlign: 'center', paddingTop: '5rem' }}>
                <FaSpinner className={styles.spinner} />
                <p style={{ marginTop: '1rem', color: 'var(--tk-text-secondary)' }}>Cargando tu dashboard...</p>
            </div>
        );
    }

    if (error) {
        return <div className={styles.dashboardContainer}><p style={{color: 'var(--tk-danger)', textAlign: 'center'}}>{error}</p></div>;
    }

    if (!user) {
        return <div className={styles.dashboardContainer}><p>Por favor, <a href="/login">inicia sesión</a> para ver tu dashboard.</p></div>;
    }

    if (!data || data.servers.length === 0) {
        return (
            <div className={styles.dashboardContainer}>
                <h1 className={styles.welcomeTitle}>Bienvenido, {user.name}</h1>
                <p className={styles.welcomeSubtitle}>Aún no tienes servidores asignados.</p>
            </div>
        );
    }

    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.welcomeTitle}>{data.welcomeMessage}</h1>
            <p className={styles.welcomeSubtitle}>
                Tienes un saldo de <strong>{data.tkCoinsBalance} TK-Coins</strong>. Gestiona tus servicios desde aquí.
            </p>

            <ServerList servers={data.servers} />
        </div>
    );
}