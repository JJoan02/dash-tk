'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../components/dashboard/Dashboard.module.css';
import StatCard from '../../components/dashboard/StatCard';
import ActivityChart from '../../components/dashboard/ActivityChart';
import QuickActions from '../../components/dashboard/QuickActions';
import ThemeSwitcher from '../../components/theme/ThemeSwitcher';
import { FaUsers, FaDollarSign, FaShoppingCart, FaChartLine, FaSpinner } from 'react-icons/fa';

// Define a type for our stats data
interface AdminStats {
    totalUsers: { value: string; growth: string; };
    revenue: { value: string; growth: string; };
    orders: { value: string; growth: string; };
    growth: { value: string; growth: string; };
}

export default function AdminPage() {
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
                // Optionally, set an error state here
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className={styles.gridContainer}>
            <ThemeSwitcher />

            {loading ? (
                <div className={styles.loadingOverlay}>
                    <FaSpinner className={styles.spinner} />
                    <p>Cargando datos del panel...</p>
                </div>
            ) : stats && (
                <>
                    <div className={styles.statCard}>
                        <StatCard 
                            icon={<FaUsers />} 
                            title="Total Users" 
                            value={stats.totalUsers.value} 
                            growth={stats.totalUsers.growth} 
                            isPositive={true} 
                        />
                    </div>
                    <div className={styles.statCard}>
                        <StatCard 
                            icon={<FaDollarSign />} 
                            title="Revenue" 
                            value={stats.revenue.value} 
                            growth={stats.revenue.growth} 
                            isPositive={true} 
                        />
                    </div>
                    <div className={styles.statCard}>
                        <StatCard 
                            icon={<FaShoppingCart />} 
                            title="Orders" 
                            value={stats.orders.value} 
                            growth={stats.orders.growth} 
                            isPositive={true} 
                        />
                    </div>
                    <div className={styles.statCard}>
                        <StatCard 
                            icon={<FaChartLine />} 
                            title="Growth" 
                            value={stats.growth.value} 
                            growth={stats.growth.growth} 
                            isPositive={true} 
                        />
                    </div>
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
