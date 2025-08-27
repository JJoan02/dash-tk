'use client';
import React from 'react';
import styles from '../../components/dashboard/Dashboard.module.css';
import StatCard from '../../components/dashboard/StatCard';
import ActivityChart from '../../components/dashboard/ActivityChart';
import QuickActions from '../../components/dashboard/QuickActions';
import ThemeSwitcher from '../../components/theme/ThemeSwitcher'; // Import the new switcher
import { FaUsers, FaDollarSign, FaShoppingCart, FaChartLine } from 'react-icons/fa';

export default function AdminPage() {
    return (
        <div className={styles.gridContainer}>
            {/* The new, powerful ThemeSwitcher component */}
            <ThemeSwitcher />

            {/* Stat Cards */}
            <div className={styles.statCard}>
                <StatCard 
                    icon={<FaUsers />} 
                    title="Total Users" 
                    value="12,543" 
                    growth="+12% from last month" 
                    isPositive={true} 
                />
            </div>
            <div className={styles.statCard}>
                <StatCard 
                    icon={<FaDollarSign />} 
                    title="Revenue" 
                    value="$45,231" 
                    growth="+8% from last month" 
                    isPositive={true} 
                />
            </div>
            <div className={styles.statCard}>
                <StatCard 
                    icon={<FaShoppingCart />} 
                    title="Orders" 
                    value="1,234" 
                    growth="+23% from last month" 
                    isPositive={true} 
                />
            </div>
            <div className={styles.statCard}>
                <StatCard 
                    icon={<FaChartLine />} 
                    title="Growth" 
                    value="15.3%" 
                    growth="+2.1% from last month" 
                    isPositive={true} 
                />
            </div>
            
            {/* Main Content */}
            <div className={styles.activityChart}>
                <ActivityChart />
            </div>
            <div className={styles.quickActions}>
                <QuickActions />
            </div>
        </div>
    );
}
