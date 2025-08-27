
import React from 'react';
import styles from './Dashboard.module.css';

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    growth: string;
    isPositive: boolean;
}

export default function StatCard({ icon, title, value, growth, isPositive }: StatCardProps) {
    return (
        <div className={`${styles.card} ${styles.statCard}`}>
            <div className={styles.statCardHeader}>
                <h3>{title}</h3>
                <div className={styles.statIcon}>{icon}</div>
            </div>
            <div className={styles.statValue}>{value}</div>
            <div className={`${styles.statGrowth} ${isPositive ? styles.positive : ''}`}>
                <span>{growth}</span>
            </div>
            {/* Placeholder for the small chart */}
            <div style={{ height: '50px', width: '100%', marginTop: '1rem', opacity: 0.5 }}>
                <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0 20 Q 10 5, 20 20 T 40 20 T 60 20 T 80 20 T 100 20" stroke={isPositive ? '#28a745' : '#dc3545'} fill="none" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    );
}
