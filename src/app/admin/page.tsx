'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../components/dashboard/Dashboard.module.css';
import StatCard from '../../components/dashboard/StatCard';
import ActivityChart from '../../components/dashboard/ActivityChart';
import QuickActions from '../../components/dashboard/QuickActions';
import ThemeSwitcher from '../../components/theme/ThemeSwitcher';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import { FaUsers, FaDollarSign, FaShoppingCart, FaChartLine, FaSpinner } from 'react-icons/fa';

// Define a type for our stats data
interface AdminStats {
    totalUsers: { value: string; growth: string; };
    revenue: { value: string; growth: string; };
    orders: { value: string; growth: string; };
    growth: { value: string; growth: string; };
}

export default function AdminPage() {
    const { user } = useAuth(); // Get user from auth context
    const [stats, setStats] = useState<AdminStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/admin/stats');
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error("Failed to fetch admin stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className={styles.gridContainer}>
            {/* Conditionally render ThemeSwitcher based on user role */}
            {user && user.role === 'admin' && <ThemeSwitcher />}

            {loading ? (
                <div className={styles.loadingOverlay}>
                    <FaSpinner className={styles.spinner} />
                    <p>Cargando datos del panel...</p>
                </div>
            ) : stats && (
                <>
                    {/* Stat Cards... */}
                </>
            )}
            
            <div className={styles.activityChart}>
                <ActivityChart />
            </div>
            <div className={styles.quickActions}>
                <QuickActions />
            </div>
        </div>
    );
}
